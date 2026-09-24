# Batch c03 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c03/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 4
- Left empty: 26
- `BATCH=c03 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c03-4-1 | PHAC advises Droplet and Contact Precautions for seasonal influenza, so Canadian staff add a gown and gloves for direct care |
| rn-c03-4-4 | PHAC advises Droplet and Contact Precautions. It ends them when the client is no longer symptomatic or per organization policy, not at a fixed 7 days |
| rn-c03-4-5 | Albuterol is sold in Canada as salbutamol (Ventolin HFA). A Canadian order reads ipratropium and salbutamol |
| rn-c03-4-6 | NACI (April 2026) strongly recommends RSV vaccine for adults on home oxygen and for adults 65 to 74 at increased risk. The client qualifies through her home oxygen |

## Sources added

- Public Health Agency of Canada, Guidance: Infection Prevention and Control Measures for Healthcare Workers in Acute Care and Long-term Care Settings (seasonal influenza), 2021. https://www.canada.ca/en/public-health/services/infectious-diseases/nosocomial-occupational-infections/guidance-infection-prevention-control-measures-healthcare-workers-acute-care-long-term-care-settings.html (4-1, 4-4)
- Health Canada, Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137 (4-5)
- National Advisory Committee on Immunization, Summary of NACI statement of April 10, 2026: Updated guidance on RSV vaccines for older adults and for adults at high risk of severe RSV disease, 2026. https://www.canada.ca/en/public-health/services/publications/vaccines-immunization/national-advisory-committee-immunization-summary-updated-guidance-respiratory-syncytial-virus-vaccines-older-adults-high-risk-severe-rsv-disease.html (4-6)

## How the claims were checked

- PHAC influenza guidance, fetched (dated 2021-04-29): clients with suspected or confirmed seasonal influenza go on Droplet and Contact Precautions in addition to Routine Practices. Precautions stop when the client is no longer symptomatic or according to the organization's policy. Clients who leave the room wear a mask. The keys of 4-1 and 4-4 stand. Ending precautions when the fever breaks is still wrong under PHAC, since she is still symptomatic.
- Health Canada DPD API: no ingredient is named albuterol. Salbutamol products are listed, and Ventolin HFA (DIN 02241497) is marketed. Ventolin Nebules are cancelled, so the note names Ventolin HFA only.
- NACI summary of April 10, 2026, fetched: strong recommendation for all adults 75 and older, for adults 65 to 74 at increased risk, and for adults 18 and older on home oxygen or chronic oxygen therapy. The key in 4-6 stands.

## Left empty, with the reason

These 26 items have no material Canadian difference: 1-1 to 1-6, 2-1 to 2-6, 3-1 to 3-6, 4-2, 4-3 and 5-1 to 5-6.

- 1-2, 1-3 and 1-6 turn on lab values, but the items already show creatinine in micromol/L and lactate in mmol/L. The Medical Council of Canada list reports these in the same units. The glucose distractor in 1-3 gives 13.2 mmol/L in its explanation.
- 2-1, 2-4 and 2-5 already show bicarbonate, potassium, glucose and ketones in mmol/L.
- 4-2: Canadian labs report blood gas pressures in mmHg, as the item does. The MCC list gives PaCO2 in mmHg.
- 1-4: I did not write a note on provincial restraint law. The Ontario e-Laws and CNPS pages did not load, so I could not verify the claim.

## Notes on the process

The session's WebSearch quota ran out after two calls. The remaining claims were checked with WebFetch and the Health Canada DPD API.

## Test run

The final run passes 44 of 44. During the pass, one whole bank test failed for a short time. "has no near duplicate stems" flagged rn-c03-1-1 against rn-c07-1-1 while batch c07 was being written. The c07 stem has since changed, and the c03 stem was not touched.
