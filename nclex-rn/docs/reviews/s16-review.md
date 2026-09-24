# Review of batch s16

Scope: part1.ts to part5.ts (rn-s16-01 to rn-s16-50), common.ts and extra.ts (rn-s16-91 and rn-s16-92, which index.ts does not import). This report replaces the earlier s16 review. The files changed after that review. extra.ts now holds two different draft items. Every item and every why was read again in its current state. Both lenses were applied to all 52 items.

Numbers were recomputed with a script. Calc items: 1.5 tablets, 3 mL/hour, 0.5 mL, 0.84 mL, 4.5 mL, 7.2 mL/hour and 30 mL. Distractor values: 0.05 mL/minute, 20 mL/hour, 1.5 mL as three times the dose, 53.3 mL as 40 x 20 / 15, 60 mL as 80 mEq. Temperature pairs: 40.1, 38.3, 38.2, 39.4, 37.4 and 38.0°C. Creatinine pairs: 212, 88, 97, 141 and 194 micromol/L. Glucose 198 mg/dL is 11.0 mmol/L. The sodium rise in rn-s16-18 is 13 mEq/L in 12 hours. The creatinine in rn-s16-39 doubles. All were correct.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s16-91 | options[2] text and why | Two options gave the same action. "Elevate the bed head 30 degrees" repeated the key "Raise the head of the bed", and its why said so. The item had two defensible keys. Replaced with "Dilute the formula with water", a peer action that does not lower aspiration risk. | A | high |
| rn-s16-92 | options[1] why | Said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. The resin acts over hours. It is rejected because it does not protect the heart first. | A | high |
| rn-s16-36 | spans[0] why | Called a BP of 124/78 mmHg a normal baseline. Under the 2025 AHA/ACC guideline a systolic of 120 to 129 mmHg with a diastolic under 80 mmHg is elevated BP. Now says it is the baseline reading for comparison. | A | medium |
| rn-s16-44 | rationale | Said both drugs are on the list of drugs older adults should avoid. The 2023 Beers Criteria list diphenhydramine to avoid, but oxybutynin sits in the strong anticholinergic table and is avoided in delirium. Now says the Beers Criteria list both as strong anticholinergics to avoid in delirium. | A | medium |

No other item had a defect. Keys, distractor reasons, drug facts, doses and Canada notes were checked for all 50 bank items. rn-s16-01 to 35, 37 to 43 and 45 to 50 needed no change.

## Key changes

None. The key of every item, including both extra items, is unchanged.

## Sources verified

- Medical Council of Canada, List of normal lab values, updated December 2020. Creatinine 22 to 75 micromol/L (female) and 49 to 93 micromol/L (male), bicarbonate 21 to 32 mmol/L, sodium 136 to 146 mmol/L, leukocytes 3.5 to 10.5 x 10^9/L. These match the Canada notes in rn-s16-02, 04, 14, 16 and 18. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Prabhakaran S et al. 2026 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. BP above 185/110 mmHg bars thrombolysis. https://pubmed.ncbi.nlm.nih.gov/41582814/ and https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
- Heart and Stroke Foundation. Canadian Stroke Best Practice Recommendations, Acute Stroke Management, 7th edition, 2022. Adds tenecteplase as an alternative to alteplase. https://pubmed.ncbi.nlm.nih.gov/36529857/
- Clarke G, Hannon J. Canadian Blood Services Clinical Guide to Transfusion, HDFN and perinatal immune thrombocytopenia chapter, 2018. Postpartum dose 120 mcg or 300 mcg within 72 hours, up to 28 days if missed. https://professionaleducation.blood.ca/en/transfusion/clinical-guide/hemolytic-disease-fetus-and-newborn-and-perinatal-immune
- Wood E, Bright J, Hsu K et al. Canadian guideline for high-risk drinking and alcohol use disorder. CMAJ 2023 195(40):E1364. https://www.cmaj.ca/content/195/40/E1364
- ISMP Canada Safety Bulletin 2019 19(1). Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. https://ismpcanada.ca/bulletin/preventable-tragedies-two-pediatric-deaths-due-to-intravenous-administration-of-concentrated-electrolytes/
- Health Canada Drug Product Database. Pyridium (phenazopyridine) 100 mg tablets, prescription only, adult dose 2 tablets three times daily. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=4388 and https://pdf.hres.ca/dpd_pm/00011122.PDF
- American Geriatrics Society 2023 Beers Criteria. Oxybutynin in Table 7 (strong anticholinergics), anticholinergics avoided in delirium (Table 3), first-generation antihistamines avoided (Table 2). https://pubmed.ncbi.nlm.nih.gov/37139824/
- 2025 AHA/ACC High Blood Pressure Guideline. Elevated BP is 120 to 129 mmHg systolic and under 80 mmHg diastolic. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356
- The remaining sources in common.ts were confirmed with PubMed or publisher pages in the earlier s16 review and are unchanged: ADA Standards of Care 2026 (https://pubmed.ncbi.nlm.nih.gov/41358900/), hyperglycemic crises consensus 2024 (https://pubmed.ncbi.nlm.nih.gov/39052901/), SVT guideline (https://pubmed.ncbi.nlm.nih.gov/26399663/), AF guideline (https://pubmed.ncbi.nlm.nih.gov/38033089/), hyponatraemia guideline (https://pubmed.ncbi.nlm.nih.gov/24569125/), C. difficile update (https://pubmed.ncbi.nlm.nih.gov/34164674/), ATA 2016 (https://pubmed.ncbi.nlm.nih.gov/27521067/), APA AUD (https://pubmed.ncbi.nlm.nih.gov/29301420/), ACR gout (https://pubmed.ncbi.nlm.nih.gov/32391934/), MG guidance (https://pubmed.ncbi.nlm.nih.gov/33144515/), AAP ADHD (https://pubmed.ncbi.nlm.nih.gov/31570648/), ASPEN enteral (https://pubmed.ncbi.nlm.nih.gov/27815525/), INS 2024 (https://pubmed.ncbi.nlm.nih.gov/38211609/), ACOG CO 767 (https://pubmed.ncbi.nlm.nih.gov/30575639/), ACOG PB 181 (https://pubmed.ncbi.nlm.nih.gov/28742673/).

## Needs Arjan's decision

- rn-s16-91 and rn-s16-92 (extra.ts): both now pass every item gate and have no near duplicate. Decide whether either joins the bank. rn-s16-91 is thin at difficulty 2 and its rationale is near the 150 character floor.
- rn-s16-12 Canada note: the 2026 AHA/ASA guideline also endorses tenecteplase in the 4.5 hour window. The note no longer marks a Canadian difference. Consider setting it to an empty string.
- rn-s16-11: ketorolac 15 mg IM is half the usual adult IM dose. It is not unsafe. Carried over from the earlier review.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 4 fixes in 4 items, all Lens A. 2 fixes are in extra.ts items that index.ts does not import. 0 key changes. All numbers were recomputed and matched. The batch passes tsc and all 61 tests in tests/bank.test.ts. A mid-review run failed the whole-bank near duplicate check on items outside s16 (rn-s14-50, rn-s22-23, rn-c01, rn-c02, rn-c04). The final run passed.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
