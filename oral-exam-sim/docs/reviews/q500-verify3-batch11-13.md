# Q500 verification review, round 3: batch11 and batch13

Fresh independent review of the round 3 writer revision of two cases. I did not write, edit or review these cases before. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/reviews/REVIEW-RULES.md`, `docs/reviews/q500-verify2-batch11.md`, `docs/reviews/q500-verify2-batch13.md` and the "Round 3" sections of `docs/reviews/q500-writer-batch11-r2.md` and `docs/reviews/q500-writer-batch13-r2.md`. Changes seen with `git diff e3f8dc2` on the two case files. The round 3 commit is be0c4e9. Both files are identical at HEAD.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| stopped-antiplatelets-dental-stemi | PASS | 0 |
| postpartum-headache-sixth-day | PASS | 0 |

## Checks run

- In a clean worktree at be0c4e9 (after `npm run bank:encode`), `CASE_BATCH=batch11` and `CASE_BATCH=batch13` with `tests/cases.test.ts` and `tests/citations.test.ts`: 45 of 45 pass for each batch.
- In the shared checkout at HEAD (5ce22a5) the same command fails to load `tests/cases.test.ts` for both batches. The cause is `src/cases/batch15/index.ts`, which imports `./brought-down-from-the-eighth-floor`, a file that is not in the commit. That is work in progress in batch15 and has nothing to do with these two cases. It will block any landing until batch15 is fixed or its index is trimmed. Citations tests (6 of 6) pass at HEAD.
- The diff touches only the three lines below. No em dashes, en dashes or semicolons were added.

## stopped-antiplatelets-dental-stemi: PASS

### Round 2 fix

Applied exactly as required. `c-amio` label now reads "...held the anticoagulant because of the bleeding." `s-amio` now reads "You restart the anticoagulant and apply gauze pressure." Feedback, grade and `next` unchanged.

Paths into `q-complications`. The only way in is `s-after`, reached three ways.
- `c-lyse` to `s-after`: enoxaparin. "The anticoagulant" reads correctly.
- `c-wait` to `s-wait` to `s-after`: heparin kept running with tenecteplase. "The anticoagulant" reads correctly, where the old "enoxaparin" did not.
- `c-no-lysis` to `s-no-lysis` to `s-after`: enoxaparin. Reads correctly.

`s-after` itself names no anticoagulant. The `c-amio` feedback ("Holding anticoagulation") and the `c-aivr` label ("antithrombotics") were already generic. Nothing else in the file changed.

### Unrequested changes

None.

## postpartum-headache-sixth-day: PASS

### Round 2 fix

Title "Sparkling lights in both eyes" is now "Her partner holds the baby", the example the round 2 reviewer gave. It names no symptom, sign, finding or diagnosis. It matches the stem (her partner drove her in with the baby) and gives nothing away beyond what the stem already says. It does not reuse the "Driven in ..." pattern of `late-dinner-chest-pain`.

Uniqueness: `grep -rh 'title:' src/cases src/samps` finds it exactly once. The bank has four other titles that appear twice ("Found on the kitchen floor", "Collapse in the waiting room", "Collapse at hockey practice", "Bleeding after a home birth"). None involves this case.

### Unrequested changes

None. Only the `title` line changed.

## Advisories

Round 1 and round 2 advisories on both cases stand unchanged (for example the ih-h5 source and the uncited driving advice in `q-talk` and ih-pr4 of stopped-antiplatelets-dental-stemi). Not required for this round.
