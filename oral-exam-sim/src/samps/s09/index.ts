import type { Samp } from "@/engine/samp";
import { EMS_SAMPS } from "./ems";
import { ENVIRONMENTAL_SAMPS } from "./environmental";

/** SAMP batch s09. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S09: Samp[] = [...EMS_SAMPS, ...ENVIRONMENTAL_SAMPS];
