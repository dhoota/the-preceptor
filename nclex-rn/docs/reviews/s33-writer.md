# s33 writer report

Batch s33 is 50 stand-alone items, rn-s33-01 to rn-s33-50, in `src/bank/s33/` (common.ts, part1.ts to part5.ts, index.ts). Every item has `reviewed: false` and `canada: ""`.

`BATCH=s33 npx vitest run tests/bank.test.ts` passes, 61 of 61, including the whole-bank near-duplicate and sign-off tests. `npx tsc --noEmit -p .` shows no errors in bank/s33. The highest word trigram Jaccard between an s33 stem and any other stem in the bank is 0.254 (rn-s33-22 and rn-s18-16). No s33 topic label matches an existing label in the inventory or in any batch on disk.

## Counts

- Client Needs: PSY 45, BCC 5.
- Type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2 (both trend items are mc).
- CJMM: recognize 4, analyze 8, prioritize 3, generate 10, action 20, evaluate 5.
- Difficulty: 1 has 3, 2 has 15, 3 has 18, 4 has 11, 5 has 3.

## MC key positions

Across the 28 mc-kind items (26 mc plus 2 trend), keys fall 7, 7, 7 and 7 in positions 1 to 4. The key is the strict longest option in 7 of 28. Keyed choices run longer than distractors in 7 of 22 multi-key pools. Select all keys sit in the first half of the list 20 times out of 40.

| Item | Key | Item | Key | Item | Key | Item | Key |
|---|---|---|---|---|---|---|---|
| 02 | 1 | 13 | 4 | 26 | 2 | 38 | 4 |
| 04 | 3 | 14 | 1 | 27 | 4 | 41 | 2 |
| 05 | 2 | 16 | 3 | 29 | 2 | 43 | 1 |
| 08 | 4 | 19 | 2 | 31 | 1 | 45 | 3 |
| 09 | 1 | 20 | 4 | 32 | 3 | 47 | 4 |
| 10 | 3 | 22 | 1 | 34 | 4 | 48 | 2 |
| 12 | 2 | 24 | 3 | 35 | 1 | | |
| | | | | 36 | 3 | | |

## Coverage of the focus list

Gender-affirming support (01 binding, 02 anatomy history). Cyberbullying (03, 04). Avoidant/restrictive food intake (05, 06). Gambling (07, 08). Hoarding (09, 10). Dissociation (11, 12). DBT skills (13, 14). Body dysmorphic concerns (15, 16). Methamphetamine psychosis (17, 18). Benzodiazepine taper (19, 20). Cannabis withdrawal (21, 22). Kratom (23, 24). Teen vaping cessation (25, 26). Moral injury in staff (27, 28). Mass casualty support (29 staff, 30 families). Blended family (31). Autism caregiver (32, 33). Infertility (34). HIV disclosure (35, 36). Separation anxiety and school refusal (37, 38). Oppositional and conduct problems (39, 40). Tics (41, 42). Selective mutism (43). Hindu care (44). Sikh care (45). BCC: aromatherapy (46), music (47), PC6 acupressure (48), paced breathing (49), hygiene in severe depression (50).

## Sources and verification

- Peitzmeier S et al. Culture, Health and Sexuality 2017. https://pubmed.ncbi.nlm.nih.gov/27300085/
- Deutsch MB, UCSF Gender-Affirming Care Guidelines, 2nd edition, 2016. https://transcare.ucsf.edu/guidelines
- Hinduja S, Patchin JW. Bullying Beyond the Schoolyard, 3rd edition, 2023. https://www.sagepub.com/books/Book286130
- Potenza MN et al. Gambling Disorder. Nature Reviews Disease Primers 2019. https://doi.org/10.1038/s41572-019-0099-7
- Linehan MM. DBT Skills Training Manual, 2nd edition, 2015. https://www.guilford.com/books/DBT-Skills-Training-Manual/Marsha-Linehan/9781462516995
- SAMHSA TIP 33, 2021. https://www.ncbi.nlm.nih.gov/books/NBK576541/
- Brunner E et al. Joint Clinical Practice Guideline on Benzodiazepine Tapering. JGIM 2025. Pace wording read in full text. https://pmc.ncbi.nlm.nih.gov/articles/PMC12463801/
- Connor JP et al. Clinical Management of Cannabis Withdrawal. Addiction 2022. Onset and peak wording read in full text. https://pmc.ncbi.nlm.nih.gov/articles/PMC9110555/
- Leong Bin Abdullah MFI. Kratom Dependence and Treatment Options. Current Drug Targets 2020. https://pubmed.ncbi.nlm.nih.gov/32682371/
- Graham AL et al. JAMA 2024, text message vaping cessation in adolescents. https://pubmed.ncbi.nlm.nih.gov/39110436/
- Williamson V et al. Moral Injury Prevention and Intervention. European Journal of Psychotraumatology 2025. Read in full text. https://pmc.ncbi.nlm.nih.gov/articles/PMC12541919/
- Litz BT et al. Clinical Psychology Review 2009. https://sites.bu.edu/litzlab/files/2023/04/Moral-injury-and-moral-repair-in-war-veterans-Litz-2009.pdf
- WHO, Psychological First Aid: Guide for Field Workers, 2011. https://iris.who.int/handle/10665/44615
- Rose SC et al. Cochrane CD000560, 2002. https://www.cochrane.org/evidence/CD000560_psychological-debriefing-preventing-post-traumatic-stress-disorder-ptsd
- Gameiro S et al. ESHRE psychosocial care guideline. Human Reproduction 2015. https://doi.org/10.1093/humrep/dev177
- CDC partner services recommendations. MMWR 57(RR-9), 2008. https://www.cdc.gov/mmwr/PDF/rr/rr5709.pdf
- NICE CG158, 2013. https://www.nice.org.uk/guidance/cg158
- Pringsheim T et al. AAN tic treatment guideline. Neurology 2019. https://depts.washington.edu/dbpeds/TS[Pringsheim2019-New Practice Guidelines].pdf
- Queensland Health, Health Care Providers' Handbook on Hindu Patients, 2011. Content checked through the Hinduism Today excerpt of the handbook. https://www.health.qld.gov.au/multicultural/health_workers/hbook-hindu
- Bradford Teaching Hospitals NHS Foundation Trust, SPaRC multi-belief guide, Sikh page. Read in full. https://sparc.bradfordhospitals.nhs.uk/?p=533
- NCI PDQ Aromatherapy With Essential Oils, health professional version, updated 31 October 2024. Adverse effects section read. https://www.cancer.gov/about-cancer/treatment/cam/hp/aromatherapy-pdq
- Lee JH. The Effects of Music on Pain. Journal of Music Therapy 2016. https://academic.oup.com/jmt/article/53/4/430/973764
- Lee A, Chan SKC, Fan LTY. Cochrane CD003281, 2015. https://doi.org/10.1002/14651858.CD003281.pub4
- Joseph AE et al. Slow deep breathing for acute pain. Journal of Evidence-Based Integrative Medicine 2022. Read in full text. https://pmc.ncbi.nlm.nih.gov/articles/PMC8891889/
- Textbooks reused from s28: Halter (Varcarolis 9th edition, 2022), DSM-5-TR (2022), Hockenberry (Wong's 12th edition, 2024), Potter (Fundamentals 11th edition, 2023).

## For the reviewer

- rn-s33-45 (Sikh care after death) and rn-s12-38 (Sikh articles of faith before surgery) share the idea that articles of faith stay in place. The s33 point is care of the body after death: hair and beard uncut, body kept on the unit until the family arrives. Judge whether the teaching point is new enough.
- rn-s33-45 cites a hospital web page with no publication date. The year 2026 is the page's copyright year. A dated source such as the Queensland Health Sikh handbook (2011) was found but could not be opened.
- rn-s33-44 (Hindu death rites) has the same shape as rn-s28-22 (Muslim death rites). Its keys rest on Hindu-specific rites from the Queensland handbook.
- rn-s33-23 (kratom bowtie) had overlapped rn-s11-31 (heroin withdrawal bowtie: COWS, naloxone, withdrawal score). I rewrote its actions and parameters to centre on kratom as an herbal product, provider awareness and pain planning. The opioid-like withdrawal cues still resemble s11-31 by design.
- rn-s33-31 (stepfamily discipline) rests on Hockenberry. I did not check the exact page on stepfamily discipline.
- rn-s33-01 binding. The study supports off days and the risks of elastic bandages, layering and small sizes. The why for overnight wear is general reasoning, not a study finding.
- rn-s33-17 and rn-s33-18 cite TIP 33, but the NCBI copy was behind a browser check. The claims are general (low stimulation, hyperthermia and cardiovascular toxicity in stimulant psychosis). Halter supports the nursing care.
- rn-s33-03 and rn-s33-04 cite the Hinduja and Patchin book and Hockenberry. The warning signs and steps (keep evidence, do not reply, report threats of violence to police) match StopBullying.gov, which could not be fetched for a date.
- rn-s33-20. The last taper step, 1.6 mg to 1.2 mg in 2 weeks, is exactly 25%, the guideline ceiling. The rationale calls it a larger step, not one that breaks the ceiling.
- I ran out of web searches near the end, so I could not check whether kratom shows up on standard urine drug screens. No item depends on that claim.
