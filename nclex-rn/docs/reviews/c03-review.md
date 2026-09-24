# c03 adversarial review

Scope: all 30 case items in case1.ts to case5.ts, the shared sources in helpers.ts, and the 2 stand-alone items in extra.ts that index.ts does not import (rn-c03-8 and rn-c03-9). Both lenses were applied to every item. Every number was recomputed with a script.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c03-8 (extra.ts) | options[1], rationale | Key was protamine sulfate. Protamine reverses heparin, not magnesium. The antidote for magnesium toxicity is IV calcium gluconate. | A | high |
| rn-c03-8 (extra.ts) | sources | The SOGC citation had no journal, volume or page, and it does not clearly name the antidote. Added the full SOGC reference and ACOG Practice Bulletin 222, which names calcium gluconate 10% 10 mL IV over 3 minutes. | A | high |
| rn-c03-9 (extra.ts) | options[1].why | Said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts slowly over hours. The reason for rejecting it was false. | A | high |
| rn-c03-1-2 | rows[0].why | Said a positive nitrite points to the bladder. Nitrite shows bacteriuria somewhere in the urinary tract and cannot localize to the bladder. Changed to urinary tract. | A | medium |
| rn-c03-3-3 | rationale, blanks[0].options[2].why | Both cite low intake. The stem and the case so far never report his intake. Reworded to a nutrition concern over days. | B | medium |
| rn-c03-4-4 | options[2].why | Said visitors caused the high oxygen flow. Item 4-1 never says who set the flowmeter to 6 L/minute. Reworded to the prescription and staff setting the flow. | B | high |
| rn-c03-5-2 | rows[1].why | Explained the SpO2 fall as lung units ventilated but not perfused. That describes dead space, which raises the PaCO2 and does not by itself cause hypoxemia. Reworded to ventilation and perfusion mismatch. | A | medium |
| rn-c03-2-2, rn-c03-2-6 | sources (helpers.ts ispadSick) | The ISPAD 2022 sick day citation had no page. PubMed 36093857 confirms Pediatric Diabetes 23(7):912. | A | high |

## Key changes

- rn-c03-8 (extra.ts, not yet in the bank). Before: option 1 "Protamine sulfate". After: option 1 "Calcium gluconate". The key index stays 1. Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (ACOG Practice Bulletin 222, 2020). Protamine reverses heparin. Arjan must approve.

## Checks with no defect found

- All unit pairs convert within 3 percent. Temperatures: 38.7°C is 101.7°F, 37.9°C is 100.2°F, 37.4°C is 99.3°F, 38.1°C is 100.6°F, 38.3°C is 100.9°F, 37.1°C is 98.8°F. Creatinine 1.9 mg/dL is 168 micromol/L and 1.0 mg/dL is 88 micromol/L. Glucose 238 mg/dL is 13.2 mmol/L, 486 mg/dL is 27.0 mmol/L and 172 mg/dL is 9.5 mmol/L. Calcium 7.8 mg/dL is 1.95 mmol/L. Triglycerides 180 mg/dL is 2.0 mmol/L.
- 1-5: 30 mL/kg times 62 kg is 1860 mL. Distractors 186, 930 and 3720 mL match their stated errors.
- 1-6: MAP at 82/44 mmHg is 56.7 mmHg, below 65. At 86/48 mmHg it was 60.7 mmHg. Urine output of 10 mL/hour is 0.16 mL/kg/hour for 62 kg. The bolus ran 1430 to 1730, so the timeline holds.
- 2-5: 0.1 units/kg/hour times 52 kg is 5.2 units/hour. At 1 unit/mL that is 5.2 mL/hour. Distractors 0.52, 10.4 and 52 mL/hour match their stated errors.
- 3-2: lipase 1840 units/L is 11.5 times the upper limit of 160, above the 3 times threshold.
- 3 intro: pain began at 0400, last drink at 0200, admission at 2200, which is 20 hours. At 0600 the next day it is 28 hours, consistent with the withdrawal timeline.
- 4-2: pH 7.27, PaCO2 72 mmHg, HCO3 32 mEq/L. Expected HCO3 is about 27 for acute and 35 to 37 for chronic retention. 32 lies between, so partly compensated respiratory acidosis is right.
- Each case walks the six CJMM steps in order and uses at least 4 item types. MC keys sit at A 1, B 2, C 2, D 1.

## Sources verified

- Evans L, et al. Surviving Sepsis Campaign 2021. Crit Care Med 49(11):e1063. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Prescott HC, et al. Surviving Sepsis Campaign 2026. Keeps the suggestion of at least 30 mL/kg crystalloid within 3 hours. https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026 and https://journals.lww.com/ccmjournal/fulltext/10.1097/ccm.0000000000007075
- Glaser N, et al. ISPAD 2022 DKA. Pediatr Diabetes 23(7):835. No insulin bolus, bicarbonate only for pH below 6.9 with poor contractility or life threatening hyperkalemia. https://onlinelibrary.wiley.com/doi/abs/10.1111/pedi.13406
- Phelan H, et al. ISPAD 2022 sick day management. Pediatr Diabetes 23(7):912. https://pubmed.ncbi.nlm.nih.gov/36093857/
- Gregory JW, et al. ISPAD 2022 Diabetes in adolescence. Pediatr Diabetes 23(7):857. https://pubmed.ncbi.nlm.nih.gov/36250644/
- ISMP High-Alert Medications in Acute Care Settings 2024. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf
- Tenner S, et al. ACG acute pancreatitis. Am J Gastroenterol 119(3):419. https://pubmed.ncbi.nlm.nih.gov/38857482/
- ASAM Alcohol Withdrawal Management 2020. J Addict Med 14(3S). CIWA-Ar under 10, 10 to 18 and 19 or more confirmed. https://pubmed.ncbi.nlm.nih.gov/32511109/
- GOLD 2026 Report. Prednisone 40 mg for 5 days, air driven nebulization preferred in exacerbations, influenza, pneumococcal and RSV vaccines. https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf
- O'Driscoll BR, et al. BTS oxygen guideline. Thorax 72(Suppl 1):ii1. https://pubmed.ncbi.nlm.nih.gov/28507176/
- CDC influenza infection control. Droplet precautions for 7 days or until 24 hours after fever and respiratory symptoms resolve, whichever is longer. Facemask for the client outside the room. https://www.cdc.gov/flu/hcp/infection-control/healthcare-settings.html
- CDC antiviral summary. Benefit in hospitalized clients after 48 hours. Nausea less likely with food. https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html
- USPSTF tobacco cessation. JAMA 325(3):265. https://pubmed.ncbi.nlm.nih.gov/33464343/
- Konstantinides SV, et al. 2019 ESC PE guidelines. Eur Heart J 41(4):543. https://pubmed.ncbi.nlm.nih.gov/31504429/
- Montero-Odasso M, et al. World falls guidelines. Age Ageing 51(9). https://pubmed.ncbi.nlm.nih.gov/36178003/
- Inouye SK, et al. Delirium in elderly people. Lancet 383(9920):911. https://pubmed.ncbi.nlm.nih.gov/23992774/
- IHI SBAR Tool. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- Magee LA, et al. SOGC Guideline No. 426. J Obstet Gynaecol Can 44(5):547. https://pubmed.ncbi.nlm.nih.gov/35577426/
- ACOG Practice Bulletin 222. Obstet Gynecol 135(6):e237. Calcium gluconate 10% 10 mL IV over 3 minutes for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Miller WR, Rollnick S. Motivational Interviewing, 4th edition, 2023. Publisher page https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795
- Hinkle JL, et al. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. Textbook, not checked line by line.

## Needs Arjan's decision

- Key change in rn-c03-8 above.
- extra.ts uses the ids rn-c03-8 and rn-c03-9. That is the case id pattern (rn-cNN-K), not an item id. Both are stand-alone MC items in a case batch. They need new ids and a home batch before they join the bank. They are not scored by the batch tests.
- rn-c03-3-2 keys a heart rate of 112/minute and a temperature of 38.1°C to both pancreatitis and withdrawal. This is defensible in a multi mode matrix and I left it.
- rn-c03-2-4 is tagged MOC. It could be read as PPT. I left the tag.
- rn-c03-5-5 starts a heparin infusion while the history still lists enoxaparin 40 mg daily. No item says the enoxaparin is stopped. Consider a line in the stem.
- helpers.ts gives the GOLD 2026 Report the year 2025. The PDF is dated December 2025 and copyrighted 2025 and 2026. Either year is defensible.

## Summary

32 items reviewed (30 case items and 2 extra items). 8 fixes across 8 item ids, 1 key change, 0 keys changed in the imported bank. The most serious defects were both in extra.ts: a wrong antidote key for magnesium toxicity and a false reason for rejecting sodium polystyrene sulfonate. `BATCH=c03 npx vitest run tests/bank.test.ts` passes 44 of 44, tsc reports no c03 errors, and the quality gates return no problems for the extra items.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
