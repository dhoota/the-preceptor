import { useMemo, useState } from "react";
import { getCase } from "@/cases";
import { deckStats, dueCards } from "@/engine";
import type { Go } from "../routes";
import { useApp } from "../state";

export function Review({ go }: { go: Go }) {
  const app = useApp();
  const [shown, setShown] = useState(false);
  // Freeze the queue for this sitting so cards do not jump as they are answered.
  const [queue] = useState(() => dueCards(app.deck, Date.now()).map((c) => c.key));
  const [i, setI] = useState(0);
  const stats = useMemo(() => deckStats(app.deck, Date.now()), [app.deck]);

  const key = queue[i];
  const card = key ? app.deck[key] : undefined;
  const c = card && getCase(card.caseId);
  const item = c?.rubric.find((r) => r.id === card!.itemId);
  const question = c?.nodes.find((n) => n.kind === "question" && n.rubric.includes(card!.itemId));

  async function answer(recalled: boolean) {
    await app.answerReview(key, recalled);
    setShown(false);
    setI((x) => x + 1);
  }

  return (
    <>
      <div className="label">Spaced review</div>
      <h1 style={{ marginTop: 6 }}>Missed points</h1>
      <p className="muted small" style={{ marginTop: 8 }}>
        <span className="mono">{stats.total}</span> in deck · <span className="mono">{stats.learning}</span> learning ·{" "}
        <span className="mono">{stats.retired}</span> retired
      </p>

      {!card || !c || !item ? (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>{stats.total === 0 ? "Nothing to review yet." : "All caught up."}</h3>
          <p className="muted" style={{ marginTop: 8, marginBottom: 14 }}>
            {stats.total === 0
              ? "Points you miss in a case land here. They come back on a schedule until they stick."
              : "Your next cards are scheduled. Run another case or come back later."}
          </p>
          <button className="btn small" onClick={() => go({ name: "home" })}>
            Go to cases
          </button>
        </div>
      ) : (
        <div className="card flash" style={{ marginTop: 20 }}>
          <div>
            <div className="label" style={{ marginBottom: 8 }}>
              {i + 1} of {queue.length} · {c.title}
            </div>
            <div className="q">
              {question && question.kind === "question" ? question.prompt : "What does a strong answer include here?"}
            </div>
            <div className="muted small" style={{ marginTop: 8 }}>
              Name the point you missed before you reveal it.
            </div>
            {shown && (
              <div className="a selectable">
                <div className="key">
                  {item.text} {item.critical && <span className="tag fail">Critical</span>}
                </div>
                <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
                  {item.teaching}
                </p>
                {c.sources.find((s) => s.id === item.source) && (
                  <div className="cite">Source: {c.sources.find((s) => s.id === item.source)!.citation}</div>
                )}
              </div>
            )}
          </div>
          <div className="actions">
            {!shown ? (
              <button className="btn" onClick={() => setShown(true)}>
                Show the point
              </button>
            ) : (
              <>
                <button className="btn ghost" onClick={() => answer(false)}>
                  Missed it
                </button>
                <button className="btn" onClick={() => answer(true)}>
                  Knew it
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
