import { AUTHORED_SAMPS, HELD_BACK } from "@/samps";
import { markQuestion } from "@/engine/samp";
const CONNECTORS = ["rather than", "instead of", "over", "in place of", "versus", "in preference to"];
type Row = { id: string; q: string; conn: string; line: string; hit: string; dangerous: boolean; released: boolean };
const rows: Row[] = [];
const qsExposed = new Set<string>(), qsDanger = new Set<string>();
let shortQs = 0, shortQsWithBad = 0;
for (const s of AUTHORED_SAMPS) {
  s.questions.forEach((q: any, qi: number) => {
    if (q.kind !== "short") return;
    shortQs++;
    if (!q.unacceptable?.length) return;
    shortQsWithBad++;
    const good = q.accept.map((a: any) => a.match[0]).filter(Boolean);
    for (const u of q.unacceptable) for (const up of u.match.slice(0, 3)) for (const g of good.slice(0, 3)) for (const conn of CONNECTORS) {
      const line = `${g} ${conn} ${up}`;
      const r = markQuestion(q, { kind: "short", lines: [line] });
      const lm = r.lines?.[0];
      if (lm && (lm.unacceptable || lm.dangerous)) {
        const key = `${s.id} q${qi + 1}`;
        qsExposed.add(key); if (lm.dangerous) qsDanger.add(key);
        rows.push({ id: s.id, q: `q${qi + 1}`, conn, line, hit: lm.unacceptable ?? "", dangerous: !!lm.dangerous, released: !HELD_BACK.has(s.id) });
      }
    }
  });
}
const rel = (set: Set<string>) => [...set].filter((k) => !HELD_BACK.has(k.split(" ")[0])).length;
const byConn: Record<string, number> = {};
for (const r of rows) byConn[r.conn] = (byConn[r.conn] ?? 0) + 1;
const sampsExposed = new Set([...qsExposed].map((k) => k.split(" ")[0]));
const sampsDanger = new Set([...qsDanger].map((k) => k.split(" ")[0]));
console.log(JSON.stringify({
  authoredSamps: AUTHORED_SAMPS.length, shortQs, shortQsWithUnacceptable: shortQsWithBad,
  questionsExposed: qsExposed.size, questionsExposedReleased: rel(qsExposed),
  questionsWhereItZeroesTheWholeQuestion: qsDanger.size, dangerReleased: rel(qsDanger),
  sampsExposed: sampsExposed.size, sampsWithDangerExposure: sampsDanger.size, probeLinesFlagged: rows.length, byConnector: byConn,
}, null, 1));
const fs = await import("node:fs");
fs.writeFileSync(process.argv[2], rows.map((r) => `${r.released ? "released" : "held"}\t${r.dangerous ? "DANGEROUS" : "unacceptable"}\t${r.id} ${r.q}\t${r.conn}\t${r.line}\t${r.hit}`).join("\n"));
