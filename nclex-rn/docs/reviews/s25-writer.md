# Batch s25 writer report

Scope: 50 stand-alone items, rn-s25-01 to rn-s25-50, in src/bank/s25/part1.ts to part5.ts. Shared sources and the meta helper are in common.ts. index.ts joins the five parts into ITEMS. Every item has reviewed: false, version 1 and an empty canada note.

Checks run:

- BATCH=s25 npx vitest run tests/bank.test.ts: 61 of 61 pass. That includes the whole bank near duplicate gate.
- npx tsc --noEmit -p . 2>&1 | grep bank/s25: no output.

## Counts

Client Needs: PA 46, MOC 2 (items 18 and 40), SIPC 2 (items 10 and 30). This matches the plan.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. The trend items are 15 (mc) and 35 (sata).

CJMM step: recognize 8, analyze 10, prioritize 5, generate 7, action 13, evaluate 7.

Difficulty: level 1 has 2, level 2 has 15, level 3 has 19, level 4 has 12, level 5 has 2.

Calculations: item 08 (burn fluid rate) and item 38 (infant weight loss). Each has a calc block. The batch has no PPT items, so the 12 percent calculation rule does not apply.

## MC key positions

There are 27 mc items, counting trend item 15. Keys fall at position 1 in 7 items, position 2 in 6, position 3 in 7 and position 4 in 7. The key is the strict longest option in 3 items: 01, 15 and 22.

## Sources used

- Hinkle, Cheever, Overbaugh. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. This is the same citation the fixture uses.
- Hockenberry, Duffy, Gibbs. Wong's Nursing Care of Infants and Children, 12th edition, 2023. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- American College of Surgeons. ATLS Student Course Manual, 10th edition, 2018. https://store.facs.org/atls-student-course-manual-10th-edition
- Carney et al. Brain Trauma Foundation guidelines, 4th edition, Neurosurgery 80(1):6, 2017. It gives treatment above 22 mmHg. https://pubmed.ncbi.nlm.nih.gov/27654000/
- Verbalis et al. Hyponatremia expert panel, Am J Med 126(10 Suppl 1):S1, 2013. It gives no more than 12 mEq/L in 24 hours for average risk. https://www.amjmed.com/article/S0002-9343(13)00605-0/fulltext
- Consortium for Spinal Cord Medicine and PVA. Autonomic dysreflexia guideline, 2nd edition, 2020. https://pva.org/wp-content/uploads/2021/09/cpg_autonomic-dysreflexia.pdf
- Evans et al. Surviving Sepsis Campaign 2021, Crit Care Med 49(11):e1063. https://pubmed.ncbi.nlm.nih.gov/34605781/
- American Heart Association. 2025 Guidelines Part 7, Adult Basic Life Support. It gives a pulse check of at least 5 and no more than 10 seconds. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001369
- Cartotto et al. ABA burn shock resuscitation guideline, J Burn Care Res 45(3):565, 2024. It gives a starting volume of 2 mL/kg per percent burned. https://pubmed.ncbi.nlm.nih.gov/38051821/
- McDonald et al. IDSA and SHEA C. difficile guideline 2017 update, Clin Infect Dis 66(7):e1, 2018. https://academic.oup.com/cid/article/66/7/e1/4855916
- AHA and ASA. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. It keeps BP below 185/110 mmHg before thrombolysis. https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
- GOLD 2025 Report. https://goldcopd.org/wp-content/uploads/2024/11/GOLD-2025-Report-v1.0-15Nov2024_WMV.pdf
- Tenner et al. ACG acute pancreatitis guideline, Am J Gastroenterol 119(3):419, 2024. https://pubmed.ncbi.nlm.nih.gov/38857482/
- Shaker et al. Anaphylaxis 2020 practice parameter, JACI 145(4):1082. https://www.aaaai.org/Aaaai/media/MediaLibrary/PDF%20Documents/Practice%20and%20Parameters/Anaphylaxis-2020-grade-document.pdf
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- NHLBI. Evidence-Based Management of Sickle Cell Disease, 2014. https://www.nhlbi.nih.gov/sites/default/files/media/docs/Evd-Bsd_SickleCellDis_Rep2014.pdf
- Rushworth, Torpy, Falhammar. Adrenal Crisis, NEJM 381:852, 2019. https://pubmed.ncbi.nlm.nih.gov/31461595/
- Ross et al. ATA hyperthyroidism guideline, Thyroid 26(10):1343, 2016. It advises against salicylates in thyroid storm. https://journals.sagepub.com/doi/10.1089/thy.2016.0229
- ACOG Practice Bulletin 222, 2020. It lists platelets below 100 000 as a severe feature. https://pubmed.ncbi.nlm.nih.gov/32443079/
- ACOG Practice Bulletin 183, 2017. It gives uterine massage for atony. https://journals.lww.com/greenjournal/abstract/2017/10000/practice_bulletin_no__183__postpartum_hemorrhage.56.aspx
- Glauser et al. AES status epilepticus guideline, Epilepsy Currents 16(1):48, 2016. https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48
- Vilstrup et al. AASLD and EASL hepatic encephalopathy guideline, Hepatology 60(2):715, 2014. https://pubmed.ncbi.nlm.nih.gov/25042402/
- Freifeld et al. IDSA febrile neutropenia guideline, Clin Infect Dis 52(4):e56, 2011. https://pubmed.ncbi.nlm.nih.gov/21258094/
- Joglar et al. 2023 ACC/AHA atrial fibrillation guideline, Circulation 149(1):e1, 2024. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193
- Heidenreich et al. 2022 AHA/ACC/HFSA heart failure guideline, Circulation 145(18):e895. https://pubmed.ncbi.nlm.nih.gov/35363499/
- KDIGO AKI guideline, Kidney Int Suppl 2(1):1, 2012. https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf
- Umpierrez et al. Hyperglycemic crises consensus report, Diabetes Care 47(8):1257, 2024. https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A
- Teasdale et al. The Glasgow Coma Scale at 40 years, Lancet Neurol 13(8):844, 2014. https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(14)70120-6/abstract
- Rao et al. 2025 ACC/AHA acute coronary syndromes guideline, Circulation 151:e771. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001309
- Kaplan et al. AASLD portal hypertension and varices guidance, Hepatology 79(5):1180, 2024. https://pubmed.ncbi.nlm.nih.gov/37870298/

## For the reviewer

- Some author lists come from memory and were not checked field by field: Verbalis co-authors, Rao co-authors (O'Donoghue, Ruel), Joglar co-authors (Chung, Armbruster) and Umpierrez co-authors (Davis, ElSayed). The Rushworth issue number (9) also comes from memory. The titles, journals, volumes, first pages and years were checked.
- rn-s25-14: the reference value of a urine output above 0.5 mL/kg/hour as a target of fluid therapy is standard. I did not confirm that the 2024 ACG text states it in those words.
- rn-s25-35: the dextrose threshold of 250 mg/dL and the replacement of potassium below 3.5 mEq/L during treatment come from the ADA hyperglycemic crisis guidance. I did not open the 2024 full text to confirm the exact wording.
- rn-s25-41: I cited the 2025 ACS guideline for oxygen only when SpO2 is below 90%. I did not confirm the section in the full text.
- rn-s25-49: sick day teaching is cited to the 2024 hyperglycemic crisis consensus and Hinkle. Check that the consensus covers sick day rules.
- rn-s25-08: the stem gives the 2 mL/kg per percent prescription so the item matches the 2024 ABA guideline. Older texts teach the 4 mL Parkland formula. The item tests timing from the burn and subtracting fluid already given.
- rn-s25-10: CDC and IDSA allow alcohol hand rub in routine C. difficile care and prefer soap and water in outbreaks. For that reason the item asks about disinfecting equipment, not hand hygiene.
- rn-s25-04: checking the bladder is the next step after sitting the client up. The why says so. Confirm it cannot be read as a second defensible first action.
- rn-s25-05: highlight passage periods sit inside the brackets. That item passes. In rn-s25-26 the periods sit outside the brackets so the passage splits into short sentences for the style gate.
- The web search budget ran out partway through. I verified the last two sources, Vilstrup and Freifeld, through PubMed with WebFetch.
