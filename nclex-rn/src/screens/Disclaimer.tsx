import { Mark } from "@/components/Mark";
import { APP_NAME, DISCLAIMER } from "@/lib/constants";

export function Disclaimer({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="disc-h">
      <div className="inner">
        <Mark size={40} />
        <h1 id="disc-h" style={{ marginTop: 18 }}>
          Before you start
        </h1>
        <p style={{ marginTop: 14 }}>{APP_NAME} is a study tool for the NCLEX-RN.</p>
        <ul className="plain">
          {DISCLAIMER.map((l) => (
            <li key={l}>{l}</li>
          ))}
          <li>It is for education only. It is not nursing or medical advice and is not for client care.</li>
          <li>Every item is original. None is taken from NCSBN material or any real exam.</li>
          <li>Items are drafted for review by nurse educators. Check doses and policies against current sources.</li>
          <li>Scores are a study guide. They do not predict your NCLEX result.</li>
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
