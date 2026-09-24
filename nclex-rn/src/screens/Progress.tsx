import { byKind, byNeed, byStep, overall, weakest, type Tally } from "@/engine/analytics";
import { NEEDS } from "@/engine/blueprint";
import { KIND_NAMES } from "@/engine/score";
import type { ItemKind } from "@/engine/types";
import { pct } from "@/engine/ui";
import type { Go } from "../routes";
import { useApp } from "../state";
import { MockList } from "./Mock";

function Bar({ t }: { t: Tally }) {
  const p = t.pct === null ? 0 : Math.round(t.pct * 100);
  return (
    <div className={`bar ${t.pct !== null && p < 60 ? "low" : ""}`} aria-hidden="true">
      <div style={{ width: `${p}%` }} />
    </div>
  );
}

function Row({ name, t, note }: { name: string; t: Tally; note?: string }) {
  return (
    <div className="domrow">
      <div className="h">
        <span>{name}</span>
        <span className="mono">{pct(t.pct)}</span>
      </div>
      <Bar t={t} />
      <div className="muted small">
        {t.items} {t.items === 1 ? "item" : "items"} answered
        {note ? `. ${note}` : ""}
      </div>
    </div>
  );
}

export function Progress({ go }: { go: Go }) {
  const app = useApp();
  const needs = byNeed(app.answers);
  const steps = byStep(app.answers);
  const kinds = byKind(app.answers);
  const all = overall(app.answers);
  const weak = weakest(needs);
  const mocks = app.mocks.filter((m) => m.result);

  return (
    <>
      <div className="label">Progress</div>
      <h1 style={{ marginTop: 6 }}>Progress</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Percent of points earned. Each item counts once, on your latest answer.
      </p>

      <div className="stats">
        <div>
          <div className="label">Answered</div>
          <div className="num">{all.items}</div>
        </div>
        <div>
          <div className="label">Points</div>
          <div className="num">{pct(all.pct)}</div>
        </div>
        <div>
          <div className="label">Flagged</div>
          <div className="num">{app.flags.length}</div>
        </div>
      </div>

      {all.items === 0 ? (
        <div className="card empty" style={{ marginTop: 22 }}>
          <h3>Nothing answered yet</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Answer a practice set, a case study or a mock. Your results by area show here.
          </p>
          <button className="btn small" onClick={() => go({ name: "home" })}>
            Go to practice
          </button>
        </div>
      ) : (
        <>
          <section className="section">
            <span className="label">Weakest Client Needs areas</span>
            {weak.length ? (
              weak.map((w) => <Row key={w.id} name={w.name} t={w.tally} />)
            ) : (
              <p className="muted small" style={{ marginTop: 10 }}>
                Answer at least 5 items in an area to see it here.
              </p>
            )}
          </section>

          <section className="section">
            <span className="label">By Client Needs area</span>
            {needs.map((n) => {
              const info = NEEDS.find((x) => x.id === n.id)!;
              return <Row key={n.id} name={n.name} t={n.tally} note={`Test plan share ${info.min} to ${info.max}%`} />;
            })}
          </section>

          <section className="section">
            <span className="label">By clinical judgment step</span>
            {steps.map((s) => (
              <Row key={s.id} name={s.name} t={s.tally} />
            ))}
          </section>

          <section className="section">
            <span className="label">By item type</span>
            {(Object.keys(KIND_NAMES) as ItemKind[]).map((k) =>
              kinds[k] ? <Row key={k} name={KIND_NAMES[k]} t={kinds[k]!} /> : null,
            )}
          </section>
        </>
      )}

      <section className="section">
        <span className="label">Mock history</span>
        {mocks.length ? (
          <MockList mocks={mocks} go={go} />
        ) : (
          <p className="muted small" style={{ marginTop: 10 }}>
            No finished mocks yet.
          </p>
        )}
      </section>
    </>
  );
}
