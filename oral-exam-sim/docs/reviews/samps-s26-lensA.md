# Review of batch s26 (burns), Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: `src/samps/s26/burns.ts` (burns-16 to burns-38) and `src/samps/s26/review-extra.ts` (burns-39 and burns-40). Every question, option and explanation was read against its stem. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| burns-39 (extra) | q1 | correct | Key was "Heparin infusion" (index 2) while the explanation argues for escharotomy. Loss of Doppler signals under circumferential eschar calls for escharotomy. Key restored to index 0. | High |
| burns-40 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives, and a lactate cannot confirm abdominal compartment syndrome. Sentence removed. | High |
| burns-21 | q2 | prompt, options, explanation | Antidote question nearly identical to loc-38 q2 (s32) and shock-39 q2 (s50): same fire, coma, lactate, hydroxocobalamin 5 g and nitrite distractors. Rebuilt to test empiric treatment without waiting for a cyanide level (Anseeuw 2013). Key "Give hydroxocobalamin 5 g IV now" stays at index 1. | High |
| burns-21 | q4 | prompt, options, explanation | Pulse oximeter question near verbatim to loc-38 q3 and shock-39 (same five options). Rebuilt to test ventilator FiO2 1.0 until carboxyhemoglobin clears, with the oximetry error as the reason SpO2 targets fail. Stem opening and title reworded away from loc-38. | High |
| burns-22 | q1 | whole question | Repeated multiple-trauma-28 q1 (s45): third floor jump from a burning building, early hypotension from bleeding, same five distractors. Question removed, later questions renumbered q1 to q3. | High |
| burns-20 | q3 | explanation | Said little tissue in the fingers can take a local injection and presented IV regional as the standard. McKee 2014 allows about 0.5 mL of calcium gluconate per phalanx, and names intra-arterial or Bier method routes for unrelenting pain. Rewritten. Key unchanged. | Medium |
| burns-20 | q4 | explanation | Systemic risk thresholds misquoted. McKee 2014: any burn with acid stronger than 50%, more than 5% TBSA at any strength, and inhalation or ingestion. Rewritten, the keyed options still hold. | Medium |
| burns-19 | q2 | explanation, source | Labial artery bleeding timing "usually 5 to 10 days" rested only on unverified Rosen. Hoffman 2017 gives 1 to 2 weeks (others to 3 weeks). Corrected and source changed to Hoffman 2017. Parental advice reworded to firm direct pressure. | Medium |
| burns-16 | q5 | explanation | Said ABA criteria for consultation with transfer include "any potentially deep burn". In the ABA 2025 table that item is under consultation only. Removed. | Medium |
| burns-37 | q3 | explanation | Said burns of the face and hands "each meet TREKK criteria". TREKK requires deep partial or full thickness for those sites, and his burns blanch (superficial partial). Rewritten to rest on the 10% TBSA criterion. | Medium |
| burns-24 | q4 | explanation | Cited "a deep burn of the face" as a TREKK criterion, but the stem gives partial thickness facial burns without depth. Removed, the inhalation plus 5% TBSA criterion stands. | Medium |
| burns-30 | q4 | explanation | Implied the "deep burns over joints" criterion applies, but his burns are red, blistered and moist. Poorly controlled pain was called a transfer reason, but ABA lists it under consultation. Rewritten. | Medium |
| burns-38 | q3 | stem, explanation | Explanation cited "no chest pain", absent from the stem, and listed pregnancy and "25% or more" as Hampson 2012 criteria. Hampson lists loss of consciousness, neurologic deficits, ischemic cardiac changes, significant metabolic acidosis or COHb above 25%. Added a normal ECG to the stem and aligned the list. | Medium |
| burns-27 | q2 | explanation | Said immune globulin is added "only" for an incomplete or unknown series. The CIG table also covers humoral immune deficiency, and it does not name burns, so the reasoning now rests on "not a clean minor wound". Key holds under either wound row. | Low |
| burns-30 | q2 | explanation, source | Ketamine 0.3 mg/kg was sourced to Romanowski 2020, which supports low dose ketamine but gives no dose. Added Motov 2015 (0.3 mg/kg IV over 3 to 5 minutes) as the question source. | Low |
| burns-23 | q2 | explanation, source | Escharotomy lines cited to ISBI 2016, whose text could not be reached. Verified against Streitz, Merck Manual 2025 (medial and lateral lines, spare the ulnar nerve at the elbow). Source added, ulnar nerve note added. | Low |
| burns-23 | q4 | explanation | Distractor 150 mL/hour had no reason. Added. | Low |
| burns-28 | q1 | explanation | "Age around 1 year is the peak age for accidental burns" implied age argues against abuse. Reworded: toddlers are the peak age for both, so age alone does not separate them. | Low |
| burns-34 | q3 | explanation | Form 1 test paraphrased loosely. Aligned to section 15(1): attempted or threatened self-harm plus a mental disorder likely to result in serious bodily harm. 72 hours confirmed. | Low |
| burns-22 | all | source | ATLS cited as 10th ed 2018. Updated to the 11th ed 2025, as used in s45. | Low |
| Rosen source | n/a | citation | Citation limited to the burns and electrical chapters, but it is also cited for acetaminophen screening (burns-34) and head CT (burns-18). Chapter phrase removed. | Low |

## Key changes

- burns-39 q1 (review-extra): before index 2 "Heparin infusion", after index 0 "Escharotomy of the arm". The old key contradicted its own explanation.
- burns-21 q4: the question was rebuilt, so the key moved from index 0 ("Carboxyhemoglobin read as oxyhemoglobin") to index 3 ("FiO2 1.0 until carboxyhemoglobin clears"). The new stem, options and explanation form one piece. burns-21 q2 was rebuilt with the key kept at index 1.
- burns-22 q1 deleted (key was index 0). Single key positions now stay within the 25% limit and every position is used (gates pass).

No other key was changed.

## Duplicate content in review-extra.ts

- burns-39 has the same stem, options and explanations as burns-23. The only difference was the wrong key.
- burns-40 has the same stem, options and explanations as burns-31. The only difference was the invented lactate sentence.

Even after the fixes, neither should enter the bank. Recommendation: reject both.

## Overlap with the bank

- Fixed: burns-21 (loc-38, shock-39) and burns-22 q1 (multiple-trauma-28), above.
- burns-20 repeats the scenario and all four teaching points of burns-03 in s04 (reviewed: night fingertip pain after a hydrofluoric acid product, history of chemical contact, gel, escalation, systemic risk). s53 also has a rust remover hand exposure. Flagged below.
- burns-31 q2 (abdominal compartment syndrome with rising airway pressure and oliguria) repeats multiple-trauma teaching in s45 and overlaps burns-07 in s04. q1, q3 and q4 are distinct.
- burns-25 q1 and burns-36 q1 (secure the airway before evolving facial edema, before a long transfer) overlap burns-11 and burns-13 in s04 and multiple-trauma-28 q2. Within the batch, burns-21, 24, 25 and 36 all key early intubation. Low concern, since the stems differ.
- burns-38 q3 overlaps hyperbaric criteria teaching in s04 burns-04 and s51. Low concern, since the key here is normobaric oxygen.
- The formula rate counted from the time of the burn is taught five times in the batch (burns-16, 17, 22, 25, 32) and in s50. It is the key feature itself, so this is only noted.

## Sources verified

- McKee D and colleagues. Plast Surg. 2014. Full text read on PMC: gel recipes (2.5%), calcium chloride prohibited, local anesthetic masks the pain endpoint, subcutaneous 0.5 mL per phalanx, intra-arterial for unrelenting pain, Bier method, systemic thresholds, delay up to 24 h below 20%. https://pmc.ncbi.nlm.nih.gov/articles/PMC4116323/
- TREKK Pediatric thermal burns, version 2.0, April 2025. PDF read in full: formula above 15% TBSA, 3 mL/kg at 12 and under, 2 mL/kg at 13 and over, D5RL by 4 2 1, urine 1 mL/kg/hour at 30 kg or less, cooling 20 minutes up to 3 hours, lengthwise cling wrap, avoid silver sulfadiazine, do not trim the tube, transfer criteria. https://cms.trekk.ca/wp-content/uploads/2023/11/2025_04_01-Burns-BLR-v2.0-final.pdf
- American Burn Association referral guidelines, 2025. Immediate consultation vs consultation columns confirmed, palm about 1%. https://ameriburn.org/resources/burnreferral/
- Cartotto 2024 ABA burn shock resuscitation, abstract: adults 20% TBSA or more, 2 mL/kg start, albumin, selective intra-abdominal and intraocular pressure, no transpulmonary thermodilution, no recommendation on vitamin C. https://pubmed.ncbi.nlm.nih.gov/38051821/
- Romanowski 2020 ABA pain guideline, full text: low dose ketamine as opioid adjunct, NSAIDs weighed against kidney function, dexmedetomidine as a sedative in intubated patients. No ketamine dose. https://pmc.ncbi.nlm.nih.gov/articles/PMC7703676/
- Motov S and colleagues. Ann Emerg Med. 2015. Ketamine 0.3 mg/kg IV. https://pubmed.ncbi.nlm.nih.gov/25817884/
- Hampson 2012. Full text is subscription only. The criteria list was confirmed through Rose JJ and colleagues (PMC5363978), which quotes it. https://pubmed.ncbi.nlm.nih.gov/23087025/ and https://pmc.ncbi.nlm.nih.gov/articles/PMC5363978/
- Canadian Immunization Guide, tetanus toxoid, modified 2026-06-03. Wound table read. Burns are not named. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Hoffman KA, Trigger CC. Clin Pract Cases Emerg Med. 2017. Labial artery bleeding 1 to 2 weeks, up to 25%. https://pmc.ncbi.nlm.nih.gov/articles/PMC5965444/
- Streitz MJ. Merck Manual, burn escharotomy, revised May 2025. https://www.merckmanuals.com/professional/injuries-poisoning/how-to-do-skin-soft-tissue-and-minor-surgical-procedures/how-to-do-burn-escharotomy
- Anseeuw 2013, abstract: enclosed space, altered consciousness, hypotension, lactate, empiric hydroxocobalamin. https://pubmed.ncbi.nlm.nih.gov/22828651/
- Arnoldo 2006: monitoring for loss of consciousness, abnormal ECG, arrhythmia. High voltage monitoring comes from secondary sources that cite it. https://pubmed.ncbi.nlm.nih.gov/16819345/
- Ontario Mental Health Act, section 15 wording and the 72 hour limit, through the OHA Form 1 FAQ and PsychDB. The statute page did not render. https://www.oha.com/Documents/Form%201%20Assessments%20Under%20the%20Mental%20Health%20Act.pdf
- ATLS 11th edition, launched 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- PubMed metadata confirmed for Borron 2007, Mintegi 2013, Walker 2015, Kemp 2014, Griffin 2020, Palao 2010, Bosch 2009, Martyn 2006 (abstract: receptor upregulation after burns).
- Not reachable: ABLS 2018 manual (print). The adult 0.5 mL/kg/hour target, avoiding boluses and hourly titration were confirmed through the Alaska 2021 state burn guideline that cites ABLS. Electrical targets vary (75 to 100 mL/hour, or 1 to 2 mL/kg/hour). ISBI 2016 full text (subscription). Rosen's (print): tar removal with mineral oil is supported by the tar burn literature, and the Baux score and revised Baux (+17 for inhalation) are standard.

## Recomputed numbers (all correct)

- burns-16: 27% TBSA, 3780 mL, 1890 mL over 6 h = 315 mL/hour. Distractors 236, 158, 473 and 630 check.
- burns-17: IN fentanyl 1.5 mcg/kg x 13 = 19.5 mcg. Lund and Browder 13 + 2 + 2 = 17%. 663 mL, 331.5 / 7 = 47 mL/hour.
- burns-22: 22.5% TBSA, 3600 mL, 1800 mL in 8 h.
- burns-23: 0.5 x 76 = 38 mL/hour.
- burns-24: hydroxocobalamin 70 mg/kg x 20 = 1400 mg.
- burns-25: 5100 mL, 2550 / 7 = 364 mL/hour.
- burns-28: ibuprofen 10 mg/kg = 100 mg.
- burns-30: ketamine 0.3 x 90 = 27 mg.
- burns-31: 7400 x 2 / (80 x 45) = 4.1 mL/kg per %TBSA.
- burns-32: 432 mL, 216 / 7 = 31 mL/hour. Maintenance 4 x 9 = 36 mL/hour. Urine 9 mL/hour.
- burns-33: Baux 79 + 27 = 106.
- burns-35: IN fentanyl 1.5 x 17 = 25.5 mcg.

## Needs physician decision

- burns-20: the whole SAMP repeats s04 burns-03 (reviewed: true) and overlaps s53. Key feature 6 is still covered by burns-29. Recommend replacing it with a new chemical scenario, or dropping it.
- burns-31 q2: keep or replace, given the s45 abdominal compartment syndrome item.
- burns-21 q2 and q4 and the deletion of burns-22 q1 are reviewer rebuilds and need a clinician read.
- burns-38 q3: the Weaver risk factors for sequelae include age 36 or older. Some centres would discuss hyperbaric oxygen for a 62-year-old. The key holds under the Hampson criteria.
- burns-20 q3: the key is intravenous regional calcium gluconate. McKee notes the Bier method "has not been widely adopted" and reserves intra-arterial calcium for unrelenting pain. The key is the best of the listed options. A physician may prefer to key intra-arterial.
- burns-36 q3: ABA 2020 names dexmedetomidine as a first line sedative in intubated burn patients. It is not an option, so the fentanyl and propofol key holds.

## Summary

Items reviewed: 25 SAMPs (23 main, 2 extra). Fixes: 21 rows. Plants or invented facts: 2 (both in review-extra). Rebuilt for overlap: 3 questions (burns-21 q2 and q4 rebuilt, burns-22 q1 removed). Guideline accuracy in explanations: 9. Sources added or corrected: 5 (Hoffman 2017, Motov 2015, Streitz 2025, ATLS 11th ed, Rosen scope). Key changes: 1 restored in review-extra, 1 through a rebuild, 1 deleted question. Gates: `npx tsc` prints nothing for s26, and `SAMP_BATCH=s26 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 516 of 516.

SAMP ids with a defect: burns-16, burns-19, burns-20, burns-21, burns-22, burns-23, burns-24, burns-27, burns-28, burns-30, burns-31 (overlap only), burns-34, burns-37, burns-38, burns-39, burns-40.
