// Email Builder case study: the hero's toggles and templates, and the build walkthrough.
// The page reads fine without this file: the hero shows the Welcome email in dark mode and the steps are a list.
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── The hero: Desktop/Mobile, Light/Dark, and three of the builder's templates ──
  // Copy comes from the builder's own templates; the stats rows reuse each template's numbers.
  var TEMPLATES = {
    welcome: {
      h: 'Welcome to RVezy, Explorer!',
      sub: 'Canada’s largest RV rental marketplace is ready for you. Find your perfect home on wheels.',
      btn: 'Start Exploring',
      strip: '50,000+ RVs across Canada · Instant booking · $1M liability included',
      s1: '50K+', l1: 'RVs listed', s2: '500K+', l2: 'Happy renters', s3: '4.9★', l3: 'Avg rating'
    },
    promo: {
      h: 'Weekend Flash Sale',
      sub: 'Up to 30% off select RVs this weekend only. Don’t miss out on these incredible deals.',
      btn: 'Shop the Sale',
      strip: 'Sale ends Sunday at midnight · Limited availability',
      s1: '30%', l1: 'Max savings', s2: '200+', l2: 'RVs on sale', s3: '48 hrs', l3: 'Sale ends in'
    },
    host: {
      h: 'Earn up to $25,000 This Season',
      sub: 'List your RV for free and start earning with Canada’s largest rental marketplace.',
      btn: 'List My RV',
      strip: 'Free to list · No upfront costs · No monthly fees · Cancel anytime',
      s1: '$25K', l1: 'Per season', s2: '10,000+', l2: 'Canadian hosts', s3: '$1M', l3: 'Liability cover'
    }
  };

  var app = document.querySelector('.eb-app');
  var scope = app && app.closest('.eb-scope');
  if (app && scope) {
    var mail = app.querySelector('.eb-mail');
    var press = function (set, value) {
      [].forEach.call(scope.querySelectorAll('[data-set="' + set + '"]'), function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.value === value));
      });
    };
    var swap = function (name) {
      var t = TEMPLATES[name];
      if (!t) return;
      [].forEach.call(mail.querySelectorAll('[data-k]'), function (el) { el.textContent = t[el.dataset.k]; });
      if (!reduce) {
        mail.classList.remove('is-swap');
        void mail.offsetWidth;
        mail.classList.add('is-swap');
      }
    };
    scope.addEventListener('click', function (e) {
      var b = e.target.closest('[data-set]');
      if (!b || b.getAttribute('aria-pressed') === 'true') return;
      var set = b.dataset.set, value = b.dataset.value;
      press(set, value);
      if (set === 'tpl') swap(value);
      else app.dataset[set] = value;
    });
  }

  // ── The walkthrough: Template → Blocks → Edit → Preview → Copy ──
  var flow = document.querySelector('.eb-flow');
  if (!flow) return;
  var steps = [].slice.call(flow.querySelectorAll('[data-go]'));
  var pause = flow.querySelector('.eb-pause');
  var DUR = [3000, 4200, 3400, 3200, 3800];
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
