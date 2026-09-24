import { useState } from "react";
import { getCase } from "@/cases";
import { questionRange } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";

export function CaseIntro({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const c = getCase(id);
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  if (!c) return <p>Case not found.</p>;
  if (!app.canOpen(c.id)) {
    return (
      <>
        <h1>{c.title}</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          This case is part of the full bank.
        </p>
        <button className="btn" onClick={() => go({ name: "paywall" })}>
          See the full bank
        </button>
      </>
    );
  }
  const q = questionRange(c);
  const tries = app.attempts.filter((a) => a.caseId === c.id && a.score);

  return (
    <>
      <div className="label">{c.domain}</div>
      <h1 style={{ marginTop: 6 }}>{c.title}</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        {c.durationMinutes} minutes. {q.min === q.max ? q.min : `${q.min} to ${q.max}`} examiner questions.{" "}
        {tries.length ? `You have done this case ${tries.length} ${tries.length === 1 ? "time" : "times"}.` : "New case."}
      </p>
      {!c.reviewed && (
        <p className="small" style={{ marginTop: 10 }}>
          <span className="tag warn">Draft</span> This case is awaiting physician review. Doses and details may change.
        </p>
      )}

      <div className="modes" role="radiogroup" aria-label="Mode">
        <button className={`mode ${mode === "practice" ? "on" : ""}`} role="radio" aria-checked={mode === "practice"} onClick={() => setMode("practice")}>
          <div className="h">Practice</div>
          <div className="muted small">
            Timers guide you but do not cut you off. See the model answer after each question if you want it.
          </div>
        </button>
        <button className={`mode ${mode === "exam" ? "on" : ""}`} role="radio" aria-checked={mode === "exam"} onClick={() => setMode("exam")}>
          <div className="h">Exam day</div>
          <div className="muted small">
            The examiner reads every line aloud. Each question ends when time runs out. Model answers wait until the end.
          </div>
        </button>
      </div>

      <div className="card" style={{ marginTop: 22 }}>
        <div className="label">How to answer</div>
        <p className="small" style={{ marginTop: 8, marginBottom: 0 }}>
          Speak your answer out loud, as in the real oral. Tap Ask for to request vitals, exam findings or results. When you
          finish, pick the option closest to what you said. The case responds to your choice.
        </p>
      </div>

      <div className="actions">
        <button className="btn block" onClick={() => go({ name: "run", id: c.id, mode })}>
          Start {mode === "exam" ? "exam day case" : "practice case"}
        </button>
      </div>
    </>
  );
}
