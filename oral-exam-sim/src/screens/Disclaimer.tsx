import { Mark } from "@/components/Mark";

export function Disclaimer({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="modal">
      <div className="inner">
        <Mark size={40} />
        <h1 style={{ marginTop: 18 }}>Before you start</h1>
        <p style={{ marginTop: 14 }}>Preceptor: CCFP-EM is a practice tool for the written and oral components of the Examination of Added Competence in Emergency Medicine.</p>
        <ul className="plain">
          <li>It is not affiliated with or endorsed by the College of Family Physicians of Canada.</li>
          <li>It is for education only. It is not medical advice and is not for patient care.</li>
          <li>Every case and question is original. None is taken from CFPC samples or any real exam. Check doses against current guidelines.</li>
          <li>Scores come from answer keys and your own marking. They do not predict your exam result.</li>
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
