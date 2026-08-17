// Smoke test for every screen the playtest does not touch. playtest.js drives
// the three play rounds; this walks the menus, opens every sheet, exercises the
// shop tabs and the reset dialog, and fails on any JS error or dead control.
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join('/home/user/the-preceptor', 'www');
const server = http.createServer((q,s)=>{
  const f = path.join(ROOT, q.url==='/'?'index.html':q.url.split('?')[0]);
  fs.readFile(f,(e,b)=>{ if(e){s.writeHead(404);s.end();return;} s.writeHead(200);s.end(b); });
});
(async()=>{
  await new Promise(r=>server.listen(8360,r));
  const br = await chromium.launch({executablePath:process.env.CHROME_PATH});
  const page = await br.newPage({viewport:{width:393,height:852}});
  const errors=[];
  page.on('pageerror',e=>errors.push('pageerror: '+e.message));
  page.on('console',m=>{ if(m.type()==='error' && !/Failed to load resource|net::ERR/.test(m.text())) errors.push('console: '+m.text()); });
  await page.goto('http://127.0.0.1:8360/',{waitUntil:'load'});
  await page.waitForTimeout(1200);

  const r = await page.evaluate(async () => {
    const issues=[], seen={};
    const vis = sel => { const n=document.querySelector(sel); return !!n && getComputedStyle(n).display!=='none'; };
    if (typeof closeOverlay==='function') closeOverlay();

    // Give the player something to look at on every screen.
    S.coins=50000; S.bones=400; S.day=90; S.best=90; S.hearts=5;
    BREEDS.slice(0,20).forEach((b,i)=>{ S.dex[b.k]={seen:1,served:9+i,lv:1+(i%5)}; });
    S.up.prep=3; S.boosts.frost=4; S.themes=['classic','night','meadow'];
    S.achv.first=1; S.achv.fifty=1;

    // ---- Dogdex ----
    go('dex');
    seen.dexCards = document.querySelectorAll('.dexCard').length;
    if (seen.dexCards !== BREEDS.length) issues.push(`Dogdex shows ${seen.dexCards} cards, expected ${BREEDS.length}`);
    seen.dexLocked = document.querySelectorAll('.dexCard.locked').length;
    if (seen.dexLocked !== BREEDS.length - 20) issues.push(`Dogdex locked count is ${seen.dexLocked}, expected ${BREEDS.length-20}`);
    // Open a known card.
    const card = document.querySelectorAll('.dexCard')[0];
    if (!card.onclick) issues.push('an unlocked Dogdex card has no click handler');
    else { card.onclick(); if(!vis('#rewardScr')) issues.push('Dogdex card did not open a sheet'); closeOverlay(); }

    // ---- Shop, all three tabs ----
    go('shop');
    if (vis('#tabP')) issues.push('the Bones tab is VISIBLE with a placeholder key — v1.0 must have no purchase surface');
    ['U','B'].forEach(t=>{
      document.getElementById('tab'+t).onclick();
      const rows = document.querySelectorAll('#shopList .shopRow').length;
      seen['tab'+t+'Rows'] = rows;
      if (!rows) issues.push(`shop tab ${t} rendered zero rows`);
      document.querySelectorAll('#shopList .buy').forEach(b=>{ if(!b.onclick) issues.push(`a buy button on tab ${t} has no handler`); });
    });
    // Buying an upgrade must actually charge and level up.
    document.getElementById('tabU').onclick();
    const beforeCoins = S.coins, beforeLv = (S.up.gate||0);
    const gateRow = Array.from(document.querySelectorAll('#shopList .shopRow'))
      .find(n => n.querySelector('.tt').textContent === 'Wide Gate');
    if (!gateRow) issues.push('Wide Gate upgrade row missing');
    else { gateRow.querySelector('.buy').onclick();
      if ((S.up.gate||0) !== beforeLv+1) issues.push('buying an upgrade did not raise its level');
      if (S.coins >= beforeCoins) issues.push('buying an upgrade did not charge coins'); }
    // Forcing the hidden tab open must not reach a storefront. Two separate
    // things to prove: paintShop falls back off the hidden tab, and paintStore
    // itself refuses to render products even when called directly.
    shopTab='P'; paintShop();
    if (shopTab !== 'U') issues.push('paintShop did not fall back off the hidden Bones tab');
    const probe = document.createElement('div');
    paintStore(probe);
    seen.forcedStoreRows = probe.querySelectorAll('.shopRow').length;
    if (seen.forcedStoreRows > 0) issues.push('paintStore rendered purchasable rows with no store configured');
    if (!probe.querySelector('.emptyNote')) issues.push('paintStore did not render the unavailable note');
    if (probe.querySelector('[data-restore]')) issues.push('a Restore Purchases button rendered with no store configured');
    shopTab='U'; paintShop();

    // ---- Settings + reset dialog ----
    showSettings();
    if(!vis('#setScr')) issues.push('settings did not open');
    const btns = Array.from(document.querySelectorAll('#setBox .btn')).map(b=>b.textContent);
    seen.settingsButtons = btns;
    if(!btns.some(t=>/Reset progress/.test(t))) issues.push('no Reset progress control — the privacy policy promises one');
    if(btns.some(t=>/Restore Purchases/.test(t))) issues.push('Restore Purchases is showing with no store configured');
    confirmReset();
    if(!vis('#rewardScr')) issues.push('reset confirmation did not open');
    const alt = document.querySelector('#rewardBox .btn.ghost');
    if(!alt || !/Erase/.test(alt.textContent)) issues.push('reset dialog has no erase option');
    const prim = document.querySelector('#rewardBox .btn.gold');
    if(!prim || !/Keep/.test(prim.textContent)) issues.push('the safe option is not the primary button on the reset dialog');
    prim.onclick();  // keep progress
    if(S.coins === 0) issues.push('"Keep my progress" wiped progress');

    // ---- Day card + a story beat ----
    go('title');
    S.day = 74; S.storySeen = {};
    showDayCard();
    if(!vis('#dayScr')) issues.push('day card did not open');
    if(!/Day 74/.test(document.getElementById('dayBox').textContent)) issues.push('day card shows the wrong day');
    closeOverlay();
    showStory(74, function(){ seen.storyDone = true; });
    if(!vis('#storyScr')) issues.push('story beat did not open');
    const st = document.getElementById('storyBox').textContent;
    if(!/barrel/.test(st)) issues.push('day 74 story beat is not the Bruno barrel beat');
    document.querySelector('#storyBox .btn').onclick();
    if(!seen.storyDone) issues.push('story continue button did not fire its callback');
    if(!S.storySeen[74]) issues.push('story beat was not marked seen — it will replay');

    // ---- overlayOpen must be false once everything is closed ----
    closeOverlay();
    if(overlayOpen) issues.push('overlayOpen is still true after closeOverlay — the clock would stay frozen');

    return {issues, seen};
  });

  console.log(JSON.stringify({errors, ...r}, null, 1));
  await br.close(); server.close();
  const bad = errors.length + r.issues.length;
  console.log(bad ? `\nFAIL — ${bad} issue(s)` : '\nPASS — every screen renders and behaves');
  process.exit(bad?1:0);
})();
