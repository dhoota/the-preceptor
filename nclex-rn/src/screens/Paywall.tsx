import { useState } from "react";
import { FREE_CASES, FREE_ITEMS } from "@/lib/access";
import { APP_NAME, PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import { PLAN_ORDER, PRODUCTS, isNative, keysConfigured, type ProductKey } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";
import { openUrl } from "./Settings";

const PLANS: Record<ProductKey, { name: string; body: string; cta: string; best?: string }> = {
  sixMonth: { name: "6 months", body: "Full access for 6 months, then renews every 6 months.", cta: "Subscribe for 6 months", best: "Lower cost per month" },
  threeMonth: { name: "3 months", body: "Full access for 3 months, then renews every 3 months.", cta: "Subscribe for 3 months" },
};

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

      {PLAN_ORDER.map((key) => {
        const plan = PLANS[key];
        const price = app.prices[key] ?? PRODUCTS[key].fallbackPrice;
        return (
          <div key={key} className={`tier ${plan.best ? "best" : ""}`}>
            <div className="tierhead">
              <span className="serif tiername">{plan.name}</span>
              <span className="mono price">
                {price}
                <span className="per"> every {PRODUCTS[key].period}</span>
              </span>
            </div>
            {plan.best && <p className="small tierbadge">{plan.best}</p>}
            <p className="muted small" style={{ margin: "4px 0 10px" }}>
              {plan.body}
            </p>
            <button className={`btn block ${plan.best ? "" : "ghost"}`} disabled={app.busy} onClick={() => buy(key)}>
              {app.busy ? "Working" : plan.cta}
            </button>
          </div>
        );
      })}

      <div className="muted small disclose" style={{ marginTop: 14 }}>
        <p>Both plans are auto-renewing subscriptions. Payment is charged to your store account when you confirm the purchase.</p>
        <p>
          The 6 month plan renews at {app.prices.sixMonth ?? PRODUCTS.sixMonth.fallbackPrice} every 6 months. The 3 month plan
          renews at {app.prices.threeMonth ?? PRODUCTS.threeMonth.fallbackPrice} every 3 months.
        </p>
        <p>
          A subscription renews unless you cancel it at least 24 hours before the current period ends. Your account is charged
          for renewal within 24 hours before the period ends.
        </p>
        <p>Manage or cancel the subscription in your App Store or Google Play account settings. Prices show in your local currency once the store loads them.</p>
      </div>
      <div className="actions">
        <button className="btn ghost block" disabled={app.busy} onClick={restore}>
          Restore purchases
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
