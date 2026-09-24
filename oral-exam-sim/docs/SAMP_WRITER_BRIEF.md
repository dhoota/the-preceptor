# SAMP writer brief (expansion batches s19 to s53)

For the writer of one expansion batch in Preceptor: CCFP-EM. One batch is one priority topic. Only create or edit files in your batch folder `src/samps/sNN/`. Write a short report to `docs/reviews/writer-sNN.md`. Do not run git. Keep temporary files in your own scratch subfolder, never the scratchpad root, because other agents share it.

## Read first

1. `docs/SAMP_SPEC.md`, all of it. Sections 2 to 11 are the rules you will be checked against.
2. `docs/FORMAT_AUDIT.md` sections 2 and 7, for the CFPC format.
3. `docs/samp-expansion.json` for your topic, count and ids.
4. The existing SAMPs for your topic, in the s01 to s18 batch that holds it. Do not repeat their scenarios, their teaching points or their stems. Cover what they did not.
5. `src/blueprint/priorityTopics.ts` for your topic's key features.

## What to write

- Your planned count of SAMPs, ids `<topic-id>-16` onward, in one file `src/samps/sNN/<topic-id>.ts` exporting a named `const` array. Set `src/samps/sNN/index.ts` to export it as `SAMPS_SNN` (keep that name).
- Only `single` and `menu` questions. 3 to 5 per SAMP, usually 4 or 5. Mix: mostly `single`, with a `menu` question in about one SAMP in three.
- Spread the topic's key features. Test every one of them, and give each at least 3 questions across your batch. Where a key feature needs history, examination or a decision, test that step.
- Vary age, sex, setting (tertiary, community, rural), acuity and presentation. Include children and older adults where the topic allows.

## How to write each SAMP

1. Build the case first: stem, vitals and the updates. Put every fact the explanations will need into the case.
2. Write the question and the keyed answer.
3. Write 4 distractors that a partly prepared candidate might choose. Make them the same length and grammar as the key. No strawmen. None may also be defensible.
4. Sort the options alphabetically ("None" or "No ..." last) and set `correct`. Across the batch, aim for the key in each position about equally. Adjust distractor wording to move the key.
5. Write the explanation: why the key is right, tied to stem facts, then why each tempting distractor is wrong. Every reason must be true. Recompute every number.
6. Cite a real source with an author or body, a work and a year. Verify it with WebSearch or WebFetch. Never invent one.

## Checks before you report

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts
```

Every test must pass. The quality gates check format, option order and length, key position and length balance, absolute words, vitals, explanations and citations. They cannot check truth. Two independent reviewers will. Assume they will recompute every number and read every explanation sentence against the stem.

## Report

`docs/reviews/writer-sNN.md` in house style (no em or en dashes, no semicolons):
- Count, question mix and key positions.
- Key feature coverage (questions per key feature).
- Sources used, with verification URLs.
- Anything you were unsure of, for the reviewers.
