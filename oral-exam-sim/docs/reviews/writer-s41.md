# Writer report: batch s41, Infectious diseases

File: `src/samps/s41/infectious-diseases.ts`, exported as `INFECTIOUS_DISEASES_S41_SAMPS` and re-exported from `src/samps/s41/index.ts` as `SAMPS_S41`.

## Count, mix and key positions

- 32 SAMPs, ids infectious-diseases-16 to infectious-diseases-47. All `reviewed: false`.
- 117 questions: 107 `single` and 10 `menu`. No `short` questions.
- 21 SAMPs have 4 questions and 11 have 3 (20, 28, 29, 30, 32, 36, 40, 41, 42, 46, 47).
- 10 SAMPs have one menu question (16, 20, 21, 22, 23, 27, 35, 39, 44, 46), about one in three.
- Single key positions, first to fifth: 19, 25, 21, 22, 20. Highest share 23.4 percent.
- The key is the single longest option in 23 of 107 single questions (21 percent).
- Every explanation is at least 281 characters (median 411).
- Tests: `SAMP_BATCH=s41 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 699 passed. `tsc` shows no errors in `samps/s41`.

## Settings and patients

Infants and children of 9 months, 2, 3, 4 and 7 years (the 4-month-old cousin appears in an update), a 17-year-old, adults from 21 to 64 and older adults from 66 to 86. Tertiary default, with rural hospitals in 29 (pediatric septic shock, ICU 3 hours away), 31 (Fournier gangrene with a surgeon on call from home) and 42 (farm puncture wound). Pregnancy at 14 weeks (41) and day 4 postpartum (30).

## Key feature coverage (infectious-diseases)

| Key feature | Questions |
|---|---|
| 1. Early empiric antibiotics | 5 |
| 2. Recognize and treat septic shock | 7 |
| 3. Host factors | 7 |
| 4. Complications of minor infection | 16 |
| 5. Uncommon infection in vague presentations | 10 |
| 6. Often missed sites | 7 |
| 7. Tailor fever investigations | 19 |
| 8. Empiric antibiotic choice | 22 |
| 9. No antibiotics for viral infection | 7 |
| 10. Post-exposure prophylaxis | 17 |

All questions are tagged to infectious-diseases. No `alsoTopics` were set.

## Scenarios (none repeat the s12 set)

16 fever in HbSS. 17 Ludwig angina. 18 Lemierre syndrome. 19 mononucleosis with splenomegaly in an athlete. 20 acute bronchitis. 21 viral then bacterial rhinosinusitis with red flags. 22 orbital cellulitis with subperiosteal abscess. 23 dengue in a returned traveller with malaria excluded. 24 herpes simplex encephalitis. 25 bioprosthetic valve endocarditis with embolic stroke. 26 Pneumocystis pneumonia with undiagnosed HIV. 27 pneumococcal type septic shock in alcohol use disorder. 28 severe cholangitis. 29 pediatric septic shock with purpura in a rural hospital. 30 postpartum endometritis with suspected invasive group A streptococcus. 31 Fournier gangrene and euglycemic DKA on empagliflozin. 32 infected sacral pressure injury in long term care. 33 PICC related Staphylococcus aureus bacteremia. 34 diabetic foot osteomyelitis. 35 severe then fulminant C. difficile infection. 36 pneumonia presenting as falls and delirium (CURB-65). 37 cat bite flexor tenosynovitis and tetanus. 38 dog bite abroad, rabies PEP after a delay. 39 PEP after sexual assault. 40 measles exposure in infants. 41 varicella exposure in pregnancy. 42 tetanus prone wound in an unimmunized older woman. 43 retropharyngeal abscess. 44 disseminated gonococcal infection. 45 adult epiglottitis. 46 skin abscess and the trimethoprim-sulfamethoxazole NNT. 47 acute HIV infection.

The s12 set already covers bacterial meningitis (including Listeria and meningococcal contacts), febrile neutropenia, necrotizing fasciitis of the thigh, peritonsillar abscess, malaria, TSS, needlestick PEP, bat rabies exposure, influenza, TB, asymptomatic bacteriuria in LTC, spinal epidural abscess, Lyme carditis and PID. I avoided those teaching points.

## Sources, with verification

Checked this session on PubMed (E-utilities), publisher pages or canada.ca:

- Prescott 2026 Surviving Sepsis Campaign adult guideline, Crit Care Med. https://pubmed.ncbi.nlm.nih.gov/41869847/ (summary on https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines)
- Weiss 2026 Surviving Sepsis Campaign pediatric guideline, Pediatr Crit Care Med. https://pubmed.ncbi.nlm.nih.gov/41869844/
- Yawn 2014 sickle cell disease expert panel, JAMA. https://jamanetwork.com/journals/jama/fullarticle/1902235
- Bridwell 2021 Ludwig angina, Am J Emerg Med. https://pubmed.ncbi.nlm.nih.gov/33383265/
- Riordan 2007 Fusobacterium necrophorum and Lemierre syndrome, Clin Microbiol Rev. https://pubmed.ncbi.nlm.nih.gov/17934077/
- Womack 2015 mononucleosis, Am Fam Physician. https://www.aafp.org/pubs/afp/issues/2015/0315/p372.html
- Harris 2016 ACP and CDC acute respiratory infection advice, Ann Intern Med. https://pubmed.ncbi.nlm.nih.gov/26785402/
- Choosing Wisely Canada 2018, Using Antibiotics Wisely (same citation as s12). https://choosingwiselycanada.org/using-antibiotics-wisely-across-canada-2018/
- Desrosiers 2011 Canadian rhinosinusitis guideline. https://pmc.ncbi.nlm.nih.gov/articles/PMC3055847/
- Wong 2018 pediatric orbital cellulitis systematic review. https://pubmed.ncbi.nlm.nih.gov/29859573/
- WHO 2025 guidelines for clinical management of arboviral diseases (paracetamol suggested, NSAIDs recommended against). https://iris.who.int/handle/10665/381804
- CATMAT malaria recommendations (same citation as s12).
- Tunkel 2008 IDSA encephalitis guideline. https://pubmed.ncbi.nlm.nih.gov/18582201/
- Delgado 2023 ESC endocarditis guideline (three sets of cultures 30 minutes apart). https://pubmed.ncbi.nlm.nih.gov/37622656/
- NIH, CDC, HIVMA and IDSA opportunistic infection guideline, Pneumocystis section. https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis
- Metlay 2019 ATS/IDSA CAP guideline. https://pubmed.ncbi.nlm.nih.gov/31573350/
- Lim 2003 CURB-65 derivation (mortality 41.5 percent at a score of 4 checked in the abstract). https://pubmed.ncbi.nlm.nih.gov/12728155/
- Gomi 2018 TG18 antimicrobial therapy. https://pubmed.ncbi.nlm.nih.gov/29090866/
- Miura 2018 TG18 initial management. https://pubmed.ncbi.nlm.nih.gov/28941329/
- Stevens 2014 IDSA skin and soft tissue guideline. https://pubmed.ncbi.nlm.nih.gov/24973422/
- Bersoff-Matcha 2019 Fournier gangrene with SGLT2 inhibitors, Ann Intern Med. https://pubmed.ncbi.nlm.nih.gov/31060053/
- Goguen 2018 Diabetes Canada hyperglycemic emergencies. https://pubmed.ncbi.nlm.nih.gov/29650082/
- High 2009 IDSA fever in long term care (same citation as s12).
- Mermel 2009 IDSA catheter related infection. https://pubmed.ncbi.nlm.nih.gov/19489710/
- Senneville 2023 IWGDF/IDSA diabetes related foot infection. https://pubmed.ncbi.nlm.nih.gov/37779457/
- McDonald 2018 IDSA/SHEA C. difficile guideline. https://pubmed.ncbi.nlm.nih.gov/29462280/
- Johnson 2021 IDSA/SHEA C. difficile focused update. https://pubmed.ncbi.nlm.nih.gov/34164674/
- Kennedy 2016 Kanavel signs, Clin Orthop Relat Res. https://pubmed.ncbi.nlm.nih.gov/26022113/
- Canadian Immunization Guide chapters checked on canada.ca: tetanus (updated June 2026, wound table and TIg 250 units), rabies (20 IU/kg, days 0, 3, 7, 14, RabIg up to day 7 of the series, delayed presentation), measles (MMR within 72 hours at 6 to 11 months, IMIg 0.5 mL/kg under 6 months, doses before 12 months do not count), varicella (updated July 2026, VarIg 125 IU/10 kg to 625 IU, ideally within 96 hours, up to 10 days), hepatitis B (updated February 2026).
- Tan 2025 Canadian HIV PrEP and PEP guideline (72 hours, 28 days, preferred regimens checked in the PMC full text). https://pmc.ncbi.nlm.nih.gov/articles/PMC12680393/
- Workowski 2021 CDC STI treatment guideline. https://pubmed.ncbi.nlm.nih.gov/34292926/
- PHAC gonorrhea guide, updated June 2026 (60 day partner look back). https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea.html
- Craig 2003 pediatric retropharyngeal abscess, Pediatrics. https://pubmed.ncbi.nlm.nih.gov/12777558/
- Guldfred 2008 acute epiglottitis, J Laryngol Otol. https://pubmed.ncbi.nlm.nih.gov/17892608/
- Talan 2016 trimethoprim-sulfamethoxazole for skin abscess (80.5 versus 73.6 percent cure checked in the abstract). https://pubmed.ncbi.nlm.nih.gov/26962903/

## For the reviewers

1. Both Surviving Sepsis guidelines were updated in 2026 and I could not open either full text. Keys in 27, 28, 29 and 30 use points I could confirm in the SCCM summary and that carry over from 2020 and 2021: antibiotics within 1 hour, norepinephrine first in adults, peripheral start of vasopressors, MAP 65 mmHg, serial lactate and capillary refill, source control ideally within 6 hours, 10 to 20 mL/kg boluses in children with reassessment. In 29 q3 the key is epinephrine and norepinephrine is deliberately not an option, because the 2026 pediatric guideline does not prefer one. The SCCM summary also says a MAP of 60 to 65 mmHg is suggested for adults 65 or older. 27 is 56 years old so it does not affect the key, but please confirm.
2. The NIH Pneumocystis page blocked automated access, so the citation gives "Accessed September 2026" as its year. The PaO2 below 70 mmHg threshold, the prednisone schedule and the 72 hour window were confirmed through search result extracts only.
3. 42 q3 (older adults least likely to have completed a primary tetanus series) rests on the Canadian Immunization Guide epidemiology. Please check the wording against the chapter.
4. 30 q2 keys piperacillin-tazobactam with clindamycin for suspected invasive group A streptococcal endometritis with shock. Clindamycin with gentamicin, a classic endometritis regimen, is deliberately not offered.
5. 32 q3 (deep tissue rather than swab culture of an infected pressure injury) and 30 q1 (pelvic examination to find the source) are standard teaching. The cited guidelines support them only in general terms.
6. 36 q3 follows the 2019 ATS/IDSA CAP guideline. A 2026 ATS CAP guideline (Jones, Am J Respir Crit Care Med) covers corticosteroids, antibiotic duration and a few other questions. I kept away from those questions.
7. C. difficile keys use IDSA/SHEA 2018 and 2021. I could not open the AMMI Canada 2018 guideline to cite it.
8. Batch s19 (abdominal pain) also has euglycemic DKA on empagliflozin and fulminant C. difficile. Here they are sub-questions (31 q2, 35 q4) inside different infection cases. The near duplicate stem gate passes.
9. 38 q2 gives the RabIg dose as "1 600 IU" with a space as thousands separator, as the spec requires.
