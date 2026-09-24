import { useState } from "react";
import { APP_NAME, APP_VERSION, DISCLAIMER, PRIVACY_URL, SUPPORT_EMAIL, TERMS_URL, TEST_PLAN_URL } from "@/lib/constants";
import type { Go } from "../routes";
import { useApp } from "../state";

export function openUrl(url: string) {
  try {
    window.open(url, "_blank");
  } catch {
    // ignore
  }
}

function Switch({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return <button className="switch" role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)} />;
}

export function Settings({ go }: { go: Go }) {
  const app = useApp();
  const s = app.settings;
  const [msg, setMsg] = useState<string | null>(null);

  async function restore() {
    const r = await app.restore();
    setMsg(r ? (r.full ? "Purchase restored." : "No previous purchase found.") : "Could not reach the store. Try again later.");
  }

  return (
    <>
      <div className="label">More</div>
      <h1 style={{ marginTop: 6 }}>Settings</h1>

      <section className="section">
        <span className="label">Practice</span>
        <div className="row">
          <span>
            Show the answer after each item
            <span className="muted small" style={{ display: "block" }}>
              Off shows every answer at the end of a set. The mock never shows answers until it ends.
            </span>
          </span>
          <Switch on={s.revealEachItem} onChange={(v) => app.updateSettings({ revealEachItem: v })} label="Show the answer after each item" />
        </div>
        <div className="row">
          <span>Larger text</span>
          <Switch on={s.largeText} onChange={(v) => app.updateSettings({ largeText: v })} label="Larger text" />
        </div>
      </section>

      <section className="section">
        <span className="label">Purchase</span>
        <div className="row">
          <span>{app.access.full ? "Full access" : "Free sample"}</span>
          {!app.access.full && (
            <button className="btn small" onClick={() => go({ name: "paywall" })}>
              See options
            </button>
          )}
        </div>
        <div className="row">
          <span>Restore a previous purchase</span>
          <button className="btn small quiet" disabled={app.busy} onClick={restore}>
            {app.busy ? "Working" : "Restore"}
          </button>
        </div>
        {msg && (
          <p className="small" role="status" style={{ marginTop: 10 }}>
            {msg}
          </p>
        )}
      </section>

      <section className="section">
        <span className="label">Exam</span>
        <div className="row">
          <span>
            Official NCLEX-RN test plan
            <span className="muted small" style={{ display: "block" }}>
              Opens the NCSBN site in your browser.
            </span>
          </span>
          <button className="btn small quiet" onClick={() => openUrl(TEST_PLAN_URL)}>
            Open
          </button>
        </div>
      </section>

      <section className="section">
        <span className="label">About</span>
        <div className="row">
          <span>Support</span>
          <button className="linkbtn" onClick={() => openUrl(`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} ${APP_VERSION}`)}`)}>
            {SUPPORT_EMAIL}
          </button>
        </div>
        <div className="row">
          <span>Privacy policy</span>
          <button className="linkbtn" onClick={() => openUrl(PRIVACY_URL)}>
            thepreceptor.ca/privacy
          </button>
        </div>
        <div className="row">
          <span>Terms of use</span>
          <button className="linkbtn" onClick={() => openUrl(TERMS_URL)}>
            thepreceptor.ca/terms
          </button>
        </div>
        <div className="muted small" style={{ marginTop: 14 }}>
          {DISCLAIMER.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <p>It is for education only and is not nursing or medical advice. Every item is original.</p>
          <p>Items are drafted for review by nurse educators. An item marked as a draft has not been signed off yet.</p>
          <p>Everything stays on this device. The app collects no personal data.</p>
        </div>
        <p className="muted small mono">Version {APP_VERSION}</p>
      </section>

      <section className="section">
        <span className="label">Data</span>
        <div className="row">
          <span>
            Reset progress
            <span className="muted small" style={{ display: "block" }}>
              Deletes answers, flags and mocks. Keeps your purchase and settings.
            </span>
          </span>
          <button
            className="btn small quiet"
            onClick={async () => {
              if (confirm("Delete all answers, flags and mocks on this device?")) {
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
