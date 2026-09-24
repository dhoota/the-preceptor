# SAMP batch s42 (ischemic heart disease): Lens B review

Lens: B, internal consistency and numbers.

Scope: every SAMP in `src/samps/s42/ischemic-heart-disease.ts` (ischemic-heart-disease-16 to ischemic-heart-disease-47) and both SAMPs in `src/samps/s42/review-extra.ts` (ischemic-heart-disease-48 and ischemic-heart-disease-49). Each SAMP was read on its own against its stem, updates and options. The two Lens A reviews were not relied on. The overlap check covered the whole s28 chest pain batch (chest-pain-16 to chest-pain-47).

## Method

A script recomputed every score, percentage, dose, interval and ratio from the stem values. The results:

| SAMP | Item | Recomputed | Text says |
|---|---|---|---|
| ischemic-heart-disease-16 | Sildenafil 2200 plus 11 hours | 0900 | Consistent |
| ischemic-heart-disease-17 | FMC to device, 20 + 30 + 110 + 20 | 180 minutes. Leaving out one interval gives 160, both gives 140 | 180, 160. Correct |
| ischemic-heart-disease-17 | BP 188/114 against 180/110 | Above on both | Correct |
| ischemic-heart-disease-18 | ST to S ratio 6/20 | 0.30, meets 0.25 | 0.30. Correct |
| ischemic-heart-disease-21 | Troponin 64 to 118 | +84.4% | About 84%. Correct |
| ischemic-heart-disease-22 | Troponin 88 to 131, enoxaparin 1 mg/kg at 72 kg | +48.9%, 72 mg | Correct |
| ischemic-heart-disease-23 | Baseline 62 to 66, then 66 to 118 | +6.5%, then +78.8% (52 ng/L) | About 79%. Correct |
| ischemic-heart-disease-23 | Dalteparin 120 units/kg, enoxaparin 1 mg/kg, tinzaparin 175 units/kg at 70 kg | 8400 units, 70 mg, 12 250 units | Correct |
| ischemic-heart-disease-24 | Cockcroft-Gault, female, 84 years, 50 kg, 160 umol/L | 18.2 (male factor 21.5) mL/minute | 18 and 22. Correct |
| ischemic-heart-disease-24 | Enoxaparin 1 mg/kg daily and 0.75 mg/kg at 50 kg | 50 mg, 37.5 mg | 50 and 38. Correct |
| ischemic-heart-disease-26 | HEART 1 + 0 + 2 + 2 + 0 | 5 | 5. Correct |
| ischemic-heart-disease-27 | TIMI: age, 3 risk factors, ASA, 2 episodes, ST 0.5 mm | 5 of 7 | 5. Correct |
| ischemic-heart-disease-29 | Tenecteplase at 92 kg, age 54 | 50 mg | 50 mg. Correct |
| ischemic-heart-disease-32 | Calcium gluconate 10%, 30 mL | 3 g | Correct |
| ischemic-heart-disease-33 | hs-cTnT 11 then 12, ESC 0 hour and 1 hour | Above 5, below 12, change 1 | Correct |
| ischemic-heart-disease-35 | FMC 0950 to device 1135 | 105 minutes | Correct |
| ischemic-heart-disease-37 | ST to S ratio 3/35 and 3/40 | 8.6% and 7.5% | Under 10%. Correct |
| ischemic-heart-disease-38 | Tenecteplase option 40 mg at 72 kg, age 77 | Full dose 40 mg, half dose 20 mg | Distractor, rejected on indication |
| ischemic-heart-disease-40 | Tenecteplase option 35 mg at 68 kg | 35 mg | Correct |
| ischemic-heart-disease-41 | hs-cTnT 7 then 7 | Below 12, change 0 | Correct |
| ischemic-heart-disease-43 | Tenecteplase option 50 mg at 92 kg | 50 mg | Correct |
| ischemic-heart-disease-47 | Troponin 96 to 188 | +95.8% (92 ng/L) | About 96%. Correct |
| ischemic-heart-disease-48 | HEART 1 + 0 + 2 + 2 + 0 | 5 | Key was "7". Wrong |
| ischemic-heart-disease-49 | ST to S ratio 3/35 | 8.6% | Correct |

Every age threshold (75 years for half dose tenecteplase and the ARC-HBR minor criterion, 65 for HEART and TIMI), every quoted vital sign and every clock time was also checked against the stem. Format was checked by script: stem 87 to 143 words, updates and prompts in range, no semicolons or dashes in any string. Single keys by position: 21, 21, 23, 18, 16 of 99.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| ischemic-heart-disease-48 | q1 | correct | Key was index 4 ("7"). The explanation computes 5. Key set to index 2 ("5") | High |
| ischemic-heart-disease-49 | q2 | explanation | Last sentence cited a serum lactate of 7.8 mmol/L that appears nowhere in the case, and lactate has no bearing on LVH. Sentence removed | High |
| ischemic-heart-disease-17 | stem (for q4) | stem | The q4 explanation says "She takes no digoxin", but the stem gave no medication list. Added "and takes no other medications" | High |
| ischemic-heart-disease-31 | stem | stem | Timeline conflict. A 15 minute episode at 0430 had a paramedic ECG during the pain, yet she "presents" on her own at 0600. Now brought by ambulance at 0510 | Medium |
| ischemic-heart-disease-35 | q3 | explanation, stem | The explanation says no history suggests a previous infarct, but the stem never said so. Added "no known heart disease" to the stem and reworded the sentence | Medium |
| ischemic-heart-disease-28 | q3 | update | The explanation calls it an NSTEMI, but no 99th percentile or assay was given. Added "High sensitivity" and "(99th percentile 34 ng/L)" | Medium |
| ischemic-heart-disease-22 | q3 | explanation | "He is now stable" was not in the update, which gives no vital signs. Now "his chest heaviness has resolved" | Low |
| ischemic-heart-disease-28 | q2 | explanation | "Without urinary symptoms" was not in the stem. Reworded to a general statement about asymptomatic bacteriuria | Low |
| ischemic-heart-disease-16 | q1 | explanation | "Recorded 30 minutes before arrival" did not match the stem ("30 minutes ago"). Aligned | Low |
| ischemic-heart-disease-25 | stem | stem | Past history and medications came after the examination. Moved to follow the complaint (SAMP_SPEC section 3 order) | Low |
| ischemic-heart-disease-35 | stem | stem | Opening lacked "to the emergency department" (SAMP_SPEC section 3). Added | Low |
| ischemic-heart-disease-28 | q3 | options | Key 1.48 times the mean distractor and the longest, because of the qualifier "his stated". Now "Frailty and goals of care" | Low |
| ischemic-heart-disease-20 | q2 | options | Key 1.35 times the mean distractor and the longest. "Inpatient" removed. Order unchanged | Low |
| ischemic-heart-disease-44 | q3 | options | Menu key 1.66 times the mean distractor. Now "Accelerated atherosclerosis" | Low |

## Key changes

- ischemic-heart-disease-48 q1: before index 4 ("7"), after index 2 ("5"). History 1, ECG 0, age 66 scores 2, three risk factors score 2, troponin 0. Total 5.

## Overlap with the s28 chest pain batch

None of these was rewritten here. Rewriting a whole scenario is a clinical rebuild for the writer or a physician.

- ischemic-heart-disease-23 vs chest-pain-26 (high). Both have a dialysis patient with a clinic baseline troponin near 60 ng/L, a first value just above it, a question that a repeat is needed, and a rise to 118 ng/L that confirms NSTEMI. Only q3 (heparin in kidney failure) is new. Lens A did not flag this. Rebuild recommended.
- ischemic-heart-disease-46 vs chest-pain-41 and chest-pain-44 (high). Q2 teaches tendon xanthomas pointing to familial hypercholesterolemia with nearly the same distractors as chest-pain-41 q1 (anomalous coronary origin, hypertrophic cardiomyopathy). The frame, a boy with chest pressure at a hockey game brought in by his father with q1 "ECG first", repeats chest-pain-44. The homozygous form and LDL 14.1 mmol/L are the only new content. Rebuild q1 and q2 recommended.
- ischemic-heart-disease-16 q2 vs chest-pain-37 q2 and q3 (medium). The same point, nitrates within 24 hours of sildenafil. Lens A also flagged this.
- ischemic-heart-disease-27 q3 vs chest-pain-40 q2 (medium). Crescendo unstable angina with normal troponins needs admission. The TIMI score and the earlier normal stress test in ischemic-heart-disease-27 are new.
- ischemic-heart-disease-26 q1 vs chest-pain-27 q4 (low). A HEART calculation with the same update wording, "you judge her history as moderately suspicious". The inputs differ.
- ischemic-heart-disease-20 and ischemic-heart-disease-34 q4 vs chest-pain-20 (low). SCAD with a fibromuscular dysplasia link, and SCAD in pregnancy. The scenarios differ.
- ischemic-heart-disease-18 vs chest-pain-29 (low). Modified Sgarbossa in a paced rhythm vs in LBBB. The rhythm and the ratio question differ.
- ischemic-heart-disease-48 and ischemic-heart-disease-49 copy ischemic-heart-disease-26 and ischemic-heart-disease-37 word for word, titles included. They must not join the bank.

## Sources verified

This lens checked each citation against the claim it supports within the SAMP. It did not verify URLs again. The numeric thresholds used above come from the cited works: CCS 2019 (120 minute FMC to device), ESC 2023 (0 hour and 1 hour hs-cTnT cutoffs of 5 and 12 ng/L and change of 3, relative contraindication above 180/110 mmHg, pacing wait of at least 5 days), UDMI 2018 (rise of more than 20% on a raised baseline), Dodd 2021 (ST to S ratio 0.25 or more), Armstrong 2012 (ST to QRS 25% in LVH), Antman 2000 (TIMI items), Urban 2019 (ARC-HBR age 75 minor criterion, ICH major criterion).

## Needs physician decision

- ischemic-heart-disease-23 q1: the arrival hs-cTnT of 66 ng/L is above the ESC 0 hour rule-in value of 52 ng/L for that assay. The explanation, based on UDMI, says one value cannot separate acute from chronic injury. That holds in dialysis, but a reader who knows the ESC algorithm may call it a rule-in. Consider a first value below 52 ng/L if the SAMP is rebuilt for the overlap above.
- ischemic-heart-disease-38 q1: the tenecteplase distractor is 40 mg, the full dose for 72 kg, but she is 77, so half dose would apply. It is rejected correctly on indication. Decide whether a distractor may carry a second, unmentioned error.
- The overlap items above, above all ischemic-heart-disease-23 and ischemic-heart-disease-46.

## Summary

- 14 fixes across 12 SAMPs: 1 wrong key (48 q1), 1 invented lab value (49 q2), 5 explanation claims not supported by the stem (17 q4, 35 q3, 28 q3, 22 q3, 28 q2), 1 timeline conflict (31), 1 mismatched interval (16 q1), 2 stem format fixes (25, 35), 3 option length cueing fixes (28 q3, 20 q2, 44 q3).
- 1 key change (ischemic-heart-disease-48).
- Every score, dose, percentage, interval and ratio in 16 to 47 recomputed correctly. The numeric errors were in the review-extra file.
- Overlap flags: 23 and 46 (high), 16 and 27 (medium), 26, 20, 34 and 18 (low), 48 and 49 (verbatim copies).
- SAMP ids with a defect: ischemic-heart-disease-16, ischemic-heart-disease-17, ischemic-heart-disease-20, ischemic-heart-disease-22, ischemic-heart-disease-25, ischemic-heart-disease-28, ischemic-heart-disease-31, ischemic-heart-disease-35, ischemic-heart-disease-44, ischemic-heart-disease-48, ischemic-heart-disease-49. Overlap only: ischemic-heart-disease-23, ischemic-heart-disease-46, ischemic-heart-disease-27, ischemic-heart-disease-26, ischemic-heart-disease-18, ischemic-heart-disease-34.
- All SAMPs remain `reviewed: false`.
