import type { OralCase } from "@/engine/types";
import { assaultHeadInjuryDeterioration } from "./assault-head-injury-deterioration";
import { precordialStabWound } from "./precordial-stab-wound";
import { houseFireBurns } from "./house-fire-burns";
import { divingInjuryCottage } from "./diving-injury-cottage";
import { restrainedDriverAbdominalPain } from "./restrained-driver-abdominal-pain";
import { neckWoundRobbery } from "./neck-wound-robbery";
import { trenchCollapseCrush } from "./trench-collapse-crush";
import { olderWomanBroughtBySon } from "./older-woman-brought-by-son";
import { olderManSevereAbdominalPain } from "./older-man-severe-abdominal-pain";
import { olderWomanConfusionSeizure } from "./older-woman-confusion-seizure";

/** Batch 05. Trauma and geriatrics. See docs/BLUEPRINT.md. */
export const BATCH_05: OralCase[] = [
  assaultHeadInjuryDeterioration,
  precordialStabWound,
  houseFireBurns,
  divingInjuryCottage,
  restrainedDriverAbdominalPain,
  neckWoundRobbery,
  trenchCollapseCrush,
  olderWomanBroughtBySon,
  olderManSevereAbdominalPain,
  olderWomanConfusionSeizure,
];
