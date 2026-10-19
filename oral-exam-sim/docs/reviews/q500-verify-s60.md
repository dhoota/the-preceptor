# Q500 verify report: s60, Pulmonary edema

Fresh independent review by Preceptor of the whole final text of `src/samps/s60/pulmonary-edema.ts` (pulmonary-edema-39 to pulmonary-edema-43). The reviewer did not write or edit this batch. The first QA round edited the file in place, which breaks REVIEW-RULES rule 1, so the current file is treated as a writer revision. Nothing was edited in this round. Both lenses were applied, and every key decision was checked against the bank catalogue (`scratchpad/q500/catalog/pulmonary-edema.md`, `asthma-copd.md`, `sob.md`, `headache.md`) and the oral cases. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| pulmonary-edema-39 | PASS | PASS | PASS | PASS | PASS | |
| pulmonary-edema-40 | FAIL | PASS | FAIL | PASS | FAIL | PASS |
| pulmonary-edema-41 | FAIL | FAIL | FAIL | PASS | | |
| pulmonary-edema-42 | FAIL | PASS | FAIL | FAIL | PASS | |
| pulmonary-edema-43 | FAIL | FAIL | FAIL | PASS | FAIL | |

One SAMP passes and four fail. No keyed answer is clinically wrong. The main defect is repetition of signed SAMPs: the first QA searched only for rare terms (ALCAPA, Ottawa, anthracycline) and missed scenarios and decisions already keyed in pulmonary-edema-09, -13, -25, -29, -38, sob-05 and headache (PSGN).

Batch tests run by the reviewer: `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 of 128). No em or en dashes or semicolons were found in content strings.

## Required fixes

### pulmonary-edema-40

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | scenario | "An 8-year-old girl ... 2 days of puffy eyes ... Her urine has looked like cola for 3 days ... She had a sore throat 2 weeks ago that settled without treatment." | Signed headache SAMP "Puffy eyes and dark urine" (`src/samps/s40/headache.ts`, about line 2340) is an 8-year-old with puffy eyes, cola-coloured urine and an untreated sore throat 2 weeks earlier. Change the patient and presentation so the stem no longer retells it (for example a different age, a skin rather than throat source, or a first presentation with breathlessness rather than eye swelling). Keep every later number consistent. | Q500_BRIEF rule 3 | Medium |
| q2 | whole question | "Which of the following investigations is most likely to confirm the cause of her pulmonary edema?" Key "Urinalysis with microscopy", distractor "Throat swab culture" | The headache SAMP q2 asks the same question ("most helpful to confirm the suspected cause", with "Throat swab culture" as a distractor and C3 as key). Replace with a KF2 decision not in the bank. The q3 explanation's "low C3, found in about 90%" also echoes that SAMP and should be trimmed if q2 changes. | headache SAMP above, q2 | Medium |
| q4 | whole question | Update "breathing 44/minute and using her neck muscles ... 88% on a nonrebreather mask. She is alert, coughing well and protecting her airway." Key "Noninvasive positive pressure", distractors include "Heliox by face mask" and "Rapid sequence intubation" | Near copy of signed pulmonary-edema-25 q4 ("tiring ... 86% on 15 L/minute by non-rebreather mask. She is alert and protecting her airway", key "Noninvasive ventilation", distractors "Heliox by face mask" and "Immediate intubation"). Replace with a KF4 decision not in the bank. A pediatric angle such as recognizing impending failure (a sign or gas finding) or an interface or setting choice for a child is open, if a pediatric source supports it. | `src/samps/s48/pulmonary-edema.ts` pulmonary-edema-25 | High |

### pulmonary-edema-41

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem and q1 | scenario, key | HFrEF with ejection fraction 30% on sacubitril-valsartan, bisoprolol, spironolactone, an SGLT2 inhibitor and furosemide, "Ten days ago a walk-in clinic added diltiazem". Key "diltiazem" | Retells signed pulmonary-edema-13 ("Weight gain after a new prescription": HFrEF 30% on the same five drugs, "A walk-in clinic started naproxen 10 days ago", precipitant question whose accept list names nondihydropyridine calcium channel blockers). pulmonary-edema-05 also uses the same drug list. Change the decompensation story so it is not a new walk-in prescription 10 days earlier on the same regimen, and replace q1 with a KF2 decision not in the bank. The Ottawa score calculation (q2) is new and should stay. | pulmonary-edema-13 and -05 in `src/samps/s15/pulmonary-edema.ts` | High |
| q2 | explanation | "a heart rate over 110/minute on arrival scores 2" | The Ottawa Heart Failure Risk Scale item is heart rate 110/minute or more on arrival (MDCalc and the 2013 derivation). Write "110/minute or more". The total of 5 is correct either way (TIA 1, arrival pulse 116 = 2, SaO2 88% = 1, urea 14.2 = 1). SAMP_SPEC section 8: match thresholds exactly. | Stiell 2017 (cited). https://www.mdcalc.com/calc/3994/ottawa-heart-failure-risk-scale-ohfrs | Low |

### pulmonary-edema-42

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem, q2, q3 | scenario and keys | Severe COPD on home oxygen 2 L/minute, "pH 7.27 and PCO2 71 mmHg". q2 key "Noninvasive bilevel ventilation". q3 key "88 to 92%" | Signed sob-05 ("Home oxygen and a worse week", s17) is severe COPD on 2 L/minute home oxygen with pH 7.28 and PaCO2 72, keyed 88 to 92% (q1) and BiPAP (q3). The 88 to 92% target is also keyed in asthma-copd s04 (twice), s25 and s64, and in the oral case "Drowsy man on a non rebreather". Replace q3 with a decision not in the bank, and change q2 so it tests the heart failure and COPD overlap itself (the CPAP against bilevel point may stay only if the stem no longer mirrors sob-05). Change the gas values. | sob-05 in `src/samps/s17/sob.ts`. Q500_BRIEF rule 3 | High |
| q3 | options | "88 to 92%", "90 to 95%", "92 to 96%" | If any oxygen target item survives: "90 to 95%" overlaps the key and "92 to 96%" shares its bound. SCORING-RULINGS B11 forbids overlapping numeric ranges. "90 to 95%" also fits the CAEP 2025 target of above 90%, so it is partly defensible. | SCORING-RULINGS B11. CAEP checklist 2025: "titrated to an oxygen saturation > 90%" | High |

Not required but noted: q4 key reads "Usual pace on her home oxygen" while the validated wording, the explanation and a distractor say "own pace". Using "Own pace on her home oxygen" would match the source.

### pulmonary-edema-43

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | scenario | "6 weeks of breathlessness ... short of breath climbing one flight of stairs and has woken twice at night coughing. A walk-in clinic prescribed an inhaler ... it has not helped" | Retells signed pulmonary-edema-09 ("Six weeks of shortness of breath on stairs": 6 weeks, stops after 1 flight, night cough, walk-in clinic inhaler without improvement, NT-proBNP, causes of cardiomyopathy including chemotherapy, then a walk test, troponin normal twice and a partner who stays, then disposition). The same frame recurs in pulmonary-edema-25 and -29. Rebuild the scenario around the cancer therapy angle with a different presentation. | `src/samps/s15/pulmonary-edema.ts` pulmonary-edema-09. `src/samps/s48/pulmonary-edema.ts` -25, -29 | High |
| q1 | whole question | Key "NT-proBNP level" as the next test | Same decision as pulmonary-edema-09 q2 and -03 q2 (BNP in the accept list). Replace with a KF5 decision not in the bank. | as above | Medium |
| q2 | whole question | Key "Within the likely range for her age" (over 900 pg/mL at age 50 to 75) | Signed pulmonary-edema-29 q2 interprets an NT-proBNP against the 900 pg/mL rule-in line at age 58, and pulmonary-edema-38 q1 against the age over 75 line. Replace with a decision not in the bank. The arithmetic itself is correct (1 250 is above 900). | CAEP 2025 cut-offs confirmed (under 300 unlikely, 300 to 900 grey at 50 to 75, over 900 likely) | Medium |
| q4 | whole question | Menu key "Clinician follow-up within 7 days", "Creatinine and potassium in 7 days", "furosemide 20 mg PO daily" | The discharge elements repeat signed pulmonary-edema-07 q3, -13 q3 and -29 q4. Also the distractor "Stop her inhaler and all exercise" joins a defensible action (stopping an inhaler that has not helped for a misdiagnosis) to a wrong one, and the explanation answers only the exercise half. Replace with a KF6 decision not in the bank, with single-action options. | pulmonary-edema-07, -13 (s15), -29 (s48). SAMP_SPEC section 7 (no distractor also correct) | Medium |

## First QA changes and residual items judged

| Item | Verdict |
|---|---|
| 39 weight 6.1 kg | Acceptable. Close to the WHO 10th percentile for a 4-month-old boy. |
| 39 q1 explanation (hyperinflation pushes a normal liver down) | Acceptable and true. |
| 41 "She has never been intubated" | Correct and needed for the score. |
| 42 q4 HR over 110 and RR over 28 | Matches HEARTRISK6 as the QA read it. |
| 42 q3 CAEP sentence | Moot. q3 fails above. |
| 43 q3 IC-OS wording | Acceptable. The source supports the CTRCD definition. Timing is framed as "may first be found during survivorship". |
| Residual: Price 2019 not reopened | The DOI resolves to Pediatr Rev 2019;40(2). Not reread here either. Content (hepatomegaly, cardiomegaly, loop diuretics first line, coronary origins under 1 year) is standard. Acceptable. |
| Residual: Ong NIV statement (40 q4) | Moot. 40 q4 fails above. |
| Residual: 43 q4 discharge of new HFrEF | Moot. q4 fails above. |

## Checks with no change needed

- 39: one key in each question. Q waves in I and aVL fit ALCAPA, and echocardiography with coronary origins is the right test (Price 2019). No other SAMP in the bank tests infant heart failure labelled as bronchiolitis.
- 40 q1, q3, q5: furosemide for overload, sodium and fluid restriction, and dialysis for oliguria with K 6.6 mmol/L are correct (Ong 2022, full text checked by the first QA).
- 41 q2 and q3: Ottawa total of 5 recomputed. Admission is right (validation study threshold more than 1 point, sensitivity 91.8%). The HR item threshold differs between summaries (MDCalc "110 or more", fpnotebook "over 110"). The stem values avoid the boundary.
- 42 q1 and q4 are new angles (B-lines in COPD with heart failure, walk test on usual oxygen).
- 43 q3: late chemotherapy cardiotoxicity is new. pulmonary-edema-26 is checkpoint inhibitor myocarditis, a different decision.
- Mock mode cues built into the cases (left as is): 39 q3 update gives the q2 radiograph result, 40 q3 update names furosemide (q1) and urinalysis (q2), 40 q5 update names noninvasive ventilation (q4), 43 q2 update gives the NT-proBNP (q1). If 40 and 43 are rebuilt, avoid these where wording allows.
- Key feature tags are honest for every question.

## Sources verified

- Stiell IG et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12484285/ opened. Confirmed: NT-proBNP "strongly recommended", under 300 unlikely, 300 to 900 grey zone at 50 to 75, over 900 likely, over 1800 over 75, oxygen to above 90%, beta blockers and calcium channel blockers avoided for AF when LVEF is low or unknown, furosemide 20 mg once or twice daily, follow-up and electrolytes within 7 days.
- Stiell IG et al. Ottawa Heart Failure Risk Scale validation. Acad Emerg Med. 2017. PubMed page served a cookie wall. Items and thresholds cross-checked on MDCalc. https://doi.org/10.1111/acem.13141
- Other sources (Price 2019, Ong 2022, Rochwerg 2017, O'Driscoll 2017, HEARTRISK6 2024, IC-OS 2022) were opened by the first QA and their URLs resolve to the named documents. No defect found in the citations.

## Key feature coverage after fixes

Current: KF1 4, KF2 4, KF3 2, KF4 1, KF5 5, KF6 4. KF4 has only 40 q4, which fails, so the replacement must stay KF4. The replacement for 41 q1 should stay KF2, and the replacements in 43 should keep KF5 and KF6 covered.

## Summary

Five SAMPs: pulmonary-edema-39 passes. pulmonary-edema-40, -41, -42 and -43 fail with 11 required fixes: nine for repetition of signed SAMPs (pulmonary-edema-07, -09, -13, -25, -29, -38, sob-05 and the headache PSGN SAMP), one Ottawa threshold wording and one set of overlapping option ranges (B11). The 43 q4 fix also removes a partly defensible compound distractor. The fixes go back to a writer, and the revision needs a fresh independent review.
