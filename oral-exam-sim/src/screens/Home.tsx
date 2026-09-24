import { CASES } from "@/cases";
import { BLUEPRINT, composeOralMock, dueCards, questionRange } from "@/engine";
import { useState } from "react";
import { freeCaseIds } from "@/lib/access";
import { ACCESS_MONTHS } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";

export function Lock() {
  return (
    <svg className="lock" viewBox="0 0 11 13" aria-label="Locked">
      <rect x="0.5" y="5.5" width="10" height="7" fill="none" stroke="currentColor" />
      <path d="M2.5 5.5V3.5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" />
    </svg>
  );
}

export function Home({ go }: { go: Go }) {
  const app = useApp();
  const free = freeCaseIds(CASES);
  const scored = app.attempts.filter((a) => a.score);
  const avg = scored.length ? Math.round(scored.reduce((s, a) => s + a.score!.percent, 0) / scored.length) : null;
  const due = dueCards(app.deck, Date.now()).length;

  async function startMockOral() {
    if (!app.access.oral) return go({ name: "paywall", focus: "oral" });
    const seen = new Set(app.attempts.filter((a) => a.score).map((a) => a.caseId));
    const caseIds = composeOralMock(CASES, { seen });
    const m = { id: `oral-${Date.now().toString(36)}`, caseIds, attemptIds: [], startedAt: Date.now(), finishedAt: null };
    await app.saveMockOral(m);
    go({ name: "mockOral", id: m.id });
  }
  const [area, setArea] = useState<string>("all");
  const shown = area === "all" ? CASES : CASES.filter((c) => c.blueprint === area);
  const groups = BLUEPRINT.map((b) => ({ ...b, cases: shown.filter((c) => c.blueprint === b.id) })).filter((g) => g.cases.length);
  const best = (id: string) => {
    const xs = scored.filter((a) => a.caseId === id).map((a) => a.score!.percent);
    return xs.length ? Math.max(...xs) : null;
  };

  return (
    <>
      <div className="hero">
        <div className="label">Structured oral</div>
        <h1>Run the case out loud.</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Four stations of 12 minutes on exam day, each with a different examiner and topic. Practise one case at a time, or
          sit a full mock oral. Then mark yourself on the examiner criteria.
        </p>
      </div>

      <div className="stats">
        <div>
          <div className="label">Cases done</div>
          <div className="num">{new Set(scored.map((a) => a.caseId)).size}/{CASES.length}</div>
        </div>
        <div>
          <div className="label">Attempts</div>
          <div className="num">{scored.length}</div>
        </div>
        <div>
          <div className="label">Average</div>
          <div className="num">{avg === null ? "None" : `${avg}%`}</div>
        </div>
      </div>

      <button className="nextcase" style={{ marginTop: 16 }} onClick={startMockOral}>
        <div className="label">Mock oral</div>
        <div className="t">Four stations. Four topics. 12 minutes each.</div>
        <div className="muted small">
          {app.access.oral ? "Starts with a fresh set of cases on four different priority topics." : "Included with oral access."}
        </div>
      </button>
      <button className="linkbtn small" style={{ marginTop: 10 }} onClick={() => go({ name: "resources" })}>
        Official CFPC resources
      </button>

      {due > 0 && (
        <div className="duebar">
          <span>
            <b className="mono">{due}</b> missed {due === 1 ? "point is" : "points are"} due for review.
          </span>
          <button className="btn small" onClick={() => go({ name: "review" })}>
            Review
          </button>
        </div>
      )}

      <section className="section">
        <span className="label">Case bank · {CASES.length} cases</span>
        <div className="chips" role="group" aria-label="Filter by area" style={{ marginTop: 10 }}>
          <button className="chip" aria-pressed={area === "all"} onClick={() => setArea("all")}>
            All
          </button>
          {BLUEPRINT.filter((b) => CASES.some((c) => c.blueprint === b.id)).map((b) => (
            <button key={b.id} className="chip" aria-pressed={area === b.id} onClick={() => setArea(b.id)}>
              {b.label}
            </button>
          ))}
        </div>
        {groups.map((g) => (
          <div key={g.id}>
            <div className="areahead">
              <span className="label" style={{ color: "var(--ink)" }}>{g.label}</span>
              <span className="muted small mono">{g.cases.length}</span>
            </div>
            <ul className="cases">
              {g.cases.map((c) => {
                const i = CASES.indexOf(c);
                const open = app.canOpen(c.id);
                const q = questionRange(c);
                const b = best(c.id);
                return (
                  <li key={c.id}>
                    <button
                      className={`caserow ${open ? "" : "locked"}`}
                      onClick={() => go(open ? { name: "case", id: c.id } : { name: "paywall" })}
                    >
                      <span className="n">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="t">{c.title}</span>
                        <span className="muted small" style={{ display: "block", marginTop: 3 }}>
                          {c.summary}
                        </span>
                        <span className="meta">
                          <span className="tag">{c.durationMinutes} min</span>
                          <span className="tag">{q.min === q.max ? q.min : `${q.min} to ${q.max}`} questions</span>
                          {free.has(c.id) && !app.access.oral && <span className="tag free">Free</span>}
                          {!c.reviewed && <span className="tag warn">Draft</span>}
                        </span>
                      </span>
                      <span className="right">{open ? (b === null ? "" : `${Math.round(b)}%`) : <Lock />}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {!app.access.oral && (
          <p className="muted small" style={{ marginTop: 12 }}>
            Two cases are free. Oral access is one payment for {ACCESS_MONTHS} months. It does not renew.
          </p>
        )}
      </section>
    </>
  );
}
