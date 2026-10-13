// Preceptor: CCFP-EM — render the App Store creative asset from the real app.
//
//     node tools/asset-header.mjs
//
// Writes store/asset-library/header-16x9.png (5244 x 2950, RGB, no alpha) and
// two crop previews beside it in store/asset-library/preview/.
//
// Apple's Asset Library takes ONE 16:9 image for both the product page header
// and the search results, then CROPS it for the other two accepted shapes:
//
//   21:9 header only   keeps the middle 76.2% of the HEIGHT   y 351..2599
//   3:2  search only   keeps the middle 84.4% of the WIDTH    x 410..4834
//
// Everything that carries meaning sits inside that intersection with a further
// 110 unit margin (x 520..4724, y 461..2489 of the master). The crops are
// written out so that can be checked by eye rather than asserted.
//
// THE PHONES ARE THE REAL APP. This script builds the release UI with the
// screenshot flag (VITE_SEED=1, the same build the store screenshots use: it
// adds sample progress, nothing else), serves it, unlocks it with the local
// simulated purchase, freezes animation and shoots at 402 x 874 at
// deviceScaleFactor 4. The composition reuses the app's own embedded fonts,
// straight out of the bundle's CSS, so the wordmark is the product's type.
//
// THIS APP'S LOOK, NOT ANOTHER'S. The app is a resuscitation record sheet:
// cool bond-white paper, pre-printed in form green, filled in with ballpoint
// blue (DESIGN.md). The asset is that sheet: ruled paper, double form rules,
// the green-ink-blue mark, the app's own hero line in form type and one line
// in pen blue. Stamp red stays reserved for alarms and is not used.
//
// WHAT IT MAY SAY. The hero line already ships on the Oral home screen. The
// second line is the shipping store copy (Play short description): SAMPs, 12
// minute oral stations, offline. No counts, no prices, no outcome claims, no
// third-party brand. The screens chosen show no citation rows (they name other
// organizations) and no clinical imagery.
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";
import { chromium } from "playwright";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "store", "asset-library");
const PREVIEW = path.join(OUT, "preview");
const BUILD = fs.mkdtempSync(path.join(os.tmpdir(), "ccfpem-asset-"));
const W = 2622, H = 1475, SCALE = 2; // 5244 x 2950

fs.mkdirSync(PREVIEW, { recursive: true });

// ---- build the real UI ----------------------------------------------------
console.log("building the app (screenshot build) …");
execFileSync("npm", ["run", "bank:encode"], { cwd: ROOT, stdio: "inherit" });
execFileSync("npx", ["vite", "build", "--outDir", BUILD, "--emptyOutDir"], {
  cwd: ROOT, stdio: "inherit", env: { ...process.env, VITE_SEED: "1" },
});

// Module scripts do not load from file://, so serve the bundle.
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png" };
const server = http.createServer((req, res) => {
  const p = path.join(BUILD, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!p.startsWith(BUILD) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(p)] || "application/octet-stream" });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const BASE = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();

// ---- the phones -----------------------------------------------------------
const ctx = await browser.newContext({ viewport: { width: 402, height: 874 }, deviceScaleFactor: 4, colorScheme: "light" });
const page = await ctx.newPage();
await page.goto(`${BASE}/index.html?seed=1`);
await page.waitForSelector(".splash", { state: "detached" });
await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}" });
// Unlock with the screenshot build's simulated purchase, so the shots show the
// subscriber's app rather than lock icons. No store is involved.
await page.getByRole("button", { name: "Get full access" }).click();
await page.getByRole("button", { name: /Subscribe to complete/i }).click();
await page.waitForSelector("nav.tabs");
const tab = (name) => page.locator("nav.tabs").getByRole("button", { name, exact: true }).click();
const shot = async (label) => {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  console.log(`  shot ${label}`);
  return (await page.screenshot({ type: "png" })).toString("base64");
};

const shots = {};
await tab("Written");
shots.written = await shot("written: the SAMP bank");
await tab("Progress");
shots.progress = await shot("progress: where you stand");
// A station, at the stem: the examiner card, the vitals and the 12 minute
// clock, frozen at the start. "Clearing out the shed" is anaphylaxis from a
// sting, told in text, with nothing graphic on screen.
await tab("Oral");
await page.locator("button.caserow", { hasText: "Clearing out the shed" }).click();
await page.getByRole("button", { name: /start practice case/i }).click();
await page.waitForSelector("text=The stem");
shots.station = await shot("oral station: the stem");
await ctx.close();

// ---- the app's own type ---------------------------------------------------
const css = fs.readdirSync(path.join(BUILD, "assets")).filter((f) => f.endsWith(".css"))
  .map((f) => fs.readFileSync(path.join(BUILD, "assets", f), "utf8")).join("\n");
const fonts = (css.match(/@font-face\{[^}]*\}/g) || []).join("\n");
if (!fonts) throw new Error("no @font-face found in the bundle");
console.log(`  ${(css.match(/@font-face\{/g) || []).length} embedded faces reused`);

// The mark, as in src/components/Mark.tsx: form-green ring, ink ring, pen dot.
const MARK = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="88" fill="none" stroke="#0d6650" stroke-width="14"/>
  <circle cx="100" cy="100" r="56" fill="none" stroke="#131c1a" stroke-width="12"/>
  <circle cx="100" cy="100" r="22" fill="#1d3fd0"/></svg>`;

// Palette from DESIGN.md.
const C = { sheet: "#f8fbfa", sheet2: "#edf3f1", ink: "#131c1a", ink2: "#33403d", mut: "#56625f", line: "#c9dcd5", line2: "#dfeae6", form: "#0d6650", pen: "#1d3fd0" };

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${fonts}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{background:${C.sheet};position:relative;color:${C.ink};font-family:'Atkinson Hyperlegible Next',sans-serif}
/* The ruled sheet: a fine printed grid, heavier every fifth line. */
.grid{position:absolute;inset:0;
  background-image:
    linear-gradient(${C.line} 1.5px, transparent 1.5px),
    linear-gradient(90deg, ${C.line} 1.5px, transparent 1.5px),
    linear-gradient(${C.line2} 1px, transparent 1px),
    linear-gradient(90deg, ${C.line2} 1px, transparent 1px);
  background-size:180px 180px,180px 180px,36px 36px,36px 36px;background-position:-2px -2px;opacity:.75}
/* Pre-printed double rules, as under the app's header and above its tab bar. */
.band{position:absolute;left:0;right:0;height:14px;border-top:5px solid ${C.form};border-bottom:5px solid ${C.form}}
.band.t{top:150px}.band.b{bottom:150px}
.fade{position:absolute;inset:0;background:linear-gradient(90deg, ${C.sheet} 0%, ${C.sheet} 34%, rgba(248,251,250,.0) 62%)}
.wrap{position:absolute;left:300px;top:250px;width:2030px;height:975px;display:flex;align-items:center;gap:40px}
.left{width:800px;flex:none}
.lock{display:flex;align-items:center;gap:30px}
.lock svg{width:132px;height:132px;flex:none}
.fam{font-family:'Barlow Semi Condensed',sans-serif;font-weight:600;font-size:46px;letter-spacing:.16em;color:${C.form};text-transform:uppercase;line-height:1}
.word{font-family:'Barlow Semi Condensed',sans-serif;font-weight:700;font-size:172px;line-height:.9;letter-spacing:.005em;color:${C.ink};margin-top:12px;white-space:nowrap}
.rule{margin:58px 0 46px;height:12px;border-top:4px solid ${C.form};border-bottom:4px solid ${C.form};width:640px}
.hero{font-family:'Barlow Semi Condensed',sans-serif;font-weight:700;font-size:104px;line-height:.98;text-transform:uppercase;color:${C.ink}}
.pen{margin-top:38px;font-size:46px;line-height:1.32;color:${C.pen};max-width:640px}
.right{flex:1;display:flex;align-items:center;justify-content:flex-end;gap:38px}
.ph{border-radius:44px;overflow:hidden;background:${C.sheet};border:4px solid ${C.ink};
  box-shadow:0 34px 70px rgba(13,40,33,.20), 0 6px 16px rgba(13,40,33,.14)}
.ph img{display:block;width:100%;height:auto}
.s{width:356px}.m{width:430px}
</style></head><body>
<div class="grid"></div><div class="fade"></div>
<div class="band t"></div><div class="band b"></div>
<div class="wrap">
  <div class="left">
    <div class="lock">${MARK}<div><div class="fam">Preceptor</div><div class="word">CCFP-EM</div></div></div>
    <div class="rule"></div>
    <div class="hero">Run the case<br>out loud.</div>
    <div class="pen">SAMPs and 12 minute oral stations. Fully offline.</div>
  </div>
  <div class="right">
    <div class="ph s"><img src="data:image/png;base64,${shots.written}"></div>
    <div class="ph m"><img src="data:image/png;base64,${shots.station}"></div>
    <div class="ph s"><img src="data:image/png;base64,${shots.progress}"></div>
  </div>
</div></body></html>`;

// Written next to the bundle's CSS so the font urls resolve unchanged.
const comp = path.join(BUILD, "assets", "asset-header.html");
fs.writeFileSync(comp, html);
const ctx2 = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE });
const p2 = await ctx2.newPage();
await p2.goto(`${BASE}/assets/asset-header.html`, { waitUntil: "networkidle" });
await p2.evaluate(() => document.fonts.ready);
await p2.waitForTimeout(600);

// Guard the safe area: every meaningful box must sit inside it (CSS px).
const SAFE = { x0: 520 / SCALE, x1: 4724 / SCALE, y0: 461 / SCALE, y1: 2489 / SCALE };
const boxes = await p2.evaluate(() => [...document.querySelectorAll(".lock,.word,.rule,.hero,.pen,.ph")].map((e) => {
  const r = e.getBoundingClientRect(); return { c: e.className, x0: r.left, x1: r.right, y0: r.top, y1: r.bottom };
}));
const wordLines = await p2.evaluate(() => { const e = document.querySelector(".word"); return Math.round(e.getBoundingClientRect().height / parseFloat(getComputedStyle(e).lineHeight)); });
if (wordLines !== 1) { console.error("the wordmark wraps"); process.exit(1); }
const out = boxes.filter((b) => b.x0 < SAFE.x0 || b.x1 > SAFE.x1 || b.y0 < SAFE.y0 || b.y1 > SAFE.y1);
if (out.length) { console.error("outside the safe area:", out); process.exit(1); }
console.log(`  ${boxes.length} content boxes inside the safe area`);

const master = path.join(OUT, "header-16x9.png");
fs.writeFileSync(master, opaque(await p2.screenshot({ type: "png" })));
// The two crops Apple will make, for checking by eye.
const ch = Math.round(W / (3840 / 1646)), cw = Math.round(H * 1.5);
fs.writeFileSync(path.join(PREVIEW, "crop-21x9.png"), opaque(await p2.screenshot({ type: "png", clip: { x: 0, y: (H - ch) / 2, width: W, height: ch } })));
fs.writeFileSync(path.join(PREVIEW, "crop-3x2.png"), opaque(await p2.screenshot({ type: "png", clip: { x: (W - cw) / 2, y: 0, width: cw, height: H } })));
await browser.close();
server.close();
fs.rmSync(BUILD, { recursive: true, force: true });

// ---- shape check ----------------------------------------------------------
const b = fs.readFileSync(master);
const mw = b.readUInt32BE(16), mh = b.readUInt32BE(20), colour = b[25];
console.log(`\n  header-16x9.png  ${mw}x${mh}  colour type ${colour}  ${b.length} bytes`);
if (mw !== 5244 || mh !== 2950) { console.error("  wrong size"); process.exit(1); }
if (colour === 4 || colour === 6) { console.error("  has an alpha channel, which Apple rejects"); process.exit(1); }
console.log("  16:9, RGB, no transparency. Crops in store/asset-library/preview/.");

// Chromium writes RGBA PNGs even for an opaque page, and Apple rejects any
// alpha channel. Re-encode as 8-bit RGB (colour type 2), dropping alpha.
function opaque(png) {
  if (png[25] !== 6 || png[24] !== 8) return png;
  const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
  const idat = [];
  for (let o = 8; o < png.length;) {
    const len = png.readUInt32BE(o), type = png.toString("ascii", o + 4, o + 8);
    if (type === "IDAT") idat.push(png.subarray(o + 8, o + 8 + len));
    o += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * 4, rgb = Buffer.alloc(h * (w * 3 + 1));
  let prev = Buffer.alloc(stride), cur = Buffer.alloc(stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let i = 0; i < stride; i++) {
      const a = i >= 4 ? cur[i - 4] : 0, up = prev[i], c = i >= 4 ? prev[i - 4] : 0;
      let v = line[i];
      if (f === 1) v += a; else if (f === 2) v += up; else if (f === 3) v += (a + up) >> 1;
      else if (f === 4) { const p = a + up - c, pa = Math.abs(p - a), pb = Math.abs(p - up), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? up : c; }
      cur[i] = v & 255;
    }
    const o = y * (w * 3 + 1);
    rgb[o] = 0;
    for (let x = 0; x < w; x++) { rgb[o + 1 + x * 3] = cur[x * 4]; rgb[o + 2 + x * 3] = cur[x * 4 + 1]; rgb[o + 3 + x * 3] = cur[x * 4 + 2]; }
    [prev, cur] = [cur, prev];
  }
  const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
  const crc = (buf) => { let c = 0xffffffff; for (const x of buf) c = crcTable[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const t = Buffer.from(type, "ascii"), l = Buffer.alloc(4), k = Buffer.alloc(4); l.writeUInt32BE(data.length); k.writeUInt32BE(crc(Buffer.concat([t, data]))); return Buffer.concat([l, t, data, k]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([png.subarray(0, 8), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(rgb, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}
