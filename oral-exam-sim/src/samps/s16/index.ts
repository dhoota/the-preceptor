import type { Samp } from "@/engine/samp";
import { SEIZURES_SAMPS } from "./seizures";
import { SHOCK_SAMPS } from "./shock";

/** SAMP batch s16. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S16: Samp[] = [...SEIZURES_SAMPS, ...SHOCK_SAMPS];
