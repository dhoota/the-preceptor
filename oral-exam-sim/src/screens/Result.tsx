import { useMemo } from "react";
import { CASES, getCase } from "@/cases";
import { STANDARD, blueprintLabel, buildReport, type ReportItem } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";
import { QUALITY_LABEL } from "./Runner";

function Cite({ item }: { item: ReportItem }) {
  if (!item.source) return null;
  return <div className="cite">Source: {item.source.citation}</div>;
}

export function Result({ attemptId, go }: { attemptId: string; go: Go }) {
  const app = useApp();
  const a = app.attempts.find((x) => x.id === attemptId);
  const c = a && getCase(a.caseId);
  const report = useMemo(
    () => (a && c && a.score ? buildReport(c, a, { cases: CASES, attempts: app.attempts, canOpen: app.canOpen }) : null),
    [a, c, app.attempts, app.canOpen],
  );
  if (!a || !c || !report) return <p>Result not found.</p>;
  const mins = a.finishedAt ? Math.round((a.finishedAt - a.startedAt) / 60000) : null;

  return (
    <>
      <div className="label">
        {blueprintLabel(c.blueprint)} · {a.mode === "exam" ? "Exam day" : "Practice"} ·{" "}
        {new Date(a.startedAt).toLocaleDateString("en-CA")}
        {mins !== null && ` · ${mins} min`}
      </div>
      <h1 style={{ marginTop: 6 }}>{c.title}</h1>

      <div className="score">
        <div>
          <div className="big">{Math.round(report.percent)}%</div>
          <div className="muted mono small" style={{ marginTop: 6 }}>
            {report.awarded} of {report.max} points
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span className={`band ${report.band}`}>{report.bandLabel}</span>
          <div className="muted small" style={{ marginTop: 8, maxWidth: 190 }}>
            Pass is {STANDARD.pass * 100}% with no critical misses. Borderline is {STANDARD.borderline * 100}% or one
            critical miss.
          </div>
        </div>
      </div>
      <p className="serif" style={{ fontSize: 18, marginTop: 14 }}>
        {report.summary}
      </p>

      {report.criticalMisses.length > 0 && (
        <div className="alert">
          <b>Critical actions missed</b>
          {report.criticalMisses.map((m) => (
            <div key={m.id} style={{ marginTop: 10 }}>
              <div style={{ fontWeight: 600 }}>{m.text}</div>
              <div className="small">{m.teaching}</div>
              <Cite item={m} />
            </div>
          ))}
        </div>
      )}

      <section className="section">
        <span className="label">Top three things to fix</span>
        {report.topFixes.length === 0 ? (
          <p className="muted" style={{ marginTop: 10 }}>
            Nothing missed. Try this case in exam day mode next.
          </p>
        ) : (
          report.topFixes.map((f, i) => (
            <div key={f.id} className="fix">
              <span className="n">{i + 1}</span>
              <div>
                <div className="t">
                  {f.text} {f.critical && <span className="tag fail">Critical</span>}
                </div>
                <div className="muted small">
                  {f.competency} · {f.mark === "partly" ? "partly said" : "missed"} · {f.points}{" "}
                  {f.points === 1 ? "point" : "points"}
                </div>
                <p className="small" style={{ margin: "6px 0 0" }}>
                  {f.teaching}
                </p>
                <Cite item={f} />
              </div>
            </div>
          ))
        )}
      </section>

      {(a.score!.criteria?.length ?? 0) > 0 && (
        <section className="section">
          <span className="label">Score sheet (0 to 10)</span>
          {a.score!.criteria.map((d) => {
            const pct = d.max ? (d.awarded / d.max) * 100 : 0;
            return (
              <div key={d.id} className="domrow">
                <div className="h">
                  <span>{d.name}</span>
                  <span className="mono">{(d.outOf10 ?? pct / 10).toFixed(1)} / 10</span>
                </div>
                <div className={`bar ${pct < STANDARD.pass * 100 ? "low" : ""}`}>
                  <div style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </section>
      )}

      <section className="section">
        <span className="label">Score by competency</span>
        {report.competencies.map((d) => {
          const pct = d.max ? (d.awarded / d.max) * 100 : 0;
          return (
            <div key={d.id} className="domrow">
              <div className="h">
                <span>{d.name}</span>
                <span className="mono">
                  {d.awarded}/{d.max}
                </span>
              </div>
              <div className={`bar ${pct < STANDARD.pass * 100 ? "low" : ""}`}>
                <div style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </section>

      {report.decisions.length > 0 && (
        <section className="section">
          <span className="label">Your decisions</span>
          {report.decisions.map((d) => (
            <div key={d.questionId} className="dec">
              <div className="q">{d.prompt}</div>
              <div className="c">{d.choice}</div>
              <div className={`qtag ${d.quality}`}>{QUALITY_LABEL[d.quality]}</div>
              <p className="small" style={{ margin: "6px 0 0" }}>
                {d.feedback}
              </p>
            </div>
          ))}
        </section>
      )}

      {report.reviewKeys.length > 0 && (
        <section className="section">
          <span className="label">Review deck</span>
          <p style={{ marginTop: 10 }}>
            {report.reviewKeys.length} missed {report.reviewKeys.length === 1 ? "point is" : "points are"} now in your
            review deck. They come back on a schedule until they stick.
          </p>
          <button className="btn small" onClick={() => go({ name: "review" })}>
            Review now
          </button>
        </section>
      )}

      {report.nextCases.length > 0 && (
        <section className="section">
          <span className="label">Try next</span>
          {report.nextCases.map((n) => (
            <button
              key={n.caseId}
              className="nextcase"
              onClick={() => go(app.canOpen(n.caseId) ? { name: "case", id: n.caseId } : { name: "paywall" })}
            >
              <div className="label">{n.area}</div>
              <div className="t">{n.title}</div>
              <div className="muted small">{n.reason}</div>
            </button>
          ))}
        </section>
      )}

      <p className="muted small" style={{ marginTop: 20 }}>
        This report is built by fixed rules from your self-marks. It is practice feedback. It does not predict your
        result on the certification exam.
      </p>

      <div className="actions">
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
