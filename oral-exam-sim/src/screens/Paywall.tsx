import { useEffect, useState } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { PRIORITY_TOPICS } from "@/blueprint/priorityTopics";
import { FREE_CASE_COUNT, FREE_SAMP_TOPICS } from "@/lib/access";
import { PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import {
  DEFAULT_DURATION,
  DURATIONS,
  DURATION_LABEL,
  NO_END,
  formatDay,
  isNative,
  keysConfigured,
  type Duration,
  type Tier,
} from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";

const TIER_TEXT: Record<Tier, { name: string; body: string }> = {
  complete: { name: "Complete", body: "The written SAMP bank and the oral simulator." },
  written: { name: "Written only", body: "Every SAMP, practice by topic and timed mock exams." },
  oral: { name: "Oral only", body: "Every oral case, 12 minute stations and the four station mock oral." },
};

export function Paywall({ go, focus }: { go: Go; focus?: "written" | "oral" }) {
  const app = useApp();
  const [msg, setMsg] = useState<string | null>(null);
  const [picked, setPicked] = useState<Duration>(DEFAULT_DURATION);
  const { written, oral } = app.access;
  // Read the offering again each time the paywall opens. Plans and prices come only from the store.
  useEffect(() => {
    app.refreshPlans();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (written && oral) {
    return (
      <div className="pay">
        <h1>Everything is open.</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Thank you for supporting independent exam prep.
        </p>
        {app.expiry.written && app.expiry.oral && app.expiry.written !== NO_END && app.expiry.oral !== NO_END && (
          <p className="muted small" style={{ marginTop: 10 }}>
            Written renews or ends {formatDay(app.expiry.written)}. Oral renews or ends {formatDay(app.expiry.oral)}.
          </p>
        )}
        <div className="actions">
          <button className="btn" onClick={() => go({ name: "home" })}>
            Go to the oral cases
          </button>
        </div>
      </div>
    );
  }

  // All six share one App Store subscription group, so a candidate holds one
  // at a time. Owning Written or Oral, the way to add the other is Complete.
  const upgrade = written || oral;
  const sellable = app.plans.filter((p) => !upgrade || p.tier === "complete");
  // Only lengths the offering actually holds. Six months when it is there.
  const lengths = DURATIONS.filter((d) => sellable.some((p) => p.duration === d));
  const duration = lengths.includes(picked) ? picked : lengths[0];
  const offers = sellable
    .filter((p) => p.duration === duration)
    .sort((a, b) => Number(b.tier === focus) - Number(a.tier === focus));
  const label = duration ? DURATION_LABEL[duration] : null;

  async function buy(tier: Tier, d: Duration) {
    setMsg(null);
    const r = await app.buy(tier, d);
    if (r === "purchased") go(tier === "oral" ? { name: "home" } : { name: "written" });
    else if (r === "failed") setMsg("The purchase did not go through. You have not been charged.");
    else if (r === "unavailable")
      setMsg(isNative() && !keysConfigured() ? "Purchases are not set up in this build yet." : "Purchases are available in the iOS and Android apps.");
  }

  async function restore() {
    setMsg(null);
    const r = await app.restore();
    if (r && (r.written || r.oral)) go({ name: "home" });
    else setMsg(r ? "No previous purchase found for this store account." : "Could not reach the store. Try again later.");
  }

  return (
    <div className="pay">
      <h1>Both components. One subscription.</h1>
      <p className="muted" style={{ marginTop: 10 }}>
        {SAMPS.length} original SAMPs and {CASES.length} oral cases, mapped to all {PRIORITY_TOPICS.length} CFPC priority
        topics. {FREE_CASE_COUNT} oral cases and {FREE_SAMP_TOPICS} SAMPs are free to try.
      </p>

      <ul>
        <li>SAMPs in the CFPC formats, scored against examiner style answer keys</li>
        <li>Timed four hour mock exam, and practice by priority topic</li>
        <li>Structured oral stations of 12 minutes, and a four station mock oral</li>
        <li>Coverage and scores for every priority topic and key feature</li>
        <li>Works fully offline. No account. Nothing leaves your device.</li>
      </ul>

      {lengths.length > 1 && (
        <div className="lengths" role="radiogroup" aria-label="Plan length">
          {lengths.map((d) => (
            <button key={d} className="chip" role="radio" aria-checked={d === duration} onClick={() => setPicked(d)}>
              {DURATION_LABEL[d]}
            </button>
          ))}
        </div>
      )}

      {offers.map((p) => (
        <div key={`${p.tier}_${p.duration}`} className={`tier ${p.tier === "complete" ? "best" : ""}`}>
          <div className="tierhead">
            <span className="serif tiername">{TIER_TEXT[p.tier].name}</span>
            <span className="price">
              <span className="mono">{p.priceString}</span>
              <span className="per"> / {DURATION_LABEL[p.duration]}</span>
            </span>
          </div>
          <p className="muted small" style={{ margin: "4px 0 10px" }}>
            {upgrade ? `Adds the ${written ? "oral simulator" : "written SAMP bank"}. Replaces your current subscription.` : TIER_TEXT[p.tier].body}
          </p>
          <button className={`btn block ${p.tier === "complete" ? "" : "ghost"}`} disabled={app.busy} onClick={() => buy(p.tier, p.duration)}>
            {app.busy ? "Working" : upgrade ? "Upgrade to complete" : `Subscribe to ${TIER_TEXT[p.tier].name.toLowerCase()}`}
          </button>
        </div>
      ))}

      {offers.length === 0 && (
        <p className="small" style={{ marginTop: 10 }}>
          {!isNative()
            ? "Subscriptions are available in the iOS and Android apps."
            : !keysConfigured()
              ? "Purchases are not set up in this build yet."
              : "The plans could not be loaded from the store. Check your connection and open this page again."}
        </p>
      )}

      {label && (
        <p className="muted small" style={{ marginTop: 10 }}>
          A subscription for {label}. It renews automatically every {label} at the price shown unless you cancel it at least
          24 hours before the renewal date. Cancel any time in your App Store or Google Play account settings. Restores on
          any device signed in to the same store account.
        </p>
      )}
      <div className="actions">
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
