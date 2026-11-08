// Builds the three homepages (English, German, French) from one template.
//   head:  src/home/head.<lang>.html  (title, meta, hreflang, structured data; edit these for SEO)
//   body:  src/home/body.html         (the forest walk; {{key}} placeholders)
//   words: src/home/strings.mjs
// Run with `npm run build:home` (also part of `npm run build`).
import { readFileSync, writeFileSync } from "node:fs";
import { pages } from "../src/home/strings.mjs";

const body = readFileSync("src/home/body.html", "utf8");

for (const [lang, words] of Object.entries(pages)) {
  const head = readFileSync(`src/home/head.${lang}.html`, "utf8");
  const html = (head.trimEnd() + "\n" + body).replace(/\{\{(\w+)\}\}/g, (m, key) => {
    if (!(key in words)) throw new Error(`build-home: "${key}" is missing for ${lang}`);
    return words[key];
  });
  if (/[—]|&mdash;/.test(html)) throw new Error(`build-home: an em dash slipped into ${words.out}`);
  writeFileSync(words.out, html);
  console.log(`build-home: wrote ${words.out}`);
}
