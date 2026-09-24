import { useEffect, useMemo, useRef, useState } from "react";
import { getCase } from "@/cases";
import {
  advance,
  askFinding,
  choicesFor,
  currentNode,
  newAttempt,
  questionRange,
  questionsOnPath,
  type Attempt,
} from "@/engine";
import { speak, stopSpeaking } from "@/lib/speech";
import type { Go } from "../routes";
import { useApp } from "../state";

type Phase = "stem" | "node" | "choose" | "reveal";

export const QUALITY_LABEL = { strong: "What the examiner wanted", partial: "Partly there", unsafe: "The examiner would stop you here" } as const;

function useNow(active: boolean) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, [active]);
  return now;
}

const mmss = (s: number) => {
  const a = Math.abs(Math.round(s));
  return `${s < 0 ? "+" : ""}${String(Math.floor(a / 60)).padStart(2, "0")}:${String(a % 60).padStart(2, "0")}`;
};

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\n+/).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}

export function Runner({ id, mode, go }: { id: string; mode: "practice" | "exam"; go: Go }) {
  const app = useApp();
  const c = getCase(id)!;
  const exam = mode === "exam";
  const [attempt, setAttempt] = useState<Attempt>(() =>
    newAttempt(c, mode, Date.now(), `${c.id}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`),
  );
  const [phase, setPhase] = useState<Phase>("stem");
  const [qStart, setQStart] = useState(Date.now());
  const [used, setUsed] = useState(0);
  const [asked, setAsked] = useState<{ label: string; result: string }[]>([]);
  const [sheet, setSheet] = useState(false);
  const [notes, setNotes] = useState("");
  const node = currentNode(c, attempt);
  const now = useNow(true);
  const range = useMemo(() => questionRange(c), [c]);
  const answered = questionsOnPath(c, attempt).length - (node.kind === "question" && phase === "node" ? 1 : 0);
  const caseSecs = (now - attempt.startedAt) / 1000;
  const overCase = caseSecs > c.durationMinutes * 60;
  const lastSpoken = useRef("");

  const spoken = phase === "stem" ? c.stem : node.kind === "question" ? node.prompt : node.text;
  const speakNow = (t: string) => speak(t, app.settings.rate);

  // Read each examiner line once when it appears.
  useEffect(() => {
    if (!app.settings.speak) return;
    if (phase === "choose" || phase === "reveal") return;
    const key = `${phase}:${node.id}`;
    if (lastSpoken.current === key) return;
    lastSpoken.current = key;
    speakNow(spoken);
  }, [phase, node.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => void stopSpeaking(), []);

  const remaining = node.kind === "question" ? node.seconds - (now - qStart) / 1000 : 0;

  // Exam day: time is up, the examiner moves on.
  useEffect(() => {
    if (exam && phase === "node" && node.kind === "question" && remaining <= 0) doneAnswering();
  }, [remaining <= 0]); // eslint-disable-line react-hooks/exhaustive-deps

  function moveOn(next: Attempt) {
    setAttempt(next);
    setAsked([]);
    setNotes("");
    setPhase("node");
    setQStart(Date.now());
    window.scrollTo(0, 0);
  }

  function doneAnswering() {
    if (node.kind !== "question") return;
    stopSpeaking();
    const secs = Math.min(node.seconds, (Date.now() - qStart) / 1000);
    setUsed(secs);
    if (choicesFor(node).length) setPhase("choose");
    else if (!exam && app.settings.revealEachQuestion) setPhase("reveal");
    else moveOn(advance(c, attempt, Date.now(), { usedSeconds: secs }));
  }

  function choose(choiceId: string) {
    if (node.kind !== "question") return;
    if (!exam && app.settings.revealEachQuestion) {
      setAttempt({ ...attempt, path: attempt.path.map((s, i) => (i === attempt.path.length - 1 ? { ...s, choiceId } : s)) });
      setPhase("reveal");
    } else moveOn(advance(c, attempt, Date.now(), { choiceId, usedSeconds: used }));
  }

  function afterReveal() {
    const choiceId = attempt.path[attempt.path.length - 1].choiceId;
    moveOn(advance(c, attempt, Date.now(), { choiceId, usedSeconds: used }));
  }

  async function finish() {
    const done = { ...attempt, finishedAt: attempt.finishedAt ?? Date.now() };
    await app.saveAttempt(done);
    go({ name: "score", attemptId: done.id });
  }

  function ask(fid: string) {
    const r = askFinding(c, attempt, fid);
    const f = c.findings.find((x) => x.id === fid)!;
    setAttempt(r.attempt);
    setAsked((xs) => (xs.some((x) => x.label === f.label) ? xs : [...xs, { label: f.label, result: r.result }]));
    setSheet(false);
    if (app.settings.speak) speakNow(`${f.label}. ${r.result}`);
  }

  const low = node.kind === "question" && remaining < 10;
  const ring = node.kind === "question" ? Math.max(0, remaining / node.seconds) : 0;

  return (
    <>
      <div className="runhead">
        <span className="label">
          {exam ? "Exam day" : "Practice"} · {c.title}
        </span>
        <span className={`clock ${overCase ? "over" : ""}`}>
          {mmss(caseSecs)} / {c.durationMinutes}:00
        </span>
      </div>
      <div className="progress" aria-hidden="true">
        <div style={{ width: `${Math.min(100, (Math.max(0, answered) / Math.max(1, range.max)) * 100)}%` }} />
      </div>

      {phase === "stem" ? (
        <Examiner text={c.stem} phaseLabel="The stem" onSpeak={() => speakNow(c.stem)} />
      ) : (
        <Examiner
          text={node.kind === "question" ? node.prompt : node.text}
          phaseLabel={node.kind === "end" ? "Case closed" : node.phase}
          onSpeak={() => speakNow(spoken)}
        />
      )}

      {asked.length > 0 && (
        <div className="findlog selectable">
          {asked.map((a) => (
            <div key={a.label}>
              <b>{a.label}</b>
              {a.result}
            </div>
          ))}
        </div>
      )}

      {phase === "node" && node.kind === "question" && (
        <>
          <div className={`timer ${low ? "low" : ""}`}>
            <svg className="ring" viewBox="0 0 58 58" aria-hidden="true">
              <circle className="bg" cx="29" cy="29" r="25" />
              <circle
                className="fg"
                cx="29"
                cy="29"
                r="25"
                strokeDasharray={2 * Math.PI * 25}
                strokeDashoffset={2 * Math.PI * 25 * (1 - ring)}
                transform="rotate(-90 29 29)"
              />
            </svg>
            <div>
              <div className={`num ${remaining < 0 ? "" : ""}`} style={remaining < 0 ? { color: "var(--red)" } : undefined}>
                {mmss(remaining)}
              </div>
              <div className="muted small">{exam ? "Answer out loud. Time ends the question." : "Answer out loud."}</div>
            </div>
          </div>
          <textarea
            className="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes. Not saved or scored."
            aria-label="Notes"
          />
        </>
      )}

      {phase === "choose" && node.kind === "question" && (
        <>
          <div className="label" style={{ marginTop: 22 }}>
            Which is closest to what you said?
          </div>
          <div className="choices">
            {choicesFor(node).map((ch) => (
              <button key={ch.id} className="choice" onClick={() => choose(ch.id)}>
                {ch.label}
              </button>
            ))}
          </div>
          <p className="muted small" style={{ marginTop: 10 }}>
            Be honest. The case follows your choice, as a real examiner would.
          </p>
        </>
      )}

      {phase === "reveal" && node.kind === "question" && (() => {
        const picked = node.choices?.find((ch) => ch.id === attempt.path[attempt.path.length - 1].choiceId);
        return picked && choicesFor(node).length ? (
          <div className={`verdict ${picked.quality}`}>
            <div className="label">{QUALITY_LABEL[picked.quality]}</div>
            <p className="serif" style={{ margin: "6px 0 0" }}>{picked.feedback}</p>
          </div>
        ) : null;
      })()}

      {phase === "reveal" && node.kind === "question" && (
        <div className="model selectable">
          <div className="label">Model answer</div>
          <ul>
            {node.modelAnswer.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {sheet && (
        <div className="scrim" onClick={() => setSheet(false)}>
          <div className="sheet" role="dialog" aria-label="Ask for" onClick={(e) => e.stopPropagation()}>
            <div className="label">Ask the examiner for</div>
            <div className="grid">
              {c.findings.map((f) => (
                <button key={f.id} className={attempt.findingsAsked.includes(f.id) ? "asked" : ""} onClick={() => ask(f.id)}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="actions">
              <button className="btn quiet" onClick={() => setSheet(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="dock">
        <div className="inner">
          {phase === "stem" && (
            <button className="btn" onClick={() => setPhase("node")}>
              Begin
            </button>
          )}
          {phase === "node" && node.kind === "say" && (
            <>
              <button className="btn quiet" onClick={() => setSheet(true)}>
                Ask for
              </button>
              <button className="btn" onClick={() => moveOn(advance(c, attempt, Date.now()))}>
                Continue
              </button>
            </>
          )}
          {phase === "node" && node.kind === "question" && (
            <>
              <button className="btn quiet" onClick={() => setSheet(true)}>
                Ask for
              </button>
              <button className="btn" onClick={doneAnswering}>
                Done answering
              </button>
            </>
          )}
          {phase === "reveal" && (
            <button className="btn" onClick={afterReveal}>
              Next question
            </button>
          )}
          {phase === "node" && node.kind === "end" && (
            <button className="btn" onClick={finish}>
              Mark my answers
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function Examiner({ text, phaseLabel, onSpeak }: { text: string; phaseLabel?: string; onSpeak: () => void }) {
  return (
    <div className="examiner selectable" aria-live="polite">
      <div className="who">
        <span>Examiner</span>
        <button className="speakbtn" onClick={onSpeak} aria-label="Read aloud">
          READ ALOUD
        </button>
      </div>
      {phaseLabel && <div className="phase">{phaseLabel}</div>}
      <div className="said">
        <Paragraphs text={text} />
      </div>
    </div>
  );
}
