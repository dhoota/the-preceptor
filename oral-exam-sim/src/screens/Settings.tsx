import { useState } from "react";
import { APP_VERSION, PRIVACY_URL, SUPPORT_EMAIL, TERMS_URL } from "@/lib/constants";
import { speak } from "@/lib/speech";
import { formatDay } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";

function Switch({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return <button className="switch" role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)} />;
}

const open = (url: string) => {
  try {
    window.open(url, "_blank");
  } catch {
    // ignore
  }
};

/** "access until 12 Aug 2027", "access ended 3 Jan 2027" or "free sample". */
function status(open: boolean, until: string | null): string {
  if (open && until) return `access until ${formatDay(until)}`;
  if (until) return `access ended ${formatDay(until)}`;
  return "free sample";
}

export function Settings({ go }: { go: Go }) {
  const app = useApp();
  const s = app.settings;
  const [msg, setMsg] = useState<string | null>(null);

  async function restore() {
    const r = await app.restore();
    setMsg(r ? (r.written || r.oral ? "Purchases restored." : "No previous purchase found.") : "Could not reach the store. Try again later.");
  }

  return (
    <>
      <div className="label">Settings</div>
      <h1 style={{ marginTop: 6 }}>Settings</h1>

      <section className="section">
        <span className="label">Examiner voice</span>
        <div className="row">
          <span>
            Read examiner lines aloud
            <span className="muted small" style={{ display: "block" }}>
              Uses your device voice. Works offline.
            </span>
          </span>
          <Switch on={s.speak} onChange={(v) => app.updateSettings({ speak: v })} label="Read aloud" />
        </div>
        <div className="row">
          <span>
            Speaking rate <span className="mono muted">{s.rate.toFixed(1)}x</span>
          </span>
          <input
            type="range"
            min={0.7}
            max={1.3}
            step={0.1}
            value={s.rate}
            onChange={(e) => app.updateSettings({ rate: Number(e.target.value) })}
            aria-label="Speaking rate"
          />
        </div>
        <div className="row">
          <span>Test the voice</span>
          <button className="btn small quiet" onClick={() => speak("A 58 year old man arrives with chest pain. His blood pressure is 88/52.", s.rate)}>
            Play
          </button>
        </div>
      </section>

      <section className="section">
        <span className="label">Practice mode</span>
        <div className="row">
          <span>
            Show the model answer after each question
            <span className="muted small" style={{ display: "block" }}>
              Exam day mode always waits until the end.
            </span>
          </span>
          <Switch on={s.revealEachQuestion} onChange={(v) => app.updateSettings({ revealEachQuestion: v })} label="Reveal after each question" />
        </div>
      </section>

      <section className="section">
        <span className="label">Purchase</span>
        <div className="row">
          <span>
            Written: {status(app.access.written, app.expiry.written)}. Oral: {status(app.access.oral, app.expiry.oral)}.
          </span>
          {!(app.access.written && app.access.oral) && (
            <button className="btn small" onClick={() => go({ name: "paywall" })}>
              Buy
            </button>
          )}
        </div>
        <div className="row">
          <span>Restore a previous purchase</span>
          <button className="btn small quiet" disabled={app.busy} onClick={restore}>
            {app.busy ? "Working" : "Restore"}
          </button>
        </div>
        {msg && <p className="small" style={{ marginTop: 10 }}>{msg}</p>}
      </section>

      <section className="section">
        <span className="label">Exam</span>
        <div className="row">
          <span>Official CFPC resources</span>
          <button className="btn small quiet" onClick={() => go({ name: "resources" })}>
            Open
          </button>
        </div>
      </section>

      <section className="section">
        <span className="label">About</span>
        <div className="row">
          <span>Support</span>
          <button className="linkbtn" onClick={() => open(`mailto:${SUPPORT_EMAIL}?subject=Preceptor%20CCFP-EM%20${APP_VERSION}`)}>
            {SUPPORT_EMAIL}
          </button>
        </div>
        <div className="row">
          <span>Privacy policy</span>
          <button className="linkbtn" onClick={() => open(PRIVACY_URL)}>
            thepreceptor.ca/privacy
          </button>
        </div>
        <div className="row">
          <span>Terms of use</span>
          <button className="linkbtn" onClick={() => open(TERMS_URL)}>
            thepreceptor.ca/terms
          </button>
        </div>
        <p className="muted small" style={{ marginTop: 14 }}>
          Preceptor: CCFP-EM is an independent study tool. It is not affiliated with or endorsed by the College of Family
          Physicians of Canada. It is for education only and is not medical advice. Cases are original and written for
          simulation. Everything stays on this device. The app collects no personal data.
        </p>
        <p className="muted small mono">Version {APP_VERSION}</p>
      </section>

      <section className="section">
        <span className="label">Data</span>
        <div className="row">
          <span>
            Reset progress
            <span className="muted small" style={{ display: "block" }}>
              Deletes attempts and the review deck. Keeps your purchase.
            </span>
          </span>
          <button
            className="btn small quiet"
            onClick={async () => {
              if (confirm("Delete all attempts and review cards on this device?")) {
                await app.resetProgress();
                setMsg("Progress reset.");
              }
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
