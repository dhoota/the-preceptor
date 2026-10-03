// DRAFT. Written for exam practice only. Requires physician review before release.
//
// The app's entry point for the SAMP bank. Reads the obfuscated snapshot
// (decode.ts) instead of importing the plaintext per-batch files directly,
// so SAMP text isn't shipped as readable source in the production bundle.
// Held-back SAMPs are already excluded when the snapshot is generated.
// src/samps/source.ts (plaintext, batch-keyed, unfiltered) is still the
// source of truth for the content pipeline and for tests.

import type { Samp } from "@/engine/samp";
import { decodedSamps } from "./decode";

/** The SAMPs the app shows. Held-back SAMPs are left out. */
export const SAMPS: Samp[] = decodedSamps();

export function getSamp(id: string): Samp | undefined {
  return SAMPS.find((s) => s.id === id);
}
