# Q500 verification review, round 2: batch12

Fresh independent review of the round 2 writer revision of `src/cases/batch12/`. I did not write, edit or review these cases before. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-verify-batch12.md` and `docs/reviews/q500-writer-batch12-r2.md`. Changes seen with `git diff 964ece1` on the batch folder. There are no uncommitted changes.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| first-trimester-loss-mechanical-valve | PASS | 0 |
| work-trailer-heater-burns | PASS | 0 |
| hyperacute-purulent-red-eye | PASS | 0 |
| intoxicated-driver-hip-dislocation | PASS | 0 |

## Checks run

- `CASE_BATCH=batch12 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- `npx tsc --noEmit -p .`: no errors in `cases/batch12`.
- The diff touches only the three failed cases. `hyperacute-purulent-red-eye` is unchanged since the round 1 verify, so its PASS stands.
- No em dashes, en dashes or semicolons were added. `reviewed: false`, `version: 1`, `author: "Preceptor"` unchanged.
- No unrequested changes in this batch.

## first-trimester-loss-mechanical-valve: PASS

### Round 1 fixes

1. `c-resus` feedback now reads "a pulse rise of 24 and an 18 mmHg fall in systolic pressure on sitting". Recomputed from finding `orthostatics`: pulse 112 to 136 is 24, systolic 100 to 82 is 18. Correct.
2. Applied completely. The `q-reverse` model answer line, ft-m3 text, ft-m3 teaching and ft-m3 source (`nac-pcc`) are exactly as required. No "10 mg" or "7 days" vitamin K rule remains. I downloaded the NAC 2022 PDF (https://profedu.blood.ca/fr/media/5843/download) and confirmed the text: the INR half life of PCC "is approximately 6 hours", "PCCs and vitamin K should be given concurrently", and IV vitamin K "does not produce the inability to resume oral anticoagulation ('warfarin resistance') when used at appropriate doses". `acc-valve` is still cited by ft-h1, ft-p5, ft-m4 and ft-c6, so the source list is still all used.

### Re-read

Read in full. The new model answer line agrees with the `c-pcc` label and feedback and with ft-c2. No new clinical, path or grading error.

### Advisory (carried, not required)

- ft-p1, ft-p2, ft-c1 and ft-d1 cite SOGC 460 for content it does not cover (C2). Unchanged from round 1.

## work-trailer-heater-burns: PASS

### Round 1 fix

`c-elevate` is now `unsafe` with "Waiting 2 hours risks permanent muscle and nerve loss." added. This matches SCORING-RULINGS C1 and the signed precedents in batch04 `high-voltage-electrical-injury` and batch05 `trench-collapse-crush`. The feedback is 4 sentences, within the spec. `q-arm` keeps its strong choice `c-fasciotomy`. Two unsafe choices in one question is allowed by CASE_SPEC. The consequence `s-elevate` (forearm rock hard, fasciotomy) still fits an unsafe grade.

### Advisory (carried, not required)

- ib-h5 and ib-m5 teaching points are not in their cited sources (C2), and `c-bicarb` versus `c-burn-formula` grading. Unchanged from round 1.

## hyperacute-purulent-red-eye: PASS

Unchanged since the round 1 PASS. Round 1 advisories stand.

## intoxicated-driver-hip-dislocation: PASS

### Round 1 fix

`s-wait` now reads "more than 3 hours". Recomputed: crash 00:50, arrival about 01:30, plan question about 02:00 at the earliest, "Two hours later" about 04:00, over 3 hours from injury and still inside 6 hours (06:50). Correct.

### Advisory (carried, not required)

- Uniqueness flag against SAMP s45 "Front seat passenger with hip pain". Unchanged from round 1.
