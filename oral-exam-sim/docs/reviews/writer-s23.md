# Writer report, batch s23 (Anaphylaxis)

File: `src/samps/s23/anaphylaxis.ts`, exported as `ANAPHYLAXIS_S23` and re-exported from `src/samps/s23/index.ts` as `SAMPS_S23`. All SAMPs are `reviewed: false`.

## Count, mix and key positions

- 32 SAMPs, ids anaphylaxis-16 to anaphylaxis-47.
- 112 questions. 103 `single` and 9 `menu`. 16 SAMPs have 4 questions and 16 have 3.
- 9 SAMPs (16, 17, 22, 23, 24, 27, 31, 34, 42) carry one menu question each. Menus select 2 or 3.
- Single key positions, first to fifth: 22, 21, 23, 20, 17. The highest share is 22 percent.
- The key is the single longest option in 30 of 103 singles (29 percent).
- `tsc` shows no errors in s23. `SAMP_BATCH=s23 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 679 of 679.

## Key feature coverage

- KF1, anaphylaxis in the shock differential: 8 questions. These are 16 q1 (crash after a wasp sting), 17 q1 (hypotension after RSI), 22 q1 (sting syncope with no hives), 24 q1 (latex catheter in a febrile child), 26 q1 (cardiac arrest), 30 q1 (cold water), 31 q1 (older woman found slumped) and 34 q1 (ketorolac given for renal colic).
- KF2, diagnosis with partial features and mimics: 25 questions.
- KF3, epinephrine, airway, access and fluids: 37 questions.
- KF4, discharge, autoinjector, rebound and follow-up: 42 questions.

The existing 15 in s03 were read, and their scenarios were not reused. New ground includes trauma, perioperative anaphylaxis with tryptase timing, infants, vaccine laryngeal anaphylaxis, alpha-gal, beta blockers and ACE inhibitors in sting allergy, mastocytosis features, latex, a refractory epinephrine infusion in a rural site, anaphylactic arrest, the vancomycin infusion reaction, large local reactions, cold anaphylaxis, NSAID anaphylaxis, hereditary angioedema, benzathine penicillin, shellfish and contrast, dental epinephrine effects, immunotherapy, capacity to leave, anticoagulation and a remote nursing station.

## Sources

- Golden DBK, et al. Anaphylaxis. A 2023 practice parameter update. Ann Allergy Asthma Immunol. 2024. Full PDF read at https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Anaphylaxis-Practice-Paramaters-2023.pdf (criteria, Table 8, Table 10, recommendations 1 to 48).
- Shaker MS, et al. Anaphylaxis. A 2020 practice parameter update. J Allergy Clin Immunol. 2020. Full PDF read at https://www.aaaai.org/Aaaai/media/MediaLibrary/PDF%20Documents/Practice%20and%20Parameters/Anaphylaxis-2020-grade-document.pdf (biphasic risk, observation, steroids and antihistamines, premedication).
- Cardona V, et al. WAO anaphylaxis guidance 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/ (dose, site, position, fluids, glucagon).
- Resuscitation Council UK. Emergency treatment of anaphylaxis. 2021. Full PDF read (IM doses, fluids, posture, infusion protocol, glucagon, tryptase timing, observation).
- Li LDX, et al. CSACI transition recommendations on autoinjectors. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/ (0.15 mg under 25 kg, 0.3 mg from 25 kg).
- Halbrich M, et al. CSACI position statement on autoinjectors in children under 15 kg. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4485331/
- Waserman S, Cruickshank H. Updates in epinephrine guidelines. Canadian Allergy and Immunology Today. 2025. https://canadianallergyandimmunologytoday.com/en/article/view/5-1-Waserman_et_al (EpiPen is the only premeasured device sold in Canada).
- Public Health Agency of Canada. Canadian Immunization Guide, anaphylaxis after vaccination. Updated 2021. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-2-vaccine-safety/page-4-early-vaccine-reactions-including-anaphylaxis.html
- Canadian Paediatric Society anaphylaxis statement, 2011, reaffirmed 2018. Trottier ED, et al. CPS acute asthma statement, 2021. Khan DA, et al. Drug allergy parameter, 2022. Pouessel G, et al. Refractory anaphylaxis, 2024. AHA 2025 Part 10. ACR Manual on Contrast Media, 2025. These are the same citations already used in s03.
- Golden DBK, et al. Stinging insect hypersensitivity parameter 2016. Ann Allergy Asthma Immunol. 2017.
- Betschel S, et al. The International/Canadian Hereditary Angioedema Guideline. Allergy Asthma Clin Immunol. 2019.
- Government of Ontario. Sabrina's Law, 2005. S.O. 2005, c. 7. https://www.ontario.ca/laws/statute/05s07

## For the reviewers

1. The web search budget ran out midway. The stinging insect parameter (29, 16 q4, 22 q4), the hereditary angioedema guideline (37), Sabrina's Law (40 q2) and the Khan drug allergy parameter (28, 31 q4, 34 q3, 38 q4, 41) were cited from memory and not fetched. The Ontario e-Laws page did not render. Please check these against the text.
2. 17 q2 keys IM epinephrine in an intubated, monitored patient. Titrated IV epinephrine by an experienced physician is also defensible, so no small IV bolus option was offered. The only IV option is a 1 mg push.
3. 42 q1 keys 0.44 mg IM for a 44 kg 13-year-old (0.01 mg/kg, maximum 0.5 mg, per CPS and CIG). The 2023 JTF text gives a maximum of 0.3 mg for children. No 0.3 mg option was offered.
4. 25 q2 keys a starting rate of 10 mcg/minute from the RCUK protocol for a hypotensive adult (1 mL/kg/hour of 10 mcg/mL at 60 kg). Other protocols start at 1 to 4 mcg/minute. The distractors are 0.5, 50, 100 and 500 mcg/minute, all outside both ranges.
5. 33 q1 keys cetirizine and observation for isolated hives after a known allergen. Some Canadian school guidance advises epinephrine for any symptom after known exposure, so epinephrine was not offered as an option.
6. 32 q2 (longer needle for thick thigh tissue) has no specific Canadian source. It cites the JTF 2023 advice that needle length is a factor in device choice.
7. 20 tests alpha-gal allergy. It is still uncommon in Canada.
8. Autoinjector questions (18, 21, 23, 27, 40) assume that only EpiPen 0.15 mg and 0.3 mg are sold in Canada (Waserman 2025). A nasal epinephrine product or a 0.5 mg device may be approved later. If so, 21 q4 and 27 q3 need review.
9. 39 q3 attributes cross-reactivity among crustaceans to tropomyosin. That detail does not come from the cited ACR manual, which supports only the contrast point.
10. 46 cites the Canadian Immunization Guide for pediatric IM dosing and repeat interval. The guide is written for vaccine reactions.
11. The CMAJ 2025 review by Jeimy, Huan and Abrams returned 403 and is not cited.
12. The 15-kg CSACI title uses "<". The citation writes "under 15 kg" to meet the symbol rule.
13. Half the SAMPs have 3 questions. The brief says usually 4 or 5.
