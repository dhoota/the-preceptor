import type { Samp } from "@/engine/samp";
import { DELIRIUM_AGITATION_SAMPS } from "./delirium-agitation";
import { DVT_PE_SAMPS } from "./dvt-pe";

/** SAMP batch s08. See docs/SAMP_BLUEPRINT.md. */
export const SAMPS_S08: Samp[] = [...DVT_PE_SAMPS, ...DELIRIUM_AGITATION_SAMPS];
