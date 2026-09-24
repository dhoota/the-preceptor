# Batch c12 writer report

Five case studies of six items each, 30 items in all. Every item is `reviewed: false`, `version: 1`, with `canada` left empty for the later pass. All BATCH=c12 tests pass. `npx tsc --noEmit -p .` prints nothing for bank/c12.

## Cases, in the planned order

| Case | Scenario from the topic plan | Setting | Client |
|---|---|---|---|
| rn-c12-1 | Anorexia nervosa with refeeding risk | Adolescent medical unit | Girl, 16 |
| rn-c12-2 | Opioid overdose, emergency department | Emergency department | Man, 34 |
| rn-c12-3 | Small bowel obstruction with a nasogastric tube | Surgical unit | Woman, 68 |
| rn-c12-4 | Perforated appendicitis in a child | Pediatric emergency and surgical unit | Boy, 9 |
| rn-c12-5 | Day 1 after total knee replacement | Orthopedic unit | Woman, 71 |

## Counts

Client Needs, matching the plan: MOC 6, SIPC 4, HPM 3, PSY 2, BCC 2, PPT 5, RRP 4, PA 4.

| Case | Item 1 | Item 2 | Item 3 | Item 4 | Item 5 | Item 6 |
|---|---|---|---|---|---|---|
| 1 | RRP | RRP | PA | BCC | PSY | PPT |
| 2 | PA | PPT | PA | SIPC | PPT | HPM |
| 3 | RRP | RRP | MOC | SIPC | MOC | PPT |
| 4 | PA | MOC | BCC | HPM | PPT | SIPC |
| 5 | SIPC | MOC | MOC | PSY | MOC | HPM |

Item types: matrix 9, highlight 4, sata 4, msn 4, mc 4, cloze 3 (1 triad, 1 dyad, 1 zero-one), dnd 2 (both zero-one). Each case uses 5 or 6 types.

CJMM steps: each case walks the six steps in order, so 5 items per step.

Difficulty: level 2 has 10 items, level 3 has 15, level 4 has 5.

MC key positions: rn-c12-2-5 is 3, rn-c12-3-3 is 4, rn-c12-4-5 is 2, rn-c12-5-3 is 1. Every position is used once.

Calculations: rn-c12-2-5 (naloxone infusion rate, 100 mL/hour) and rn-c12-4-5 (piperacillin dose by weight, 2800 mg). Both carry a `calc` block.

## Sources used

| Key | Source | Verified at |
|---|---|---|
| aapEd | Hornberger LL, Lane MA. AAP Committee on Adolescence. Pediatrics 147(1):e2020040279, 2021 | https://pubmed.ncbi.nlm.nih.gov/33386343/ |
| sahm | Society for Adolescent Health and Medicine. J Adolesc Health 71(5):648, 2022 | https://pubmed.ncbi.nlm.nih.gov/36058805/ |
| refeeding | da Silva JSV et al. ASPEN Consensus Recommendations for Refeeding Syndrome. Nutr Clin Pract 35(2):178, 2020 | https://pubmed.ncbi.nlm.nih.gov/32115791/ (full text read, tables 3, 5, 6, 7) |
| halter | Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022 | https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1 |
| boyer | Boyer EW. Management of Opioid Analgesic Overdose. N Engl J Med 367(2):146, 2012 | https://pubmed.ncbi.nlm.nih.gov/22784117/ and PMC3739053 |
| ahaTox | Lavonas EJ et al. 2023 AHA Focused Update on poisoning. Circulation 148(16):e149, 2023 | https://pubmed.ncbi.nlm.nih.gov/37721023/ |
| naloxone | DailyMed. Naloxone Hydrochloride Injection, USP label, International Medication Systems, 2023 | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=236349ef-2cb5-47ca-a3a5-99534c3a4996 |
| samhsa | SAMHSA Overdose Prevention and Response Toolkit, PEP23-03-00-001, 2023 | https://library.samhsa.gov/product/overdose-prevention-response-toolkit/pep23-03-00-001 (full text read) |
| bologna | Ten Broek RPG et al. Bologna guidelines for ASBO, 2017 update. World J Emerg Surg 13:24, 2018 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/ |
| brunner | Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022 | Already used across the bank |
| aspenEn | Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15, 2017 | https://pubmed.ncbi.nlm.nih.gov/27815525/ |
| delegation | NCSBN and ANA. National Guidelines for Nursing Delegation, 2019 | https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf |
| wong | Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2023 | Already used across the bank |
| zosyn | DailyMed. Zosyn (piperacillin and tazobactam) label, Baxter, revised 2026 | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8db6bd91-2106-4bfd-8cc8-38aaf1e18d17 |
| consent | Katz AL, Webb SA. AAP Committee on Bioethics. Pediatrics 138(2):e20161485, 2016 | https://pubmed.ncbi.nlm.nih.gov/27456510/ |
| ssi | Berrios-Torres SI et al. CDC Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surg 152(8):784 | https://pubmed.ncbi.nlm.nih.gov/28467526/ |
| handHygiene | Boyce JM, Pittet D. HICPAC. MMWR 51(RR-16), 2002 | https://pubmed.ncbi.nlm.nih.gov/12418624/ |
| orthostatic | Freeman R et al. Consensus statement on orthostatic hypotension. Clin Auton Res 21(2):69, 2011 | https://pubmed.ncbi.nlm.nih.gov/21431947/ |
| falls | Ganz DA et al. AHRQ. Preventing Falls in Hospitals toolkit, 2013 | https://www.ahrq.gov/sites/default/files/publications/files/fallpxtoolkit.pdf |
| enoxaparin | DailyMed. Enoxaparin Sodium Injection label, 2024 | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=adfc2b23-00a5-4f05-a08b-83087e1e4843 |
| ismp | ISMP List of Error-Prone Abbreviations, Symbols, and Dose Designations, 2021 | https://www.ismp.org/system/files/resources/2021-02/Error%20Prone%20Abbreviations%202021_0.pdf |
| potter | Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition, 2023 | https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0 |
| sbar | Institute for Healthcare Improvement. SBAR Tool, 2023 | https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation |
| aaosTkr | American Academy of Orthopaedic Surgeons. OrthoInfo: Total Knee Replacement, 2023 | https://www.orthoinfo.org/en/treatment/total-knee-replacement |

## For the reviewer

- rn-c12-1-1. The vital sign limits (heart rate under 50/minute, temperature under 35.6°C, orthostatic changes over 20) come from the AAP 2021 criteria as quoted in a secondary summary. I could not open the AAP or SAHM full text. SAHM 2022 may use a larger orthostatic pulse rise for adolescents. The stem values (a rise of 44/minute and a systolic fall of 22 mmHg) exceed either limit, so the key holds.
- rn-c12-1-4. ASPEN starts pediatric refeeding at 40 to 50 percent of goal, while SAHM 2022 supports higher starting calories in adolescents. The item avoids calorie numbers and keys only monitoring, thiamine and records. "Advance to full calories on day 2" is wrong under both.
- rn-c12-1-5. Observing for 1 hour after meals is standard eating disorder unit practice. I cited Halter but did not check the page.
- rn-c12-2-5. The infusion rate is given as a prescription. I did not teach a rule for choosing the hourly dose, because the usual two-thirds rule traces to a 1986 paper and the citation year gate starts at 1990.
- rn-c12-3-4. ASPEN Safe Practices covers feeding tubes. Its advice against air bolus auscultation and for marking the exit site is applied here to a decompression tube. Ice chips and tube securing rest on Brunner.
- rn-c12-3-5. The heparin injection is keyed to the licensed practical nurse. Scope varies by state.
- rn-c12-4-2. Reporting a loose tooth to anesthesia and seeking the child's assent rest on Wong and the AAP consent statement. I did not check the Wong page.
- rn-c12-4-5. The label doses by the piperacillin component. The 3150 mg distractor is the combined 112.5 mg/kg amount, so the stem names the piperacillin component on purpose.
- rn-c12-4-6. Avoiding a bath soak is common discharge teaching. I cited Wong for it without a page check.
- rn-c12-5-3. A hemoglobin fall from 12.4 to 9.1 g/dL on day 1 after knee replacement is partly expected from dilution. The key is to assess for bleeding first because the fall comes with orthostatic hypotension and tachycardia. The rationale says the findings "can mean" blood loss, not that they prove it.
- rn-c12-5-6. The pillow under the knee teaching rests on Brunner. AAOS OrthoInfo supports the fever, calf and walker rows.
- MOC is tagged on prioritizing items (rn-c12-3-3, rn-c12-5-3). They test setting priorities, which is part of that area.

## House style

No em or en dashes, no semicolons, short single-idea sentences, no filler. Client, not patient. Primary health care provider, not doctor.
