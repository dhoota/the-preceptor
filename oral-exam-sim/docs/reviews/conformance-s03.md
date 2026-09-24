# Format conformance: batch s03 (anaphylaxis, arrhythmia)

Scope: 30 signed-off SAMPs in `src/samps/s03/`, 107 questions (87 write-in, 17 single, 3 menu). Format only. No `correct` target, `select`, `required`, `accept` or `unacceptable` changed, apart from the index remapping that reordering needs. Every remap was checked by script against the original keyed text.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 98 of 107 |
| Updates added (lead-in sentence moved out of the prompt) | 6 |
| Options added | 0 |
| Options removed (6 option singles cut to 5) | 10 |
| Options reworded, all | 54 |
| Keyed options reworded | 10 texts in 9 questions |
| Stems changed | 30 |
| SAMPs with vitals moved to the `vitals` field | 30 |
| Patient names removed | 0 (none found) |
| Citations completed | 5 |
| Citations replaced | 0 |

Removed distractors (the weakest in each list): anaphylaxis-02 q2 methylprednisolone, anaphylaxis-04 q1 panic attack, anaphylaxis-10 q1 dexamethasone, anaphylaxis-11 q1 famotidine, anaphylaxis-14 q2 ondansetron, arrhythmia-01 q2 normal ECG for age, arrhythmia-06 q1 amiodarone, arrhythmia-07 q2 IV digoxin, arrhythmia-08 q1 procainamide, arrhythmia-10 q3 adenosine.

## Key position across the 17 single questions

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 1 | 13 | 2 | 1 | 0 |
| After | 4 | 4 | 4 | 2 | 3 |

The key was the single longest option in 12 of 17 before and 3 of 17 after.

## Keyed option rewordings

| SAMP | Question | Before | After |
|---|---|---|---|
| anaphylaxis-01 | q3 | Epinephrine infusion, starting at about 0.1 mcg/kg/min and titrated to effect | Epinephrine infusion at about 0.1 mcg/kg/min, titrated |
| anaphylaxis-05 | q3 | Awake flexible bronchoscopic intubation, sitting up, with topical anesthesia and a scalpel cricothyrotomy setup ready | Awake flexible bronchoscopic intubation, sitting up |
| anaphylaxis-07 | q3 | At the first signs of a systemic reaction, such as hives with breathing trouble, throat tightness or faintness, then call 911 | At the first systemic symptom, then call 911 |
| anaphylaxis-14 | q2 | Epinephrine 0.5 mg IM into the anterolateral thigh, then observe | Epinephrine 0.5 mg IM anterolateral thigh, then observe |
| arrhythmia-01 | q2 | Bifascicular block, RBBB with left anterior fascicular block, plus first degree AV block | RBBB, left anterior fascicular and first degree AV block |
| arrhythmia-07 | q2 | Rhythm control in the ED by electrical or pharmacologic cardioversion, without prior anticoagulation | Cardioversion in the ED without prior anticoagulation |
| arrhythmia-07 | q3 | Procedural sedation, for example propofol with or without fentanyl, with airway equipment ready | Procedural sedation with airway equipment ready |
| arrhythmia-08 | q1 | Treat the sepsis with oxygen, IV fluids, early antibiotics and antipyretics, then reassess the rate | Treat the sepsis first, then reassess the rate |
| arrhythmia-13 | q1 | No induced cooling since she follows commands, but prevent fever | No induced cooling, but prevent fever |

The other keys of arrhythmia-07 q3 ("Synchronized biphasic shock at 200 J", "Anteroposterior pad placement") are unchanged. Every detail cut from a key now sits in the explanation (topical anesthesia and the scalpel setup, the examples of a systemic reaction, "bifascicular block", "electrical or pharmacologic", the propofol and fentanyl example, the sepsis bundle). These 8 SAMPs fail "keeps its keys" until the edits are logged: anaphylaxis-01, -05, -07, -14, arrhythmia-01, -07, -08, -13.

The two menus whose keys were only reordered (anaphylaxis-08 q1, arrhythmia-09 q3) keep their `correct` arrays in snapshot order (`[6, 5]` and `[3, 2]`), so they pass the key test. arrhythmia-07 q3 uses `[5, 6, 1]` for the same reason.

## Stems and vitals

- All ages hyphenated. "210 µmol/L" became "210 umol/L" (arrhythmia-15). "5000 units" became "5 000 units" in an option (arrhythmia-07 q3).
- Oxygen flows now carry "L/minute" (anaphylaxis-02, -12, arrhythmia-13). Pulse descriptors "irregularly irregular" became "irregular" in the field. The ECG line in the stem still names the rhythm.
- Values the field format cannot hold stay in the stem, word for word: anaphylaxis-02 "BP is 70 mmHg by palpation", arrhythmia-02 "pulse is about 220 and irregular", arrhythmia-06 "SpO2 reading is unreliable" and the esophageal probe route. Glucose, GCS and capillary refill stay in the stem.
- anaphylaxis-12 has two sets of vitals. The vitals after the deterioration went to the field, because the list shows below the stem and reads as current. The arrival set stays in the narrative as history.
- anaphylaxis-09 keeps the fetal heart rate ("100 bpm") in the stem. It is not a maternal vital sign.
- Every value is unchanged. No explanation quotes a vital that moved.

## Citation changes

| Source id | Before | After | Verification |
|---|---|---|---|
| cps | Canadian Paediatric Society. Emergency treatment of anaphylaxis in infants and children. Position statement. | ... Acute Care Committee ... Paediatr Child Health. 2011. Reaffirmed 2018. | https://academic.oup.com/pch/article/16/1/35/2639430 |
| csaci | ... Anaphylaxis in schools and other settings. Consensus document. | ... 3rd ed, revised. 2016. | https://csaci.ca/wp-content/uploads/2017/11/Anaphylaxis-in-Schools-Other-Settings-3rd-Edition-Revised_a.pdf (copyright page: revised third printing, August 2016) |
| acr | American College of Radiology. ACR Manual on Contrast Media. | ... Committee on Drugs and Contrast Media. ACR Manual on Contrast Media. 2025. | https://www.auntminnie.com/practice-management/associations/news/15750123/acr-releases-contrast-media-manual-update (2025 edition, 7 July 2025) |
| cps-asthma | Canadian Paediatric Society. Managing an acute asthma exacerbation in children. Position statement. | Trottier ED, et al. ... Paediatr Child Health. 2021. | https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation |
| als-pcs | Ontario Ministry of Health. Advanced Life Support Patient Care Standards. | ... Emergency Health Regulatory and Accountability Branch ... Version 5.4. 2025. (url added) | https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf (title page: Version 5.4, in force 2 June 2025) |

Years were also confirmed by search for Pouessel 2024 (https://pmc.ncbi.nlm.nih.gov/articles/PMC11439156/), Li 2021 (https://pubmed.ncbi.nlm.nih.gov/34903280/), Bernstein 2017 (https://pubmed.ncbi.nlm.nih.gov/28405953/), ERC 2025 ALS (https://pubmed.ncbi.nlm.nih.gov/41117572/) and AHA 2025 Parts 9, 10 and 11 (https://professional.heart.org/en/science-news/2025-aha-guidelines-for-cpr-and-ecc). The other citations already carried a year that matches their known publication and were left as they were.

## Needs physician decision

1. **anaphylaxis-05 q3.** The key now reads "Awake flexible bronchoscopic intubation, sitting up". Topical anesthesia and the scalpel cricothyrotomy setup moved to the explanation. Please confirm the key still says enough on its own.
2. **arrhythmia-12 q1.** The key "Indicated because he does not follow commands after ROSC" still holds its reason. The reason is what separates it from the distractors, so it was not moved. Please confirm, or reword it as a keyed edit.
3. **anaphylaxis-04 q3** accepts "premedication with corticosteroid and antihistamine". The cited ACR manual is now the 2025 edition, which moved away from routine premedication after mild reactions. The 2025 ACR and AAAAI consensus favours a different agent after a severe reaction. The key and explanation are unchanged. Please check they still match the source.
4. **cps (anaphylaxis-03, -10).** The CPS statement dates from 2011 (reaffirmed 2018). The doses it supports are current, but the source is old. Please consider whether it is still the source of record.
5. **als-pcs.** Version 5.4 (2025) is cited because it was the version checked. A version 5.5 file dated 18 August 2025 appears on ontario.ca but could not be opened. Please confirm which version to cite.
6. **anaphylaxis-12 stem.** Please confirm the vitals split (current vitals in the field, arrival vitals in the narrative).
7. **anaphylaxis-12 q4** keys ceftriaxone after anaphylaxis to piperacillin-tazobactam minutes earlier. The explanation already qualifies this (first dose under observation). No change was made. It is listed only because the reaction was so recent.

## Checks

- `npx tsc --noEmit -p . | grep samps/s03`: no errors.
- `CONFORM=s03 SAMP_BATCH=s03 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 433 passed, 8 failed. All 8 are the expected "keeps its keys" failures listed above.
