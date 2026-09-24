# Batch c14 adversarial review

Scope: case1.ts to case5.ts (30 case items), helpers.ts, index.ts and extra.ts. The file extra.ts holds 2 stand-alone items, rn-c14-9 and rn-c14-8, that index.ts does not import. Both were reviewed.

## Fixes

| Item id | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c14-9 | options[1], rationale, sources | Key was protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. Option, why and rationale rewritten. ACOG PB 222 added and the SOGC citation completed. | A | high |
| rn-c14-8 | rationale | Rationale said "this client has asthma". The stem gives no asthma. Claim removed. The rationale now explains the key first. | B | high |
| rn-c14-1-5 | sources (SRC.nicardipine), also rn-c14-1-4 | The cited DailyMed set id is a HealthFirst repackager label from 2020, not the 20 mg in 200 mL premixed bag, and the year 2024 was wrong. Replaced with the current Baxter Cardene IV premixed label, 2026. | A | high |
| rn-c14-1-5 | rationale | Said 204/124 mmHg is "above the first-hour goal". The item never gives a goal. The guideline sets a limit of no more than 25% in the first hour. Reworded to that limit. | B | medium |
| rn-c14-2-2 | blank 0, graft occlusion why | The why rejected graft occlusion because the graft is "open now". Being open now does not remove risk, and item 1 just taught that knee flexion threatens the graft. Why now says the incision findings point to infection, not to loss of flow. | A | medium |
| rn-c14-3-2 | stem | The rationale and the cellulitis why say "the skin is not red". No part of the case gave skin color. Added "The skin over the left calf is its usual color" to the stem. | B | high |
| rn-c14-4-4 | options[5], rationale | "Keep the client on nothing by mouth" at 2200 conflicts with the order "Nothing by mouth after midnight". Reworded to "Hold all food and fluids by mouth now" with the timing in the why and rationale. | B | medium |
| rn-c14-4-1 | sources (SRC.falls) | Title of the World Falls Guidelines was truncated. Full title restored. | A | low |

## Key changes

- rn-c14-9. Before: "Protamine sulfate" (option index 1). After: "Calcium gluconate" (option index 1). Reason: calcium gluconate is the antidote for magnesium sulfate toxicity per ACOG Practice Bulletin No. 222. Protamine reverses heparin and has no role here. The keyed position is unchanged but the keyed content changed. Arjan must approve.

## Sources verified

- htn, 2025 AHA/ACC BP guideline. SBP down by no more than 25% in the first hour, then to under 160/100 over 2 to 6 hours. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356 and https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know
- nicardipine, Baxter Cardene IV premixed 0.1 mg/mL. Start 5 mg/hour, raise 2.5 mg/hour every 5 to 15 minutes, maximum 15 mg/hour. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f12cea0d-b7cd-41d8-b551-2c74cc7f5f4e
- lovenox, FDA label revised 12/2021. 1 mg/kg every 12 hours for DVT, do not rub the site, abdominal wall, 80 mg/0.8 mL graduated syringe, NSAID caution. https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf
- tobacco, USPSTF, JAMA 325(3):265, 2021. https://pubmed.ncbi.nlm.nih.gov/33464343/
- pad, Gornik HL, Circulation 149(24):e1313, 2024. https://pubmed.ncbi.nlm.nih.gov/38743805/
- ssi, Berrios-Torres SI, JAMA Surgery 152(8):784, 2017. Glucose target under 200 mg/dL. https://pubmed.ncbi.nlm.nih.gov/28467526/
- acogVte, ACOG PB 196, Obstet Gynecol 132(1):e1, 2018. https://pubmed.ncbi.nlm.nih.gov/29939938/
- mec, CDC US MEC 2024, MMWR RR 73(4). https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm
- aaa, Chaikof EL, J Vasc Surg 67(1):2, 2018. https://pubmed.ncbi.nlm.nih.gov/29268916/
- aortic, Isselbacher EM, Circulation 146(24):e334, 2022. https://pubmed.ncbi.nlm.nih.gov/36322642/
- falls, Montero-Odasso M, Age and Ageing 51(9), 2022. https://pubmed.ncbi.nlm.nih.gov/36178003/
- pericardial, Adler Y, Eur Heart J 36(42):2921, 2015. https://academic.oup.com/eurheartj/article/36/42/2921/2293375
- sts, STS Task Force, Ann Thorac Surg 103(3):1005, 2017. https://pubmed.ncbi.nlm.nih.gov/28122680/
- SOGC Guideline No. 426, J Obstet Gynaecol Can 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- ACOG PB 222, Obstet Gynecol 135(6):e237, 2020. Calcium gluconate 1 g IV for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Textbooks, editions and years confirmed on publisher or retailer listings: Brunner 15th edition 2022 (ISBN 9781975161033), Lowdermilk 13th edition 2023 (https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0), Potter 11th edition 2023 (https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0), Varcarolis 9th edition 2022 (ISBN 9780323697071), Davis's Drug Guide 18th edition 2023 (https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18).

## Numbers recomputed by script

- Nicardipine: 20 / 200 = 0.1 mg/mL. 75 mL/hour is 7.5 mg/hour. 7.5 + 2.5 = 10 mg/hour, which is 100 mL/hour. Distractors 25, 77.5 and 125 mL/hour match their whys. 204 is a 10.5% fall from 228.
- Enoxaparin: 80 mg / 100 mg/mL = 0.8 mL. Distractors 0.4, 1.2 and 1.6 mL give 40, 120 and 160 mg.
- Pulse pressure at 1800: 88 minus 72 = 16 mmHg. Pulsus paradoxus 18 mmHg is above the 10 mmHg threshold.
- Unit pairs: creatinine 2.1, 1.3 and 1.0 mg/dL, glucose 262 and 200 mg/dL, and all four temperatures convert within 3 percent.

## Framework notes

- rn-c14-1-3, rn-c14-4-3 and rn-c14-5-3 are decided by airway, breathing and circulation plus acute over chronic. Brain injury, hemorrhage and low cardiac output each threaten life first.
- rn-c14-2-3 is decided by unstable over stable. A pulseless graft limb threatens tissue within hours.

## Needs Arjan's decision

- The rn-c14-9 key change above.
- rn-c14-8 and rn-c14-9 sit in extra.ts and are not imported. Their ids do not follow the case id pattern and they are stand-alone mc items in a case batch. Decide whether they move to a stand-alone batch.
- rn-c14-5-6 teaches traditional sternal precautions. Some centers now use "keep your move in the tube". The item still fits current NCLEX teaching.
- rn-c14-5-4 leaves volume loading out of the options. That avoids a second defensible key and was kept.
- The whole-bank near duplicate test fails on rn-c01-1-1 against rn-c17-3-1 (Jaccard 0.52). Neither item is in c14 and this review may not edit them. All other 43 tests pass with BATCH=c14.

## Summary

32 items reviewed, 30 in cases and 2 in extra.ts. 8 fixes across 7 items, with 1 key change (rn-c14-9). 4 fixes were Lens A content or citation errors, one of them a truncated citation title, and 4 were Lens B trace or timeline errors. Both extra items pass the item gates after the fixes.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
