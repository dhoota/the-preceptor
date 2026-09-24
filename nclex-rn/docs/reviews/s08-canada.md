# Batch s08 Canada notes

Batch s08 holds 50 items in Safety and Infection Prevention and Control. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources were written inline in each item. No stem, choice, key or rationale was changed.

## Counts

- Notes written: 4
- Left empty: 46

## Notes written

- rn-s08-13: CMS rules and their 1 hour and 4 hour limits do not apply. Restraint rules vary by province, with Ontario's 2001 act as the example.
- rn-s08-18: PHAC lists droplet and contact precautions for seasonal influenza, and Routine Practices alone for Pneumocystis, Legionella and adult hepatitis A. The key is unchanged.
- rn-s08-23: PHAC lists droplet and contact precautions for influenza for the duration of symptoms, with no 7 day minimum. The persisting cough still keeps precautions, so the key is unchanged.
- rn-s08-38: SI units. The ANC reads 0.48 x 10^9/L against a 0.5 x 10^9/L cutoff. MCC adult range 2.0 to 7.5 x 10^9/L.

## Sources added

- Government of Ontario. Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16. 2001. Added to rn-s08-13. https://www.ontario.ca/laws/statute/01p16 (section 3 purpose checked with curl, consolidated from May 18, 2023)
- Public Health Agency of Canada. Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings. 2017. Added to rn-s08-18 and 23. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html (disease table in Part C: .../part-c.html)
- Medical Council of Canada. Normal Lab Values. 2020. Added to rn-s08-38. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/

## Left empty on purpose

- rn-s08-24 (mpox): PHAC's interim mpox IPC guidance (updated November 2024) matches the key. It calls for a single room with a dedicated bathroom, droplet and contact precautions with an N95, gown, gloves and eye protection, no AIIR, and precautions until scabs drop off over intact skin. https://www.canada.ca/en/public-health/services/diseases/mpox/health-professionals/interim-guidance-infection-prevention-control-healthcare-settings.html
- rn-s08-47 (staff return after influenza): Canadian return to work rules are set by provincial and employer policy. PHAC advises being afebrile for 24 hours without antipyretics, which fits the key. No single Canadian rule on the CDC day 7 source control step could be confirmed, so no note was written. Worth a follow-up check.
- rn-s08-02: Canadian Blood Services also uses "type and screen" and requires bedside labelling with two identifiers, so no terminology note was needed.
- Items citing TJC, OSHA, NFPA, CISA, AHRQ, EPA, NRC, USDA or CDC for steps that are the same in Canada (01 to 12, 14 to 17, 19 to 22, 25 to 37, 39 to 46, 48 to 50) were left empty. Item 50 already uses SI units. Epinephrine in item 48 has the same name in Canada.

## Tests

BATCH=s08 npx vitest run tests/bank.test.ts: 61 of 61 pass.
