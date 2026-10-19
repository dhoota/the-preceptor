# Q500 verification review, round 2: batch13

Fresh independent review of the round 2 writer revision of `src/cases/batch13/`. I did not write, edit or review these cases before. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-verify-batch13.md` and `docs/reviews/q500-writer-batch13-r2.md`. Changes seen with `git diff 964ece1` on the batch folder. There are no uncommitted changes.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| late-dinner-chest-pain | PASS | 0 |
| postpartum-headache-sixth-day | FAIL | 1 |
| boarder-hard-to-wake | PASS | 0 |
| ladder-fall-ankle-sedation | PASS | 0 |

## Checks run

- `CASE_BATCH=batch13 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- `npx tsc --noEmit -p .`: no errors in `cases/batch13`.
- No em dashes, en dashes or semicolons were added. `reviewed: false`, `version: 1`, `author: "Preceptor"` unchanged. Ids and file names unchanged.
- No unrequested changes in this batch.
- Titles: I took every case and SAMP title (`grep -rh 'title:' src/cases src/samps`, 1618 lines) and ran an exact count and a normalized fuzzy match for each new title. Each new title occurs once. Closest matches: "Driven in late by his wife" 0.52 ("Sleepy again, says his sister"), "Sparkling lights in both eyes" 0.55 ("Flashing lights and a shadow"), "The 05:30 vital signs round" 0.46, "Cleaning the eavestrough" 0.59 ("Clearing out the shed"). None is a near duplicate. None uses the "Chest pain after", "N days after ... birth", "Hard to wake" or "Fall from a ladder" patterns.

## late-dinner-chest-pain: PASS

New title "Driven in late by his wife". Unique. Neutral: it matches the stem (driven in by his wife at 23:40) and says nothing about the chest, the vomiting or the esophagus. Round 1 advisories (`c-intubate` grade, cp-pr2 and cp-pr3 sources) stand.

## postpartum-headache-sixth-day: FAIL

### Round 1 fixes

1. `s-partner` phase is now "Later that afternoon". Checked on every path into it: strong path after `s-refractory` (16:30), `c-xl` path after `s-xl` (17:30), `s-more-labetalol` path after 17:10. All are followed by `s-pump-dump` or `s-home` at 17:40 or by `q-dispo`. The clock no longer runs backwards. Correct.
2. Title changed to "Sparkling lights in both eyes". It is unique and does not name the diagnosis, but it gives away a key finding. See the required fix.
3. The confirmed value is 176/104 mmHg in finding `repeat-bp` and in the `c-treat` label. A systolic of 176 is in the severe range (160 or more), so the model answer, `c-treat` feedback, pe-p1 and the treat within 30 to 60 minutes teaching all still hold. No "168/110" remains. The echo of SAMP s15 "Headache one week after delivery" (168/112) is gone. Correct.

### Required fix

1. File `src/cases/batch13/postpartum-headache-sixth-day.ts`, field `title`.
   - Current: "Sparkling lights in both eyes".
   - Problem: the brief says titles "give nothing away". The stem gives only a 3 day headache after birth. Bilateral visual scintillations come from the `hpi` finding the candidate must elicit. They are a severe feature of pre-eclampsia (rubric item for the headache history, `c-treat` and `c-wait-labs` feedback) and the clue that argues against the migraine trap in `q-first` (`c-migraine`). The title hands the candidate that finding before the first question.
   - Required change: a neutral title that names no symptom, sign or diagnosis from the findings. Example: "Her partner holds the baby" (from `s-open`). I checked it against all 1618 bank titles: no exact match, closest 0.57 ("Harder and harder to bag"). Do not reuse the "Driven in ..." pattern of `late-dinner-chest-pain` in this batch.
   - Source: docs/Q500_BRIEF.md ("Titles are neutral and give nothing away") and docs/CASE_SPEC.md (`title`: neutral).

### Re-read

Read the changed nodes and every path through `q-first`, `q-refractory` and `q-feeding`. No other new clinical, clock or grading error. `s-migraine` gives a "second pressure" of 170/112 at 14:40, which was already different from the old 168/110 repeat value before round 2. It reads as a later reading and needs no change.

### Advisory (carried, not required)

- pe-pr6 source (C2), `c-wait-labs` grade and the age shared with batch14 `postpartum-pleuritic-chest-pain`. Unchanged from round 1.

## boarder-hard-to-wake: PASS

New title "The 05:30 vital signs round". Unique. Neutral: it matches the stem time and summary and says nothing about hypoglycemia, opioids or the subdural. Round 1 advisories (uniqueness against SAMP s07 and s02, cefazolin interval, the 01:00 sleep request in finding `found`, `c-morning` grade, lc-h3 source) stand.

## ladder-fall-ankle-sedation: PASS

New title "Cleaning the eavestrough", the round 1 reviewer's own example. Unique. Neutral: it comes from the history and does not hint at the sedation drug, chlorhexidine or anaphylaxis. The anaphylaxis infusion content was left unchanged, as instructed. Round 1 advisory (uniqueness against SAMP s23) stands.
