// Generates store screenshots, the 512 Play icon and the Play feature graphic.
//
// Usage (from nclex-rn/):
//   VITE_SEED=1 npx vite build --outDir <tmp>/seeded
//   npx vite preview --outDir <tmp>/seeded --port 5174        # in another terminal
//   npx -y -p playwright@1 node store/tools/make-assets.mjs http://localhost:5174
//
// The dev server works too (npm run dev, then pass http://localhost:5173), but
// there ?seed=1 swaps in the demo bank while the real bank is small. The seeded
// static build always runs on the real bank.
//
// Needs a Chromium that Playwright can launch. Set CHROMIUM_PATH to use a
// specific binary. Set ONLY=<size name> to render one size. Output goes to
// store/screenshots/<size>/ and store/graphics/.
//
// Items are picked by kind from window.__BANK (set by src/dev/seed.ts in
// seeded builds only), never by id, so the script keeps working as the bank grows.

import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// ESM import ignores NODE_PATH, so under `npx -p playwright@1` find the
// package through the node_modules/.bin that npx put on PATH.
async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    for (const bin of (process.env.PATH ?? "").split(":")) {
      const pkg = join(bin, "..", "playwright");
      if (bin.endsWith(join("node_modules", ".bin")) && existsSync(join(pkg, "package.json")))
        return await import(pathToFileURL(join(pkg, "index.mjs")).href);
    }
    throw new Error("Cannot find playwright. Run with: npx -y -p playwright@1 node store/tools/make-assets.mjs");
  }
}
const { chromium } = await loadPlaywright();

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const base = (process.argv[2] ?? "http://localhost:5174").replace(/\/$/, "");

const SIZES = [
  { name: "iphone-6.9", w: 1320, h: 2868, dpr: 3 },
  { name: "iphone-6.5", w: 1284, h: 2778, dpr: 3 },
  { name: "ipad-13", w: 2064, h: 2752, dpr: 2 },
  { name: "play-phone", w: 1080, h: 1920, dpr: 3 },
  { name: "play-tablet-7", w: 1080, h: 1920, dpr: 1.8 },
  { name: "play-tablet-10", w: 1440, h: 2560, dpr: 1.8 },
];

// Order and wording match store/listing.md.
const CAPTIONS = [
  ["01-types", "Every Next Generation item type."],
  ["02-bowtie", "Bow-tie items, scored slot by slot."],
  ["03-case", "Case studies on clinical judgment."],
  ["04-reasons", "A reason for every choice."],
  ["05-mock", "An adaptive mock on the exam rules."],
  ["06-band", "An honest readiness band."],
  ["07-progress", "Progress by Client Needs area."],
  ["08-practice", "Practise by type, area or step."],
];

const MIN_APP_W = 390;
const MAX_APP_W = 780;
const NAVY = "#00305C";
const GOLD = "#C99400";
const SERIF = "'Iowan Old Style',Charter,'Source Serif Pro',Georgia,serif";
const SANS = "-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const markSvg = (ring2) =>
  `<svg viewBox="0 0 200 200" width="100%" height="100%"><circle cx="100" cy="100" r="88" fill="none" stroke="${GOLD}" stroke-width="14"/><circle cx="100" cy="100" r="56" fill="none" stroke="${ring2}" stroke-width="12"/><circle cx="100" cy="100" r="22" fill="${GOLD}"/></svg>`;

// Falls back to any full Chromium under PLAYWRIGHT_BROWSERS_PATH when this
// Playwright version's own build is not installed.
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
    console.log(`using ${found}`);
    return chromium.launch({ executablePath: found });
  }
}
const browser = await launch();

// Layout shared by capture and compose so the app image fills its frame exactly.
const frame = (size) => {
  // Fractional at dpr 1.8. compose() still writes exactly size.w x size.h pixels.
  const cssW = size.w / size.dpr;
  const cssH = size.h / size.dpr;
  const tablet = cssW / cssH > 0.7;
  const band = Math.round(cssH * (tablet ? 0.17 : 0.2));
  const pad = Math.round(cssW * 0.07);
  const font = Math.round(Math.min(cssW * 0.075, cssH * (tablet ? 0.036 : 0.042)));
  const appW = Math.round(cssW) - 2 * pad;
  const appH = Math.ceil(cssH) - band;
  // Render the app at least as wide as a typical phone, then scale it into the frame,
  // so a 360 px wide Play phone frame does not show a cramped layout. On the 13 inch
  // iPad scale up a little so text reads at store thumbnail size. 780 keeps the
  // three column bow-tie layout (it stacks below 760).
  const zoom = appW < MIN_APP_W ? appW / MIN_APP_W : appW > MAX_APP_W ? appW / MAX_APP_W : 1;
  return { cssW, cssH, band, pad, font, appW, appH, zoom };
};

async function captureApp(size) {
  const { appW, appH, zoom } = frame(size);
  const ctx = await browser.newContext({
    viewport: { width: Math.round(appW / zoom), height: Math.round(appH / zoom) },
    deviceScaleFactor: size.dpr * zoom,
    colorScheme: "light",
  });
  const page = await ctx.newPage();
  page.on("dialog", (d) => d.accept());
  page.on("pageerror", (e) => console.warn(`[${size.name}] page error: ${e.message}`));
  const shots = {};
  const wait = (ms = 250) => page.waitForTimeout(ms);
  const snap = async (key) => {
    await wait(200);
    shots[key] = await page.screenshot({ type: "png" });
    if (process.env.DEBUG_DIR) {
      mkdirSync(process.env.DEBUG_DIR, { recursive: true });
      await page.screenshot({ path: join(process.env.DEBUG_DIR, `${size.name}-${key}-full.png`), fullPage: true });
    }
  };
  const button = (name) => page.getByRole("button", { name, exact: true }).first();
  const tab = async (label) => {
    await page.locator("nav.tabs button", { hasText: label }).first().click();
    await wait();
  };
  // Scroll so an element sits just below the sticky header.
  const scrollToEl = async (selector, offset = 64) => {
    await page.locator(selector).first().waitFor();
    await page.evaluate(
      ([s, o]) => {
        const el = document.querySelector(s);
        // Offset below the sticky header, so no half line of text peeks out above the element.
        const header = document.querySelector(".top")?.getBoundingClientRect().height ?? 0;
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - Math.min(o, header + 12));
      },
      [selector, offset],
    );
    await wait();
  };
  const scrollToLabel = async (text, offset = 64) => {
    await page.evaluate(
      ([t, o]) => {
        const el = [...document.querySelectorAll(".label")].find((e) => e.textContent?.trim() === t);
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - o);
      },
      [text, offset],
    );
    await wait();
  };
  // Answer area in view. Starts at the stem when the stem is short for this screen,
  // else at the instruction line, flush under the sticky header.
  const scrollToAnswer = async () => {
    await page.evaluate(() => {
      const y = (el) => el.getBoundingClientRect().top + window.scrollY;
      const stem = document.querySelector(".itemcard .stem");
      const hint = document.querySelector(".itemcard .hint");
      const header = document.querySelector(".top")?.getBoundingClientRect().height ?? 0;
      const fromStem = y(hint) - y(stem) < window.innerHeight * 0.3;
      window.scrollTo(0, (fromStem ? y(stem) : y(hint)) - header - (fromStem ? 12 : 2));
    });
    await wait();
  };
  const exitSet = async () => {
    await page.locator(".top .back").click();
    await wait();
  };

  // Every item in the bank, stand-alone and in cases, found by its stem on screen.
  const currentItem = () =>
    page.evaluate(() => {
      const b = window.__BANK;
      const stem = document.querySelector(".itemcard .stem")?.textContent?.trim();
      const all = [...b.items, ...b.cases.flatMap((c) => c.items)];
      return all.find((i) => i.stem.trim() === stem) ?? null;
    });

  // Opens a practice set of one item type until its first item passes `want`.
  async function openKind(kindName, want = () => true, tries = 12) {
    let item = null;
    for (let t = 0; t < tries; t++) {
      await tab("Practice");
      const row = page.locator("button.setrow").filter({ has: page.locator(".t", { hasText: new RegExp(`^${kindName}$`) }) });
      if (!(await row.count()) || (await row.first().isDisabled())) return null;
      await row.first().click();
      await wait(300);
      item = await currentItem();
      if (item && want(item)) return item;
      if (t < tries - 1) await exitSet();
    }
    return item;
  }

  // Answers the item on screen. mistakes > 0 swaps in that many wrong picks where the kind allows it.
  async function answerItem(item, mistakes = 0) {
    const click = async (sel, n) => {
      await page.locator(sel).nth(n).click();
      await wait(60);
    };
    const wrongOf = (count, correct) => [...Array(count).keys()].filter((i) => !correct.includes(i));
    switch (item.kind) {
      case "mc": {
        const pick = mistakes ? wrongOf(item.options.length, [item.correct])[0] : item.correct;
        await click(".itemcard .opt", pick);
        break;
      }
      case "msn":
      case "sata": {
        let picks = [...item.correct];
        if (mistakes) {
          const w = wrongOf(item.options.length, item.correct);
          if (item.kind === "msn") picks[picks.length - 1] = w[0];
          else if (w.length) picks.push(w[0]);
        }
        for (const k of picks) await click(".itemcard .opt", k);
        break;
      }
      case "highlight": {
        let picks = [...item.correct];
        if (mistakes && picks.length > 1) picks = picks.slice(0, -1);
        if (mistakes) {
          const w = wrongOf(item.spans.length, item.correct);
          if (w.length) picks.push(w[0]);
        }
        for (const k of picks) await click(".itemcard .hl", k);
        break;
      }
      case "matrix": {
        for (const [i, row] of item.rows.entries()) {
          let picks = [...row.correct];
          if (mistakes && i === item.rows.length - 1) picks = [wrongOf(item.columns.length, row.correct)[0] ?? 0];
          for (const j of picks) await page.locator(".itemcard .mrow").nth(i).locator(".mcell").nth(j).click();
        }
        break;
      }
      case "cloze": {
        for (const [k, b] of item.blanks.entries()) {
          const j = mistakes && k === item.blanks.length - 1 ? wrongOf(b.options.length, [b.correct])[0] : b.correct;
          await page.locator(".itemcard select.drop").nth(k).selectOption(String(j));
        }
        break;
      }
      case "dnd": {
        const order = [...item.correct];
        if (mistakes && order.length > 1) [order[0], order[1]] = [order[1], order[0]];
        for (const [t, tok] of order.entries()) {
          await page.locator(".itemcard .pool .token").filter({ hasText: item.tokens[tok].text }).first().click();
          await page.locator(".itemcard .slot").nth(t).click();
          await wait(60);
        }
        break;
      }
      case "bowtie": {
        const c = item.correct;
        await click(".bcol.condition .opt", c.condition);
        for (const k of c.actions) await click(".bcol.actions .opt", k);
        const params = [...c.parameters];
        if (mistakes) params[1] = wrongOf(item.parameters.length, c.parameters)[0];
        for (const k of params) await click(".bcol.parameters .opt", k);
        break;
      }
    }
  }
  const submit = async () => {
    await page.locator(".dock button", { hasText: /^Submit/ }).click();
    await wait(300);
  };

  await page.goto(`${base}/?seed=1`);
  await page.waitForFunction(() => window.__BANK && document.querySelector("nav.tabs"));
  await wait(500);
  // Buy (simulated in seeded builds) so no lock icons show.
  const full = page.locator(".top button", { hasText: "Full access" });
  if (await full.count()) {
    await full.click();
    await button("Buy lifetime access").click();
    await page.locator(".top button", { hasText: "Full access" }).waitFor({ state: "detached" });
    await wait();
  }

  // 01 A Next Generation item, answered with one slip so the marks show.
  // Prefer a type that reads as NGN at a glance, and an item without a long chart.
  const typeOrder = ["Matrix", "Highlight", "Drop-down cloze", "Drag and drop", "Select all that apply"];
  let shown = false;
  for (const kind of typeOrder) {
    const item = await openKind(kind, (i) => !i.tabs?.length && i.stem.length < 260, 6);
    if (!item) continue;
    await answerItem(item, 1);
    await submit();
    await scrollToAnswer();
    await snap("01-types");
    await exitSet();
    shown = true;
    break;
  }
  if (!shown) throw new Error("No NGN item found for 01-types");

  // 02 A bow-tie after submit: one wrong parameter, so 4 of 5 points.
  {
    const item = await openKind("Bow-tie", (i) => !i.tabs?.length, 6);
    if (!item) throw new Error("No bow-tie item in the bank");
    await answerItem(item, 1);
    await submit();
    // Show the scored slots and the start of the options, points in view.
    // Frame the parameters column (one right, one wrong, one missed) down to the score,
    // with the score just above the bottom dock.
    await page.evaluate(() => {
      const y = (el) => el.getBoundingClientRect().top + window.scrollY;
      const params = document.querySelector(".bcol.parameters");
      const verdict = document.querySelector(".feedback .verdict");
      const dock = document.querySelector(".dock")?.getBoundingClientRect().height ?? 90;
      const header = document.querySelector(".top")?.getBoundingClientRect().height ?? 56;
      const fromParams = y(params) - header - 12;
      const toVerdict = y(verdict) + verdict.offsetHeight - (window.innerHeight - dock - 16);
      // Side by side columns (wide screens): show the whole bow-tie from its instruction line.
      const wide = params.getBoundingClientRect().left > document.querySelector(".bcol.actions").getBoundingClientRect().left + 20;
      const hint = document.querySelector(".itemcard .hint");
      window.scrollTo(0, wide ? y(hint) - header - 12 : Math.max(fromParams, toVerdict));
    });
    await wait();
    await snap("02-bowtie");
    await exitSet();
  }

  // 03 A case study two items in: step indicator, chart tabs, item 3.
  {
    await tab("Cases");
    await page.locator("button.caserow").first().click();
    await wait(300);
    for (let k = 0; k < 2; k++) {
      const item = await currentItem();
      await answerItem(item, 0);
      await submit();
      await page.locator(".dock button", { hasText: /Next item/ }).click();
      await wait(300);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await wait();
    await snap("03-case");
    await exitSet();
  }

  // 04 Per-choice reasons and the rationale on a select all that apply item.
  {
    const item =
      (await openKind("Select all that apply", (i) => !i.tabs?.length && i.options.length >= 5, 8)) ??
      (await openKind("Multiple choice", (i) => !i.tabs?.length, 6));
    await answerItem(item, 1);
    await submit();
    await scrollToAnswer();
    await snap("04-reasons");
    await exitSet();
  }

  // 05 The mock intro: the exam rules it runs on.
  await tab("Mock");
  await page.evaluate(() => window.scrollTo(0, 0));
  await snap("05-mock");

  // 06 A seeded mock result. Prefer a band above or near the standard.
  {
    const rows = page.locator("button.setrow").filter({ has: page.locator(".band") });
    let pick = rows.filter({ has: page.locator(".band.pass") });
    if (!(await pick.count())) pick = rows.filter({ has: page.locator(".band.borderline") });
    if (!(await pick.count())) pick = rows;
    await pick.first().click();
    await wait(300);
    await page.evaluate(() => window.scrollTo(0, 0));
    await snap("06-band");
    await page.locator(".top .back").click();
    await wait();
  }

  // 07 Progress by Client Needs area.
  await tab("Progress");
  await scrollToLabel("By Client Needs area", 64);
  await snap("07-progress");

  // 08 Practice home.
  await tab("Practice");
  await page.evaluate(() => window.scrollTo(0, 0));
  await snap("08-practice");

  const locks = await page.locator(".lock").count();
  if (locks) console.warn(`[${size.name}] ${locks} lock icons still on the practice screen`);
  await ctx.close();
  return shots;
}

async function compose(size, shot, caption, out) {
  const { cssW, cssH, band, pad, font } = frame(size);
  // Laid out in CSS pixels, then zoomed by dpr on a 1:1 page of exactly size.w x size.h,
  // because a fractional dpr (1.8) makes Chromium round the screenshot to 1919 or 1921 px.
  const ctx = await browser.newContext({ viewport: { width: size.w, height: size.h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const img = `data:image/png;base64,${shot.toString("base64")}`;
  const mark = Math.round(font * 0.95);
  await page.setContent(`<!doctype html><html style="zoom:${size.dpr}"><body style="margin:0;background:${NAVY};width:${cssW}px;height:${cssH}px;overflow:hidden;position:relative;font-family:${SERIF}">
    <div style="height:${band}px;display:flex;flex-direction:column;justify-content:center;padding:0 ${pad}px;box-sizing:border-box">
      <div style="width:${mark}px;height:${mark}px;margin-bottom:${Math.round(font * 0.45)}px">${markSvg("#FFFFFF")}</div>
      <div style="color:#FFFFFF;font-size:${font}px;line-height:1.12;font-weight:600;letter-spacing:-0.01em">${caption}</div>
    </div>
    <div style="position:absolute;left:${pad}px;right:${pad}px;top:${band}px;bottom:0;overflow:hidden;border-radius:${Math.round(cssW * 0.04)}px ${Math.round(cssW * 0.04)}px 0 0;border:1px solid rgba(255,255,255,0.25);border-bottom:0;background:#F7F5F0">
      <img src="${img}" style="width:100%;display:block"/>
    </div></body></html>`);
  await page.waitForTimeout(100);
  await page.screenshot({ path: out, type: "png" });
  await ctx.close();
}

const only = process.env.ONLY;
if (only && !SIZES.some((s) => s.name === only)) throw new Error(`Unknown size ${only}. One of: ${SIZES.map((s) => s.name).join(", ")}`);

for (const size of SIZES.filter((x) => !only || x.name === only)) {
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
  await page.setContent(`<!doctype html><body style="margin:0;width:1024px;height:500px;background:${NAVY};display:flex;align-items:center;font-family:${SERIF};color:#fff">
    <div style="width:180px;height:180px;margin:0 48px 0 72px;flex:none">${markSvg("#FFFFFF")}</div>
    <div style="padding-right:56px">
      <div style="font:700 15px/1 ${SANS};letter-spacing:0.18em;color:#E0B43C;text-transform:uppercase">Next Generation NCLEX-RN prep</div>
      <div style="font-size:50px;font-weight:600;line-height:1.05;margin-top:16px;white-space:nowrap">Preceptor: NCLEX-RN Prep</div>
      <div style="font-size:25px;line-height:1.35;margin-top:18px;color:#C9D8EA;max-width:600px">Every NGN item type. Case studies. An adaptive mock. Fully offline.</div>
    </div></body>`);
  await page.screenshot({ path: join(g, "play-feature-1024x500.png") });
  await ctx.close();
}
console.log("wrote graphics");
await browser.close();
