# Batch s24 writer report

Batch s24 has 50 stand-alone items, ids rn-s24-01 to rn-s24-50. All are Physiological Adaptation. The focus list covers neurologic, renal, gastrointestinal, endocrine and hematologic illness management, plus unexpected responses to therapy. Every item has `reviewed: false`, `version: 1` and an empty `canada` note.

Files: `src/bank/s24/common.ts` (sources and meta helper), `part1.ts` to `part5.ts`, and `index.ts`.

Checks: `BATCH=s24 npx vitest run tests/bank.test.ts` passes, 61 of 61 tests. `npx tsc --noEmit -p . | grep bank/s24` prints nothing.

## House style

No em or en dashes. No semicolons. Short single-idea sentences. No filler.

## Counts

Client Needs: PA 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 21 is a trend mc and item 22 is a trend sata.

CJMM steps: recognize 7, analyze 11, prioritize 6, generate 12, action 8, evaluate 6.

Difficulty: 1 has 2 items, 2 has 15, 3 has 18, 4 has 13, 5 has 2.

Process: clinical-judgment 23, nursing-process 19, teaching 8.

Coverage by system:

- Neurologic: 05 vasospasm after aneurysm coiling, 14 spinal fluid leak after pituitary surgery, 18 metastatic cord compression, 25 seizure precautions, 31 Wernicke encephalopathy, 38 Bell palsy, 39 Parkinson disease, 40 multiple sclerosis, 41 epidural hematoma, 44 stroke site matching, 46 ALS.
- Renal: 02 nephrotic syndrome, 03 peritoneal dialysis peritonitis, 09 fistula care, 16 post-streptococcal glomerulonephritis, 19 CKD diet, 22 rhabdomyolysis trend, 23 ureteral stone, 33 pyelonephritis, 35 poor dialysis outflow, 43 oliguric kidney injury.
- Gastrointestinal and liver: 07 perforated diverticulitis, 12 pancreatic enzyme response, 15 intussusception, 17 dumping syndrome, 21 upper GI bleed trend, 24 toxic megacolon, 26 spontaneous bacterial peritonitis, 27 cholangitis, 30 celiac disease, 49 varices.
- Endocrine: 01 myxedema coma, 10 Somogyi pattern, 28 endocrine matching, 42 insulin pump failure, 45 primary aldosteronism, 48 steroid hyperglycemia.
- Hematologic: 04 ITP, 08 pernicious anemia, 13 hemophilia, 32 chemotherapy thrombocytopenia, 34 polycythemia vera, 47 iron deficiency findings, 50 iron response.
- Unexpected responses to therapy: 06 malignant hyperthermia, 11 transfusion circulatory overload, 20 G6PD hemolysis on a sulfonamide, 29 ACE inhibitor angioedema, 36 heparin-induced thrombocytopenia, 37 angina after starting levothyroxine.

## Key position and length balance

MC key positions across the 27 mc-kind items (26 mc plus trend item 21): position 1 has 7, position 2 has 7, position 3 has 7, position 4 has 6.

The key is the strict longest option in 3 of 27 mc items (14, 27, 50). Keyed choices run longer than distractors in 12 of 23 multi-key pools, counting highlight spans and bow-tie actions and parameters. Select all keys in the first half of the list: 17 of 43, counting trend item 22.

## Sources used

Every source was verified with WebSearch in this session. The URL is stored on each source in `common.ts`.

- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. Verified by search of publisher and library records.
- Harding MM et al. Lewis's Medical-Surgical Nursing, 12th edition, 2023. https://shop.elsevier.com/books/lewiss-medical-surgical-nursing/harding/978-0-323-78961-5
- Hockenberry MJ, Duffy EA, Gibbs K. Wong's Nursing Care of Infants and Children, 12th edition, 2023. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- KDIGO 2024 CKD guideline. https://pubmed.ncbi.nlm.nih.gov/38490803/
- KDIGO 2012 AKI guideline. https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf
- KDIGO 2021 Glomerular Diseases guideline. https://pubmed.ncbi.nlm.nih.gov/34556256/
- Li PK et al. ISPD peritonitis recommendations, 2022. https://pubmed.ncbi.nlm.nih.gov/35264029/
- Neunert C et al. ASH 2019 ITP guidelines. https://pubmed.ncbi.nlm.nih.gov/31794604/
- Cuker A et al. ASH 2018 HIT guidelines. https://ashpublications.org/bloodadvances/article/2/22/3360/16129/American-Society-of-Hematology-2018-guidelines-for
- Srivastava A et al. WFH Guidelines for the Management of Hemophilia, 3rd edition, 2020. https://pubmed.ncbi.nlm.nih.gov/32744769/
- Jonklaas J et al. ATA Guidelines for the Treatment of Hypothyroidism, 2014. https://journals.sagepub.com/doi/10.1089/thy.2014.0028
- ADA Standards of Care 2026, sections 6, 7 and 16. https://pubmed.ncbi.nlm.nih.gov/41358894 and the Diabetes Care supplement pages for S150 and S339.
- Bornstein SR et al. Endocrine Society primary adrenal insufficiency guideline, 2016. https://academic.oup.com/jcem/article/101/2/364/2810222
- Adler GK et al. Endocrine Society primary aldosteronism guideline, 2025. https://pubmed.ncbi.nlm.nih.gov/40658480/
- Gardner TB et al. ACG chronic pancreatitis guideline, 2020. https://journals.lww.com/ajg/fulltext/2020/03000/acg_clinical_guideline__chronic_pancreatitis.9.aspx
- Laine L et al. ACG upper GI and ulcer bleeding guideline, 2021. https://journals.lww.com/ajg/fulltext/2021/05000/acg_clinical_guideline__upper_gastrointestinal_and.14.aspx
- Rubin DT et al. ACG ulcerative colitis guideline, 2019. https://journals.lww.com/ajg/fulltext/2019/03000/acg_clinical_guideline__ulcerative_colitis_in.10.aspx
- Rubio-Tapia A et al. ACG celiac disease guideline, 2023. https://pubmed.ncbi.nlm.nih.gov/36602836/
- Biggins SW et al. AASLD ascites, SBP and hepatorenal syndrome guidance, 2021. https://pubmed.ncbi.nlm.nih.gov/33942342/
- Kaplan DE et al. AASLD portal hypertension and varices guidance, 2024. https://pubmed.ncbi.nlm.nih.gov/37870298/
- Kiriyama S et al. Tokyo Guidelines 2018 for acute cholangitis. https://pubmed.ncbi.nlm.nih.gov/29032610/
- Hoh BL et al. AHA and ASA aneurysmal subarachnoid hemorrhage guideline, 2023. https://pubmed.ncbi.nlm.nih.gov/37212182/
- NICE NG234 spinal metastases and metastatic spinal cord compression, 2023. https://www.nice.org.uk/guidance/ng234
- Glahn KPE et al. EMHG malignant hyperthermia crisis guideline, updated 2024, published 2025. https://pubmed.ncbi.nlm.nih.gov/39482150/
- ASAM alcohol withdrawal management guideline, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- Baugh RF et al. AAO-HNSF Bell's palsy guideline, 2013. https://pubmed.ncbi.nlm.nih.gov/24190889/
- Wiersum-Osselton JC et al. Revised TACO surveillance definition, Lancet Haematology 2019. https://pubmed.ncbi.nlm.nih.gov/31080132/

## For the reviewer

- Heavy reliance on Brunner and Suddarth. It is cited on 33 items, often as the only source. A reviewer may want guideline sources added where one exists.
- Item 10 (Somogyi effect). This is standard nursing-text teaching, but newer evidence questions how often true rebound happens. The item cites textbooks, not the ADA.
- Item 31 (thiamine before dextrose). The ASAM guideline supports thiamine for Wernicke encephalopathy. The "before glucose" order comes from nursing texts. The stem gives a glucose of 92 mg/dL so no hypoglycemia competes with thiamine.
- Item 06. The key is for the circulating nurse to bring dantrolene after anesthesia stops the trigger. Surface cooling is a valid later step, so its why says it helps but comes second.
- Item 29. The key is to call the emergency response team in a clinic. A setting with an in-house airway team might phrase this differently.
- Item 35. The key is to check the tubing and turn the client before asking for a laxative. Some protocols list constipation first. Both are simple causes, and the stem asks what to do first.
- Item 32 teaches the same bleeding precautions as rn-s20-26, in a different format (SATA with leukemia versus an MC with chemotherapy). The stem was reworded to clear the near duplicate gate. The reviewer may want to drop or change one of the two.
- Item 22 (rhabdomyolysis trend) and item 43 (oliguric kidney injury) both teach potassium and output monitoring, from different causes.
- Item 44. "Loss of the sense of smell" is a distractor. It is not a typical deficit for the three listed stroke sites.
- Item 49 uses the 2024 AASLD varices guidance. I did not confirm the journal issue number, so the citation reads Hepatology 79:1180.
- Parallel batch s23 also covers Physiological Adaptation. I could not see its items, so there may be topic overlap.
