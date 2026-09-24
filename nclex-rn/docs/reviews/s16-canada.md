# Batch s16 Canada notes

Batch s16 holds 50 items in Pharmacological and Parenteral Therapies. Only the files that index.ts imports were edited. extra.ts was left alone. Only the canada field and sources were changed.

## Counts

- Notes written: 16
- Left empty: 34

## Notes written

- rn-s16-02: Creatinine in micromol/L with the Medical Council of Canada adult ranges.
- rn-s16-04: Glucose and bicarbonate in mmol/L with the Medical Council of Canada bicarbonate range.
- rn-s16-05: Salbutamol is the Canadian name for albuterol (Ventolin HFA, 100 mcg per dose).
- rn-s16-12: Canadian Stroke Best Practice Recommendations allow tenecteplase 0.25 mg/kg (maximum 25 mg) as a bolus in place of alteplase within 4.5 hours.
- rn-s16-14: WBC as x 10^9/L (2.1 x 10^9/L) with the Medical Council of Canada range.
- rn-s16-16: WBC as x 10^9/L (17 x 10^9/L) with the Medical Council of Canada range.
- rn-s16-18: Sodium in mmol/L with the Medical Council of Canada range.
- rn-s16-20: Canadian Blood Services distributes Rh immune globulin (WinRho) and gives 120 mcg or 300 mcg within 72 hours of birth.
- rn-s16-23: Phenytoin in micromol/L. The University Health Network lab lists 40 to 80 micromol/L, so 28 mcg/mL reads as about 111 micromol/L.
- rn-s16-27: Health Canada has not authorized sertraline under age 18. Canadian monographs carry a Serious Warnings box on self-harm with monitoring at all ages.
- rn-s16-28: Disulfiram is not marketed in Canada. The 2023 Canadian AUD guideline names naltrexone and acamprosate as first line.
- rn-s16-39: Creatinine in micromol/L and WBC as x 10^9/L.
- rn-s16-43: Canadian labels use a Serious Warnings and Precautions Box. Health Canada added serious neuropsychiatric events to the Singulair box in 2020. Albuterol is salbutamol.
- rn-s16-46: Nitrostat sublingual tablets are sold in Canada as 0.3 mg and 0.6 mg only. The 0.4 mg dose is sold as a pump spray.
- rn-s16-49: Potassium ordered and labelled in mmol. 1 mEq equals 1 mmol for potassium, so the volume is unchanged.
- rn-s16-50: Phenazopyridine is prescription only in Canada, and Pyridium 100 mg is the only marketed product.

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s16-02, 04, 14, 16, 18 and 39. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- GlaxoSmithKline Inc. Ventolin HFA (salbutamol) Product Monograph. 2025 (date of authorization 2025-08-22). Added to rn-s16-05. https://ca.gsk.com/media/tfxma1nn/ventolin-hfa.pdf
- Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition. 2022. Added to rn-s16-12. https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment
- Clarke G, Hannon J. Canadian Blood Services. Hemolytic Disease of the Fetus and Newborn and Perinatal Immune Thrombocytopenia. In: Clinical Guide to Transfusion. 2018. Added to rn-s16-20. https://professionaleducation.blood.ca/en/transfusion/clinical-guide/hemolytic-disease-fetus-and-newborn-and-perinatal-immune-thrombocytopenia
- Health Canada. Drug Product Database. 2026. Added to rn-s16-28, 46 and 50. https://health-products.canada.ca/dpd-bdpp/ (checked through the DPD API: every disulfiram product is Cancelled Post Market, and PYRIDIUM 100 mg, DIN 00476714, is the only phenazopyridine product with Marketed status. All are Prescription schedule. NITROSTAT is Marketed as 0.3 mg, DIN 00037613, and 0.6 mg, DIN 00037621, tablets. NITROLINGUAL PUMPSPRAY 0.4 mg per actuation, DIN 02231441, is Marketed.)
- Wood E, Bright J, Hsu K, et al. Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. CMAJ 195(40):E1364. 2023. Added to rn-s16-28. https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/
- Institute for Safe Medication Practices Canada. Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1). 2019. Added to rn-s16-49. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2019-i1-ConcentratedElectrolytes.pdf
- University Health Network Laboratory Medicine Program. Lab Dictionary: Phenytoin (Dilantin). 2026. Added to rn-s16-23. https://forms.uhn.ca/LabDictionary/Public/View?lid=74 (CHEO ED Outreach also lists 40 to 80 micromol/L. https://outreach.cheo.on.ca/manual/1391)
- Altamed Pharma. Sertraline Hydrochloride Capsules Product Monograph. 2024 (date of revision 2024-07-29). Added to rn-s16-27. https://pdf.hres.ca/dpd_pm/00076497.PDF (Health Canada's 2004 advisory on SSRIs and SNRIs for all ages was also read. https://www.canada.ca/en/news/archive/2004/06/health-canada-advises-canadians-stronger-warnings-ssris-other-newer-anti-depressants.html)
- Health Canada. Health Product InfoWatch, August 2020. 2020. Added to rn-s16-43. https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/health-product-infowatch/august-2020.html

## Other checks

- The existing notes were rechecked this pass. The Medical Council of Canada values, the Ventolin HFA DIN 02241497, the tenecteplase dose in the Canadian Stroke Best Practice Recommendations, the WinRho doses, the ISMP Canada mmol wording and the CMAJ first-line drugs all match their sources.
- Phentolamine mesylate injection (Sandoz, DIN 02243737) is Marketed in Canada, so rn-s16-35 has no note.

## Left empty on purpose

- The earlier follow-ups on rn-s16-23, 27 and 43 are now closed with notes.
- rn-s16-36 (IVIG): the Canadian Blood Services immune globulin chapter was read, but it does not state a nursing practice difference that could be confirmed.
- rn-s16-04: no Diabetes Canada sick day rule was added, because the 2024 pharmacologic chapter did not state one on the page that was reached. The note covers units only.
- The other empty items use drugs, units and steps that are the same in Canada.

## Tests

BATCH=s16 npx vitest run tests/bank.test.ts passes, 61 of 61, after this pass.
