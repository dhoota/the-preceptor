import { useState } from "react";
import { FREE_CASES, FREE_ITEMS } from "@/lib/access";
import { PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import { PRODUCTS, isNative, keysConfigured, planView, type ProductKey } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";
import { openUrl } from "./Settings";
import { useSources } from "@/components/Sources";
import { EDUCATION_ONLY } from "@/lib/references";

// Only these two plans exist. Plans come from PLAN_ORDER through planView, never from other packages in the offering.
const PLANS: Record<ProductKey, { name: string; body: string; cta: string }> = {
  sixMonth: { name: "6 months", body: "Full access for 6 months, then renews every 6 months.", cta: "Subscribe for 6 months" },
  threeMonth: { name: "3 months", body: "Full access for 3 months, then renews every 3 months.", cta: "Subscribe for 3 months" },
};

export function Paywall({ go }: { go: Go }) {
  const app = useApp();
  const [msg, setMsg] = useState<string | null>(null);
  const openSources = useSources();
  const view = planView(app.prices);

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
      <h1>Full access</h1>
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

      {view.plans.map(({ key, price, enabled }) => {
        const plan = PLANS[key];
        const main = key === view.primary;
        return (
          <div key={key} className={`tier ${main ? "best" : ""}`}>
            <div className="tierhead">
              <span className="tiername">{plan.name}</span>
              {price && (
                <span className="price">
                  <span className="mono">{price}</span>
                  <span className="per"> every {PRODUCTS[key].period}</span>
                </span>
              )}
            </div>
            <p className="muted small" style={{ margin: "4px 0 10px" }}>
              {plan.body}
            </p>
            <button className={`btn block ${main ? "" : "ghost"}`} disabled={!enabled || app.busy} onClick={() => buy(key)}>
              {app.busy ? "Working" : plan.cta}
            </button>
          </div>
        );
      })}
      {view.status === "loading" && (
        <p className="muted small" role="status" style={{ marginTop: 10 }}>
          Loading prices from the store.
        </p>
      )}
      {view.status === "failed" && (
        <p className="small" role="status" style={{ marginTop: 10 }}>
          Prices could not load from the store. Check your connection.{" "}
          <button className="linkbtn" onClick={() => app.reloadPrices()}>
            Try again
          </button>
        </p>
      )}

      <div className="muted small disclose" style={{ marginTop: 14 }}>
        <p>Both plans are auto-renewing subscriptions. Payment is charged to your store account when you confirm the purchase.</p>
        {view.status === "ready" ? (
          <p>
            {view.plans.map(({ key, price }) => `The ${PRODUCTS[key].months} month plan renews at ${price} every ${PRODUCTS[key].period}.`).join(" ")}
          </p>
        ) : (
          <p>Each plan renews at the price the store shows for it, every 6 months or every 3 months.</p>
        )}
        <p>
          A subscription renews unless you cancel it at least 24 hours before the current period ends. Your account is charged
          for renewal within 24 hours before the period ends.
        </p>
        <p>Manage or cancel the subscription in your App Store or Google Play account settings. Prices are set by the store in your local currency.</p>
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
        <span aria-hidden="true"> · </span>
        <button className="linkbtn" onClick={openSources}>
          Sources &amp; References
        </button>
      </p>
      <p className="muted small">{EDUCATION_ONLY}</p>
    </div>
  );
}
