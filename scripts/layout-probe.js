// Layout probe: render the game at every size Apple will review it on and
// report overflow. Catches a phone-only layout breaking on iPad before a
// reviewer sees it.
//
// Run: node scripts/layout-probe.js
const { chromium } = require('playwright-core');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'www');
const CHROME = process.env.CHROME_PATH || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const SIZES = [
  { name: 'iPhone SE',            w: 375,  h: 667 },
  { name: 'iPhone 15 Pro',        w: 393,  h: 852 },
  { name: 'iPhone 15 Pro Max',    w: 430,  h: 932 },
  { name: 'iPad mini portrait',   w: 744,  h: 1133 },
  { name: 'iPad Pro 11 portrait', w: 834,  h: 1194 },
  { name: 'iPad Pro 13 portrait', w: 1032, h: 1376 },
  { name: 'iPad Pro 11 landscape', w: 1194, h: 834 },
  { name: 'iPad Pro 13 landscape', w: 1376, h: 1032 },
  { name: 'iPad Split View 1/2',  w: 507,  h: 1133 },
];

const server = http.createServer((req, res) => {
  const f = path.join(ROOT, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  fs.readFile(f, (err, buf) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': f.endsWith('.html') ? 'text/html' : 'application/octet-stream' });
    res.end(buf);
  });
});

(async () => {
  await new Promise(r => server.listen(8202, r));
  const browser = await chromium.launch({ executablePath: CHROME });
  const rows = [];

  for (const s of SIZES) {
    const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h } });
    const page = await ctx.newPage();
    await page.goto('http://127.0.0.1:8202/', { waitUntil: 'load' });
    await page.waitForTimeout(900);

    // Enter the play HUD at a busy day, which is the densest screen the game
    // has: six dog cards, a full tray and the boost rail all at once.
    await page.evaluate(() => {
      try {
        if (typeof S === 'undefined') return;
        if (typeof closeOverlay === 'function') closeOverlay();
        S.day = 140; S.hearts = 5; S.up.yard = 5; S.owned.deluxe = true;
        startPlay();
        if (window.timer) { clearInterval(window.timer); window.timer = null; }
      } catch (e) {}
    });
    await page.waitForTimeout(700);

    const r = await page.evaluate(() => {
      const de = document.documentElement;
      const overflowX = de.scrollWidth - de.clientWidth;
      const overflowY = de.scrollHeight - de.clientHeight;
      // Is any key play element pushed outside the viewport?
      const clipped = [];
      ['topbar', 'dogZone', 'trayZone', 'tray', 'clockWrap', 'boostRail'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) { clipped.push(id + ' MISSING'); return; }
        const b = el.getBoundingClientRect();
        // 2px of tolerance: sub-pixel rounding on a fractional-DPR viewport is
        // not a layout bug and flagging it just trains you to ignore the probe.
        if (b.bottom > window.innerHeight + 2 || b.right > window.innerWidth + 2 || b.top < -2) {
          clipped.push(id + ' ' + Math.round(b.top) + '..' + Math.round(b.bottom));
        }
      });
      const tray = document.getElementById('trayZone');
      // A dog card wider than its column is the classic cause of a page that
      // scrolls sideways on a small phone.
      let widest = 0;
      document.querySelectorAll('.dog').forEach(n => {
        widest = Math.max(widest, Math.round(n.getBoundingClientRect().width));
      });
      return {
        overflowX, overflowY, clipped,
        dogs: document.querySelectorAll('.dog').length,
        widestDog: widest,
        trayBottom: tray ? Math.round(tray.getBoundingClientRect().bottom) : null,
        viewportH: window.innerHeight,
      };
    });

    rows.push({ size: `${s.name} ${s.w}x${s.h}`, ...r });
    await ctx.close();
  }

  const bad = rows.filter(r => r.overflowX > 0 || r.clipped.length);
  console.log(JSON.stringify(rows, null, 2));
  console.log('\nviewports with horizontal overflow or clipped play elements:', bad.length);
  await browser.close();
  server.close();
  process.exit(bad.length ? 1 : 0);
})();
