// Generates store screenshots, the 512 Play icon and the Play feature graphic.
//
// Usage (from oral-exam-sim/):
//   npm run dev                                  # in another terminal
//   npx -y -p playwright@1 node store/tools/make-assets.mjs [http://localhost:5173]
//
// Needs a Chromium that Playwright can launch. Set CHROMIUM_PATH to use a
// specific binary. Output goes to store/screenshots/<size>/ and store/graphics/.

import { chromium } from "playwright";
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const base = process.argv[2] ?? "http://localhost:5173";

const SIZES = [
  { name: "iphone-6.9", w: 1320, h: 2868, dpr: 3 },
  { name: "iphone-6.5", w: 1284, h: 2778, dpr: 3 },
  { name: "ipad-13", w: 2064, h: 2752, dpr: 2 },
  { name: "play-phone", w: 1080, h: 1920, dpr: 3 },
];

const CAPTIONS = [
  ["01-case-bank", "Run the case out loud."],
  ["02-question", "Timed questions, like the real oral."],
  ["03-ask-for", "Ask for results when you need them."],
  ["04-choices", "The case follows your decisions."],
  ["05-feedback", "Feedback on every choice."],
  ["06-report", "A report with your top three fixes."],
  ["07-dashboard", "See where you stand across the blueprint."],
  ["08-review", "Review what you missed until it sticks."],
];

const markSvg = (ring2) =>
  `<svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="88" fill="none" stroke="#C99400" stroke-width="14"/><circle cx="100" cy="100" r="56" fill="none" stroke="${ring2}" stroke-width="12"/><circle cx="100" cy="100" r="22" fill="#C99400"/></svg>`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});

// Layout shared by capture and compose so the app image fills its frame exactly.
const frame = (size) => {
  const cssW = size.w / size.dpr;
  const cssH = size.h / size.dpr;
  const band = Math.round(cssH * 0.2);
  const pad = Math.round(cssW * 0.07);
  return { cssW, cssH, band, pad, appW: cssW - 2 * pad, appH: cssH - band };
};

async function captureApp(size) {
  const { appW: cssW, appH: cssH } = frame(size);
  const ctx = await browser.newContext({ viewport: { width: cssW, height: cssH }, deviceScaleFactor: size.dpr, colorScheme: "light" });
  const page = await ctx.newPage();
  page.on("dialog", (d) => d.accept());
  const shots = {};
  const snap = async (key) => (shots[key] = await page.screenshot({ type: "png" }));
  const click = (name) => page.getByRole("button", { name, exact: false }).first().click();
  const wait = (ms = 250) => page.waitForTimeout(ms);

  await page.goto(`${base}/?seed=1`);
  await wait(800);
  // Buy the full bank (simulated in the dev server) so no lock icons show.
  await page.getByRole("button", { name: "Get all cases" }).click();
  await click("Buy the full case bank");
  await wait();
  await snap("01-case-bank");

  // First case: question, findings, choices, feedback.
  await page.locator(".caserow").first().click();
  await click("Start practice case");
  await click("Begin");
  await wait();
  for (let i = 0; i < 6 && !(await page.getByRole("button", { name: "Done answering" }).count()); i++) {
    await click("Continue");
    await wait(150);
  }
  await page.getByRole("button", { name: "Ask for" }).first().click();
  await wait();
  await snap("03-ask-for");
  await page.locator(".sheet .grid button").nth(0).click();
  await page.getByRole("button", { name: "Ask for" }).first().click();
  await page.locator(".sheet .grid button").nth(2).click();
  await wait(1500);
  await snap("02-question");

  // Advance to the first branching question.
  for (let i = 0; i < 20; i++) {
    if (await page.getByRole("button", { name: "Done answering" }).count()) await click("Done answering");
    await wait(150);
    if (await page.locator(".choice").count()) break;
    if (await page.getByRole("button", { name: "Next question" }).count()) await click("Next question");
    else if (await page.getByRole("button", { name: "Continue" }).count()) await click("Continue");
  }
  await snap("04-choices");
  await page.locator(".choice").nth(1).click();
  await wait();
  await snap("05-feedback");

  // A seeded report. Open the most recent history entry from Progress.
  await page.getByRole("button", { name: "Exit case" }).click();
  await page.getByRole("button", { name: "Progress", exact: true }).click();
  await wait();
  await snap("07-dashboard-top");
  await page.evaluate(() => {
    const el = document.querySelector(".heat");
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 150);
  });
  await wait();
  await snap("07-dashboard");
  // Open the most recent seeded report from the history list.
  await page.evaluate(() => document.querySelector("button.row")?.click());
  await page.getByText("Top three things to fix").waitFor();
  await wait(200);
  await page.getByText("Top three things to fix").scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -260));
  await wait();
  await snap("06-report");

  if (await page.locator(".top .back").count()) await page.locator(".top .back").click();
  await wait();
  await page.locator(".tabs button").nth(1).click();
  await wait();
  await click("Show the point");
  await wait();
  await snap("08-review");
  await ctx.close();
  return shots;
}

async function compose(size, shot, caption, out) {
  const { cssW, cssH, band, pad } = frame(size);
  const ctx = await browser.newContext({ viewport: { width: cssW, height: cssH }, deviceScaleFactor: size.dpr });
  const page = await ctx.newPage();
  const img = `data:image/png;base64,${shot.toString("base64")}`;
  await page.setContent(`<!doctype html><html><body style="margin:0;background:#00305C;width:${cssW}px;height:${cssH}px;overflow:hidden;font-family:'Iowan Old Style',Charter,Georgia,serif">
    <div style="height:${band}px;display:flex;flex-direction:column;justify-content:center;padding:0 ${pad}px;box-sizing:border-box">
      <div style="width:${Math.round(cssW * 0.07)}px;height:${Math.round(cssW * 0.07)}px;margin-bottom:${Math.round(band * 0.08)}px">${markSvg("#FFFFFF")}</div>
      <div style="color:#FFFFFF;font-size:${Math.round(cssW * 0.075)}px;line-height:1.12;font-weight:600;letter-spacing:-0.01em">${caption}</div>
    </div>
    <div style="position:absolute;left:${pad}px;right:${pad}px;top:${band}px;bottom:0;overflow:hidden;border-radius:${Math.round(cssW * 0.05)}px ${Math.round(cssW * 0.05)}px 0 0;border:1px solid rgba(255,255,255,0.25);border-bottom:0;background:#F7F5F0">
      <img src="${img}" style="width:100%;display:block"/>
    </div></body></html>`);
  await page.waitForTimeout(100);
  await page.screenshot({ path: out, type: "png" });
  await ctx.close();
}

for (const size of SIZES) {
  const dir = join(root, "store", "screenshots", size.name);
  mkdirSync(dir, { recursive: true });
  const shots = await captureApp(size);
  for (const [key, caption] of CAPTIONS) await compose(size, shots[key], caption, join(dir, `${key}.png`));
  console.log(`wrote ${size.name}`);
}

// Play icon 512 and feature graphic 1024 x 500.
const g = join(root, "store", "graphics");
mkdirSync(g, { recursive: true });
{
  const ctx = await browser.newContext({ viewport: { width: 512, height: 512 } });
  const page = await ctx.newPage();
  const icon = readFileSync(join(root, "assets", "icon-only.png")).toString("base64");
  await page.setContent(`<body style="margin:0"><img src="data:image/png;base64,${icon}" style="width:512px;height:512px;display:block"/></body>`);
  await page.screenshot({ path: join(g, "play-icon-512.png") });
  await ctx.close();
}
{
  const ctx = await browser.newContext({ viewport: { width: 1024, height: 500 } });
  const page = await ctx.newPage();
  await page.setContent(`<!doctype html><body style="margin:0;width:1024px;height:500px;background:#00305C;display:flex;align-items:center;font-family:'Iowan Old Style',Charter,Georgia,serif;color:#fff">
    <div style="width:210px;height:210px;margin:0 56px 0 84px;flex:none">${markSvg("#FFFFFF")}</div>
    <div>
      <div style="font:700 15px/1 -apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:0.18em;color:#E0B43C;text-transform:uppercase">CCFP-EM style oral practice</div>
      <div style="font-size:64px;font-weight:600;line-height:1.05;margin-top:14px">Preceptor: Oral</div>
      <div style="font-size:26px;line-height:1.35;margin-top:16px;color:#C9D8EA;max-width:560px">100 branching cases. Timed questions. Feedback on every decision. Fully offline.</div>
    </div></body>`);
  await page.screenshot({ path: join(g, "play-feature-1024x500.png") });
  await ctx.close();
}
console.log("wrote graphics");
await browser.close();
