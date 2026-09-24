import { Mark } from "@/components/Mark";

export function Disclaimer({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="modal">
      <div className="inner">
        <Mark size={40} />
        <h1 style={{ marginTop: 18 }}>Before you start</h1>
        <p style={{ marginTop: 14 }}>Preceptor: Oral is a practice tool for the CCFP-EM style oral exam.</p>
        <ul className="plain">
          <li>It is not affiliated with or endorsed by the College of Family Physicians of Canada.</li>
          <li>It is for education only. It is not medical advice and is not for patient care.</li>
          <li>Cases are original and written for simulation. Check doses against current guidelines.</li>
          <li>Your practice score is self-marked. It does not predict your exam result.</li>
          <li>Everything stays on this device. There is no account and no tracking.</li>
        </ul>
        <div className="actions">
          <button className="btn block" onClick={onAccept}>
            I understand
          </button>
        </div>
      </div>
    </div>
  );
}
