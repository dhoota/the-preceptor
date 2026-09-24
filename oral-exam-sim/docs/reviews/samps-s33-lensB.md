# Review of batch s33 (DVT and PE), Lens B: internal consistency and numbers

Reviewer lens: B, internal consistency and numbers. Scope: `src/samps/s33/dvt-pe.ts` (dvt-pe-16 to 47) and `src/samps/s33/review-extra.ts` (dvt-pe-48 and 49). Each SAMP was read on its own, question by question, with every explanation sentence checked against the stem and updates. The Lens A report was not relied on. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Method

Every score, dose and derived value was recomputed with a script (kept in the session scratchpad, not in the repo):

- Wells PE (19, 24, 31, 38, 39, 42, 43): 3.0, 7.0, 10.0, 8.5, 3.0, 5.5 and 0. All match the keys. The 19 q4 counterfactuals (previous DVT gives 4.5, hemoptysis or cancer gives 4.0) also match.
- Two level Wells DVT (18, 28, 29, 34, 36): 3, 4, 0, 0 and 4. All match.
- sPESI (21, 22, 32, 33, 38): 0, 2, 3, 0 and a baseline of 1. All match.
- PERC (39): all eight criteria met, gestalt 30% above the 15% limit. Matches.
- PEGeD bands (low 4.0 or less, moderate 4.5 to 6.0) and YEARS thresholds (19, 20, 39, 42): match.
- Age adjusted D-dimer (43): 76 x 10 = 760 mcg/L, and 690 is below it. Matches.
- 4Ts (25): fall from 256 to 88 is 65.6%, nadir above 20, onset between heparin day 5 and day 8, new DVT, no other cause. 2 + 2 + 2 + 2 = 8. Matches.
- Child-Pugh (44): bilirubin 58 (3), albumin 26 (3), INR 1.8 (2), mild ascites on diuretics (2), no encephalopathy (1) = 11, class C. Matches.
- Cockcroft-Gault creatinine clearance: 22 gives 72, 23 gives 220, 32 gives 40, 41 gives 83. All consistent with the stems. 44 gives 82, not the 70 in the stem (fixed).
- Dalteparin 200 units/kg with rounding to the nearest syringe (10 000, 12 500, 15 000, 18 000): 20 (14 800 to 15 000), 21 (18 000), 22 (14 000 to 15 000), 30 (16 000 to 15 000), 33 (17 200 to 18 000), 35 (14 800 to 15 000), 38 (14 000, stated unrounded as a distractor reason), 44 (15 200 to 15 000). All match.
- Enoxaparin: 16 (58 to 60 mg), 23 (152 to 150 mg every 12 hours, 1.5 mg/kg daily 228 mg, 150 mg daily is 34% low), 28 (1.5 x 80 = 120 mg, 80 mg is two thirds), 41 (82 to 80 mg), 45 (28 mg, 42 mg is 1.5 mg/kg). All match.
- Tinzaparin 28: 175 x 80 = 14 000 units. Matches.
- Alteplase 27: 0.6 mg/kg and 0.9 mg/kg for 70 kg are 42 and 63 mg. Explanations consistent.
- Timelines: 16 (surgery 12 days, symptoms 4 days), 21 (12 days postpartum, 3 months outlasts 6 weeks postpartum), 25 (enoxaparin from postoperative day 1, today heparin day 8), 28 (21:00 to 08:00 is over 4 hours), 29 (14 months, 3 months of treatment), 37 (day 11 after ICH), 40 (25 to 37 weeks is 12 weeks of treatment, last dose 08:00, now 14:00, 24 hours gives 08:00 tomorrow), 45 (day 10 of a 14 day course leaves 4 days), 47 (craniotomy 6 days ago inside the 3 week window, stroke 4 months inside 6 months, hip 8 weeks outside 3 weeks). All consistent.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| dvt-pe-48 (extra) | q1 | correct | Key was index 0, "Acute arterial embolism", while the stem and explanation describe phlegmasia cerulea dolens. Lens A reported this fixed, but the file on disk still had index 0. Key set to index 3. | High |
| dvt-pe-49 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives. Lens A reported it removed, but it was still in the file. Removed. | High |
| dvt-pe-44 | stem | stem | Estimated creatinine clearance given as 70 mL/minute. Cockcroft-Gault for a 59-year-old man, 76 kg, creatinine 92 micromol/L is 82 mL/minute. Changed to 82. No question depends on the value, so no key changes. | Medium |
| dvt-pe-43 | q4 | prompt | Prompt opened "If her D-dimer had been ...", breaking the "Which of the following" rule (the test does not catch a mid sentence match). Reworded to "Which of the following imaging tests would be preferred if her D-dimer had been 1200 mcg/L FEU?" | Medium |
| dvt-pe-22 | q5 | explanation | Said his oxygen saturation of 93% placed him outside the low risk group. A saturation of 93% is not an sPESI item and does not need oxygen under Hestia. Reworded to base the risk on his sPESI of 2 from cancer and a heart rate of 114/minute. | Medium |
| dvt-pe-37 | stem, q1 | stem, explanation | The key "Paralysis of the right leg" and the explanation "leaves him immobile" rested on a stem that only said "right sided weakness" and "the right leg is weak". Stem now gives dense right hemiparesis, that he cannot yet walk, and that he cannot lift the right leg off the bed. Explanation now says the paralysis leaves him unable to walk. | Medium |
| dvt-pe-40 | stem | stem | Dalteparin 16 000 units daily is not a prefilled syringe size, and the batch rounds 16 000 to 15 000 units elsewhere (30 q2 at the same 80 kg). Changed to 15 000 units. | Low |
| dvt-pe-20 | stem | stem | Uterine fundus "at the umbilicus" fits 20 weeks, not 22 weeks. Changed to 2 cm above the umbilicus. | Low |
| dvt-pe-41 | q2 | explanation | Said the 2.5 to 3.5 target was "set by his cardiologist". The stem gives the target but not who set it. Removed the attribution. | Low |

## Key changes

- dvt-pe-48 q1 (review-extra): before index 0 "Acute arterial embolism", after index 3 "Phlegmasia cerulea dolens". The key contradicted its own stem and explanation.

No key in `dvt-pe.ts` was changed.

## Review-extra file

`review-extra.ts` is not imported by the batch index and is not run by the tests. The two fixes Lens A reported for it (48 q1 key, 49 lactate sentence) were not present on disk when this review began, so they were applied again here. dvt-pe-48 is a copy of dvt-pe-26 and dvt-pe-49 is a copy of dvt-pe-37. 49 q1 still carries the weakness versus paralysis mismatch fixed in 37, which was not copied across. Both should be rejected as near duplicates rather than added to the bank.

## Checked and found consistent

- Format: stems open correctly, vitals sit in the vitals field, no patient names, prompts start "Which of the following" (after the 43 q4 fix), options in order with "No ..." last, no absolute words, no option cross references, no dashes or semicolons in any string.
- Counts: 21 q1 (three risk factors keyed, three explained), 25 q2, 33 q4, 38 q4, 46 q1 (three extension factors, all in the stem), 47 q3. Each explanation names exactly the keyed items.
- No explanation describes its keyed answer as wrong.

## Sources verified

No source was changed in this review. The citations were checked for author or body, work and year. Lens A verified the URLs and the Thrombosis Canada, ASH, ESC and trial sources, and the numbers used in this review (Wells, sPESI, PEGeD, YEARS, ADJUST-PE, 4Ts, Child-Pugh bands, dalteparin 200 units/kg, enoxaparin 1 mg/kg and 1.5 mg/kg, tinzaparin 175 units/kg) are the standard published values in those sources.

- Wells PS, et al. Ann Intern Med. 2001. https://pubmed.ncbi.nlm.nih.gov/11453709/
- Kearon C, et al. PEGeD. N Engl J Med. 2019. https://pubmed.ncbi.nlm.nih.gov/31774957/
- Jimenez D, et al. sPESI. Arch Intern Med. 2010. https://pubmed.ncbi.nlm.nih.gov/20696966/
- Righini M, et al. ADJUST-PE. JAMA. 2014. https://pubmed.ncbi.nlm.nih.gov/24643601/
- Tsoris A, Marlar CA. Child Pugh score. StatPearls. 2023. https://pubmed.ncbi.nlm.nih.gov/31194448/

## Needs physician decision

- Wells PE "PE most likely" item (39 q2, 42 q1, 39 q1 context). Both stems say PE is "as likely as" the alternative and award 3 points. That follows the common "PE is the most likely diagnosis or equally likely" wording. The original 2001 wording is "an alternative diagnosis is less likely than PE", under which an equal likelihood scores 0, giving 0 (39) and 2.5 (42). 2.5 is an option in 42 q1. A physician should decide whether to reword both stems to "You think PE is more likely than any other diagnosis" to remove the ambiguity. The PERC teaching in 39 would still hold.
- The Lens A physician items (18 q3 surveillance after a major bleed, 33 q2 admission at intermediate low risk, pediatric versus adult rules for a 16-year-old, local neuraxial protocols) are unchanged.

## Summary

- 32 main SAMPs and 2 extra SAMPs reviewed, 119 main questions plus 7 extra questions.
- 9 fixes in 9 SAMPs: 1 wrong key (48, extra), 1 invented fact (49, extra), 1 wrong derived lab value (44), 1 false risk reasoning (22), 1 stem fact missing for the key (37), 1 prompt format (43), 1 dose rounding inconsistency (40), 1 gestational timeline (20), 1 unsupported attribution (41).
- One key index changed (dvt-pe-48, extra).
- All Wells, PERC, YEARS, PEGeD, sPESI, 4Ts and Child-Pugh scores, the age adjusted D-dimer and all weight based doses recomputed correctly after the fixes.
- SAMPs with a defect: dvt-pe-20, 22, 37, 40, 41, 43, 44, 48, 49.
- Gates: `npx tsc --noEmit -p .` shows no s33 errors. `SAMP_BATCH=s33 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 707 of 707.
