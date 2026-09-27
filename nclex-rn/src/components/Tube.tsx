import type { CSSProperties } from "react";
import type { ClientNeed } from "@/engine/blueprint";

/** CSS variables that color an element with a Client Needs area's tube cap. */
export const capStyle = (id: ClientNeed): CSSProperties => ({ ["--c" as string]: `var(--cap-${id})` });

/** A tube cap swatch. Always sits beside the area's name. */
export function Cap({ id }: { id: ClientNeed }) {
  return <span className="cap" style={capStyle(id)} aria-hidden="true" />;
}

/** One tube in the rack, filled to the share of points earned in its area. */
export function Tube({
  id,
  name,
  pct,
  disabled,
  onClick,
}: {
  id: ClientNeed;
  name: string;
  pct: number | null;
  disabled?: boolean;
  onClick: () => void;
}) {
  const p = pct === null ? 0 : Math.round(pct * 100);
  const said = pct === null ? "nothing answered yet" : `${p} percent of points`;
  return (
    <button type="button" className="tube" style={capStyle(id)} disabled={disabled} onClick={onClick} aria-label={`${name}, ${said}. Start a set.`}>
      <span className="tcap" aria-hidden="true" />
      <span className="glass" aria-hidden="true">
        <span className={`level ${p ? "" : "empty"}`} style={{ ["--p" as string]: p / 100 }} />
      </span>
      <span className="pct" aria-hidden="true">{pct === null ? "New" : `${p}%`}</span>
      <span className="code" aria-hidden="true">{id}</span>
    </button>
  );
}
