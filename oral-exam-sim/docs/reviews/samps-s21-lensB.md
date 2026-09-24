# SAMP review. Batch s21, airway. Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: all 32 SAMPs in `src/samps/s21/airway.ts` (airway-16 to airway-47) and the 2 SAMPs in `src/samps/s21/review-extra.ts` (airway-48 and airway-49). Each SAMP was read on its own, every explanation sentence against its stem and updates. The Lens A report was not relied on. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| airway-48 (extra) | q1 | correct | Keyed index 4 "Nasal high-flow at 50 L/minute", which its own explanation rejects. The Lens A report says this was fixed, but the file on disk still held the wrong key. Key set to index 2 "Intubation and mechanical ventilation" | high |
| airway-49 (extra) | q2 | explanation | Invented fact. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is in no stem or update and supports nothing. The Lens A report says it was removed, but it was still on disk. Sentence removed | high |
| airway-30 | q3, q4 | question order, update | Timeline error. q3 said "He is intubated on the first attempt" and asked about transfers, then q4 said "He is ready for the paralytic" and asked which blocker to give. The paralytic question now comes before intubation (q3) and the transfer question after it (q4). The q3 update now also closes the BiPAP step from q2 (saturation plateaus at 95%) | high |
| airway-31 | stem vitals | vitals, explanation | The q1 explanation calls him hypotensive and q3 says propofol "would worsen his shock", but BP 82/48 mmHg in a 5-year-old is above the PALS limit of 70 + 2 x 5 = 80 mmHg. BP changed to 76/44 mmHg so the stated hypotension is true | high |
| airway-25 | q4 | explanation | Said the patient has "weak cough and bulbar weakness". This Guillain-Barre stem gives no bulbar signs and no cough finding. Now "a ventilated patient with neuromuscular weakness is prone to retained secretions" | medium |
| airway-37, airway-49 | q2 | stem, explanation | Explanation says "He is alert and cooperative", but the stem gives only GCS 14, which is not fully alert, and never says he cooperates. Stem now gives "GCS is 14 (E4 V4 M6). He is awake and cooperative but slightly confused." Explanation now says "awake and cooperative". Mirrored in the extra | medium |
| airway-45 | stem | stem | The q2 explanation rests on "after the rocuronium is reversed" and a sugammadex distractor, but the stem never named the blocker. Stem now says "rapid sequence intubation with rocuronium is performed" | medium |
| airway-33 | stem | stem | Mechanism contradicts itself. "Falling backward down 3 stairs and striking his forehead." A backward fall does not strike the forehead. Now "falling forward", which also fits the hyperextension fracture pattern in ankylosing spondylitis | medium |
| airway-40 | q1 | explanation | Called 35.9°C "mild hypothermia". Mild hypothermia starts below 35°C. Now "His temperature of 35.9°C is only slightly low" | medium |
| airway-28 | q1 | explanation | Said "worsening respiratory acidosis and hypoxemia after 40 minutes of BiPAP". The stem gives a single gas and a single saturation, so a trend is not shown. Now states the values (pH 7.16, pCO2 68 mmHg, saturation 86%) | medium |
| airway-41 | q2 | update | Explanation says "the faster ventilator rate brings her pH toward 7.5", but no update ever said the rate was changed after q1. Added the update "The ventilator rate is increased to 20/minute. Her pulse remains 118/minute and her BP is 104/66 mmHg." | low |
| airway-16 | q1 | explanation | Called the hoarse voice "new". The stem does not say whether it is new. Word removed | low |
| airway-46 | q1, q2 | options, correct | Key was the longest option in both questions (1.41 times the mean distractor). q1 key "Reduced respiratory system compliance" now "Reduced respiratory compliance" (position unchanged). q2 key "Ventilator off and hand-bag with oxygen" now "Hand-bag with 100% oxygen". The explanation already covers disconnecting the ventilator. Alphabetical order moves the q2 key from index 4 to index 1 | low |
| airway-30 | q3 (was q4) | options, correct | Doses were listed out of order (rocuronium 90 before 40, succinylcholine 150 before 110), as Lens A noted. Now ascending. Key moves from index 0 to index 1, and the answer is unchanged | low |
| airway-26, airway-48 | q2 | options, correct | "ketamine 150" before "ketamine 40" and "propofol 120" before "propofol 80". Now ascending within each drug. Key moves from index 1 to index 0, and the answer is unchanged. Mirrored in the extra | low |
| airway-42 | q3 | options | Ketamine and rocuronium combinations were out of dose order. Now ascending. Key index unchanged (1) | low |
| airway-24 | q3 | update | Update was 9 words, under the 10-word floor. Now "You decide to perform rapid sequence intubation with rocuronium after preoxygenation." | low |
| airway-35 | q3 | update | Update was 50 words, over the 45-word ceiling. Trimmed to 45 words with no change to the values | low |
| airway-16 q4, airway-31 q3, airway-38 q3, airway-40 q2 | as listed | explanation | Seven sentences, over the 3 to 6 limit. Two sentences merged in each, with no change of content | low |

## Key changes

- airway-48 q1 (review-extra): from index 4 ("Nasal high-flow at 50 L/minute") to index 2 ("Intubation and mechanical ventilation"). The explanation already argued for intubation.
- Position changes only, with the same keyed answer: airway-30 q3 index 0 to 1, airway-26 q2 and airway-48 q2 index 1 to 0, airway-46 q2 index 4 to 1 (key reworded shorter).

## Numbers recomputed by script

All correct as written:

- Lidocaine for awake intubation, airway-19 q4: 9 x 70 = 630 mg (key). 9 x 82 = 738, 4.5 x 70 = 315, 7 x 70 = 490, 15 x 70 = 1050 mg.
- Rocuronium 1.2 mg/kg: 4.2 kg gives 5.04 mg (airway-21), 80 kg gives 96 mg rounded to 100 (airway-25), 38 kg gives 45.6 mg rounded to 45 (airway-26), 75 kg gives 90 mg (airway-30), 20 kg gives 24 mg (airway-42). Distractor ratios: 2 / 4.2 = 0.48, 10 / 4.2 = 2.4, 20 / 4.2 = 4.8, 40 / 80 = 0.5, 20 / 38 = 0.53, 40 / 75 = 0.53, 6 / 20 = 0.3 mg/kg. Cisatracurium 8 / 80 = 0.1 mg/kg.
- Ketamine: 40 / 38 = 1.05 and 150 / 38 = 3.9 mg/kg (airway-26), 75 / 75 = 1 mg/kg (airway-30), 20 / 20 = 1 and 80 / 20 = 4 mg/kg (airway-42), 40 / 26 = 1.54 mg/kg (airway-43). Propofol 60 / 20 = 3 and 80 / 26 = 3.1 mg/kg.
- Epinephrine, airway-31: 0.01 x 20 = 0.2 mg IM. 1 mg is five times that dose.
- Tube sizes: 3.5 + 4 / 4 = 4.5 mm cuffed at 4 years, older formula 3.0 + 4 / 4 = 4.0 (airway-23). 3.5 + 2 / 4 = 4.0 at 2 years, first choice half a size smaller in croup (airway-39). NRP 3.0 mm for 1.9 kg at 33 weeks (airway-22). 3.0 mm cuffed for a 4.2 kg infant (airway-21). Depth 3 x 3.0 = 9 cm (airway-21).
- Ventilation: predicted body weight 50 + 0.91 x (178 minus 152.4) = 73.3 kg, 6 x 73.3 = 440 mL. 540, 720, 900 mL are 6, 8, 10 mL/kg of 90 kg, and 220 mL is 3 mL/kg PBW (airway-29). CO2 gap 58 minus 34 = 24 mmHg (airway-29). New pCO2 52 x 12 / 20 = 31.2 mmHg, pH then about 7.50 (airway-41). Tube 25 to 22 cm moves the tip from 1 to 4 cm above the carina (airway-41).
- Blood gases by Henderson-Hasselbalch, all internally consistent: airway-21 (7.18, 78, implied HCO3 29), airway-26 (7.24, 72, HCO3 31), airway-28 (7.16, 68, HCO3 24), airway-29 (7.21, 58, HCO3 23), airway-35 (7.14, 92, 30 gives pH 7.13, and 7.52, 38, 30 gives pH 7.51), airway-41 (7.28, 52, 24 gives pH 7.28).
- Vital capacity: 1100 / 70 = 15.7 (airway-24), 1400 / 80 = 17.5 (airway-25), 900 / 80 = 11.25 mL/kg (airway-40). NIF minus 26 is weaker than minus 30 cmH2O.
- Shock index 128 / 104 = 1.23 (airway-26). GCS E1 V2 M4 = 7 (airway-43). Peak rise 24 and plateau rise 26 cmH2O (airway-46). Pediatric hypotension limit 70 + 2 x age: 80 mmHg at 5 years (airway-31, fixed) and 82 mmHg at 6 years, so 86/52 in airway-42 is compensated shock, as the explanation says.

Format script (stem 50 to 150 words, updates 10 to 45 words, prompts 10 to 30 words, 3 to 6 explanation sentences, no semicolons or dashes) shows no remaining breach. After the fixes, single key positions are 19, 22, 21, 20, 19 of 101 (highest 21.8%), and the key is the longest option or tied for longest in 35 of 101 (34.7%). Key feature numbers 1 to 6 are all tested.

## Sources verified

No citation was added or changed under this lens. One check was made:

- Davidson K, Shojaee S. Managing massive hemoptysis. Chest 2020. 157:77 to 88. Recommends an endotracheal tube of 8.5 mm or more, which matches airway-44 q2. https://pubmed.ncbi.nlm.nih.gov/31374211/

## Needs physician decision

1. review-extra.ts. airway-48 duplicates airway-26 and airway-49 duplicates airway-37. Both extras are now internally correct, but neither should enter the bank. Recommend dropping both. The Lens A fixes to these two were not on disk when this review started.
2. airway-23 q2 update gives a pulse of 58/minute in a hypoxic 4-year-old with no chest rise, and no question addresses compressions (also raised by Lens A).
3. Key feature 6 (confirming tube placement) is used loosely for ventilator management in airway-29 q4, airway-35 q3, airway-41 q1 and airway-43 q3. They test blood gas and capnography interpretation after intubation, which is close but not placement. Low confidence. Left as is.
4. airway-18 q3 (cause of obstruction, a dislodged voice prosthesis) is tagged key feature 1 (move to rescue techniques). Key feature 4 fits better. Low confidence.

## Summary

- 19 table rows covering 23 SAMP entries. Keys: 1 wrong key corrected (airway-48). 4 position-only changes.
- By category: wrong key 1, invented or unsupported fact 6 (airway-49 lactate, airway-25 bulbar weakness, airway-37 and 49 alertness, airway-45 blocker unstated, airway-28 trend, airway-16 "new"), timeline 2 (airway-30 order, airway-41 missing update), number or threshold 2 (airway-31 BP, airway-40 hypothermia), stem contradiction 1 (airway-33), parity 1 (airway-46), option order 3 (airway-26 and 48, 30, 42), format length 6 (airway-24, 35 updates, and 4 long explanations).
- SAMP ids with a defect: airway-16, 24, 25, 26, 28, 30, 31, 33, 35, 37, 38, 40, 41, 42, 45, 46, 48, 49.
- Checks: `npx tsc --noEmit -p .` shows no s21 errors. `SAMP_BATCH=s21 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed.
