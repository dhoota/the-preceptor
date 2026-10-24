import type { OralCase } from "@/engine/types";
import { emsPatchBlockedTracheostomyChild } from "./ems-patch-blocked-tracheostomy-child";
import { lipLacerationMissingToothFragment } from "./lip-laceration-missing-tooth-fragment";
import { aphasiaAfterEdCardioversion } from "./aphasia-after-ed-cardioversion";
import { cyberattackDowntimeCodeStroke } from "./cyberattack-downtime-code-stroke";

/** Batch 16. Q500B oral cases. EMS, lacerations, cerebrovascular accident and multiple patients. */
export const BATCH_16: OralCase[] = [
  emsPatchBlockedTracheostomyChild,
  lipLacerationMissingToothFragment,
  aphasiaAfterEdCardioversion,
  cyberattackDowntimeCodeStroke,
];
