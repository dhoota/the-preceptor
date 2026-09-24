# Batch s07 Canada notes

Batch s07 holds 50 items in Safety and Infection Prevention and Control. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources were written inline in each item. No stem, choice, key or rationale was changed.

## Counts

- Notes written: 16
- Left empty: 34

## Notes written

- rn-s07-01: PHAC lists droplet and contact precautions for RSV. The contact key is unchanged.
- rn-s07-04: ISMP Canada's 2025 Do Not Use list also lists U, IU and trailing zeros.
- rn-s07-06: PHAC lists Routine Practices plus gloves for head lice, with the same 24 hour end point.
- rn-s07-15: CMS rules do not apply in Canada. Restraint rules vary by province, with Ontario's 2001 act as the example.
- rn-s07-16: Health Canada's lead paint dates (before 1960 probable, 1960 to 1990 exterior possible). 1978 is a US date.
- rn-s07-20: Handguns are restricted or prohibited firearms under the Criminal Code. Federal storage rules for restricted firearms.
- rn-s07-25: PHAC lists droplet, contact and airborne for smallpox, and Routine Practices for adult hepatitis A with contact precautions when stool cannot be contained.
- rn-s07-28: CMS rules do not apply. Ontario's Fixing Long-Term Care Act, 2021 allows a physical restraint only after alternatives are considered and tried.
- rn-s07-35: PHAC spatial separation is 2 metres, not 3 feet.
- rn-s07-36: OSHA rules do not apply. Biomedical waste rules vary by province. Ontario C-4 uses yellow for blood waste and red for anatomical waste.
- rn-s07-38: Same restraint note as rn-s07-15.
- rn-s07-39: PHAC lists droplet and contact for group A streptococcal pharyngitis in children, until 24 hours of therapy.
- rn-s07-40: PHAC term Routine Practices. PHAC lists Routine Practices alone for Legionella.
- rn-s07-41: PHAC lists droplet and contact precautions for seasonal influenza.
- rn-s07-43: PHAC lists Routine Practices for a draining nonpulmonary TB lesion, adding Airborne Precautions when a procedure may aerosolize drainage.
- rn-s07-47: PHAC term Routine Practices. A long-sleeved gown is worn by point-of-care risk assessment.

## Sources added

- Public Health Agency of Canada. Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings. 2017. Added to rn-s07-01, 06, 25, 35, 39, 40, 41, 43 and 47. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html (disease table in Part C: .../part-c.html, 2 metre separation and gown use in Part B: .../part-b.html)
- Institute for Safe Medication Practices Canada. Do Not Use: List of Dangerous Abbreviations, Symbols, and Dose Designations. 2025. Added to rn-s07-04. https://ismpcanada.ca/resource/do-not-use-list/ (list PDF: https://ismpcanada.ca/wp-content/uploads/ISMPCanadaDoNotUseList-2025-8X11.pdf)
- Government of Ontario. Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16. 2001. Added to rn-s07-15 and 38. https://www.ontario.ca/laws/statute/01p16
- Health Canada. Lead-based paint. 2025. Added to rn-s07-16. https://www.canada.ca/en/health-canada/services/home-safety/lead-based-paint.html
- Government of Canada. Storage, Display, Transportation and Handling of Firearms by Individuals Regulations, SOR/98-209. 1998. Added to rn-s07-20. https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-209/FullText.html (handgun classes checked in Criminal Code s. 84: https://laws-lois.justice.gc.ca/eng/acts/C-46/section-84.html)
- Government of Ontario. Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1. 2021. Added to rn-s07-28. https://www.ontario.ca/laws/statute/21f39
- Ontario Ministry of the Environment, Conservation and Parks. C-4: The Management of Biomedical Waste in Ontario. 2025. Added to rn-s07-36. https://www.ontario.ca/page/c-4-management-biomedical-waste-ontario

## Other checks

- The web search budget for the session was used up, so every claim was checked with WebFetch or curl against the pages above.
- The Ontario statute pages were read in full with curl this time. Section 3 of the 2001 act states the purpose used in the notes. Section 35 of the 2021 long-term care act sets the conditions for a physical restraint.
- No item reached the 4 source limit.

## Left empty on purpose

- rn-s07-22 is left empty. EPA List P is a US list. A Canadian note would point to Health Canada DIN disinfectants with a C. auris claim, but no current PHAC or Health Canada C. auris cleaning page could be reached to confirm it. This one should get a follow-up check.
- rn-s07-34 and 45 are left empty. Parachute also advises 49°C (120°F) household hot water, so the answer and advice match.
- rn-s07-03 and 18 match PHAC (droplet for mumps until 5 days after parotitis, contact for adenovirus conjunctivitis), so no note was written.
- rn-s07-09, 11, 12, 26, 37 and 42 cite US bodies (TJC, ISMP, FDA). Canadian practice is the same even though the body differs, so no note was written.
- The other empty items use steps, drugs and units that are the same in Canada.

## Tests

BATCH=s07 npx vitest run tests/bank.test.ts: 61 of 61 pass.
