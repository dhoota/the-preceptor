# Writer report: batch s31, critical appraisal

## Scope

- 21 SAMPs, ids critical-appraisal-16 to critical-appraisal-36.
- Files: `src/samps/s31/critical-appraisal.ts` (exports `CRITICAL_APPRAISAL_S31`) and `src/samps/s31/index.ts` (exports `SAMPS_S31`).
- Every study, rule, biomarker and number is fictional and labelled as such in the stem. No real trial's results are used as case data.
- All SAMPs ship with `reviewed: false`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s31` gives no output.
- `SAMP_BATCH=s31 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes, 506 of 506 tests.

## Question mix

- 88 questions. 82 single and 6 menu. Every SAMP has 4 or 5 questions.
- Menus are in SAMPs 24, 26, 29, 32, 34 and 35 (select 2, 3 or 4).
- Key positions across the 82 singles, first to fifth: 15, 15, 19, 16, 17. The highest is 23%.
- The key is the single longest option in 19 of 82 singles (23%).
- Stems run 101 to 141 words.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Study design, strengths and weaknesses | 17 |
| 2. Calculate sensitivity, specificity, LRs, NNT, NNH | 26 |
| 3. Use statistics to justify decisions and practice change | 9 |
| 4. Clinical importance, applicability, support for conclusions | 21 |
| 5. Integrate evidence into care of one patient | 15 |

## Teaching points by SAMP

They were chosen to avoid the s07 set (POCUS appendicitis, block trial NNT, older adult fall rule, meta-analysis heterogeneity, case-control OR, DVT LR, dexamethasone noninferiority, sepsis chart review, marker Q spectrum, early stopping, influenza individual NNT, troponin NPV, kappa, underpowered trial, PICO).

- 16. Zero numerator and the rule of three. What a single-group cohort can answer. A pathway applied above its age range.
- 17. Banded (interval) likelihood ratios. Conditional dependence when chaining LRs. Rural transfer decision.
- 18. Partial verification bias, with corrected sensitivity and post-test probability.
- 19. Noninferiority. Intention to treat against per-protocol, and discordant intervals against the margin.
- 20. Cluster randomization, contamination, design effect and effective sample size, and an analysis that ignores clustering.
- 21. Cohort relative risk against odds ratio with a common outcome. NNH. Confounding. Deprescribing.
- 22. Statistical against clinical significance (MCID). Responder NNT. Multiple secondary outcomes.
- 23. Fragility index against loss to follow-up. Detection bias in an open label trial.
- 24. Uncontrolled before-after study. Cointervention, coding change, secular trend. Stepped-wedge design.
- 25. Testing threshold. Post-test probabilities at low pretest. Spectrum effect on sensitivity.
- 26. An adult rule applied to a toddler. Wilson CI for sensitivity. Derivation against validation.
- 27. Diagnostic case-control (two-gate) design. PPV at low prevalence. Spectrum bias in controls.
- 28. Negative LR at a cutoff. Post-test probability with high pretest. Meaning of AUC.
- 29. GRADE domains and the certainty rating. Shared decisions with very low certainty evidence.
- 30. Hazard ratio interval crossing 1. Per-protocol bias after crossover. Adopting for a proven secondary benefit.
- 31. Discrimination against calibration. Observed to expected ratio. Case mix shift.
- 32. Explanatory against pragmatic trial. Applicability to a premature young infant.
- 33. NNT against NNH. Individual NNT from baseline risk.
- 34. Low LR+ of pyuria in long-term care. Asymptomatic bacteriuria. Drug cause of delirium.
- 35. Quasi-randomization (allocation by date). Unblinded subjective outcome. Concealed randomization.
- 36. Paired comparison of two tests. Operator dependence. Post-test probability after positive POCUS.

## Rounding

- Probabilities to the nearest whole percent unless stated (for example 0.5%, 0.8%).
- NNT and NNH rounded up to the next whole number, and the explanation shows the unrounded value.
- Likelihood ratios to one or two decimals as shown in each explanation.
- Every figure was recomputed with a Python script before writing, including a hand-coded two-sided Fisher exact test for the fragility index in SAMP 23 and a Wilson interval in SAMP 26.

## Sources, with verification URLs

- Guyatt G, Rennie D, Meade MO, Cook DJ. Users' Guides to the Medical Literature. 3rd edition. 2015. https://jamaevidence.mhmedical.com/content.aspx?bookid=847&sectionid=69030714
- Bossuyt PM, et al. STARD 2015. BMJ 2015. https://doi.org/10.1136/bmj.h5527
- Hopewell S, Chan AW, Collins GS, et al. CONSORT 2025 statement. BMJ 2025. https://pubmed.ncbi.nlm.nih.gov/40228833/
- Piaggio G, et al. CONSORT extension for noninferiority and equivalence trials. JAMA 2012. https://doi.org/10.1001/jama.2012.87802
- Campbell MK, Piaggio G, Elbourne DR, Altman DG. CONSORT 2010 extension to cluster randomised trials. BMJ 2012. https://doi.org/10.1136/bmj.e5661
- Hemming K, Taljaard M, McKenzie JE, et al. CONSORT extension for stepped wedge cluster randomised trials. BMJ 2018. https://pubmed.ncbi.nlm.nih.gov/30413417/
- Guyatt GH, Oxman AD, Vist GE, et al. GRADE. BMJ 2008. https://doi.org/10.1136/bmj.39489.470347.AD
- Stiell IG, Wells GA. Methodologic standards for clinical decision rules. Ann Emerg Med 1999. https://doi.org/10.1016/s0196-0644(99)70309-4
- McGinn TG, Guyatt GH, Wyer PC, Naylor CD, Stiell IG, Richardson WS. Users' guides XXII, clinical decision rules. JAMA 2000. https://pubmed.ncbi.nlm.nih.gov/10872017/
- Hanley JA, Lippman-Hand A. Interpreting zero numerators. JAMA 1983. https://pubmed.ncbi.nlm.nih.gov/6827763/
- Pauker SG, Kassirer JP. The threshold approach to clinical decision making. NEJM 1980. https://pubmed.ncbi.nlm.nih.gov/7366635/
- Walsh M, Srinathan SK, McAuley DF, et al. Fragility Index. J Clin Epidemiol 2014. https://doi.org/10.1016/j.jclinepi.2013.10.019
- Collins GS, Reitsma JB, Altman DG, Moons KGM. TRIPOD. BMJ 2015. https://pubmed.ncbi.nlm.nih.gov/25569120/
- von Elm E, et al. STROBE. Lancet 2007. https://doi.org/10.1016/S0140-6736(07)61602-X
- American Geriatrics Society. 2023 updated AGS Beers Criteria. J Am Geriatr Soc 2023. https://doi.org/10.1111/jgs.18372
- Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign 2021. Intensive Care Med 2021. https://pubmed.ncbi.nlm.nih.gov/34599691/
- Kuppermann N, Holmes JF, Dayan PS, et al. PECARN head injury rules. Lancet 2009. https://doi.org/10.1016/S0140-6736(09)61558-0
- Stevens DL, Bisno AL, Chambers HF, et al. IDSA skin and soft tissue infection guideline. Clin Infect Dis 2014. https://academic.oup.com/cid/article/59/2/e10/2895845
- Friedman JN, Rieder MJ, Walton JM. CPS bronchiolitis statement. Paediatr Child Health 2014. https://cps.ca/en/documents/position/bronchiolitis
- Loeb M, Bentley DW, Bradley S, et al. Minimum criteria for antibiotics in long-term care. Infect Control Hosp Epidemiol 2001. https://pubmed.ncbi.nlm.nih.gov/11232875/
- Trottier ED, Dore-Bergeron MJ, Chauvin-Kimoff L, Baerg K, Ali S. CPS statement on procedural pain and distress. Paediatr Child Health 2019. https://pubmed.ncbi.nlm.nih.gov/31844394/

The citation, authors and year of each source were confirmed by web search. The Beers 2023 DOI was not opened directly.

## For the reviewers

- Minimal important differences (13 mm on a 100 mm scale in SAMP 22, 1.3 points on a 10 point scale in SAMP 30) are given as case facts in the stem or an update. They follow commonly cited values.
- SAMP 20 q5: the claim that routine antipsychotics are not supported for delirium without severe distress rests on the Beers 2023 statement.
- SAMP 26 q4: the key names a validated pediatric rule for children under 2 (PECARN) and states that a non-frontal scalp hematoma is one of its predictors. Please check this against Kuppermann 2009.
- SAMP 28 q4 cites the IDSA 2014 guideline (US) for surgical exploration in suspected necrotizing infection. I found no Canadian equivalent.
- SAMP 33 q4 keys enoxaparin 40 mg SC daily as the prophylactic regimen. The key rests on the fictional trial and the computed NNT and NNH. No Canadian guideline is cited for cast thromboprophylaxis.
- SAMP 34 q3 keys three findings (costovertebral angle tenderness, fever of 38.2°C, new dysuria) as supporting antibiotics under the Loeb criteria. Under Loeb, fever counts only together with a localizing sign. The prompt asks which findings would support treatment, not which alone would meet the criteria.
- SAMP 36 q5 does not ask about a chest tube before air transfer, to stay off contested ground. It keys managing the patient as having a pneumothorax.
- SAMP 29 q2 uses "Indeterminate certainty" as a distractor. It is not a GRADE level, and the explanation says so.
- SAMP 19 is an improving cellulitis case. The key (oral step-down with review in 48 hours) rests on the fictional trial and the patient's poor IV access.
- SAMP 24 q2 keys "Secular trends in sepsis care" together with the two cointerventions stated in the stem.
- I used CONSORT 2025, the current version, rather than CONSORT 2010 for the general trial reporting points.
