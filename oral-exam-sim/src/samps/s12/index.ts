import type { Samp } from "@/engine/samp";
import { INFECTIOUS_DISEASES_SAMPS } from "./infectious-diseases";
import { ISCHEMIC_HEART_DISEASE_SAMPS } from "./ischemic-heart-disease";

/** SAMP batch s12. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S12: Samp[] = [...INFECTIOUS_DISEASES_SAMPS, ...ISCHEMIC_HEART_DISEASE_SAMPS];
