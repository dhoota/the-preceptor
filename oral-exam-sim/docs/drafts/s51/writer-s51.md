# Writer report: batch s51, Shortness of breath

File: `src/samps/s51/sob.ts`, exported as `SOB_S51_SAMPS` and re-exported from `src/samps/s51/index.ts` as `SAMPS_S51`.

## Count, mix and key positions

- 32 SAMPs, ids sob-16 to sob-47. All `reviewed: false`.
- 104 questions. 94 `single` and 10 `menu`. 24 SAMPs have 3 questions and 8 have 4.
- Menus in 10 SAMPs: sob-18, sob-20, sob-21, sob-26, sob-31, sob-33, sob-37, sob-38, sob-39, sob-45.
- Single key positions, first to fifth: 16, 22, 20, 19, 17 (largest share 23%).
- Key is the single longest option in 19 of 94 single questions (20%).
- `SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 647 passed. `tsc` shows no errors in `samps/s51`.

## Scenarios

None repeats the 15 in `src/samps/s17/sob.ts` (ACE inhibitor angioedema, croup, toddler foreign body, adult severe asthma, hypercapnic COPD, COPD with PE, heart failure with pneumonia, DKA, salicylate, low risk PE, massive PE, PE in pregnancy, Guillain-Barre, tension pneumothorax, anaphylaxis).

sob-16 adult supraglottitis. sob-17 hypertensive acute pulmonary edema. sob-18 severe asthma at 6, PRAM. sob-19 bronchiolitis in a preterm infant. sob-20 GI blood loss anemia. sob-21 myasthenic crisis. sob-22 malignant tamponade. sob-23 age-adjusted D-dimer and new heart failure. sob-24 high pretest PE with eGFR 15. sob-25 retropharyngeal abscess at 3. sob-26 Ludwig angina. sob-27 secondary spontaneous pneumothorax and oxygen induced hypercapnia. sob-28 pneumonia with high flow failure, ROX, CURB-65. sob-29 benzocaine methemoglobinemia. sob-30 carbon monoxide from a generator. sob-31 AF secondary to pneumonia and heart failure. sob-32 ventilated asthma with dynamic hyperinflation. sob-33 smoke inhalation, cyanide. sob-34 adult choking. sob-35 malignant pleural effusion, Light's criteria. sob-36 dyspnea as an anginal equivalent, rural lysis. sob-37 methanol. sob-38 acute chest syndrome. sob-39 Pneumocystis with new HIV. sob-40 pediatric myocarditis. sob-41 PE presenting as panic. sob-42 post-thyroidectomy hematoma. sob-43 intermediate-high risk PE. sob-44 opioid hypoventilation in an older adult. sob-45 transfusion associated circulatory overload. sob-46 neonatal critical coarctation. sob-47 peripartum cardiomyopathy.

Ages run from 12 days to 84 years. Six SAMPs are pediatric. Two use a non-tertiary setting (community hospital in sob-16, rural hospital in sob-36).

## Key feature coverage (questions per key feature)

- KF1 upper versus lower airway: 9
- KF2 broad differential, combined and non-pulmonary causes: 26
- KF3 emergency treatment, invasive versus noninvasive support: 44
- KF4 gauging severity objectively: 17
- KF5 PE testing matched to pretest probability: 8

## Sources, with verification

- Guldfred 2008, acute epiglottitis: https://pubmed.ncbi.nlm.nih.gov/17892608/
- Law 2021, CAFG part 2: https://doi.org/10.1007/s12630-021-02008-z
- Rochwerg 2017, ERS/ATS NIV guideline (already cited elsewhere in the bank)
- McDonagh 2021, ESC heart failure (already in bank)
- Ezekowitz 2017, CCS heart failure (already in bank)
- Ducharme 2008, PRAM: https://www.jpeds.com/article/S0022-3476(07)00786-X/abstract
- Trottier 2021, CPS acute asthma: https://doi.org/10.1093/pch/pxab058
- Friedman 2014, CPS bronchiolitis: https://cps.ca/en/documents/position/bronchiolitis
- Franklin 2018, PARIS: https://doi.org/10.1056/NEJMoa1714855
- Barkun 2019, International Consensus Group (already in bank)
- Wendell 2011, myasthenic crisis: https://doi.org/10.1177/1941875210382918
- Blichfeldt-Lauridsen 2012: https://doi.org/10.1111/j.1399-6576.2011.02558.x
- Adler 2015, ESC pericardial (already in bank)
- Thrombosis Canada, PE diagnosis, version 6 August 2023 (read in full): https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf
- Righini 2014, ADJUST-PE (already in bank)
- Konstantinides 2019 ESC PE, published 2020 (already in bank)
- Meyer 2014, PEITHO: https://doi.org/10.1056/NEJMoa1302097
- Kline 2008, PERC (already in bank)
- Craig 2003, retropharyngeal abscess: https://pubmed.ncbi.nlm.nih.gov/12777558/
- Candamourty 2012, Ludwig angina: https://pubmed.ncbi.nlm.nih.gov/23225990/
- Roberts 2023, BTS pleural (already in bank)
- O'Driscoll 2017, BTS oxygen: Thorax 72 suppl 1
- Rochwerg 2020, high flow guideline: https://doi.org/10.1007/s00134-020-06312-y
- Roca 2019, ROX index: https://pubmed.ncbi.nlm.nih.gov/30576221/
- Lim 2003, CURB-65 (Thorax)
- Skold 2011, methemoglobinemia: https://pubmed.ncbi.nlm.nih.gov/22024786/
- Rose 2017, carbon monoxide: https://pubmed.ncbi.nlm.nih.gov/27753502/
- Stiell 2021, CAEP AF checklist (already in bank)
- Metlay 2019, ATS/IDSA pneumonia: https://pubmed.ncbi.nlm.nih.gov/31573350/
- Leatherman 2015, ventilation in asthma: https://doi.org/10.1378/chest.14-1733
- Gill 2015, smoke inhalation, BJA Educ: https://academic.oup.com/bjaed/article-abstract/15/3/143/279223
- AHA 2025 Part 7, adult BLS: https://doi.org/10.1161/CIR.0000000000001369
- Wong 2019, CCS/CAIC STEMI: https://pubmed.ncbi.nlm.nih.gov/30760415/
- Roberts 2015, EXTRIP methanol: Crit Care Med 43(2)
- Howard 2015, BSH acute chest syndrome: https://doi.org/10.1111/bjh.13348
- NIH OI panel, Pneumocystis: https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis
- Law 2021, AHA pediatric myocarditis: https://doi.org/10.1161/CIR.0000000000001001
- Khalil 2019, newborn critical heart disease: https://tp.amegroups.org/article/view/25237/html
- Iliff 2022, haematoma after thyroid surgery: https://doi.org/10.1111/anae.15585
- Boyer 2012, opioid overdose (already in bank)
- Laureano 2022, Canadian Blood Services transfusion reactions: https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
- Bauersachs 2019, peripartum cardiomyopathy: https://doi.org/10.1002/ejhf.1493

## For the reviewers

- NIH OI panel citation year. The page returned 403 to fetch. I cited 2024. Please confirm the year of the current Pneumocystis section.
- sob-36 q3. The key relies on the 2019 CCS/CAIC advice of half-dose tenecteplase at age 75 or older. I did not read that recommendation in the full text. Please confirm it and the weight bands (60 to 69 kg gives 35 mg).
- sob-27 q2. The BTS 2023 guideline is symptom based. I keyed a small bore drain with admission for a breathless, hypoxemic patient with a secondary pneumothorax, and softened the wording to "advises intervention and admission". Please check it against the 2023 algorithm.
- sob-25 q4 cites the adult CAFG part 2 guideline for a 3-year-old with an obstructing abscess. No Canadian pediatric airway guideline covers this. The principle is the same, but a pediatric source would be better.
- sob-18 q3. The CPS statement puts magnesium doses in a supplementary table I could not read. I used 1 g for 22 kg (about 45 mg/kg), which falls inside the usual 40 to 50 mg/kg range.
- sob-40 q3. The 10 mL/kg bolus with reassessment rests on the AHA statement's advice to be cautious with fluids. Please confirm the statement supports that volume.
- sob-38 q2. I took "no routine corticosteroids" and "continue hydroxyurea" from general practice as well as the BSH guideline. Please confirm both in Howard 2015.
- sob-46 q2 avoids an alprostadil dose, because published starting doses vary (Khalil gives 20 ng/kg/minute, other sources give 50 to 100 ng/kg/minute).
- sob-44 q1 cites the BTS oxygen guideline for oxygen masking hypoventilation. The rest of that SAMP cites Boyer.
- Stems with a numeric urea or D-dimer give the units the explanations use (mmol/L, mcg/L). D-dimer is written as mcg/L FEU equivalent without "FEU".
- I ran one read-only `git log` early on, by mistake. It changed nothing.

## Rework after Lens B overlap review

Five SAMPs repeated scenarios or teaching already committed in other batches. Each was rebuilt from the stem up with the same id. Before writing, I searched `src/samps/` for each new scenario (laryngeal tumour, obesity hypoventilation, negative pressure pulmonary edema, pediatric empyema, and nondiagnostic CT or V/Q imaging for PE) and found no committed SAMP on any of them. All Lens A and Lens B fixes to the other SAMPs are kept.

| Id | Old scenario | New scenario | Key features |
|---|---|---|---|
| sob-23 | PERC failed on age, age-adjusted D-dimer of 690 (repeated chest-pain-32) | PE likely at 3 weeks after cholecystectomy with a prior DVT (Wells 7.5). CT limited by motion, then V/Q, then serial leg ultrasound for a nondiagnostic V/Q | 5, 5, 5 (was 5, 5, 2) |
| sob-33 | House fire, cyanide, hydroxocobalamin (repeated loc-38) | Laryngeal cancer labelled as COPD. Stridor that bronchodilators do not relieve, findings COPD does not explain, awake tracheostomy under local | 1, 2, 3 |
| sob-37 | Methanol from windshield washer fluid (repeated loc-25) | Obesity hypoventilation syndrome with acute on chronic hypercapnia. Bicarbonate shows chronicity, then NIV and oxygen titrated to 88 to 92% | 2, 4, 3 |
| sob-43 | Intermediate-high PE and rescue lysis 6 weeks after arthroplasty (repeated chest-pain-21) | Negative pressure pulmonary edema after a choking episode. CPAP, PaO2 to FiO2 ratio of 120, disposition | 3, 4, 3 |
| sob-46 | Neonatal critical coarctation and alprostadil (close to a case in s50 shock) | Parapneumonic effusion or empyema in a 4-year-old still febrile on amoxicillin. IV antibiotics with drainage, then low flow oxygen | 2, 3, 3 |

Numbers recomputed:
- sob-23: Wells 3 + 1.5 + 1.5 + 1.5 = 7.5.
- sob-37: Henderson-Hasselbalch 6.1 + log(35 / (0.03 x 84)) = 7.24. An acute rise in PaCO2 from 40 to 84 mmHg predicts a bicarbonate of about 28 mmol/L.
- sob-43: PaO2 to FiO2 ratio 72 / 0.6 = 120. The distractors are 72 x 0.6 = 43, 72 / 0.5 = 144 and 72 / 0.4 = 180.
- sob-46: 17 kg, used for no dose.

New sources, each verified by search:
- Eskander 2019, NEJM (https://doi.org/10.1056/NEJMra1811697)
- Mokhlesi 2019, ATS obesity hypoventilation guideline (https://doi.org/10.1164/rccm.201905-1071ST)
- Davidson 2016, BTS/ICS acute hypercapnic respiratory failure guideline (https://pubmed.ncbi.nlm.nih.gov/27026806/)
- Bhattacharya 2016, Chest, negative pressure pulmonary edema
- ARDS Definition Task Force 2012, JAMA, Berlin definition
- Harris 2011, BTS guideline for pneumonia in children (https://pubmed.ncbi.nlm.nih.gov/21903691/)
- Balfour-Lynn 2005, BTS guideline for pleural infection in children

Removed as no longer cited: Righini 2014 (ADJUST-PE), Ezekowitz 2017 (CCS heart failure), Gill 2015, Roberts 2015 (EXTRIP methanol), Khalil 2019, Meyer 2014 (PEITHO).

Effect on counts:
- sob-23 q3 now tests KF5 (a nondiagnostic V/Q scan) instead of KF2. KF2 falls from 26 to 25 and KF5 rises from 8 to 9. Every key feature is still well above 3.
- Single key positions are now 18, 20, 20, 18, 18. The key is the longest option in 22 of 94 single questions (23%).
- tsc is clean for samps/s51, and SAMP_BATCH=s51 samps and samp-quality give 647 passed.

For the reviewers:
- sob-33 q3 keys an awake tracheostomy under local anesthesia and leaves awake flexible intubation out of the options, so that only one answer can be defended.
- sob-43 q2 uses the Berlin oxygenation bands only as a severity measure. The patient does not meet the ARDS definition, and the explanation does not claim that he does.
