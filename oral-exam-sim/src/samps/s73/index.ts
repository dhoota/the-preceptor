// Expansion batch s73: Deep venous thrombosis (DVT) and pulmonary embolus (PE). 5 new SAMPs, ids dvt-pe-48 onward.
import type { Samp } from "@/engine/samp";
import { DVT_PE_S73 } from "./dvt-pe";

export const SAMPS_S73: Samp[] = [...DVT_PE_S73];
