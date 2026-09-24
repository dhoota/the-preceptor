# Lens A review: batch s31, critical appraisal

Lens: A, clinical and methodological truth. Every file in `src/samps/s31/` was read, including `review-extra.ts`. Every number in every explanation was recomputed. A script was used for the Fisher exact p values, the fragility index, the Wilson interval and the exact zero numerator limit.

This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s31` gives no output.
- `SAMP_BATCH=s31 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes, 506 of 506.
- The tests do not load `review-extra.ts`. Its two SAMPs were checked by hand.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| critical-appraisal-30 | q3 | update, explanation | The update called an as-treated analysis (grouped by whether a block was received) a per-protocol analysis. Per-protocol excludes nonadherent patients. The explanation also said per-protocol "moves" patients. Update now defines a per-protocol analysis that excludes crossovers, and the explanation is rebuilt around it. | high |
| critical-appraisal-34 | q3 | options, key, explanation | Keyed "fever of 38.2°C" and "costovertebral angle tenderness" as separate findings that support antibiotics. Under the Loeb criteria neither alone qualifies. Only acute dysuria alone, or fever with a urinary sign, does. Options rebuilt as "Fever of 38.2°C with flank tenderness", "Fever of 38.2°C with new urgency" and "New onset of dysuria" (keyed), with a new distractor "Fever of 38.2°C with new cough" in place of "Reduced oral intake". Explanation rewritten. | high |
| critical-appraisal-33 | q4 | explanation, source | The enoxaparin key rested only on the fictional trial and the Users' Guides. Added a real source (NICE NG89) that supports considering LMWH during lower limb immobilization when VTE risk outweighs bleeding risk, and cited it for q4. No Canadian guideline on cast thromboprophylaxis was found. | medium |
| critical-appraisal-32 | all | source citation | The CPS bronchiolitis statement was cited as 2014 only. The CPS page shows it was updated in 2021. Citation now reads 2014, updated 2021. | medium |
| critical-appraisal-28 | q2 | explanation | Said the higher cutoff likelihood ratios "do not apply" to a result of 0.6 ng/mL. His result is negative at those cutoffs too. The true reason is that they discard the information that it is below 1.0 ng/mL. Reworded. | medium |
| critical-appraisal-18 | q4 | explanation | Said values of 1% to 5% come from the uncorrected sensitivity. The uncorrected LR of 0.05 gives about 4%, not 1%. Reworded with the correct figure. | medium |
| critical-appraisal-26 | q4 | explanation | Correct that PECARN (under 2) includes a non-frontal scalp hematoma. It left out that his fall of about 1 metre also meets the PECARN severe mechanism (fall above 0.9 m). Added. | low |
| critical-appraisal-26 | q1 | explanation | Cited "his GCS of 15", which the stem never gives. Now ties the GCS range to "alert and playful". | low |
| critical-appraisal-22 | q1 | explanation | "So the effect is real" overstates what an interval excluding zero shows in an industry-funded trial. Now "chance is an unlikely explanation". | low |
| critical-appraisal-29 | q2 | explanation | The reason given for rejecting "Indeterminate certainty" did not follow logically. Now states plainly that it is not a GRADE level and lists the four levels. | low |
| critical-appraisal-36 | q2 | explanation | Called a paired comparison "the most valid way" to compare two tests. That is an overclaim. Reworded. | low |
| critical-appraisal-36 | q4 | explanation | The 72% distractor had no reason. Added. | low |
| critical-appraisal-37 (review-extra) | q1 | correct | Keyed index 3 ("55"). The explanation and arithmetic give 5 (index 1). Key corrected to "5". | high |
| critical-appraisal-38 (review-extra) | q2 | explanation | Sentence claiming "the serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is an invented fact with no place in the case. Removed. | high |
| critical-appraisal-38 (review-extra) | q3 | update, explanation | Same as-treated versus per-protocol error as critical-appraisal-30 q3. Same fix. | high |

## Key changes

- critical-appraisal-34 q3. Before: costovertebral angle tenderness, fever of 38.2°C, new onset of dysuria. After: fever of 38.2°C with flank tenderness, fever of 38.2°C with new urgency, new onset of dysuria. Reason: under the Loeb minimum criteria fever qualifies only with a urinary sign, and a urinary sign other than dysuria only with fever.
- critical-appraisal-37 q1 (review-extra). Before: "55". After: "5". Reason: NNT is 1 divided by 0.217, or 4.6, rounded up to 5. The explanation already said so.

## Items checked and found correct

- critical-appraisal-33 q4. With a real source added, the key holds. The Cochrane review (Zee 2017) found LMWH reduces VTE in lower leg immobilization with rare major bleeding. NICE NG89 supports LMWH when VTE risk outweighs bleeding risk. The individual NNT of 21 against an NNH of 250 supports it. Rivaroxaban 20 mg is a treatment dose, and a stocking cannot go under the cast. Note that ACCP 2012 suggests no prophylaxis for isolated lower leg injury in general. That guidance does not address prior VTE. See physician items.
- critical-appraisal-26 q4. Kuppermann 2009 lists occipital, parietal or temporal scalp hematoma as a predictor in children under 2. The key is correct.
- critical-appraisal-29 q2. "Indeterminate certainty" is not a GRADE level, and the explanation now says so plainly. Very low certainty is correct with four serious concerns.
- critical-appraisal-23 q2 (and its copy critical-appraisal-37). Fisher exact p for 46 of 60 against 33 of 60 is 0.020. Moving 1 saline patient gives 0.033, and moving 2 gives 0.051, so the fragility index is 2. If the 4 lost gel patients had all failed, p would be 0.062. The explanation is correct. It matches Walsh 2014, including the comparison of the index with the number lost to follow-up.
- critical-appraisal-20 q3. Design effect 1 plus 199 times 0.02 is 4.98. Effective sample size is 2 400 divided by 4.98, or 482. Correct. The claims that cluster trials need more patients and that ignoring clustering narrows the interval without biasing the point estimate are correct.
- critical-appraisal-16 q1. The exact one-sided 95% upper limit for 0 of 600 is 0.498%. The rule of three gives 0.5%. Correct.
- critical-appraisal-26 q2. Wilson 95% interval for 120 of 124 is 92.0% to 98.7%. Correct.
- Every other NNT, NNH, likelihood ratio, predictive value, odds ratio, relative risk, observed to expected ratio and post-test probability in the batch was recomputed and matched.
- Real trial results. None is quoted. Every study in the batch is labelled fictional. Real sources are cited only for methods and for guideline statements.

## Overlap with the bank

| SAMP id | Overlaps with | What repeats | Confidence |
|---|---|---|---|
| critical-appraisal-37 | critical-appraisal-23 | Identical stem, title and questions. A duplicate that would fail the near duplicate stem test if merged. Do not add. | high |
| critical-appraisal-38 | critical-appraisal-30 | Identical stem, title and questions. Same problem. Do not add. | high |
| critical-appraisal-27 | s07 critical-appraisal-09 | Diagnostic case-control (two-gate) design with healthy controls, and spectrum bias that inflates accuracy. That is the teaching point of s07 SAMP 09 q1 and q2. SAMP 27 adds PPV at low prevalence. | medium |
| critical-appraisal-22 | s07 critical-appraisal-02 | Statistically significant pain difference below the MCID in a large trial, with even the upper limit below the MCID. That repeats s07 SAMP 02 q4. | medium |
| critical-appraisal-19 | s07 critical-appraisal-07 | ITT bias toward no difference in a noninferiority trial, and the need for both analyses to agree. That repeats s07 SAMP 07 q3. SAMP 19 adds a discordant per-protocol interval. | medium |
| critical-appraisal-34 | s07 loc.ts (88-year-old long-term care resident, "? UTI", pyuria as asymptomatic bacteriuria) and s08 delirium-agitation.ts (new oxybutynin as the cause of delirium in an older woman with Alzheimer disease) | Scenario and two teaching points (q2 and q4). The LR calculation in q1 is new. | medium |
| critical-appraisal-20 | s07 critical-appraisal-02 | Older adult with hip fracture and a delirium outcome. The teaching (cluster design) differs. | low |
| critical-appraisal-21 | s34 delirium-agitation.ts | Slow benzodiazepine taper in an older adult (q4). The teaching of q1 to q3 is new. | low |

These were flagged, not rewritten. The appraisal teaching in each batch SAMP is at least partly new.

## Sources verified

- Guyatt, Rennie, Meade, Cook. Users' Guides. 3rd edition. 2015. Publisher page as cited.
- Bossuyt et al. STARD 2015. BMJ 2015. https://doi.org/10.1136/bmj.h5527 (Crossref)
- Hopewell et al. CONSORT 2025. BMJ 2025. https://pubmed.ncbi.nlm.nih.gov/40228833/
- Piaggio et al. Noninferiority extension. JAMA 2012. https://doi.org/10.1001/jama.2012.87802 (Crossref)
- Campbell et al. Cluster extension. BMJ 2012. https://doi.org/10.1136/bmj.e5661 (Crossref)
- Hemming et al. Stepped wedge extension. BMJ 2018. https://pubmed.ncbi.nlm.nih.gov/30413417/
- Guyatt et al. GRADE. BMJ 2008. https://doi.org/10.1136/bmj.39489.470347.AD (Crossref)
- Stiell, Wells. Methodologic standards for decision rules. Ann Emerg Med 1999. https://doi.org/10.1016/s0196-0644(99)70309-4 (Crossref)
- McGinn et al. Users' guides XXII. JAMA 2000. https://pubmed.ncbi.nlm.nih.gov/10872017/
- Hanley, Lippman-Hand. Zero numerators. JAMA 1983. https://pubmed.ncbi.nlm.nih.gov/6827763/
- Pauker, Kassirer. Threshold approach. NEJM 1980. https://pubmed.ncbi.nlm.nih.gov/7366635/
- Walsh et al. Fragility index. J Clin Epidemiol 2014. https://doi.org/10.1016/j.jclinepi.2013.10.019 (Crossref)
- Collins et al. TRIPOD. BMJ 2015. https://pubmed.ncbi.nlm.nih.gov/25569120/
- von Elm et al. STROBE. Lancet 2007. https://doi.org/10.1016/S0140-6736(07)61602-X (Crossref)
- AGS Beers Criteria 2023. J Am Geriatr Soc 2023. https://doi.org/10.1111/jgs.18372 (Crossref)
- Evans et al. Surviving Sepsis Campaign 2021. https://pubmed.ncbi.nlm.nih.gov/34599691/
- Kuppermann et al. PECARN. Lancet 2009. https://doi.org/10.1016/S0140-6736(09)61558-0 (Crossref). Predictors under 2 confirmed at https://pecarn.org/studyDatasets/documents/Kuppermann_2009_The-Lancet_000.pdf
- Stevens et al. IDSA skin and soft tissue guideline 2014. https://doi.org/10.1093/cid/ciu296 (Crossref)
- Friedman, Rieder, Walton. CPS bronchiolitis. 2014, updated 2021. https://cps.ca/en/documents/position/bronchiolitis. Confirms salbutamol and corticosteroids are not recommended, oxygen below 90%, and prematurity under 35 weeks and age under 3 months as high-risk groups.
- Loeb et al. Minimum criteria. Infect Control Hosp Epidemiol 2001. https://pubmed.ncbi.nlm.nih.gov/11232875/. UTI criteria text confirmed at https://primarycarenotebook.com/pages/urology/loeb-minimum-criteria-for-diagnosis-of-urinary-tract-infection-uti-in-a-resident-of-long-term-care-facility-residential-home
- Trottier et al. CPS procedural pain. 2019. https://pubmed.ncbi.nlm.nih.gov/31844394/
- Added: NICE NG89. 2018, updated 2019. https://www.nice.org.uk/guidance/ng89
- Consulted, not cited: Zee AA et al. Cochrane review of LMWH in lower limb immobilization. 2017. https://pubmed.ncbi.nlm.nih.gov/28780771/

## Needs physician decision

- critical-appraisal-33 q4. Cast thromboprophylaxis has no Canadian guideline, and guidance is split. NICE supports risk-based LMWH. ACCP 2012 suggests no routine prophylaxis for isolated lower leg injury. The key holds for a patient with prior VTE, but please confirm.
- critical-appraisal-37 and critical-appraisal-38 (review-extra). Exact copies of critical-appraisal-23 and critical-appraisal-30 with planted errors. The errors are fixed, but both should be dropped, not added.
- Overlap flags above for critical-appraisal-27, 22, 19 and 34. Decide whether to rewrite them or accept them.
- critical-appraisal-28 q4 cites a US guideline (IDSA 2014) for surgical exploration. No Canadian equivalent was found.

## Summary

- Batch SAMPs read: 21, plus 2 in review-extra.
- Fixes: 15 in total. Method errors: 2 (critical-appraisal-30 q3, critical-appraisal-38 q3). Guideline misapplication and key change: 1 (critical-appraisal-34 q3). Wrong key: 1 (critical-appraisal-37 q1). Invented fact: 1 (critical-appraisal-38 q2). Sourcing: 2 (critical-appraisal-33, critical-appraisal-32). False or imprecise distractor reasons and overclaims: 8.
- Key changes: 2.
- Overlap flags: 8.
- SAMPs with a defect: critical-appraisal-18, 19, 20, 21, 22, 26, 27, 28, 29, 30, 32, 33, 34, 36, 37, 38.
