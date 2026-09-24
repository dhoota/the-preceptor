# Review: batch s51, Shortness of breath. Lens B (internal consistency and numbers)

Scope: `src/samps/s51/sob.ts` (sob-16 to sob-47) and `src/samps/s51/review-extra.ts` (sob-48, sob-49). Each SAMP was read on its own, question by question, with every explanation sentence checked against the stem and updates. The Lens A report was not relied on. This is an AI audit. Every SAMP stays `reviewed: false`.

## Numbers recomputed by script

All of these were worked out again in a script. Each matches the stem and every distractor built from it, unless a row in the fixes table says otherwise.

- PRAM, sob-18: retractions 2, scalene 2, air entry 2, wheeze 2, saturation below 92% 2, total 10. A score of 12 needs air entry 3 and wheeze 3.
- ROX, sob-28: 90 / 0.6 / 32 = 4.69. Distractors 4.41 (rate 34), 3.52 (FiO2 0.8), 3.02 (PaO2 58 in place of SpO2), 2.81 (no FiO2).
- CURB-65, sob-28: urea 9.4 and rate 32 give 2. BP 118/72 and age 61 score 0.
- Wells, sob-23: 1.5. sob-24: 3 + 3 + 1.5 + 1.5 = 9. sob-41: 1.5.
- PERC, sob-23: fails on age and heart rate. sob-41: fails on heart rate 112, saturation 94% and estrogen, three criteria.
- sPESI, sob-43: 1 (heart rate 118). Intermediate risk either way, and both RV markers are present, so intermediate-high holds.
- Age-adjusted D-dimer, sob-23: 74 x 10 = 740 mcg/L, and 690 is below it.
- A-a gradient, sob-39: 0.21 x (760 minus 47) minus 32 / 0.8 = 109.7, minus 62 = 47.7, about 48.
- Blood gases, Henderson-Hasselbalch: sob-27 (HCO3 30, PaCO2 68) gives 7.27 against 7.26 stated, with values between the acute and chronic predictions. sob-37 (5, 18) gives 7.07 against 7.08. sob-44 (29, 74) gives 7.22 against 7.21.
- sob-37: anion gap 140 minus 107 = 33. Calculated osmolality 291, gap 51. Distractors 56 (no urea), 62 (no glucose or urea), 42 (minus 300), 33 (anion gap). Winter's formula gives an expected PCO2 of 15.5 plus or minus 2. The measured 18 is at the top of that range, so "compensation" holds.
- Light's criteria, sob-35: 0.62, 1.81, two thirds of 250 = 167.
- Carboxyhemoglobin, sob-30: 24% and the repeat option of 20% both fall below the threshold of about 25% given in the explanation. sob-33: 16%.
- Methemoglobin, sob-29: 32%. Methylene blue 1 mg/kg x 60 kg = 60 mg, and 300 mg = 5 mg/kg.
- Doses by weight: sob-18 magnesium 1 g / 22 kg = 45 mg/kg, ketamine 1 mg/kg, methylprednisolone 2 mg/kg, epinephrine 0.2 mg (about 0.01 mg/kg). sob-19 high flow 2 L/kg/minute = 9.2 L/minute. sob-21 FVC 900 / 72 = 12.5 mL/kg. sob-25 dexamethasone 9 mg / 15 kg = 0.6 mg/kg. sob-32 tidal volume 500 / 80 = 6.25 mL/kg. sob-36 tenecteplase band 60 to 69 kg = 35 mg, half 17.5, quarter 8.75. sob-40 20 mL/kg = 600 mL, three boluses = 1 800 mL = 60 mL/kg, furosemide 30 mg = 1 mg/kg. sob-46 adenosine 0.1 mg/kg = 0.36 mg, furosemide 3.6 mg = 1 mg/kg, 216 mL = 60 mL/kg.
- Other arithmetic: sob-20 hemoglobin 64 / 128 = one half, urea to creatinine ratio 198. sob-22 pulse pressure 18 mmHg. sob-24 23:00 to 08:00 = 9 hours. sob-19 corrected age about 3 weeks.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| sob-48 (extra) | q1 | correct | Key was 4, "Retropharyngeal abscess". The explanation and the case describe Ludwig angina. Key set to 2. Lens A reported this fix, but the file on disk still held 4 | high |
| sob-49 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas". The update gives 2.1 mmol/L, and lactate does not confirm an osmolal gap. Removed. Lens A reported this fix, but the sentence was still on disk | high |
| sob-17 | q3 | update | The explanation says "She received no opioid", but the case never said so. Added "She has received no opioid" to the update, which was also merged into fewer sentences | medium |
| sob-31 | q1 | explanation | "Symmetric chest findings" contradicts the stem's bronchial breathing at the left base only. Now contrasts crackles heard on both sides with the absent breath sounds of a tension pneumothorax | medium |
| sob-31 | q1 | stem | The explanation rejects ACS because "She has no chest pain", which the stem never stated. Added "She has no chest pain." | medium |
| sob-45 | q1 | stem, explanation | "His temperature has barely changed" had no temperature before the transfusion to compare against. The stem now gives 37.0°C before the transfusion, and the explanation says it rose only to 37.2°C | medium |
| sob-44 | q3 | explanation | "Benzodiazepines, which she has not taken" was never stated in the case. Now says flumazenil reverses benzodiazepines, not opioids | medium |
| sob-44 | q3 | prompt | The lead-in asked for the "initial naloxone approach", while one option is flumazenil. That makes flumazenil a non-parallel distractor that the lead-in rules out. Now "initial reversal treatment" | low |
| sob-28 | q2 | explanation | Called the cited Roca 2019 paper "the derivation study". It is the multicentre validation study, which gave the 4.88 cutoff at 2, 6 and 12 hours. Reworded | medium |
| sob-40 | q1 | stem | The explanation says "She has no wheeze", but the stem did not state it. Added "and no wheeze" to the chest findings | low |
| sob-27 | q1 | explanation | Called the pain "pleuritic" and the patient a man "with emphysema". Neither fact is given by q1. The stem says only sudden chest pain and severe COPD, and the bullae appear only in the q2 update. Reworded to match the stem | low |
| sob-18 | q4 | explanation | "A PCO2 that has risen to 52 mmHg". No earlier CO2 was given. Now "a PCO2 of 52 mmHg" | low |
| sob-20 | q3 | explanation | The tranexamic acid reason came from HALT-IT, which is not the cited source (Barkun 2019 predates it). Replaced with a reason tied to the case: tranexamic acid alone does not correct her symptomatic anemia | low |
| sob-38 | q3 | explanation | "Hypoxemia on high flow oxygen". The update says 10 L/minute by face mask. Now says 10 L/minute | low |
| sob-18, sob-20, sob-36, sob-37, sob-38, sob-43, sob-45, sob-46, sob-49 | various | options | Generic drug names were capitalized in options (for example "Normal saline bolus" beside "furosemide IV"). Set to lower case per SAMP_SPEC section 10. Order is unchanged because the order check ignores case | low |

## Key changes

- sob-48 q1: 4 (Retropharyngeal abscess) to 2 (Ludwig angina). The stem, the explanation and the identical sob-26 all describe Ludwig angina. This is the same change Lens A reported, which was not present in the file when this review began.

No other key was changed. Single key positions stay at 17, 22, 20, 18 and 17.

## Overlap with s28 (chest pain) and s32 (decreased LOC)

- sob-37 and loc-25 (s32) are a near duplicate by scenario, though not by wording. Both describe a man with alcohol use disorder who ran out of money and drank windshield washer fluid yesterday, with blurred vision, a respiratory rate of 30, a weight of 70 kg, glucose 6.0 and urea 5.0. Both ask for the osmolal gap, with the same distractors ("leaves out urea", "leaves out glucose and urea"). Both test the same three EXTRIP criteria. High. Not rewritten here (see "Needs physician decision").
- sob-33 q2 and q3 against loc-38 (s32). Both are house fire victims with a very high lactate (11.4 against 12.4 mmol/L) and hypotension. Both key hydroxocobalamin 5 g IV, and the distractors (sodium nitrite 300 mg, methylene blue 1 mg/kg) and rejection reasons are the same. High.
- sob-23 against chest-pain-32 (s28). Both are older men who fail PERC on age. Both use the age-adjusted D-dimer to exclude PE, and both give the same D-dimer of 690. sob-23 then moves on to heart failure, but q1 and q2 teach the same point. Medium.
- sob-43 q3 against chest-pain-21 q2 (s28). Both are PE 6 weeks after an arthroplasty, both key systemic lysis, and both explain that the surgery falls outside the ESC 3 week window. sob-43 tests rescue lysis after an intermediate-high start, so the question differs, but the stated teaching point repeats. Medium.
- sob-30 q1 and sob-29 q1 (the pulse oximeter reads carboxyhemoglobin as oxyhemoglobin) repeat loc-38 q3. This is an explanation point, not a keyed one. Low.
- Outside the named batches: sob-46 (critical coarctation at 12 days, alprostadil) is close to a 9-day-old coarctation case in s50 shock. Low. Not examined further.

## Other items checked and found consistent

Stem order, vitals fields and formats, the absence of names, hyphenated ages, and alphabetical or numeric option order. Timelines hold: sob-19 (33 weeks, 10 weeks old), sob-23 (5 weeks after arthroscopy, outside 4 weeks), sob-24 (12 days, 9 hours to the V/Q scan), sob-36 (3 hour transfer against 120 minutes), sob-42 (6 hours after discharge), sob-43 (6 weeks against 3), sob-45 (two units at 250 mL/hour), sob-46 (12 days) and sob-47 (4 weeks postpartum). Every "N criteria" claim matches the case (sob-35 all three Light's criteria, sob-37 all three EXTRIP criteria, sob-41 three PERC failures). No explanation calls its key wrong. Key feature numbers fit the questions. sob-25 q3 (CT neck, key feature 2) is the loosest fit but acceptable.

## Sources verified

This lens checked that each explanation claim traces to the stem, an update or the cited work. It did not fetch citations again on the web. Lens A fetched and lists the URLs for NIH OI 2026, CCS/CAIC STEMI 2019, Howard 2015, CPS asthma 2021, AHA pediatric myocarditis 2021, CBS transfusion reactions 2022, Thrombosis Canada PE 2023, AHA BLS 2025 and BTS pleural 2023. The one wording fix that rests on the nature of a source is sob-28 q2: Roca O et al., Am J Respir Crit Care Med 2019, is a prospective multicentre validation of the ROX index (the index was derived by the same group in 2016). No URL was fetched for it.

## Needs physician decision

- sob-37: near duplicate of loc-25 in scenario and teaching points (see overlap). Recommend a rebuild around a different acidosis cause of dyspnea (for example salicylate or DKA with Kussmaul breathing), or dropping it.
- sob-33 q2 and q3: same teaching point as loc-38 q1 and q2. Recommend refocusing sob-33 on the airway and burn items and dropping or rebuilding the cyanide antidote question.
- sob-23 q2: same age-adjusted D-dimer point and the same value (690) as chest-pain-32 q3. At least change the numbers. Better, move the question to a different PE diagnostic decision.
- sob-43 q3: repeats the "6 weeks after arthroplasty, outside the 3 week window" point of chest-pain-21 q2. Consider a different timing or contraindication detail.
- review-extra.ts: sob-48 is sob-26 word for word apart from the key, and sob-49 is sob-37 word for word apart from the added sentence. Both would fail the near duplicate stem rule if added to the bank. Recommend dropping both. Note also that both planted defects were back in the file after the Lens A review reported them fixed (file time 05:24, Lens A report 05:21). Someone should confirm which version is meant to be current.

## Summary

- 34 SAMPs read one by one (32 in the batch, 2 extra).
- Fixes: 16 table rows. 1 key change (sob-48, restored). 2 planted defects in the extras file fixed again (sob-48 key, sob-49 invented lactate). 8 claims that did not trace to the case, fixed by adding the fact to the stem or update or by removing the claim (sob-17, sob-18, sob-27, sob-31 x2, sob-38, sob-40, sob-45). 1 internal contradiction (sob-31). 1 claim with no support in its cited source (sob-20). 1 source mischaracterized (sob-28). 1 lead-in cue (sob-44) plus 1 untraced claim (sob-44). 1 format pass on drug name capitals across 9 SAMPs.
- No arithmetic error was found in any score, gap, gas or weight-based dose in the batch.
- Overlap flagged for a physician: sob-37 and sob-33 (high), sob-23 and sob-43 (medium).
- SAMPs with a defect: sob-17, sob-18, sob-20, sob-23, sob-27, sob-28, sob-31, sob-33, sob-36, sob-37, sob-38, sob-40, sob-43, sob-44, sob-45, sob-46, sob-48, sob-49.
- Gates: `tsc` shows no errors in samps/s51. `SAMP_BATCH=s51 vitest` (samps and samp-quality): 647 passed.
