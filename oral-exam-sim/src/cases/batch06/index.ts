import type { OralCase } from "@/engine/types";
import { bronchiolitisApnea } from "./bronchiolitis-apnea";
import { severeCroup } from "./severe-croup";
import { pediatricDka } from "./pediatric-dka";
import { pediatricStatusEpilepticus } from "./pediatric-status-epilepticus";
import { pediatricSepticShock } from "./pediatric-septic-shock";
import { infantNonaccidentalInjury } from "./infant-nonaccidental-injury";
import { toddlerAirwayForeignBody } from "./toddler-airway-foreign-body";
import { neonateBiliousVomiting } from "./neonate-bilious-vomiting";
import { suddenUnexpectedInfantDeath } from "./sudden-unexpected-infant-death";

/** Batch 06. Pediatrics and communication. See docs/BLUEPRINT.md. */
export const BATCH_06: OralCase[] = [
  bronchiolitisApnea,
  severeCroup,
  pediatricDka,
  pediatricStatusEpilepticus,
  pediatricSepticShock,
  infantNonaccidentalInjury,
  toddlerAirwayForeignBody,
  neonateBiliousVomiting,
  suddenUnexpectedInfantDeath,
];
