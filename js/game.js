// game.js: Escape the Maze
// Canvas renderer, smooth grid movement, ghost AI, fog of war with explored memory,
// animated level transitions, particles, and synthesized sound.
// ═══════════════════════════════════════════════════════════════

(() => {
'use strict';

// ═══════ DOM ═══════
const stage = document.getElementById('stage');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const overlay = document.getElementById('overlay');
const banner = document.getElementById('banner');
const hudLevel = document.getElementById('hud-level');
const hudScore = document.getElementById('hud-score');
const hudLives = document.getElementById('hud-lives');
const hudKey = document.getElementById('hud-key');
const hudTime = document.getElementById('hud-time');
const btnSound = document.getElementById('btn-sound');
const btnPause = document.getElementById('btn-pause');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ═══════ CONFIG ═══════
const LEVELS = [
  { size: 11, light: 4.5, ghosts: 0, powerups: 0, ghostSpeed: 0,   sense: 0, braid: 0.10, name: 'The Entrance',  hint: 'Find the key, unlock the door, reach the chest.' },
  { size: 13, light: 4.0, ghosts: 1, powerups: 1, ghostSpeed: 2.6, sense: 5, braid: 0.16, name: 'Haunted Halls', hint: 'Something wanders these halls. Don’t let it touch you.' },
  { size: 15, light: 3.6, ghosts: 2, powerups: 1, ghostSpeed: 2.9, sense: 6, braid: 0.18, name: 'The Crypt',     hint: 'Grab ⚡ and the hunters become the hunted.' },
  { size: 15, light: 3.3, ghosts: 3, powerups: 2, ghostSpeed: 3.2, sense: 7, braid: 0.20, name: 'Echo Chambers', hint: 'Watch for glowing eyes in the dark.' },
  { size: 17, light: 3.0, ghosts: 4, powerups: 2, ghostSpeed: 3.5, sense: 8, braid: 0.22, name: 'The Deep Dark', hint: 'Your light is fading. Trust your memory.' },
  { size: 19, light: 2.7, ghosts: 5, powerups: 3, ghostSpeed: 3.8, sense: 9, braid: 0.24, name: 'The Vault',     hint: 'The treasure is close. So are they.' },
];

const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // up, right, down, left
const OPP = d => (d + 2) % 4;
const PLAYER_SPEED = 5.2;   // tiles per second
const START_LIVES = 3;
const POWER_TIME = 7;
const GHOST_COLORS = ['#ef4444', '#ec4899', '#22d3ee', '#f59e0b', '#a855f7'];
const INTRO_TIME = 2.3;

const C = {
  bg: '#07090e',
  floorA: '#121723', floorB: '#141a27',
  wallTop: '#2a3347', wallFront: '#1a2030', wallEdge: '#3a4560',
  pellet: '#fcd9a8',
  gold: '#facc15',
  blue: '#3b82f6',
};

// ═══════ HELPERS ═══════
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutBack = t => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const easeInOut = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const rand = (a, b) => a + Math.random() * (b - a);
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function readLS(k) { try { return localStorage.getItem(k); } catch { return null; } }
function writeLS(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

// ═══════ SOUND ═══════
const Sound = (() => {
  let ac = null, master = null;
  let muted = readLS('maze-muted') !== '0'; // off until the player turns it on
  let flip = false;

  function unlock() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ac = new AC();
    master = ac.createGain();
    master.gain.value = muted ? 0 : 0.5;
    master.connect(ac.destination);
  }

  function tone(freq, dur, { type = 'square', vol = 0.06, to = null, delay = 0 } = {}) {
    if (!ac || muted) return;
    const t0 = ac.currentTime + delay;
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(master);
    o.start(t0); o.stop(t0 + dur + 0.02);
  }

  return {
    unlock,
    get muted() { return muted; },
    toggle() {
      muted = !muted;
      writeLS('maze-muted', muted ? '1' : '0');
      if (master) master.gain.value = muted ? 0 : 0.5;
      return muted;
    },
    pellet() { flip = !flip; tone(flip ? 540 : 660, 0.05, { type: 'triangle', vol: 0.04 }); },
    key()    { [660, 880, 1320].forEach((f, i) => tone(f, 0.12, { vol: 0.05, delay: i * 0.07 })); },
    door()   { tone(160, 0.3, { type: 'sawtooth', vol: 0.06, to: 60 }); tone(520, 0.15, { type: 'triangle', vol: 0.05, delay: 0.12 }); },
    locked() { tone(110, 0.12, { vol: 0.05 }); },
    power()  { tone(220, 0.45, { type: 'sawtooth', vol: 0.05, to: 1200 }); },
    eat()    { tone(300, 0.18, { vol: 0.06, to: 1400 }); },
    die()    { tone(700, 0.9, { type: 'sawtooth', vol: 0.07, to: 60 }); },
    chest()  { [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.18, { vol: 0.05, delay: i * 0.08 })); },
    start()  { tone(392, 0.1, { vol: 0.05 }); tone(784, 0.16, { vol: 0.05, delay: 0.1 }); },
    over()   { [392, 330, 262].forEach((f, i) => tone(f, 0.25, { type: 'triangle', vol: 0.06, delay: i * 0.18 })); },
    sweep()  { [880, 1175, 1568].forEach((f, i) => tone(f, 0.1, { type: 'triangle', vol: 0.05, delay: i * 0.06 })); },
  };
})();

// ═══════ STATE ═══════
let state = 'title'; // title | intro | play | dying | respawn | complete | paused | gameover | victory
let pausedFrom = null;
let pausedStateTime = 0;
let levelIdx = 0;
let score = 0;
let levelStartScore = 0;
let lives = START_LIVES;
let best = parseInt(readLS('maze-best') || '0', 10) || 0;
let totalGhostsEaten = 0;
let totalTime = 0;

let L = null;          // current level
let player = null;
let ghosts = [];
let particles = [];
let floaters = [];
let playerField = null;
let playerFieldTile = -1;

let time = 0, stateTime = 0, levelTime = 0;
let shake = 0, hitStop = 0;
let flash = { a: 0, color: '#fff' };
let iris = 1, irisCenter = null;
let combo = 0;

// Canvas metrics
let dpr = 1, size = 400, tile = 20;
let mazeCache = null, dark = null, dctx = null;

// ═══════ MAZE GENERATION ═══════
function buildLevel(idx) {
  const cfg = LEVELS[idx];
  const n = cfg.size;
  const grid = Array.from({ length: n }, () => new Uint8Array(n).fill(1));
  const inBounds = (x, y) => x >= 0 && y >= 0 && x < n && y < n;
  const open = (x, y) => inBounds(x, y) && grid[y][x] === 0;

  // Recursive backtracker (iterative)
  const stack = [[1, 1]];
  grid[1][1] = 0;
  while (stack.length) {
    const [x, y] = stack[stack.length - 1];
    const next = shuffle([0, 1, 2, 3])
      .map(d => [x + DIRS[d][0] * 2, y + DIRS[d][1] * 2, d])
      .find(([nx, ny]) => nx > 0 && ny > 0 && nx < n - 1 && ny < n - 1 && grid[ny][nx] === 1);
    if (!next) { stack.pop(); continue; }
    const [nx, ny, d] = next;
    grid[y + DIRS[d][1]][x + DIRS[d][0]] = 0;
    grid[ny][nx] = 0;
    stack.push([nx, ny]);
  }

  function bfs(sx, sy, blocked) {
    const dist = new Int16Array(n * n).fill(-1);
    const par = new Int32Array(n * n).fill(-1);
    const order = [sy * n + sx];
    dist[order[0]] = 0;
    for (let i = 0; i < order.length; i++) {
      const c = order[i], x = c % n, y = (c / n) | 0;
      for (const [dx, dy] of DIRS) {
        const nx = x + dx, ny = y + dy;
        if (!open(nx, ny)) continue;
        const ni = ny * n + nx;
        if (dist[ni] >= 0 || (blocked && blocked(nx, ny))) continue;
        dist[ni] = dist[c] + 1;
        par[ni] = c;
        order.push(ni);
      }
    }
    return { dist, par, order };
  }

  const startIdx = n + 1;
  const s = bfs(1, 1);
  const chestIdx = s.order[s.order.length - 1];

  // Main path start → chest; the door sits on it (~60% along), so it's a real chokepoint
  const path = [];
  for (let c = chestIdx; c !== -1; c = s.par[c]) path.unshift(c);
  const target = Math.floor(path.length * 0.6);
  let doorIdx = -1;
  for (let off = 0; off < path.length && doorIdx < 0; off++) {
    for (const i of [target + off, target - off]) {
      if (i <= 2 || i >= path.length - 2) continue;
      const x = path[i] % n, y = (path[i] / n) | 0;
      if ((x % 2 === 0) !== (y % 2 === 0)) { doorIdx = i; break; } // a gap in a wall reads as a doorway
    }
  }
  if (doorIdx < 0) doorIdx = Math.max(1, Math.min(path.length - 2, target));
  const doorC = path[doorIdx];
  const isDoor = (x, y) => y * n + x === doorC;

  // Region A = reachable from start without passing the door
  const a = bfs(1, 1, isDoor);
  const inA = i => a.dist[i] >= 0;

  // Key: the deepest region-A cell off the main path, so finding it takes exploring
  const onPath = new Set(path);
  let keyC = -1, keyD = -1;
  for (const c of a.order) {
    if (onPath.has(c) || c === startIdx) continue;
    if (a.dist[c] > keyD) { keyD = a.dist[c]; keyC = c; }
  }
  if (keyC < 0) keyC = path[Math.max(1, doorIdx - 2)];

  // Braid: knock out some walls to add loops (escape routes), never across the door
  const walls = [];
  for (let y = 1; y < n - 1; y++) {
    for (let x = 1; x < n - 1; x++) {
      if (grid[y][x] !== 1 || (x % 2 === 0) === (y % 2 === 0)) continue;
      const [p, q] = x % 2 === 0 ? [[x - 1, y], [x + 1, y]] : [[x, y - 1], [x, y + 1]];
      if (inA(p[1] * n + p[0]) === inA(q[1] * n + q[0])) walls.push([x, y]);
    }
  }
  shuffle(walls).slice(0, Math.round(walls.length * cfg.braid)).forEach(([x, y]) => { grid[y][x] = 0; });

  const full = bfs(1, 1);
  const regionA = bfs(1, 1, isDoor);
  const taken = new Set([startIdx, keyC, doorC, chestIdx]);
  const manhattan = (i, j) => Math.abs(i % n - j % n) + Math.abs(((i / n) | 0) - ((j / n) | 0));

  function pickCells(count, minStartDist, spacing, preferB) {
    const out = [];
    const pools = [[], []]; // [A, B]
    for (const c of full.order) {
      if (taken.has(c) || full.dist[c] < minStartDist) continue;
      pools[regionA.dist[c] >= 0 ? 0 : 1].push(c);
    }
    shuffle(pools[0]); shuffle(pools[1]);
    for (let i = 0; i < count; i++) {
      const order = (preferB ? i % 2 === 0 : i % 2 === 1) ? [1, 0] : [0, 1];
      let found;
      for (const pi of order) {
        found = pools[pi].find(c => !taken.has(c) && out.every(o => manhattan(o, c) >= spacing));
        if (found !== undefined) break;
      }
      if (found === undefined) continue;
      out.push(found);
      taken.add(found);
    }
    return out;
  }

  const powerCells = pickCells(cfg.powerups, 5, 5, false);
  const ghostCells = pickCells(cfg.ghosts, 8, 3, cfg.ghosts > 1);

  const pellets = new Set();
  for (const c of full.order) if (!taken.has(c)) pellets.add(c);
  // Ghost spawns hold pellets too
  ghostCells.forEach(c => pellets.add(c));

  const xy = c => ({ x: c % n, y: (c / n) | 0 });
  const doorXY = xy(doorC);
  return {
    idx, cfg, n, grid,
    start: xy(startIdx),
    key: xy(keyC),
    door: { ...doorXY, horiz: open(doorXY.x - 1, doorXY.y) },
    chest: xy(chestIdx),
    powerups: powerCells.map(c => ({ ...xy(c), taken: false })),
    ghostSpawns: ghostCells.map(xy),
    pellets,
    pelletTotal: pellets.size,
    seen: new Uint8Array(n * n),
    keyTaken: false,
    doorOpen: false,
    doorAnim: 0,
    chestAnim: 0,
    swept: false,
  };
}

// ═══════ GRID QUERIES ═══════
function isWall(x, y) {
  return x < 0 || y < 0 || x >= L.n || y >= L.n || L.grid[y][x] === 1;
}
function isDoorLocked(x, y) {
  return !L.doorOpen && x === L.door.x && y === L.door.y;
}
function isOpen(x, y) {
  return !isWall(x, y) && !isDoorLocked(x, y);
}
function fieldFrom(sx, sy) {
  const n = L.n;
  const dist = new Int16Array(n * n).fill(-1);
  const q = [sy * n + sx];
  dist[q[0]] = 0;
  for (let i = 0; i < q.length; i++) {
    const c = q[i], x = c % n, y = (c / n) | 0;
    for (const [dx, dy] of DIRS) {
      const nx = x + dx, ny = y + dy;
      if (!isOpen(nx, ny)) continue;
      const ni = ny * n + nx;
      if (dist[ni] >= 0) continue;
      dist[ni] = dist[c] + 1;
      q.push(ni);
    }
  }
  return dist;
}

// ═══════ ACTORS ═══════
function makeWalker(x, y) {
  return { x, y, cx: x, cy: y, tx: x, ty: y, dir: null, moving: false };
}

function resetActors() {
  player = {
    ...makeWalker(L.start.x, L.start.y),
    want: null, wantHeld: false, wantTTL: 0,
    face: 1, power: 0, invuln: 0, bumped: false,
  };
  ghosts = L.ghostSpawns.map((sp, i) => ({
    ...makeWalker(sp.x, sp.y),
    home: sp, homeField: null,
    color: GHOST_COLORS[i % GHOST_COLORS.length],
    mode: 'normal', wake: 1.2 + i * 0.9,
    phase: Math.random() * 6.28,
    face: 2,
  }));
  playerFieldTile = -1;
  updatePlayerField();
}

// Move a walker along the grid, choosing a new direction at each tile center
function advance(w, dist, choose) {
  let guard = 0;
  while (dist > 1e-6 && guard++ < 8) {
    if (!w.moving) {
      const d = choose(w);
      if (d == null) return;
      w.dir = d;
      w.tx = w.cx + DIRS[d][0];
      w.ty = w.cy + DIRS[d][1];
      w.moving = true;
    }
    const rem = Math.abs(w.tx - w.x) + Math.abs(w.ty - w.y);
    if (rem <= dist) {
      w.x = w.cx = w.tx;
      w.y = w.cy = w.ty;
      w.moving = false;
      dist -= rem;
    } else {
      w.x += DIRS[w.dir][0] * dist;
      w.y += DIRS[w.dir][1] * dist;
      dist = 0;
    }
  }
}

function reverse(w) {
  if (!w.moving) return;
  [w.cx, w.tx] = [w.tx, w.cx];
  [w.cy, w.ty] = [w.ty, w.cy];
  w.dir = OPP(w.dir);
}

function playerCanEnter(d) {
  const nx = player.cx + DIRS[d][0], ny = player.cy + DIRS[d][1];
  if (isWall(nx, ny)) return false;
  if (isDoorLocked(nx, ny)) {
    if (L.keyTaken) { openDoor(); return true; }
    if (!player.bumped) lockedBump();
    return false;
  }
  return true;
}

function playerChoose() {
  if (player.want != null && playerCanEnter(player.want)) return player.want;
  if (player.dir != null && playerCanEnter(player.dir)) return player.dir;
  return null;
}

function ghostChoose(g) {
  const opts = [];
  for (let d = 0; d < 4; d++) {
    if (isOpen(g.cx + DIRS[d][0], g.cy + DIRS[d][1])) opts.push(d);
  }
  if (!opts.length) return null;
  const n = L.n;
  const at = (d, field) => field[(g.cy + DIRS[d][1]) * n + g.cx + DIRS[d][0]];

  if (g.mode === 'eyes') {
    if (g.cx === g.home.x && g.cy === g.home.y) {
      g.mode = 'normal';
      g.wake = 0.8;
      burst(g.x, g.y, g.color, 14, 3);
      return null;
    }
    if (!g.homeField) g.homeField = fieldFrom(g.home.x, g.home.y);
    return nearest(opts, d => at(d, g.homeField));
  }

  const forward = opts.length > 1 && g.dir != null ? opts.filter(d => d !== OPP(g.dir)) : opts;

  if (g.mode === 'scared') {
    if (Math.random() < 0.3) return forward[Math.floor(Math.random() * forward.length)];
    return forward.reduce((b, d) => at(d, playerField) > at(b, playerField) ? d : b, forward[0]);
  }

  const here = playerField[g.cy * n + g.cx];
  if (here >= 0 && here <= L.cfg.sense && Math.random() < 0.85) {
    return nearest(opts, d => at(d, playerField));
  }
  // Wander, with a little momentum
  if (g.dir != null && forward.includes(g.dir) && Math.random() < 0.5) return g.dir;
  return forward[Math.floor(Math.random() * forward.length)];
}

// The option with the smallest reachable distance (-1 = unreachable)
function nearest(opts, distOf) {
  let best = opts[0], bestD = Infinity;
  for (const d of opts) {
    const v = distOf(d);
    if (v >= 0 && v < bestD) { bestD = v; best = d; }
  }
  return best;
}

function updatePlayerField() {
  const t = Math.round(player.y) * L.n + Math.round(player.x);
  if (t === playerFieldTile) return;
  playerFieldTile = t;
  playerField = fieldFrom(Math.round(player.x), Math.round(player.y));
}

// ═══════ EVENTS ═══════
function addScore(pts, x, y, color) {
  score += pts;
  if (x != null) floaters.push({ x, y, text: `+${pts}`, color: color || C.gold, t: 0, big: pts >= 200 });
  renderHudScore();
}

function lockedBump() {
  player.bumped = true;
  Sound.locked();
  addShake(0.25);
  showBanner('🔒 Locked. Find the key first.');
}

function openDoor() {
  L.doorOpen = true;
  player.bumped = false;
  Sound.door();
  addShake(0.5);
  burst(L.door.x, L.door.y, '#c08a2e', 22, 3.5);
  addScore(50, L.door.x, L.door.y);
  showBanner('🚪 Door unlocked');
  ghosts.forEach(g => { g.homeField = null; });
  playerFieldTile = -1;
  updatePlayerField();
}

function takeKey() {
  L.keyTaken = true;
  Sound.key();
  burst(L.key.x, L.key.y, C.gold, 26, 4);
  ring(L.key.x, L.key.y, C.gold);
  addScore(100, L.key.x, L.key.y);
  showBanner('🔑 Key found. Now find the door.');
  hudKey.textContent = '🔑';
  hudKey.classList.add('has-key');
  pop(hudKey);
}

function takePower(p) {
  p.taken = true;
  Sound.power();
  player.power = Math.max(4.5, POWER_TIME - levelIdx * 0.4);
  combo = 0;
  flash = { a: reduceMotion ? 0.12 : 0.35, color: C.blue };
  ring(p.x, p.y, C.blue, 3);
  burst(p.x, p.y, '#93c5fd', 20, 4);
  addScore(50, p.x, p.y, '#93c5fd');
  showBanner('⚡ Power up. Hunt them!', 'blue');
  ghosts.forEach(g => {
    if (g.mode === 'normal') { g.mode = 'scared'; reverse(g); }
  });
}

function eatGhost(g) {
  combo++;
  totalGhostsEaten++;
  const pts = 200 * Math.pow(2, combo - 1);
  Sound.eat();
  hitStop = 0.09;
  addShake(0.35);
  burst(g.x, g.y, '#93c5fd', 24, 5);
  addScore(pts, g.x, g.y, '#93c5fd');
  g.mode = 'eyes';
  g.homeField = null;
}

function die() {
  lives--;
  renderHudLives();
  Sound.die();
  addShake(1);
  flash = { a: reduceMotion ? 0.15 : 0.4, color: '#dc2626' };
  burst(player.x, player.y, '#f97316', 36, 5);
  setState('dying');
}

function completeLevel() {
  Sound.chest();
  const par = L.n * 4;
  const timeBonus = Math.max(0, Math.round((par - levelTime) * 10));
  const bonus = 500 + timeBonus;
  addScore(bonus, L.chest.x, L.chest.y);
  totalTime += levelTime;
  burst(L.chest.x, L.chest.y, C.gold, 50, 6, -4);
  ring(L.chest.x, L.chest.y, C.gold, 4);
  flash = { a: reduceMotion ? 0.1 : 0.3, color: C.gold };
  addShake(0.4);
  showBanner(`✨ Level cleared  +${bonus}${timeBonus ? ` (speed +${timeBonus})` : ''}`, 'gold');
  saveBest();
  setState('complete');
}

function checkPickups() {
  const tx = Math.round(player.x), ty = Math.round(player.y);
  const n = L.n;
  const c = ty * n + tx;

  if (L.pellets.has(c)) {
    L.pellets.delete(c);
    Sound.pellet();
    addScore(10);
    burst(tx, ty, C.pellet, 4, 1.5);
    if (!L.pellets.size && !L.swept) {
      L.swept = true;
      Sound.sweep();
      addScore(1000, tx, ty, '#fde68a');
      showBanner('🌟 Every ember collected  +1000', 'gold');
    }
  }
  if (!L.keyTaken && tx === L.key.x && ty === L.key.y) takeKey();
  for (const p of L.powerups) {
    if (!p.taken && tx === p.x && ty === p.y) takePower(p);
  }
  if (tx === L.chest.x && ty === L.chest.y) completeLevel();
}

// ═══════ STATE MACHINE ═══════
function setState(s) {
  state = s;
  stateTime = 0;
  btnPause.disabled = !['play', 'intro', 'respawn', 'paused'].includes(s);
  btnPause.innerHTML = s === 'paused' ? ICON_PLAY : ICON_PAUSE;
}

function beginLevel(idx) {
  levelIdx = idx;
  L = buildLevel(idx);
  levelStartScore = score;
  levelTime = 0;
  particles = [];
  floaters = [];
  iris = 1;
  resetActors();
  fit();
  renderHud();
  Sound.start();
  showOverlay('intro', `
    <div class="intro-card">
      <p class="intro-tag">Level ${idx + 1} of ${LEVELS.length}</p>
      <h2 class="intro-name">${L.cfg.name}</h2>
      <p class="intro-hint">${L.cfg.hint}</p>
    </div>`);
  setState('intro');
}

function startGame() {
  Sound.unlock();
  score = 0;
  lives = START_LIVES;
  totalGhostsEaten = 0;
  totalTime = 0;
  beginLevel(0);
}

function retryLevel() {
  score = levelStartScore;
  lives = START_LIVES;
  beginLevel(levelIdx);
}

function togglePause() {
  if (state === 'paused') {
    hideOverlay();
    setState(pausedFrom);
    stateTime = pausedStateTime;
    return;
  }
  if (!['play', 'intro', 'respawn'].includes(state)) return;
  pausedFrom = state;
  pausedStateTime = stateTime;
  showOverlay('pause', `
    <div class="ov-card">
      <h2 class="ov-title">Paused</h2>
      <p class="ov-sub">Level ${levelIdx + 1} · ${L.cfg.name}</p>
      <button class="btn-primary" data-action="resume">Resume</button>
      <p class="ov-fine">P or Esc to resume</p>
    </div>`);
  setState('paused');
}
function gameOver() {
  Sound.over();
  saveBest();
  showOverlay('gameover', `
    <div class="ov-card">
      <div class="ov-emoji">👻</div>
      <h2 class="ov-title">Caught.</h2>
      <p class="ov-sub">You made it to <strong>${L.cfg.name}</strong> with <strong class="gold">${score.toLocaleString()}</strong> points.</p>
      <p class="ov-fine">Best: ${best.toLocaleString()}</p>
      <div class="ov-actions">
        <button class="btn-primary" data-action="retry">Try level ${levelIdx + 1} again</button>
        <button class="btn-ghost" data-action="restart">Start over</button>
      </div>
    </div>`);
  setState('gameover');
}

function victory() {
  saveBest();
  const mins = Math.floor(totalTime / 60), secs = Math.floor(totalTime % 60).toString().padStart(2, '0');
  showOverlay('victory', `
    <div class="ov-card">
      <div class="ov-emoji">🏆</div>
      <h2 class="ov-title">You escaped.</h2>
      <p class="ov-sub">Score <strong class="gold">${score.toLocaleString()}</strong>${score >= best ? ' · new best!' : ` · best ${best.toLocaleString()}`}</p>
      <p class="ov-fine">${LEVELS.length} levels · ${mins}:${secs} · ${totalGhostsEaten} ghosts eaten · ${lives} ${lives === 1 ? 'life' : 'lives'} left</p>
      <p class="ov-cta-lead">Now let’s talk for real:</p>
      <a class="btn-primary" href="mailto:rriopel.design@gmail.com">rriopel.design@gmail.com</a>
      <button class="btn-ghost" data-action="restart">Play again</button>
    </div>`);
  setState('victory');
}

function saveBest() {
  if (score > best) {
    best = score;
    writeLS('maze-best', String(best));
  }
}

// ═══════ UPDATE ═══════
function update(dt) {
  time += dt;
  stateTime += dt;

  updateParticles(dt);
  shake = Math.max(0, shake - dt * 2.5);
  flash.a = Math.max(0, flash.a - dt * 1.6);

  switch (state) {
    case 'intro':
      if (stateTime > 1.9) hideOverlay();
      if (stateTime >= INTRO_TIME) setState('play');
      break;

    case 'play':
      updatePlay(dt);
      break;

    case 'dying':
      iris = stateTime > 1.0 ? 1 - easeInOut(clamp((stateTime - 1.0) / 0.4)) : 1;
      irisCenter = { x: player.x, y: player.y };
      if (stateTime > 1.45) {
        if (lives > 0) {
          resetActors();
          player.invuln = 2;
          setState('respawn');
        } else {
          iris = 1;
          gameOver();
        }
      }
      break;

    case 'respawn':
      irisCenter = { x: player.x, y: player.y };
      iris = easeInOut(clamp(stateTime / 0.6));
      if (stateTime > 0.6) { iris = 1; setState('play'); }
      break;

    case 'complete':
      L.chestAnim = clamp(stateTime / 0.5);
      irisCenter = { x: L.chest.x, y: L.chest.y };
      iris = stateTime > 1.6 ? 1 - easeInOut(clamp((stateTime - 1.6) / 0.6)) : 1;
      if (stateTime > 2.3) {
        if (levelIdx < LEVELS.length - 1) beginLevel(levelIdx + 1);
        else { iris = 1; victory(); }
      }
      break;
  }

  if (L && L.doorOpen) L.doorAnim = clamp(L.doorAnim + dt * 2.5);
}

function updatePlay(dt) {
  levelTime += dt;

  // Input buffer: a tapped direction is remembered briefly so you can turn early
  if (player.want != null && !player.wantHeld) {
    player.wantTTL -= dt;
    if (player.wantTTL <= 0) player.want = null;
  }
  if (player.moving && player.want != null && player.want === OPP(player.dir)) reverse(player);

  const wasMoving = player.moving;
  advance(player, PLAYER_SPEED * dt, playerChoose);
  if (player.moving) {
    player.face = player.dir;
    if (!wasMoving) player.bumped = false;
  }
  updatePlayerField();
  markSeen();
  checkPickups();
  if (state !== 'play') return;

  player.invuln = Math.max(0, player.invuln - dt);
  if (player.power > 0) {
    player.power -= dt;
    if (player.power <= 0) {
      player.power = 0;
      ghosts.forEach(g => { if (g.mode === 'scared') g.mode = 'normal'; });
    }
  }

  for (const g of ghosts) {
    if (g.wake > 0) { g.wake -= dt; continue; }
    const speed = g.mode === 'eyes' ? 9 : g.mode === 'scared' ? L.cfg.ghostSpeed * 0.55 : L.cfg.ghostSpeed;
    advance(g, speed * dt, ghostChoose);
    if (g.moving) g.face = g.dir;
  }

  for (const g of ghosts) {
    if (g.mode === 'eyes') continue;
    if (Math.hypot(g.x - player.x, g.y - player.y) < 0.6) {
      if (g.mode === 'scared') eatGhost(g);
      else if (player.invuln <= 0) { die(); return; }
    }
  }

  const secs = Math.floor(levelTime);
  if (secs !== updatePlay.lastSecs) {
    updatePlay.lastSecs = secs;
    hudTime.textContent = `${Math.floor(secs / 60)}:${(secs % 60).toString().padStart(2, '0')}`;
  }
}

function markSeen() {
  const r = currentLight() * 0.85;
  const n = L.n;
  const x0 = Math.max(0, Math.floor(player.x - r)), x1 = Math.min(n - 1, Math.ceil(player.x + r));
  const y0 = Math.max(0, Math.floor(player.y - r)), y1 = Math.min(n - 1, Math.ceil(player.y + r));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if ((x - player.x) ** 2 + (y - player.y) ** 2 <= r * r) L.seen[y * n + x] = 1;
    }
  }
}

function currentLight() {
  const base = L.cfg.light;
  return player && player.power > 0 ? base + 1.5 : base;
}

// ═══════ PARTICLES ═══════
function burst(x, y, color, count, speed, lift = 0) {
  if (reduceMotion) count = Math.ceil(count / 3);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2;
    const v = rand(0.3, 1) * speed;
    particles.push({
      x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v + lift,
      life: rand(0.35, 0.8), max: 0.8, color, size: rand(0.04, 0.09), grav: lift ? 6 : 0,
    });
  }
}
function ring(x, y, color, grow = 2.5) {
  particles.push({ x, y, ring: true, r: 0.2, grow, life: 0.5, max: 0.5, color });
}
function updateParticles(dt) {
  for (const p of particles) {
    p.life -= dt;
    if (p.ring) { p.r += p.grow * dt * 2; continue; }
    p.x += p.vx * dt; p.y += p.vy * dt;
    p.vy += p.grav * dt;
    p.vx *= 0.96; p.vy *= 0.96;
  }
  particles = particles.filter(p => p.life > 0);
  for (const f of floaters) f.t += dt;
  floaters = floaters.filter(f => f.t < 1.1);
}
function addShake(v) { if (!reduceMotion) shake = Math.max(shake, v); }

// ═══════ RENDER ═══════
function fit() {
  const parent = stage.parentElement;
  const avail = Math.min(parent.clientWidth, window.innerHeight - 250, 640);
  size = Math.max(260, Math.floor(avail));
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.style.width = canvas.style.height = `${size}px`;
  stage.style.width = stage.style.height = `${size}px`;
  canvas.width = canvas.height = Math.round(size * dpr);
  if (!L) return;
  tile = size / L.n;
  buildCaches();
}

function buildCaches() {
  mazeCache = document.createElement('canvas');
  mazeCache.width = mazeCache.height = canvas.width;
  const g = mazeCache.getContext('2d');
  g.scale(dpr, dpr);
  g.fillStyle = C.bg;
  g.fillRect(0, 0, size, size);
  for (let y = 0; y < L.n; y++) for (let x = 0; x < L.n; x++) drawTile(g, x, y);

  dark = document.createElement('canvas');
  dark.width = dark.height = canvas.width;
  dctx = dark.getContext('2d');
}

function drawTile(g, x, y) {
  const T = tile, px = x * T, py = y * T;
  if (L.grid[y][x] === 1) {
    g.fillStyle = C.wallTop;
    g.fillRect(px, py, T + 0.5, T + 0.5);
    if (y + 1 < L.n && L.grid[y + 1][x] === 0) {
      g.fillStyle = C.wallFront;
      g.fillRect(px, py + T * 0.62, T + 0.5, T * 0.38 + 0.5);
      g.fillStyle = C.wallEdge;
      g.fillRect(px, py + T * 0.62, T + 0.5, Math.max(1, T * 0.05));
    }
  } else {
    g.fillStyle = (x + y) % 2 ? C.floorA : C.floorB;
    g.fillRect(px, py, T + 0.5, T + 0.5);
    if (y > 0 && L.grid[y - 1][x] === 1) {
      const gr = g.createLinearGradient(0, py, 0, py + T * 0.4);
      gr.addColorStop(0, 'rgba(0,0,0,0.45)');
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = gr;
      g.fillRect(px, py, T + 0.5, T * 0.4);
    }
  }
}

const cx = x => (x + 0.5) * tile;
const cy = y => (y + 0.5) * tile;

function render() {
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, size, size);
  if (!L) return;

  ctx.save();
  if (shake > 0) {
    const m = shake * tile * 0.18;
    ctx.translate(rand(-m, m), rand(-m, m));
  }

  // Maze (animated build-in during the level intro)
  const building = state === 'intro' || (state === 'paused' && pausedFrom === 'intro');
  const st = building ? (state === 'paused' ? pausedStateTime : stateTime) : 99;
  if (st < 1.25) {
    for (let y = 0; y < L.n; y++) {
      for (let x = 0; x < L.n; x++) {
        const delay = ((x + y) / (2 * L.n)) * 0.85;
        const p = clamp((st - delay) / 0.4);
        if (p <= 0) continue;
        const s = easeOutBack(p);
        ctx.save();
        ctx.translate(cx(x), cy(y));
        ctx.scale(s, s);
        ctx.translate(-cx(x), -cy(y));
        drawTile(ctx, x, y);
        ctx.restore();
      }
    }
  } else {
    ctx.drawImage(mazeCache, 0, 0, size, size);
  }

  const itemAlpha = clamp((st - 1.2) / 0.35);
  if (itemAlpha > 0) {
    ctx.globalAlpha = itemAlpha;
    drawPellets();
    L.powerups.forEach(p => { if (!p.taken) drawPowerup(p); });
    if (!L.keyTaken) drawKey(L.key.x, L.key.y);
    drawDoor();
    drawChest();
    ghosts.forEach(drawGhost);
    ctx.globalAlpha = 1;
    if (state !== 'dying' || stateTime < 0.9) drawPlayer(st);
  }

  drawParticles();

  // Fog of war
  const darkAlpha = state === 'title' ? 0 : clamp((st - 1.25) / 0.5);
  if (darkAlpha > 0) {
    drawDarkness();
    ctx.globalAlpha = darkAlpha;
    ctx.drawImage(dark, 0, 0, size, size);
    ctx.globalAlpha = 1;
    drawEyesInDark(darkAlpha);
  }

  drawFloaters();
  ctx.restore();

  if (flash.a > 0) {
    ctx.globalAlpha = flash.a;
    ctx.fillStyle = flash.color;
    ctx.fillRect(0, 0, size, size);
    ctx.globalAlpha = 1;
  }

  if (iris < 1 && irisCenter) {
    const r = iris * size * 1.5;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.rect(0, 0, size, size);
    ctx.arc(cx(irisCenter.x), cy(irisCenter.y), Math.max(0, r), 0, Math.PI * 2);
    ctx.fill('evenodd');
  }
}

function drawDarkness() {
  const g = dctx;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.globalCompositeOperation = 'source-over';
  g.clearRect(0, 0, size, size);
  // Explored tiles stay faintly visible; unexplored are pitch black
  g.fillStyle = 'rgba(4,5,9,0.8)';
  g.fillRect(0, 0, size, size);
  g.fillStyle = '#04050a';
  const T = tile;
  for (let y = 0; y < L.n; y++) {
    for (let x = 0; x < L.n; x++) {
      if (!L.seen[y * L.n + x]) g.fillRect(x * T - 0.5, y * T - 0.5, T + 1, T + 1);
    }
  }
  // Cut out the player's light
  const flicker = 1 + Math.sin(time * 9) * 0.015 + Math.sin(time * 23) * 0.01;
  const R = currentLight() * T * flicker;
  const px = cx(player.x), py = cy(player.y);
  const gr = g.createRadialGradient(px, py, 0, px, py, R);
  gr.addColorStop(0, 'rgba(0,0,0,1)');
  gr.addColorStop(0.55, 'rgba(0,0,0,0.92)');
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.globalCompositeOperation = 'destination-out';
  g.fillStyle = gr;
  g.fillRect(px - R, py - R, R * 2, R * 2);
  g.globalCompositeOperation = 'source-over';
}

function drawPellets() {
  const n = L.n, r = Math.max(1.2, tile * 0.075);
  ctx.fillStyle = C.pellet;
  ctx.beginPath();
  for (const c of L.pellets) {
    const x = cx(c % n), y = cy((c / n) | 0);
    ctx.moveTo(x + r, y);
    ctx.arc(x, y, r, 0, Math.PI * 2);
  }
  ctx.fill();
}

function glow(x, y, r, color, alpha) {
  const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
  gr.addColorStop(0, color);
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.fillStyle = gr;
  ctx.fillRect(x - r, y - r, r * 2, r * 2);
  ctx.restore();
}

function drawPowerup(p) {
  const T = tile, x = cx(p.x), y = cy(p.y);
  const pulse = 1 + Math.sin(time * 6) * 0.1;
  glow(x, y, T * 0.7 * pulse, 'rgba(59,130,246,0.6)', 1);
  ctx.fillStyle = '#1d4ed8';
  ctx.strokeStyle = '#93c5fd';
  ctx.lineWidth = Math.max(1, T * 0.04);
  ctx.beginPath();
  ctx.arc(x, y, T * 0.22 * pulse, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  const s = T * 0.2;
  ctx.fillStyle = '#fde047';
  ctx.beginPath();
  ctx.moveTo(x + s * 0.15, y - s * 0.8);
  ctx.lineTo(x - s * 0.45, y + s * 0.1);
  ctx.lineTo(x - s * 0.02, y + s * 0.1);
  ctx.lineTo(x - s * 0.15, y + s * 0.8);
  ctx.lineTo(x + s * 0.45, y - s * 0.1);
  ctx.lineTo(x + s * 0.02, y - s * 0.1);
  ctx.closePath();
  ctx.fill();
}

function drawKey(kx, ky) {
  const T = tile, x = cx(kx), y = cy(ky) + Math.sin(time * 3) * T * 0.06;
  glow(x, y, T * 0.75, 'rgba(250,204,21,0.45)', 0.8 + Math.sin(time * 4) * 0.2);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.7 + Math.sin(time * 2) * 0.12);
  ctx.strokeStyle = C.gold;
  ctx.lineWidth = Math.max(1.5, T * 0.09);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(-T * 0.15, 0, T * 0.12, 0, Math.PI * 2);
  ctx.moveTo(-T * 0.03, 0);
  ctx.lineTo(T * 0.3, 0);
  ctx.moveTo(T * 0.2, 0);
  ctx.lineTo(T * 0.2, T * 0.1);
  ctx.moveTo(T * 0.29, 0);
  ctx.lineTo(T * 0.29, T * 0.08);
  ctx.stroke();
  ctx.restore();
}

function drawDoor() {
  if (L.doorAnim >= 1) return;
  const T = tile, d = L.door;
  const p = L.doorOpen ? L.doorAnim : 0;
  const inset = T * 0.06;
  const w = T - inset * 2;
  const h = (T - inset * 2) * (1 - p);
  const px = d.x * T + inset, py = d.y * T + inset;
  ctx.save();
  ctx.globalAlpha *= 1 - p * 0.5;
  roundRect(ctx, px, py, w, Math.max(0.1, h), T * 0.08);
  ctx.fillStyle = '#5b3a1a';
  ctx.fill();
  ctx.clip();
  ctx.fillStyle = '#3f2812';
  for (let i = 1; i < 3; i++) ctx.fillRect(px + (w * i) / 3 - 0.5, py, Math.max(1, T * 0.03), h);
  ctx.fillStyle = '#8B6914';
  ctx.fillRect(px, py + h * 0.2, w, Math.max(1, T * 0.06));
  ctx.fillRect(px, py + h * 0.72, w, Math.max(1, T * 0.06));
  ctx.restore();

  if (!L.doorOpen) {
    const x = cx(d.x), y = cy(d.y);
    const ready = L.keyTaken;
    if (ready) glow(x, y, T * 0.9, 'rgba(250,204,21,0.5)', 0.6 + Math.sin(time * 5) * 0.4);
    ctx.fillStyle = ready ? C.gold : '#a17a1c';
    ctx.beginPath();
    ctx.arc(x, y, T * 0.13, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1c1206';
    ctx.beginPath();
    ctx.arc(x, y - T * 0.02, T * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(x - T * 0.015, y, T * 0.03, T * 0.07);
  }
}

function drawChest() {
  const T = tile, x = cx(L.chest.x), y = cy(L.chest.y);
  const open = L.chestAnim;
  glow(x, y, T * (1 + open * 1.5), 'rgba(250,204,21,0.4)', 0.6 + Math.sin(time * 3) * 0.25 + open);
  const bw = T * 0.62, bh = T * 0.36;
  const bx = x - bw / 2, by = y - bh * 0.2;

  if (open > 0) {
    // Light pouring out
    const gr = ctx.createLinearGradient(0, by, 0, by - T * 1.4);
    gr.addColorStop(0, `rgba(253,224,71,${0.7 * open})`);
    gr.addColorStop(1, 'rgba(253,224,71,0)');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.moveTo(bx + bw * 0.1, by);
    ctx.lineTo(bx - bw * 0.3, by - T * 1.4);
    ctx.lineTo(bx + bw * 1.3, by - T * 1.4);
    ctx.lineTo(bx + bw * 0.9, by);
    ctx.fill();
  }

  roundRect(ctx, bx, by, bw, bh, T * 0.05);
  ctx.fillStyle = '#b45309';
  ctx.fill();
  ctx.fillStyle = C.gold;
  ctx.fillRect(bx, by + bh * 0.35, bw, Math.max(1, T * 0.05));
  ctx.fillRect(x - T * 0.05, by + bh * 0.2, T * 0.1, T * 0.12);

  ctx.save();
  ctx.translate(bx, by);
  ctx.rotate(-open * 1.1);
  roundRect(ctx, 0, -T * 0.18, bw, T * 0.2, T * 0.06);
  ctx.fillStyle = '#d97706';
  ctx.fill();
  ctx.fillStyle = C.gold;
  ctx.fillRect(0, -T * 0.02, bw, Math.max(1, T * 0.04));
  ctx.restore();
}

function drawGhost(g) {
  const T = tile, x = cx(g.x), y = cy(g.y) + Math.sin(time * 6 + g.phase) * T * 0.03;
  const w = T * 0.36;
  if (g.mode === 'eyes') {
    drawGhostEyes(x, y, w, g.face, 1);
    return;
  }
  let body = g.color;
  if (g.mode === 'scared') {
    const ending = player.power < 2 && Math.floor(time * 6) % 2 === 0;
    body = ending ? '#e5e7eb' : '#1e40af';
  }
  glow(x, y, T * 0.8, body, 0.35);

  const top = y - w * 0.1;
  const bottom = y + w * 0.95;
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(x, top, w, Math.PI, 0);
  ctx.lineTo(x + w, bottom);
  const steps = 6;
  for (let i = 1; i <= steps; i++) {
    const xx = x + w - (2 * w * i) / steps;
    const yy = bottom - (i % 2 ? w * 0.22 : 0) + Math.sin(time * 12 + i + g.phase) * w * 0.06;
    ctx.lineTo(xx, yy);
  }
  ctx.closePath();
  ctx.fill();

  if (g.mode === 'scared') {
    ctx.fillStyle = '#fde68a';
    ctx.fillRect(x - w * 0.42, y - w * 0.3, w * 0.2, w * 0.2);
    ctx.fillRect(x + w * 0.22, y - w * 0.3, w * 0.2, w * 0.2);
    ctx.strokeStyle = '#fde68a';
    ctx.lineWidth = Math.max(1, T * 0.035);
    ctx.beginPath();
    for (let i = 0; i <= 4; i++) {
      const xx = x - w * 0.55 + (w * 1.1 * i) / 4;
      const yy = y + w * 0.3 + (i % 2 ? -w * 0.12 : 0);
      i ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
    }
    ctx.stroke();
  } else if (g.wake > 0) {
    // Sleeping: closed eyes
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = Math.max(1, T * 0.04);
    ctx.beginPath();
    ctx.moveTo(x - w * 0.55, y - w * 0.15); ctx.lineTo(x - w * 0.2, y - w * 0.15);
    ctx.moveTo(x + w * 0.2, y - w * 0.15); ctx.lineTo(x + w * 0.55, y - w * 0.15);
    ctx.stroke();
  } else {
    drawGhostEyes(x, y, w, g.face, 1);
  }
}

function drawGhostEyes(x, y, w, face, alpha, glowing) {
  const [dx, dy] = DIRS[face ?? 2];
  ctx.save();
  ctx.globalAlpha *= alpha;
  for (const side of [-1, 1]) {
    const ex = x + side * w * 0.38, ey = y - w * 0.15;
    ctx.fillStyle = glowing ? '#fecaca' : '#fff';
    if (glowing) { ctx.shadowColor = '#ef4444'; ctx.shadowBlur = w * 1.2; }
    ctx.beginPath();
    ctx.ellipse(ex, ey, w * 0.24, w * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = glowing ? '#7f1d1d' : '#1e3a8a';
    ctx.beginPath();
    ctx.arc(ex + dx * w * 0.1, ey + dy * w * 0.12, w * 0.12, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawEyesInDark(alpha) {
  const light = currentLight();
  for (const g of ghosts) {
    const d = Math.hypot(g.x - player.x, g.y - player.y);
    if (d < light * 0.75 || d > light + 4 || g.wake > 0) continue;
    const a = alpha * (1 - clamp((d - light) / 4)) * (0.7 + Math.sin(time * 3 + g.phase) * 0.3);
    drawGhostEyes(cx(g.x), cy(g.y), tile * 0.36, g.face, a, g.mode !== 'scared' && g.mode !== 'eyes');
  }
}

function drawPlayer(st) {
  const T = tile, x = cx(player.x), y = cy(player.y);
  let r = T * 0.34;
  let alpha = 1;
  if (state === 'intro' || (state === 'paused' && pausedFrom === 'intro')) r *= easeOutBack(clamp((st - 1.25) / 0.35));
  if (state === 'dying') {
    const p = clamp(stateTime / 0.9);
    r *= 1 - p * p;
    alpha = 1 - p;
  }
  if (r <= 0.1) return;
  if (player.invuln > 0 && Math.floor(time * 12) % 2) alpha *= 0.35;

  const powered = player.power > 0;
  ctx.save();
  ctx.globalAlpha = alpha;
  glow(x, y, r * 2.6, powered ? 'rgba(59,130,246,0.55)' : 'rgba(249,115,22,0.5)', 1);

  ctx.translate(x, y);
  if (player.moving && state === 'play') {
    const s = 1 + Math.sin(time * 22) * 0.07;
    const horiz = player.dir === 1 || player.dir === 3;
    ctx.scale(horiz ? s : 2 - s, horiz ? 2 - s : s);
  }
  if (state === 'dying') ctx.rotate(stateTime * 12);

  const gr = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r);
  if (powered) {
    gr.addColorStop(0, '#bfdbfe'); gr.addColorStop(0.5, '#3b82f6'); gr.addColorStop(1, '#1e3a8a');
  } else {
    gr.addColorStop(0, '#fdba74'); gr.addColorStop(0.5, '#f97316'); gr.addColorStop(1, '#9a3412');
  }
  ctx.fillStyle = gr;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  if (powered) {
    ctx.strokeStyle = 'rgba(191,219,254,0.8)';
    ctx.lineWidth = Math.max(1, T * 0.035);
    ctx.setLineDash([r * 0.4, r * 0.3]);
    ctx.lineDashOffset = -time * 30;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Eyes look where you're heading
  const [fx, fy] = DIRS[player.face];
  const px = -fy, py = fx;
  for (const side of [-1, 1]) {
    const ex = fx * r * 0.32 + px * side * r * 0.3;
    const ey = fy * r * 0.32 + py * side * r * 0.3 - r * 0.08;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(ex, ey, r * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(ex + fx * r * 0.08, ey + fy * r * 0.08, r * 0.1, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    const a = clamp(p.life / p.max);
    ctx.globalAlpha = a;
    if (p.ring) {
      ctx.strokeStyle = p.color;
      ctx.lineWidth = Math.max(1, tile * 0.08 * a);
      ctx.beginPath();
      ctx.arc(cx(p.x), cy(p.y), p.r * tile, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(cx(p.x), cy(p.y), Math.max(0.8, p.size * tile), 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

function drawFloaters() {
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const f of floaters) {
    const p = f.t / 1.1;
    const fs = Math.max(11, tile * (f.big ? 0.6 : 0.42)) * (1 + easeOutBack(clamp(f.t / 0.25)) * 0.2);
    ctx.font = `800 ${fs}px Syne, sans-serif`;
    ctx.globalAlpha = 1 - p * p;
    ctx.fillStyle = f.color;
    ctx.shadowColor = f.color;
    ctx.shadowBlur = 12;
    ctx.fillText(f.text, cx(f.x), cy(f.y) - p * tile * 1.2);
  }
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
}

// ═══════ HUD & OVERLAYS ═══════
const ICON_PAUSE = '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg>';
const ICON_PLAY = '<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M4 2.5v11a.5.5 0 0 0 .77.42l8.5-5.5a.5.5 0 0 0 0-.84l-8.5-5.5A.5.5 0 0 0 4 2.5z"/></svg>';
const ICON_SOUND = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h2.5L8 3v10L4.5 10H2z" fill="currentColor"/><path d="M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6.5 6.5 0 0 1 0 9"/></svg>';
const ICON_MUTE = '<svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h2.5L8 3v10L4.5 10H2z" fill="currentColor"/><path d="M11 6l4 4M15 6l-4 4"/></svg>';

function renderHud() {
  hudLevel.textContent = `${levelIdx + 1}/${LEVELS.length}`;
  hudKey.textContent = '✗';
  hudKey.classList.remove('has-key');
  hudTime.textContent = '0:00';
  updatePlay.lastSecs = 0;
  renderHudScore();
  renderHudLives();
}
function renderHudScore() {
  hudScore.textContent = score.toLocaleString();
}
function renderHudLives() {
  hudLives.innerHTML = Array.from({ length: START_LIVES }, (_, i) =>
    `<span class="heart${i < lives ? '' : ' lost'}">♥</span>`).join('');
}
function pop(el) {
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
}
function renderSoundButton() {
  btnSound.innerHTML = Sound.muted ? ICON_MUTE : ICON_SOUND;
  btnSound.setAttribute('aria-pressed', String(!Sound.muted));
  btnSound.title = Sound.muted ? 'Sound off (M)' : 'Sound on (M)';
}

let bannerTimer = null;
function showBanner(text, tone) {
  banner.textContent = text;
  banner.className = `show${tone ? ' ' + tone : ''}`;
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => { banner.className = tone || ''; }, 1800);
}

function showOverlay(kind, html) {
  overlay.className = `ov-${kind}`;
  overlay.innerHTML = html;
  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add('show'));
}
function hideOverlay() {
  if (overlay.hidden || !overlay.classList.contains('show')) return;
  overlay.classList.remove('show');
  setTimeout(() => { if (!overlay.classList.contains('show')) overlay.hidden = true; }, 350);
}

function showTitle() {
  L = buildLevel(0);
  resetActors();
  fit();
  renderHud();
  showOverlay('title', `
    <div class="ov-card">
      <h2 class="ov-title">Ready to escape?</h2>
      <ul class="ov-rules">
        <li><span class="rule-icon">🔑</span>Find the key hidden in the dark</li>
        <li><span class="rule-icon">🚪</span>Unlock the door blocking the way</li>
        <li><span class="rule-icon">✨</span>Reach the chest to clear the level</li>
        <li><span class="rule-icon">⚡</span>Power up to turn on the ghosts</li>
      </ul>
      <button class="btn-primary" data-action="start">Start</button>
      <p class="ov-fine">${best ? `Best ${best.toLocaleString()} · ` : ''}Press any arrow key or tap to begin</p>
    </div>`);
  setState('title');
}

overlay.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'start' || action === 'restart') startGame();
  else if (action === 'retry') retryLevel();
  else if (action === 'resume') togglePause();
});

btnSound.addEventListener('click', () => { Sound.unlock(); Sound.toggle(); renderSoundButton(); btnSound.blur(); });
btnPause.addEventListener('click', () => { togglePause(); btnPause.blur(); });

// ═══════ INPUT ═══════
const KEYMAP = {
  ArrowUp: 0, KeyW: 0, ArrowRight: 1, KeyD: 1, ArrowDown: 2, KeyS: 2, ArrowLeft: 3, KeyA: 3,
};
const held = [];

function setWant(d, isHeld) {
  if (!player) return;
  player.want = d;
  player.wantHeld = isHeld;
  player.wantTTL = isHeld ? 0 : 0.6;
  player.bumped = false;
}
function releaseWant(ttl) {
  if (!player) return;
  player.wantHeld = false;
  player.wantTTL = ttl;
}

document.addEventListener('keydown', e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const d = KEYMAP[e.code];
  if ((d != null || e.code === 'Space') && state !== 'victory') e.preventDefault();
  Sound.unlock();

  if (e.code === 'KeyM') { Sound.toggle(); renderSoundButton(); return; }
  if (e.code === 'KeyP' || e.code === 'Escape') { togglePause(); return; }

  if (state === 'title' && (d != null || e.code === 'Enter' || e.code === 'Space')) {
    startGame();
    if (d != null) setWant(d, false);
    return;
  }
  if (state === 'paused' && (e.code === 'Enter' || e.code === 'Space')) { togglePause(); return; }
  if (state === 'gameover' && (e.code === 'Enter' || e.code === 'Space')) { retryLevel(); return; }

  if (d == null || e.repeat) return;
  const i = held.indexOf(d);
  if (i >= 0) held.splice(i, 1);
  held.push(d);
  setWant(d, true);
});

document.addEventListener('keyup', e => {
  const d = KEYMAP[e.code];
  if (d == null) return;
  const i = held.indexOf(d);
  if (i >= 0) held.splice(i, 1);
  if (held.length) setWant(held[held.length - 1], true);
  else if (player && player.want === d) releaseWant(0.25);
});

// Swipe anywhere on the stage (one drag can chain several turns)
let swipe = null;
stage.addEventListener('pointerdown', e => {
  if (e.pointerType === 'mouse') return;
  swipe = { x: e.clientX, y: e.clientY };
});
stage.addEventListener('pointermove', e => {
  if (!swipe) return;
  const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
  if (Math.hypot(dx, dy) < 22) return;
  const d = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0);
  Sound.unlock();
  if (state === 'title') startGame();
  setWant(d, false);
  swipe = { x: e.clientX, y: e.clientY };
});
['pointerup', 'pointercancel', 'pointerleave'].forEach(t => stage.addEventListener(t, () => { swipe = null; }));
stage.addEventListener('click', e => {
  if (state === 'title' && !e.target.closest('[data-action]')) { Sound.unlock(); startGame(); }
});

// D-pad
document.querySelectorAll('.touch-btn').forEach(btn => {
  const d = { up: 0, right: 1, down: 2, left: 3 }[btn.dataset.dir];
  btn.addEventListener('pointerdown', e => {
    e.preventDefault();
    Sound.unlock();
    if (state === 'title') startGame();
    setWant(d, true);
    btn.classList.add('active');
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => btn.addEventListener(t, () => {
    btn.classList.remove('active');
    if (player && player.want === d) releaseWant(0.3);
  }));
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && ['play', 'intro', 'respawn'].includes(state)) togglePause();
});

let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(fit, 120);
});

// ═══════ LOOP ═══════
let last = performance.now();
function frame(now) {
  let dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (hitStop > 0) { hitStop -= dt; dt = 0; }
  if (state === 'paused') dt = 0;
  update(dt);
  render();
  requestAnimationFrame(frame);
}

// ═══════ GO ═══════
renderSoundButton();
btnPause.innerHTML = ICON_PAUSE;
showTitle();
requestAnimationFrame(frame);

})();
