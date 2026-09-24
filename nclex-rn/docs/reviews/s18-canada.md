# Batch s18 Canada notes

Batch s18 holds 50 items, mostly pharmacology. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources were written inline in each item. No stem, choice, key or rationale was changed.

## Counts

- Notes written: 9
- Left empty: 41

## Notes written

- rn-s18-06: Albuterol is salbutamol in Canada. Health Canada lists Ventolin HFA at 100 mcg per puff.
- rn-s18-08: SI units. The white cell count reads 2.1 x 10^9/L against the MCC range of 3.5 to 10.5 x 10^9/L. Sodium reads 127 mmol/L against 136 to 146 mmol/L.
- rn-s18-16: Phenytoin in micromol/L. UHN lists 40 to 80 micromol/L as therapeutic. The levels read about 48, 67, 91 and 115 micromol/L (factor 3.96).
- rn-s18-21: Theophylline in micromol/L. The Canadian Theo ER monograph converts 20 mg/L to 110 micromol/L. The level of 26 mcg/mL reads about 144 micromol/L (factor 5.55).
- rn-s18-23: Albuterol is salbutamol, and Health Canada lists salbutamol nebulizer solutions. Potassium reads 4.2 to 3.5 mmol/L.
- rn-s18-38: SI units. Neutrophils read 2.6 x 10^9/L against 0.4 x 10^9/L last cycle, and platelets read 180 x 10^9/L. MCC neutrophil range 2.0 to 7.5 x 10^9/L.
- rn-s18-42: Ontario's patch for patch law requires used fentanyl patches to go back to the pharmacy before new ones are dispensed. Folding and secure storage still apply.
- rn-s18-43: Ketorolac injection is authorized in Canada for IM use only, and no IV product is marketed. The Toradol IM monograph limits IM use to 2 days, IM plus oral use to 5 days and older adults to 60 mg a day. The key is unchanged.
- rn-s18-50: Nimotop 30 mg tablets are the only nimodipine marketed in Canada. The capsules and the IV form are cancelled, and no oral solution is sold. The nurse still asks the pharmacy, so the key is unchanged.

## Sources added

- Health Canada. Drug Product Database: Ventolin HFA (salbutamol), DIN 02241497. 2026. Added to rn-s18-06. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137 (status Marketed, checked with the DPD API)
- Medical Council of Canada. Normal Lab Values. 2020. Added to rn-s18-08 and 38. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- University Health Network Laboratory Medicine Program. Lab Dictionary: Phenytoin (Dilantin). 2026. Added to rn-s18-16. https://forms.uhn.ca/LabDictionary/Public/View?lid=74
- AA Pharma Inc. Theo ER (theophylline sustained release tablets) Product Monograph. 2010. Added to rn-s18-21. https://www.aapharma.ca/downloads/en/PIL/Theophylline_PM.pdf
- Health Canada. Drug Product Database: salbutamol inhalation solutions. 2026. Added to rn-s18-23. https://health-products.canada.ca/dpd-bdpp/ (Teva and PMS salbutamol nebulizer solutions and Ventolin Respirator Solution are marketed)
- Government of Ontario. Safeguarding our Communities Act (Patch for Patch Return Policy), 2015, S.O. 2015, c. 33. 2015. Added to rn-s18-42. https://www.ontario.ca/laws/statute/15s33 (consolidated from October 1, 2016, and still current)
- Atnahs Pharma UK Limited. Toradol IM (ketorolac tromethamine injection) Product Monograph. 2023. Added to rn-s18-43. https://pdf.hres.ca/dpd_pm/00070307.PDF (revised April 3, 2023)
- Health Canada. Drug Product Database: Nimotop (nimodipine) 30 mg tablets, DIN 02325926. 2026. Added to rn-s18-50. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=81127

## Left empty on purpose

- rn-s18-15: Levetiracetam oral solution 100 mg/mL is marketed in Canada (for example PDP-Levetiracetam and Mint-Levetiracetam).
- rn-s18-13: Oral naltrexone 50 mg is marketed in Canada (Revia and generics).
- rn-s18-14: Buspirone is marketed in Canada, though only as 10 mg tablets. The 7.5 mg dose does not change the teaching, so no note was written.
- Items 20, 38 and 43 already show potassium, hemoglobin or creatinine in SI units, so those values needed no conversion note.
- rn-s18-07 and 47: Accreditation Canada and ISMP Canada require the same two identifiers and the same do-not-use notation, so practice is the same.
- rn-s18-28: No level values appear in the item, so no unit note was needed.
- All other items cite drugs sold under the same names in Canada, or US guidance that Canadian practice matches for the point tested.

## Tests

BATCH=s18 npx vitest run tests/bank.test.ts: 61 of 61 pass.
