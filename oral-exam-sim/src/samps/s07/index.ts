import type { Samp } from "@/engine/samp";
import { CRITICAL_APPRAISAL } from "./critical-appraisal";
import { LOC } from "./loc";

/** SAMP batch s07. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S07: Samp[] = [...CRITICAL_APPRAISAL, ...LOC];
