// Generates store screenshots, the 512 Play icon and the Play feature graphic.
//
// Usage (from oral-exam-sim/):
//   npm run dev                                  # in another terminal
//   npx -y -p playwright@1 node store/tools/make-assets.mjs [http://localhost:5173]
//
// Needs a Chromium that Playwright can launch. Set CHROMIUM_PATH to use a
// specific binary. Set ONLY=<size name> to render one size. Output goes to store/screenshots/<size>/ and store/graphics/.

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
  ["01-written", "Practise SAMPs in every exam format."],
  ["02-samp-key", "Answer keys scored like an examiner."],
  ["03-mock", "A timed four hour mock exam."],
  ["04-station", "12 minute oral stations."],
  ["05-feedback", "Feedback on every oral decision."],
  ["06-criteria", "Mark yourself on the examiner criteria."],
  ["07-topics", "Every priority topic and key feature."],
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
  const tab = (name) => page.locator(".tabs button", { hasText: name }).first().click();
  const wait = (ms = 250) => page.waitForTimeout(ms);
  const scrollTo = async (text, offset = 120) => {
    await page.getByText(text).first().waitFor();
    await page.evaluate(
      ([t, o]) => {
        const el = [...document.querySelectorAll("body *")].find((e) => e.childElementCount === 0 && e.textContent?.includes(t));
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - o);
      },
      [text, offset],
    );
    await wait();
  };

  await page.goto(`${base}/?seed=1`);
  await wait(800);
  // Buy everything (simulated in the dev server) so no lock icons show.
  await click("Get full access");
  await click("Buy complete");
  await wait();

  // 01 Written tab: topics with scores.
  await tab("Written");
  await wait();
  await scrollTo("Practice by priority topic", 90);
  await snap("01-written");

  // 02 A marked SAMP. Pick one that opens with short answer questions.
  const pick = await page.evaluate(() => {
    const samps = window.__SAMPS ?? [];
    return samps.find((s) => s.questions.length >= 3 && s.questions[0].kind === "short" && s.questions[0].required >= 3 && (s.questions[0].unacceptable ?? []).length > 0) ?? samps[0];
  });
  // Open the topic by name, then the SAMP by title.
  await page.evaluate((t) => {
    const rows = [...document.querySelectorAll(".caserow")];
    const names = window.__TOPIC_NAMES ?? {};
    const row = rows.find((r) => r.textContent?.includes(names[t] ?? "\u0000"));
    (row ?? rows[0]).click();
  }, pick.topic);
  await wait();
  await page.locator(".caserow", { hasText: pick.title }).first().click();
  await wait();
  for (const [qi, q] of pick.questions.entries()) {
    if (q.kind === "short") {
      const lines = q.accept.slice(0, q.required).map((a) => a.text);
      if (qi === 0 && q.unacceptable?.length) lines[lines.length - 1] = q.unacceptable[0].text;
      const inputs = page.locator(".shortline input");
      for (let i = 0; i < lines.length; i++) await inputs.nth(i).fill(lines[i]);
    } else if (q.kind === "single") {
      await page.locator(".opt").nth(q.correct).click();
    } else {
      for (const k of q.correct) await page.locator(".opt").nth(k).click();
    }
    await wait(100);
    if (qi < pick.questions.length - 1) await click("Next question");
    else await click("Mark this SAMP");
    await wait(150);
  }
  await page.locator(".sampq.marked").first().waitFor();
  await page.evaluate(() => {
    const el = document.querySelector(".sampq.marked");
    if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70);
  });
  await wait();
  await snap("02-samp-key");

  // 03 A full mock exam in progress.
  await page.locator(".top .back").click();
  await wait();
  await page.locator("button.nextcase", { hasText: "Full mock" }).click();
  await wait(1200);
  const first = page.locator(".shortline input").first();
  if (await first.count()) await first.fill("Serial troponin at 0 and 3 hours");
  await page.evaluate(() => window.scrollTo(0, 0));
  await wait(300);
  await snap("03-mock");
  await page.locator(".top .back").click();
  await wait();

  // 04 and 05 A mock oral station, then feedback on a decision.
  await tab("Oral");
  await wait();
  await page.locator("button.nextcase", { hasText: "Mock oral" }).click();
  await wait();
  await click("Go to station 1");
  await wait();
  await click("I have read the stem");
  await wait(2300);
  for (let i = 0; i < 6 && !(await page.getByRole("button", { name: "Done answering" }).count()) && !(await page.locator(".choice").count()); i++) {
    await click("Continue");
    await wait(150);
  }
  if (await page.getByRole("button", { name: "Ask for" }).count()) {
    await page.getByRole("button", { name: "Ask for" }).first().click();
    await page.locator(".sheet .grid button").nth(0).click();
    await wait(300);
  }
  await snap("04-station");
  for (let i = 0; i < 20; i++) {
    if (await page.locator(".choice").count()) break;
    if (await page.getByRole("button", { name: "Done answering" }).count()) await click("Done answering");
    await wait(150);
    if (await page.locator(".choice").count()) break;
    if (await page.getByRole("button", { name: "Next question" }).count()) await click("Next question");
    else if (await page.getByRole("button", { name: "Continue" }).count()) await click("Continue");
    await wait(150);
  }
  await page.locator(".choice").nth(1).click();
  await wait();
  await snap("05-feedback");
  await page.locator(".top .back").click();
  await wait();

  // 06 A seeded oral report, at the examiner criteria.
  await tab("Progress");
  await wait();
  // An older seeded attempt, so the criteria bars are not all full.
  await page.evaluate(() => {
    const rows = document.querySelectorAll("button.row");
    rows[Math.min(6, rows.length - 1)]?.click();
  });
  await scrollTo("Score sheet", 70);
  await snap("06-criteria");
  await page.locator(".top .back").click();
  await wait();

  // 07 Priority topics with key feature coverage.
  await tab("Progress");
  await wait();
  await scrollTo("CFPC priority topics", 70);
  await snap("07-topics");

  // 08 Spaced review.
  await tab("Review");
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

for (const size of SIZES.filter((x) => !process.env.ONLY || x.name === process.env.ONLY)) {
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
      <div style="font:700 15px/1 -apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:0.18em;color:#E0B43C;text-transform:uppercase">Written and oral exam practice</div>
      <div style="font-size:64px;font-weight:600;line-height:1.05;margin-top:14px">Preceptor: CCFP-EM</div>
      <div style="font-size:26px;line-height:1.35;margin-top:16px;color:#C9D8EA;max-width:560px">Original SAMPs with examiner style keys. 12 minute oral stations. Fully offline.</div>
    </div></body>`);
  await page.screenshot({ path: join(g, "play-feature-1024x500.png") });
  await ctx.close();
}
console.log("wrote graphics");
await browser.close();
