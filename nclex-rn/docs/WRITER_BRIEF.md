# Writer brief

For the writer of one batch in Preceptor: NCLEX-RN Prep. Only create or edit files in your batch folder `src/bank/<batch>/`, plus your report at `docs/reviews/<batch>-writer.md`. Do not run git. Do not edit any other file. Keep scratch files in your own subfolder of the scratchpad, never its root, because other agents share it.

## Read first

1. `docs/ITEM_SPEC.md`, all of it. It is the contract you are checked against.
2. `src/engine/types.ts` for the shapes.
3. `tests/fixture.ts`. Ten worked items, one per type, that pass every gate. Copy their shape and tone.
4. `docs/bank-plan.json` for your batch: its Client Needs counts and, for stand-alone batches, the item type mix.
5. Existing items in the bank for your Client Needs area, so you do not repeat their scenarios or teaching points. Other writers work in parallel. The near duplicate gate runs across the whole bank.

## What to write

### A stand-alone batch (s01 to s28)

- 50 items, ids `rn-<batch>-01` to `rn-<batch>-50`, in that order in `ITEMS`.
- Client Needs counts exactly as planned.
- Type mix exactly as planned: 26 `mc`, 10 `sata`, 3 `msn`, 3 `dnd`, 2 `cloze`, 2 `highlight`, 2 `bowtie`, and 2 trend items (`trend: true`, any allowed kind). Across the batch, use each of the 6 CJMM steps and at least 4 difficulty levels, with no level above 20 items.
- A batch with 20 or more PPT items includes dosage or rate calculations in at least 12 percent of its PPT items, each with a `calc` block.
- Cover the breadth of your Client Needs area as the test plan describes it. Paraphrase in your own words. Never copy test plan text into a topic or stem.

### A case batch (c01 to c20)

- 5 case studies, ids `rn-<batch>-1` to `rn-<batch>-5`, each with 6 items `rn-<batch>-K-1` to `-6` walking the CJMM steps in order.
- Tag each case item with its own Client Needs area. The batch totals must match the plan exactly.
- Across the batch use matrix, cloze, drag and drop, highlight and select all or select N, with at least one dyad and one triad. At least 4 item types per case.
- Vary setting (medical, surgical, maternity, pediatric, mental health, community, long-term care), age and acuity.

## Work in chunks

Write items 10 at a time into separate files, for example `part1.ts` to `part5.ts`, each exporting a named array. Make `index.ts` concatenate them into `ITEMS` (or `CASES`). Never write the whole batch in one response. A long response can be cut off. Run the tests after every chunk.

## How to write each item

1. Build the scenario first. Put every fact the rationale and the whys will need into the stem or exhibit.
2. Write the question and the key.
3. Write distractors a partly prepared new graduate might choose. Same grammar, length and specificity as the key. No strawmen. None may also be defensible.
4. Write a true why for every choice. Recompute every number, including the ones in the wrong choices.
5. Level the lengths. If the key is longer, move its justifying clause into the why. Never pad.
6. Vary the key position across the batch on purpose.
7. Write the rationale in short sentences, tied to stem facts.
8. Cite a real source: author or body, work, year. Verify it with WebSearch or WebFetch. Never invent one.
9. Leave `canada` as an empty string. A later pass writes it.

## Checks before you report

```
cd /home/user/the-preceptor/nclex-rn
npx tsc --noEmit -p . 2>&1 | grep bank/<batch>
BATCH=<batch> npx vitest run tests/bank.test.ts
```

Every test must pass. The gates check format, parity, key position, absolutes, contradictions, citations, units, arithmetic and invented numbers. They cannot check truth. An adversarial reviewer will recompute every number and read every why against the stem and a source.

## Report

`docs/reviews/<batch>-writer.md` in house style (no em or en dashes, no semicolons):

- Counts by Client Needs area, item type, CJMM step and difficulty.
- MC key positions.
- Sources used, with verification URLs.
- Anything you were unsure of, for the reviewer.
