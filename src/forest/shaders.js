// shaders.js: how the forest is lit.
// All colours are display (sRGB) values; the renderer writes them straight to the screen.

export const MAX_LIGHTS = 8;

// The path's winding line. Mirrored in world.js (pathX); keep them identical.
const common = /* glsl */ `
  float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return v;
  }
  float pathX(float z) { return 2.2 * sin(z * 0.045) + 1.2 * sin(z * 0.11 + 1.3); }
`;

const lightUniforms = /* glsl */ `
  uniform vec4 uLights[${MAX_LIGHTS}];
  uniform vec3 uWarm;
  uniform vec3 uGlow;
  uniform vec3 uFog;
  uniform vec3 uFogLow;
  uniform float uFogDensity;
  uniform float uTime;
  uniform float uNight;     // 0 = late afternoon, 1 = deep night
  uniform vec3 uLightDir;   // where edge light comes from (low sun by day, moon by night)
`;

// Fog: exponential-squared with depth, plus mist that settles near the ground
const fogFn = /* glsl */ `
  vec3 applyFog(vec3 col, float depth, float y, float keep) {
    float fd = depth * uFogDensity;
    float fog = 1.0 - exp(-fd * fd);
    float low = (1.0 - smoothstep(0.0, 3.5, y)) * smoothstep(3.0, 28.0, depth);
    fog = clamp(fog + low * mix(0.1, 0.3, uNight), 0.0, 1.0);
    return mix(col, mix(uFog, uFogLow, low), fog * (1.0 - keep));
  }
  float warmAt(vec3 p, float falloff) {
    float acc = 0.0;
    for (int i = 0; i < ${MAX_LIGHTS}; i++) {
      vec3 d = uLights[i].xyz - p;
      acc += uLights[i].w / (1.0 + dot(d, d) * falloff);
    }
    return acc;
  }
`;

// ── Cutouts: every painted silhouette ─────────────────────────────────────────
export const cutoutVert = /* glsl */ `
  attribute vec4 aP1; // shade, seed, sway, emissive (warm)
  attribute vec4 aP2; // opacity, flip, glow, rim
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec4 vP1;
  varying vec4 vP2;
  void main() {
    vUv = uv; vP1 = aP1; vP2 = aP2;
    vec3 pos = position;
    float s = aP1.z * uv.y * uv.y;
    pos.x += s * (sin(uTime * 0.55 + aP1.y * 17.0) * 0.012 + sin(uTime * 1.31 + aP1.y * 7.0) * 0.004);
    vec4 wp = modelMatrix * instanceMatrix * vec4(pos, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

export const cutoutFrag = /* glsl */ `
  uniform sampler2D map;
  uniform float uRimPx;
  uniform vec3 uBase;
  uniform vec3 uMoon;
  ${lightUniforms}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying vec4 vP1;
  varying vec4 vP2;
  ${common}
  ${fogFn}
  void main() {
    vec4 t = texture2D(map, vUv);
    float a = t.a * vP2.x;
    if (a < 0.03) discard;
    vec2 texel = 1.0 / vec2(textureSize(map, 0));
    float flip = vP2.y;

    // Moonlight: an edge is lit where the silhouette ends toward the moon (upper right)
    vec2 mo = vec2(uLightDir.x * flip, uLightDir.y) * uRimPx * texel;
    float day = 1.0 - uNight;
    float rim = t.a * (1.0 - texture2D(map, vUv + mo).a);
    float rimWide = t.a * (1.0 - texture2D(map, vUv + mo * 3.0).a);

    // Painterly body: dark, mottled, never flat
    float n = fbm(vWorld.xy * vec2(1.3, 0.7) + vP1.y * 13.0);
    float grain = vnoise(vWorld.xy * 11.0 + vP1.y * 5.0);
    vec3 col = uBase * vP1.x * (0.7 + 0.6 * n);
    col *= 1.0 - t.b * 0.6;
    col += uMoon * mix(0.09, 0.035, uNight) * smoothstep(2.0, 22.0, vWorld.y);

    // Cel-banded moon rim, cold teal-white
    // Moonlight falls on the canopy; trunks below stay in shadow
    float high = 0.25 + 0.75 * smoothstep(1.5, 14.0, vWorld.y);
    float band = step(0.5, rim) * 0.42 + step(0.5, rimWide) * 0.05;
    col += uMoon * band * high * vP2.w * (0.45 + 0.7 * grain);
    // By day, whole faces that turn toward the low sun catch warm light (gives each leaf mass volume)
    float broad = t.a * (1.0 - texture2D(map, vUv + mo * 7.0).a);
    float broad2 = t.a * (1.0 - texture2D(map, vUv + mo * 16.0).a);
    col += uMoon * (broad * 0.16 + broad2 * 0.08) * day * vP2.w * (0.6 + 0.6 * grain) * (1.0 - t.b * 0.7);

    // Highlight: a grove tree whose sign is hovered lights its whole outline in jungle green
    float hl = max(0.0, vP2.z - 2.4);
    col += uGlow * hl * (step(0.5, rim) * 0.32 + step(0.5, rimWide) * 0.16 + 0.025);

    // Lantern light, with a warm rim on the side that faces the flame
    vec2 wdir = vec2(0.0);
    float wsum = 0.0;
    for (int i = 0; i < ${MAX_LIGHTS}; i++) {
      vec3 d = uLights[i].xyz - vWorld;
      float k = uLights[i].w / (1.0 + dot(d, d) * 0.22);
      wsum += k;
      wdir += normalize(d.xy + vec2(1e-4)) * k;
    }
    if (wsum > 0.02) {
      vec2 wd = normalize(wdir + vec2(1e-4));
      float aw = texture2D(map, vUv + vec2(wd.x * flip, wd.y) * uRimPx * 1.4 * texel).a;
      float wrim = t.a * (1.0 - aw);
      col += uWarm * (min(wsum, 2.5) * 0.05 + step(0.5, wrim) * min(wsum, 1.6) * 0.55 * (0.35 + 0.65 * vP2.w));
    }

    // Emissive warm (lantern paper, windows, embers)
    float emit = clamp(t.r * vP1.w, 0.0, 1.0);
    vec3 paper = uWarm * (1.05 + 0.25 * grain);
    col = mix(col, paper, emit);

    // Bioluminescence (jungle)
    float pulse = 0.72 + 0.28 * sin(uTime * 1.6 + vWorld.x * 1.3 + vWorld.y * 0.9);
    // Spirit light is faint by day and wakes as night falls
    float gl = t.g * vP2.z * pulse * (0.28 + 0.72 * smoothstep(0.15, 0.6, uNight));
    col += uGlow * gl * 1.15;

    col = applyFog(col, vDepth, vWorld.y, clamp(max(gl * 0.8, emit * 0.85), 0.0, 1.0));
    gl_FragColor = vec4(col, a);
  }
`;

// ── Sky: gradient, stars, a low moon, drifting cloud, and three ridges of forest ──
export const skyVert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.9999, 1.0); }
`;

export const skyFrag = /* glsl */ `
  uniform vec2 uRes;
  uniform float uYaw;
  uniform float uPitch;
  uniform float uDrift;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uHalo;
  uniform vec3 uRidge0;
  uniform vec3 uRidge1;
  uniform vec3 uRidge2;
  uniform float uSunH;
  uniform float uSunA;
  uniform float uMoonA;
  uniform vec3 uSun;
  ${lightUniforms}
  varying vec2 vUv;
  ${common}
  float ridge(float x, float freq, float amp, float seed, float treeF, float treeA) {
    float h = fbm(vec2(x * freq + seed, seed)) * amp;
    float tx = x * treeF + seed * 3.0;
    float cell = floor(tx);
    float tri = 1.0 - abs(fract(tx) - 0.5) * 2.0;
    h += pow(tri, 1.6) * treeA * (0.4 + 0.6 * hash(vec2(cell, seed)));
    return h;
  }
  void main() {
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.5);
    float horizon = -0.04 - uPitch * 1.1;
    float h = p.y - horizon;
    vec3 col = mix(uHorizon, uTop, smoothstep(-0.02, 0.62, h));

    // Stars, sparse and faint
    vec2 sp = p + vec2(uYaw * 0.9, 0.0);
    vec2 g = sp * 70.0;
    float s = hash(floor(g));
    float tw = 0.6 + 0.4 * sin(uTime * (1.0 + s * 3.0) + s * 40.0);
    float star = step(0.992, s) * smoothstep(0.22, 0.0, length(fract(g) - 0.5)) * tw;
    col += vec3(0.78, 0.9, 0.86) * star * smoothstep(0.08, 0.45, h) * 0.7 * smoothstep(0.5, 0.9, uNight);

    // The sun: low on the right, sinking behind the ridges as you walk
    vec2 sc = vec2(0.36 - uYaw * 0.9, horizon + uSunH);
    float sd = length(p - sc);
    col += uHalo * (exp(-sd * 2.4) * 0.42 + exp(-sd * 8.0) * 0.45) * uSunA;
    col = mix(col, vec3(1.0, 0.95, 0.84), smoothstep(0.05, 0.047, sd) * uSunA);

    // The moon, low and large, a little peach in its halo
    vec2 mc = vec2(0.13 - uYaw * 0.9, 0.29 + horizon * 0.4);
    float md = length(p - mc);
    float R = 0.072;
    col += uHalo * (exp(-md * 5.0) * 0.22 + exp(-md * 16.0) * 0.32) * uMoonA;
    float mot = fbm((p - mc) * 26.0 + 3.0);
    vec3 moon = mix(vec3(0.95, 0.92, 0.85), vec3(0.8, 0.79, 0.74), smoothstep(0.35, 0.75, mot));
    col = mix(col, moon, smoothstep(R, R - 0.0025, md) * uMoonA);

    // Cloud drifting across the moon, edges lit where they pass it
    vec2 cp = vec2(p.x * 1.2 + uTime * 0.006 + uYaw * 0.8 + uDrift, p.y * 3.6);
    float c = fbm(cp * 2.2 + vec2(0.0, 2.0));
    c = smoothstep(0.52, 0.78, c) * smoothstep(0.05, 0.22, h) * (1.0 - smoothstep(0.4, 0.62, h));
    vec3 cloudBase = mix(mix(uHorizon, uTop, 0.35) * 1.08, uTop * 1.6 + 0.01, uNight);
    vec3 cloud = mix(cloudBase, uHalo * mix(0.95, 0.55, uNight), max(exp(-md * 4.0) * uMoonA, exp(-sd * 3.0) * uSunA));
    col = mix(col, cloud, c * 0.8);

    // Three ridges of distant forest, far to near
    float x = p.x + uYaw * 0.9;
    float r0 = horizon + 0.02 + ridge(x + uDrift * 0.1, 1.3, 0.11, 1.0, 34.0, 0.022);
    col = mix(col, uRidge0, smoothstep(0.002, -0.002, p.y - r0));
    col = mix(col, uFog * 1.3, smoothstep(0.08, 0.0, p.y - horizon) * 0.35 * step(p.y, r0 + 0.002));
    float r1 = horizon - 0.02 + ridge(x * 1.1 + uDrift * 0.25, 1.8, 0.1, 7.0, 26.0, 0.03);
    col = mix(col, uRidge1, smoothstep(0.002, -0.002, p.y - r1));
    float r2 = horizon - 0.06 + ridge(x * 1.25 + uDrift * 0.5, 2.4, 0.09, 13.0, 19.0, 0.04);
    col = mix(col, uRidge2, smoothstep(0.002, -0.002, p.y - r2));

    // Mist pooling along the horizon
    float mist = exp(-abs(p.y - horizon + 0.02) * 22.0) * (0.55 + 0.45 * fbm(vec2(p.x * 3.0 + uTime * 0.01, 1.0)));
    col = mix(col, uFogLow, mist * 0.55);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// ── Ground: dark earth, a worn path, moss that glows, pools of lantern light ──
export const groundVert = /* glsl */ `
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

export const groundFrag = /* glsl */ `
  uniform vec3 uGround;
  uniform vec3 uPath;
  uniform vec3 uMoon;
  ${lightUniforms}
  varying vec3 vWorld;
  varying float vDepth;
  ${common}
  ${fogFn}
  void main() {
    vec2 q = vWorld.xz;
    float dx = abs(vWorld.x - pathX(vWorld.z));
    float edge = fbm(q * 0.7) * 0.9 + vnoise(q * 3.0) * 0.25;
    float path = 1.0 - smoothstep(0.75, 1.35, dx + edge * 0.55 - 0.25);
    vec3 col = uGround * (0.65 + 0.7 * fbm(q * 0.3));
    vec3 pc = uPath * (0.7 + 0.5 * fbm(q * 2.2)) * (0.85 + 0.3 * vnoise(q * 9.0));
    col = mix(col, pc, path);
    // Bioluminescent moss in patches beside the path
    float moss = smoothstep(0.72, 0.8, fbm(q * 1.4 + 3.0)) * (1.0 - path) * smoothstep(7.0, 1.6, dx);
    float speck = step(0.93, vnoise(q * 14.0)) * moss;
    col += uGlow * (moss * 0.12 + speck * 0.5) * (0.75 + 0.25 * sin(uTime * 1.2 + q.x * 2.0)) * (0.2 + 0.8 * smoothstep(0.15, 0.6, uNight));
    // Dappled late sun through the canopy
    float dapple = smoothstep(0.56, 0.72, fbm(q * 0.42 + vec2(uTime * 0.008, 3.0))) * smoothstep(0.5, 0.75, vnoise(q * 1.7));
    col += uMoon * dapple * (1.0 - uNight) * (0.1 + path * 0.06);
    // Lantern light pooling on the ground
    float w = warmAt(vWorld + vec3(0.0, 0.6, 0.0), 0.3);
    col += uWarm * w * (0.07 + path * 0.1);
    col = applyFog(col, vDepth, 0.0, speck * 0.7);
    gl_FragColor = vec4(col, 1.0);
  }
`;

// ── Mist banks: soft noise planes drifting between the trees ──
export const mistVert = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vec4 mv = viewMatrix * wp;
    vDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;

export const mistFrag = /* glsl */ `
  uniform float uOpacity;
  uniform float uSeed;
  ${lightUniforms}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  ${common}
  ${fogFn}
  void main() {
    vec2 q = vec2(vWorld.x * 0.09 + uTime * 0.018 * (0.6 + uSeed), vUv.y * 1.4 + uSeed * 7.0);
    float n = fbm(q * vec2(1.0, 1.7) + fbm(q * 1.6 - uTime * 0.012) * 0.8);
    float shape = smoothstep(0.38, 0.78, n);
    shape *= smoothstep(0.0, 0.22, vUv.y) * (1.0 - smoothstep(0.3, 1.0, vUv.y));
    shape *= smoothstep(0.0, 0.18, vUv.x) * (1.0 - smoothstep(0.82, 1.0, vUv.x));
    float near = smoothstep(1.2, 8.0, vDepth);
    float far = 1.0 - smoothstep(55.0, 80.0, vDepth);
    float w = warmAt(vWorld, 0.22);
    vec3 col = mix(uFogLow * 1.35, uWarm * 0.8, clamp(w * 0.35, 0.0, 0.55));
    gl_FragColor = vec4(col, shape * uOpacity * near * far * mix(0.35, 1.0, uNight));
  }
`;

// ── Fireflies: points that wander near the walker and blink ──
export const fireflyVert = /* glsl */ `
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uCamZ;
  uniform float uScale;
  uniform float uNight;
  varying float vA;
  ${common}
  void main() {
    vec3 b = position;
    float z = uCamZ + 3.0 - mod(uCamZ + 3.0 - b.z, 46.0);
    float t = uTime * (0.25 + aSeed.x * 0.35);
    vec3 p = vec3(
      pathX(z) + b.x + sin(t + aSeed.y * 6.283) * 0.7,
      b.y + sin(t * 1.3 + aSeed.z * 6.283) * 0.4,
      z + cos(t * 0.7 + aSeed.w * 6.283) * 0.6);
    vec4 mv = viewMatrix * vec4(p, 1.0);
    float depth = -mv.z;
    float blink = pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed.y * 1.4) + aSeed.x * 40.0), 4.0);
    float dust = 0.3 + 0.25 * sin(uTime * 1.7 + aSeed.y * 30.0);
    vA = mix(dust, blink, smoothstep(0.2, 0.55, uNight)) * smoothstep(0.6, 3.0, depth) * (1.0 - smoothstep(28.0, 42.0, depth));
    gl_PointSize = clamp((0.09 + aSeed.z * 0.07) * mix(0.55, 1.0, uNight) * uScale / max(depth, 0.5), 1.2, 48.0);
    gl_Position = projectionMatrix * mv;
  }
`;

export const fireflyFrag = /* glsl */ `
  uniform vec3 uGlow;
  uniform float uNight;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float core = smoothstep(0.14, 0.0, d);
    float halo = smoothstep(0.5, 0.0, d) * 0.45;
    vec3 fly = uGlow * halo + vec3(0.72, 1.0, 0.86) * core;
    vec3 mote = vec3(1.0, 0.88, 0.7) * (halo * 0.6 + core * 0.8); // sunlit dust and pollen by day
    gl_FragColor = vec4(mix(mote, fly, smoothstep(0.2, 0.55, uNight)), vA);
  }
`;

// ── Sun shafts: slanting beams of late light ──
export const shaftFrag = /* glsl */ `
  uniform float uSeed;
  uniform float uShaft;
  uniform vec3 uSun;
  ${lightUniforms}
  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  ${common}
  void main() {
    if (uShaft < 0.01) discard;
    // Beams fall from the upper right toward the lower left, from the low sun
    float s = vUv.x + (1.0 - vUv.y) * 0.42;
    float b = fbm(vec2(s * 5.0 + uSeed * 13.0, uTime * 0.035 + uSeed * 5.0));
    float beams = smoothstep(0.5, 0.78, b);
    float fade = smoothstep(0.0, 0.25, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y))
      * smoothstep(0.0, 0.2, vUv.x) * (1.0 - smoothstep(0.8, 1.0, vUv.x));
    float near = smoothstep(2.0, 9.0, vDepth) * (1.0 - smoothstep(40.0, 70.0, vDepth));
    float shimmer = 0.85 + 0.15 * sin(uTime * 0.7 + uSeed * 20.0);
    gl_FragColor = vec4(uSun * beams * fade * near * shimmer * uShaft * 0.26, 1.0);
  }
`;

// ── Watchers: pairs of eyes in the far canopy that open one by one ──
export const watcherVert = /* glsl */ `
  attribute vec4 aSeed;
  uniform float uTime;
  uniform float uReveal;
  uniform float uScale;
  varying float vA;
  void main() {
    vec4 mv = viewMatrix * modelMatrix * vec4(position, 1.0);
    float depth = -mv.z;
    float on = smoothstep(aSeed.x, aSeed.x + 0.06, uReveal);
    // Each pair blinks now and then, together
    float bl = step(0.985, fract(sin(floor(uTime * 0.7 + aSeed.y * 13.0) * 91.3 + aSeed.z * 17.0) * 43758.5));
    vA = on * (1.0 - bl) * (0.55 + 0.45 * aSeed.w);
    gl_PointSize = clamp(0.32 * uScale / max(depth, 1.0), 1.2, 6.0);
    gl_Position = projectionMatrix * mv;
  }
`;

export const watcherFrag = /* glsl */ `
  uniform vec3 uGlow;
  varying float vA;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    gl_FragColor = vec4(mix(uGlow, vec3(0.75, 1.0, 0.85), 0.35), smoothstep(0.5, 0.15, d) * vA);
  }
`;

// ── Eyes in the dark: almond shapes with slit pupils that blink and close ──
export const eyesVert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

export const eyesFrag = /* glsl */ `
  uniform float uOpen;
  uniform float uAlpha;
  uniform vec3 uGlow;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= 3.0;
    float acc = 0.0;
    for (int i = 0; i < 2; i++) {
      vec2 q = p - vec2(i == 0 ? -1.15 : 1.15, 0.0);
      float w = 0.78;
      float hh = max(uOpen, 0.0) * 0.5 * (1.0 - pow(clamp(abs(q.x) / w, 0.0, 1.0), 1.8));
      float inside = smoothstep(0.04, -0.03, abs(q.y) - hh) * step(abs(q.x), w);
      float slit = smoothstep(0.1, 0.03, abs(q.x));
      float halo = exp(-dot(q, q) * 1.6) * 0.3 * uOpen;
      acc += inside * (1.0 - 0.9 * slit) + halo;
    }
    gl_FragColor = vec4(uGlow * 1.25 * acc, 1.0) * uAlpha;
  }
`;

// ── Campfire flame ──
export const flameVert = eyesVert;
export const flameFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uWarm;
  uniform vec3 uEmber;
  varying vec2 vUv;
  ${common}
  void main() {
    vec2 p = vUv;
    // Three tongues of flame, each licking up at its own pace
    float f = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float cx = 0.5 + (fi - 1.0) * 0.13;
      float hgt = 0.82 - abs(fi - 1.0) * 0.26 + 0.1 * sin(uTime * (2.1 + fi * 0.9) + fi * 4.0);
      float y = p.y / hgt;
      float n = fbm(vec2(p.x * 4.0 + fi * 7.0, p.y * 3.2 - uTime * (2.0 + fi * 0.4)));
      float w = (1.0 - y) * 0.17 * (0.65 + 0.7 * n);
      float dx = p.x - cx + (n - 0.5) * 0.26 * y;
      f = max(f, smoothstep(w, w * 0.25, abs(dx)) * step(y, 1.0) * (1.0 - y * 0.85));
    }
    float outer = smoothstep(0.05, 0.3, f);
    float core = smoothstep(0.4, 0.8, f);
    vec3 col = mix(uEmber * 1.15, uWarm * 1.15, core) + vec3(0.1, 0.07, 0.02) * smoothstep(0.75, 0.95, f);
    gl_FragColor = vec4(col, outer * 0.95);
  }
`;

// ── Soft glow halos (lanterns, windows, the fire, the sapling) ──
export const haloVert = eyesVert;
export const haloFrag = /* glsl */ `
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  void main() {
    float d = length(vUv - 0.5) * 2.0;
    float g = exp(-d * d * 5.0) * 0.55 + exp(-d * 14.0) * 0.6;
    gl_FragColor = vec4(uColor, g * uIntensity * smoothstep(1.0, 0.75, d));
  }
`;
