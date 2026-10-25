# Batch s36 Canada pass

Canada pass on batch s36 after the review. Only the `canada` field and `sources` were changed in this pass.

## Counts

- Notes written: 12 (rn-s36-02, 05, 12, 14, 16, 18, 22, 28, 29, 39, 46, 48)
- Left empty: 38. That includes the two items marked for pull (26, 45).

Nine notes give the SI reading of a lab value the item turns on. Three notes cite the Canadian Blood Services Clinical Guide to Transfusion. They cover albumin supply and dose after paracentesis, the frozen plasma dose of 10 to 15 mL/kg, and fibrinogen concentrate in place of cryoprecipitate.

Items with no material difference were left empty. These include the drug labels, the contrast and MRI items and the procedure care items. Item 13 already cites the BC Renal vein preservation guideline, which matches the key.

## Sources added

- CBS_ALBUMIN. Relke N, Callum J. Canadian Blood Services, Clinical Guide to Transfusion, Chapter: Albumin, 2025. https://professionaleducation.blood.ca/en/transfusion/clinical-guide/albumin (item 05)
- CBS_COMPONENTS. Rotin L, Mack J. Canadian Blood Services, Clinical Guide to Transfusion, Chapter: Blood Components, 2025. https://professionaleducation.blood.ca/en/transfusion/clinical-guide/blood-components (items 29, 39)

## Checks

`BATCH=s36 npx vitest run tests/bank.test.ts` passes 62 of 62.
