# Q500 verify report, round 4: s60, Pulmonary edema

A fresh independent review by Preceptor of `src/samps/s60/pulmonary-edema.ts` after the writer applied the 2 required fixes from `docs/reviews/q500-verify3-s60.md`. The reviewer did not write, edit or review this batch before. Nothing was edited except this file. Input: `git diff d62d072 -- oral-exam-sim/src/samps/s60/pulmonary-edema.ts`. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Verdict: PASS

Both required fixes were applied exactly, and nothing else in the file changed. The diff is 5 lines (2 in pulmonary-edema-40 q4 and 3 in pulmonary-edema-41 q2). No other file under `src/samps/s60`, `src/cases` or `tests` changed since d62d072.

| Id | Verdict |
|---|---|
| pulmonary-edema-39 | PASS (q500-verify3-s60.md, unchanged) |
| pulmonary-edema-40 | PASS |
| pulmonary-edema-41 | PASS |
| pulmonary-edema-42 | PASS (q500-verify3-s60.md, unchanged) |
| pulmonary-edema-43 | PASS (q500-verify3-s60.md, unchanged) |

## Fix 1: pulmonary-edema-40 q4 blood pressure

- The update and the explanation both now read 156/106 mmHg. No other q4 text, option, key or source changed.
- Severe for the patient: he is a 6-year-old boy. The 95th percentile for his age is roughly 110/70 mmHg, so 156/106 mmHg is more than 30 mmHg above it on both readings. That is severe hypertension in a child and justifies the escalation the explanation describes. It is well above the q1 value of 146/96 mmHg, so "has risen" is true.
- Unique: a grep of `src/samps` and `src/cases` for 156/106 (and for 156/10x and 15x/106) finds only the two lines in this item. It no longer matches headache-43 (162/108 mmHg).

## Fix 2: pulmonary-edema-41 q2 menu option

- "Transthyretin gene testing" is gone from the options and the explanation. "Serum ACE level" replaces it. It names no q1 option, so the mock-mode cue to the q1 key "Transthyretin amyloidosis" is removed.
- Options stay in alphabetical order (Bone scintigraphy, Coronary angiography, Holter monitoring, Serum ACE level, Serum ferritin, Serum free light chain assay, Thyroid function tests). The longest option (28 characters) is 2.0 times the shortest (14), within the 2.6 limit.
- `correct: [0, 5]` points to "Bone scintigraphy" (index 0) and "Serum free light chain assay" (index 5). Select count stays 2.
- The new sentence is true: serum ACE is raised in some patients with sarcoidosis, another infiltrative cardiomyopathy, but it is nonspecific and has no role in confirming or excluding amyloidosis. Serum ACE appears nowhere else in the bank.
- No cardiac MRI or endomyocardial biopsy was added, so the two keys remain the only defensible pair.

## Tests

`SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 132 of 132, including the bank wide near duplicate stem check. The changed lines have no semicolons, em dashes, en dashes or smart quotes.

## Summary

The whole s60 batch (pulmonary-edema-39 to pulmonary-edema-43) has now passed fresh independent review. pulmonary-edema-40 and pulmonary-edema-41 pass in this round. pulmonary-edema-39, pulmonary-edema-42 and pulmonary-edema-43 passed in `docs/reviews/q500-verify3-s60.md` and have not changed since. The physician-level items listed in q500-verify3-s60.md still stand for clinician review.
