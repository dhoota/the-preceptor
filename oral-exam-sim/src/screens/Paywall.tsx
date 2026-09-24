import { useState } from "react";
import { CASES } from "@/cases";
import { FREE_CASE_COUNT } from "@/lib/access";
import { FALLBACK_PRICE, PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import { isNative, keysConfigured } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";

export function Paywall({ go }: { go: Go }) {
  const app = useApp();
  const [msg, setMsg] = useState<string | null>(null);

  if (app.unlocked) {
    return (
      <div className="pay">
        <h1>Every case is open.</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Thank you for supporting independent exam prep.
        </p>
        <div className="actions">
          <button className="btn" onClick={() => go({ name: "home" })}>
            Go to cases
          </button>
        </div>
      </div>
    );
  }

  async function buy() {
    setMsg(null);
    const r = await app.buy();
    if (r === "purchased") go({ name: "home" });
    else if (r === "failed") setMsg("The purchase did not go through. You have not been charged.");
    else if (r === "unavailable")
      setMsg(
        isNative() && !keysConfigured()
          ? "Purchases are not set up in this build yet."
          : "Purchases are available in the iOS and Android apps.",
      );
  }

  async function restore() {
    setMsg(null);
    const r = await app.restore();
    if (r) go({ name: "home" });
    else setMsg(r === false ? "No previous purchase found for this store account." : "Could not reach the store. Try again later.");
  }

  return (
    <div className="pay">
      <div className="label">Full case bank</div>
      <h1 style={{ marginTop: 6 }}>Open every case.</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        You have {FREE_CASE_COUNT} free cases. One purchase opens all {CASES.length} and every case added later.
      </p>

      <ul>
        <li>Branching examiner scripts that respond to your decisions</li>
        <li>Timed questions and an exam day mode with the examiner read aloud</li>
        <li>Model answers and a marking rubric for every case</li>
        <li>Weak area tracking and spaced review of the points you miss</li>
        <li>Works fully offline. No account. Nothing leaves your device.</li>
      </ul>

      <div className="price">{app.price ?? FALLBACK_PRICE}</div>
      <p className="muted small" style={{ marginTop: 6 }}>
        One time purchase. No subscription. Restores on any device signed in to the same store account.
      </p>

      <div className="actions" style={{ flexDirection: "column" }}>
        <button className="btn block" disabled={app.busy} onClick={buy}>
          {app.busy ? "Working" : "Buy the full case bank"}
        </button>
        <button className="btn ghost block" disabled={app.busy} onClick={restore}>
          Restore purchase
        </button>
      </div>
      {msg && <p className="small" style={{ marginTop: 12 }}>{msg}</p>}

      <p className="muted small" style={{ marginTop: 20 }}>
        <button className="linkbtn" onClick={() => window.open(TERMS_URL, "_blank")}>
          Terms of use
        </button>{" "}
        ·{" "}
        <button className="linkbtn" onClick={() => window.open(PRIVACY_URL, "_blank")}>
          Privacy policy
        </button>
      </p>
    </div>
  );
}
