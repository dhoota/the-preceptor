import { describe, expect, it } from "vitest";
import { CASES, ITEMS } from "@/bank";
import { decodedBank } from "@/bank/decode";
import { getBank } from "@/bankSource";

/**
 * The shipped app reads the bank through the obfuscated snapshot
 * (src/bank/decode.ts -> src/bank/generated/encoded.ts), not the plaintext
 * src/bank/** import. These guard that the decode round-trip is lossless
 * and that getBank() actually starts out holding the real bank, not an
 * empty or stale one.
 */
describe("the obfuscated bank snapshot", () => {
  it("decodes back to the same items and cases as the plaintext source", () => {
    const decoded = decodedBank();
    expect(decoded.items).toHaveLength(ITEMS.length);
    expect(decoded.cases).toHaveLength(CASES.length);
    expect(decoded.items.map((i) => i.id).sort()).toEqual(ITEMS.map((i) => i.id).sort());
    expect(decoded.cases.map((c) => c.id).sort()).toEqual(CASES.map((c) => c.id).sort());
    // Spot-check a full item, not just its id, round-trips exactly.
    expect(decoded.items.find((i) => i.id === ITEMS[0].id)).toEqual(ITEMS[0]);
  });

  it("getBank() starts out on the shipped bank, not empty", () => {
    const bank = getBank();
    expect(bank.items.length).toBe(ITEMS.length);
    expect(bank.cases.length).toBe(CASES.length);
    expect(bank.demo).toBe(false);
  });
});
