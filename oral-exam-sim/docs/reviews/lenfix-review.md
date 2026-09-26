# Lenfix review

Independent review of the working-tree changes to the 31 SAMPs in `src/samps/held-back/lenfix.json`, against `docs/reviews/lenfix.md`. Nothing was committed. Only these 31 SAMPs were edited.

Method: HEAD was extracted to a scratch tree, and both trees were loaded at runtime. For every changed question the keyed texts, `correct`, length ratio (longest key over mean distractor, None counted as a distractor), 60 character and 10 word limits, absolute words and order were compared. Each lengthened distractor was then read against the stem, the update, the explanation and the keys of the other questions in the SAMP.

## Results

| SAMP | Q | Result | Notes |
|---|---|---|---|
| abuse-domestic-29 | q4 | PASS | Ratio 1.12. Distractors stay wrong for the reasons given. |
| abuse-domestic-33 | q3 | PASS | Ratio 1.22. |
| airway-32 | q1 | FIXED | "Low-grade fever of 37.8°C" invented a temperature the stem never gives. Reverted to the signed-off "Low-grade fever". Ratio now 1.39. |
| anaphylaxis-16 | q3 | PASS | Ratio 1.28. |
| asthma-copd-33 | q3 | PASS | Ratio 1.32. |
| chest-pain-27 | q3 | PASS | Ratio 1.20. Age 55 still scores 1 in HEART, so the distractor stays wrong. |
| chest-pain-40 | q4 | PASS | Ratio 1.27. Tenecteplase 45 mg matches the 88 kg weight band. |
| cva-27 | q2 | PASS | Kase 1985 abstract (PMID 3990968) checked: "Angiograms disclosed occlusion of the top of the basilar artery in two cases", infarcts "on the upper surface of a cerebellar hemisphere", "ataxic gait with little or no vertigo". The fact now sits in q2, which cites kase-sca. Removing the medial PICA sentence leaves the PICA distractor rejected on the stem (no vertigo, vomiting or nystagmus) and Kase's SCA picture. Key unchanged (index 4, right SCA). |
| cva-27 | q4 | PASS | Basilar clause removed. The rest of the explanation, including the Doppler rejection, still holds. Key unchanged. |
| delirium-agitation-32 | q1 | PASS | Ratio 1.16. The LP rejection (risk with possible metastases, no fever or meningism) still applies to "Lumbar puncture and CSF studies". |
| dvt-pe-24 | q3 | PASS | Ratio 1.33. |
| dvt-pe-46 | q1 | PASS | Ratio 1.25. Explanation updated to match "Normal popliteal and femoral veins", consistent with the stem. |
| environmental-38 | q3 | PASS | Ratio 1.23. |
| eye-16 | q4 | PASS | Ratio 1.29. |
| first-trimester-bleeding-16 | q3 | PASS | Ratio 1.19. The vasopressor rejection still holds for "to a MAP of 65". |
| headache-17 | q4 | PASS | Ratio 1.18. |
| headache-20 | q4 | PASS | Ratio 1.14. |
| headache-23 | q3 | PASS | Ratio 1.30. |
| infectious-diseases-35 | q1 | FIXED | "Recent kidney infection" echoed the keyed "Recent ciprofloxacin course" and read as a recent illness risk factor. Reverted to the signed-off "Kidney infection", which also restores `correct` to [0, 4, 6] as at HEAD. "Hypertension on medication" kept. Ratio now 1.40. Keyed texts identical to HEAD. |
| loc-36 | q2 | PASS | Ratio 1.17. |
| msk-31 | q4 | PASS | Ratio 1.35. |
| multiple-patients-20 | q2 | PASS | Ratio 1.24. |
| pediatric-fever-25 | q2 | PASS | Ratio 1.30. |
| pre-eclampsia-20 | q2 | PASS | Ratio 1.23. |
| pulmonary-edema-21 | q1 | PASS | Ratio 1.29. |
| pulmonary-edema-35 | q1 | PASS | Ratio 1.23. |
| shock-16 | q4 | PASS | Ratio 1.26. |
| shock-26 | q2 | PASS | Ratio 1.27. |
| sob-43 | q3 | PASS | Ratio 1.28. |
| suicide-risk-29 | q2 | PASS | Ratio 1.29. New wording mirrors the update text. |
| tox-17 | q4 | PASS | Ratio 1.33. |
| tox-28 | q3 | FIXED | "Urine drug screen for co-ingestants" gave it the same purpose as the keyed acetaminophen level, so it read as partly correct, and the explanation's reason ("does not report theophylline") no longer answered it. Reverted to the signed-off "Urine drug screen". Ratio now 1.39. |

Counts: 31 questions reviewed. 28 PASS, 3 FIXED, 0 FAIL.

## Other checks

- Keys: every keyed text is identical to HEAD in all 31 questions. `correct` matches HEAD everywhere. infectious-diseases-35 q1 is back to its HEAD indexes after the fix.
- Metadata: all 31 SAMPs are `reviewed: false` with the version bumped by 1 from HEAD.
- Rules: every changed question is in order with None last, every option is at most 60 characters and 10 words, no absolute words, worst ratio 1.40.
- House style: no em or en dashes and no semicolons in any added prose.
- `SAMP_BATCH=<batch> npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passed for s20, s21, s23, s25, s27, s28, s29, s32, s33, s34, s36, s37, s38, s40, s41, s44, s46, s47, s48, s50, s51, s52 and s53.
- `npx tsc --noEmit -p .`: exit 0.
