# Q500B verify review 3: s80, airway (revision 3)

This is a fresh independent review of `src/samps/s80/airway.ts` (airway-48 to airway-52) after revision 3. I did not write or review this batch before. I read the whole final batch, not only the lines revision 3 changed, against docs/Q500B_BRIEF.md, docs/SAMP_REVIEW_BRIEF.md (lens A and lens B), docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I also read the first review (q500b-qa-s80.md), verify 1 (q500b-verify-s80.md), verify 2 (q500b-verify2-s80.md) and the writer's report with its Revision 1 to 3 sections. I did not edit the batch.

## Test runs

- `SAMP_BATCH=s80 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 passed. The bank-wide near duplicate stem test took 5.4 s.
- House style, checked by script: no em dashes, no en dashes, and the only semicolon is in code. No personal names, no mnemonics. Canadian spellings (colour, tumour, calibre, centre, paediatric). "Colorimetric" is the technical term CAFG itself uses, and the bank uses it too. Author is "Preceptor", `reviewed: false`, `version: 1`.

## Sources verified this session

WebFetch was not needed. I read every source by curl this session (Europe PMC full text XML for the PMC papers).

- CAFG 2021 Part 1, PMC8212585. Confirmed: Table 10 (esophageal detector false negatives "Obesity (BMI > 35)", "< 10 kg", "Bronchospasm, mainstem intubation", tube occluded by mucus plug; false positive "Significant recent FMV or SGA ventilation"; colorimetric "As above, plus" acidic gastric contents and epinephrine through the tube; low cardiac output and neonates as false negatives; auscultation specificity 50 to 95% with thick chest and abdominal walls). Table 4 two-handed hold with exaggerated jaw lift, oral airway, assistant ventilating. "minimizing delivery airway pressure, to help limit gastric insufflation". "limiting DL attempts to two and rapidly transitioning to a FB or VL". Pediatric "gastric distension should be considered and treated promptly". Scalpel-bougie "For older children (i.e., > 8–12 yr)". "the waveform will be attenuated" after cardiac arrest. HA-VL stylet shaped "to match the angulation or curvature of the blade ... typically at angles between 60 and 90°", plus "Partially withdraw the HA-VL blade" and "Withdraw the stylet by 4 cm once the tube tip has been passed through the glottis ... allowing the tracheal tube to reflect off the anterior tracheal wall" (relevant to 49 q2 below).
- CAFG 2021 Part 2, PMC8186352. Confirmed: SGA predictors "No teeth or poor dentition", "Increased body mass index", "Neck circumference > 44 cm". "suctioning a nasogastric tube if already present (consider inserting one if not) before induction". The obstructed airway points used in 51 were confirmed by all three earlier reviews.
- DAS 2015. The cited OUP URL returns 403 to curl, so I read the same paper at Europe PMC (PMC4650961). Verify 1 opened the OUP URL itself. Confirmed: NG drainage "should be considered" in intestinal obstruction, "cricoid pressure should be released" when laryngoscopy is difficult during RSI with suction available, "rotating the tube anticlockwise to change the orientation of the bevel".
- Root 2020 SALAD, PMC8244406. Confirmed: catheter parked "in the upper esophagus", tube lumen "suctioned with a soft catheter to clear any residual contaminant prior to ventilation via the tube".
- DAS ATI 2020, PMC7078877. Confirmed: stridor, "Critical adverse consequences of over-sedation", "Avoid or minimise sedation".
- Bair 2005, https://ajemjournal.com/article/S0735-67570500157-9/fulltext (200). Confirmed: 20 human cadavers, rings detected in 92%, 95% specific. Hold-up in 100% of tracheal placements, which supports the 50 cm distractor in 49 q3.

No source was left unopened.

## Numbers recomputed

- 49: BMI 47 at 128 kg gives a height of about 1.65 m. Levetiracetam 60 mg/kg is 7680 mg, so the 4500 mg cap applies. Lorazepam 4 mg and midazolam 10 mg IM are correct. Neck 49 cm is over 44 cm.
- 50: 40 mL/kg x 14 kg = 560 mL. Hypotension at 3 years is below 76 mmHg, so 72, 62 and 64 are hypotensive. End-tidal 14 against PaCO2 48 is a gap of 34 mmHg.
- 51: a 4 mm opening is smaller than the outer diameter of any adult tube (a 5.0 tube is about 7 mm outside).
- 52: BMI 44 is over 35. The q4 figures match Table 10.

## Bank-wide repeat search

I grepped `src/samps` (all batches, including the other Q500B batches) and `src/cases` for: esophageal detector, detector bulb, colorimetric, suction assisted, anticlockwise, counterclockwise, tracheal rings, neck circumference, glottic tumour, awake tracheostomy, rebend, stylet, hyperangulated, gastric distension, cricoid pressure. Hits are the ones earlier reviews already judged (s21 airway-45 hyperangulated reoxygenation, s21 front of neck predictors, s22 and s81 analgesia-sedation, batch03 Ludwig angina case). s21 "Choking at dinner after throat cancer treatment" keys awake intubation for a radiated neck, a different decision from 51 q3. No new repeat.

## Earlier fails: resolution

| Earlier fail | Resolved? |
|---|---|
| First review, 15 fails | Yes. Rechecked in the current text: hyperkalemia item gone, 49 q1 is the SGA predictor menu, 50 q1 occiput wording fixed, 51 keys short, 52 rebuilt with no FRC wording, every update uses the given wording. |
| Verify 1, 48 q4 update cue and 52 q3 options and explanation | Yes. Text matches the given fixes. |
| Verify 2, 51 q3 update naming nasendoscopy and CT | Yes. The update now reads "Assessment by the team shows a bulky tumour of the left cord ...". No test is named. |
| Verify 2 note, 48 stem "No nasogastric tube is in place." | Yes. Deleted. The stem and q1 still work. I judge this change sound. |

## airway-48: PASS

- q1: PASS. DAS 2015 and CAFG Part 2 support the key. Metoclopramide clause is correct (product monograph).
- q2: PASS. Cricoid release verified.
- q3: PASS. SALAD verified.
- q4: PASS. The update does not reveal the q3 key.

## airway-49: FAIL (1 item)

- q1: PASS. Both keys are in CAFG Part 2 Table 5.
- **q2: FAIL (mechanism oriented wrongly, which also makes a distractor defensible, medium confidence).**
  - The update says the tube on a gently bent stylet "keeps striking the front of the larynx", and the explanation says a gentle bend "aims at the anterior larynx instead of through the cords". The orientation is reversed. The glottis lies anterior to the oral axis in a hyperangulated view, so a tube curved less than the blade travels below and behind the glottis, toward the arytenoids and the esophagus. Anterior impingement is the problem of a tube already shaped to a steep angle, once its tip meets the anterior wall.
  - For that anterior problem, CAFG Part 1 advises withdrawing the stylet by about 4 cm so the tube can reflect off the anterior tracheal wall. So, as written, "Remove the stylet from the tube" is close to a guideline response to the finding the stem describes.
  - External laryngeal pressure moves the larynx backward. Once the stem is corrected to a tube passing behind the glottis, a candidate could argue that it helps. So that option should go.
  - **Fix:**
    - Update: "After induction and paralysis, a hyperangulated videolaryngoscope gives a full view of the cords. The tube, on a stylet with a gentle bend at the tip, keeps passing below the glottis toward the arytenoids and will not enter it. Her O2 saturation is 94%."
    - Options (alphabetical): ["Change to a larger blade", "Change to a smaller tube", "Insert the blade further", "Rebend the stylet to match the blade", "Remove the stylet from the tube"]. Keep `correct: 3`, so the key position balance does not change.
    - Explanation, replace the first sentence with: "A hyperangulated blade shows the glottis around a corner, so a tube with a gentle bend travels below and behind the glottis, toward the arytenoids, instead of curving up through the cords."
    - Explanation, replace "Her view is already full, so external laryngeal pressure and a larger blade fix something that is not the problem." with: "Her view is already full, so a larger blade fixes something that is not the problem, and a smaller tube keeps the same gentle curve."
    - Optional: after the sentence on advancing the blade, add "The Canadian Airway Focus Group advises partly withdrawing the blade instead." This is in the source.
    - Recheck the length gate after the change (the key was already the longest option and stays so, with an essential qualifier).
- q3: PASS. Bair 2005 verified. The update does not reveal the q2 key.
- q4: PASS. Anticlockwise rotation and keeping the laryngoscope in place verified. The update does not reveal the q3 key.

## airway-50: PASS

- q1: PASS. Table 4 and "minimizing delivery airway pressure, to help limit gastric insufflation" support the key and the reasons for rejecting the distractors.
- q2: PASS. Note for the physician: the key assumes a paediatric videolaryngoscope at a rural site, which is reasonable but not stated.
- q3: PASS.
- q4: PASS.

## airway-51: PASS

- q1: PASS.
- q2: PASS.
- q3: PASS. The revised update gives no cue to the q2 key. Awake tracheostomy is the single best answer from the stem facts.
- q4: PASS. Note for the physician: DAS ATI says "avoid or minimise", so a candidate may argue for a very small dose. All the sedating options are full doses, so the key holds.

## airway-52: PASS

- q1: PASS. Note: Table 10 also lists parturients at induction as an EDD false negative cause. Not relevant here.
- q2: PASS.
- q3: PASS.
- q4: PASS.

## Writer's remaining uncertainties

1. KF2 and KF5 have one question each. Acceptable, the tests pass and every key feature is covered.
2. 52 q2 column: resolved (false positive column).
3. 52 q3 foreshadowing q4: acceptable.
4. 51 secured-airway cue: stands, for the physician.

## Unrequested changes (REVIEW-RULES rule 4)

Revision 3 deleted the 48 stem sentence that verify 2 recommended but did not require. Judged on its merits: sound, and it removes a cue.

## Needs physician decision

- 51: the unavoidable cue that the airway will be secured (q2 update, q3 prompt, q4 update).
- 48 q4 against airway-46 q2: a suction catheter down the tube in two settings, judged a different key decision.
- 50 q2: paediatric videolaryngoscope availability at a rural site is assumed.
- Key feature balance: KF2 has one question in this batch.

## Summary

Five SAMPs, 20 questions. Every fail from the first review, verify 1 and verify 2 is resolved. Nineteen questions pass. One fails: 49 q2, which the three earlier reviews passed. Its stem and explanation reverse the direction in which an undercurved tube misses the glottis with a hyperangulated blade, and as written the stylet removal distractor matches a CAFG response to the problem the stem describes. The fix is exact and keeps the key and its position. Every source was opened this session and supports its point. No new repeat was found.

Overall: FAIL (1 item)
