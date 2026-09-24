# Batch c18 adversarial review

Scope: every file in `src/bank/c18/`. That is `case1.ts` to `case5.ts` (30 case items), `helpers.ts`, `index.ts` and `extra.ts`. The file `extra.ts` holds 2 stand-alone items, rn-c18-9 and rn-c18-8, that `index.ts` does not import. Both were reviewed in full and run through every item gate from a scratch script outside `tests/`. Both now pass.

Both lenses were applied to every stem, choice, why and rationale sentence. Every number was recomputed with a script: the temperature pairs, glucose and creatinine SI pairs, the BP drops (30/14 and 6/2 mmHg), the weight change (3 kg) and 10°C as 50°F. All agree.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c18-9 (extra.ts) | rationale | Said "this client has asthma". The stem gives hypertension only. Propranolol for a client with asthma would itself be the error. Rewrote the rationale around the key (sudden stopping) and kept the wheezing point | B | high |
| rn-c18-8 (extra.ts) | options[2], rationale | "Elevate the bed head 30 degrees" was the same action as the key "Raise the head of the bed". Its own why said so. Two defensible keys. Replaced with "Slow the feeding rate by half" and extended the rationale to cover the distractors | A | high |
| rn-c18-4-3 | blanks[0] option 1 why | Said "The mother does not read English". The case never says that. It says the family speaks Dari. Why now rests on that fact | B | high |
| rn-c18-5-3 | blanks[1] option 3 why | Said an A1C of 6.2% "shows low average glucose". 6.2% is near normal, not low. Why now says it reflects 3-month average glucose and is not a fall cue | A | medium |
| rn-c18-3-5 | sources | The DailyMed setid cited is a Lupin 75 mg and 150 mg tablet label revised 2025, not a 2024 label for the 100 mg dose prescribed. Replaced with the Pfizer Vibramycin and Vibra-Tabs label (100 mg), revised 08/2025, which states the fluid, bedtime and antacid advice | A | high |
| rn-c18-3-6 | sources | The CDC overview page is dated 2024, not 2025. It does not state the two-condom rule the item teaches. Year corrected and the CDC "How to Use a Condom" page (2024) added, which says not to use more than one condom at a time | A | high |
| rn-c18-4-5 | sources | CDC Vaccine Storage and Handling Toolkit cited as 2024. The current edition is July 2026. Updated. Its excursion steps (label "Do Not Use", keep at correct temperature, do not discard, contact the manufacturer) still match the key | A | high |
| rn-c18-4-2 | sources | CDC Refugee Health Immunizations page cited as 2025. The page is last reviewed 2024. Year corrected | A | high |
| rn-c18-4-4 | sources | Same refugee guidance year error as 4-2 | A | high |
| rn-c18-1-5 | sources | The acid corn plaster and hot soak teaching could not be traced in the ADA 2026 section, whose full text is not open. Added the IWGDF 2023 prevention guideline, which advises against chemical agents or plasters for callus and against soaking the feet | A | medium |
| rn-c18-1-1 | sources | The callus hemorrhage as a pre-ulcerative sign and the barefoot risk now also cite the IWGDF 2023 guideline, which states both | A | low |
| rn-c18-2-2 | rationale | "A mother with preeclampsia and a BMI over 30 are moderate risk factors" read as if the client were the mother. Now "Her mother's preeclampsia" | B | low |

## Key changes

None.

## Items checked with no defect found

Every other item in cases 1 to 5 was checked against its source. Points confirmed:

- 1-2 and 1-6: UACR 30 mg/g or more on 2 of 3 specimens, BP goal below 130/80 mmHg, A1C goal below 7% (ADA 2026).
- 1-4: angioedema, potassium salt substitutes, light-headedness in the first days, NSAIDs reducing effect and kidney function (Zestril label, Rev. 07/2017, the newest FDA label for NDA 019777).
- 2-2, 2-3 and 2-4: USPSTF 2021 high and moderate preeclampsia risk factors and aspirin 81 mg daily after 12 weeks. The page shows no update in progress. Rho(D) at 28 weeks (ACOG PB 181). MMR after birth for a nonimmune mother (ACIP 2013).
- 2-6: litter, gardening gloves, raw meat for cats and cooking to 71°C (160°F) with a thermometer (FDA 2018).
- 3-2, 3-4 and 3-5: Gram-negative intracellular diplococci diagnose gonorrhea in symptomatic men. Ceftriaxone 500 mg IM for under 150 kg. Doxycycline 100 mg twice daily for 7 days if chlamydia is not excluded. No test of cure for urogenital infection. Retest at 3 months. Partners from 60 days. Abstain 7 days. All 50 states allow minors to consent to STI care (CDC 2021).
- 4-2: hepatitis B final dose at 24 weeks or older, DTaP dose 5 not needed if dose 4 is at 4 years or older, final IPV at 4 years or older, Hib catch-up not required at 60 months or older, rotavirus maximum 8 months 0 days, MMR 4 weeks apart (CDC schedule notes). Measles doses before 1 year do not count (CDC refugee guidance and Pink Book chapter 2).
- 4-6: salicylates avoided 6 weeks after Varivax. Both Varivax and M-M-R II contain hydrolyzed gelatin.
- 5-1 and 5-6: orthostatic hypotension is a fall of 20 mmHg systolic or 10 mmHg diastolic within 3 minutes (Freeman 2011).
- 5-4: metformin contraindicated below eGFR 30 (FDA 2016).
- 5-5: 15 to 20 g glucose, recheck in 15 minutes, then a meal (ADA 2026).

## Sources verified

- ADA Standards of Care 2026, sections 6, 10, 11 and 12, Diabetes Care 49(Suppl 1), pages S132, S216, S246, S261. Confirmed through the PubMed E-utilities record for each. https://pubmed.ncbi.nlm.nih.gov/41358894/ https://pubmed.ncbi.nlm.nih.gov/41358899/ https://pubmed.ncbi.nlm.nih.gov/41358881/ https://pubmed.ncbi.nlm.nih.gov/41358886/
- Bus SA et al. IWGDF 2023 prevention guideline. Diabetes Metab Res Rev 40(3):e3651, 2024. Full text read. https://pubmed.ncbi.nlm.nih.gov/37302121/ and https://iwgdfguidelines.org/wp-content/uploads/2023/07/IWGDF-2023-02-Prevention-Guideline.pdf
- Zestril label, Rev. 07/2017, manufactured by AstraZeneca UK, distributed by Almatica. Full text read. https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/019777s076lbl.pdf
- ACOG PB 233, Obstet Gynecol 138(2):e55, 2021. https://pubmed.ncbi.nlm.nih.gov/34293770/
- ACOG PB 181, Obstet Gynecol 130(2):e57, 2017. PubMed 28742673. The ACOG page returned 402.
- ACOG PB 189, Obstet Gynecol 131(1):e15, 2018. PubMed 29266076. The ACOG page returned 402.
- USPSTF aspirin and preeclampsia, 2021. https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/low-dose-aspirin-use-for-the-prevention-of-morbidity-and-mortality-from-preeclampsia-preventive-medication
- USPSTF tobacco cessation, JAMA 325(3):265, 2021. https://pubmed.ncbi.nlm.nih.gov/33464343/
- USPSTF folic acid, JAMA 330(5):454, 2023. https://pubmed.ncbi.nlm.nih.gov/37526713/ (defined in helpers, cited by no item)
- McLean HQ et al. ACIP MMR, MMWR 62(RR-04):1, 2013. PubMed 23760231.
- FDA, Toxoplasma: Food Safety for Moms-to-Be, updated 09/27/2018. https://www.fda.gov/food/people-risk-foodborne-illness/toxoplasma-food-safety-moms-be
- Workowski KA et al. CDC STI Treatment Guidelines 2021, MMWR 70(4):1. https://pubmed.ncbi.nlm.nih.gov/34292926/ https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm https://www.cdc.gov/std/treatment-guidelines/adolescents.htm
- Pfizer, Vibramycin and Vibra-Tabs label, Rev. 08/2025. Full text read. https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/050006s096,050007s040,050480s064,050533s051lbl.pdf
- CDC, Condom Use: An Overview, last reviewed 2024. https://www.cdc.gov/condom-use/index.html
- CDC, How to Use a Condom, updated 2024. https://www.cdc.gov/condom-use/resources/external.html
- CDC catch-up schedule 2025 and schedule notes. https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-catch-up.html https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-notes.html
- CDC Pink Book chapter 2, April 2024. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html
- CDC Refugee Health, Immunizations, last reviewed 2024. https://www.cdc.gov/immigrant-refugee-health/hcp/domestic-guidance/immunizations.html
- CDC Vaccine Storage and Handling Toolkit, July 2026. Full text read. https://www.cdc.gov/vaccines/hcp/downloads/storage-handling-toolkit.pdf
- Merck Varivax and M-M-R II labels on DailyMed. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=524cf052-e90e-4595-af0a-608edbe9bd31 https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a9e384f-e717-436b-b9a0-15e53cef0862
- AGS Beers 2023, JAGS 71(7):2052. STOPP/START v3, Eur Geriatr Med 14(4):625, 2023. Freeman 2011, Clin Auton Res 21(2):69. Montero-Odasso 2022, Age Ageing 51(9). ASPEN 2017, JPEN 41(1):15. All confirmed on PubMed.
- Not reopened because the pages returned 403: AHRQ Health Literacy Universal Precautions Toolkit (2024) and HEEADSSS 3.0 (Contemporary Pediatrics 2014). Both are real works already confirmed in other batch reviews. Wong's 12th edition (2023) and Davis's Drug Guide 18th edition (2023) are textbooks with no open text.

## Needs Arjan's decision

- rn-c18-9 and rn-c18-8 sit in `extra.ts`, which `index.ts` does not import. Their ids use the case id pattern but they are stand-alone mc items. Decide whether they join a stand-alone batch or are removed.
- rn-c18-9 cites Davis's Drug Guide 18th edition. The c17 review moved the same item to the 19th edition. I could not open a publisher page to confirm the 19th edition year, so the citation is unchanged.
- rn-c18-2-4 teaches Rho(D) immune globulin at 28 weeks only. It is also given after birth if the newborn is Rh positive. The key is still the only full arrangement, but the rationale could name the postpartum dose.
- The ADA 2026 foot care section full text is not open. Its support for items 1-1 and 1-5 is now carried by the IWGDF 2023 guideline.

## Summary

32 items reviewed (30 case items and 2 items in `extra.ts`). 12 fixes in 12 items: 2 in extra.ts items (an invented history detail and a duplicate key), 2 invented or false whys, 7 source fixes and 1 wording fix. No key changes. `npx tsc` shows no c18 errors and `BATCH=c18 npx vitest run tests/bank.test.ts` passes 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
