# Writer report: batch s20, Abuse (domestic)

File: `src/samps/s20/abuse-domestic.ts` (export `ABUSE_DOMESTIC_S20`). `src/samps/s20/index.ts` exports it as `SAMPS_S20`. All SAMPs are `reviewed: false`.

## Count, mix and key positions

- 23 SAMPs, ids abuse-domestic-16 to abuse-domestic-38.
- 80 questions. 73 single and 7 menu. 10 SAMPs have 4 questions and 13 have 3.
- A menu question appears in 7 of 23 SAMPs (16, 17, 19, 27, 29, 33, 34).
- Single key positions, first to fifth: 15, 14, 16, 15, 13. The highest is 22 percent.
- The key is the longest option in 18 of 73 singles (25 percent).
- Checks: `tsc` is clean for s20. `SAMP_BATCH=s20 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (488 tests).

Case mix: 8 children (infants, a toddler, a preschooler, an 8-year-old, an 11-year-old, a 13-year-old and a 16-year-old), 1 youth of 17, 5 older adults, 9 other adults. Settings include tertiary sites and two rural hospitals. Provinces named when a statute is tested: Ontario, British Columbia and Alberta. Neither the scenarios nor the teaching points repeat s01 SAMPs 01 to 15.

| SAMP | Title | Keys (S = single, position) | Key features |
|---|---|---|---|
| 16 | Infant with bleeding from the mouth | S3 M S2 S1 | 2, 3, 6, 5 |
| 17 | Infant who stopped breathing after a feed | S4 S5 M S2 | 2, 3, 3, 6 |
| 18 | Preschool child with vomiting after a fall | S1 S2 S4 S4 | 2, 3, 3, 6 |
| 19 | Toddler with sores on her feet | S3 S5 M S5 | 2, 3, 5, 6 |
| 20 | Infant who cries when his leg is moved | S5 S3 S3 S2 | 3, 2, 3, 6 |
| 21 | Young adolescent with lower abdominal pain | S4 S1 S5 S3 | 1, 4, 6, 5 |
| 22 | Adolescent with a painful hand | S3 S1 S2 S4 | 2, 4, 6, 5 |
| 23 | Child with recurrent low blood sugar | S3 S2 S5 S5 | 2, 2, 3, 6 |
| 24 | Older woman after another fall at home | S4 S1 S3 S1 | 2, 4, 6, 5 |
| 25 | Supportive living resident with hip pain | S1 S5 S1 | 2, 6, 4 |
| 26 | Older man with weakness and weight loss | S4 S5 S4 | 1, 6, 5 |
| 27 | Woman with recurrent palpitations | S5 S4 S1 M | 1, 1, 4, 5 |
| 28 | Woman with a hand laceration at night | S4 S2 S5 | 2, 6, 5 |
| 29 | Rural woman asking for sleeping pills | S4 S3 S3 M | 1, 4, 6, 5 |
| 30 | Deaf woman with a wrist injury | S1 S3 S2 | 4, 2, 5 |
| 31 | Intoxicated woman with a facial laceration | S4 S3 S1 | 2, 4, 5 |
| 32 | Adolescent with a headache after a push | S1 S2 S3 | 1, 6, 6 |
| 33 | New mother asking for help with her nerves | S1 S2 M | 1, 6, 5 |
| 34 | Man with a forearm wound after an argument | S3 S1 M | 6, 4, 5 |
| 35 | Woman with multiple sclerosis found in bed | S1 S4 S5 | 1, 4, 5 |
| 36 | Older man hurt at home by a family member | S2 S3 S4 | 3, 5, 4 |
| 37 | School-aged girl after a disclosure to her mother | S2 S5 S2 | 4, 3, 6 |
| 38 | Woman with a shoulder injury on a return visit | S2 S3 S4 | 4, 1, 6 |

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Quiet clues in higher risk groups | 9 |
| 2. Injury patterns, delay, repeat visits | 13 |
| 3. Find all current and prior injuries | 11 |
| 4. Private, nonjudgmental setting for disclosure | 13 |
| 5. Team and services | 15 |
| 6. Consent, reporting, safety of patient and dependants | 19 |

## Sources and verification

Checked on PubMed (abstract and author list) unless noted.

- Shouldice M and colleagues, CPS. THI-CM practice point. Paediatr Child Health 2025. https://pubmed.ncbi.nlm.nih.gov/40904407/ (full text checked on PMC12402887 for CT first, skeletal survey under 2 years, repeat survey at about 14 days, dilated eye examination within 72 hours for intracranial hemorrhage, lab screen)
- Ward MG and colleagues, CPS. Bruising in suspected child maltreatment. 2013. https://pubmed.ncbi.nlm.nih.gov/24426797/
- Pierce MC and colleagues. TEN-4-FACESp validation. JAMA Netw Open 2021. https://pubmed.ncbi.nlm.nih.gov/33852003/
- Lindberg DM and colleagues. Siblings and household contacts. Pediatrics 2012. https://pubmed.ncbi.nlm.nih.gov/22778300/
- Lindberg DM and colleagues. Hepatic transaminases. Pediatrics 2013. https://pubmed.ncbi.nlm.nih.gov/23319537/
- Maguire SA and colleagues. Retinal haemorrhages systematic review. Eye 2013. https://pubmed.ncbi.nlm.nih.gov/23079748/
- ACR Appropriateness Criteria, suspected physical abuse, child. J Am Coll Radiol 2017. https://pubmed.ncbi.nlm.nih.gov/28473090/
- Flaherty EG, MacMillan HL, AAP. Caregiver-fabricated illness. Pediatrics 2013. https://pubmed.ncbi.nlm.nih.gov/23979088/
- Adams JA, Farst KJ, Kellogg ND. Medical findings in suspected child sexual abuse. 2018. https://pubmed.ncbi.nlm.nih.gov/29294380/
- Jenny C, Crawford-Jakubiak JE, AAP. Evaluation when sexual abuse is suspected. Pediatrics 2013. https://pubmed.ncbi.nlm.nih.gov/23897912/
- Doukrou M, Segal TY. HEEADSSS. Arch Dis Child Educ Pract Ed 2018. https://pubmed.ncbi.nlm.nih.gov/28615181/
- Yaffe MJ and colleagues. EASI. J Elder Abuse Negl 2008. https://pubmed.ncbi.nlm.nih.gov/18928055/
- Lachs MS, Pillemer KA. Elder abuse. N Engl J Med 2015. https://pubmed.ncbi.nlm.nih.gov/26559573/
- Wiglesworth A and colleagues. Bruising in elder abuse. J Am Geriatr Soc 2009. https://pubmed.ncbi.nlm.nih.gov/19558476/
- Rosen T and colleagues. ED injuries in elder abuse victims. J Emerg Med 2016. https://pubmed.ncbi.nlm.nih.gov/26810019/
- MacMillan HL and colleagues. IPV screening RCT. JAMA 2009. https://pubmed.ncbi.nlm.nih.gov/19654384/
- Campbell JC and colleagues. Femicide risk factors. Am J Public Health 2003. https://pubmed.ncbi.nlm.nih.gov/12835191/
- Campbell JC, Webster DW, Glass N. Danger Assessment. J Interpers Violence 2009. https://pubmed.ncbi.nlm.nih.gov/18667689/
- Stiell IG and colleagues. Canadian CT Head Rule. Lancet 2001. https://pubmed.ncbi.nlm.nih.gov/11356436/
- British Columbia Child, Family and Community Service Act, sections 13 and 14. Checked on bclaws: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96046_01
- British Columbia Gunshot and Stab Wound Disclosure Act 2010. Checked on bclaws: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/10007_01
- Criminal Code section 150.1. Checked on laws-lois.justice.gc.ca: https://laws-lois.justice.gc.ca/eng/acts/c-46/section-150.1.html
- Ontario Child, Youth and Family Services Act 2017, sections 77 and 125. e-Laws would not render. The under-16 duty, the permissive report at 16 and 17, the ongoing and direct duty and voluntary youth services agreements were confirmed through OACAS, OCSWSSW and Ontario ministry policy directive pages (CW 003-18 and CW 004-21).
- Alberta Protection for Persons in Care Act 2009. Confirmed through alberta.ca and CanLII listings.
- Ontario Substitute Decisions Act 1992, sections 27 and 62. Confirmed through secondary legal summaries, not the statute text.
- WHO 2013 IPV clinical and policy guidelines and Rosen's 10th edition (2023) are real works that s01 already cites. Their content was not fetched this session.

## For the reviewers

- 13 SAMPs have 3 questions. The brief aims for 4. I stopped where a fourth question would have repeated a teaching point from s01 or from this batch.
- 16 q2: head CT is keyed for a 4-month-old with a cheek bruise and a torn frenulum and a normal examination. CPS 2025 supports imaging for visible head injury "particularly in infants". Please confirm that a facial bruise and a torn frenulum count.
- 17 q2: the claim that cranial ultrasound can miss thin convexity subdurals is general knowledge. It is not taken from the cited CPS text.
- 20 q2: the specificity ranking of fractures cites ACR 2017. I checked only its abstract.
- 22 q3: the key says a report about the 9-year-old sister is mandatory because her father beats her brother. This is an inference from "reasonable grounds to suspect risk" under CYFSA section 125.
- 23: the insulin and C-peptide interpretation is standard endocrinology. It is cited to the AAP fabricated illness report, which may not state it explicitly.
- 25 q2: this assumes the PPCA covers a publicly funded supportive living facility. The stem states that the facility is publicly funded.
- 29 q3: I described BC section 13 in words. The bclaws fetch placed the domestic violence clause at 13(1.2).
- 30, 31, 35 and 38: several distractor reasons (ASL literacy, Deaf-accessible services, portal privacy, the pattern of a cooking cut) rest on the general WHO or Rosen citations, not a specific passage.
- 36 q1: the Lancet abstract gives the age criterion as "age >65". The rule as used in practice is 65 or older. The patient is 71, so the key holds either way.
- Wording in several distractors reflects expert consensus rather than trial data: couples counselling being unsafe after disclosure, and caregiver respite in 24 q4.
- Side note on s01: abuse-domestic-01 and abuse-domestic-11 cite SOGC Clinical Practice Guideline No. 157 (2005). PubMed now lists it as RETIRED (PMID 15999433). I did not use it here.
