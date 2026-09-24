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
import { ORAL_READING_MINUTES, ORAL_STATION_MINUTES } from "@/engine/exam";
import { VITAL_LABELS } from "@/engine/samp";
import type { OralCard } from "@/engine/types";

/** The labelled block of a CFPC oral card, in order. */
function cardLines(card: OralCard): [string, string][] {
  const label: Record<string, string> = { resp: "Respiration", bp: "Blood pressure" };
  const vitals = VITAL_LABELS.filter(([k]) => card.vitals[k]).map(([k, l]) => [label[k] ?? l, card.vitals[k]!] as [string, string]);
  return [...vitals, ["Prescribed medication", card.medications], ["Allergies", card.allergies]];
}
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

export function Runner({
  id,
  mode,
  mockOralId,
  go,
}: {
  id: string;
  mode: "practice" | "exam" | "station";
  mockOralId?: string;
  go: Go;
}) {
  const app = useApp();
  const c = getCase(id)!;
  // Station mode is exam day rules plus the fixed 12 minute station clock.
  const station = mode === "station";
  const exam = mode === "exam" || station;
  const [stationStart, setStationStart] = useState<number | null>(null);
  // CFPC stations give 2 minutes to read the scenario out loud before the 12 minutes start.
  const [readStart] = useState(() => Date.now());
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
  const caseSecs = (now - (stationStart ?? attempt.startedAt)) / 1000;
  const stationLeft = station && stationStart ? ORAL_STATION_MINUTES * 60 - caseSecs : null;
  const overCase = station ? (stationLeft ?? 1) <= 60 : caseSecs > c.durationMinutes * 60;
  const lastSpoken = useRef("");

  const readLeft = station && phase === "stem" ? ORAL_READING_MINUTES * 60 - (now - readStart) / 1000 : null;
  const cardText = c.card ? cardLines(c.card).map(([k, v]) => `${k}: ${v}.`).join(" ") : "";
  const spoken = phase === "stem" ? `${c.stem} ${cardText}`.trim() : node.kind === "question" ? node.prompt : node.text;
  const speakNow = (t: string) => speak(t, app.settings.rate);

  // Read each examiner line once when it appears.
  useEffect(() => {
    if (!app.settings.speak) return;
    if (phase === "choose" || phase === "reveal") return;
    // In a station the candidate reads the scenario aloud. Speech stays one tap away.
    if (station && phase === "stem") return;
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
    go({ name: "score", attemptId: done.id, mockOralId });
  }

  // Reading time over: the 12 minutes start.
  useEffect(() => {
    if (readLeft !== null && readLeft <= 0 && phase === "stem") startCase();
  }, [readLeft !== null && readLeft <= 0]); // eslint-disable-line react-hooks/exhaustive-deps

  function startCase() {
    if (station) setStationStart(Date.now());
    setPhase("node");
  }

  // The station ends at 12 minutes wherever the candidate is in the case.
  useEffect(() => {
    if (stationLeft !== null && stationLeft <= 0) {
      stopSpeaking();
      finish();
    }
  }, [stationLeft !== null && stationLeft <= 0]); // eslint-disable-line react-hooks/exhaustive-deps

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
          {station ? "Station" : exam ? "Exam day" : "Practice"} · {c.title}
        </span>
        <span className={`clock ${overCase ? "over" : ""}`}>
          {station
            ? readLeft !== null
              ? `Read ${mmss(Math.max(0, readLeft))}`
              : stationLeft === null
                ? `${ORAL_STATION_MINUTES}:00`
                : mmss(Math.max(0, stationLeft))
            : `${mmss(caseSecs)} / ${c.durationMinutes}:00`}
        </span>
      </div>
      <div className="progress" aria-hidden="true">
        <div style={{ width: `${Math.min(100, (Math.max(0, answered) / Math.max(1, range.max)) * 100)}%` }} />
      </div>

      {phase === "stem" ? (
        <>
          <Examiner
            text={c.stem}
            phaseLabel={station ? "Read the scenario out loud" : "The stem"}
            onSpeak={() => speakNow(spoken)}
          />
          {c.card && (
            <dl className="oralcard selectable">
              {cardLines(c.card).map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          )}
        </>
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
            <button className="btn" onClick={startCase}>
              {station ? "I have read it out loud. Start 12:00" : "Begin"}
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
