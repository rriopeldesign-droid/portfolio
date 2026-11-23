// Builds the three homepages (English, German, French) from one template.
//   head:  src/home/head.<lang>.html  (title, meta, hreflang, structured data; edit these for SEO)
//   body:  src/home/body.html         (the forest walk; {{key}} placeholders)
//   words: src/home/strings.mjs
// Run with `npm run build:home` (also part of `npm run build`), after build:forest: the pages carry
// a version stamp of the forest bundle, so run this again whenever js/forest.js changes.
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { pages } from "../src/home/strings.mjs";

const body = readFileSync("src/home/body.html", "utf8");

// Version stamps: a page always loads the forest script and styles it was built with. Without them a
// browser can pair a fresh page with an older cached forest.js (Pages caches files for 10 minutes),
// and the walk then heads for the wrong stops.
const stamp = (...files) => {
  const h = createHash("sha256");
  for (const f of files) h.update(readFileSync(f));
  return h.digest("hex").slice(0, 10);
};
const shared = {
  forestV: stamp("js/forest.js", "js/forest-paint.js"),
  forestCssV: stamp("css/forest.css"),
};

for (const [lang, words] of Object.entries(pages)) {
  const head = readFileSync(`src/home/head.${lang}.html`, "utf8");
  const html = (head.trimEnd() + "\n" + body).replace(/\{\{(\w+)\}\}/g, (m, key) => {
    if (key in shared) return shared[key];
    if (!(key in words)) throw new Error(`build-home: "${key}" is missing for ${lang}`);
    return words[key];
  });
  if (/[—]|&mdash;/.test(html)) throw new Error(`build-home: an em dash slipped into ${words.out}`);
  writeFileSync(words.out, html);
  console.log(`build-home: wrote ${words.out}`);
}
