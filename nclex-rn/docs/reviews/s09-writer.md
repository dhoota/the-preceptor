# Batch s09 writer report

Batch s09 is stand-alone. It holds 50 items, rn-s09-01 to rn-s09-50, all Health Promotion and Maintenance. Every item has reviewed: false and an empty canada field.

Items 01 to 20 come from an earlier attempt that stopped partway. Part 2 was not wired into the index. I wired it in, checked it and fixed one parity failure in item 12. Items 21 to 50 are new in this run.

## Checks

- `BATCH=s09 npx vitest run tests/bank.test.ts`: 61 of 61 tests pass. That includes the whole-bank near duplicate check.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s09` prints nothing.

## Counts

Client Needs: HPM 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2 (items 16 and 36, both mc).

CJMM step: generate 12, analyze 10, action 8, evaluate 8, recognize 8, prioritize 4.

Difficulty: 1 is 6 items, 2 is 17, 3 is 19, 4 is 7, 5 is 1.

Calculations: item 33 (pack-years) and item 45 (orthostatic drop) carry calc blocks.

## MC key positions

28 mc items, including the 2 trend items. Positions 1 to 4 each hold 7 keys.

- Position 1: 03, 10, 16, 26, 31, 41, 50
- Position 2: 06, 13, 19, 21, 33, 36, 40
- Position 3: 01, 08, 15, 25, 32, 38, 45
- Position 4: 04, 11, 17, 23, 30, 43, 47

The key is the strict longest option in 6 of 28 mc items (03, 04, 13, 36, 43, 47). Keyed choices run longer than distractors in 9 of 22 multi-key pools. 17 of 33 SATA keys sit in the first half of their lists.

## Coverage

- Before conception and pregnancy: folic acid, signs of pregnancy, fundal height, gestational diabetes timing, warning signs, Rh(D) immune globulin, Leopold maneuvers, nonstress test, diet and activity, supine hypotension, prenatal call triage, vaccines in pregnancy.
- Labor and after birth: true and false labor, a boggy fundus with a full bladder, lochia, postpartum blues, contraception eligibility.
- Newborn: breastfeeding, Apgar, weight trend, cord care, admission findings, safe sleep, jaundice from low intake.
- Growth and development: 9 month milestone, toddler injury prevention, MMR contraindications, Erikson stages, the adolescent interview, cow's milk and iron, toilet training readiness, adolescent risk screening, sexual maturity rating, booster seats, otoscope technique.
- Adults and older adults: colorectal, STI, lung, breast and bone screening, BP technique and BP trend, the brief tobacco intervention, alcohol screening, zoster vaccine, aging changes, orthostatic vital signs, home fall prevention, melanoma signs, physical activity, cognitive change.

## Sources and verification

Checked this session with WebSearch or WebFetch:

- USPSTF Lung Cancer 2021: https://pubmed.ncbi.nlm.nih.gov/33687470/
- USPSTF Colorectal Cancer 2021: https://jamanetwork.com/journals/jama/fullarticle/2779985
- USPSTF Breast Cancer 2024: https://jamanetwork.com/journals/jama/fullarticle/2818283
- USPSTF Osteoporosis 2025: https://jamanetwork.com/journals/jama/fullarticle/2829238
- USPSTF Chlamydia and Gonorrhea 2021: https://jamanetwork.com/journals/jama/fullarticle/2784136
- USPSTF Unhealthy Alcohol Use 2018, single-question screen: https://jamanetwork.com/journals/jama/fullarticle/2714537
- USPSTF Folic Acid 2023: https://jamanetwork.com/journals/jama/fullarticle/2807739
- AHA/ACC 2025 High Blood Pressure Guideline, BP categories unchanged from 2017: https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know
- CDC Shingrix clinical considerations: https://www.cdc.gov/shingles/hcp/vaccine-considerations/index.html
- CDC milestones, 9 and 18 months: https://www.cdc.gov/act-early/milestones/9-months.html and https://www.cdc.gov/act-early/milestones/18-months.html
- CDC US MEC 2024, combined hormonal contraceptives: https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html
- AAP Child Passenger Safety 2018: https://publications.aap.org/pediatrics/article/142/5/e20182460/38530/Child-Passenger-Safety
- CDC contraindications and precautions (MMR, egg allergy, mild illness, pregnant household contact): https://www.cdc.gov/vaccines/hcp/imz-best-practices/contraindications-precautions.html
- CDC vaccines in pregnancy (Tdap, inactivated flu, live vaccines, HPV): https://www.cdc.gov/vaccines-pregnancy/recommended-vaccines/index.html
- CDC maternal RSV vaccine at 32 to 36 weeks: https://www.cdc.gov/rsv/vaccines/protect-infants.html
- Fiore 2008 tobacco guideline, 5 steps: https://www.ahrq.gov/prevention/guidelines/tobacco/5steps.html
- Freeman 2011 orthostatic hypotension consensus, Clinical Autonomic Research 21(2):69: https://www.researchgate.net/publication/50833270_Consensus_statement_on_the_definition_of_orthostatic_hypotension_neurally_mediated_syncope_and_the_postural_tachycardia_syndrome (citation and definition confirmed in search results, full text not opened)
- AASM pediatric sleep 2016: https://aasm.org/resources/pdf/pediatricsleepdurationconsensus.pdf
- CDC STEADI Check for Safety 2017, text read in full: https://www.cdc.gov/steadi/pdf/steadi-brochure-checkforsafety-508.pdf
- Physical Activity Guidelines for Americans, 2nd edition, 2018: https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines/top-10-things-know
- AAP Hyperbilirubinemia 2022: https://www.aap.org/en/patient-care/hyperbilirubinemia/
- ACOG Practice Bulletin 229, 2021: https://pubmed.ncbi.nlm.nih.gov/34011889/
- ACOG Committee Opinion 804, 2020: https://pubmed.ncbi.nlm.nih.gov/32217980/
- ACOG Clinical Practice Guideline No. 4, 2023: https://pubmed.ncbi.nlm.nih.gov/37486660/
- Flaherman 2015 weight loss nomograms: https://pubmed.ncbi.nlm.nih.gov/25554815/
- AAP Umbilical Cord Care 2016: https://publications.aap.org/pediatrics/article/138/3/e20162149/52610/Umbilical-Cord-Care-in-the-Newborn-Infant
- AAD ABCDEs of melanoma: https://www.aad.org/public/diseases/skin-cancer/abcdes-melanoma

Textbooks are cited by edition and were not opened: Lowdermilk Maternity and Women's Health Care 13th edition, Perry Maternal Child Nursing Care 7th edition, Hockenberry Wong's Nursing Care of Infants and Children 12th edition, Jarvis Physical Examination and Health Assessment 9th edition, and Touhy and Jett Ebersole and Hess' Gerontological Nursing 6th edition. The earlier attempt added the sources for items 01 to 20. I rechecked the guideline sources for those items but not every textbook page.

## For the reviewer

- Item 16 (weight trend). The see that newborns often lose up to 7 to 10% and regain by 10 to 14 days is textbook teaching. The Flaherman nomogram does not state it in those words.
- Item 26 (cow's milk and iron). I gave no daily milk limit because sources differ between 16 and 24 oz. The anemia cutoff of 11.0 g/dL for ages 1 to 3 is from Baker and Greer 2010.
- Item 29 (sexual maturity rating). The rule that menarche comes about 2 years after breast budding is standard textbook teaching. It is cited to Jarvis and Wong without a page check.
- Item 34 (screening plan). The sources field allows 4 entries, so the chlamydia distractor was removed. The chest x-ray distractor relies on the USPSTF naming low-dose CT as the only recommended lung screen.
- Items 23, 41 and 42 (vaccines). US vaccine guidance changed several times in 2025 and 2026. Please confirm the CDC pages still read as cited, especially maternal RSV timing and the Tdap window.
- Item 38 (alcohol). The low-risk limits of 3 a day and 7 a week for women are NIAAA figures quoted in the USPSTF statement.
- Item 44 (bow-tie). The condition label suboptimal intake jaundice is the 2022 AAP term. Some nursing texts still say breastfeeding jaundice.
- Item 45. The Freeman 2011 source has no url in common.ts. I confirmed the citation and the 20 and 10 mmHg definition in search results but did not open the full text.
- Near duplicates. Batch s10 is also HPM and was empty when I finished. If it lands later, the near duplicate gate should be rerun across both batches.
