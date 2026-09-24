# s14 writer report

Batch s14. 50 stand-alone items. Basic Care and Comfort. All items have `reviewed: false`, `version: 1` and an empty `canada` note.

Files: `src/bank/s14/common.ts` (meta and sources), `part1.ts` to `part5.ts` (10 items each) and `index.ts`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep bank/s14` prints nothing.
- `BATCH=s14 npx vitest run tests/bank.test.ts` passes 60 of 61. Every s14 test passes. The one failure is the whole-bank near duplicate test. It flags rn-c01-1-1 with rn-c04-2-1 and rn-c02-1-1 with rn-c04-4-1. Neither pair is in s14. An earlier s14 stem (item 50) matched rn-s22-23. I rewrote the s14 stem, and it no longer matches.

## Counts

Client Needs: BCC 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2 (one zero-one, one triad), highlight 2, bowtie 2, trend 2 (item 10 is mc, item 40 is sata).

CJMM steps: recognize 5, analyze 5, prioritize 4, generate 13, action 18, evaluate 5.

Difficulty: 1 has 3, 2 has 19, 3 has 20, 4 has 7, 5 has 1.

Calculations with a `calc` block: 34 (calories from a continuous feed) and 35 (daily flush water).

Topic spread:

- Assistive devices: crutch gait (01), external catheter (02), sling lift (24), artificial eye (25), hip precaution aids (32), compression stockings (33), arm sling (43), eating aids (46).
- Elimination: ileostomy output trend (10), self-catheterization (21), pelvic floor exercise (22), ileal conduit mucus (23), night voiding (28), constipation risk (38), bowel diary trend (40).
- Mobility and immobility: passive range of motion (03), logroll (06), wet plaster cast (11), Buck's traction (12), flaccid shoulder (16), quadriceps setting (45).
- Nondrug comfort: perineal cold after birth (13), TENS teaching (14), bubbles for a preschooler (30), back labor counterpressure (31), breathlessness in hospice (42).
- Nutrition and oral hydration: low potassium snacks (05), low sodium lunch (09), gluten-free choices (15), dumping syndrome (19), iron absorption (36), dehydration in dementia (37), clear liquid diet (39), kosher tray (49).
- Tube feeding: gastric residual volume (04), blocked tube (07), medications by tube (20), calorie total (34), flush total (35), gastrostomy site (41), diarrhea from sorbitol (44).
- Personal hygiene: mucositis mouth care (18), shower with COPD (26), ear hygiene (27), coiled hair care (47).
- Rest and sleep: sleep apnea cues (08), teen sleep habits (17), insomnia habits (29), sleep deprivation signs (48).
- Priority: first client to see (50).

## MC key positions

27 mc items including trend item 10. Positions A to D: 7, 7, 7, 6.

By item: 01 C, 03 A, 04 B, 07 D, 09 D, 10 A, 11 B, 13 C, 14 C, 16 B, 18 A, 20 D, 22 B, 23 A, 25 C, 27 D, 28 B, 30 C, 31 A, 34 C, 35 B, 41 D, 44 A, 45 B, 47 D, 49 A, 50 C.

The key is the strict longest option in 7 of 27 mc items (22, 23, 25, 28, 44, 45, 49). Select all keys in the first half of the list: 20 of 42.

## Sources

Checked by web search on 24 September 2026.

- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. 2023. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition. 2022.
- Hockenberry MJ, Duffy EA, Gibbs K. Wong's Nursing Care of Infants and Children, 12th edition. 2023. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- Lowdermilk DL, Cashion K, Alden KR, Olshansky E, Perry SE. Maternity and Women's Health Care, 13th edition. 2023. https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15. 2017. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- McClave SA et al. SCCM and ASPEN Guidelines for the Provision and Assessment of Nutrition Support Therapy in the Adult Critically Ill Patient. JPEN 40(2):159. 2016. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607115621863
- Edinger JD et al. AASM guideline on behavioral and psychological treatments for chronic insomnia. J Clin Sleep Med 17(2):255. 2021. https://jcsm.aasm.org/doi/10.5664/jcsm.8986
- Chung F et al. STOP Questionnaire. Anesthesiology 108(5):812. 2008. http://stopbang.ca/publication/pdf/pub6.pdf
- WOCN Society ostomy guideline executive summary. J Wound Ostomy Continence Nurs 45(1):50. 2018. https://pubmed.ncbi.nlm.nih.gov/29300288/
- Gould CV et al. HICPAC. Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009. https://www.cdc.gov/infection-control/hcp/cauti/summary-of-recommendations.html
- Qaseem A et al. ACP. Nonsurgical Management of Urinary Incontinence in Women. Ann Intern Med 161(6):429. 2014. https://www.acpjournals.org/doi/10.7326/M13-2410
- American Nurses Association. Safe Patient Handling and Mobility, 2nd edition. 2021. https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/
- Ikizler TA et al. KDOQI Clinical Practice Guideline for Nutrition in CKD: 2020 Update. Am J Kidney Dis 76(3 Suppl 1):S1. https://pubmed.ncbi.nlm.nih.gov/32829751/
- Heidenreich PA et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 145(18):e895. https://pubmed.ncbi.nlm.nih.gov/35363499/
- Rubio-Tapia A et al. ACG Guidelines Update: Diagnosis and Management of Celiac Disease. Am J Gastroenterol 118(1):59. 2023. https://pubmed.ncbi.nlm.nih.gov/36602836/
- Elad S et al. MASCC/ISOO mucositis guidelines. Cancer 126(19):4423. 2020. https://acsjournals.onlinelibrary.wiley.com/doi/10.1002/cncr.33100
- NIDDK. Dumping Syndrome pages, last reviewed January 2019. https://www.niddk.nih.gov/health-information/digestive-diseases/dumping-syndrome/symptoms-causes
- Schwartz SR et al. AAO-HNSF. Clinical Practice Guideline (Update): Earwax (Cerumen Impaction). Otolaryngol Head Neck Surg 156(1 Suppl):S1. 2017. https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599816671491
- NIH Office of Dietary Supplements. Iron: Fact Sheet for Health Professionals, updated 4 September 2025. https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/

## For the reviewer

- Item 04 relies on the SCCM and ASPEN 2016 advice not to hold feeding for a residual under 500 mL without other signs of intolerance. The 2022 ASPEN critical care guideline (Compher et al.) did not revisit residuals. I cited the 2016 guideline.
- Item 07: I confirmed warm water first, and no cola or cranberry juice, through a 2025 ASPEN systematic review (Chaiyapak, Nutrition in Clinical Practice). I did not read the Boullata 2017 full text for the same advice.
- Item 08: the neck cutoff of over 40 cm comes from the original STOP-Bang paper. Some later versions use sex-specific cutoffs.
- Item 13 refs: ice for the first 24 hours after birth, then warm sitz baths. This is standard maternity teaching. I did not see the exact page in Lowdermilk.
- Item 32 teaches classic posterior hip precautions. Some surgeons no longer prescribe them. The stem says precautions are prescribed.
- Item 40 refs: Bristol types 3 and 4 are normal. I cite Potter and did not check the page.
- Item 42: fan to the face for breathlessness is well supported in palliative care research. Hinkle may not state it directly. A palliative care source would be stronger.
- Item 44 names sorbitol as the most likely cause. The stem rules out lactose, rate change and an open system. No antibiotic is listed, so C. difficile is less likely, but the stem does not say that outright.
- Items 17, 26, 46, 47 and 48 rest on textbook content (Hockenberry, Hinkle, Potter) that I did not see page by page.
- Item 50 keys the ileostomy client with dizziness over a walker user who wants to go to the bathroom. Both are real needs. The key rests on physiological instability.
