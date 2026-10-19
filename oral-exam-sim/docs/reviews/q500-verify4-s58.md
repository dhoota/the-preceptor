# Q500 verify report, round 4: s58, Shock/dehydration

This is a fresh independent review of the round 4 revision of `src/samps/s58/shock.ts` ("Round 4" in `docs/reviews/q500-writer-s58-r2.md`), checked against the round 3 verdict `docs/reviews/q500-verify3-s58.md` and `git diff 7961d88 -- oral-exam-sim/src/samps/s58/shock.ts`. The reviewer did not write, edit or review this batch before and edited no file other than this one (REVIEW-RULES rule 1). It is an AI audit, not clinician verification. All items stay `reviewed: false`.

## Result: FAIL (one question, wording only)

| SAMP | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| shock-48 | PASS (unchanged since round 3) | PASS | PASS | PASS | PASS |
| shock-49 | PASS (unchanged since round 3) | PASS | PASS | PASS | PASS |
| shock-50 | PASS (unchanged since round 3) | PASS | PASS | PASS | PASS, q5 PASS |
| shock-51 | PASS | PASS | PASS (menu) | PASS | PASS |
| shock-52 | FAIL | PASS | FAIL | PASS | PASS |

Totals: 4 of 5 SAMPs pass. 20 of 21 questions pass. Every round 3 fix was applied as written. The one failure is new: the round 3 verdict changed the 52 q2 options but not its lead-in, and the lead-in now no longer describes three of the five options (SCORING-RULINGS B8). The key, the options and the source stay. Only the prompt and four words of the explanation change. The batch has not yet passed.

## Checks

| Check | Finding |
|---|---|
| Diff scope | In `shock.ts` the diff touches only the `kdigo` line in `S`, the 51 q4 update, 52 q1 options, key and explanation, 52 q2 options, key, explanation and source, and the 52 q4 explanation. shock-48, 49 and 50 have no hunk. The other files in `git diff --stat 7961d88` belong to other batches. |
| 51 q4 fix | Applied exactly: "Her initial treatment is running. Her systolic pressure is still 74 mmHg and the flushing persists." "Crisis" is gone, so the update no longer names the q1 key. No other update or prompt in shock-51 names a q1, q2 or q3 key. PASS. |
| 52 q1 fix | Applied exactly. Key "Collection around the left kidney" at `correct` 0, options in the verdict's order, first sentence and the bladder clot sentence as written. "Hypoechoic" is gone. One defensible key: pink urine rules out the urinary sources as the cause of this blood loss, hepatorenal free fluid is intraperitoneal, and a small pericardial effusion does not cause hemorrhagic shock. The key (33 characters) is not the longest option (36). Marwah and Korbet 1996 still supports the 77% and 95% figures (verified in round 3). PASS. |
| 52 q2 options and source | Applied as the verdict wrote them, key at `correct` 3, source moved to `kdigo-anemia-2026` with the correct citation and doi. KDIGO 2012 removed from `S`, and no `kdigo-anemia-2012` id remains anywhere in `src`. See the q2 fix below for the lead-in. |
| KDIGO 2026 support | Full PDF opened this round (https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf, Kidney Int 2026;109(Suppl 1S):S1 to S99). Practice Point 4.2: "In people with anemia and CKD eligible for organ transplantation, avoid, when possible, RBC transfusions to minimize the risk of allosensitization." Practice Point 4.5: "In people with CKD and acute anemia, consider RBC transfusion when the benefits outweigh the risks, including When rapid correction of anemia is required to stabilize the patient's condition (e.g., acute hemorrhage or unstable coronary artery disease)". Rationale: "In certain urgent clinical situations, RBC transfusion may be needed for the immediate correction of anemia. These include acute severe hemorrhage". The Figure in chapter 4 routes acute hemorrhage in a potential transplant recipient to "Assess balance of risks and benefits before transfusing", not to withholding blood. The explanation's "advises avoiding ... when possible" and "advises considering transfusion when rapid correction ... as in acute hemorrhage" match the practice point wording. "Considering" is closer to the guideline than the verdict's suggested "advises transfusion", so that writer change is accepted. |
| 52 q2 distractor reasons | Each is wrong for a true, stated reason. Darbepoetin: an ESA, cannot correct anemia immediately (KDIGO lists it as weekly maintenance therapy, 0.45 mcg/kg weekly in non-dialysis CKD). Iron sucrose 200 mg IV: a real KDIGO CKD dose, also cannot raise hemoglobin in time. Wait for HLA antibody screen: delays blood in hemorrhagic shock, and Practice Point 4.5 places acute hemorrhage among the situations where transfusion is warranted. Crystalloid until transplant advice: carries no oxygen and dilutes clotting factors, and waiting for advice delays blood. Each distractor tests whether the candidate withholds blood out of transplant concern, so the round 3 repeat of shock-32 q3 is resolved. |
| 52 q2 specificity and length | Key "red cells 2 units IV now" (24 characters) is shorter than the mean distractor (30.5). Longest to shortest 37 to 22, ratio 1.68. Darbepoetin has no dose, but crystalloid and the waiting option are also undosed and iron sucrose is dosed, so the key does not stand out (B10). Accepted. |
| 52 q2 uniqueness | Grep of `src/samps` and `src/cases` for "allosensit", "HLA antibod", "transplant advice", "darbepoetin", "iron sucrose" and "kdigo-anemia": darbepoetin appears only in two dialysis oral case medication lists, "Iron sucrose IV now" only as an s41 infectious-diseases option for an unrelated decision, and nothing else outside s58. The shock catalog (`scratchpad/q500/catalog/shock.md`) has no match for transplant, allosensitization, HLA, darbepoetin, iron sucrose or KDIGO. No other item keys transfusion in a transplant candidate. Unique. |
| 52 q4 fix and source | European guideline on major bleeding and coagulopathy following trauma, sixth edition, opened this round (Europe PMC full text of PMC9977110). Recommendation 13: "restricted volume replacement strategy with a target systolic blood pressure of 80-90 mmHg ... until major bleeding has been stopped without clinical evidence of brain injury (Grade 1B)". Recommendation 14: "If a restricted volume replacement strategy does not achieve the target blood pressure, we recommend the administration of noradrenaline in addition to fluids" and dobutamine "in the presence of myocardial dysfunction". The rationale: permissive hypotension "should be carefully considered in elderly patient and may be contraindicated if the patient suffers from chronic arterial hypertension." The explanation now names "the European trauma bleeding guideline", says it is "applied here to bleeding after a procedure", and "may not suit patients with chronic hypertension" is a fair paraphrase of "may be contraindicated". The key stays right: 66 mmHg with drowsiness is below any target. PASS. |
| Unrequested writer change (rule 4) | The 52 q4 amlodipine sentence was not asked for. Judged on its merits: the caveat is quoted correctly above, amlodipine is a reasonable marker of chronic hypertension in a man with stage 4 CKD, and the sentence only adds a reason not to accept the pressure, which supports the key. Accepted. |
| shock-51 and shock-52 read through | Consistent stems, timelines and numbers across questions. 52 q3 (desmopressin) unchanged and still the single best answer. No later update, prompt or option in either SAMP names an earlier key (B6). The 52 q3 update repeats the stem's full flank, and the 52 q4 update says only "the resuscitation given so far". KF tags honest: 51 q1 KF5, q2 KF8, q3 KF6, q4 KF7. 52 q1 KF6, q2 KF3 (blood rather than crystalloid), q3 KF8, q4 KF7. |
| Key feature coverage | All eight shock key features in `src/blueprint/priorityTopics.ts` covered: KF1 48 q4, 49 q4. KF2 48 q1 to q3, 49 q1, q2. KF3 49 q3, 52 q2. KF4 50 q2, q3, q5. KF5 51 q1. KF6 50 q1, 51 q3, 52 q1. KF7 50 q4, 51 q4, 52 q4. KF8 51 q2, 52 q3. |
| Key positions | Single keys by position, first to fifth: 4, 5, 2, 5, 4 of 20. Highest 25%, every position used. The q2 fix below does not change them. |
| Longest option | The key is the single longest option in 6 of 20 single questions (30%: 48 q2, q3, q4, 49 q1, q4, 52 q4), within the 35% limit. 50 q2 ties and is not counted. |
| Style | No em or en dashes and no semicolons in the changed text. Canadian spelling. |
| Typecheck | `npx tsc --noEmit -p . 2>&1 \| grep samps/s58` printed nothing. |
| Tests | `SAMP_BATCH=s58 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 132 of 132 passed in 3 files, including the bank wide near duplicate stem check. |

## Required fixes

### shock-52

**q2 (FAIL, high confidence). The lead-in no longer describes the options. SCORING-RULINGS B8.**
- Current prompt: "Which of the following is the most appropriate resuscitation fluid for him now?"
- Problem: three of the five options are not resuscitation fluids: "darbepoetin IV and recheck hemoglobin", "iron sucrose 200 mg IV" and "Wait for HLA antibody screen". A test-wise candidate drops all three on the lead-in alone, which leaves "red cells" against "crystalloid", the decision round 3 failed as a repeat of shock-32 q3. The new transplant distractors then test nothing. The round 3 verdict replaced the options without updating the prompt, so the writer is not at fault, but the item cannot pass as it stands.
- Required change:
  - Prompt: "Which of the following is the most appropriate next step in his resuscitation?" It covers every option, and names none of them.
  - Explanation, fifth sentence: change "Waiting for an antibody screen or for transplant advice" to "Waiting for an HLA antibody screen or for transplant advice". In transfusion practice an unqualified "antibody screen" means the red cell antibody screen of a group and screen, which is a different test from the one in the option.
  - Keep the options, the key (`correct` 3), the source, the KF3 tag and the rest of the explanation.

## Physician-level items (not grounds for failure)

The items in `q500-verify3-s58.md` still stand: desmopressin for active uremic bleeding rests on review-level evidence (52 q3), the 52 q4 vasopressor decision extrapolates a trauma guideline to bleeding after a procedure and the bank should hold one position on vasopressors in hemorrhagic shock (compare `src/cases/batch07/ruptured-ectopic-pregnancy.ts`), and items 1 to 4 and 6 from `q500-verify2-s58.md`.

## Sources verified this round

- KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in CKD. Kidney Int. 2026;109(Suppl 1S):S1 to S99. https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf. Full PDF opened. Practice Points 4.2 and 4.5, the 4.5 rationale and the chapter 4 figure support the 52 q2 key and explanation wording. Darbepoetin and iron sucrose dosing tables checked.
- Rossaint R et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care 2023. Europe PMC full text of PMC9977110 opened. Recommendations 13 and 14 and the elderly and chronic hypertension caveat support the 52 q4 explanation.

## Summary

The four round 3 fixes are in place: 51 q4 no longer cues "crisis", 52 q1 drops "hypoechoic", 52 q2 now has transplant distractors and the KDIGO 2026 source, and 52 q4 names the trauma guideline and says it is being applied outside trauma. KDIGO 2026 Practice Points 4.2 and 4.5 support 52 q2, and every new distractor is wrong for a true reason. shock-48, 49 and 50 are unchanged and still pass (`q500-verify3-s58.md`), and shock-51 now passes. One fix remains: the 52 q2 prompt still asks for a "resuscitation fluid", which lets candidates eliminate the three new distractors without reading them. Change the prompt and add "HLA" to the explanation as above. Key positions, the longest-option rate and key feature coverage stay within spec. This change goes back to a writer for a fresh review.
