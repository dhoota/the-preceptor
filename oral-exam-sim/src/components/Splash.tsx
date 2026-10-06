import { useEffect } from "react";
import { Mark } from "@/components/Mark";

/** How long the launch splash shows before it dismisses itself. */
export const SPLASH_MS = 1200;

/**
 * Branded launch splash. It is never a gate: the timer starts on mount and
 * always ends it, and a tap or click anywhere ends it sooner. It waits on
 * nothing, so no store, network or storage call can keep anyone out.
 */
export function Splash({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, SPLASH_MS);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="splash" onPointerDown={onDone} onClick={onDone}>
      <Mark size={64} />
      <div className="splash-name">
        <span className="fam">Preceptor: </span>CCFP-EM
      </div>
      <p className="splash-note">Independent study tool. For education only. Not affiliated with the CFPC.</p>
    </div>
  );
}
