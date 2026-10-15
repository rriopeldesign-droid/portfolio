// Planned onboarding concept. Two small state machines (planner, supplier) driven by the URL hash.
(function () {
  const D = window.PLANNED_DATA;
  const $ = (s, r) => (r || document).querySelector(s);
  const app = $("#app");
  const STORE = "planned-concept-v2";
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const PLANNER_STEPS = ["Welcome", "What are you planning?", "Who's coming?", "When?", "Where?", "Budget", "What's the vibe?", "What matters most?", "Building your plan", "Your plan", "Confirm and pay", "Success"];
  const SUPPLIER_STEPS = ["Intro", "Claim your listing", "Spaces", "Pricing and availability", "Policies and getting paid", "Team and response", "Review your listing", "Submitted for review", "After approval: you're live"];

  function defaults() {
    return {
      a: {
        type: "offsite", otherText: "",
        headcount: 24, origins: D.defaultOrigins.map(o => Object.assign({}, o)), execs: false,
        start: D.defaultDates.start, end: D.defaultDates.end, half: false, flex: 0,
        whereMode: "help", destName: "Montreal", whereNote: "",
        pp: 400, vibes: [],
        must: { "Meeting room": true, "Group dinner": true, "Team activity": true, "Overnight rooms": true, "AV and screens": true, "Breakout rooms": false },
        diet: { Vegetarian: true, "Gluten-free": true }, access: { "Step-free access": true },
        ranking: D.priorities.slice(), option: "best", swaps: {},
        policy: false, approval: false, payMethod: "now", po: "", terms: false, invited: false
      },
      b: { drafted: false, instant: false, prices: Object.fromEntries(D.listing.pricing.map(f => [f.id, f.value])), unavailable: D.listing.unavailable.slice(), confirmed: false, deposit: 30, cancel: "Moderate", teammate: false, email: true, sms: true, promise: true }
    };
  }

  let state = load();
  const ui = { sheet: false, reading: 0, termsError: false, submitError: false, priceErrors: {}, rangeStart: null, rangeEnd: null, pick: false, calView: {}, adder: null, adderIdx: -1, hcError: "" };
  let timers = [];
  let lastRoute = "";

  function load() {
    try { const s = JSON.parse(sessionStorage.getItem(STORE)), d = defaults(); if (s && s.a && s.b) return { a: Object.assign(d.a, s.a), b: Object.assign(d.b, s.b) }; } catch (e) { }
    return defaults();
  }
  function save() { try { sessionStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { } }
  function set(fn) { fn(state); save(); render(); }

  // ---------- helpers ----------
  const money = (n) => "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const num = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const parseNum = (v) => { const n = Number(String(v).replace(/[$,%\s]/g, "")); return String(v).trim() === "" || isNaN(n) ? NaN : n; };
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const listText = (arr) => arr.length <= 1 ? (arr[0] || "") : arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];

  // Dates are keyed as year * 10000 + monthIndex * 100 + day, so plain comparisons keep calendar order
  const toOrd = (d) => d.getFullYear() * 10000 + d.getMonth() * 100 + d.getDate();
  const fromOrd = (o) => new Date(Math.floor(o / 10000), Math.floor(o / 100) % 100, o % 100);
  const addDays = (o, n) => { const d = fromOrd(o); d.setDate(d.getDate() + n); return toOrd(d); };
  const daysBetween = (a, b) => Math.round((fromOrd(b) - fromOrd(a)) / 864e5);
  const ymOf = (o) => [Math.floor(o / 10000), Math.floor(o / 100) % 100];
  const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const viewOf = (o) => { const [y, m] = ymOf(o); return (y - 2026) * 12 + m; };
  const MAX_VIEW = 22; // the second month shown is then December 2027
  const ordLabel = (o, year) => { const [y, m] = ymOf(o); return `${MONTHS[m]} ${o % 100}${year ? `, ${y}` : ""}`; };
  function rangeLabel(lo, hi, year) {
    if (lo === hi) return ordLabel(lo, year);
    const [y1, m1] = ymOf(lo), [y2, m2] = ymOf(hi);
    if (y1 !== y2) return `${ordLabel(lo, true)}–${ordLabel(hi, true)}`;
    const tail = year ? `, ${y1}` : "";
    return m1 === m2 ? `${MONTHS[m1]} ${lo % 100}–${hi % 100}${tail}` : `${MONTHS[m1]} ${lo % 100}–${MONTHS[m2]} ${hi % 100}${tail}`;
  }

  // ---------- planner model ----------
  const policy = () => state.a.policy;
  const eventType = () => D.eventTypes.find(t => t.id === state.a.type) || D.eventTypes[0];
  const spanDays = () => daysBetween(state.a.start, state.a.end) + 1;
  function duration() {
    if (state.a.half) return { label: "Half day", days: 0.5 };
    const n = spanDays();
    return { label: n === 1 ? "1 day" : `${n} days`, days: n };
  }
  const dateLabel = (year) => rangeLabel(state.a.start, state.a.end, year);
  const cityShort = (name) => String(name).split(",")[0].trim();
  const placed = () => state.a.origins.reduce((s, o) => s + (o.count || 0), 0);
  function topOrigin() {
    const o = state.a.origins.slice().sort((x, y) => y.count - x.count)[0];
    return o && o.count > 0 ? o : null;
  }
  const dest = () => state.a.whereMode === "help" ? (topOrigin() ? cityShort(topOrigin().name) : "Montreal") : cityShort(state.a.destName);
  const travellers = () => state.a.origins.filter(o => cityShort(o.name) !== dest()).reduce((s, o) => s + (o.count || 0), 0);
  const budgetTotal = () => state.a.pp * state.a.headcount * duration().days;
  const limit = () => policy() ? D.company.policyLimit : budgetTotal();
  const selectedKeys = (obj) => Object.keys(obj).filter(k => obj[k]);

  function option() { return D.options.find(o => o.id === state.a.option) || D.options[0]; }
  function choices(opt, i) {
    const c = opt.components[i];
    if (opt.id === "best") return [c].concat(c.alts);
    const b = D.options[0].components.find(x => x.kind === c.kind);
    return [c].concat(b ? [b].concat(b.alts.slice(0, 1)) : []).filter((x, j, arr) => arr.findIndex(y => y.name === x.name) === j).slice(0, 3);
  }
  function picked(opt) { return opt.components.map((c, i) => choices(opt, i)[state.a.swaps[opt.id + i] || 0] || c); }
  const total = (opt) => picked(opt).reduce((s, c) => s + c.price, 0);
  // "Why we picked this" lines follow the answers
  function whyFor(c, kind) {
    if (kind === "Catering") {
      const diets = selectedKeys(state.a.diet).map(d => d.toLowerCase());
      return diets.length ? `Covers ${listText(diets)} needs` : "Flexible menu you can adjust later";
    }
    let w = (policy() && c.whyPolicy) || (c.vibe && !state.a.vibes.includes(c.vibe) && c.whyNoVibe) || c.why || "";
    return w.replace("{n}", travellers());
  }

  function tipFor(c) {
    if (c.status === "bookable") return c.kind === "Venue" ? "This venue shares live pricing and availability" : "This supplier shares live pricing and availability";
    return D.statuses[c.status].tip;
  }
  function badge(c, withTip) {
    const s = D.statuses[c.status];
    if (!s) return "";
    const tip = withTip && tipFor(c);
    const ic = c.status === "bookable" ? icon("bolt", 14) : c.status === "confirming" ? icon("clock", 14) : "";
    return tip
      ? `<span class="badge badge-${s.tone} has-tip" tabindex="0" aria-label="${s.label}. ${tip}">${ic}${s.label}<span class="tip" role="tooltip">${tip}</span></span>`
      : `<span class="badge badge-${s.tone}">${ic}${s.label}</span>`;
  }

  // ---------- routing ----------
  function route() {
    const h = location.hash.replace(/^#\/?/, "");
    const m = h.match(/^(planner|supplier)\/(\d+)$/);
    if (!m) return { flow: "home", step: 0 };
    const max = m[1] === "planner" ? PLANNER_STEPS.length - 1 : SUPPLIER_STEPS.length - 1;
    return { flow: m[1], step: Math.min(+m[2], max) };
  }
  function go(flow, step) {
    const h = flow === "home" ? "" : `#${flow}/${step}`;
    if (location.hash === h || (!h && !location.hash)) render();
    else if (!h) { history.pushState(null, "", location.pathname); render(); }
    else location.hash = h;
  }
  window.addEventListener("hashchange", render);

  // ---------- render ----------
  function render() {
    const r = route();
    const key = r.flow + "/" + r.step;
    const changed = key !== lastRoute;
    if (changed) {
      timers.forEach(clearTimeout); timers = [];
      Object.assign(ui, { sheet: false, termsError: false, submitError: false, rangeStart: null, rangeEnd: null, pick: false, calView: {}, adder: null, adderIdx: -1, hcError: "" });
      if (r.flow !== "supplier" || r.step !== 1) ui.reading = 0;
    }
    const focusKey = document.activeElement && document.activeElement.getAttribute("data-k");
    const headingFocused = document.activeElement && document.activeElement.tagName === "H1";

    let html;
    if (r.flow === "planner") html = planner(r.step);
    else if (r.flow === "supplier") html = supplier(r.step);
    else html = home();
    app.innerHTML = html;
    app.classList.toggle("enter", changed && !reduced());
    document.body.dataset.flow = r.flow;
    document.body.classList.toggle("sheet-open", ui.sheet);
    $("#persona").innerHTML = r.flow === "planner" ? `${icon("user", 16)}<span>Maya Chen · Fernway</span>` : r.flow === "supplier" ? `${icon("user", 16)}<span>Sophie Tremblay · The Foundry Loft</span>` : "";
    document.title = (r.flow === "home" ? "Onboarding concept for Planned" : (r.flow === "planner" ? PLANNER_STEPS : SUPPLIER_STEPS)[r.step]) + " · Robert Riopel";

    if (changed) {
      lastRoute = key;
      if (menu.open) menu.close();
      if (drawer.open) drawer.close();
      window.scrollTo(0, 0);
      // Move focus to the new heading so keyboard and screen reader users land on the new screen
      const h1 = $("h1", app);
      if (h1 && !firstRender) h1.focus({ preventScroll: true });
      firstRender = false;
      enter(r);
    } else if (focusKey) {
      const el = app.querySelector(`[data-k="${CSS.escape(focusKey)}"]`);
      if (el) el.focus({ preventScroll: true });
    } else if (headingFocused) {
      const h1 = $("h1", app); if (h1) h1.focus({ preventScroll: true });
    }
    renderMenu(r);
  }
  let firstRender = true;

  // Side effects when a screen is entered
  function enter(r) {
    if (r.flow === "planner" && r.step === 8) {
      const steps = D.building.length;
      for (let i = 0; i <= steps; i++) timers.push(setTimeout(() => {
        const items = app.querySelectorAll(".build li");
        items.forEach((li, j) => { li.classList.toggle("done", j < i); li.classList.toggle("active", j === i); });
      }, 150 + i * 760));
      timers.push(setTimeout(() => go("planner", 9), 4200));
    }
    if (r.flow === "supplier" && r.step === 8 && !reduced()) {
      const c = $(".celebrate", app); if (c) c.classList.add("play");
    }
  }

  // ---------- shared pieces ----------
  function topbar(label, pct) {
    return `<div class="topbar">
      <button class="btn-ghost" data-act="back" data-k="back">${icon("back", 18)}<span>Back</span></button>
      <div class="progress" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pct)}"><span style="transform:scaleX(${pct / 100})"></span></div>
      <span class="step-label">${label}</span>
    </div>`;
  }
  function layout(main, aside, sheetLabel) {
    if (!aside) return `<div class="wrap single">${main}</div>`;
    return `<div class="wrap flow">
      <div class="main">${main}</div>
      <aside class="aside ${ui.sheet ? "open" : ""}" aria-label="${sheetLabel.title}">
        <button class="sheet-bar" data-act="sheet" aria-expanded="${ui.sheet}" data-k="sheet">
          <span class="sheet-bar-text">${sheetLabel.bar}</span>
          <span class="sheet-bar-cta">${ui.sheet ? "Hide" : "Show"} ${icon("up", 16)}</span>
        </button>
        <div class="aside-body">${aside}</div>
      </aside>
    </div>`;
  }
  const primary = (label, act, k, extra) => `<button class="btn btn-primary" data-act="${act}" data-k="${k || act}" ${extra || ""}>${label}</button>`;
  const actions = (inner) => `<div class="actions">${inner}</div>`;
  function chip(label, pressed, act, val, k) {
    return `<button class="chip" aria-pressed="${!!pressed}" data-act="${act}" data-v="${esc(val)}" data-k="${esc(k || act + ":" + val)}">${pressed ? icon("check", 16) : ""}<span>${label}</span></button>`;
  }
  function seg(name, opts, current, act) {
    return `<div class="seg" role="radiogroup" aria-label="${name}">${opts.map((o, i) => {
      const v = typeof o === "object" ? o.v : i, l = typeof o === "object" ? o.l : o;
      const on = String(v) === String(current);
      return `<button role="radio" aria-checked="${on}" tabindex="${on ? 0 : -1}" data-act="${act}" data-v="${v}" data-k="${act}:${v}">${l}</button>`;
    }).join("")}</div>`;
  }
  function toggle(label, on, act, desc, k) {
    return `<div class="toggle-row">
      <div><span class="toggle-label" id="lbl-${k || act}">${label}</span>${desc ? `<span class="toggle-desc">${desc}</span>` : ""}</div>
      <button class="switch" role="switch" aria-checked="${!!on}" aria-labelledby="lbl-${k || act}" data-act="${act}" data-k="${k || act}"><span></span></button>
    </div>`;
  }

  // "+ Add" button that opens a text field, with optional place suggestions
  const ADDERS = {
    origin: { label: "Add city", placeholder: "Start typing a city", places: true },
    dest: { label: "Choose a different city", placeholder: "Start typing a city", places: true },
    must: { label: "Add your own", placeholder: "For example: a stage for 2 speakers" },
    diet: { label: "Add your own", placeholder: "For example: lactose-free" },
    access: { label: "Add your own", placeholder: "For example: sign language interpreter" }
  };
  function adder(id) {
    const cfg = ADDERS[id];
    if (ui.adder !== id) return `<button class="chip chip-add" data-act="adder-open" data-v="${id}" data-k="adder:${id}">${icon("plus", 16)}<span>${cfg.label}</span></button>`;
    return `<div class="adder">
      <div class="adder-row">
        <span class="adder-in">${cfg.places ? icon("pin", 16) : icon("plus", 16)}<input id="adder-${id}" data-adder="${id}" data-k="adder-in:${id}" placeholder="${cfg.placeholder}" autocomplete="off" aria-label="${cfg.label}"
          ${cfg.places ? `role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="adder-list-${id}"` : ""}></span>
        <button class="btn-small dark" data-act="adder-add" data-v="${id}" data-k="adder-add:${id}">Add</button>
        <button class="btn-small ghost" data-act="adder-cancel" data-v="${id}" data-k="adder-cancel:${id}">Cancel</button>
      </div>
      ${cfg.places ? `<ul class="adder-list" id="adder-list-${id}" role="listbox" aria-label="Suggested places" hidden></ul>` : ""}
    </div>`;
  }
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function suggestions(q) {
    const n = norm(q.trim());
    return n ? D.places.filter(p => norm(p).includes(n)).slice(0, 6) : D.places.slice(0, 6);
  }
  function renderSuggestions(input) {
    const id = input.dataset.adder, list = $(`#adder-list-${id}`, app);
    if (!list) return;
    const items = suggestions(input.value);
    ui.adderIdx = Math.min(ui.adderIdx, items.length - 1);
    list.innerHTML = items.map((p, i) => `<li role="option" id="opt-${id}-${i}" data-place="${esc(p)}" aria-selected="${i === ui.adderIdx}">${icon("pin", 14)}<span>${esc(p)}</span></li>`).join("")
      + `<li class="adder-foot" aria-hidden="true">Demo place search</li>`;
    list.hidden = !items.length;
    input.setAttribute("aria-expanded", String(!!items.length));
    if (ui.adderIdx >= 0) input.setAttribute("aria-activedescendant", `opt-${id}-${ui.adderIdx}`); else input.removeAttribute("aria-activedescendant");
  }
  function commitAdder(id, value) {
    const v = String(value || "").trim();
    if (!v) { const i = $(`#adder-${id}`, app); if (i) i.focus(); return; }
    set(s => {
      const a = s.a;
      if (id === "origin") { if (!a.origins.some(o => norm(cityShort(o.name)) === norm(cityShort(v)))) a.origins.push({ name: cityShort(v), count: 1 }); }
      else if (id === "dest") a.destName = cityShort(v);
      else a[id][v.charAt(0).toUpperCase() + v.slice(1)] = true;
      ui.adder = null; ui.adderIdx = -1;
    });
    const b = app.querySelector(`[data-k="adder:${id}"]`); if (b) b.focus();
  }

  // Two-month calendar with arrows, January 2026 to December 2027
  function rangeCal(id, cell, anchor) {
    const v = Math.max(0, Math.min(MAX_VIEW, ui.calView[id]));
    const month = (vi) => {
      const y = 2026 + Math.floor(vi / 12), m = vi % 12, first = new Date(y, m, 1).getDay();
      let cells = "";
      for (let i = 0; i < first; i++) cells += `<span></span>`;
      for (let d = 1; d <= daysInMonth(y, m); d++) {
        const o = y * 10000 + m * 100 + d, past = o < D.today, c = past ? { cls: [] } : cell(o);
        const cls = c.cls.concat(past ? ["past"] : []).filter(Boolean).join(" ");
        cells += `<button class="${cls}" data-act="${id}-day" data-v="${o}" data-o="${o}" data-k="${id}-day:${o}" ${past ? "disabled" : ""} aria-pressed="${!!c.pressed}" aria-label="${MONTHS_LONG[m]} ${d}, ${y}${c.label ? `, ${c.label}` : ""}">${d}</button>`;
      }
      return `<div class="cal"><p class="cal-title">${MONTHS_LONG[m]} ${y}</p><div class="cal-head" aria-hidden="true">${DAYS.map(x => `<span>${x[0]}</span>`).join("")}</div><div class="cal-grid">${cells}</div></div>`;
    };
    return `<div class="rcal" data-cal="${id}" ${anchor != null ? `data-anchor="${anchor}"` : ""}>
      <div class="rcal-nav">
        <button class="icon-btn" data-act="calnav" data-cal="${id}" data-v="-1" data-k="calnav:${id}:-1" aria-label="Previous month" ${v <= 0 ? "disabled" : ""}>${icon("left", 18)}</button>
        <button class="icon-btn" data-act="calnav" data-cal="${id}" data-v="1" data-k="calnav:${id}:1" aria-label="Next month" ${v >= MAX_VIEW ? "disabled" : ""}>${icon("right", 18)}</button>
      </div>
      <div class="rcal-months">${month(v)}${month(v + 1)}</div>
    </div>`;
  }
  // Hover shows the range you're about to select
  app.addEventListener("mouseover", (e) => {
    const btn = e.target.closest && e.target.closest(".rcal [data-o]");
    if (!btn) return;
    const cal = btn.closest(".rcal"), anchor = cal.dataset.anchor;
    if (anchor == null) return;
    const h = +btn.dataset.o, lo = Math.min(h, +anchor), hi = Math.max(h, +anchor);
    cal.querySelectorAll("[data-o]").forEach(x => { const o = +x.dataset.o; x.classList.toggle("hover", o >= lo && o <= hi); });
  });

  // ---------- home ----------
  function home() {
    const rows = [["Headcount", "Capacity per space and layout"], ["Dates and flexibility", "Availability and blackout dates"], ["Budget", "Pricing rules"], ["The vibe", "Photos and style tags"], ["Must-haves", "Amenities and AV"], ["Dietary and accessibility needs", "Catering and accessibility features"], ["Where people travel from", "Location"]];
    return `<div class="wrap home">
      <p class="eyebrow">Onboarding concept</p>
      <h1 tabindex="-1">Two onboardings. One data model.</h1>
      <p class="lede">A concept for Planned by Robert Riopel.</p>
      <ul class="points">
        <li><strong>The gap</strong><span>A venue can add a basic listing in a minute, but the details planners rely on still get sorted out over email and calls. A first-time planner has to know what to ask for.</span></li>
        <li><strong>The idea</strong><span>Guided, visual onboarding on both sides. AI runs in the background.</span></li>
        <li><strong>The payoff</strong><span>A planner lands on an event that is ready to book, and a venue's complete listing is ready for review in minutes.</span></li>
      </ul>
      <div class="entries">
        <a class="entry" href="#planner/0" data-act="enter-planner">
          <span class="entry-art">${art("structured")}</span>
          <span class="entry-body"><span class="entry-kicker">Flow A · Planner</span><span class="entry-title">Plan an event</span><span class="entry-sub">As Maya, Executive Assistant at Fernway</span></span>
          <span class="entry-go">${icon("arrow", 20)}</span>
        </a>
        <a class="entry" href="#supplier/0">
          <span class="entry-art">${art("loft")}</span>
          <span class="entry-body"><span class="entry-kicker">Flow B · Supplier</span><span class="entry-title">List a venue</span><span class="entry-sub">As Sophie, owner of The Foundry Loft</span></span>
          <span class="entry-go">${icon("arrow", 20)}</span>
        </a>
      </div>
      <details class="connect">
        <summary><span>How the two flows connect</span>${icon("down", 18)}</summary>
        <p class="muted small">Every question a planner answers is matched against something a venue already told us. The venue Sophie lists in Flow B is the one Maya can book in Flow A.</p>
        <table><thead><tr><th scope="col">Planner is asked…</th><th scope="col">Venue listing captures…</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</tbody></table>
      </details>
      <div class="validate">
        <h2>What I'd validate</h2>
        <ul><li>Intake completion rate</li><li>Share of plan items that are “Bookable now”</li><li>A venue's time to go live</li></ul>
      </div>
      <p class="fine">Independent concept based on public information. Not affiliated with or endorsed by Planned. All companies, people and venues are fictional.</p>
    </div>`;
  }

  // ---------- Flow A: planner ----------
  const policyBanner = () => policy() ? `<div class="policy-banner">${icon("shield", 18)}<span><strong>Company policy preview.</strong> How this looks once Fernway adds an event policy and an approver.</span><button class="btn-small" data-act="policy-exit" data-k="policy-exit">Exit preview</button></div>` : "";

  function budgetStatus(t) {
    if (policy()) {
      const over = t > D.company.policyLimit;
      return { ok: !over, text: over ? "Needs sign-off from Jordan Lee (Finance)" : "Within Fernway policy" };
    }
    return null;
  }

  // Grouped data sheet that fills in as Maya answers
  function planPreview(step) {
    const a = state.a, n = Math.max(0, Math.min(step - 1, 7));
    const count = D.venueCounts[n];
    const range = n >= 6 ? D.ranges.feel : n >= 5 ? D.ranges.budget : D.ranges.start;
    const not = `<span class="faint">Not set yet</span>`;
    const row = (s, k, v) => `<div class="sheet-row ${step === s ? "live" : ""}"><dt>${k}</dt><dd>${step >= s ? v : not}</dd></div>`;
    const sec = (title, rows) => `<div class="sheet-sec"><p class="sheet-h">${title}</p><dl>${rows}</dl></div>`;
    const typeVal = a.type === "other" && a.otherText.trim() ? `Something else: ${esc(a.otherText.trim())}` : eventType().label;
    const from = a.origins.filter(o => o.count > 0).map(o => `${esc(cityShort(o.name))} ${o.count}`).join(" · ") || "Not added";
    const vibes = a.vibes.map(id => (D.vibes.find(v => v.id === id) || {}).label).filter(Boolean);
    const needs = (obj) => selectedKeys(obj).map(esc).join(", ") || "None";
    const st = step >= 5 ? budgetStatus(budgetTotal()) : null;
    return `<div class="preview">
      <p class="aside-kicker">Plan preview</p>
      <div class="pcard">
        <span class="pcard-art">${art(vibes.length ? D.vibes.find(v => v.id === a.vibes[0]).art : "structured")}</span>
        <div class="pcard-body"><p class="pcard-title">${eventType().title}</p><p class="muted small">${step >= 3 ? dateLabel() + " · " : ""}${step >= 4 ? esc(dest()) + " · " : ""}${num(a.headcount)} people</p></div>
      </div>
      <div class="stats">
        <div><span class="stat-num" aria-live="polite">${num(count)}</span><span class="stat-label">matching venues</span></div>
        <div><span class="stat-num">${range}</span><span class="stat-label">estimated total</span></div>
      </div>
      ${st ? `<p class="policy ${st.ok ? "ok" : "warn"}">${icon(st.ok ? "shield" : "user", 16)}${st.text}</p>` : ""}
      <div class="sheet">
        ${sec("Event", row(1, "Type", typeVal))}
        ${sec("Who", row(2, "Headcount", `${num(a.headcount)} people`) + row(2, "Travelling from", from) + row(2, "Executives", a.execs ? "Yes" : "No"))}
        ${sec("When", row(3, "Dates", dateLabel(true)) + row(3, "Length", duration().label) + row(3, "Flexibility", D.flexibility[a.flex]))}
        ${sec("Where", row(4, "City", a.whereMode === "help" ? `${esc(dest())}, suggested` : esc(dest())) + (a.whereNote.trim() && step >= 4 ? row(4, "Notes", esc(a.whereNote.trim())) : ""))}
        ${sec("Budget", row(5, "Per person", `${money(a.pp)} a day`) + row(5, "Total", `About ${money(budgetTotal())}`))}
        ${sec("Vibe", row(6, "Feel", vibes.join(", ") || "Open to anything"))}
        ${sec("Needs", row(6, "Must-haves", needs(a.must)) + row(6, "Dietary", needs(a.diet)) + row(6, "Accessibility", needs(a.access)))}
        ${sec("Priorities", row(7, "Top priority", a.ranking[0]))}
      </div>
    </div>`;
  }
  function previewBar(step) {
    const n = Math.max(0, Math.min(step - 1, 7));
    const range = n >= 6 ? D.ranges.feel : n >= 5 ? D.ranges.budget : D.ranges.start;
    return `<strong>${num(D.venueCounts[n])}</strong> venues · ${range}`;
  }
  function refreshPreview() {
    const r = route(); if (r.flow !== "planner" || r.step > 8) return;
    const body = $(".aside-body", app), bar = $(".sheet-bar-text", app);
    if (body) body.innerHTML = planPreview(r.step);
    if (bar) bar.innerHTML = previewBar(r.step);
  }

  function placedLine() {
    const p = placed(), h = state.a.headcount;
    if (p === h) return `<p class="placed ok" id="placed">${icon("check", 16)}All ${num(h)} people placed</p>`;
    if (p < h) return `<p class="placed" id="placed">${num(p)} of ${num(h)} people placed. Rough numbers are fine.</p>`;
    return `<p class="placed warn" id="placed">${num(p)} people placed, but your headcount is ${num(h)}</p>`;
  }
  function budgetNote() {
    const a = state.a, t = budgetTotal(), [lo, hi] = D.typicalPerDay;
    if (policy()) {
      const over = t > D.company.policyLimit;
      return `<p class="explain-line">${icon("shield", 16)}<span>Fernway's event policy: events up to ${money(D.company.policyLimit)} book without approval. Above that, Jordan Lee in Finance signs off before anything is booked.</span></p>
        <p class="policy ${over ? "warn" : "ok"}">${icon(over ? "user" : "check", 16)}<span>${over ? `About ${money(t - D.company.policyLimit)} over the limit. Jordan Lee will be asked to sign off.` : "Within Fernway policy. No sign-off needed."}</span></p>`;
    }
    const where = a.pp < lo ? "Below typical. You'll see fewer options." : a.pp > hi ? "Above typical. Room for something special." : "Right in the typical range.";
    return `<p class="explain-line">${icon("spark", 16)}<span>Typical for a ${state.a.half ? "half-day" : `${spanDays()}-day`} ${eventType().label.toLowerCase()} for ${num(a.headcount)} in ${esc(dest())}: ${money(lo)} to ${money(hi)} per person per day.</span></p>
      <p class="policy ${a.pp < lo ? "warn" : "ok"}">${icon(a.pp < lo ? "alert" : "check", 16)}<span>${where}</span></p>`;
  }

  function planner(step) {
    const a = state.a;
    if (step === 9) return reveal();
    if (step === 10) return pay();
    if (step === 11) return success();
    const head = policyBanner() + (step === 0 ? "" : topbar(step <= 7 ? `Step ${step} of 7` : "Almost there", step <= 7 ? (step / 7) * 100 : 100));
    let body = "";
    switch (step) {
      case 0: body = policy() ? `
        <p class="eyebrow">Planned · Fernway workspace</p>
        <h1 tabindex="-1">Welcome to Planned, Maya.</h1>
        <p class="lede">Fernway runs its events here. Let's plan your first one. It takes about 2 minutes.</p>
        <div class="setup">
          <p class="setup-title">${icon("check", 18)} Already set up by your company</p>
          <ul>
            <li><span>Event policy</span><strong>Up to ${money(D.company.policyLimit)} CAD books without approval</strong></li>
            <li><span>Approver</span><strong>Jordan Lee, Finance</strong></li>
            <li><span>Payment</span><strong>${D.company.card}</strong></li>
            <li><span>Preferred hotels</span><strong>${D.company.hotels}</strong></li>
          </ul>
          <p class="muted small">You don't need to know the rules. We apply them for you.</p>
        </div>
        ${actions(primary("Start planning", "next", "start"))}` : `
        <p class="eyebrow">Your first event</p>
        <h1 tabindex="-1">Welcome to Planned, Maya.</h1>
        <p class="lede">Tell us about your event and we'll put together a plan you can book. It takes about 2 minutes.</p>
        <ol class="how">
          <li><span class="how-n">1</span><span><strong>Answer a few questions</strong><span class="muted small">Who, when, where and what it should feel like.</span></span></li>
          <li><span class="how-n">2</span><span><strong>We build your plan</strong><span class="muted small">Real venues, live prices and an agenda that fits.</span></span></li>
          <li><span class="how-n">3</span><span><strong>Review and book</strong><span class="muted small">Swap anything you like, then book in one step.</span></span></li>
        </ol>
        ${actions(primary("Start planning", "next", "start") + `<button class="btn btn-secondary" data-act="marketplace" data-k="marketplace">Browse the venue marketplace</button>`)}`; break;
      case 1: body = `
        <h1 tabindex="-1">What are you planning?</h1>
        <p class="lede">Pick the closest one. We'll set sensible defaults for the rest.</p>
        <div class="types">${D.eventTypes.map(t => `<button class="opt" aria-pressed="${a.type === t.id}" data-act="type" data-v="${t.id}" data-k="type:${t.id}">
          <span class="opt-ic">${icon(t.icon, 28)}</span><span class="opt-label">${t.label}</span>${a.type === t.id ? `<span class="opt-check">${icon("check", 14)}</span>` : ""}</button>`).join("")}</div>
        ${a.type === "other" ? `<div class="field">
          <label class="field-label" for="other-text">Please specify</label>
          <textarea id="other-text" class="textarea" data-text="otherText" data-k="other-text" rows="3" placeholder="For example: a product launch for 200 customers, with a keynote and drinks after">${esc(a.otherText)}</textarea>
          <p class="helper">${icon("spark", 16)} The more you tell us, the better your plan.</p></div>` : ""}
        ${actions(primary("Continue", "next"))}`; break;
      case 2: {
        const [lo, hi] = D.headcountRange;
        body = `
        <h1 tabindex="-1">Who's coming?</h1>
        <div class="field">
          <label class="field-label" for="hc">Headcount</label>
          <div class="hc">
            <button class="icon-btn bordered" data-act="hc" data-v="-1" aria-label="Fewer people" data-k="hc-">${icon("minus", 18)}</button>
            <input id="hc" class="hc-in ${ui.hcError ? "invalid" : ""}" inputmode="numeric" autocomplete="off" value="${a.headcount}" data-hc data-k="hc-in" aria-describedby="hc-hint hc-err" ${ui.hcError ? 'aria-invalid="true"' : ""}>
            <button class="icon-btn bordered" data-act="hc" data-v="1" aria-label="More people" data-k="hc+">${icon("plus", 18)}</button>
            <span class="muted small" id="hc-hint">people, ${num(lo)} to ${num(hi)}</span>
          </div>
          <p class="err" id="hc-err" ${ui.hcError ? "" : "hidden"}>${ui.hcError}</p>
        </div>
        <div class="field">
          <span class="field-label" id="origins-l">Where are people travelling from?</span>
          <ul class="origins" aria-labelledby="origins-l">${a.origins.map((o, i) => `<li>
            <span class="origin-name">${icon("pin", 16)}${esc(cityShort(o.name))}</span>
            <label class="origin-count"><span class="sr-only">People from ${esc(cityShort(o.name))}</span><input inputmode="numeric" autocomplete="off" value="${o.count}" data-origin="${i}" data-k="origin:${i}"></label>
            <span class="muted small">people</span>
            <button class="icon-btn" data-act="origin-remove" data-v="${i}" data-k="origin-remove:${i}" aria-label="Remove ${esc(cityShort(o.name))}">${icon("close", 16)}</button>
          </li>`).join("")}</ul>
          ${adder("origin")}
          ${placedLine()}
        </div>
        <div class="field">${toggle("Any executives attending?", a.execs, "execs", "We'll favour private rooms and quieter venues.")}</div>
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 3: {
        const flexLo = a.flex === 1 ? addDays(a.start, -7) : null, flexHi = a.flex === 1 ? addDays(a.end, 7) : null;
        const months = [ymOf(a.start).join("-"), ymOf(a.end).join("-")];
        if (ui.calView.plan == null) ui.calView.plan = Math.min(MAX_VIEW, viewOf(a.start));
        const cal = rangeCal("plan", (o) => {
          const sel = o >= a.start && o <= a.end;
          const flex = !sel && (a.flex === 1 ? o >= flexLo && o <= flexHi : a.flex === 2 ? months.includes(ymOf(o).join("-")) : false);
          return { cls: [sel && "sel", sel && o === a.start && "s", sel && o === a.end && "e", flex && "flex"], pressed: sel, label: sel ? "selected" : flex ? "within your flexible window" : "" };
        }, ui.pick ? a.start : null);
        const n = spanDays(), custom = !a.half && n > 3;
        body = `
        <h1 tabindex="-1">When?</h1>
        <div class="field">
          <div class="field-label-row"><span class="field-label">Dates</span><strong class="date-sum" aria-live="polite">${dateLabel(true)}</strong></div>
          ${cal}
          <div class="cal-foot">
            <p class="helper">${ui.pick ? `<strong>From ${ordLabel(a.start)}.</strong> Now tap an end date.` : "Tap a start date, then an end date."}</p>
            <div class="avail-legend small muted"><span><i class="lg lg-sel"></i>Your dates</span>${a.flex ? `<span><i class="lg lg-flex"></i>${a.flex === 1 ? "Within a week either side" : "Any time that month"}</span>` : ""}</div>
          </div>
        </div>
        <div class="field"><span class="field-label">How long?</span><div class="chips">${D.durations.map(d => chip(d.label, d.id === "half" ? a.half : !a.half && n === +d.id, "dur", d.id)).join("")}${custom ? chip(`Custom · ${n} days`, true, "dur", "custom") : ""}</div></div>
        <div class="field"><span class="field-label">How flexible are you?</span>${seg("Flexibility", D.flexibility, a.flex, "flex")}
          <p class="helper">Flexible dates usually open up more options.</p></div>
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 4: {
        const top = topOrigin(), max = Math.max(1, ...a.origins.map(o => o.count));
        const total = placed();
        body = `
        <h1 tabindex="-1">Where?</h1>
        ${seg("Where", [{ v: "help", l: "Help me choose" }, { v: "know", l: "I know where" }], a.whereMode, "wmode")}
        ${a.whereMode === "help" ? `
          <p class="lede small-lede">We'll find the best place to host, based on where your group is and how far everyone has to travel.</p>
          ${top ? `<div class="panel where">
            <p class="field-label">Where your group is coming from</p>
            <ul class="bars">${a.origins.filter(o => o.count > 0).sort((x, y) => y.count - x.count).map(o => `<li><span class="bar-name">${esc(cityShort(o.name))}</span><span class="bar-track"><span class="bar-fill" style="width:${(o.count / max) * 100}%"></span></span><span class="bar-n">${o.count}</span></li>`).join("")}</ul>
            <p class="where-rec">${icon("spark", 16)}<span>Most of your group is already in ${esc(cityShort(top.name))} (${top.count} of ${total}), so hosting there means the fewest people travel. We'll check it against travel times and venue availability for everyone, and recommend the best fit in your plan.</span></p>
          </div>` : `<p class="helper">Add where people are travelling from and we'll weigh travel time for everyone. <button class="link inline" data-act="goto" data-v="2">Go to Who's coming</button></p>`}`
          : `<p class="lede small-lede">Pick a city. We'll still check travel time for everyone.</p>
          <div class="chips">${chip(esc(cityShort(a.destName)), true, "noop", "dest")}${adder("dest")}</div>`}
        <div class="field">
          <label class="field-label" for="where-note">Anything we should know? <span class="muted">Optional</span></label>
          <textarea id="where-note" class="textarea" data-text="whereNote" data-k="where-note" rows="2" placeholder="For example: near the airport, or outside the city">${esc(a.whereNote)}</textarea>
        </div>
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 5: {
        const [tlo, thi] = D.typicalPerDay, pos = (v) => ((v - 250) / 350) * 100;
        body = `
        <h1 tabindex="-1">What's the budget?</h1>
        <p class="lede">${policy() ? "Prefilled from Fernway's event policy. Adjust if you need to." : "We've suggested a starting point based on similar events. Adjust if you need to."}</p>
        <div class="budget">
          <p class="budget-big"><span id="b-pp">${money(a.pp)}</span> <span class="muted">per person per day</span></p>
          <p class="muted">About <strong id="b-total">${money(budgetTotal())}</strong> total for ${num(a.headcount)} people over ${duration().label.toLowerCase()}</p>
          <div class="range-wrap">
            <span class="typical-band" style="left:${pos(tlo)}%;width:${pos(thi) - pos(tlo)}%" aria-hidden="true"><span>Typical</span></span>
            <label class="sr-only" for="pp">Budget per person per day</label>
            <input id="pp" type="range" min="250" max="600" step="10" value="${a.pp}" data-k="pp" aria-valuetext="${money(a.pp)} per person per day">
          </div>
          <div class="range-ends muted small"><span>$250</span><span>$600</span></div>
          <div id="b-note" aria-live="polite">${budgetNote()}</div>
        </div>
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 6: {
        const group = (title, key, list) => {
          const custom = Object.keys(a[key]).filter(k => !list.includes(k));
          return `<div class="field"><span class="field-label">${title}</span><div class="chips">${list.concat(custom).map(m => chip(esc(m), a[key][m], key, m)).join("")}${adder(key)}</div></div>`;
        };
        body = `
        <h1 tabindex="-1">What's the vibe?</h1>
        <p class="lede">Pick as many as you like, or skip it. It helps us shortlist places that feel right.</p>
        <div class="vibes">${D.vibes.map(v => { const on = a.vibes.includes(v.id); return `<button class="pick" aria-pressed="${on}" data-act="vibe" data-v="${v.id}" data-k="vibe:${v.id}">
          <span class="pick-art">${art(v.art)}</span><span class="pick-label">${v.label}</span>${on ? `<span class="opt-check">${icon("check", 14)}</span>` : ""}</button>`; }).join("")}</div>
        ${group("Must-haves", "must", D.mustHaves)}
        ${group("Dietary needs", "diet", D.dietary)}
        ${group("Accessibility", "access", D.access)}
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 7: body = `
        <h1 tabindex="-1">What matters most?</h1>
        <p class="lede">Drag to rank, or use the arrows. We'll weigh the plan the same way.</p>
        <ol class="rank" id="rank">${a.ranking.map((p, i) => `<li draggable="true" data-i="${i}">
          <span class="grip" aria-hidden="true">${icon("grip", 18)}</span><span class="rank-n">${i + 1}</span><span class="rank-label">${p}</span>
          <span class="rank-btns">
            <button data-act="rank" data-v="${i}:-1" aria-label="Move ${p} up" data-k="rank-up:${p}" ${i === 0 ? "disabled" : ""}>${icon("up", 18)}</button>
            <button data-act="rank" data-v="${i}:1" aria-label="Move ${p} down" data-k="rank-down:${p}" ${i === a.ranking.length - 1 ? "disabled" : ""}>${icon("down", 18)}</button>
          </span></li>`).join("")}</ol>
        ${actions(primary("Build my plan", "next", "build"))}`; break;
      case 8: {
        const lines = D.building.slice();
        if (policy()) lines[0] = "Applying Fernway's event policy";
        body = `
        <h1 tabindex="-1">Building your plan</h1>
        <p class="lede">This takes a few seconds.</p>
        <ul class="build" aria-live="polite">${lines.map(b => `<li><span class="build-ic">${icon("check", 14)}</span><span>${b.replace("{city}", esc(dest()))}</span></li>`).join("")}</ul>`; break;
      }
    }
    const main = `${head}<section class="screen">${body}</section>`;
    return layout(main, planPreview(step), { title: "Plan preview", bar: previewBar(step) });
  }

  function reveal() {
    const a = state.a, opt = option(), items = picked(opt), t = total(opt), lim = limit(), over = t > lim;
    const title = eventType().title;
    const dayLabel = (i) => { const d = fromOrd(addDays(a.start, i)); return `Day ${i + 1} · ${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`; };
    const status = policy() ? (over ? "Needs sign-off" : "Within Fernway policy") : (over ? "Over your budget" : "Within your budget");
    const main = `
      ${policyBanner()}${topbar("Plan ready", 100)}
      <section class="screen">
        <p class="eyebrow ok-text">${icon("check", 16)} Your plan is ready</p>
        <h1 tabindex="-1">Your ${title.charAt(0).toLowerCase() + title.slice(1)}, planned.</h1>
        <p class="lede">${dateLabel()} · ${esc(dest())} · ${num(a.headcount)} people · ${money(t)} · ${status}</p>
        <div class="tabs" role="tablist" aria-label="Plan options">${D.options.map(o => `<button role="tab" aria-selected="${o.id === opt.id}" tabindex="${o.id === opt.id ? 0 : -1}" data-act="opt" data-v="${o.id}" data-k="opt:${o.id}" aria-controls="plan-panel">
          <span class="tab-label">${o.label}</span><span class="tab-price">${money(total(o))}</span><span class="tab-venue">${o.venue}</span></button>`).join("")}</div>
        <div id="plan-panel" role="tabpanel" aria-label="${opt.label}">
          <h2 class="h2">Agenda</h2>
          <div class="agenda">${D.agenda.slice(0, Math.max(1, Math.min(2, spanDays()))).map((d, i) => `<div class="day"><p class="day-title">${dayLabel(i)}</p><ol>${d.items.map(it => `<li><span class="t">${it[0]}</span><span>${it[1]}</span></li>`).join("")}</ol></div>`).join("")}</div>
          <h2 class="h2">What's in the plan</h2>
          <ul class="comps">${items.map((c, i) => {
            const ch = choices(opt, i), kind = opt.components[i].kind, why = whyFor(c, kind);
            return `<li class="comp">
              <span class="comp-art">${art(c.art)}</span>
              <div class="comp-body">
                <p class="comp-kind">${kind}</p>
                <p class="comp-name">${c.name}</p>
                <p class="muted small">${c.detail}</p>
                ${why ? `<p class="why"><span>Why we picked this</span> ${why}</p>` : ""}
                <div class="comp-meta">${badge(Object.assign({ kind }, c), true)}</div>
              </div>
              <div class="comp-side">
                <p class="comp-price">${c.price ? money(c.price) : "Included"}</p>
                ${ch.length > 1 ? `<button class="btn-small" data-act="swap" data-v="${i}" data-k="swap:${i}">${icon("swap", 16)}Swap</button>` : ""}
              </div>
            </li>`;
          }).join("")}</ul>
        </div>
        <div class="mobile-only">${breakdownCtas(over)}</div>
      </section>`;
    const statusLine = policy()
      ? (over ? `${money(t - lim)} over Fernway policy. Jordan Lee signs off before booking.` : "Within Fernway policy")
      : (over ? `${money(t - lim)} over your budget of ${money(lim)}` : `Within your budget of ${money(lim)}`);
    const aside = `<div class="breakdown">
      <p class="aside-kicker">Price breakdown · CAD</p>
      <ul>${items.map((c, i) => `<li><span>${opt.components[i].kind}</span><span>${c.price ? money(c.price) : "Included"}</span></li>`).join("")}</ul>
      <p class="bd-total"><span>Total</span><strong>${money(t)}</strong></p>
      <p class="policy ${over ? "warn" : "ok"}">${icon(over ? (policy() ? "user" : "alert") : "check", 16)}<span>${statusLine}</span></p>
      <div class="desktop-only">${breakdownCtas(over)}</div>
    </div>`;
    return layout(main, aside, { title: "Price breakdown", bar: `<strong>${money(t)}</strong> · ${status}` });
  }
  function breakdownCtas(over) {
    const main = policy() && over ? primary("Send for approval to Jordan Lee", "approve", "cta-main") : primary("Book now", "book", "cta-main");
    return `<div class="stack">
      ${main}
      <button class="btn btn-secondary" data-act="share" data-k="share">${icon("share", 16)}Share for sign-off</button>
      <button class="link" data-act="specialist" data-k="specialist">Talk to a specialist</button>
    </div>`;
  }

  function pay() {
    const a = state.a, opt = option(), items = picked(opt), t = total(opt);
    const method = policy() ? `
        <div class="panel rows">
          <div class="row">${icon("card", 20)}<div><span class="muted small">Payment</span><p>${D.company.card}</p></div><span class="badge badge-neutral">${icon("lock", 14)}Set by Fernway</span></div>
          <div class="row">${icon("file", 20)}<div><span class="muted small">Cost centre</span><p>${D.company.costCentre}</p></div><span class="badge badge-neutral">Auto-filled</span></div>
        </div>` : `
        <div class="field">
          <span class="field-label">How would you like to pay?</span>
          ${seg("Payment method", [{ v: "now", l: "Pay now" }, { v: "invoice", l: "Invoice me" }], a.payMethod, "paymethod")}
          <div class="panel rows">${a.payMethod === "now"
            ? `<div class="row">${icon("card", 20)}<div><span class="muted small">Card payment</span><p>Pay ${money(t)} today on Planned's secure payment page</p></div><span class="badge badge-neutral">${icon("lock", 14)}Secure</span></div>`
            : `<div class="row">${icon("file", 20)}<div><span class="muted small">Invoice · due in 30 days</span><p>Billed to Fernway, sent to ${D.planner.email}</p></div></div>
               <div class="row po-row"><label for="po" class="muted small">PO number <span class="faint">Optional</span></label><input id="po" class="po-in" data-text="po" data-k="po" autocomplete="off" placeholder="For example: PO-20418" value="${esc(a.po)}"></div>`}
          </div>
        </div>`;
    const cta = policy() || a.payMethod === "invoice" ? "Confirm booking" : `Pay ${money(t)} and book`;
    const main = `
      ${policyBanner()}${topbar("Confirm", 100)}
      <section class="screen">
        <h1 tabindex="-1">Confirm and pay</h1>
        <p class="lede">${eventType().title} · ${dateLabel(true)} · ${esc(dest())} · ${num(a.headcount)} people</p>
        <div class="panel">
          <ul class="summary">${items.map((c, i) => `<li><span><span class="muted small">${opt.components[i].kind}</span><br>${c.name}</span><span>${c.price ? money(c.price) : "Included"}</span></li>`).join("")}</ul>
          <p class="bd-total"><span>Total</span><strong>${money(t)} CAD</strong></p>
        </div>
        ${method}
        <p class="note">${icon("shield", 16)} Planned pays each supplier for you. ${policy() || a.payMethod === "invoice" ? "You'll get one invoice." : "One payment covers everything."}</p>
        <label class="check ${ui.termsError ? "error" : ""}"><input type="checkbox" data-act="terms" data-k="terms" ${a.terms ? "checked" : ""} ${ui.termsError ? 'aria-invalid="true" aria-describedby="terms-err"' : ""}><span>I accept the booking terms and each supplier's cancellation policy.</span></label>
        ${ui.termsError ? `<p class="err" id="terms-err" role="alert">Please accept the terms to confirm.</p>` : ""}
        ${actions(primary(cta, "confirm"))}
      </section>`;
    return layout(main);
  }

  function success() {
    const a = state.a, appr = policy() && a.approval, t = total(option());
    const payLine = policy()
      ? `<li>${icon("file", 18)}<span><strong>One invoice, auto-tagged to ${D.company.costCentre}.</strong> Nothing to file.</span></li>`
      : a.payMethod === "invoice"
        ? `<li>${icon("file", 18)}<span><strong>Invoice sent to ${D.planner.email}.</strong> Due in 30 days${a.po.trim() ? `, reference ${esc(a.po.trim())}` : ""}.</span></li>`
        : `<li>${icon("card", 18)}<span><strong>Paid in full.</strong> Your receipt is in your inbox.</span></li>`;
    const main = `
      ${policyBanner()}
      <section class="screen center">
        <span class="done-mark ${appr ? "pending" : ""}">${icon(appr ? "clock" : "check", 30)}</span>
        <h1 tabindex="-1">${appr ? "Sent to Jordan Lee for approval" : "You're booked."}</h1>
        <p class="lede">${eventType().title} · ${dateLabel()} · ${esc(dest())} · ${num(a.headcount)} people · ${money(t)}</p>
        ${appr ? `<ol class="timeline" aria-label="Approval status">
            <li class="done"><span class="dot"></span><span><strong>Sent</strong><span class="muted small">Just now</span></span></li>
            <li class="active"><span class="dot"></span><span><strong>Reviewing</strong><span class="muted small">Jordan usually replies within a day</span></span></li>
            <li><span class="dot"></span><span><strong>Booked automatically once approved</strong><span class="muted small">Nothing else for you to do</span></span></li>
          </ol>` : `<ul class="next">
            <li>${icon("check", 18)}<span><strong>Supplier confirmations are arriving.</strong> Two are in, three to go.</span></li>
            ${payLine}
          </ul>`}
        <div class="stack narrow">
          ${a.invited ? `<div class="stub">${icon("spark", 18)}<span>Next: Registration builds your event page and invites from this plan.</span></div>`
            : `<button class="btn btn-primary" data-act="invite" data-k="invite">Invite your ${num(a.headcount)} attendees ${icon("arrow", 18)}</button>`}
          <a class="link" href="#supplier/0">See how The Foundry Loft got listed ${icon("arrow", 16)}</a>
        </div>
      </section>`;
    return layout(main);
  }

  // ---------- Flow B: supplier ----------
  function priceError(f, raw) {
    const n = parseNum(raw);
    if (f.unit === "percent") {
      const [lo, hi] = D.listing.percentRange;
      return n >= lo && n <= hi ? "" : `Enter a percentage between ${lo} and ${hi}.`;
    }
    const [lo, hi] = D.listing.moneyRange;
    return n >= lo && n <= hi ? "" : `Enter an amount between ${money(lo)} and ${money(hi)}.`;
  }
  const pricesValid = () => D.listing.pricing.every(f => !priceError(f, state.b.prices[f.id]));

  function quality(step) {
    const b = state.b, drafted = b.drafted || step >= 2;
    return D.quality.map(q => {
      let done = step >= q.step;
      if (q.id === "photos") done = drafted && step >= 1;
      if (q.id === "pricing") done = step >= 3 && pricesValid();
      return Object.assign({ done }, q);
    });
  }
  const qualityPct = (step) => quality(step).reduce((s, q) => s + (q.done ? q.pts : 0), 0);
  function meter(step) {
    const items = quality(step), pct = qualityPct(step);
    return `<div class="meter">
      <p class="aside-kicker">Listing quality</p>
      <p class="meter-num" aria-live="polite">${pct}%</p>
      <div class="meter-bar" role="progressbar" aria-label="Listing quality" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><span style="transform:scaleX(${pct / 100})"></span></div>
      ${state.b.instant && step >= 3 ? `<p class="badge badge-success">${icon("bolt", 14)}Instant-quote ready</p>` : ""}
      <ul class="qlist">${items.map(q => `<li class="${q.done ? "done" : ""}"><span class="q-ic">${q.done ? icon("check", 14) : ""}</span><span><strong>${q.label}</strong><span>${q.payoff}</span></span></li>`).join("")}</ul>
      <p class="muted small">Complete listings rank higher when planners search.</p>
    </div>`;
  }
  const meterBar = (step) => `Listing quality <strong>${qualityPct(step)}%</strong>`;
  function refreshMeter() {
    const r = route(), body = $(".aside-body", app), bar = $(".sheet-bar-text", app);
    if (body) body.innerHTML = meter(r.step);
    if (bar) bar.innerHTML = meterBar(r.step);
  }

  // Availability preview: select a range, then mark it
  function selection() {
    const a = ui.rangeStart, b = ui.rangeEnd;
    if (a == null) return null;
    const lo = b == null ? a : Math.min(a, b), hi = b == null ? a : Math.max(a, b);
    const ords = []; for (let o = lo; o <= hi; o = addDays(o, 1)) ords.push(o);
    return { lo, hi, done: b != null, ords };
  }
  function availability() {
    const sel = selection(), un = state.b.unavailable;
    if (ui.calView.avail == null) ui.calView.avail = viewOf(20261001);
    const cal = rangeCal("avail", (o) => {
      const off = un.includes(o), inSel = sel && o >= sel.lo && o <= sel.hi;
      return { cls: [off && "off", inSel && "sel", sel && o === sel.lo && "s", sel && o === sel.hi && "e"], pressed: inSel, label: off ? "unavailable" : "available" };
    }, sel && !sel.done ? sel.lo : null);
    let bar;
    if (!sel) bar = `<p class="muted small">Tap a start date, then an end date. Select a single day, a week or a whole month.</p>`;
    else if (!sel.done) bar = `<p class="small"><strong>From ${ordLabel(sel.lo)}.</strong> Now tap an end date, or pick a shortcut.</p>
      <div class="avail-btns"><button class="btn-small" data-act="selweek" data-k="selweek">Whole week</button><button class="btn-small" data-act="selmonth" data-k="selmonth">All of ${MONTHS_LONG[ymOf(sel.lo)[1]]}</button><button class="btn-small ghost" data-act="selclear" data-k="selclear">Cancel</button></div>`;
    else {
      const n = sel.ords.length;
      bar = `<p class="small"><strong>${n === 1 ? ordLabel(sel.lo) : `${ordLabel(sel.lo)} to ${ordLabel(sel.hi)}`}</strong> · ${n} ${n === 1 ? "day" : "days"} selected</p>
      <div class="avail-btns"><button class="btn-small dark" data-act="markoff" data-k="markoff">Mark unavailable</button><button class="btn-small" data-act="markon" data-k="markon">Mark available</button><button class="btn-small ghost" data-act="selclear" data-k="selclear">Clear</button></div>`;
    }
    return `<div class="avail">
      <div class="avail-head"><div><p class="avail-title">Availability setting</p><p class="muted small">${un.length} ${un.length === 1 ? "date" : "dates"} marked unavailable</p></div><span class="badge badge-neutral">Preview</span></div>
      ${cal}
      <div class="avail-bar" aria-live="polite">${bar}</div>
      <div class="avail-legend small muted"><span><i class="lg lg-on"></i>Available</span><span><i class="lg lg-off"></i>Unavailable</span><span><i class="lg lg-sel"></i>Selected</span></div>
      <p class="avail-note">${icon("clock", 16)}<span>This is a preview. Once your venue is published, you have full control over your calendar and availability from your venue dashboard.</span></p>
    </div>`;
  }

  function priceField(f) {
    const raw = state.b.prices[f.id], err = ui.priceErrors[f.id];
    const pct = f.unit === "percent";
    return `<div class="rule">
      <label for="price-${f.id}">${f.label}</label>
      <div class="rule-in-wrap">
        <span class="rule-in ${err ? "invalid" : ""}">${pct ? "" : `<span class="affix">$</span>`}<input id="price-${f.id}" data-price="${f.id}" data-k="price:${f.id}" inputmode="numeric" autocomplete="off" value="${raw}" ${err ? `aria-invalid="true" aria-describedby="err-${f.id}"` : ""}>${pct ? `<span class="affix">%</span>` : ""}</span>
        <p class="rule-err" id="err-${f.id}" ${err ? "" : "hidden"}>${err || ""}</p>
      </div>
    </div>`;
  }

  function reviewCard(title, step, rows) {
    return `<div class="review-card">
      <div class="review-head"><p class="review-title">${title}</p><button class="btn-small" data-act="edit" data-v="${step}" data-k="edit:${title}" aria-label="Edit ${title.toLowerCase()}">Edit</button></div>
      ${rows}
    </div>`;
  }
  const kv = (k, v) => `<div class="kv"><span>${k}</span><strong>${v}</strong></div>`;

  function supplier(step) {
    const b = state.b, L = D.listing;
    const head = step >= 1 && step <= 6 ? topbar(`Step ${step} of 6`, (step / 6) * 100) : "";
    let body = "";
    switch (step) {
      case 0: body = `
        <p class="eyebrow">Planned for venues</p>
        <h1 tabindex="-1">Get your venue in front of corporate planners.</h1>
        <p class="lede">Free to list. You pay a commission only when a booking is confirmed, never on cancelled events.</p>
        <ul class="ticks">
          <li>${icon("globe", 18)}<span>We draft your listing from your website</span></li>
          <li>${icon("clock", 18)}<span>About 5 minutes to check and finish it</span></li>
          <li>${icon("user", 18)}<span>Our team reviews it, then helps you get set up</span></li>
        </ul>
        ${actions(primary("Start with your website", "next", "start"))}`; break;
      case 1: {
        const reading = ui.reading === 1, drafted = b.drafted && !reading;
        body = `
        <h1 tabindex="-1">${drafted ? "Here's your draft listing" : "Claim your listing"}</h1>
        <p class="lede">${drafted ? "Check it over. You can change anything later." : "Start with your website. We'll pull in what's already there."}</p>
        <form class="claim" data-form="draft" onsubmit="return false">
          <label for="site" class="field-label">Your website</label>
          <div class="claim-row"><span class="claim-in">${icon("globe", 18)}<input id="site" type="text" value="${D.supplier.site}" readonly data-k="site"></span>
          ${drafted ? "" : `<button class="btn btn-primary" type="submit" data-act="draft" data-k="draft" ${reading ? "disabled" : ""}>Draft my listing</button>`}</div>
        </form>
        ${reading ? `<div class="reading" aria-live="polite"><p><span class="spinner"></span> Reading your website…</p><ul class="build">${["Found 6 photos", "Found 2 spaces", "Found your address and description"].map(x => `<li><span class="build-ic">${icon("check", 14)}</span><span>${x}</span></li>`).join("")}</ul></div>` : ""}
        ${drafted ? `<div class="draft">
          <div class="draft-head"><div><p class="draft-name">${L.name}</p><p class="muted">${icon("pin", 16)} ${L.location}</p></div><span class="badge badge-neutral">Drafted from your website</span></div>
          <p>${L.description}</p>
          <div class="photos">${L.photos.map((p, i) => `<span class="ph">${art(p, `Venue photo ${i + 1}`)}</span>`).join("")}</div>
          <p class="field-label">Spaces we found</p>
          <div class="chips static">${L.spaces.map(s => `<span class="chip" aria-pressed="true">${icon("check", 16)}<span>${s.name}</span></span>`).join("")}</div>
        </div>
        ${actions(primary("Looks right, continue", "next"))}` : ""}`; break;
      }
      case 2: body = `
        <h1 tabindex="-1">Your spaces</h1>
        <p class="lede">Capacity by layout helps us match you to the right requests.</p>
        ${L.spaces.map(s => `<div class="space">
          <span class="space-art">${art(s.art, s.name)}</span>
          <div class="space-body"><p class="space-name">${s.name}</p>
            <ul class="layouts">${s.layouts.map(l => `<li>${icon(l[0], 22)}<span class="lay-n">${l[2]}</span><span class="muted small">${l[1]}</span></li>`).join("")}</ul></div>
        </div>`).join("")}
        <button class="add-space" data-act="addspace" data-k="addspace">${icon("plus", 18)} Add a space</button>
        ${actions(primary("Continue", "next"))}`; break;
      case 3: body = `
        <h1 tabindex="-1">Pricing and availability</h1>
        <p class="lede">Set simple rules once. We use them for every request.</p>
        <div class="panel rules">${L.pricing.map(priceField).join("")}</div>
        <div class="panel instant ${b.instant ? "on" : ""}">
          ${toggle("Instant quotes", b.instant, "instant", "Let Planned quote from these rules. Planners see a firm price right away, and you skip writing quotes by hand. You can still decline any request.")}
          ${b.instant ? `<p class="badge badge-success">${icon("bolt", 14)}Instant-quote ready</p>` : ""}
        </div>
        ${availability()}
        ${actions(primary("Continue", "next"))}`; break;
      case 4: body = `
        <h1 tabindex="-1">Policies and getting paid</h1>
        <div class="field"><span class="field-label">Deposit at booking</span>${seg("Deposit", [{ v: 20, l: "20%" }, { v: 30, l: "30%" }, { v: 50, l: "50%" }], b.deposit, "deposit")}</div>
        <div class="field"><span class="field-label">Cancellation policy</span>${seg("Cancellation policy", L.cancellation.map(c => ({ v: c, l: c })), b.cancel, "cancel")}
          <p class="helper">${L.cancellationNotes[b.cancel]}</p></div>
        <div class="panel rows">
          <div class="row">${icon("file", 20)}<div><span class="muted small">Your own contract (optional)</span><p>Foundry_Loft_Terms_2026.pdf</p></div><span class="badge badge-neutral">Uploaded</span></div>
          <div class="row">${icon("bank", 20)}<div><span class="muted small">Payout account</span><p>Bank account •• 0921</p></div><span class="badge badge-success">${icon("check", 14)}Verified</span></div>
          <div class="row">${icon("file", 20)}<div><span class="muted small">GST/QST</span><p>Registered</p></div><span class="badge badge-success">${icon("check", 14)}Verified</span></div>
          <div class="row">${icon("shield", 20)}<div><span class="muted small">Insurance certificate</span><p>COI_2026.pdf</p></div><span class="badge badge-success">${icon("check", 14)}Uploaded</span></div>
        </div>
        <div class="explain">
          <p class="explain-title">How the commission works</p>
          <p>You set your prices. When a booking is confirmed, Planned collects payment from the company and pays you, minus a commission. If an event is cancelled, you pay nothing.</p>
          <p class="muted small">Example: a $5,800 booking at a 10% rate pays you $5,220, within 5 business days of the event.</p>
        </div>
        ${actions(primary("Continue", "next"))}`; break;
      case 5: body = `
        <h1 tabindex="-1">Team and response</h1>
        <div class="field"><span class="field-label">Who else handles requests?</span>
          <div class="panel rows"><div class="row">${icon("user", 20)}<div><p>Luc Gagnon</p><span class="muted small">Events manager · found on your website</span></div>
          ${b.teammate ? `<span class="badge badge-success">${icon("check", 14)}Invited</span>` : `<button class="btn-small" data-act="teammate" data-k="teammate">${icon("plus", 16)}Add</button>`}</div></div></div>
        <div class="field"><span class="field-label">Notify us by</span>
          <div class="chips">${chip("Email", b.email, "notify", "email")}${chip("SMS", b.sms, "notify", "sms")}</div></div>
        <div class="field"><span class="field-label">Response promise</span>
          <label class="check card-check"><input type="checkbox" data-act="promise" data-k="promise" ${b.promise ? "checked" : ""}><span><strong>Reply to requests within 10 business hours</strong><span class="muted small">Planners book the venues that answer first.</span></span></label></div>
        ${actions(primary("Review your listing", "next", "toreview"))}`; break;
      case 6: {
        const P = L.pricing.map(f => kv(f.label, f.unit === "percent" ? `${parseNum(b.prices[f.id])}%` : money(parseNum(b.prices[f.id])))).join("");
        body = `
        <h1 tabindex="-1">Review your listing</h1>
        <p class="lede">This is what our team will review. Edit anything before you submit.</p>
        <div class="review">
          ${reviewCard("Listing", 1, `<div class="review-listing"><span class="review-art">${art("loft")}</span><div><p class="review-name">${L.name}</p><p class="muted small">${L.location} · 6 photos</p><p class="small">${L.description}</p></div></div>`)}
          ${reviewCard("Spaces", 2, L.spaces.map(s => kv(s.name, s.layouts.map(l => `${l[1]} ${l[2]}`).join(" · "))).join(""))}
          ${reviewCard("Pricing", 3, P + kv("Instant quotes", b.instant ? "On" : "Off"))}
          ${reviewCard("Availability", 3, kv("Unavailable dates", `${b.unavailable.length} marked`))}
          ${reviewCard("Policies and payouts", 4, kv("Deposit", `${b.deposit}% at booking`) + kv("Cancellation", b.cancel) + kv("Payout account", "Bank account •• 0921 · Verified") + kv("Insurance", "COI_2026.pdf · Uploaded"))}
          ${reviewCard("Team and response", 5, kv("Teammates", b.teammate ? "Luc Gagnon, Events manager" : "Just you") + kv("Notifications", [b.email && "Email", b.sms && "SMS"].filter(Boolean).join(" and ") || "None") + kv("Response promise", b.promise ? "Within 10 business hours" : "Not set"))}
        </div>
        <div class="explain next-up">
          <p class="explain-title">What happens next</p>
          <p>Our team reviews every venue before planners see it. Once your listing is approved, we'll be in touch to book a short onboarding call and finish setting up your account.</p>
        </div>
        <label class="check ${ui.submitError ? "error" : ""}"><input type="checkbox" data-act="confirmlist" data-k="confirmlist" ${b.confirmed ? "checked" : ""} ${ui.submitError ? 'aria-invalid="true" aria-describedby="submit-err"' : ""}><span>I confirm these details are accurate and I agree to Planned's supplier terms.</span></label>
        ${ui.submitError ? `<p class="err" id="submit-err" role="alert">Please confirm your details to submit.</p>` : ""}
        ${actions(primary("Submit for review", "submitlisting"))}`; break;
      }
      case 7: return `<div class="wrap single">${topbar("Submitted", 100)}
        <section class="screen center">
          <span class="done-mark pending">${icon("clock", 30)}</span>
          <h1 tabindex="-1">Your listing is with our team.</h1>
          <p class="lede">Thanks, Sophie. We review every venue before it goes in front of corporate planners. We'll email and text you as soon as there's news.</p>
          <ol class="timeline" aria-label="What happens next">
            <li class="done"><span class="dot"></span><span><strong>Submitted</strong><span class="muted small">Just now</span></span></li>
            <li class="active"><span class="dot"></span><span><strong>Team review</strong><span class="muted small">Usually 1 to 2 business days</span></span></li>
            <li><span class="dot"></span><span><strong>Onboarding call</strong><span class="muted small">Once you're approved, we'll reach out to book a short call and finish your setup</span></span></li>
            <li><span class="dot"></span><span><strong>Live to corporate planners</strong><span class="muted small">Requests start arriving</span></span></li>
          </ol>
          <div class="stack narrow">
            <a class="link" href="#supplier/8" data-k="afterapproval">Preview: after approval ${icon("arrow", 16)}</a>
          </div>
        </section></div>`;
      case 8: body = `
        <div class="celebrate" aria-hidden="true">${Array.from({ length: 10 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
        <section class="screen center">
          <span class="done-mark">${icon("check", 30)}</span>
          <p class="eyebrow">After review and your onboarding call</p>
          <h1 tabindex="-1">You're live.</h1>
          <p class="lede">The Foundry Loft is now visible to corporate planners on Planned.</p>
        </section>
        <div class="live-grid">
          <div><p class="field-label">How planners see you</p>
            <div class="listing">
              <span class="listing-art">${art("loft", "The Foundry Loft")}</span>
              <div class="listing-body">
                <div class="listing-top"><p class="listing-name">The Foundry Loft</p>${state.b.instant ? `<span class="badge badge-success">${icon("bolt", 14)}Instant-quote ready</span>` : ""}</div>
                <p class="muted small">${icon("pin", 14)} Old Montreal · Up to 150 guests · 2 spaces</p>
                <p class="small">From ${money(Math.min(parseNum(b.prices.hall), parseNum(b.prices.board)) || 1300)} per day · Replies within 10 business hours</p>
              </div>
            </div></div>
          <div><p class="field-label">First request</p>
            <div class="request">
              <p class="request-top"><span class="badge badge-neutral">New · 2 min ago</span></p>
              <p class="request-name">Fernway · Product team offsite</p>
              <p class="muted small">24 people · Nov 18–19 · Boardroom and Main Hall</p>
              <p class="request-ok">${icon("check", 16)} Matches your rules. Quote sent automatically.</p>
            </div></div>
        </div>
        ${actions(`<a class="btn btn-primary" href="#planner/9" data-act="crosslink" data-k="crosslink">See it from the planner's side ${icon("arrow", 18)}</a>`)}`;
        return `<div class="wrap single wide">${body}</div>`;
    }
    const main = `${head}<section class="screen">${body}</section>`;
    return layout(main, meter(step), { title: "Listing quality", bar: meterBar(step) });
  }

  // ---------- validation ----------
  function hcError(raw) {
    const n = parseNum(raw), [lo, hi] = D.headcountRange;
    return Number.isInteger(n) && n >= lo && n <= hi ? "" : `Enter a number between ${num(lo)} and ${num(hi)}.`;
  }
  function showHcError() {
    const input = $("#hc", app), err = $("#hc-err", app); if (!input) return;
    input.classList.toggle("invalid", !!ui.hcError);
    if (ui.hcError) input.setAttribute("aria-invalid", "true"); else input.removeAttribute("aria-invalid");
    err.textContent = ui.hcError; err.hidden = !ui.hcError;
  }
  function showPriceError(id) {
    const f = D.listing.pricing.find(x => x.id === id), input = $(`#price-${id}`, app), err = $(`#err-${id}`, app);
    const msg = ui.priceErrors[id] = priceError(f, state.b.prices[id]);
    if (!input) return;
    input.closest(".rule-in").classList.toggle("invalid", !!msg);
    if (msg) { input.setAttribute("aria-invalid", "true"); input.setAttribute("aria-describedby", `err-${id}`); } else { input.removeAttribute("aria-invalid"); input.removeAttribute("aria-describedby"); }
    err.textContent = msg; err.hidden = !msg;
  }
  function validatePrices() {
    D.listing.pricing.forEach(f => showPriceError(f.id));
    const bad = D.listing.pricing.find(f => ui.priceErrors[f.id]);
    if (bad) { $(`#price-${bad.id}`, app).focus(); return false; }
    return true;
  }

  // ---------- events ----------
  app.addEventListener("click", (e) => {
    const opt = e.target.closest("[data-place]");
    if (opt) { const input = opt.closest(".adder").querySelector("input"); return commitAdder(input.dataset.adder, opt.dataset.place); }
    const el = e.target.closest("[data-act]");
    if (!el || el.disabled) return;
    const act = el.dataset.act, v = el.dataset.v, r = route();
    const a = state.a, b = state.b;
    switch (act) {
      case "back": return r.step > 0 ? go(r.flow, r.flow === "planner" ? (r.step === 11 && policy() && a.approval ? 9 : r.step === 9 ? 7 : r.step - 1) : r.step - 1) : go("home");
      case "next":
        if (r.flow === "supplier" && r.step === 3 && !validatePrices()) return;
        if (r.flow === "planner" && r.step === 2) { ui.hcError = hcError($("#hc", app).value); if (ui.hcError) { showHcError(); $("#hc", app).focus(); return; } }
        return go(r.flow, r.step + 1);
      case "goto": return go("planner", +v);
      case "sheet": ui.sheet = !ui.sheet; return render();
      case "enter-planner": state.a.policy = false; save(); return;
      case "marketplace": return toast("In the product, this opens the venue marketplace to browse freely.");
      case "policy-exit": return set(s => { s.a.policy = false; s.a.approval = false; if (r.step === 11) location.hash = "#planner/9"; });
      // Planner intake
      case "type": return set(s => s.a.type = v);
      case "hc": ui.hcError = ""; return set(s => s.a.headcount = Math.max(D.headcountRange[0], Math.min(D.headcountRange[1], s.a.headcount + +v)));
      case "origin-remove": return set(s => s.a.origins.splice(+v, 1));
      case "execs": return set(s => s.a.execs = !s.a.execs);
      case "adder-open": ui.adder = v; ui.adderIdx = -1; render(); { const i = $(`#adder-${v}`, app); if (i) { i.focus(); renderSuggestions(i); } } return;
      case "adder-cancel": ui.adder = null; render(); { const bt = app.querySelector(`[data-k="adder:${v}"]`); if (bt) bt.focus(); } return;
      case "adder-add": return commitAdder(v, ($(`#adder-${v}`, app) || {}).value);
      case "calnav": ui.calView[el.dataset.cal] = Math.max(0, Math.min(MAX_VIEW, (ui.calView[el.dataset.cal] || 0) + +v)); return render();
      case "plan-day": {
        const o = +v;
        if (!ui.pick) { ui.pick = true; return set(s => { s.a.start = s.a.end = o; s.a.half = false; }); }
        ui.pick = false;
        return set(s => { if (o < s.a.start) { s.a.end = s.a.start; s.a.start = o; } else s.a.end = o; });
      }
      case "dur": {
        if (v === "custom") return;
        ui.pick = false;
        return set(s => { if (v === "half") { s.a.half = true; s.a.end = s.a.start; } else { s.a.half = false; s.a.end = addDays(s.a.start, +v - 1); } });
      }
      case "flex": return set(s => s.a.flex = +v);
      case "wmode": return set(s => s.a.whereMode = v);
      case "vibe": return set(s => { const i = s.a.vibes.indexOf(v); if (i >= 0) s.a.vibes.splice(i, 1); else s.a.vibes.push(v); });
      case "must": case "diet": case "access": return set(s => s.a[act][v] = !s.a[act][v]);
      case "rank": { const [i, d] = v.split(":").map(Number); return set(s => { const r2 = s.a.ranking; const j = i + d; [r2[i], r2[j]] = [r2[j], r2[i]]; }); }
      // Plan, payment, success
      case "opt": return set(s => s.a.option = v);
      case "swap": return openSwap(+v);
      case "book": return set(s => { s.a.approval = false; s.a.terms = false; location.hash = "#planner/10"; });
      case "approve": return set(s => { s.a.approval = true; s.a.invited = false; location.hash = "#planner/11"; });
      case "share": return toast("Link copied. Anyone you share it with can view the plan.");
      case "specialist": return toast("A Planned specialist will call you within the hour. Your plan stays as it is.");
      case "paymethod": return set(s => s.a.payMethod = v);
      case "terms": state.a.terms = el.checked; ui.termsError = false; save(); return;
      case "confirm":
        if (!a.terms) { ui.termsError = true; render(); const c = app.querySelector('[data-k="terms"]'); if (c) c.focus(); return; }
        return set(s => { s.a.approval = false; s.a.invited = false; location.hash = "#planner/11"; });
      case "invite": return set(s => s.a.invited = true);
      // Supplier
      case "draft": return draft();
      case "addspace": return toast("A new space starts from the same capacity and photo template.");
      case "avail-day": {
        const o = +v;
        if (ui.rangeStart == null || ui.rangeEnd != null) { ui.rangeStart = o; ui.rangeEnd = null; }
        else ui.rangeEnd = o;
        return render();
      }
      case "selweek": {
        const d = fromOrd(ui.rangeStart), sun = toOrd(new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay()));
        ui.rangeStart = Math.max(sun, D.today); ui.rangeEnd = addDays(sun, 6); return render();
      }
      case "selmonth": {
        const [y, m] = ymOf(ui.rangeStart);
        ui.rangeStart = Math.max(y * 10000 + m * 100 + 1, D.today); ui.rangeEnd = y * 10000 + m * 100 + daysInMonth(y, m); return render();
      }
      case "selclear": ui.rangeStart = ui.rangeEnd = null; return render();
      case "markoff": case "markon": {
        const sel = selection(); if (!sel) return;
        ui.rangeStart = ui.rangeEnd = null;
        return set(s => { const rest = s.b.unavailable.filter(o => !sel.ords.includes(o)); s.b.unavailable = act === "markoff" ? rest.concat(sel.ords).sort((x, y) => x - y) : rest; });
      }
      case "edit": return go("supplier", +v);
      case "confirmlist": state.b.confirmed = el.checked; ui.submitError = false; save(); return;
      case "submitlisting":
        if (!b.confirmed) { ui.submitError = true; render(); const c = app.querySelector('[data-k="confirmlist"]'); if (c) c.focus(); return; }
        return go("supplier", 7);
      case "instant": return set(s => s.b.instant = !s.b.instant);
      case "deposit": return set(s => s.b.deposit = +v);
      case "cancel": return set(s => s.b.cancel = v);
      case "teammate": return set(s => s.b.teammate = true);
      case "notify": return set(s => s.b[v] = !s.b[v]);
      case "promise": state.b.promise = el.checked; save(); return;
      case "crosslink": state.a.option = "best"; state.a.swaps = {}; state.a.policy = false; save(); return;
    }
  });
  app.addEventListener("submit", (e) => { e.preventDefault(); if (e.target.dataset.form === "draft") draft(); });

  app.addEventListener("keydown", (e) => {
    const el = e.target;
    // Adder fields: arrows move through suggestions, Enter adds, Escape cancels
    if (el.dataset && el.dataset.adder) {
      const id = el.dataset.adder, list = $(`#adder-list-${id}`, app);
      const opts = list ? [...list.querySelectorAll("[data-place]")] : [];
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        if (!opts.length) return;
        e.preventDefault();
        const len = opts.length;
        if (e.key === "ArrowDown") ui.adderIdx = ui.adderIdx >= len - 1 ? 0 : ui.adderIdx + 1;
        else ui.adderIdx = ui.adderIdx <= 0 ? len - 1 : ui.adderIdx - 1;
        renderSuggestions(el);
      } else if (e.key === "Enter") {
        e.preventDefault();
        commitAdder(id, ui.adderIdx >= 0 && opts[ui.adderIdx] ? opts[ui.adderIdx].dataset.place : el.value);
      } else if (e.key === "Escape") {
        e.preventDefault(); ui.adder = null; render();
        const bt = app.querySelector(`[data-k="adder:${id}"]`); if (bt) bt.focus();
      }
      return;
    }
    // Arrow keys move within radio groups and tabs
    const grp = el.closest('[role="radiogroup"], [role="tablist"]');
    if (!grp || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    const items = [...grp.querySelectorAll('[role="radio"], [role="tab"]')];
    const i = items.indexOf(el); if (i < 0) return;
    e.preventDefault();
    const n = items[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length];
    n.click();
    const again = app.querySelector(`[data-k="${CSS.escape(n.dataset.k)}"]`); if (again) again.focus();
  });

  // Typing updates state in place so focus and cursor never jump
  app.addEventListener("input", (e) => {
    const t = e.target, a = state.a;
    if (t.id === "pp") {
      a.pp = +t.value; save();
      $("#b-pp").textContent = money(a.pp);
      $("#b-total").textContent = money(budgetTotal());
      t.setAttribute("aria-valuetext", `${money(a.pp)} per person per day`);
      $("#b-note").innerHTML = budgetNote();
      return refreshPreview();
    }
    if (t.dataset.adder) { ui.adderIdx = -1; return renderSuggestions(t); }
    if (t.dataset.text) { a[t.dataset.text] = t.value; save(); return refreshPreview(); }
    if (t.dataset.hc !== undefined) {
      const err = hcError(t.value);
      if (!err) { a.headcount = parseNum(t.value); save(); }
      if (ui.hcError && !err) { ui.hcError = ""; showHcError(); }
      const pl = $("#placed", app); if (pl) pl.outerHTML = placedLine();
      return refreshPreview();
    }
    if (t.dataset.origin !== undefined) {
      const n = parseNum(t.value);
      a.origins[+t.dataset.origin].count = Number.isInteger(n) && n >= 0 ? n : 0; save();
      const pl = $("#placed", app); if (pl) pl.outerHTML = placedLine();
      return refreshPreview();
    }
    const id = t.dataset.price;
    if (id) {
      state.b.prices[id] = t.value; save();
      if (ui.priceErrors[id]) showPriceError(id);   // clear an existing error as soon as it's fixed
      refreshMeter();
    }
  });
  app.addEventListener("change", (e) => { if (e.target.id === "pp") render(); });
  app.addEventListener("focusout", (e) => {
    const t = e.target;
    if (t.dataset && t.dataset.hc !== undefined) { ui.hcError = hcError(t.value); showHcError(); return; }
    const id = t.dataset && t.dataset.price; if (!id) return;
    const f = D.listing.pricing.find(x => x.id === id), n = parseNum(t.value);
    if (!priceError(f, t.value) && f.unit === "money") { t.value = state.b.prices[id] = num(n); save(); }
    showPriceError(id); refreshMeter();
  });

  // Drag to rank (A7)
  let dragFrom = null;
  app.addEventListener("dragstart", (e) => { const li = e.target.closest && e.target.closest(".rank li"); if (!li) return; dragFrom = +li.dataset.i; li.classList.add("dragging"); e.dataTransfer.effectAllowed = "move"; try { e.dataTransfer.setData("text/plain", li.dataset.i); } catch (x) { } });
  app.addEventListener("dragover", (e) => { const li = e.target.closest && e.target.closest(".rank li"); if (!li || dragFrom === null) return; e.preventDefault(); app.querySelectorAll(".rank li").forEach(x => x.classList.toggle("over", x === li)); });
  app.addEventListener("drop", (e) => {
    const li = e.target.closest && e.target.closest(".rank li"); if (!li || dragFrom === null) return;
    e.preventDefault(); const to = +li.dataset.i, from = dragFrom; dragFrom = null;
    if (to !== from) set(s => { const it = s.a.ranking.splice(from, 1)[0]; s.a.ranking.splice(to, 0, it); }); else render();
  });
  app.addEventListener("dragend", () => { dragFrom = null; app.querySelectorAll(".rank li").forEach(x => x.classList.remove("dragging", "over")); });

  function draft() {
    if (ui.reading === 1) return;
    ui.reading = 1; state.b.drafted = false; save(); render();
    const lines = () => app.querySelectorAll(".reading .build li");
    [700, 1500, 2300].forEach((t, i) => timers.push(setTimeout(() => lines().forEach((li, j) => { li.classList.toggle("done", j <= i); }), t)));
    timers.push(setTimeout(() => { ui.reading = 2; state.b.drafted = true; save(); render(); const h = $("h1", app); if (h) h.focus(); }, 3100));
  }

  // ---------- swap drawer ----------
  const drawer = $("#drawer");
  function openSwap(i) {
    const opt = option(), list = choices(opt, i), cur = state.a.swaps[opt.id + i] || 0, kind = opt.components[i].kind;
    $("#drawer-title").textContent = `Swap ${kind.toLowerCase()}`;
    $("#drawer-body").innerHTML = `<p class="muted small">Same dates, same rules. Prices update your total.</p>
      <ul class="alts">${list.map((c, j) => { const why = whyFor(c, kind); return `<li><button class="alt" data-j="${j}" aria-pressed="${j === cur}">
        <span class="alt-art">${art(c.art)}</span>
        <span class="alt-body"><span class="alt-name">${c.name}</span><span class="muted small">${c.detail}</span>${why ? `<span class="small">${why}</span>` : ""}
          <span class="alt-meta">${badge(Object.assign({ kind }, c), false)}<strong>${money(c.price)}</strong>${j === cur ? `<span class="muted small">Current</span>` : ""}</span></span>
      </button></li>`; }).join("")}</ul>`;
    drawer.dataset.i = i;
    drawer.showModal();
  }
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer || e.target.closest("[data-close]")) return drawer.close();
    const b = e.target.closest(".alt"); if (!b) return;
    const i = +drawer.dataset.i, opt = option();
    state.a.swaps[opt.id + i] = +b.dataset.j; save();
    drawer.close(); render();
    const s = app.querySelector(`[data-k="swap:${i}"]`); if (s) s.focus();
    toast(`Swapped to ${picked(opt)[i].name}. New total ${money(total(opt))}.`);
  });

  // ---------- toast ----------
  let toastT;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 3200);
  }

  // ---------- demo menu ----------
  const menu = $("#menu");
  function renderMenu() {
    const item = (href, label, extra, isCur) => `<li><a href="${href}" ${extra || ""} ${isCur ? 'aria-current="page"' : ""}>${label}</a></li>`;
    const here = (href, pol) => (location.hash === href || (href === "#" && !location.hash)) && (pol == null || !!policy() === pol);
    $("#menu-body").innerHTML = `
      <ul class="menu-list">${item("#", "Landing", "", here("#"))}</ul>
      <p class="menu-h">Flow A · Planner</p>
      <ul class="menu-list">${PLANNER_STEPS.map((s, i) => item(`#planner/${i}`, `A${i} · ${s}`, "", here(`#planner/${i}`, false))).join("")}</ul>
      <p class="menu-h">Flow A · With a company policy</p>
      <ul class="menu-list">
        ${item("#planner/0", "A0 · Welcome, policy set up", 'data-policy="1"', here("#planner/0", true))}
        ${item("#planner/5", "A5 · Budget with a policy", 'data-policy="1"', here("#planner/5", true))}
        ${item("#planner/9", "A9 · Plan with a policy", 'data-policy="1"', here("#planner/9", true))}
        ${item("#planner/11", "A11 · Sent for approval", 'data-policy="1" data-approval="1"', here("#planner/11", true))}
      </ul>
      <p class="menu-h">Flow B · Supplier</p>
      <ul class="menu-list">${SUPPLIER_STEPS.map((s, i) => item(`#supplier/${i}`, `B${i} · ${s}`, "", here(`#supplier/${i}`))).join("")}</ul>`;
  }
  $("#menu-btn").addEventListener("click", () => menu.showModal());
  menu.addEventListener("click", (e) => {
    if (e.target === menu || e.target.closest("[data-close]")) return menu.close();
    if (e.target.closest("[data-reset]")) {
      timers.forEach(clearTimeout); timers = []; state = defaults(); ui.reading = 0; save(); menu.close();
      lastRoute = ""; go("home"); return;
    }
    const a = e.target.closest("a"); if (!a) return;
    const href = a.getAttribute("href");
    if (href.startsWith("#planner")) {
      state.a.policy = !!a.dataset.policy;
      state.a.approval = !!a.dataset.approval;
      if (href === "#planner/9" && a.dataset.policy) { state.a.option = "memorable"; state.a.swaps = {}; }
      if (href === "#planner/10") state.a.terms = false;
    }
    save(); menu.close();
    if (location.hash === href || (href === "#" && !location.hash)) { e.preventDefault(); lastRoute = ""; if (href === "#") go("home"); else render(); }
    else if (href === "#") { e.preventDefault(); go("home"); }
  });
  document.addEventListener("keydown", (e) => {
    const isQuestion = e.key === "?" || (e.code === "Slash" && e.shiftKey);
    if (!isQuestion || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && document.activeElement.type !== "checkbox" && document.activeElement.type !== "range") return;
    e.preventDefault();
    if (menu.open) menu.close(); else { if (drawer.open) drawer.close(); menu.showModal(); }
  });
  $("#home-link").addEventListener("click", (e) => { e.preventDefault(); go("home"); });

  render();
})();
