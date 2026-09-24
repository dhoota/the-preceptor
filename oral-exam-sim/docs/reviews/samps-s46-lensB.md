# SAMP review: batch s46, pediatric fever

Lens: B (internal consistency and numbers).

Scope: `src/samps/s46/pediatric-fever.ts` (pediatric-fever-16 to pediatric-fever-47) and `src/samps/s46/review-extra.ts` (pediatric-fever-48 and pediatric-fever-49). I checked each SAMP myself, stem, updates, options and every explanation sentence. I did not rely on the Lens A report. Every SAMP stays `reviewed: false`.

Gates after edits: `npx tsc --noEmit -p . | grep samps/s46` shows nothing. `SAMP_BATCH=s46 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 687 of 687. The extra file is not part of the batch index, so the tests do not cover it. It compiles cleanly.

## Main finding

The Lens A report says it fixed the two planted defects in `review-extra.ts`, the wrong key in pediatric-fever-48 q1 and the invented lactate in pediatric-fever-49 q2. Neither fix was in the file. I compared each extra SAMP field by field against its twin in the main file (pediatric-fever-26 and pediatric-fever-37) with a script. Those two were the only differences, and both are now fixed.

## Recomputation

A script recomputed every number in the batch. All of them matched the text except where noted in the fix table.

- Antipyretics: acetaminophen 15 mg/kg with a daily maximum of 75 mg/kg, and ibuprofen 10 mg/kg with a daily maximum of 40 mg/kg. Checked in pediatric-fever-17 q4 (4.9 kg), pediatric-fever-18 q4 (5.4 kg, 80 mg/mL drops, 405 mg reached by the sixth hourly dose), pediatric-fever-25 q3 (10.5 kg, 105 mg, 420 mg reached by the fourth dose every 2 hours), pediatric-fever-28 q3 (21 kg, 315 mg, 1575 mg passed by the second 1 g dose), pediatric-fever-31 q3, pediatric-fever-33 q3, pediatric-fever-34 q2, pediatric-fever-35 q4 (6 mL of 160 mg/5 mL is 192 mg, 975 mg passed by the sixth dose every 2 hours), pediatric-fever-36 q4 (960 mg is twice 480 mg), pediatric-fever-42 q1 to q3 (80 mg is 7.3 mg/kg, 825 mg maximum, and 330, 550 and 660 mg are 30, 50 and 60 mg/kg) and pediatric-fever-47 q3. Every per-kg figure in the explanations is correct.
- Antibiotics and other drugs: gentamicin in pediatric-fever-16 q3 (12.8, 16, 19.2 and 24 mg are 4, 5, 6 and 7.5 mg/kg, and 8 mg every 12 hours is 5 mg/kg/day). Ceftriaxone and vancomycin in pediatric-fever-20 q3 (460, 230 and 69 mg), pediatric-fever-23 q2 (2 g and 600 mg, and 2 g of vancomycin is 3.3 times the dose) and pediatric-fever-45 q3 (400 and 120 mg, 480 mg daily, 1.6 g is 200 mg/kg). Amoxicillin in pediatric-fever-41 q3 (1050 mg capped at 1 g, and 250 mg is 11.9 mg/kg). Acyclovir in pediatric-fever-40 q2 (140 mg). IVIG in pediatric-fever-27 q3 (14.4 g, 2.88 g a day, 0.1, 1 and 4 g/kg). Toxicology doses in pediatric-fever-31 (bicarbonate 1 mmol/kg, physostigmine 0.02 mg/kg) and pediatric-fever-33 (midazolam 0.1 mg/kg).
- Fluids: pediatric-fever-22 q4 (300 mL is 20 mL/kg, and 1 L is 67 mL/kg) and pediatric-fever-46 (45, 180 and 540 mL are 5, 20 and 60 mL/kg, two boluses are 40 mL/kg, and maintenance is 36 mL/hour by 4-2-1).
- Hypotension limits: systolic BP below 70 mmHg under 1 year, below 70 + 2 x age from 1 to 10 years, and below 90 mmHg above 10 years. No stem BP is hypotensive: 22 (98, limit 76), 23 (112 and 104, limit 90), 24 (96, limit 88), 26 (92, limit 78), 28, 29, 31, 33, 34 (82, limit 73), 39, 41, 44, 45 (96, limit 70) and 46 (78, limit 70). No explanation calls any of them hypotensive. Updates that say "now hypotensive" (26 q4, 48 q4) give no number, which is consistent.
- Phoenix (pediatric-fever-24 q2): MAP (96 + 2 x 54)/3 = 68 mmHg scores 0 at 9 years. Lactate 5.8 mmol/L scores 1 cardiovascular point. Platelets 88 x 10^9/L score 1 coagulation point. INR 1.1 scores 0. SpO2 91% on room air with no respiratory support scores 0. The total is 2 with a cardiovascular point, which is septic shock. The key is correct.
- MAS 2016 (pediatric-fever-29 q3): ferritin 9200 is above 684. Platelets 130 are 181 or less. AST 210 is above 48. Triglycerides 3.4 mmol/L are above 1.76 mmol/L (156 mg/dL x 0.01129). Fibrinogen 1.3 g/L is 3.6 g/L or less. All four supporting features are present, as stated.
- Other: CSF correction in pediatric-fever-20 q2 (9000/877 = 10.3, corrected 3.7, or 5 by 1000:1, both at or below 9). Weight loss in pediatric-fever-30 q1 (6/58 = 10.3%). Kawasaki supplemental criteria in pediatric-fever-27 q2 (four met: albumin 28, ALT 64, WBC 17.8 and urine 15 cells/hpf. Platelets of 420 are correctly not counted).
- Ages and timelines: 5 weeks is 35 days, 6 weeks is 42 days, 7 weeks is 49 days and 10 weeks is 70 days, and each group matches the CPS age band used. Fever durations and update timings agree in every SAMP, with the exceptions below.

## Table of fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| pediatric-fever-48 | q1 | correct | **Planted defect, still present.** The key was index 0, "Age older than 3 years", which its own explanation rejects. Changed to index 3, "Fever with a central venous catheter" | high |
| pediatric-fever-49 | q2 | explanation | **Planted defect, still present.** "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" was invented. The case gives no blood gas or lactate, and a lactate cannot confirm mononucleosis. Sentence removed | high |
| pediatric-fever-46 | q1, q3 | keyFeature, alsoTopics | Both questions were mapped to pediatric fever key feature 3 (early broad spectrum antibiotics). Neither tests antibiotics. q1 tests the choice and volume of resuscitation fluid, and q3 tests the choice of vasoactive drug. Remapped to shock key features 3 and 7, and `alsoTopics: ["shock"]` added. Pediatric fever key feature 3 is still tested many times in the batch | high |
| pediatric-fever-27 | q1 | explanation | "Measles causes cough, coryza and a spreading rash, none of which he has." The stem never says whether he has cough or coryza. Now rejects measles only on the rash he does not have | medium |
| pediatric-fever-27 | q4 | explanation | "His next measles and varicella doses" suggests earlier doses, but at 5 months he has had none. Now reads "first". "An early measles dose given now" did not match the option, which says "at 6 months". Corrected. The delay is now stated as 11 months after the infusion | medium |
| pediatric-fever-32 | q1 | explanation | It said sustained ankle clonus alone meets the Hunter criteria. Ankle clonus elicited on examination is inducible clonus, which meets Hunter only with agitation or diaphoresis. Now names the two criterion pairs she actually meets: inducible clonus with agitation and diaphoresis, and tremor with hyperreflexia | medium |
| pediatric-fever-18 | q1 | explanation | "About half of infants have a fever after routine vaccines" has no source in the cited CPS statement. Softened to "Fever is common after routine vaccines" | low |
| pediatric-fever-20 | q2 | explanation | The first sentence said "fewer than 100 000 red cells/mm3" and the last said "100 000 red cells/mm3 or fewer". The CPS says correction should not be used for samples with more than 100 000. The two sentences are now the same | low |
| pediatric-fever-19 | q1 | update | The update was 9 words, below the 10 word minimum in SAMP_SPEC section 5. Now reads "A nasopharyngeal swab sent at triage is positive for respiratory syncytial virus" | low |

## Key changes

- pediatric-fever-48 q1 (review-extra): before, index 0 ("Age older than 3 years"). After, index 3 ("Fever with a central venous catheter"). Reason: the explanation supports only the catheter option and rejects age outright. The twin question pediatric-fever-26 q1 keys index 3.
- No key in the main file changed. Single-question key positions stay at 19, 18, 23, 24 and 19 of 103 (at most 22%), and the key is the single longest option in 27% of them.

## Sources verified

- CPS febrile infant statement (Burstein et al. 2024, updated 2026): https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days. Checked against the batch text:
  - The HSV risk score counts a triage temperature of 38.0°C or more, or below 36.4°C (pediatric-fever-21 q1).
  - The traumatic tap ratio is 877:1, or 1000:1, and is not used above 100 000 red cells/mm3 (pediatric-fever-20 q2).
  - Pleocytosis is more than 15 cells/mm3 at 28 days or younger and more than 9 cells/mm3 above 28 days (16 q2, 20 q2).
  - Gentamicin is 4 mg/kg for 0 to 7 days and 5 mg/kg for 8 to 28 days. Ceftriaxone is 100 mg/kg and cefixime 8 mg/kg (16 q3, 17 q3, 20 q3).
  - Observation is 24 hours for low risk and 36 hours for high risk (20 q4). A positive urinalysis with normal markers is low risk (17 q2).
  - Procalcitonin of 0.5 ng/mL or less is low risk. The Step by Step limits are ANC 10 x 10^9/L and CRP 20 mg/L (17 q2, 20 q1).
  - Post-immunization risk is 0.6% versus 8.9% (18 q1). For ill infants, the LP is deferred without delaying antibiotics (21 q4).
- Other citations were checked by Lens A. I did not repeat that work beyond what the numbers needed.

## Needs physician decision

1. **pediatric-fever-48 and pediatric-fever-49 (review-extra).** Apart from the planted defects, they are copies of pediatric-fever-26 and pediatric-fever-37. They would fail the near duplicate stem test and should not be added to the bank.
2. **Weak key feature fits, left unchanged.**
   - pediatric-fever-43 q2 (antipyretics do not prevent febrile seizures) is mapped to key feature 8, "dose antipyretics by weight".
   - pediatric-fever-40 q2 (IV acyclovir for eczema herpeticum) is mapped to key feature 3, "antibiotics for suspected sepsis".
   - No pediatric fever key feature fits either question better. Confirm, or remap to another topic.
3. The Lens A items under "Needs physician decision" still apply. They are 18 q2, 19 q2, 17 q3 and 20 q3, and 31 q4.

## Summary

- SAMPs with a defect: pediatric-fever-18, pediatric-fever-19, pediatric-fever-20, pediatric-fever-27, pediatric-fever-32, pediatric-fever-46, pediatric-fever-48, pediatric-fever-49. That is 8 of 34.
- 9 fixes (table rows). By category:
  - Planted defects in the extra file that the Lens A report said were fixed but were not: 2 (48 q1 key, 49 q2 invented lactate).
  - Key feature mapping: 1 row covering 2 questions (46 q1 and q3).
  - Claims that go beyond the stem or source: 3 (27 q1, 18 q1, 32 q1 criteria count).
  - Timeline and wording that do not match the options: 1 (27 q4).
  - Threshold wording: 1 (20 q2).
  - Format: 1 (19 q1 update length).
- Key changes: 1 (pediatric-fever-48 q1).
- Every dose, bolus, BP limit, Phoenix score, MAS criterion, unit conversion, age and duration in the batch was recomputed by script and is correct.
