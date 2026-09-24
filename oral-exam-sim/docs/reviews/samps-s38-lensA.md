# Batch s38 review, Lens A (clinical truth)

Lens: A, clinical truth. Scope: every file in `src/samps/s38/`, including `review-extra.ts`. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s38` prints nothing. `SAMP_BATCH=s38 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 456 of 456.

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| first-trimester-bleeding-19 | q2 | update, prompt, options, key, explanation | The hemoglobin lag question repeated the teaching point and near wording of shock-17 q3 in s50. Rebuilt as a compensated shock question after tissue removal | high |
| first-trimester-bleeding-19 | q3 | update | Update repeated the tissue removal now given in the new q2 | high |
| first-trimester-bleeding-25 | q2 | update, prompt, options, key, explanation, key feature | The POCUS question copied shock-17 q2 in s50 almost word for word. Rebuilt as the next step after a positive POCUS, with glucagon for a therapeutic beta blocker as the new distractor | high |
| first-trimester-bleeding-25 | q3 | update | Ultrasound findings moved into the new q2 update | high |
| first-trimester-bleeding-38 | q3 | update, prompt, options, key, explanation | Contraception during molar follow-up repeated the s10 teaching in first-trimester-bleeding-11 q4. Rebuilt to test the SOGC 408 hCG schedule after a complete mole | medium |
| first-trimester-bleeding-28 | q3 | explanation | Farren 2020 reports 29% meeting post-traumatic stress criteria at 1 month, not "about 28%" | high |
| first-trimester-bleeding-20 | q4 | explanation | Final sentence on where a pregnancy implants matched no option. Two distractors (condoms, reliable after 1 year) had no reason | high |
| first-trimester-bleeding-31 | q2 | explanation | "120 mcg is an option in the first 12 weeks" misstates SOGC 448, which suggests no RhIG from 8 to 12 weeks. Now says SOGC names 300 mcg after 12 weeks | medium |
| first-trimester-bleeding-37 | q3 | explanation | Same 120 mcg misstatement. Kleihauer Betke and repeat screen distractors had no reason | medium |
| first-trimester-bleeding-18 | q1 | explanation | "Pedunculated" was not in the stem | low |
| first-trimester-bleeding-18 | q3 | explanation | "Progesterone is considered only for bleeding with a prior miscarriage" overstated. Reworded to fit the evidence and her cervical source | low |
| first-trimester-bleeding-22 | q4 | explanation | Added the 2019 repeal of Criminal Code section 287 (S.C. 2019, c. 25, s. 111), confirmed, which the writer left out | low |
| first-trimester-bleeding-26 | q3 | source, sources | The 7% sensitization figure (7.2% within 6 months) comes from the SOGC 448 introduction, not CBS. Recited to sogc-rh | medium |
| first-trimester-bleeding-39 (review-extra) | q1 | key | Keyed "Early partial molar pregnancy" (index 1). Its own explanation and SAMP 23 key "Suspicious but not diagnostic of failure". Key set to 4 | high |
| first-trimester-bleeding-40 (review-extra) | q2 | explanation | Invented sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this". There is no blood gas in the stem and lactate has no bearing on RhIG. Removed. Same 120 mcg fix as SAMP 31 | high |

## Key changes

- first-trimester-bleeding-19 q2: before, index 0 "Lags behind acute blood loss". After, index 1 "Compensated shock with ongoing loss". The question was rebuilt to remove a repeat of s50 shock-17 q3.
- first-trimester-bleeding-25 q2: before, index 3 "Point of care abdominal ultrasound". After, index 0 "Emergency gynecology for the operating room". Rebuilt to remove a near copy of s50 shock-17 q2. The key feature changed from 2 to 1. Key feature 2 is still tested by 9 other questions.
- first-trimester-bleeding-38 q3: before, index 2 "Reliable contraception during hCG follow-up". After, index 3 "Weekly to 3 normal results, then monthly for 6 months". Rebuilt to remove a repeat of s10 first-trimester-bleeding-11 q4. Contraception is still named in the explanation.
- first-trimester-bleeding-39 (review-extra) q1: before, index 1 "Early partial molar pregnancy". After, index 4 "Suspicious but not diagnostic of failure". The old key was clinically wrong.

## Checked and found correct

- hCG arithmetic. 1200 to 1460 IU/L is a 21.7% rise, below the 49% minimum for a start under 1500 in Barnhart 2016. 2400 to 1300 IU/L is a 45.8% fall, faster than the 21 to 35% 2 day minimum in Barnhart 2004. 2100 to 2350 IU/L is an 11.9% rise, and the rule is a fall of at least 15% from day 4 to day 7 (ACOG 193). The 60 to 84% 7 day fall matches Barnhart 2004.
- Discriminatory zone. first-trimester-bleeding-20 q3 correctly says no hCG value excludes ectopic and rupture occurs below 3500 IU/L.
- Methotrexate. 50 mg/m2 IM single dose. Candidacy in SAMP 21 (2.4 cm, hCG 2100) is appropriate. The NSAID warning and separation pain are correct. Every methotrexate distractor is rejected for a true reason (unstable, not located, interstitial with high hCG, intrauterine).
- Rh immune globulin, checked against the SOGC 448 recommendations read in full. Weak D types 1 to 3 need none (rec 3). None before 8 weeks and suggest none from 8 to 12 weeks (recs 8, 9). 300 mcg after 12 weeks, including molar pregnancy unless a complete mole is certain (rec 10). Within 72 hours (rec 7). Quantitative FMH testing after 20 weeks (rec 6). Serial FMH and passive anti-D testing for recurrent events (rec 13). The keys of 18 q2, 26 q1, 31 q2, 36 q3, 37 q3 and 38 q2 hold under SOGC 448, SOGC 408 and SOGC 460.
- PUL management in 17, 27, 28 and 34 fits SOGC 414: serial hCG with named follow-up and no methotrexate before diagnosis.
- Doubilet 2013 thresholds in 23 and 37. SMFM #49 statements in 24. Tuuli 2011 figures in 31 (8.9% to 17.6%). SOGC 460 misoprostol 600 to 800 mcg for an incomplete loss with no sac in 33. The complete mole hCG schedule and contraception in SOGC 408.

## Sources verified

- SOGC Guideline No. 448, 2024. Full recommendations read: https://sfhc.mcmaster.ca/wp-content/uploads/2025/02/Guidelines-for-WinRho.pdf
- SOGC Guideline No. 414, 2021 (abstract, Europe PMC, PMID 33453378): https://pubmed.ncbi.nlm.nih.gov/33453378/
- SOGC Guideline No. 460, 2025 (abstract, PMID 40349974). Also the SOGC medical management chart: https://sogc.org/common/Uploaded%20files/HUB%20Pages/pregnancy-loss/Medical%20Management%20of%20Early%20Pregnancy%20Loss%20and%20Incomplete%20Early%20Pregnancy%20Loss_CHART.pdf. The terms and depression screening are confirmed only through a secondary summary: https://www.thereviewcourse.com/post/guideline-alert-pregnancy-loss
- SOGC Guideline No. 408, 2021. Recommendations reproduced by RMTQ: https://rmtq.ca/en/guidelines/driving-lines/recommendations/
- Barnhart 2016 (PMID 27500326), Barnhart 2004 (PMID 15516387), Doubilet 2013 (PMID 24106937), Tuuli 2011 (PMID 21508763), SMFM #49 2020 (PMID 31972162), Jurkovic 1996 (PMID 9014275), Csapo 1973 (PMID 4688578). All confirmed on Europe PMC.
- Farren 2020, Am J Obstet Gynecol, PMID 31953115. Figure corrected to 29%.
- Criminal Code section 287 repealed by S.C. 2019, c. 25, s. 111: https://laws-lois.justice.gc.ca/eng/acts/C-46/section-287.html
- WPATH SOC 8, 2022. Testosterone is not reliable contraception and is contraindicated in pregnancy (search summary of the reproductive health chapter): https://www.tandfonline.com/doi/full/10.1080/26895269.2022.2100644
- CMPA, Health Canada Mifegymiso and CBS chapter 12 URLs resolve (HTTP 200). The ACEP policy page blocks automated fetch (HTTP 403). The citation is real (Ann Emerg Med 2017).

## Needs physician decision

1. first-trimester-bleeding-19. The scenario (10 weeks, a live intrauterine pregnancy on an earlier scan, heavy bleeding with clots and strong cramps) and the q1 and q3 teaching (remove tissue from the os, then uterine aspiration) repeat s10 first-trimester-bleeding-07. q2 is now new. Decide whether to rebuild the whole case.
2. first-trimester-bleeding-25 q1. The point that metoprolol blunts tachycardia in hemorrhage repeats s50 shock-32. The ruptured ectopic scenario also overlaps s50 shock-17 and s10 first-trimester-bleeding-01. The new q2 glucagon angle is distinct. Decide whether q1 should stay.
3. first-trimester-bleeding-38 q2. RhIG after molar evacuation is also an accepted answer in s10 first-trimester-bleeding-11 q4. The s38 version adds the pending pathology and partial versus complete mole reasoning, so I left it.
4. review-extra.ts. first-trimester-bleeding-39 is a verbatim copy of first-trimester-bleeding-23, and first-trimester-bleeding-40 is a verbatim copy of first-trimester-bleeding-31. Both fail the duplicate stem rule and must not be added to the batch. Their clinical errors are fixed anyway.
5. first-trimester-bleeding-17 q3. The key is "same day early pregnancy clinic review" for a stable PUL with a slow rise. Many sites would repeat the hCG in 48 hours with gynecology follow-up. That option is absent, so the key holds, but local practice varies.
6. first-trimester-bleeding-35 q3. Progesterone "to about 10 weeks" after luteectomy at 7 weeks is standard practice. Csapo 1973 supports replacement but not the exact duration.
7. first-trimester-bleeding-36 q2. No source gives a titre cutoff that separates passive from immune anti-D. The explanation says "usually a low titre", which is fair.
8. first-trimester-bleeding-37 q4. SOGC 460 wording on terms and depression screening was confirmed only through a secondary summary.

## Summary

- 15 fixes across 11 SAMPs, 4 of them in review-extra.ts or its copies.
- By category: 3 question rebuilds for overlap with the bank (19 q2, 25 q2, 38 q3), 2 planted defects in review-extra (wrong key in 39, invented lactate in 40), 3 guideline misstatements (31, 37 and 40 on 120 mcg), 1 wrong figure (28 q3), 1 unexplained and orphan distractor reasoning (20 q4), 1 missing distractor reasons (37 q3), 1 source misattribution (26 q3), and 3 low confidence wording fixes (18 q1, 18 q3, 22 q4).
- 4 key changes: 19 q2, 25 q2 and 38 q3 (rebuilds) and review-extra 39 q1 (wrong key).
- No keyed answer in the main file was clinically wrong. Every hCG threshold, the methotrexate protocol and every Rh key match current SOGC guidance.
- SAMP ids with a defect: first-trimester-bleeding-18, first-trimester-bleeding-19, first-trimester-bleeding-20, first-trimester-bleeding-22, first-trimester-bleeding-25, first-trimester-bleeding-26, first-trimester-bleeding-28, first-trimester-bleeding-31, first-trimester-bleeding-37, first-trimester-bleeding-38, first-trimester-bleeding-39, first-trimester-bleeding-40.
