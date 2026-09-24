import type { OralCase } from "@/engine/types";
import { refractoryVfArrest } from "./refractory-vf-arrest";
import { dialysisHyperkalemiaArrest } from "./dialysis-hyperkalemia-arrest";
import { refractoryAnaphylaxisBetaBlocker } from "./refractory-anaphylaxis-beta-blocker";
import { obstructiveShockPeLysis } from "./obstructive-shock-pe-lysis";
import { postArrestCareAfterRosc } from "./post-arrest-care-after-rosc";
import { aceInhibitorAngioedemaAirway } from "./ace-inhibitor-angioedema-airway";
import { varicealHemorrhageRural } from "./variceal-hemorrhage-rural";
import { sedationShoulderReduction } from "./sedation-shoulder-reduction";
import { cicoScalpelCricothyrotomy } from "./cico-scalpel-cricothyrotomy";
import { lateralCanthotomyOrbitalHematoma } from "./lateral-canthotomy-orbital-hematoma";

/** Batch 01. Resuscitation and procedures. See docs/BLUEPRINT.md. */
export const BATCH_01: OralCase[] = [
  refractoryVfArrest,
  dialysisHyperkalemiaArrest,
  refractoryAnaphylaxisBetaBlocker,
  obstructiveShockPeLysis,
  postArrestCareAfterRosc,
  aceInhibitorAngioedemaAirway,
  varicealHemorrhageRural,
  sedationShoulderReduction,
  cicoScalpelCricothyrotomy,
  lateralCanthotomyOrbitalHematoma,
];
