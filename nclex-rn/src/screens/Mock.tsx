import { useEffect, useMemo, useRef, useState } from "react";
import { Exhibit } from "@/components/Exhibit";
import { ItemCard } from "@/components/ItemPlayer";
import { EXAM } from "@/engine/blueprint";
import { RULE_TEXT, answer, checkTime, createMock, nextItem, type Mock, type MockBank, type Role } from "@/engine/mock";
import type { Band } from "@/engine/rasch";
import { KIND_NAMES, emptyResponse, isComplete } from "@/engine/score";
import type { Response } from "@/engine/types";
import { bandScale, caseTabsAt, hms, toAnswered } from "@/engine/ui";
import { canOpenMock } from "@/lib/access";
import type { Go } from "../routes";
import { useApp } from "../state";

export const BAND_LABEL: Record<Band, string> = {
  above: "Above the passing standard",
  near: "Near the passing standard",
  below: "Below the passing standard",
};

const BAND_CLASS: Record<Band, string> = { above: "pass", near: "borderline", below: "fail" };

const ROLE_LABEL: Record<Role, string> = { scored: "Scored", case: "Case study", pretest: "Unscored pretest" };

const HOURS = EXAM.durationMs / 3_600_000;

function Caveat() {
  return (
    <p className="caveat small">
      Item difficulties are rated by the writers and not calibrated on real candidates. So the band is a rough guide. It
      does not predict your NCLEX result.
    </p>
  );
}

/** Mock tab: how the exam works, resume, start, and past mocks. */
export function MockHome({ go }: { go: Go }) {
  const app = useApp();
  const bank: MockBank = { items: app.items, cases: app.cases };
  const unfinished = app.mocks.find((m) => !m.result);
  const done = app.mocks.filter((m) => m.result);
  const small = app.items.length < EXAM.maxItems || app.cases.length < EXAM.caseStudies;

  async function start() {
    const seed = (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;
    const m = createMock(bank, seed, Date.now(), `mock-${Date.now()}`);
    await app.saveMock(m);
    go({ name: "mockRun", id: m.id });
  }

  return (
    <>
      <div className="label">Adaptive mock</div>
      <h1 style={{ marginTop: 6 }}>Adaptive mock</h1>

      {unfinished && (
        <div className="duebar">
          <span>
            Unfinished mock. {unfinished.log.length} items answered, {hms(unfinished.elapsedMs)} used.
          </span>
          <button className="btn small" onClick={() => go({ name: "mockRun", id: unfinished.id })}>
            Resume
          </button>
        </div>
      )}

      <section className="section">
        <span className="label">How it works</span>
        <ul className="plain rules">
          <li>
            The mock follows the published structure of the exam. It gives {EXAM.minItems} to {EXAM.maxItems} items in up to{" "}
            {HOURS} hours.
          </li>
          <li>
            It mixes in {EXAM.caseStudies} case studies of {EXAM.itemsPerCase} items and {EXAM.pretest} unscored pretest items.
            You cannot tell which items are pretest items.
          </li>
          <li>The next item depends on your answers so far. Each item is shown once. There is no feedback and no going back.</li>
          <li>
            The clock counts time on screen only. It pauses when you leave the app or close it. Progress saves after every item.
          </li>
        </ul>
      </section>

      <section className="section">
        <span className="label">When it stops</span>
        <ul className="plain rules">
          <li>After the first {EXAM.minItems} items, once the 95% interval of your estimate is clear of the passing standard.</li>
          <li>At {EXAM.maxItems} items. The final estimate decides.</li>
          <li>
            At {HOURS} hours. Below {EXAM.minItems} items, running out of time counts as below the standard. Otherwise the final
            estimate decides.
          </li>
        </ul>
        <p className="muted small" style={{ marginTop: 10 }}>
          The result is a readiness band, not a pass or fail and not a chance of passing.
        </p>
        <Caveat />
      </section>

      <div className="actions">
        {!canOpenMock(app.access) ? (
          <button className="btn block" onClick={() => go({ name: "paywall" })}>
            The mock needs full access
          </button>
        ) : app.items.length === 0 ? (
          <p className="muted">The mock opens once the item bank has items. They are being written now.</p>
        ) : unfinished ? (
          <button className="btn block" onClick={() => go({ name: "mockRun", id: unfinished.id })}>
            Resume the mock
          </button>
        ) : (
          <button className="btn block" onClick={start}>
            Start a mock
          </button>
        )}
      </div>
      {small && app.items.length > 0 && canOpenMock(app.access) && (
        <p className="muted small" style={{ marginTop: 10 }}>
          The bank is still growing. It holds {app.items.length} stand-alone items and {app.cases.length} case studies. A mock may
          end early when it runs out of unseen items.
        </p>
      )}

      {done.length > 0 && (
        <section className="section">
          <span className="label">Past mocks</span>
          <MockList mocks={done} go={go} />
        </section>
      )}
    </>
  );
}

export function MockList({ mocks, go }: { mocks: Mock[]; go: Go }) {
  return (
    <ul className="sets">
      {mocks.map((m) => (
        <li key={m.id}>
          <button className="setrow" onClick={() => go({ name: "mockResult", id: m.id })}>
            <span className="t">
              {new Date(m.startedAt).toLocaleDateString()}
              <span className="muted small" style={{ display: "block", fontFamily: "var(--sans)" }}>
                {m.log.length} items, {hms(m.elapsedMs)}
              </span>
            </span>
            {m.result && <span className={`band ${BAND_CLASS[m.result.band]}`}>{m.result.band}</span>}
          </button>
        </li>
      ))}
    </ul>
  );
}

/** One item at a time. No feedback, no going back. */
export function MockRun({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const mock = app.mocks.find((m) => m.id === id);
  const bank: MockBank = useMemo(() => ({ items: app.items, cases: app.cases }), [app.items, app.cases]);
  const ref = useMemo(() => (mock ? nextItem(mock, bank) : null), [mock?.id, mock?.log.length, mock?.result, bank]); // eslint-disable-line react-hooks/exhaustive-deps
  const [resp, setResp] = useState<Response | null>(null);
  const [, tick] = useState(0);
  const [saving, setSaving] = useState(false);

  // Time on the current item. Only counts while the page is visible.
  const acc = useRef(0);
  const since = useRef<number | null>(document.visibilityState === "visible" ? performance.now() : null);
  const mockRef = useRef(mock);
  mockRef.current = mock;

  const running = () => acc.current + (since.current === null ? 0 : performance.now() - since.current);
  const take = () => {
    const ms = running();
    acc.current = 0;
    since.current = document.visibilityState === "visible" ? performance.now() : null;
    return Math.round(ms);
  };

  // Bank the time so far into the saved mock, so a closed app keeps it.
  const bankTime = () => {
    const m = mockRef.current;
    if (!m || m.result) return;
    const ms = take();
    if (ms > 0) app.saveMock({ ...m, elapsedMs: m.elapsedMs + ms });
  };

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "hidden") {
        bankTime();
        since.current = null;
      } else if (since.current === null) since.current = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);
    const t = setInterval(() => tick((x) => x + 1), 1000);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      clearInterval(t);
      bankTime();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const elapsed = mock ? mock.elapsedMs + running() : 0;

  // Time rule.
  useEffect(() => {
    if (!mock || mock.result || elapsed < EXAM.durationMs) return;
    const m = checkTime(mock, mock.elapsedMs + take());
    mockRef.current = m;
    app.saveMock(m).then(() => go({ name: "mockResult", id: m.id }));
  }, [elapsed >= EXAM.durationMs]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mock) return <p className="muted">Mock not found.</p>;
  if (mock.result)
    return (
      <>
        <p>This mock has ended.</p>
        <button className="btn" onClick={() => go({ name: "mockResult", id: mock.id })}>
          See the result
        </button>
      </>
    );
  if (!ref)
    return (
      <>
        <p className="muted">No unseen item is left for this mock. The bank may have changed since it started.</p>
        <button className="btn" onClick={() => go({ name: "mock" })}>
          Back to the mock
        </button>
      </>
    );

  const item = ref.item;
  const r = resp && resp.kind === item.kind ? resp : emptyResponse(item);
  const c = ref.caseId ? app.cases.find((x) => x.id === ref.caseId) : undefined;

  async function submit() {
    if (!mock || !ref || saving || !isComplete(item, r)) return;
    setSaving(true);
    const m = answer(mock, bank, ref, r, take());
    mockRef.current = m;
    const entry = m.log[m.log.length - 1];
    await app.addAnswers([toAnswered(item, entry.score, Date.now())]);
    await app.saveMock(m);
    setResp(null);
    setSaving(false);
    window.scrollTo(0, 0);
    if (m.result) go({ name: "mockResult", id: m.id });
  }

  return (
    <>
      <div className="runhead">
        <span className="label">Item {mock.log.length + 1}</span>
        <span className={`clock ${EXAM.durationMs - elapsed < 15 * 60_000 ? "over" : ""}`} aria-label="Time used">
          {hms(elapsed)} of {hms(EXAM.durationMs)}
        </span>
      </div>
      <div className="progress" aria-hidden="true">
        <div style={{ width: `${Math.min(100, (mock.log.length / EXAM.maxItems) * 100)}%` }} />
      </div>
      {c && ref.caseStep && (
        <>
          <p className="stepnow">
            Case study. Item {ref.caseStep} of {c.items.length}.
          </p>
          <details className="intro" open={ref.caseStep === 1}>
            <summary>Case summary</summary>
            <p className="selectable">{c.intro}</p>
          </details>
          <Exhibit tabs={caseTabsAt(c, ref.caseStep - 1)} />
        </>
      )}
      <ItemCard key={`${mock.id}-${mock.log.length}`} item={item} r={r} set={setResp} reveal={false} showTabs={!c} />
      <p className="muted small" style={{ marginTop: 16 }}>
        Pause saves your place. The clock stops until you come back.
      </p>
      <div className="dock">
        <div className="inner">
          <button className="btn" disabled={saving || !isComplete(item, r)} onClick={submit}>
            {saving ? "Saving" : "Submit and continue"}
          </button>
        </div>
      </div>
    </>
  );
}

function BandScale({ m }: { m: Mock }) {
  const res = m.result!;
  const s = bandScale(res.estimate);
  return (
    <div className="bscale" role="img" aria-label={`${BAND_LABEL[res.band]}. The bar shows the 95% interval of the estimate.`}>
      <div className="track">
        <div className="half below" />
        <div className="half above" />
        <div className={`ival ${BAND_CLASS[res.band]}`} style={{ left: `${s.from}%`, width: `${Math.max(1, s.to - s.from)}%` }} />
        <div className="est" style={{ left: `${s.mid}%` }} />
        <div className="std" style={{ left: `${s.standard}%` }} />
      </div>
      <div className="ends small muted">
        <span>Lower ability</span>
        <span>Passing standard</span>
        <span>Higher ability</span>
      </div>
    </div>
  );
}

export function MockResult({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const m = app.mocks.find((x) => x.id === id);
  const [open, setOpen] = useState<number | null>(null);
  if (!m || !m.result) return <p className="muted">Result not found.</p>;
  const res = m.result;
  const scored = m.log.filter((e) => e.role !== "pretest");
  const earned = scored.reduce((n, e) => n + e.score.earned, 0);
  const max = scored.reduce((n, e) => n + e.score.max, 0);

  return (
    <>
      <div className="label">Adaptive mock result</div>
      <h1 style={{ marginTop: 6 }}>{BAND_LABEL[res.band]}</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        {RULE_TEXT[res.rule]}
      </p>

      <div className="stats">
        <div>
          <div className="label">Items</div>
          <div className="num">{res.items}</div>
        </div>
        <div>
          <div className="label">Time</div>
          <div className="num">{hms(m.elapsedMs)}</div>
        </div>
        <div>
          <div className="label">Points</div>
          <div className="num">
            {earned}/{max}
          </div>
        </div>
      </div>

      <section className="section">
        <span className="label">Readiness band</span>
        <p style={{ marginTop: 10 }}>
          <span className={`band ${BAND_CLASS[res.band]}`}>{res.band}</span>
        </p>
        <BandScale m={m} />
        <p className="small" style={{ marginTop: 10 }}>
          The shaded bar is the 95% interval of your ability estimate. Above means the whole bar sits to the right of the
          passing standard. Below means it sits to the left. Near means it crosses the line.
        </p>
        <Caveat />
      </section>

      <section className="section">
        <span className="label">Review each item</span>
        {m.log.map((e, k) => {
          const it = app.itemById(e.itemId);
          return (
            <div key={k}>
              <button className="reviewrow" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
                <span>
                  <span className="mono muted">{k + 1}.</span> {it ? KIND_NAMES[it.kind] : "Item"}
                  <span className="muted small" style={{ display: "block" }}>
                    {ROLE_LABEL[e.role]}
                    {it ? `. ${it.topic}` : ""}
                  </span>
                </span>
                <span className={`qscore ${e.score.earned === e.score.max ? "ok" : e.score.earned ? "part" : "no"}`}>
                  {e.score.earned}/{e.score.max}
                </span>
              </button>
              {open === k && (
                <div className="reviewbody">
                  {it ? (
                    <ItemCard
                      item={it}
                      r={e.response}
                      set={() => undefined}
                      reveal
                      flagged={app.flags.includes(it.id)}
                      onFlag={() => app.toggleFlag(it.id)}
                    />
                  ) : (
                    <p className="muted">This item is no longer in the bank.</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div className="actions">
        <button className="btn ghost" onClick={() => go({ name: "mock" })}>
          Back to the mock
        </button>
      </div>
    </>
  );
}
