import { useMemo, useState } from "react";
import { PRIORITY_TOPICS, topicName } from "@/blueprint/priorityTopics";
import { MOCK_WRITTEN, composeWrittenMock, markSamp, sampFormat, type Samp, type SampResponse } from "@/engine";
import { SAMPS, getSamp } from "@/samps";
import { freeSampIds } from "@/lib/access";
import type { MockExam, SampAttempt } from "@/lib/storage";
import type { Go } from "../routes";
import { useApp } from "../state";
import { Lock } from "./Home";
import { MarkedQuestion, QuestionInput, SampStem, emptyResponse, isAnswered } from "./SampParts";

const newId = (p: string) => `${p}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

function latestBySamp(list: SampAttempt[]) {
  const m = new Map<string, SampAttempt>();
  for (const a of list) {
    const prev = m.get(a.sampId);
    if (!prev || a.at > prev.at) m.set(a.sampId, a);
  }
  return m;
}

/** Written tab: mock exam and practice by priority topic. */
export function Written({ go }: { go: Go }) {
  const app = useApp();
  const latest = useMemo(() => latestBySamp(app.sampAttempts), [app.sampAttempts]);
  const open = app.mockExams.find((m) => !m.submittedAt);

  async function startMock(kind: keyof typeof MOCK_WRITTEN) {
    if (!app.access.written) return go({ name: "paywall", focus: "written" });
    const cfg = MOCK_WRITTEN[kind];
    const sampIds = composeWrittenMock(SAMPS, cfg.samps, { seen: new Set(latest.keys()) });
    const m: MockExam = { id: newId("mock"), sampIds, startedAt: Date.now(), durationMs: cfg.minutes * 60_000, responses: {}, submittedAt: null };
    await app.saveMockExam(m);
    go({ name: "mock", id: m.id });
  }

  const done = latest.size;
  const avg = done ? Math.round(([...latest.values()].reduce((s, a) => s + a.mark.score, 0) / done) * 100) : null;

  return (
    <>
      <div className="label">Written component</div>
      <h1 style={{ marginTop: 6 }}>SAMPs</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Short answer management problems in the CFPC formats: short answer, menu and multiple choice. Keys are scored the
        way examiners score them. Only your first answers count.
      </p>

      <div className="stats">
        <div>
          <div className="label">Done</div>
          <div className="num">
            {done}/{SAMPS.length}
          </div>
        </div>
        <div>
          <div className="label">Average</div>
          <div className="num">{avg === null ? "None" : `${avg}%`}</div>
        </div>
        <div>
          <div className="label">Mocks</div>
          <div className="num">{app.mockExams.filter((m) => m.submittedAt).length}</div>
        </div>
      </div>

      <section className="section">
        <span className="label">Mock exam</span>
        {open ? (
          <button className="nextcase" onClick={() => go({ name: "mock", id: open.id })}>
            <div className="t">Resume your mock exam</div>
            <div className="muted small">
              {open.sampIds.length} SAMPs · started {new Date(open.startedAt).toLocaleString("en-CA")}
            </div>
          </button>
        ) : (
          <>
            <button className="nextcase" onClick={() => startMock("full")}>
              <div className="t">
                Full mock · {MOCK_WRITTEN.full.minutes / 60} hours {!app.access.written && <Lock />}
              </div>
              <div className="muted small">
                {MOCK_WRITTEN.full.samps} multiple choice and menu SAMPs balanced across the priority topics. Timed like the real written exam. No
                marking until you submit.
              </div>
            </button>
            <button className="nextcase" onClick={() => startMock("half")}>
              <div className="t">
                Half mock · {MOCK_WRITTEN.half.minutes / 60} hours {!app.access.written && <Lock />}
              </div>
              <div className="muted small">{MOCK_WRITTEN.half.samps} SAMPs. Same rules, half the length.</div>
            </button>
          </>
        )}
        {app.mockExams
          .filter((m) => m.submittedAt)
          .slice(0, 3)
          .map((m) => (
            <button key={m.id} className="row" style={{ width: "100%", background: "none", border: 0, borderBottom: "1px solid var(--line-2)", textAlign: "left", cursor: "pointer" }} onClick={() => go({ name: "mockResult", id: m.id })}>
              <span>
                Mock of {m.sampIds.length} SAMPs
                <span className="muted small" style={{ display: "block" }}>
                  {new Date(m.submittedAt!).toLocaleDateString("en-CA")}
                </span>
              </span>
              <span className="mono">{mockPercent(m)}%</span>
            </button>
          ))}
      </section>

      <section className="section">
        <span className="label">Practice by priority topic</span>
        <ul className="cases">
          {PRIORITY_TOPICS.map((t, i) => {
            const list = SAMPS.filter((s) => s.topic === t.id);
            const tDone = list.filter((s) => latest.has(s.id));
            const pct = tDone.length ? Math.round((tDone.reduce((a, s) => a + latest.get(s.id)!.mark.score, 0) / tDone.length) * 100) : null;
            return (
              <li key={t.id}>
                <button className="caserow" onClick={() => go({ name: "topic", id: t.id })} disabled={!list.length}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="t">{t.name}</span>
                    <span className="meta">
                      <span className="tag">
                        {tDone.length}/{list.length} SAMPs
                      </span>
                      <span className="tag">{t.keyFeatures.length} key features</span>
                    </span>
                  </span>
                  <span className="right">{pct === null ? "" : `${pct}%`}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export function mockPercent(m: MockExam): number {
  const marks = m.sampIds.map((id) => getSamp(id)).filter((s): s is Samp => Boolean(s)).map((s) => markSamp(s, m.responses[s.id] ?? {}));
  return marks.length ? Math.round((marks.reduce((a, x) => a + x.score, 0) / marks.length) * 100) : 0;
}

/** SAMP list for one priority topic. */
export function TopicSamps({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const topic = PRIORITY_TOPICS.find((t) => t.id === id);
  const latest = useMemo(() => latestBySamp(app.sampAttempts), [app.sampAttempts]);
  const free = useMemo(() => freeSampIds(SAMPS), []);
  if (!topic) return <p>Topic not found.</p>;
  const list = SAMPS.filter((s) => s.topic === id);
  return (
    <>
      <div className="label">Priority topic</div>
      <h1 style={{ marginTop: 6 }}>{topic.name}</h1>
      <details className="kfbox">
        <summary>{topic.keyFeatures.length} key features, in our words</summary>
        <ol>
          {topic.keyFeatures.map((k) => (
            <li key={k.n}>{k.summary}</li>
          ))}
        </ol>
        <p className="muted small">Paraphrased. Read the official wording in Official CFPC resources.</p>
      </details>
      <ul className="cases">
        {list.map((s, i) => {
          const openIt = app.canOpenSamp(s.id);
          const last = latest.get(s.id);
          return (
            <li key={s.id}>
              <button className={`caserow ${openIt ? "" : "locked"}`} onClick={() => go(openIt ? { name: "samp", id: s.id } : { name: "paywall", focus: "written" })}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="t">{s.title}</span>
                  <span className="meta">
                    <span className="tag">{s.questions.length} questions</span>
                    {free.has(s.id) && !app.access.written && <span className="tag free">Free</span>}
                    {sampFormat(s) === "writein" && <span className="tag">Write-in</span>}
                    {!s.reviewed && <span className="tag warn">Draft</span>}
                  </span>
                </span>
                <span className="right">{openIt ? (last ? `${Math.round(last.mark.score * 100)}%` : "") : <Lock />}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/** Practice one SAMP. Questions appear one at a time, as updates can change the case. */
export function SampPractice({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const s = getSamp(id);
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, SampResponse>>({});
  if (!s) return <p>SAMP not found.</p>;
  if (!app.canOpenSamp(s.id)) {
    go({ name: "paywall", focus: "written" });
    return null;
  }
  const q = s.questions[step];
  const last = step === s.questions.length - 1;

  async function mark() {
    const attempt: SampAttempt = { id: newId("samp"), sampId: s!.id, topic: s!.topic, mode: "practice", at: Date.now(), responses, mark: markSamp(s!, responses) };
    await app.saveSampAttempts([attempt]);
    go({ name: "sampResult", attemptId: attempt.id });
  }

  return (
    <>
      <SampStem s={s} />
      {s.questions.slice(0, step).map((pq, i) => (
        <div key={pq.id} className="sampdone muted small">
          Q{i + 1} answered
        </div>
      ))}
      <QuestionInput q={q} n={step + 1} value={responses[q.id]} onChange={(r) => setResponses((x) => ({ ...x, [q.id]: r }))} />
      <div className="dock">
        <div className="inner">
          {last ? (
            <button className="btn" onClick={mark}>
              Mark this SAMP
            </button>
          ) : (
            <button className="btn" onClick={() => setStep(step + 1)}>
              {isAnswered(q, responses[q.id]) ? "Next question" : "Skip question"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

/** Marked SAMP with key, explanations and override toggles for short answers. */
export function SampResult({ attemptId, go }: { attemptId: string; go: Go }) {
  const app = useApp();
  const a = app.sampAttempts.find((x) => x.id === attemptId);
  const s = a && getSamp(a.sampId);
  if (!a || !s) return <p>Attempt not found.</p>;

  async function override(qid: string, line: number, counted: boolean) {
    const r = a!.responses[qid];
    if (!r || r.kind !== "short") return;
    const responses = { ...a!.responses, [qid]: { ...r, overrides: { ...(r.overrides ?? {}), [line]: counted } } };
    await app.saveSampAttempts([{ ...a!, responses, mark: markSamp(s!, responses) }]);
  }

  const next = SAMPS.filter((x) => x.topic === s.topic).find((x) => x.id !== s.id && !app.sampAttempts.some((y) => y.sampId === x.id) && app.canOpenSamp(x.id));
  return (
    <>
      <div className="score">
        <div>
          <div className="label">{topicName(s.topic)}</div>
          <div className="big">{Math.round(a.mark.score * 100)}%</div>
        </div>
        <div className="muted small" style={{ maxWidth: 200, textAlign: "right" }}>
          Each question is worth one point, split across the answers it asks for.
        </div>
      </div>
      <SampStem s={s} showTopic={false} />
      {s.questions.map((q, i) => (
        <MarkedQuestion
          key={q.id}
          q={q}
          n={i + 1}
          value={a.responses[q.id] ?? emptyResponse(q)}
          source={s.sources.find((x) => x.id === q.source)?.citation}
          onOverride={q.kind === "short" ? (line, c) => override(q.id, line, c) : undefined}
        />
      ))}
      <p className="muted small" style={{ marginTop: 16 }}>
        Short answers are matched against the key on this device. If an answer is right but worded differently, tap Count
        this. Be as strict as an examiner would be.
      </p>
      <div className="actions">
        {next && (
          <button className="btn" onClick={() => go({ name: "samp", id: next.id })}>
            Next SAMP in this topic
          </button>
        )}
        <button className="btn ghost" onClick={() => go({ name: "topic", id: s.topic })}>
          Back to topic
        </button>
      </div>
    </>
  );
}
