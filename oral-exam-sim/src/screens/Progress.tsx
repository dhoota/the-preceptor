import { CASES, getCase } from "@/cases";
import { weakAreas } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";

export function Progress({ go }: { go: Go }) {
  const app = useApp();
  const scored = app.attempts.filter((a) => a.score);
  const areas = weakAreas(app.attempts);
  const weakest = areas.filter((w) => w.percent < 70);

  return (
    <>
      <div className="label">Progress</div>
      <h1 style={{ marginTop: 6 }}>Where to focus</h1>

      {scored.length === 0 ? (
        <div className="card" style={{ marginTop: 20 }}>
          <p style={{ marginBottom: 12 }}>Finish a case to see your weak areas.</p>
          <button className="btn small" onClick={() => go({ name: "home" })}>
            Go to cases
          </button>
        </div>
      ) : (
        <>
          {weakest.length > 0 && (
            <p className="serif" style={{ fontSize: 18, marginTop: 12 }}>
              Your weakest area is <b>{weakest[0].name.toLowerCase()}</b>. Pick a case that tests it next.
            </p>
          )}
          <section className="section">
            <span className="label">By domain, latest attempt per case</span>
            {areas.map((w) => (
              <div key={w.key} className="domrow">
                <div className="h">
                  <span>{w.name}</span>
                  <span className="mono">{w.percent}%</span>
                </div>
                <div className={`bar ${w.percent < 60 ? "low" : ""}`}>
                  <div style={{ width: `${w.percent}%` }} />
                </div>
                <div className="muted small">
                  {w.attempts} {w.attempts === 1 ? "case" : "cases"}
                </div>
              </div>
            ))}
          </section>

          <section className="section">
            <span className="label">History</span>
            {scored.map((a) => (
              <button
                key={a.id}
                className="row"
                style={{ width: "100%", background: "none", border: 0, borderBottom: "1px solid var(--line-2)", textAlign: "left", cursor: "pointer" }}
                onClick={() => go({ name: "result", attemptId: a.id })}
              >
                <span>
                  <span className="serif" style={{ fontSize: 17 }}>
                    {getCase(a.caseId)?.title ?? a.caseId}
                  </span>
                  <span className="muted small" style={{ display: "block" }}>
                    {new Date(a.startedAt).toLocaleDateString("en-CA")} · {a.mode === "exam" ? "Exam day" : "Practice"}
                  </span>
                </span>
                <span className="mono">{a.score!.percent}%</span>
              </button>
            ))}
          </section>
          <p className="muted small" style={{ marginTop: 14 }}>
            {CASES.length} cases in the bank. Progress is stored on this device only.
          </p>
        </>
      )}
    </>
  );
}
