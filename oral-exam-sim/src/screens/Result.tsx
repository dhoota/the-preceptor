import { getCase } from "@/cases";
import { unsafeChoices } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";

export function Result({ attemptId, go }: { attemptId: string; go: Go }) {
  const app = useApp();
  const a = app.attempts.find((x) => x.id === attemptId);
  const c = a && getCase(a.caseId);
  if (!a || !c || !a.score) return <p>Result not found.</p>;
  const s = a.score;
  const byId = new Map(c.rubric.map((r) => [r.id, r]));
  const unsafe = unsafeChoices(c, a);
  const mins = a.finishedAt ? Math.round((a.finishedAt - a.startedAt) / 60000) : null;

  return (
    <>
      <div className="label">
        {a.mode === "exam" ? "Exam day" : "Practice"} · {new Date(a.startedAt).toLocaleDateString("en-CA")}
        {mins !== null && ` · ${mins} min`}
      </div>
      <h1 style={{ marginTop: 6 }}>{c.title}</h1>

      <div className="score">
        <div>
          <div className="big">{s.percent}%</div>
          <div className="muted mono small" style={{ marginTop: 6 }}>
            {s.awarded} of {s.max} points
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={`tag ${s.passed ? "pass" : "fail"}`}>{s.passed ? "At pass standard" : "Below pass standard"}</span>
          <div className="muted small" style={{ marginTop: 6 }}>
            Pass is {Math.round(c.passThreshold * 100)}% with no critical misses
          </div>
        </div>
      </div>

      {s.criticalMisses.length > 0 && (
        <div className="alert">
          <b>Critical points missed</b>
          <ul>
            {s.criticalMisses.map((id) => (
              <li key={id}>{byId.get(id)?.text}</li>
            ))}
          </ul>
        </div>
      )}

      {unsafe.length > 0 && (
        <div className="alert" style={{ borderColor: "var(--gold)", background: "var(--gold-soft)" }}>
          <b>Decisions an examiner would challenge</b>
          <ul>
            {unsafe.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      )}

      <section className="section">
        <span className="label">By domain</span>
        {s.domains.map((d) => {
          const pct = d.max ? (d.awarded / d.max) * 100 : 0;
          return (
            <div key={d.id} className="domrow">
              <div className="h">
                <span>{d.name}</span>
                <span className="mono">
                  {d.awarded}/{d.max}
                </span>
              </div>
              <div className={`bar ${pct < 60 ? "low" : ""}`}>
                <div style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </section>

      {s.missed.length > 0 && (
        <section className="section">
          <span className="label">Added to your review deck</span>
          <ul className="plain">
            {s.missed.map((id) => (
              <li key={id} style={{ margin: "6px 0" }}>
                {byId.get(id)?.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="muted small" style={{ marginTop: 20 }}>
        This is a self-marked practice score. It does not predict your result on the certification exam.
      </p>

      <div className="actions">
        {s.missed.length > 0 && (
          <button className="btn" onClick={() => go({ name: "review" })}>
            Review missed points
          </button>
        )}
        <button className="btn ghost" onClick={() => go({ name: "case", id: c.id })}>
          Try again
        </button>
        <button className="btn ghost" onClick={() => go({ name: "home" })}>
          All cases
        </button>
      </div>
    </>
  );
}
