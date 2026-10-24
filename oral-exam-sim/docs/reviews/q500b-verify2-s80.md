# Q500B verify review 2: s80, airway (revision 2)

This is a fresh independent review of `src/samps/s80/airway.ts` (airway-48 to airway-52) after revision 2. I did not write or review this batch before. I read the whole final batch, not only the revised lines, against docs/Q500B_BRIEF.md, docs/SAMP_REVIEW_BRIEF.md (lens A and lens B), docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I also read the first review (q500b-qa-s80.md), the first verify review (q500b-verify-s80.md) and the writer's report with its Revision 1 and Revision 2 sections. I did not edit the batch.

## Test runs

- `SAMP_BATCH=s80 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 passed. The bank-wide near duplicate stem test took 4.6 s.
- `npx tsc --noEmit -p .`: no errors in samps/s80.
- House style, checked by script: no em dashes and no en dashes. The five semicolons are all in code. No personal names. No mnemonics. Canadian spellings (colour, tumour, calibre, centre, paediatric). Author is "Preceptor", `reviewed: false`, `version: 1`.

## Sources verified this session

Every source was opened this session. None was left unverified. WebFetch was not needed: I read the full text by curl.

- CAFG 2021 Part 1, https://pmc.ncbi.nlm.nih.gov/articles/PMC8212585/ (full text XML from Europe PMC). Confirmed: Table 10 esophageal detector false negative causes "Obesity (BMI > 35)", "< 10 kg", "Bronchospasm, mainstem intubation", "Tube occluded by pulmonary edema, mucus plug or blood", and false positive causes "Significant recent FMV or SGA ventilation" and "Bulb filling with emesis". Colorimetric capnometry 97 to 100% sensitive and 91 to 100% specific (non-arrest), false negatives "As above, plus" low cardiac output or severe hypotension and neonates and infants, false positives "As above, plus" acidic gastric contents and epinephrine through the tube. The waveform false negative list includes severe bronchospasm. Auscultation specificity 50 to 95% with thick chest and abdominal walls. "the waveform will be attenuated" after cardiac arrest. Colorimetric capnometry "may have a role if waveform capnography is not available". Table 4: routine oropharyngeal airway, two-handed mask hold with exaggerated jaw lift, an assistant ventilating, additional head extension. The stylet shaped "typically at angles between 60 and 90°". "limiting DL attempts to two and rapidly transitioning to a FB or VL". Pediatric gastric distension "considered and treated promptly". Scalpel-bougie "For older children (i.e., > 8–12 yr)".
- CAFG 2021 Part 2, https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/ (Europe PMC XML). Confirmed: Table 5 SGA predictors "No teeth or poor dentition", "Increased body mass index", "Neck circumference > 44 cm" (age is not listed, so "Age of 44 years" is a true distractor). A nasogastric tube "consider inserting one if not" before induction and attached to suction. Securing the obstructed airway "when resources allow". Nasal endoscopic evaluation and review of CT or MRI. Awake tracheotomy as a primary technique with "a friable airway cancer and/or severely narrowed airway". "apneic oxygenation ... will have no effect if the airway is obstructed".
- DAS 2015. The OUP URL (https://academic.oup.com/bja/article/115/6/827/241360) returned 403 to curl, so I read the same paper at Europe PMC (PMC4650961). Confirmed: "Mechanical drainage by nasogastric tube should be considered ... intestinal obstruction", "If initial attempts at laryngoscopy are difficult during rapid sequence induction, cricoid pressure should be released" with suction available and reapplied if regurgitation occurs, "rotating the tube anticlockwise to change the orientation of the bevel", "keeping the laryngoscope in place enhances the chance of successful intubation". The first verify review opened the OUP URL itself, so the cited URL is real.
- Root 2020 SALAD, https://pmc.ncbi.nlm.nih.gov/articles/PMC8244406/. Confirmed: rigid suction ahead of the blade, parked "in the upper esophagus", and the tube lumen "suctioned with a soft catheter to clear any residual contaminant prior to ventilation via the tube".
- Bair 2005, https://ajemjournal.com/article/S0735-67570500157-9/fulltext (opened, 200). Confirmed: 20 human cadavers, tracheal rings detected in 92%, 95% specific.
- DAS ATI 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7078877/. Confirmed: Table of special circumstances, "Stridor: Critical adverse consequences of over-sedation. Sedation: Avoid or minimise sedation".

## Numbers recomputed

- 48: no doses in the remaining questions. Metoclopramide 10 mg, ondansetron 4 mg and pantoprazole 40 mg are standard adult doses.
- 49: BMI 47 at 128 kg gives a height of about 1.65 m. Lorazepam 4 mg is the 0.1 mg/kg cap. Levetiracetam 60 mg/kg would be 7680 mg, so the 4500 mg maximum applies. Midazolam 10 mg IM is correct over 40 kg. A neck of 49 cm is over 44 cm.
- 50: 40 mL/kg x 14 kg = 560 mL. Hypotension at 3 years is below 70 + 2 x 3 = 76 mmHg, so 72, 62 and 64 mmHg are all hypotensive. End-tidal 14 against PaCO2 48 is a gap of 34 mmHg.
- 52: BMI 44 is over 35. Every Table 10 figure in q4 matches.

## Bank-wide repeat search

I grepped all of `src/samps` (including the Q500B batches s70 to s88) and `src/cases` for: esophageal detector, detector bulb, colorimetric, SALAD, suction assisted, anticlockwise, counterclockwise, tracheal rings, ring clicks, neck circumference, glottic tumour, awake tracheostomy, cricoid pressure, stylet, hyperangulated, rebend, two-handed, gastric distension, orogastric, nasogastric to suction, two attempts, end-tidal gap.
- New hits since the first verify review: s81 analgesia-sedation lists "Cricoid pressure throughout" as a distractor in sedation in pregnancy, and s22 analgesia-sedation uses a neck circumference of 46 cm to predict obstruction under procedural sedation. Both are different decisions from 48 q2 and 49 q1.
- airway-45 q2 (s21) keys removing the blade to reoxygenate after a failed hyperangulated attempt. 49 q2 keys stylet shape with a full view. Different decision.
- No other overlap. The repeats found by the first review stay gone.

## Earlier fails: resolution

| Earlier fail | Resolved? |
|---|---|
| First review, all 15 fails | Yes. Confirmed resolved by the first verify review, and I rechecked each in the current text: 48 q2 hyperkalemia item gone, 49 q1 is the SGA predictor menu, 50 q1 occiput wording fixed, 51 q1 and q4 keys short, 52 rebuilt with no FRC wording, all listed update cues use the given wording. |
| Verify 1, 48 q4 (B6 cue "The glottis comes into view") | Yes. The update reads exactly as the fix gave it: "The tube is passed through the cords on the next attempt. The cuff is inflated, and brown fluid is seen inside the tube." |
| Verify 1, 52 q3 (defensible "Recent alcohol intake", BMI cue to q1, bronchospasm sentence) | Yes. Options are the given alphabetical list, `select: 2`, `correct: [0, 1]`, and the explanation carries the replacement sentences. Severe bronchospasm is a false negative cause in the waveform row that the colorimetric row inherits, so the new sentence is true. None of the eight options is a listed false positive cause other than the two keys. |
| Verify 1, 50 q4 optional wording | Applied, and it matches the CAFG text. |

## airway-48: PASS

- q1: PASS. Supported by DAS 2015 and CAFG Part 2. Note (low confidence, not a fail): the stem's sentence "No nasogastric tube is in place." points straight at the key before the question is asked. It is a realistic handover fact, but the physician may prefer to delete it. If the writer is revising the batch anyway, deleting that sentence is my recommendation. The metoclopramide clause is correct (product monograph), as earlier reviews noted.
- q2: PASS. Cricoid release verified. The update does not reveal the q1 key.
- q3: PASS. SALAD verified. Reapplying cricoid pressure is not an option, so it does not compete.
- q4: PASS. The revised update gives no cue to the q3 key. Every distractor reason is true.

## airway-49: PASS

- q1: PASS. Both keys are in CAFG Part 2 Table 5. Age, bitten tongue, lamotrigine, pulse, seizure length and temperature are not listed predictors.
- q2: PASS. Stylet shaping verified.
- q3: PASS. Bair 2005 verified, named as a cadaver study.
- q4: PASS. Anticlockwise rotation and keeping the laryngoscope in place verified.

## airway-50: PASS

- q1: PASS. Table 4 supports the key, and "additional head extension" in Table 4 supports the rejection of neck flexion.
- q2: PASS.
- q3: PASS.
- q4: PASS. The revised CAFG sentence is accurate.

## airway-51: FAIL (1 item)

- q1: PASS.
- q2: PASS.
- **q3: FAIL (B6 mock-mode cue in the update, medium confidence).** The q3 update opens "Nasendoscopy shows ..." and then "The CT shows ...". That tells a mock-mode candidate the two answers to the q2 menu (flexible nasendoscopy and neck CT review). Earlier reviews failed the same kind of update cue elsewhere in this batch (49 q3, 50 q2 and 50 q3), and neither earlier review flagged this one. The q3 question needs only the findings, not the tests that gave them.
  - **Fix:** change the q3 update to: "Assessment by the team shows a bulky tumour of the left cord that leaves a slit-like opening of about 4 mm and bleeds on contact. The trachea below the cords is normal." Nothing else changes. The q3 explanation already rests on these findings and does not name the tests.
  - The question content passes: awake tracheostomy is the single best answer from these stem facts (CAFG Part 2).
- q4: PASS. "Avoid or minimise sedation" with stridor verified. "No sedative" is last as a "No [action]" option.
- Flag for the physician, carried forward: the q2 update, q3 prompt and q4 update imply the airway will be secured (q1 key). This cannot be avoided.

## airway-52: PASS

- q1: PASS. Obesity over BMI 35 is a Table 10 false negative cause, and the tube was seen passing the cords with bilateral chest rise.
- q2: PASS. Recent FMV or SGA ventilation is in the false positive column. The distractors are in the false negative column, as the explanation says.
- q3: PASS. See the resolution table.
- q4: PASS. Figures match Table 10. Note: direct visualization of the tube between the cords (seen in q1) is not an option, so it does not compete with the key.

## Writer's remaining uncertainties

1. KF2 and KF5 have one question each. Acceptable, the tests pass and every key feature is covered. A later batch should add KF2, as the first verify review noted.
2. 52 q2 column: resolved (false positive column).
3. 52 q3 foreshadowing q4: acceptable.
4. 51 secured-airway cue: stands, for the physician.

## Unrequested changes (REVIEW-RULES rule 4)

None. Revision 2 changed only 48 q4's update, 52 q3 and the optional 50 q4 wording, as asked.

## Needs physician decision

- 51: the unavoidable cue that the airway will be secured.
- 48 q1: whether to keep the stem sentence "No nasogastric tube is in place."
- 48 q4 against airway-46 q2: a suction catheter down the tube in two settings, judged a different key decision.
- Key feature balance: KF2 has one question in this batch.

## Summary

Five SAMPs, 20 questions. Every fail from the first review and the first verify review is resolved. Nineteen questions pass. One fails: 51 q3, where the update names nasendoscopy and CT and so gives away the q2 menu key in mock mode. It has a one-step fix. No key is clinically wrong, every source was opened and supports its point, and no new repeat was found.

Overall: FAIL (1 item)
