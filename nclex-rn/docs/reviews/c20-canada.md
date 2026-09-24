# Batch c20 Canada notes

Batch c20 holds 5 case studies of 6 items each, 30 items in all. Only the files that index.ts imports were edited. extra.ts was left alone. Stems, choices, keys and rationales are unchanged.

## Counts

- Notes written: 9
- Left empty: 21

## Notes written

- rn-c20-1-2: SI units only, and Canadian labs report urea rather than BUN. Glucose 48.8 mmol/L and urea 18.6 mmol/L against the MCC urea range of 2.1 to 8.0 mmol/L.
- rn-c20-1-5: Diabetes Canada withholds insulin only while potassium is below 3.3 mmol/L. Her 4.6 mmol/L is above both thresholds, so the key stands.
- rn-c20-2-2: SI units only. Potassium 3.1 mmol/L, glucose 11.8 mmol/L and hemoglobin 131 g/L, with MCC ranges for potassium and female hemoglobin.
- rn-c20-2-5: ISMP Canada states potassium chloride in mmol. An Accreditation Canada Required Organizational Practice keeps concentrated potassium off the care units.
- rn-c20-3-1: A capable 16-year-old usually controls her health information, and consent laws vary by province. CNPS notes the limit when there is a risk of serious harm, such as suicide.
- rn-c20-3-2: SI units only. The acetaminophen level of 64 mcg/mL reads about 423 micromol/L, using the 6.614 factor from the US and Canada consensus. Glucose reads 3.8 mmol/L.
- rn-c20-4-4: The 2018 CRISM national guideline recommends starting buprenorphine-naloxone whenever feasible, with methadone for those who respond poorly.
- rn-c20-4-6: Health Canada says take-home naloxone kits are at most pharmacies without a prescription, and some provinces offer free kits.
- rn-c20-5-6: The Canadian Immunization Guide gives the same 2 dose series from age 50. It says RZV may be considered at least 1 year after a shingles episode.

## Sources added

- Medical Council of Canada. Normal lab values reference list. 2020. Added to rn-c20-1-2 and rn-c20-2-2. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109. 2018. Added to rn-c20-1-5. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- Institute for Safe Medication Practices Canada. Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1). 2019. Added to rn-c20-2-5. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2019-i1-ConcentratedElectrolytes.pdf
- Canadian Nurses Protective Society. InfoLAW: Balancing Privacy and Confidentiality in Youth Mental Health Care. 2026. Added to rn-c20-3-1. https://cnps.ca/article/infolaw-balancing-privacy-and-confidentiality-in-youth-mental-health-care/
- Bruneau J, Ahamad K, Goyer ME, et al. Canadian Research Initiative in Substance Misuse. Management of opioid use disorders: a national clinical practice guideline. CMAJ 190(9):E247. 2018. Added to rn-c20-4-4. https://pmc.ncbi.nlm.nih.gov/articles/PMC5837873/
- Health Canada. Naloxone: Opioid overdose response. 2026. Added to rn-c20-4-6. https://www.canada.ca/en/health-canada/services/opioids/naloxone.html
- Public Health Agency of Canada, NACI. Canadian Immunization Guide: Herpes Zoster (Shingles) Vaccine. 2025. Added to rn-c20-5-6. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-8-herpes-zoster-(shingles)-vaccine.html

rn-c20-3-2 relies on the acetaminophen consensus the item already cites, so no source was added there.

## Other checks

- The MCC list gives urea 2.1 to 8.0 mmol/L, potassium 3.5 to 5.1 mmol/L, random glucose 4.0 to 11.0 mmol/L and female hemoglobin 115 to 155 g/L. It lists urea and not BUN.
- Diabetes Canada withholds insulin in frank hypokalemia, potassium below 3.3 mmol/L, until replacement brings it to 3.3 mmol/L or higher.
- The ISMP Canada bulletin expresses potassium in mmol throughout and cites the Accreditation Canada Required Organizational Practice on concentrated electrolytes. The note avoids the word patient to meet the bank's client rule.
- The consensus statement says to multiply mcg/mL by 6.614 to get micromoles per litre. 64 times 6.614 is 423.3.
- The CIG page shows a last partial content update of June 2025. It says RZV may be considered at least 1 year after a shingles episode. The note adds this as context and does not change the key.
- The Health Canada naloxone page is dated February 10, 2026.
- The CRISM guideline is named with its 2018 year. No newer national version was confirmed in this pass, because the web search budget for the session had run out. WebFetch was used for every claim.

## Left empty on purpose

- rn-c20-1-1, 1-3, 1-4 and 1-6 do not turn on a lab value or a Canadian rule. The glucose in 1-6 is already given as 10.3 mmol/L.
- rn-c20-2-1, 2-3, 2-4 and 2-6 cover assessment, reasoning and body image that are the same in Canada.
- rn-c20-3-3 to 3-6 cover liver failure care, suicide safety measures and the acetylcysteine dose, which follow the same US and Canada consensus.
- rn-c20-4-1, 4-2, 4-3 and 4-5 cover endocarditis signs, COWS scoring and a vancomycin infusion reaction, which are the same in Canada.
- rn-c20-5-1 to 5-5 cover comfort care, varicella exposure and sedation that are the same in Canada. Every case already gives temperature in Celsius and weight in kg.

## Tests

BATCH=c20 npx vitest run tests/bank.test.ts passes, 44 of 44.
