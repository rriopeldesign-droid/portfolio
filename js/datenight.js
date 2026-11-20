// DateNight case study: the phone's tabs and the RSVP walkthrough.
// The page reads fine without this file: the phone shows Explore and the steps are a list.
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── The phone: tap a tab to look around (Explore, Dates, Messages, Profile) ──
  var wrap = document.querySelector('.dn-phone-wrap');
  if (wrap) {
    var tabs = [].slice.call(wrap.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      wrap.dataset.tab = tab.dataset.tab;
      if (focus) tab.focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = tabs.length, j = null;
        if (k === 'ArrowRight') j = (i + 1) % n;
        else if (k === 'ArrowLeft') j = (i - 1 + n) % n;
        else if (k === 'Home') j = 0;
        else if (k === 'End') j = n - 1;
        if (j === null) return;
        e.preventDefault();
        select(tabs[j], true);
      });
    });
  }

  // ── The walkthrough: Browse → RSVP → Approved → Chat → Date ──
  var flow = document.querySelector('.dn-flow');
  if (!flow) return;
  var steps = [].slice.call(flow.querySelectorAll('[data-go]'));
  var pause = flow.querySelector('.dn-pause');
  var DUR = [3000, 3400, 2800, 3600, 3200];
  var i = 0, timer = 0, visible = false, playing = !reduce;

  var show = function (n) {
    i = n;
    flow.dataset.step = String(n);
    steps.forEach(function (b, j) {
      if (j === n) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
      b.style.setProperty('--d', DUR[j] + 'ms');
    });
  };
  var schedule = function () {
    clearTimeout(timer);
    flow.classList.toggle('is-playing', playing && visible);
    flow.classList.toggle('is-paused', !playing);
    if (playing && visible) timer = setTimeout(function () { show((i + 1) % steps.length); schedule(); }, DUR[i]);
  };

  steps.forEach(function (b, j) {
    b.addEventListener('click', function () {
      // Restart the step's animation even when it's the one already showing
      flow.dataset.step = '-1';
      void flow.offsetWidth;
      show(j);
      schedule();
    });
  });

  if (pause) {
    pause.hidden = reduce;
    pause.addEventListener('click', function () {
      playing = !playing;
      pause.setAttribute('aria-pressed', String(!playing));
      pause.textContent = playing ? 'Pause' : 'Play';
      schedule();
    });
  }

  show(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.35 }).observe(flow);
  } else {
    visible = true;
    schedule();
  }
})();
