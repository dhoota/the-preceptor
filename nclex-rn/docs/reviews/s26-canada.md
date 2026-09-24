# Batch s26 Canada pass

Scope: the 50 items in part1 to part5 imported by `src/bank/s26/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 11
- Left empty: 39
- `BATCH=s26 npx vitest run tests/bank.test.ts`: 61 of 61 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s26-05 | Calcium in mmol/L and albumin in g/L. SI correction adds 0.02 mmol/L per g/L below 40, giving 2.22 mmol/L |
| rn-s26-13 | Employer duties come from provincial or territorial OHS acts, not a federal standard. Varies by province |
| rn-s26-17 | WHMIS is aligned with the GHS and uses the same health hazard pictogram |
| rn-s26-18 | Diabetes Canada thresholds match. Its prediabetes ranges are narrower (FPG 6.1 to 6.9 mmol/L, A1C 6.0% to 6.4%). Key stands |
| rn-s26-22 | Platelets reported as × 10^9/L. 245 to 98 × 10^9/L is still a fall of more than 50 percent |
| rn-s26-28 | Digoxin in nmol/L. 2.6 ng/mL is about 3.3 nmol/L against a UHN therapeutic range of 0.6 to 1.2 nmol/L |
| rn-s26-36 | Urea in mmol/L instead of BUN. MCC range 2.1 to 8.0 mmol/L |
| rn-s26-42 | Diabetes Canada adds dextrose at 14.0 mmol/L and holds insulin below a potassium of 3.3 mmol/L. Key stands |
| rn-s26-43 | Specimen handling duties come from provincial or territorial OHS acts. Varies by province |
| rn-s26-45 | Diabetes Canada HHS: glucose typically 34.0 mmol/L or more, osmolality above 320 mOsm/kg. The client meets both |
| rn-s26-47 | Sodium and potassium in mmol/L with the same numbers, WBC as 11.8 × 10^9/L. Key stands |

## Sources added

- Medical Council of Canada, List of normal lab values, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (05, 22, 36, 47)
- Canadian Centre for Occupational Health and Safety, Health and Safety Legislation in Canada: Introduction, 2022. https://www.ccohs.ca/oshanswers/legisl/intro.html (13, 43)
- Canadian Centre for Occupational Health and Safety, WHMIS: Pictograms, 2026. https://www.ccohs.ca/oshanswers/chemicals/whmis_ghs/pictograms.html (17)
- Punthakee Z, Goldenberg R, Katz P. Diabetes Canada, Definition, Classification and Diagnosis of Diabetes, Prediabetes and Metabolic Syndrome, Can J Diabetes 42(Suppl 1):S10, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-3 (18)
- Goguen J, Gilbert J. Diabetes Canada, Hyperglycemic Emergencies in Adults, Can J Diabetes 42(Suppl 1):S109, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15 (42, 45)
- University Health Network Laboratory Medicine Program, Lab Dictionary: Digoxin, 2026. https://forms.uhn.ca/LabDictionary/Public/View?lid=36 (28)

## How the claims were checked

- Lab units: the MCC list gives platelets as 130 to 380 × 10^9/L, WBC as 3.5 to 10.5 × 10^9/L, urea as 2.1 to 8.0 mmol/L, calcium in mmol/L, albumin in g/L and sodium and potassium in mmol/L.
- Corrected calcium: 0.8 mg/dL per g/dL of albumin equals 0.02 mmol/L per g/L. 1.9 plus 0.02 times 16 gives 2.22 mmol/L, which matches the keyed option.
- Digoxin: the UHN Lab Dictionary lists a therapeutic range of 0.6 to 1.2 nmol/L and a toxic range above 3.5 nmol/L. The factor of 1.28 nmol/L per ng/mL turns 2.6 ng/mL into about 3.3 nmol/L.
- OHS law: CCOHS says each province and territory has its own act that covers most workplaces. Canada Labour Code Part II covers only about 6% of workers in federal sectors such as banks and airlines.
- WHMIS: the CCOHS page says Canada has aligned WHMIS with the GHS. The health hazard pictogram covers carcinogenicity, reproductive toxicity and respiratory sensitization.
- Diabetes Canada chapter 3 gives FPG 7.0 mmol/L, 2hPG 11.1 mmol/L and A1C 6.5% for diabetes, and IFG 6.1 to 6.9 mmol/L and A1C 6.0% to 6.4% for prediabetes. The A1C 6.1% and FPG 6.2 mmol/L options stay in prediabetes.
- Diabetes Canada chapter 15 adds dextrose when glucose reaches 14.0 mmol/L, holds insulin when potassium is below 3.3 mmol/L and gives HHS glucose as typically 34.0 mmol/L or more with osmolality above 320 mOsm/kg.

## Left empty, with the reason

These 39 items have no verified material Canadian difference: 01, 02, 03, 04, 06, 07, 08, 09, 10, 11, 12, 14, 15, 16, 19, 20, 21, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 44, 46, 48, 49 and 50.

- Items 09, 12, 15, 31, 34, 38 and 40 already show SI units for the values that decide the key.
- The Canadian Immunization Guide (revised February 25, 2026) matches 11 and 46. Known responders need no HBIg or vaccine after exposure, and workers below 10 IU/L get a second full series and a retest.
- Lipase in units/L (07) and TSH in mIU/L (25) use the same units in Canada.
- Item 49 does not name a federal standard in its stem, so it has no note.
