# Q500 writer report: s63, Arrhythmia

Author: Preceptor. All items are `reviewed: false`, `version: 1`.

## Ids written

File `src/samps/s63/arrhythmia.ts`, export `ARRHYTHMIA_S63`.

| Id | Title | Questions | Key features |
|---|---|---|---|
| arrhythmia-48 | Faint during a relay race | 4 single | 1, 3, 5, 6 |
| arrhythmia-49 | Collapse at a community centre | 4 single | 8, 8, 7, 8 |
| arrhythmia-50 | Found unresponsive in bed | 3 single, 1 menu | 1, 2, 5, 6 |
| arrhythmia-51 | Nearly fainted carrying firewood | 3 single, 1 menu | 3, 2, 4, 5 |
| arrhythmia-52 | Chest pain treated in the ambulance | 3 single, 1 menu | 7, 7, 7, 4 |

Total 20 questions: 17 single and 3 menu.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1 Exclude arrhythmia in vague poor perfusion | 2 |
| 2 Subtle ECG warnings | 2 |
| 3 Read rhythm strips | 2 |
| 4 Stable or unstable, electrical or drug | 2 |
| 5 Underlying causes | 3 |
| 6 Special contexts | 2 |
| 7 Reperfusion rhythms | 4 |
| 8 Temperature control after ROSC | 3 |

Every key feature is tested. Key feature 7 carries the most weight, then 8.

Single key positions (first to fifth): 3, 4, 3, 4, 3. The key is the single longest option in 3 of 17 single questions.

## What is new against the bank

- arrhythmia-48: catecholaminergic polymorphic VT in a child (exercise test with a normal resting ECG, bidirectional VT, and avoiding epinephrine in a VT storm). The bank only named CPVT in an oral case differential.
- arrhythmia-49: temperature control after a PEA arrest (any initial rhythm), no rewarming of mild hypothermia, no cold fluid bolus, shivering managed with opioid and sedation first, fever prevention for 72 hours, and recurrent VF after stenting meaning reocclusion.
- arrhythmia-50: short QT syndrome, supine syncope as a high-risk feature, acquired causes of a short QT, and the defibrillator rather than a beta blocker.
- arrhythmia-51: 2:1 AV block that cannot be called Mobitz I or II, bedside clues to infranodal block, pacing rather than atropine, and flecainide as a cause of infranodal block, in a rural site without transvenous pacing.
- arrhythmia-52: prehospital fibrinolysis, VF at reperfusion, which reperfusion rhythms need treatment, Mobitz I after inferior reperfusion, and atropine for nodal complete heart block.

## Sources and verification

- Abbas M, Miles C, Behr E. Catecholaminergic polymorphic ventricular tachycardia. Arrhythm Electrophysiol Rev. 2022. Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC9820193/
- Bellamy D, et al. CPVT: the cardiac arrest where epinephrine is contraindicated. Pediatr Crit Care Med. 2019. Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC6400445/
- Nolan JP, et al. ERC and ESICM guidelines 2021: post-resuscitation care. Intensive Care Med. 2021. Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC7993077/
- Nolan JP, et al. ERC-ESICM guidelines on temperature control after cardiac arrest in adults. Resuscitation. 2022. Abstract and author list checked in Europe PMC and the Lund University portal: https://doi.org/10.1016/j.resuscitation.2022.01.009
- Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. Full text read (arrhythmia section and Recommendation Table 14): https://doi.org/10.1093/eurheartj/ehad191
- Brignole M, et al. 2018 ESC syncope guidelines. Eur Heart J. 2018. High-risk feature table confirmed through secondary sources: https://doi.org/10.1093/eurheartj/ehy037
- Patel C, Yan GX, Antzelevitch C. Short QT syndrome: from bench to bedside. Circ Arrhythm Electrophysiol. 2010: https://pmc.ncbi.nlm.nih.gov/articles/PMC2933105/
- Mitchell LB. Short QT interval syndromes. Merck Manual Professional Version. Reviewed 2026: https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmogenic-cardiac-disorders/short-qt-interval-syndromes
- Dayal NB, Burri H. Acute management of bradycardia in the emergency setting. Cardiovasc Med. 2018. PDF read (Table 1, nodal and infranodal clues): https://doi.org/10.4414/cvm.2018.00554
- Armour R, Learning C, Trojanowski J. Paradoxical worsening of bradycardia following atropine administration. Br Paramed J. 2022: https://pmc.ncbi.nlm.nih.gov/articles/PMC9662156/
- Frampton J, Ortengren AR, Zeitler EP. Arrhythmias after acute myocardial infarction. Yale J Biol Med. 2023: https://pmc.ncbi.nlm.nih.gov/articles/PMC10052595/

## For the reviewers

- arrhythmia-49 q1 to q4 follow ERC-ESICM guidance. The AHA 2025 post-arrest text could not be opened (403). The keys fit the AHA range of 32 to 37.5°C, but please check the AHA wording on fever prevention and cold fluids.
- arrhythmia-48 q4 keys opioid and general anesthesia for a CPVT storm. The evidence is a pediatric case series and expert review, not a guideline. Amiodarone and beta blockers were left out of the options on purpose.
- arrhythmia-50 q4 keys the defibrillator. ESC 2022 gives a IIa recommendation after arrhythmic syncope in short QT syndrome. The ESC 2022 section could not be opened directly, so the Merck summary was used.
- arrhythmia-51 q3 keys pacing over atropine in hypotensive infranodal block with pads already on. ACLS algorithms still list atropine first. The explanation states why it is unlikely to help here.
- arrhythmia-52 q2 (menu) treats sustained polymorphic VT and complete heart block with hypotension as the two rhythms needing treatment. ESC 2023 supports observation for the others.
