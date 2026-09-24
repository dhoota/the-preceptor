# s13 writer report

Batch s13. 50 stand-alone items. Basic Care and Comfort. All items have `reviewed: false`, `version: 1` and an empty `canada` note.

Files: `src/bank/s13/common.ts` (meta and sources), `part1.ts` to `part5.ts` (10 items each), `index.ts`.

Checks run:

- `BATCH=s13 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s13`: prints nothing.

## Counts

Client Needs: BCC 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2 (one dyad, one triad), highlight 2, bowtie 2, trend 2 (item 20 is mc, item 40 is sata).

CJMM steps: recognize 5, analyze 8, prioritize 4, generate 11, action 17, evaluate 5.

Difficulty: 1 has 8, 2 has 18, 3 has 18, 4 has 4, 5 has 2.

Topic spread across the area:

- Assistive devices: cane (01), crutches on stairs (02), hearing aid feedback (03), CPAP mask leak (31), contact lenses (34), handling equipment by mobility level (29), walker (46).
- Elimination: constipation plan (08), bladder training (09), fecal impaction (10), ileostomy pouch change (18), retention after spinal anesthesia (22), catheter care by AP (27), bowel program after spinal cord injury (32), incontinence-associated dermatitis (38), stoma check (41), enema (49).
- Mobility and immobility: pressure injury prevention (05), orthostatic hypotension after bed rest (19), wheelchair transfer (21), stage 1 pressure injury (23), foot drop (44), immobility complications (50).
- Nonpharmacologic comfort: cold pack (15), low back pain (16), heat request (33), dementia pain comfort (37), massage and a calf clot (45).
- Nutrition and oral hydration: intake total (04), stroke meal care (07), tube feeding checks (11), feeding rate (12), fluid deficit trend (20), BMI (25), malnutrition risk (28), protein snacks (30), tube position check (35), aspiration during feeding (39), low vision meals (42), chemotherapy nausea (47).
- Personal hygiene: mouth care without gag reflex (13), diabetic foot care (14), shaving on heparin (24), bathing in dementia (26), denture care (36).
- Rest and sleep: stimulus control (06), hospital sleep (17), sleep plan trend (40), sleep with aging (43), night-shift sleep (48).

Calculations with a `calc` block: 04 (intake total), 12 (feeding rate), 25 (BMI).

## MC key positions

27 mc items including trend item 20. Positions 1 to 4: 6, 7, 7, 7.

By item: 01 A, 02 B, 03 C, 04 C, 05 B, 06 D, 11 D, 12 C, 13 B, 14 C, 15 A, 20 C, 21 B, 22 C, 23 D, 24 D, 25 B, 31 A, 32 A, 33 C, 34 D, 35 A, 41 D, 42 A, 43 B, 44 D, 45 B.

The key is the strict longest option in 5 of 27 mc items (03, 05, 13, 21, 22). Keyed choices run longer than distractors in 8 of 23 multi-key pools. Select all keys in the first half of the list: 20 of 41.

## Sources

Each source was checked by web search on 24 September 2026.

- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. 2023. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition. 2022. https://www.amazon.com/Brunner-Suddarths-Textbook-Medical-Surgical-Nursing/dp/1975161033
- EPUAP, NPIAP and PPPIA. Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline, 3rd edition. 2019. https://epuap.org/pu-guidelines/
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15. 2017. https://aspenjournals.onlinelibrary.wiley.com/doi/10.1177/0148607116673053
- AACN Practice Alert: Prevention of Aspiration in Adults. Critical Care Nurse 36(1):e20. 2016. https://aacnjournals.org/ccnonline/article/36/1/e20/3543/Prevention-of-Aspiration-in-Adults
- Edinger JD et al. AASM guideline on behavioral and psychological treatments for chronic insomnia. J Clin Sleep Med 17(2):255. 2021. https://jcsm.aasm.org/doi/10.5664/jcsm.8986
- WOCN Society Clinical Guideline: Management of the Adult Patient With a Fecal or Urinary Ostomy. 2017. https://www.nursingcenter.com/journalarticle?Article_ID=4485640&Journal_ID=448075&Issue_ID=4485343
- IDDSI. Complete IDDSI Framework Detailed Definitions 2.0. 2019. https://www.iddsi.org/standards/framework
- Boynton T, Kelly L, Perez A. Implementing a Mobility Assessment Tool for Nurses. American Nurse Today 9(9). 2014. https://www.myamericannurse.com/implementing-mobility-assessment-tool-nurses/
- American Nurses Association. Safe Patient Handling and Mobility: Interprofessional National Standards, 2nd edition. 2021. https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/
- ADA Professional Practice Committee. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes 2025. Diabetes Care 48(Suppl 1):S252. 2025. https://diabetesjournals.org/care/article/48/Supplement_1/S252/157552/12-Retinopathy-Neuropathy-and-Foot-Care-Standards
- Qaseem A et al. ACP. Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain. Ann Intern Med 166(7):514. 2017. https://www.acpjournals.org/doi/10.7326/M16-2367
- Qaseem A et al. ACP. Nonsurgical Management of Urinary Incontinence in Women. Ann Intern Med 161(6):429. 2014. https://www.acpjournals.org/doi/10.7326/M13-2410
- Warden V, Hurley AC, Volicer L. PAINAD scale. J Am Med Dir Assoc 4(1):9. 2003. https://pubmed.ncbi.nlm.nih.gov/12807591/
- Gould CV et al. HICPAC. Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009. https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf
- Powers WJ et al. AHA and ASA. Early Management of Acute Ischemic Stroke, 2019 Update. Stroke 50(12):e344. https://www.ahajournals.org/doi/10.1161/STR.0000000000000211
- CDC. Adult BMI Categories. 2024. https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html

## For the reviewer

- Item 05 cites the Braden high risk band of 10 to 12 through Potter. The original Braden paper (1987) fails the year gate, so it is not cited.
- Item 11 relies on the ASPEN hang time of 8 hours for open system formula in a health care setting. I recalled this from the guideline and did not read the page itself.
- Item 35 relies on the ASPEN statement that an aspirate pH of 5 or less supports gastric placement. Same caveat.
- Item 47 says favorite foods eaten during nausea can become disliked (learned food aversion). This is common teaching but Hinkle may not state it in those words.
- Item 43 treats the sleep change as normal aging. The client functions well by day, so no referral is keyed.
- Item 49 uses Potter's adult enema values: tip 7.5 to 10 cm, bag 30 to 45 cm above the anus.
- Item 22 keys intermittent catheterization. Some units need a prescription or protocol for it. The stem does not name one.
- Item 45 asks "For which client is this massage unsafe?". Only the calf clot client is unsafe.

## Process note

While I worked, another writer was also writing into `src/bank/s13/`. It added its own `sources.ts`, `part2.ts` and `part3.ts` and switched my `part1.ts` import. It then moved its files to the scratchpad and put my import back. None of its items are in this batch.

A file `src/bank/s13/extra.ts` appeared that I did not write. It exports `EXTRA` with two items, `rn-s13-91` and `rn-s13-92`. `index.ts` does not import it, so it is not in the bank. Both items are wrong and should not ship. Item 92 names protamine sulfate as the antidote for magnesium toxicity. The antidote is calcium gluconate. Item 91 is tagged BCC but tests hyperkalemia, and one of its whys is false. I did not edit or delete the file. Someone should remove it.
