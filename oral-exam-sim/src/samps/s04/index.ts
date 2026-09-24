import type { Samp } from "@/engine/samp";
import { ASTHMA_COPD_SAMPS } from "./asthma-copd";
import { BURNS_SAMPS } from "./burns";

/** SAMP batch s04. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S04: Samp[] = [...ASTHMA_COPD_SAMPS, ...BURNS_SAMPS];
