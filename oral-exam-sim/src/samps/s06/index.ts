import type { Samp } from "@/engine/samp";
import { CQI_SAMPS } from "./cqi";
import { MSK_SAMPS } from "./msk";

/** SAMP batch s06. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S06: Samp[] = [...MSK_SAMPS, ...CQI_SAMPS];
