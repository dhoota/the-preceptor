# Q500 verification review, round 2: batch11

Fresh independent review of the round 2 writer revision of `src/cases/batch11/`. I did not write, edit or review these cases before. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-verify-batch11.md` and `docs/reviews/q500-writer-batch11-r2.md`. Changes seen with `git diff 964ece1` on the batch folder. There are no uncommitted changes.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| stopped-antiplatelets-dental-stemi | FAIL | 1 |
| peritoneal-dialysis-wheeze-overload | PASS | 0 |
| glass-finger-return-visit | PASS | 0 |
| ems-patch-ruptured-aaa | PASS | 0 |

## Checks run

- `CASE_BATCH=batch11 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- `npx tsc --noEmit -p .`: no errors in `cases/batch11`.
- The diff touches only the two failed cases. `peritoneal-dialysis-wheeze-overload` and `ems-patch-ruptured-aaa` are byte for byte unchanged since the round 1 verify, so their PASS stands.
- No em dashes, en dashes or semicolons were added. `reviewed: false`, `version: 1`, `author: "Preceptor"` unchanged.

## stopped-antiplatelets-dental-stemi: FAIL

### Round 1 fixes

1. `s-wait`: applied exactly as required. Tenecteplase with the heparin already running and no second P2Y12 inhibitor is correct (ESC 2017 pairs lysis with one P2Y12 inhibitor and one anticoagulant, and lists weight adjusted UFH as an option).
2. Applied completely. Finding `ecg2` is "Repeat ECG". "09:30" is in finding `transport` and node `s-transport`. The model answer line reads as required. No "06:58" or "09:15" remains. Recomputed: strong path diagnostic ECG about 07:00, lab 09:30, 150 minutes. `c-troponin` path 07:05, 145 minutes. `c-reflux` path 07:15, 135 minutes. First contact 06:40, 170 minutes. Over 120 minutes on every path under both ESC 2023 and CCS 2019.

### Unrequested changes

None.

### New problem introduced by fix 1

On the `c-wait` path she now has unfractionated heparin running and no enoxaparin (`c-wait` label and the new `s-wait` text). That path goes `s-wait` to `s-after` to `q-complications`, where choice `c-amio` reads "...and held the enoxaparin because of the bleeding" and its consequence `s-amio` reads "You restart the enoxaparin...". On this path she is not on enoxaparin. Before the fix `s-wait` gave enoxaparin, so the path was consistent. The fix made it inconsistent.

### Required fix

1. File `src/cases/batch11/stopped-antiplatelets-dental-stemi.ts`, node `q-complications`, choice `c-amio` label, and node `s-amio` text.
   - Current `c-amio` label: "I treated it as slow VT with amiodarone 150 mg IV and held the enoxaparin because of the bleeding."
   - Current `s-amio` text: "...You restart the enoxaparin and apply gauze pressure. The ooze stops."
   - Required change: `c-amio` label to "I treated it as slow VT with amiodarone 150 mg IV and held the anticoagulant because of the bleeding." `s-amio` "You restart the enoxaparin" to "You restart the anticoagulant". Feedback, grade and everything else unchanged.
   - Source: internal consistency (CASE_SPEC flow rules). The `c-amio` feedback already says "Holding anticoagulation", so it reads correctly on every path after the change.

### Advisory (carried, not required)

- ih-h5 cites ESC 2023 for collateral history, and the driving advice in `q-talk` and ih-pr4 has no source (C2). Unchanged from round 1.

## peritoneal-dialysis-wheeze-overload: PASS

Unchanged since the round 1 PASS. Round 1 advisories stand.

## glass-finger-return-visit: PASS

### Round 1 fixes

1. `c-blame` in `q-disclose` is now `partial` with its feedback unchanged. Correct under SCORING-RULINGS C1 and consistent with batch12 `c-blame-drug`. `q-disclose` keeps its strong choice `c-disclose`.
2. `s-oral` and `s-surgeon` read exactly as required. On the `c-oral` path the surgeon is now called after she returns, and `s-surgeon`, `q-handover` ("What do you tell the surgeon?") and `q-disclose` ("While you wait for transport") read correctly. On the main and `c-bedside` paths "as soon as she arrives" matches finding `surgeon` (operating room tonight, 45 minutes away).

### Unrequested changes (REVIEW-RULES rule 4)

- `s-deflect` and `s-blame` phase "19:00" to "Minutes later": accepted. With `s-oral` now at 07:00 the next morning, "19:00" would have run the clock forward 12 hours while she waits for transport. "Minutes later" fits all three paths (main path after `s-results` at 18:10, `c-bedside` after 18:40, `c-oral` after 07:00). The node text needs no time.
- `q-disclose` model answer "Antibiotics and surgery tonight, and the nerve repair" to "Antibiotics, urgent surgery and the nerve repair": accepted. It is clinically the same plan, matches lc-m2 ("the same day") and is true on the next morning path.

### Re-read

Read in full. No new clinical, clock or grading error. Feedback lengths stay within 2 to 4 sentences.

### Advisory (not required)

- On the `c-oral` path the candidate's own discharge contributed to the harm, and the surgeon now asks the candidate why she was sent home. The `q-disclose` model answer covers only the first visit. A physician may want a line on disclosing one's own part. This predates round 2.
- Finding `surgeon` still says "tonight", which reads oddly if requested on the `c-oral` path. Findings are static, so this is minor.
- Round 1 advisories (lc-pr4 source, the 2 mm glass figure, the "Back with a sore ..." title echo) stand.

## ems-patch-ruptured-aaa: PASS

Unchanged since the round 1 PASS. Round 1 advisories stand.
