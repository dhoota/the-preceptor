# Writer report: batch s50 (Shock/dehydration)

File: `src/samps/s50/shock.ts`, exported as `SHOCK_SAMPS_S50` and re-exported by `src/samps/s50/index.ts` as `SAMPS_S50`. All SAMPs are `reviewed: false`.

## Count and mix

- 32 SAMPs, ids shock-16 to shock-47.
- 113 questions: 103 `single`, 10 `menu`. No `short` questions.
- One menu question in each of 10 SAMPs (16, 21, 24, 26, 28, 31, 37, 40, 41, 46).
- 3 to 5 questions per SAMP: one SAMP with 5, 17 with 4, 14 with 3.
- Key positions across the 103 single questions (first to fifth): 19, 20, 23, 23, 18. Highest share 22 percent.
- The key is the single longest option in 25 of 103 single questions (24 percent).
- `SAMP_BATCH=s50 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 683 passed. `tsc` shows no errors in `samps/s50`.

## Scenarios

None repeats the 15 SAMPs in s16. Settings include tertiary, community (16) and rural (28, 38) departments. Ages run from 6 days to 83 years, with 11 cases in children and 7 in adults aged 69 or older.

16 postpartum hemorrhage after a home birth. 17 ruptured ectopic pregnancy. 18 pyloric stenosis. 19 adolescent gastroenteritis that needs IV fluid. 20 duct dependent coarctation in a neonate. 21 salt wasting congenital adrenal hyperplasia. 22 pneumonia with septic shock and escalating vasopressors. 23 febrile neutropenia. 24 necrotizing fasciitis. 25 anaphylactic shock in a child. 26 propranolol overdose. 27 tricyclic overdose. 28 tension pneumothorax in COPD (rural). 29 ruptured abdominal aortic aneurysm. 30 pediatric scald. 31 septic shock in pregnancy. 32 retroperitoneal bleed on warfarin in an older woman. 33 pediatric splenic injury. 34 fulminant myocarditis. 35 right ventricular infarction. 36 BRASH syndrome. 37 variceal hemorrhage. 38 septic shock in a 7-week-old (rural). 39 smoke inhalation with cyanide. 40 penetrating trauma with massive transfusion. 41 severe cholangitis. 42 dialysis catheter sepsis with heart failure. 43 unstable atrial fibrillation. 44 hypernatremic dehydration in a breastfed newborn. 45 iron poisoning. 46 older adult with diarrhea, kidney injury and sick day medicines. 47 acute pancreatitis.

## Key feature coverage (questions per key feature)

| KF | Summary | Questions |
|---|---|---|
| 1 | Subtle shock in children, pregnancy, older adults | 11 |
| 2 | Fluid deficit by age | 10 |
| 3 | Choice of resuscitation fluid | 21 |
| 4 | Septic shock, fluids and antibiotics with reassessment | 15 |
| 5 | Shock types beyond hypovolemia | 16 |
| 6 | Ultrasound, X-ray and ECG to find the cause | 9 |
| 7 | Vasopressor choice by shock type | 11 |
| 8 | Non-fluid therapies and antidotes | 20 |

## Sources

Verified by web search or fetch this session unless marked.

- Le Bas A, et al. Obstetric shock index. Int J Gynaecol Obstet. 2014. https://pubmed.ncbi.nlm.nih.gov/24373705/
- Robinson D, et al. SOGC Guideline No. 431. 2022. https://pubmed.ncbi.nlm.nih.gov/36567097/ (full text blocked, abstract only)
- WOMAN Trial Collaborators. Lancet. 2017. (known trial, not fetched)
- Po L, et al. SOGC Guideline No. 414. 2021. https://pubmed.ncbi.nlm.nih.gov/33453378/
- Walls RM, et al. Rosen's Emergency Medicine. 10th ed. 2023. (already used in s16, not fetched)
- ATLS Student Course Manual. 10th edition. 2018. (already used in s16)
- Holliday MA, Segar WE. Pediatrics. 1957. (classic paper, not fetched)
- Aspelund G, Langer JC. Semin Pediatr Surg. 2007. https://www.sciencedirect.com/science/article/abs/pii/S1055858606000795
- Feld LG, et al. AAP maintenance IV fluids. 2018. https://publications.aap.org/pediatrics/article/142/6/e20183083/37529/Clinical-Practice-Guideline-Maintenance
- TREKK gastroenteritis bottom line. 2025. (already used in s16)
- Cellucci MF. Merck Manual Professional, Dehydration in children. 2025. https://www.merckmanuals.com/professional/pediatrics/dehydration-and-fluid-therapy-in-children/dehydration-in-children
- Yee L. Emerg Med Clin North Am. 2007. https://pubmed.ncbi.nlm.nih.gov/17950133/
- Speiser PW, et al. Endocrine Society CAH guideline. 2018. https://academic.oup.com/jcem/article/103/11/4043/5107759
- Bornstein SR, et al. Endocrine Society primary adrenal insufficiency guideline. 2016. (already used in s16)
- Evans L, et al. Surviving Sepsis Campaign. 2021. Weiss SL, et al. Pediatric Surviving Sepsis Campaign. 2020. (already used in s16)
- Freifeld AG, et al. IDSA febrile neutropenia. 2011. Stevens DL, et al. IDSA skin and soft tissue infection. 2014. Mermel LA, et al. IDSA catheter infection. 2009. (known guidelines, not fetched)
- Cardona V, et al. WAO anaphylaxis guidance. 2020. (already used in s16)
- Cheng A. CPS anaphylaxis in infants and children. 2011. https://academic.oup.com/pch/article/16/1/35/2639430
- Rotella JA, et al. Beta-blocker poisoning review. Clin Toxicol. 2020. https://www.tandfonline.com/doi/full/10.1080/15563650.2020.1752918
- Bruccoleri RE, Burns MM. Sodium bicarbonate for QRS widening. J Med Toxicol. 2016. https://pubmed.ncbi.nlm.nih.gov/26159649/
- Wanhainen A, et al. ESVS aortic aneurysm guideline. 2024. https://pubmed.ncbi.nlm.nih.gov/38307694/
- American Burn Association. ABLS Provider Manual. 2018. (search confirmed the manual and the pediatric formula, not the page)
- SMFM Consult Series #47. Sepsis in pregnancy. 2019. https://pubmed.ncbi.nlm.nih.gov/30684460/
- NAC. Prothrombin complex concentrate recommendations, revised 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- Law YM, et al. AHA pediatric myocarditis statement. 2021. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001001
- Byrne RA, et al. ESC ACS guidelines. 2023. (known guideline, not fetched)
- Farkas JD, et al. BRASH syndrome. J Emerg Med. 2020. https://www.sciencedirect.com/science/article/pii/S0736467920303991
- de Franchis R, et al. Baveno VII. J Hepatol. 2022. (known guideline, not fetched)
- Anseeuw K, et al. Cyanide in fire smoke. Eur J Emerg Med. 2013. https://journals.lww.com/euro-emergencymed/fulltext/2013/02000/cyanide_poisoning_by_fire_smoke_inhalation__a.2.aspx
- Rossaint R, et al. European trauma bleeding guideline, sixth edition. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/
- Miura F, et al. Tokyo Guidelines 2018. Volpicelli G, et al. Lung ultrasound recommendations. 2012. Perera P, et al. RUSH exam. 2010. (known, not fetched)
- Andrade JG, et al. CCS/CHRS atrial fibrillation guidelines. 2020. (known guideline, not fetched)
- Lavagno C, et al. Breastfeeding-associated hypernatremia. J Hum Lact. 2016. https://pubmed.ncbi.nlm.nih.gov/26530059/
- Chang TP, Rangan C. Iron poisoning review. Pediatr Emerg Care. 2011. https://pubmed.ncbi.nlm.nih.gov/21975503/
- Diabetes Canada. Chronic kidney disease in diabetes chapter. 2018. (search confirmed the sick day list is part of the 2018 guideline)
- Semler MW, et al. SMART trial. 2018. de-Madaria E, et al. WATERFALL trial. 2022. (known trials, not fetched)

## For the reviewers

- shock-16 q2 and q4: I could not open the full SOGC 431 text. The ordering of uterotonics and the menu keys follow standard practice. Please check them against the guideline.
- shock-18 q3: the key is D5 0.9% saline with KCl, following the AAP isotonic maintenance guideline, which applies from 28 days of age. Older pyloric stenosis protocols use D5 0.45% saline, so I left that fluid out of the options.
- shock-19 q1: moderate dehydration is taken as 5 to 6 percent in an adolescent (Merck), against 10 percent in infants. I set the patient's age at 13 so that the adolescent figures clearly apply.
- shock-21 q2: the hydrocortisone dose is 50 mg/m2 (Bornstein). The question tests the choice of drug, not a dose, because infant protocols vary (some give 25 mg).
- shock-27 q4: the target pH of 7.45 to 7.55 comes from common practice as summarized by Bruccoleri. Please confirm the wording.
- shock-30: ABLS 2018 gives 3 mL/kg/%TBSA for children. Some sources still accept 4 mL/kg, so 2 000 mL is not an option.
- shock-34 q3: the AHA statement does not rank vasoactive agents. The key (low-dose epinephrine for pediatric cardiogenic shock with hypotension) is a clinical judgment.
- shock-31 q3: the reasons for avoiding fluoroquinolones and tetracyclines in pregnancy cite Rosen, not SMFM.
- shock-38 q3: the guideline supports peripheral or intraosseous vasoactive infusion. Please check the claim about the umbilical vein at 7 weeks.
- shock-42 q1: the Surviving Sepsis guideline does not address anuric heart failure directly. "Norepinephrine early, cautious fluid" is a judgment based on its advice to individualize fluid.
- shock-26 menu: glucagon is left out of the options on purpose, because the evidence for it is weak (Rotella).
- Rosen's 10th edition is cited without a chapter.
