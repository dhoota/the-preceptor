# Batch s22 Canada notes

Batch s22 holds 50 stand-alone items in Physiological Adaptation. I edited only the files that index.ts imports (part1.ts to part5.ts) and left extra.ts alone. Stems, choices, keys and rationales are unchanged. The only changes are to `canada` fields and `sources` lists.

## Counts

- Notes written: 9
- Left empty: 41

## Notes written

- rn-s22-11: Glipizide is not sold in Canada. Diabetes Canada lists gliclazide, glimepiride and glyburide as the sulfonylureas in use, and defines hypoglycemia as a glucose below 4.0 mmol/L.
- rn-s22-20: The generic name in Canada is acetylsalicylic acid (ASA). Aspirin is a Bayer brand name there.
- rn-s22-24: HCO3 is reported in mmol/L and PaCO2 stays in mmHg. Adds the MCC bicarbonate range of 21 to 32 mmol/L.
- rn-s22-25: Albuterol is called salbutamol in Canada.
- rn-s22-33: Serum osmolality is reported in mmol/kg. Adds the MCC range of 275 to 295 mmol/kg.
- rn-s22-35: Platelets are reported as x 10^9/L (42 x 10^9/L). Adds the MCC range of 130 to 380 x 10^9/L.
- rn-s22-37: Albuterol is called salbutamol in Canada. The CPS advises against salbutamol in clear bronchiolitis and gives oxygen when SpO2 is below 90%.
- rn-s22-38: Potassium and sodium are reported in mmol/L, and creatinine only in micromol/L.
- rn-s22-49: HCO3 is reported in mmol/L and PaCO2 stays in mmHg. Adds the MCC bicarbonate range.

## Sources added

- Lipscombe L, Booth G, Butalia S, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee. Pharmacologic Glycemic Management of Type 2 Diabetes in Adults. Canadian Journal of Diabetes 42(Suppl 1):S88. 2018. Added to rn-s22-11. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-13
- Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104. 2018. Added to rn-s22-11. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- Health Canada. Drug Product Database. 2026. Added to rn-s22-20 and rn-s22-25. https://health-products.canada.ca/dpd-bdpp/
- Medical Council of Canada. Normal lab values reference list. 2020. Added to rn-s22-24, rn-s22-33, rn-s22-35, rn-s22-38 and rn-s22-49. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society. Bronchiolitis: Recommendations for diagnosis, monitoring and management of children one to 24 months of age (updated 2021). 2014. Added to rn-s22-37. https://cps.ca/en/documents/position/bronchiolitis

## Other checks

- The Web search budget for this session was already used up, so I checked every claim with WebFetch or the Health Canada DPD API.
- DPD API: the ingredient searches for glipizide and albuterol found nothing. Gliclazide, salbutamol (91 products) and acetylsalicylic acid (344 products) all have entries. Nasal glucagon 3 mg (Baqsimi) is listed as marketed.
- Diabetes Canada chapter 13 lists the sulfonylureas in use as "Gliclazide, Gliclazide modified-release, Glimepiride, Glyburide". It notes that chlorpropamide and tolbutamide are still available but rarely used. Glipizide is not listed.
- Diabetes Canada chapter 14, as fetched: hypoglycemia below 4.0 mmol/L, treatment with 15 g carbohydrate and a retest after 15 minutes, and 1 mg glucagon SC or IM when there is no IV access. These match rn-s22-43 and rn-s22-48, so those items have no note.
- The Aspirin trademark in Canada was checked on Wikipedia. It says Aspirin remains a Bayer trademark there and the generic is sold as ASA.
- The CPS statement, as fetched: "a trial of salbutamol is not recommended" when the diagnosis is clear. Oxygen is given below 90% and used to keep SpO2 at 90% or higher. The statement was first posted in 2014 and updated in 2021 by Beck, McKenzie and Chauvin-Kimoff.
- MCC list (updated December 2020), as fetched: bicarbonate 21 to 32 mmol/L, arterial pCO2 32 to 45 mm Hg, osmolality 275 to 295 mmol/kg, platelets 130 to 380 x 10^9/L.

## Left empty on purpose

- Items that already show every lab value with its SI pair have no units-only note: 03, 07, 18, 31, 32, 39, 40, 42, 43 and 46. Lactate in 08 and 12 is already in mmol/L.
- rn-s22-31 has an aspirin distractor, but the item does not turn on the drug name. Its glucose is already paired with mmol/L, so there is no note. The Canadian stroke guidance was not checked this session.
- The rest cover assessment, priority and procedure content that is the same in Canada.

## Tests

`BATCH=s22 npx vitest run tests/bank.test.ts` passes, 61 of 61.
