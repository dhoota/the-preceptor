# s16 writer report

Batch s16. 50 stand-alone items, rn-s16-01 to rn-s16-50. All items are Pharmacological and Parenteral Therapies. Every item has reviewed: false and an empty canada note.

## Checks

- `BATCH=s16 npx vitest run tests/bank.test.ts`: every s16 test passes. 60 of 61 tests pass. The one failure is the whole-bank near duplicate check. It flags rn-s19-11 against rn-s25-23. Neither item is in s16.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s16` prints nothing.

## Counts

Client Needs: PPT 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. The trend items are rn-s16-18 (mc) and rn-s16-39 (matrix, single).

CJMM step: recognize 5, analyze 6, prioritize 4, generate 8, action 16, evaluate 11.

Difficulty: 1 is 5 items, 2 is 19, 3 is 17, 4 is 8, 5 is 1.

Calculations: 7 items carry a calc block. They are 01, 06, 11, 21, 31, 41 and 49.

## MC key positions

27 mc items, counting the trend mc item. Position 1: 7. Position 2: 7. Position 3: 7. Position 4: 6. Calculation options run low to high. The key is the strict longest option in 5 of 27 mc items. Keyed choices run longer than distractors in 7 of 21 multi-key pools. Select all keys in the first half of the list: 19 of 37.

## Sources used, with verification URLs

- Burchum JR, Rosenthal LD. Lehne's Pharmacology for Nursing Care, 11th edition. 2022. https://shop.elsevier.com/books/lehnes-pharmacology-for-nursing-care/burchum/978-0-323-82522-1
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition. 2022. Already used across the bank and in the fixture.
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. 2023. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Institute for Safe Medication Practices. ISMP List of High-Alert Medications in Acute Care Settings. 2024. Used in the fixture.
- Nickel B, Gorski L, Kleidon T, et al. Infusion Therapy Standards of Practice, 9th edition. J Infus Nurs 47(1S). 2024. https://pubmed.ncbi.nlm.nih.gov/38211609/
- ACR Committee on Drugs and Contrast Media. ACR Manual on Contrast Media. 2024. https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Contrast-Manual
- ADA. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S183. https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment
- Umpierrez GE, et al. Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 47(8):1257. 2024. https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A
- GINA. Global Strategy for Asthma Management and Prevention, 2025 update. https://ginasthma.org/wp-content/uploads/2025/11/GINA-2025-Update-25_11_08-WMS.pdf
- GOLD. 2026 Report. https://goldcopd.org/wp-content/uploads/2025/11/GOLD-REPORT-2026-v1.2-20Nov2025_WMV.pdf
- Page RL, Joglar JA, et al. 2015 ACC/AHA/HRS SVT Guideline. Circulation 133:e506. 2016. https://pubmed.ncbi.nlm.nih.gov/26399663/
- Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Atrial Fibrillation Guideline. Circulation 149(1):e1. 2024. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193
- Prabhakaran S, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
- Spasovski G, et al. Clinical Practice Guideline on Hyponatraemia. Eur J Endocrinol 170(3):G1. 2014. https://academic.oup.com/ejendo/article/170/3/G1/6668028
- Johnson S, et al. IDSA and SHEA 2021 C. difficile Focused Update. Clin Infect Dis 73(5):e1029. https://academic.oup.com/cid/article/73/5/e1029/6298219
- FDA Drug Safety Communication on fluoroquinolones. 2016. https://www.fda.gov/media/119537/download
- FDA Boxed Warning for montelukast. 2020. https://www.fda.gov/drugs/drug-safety-and-availability/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug
- SAMHSA. TIP 63: Medications for Opioid Use Disorder. 2021. https://library.samhsa.gov/product/tip-63-medications-opioid-use-disorder/pep21-02-01-002
- Reus VI, et al. APA Practice Guideline for Alcohol Use Disorder. Am J Psychiatry 175(1):86. 2018. https://psychiatryonline.org/doi/10.1176/appi.ajp.2017.1750101
- ACOG Practice Bulletin No. 181, Prevention of Rh D Alloimmunization. 2017. https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/08/prevention-of-rh-d-alloimmunization
- ACOG Committee Opinion No. 767, Severe Hypertension in Pregnancy and Postpartum. 2019. https://pubmed.ncbi.nlm.nih.gov/30681541/
- Olsen MM, et al. ONS Chemotherapy and Immunotherapy Guidelines, 2nd edition. 2023. https://www.ons.org/store/books/chemotherapy-and-immunotherapy-guidelines-and-recommendations-practice-second-edition
- FitzGerald JD, et al. 2020 ACR Gout Guideline. Arthritis Care Res 72(6):744. https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24180
- Ross DS, et al. 2016 ATA Hyperthyroidism Guidelines. Thyroid 26(10):1343. https://journals.sagepub.com/doi/10.1089/thy.2016.0229
- Wolraich ML, et al. AAP ADHD Guideline. Pediatrics 144(4):e20192528. 2019. https://publications.aap.org/pediatrics/article/144/4/e20192528/81590
- Narayanaswami P, et al. Myasthenia Gravis Consensus Guidance, 2020 Update. Neurology 96(3):114. 2021. https://www.neurology.org/doi/pdfdirect/10.1212/WNL.0000000000011124
- Boullata JI, et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15. 2017. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- AGS Beers Criteria Update Expert Panel. 2023 AGS Beers Criteria. J Am Geriatr Soc 71(7):2052. https://pubmed.ncbi.nlm.nih.gov/37139824/

common.ts also defines PPH (ACOG Practice Bulletin No. 183), which no item uses. It was dropped because c01 case 2 already teaches methylergonovine in hypertension.

## For the reviewer

- 18: the hyponatremia limit. The trend item uses a rise of no more than 10 mEq/L in the first 24 hours, from Spasovski 2014. Some US expert panels use 8 for high-risk clients. The rise in the item passes both limits, so the key holds either way.
- 41: the 2024 hyperglycemic crisis consensus may have raised the potassium floor for starting insulin. The item states no threshold. It says only that 4.2 mEq/L is not low.
- 19: the COWS cutoff for starting buprenorphine is not stated as a number. The refs line says objective withdrawal signs must be present.
- 12: the 2026 AHA/ASA stroke guideline keeps the 185/110 mmHg limit before thrombolysis. I cite it with its DOI because I could not confirm the volume and pages.
- GOLD: the 2026 report came out in November 2025. The year field is 2025.
- 34: the cholinergic crisis bow-tie is rated difficulty 5. Its teaching rests mainly on Lehne. The myasthenia consensus is a supporting source.
- 29: extravasation care follows ONS 2023. An ONS/ASCO extravasation guideline came out in October 2025, but I could not open its full text.
- 40: I cite Lehne and Potter because the ISMP do-not-crush list is no longer on the ISMP site.
- Someone else edited files in src/bank/s16 while I was writing. Several whys in part1 and part2 changed, for example in the bow-tie at 10. I kept those edits because they read as fixes. An `extra.ts` file also appeared in the folder, holding draft items rn-s16-91 and rn-s16-92. I did not write it. It is not imported by index.ts. I left it in place.
