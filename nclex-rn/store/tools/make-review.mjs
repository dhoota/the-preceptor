// Paywall screenshot for App Store in-app purchase review, 1320 x 2868.
//
// Usage (from nclex-rn/), against a seeded static build as in LAUNCH.md:
//   VITE_SEED=1 npx vite build --outDir /tmp/seeded
//   npx vite preview --outDir /tmp/seeded --port 5174
//   npx -y -p playwright@1 node store/tools/make-review.mjs http://localhost:5174
//
// It shows the real paywall of a user with no purchase: both subscription
// plans with their prices and periods, the renewal terms, Restore purchases,
// and the Terms of use and Privacy policy links. Output:
// store/screenshots/review/paywall.png

import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    for (const bin of (process.env.PATH ?? "").split(":")) {
      const pkg = join(bin, "..", "playwright");
      if (bin.endsWith(join("node_modules", ".bin")) && existsSync(join(pkg, "package.json")))
        return await import(pathToFileURL(join(pkg, "index.mjs")).href);
    }
    throw new Error("Cannot find playwright. Run with: npx -y -p playwright@1 node store/tools/make-review.mjs");
  }
}
const { chromium } = await loadPlaywright();

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const base = (process.argv[2] ?? "http://localhost:5174").replace(/\/$/, "");
const fallback = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const executablePath = process.env.CHROMIUM_PATH ?? (existsSync(fallback) ? fallback : undefined);

const W = 1320, H = 2868, DPR = 3;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const ctx = await browser.newContext({ viewport: { width: W / DPR, height: H / DPR }, deviceScaleFactor: DPR, colorScheme: "light" });
const page = await ctx.newPage();
await page.goto(`${base}/?seed=1`);
await page.waitForTimeout(800);
const accept = page.getByRole("button", { name: "I understand" });
if (await accept.count()) await accept.click();
await page.locator(".top button.btn").first().click();
await page.getByText("Restore purchases").waitFor();
// Fit the whole paywall on one screen so every required disclosure shows.
const fit = await page.evaluate((h) => {
  const needed = document.documentElement.scrollHeight;
  const z = Math.min(1, h / needed);
  document.documentElement.style.zoom = String(z);
  window.scrollTo(0, 0);
  return { needed, zoom: z };
}, H / DPR);
await page.waitForTimeout(300);
const out = join(root, "store", "screenshots", "review");
mkdirSync(out, { recursive: true });
await page.screenshot({ path: join(out, "paywall.png"), type: "png" });
console.log(`wrote paywall.png, content ${fit.needed} CSS px, zoom ${fit.zoom.toFixed(2)}`);
await browser.close();
