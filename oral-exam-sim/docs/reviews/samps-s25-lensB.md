# Review of s25 (Asthma/COPD), Lens B: internal consistency and numbers

Reviewer: AI audit, Lens B. This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: all 32 SAMPs in `src/samps/s25/asthma-copd.ts` (asthma-copd-16 to asthma-copd-47) and the 2 SAMPs in `src/samps/s25/review-extra.ts` (asthma-copd-48, asthma-copd-49). I read every stem, update, option and explanation sentence against its own case, one SAMP at a time. I did not rely on the Lens A report. Its two fixes to review-extra.ts (the asthma-copd-48 q1 key and the invented lactate in asthma-copd-49 q2) were not present in the file when I started, so I made them. Its fixes to asthma-copd.ts (asthma-copd-44 Wells 7.0, asthma-copd-20 q2 methylprednisolone 80 mg) were present and I rechecked them.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| asthma-copd-48 (review-extra) | q1 | correct | Key pointed to "Increase the bagging rate" (index 3), which the explanation itself rejects. Key set to "Disconnect from the bag" (index 1) | High |
| asthma-copd-49 (review-extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L seen on the first blood gas". The case gives no lactate. Sentence removed | High |
| asthma-copd-17 | q1, q2 | question order | The first question asked which feature "would most support an upper airway cause", which gave away the answer to the next question (most likely cause, keyed inducible laryngeal obstruction). The two questions were swapped, so the diagnosis is asked first. Content, keys and explanations unchanged | Medium |
| asthma-copd-44 | stem | stem | The q2 explanation scores the Wells items for recent surgery or immobilization and cancer as 0 ("no recent surgery or immobilization and no cancer"), but the stem never said so. Added "no cancer and no recent surgery or immobilization" to the stem. Wells recomputed: 3 + 1.5 + 1.5 + 1 = 7.0 | Medium |
| asthma-copd-44 | q2 | explanation | Only the 5.5 distractor had a reason. Added that the lower totals leave out further items, such as the 3 points for PE as the most likely diagnosis | Low |
| asthma-copd-27 | q4 | explanation | "Her history of two prednisone courses in the past year" stated a history the case never gave (it is only an option). Reworded as a hypothetical: two courses would meet the referral threshold on their own | Medium |
| asthma-copd-30 | q3 | explanation | "He has no cardiac history" is not in the stem. Replaced with facts the stem gives: he is 42, takes no medications and developed crackles only after the toxic inhalation | Medium |
| asthma-copd-38 | q2 | option, explanation | Distractor "Double the prednisone dose" assumed prednisone had been given, but the stem gives no steroid and q3 asks for the first steroid order. Replaced with "prednisone 100 mg PO daily" (double the GINA adult dose of about 50 mg), and the explanation now says so. "He has all three" (fever, purulent sputum, pneumonia) now names the stem's actual finding, rusty sputum | Medium |
| asthma-copd-33 | stem, q1 | stem, explanation | The deciding threshold is PaO2 60 mmHg or less (severe). The stem gave SpO2 88% with PaO2 64 mmHg, which predicts an SaO2 of about 91% (Severinghaus, corrected for pH 7.37 and PaCO2 49). An SpO2 of 88% usually means a PaO2 near 56, which would make him severe. PaO2 set to 62 mmHg (predicted SaO2 about 90%), still above 60, so the key (moderate) holds. Explanation updated to 62 | Low |
| asthma-copd-33 | stem | stem | q3 rejects furosemide because "he has no signs of heart failure", but the stem gave no edema finding. Added "no leg edema" | Low |
| asthma-copd-41 | vitals | o2sat | SpO2 90% with PaO2 58 mmHg at pH 7.31 and PaCO2 62 predicts an SaO2 of about 86%. SpO2 set to 88%. No question depends on it | Low |
| asthma-copd-40 | q3 | explanation | "She believes it does not work because she expects fast relief" attributed a belief the stem never gave (she says only that neither inhaler works). Reworded to what the stem supports | Low |
| asthma-copd-37 | q1 | explanation | "Pinpoint pupils" for pupils the stem gives as 2 mm. Now "2 mm pupils" | Low |
| asthma-copd-49 (review-extra) | q1 | explanation | Same "pinpoint pupils" wording. Same fix | Low |

## Key changes

- asthma-copd-48 q1 (review-extra): before "Increase the bagging rate" (index 3), after "Disconnect from the bag" (index 1). The key contradicted its own explanation and the matching question in asthma-copd-26.
- No key in asthma-copd.ts changed. The asthma-copd-17 question swap moves no key text. Single key positions are unchanged.

## Recomputed numbers (script)

All computed in a Python script in the scratchpad. Every value matches the stem and explanation unless listed under Fixes.

- PRAM (TREKK items: suprasternal 0 or 2, scalene 0 or 2, air entry 0 to 3, wheeze 0 to 3, SpO2 0 to 2). asthma-copd-20: 2 + 2 + 2 + 2 + 2 = 10, severe. asthma-copd-25 q1: expiratory wheeze 1, SpO2 95% 0, others 0, total 1. asthma-copd-36: 2 + 2 + 3 (minimal air entry) + 3 (faint wheeze with minimal air entry, silent chest category) + 2 = 12. asthma-copd-47: 2 + 0 + 1 + 1 + 1 (SpO2 93%) = 5, moderate.
- Peak flow percentages. asthma-copd-21: 210/600 = 35%, 390/600 = 65%, 450/600 = 75%. asthma-copd-32: 330/440 = 75%, 250/440 = 56.8% (stated 57%), 400/440 = 91%. asthma-copd-35: 330/420 = 79%, 400/420 = 95%. asthma-copd-43: 360/560 = 64%, 480/560 = 86%. asthma-copd-46 q2: 150/380 = 39.5%, keyed 40%.
- Blood gases, Henderson-Hasselbalch pH from the stated HCO3 and pCO2. asthma-copd-19 q3: 7.29 (stated 7.29). asthma-copd-21 q1: 7.28 (stated 7.29). asthma-copd-22: 7.27 (7.27). asthma-copd-37 and asthma-copd-49: 7.24 (7.24). asthma-copd-41: 7.32 (7.31). asthma-copd-45: 7.31 (7.30), baseline 7.41. All within 0.012, which is rounding.
- Implied HCO3 where only pH and pCO2 are given: asthma-copd-22 q3 35.0, asthma-copd-26 q3 28.1, asthma-copd-31 q3 28.1, asthma-copd-33 27.4, asthma-copd-37 q3 30.6, asthma-copd-41 q3 33.5, asthma-copd-42 24.0, asthma-copd-45 q3 33.5. All physiologically plausible and consistent with the earlier gas.
- Compensation. asthma-copd-21: Winter's formula 1.5 x 14 + 8 = 29 plus or minus 2, pCO2 31 at the upper edge, so compensation is appropriate. asthma-copd-19: HCO3 33 lies between acute (27) and chronic (35) expectation, acute on chronic as taught. asthma-copd-22: HCO3 37 between 28 and 39, acute on chronic. asthma-copd-45 q1: pCO2 rise 52 to 70 = 18, expected acute HCO3 rise 1.8, actual rise 2, as the explanation states.
- SpO2 against PaO2 (Severinghaus with pH and PaCO2 correction). asthma-copd-42: PaO2 57 predicts 88%, stated 89%, consistent. asthma-copd-33 and asthma-copd-41 fixed as above.
- Wells, asthma-copd-44: PE most likely 3, pulse 118 above 100 1.5, previous DVT 1.5, hemoptysis 1, total 7.0. High on the three-tier scheme (above 6). PERC fails on pulse, SpO2, hemoptysis, previous DVT and estrogen, as stated. The Thrombosis Canada table reads "PE likely >4.5", which the explanation quotes as written.
- GOLD Rome criteria, asthma-copd-33: dyspnea 7, rate 26, pulse 102, SpO2 88% (6 below usual 94%), CRP 46, five of five, moderate. asthma-copd-41: PaO2 58 and PaCO2 62 with pH 7.31 meet severe.
- Weight doses. Dexamethasone 0.6 mg/kg (maximum 12 mg): 7.1 kg 4.26 (option 4.3), 14 kg 8.4, 17 kg 10.2, 12 kg 7.2, and 27, 22, 32 and 52 kg all capped at 12 mg. Distractors: 16.8 mg and 14.4 mg and 20.4 mg are 1.2 mg/kg, 3.2 mg and 1.2 mg and 1.7 mg are 0.1 mg/kg. Prednisolone 64 mg for 32 kg is 2 mg/kg, 60 mg for 12 kg and 85 mg for 17 kg are 5 mg/kg. Hydrocortisone 8 mg/kg: 112 mg for 14 kg, 256 mg for 32 kg. Methylprednisolone 2 mg/kg for 14 kg is 28 mg, and 80 mg is 2.86 times that. Magnesium 50 mg/kg (maximum 2 000 mg): 1 100 mg for 22 kg, 1 600 mg for 32 kg, 2 000 mg is 62.5 mg/kg and 320 mg is 10 mg/kg for 32 kg. Epinephrine 0.32 mg IM is 0.01 mg/kg for 32 kg. Salbutamol 5 puffs or 2.5 mg under 20 kg (asthma-copd-20 at 14 kg, asthma-copd-47 at 17 kg) and 10 puffs at 20 kg or more (asthma-copd-25 at 27 kg, asthma-copd-34 at 22 kg). Ipratropium 250 mcg nebulized at all weights.
- Adult doses and totals. asthma-copd-21: 7 x 5 mg = 35 mg salbutamol. asthma-copd-38 q3: methylprednisolone 125 mg every 6 hours = 500 mg a day, about 625 mg prednisone, 12.5 times 50 mg ("more than ten times"). asthma-copd-31 q4: furosemide 80 mg IV is twice the 40 mg oral dose.
- NIV settings, asthma-copd-45 q3: IPAP 10 and EPAP 5 gives pressure support 5. IPAP 10 and EPAP 10 gives 0. IPAP 5 and EPAP 10 is inverted. Explanation matches.
- Timelines. asthma-copd-25: arrival 01:00, three doses by about 01:40, last salbutamol 03:30, now 05:30, which is 2 hours as stated. asthma-copd-16: coryza three days, noisy breathing one day. asthma-copd-22 and asthma-copd-41 gas trends (7.27 to 7.31, 7.31 to 7.25) match their explanations.

## Other checks

- Format: stems open correctly (six open with "You are working in ..." for a community or rural setting), vitals are in the vitals field, no patient names, prompts start "Which of the following" and end with "?", options are in order, no absolute words, no cross references. Stem lengths run 67 to 112 words.
- Keyed answers are not described as wrong in any explanation.
- GINA 2026 Box 12-1 was read for asthma-copd-39 q1. Severe in children 5 years and younger includes SpO2 below 92%, speech in words and a respiratory rate above 40/minute, which matches the key.

## Sources verified

- Thrombosis Canada. Pulmonary embolism (PE): diagnosis (PDF, read in full): https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf. Wells thresholds, PeGeD and the 4-hour anticoagulation rule confirmed.
- GINA 2026 Strategy Report (PDF, Box 12-1 read): https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf
- The TREKK PDFs returned an HTML page and could not be read. TREKK doses were checked against the Lens A record and standard TREKK values.

## Needs physician decision

1. asthma-copd-48 and asthma-copd-49 (review-extra) are copies of asthma-copd-26 and asthma-copd-37 with the same stems. They would fail the near-duplicate stem test if merged. Do not add them to the batch.
2. Key feature mapping is loose for three questions: asthma-copd-27 q3 (analgesic choice in aspirin-exacerbated respiratory disease, tagged key feature 8), asthma-copd-29 q3 (changing the eye drops, tagged key feature 8) and asthma-copd-16 q3 (admission for hypoxemic bronchiolitis, tagged key feature 3). None fits another key feature better, so I left them. Confirm the tags.
3. asthma-copd-33 now turns on a PaO2 of 62 mmHg, 2 mmHg above the severe threshold. Confirm that the margin reads as intended.

## Summary

- 34 SAMPs reviewed (32 in the batch and 2 extra), 117 questions.
- 14 fix rows across 11 SAMPs. By category: 1 key change (asthma-copd-48 q1), 1 invented lab value removed (asthma-copd-49 q2), 1 cueing fix by question order (asthma-copd-17), 5 explanation claims not supported by the stem (asthma-copd-27, 30, 33, 40, 44), 1 distractor that assumed an untold fact (asthma-copd-38), 2 blood gas and oximetry mismatches (asthma-copd-33, 41), 1 distractor without a reason (asthma-copd-44 q2) and 2 wording fixes (asthma-copd-37, 49).
- Most serious: the asthma-copd-48 key contradicting its own explanation, the invented lactate in asthma-copd-49, and the asthma-copd-17 lead-in that gave away the next answer.
- All PRAM scores, peak flow percentages, the Wells score, weight-based doses and NIV settings were correct.
- SAMP ids with a defect: asthma-copd-17, asthma-copd-27, asthma-copd-30, asthma-copd-33, asthma-copd-37, asthma-copd-38, asthma-copd-40, asthma-copd-41, asthma-copd-44, asthma-copd-48, asthma-copd-49.
- Checks: `npx tsc --noEmit -p . | grep samps/s25` is clean, and `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 675 of 675.
