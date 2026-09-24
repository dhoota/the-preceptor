import { useEffect, useState } from "react";
import type { Tab } from "@/engine/types";

/** Chart tabs as in an electronic health record. Tables scroll sideways inside their own box. */
export function Exhibit({ tabs, label = "Client chart" }: { tabs: Tab[]; label?: string }) {
  const [on, setOn] = useState(0);
  const titles = tabs.map((t) => t.title).join("|");
  useEffect(() => {
    if (on >= tabs.length) setOn(0);
  }, [titles]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!tabs.length) return null;
  const t = tabs[Math.min(on, tabs.length - 1)];
  return (
    <div className="exhibit">
      <div className="xtabs" role="tablist" aria-label={label}>
        {tabs.map((x, i) => (
          <button key={x.title} role="tab" id={`xt-${i}`} aria-selected={i === on} aria-controls="xpanel" onClick={() => setOn(i)}>
            {x.title}
          </button>
        ))}
      </div>
      <div className="xpanel selectable" role="tabpanel" id="xpanel" aria-labelledby={`xt-${on}`}>
        {t.text &&
          t.text
            .split("\n")
            .filter((l) => l.trim())
            .map((l, i) => <p key={i}>{l}</p>)}
        {t.table && (
          <div className="xscroll">
            <table className="xtable">
              <thead>
                <tr>
                  {t.table.head.map((h, i) => (
                    <th key={i} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((c, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          {c}
                        </th>
                      ) : (
                        <td key={j}>{c}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
