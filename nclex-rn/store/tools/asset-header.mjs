// App Store creative asset (Asset Library): one 16:9 image, 5244 x 2950, no
// alpha, for both the product page header and the search results.
//
// Usage (from nclex-rn/), against a seeded static build as in LAUNCH.md:
//   VITE_SEED=1 npx vite build --outDir /tmp/seeded
//   npx vite preview --outDir /tmp/seeded --port 5174
//   npx -y -p playwright@1 node store/tools/asset-header.mjs http://localhost:5174
//
// Apple crops the master for its other two shapes:
//   21:9 (header only) keeps the middle 76.2% of the height: y 351..2599
//   3:2 (search only) keeps the middle 84.4% of the width: x 410..4834
// Everything that carries meaning sits inside that intersection with a further
// margin of about 110 px. The script writes both crops beside the master so the
// result is checked by eye, not asserted.
//
// The phones are the real app at deviceScaleFactor 4. The type is the app's own
// bundled faces (Archivo, Atkinson Hyperlegible Next), loaded from the same
// @fontsource files the build ships. The words are the store listing's own
// lines, which already ship. No counts and no claims the build cannot back.
//
// Screens chosen for a store page that also shows in search: the tube rack
// (home), a case study with its chart, and Progress. No answer screen, because
// those list publishers' names in the Sources block, and other people's brands
// do not belong in our marketing.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync, rmSync } from "node:fs";
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
    for (const g of ["/opt/node22/lib/node_modules/playwright", "/usr/local/lib/node_modules/playwright"])
      if (existsSync(join(g, "package.json"))) return await import(pathToFileURL(join(g, "index.mjs")).href);
    throw new Error("Cannot find playwright. Run with: npx -y -p playwright@1 node store/tools/asset-header.mjs");
  }
}
const { chromium } = await loadPlaywright();

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const base = (process.argv[2] ?? "http://localhost:5174").replace(/\/$/, "");
const OUT = join(root, "store", "asset-library");
const W = 2622, H = 1475, SCALE = 2; // renders 5244 x 2950
mkdirSync(OUT, { recursive: true });

async function launch() {
  if (process.env.CHROMIUM_PATH) return chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
  try {
    return await chromium.launch();
  } catch (e) {
    const dir = process.env.PLAYWRIGHT_BROWSERS_PATH;
    const found = dir && existsSync(dir)
      ? readdirSync(dir).filter((d) => d.startsWith("chromium-")).sort().reverse()
          .map((d) => join(dir, d, "chrome-linux", "chrome")).find((p) => existsSync(p))
      : undefined;
    if (!found) throw e;
    return chromium.launch({ executablePath: found });
  }
}
const browser = await launch();
const FREEZE = "*,*::before,*::after{animation:none!important;transition:none!important}";

// ---- the phones, from the real app ---------------------------------------
const ctx = await browser.newContext({ viewport: { width: 402, height: 874 }, deviceScaleFactor: 4, colorScheme: "light" });
const page = await ctx.newPage();
page.on("dialog", (d) => d.accept());
await page.goto(`${base}/?seed=1`);
await page.waitForTimeout(900);
const accept = page.locator(".modal .btn");
if (await accept.count()) await accept.first().click();
await page.addStyleTag({ content: FREEZE });
await page.evaluate(() => document.fonts.ready);
const wait = (ms = 400) => page.waitForTimeout(ms);
const tab = async (label) => {
  await page.locator("nav.tabs button", { hasText: label }).first().click();
  await wait();
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(200);
};
const shot = async () => (await page.screenshot({ type: "png" })).toString("base64");

const shots = {};
await tab("Practice");
shots.home = await shot();

await tab("Cases");
await page.locator("button.caserow:not(.locked)").first().click();
await wait(600);
await page.evaluate(() => window.scrollTo(0, 0));
shots.case = await shot();
await page.locator(".top .back").click();
await wait(200);
const leave = page.locator(".dialog .btn").last();
if (await leave.count()) await leave.click();
await wait();

await tab("Progress");
await page.evaluate(() => {
  const el = [...document.querySelectorAll(".label")].find((e) => e.textContent?.trim() === "By Client Needs area");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70);
});
await wait();
shots.progress = await shot();
await ctx.close();
console.log("  shot home, case, progress");

// ---- the app's own faces ---------------------------------------------------
const face = (family, file, extra = "") =>
  `@font-face{font-family:'${family}';src:url(data:font/woff2;base64,${readFileSync(join(root, "node_modules", file)).toString("base64")}) format('woff2');font-weight:100 900;${extra}}`;
const FONTS =
  face("Archivo", "@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2", "font-stretch:62% 125%;") +
  face("Atkinson", "@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2");

// Cap colours in Client Needs order, as in src/styles.css. They are the
// product's signature, so they appear here as the caps they are in the app.
const CAPS = ["#2446C8", "#1D8A4B", "#E0559B", "#9A6B3F", "#4DB2E0", "#8C939B", "#EE7A1F", "#E9CB2B"];
const caps = CAPS.map(
  (c) => `<span style="display:block;width:76px;height:84px;border:9px solid #fff;border-bottom-width:14px;border-radius:24px 24px 6px 6px;background:${c}"></span>`,
).join("");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${FONTS}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden;background:#101418}
.wrap{position:absolute;left:300px;top:262px;width:2022px;height:951px;display:flex;align-items:center;gap:80px}
.left{width:930px;flex:none;color:#fff}
.caps{display:flex;gap:30px}
.word{margin-top:66px;font-family:Archivo,sans-serif;font-weight:800;font-stretch:112%;font-size:150px;line-height:.98;letter-spacing:-.015em}
.word .n{display:block}
.tag{margin-top:58px;font-family:Atkinson,sans-serif;font-size:58px;line-height:1.3}
.tag .b{display:block;color:#c3cad0}
.label{margin-top:56px;font-family:Archivo,sans-serif;font-weight:700;font-stretch:122%;font-size:34px;letter-spacing:.08em;text-transform:uppercase;color:#98a1a9}
.right{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:48px}
.ph{border-radius:44px;overflow:hidden;background:#e8ecef;border:5px solid #fff}
.ph img{display:block;width:100%;height:auto}
.s{width:296px}.m{width:350px}
</style></head><body>
<div class="wrap">
  <div class="left">
    <div class="caps">${caps}</div>
    <div class="word">Preceptor:<span class="n">NCLEX</span></div>
    <div class="tag">Every Next Generation item type.<span class="b">Case studies. An adaptive mock. Fully offline.</span></div>
    <div class="label">NCLEX-RN exam preparation</div>
  </div>
  <div class="right">
    <div class="ph s"><img src="data:image/png;base64,${shots.case}"></div>
    <div class="ph m"><img src="data:image/png;base64,${shots.home}"></div>
    <div class="ph s"><img src="data:image/png;base64,${shots.progress}"></div>
  </div>
</div></body></html>`;

const tmp = join(OUT, ".header.html");
writeFileSync(tmp, html);
const ctx2 = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE });
const p2 = await ctx2.newPage();
await p2.goto(pathToFileURL(tmp).href, { waitUntil: "networkidle" });
await p2.evaluate(() => document.fonts.ready);
await p2.waitForTimeout(600);
const master = join(OUT, "header-16x9.png");
await p2.screenshot({ path: master, type: "png", omitBackground: false });

// The two crops Apple takes, for checking by eye. Not uploaded.
const cropPage = await ctx2.newPage();
const data = readFileSync(master).toString("base64");
const crop = async (name, cw, ch) => {
  await cropPage.setViewportSize({ width: Math.round(cw / SCALE), height: Math.round(ch / SCALE) });
  await cropPage.setContent(`<body style="margin:0;overflow:hidden"><img src="data:image/png;base64,${data}" style="display:block;width:${W}px;margin:${-(5244 - cw) / 2 / SCALE}px 0 0 ${-(5244 - cw) / 2 / SCALE}px;margin-top:${-(2950 - ch) / 2 / SCALE}px"></body>`);
  await cropPage.waitForTimeout(200);
  await cropPage.screenshot({ path: join(OUT, name), type: "png" });
};
await crop("check-21x9.png", 5244, Math.round(5244 / (3840 / 1646)));
await crop("check-3x2.png", Math.round(2950 * 1.5), 2950);
await browser.close();
rmSync(tmp, { force: true });

const b = readFileSync(master);
const mw = b.readUInt32BE(16), mh = b.readUInt32BE(20), colour = b[25];
console.log(`\n  header-16x9.png  ${mw}x${mh}  colour type ${colour}  ${b.length} bytes`);
if (mw !== 5244 || mh !== 2950) { console.error("  wrong size"); process.exit(1); }
if (colour === 4 || colour === 6) { console.error("  has an alpha channel, which Apple rejects"); process.exit(1); }
console.log("  16:9, no transparency. Check check-21x9.png and check-3x2.png before upload.");
