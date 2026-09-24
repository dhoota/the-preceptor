/**
 * Orchestrator tool, not part of the suite (vitest only collects tests/).
 * Logs every keyed option whose text differs from the signed-off snapshot,
 * for physician review. Usage:
 *   BATCH=s02 npx vitest run --dir tools tools/log-key-edits.test.ts
 */
import { test } from "vitest";
import { readFileSync, writeFileSync } from "node:fs";
import { SAMP_BATCHES } from "@/samps";

test("log key edits", () => {
  const b = process.env.BATCH!;
  const snap = JSON.parse(readFileSync("docs/signoff-keys-2026-09.json", "utf8"));
  const file = "docs/conformance-key-edits.json";
  const log = JSON.parse(readFileSync(file, "utf8"));
  let n = 0;
  for (const s of SAMP_BATCHES[b] ?? []) {
    const before = snap[s.id];
    if (!before) continue;
    s.questions.forEach((q, i) => {
      if (q.kind === "short") return;
      const keyed = (q.kind === "single" ? [q.correct] : q.correct).map((k) => q.options[k]);
      const was: string[] = before[i].keyed;
      const key = `${s.id}#${q.id}`;
      if (JSON.stringify([...keyed].sort()) !== JSON.stringify([...was].sort())) {
        log.edits[key] = { batch: b, before: was, after: keyed };
        n++;
      } else delete log.edits[key];
    });
  }
  writeFileSync(file, JSON.stringify(log, null, 1) + "\n");
  console.log(`logged ${n} keyed option edits for ${b}`);
});
