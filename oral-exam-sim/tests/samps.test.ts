import { describe, expect, it } from "vitest";
import signoff from "../docs/signoff-2026-09.json";
import expansion from "../docs/samp-expansion.json";
import { PRIORITY_TOPICS, topicById } from "@/blueprint/priorityTopics";
import { validateSamp } from "@/engine/samp";
import { AUTHORED_SAMPS, HELD_BACK, SAMPS, SAMP_BATCHES } from "@/samps";

/**
 * Structure, blueprint coverage and house style for the SAMP bank.
 * SAMP_BATCH=s03 limits the run to one batch. LAUNCH_GATE=1 enforces 1,500+
 * SAMPs and at least 3 questions on every key feature of every priority topic.
 */

/** Signed-off ids. Anything new or changed stays reviewed: false. */
const SIGNED_OFF = new Set<string>(signoff.samps);

const only = process.env.SAMP_BATCH;
const target = only ? SAMP_BATCHES[only] ?? [] : AUTHORED_SAMPS;
const kfCount = (t: string) => topicById(t)?.keyFeatures.length;

function strings(value: unknown, out: string[] = [], key = ""): string[] {
  if (typeof value === "string") {
    if (key !== "url") out.push(value);
  } else if (Array.isArray(value)) value.forEach((v) => strings(v, out, key));
  else if (value && typeof value === "object") Object.entries(value).forEach(([k, v]) => strings(v, out, k));
  return out;
}

function coverage(samps: typeof SAMPS) {
  const byTopic = new Map<string, Map<number, number>>();
  for (const s of samps) for (const q of s.questions) {
    const m = byTopic.get(q.keyFeature.topic) ?? new Map<number, number>();
    m.set(q.keyFeature.n, (m.get(q.keyFeature.n) ?? 0) + 1);
    byTopic.set(q.keyFeature.topic, m);
  }
  return byTopic;
}

describe("SAMP bank", () => {
  it("has unique SAMP ids", () => {
    const ids = AUTHORED_SAMPS.map((s) => s.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  if (only) {
    const topics = [...new Set(target.map((s) => s.topic))];
    // Batches s01 to s18 hold 15 per topic. Expansion batches follow docs/samp-expansion.json.
    const planned = (expansion.batches as Record<string, { topic: string; count: number }>)[only];
    it(`batch ${only} has its planned SAMPs per topic`, () => {
      expect(target.length).toBeGreaterThan(0);
      if (planned) expect(topics, "one topic per expansion batch").toEqual([planned.topic]);
      for (const t of topics) expect(target.filter((s) => s.topic === t).length, t).toBe(planned?.count ?? 15);
    });
    it(`batch ${only} tests every key feature of its topics`, () => {
      const cov = coverage(target);
      for (const t of topics) {
        const missing = topicById(t)!.keyFeatures.map((k) => k.n).filter((n) => !cov.get(t)?.get(n));
        expect(missing, t).toEqual([]);
      }
    });
    // Legacy write-in batches only. Expansion batches are MCQ only (tests/samp-quality.test.ts).
    if (!planned) it(`batch ${only} is at least 60 percent short answer`, () => {
      const qs = target.flatMap((s) => s.questions);
      expect(qs.filter((q) => q.kind === "short").length / qs.length).toBeGreaterThanOrEqual(0.6);
    });
  }

  if (process.env.LAUNCH_GATE) {
    it("meets the launch minimum of 1,500 authored SAMPs", () => {
      expect(AUTHORED_SAMPS.length).toBeGreaterThanOrEqual(1500);
    });
    it("releases only physician signed-off SAMPs", () => {
      expect(SAMPS.filter((s) => !s.reviewed).map((s) => s.id)).toEqual([]);
    });
    it("holds back only ids that exist", () => {
      for (const id of HELD_BACK) expect(AUTHORED_SAMPS.some((s) => s.id === id), id).toBe(true);
    });
    it("has at least 3 questions on every key feature of every priority topic", () => {
      const cov = coverage(SAMPS);
      const thin = PRIORITY_TOPICS.flatMap((t) =>
        t.keyFeatures.filter((k) => (cov.get(t.id)?.get(k.n) ?? 0) < 3).map((k) => `${t.id}#${k.n} (${cov.get(t.id)?.get(k.n) ?? 0})`),
      );
      expect(thin).toEqual([]);
    });
  }
});

for (const s of target) {
  describe(s.id, () => {
    it("is structurally valid", () => {
      expect(validateSamp(s, kfCount)).toEqual([]);
    });
    it("is marked reviewed only if a physician signed it off", () => {
      expect(s.reviewed).toBe(SIGNED_OFF.has(s.id));
    });
    it("follows house style", () => {
      for (const x of strings(s)) {
        expect(x, x).not.toMatch(/[–—]/);
        expect(x, x).not.toContain(";");
      }
    });
  });
}
