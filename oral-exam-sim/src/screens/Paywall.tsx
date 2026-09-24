import { useState } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { PRIORITY_TOPICS } from "@/blueprint/priorityTopics";
import { FREE_CASE_COUNT, FREE_SAMP_TOPICS } from "@/lib/access";
import { PRIVACY_URL, TERMS_URL } from "@/lib/constants";
import { ACCESS_MONTHS, PRODUCTS, formatDay, isNative, keysConfigured, type ProductKey } from "@/lib/purchases";
import type { Go } from "../routes";
import { useApp } from "../state";

const TIERS: { key: ProductKey; name: string; body: string }[] = [
  { key: "complete", name: "Complete", body: "The written SAMP bank and the oral simulator. Best value for a first attempt." },
  { key: "written", name: "Written only", body: "Every SAMP, practice by topic and timed mock exams." },
  { key: "oral", name: "Oral only", body: "Every oral case, 12 minute stations and the four station mock oral." },
];

export function Paywall({ go, focus }: { go: Go; focus?: "written" | "oral" }) {
  const app = useApp();
  const [msg, setMsg] = useState<string | null>(null);
  const { written, oral } = app.access;

  if (written && oral) {
    return (
      <div className="pay">
        <h1>Everything is open.</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Thank you for supporting independent exam prep.
        </p>
        {app.expiry.written && app.expiry.oral && (
          <p className="muted small" style={{ marginTop: 10 }}>
            Written access until {formatDay(app.expiry.written)}. Oral access until {formatDay(app.expiry.oral)}.
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

  // Offer what the candidate does not own yet. Complete only if they own neither.
  const offers = TIERS.filter((t) => (t.key === "complete" ? !written && !oral : t.key === "written" ? !written : !oral)).sort(
    (a, b) => Number(b.key === focus) - Number(a.key === focus),
  );

  async function buy(key: ProductKey) {
    setMsg(null);
    const r = await app.buy(key);
    if (r === "purchased") go(key === "oral" ? { name: "home" } : { name: "written" });
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
      <div className="label">Preceptor: CCFP-EM</div>
      <h1 style={{ marginTop: 6 }}>Both components. One purchase.</h1>
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

      {offers.map((t) => (
        <div key={t.key} className={`tier ${t.key === "complete" ? "best" : ""}`}>
          <div className="tierhead">
            <span className="serif tiername">{t.name}</span>
            <span className="mono price">{app.prices[t.key] ?? PRODUCTS[t.key].fallbackPrice}</span>
          </div>
          <p className="muted small" style={{ margin: "4px 0 10px" }}>
            {t.body}
          </p>
          <button className={`btn block ${t.key === "complete" ? "" : "ghost"}`} disabled={app.busy} onClick={() => buy(t.key)}>
            {app.busy ? "Working" : `Buy ${t.name.toLowerCase()}`}
          </button>
        </div>
      ))}

      <p className="muted small" style={{ marginTop: 10 }}>
        One payment for {ACCESS_MONTHS} months of access from the day you buy. It does not renew and you are not charged again.
        Restores on any device signed in to the same store account.
      </p>
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
