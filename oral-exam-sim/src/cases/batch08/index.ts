import type { OralCase } from "@/engine/types";
import { chronicLithiumToxicity } from "./chronic-lithium-toxicity";
import { chronicDigoxinToxicity } from "./chronic-digoxin-toxicity";
import { severeAgitationSedation } from "./severe-agitation-sedation";
import { suicidalPatientLeaving } from "./suicidal-patient-leaving";
import { psychosisMedicalCause } from "./psychosis-medical-cause";
import { severeAlcoholWithdrawal } from "./severe-alcohol-withdrawal";
import { eatingDisorderInstability } from "./eating-disorder-instability";
import { adultSepticShock } from "./adult-septic-shock";
import { necrotizingSoftTissueInfection } from "./necrotizing-soft-tissue-infection";
import { febrileNeutropenia } from "./febrile-neutropenia";

/** Batch 08. Toxicology, mental health and infection. See docs/BLUEPRINT.md. */
export const BATCH_08: OralCase[] = [
  chronicLithiumToxicity,
  chronicDigoxinToxicity,
  severeAgitationSedation,
  suicidalPatientLeaving,
  psychosisMedicalCause,
  severeAlcoholWithdrawal,
  eatingDisorderInstability,
  adultSepticShock,
  necrotizingSoftTissueInfection,
  febrileNeutropenia,
];
