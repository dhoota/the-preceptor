import { ITEMS } from "./index";
const mean = (x: number[]) => x.reduce((a, b) => a + b, 0) / x.length;
const pos = [0, 0, 0, 0]; let longest = 0, mcN = 0;
const kinds: Record<string, number> = {}, cj: Record<string, number> = {}, df: Record<string, number> = {};
let sataFirst = 0, sataAll = 0, multiLonger = 0, multiN = 0;
for (const it of ITEMS as any[]) {
  const k = it.trend ? "trend" : it.kind; kinds[k] = (kinds[k] ?? 0) + 1; cj[it.cjmm] = (cj[it.cjmm] ?? 0) + 1; df[it.difficulty] = (df[it.difficulty] ?? 0) + 1;
  if (it.kind === "mc") { mcN++; pos[it.correct]++; const kl = it.options[it.correct].text.length; if (it.options.every((o: any, i: number) => i === it.correct || o.text.length < kl)) { longest++; console.log("longest key:", it.id); } }
  const pools: [string[], string[]][] = [];
  const sp = (l: any[], keys: number[]) => pools.push([l.filter((_, i) => keys.includes(i)).map((c) => c.text), l.filter((_, i) => !keys.includes(i)).map((c) => c.text)]);
  if (it.kind === "msn" || it.kind === "sata") sp(it.options, it.correct);
  if (it.kind === "highlight") sp(it.spans, it.correct);
  if (it.kind === "dnd") sp(it.tokens, it.correct);
  if (it.kind === "bowtie") { sp(it.actions, it.correct.actions); sp(it.parameters, it.correct.parameters); }
  for (const [ks, os] of pools) { if (!os.length) continue; multiN++; const r = mean(ks.map((s) => s.length)) / mean(os.map((s) => s.length)); if (r > 1) multiLonger++; console.log("pool", it.id, it.kind, r.toFixed(2)); }
  if (it.kind === "sata") { sataAll += it.correct.length; sataFirst += it.correct.filter((c: number) => c < it.options.length / 2).length; }
}
console.log({ n: ITEMS.length, kinds, cj, df, pos, longest, mcN, multiLonger, multiN, sataFirst, sataAll });
