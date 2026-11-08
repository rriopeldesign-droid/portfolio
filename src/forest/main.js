// main.js: starts the forest. Scrolling walks the path; each section of the page is a stop.
// The page is complete without this file; it only adds the world behind the words.
import { WebGLRenderer, PerspectiveCamera, Vector3, ColorManagement, LinearSRGBColorSpace } from "three";
import { buildWorld, pathX, STOPS } from "./world.js";

ColorManagement.enabled = false;

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
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
      return { el, h, s: top + h / 2 - innerHeight / 2, stop: byId[el.dataset.stop] };
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

  // Scroll position → where the walker should be (and how far each card has faded)
  const target = { z: STOPS[0].cam, look: 0 };
  const readScroll = () => {
    const y = scrollY;
    if (!anchors.length) return;
    if (y <= anchors[0].s) { target.z = anchors[0].stop.cam; target.look = anchors[0].stop.look; }
    else if (y >= anchors[anchors.length - 1].s) { const a = anchors[anchors.length - 1]; target.z = a.stop.cam; target.look = a.stop.look; }
    else {
      for (let i = 0; i < anchors.length - 1; i++) {
        const a = anchors[i], b = anchors[i + 1];
        if (y >= a.s && y <= b.s) {
          // Linger at each stop, then walk
          const t = smooth(0.18, 0.82, (y - a.s) / (b.s - a.s));
          target.z = lerp(a.stop.cam, b.stop.cam, t);
          target.look = lerp(a.stop.look, b.stop.look, t);
          break;
        }
      }
    }
    anchors.forEach((a, i) => {
      const d = y - a.s;
      let o = 1 - smooth(a.h * 0.16, a.h * 0.36, Math.abs(d));
      if (i === 0 && d < 0) o = 1;
      if (i === anchors.length - 1 && d > 0) o = 1;
      if (Math.abs((a.o ?? -1) - o) > 0.003) {
        a.o = o;
        a.el.style.setProperty("--o", o.toFixed(3));
        a.el.classList.toggle("is-near", o > 0.5);
      }
    });
  };

  // ── Pointer: a gentle look-around, and hover on the grove's lanterns ──
  const pointer = { x: -999, y: -999, nx: 0, ny: 0 };
  const look = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    pointer.x = e.clientX; pointer.y = e.clientY;
    pointer.nx = (e.clientX / innerWidth) * 2 - 1;
    pointer.ny = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });
  const label = document.createElement("div");
  label.className = "forest-label";
  label.setAttribute("aria-hidden", "true");
  document.body.appendChild(label);
  let hovered = null;
  canvas.addEventListener("click", () => { if (hovered?.url) location.href = hovered.url; });
  // Clicks land on the page above the canvas, so listen there too, but only on empty space
  document.addEventListener("click", (e) => {
    if (!hovered?.url || e.target.closest("a, button, .stop-card")) return;
    location.href = hovered.url;
  });

  // ── The walk ──
  const cam = { z: STOPS[0].cam, look: 0, dist: 0 };
  const camPos = new Vector3(), lookAt = new Vector3();
  let last = performance.now(), t0 = last, frames = 0, slow = 0, running = true;

  world.igniteNear(cam.z);

  function frame(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - t0) / 1000;

    readScroll();
    const k = 1 - Math.exp(-dt * 2.4);
    const dz = (target.z - cam.z) * k;
    cam.z += dz;
    cam.dist += Math.abs(dz);
    cam.look += (target.look - cam.look) * k;
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
      document.body.classList.toggle("lantern-hover", !!hovered?.url);
      if (hovered) label.innerHTML = `<span>${hovered.name}</span><b>${hovered.value}</b>`;
      label.classList.toggle("show", !!hovered);
    }
    if (hovered) label.style.transform = `translate(${hovered.screen.x + 18}px, ${hovered.screen.y - 14}px)`;

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
