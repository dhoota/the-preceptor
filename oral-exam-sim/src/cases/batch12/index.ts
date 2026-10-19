import type { OralCase } from "@/engine/types";
import { firstTrimesterLossMechanicalValve } from "./first-trimester-loss-mechanical-valve";
import { iceHutHeaterContactBurns } from "./ice-hut-heater-contact-burns";
import { hyperacutePurulentRedEye } from "./hyperacute-purulent-red-eye";
import { intoxicatedDriverHipDislocation } from "./intoxicated-driver-hip-dislocation";

/** Batch 12. Q500 oral cases. See docs/Q500_BRIEF.md. */
export const BATCH_12: OralCase[] = [
  firstTrimesterLossMechanicalValve,
  iceHutHeaterContactBurns,
  hyperacutePurulentRedEye,
  intoxicatedDriverHipDislocation,
];
