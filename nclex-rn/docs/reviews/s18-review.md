# Batch s18 adversarial review

Reviewer scope: all 50 items in part1.ts to part5.ts, the shared sources in common.ts, and the 2 items in extra.ts that index.ts does not import (rn-s18-91 and rn-s18-92). Both lenses were applied to every item. Every number was recomputed with a script. The extra items were also run through `itemProblems` from a temporary file that was deleted afterwards. Both now pass.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s18-91 (extra) | options, correct key text | Protamine sulfate was keyed as the antidote for magnesium toxicity. The antidote is calcium gluconate. | A | high |
| rn-s18-91 (extra) | rationale, distractor, sources | Rationale repeated the protamine error. Vitamin K strawman replaced with protamine as a distractor. Added Lehne as a drug source for the antidote. | A | high |
| rn-s18-92 (extra) | rationale | Rationale said "this client has asthma", which the stem never gives. It also did not explain the keyed statement first. Rewritten to trace to the stem. | B | high |
| rn-s18-38 | stem, rationale, key why, sources | Filgrastim was started to treat afebrile neutropenia. The 2026 ASCO update says a CSF should not be routinely used for afebrile neutropenia. Reworked as secondary prophylaxis after febrile neutropenia in cycle 1. Key unchanged. Source Smith 2015 replaced by Gyawali 2026, which superseded it. | A | high |
| rn-s18-47 | rationale | Said the trailing zero "can be missed". It is the decimal point that is missed. Also said U read as a four gives a tenfold error, which ISMP ties to reading U as a zero. | A | high |
| rn-s18-47 | option | "Morphine 2 mg IV every 4 hours as needed" gave no reason for use, so an incomplete PRN prescription was a defensible clarification. Added "for pain" and levelled the why. | A | medium |
| rn-s18-28 | token | "at the moment the infusion starts" had a false why (no new drug has entered yet). The level at that moment is a trough, so the token was also defensible. Replaced with "as soon as the infusion ends", with a true why. | A | high |
| rn-s18-28 | rationale | "within 30 minutes of 0800" could mean after the dose. Now "within 30 minutes before 0800". | B | medium |
| rn-s18-16 | rationale | Said nystagmus appeared, then an unsteady gait. The flow sheet shows both first on day 9. | B | high |
| rn-s18-37 | option why | "Tamoxifen rarely thins hair" is not supported. Hair thinning is a recognized endocrine therapy effect. Why now says it can occur but is not a danger sign. | A | medium |
| rn-s18-21 | cjmm | Stem asks which explanation fits best, which is analyze cues, not recognize cues. Changed to analyze. | B | medium |
| rn-s18-36 | sources | Neuss 2017 ASCO/ONS standards were superseded by the 2024 ASCO-ONS antineoplastic therapy standards (Siegel et al.). | A | high |
| rn-s18-05, rn-s18-06, rn-s18-22, rn-s18-23 | sources | GINA 2024 update is stale. GINA 2026 was released in May 2026. Content checked against the 2026 highlights and still holds. | A | high |
| rn-s18-07 | sources | TJC National Patient Safety Goals 2025 were replaced for hospitals by the National Performance Goals effective January 2026. The two-identifier rule and the room number exclusion carry over. | A | high |
| rn-s18-29 | sources | DHHS adult antiretroviral guideline year updated from 2024 to 2026 (last updated May 2026). Abacavir hypersensitivity advice unchanged. | A | medium |

Checked and left as written: every calculation (rn-s18-01, 09, 15, 24, 25, 32, 44, 49), every distractor arithmetic claim, every temperature and SI pair, the creatinine pair and ratio in rn-s18-43, urine output of 0.42 mL/kg/hour in rn-s18-43, and the phenytoin rise of 2.4 times in rn-s18-16.

## Key changes

- rn-s18-91 (extra.ts, not yet in the bank). Before: option 1 "Protamine sulfate" keyed. After: option 1 "Calcium gluconate" keyed. The key index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin. Arjan must approve.

## Sources verified

- AAAAI and ACAAI omalizumab Joint Task Force, Cox 2007, JACI 120(6):1373. Observation 2 hours after the first 3 doses and 30 minutes after later doses. https://pubmed.ncbi.nlm.nih.gov/17996286/
- Glauser 2016, Epilepsy Currents 16(1):48. https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48
- Woolf 2007, Clinical Toxicology 45(3):203. https://pubmed.ncbi.nlm.nih.gov/17453872/
- Rosenberg 2015, Orphanet J Rare Dis 10:93. https://pubmed.ncbi.nlm.nih.gov/26238698/
- Narayanaswami 2021, Neurology 96(3):114. https://www.neurology.org/doi/10.1212/WNL.0000000000011124
- Hoh 2023 AHA/ASA aneurysmal SAH guideline, Stroke 54(7):e314. Enteral nimodipine. https://www.ahajournals.org/doi/10.1161/STR.0000000000000436
- Ailani 2021 AHS consensus, Headache 61(7):1021. https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.14153
- ASAM alcohol withdrawal guideline 2020, J Addict Med 14(3S):1. https://pubmed.ncbi.nlm.nih.gov/32511109/
- Schneider 2021 ASCO irAE update, JCO 39(36):4073. Grade 3 colitis: hold drug and give steroids. https://ascopubs.org/doi/10.1200/JCO.21.01440
- Gyawali 2026 WBC Growth Factors ASCO update, JCO 44(9):812. No routine CSF for afebrile neutropenia. https://pubmed.ncbi.nlm.nih.gov/41740078/ and https://www.guidelinecentral.com/insights/mar-2026-asco-whitebloodcellgrowthfactors-guideline-spotlight/
- Siegel 2024 ASCO-ONS antineoplastic therapy administration safety standards, JCO Oncology Practice. https://ascopubs.org/doi/10.1200/OP.24.00216
- Rybak 2020 vancomycin consensus, Am J Health Syst Pharm 77(11):835. https://pubmed.ncbi.nlm.nih.gov/32191793/
- ONS Chemotherapy and Immunotherapy Guidelines, 2nd edition, 2023. https://www.ons.org/books/chemotherapy-and-immunotherapy-guidelines-and-recommendations-practice
- Jungquist 2020 ASPMN monitoring guideline, Pain Manag Nurs 21(1):7. https://pubmed.ncbi.nlm.nih.gov/31377031/
- ASA and ASRA neuraxial opioid guideline 2016, Anesthesiology 124(3):535. Delayed respiratory depression up to 24 hours. https://pubmed.ncbi.nlm.nih.gov/26655725/
- CDC Influenza Antiviral Medications: Summary for Clinicians, updated March 2026. About 1 day shorter illness, less nausea with food. https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html
- GINA 2026 Strategy Report. https://ginasthma.org/2026-gina-strategy-report/
- The Joint Commission National Performance Goals, effective January 2026. https://www.jointcommission.org/en-us/standards/national-performance-goals
- DHHS adult and adolescent antiretroviral guidelines. https://clinicalinfo.hiv.gov/sites/g/files/mnhszr391/files/guidelines/documents/adult-adolescent-arv/guidelines-adult-adolescent-arv.pdf
- ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations, 2021. https://online.ecri.org/hubfs/ISMP/Resources/ISMP_ErrorProneAbbreviation_List.pdf
- SOGC Guideline No. 426, Magee 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/

Textbooks (Lehne 11th edition 2022, Hinkle 15th edition 2022, Potter 11th edition) were accepted as current fundamentals references. ISMP High-Alert 2024, ADA and APA 2004 and Fiore 2008 were accepted as the current documents of their kind.

## Needs Arjan's decision

- The key change on rn-s18-91 above.
- rn-s18-38 was reworked to secondary prophylaxis. Please confirm the new scenario.
- rn-s18-12 says haloperidol does not treat withdrawal. ASAM allows antipsychotics as an adjunct for agitation or hallucinations that benzodiazepines do not control. The key is safe. The why could be softened to "does not treat the withdrawal itself" if preferred.
- CDC_OPIOID is declared in common.ts but no item uses it. Harmless.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 15 items had defects, with 15 fixes in the table above and 1 key change (rn-s18-91, an extra item). No bank key changed. BATCH=s18 bank tests pass (61 of 61) and tsc reports no errors in the batch.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
