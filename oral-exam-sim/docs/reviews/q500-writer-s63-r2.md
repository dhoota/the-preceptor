# Q500 writer report, round 2: s63, Arrhythmia

Author: Preceptor. File `src/samps/s63/arrhythmia.ts`. Ids unchanged (arrhythmia-48 to arrhythmia-52). All items stay `reviewed: false`, `version: 1`. arrhythmia-48 and arrhythmia-51 passed and are unchanged. No other file was edited.

## Required fixes and how each was done

| SAMP | Question | Required fix | What was done |
|---|---|---|---|
| arrhythmia-49 | whole SAMP | Rebuild q2 to q4 on decisions the bank does not hold, keep at least one KF8 question | q1 kept as the KF8 question. q2 to q4 rebuilt. The shivering, recurrent VF with repeat angiography and fever-prevention keys are gone. The stem now has an anterior STEMI, her medications (ramipril, metformin) and a normal potassium and ionized calcium, which the new q3 needs. |
| arrhythmia-49 | q1 | Remove the "not shockable" update and the "No control after a PEA arrest" distractor | Update removed. The distractor is now "Cool to 31°C for 24 hours", a peer temperature plan below any target the guidance considers. The rhythm-independence sentence is gone from the explanation. The key is now "No rewarming, prevent fever", because ERC-ESICM 2022 makes a device a second step after exposure and antipyretics, so a device key was less exact. The stem no longer calls the arrest rhythm PEA. |
| arrhythmia-49 | q1 | Cite the 2022 ERC-ESICM temperature guideline | q1 now cites `erc-esicm-temp-2022`. Its Table 2 was read in full (see sources). `erc-esicm-2021` is no longer cited anywhere in the file. |
| arrhythmia-49 | q2 | Replace the shivering key | New q2 (KF3): she re-arrests in the ED with regular P waves and no QRS. Key "Ventricular standstill" (P-wave asystole). |
| arrhythmia-49 | q3 | Replace the repeat-angiography key, fix the KF tag | New q3 (KF4): the treatment to add to CPR and epinephrine for P-wave asystole is transcutaneous pacing (ERC 2021). The reocclusion item is gone, so no KF5 retag is needed. |
| arrhythmia-49 | q4 | Replace the fever-control key, fix the 35°C and 36°C mismatch | New q4 (KF3): during chest physiotherapy lead II shows fast irregular deflections while lead V1 shows narrow QRS at 88/minute and the arterial line reads 116/68 mmHg. Key "Artefact from chest physiotherapy". Only one device temperature (35°C) now appears in the SAMP. |
| arrhythmia-50 | q1 | Replace the posture key | Key is now "Brother's death in his sleep" (family history of young sudden death, an ESC high-risk feature). The supine faint stays only in the explanation. The stem adds "He saw a few jerks of her arms" for a new tempting distractor ("Brief jerks of her arms"), explained as common in syncope from any cause. |
| arrhythmia-50 | q4 | Mock-mode cue (ruling B6) | The update now reads "She has never taken digoxin or methadone." |
| arrhythmia-52 | q4 | Replace the atropine key with a new KF4 decision, not a repeat of arrhythmia-51 q3 | New q4: sustained monomorphic VT at 168/minute with crackles, O2 sat 86% and a normal BP of 118/72 mmHg. "Which finding most clearly shows that his VT is unstable?" Key "Crackles with O2 sat of 86%" (heart failure is an ERC life-threatening feature). Distractors are the rate, QRS width, axis and anxiety. No pacing or atropine key. Frampton 2023 is no longer cited and was removed. |

Recommended but not required items: the ESC 2022 ventricular arrhythmia citation for arrhythmia-50 q4 and ACC/AHA/HRS 2018 for arrhythmia-51 q3 were not added, because neither text could be opened. arrhythmia-48 q4 was left as it was.

## Key feature coverage after round 2

| Key feature | Questions |
|---|---|
| 1 | 48 q1, 50 q1 |
| 2 | 50 q2, 51 q2 |
| 3 | 48 q2, 49 q2, 49 q4, 51 q1 |
| 4 | 49 q3, 51 q3, 52 q4 |
| 5 | 48 q3, 50 q3, 51 q4 |
| 6 | 48 q4, 50 q4 |
| 7 | 52 q1, 52 q2, 52 q3 |
| 8 | 49 q1 |

Every key feature is tested. 20 questions: 17 single, 3 menu. Single key positions (first to fifth): 3, 3, 4, 3, 4, so the most-used position holds 4 of 17 (24%). The key is the single longest option in 5 of 17 singles (29%).

## Uniqueness check

I read the whole arrhythmia catalogue (`scratchpad/q500/catalog/arrhythmia.md`), including the oral cases. I grepped the ischemic heart disease, chest pain, EMS, shock and LOC catalogues, and all other catalogues, for: arrest, ROSC, standstill, P wave, agonal, artefact or artifact, tremor, instability or unstable, family history keys, and AV block. I also read the ischemic heart disease post-arrest and fibrinolysis oral cases. There is no syncope catalogue.
- Ventricular standstill and P-wave asystole: no item in the bank.
- Pacing during arrest for P-wave asystole: no item. Transcutaneous pacing is keyed elsewhere (51 q3, 37 q2, seizures-31 q3) only for bradycardia with a pulse, which is a different decision.
- Monitor artefact that mimics VF: no item. The only artefact item is pacer artefact versus capture in the oral case complete-heart-block-pacing.
- The features that make a tachycardia unstable: no keyed item. Oral cases only say "he is now unstable".
- Family history of young sudden death as the single keyed answer: not keyed anywhere. It appears only as one item in the arrhythmia-14 q2 write-in list.
- No patient numbers were reused from another item.

## Sources (verified this round)

- Nolan JP and colleagues. ERC-ESICM guidelines on temperature control after cardiac arrest in adults. Resuscitation. 2022. Full PDF read from the UCLouvain repository copy, https://research.dial.uclouvain.be/bitstreams/aab67515-dd06-41b1-a1ec-01872ac03d0c/download. It includes Table 2 (no active rewarming of mild hypothermia, against prehospital large-volume cold fluid, fever above 37.7°C prevented for at least 72 hours, insufficient evidence on 32 to 36°C). Cited URL https://doi.org/10.1016/j.resuscitation.2022.01.009.
- Soar J and colleagues. European Resuscitation Council Guidelines 2021: adult advanced life support. Resuscitation. 2021. The record was confirmed in Europe PMC (PMID 33773825), and the DOI https://doi.org/10.1016/j.resuscitation.2021.02.010 resolves to the matching Elsevier record (pii S0300957221000630). The English full text was blocked. I read the wording in the official ERC German translation (Notfall Rettungsmed 2021, https://pmc.ncbi.nlm.nih.gov/articles/PMC8185697/). It says to check apparent asystole for P waves because transcutaneous pacing may be indicated, and it lists shock, syncope, heart failure (pulmonary edema or raised JVP) and myocardial ischemia as the life-threatening features.
- Jafary FH. The "incidental" episode of ventricular fibrillation: a case report. J Med Case Rep. 2007. Full text read via Europe PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC2000884/. It covers QRS complexes marching through artefact, and causes such as movement, interference and loose leads.
- Byrne RA and colleagues. 2023 ESC ACS guidelines. Reviewer's downloaded text reread: section 7.1 and Recommendation Tables 8 and 14. Still cited for 52 q1 to q3.
- Brignole M and colleagues. 2018 ESC syncope guidelines: https://doi.org/10.1093/eurheartj/ehy037. Family history of young sudden death is among the high-risk features. The ERC 2021 table reproduces the ESC features.
- Unchanged from round 1 and still cited: Abbas 2022, Bellamy 2019, Patel 2010, Merck short QT, Dayal 2018, Armour 2022.

## Uncertain, for the reviewer

- arrhythmia-49 q3: AHA guidance advises against routine pacing in cardiac arrest. The key rests on the ERC 2021 statement about P-wave asystole, and the explanation says pacing is unlikely to help true asystole. Epinephrine is left out of the options because the prompt says it is already given.
- arrhythmia-49 q1 distractor "Cool to 31°C for 24 hours": ERC-ESICM 2022 considers 32 to 36°C and AHA uses 32 to 37.5°C, so 31°C is outside both.
- arrhythmia-52 q4: the ERC wording on instability was read in the official German translation, not the English text. The key is the only option that matches a listed life-threatening feature. A rate of 168/minute is the tempting distractor, and the explanation says why it is not enough on its own.
- arrhythmia-50 q1: ESC lists a family history of young sudden death as a minor high-risk feature, which matters when the syncope looks arrhythmic. The other options are low-risk or neutral, so only one answer is defensible.
