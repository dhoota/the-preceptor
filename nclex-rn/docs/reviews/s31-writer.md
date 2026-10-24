# Batch s31 writer report

Stand-alone batch. 50 items, rn-s31-01 to rn-s31-50. All items are `reviewed: false` and `canada` is an empty string.

Checks run:

- `BATCH=s31 npx vitest run tests/bank.test.ts`: 61 of 61 tests pass. This includes the whole-bank near duplicate gate and the sign-off gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s31`: prints nothing.

## Counts

Client Needs: SIPC 50. This matches the plan.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are mc: item 15 (hot water log) and item 26 (epidemic curve).

CJMM step: action 19, generate 12, analyze 7, evaluate 6, recognize 3, prioritize 3.

Difficulty: 1 has 1, 2 has 9, 3 has 20, 4 has 17, 5 has 3.

Calculation: item 35 (dose delivered after a wrong drug library concentration) has a `calc` block. The batch has no PPT items, so the 12 percent rule does not apply.

## MC key positions

Across 28 mc items, counting the two trend mc: position 1 has 7, position 2 has 7, position 3 has 7, position 4 has 7. The key is the strict longest option in 7 items (04, 13, 21, 25, 29, 33, 37).

Multi-key pools: keyed choices run longer than distractors in 14 of 22 pools. This is under the 65 percent limit but close to it. Select all keys in the first half of the list: 19 of 40.

## Coverage of the focus list

- Viral hemorrhagic fever: triage isolation of a febrile traveler (01), the N95 option ensemble (02), doffing order (03).
- Pertussis: exposed nurse with no symptoms on prophylaxis keeps working (04), nurse with a new cough (05).
- Measles: MMR within 72 hours (06), staff exclusion from day 5 to day 21 whatever the prophylaxis (07).
- Staff tuberculosis screening: blood test after BCG (08), booster effect on two-step skin testing (09), next steps after a positive blood test (10).
- Hepatitis A in a food handler: roommate prophylaxis (11), public health response (12), return to work under the Food Code (13).
- Legionella: hot tub pneumonia bow-tie (14), hot water log trend (15), sterile water for nebulizer rinsing (16).
- Endoscope and instrument reprocessing: reprocessing sequence (17), failed leak test (18), point of use care of instruments (19).
- Sterilization indicators: implant held for the spore test (20), unchanged internal indicator (21), sterilizer monitoring (22).
- Peritoneal dialysis exit site: home care teaching (23), infection cues (24), a habit that needs correction (25).
- Outbreak investigation: epidemic curve (26), case definition (27), order of steps (28).
- Independent double checks: what makes a check independent (29), breaks in a check (30).
- Look-alike, sound-alike drugs: hydroxyzine and hydralazine (31), system fixes for traMADol and traZODone (32), hydromorphone vial for a morphine prescription (33).
- Smart pump drug libraries: profile after a unit transfer (34), wrong library concentration (35), daily safe practice (36).
- Oxygen cylinder transport: red zone gauge (37), handling in transport (38).
- Home dialysis electrical safety: setup teaching (39), extension cord (40).
- Pediatric fall and crib safety: open hospital crib (41), secondhand crib (42), highest fall risk child (43).
- Evacuating a ventilated client: manual ventilation (44), horizontal move to the next smoke compartment (45).
- Heat at a mass gathering: festival triage (46), exercise-associated hyponatremia bow-tie (47), when to stop ice water immersion (48).
- Smallpox-like rash: distinguishing features (49), first step (50).

I grepped the inventory for every planned topic first. Existing items already cover reading a skin test at 60 hours (rn-s20-10), the smart pump hard limit (rn-s05-04, rn-s07-11), the measles staff assignment (rn-s06-30), the pertussis infant bow-tie (rn-s06-35), heat stroke cooling actions (rn-s25-42), cylinder storage (rn-s26-10), Spaulding levels (rn-s26-16) and glutaraldehyde (rn-s26-21). Each s31 item tests a different point. No s31 topic label equals any other label in the bank. The highest stem trigram Jaccard against the rest of the bank is 0.26.

## Sources and verification

Read directly with WebFetch, or with a PDF text extract of the fetched file:

- CDC, PPE for confirmed and clinically unstable VHF, 2024: https://www.cdc.gov/viral-hemorrhagic-fevers/hcp/guidance/ppe-clinically-unstable.html (ensemble and the 23 step N95 doffing sequence).
- CDC, Identify, Isolate, Inform, 2014: https://stacks.cdc.gov/view/cdc/25741 (contents confirmed through state copies of the algorithm).
- CDC, Infection Control in Healthcare Personnel, pertussis and measles sections, published 2024: https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/pertussis.html and .../measles.html
- McLean et al., ACIP measles 2013: https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6204a1.htm (72 hours and 6 days).
- Sosa et al., MMWR 2019: https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a3.htm
- CDC, Tuberculin Skin Test clinical testing guidance, 2025: https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html (two-step, boosting, BCG).
- Nelson et al., ACIP hepatitis A 2020: https://www.cdc.gov/mmwr/volumes/69/rr/rr6905a1.htm (2 week window, age table, infectious period, low patron risk).
- Siegel et al. 2007, Appendix A: https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html (Legionnaires standard, smallpox airborne and contact, pertussis 5 days).
- CDC, Clinical Overview of Legionnaires' Disease, 2025: https://www.cdc.gov/legionella/hcp/clinical-overview/index.html
- CDC, Controlling Legionella in Potable Water Systems, 2025: https://www.cdc.gov/control-legionella/php/toolkit/potable-water-systems-module.html (60°C, 49°C, 25°C to 45°C).
- Tablan et al. 2004: https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5303a1.htm (sterile water rinse for nebulizers).
- HICPAC Sample Policy Template: Reprocessing Flexible Endoscopes, 2024: https://stacks.cdc.gov/view/cdc/182185
- Rutala and Weber 2008, Sterilizing Practices: https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/sterilizing-practices.html
- Fresenius Medical Care PD exit site card, 2025, which cites Chow et al. ISPD 2023: https://freseniusmedicalcare.com/content/dam/home-products-education/steps2home-pd/PD_Catheter_Exit_Site_Care.pdf
- CDC, Principles of Epidemiology, Lesson 6: https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/lesson6/section2.html
- ISMP Canada Safety Bulletin 5(1), 2005: https://ismpcanada.ca/wp-content/uploads/ISMPCSB2005-01.pdf
- ISMP smart pump guidelines, 2020: https://www.ismp.org/system/files/resources/2020-10/ISMP176C-Smart%20Infusion%20Pumps-100620.pdf (items 1.5, 4.3, 4.4, 4.7 and the head height text).
- FDA Name Differentiation Project, content current 2026: https://www.fda.gov/drugs/medication-errors-related-cder-regulated-drug-products/fda-name-differentiation-project (hydrALAZINE, hydrOXYzine, HYDROmorphone, traMADol, traZODone).
- FDA Home Healthcare Medical Devices checklist, 2024, and Unique Considerations in the Home, 2018.
- CPSC 16 CFR 1219: https://www.ecfr.gov/current/title-16/chapter-II/subchapter-B/part-1219
- FDA Food Code 2022 sections 2-201.12 and 2-201.13, confirmed through state copies that reproduce the text.

The shared web search budget ran out partway through. The sources below are real and correctly cited, but I could not open them to confirm the exact point:

- Lewinsohn et al. 2017 (IGRA preferred after BCG). Item 08 also cites the CDC skin test page, which confirms the BCG false positive.
- Chow et al. ISPD 2023 (purulent drainage defines exit site infection). Paywalled. Items 23 to 25 lean on the Fresenius card that cites it.
- ANSI/AAMI ST79 (keep instruments moist with enzymatic product, avoid saline). Secondary trade and AORN sources agree.
- CDC 2022 opioid guideline conversion factor of 5 for hydromorphone (item 33).
- Casa et al. NATA 2015 and Roberts et al. ACSM 2021 (heat stroke above 40°C, stop immersion at 38.9°C).
- Bennett et al. WMS 2020 (100 mL bolus of 3% sodium chloride for symptomatic exercise-associated hyponatremia).
- Hill-Rodriguez et al. 2009 (Humpty Dumpty risk factors).
- NFPA 99 and NFPA 101, 2021 editions, Potter 2023, Hinkle 2022 and Hockenberry 2024 for cylinder handling, horizontal evacuation, manual ventilation and crib checks.

## For the reviewer

- Item 40 keys an extension cord as unsafe for home hemodialysis. I did not read a machine maker's manual. The FDA pages support checking house wiring but do not name extension cords.
- Item 42 states a slat gap of 6 cm (2 3/8 inches), the drop-side ban and maker-only replacement parts. The CPSC rule incorporates ASTM F1169, which I could not open.
- Item 24 keys redness of 2 cm and catheter trauma as needing follow-up along with drainage and tunnel tenderness. Please check against the ISPD 2023 definitions.
- Items 37 and 38 rest on general cylinder safety (red zone gauge, no oil on fittings, do not lift by the valve) and not on a document I could open.
- Item 12 deliberately leaves out prophylaxis for coworkers of the food handler. The 2020 ACIP report does not state it, and older reports that did are superseded.
- Item 46 sits near rn-s38-33 (a parallel batch, heat stroke with sweating skin). Mine tests triage among four heat illnesses. Item 48 sits near rn-s25-42. Mine tests the stopping point for immersion.
- The CDC personnel guideline pages show 2024 publication dates. Older copies of the pertussis section may carry a 2019 date.
- While computing statistics I briefly created a temporary test file in `tests/` and deleted it at once. No file outside `src/bank/s31/` and this report remains changed.
