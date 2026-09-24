# c03 writer report

Batch c03 has 5 case studies of 6 items each, so 30 items. All are `reviewed: false` and `version: 1`. Every `canada` field is an empty string for the later pass.

Checks run:

- `BATCH=c03 npx vitest run tests/bank.test.ts`: every c03 test passes. The one failing test is the whole-bank near duplicate check. It flags `rn-c01-1-1` against `rn-c04-2-1`. No c03 id is involved.
- `npx tsc --noEmit -p . 2>&1 | grep bank/c03` prints nothing.

## Cases

| Case | Title | Setting | Client |
|---|---|---|---|
| rn-c03-1 | An Older Woman Who Is Not Herself | Emergency department | 81-year-old woman, urinary source of sepsis |
| rn-c03-2 | A Teenager Who Cannot Keep Anything Down | Pediatric emergency department | 15-year-old boy, ketoacidosis after an insulin pump site came loose |
| rn-c03-3 | Pain That Spreads to the Back | Medical unit | 46-year-old man, acute pancreatitis with alcohol withdrawal |
| rn-c03-4 | A Drowsy Afternoon in the Progressive Care Unit | Progressive care unit | 72-year-old woman, COPD with influenza A and carbon dioxide retention |
| rn-c03-5 | Sudden Breathlessness on the Orthopedic Unit | Orthopedic surgical unit | 68-year-old woman, pulmonary embolism on day 3 after hip arthroplasty |

The order matches the topic plan.

## Counts

Client Needs (matches the plan):

| MOC | SIPC | HPM | PSY | BCC | PPT | RRP | PA |
|---|---|---|---|---|---|---|---|
| 5 | 4 | 2 | 3 | 3 | 4 | 4 | 5 |

- MOC: 1-6, 2-4, 4-3, 5-3, 5-4
- SIPC: 1-4, 4-1, 4-4, 5-5
- HPM: 2-6, 4-6
- PSY: 3-2, 3-5, 3-6
- BCC: 3-3, 3-4, 5-6
- PPT: 1-5, 2-2, 2-5, 4-5
- RRP: 1-2, 2-1, 2-3, 5-1
- PA: 1-1, 1-3, 3-1, 4-2, 5-2

Item types:

| mc | sata | msn | matrix | cloze | dnd | highlight |
|---|---|---|---|---|---|---|
| 6 | 5 | 4 | 6 | 3 | 2 | 4 |

- Every case uses at least 5 item types.
- Triad: 1-3 (cloze).
- Dyad: 2-2 (drag and drop), 3-3 (cloze) and 4-2 (cloze).
- One multi-mode matrix: 3-2.
- Two calculations with `calc` blocks: 1-5 (30 mL/kg bolus) and 2-5 (insulin infusion rate).

CJMM steps: each case walks the six steps in order, so each step has 5 items.

Difficulty:

| 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|
| 0 | 7 | 18 | 5 | 0 |

## MC key positions

| Item | Key |
|---|---|
| 1-5 | C |
| 2-3 | D |
| 2-5 | B |
| 3-5 | A |
| 4-3 | C |
| 5-3 | B |

Totals: A 1, B 2, C 2, D 1. The options in 1-5 and 2-5 run from low to high.

Keyed choices run longer than the distractors in 6 of 15 multi-key pools.

## Sources

- Evans L, et al. Surviving Sepsis Campaign 2021. Critical Care Medicine 49(11):e1063. https://pubmed.ncbi.nlm.nih.gov/34605781/
- Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign 2026. Critical Care Medicine. https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
- Glaser N, et al. ISPAD 2022, Diabetic ketoacidosis. Pediatric Diabetes 23(7):835. https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406
- Phelan H, et al. ISPAD 2022, Sick day management. Pediatric Diabetes 23(7). https://www.ispad.org/resource/chapter-13-sick-day-management.html
- Gregory JW, Cameron FJ, Joshi K, et al. ISPAD 2022, Diabetes in adolescence. Pediatric Diabetes 23(7):857. https://pmc.ncbi.nlm.nih.gov/articles/PMC9828225/
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf
- Tenner S, et al. ACG Guidelines: Management of Acute Pancreatitis. American Journal of Gastroenterology 119(3):419, 2024. https://pubmed.ncbi.nlm.nih.gov/38857482/
- American Society of Addiction Medicine. Alcohol Withdrawal Management, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/ (CIWA-Ar bands under 10, 10 to 18, and 19 or more were confirmed by search)
- Miller WR, Rollnick S. Motivational Interviewing, 4th edition, 2023. https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795
- GOLD 2026 Report. https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf
- O'Driscoll BR, et al. BTS oxygen guideline. Thorax 72(Suppl 1):ii1, 2017. https://www.brit-thoracic.org.uk/clinical-resources/guidelines/emergency-oxygen/
- CDC. Infection Prevention and Control Strategies for Seasonal Influenza in Healthcare Settings, 2025. https://www.cdc.gov/flu/hcp/infection-control/healthcare-settings.html
- CDC. Influenza Antiviral Medications: Summary for Clinicians, 2026. https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html
- CDC. Clinical Guidance for RSV Immunizations and Vaccines, 2025. https://www.cdc.gov/rsv/hcp/vaccine-clinical-guidance/index.html
- USPSTF. Tobacco Smoking Cessation in Adults. JAMA 325(3):265, 2021. https://pubmed.ncbi.nlm.nih.gov/33464343/
- Konstantinides SV, et al. 2019 ESC Pulmonary Embolism Guidelines. European Heart Journal 41(4):543. https://academic.oup.com/eurheartj/article/41/4/543/5556136
- Montero-Odasso M, et al. World falls guidelines. Age and Ageing 51(9):afac205, 2022.
- Inouye SK, et al. Delirium in elderly people. The Lancet 383(9920):911, 2014.
- Institute for Healthcare Improvement. SBAR Tool, 2023.
- Hinkle JL, et al. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022.

## For the reviewer

- **Sepsis 2026 citation.** Search confirmed the authors, the year and that the guideline keeps the suggestion of at least 30 mL/kg of crystalloid. I did not confirm the volume and page numbers, so the `work` field leaves them out. Items 1-5 and 1-6 also cite the 2021 guideline.
- **ISPAD sick day chapter.** The page numbers were not confirmed, so only the issue is given. The claim in item 2-2 is that a pump holds only rapid-acting insulin, so ketones build quickly when delivery stops. It rests on this chapter and standard pump teaching.
- **Item 2-4.** The key treats an insulin bolus and bicarbonate at pH 7.08 as prescriptions to clarify. This follows ISPAD 2022. I tagged the item MOC because it tests checking a prescription before carrying it out. It could be read as PPT.
- **Item 4-1.** This is tagged SIPC because most keys are room hazards: oxygen flow set by a visitor, a lighter near oxygen and an unmasked visitor. The drowsiness and high SpO2 spans are physiological cues.
- **Items 5-3 and 4-3.** These are priority items tagged MOC for setting priorities. Their content is also physiological.
- **Item 3-2.** In this multi-mode matrix, a heart rate of 112/minute and a temperature of 38.1°C are keyed to both pancreatitis and withdrawal. Please check that this is accepted.
- **Item 3-4.** The client takes nothing by mouth overnight only. ACG 2024 favors early oral feeding, so no item teaches prolonged fasting.
- **Item 4-5.** "Drive the nebulizer with oxygen at 8 L/minute" is a distractor based on the BTS advice to use air-driven nebulizers in hypercapnia.
- **Item 5-6.** The teaching that the walker goes first and the operated leg steps next is standard textbook teaching (Brunner). It is not tied to a guideline.
