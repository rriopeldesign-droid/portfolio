// Planned onboarding concept. Two small state machines (planner, supplier) driven by the URL hash.
(function () {
  const D = window.PLANNED_DATA;
  const $ = (s, r) => (r || document).querySelector(s);
  const app = $("#app");
  const STORE = "planned-concept-v1";
  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const PLANNER_STEPS = ["Welcome", "What are you planning?", "Who's coming?", "When?", "Where?", "Budget", "The feel", "What matters most?", "Building your plan", "Your plan", "Confirm and pay", "Success"];
  const SUPPLIER_STEPS = ["Intro", "Claim your listing", "Spaces", "Pricing and availability", "Policies and getting paid", "Team and response", "Review your listing", "Submitted for review", "After approval: you're live"];

  function defaults() {
    return {
      a: {
        type: "offsite", headcount: 24, cities: { tor: true, mtl: true, nyc: true, ott: false }, cityAdded: false, execs: false,
        month: 10, start: 18, flex: 0, duration: "2", whereMode: "help", dest: "mtl", pp: 400,
        feel: { style: "historic", setting: "city", pace: "structured", view: "rooftop" },
        must: { "Meeting room": true, "Group dinner": true, "Team activity": true, "Overnight rooms": true, "AV and screens": true, "Breakout rooms": false },
        diet: { Vegetarian: true, "Gluten-free": true }, access: { "Step-free access": true },
        ranking: D.priorities.slice(), option: "best", swaps: {}, approval: false, terms: false, invited: false
      },
      b: { drafted: false, instant: false, prices: Object.fromEntries(D.listing.pricing.map(f => [f.id, f.value])), unavailable: D.listing.unavailable.slice(), confirmed: false, deposit: 30, cancel: "Moderate", teammate: false, email: true, sms: true, promise: true }
    };
  }

  let state = load();
  const ui = { sheet: false, reading: 0, termsError: false, submitError: false, priceErrors: {}, rangeStart: null, rangeEnd: null };
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
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const eventType = () => D.eventTypes.find(t => t.id === state.a.type) || D.eventTypes[0];
  const duration = () => D.durations.find(d => d.id === state.a.duration) || D.durations[2];
  const spanDays = () => Math.max(1, Math.ceil(duration().days));
  const daysInMonth = (m) => new Date(2026, m + 1, 0).getDate();
  function dateLabel(withYear) {
    const a = state.a, m = MONTHS[a.month], n = spanDays();
    const end = Math.min(a.start + n - 1, daysInMonth(a.month));
    const y = withYear ? ", 2026" : "";
    return n === 1 || end === a.start ? `${m} ${a.start}${y}` : `${m} ${a.start}–${end}${y}`;
  }
  const dest = () => D.destinations.find(d => d.id === state.a.dest) || { label: cityName(state.a.dest) };
  const cityName = (id) => ({ mtl: "Montreal", tor: "Toronto", ott: "Ottawa", qc: "Quebec City", nyc: "New York" })[id] || "Montreal";
  const budgetTotal = () => state.a.pp * state.a.headcount * duration().days;
  const travellers = () => D.originCities.concat(state.a.cityAdded ? [D.extraCity] : []).filter(c => state.a.cities[c.id] && c.id !== state.a.dest).reduce((s, c) => s + c.count, 0);

  function option() { return D.options.find(o => o.id === state.a.option) || D.options[0]; }
  function choices(opt, i) {
    const c = opt.components[i];
    if (opt.id === "best") return [c].concat(c.alts);
    const b = D.options[0].components.find(x => x.kind === c.kind);
    return [c].concat(b ? [b].concat(b.alts.slice(0, 1)) : []).filter((x, j, arr) => arr.findIndex(y => y.name === x.name) === j).slice(0, 3);
  }
  function picked(opt) { return opt.components.map((c, i) => choices(opt, i)[state.a.swaps[opt.id + i] || 0] || c); }
  const total = (opt) => picked(opt).reduce((s, c) => s + c.price, 0);
  const overPolicy = (opt) => total(opt) > D.company.policyLimit;

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
    if (changed) { timers.forEach(clearTimeout); timers = []; ui.sheet = false; ui.termsError = false; ui.submitError = false; ui.rangeStart = ui.rangeEnd = null; if (r.flow !== "supplier" || r.step !== 1) ui.reading = 0; }
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
    if (r.flow === "supplier" && r.step === 6 && !reduced()) {
      const c = $(".celebrate", app); if (c) c.classList.add("play");
    }
  }

  // ---------- shared pieces ----------
  function topbar(flow, step, label, pct) {
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
    return `<button class="chip" aria-pressed="${!!pressed}" data-act="${act}" data-v="${val}" data-k="${k || act + ":" + val}">${pressed ? icon("check", 16) : ""}<span>${label}</span></button>`;
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

  // ---------- home ----------
  function home() {
    const rows = [["Headcount", "Capacity per space and layout"], ["Dates and flexibility", "Availability and blackout dates"], ["Budget", "Pricing rules"], ["The feel", "Photos and style tags"], ["Must-haves", "Amenities and AV"], ["Dietary and accessibility needs", "Catering and accessibility features"], ["Where people travel from", "Location"]];
    return `<div class="wrap home">
      <p class="eyebrow">Onboarding concept</p>
      <h1 tabindex="-1">Two onboardings. One data model.</h1>
      <p class="lede">A concept for Planned by Robert Riopel.</p>
      <ul class="points">
        <li><strong>The gap</strong><span>Today a venue gets listed by booking a call, and a first-time planner meets a blank chat box.</span></li>
        <li><strong>The idea</strong><span>Guided, visual onboarding on both sides. AI runs in the background.</span></li>
        <li><strong>The payoff</strong><span>A planner lands on an event that is ready to book, and a venue goes live in minutes.</span></li>
      </ul>
      <div class="entries">
        <a class="entry" href="#planner/0">
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
  function planPreview(step) {
    const a = state.a, n = Math.max(0, Math.min(step - 1, 7));
    const count = D.venueCounts[n];
    const range = n >= 6 ? D.ranges.feel : n >= 5 ? D.ranges.budget : D.ranges.start;
    const chips = [];
    const add = (s, label) => { if (step >= s) chips.push(`<li class="${step === s ? "live" : ""}">${label}</li>`); };
    add(1, eventType().label);
    add(2, `${a.headcount} people`);
    add(2, `From ${D.originCities.concat(a.cityAdded ? [D.extraCity] : []).filter(c => a.cities[c.id]).map(c => c.label).join(", ") || "anywhere"}`);
    if (a.execs) add(2, "Executives attending");
    add(3, `${dateLabel()} · ${duration().label}`);
    if (a.flex) add(3, D.flexibility[a.flex]);
    add(4, a.whereMode === "help" ? `${dest().label} · shortest travel` : dest().label);
    add(5, `${money(a.pp)} pp/day`);
    if (step >= 6) D.feelPairs.forEach(p => add(6, (a.feel[p.id] === p.a.id ? p.a : p.b).label));
    add(6, `${Object.values(a.must).filter(Boolean).length} must-haves`);
    add(7, `Priority: ${a.ranking[0]}`);
    const over = step >= 5 && budgetTotal() > D.company.policyLimit;
    return `<div class="preview">
      <p class="aside-kicker">Plan preview</p>
      <div class="pcard">
        <span class="pcard-art">${art(step >= 6 ? a.feel.style : "structured")}</span>
        <div class="pcard-body"><p class="pcard-title">${eventType().title}</p><p class="muted small">${step >= 3 ? dateLabel() + " · " : ""}${step >= 4 ? dest().label + " · " : ""}${a.headcount} people</p></div>
      </div>
      <div class="stats">
        <div><span class="stat-num" aria-live="polite">${num(count)}</span><span class="stat-label">matching venues</span></div>
        <div><span class="stat-num">${range}</span><span class="stat-label">estimated total</span></div>
      </div>
      ${step >= 5 ? `<p class="policy ${over ? "warn" : "ok"}">${icon(over ? "user" : "shield", 16)}${over ? "Jordan Lee (Finance) will approve this" : "Within Fernway policy"}</p>` : ""}
      ${chips.length ? `<ul class="pchips" aria-label="Your answers">${chips.join("")}</ul>` : `<p class="muted small">Your answers appear here as you go.</p>`}
    </div>`;
  }

  function planner(step) {
    const a = state.a;
    if (step === 9) return reveal();
    if (step === 10) return pay();
    if (step === 11) return success();
    const intake = step >= 1 && step <= 7;
    const head = step === 0 ? "" : topbar("planner", step, step <= 7 ? `Step ${step} of 7` : "Almost there", step <= 7 ? (step / 7) * 100 : 100);
    let body = "";
    switch (step) {
      case 0: body = `
        <p class="eyebrow">Planned · Fernway workspace</p>
        <h1 tabindex="-1">Welcome to Planned, Maya.</h1>
        <p class="lede">Fernway runs all its events here. Let's plan your first one. It takes about 2 minutes.</p>
        <div class="setup">
          <p class="setup-title">${icon("check", 18)} Already set up for you</p>
          <ul>
            <li><span>Event policy</span><strong>Up to ${money(D.company.policyLimit)} CAD books without approval</strong></li>
            <li><span>Approver</span><strong>Jordan Lee, Finance</strong></li>
            <li><span>Payment</span><strong>${D.company.card}</strong></li>
            <li><span>Preferred hotels</span><strong>${D.company.hotels}</strong></li>
          </ul>
          <p class="muted small">You don't need to know the rules. We apply them for you.</p>
        </div>
        ${actions(primary("Start planning", "next", "start"))}`; break;
      case 1: body = `
        <h1 tabindex="-1">What are you planning?</h1>
        <p class="lede">Pick the closest one. We'll set sensible defaults for the rest.</p>
        <div class="types">${D.eventTypes.map(t => `<button class="opt" aria-pressed="${a.type === t.id}" data-act="type" data-v="${t.id}" data-k="type:${t.id}">
          <span class="opt-ic">${icon(t.icon, 28)}</span><span class="opt-label">${t.label}</span>${a.type === t.id ? `<span class="opt-check">${icon("check", 14)}</span>` : ""}</button>`).join("")}</div>
        ${actions(primary("Continue", "next"))}`; break;
      case 2: body = `
        <h1 tabindex="-1">Who's coming?</h1>
        <div class="field">
          <span class="field-label" id="hc-l">Headcount</span>
          <div class="stepper" role="group" aria-labelledby="hc-l">
            <button data-act="hc" data-v="-1" aria-label="Fewer people" data-k="hc-">${icon("minus", 18)}</button>
            <output aria-live="polite">${a.headcount}</output>
            <button data-act="hc" data-v="1" aria-label="More people" data-k="hc+">${icon("plus", 18)}</button>
          </div>
        </div>
        <div class="field">
          <span class="field-label">Where are people travelling from?</span>
          <div class="chips">${D.originCities.concat(a.cityAdded ? [D.extraCity] : []).map(c => chip(`${c.label}${c.count ? ` <span class="chip-n">${c.count}</span>` : ""}`, a.cities[c.id], "city", c.id)).join("")}
          ${a.cityAdded ? "" : `<button class="chip chip-add" data-act="addcity" data-k="addcity">${icon("plus", 16)}<span>Add city</span></button>`}</div>
        </div>
        <div class="field">${toggle("Any executives attending?", a.execs, "execs", "We'll favour private rooms and quieter venues.")}</div>
        ${actions(primary("Continue", "next"))}`; break;
      case 3: body = `
        <h1 tabindex="-1">When?</h1>
        <div class="field"><span class="field-label">Month</span>
          ${seg("Month", [{ v: 9, l: "October 2026" }, { v: 10, l: "November 2026" }, { v: 11, l: "December 2026" }], a.month, "month")}</div>
        <div class="field"><span class="field-label">Dates · <strong>${dateLabel(true)}</strong></span>${calendar(a.month, (d) => {
          const end = a.start + spanDays() - 1;
          return { sel: d >= a.start && d <= end, start: d === a.start, end: d === end, act: "start" };
        })}</div>
        <div class="field"><span class="field-label">How flexible are you?</span>${seg("Flexibility", D.flexibility, a.flex, "flex")}
          <p class="helper">Flexible dates usually open up more options.</p></div>
        <div class="field"><span class="field-label">How long?</span><div class="chips">${D.durations.map(d => chip(d.label, a.duration === d.id, "dur", d.id)).join("")}</div></div>
        ${actions(primary("Continue", "next"))}`; break;
      case 4: body = `
        <h1 tabindex="-1">Where?</h1>
        ${seg("Where", [{ v: "help", l: "Help me choose" }, { v: "know", l: "I know where" }], a.whereMode, "wmode")}
        ${a.whereMode === "help" ? `
          <p class="lede small-lede">Average travel time for your group of ${a.headcount}, from Toronto, Montreal and New York.</p>
          <div class="cities">${D.destinations.map(c => `<button class="city" aria-pressed="${a.dest === c.id}" data-act="dest" data-v="${c.id}" data-k="dest:${c.id}">
            <span class="city-art">${art(c.art)}</span>
            <span class="city-body"><span class="city-name">${c.label}</span><span class="city-time">${icon("clock", 16)} ${c.travel} average</span>
            ${c.note ? `<span class="badge badge-success">${c.note}</span>` : ""}</span>
            ${a.dest === c.id ? `<span class="opt-check">${icon("check", 14)}</span>` : ""}</button>`).join("")}</div>`
          : `<p class="lede small-lede">Pick a city. We'll still check travel time for everyone.</p>
          <div class="chips">${["mtl", "tor", "ott", "qc", "nyc"].map(id => chip(cityName(id), a.dest === id, "dest", id)).join("")}</div>`}
        ${actions(primary("Continue", "next"))}`; break;
      case 5: {
        const t = budgetTotal(), over = t > D.company.policyLimit;
        body = `
        <h1 tabindex="-1">What's the budget?</h1>
        <p class="lede">Prefilled from Fernway's policy. Adjust if you need to.</p>
        <div class="budget">
          <p class="budget-big"><span id="b-pp">${money(a.pp)}</span> <span class="muted">per person per day</span></p>
          <p class="muted">About <strong id="b-total">${money(t)}</strong> total for ${a.headcount} people over ${duration().label.toLowerCase()}</p>
          <label class="sr-only" for="pp">Budget per person per day</label>
          <input id="pp" type="range" min="250" max="600" step="10" value="${a.pp}" data-k="pp" aria-valuetext="${money(a.pp)} per person per day">
          <div class="range-ends muted small"><span>$250</span><span>$600</span></div>
          <p class="policy ${over ? "warn" : "ok"}" id="b-note" aria-live="polite">${icon(over ? "user" : "shield", 16)}<span>${over ? "Jordan Lee (Finance) will approve this" : "Within Fernway policy. No approval needed."}</span></p>
        </div>
        ${actions(primary("Continue", "next"))}`; break;
      }
      case 6: body = `
        <h1 tabindex="-1">What should it feel like?</h1>
        <p class="lede">Tap the one that fits better. No wrong answers.</p>
        <div class="pairs">${D.feelPairs.map(p => `<div class="pair" role="radiogroup" aria-label="${p.a.label} or ${p.b.label}">
          ${[p.a, p.b].map(o => `<button class="pick" role="radio" aria-checked="${a.feel[p.id] === o.id}" data-act="feel" data-p="${p.id}" data-v="${o.id}" data-k="feel:${o.id}">
            <span class="pick-art">${art(o.id)}</span><span class="pick-label">${o.label}</span>${a.feel[p.id] === o.id ? `<span class="opt-check">${icon("check", 14)}</span>` : ""}</button>`).join(`<span class="or" aria-hidden="true">or</span>`)}
        </div>`).join("")}</div>
        <div class="field"><span class="field-label">Must-haves</span><div class="chips">${D.mustHaves.map(m => chip(m, a.must[m], "must", m)).join("")}</div></div>
        <div class="field"><span class="field-label">Dietary needs</span><div class="chips">${D.dietary.map(m => chip(m, a.diet[m], "diet", m)).join("")}</div></div>
        <div class="field"><span class="field-label">Accessibility</span><div class="chips">${D.access.map(m => chip(m, a.access[m], "access", m)).join("")}</div></div>
        ${actions(primary("Continue", "next"))}`; break;
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
      case 8: body = `
        <h1 tabindex="-1">Building your plan</h1>
        <p class="lede">This takes a few seconds.</p>
        <ul class="build" aria-live="polite">${D.building.map(b => `<li><span class="build-ic">${icon("check", 14)}</span><span>${b.replace("Montreal", dest().label)}</span></li>`).join("")}</ul>`; break;
    }
    const main = `${head}<section class="screen">${body}</section>`;
        return layout(main, planPreview(step), { title: "Plan preview", bar: previewBar(step) });
  }
  function previewBar(step) {
    const n = Math.max(0, Math.min(step - 1, 7));
    const range = n >= 6 ? D.ranges.feel : n >= 5 ? D.ranges.budget : D.ranges.start;
    return `<strong>${num(D.venueCounts[n])}</strong> venues · ${range}`;
  }

  function calendar(month, cellFn) {
    const first = new Date(2026, month, 1).getDay(), n = daysInMonth(month);
    let cells = "";
    for (let i = 0; i < first; i++) cells += `<span></span>`;
    for (let d = 1; d <= n; d++) {
      const c = cellFn(d);
      const cls = [c.sel && "sel", c.start && "s", c.end && "e", c.block && "block"].filter(Boolean).join(" ");
      cells += `<button class="${cls}" data-act="${c.act}" data-v="${d}" data-k="${c.act}:${d}" aria-pressed="${!!(c.sel || c.block)}" aria-label="${MONTHS_LONG[month]} ${d}${c.block ? ", blocked" : ""}${c.label || ""}">${d}</button>`;
    }
    return `<div class="cal" role="group" aria-label="${MONTHS_LONG[month]} 2026"><div class="cal-head">${DAYS.map(d => `<span>${d[0]}</span>`).join("")}</div><div class="cal-grid">${cells}</div></div>`;
  }

  function reveal() {
    const a = state.a, opt = option(), items = picked(opt), t = total(opt), over = t > D.company.policyLimit;
    const title = eventType().title;
    const start = new Date(2026, a.month, a.start);
    const dayLabel = (i) => { const d = new Date(start); d.setDate(d.getDate() + i); return `Day ${i + 1} · ${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`; };
    const main = `
      ${topbar("planner", 9, "Plan ready", 100)}
      <section class="screen">
        <p class="eyebrow ok-text">${icon("check", 16)} Your plan is ready</p>
        <h1 tabindex="-1">Your ${title.charAt(0).toLowerCase() + title.slice(1)}, planned.</h1>
        <p class="lede">${dateLabel()} · ${dest().label} · ${a.headcount} people · ${money(t)} · ${over ? "Needs approval" : "Within Fernway policy"}</p>
        <div class="tabs" role="tablist" aria-label="Plan options">${D.options.map(o => `<button role="tab" aria-selected="${o.id === opt.id}" tabindex="${o.id === opt.id ? 0 : -1}" data-act="opt" data-v="${o.id}" data-k="opt:${o.id}" aria-controls="plan-panel">
          <span class="tab-label">${o.label}</span><span class="tab-price">${money(total(o))}</span><span class="tab-venue">${o.venue}</span></button>`).join("")}</div>
        <div id="plan-panel" role="tabpanel" aria-label="${opt.label}">
          <h2 class="h2">Agenda</h2>
          <div class="agenda">${D.agenda.slice(0, Math.max(1, Math.min(2, spanDays()))).map((d, i) => `<div class="day"><p class="day-title">${dayLabel(i)}</p><ol>${d.items.map(it => `<li><span class="t">${it[0]}</span><span>${it[1]}</span></li>`).join("")}</ol></div>`).join("")}</div>
          <h2 class="h2">What's in the plan</h2>
          <ul class="comps">${items.map((c, i) => {
            const ch = choices(opt, i);
            return `<li class="comp">
              <span class="comp-art">${art(c.art)}</span>
              <div class="comp-body">
                <p class="comp-kind">${opt.components[i].kind}</p>
                <p class="comp-name">${c.name}</p>
                <p class="muted small">${c.detail}</p>
                ${c.why ? `<p class="why"><span>Why we picked this</span> ${c.why}</p>` : ""}
                <div class="comp-meta">${badge(Object.assign({ kind: opt.components[i].kind }, c), true)}</div>
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
    const aside = `<div class="breakdown">
      <p class="aside-kicker">Price breakdown · CAD</p>
      <ul>${items.map((c, i) => `<li><span>${opt.components[i].kind}</span><span>${c.price ? money(c.price) : "Included"}</span></li>`).join("")}</ul>
      <p class="bd-total"><span>Total</span><strong>${money(t)}</strong></p>
      <p class="policy ${over ? "warn" : "ok"}">${icon(over ? "user" : "shield", 16)}<span>${over ? `${money(t - D.company.policyLimit)} over Fernway policy. Jordan Lee approves.` : "Within Fernway policy"}</span></p>
      <div class="desktop-only">${breakdownCtas(over)}</div>
    </div>`;
    return layout(main, aside, { title: "Price breakdown", bar: `<strong>${money(t)}</strong> · ${over ? "Needs approval" : "Within policy"}` });
  }
  function breakdownCtas(over) {
    return `<div class="stack">
      ${over ? primary("Send for approval to Jordan Lee", "approve", "cta-main") : primary("Book now", "book", "cta-main")}
      <button class="btn btn-secondary" data-act="specialist" data-k="specialist">Talk to a specialist</button>
    </div>`;
  }

  function pay() {
    const opt = option(), items = picked(opt), t = total(opt);
    const main = `
      ${topbar("planner", 10, "Confirm", 100)}
      <section class="screen">
        <h1 tabindex="-1">Confirm and pay</h1>
        <p class="lede">${eventType().title} · ${dateLabel(true)} · ${dest().label} · ${state.a.headcount} people</p>
        <div class="panel">
          <ul class="summary">${items.map((c, i) => `<li><span><span class="muted small">${opt.components[i].kind}</span><br>${c.name}</span><span>${c.price ? money(c.price) : "Included"}</span></li>`).join("")}</ul>
          <p class="bd-total"><span>Total</span><strong>${money(t)} CAD</strong></p>
        </div>
        <div class="panel rows">
          <div class="row">${icon("card", 20)}<div><span class="muted small">Payment</span><p>${D.company.card}</p></div><span class="badge badge-neutral">${icon("lock", 14)}Set by Fernway</span></div>
          <div class="row">${icon("file", 20)}<div><span class="muted small">Cost centre</span><p>${D.company.costCentre}</p></div><span class="badge badge-neutral">Auto-filled</span></div>
        </div>
        <p class="note">${icon("shield", 16)} Planned pays each supplier for you. You'll get one invoice.</p>
        <label class="check ${ui.termsError ? "error" : ""}"><input type="checkbox" data-act="terms" data-k="terms" ${state.a.terms ? "checked" : ""} ${ui.termsError ? 'aria-invalid="true" aria-describedby="terms-err"' : ""}><span>I accept the booking terms and each supplier's cancellation policy.</span></label>
        ${ui.termsError ? `<p class="err" id="terms-err" role="alert">Please accept the terms to confirm.</p>` : ""}
        ${actions(primary("Confirm booking", "confirm"))}
      </section>`;
    return layout(main);
  }

  function success() {
    const a = state.a, appr = a.approval, t = total(option());
    const main = `
      <section class="screen center">
        <span class="done-mark ${appr ? "pending" : ""}">${icon(appr ? "clock" : "check", 30)}</span>
        <h1 tabindex="-1">${appr ? "Sent to Jordan Lee for approval" : "You're booked."}</h1>
        <p class="lede">${eventType().title} · ${dateLabel()} · ${dest().label} · ${a.headcount} people · ${money(t)}</p>
        ${appr ? `<ol class="timeline" aria-label="Approval status">
            <li class="done"><span class="dot"></span><span><strong>Sent</strong><span class="muted small">Just now</span></span></li>
            <li class="active"><span class="dot"></span><span><strong>Reviewing</strong><span class="muted small">Jordan usually replies within a day</span></span></li>
            <li><span class="dot"></span><span><strong>Booked automatically once approved</strong><span class="muted small">Nothing else for you to do</span></span></li>
          </ol>` : `<ul class="next">
            <li>${icon("check", 18)}<span><strong>Supplier confirmations are arriving.</strong> Two are in, three to go.</span></li>
            <li>${icon("file", 18)}<span><strong>One invoice, auto-tagged to ${D.company.costCentre}.</strong> Nothing to file.</span></li>
          </ul>`}
        <div class="stack narrow">
          ${a.invited ? `<div class="stub">${icon("spark", 18)}<span>Next: Registration builds your event page and invites from this plan.</span></div>`
            : `<button class="btn btn-primary" data-act="invite" data-k="invite">Invite your ${a.headcount} attendees ${icon("arrow", 18)}</button>`}
          <a class="link" href="#supplier/0">See how The Foundry Loft got listed ${icon("arrow", 16)}</a>
        </div>
      </section>`;
    return layout(main);
  }

  // ---------- Flow B: supplier ----------
  const parseNum = (v) => { const n = Number(String(v).replace(/[$,%\s]/g, "")); return String(v).trim() === "" || isNaN(n) ? NaN : n; };
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

  // Availability preview: two months, select a range, then mark it
  const ordLabel = (o) => `${MONTHS[Math.floor(o / 100)]} ${o % 100}`;
  function monthOrds(m) { return Array.from({ length: daysInMonth(m) }, (_, i) => m * 100 + i + 1); }
  const allOrds = () => D.listing.availabilityMonths.flatMap(monthOrds);
  function selection() {
    const a = ui.rangeStart, b = ui.rangeEnd;
    if (a == null) return null;
    const lo = b == null ? a : Math.min(a, b), hi = b == null ? a : Math.max(a, b);
    return { lo, hi, done: b != null, ords: allOrds().filter(o => o >= lo && o <= hi) };
  }
  function availability() {
    const sel = selection(), un = state.b.unavailable;
    const months = D.listing.availabilityMonths.map(m => {
      const first = new Date(2026, m, 1).getDay();
      let cells = "";
      for (let i = 0; i < first; i++) cells += `<span></span>`;
      monthOrds(m).forEach(o => {
        const d = o % 100, off = un.includes(o), inSel = sel && o >= sel.lo && o <= sel.hi;
        const cls = [off && "off", inSel && "sel", sel && o === sel.lo && "s", sel && o === sel.hi && "e"].filter(Boolean).join(" ");
        cells += `<button class="${cls}" data-act="day" data-v="${o}" data-o="${o}" data-k="day:${o}" aria-pressed="${!!inSel}" aria-label="${MONTHS_LONG[m]} ${d}, ${off ? "unavailable" : "available"}">${d}</button>`;
      });
      return `<div class="cal"><p class="cal-title">${MONTHS_LONG[m]} 2026</p><div class="cal-head">${DAYS.map(x => `<span>${x[0]}</span>`).join("")}</div><div class="cal-grid">${cells}</div></div>`;
    }).join("");
    let bar;
    if (!sel) bar = `<p class="muted small">Tap a start date, then an end date. Select a single day, a week or a whole month.</p>`;
    else if (!sel.done) bar = `<p class="small"><strong>From ${ordLabel(sel.lo)}.</strong> Now tap an end date, or pick a shortcut.</p>
      <div class="avail-btns"><button class="btn-small" data-act="selweek" data-k="selweek">Whole week</button><button class="btn-small" data-act="selmonth" data-k="selmonth">All of ${MONTHS_LONG[Math.floor(sel.lo / 100)]}</button><button class="btn-small ghost" data-act="selclear" data-k="selclear">Cancel</button></div>`;
    else {
      const n = sel.ords.length;
      bar = `<p class="small"><strong>${n === 1 ? ordLabel(sel.lo) : `${ordLabel(sel.lo)} to ${ordLabel(sel.hi)}`}</strong> · ${n} ${n === 1 ? "day" : "days"} selected</p>
      <div class="avail-btns"><button class="btn-small dark" data-act="markoff" data-k="markoff">Mark unavailable</button><button class="btn-small" data-act="markon" data-k="markon">Mark available</button><button class="btn-small ghost" data-act="selclear" data-k="selclear">Clear</button></div>`;
    }
    return `<div class="avail">
      <div class="avail-head"><div><p class="avail-title">Availability setting</p><p class="muted small">${un.length} ${un.length === 1 ? "date" : "dates"} unavailable in November and December</p></div><span class="badge badge-neutral">Preview</span></div>
      <div class="avail-months">${months}</div>
      <div class="avail-bar" aria-live="polite">${bar}</div>
      <div class="avail-legend small muted"><span><i class="lg lg-on"></i>Available</span><span><i class="lg lg-off"></i>Unavailable</span><span><i class="lg lg-sel"></i>Selected</span></div>
      <p class="avail-note">${icon("clock", 16)}<span>This is a preview. Once your venue is published, you have full control over your calendar and availability from your venue dashboard.</span></p>
    </div>`;
  }
  // Hover shows the range you're about to select
  app.addEventListener("mouseover", (e) => {
    const btn = e.target.closest && e.target.closest(".avail [data-o]");
    if (!btn || ui.rangeStart == null || ui.rangeEnd != null) return;
    const h = +btn.dataset.o, lo = Math.min(h, ui.rangeStart), hi = Math.max(h, ui.rangeStart);
    app.querySelectorAll(".avail [data-o]").forEach(x => { const o = +x.dataset.o; x.classList.toggle("hover", o >= lo && o <= hi); });
  });

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
    const head = step >= 1 && step <= 6 ? topbar("supplier", step, `Step ${step} of 6`, (step / 6) * 100) : "";
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
          ${reviewCard("Availability", 3, kv("Unavailable dates", `${b.unavailable.length} in November and December`))}
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
      case 7: return `<div class="wrap single">${topbar("supplier", 7, "Submitted", 100)}
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

  // ---------- events ----------
  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]");
    if (!el || el.disabled) return;
    const act = el.dataset.act, v = el.dataset.v, r = route();
    const a = state.a, b = state.b;
    switch (act) {
      case "back": return r.step > 0 ? go(r.flow, r.step === 10 || r.step === 11 ? (r.step === 11 && a.approval ? 9 : r.step - 1) : r.step === 9 ? 7 : r.step - 1) : go("home");
      case "next":
        if (r.flow === "supplier" && r.step === 3 && !validatePrices()) return;
        return go(r.flow, r.step + 1);
      case "sheet": ui.sheet = !ui.sheet; return render();
      case "type": return set(s => s.a.type = v);
      case "hc": return set(s => s.a.headcount = Math.max(2, Math.min(400, s.a.headcount + +v)));
      case "city": return set(s => s.a.cities[v] = !s.a.cities[v]);
      case "addcity": return set(s => { s.a.cityAdded = true; s.a.cities.ott = true; });
      case "execs": return set(s => s.a.execs = !s.a.execs);
      case "month": return set(s => { s.a.month = +v; s.a.start = Math.min(s.a.start, daysInMonth(+v)); });
      case "start": return set(s => s.a.start = +v);
      case "flex": return set(s => s.a.flex = +v);
      case "dur": return set(s => s.a.duration = v);
      case "wmode": return set(s => s.a.whereMode = v);
      case "dest": return set(s => s.a.dest = v);
      case "feel": return set(s => s.a.feel[el.dataset.p] = v);
      case "must": return set(s => s.a.must[v] = !s.a.must[v]);
      case "diet": return set(s => s.a.diet[v] = !s.a.diet[v]);
      case "access": return set(s => s.a.access[v] = !s.a.access[v]);
      case "rank": { const [i, d] = v.split(":").map(Number); return set(s => { const r2 = s.a.ranking; const j = i + d; [r2[i], r2[j]] = [r2[j], r2[i]]; }); }
      case "opt": return set(s => s.a.option = v);
      case "swap": return openSwap(+v);
      case "book": return set(s => { s.a.approval = false; s.a.terms = false; location.hash = "#planner/10"; });
      case "approve": return set(s => { s.a.approval = true; s.a.invited = false; location.hash = "#planner/11"; });
      case "specialist": return toast("A Planned specialist will call you within the hour. Your plan stays as it is.");
      case "terms": state.a.terms = el.checked; ui.termsError = false; save(); return;
      case "confirm":
        if (!a.terms) { ui.termsError = true; render(); const c = app.querySelector('[data-k="terms"]'); if (c) c.focus(); return; }
        return set(s => { s.a.approval = false; s.a.invited = false; location.hash = "#planner/11"; });
      case "invite": return set(s => s.a.invited = true);
      case "draft": return draft();
      case "addspace": return toast("A new space starts from the same capacity and photo template.");
      case "day": {
        const o = +v;
        if (ui.rangeStart == null || ui.rangeEnd != null) { ui.rangeStart = o; ui.rangeEnd = null; }
        else ui.rangeEnd = o;
        return render();
      }
      case "selweek": {
        const o = ui.rangeStart, m = Math.floor(o / 100), dow = new Date(2026, m, o % 100).getDay();
        const sun = new Date(2026, m, o % 100 - dow), sat = new Date(2026, m, o % 100 - dow + 6);
        const clamp = (d) => Math.min(Math.max(d.getMonth() * 100 + d.getDate(), allOrds()[0]), allOrds().slice(-1)[0]);
        ui.rangeStart = clamp(sun); ui.rangeEnd = clamp(sat); return render();
      }
      case "selmonth": { const m = Math.floor(ui.rangeStart / 100); ui.rangeStart = m * 100 + 1; ui.rangeEnd = m * 100 + daysInMonth(m); return render(); }
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
      case "crosslink": state.a.option = "best"; state.a.swaps = {}; save(); return;
    }
  });
  app.addEventListener("submit", (e) => { e.preventDefault(); if (e.target.dataset.form === "draft") draft(); });

  // Arrow keys move within radio groups and tabs
  app.addEventListener("keydown", (e) => {
    const el = e.target;
    const grp = el.closest('[role="radiogroup"], [role="tablist"]');
    if (!grp || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;
    const items = [...grp.querySelectorAll('[role="radio"], [role="tab"]')];
    const i = items.indexOf(el); if (i < 0) return;
    e.preventDefault();
    const n = items[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length];
    n.click();
    const again = app.querySelector(`[data-k="${CSS.escape(n.dataset.k)}"]`); if (again) again.focus();
  });

  // Budget slider updates text in place so dragging stays smooth
  app.addEventListener("input", (e) => {
    if (e.target.id !== "pp") return;
    state.a.pp = +e.target.value; save();
    const t = budgetTotal(), over = t > D.company.policyLimit;
    $("#b-pp").textContent = money(state.a.pp);
    $("#b-total").textContent = money(t);
    e.target.setAttribute("aria-valuetext", `${money(state.a.pp)} per person per day`);
    const note = $("#b-note");
    note.className = `policy ${over ? "warn" : "ok"}`;
    note.innerHTML = `${icon(over ? "user" : "shield", 16)}<span>${over ? "Jordan Lee (Finance) will approve this" : "Within Fernway policy. No approval needed."}</span>`;
    const body = $(".aside-body"); if (body) body.innerHTML = planPreview(5);
  });
  app.addEventListener("change", (e) => { if (e.target.id === "pp") render(); });

  // Pricing fields (B3): validate as you type, format on blur
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
  app.addEventListener("input", (e) => {
    const id = e.target.dataset.price; if (!id) return;
    state.b.prices[id] = e.target.value; save();
    if (ui.priceErrors[id]) showPriceError(id);   // clear an existing error as soon as it's fixed
    refreshMeter();
  });
  app.addEventListener("focusout", (e) => {
    const id = e.target.dataset && e.target.dataset.price; if (!id) return;
    const f = D.listing.pricing.find(x => x.id === id), n = parseNum(e.target.value);
    if (!priceError(f, e.target.value) && f.unit === "money") { e.target.value = state.b.prices[id] = num(n); save(); }
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
    const opt = option(), list = choices(opt, i), cur = state.a.swaps[opt.id + i] || 0;
    $("#drawer-title").textContent = `Swap ${opt.components[i].kind.toLowerCase()}`;
    $("#drawer-body").innerHTML = `<p class="muted small">Same dates, same rules. Prices update your total.</p>
      <ul class="alts">${list.map((c, j) => `<li><button class="alt" data-j="${j}" aria-pressed="${j === cur}">
        <span class="alt-art">${art(c.art)}</span>
        <span class="alt-body"><span class="alt-name">${c.name}</span><span class="muted small">${c.detail}</span>${c.why ? `<span class="small">${c.why}</span>` : ""}
          <span class="alt-meta">${badge(Object.assign({ kind: opt.components[i].kind }, c), false)}<strong>${money(c.price)}</strong>${j === cur ? `<span class="muted small">Current</span>` : ""}</span></span>
      </button></li>`).join("")}</ul>`;
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
  function renderMenu(r) {
    const item = (href, label, extra) => {
      const cur = location.hash === href || (href === "#" && !location.hash);
      return `<li><a href="${href}" ${extra || ""} ${cur ? 'aria-current="page"' : ""}>${label}</a></li>`;
    };
    $("#menu-body").innerHTML = `
      <ul class="menu-list">${item("#", "Landing")}</ul>
      <p class="menu-h">Flow A · Planner</p>
      <ul class="menu-list">${PLANNER_STEPS.map((s, i) => item(`#planner/${i}`, `A${i} · ${s}`)).join("")}
        <li><a href="#planner/11" data-approval="1">A11 · Success, approval variant</a></li></ul>
      <p class="menu-h">Flow B · Supplier</p>
      <ul class="menu-list">${SUPPLIER_STEPS.map((s, i) => item(`#supplier/${i}`, `B${i} · ${s}`)).join("")}</ul>`;
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
    if (href === "#planner/11") state.a.approval = !!a.dataset.approval;
    if (href === "#planner/10") state.a.terms = false;
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
