// Renders the share images (Open Graph / Twitter, 1200x630) with headless Chrome.
//   src/og/og-image.html -> img/og/og-robert-riopel.jpg (homepage, About) and img/og-image.jpg
//   src/og/og-page.html?id=<card> -> img/og/og-<card>.jpg (every other page)
// Needs the repo root served on http://localhost:8123 (python3 -m http.server 8123) so fonts load.
// Run: node scripts/build-og.mjs [card ...]
import { execFileSync } from "node:child_process";
import { copyFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.OG_BASE || "http://localhost:8123";
const CARDS = ["work", "pay-in-full", "host-dashboard", "host-onboarding", "lifecycle-campaigns", "ai-figma-plugin",
  "roadside-portal", "datenight", "writing", "how-i-built-the-forest"];

const only = process.argv.slice(2);
const tmp = mkdtempSync(join(tmpdir(), "og-"));
const shoot = (url, out) => {
  const png = join(tmp, "shot.png");
  execFileSync(CHROME, ["--headless=new", "--hide-scrollbars", "--force-device-scale-factor=1", "--window-size=1200,630",
    "--virtual-time-budget=5000", `--screenshot=${png}`, url], { stdio: "ignore" });
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "86", png, "--out", out], { stdio: "ignore" });
  console.log("og:", out);
};

if (!only.length || only.includes("home")) {
  shoot(`${BASE}/src/og/og-image.html`, "img/og/og-robert-riopel.jpg");
  copyFileSync("img/og/og-robert-riopel.jpg", "img/og-image.jpg");
}
for (const id of CARDS) if (!only.length || only.includes(id)) shoot(`${BASE}/src/og/og-page.html?id=${id}`, `img/og/og-${id}.jpg`);
rmSync(tmp, { recursive: true, force: true });
