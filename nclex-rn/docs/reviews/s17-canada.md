# Batch s17 Canada notes

Batch s17 holds 50 stand-alone items in Pharmacological and Parenteral Therapies. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources are written inline in each item.

## Counts

- Notes written: 14
- Left empty: 36

## Notes written

- rn-s17-03: Diabetes Canada threshold of 4.0 mmol/L on insulin. Severity is graded by symptoms, not by level 1 or level 2. Glucose reads 2.9 mmol/L.
- rn-s17-07: Bicarbonate and lactate in mmol/L, with the Medical Council of Canada lactate range of 0.5 to 2.5 mmol/L.
- rn-s17-10: Potassium keeps the same numbers in mmol/L. Magnesium falls from 0.95 to 0.55 mmol/L, below the Medical Council of Canada range of 0.74 to 1.03 mmol/L.
- rn-s17-13: The Canadian Stroke Best Practice Recommendations use the same alteplase dose and allow tenecteplase 0.25 mg/kg (maximum 25 mg) as a single bolus within 4.5 hours.
- rn-s17-15: Octaplex and Beriplex P/N are the prothrombin complex concentrates available in Canada. NAC advises IV vitamin K given at the same time.
- rn-s17-16: Canadian monographs name aspirin acetylsalicylic acid (ASA). The Canadian Plavix monograph advises avoiding omeprazole and other moderate or strong CYP2C19 inhibitors.
- rn-s17-20: Glipizide is not sold in Canada. Diabetes Canada threshold of 4.0 mmol/L with 15 g of carbohydrate and a retest in 15 minutes.
- rn-s17-21: Glucose in mmol/L only. The SI values give the same 4 unit correction dose (6.7 divided by 1.7 is 3.94).
- rn-s17-23: Sodium in mmol/L with the Medical Council of Canada range of 136 to 146 mmol/L.
- rn-s17-26: Diabetes Canada in-hospital target of 5.0 to 8.0 mmol/L before meals. The supper value of 15.9 mmol/L is well above it.
- rn-s17-33: Ionized calcium in mmol/L with the Medical Council of Canada range of 1.14 to 1.28 mmol/L.
- rn-s17-37: Platelets as x 10^9/L (8 x 10^9/L) with the Medical Council of Canada range of 130 to 380 x 10^9/L.
- rn-s17-39: Phosphate falls from 1.10 to 0.45 mmol/L and magnesium from 0.90 to 0.60 mmol/L. Glucose reads 9.1 mmol/L. The percentage falls do not change.
- rn-s17-50: Diabetes Canada in-hospital targets of 5.0 to 8.0 mmol/L before meals and below 10.0 mmol/L at random. The glucose of 17.6 mmol/L is above both.

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s17-07, 10, 21, 23, 33, 37 and 39. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104. 2018. Added to rn-s17-03 and 20. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee. In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115. 2018. Added to rn-s17-26 and 50. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16
- Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition. 2022. Added to rn-s17-13. https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment
- National Advisory Committee on Blood and Blood Products. Recommendations for Use of Prothrombin Complex Concentrates in Canada. 2022 (last revised 1 February 2022). Added to rn-s17-15. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- sanofi-aventis Canada Inc. Plavix (clopidogrel bisulfate) Product Monograph. 2022 (date of revision 20 October 2022). Added to rn-s17-16. https://www.sanofi.com/assets/countries/canada/docs/products/prescription-products/plavix-en.pdf
- Health Canada. Drug Product Database. 2026. Added to rn-s17-20. https://health-products.canada.ca/dpd-bdpp/

No item has more than 4 sources.

## How the claims were checked

- MCC normal lab values (last updated December 2020), read with WebFetch: serum bicarbonate 21 to 32 mmol/L, lactate 0.5 to 2.5 mmol/L, magnesium 0.74 to 1.03 mmol/L, potassium 3.5 to 5.1 mmol/L, sodium 136 to 146 mmol/L, phosphate 0.81 to 1.58 mmol/L, ionized calcium 1.14 to 1.28 mmol/L and platelets 130 to 380 x 10^9/L.
- Diabetes Canada chapter 14, read with WebFetch: hypoglycemia is below 4.0 mmol/L on insulin or a secretagogue, severity is mild, moderate or severe by symptoms and need for help, and 15 g of carbohydrate is given with a retest in 15 minutes.
- Diabetes Canada chapter 16, read with WebFetch: preprandial targets of 5.0 to 8.0 mmol/L with random values below 10.0 mmol/L for most noncritically ill inpatients. The chapter also says added NPH did not improve outcomes in steroid hyperglycemia. That point was left out of the rn-s17-26 note, because it would soften the key.
- The CSBPR page (7th edition, 2022, with a 2025 thrombectomy update) gives alteplase 0.9 mg/kg to 90 mg with a 10% bolus, and tenecteplase 0.25 mg/kg to 25 mg as a single bolus within 4.5 hours.
- The NAC page names octaplex and Beriplex P/N as the two PCC products in Canada and says PCC and vitamin K are given at the same time.
- The Canadian Plavix monograph was read as text. It says to avoid strong or moderate CYP2C19 inhibitors with Plavix, names omeprazole, and uses "acetylsalicylic acid (ASA)" throughout.
- Health Canada Drug Product Database, checked through its API: no product lists glipizide as an ingredient. Sodium nitroprusside (4 products) and clonidine 0.2 mg tablets are Marketed. PMS-Digoxin 0.05 mg/mL oral solution (DIN 02242320) is Marketed, so rn-s17-30 has no note. Octaplex and Beriplex P/N are Marketed, and Kcentra is not listed.

## Left empty on purpose

- rn-s17-29: creatinine already appears as 80 micromol/L. The MCC female range tops out at 75 micromol/L, so a range note could mislead on an item that turns on an unchanged value.
- Transfusion items (06, 18, 31, 32, 34 to 36): hemoglobin already appears in g/L, and the steps, time limit and saline rule match Canadian Blood Services guidance. rn-s15-13 already carries the Canadian Blood Services systems note.
- The other empty items use drugs, doses, units and steps that are the same in Canada.

## Tests

`BATCH=s17 npx vitest run tests/bank.test.ts` passes, 61 of 61.
