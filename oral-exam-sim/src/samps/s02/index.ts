import type { Samp } from "@/engine/samp";
import { AIRWAY_SAMPS } from "./airway";
import { ANALGESIA_SEDATION_SAMPS } from "./analgesia-sedation";

/** SAMP batch s02. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S02: Samp[] = [...AIRWAY_SAMPS, ...ANALGESIA_SEDATION_SAMPS];
