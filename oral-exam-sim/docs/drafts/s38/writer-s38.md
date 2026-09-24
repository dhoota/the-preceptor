# Writer report: batch s38, first trimester bleeding

File: `src/samps/s38/first-trimester-bleeding.ts` (export `FIRST_TRIMESTER_BLEEDING_S38`), exported from `src/samps/s38/index.ts` as `SAMPS_S38`.

## Count, mix and key positions

- 23 SAMPs, ids first-trimester-bleeding-16 to first-trimester-bleeding-38. All `reviewed: false`.
- 72 questions: 67 single and 5 menu. Menus are in SAMPs 16, 19, 22, 29 and 33.
- 21 SAMPs have 3 questions and 2 SAMPs (22 and 37) have 4. This is below the aim of 4. I added a fourth question only where it taught something new and verifiable, rather than repeat s10 teaching.
- Single key positions, first to fifth: 12, 14, 15, 14, 12 of 67. The highest is 22%.
- The key is the longest option in 13 of 67 singles (19%).
- Checks: `npx tsc` shows no s38 errors. `SAMP_BATCH=s38 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 456 of 456.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Detect early shock | 11 |
| 2. Consider pregnancy and exclude ectopic | 10 |
| 3. Speculum and bimanual examination | 10 |
| 4. Limits of hCG and ultrasound | 16 |
| 5. Rh status and anti-D prophylaxis | 9 |
| 6. Counselling, support and follow-up | 16 |
| Shock key features 3 and 4 (secondary) | 3 |

## What the batch covers that s10 did not

Interstitial ectopic, cesarean scar pregnancy, cervical ectopic (sliding sign), a slow hCG rise worked out to Barnhart 2016, a falling hCG worked out to Barnhart 2004, hCG after methotrexate, abortion with mifepristone and misoprostol but no ultrasound, a pulse held down by metoprolol, a hemoglobin that lags the bleed, septic incomplete abortion, a rural transfer, a ruptured corpus luteum with an intrauterine pregnancy and progesterone after luteectomy, a transgender man on testosterone, a teen's capacity to consent in Ontario, and a pregnancy after a birth with dates set by ultrasound. Rh questions cover weak D type 1, true anti-D sensitization, passive anti-D after a recent dose, 300 mcg after 12 weeks, and a mole with pathology pending. None repeats the s10 keys for under 8 weeks or 8 to 12 weeks.

Every hCG change is worked out in its explanation: 1200 to 1460 IU/L is a 22% rise, 2400 to 1300 IU/L is a 46% fall, 2100 to 2350 IU/L is a 12% rise.

## Sources

- SOGC Guideline No. 448, Rh D alloimmunization, 2024. Recommendations 3, 8, 9, 10 and 13 read in the full text: https://sfhc.mcmaster.ca/wp-content/uploads/2025/02/Guidelines-for-WinRho.pdf and https://pubmed.ncbi.nlm.nih.gov/38553007/
- Canadian Blood Services, Clinical Guide to Transfusion, chapter 12, 2018: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/hemolytic-disease-fetus-and-newborn-and-perinatal-immune
- SOGC Guideline No. 414, PUL and ectopic, 2021: https://pubmed.ncbi.nlm.nih.gov/33453378/ (full text blocked, used for general statements only)
- SOGC Guideline No. 460, early pregnancy loss, 2025: https://pubmed.ncbi.nlm.nih.gov/40349974/ and the SOGC medical management chart https://sogc.org/common/Uploaded%20files/HUB%20Pages/pregnancy-loss/Medical%20Management%20of%20Early%20Pregnancy%20Loss%20and%20Incomplete%20Early%20Pregnancy%20Loss_CHART.pdf
- SOGC Guideline No. 408, gestational trophoblastic disease, 2021: https://rmtq.ca/en/guidelines/driving-lines/recommendations/
- ACEP clinical policy, early pregnancy, 2017: https://www.acep.org/patient-care/clinical-policies/early-pregnancy
- ACOG Practice Bulletins No. 193 (2018) and No. 200 (2018): https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss
- Doubilet 2013 NEJM: https://pubmed.ncbi.nlm.nih.gov/24106937/
- Barnhart 2016 Obstet Gynecol: https://pubmed.ncbi.nlm.nih.gov/27500326/ and Barnhart 2004 Obstet Gynecol: https://pubmed.ncbi.nlm.nih.gov/15516387/
- SMFM Consult Series #49, cesarean scar pregnancy, 2020, read in the full text: https://pubmed.ncbi.nlm.nih.gov/31972162/
- Jurkovic 1996 Ultrasound Obstet Gynecol, cervical pregnancy and the sliding sign
- Farren 2020 Am J Obstet Gynecol: https://www.ajog.org/article/S0002-9378(19)31369-9/abstract
- Tuuli 2011 Obstet Gynecol: https://pubmed.ncbi.nlm.nih.gov/21508763/
- Csapo 1973 Am J Obstet Gynecol: https://pubmed.ncbi.nlm.nih.gov/4688578/
- CMPA, Can a child provide consent?: https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2014/can-a-child-provide-consent
- Health Canada, Mifegymiso update, 2019: https://recalls-rappels.canada.ca/en/alert-recall/health-canada-approves-updates-mifegymiso-prescribing-information-ultrasound-no-longer
- Surviving Sepsis Campaign 2021, WPATH SOC 8 (2022), Supreme Court of Canada R v Morgentaler (1988), Rosen's 10th ed (2023).

## Things for reviewers to check

1. Rh references differ. SOGC 448 suggests no RhIG from 8 to 12 weeks but allows it for a risk-averse patient. SOGC 460 (2025) is reported to say none before 12 weeks, considered from 10 to 12 weeks. CBS (2018) still lists 120 mcg before 12 weeks. So every Rh key is at or after 12 weeks, is a weak D, sensitization or passive antibody question, or names SOGC 448 in the stem.
2. 18 q2 and 36: weak D type 1 needs no RhIG (SOGC 448 recommendation 3). 36 q3 rests on the CBS warning about passive anti-D and SOGC 448 recommendation 13. Neither source gives a titre cutoff that separates passive from immune anti-D. The explanation says only "usually a low titre".
3. 38 q2: SOGC 408 says offer anti-D to all Rh negative patients after molar evacuation. SOGC 448 says it is not needed only when a complete mole is certain. The key (300 mcg now, pathology pending) fits both.
4. 20: I did not read the WPATH SOC 8 text for the three claims: testosterone is not reliable contraception, it should be stopped in pregnancy, and a small speculum with trauma-informed consent. Please verify.
5. 37 q4: the SOGC 460 advice on terms ("miscarriage" or "early pregnancy loss" over "abortion" terms) and depression screening comes from a secondary summary. I could not open the full guideline.
6. 22 q4 cites R v Morgentaler (1988) for the statement that abortion is not a crime in Canada. I left out the 2019 repeal of section 287 because I could not confirm it.
7. 33 q2 (2 pads an hour for 2 hours) and 33 q3 (review at 1 to 2 weeks) are cited to ACOG 200 from memory of that bulletin.
8. 35 q3: progesterone "to about 10 weeks" after luteectomy at 7 weeks is standard practice. Csapo 1973 supports the need for replacement but not the exact duration.
9. 29 q2 is tagged shock key feature 3, and 22 q2 and q3 are tagged shock key feature 4. All three sit inside first trimester SAMPs.
10. 31 q3 (subchorionic hematoma) is tagged key feature 6 as discharge counselling, although the pregnancy has not failed.
