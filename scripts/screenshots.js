// App Store screenshot generator.
//
// Renders the real game at exact App Store pixel sizes and drives it to six
// scenes, saving submission-ready PNGs. These are genuine captures of the app's
// own UI — the iOS app is this same page in a WebView — not mockups.
//
//   1. run ./scripts/bundle-assets.sh first, so the art is local
//   2. npm install --no-save playwright-core   (once)
//   3. node scripts/screenshots.js
//
// Output: screenshots/iphone-6.7/*.png (1290x2796)
//         screenshots/ipad-13/*.png    (2064x2752)
//
// Apple wants 3–10 per set; six are produced. If a scene fails to set up it is
// skipped with a warning rather than saving a broken frame.

const { chromium } = require('playwright-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'www');
const OUT = path.join(__dirname, '..', 'screenshots');
const PORT = Number(process.env.PORT || 8310);

// Device pixel sizes Apple requires, expressed as CSS viewport x scale factor.
// App Store Connect exposes several size slots and asks for different ones
// depending on the page. These cover every slot a first submission can request.
const DEVICES = [
  { dir: 'iphone-6.7', w: 430, h: 932, scale: 3 },   // -> 1290 x 2796  (6.7"/6.9")
  { dir: 'iphone-6.5', w: 428, h: 926, scale: 3 },   // -> 1284 x 2778  (6.5")
  { dir: 'ipad-13', w: 1032, h: 1376, scale: 2 },    // -> 2064 x 2752  (13")
  { dir: 'ipad-12.9', w: 1024, h: 1366, scale: 2 },  // -> 2048 x 2732  (12.9")
];

// Each scene: a name and a function evaluated in the page to set it up.
const SCENES = [
  {
    name: '1-title',
    setup: () => { /* the title screen is where the game boots */ },
    wait: 2200,
  },
  {
    name: '2-mid-rush',
    setup: () => {
      S.day = 6; S.bank = 1840; S.pearls = 12;
      startShift();
      // Half-build the current order so the stack is visibly in progress.
      if (D && D.order && D.order.length > 2) {
        D.stack = D.order.slice(0, Math.ceil(D.order.length / 2) - 1);
        D.patience = 62;
        renderStack();
        setBar();
      }
    },
    wait: 1200,
  },
  {
    name: '3-ready-to-serve',
    setup: () => {
      S.day = 6; S.bank = 1840;
      startShift();
      if (D && D.order) {
        D.stack = D.order.slice();   // exact match -> "✅ READY TO SERVE!"
        D.patience = 78;
        renderStack();
        setBar();
      }
    },
    wait: 1200,
  },
  {
    name: '4-story',
    setup: () => {
      S.day = 3;
      // Force a story beat: clear the seen flag, then play the day's lines.
      S.storySeen = {};
      const lines = (typeof STORY !== 'undefined' && STORY[3]) || null;
      if (lines) showDialog(lines, function () {});
    },
    wait: 1600,
  },
  {
    name: '5-shop',
    setup: () => {
      S.day = 8; S.bank = 5200; S.pearls = 26; S.piggy = 310;
      openShop('dayStart');
      renderShop();
    },
    wait: 1000,
  },
  {
    name: '6-day-end',
    setup: () => {
      S.day = 7; S.bank = 3100; S.pearls = 18;
      startShift();
      if (D) {
        D.served = 9; D.perfect = 6; D.walk = 0;
        D.earn = 540; D.total = 720; D.piggyGain = 72;
      }
      endDay(false);
    },
    wait: 1800,
  },
];

const server = http.createServer((req, res) => {
  const f = path.join(ROOT, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    const ext = path.extname(f);
    const ct = ext === '.html' ? 'text/html'
      : ext === '.png' ? 'image/png'
        : ext === '.mp4' ? 'video/mp4' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(buf);
  });
});

(async () => {
  // Warn loudly if the art has not been bundled — otherwise the shots come out
  // with broken images and are useless for submission.
  const game = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  if (game.includes('https://d8j0ntlcm91z4')) {
    console.error('\n✗ Assets are still remote. Run ./scripts/bundle-assets.sh first,');
    console.error('  otherwise every screenshot will have missing artwork.\n');
    process.exit(1);
  }

  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch({
    executablePath: process.env.CHROME_PATH || undefined,
    args: ['--autoplay-policy=no-user-gesture-required'],
  });

  let saved = 0, skipped = 0;
  for (const dev of DEVICES) {
    const dir = path.join(OUT, dev.dir);
    fs.mkdirSync(dir, { recursive: true });

    for (const scene of SCENES) {
      const ctx = await browser.newContext({
        viewport: { width: dev.w, height: dev.h },
        deviceScaleFactor: dev.scale,
      });
      const page = await ctx.newPage();
      await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'load' });
      await page.waitForTimeout(1500);          // let boot + art settle

      const ok = await page.evaluate(fn => {
        try { eval(`(${fn})()`); return true; } catch (e) { return 'ERR: ' + e.message; }
      }, scene.setup.toString());

      if (ok !== true) {
        console.warn(`  ! ${dev.dir}/${scene.name} — setup failed (${ok}), skipping`);
        skipped++;
        await ctx.close();
        continue;
      }

      await page.waitForTimeout(scene.wait);
      const file = path.join(dir, `${scene.name}.png`);
      await page.screenshot({ path: file });
      const { width, height } = require('child_process').execSync
        ? { width: dev.w * dev.scale, height: dev.h * dev.scale } : {};
      console.log(`  ✓ ${dev.dir}/${scene.name}.png  ${width}x${height}`);
      saved++;
      await ctx.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\n${saved} screenshots written to screenshots/, ${skipped} skipped.`);
  console.log('Upload iphone-6.7/ to the 6.7" set and ipad-13/ to the 13" iPad set.');
  process.exit(saved ? 0 : 1);
})();
