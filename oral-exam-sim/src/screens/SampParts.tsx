import { topicName } from "@/blueprint/priorityTopics";
import { markQuestion, type Samp, type SampQuestion, type SampResponse } from "@/engine/samp";

const WORD = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];

export function instruction(q: SampQuestion): string {
  if (q.kind === "single") return "Select one.";
  if (q.kind === "menu") {
    const none = q.options.some((o) => /^none\b/i.test(o));
    return `Select ${WORD[q.select] ?? q.select}${none ? ", or None if none are required" : ""}.`;
  }
  return `List ${WORD[q.required] ?? q.required}.`;
}

export function emptyResponse(q: SampQuestion): SampResponse {
  if (q.kind === "single") return { kind: "single", choice: null };
  if (q.kind === "menu") return { kind: "menu", choices: [] };
  return { kind: "short", lines: Array.from({ length: q.required }, () => "") };
}

export function isAnswered(q: SampQuestion, r?: SampResponse): boolean {
  if (!r) return false;
  if (r.kind === "single") return r.choice !== null;
  if (r.kind === "menu") return r.choices.length > 0;
  return r.lines.some((l) => l.trim());
}

/** Stem block, with the case title and priority topic. */
export function SampStem({ s, showTopic = true }: { s: Samp; showTopic?: boolean }) {
  return (
    <div className="sampstem selectable">
      {showTopic && <div className="label">{topicName(s.topic)}</div>}
      <h2 style={{ margin: "6px 0 10px" }}>{s.title}</h2>
      {s.stem.split(/\n+/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/** Answer input for one question. */
export function QuestionInput({
  q,
  n,
  value,
  onChange,
}: {
  q: SampQuestion;
  n: number;
  value: SampResponse | undefined;
  onChange: (r: SampResponse) => void;
}) {
  const r = value ?? emptyResponse(q);
  return (
    <div className="sampq">
      {q.update && <p className="sampupdate selectable">{q.update}</p>}
      <div className="qhead">
        <span className="mono qn">Q{n}</span>
        <span className="selectable">
          {q.prompt} <b>{instruction(q)}</b>
        </span>
      </div>
      {q.kind === "short" && r.kind === "short" && (
        <div className="shortlines">
          {r.lines.map((line, i) => (
            <label key={i} className="shortline">
              <span className="mono">{i + 1}.</span>
              <input
                type="text"
                value={line}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                onChange={(e) => onChange({ kind: "short", lines: r.lines.map((x, j) => (j === i ? e.target.value : x)) })}
                aria-label={`Answer ${i + 1}`}
              />
            </label>
          ))}
        </div>
      )}
      {q.kind === "single" && r.kind === "single" && (
        <div className="opts" role="radiogroup">
          {q.options.map((o, i) => (
            <button key={i} className="opt" role="radio" aria-checked={r.choice === i} onClick={() => onChange({ kind: "single", choice: i })}>
              <span className="box round" /> {o}
            </button>
          ))}
        </div>
      )}
      {q.kind === "menu" && r.kind === "menu" && (
        <div className="opts" role="group">
          {q.options.map((o, i) => {
            const on = r.choices.includes(i);
            const full = !on && r.choices.length >= q.select;
            return (
              <button
                key={i}
                className="opt"
                role="checkbox"
                aria-checked={on}
                disabled={full}
                onClick={() =>
                  onChange({ kind: "menu", choices: on ? r.choices.filter((c) => c !== i) : [...r.choices, i] })
                }
              >
                <span className="box" /> {o}
              </button>
            );
          })}
          <div className="muted small">
            {r.choices.length} of {q.select} selected
          </div>
        </div>
      )}
    </div>
  );
}

/** Marked question with the key, the candidate's lines and override toggles. */
export function MarkedQuestion({
  q,
  n,
  value,
  onOverride,
  source,
}: {
  q: SampQuestion;
  n: number;
  value: SampResponse | undefined;
  onOverride?: (line: number, counted: boolean) => void;
  source?: string;
}) {
  const m = markQuestion(q, value);
  const pct = Math.round(m.score * 100);
  return (
    <div className="sampq marked">
      {q.update && <p className="sampupdate selectable">{q.update}</p>}
      <div className="qhead">
        <span className="mono qn">Q{n}</span>
        <span className="selectable">
          {q.prompt} <b>{instruction(q)}</b>
        </span>
        <span className={`qscore mono ${pct === 100 ? "ok" : pct === 0 ? "no" : "part"}`}>
          {m.earned}/{m.max}
        </span>
      </div>

      {q.kind === "short" && (
        <>
          <div className="label" style={{ marginTop: 10 }}>
            Your answers
          </div>
          {(m.lines ?? []).length === 0 && <p className="muted small">No answer given.</p>}
          {(m.lines ?? []).map((l, i) => (
            <div key={i} className={`ansline ${l.counted ? "ok" : "no"}`}>
              <span className="selectable">{l.line}</span>
              <span className="small muted">
                {l.dangerous
                  ? `Dangerous: ${l.unacceptable}`
                  : l.unacceptable
                    ? `Not accepted: ${l.unacceptable}`
                    : l.itemId
                      ? `Matched: ${q.accept.find((a) => a.id === l.itemId)?.text}`
                      : "No match in the key"}
                {l.overridden && " · changed by you"}
              </span>
              {onOverride && !l.dangerous && (
                <button className="linkbtn small" onClick={() => onOverride(i, !l.counted)}>
                  {l.counted ? "Do not count" : "Count this"}
                </button>
              )}
            </div>
          ))}
          <div className="key">
            <div className="label">Answer key · any {q.required}</div>
            <ul>
              {q.accept.map((a) => (
                <li key={a.id}>{a.text}</li>
              ))}
            </ul>
            {!!q.unacceptable?.length && (
              <>
                <div className="label" style={{ marginTop: 8 }}>
                  Not accepted
                </div>
                <ul>
                  {q.unacceptable.map((u) => (
                    <li key={u.text}>
                      {u.text}
                      {u.dangerous ? " (dangerous. Scores the question zero)" : ""}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}

      {q.kind !== "short" && (
        <div className="opts">
          {q.options.map((o, i) => {
            const chosen = value?.kind === "single" ? value.choice === i : value?.kind === "menu" ? value.choices.includes(i) : false;
            const right = q.kind === "single" ? q.correct === i : q.correct.includes(i);
            return (
              <div key={i} className={`opt static ${right ? "right" : chosen ? "wrong" : ""}`}>
                <span className={`box ${q.kind === "single" ? "round" : ""} ${chosen ? "on" : ""}`} /> {o}
                {right && <span className="small"> Correct</span>}
              </div>
            );
          })}
        </div>
      )}

      <div className="explain selectable">
        <p style={{ margin: 0 }}>{q.explanation}</p>
        <div className="cite">
          Key feature {q.keyFeature.n} · {topicName(q.keyFeature.topic)}
          {source ? ` · Source: ${source}` : ""}
        </div>
      </div>
    </div>
  );
}
