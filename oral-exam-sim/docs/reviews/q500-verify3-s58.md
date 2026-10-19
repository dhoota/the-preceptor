# Q500 verify, round 3: s58, Shock/dehydration

Fresh independent review by Preceptor of `src/samps/s58/shock.ts` after the writer's round 3 changes (`docs/reviews/q500-writer-s58-r2.md`, "Round 3"). Both lenses. The reviewer has not written, edited or reviewed this batch before and edited no SAMP, source or shared file (REVIEW-RULES rule 1). Input diff: `git diff d7c63c6 -- oral-exam-sim/src/samps/s58/shock.ts`. All SAMPs stay `reviewed: false`. This is an AI audit, not clinician verification.

Batch tests (`SAMP_BATCH=s58 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`): 132 passed. Type check not rerun (rule 2).

## Verdicts

| SAMP | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| shock-48 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| shock-49 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| shock-50 | PASS | PASS | PASS | PASS | PASS, q5 PASS |
| shock-51 | FAIL (one word) | PASS | PASS | PASS | FAIL |
| shock-52 | FAIL (three fixes) | FAIL | FAIL | PASS | FAIL |

Totals: 3 of 5 SAMPs pass. 17 of 21 questions pass. 4 fail: one mock-mode cue (51 q4), one unsupported ultrasound claim (52 q1), one repeated decision with a superseded guideline (52 q2), and one misnamed guideline with an unflagged extrapolation (52 q4). Every fix is a wording or option change. No key decision needs to change except the distractors of 52 q2.

## Checks that passed

- **shock-48 and shock-49 are unchanged.** The diff has no hunk in either SAMP. Their only shared change is the `S` source object, and neither cites a removed source.
- **The four round 2 cue fixes are in place.** 50 q3 update and prompt now say "beta-lactam", not piperacillin-tazobactam. 50 q5 no longer says "on norepinephrine". 51 q3 no longer says crystalloid was given. 51 q4 no longer names octreotide, hydrocortisone or fluid. "Beta-lactam" with "IV" still narrows 50 q2 to three of five options, but names no answer, and the drug class is needed for q3 to make sense. Accepted.
- **No other update names an earlier answer** in 48, 49, 50 or 52. The 52 q3 update ("flank swelling is growing") repeats what the stem already says ("tender and full"), so it adds no cue to q1. The 52 q4 update ("the resuscitation given so far") names no q2 or q3 option.
- **Key feature coverage.** KF 1 (48 q4, 49 q4), KF 2 (48 q1 to q3, 49 q1, q2), KF 3 (49 q3, 52 q2), KF 4 (50 q2, q3, q5), KF 5 (51 q1), KF 6 (50 q1, 51 q3, 52 q1), KF 7 (50 q4, 51 q4, 52 q4), KF 8 (51 q2, 52 q3). All eight covered. The 52 tags are honest: q1 bedside ultrasound to find the cause (KF 6), q2 choice of resuscitation fluid (KF 3), q3 a non-fluid therapy for the cause (KF 8), q4 vasopressor by shock type (KF 7).
- **Key positions now**, first to fifth: 3, 5, 4, 4, 4 of 20 single questions. Every position used, none above 25%. The key is the longest option in 7 of 20 (35%, at the limit). The 52 q1 fix below removes one of those. After all fixes in this review the positions are 4, 5, 2, 5, 4 (25% maximum) and the key is longest in 6 of 20.
- **shock-52 scenario is new.** No other SAMP or oral case sets bleeding after a kidney biopsy (grep of `src/samps` and `src/cases` for "renal biopsy", "kidney biopsy", "perinephric", "perirenal": only ureteric stone cases with "perinephric stranding"). The nearest scenario is gi-bleed-30 (s39), hemobilia 5 days after a liver biopsy, which keys diagnosis, CT angiography and embolization. Different organ, timing and decisions. Not a repeat.
- **Stem.** 118 words, opening and order per spec, vitals in the field. Timeline consistent: biopsy 09:00, home after 6 hours (15:00), symptoms for 3 hours at 21:00, so bleeding declared about 9 hours after biopsy. Creatinine 356 umol/L in a 52-year-old man gives a CKD-EPI 2021 eGFR of about 17 mL/minute/1.73 m2, which is stage 4 and fits transplant assessment. Stopping ASA 7 days before supports the q3 reasoning. No dashes or semicolons. Title is neutral.
- **52 q3 (PASS).** Normal platelets, INR and aPTT with a urea of 34 mmol/L point to uremic platelet dysfunction. Of the five options, desmopressin is the only one that treats it, so it is the single best answer even with no dose offered. All five options are dose-free, so specificity is matched (B10). Hedges 2007 (abstract read, Europe PMC) lists "dialysis, erythropoietin, cryoprecipitate, desmopressin, and conjugated estrogens" as uremic bleeding treatments and compares their onset. Distractor reasons are true: plasma and vitamin K replace factors he is not short of, protamine reverses heparin he has not had, and platelet transfusion does not correct a functional defect in a normal count. Uniqueness: desmopressin is keyed elsewhere only for sodium overcorrection (loc, delirium) and appears as a distractor in s39 and s45. Uremic bleeding is keyed nowhere. s68 gi-bleed q3 uses "Uremic platelet dysfunction" only as a distractor in a von Willebrand question.
- **Marwah and Korbet 1996** (abstract read, Europe PMC, doi 10.1016/s0272-6386(96)90129-8): 394 native kidney biopsies, perinephric hematoma counted as a complication, "identified in only 52% of patients at <= 4 hours, 77% at <= 8 hours, and 95% at <= 12 hours". The 77% and 95% figures in 52 q1 are exact. Note: a larger 2004 series by the same group (750 patients) reports 67% by 8 hours and 85% by 12 hours. The item cites the 1996 paper correctly, so no change is required.
- **European trauma guideline** (PMC9977110, read): Recommendation 13, "restricted volume replacement strategy with a target systolic blood pressure of 80-90 mmHg ... until major bleeding has been stopped without clinical evidence of brain injury" (Grade 1B). Recommendation 14, noradrenaline in addition to fluids when that strategy does not reach the target, and dobutamine in myocardial dysfunction (Grade 1C). The rationale names epinephrine as the one vasopressor associated with mortality. The key holds. See the q4 fix for wording.
- **Uniqueness of the 52 q4 decision.** No SAMP or case keys a vasopressor for hemorrhagic shock while awaiting bleeding control (grep of "noradrenaline", "restricted volume replacement" and the shock, gi-bleed and multiple-trauma catalogs). The norepinephrine keys in the catalogs are septic, cardiogenic, neurogenic, obstructive or toxic shock.

## Required fixes

### shock-51

**q4 (FAIL, medium confidence). Mock-mode cue, SCORING-RULINGS B6.**
- Current update: "Her initial treatment for the crisis is running."
- Problem: q1 asks for the cause of her shock, and "Carcinoid crisis" is the only q1 option containing "crisis". In mock mode the q4 update is shown with q1 and names the key word.
- Required change: "Her initial treatment is running. Her systolic pressure is still 74 mmHg and the flushing persists." Nothing else changes.

### shock-52

**q1 (FAIL, high confidence). Ultrasound appearance not supported, and possibly wrong.**
- Current key: "Hypoechoic collection around the left kidney". Explanation opens "A hypoechoic collection around the biopsied kidney is a perinephric hematoma".
- Problem: Marwah and Korbet support the timing and name perinephric hematoma as a complication, but say nothing about its echo pattern. The writer confirms the appearance is not from the source. Fresh clotted blood is often echogenic or of mixed echogenicity rather than hypoechoic, so the qualifier may also mislead.
- Required change:
  - Key option: "Collection around the left kidney". It sorts first, so `correct` becomes 0. Options in order: "Collection around the left kidney", "Dilated left renal collecting system", "Free fluid in the hepatorenal space", "Large clot within the bladder", "Small effusion around the heart".
  - Explanation first sentence: "A collection around the kidney that was just biopsied is most likely a perinephric hematoma, the bleeding complication that fits his tender, full flank, his fall in hemoglobin from 116 to 84 g/L and his shock."
  - Tie the bladder clot reason to the stem, since heavy hematuria can itself cause shock: "A dilated collecting system or a bladder clot can follow bleeding into the urine, but his urine is only pink, so they do not explain this blood loss."
  - Keep the rest.

**q2 (FAIL, medium confidence). Repeated decision, and the cited guideline is superseded.**
- Repeat: four of the five options test only "red cells, not crystalloid or albumin, for active hemorrhagic shock". That is the keyed decision of shock-32 q3 (s50, "Red cells for active bleeding" against crystalloid 2 L and albumin), and also of shock-16 (s50) and other hemorrhage items. Only "Crystalloid until transplant advice" tests the new point, the transplant candidate. A candidate who knows nothing about allosensitization still scores. Q500 brief rule 3 forbids a repeated key decision.
- Superseded source: KDIGO published the 2026 anemia guideline in January 2026, replacing the 2012 version. KDIGO 2026 Clinical Practice Guideline for the Management of Anemia in CKD, Kidney Int. 2026;109(Suppl 1S):S1 to S99, doi 10.1016/j.kint.2025.06.006 (full PDF read at https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf). The content survives as practice points, not graded recommendations:
  - Practice Point 4.2: "In people with anemia and CKD eligible for organ transplantation, avoid, when possible, RBC transfusions to minimize the risk of allosensitization."
  - Practice Point 4.5: "In people with CKD and acute anemia, consider RBC transfusion when the benefits outweigh the risks, including when rapid correction of anemia is required to stabilize the patient's condition (e.g., acute hemorrhage ...)". The rationale adds: "RBC transfusion may be needed for the immediate correction of anemia. These include acute severe hemorrhage".
  - So "KDIGO recommends" and "The same guideline suggests" (2012 grading words) are now inaccurate.
- Required change:
  - Replace the source with: "Kidney Disease: Improving Global Outcomes (KDIGO) Anemia Work Group. KDIGO 2026 clinical practice guideline for the management of anemia in chronic kidney disease (CKD). Kidney Int. 2026." url "https://doi.org/10.1016/j.kint.2025.06.006", new id (for example "kdigo-anemia-2026").
  - Keep the key "red cells 2 units IV now" and "Crystalloid until transplant advice". Replace the three generic distractors with plausible peers that a candidate worried about sensitization might choose, for example "darbepoetin IV and recheck hemoglobin", "iron sucrose 200 mg IV" and "Wait for HLA antibody screen". Alphabetical order then puts the key fourth (`correct` 3). Lengths 22 to 37 characters, ratio 1.7.
  - Explanation, for example: "He is in hemorrhagic shock with a hemoglobin that has fallen from 116 to 84 g/L and is still bleeding, so he needs red cells now. KDIGO advises avoiding red cell transfusion when possible in people eligible for a transplant, because it can create antibodies against future donor tissue. The same guideline advises transfusion when rapid correction of anemia is needed to stabilize the patient, as in acute hemorrhage. Darbepoetin and IV iron cannot correct anemia immediately. Waiting for an antibody screen or for transplant advice delays blood he needs to survive, and crystalloid carries no oxygen and dilutes his clotting factors."
  - Grep the new distractors and teaching point against `src/samps` and `src/cases` before submitting. Crystalloid versus blood may still be taught in the explanation.
  - If the writer prefers other distractors, each must test the transplant decision, match the key's specificity and keep the position count at or under 5 of 20.

**q4 (FAIL, medium confidence). Misnamed guideline and an unflagged extrapolation.**
- Current: "The European bleeding guideline recommends noradrenaline ..." and "the 80 to 90 mmHg target used until bleeding is controlled in a patient without brain injury".
- Problem: the cited guideline is the European guideline on major bleeding and coagulopathy following trauma. Its stated scope is the bleeding trauma patient. "European bleeding guideline" hides that, and this patient bled after a procedure. The same rationale also warns that permissive hypotension "should be carefully considered in elderly patient" and "may be contraindicated if the patient suffers from chronic arterial hypertension", and he takes amlodipine. The key is still right: a systolic of 66 mmHg with drowsiness is below any target, and norepinephrine is the guideline's agent. Only the explanation needs to change.
- Required change: first two sentences, for example: "His systolic pressure of 66 mmHg with new drowsiness shows critical hypoperfusion despite blood, and it is below even the 80 to 90 mmHg target that the European trauma bleeding guideline accepts until bleeding is controlled. That guideline, applied here to bleeding after a procedure, recommends noradrenaline, which is norepinephrine, in addition to fluids when restricted volume replacement does not reach the target pressure, while blood and definitive control of the bleeding continue." Keep the distractor sentences.

## Unrequested writer changes (rule 4)

- New title "Flank pain on the evening of a test": neutral, accepted.
- Friese 2007 and CAR 2022 removed: correct, since nothing cites them now.
- The writer's report cites KDIGO 2012 Recommendation 4.2 for transfusion in acute hemorrhage. That number is right for the 2012 text (verified, PMC4089676), but the source must move to 2026 as above.

## Needs physician decision (not grounds for failure)

1. 52 q3: desmopressin for active uremic bleeding rests on review-level evidence (Hedges 2007). It is the best of the five options, not a proven therapy for bleeding from a biopsy track.
2. 52 q4: the vasopressor decision extrapolates a trauma guideline to bleeding after a procedure. The oral case `src/cases/batch07/ruptured-ectopic-pregnancy.ts` labels norepinephrine before blood, to a systolic above 100, as unsafe. Not a reversal (different target and timing), but the bank should hold one position on vasopressors in hemorrhagic shock. Carried from round 2.
3. Earlier physician items 1 to 4 and 6 from `q500-verify2-s58.md` stand unchanged.

## Sources verified this round

- Marwah DS, Korbet SM 1996: Europe PMC abstract (doi 10.1016/s0272-6386(96)90129-8). Supports the timing figures and the hematoma as a complication. Does not support any ultrasound appearance.
- Hedges SJ et al. 2007: Europe PMC abstract (doi 10.1038/ncpneph0421). Lists desmopressin among uremic bleeding treatments.
- KDIGO 2012 anemia guideline chapter 4: https://pmc.ncbi.nlm.nih.gov/articles/PMC4089676/ (Recommendations 4.1.2 and 4.2 verified, now superseded).
- KDIGO 2026 anemia guideline: https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf and https://kdigo.org/guidelines/anemia-in-ckd/ (Practice Points 4.2 and 4.5 verified, doi 10.1016/j.kint.2025.06.006).
- Rossaint 2023 European trauma guideline: https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/ (Recommendations 13 and 14, the epinephrine rationale, the scope, and the elderly and hypertension caveat).

## Summary

shock-48, shock-49 and shock-50 pass. The round 2 cue fixes are applied correctly. shock-51 fails on one word: "the crisis" in the q4 update cues the q1 key. In shock-52, the new scenario is unique and q3 (desmopressin) passes. Three questions need fixing. q1 must drop the unsupported "hypoechoic" description, which moves the key to first position. q2 repeats the decision keyed in shock-32 q3 and cites KDIGO 2012, which KDIGO 2026 has replaced, so it needs transplant-specific distractors and the 2026 source. q4 must name the trauma guideline and say it is being applied outside trauma. With these fixes, key positions stay within limits and every key feature stays covered. The batch has not yet passed. These fixes go back to a writer for a fresh review.
