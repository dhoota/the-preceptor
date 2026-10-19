# Q500 writer report, batch s60 (pulmonary edema)

Writer: Preceptor. File: `src/samps/s60/pulmonary-edema.ts`. All items `reviewed: false`, `version: 1`.

## Items

5 SAMPs, ids pulmonary-edema-39 to pulmonary-edema-43. 20 questions: 19 single, 1 menu.

| Id | Scenario | Questions (key feature) |
|---|---|---|
| pulmonary-edema-39 | 4-month-old with heart failure labelled as bronchiolitis, anomalous coronary suspected | 4 (5, 5, 1, 2) |
| pulmonary-edema-40 | 8-year-old with post-streptococcal glomerulonephritis and pulmonary edema | 5 (1, 2, 3, 4, 3) |
| pulmonary-edema-41 | 78-year-old with reduced ejection fraction after diltiazem was added, Ottawa Heart Failure Risk Scale | 3 (2, 6, 6) |
| pulmonary-edema-42 | 74-year-old on home oxygen with COPD and heart failure, hypercapnic | 4 (5, 1, 1, 6) |
| pulmonary-edema-43 | 61-year-old with exertional dyspnea years after doxorubicin and trastuzumab | 4 (5, 5, 2, 6 menu) |

Single key positions (first to fifth): 3, 4, 4, 4, 4. The key is the longest option in 6 of 19 single questions.

## Key feature coverage

KF1 4, KF2 4, KF3 2, KF4 1, KF5 5, KF6 4. Every key feature is tested. Extra weight went to KF5, KF6 and KF1 as asked.

## Uniqueness

Checked against all 38 existing pulmonary edema SAMPs and the SAMPs in other topics that test pulmonary edema key features. New angles: infant heart failure in place of bronchiolitis, pediatric nephritic pulmonary edema, calculating the Ottawa score, a walk test on home oxygen, an oxygen target for hypercapnic overlap, age-specific NT-proBNP cut-offs and cancer therapy cardiotoxicity, and a CAEP-based ED discharge plan.

## Sources and verification

- Price JF. Congestive heart failure in children. Pediatr Rev. 2019. Full text read (hepatomegaly, cardiomegaly on radiograph, loop diuretics first line, coronary origins must be shown under 1 year). https://doi.org/10.1542/pir.2016-0168
- Ong LT. Acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022. Full text read through Europe PMC (PMC9521512). https://doi.org/10.5527/wjn.v11.i5.139
- Stiell IG et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025. Full text read through Europe PMC (PMC12484285): NT-proBNP cut-offs, calcium channel blockers avoided when ejection fraction is low, discharge diuretic, follow-up and laboratory checks within 7 days. https://doi.org/10.1007/s43678-025-00961-y
- Stiell IG et al. Validation of the Ottawa Heart Failure Risk Scale. Acad Emerg Med. 2017. Abstract read (PMID 27976497). Point values cross-checked on MDCalc and fpnotebook. https://doi.org/10.1111/acem.13141
- Stiell IG et al. The HEARTRISK6 Scale. JACC Adv. 2024. Full text read (PMC11313032): walk test at own pace for 3 minutes on room air or usual oxygen. https://doi.org/10.1016/j.jacadv.2024.100988
- Rochwerg B et al. ERS/ATS guidelines, noninvasive ventilation. Eur Respir J. 2017. Citation and DOI confirmed, already used in the bank. https://doi.org/10.1183/13993003.02426-2016
- O'Driscoll BR et al. BTS guideline for oxygen use. Thorax. 2017. Confirmed in Europe PMC (PMID 28507176). https://doi.org/10.1136/thoraxjnl-2016-209729
- Herrmann J et al. IC-OS consensus on cardiovascular toxicities of cancer therapies. Eur Heart J. 2022. Already used in the bank. https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/

## For the reviewers

- pulmonary-edema-39 q3 and pulmonary-edema-40 q1 key "IV furosemide" without a dose because the pediatric sources do not give one. Check this is acceptable.
- pulmonary-edema-41: thresholds differ slightly between Ottawa scale summaries (over 110 or at least 110). The case uses 116/minute on arrival and 102/minute on the walk so the score is 5 under either reading. Risk categories are not quoted, only the validation study's admission threshold of more than 1.
- pulmonary-edema-42 q3 keys 88 to 92% from the BTS guideline. The CAEP checklist's general heart failure target is above 90%, which overlaps.
- pulmonary-edema-43 q3: the claim that anthracycline cardiotoxicity can appear years later is standard teaching. Confirm the IC-OS statement is an adequate source for it.
