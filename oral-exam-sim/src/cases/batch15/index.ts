import type { OralCase } from "@/engine/types";
import { headacheBuildingOverFiveDays } from "./headache-building-over-five-days";
import { unwellAfterANightShift } from "./unwell-after-a-night-shift";
import { weakAndPaleAfterAStent } from "./weak-and-pale-after-a-stent";
import { broughtDownFromTheEighthFloor } from "./brought-down-from-the-eighth-floor";

/** Batch 15. Q500 oral cases. Headache, suicide risk, GI bleed and environmental. */
export const BATCH_15: OralCase[] = [
  headacheBuildingOverFiveDays,
  unwellAfterANightShift,
  weakAndPaleAfterAStent,
  broughtDownFromTheEighthFloor,
];
