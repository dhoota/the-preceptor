import { describe, expect, it } from "vitest";
import { INTERVAL_DAYS, RETIRE_BOX, cardKey, deckStats, dueCards, review, updateDeckFromAttempt } from "@/engine";

const DAY = 86_400_000;

describe("spaced review", () => {
  it("adds missed items due now", () => {
    const d = updateDeckFromAttempt({}, "c1", ["r1", "r2"], [], 1000);
    expect(Object.keys(d)).toEqual(["c1:r1", "c1:r2"]);
    expect(dueCards(d, 1000)).toHaveLength(2);
  });

  it("moves a recalled card up a box with a growing interval", () => {
    let d = updateDeckFromAttempt({}, "c1", ["r1"], [], 0);
    const k = cardKey("c1", "r1");
    d = review(d, k, true, 0);
    expect(d[k].box).toBe(1);
    expect(d[k].due).toBe(INTERVAL_DAYS[1] * DAY);
    d = review(d, k, true, d[k].due);
    expect(d[k].box).toBe(2);
    expect(d[k].due).toBe(INTERVAL_DAYS[1] * DAY + INTERVAL_DAYS[2] * DAY);
  });

  it("sends a forgotten card back to box 0 for a short relearn", () => {
    let d = updateDeckFromAttempt({}, "c1", ["r1"], [], 0);
    d = review(review(d, "c1:r1", true, 0), "c1:r1", false, DAY);
    expect(d["c1:r1"]).toMatchObject({ box: 0, lapses: 1 });
    expect(d["c1:r1"].due).toBe(DAY + 10 * 60_000);
    expect(dueCards(d, DAY)).toHaveLength(0);
    expect(dueCards(d, DAY + 10 * 60_000)).toHaveLength(1);
  });

  it("retires a card after enough recalls", () => {
    let d = updateDeckFromAttempt({}, "c1", ["r1"], [], 0);
    let t = 0;
    for (let i = 0; i < RETIRE_BOX; i++) {
      d = review(d, "c1:r1", true, t);
      t = d["c1:r1"].due;
    }
    expect(dueCards(d, t + 1000 * DAY)).toHaveLength(0);
    expect(deckStats(d, t).retired).toBe(1);
  });

  it("resets a card missed again in a later attempt", () => {
    let d = updateDeckFromAttempt({}, "c1", ["r1"], [], 0);
    d = review(d, "c1:r1", true, 0);
    d = updateDeckFromAttempt(d, "c1", ["r1"], [], 5 * DAY);
    expect(d["c1:r1"]).toMatchObject({ box: 0, due: 5 * DAY, lapses: 1 });
  });

  it("promotes a card the candidate got right in a later attempt", () => {
    let d = updateDeckFromAttempt({}, "c1", ["r1"], [], 0);
    d = updateDeckFromAttempt(d, "c1", [], ["r1", "r9"], DAY);
    expect(d["c1:r1"].box).toBe(1);
    expect(d["c1:r9"]).toBeUndefined();
  });

  it("orders due cards most overdue first, then most lapsed", () => {
    let d = updateDeckFromAttempt({}, "c1", ["a"], [], 100);
    d = updateDeckFromAttempt(d, "c1", ["b"], [], 50);
    d = updateDeckFromAttempt(d, "c1", ["c"], [], 50);
    d = { ...d, "c1:c": { ...d["c1:c"], lapses: 3 } };
    expect(dueCards(d, 1000).map((c) => c.itemId)).toEqual(["c", "b", "a"]);
  });

  it("ignores reviews of unknown cards", () => {
    const d = {};
    expect(review(d, "nope", true, 0)).toBe(d);
  });
});
