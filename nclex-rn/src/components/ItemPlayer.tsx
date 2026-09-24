import { useState, type ReactNode } from "react";
import { stepName, needName } from "@/engine/blueprint";
import { KIND_NAMES, score } from "@/engine/score";
import type { Choice, Item, Response } from "@/engine/types";
import { parsePassage, place, splitTemplate, toggle } from "@/engine/ui";
import { Exhibit } from "./Exhibit";

type R<K extends Response["kind"]> = Extract<Response, { kind: K }>;
type I<K extends Item["kind"]> = Extract<Item, { kind: K }>;

interface BodyProps<K extends Item["kind"]> {
  item: I<K>;
  r: R<K>;
  set: (r: R<K>) => void;
  /** Answer shown: inputs lock and every choice shows its reason. */
  reveal: boolean;
}

/** Mark for a choice after the answer shows. */
function markOf(picked: boolean, key: boolean, reveal: boolean): string {
  if (!reveal) return "";
  if (key && picked) return "right";
  if (key) return "missed";
  if (picked) return "wrong";
  return "";
}

function Why({ c, show, keyed }: { c: Choice; show: boolean; keyed: boolean }) {
  if (!show) return null;
  return (
    <span className="why">
      {keyed && <span className="tag pass">Key</span>} {c.why}
    </span>
  );
}

/** One option: a real button with radio or checkbox semantics. */
function Opt({
  c,
  picked,
  keyed,
  reveal,
  round,
  disabled,
  onClick,
}: {
  c: Choice;
  picked: boolean;
  keyed: boolean;
  reveal: boolean;
  round: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role={round ? "radio" : "checkbox"}
      aria-checked={picked}
      className={`opt ${markOf(picked, keyed, reveal)} ${disabled && !reveal ? "capped" : ""}`}
      disabled={reveal || disabled}
      onClick={onClick}
    >
      <span className={`box ${round ? "round" : ""}`} aria-hidden="true" />
      <span className="otext">
        {c.text}
        <Why c={c} show={reveal} keyed={keyed} />
      </span>
    </button>
  );
}

function OptionList({
  options,
  picked,
  correct,
  cap,
  round,
  reveal,
  label,
  onChange,
}: {
  options: Choice[];
  picked: number[];
  correct: number[];
  cap: number;
  round: boolean;
  reveal: boolean;
  label: string;
  onChange: (next: number[]) => void;
}) {
  return (
    <div className="opts" role={round ? "radiogroup" : "group"} aria-label={label}>
      {options.map((c, i) => (
        <Opt
          key={i}
          c={c}
          picked={picked.includes(i)}
          keyed={correct.includes(i)}
          reveal={reveal}
          round={round}
          disabled={!picked.includes(i) && picked.length >= cap && cap > 1}
          onClick={() => onChange(toggle(picked, i, cap))}
        />
      ))}
    </div>
  );
}

function Mc({ item, r, set, reveal }: BodyProps<"mc">) {
  return (
    <OptionList
      options={item.options}
      picked={r.choice === null ? [] : [r.choice]}
      correct={[item.correct]}
      cap={1}
      round
      reveal={reveal}
      label="Choose one"
      onChange={(n) => set({ kind: "mc", choice: n.length ? n[0] : null })}
    />
  );
}

function Msn({ item, r, set, reveal }: BodyProps<"msn">) {
  return (
    <>
      <p className="hint">
        Select {item.select}. <span className="mono">{r.choices.length} of {item.select}</span> selected.
      </p>
      <OptionList
        options={item.options}
        picked={r.choices}
        correct={item.correct}
        cap={item.select}
        round={false}
        reveal={reveal}
        label={`Select ${item.select}`}
        onChange={(choices) => set({ kind: "msn", choices })}
      />
    </>
  );
}

function Sata({ item, r, set, reveal }: BodyProps<"sata">) {
  return (
    <>
      <p className="hint">Select all that apply.</p>
      <OptionList
        options={item.options}
        picked={r.choices}
        correct={item.correct}
        cap={Infinity}
        round={false}
        reveal={reveal}
        label="Select all that apply"
        onChange={(choices) => set({ kind: "sata", choices })}
      />
    </>
  );
}

function Dnd({ item, r, set, reveal }: BodyProps<"dnd">) {
  const [armed, setArmed] = useState<number | null>(null);
  const used = new Set(r.placed.filter((p): p is number => p !== null));

  const tapTarget = (t: number) => {
    if (reveal) return;
    if (armed !== null) {
      set({ kind: "dnd", placed: place(r.placed, t, armed) });
      setArmed(null);
    } else if (r.placed[t] !== null) set({ kind: "dnd", placed: place(r.placed, t, null) });
  };

  const slot = (t: number) => {
    const p = r.placed[t];
    const ok = reveal ? (p === item.correct[t] ? "right" : "wrong") : "";
    const text = p === null ? (armed !== null ? "Place here" : "Empty") : item.tokens[p].text;
    return (
      <button
        key={`s${t}`}
        type="button"
        className={`slot ${p === null ? "empty" : "full"} ${armed !== null && !reveal ? "armed" : ""} ${ok}`}
        disabled={reveal}
        aria-label={`${item.template ? `Blank ${t + 1}` : item.targets[t]}: ${p === null ? "empty" : item.tokens[p].text}`}
        onClick={() => tapTarget(t)}
      >
        {text}
        {reveal && p !== item.correct[t] && <span className="keyline">Key: {item.tokens[item.correct[t]].text}</span>}
      </button>
    );
  };

  return (
    <>
      <p className="hint">Tap a choice, then tap where it goes. Tap a filled space to clear it.</p>
      {item.template ? (
        <p className="sentence">{splitTemplate(item.template).map((part, i) => (typeof part === "number" ? slot(part) : <span key={i}>{part}</span>))}</p>
      ) : (
        <ol className="targets">
          {item.targets.map((t, i) => (
            <li key={i}>
              <span className="tname">{t}</span>
              {slot(i)}
            </li>
          ))}
        </ol>
      )}
      {!reveal && (
        <div className="pool" role="group" aria-label="Choices">
          {item.tokens.map((tk, i) =>
            used.has(i) ? null : (
              <button key={i} type="button" className="token" aria-pressed={armed === i} onClick={() => setArmed(armed === i ? null : i)}>
                {tk.text}
              </button>
            ),
          )}
          {used.size === item.tokens.length && <span className="muted small">Every choice is placed.</span>}
        </div>
      )}
      {reveal && (
        <ul className="whys">
          {item.tokens.map((tk, i) => (
            <li key={i} className={item.correct.includes(i) ? "k" : ""}>
              <b>{tk.text}.</b> <Why c={tk} show keyed={item.correct.includes(i)} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Cloze({ item, r, set, reveal }: BodyProps<"cloze">) {
  return (
    <>
      <p className="hint">Choose an option for each blank.</p>
      <p className="sentence">
        {splitTemplate(item.template).map((part, i) => {
          if (typeof part === "string") return <span key={i}>{part}</span>;
          const b = item.blanks[part];
          const v = r.picks[part];
          const ok = reveal ? (v === b.correct ? "right" : "wrong") : "";
          return (
            <select
              key={i}
              className={`drop ${ok}`}
              aria-label={`Blank ${part + 1}`}
              value={v === null ? "" : String(v)}
              disabled={reveal}
              onChange={(e) => {
                const picks = [...r.picks];
                picks[part] = e.target.value === "" ? null : Number(e.target.value);
                set({ kind: "cloze", picks });
              }}
            >
              <option value="">Select</option>
              {b.options.map((o, j) => (
                <option key={j} value={j}>
                  {o.text}
                </option>
              ))}
            </select>
          );
        })}
      </p>
      {reveal &&
        item.blanks.map((b, k) => (
          <div key={k} className="blankwhy">
            <span className="label">Blank {k + 1}</span>
            <ul className="whys">
              {b.options.map((o, j) => (
                <li key={j} className={`${j === b.correct ? "k" : ""} ${j === r.picks[k] && j !== b.correct ? "x" : ""}`}>
                  <b>{o.text}.</b> <Why c={o} show keyed={j === b.correct} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}

function Highlight({ item, r, set, reveal }: BodyProps<"highlight">) {
  return (
    <>
      <p className="hint">Tap each phrase to highlight it. Tap again to clear it.</p>
      <p className="passage selectable">
        {parsePassage(item.passage).map((p, i) =>
          p.span === undefined ? (
            <span key={i}>{p.text}</span>
          ) : (
            <button
              key={i}
              type="button"
              className={`hl ${markOf(r.spans.includes(p.span), item.correct.includes(p.span), reveal)}`}
              aria-pressed={r.spans.includes(p.span)}
              disabled={reveal}
              onClick={() => set({ kind: "highlight", spans: toggle(r.spans, p.span!) })}
            >
              {p.text}
            </button>
          ),
        )}
      </p>
      {reveal && (
        <ul className="whys">
          {item.spans.map((s, i) => (
            <li key={i} className={`${item.correct.includes(i) ? "k" : ""} ${r.spans.includes(i) && !item.correct.includes(i) ? "x" : ""}`}>
              <b>{s.text}</b> <Why c={s} show keyed={item.correct.includes(i)} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function Matrix({ item, r, set, reveal }: BodyProps<"matrix">) {
  const single = item.mode === "single";
  const cols = item.columns.length;
  return (
    <>
      <p className="hint">{single ? "Choose one option in each row." : "Choose every option that applies in each row."}</p>
      <div className="matrix" style={{ ["--cols" as string]: cols }}>
        <div className="mhead" aria-hidden="true">
          <span />
          {item.columns.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        {item.rows.map((row, i) => (
          <div key={i} className="mrow" role={single ? "radiogroup" : "group"} aria-label={row.text}>
            <span className="mtext">{row.text}</span>
            {item.columns.map((c, j) => {
              const picked = (r.rows[i] ?? []).includes(j);
              return (
                <button
                  key={j}
                  type="button"
                  role={single ? "radio" : "checkbox"}
                  aria-checked={picked}
                  aria-label={c}
                  className={`mcell ${markOf(picked, row.correct.includes(j), reveal)}`}
                  disabled={reveal}
                  onClick={() => {
                    const rows = r.rows.map((x) => [...x]);
                    rows[i] = toggle(rows[i] ?? [], j, single ? 1 : Infinity);
                    set({ kind: "matrix", rows });
                  }}
                >
                  <span className={`box ${single ? "round" : ""}`} aria-hidden="true" />
                  <span className="mcol">{c}</span>
                </button>
              );
            })}
            {reveal && (
              <span className="mwhy why">
                <span className="tag pass">Key: {row.correct.map((k) => item.columns[k]).join(", ")}</span> {row.why}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function Bowtie({ item, r, set, reveal }: BodyProps<"bowtie">) {
  const col = (
    key: "actions" | "condition" | "parameters",
    title: string,
    options: Choice[],
    picked: number[],
    correct: number[],
    cap: number,
  ) => (
    <section className={`bcol ${key}`} aria-label={title}>
      <div className="bhead">
        <span className="label">{title}</span>
        <span className="muted small">Select {cap}</span>
      </div>
      <div className="bslots">
        {Array.from({ length: cap }, (_, k) => (
          <div key={k} className={`bslot ${picked[k] === undefined ? "empty" : ""}`}>
            {picked[k] === undefined ? "Empty" : options[picked[k]].text}
          </div>
        ))}
      </div>
      <OptionList
        options={options}
        picked={picked}
        correct={correct}
        cap={cap}
        round={cap === 1}
        reveal={reveal}
        label={title}
        onChange={(next) =>
          set(
            key === "condition"
              ? { ...r, condition: next.length ? next[0] : null }
              : key === "actions"
                ? { ...r, actions: next }
                : { ...r, parameters: next },
          )
        }
      />
    </section>
  );
  return (
    <>
      <p className="hint">Choose 1 condition, 2 actions to take and 2 parameters to monitor.</p>
      <div className="bowtie">
        {col("actions", "Actions to take", item.actions, r.actions, item.correct.actions, 2)}
        {col("condition", "Condition most likely", item.conditions, r.condition === null ? [] : [r.condition], [item.correct.condition], 1)}
        {col("parameters", "Parameters to monitor", item.parameters, r.parameters, item.correct.parameters, 2)}
      </div>
    </>
  );
}

/** The answer area for any item kind. */
export function ItemBody({ item, r, set, reveal }: { item: Item; r: Response; set: (r: Response) => void; reveal: boolean }) {
  const p = { r, set, reveal } as { r: never; set: (r: Response) => void; reveal: boolean };
  switch (item.kind) {
    case "mc":
      return <Mc item={item} {...p} />;
    case "msn":
      return <Msn item={item} {...p} />;
    case "sata":
      return <Sata item={item} {...p} />;
    case "dnd":
      return <Dnd item={item} {...p} />;
    case "cloze":
      return <Cloze item={item} {...p} />;
    case "highlight":
      return <Highlight item={item} {...p} />;
    case "matrix":
      return <Matrix item={item} {...p} />;
    case "bowtie":
      return <Bowtie item={item} {...p} />;
  }
}

/** Score, rationale, the Canada note and sources, shown once the answer is revealed. */
export function Feedback({ item, r }: { item: Item; r: Response }) {
  const s = score(item, r);
  const cls = s.earned === s.max ? "" : s.earned === 0 ? "unsafe" : "partial";
  return (
    <div className="feedback">
      <div className={`verdict ${cls}`}>
        <span className="label">Score</span>{" "}
        <b className="mono">
          {s.earned} of {s.max}
        </b>
        {!item.reviewed && <span className="tag warn draft">Draft, pending review</span>}
      </div>
      <div className="model">
        <span className="label">Rationale</span>
        <p className="selectable" style={{ marginTop: 6 }}>
          {item.rationale}
        </p>
        {item.calc && (
          <>
            <span className="label">Working</span>
            <ul className="mono small">
              {item.calc.steps.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </>
        )}
        {item.refs && item.refs.length > 0 && (
          <ul className="small">
            {item.refs.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        )}
      </div>
      {item.canada.trim() && (
        <div className="canada">
          <span className="label">In Canada</span>
          <p style={{ margin: "6px 0 0" }}>{item.canada}</p>
        </div>
      )}
      {item.sources.length > 0 && (
        <div className="sources">
          <span className="label">Sources</span>
          <ul>
            {item.sources.map((x, i) => (
              <li key={i} className="cite">
                {x.body}. <i>{x.work}</i>. {x.year}.
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/** Header tags, flag button, exhibit, stem and answer area. */
export function ItemCard({
  item,
  r,
  set,
  reveal,
  flagged,
  onFlag,
  showTabs = true,
  top,
}: {
  item: Item;
  r: Response;
  set: (r: Response) => void;
  reveal: boolean;
  flagged?: boolean;
  onFlag?: () => void;
  showTabs?: boolean;
  top?: ReactNode;
}) {
  return (
    <article className="itemcard" aria-label={KIND_NAMES[item.kind]}>
      <div className="itemhead">
        <span className="meta">
          <span className="tag">{KIND_NAMES[item.kind]}</span>
          {item.trend && <span className="tag">Trend</span>}
          {reveal && <span className="tag">{needName(item.need)}</span>}
          {reveal && <span className="tag">{stepName(item.cjmm)}</span>}
        </span>
        {onFlag && (
          <button type="button" className={`flag ${flagged ? "on" : ""}`} aria-pressed={Boolean(flagged)} onClick={onFlag}>
            {flagged ? "Flagged" : "Flag"}
          </button>
        )}
      </div>
      {top}
      {showTabs && item.tabs && item.tabs.length > 0 && <Exhibit tabs={item.tabs} />}
      <p className="stem selectable">{item.stem}</p>
      <ItemBody key={item.id} item={item} r={r} set={set} reveal={reveal} />
      {reveal && <Feedback item={item} r={r} />}
    </article>
  );
}
