# Robert Riopel, Senior Product Designer

The source of **[robertriopel.ca](https://robertriopel.ca)**, the portfolio of Robert Riopel, a Senior Product Designer based in Ottawa and Vienna. Product UX, design systems, B2B and marketplace products, onboarding, lifecycle email and AI tooling, with $8M+ in measurable impact.

- Portfolio: [robertriopel.ca](https://robertriopel.ca)
- Case studies: [robertriopel.ca/work.html](https://robertriopel.ca/work.html)
- About: [robertriopel.ca/about.html](https://robertriopel.ca/about.html)
- Essay: [The End of Figma](https://robertriopel.ca/death-of-figma/)
- LinkedIn: [robert-riopel-product-design](https://www.linkedin.com/in/robert-riopel-product-design/)

## How the site is built

Static HTML on GitHub Pages, no framework. A push to `main` deploys it.

- The homepage is a walk through a 3D forest, written with [three.js](https://threejs.org). The engine is in `src/forest/` and is bundled to `js/forest.js`.
- `index.html`, `de/index.html` and `fr/index.html` are generated from `src/home/` (template, head per language, and the words in `src/home/strings.mjs`). Edit those, not the generated pages.
- Styles: Tailwind CSS from `src/input.css` to `css/style.css`, plus the hand-written `css/forest.css`.
- `llms.txt` and `llms-full.txt` describe the site for AI assistants.
- The share image template is `src/og/og-image.html`.

```bash
npm install
npm run build
```

The deploy workflow stamps sitemap and structured-data dates from git history, then notifies search engines through IndexNow.
