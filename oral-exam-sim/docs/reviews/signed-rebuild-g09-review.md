# Review of signed-duplicate rebuild, label g09

Files: `src/samps/s02/airway.ts` and `src/samps/s02/analgesia-sedation.ts`. Writer report: `docs/reviews/signed-rebuild-g09.md`.

## Structure

All five SAMPs keep their id, topic, question count, kinds and key features (checked against `git show HEAD`). Each is version 2 with `reviewed: false`. All five ids are in `src/samps/held-back/g09.json`. No other SAMP in either file changed. The diff touches only these ids and the new source constants they cite.

## Per question

| SAMP | Q | Verdict | Notes |
|---|---|---|---|
| airway-02 | q1 | FIXED | The oral item did not credit "perioral burns", "facial burns" or "oral burns", which are the classic warning signs and the point of the Verhees report. Added those match phrases. |
| airway-02 | q2 | PASS | Controlled intubation in the operating room. Verhees states that the literature favours the operating theatre and that neck radiography should not delay airway control. |
| airway-02 | q3 | PASS | Smaller tubes, a rigid bronchoscope and spontaneous breathing are specific to this case. Alkaabi reports failed 3.5 and 3.0 mm tubes and rescue through a rigid bronchoscope. The "experienced operator with surgical backup" items echo burns-11, but they are 2 of 7 and are generic airway practice. |
| airway-02 | q4 | FIXED | The scald item matched any line with "chest" or "hand", so "chest X-ray" earned credit. Narrowed it to "chest burn", "hand scald", "burn size" and similar phrases. |
| airway-09 | q1 | FAIL | The RSI changes for shock with hypoventilation (fluid, vasopressor, reduced dose of a stable agent, bag-mask with PEEP, no propofol) repeat pulmonary-edema-02 q4 almost item for item. airway-07 q1 and q2 key the same changes. |
| airway-09 | q2 | FAIL | Multiple-dose charcoal for an anticonvulsant whose elimination it enhances is signed tox-20 q1 (carbamazepine). |
| airway-09 | q3 | PASS | The wide end tidal to arterial CO2 gap from low cardiac output is new to the bank. 58 minus 34 is 24 mmHg. Not patched because the SAMP fails. |
| airway-09 | q4 | FAIL | Intermittent hemodialysis for a level that is rising despite charcoal, in a ventilated comatose patient, per EXTRIP, is signed tox-20 q4. The update even follows the same arc ("six hours later", still comatose, level rising). The anticonvulsant coma, charcoal and dialysis story needs a new story, so this was not patched. |
| airway-10 | q1 | PASS | Rocuronium 1.2 mg/kg (26 x 1.2 = 31.2 mg). Xiang 2026 prefers it over succinylcholine. The distractor reasons are true. Rocuronium 1.2 mg/kg is keyed elsewhere only for adults in other diseases. |
| airway-10 | q2 | FIXED | The write-in list still credited ketamine 1 to 2 mg/kg and slow ventilation with a long expiration, which are keeper asthma-copd-09's keys (q3 and q4). "Experienced operator, ketamine, slow rate" scored full marks. The prompt now excludes the induction drug, the paralytic and the ventilator settings. Ketamine and ventilation items were removed. IV or intraosseous access and backup plans for a failed attempt were added (Xiang: "adequate vascular access", "multiple backup plans"). The explanation was rewritten. Simcheck against asthma-copd-09 fell from 0.30/0.19 to 0.26/0.13. |
| airway-10 | q3 | FIXED | The pneumomediastinum item had a dead phrase ("subcutaneous emphysema observ" never matches a whole word) and did not credit "no drainage for the pneumomediastinum". The ventilation item missed "lower pressures". Match phrases were repaired. The key (a chest tube for a pneumothorax found on positive pressure) is PASS. |
| airway-12 | q1 | PASS | Hyperkalemic arrest after denervation. Martyn 2006 and CSCM 2008 support it. The distractor reasons are true. |
| airway-12 | q2 | PASS | Rocuronium 1.2 x 72 = 86.4 mg. CSCM: "Avoid the use of succinylcholine after the first 48 hours". Succinylcholine is marked dangerous. |
| airway-12 | q3 | PASS | ERC 2025 ALS (opened): atropine 500 mcg repeated to 3 mg, adrenaline 2 to 10 mcg/minute, and aminophylline 100 to 200 mg for bradycardia after spinal cord injury. The key credits atropine at any dose. |
| analgesia-sedation-11 | q1 | FIXED | This is the defect the writer flagged. The old key credited "fentanyl 75 mcg IV repeated" plus "ketamine 0.2 mg/kg", which is burns-14 q1 word for word, for full marks. It gave no credit for "dose on lean body weight", the decision the question was built on. It also credited "fentanyl 1.5 mcg/kg actual weight" (225 mcg) and "morphine 15 mg IV". Now the question asks for the dosing weight and the first IV dose, with required 2 of 2. The items are the dosing weight (lean body weight, about 80 kg, or ideal body weight, about 70 kg) and a dose (fentanyl 50 to 100 mcg, hydromorphone 0.5 to 1 mg, or morphine 4 to 8 mg). Total body weight doses (fentanyl 150 mcg or more, morphine 15 mg, hydromorphone 2 mg) are unacceptable. The burns-14 answer now scores 1 of 2. Lean body weight: 9270 x 150 / (6680 + 216 x 49.0) = 80.5 kg. Ideal body weight (Devine): 50 + 0.91 x 22.6 = 70.6 kg. |
| analgesia-sedation-11 | q2 | PASS | His own CPAP, ketamine, capnography, positioning and smaller increments. Tracy 2025 and Schwenk 2018 support these items. No SAMP keys CPAP for opioid titration. |
| analgesia-sedation-11 | q3 | PASS | Ketamine 20 mg is 0.25 mg/kg of lean body weight, under Schwenk's 0.35 mg/kg bolus limit. Schwenk grade C: "may be considered" in sleep apnea. It sits close to burns-30 q2 (ketamine 27 mg added after opioids in a burn). The keyed decision here is analgesia instead of the lorazepam the nurse asked for. |

## Duplicate checks

- Simcheck, after the fixes (full / keys):
  - airway-02: sob-01 0.21/0.18, anaphylaxis-05 0.20/0.18, airway-19 0.19/0.09, airway-42 0.16/0.17, airway-03 0.17/0.15.
  - airway-09: airway-11 0.21/0.21, tox-19 0.19/0.09, airway-07 0.19/0.15, anaphylaxis-25 0.18/0.06, tox-20 0.17/0.10. The low tox-20 score hides the duplicate. The decision search found it.
  - airway-10: asthma-copd-09 0.26/0.13, sob-04 0.19/0.16, asthma-copd-05 0.17/0.15, airway-15 0.17/0.15, asthma-copd-01 0.16/0.12.
  - airway-12: airway-07 0.22/0.18, pulmonary-edema-02 0.20/0.14, airway-27 0.18/0.07, airway-29 0.13/0.07, sob-25 0.12/0.13.
  - analgesia-sedation-11: burns-26 0.15/0.04, analgesia-sedation-13 0.15/0.10, analgesia-sedation-14 0.14/0.13, burns-30 0.14/0.09, burns-14 0.14/0.12.
- Decision search in allkeys.tsv and src/samps covered these terms: thermal, teapot, kettle, supraglottitis, inflicted, immersion, esophageal, phenobarbital, barbiturate, multiple dose charcoal, hemodialysis, bag-mask with PEEP, rocuronium, succinylcholine, pneumothorax, chest tube, pneumomediastinum, spinal cord injury, aminophylline, lean body weight, sleep apnea, CPAP, ketamine and lorazepam. The closest hits are named in the table above.
- Other writers' stories: burns-01 is now an anhydrous ammonia burn, and asthma-copd-01 is now thunderstorm asthma. burns-17 (s26) is a toddler scalded by a kettle, with no airway injury. sob-04 has not been rebuilt yet. No other SAMP uses a teapot airway, phenobarbital poisoning, a C5 cord injury with intubation, or an obese man with sleep apnea and a burn.

## Style and tests

- No em or en dashes and no semicolons in the five SAMPs.
- `SAMP_BATCH=s02 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 451 passed.
- `npx tsc --noEmit -p .`: no errors.

## For the physician

- **airway-09 FAILS and needs a new story.** Its arc repeats signed tox-20: an anticonvulsant overdose with coma, then multiple-dose charcoal, then a rising level, then hemodialysis by EXTRIP. Its RSI question repeats pulmonary-edema-02 q4. The end tidal gap question (q3) is worth keeping in whatever story replaces it. The SAMP stays held back in g09.json.
- airway-10 q2 no longer asks about the induction drug or the ventilator. Those are the keeper's decisions. Please confirm that fluid, a vasopressor, an experienced operator, a video laryngoscope, IV access and backup plans are a fair list for a child in critical asthma.
- analgesia-sedation-11 q1 now also credits ideal body weight (about 70 kg), with a note that it can underdose. The Ingrande abstract names lean body weight as the best scalar and says ideal body weight can underdose. Please confirm that you want ideal body weight credited.
- analgesia-sedation-11 q3 (ketamine rather than lorazepam) is close to burns-30 q2 (a ketamine adjunct in a burn). Please confirm that the difference (analgesia rather than the sedative the nurse asked for, in sleep apnea) is enough.
- airway-02 q3 and q4 share generic items with burns-11 (experienced operator, surgical backup) and burns-05 (signs of inflicted injury). Each is one item among several, and the SAMP direction asked for the supervision concern.
- The writer's points still stand. airway-02 rests on case reports. airway-12 cites a 2008 consortium guideline. Several sources were read only as abstracts.
