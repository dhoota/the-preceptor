// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

/** Author line shared by every SAMP in this batch. */
export const AUTHOR = "Draft for review by Arjan Dhoot, MD";

/**
 * Match phrases for a labelled value. lab(["sensitivity", "sn"], ["80%", "0.8"])
 * gives "sensitivity 80%", "sensitivity 0.8", "sn 80%", "sn 0.8".
 */
export function lab(labels: string[], values: string[]): string[] {
  return labels.flatMap((l) => values.map((v) => `${l} ${v}`));
}
