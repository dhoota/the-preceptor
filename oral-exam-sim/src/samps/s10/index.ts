import type { Samp } from "@/engine/samp";
import { EYE_SAMPS } from "./eye";
import { FIRST_TRIMESTER_BLEEDING_SAMPS } from "./first-trimester-bleeding";

/** SAMP batch s10. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S10: Samp[] = [...EYE_SAMPS, ...FIRST_TRIMESTER_BLEEDING_SAMPS];
