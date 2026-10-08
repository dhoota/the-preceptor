import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AREAS, EDUCATION_ONLY, REFERENCES, citedWorks, guidelineCitations, itemCitations, type Citation } from "@/lib/references";
import type { Item } from "@/engine/types";
import { useApp } from "../state";

const Ctx = createContext<() => void>(() => {});

/** Opens the Sources & References screen over whatever is showing. Nothing underneath is lost. */
export function useSources(): () => void {
  return useContext(Ctx);
}

/** An outbound link. Capacitor opens it in the system browser. */
export function Ext({ url, children }: { url: string; children: ReactNode }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="ext">
      {children}
    </a>
  );
}

function CiteList({ list }: { list: Citation[] }) {
  return (
    <ul>
      {list.map((c, i) => (
        <li key={i} className="cite">
          {c.label}
          {c.url && (
            <>
              {" "}
              <Ext url={c.url}>Open source</Ext>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

/** The Source block on every answer and rationale screen. */
export function ItemSources({ item }: { item: Item }) {
  const open = useSources();
  return (
    <div className="sources">
      <span className="label">Sources</span>
      <CiteList list={itemCitations(item)} />
      <span className="label" style={{ display: "block", marginTop: 10 }}>
        Guidelines for this topic
      </span>
      <CiteList list={guidelineCitations(item)} />
      <p className="small edu">
        {EDUCATION_ONLY}{" "}
        <button type="button" className="linkbtn" onClick={open}>
          All sources and references
        </button>
      </p>
    </div>
  );
}

export function SourcesProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Ctx.Provider value={() => setOpen(true)}>
      {children}
      {open && <SourcesScreen onClose={() => setOpen(false)} />}
    </Ctx.Provider>
  );
}

function SourcesScreen({ onClose }: { onClose: () => void }) {
  const app = useApp();
  const closeRef = useRef<HTMLButtonElement>(null);
  const works = useMemo(() => citedWorks([...app.items, ...app.cases.flatMap((c) => c.items)]), [app.items, app.cases]);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal sourcesheet" role="dialog" aria-modal="true" aria-labelledby="src-h">
      <div className="inner">
        <button ref={closeRef} type="button" className="back" onClick={onClose}>
          Close
        </button>
        <h1 id="src-h" style={{ marginTop: 8 }}>
          Sources &amp; References
        </h1>
        <p className="edu" style={{ marginTop: 12 }}>
          <b>{EDUCATION_ONLY}</b> Preceptor: NCLEX helps you prepare for the NCLEX-RN. It is not for client care. Follow current guidelines,
          your instructors and local policy.
        </p>
        <p className="muted small">
          Every question shows its sources on the answer screen, after you submit. Each one cites named clinical references and the
          guidelines below.
        </p>

        <section className="section">
          <h2 className="label">Guidelines and references</h2>
          <ul className="reflist">
            {REFERENCES.map((r) => (
              <li key={r.id}>
                <Ext url={r.url}>{r.title}</Ext>
                <span className="muted small" style={{ display: "block" }}>
                  {r.body}. {r.covers}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="label">By Client Needs area</h2>
          {AREAS.map((a) => (
            <p key={a.id} className="small" style={{ margin: "10px 0 0" }}>
              <b>{a.name}:</b>{" "}
              {a.refs.map((r, i) => (
                <span key={r.id}>
                  {i > 0 && ", "}
                  <Ext url={r.url}>{r.title}</Ext>
                </span>
              ))}
            </p>
          ))}
        </section>

        <section className="section">
          <h2 className="label">Works cited in the questions ({works.length})</h2>
          <ul className="reflist small">
            {works.map((s, i) => (
              <li key={i}>
                {s.body}. <i>{s.work}</i>. {s.year}.
                {s.url && (
                  <>
                    {" "}
                    <Ext url={s.url}>Open source</Ext>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
        <div className="actions">
          <button type="button" className="btn block quiet" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
