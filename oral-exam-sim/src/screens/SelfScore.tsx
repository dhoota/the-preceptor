import { useState } from "react";
import { getCase } from "@/cases";
import { ORAL_CRITERIA, competencyLabel, toCriterion, questionsOnPath, rubricOrder, type SelfMark } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";

const OPTIONS: { v: SelfMark; label: string }[] = [
  { v: "yes", label: "Said it" },
  { v: "partly", label: "Partly" },
  { v: "no", label: "Missed" },
];

export function SelfScore({ attemptId, mockOralId, go }: { attemptId: string; mockOralId?: string; go: Go }) {
  const app = useApp();
  const attempt = app.attempts.find((a) => a.id === attemptId);
  const c = attempt && getCase(attempt.caseId);
  const [marks, setMarks] = useState<Record<string, SelfMark>>({});
  const [saving, setSaving] = useState(false);
  if (!attempt || !c) return <p>Attempt not found.</p>;

  const order = rubricOrder(c, attempt);
  const byId = new Map(c.rubric.map((r) => [r.id, r]));
  const questions = questionsOnPath(c, attempt);
  const left = order.filter((id) => !marks[id]).length;

  async function submit() {
    setSaving(true);
    const done = await app.submitMarks(attempt!, marks);
    if (mockOralId) {
      const m = app.mockOrals.find((x) => x.id === mockOralId);
      if (m) await app.saveMockOral({ ...m, attemptIds: [...m.attemptIds, done.id] });
      go({ name: "mockOral", id: mockOralId });
    } else go({ name: "result", attemptId: done.id });
  }

  return (
    <>
      <div className="label">Mark your answers</div>
      <h1 style={{ marginTop: 6 }}>{c.title}</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Read the model answers. Then mark each rubric point honestly. Only count what you actually said out loud.
      </p>

      <section className="section">
        <span className="label">Model answers</span>
        {questions.map((q, i) => (
          <details key={q.id} className="domrow" open={i === 0}>
            <summary className="serif" style={{ cursor: "pointer", fontSize: 17 }}>
              {q.prompt}
            </summary>
            <ul className="plain selectable">
              {q.modelAnswer.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </details>
        ))}
      </section>

      {ORAL_CRITERIA.map((k) => {
        const ids = order.filter((id) => toCriterion(byId.get(id)!.criterion) === k.id);
        if (!ids.length) return null;
        return (
          <section key={k.id} className="section">
            <span className="label">{k.label}</span>
            {ids.map((id) => {
              const r = byId.get(id)!;
              return (
                <div key={id} className="item">
                  <div className="txt">
                    {r.text} {r.critical && <span className="tag fail">Critical</span>}
                    <div className="muted small">
                      {competencyLabel(r.competency)} · {r.points} {r.points === 1 ? "point" : "points"}
                    </div>
                  </div>
                  <div className="seg" role="group" aria-label={r.text}>
                    {OPTIONS.map((o) => (
                      <button
                        key={o.v}
                        className={o.v}
                        aria-pressed={marks[id] === o.v}
                        onClick={() => setMarks((m) => ({ ...m, [id]: o.v }))}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}

      <p className="muted small" style={{ marginTop: 14 }}>
        Items you leave blank count as missed.
      </p>

      <div className="dock">
        <div className="inner">
          <button className="btn" disabled={saving} onClick={submit}>
            {left ? `See my score (${left} unmarked)` : "See my score"}
          </button>
        </div>
      </div>
    </>
  );
}
