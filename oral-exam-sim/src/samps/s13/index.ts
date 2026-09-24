import type { Samp } from "@/engine/samp";
import { LACERATIONS_SAMPS } from "./lacerations";
import { MULTIPLE_PATIENTS_SAMPS } from "./multiple-patients";

/** SAMP batch s13. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S13: Samp[] = [...LACERATIONS_SAMPS, ...MULTIPLE_PATIENTS_SAMPS];
