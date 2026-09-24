import type { Samp } from "@/engine/samp";
import { ABDOMINAL_PAIN } from "./abdominal-pain";
import { ABUSE_DOMESTIC } from "./abuse-domestic";

/** SAMP batch s01. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S01: Samp[] = [...ABDOMINAL_PAIN, ...ABUSE_DOMESTIC];
