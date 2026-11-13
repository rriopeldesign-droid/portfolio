// main.js: starts the forest. Scrolling walks the path; each section of the page is a stop.
// The page is complete without this file; it only adds the world behind the words.
// Wander mode (a HUD toggle) lets the walker leave the path: keys or drag on a desktop,
// a thumb-stick drag on touch. Two hidden ways out live in the forest: the Hollow and the saucer.
import { WebGLRenderer, PerspectiveCamera, Vector3, ColorManagement, LinearSRGBColorSpace } from "three";
import { buildWorld, pathX, STOPS } from "./world.js";

ColorManagement.enabled = false;

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
// The walker's pace, in world units: a steady walk, eased in and out. Scrolling sets where the
// walker is headed; it never makes them run (except to catch up after a long jump, like a nav link).
const WALK = 10, ACCEL = 6, DECEL = 5;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
// Shortest way round from one heading to another
const lerpAngle = (a, b, t) => a + (((((b - a) % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI)) - Math.PI) * t;
// Field notes live in /js/script.js (site-wide); the forest only reports what was found
const noted = new Set();
const note = (id) => { if (noted.has(id)) return; noted.add(id); try { window.fieldNotes?.add(id); } catch {} };
// Off the path: a slower, freer walk
const STROLL = 4.2, TURN = 1.7;

export async function start() {
  const root = document.documentElement;
  const canvas = document.getElementById("forest-canvas");
  const loading = document.getElementById("forestLoading");
  const small = matchMedia("(max-width: 720px)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;

  const renderer = new WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.setClearColor(0x010609, 1);
  let dpr = Math.min(devicePixelRatio || 1, small ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr);

  const camera = new PerspectiveCamera(55, 1, 0.1, 160);
  const world = await buildWorld({
    quality: small || coarse ? 0.7 : 1,
    onProgress: (p) => { if (loading) loading.style.setProperty("--p", p.toFixed(2)); },
    note,
  });

  // ── Stops: each page section maps to a place on the path ──
  const sections = [...document.querySelectorAll(".stop[data-stop]")];
  const byId = Object.fromEntries(STOPS.map((s) => [s.id, s]));
  let anchors = [];
  const measure = () => {
    anchors = sections.map((el) => {
      const top = el.offsetTop, h = el.offsetHeight;
      const st = byId[el.dataset.stop];
      const stop = st && innerWidth / innerHeight < 0.8 && st.lookPortrait != null ? { ...st, look: st.lookPortrait } : st;
      return { el, h, s: top + h / 2 - innerHeight / 2, stop };
    }).filter((a) => a.stop);
  };

  const resize = () => {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < 0.8 ? 68 : 55;
    camera.updateProjectionMatrix();
    world.setSize(h, renderer.getPixelRatio(), camera.fov);
    measure();
  };
  addEventListener("resize", resize);
  resize();
  // Fonts and late layout can move sections; measure again once things settle
  document.fonts?.ready.then(measure);
  addEventListener("load", measure);

  // Scroll sets where the walker is headed. The walker gets there at a walking pace (see frame()).
  const target = { z: STOPS[0].cam, look: 0 };
  const aim = (y, out) => {
    if (y <= anchors[0].s) { out.z = anchors[0].stop.cam; out.look = anchors[0].stop.look; return out; }
    const last = anchors[anchors.length - 1];
    if (y >= last.s) { out.z = last.stop.cam; out.look = last.stop.look; return out; }
    for (let i = 0; i < anchors.length - 1; i++) {
      const a = anchors[i], b = anchors[i + 1];
      if (y >= a.s && y <= b.s) {
        // Linger at each stop, then walk on
        const t = smooth(0.18, 0.82, (y - a.s) / (b.s - a.s));
        out.z = lerp(a.stop.cam, b.stop.cam, t);
        out.look = lerp(a.stop.look, b.stop.look, t);
        return out;
      }
    }
    return out;
  };
  // The scroll position that walks to a place on the path (used to rejoin it after wandering)
  const scrollFor = (z) => {
    const near = anchors.find((a) => Math.abs(a.stop.cam - z) < 2);
    if (near) return near.s;
    let best = 0, bd = Infinity;
    const end = anchors[anchors.length - 1].s, probe = { z: 0, look: 0 };
    for (let y = 0; y <= end; y += 6) { const d = Math.abs(aim(y, probe).z - z); if (d < bd) { bd = d; best = y; } }
    return best;
  };
  const readScroll = (y) => {
    if (!anchors.length) return;
    aim(y, target);
    anchors.forEach((a, i) => {
      const d = y - a.s;
      a.d = d;
      a.so = 1 - smooth(a.h * 0.14, a.h * 0.32, Math.abs(d));
      if (i === 0 && d < 0) a.so = 1;
      if (i === anchors.length - 1 && d > 0) a.so = 1;
    });
  };
  // A card shows while the scroll sits at its stop AND the walker has actually arrived there
  const updateCards = () => {
    for (const a of anchors) {
      const arrived = 1 - smooth(1.5, 7, Math.abs(cam.z - a.stop.cam));
      const o = Math.min(a.so ?? 0, arrived);
      if (Math.abs((a.o ?? -1) - o) > 0.003) {
        a.o = o;
        a.el.style.setProperty("--o", o.toFixed(3));
        // Cards rise in from below and leave upward, in the direction of travel
        a.el.style.setProperty("--dy", a.d < 0 ? "22px" : "-22px");
        a.el.classList.toggle("is-near", o > 0.5);
      }
    }
  };

  // ── Pointer: a gentle look-around, and hover on the grove's lanterns ──
  const pointer = { x: -999, y: -999, nx: 0, ny: 0 };
  const look = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY;
    pointer.nx = (e.clientX / innerWidth) * 2 - 1;
    pointer.ny = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  let hovered = null;
  // Clicks land on the page above the canvas; on empty space, see if a waypost board is there
  document.addEventListener("click", (e) => {
    if (wander.on || e.target.closest("a, button, .stop-card, .forest-nav, .forest-hud, .field-notes")) return;
    follow(world.pick(e.clientX, e.clientY));
  });
  // A waypost board is a link; the Hollow and the saucer are ways out of the forest
  const fade = document.createElement("div");
  fade.className = "forest-fade";
  fade.setAttribute("aria-hidden", "true");
  document.body.append(fade);
  let gone = false;
  function follow(b) {
    if (!b?.url || gone) return;
    if (!b.kind) { location.href = b.url; return; }
    gone = true;
    note(b.kind);
    world.leave(b.kind);
    root.classList.add("forest-leaving", "forest-leaving-" + b.kind);
    setTimeout(() => { location.href = b.url; }, b.kind === "ufo" ? 1500 : 1200);
  }
  // Coming back with the browser's back button: start fresh rather than stay in the dark
  addEventListener("pageshow", (e) => { if (e.persisted && gone) location.reload(); });
  // Hovering a project in the card lights its board and its tree
  document.querySelectorAll("[data-board]").forEach((el) => {
    const on = () => world.focus(el.dataset.board), off = () => world.focus(null);
    el.addEventListener("pointerenter", on); el.addEventListener("pointerleave", off);
    el.addEventListener("focus", on); el.addEventListener("blur", off);
  });

  // ── Wander mode ──
  const wander = { on: false, k: 0, b: 0, x: 0, z: 0, yaw: 0, pitch: 0, v: 0, turn: 0, dist: 0 };
  const keys = new Set();
  const joy = { id: null, x0: 0, y0: 0, x: 0, y: 0, t0: 0, moved: false, mouse: false, fwd: 0, turn: 0 };
  const toggle = document.getElementById("wanderToggle");
  const whisper = document.getElementById("forestWhisper");
  let whisperTimer = 0;
  const say = (text, ms = 6000) => {
    if (!whisper) return;
    whisper.textContent = text;
    whisper.classList.add("is-on");
    clearTimeout(whisperTimer);
    whisperTimer = setTimeout(() => whisper.classList.remove("is-on"), ms);
  };
  const path = { x: 0, y: 0, z: 0, yaw: 0, ly: 0 };
  function setWander(on) {
    if (on === wander.on || gone) return;
    wander.on = on;
    if (on) {
      // Step off exactly where the path walker stands, facing the same way
      wander.x = path.x; wander.z = path.z; wander.yaw = path.yaw;
      wander.pitch = path.ly - path.y; wander.v = 0; wander.turn = 0;
      root.classList.add("forest-wander");
      note("wander");
      say(coarse ? toggle.dataset.hintTouch : toggle.dataset.hint);
    } else {
      // Rejoin the path at the nearest point along it, and pick up the page from there
      root.classList.remove("forest-wander");
      const y = scrollFor(clamp(wander.z, STOPS[STOPS.length - 1].cam, STOPS[0].cam));
      scrollTo({ top: y, behavior: "instant" });
      readScroll(y);
      cam.z = clamp(wander.z, STOPS[STOPS.length - 1].cam, STOPS[0].cam);
      cam.v = 0; cam.look = target.look;
      keys.clear(); joy.id = null; joy.fwd = joy.turn = 0;
      whisper?.classList.remove("is-on");
    }
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(on));
      toggle.textContent = on ? toggle.dataset.on : toggle.dataset.off;
    }
  }
  toggle?.addEventListener("click", () => setWander(!wander.on));

  const KEYMAP = { ArrowUp: "f", KeyW: "f", ArrowDown: "b", KeyS: "b", ArrowLeft: "l", KeyA: "l", ArrowRight: "r", KeyD: "r", ShiftLeft: "run", ShiftRight: "run" };
  addEventListener("keydown", (e) => {
    if (!wander.on || e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.("input, textarea, select")) return;
    if (e.key === "Escape") { setWander(false); toggle?.focus(); return; }
    const k = KEYMAP[e.code];
    if (!k) return;
    keys.add(k);
    if (k !== "run") e.preventDefault();
  });
  addEventListener("keyup", (e) => { const k = KEYMAP[e.code]; if (k) keys.delete(k); });
  addEventListener("blur", () => keys.clear());

  // Touch: hold and drag like a thumb-stick (up walks, sideways turns). Mouse: drag to look around.
  // A tap or click that doesn't move picks whatever is under it.
  canvas.addEventListener("pointerdown", (e) => {
    if (!wander.on || joy.id !== null) return;
    Object.assign(joy, { id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, t0: performance.now(), moved: false, mouse: e.pointerType === "mouse" });
    try { canvas.setPointerCapture(e.pointerId); } catch {}
  });
  canvas.addEventListener("pointermove", (e) => {
    if (e.pointerId !== joy.id) return;
    const dx = e.clientX - joy.x, dy = e.clientY - joy.y;
    joy.x = e.clientX; joy.y = e.clientY;
    if (Math.hypot(joy.x - joy.x0, joy.y - joy.y0) > 8) joy.moved = true;
    if (joy.mouse) {
      wander.yaw += dx * 0.0042;
      wander.pitch = clamp(wander.pitch - dy * 0.006, -1.4, 2.4);
    } else if (joy.moved) {
      const ox = joy.x - joy.x0, oy = joy.y - joy.y0;
      joy.fwd = clamp(-oy / 70, -1, 1);
      joy.turn = clamp(ox / 90, -1, 1);
    }
  });
  const release = (e) => {
    if (e.pointerId !== joy.id) return;
    if (!joy.moved && performance.now() - joy.t0 < 500 && e.type === "pointerup") follow(world.pick(e.clientX, e.clientY));
    joy.id = null; joy.fwd = joy.turn = 0;
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);

  // ── The walk ──
  const cam = { z: STOPS[0].cam, v: 0, look: 0, dist: 0 };
  const camPos = new Vector3(), lookAt = new Vector3();
  let last = performance.now(), t0 = last, frames = 0, slow = 0, running = true;

  // Start where the page already is (a reload halfway down should not walk from the start)
  readScroll(scrollY);
  cam.z = target.z; cam.look = target.look;
  world.igniteNear(cam.z);

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - t0) / 1000;

    readScroll(scrollY);
    // Walk toward the target: ease into a stride, hold a walking pace, slow down to arrive
    {
      const d = target.z - cam.z, ad = Math.abs(d);
      const pace = WALK + Math.max(0, ad - 32) * 0.5; // only hurries when far behind
      const want = Math.sign(d) * Math.min(pace, Math.sqrt(2 * DECEL * ad), ad * 6);
      const dv = want - cam.v;
      const lim = (Math.sign(dv) === Math.sign(cam.v) || cam.v === 0 ? ACCEL : DECEL * 1.6) * dt;
      cam.v += Math.max(-lim, Math.min(lim, dv));
      if (ad < 0.005 && Math.abs(cam.v) < 0.05) { cam.v = 0; cam.z = target.z; }
      const step = cam.v * dt;
      cam.z += step;
      cam.dist += Math.abs(step);
    }
    // Turn the head toward the next stop as you walk, not all at once
    cam.look += (target.look - cam.look) * Math.min(1, dt * 1.6);
    updateCards();
    look.x += (pointer.nx - look.x) * Math.min(1, dt * 2);
    look.y += (pointer.ny - look.y) * Math.min(1, dt * 2);

    const bob = Math.sin(cam.dist * 1.9) * 0.035;
    const breathe = Math.sin(t * 0.35) * 0.04;
    camPos.set(pathX(cam.z) + cam.look * 0.18, 1.62 + bob + breathe, cam.z);
    const ahead = cam.z - 9;
    const lk = wander.on ? 0 : 1; // the pointer only nudges the view on the path
    lookAt.set(pathX(ahead) + cam.look + look.x * (coarse ? 0 : 1.6) * lk + Math.sin(t * 0.21) * 0.25,
      1.75 - look.y * (coarse ? 0 : 0.7) * lk + breathe * 0.5, ahead);
    Object.assign(path, { x: camPos.x, y: camPos.y, z: camPos.z, yaw: Math.atan2(lookAt.x - camPos.x, camPos.z - lookAt.z), ly: lookAt.y });

    // Off the path: walk where you like
    if (wander.on) {
      const fwd = (keys.has("f") ? 1 : 0) - (keys.has("b") ? 1 : 0) + joy.fwd;
      const turn = (keys.has("r") ? 1 : 0) - (keys.has("l") ? 1 : 0) + joy.turn;
      const want = clamp(fwd, -1, 1) * STROLL * (keys.has("run") ? 1.8 : 1);
      wander.v += (want - wander.v) * Math.min(1, dt * (want ? 3 : 5));
      wander.turn += (clamp(turn, -1, 1) * TURN - wander.turn) * Math.min(1, dt * 6);
      wander.yaw += wander.turn * dt;
      if (!joy.mouse || joy.id === null) wander.pitch += (0.13 - wander.pitch) * Math.min(1, dt * 0.6);
      const step = wander.v * dt;
      const [nx, nz] = world.collide(wander.x + Math.sin(wander.yaw) * step, wander.z - Math.cos(wander.yaw) * step);
      wander.dist += Math.hypot(nx - wander.x, nz - wander.z);
      wander.x = nx; wander.z = nz;
      const into = world.near(wander.x, wander.z);
      if (into) follow(into);
    }
    // Ease between the two ways of walking
    wander.k = clamp(wander.k + (wander.on ? dt / 0.7 : -dt / 1.4), 0, 1);
    wander.b = smooth(0, 1, wander.k);
    world.setWander(wander.b);
    const wy = 1.62 + Math.sin(wander.dist * 1.9) * 0.035 + breathe;
    const w = wander.b;
    const x = lerp(path.x, wander.x, w), y = lerp(path.y, wy, w), z = lerp(path.z, wander.z, w);
    const yaw = lerpAngle(path.yaw, wander.yaw, w);
    const ly = lerp(path.ly, wy + wander.pitch, w);
    camera.position.set(x, y, z);
    camera.lookAt(x + Math.sin(yaw) * 9, ly, z - Math.cos(yaw) * 9);
    if ((w > 0.5 ? wander.z : cam.z) < -137) note("campfire");

    const res = world.update(t, dt, camera, coarse || joy.id !== null ? null : pointer);
    if (res.hovered !== hovered) {
      hovered = res.hovered;
      document.body.classList.toggle("sign-hover", !!hovered?.url);
    }

    renderer.render(world.scene, camera);

    // Keep it smooth: if frames run long, render fewer pixels
    frames++;
    if (dt > 0.026) slow++;
    if (frames % 90 === 0) {
      if (slow > 40 && dpr > 0.85) { dpr = Math.max(0.85, dpr - 0.25); renderer.setPixelRatio(dpr); resize(); }
      slow = 0;
    }
    if (frames === 2) {
      root.classList.add("forest-ready");
      // Back from the void (/#wander): already off the path, turned toward the saucer
      if (location.hash === "#wander") {
        setWander(true);
        const s = world.ufoSpot;
        wander.yaw = Math.atan2(s.x - wander.x, -(s.z - wander.z));
        wander.pitch = 0.6;
      }
    }
    requestAnimationFrame(frame);
  }
  // Spread the GPU's start-up work instead of doing it all in the first frame: shaders compile
  // in the background where supported, and textures go to the GPU a couple at a time.
  try { await renderer.compileAsync(world.scene, camera); } catch {}
  const texes = new Set();
  world.scene.traverse((o) => {
    for (const m of [].concat(o.material || [])) {
      if (m.map) texes.add(m.map);
      for (const u of Object.values(m.uniforms || {})) if (u.value?.isTexture) texes.add(u.value);
    }
  });
  let n = 0;
  for (const t of texes) {
    renderer.initTexture(t);
    if (++n % 2 === 0) await new Promise((r) => setTimeout(r, 0));
  }
  requestAnimationFrame(frame);
  if (/[?&]debug\b/.test(location.search)) window.__forest = { world, renderer, camera };

  // Skip the walk: stop rendering and show the page plainly
  document.getElementById("skipWalk")?.addEventListener("click", () => {
    setWander(false);
    running = false;
    try { localStorage.setItem("forest-skip", "1"); } catch {}
    root.classList.remove("forest-on", "forest-ready");
    root.classList.add("forest-off", "forest-skipped");
    renderer.dispose();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && running) { last = performance.now(); }
  });
}
