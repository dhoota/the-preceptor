# Conformance report: batch s11 (gi-bleed, headache)

Format pass under `docs/CONFORMANCE_BRIEF.md`. 30 SAMPs, 115 questions (32 single, 8 menu, 75 write-in). No answer was changed. Every `correct` index was remapped to the same option text after sorting, and every write-in `required`, `accept` and `unacceptable` is unchanged. Only `src/samps/s11/gi-bleed.ts` and `src/samps/s11/headache.ts` were edited.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 109 (32 single, 8 menu, 69 write-in). The other 6 write-in prompts were already questions ending in "?" |
| Updates added (context moved out of a prompt) | 12 |
| Existing updates changed (units only, such as "mmHg") | 7 |
| Options removed | 2 (gi-bleed-04 q2 "Capsule endoscopy", gi-bleed-10 q3 "Protamine 50 mg IV", both singles with 6 options) |
| Options added | 0 |
| Options reworded | 98 (80 distractors, 18 keyed options) |
| Keyed options reworded | 18, in 17 questions across 16 SAMPs |
| Stems changed | 30 (hyphenated ages, vitals moved, units) |
| Vitals moved to the `vitals` field | 30 SAMPs |
| Patient names removed | 0 (none present) |
| Citations completed | 11 (years, editions or chapters added) |
| Citations replaced | 1 (Thrombosis Canada warfarin guide, now named exactly) |

Menu keys that only changed order because of alphabetical sorting (gi-bleed-01 q3, gi-bleed-15 q1, headache-04 q2, headache-09 q2) have unchanged text and are not counted as rewordings.

## Key position counts (32 single questions)

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 16 | 11 | 5 | 0 | 0 |
| After | 6 | 6 | 8 | 5 | 7 |

The largest position share is now 25 percent (8 of 32). The key is the single longest option in 10 of 32 singles (31 percent).

## Keyed option rewordings

Each one was needed because the key was longer than 60 characters, had more than 10 words, held reason text or a full stop, or broke length parity. Where a detail had to come out of the option, it is now in the explanation.

| SAMP | Question | Before | After |
|---|---|---|---|
| gi-bleed-02 | q2 | No transfusion now. Recheck hemoglobin and transfuse if it falls below about 70 to 80 g/L | No transfusion now, recheck, transfuse below 70 to 80 g/L |
| gi-bleed-05 | q3 | Direct pressure and a topical vasoconstrictor, then silver nitrate cautery of the bleeding point | Pressure, vasoconstrictor, then focal silver nitrate cautery |
| gi-bleed-08 | q3 (menu) | Erythromycin 250 mg IV about 30 to 120 minutes before endoscopy | Erythromycin 250 mg IV about 30 to 120 minutes before |
| gi-bleed-12 | q5 | Continue it, or hold it only briefly and resume once hemostasis is achieved | Continue, or hold briefly and resume after hemostasis |
| gi-bleed-13 | q3 | Do not give it. In GI bleeding it does not reduce death and increases venous thrombosis | Withhold tranexamic acid |
| gi-bleed-14 | q2 | Hold anticoagulation and perform a rectal exam and GI assessment | Hold anticoagulation, do rectal exam and GI assessment |
| gi-bleed-14 | q3 | Transfuse red cells now and reassess, aiming for a hemoglobin of at least 80 g/L | Transfuse red cells now, reassess, target 80 g/L or more |
| gi-bleed-15 | q3 | Arrange urgent transfer to the gastroenterology centre with blood and octreotide running and a physician or critical care escort | Urgent transfer with escort, blood and octreotide running |
| headache-01 | q2 | She needs investigation for SAH because she is 40 or older and the onset was during exertion | Investigate SAH given age 40 or more and exertional onset |
| headache-02 | q2 (menu) | Nimodipine 60 mg PO or by nasogastric tube every 4 hours | Nimodipine 60 mg enterally every 4 hours |
| headache-02 | q2 (menu) | Labetalol 10 to 20 mg IV, repeated to keep systolic BP below about 160 | Labetalol 10 to 20 mg IV repeated, systolic below 160 |
| headache-04 | q3 | Blood cultures, then antibiotics immediately, with LP deferred until she is stable | Blood cultures, immediate antibiotics, LP once stable |
| headache-06 | q2 (menu) | Magnesium sulfate 4 g IV over 15 to 20 minutes, then 1 g/h | Magnesium sulfate 4 g IV load, then 1 g/h |
| headache-08 | q3 | Start high dose glucocorticoids today and arrange temporal artery ultrasound or biopsy within 1 to 2 weeks | High dose steroids now, biopsy or ultrasound within 2 weeks |
| headache-09 | q4 | Same day ophthalmology assessment for laser peripheral iridotomy | Same day ophthalmology for laser peripheral iridotomy |
| headache-12 | q2 | Carboxyhemoglobin level by co-oximetry on a venous or arterial blood gas | Carboxyhemoglobin by co-oximetry on a blood gas |
| headache-13 | q4 | Avoid starting topical steroids in the ED and arrange ophthalmology review within 24 hours | Defer steroid drops to ophthalmology review within 24 hours |
| headache-14 | q4 | Antithrombotic therapy, such as ASA, with prompt stroke prevention follow up | Antithrombotic such as ASA, prompt stroke prevention review |

Detail moved into explanations: gi-bleed-05 q3 (full pressure, vasoconstrictor and focal cautery sequence), gi-bleed-08 q3 (erythromycin timing before endoscopy), gi-bleed-15 q3 (transfer to the gastroenterology centre with a physician or critical care escort), headache-02 q2 (nimodipine PO or by nasogastric tube, labetalol repeated to systolic below about 160), headache-06 q2 (loading dose over 15 to 20 minutes), headache-12 q2 (venous or arterial sample), headache-13 q4 (ophthalmology review within 24 hours).

## Citation changes

| SAMP file | Source id | Change | Verification |
|---|---|---|---|
| gi-bleed | tc-doac | Now "Thrombosis Canada. Clinical guide: DOACs: management of bleeding. 2024." Date of version 5 February 2024 | https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf |
| gi-bleed | tc-warfarin | Replaced. The old citation named no real guide title. Now "Thrombosis Canada. Clinical guide: warfarin. 2024." Date of version 5 February 2024. It covers IV vitamin K with four factor PCC for emergency reversal, no role for SC vitamin K, and antibiotic and acetaminophen interactions, which is what q1 and q2 cite | https://thrombosiscanada.ca/clinical_guides/pdfs/WARFARIN_40.pdf |
| gi-bleed | cbs | Now Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. Clinical Guide to Transfusion, Chapter 11. Canadian Blood Services. 2021 | https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion |
| both | rosen | Added 10th ed. and 2023 | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| both | tintinalli | Added editors, 9th ed. and 2020 | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| headache | phac-men | Now "Guidelines for the prevention and control of meningococcal disease. Can Commun Dis Rep. 2005. Volume 31 Supplement 1." Title corrected. The word "invasive" is not in the published title | https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/05pdf/31s1_e.pdf |
| headache | aao | Now Gedde SJ, Chen PP, Muir KW, et al. Primary angle-closure disease Preferred Practice Pattern. Ophthalmology. 2021 | https://pubmed.ncbi.nlm.nih.gov/34933744/ |
| headache | uhms | Now Huang E, editor. UHMS Hyperbaric Medicine Indications Manual. 15th ed. 2024 | https://books.google.com/books/about/UHMS_Hyperbaric_Medicine_Indications_Man.html?id=pSTuEAAAQBAJ |
| headache | csbpr | Now Heran M, Lindsay P, Gubitz G, et al. CSBPR acute stroke management, 7th edition update 2022. Can J Neurol Sci. 2024 | https://www.cambridge.org/core/journals/canadian-journal-of-neurological-sciences/article/canadian-stroke-best-practice-recommendations-acute-stroke-management-7th-edition-practice-guidelines-update-2022/ADE40445915FC8DB1D0C72F9954386D8 |

All other citations already had an author or body, a work and a year. No question's `source` id was changed.

## Stem and vitals notes

- Ages hyphenated in all 30 stems. gi-bleed-15 now opens "You are working in a rural hospital ...".
- Vitals moved to the `vitals` field with every value unchanged. Context that the field cannot hold stayed in the stem as a sentence: usual BP (gi-bleed-03, gi-bleed-10, headache-11), the repeat BP (headache-06), unchanged lying and standing vitals (gi-bleed-07), GCS, capillary glucose and capillary refill.
- In 17 SAMPs the stem gave SpO2 with no oxygen status. The vitals format needs "on ...", so these now read "NN% on arrival" rather than adding "room air", which the stem did not state.
- gi-bleed-01 gives an estimated weight ("about 80 kg"). The vitals format cannot hold "about", so it stays in the stem as "His weight is about 80 kg."
- "mm Hg" changed to "mmHg" in headache-09 updates. The write-in accept text "above 40 mm Hg" was not touched.

## Checks

- `npx tsc --noEmit -p .` shows no errors in `samps/s11`.
- `CONFORM=s11 SAMP_BATCH=s11 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 481 passed, 16 failed. All 16 failures are the expected "keeps its keys" tests for the 16 SAMPs with keyed rewordings listed above.
- A separate script compared the batch before and after: question ids, kinds, `select`, `source`, `keyFeature`, `required`, `accept` and `unacceptable` are identical. Keyed text differs only where the table above says.
- Note for the orchestrator: while this pass ran, `src/samps/s01/index.ts` was overwritten outside this batch. It now exports `SAMPS_S13` from lacerations and multiple-patients, so `SAMPS_S01` is undefined and both test files fail to load in the live tree. The s11 results above come from a scratch copy of the repo with only `s01/index.ts` stubbed. s01 was not touched here.

## Needs physician decision

1. SpO2 oxygen status. 17 stems gave no oxygen status and now read "on arrival". Confirm whether these should read "on room air".
2. Softened qualifiers in keyed options. headache-02 labetalol now reads "below 160" (was "below about 160"). gi-bleed-02 now reads "below 70 to 80 g/L" (was "below about 70 to 80 g/L"). headache-08 now reads "within 2 weeks" (was "within 1 to 2 weeks"). The explanations keep the original wording. Confirm the option wording is acceptable.
3. gi-bleed-03 q3 key text gives PCC 50 units/kg (maximum 3000 units) or a fixed 2000 units. The 2024 Thrombosis Canada guide gives 25 to 50 units/kg (maximum 3000 units) or 2000 units fixed. The key is within that range. Left unchanged.
4. Source currency. phac-men (PHAC 2005) and idsa-men (IDSA 2004) are the only sources for the meningitis questions and are over 20 years old. The chemoprophylaxis regimens still match current practice, but a newer Canadian source may be preferred. Left unchanged.
5. gi-bleed-13 q4 (resuscitation measures) cites the Thrombosis Canada warfarin guide, which does not cover resuscitation. The CBS massive hemorrhage chapter would fit better. The source id was left unchanged.
