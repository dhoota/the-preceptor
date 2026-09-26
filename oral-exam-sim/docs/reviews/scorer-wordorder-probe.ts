import { AUTHORED_SAMPS, HELD_BACK } from "@/samps";
import { markQuestion, tokens, NEGATIONS } from "@/engine/samp";
const negQs = new Set<string>(), negSamps = new Set<string>(); let negPhrases = 0, negPhrasesExploited = 0;
const splitPhrases: string[] = []; const splitQs = new Set<string>();
const examples: string[] = [];
for (const s of AUTHORED_SAMPS) s.questions.forEach((q: any, qi: number) => {
  if (q.kind !== "short") return;
  const key = `${s.id} q${qi + 1}`;
  const all = [...q.accept.flatMap((a: any) => a.match), ...(q.unacceptable ?? []).flatMap((u: any) => u.match)];
  for (const p of all) if (/\d[:,]\d/.test(p)) { splitPhrases.push(`${key}: ${p}`); splitQs.add(key); }
  for (const a of q.accept) for (const p of a.match) {
    const t = tokens(p); const neg = t.find((w) => NEGATIONS.has(w)); if (!neg) continue;
    const content = t.filter((w) => !NEGATIONS.has(w)); if (!content.length) continue;
    negPhrases++;
    const line = `give ${content.join(" ")}, ${neg} delay`;
    const r = markQuestion(q, { kind: "short", lines: [line] });
    if (r.lines?.[0]?.itemId === a.id && r.lines[0].counted) {
      negPhrasesExploited++; negQs.add(key); negSamps.add(s.id);
      if (examples.length < 8) examples.push(`${key} | phrase "${p}" | wrong line "${line}" scores "${a.text}"`);
    }
  }
});
const rel = (set: Set<string>) => [...set].filter((k) => !HELD_BACK.has(k.split(" ")[0])).length;
console.log(JSON.stringify({ acceptPhrasesWithNegationWord: negPhrases, exploitedByWrongLine: negPhrasesExploited,
  questionsExposed: negQs.size, questionsExposedReleased: rel(negQs), sampsExposed: negSamps.size,
  phrasesSplitByTokeniser: splitPhrases.length, questionsWithSplitPhrases: splitQs.size }, null, 1));
console.log(examples.join("\n")); console.log(splitPhrases.slice(0, 6).join("\n"));
