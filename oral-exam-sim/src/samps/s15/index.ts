import type { Samp } from "@/engine/samp";
import { PRE_ECLAMPSIA_SAMPS } from "./pre-eclampsia";
import { PULMONARY_EDEMA_SAMPS } from "./pulmonary-edema";

/** SAMP batch s15. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S15: Samp[] = [...PRE_ECLAMPSIA_SAMPS, ...PULMONARY_EDEMA_SAMPS];
