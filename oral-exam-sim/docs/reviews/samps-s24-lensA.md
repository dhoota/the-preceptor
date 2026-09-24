# Review of s24 (arrhythmia), Lens A: clinical truth

Reviewer: AI audit, Lens A. This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: all 32 SAMPs in `src/samps/s24/arrhythmia.ts` (arrhythmia-16 to arrhythmia-47) and the 2 SAMPs in `src/samps/s24/review-extra.ts` (arrhythmia-48, arrhythmia-49). I read every stem, option and explanation sentence and recomputed every dose and score.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| arrhythmia-48 (review-extra) | q1 | correct | Key pointed to "Wandering atrial pacemaker" (index 4) while the stem and explanation describe multifocal atrial tachycardia at 128/minute. Key set to index 2. | High |
| arrhythmia-49 (review-extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that appears nowhere in the case. Sentence removed. | High |
| arrhythmia-44 | q1 | explanation | Said diltiazem is "a later choice if adenosine fails" in pregnancy. ESC 2019 SVT says diltiazem was teratogenic in animals and is not generally recommended in pregnancy, and the next acute drug after adenosine is an IV beta-1 selective blocker (except atenolol). Reason rewritten. | High |
| arrhythmia-41 | q3 | explanation | Implied a rate of 55 itself makes the infant a pacing candidate (the old 2012 threshold). PACES 2021 sets 50/minute or less for asymptomatic infants, and symptomatic bradycardia is a separate Class I indication. Explanation now says the heart failure signs, not the rate, carry the indication. Key unchanged. | Medium |
| arrhythmia-42 | q1 | explanation | "Carotid sinus hypersensitivity needs a neck trigger" is false as an absolute, because spontaneous carotid sinus syncope often has no recognized trigger. Replaced with a true reason (a reflex cause does not explain palpitations before the faint in a scarred ventricle). | Low |

## Key changes

- arrhythmia-48 q1: before index 4 (Wandering atrial pacemaker), after index 2 (Multifocal atrial tachycardia). The case gives a rate of 128, above the 100/minute that separates the two, and the explanation already argued for multifocal atrial tachycardia.

No key in `arrhythmia.ts` changed.

## Items from the writer's list, checked

1. CSRS points (arrhythmia-17 q1, arrhythmia-46 q1). I checked the CMAJ 2016 full text. Points come from dividing each shrunk beta coefficient by the smallest one (QRS axis, 0.48) and rounding. That gives vasovagal predisposition minus 1, heart disease 1, systolic BP below 90 or above 180 mmHg 2, troponin above the 99th percentile 2, abnormal QRS axis 1, QRS duration above 130 ms 1, QTc above 480 ms 2, ED diagnosis of vasovagal syncope minus 2, cardiac syncope 2. That reproduces the published range of minus 3 to 11. The paper states that a score of minus 2 or lower is very low risk and 4 or more is high or very high risk. arrhythmia-17 (1 + 2 + 1 = 4, high) and arrhythmia-46 (minus 1 minus 2 = minus 3, very low) are correct. Note: the paper gives the axis threshold as above 100° in the abstract and above 110° in the tables. The stem's minus 60° is unaffected.
2. AHA 2025 claims. Full texts returned 403. Checked through secondary summaries: adult temperature control 32 to 37.5°C for at least 36 hours in adults who do not follow commands (arrhythmia-29 q1, q2), fever prevention afterward (q4), emergent angiography for ST elevation, cardiogenic shock, recurrent ventricular arrhythmias or ongoing ischemia (arrhythmia-30 q2), atropine 1 mg every 3 to 5 minutes to 3 mg, then pacing or a dopamine or epinephrine infusion (arrhythmia-17 q4, arrhythmia-28 q2), and PALS adenosine 0.1 then 0.2 mg/kg (6 and 12 mg maximum), synchronized cardioversion 0.5 to 1 then 2 J/kg, and compressions for a heart rate below 60/minute with poor perfusion despite oxygenation and ventilation. All consistent. A physician should confirm against the primary text.
3. arrhythmia-30 q1 (sinus bradycardia at 33.5°C with good perfusion needs no treatment). Standard teaching. I found no contrary statement. Keyed answer stands.
4. arrhythmia-31 q2 and arrhythmia-47 q2. Consistent with the 2025 PALS emphasis on continuous core temperature monitoring and fever prevention in comatose children. No specific target is keyed, which is correct.
5. ESC 2019 SVT pregnancy (arrhythmia-44). I checked against the guideline text: adenosine after vagal manoeuvres (Class I), atenolol excluded, beta-1 selective blockers then verapamil for prevention without WPW (IIa), flecainide or propafenone for WPW or when AV nodal blockers fail (IIa), amiodarone not recommended (III), and cardioversion safe in all phases of pregnancy. q2 and q3 are correct. q1 had the false diltiazem reason, now fixed.
6. PACES 2021 (arrhythmia-41 q3). Checked. The key holds through the symptomatic bradycardia indication. The explanation is tightened as above.
7. Distractor reasons that rest on standard teaching: lidocaine prophylaxis after infarction abandoned, and prophylactic antiarrhythmic drugs not recommended in ACS (ESC 2022 VA and 2023 ACS). Carotid sinus massage not used in infants, with ice to the face preferred (PALS). Amiodarone and AV nodal drugs avoided in pre-excited AF (ESC 2019 SVT, Class III for IV amiodarone). IV magnesium may help multifocal atrial tachycardia even with a normal level, antiarrhythmics generally unhelpful and treatment of the underlying condition first (ESC 2019 SVT section 11.1.3). CAEP 2021: CHADS-65 criteria for the 12 to 48 hour window, 150 to 200 J starting energy, and digoxin first line in acute heart failure. All verified or consistent.

## Sources verified

- Thiruganasambandamoorthy V, et al. CMAJ 2016. Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC5008955/
- Stiell IG, et al. 2021 CAEP AF/AFL checklist. CJEM 2021: https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/
- Brugada J, et al. 2019 ESC SVT guidelines. Eur Heart J 2020, volume 41, page 655. Full text read (pregnancy, MAT and pre-excitation sections): https://academic.oup.com/eurheartj/article/41/5/655/5556821
- AHA 2025 Part 11 post-cardiac arrest care (PMID 41122894 abstract). Recommendations checked through https://emcrit.org/pulmcrit/2025-arrest/ and search summaries. Primary page https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375 returned 403.
- AHA 2025 adult bradycardia algorithm: https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-Bradycardia-250514.pdf (dose summary via search)
- AHA and AAP 2025 PALS (PMID 41122885). Doses checked through search summaries.
- Shah MJ, et al. 2021 PACES CIED consensus. Heart Rhythm 2021 (PMID 34363988, DOI 10.1016/j.hrthm.2021.07.038). Recommendations read at https://pmc.ncbi.nlm.nih.gov/articles/PMC9802608/
- Sandhu RK, et al. CCS syncope update. Can J Cardiol 2020: https://pubmed.ncbi.nlm.nih.gov/32624296/
- Zeppenfeld K, et al. 2022 ESC VA guidelines (PMID 36017572). Checked through summaries.
- Byrne RA, et al. 2023 ESC ACS guidelines (PMID 37622654). The publisher page confirmed the structure but not the full recommendation text.
- Remaining citations (Ommen 2024, Ross 2016, Andrade 2020, Konstantinides 2019, Kusumoto 2018, Yeung 2019, Farkas 2020, Crossley 2011, McMullan 2007, Unwin 2011, Maron 2010) have real authors, works and years as cited. Not re-read at sentence level.

## Needs physician decision

- review-extra.ts. arrhythmia-48 is a copy of arrhythmia-26 (same title, stem, options and sources), and arrhythmia-49 is a copy of arrhythmia-37. Each differed from its twin only by the planted defect fixed above. Neither should be added to the bank, because both would fail the near-duplicate stem rule.
- arrhythmia-46 q1. The options are in the order 0, 1, minus 3, minus 2, minus 1. The ordering gate cannot read negative numbers, so it falls back to string order. SPEC section 7 wants numeric options from low to high (minus 3 to 1), but that order fails the current gate. This is a format issue for Lens B or a gate fix. I left it unchanged.
- The AHA 2025 claims (item 2 above) were verified only through secondary sources.

## Summary

- Fixes: 5 in total. 1 key change and 1 invented stem fact, both in review-extra. 2 false distractor reasons (arrhythmia-44 q1, arrhythmia-42 q1). 1 misleading threshold statement (arrhythmia-41 q3).
- Key changes: 1 (arrhythmia-48 q1). No key changes in the main file.
- SAMPs with a defect: arrhythmia-41, arrhythmia-42, arrhythmia-44, arrhythmia-48, arrhythmia-49. Also noted: arrhythmia-46 (option order, format).
- Checks after the edits: tsc shows no s24 errors. `SAMP_BATCH=s24 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 683 of 683.
