import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { CFPC_KF_URL, topicById } from "@/blueprint/priorityTopics";
import { EDU_ONLY, blueprintRef, sourceUrl, sourcesFor } from "@/lib/sources";

const read = (rel: string) => readFileSync(new URL(`../src/${rel}`, import.meta.url), "utf8");
const httpsUrl = (u: string) => {
  const x = new URL(u);
  return x.protocol === "https:" && x.hostname.includes(".");
};

describe("every question cites a source with a tappable link (App Review 1.4.1)", () => {
  it("every SAMP question has a citation and a linked blueprint section", () => {
    const missing: string[] = [];
    for (const s of SAMPS)
      for (const q of s.questions) {
        const src = s.sources.find((x) => x.id === q.source);
        if (!src?.citation?.trim()) missing.push(`${s.id}/${q.id}: no citation`);
        const t = topicById(q.keyFeature.topic);
        if (!t || !(t.page > 0)) missing.push(`${s.id}/${q.id}: no blueprint section for ${q.keyFeature.topic}`);
        const bp = blueprintRef(q.keyFeature.topic, q.keyFeature.n);
        if (!bp.url.startsWith(`${CFPC_KF_URL}#page=`)) missing.push(`${s.id}/${q.id}: blueprint link`);
      }
    expect(missing).toEqual([]);
  });

  it("every oral question and rubric point has a citation and a linked blueprint section", () => {
    const missing: string[] = [];
    for (const c of CASES) {
      if (!topicById(c.priorityTopic)) missing.push(`${c.id}: no blueprint section`);
      for (const r of c.rubric) {
        const src = c.sources.find((x) => x.id === r.source);
        if (!src?.citation?.trim()) missing.push(`${c.id}/${r.id}: no citation`);
      }
      for (const n of c.nodes)
        if (n.kind === "question" && !sourcesFor(c, n.rubric).length) missing.push(`${c.id}/${n.id}: question has no source`);
    }
    expect(missing).toEqual([]);
  });

  it("every cited URL is a well formed https link", () => {
    const bad: string[] = [];
    for (const s of [...CASES.flatMap((c) => c.sources), ...SAMPS.flatMap((p) => p.sources)])
      if (s.url !== undefined && (!sourceUrl(s) || !httpsUrl(s.url))) bad.push(`${s.id}: ${s.url}`);
    expect(bad).toEqual([]);
  });

  it("shows the citation on every answer and rationale screen", () => {
    expect(read("screens/SampParts.tsx")).toMatch(/<SourceLinks sources=\{\[source\]\} topic=\{q\.keyFeature\.topic\}/);
    for (const f of ["screens/Written.tsx", "screens/Mocks.tsx"]) expect(read(f), f).toMatch(/source=\{s\.sources\.find\(\(x\) => x\.id === q\.source\)\}/);
    for (const f of ["screens/Result.tsx", "screens/Review.tsx", "screens/Runner.tsx", "screens/SelfScore.tsx"]) expect(read(f), f).toMatch(/<SourceLinks /);
    const comp = read("components/SourceLinks.tsx");
    expect(comp).toMatch(/Source:/);
    expect(comp).toMatch(/<button className="linkbtn citelink" onClick=\{\(\) => openUrl\(bp\.url\)\}>/);
  });

  it("has a Sources & References screen one tap from More, About and Home", () => {
    expect(read("screens/Sources.tsx")).toMatch(/<h1>Sources &amp; References<\/h1>/);
    expect(read("App.tsx")).toMatch(/route\.name === "sources" && <Sources \/>/);
    const settings = read("screens/Settings.tsx");
    expect(settings.match(/go\(\{ name: "sources" \}\)/g)?.length).toBe(2);
    expect(read("screens/Home.tsx")).toMatch(/go\(\{ name: "sources" \}\)/);
  });

  it("says educational exam preparation only, not medical advice", () => {
    expect(EDU_ONLY).toBe("Educational exam preparation only. Not medical advice.");
    for (const f of ["screens/Sources.tsx", "screens/Settings.tsx", "screens/Written.tsx", "screens/Mocks.tsx", "screens/Result.tsx", "screens/Review.tsx", "screens/Runner.tsx"])
      expect(read(f), f).toMatch(/\{EDU_ONLY\}/);
  });
});
