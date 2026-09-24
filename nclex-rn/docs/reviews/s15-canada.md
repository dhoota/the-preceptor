# Batch s15 Canada notes

Batch s15 holds 50 items in Pharmacological and Parenteral Therapies. Only the files that index.ts imports were edited. extra.ts was left alone.

## Counts

- Notes written: 12
- Left empty: 38

## Notes written

- rn-s15-13: Canadian Blood Services supplies blood outside Quebec and publishes the Canadian transfusion guidance.
- rn-s15-15: Lithium in mmol/L with the Medical Council of Canada adult range.
- rn-s15-16: Potassium chloride ordered in mmol. Accreditation Canada bars concentrated potassium from client care areas.
- rn-s15-19: Creatinine in micromol/L and gentamicin levels in mg/L.
- rn-s15-23: No hydrocodone and acetaminophen product in Canada. Health Canada caps prescription combinations at 325 mg per unit, and the adult daily maximum is 4000 mg.
- rn-s15-24: Canadian clozapine registry enrolment and a blood count before each supply is dispensed.
- rn-s15-32: TB is reportable in every province and territory, and TB drugs are free.
- rn-s15-34: Potassium in mmol/L with the Medical Council of Canada range.
- rn-s15-37: Diabetes Canada threshold of 4.0 mmol/L and the 15 g and 15 minute rule.
- rn-s15-38: Platelets as x 10^9/L and hemoglobin in g/L.
- rn-s15-44: Digoxin in nmol/L and potassium in mmol/L.
- rn-s15-50: Ammonia in micromol/L with the Medical Council of Canada reference value.

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s15-15, 19, 34, 38, 44 and 50. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Laureano M, Khandelwal A, Yan M. Canadian Blood Services. Transfusion Reactions. In: Clinical Guide to Transfusion. 2022. Added to rn-s15-13. https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
- Institute for Safe Medication Practices Canada. Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1). 2019. Added to rn-s15-16. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2019-i1-ConcentratedElectrolytes.pdf
- Health Canada. Notice: Limiting the Strength of Acetaminophen to 325 mg per Dosage Unit in Prescription Combination Products. 2016. Added to rn-s15-23. https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/announcements/notice-limiting-strength-acetaminophen-325-dosage-unit-prescription-combination-products.html
- Alberta College of Pharmacy. Reminders: Clozapine therapy requirements. 2026. Added to rn-s15-24. https://abpharmacy.ca/news/reminders-clozapine-therapy-requirements/
- Johnston JC, Cooper R, Menzies D. Canadian Thoracic Society. Treatment of Tuberculosis Disease. Chapter 5 of the Canadian Tuberculosis Standards, 8th edition. 2022. Added to rn-s15-32. https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/treatment-tuberculosis-disease.html
- Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104. 2018. Added to rn-s15-37. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14

## Other checks

- The lack of any marketed hydrocodone and acetaminophen product was checked in the Health Canada Drug Product Database. Every hydrocodone product listed is a single-ingredient, cough or ibuprofen product, and all but one are cancelled or dormant.
- TB reportability was checked against the Public Health Agency of Canada surveillance pages and the Tuberculosis in Canada 1924 to 2012 review. https://pmc.ncbi.nlm.nih.gov/articles/PMC5864445/
- Digoxin reporting in nmol/L was checked against Canadian hospital and university sources, including the London Health Sciences Centre and University of Calgary pages.
- Gentamicin reporting in mg/L was checked against a Canadian hospital dosing handbook. https://iddocs.ca/handbook/3-aminoglycoside-amg-dosing-guidelines.html
- Amoxicillin 400 mg per 5 mL suspension is sold in Canada, so rn-s15-07 has no note.

## Left empty on purpose

- rn-s15-08 is left empty. SOGC Guideline No. 426 (2022) may use a 1 g/hour magnesium maintenance dose, but its full text could not be reached to confirm it. This one should get a follow-up check.
- The other empty items use drugs, units and steps that are the same in Canada.

## Tests

BATCH=s15 npx vitest run tests/bank.test.ts passes, 61 of 61.
