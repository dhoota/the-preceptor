import { CJMM_IDS, NEED_IDS, PROCESSES } from "./blueprint";
import { styleProblems } from "./style";
import type { CaseStudy, Choice, Item, Tab } from "./types";

/**
 * Item quality gates. docs/ITEM_SPEC.md gives the reason for each rule and
 * the bank it came from. Every function returns a list of problems. Empty
 * means pass. tests/quality.test.ts runs them over the bank and proves each
 * one fails on known bad input (tests/tripwires.test.ts).
 */

// ---------- helpers ----------

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

export function tabText(tabs: Tab[] | undefined): string {
  return (tabs ?? []).map((t) => [t.title, t.text ?? "", ...(t.table ? [t.table.head.join(" | "), ...t.table.rows.map((r) => r.join(" | "))] : [])].join("\n")).join("\n");
}

/** Every choice-like unit of an item, with whether it is keyed. */
export function choicesOf(item: Item): { pool: string; choice: Choice; keyed: boolean; index: number }[] {
  const out: { pool: string; choice: Choice; keyed: boolean; index: number }[] = [];
  const add = (pool: string, list: Choice[], keyed: (i: number) => boolean) => list.forEach((c, i) => out.push({ pool, choice: c, keyed: keyed(i), index: i }));
  switch (item.kind) {
    case "mc":
      add("options", item.options, (i) => i === item.correct);
      break;
    case "msn":
    case "sata":
      add("options", item.options, (i) => item.correct.includes(i));
      break;
    case "dnd":
      add("tokens", item.tokens, (i) => item.correct.includes(i));
      break;
    case "cloze":
      item.blanks.forEach((b, k) => add(`blank${k}`, b.options, (i) => i === b.correct));
      break;
    case "highlight":
      add("spans", item.spans, (i) => item.correct.includes(i));
      break;
    case "bowtie":
      add("conditions", item.conditions, (i) => i === item.correct.condition);
      add("actions", item.actions, (i) => item.correct.actions.includes(i));
      add("parameters", item.parameters, (i) => item.correct.parameters.includes(i));
      break;
    case "matrix":
      break;
  }
  return out;
}

/** Every human-readable string in an item. */
export function stringsOf(item: Item): { field: string; text: string }[] {
  const out: { field: string; text: string }[] = [
    { field: "topic", text: item.topic },
    { field: "stem", text: item.stem },
    { field: "rationale", text: item.rationale },
    { field: "canada", text: item.canada },
    ...(item.refs ?? []).map((r, i) => ({ field: `refs[${i}]`, text: r })),
    ...item.sources.flatMap((s, i) => [
      { field: `sources[${i}].body`, text: s.body },
      { field: `sources[${i}].work`, text: s.work },
    ]),
    ...(item.tabs ?? []).map((t, i) => ({ field: `tabs[${i}]`, text: tabText([t]) })),
  ];
  for (const c of choicesOf(item)) {
    out.push({ field: `${c.pool}[${c.index}].text`, text: c.choice.text });
    out.push({ field: `${c.pool}[${c.index}].why`, text: c.choice.why });
  }
  if (item.kind === "matrix") {
    item.columns.forEach((c, i) => out.push({ field: `columns[${i}]`, text: c }));
    item.rows.forEach((r, i) => {
      out.push({ field: `rows[${i}].text`, text: r.text });
      out.push({ field: `rows[${i}].why`, text: r.why });
    });
  }
  if (item.kind === "dnd") {
    item.targets.forEach((t, i) => out.push({ field: `targets[${i}]`, text: t }));
    if (item.template) out.push({ field: "template", text: item.template });
  }
  if (item.kind === "cloze") out.push({ field: "template", text: item.template });
  if (item.kind === "highlight") out.push({ field: "passage", text: item.passage });
  return out;
}

// ---------- structure ----------

const placeholders = (t: string) => [...t.matchAll(/\{(\d)\}/g)].map((m) => Number(m[1]));
const distinct = (xs: number[]) => new Set(xs).size === xs.length;
const inRange = (xs: number[], n: number) => xs.every((x) => Number.isInteger(x) && x >= 0 && x < n);
export const markedSpans = (p: string) => [...p.matchAll(/\[\[(.+?)\]\]/g)].map((m) => m[1]);

export function structureProblems(item: Item): string[] {
  const p: string[] = [];
  const need = (ok: boolean, msg: string) => ok || p.push(msg);
  need(NEED_IDS.includes(item.need), `unknown need ${item.need}`);
  need(CJMM_IDS.includes(item.cjmm), `unknown cjmm ${item.cjmm}`);
  need(PROCESSES.some((x) => x.id === item.process), `unknown process ${item.process}`);
  need([1, 2, 3, 4, 5].includes(item.difficulty), "difficulty 1 to 5");
  need(typeof item.canada === "string", "canada note must be a string");
  need(item.reviewed === false || item.reviewed === true, "reviewed flag");
  need(item.version >= 1, "version");
  need(!item.id.startsWith("tripwire"), "tripwire ids never enter the bank");
  need(words(item.stem) >= 8, "stem too short");
  need(item.rationale.length >= 150, "rationale under 150 characters");
  need(item.sources.length >= 1 && item.sources.length <= 4, "1 to 4 sources");
  for (const c of choicesOf(item)) {
    need(c.choice.text.trim().length > 0, `${c.pool}[${c.index}] empty text`);
    need(c.choice.why.trim().length >= 20, `${c.pool}[${c.index}] needs a why of 20+ characters`);
  }
  switch (item.kind) {
    case "mc":
      need(item.options.length === 4, "mc has 4 options");
      need(inRange([item.correct], item.options.length), "mc key in range");
      break;
    case "msn":
      need(item.options.length >= 5 && item.options.length <= 10, "msn has 5 to 10 options");
      need(item.select >= 2 && item.select <= 4, "msn selects 2 to 4");
      need(item.correct.length === item.select && distinct(item.correct) && inRange(item.correct, item.options.length), "msn key count equals N");
      need(/\bselect (two|three|four|2|3|4)\b/i.test(item.stem), "msn stem says how many to select");
      break;
    case "sata":
      need(item.options.length >= 5 && item.options.length <= 8, "sata has 5 to 8 options");
      need(item.correct.length >= 2 && item.correct.length < item.options.length, "sata keys 2 to n-1");
      need(distinct(item.correct) && inRange(item.correct, item.options.length), "sata keys valid");
      need(/select all that apply/i.test(item.stem), "sata stem says select all that apply");
      break;
    case "dnd": {
      need(item.targets.length >= 2 && item.targets.length <= 6, "dnd has 2 to 6 targets");
      need(item.tokens.length > item.targets.length && item.tokens.length <= 10, "dnd has more tokens than targets, up to 10");
      need(item.correct.length === item.targets.length && distinct(item.correct) && inRange(item.correct, item.tokens.length), "dnd key per target");
      if (item.template) need(JSON.stringify(placeholders(item.template)) === JSON.stringify(item.targets.map((_, i) => i)), "dnd template placeholders {0}.. in order");
      if (item.scoring === "dyad") need(item.targets.length === 2, "dyad has 2 targets");
      if (item.scoring === "triad") need(item.targets.length === 3, "triad has 3 targets");
      break;
    }
    case "cloze":
      need(item.blanks.length >= 1 && item.blanks.length <= 5, "cloze has 1 to 5 blanks");
      need(JSON.stringify(placeholders(item.template)) === JSON.stringify(item.blanks.map((_, i) => i)), "cloze template placeholders {0}.. in order");
      for (const [k, b] of item.blanks.entries()) need(b.options.length >= 3 && b.options.length <= 6 && inRange([b.correct], b.options.length), `blank ${k} has 3 to 6 options and a key`);
      if (item.scoring === "dyad") need(item.blanks.length === 2, "dyad has 2 blanks");
      if (item.scoring === "triad") need(item.blanks.length === 3, "triad has 3 blanks");
      break;
    case "highlight": {
      const marked = markedSpans(item.passage);
      need(marked.length === item.spans.length, `highlight marks ${marked.length} phrases but lists ${item.spans.length} spans`);
      need(marked.every((m, i) => item.spans[i]?.text === m), "highlight span text matches the marked phrase");
      need(item.spans.length >= 5 && item.spans.length <= 14, "highlight has 5 to 14 spans");
      need(item.correct.length >= 2 && item.correct.length < item.spans.length && distinct(item.correct) && inRange(item.correct, item.spans.length), "highlight keys 2 to n-1");
      break;
    }
    case "matrix":
      need(item.columns.length >= 2 && item.columns.length <= 5, "matrix has 2 to 5 columns");
      need(item.rows.length >= 3 && item.rows.length <= 8, "matrix has 3 to 8 rows");
      for (const [i, r] of item.rows.entries()) {
        need(inRange(r.correct, item.columns.length) && distinct(r.correct), `row ${i} key valid`);
        if (item.mode === "single") need(r.correct.length === 1, `row ${i} has one key`);
        need(r.why.trim().length >= 20, `row ${i} needs a why`);
      }
      if (item.mode === "multi") need(item.columns.every((_, c) => item.rows.some((r) => r.correct.includes(c))), "every column has a key");
      break;
    case "bowtie": {
      const c = item.correct;
      need(item.conditions.length === 4 && item.actions.length === 5 && item.parameters.length === 5, "bowtie has 4 conditions, 5 actions, 5 parameters");
      need(inRange([c.condition], 4), "bowtie condition key");
      need(distinct(c.actions) && inRange(c.actions, 5) && c.actions.length === 2, "bowtie 2 action keys");
      need(distinct(c.parameters) && inRange(c.parameters, 5) && c.parameters.length === 2, "bowtie 2 parameter keys");
      break;
    }
  }
  if (item.trend) {
    const t = (item.tabs ?? []).find((x) => x.table && x.table.head.length >= 4);
    need(Boolean(t), "trend item needs a table with 3 or more time points");
    need(["mc", "msn", "sata", "matrix", "cloze", "highlight"].includes(item.kind), "trend item uses mc, msn, sata, matrix, cloze or highlight");
  }
  for (const t of item.tabs ?? []) if (t.table) need(t.table.rows.every((r) => r.length === t.table!.head.length), `tab ${t.title} rows match the header`);
  return p;
}

// ---------- citations ----------

const GENERIC = /\b(standard|general|various|common|usual|typical)\b.*\b(references?|texts?|sources?|guidelines?)\b|^(nursing )?(textbooks?|references?|guidelines?|literature|evidence)\.?$|reference text|nursing references|best practice$/i;

export function citationProblems(item: Item): string[] {
  return item.sources.flatMap((s, i) => {
    const p: string[] = [];
    if (!s.body || s.body.trim().length < 3 || GENERIC.test(s.body.trim())) p.push(`sources[${i}] body is not a named author or body: "${s.body}"`);
    if (!s.work || s.work.trim().length < 8 || GENERIC.test(s.work.trim())) p.push(`sources[${i}] work is not a named work: "${s.work}"`);
    if (!Number.isInteger(s.year) || s.year < 1990 || s.year > 2026) p.push(`sources[${i}] year ${s.year}`);
    return p;
  });
}

// ---------- cueing ----------

/** Absolute words that let a test-taker reject an option without knowing the content. */
export const ABSOLUTE = /\b(always|never|completely|entirely|absolutely|invariably|guaranteed|at all times|under no circumstances|every time)\b/i;
const CROSS_REF = /\b(all|none|both) of the above\b|\boptions? [A-H]\b|\bboth [A-H] and [A-H]\b|\bchoices? [A-H]\b/i;
const SHOUTED = /\b(EXCEPT|NOT|LEAST)\b/;

/** Length parity limits. One number each, used by the spec and the tests. */
export const PARITY = {
  /** Keyed single answer at most this many times the mean distractor length. From the NDEB gate. */
  singleKey: 1.6,
  /** Mean keyed length at most this many times the mean distractor length, multi-key pools. */
  multiKey: 1.35,
  /** Batch: key is the strict longest in at most this share of mc items. Chance is 25%. */
  batchLongest: 0.35,
  /** Batch: mean keyed length exceeds mean distractor length in at most this share of multi-key pools. Chance is about 50%. */
  batchMultiLonger: 0.65,
  /** Batch: no mc key position above this share. */
  batchPosition: 0.35,
};

/** Pools where one keyed choice sits among distractors. */
function singlePools(item: Item): { name: string; key: string; others: string[] }[] {
  const out: { name: string; key: string; others: string[] }[] = [];
  const pool = (name: string, list: Choice[], k: number) => out.push({ name, key: list[k].text, others: list.filter((_, i) => i !== k).map((c) => c.text) });
  if (item.kind === "mc") pool("options", item.options, item.correct);
  if (item.kind === "cloze") item.blanks.forEach((b, i) => pool(`blank${i}`, b.options, b.correct));
  if (item.kind === "bowtie") pool("conditions", item.conditions, item.correct.condition);
  return out;
}

/** Pools with several keyed choices. */
function multiPools(item: Item): { name: string; keys: string[]; others: string[] }[] {
  const split = (name: string, list: Choice[], keys: number[]) => ({ name, keys: list.filter((_, i) => keys.includes(i)).map((c) => c.text), others: list.filter((_, i) => !keys.includes(i)).map((c) => c.text) });
  if (item.kind === "msn" || item.kind === "sata") return [split("options", item.options, item.correct)];
  if (item.kind === "highlight") return [split("spans", item.spans, item.correct)];
  if (item.kind === "dnd") return [split("tokens", item.tokens, item.correct)];
  if (item.kind === "bowtie") return [split("actions", item.actions, item.correct.actions), split("parameters", item.parameters, item.correct.parameters)];
  return [];
}

export function cueingProblems(item: Item): string[] {
  const p: string[] = [];
  for (const c of choicesOf(item)) {
    if (c.pool !== "spans" && ABSOLUTE.test(c.choice.text)) p.push(`${c.pool}[${c.index}] absolute word: "${c.choice.text}"`);
    if (CROSS_REF.test(c.choice.text)) p.push(`${c.pool}[${c.index}] refers to other options`);
  }
  if (item.kind === "matrix") for (const r of item.rows) if (ABSOLUTE.test(r.text)) p.push(`matrix row absolute word: "${r.text}"`);
  if (SHOUTED.test(item.stem)) p.push("stem uses a shouted negative (EXCEPT, NOT, LEAST)");
  for (const s of singlePools(item)) {
    const m = mean(s.others.map((o) => o.length));
    if (s.key.length > PARITY.singleKey * m) p.push(`${s.name}: key is ${(s.key.length / m).toFixed(2)} times the mean distractor length`);
  }
  for (const s of multiPools(item)) {
    if (!s.others.length || item.kind === "highlight") continue;
    const r = mean(s.keys.map((o) => o.length)) / mean(s.others.map((o) => o.length));
    if (r > PARITY.multiKey) p.push(`${s.name}: keyed choices are ${r.toFixed(2)} times the mean distractor length`);
  }
  return p;
}

/** Batch level cueing: the length-bias gate and key position balance. */
export function batchCueingProblems(items: Item[]): string[] {
  const p: string[] = [];
  const mc = items.filter((i): i is Extract<Item, { kind: "mc" }> => i.kind === "mc");
  if (mc.length >= 8) {
    const longest = mc.filter((q) => q.options.every((o, i) => i === q.correct || o.text.length < q.options[q.correct].text.length)).length;
    if (longest > PARITY.batchLongest * mc.length) p.push(`length bias: the key is the longest option in ${longest} of ${mc.length} mc items`);
    const pos = [0, 1, 2, 3].map((k) => mc.filter((q) => q.correct === k).length);
    if (Math.max(...pos) > PARITY.batchPosition * mc.length) p.push(`key position skew: ${pos.join("/")} across positions 1 to 4`);
    if (pos.some((n) => n === 0)) p.push(`key position unused: ${pos.join("/")}`);
  }
  const multi = items.flatMap(multiPools).filter((s) => s.others.length);
  if (multi.length >= 6) {
    const longer = multi.filter((s) => mean(s.keys.map((o) => o.length)) > mean(s.others.map((o) => o.length))).length;
    if (longer > PARITY.batchMultiLonger * multi.length) p.push(`length bias: keyed choices run longer in ${longer} of ${multi.length} multi-key pools`);
  }
  const sata = items.filter((i): i is Extract<Item, { kind: "sata" }> => i.kind === "sata");
  if (sata.length >= 5) {
    const firstHalf = sata.flatMap((q) => q.correct.map((c) => c < q.options.length / 2)).filter(Boolean).length;
    const all = sata.reduce((n, q) => n + q.correct.length, 0);
    if (firstHalf > 0.7 * all) p.push(`sata keys cluster in the first half: ${firstHalf} of ${all}`);
  }
  return p;
}

// ---------- rationale consistency ----------

const SAYS_WRONG = /^(this is )?(incorrect|wrong|not correct|not appropriate|inappropriate)\b|\bis (incorrect|wrong|not correct|not the (best|right) (answer|choice))\b/i;
const SAYS_RIGHT = /^(this is )?correct\b|\bis (the )?(correct|right|best) (answer|choice|option|response)\b/i;

/** A why must agree with the key. A rationale must never call its own key wrong. */
export function contradictionProblems(item: Item): string[] {
  const p: string[] = [];
  for (const c of choicesOf(item)) {
    if (c.keyed && SAYS_WRONG.test(c.choice.why)) p.push(`${c.pool}[${c.index}] is keyed but its why calls it wrong`);
    if (!c.keyed && SAYS_RIGHT.test(c.choice.why)) p.push(`${c.pool}[${c.index}] is a distractor but its why calls it correct`);
    if (c.keyed && c.choice.text.length >= 6) {
      const t = item.rationale.toLowerCase();
      const at = t.indexOf(c.choice.text.toLowerCase());
      if (at >= 0 && /^\s*(is|are|would be)\s+(incorrect|wrong|inappropriate|not indicated|contraindicated)/.test(t.slice(at + c.choice.text.length, at + c.choice.text.length + 40)))
        p.push(`rationale calls the keyed "${c.choice.text}" wrong`);
    }
  }
  return p;
}

/** Numbers that carry a claim: decimals, 11 or more, or followed by a unit. */
const NUM = /(?<![\w.])(\d{1,3}(?:[ ,]\d{3})+(?![\d.])|\d+(?:\.\d+)?)(\s*(?:%|°|mg|mcg|g\b|kg|mL|L\b|mmol|micromol|mEq|mm ?Hg|units?|hours?|h\b|minutes?|min\b|days?|weeks?|months?|years?|breaths|beats|\/minute|cm|gtt|drops|seconds?|lb|oz|x 10))?/g;

export function claimNumbers(text: string): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(NUM)) {
    const raw = m[1].replace(/[ ,](?=\d{3}\b)/g, "");
    const n = Number(raw);
    if (!m[2] && Number.isInteger(n) && n <= 10) continue;
    out.push(raw);
  }
  return out;
}

/** Numbers in text. "25 000" and "25,000" read as 25000. Adjacent table cells never merge. */
export const NUMBER = /(?<![\d.])(?:\d{1,3}(?:[ ,]\d{3})+(?![\d.])|\d+(?:\.\d+)?)/g;
const numbersIn = (text: string) => new Set([...text.matchAll(NUMBER)].map((m) => m[0].replace(/[ ,](?=\d{3}\b)/g, "")));

/**
 * Every number the rationale or a why relies on must appear in the item: the
 * stem, the exhibit, the options, a declared reference value or the
 * calculation. This catches rationales that assert a value the stem never gave.
 * context is extra text the item may rely on, such as the case study so far.
 */
export function traceProblems(item: Item, context = ""): string[] {
  const facts = [item.stem, tabText(item.tabs), context, ...(item.refs ?? []), ...stringsOf(item).filter((s) => /\.text$|^columns|^targets|^template|^passage|^rows\[\d+\]\.text$/.test(s.field)).map((s) => s.text)];
  if (item.calc) facts.push(item.calc.expr, String(item.calc.answer), item.calc.answer.toFixed(item.calc.round), ...item.calc.steps);
  const known = numbersIn(facts.join("\n"));
  const p: string[] = [];
  const check = (field: string, text: string) => {
    for (const n of claimNumbers(text)) if (!known.has(n)) p.push(`${field} states ${n}, which is not in the stem, exhibit, options, refs or calc`);
  };
  check("rationale", item.rationale);
  for (const s of stringsOf(item)) if (s.field.endsWith(".why")) check(s.field, s.text);
  return p;
}

// ---------- calculation ----------

/** Safe arithmetic: numbers, + - * / and parentheses only. */
export function evaluate(expr: string): number {
  if (!/^[\d\s.+\-*/()]+$/.test(expr)) throw new Error(`calc expr has illegal characters: ${expr}`);
  let i = 0;
  const s = expr.replace(/\s+/g, "");
  const num = (): number => {
    if (s[i] === "(") {
      i++;
      const v = add();
      if (s[i++] !== ")") throw new Error("unbalanced");
      return v;
    }
    if (s[i] === "-") {
      i++;
      return -num();
    }
    const m = /^\d+(\.\d+)?/.exec(s.slice(i));
    if (!m) throw new Error(`bad number at ${i} in ${expr}`);
    i += m[0].length;
    return Number(m[0]);
  };
  const mul = (): number => {
    let v = num();
    while (s[i] === "*" || s[i] === "/") v = s[i++] === "*" ? v * num() : v / num();
    return v;
  };
  const add = (): number => {
    let v = mul();
    while (s[i] === "+" || s[i] === "-") v = s[i++] === "+" ? v + mul() : v - mul();
    return v;
  };
  const v = add();
  if (i !== s.length) throw new Error(`trailing input in ${expr}`);
  return v;
}

const ASKS_CALC = /\bhow many\b|\bcalculate\b|\bwhat (rate|volume|dose)\b|\bmL\/hour\b|\bdrops? per minute\b|\bgtt\/min/i;
const SHOWS_MATH = /\d\s*(×|\*|÷)\s*\d|\d\s+x\s+\d+(?!\s*10\b)|\d\s*=\s*\d|\d\s*\/\s*\d+\s*=/;

export function calcProblems(item: Item): string[] {
  const p: string[] = [];
  const asks = ASKS_CALC.test(item.stem) || SHOWS_MATH.test(item.rationale);
  if (!item.calc) return asks ? ["the item computes a value but has no calc block"] : [];
  let v: number;
  try {
    v = evaluate(item.calc.expr);
  } catch (e) {
    return [String((e as Error).message)];
  }
  if (Math.abs(v - item.calc.answer) > 1e-6 * Math.max(1, Math.abs(v))) p.push(`calc: ${item.calc.expr} = ${v}, not ${item.calc.answer}`);
  for (const st of item.calc.steps) {
    const [lhs, rhs, extra] = st.split("=");
    if (extra !== undefined || rhs === undefined) {
      p.push(`calc step "${st}" must read "expression = value"`);
      continue;
    }
    try {
      const got = evaluate(lhs);
      const want = Number(rhs.trim().replace(/\s(?=\d{3}\b)/g, ""));
      const places = (rhs.trim().split(".")[1] ?? "").length;
      if (!(Math.abs(got - want) <= 0.5 * 10 ** -places + 1e-9)) p.push(`calc step "${st}" is wrong: ${lhs.trim()} = ${got}`);
    } catch (e) {
      p.push(`calc step "${st}": ${(e as Error).message}`);
    }
  }
  const src = numbersIn(item.stem + "\n" + tabText(item.tabs) + "\n" + item.calc.steps.map((x) => x.split("=")[1] ?? "").join(" "));
  for (const n of [item.calc.expr, ...item.calc.steps.map((x) => x.split("=")[0])].join(" ").match(/\d+(\.\d+)?/g) ?? []) if (!src.has(n) && !["60", "1000", "100", "24", "2.2"].includes(n)) p.push(`calc uses ${n}, which is not in the stem or exhibit`);
  const shown = v.toFixed(item.calc.round);
  if (item.kind === "mc") {
    const key = item.options[item.correct].text;
    if (!numbersIn(key).has(shown)) p.push(`calc gives ${shown} ${item.calc.unit} but the keyed option reads "${key}"`);
  } else if (!numbersIn(item.rationale).has(shown)) p.push(`calc gives ${shown} but the rationale does not state it`);
  return p;
}

// ---------- units ----------

/** Conventional to SI factors. A parenthetical SI value must match one within 3%. */
const SI: Record<string, number[]> = {
  "mg/dL>mmol/L": [0.0555, 0.2495, 0.02586, 0.01129, 0.357, 0.4114, 0.3229, 0.0555],
  "mg/dL>micromol/L": [88.4, 17.1, 59.48],
  "g/dL>g/L": [10],
  "mcg/dL>micromol/L": [0.1791, 0.5872],
};

export function unitProblems(item: Item): string[] {
  const p: string[] = [];
  const all = stringsOf(item).map((s) => s.text).join("\n");
  if (/µ/.test(all)) p.push("write mcg or micromol, not the micro sign");
  const pairs = [...all.matchAll(/(\d+(?:\.\d+)?)\s*(mg\/dL|g\/dL|mcg\/dL)(\s*\((\d+(?:\.\d+)?)\s*(mmol\/L|micromol\/L|g\/L)\))?/g)];
  const paired = new Set(pairs.filter((m) => m[3]).map((m) => `${m[1]} ${m[2]}`));
  for (const m of pairs) {
    if (!m[3]) {
      // A value already given with its SI pair elsewhere in the item may repeat bare.
      if (paired.has(`${m[1]} ${m[2]}`)) continue;
      p.push(`${m[1]} ${m[2]} needs its SI value in parentheses`);
      continue;
    }
    const ratio = Number(m[4]) / Number(m[1]);
    const factors = SI[`${m[2]}>${m[5]}`] ?? [];
    if (!factors.some((f) => Math.abs(ratio / f - 1) <= 0.03)) p.push(`${m[1]} ${m[2]} (${m[4]} ${m[5]}) does not convert`);
  }
  for (const m of all.matchAll(/(\d+(?:\.\d+)?)\s*°C\s*\((\d+(?:\.\d+)?)\s*°F\)/g)) {
    const f = Number(m[1]) * 1.8 + 32;
    if (Math.abs(f - Number(m[2])) > 0.25) p.push(`${m[1]}°C is ${f.toFixed(1)}°F, not ${m[2]}°F`);
  }
  if (/\d\s*°F(?!\))/.test(all.replace(/\(\d+(\.\d+)?\s*°F\)/g, ""))) p.push("give Celsius first, Fahrenheit in parentheses");
  return p;
}

// ---------- terminology and style ----------

export function termProblems(item: Item): string[] {
  const p: string[] = [];
  for (const s of stringsOf(item)) {
    if (s.field.startsWith("sources")) continue;
    if (/\bpatients?\b/i.test(s.text)) p.push(`${s.field}: say client, not patient`);
    if (/\b(doctor|physician)\b/i.test(s.text)) p.push(`${s.field}: say primary health care provider`);
    if (/\bNCSBN\b.*\b(sample|preview|tutorial)\b/i.test(s.text)) p.push(`${s.field}: no reference to NCSBN sample material`);
  }
  return p;
}

export function houseStyleProblems(item: Item): string[] {
  return stringsOf(item).flatMap((s) => styleProblems(s.text).map((x) => `${s.field}: ${x}`));
}

// ---------- near duplicates ----------

export function trigrams(text: string): Set<string> {
  const w = text.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 2 < w.length; i++) out.add(`${w[i]} ${w[i + 1]} ${w[i + 2]}`);
  return out;
}

export const DEDUP_LIMIT = 0.5;

/** Pairs of stems whose word trigram Jaccard is at or above the limit. Uses an index, so the whole bank runs fast. */
export function nearDuplicates(stems: { id: string; text: string }[], limit = DEDUP_LIMIT): { a: string; b: string; j: number }[] {
  const grams = stems.map((s) => trigrams(s.text));
  const index = new Map<string, number[]>();
  grams.forEach((g, i) => g.forEach((t) => (index.get(t) ?? index.set(t, []).get(t)!).push(i)));
  const out: { a: string; b: string; j: number }[] = [];
  grams.forEach((g, i) => {
    const shared = new Map<number, number>();
    for (const t of g) for (const k of index.get(t)!) if (k > i) shared.set(k, (shared.get(k) ?? 0) + 1);
    for (const [k, inter] of shared) {
      const j = inter / (g.size + grams[k].size - inter);
      if (j >= limit) out.push({ a: stems[i].id, b: stems[k].id, j });
    }
  });
  return out;
}

// ---------- case studies ----------

export function caseProblems(c: CaseStudy): string[] {
  const p: string[] = [];
  if (c.items.length !== 6) p.push(`${c.id} has ${c.items.length} items, not 6`);
  const steps = c.items.map((i) => i.cjmm);
  if (JSON.stringify(steps) !== JSON.stringify(CJMM_IDS)) p.push(`${c.id} steps ${steps.join(",")} do not walk the CJMM in order`);
  if (new Set(c.items.map((i) => i.kind)).size < 4) p.push(`${c.id} uses fewer than 4 item types`);
  if (c.items.some((i) => i.kind === "bowtie" || i.trend)) p.push(`${c.id}: bow-tie and trend items are stand-alone only`);
  c.items.forEach((it, k) => {
    if (it.id !== `${c.id}-${k + 1}`) p.push(`${c.id} item ${k + 1} id ${it.id}`);
  });
  if (words(c.intro) < 15) p.push(`${c.id} intro too short`);
  if (!c.tabs.length) p.push(`${c.id} has no chart tabs`);
  for (const s of [c.title, c.intro, tabText(c.tabs)]) for (const x of styleProblems(s)) p.push(`${c.id}: ${x}`);
  if (/\bpatients?\b/i.test(c.intro + tabText(c.tabs))) p.push(`${c.id}: say client, not patient`);
  return p;
}

/** The text a case item may rely on: the intro, the chart and every earlier item. */
export function caseContext(c: CaseStudy, upto: number): string {
  return [c.intro, tabText(c.tabs), ...c.items.slice(0, upto + 1).flatMap((i) => [i.stem, tabText(i.tabs)])].join("\n");
}

/** All gates for one item. */
export function itemProblems(item: Item, context = ""): string[] {
  return [
    ...structureProblems(item),
    ...citationProblems(item),
    ...cueingProblems(item),
    ...contradictionProblems(item),
    ...traceProblems(item, context),
    ...calcProblems(item),
    ...unitProblems(item),
    ...termProblems(item),
    ...houseStyleProblems(item),
  ];
}
