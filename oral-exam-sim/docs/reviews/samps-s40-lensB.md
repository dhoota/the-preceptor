# SAMP review, batch s40 (headache), Lens B: internal consistency and numbers

Reviewer lens: B (internal consistency and numbers). Scope: every file in `src/samps/s40/`, including `review-extra.ts`. Each SAMP was read one by one against its own stem, updates and options. The Lens A report was not relied on. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

Gates after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s40` shows no errors. `SAMP_BATCH=s40 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 691 passed.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| headache-48 (review-extra) | q1 | correct | Key was 0 (chronic tension-type headache) while the explanation argues for medication overuse headache. Key set to 3. Lens A reported this fix but it was not present in the file | high |
| headache-49 (review-extra) | q2 | explanation | Closing sentence cited a "serum lactate of 7.8 mmol/L" that the case never gives. Removed. Lens A reported this fix but it was not present in the file | high |
| headache-42 | q1 | stem | Option "School absences due to pain" and the explanation ("missed school") rest on a fact the stem never gave. Stem now says he has missed 4 days of school this month because of headaches | medium |
| headache-42 | q3 | update | Explanation cites "signs of raised pressure" but no sign of raised pressure was ever reported (q2 only asks to look for papilledema). Added update: fundoscopy shows bilateral papilledema | medium |
| headache-42 | q4 | explanation | "Progressive headache" is not in the stem, which gives 6 weeks of headache without worsening. Changed to "Six weeks of headache" | low |
| headache-27 | stem | stem | q2 explanation calls the headache severe, but the stem gave only "a frontal headache". Stem now reads "a severe frontal headache" | medium |
| headache-27 | q4 | prompt | Prompt asked for "new findings", but four of five options were already present in the case, so only the key was new. "New" removed | medium |
| headache-17 | q1 | prompt | Prompt asked for "symptoms in her history", but only the key (visual obscurations) was in her history. Bilateral headache, nausea, photophobia and neck stiffness were never given, which cued the key. Prompt no longer says "in her history" | medium |
| headache-30 | q2 | prompt | "Examination findings, had it been present" did not fit options that were history items and were already present (pain-free intervals, light touch trigger, right side). Prompt now reads "Which of the following findings would most suggest a secondary cause such as a tumour?" | medium |
| headache-23 | q1 | prompt | "Examination findings" but two options (absence of fever, five episodes of vomiting) are history. Changed to "findings" | low |
| headache-25 | q1 | prompt | "Aspects of his history" but one option (normal pupils) is an examination finding. Changed to "features of his presentation" | low |
| headache-37 and headache-49 | q1 | prompt | "Features of her history" but one option is BP on arrival. Changed to "features of her presentation" | low |
| headache-38 | q3 | prompt | "Details of his history" but options include temperature and neck flexion. Changed to "features of his presentation" | low |
| headache-39 | q1 | prompt | "Symptoms in his history" but low-grade fever is a measured sign (37.6°C), not a reported symptom. Changed to "features of his presentation" | low |
| headache-39 | q4 | prompt | "Steps before he leaves the emergency department" keyed temporal artery biopsy, which is arranged, not done, in the ED. Prompt now reads "additional steps in his care" | low |
| headache-46 | q1 | options, prompt, correct | Distractor "Complete left ptosis" overstated the stem, which says only that the eyelid droops. Changed to "Drooping left eyelid". Reordering moved the key from index 1 to 0. Prompt changed from "examination findings" to "findings" because one option is periorbital pain from the history | low |
| headache-22 | q1 | explanation | Rejected MRI because it is "not the first test in an unstable patient". The stem gives no instability (normal pulse, saturation, no seizure). Changed to "a newly confused patient" | low |

## Key changes

- headache-48 q1 (review-extra): key changed from 0 (chronic tension-type headache) to 3 (medication overuse headache). The explanation already supported 3.
- headache-46 q1: key index moved from 1 to 0 because the options were reordered alphabetically. The keyed answer, "Dilated left pupil", did not change.

## Numbers recomputed by script

The script is in the scratchpad (`s40-lensB/nums.py`). All numbers in the batch match.

- headache-16 (38 kg): metoclopramide 0.15 x 38 = 5.7 mg (below the 10 mg maximum). Ibuprofen 10 x 38 = 380 mg (below 600 mg). 190 mg = 5 mg/kg, 760 mg = 20 mg/kg. Acetaminophen 1 000 mg = 26.3 mg/kg. Saline 380 mL = 10 mL/kg.
- headache-22: MAP (238 + 2 x 134) / 3 = 168.7 mmHg. A 20 to 25% fall gives 126.5 to 134.9, stated as 127 to 135. Correct.
- headache-25 (70 kg): PCC 25 to 50 units/kg = 1 750 to 3 500 units. Capped at 3 000 units that is 1 750 to 3 000. The keyed fixed 2 000 units is within the Canadian 3 000 unit ceiling. The explanation's 3 500 units at 50 units/kg is correct arithmetic and is correctly called above the ceiling.
- headache-28 (30 kg): vancomycin 60 mg/kg/day divided every 6 hours = 15 mg/kg = 450 mg. Distractor doses are plausible by weight (ampicillin 50 mg/kg, gentamicin 2.5 mg/kg, clindamycin 10 mg/kg, acyclovir 10 mg/kg). BP 86/48 is below the 5th centile threshold of 70 + 2 x 9 = 88 mmHg, which supports the "septic shock" claim.
- headache-33 (90 kg): tenecteplase 0.25 x 90 = 22.5 mg (below 25 mg). 45 mg = 0.5 mg/kg, double and above the maximum. BP 172/96 is below 185/110.
- headache-38: CSF to serum glucose 3.3 / 5.6 = 0.59.
- headache-44: SBP 214 lies in the 150 to 220 mmHg band. Ketamine 80 mg is about 1 mg/kg.
- Thresholds checked against the stem values: 17 (38 above 25 cm H2O), 29 (34 above 25, drain below 20), 36 (SBP 166 at or above 160, platelets 82 below 100, protein 0.2 below 0.3 g/day), 35 (three of four pain features, more than five attacks, duration within 4 to 72 hours), 26 and 48 (ICHD-3 counts for overuse), 43 (AAP 25% over 8 hours).
- Menu counts: every menu explanation names exactly the keyed number of correct items (17, 20, 21, 23, 26, 27, 34, 35, 37, 39, 40, 41, 45, 48, 49).
- Timelines checked with no conflict: 18 (02:00, 40 minutes), 19 (onset at 36 hours, return on day 4), 21 (three attacks in 6 days), 24 (extraction 4 weeks ago), 33 (50 minutes, within 4.5 hours), 36 (day 6 postpartum), 37 (3 hours plus a 2 hour transfer gives about 5 hours), 40 (cold 12 days ago, worse for 4), 43 (sore throat 2 weeks ago).

## Sources verified

No source was changed in this lens. Lens A verified the citations, and none of the Lens B fixes rely on a new source.

## Needs physician decision

- review-extra.ts: headache-48 and headache-49 are identical to headache-26 and headache-37 apart from the id (checked field by field by script). They fail the no-near-copy rule and should not be added to the bank.
- Lens A reported two fixes in review-extra.ts (48 q1 key, 49 q2 lactate sentence) that were not present in the file when this review began. Both are now applied. Someone should check whether that file was reverted after Lens A.
- headache-31 q2: the key "prothrombin complex with vitamin K IV" carries no dose while every distractor does. Under NAC 2022 dosing, INR 3.1 would take 2 000 units. The SAMP does not cite NAC, so no dose was added. A physician may prefer to add the dose and the NAC source.
- headache-25 q2: the keyed fixed 2 000 units holds under all Canadian guidance. Some centres use 50 units/kg capped at 3 000 units, which would give 3 000 units here and is not an option.

## Summary

- 18 fixes (17 table rows, one row covering two SAMPs) in 13 SAMPs: 2 key or fabricated fact errors in review-extra (48, 49), 5 stem or explanation facts not supported by the case (22, 27, 42 three times), 10 prompt wording mismatches between prompt and options that cued the key or misdescribed the options (17, 23, 25, 27, 30, 37, 38, 39 twice, 49), 1 distractor that overstated the stem (46).
- Most serious: the wrong key in headache-48 q1, the invented lactate in headache-49 q2, the unsupported school absences and raised pressure signs in headache-42, and the cueing prompt in headache-17 q1.
- All weight-based doses, the MAP target, the CSF ratio and the thresholds recompute correctly. No dose error was found.
- SAMP ids with a defect: headache-17, headache-22, headache-23, headache-25, headache-27, headache-30, headache-37, headache-38, headache-39, headache-42, headache-46, headache-48, headache-49.
