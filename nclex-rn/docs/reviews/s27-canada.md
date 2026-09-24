# Batch s27 Canada notes

Batch s27 holds 50 items in Health Promotion and Maintenance, pharmacology dosing across the lifespan and mental health concepts. Only the files that index.ts imports were edited. extra.ts was left alone. Stems, choices, keys and rationales are unchanged.

## Counts

- Notes written: 10
- Left empty: 40

## Notes written

- rn-s27-13: CCSA (2023) rates 1 to 2 standard drinks a week as low risk and links more than 2 drinks on one occasion to more harm.
- rn-s27-14: The Good Samaritan Drug Overdose Act (2017) protects people who call 911 at an overdose from simple possession charges.
- rn-s27-16: Handguns are restricted firearms. Federal rules require them stored unloaded and locked, or in a secure vault, safe or room.
- rn-s27-21: Chlamydia is nationally notifiable. PHAC calls for partners from the 60 days before testing or symptom onset to be notified and treated.
- rn-s27-34: The Canadian Paediatric Society advises against OTC cough and cold medicines under 6 years, not 4.
- rn-s27-35: No hydrocodone and acetaminophen product is sold in Canada. Health Canada limits prescription combinations to 325 mg of acetaminophen per unit.
- rn-s27-42: Sodium in mmol/L only. The MCC range is 136 to 146 mmol/L.
- rn-s27-43: Albuterol is sold as salbutamol, for example Ventolin HFA.
- rn-s27-45: Albumin in g/L only, so 28 g/L. The MCC range is 34 to 50 g/L.
- rn-s27-49: Albuterol is sold as salbutamol, for example Ventolin HFA.

## Sources added

- Canadian Centre on Substance Use and Addiction. Canada's Guidance on Alcohol and Health: Final Report. 2023. Added to rn-s27-13. https://www.ccsa.ca/en/guidance-tools-resources/substance-use-and-addiction/alcohol/canadas-guidance-alcohol-and-health
- Health Canada. About the Good Samaritan Drug Overdose Act. 2017 (the year the Act became law). Added to rn-s27-14. https://www.canada.ca/en/health-canada/services/opioids/about-good-samaritan-drug-overdose-act.html
- Government of Canada. Storage, Display, Transportation and Handling of Firearms by Individuals Regulations, SOR/98-209, section 6. 1998. Added to rn-s27-16. https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-209/FullText.html (handgun class checked in Criminal Code s. 84: https://laws-lois.justice.gc.ca/eng/acts/C-46/section-84.html)
- Public Health Agency of Canada. Chlamydia and LGV Guide: Treatment and Follow-up. 2022. Added to rn-s27-21. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/chlamydia-lgv/treatment-follow-up.html
- Canadian Paediatric Society. Colds in Children. Caring for Kids. 2021. Added to rn-s27-34. https://caringforkids.cps.ca/handouts/health-conditions-and-treatments/colds_in_children
- Health Canada. Notice: Limiting the Strength of Acetaminophen to 325 mg per Dosage Unit in Prescription Combination Products. 2016. Added to rn-s27-35. https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/announcements/notice-limiting-strength-acetaminophen-325-dosage-unit-prescription-combination-products.html
- Health Canada. Drug Product Database, products containing hydrocodone. 2026. Added to rn-s27-35. https://health-products.canada.ca/dpd-bdpp/
- Medical Council of Canada. Normal lab values reference list. 2020. Added to rn-s27-42 and 45. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Health Canada. Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497. 2026. Added to rn-s27-43 and 49. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137

## Other checks

- The Drug Product Database API lists 30 hydrocodone products. All are single-ingredient, cough or ibuprofen products. Only one single-ingredient product is marketed. None pairs hydrocodone with acetaminophen.
- The Health Canada 2016 notice names codeine, oxycodone and tramadol as common acetaminophen partners. It does not state a numeric daily maximum, so the note does not give one.
- PHAC's chlamydia guide also advises repeat screening 3 months after treatment, which matches the item, so the note does not repeat it.
- Evra is still marketed in Canada (DIN 02248297), so rn-s27-09 needs no note.
- Mirena's Canadian monograph (authorized 2025-07-30) gives up to 8 years for contraception, the same as the item.

## Left empty on purpose

- rn-s27-26 (labeled contraceptive durations) is left empty for now. The Canadian Nexplanon monograph (Organon Canada, authorized 2026-07-02, https://pdf.hres.ca/dpd_pm/00085224.PDF) still labels the implant for up to 3 years, not 5. The item already cites 4 sources, the maximum, so the note cannot add its source. A reviewer could swap a source to allow this note.
- rn-s27-22 (indoor tanning) is left empty. Provincial age bans on indoor tanning could not be confirmed with a fetch in this pass.
- rn-s27-03, 07 and 09 (missed pills, postpartum eligibility, the patch) are left empty. The SOGC consensus text could not be fetched to confirm any Canadian difference.
- rn-s27-15 (vaping) is left empty. Canada caps nicotine in vapes at 20 mg/mL (SOR/2021-123), but this does not change what the nurse says.
- Items with temperatures already give Celsius. Dosing items already use kg, mg and mL.
- The other items cover teaching, care and psychiatric content that is the same in Canada.

## Tests

BATCH=s27 npx vitest run tests/bank.test.ts passes, 61 of 61.
