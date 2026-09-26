# Signed-duplicate rebuild, round 2, group r2f

Files: `src/samps/s09/ems.ts` and `src/samps/s09/environmental.ts`. Held back in `src/samps/held-back/r2f.json` (not edited). Round 1 failures: `docs/reviews/signed-rebuild-g06-review.md`.

Four of five ids are rebuilt: ems-08, ems-12, environmental-05 and environmental-07. **ems-10 could not be rebuilt without a repeat. Its block is left exactly as it was when this task started (the failed round 1 text), for the coordinator to restore from HEAD.** See its row.

Every rebuilt SAMP keeps its id, topic, question count, and each question's kind and keyFeature. Each has `...META, reviewed: false, version: 2`. None needs a D1 repeat.

Source constants added: ems.ts `zipursky`, `ncpc`, `atsdrNox`, `brat`. environmental.ts `shemie`, `rossaint`. Round 1 constants that only the failed rebuilds used were removed: `csbpr25`, `hsnOrange`, `cdcRca`, `cscm`, `efns`, `liXing`. `escAcs` stays because the round 1 ems-10 text still cites it.

## Summary

| Id | Old story (round 1, failed) | New story | D1 repeats |
|---|---|---|---|
| ems-08 | Rural site, tenecteplase for stroke, waiting for the aircraft (converged with cva-30) | A 2-year-old with a 20 mm lithium coin battery in the upper esophagus, sent by road from a BC community hospital for endoscopic removal | 0 |
| ems-10 | Anterior STEMI transfer with beta blocker contraindications (converged with pulmonary-edema-02 and keeper ischemic-heart-disease-12) | **Cannot.** Text left as found | n/a |
| ems-12 | Bear spray at a high school, 60 teenagers, Code Orange and reunification (converged with multiple-patients-03 and -15) | Nitrogen dioxide from a faulty propane ice resurfacer at an adult hockey tournament in rural Manitoba | 0 |
| environmental-05 | C5 tetraplegia and hypothermia, with two generic rewarming repeats | Two brothers found after walking from a stalled car: one with a slow organized rhythm and no palpable pulse, one with a frozen chest | 0 |
| environmental-07 | Wernicke after bariatric surgery, with probe and rewarming repeats of keeper loc-15 | A woman found in the snow after a clonazepam and vodka overdose, with fixed pupils at 25.9°C and a family asking about brain death | 0 |

## ems-08 (cluster 53, keeper loc-07)

| Q | Kind, KF | Keyed decision | Source opened |
|---|---|---|---|
| q1 | short, required 1, ems 3 | Honey 10 mL every 10 minutes (up to 6 doses), or sucralfate 1 g every 10 minutes (up to 3) in hospital. Inducing vomiting is dangerous | Zipursky and Ratnapalan, CMAJ 2021, doi 10.1503/cmaj.210572. NCPC guideline, revised 2018, poison.org/battery/guideline |
| q2 | short, required 2, ems 3 | Leave now with the first available crew, straight to the endoscopy suite, team ready, parent travels, ingestion time and battery type passed on | CMAJ 2021 ("batteries in the esophagus should immediately be removed endoscopically") |
| q3 | menu, select 2, ems 3 | Continue honey during the trip. Nothing else by mouth apart from honey | NCPC 2018 |
| q4 | short, required 2, ems 3 | Findings that prompt a call or diversion: blood in vomit or saliva, stridor, drooling, vomiting, chest or neck pain or fever, drowsiness | CMAJ 2021 (perforation, fistulas, aortoesophageal fistula) |

- Decision search: `honey|sucralfate` gives pediatric-fever-09 q1 (honey for cough, a different decision). `battery` gives gi-bleed-20 q1 and q2 (late hematemesis, removal with cardiothoracic backup) and ems-28 q3 (infusion pump batteries). gi-bleed-20 lists honey as a wrong option for a 6-day-old ingestion, and its explanation says why. No SAMP keys honey or sucralfate for an acute battery. `endoscop` gives only GI bleed endoscopy timing. `keep npo` appears as one item in several lists (ems-02, first-trimester-bleeding). Here it is one of two menu keys and is tied to the honey exception.
- simcheck top 5 (full/keys): gi-bleed-20 0.26/0.10, ems-28 0.11/0.13, ems-31 0.12/0.07, sob-01 0.12/0.09, ems-34 0.11/0.07.
- markQuestion probe. Signed ems-08 answers (CritiCall, neurosurgeon, Ornge, local anesthesia) score 0/2 on q2. Its tube safety answers score 0/2 on q4. Natural answers score full: "Honey 10 mL every 10 minutes" 1/1, "Honey only, no food or water" 1/1, "Don't wait for a pediatric transport team" plus "Father goes with him" 2/2, "Hematemesis" plus "Stridor" 2/2. "Induce vomiting" is dangerous and scores 0.

## ems-10 (cluster 2, keeper ischemic-heart-disease-01): cannot

A draft was written and passed the tests: door-in-door-out target of 30 minutes (IHD KF 6, CCS 2019 rec 15), heparin-induced thrombocytopenia and bivalirudin (IHD KF 7), steps that shorten the department stay, and a primary care crew for a stable STEMI (CCS 2019 rec 7). It was withdrawn for these reasons:

1. The final re-grep of `src/samps` found that the current in-progress pulmonary-edema-02 now keys "Primary PCI with bivalirudin" for a patient with heparin-induced thrombocytopenia. My IHD KF 7 question keyed the same decision. That is a new convergence with exactly the SAMP the coordinator told me to stay clear of.
2. No other IHD KF 7 decision is free. The decision search found keyed versions of every candidate: nitrate checks (abdominal-pain-05, ems-01), beta blockers (ischemic-heart-disease-12, 22, 25, and its mirror image, which round 1 failed on), pacing (07, 25, 38, 46), P2Y12 choice and CABG (11, 14, 34, 36, 47, and pulmonary-edema-02 after stroke), ASA allergy and desensitization (chest-pain SAMP in s05), contrast premedication (cva-27 q4), factor VIII (multiple-trauma-05, gi-bleed-31), oxygen (16), morphine (30), platelets and cancer (13), pregnancy (34), oral anticoagulants (36, and pulmonary-edema-02 on rivaroxaban).
3. IHD KF 6 plus ems KF 3 forces a STEMI transfer story, which is the convergence with pulmonary-edema-02 that the coordinator flagged.

The withdrawn draft is saved at `scratchpad/r2f/ems10.r2draft.ts`, in case the coordinator wants to reuse the door-in-door-out and primary care crew questions once pulmonary-edema-02 settles. The block in ems.ts is byte-identical to the round 1 text found at the start (checked with diff against `scratchpad/r2f/ems.before.ts`). I did not restore it from HEAD and did not edit r2f.json. Both are for the coordinator.

## ems-12 (cluster 19, keeper multiple-patients-03)

| Q | Kind, KF | Keyed decision | Source opened |
|---|---|---|---|
| q1 | short, required 2, ems 1 | Field treatment directions: oxygen, salbutamol, rest and carry, oximetry and reassessment, CPAP or ventilation | ATSDR Medical Management Guidelines for Nitrogen Oxides, last reviewed 21 October 2014, wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=394&toxid=69 |
| q2 | single, ems 4 | Transport all exposed people, with or without symptoms | ATSDR 2014 ("All patients who have histories or evidence of exposure should be transported") |
| q3 | single, ems 4 | No decontamination needed after a gas-only exposure | ATSDR 2014 (gas-only exposure, minimal secondary contamination risk) |
| q4 | short, required 2, ems 1 | Department preparation for delayed effects: observation up to 48 hours, chest radiographs, CPAP or ventilator, bronchodilators, steroids for severe cases, blood gases | ATSDR 2014 (edema 3 to 30 hours, 48-hour observation, steroids) |
| q5 | short, required 2, ems 4 | Advice for people who refuse transport: delayed symptoms, no vigorous activity for 1 to 2 days, no smoke for 72 hours, not alone overnight, follow up | ATSDR 2014 release instructions. Brat K et al. Can Respir J 2013, doi 10.1155/2013/237412 (symptoms 6 to 48 hours in hockey players) |

- Decision search: `nitrogen|NO2|resurfac` gives only environmental-11 (diving nitrogen). `transport all|all exposed` gives nothing. `decontaminat` gives ems-13, ems-24, ems-25 and multiple-patients-06, all of which key decontamination for liquid or solid agents. None keys "no decontamination". `methemoglobin|methylene` gives tox-36, so I left those items out of q4. `exercise|exertion` gives chest pain and anaphylaxis history items only. It keys no pre-arrival question list (cluster 19's repeated key) and no Code Orange, staff or bed-clearing list.
- simcheck top 5: asthma-copd-30 0.06/0.12, pulmonary-edema-23 0.11/0.06, multiple-patients-22 0.11/0.02, ems-24 0.10/0.07, tox-12 0.09/0.10.
- markQuestion probe. Keeper multiple-patients-03 q1 answers (Code Orange, staff, clear the department, triage point) score 0/2 on q1 and 0/2 on q4. Signed multiple-patients-15 q1 answers (numbers and categories, injuries, arrival times) score 0/2 on q1. Its q3 answers (zones, leads, triage point) score 0/2 on q4. Natural answers score full: "Oxygen" plus "Salbutamol puffs for wheeze" 2/2, "Observation beds for 24 to 48 hours" plus "Chest x-rays" 2/2, "No smoking for 3 days" plus "Don't be alone tonight" 2/2.
- Story check: adults at an arena, not teenagers at a school, and no reunification centre. The current multiple-patients-15 is a highway pileup in a snowstorm, which is separate.

## environmental-05 (cluster 13, keeper environmental-06)

| Q | Kind, KF | Keyed decision | Source opened |
|---|---|---|---|
| q1 | short, required 2, env 3 | Establish circulation before compressions: pulse check up to 1 minute, ultrasound, capnography waveform, organized rhythm, Doppler, signs of life. A 10-second check is unacceptable | Dow J et al. WMS hypothermia guideline 2019 update (read through a reproduction at survive-student-resource.austererisk.com, because the journal returned 403). Paal P et al. Int J Environ Res Public Health 2022, PMC8744717 (check for signs of life for up to 1 minute. ECG, ETCO2 or POCUS may detect organized activity) |
| q2 | single, env 3 | No compressions for an organized rhythm with contractions and a capnography waveform. Monitor and rewarm | WMS 2019 (evidence grade 1C) |
| q3 | short, required 2, env 3 | Normal INR and platelets miss hypothermic coagulopathy because tests run at 37°C. Treat by rewarming to 36°C to 37°C. Plasma or platelets for these results are unacceptable | Rossaint R et al. European trauma bleeding guideline, 6th edition, Crit Care 2023, PMC9977110 (10% loss of factor function per 1°C, tests at 37°C, target 36°C to 37°C) |
| q4 | single, env 3 | A frozen, incompressible chest justifies withholding resuscitation. Asystole, fixed pupils, rigidity and an unwitnessed arrest do not | WMS 2019 ("chest wall too stiff for compressions"). Paal 2022 (list of findings that are not contraindications. Rigidity is not a reliable sign of death) |
| q5 | short, required 2, env 3 | Ventilation: standard weight-based settings, do not titrate to ETCO2, use arterial PaCO2, err away from hypoventilation, oxygen to above 94% | Paal 2022 |

- Decision search: `1 minute|pulse check` gives cva-07 and an analgesia dose only. `organized rhythm|no compressions|withhold cpr` gives ems-18 q1 ("Withhold CPR and keep reassessing" for an LVAD patient, a different reason). `37|INR|coagulopathy` gives hypothermia and transfusion complication lists and environmental-23 q3 (rewarming goal 37°C). None keys lab temperature masking coagulopathy. `frozen|stiff|rigid` gives nothing for hypothermic arrest. `ETCO2|weight-based|hypoventilation` gives airway-11 q3 (ABG to correlate PaCO2 with ETCO2 in head injury). That is the nearest item, but it keys a different reason, as one item in a list. arrhythmia-06 q1 keys "no rhythm drugs or pacing" for hypothermic bradycardia. q2 here keys compressions, and its options leave out atropine and pacing on purpose. Nothing keys generic rewarming (forced air, warmed fluids, ECLS), a probe choice, potassium or 32°C, and nothing uses VF.
- simcheck top 5: airway-36 0.15/0.07, cva-42 0.14/0.10, multiple-trauma-23 0.13/0.03, arrhythmia-28 0.13/0.10, airway-11 0.12/0.13.
- markQuestion probe. Keeper environmental-06 q1 answers (temperature below 30, witnessed, young, shockable) score 0/2 on q1. Its q3 transfer answers score 0/2 on q3 and 0/2 on q5. Natural answers score full: "Check a pulse for a full minute" plus "Bedside ultrasound for cardiac activity" 2/2, "Coagulation tests are run at 37 degrees in the lab" plus "Rewarm him" 2/2, "Don't rely on ETCO2, check an ABG" plus "Standard weight based tidal volume" 2/2. "Pulse check for 10 seconds" and "Titrate to ETCO2 of 35 to 45" are unacceptable.

## environmental-07 (cluster 57, keeper loc-15)

| Q | Kind, KF | Keyed decision | Source opened |
|---|---|---|---|
| q1 | short, required 2, env 3 | What prevents a determination of death by neurologic criteria now: core temperature below 36°C, clonazepam, alcohol, rocuronium | Shemie SD et al. Canadian 2023 clinical practice guideline on death determination, Can J Anesth 2023, PMC10203028 (Table 5 and the core temperature recommendation) |
| q2 | short, required 2, env 3 | Use blood gas values uncorrected for temperature (alpha-stat) and raise ventilation toward a normal uncorrected PaCO2. Using the corrected values to cut ventilation is unacceptable | Paal 2022 (alpha-stat) |
| q3 | single, env 3 | Add an intravascular warming catheter for a stable patient at 26.7°C who is rewarming at 0.4°C per hour. Bladder or gastric lavage are not recommended, thoracic lavage is for unstable patients, and ECMO is on standby | Paal 2022, Table 5 |
| q4 | short, required 1, env 3 | Wait at least 24 hours after rewarming to 36°C | Shemie 2023, Table 5 (24-hour wait after environmental exposure of 34°C or less) |

- Decision search: `neurologic criteria|brain death|36 °C|24 hours after` gives no death determination key anywhere. `uncorrected|alpha` gives only statistics and alpha-gal. `intravascular|bladder|gastric lavage` gives catheter infection citations only. arrhythmia-06 q3 keys lavage, dialysis and ECMO as rewarming methods for an unstable patient. Here those appear as distractors for a stable one, with the reason given. There is no myxedema, TSH, cortisol, dextrose, esophageal probe choice, afterdrop list or thiamine anywhere in the SAMP.
- simcheck top 5: environmental-21 0.14/0.04, environmental-23 0.13/0.06, environmental-27 0.13/0.03, environmental-24 0.13/0.06, arrhythmia-12 0.09/0.13.
- markQuestion probe. Keeper loc-15 q1 answers ("Myxedema coma", "Hypothermia", "Hypoglycemia") score 1/2 on q1, because "Hypothermia" is one of the confounders. That is not full marks. loc-15 q2 answers (dextrose, forced air and warmed fluids, ventilation support) score 0/2 on q2. environmental-06 q5 ("asystole after rewarming to 32°C") scores 0/1 on q4. Natural answers score full: "Her temperature is below 36" plus "Rocuronium is still on board" 2/2, "Use the uncorrected values (alpha-stat)" plus "Increase the respiratory rate" 2/2, "Wait 24 hours" 1/1. "Use the corrected values" and "Immediately" are unacceptable.
- Arithmetic: MAP (94 + 2 x 58) / 3 = 70 mmHg, which meets the prerequisite of 60 mmHg or more. Temperature correction for 37 minus 25.9 = 11.1°C: pH 7.18 + 0.0147 x 11.1 = 7.34. PaCO2 52 x 10^(-0.019 x 11.1) = 32 mmHg. Rewarming (26.7 - 25.9) / 2 h = 0.4°C per hour.

## Checks

- `SAMP_BATCH=s09 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 513 passed. Two keys were shortened so that the key is not the longest option in too many single questions ("All exposed, symptoms or not" and "No compressions, monitor and rewarm").
- `npx tsc --noEmit -p .`: exit 0.
- Probe tests were run from temporary files in `tests/` (zz-r2f-*.test.ts), which were deleted after each run. `tests/tmp-r2k/` belongs to another writer.
- No command was blocked by the permission system.

## For the physician

- ems-08: a toddler with an esophageal lithium coin battery at a hospital without pediatric endoscopy. Please confirm three things: honey before transfer (CMAJ 2021 and the NCPC guideline), sending a stable child with the first available crew rather than waiting for a specialized team (this is reasoning from "remove immediately", not a guideline statement), and the menu key "nothing else by mouth apart from honey".
- ems-12: nitrogen dioxide from an ice resurfacer. The main sources are the US ATSDR guideline (last reviewed 2014) and a Czech case series in the Canadian Respiratory Journal. No Canadian clinical guideline was found. The key "transport all exposed people" follows ATSDR literally. With 80 people exposed, please confirm that you teach this, rather than releasing people without symptoms with instructions.
- environmental-05: q2 keys no compressions for an organized rhythm with cardiac contractions and a capnography waveform, per WMS 2019 (grade 1C). q4 keys the frozen chest as the only finding that justifies withholding resuscitation. The WMS text was read through a reproduction of the guideline, because the journal site refused access.
- environmental-07: death determination by neurologic criteria after accidental hypothermia follows the 2023 Canadian guideline: a core temperature of at least 36°C, then a 24-hour wait after exposure of 34°C or less. q3 keys an intravascular warming catheter. Paal and colleagues describe its indications as uncertain but potentially beneficial in colder patients with stable circulation. Every distractor is explicitly not recommended or reserved for unstable patients. Please confirm that you accept this as the single best answer.
- ems-10 was not rebuilt. Its IHD KF 7 question has no free decision left in the bank, and the one fresh decision (HIT and bivalirudin) now collides with the in-progress pulmonary-edema-02. It needs your decision, or a rebuild after pulmonary-edema-02 lands.
