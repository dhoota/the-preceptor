# SAMP review: batch s32, decreased level of consciousness

Lens: B (internal consistency and numbers).

Scope: `src/samps/s32/loc.ts` (loc-16 to loc-47) and `src/samps/s32/review-extra.ts` (loc-48, loc-49). I read every stem, update, option and explanation SAMP by SAMP and did not rely on the Lens A review. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Finding outside my lens: Lens A fixes missing from review-extra.ts

The Lens A report says it changed the loc-48 q1 key from flumazenil to sodium bicarbonate and removed an invented lactate sentence from loc-49 q2. When I opened `review-extra.ts`, neither change was in the file. loc-48 q1 was still keyed to "flumazenil 0.2 mg IV" (index 1), and loc-49 q2 still ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." I applied both fixes (see the table). Every other Lens A edit in `loc.ts` was present.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| loc-48 (review-extra) | q1 | correct | Key was index 1 (flumazenil 0.2 mg IV), but the explanation teaches bicarbonate and says flumazenil can provoke seizures. So the explanation called the key harmful. Key set to index 4 (sodium bicarbonate 100 mmol IV). | high |
| loc-49 (review-extra) | q2 | explanation | Cited "a serum lactate of 7.8 mmol/L on the first blood gas", which the case never gives. Removed. | high |
| loc-32 | q2 | explanation | Arithmetic error. It said ceftriaxone 250 mg every 12 hours is "a quarter" of the daily dose. 2 x 250 = 500 mg a day, which is half of 1000 mg. Corrected. | high |
| loc-17 | q3 | options, explanation, vitals | Parity and specificity problem. The key "prothrombin complex concentrate and vitamin K" gave no dose, while every distractor gave a drug, dose and route. The key is now "prothrombin complex concentrate 25 units/kg IV". Weight 58 kg added to vitals. The explanation now shows the dose (INR 3.1, so 25 units/kg, about 1450 units) and says vitamin K 10 mg IV is given with it. | high |
| loc-19 | q4 | options, explanation | Same specificity problem. The key "sodium bicarbonate infusion IV" had no dose, while the other drugs had doses. The key is now "sodium bicarbonate 60 mmol IV" (1 mmol/kg for 60 kg), and the explanation shows the arithmetic. | medium |
| loc-19 | q4 | explanation | Rejected whole bowel irrigation for "plain tablets", but the stem never says the tablets were uncoated. The new reason is true from the stem: she is drowsy and vomiting. | medium |
| loc-25 | q1 | options | Cross-question cue. The q1 option "Osmolal gap of 31 mmol/kg" gave away the answer to q2, which asks for the osmolal gap (key 31). The option is now "Raised serum osmolal gap". Key position unchanged. | high |
| loc-20 | q1 | stem, explanation | The explanation said "He takes no opioids", but the stem gave no medication list. Added "takes only tiotropium and salbutamol inhalers" to the stem and tied the reason to it. | medium |
| loc-20 | q1 | options | Length cue. The key "Acute hypercapnic respiratory failure" was 1.47 times the mean distractor length. Shortened to "Hypercapnic respiratory failure" and options re-sorted, so the key moves from position 1 to 3. | medium |
| loc-28 | q1 | explanation | Said her heart rate "has dropped to 58/minute" with "a rising BP", but the case gives no earlier heart rate or BP. It now says a heart rate of 58/minute and a BP of 132/86 mmHg are both abnormal for a 9-year-old. | medium |
| loc-27 | q2 | options | Timeline. The option "She started a new pill last week" conflicted with the stem, which says ramipril was started 10 days ago. It now says "10 days ago". | medium |
| loc-27 | q1 | explanation | Rejected serotonin syndrome because "She takes no serotonergic drug", but lithium has serotonergic activity. It now says she takes no serotonergic drug besides lithium. | low |
| loc-21 | q1 | explanation | Said "two attempts at IV access have failed". The stem says paramedics could not get access and two nurses could not place an IV. Reworded to match the stem. | low |
| loc-33 | q3 | explanation | Said "He has taken no benzodiazepine", but the stem does not give a full medication list. Reworded to "Nothing in his history points to a benzodiazepine". | low |
| loc-39 | q1 | explanation | Said glycogen was depleted "by alcohol and fasting". Fasting is not in the case. Removed. | low |
| loc-43 | q3 | explanation | Said he has "no evidence of anemia" although the stem says he is pale. It now says his pallor fits shock and no hemoglobin result shows anemia. | low |
| loc-47 | q1 | stem, explanation | The explanation said he has no head injury, but the stem never said so. Added "There are no signs of injury." to the stem. | medium |
| loc-36 | q3 | source, sources | A question on GCS documentation cited the Endocrine Society hypercalcemia guideline, which does not cover the GCS. Now cites gcs-40, and SRC_GCS_40 was added to the SAMP's sources. | low |
| loc-42 | stem | stem | The stem opened "A 58-year-old farmer", so it gave no sex, against the spec order (age and sex first). Now reads "A 58-year-old man ... collapsed in their farm barn". | low |
| loc-17 | q3 | keyFeature | Anticoagulation reversal is correcting a reversible cause, not building a differential. Changed n 1 to n 2. | low |
| loc-19 | q2 | keyFeature | An indication for extracorporeal treatment is treatment, not differential. Changed n 1 to n 2. | low |
| loc-19 | stem, q1, q3 | stem, explanations | Blood gas did not agree. pH 7.38 with bicarbonate 12 needs a PCO2 of 21 mmHg, but the case gave 22 mmHg, which yields pH 7.36 by Henderson-Hasselbalch. Changed to PCO2 21 mmHg in the stem and both explanations. The result is still below the Winter range of 24 to 28. | low |

## Key changes

- loc-48 q1 (review-extra, draft): before index 1 (flumazenil 0.2 mg IV), after index 4 (sodium bicarbonate 100 mmol IV). The explanation already taught bicarbonate and warned against flumazenil.
- Option text of the key changed without changing the answer: loc-17 q3 ("prothrombin complex concentrate and vitamin K" to "prothrombin complex concentrate 25 units/kg IV"), loc-19 q4 ("sodium bicarbonate infusion IV" to "sodium bicarbonate 60 mmol IV"), loc-20 q1 ("Acute hypercapnic respiratory failure" to "Hypercapnic respiratory failure", index 0 to 2).

## Numbers recomputed by script

I recomputed everything with scripts in the scratchpad: a vite-node audit of the loaded SAMP objects and a Python arithmetic check.

- All nine GCS questions (loc-16 q1, loc-17 q1, loc-21 q2, loc-23 q3, loc-32 q3, loc-35 q1, loc-37 q1, loc-44 q2, loc-46 q2), plus the loc-49 copy. Every key matches the stem's eye, verbal and motor descriptors, and every option's total equals the sum of its components. Correct. Also checked: the GCS values stated in explanations (loc-20 q4 GCS 11, loc-26 q3 GCS 6, loc-30 GCS 13 then 10, loc-36 q3 GCS 13, loc-37 scene GCS 8) and the WFNS grade II.
- Gaps: loc-19 anion gap 24, Winter 26 plus or minus 2. loc-25 calculated osmolality 287, osmolal gap 31, without urea 36, without glucose and urea 42, anion gap 32. Correct.
- Blood gas consistency by Henderson-Hasselbalch: loc-20 (7.19), loc-28 (6.97 against 6.98) and loc-38 (7.12) agree. loc-19 did not (fixed).
- Doses: dextrose 0.5 g/kg for 15 kg is 75 mL of 10%, and 250 mL of 10% for 48 kg is 0.52 g/kg. Octreotide 15 mcg (1 mcg/kg). 30 mL/kg for 80 kg is 2400 mL. Fomepizole 1050 mg. Bicarbonate 100 mmol for 62 kg is 1.6 mmol/kg. Mannitol 14 g (0.5 g/kg for 28 kg) and 80 g (1 g/kg for 80 kg). Saline 280 mL (10 mL/kg). Enoxaparin 74 mg. Ceftriaxone 1000 mg a day. Levocarnitine 6 g. Ringer's lactate 172 mL (20 mL/kg for 8.6 kg). PCC 1450 units. All correct except the loc-32 "quarter" error.
- MAPs 54 and 59 mmHg. Corrected calcium 4.00 mmol/L. Free water deficit 4.18 L (3.52 L when divided by 166). Sodium fall of 26 mmol/L. Ethanol conversions: 9 mmol/L is 41 mg/dL, 14 is 64, 11 is 51. Creatinine ratios 2.15 (loc-27, "more than doubled") and 1.91 (loc-33, "almost doubled"). Correct.
- Timelines: loc-18, loc-22 (at least 7 hours from 1500 to 2230), loc-41 (2300 to 0715, within 24 hours for thrombectomy), loc-44 and loc-45 all agree.
- Batch format after the edits: key positions 22, 20, 23, 23, 14 of 102 single questions, so the highest is 22.5%. The key is the single longest option in 32.4% of single questions. Every key is within 1.5 times the mean distractor length.

## Sources verified

- Neurocritical Care Society 2016 reversal guideline (loc-17 dose): 4-factor PCC 25 to 50 IU/kg by pre-treatment INR, with vitamin K 10 mg IV. https://pubmed.ncbi.nlm.nih.gov/26714677/ and https://www.neurocriticalcare.org/Portals/0/Docs/Resources/FINAL_COPY_COAG.pdf. The 25 units/kg dose for an INR of 2 to under 4 follows the dosing table used with that guideline.

## Needs physician decision

- review-extra.ts: loc-48 is a word-for-word copy of loc-26, and loc-49 is a copy of loc-37 (same title and stem). They would fail the near-duplicate stem gate and should not join the bank. I fixed their errors only so the file does not teach a wrong key.
- loc-17 q3: Canadian practice often gives PCC as a fixed dose (for example 2000 units of Octaplex or Beriplex) instead of 25 units/kg. The key follows the cited NCS weight-and-INR dosing. A physician may prefer a fixed-dose option or a Canadian source.
- Lower-priority cueing notes, not changed: in loc-42 q2 and loc-46 q3 (menus), the non-drug keyed options are the longest options. The menu gate passes. In loc-19 q4, loc-26 q1, loc-38 q3, loc-44 q3 and loc-47 q3, the key is 1.4 times the mean distractor, which is under the 1.5 limit.
- Key feature mapping that is loose but was left as written: loc-18 q3, loc-30 q3, loc-31 q3 and loc-41 q4 are treatment or safeguarding questions tagged with KF 1 (differential).

## Summary

- 22 fixes in 16 SAMPs: 1 key change (review-extra), 3 key options given a dose or shortened (parity, specificity and cueing), 1 cross-question cue removed, 1 arithmetic error, 1 blood gas inconsistency, 1 timeline conflict, 9 claims the stem did not support (fixed in the stem or the explanation), 1 false distractor reason, 1 wrong source, 1 stem opening, 2 key feature remaps.
- Most serious: loc-48 q1 was still keyed to flumazenil, harmful in tricyclic poisoning, even though Lens A reported fixing it. loc-49 q2 still carried an invented lactate. loc-32 q2 had an arithmetic error ("a quarter" for a half). loc-25 q1 gave away the q2 answer. loc-17 q3 and loc-19 q4 were the only dose questions whose key had no dose.
- SAMPs with a defect: loc-17, loc-19, loc-20, loc-21, loc-25, loc-27, loc-28, loc-32, loc-33, loc-36, loc-39, loc-42, loc-43, loc-47, loc-48, loc-49. (loc-16, loc-18, loc-22, loc-23, loc-24, loc-26, loc-29, loc-30, loc-31, loc-34, loc-35, loc-37, loc-38, loc-40, loc-41, loc-44, loc-45 and loc-46 passed my checks.)
- Checks: `tsc` shows no errors in samps/s32. `SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed.
