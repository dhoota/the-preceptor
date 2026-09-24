// Expansion batch s33: Deep venous thrombosis (DVT) and pulmonary embolus (PE). 32 new SAMPs, ids dvt-pe-16 onward.
import type { Samp } from "@/engine/samp";
import { DVT_PE_S33_SAMPS } from "./dvt-pe";

export const SAMPS_S33: Samp[] = [...DVT_PE_S33_SAMPS];
