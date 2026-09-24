# Lens B review: batch s31, critical appraisal

Lens: B, internal consistency and numbers. Every file in `src/samps/s31/` was read, including `review-extra.ts`. Every SAMP was checked on its own, question by question, without relying on the Lens A review.

This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Method

- A Python script recomputed every statistic in the batch: sensitivity, specificity, predictive values, likelihood ratios, pre and post-test probabilities, NNT, NNH, ARR, RRR, relative risks, odds ratios, observed to expected ratios, the design effect and effective sample size, the Wilson interval, the exact zero numerator limit, Fisher exact p values and the fragility index. It also checked that each reported confidence interval is symmetric on the right scale and plausible for the sample size.
- A second script compared the two SAMPs in `review-extra.ts` with their originals field by field, and counted words in every stem, prompt and update.
- Numeric options were checked for low to high order. All are in order.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s31` gives no output.
- `SAMP_BATCH=s31 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes, 506 of 506, before and after the edits.
- No em or en dashes and no semicolons in any string in the batch.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| critical-appraisal-19 | stem, q1, q3, q4 | stem, updates, explanations | The per-protocol 95% CI of -2.1 to 9.1 is far too wide for 500 oral and 410 IV patients. With the stated rates the real interval is about 0.3 to 6.7, which excludes zero and clears the 8 point margin, so the keyed "not robust" answer fails on the case's own numbers. The 8.3% oral rate is also impossible as a count of 500. Margin changed to 5 points. ITT CI now -2.3 to 4.3. Per protocol now 8.0% (40 of 500) against 5.1% (21 of 410), difference 2.9 (95% CI -0.3 to 6.1). Explanations and the "up to 6 more failures per 100" figure updated. Keys unchanged. | high |
| critical-appraisal-37 (review-extra) | q1 | correct | Keyed index 3 ("55"). The arithmetic gives 5 (index 1). Lens A reported this fix, but the file still keyed "55". Corrected. | high |
| critical-appraisal-38 (review-extra) | q2 | explanation | Ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this", a lab value the case never gives and that has nothing to do with a number needed to treat. Lens A reported removing it, but it was still in the file. Removed. | high |
| critical-appraisal-24 | stem | vitals | The q5 explanation twice calls her hypotensive, but BP was 92/58 mmHg (MAP 69), which is not hypotension by the sepsis definition. BP changed to 86/54 mmHg (MAP 65). | medium |
| critical-appraisal-28 | stem | vitals | The q4 explanation cites "hypotension" and calls him "a hypotensive patient", but BP was 98/60 mmHg. BP changed to 88/56 mmHg. | medium |
| critical-appraisal-32 | q3 | options, explanation | Option "Low-grade fever" and the explanation called a rectal temperature of 37.9°C a fever. It is below the 38.0°C threshold. Option now "Temperature of 37.9°C", placed in alphabetical order. Key indexes unchanged. | medium |
| critical-appraisal-24 | q3 | explanation | Called the option "33%" the "value 33", the NNT before rounding. The option is a percentage. Now says the NNT of 33.3 read as a percentage. | low |
| critical-appraisal-21 | q1 | explanation | Said 6.7 "is the number needed to harm" while q2 keys the NNH as 7. Now says 6.7 is the NNH before rounding up to 7. | low |
| critical-appraisal-18 | q4 | explanation | The 3% and 5% distractors had no stated reason. The uncorrected LR of 0.05 gives 3.6%, which lies between them. Explanation now names them as the source of those options. | low |
| critical-appraisal-20 | q2 | explanation | "Its inverse gives about 4". The inverse of 29% is 3.5. Now shows 3.5. | low |

## Key changes

- critical-appraisal-37 q1 (review-extra). Before: "55" (index 3). After: "5" (index 1). Reason: 1 divided by 0.217 is 4.6, rounded up to 5. The explanation already said so.
- No key in `critical-appraisal.ts` was changed. The critical-appraisal-19 numbers were rebuilt so that the existing keys hold.

## Items recomputed and found correct

- critical-appraisal-16. Exact one-sided upper limit for 0 of 600 is 0.498%. Rule of three gives 0.5%, 3 of 300 gives 1.0% and 3 of 100 gives 3.0%.
- critical-appraisal-17. Odds 0.333 times 5.0 gives 1.667, probability 62.5%, rounded to 63%. The 38%, 50% and 83% distractors match LRs of 1.8, 3.0 and 14.6.
- critical-appraisal-18. Reported sensitivity 72 of 75 (96.0%), specificity 27 of 35 (77.1%), PPV 72 of 80 (90%). Corrected sensitivity 72 of 84 (85.7%), specificity 108 of 116 (93.1%), prevalence 84 of 200 (42%). Corrected LR- 0.153, post-test 10.0%, which equals 1 minus the corrected NPV of 108 of 120. 72 of 90 is 80%. A quarter of POCUS negatives verified (30 of 120).
- critical-appraisal-19 ITT. The original ITT interval was plausible. Only the per-protocol interval was not.
- critical-appraisal-20. ARR 4 points, NNT 25. Inverses 7.1 and 10. Design effect 4.98, effective sample 482, reversed correction 11 952.
- critical-appraisal-21. RR 2.0, OR 2.43, NNH 6.7 rounded to 7, 150 repeat falls.
- critical-appraisal-22. NNT 25. 4 of 58 is 6.9%. 20 tests at 0.05 give 1 expected false positive.
- critical-appraisal-23 and 37. NNT 4.6 rounded to 5. Fisher exact p: 0.020 as reported, 0.033 after moving 1 saline patient, 0.051 after moving 2, so the fragility index of 2 is right. If the 4 lost gel patients had all failed, p would be 0.062. 4 of 124 lost is 3.2%, under 5%.
- critical-appraisal-24. RRR 16.7% rounded to 17%, RR 0.83, NNT 33.3.
- critical-appraisal-25. LR+ 17.2, post-test 47.5%. LR- 0.147, post-test 0.77%. 43 true and 47.5 false positives per 1 000.
- critical-appraisal-26. Wilson 95% interval for 120 of 124 is 92.0% to 98.7%. Fall of about 1 metre exceeds 0.9 m.
- critical-appraisal-27. PPV 18 of 116, 15.5%. PPV is 50% at 10% prevalence and 90% at 50% prevalence.
- critical-appraisal-28. LR- 0.125, 0.267 and 0.526. LR+ 1.58. Post-test 11.1%, 21.1% and 34.5%. Direct multiplication gives 6.25%.
- critical-appraisal-29. RR 1.30 (0.98 to 1.72) is symmetric on the log scale.
- critical-appraisal-30 and 38. NNT 20. HR 0.78 (0.55 to 1.10) and 0.62 (0.41 to 0.93) are symmetric on the log scale, and the ITT width fits about 105 events. Pain difference and MCID consistent. The two SAMPs are now identical apart from the id.
- critical-appraisal-31. O to E 3.0. Mean ages 52 and 68 differ by 16 years.
- critical-appraisal-32. NNT 12.5 rounded to 13. RRR 26.7%. Inverse of 22% is 4.5.
- critical-appraisal-33. NNT 83.3 rounded to 84. NNH 250. Inverses 125, 167 and 500. Individual NNT 20.8 rounded to 21. About 3 VTEs prevented per bleed.
- critical-appraisal-34. LR+ 1.8, post-test 16.7%. From 50% pretest, 64.3%.
- critical-appraisal-35. NNT 6.7 rounded to 7. RRR 37.5%.
- critical-appraisal-36. Sensitivity 90% and 50%, specificity 98.1%, prevalence 20%, LR+ 48, post-test 92.3%.
- Stem word counts (50 to 150), prompt word counts (10 to 30) and update word counts (10 to 45) are within limits for all 23 SAMPs.
- Timelines agree across stems, updates and explanations in every SAMP.

## Low confidence notes, not changed

- critical-appraisal-28 q3 tests the meaning of the area under the ROC curve but is mapped to key feature 4. Key feature 2 (explain what the statistics mean) fits it better. Left as is because the batch still covers every key feature and the choice is arguable.
- Several interpretation distractors carry a reason inside the option ("Discharge, as the flag is likely false" in critical-appraisal-27 q4, "Disregard it, as CT was not done" in critical-appraisal-36 q5). The keys carry none, so this does not cue the key toward length, but it departs from the spec's "no justification inside an option". A physician or style pass may prefer bare actions.
- critical-appraisal-22 q1 states "chance is an unlikely explanation" twice. Redundant, not wrong.

## Sources verified

Lens B checks internal consistency and numbers. No citation was added or changed. The Lens A list of verified sources stands.

## Needs physician decision

- critical-appraisal-37 and critical-appraisal-38 (review-extra) are copies of critical-appraisal-23 and critical-appraisal-30. Their planted errors are now fixed and they match the originals, but they should be dropped, not added. They would fail the near duplicate stem test if merged.
- critical-appraisal-19. Please confirm a 5 percentage point noninferiority margin for oral step-down in cellulitis. It replaces the original 8 points so that the per-protocol interval can cross the margin with 1 000 patients.
- critical-appraisal-24 and critical-appraisal-28. BP was lowered so that the explanations' "hypotension" is true. Confirm the keys still read as intended (they do on Lens B review).

## Note on the Lens A review

Lens A reports two fixes in `review-extra.ts` (critical-appraisal-37 q1 key and critical-appraisal-38 q2 lactate sentence) that were not in the file when Lens B read it. Both are now applied. Its critical-appraisal-38 q3 fix was present.

## Summary

- SAMPs read: 21 in `critical-appraisal.ts` and 2 in `review-extra.ts`.
- Fixes: 10. Numbers inconsistent with the stem's own data: 1 (critical-appraisal-19, three questions). Wrong key: 1 (critical-appraisal-37). Invented fact: 1 (critical-appraisal-38). Vitals that did not support the explanation: 2 (critical-appraisal-24, critical-appraisal-28). Threshold mislabel: 1 (critical-appraisal-32). Imprecise arithmetic wording or missing distractor reason: 4 (critical-appraisal-18, 20, 21, 24).
- Key changes: 1 (critical-appraisal-37 q1).
- SAMPs with a defect: critical-appraisal-18, critical-appraisal-19, critical-appraisal-20, critical-appraisal-21, critical-appraisal-24, critical-appraisal-28, critical-appraisal-32, critical-appraisal-37, critical-appraisal-38.
