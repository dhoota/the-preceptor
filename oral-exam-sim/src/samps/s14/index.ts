import type { Samp } from "@/engine/samp";
import { MULTIPLE_TRAUMA_SAMPS } from "./multiple-trauma";
import { PEDIATRIC_FEVER_SAMPS } from "./pediatric-fever";

/** SAMP batch s14. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S14: Samp[] = [...MULTIPLE_TRAUMA_SAMPS, ...PEDIATRIC_FEVER_SAMPS];
