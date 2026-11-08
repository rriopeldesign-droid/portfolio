// main.js: starts the forest. Scrolling walks the path; each section of the page is a stop.
// The page is complete without this file; it only adds the world behind the words.
import { WebGLRenderer, PerspectiveCamera, Vector3, ColorManagement, LinearSRGBColorSpace } from "three";
import { buildWorld, pathX, STOPS } from "./world.js";

ColorManagement.enabled = false;

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
// The walker's pace, in world units: a steady walk, eased in and out. Scrolling sets where the
// walker is headed; it never makes them run (except to catch up after a long jump, like a nav link).
const WALK = 10, ACCEL = 6, DECEL = 5;
const lerp = (a, b, t) => a + (b - a) * t;

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
    world.setSize(w, h, renderer.getPixelRatio(), camera.fov);
    measure();
  };
  addEventListener("resize", resize);
  resize();
  // Fonts and late layout can move sections; measure again once things settle
  document.fonts?.ready.then(measure);
  addEventListener("load", measure);

  // Scroll sets where the walker is headed. The walker gets there at a walking pace (see frame()).
  const target = { z: STOPS[0].cam, look: 0 };
  const readScroll = (y) => {
    if (!anchors.length) return;
    if (y <= anchors[0].s) { target.z = anchors[0].stop.cam; target.look = anchors[0].stop.look; }
    else if (y >= anchors[anchors.length - 1].s) { const a = anchors[anchors.length - 1]; target.z = a.stop.cam; target.look = a.stop.look; }
    else {
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i], b = anchors[i + 1];
        if (y >= a.s && y <= b.s) {
          // Linger at each stop, then walk on
          const t = smooth(0.18, 0.82, (y - a.s) / (b.s - a.s));
          target.z = lerp(a.stop.cam, b.stop.cam, t);
          target.look = lerp(a.stop.look, b.stop.look, t);
          break;
        }
      }
    }
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
    if (e.target.closest("a, button, .stop-card, .forest-nav, .forest-hud")) return;
    const b = world.pick(e.clientX, e.clientY);
    if (b?.url) location.href = b.url;
  });
  // Hovering a project in the card lights its board and its tree
  document.querySelectorAll("[data-board]").forEach((el) => {
    const on = () => world.focus(el.dataset.board), off = () => world.focus(null);
    el.addEventListener("pointerenter", on); el.addEventListener("pointerleave", off);
    el.addEventListener("focus", on); el.addEventListener("blur", off);
  });

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
    camera.position.copy(camPos);
    const ahead = cam.z - 9;
    lookAt.set(pathX(ahead) + cam.look + look.x * (coarse ? 0 : 1.6) + Math.sin(t * 0.21) * 0.25,
      1.75 - look.y * (coarse ? 0 : 0.7) + breathe * 0.5, ahead);
    camera.lookAt(lookAt);

    const res = world.update(t, dt, camera, coarse ? null : pointer);
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
    if (frames === 2) root.classList.add("forest-ready");
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // Skip the walk: stop rendering and show the page plainly
  document.getElementById("skipWalk")?.addEventListener("click", () => {
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
