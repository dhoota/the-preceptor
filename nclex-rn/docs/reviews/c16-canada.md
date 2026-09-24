# Batch c16 Canada notes

Batch c16 holds 5 case studies of 6 items each, 30 items in all. Only the files that index.ts imports were edited. extra.ts and helpers.ts were left alone. Stems, choices, keys and rationales are unchanged. New sources were added inline in each item's sources list.

## Counts

- Notes written: 7
- Left empty: 23

## Notes written

- rn-c16-2-4: MedicAlert Foundation Canada runs the Safe & Found program for people living with dementia. Its blue ID links first responders to a 24-hour hotline.
- rn-c16-3-6: Osteoporosis Canada's 2023 guideline recommends a bone medicine for adults 50 or older after a hip fracture, with no bone density test required first.
- rn-c16-4-1: White cell count in SI units (12.4 x 10^9/L) against the Medical Council of Canada range of 3.5 to 10.5 x 10^9/L.
- rn-c16-4-5: The practical nurse is an RPN in Ontario and an LPN elsewhere. Assignment rules vary by province.
- rn-c16-5-2: Hemoglobin 128 g/L, platelets 210 x 10^9/L and glucose 5.8 mmol/L, all inside the Medical Council of Canada ranges.
- rn-c16-5-4: NAC lists Octaplex and Beriplex P/N as the Canadian prothrombin complex concentrates and advises IV vitamin K at the same time.
- rn-c16-5-5: Canada uses Octaplex or Beriplex P/N, not Kcentra. NAC sample protocols dose by weight, by INR or as a standard dose. The key of 2100 units stands.

## Sources added

- MedicAlert Foundation Canada. Safe & Found program. 2026. Added to rn-c16-2-4. https://www.medicalert.ca/safe-and-found-subsidy
- Morin SN, et al. Osteoporosis Canada. Clinical practice guideline for management of osteoporosis and fracture prevention in Canada: 2023 update. CMAJ 195(39):E1333. 2023. Added to rn-c16-3-6. https://pmc.ncbi.nlm.nih.gov/articles/PMC10610956/
- Medical Council of Canada. Normal lab values reference list. 2020. Added to rn-c16-4-1 and rn-c16-5-2. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Canadian Council for Practical Nurse Regulators. Become a LPN/RPN. 2026. Added to rn-c16-4-5. https://ccpnr.ca/become-a-lpn-rpn/
- National Advisory Committee on Blood and Blood Products. Recommendations for Use of Prothrombin Complex Concentrates in Canada. 2022. Added to rn-c16-5-4 and rn-c16-5-5. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada

## Other checks

- The MedicAlert Canada page names the program Safe & Found, not Safely Home. The note uses the current name.
- The CMAJ guideline text says a low-trauma hip fracture after age 40 gives a clinical diagnosis of osteoporosis at age 50 or older. It recommends drug treatment for this group with a strong recommendation.
- MCC ranges read on the page: WBC 3.5 to 10.5 x 10^9/L, hemoglobin (female) 115 to 155 g/L, platelets 130 to 380 x 10^9/L, random glucose 4.0 to 11.0 mmol/L.
- The NAC page was last revised February 1, 2022 and published April 7, 2022. It gives sample dosing protocols rather than a single dose.

## Left empty on purpose

- Case 1 (home hospice) is left empty. The POLST form and the rules on who confirms an expected death at home differ across Canada. A web check could not confirm current provincial forms from a primary source, so no note was written. A follow-up check could add one.
- rn-c16-1-5 is left empty. Whether a 20 mg/mL oral morphine solution is sold in Canada was not confirmed, and the item turns on the arithmetic.
- rn-c16-3 labs already give hemoglobin in g/L. rn-c16-4 already gives glucose in mmol/L. Weights and temperatures already use kg and Celsius.
- The other items cover assessment, communication, skin care, fall prevention and neurologic care that are the same in Canada.

## Tests

BATCH=c16 npx vitest run tests/bank.test.ts passes, 44 of 44.
