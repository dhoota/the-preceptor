export const meta = {
  name: 'nclex-batches',
  description: 'Write, adversarially review (with planted tripwires) and add Canada notes to NCLEX-RN item batches',
  phases: [
    { title: 'Write', detail: 'one writer per batch, gates must pass' },
    { title: 'Plant', detail: 'plant 2 calibration items in each batch folder' },
    { title: 'Review', detail: 'adversarial nursing content and numbers review, cited sources' },
    { title: 'Canada', detail: 'Canada difference notes' },
  ],
}

const APP = '/home/user/the-preceptor/nclex-rn'
const BATCHES = args.batches
const TW = ['tw-1', 'tw-2', 'tw-3', 'tw-4']

const WRITER = {
  type: 'object',
  properties: { batch: { type: 'string' }, items: { type: 'integer' }, testsPass: { type: 'boolean' }, notes: { type: 'string' } },
  required: ['batch', 'items', 'testsPass'],
}
const REVIEW = {
  type: 'object',
  properties: {
    batch: { type: 'string' },
    defectIds: { type: 'array', items: { type: 'string' }, description: 'every item id where you found a defect, including items in files index.ts does not import' },
    fixes: { type: 'integer' },
    keyChanges: { type: 'integer' },
    testsPass: { type: 'boolean' },
    summary: { type: 'string' },
  },
  required: ['batch', 'defectIds', 'fixes', 'keyChanges', 'testsPass'],
}
const CANADA = {
  type: 'object',
  properties: { batch: { type: 'string' }, notes: { type: 'integer' }, empty: { type: 'integer' }, testsPass: { type: 'boolean' } },
  required: ['batch', 'notes', 'empty', 'testsPass'],
}

const writerPrompt = (b) => `You are the writer for batch ${b} of the Preceptor: NCLEX-RN Prep item bank, in ${APP}.
Follow ${APP}/docs/WRITER_BRIEF.md exactly. It tells you what to read first (docs/ITEM_SPEC.md, src/engine/types.ts, tests/fixture.ts, docs/bank-plan.json entry "${b}", docs/topic-plan.json entry "${b}").
You are the only writer for ${b}. If you find files in src/bank/${b}/ other than an empty index.ts, they are leftovers: replace them.
Write only inside ${APP}/src/bank/${b}/ and your report ${APP}/docs/reviews/${b}-writer.md. Do not run git. Do not edit any other file, even if another test fails elsewhere, and never create files in tests/. Other writers work in parallel on other batches.
Hard rules: original content only, never copy or paraphrase NCSBN items, test plan text, sample pack, exam preview or tutorial. House style (also in your report): no em or en dashes, no semicolons, short single-idea sentences, no filler. reviewed: false on everything. Real citations only (author or body, work, year), verified with WebSearch or WebFetch (if WebSearch is exhausted, use WebFetch on PubMed, publisher or agency pages).
Work in chunks of about 10 items per file. Run: cd ${APP} && BATCH=${b} npx vitest run tests/bank.test.ts   until every test passes. Also check npx tsc --noEmit -p . 2>&1 | grep bank/${b} prints nothing.
Return batch, the number of items written, whether BATCH=${b} tests pass, and short notes on anything uncertain.`

const reworkPrompt = (b, what) => `You are reworking batch ${b} of the Preceptor: NCLEX-RN Prep item bank, in ${APP}. The batch is written and passes its gates, but part of it must be replaced: ${what}
Follow ${APP}/docs/WRITER_BRIEF.md and docs/ITEM_SPEC.md for everything you write. Read docs/topic-plan.json entry "${b}" and docs/bank-plan.json entry "${b}". Keep the batch Client Needs totals exactly as planned, keep ids in place (a replaced case keeps its case id and item ids), and keep every other item unchanged. Delete any extra.ts in the folder.
Write only inside ${APP}/src/bank/${b}/ and update ${APP}/docs/reviews/${b}-writer.md with a section "Rework" in house style (no em or en dashes, no semicolons). Do not run git. Never create files in tests/.
Original content only. Real citations only, verified with WebFetch on PubMed, publisher or agency pages (WebSearch may be exhausted).
Run: cd ${APP} && BATCH=${b} npx vitest run tests/bank.test.ts   until every test passes, and npx tsc --noEmit -p . 2>&1 | grep bank/${b} prints nothing.
Return batch, the number of items you replaced, whether tests pass, and notes.`

const plantPrompt = (b, i) => {
  const a = TW[i % 4], c = TW[(i + 1) % 4]
  const ids = b.startsWith('c') ? [`rn-${b}-9`, `rn-${b}-8`] : [`rn-${b}-91`, `rn-${b}-92`]
  return `Mechanical task. In ${APP}, read docs/tripwires.json. Take the "item" objects of the tripwires whose item.id is "${a}" and "${c}". Create (or overwrite) the file ${APP}/src/bank/${b}/extra.ts containing:

import type { Item } from "@/engine/types";

/** Items under consideration for this batch. Not yet in the bank. */
export const EXTRA: Item[] = [ ...the two item objects as TypeScript object literals... ];

Change their ids to "${ids[0]}" and "${ids[1]}" respectively, and set their need field to a Client Needs code that already appears in the batch (look at src/bank/${b}/ files). Change nothing else in them. Do not import extra.ts anywhere and do not edit index.ts or any other file. Do not run git. Check with: cd ${APP} && npx tsc --noEmit -p . 2>&1 | grep bank/${b}/extra  (must print nothing). Return the two ids you used.`
}

const reviewPrompt = (b, pass) => `You are the adversarial reviewer for batch ${b} of the Preceptor: NCLEX-RN Prep item bank, in ${APP}.${pass > 1 ? ' A previous review of this batch was not trusted, so review it again from scratch with more care.' : ''}
Follow ${APP}/docs/REVIEW_BRIEF.md exactly, both Lens A (nursing content, with every citation verified by WebSearch or WebFetch, or PubMed, publisher and agency pages when WebSearch is exhausted) and Lens B (internal consistency and numbers, recompute every number with a script).
Every .ts file in ${APP}/src/bank/${b}/ is in scope, including any file index.ts does not import. Review those items too and include their ids in defectIds when defective.
Only edit files in ${APP}/src/bank/${b}/ and write your report to ${APP}/docs/reviews/${b}-review.md (overwrite any earlier report for this batch)${pass > 1 ? ', with a section headed "Second review"' : ''}. The report must follow house style: no em or en dashes, no semicolons. Do not run git. Never create files in tests/. Never set reviewed: true.
After fixing, run: cd ${APP} && BATCH=${b} npx vitest run tests/bank.test.ts   and keep every test passing.
Return batch, defectIds (every item id with a defect you found or fixed), the number of fixes, the number of key changes, whether tests pass, and a two sentence summary.`

const canadaPrompt = (b) => `You are the Canada note writer for batch ${b} of the Preceptor: NCLEX-RN Prep item bank, in ${APP}.
Follow ${APP}/docs/CANADA_BRIEF.md exactly. Only edit the canada field (and add a source when the note needs one) in the items in ${APP}/src/bank/${b}/ files that index.ts imports. Ignore extra.ts if present. Write your report to ${APP}/docs/reviews/${b}-canada.md in house style (no em or en dashes, no semicolons). Do not run git. Never create files in tests/.
Verify every Canadian claim with WebSearch or WebFetch. Run: cd ${APP} && BATCH=${b} npx vitest run tests/bank.test.ts   and keep every test passing.
Return batch, the number of notes written, the number left empty, and whether tests pass.`

const results = await pipeline(
  BATCHES,
  (b) => (args.rework && args.rework[b]) ? agent(reworkPrompt(b, args.rework[b]), { label: `rework:${b}`, phase: 'Write', schema: WRITER }) : ((args.written || []).includes(b) ? { batch: b, items: 0, testsPass: true, notes: 'written in an earlier run' } : agent(writerPrompt(b), { label: `write:${b}`, phase: 'Write', schema: WRITER })),
  (w, b, i) => (w ? agent(plantPrompt(b, i), { label: `plant:${b}`, phase: 'Plant', effort: 'low' }).then((ids) => ({ w, ids })) : null),
  async (prev, b, i) => {
    if (!prev) return null
    const planted = b.startsWith('c') ? [`rn-${b}-9`, `rn-${b}-8`] : [`rn-${b}-91`, `rn-${b}-92`]
    let r = await agent(reviewPrompt(b, 1), { label: `review:${b}`, phase: 'Review', schema: REVIEW })
    let caught = r ? planted.filter((id) => r.defectIds.includes(id)).length : 0
    let passes = 1
    if (r && caught < 2) {
      log(`${b}: review caught ${caught} of 2 planted defects. Running a second review.`)
      const r2 = await agent(reviewPrompt(b, 2), { label: `review2:${b}`, phase: 'Review', schema: REVIEW })
      passes = 2
      if (r2) {
        const caught2 = planted.filter((id) => r2.defectIds.includes(id)).length
        r = { ...r2, fixes: r.fixes + r2.fixes, keyChanges: r.keyChanges + r2.keyChanges, firstCaught: caught }
        caught = caught2
      }
    }
    return { ...prev, review: r, caught, passes }
  },
  async (prev, b) => {
    if (!prev) return null
    const c = await agent(canadaPrompt(b), { label: `canada:${b}`, phase: 'Canada', schema: CANADA })
    return { batch: b, writer: prev.w, review: prev.review, calibration: `${prev.caught}/2`, reviewPasses: prev.passes, canada: c }
  },
)
return results
