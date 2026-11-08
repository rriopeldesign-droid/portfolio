document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNavLink();
  enableMobileToggle();
  initScrollReveal();
  initFieldNotes();
});

// ── Field notes ──────────────────────────────────────────────────────────────
// A quiet log of things found around the site, kept in this browser only (localStorage).
// Any page can add a note with window.fieldNotes.add(id); the homepage shows the log in its HUD.
// Finding the Hollow unlocks the maze as a secret level; finding the saucer unlocks the Void.
window.fieldNotes = (function () {
  var KEY = 'field-notes', READ = 'field-notes-read';
  var IDS = ['lanterns', 'case', 'figure', 'campfire', 'wander', 'hollow', 'ufo'];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  return {
    ids: IDS,
    all: load,
    has: function (id) { return !!load()[id]; },
    add: function (id) {
      if (IDS.indexOf(id) < 0) return false;
      var s = load();
      if (s[id]) return false;
      s[id] = Date.now();
      save(s);
      document.dispatchEvent(new CustomEvent('fieldnote', { detail: { id: id } }));
      return true;
    },
    unread: function () {
      var s = load(), r = 0;
      try { r = +localStorage.getItem(READ) || 0; } catch (e) {}
      return IDS.filter(function (id) { return s[id] > r; }).length;
    },
    markRead: function () { try { localStorage.setItem(READ, String(Date.now())); } catch (e) {} },
    forget: function () { try { localStorage.removeItem(KEY); localStorage.removeItem(READ); } catch (e) {} document.dispatchEvent(new CustomEvent('fieldnote', { detail: {} })); }
  };
})();

var FIELD_NOTES_TEXT = {
  en: {
    title: 'Field notes', count: '{n} of {t} found', secret: 'Secret levels', locked: 'Locked', fresh: 'New field note',
    forget: 'Start over', close: 'Close', maze: 'The maze', void: 'The Void',
    notes: {
      lanterns: ['Watched the lanterns light', 'Walk on until dusk.'],
      case: ['Read a case study', 'Follow one of the signs.'],
      figure: ['Saw something between the trees', 'Past the sapling, watch the treeline.'],
      campfire: ['Reached the campfire', 'Walk to the end of the path.'],
      wander: ['Stepped off the path', 'Not every walk keeps to the path.'],
      hollow: ['Found the Hollow', 'Something breathes, deep past the sapling.'],
      ufo: ['Saw a light that was not a star', 'Off the path, look back the way you came.']
    }
  },
  de: {
    title: 'Feldnotizen', count: '{n} von {t} gefunden', secret: 'Geheime Level', locked: 'Verschlossen', fresh: 'Neue Feldnotiz',
    forget: 'Von vorn beginnen', close: 'Schließen', maze: 'Das Labyrinth', void: 'Die Leere',
    notes: {
      lanterns: ['Die Laternen angehen sehen', 'Gehen Sie weiter bis zur Dämmerung.'],
      case: ['Eine Fallstudie gelesen', 'Folgen Sie einem der Wegweiser.'],
      figure: ['Etwas zwischen den Bäumen gesehen', 'Achten Sie hinter dem Setzling auf den Waldrand.'],
      campfire: ['Das Lagerfeuer erreicht', 'Gehen Sie bis ans Ende des Weges.'],
      wander: ['Vom Weg abgekommen', 'Nicht jeder Spaziergang bleibt auf dem Weg.'],
      hollow: ['Die Höhle gefunden', 'Tief hinter dem Setzling atmet etwas.'],
      ufo: ['Ein Licht gesehen, das kein Stern war', 'Abseits des Weges: Schauen Sie zurück, woher Sie kamen.']
    }
  },
  fr: {
    title: 'Carnet de terrain', count: '{n} sur {t} trouvés', secret: 'Niveaux secrets', locked: 'Verrouillé', fresh: 'Nouvelle note',
    forget: 'Tout recommencer', close: 'Fermer', maze: 'Le labyrinthe', void: 'Le Vide',
    notes: {
      lanterns: ['Vu les lanternes s’allumer', 'Marchez jusqu’au crépuscule.'],
      case: ['Lu une étude de cas', 'Suivez l’un des panneaux.'],
      figure: ['Vu quelque chose entre les arbres', 'Après la pousse, surveillez la lisière.'],
      campfire: ['Atteint le feu de camp', 'Marchez jusqu’au bout du sentier.'],
      wander: ['Quitté le sentier', 'Toutes les promenades ne suivent pas le sentier.'],
      hollow: ['Trouvé le creux', 'Quelque chose respire, loin après la pousse.'],
      ufo: ['Vu une lumière qui n’était pas une étoile', 'Hors du sentier, regardez derrière vous.']
    }
  }
};

function initFieldNotes() {
  var notes = window.fieldNotes;
  var root = document.documentElement;
  // Notes any page can earn
  if (/\/case-studies\//.test(location.pathname)) notes.add('case');
  var contact = document.querySelector('.forest-page #contact');
  if (contact && 'IntersectionObserver' in window) {
    // Without the 3D walk, reaching the last section still counts as reaching the fire
    new IntersectionObserver(function (entries, io) {
      if (entries[0].isIntersecting && !root.classList.contains('forest-on')) { notes.add('campfire'); io.disconnect(); }
    }, { threshold: 0.5 }).observe(contact);
  }

  // The log itself lives in the forest's HUD
  var hud = document.querySelector('.forest-hud');
  if (!hud) return;
  var T = FIELD_NOTES_TEXT[root.lang] || FIELD_NOTES_TEXT.en;
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'hud-btn notes-btn';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'fieldNotes');
  var panel = document.createElement('section');
  panel.className = 'field-notes';
  panel.id = 'fieldNotes';
  panel.hidden = true;
  panel.setAttribute('aria-label', T.title);
  var toast = document.createElement('p');
  toast.className = 'notes-toast';
  toast.setAttribute('role', 'status');
  hud.insertBefore(btn, hud.firstChild);
  document.body.appendChild(panel);
  document.body.appendChild(toast);

  var esc = function (x) { return String(x).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  function render() {
    var s = notes.all(), ids = notes.ids;
    var n = ids.filter(function (id) { return s[id]; }).length;
    var unread = panel.hidden ? notes.unread() : 0;
    btn.innerHTML = '<span class="notes-glyph" aria-hidden="true"></span><span class="notes-label">' + esc(T.title) + '</span> <span class="notes-n">' + n + '/' + ids.length + '</span>' +
      (unread ? '<span class="notes-dot" aria-hidden="true"></span>' : '');
    btn.setAttribute('aria-label', T.title + ', ' + T.count.replace('{n}', n).replace('{t}', ids.length));
    var items = ids.map(function (id) {
      var t = T.notes[id], got = !!s[id];
      return '<li class="' + (got ? 'is-found' : 'is-hidden') + '"><span class="notes-mark" aria-hidden="true"></span>' +
        (got ? '<span>' + esc(t[0]) + '</span>' : '<span><span class="sr-only">' + esc(T.locked) + ': </span>' + esc(t[1]) + '</span>') + '</li>';
    }).join('');
    var level = function (id, name, href) {
      return s[id]
        ? '<li class="is-found"><a href="' + href + '">' + esc(name) + ' <span aria-hidden="true">→</span></a></li>'
        : '<li class="is-hidden"><span>' + esc(name) + '</span><span class="notes-lock">' + esc(T.locked) + '</span></li>';
    };
    panel.innerHTML =
      '<header><p class="notes-title">' + esc(T.title) + '</p><p class="notes-count">' + esc(T.count.replace('{n}', n).replace('{t}', ids.length)) + '</p></header>' +
      '<ul class="notes-list">' + items + '</ul>' +
      '<p class="notes-title notes-sub">' + esc(T.secret) + '</p>' +
      '<ul class="notes-levels">' + level('hollow', T.maze, '/fun.html') + level('ufo', T.void, '/fun2.html') + '</ul>' +
      '<footer>' + (n ? '<button type="button" class="notes-forget">' + esc(T.forget) + '</button>' : '<span></span>') +
      '<button type="button" class="notes-close">' + esc(T.close) + '</button></footer>';
  }
  function open(on) {
    panel.hidden = !on;
    btn.setAttribute('aria-expanded', String(on));
    if (on) { notes.markRead(); toast.classList.remove('is-on'); }
    render();
    if (on) panel.querySelector('.notes-close').focus();
  }
  btn.addEventListener('click', function () { open(panel.hidden); });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('.notes-close')) { open(false); btn.focus(); }
    if (e.target.closest('.notes-forget')) { notes.forget(); render(); panel.querySelector('.notes-close').focus(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { open(false); btn.focus(); } });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !e.target.closest('.field-notes, .notes-btn')) open(false);
  });
  var toastTimer = 0;
  document.addEventListener('fieldnote', function (e) {
    render();
    var id = e.detail && e.detail.id;
    if (!id || !panel.hidden) return;
    toast.innerHTML = '<span>' + esc(T.fresh) + '</span> ' + esc(T.notes[id][0]);
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-on'); }, 4200);
  });
  // Another tab found something
  window.addEventListener('storage', function (e) { if (e.key === 'field-notes') render(); });
  render();
}

function highlightActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Highlight "Work" for both /work.html and /case-studies/*
    if (href === '/work.html' && (path.includes('/work') || path.includes('/case-studies/'))) {
      link.classList.add('active');
    } else if (path === href || path === href.replace('.html', '')) {
      link.classList.add('active');
    } else if (path === '/' && (href === '/' || href === '/index.html')) {
      link.classList.add('active');
    }
  });
}

function enableMobileToggle() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const opening = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(opening));

    const lines = toggle.querySelectorAll('line');
    if (lines.length === 2) {
      if (opening) {
        lines[0].setAttribute('y1', '12'); lines[0].setAttribute('y2', '12');
        lines[0].setAttribute('x1', '5');  lines[0].setAttribute('x2', '19');
        lines[0].style.transform = 'rotate(45deg)';
        lines[0].style.transformOrigin = 'center';
        lines[1].setAttribute('y1', '12'); lines[1].setAttribute('y2', '12');
        lines[1].setAttribute('x1', '5');  lines[1].setAttribute('x2', '19');
        lines[1].style.transform = 'rotate(-45deg)';
        lines[1].style.transformOrigin = 'center';
      } else {
        lines[0].setAttribute('y1', '7');  lines[0].setAttribute('y2', '7');
        lines[0].setAttribute('x1', '4');  lines[0].setAttribute('x2', '20');
        lines[0].style.transform = 'none';
        lines[1].setAttribute('y1', '17'); lines[1].setAttribute('y2', '17');
        lines[1].setAttribute('x1', '4');  lines[1].setAttribute('x2', '20');
        lines[1].style.transform = 'none';
      }
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-group').forEach(el => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
}