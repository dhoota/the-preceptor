// Screenshot harness for design work.
//
// The game references absolute CDN URLs (scripts/bundle-assets.sh rewrites them
// to relative paths only at CI build time). Rather than mutate the committed
// file, this intercepts those requests and serves the copies in www/assets,
// which are gitignored. Captures are therefore deterministic and offline.
//
//   node scripts/shoot.js <label>        e.g. `before`, `after`
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..', 'www');
const OUT = path.join(__dirname, '..', '.design', 'shots');
const LABEL = process.argv[2] || 'shot';
const PORT = 8390;
const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/';

// Content types matter here: the display face is the point of the capture, and
// a woff2 served without one is a font the browser may decline to use.
const TYPES = { '.html': 'text/html', '.woff2': 'font/woff2', '.png': 'image/png',
                '.svg': 'image/svg+xml', '.js': 'text/javascript', '.css': 'text/css' };
const server = http.createServer((q, s) => {
  const rel = q.url === '/' ? 'index.html' : q.url.split('?')[0];
  const f = path.join(ROOT, rel);
  fs.readFile(f, (e, b) => {
    if (e) { s.writeHead(404); s.end(); return; }
    s.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    s.end(b);
  });
});

// Each scene sets up game state, then names the file. Kept declarative so the
// same list produces before and after captures with nothing else changing.
const SCENES = [
  { id: '01-title', setup: () => { closeOverlay(); go('title'); } },
  { id: '02-daycard', setup: () => { closeOverlay(); S.day = 26; S.hearts = 5; S.streak = 4; showDayCard(); } },
  { id: '03-story',  setup: () => { closeOverlay(); S.day = 74; S.storySeen = {}; showStory(74, function(){}); } },
  { id: '04-meal',   setup: () => {
      closeOverlay(); S.day = 42; S.hearts = 5; S.coins = 8600; S.bones = 34; S.up.yard = 3;
      startPlay(); if (window.timer) { clearInterval(window.timer); window.timer = null; }
      D.clock = Math.round(D.clockMax * 0.62);
      D.dogs.forEach((d, i) => { d.t = d.tmax * (0.85 - i * 0.13); });
      D.combo = 5; D.mult = 1.25; D.care = 82;
      S.boosts.frost = 3; S.boosts.whistle = 1; S.boosts.clock = 2;
      paintPlay();
    } },
  { id: '05-walk',   setup: () => {
      closeOverlay(); S.day = 42; S.hearts = 5; S.up.yard = 3; startPlay();
      if (window.timer) { clearInterval(window.timer); window.timer = null; }
      D.dogs.forEach((d, i) => { if (i < D.dogs.length - 1) deliver(d.want, i); });
      if (window.timer) { clearInterval(window.timer); window.timer = null; }
      if (D.phase === 'feed') { D.dogs.forEach((d,i) => { if (d.state === 'wait') deliver(d.want, i); }); }
      if (window.timer) { clearInterval(window.timer); window.timer = null; }
      D.clock = Math.round(D.clockMax * 0.55); D.care = 88; paintPlay();
    } },
  { id: '06-bed',    setup: () => {
      closeOverlay(); S.day = 42; S.hearts = 5; S.up.yard = 3; startPlay();
      const clear = () => { if (window.timer) { clearInterval(window.timer); window.timer = null; } };
      clear();
      for (let p = 0; p < 2; p++) { D.dogs.forEach((d,i) => { if (d.state === 'wait') deliver(d.want, i); }); clear(); }
      D.dogs.forEach((d,i) => { if (i < 2 && d.state === 'wait') deliver(d.want, i); }); clear();
      D.clock = Math.round(D.clockMax * 0.44); D.care = 76; paintPlay();
    } },
  { id: '07-dayend', setup: () => {
      closeOverlay(); S.day = 42; S.hearts = 5; startPlay();
      if (window.timer) { clearInterval(window.timer); window.timer = null; }
      D.served = D.dogs.length; D.walked = D.dogs.length; D.slept = D.dogs.length;
      D.misses = 0; D.wrongs = 1; D.coinsEarned = 1840; D.bonesEarned = 3; D.accidents = 0;
      D.done = false;
      endDay(false);
      // Drain the achievement queue so this scene captures the ledger itself
      // rather than whichever reward happens to fire first.
      if (window.pendingRewards) pendingRewards.length = 0;
      closeOverlay(); showEnd();
    } },
  { id: '08-dogdex', setup: () => {
      closeOverlay(); S.day = 90;
      BREEDS.slice(0, 18).forEach((b, i) => { S.dex[b.k] = { seen: 1, served: 6 + i * 3, lv: 1 + (i % 5) }; });
      go('dex');
    } },
  { id: '09-shop',   setup: () => {
      closeOverlay(); S.coins = 24000; S.bones = 180; S.up.prep = 3; S.up.jar = 1;
      S.boosts.frost = 4; S.boosts.clock = 2;
      go('shop'); shopTab = 'U'; paintShop();
    } },
  { id: '10-boosts', setup: () => { closeOverlay(); go('shop'); shopTab = 'B'; paintShop(); } },
  { id: '11-settings', setup: () => {
      closeOverlay(); S.best = 90; S.totalServed = 1420; S.totalWalks = 410;
      S.perfectDays = 22; S.achv.first = 1; S.achv.fifty = 1; S.achv.walker = 1;
      go('title'); showSettings();
    } },
  { id: '12-reward', setup: () => {
      closeOverlay();
      showReward({ img: ART.trophy, title: 'Good Walker',
                   body: 'Complete a hundred walks.  +10 bones', btn: 'Nice' }, null);
    } },
];

const VIEWS = [
  { name: 'phone',   w: 393,  h: 852 },
  { name: 'desktop', w: 1440, h: 900 },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => server.listen(PORT, r));
  const br = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
  const errors = [];
  let shots = 0;

  for (const v of VIEWS) {
    const ctx = await br.newContext({
      viewport: { width: v.w, height: v.h },
      deviceScaleFactor: 2,
      hasTouch: v.name === 'phone', isMobile: v.name === 'phone',
    });
    // Serve every CDN asset from the local copy.
    await ctx.route(u => u.href.startsWith(CDN), route => {
      const f = path.join(ROOT, 'assets', route.request().url().split('/').pop());
      if (fs.existsSync(f)) route.fulfill({ status: 200, contentType: 'image/png', body: fs.readFileSync(f) });
      else route.abort();
    });
    const page = await ctx.newPage();
    page.on('pageerror', e => errors.push(`${v.name}: ${e.message}`));

    for (const sc of SCENES) {
      await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'load' });
      await page.waitForTimeout(700);
      try {
        await page.evaluate(`(${sc.setup.toString()})()`);
      } catch (e) { errors.push(`${v.name}/${sc.id}: setup threw ${e.message}`); }
      await page.waitForTimeout(650);
      // Freeze any running interval so the capture is stable.
      await page.evaluate(() => { if (window.timer) { clearInterval(window.timer); window.timer = null; } });
      await page.evaluate(() => Promise.all(
        Array.from(document.images).filter(i => !i.complete).map(i =>
          new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 2500); }))));
      await page.waitForTimeout(250);
      await page.screenshot({ path: path.join(OUT, `${LABEL}-${v.name}-${sc.id}.png`) });
      shots++;
    }
    await ctx.close();
  }

  await br.close(); server.close();
  console.log(JSON.stringify({ label: LABEL, shots, errors }, null, 1));
  process.exit(errors.length ? 1 : 0);
})();
