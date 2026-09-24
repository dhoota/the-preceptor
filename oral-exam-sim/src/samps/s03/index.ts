import type { Samp } from "@/engine/samp";
import { ANAPHYLAXIS } from "./anaphylaxis";
import { ARRHYTHMIA } from "./arrhythmia";

/** SAMP batch s03. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S03: Samp[] = [...ANAPHYLAXIS, ...ARRHYTHMIA];
