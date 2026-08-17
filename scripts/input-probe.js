// Real-input probe. Everything else drives the game by calling functions;
// this one uses actual synthesised taps and drags, which is the only way to
// catch a delivery path that is logically correct but unreachable with a finger.
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', 'www');
const server = http.createServer((q,s)=>{
  const f = path.join(ROOT, q.url==='/'?'index.html':q.url.split('?')[0]);
  fs.readFile(f,(e,b)=>{ if(e){s.writeHead(404);s.end();return;} s.writeHead(200);s.end(b); });
});
(async()=>{
  await new Promise(r=>server.listen(8370,r));
  const br = await chromium.launch({executablePath:process.env.CHROME_PATH});
  const ctx = await br.newContext({viewport:{width:393,height:852}, hasTouch:true, isMobile:true});
  const page = await ctx.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push('pageerror: '+e.message));
  await page.goto('http://127.0.0.1:8370/',{waitUntil:'load'});
  await page.waitForTimeout(1200);
  const issues=[], notes={};

  // Get into a day, then freeze the clock so timing cannot confound the test.
  await page.evaluate(()=>{ if(typeof closeOverlay==='function') closeOverlay();
    S.day=100; S.hearts=5; S.up.yard=5; startPlay();
    if(window.timer){clearInterval(window.timer);window.timer=null;}
    D.clock=9999; D.clockMax=9999; D.dogs.forEach(d=>{d.t=9999;d.tmax=9999;}); });
  await page.waitForTimeout(400);

  notes.dogsOnFloor = await page.evaluate(()=>D.dogs.map(d=>d.name));
  notes.dutchPresent = await page.evaluate(()=>D.dogs.some(d=>d.k==='dutch'));

  // ---------- 1. TAP-THEN-TAP, the way the hint text tells you to ----------
  let r = await page.evaluate(()=>({want:D.dogs[0].want, name:D.dogs[0].name, served:D.served}));
  await page.locator(`#tray .item[data-k="${r.want}"]`).tap();
  await page.waitForTimeout(150);
  const lifted = await page.evaluate(()=>D.sel);
  if (lifted !== r.want) issues.push(`tapping a bowl did not lift it (D.sel=${lifted}, expected ${r.want})`);

  await page.locator('.dog[data-i="0"]').tap();
  await page.waitForTimeout(200);
  let after = await page.evaluate(()=>({state:D.dogs[0].state, served:D.served, wrongs:D.wrongs}));
  notes.tapThenTap = after;
  if (after.state !== 'done') issues.push(`TAP-THEN-TAP FAILED: tapped bowl "${r.want}" then tapped ${r.name}, dog is still "${after.state}"`);
  if (after.wrongs > 0) issues.push(`tap-then-tap registered ${after.wrongs} wrong deliveries`);

  // ---------- 2. DRAG from the tray onto a dog ----------
  await page.evaluate(()=>{ if(window.timer){clearInterval(window.timer);window.timer=null;}
    D.clock=9999; D.dogs.forEach(d=>{d.t=9999;d.tmax=9999;}); });
  r = await page.evaluate(()=>{ const i=D.dogs.findIndex(d=>d.state==='wait'); return {i, want:D.dogs[i].want}; });
  if (r.i >= 0) {
    const servedBefore = await page.evaluate(()=>D.served);
    const src = await page.locator(`#tray .item[data-k="${r.want}"]`).boundingBox();
    const dst = await page.locator(`.dog[data-i="${r.i}"]`).boundingBox();
    await page.mouse.move(src.x+src.width/2, src.y+src.height/2);
    await page.mouse.down();
    await page.mouse.move(dst.x+dst.width/2, dst.y+dst.height/2, {steps:12});
    await page.mouse.up();
    await page.waitForTimeout(200);
    const d = await page.evaluate((i)=>({state:D.dogs[i].state, wrongs:D.wrongs, served:D.served, phase:D.phase}), r.i);
    notes.drag = d;
    if (d.served !== servedBefore + 1) issues.push(`DRAG FAILED: dragged "${r.want}" onto dog ${r.i} and nothing was served (state "${d.state}", phase ${d.phase})`);
    if (d.wrongs > 0) issues.push(`the drag counted ${d.wrongs} wrong deliveries — double-delivery on a mouse pointer`);
  }

  // ---------- 3. A WRONG item must cost exactly one penalty ----------
  await page.evaluate(()=>{ S.day=100; S.up.yard=5; startPlay();
    if(window.timer){clearInterval(window.timer);window.timer=null;}
    D.clock=9999; D.dogs.forEach(d=>{d.t=9999;d.tmax=9999;}); D.wrongs=0; D.care=100; });
  const wrongKey = await page.evaluate(()=>D.tray.find(k=>k!==D.dogs[0].want));
  if (wrongKey) {
    const src = await page.locator(`#tray .item[data-k="${wrongKey}"]`).boundingBox();
    const dst = await page.locator('.dog[data-i="0"]').boundingBox();
    await page.mouse.move(src.x+src.width/2, src.y+src.height/2);
    await page.mouse.down();
    await page.mouse.move(dst.x+dst.width/2, dst.y+dst.height/2, {steps:12});
    await page.mouse.up();
    await page.waitForTimeout(200);
    const w = await page.evaluate(()=>({wrongs:D.wrongs, care:D.care}));
    notes.wrongDrag = w;
    if (w.wrongs !== 1) issues.push(`a single wrong drag counted ${w.wrongs} mistakes — should be exactly 1`);
    if (w.care !== 95) issues.push(`a single wrong drag cost ${100-w.care} care — should be 5`);
  }

  // ---------- 4. Android Chrome force-dark ----------
  const cs = await page.evaluate(()=>getComputedStyle(document.documentElement).colorScheme);
  notes.colorScheme = cs;
  if (!cs || cs === 'normal') issues.push('no color-scheme declared — Android Chrome will force-dark the whole art direction');

  // ---------- 5. Dutch is the main character; he works every day ----------
  const dutchDays = await page.evaluate(()=>{
    const missing=[];
    for (let d=1; d<=60; d++){ S.day=d; newDay();
      if(window.timer){clearInterval(window.timer);window.timer=null;}
      if(!D.dogs.some(x=>x.k==='dutch')) missing.push(d); }
    return missing;
  });
  notes.daysWithoutDutch = dutchDays.length;
  if (dutchDays.length) issues.push(`Dutch is absent on ${dutchDays.length} of the first 60 days (e.g. ${dutchDays.slice(0,5)}) — he is the main character`);

  // ---------- 6. Tray drags must not be stealable by the scroller ----------
  const ta = await page.evaluate(()=>{
    const it=document.querySelector('#tray .item');
    return it ? getComputedStyle(it).touchAction : null;
  });
  notes.itemTouchAction = ta;
  if (ta !== 'none') issues.push(`tray items have touch-action:${ta} — on touch the browser claims the drag as a scroll and fires pointercancel, so dragging a bowl onto a dog does nothing`);

  console.log(JSON.stringify({errors, issues, notes}, null, 1));
  await br.close(); server.close();
  const bad = errors.length + issues.length;
  console.log(bad ? `\nFAIL — ${bad} issue(s)` : '\nPASS — taps, drags and penalties all behave');
  process.exit(bad?1:0);
})();
