import { useMemo, useState } from "react";
import { CASES, getCase } from "@/cases";
import { BAND_LABEL, STANDARD, heatmap, readiness, suggestNext, topicStats, trend, type TrendPoint } from "@/engine";
import { PRIORITY_TOPICS } from "@/blueprint/priorityTopics";
import { SAMPS } from "@/samps";
import type { Go } from "../routes";
import { useApp } from "../state";

const AREA_SHORT: Record<string, string> = {
  resus: "Resus",
  cardio: "Cardio",
  resp: "Resp",
  neuro: "Neuro",
  trauma: "Trauma",
  peds: "Peds",
  obgyn: "OB and GYN",
  tox: "Tox",
  enviro: "Enviro",
  psych: "Mental health",
  id: "Infection",
  geri: "Geriatrics",
  procedures: "Procedures",
  ethics: "Ethics",
  comm: "Comm",
  systems: "Systems",
};
const bin = (p: number) => (p < 40 ? 0 : p < 60 ? 1 : p < 70 ? 2 : p < 85 ? 3 : 4);
const SHORT: Record<string, string> = {
  assessment: "Dx",
  resuscitation: "Resus",
  management: "Mgmt",
  communication: "Comm",
  disposition: "Dispo",
  professionalism: "Prof",
  leadership: "Lead",
};

function Trend({ points }: { points: TrendPoint[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 340;
  const H = 150;
  const pad = { l: 28, r: 8, t: 10, b: 20 };
  const x = (i: number) => pad.l + (points.length === 1 ? (W - pad.l - pad.r) / 2 : (i / (points.length - 1)) * (W - pad.l - pad.r));
  const y = (p: number) => pad.t + (1 - p / 100) * (H - pad.t - pad.b);
  const line = points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.rolling).toFixed(1)}`).join(" ");
  const h = hover !== null ? points[hover] : null;
  return (
    <div className="trend">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Score trend" onMouseLeave={() => setHover(null)}>
        {[0, 50, 100].map((g) => (
          <g key={g}>
            <line className="grid" x1={pad.l} x2={W - pad.r} y1={y(g)} y2={y(g)} />
            <text x={pad.l - 6} y={y(g) + 3} textAnchor="end">
              {g}
            </text>
          </g>
        ))}
        <line className="pass" x1={pad.l} x2={W - pad.r} y1={y(STANDARD.pass * 100)} y2={y(STANDARD.pass * 100)} />
        <path className="roll" d={line} />
        {points.map((p, i) => (
          <g key={i} onMouseEnter={() => setHover(i)} onClick={() => setHover(i)}>
            <rect x={x(i) - 8} y={pad.t} width={16} height={H - pad.t - pad.b} fill="transparent" />
            <circle className="dot" cx={x(i)} cy={y(p.percent)} r={4.5} />
          </g>
        ))}
      </svg>
      <div className="legend">
        <span>
          <span className="sw" style={{ background: "var(--gold)", borderRadius: 6, width: 10 }} />
          Each case
        </span>
        <span>
          <span className="sw" style={{ background: "var(--navy)", height: 2 }} />
          Average of last five
        </span>
        <span>
          <span className="sw" style={{ borderTop: "1px dashed var(--green)", height: 0 }} />
          Pass mark
        </span>
      </div>
      <p className="small" style={{ marginTop: 6, minHeight: 20 }}>
        {h
          ? `${new Date(h.at).toLocaleDateString("en-CA")}. Scored ${Math.round(h.percent)} percent. ${BAND_LABEL[h.band]}. Running average ${h.rolling} percent.`
          : "Tap a point for details."}
      </p>
    </div>
  );
}

export function Progress({ go }: { go: Go }) {
  const app = useApp();
  const scored = app.attempts.filter((a) => a.score);
  const ready = useMemo(() => readiness(CASES, app.attempts), [app.attempts]);
  const heat = useMemo(() => heatmap(CASES, app.attempts), [app.attempts]);
  const points = useMemo(() => trend(app.attempts), [app.attempts]);
  const next = useMemo(() => suggestNext(CASES, app.attempts, { canOpen: app.canOpen }), [app.attempts, app.canOpen]);
  const topics = useMemo(
    () => topicStats(PRIORITY_TOPICS, SAMPS, app.sampAttempts, CASES, app.attempts),
    [app.sampAttempts, app.attempts],
  );
  const [sortBy, setSortBy] = useState<"blueprint" | "weakest">("blueprint");
  const shownTopics = sortBy === "blueprint" ? topics : [...topics].sort((a, b) => (a.written ?? 101) - (b.written ?? 101));

  return (
    <>
      <div className="label">Progress</div>
      <h1 style={{ marginTop: 6 }}>Where you stand</h1>

      <div className="ready">
        <div className="big">{ready.score}</div>
        <div>
          <div className="label">Readiness estimate</div>
          <div className="serif" style={{ fontSize: 20, fontWeight: 600, marginTop: 2 }}>
            {ready.label}
          </div>
          <div className="muted small">
            {Math.round(ready.coverage * 16)} of 16 areas tried
          </div>
        </div>
      </div>
      <ul className="plain small" style={{ marginTop: 10 }}>
        {ready.reasons.map((r) => (
          <li key={r} style={{ margin: "4px 0" }}>
            {r}
          </li>
        ))}
      </ul>
      <p className="muted small">A study guide built from your own self-marks. It does not predict exam results.</p>

      {scored.length > 0 && (
        <section className="section">
          <span className="label">Trend</span>
          <Trend points={points} />
        </section>
      )}

      <section className="section">
        <span className="label">CFPC priority topics</span>
        <div className="chips" role="group" aria-label="Sort" style={{ marginTop: 10 }}>
          <button className="chip" aria-pressed={sortBy === "blueprint"} onClick={() => setSortBy("blueprint")}>
            Blueprint order
          </button>
          <button className="chip" aria-pressed={sortBy === "weakest"} onClick={() => setSortBy("weakest")}>
            Weakest written first
          </button>
        </div>
        <table className="ttable">
          <thead>
            <tr>
              <th>Topic and key features</th>
              <th style={{ textAlign: "right" }}>Written</th>
              <th style={{ textAlign: "right" }}>Oral</th>
            </tr>
          </thead>
          <tbody>
            {shownTopics.map((t) => {
              const meta = PRIORITY_TOPICS.find((x) => x.id === t.topic)!;
              return (
                <tr key={t.topic} onClick={() => go({ name: "topic", id: t.topic })} style={{ cursor: "pointer" }}>
                  <td>
                    <div>{meta.name}</div>
                    <div className="kfbar" title={`${t.keyFeaturesSeen} of ${t.keyFeaturesTotal} key features practised`}>
                      {meta.keyFeatures.map((k) => (
                        <i key={k.n} className={t.byKeyFeature[k.n] !== undefined ? "seen" : ""} />
                      ))}
                    </div>
                  </td>
                  <td className="num">
                    {t.written === null ? "" : `${t.written}%`}
                    <div className="muted small">
                      {t.sampsDone}/{t.sampsTotal}
                    </div>
                  </td>
                  <td className="num">
                    {t.oral === null ? "" : `${t.oral}%`}
                    <div className="muted small">
                      {t.oralDone}/{t.oralTotal}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="muted small" style={{ marginTop: 8 }}>
          Each bar segment is one CFPC key feature. Filled means you have answered a written question on it. Tap a topic to
          practise it.
        </p>
      </section>

      <section className="section">
        <span className="label">Oral cases by area and competency</span>
        <table className="heat" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th className="rh">Area</th>
              {heat.columns.map((col) => (
                <th key={col.id} title={col.label}>
                  {SHORT[col.id]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heat.rows.map((r) => (
              <tr key={r.area}>
                <th className="rh" scope="row" title={r.label}>
                  <span className="an">{AREA_SHORT[r.area] ?? r.label}</span>
                  <span className="muted mono ac">
                    {r.tried}/{r.total}
                  </span>
                </th>
                {r.cells.map((cell, i) =>
                  cell.percent === null ? (
                    <td key={i} className="none" title={`${r.label}. ${heat.columns[i].label}. Not yet scored.`}>
                      0
                    </td>
                  ) : (
                    <td key={i} className={`h${bin(cell.percent)}`} title={`${r.label}. ${heat.columns[i].label}. ${cell.percent} percent.`}>
                      {cell.percent}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="legend">
          {["under 40", "40 to 59", "60 to 69", "70 to 84", "85 and up"].map((l, i) => (
            <span key={l}>
              <span className={`sw h${i}`} />
              {l}
            </span>
          ))}
          <span>
            <span className="sw" style={{ background: "repeating-linear-gradient(45deg, var(--line) 0 2px, transparent 2px 5px)" }} />
            not yet scored
          </span>
        </div>
      </section>

      {next.length > 0 && (
        <section className="section">
          <span className="label">Try next</span>
          {next.map((n) => (
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

      {scored.length > 0 && (
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
                  {new Date(a.startedAt).toLocaleDateString("en-CA")} · {a.mode === "exam" ? "Exam day" : "Practice"} ·{" "}
                  {BAND_LABEL[a.score!.band]}
                </span>
              </span>
              <span className="mono">{Math.round(a.score!.percent)}%</span>
            </button>
          ))}
        </section>
      )}
      <p className="muted small" style={{ marginTop: 14 }}>
        Progress is stored on this device only.
      </p>
    </>
  );
}
