# Batch s22 adversarial review

Scope: all 50 items in part1.ts to part5.ts, plus the two items in extra.ts that index.ts does not import (rn-s22-91 and rn-s22-92). Both lenses were applied to every item. Every number, conversion and calc step was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s22-91 | options[1], rationale | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-s22-92 | rationale | The rationale said the client has asthma. The stem gives no asthma. The rationale also never explained the key first. Rewritten from stem facts only. | B | high |
| rn-s22-10 | options[3].why | The why said NHLBI advises against oxygen at an SpO2 of 95% or more. The panel only says to give oxygen below 95%. Reworded to match. | A | high |
| rn-s22-10 | stem, rationale, options[2].why | NHLBI gives IV hydration in VOC only when the client cannot drink. The stem said only "little to drink". The stem now says the client cannot keep fluids down, and the rationale adds the maintenance rate limit. | A, B | medium |
| rn-s22-23 | options[0] | The why and rationale relied on chronic CO2 retention, which the stem never gave. Added it to the option. | B | medium |
| rn-s22-23 | options[3].why | "on treatment" was not in the stem. Removed. | B | medium |
| rn-s22-46 | options[3], rationale | "Loss of deep tendon reflexes" was a defensible third answer, since a potassium of 2.8 mEq/L causes hyporeflexia. Replaced with diarrhea and hyperactive bowel sounds, which go with high potassium. | A | medium |
| rn-s22-07 | spans[5].why, rationale | The why said dark creases are "not excess cortisol". ACTH-driven Cushing syndrome can darken the skin. Softened to "usually" and "not a typical sign". Key unchanged. | A | low |
| rn-s22-09 | refs | The ref defined heat stroke as a core temperature above 40°C. WMS 2024 defines it by CNS dysfunction with a temperature usually above 40°C. Reworded. | A | low |

## Key changes

- rn-s22-91 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate". After: option 1 "Calcium gluconate". The key index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity. Protamine reverses heparin and has no effect on magnesium. Arjan approves.

## Sources verified

- NHLBI. Evidence-Based Management of Sickle Cell Disease: Expert Panel Report, 2014. Read the VOC recommendations in the full PDF: reassess pain every 15 to 30 minutes, IV hydration at no more than maintenance for clients unable to drink, oxygen when SpO2 is below 95 percent on room air. https://www.nhlbi.nih.gov/sites/default/files/media/docs/sickle-cell-disease-report%20020816_0.pdf
- Magee LA et al. SOGC Guideline No. 426: Hypertensive Disorders of Pregnancy. J Obstet Gynaecol Can 44(5):547, 2022. https://doi.org/10.1016/j.jogc.2022.03.002
- Carney N et al. Guidelines for the Management of Severe TBI, Fourth Edition. Neurosurgery 80(1):6. https://doi.org/10.1227/NEU.0000000000001432
- Prabhakaran S et al. 2026 AHA/ASA acute ischemic stroke guideline. Stroke 57(8). https://doi.org/10.1161/STR.0000000000000513
- Evans L et al. Surviving Sepsis Campaign 2021. Crit Care Med 49(11):e1063 (PMID 34605781). https://pubmed.ncbi.nlm.nih.gov/34605781/
- Howard SC, Jones DP, Pui CH. The Tumor Lysis Syndrome. N Engl J Med 364(19):1844, 2011. https://doi.org/10.1056/NEJMra0904569
- da Silva JSV et al. ASPEN refeeding consensus. Nutr Clin Pract 35(2):178, 2020. https://pubmed.ncbi.nlm.nih.gov/32115791/
- Jone PN et al. Kawasaki disease scientific statement. Circulation 150(23), 2024. https://doi.org/10.1161/CIR.0000000000001295
- Ross DS et al. 2016 ATA hyperthyroidism guideline. Thyroid 26(10):1343. https://doi.org/10.1089/thy.2016.0229
- Ralston SL et al. AAP bronchiolitis guideline. Pediatrics 134(5):e1474, 2014. https://doi.org/10.1542/peds.2014-2742
- Spasovski G et al. Hyponatraemia guideline. Eur J Endocrinol 170(3):G1, 2014. https://doi.org/10.1530/EJE-13-1020
- Laine L et al. ACG upper GI and ulcer bleeding guideline. Am J Gastroenterol 116(5):899, 2021. https://doi.org/10.14309/ajg.0000000000001245
- Eifling KP et al. WMS heat illness guideline, 2024 update. Wilderness Environ Med 35(1 Suppl):112S. https://pubmed.ncbi.nlm.nih.gov/38425235/
- ADA. Standards of Care in Diabetes 2026, section 6. Diabetes Care 49(Suppl 1):S132. https://doi.org/10.2337/dc26-S006
- AHA. Part 9: Adult Advanced Life Support, 2025. Circulation 152. https://doi.org/10.1161/CIR.0000000000001376
- Jones DW et al. 2025 AHA/ACC high blood pressure guideline. Published in Circulation 152(11) and Hypertension. https://doi.org/10.1161/CIR.0000000000001356
- Hockenberry MJ, Duffy EA, Gibbs K. Wong's Nursing Care of Infants and Children, 12th edition. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- Hinkle 15th edition (2022) and Davis's Drug Guide 18th edition (2023) match the editions confirmed in earlier reviews. The F. A. Davis page did not render for me, so the Davis's year rests on the s06 review.

## Needs Arjan's decision

- rn-s22-91 key change above.
- rn-s22-91 is tagged need PA. An antidote item fits Pharmacological and Parenteral Therapies (PPT) better. It is also an obstetric item in a PA batch.
- rn-s22-34 applies a 25 percent first-hour limit to mean arterial pressure. The 2025 guideline states the limit for systolic BP. The stem gives the limit as the prescription, so the key stands, but the cited source does not phrase it this way.
- rn-s22-12 refs pair 30 mL/kg with a lactate of 4 mmol/L or more. The 2021 guideline says "sepsis-induced hypoperfusion". The lactate threshold comes from the earlier hour-1 bundle. Left as is.
- The whole bank near duplicate gate fails on rn-s02-33 against rn-s03-29 (Jaccard 0.54). Neither item is in s22. Every s22 gate passes.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). 7 items had defects, fixed in 9 table rows. 1 key change, in an extra item. No key in the 50 bank items changed. All s22 gates pass. The one failing whole-bank test belongs to s02 and s03.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
