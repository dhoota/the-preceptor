# Signed-duplicate rebuild g15

Second rebuild of three SAMPs that failed the g08 review (docs/reviews/signed-rebuild-g08-review.md). Files: `src/samps/s14/pediatric-fever.ts` and `src/samps/s14/multiple-trauma.ts`. Held back in `src/samps/held-back/g15.json` (they are also still listed in g08.json).

Each keeps its id, topic, question count, kinds and key features. Each is version 2 with `reviewed: false` after the `...META` spread. A script compared every other SAMP in both files with HEAD, and none changed. Source constants that only the failed versions used were removed (acsm-heat, acsm-2023, kim-topiramate, east-bcvi, warner-etco2).

## Rows

| SAMP | Old story | New story | Keyed decisions | Sources (opened) |
|---|---|---|---|---|
| pediatric-fever-11 (cluster 56) | Exertional heat stroke in a child at sport (original), then a day camp boy on topiramate (failed g08) | A 12-week-old girl, febrile at 40.2°C rectal, still in a car seat in a hooded snowsuit with two blankets. She is alert and settles when held. No heat stroke anywhere. | q1 (env KF 1): remove the snowsuit and blankets first, over ice, immersion, acetaminophen or ibuprofen. q2 (env KF 2): 39.4°C after 20 minutes undressed is a true fever, bundling does not explain a raised rectal temperature, and she still needs the infection evaluation for 61 to 90 days. q3 (PF KF 6): history for noninfectious causes (heat sources and duration, remedies, vaccine timing, feeding, how the temperature was taken). q4 (env KF 2): discharge advice after a negative urinalysis (follow-up in 24 to 48 hours, the pending culture, return signs, no snowsuit under the harness, not sleeping in the car seat, lighter dressing, away from the heater). | CPS Caring for Kids, Fever and temperature taking, 2022. Grover et al, Pediatrics 1994 (abstract read via Europe PMC). CPS position statement on febrile infants aged 90 days or younger (full text read). CPS Caring for Kids, Car seat safety, 2020. |
| multiple-trauma-06 (cluster 54) | Logger waiting for a fixed wing flight with a pneumothorax (original), then a carotid injury with Horner syndrome in q3 (failed g08) | The same wrist amputation replantation transfer (q1 and q2 unchanged). The seatbelt neck abrasion is removed. New q3: 10 minutes after cefazolin starts, while she waits for the helicopter, she becomes restless with flushing, wheals, wheeze and BP 84/38 mmHg, and her stump dressing is dry. | q3 (MT KF 5): recognize anaphylaxis to cefazolin, not bleeding. Stop the cefazolin, epinephrine 0.5 mg IM (0.01 mg/kg is 0.64 mg, capped at 0.5 mg), supine, oxygen, 20 mL/kg crystalloid (1 280 mL for 64 kg), salbutamol after epinephrine, reassessment, hold the flight, record the allergy. Dangerous: epinephrine 1 mg IV push. Unacceptable: massive transfusion. | Wolfe 2015 and Singletary 2025 (unchanged). WAO anaphylaxis guidance 2020 (full text read via Europe PMC). |
| multiple-trauma-08 (cluster 25) | Ejected rollover driver desaturating after intubation (original), then an older woman after a fall down stairs with an end-tidal CO2 question (failed g08) | A 38-year-old man whose chest was pinned against a barn wall by a reversing skid steer loader. Hemoptysis, neck crepitus and a right pneumothorax. The chest tube bubbles continuously, the emphysema spreads to his face and the lung falls away from the hilum. No stairs, no older patient, no end-tidal CO2 question. | q1 (MT KF 5): right main bronchus tear. q2 (airway KF 6): intubate over a flexible bronchoscope with the tip and cuff beyond the tear, into the left main bronchus, most experienced operator with the surgeon, surgical airway and thoracotomy set ready, spontaneous breathing, then confirm with oximetry, capnography and a blood gas. Blind intubation is unacceptable. q3 (MT KF 3): associated injuries (esophagus, great vessels, sternum and heart, contusion, fractures, abdomen and pelvis, face, pneumopericardium). q4 (MT KF 3): iatrogenic problems (suction versus water seal, do not clamp the bubbling tube, air embolism, high pressures, the tube slipping back, hypothermia). Dangerous: clamping the chest tube. | Antonescu et al, Mediastinum 2022 (full text read via Europe PMC). WSES-AAST thoracic trauma guidelines 2025 (full text read via Europe PMC). BTS clinical statement on pleural procedures, online appendix 8, 2023 (PDF read). |

## Duplicate checks

### Decision search (allkeys.tsv and src/samps)

- pediatric-fever-11. Terms: undress, unbundl, bundl, snowsuit, blanket, clothing, lukewarm, tepid, sponge, heater, overheat, car seat, attribut, vaccin, immuniz, teething, formula, safe sleep, crib. Closest hits: environmental-17 q1 "Strip the blankets and cool him now" (a miner with heat stroke, itself a D1 entry), environmental-04 q1 lists "Remove clothing" among cooling methods, loc-40 q1 "How her formula is prepared" (so formula was left out of q3), pediatric-fever-18 (fever on vaccine day, keys urine testing if fever persists). Febrile infant test lists are keyed in pediatric-fever-01, 02 and 25, so q2 no longer keys a test list. Nothing keys bundling, car seats, snowsuits or safe sleep. pediatric-fever-34 (toddler in a hot parked car) keys classic heat stroke and immersion, and this story avoids both.
- multiple-trauma-06 q3. Terms: blunt cardiac, repeat eFAST, splen, TXA, epidural, lucid, lipid, local anesthetic, compartment, cefazolin, side chain, anaphylaxis. Bleeding, epidural and LAST keys are saturated, so none was used. No SAMP keys drug anaphylaxis in a trauma patient. Epinephrine 0.5 mg IM is keyed in anaphylaxis-01 q1, 02 q2, 08 q2, 09 q1 and 11 q1 (see D1 below).
- multiple-trauma-08. Terms: mainstem, main bronchus, withdraw, tube depth, cuff, carina, supraglottic, laryn, trache, clothesline, bronchial, tracheobronchial, air leak, bronchoscop, water seal, clamp, gas embolism, esophageal injury, aortic injury. Closest hits: airway-37 q3 "Carina seen through the scope" (hanging with laryngeal injury, bronchoscopic tube confirmation), airway-05, 16, 21 and 44 (mainstem withdrawal, avoided), airway-28 q3 "Cuff at or above the vocal cords" (avoided), multiple-trauma-47 q1 blunt thoracic aortic injury (one item in the q3 list). Tracheobronchial rupture appears in the bank only as a distractor. No SAMP uses a skid steer loader.

### Simcheck (top 5, full and keys)

- pediatric-fever-11: pediatric-fever-18 0.20/0.10, pediatric-fever-02 0.18/0.17, pediatric-fever-34 0.17/0.05, pediatric-fever-43 0.15/0.01, pediatric-fever-17 0.15/0.10.
- multiple-trauma-06: multiple-patients-08 0.16/0.14, multiple-trauma-46 0.15/0.03, multiple-trauma-16 0.13/0.15, lacerations-37 0.06/0.15, abdominal-pain-39 0.13/0.06.
- multiple-trauma-08: airway-37 0.16/0.18, sob-03 0.16/0.14, multiple-trauma-02 0.15/0.15, multiple-trauma-06 (old logger text) 0.15/0.15, airway-15 0.15/0.13. A first draft used a falling tree, which was the cluster 54 logger mechanism, so it was changed to a skid steer loader.

### Signed clusters and other writers

None of the three touches heat stroke, a carotid injury, a fall down stairs, end-tidal CO2 as a question or desaturation after intubation. A final grep of src/samps for skid steer, bronchial tear, fallen lung, snowsuit, bundling and anaphylaxis to cefazolin found only these files.

## D1 repeats

At most one per SAMP, each the literal wording of a key feature. These are not yet in docs/DECISIONS.md, which another writer had open with unsaved changes, so the table was not edited.

- pediatric-fever-11 q1: start cooling right away by removing insulating layers (environmental KF 1). Echoes environmental-17 q1.
- multiple-trauma-06 q3: epinephrine IM for anaphylaxis (anaphylaxis KF 3). Echoes anaphylaxis-01 q1 and others.
- multiple-trauma-08 q2: confirm tube placement with a bronchoscope (airway KF 6). Echoes airway-37 q3. The decision here is endobronchial placement beyond a bronchial tear, but the reviewer may count it.

## Tests

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- pediatric-fever-11 uses a 12-week-old (84 days) rather than the suggested 3-month-old, so the CPS statement for 61 to 90 days applies. Please confirm that discharge after a negative catheter urinalysis, with the culture pending and follow-up in 24 to 48 hours, fits your practice after a presenting temperature of 40.2°C.
- pediatric-fever-11 q1 keys removing the snowsuit and blankets before acetaminophen. Acetaminophen is not wrong for comfort. It is simply not the first step. Please confirm.
- Grover 1994 studied bundling in a room at 22 to 24°C. This infant also sat by a space heater and in a heated car, so her heat load was higher. The explanation says so. The key teaching is still that a persistent rectal fever after undressing must not be put down to bundling.
- multiple-trauma-06 q3 takes a new direction: anaphylaxis to cefazolin mistaken for bleeding in a trauma patient. Please confirm that the vital signs and the "hold the flight until stable" item read as you would expect. "Record the allergy and choose another antibiotic" is accepted, and clindamycin is in its match list, but the explanation does not name an alternative because the sources used do not address open-fracture prophylaxis after cefazolin anaphylaxis.
- multiple-trauma-08 q2 accepts capnography as one confirmation item because it is defensible. The question is about bronchoscopic placement beyond the tear, not end-tidal CO2.
- multiple-trauma-08 q4 marks clamping the bubbling chest tube as dangerous. The BTS appendix says clamping a drain with a continuing air leak could cause tension pneumothorax, except under specialist pleural supervision.
- Sources read in full or as the full abstract: the CPS febrile infant statement, CPS Caring for Kids pages on fever, car seats and safe sleep, the Grover abstract, WAO 2020, WSES-AAST 2025, Antonescu 2022 and the BTS appendix.
