# Q500 expansion brief (October 2026)

About 500 new exam-style questions for Preceptor: CCFP-EM, aimed where the bank is thinnest against the CFPC Emergency Medicine priority topics and key features:

- 17 SAMP batches, `s54` to `s70`, 5 SAMPs each (about 340 questions), one batch per topic, on the topics with the fewest questions per key feature.
- 20 oral cases in `src/cases/batch11` to `batch15`, 4 per batch (about 160 questions), on the topics with no or one or two oral cases.

Content is static data written at authoring time. The app runs no AI. Credit is "Preceptor" only: no personal name anywhere in the content (author fields, text, reports).

## Rules that apply to every item

1. Follow the existing standard exactly:
   - SAMPs: `docs/SAMP_WRITER_BRIEF.md` and all of `docs/SAMP_SPEC.md`, plus `docs/FORMAT_AUDIT.md` sections 2 and 7.
   - Oral cases: `docs/CASE_SPEC.md` and the format rules in `docs/ORAL_REALIGN_BRIEF.md` (CFPC card stem, labelled `card`, history in `findings`, four score sheet rows, 12 minute timing). `src/engine/types.ts` is the contract.
2. Set `reviewed: false`, `version: 1`, `author: "Preceptor"`. Never write a personal name.
3. Unique and comprehensive (owner requirement). Before writing, read every existing SAMP for your topic and for closely related topics (all batches, grep `topic: "<id>"`), and the existing oral case titles, stems and topics (`grep -rh 'title:\|stem:\|priorityTopic:' src/cases`).
   - Do not reuse a scenario, a diagnosis-plus-setting combination, a stem, a teaching point, a key decision or a twist that the bank already has, and do not repeat an angle within your own batch.
   - Cover the full breadth of each key feature: history, examination, investigations, management and disposition, across ages, sexes, settings (tertiary, community, rural) and acuity.
   - After QA, a bank-wide near-duplicate check (TF-IDF similarity of every new stem, question and case against the whole bank) flags close matches. Flagged items are rewritten or dropped.
4. Citations: every explanation (SAMP) and every rubric item (case) cites a real source with an author or body, a work and a year. Prefer current Canadian guidance, then major international guidance. Verify each with WebSearch or WebFetch. Never invent a title, year or URL. Add a `url` only if you opened it and it is the right document, `https://` only.
5. House style: Canadian spelling, short plain sentences, no em dashes, no en dashes, no semicolons, no mnemonics. Invent every patient detail. Never copy a textbook, a question bank, CFPC sample material or a past exam.
6. Recompute every number. Every dose, threshold and score must match current guidance.

## Work rules

- Only create or edit files in your own folders (listed in your task) and your report. Do not edit shared files (`src/samps/batches.ts`, `src/cases/source.ts`, `docs/*.json`).
- Do not run git. Do not run `npm test` or `npm run bank:encode` (they rewrite shared generated files). Use only the per-batch commands below.
- Keep temporary files in `/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/q500/<your-batch>/`.
- Write in chunks (one SAMP or one case per edit). A very long single response can be cut off.

## SAMP batches

Exactly 5 SAMPs per batch, ids `<topic>-<firstId>` to `<topic>-<firstId+4>` (see `docs/samp-expansion.json`, tier Q500). The file is `src/samps/sNN/<topic>.ts` (already created, exporting an empty array): fill that array. Only `single` and `menu` questions, 4 or 5 per SAMP, at least one `menu` question in the batch. The batch must test every key feature of its topic at least once (the tests require it). Put the extra questions on the weakest key features named in your task.

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts
```

## Oral case batches

Exactly 4 cases per batch, one per assigned priority topic (`priorityTopic`), each in its own file `src/cases/batchNN/<case-id>.ts`, registered in `src/cases/batchNN/index.ts` (`BATCH_NN`). Ids are new, kebab case, descriptive and globally unique. Titles are neutral and give nothing away. 6 to 10 questions on every path, at least 3 branching questions, at least one escalation, 12 to 30 rubric items with `criterion` rows as in the realign brief, 2 to 6 sources.

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep cases/batchNN
CASE_BATCH=batchNN npx vitest run tests/cases.test.ts tests/citations.test.ts
```

## Report

`docs/reviews/q500-writer-<batch>.md` (writers) or `docs/reviews/q500-qa-<batch>.md` (reviewers), house style: ids written, key feature coverage, sources with the URLs used to verify them, and anything uncertain.

## Independent QA (reviewers)

A different agent reviews each batch against `docs/SAMP_REVIEW_BRIEF.md` (SAMPs) or the case spec (cases) and `docs/reviews/REVIEW-RULES.md`. Check every item for clinical accuracy against current guidance, recompute every number, read every explanation and feedback sentence against the stem, check each citation exists and supports the point, and check for near-duplicates of existing content. Writers and reviewers also read `docs/reviews/SCORING-RULINGS.md`, and a reviewer fails any silent reversal of a prior ruling.

**Reviewers do not edit** (REVIEW-RULES rule 1). A reviewer writes a verdict per item (pass, or fail with the exact fix needed) in `docs/reviews/q500-qa-<batch>.md`. Every fix goes back to a writer, and the writer's revision gets a fresh independent review by an agent that has not written or edited that batch. Repeat until every item passes, or drop it: for SAMPs, replace it so the batch keeps 5 SAMPs and full key feature coverage, or report the shortfall.

Correction, 19 October 2026: the first QA round on batch11 to batch15, s54 to s56, s60 to s62, s69 and s70 was wrongly briefed to fix in place. Those in-place fixes are treated as writer revisions. Each of those batches gets a fresh independent review (`docs/reviews/q500-verify-<batch>.md`) of the whole final batch before it can land.
