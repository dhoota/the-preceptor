# Batch c01 writer report

Five case studies, 30 items. Every item has `reviewed: false` and `canada: ""`. `BATCH=c01 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints no errors for `bank/c01`.

## Cases

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c01-1 | Medical unit | Man, 74, heart failure with fluid overload | High |
| rn-c01-2 | Labor and birth recovery | Woman, 31, bleeding after a vaginal birth | High |
| rn-c01-3 | Pediatric emergency department and unit | Boy, 3, rotavirus with dehydration | Moderate to high |
| rn-c01-4 | Surgical unit | Man, 56, alcohol withdrawal on day 1 after a colectomy | Moderate to high |
| rn-c01-5 | Long-term care | Woman, 84, delirium on top of Alzheimer disease | Moderate |

Mental health content sits in case 4 (withdrawal) and case 5 (delirium). No case is set on a mental health unit.

## Counts

Client Needs: MOC 5, SIPC 4, HPM 3, PSY 3, BCC 3, PPT 5, RRP 3, PA 4. This matches the plan.

Item types: matrix 8 (all single mode), mc 6, highlight 4, sata 4, cloze 3, msn 3, dnd 2. Each case uses 4 or more types.

Rationale scoring: one dyad (rn-c01-1-3, cloze). Two triads (rn-c01-2-2 and rn-c01-4-3, cloze). The two dnd items use zero-one scoring.

CJMM steps: each case walks the six steps in order. That gives 5 items per step.

Difficulty: level 2 has 8 items, level 3 has 16 and level 4 has 6.

Calculations: rn-c01-1-5 (furosemide mL), rn-c01-3-5 (20 mL/kg bolus), rn-c01-4-5 (lorazepam mL from a CIWA-Ar protocol).

## MC key positions

Position 1: 1 (rn-c01-3-3). Position 2: 2 (rn-c01-2-3, rn-c01-4-5). Position 3: 2 (rn-c01-1-5, rn-c01-5-3). Position 4: 1 (rn-c01-3-5). The calculation items list their options from low to high.

## Sources and verification

- Heidenreich PA et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 2022. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. The fixture already uses this source.
- US FDA. Furosemide Injection prescribing information, 2024. States slow IV injection over 1 to 2 minutes. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018267s029lbl.pdf
- ACOG Practice Bulletin No. 183: Postpartum Hemorrhage, 2017. Avoid methylergonovine in hypertension. Avoid carboprost in asthma. Uses the 1000 mL cumulative loss definition. https://pubmed.ncbi.nlm.nih.gov/28937571/
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023. https://www.us.elsevierhealth.com/maternity-and-womens-health-care-9780323810180.html
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- King CK et al. CDC. Managing Acute Gastroenteritis Among Children. MMWR 52(RR-16), 2003. Covers small ORS volumes, avoiding sugary juice, early refeeding, a 20 mL/kg IV bolus and capillary refill over 2 seconds. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5216a1.htm
- American Heart Association. PALS Provider Manual, 2020. Awake toddler heart rate 98 to 140/minute. Checked through the AAP summary: https://publications.aap.org/pediatriccare/drug-monograph/18/6346/Normal-Pediatric-Heart-Rates
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2023. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- Siegel JD et al. HICPAC. 2007 Guideline for Isolation Precautions, Appendix A. Rotavirus: contact precautions for the duration of illness, with prolonged shedding. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- ASAM. Clinical Practice Guideline on Alcohol Withdrawal Management, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- DailyMed. Lorazepam Injection, USP label. Dilute with an equal volume and inject no faster than 2 mg/minute. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5b17cde-a94c-4105-871c-54e7d2bd47e8
- Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet 2014. https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)60688-1/abstract
- Montero-Odasso M et al. World guidelines for falls prevention and management for older adults. Age and Ageing 2022. https://academic.oup.com/ageing/article/51/9/afac205/6730755
- CMS. 42 CFR 483.12, 2016 rule. Residents are free from restraints used for discipline or convenience. https://www.law.cornell.edu/cfr/text/42/483.12
- Institute for Healthcare Improvement. SBAR Tool. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation

## For the reviewer

- The IHI SBAR year is set to 2023, the date on the tool's current PDF. The tool page shows no clear publication year.
- The lorazepam year is set to 2023 as the label year. DailyMed labels are revised often. Please confirm or update the year.
- The PALS vital sign ranges come from the 2020 provider manual. I checked them against a secondary AAP summary, not the manual itself.
- rn-c01-4-2 gives a reference value of 6 to 24 hours for withdrawal onset. rn-c01-4-3 gives 6 to 48 hours for withdrawal seizures. Both come from the ASAM timeline as I recall it. Please check them against the ASAM text.
- In rn-c01-4-3, the client is about 36 hours from his last drink. He has hallucinations but is fully oriented. I keyed a withdrawal seizure as the highest risk, based on the timing, the past seizure and low magnesium. A reviewer could argue for delirium tremens. I left orientation intact to make that choice harder to defend.
- In rn-c01-2-4, misoprostol was left out of the tokens on purpose. It is also a second-line option, so including it would give two defensible keys for the first blank.
- In rn-c01-2-5, weighing pads is assigned to the AP and the nurse interprets the results. Local policy may differ.
- In rn-c01-5-4, the AP measures vital signs while the resident has a fever and a heart rate of 104/minute. The nurse keeps the interpretation. The key relies on this being a routine measurement.
- Furosemide and lorazepam doses and the CIWA-Ar protocol bands are fictional prescriptions. They were written for the case and were not taken from a published protocol.
