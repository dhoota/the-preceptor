import type { OralCase } from "@/engine/types";
import { acuteIschemicStrokeEvt } from "./acute-ischemic-stroke-evt";
import { refractoryStatusEpilepticus } from "./refractory-status-epilepticus";
import { thunderclapHeadacheSah } from "./thunderclap-headache-sah";
import { metastaticCordCompression } from "./metastatic-cord-compression";
import { myasthenicCrisisAirway } from "./myasthenic-crisis-airway";
import { bacterialMeningitisAdult } from "./bacterial-meningitis-adult";
import { acuteVestibularSyndromeHints } from "./acute-vestibular-syndrome-hints";
import { highVoltageElectricalInjury } from "./high-voltage-electrical-injury";
import { deliriumOlderAdult } from "./delirium-older-adult";
import { fallAnticoagulatedHipFracture } from "./fall-anticoagulated-hip-fracture";

/** Batch 04. Neurology, environmental and geriatrics. See docs/BLUEPRINT.md. */
export const BATCH_04: OralCase[] = [
  acuteIschemicStrokeEvt,
  refractoryStatusEpilepticus,
  thunderclapHeadacheSah,
  metastaticCordCompression,
  myasthenicCrisisAirway,
  bacterialMeningitisAdult,
  acuteVestibularSyndromeHints,
  highVoltageElectricalInjury,
  deliriumOlderAdult,
  fallAnticoagulatedHipFracture,
];
