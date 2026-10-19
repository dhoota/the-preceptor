# Q500 writer report, batch s71 (critical appraisal)

File: `src/samps/s71/critical-appraisal.ts` (`CRITICAL_APPRAISAL_S71`). All items have `reviewed: false`, `version: 1` and `author: "Preceptor"`. Every study, device, drug, test and number is fictional.

## Ids and question mix

| Id | Title | Questions | Key features |
|---|---|---|---|
| critical-appraisal-37 | A reading at the fingertip | 4 single | q1 KF4, q2 KF2, q3 KF3, q4 KF4 |
| critical-appraisal-38 | A prescription filled later | 4 single | q1 KF2, q2 KF2, q3 KF4, q4 KF1 |
| critical-appraisal-39 | A strip on joint fluid | 1 menu (select 2), 4 single | q1 KF1, q2 KF2, q3 KF2, q4 KF2, q5 KF5 |

There are 13 questions: 12 single and 1 menu.

Key positions for the 12 single questions (first to fifth): 2, 3, 3, 3, 1. No position goes above 25%. The key is never the strictly longest option.

## Key feature coverage

- KF1 (design strengths and weaknesses): 2 (38 q4, 39 q1)
- KF2 (calculate the statistics): 6 (37 q2, 38 q1, 38 q2, 39 q2, 39 q3, 39 q4)
- KF3 (use the statistics to justify a decision): 1 (37 q3)
- KF4 (clinical importance, applicability and whether the results support the conclusions): 3 (37 q1, 37 q4, 38 q3)
- KF5 (apply the evidence to one patient): 1 (39 q5)

## How uniqueness was checked

- I read the whole catalogue (`scratchpad/q500/catalog/critical-appraisal.md`, critical-appraisal-01 to 36) and listed every design, bias, statistic and keyed decision it holds. The new items avoid all of them:
  - kappa
  - partial and differential verification bias
  - spectrum bias from case-control sampling
  - zero numerators
  - cluster and stepped-wedge designs
  - non-inferiority
  - the fragility index
  - GRADE
  - calibration
  - per protocol against intention to treat
  - conditional dependence
  - interval likelihood ratios
  - "await a larger trial", "keep the order set" and shared decision keys
- The new concepts are:
  - Bland-Altman agreement and why correlation misleads
  - using the limits of agreement in a transfusion decision
  - immortal time bias
  - a negative control outcome
  - incorporation bias
  - spectrum inflation from excluding crystal arthritis
  - a decision about adult septic arthritis
- I grepped `src/samps` and `src/cases` for: immortal, negative control, Bland, limits of agreement, correlation coefficient, incorporation, leukocyte esterase, reagent strip, fingertip, synovial, septic arthritis, angiography after arrest. Incorporation bias appears only as a distractor in critical-appraisal-18. No keyed adult knee septic arthritis decision exists. I dropped a post-arrest angiography idea because batch01 and s42 already key it.
- None of the keyed numbers is a key elsewhere in the topic:
  - upper limit 27 g/L
  - RRR 60%
  - NNT 12
  - specificity 85%
  - LR minus 0.15
  - post-test probability 9%
- The bank-wide near-duplicate stem test passes.

## Recomputed numbers

critical-appraisal-37:
- The 95% limits of agreement are 5 plus or minus 1.96 x 11. Since 1.96 x 11 is 21.6, the limits run from 5 minus 21.6 (about 17 below) to 5 plus 21.6, which is 26.6 (about 27 above). With 2 SD the limits are 5 plus or minus 22, so the answer is the same.
- Distractors:
  - 22 is 1.96 SD with no bias
  - 16 is 5 plus 1 SD
  - 6 is 5 plus 1.96 x 11 divided by the square root of 250 (0.70), which is 6.4
  - 38 is 5 plus 3 SD
- A monitor reading of 92 g/L fits a laboratory value from 92 minus 27, which is 65 g/L, to 92 plus 17, which is 109 g/L. That range crosses the Barkun threshold of 80 g/L. Subtracting the 5 g/L bias gives 87 g/L.

critical-appraisal-38:
- Risk is 60/1 000, or 6.0%, in users and 450/3 000, or 15.0%, in non-users.
- RR is 0.40, and RRR is 60%.
- ARR is 9.0 percentage points. NNT is 1 divided by 0.09, which is 11.1, rounded up to 12.
- OR is (60/940) divided by (450/2 550), which is 0.0638 divided by 0.1765, or 0.36. One minus the OR is 64%.
- Distractors:
  - 7 is 1 divided by 0.15
  - 17 is 1 divided by 0.06
  - 15 and 40 read a percentage as a count

critical-appraisal-39:
- Disease is present in 64 patients, with 56 true positives and 8 false negatives. Of the 256 without disease, 218 are true negatives and 38 are false positives.
- Sensitivity is 87.5%, and specificity is 218/256, or 85.2%.
- PPV is 56/94, or 59.6%. NPV is 218/226, or 96.5%. Dividing 218 by 320 gives 68.1%.
- LR minus is 0.125 divided by 0.852, which is 0.147. LR plus is 0.875 divided by 0.148, which is 5.9 (not asked).
- Distractors:
  - 0.13 is 1 minus sensitivity
  - 0.84 is 0.125 divided by 0.148
  - 0.04 is 8 divided by 226, which is 0.035
  - 0.03 is 8 divided by 320, which is 0.025
- A pretest probability of 40% gives odds of 0.667. Multiplying by 0.147 gives 0.098, which is a probability of 8.9%.

## Sources (opened to verify)

- Bland JM, Altman DG. Lancet 1986. https://doi.org/10.1016/S0140-6736(86)90837-8. I checked it against the Europe PMC record for PMID 2868172. The abstract says correlation coefficients are misleading for agreement.
- Barkun AN, et al. Annals of Internal Medicine 2019. https://doi.org/10.7326/M19-1795. In the Europe PMC record the abstract suggests a transfusion threshold below 80 g/L, with a higher threshold for cardiovascular disease.
- Laupacis A, Sackett DL, Roberts RS. NEJM 1988. https://doi.org/10.1056/NEJM198806303182605. I checked the Europe PMC record for PMID 3374545. It is the paper that introduced the NNT.
- Lipsitch M, Tchetgen Tchetgen E, Cohen T. Epidemiology 2010. https://doi.org/10.1097/EDE.0b013e3181d61eeb. In the Europe PMC record the abstract covers outcome controls for detecting noncausal associations.
- Suissa S. American Journal of Epidemiology 2008. https://doi.org/10.1093/aje/kwm324. I checked the Europe PMC record and the OUP abstract. The abstract says immortal time produced implausibly large drug benefits.
- Kohn MA, Carpenter CR, Newman TB. Academic Emergency Medicine 2013. https://doi.org/10.1111/acem.12255. In the Europe PMC record the abstract groups incorporation and spectrum bias and predicts their direction.
- Jaeschke R, Guyatt GH, Sackett DL. JAMA 1994. https://doi.org/10.1001/jama.271.9.703. I checked the Europe PMC record for PMID 8309035.
- Long B, Koyfman A, Gottlieb M. West J Emerg Med 2019. https://doi.org/10.5811/westjem.2018.10.40974. I read the full text at westjem.com/?p=15598. It covers:
  - IV antibiotics plus orthopedic consultation
  - "no role for intra-articular corticosteroids" in the ED
  - gout and pseudogout producing high synovial white cell counts

## Uncertain points for reviewers

1. Kohn 2013: I could read only the abstract. The full text is behind a paywall. The explanation says incorporation bias raises both sensitivity and specificity and that leaving out the hardest non-cases raises specificity. These are standard teaching, but I did not see them in the full text.
2. Bland and Altman 1986 used about 2 SD for the limits. The explanation gives 1.96 SD, often rounded to 2. Both give the 27 g/L key.
3. critical-appraisal-37 q2 maps the limits of agreement to KF2. The statistic is not one of the five named in that key feature. If reviewers prefer, it could be mapped to KF4, and the coverage would still be complete.
4. critical-appraisal-39 q5 keys IV antibiotics and orthopedics at an estimated 9% probability or more. The reason given is the fever, the inability to bear weight and the biased strip. Long 2019 does not give a probability threshold.
5. critical-appraisal-38 q3: deaths from injury could in theory be read as a safety outcome. The update states that drug T has no known way to prevent them, which makes "negative control" the only fit.
6. The q4 explanation in critical-appraisal-38 makes general claims about the distractor biases (lead time, recall, spectrum) that Suissa does not address directly.
