// enhance.js — progressive enhancements layered on top of a page that already works without them.
// Every feature checks for support, respects reduced motion, and fails silently.
import { animate, spring, inView } from "./vendor/motion.js";

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const ready = (fn) => { try { fn(); } catch (err) { console.warn("[enhance]", err); } };

// ── Counters: results count up with Motion's spring physics ──────────────────
// The final value is already in the HTML, so crawlers and no-JS readers see real numbers.
function initCounters() {
  const els = document.querySelectorAll(".count-up");
  if (!els.length || reduceMotion) return;
  els.forEach((el) => {
    const final = el.textContent;
    const match = final.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/s);
    if (!match) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    if (!target) return;
    const decimals = (num.split(".")[1] || "").length;
    const render = (v) => { el.textContent = prefix + v.toFixed(decimals) + suffix; };
    render(0);
    inView(el, () => {
      const gen = spring({ keyframes: [0, target], stiffness: 70, damping: 20 });
      const start = performance.now();
      const tick = (now) => {
        const { value, done } = gen.next(now - start);
        if (done) { el.textContent = final; return; }
        render(Math.max(0, value));
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { amount: 0.6 });
  });
}

// ── Magnetic buttons: lean a few pixels toward the cursor ─────────────────────
function initMagnetic() {
  if (!finePointer || reduceMotion) return;
  document.querySelectorAll(".btn-magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      el.style.setProperty("--mx", `${(x * 5).toFixed(2)}px`);
      el.style.setProperty("--my", `${(y * 4).toFixed(2)}px`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    });
  });
}

// ── Nav: one underline that slides between links ──────────────────────────────
function initNavIndicator() {
  if (!finePointer) return;
  const group = document.querySelector("nav .hidden.md\\:flex");
  if (!group) return;
  const links = [...group.querySelectorAll(".nav-link")];
  if (!links.length) return;
  group.style.position = "relative";
  const bar = document.createElement("span");
  bar.className = "nav-indicator";
  bar.setAttribute("aria-hidden", "true");
  group.appendChild(bar);
  const moveTo = (link, show = true) => {
    const g = group.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    bar.style.transform = `translateX(${r.left - g.left}px) scaleX(${r.width})`;
    bar.style.opacity = show ? "1" : "0";
  };
  const active = links.find((l) => l.classList.contains("active"));
  if (active) requestAnimationFrame(() => moveTo(active));
  links.forEach((l) => l.addEventListener("pointerenter", () => moveTo(l)));
  group.addEventListener("pointerleave", () => (active ? moveTo(active) : moveTo(links[0], false)));
}

// ── Hero: a faint warm light that follows the cursor ─────────────────────────
function initHeroGlow() {
  const hero = document.querySelector(".hero");
  const glow = hero && hero.querySelector(".hero-glow");
  if (!glow || !finePointer || reduceMotion) return;
  let tx = 70, ty = 30, x = tx, y = ty, raf = 0;
  const loop = () => {
    x += (tx - x) * 0.08; y += (ty - y) * 0.08;
    glow.style.setProperty("--gx", `${x}%`);
    glow.style.setProperty("--gy", `${y}%`);
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(loop) : 0;
  };
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width) * 100;
    ty = ((e.clientY - r.top) / r.height) * 100;
    if (!raf) raf = requestAnimationFrame(loop);
  });
}

// ── Work list: a preview image that follows the cursor ───────────────────────
// Images load only on first hover, so the list itself stays light.
function initRowPreview() {
  const rows = document.querySelectorAll(".project-row[data-preview]");
  if (!rows.length || !finePointer || reduceMotion) return;
  const box = document.createElement("div");
  box.className = "row-preview";
  box.setAttribute("aria-hidden", "true");
  const img = document.createElement("img");
  img.alt = "";
  img.decoding = "async";
  box.appendChild(img);
  document.body.appendChild(box);

  let tx = 0, ty = 0, x = 0, y = 0, raf = 0, current = null;
  const loop = () => {
    x += (tx - x) * 0.16; y += (ty - y) * 0.16;
    box.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    raf = current || Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
  };
  const place = (e) => {
    tx = Math.min(e.clientX + 28, innerWidth - box.offsetWidth - 16);
    ty = Math.max(16, Math.min(e.clientY - box.offsetHeight / 2, innerHeight - box.offsetHeight - 16));
  };
  rows.forEach((row) => {
    row.addEventListener("pointerenter", (e) => {
      current = row;
      if (img.getAttribute("src") !== row.dataset.preview) img.src = row.dataset.preview;
      place(e);
      if (!box.classList.contains("on")) { x = tx; y = ty; }
      box.classList.add("on");
      if (!raf) raf = requestAnimationFrame(loop);
    });
    row.addEventListener("pointermove", place);
    row.addEventListener("pointerleave", () => { current = null; box.classList.remove("on"); });
    // If this case study opens with the same image, let it glide into the header.
    row.addEventListener("click", () => {
      if (row.dataset.vtImg && box.classList.contains("on")) img.style.viewTransitionName = "cs-hero-img";
    });
  });
  // Clean up when coming back via the back/forward cache
  addEventListener("pageshow", () => { img.style.viewTransitionName = ""; box.classList.remove("on"); current = null; });
}

// ── Case studies: reading progress + section index ────────────────────────────
function initReading() {
  const article = document.querySelector("article");
  if (!article || !document.body.classList.contains("case-study")) return;

  const bar = document.createElement("div");
  bar.className = "read-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let ticking = false;
  const update = () => {
    const r = article.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
    bar.style.transform = `scaleX(${p})`;
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();

  const sections = [...article.querySelectorAll("section")]
    .map((sec) => ({ sec, label: sec.querySelector(".section-divider .tag, :scope > .tag, .tag.text-faint")?.textContent.trim() }))
    .filter((s) => s.label);
  if (sections.length < 3) return;
  const list = document.createElement("ol");
  list.className = "section-index";
  list.setAttribute("aria-label", "On this page");
  const links = sections.map(({ sec, label }, i) => {
    if (!sec.id) sec.id = `section-${i + 1}`;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${sec.id}`;
    a.textContent = label;
    li.appendChild(a);
    list.appendChild(li);
    return a;
  });
  document.body.appendChild(list);
  requestAnimationFrame(() => list.classList.add("ready"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const i = sections.findIndex((s) => s.sec === en.target);
      links.forEach((a, j) => a.classList.toggle("active", i === j));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(({ sec }) => io.observe(sec));
}

// ── Copy email with a small confirmation ───────────────────────────────────────
function initCopyEmail() {
  const buttons = document.querySelectorAll("[data-copy-email]");
  if (!buttons.length || !navigator.clipboard) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  let timer = 0;
  buttons.forEach((btn) => {
    btn.hidden = false;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copyEmail);
        toast.textContent = "Email copied: " + btn.dataset.copyEmail;
      } catch {
        toast.textContent = btn.dataset.copyEmail;
      }
      toast.classList.add("show");
      clearTimeout(timer);
      timer = setTimeout(() => toast.classList.remove("show"), 2200);
      if (!reduceMotion) animate(btn, { scale: [0.96, 1] }, { type: spring, stiffness: 500, damping: 18 });
    });
  });
}

[initCounters, initMagnetic, initNavIndicator, initHeroGlow, initRowPreview, initReading, initCopyEmail].forEach(ready);
