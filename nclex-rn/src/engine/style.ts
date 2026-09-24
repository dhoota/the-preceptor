/**
 * House style, enforced by tests on every item string, the UI copy, the docs
 * and the store listing. No em or en dashes. No semicolons. Short
 * single-idea sentences. No filler. No smart quotes.
 */

export const MAX_SENTENCE_WORDS = 35;

const FILLER = [
  /\bbasically\b/i,
  /\bactually\b/i,
  /\breally\b/i,
  /\bvery\b/i,
  /\bin order to\b/i,
  /\bit is important to (note|remember)\b/i,
  /\bnote that\b/i,
  /\bneedless to say\b/i,
  /\bof course\b/i,
  /\bseamless(ly)?\b/i,
  /\bempower/i,
  /\bdelve\b/i,
  /\bgame.?changer\b/i,
  /\bunlock/i,
];

/** Banned product phrasing. The NCLEX name is used descriptively only. */
export const BANNED_PHRASES = [/NCLEX practice exam/i];

export function sentences(text: string): string[] {
  return text
    .replace(/\b(e\.g|i\.e|vs|approx|Dr|St|No|min|max|ed|Vol|et al)\./gi, "$1")
    .replace(/(\d)\.(\d)/g, "$1$2")
    .split(/(?<=[.?!])\s+|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function styleProblems(text: string, opts: { sentenceWords?: number } = {}): string[] {
  const out: string[] = [];
  if (/[–—]/.test(text)) out.push("em or en dash");
  if (text.includes(";")) out.push("semicolon");
  if (/[‘’“”]/.test(text)) out.push("smart quote");
  if (/\s--\s/.test(text)) out.push("double hyphen used as a dash");
  for (const re of FILLER) if (re.test(text)) out.push(`filler ${re.source}`);
  for (const re of BANNED_PHRASES) if (re.test(text)) out.push(`banned phrase ${re.source}`);
  const limit = opts.sentenceWords ?? MAX_SENTENCE_WORDS;
  for (const s of sentences(text)) {
    const w = s.split(/\s+/).length;
    if (w > limit) out.push(`sentence of ${w} words: "${s.slice(0, 60)}..."`);
  }
  return out;
}
