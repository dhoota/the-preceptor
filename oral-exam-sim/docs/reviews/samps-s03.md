# Adversarial review of SAMP batch s03 (anaphylaxis, arrhythmia)

Reviewer role: adversarial Canadian emergency physician and CCFP-EM SAMP examiner. Files: `src/samps/s03/anaphylaxis.ts` and `src/samps/s03/arrhythmia.ts`. All SAMPs keep `reviewed: false` and stable ids.

Checks after edits: `npx tsc --noEmit -p .` shows no s03 errors. `SAMP_BATCH=s03 npx vitest run tests/samps.test.ts` passes 94 of 94. Every key feature of both topics is still covered. Short answer share is 80% (anaphylaxis) and 83% (arrhythmia).

## Anaphylaxis

| SAMP | Verdict | Notes |
| --- | --- | --- |
| anaphylaxis-01 | Corrected | Infusion start rate and adult autoinjector dose |
| anaphylaxis-02 | Corrected | Glucagon dose source and wording |
| anaphylaxis-03 | Corrected | Canadian weight bands |
| anaphylaxis-04 | Accurate | |
| anaphylaxis-05 | Accurate | |
| anaphylaxis-06 | Corrected | Honest evidence caveats |
| anaphylaxis-07 | Corrected | Autoinjector dose wording |
| anaphylaxis-08 | Corrected | Distractor that was a listed risk factor, source |
| anaphylaxis-09 | Accurate | Source citation made exact |
| anaphylaxis-10 | Corrected | Weight band wording |
| anaphylaxis-11 | Accurate | |
| anaphylaxis-12 | Corrected | Answer key and cephalosporin explanation |
| anaphylaxis-13 | Corrected | Second vasopressor key, source |
| anaphylaxis-14 | Accurate | |
| anaphylaxis-15 | Accurate | |

### Changes

- All files, dangerous IV epinephrine phrases. Before: the dangerous list included "epinephrine 1 mg iv" and "epinephrine iv bolus". A correct line such as "epinephrine 0.5 mg IM, then 1 L IV bolus" matched it and zeroed the question. After: only "IV push" phrases (for example "epinephrine iv push", "epinephrine 1 mg iv push") are flagged. Added "intramuscularly" to the IM route words.
- 01 q3. Before: infusion option "0.05 to 0.1 mcg/kg/min". After: "about 0.1 mcg/kg/min, titrated". The explanation now gives the real range: US about 2 to 10 mcg/min, RCUK 0.08 to 0.17 mcg/kg/min (0.5 to 1 mL/kg/h of 1 mg in 100 mL).
- 01 q4. Before: "two 0.3 mg autoinjectors" for an 86 kg man. After: "0.3 mg or 0.5 mg at his weight". CSACI 2021 suggests 0.5 mg at 45 kg and above.
- 02 q3. Before: glucagon 1 to 5 mg then 5 to 15 mcg/min, cited to RCUK. RCUK suggests glucagon 1 mg IV. The 1 to 5 mg regimen is US practice parameter dosing. After: explanation gives both, says the evidence is case reports, cites the Pouessel 2024 guideline overview. Added "4 mg" and "intravenously" to the match.
- 03 q3. Before: "0.15 mg labelled for 15 to 30 kg". After: the product monograph says 15 to 30 kg, but the CPS (10 to 25 kg) and CSACI 2021 (under 25 kg) move to 0.3 mg at about 25 kg. Keyed answer (two 0.15 mg devices at 17 kg) unchanged. Cites the CSACI 2021 statement.
- 06 q3. The explanation now says two randomized trials of icatibant showed no benefit and C1 inhibitor and FFP rest on case series. It also says a trial of epinephrine, antihistamine and steroid is reasonable while a histamine cause cannot be excluded. Epinephrine and antihistamines were never marked unacceptable or dangerous, which is correct. Added "different antihypertensive" to the match.
- 07 q2. Before: "two 0.3 mg autoinjectors" for a teen of unknown weight. After: "the right dose for his weight".
- 08 q1. Before: the distractor was "Urticaria at presentation". The 2020 practice parameter lists cutaneous signs as a possible biphasic risk factor, so that distractor was not clearly wrong. After: "A clearly identified food trigger". An unknown trigger is the risk factor. Keyed answers (more than one epinephrine dose, severe initial reaction) unchanged. The source was the 2023 update (Golden 2024). The biphasic and observation evidence comes from the 2020 parameter, so it now cites Shaker 2020.
- 10 q3. The explanation now says the 0.15 mg device is outgrown at about 25 kg under CPS and CSACI advice.
- 12 q1. Before: the unacceptable list had bare "sepsis", so "anaphylaxis rather than worsening sepsis" scored zero. After: specific phrases only ("worsening septic shock", "sepsis progression").
- 12 q2. Before: the "stop" item matched any line containing "stop", "discontinue" or "hold". After: specific phrases ("stop infusion", "stop piperacillin", "stop antibiotic").
- 12 q4 (writer flag). Decision: keep both the fluoroquinolone and ceftriaxone. The 2022 drug allergy parameter suggests a cephalosporin with a dissimilar R1 side chain may be given after penicillin anaphylaxis without testing. Ceftriaxone does not share piperacillin's R1 side chain. The new explanation says that advice comes mainly from remote reactions. It says to give the first dose under close observation after a reaction minutes ago. It adds that ceftriaxone needs a macrolide or doxycycline for CAP. Cefotaxime is also accepted.
- 13 q2. Added metaraminol. The explanation now says no guideline favours one second vasopressor. Cites the Pouessel overview.
- Sources. Removed the unused Metlay CAP constant. Added the RCUK PDF URL. The AHA citation is now the real "Part 10. Adult and pediatric special circumstances of resuscitation", Circulation 2025, with DOI URL.

## Arrhythmia

| SAMP | Verdict | Notes |
| --- | --- | --- |
| arrhythmia-01 | Corrected | Atropine dose penalty removed |
| arrhythmia-02 | Corrected | Source for amiodarone harm, dose required |
| arrhythmia-03 | Corrected | Calcium and insulin key breadth |
| arrhythmia-04 | Corrected | Removed QT from sodium channel signs |
| arrhythmia-05 | Corrected | Over-broad "stop" item |
| arrhythmia-06 | Corrected | Guideline differences in hypothermic arrest, ECLS threshold |
| arrhythmia-07 | Corrected | CAEP checklist wording, anticoagulation key |
| arrhythmia-08 | Accurate | |
| arrhythmia-09 | Accurate | Adenosine 3 mg list verified |
| arrhythmia-10 | Corrected | Procainamide key and heart failure caveat |
| arrhythmia-11 | Accurate | |
| arrhythmia-12 | Corrected | AHA 2025 post-arrest targets |
| arrhythmia-13 | Accurate | |
| arrhythmia-14 | Corrected | Over-broad "avoid" item and STEMI penalty |
| arrhythmia-15 | Accurate | |

### Changes

- 01 q4 (writer flag). Before: atropine 0.5 mg was unacceptable as "outdated". ERC 2025 still uses 500 mcg, so the penalty was unfair. After: atropine 0.5 mg, 500 mcg, 0.6 mg and 1 mg are all accepted. The explanation says AHA uses 1 mg and ERC uses 0.5 mg. It adds that ERC advises against atropine in high grade block with a wide QRS, which is this patient, so pacing or an infusion is the priority. Now cites ERC 2025 ALS.
- 02 q2 (writer flag). Amiodarone as contraindicated is correct. The CAEP 2021 checklist lists amiodarone with the AV nodal blockers. US AHA/ACC/HRS guidance (2014, carried forward) classes IV amiodarone in pre-excited AF as Class III, harm. The dangerous flag in q3 stands. Source changed from CCS 2020 (not verified for this point) to CAEP 2021. CCS 2020 removed from this SAMP.
- 02 q3. Before: "procainamide" alone scored, though the prompt asks for the dose. After: procainamide must come with a dose unit (mg/kg, mg/min, 1500, 1 g).
- 03 q3. Added calcium gluconate 1 g (10 mL of 10%). The usual range is 10 to 30 mL. Added "CaCl". The explanation now gives the range.
- 03 q4. Insulin 10 units or 5 units kept. Added "10 u" style abbreviations. Salbutamol 10 to 20 mg nebulized is correct.
- 04 q1. Removed "prolonged QTc" as a sign of sodium channel blockade. QT prolongation in TCA toxicity is mainly potassium channel and QRS effect. The remaining four items fill the two answers asked for.
- 04 q2. Added mmol doses (50 to 120 mmol), since Canadian bicarbonate is labelled in mmol.
- 05 q3. Before: the "stop" item matched any line with "stop", "hold" or "discontinue". After: specific phrases ("stop methadone", "stop ciprofloxacin", "stop QT").
- 06 q3. Before: "a perfusing rhythm can usually be rewarmed with forced air". He is 27.2°C with SBP 82 mmHg. The WMS and ERC treat that as cardiac instability, which calls for early ECLS contact. The explanation is now corrected.
- 06 q4 (writer flag). Added an accepted item for epinephrine per the standard algorithm, which AHA considers reasonable. The "limit shocks and withhold epinephrine below 30°C" item (ERC, WMS) stays. The explanation now states the difference between the guidelines.
- 07 q2. Before: "onset under 12 hours and no recent stroke or TIA". The CAEP 2021 checklist wording is: no history of stroke or TIA, no valvular disease, and onset under 12 h, or 12 to 48 h with fewer than two CHADS-65 criteria. CCS 2020 uses "no recent stroke or TIA" for the under 12 h window. The explanation now follows CAEP.
- 07 q3. Before: "CAEP recommends 200 J and anteroposterior pads". CAEP actually says start at 150 to 200 J synchronized, and either anterolateral or anteroposterior pads is acceptable. The key (sedation, 200 J synchronized, AP pads) still holds, because AP is acceptable and the other options are wrong. Only the explanation was corrected.
- 07 q4. Before: any DOAC name was unacceptable. CAEP says 4 weeks of anticoagulation after cardioversion "might be considered" by shared decision in CHADS-65 negative patients. After: only long term or lifelong anticoagulation is unacceptable. The explanation mentions the 4 week option.
- 09 q3 (writer flag). Verified against the 2015 ACC/AHA/HRS SVT guideline: 3 mg for heart transplant, central line, dipyridamole and carbamazepine. The key is correct.
- 10 q2 (writer flag). Amiodarone 150 mg over 10 min and procainamide 20 to 50 mg/min to 17 mg/kg are correct. Procainamide now needs a dose unit, matching amiodarone. The explanation notes that AHA advises avoiding procainamide in heart failure. The EF is 30%.
- 12 q2 (writer flag). Verified AHA 2025 Part 11: 32 to 37.5°C for at least 36 hours in adults who do not follow commands, then fever prevention. Added a "at least 36 hours" key item.
- 12 q4. AHA 2025 targets SpO2 90 to 98% once stable. The earlier 92 to 98% came from 2020. ERC 2025 uses 94 to 98%. The key now accepts 90. MAP 65 mmHg or more and normal PaCO2 are unchanged.
- 14 q1. Before: bare "stemi" was unacceptable, so "Brugada pattern, a STEMI mimic" scored zero. After: "acute stemi", "anterior stemi" and similar phrases.
- 14 q3. Before: the "avoid" item matched any line containing "avoid", such as "avoid acetaminophen". After: specific phrases ("avoid sodium channel", "avoid flecainide", "brugadadrugs").
- Sources. The AHA 2025 citations are now the real part titles (Part 9 ALS, Part 10 special circumstances, Part 11 post-arrest care), Circulation 2025, with DOI URLs. Added ERC 2025 ALS. Added the CAEP checklist PMC URL.

## c() helper and match breadth

The c() helper only builds drug, dose and route combinations. It did not create phrases so generic that wrong answers match. The real problems were bare single words in hand-written lists: "stop" (anaphylaxis-12, arrhythmia-05), "avoid" (arrhythmia-14), "sepsis" and "stemi" as unacceptable phrases, and the IV epinephrine phrases. All are fixed. One engine limit remains, and it cannot be fixed in data. "Epinephrine 0.5 mg IM, not IV push" still triggers the dangerous flag, because the negation check looks before the first matched word, which is "epinephrine".

## alsoTopics

These alsoTopics questions each genuinely test the named key feature:

- shock 1, 3, 5 to 8
- airway 1 to 4
- cqi 1 and 5
- asthma-copd 5
- infectious-diseases 2 and 8
- ems 1
- tox 2, 4 and 5
- environmental 3
- ischemic-heart-disease 6

No relabels were needed.

## Sources verified

- CAEP 2021 AF/AFL checklist, CJEM 2021, volume 23, page 604: https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/ (onset windows, procainamide 15 mg/kg over 60 min max 1500 mg, 150 to 200 J, pad positions, amiodarone in pre-excited AF, CHADS-65)
- AHA 2025 Part 9 ALS: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376 (atropine 1 mg)
- AHA 2025 Part 10 special circumstances: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001380
- AHA 2025 Part 11 post-arrest care: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375 (32 to 37.5°C, at least 36 h, SpO2 90 to 98%, MAP 65 or more, confirmed through secondary summaries because the journal page blocked direct fetch)
- ERC 2025 ALS: https://www.resuscitationjournal.com/article/S0300-9572(25)00281-3/fulltext (atropine 500 mcg, avoid in wide QRS high grade block)
- CSACI 2021 autoinjector transition statement: https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/ (under 25 kg 0.15 mg, 25 to under 45 kg 0.3 mg, 45 kg and over 0.5 mg)
- Shaker 2020 anaphylaxis practice parameter: https://www.jacionline.org/article/S0091-6749(20)30105-6/fulltext
- Pouessel 2024 refractory anaphylaxis overview: https://pmc.ncbi.nlm.nih.gov/articles/PMC11439156/ (glucagon and infusion doses by guideline)
- RCUK 2021 anaphylaxis: https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf
- Khan 2022 drug allergy parameter, dissimilar R1 cephalosporins after penicillin anaphylaxis: confirmed through a secondary review (https://pmc.ncbi.nlm.nih.gov/articles/PMC11016857/), because the journal page blocked direct fetch.
- These are known real publications, with titles and years checked against memory and search results: WAO 2020, CPS and CSACI documents, CAFG 2021, Bernstein 2017, ACR manual, CIAF 2012, Ontario ALS PCS, CCS 2020 AF, CSRS 2016, ACC/AHA/HRS syncope 2017, SVT 2015, VA 2017, HRS 2013 inherited arrhythmia, Lavonas 2023, Bruccoleri 2016, KDIGO 2020, WMS 2019 and CCS/CAIC 2019. No URLs were added for them.

## Open questions for the physician

1. Is a 0.5 mg autoinjector currently marketed in Canada? CSACI 2021 assumes one, but Emerade supply has been interrupted. If none is available, anaphylaxis-01 should say 0.3 mg only.
2. anaphylaxis-12: do you accept ceftriaxone minutes after pip-tazo anaphylaxis, or would you key only a non beta lactam? Also, is a carbapenem acceptable?
3. anaphylaxis-05 q4: an SGA attempt during CICO is unacceptable (not dangerous) because the obstruction is glottic. Some examiners follow the Vortex approach and would credit one SGA attempt while preparing FONA.
4. arrhythmia-10: is procainamide acceptable with EF 30% and no overt heart failure? AHA advises avoiding it in heart failure.
5. arrhythmia-01 q1: "syncope while seated" is accepted as an arrhythmic feature. It is not a validated risk marker, and seated vasovagal syncope in church is common.
6. arrhythmia-07 q3: CAEP accepts either pad position. Consider rewording the option to "Anterolateral or anteroposterior pads, switching if shocks fail" so the key does not suggest AP is mandatory.
7. CAEP wording for the 12 to 48 h window ("fewer than two CHADS-65 criteria") came from the PMC text. Please confirm against the printed checklist.

## Summary

- Anaphylaxis: 9 SAMPs corrected, 6 accurate.
- Arrhythmia: 10 SAMPs corrected, 5 accurate.

Most serious errors:

- The IV epinephrine dangerous phrases zeroed correct answers that mentioned an IV fluid bolus.
- The 0.5 mg atropine dose was penalized, although it is current ERC practice and the patient is one ERC advises against atropine for.
- Over-broad "stop" and "avoid" key items accepted almost anything.
- The 2020 post-arrest SpO2 target was presented as current.
- The ACE inhibitor angioedema explanation overstated bradykinin therapies.
- The pre-excited AF citation pointed to an unverified CCS statement.

No clinical keyed answer was reversed.
