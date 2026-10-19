# Q500 round: summary (19 October 2026)

509 new exam questions, all original, all cited, all written by the Preceptor team. The app runs no AI.

## What was added

- 88 SAMPs (`src/samps/s54` to `s71`) with 353 questions: 330 single best answer and 23 short menu.
- 20 oral cases (`src/cases/batch11` to `batch15`) with 156 examiner questions.

## How it was checked

1. Each batch was written from `docs/Q500_BRIEF.md` against a per topic catalogue of every keyed decision already in the bank.
2. Each batch then had a fresh independent review by an agent that had not written or edited it, with no reviewer edits (REVIEW-RULES rule 1). Every fix went back to a writer and was reviewed again until it passed. Verdicts are `docs/reviews/q500-qa-*.md` and `q500-verify*.md`.
3. Items that repeated a decision already in the bank were rebuilt or removed. No D1 repeat was used.
4. A bank wide TF-IDF near duplicate check found three new stems that share a setting with an existing stem (asthma-copd-49 and -46, first-trimester-bleeding-42 and -17, first-trimester-bleeding-40 and -43). Each pair has a different patient and different keyed decisions and passed independent review.
5. The full test suite and the launch gate pass.

## Sign-off

Recorded at the physician's instruction in `docs/signoff-2026-10-q500.json`, with the answer key snapshot in `docs/signoff-keys-2026-10-q500.json`. Items for the physician's attention are listed in each verdict file under "For the physician".
