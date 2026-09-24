# Review of batch s19 (abdominal pain), Lens B: internal consistency and numbers

Reviewer lens: B, internal consistency and numbers. Scope: `src/samps/s19/abdominal-pain.ts` (abdominal-pain-16 to 47) and `src/samps/s19/review-extra.ts` (abdominal-pain-48 and 49). I read every stem, update, option and explanation sentence of all 34 SAMPs against its own case, one SAMP at a time. I did not rely on the Lens A review. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| abdominal-pain-48 (extra) | q1 | correct | Key was index 0 "CT abdomen with contrast" while the explanation argues for beta-hydroxybutyrate and calls CT the wrong first test. Lens A reports this fix, but the file still held `correct: 0`. Key set to index 3. | High |
| abdominal-pain-49 (extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L seen on the first blood gas", a value the case never gives and that has nothing to do with CT radiation. Lens A reports removing it, but it was still in the file. Removed. | High |
| abdominal-pain-26, abdominal-pain-48 | q2 | explanation | "Does not explain the low glucose". The glucose is 11.2 mmol/L, which is high, not low. The prompt itself says "near-normal". Reworded to "does not explain why the glucose stays near normal". | High |
| abdominal-pain-28 | q1 | explanation | Rejected meningococcemia because he is "well perfused". The stem gives no capillary refill or perfusion finding. Replaced with a stem fact: afebrile with a normal BP (102/64 mmHg). | Medium |
| abdominal-pain-18 | q1 | explanation | Cited "known gallstones". The stem gives only biliary colic 2 years ago, with no imaging. Reworded to "past biliary colic". | Low |
| abdominal-pain-22 | q2 | explanation | Called the picture "small bowel obstruction" twice. The stem gives vomiting, distension and high pitched bowel sounds but no imaging, so small against large bowel is not established. Reworded to "bowel obstruction" and "the obstruction". | Low |
| abdominal-pain-45 | q3 | options | Keyed menu option "Cautious IV fluid to restore perfusion" carried its own justification (SAMP_SPEC section 7). Shortened to "Cautious IV crystalloid". The reason stays in the explanation. Alphabetical position unchanged. | Medium |
| abdominal-pain-43 | q1 | update | Update of 9 words, below the 10 to 45 word range. Now "Her daughter is relieved that the diarrhea has slowed over the last day", which matches the stem timeline ("over the last day she has had fewer stools"). | Low |

## Key changes

- abdominal-pain-48 q1 (review-extra.ts): before index 0 "CT abdomen with contrast", after index 3 "Serum beta-hydroxybutyrate". The key contradicted its own explanation and the case (anion gap 28, pH 7.14, glucose 11.2 mmol/L on empagliflozin). The explanation already supports the new key, so no rebuild was needed. It now matches abdominal-pain-26 q1.

No key was changed in the main file.

## Numbers recomputed by script

All values below were recomputed with a Python script. Every one matches the stem and explanation.

- 20: lipase 2 400 / 60 = 40 times the upper limit. Ringer's lactate 1.5 mL/kg/hour x 70 kg = 105 mL/hour. 3 mL/kg/hour x 70 kg = 210 mL/hour. Normal saline 250 mL/hour / 70 kg = 3.57 mL/kg/hour ("about 3.6"). She is euvolemic (moist mucous membranes, pulse 92/minute, BP 134/80 mmHg), so no 10 mL/kg bolus.
- 26 and 48: anion gap 136 minus 100 minus 8 = 28.
- 32 q2: Pediatric Appendicitis Score 10. Hop pain 2, right lower quadrant tenderness 2, anorexia 1, fever 38.4°C 1, vomiting 1, migration 1, WBC 13.8 above 10 x 10^9/L 1, neutrophilia 1 (10.9 / 13.8 = 79%, above 75%, and absolute 10.9 above 7.5 x 10^9/L, so it scores on either definition).
- 37 q1 and 49 q1: Alvarado 7. Right lower quadrant tenderness 2, WBC 11.6 above 10 x 10^9/L 2, anorexia 1, nausea 1, left shift 80% 1. Migration 0, rebound 0, temperature 37.2°C below the 37.3°C threshold 0.
- 42 q2: creatinine 138 umol/L is above 88 umol/L (1 mg/dL), bilirubin 64 umol/L is below 68 umol/L (4 mg/dL). Albumin 1.5 g/kg x 80 kg = 120 g. Ascitic neutrophils 640 x 10^6/L meet the 250 threshold. Creatinine rose 1.53 times baseline, which is kidney injury.
- 42 q3: Runyon thresholds converted correctly. Glucose 50 mg/dL = 2.8 mmol/L, protein 1 g/dL = 10 g/L, albumin gradient 1.1 g/dL = 11 g/L.
- 18: bilirubin 68 umol/L = 4.0 mg/dL (jaundice criterion met). Confusion alone makes grade III, as stated.
- 33: three of the seven PECARN predictors for the girl (abdominal wall bruise, tenderness, pain). The brother's update closes all seven.
- 25 and 47: hemoglobin falls of 26 g/L (128 to 102) and 30 g/L (128 to 98) match the explanations.
- 46: troponin 9 to 64 ng/L at 2 hours, a rise of 55 ng/L.
- 27: hydrocortisone 100 mg IV then 200 mg over 24 hours. 29: valacyclovir 1 g three times daily, acyclovir 800 mg five times daily. 36: magnesium sulfate 4 g IV then 1 g/hour. 39: tranexamic acid 1 g IV, arrival at 40 minutes is within 3 hours.
- 47: last period began 3 weeks ago with regular cycles, so about day 21, the second half of the cycle, as stated.

## Format checks

A scratch scan of all 34 SAMPs checked stem length (all 50 to 150 words), stem opening, update length, dashes and semicolons, explanation length and key to mean distractor length. No stem, dash or semicolon faults. Every key is under 1.5 times the mean distractor length. The closest are 34 q2 (1.48, "Pelvic inflammatory disease", a diagnosis name that cannot be shortened) and 33 q4, 41 q3, 45 q1 (1.40). I left these as they are.

## Observations not changed (low confidence)

- abdominal-pain-40 q1: the four distractors all use "usually" and the key alone does not ("Perforation at diagnosis is common"). A test-wise candidate could spot the odd one out. Rewording the key toward "usually" would overstate the evidence. A physician may want to reword one or two distractors.
- abdominal-pain-34 q3: the key lists three drugs without doses while every distractor gives a dose. The key does not stand out by length (1.36), and full doses would exceed 60 characters.
- abdominal-pain-26 q3 and 28 q3 are loose fits for abdominal-pain KF3, as the writer said. 29 q3 (antiviral) is tagged infectious-diseases KF8, which is about empiric antibiotics. 42 q3 (ascitic fluid features of secondary peritonitis) is a loose fit for abdominal-pain KF4. None tests a different skill badly enough to retag without losing batch coverage.

## Sources verified

This lens checks internal consistency, not citations. I verified no new sources. I relied only on the cited thresholds I could check against the stem arithmetic: Samuel 2002 PAS items, Alvarado 1986 items, AASLD 2021 albumin criteria, Runyon criteria, PECARN 2013 predictors and the TG18 grading.

## Needs physician decision

- abdominal-pain-48 and 49 (review-extra.ts) repeat 26 and 37 almost word for word. They would fail the near-duplicate stem rule if loaded. Even after my fixes, I recommend rejecting both.
- abdominal-pain-40 q1 wording cue, above.

## Process note

To run the format scan I briefly created a temporary test file in `tests/` so that vitest could resolve the `@/` import. I deleted it straight after the run. No other file outside `src/samps/s19/` and this report was changed. I did not run git.

## Summary

- 8 table rows covering 9 question fixes: 1 wrong key (48 q1), 4 explanation claims not supported by the stem (49 q2 invented lactate, 28 q1 perfusion, 18 q1 gallstones, 22 q2 small bowel), 2 explanation errors against the stem's own numbers (26 q2 and 48 q2 "low glucose"), 1 justification inside a keyed option (45 q3), and 1 update below the length range (43 q1).
- Most serious: the wrong key in abdominal-pain-48 q1 and the invented lactate in 49 q2. Lens A reported fixing both, but neither fix was in the file. Next is the "low glucose" error in 26 q2, a SAMP that ships.
- All numbers recomputed with a script were correct: PAS 10, Alvarado 7, anion gap 28, the fluid rates in 20 and the albumin threshold and dose in 42.
- SAMP ids with a defect: abdominal-pain-18, 22, 26, 28, 43, 45, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s19` shows no errors. `SAMP_BATCH=s19 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 655 passed.
