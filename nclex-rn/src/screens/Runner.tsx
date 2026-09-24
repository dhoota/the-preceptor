import { useState } from "react";
import { Exhibit } from "@/components/Exhibit";
import { ItemCard } from "@/components/ItemPlayer";
import { CJMM, stepName } from "@/engine/blueprint";
import { KIND_NAMES, emptyResponse, isComplete, score } from "@/engine/score";
import type { CaseStudy, Item, Response, Score } from "@/engine/types";
import { caseTabsAt, toAnswered } from "@/engine/ui";
import { useApp } from "../state";

/**
 * Runs a practice set or a case study one item at a time. Every submitted
 * item is saved as an answer straight away, so leaving early keeps them.
 */
export function Runner({ items, title, caseStudy, onDone }: { items: Item[]; title: string; caseStudy?: CaseStudy; onDone: () => void }) {
  const app = useApp();
  // Read the setting once, so a change mid set does not reshuffle the flow.
  const [revealEach] = useState(app.settings.revealEachItem);
  const [idx, setIdx] = useState(0);
  const [responses, setResponses] = useState<Record<string, Response>>({});
  const [scores, setScores] = useState<Record<string, Score>>({});
  const [finished, setFinished] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  if (!items.length) return <p className="muted">This set has no items.</p>;

  if (finished) {
    const earned = items.reduce((n, i) => n + (scores[i.id]?.earned ?? 0), 0);
    const max = items.reduce((n, i) => n + (scores[i.id]?.max ?? 0), 0);
    return (
      <>
        <div className="label">{title}</div>
        <div className="score">
          <div className="big">{max ? Math.round((earned / max) * 100) : 0}%</div>
          <div className="muted small" style={{ maxWidth: 220, textAlign: "right" }}>
            {earned} of {max} points on {items.length} items. Tap an item to review it.
          </div>
        </div>
        {items.map((it, k) => {
          const s = scores[it.id];
          return (
            <div key={it.id}>
              <button className="reviewrow" aria-expanded={open === it.id} onClick={() => setOpen(open === it.id ? null : it.id)}>
                <span>
                  <span className="mono muted">{k + 1}.</span> {KIND_NAMES[it.kind]}
                  <span className="muted small" style={{ display: "block" }}>
                    {it.topic}
                  </span>
                </span>
                <span className={`qscore ${!s ? "" : s.earned === s.max ? "ok" : s.earned ? "part" : "no"}`}>{s ? `${s.earned}/${s.max}` : "Skipped"}</span>
              </button>
              {open === it.id && (
                <div className="reviewbody">
                  <ItemCard
                    item={it}
                    r={responses[it.id] ?? emptyResponse(it)}
                    set={() => undefined}
                    reveal
                    flagged={app.flags.includes(it.id)}
                    onFlag={() => app.toggleFlag(it.id)}
                  />
                </div>
              )}
            </div>
          );
        })}
        <div className="actions">
          <button className="btn" onClick={onDone}>
            Done
          </button>
        </div>
      </>
    );
  }

  const item = items[idx];
  const r = responses[item.id] ?? emptyResponse(item);
  const submitted = Boolean(scores[item.id]);
  const reveal = revealEach && submitted;
  const last = idx === items.length - 1;

  const next = () => {
    if (last) setFinished(true);
    else setIdx(idx + 1);
    window.scrollTo(0, 0);
  };

  async function submit() {
    if (submitted || !isComplete(item, r)) return;
    const s = score(item, r);
    setScores((x) => ({ ...x, [item.id]: s }));
    await app.addAnswers([toAnswered(item, s, Date.now())]);
    if (!revealEach) next();
  }

  const tabs = caseStudy ? caseTabsAt(caseStudy, idx) : [];
  const stepIdx = CJMM.findIndex((s) => s.id === item.cjmm);

  return (
    <>
      <div className="runhead">
        <span className="label">{title}</span>
        <span className="mono muted small">
          {idx + 1} of {items.length}
        </span>
      </div>
      {!caseStudy && (
        <div className="progress" aria-hidden="true">
          <div style={{ width: `${((idx + (submitted ? 1 : 0)) / items.length) * 100}%` }} />
        </div>
      )}

      {caseStudy && (
        <>
          <ol className="steps" aria-label="Clinical judgment steps">
            {CJMM.map((s, k) => (
              <li key={s.id} className={k === stepIdx ? "on" : k < stepIdx ? "done" : ""} aria-current={k === stepIdx ? "step" : undefined}>
                <span className="dot" aria-hidden="true" />
                <span className="sname">{s.name}</span>
              </li>
            ))}
          </ol>
          <p className="stepnow">
            Item {idx + 1} of {items.length}. {stepName(item.cjmm)}.
          </p>
          <details className="intro" open={idx === 0}>
            <summary>Case summary</summary>
            <p className="selectable">{caseStudy.intro}</p>
          </details>
          <Exhibit tabs={tabs} />
        </>
      )}

      <ItemCard
        item={item}
        r={r}
        set={(x) => !submitted && setResponses((all) => ({ ...all, [item.id]: x }))}
        reveal={reveal}
        flagged={app.flags.includes(item.id)}
        onFlag={() => app.toggleFlag(item.id)}
        showTabs={!caseStudy}
      />

      <div className="dock">
        <div className="inner">
          {!submitted ? (
            <button className="btn" disabled={!isComplete(item, r)} onClick={submit}>
              Submit
            </button>
          ) : (
            <button className="btn" onClick={next}>
              {last ? "See results" : "Next item"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
