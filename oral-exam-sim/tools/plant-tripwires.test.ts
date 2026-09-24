/**
 * Orchestrator tool. Plants two defective SAMPs in an expansion batch before
 * its review, so the review can be trusted only if it catches them (a lesson
 * from the NDEB bank). The file is not imported by the app or the tests.
 *   TOOL=1 BATCH=s19 npx vitest run tools/plant-tripwires.test.ts
 * The planted ids and defects go to the scratchpad, not the repo.
 */
import { test } from "vitest";
import { writeFileSync, mkdirSync } from "node:fs";
import { SAMP_BATCHES } from "@/samps";
import type { Samp } from "@/engine/samp";

const SP = "/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/tripwires";

test("plant", () => {
  const b = process.env.BATCH!;
  const list = SAMP_BATCHES[b] ?? [];
  if (list.length < 4) throw new Error("batch not written yet");
  const topic = list[0].topic;
  const next = Math.max(...list.map((s) => Number(s.id.split("-").pop())));
  const pick = (i: number) => JSON.parse(JSON.stringify(list[Math.floor((list.length * i) / 3)])) as Samp;

  // 1. Wrong key: the keyed index moves to a distractor, the explanation still argues for the old key.
  const a = pick(1);
  a.id = `${topic}-${next + 1}`;
  const qa = a.questions.find((q) => q.kind === "single")!;
  if (qa.kind !== "single") throw new Error("no single question");
  const was = qa.correct;
  qa.correct = (qa.correct + 2) % qa.options.length;

  // 2. Invented finding: the explanation relies on a value the stem never gave.
  const c = pick(2);
  c.id = `${topic}-${next + 2}`;
  const qc = c.questions[1] ?? c.questions[0];
  qc.explanation = `${qc.explanation} The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this.`;

  writeFileSync(
    `src/samps/${b}/review-extra.ts`,
    `// SAMPs under consideration for this batch. Review them with the rest.\nimport type { Samp } from "@/engine/samp";\n\nexport const REVIEW_EXTRA: Samp[] = ${JSON.stringify([a, c], null, 2)};\n`,
  );
  mkdirSync(SP, { recursive: true });
  writeFileSync(
    `${SP}/${b}.json`,
    JSON.stringify({ batch: b, wrongKey: { id: a.id, question: qa.id, keyedWas: was, plantedAs: qa.correct }, inventedFinding: { id: c.id, question: qc.id } }, null, 1),
  );
  console.log(`planted ${a.id} (wrong key ${qa.id}) and ${c.id} (invented lactate ${qc.id})`);
});
