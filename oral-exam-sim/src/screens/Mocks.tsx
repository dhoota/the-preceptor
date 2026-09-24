import { useEffect, useMemo, useRef, useState } from "react";
import { PRIORITY_TOPICS, topicName } from "@/blueprint/priorityTopics";
import { CASES, getCase } from "@/cases";
import { BAND_LABEL, MOCK_ORAL_STATIONS, ORAL_CRITERIA, ORAL_STATION_MINUTES, markSamp, type SampResponse } from "@/engine";
import { getSamp } from "@/samps";
import type { SampAttempt } from "@/lib/storage";
import type { Go } from "../routes";
import { useApp } from "../state";
import { MarkedQuestion, QuestionInput, SampStem, emptyResponse, isAnswered } from "./SampParts";

const hms = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

/** Timed written mock. Answers save as you go. Submits itself when time runs out. */
export function MockExamScreen({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const mock = app.mockExams.find((m) => m.id === id);
  const [i, setI] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [responses, setResponses] = useState(mock?.responses ?? {});
  const saved = useRef(responses);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // Save answers at most every few seconds so a crash or restart loses little.
  useEffect(() => {
    if (!mock || saved.current === responses) return;
    const t = setTimeout(() => {
      saved.current = responses;
      app.saveMockExam({ ...mock, responses });
    }, 1500);
    return () => clearTimeout(t);
  }, [responses]); // eslint-disable-line react-hooks/exhaustive-deps

  const left = mock ? mock.startedAt + mock.durationMs - now : 0;

  async function submit() {
    if (!mock || mock.submittedAt) return;
    const at = Date.now();
    const list: SampAttempt[] = mock.sampIds.flatMap((sid, k) => {
      const s = getSamp(sid);
      if (!s) return [];
      const r = responses[sid] ?? {};
      return [{ id: `${mock.id}-${k}`, sampId: sid, topic: s.topic, mode: "mock" as const, mockId: mock.id, at, responses: r, mark: markSamp(s, r) }];
    });
    await app.saveSampAttempts(list);
    await app.saveMockExam({ ...mock, responses, submittedAt: at });
    go({ name: "mockResult", id: mock.id });
  }

  useEffect(() => {
    if (mock && !mock.submittedAt && left <= 0) submit();
  }, [left <= 0]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mock) return <p>Mock exam not found.</p>;
  if (mock.submittedAt) {
    go({ name: "mockResult", id: mock.id });
    return null;
  }
  const s = getSamp(mock.sampIds[i]);
  if (!s) return <p>SAMP not found.</p>;
  const r = responses[s.id] ?? {};
  const answered = mock.sampIds.filter((sid) => {
    const x = getSamp(sid);
    return x?.questions.every((q) => isAnswered(q, responses[sid]?.[q.id]));
  }).length;
  const set = (qid: string, v: SampResponse) => setResponses((all) => ({ ...all, [s.id]: { ...(all[s.id] ?? {}), [qid]: v } }));

  return (
    <>
      <div className="runhead">
        <span className="label">
          Mock exam · SAMP {i + 1} of {mock.sampIds.length}
        </span>
        <span className={`clock ${left < 15 * 60_000 ? "over" : ""}`}>{hms(left)}</span>
      </div>
      <div className="progress" aria-hidden="true">
        <div style={{ width: `${(answered / mock.sampIds.length) * 100}%` }} />
      </div>
      <SampStem s={s} />
      {s.questions.map((q, k) => (
        <QuestionInput key={q.id} q={q} n={k + 1} value={r[q.id]} onChange={(v) => set(q.id, v)} />
      ))}
      <details className="kfbox">
        <summary>
          Jump to a SAMP · {answered} of {mock.sampIds.length} complete
        </summary>
        <div className="jump">
          {mock.sampIds.map((sid, k) => {
            const x = getSamp(sid);
            const done = x?.questions.every((q) => isAnswered(q, responses[sid]?.[q.id]));
            return (
              <button key={sid} className={`chip ${done ? "" : "todo"}`} aria-pressed={k === i} onClick={() => setI(k)}>
                {k + 1}
              </button>
            );
          })}
        </div>
      </details>
      <div className="dock">
        <div className="inner">
          <button className="btn quiet" disabled={i === 0} onClick={() => (setI(i - 1), window.scrollTo(0, 0))}>
            Previous
          </button>
          {i < mock.sampIds.length - 1 ? (
            <button className="btn" onClick={() => (setI(i + 1), window.scrollTo(0, 0))}>
              Next SAMP
            </button>
          ) : (
            <button className="btn" onClick={() => confirm("Submit the exam for marking? You cannot change answers after this.") && submit()}>
              Submit exam
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/** Mock written results by priority topic, with each SAMP reviewable. */
export function MockExamResult({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const mock = app.mockExams.find((m) => m.id === id);
  const [open, setOpen] = useState<string | null>(null);
  const attempts = useMemo(() => app.sampAttempts.filter((a) => a.mockId === id), [app.sampAttempts, id]);
  if (!mock) return <p>Mock exam not found.</p>;
  const overall = attempts.length ? Math.round((attempts.reduce((a, x) => a + x.mark.score, 0) / attempts.length) * 100) : 0;
  const byTopic = PRIORITY_TOPICS.map((t) => {
    const xs = attempts.filter((a) => a.topic === t.id);
    return { t, n: xs.length, pct: xs.length ? Math.round((xs.reduce((a, x) => a + x.mark.score, 0) / xs.length) * 100) : null };
  }).filter((x) => x.n > 0).sort((a, b) => (a.pct ?? 0) - (b.pct ?? 0));
  const mins = mock.submittedAt ? Math.round((mock.submittedAt - mock.startedAt) / 60000) : null;

  async function override(att: SampAttempt, qid: string, line: number, counted: boolean) {
    const s = getSamp(att.sampId)!;
    const r = att.responses[qid];
    if (!r || r.kind !== "short") return;
    const responses = { ...att.responses, [qid]: { ...r, overrides: { ...(r.overrides ?? {}), [line]: counted } } };
    await app.saveSampAttempts([{ ...att, responses, mark: markSamp(s, responses) }]);
  }

  return (
    <>
      <div className="label">
        Mock exam · {mock.sampIds.length} SAMPs{mins !== null && ` · ${mins} min`}
      </div>
      <div className="score">
        <div className="big">{overall}%</div>
        <div className="muted small" style={{ maxWidth: 210, textAlign: "right" }}>
          Mean question score. The CFPC does not publish a pass mark, so use your weakest topics as the guide.
        </div>
      </div>
      <section className="section">
        <span className="label">By priority topic, weakest first</span>
        {byTopic.map(({ t, n, pct }) => (
          <div key={t.id} className="domrow">
            <div className="h">
              <span>{t.name}</span>
              <span className="mono">
                {pct}% · {n}
              </span>
            </div>
            <div className={`bar ${(pct ?? 0) < 60 ? "low" : ""}`}>
              <div style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </section>
      <section className="section">
        <span className="label">Review each SAMP</span>
        {attempts.map((a, k) => {
          const s = getSamp(a.sampId);
          if (!s) return null;
          return (
            <div key={a.id}>
              <button className="row" style={{ width: "100%", background: "none", border: 0, borderBottom: "1px solid var(--line-2)", textAlign: "left", cursor: "pointer" }} onClick={() => setOpen(open === a.id ? null : a.id)}>
                <span>
                  {k + 1}. {s.title}
                  <span className="muted small" style={{ display: "block" }}>
                    {topicName(s.topic)}
                  </span>
                </span>
                <span className="mono">{Math.round(a.mark.score * 100)}%</span>
              </button>
              {open === a.id && (
                <div style={{ padding: "8px 0 16px" }}>
                  <SampStem s={s} showTopic={false} />
                  {s.questions.map((q, j) => (
                    <MarkedQuestion
                      key={q.id}
                      q={q}
                      n={j + 1}
                      value={a.responses[q.id] ?? emptyResponse(q)}
                      source={s.sources.find((x) => x.id === q.source)?.citation}
                      onOverride={q.kind === "short" ? (line, c) => override(a, q.id, line, c) : undefined}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div className="actions">
        <button className="btn ghost" onClick={() => go({ name: "written" })}>
          Back to written
        </button>
      </div>
    </>
  );
}

/**
 * Four station mock oral. Each station is a different priority topic,
 * 12 minutes from the moment the stem is read. Self-marked on the examiner
 * criteria after each station, then a combined report.
 */
export function MockOralScreen({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const m = app.mockOrals.find((x) => x.id === id);
  if (!m) return <p>Mock oral not found.</p>;
  const next = m.caseIds[m.attemptIds.length];
  const attempts = m.attemptIds.map((aid) => app.attempts.find((a) => a.id === aid)).filter(Boolean);

  if (next) {
    const c = getCase(next)!;
    return (
      <>
        <div className="label">
          Mock oral · station {m.attemptIds.length + 1} of {MOCK_ORAL_STATIONS}
        </div>
        <h1 style={{ marginTop: 6 }}>{topicName(c.priorityTopic)}</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          A new examiner and a new patient. Read the stem aloud. The {ORAL_STATION_MINUTES} minute clock starts when you
          tap start. The station ends at time wherever you are.
        </p>
        <div className="actions">
          <button className="btn block" onClick={() => go({ name: "run", id: next, mode: "station", mockOralId: m.id })}>
            Go to station {m.attemptIds.length + 1}
          </button>
        </div>
      </>
    );
  }

  if (!m.finishedAt) app.saveMockOral({ ...m, finishedAt: Date.now() });
  const totals = ORAL_CRITERIA.map((k) => {
    let a = 0;
    let x = 0;
    for (const at of attempts) {
      const d = at!.score?.criteria.find((y) => y.id === k.id);
      if (d) {
        a += d.awarded;
        x += d.max;
      }
    }
    return { ...k, pct: x ? Math.round((a / x) * 100) : null, outOf10: x ? Math.round((a / x) * 100) / 10 : null };
  });

  return (
    <>
      <div className="label">Mock oral · four stations</div>
      <h1 style={{ marginTop: 6 }}>Your stations</h1>
      {attempts.map((a, k) => {
        const c = getCase(a!.caseId)!;
        return (
          <button key={a!.id} className="nextcase" onClick={() => go({ name: "result", attemptId: a!.id })}>
            <div className="label">
              Station {k + 1} · {topicName(c.priorityTopic)}
            </div>
            <div className="t">{c.title}</div>
            <div className="muted small">
              {Math.round(a!.score!.percent)}% · {BAND_LABEL[a!.score!.band]}
            </div>
          </button>
        );
      })}
      <section className="section">
        <span className="label">Score sheet, all stations (0 to 10)</span>
        {totals.map((k) => (
          <div key={k.id} className="domrow">
            <div className="h">
              <span>{k.label}</span>
              <span className="mono">{k.outOf10 === null ? "" : `${k.outOf10.toFixed(1)} / 10`}</span>
            </div>
            <div className={`bar ${(k.pct ?? 0) < 60 ? "low" : ""}`}>
              <div style={{ width: `${k.pct ?? 0}%` }} />
            </div>
          </div>
        ))}
      </section>
      <div className="actions">
        <button className="btn ghost" onClick={() => go({ name: "home" })}>
          Back to oral
        </button>
      </div>
    </>
  );
}

export const allCaseIds = () => CASES.map((c) => c.id);
