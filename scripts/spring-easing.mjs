// Prints CSS linear() easings sampled from Motion's spring physics, so plain CSS transitions
// can move like springs without any JavaScript at runtime. Paste the output into src/input.css.
import { spring } from "motion";

function toLinear(options) {
  const gen = spring({ keyframes: [0, 1], ...options });
  const points = [];
  let t = 0;
  let done = false;
  while (!done && t < 4000) {
    const state = gen.next(t);
    points.push(state.value);
    done = state.done;
    t += 16;
  }
  const duration = Math.round(t);
  const step = Math.max(1, Math.ceil(points.length / 40)); // ~40 stops is visually exact
  const stops = points.filter((_, i) => i % step === 0 || i === points.length - 1).map(v => +v.toFixed(4));
  return { duration, value: `linear(${stops.join(", ")})` };
}

for (const [name, opts] of Object.entries({
  "soft":   { stiffness: 120, damping: 24, mass: 1 },   // reveals: no overshoot, long settle
  "snappy": { stiffness: 380, damping: 32, mass: 1 },   // hovers, small UI responses
})) {
  const { duration, value } = toLinear(opts);
  console.log(`  --spring-${name}: ${value}; /* ~${duration}ms */`);
}
