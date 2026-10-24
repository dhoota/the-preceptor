# s32 writer report

Batch s32 holds 50 stand-alone items, rn-s32-01 to rn-s32-50. Files are `src/bank/s32/common.ts`, `part1.ts` to `part5.ts` and `index.ts`. Every item has `reviewed: false` and `canada: ""`.

`BATCH=s32 npx vitest run tests/bank.test.ts` passes 61 of 61, including the whole-bank near duplicate gate and the sign-off gate. `npx tsc --noEmit -p .` reports nothing for bank/s32.

## Counts

Client Needs: HPM 45, SIPC 5.

SIPC items: 10 (carbon monoxide alarm), 29 (lawn mower), 30 (trampoline), 49 (dog bite), 50 (leftover oxycodone storage and disposal).

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. The trend items are 32 (BMI percentiles) and 42 (incidence and prevalence). Both are mc.

CJMM steps: recognize 4, analyze 7, prioritize 4, generate 14, action 16, evaluate 5.

Difficulty: level 1 has 2, level 2 has 15, level 3 has 20, level 4 has 11, level 5 has 2.

## MC key positions

The 26 plain mc items: A 7, B 6, C 6, D 7. With the 2 trend mc items added: A 7, B 7, C 7, D 7.

By item, parts 1 and 2: 01 C, 03 A, 04 D, 05 B, 06 C, 08 A, 11 D, 12 B, 14 A, 17 C, 18 D, 19 B.

By item, parts 3 to 5: 22 C, 24 A, 25 D, 26 B, 29 C, 30 A, 32 B (trend), 33 D, 34 B, 37 C, 39 A, 40 D, 42 C (trend), 46 D, 47 B, 50 A.

The key is the strict longest option in 5 of 28 mc items (25, 32, 34, 42, 46).

## Uniqueness

Before writing each chunk I checked the inventory and case list for every planned topic. No topic label matches any label in the inventory, in the other bank folders or in the s29 to s38 folders as they stood at finish.

One item was replaced. Item 46 first taught the limits of the genetic nondiscrimination law. Batch s30 has "Limits of genetic nondiscrimination law" with the same teaching point, so 46 now teaches the 85 decibel action level for a hearing conservation program.

Items written near existing ones, with the point that differs:
- 24 (capillary lead result): s07-16 is about lead paint hazards in an old home. Item 24 tests venous confirmation of a capillary result above 3.5.
- 34 (combined pills 28 days after cesarean): s27 covers combined pills under 21 days while breastfeeding. Item 34 tests the 21 to 42 day window for a client who is not breastfeeding and has cesarean birth and preeclampsia as risk factors.
- 10 (carbon monoxide alarm steps): the SIPC item "Headache shared by a household" is about recognizing exposure. Item 10 orders the response to an alarm.

## Sources and verification

PubMed, Crossref, DataCite, eCFR, the Federal Register API or a direct page fetch confirmed each journal citation and each rule.

- USPSTF BRCA 2019, JAMA 322(7):652. https://pubmed.ncbi.nlm.nih.gov/31429903/
- Giardiello, Lynch syndrome 2014, Gastroenterology 147(2):502. https://pubmed.ncbi.nlm.nih.gov/25043945/
- ACOG Practice Bulletin 226, 2020. https://pubmed.ncbi.nlm.nih.gov/32804883/
- ADA Standards of Care 2026, section 15. The A1C goal under 6.5% and contraception until glucose is optimized were checked through search summaries. The full text returned 403.
- Pack, AAN, AES and SMFM antiseizure medication guideline 2024, Neurology 102(11):e209279. https://pubmed.ncbi.nlm.nih.gov/38748979/
- NAMS nonhormone therapy 2023 (https://doi.org/10.1097/GME.0000000000002200), NAMS hormone therapy 2022 (PMID 35797481) and NAMS GSM 2020 (PMID 32852449).
- CDC carbon monoxide prevention guidelines 2017. https://stacks.cdc.gov/view/cdc/47927
- USPSTF testicular cancer 2011 (PMID 21464350), prostate 2018 (PMID 29801017), vision 2017 (doi 10.1001/jama.2017.11260), dental caries 2021 (doi 10.1001/jama.2021.20007), cervical 2018 (doi 10.1001/jama.2018.10897) and breast 2024 (doi 10.1001/jama.2024.5534).
- Watts, Endocrine Society, men's osteoporosis 2012 (PMID 22675062). LeBoff, BHOF 2022 (PMID 35478046).
- AAO-HNS sudden hearing loss 2019 (PMID 31369359). Pirozzo, whispered voice test 2003 (PMID 14576249).
- FDA over-the-counter hearing aid final rule, 87 FR 50698 (2022), confirmed through the Federal Register API.
- AGS and NHTSA, Clinician's Guide to Assessing and Counseling Older Drivers, 4th edition, 2019. Search results confirmed the edition and year. The PDF returned 403.
- AAP fluoride 2020 (doi 10.1542/peds.2020-034637), AAP obesity CPG 2023 (doi 10.1542/peds.2022-060640), AAP DDH 2016 (doi 10.1542/peds.2016-3107), AAP trampoline 2012 (doi 10.1542/peds.2012-2082) and AAP lawn mower 2001 (doi 10.1542/peds.107.6.1480).
- CDC blood lead reference value, MMWR 2021 (PMID 34710078). CDC lead clinical guidance page, dated August 2025, fetched for venous confirmation within 3 months.
- Meites, ACIP HPV 2019 (PMID 31415491). Kroger, ACIP general best practice PDF, modified 2023. Syncope and no-restart passages were read in the PDF text.
- Patricios, Amsterdam 2023 (doi 10.1136/bjsports-2023-106898). Davis, Pediatrics 2024 (doi 10.1542/peds.2023-063489).
- US MEC 2024 (doi 10.15585/mmwr.rr7304a1). The postpartum rows were read in the appendix tables.
- Mitchell, ABM Protocol 36, 2022 (doi 10.1089/bfm.2022.29207.kbm).
- CDC breast milk storage page, updated August 2026, fetched.
- JCIH 2019 (doi 10.15142/fptk-b748, through DataCite).
- McLean, ACIP MMR 2013 (PMID 23760231). CDC measles "Plan for Travel" page, dated April 2026, fetched.
- CDC Yellow Book 2026 malaria page, fetched for atovaquone-proguanil timing.
- OSHA 29 CFR 1910.95 text through the eCFR API (85 decibel action level, standard threshold shift, refit and retrain).
- CDC Principles of Epidemiology, Lesson 3, fetched.
- FDA mammography rule, 88 FR 15126, and 21 CFR 900.12 dense breast lay statement, read in eCFR.
- FDA "Where and How to Dispose of Unused Medicines" (2025) and the FDA flush list (2024), fetched. Oxycodone is on the flush list.
- Potter Fundamentals 11th edition (2023) and Hockenberry Wong's 12th edition (2024) are textbook sources.

## For the reviewer

1. HPV dosing is untested on purpose. The CDC schedule of 5 January 2026 moved to one HPV dose without an ACIP vote, and that change is contested. Items 25 and 26 test only points that hold under every current schedule: give the vaccine before exposure, and observe for 15 minutes for syncope.
2. Prostate (12, 13) uses USPSTF 2018. I found no newer final recommendation. Please check the USPSTF site.
3. Cervical (45) uses USPSTF 2018. The December 2024 draft keeps the same intervals. To avoid the USPSTF and ACS split on ages 21 to 29, the item uses clients of 34, 67 and 52 only.
4. Testicular self-exam (11) is framed for a client with a repaired undescended testicle. USPSTF recommends against routine screening in men without risk factors, and the rationale says so.
5. The lead values in 24 are written as "micrograms per deciliter (0.29 micromol/L)". The unit gate has no lead factor for mcg/dL to micromol/L (0.0483), so "mcg/dL" with a correct SI pair fails. 6 times 0.0483 is 0.29.
6. Dog bite (49) cites only Hockenberry. The AVMA page confirmed the advice but shows no date, so I did not cite it.
7. The lawn mower age limits (29) come from a 2001 AAP statement. It is the most recent AAP policy I could confirm.
8. Item 31 now shows the child's 120% of the 95th percentile value (25.2) in the stem. A calc block failed the gate because the 120 factor is not a stem number. The item still tests the category cutoffs.
9. The WebSearch budget for the session ran out partway through part 2. After that I verified citations only through direct fetches of known pages, Crossref and DataCite DOI lookups, PubMed record lookups by known ID, and the eCFR and Federal Register APIs.
10. Please check the trace of item 16 (driving warning signs) and item 17 (referral for an on-road evaluation) against the AGS guide text. I could not open the guide itself.
