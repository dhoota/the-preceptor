# Batch s08 adversarial review

Scope: every file in src/bank/s08. That is common.ts, part1.ts to part5.ts (rn-s08-01 to rn-s08-50, imported by index.ts) and extra.ts (rn-s08-91 and rn-s08-92, not imported by index.ts). Both lenses were applied to all 52 items.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s08-91 | options[1], rationale | Key named protamine sulfate as the magnesium antidote. Protamine reverses heparin. The antidote is calcium gluconate | A | high |
| rn-s08-91 | options[2].why | Flumazenil why said the client received no benzodiazepine. The stem never says so | B | medium |
| rn-s08-91 | need, sources | Magnesium toxicity is a pharmacology item, not SIPC. Added a drug reference that covers the antidote | A | medium |
| rn-s08-92 | rationale | Rationale said the client has asthma. The stem never gives asthma, and a client with asthma would not get propranolol | B | high |
| rn-s08-92 | need | Beta blocker teaching is a pharmacology item, not SIPC | B | medium |
| rn-s08-23 | sources (CDC_FLU_HC) | Wrong work title and stale year. The CDC page is titled Infection Prevention and Control Strategies for Seasonal Influenza in Healthcare Settings, updated 2025 | A | high |
| rn-s08-15, rn-s08-30 | sources (AHRQ_REPORT) | Year 2019 was a guess. The primer was last updated in 2025 | A | high |
| rn-s08-42 | sources (EPA_HG) | Year 2024 was a guess. The EPA page was last updated in 2025 | A | medium |
| rn-s08-18 | rationale, options[0].why | Said Pneumocystis is not spread from person to person in hospital. Siegel gives standard precautions but advises against sharing a room with an immunocompromised client | A | medium |
| rn-s08-34 | rationale, options[0].why | Said chlorhexidine rinses have shown no benefit. SHEA 2022 says the evidence is uncertain and does not recommend it. Reworded to no proven benefit | A | medium |
| rn-s08-32 | sources | STEADI Check for Safety supports stair light switches, rugs and low shelves. Its text did not confirm contrasting step edges or bright bulbs. Added Potter as a second source | A | medium |
| rn-s08-50 | sources | The NRC page does not state the inverse square law. Added Bushberg et al., The Essential Physics of Medical Imaging, 4th edition, 2020 | A | high |

Fix count: 12, one per row above.

## Key changes

- rn-s08-91 (extra.ts, not in the bank). Before: the key was "Protamine sulfate". After: the key is "Calcium gluconate", still at index 1. Reason: calcium gluconate IV is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no effect on magnesium. Arjan must approve.

No key changed in rn-s08-01 to rn-s08-50.

## Numbers recomputed

A script checked every number. All matched.

- Item 23: 38.9°C is 102.0°F, 38.2°C is 100.8°F, 37.1°C is 98.8°F, 36.9°C is 98.4°F. Day 1 to day 6 is 5 days, under 7.
- Item 27: 49°C is 120.2°F. Item 43: 38.4°C is 101.1°F.
- Item 38: 2400 x 20% = 480. Distractors 360 (segs only), 120 (bands only), 1920 (2400 minus 480) are correct.
- Item 40: rates 9.76, 10.13, 6.67, 4.17, 4.55 round to the table values.
- Item 50: 20 / 4 = 5. The 2.5 distractor is 20 / 8.
- Item 9: 35 lb is 15.9 kg. 82 kg is 181 lb.
- Item 13: 1400 plus 1 hour is 1500. Plus 4 hours is 1800.
- Item 47: day 0 onset, day 3 now, fever last on the evening of day 1. Meets the 3 day and 24 hour criteria.

## Sources verified

- CDC, Infection Prevention and Control Strategies for Seasonal Influenza in Healthcare Settings, updated April 2025. 7 days or 24 hours after resolution of fever and respiratory symptoms, whichever is longer. https://www.cdc.gov/flu/hcp/infection-control/healthcare-settings.html
- CDC, Infection Control in Healthcare Personnel summary recommendations, published 2024, updated 2026. Return after 3 days, 24 hours fever free, symptoms improving, source control through day 7. Pregnant staff not routinely excluded. https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/summary-recommendations.html
- CDC, Infection Prevention and Control in Healthcare Settings (monkeypox), February 2026. Single room with bathroom, no special air handling, gown, gloves, eye protection, N95, until new skin forms, no unroofing with sharps. https://www.cdc.gov/monkeypox/hcp/infection-control/healthcare-settings.html
- CISA, Bomb Threat Guidance, 2025. Do not hang up, signal others, write down exact words, Site Decision Makers decide. https://www.cisa.gov/sites/default/files/2025-08/Bomb_Threat_Guidance_Quad_Fold_082025_508.pdf
- The Joint Commission, National Performance Goals Effective January 2026 for the Hospital Program. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- AHRQ PSNet, Reporting Patient Safety Events, updated March 2025. Near misses are reported. https://psnet.ahrq.gov/primer/reporting-patient-safety-events
- EPA, What to Do if a Mercury Thermometer Breaks, updated November 2025. Clear people and pets, cardboard and eyedropper, no vacuum, broom or drain. https://www.epa.gov/mercury/what-do-if-mercury-thermometer-breaks
- Klompas M et al., SHEA 2022 Update. Daily toothbrushing, dysphagia screening, early mobility. Uncertainty on antiseptic. Prophylactic antibiotics in stroke gave no benefit. https://pmc.ncbi.nlm.nih.gov/articles/PMC10903147/
- CDC STEADI, Check for Safety, 2017. https://www.cdc.gov/steadi/pdf/steadi-brochure-checkforsafety-508.pdf
- NRC, Minimize Your Exposure. Confirms time, distance, shielding but not the inverse square law. https://www.nrc.gov/about-nrc/radiation/protects-you/protection-principles.html
- Bushberg JT et al., The Essential Physics of Medical Imaging, 4th edition, Wolters Kluwer, 2020. https://shop.lww.com/The-Essential-Physics-of-Medical-Imaging/p/9781975103224
- USDA FSIS and FDA, Food Safety for Transplant Recipients. The cited PDF is dated September 2006. Reheat deli meats to steaming, no raw sprouts. https://ucfoodsafety.ucdavis.edu/sites/g/files/dgvnsk7366/files/inline-files/26487.pdf
- Magee LA et al., SOGC Guideline No. 426, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Vallerand AH, Sanoski CA, Davis's Drug Guide for Nurses, 18th edition, 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18

## Needs Arjan's decision

- rn-s08-91 key change from protamine sulfate to calcium gluconate. The item is in extra.ts and is not in the bank.
- rn-s08-91 and rn-s08-92 are pharmacology items placed in a Safety and Infection Control batch. I set need to PPT. Arjan may prefer to move them to a pharmacology batch or drop them.
- USDA_TX: a 2011 revision of the transplant booklet exists. The 2006 edition is real and supports the item. Consider citing the current FDA page.
- rn-s08-32: a nursing text now backs the contrasting step edge advice. Confirm Potter covers it, or reword the key to an item STEADI names, such as a handrail on both sides.
- rn-s08-21: the distractor about holding hands below the elbows borrows a surgical scrub rule. WHO does not set hand position for a surgical rub. Left as is.
- To run the automated gates on extra.ts, I added a temporary test file to tests/ and then deleted it. No other file outside src/bank/s08 was changed.

## Summary

52 items reviewed, 50 in the bank and 2 in extra.ts. 10 items had defects. There were 12 fixes and 1 key change, which was to rn-s08-91 in extra.ts. The 50 bank items kept their keys. Their defects were stale or wrong citations and two overstated claims in the explanations. BATCH=s08 bank tests pass 61 of 61, and the typecheck is clean for s08.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
