# Batch s37 writer report

Batch s37 holds 50 stand-alone items, rn-s37-01 to rn-s37-50. It covers Reduction of Risk Potential (monitoring and complications) and Physiological Adaptation (fluid, electrolyte and acid-base problems, shock, sepsis bundle steps and burns). Every item has `reviewed: false` and `canada: ""`.

`BATCH=s37 npx vitest run tests/bank.test.ts` passes, 61 of 61 tests. That includes the whole-bank near-duplicate and sign-off tests. `npx tsc --noEmit -p .` reports nothing for bank/s37.

## Counts

| Client Needs | Items |
|---|---|
| RRP | 30 |
| PA | 20 |

| Type | Items |
|---|---|
| mc | 26 |
| sata | 10 |
| msn | 3 |
| dnd | 3 |
| cloze | 2 |
| highlight | 2 |
| bowtie | 2 |
| trend (both mc) | 2 |

| CJMM step | Items |
|---|---|
| Recognize cues | 5 |
| Analyze cues | 15 |
| Prioritize hypotheses | 1 |
| Generate solutions | 11 |
| Take action | 14 |
| Evaluate outcomes | 4 |

| Difficulty | Items |
|---|---|
| 1 | 3 |
| 2 | 13 |
| 3 | 19 |
| 4 | 12 |
| 5 | 3 |

Calculation items with a `calc` block: 05 (burn size), 14 (anion gap), 19 (compartment differential pressure), 25 (shock index).

## MC key positions

28 single-key MC pools in total, the 26 mc items plus the 2 trend mc items. A 7, B 7, C 7, D 7.

01 B, 02 D, 04 A, 05 B, 07 B, 09 D, 12 A, 13 C, 14 B, 16 D, 17 A, 19 A, 20 B, 21 C, 22 C, 25 B, 26 C, 27 D, 30 C, 32 A, 33 D, 37 D, 41 C, 42 A, 43 C, 45 A, 46 B, 47 D.

The key is the strict longest option in 9 of 28 MC items (04, 13, 14, 19, 26, 37, 42, 46, 47), within the 35 percent limit.

## Items

| Id | Need | Type | CJMM | Diff | Topic |
|---|---|---|---|---|---|
| rn-s37-01 | RRP | mc | action | 2 | Waveform artifact in an alert client |
| rn-s37-02 | PA | mc | generate | 3 | Timing a repeat lactate in sepsis |
| rn-s37-03 | RRP | sata | action | 2 | Collecting blood culture sets |
| rn-s37-04 | RRP | mc | analyze | 4 | Skin flora in one blood culture set |
| rn-s37-05 | PA | mc | analyze | 3 | Burn size with the rule of nines |
| rn-s37-06 | RRP | dnd | action | 1 | Five-electrode monitor placement |
| rn-s37-07 | PA | mc | action | 3 | Starting a vasopressor before central access |
| rn-s37-08 | RRP | msn | recognize | 3 | Stopping an exercise stress test |
| rn-s37-09 | RRP | mc | action | 2 | Symptoms that disagree with a glucose sensor |
| rn-s37-10 | PA | highlight | recognize | 3 | Narrowing pulse pressure in early shock |
| rn-s37-11 | RRP | sata | generate | 3 | Teaching for a new glucose sensor |
| rn-s37-12 | RRP | mc | analyze | 4 | Fixed low SpO2 after a throat spray |
| rn-s37-13 | RRP | mc | evaluate | 3 | Sudden capnography rise during CPR |
| rn-s37-14 | PA | mc | analyze | 4 | Acidosis after large saline volumes |
| rn-s37-15 | RRP | cloze | analyze | 4 | Shark-fin capnography waveform |
| rn-s37-16 | PA | mc | action | 1 | Positioning a client in hypovolemic shock |
| rn-s37-17 | RRP | trend mc | analyze | 4 | Hidden decline in Glasgow Coma Scale parts |
| rn-s37-18 | PA | msn | action | 4 | Prescriptions to question in pump failure shock |
| rn-s37-19 | RRP | mc | analyze | 3 | Differential pressure in a leg compartment |
| rn-s37-20 | PA | mc | generate | 3 | Removing a line that is the sepsis source |
| rn-s37-21 | RRP | mc | action | 3 | Recurrent variable decelerations in labor |
| rn-s37-22 | RRP | mc | analyze | 4 | Sine-wave baseline after abdominal trauma |
| rn-s37-23 | RRP | sata | recognize | 2 | Features of a normal intrapartum tracing |
| rn-s37-24 | RRP | bowtie | generate | 5 | Fetal slowing after an epidural dose |
| rn-s37-25 | PA | mc | analyze | 3 | Shock index after blunt trauma |
| rn-s37-26 | RRP | mc | generate | 4 | Timing of amniocentesis versus villus sampling |
| rn-s37-27 | RRP | mc | evaluate | 3 | Discharge after sedation in a toddler |
| rn-s37-28 | RRP | sata | generate | 2 | Monitoring a child under moderate sedation |
| rn-s37-29 | PA | sata | analyze | 3 | Fluid shift back after major burns |
| rn-s37-30 | PA | mc | prioritize | 4 | Rising airway pressure with chest wall eschar |
| rn-s37-31 | RRP | sata | generate | 2 | Shortening ileus after bowel surgery |
| rn-s37-32 | RRP | mc | analyze | 4 | Tracheal shift with lobar collapse |
| rn-s37-33 | RRP | mc | recognize | 3 | Pink fluid gush before wound separation |
| rn-s37-34 | RRP | msn | analyze | 2 | Risk factors for abdominal wound separation |
| rn-s37-35 | RRP | sata | recognize | 3 | History that raises malignant hyperthermia risk |
| rn-s37-36 | RRP | sata | generate | 5 | First day after a malignant hyperthermia crisis |
| rn-s37-37 | PA | trend mc | evaluate | 4 | Urine output trend during burn resuscitation |
| rn-s37-38 | PA | dnd | action | 2 | Dry chemical on the skin |
| rn-s37-39 | PA | cloze | analyze | 3 | Hematocrit and potassium early after a burn |
| rn-s37-40 | PA | bowtie | generate | 5 | Low sodium after an endurance race |
| rn-s37-41 | RRP | mc | action | 2 | Compression stockings with arterial disease |
| rn-s37-42 | RRP | mc | generate | 3 | Clot prevention when bleeding risk is high |
| rn-s37-43 | RRP | mc | action | 1 | Missed void during a timed collection |
| rn-s37-44 | RRP | highlight | evaluate | 3 | Errors in a home timed urine log |
| rn-s37-45 | PA | mc | analyze | 4 | Rising sodium on tube feeding |
| rn-s37-46 | PA | mc | action | 3 | Maintenance fluid choice for a child after surgery |
| rn-s37-47 | PA | mc | action | 2 | Eliciting carpal spasm with a BP cuff |
| rn-s37-48 | PA | sata | generate | 2 | Keeping a large burn client warm |
| rn-s37-49 | PA | dnd | analyze | 2 | Matching burn depth to wound appearance |
| rn-s37-50 | RRP | sata | action | 2 | Skin preparation for monitor electrodes |

## Uniqueness

Before each chunk I searched the inventory and the bank source for RRP and PA items and for each topic's key terms. Where the bank already tested a point, I chose a different one.

- Pulse oximetry. s19-20 already lists the general error sources (carbon monoxide, polish, perfusion, skin pigment). Item 12 tests the fixed reading near 85% in methemoglobinemia after benzocaine.
- Capnography. s21-02 already covers hypoventilation under sedation. Items 13 and 15 test the CO2 rise at return of circulation during CPR and the shark-fin waveform of bronchospasm.
- Glasgow Coma Scale. s25-39 (scoring) and s25-15 (falling total) exist. Item 17 shows an unchanged total that hides a falling motor score.
- Compartment syndrome. s19-09 covers early signs. Item 19 tests the differential pressure threshold.
- Fetal monitoring. Late decelerations and the nonstress test exist. Items 21 to 24 test variable decelerations, the sinusoidal pattern, category I features and epidural hypotension.
- Amniocentesis. s20-31 covers discharge teaching. Item 26 tests timing against chorionic villus sampling.
- Sedation in children. Bank sedation items are all adult. Items 27 and 28 use the AAP and AAPD criteria (staying awake for 20 minutes, the car seat risk, recording every 10 minutes).
- Malignant hyperthermia. s18-20, s19-41 and s24-06 all test the acute crisis. Items 35 and 36 test preoperative risk history and the first 24 hours afterward.
- VTE. s19-44 (general measures) and s21-36 (a swollen calf) exist. Items 41 and 42 test stockings in arterial disease and mechanical-only prophylaxis when bleeding risk is high.
- 24-hour urine. s19-34 covers the start and end steps. Items 43 and 44 test a missed void and errors in a home log.
- Dehiscence and atelectasis. s19-13 (evisceration) and s20-07 (atelectasis on day 1) exist. Items 32 to 34 test tracheal shift, the pink fluid gush and risk factors.
- Sepsis. Cultures before antibiotics, the 30 mL/kg bolus, the MAP target and the meaning of a high lactate exist. Items 02, 07, 14 and 20 test repeat lactate timing, starting a vasopressor peripherally, saline-induced hyperchloremic acidosis and source control by removing a line.
- Burns. The fluid rate, airway and electrical injury exist. Items 05, 29, 30, 37, 38, 39, 48 and 49 test the rule of nines with superficial burns left out, the remobilization phase, chest escharotomy, titration by urine output, dry chemical first aid, early phase labs, keeping the client warm and burn depth.
- Shock. s25-19 matches shock types. Items 10, 16, 18 and 25 test narrowing pulse pressure, positioning, prescriptions to question in cardiogenic shock and the shock index.
- Electrolytes. Hyperkalemia, hyponatremia from SIADH, sodium correction and hypercalcemia are well covered. Items 40, 45, 46 and 47 test exercise-associated hyponatremia, hypernatremia on tube feeding, isotonic maintenance fluid for children and the Trousseau technique.

No s37 topic label matches any existing topic label in the inventory or in any other batch folder, including the parallel batches present when I checked.

## Sources and verification

| Source | Used in | Verified at |
|---|---|---|
| Evans L et al. Surviving Sepsis Campaign 2021, Intensive Care Medicine 47(11):1181 | 02, 07, 14, 20 | https://pmc.ncbi.nlm.nih.gov/articles/PMC8486643/ (lactate guidance, MAP 65, removal of a device that may be the source). The balanced crystalloid and peripheral vasopressor recommendations were confirmed through summaries at https://www.emdocs.net/surviving-sepsis-campaign-2021-updates/ |
| Levy MM, Evans LE, Rhodes A. SSC Bundle 2018 Update, Intensive Care Medicine 44(6):925 | 02 | The bundle element "Remeasure if initial lactate level > 2 mmol/L" was confirmed at https://www.esicm.org/?p=96639 |
| CDC. Blood Culture Contamination overview, 2022 | 03, 04 | Full text read from https://www.cdc.gov/antibiotic-use/core-elements/pdfs/fs-bloodculture-508.pdf |
| Sandau KE et al. AHA ECG monitoring standards, Circulation 136(19):e273, 2017 | 01, 06, 50 | The citation was confirmed by search (PubMed 28974521) |
| Fletcher GF et al. AHA Exercise Standards, Circulation 128(8):873, 2013 | 08 | The termination criteria were read from the full text at https://www.bumc.bu.edu/im-residency/files/2013/08/AHA-Exercise-Standards-20131.pdf |
| ADA Standards of Care 2025, section 7, Diabetes Care 48(Suppl 1):S146 | 09, 11 | The citation and the guidance on interfering substances were confirmed by search |
| FDA Drug Safety Communication on benzocaine, 2018 | 12 | Confirmed by search. The behavior of the oximeter reading near 85% comes from the secondary sources found in the same search |
| Panchal AR et al. AHA 2020 Part 3, Circulation 142(16 Suppl 2):S366 | 13 | CO2 below 10 mmHg and an abrupt rise to 35 to 40 mmHg were confirmed through secondary summaries of the guideline |
| Teasdale G et al. GCS at 40 years, Lancet Neurology 13(8):844, 2014 | 17 | https://eprints.gla.ac.uk/96329/ |
| McQueen MM, Court-Brown CM. JBJS Br 78(1):99, 1996 | 19 | The differential pressure threshold below 30 mmHg was confirmed by search. The DOI suffix gives page 99 |
| ACOG Clinical Practice Guideline No. 10, October 2025 | 21 to 24 | The full PDF was read (category definitions, the sinusoidal definition, Table 2 interventions, the advice against routine oxygen) |
| ACOG Practice Bulletin No. 162, Obstetrics and Gynecology 127(5):e108, 2016 | 26 | The citation was confirmed, and the 15-week amniocentesis point was confirmed through the ISUOG guideline and secondary summaries |
| Cote CJ, Wilson S. AAP and AAPD sedation guideline 2019 | 27, 28 | The full text was read at https://www.aapd.org/media/Policies_Guidelines/G_Sedation.pdf |
| Gustafsson UO et al. ERAS colorectal 2018, World Journal of Surgery 43:659 | 31 | Confirmed by search |
| Rosenberg H et al. Malignant hyperthermia review, Orphanet J Rare Dis 10:93, 2015 | 35, 36 | The citation was confirmed. Dantrolene continuation and the recurrence window were confirmed through the APSF summary found in the same search |
| NICE NG89, 2018 | 41 | The rule against offering stockings in peripheral arterial disease was confirmed through secondary summaries of NG89 |
| Gould MK et al. ACCP 2012, Chest 141(2 Suppl):e227S | 42 | Known citation. Not re-fetched |
| ISBI Practice Guidelines for Burn Care, Burns 42(5):953, 2016 | 05, 30, 37, 38, 48 | Confirmed by search |
| American Burn Association. ABLS Provider Manual 2018 Update | 05, 29, 30, 37 to 39, 48, 49 | The manual itself was not reachable. The urine output target was confirmed through a state burn protocol (Minnesota) |
| Johnson S, Henderson SO. CJEM 6(1):48, 2004 | 16 | Confirmed by search |
| van Diepen S et al. AHA cardiogenic shock statement, Circulation 136(16):e232, 2017 | 18 | Known citation. Not re-fetched |
| Koch E et al. Shock index review, OAEM 11:179, 2019 | 25 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6698590/ |
| Feld LG et al. AAP maintenance IV fluids guideline, Pediatrics 142(6):e20183083, 2018 | 46 | Confirmed by search, including the 28 days to 18 years scope and the exclusions |
| Hew-Butler T et al. Third EAH consensus, CJSM 25(4):303, 2015 | 40 | The citation was confirmed. The 100 mL 3% bolus was confirmed through a later Hew-Butler review |
| Kodali BS. Capnography outside the operating rooms, Anesthesiology 118(1):192, 2013 | 15 | The DOI resolves to Anesthesiology, January 2013. The full text is paywalled |
| Hinkle JL et al. Brunner and Suddarth 15th edition, 2022 | many | Textbook. Already used across the bank |

The session's web search limit ran out partway through the source checks. Sources checked after that point rely on direct fetches, or on citations I already knew, as marked above.

## For the reviewer

- 02. The 2 to 4 hour window for the repeat lactate comes from the Levy 2018 bundle text as reported by secondary sources. The ESICM bundle card says only "remeasure if above 2 mmol/L". Please confirm the window in the article.
- 07. The SSC 2021 peripheral vasopressor recommendation is weak. The item keys starting through an antecubital IV over waiting 2 hours. The hand IV distractor rests on the guideline's wording about a vein in or near the antecubital fossa.
- 15. The source for the shark-fin waveform is Kodali 2013 plus Hinkle. I could not read Kodali's full text to confirm it shows that waveform.
- 16. The legs-raised position is supported by the Trendelenburg myth review and by nursing texts. Practice varies.
- 18. I replaced a dobutamine option with "Draw a serum lactate level", because dobutamine in a client with a BP of 82/58 mmHg could be argued as a prescription to clarify.
- 29. The fall in potassium during remobilization follows Brunner and Suddarth. Some burn texts stress urinary potassium loss more than the shift back into cells.
- 33. I took out a specific day range for dehiscence because sources disagree on it. The stem uses day 6.
- 35. The link between exertional heat stroke and the MH gene is reported in the literature. The review lists it as an association, not a confirmed risk.
- 37. A rate of 900 mL per hour matches 4 mL/kg per percent for 80 kg and 45%, with half given over 8 hours. The item does not name a formula, because the ABA now starts at 2 mL/kg per percent.
- 44. Keeping the container cold is the general teaching. Some tests use preservatives at room temperature. The stem says the client was taught to keep it cold.
- 50. Daily electrode change follows the AHA practice standards and AACN alarm guidance. I did not read that passage in the Sandau full text.
- Every lab value in mg/dL carries an SI pair. Hematocrit is given as a percent.
