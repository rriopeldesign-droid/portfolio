// paint.js: every silhouette in the forest, drawn in code at load time.
//
// Each painter draws into four greyscale layers and packs them into one RGBA texture:
//   A = mask    (the silhouette itself)
//   R = warm    (parts that glow peach: lantern paper, cabin windows, embers)
//   G = glow    (parts that glow jungle green: fungi, root veins, eyes, spores)
//   B = detail  (bark cracks, hollows, wood grain; the shader darkens these)
// Lighting (moon rim, lantern light, fog) happens later in the shader, so one
// texture can be lit differently wherever it stands.

export function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Smooth 1D value noise in [-1, 1]
function makeNoise(rng) {
  const tbl = Array.from({ length: 256 }, () => rng() * 2 - 1);
  return (x) => {
    const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
    const a = tbl[i & 255], b = tbl[(i + 1) & 255];
    return a + (b - a) * u;
  };
}

const TAU = Math.PI * 2;
const UP = -Math.PI / 2;

class Painter {
  constructor(w, h, seed) {
    this.w = w; this.h = h;
    this.r = makeRng(seed);
    this.n = makeNoise(this.r);
    const mk = () => {
      const c = document.createElement("canvas");
      c.width = w; c.height = h;
      const x = c.getContext("2d", { willReadFrequently: true });
      x.fillStyle = x.strokeStyle = "#fff";
      x.lineCap = "round"; x.lineJoin = "round";
      return x;
    };
    this.m = mk(); this.g = mk(); this.d = mk(); this.wm = mk();
    this.anchors = {};
  }
  rand(a, b) { return a + (b - a) * this.r(); }
  pick(arr) { return arr[Math.floor(this.r() * arr.length)]; }
  anchor(name, x, y) { this.anchors[name] = [x / this.w, 1 - y / this.h]; }

  // Pack the four layers into one texture (rows flipped for WebGL, so flipY stays off)
  pack() {
    const { w, h } = this;
    const M = this.m.getImageData(0, 0, w, h).data;
    const G = this.g.getImageData(0, 0, w, h).data;
    const D = this.d.getImageData(0, 0, w, h).data;
    const R = this.wm.getImageData(0, 0, w, h).data;
    const out = new Uint8Array(w * h * 4);
    for (let y = 0; y < h; y++) {
      const src = y * w * 4, dst = (h - 1 - y) * w * 4;
      for (let x = 0; x < w * 4; x += 4) {
        const px = x >> 2;
        const edge = Math.min(px, w - 1 - px, y, h - 1 - y) / (Math.min(w, h) * 0.03);
        const a = edge < 1 ? M[src + x + 3] * Math.max(0, edge) : M[src + x + 3];
        out[dst + x] = Math.min(R[src + x + 3], a);
        out[dst + x + 1] = Math.min(G[src + x + 3], a);
        out[dst + x + 2] = D[src + x + 3];
        out[dst + x + 3] = a;
      }
    }
    // Keep a coarse copy of the mask for pointer hit tests
    return { data: out, w, h, aspect: w / h, anchors: this.anchors };
  }
}

// ── Drawing primitives ────────────────────────────────────────────────────────

// A tapered limb along a polyline. wf(t) gives the width at t in [0, 1].
function ribbon(ctx, pts, wf, rough = 0, nz = null) {
  const n = pts.length;
  if (n < 2) return;
  const L = [], R = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let dx = b[0] - a[0], dy = b[1] - a[1];
    const len = Math.hypot(dx, dy) || 1;
    dx /= len; dy /= len;
    const nx = -dy, ny = dx;
    const t = i / (n - 1);
    const w = wf(t) * 0.5;
    const j1 = nz ? nz(i * 0.37 + 11.3) * rough : 0;
    const j2 = nz ? nz(i * 0.41 + 57.1) * rough : 0;
    L.push([pts[i][0] + nx * (w + j1), pts[i][1] + ny * (w + j1)]);
    R.push([pts[i][0] - nx * (w + j2), pts[i][1] - ny * (w + j2)]);
  }
  ctx.beginPath();
  ctx.moveTo(L[0][0], L[0][1]);
  for (let i = 1; i < n; i++) ctx.lineTo(L[i][0], L[i][1]);
  for (let i = n - 1; i >= 0; i--) ctx.lineTo(R[i][0], R[i][1]);
  ctx.closePath();
  ctx.fill();
  const w1 = wf(1) * 0.5;
  if (w1 > 0.6) { ctx.beginPath(); ctx.arc(pts[n - 1][0], pts[n - 1][1], w1, 0, TAU); ctx.fill(); }
}

// Wander from a point: returns a polyline that turns a little each step
function walk(p, x, y, ang, len, steps, { turn = 0.3, bias = 0, toward = UP, kink = 0 } = {}) {
  const pts = [[x, y]];
  let a = ang;
  const step = len / steps;
  for (let i = 1; i <= steps; i++) {
    a += (p.r() - 0.5) * turn + (toward - a) * bias;
    if (kink && p.r() < kink) a += (p.r() - 0.5) * 1.1; // angular, knuckled turns
    x += Math.cos(a) * step; y += Math.sin(a) * step;
    pts.push([x, y]);
  }
  return { pts, a };
}

// Irregular blob (foliage clumps, rocks, mushroom caps)
function blob(ctx, p, cx, cy, rx, ry, { rough = 0.25, verts = 22, spike = 0, rot = 0 } = {}) {
  ctx.beginPath();
  const off = p.r() * 100;
  for (let i = 0; i <= verts; i++) {
    const t = (i / verts) * TAU;
    let k = 1 + p.n(off + i * 0.7) * rough;
    if (spike && i % 2) k *= 1 + spike * (0.4 + p.r() * 0.6);
    const x = Math.cos(t) * rx * k, y = Math.sin(t) * ry * k;
    const xr = x * Math.cos(rot) - y * Math.sin(rot), yr = x * Math.sin(rot) + y * Math.cos(rot);
    i ? ctx.lineTo(cx + xr, cy + yr) : ctx.moveTo(cx + xr, cy + yr);
  }
  ctx.closePath();
  ctx.fill();
}

function dot(ctx, x, y, r) { ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); }

function poly(ctx, pts) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();
}

// Recursive branching, shared by the old trees, dead trees and antlers
function branches(p, ctx, x, y, ang, len, w, depth, opts, tips) {
  const steps = 7;
  const { pts, a } = walk(p, x, y, ang, len, steps, {
    turn: opts.turn ?? 0.35, bias: opts.bias ?? 0.04, toward: opts.toward ?? UP, kink: opts.kink ?? 0.15,
  });
  ribbon(ctx, pts, (t) => w * (1 - t * 0.6), w * 0.08, p.n);
  if (opts.curl && depth === 0) {
    // Claw-like curl at the very end of a twig
    let ca = a, cx = pts[steps][0], cy = pts[steps][1];
    const cp = [[cx, cy]];
    for (let i = 0; i < 6; i++) { ca += opts.curl; cx += Math.cos(ca) * len * 0.06; cy += Math.sin(ca) * len * 0.06; cp.push([cx, cy]); }
    ribbon(ctx, cp, (t) => w * 0.4 * (1 - t), 0);
  }
  if (depth <= 0) { tips.push([pts[steps][0], pts[steps][1], a, w]); return; }
  const kids = 2 + (p.r() < (opts.extra ?? 0.4) ? 1 : 0);
  for (let k = 0; k < kids; k++) {
    const at = pts[Math.floor(steps * (0.45 + p.r() * 0.55))];
    const spread = opts.spread ?? 1.2;
    branches(p, ctx, at[0], at[1], a + (p.r() - 0.5) * spread * 2 * (k === 0 ? 0.6 : 1),
      len * (0.55 + p.r() * 0.25), w * (0.55 + p.r() * 0.12), depth - 1, opts, tips);
  }
}

// ── Painters ─────────────────────────────────────────────────────────────────

// An ancient broadleaf: a massive twisted trunk, flaring roots, a dark crown.
export function paintGnarled(seed, { W = 768, H = 1536, glow = 0.5, crown = 1, hollowEyes = false, roots = 1 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g, d, n } = p;
  const ground = H * 0.985;
  const topY = H * p.rand(0.44, 0.52);
  const N = 70;
  const x0 = W * p.rand(0.44, 0.56);
  const lean = p.rand(-0.08, 0.08);
  const trunk = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    trunk.push([x0 + n(t * 2.6 + 3) * W * 0.06 + lean * t * W + Math.sin(t * 7 + seed) * W * 0.01, ground - t * (ground - topY)]);
  }
  const baseW = W * p.rand(0.12, 0.16), topW = W * 0.04;
  const widthAt = (t) => baseW * (1 - t) + topW * t + Math.exp(-t * 10) * W * 0.13;
  ribbon(m, trunk, widthAt, W * 0.012, n);

  // Roots that grip the ground
  const rootCount = Math.round(p.rand(4, 7) * roots);
  for (let k = 0; k < rootCount; k++) {
    const side = k % 2 ? 1 : -1;
    const sx = x0 + side * baseW * p.rand(0.1, 0.45);
    const sy = ground - H * p.rand(0.02, 0.06);
    const len = Math.min(W * p.rand(0.18, 0.42), side > 0 ? W - sx - 8 : sx - 8);
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push([sx + side * len * t + n(t * 4 + k * 9) * W * 0.012,
        sy + (ground - sy) * (1 - Math.pow(1 - t, 2)) - Math.sin(t * Math.PI) * H * 0.012]);
    }
    const rw = W * p.rand(0.035, 0.06);
    ribbon(m, pts, (t) => rw * Math.pow(1 - t, 1.2) + 1.5, W * 0.004, n);
    // Bioluminescent veins and spores along the root
    if (glow > 0) {
      g.globalAlpha = 0.55 * glow;
      g.lineWidth = Math.max(1.2, rw * 0.12);
      g.beginPath();
      pts.slice(2, 20).forEach(([x, y], i) => (i ? g.lineTo(x, y - rw * 0.15) : g.moveTo(x, y - rw * 0.15)));
      g.stroke();
      g.globalAlpha = 1;
      for (let i = 3; i < 22; i++) if (p.r() < 0.35 * glow) {
        const [x, y] = pts[i]; dot(g, x + p.rand(-3, 3), y - rw * 0.3 * (1 - i / 24), p.rand(1.2, 3.2));
      }
    }
  }

  // Limbs and crown
  const tips = [];
  const limbCount = Math.round(p.rand(4, 7));
  for (let k = 0; k < limbCount; k++) {
    const t = p.rand(0.45, 0.98);
    const at = trunk[Math.floor(t * N)];
    const side = p.r() < 0.5 ? -1 : 1;
    branches(p, m, at[0], at[1], UP + side * p.rand(0.5, 1.15), H * p.rand(0.11, 0.17), widthAt(t) * 0.42, 3,
      { spread: 0.7, bias: 0.05, kink: 0.25 }, tips);
  }
  const top = trunk[N];
  for (let k = 0; k < 3; k++) branches(p, m, top[0], top[1], UP + (k - 1) * 0.5, H * 0.14, topW * 0.9, 3, { spread: 0.6 }, tips);

  if (crown > 0) {
    for (const [x, y] of tips) {
      const c = Math.round(p.rand(1, 3) * crown);
      for (let i = 0; i < c; i++) {
        const rr = W * p.rand(0.035, 0.085) * crown;
        blob(m, p, x + p.rand(-rr, rr), y + p.rand(-rr, rr * 0.5), rr * p.rand(1, 1.6), rr, { rough: 0.45, verts: 26, spike: 0.35 });
        // Texture inside the canopy
        for (let s = 0; s < 6; s++) dot(d, x + p.rand(-rr, rr), y + p.rand(-rr, rr), p.rand(2, 6));
      }
    }
  }

  // Bark cracks
  d.globalAlpha = 0.7;
  for (let k = 0; k < 26; k++) {
    const t0 = p.rand(0, 0.85), len = p.rand(0.05, 0.25);
    d.lineWidth = p.rand(1, 3.5);
    const off = p.rand(-0.38, 0.38);
    d.beginPath();
    for (let i = 0; i <= 12; i++) {
      const t = t0 + (len * i) / 12;
      const idx = Math.min(N, Math.floor(t * N));
      const [x, y] = trunk[idx];
      const px = x + off * widthAt(t) + n(i * 0.8 + k * 3) * 3;
      i ? d.lineTo(px, y) : d.moveTo(px, y);
    }
    d.stroke();
  }
  d.globalAlpha = 1;

  // A hollow in the trunk; sometimes something looks out of it
  const ht = p.rand(0.18, 0.4), hp = trunk[Math.floor(ht * N)];
  const hw = widthAt(ht) * p.rand(0.18, 0.28);
  blob(d, p, hp[0] + p.rand(-0.15, 0.15) * widthAt(ht), hp[1], hw * 0.6, hw, { rough: 0.2 });
  if (hollowEyes) {
    dot(g, hp[0] - hw * 0.18, hp[1] - hw * 0.1, Math.max(1.5, hw * 0.07));
    dot(g, hp[0] + hw * 0.18, hp[1] - hw * 0.1, Math.max(1.5, hw * 0.07));
  }

  // Shelf fungi that glow
  if (glow > 0) {
    const clusters = Math.round(p.rand(2, 5) * glow + 1);
    for (let c = 0; c < clusters; c++) {
      const t = p.rand(0.04, 0.45);
      const [x, y] = trunk[Math.floor(t * N)];
      const side = p.r() < 0.5 ? -1 : 1;
      const ex = x + side * widthAt(t) * 0.5;
      for (let s = 0; s < 3; s++) {
        const fw = W * p.rand(0.012, 0.03), fy = y + s * fw * 0.9;
        for (const ctx of [m, g]) {
          ctx.beginPath();
          ctx.ellipse(ex + side * fw * 0.3, fy, fw, fw * 0.32, 0, side > 0 ? -Math.PI / 2 : Math.PI / 2, side > 0 ? Math.PI / 2 : Math.PI * 1.5, side < 0);
          ctx.fill();
        }
      }
    }
  }
  p.anchor("base", x0, ground);
  p.anchor("top", top[0], top[1]);
  const t20 = trunk[Math.floor(0.2 * N)];
  p.anchor("t20", t20[0], t20[1]);
  p.anchors.w20 = [widthAt(0.2) / W, 0];
  return p.pack();
}

// A towering cedar: straight trunk, drooping tiers of needles, a spire.
export function paintCedar(seed, { W = 640, H = 1536, spire = true } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d, n } = p;
  const ground = H * 0.99;
  const cx = W * 0.5 + p.rand(-0.03, 0.03) * W;
  const lean = p.rand(-0.03, 0.03) * W;
  const topY = spire ? H * 0.02 : -H * 0.05;
  const trunk = [];
  for (let i = 0; i <= 50; i++) { const t = i / 50; trunk.push([cx + lean * t + n(t * 3) * 4, ground - t * (ground - topY)]); }
  const bw = W * p.rand(0.055, 0.075);
  ribbon(m, trunk, (t) => bw * (1 - t * 0.85) + Math.exp(-t * 14) * W * 0.06, 2, n);

  // Tiers from the top down; the lowest third is bare trunk
  const bottom = H * p.rand(0.55, 0.7);
  let y = topY + H * 0.03;
  let side = 1;
  while (y < bottom) {
    const t = (y - topY) / (bottom - topY);
    const len = W * (0.04 + 0.34 * Math.pow(t, 1.15)) * p.rand(0.82, 1.12);
    const tx = cx + lean * (1 - (ground - y) / (ground - topY));
    for (const s of [side, -side]) {
      if (p.r() < 0.12 && t > 0.3) continue; // a missing branch here and there
      const droop = len * p.rand(0.28, 0.5);
      const pts = [[tx, y - len * 0.05]];
      const segs = 14;
      for (let i = 1; i <= segs; i++) {
        const u = i / segs;
        pts.push([tx + s * len * u, y - len * 0.03 * Math.sin(u * Math.PI) + droop * u]);
      }
      // Ragged needle fringe hanging under the branch
      for (let i = segs; i >= 0; i--) {
        const u = i / segs;
        const base = [tx + s * len * u, y + droop * u];
        const hang = H * 0.022 * (1 - u * 0.5) * (0.5 + p.r());
        pts.push([base[0] + s * p.rand(-3, 3), base[1] + hang]);
        pts.push([base[0] - s * len * 0.02, base[1] + hang * 0.3]);
      }
      poly(m, pts);
      for (let k = 0; k < 4; k++) dot(d, tx + s * len * p.rand(0.2, 0.9), y + droop * 0.4 + p.rand(-4, 8), p.rand(1.5, 4));
    }
    side = -side;
    y += H * p.rand(0.016, 0.028) * (0.7 + t * 0.6);
  }
  d.globalAlpha = 0.6;
  for (let k = 0; k < 10; k++) {
    d.lineWidth = p.rand(1, 2.5);
    const ox = p.rand(-0.35, 0.35) * bw, y0 = p.rand(bottom, ground);
    d.beginPath(); d.moveTo(cx + ox, y0); d.lineTo(cx + ox + p.rand(-3, 3), Math.min(ground, y0 + p.rand(40, 160))); d.stroke();
  }
  d.globalAlpha = 1;
  return p.pack();
}

// A dead tree with claw-like twigs and hanging moss strands.
export function paintDead(seed, { W = 768, H = 1280 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d, n } = p;
  const ground = H * 0.985;
  const x0 = W * p.rand(0.45, 0.55);
  const trunk = walk(p, x0, ground, UP, H * p.rand(0.45, 0.6), 30, { turn: 0.12, bias: 0.06, kink: 0.08 }).pts;
  const bw = W * p.rand(0.07, 0.1);
  ribbon(m, trunk, (t) => bw * (1 - t * 0.7) + Math.exp(-t * 9) * W * 0.07, 3, n);
  for (let k = 0; k < 4; k++) {
    const side = k % 2 ? 1 : -1;
    const sx = x0 + side * bw * 0.3;
    const len = Math.min(W * p.rand(0.12, 0.28), side > 0 ? W - sx - 8 : sx - 8);
    const pts = [];
    for (let i = 0; i <= 16; i++) { const t = i / 16; pts.push([sx + side * len * t, ground - H * 0.03 * (1 - t) - Math.sin(t * 3) * 4]); }
    ribbon(m, pts, (t) => bw * 0.4 * (1 - t) + 1.5, 2, n);
  }
  const tips = [];
  const limbs = Math.round(p.rand(3, 5));
  for (let k = 0; k < limbs; k++) {
    const at = trunk[Math.floor(p.rand(0.4, 1) * (trunk.length - 1))];
    branches(p, m, at[0], at[1], UP + (p.r() < 0.5 ? -1 : 1) * p.rand(0.4, 1.3), H * p.rand(0.12, 0.22), bw * 0.4, 4,
      { spread: 0.9, kink: 0.35, turn: 0.5, curl: p.rand(-0.35, 0.35), extra: 0.3 }, tips);
  }
  // Hanging moss
  m.lineWidth = 1.4;
  for (const [x, y] of tips) {
    if (p.r() < 0.5) continue;
    const len = p.rand(30, 120);
    m.beginPath(); m.moveTo(x, y);
    m.quadraticCurveTo(x + p.rand(-8, 8), y + len * 0.5, x + p.rand(-6, 6), y + len);
    m.stroke();
  }
  const hp = trunk[Math.floor(trunk.length * 0.3)];
  blob(d, p, hp[0], hp[1], bw * 0.2, bw * 0.35, { rough: 0.25 });
  return p.pack();
}

// A fern: fronds arching out of the ground, leaflets along each one.
export function paintFern(seed, { W = 512, H = 384, glow = 0 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g } = p;
  const fronds = Math.round(p.rand(7, 12));
  for (let k = 0; k < fronds; k++) {
    const bx = W * 0.5 + p.rand(-0.06, 0.06) * W;
    const spread = (k / (fronds - 1) - 0.5) * 2.4 + p.rand(-0.15, 0.15);
    const len = H * p.rand(0.55, 0.95);
    const pts = [];
    let a = UP + spread * 0.55, x = bx, y = H;
    for (let i = 0; i <= 26; i++) {
      pts.push([x, y]);
      a += spread * 0.025 + 0.012 * Math.sign(spread || 1);
      x += Math.cos(a) * len / 26; y += Math.sin(a) * len / 26;
    }
    m.lineWidth = 2.2;
    m.beginPath(); pts.forEach(([px, py], i) => (i ? m.lineTo(px, py) : m.moveTo(px, py))); m.stroke();
    for (let i = 3; i < pts.length - 1; i++) {
      const [px, py] = pts[i], [qx, qy] = pts[i + 1];
      const ang = Math.atan2(qy - py, qx - px);
      const ll = (1 - i / pts.length) * H * 0.09 + 3;
      for (const s of [-1, 1]) {
        const la = ang + s * 1.25;
        poly(m, [[px, py], [px + Math.cos(la) * ll + Math.cos(ang) * 4, py + Math.sin(la) * ll + Math.sin(ang) * 4], [qx, qy]]);
      }
    }
    if (glow && p.r() < 0.6) { const [tx, ty] = pts[pts.length - 1]; dot(g, tx, ty, 3); dot(m, tx, ty, 3); }
  }
  return p.pack();
}

// A strip of tall grass for path edges and foregrounds.
export function paintGrass(seed, { W = 1024, H = 256, spores = 0.03 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g, n } = p;
  const blades = Math.round(W * 0.28);
  for (let k = 0; k < blades; k++) {
    const x = p.rand(0, W);
    const clump = (n(x * 0.012) + 1) * 0.5;
    const h = H * (0.18 + 0.78 * clump * p.rand(0.5, 1));
    const bw = p.rand(2.5, 7);
    const bend = (p.r() - 0.5) * h * 0.55 + n(x * 0.02 + 40) * h * 0.25;
    poly(m, [[x - bw, H], [x - bw * 0.3 + bend * 0.45, H - h * 0.55], [x + bend, H - h], [x + bw * 0.3 + bend * 0.5, H - h * 0.5], [x + bw, H]]);
    if (p.r() < spores) { dot(g, x + bend, H - h, 2.4); dot(m, x + bend, H - h, 2.4); }
  }
  return p.pack();
}

// Angular boulders with a fringe of glowing moss.
export function paintRocks(seed, { W = 768, H = 384, moss = 0.5 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g, d } = p;
  const count = Math.round(p.rand(2, 4));
  for (let k = 0; k < count; k++) {
    const cx = W * p.rand(0.2, 0.8), rw = W * p.rand(0.14, 0.3), rh = H * p.rand(0.35, 0.8);
    const verts = [];
    const nv = 9;
    for (let i = 0; i < nv; i++) {
      const t = Math.PI + (i / (nv - 1)) * Math.PI;
      verts.push([cx + Math.cos(t) * rw * p.rand(0.8, 1.1), H - Math.max(0, -Math.sin(t)) * rh * p.rand(0.8, 1.05)]);
    }
    verts.push([cx + rw, H], [cx - rw, H]);
    poly(m, verts);
    d.lineWidth = 2;
    d.beginPath(); d.moveTo(cx + p.rand(-rw, rw) * 0.5, H - rh * 0.8); d.lineTo(cx + p.rand(-rw, rw) * 0.4, H - rh * 0.3); d.stroke();
    if (moss) {
      g.globalAlpha = moss;
      for (let i = 1; i < nv - 1; i++) {
        const [x, y] = verts[i];
        if (p.r() < 0.6) blob(g, p, x, y + 4, p.rand(6, 16), p.rand(3, 6), { rough: 0.5 });
      }
      g.globalAlpha = 1;
    }
  }
  return p.pack();
}

// The trails signpost: four boards pointing different ways, rope around the post.
export function paintSignpost(seed, { W = 640, H = 1024 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d } = p;
  const cx = W * 0.5, pw = W * 0.05;
  poly(m, [[cx - pw, H], [cx - pw * 0.8, H * 0.2], [cx - pw * 0.2, H * 0.17], [cx + pw * 0.9, H * 0.21], [cx + pw, H]]);
  const boards = [
    { y: 0.26, dir: -1, len: 0.42, a: -0.08 },
    { y: 0.34, dir: 1, len: 0.38, a: 0.1 },
    { y: 0.43, dir: -1, len: 0.34, a: 0.14 },
    { y: 0.51, dir: 1, len: 0.4, a: -0.12 },
  ];
  for (const b of boards) {
    const bh = H * 0.055, len = W * b.len;
    const y = H * b.y, x = cx;
    const ca = Math.cos(b.a), sa = Math.sin(b.a);
    const tr = (u, v) => [x + (u * ca - v * sa) * b.dir, y + (u * sa + v * ca)];
    poly(m, [tr(-pw * 1.4, -bh / 2), tr(len - bh * 0.6, -bh / 2), tr(len, 0), tr(len - bh * 0.6, bh / 2), tr(-pw * 1.4, bh / 2)]);
    d.globalAlpha = 0.6; d.lineWidth = 1.5;
    for (let k = 0; k < 3; k++) { const v = (k - 1) * bh * 0.25; const a = tr(0, v), c = tr(len * 0.8, v + p.rand(-2, 2)); d.beginPath(); d.moveTo(...a); d.lineTo(...c); d.stroke(); }
    d.globalAlpha = 1;
  }
  // Rope wound around the post with strands hanging down
  m.lineWidth = 5;
  for (let k = 0; k < 4; k++) { const y = H * 0.6 + k * 9; m.beginPath(); m.moveTo(cx - pw * 1.2, y); m.lineTo(cx + pw * 1.2, y + 6); m.stroke(); }
  m.lineWidth = 2.5;
  for (let k = 0; k < 5; k++) { const x = cx + p.rand(-pw, pw); m.beginPath(); m.moveTo(x, H * 0.63); m.quadraticCurveTo(x + p.rand(-12, 12), H * 0.68, x + p.rand(-6, 6), H * p.rand(0.7, 0.76)); m.stroke(); }
  return p.pack();
}

// The workshop: a crooked cabin with a ragged roof and a warm window.
export function paintCabin(seed, { W = 1024, H = 896 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d, wm } = p;
  const g0 = H * 0.98;
  // Stilts and stones
  for (let k = 0; k < 5; k++) blob(m, p, W * (0.22 + k * 0.14), g0 - 6, W * 0.035, H * 0.03, { rough: 0.3 });
  // Walls
  poly(m, [[W * 0.2, g0 - H * 0.03], [W * 0.205, H * 0.5], [W * 0.79, H * 0.49], [W * 0.8, g0 - H * 0.03]]);
  // Chimney
  poly(m, [[W * 0.64, H * 0.4], [W * 0.645, H * 0.2], [W * 0.715, H * 0.205], [W * 0.71, H * 0.4]]);
  // Roof with a ragged thatch edge
  const roof = [[W * 0.1, H * 0.55], [W * 0.5, H * 0.15], [W * 0.92, H * 0.54]];
  for (let i = 20; i >= 0; i--) { const x = W * 0.1 + (W * 0.82 * i) / 20; roof.push([x, H * 0.55 + (i % 2 ? p.rand(10, 26) : p.rand(0, 6))]); }
  poly(m, roof);
  // Log lines
  d.globalAlpha = 0.65; d.lineWidth = 2;
  for (let y = H * 0.6; y < g0 - 20; y += 22) { d.beginPath(); d.moveTo(W * 0.2, y + p.rand(-2, 2)); d.lineTo(W * 0.8, y + p.rand(-2, 2)); d.stroke(); }
  d.globalAlpha = 1;
  // Door, dark, with a crack of warm light
  poly(d, [[W * 0.57, g0 - H * 0.03], [W * 0.57, H * 0.66], [W * 0.68, H * 0.66], [W * 0.68, g0 - H * 0.03]]);
  wm.lineWidth = 3; wm.beginPath(); wm.moveTo(W * 0.678, H * 0.67); wm.lineTo(W * 0.678, g0 - H * 0.04); wm.stroke();
  // Window: warm panes, dark cross bars
  const wx0 = W * 0.29, wx1 = W * 0.45, wy0 = H * 0.63, wy1 = H * 0.79;
  wm.fillRect(wx0, wy0, wx1 - wx0, wy1 - wy0);
  wm.globalCompositeOperation = "destination-out";
  wm.fillRect((wx0 + wx1) / 2 - 4, wy0, 8, wy1 - wy0);
  wm.fillRect(wx0, (wy0 + wy1) / 2 - 4, wx1 - wx0, 8);
  wm.globalCompositeOperation = "source-over";
  p.anchor("window", (wx0 + wx1) / 2, (wy0 + wy1) / 2);
  // Porch lantern
  m.lineWidth = 3; m.beginPath(); m.moveTo(W * 0.74, H * 0.58); m.lineTo(W * 0.74, H * 0.62); m.stroke();
  blob(m, p, W * 0.74, H * 0.645, W * 0.016, H * 0.026, { rough: 0.05 });
  blob(wm, p, W * 0.74, H * 0.645, W * 0.013, H * 0.022, { rough: 0.05 });
  p.anchor("lantern", W * 0.74, H * 0.645);
  p.anchor("chimney", W * 0.68, H * 0.2);
  return p.pack();
}

// The lookout: a broken rock ledge with a single windswept pine.
export function paintLookout(seed, { W = 1280, H = 896 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g, d } = p;
  const pts = [[0, H], [0, H * 0.62]];
  let x = 0, y = H * 0.62;
  while (x < W * 0.78) { x += p.rand(30, 80); y += p.rand(-40, 18); y = Math.max(H * 0.36, y); pts.push([x, y]); }
  pts.push([W * 0.86, H * 0.4], [W * 0.88, H * 0.48], [W * 0.84, H * 0.62], [W * 0.92, H * 0.8], [W, H * 0.9], [W, H]);
  poly(m, pts);
  d.lineWidth = 2.5; d.globalAlpha = 0.7;
  for (let k = 0; k < 10; k++) { const sx = p.rand(0.05, 0.8) * W; d.beginPath(); d.moveTo(sx, H * p.rand(0.55, 0.7)); d.lineTo(sx + p.rand(-40, 40), H * p.rand(0.8, 1)); d.stroke(); }
  d.globalAlpha = 1;
  g.globalAlpha = 0.5;
  for (let i = 2; i < pts.length - 4; i++) if (p.r() < 0.5) blob(g, p, pts[i][0], pts[i][1] + 5, p.rand(8, 22), p.rand(3, 7), { rough: 0.5 });
  g.globalAlpha = 1;
  // Windswept pine on the ledge, leaning away from the drop
  const bx = W * 0.62, by = pts.reduce((best, q) => (Math.abs(q[0] - bx) < Math.abs(best[0] - bx) ? q : best))[1] + 6;
  const trunk = [];
  for (let i = 0; i <= 30; i++) { const t = i / 30; trunk.push([bx - t * t * W * 0.12, by - t * H * 0.34]); }
  ribbon(m, trunk, (t) => W * 0.026 * (1 - t * 0.7), 2, p.n);
  for (let k = 0; k < 6; k++) {
    const [tx, ty] = trunk[Math.floor(p.rand(0.35, 1) * 30)];
    const len = W * p.rand(0.06, 0.16);
    const pad = [[tx, ty]];
    for (let i = 1; i <= 10; i++) pad.push([tx - len * (i / 10), ty - Math.sin((i / 10) * Math.PI) * 12 + p.rand(-3, 3)]);
    for (let i = 10; i >= 0; i--) pad.push([tx - len * (i / 10) + p.rand(-4, 4), ty + p.rand(8, 22)]);
    poly(m, pad);
  }
  return p.pack();
}

// DateNight: a young sapling whose leaves glow. New growth.
export function paintSapling(seed, { W = 512, H = 768 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g } = p;
  const ground = H * 0.97;
  const trunk = walk(p, W * 0.5, ground, UP, H * 0.55, 20, { turn: 0.15, bias: 0.08 }).pts;
  ribbon(m, trunk, (t) => 12 * (1 - t * 0.7), 1, p.n);
  const tips = [];
  for (let k = 0; k < 5; k++) {
    const at = trunk[Math.floor(p.rand(0.4, 1) * 20)];
    branches(p, m, at[0], at[1], UP + (p.r() - 0.5) * 2, H * p.rand(0.08, 0.16), 4, 1, { spread: 0.7 }, tips);
  }
  for (const [x, y] of tips) for (let i = 0; i < 5; i++) {
    const lx = x + p.rand(-26, 26), ly = y + p.rand(-22, 14), rot = p.rand(0, Math.PI);
    for (const ctx of [m, g]) blob(ctx, p, lx, ly, 9, 4.5, { rough: 0.05, rot });
  }
  // A ring of small glowing mushrooms around the base
  for (let k = 0; k < 9; k++) {
    const mx = W * 0.5 + (k - 4) * W * 0.09 + p.rand(-8, 8), mh = p.rand(10, 26);
    m.lineWidth = 3; m.beginPath(); m.moveTo(mx, ground + 4); m.lineTo(mx, ground - mh); m.stroke();
    for (const ctx of [m, g]) { ctx.beginPath(); ctx.ellipse(mx, ground - mh, p.rand(6, 11), 5, 0, Math.PI, 0); ctx.fill(); }
  }
  return p.pack();
}

// Something tall between the trees: antlers, a hunched cloak, long arms. Two green eyes.
export function paintFigure(seed, { W = 448, H = 1536 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, g } = p;
  const cx = W * 0.5, headY = H * 0.17, shoulderY = H * 0.2;
  // Cloak
  const hem = [];
  for (let i = 0; i <= 16; i++) { const u = i / 16; hem.push([cx - W * 0.33 + u * W * 0.66, H * (0.94 + (i % 2 ? p.rand(0.01, 0.05) : 0))]); }
  poly(m, [[cx - W * 0.14, shoulderY], [cx + W * 0.14, shoulderY], [cx + W * 0.22, H * 0.5], ...hem.reverse(), [cx - W * 0.22, H * 0.5]]);
  // Head, pushed forward and low
  blob(m, p, cx, headY, W * 0.07, H * 0.026, { rough: 0.1 });
  // Long arms hanging past the knees
  for (const s of [-1, 1]) {
    const arm = [];
    for (let i = 0; i <= 20; i++) { const t = i / 20; arm.push([cx + s * (W * 0.15 + Math.sin(t * 2.6) * W * 0.07), shoulderY + t * H * 0.55]); }
    ribbon(m, arm, (t) => 16 * (1 - t * 0.5), 1.5, p.n);
    const [hx, hy] = arm[20];
    m.lineWidth = 3.2;
    for (let f = 0; f < 4; f++) { m.beginPath(); m.moveTo(hx, hy); m.quadraticCurveTo(hx + s * (f - 1.5) * 6, hy + 40, hx + s * (f - 1.5) * 9 + s * 4, hy + p.rand(70, 95)); m.stroke(); }
  }
  // Antlers
  const tips = [];
  for (const s of [-1, 1]) branches(p, m, cx + s * W * 0.03, headY - H * 0.015, UP + s * 0.55, H * 0.08, 7, 3,
    { spread: 0.7, kink: 0.4, turn: 0.45, toward: UP + s * 0.4, bias: 0.06 }, tips);
  // Eyes
  for (const s of [-1, 1]) { for (const ctx of [m, g]) dot(ctx, cx + s * W * 0.025, headY + 2, 3.2); }
  p.anchor("eyes", cx, headY + 2);
  return p.pack();
}

// Long fingers curled around a trunk, reaching from behind it.
export function paintHand(seed, { W = 640, H = 384 } = {}) {
  const p = new Painter(W, H, seed);
  const { m } = p;
  const fingers = [0.22, 0.4, 0.58, 0.76];
  fingers.forEach((fy, k) => {
    const len = W * p.rand(0.62, 0.8) * (k === 3 ? 0.85 : 1);
    const pts = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      const curl = Math.pow(t, 3) * H * 0.18;
      pts.push([W - t * len, H * fy + curl + Math.sin(t * 9 + k) * 2]);
    }
    const knuckle = (t) => 1 + 0.35 * Math.exp(-Math.pow((t - 0.33) * 14, 2)) + 0.3 * Math.exp(-Math.pow((t - 0.66) * 14, 2));
    ribbon(m, pts, (t) => H * 0.075 * (1 - t * 0.55) * knuckle(t), 0.8, p.n);
    const [tx, ty] = pts[30];
    poly(m, [[tx + 6, ty - 6], [tx - 20, ty + 10], [tx + 2, ty + 6]]); // claw
  });
  return p.pack();
}

// A lantern post with a paper lantern hanging from its arm.
export function paintLanternPost(seed, { W = 320, H = 896 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d, wm } = p;
  const cx = W * 0.3;
  poly(m, [[cx - 9, H], [cx - 7, H * 0.08], [cx + 7, H * 0.08], [cx + 9, H]]);
  m.lineWidth = 9; m.beginPath(); m.moveTo(cx, H * 0.1); m.quadraticCurveTo(cx + W * 0.25, H * 0.05, cx + W * 0.42, H * 0.1); m.stroke();
  const lx = cx + W * 0.42;
  m.lineWidth = 2; m.beginPath(); m.moveTo(lx, H * 0.1); m.lineTo(lx, H * 0.16); m.stroke();
  m.fillRect(lx - W * 0.09, H * 0.155, W * 0.18, H * 0.012);
  m.fillRect(lx - W * 0.09, H * 0.3, W * 0.18, H * 0.012);
  blob(m, p, lx, H * 0.23, W * 0.15, H * 0.075, { rough: 0.02, verts: 30 });
  blob(wm, p, lx, H * 0.23, W * 0.14, H * 0.07, { rough: 0.02, verts: 30 });
  d.globalAlpha = 0.45; d.lineWidth = 2;
  for (let k = -2; k <= 2; k++) { d.beginPath(); d.ellipse(lx, H * 0.23 + k * H * 0.022, W * 0.14 * Math.cos(k * 0.35), 3, 0, 0, Math.PI); d.stroke(); }
  d.globalAlpha = 1;
  p.anchor("lantern", lx, H * 0.23);
  return p.pack();
}

// A paper lantern on a cord, for hanging from branches (the grove's project lanterns).
export function paintHangingLantern(seed, { W = 160, H = 768 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, d, wm } = p;
  const cx = W / 2, cy = H * 0.83, rh = H * 0.085;
  m.lineWidth = 2; m.beginPath(); m.moveTo(cx, 0); m.lineTo(cx, cy - rh); m.stroke();
  m.fillRect(cx - W * 0.22, cy - rh - 3, W * 0.44, 6);
  m.fillRect(cx - W * 0.22, cy + rh - 3, W * 0.44, 6);
  blob(m, p, cx, cy, W * 0.36, rh, { rough: 0.02, verts: 30 });
  blob(wm, p, cx, cy, W * 0.33, rh * 0.92, { rough: 0.02, verts: 30 });
  d.globalAlpha = 0.4; d.lineWidth = 2;
  for (let k = -2; k <= 2; k++) { d.beginPath(); d.ellipse(cx, cy + k * rh * 0.3, W * 0.33 * Math.cos(k * 0.38), 3, 0, 0, Math.PI); d.stroke(); }
  d.globalAlpha = 1;
  m.lineWidth = 2; m.beginPath(); m.moveTo(cx, cy + rh); m.lineTo(cx, cy + rh + H * 0.05); m.stroke();
  p.anchor("lantern", cx, cy);
  return p.pack();
}

// The campfire: a ring of stones and crossed logs with glowing embers.
export function paintCampfire(seed, { W = 640, H = 256 } = {}) {
  const p = new Painter(W, H, seed);
  const { m, wm } = p;
  for (let k = 0; k < 11; k++) {
    const t = k / 10;
    blob(m, p, W * (0.12 + t * 0.76), H * 0.9 - Math.sin(t * Math.PI) * H * 0.1, W * p.rand(0.035, 0.055), H * p.rand(0.07, 0.11), { rough: 0.25 });
  }
  const logs = [[-0.5, 0.36], [0.45, 0.64], [-0.15, 0.5], [0.2, 0.42]];
  for (const [a, x] of logs) {
    const cx = W * x, cy = H * 0.72, L = W * 0.2;
    const pts = [[cx - Math.cos(a) * L, cy + Math.sin(-a) * L * 0.3 + 18], [cx + Math.cos(a) * L, cy - Math.sin(-a) * L * 0.3 - 30]];
    m.lineWidth = 20; m.beginPath(); m.moveTo(...pts[0]); m.lineTo(...pts[1]); m.stroke();
  }
  for (let k = 0; k < 40; k++) dot(wm, W * p.rand(0.33, 0.67), H * p.rand(0.6, 0.85), p.rand(1.5, 4));
  return p.pack();
}
