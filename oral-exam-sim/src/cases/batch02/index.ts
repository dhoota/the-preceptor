import type { OralCase } from "@/engine/types";
import { completeHeartBlockPacing } from "./complete-heart-block-pacing";
import { preExcitedAtrialFibrillation } from "./pre-excited-atrial-fibrillation";
import { sympatheticCrashingPulmonaryEdema } from "./sympathetic-crashing-pulmonary-edema";
import { wideComplexTachycardia } from "./wide-complex-tachycardia";
import { malignantPericardialTamponade } from "./malignant-pericardial-tamponade";
import { athleteExertionalSyncope } from "./athlete-exertional-syncope";
import { stemiCardiogenicShock } from "./stemi-cardiogenic-shock";
import { posteriorEpistaxisAnticoagulated } from "./posterior-epistaxis-anticoagulated";
import { kneeDislocationVascularInjury } from "./knee-dislocation-vascular-injury";

/** Batch 02. Cardiovascular and procedures. See docs/BLUEPRINT.md. */
export const BATCH_02: OralCase[] = [
  completeHeartBlockPacing,
  preExcitedAtrialFibrillation,
  sympatheticCrashingPulmonaryEdema,
  wideComplexTachycardia,
  malignantPericardialTamponade,
  athleteExertionalSyncope,
  stemiCardiogenicShock,
  posteriorEpistaxisAnticoagulated,
  kneeDislocationVascularInjury,
];
