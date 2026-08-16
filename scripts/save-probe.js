// Probe: does the game actually persist progress across a reload?
//
// This exists because of the single worst bug of the previous project. The game
// was written against a host that provided window.storage; inside a Capacitor
// WebView it does not exist, so every save threw into a silent catch and every
// launch started at day 1. It fails quietly, which is why normal playtesting
// never reveals it — you find out from reviews. Run this after any change that
// touches persistence.
//
// Run: node scripts/save-probe.js   (requires playwright-core + local chromium)
const { chromium } = require('playwright-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'www');
const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const server = http.createServer((req, res) => {
  const f = path.join(ROOT, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': f.endsWith('.html') ? 'text/html' : 'application/octet-stream' });
    res.end(buf);
  });
});

(async () => {
  await new Promise(r => server.listen(8201, r));
  const browser = await chromium.launch({ executablePath: CHROME });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();

  await page.goto('http://127.0.0.1:8201/', { waitUntil: 'load' });
  await page.waitForTimeout(1500);

  const api = await page.evaluate(() => ({
    hasWindowStorage: typeof window.storage,
    hasLocalStorage: typeof window.localStorage,
    storageGetIsFn: typeof (window.storage && window.storage.get),
    storageSetIsFn: typeof (window.storage && window.storage.set),
  }));

  // Advance a spread of progress across every kind of field the save carries —
  // scalars, maps and arrays — so a migration that drops one shows up here.
  const wrote = await page.evaluate(() => {
    if (typeof S === 'undefined') return 'no save state';
    S.day = 37;
    S.coins = 4242;
    S.bones = 17;
    S.best = 41;
    S.up.prep = 3;
    S.boosts.frost = 6;
    S.dex.corgi = { seen: 1, served: 22, lv: 3 };
    S.owned.collar = true;
    S.themes = ['classic', 'night'];
    S.theme = 'night';
    S.achv.first = 1;
    S.totalServed = 913;
    persist();
    return { day: S.day, coins: S.coins };
  });

  await page.waitForTimeout(800);
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(2000);

  const after = await page.evaluate(() => ({
    day: typeof S !== 'undefined' ? S.day : null,
    coins: typeof S !== 'undefined' ? S.coins : null,
    bones: typeof S !== 'undefined' ? S.bones : null,
    best: typeof S !== 'undefined' ? S.best : null,
    upPrep: typeof S !== 'undefined' ? (S.up && S.up.prep) : null,
    frost: typeof S !== 'undefined' ? (S.boosts && S.boosts.frost) : null,
    dexCorgiLv: typeof S !== 'undefined' ? (S.dex && S.dex.corgi && S.dex.corgi.lv) : null,
    collar: typeof S !== 'undefined' ? !!(S.owned && S.owned.collar) : null,
    theme: typeof S !== 'undefined' ? S.theme : null,
    themeCount: typeof S !== 'undefined' ? (S.themes || []).length : null,
    totalServed: typeof S !== 'undefined' ? S.totalServed : null,
    lsKeys: Object.keys(window.localStorage),
  }));

  const checks = {
    day: after.day === 37,
    coins: after.coins === 4242,
    bones: after.bones === 17,
    best: after.best === 41,
    upgrades: after.upPrep === 3,
    boosts: after.frost === 6,
    dogdex: after.dexCorgiLv === 3,
    entitlements: after.collar === true,
    themes: after.theme === 'night' && after.themeCount === 2,
    counters: after.totalServed === 913,
  };
  const failed = Object.keys(checks).filter(k => !checks[k]);
  const persisted = failed.length === 0;

  console.log(JSON.stringify({ api, wrote, afterReload: after, checks, PERSISTED: persisted }, null, 2));
  if (!persisted) console.log('\nfields that did not survive a reload: ' + failed.join(', '));

  await browser.close();
  server.close();
  process.exit(persisted ? 0 : 1);
})();
