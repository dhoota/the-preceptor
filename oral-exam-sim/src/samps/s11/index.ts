import type { Samp } from "@/engine/samp";
import { GI_BLEED_SAMPS } from "./gi-bleed";
import { HEADACHE_SAMPS } from "./headache";

/** SAMP batch s11. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S11: Samp[] = [...GI_BLEED_SAMPS, ...HEADACHE_SAMPS];
