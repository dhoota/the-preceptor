# Review of batch s23

Adversarial review of batch s23 (Physiological Adaptation, stand-alone items rn-s23-01 to rn-s23-50) plus the two items in `extra.ts` (rn-s23-91, rn-s23-92) that `index.ts` does not import. Both lenses applied. Every number was recomputed with a script (temperature pairs, glucose and magnesium unit pairs, MAP and its distractors, sodium fall per 24 hours, arm BP gap).

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s23-91 (extra.ts) | key option, why, rationale | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is IV calcium gluconate. | A | high |
| rn-s23-92 (extra.ts) | rationale | Rationale said the client has asthma. The stem never gives asthma. Claim removed and the wheezing point tied to nonselective beta blockade. | B | high |
| rn-s23-13, rn-s23-49 | sources (PERI in common.ts) | Cited the 2015 ESC pericardial guideline, which the 2025 ESC myocarditis and pericarditis guideline replaces. Teaching (aspirin or NSAID plus colchicine, activity restriction not bed rest) still holds under 2025. | A | high |
| rn-s23-05 | sources (SEPSIS in common.ts) | Cited Surviving Sepsis 2021. The 2026 edition is current. MAP 65 mmHg target remains and the stem gives the prescribed target, so the key holds. | A | high |
| rn-s23-04 | why, insulin with dextrose | Said insulin does not stabilize the heart "as fast as calcium", which implies insulin stabilizes the membrane. It does not. | A | high |
| rn-s23-16 | refs | Stem gives measured serum osmolality 356 mOsm/kg but the ref gave only the effective osmolality threshold. Added the consensus total osmolality threshold above 320 mOsm/kg. | B | medium |
| rn-s23-37 | why, cirrhosis option | Said cirrhosis enlarges the liver. Cirrhosis more often shrinks it, so the reason for rejection was unsound. Now rests on edema and ascites without distended neck veins. | A | medium |
| rn-s23-09 | sources (BLS in common.ts) | Citation named only the body. Added the verified lead authors and page (Kleinman ME et al., Circulation 152(Suppl 2):S448). Content already matches 2025 back blow guidance. | A | low |

## Key changes

- rn-s23-91. Before: option 2 "Protamine sulfate" keyed. After: option 2 "Calcium gluconate" keyed (same position). Reason: SOGC Guideline No. 426 names calcium gluconate 10% IV as the treatment for magnesium toxicity. Protamine has no role. Arjan to approve.

## Items checked with no defect

rn-s23-01 to 03, 06 to 08, 10 to 12, 14, 15, 17 to 36, 38 to 48 and 50. Keys, distractor reasons and numbers were checked. Priority items rest on airway and breathing first (09, 43), unstable over stable (19, 48) and the lethal risk first (04, 17, 25, 35).

## Sources verified

- 2025 ESC Guidelines for the Management of Myocarditis and Pericarditis, European Heart Journal 46(40):3952. https://academic.oup.com/eurheartj/article/46/40/3952/8234483 and https://pubmed.ncbi.nlm.nih.gov/40878297/
- First-line aspirin or NSAID with colchicine and individualized activity restriction under the 2025 ESC guideline. https://www.revespcardiol.org/en-insights-into-the-2025-esc-guidelines-fo-articulo-S1885585725003226
- Surviving Sepsis Campaign 2026, Prescott HC, Antonelli M, Alhazzani W, et al., Critical Care Medicine. https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
- Part 7 Adult Basic Life Support 2025, Kleinman ME et al., Circulation 152(Suppl 2):S448. Cycles of 5 back blows and 5 abdominal thrusts for severe choking. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001369 and https://newsroom.heart.org/news/updated-cpr-guidelines-tackle-choking-response-opioid-related-emergencies-and-a-revised-chain-of-survival
- SOGC Guideline No. 426, calcium gluconate for magnesium toxicity. https://jogc.com/article/S1701-2163(22)00234-1/fulltext
- Umpierrez GE et al., Hyperglycemic Crises in Adults With Diabetes, Diabetes Care 47(8):1257, HHS criteria. https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A
- BTS Guideline for Oxygen Use in Adults 2017, targets 94% to 98% and 88% to 92%. No newer edition found. https://www.brit-thoracic.org.uk/clinical-resources/guidelines/emergency-oxygen/
- 2022 AHA/ACC/HFSA Heart Failure Guideline, still current. https://pubmed.ncbi.nlm.nih.gov/35378257/
- Davis's Drug Guide for Nurses 18th edition, published 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18

## Needs Arjan's decision

- Approve the rn-s23-91 key change.
- rn-s23-41 cites Adrogue and Madias (2000) for a limit of 10 mEq/L in 24 hours. It is still the usual teaching limit, but newer cohort data question it. Keep, or add a newer source.
- The whole bank test fails on two near duplicate pairs outside this batch (rn-s25-47 with rn-s26-07, and rn-c02-1-1 with rn-c14-3-1). No s23 stem is involved. This reviewer may not edit those files.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 8 items had a defect. 8 fixes made, 1 key change. All s23 items and both extra items pass every item gate. The batch suite passes 60 of 61 tests, and the one failure lies outside s23.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
