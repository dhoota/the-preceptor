import type { OralCase } from "@/engine/types";
import { rupturedEctopicPregnancy } from "./ruptured-ectopic-pregnancy";
import { postpartumHemorrhage } from "./postpartum-hemorrhage";
import { eclampsia } from "./eclampsia";
import { shoulderDystociaNeonatalResuscitation } from "./shoulder-dystocia-neonatal-resuscitation";
import { maternalCardiacArrest } from "./maternal-cardiac-arrest";
import { sexualAssaultCare } from "./sexual-assault-care";
import { salicylateToxicity } from "./salicylate-toxicity";
import { toxicAlcoholMethanol } from "./toxic-alcohol-methanol";
import { calciumChannelBlockerOverdose } from "./calcium-channel-blocker-overdose";
import { opioidOverdoseBuprenorphineStart } from "./opioid-overdose-buprenorphine-start";

/** Batch 07. Obstetrics, gynecology and toxicology. See docs/BLUEPRINT.md. */
export const BATCH_07: OralCase[] = [
  rupturedEctopicPregnancy,
  postpartumHemorrhage,
  eclampsia,
  shoulderDystociaNeonatalResuscitation,
  maternalCardiacArrest,
  sexualAssaultCare,
  salicylateToxicity,
  toxicAlcoholMethanol,
  calciumChannelBlockerOverdose,
  opioidOverdoseBuprenorphineStart,
];
