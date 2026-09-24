# Batch c13 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c13/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 5
- Left empty: 25
- `BATCH=c13 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c13-2-4 | The WOC nurse is an NSWOC in Canada, with CNA certification. Help with ostomy supply costs varies by province, such as the Ontario Assistive Devices Program grant |
| rn-c13-3-2 | SI units only and urea replaces BUN. Urea 6.4 mmol/L, creatinine 97 micromol/L, WBC 16.4 x 10^9/L. Blood gas pressures stay in mmHg |
| rn-c13-4-2 | SI units only. WBC 18.2 x 10^9/L, albumin 34 g/L, severe WBC cut point 15 x 10^9/L |
| rn-c13-5-4 | PHAC advises chemoprophylaxis for all residents in the outbreak area, vaccinated or not. Outbreaks go to regional or provincial public health as each province requires |
| rn-c13-5-6 | NACI prefers high-dose, adjuvanted or recombinant vaccine at 65 and older. FluMist is given in Canada only from 2 to 59 years |

No note changes or softens a key.

## Sources added

- Nurses Specialized in Wound, Ostomy and Continence Canada, What is an NSWOC, 2026. https://nswoc.ca/ (2-4)
- Government of Ontario, Assistive Devices Program: Enteral feeding and ostomy supplies, 2026. https://www.ontario.ca/page/enteral-feeding-and-ostomy (2-4)
- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (3-2, 4-2)
- Public Health Agency of Canada, Guidance: Infection prevention and control measures for healthcare workers in acute care and long-term care settings, 2021. https://www.canada.ca/en/public-health/services/infectious-diseases/nosocomial-occupational-infections/guidance-infection-prevention-control-measures-healthcare-workers-acute-care-long-term-care-settings.html (5-4)
- National Advisory Committee on Immunization, Public Health Agency of Canada, Canadian Immunization Guide, Influenza vaccines, 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-10-influenza-vaccine.html (5-6)

Item 2-4 now has 4 sources, the limit. No other item has more than 3.

## How the claims were checked

- NSWOC: the NSWOCC site (fetched) defines the NSWOC as a registered nurse with specialized wound, ostomy and continence knowledge. It says the specialty holds Canadian Nurses Association certification, WOCC(C).
- Ostomy supplies: the Ontario ADP page (fetched, updated February 18, 2026) gives $975 per ostomy each year for permanent ostomies, including colostomies. The note names Ontario as one example and says coverage varies by province.
- Lab units: the MCC normal values page (fetched) gives urea in mmol/L, creatinine in micromol/L, WBC 3.5 to 10.5 x 10^9/L, albumin 34 to 50 g/L, and arterial pCO2 and pO2 in mm Hg. The SI values in the notes are the item's own values converted (16 400/mm3 is 16.4 x 10^9/L).
- Prophylaxis and reporting: the PHAC guidance (fetched, dated 2021-04-29) says to consider chemoprophylaxis for all patients in the outbreak area, whether vaccinated or not. It calls for notice to regional and provincial or territorial public health authorities as required.
- Vaccines: the Canadian Immunization Guide influenza chapter (fetched, updated August 26, 2026) says IIV-HD, IIV-Adj or RIV should be offered preferentially at 65 and older. It gives FluMist for ages 2 to 59 and calls annual vaccination of health care workers standard of care.

## Left empty, with the reason

These 25 items have no verified material Canadian difference: 1-1 to 1-6, 2-1, 2-2, 2-3, 2-5, 2-6, 3-1, 3-3, 3-4, 3-5, 3-6, 4-1, 4-3, 4-4, 4-5, 4-6, 5-1, 5-2, 5-3 and 5-5.

- Case 1: acetaminophen, oxycodone, ondansetron and amlodipine are sold in Canada under the same generic names. Day surgery discharge criteria do not differ.
- 3-3 repeats the BUN and creatinine covered by the note on 3-2. 4-3 gives potassium in mmol/L already.
- 3-4: ceftriaxone and azithromycin are used in Canada under the same names. No Canadian guidance source that changes the key was verified.
- 4-4 and 4-6: no Canadian difference in C. difficile precautions or home teaching was found that would change what the nurse does.
- 5-2: provincial outbreak definitions differ, but the Ontario and BC documents could not be fetched to verify the exact wording. The note was left empty rather than make an unverified claim.
