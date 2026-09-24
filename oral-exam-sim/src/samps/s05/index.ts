import type { Samp } from "@/engine/samp";
import { CVA_SAMPS } from "./cva";
import { CHEST_PAIN_SAMPS } from "./chest-pain";

/** SAMP batch s05. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S05: Samp[] = [...CVA_SAMPS, ...CHEST_PAIN_SAMPS];
