# Writer report: batch s24, Arrhythmia

File: `src/samps/s24/arrhythmia.ts` (export `ARRHYTHMIA_S24`), re-exported as `SAMPS_S24` in `src/samps/s24/index.ts`.
The file was generated from scratch data by a script that sorts options with the same rule as the quality gate and computes the key index.

## Count, mix and key positions

- 32 SAMPs, ids arrhythmia-16 to arrhythmia-47. All `reviewed: false`.
- 113 questions: 104 `single`, 9 `menu`. SAMPs with a menu question: 17, 20, 23, 24, 32, 36, 40, 42, 46.
- 3 to 5 questions per SAMP (16 with 3, 15 with 4, 1 with 5).
- Single key positions, first to fifth: 22, 19, 20, 21, 22 (highest 21.2 percent). The key is the longest option in 23.1 percent of single questions.
- Settings: tertiary default, plus rural Saskatchewan, community Nova Scotia and a community hospital 2 hours by air from PCI. Ages run from 3 weeks to 84 years, with 8 pediatric cases (3-week-old, 6-week-old, 10-month-old, 4-year-old, two 13-year-olds, 15-year-old, 16-year-old) and a pregnant patient.
- Checks: `npx tsc --noEmit -p .` shows no s24 errors. `SAMP_BATCH=s24 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 683 of 683.

## Key feature coverage (questions per key feature)

| KF | Summary | Questions |
|---|---|---|
| 1 | Exclude arrhythmia in syncope or presyncope | 13 |
| 2 | Subtle ECG warnings | 7 |
| 3 | Rhythm strip reading, narrow or wide, AV blocks | 18 |
| 4 | Stable or unstable, electrical or drug therapy | 27 |
| 5 | Underlying causes | 27 |
| 6 | Special contexts (WPW, long QT, pregnancy, implanted devices) | 11 |
| 7 | Reperfusion rhythms | 4 |
| 8 | Temperature control after ROSC | 6 |

## Scenarios and how they differ from s03

The s03 set covers trifascicular block syncope, WPW with atrial fibrillation, dialysis hyperkalemia, a tricyclic overdose, acquired torsades, hypothermia, low-risk new AF, AF with sepsis, SVT, stable VT, AIVR after lysis, two post-arrest cases, Brugada and digoxin. This batch avoids those. New scenarios: hypertrophic cardiomyopathy syncope, CSRS scoring (high and very low risk), Mobitz II with atropine failure, infant SVT, flutter beyond 48 hours, BRASH, Lyme carditis, thyrotoxic AF, AF from pulmonary embolism, electrical storm, inappropriate ICD shocks, multifocal atrial tachycardia, NSVT and vagal bradycardia after tenecteplase, hypoxic PEA arrest, bradycardia during temperature control, pediatric drowning, long QT type 2, ARVC with an epsilon wave, ischemic polymorphic VT, tachycardia-bradycardia syndrome, drug-induced bradycardia, pacemaker loss of capture, infant sinus tachycardia, orthodromic AVRT becoming pre-excited AF in a child, hypokalemia from purging, congenital heart block, VT syncope after infarction, cardioversion on apixaban, SVT in pregnancy, unstable SVT and commotio cordis.

## Sources

The web search budget ran out partway through. Sources were then confirmed through Europe PMC metadata (title, authors, journal, year) by DOI, not full text, unless noted.

- Stiell IG, et al. 2021 CAEP AF/flutter checklist. Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/
- Andrade JG, et al. 2020 CCS/CHRS AF guidelines. DOI 10.1016/j.cjca.2020.09.001
- AHA 2025 Part 9 adult ALS: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376 (page returned 403. Checked through summaries and the 2025 bradycardia algorithm dose summary.)
- AHA 2025 Part 11 post-arrest care: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375 (403. Abstract via Europe PMC PMID 41122894. Temperature target and duration and angiography indications via secondary summaries.)
- AHA and AAP 2025 Part 8 PALS: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368 (adenosine and cardioversion doses via search summary)
- Sandhu RK, et al. CCS syncope practice update. Can J Cardiol. 2020. https://pubmed.ncbi.nlm.nih.gov/32624296/
- Thiruganasambandamoorthy V, et al. Canadian Syncope Risk Score. CMAJ. 2016. https://www.cmaj.ca/content/188/12/e289 (PMC5008955)
- Brugada J, et al. 2019 ESC SVT guidelines. DOI 10.1093/eurheartj/ehz467
- Zeppenfeld K, et al. 2022 ESC ventricular arrhythmia guidelines. DOI 10.1093/eurheartj/ehac262
- Kusumoto FM, et al. 2018 ACC/AHA/HRS bradycardia guideline. DOI 10.1161/CIR.0000000000000628
- Yeung C, Baranchuk A. Lyme carditis review. 2019. https://www.jacc.org/doi/10.1016/j.jacc.2018.11.035
- Farkas JD, et al. BRASH syndrome. J Emerg Med. 2020. DOI 10.1016/j.jemermed.2020.05.001
- Byrne RA, et al. 2023 ESC ACS guidelines. Arrhythmia section read in full: https://academic.oup.com/eurheartj/article/44/38/3720/7243210
- Konstantinides SV, et al. 2019 ESC PE guidelines. DOI 10.1093/eurheartj/ehz405
- Ommen SR, et al. 2024 HCM guideline. DOI 10.1161/CIR.0000000000001250
- Ross DS, et al. 2016 ATA hyperthyroidism guidelines. DOI 10.1089/thy.2016.0229
- Crossley GH, et al. HRS/ASA CIED consensus. Heart Rhythm. 2011. DOI 10.1016/j.hrthm.2011.05.010
- McMullan J, et al. Pacemaker and ICD care in the ED. Am J Emerg Med. 2007. DOI 10.1016/j.ajem.2007.02.008
- Unwin RJ, Luft FC, Shirley DG. Hypokalemia. Nat Rev Nephrol. 2011. DOI 10.1038/nrneph.2010.175
- Shah MJ, et al. 2021 PACES pediatric CIED consensus. Heart Rhythm. 2021. Europe PMC lists the same statement in Cardiol Young and Indian Pacing Electrophysiol J, so check the journal named in the citation.
- Maron BJ, Estes NAM. Commotio cordis. N Engl J Med. 2010. DOI 10.1056/NEJMra0910111

## For the reviewers

1. CSRS points (arrhythmia-17 q1, arrhythmia-46 q1). Two summaries disagreed on whether the blood pressure and QTc items score 1 or 2. I used 2 for each, because only that reproduces the published range of minus 3 to 11. I used an axis of minus 60 degrees so the axis threshold (minus 30) is not in doubt. Risk group labels (score 4 is high, minus 3 is very low) are from memory of the paper.
2. The AHA 2025 full texts were blocked. Claims that rely on them: temperature control from 32 to 37.5°C for at least 36 hours, fever prevention afterward, indications for emergent angiography, atropine 1 mg, and the pediatric doses. Please check against the published text.
3. arrhythmia-30 q1 treats sinus bradycardia at 33.5°C with good perfusion as needing no treatment. This is widely taught, but I did not find the sentence in the AHA text.
4. arrhythmia-31 q2 and arrhythmia-47 q2 describe pediatric temperature control in general terms (continuous core monitoring, fever prevention, indicated when the child is comatose). No specific target is keyed.
5. ESC 2019 SVT pregnancy statements (atenolol excluded, cardioversion safe at any stage, beta-1 selective blocker first for prevention) are from memory of the guideline text.
6. arrhythmia-41 q3 keys admission for pacemaker assessment for congenital block at 55/minute with heart failure signs. The pacing thresholds are from memory of the PACES statement.
7. arrhythmia-25 q4 keys digoxin for AF with an ejection fraction of 30% and crackles, following CAEP. Amiodarone is kept out of the options because it could also be defended.
8. arrhythmia-43 q2 keys 200 J, within the CAEP 150 to 200 J range. 150 J is not offered, to avoid two defensible answers.
9. Scope choice: I left out poisoning scenarios (beta blocker, calcium channel blocker, local anesthetic). Key feature 6 is covered through WPW, long QT, pregnancy and implanted devices. s03 already covers tricyclic and digoxin toxicity and hypothermia.
10. Several distractor reasons state standard teaching that the cited source does not spell out, for example that carotid sinus massage is not used in infants and that lidocaine prophylaxis after infarction was abandoned. Please check these at the sentence level.
