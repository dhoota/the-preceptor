# Batch s06 Canada notes

Batch s06 holds 50 items in Safety and Infection Prevention and Control. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources were written inline in each item.

## Counts

- Notes written: 9
- Left empty: 41

## Notes written

- rn-s06-02: PHAC lists droplet and contact precautions for seasonal influenza. The airborne answer set is unchanged.
- rn-s06-04: CMS rules do not apply in Canada. Restraint rules come from provincial law and employer policy, with Ontario's 2001 act as the example.
- rn-s06-15: Glucose in mmol/L with the Medical Council of Canada random range.
- rn-s06-30: Canadian Immunization Guide evidence of measles immunity for health care workers. Birth year does not count for them.
- rn-s06-31: Glucose in mmol/L with the Medical Council of Canada fasting range.
- rn-s06-36: PHAC's terms Routine Practices and Additional Precautions. PHAC lists Routine Practices alone for pulmonary anthrax.
- rn-s06-46: Poison centres are provincial or regional, so the number varies by province.
- rn-s06-49: PHAC's term Routine Practices, with a mask and eye protection when splash or spray is likely.
- rn-s06-50: WHMIS governs safety data sheets in Canada through the federal Hazardous Products Act and provincial or territorial workplace safety laws.

## Sources added

- Public Health Agency of Canada. Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings. 2017. Added to rn-s06-02, 36 and 49. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html (disease table checked in Part C: https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/part-c.html)
- Government of Ontario. Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16. 2001. Added to rn-s06-04. https://www.ontario.ca/laws/statute/01p16
- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s06-15 and 31. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- National Advisory Committee on Immunization. Public Health Agency of Canada. Immunization of Workers. Canadian Immunization Guide, Part 3. 2026. Added to rn-s06-30. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-3-vaccination-specific-populations/page-11-immunization-workers.html
- Ontario Poison Centre. The Hospital for Sick Children. Canadian Poison Centres. 2020. Added to rn-s06-46. https://www.ontariopoisoncentre.ca/get-help/canadian-poison-centres/
- Canadian Centre for Occupational Health and Safety. WHMIS: General. 2026. Added to rn-s06-50. https://www.ccohs.ca/oshanswers/chemicals/whmis_ghs/general.html

## Other checks

- The web search budget for the session was used up, so every claim was checked with WebFetch or curl against the pages above.
- The Ontario restraint act page renders by script. Only its title and citation could be read, so the rn-s06-04 note names the act and year and makes no claim about its sections.
- A national poison line (1-844-POISON-X) could not be reached or confirmed, so rn-s06-46 does not mention it.
- The item gate rejects "patient" in the canada field, so the rn-s06-04 note does not name the act in full.

## Left empty on purpose

- rn-s06-23 is left empty. Protection of incident and quality review records comes from provincial laws such as Ontario's Quality of Care Information Protection Act, 2016, but the act's scope could not be read to confirm it. This one should get a follow-up check.
- rn-s06-31 does not cite the Diabetes Canada perioperative target of 5.0 to 10.0 mmol/L. That target is stated for minor and moderate surgery, and colon resection may not fit.
- rn-s06-01, 12, 18, 25, 27, 32, 34, 48 and similar items cite US bodies (TJC, OSHA, ANA, NIOSH). Canadian practice is the same even though the regulator differs, so no note was written.
- The other empty items use steps, drugs and units that are the same in Canada.

## Tests

BATCH=s06 npx vitest run tests/bank.test.ts: every s06 test passes, 60 of 61 in total. The one failure is the whole-bank near-duplicate stem check, which flags rn-s22-01 against rn-s25-16. Those batches were being written while this pass ran. No s06 stem was changed.
