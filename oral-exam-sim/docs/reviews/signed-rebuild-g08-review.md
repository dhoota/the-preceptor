# Review of signed-duplicate rebuild g08

Files: `src/samps/s14/pediatric-fever.ts` and `src/samps/s14/multiple-trauma.ts`. Held back in `src/samps/held-back/g08.json`.

## Verdict by SAMP

| SAMP | Verdict | Reason |
|---|---|---|
| pediatric-fever-03 | FIXED | Aliquot key is sound. 20 mL/kg boluses are now unacceptable, and the longest-option cue in q4 is gone. q4 is the one D1 repeat. |
| pediatric-fever-07 | FIXED | A loose match phrase and a notify match were tightened. The q3 key was the longest option and the only one with a different form, and it now is neither. |
| pediatric-fever-11 | FAIL | It retells the cluster 56 story and repeats two of the keeper's keyed decisions. Needs a new story. Not patched. |
| pediatric-fever-12 | PASS | Keys match the AAP 2010 report and the CPS doses. |
| multiple-trauma-06 | FAIL | q3 repeats the keeper of cluster 43 (cva-13): blunt carotid dissection with Horner syndrome, CT angiography and antithrombotic therapy. Not patched. |
| multiple-trauma-08 | FAIL | q2 converges with g09's airway-09 q3 and repeats signed airway-29 q4 and airway-11 q3. The story also retells signed multiple-trauma-04. Not patched. |
| multiple-trauma-10 | FIXED | The mechanism was a motorcyclist with an open book pelvis and a negative eFAST, which is the cluster 72 shared story (keeper multiple-trauma-01). It is now a watercraft passenger thrown against a dock. |

## Structure (all seven)

Same id, topic, question count, kinds and key features as HEAD. Each is version 2 with `reviewed: false` after the `...META` spread. Each id is in `held-back/g08.json`. A script compared every other SAMP in both files with HEAD, and none changed. The diff touches only these ids and their new source constants.

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-03 q1 | PASS | Perfusion markers, with his own baseline systolic. Generic PF KF 2 decision. |
| pediatric-fever-03 q2 | PASS | Blood culture and piperacillin tazobactam 100 mg/kg = 2.2 g for 22 kg. SIS 2025 update (Crossref checked) prefers pip-tazo or ertapenem, and ertapenem is not offered. |
| pediatric-fever-03 q3 | FIXED | The 5 to 10 mL/kg aliquot (110 to 220 mL) is defensible. San Geroteo 2022, opened: "smaller volumes of 5–10 ml/kg may be beneficial ... in ... pre-existing heart disease at risk of acute pulmonary edema, under the condition of even more frequent clinical reassessments". The unacceptable list now includes "20 ml/kg", so "20 mL/kg boluses" or "10 to 20 mL/kg" no longer earns the aliquot line. The explanation was aligned. |
| pediatric-fever-03 q4 | FIXED | The epinephrine key is sound for a hypotensive, congested child with an EF of 30%. It was the longest option (33 characters against 30). The saline distractor now reads "Further 20 mL/kg Ringer lactate bolus", which is longer. This is a D1 repeat (see below). |
| pediatric-fever-07 q1 | PASS | Raw dairy, animal, food, TB and bite exposures, as the CDC page lists. |
| pediatric-fever-07 q2 | FIXED | The lab item matched the bare word "laboratory", so "send laboratory tests" scored as warning the lab. It now needs a warn, alert, tell, inform or notify phrase. |
| pediatric-fever-07 q3 | FIXED | The key "Alert the laboratory to suspected brucellosis" was 45 characters against 36 for the others, and it was the only option not starting with "Request". The options are now 35 to 44 characters. The key reads "State that brucellosis is suspected" and sits at index 4. The PHAC PSDS supports it. |
| pediatric-fever-07 q4 | FIXED | "notify" alone gave public health credit for "notify the lab". It was removed, and "public health", "notifiable" and "reportable" remain. Doxycycline with rifampin for at least 6 weeks is confirmed on the CDC page (opened). Doxycycline is fine at age 9. |
| pediatric-fever-11 q1 | FAIL | Rectal temperature because peripheral readings underestimate core temperature. environmental-01 keys this in q1 and q3 ("rectal temperature proves otherwise" and a continuous rectal probe because oral and tympanic readings are unreliable). It is not the literal wording of environmental KF 1, so D1 does not cover it. The key is also hedged: its explanation says to cool first when a rectal reading is not immediate. |
| pediatric-fever-11 q2 | FAIL | Cooling with several methods led by cold water immersion, with an end point. This is the cluster's repeated key and the keeper's q2 and q3. It is also keyed in pediatric-fever-34, environmental-04 and environmental-19. On its own it would be the one D1 repeat (environmental KF 2), but q1 is a second repeat of the keeper. |
| pediatric-fever-11 q3 | FAIL (SAMP) | The topiramate history is new, but it sits inside the retold story. |
| pediatric-fever-11 q4 | FAIL (SAMP) | Topiramate hypohidrosis counselling is new (Kim 2010, Crossref checked), but it sits inside the retold story. |
| pediatric-fever-12 q1 | PASS | Implant, surgery within 2 months, same ear, missing extra pneumococcal dose and inner ear malformation all match the AAP abstract (opened via Europe PMC). |
| pediatric-fever-12 q2 | PASS | Parenteral ceftriaxone or cefotaxime within 2 months. Watchful waiting is inappropriate, and tympanocentesis must not delay treatment. All verbatim in the AAP abstract. |
| pediatric-fever-12 q3 | PASS | Meropenem plus vancomycin within 2 months (AAP, verbatim). Doses recomputed for 17 kg: meropenem 40 mg/kg = 680 mg, vancomycin 15 mg/kg = 255 mg, dexamethasone 0.15 mg/kg = 2.55, so 2.6 mg. |
| multiple-trauma-06 q1 | PASS | Replantation transfer preparation. No other SAMP keys it. |
| multiple-trauma-06 q2 | PASS | Wrapped part in a sealed bag in ice water (Singletary 2025, Crossref checked). |
| multiple-trauma-06 q3 | FAIL | This is the cluster 43 repeated key (the dissection, CT angiography and antithrombotic therapy) with the same reason: blunt neck trauma, an ipsilateral Horner syndrome and contralateral deficits. cva-13 is the signed keeper. MT KF 5 is not worded as this decision, so D1 does not apply. Replacing q3 means removing the seatbelt neck abrasion from the stem and writing a new evolving complication, so it is not patched. |
| multiple-trauma-08 q1 | FAIL (SAMP) | Hemorrhage from a missed injury after an older woman falls down stairs with a subdural. It is sound alone, but multiple-trauma-04 (signed, same file) is an 81-year-old woman who falls down stairs with a subdural and deteriorates, and it keys occult hemorrhage, hypercapnia and oversedation among the causes. |
| multiple-trauma-08 q2 | FAIL | This is the check the task asked for. It converges with g09's airway-09 q3: an intubated patient in shock, end-tidal CO2 far below PaCO2, dead space from low cardiac output, ventilation guided by arterial gases. Here "dead space from low cardiac output" is itself a credited accept item. Removing it does not help. The rest repeats signed airway-29 q4 (end-tidal underestimates PaCO2 because of dead space, so the blood gas guides ventilation and the rate goes up) and airway-11 q3 (a TBI patient after a fall down stairs, with an arterial gas to correlate with end-tidal and a normocapnia target). Airway KF 6 is about tube confirmation, so D1 does not cover it. |
| multiple-trauma-08 q3 | FAIL (SAMP) | Hidden bleeding sites. Sound (Rossaint 2023). |
| multiple-trauma-08 q4 | FAIL (SAMP) | Iatrogenic contributors. It overlaps multiple-trauma-04 q4 (oversedation). |
| multiple-trauma-10 q1 | FIXED (stem) | The story was the cluster 72 shared story: a motorcyclist, an open book pelvis and a negative eFAST, with multiple-trauma-01 as keeper. The mechanism is now a personal watercraft passenger thrown against the driver, the handlebars and a dock. No other SAMP in the bank uses a watercraft. The companion injuries of an open pelvic fracture (WSES 2017, Crossref checked) are new to the bank. |
| multiple-trauma-10 q2 | PASS | Rectal, speculum, meatus, neurological exam and pulses. Springing the pelvis is unacceptable. |
| multiple-trauma-10 q3 | PASS | Diverting colostomy is keyed nowhere else. Urgent orthopaedic debridement is a D1 repeat of msk-11 q3 (msk KF 7). |
| multiple-trauma-10 q4 | PASS | VWF and FVIII of at least 0.50 IU/mL for major surgery, concentrate and TXA (ASH 2021, Crossref checked). Desmopressin only for known responders. |

## D1 repeats

- **pediatric-fever-03 q4.** It keys epinephrine over dobutamine and milrinone for hypotension with poor contractility (shock KF 7: "choose the agent according to the shock type"). This echoes signed shock-34 q3 (viral myocarditis, same three drugs, same reasoning). It also echoes the cluster 3 key in shock-12 q4, which g05 is rebuilding. It is the only D1 repeat in this SAMP.
- **multiple-trauma-10 q3.** Urgent orthopaedic debridement and fixation of an open fracture (msk KF 7: "consult surgery promptly for ... open fractures"). This echoes signed msk-11 q3. The colostomy decision in the same question is new.
- **pediatric-fever-11 q2** would be a D1 repeat of environmental-01 q2 and q3 (environmental KF 2, "cool ... rapidly with several methods"). The SAMP fails because q1 adds a second repeat of the keeper (rectal temperature) that D1 does not cover.
- No D1 repeats in pediatric-fever-07, pediatric-fever-12 or multiple-trauma-06. multiple-trauma-06 q3 and multiple-trauma-08 q2 are repeats that D1 does not cover, so both SAMPs fail.

## Duplicate-check evidence

These are simcheck results on the current text (top 3, full/keys).
- pediatric-fever-03: asthma-copd-34 0.27/0.19, shock-12 0.26/0.21 (old text, g05 rebuilding), shock-34 0.23/0.12.
- pediatric-fever-07: infectious-diseases-24 0.18/0.16, pediatric-fever-28 0.14/0.09, infectious-diseases-37 0.11/0.04.
- pediatric-fever-11: environmental-04 0.19/0.20, environmental-17 0.19/0.09, seizures-29 0.18/0.04. The keeper environmental-01 does not score high because its text differs, but its keys are repeated (above).
- pediatric-fever-12: pediatric-fever-36 0.24/0.26 (otitis media with effusion), pediatric-fever-08 0.14/0.08, pediatric-fever-18 0.07/0.14.
- multiple-trauma-06: abdominal-pain-39 0.14, multiple-trauma-46 0.14, ems-23 0.14. A grep for "carotid" and "Horner" in allkeys.tsv found cva-13 and headache-14, which are cluster 43.
- multiple-trauma-08: airway-11 0.22/0.21, airway-36 0.17, multiple-trauma-04 0.16/0.12. A grep for "dead space" in src found airway-29 q4 in s21.
- multiple-trauma-10 after the fix: multiple-trauma-40 0.24/0.14 (hip crush with urethral injury, which keys a binder and a suprapubic catheter), shock-05 0.17, multiple-trauma-01 0.17.
- Other writers: a grep of src/samps for cochlear, brucell, replant, willebrand, watercraft, colostomy, open pelvic and lumbar artery finds only these files. The topiramate, amputation and dilated cardiomyopathy hits elsewhere are unrelated stories.

## Tests

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- pediatric-fever-11, multiple-trauma-06 and multiple-trauma-08 need a new story or, for multiple-trauma-06, a new q3. They are still held back in g08.json, so they stay out of the release.
  - For pediatric-fever-11, the cluster direction (a 3-month-old overbundled near a heater, heat illness versus sepsis, and the septic workup that age still needs) is still unused.
  - For multiple-trauma-06, keep the replantation questions and replace the carotid injury with another evolving complication.
- pediatric-fever-03 q3 now marks "20 mL/kg boluses" as unacceptable (not dangerous) for a child with an EF of 30% and an enlarged liver. The guideline default is 10 to 20 mL/kg, so please confirm that you agree for known cardiomyopathy.
- pediatric-fever-03 q4 is a D1 repeat of shock-34 q3 (epinephrine over dobutamine and milrinone). Say so if you want it rebuilt.
- multiple-trauma-10 now uses a personal watercraft collision with a dock. Please confirm that an APC open book injury from this mechanism reads as plausible.
- Sources I opened directly: San Geroteo 2022 (full text), the CDC brucellosis clinical overview, and the AAP 2010 cochlear implant abstract. The other DOIs were checked for existence and title via Crossref. Their content is as the writer reported and was not reread.
