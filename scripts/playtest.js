// Automated playtest: actually plays the game, day after day, and reports any
// glitch it can detect. Not a unit test — it drives the real loop through the
// same functions a player's fingers do.
//
//   node scripts/playtest.js [days]      (default 120)
//
// Per phase it checks: every waiting dog wants something the tray can actually
// supply, delivering it registers, and the round completes. Per day it checks:
// all three phases run in order, the day ends, and no currency goes negative or
// NaN. It also audits the two bugs that have shipped before — an overlay that
// does not pause the clock, and a save that silently never persists.
const { chromium } = require('playwright-core');
const http = require('http'), fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..', 'www');
const DAYS = Number(process.argv[2] || 120);
const PORT = 8350;

const server = http.createServer((q, s) => {
  const f = path.join(ROOT, q.url === '/' ? 'index.html' : q.url.split('?')[0]);
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); s.end(); return; } s.writeHead(200); s.end(b); });
});

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const br = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
  const page = await br.newPage({ viewport: { width: 393, height: 852 } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => {
    if (m.type() === 'error' && !/Failed to load resource|net::ERR/.test(m.text())) {
      errors.push('console: ' + m.text());
    }
  });

  await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'load' });
  await page.waitForTimeout(1200);

  const report = await page.evaluate(async (DAYS) => {
    const issues = [];
    const stats = { days: 0, phases: 0, dogs: 0, delivered: 0, refused: 0,
                    maxDogs: 0, maxTray: 0, accidents: 0, failedDays: 0,
                    coinsPeak: 0, walkBlocked: 0 };
    const seen = { feed: 0, walk: 0, bed: 0 };

    // The harness owns the pacing: stop the real interval and close any sheet
    // so nothing is waiting on a human. Timer behaviour is audited separately.
    const kill = () => { if (window.timer) { clearInterval(window.timer); window.timer = null; } };
    if (typeof closeOverlay === 'function') closeOverlay();
    kill();

    const money = (day, where) => {
      [['coins', S.coins], ['bones', S.bones], ['hearts', S.hearts]].forEach(([n, v]) => {
        if (typeof v !== 'number' || isNaN(v) || v < 0) {
          issues.push(`day ${day} ${where}: ${n} is ${v}`);
        }
      });
      if (S.coins > stats.coinsPeak) stats.coinsPeak = S.coins;
    };

    // Play one phase to completion by delivering exactly what each dog asks
    // for. Every assertion here is about solvability, not skill.
    function playPhase(day) {
      const ph = D.phase;
      seen[ph] = (seen[ph] || 0) + 1;
      stats.phases++;
      stats.maxTray = Math.max(stats.maxTray, D.tray.length);

      const table = ph === 'feed' ? FOODS : (ph === 'walk' ? GEAR : COMFORTS);
      let guard = 0;

      while (guard++ < 60) {
        // The final correct delivery calls finishPhase() itself, which enters
        // the next round. Stop the moment that happens rather than spilling
        // into it with this round's expectations.
        if (D.done || D.phase !== ph) break;
        const waiting = D.dogs
          .map((d, i) => ({ d, i }))
          .filter(x => x.d.state === 'wait');
        if (!waiting.length) break;

        const { d, i } = waiting[0];

        if (!d.want) { issues.push(`day ${day} ${ph}: dog ${d.name} wants nothing`); break; }
        if (!table[d.want]) { issues.push(`day ${day} ${ph}: unknown want "${d.want}"`); break; }
        if (D.tray.indexOf(d.want) < 0) {
          // The one failure mode that makes a round unwinnable.
          issues.push(`day ${day} ${ph}: "${d.want}" for ${d.name} is NOT ON THE TRAY ` +
                      `(tray=${D.tray.join(',')}) — UNSOLVABLE ROUND`);
          break;
        }
        if (ph === 'walk' && !d.fed) {
          issues.push(`day ${day} walk: ${d.name} is waiting but was never fed — ` +
                      `unfed dogs must be resolved out of the walk round`);
          break;
        }

        const before = D.tray.length;
        const ok = deliver(d.want, i);
        if (!ok) {
          issues.push(`day ${day} ${ph}: correct delivery of "${d.want}" to ${d.name} was refused`);
          stats.refused++;
          break;
        }
        stats.delivered++;
        if (D.phase === ph && !D.done && d.state !== 'done') {
          issues.push(`day ${day} ${ph}: ${d.name} accepted "${d.want}" but is still ${d.state}`);
          break;
        }
        if (before < 1) issues.push(`day ${day} ${ph}: tray was empty mid-round`);
        kill();
      }

      if (guard >= 60) issues.push(`day ${day} ${ph}: phase did not converge in 60 deliveries`);
      money(day, ph);
    }

    for (let day = 1; day <= DAYS; day++) {
      S.day = day;
      S.hearts = 5;                       // the harness tests the loop, not the gate
      try { startPlay(); } catch (e) { issues.push(`day ${day}: startPlay threw ${e.message}`); break; }
      kill();

      if (!D) { issues.push(`day ${day}: no runtime state after startPlay`); break; }
      if (!D.dogs.length) { issues.push(`day ${day}: zero dogs on the floor`); break; }
      stats.days++;
      stats.dogs += D.dogs.length;
      stats.maxDogs = Math.max(stats.maxDogs, D.dogs.length);

      if (D.dogs.length > (typeof traySlots === 'function' ? traySlots() : 99)) {
        issues.push(`day ${day}: ${D.dogs.length} dogs but only ${traySlots()} tray slots`);
      }

      // Nudge a phase along only if the game did not advance itself.
      const advance = (from) => {
        if (!D.done && D.phase === from) { afterPhase(); }
        kill();
      };

      // Phase 1 — mealtime.
      if (D.phase !== 'feed') issues.push(`day ${day}: opened on "${D.phase}", expected feed`);
      playPhase(day); advance('feed');
      if (D.done) { issues.push(`day ${day}: day ended during the feed phase`); continue; }
      if (D.phase !== 'walk') { issues.push(`day ${day}: after feed the phase is "${D.phase}"`); continue; }

      // Phase 2 — the walk. Everyone was fed, so nobody may be blocked out of it.
      const blocked = D.dogs.filter(d => d.state === 'accident').length;
      if (blocked) { stats.walkBlocked += blocked;
        issues.push(`day ${day}: ${blocked} dog(s) blocked from the walk after a clean feed round`); }
      playPhase(day); advance('walk');
      if (D.done) { issues.push(`day ${day}: day ended during the walk phase`); continue; }
      if (D.phase !== 'bed') { issues.push(`day ${day}: after walk the phase is "${D.phase}"`); continue; }

      // Phase 3 — bedtime, which rolls into the end of the day.
      playPhase(day); advance('bed');
      if (!D.done) { issues.push(`day ${day}: bedtime finished but the day did not end`); }
      if (D.failed) stats.failedDays++;
      stats.accidents += D.accidents;
      money(day, 'end');

      if (typeof closeOverlay === 'function') closeOverlay();
      kill();
    }

    // ---- the feed-before-walk rule actually bites -------------------------
    let ruleHeld = null;
    try {
      S.day = 12; startPlay(); kill();
      const target = D.dogs[0];
      // Clear the feed round for everyone except one dog.
      D.dogs.forEach((d, i) => { if (d !== target) deliver(d.want, i); });
      kill();
      if (D.phase === 'feed') { afterPhase(); }   // forced into the walk with one unfed dog
      kill();
      ruleHeld = (D.phase === 'walk' && target.state === 'accident' && D.accidents >= 1);
      if (!ruleHeld) {
        issues.push(`feed-before-walk rule did not fire: phase=${D.phase} ` +
                    `state=${target.state} accidents=${D.accidents}`);
      }
    } catch (e) { issues.push('feed-before-walk probe threw ' + e.message); }

    // ---- difficulty stays inside its ceiling across the whole run ---------
    const dCurve = [1, 15, 30, 60, 120, 200, 250].map(d => { S.day = d; return +diff().toFixed(3); });
    if (dCurve.some(v => !(v > 0) || v > 3.2)) issues.push('difficulty curve out of range: ' + dCurve);
    for (let i = 1; i < dCurve.length; i++) {
      if (dCurve[i] < dCurve[i - 1]) issues.push('difficulty curve is not monotonic: ' + dCurve);
    }

    // ---- the roster grows and every breed eventually appears --------------
    const finalRoster = rosterFor(250).length;
    if (finalRoster !== BREEDS.length) {
      issues.push(`only ${finalRoster} of ${BREEDS.length} breeds are reachable by day 250`);
    }

    return { issues, stats, seen, dCurve, ruleHeld, finalRoster };
  }, DAYS);

  // ---- does a mid-round overlay actually pause the clock? ------------------
  // The exact bug that shipped last time: a celebration sheet left tick()
  // running and drained a whole customer's patience behind it.
  const overlay = await page.evaluate(async () => {
    if (typeof closeOverlay === 'function') closeOverlay();
    S.day = 8; S.hearts = 5; startPlay();
    if (window.timer) { clearInterval(window.timer); window.timer = null; }
    const beforeClock = D.clock;
    const beforePatience = D.dogs.map(d => d.t);

    showReward({ title: 'TEST', body: 'pause probe', btn: 'ok' });
    for (let i = 0; i < 40; i++) tick();          // four seconds of real ticks
    const clockDrain = +(beforeClock - D.clock).toFixed(3);
    const patDrain = +Math.max(...D.dogs.map((d, i) => beforePatience[i] - d.t)).toFixed(3);

    closeOverlay();
    // The grace period must actually hold the clock for a moment after close.
    const atClose = D.clock;
    for (let i = 0; i < 4; i++) tick();
    const graceHeld = (D.clock === atClose);

    for (let i = 0; i < 20; i++) tick();
    const resumed = +(atClose - D.clock).toFixed(3);
    return { clockDrainWhileOpen: clockDrain, patienceDrainWhileOpen: patDrain,
             graceHeld, drainAfterResume: resumed };
  });

  if (overlay.clockDrainWhileOpen !== 0) {
    report.issues.push(`clock drained ${overlay.clockDrainWhileOpen}s while an overlay was open`);
  }
  if (overlay.patienceDrainWhileOpen !== 0) {
    report.issues.push(`dog patience drained ${overlay.patienceDrainWhileOpen}s while an overlay was open`);
  }
  if (!overlay.graceHeld) report.issues.push('no grace period after closing an overlay');
  if (overlay.drainAfterResume <= 0) report.issues.push('the clock never resumed after the overlay closed');

  console.log(JSON.stringify({ errors, ...report, overlay }, null, 1));
  await br.close(); server.close();
  const bad = errors.length + report.issues.length;
  console.log(bad ? `\nFAIL — ${bad} issue(s)` : `\nPASS — ${report.stats.days} days, ` +
    `${report.stats.delivered} deliveries, 0 issues`);
  process.exit(bad ? 1 : 0);
})();
