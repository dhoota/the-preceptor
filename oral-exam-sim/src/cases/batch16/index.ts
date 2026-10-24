import type { OralCase } from "@/engine/types";
import { emsPatchBlockedTracheostomyChild } from "./ems-patch-blocked-tracheostomy-child";
import { forearmLacerationHemophiliaEmicizumab } from "./forearm-laceration-hemophilia-emicizumab";
import { aphasiaAfterEdCardioversion } from "./aphasia-after-ed-cardioversion";
import { wildfireEvacueesHostHospital } from "./wildfire-evacuees-host-hospital";

/** Batch 16. Q500B oral cases. EMS, lacerations, cerebrovascular accident and multiple patients. */
export const BATCH_16: OralCase[] = [
  emsPatchBlockedTracheostomyChild,
  forearmLacerationHemophiliaEmicizumab,
  aphasiaAfterEdCardioversion,
  wildfireEvacueesHostHospital,
];
