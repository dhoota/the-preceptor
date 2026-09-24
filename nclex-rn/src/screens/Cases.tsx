import { Lock } from "@/components/Lock";
import { FREE_CASES } from "@/lib/access";
import { latestScores } from "@/engine/ui";
import type { Go } from "../routes";
import { useApp } from "../state";
import { Runner } from "./Runner";

export function Cases({ go }: { go: Go }) {
  const app = useApp();
  const last = latestScores(app.answers);
  return (
    <>
      <div className="label">Case studies</div>
      <h1 style={{ marginTop: 6 }}>Case studies</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        Each case gives six items that walk the clinical judgment steps in order. The chart updates as the case moves on.
      </p>
      {!app.access.full && app.cases.length > 0 && (
        <p className="muted small">
          {FREE_CASES} case is free. <Lock /> marks cases that need full access.
        </p>
      )}
      {app.cases.length === 0 ? (
        <div className="card empty" style={{ marginTop: 22 }}>
          <h3>No case studies yet</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Case studies are being written. They appear here as each batch is added.
          </p>
        </div>
      ) : (
        <ul className="cases">
          {app.cases.map((c, k) => {
            const open = app.canOpenCase(c.id);
            const done = c.items.filter((i) => last.has(i.id));
            const earned = done.reduce((n, i) => n + last.get(i.id)!.earned, 0);
            const max = done.reduce((n, i) => n + last.get(i.id)!.max, 0);
            return (
              <li key={c.id}>
                <button className={`caserow ${open ? "" : "locked"}`} onClick={() => go(open ? { name: "case", id: c.id } : { name: "paywall" })}>
                  <span className="n">{String(k + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="t">{c.title}</span>
                    <span className="meta">
                      <span className="tag">{c.items.length} items</span>
                      {!c.reviewed && <span className="tag warn">Draft, pending review</span>}
                    </span>
                  </span>
                  <span className="right">{open ? (done.length ? `${earned}/${max}` : "") : <Lock />}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export function CaseRun({ id, go }: { id: string; go: Go }) {
  const app = useApp();
  const c = app.cases.find((x) => x.id === id);
  if (!c) return <p className="muted">Case study not found.</p>;
  if (!app.canOpenCase(c.id))
    return (
      <>
        <p className="muted">This case study needs full access.</p>
        <button className="btn" onClick={() => go({ name: "paywall" })}>
          See options
        </button>
      </>
    );
  return <Runner items={c.items} title={c.title} caseStudy={c} onDone={() => go({ name: "cases" })} />;
}
