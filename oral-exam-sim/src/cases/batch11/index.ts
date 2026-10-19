import type { OralCase } from "@/engine/types";
import { emsPatchRupturedAaa } from "./ems-patch-ruptured-aaa";
import { glassFingerReturnVisit } from "./glass-finger-return-visit";
import { stoppedAntiplateletsDentalStemi } from "./stopped-antiplatelets-dental-stemi";
import { peritonealDialysisWheezeOverload } from "./peritoneal-dialysis-wheeze-overload";

/** Batch 11. Q500 oral cases on EMS, lacerations, ischemic heart disease and pulmonary edema, in blueprint order. */
export const BATCH_11: OralCase[] = [
  stoppedAntiplateletsDentalStemi,
  peritonealDialysisWheezeOverload,
  glassFingerReturnVisit,
  emsPatchRupturedAaa,
];
