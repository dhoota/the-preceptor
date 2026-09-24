import { it } from "vitest";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import expansion from "../docs/samp-expansion.json";
import { topicById } from "@/blueprint/priorityTopics";
import { VITAL_LABELS, type Samp, type SampQuestion } from "@/engine/samp";
import { SAMP_BATCHES } from "@/samps";

/**
 * Writes the physician review pack: one readable file per expansion batch in
 * docs/physician-review/. Run with TOOL=1 npx vitest run tools/export-review.test.ts
 * Flags for each batch come from docs/physician-items.md and from every
 * "physician" section of the review reports in docs/reviews/. A flag goes to
 * the batch of each SAMP id it names, or to the batch in the report's file name.
 */

/** One markdown bullet. Table rows become "cell. cell." so they read out of their table. */
function bullet(line: string): string {
  if (line.startsWith("|")) return `- ${line.split("|").map((c) => c.trim()).filter(Boolean).join(". ")}`;
  return line.replace(/^(?:[-*]|\d+\.)\s+/, "- ").replace(/^(?!- )/, "- ");
}

/** Lines under any heading or bold line that mentions the physician, per report. */
function physicianFlags(): { report: string; line: string }[] {
  const dir = new URL("../docs/reviews/", import.meta.url);
  const out: { report: string; line: string }[] = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".md"))) {
    let on = false;
    for (const raw of readFileSync(new URL(f, dir), "utf8").split("\n")) {
      const heading = /^#{1,4} /.test(raw) || /^\*\*[^*]+\*\*:?\.?$/.test(raw.trim());
      if (heading) on = /physician/i.test(raw);
      else if (on && raw.trim() && !/^\|?\s*-{3}/.test(raw.trim())) out.push({ report: f, line: bullet(raw.trim()) });
    }
  }
  return out;
}

const OUT = new URL("../docs/physician-review/", import.meta.url);
const letter = (i: number) => String.fromCharCode(65 + i);

function question(s: Samp, q: SampQuestion, n: number): string[] {
  const out: string[] = [`#### Q${n + 1}`];
  if (q.update) out.push(`*Update:* ${q.update}`, "");
  out.push(`**${q.prompt}**`, "");
  if (q.kind === "short") {
    out.push(`Write-in. Asks for ${q.required}.`, "", "Accepted:");
    for (const a of q.accept) out.push(`- ${a.text}`);
    for (const u of q.unacceptable ?? []) out.push(`- Not accepted${u.dangerous ? " (dangerous, scores zero)" : ""}: ${u.text}`);
  } else {
    const key = new Set(q.kind === "single" ? [q.correct] : q.correct);
    if (q.kind === "menu") out.push(`Select ${q.select}.`, "");
    q.options.forEach((o, i) => out.push(`- ${letter(i)}. ${o}${key.has(i) ? "  **(key)**" : ""}`));
  }
  const t = topicById(q.keyFeature.topic);
  const kf = t?.keyFeatures.find((k) => k.n === q.keyFeature.n);
  const src = s.sources.find((x) => x.id === q.source);
  out.push(
    "",
    `*Explanation:* ${q.explanation}`,
    "",
    `*Key feature:* ${t?.name ?? q.keyFeature.topic} ${q.keyFeature.n}. ${kf?.summary ?? ""}`,
    "",
    `*Source:* ${src ? src.citation + (src.url ? ` ${src.url}` : "") : `missing (${q.source})`}`,
    "",
  );
  return out;
}

function samp(s: Samp): string[] {
  const out = [`### ${s.id}: ${s.title}`, "", "- [ ] Approved  - [ ] Needs change  - [ ] Reject", "", s.stem, ""];
  const v = s.vitals;
  if (v) for (const [k, label] of VITAL_LABELS) if (v[k]) out.push(`- ${label}: ${v[k]}`);
  if (v) out.push("");
  s.questions.forEach((q, i) => out.push(...question(s, q, i)));
  return out;
}

it("writes the physician review pack", () => {
  const items = readFileSync(new URL("../docs/physician-items.md", import.meta.url), "utf8").split("\n");
  const batchOf = new Map<string, string>();
  for (const [b, list] of Object.entries(SAMP_BATCHES)) for (const s of list) batchOf.set(s.id, b);
  const reportFlags = new Map<string, string[]>();
  for (const { report, line } of physicianFlags()) {
    const ids = [...line.matchAll(/\b([a-z]+(?:-[a-z]+)*-\d{2})\b/g)].map((m) => m[1]);
    const batches = new Set(ids.map((id) => batchOf.get(id)).filter((b): b is string => Boolean(b)));
    if (!batches.size) for (const m of report.matchAll(/s\d{2}/g)) batches.add(m[0]);
    for (const b of batches) reportFlags.set(b, [...(reportFlags.get(b) ?? []), `${line} *(${report})*`]);
  }
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });
  const index: string[] = [];
  for (const [b, info] of Object.entries(expansion.batches) as [string, { topic: string; name: string }][]) {
    const list = (SAMP_BATCHES[b] ?? []) as Samp[];
    const flags = [...items.filter((l) => new RegExp(`\\b${b}\\b`).test(l)), ...(reportFlags.get(b) ?? [])];
    const lines = [
      `# ${b}: ${info.name}`,
      "",
      `${list.length} SAMPs. All are reviewed: false until signed off. The key is marked on each question.`,
      "",
      "## Reviewer flags for this batch",
      "",
      "Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.",
      "",
      ...(flags.length ? flags : ["None beyond the batch review reports."]),
      "",
      `Review reports: docs/reviews/writer-${b}.md, samps-${b}-lensA.md, samps-${b}-lensB.md`,
      "",
      "## SAMPs",
      "",
      ...list.flatMap(samp),
    ];
    const file = `${b}-${info.topic}.md`;
    writeFileSync(new URL(file, OUT), lines.join("\n"));
    index.push(`| ${b} | ${info.name} | ${list.length} | ${flags.length} | [${file}](${file}) |`);
  }
  writeFileSync(
    new URL("README.md", OUT),
    ["# Physician review pack", "", "| Batch | Topic | SAMPs | Flag lines | File |", "|---|---|---|---|---|", ...index, ""].join("\n"),
  );
});
