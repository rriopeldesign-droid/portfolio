// world.js: builds the forest. A 2.5D diorama: painted cutouts standing at depth,
// a path that winds between them, lanterns, landmarks, and things that watch.
import {
  Scene, Vector3, Vector4, Matrix4, Quaternion, Mesh, InstancedMesh, PlaneGeometry, BufferGeometry,
  InstancedBufferAttribute, Float32BufferAttribute, ShaderMaterial, DataTexture, RGBAFormat,
  LinearFilter, LinearMipmapLinearFilter, DoubleSide, AdditiveBlending, Points,
} from "three";
import * as P from "./paint.js";
import * as S from "./shaders.js";

export const pathX = (z) => 2.2 * Math.sin(z * 0.045) + 1.2 * Math.sin(z * 0.11 + 1.3);

const hex = (h) => new Vector3(((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255);
export const C = {
  warm: hex(0xfeb192),      // peach: the human world
  ember: hex(0xb8552f),
  glow: hex(0x01b36c),      // jungle: the spirit world
  moon: hex(0x8fbdb2),      // cold teal moonlight on edges
  base: hex(0x040e0a),      // near silhouettes
  fog: hex(0x0c2624),
  fogLow: hex(0x123532),
  top: hex(0x010609),
  horizon: hex(0x1a3f3b),
  halo: hex(0x8f6556),
  ridge0: hex(0x143532),
  ridge1: hex(0x11312e),
  ridge2: hex(0x0c2624),
  ground: hex(0x030a07),
  path: hex(0x111a17),
};

// Where the walker stands at each stop, and where each landmark lives
export const STOPS = [
  { id: "arrival", cam: 9, look: 0 },
  { id: "trails", cam: -15, look: 1.8 },
  { id: "grove", cam: -41, look: 2.2, lookPortrait: 3.6 }, // portrait turns further, so the waypost is in frame
  { id: "sapling", cam: -69, look: 1.3 },
  { id: "workshop", cam: -92, look: -2.4 },
  { id: "lookout", cam: -117, look: 3.4 },
  { id: "campfire", cam: -141, look: 0.4 },
];

// The grove: each project is a tree, grown by its impact. The waypost at the edge of the
// grove carries one arrow board per project; the boards are the links.
export const PROJECTS = [
  { id: "onboarding", name: "Host Onboarding", value: "$3.4M", impact: 3.4, url: "/case-studies/host-onboarding.html", dx: 6.2, z: -60 },
  { id: "dashboard", name: "Host Dashboard", value: "$1.5M", impact: 1.5, url: "/case-studies/host-dashboard.html", dx: 9.4, z: -54.5 },
  { id: "lifecycle", name: "Lifecycle Email", value: "$1.2M", impact: 1.2, url: "/case-studies/lifecycle-campaigns.html", dx: 13, z: -63 },
  { id: "payinfull", name: "Pay-in-Full", value: "+$1M", impact: 1.0, url: "/case-studies/pay-in-full.html", dx: 7.4, z: -69 },
  { id: "claims", name: "Inspection & Claims", value: "$500K", impact: 0.5, url: null, dx: 16, z: -58 },
];
const BOARDS = [
  ...PROJECTS.filter((p) => p.url).map((p) => ({ id: p.id, name: p.name, value: p.value, url: p.url, tree: p.id })),
  { id: "all", name: "All the work", value: "", url: "/work.html", tree: null },
];
const WAYPOST = { dx: 2.6, z: -47.5 };

// Yield to the browser between paint jobs without timer throttling (background tabs clamp setTimeout)
const chan = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
const queue = [];
if (chan) chan.port1.onmessage = () => queue.shift()?.();
let lastYield = performance.now();
const idle = () => {
  if (performance.now() - lastYield < 30) return Promise.resolve();
  return new Promise((r) => { queue.push(() => { lastYield = performance.now(); r(); }); chan ? chan.port2.postMessage(0) : setTimeout(() => queue.shift()?.(), 0); });
};

function toTexture(pk) {
  const t = new DataTexture(pk.data, pk.w, pk.h, RGBAFormat);
  t.flipY = false;
  t.generateMipmaps = true;
  t.minFilter = LinearMipmapLinearFilter;
  t.magFilter = LinearFilter;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

export async function buildWorld({ quality = 1, onProgress = () => {} } = {}) {
  const scene = new Scene();
  const rnd = P.makeRng(2026);
  const R = (a, b) => a + (b - a) * rnd();
  const q = (n) => Math.round(n * quality);

  const common = {
    uTime: { value: 0 },
    uLights: { value: Array.from({ length: S.MAX_LIGHTS }, () => new Vector4()) },
    uWarm: { value: C.warm },
    uGlow: { value: C.glow },
    uFog: { value: C.fog },
    uFogLow: { value: C.fogLow },
    uFogDensity: { value: 0.031 },
  };

  // ── Paint every texture, yielding between each so the page stays responsive ──
  const specs = {
    gnarledA: () => P.paintGnarled(11, { W: q(768), H: q(1536), glow: 0.55 }),
    gnarledB: () => P.paintGnarled(29, { W: q(768), H: q(1536), glow: 0.3, hollowEyes: true }),
    gnarledC: () => P.paintGnarled(47, { W: q(768), H: q(1536), glow: 0.8, crown: 0.8 }),
    groveA: () => P.paintGnarled(83, { W: q(768), H: q(1536), glow: 1, roots: 1.4, crown: 0.9 }),
    groveB: () => P.paintGnarled(97, { W: q(768), H: q(1536), glow: 1, roots: 1.3, crown: 1 }),
    cedarA: () => P.paintCedar(5, { W: q(640), H: q(1536) }),
    cedarB: () => P.paintCedar(17, { W: q(640), H: q(1536) }),
    cedarC: () => P.paintCedar(23, { W: q(512), H: q(1280) }),
    deadA: () => P.paintDead(31, { W: q(768), H: q(1280) }),
    deadB: () => P.paintDead(61, { W: q(640), H: q(1152) }),
    fernA: () => P.paintFern(3, { W: q(512), H: q(384) }),
    fernB: () => P.paintFern(9, { W: q(512), H: q(384), glow: 1 }),
    grassA: () => P.paintGrass(7, { W: q(1024), H: q(256) }),
    grassB: () => P.paintGrass(13, { W: q(1024), H: q(256), spores: 0.06 }),
    rocksA: () => P.paintRocks(21, { W: q(768), H: q(384) }),
    rocksB: () => P.paintRocks(37, { W: q(768), H: q(384), moss: 0.8 }),
    signpost: () => P.paintSignpost(41, { W: q(640), H: q(1024) }),
    cabin: () => P.paintCabin(43, { W: q(1024), H: q(896) }),
    lookout: () => P.paintLookout(53, { W: q(1280), H: q(896) }),
    sapling: () => P.paintSapling(59, { W: q(512), H: q(768) }),
    figure: () => P.paintFigure(67, { W: q(448), H: q(1536) }),
    hand: () => P.paintHand(71, { W: q(640), H: q(384) }),
    post: () => P.paintLanternPost(73, { W: q(320), H: q(896) }),
    waypost: () => P.paintWaypost(79, { W: q(512), H: q(1024) }),
    campfire: () => P.paintCampfire(89, { W: q(640), H: q(256) }),
  };
  // The boards carry words, so wait (briefly) for the page fonts before painting them
  await Promise.race([
    Promise.all([document.fonts?.load('600 64px "Inter Tight"'), document.fonts?.load("800 64px Syne")]),
    new Promise((r) => setTimeout(r, 2500)),
  ]).catch(() => {});
  BOARDS.forEach((b, i) => {
    specs["board" + i] = () => P.paintBoard(101 + i * 7, { W: q(1152), H: q(208), name: b.name.toUpperCase(), value: b.value, dir: 1 });
  });
  const packs = {};
  const keys = Object.keys(specs);
  const tPaint = performance.now();
  for (let i = 0; i < keys.length; i++) {
    packs[keys[i]] = specs[keys[i]]();
    onProgress((i + 1) / keys.length);
    await idle();
  }
  console.info(`[forest] painted ${keys.length} textures in ${Math.round(performance.now() - tPaint)}ms`);

  // ── Cutout groups: one instanced mesh per texture ──
  const plane = new PlaneGeometry(1, 1, 1, 6).translate(0, 0.5, 0);
  const groups = {};
  const group = (key, rimPx = 5) => {
    if (groups[key]) return groups[key];
    const pk = packs[key];
    groups[key] = { key, pk, tex: toTexture(pk), rimPx, items: [] };
    return groups[key];
  };
  // Place a cutout. x, z are its base centre; h its height in world units.
  const place = (key, x, y, z, h, o = {}) => {
    const g = group(key, o.rimPx);
    const item = {
      x, y, z, h, w: h * g.pk.aspect,
      shade: o.shade ?? R(0.78, 1.22), seed: o.seed ?? rnd(), sway: o.sway ?? 1, emit: o.emit ?? 0,
      opacity: o.opacity ?? 1, flip: o.flip ?? (rnd() < 0.5 ? -1 : 1), glow: o.glow ?? 1, rim: o.rim ?? 1,
      g, index: g.items.length,
    };
    g.items.push(item);
    return item;
  };
  // World position of a painter anchor on a placed item
  const anchorPos = (item, name) => {
    const [u, v] = item.g.pk.anchors[name];
    return new Vector3(item.x + (u - 0.5) * item.w * item.flip, item.y + v * item.h, item.z + 0.02);
  };

  // ── Landmarks and clearings ──
  const at = (dx, z) => pathX(z) + dx;
  const clearings = [
    { x: at(0, 4), z: 4, r: 12 },
    { x: at(3.3, -24), z: -24, r: 3.4 },
    { x: at(8, -60), z: -60, r: 9.5 },
    { x: at(2.6, -79), z: -79, r: 4.5 },
    { x: at(-7.5, -104), z: -104, r: 7.5 },
    { x: at(6.5, -127), z: -127, r: 6 },
    { x: at(16, -160), z: -160, r: 19 }, // the valley seen from the lookout
    { x: at(0.5, -150), z: -150, r: 6.5 },
  ];
  const isClear = (x, z, pad = 0) => clearings.every((c) => Math.hypot(x - c.x, z - c.z) > c.r + pad);

  // ── The forest ──
  const pickTree = (weights) => {
    let r = rnd() * weights.reduce((s, w) => s + w[1], 0);
    for (const [k, w] of weights) { if ((r -= w) <= 0) return k; }
    return weights[0][0];
  };
  const treeH = { gnarledA: [15, 24], gnarledB: [14, 22], gnarledC: [13, 20], cedarA: [22, 34], cedarB: [20, 30], cedarC: [16, 26], deadA: [9, 15], deadB: [8, 13] };
  const minDx = (k) => (k.startsWith("gnarled") ? 5 : k.startsWith("dead") ? 4 : 6);
  const glowOf = (k) => (k === "gnarledC" ? 1.2 : 1);

  // Near band: the giants beside the path
  for (let z = 24; z > -200; z -= R(3.4, 5.6)) {
    for (const side of [-1, 1]) {
      const k = pickTree([["gnarledA", 3], ["gnarledB", 2], ["gnarledC", 2], ["cedarC", 1], ["deadA", 1.4], ["deadB", 1.2]]);
      const dx = R(minDx(k), minDx(k) + 4.5);
      const zz = z + R(-1.2, 1.2), x = at(side * dx, zz);
      if (!isClear(x, zz, 1)) continue;
      place(k, x, 0, zz, R(...treeH[k]), { glow: glowOf(k) });
    }
  }
  // Mid band
  for (let z = 24; z > -215; z -= R(2.6, 4.4)) {
    for (const side of [-1, 1]) {
      const k = pickTree([["cedarA", 3], ["cedarB", 3], ["cedarC", 2], ["gnarledA", 1.5], ["gnarledB", 1], ["deadA", 0.6]]);
      const zz = z + R(-1, 1), x = at(side * R(9.5, 22), zz);
      if (!isClear(x, zz, 2)) continue;
      place(k, x, 0, zz, R(...treeH[k]) * 0.68, { rim: 0.8 });
    }
  }
  // Far band: fog silhouettes
  for (let z = 14; z > -235; z -= R(2, 3.4)) {
    for (const side of [-1, 1]) {
      const k = pickTree([["cedarA", 3], ["cedarB", 3], ["cedarC", 2], ["gnarledA", 1]]);
      const zz = z + R(-1, 1), x = at(side * R(22, 46), zz);
      if (!isClear(x, zz, 3)) continue;
      place(k, x, 0, zz, R(...treeH[k]) * 0.55, { rim: 0.6, sway: 0.5 });
    }
  }
  // The path ends in a wall of trees beyond the campfire
  for (let i = 0; i < 26; i++) {
    const zz = R(-162, -182), k = pickTree([["cedarA", 2], ["gnarledA", 2], ["gnarledB", 1], ["cedarB", 2]]);
    place(k, at(R(-14, 14), zz), 0, zz, R(...treeH[k]));
  }
  // Undergrowth
  for (let z = 22; z > -172; z -= R(1.1, 2.4)) {
    for (const side of [-1, 1]) {
      if (rnd() < 0.25) continue;
      const dx = R(2.3, 6.5), zz = z + R(-0.5, 0.5), x = at(side * dx, zz);
      if (!isClear(x, zz, 0.5)) continue;
      // Nothing big right in front of the walker where they stop to read
      if (dx < 4.5 && STOPS.some((st) => zz < st.cam && zz > st.cam - 7)) continue;
      place(rnd() < 0.3 ? "fernB" : "fernA", x, 0, zz, R(0.8, 1.3) + dx * 0.14, { glow: 1, rim: 0.9 });
    }
  }
  for (let z = 22; z > -172; z -= R(2.2, 3.6)) {
    for (const side of [-1, 1]) {
      const h = R(0.8, 1.5), zz = z + R(-0.4, 0.4);
      const w = h * 4;
      place(rnd() < 0.3 ? "grassB" : "grassA", at(side * (R(1.25, 1.9) + w / 2), zz), 0, zz, h, { glow: 1.2, rim: 0.45 });
    }
  }
  for (let z = 18; z > -165; z -= R(5, 11)) {
    const side = rnd() < 0.5 ? -1 : 1, zz = z, x = at(side * R(2.6, 10), zz);
    if (!isClear(x, zz, -1)) continue;
    place(rnd() < 0.5 ? "rocksA" : "rocksB", x, 0, zz, R(0.9, 2.4), { glow: 1 });
  }

  // ── Lights ──
  const lights = []; // { pos, base, lit, target, seed, ignite }
  const addLight = (pos, base, o = {}) => {
    const l = { pos, base, lit: o.lit ?? 0, target: o.lit ?? 0, seed: rnd() * 100, ignite: o.ignite ?? null, flick: o.flick ?? 1, item: o.item, halo: null };
    lights.push(l);
    return l;
  };
  const haloGeo = new PlaneGeometry(1, 1);
  const halos = [];
  const addHalo = (pos, size, color, light) => {
    const m = new Mesh(haloGeo, new ShaderMaterial({
      uniforms: { uColor: { value: color }, uIntensity: { value: 0 } },
      vertexShader: S.haloVert, fragmentShader: S.haloFrag,
      transparent: true, depthWrite: false, blending: AdditiveBlending,
    }));
    m.position.copy(pos);
    m.scale.set(size, size, 1);
    m.renderOrder = 5;
    scene.add(m);
    const h = { mesh: m, light, size };
    halos.push(h);
    if (light) light.halo = h;
    return h;
  };

  // Lanterns along the path; they light as the walker approaches
  let lside = 1;
  for (let z = -1; z > -150; z -= 7.6) {
    // Leave room at the waypost (it has its own lantern) and around the sapling
    if (Math.abs(z - WAYPOST.z) < 3.5 || Math.abs(z + 79) < 3.5) { lside = -lside; continue; }
    const dx = 2.3 * lside; // far enough out that the lantern on its arm hangs at the path edge, not over it
    const item = place("post", at(dx, z), 0, z, 2.9, { flip: -lside, sway: 0.15, glow: 0, shade: 1, rim: 0.4 });
    const pos = anchorPos(item, "lantern");
    const l = addLight(pos, 1.0, { ignite: z, item });
    addHalo(pos, 2.6, C.warm, l);
    lside = -lside;
  }

  // Trails signpost
  const sign = place("signpost", at(3.3, -24), 0, -24, 3.6, { flip: 1, sway: 0, shade: 1.1 });
  void sign;

  // The grove: one tree per project, its height grown from its impact
  const trees = {};
  PROJECTS.forEach((pr, i) => {
    const h = 7 + pr.impact * 5.2;
    const x = at(pr.dx, pr.z);
    const tree = place(i % 2 ? "groveB" : "groveA", x, 0, pr.z, h, { glow: 2.2, shade: 0.9, flip: i % 2 ? -1 : 1 });
    // The grove glows from its roots
    const root = addLight(new Vector3(x, 0, pr.z), 0, { lit: 0.55 });
    addHalo(new Vector3(x, 0.5, pr.z + 0.4), 3.5 + pr.impact * 1.2, C.glow, root);
    trees[pr.id] = { tree, root };
  });

  // The waypost: a lantern on top, one arrow board per project, pointing into the grove
  const wpX = at(WAYPOST.dx, WAYPOST.z);
  const post = place("waypost", wpX, 0, WAYPOST.z, 4.1, { flip: 1, sway: 0, shade: 1.05, glow: 1, rim: 0.8 });
  const postLamp = anchorPos(post, "lantern");
  const postLight = addLight(postLamp.clone().add(new Vector3(0, 0, 0.35)), 1.35, { ignite: WAYPOST.z + 4, item: post });
  addHalo(postLamp, 2.4, C.warm, postLight);
  const BH = 0.44, GAP = 0.09, topY = 3.12 - BH;
  const grove = BOARDS.map((b, i) => {
    const key = "board" + i;
    const w = BH * packs[key].aspect;
    const item = place(key, wpX + w * 0.41, topY - i * (BH + GAP), WAYPOST.z + 0.04 + i * 0.002, BH,
      { flip: 1, sway: 0, shade: 1.15, emit: 0, glow: 0, rim: 0.7 });
    return { ...b, item, w, lit: 0, hover: 0, start: null, rect: null, link: b.tree ? trees[b.tree] : null };
  });
  let focusId = null;
  // DateNight: the sapling, glowing in its own small clearing
  const sap = place("sapling", at(2.7, -79), 0, -79, 3.3, { glow: 1.6, shade: 0.9, flip: 1 });
  addHalo(new Vector3(sap.x, 0.9, sap.z + 0.1), 4.5, C.glow, addLight(new Vector3(sap.x, 1, sap.z), 0, { lit: 1 }));

  // The workshop
  const cabin = place("cabin", at(-7.6, -104), 0, -104, 7, { flip: 1, sway: 0, shade: 1, emit: 1 });
  const win = anchorPos(cabin, "window");
  addHalo(win, 4.5, C.warm, addLight(win.clone().add(new Vector3(0, 0, 1.2)), 1.7, { ignite: -104 + 3, item: cabin }));
  const porch = anchorPos(cabin, "lantern");
  addHalo(porch, 1.6, C.warm, addLight(porch.clone().add(new Vector3(0, 0, 0.5)), 0.7, { ignite: -104 + 3 }));

  // A hand around a tree near the workshop. It lets go when you come close.
  // The tree stands left of the path; the fingers reach around its right edge, toward you.
  const handTreeZ = -94.5, handTreeX = at(-5.2, handTreeZ);
  const handTree = place("gnarledB", handTreeX, 0, handTreeZ, 15, { flip: 1, glow: 0.8 });
  const t20 = anchorPos(handTree, "t20");
  const trunkRight = t20.x + handTree.g.pk.anchors.w20[0] * handTree.w * 0.5;
  const hand = place("hand", trunkRight + 0.85, t20.y - 0.62, handTreeZ - 0.06, 1.25, { flip: -1, sway: 0, shade: 0.8, rim: 1.2 });
  const handState = { item: hand, baseX: hand.x, t: 0, gone: false };

  // The lookout
  place("lookout", at(8.5, -126), 0, -126, 3.1, { flip: -1, sway: 0, glow: 1 });

  // The campfire at the end of the path
  const fireX = at(0.6, -150);
  place("campfire", fireX, 0, -150, 0.85, { flip: 1, sway: 0, shade: 1, emit: 1 });
  place("rocksA", fireX - 2.6, 0, -149.2, 0.9, { flip: 1 });
  place("rocksB", fireX + 2.8, 0, -150.6, 1.0, { flip: -1 });
  const fireLight = addLight(new Vector3(fireX, 0.9, -149.6), 2.6, { ignite: -150 + 30, flick: 2.2 });
  addHalo(new Vector3(fireX, 0.8, -149.9), 6.5, C.warm, fireLight);
  const flame = new Mesh(new PlaneGeometry(1, 1).translate(0, 0.5, 0), new ShaderMaterial({
    uniforms: { uTime: common.uTime, uWarm: { value: C.warm }, uEmber: { value: C.ember } },
    vertexShader: S.flameVert, fragmentShader: S.flameFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
  }));
  flame.position.set(fireX, 0.18, -149.95);
  flame.scale.set(1.25, 1.9, 1);
  flame.renderOrder = 6;
  scene.add(flame);

  // Something tall between the trees, beyond the grove. Look again and it is gone.
  const figZ = -79, figure = place("figure", at(-10.5, figZ), 0, figZ, 7.2, { flip: 1, sway: 0.2, shade: 0.7, opacity: 0, glow: 1.6, rim: 0.7 });
  const figState = { item: figure, op: 0, gone: false };

  // ── Build the instanced meshes ──
  const m4 = new Matrix4(), qid = new Quaternion(), pos = new Vector3(), scl = new Vector3();
  for (const g of Object.values(groups)) {
    const n = g.items.length;
    const mat = new ShaderMaterial({
      uniforms: { ...common, map: { value: g.tex }, uRimPx: { value: g.rimPx }, uBase: { value: C.base }, uMoon: { value: C.moon } },
      vertexShader: S.cutoutVert, fragmentShader: S.cutoutFrag, side: DoubleSide, alphaToCoverage: true,
    });
    const mesh = new InstancedMesh(plane, mat, n);
    const p1 = new Float32Array(n * 4), p2 = new Float32Array(n * 4);
    g.items.forEach((it, i) => {
      m4.compose(pos.set(it.x, it.y, it.z), qid, scl.set(it.w * it.flip, it.h, 1));
      mesh.setMatrixAt(i, m4);
      p1.set([it.shade, it.seed, it.sway, it.emit], i * 4);
      p2.set([it.opacity, it.flip, it.glow, it.rim], i * 4);
    });
    mesh.geometry = plane.clone();
    g.a1 = new InstancedBufferAttribute(p1, 4);
    g.a2 = new InstancedBufferAttribute(p2, 4);
    mesh.geometry.setAttribute("aP1", g.a1);
    mesh.geometry.setAttribute("aP2", g.a2);
    mesh.frustumCulled = false;
    g.mesh = mesh;
    scene.add(mesh);
  }
  const setP1 = (it, idx, v) => { it.g.a1.array[it.index * 4 + idx] = v; it.g.a1.needsUpdate = true; };
  const setP2 = (it, idx, v) => { it.g.a2.array[it.index * 4 + idx] = v; it.g.a2.needsUpdate = true; };
  const moveItem = (it) => { m4.compose(pos.set(it.x, it.y, it.z), qid, scl.set(it.w * it.flip, it.h, 1)); it.g.mesh.setMatrixAt(it.index, m4); it.g.mesh.instanceMatrix.needsUpdate = true; };

  // ── Sky ──
  const sky = new Mesh(new PlaneGeometry(1, 1), new ShaderMaterial({
    uniforms: {
      ...common, uRes: { value: new Vector3(1, 1, 0) }, uYaw: { value: 0 }, uPitch: { value: 0 }, uDrift: { value: 0 },
      uTop: { value: C.top }, uHorizon: { value: C.horizon }, uHalo: { value: C.halo },
      uRidge0: { value: C.ridge0 }, uRidge1: { value: C.ridge1 }, uRidge2: { value: C.ridge2 },
    },
    vertexShader: S.skyVert, fragmentShader: S.skyFrag, depthTest: false, depthWrite: false,
  }));
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  // ── Ground ──
  const ground = new Mesh(new PlaneGeometry(260, 300).rotateX(-Math.PI / 2), new ShaderMaterial({
    uniforms: { ...common, uGround: { value: C.ground }, uPath: { value: C.path } },
    vertexShader: S.groundVert, fragmentShader: S.groundFrag,
  }));
  ground.position.set(0, 0, -90);
  scene.add(ground);

  // ── Mist banks ──
  const mistGeo = new PlaneGeometry(1, 1).translate(0, 0.5, 0);
  for (let z = 16; z > -200; z -= R(7, 12)) {
    const tall = rnd() < 0.25;
    const m = new Mesh(mistGeo, new ShaderMaterial({
      uniforms: { ...common, uOpacity: { value: tall ? R(0.12, 0.2) : R(0.3, 0.55) }, uSeed: { value: rnd() } },
      vertexShader: S.mistVert, fragmentShader: S.mistFrag, transparent: true, depthWrite: false,
    }));
    m.position.set(at(R(-5, 5), z), tall ? -0.5 : -0.2, z);
    m.scale.set(R(28, 46), tall ? R(9, 14) : R(2.4, 4.5), 1);
    m.renderOrder = 2;
    scene.add(m);
  }

  // ── Fireflies ──
  const FF = quality < 1 ? 150 : 240;
  const ffPos = new Float32Array(FF * 3), ffSeed = new Float32Array(FF * 4);
  for (let i = 0; i < FF; i++) {
    ffPos.set([R(-11, 11), R(0.3, 4.8), R(0, 46)], i * 3);
    ffSeed.set([rnd(), rnd(), rnd(), rnd()], i * 4);
  }
  const ffGeo = new BufferGeometry();
  ffGeo.setAttribute("position", new Float32BufferAttribute(ffPos, 3));
  ffGeo.setAttribute("aSeed", new Float32BufferAttribute(ffSeed, 4));
  const ffMat = new ShaderMaterial({
    uniforms: { uTime: common.uTime, uCamZ: { value: 0 }, uScale: { value: 800 }, uGlow: { value: C.glow } },
    vertexShader: S.fireflyVert, fragmentShader: S.fireflyFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
  const fireflies = new Points(ffGeo, ffMat);
  fireflies.frustumCulled = false;
  fireflies.renderOrder = 8;
  scene.add(fireflies);

  // ── Watchers: eyes in the far canopy, seen from the lookout ──
  const WP = 170;
  const wPos = new Float32Array(WP * 2 * 3), wSeed = new Float32Array(WP * 2 * 4);
  for (let i = 0; i < WP; i++) {
    const z = R(-182, -222), x = at(R(-2, 44), z), y = R(1.2, 11);
    const s = [rnd() * 0.95, rnd(), rnd(), rnd()];
    wPos.set([x - 0.11, y, z, x + 0.11, y, z], i * 6);
    wSeed.set([...s, ...s], i * 8);
  }
  const wGeo = new BufferGeometry();
  wGeo.setAttribute("position", new Float32BufferAttribute(wPos, 3));
  wGeo.setAttribute("aSeed", new Float32BufferAttribute(wSeed, 4));
  const wMat = new ShaderMaterial({
    uniforms: { uTime: common.uTime, uReveal: { value: 0 }, uScale: { value: 800 }, uGlow: { value: C.glow } },
    vertexShader: S.watcherVert, fragmentShader: S.watcherFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
  const watchers = new Points(wGeo, wMat);
  watchers.frustumCulled = false;
  watchers.renderOrder = 7;
  scene.add(watchers);

  // ── Eyes in the dark beside the path ──
  const eyeGeo = new PlaneGeometry(1, 1);
  const eyes = [];
  for (const z of [-7, -18, -30, -37, -48, -64, -74, -87, -98, -112, -122, -134, -146]) {
    const side = rnd() < 0.5 ? -1 : 1;
    const mat = new ShaderMaterial({
      uniforms: { uOpen: { value: 0 }, uAlpha: { value: 0 }, uGlow: { value: C.glow } },
      vertexShader: S.eyesVert, fragmentShader: S.eyesFrag, transparent: true, depthWrite: false, blending: AdditiveBlending,
    });
    const m = new Mesh(eyeGeo, mat);
    const s = R(0.42, 0.62);
    m.position.set(at(side * R(5, 11), z), R(0.45, 2.3), z);
    m.scale.set(s, s / 3, 1);
    m.renderOrder = 9;
    scene.add(m);
    eyes.push({ mesh: m, open: 0, alpha: 0, next: R(1, 5), blink: 0, gone: false, shy: 0 });
  }

  // ── Per-frame update ──
  const tmp = new Vector3();
  const lightSlots = common.uLights.value;
  const ranked = [];
  let revealT = 0;

  function update(t, dt, cam, pointer) {
    common.uTime.value = t;
    const camZ = cam.position.z;
    ffMat.uniforms.uCamZ.value = camZ;

    // Lanterns ignite one by one ahead of the walker, then flicker
    for (const l of lights) {
      if (l.ignite !== null && l.target === 0 && camZ - l.ignite < 24) { l.target = 1; l.delay = (camZ - l.ignite) > 0 ? R(0, 0.5) : 0; }
      if (l.target > l.lit) {
        if ((l.delay -= dt) > 0) continue;
        l.lit = Math.min(1, l.lit + dt * (0.9 + rnd() * 2) * (rnd() < 0.3 ? 0.2 : 1));
      }
    }
    for (const l of lights) {
      const fl = 0.86 + 0.08 * Math.sin(t * 7.3 + l.seed) + 0.06 * Math.sin(t * 13.1 + l.seed * 2) * l.flick;
      l.now = l.base * l.lit * fl * (l.boost ?? 1);
      if (l.item) setP1(l.item, 3, l.lit * fl * (l.boost ?? 1));
      if (l.halo) {
        const d = Math.max(0.5, -(l.halo.mesh.position.z - camZ));
        const fogK = Math.exp(-Math.pow(d * 0.028, 2));
        l.halo.mesh.material.uniforms.uIntensity.value = l.lit * fl * fogK * (l.boost ?? 1) * (l.base > 0 ? 1 : 1);
      }
    }
    // Sapling halo has no flame; keep it softly alive
    // Pick the eight lights nearest the walker for the shaders
    ranked.length = 0;
    for (const l of lights) if (l.now > 0.01) ranked.push(l);
    ranked.sort((a, b) => a.pos.distanceToSquared(cam.position) - b.pos.distanceToSquared(cam.position));
    for (let i = 0; i < S.MAX_LIGHTS; i++) {
      const l = ranked[i];
      if (l) lightSlots[i].set(l.pos.x, l.pos.y, l.pos.z, l.now); else lightSlots[i].set(0, -100, 0, 0);
    }

    // Sky follows where the camera faces
    cam.getWorldDirection(tmp);
    sky.material.uniforms.uYaw.value = Math.atan2(tmp.x, -tmp.z);
    sky.material.uniforms.uPitch.value = Math.asin(Math.max(-1, Math.min(1, tmp.y)));

    // Eyes: blink at random, close when you come close or point at them
    for (const e of eyes) {
      const d = camZ - e.mesh.position.z;
      if (e.gone) { e.alpha = Math.max(0, e.alpha - dt * 3); }
      else {
        if (d < 7.5 && d > -2) e.gone = true;
        const visible = d > 7.5 && d < 46;
        const target = visible ? 1 : 0;
        e.alpha += (target - e.alpha) * Math.min(1, dt * 0.8);
        if (pointer && e.screen && Math.hypot(pointer.x - e.screen.x, pointer.y - e.screen.y) < 70) e.shy = 2.5;
        e.shy = Math.max(0, e.shy - dt);
        e.next -= dt;
        if (e.next < 0) { e.blink = 0.18; e.next = R(2.5, 7); }
        e.blink = Math.max(0, e.blink - dt);
      }
      const openT = e.gone || e.shy > 0 || e.blink > 0 ? 0 : 1;
      e.open += (openT - e.open) * Math.min(1, dt * (openT ? 5 : 16));
      e.mesh.material.uniforms.uOpen.value = e.open;
      e.mesh.material.uniforms.uAlpha.value = e.alpha * Math.exp(-Math.pow(Math.max(0, d) * 0.022, 2));
      tmp.copy(e.mesh.position).project(cam);
      e.screen = { x: (tmp.x * 0.5 + 0.5) * innerWidth, y: (-tmp.y * 0.5 + 0.5) * innerHeight };
    }

    // The figure: appears in the distance, gone once you get close
    {
      const d = camZ - figZ;
      if (!figState.gone && d < 25) figState.gone = true;
      const target = !figState.gone && d < 46 ? 1 : 0;
      figState.op += (target - figState.op) * Math.min(1, dt * (figState.gone ? 7 : 0.6));
      setP2(figure, 0, figState.op);
    }

    // The hand lets go of the tree
    {
      const d = camZ - handTreeZ;
      if (!handState.gone && d < 8) handState.gone = true;
      if (handState.gone && handState.t < 1) {
        handState.t = Math.min(1, handState.t + dt * 1.4);
        const e = handState.t * handState.t * (3 - 2 * handState.t);
        hand.x = handState.baseX - e * 1.2;
        moveItem(hand);
        setP2(hand, 0, 1 - e);
      }
    }

    // Watchers open their eyes as you reach the lookout
    if (camZ < -104) revealT = Math.min(1, revealT + dt / 7);
    wMat.uniforms.uReveal.value = revealT;

    // The waypost: boards light one by one once its lantern is lit, and answer the pointer
    let hovered = null;
    const corner = (x, y, z) => { tmp.set(x, y, z).project(cam); return [(tmp.x * 0.5 + 0.5) * innerWidth, (-tmp.y * 0.5 + 0.5) * innerHeight, tmp.z]; };
    grove.forEach((b, i) => {
      const it = b.item;
      const a = corner(it.x - it.w / 2, it.y + it.h * 0.88, it.z), c = corner(it.x + it.w / 2, it.y + it.h * 0.12, it.z);
      b.rect = a[2] < 1 && c[2] < 1 ? { x0: a[0], y0: a[1], x1: c[0], y1: c[1] } : null;
      if (b.start === null && postLight.lit > 0.6) b.start = t + 0.35 + i * 0.28;
      if (b.start !== null && t > b.start) b.lit = Math.min(1, b.lit + dt * 1.6);
      if (pointer && b.lit > 0.5 && b.rect && pointer.x > b.rect.x0 && pointer.x < b.rect.x1 && pointer.y > b.rect.y0 && pointer.y < b.rect.y1) hovered = b;
    });
    if (!hovered && focusId) hovered = grove.find((b) => b.id === focusId && b.lit > 0.2) || null;
    for (const b of grove) {
      const on = b === hovered ? 1 : 0;
      b.hover += (on - b.hover) * Math.min(1, dt * (on ? 10 : 5));
      const flick = 0.95 + 0.05 * Math.sin(t * 9 + b.w);
      setP1(b.item, 3, (0.12 + 0.58 * b.lit + 0.32 * b.hover) * flick);
      setP2(b.item, 2, b.hover * 1.5);
      if (b.link) {
        setP2(b.link.tree, 2, 2.2 + b.hover * 3.2);
        b.link.root.boost = 1 + b.hover * 1.8;
      }
    }
    return { hovered };
  }

  return {
    scene, update, grove,
    // Which board (if any) sits under a screen point; used for taps
    pick(x, y) {
      return grove.find((b) => b.lit > 0.5 && b.rect && x > b.rect.x0 && x < b.rect.x1 && y > b.rect.y0 && y < b.rect.y1) || null;
    },
    focus(id) { focusId = id; },
    setSize(w, h, pr, fovY) {
      sky.material.uniforms.uRes.value.set(w, h, 0);
      const scale = (h * pr) / (2 * Math.tan((fovY * Math.PI) / 360));
      ffMat.uniforms.uScale.value = scale;
      wMat.uniforms.uScale.value = scale;
    },
    igniteNear(camZ) {
      for (const l of lights) if (l.ignite !== null && camZ - l.ignite < 24) { l.target = 1; l.delay = Math.max(0, (camZ - l.ignite)) * 0.09 + 0.5; }
    },
  };
}
