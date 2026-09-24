# Batch c18 writer report

Five case studies of six items each. 30 items. All items and cases have `reviewed: false`, `version: 1` and an empty `canada` note.

House style for this report and the items: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- `BATCH=c18 npx vitest run tests/bank.test.ts`: 44 of 44 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/c18`: prints nothing.

## Cases

The five scenarios follow the topic plan in order.

1. `rn-c18-1` A Check-Up at the Community Health Center. A 58-year-old man with type 2 diabetes and high blood pressure. Community clinic. Foot neuropathy, albuminuria, a new lisinopril prescription and a 3-month review.
2. `rn-c18-2` A First Visit at the Prenatal Clinic. A 27-year-old at 9 weeks in her second pregnancy. Past preeclampsia, Rh negative, anemia, smoking, rubella nonimmune, a pet cat.
3. `rn-c18-3` A Walk-In Visit at a Teen Health Clinic. A 17-year-old male with urethral gonorrhea. Psychosocial interview, Gram stain, confidentiality, partner care, treatment and condom teaching.
4. `rn-c18-4` A New Family at the Neighborhood Clinic. A 5-year-old refugee girl with a foreign vaccine record. Interpreter use, trauma cues, catch-up rules, referrals, a refrigerator temperature alarm, aftercare.
5. `rn-c18-5` A Home Visit After a Kitchen Fall. An 82-year-old woman on 9 medications. Orthostatic hypotension, low glucose from glyburide, Beers list drugs, deprescribing, low glucose treatment, fall plan review.

Settings covered: community clinic, maternity, adolescent sexual health, pediatric and refugee health, home health for an older adult. Ages run from 5 to 82.

## Counts

Client Needs (matches the plan):

| Need | Count | Items |
|---|---|---|
| MOC | 5 | 3-3, 3-4, 4-3, 4-4, 5-4 |
| SIPC | 4 | 3-6, 4-5, 5-3, 5-6 |
| HPM | 3 | 1-6, 2-1, 4-2 |
| PSY | 3 | 2-5, 3-1, 4-1 |
| BCC | 3 | 1-5, 2-6, 4-6 |
| PPT | 4 | 1-4, 2-4, 3-5, 5-2 |
| RRP | 4 | 1-1, 1-3, 2-2, 5-1 |
| PA | 4 | 1-2, 2-3, 3-2, 5-5 |

Item types:

| Type | Count | Items |
|---|---|---|
| matrix | 6 | 1-2, 1-6, 2-2, 4-2, 5-2, 5-6 (all single mode) |
| cloze | 5 | 1-3 dyad, 2-3 triad, 5-3 triad, 3-5 and 4-3 zero-one |
| highlight | 4 | 1-1, 3-1, 4-1, 5-1 |
| dnd | 4 | 3-2 dyad with template, 2-4, 4-4, 5-5 zero-one |
| sata | 4 | 1-4, 2-6, 3-4, 4-6 |
| mc | 4 | 1-5, 2-5, 3-3, 4-5 |
| msn | 3 | 2-1 (select four), 3-6 (select two), 5-4 (select four) |

Each case uses 5 or 6 item types. The batch has two dyads (1-3, 3-2) and two triads (2-3, 5-3).

CJMM steps: every case walks recognize, analyze, prioritize, generate, action, evaluate in order. 5 items per step.

Difficulty: level 2 has 8, level 3 has 16, level 4 has 5, level 5 has 1.

MC key positions: 1-5 third, 2-5 second, 3-3 fourth, 4-5 first. In no MC item is the key the strict longest option.

Multi-key pools: keyed choices run longer than distractors in 8 of 15 pools, under the 65 percent limit.

## Sources used

All were verified this session with WebSearch or WebFetch. Several were already in the bank from other batches and were rechecked.

- American Diabetes Association. Standards of Care in Diabetes 2026, sections 6, 10, 11 and 12. Diabetes Care 49(Suppl 1). https://pubmed.ncbi.nlm.nih.gov/41358894 , https://pubmed.ncbi.nlm.nih.gov/41358899/ , https://pubmed.ncbi.nlm.nih.gov/41358881/ , https://pubmed.ncbi.nlm.nih.gov/41358886/
- AstraZeneca. Zestril (lisinopril) prescribing information, 2017. https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/019777s076lbl.pdf
- ACOG Practice Bulletin 233, Anemia in Pregnancy, 2021. https://pubmed.ncbi.nlm.nih.gov/34293770/
- ACOG Practice Bulletin 181, Prevention of Rh D Alloimmunization, 2017. https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/08/prevention-of-rh-d-alloimmunization
- ACOG Practice Bulletin 189, Nausea and Vomiting of Pregnancy, 2018. https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/01/nausea-and-vomiting-of-pregnancy
- USPSTF. Aspirin Use to Prevent Preeclampsia, JAMA 326(12):1186, 2021. https://jamanetwork.com/journals/jama/fullarticle/2784499
- USPSTF. Folic Acid Supplementation, JAMA 330(5):454, 2023. https://pubmed.ncbi.nlm.nih.gov/37526713/ (defined in helpers, not cited by an item in the end)
- Krist AH et al. USPSTF. Tobacco Smoking Cessation, JAMA 325(3):265, 2021. https://pubmed.ncbi.nlm.nih.gov/33464343/
- McLean HQ et al. ACIP. Prevention of Measles, Rubella, Congenital Rubella Syndrome, and Mumps, 2013. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6204a1.htm
- FDA. Toxoplasma: Food Safety for Moms-to-Be, page updated 2018. https://www.fda.gov/food/people-risk-foodborne-illness/toxoplasma-food-safety-moms-be
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023 (defined in helpers, not cited by an item in the end).
- Workowski KA et al. CDC. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR 70(4):1. https://pubmed.ncbi.nlm.nih.gov/34292926/
- Klein DA, Goldenring JM, Adelman WP. HEEADSSS 3.0. Contemporary Pediatrics 31(1):16, 2014. https://www.contemporarypediatrics.com/view/heeadsss-30-psychosocial-interview-adolescents-updated-new-century-fueled-media
- Doxycycline hyclate tablets prescribing information, DailyMed. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f234f419-42da-4a6d-82c6-92106cd77c67
- CDC. Condom Use: An Overview. https://www.cdc.gov/condom-use/index.html
- CDC. Catch-up Immunization Schedule, 2025, and schedule notes. https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-catch-up.html , https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-notes.html
- CDC. Pink Book Chapter 2, General Best Practice Guidance, 2024. https://www.cdc.gov/pinkbook/hcp/table-of-contents/chapter-2-general-best-practice-guidance.html
- CDC. Immunizations, Refugee Health Domestic Guidance. https://www.cdc.gov/immigrant-refugee-health/hcp/domestic-guidance/immunizations.html
- CDC. Vaccine Storage and Handling Toolkit, 2024, and the temperature excursion job aid. https://www.cdc.gov/vaccines/hcp/downloads/storage-handling-toolkit.pdf , https://www.cdc.gov/vaccines/hcp/admin/storage/downloads/temperature-excursion-508.pdf
- Merck. Varivax and M-M-R II prescribing information, DailyMed. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=524cf052-e90e-4595-af0a-608edbe9bd31 , https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a9e384f-e717-436b-b9a0-15e53cef0862
- AHRQ. Health Literacy Universal Precautions Toolkit, 3rd edition, 2024. https://www.ahrq.gov/health-literacy/improve/precautions/toolkit.html
- Hockenberry MJ et al. Wong's Nursing Care of Infants and Children, 12th edition, 2023.
- American Geriatrics Society. 2023 Beers Criteria. JAGS 71(7):2052. https://pubmed.ncbi.nlm.nih.gov/37139824/
- O'Mahony D et al. STOPP/START version 3. European Geriatric Medicine, 2023. https://pubmed.ncbi.nlm.nih.gov/37256475/
- Freeman R et al. Consensus definition of orthostatic hypotension, 2011. https://pubmed.ncbi.nlm.nih.gov/21431947/
- Montero-Odasso M et al. World guidelines for falls prevention, 2022. https://pubmed.ncbi.nlm.nih.gov/36178003/
- FDA Drug Safety Communication on metformin and kidney function, 2016. https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-revises-warnings-regarding-use-diabetes-medicine-metformin-certain

## For the reviewer

- 1-5 and 1-1: the ADA foot care section supports specialist callus care and the pre-ulcer meaning of bleeding in a callus. The ban on acid corn plasters is standard foot teaching. Please confirm the 2026 section still states it.
- 1-4: the Zestril label cited is the 2017 version. It is the newest FDA label found for the brand.
- 2-3: preeclampsia is keyed as the highest later risk over Rh sensitization, gestational diabetes and hyperemesis. BMI 31 is also a gestational diabetes risk. BMI is kept out of the blank options so it cannot support a second answer.
- 2-4: the live nasal influenza vaccine and doxylamine-pyridoxine are the unplaced tokens. Please check that neither could fit a time slot.
- 3-3: treating the active infection is keyed first over heavy drinking. The drinking is a safety risk, but nothing shows immediate harm at the visit.
- 3-4: five of seven options are keyed. The 60-day partner window, the 7-day abstinence, the 3-month retest and no test of cure for urethral gonorrhea come from the 2021 CDC guidelines.
- 3-6: "two condoms at once tear more easily" is standard teaching. The CDC overview page did not state it in the text I saw.
- 4-2: the key relies on these catch-up rules. The final hepatitis B dose must be at 24 weeks of age or older. A measles dose before 12 months does not count. Hib catch-up is not needed at age 5 or older in a healthy child. Rotavirus is not given after 8 months. The 24-week hepatitis B rule is from the CDC schedule notes and was not quoted directly in my fetch. Please confirm.
- 4-1 and 4-3: the mother asks about pork products. The items say only that MMR and varicella vaccines contain gelatin. They do not state the animal source, although CDC lists it as porcine.
- 4-6: "a mild rash or fever 1 to 2 weeks later" is a plain summary of the MMR and varicella labels, which give ranges of about 5 to 12 days.
- 5-2: ibuprofen is keyed to kidney strain. The Beers and STOPP criteria both cover NSAIDs in reduced kidney function. Check that the "with lisinopril and a diuretic" wording matches the version cited.
- 5-4: lorazepam came from urgent care, not the primary health care provider. The item keeps the recommendation with the primary health care provider as the coordinating prescriber.
- The helpers define two sources that no item cites in the end (USPSTF folic acid, Lowdermilk). They are harmless but could be removed.
