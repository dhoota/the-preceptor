import type { Samp } from "@/engine/samp";
import { SOB_SAMPS } from "./sob";
import { SUICIDE_RISK_SAMPS } from "./suicide-risk";

/** SAMP batch s17. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S17: Samp[] = [...SOB_SAMPS, ...SUICIDE_RISK_SAMPS];
