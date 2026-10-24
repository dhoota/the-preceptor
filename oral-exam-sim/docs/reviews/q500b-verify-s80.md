# Q500B verify review: s80, airway (revision 1)

This is a fresh independent review of the revised `src/samps/s80/airway.ts` (airway-48 to airway-52). I did not write or review this batch before. I read the whole final batch against docs/Q500B_BRIEF.md, docs/SAMP_REVIEW_BRIEF.md (lens A and lens B), docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md, together with the first review (q500b-qa-s80.md) and the writer's report with its "Revision 1" section. I did not edit the batch.

## Test run

- `SAMP_BATCH=s80 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 passed. The bank-wide near duplicate stem test took 5.5 s.
- House style: no em dashes, no en dashes. The five semicolons are all in code. No personal names. Author is "Preceptor", `reviewed: false`, `version: 1`. "Paediatric" (50 stem) is used elsewhere in the bank.

## Sources verified this session

Every source in the batch was opened this session. None was left unverified.

- CAFG 2021 Part 1, https://pmc.ncbi.nlm.nih.gov/articles/PMC8212585/ (WebFetch, and the full text XML from Europe PMC read by script, so the Table 10 columns could be seen). Confirmed:
  - Table 10 column headers: false negative means "tube is in trachea, but a negative test result suggests it is in the esophagus". False positive means "tube is in esophagus or pharynx, but a positive test result suggests it is in the trachea".
  - Esophageal detector device. False negative column: "Obesity (BMI > 35)", "< 10 kg", "Bronchospasm, mainstem intubation", "Tube occluded by pulmonary edema, mucus plug or blood". False positive column: "Significant recent FMV or SGA ventilation", "Bulb filling with emesis rather than gas". This settles the writer's uncertainty 2. The 52 q2 key and its distractors are in the right columns.
  - Colorimetric capnometry: sensitivity 97 to 100% (non-arrest), specificity 91 to 100% (non-arrest). False negatives: as for waveform, plus low cardiac output or severe hypotension and neonates and infants. False positives: as for waveform, plus "Contamination of detector with acidic gastric contents" and "Recent instillation of medications through the tracheal tube including epinephrine". The waveform false positive causes that the colorimetric row inherits include "Recent extensive use of FMV" and "Ingestion of antacid or carbonated beverages" (see 52 q3).
  - Auscultation: specificity 50 to 95%, with thick chest and abdominal walls a false negative cause.
  - "The CAFG recommends limiting DL attempts to two and rapidly transitioning to a FB or VL", "gastric distension should be considered and treated promptly", routine oropharyngeal airway and two-handed hold (Table 4), the stylet "typically at angles between 60 and 90°", scalpel-bougie "For older children (i.e., > 8–12 yr)", "Colorimetric capnometry ... may have a role if waveform capnography is not available".
  - "the waveform will be attenuated" is said of the period after cardiac arrest (see the optional note on 50 q4).
- CAFG 2021 Part 2, https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/. Confirmed Table 5, predictors of difficult supraglottic airway insertion or ventilation: "No teeth or poor dentition", "Increased body mass index" and "Neck circumference > 44 cm". This supports the new 49 q1. The first review confirmed the obstructed airway points used in 51 (securing the airway "when resources allow", nasal endoscopy and CT review, awake tracheotomy). I did not re-quote them.
- DAS 2015, https://academic.oup.com/bja/article/115/6/827/241360. Confirmed: "If initial attempts at laryngoscopy are difficult during rapid sequence induction, cricoid pressure should be released" (with suction available, reapplied if regurgitation occurs). Also "rotating the tube anticlockwise to change the orientation of the bevel", "keeping the laryngoscope in place enhances the chance of successful intubation", and "Mechanical drainage by nasogastric tube should be considered" in intestinal obstruction. The first review could not open this source. It is now verified.
- Root 2020 SALAD, https://pmc.ncbi.nlm.nih.gov/articles/PMC8244406/. Confirmed: the rigid suction is "continuously suctioning as it is advanced just ahead of the laryngoscope blade", and "advanced until the tip is sitting in the upper esophagus". The tube lumen "is suctioned with a soft catheter to clear any residual contaminant" "prior to ventilation via the tube". This supports the new 48 q4.
- Bair 2005, https://ajemjournal.com/article/S0735-67570500157-9/fulltext. Confirmed: ring clicks 92% sensitive and 95% specific, in "a prospective blinded trial in 20 human cadavers". The first review could not open this source. It is now verified.
- DAS ATI 2020, https://pmc.ncbi.nlm.nih.gov/articles/PMC7078877/. Confirmed: under stridor, "Critical adverse consequences of over-sedation" and "Avoid or minimise sedation".

## Numbers recomputed

- 49: a BMI of 47 at 128 kg gives a height of about 1.65 m. Levetiracetam at 60 mg/kg would be 7680 mg, so the 4500 mg maximum applies. Midazolam 10 mg IM and lorazepam 4 mg IV are correct. The neck circumference of 49 cm is over the 44 cm threshold.
- 50: 40 mL/kg x 14 kg = 560 mL. The hypotension threshold at 3 years is 70 + 2 x 3 = 76 mmHg, so a systolic of 72 is hypotensive. End-tidal CO2 of 14 against a PaCO2 of 48 is a gap of 34 mmHg.
- 52: a BMI of 44 meets the "BMI > 35" criterion. The sensitivity, specificity and auscultation figures in q4 match Table 10 exactly.

## Bank-wide repeat search

I grepped all of `src/samps` (every batch, including the other Q500B batches) and `src/cases` by keyword, not by topic. The terms were: esophageal detector, detector bulb, colorimetric, SALAD, suction assisted, suction down or through the tube, before ventilating, cricoid, nasogastric to suction, neck circumference, edentulous, missing teeth, supraglottic predictors, glottic or laryngeal tumour, awake tracheostomy, counterclockwise, anticlockwise, ring clicks, hold-up, and stylet.

- Esophageal detector and colorimetric detector: no other SAMP or case. The only other "colorimetric" hit is hydroxocobalamin interfering with lab colorimetry (batch05 house-fire-burns). 52 is new.
- Predictors of difficult supraglottic airway use: none. airway-28 (s21) keys front-of-neck predictors, and airway-06, airway-35 and two analgesia-sedation SAMPs key face-mask predictors. 49 q1 is a different key decision.
- Suction down the tube: airway-46 q2 (s21) keys "Pass a suction catheter down the tube" for a tube blocked by a smoke inhalation cast, and multiple-patients (s13) lists suction for a high-pressure ventilated patient. 48 q4 keys the same action at a different decision point (clearing aspirate after a regurgitation intubation, before the first breath). This passes, with low confidence. The physician may want to see the two side by side.
- SALAD appears only as a preparation line in two oral cases (cico-scalpel-cricothyrotomy, variceal-hemorrhage-rural). 48 q3 is a rescue decision during active regurgitation and passes.
- NG decompression before induction for bowel obstruction: not keyed elsewhere. multiple-trauma (s45) places an NG tube before transport, not before induction.
- Awake tracheostomy appears as an option in the Ludwig angina oral case (batch03). 51 is a glottic tumour that cannot take a tube, which is a different decision.
- Cricoid release, counterclockwise rotation, ring clicks and stylet shaping are not keyed elsewhere.

The repeats the first review found (multiple-trauma-36 q1, airway-06 q1 and q2, airway-13 q2) are gone from the revised batch.

## First-review fails: resolution

| First-review fail | Resolved? |
|---|---|
| 48 q2 repeat of multiple-trauma-36 q1, NG cue | Yes. The hyperkalemia question was removed, along with its stem details and the Hovgaard source. The q2 update no longer mentions the NG tube. |
| 48 q4 cue ("view improves") | Yes. Now q3, with the review's wording. |
| 49 q1 repeat of airway-06 q1 | Yes. Replaced with a supraglottic predictor menu, which is new and verified. |
| 49 q3 and q4 cues | Yes. Both use the review's wording. |
| 50 q1 occiput accuracy | Yes. Uses the review's wording. |
| 50 q2, q3 and q4 cues | Yes. All use the review's wording. |
| 51 q1 and q4 length cues | Yes. The keys are "Secure the airway today" and "No sedative" (last, as a "No [action]" option, B9). |
| 52 q1 and q2 repeats, q3 cue, q4 plausibility | Yes for every listed point. 52 was rebuilt, and the FRC wording is gone. The new items raise the two points in 52 q3 below. |

## airway-48: FAIL (1 item)

- q1: PASS. DAS 2015 says NG drainage "should be considered" in intestinal obstruction, and CAFG Part 2 advises a nasogastric tube to suction before induction. The metoclopramide clause is correct (product monograph) and optional, as before.
- q2: PASS. Cricoid release is verified against DAS 2015. The update does not reveal the q1 key.
- q3: PASS. SALAD is verified. DAS also says to reapply cricoid pressure if regurgitation occurs, but that is not an option, so it does not compete with the key (writer's earlier uncertainty 3).
- **q4: FAIL (B6 mock-mode cue, medium confidence).** This question is new in the revision. The content is sound: SALAD verified, every distractor reason is true, and the key decision is not elsewhere in the bank (see the airway-46 note above). But the update opens with "The glottis comes into view". Coming straight after q3's pharynx filled with fluid, that implies the fluid was cleared. That points to the q3 key, rigid suction, and away from bag-mask, a supraglottic airway, a blind bougie or a camera blade. It is the same kind of cue as the first review's "As the pressure is released the view improves".
  - **Fix:** change the q4 update to "The tube is passed through the cords on the next attempt. The cuff is inflated, and brown fluid is seen inside the tube." Nothing else changes.

## airway-49: PASS

- q1: PASS. CAFG Part 2 Table 5 lists "No teeth or poor dentition" and "Neck circumference > 44 cm". Every distractor reason is true. The menu format and alphabetical order are correct.
- q2: PASS. The stylet is shaped to match the blade at 60 to 90 degrees (CAFG Part 1). The q3 update, "The tube still cannot be passed", does not reveal the q2 key.
- q3: PASS. Bair 2005 is verified (cadaver study, named as such in the explanation). Writer's earlier uncertainty 5 is acceptable.
- q4: PASS. Anticlockwise rotation and keeping the laryngoscope in place are verified against DAS 2015.

## airway-50: PASS

- q1: PASS. The fixed occiput wording is accurate. The two-handed hold and the routine oral airway are verified (CAFG Part 1 Table 4).
- q2: PASS. CAFG limits DL to two attempts and then moves to VL or a flexible bronchoscope. Scalpel cricothyrotomy is limited to children older than about 8 to 12 years.
- q3: PASS. Pediatric gastric distension "considered and treated promptly" is verified.
- q4: PASS. The update, "His ventilation is now easier", does not single out the q3 key, because an orogastric tube, thoracostomy or pulling the tube back could each ease ventilation. Optional wording: CAFG's "the waveform will be attenuated" refers to the period after cardiac arrest. The explanation's "in low flow states" is a fair extension, but a stricter version would read: "the Canadian Airway Focus Group notes that the waveform persists but is attenuated in the low flow state after cardiac arrest, and lists low cardiac output and severe hypotension among causes of a falsely low colorimetric reading." This is not a fail.

## airway-51: PASS

- q1: PASS. The length cue is fixed. This is the only KF2 question (see below).
- q2: PASS.
- q3: PASS. The key is supported by CAFG Part 2. The stem facts (a 4 mm slit that bleeds on contact, and a normal trachea below) make awake tracheostomy the single best answer over awake bronchoscopic intubation.
- q4: PASS. DAS ATI "Avoid or minimise sedation" in stridor is verified. "No sedative" is last as a "No [action]" option.
- Flag for the physician, carried forward from the first review: the q2 update, the q3 prompt and the q4 update all imply that the airway will be secured. This is an unavoidable B6 cue, so it is flagged, not failed.

## airway-52: FAIL (1 item)

- q1: PASS. The tube is seen passing the cords with bilateral chest rise, and slow refill is a false negative from "Obesity (BMI > 35)" (Table 10). The update no longer says a first tube was removed, and the FRC wording is gone. Every distractor reason is true.
- q2: PASS (writer's uncertainty 2 resolved). The Table 10 XML puts "Significant recent FMV or SGA ventilation" in the false positive column: the tube is in the esophagus, but the bulb suggests the trachea. The distractors "< 10 kg", bronchospasm and "Tube occluded by ... mucus plug" are all in the false negative column, as the explanation says.
- **q3: FAIL (a distractor that is arguably defensible, plus a B6 cue, medium confidence).**
  - "Recent alcohol intake" is keyed as not causing a false positive. But Table 10 lists "Ingestion of antacid or carbonated beverages" as a false positive cause for waveform capnography, and the colorimetric row inherits it ("As above, plus"). The stem says she took the tablets "with alcohol", which could have been beer or another carbonated drink. A well-read candidate can defend this option, and the explanation's "alcohol ... do[es] not create a false colour change" is not clearly true for a carbonated drink.
  - The option "BMI over 35 kg/m2" shown in q3 tells a mock-mode candidate that a BMI over 35 matters to tube detectors, which points to the q1 key "Obesity giving a false result" (B6).
  - The explanation groups "bronchospasm" with drugs that have no effect. Table 10 lists severe bronchospasm as a false negative cause, so the sentence should say so.
  - **Fix:**
    - Replace the options with this alphabetical list: ["Epinephrine down the tube", "Gastric acid on the detector", "Low cardiac output", "Neonatal patient", "Quetiapine in her blood", "Right mainstem intubation", "Severe bronchospasm", "Sinus tachycardia"]. Set `correct: [0, 1]` and keep `select: 2`.
    - In the explanation, replace "Obesity misleads the esophageal detector bulb, not the colorimetric detector. Quetiapine, alcohol and bronchospasm do not create a false colour change." with "Severe bronchospasm can also cause a false negative result, by limiting the CO2 that reaches the detector. A right mainstem tube still delivers CO2 to the detector, so the colour change is true. Quetiapine and a fast heart rate do not change the colour of the indicator."
    - Recheck the batch length and position gates after the change.
- q4: PASS. Colorimetric capnometry has "a role if waveform capnography is not available", and every figure matches Table 10. Writer's uncertainty 3 (q3 foreshadowing q4): q3 teaches false positives and does not say the detector is the most reliable method left, so B7 is not breached. Acceptable.

## Writer's remaining uncertainties

1. KF2 and KF5 have one question each. Acceptable, because the tests pass and every key feature is covered. Note for the physician: the brief asks for the extra questions to go to the thinnest key features. KF2 (23 in the bank) is the second thinnest and got 1, while KF4 (37, the richest) got 4. This is not a fail, but a later batch should add KF2.
2. 52 q2 column. Resolved by the Table 10 XML (false positive column). PASS.
3. 52 q3 to q4 cue. Acceptable (see above). The 52 q3 fail is for other reasons.
4. 51 secured-airway cue. Still stands, for the physician.

## Unrequested changes judged on merit (REVIEW-RULES rule 4)

- 48: the new q4 (SALAD suction down the tube). The content passes. Its update fails B6 (fix above).
- 48: the dialysis and hyperkalemia stem details were removed. That is correct, and the stem is still coherent.
- 52: q2, q3 and q4 are new. q2 and q4 pass. q3 fails (fix above).

## Needs physician decision

- 51: the B6 cue that the airway will be secured cannot be avoided (q2 update, q3 prompt, q4 update).
- 48 q4 against airway-46 q2: the same action (a suction catheter down the tube) in two different settings. I judge it a different key decision.
- Key feature balance (KF2 thin in this batch), as above.

## Summary

Five SAMPs, 20 questions. Every first-review fail is resolved. 18 questions pass. Two fail, both in new revision content, and both have exact one-step fixes: 48 q4 (a B6 cue in the update) and 52 q3 (an arguably defensible distractor given carbonated beverages, plus a B6 cue to 52 q1). No key is clinically wrong. Every source was opened and supports its point.

Overall: FAIL (2 items)
