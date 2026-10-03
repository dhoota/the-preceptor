import { describe, expect, it } from "vitest";
import { CASES as SOURCE_CASES } from "@/cases/source";
import { CASES } from "@/cases";
import { SAMPS as SOURCE_SAMPS } from "@/samps/source";
import { SAMPS } from "@/samps";

/**
 * The shipped app reads cases and SAMPs through the obfuscated snapshots
 * (src/cases/decode.ts, src/samps/decode.ts), not a direct import of the
 * plaintext per-batch files. These guard that the decode round-trip is
 * lossless and that the app's entry points actually hold the real,
 * held-back-filtered content, not something empty or stale.
 */
describe("the obfuscated case snapshot", () => {
  it("decodes back to the same cases as the plaintext source", () => {
    expect(CASES).toHaveLength(SOURCE_CASES.length);
    expect(CASES.map((c) => c.id).sort()).toEqual(SOURCE_CASES.map((c) => c.id).sort());
    expect(CASES.find((c) => c.id === SOURCE_CASES[0].id)).toEqual(SOURCE_CASES[0]);
  });
});

describe("the obfuscated SAMP snapshot", () => {
  it("decodes back to the same (held-back-filtered) SAMPs as the plaintext source", () => {
    expect(SAMPS).toHaveLength(SOURCE_SAMPS.length);
    expect(SAMPS.map((s) => s.id).sort()).toEqual(SOURCE_SAMPS.map((s) => s.id).sort());
    expect(SAMPS.find((s) => s.id === SOURCE_SAMPS[0].id)).toEqual(SOURCE_SAMPS[0]);
  });
});
