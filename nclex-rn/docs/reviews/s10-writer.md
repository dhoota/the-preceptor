# Batch s10 writer report

Batch s10 is a stand-alone batch of 50 Health Promotion and Maintenance items, rn-s10-01 to rn-s10-50. All items have reviewed: false and version 1. The canada field is an empty string on every item, as the writer brief asks.

Files: src/bank/s10/common.ts (meta helper and sources), part1.ts to part5.ts (10 items each), index.ts.

Checks run:

- BATCH=s10 npx vitest run tests/bank.test.ts: 61 of 61 tests pass.
- npx tsc --noEmit -p . 2>&1 | grep bank/s10: prints nothing.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Counts

Client Needs: HPM 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. The trend items are rn-s10-26 (postpartum involution) and rn-s10-49 (prenatal weight gain). Both use kind mc.

CJMM step: recognize 6, analyze 11, prioritize 3, generate 12, action 14, evaluate 4.

Difficulty: 1 (3), 2 (17), 3 (19), 4 (9), 5 (2).

Calculations: rn-s10-03 (infant weight at 12 months) and rn-s10-43 (body mass index). Both have a calc block.

## MC key positions

There are 28 kind mc items, counting the two trend items. Key positions 1 to 4: 7, 7, 8, 6. The key is the strict longest option in 6 of 28. SATA keys in the first half of the list: 13 of 32.

## Coverage

- Growth and development: primitive reflexes, fontanels, infant weight, solid foods, teething, toddler play, tantrums, language at 2 years, Piaget stages, the infant exam sequence, milestones at 12 months, and positional plagiocephaly (bow-tie).
- Adolescence and adulthood: teen sleep, helmet fit, screen media, Erikson tasks in middle and late adulthood, bone health after menopause, presbycusis communication, and heat safety in an older adult.
- Prenatal: weight gain targets, GTPAL, caffeine, fish, timing of group B strep culture, heartburn, and anemia in pregnancy.
- Postpartum: the involution trend, the lactational amenorrhea method, MMR after birth, and engorgement (bow-tie).
- Newborn: vitamin K refusal, a hepatitis B positive mother, heat loss, the pulse oximetry screen, an early metabolic screen, formula preparation, circumcision care, and sun protection.
- Immunizations: the rotavirus age limit, live vaccine spacing, the infant IM site, and adult vaccines.
- Screening and lifestyle: AAA, HIV and hepatitis C, body mass index, a lifestyle highlight, prioritizing health fair results, and stages of change.

I checked the s09 topic list, which is also all HPM, and avoided its teaching points.

## Sources and verification

- Martin GR et al. Pulse oximetry screening for CCHD. Pediatrics 2020. https://pubmed.ncbi.nlm.nih.gov/32499387/
- Hand I, Noble L, Abrams SA. Vitamin K and the Newborn Infant. Pediatrics 2022. https://pubmed.ncbi.nlm.nih.gov/35190810/
- CDC Adult Immunization Schedule by Age, addendum July 2, 2025. https://www.cdc.gov/vaccines/hcp/imz-schedules/adult-age.html
- CDC Pink Book chapter 19, Rotavirus. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-19-rotavirus.html
- CDC Pink Book chapter 6, Vaccine Administration. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-6-vaccine-administration.html
- CDC Pink Book chapter 2, General Best Practice Guidance. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html
- McLean HQ et al. ACIP MMR 2013. MMWR 62(RR-4). The 28-day pregnancy interval and breastfeeding compatibility were confirmed by search. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6204a1.htm
- Schillie S et al. ACIP hepatitis B 2018. MMWR 67(1). https://www.cdc.gov/mmwr/volumes/67/rr/rr6701a1.htm
- ACOG Committee Opinion 797, GBS, 2020. https://pubmed.ncbi.nlm.nih.gov/31977793/
- ACOG Practice Bulletin 233, Anemia in Pregnancy, 2021. https://pubmed.ncbi.nlm.nih.gov/34293770/
- ACOG Committee Opinion 462, Caffeine, 2010. https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2010/08/moderate-caffeine-consumption-during-pregnancy
- FDA and EPA Advice about Eating Fish, 2021. https://www.fda.gov/food/consumers/advice-about-eating-fish
- IOM Weight Gain During Pregnancy, 2009. https://pubmed.ncbi.nlm.nih.gov/20669500/
- CDC US MEC 2024, Appendix G, lactational amenorrhea method. https://www.cdc.gov/contraception/hcp/usmec/lactational-amenorrhea-method.html
- ABM Protocol #36, the mastitis spectrum, 2022. https://pubmed.ncbi.nlm.nih.gov/35576513/
- CDC infant formula preparation and storage. https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/preparation-and-storage.html
- FDA benzocaine teething warning, May 2018. https://www.aafp.org/about/news/20180530fdabenzocaine
- FDA teething jewelry warning, December 2018. https://publications.aap.org/aapnews/news/9241/FDA-Teething-necklaces-can-lead-to-choking
- NHTSA, Fitting a Bicycle Helmet. https://www.nhtsa.gov/sites/nhtsa.gov/files/2024-07/bike-safety-fitting-helmet.pdf (search result only, because the PDF returned 403)
- CDC Older Adults and Extreme Heat. https://www.cdc.gov/aging/emergency-preparedness/older-adults-extreme-heat/
- NIH ODS Calcium fact sheet. https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/
- Laughlin J et al. Positional skull deformities. Pediatrics 2011. https://publications.aap.org/pediatrics/article/128/6/1236/31059/Prevention-and-Management-of-Positional-Skull
- Balk SJ. Ultraviolet radiation. Pediatrics 2011. https://publications.aap.org/pediatrics/article/127/3/e791/65065/Ultraviolet-Radiation-A-Hazard-to-Children-and
- USPSTF AAA 2019. https://pubmed.ncbi.nlm.nih.gov/31821437/
- USPSTF hepatitis C 2020. https://pubmed.ncbi.nlm.nih.gov/32119076/
- USPSTF HIV 2019. https://pubmed.ncbi.nlm.nih.gov/31184701/
- ADA Standards of Care in Diabetes 2026, section 2. https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes
- HHS Physical Activity Guidelines, 2nd edition, 2018. https://odphp.health.gov/sites/default/files/2019-09/Physical_Activity_Guidelines_2nd_edition.pdf
- I did not search these again. They are well-known and s09 already cites them with URLs: Zubler 2022 milestones, Paruthi 2016, USPSTF alcohol 2018, and the Lowdermilk, Touhy and Jarvis texts.
- I cited these from memory and did not search them individually: Togias 2017 (peanut), Heyman 2017 (juice), AAP Media and Young Minds 2016, Watson 2015 (adult sleep), Prochaska and Velicer 1997, CDC Adult BMI Categories, Hockenberry (Wong) 12th edition, and Potter 11th edition. A reviewer should confirm them.

## Uncertain points for the reviewer

- In January 2026 the CDC childhood schedule moved rotavirus and hepatitis B to shared clinical decision-making. It also moved HPV to a single dose. I avoided HPV. rn-s10-37 teaches the rotavirus age limit, which comes from the product label and is unchanged. rn-s10-28 teaches HBIG plus vaccine for a hepatitis B surface antigen positive mother, which is still a risk-based recommendation. The reviewer should confirm both against the current schedule.
- rn-s10-40 relies on the July 2025 adult schedule. RSV is advised for everyone 75 and older and for adults 50 to 74 at increased risk, so a healthy 67-year-old does not qualify.
- rn-s10-01 and rn-s10-44 state that the Moro reflex is gone by 6 months. Some texts say 4 months. The 6-month cutoff is the conservative one, and both items still hold under either.
- rn-s10-31 does not give a time for the repeat newborn screen, because the timing varies by state.
- rn-s10-13: NHTSA helmet fit (two fingers above the eyebrows, straps in a V under each ear) was confirmed from search snippets only.
- rn-s10-36: the engorgement bow-tie follows ABM Protocol #36, which advises cold and avoiding extra pumping and deep massage. Some older texts still teach warm compresses before feeds.
- rn-s10-48 uses a 1997 transtheoretical model paper, because the gate rejects source years before 1990.
