# Writer report, batch s25 (Asthma/COPD)

File: `src/samps/s25/asthma-copd.ts`, exported as `ASTHMA_COPD_S25` and re-exported from `src/samps/s25/index.ts` as `SAMPS_S25`. All SAMPs are `reviewed: false`.

## Count, mix and key positions

- 32 SAMPs, ids asthma-copd-16 to asthma-copd-47.
- 111 questions. 100 `single` and 11 `menu`. 15 SAMPs have 4 questions and 17 have 3.
- 11 SAMPs carry one menu question each: 25, 28, 33, 34, 35, 39, 40, 42, 43, 46 and 47. Menus select 2, 3 or 4 (42 q2 selects 4).
- Single key positions, first to fifth: 21, 22, 22, 19, 16. The highest share is 22 percent.
- The key is the single longest option in 10 of 100 singles (10 percent). Long keys were shortened by moving the qualifier into the explanation, not by padding distractors.
- Every explanation is at least 200 characters and opens with the deciding finding.
- `tsc` shows no errors in s25. `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 675 of 675. A full `npx vitest run` shows failures only in s46, s51 and s53, which belong to other writers.

## Key feature coverage

- KF1, mimics of a first wheeze: 20 questions. Infant bronchiolitis (16), inducible laryngeal obstruction (17), central airway tumour labelled as COPD (18), NSAID-exacerbated disease (27 q1), timolol eye drops (29 q1), chlorine gas (30 q1), myocarditis in a child (34 q1), opioid hypoventilation in COPD (37 q1) and pulmonary embolism with a normal peak flow (44).
- KF2, history of ICU care, recent steroids and frequent visits: 6 questions (20 q4, 23 q4, 27 q4, 40 q2, 43 q1, 46 q1).
- KF3, objective severity: 7 questions (16 q3, 33 q1 GOLD Rome criteria, 39 q1 GINA preschool severity, 41 q1, 42 q1 normal PaCO2, 45 q1 acute on chronic acidosis, 46 q2 percent of best peak flow).
- KF4, coexisting problems: 19 questions. Multifocal atrial tachycardia, salbutamol lactic acidosis, pneumomediastinum, secondary pneumothorax, chemical pneumonitis, heart failure with COPD, myocarditis, pneumonia with asthma, and antibiotics when NIV is needed.
- KF5, treat before the diagnosis is confirmed: 11 questions.
- KF6, systemic and inhaled corticosteroids: 14 questions.
- KF7, tiring and noninvasive support: 16 questions, including NIV as the ceiling of care, NIV failure before air transfer, pediatric high-flow oxygen, bilevel settings and post-intubation hyperinflation.
- KF8, discharge with exertion testing, objective measures, technique and follow-up: 18 questions.

The 15 SAMPs in s04 were read. Their scenarios were not reused: hypercapnia from high-flow oxygen, the toddler foreign body, heart failure without lung disease, tension pneumothorax, PRAM scoring, the roofer discharge, COPD pneumonia, near arrest with induction and ventilator strategy, pregnancy, postoperative PE in COPD, the nonadherent teen, anaphylaxis, COPD discharge predictors and the tiring patient on BiPAP.

## Sources

- Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. Full PDF read at https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf (chapter 9 acute care text, Box 9-1 red flags, Box 9-7 discharge, chapter 12 preschool severity, steroid doses, O2 targets, SABA toxicity, AERD, beta blockers, inhaler shaking).
- TREKK. Bottom Line Recommendations. Asthma exacerbations for children aged 12 months and older. Version 2.1. 2024. Full PDF read at https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf
- TREKK. Pediatric severe asthma exacerbation algorithm. Version 2.0. 2024. Full PDF read at https://cms.trekk.ca/wp-content/uploads/2024/02/2024-02-19_Asthma-Algorithm_v2.0-FINAL.pdf (doses, PRAM table, stepwise support, the methylprednisolone and cow's milk warning).
- GOLD. Global Strategy for COPD. 2026 report. Full PDF read at https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf (chapter 4, Rome severity, prednisone 40 mg for 5 days, antibiotic criteria, air-driven nebulizers, NIV, discharge).
- Bourbeau J, et al. 2023 CTS guideline on pharmacotherapy in stable COPD. Chest. 2023. Abstract checked at https://pubmed.ncbi.nlm.nih.gov/37690008/
- Rochwerg B, et al. ERS/ATS NIV guideline. 2017. https://pubmed.ncbi.nlm.nih.gov/28860265/
- O'Driscoll BR, et al. BTS oxygen guideline. Thorax. 2017. https://pubmed.ncbi.nlm.nih.gov/28507176/
- Friedman JN, et al. CPS bronchiolitis statement. 2014, updated 2021. Recommendations read at https://cps.ca/en/documents/position/bronchiolitis
- Halvorsen T, et al. ERS/ELS statement on inducible laryngeal obstruction. 2017. https://pubmed.ncbi.nlm.nih.gov/28889105/
- Ernst A, et al. Central airway obstruction. Am J Respir Crit Care Med. 2004. https://pubmed.ncbi.nlm.nih.gov/15187010/
- Brenner B, et al. Intubation and mechanical ventilation of the asthmatic patient. J Emerg Med. 2009. https://pubmed.ncbi.nlm.nih.gov/19683662/
- Thrombosis Canada. PE diagnosis clinical guide. Version 30 April 2025. Full PDF read at https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf
- Roberts ME, et al. BTS pleural guideline. 2023. Ezekowitz JA, et al. CCS heart failure update. 2017. Walls RM, et al. Rosen's Emergency Medicine. 10th ed. 2023. These are the citations already used in s04.

## For the reviewers

1. The web search budget ran out early. PubMed records confirmed that the journal citations exist, but only the GINA, GOLD, TREKK, CPS and Thrombosis Canada texts were read in full. Claims cited to ERS/ELS (17), Ernst (18), Brenner (26), BTS pleural (24 q1, q2) and CCS (31 q2, q4) come from memory of those papers.
2. Rosen's is cited for 17 questions and could not be checked against the text. This includes the exertion test items (28 q1, 32 q1), MAT treatment (19), pneumomediastinum (23), chlorine (30), myocarditis ultrasound (34 q2), naloxone titration (37), the acid-base arithmetic (45 q1) and the starting bilevel settings of IPAP 10 and EPAP 5 (45 q3). No verified Canadian source names an exertion test before asthma or COPD discharge, although it is a CFPC key feature.
3. 31 q2 keys NT-proBNP over BNP in a patient taking sacubitril-valsartan and attributes this to the CCS 2017 update. 31 q4 attributes an IV furosemide dose of at least the home oral dose to the same guideline. Please confirm both.
4. 20 q2 uses the TREKK warning that methylprednisolone 40 mg vials are contraindicated in cow's milk protein allergy. The distractor dose (28 mg) would come from that vial.
5. 28 q3 cites the CTS 2023 guideline. The triple therapy key is from that guideline. Pulmonary rehabilitation within 4 weeks is from GOLD and Criner 2015 (ACCP and CTS). A question can cite only one source, so the rehabilitation point is not covered by the cited source.
6. 46 q3 states that stopping prednisone after eight months of daily use risks adrenal insufficiency. GINA, the cited source, does not say this.
7. 27 q3 keys acetaminophen 650 mg for a patient with aspirin-exacerbated respiratory disease. A lower dose was chosen because some patients react to high-dose acetaminophen.
8. 24 q2 and q1 rely on BTS 2023 for a small-bore drain and admission in secondary pneumothorax. 24 q3 targets oxygen at 88 to 92% because her pCO2 is raised, even though high-flow oxygen speeds pneumothorax resolution in patients who are not at risk of hypercapnia.
9. 35 q2 keys ICS-formoterol maintenance and reliever after a mild exacerbation in a patient who used it as needed only. This follows the GINA 2026 advice that an ED visit should prompt a step up.
10. 17 of 32 SAMPs have 3 questions. The brief says usually 4 or 5.
11. I ran one read-only `git status` by mistake while listing files. No other git command was run and nothing was changed.
