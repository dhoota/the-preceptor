import { useState } from "react";
import { FREE_CASES, FREE_ITEMS } from "@/lib/access";
import { APP_NAME, PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import { PRODUCTS, isNative, keysConfigured, type ProductKey } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";
import { openUrl } from "./Settings";

const TIERS: { key: ProductKey; name: string; body: string; note: string }[] = [
  {
    key: "lifetime",
    name: "Lifetime",
    body: "Pay once. Keep full access on this store account.",
    note: "One time purchase.",
  },
  {
    key: "monthly",
    name: "Monthly",
    body: "Full access for as long as you subscribe.",
    note: "Auto-renewing subscription. Cancel anytime in your store account settings.",
  },
];

export function Paywall({ go }: { go: Go }) {
  const app = useApp();
  const [msg, setMsg] = useState<string | null>(null);

  if (app.access.full) {
    return (
      <div className="pay">
        <h1>Everything is open.</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Thank you for supporting independent study tools.
        </p>
        <div className="actions">
          <button className="btn" onClick={() => go({ name: "home" })}>
            Go to practice
          </button>
        </div>
      </div>
    );
  }

  async function buy(key: ProductKey) {
    setMsg(null);
    const r = await app.buy(key);
    if (r === "purchased") go({ name: "home" });
    else if (r === "failed") setMsg("The purchase did not go through. You have not been charged.");
    else if (r === "unavailable")
      setMsg(isNative() && !keysConfigured() ? "Purchases are not set up in this build yet." : "Purchases are available in the iOS and Android apps.");
  }

  async function restore() {
    setMsg(null);
    const r = await app.restore();
    if (r?.full) go({ name: "home" });
    else setMsg(r ? "No previous purchase found for this store account." : "Could not reach the store. Try again later.");
  }

  return (
    <div className="pay">
      <div className="label">{APP_NAME}</div>
      <h1 style={{ marginTop: 6 }}>Full access</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        Free use includes {FREE_ITEMS} items across all eight Client Needs areas and {FREE_CASES} case study. Full access opens
        the rest.
      </p>

      <ul>
        <li>Every stand-alone item, in all eight item types</li>
        <li>Every case study, walking the six clinical judgment steps</li>
        <li>The adaptive mock, with a readiness band and item review</li>
        <li>Works offline. No account. Nothing leaves your device.</li>
      </ul>

      {TIERS.map((t) => (
        <div key={t.key} className={`tier ${t.key === "lifetime" ? "best" : ""}`}>
          <div className="tierhead">
            <span className="serif tiername">{t.name}</span>
            <span className="mono price">
              {app.prices[t.key] ?? PRODUCTS[t.key].fallbackPrice}
              {PRODUCTS[t.key].period && <span className="per"> per {PRODUCTS[t.key].period}</span>}
            </span>
          </div>
          <p className="muted small" style={{ margin: "4px 0 4px" }}>
            {t.body}
          </p>
          <p className="muted small" style={{ margin: "0 0 10px" }}>
            {t.note}
          </p>
          <button className={`btn block ${t.key === "lifetime" ? "" : "ghost"}`} disabled={app.busy} onClick={() => buy(t.key)}>
            {app.busy ? "Working" : t.key === "lifetime" ? "Buy lifetime access" : "Subscribe monthly"}
          </button>
        </div>
      ))}

      <p className="muted small disclose" style={{ marginTop: 14 }}>
        The monthly subscription renews automatically each month unless you cancel it at least 24 hours before the current
        period ends. Payment is charged to your store account. Manage or cancel the subscription in your store account
        settings. Prices show in your local currency once the store loads them.
      </p>
      <div className="actions">
        <button className="btn ghost block" disabled={app.busy} onClick={restore}>
          Restore purchase
        </button>
      </div>
      {msg && (
        <p className="small" role="status" style={{ marginTop: 12 }}>
          {msg}
        </p>
      )}

      <p className="muted small" style={{ marginTop: 20 }}>
        <button className="linkbtn" onClick={() => openUrl(TERMS_URL)}>
          Terms of use
        </button>
        <span aria-hidden="true"> · </span>
        <button className="linkbtn" onClick={() => openUrl(PRIVACY_URL)}>
          Privacy policy
        </button>
      </p>
    </div>
  );
}
