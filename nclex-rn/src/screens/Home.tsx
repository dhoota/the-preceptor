import { useMemo, useState } from "react";
import { Lock } from "@/components/Lock";
import { overall } from "@/engine/analytics";
import { CJMM, NEEDS } from "@/engine/blueprint";
import { KIND_NAMES } from "@/engine/score";
import type { Item, ItemKind } from "@/engine/types";
import { buildSet, missedIds, pct } from "@/engine/ui";
import type { Go } from "../routes";
import { useApp } from "../state";

interface SetDef {
  key: string;
  name: string;
  items: Item[];
}

export function Home({ go }: { go: Go }) {
  const app = useApp();
  const [size, setSize] = useState<10 | 25>(10);
  const missed = useMemo(() => missedIds(app.answers), [app.answers]);
  const all = app.items;
  const tally = overall(app.answers);

  const special: SetDef[] = [
    { key: "all", name: "Mixed set from every area", items: all },
    { key: "missed", name: "Missed and flagged", items: all.filter((i) => missed.has(i.id) || app.flags.includes(i.id)) },
  ];
  const needs: SetDef[] = NEEDS.map((n) => ({ key: n.id, name: n.name, items: all.filter((i) => i.need === n.id) }));
  const steps: SetDef[] = CJMM.map((s) => ({ key: s.id, name: s.name, items: all.filter((i) => i.cjmm === s.id) }));
  const kinds: SetDef[] = (Object.keys(KIND_NAMES) as ItemKind[]).map((k) => ({
    key: k,
    name: KIND_NAMES[k],
    items: all.filter((i) => i.kind === k),
  }));
  kinds.push({ key: "trend", name: "Trend", items: all.filter((i) => i.trend) });

  function start(d: SetDef) {
    const pool = d.items.filter((i) => app.canOpenItem(i.id));
    if (!pool.length) {
      if (d.items.length) go({ name: "paywall" });
      return;
    }
    const ids = buildSet(pool, size, app.answers, Date.now());
    go({ name: "practice", ids, title: d.name, key: Date.now() });
  }

  const row = (d: SetDef) => {
    const open = d.items.filter((i) => app.canOpenItem(i.id)).length;
    const locked = d.items.length - open;
    const empty = d.items.length === 0;
    return (
      <li key={d.key}>
        <button className={`setrow ${!open && !empty ? "locked" : ""}`} disabled={empty} onClick={() => start(d)}>
          <span className="t">{d.name}</span>
          <span className="right mono">
            {empty ? (
              <span className="muted">None yet</span>
            ) : (
              <>
                {open}
                {locked > 0 && (
                  <span className="muted">
                    {" "}
                    <Lock /> {locked}
                  </span>
                )}
              </>
            )}
          </span>
        </button>
      </li>
    );
  };

  return (
    <>
      <div className="hero">
        <div className="label">Practice</div>
        <h1 style={{ marginTop: 6 }}>Build a practice set</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Pick an area to practice. Items you have not seen come first.
        </p>
      </div>

      <div className="stats">
        <div>
          <div className="label">Items</div>
          <div className="num">{all.length}</div>
        </div>
        <div>
          <div className="label">Answered</div>
          <div className="num">{tally.items}</div>
        </div>
        <div>
          <div className="label">Points</div>
          <div className="num">{pct(tally.pct)}</div>
        </div>
      </div>

      {app.demo && (
        <p className="duebar small">
          Demo bank. The dev server is showing sample items because the real bank is still small.
        </p>
      )}

      {all.length === 0 ? (
        <div className="card empty" style={{ marginTop: 22 }}>
          <h3>The item bank is being written</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            Items appear here as each batch is added. Case studies and the adaptive mock fill in the same way.
          </p>
        </div>
      ) : (
        <>
          <div className="sizepick" role="radiogroup" aria-label="Set size">
            <span className="label">Set size</span>
            {([10, 25] as const).map((n) => (
              <button key={n} className="chip" role="radio" aria-checked={size === n} aria-pressed={size === n} onClick={() => setSize(n)}>
                {n} items
              </button>
            ))}
          </div>
          {!app.access.full && (
            <p className="muted small" style={{ marginTop: 8 }}>
              Counts show open items. <Lock /> marks items that need full access.
            </p>
          )}

          <section className="section">
            <span className="label">Quick sets</span>
            <ul className="sets">{special.map(row)}</ul>
          </section>
          <section className="section">
            <span className="label">By Client Needs area</span>
            <ul className="sets">{needs.map(row)}</ul>
          </section>
          <section className="section">
            <span className="label">By clinical judgment step</span>
            <ul className="sets">{steps.map(row)}</ul>
          </section>
          <section className="section">
            <span className="label">By item type</span>
            <ul className="sets">{kinds.map(row)}</ul>
          </section>
        </>
      )}
    </>
  );
}
