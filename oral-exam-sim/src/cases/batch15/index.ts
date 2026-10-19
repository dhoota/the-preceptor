import type { OralCase } from "@/engine/types";
import { backWithTheSameHeadache } from "./back-with-the-same-headache";
import { chestTightnessAfterNightShift } from "./chest-tightness-after-night-shift";
import { weakAndPaleAfterAStent } from "./weak-and-pale-after-a-stent";
import { broughtDownFromTheEighthFloor } from "./brought-down-from-the-eighth-floor";

/** Batch 15. Q500 oral cases. Headache, suicide risk, GI bleed and environmental. */
export const BATCH_15: OralCase[] = [
  backWithTheSameHeadache,
  chestTightnessAfterNightShift,
  weakAndPaleAfterAStent,
  broughtDownFromTheEighthFloor,
];
