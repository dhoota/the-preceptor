# Format conformance: batch s14

Batch s14 holds 30 SAMPs: multiple-trauma-01 to 15 and pediatric-fever-01 to 15. They have 116 questions: 82 write-in, 24 single and 10 menu. This pass changed format only. No `correct` answer changed meaning. No `select`, `required`, `accept` or `unacceptable` changed. The only index changes are the `correct` remaps that alphabetical order needs. Each remap was checked by script against the keyed text.

Files edited: `src/samps/s14/multiple-trauma.ts` and `src/samps/s14/pediatric-fever.ts`.

## Checks

- `npx tsc --noEmit -p . | grep samps/s14`: no errors.
- `CONFORM=s14 SAMP_BATCH=s14 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 464 passed, 22 failed. All 22 failures are "keeps its keys" for SAMPs where keyed option text was reworded. Every such rewording is in the table below. No other test fails.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 116 of 116 (82 write-in, 34 single or menu) |
| Options added | 0 (all 24 single questions already had 5, all menus had 6 to 8) |
| Options removed | 0 |
| Options reworded (new option text) | 91 of 193 |
| Keyed options reworded | 26 option texts in 23 questions across 22 SAMPs |
| Stems changed | 30 |
| Vitals moved to the `vitals` field | 29 SAMPs (not multiple-trauma-13, see below) |
| Patient names removed | 0 (no stem named a patient) |
| Citations completed | 8 |
| Citations replaced | 3 |
| Updates added or changed | 14 (9 context sentences moved out of prompts, 1 stem event moved to an update, 4 unit notation fixes) |
| Explanations changed | 20 (text that a trimmed key or distractor used to carry, and unit notation) |

Other format work:
- Ages hyphenated in all 30 stems and in the updates that moved out of prompts.
- The micro sign replaced with "micromol/L" or "mcg/L" in 4 updates and 3 explanations (SAMP_SPEC section 10).
- Context sentences that sat in a prompt moved to the question's `update`. These are multiple-trauma-09 q1, 11 q4, 13 q2, 13 q3, and pediatric-fever-01 q2, 02 q3, 04 q4, 05 q3, 11 q3.
- multiple-trauma-08: the stem held two sets of vitals. The arrival set is now in `vitals`. The later event ("Five minutes later SpO2 is 82%, HR 138, BP 74/40 ...") moved unchanged to the q1 `update`, so the question still follows it.
- Weights given as "estimated" or "about" now read "His weight is estimated." in the stem, with the number in `vitals.weight`.
- A "Core temperature by bladder probe" value is now `31.8°C core`, and the stem says the probe was a bladder probe. "RR 48 and deep" is now `48/minute`, and the stem says "Her breathing is deep."

## Key position across the 24 single questions

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 1 | 12 | 9 | 2 | 0 |
| After | 5 | 5 | 6 | 5 | 3 |

Before, the 2nd position held 50 percent of the keys and the 5th held none. After, the most used position holds 25 percent. The key was the single longest option in 18 of 24 questions before (75 percent) and in 2 of 24 after (8 percent).

Positions were balanced only by choosing distractor wording that sorts before or after the key. For example, "Local wound exploration at the bedside" became "Bedside local wound exploration", and "Blanching red macules on the trunk" became "Red blanching macules on the trunk". In pediatric-fever-09 q2 the numeric distractor "About 300 mg/kg/day" was replaced by "About 75 mg/kg/day" (the stated maximum daily dose), so the options run 50 to 200 low to high. The keyed value, 200 mg/kg/day, is unchanged.

## Keyed option rewordings

Each rewording keeps the meaning of the signed-off key. Reason text or detail that no longer fits in 60 characters or 10 words moved to the explanation, which is noted in the last column.

| SAMP | Question | Before | After | Moved to explanation |
|---|---|---|---|---|
| multiple-trauma-01 | q2 | Continue balanced transfusion and arrange urgent angioembolization or preperitoneal pelvic packing | Transfusion and angioembolization or preperitoneal packing | No (explanation already covers it) |
| multiple-trauma-02 | q3 | Warmed blood to support preload | Warmed blood transfusion | Yes, "supports preload" |
| multiple-trauma-02 | q3 | Immediate transfer to the operating room for surgical decompression and repair | Immediate operating room decompression and repair | Yes |
| multiple-trauma-03 | q2 | Blood volume expansion means she may lose 30% or more of her volume before she becomes hypotensive, so treat this as possible hemorrhage | Possible hemorrhage, as 30% loss may precede hypotension | Yes, the full statement |
| multiple-trauma-03 | q4 | Resuscitative hysterotomy started so delivery occurs within about 5 minutes of arrest | Resuscitative hysterotomy, delivery within about 5 minutes | Yes |
| multiple-trauma-05 | q1 | Factor VIII concentrate 50 IU/kg (3000 IU) IV now, before imaging | Factor VIII 50 IU/kg (3000 IU) IV before imaging | No |
| multiple-trauma-06 | q2 | The partial pressure of oxygen falls, so oxygen requirements may rise | Partial pressure of oxygen falls, so oxygen needs may rise | No |
| multiple-trauma-07 | q3 | Continue to withhold blood because her prior capable wish applies to this situation | Continue to withhold blood | Yes, the reason |
| multiple-trauma-08 | q1 | Finger thoracostomy in the left fifth intercostal space at the midaxillary line | Finger thoracostomy, left fifth space, midaxillary line | Yes, full landmark |
| multiple-trauma-09 | q4 | Nonoperative management at a paediatric trauma centre with monitoring and serial examinations | Nonoperative management at a paediatric trauma centre | Yes, monitoring and serial examinations |
| multiple-trauma-12 | q2 | Laparotomy for haemorrhage control now, with hyperosmolar therapy and neurosurgery aware | Laparotomy now, hyperosmolar therapy, neurosurgery aware | Yes, "for haemorrhage control" |
| multiple-trauma-13 | q2 | A nurse holds firm direct pressure on the thigh wound or applies a tourniquet | A nurse applies direct thigh pressure or a tourniquet | No |
| multiple-trauma-13 | q2 | The second physician prepares to perform a left finger thoracostomy if he deteriorates with ventilation | The second physician prepares a left finger thoracostomy | Yes, the trigger |
| multiple-trauma-14 | q3 | Long leg posterior splint with the knee in slight flexion and neurovascular status recorded | Long leg posterior splint, knee in slight flexion | Yes, "Record neurovascular status before and after splinting." |
| multiple-trauma-15 | q4 | Return her to the resuscitation room, start blood, repeat eFAST and call the trauma surgeon | Resuscitation room, blood, repeat eFAST, call trauma surgeon | Yes, full sentence |
| pediatric-fever-01 | q4 | Admit and observe until all cultures are negative at 36 hours, with or without continuing antibiotics | Admit and observe until cultures negative at 36 hours | Already there ("continuing antibiotics is optional") |
| pediatric-fever-02 | q2 | Discharge home without antibiotics, with reassessment in 24 to 48 hours and follow up of the blood culture | Discharge without antibiotics, reassess in 24 to 48 hours | Yes, blood culture follow up |
| pediatric-fever-03 | q4 | Epinephrine infusion 0.05 to 0.3 mcg/kg/min through the IO or a peripheral line | Epinephrine 0.05 to 0.3 mcg/kg/min by IO or peripheral line | Yes, "An epinephrine infusion" |
| pediatric-fever-04 | q4 | Rifampin 10 mg/kg (200 mg) PO every 12 hours for 2 days | Rifampin 10 mg/kg (200 mg) PO twice daily, 2 days | Already there ("every 12 hours for 2 days") |
| pediatric-fever-05 | q3 | Intravenous immune globulin 400 mg/kg for the pregnant mother | IV immune globulin 400 mg/kg for the pregnant mother | No (61 characters, one over the limit) |
| pediatric-fever-06 | q2 | IV immune globulin 2 g/kg (32 g) as a single infusion over 10 to 12 hours | IV immune globulin 2 g/kg over 10 to 12 hours | Yes, "32 g for this 16 kg child". "Single dose" was already there |
| pediatric-fever-06 | q2 | ASA at moderate to high dose (30 to 100 mg/kg/day) divided four times daily | ASA 30 to 100 mg/kg/day divided four times daily | Already there ("moderate to high dose") |
| pediatric-fever-07 | q3 | IV artesunate 2.4 mg/kg at 0, 12 and 24 hours, then daily | IV artesunate 2.4 mg/kg at 0/12/24 hours, then daily | Yes, the schedule in full (the option was 12 words, limit 10) |
| pediatric-fever-08 | q1 | Analgesia and watchful waiting for 48 hours, with reassessment or a delayed prescription | Analgesia and watchful waiting for 48 hours | Yes |
| pediatric-fever-11 | q1 | Immediate whole body cold water immersion with continuous monitoring | Immediate whole body cold water immersion, monitored | Yes, "with continuous monitoring" |
| pediatric-fever-13 | q3 | IV hyperhydration without potassium, tumour lysis monitoring, a uric acid lowering drug and urgent oncology consultation | Hyperhydration without potassium, urate lowering, oncology | Yes, "Start tumour lysis monitoring and call oncology urgently." |

Menu keys that only changed position, not text: multiple-trauma-04 q2, multiple-trauma-09 q2 and pediatric-fever-15 q2. The key test compares sorted lists, so these pass.

## Citation changes

Every citation in the `sources` of an s14 SAMP now names an author or body, a work and a year, and textbooks name an edition.

| Source id | Change | Before | After | Verification |
|---|---|---|---|---|
| thrombosis-canada | Completed | Thrombosis Canada. Clinical guides on the management of bleeding in patients taking direct oral anticoagulants. | Thrombosis Canada. Clinical guide: NOACs/DOACs: management of bleeding. 2020. | https://profedu.blood.ca/sites/default/files/thrombosiscanada2020mb_tc_day_4.pdf (the guide, marked 2020 Thrombosis Canada). Current page: https://thrombosiscanada.ca/hcp/practice/clinical_guides?language=en-ca&guideID=MANAGEMENTOFBLEEDINGINPATIENTS |
| rosen | Completed | ... Rosen's Emergency Medicine: Concepts and Clinical Practice. Elsevier. Chapters on ... | Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. ... 10th ed. Elsevier. 2023. Chapters on ... | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| apsa | Replaced | American Pediatric Surgical Association. Guidance on nonoperative management of blunt liver and spleen injury in children. | Gates RL, Price M, Cameron DB, et al. Non-operative management of solid organ injuries in children: an APSA Outcomes and Evidence Based Practice Committee systematic review. J Pediatr Surg. 2019. | https://pubmed.ncbi.nlm.nih.gov/30773395/ |
| trekk-sepsis | Replaced | TREKK. Bottom line recommendations. Paediatric sepsis. | Farrell CA, Canadian Paediatric Society Acute Care Committee. Diagnosis and management of severe sepsis in the paediatric patient. Paediatr Child Health. 2020. | https://academic.oup.com/pch/article/25/7/475/5952421 and https://cps.ca/en/documents/position/diagnosis-and-management-of-sepsis-in-the-paediatric-patient |
| cig-measles | Completed | Public Health Agency of Canada. Canadian Immunization Guide. Measles vaccine, including post-exposure prophylaxis with immune globulin. | Same, with "Part 4" and "Updated 2025." | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html (PEP section updated June 2025. IM immune globulin 0.5 mL/kg under 6 months and IV immune globulin 400 mg/kg in pregnancy both confirmed) |
| catmat | Completed | CATMAT. Canadian recommendations for the prevention and treatment of malaria. Public Health Agency of Canada. | Same, with "Chapter 7: treatment of malaria" and "Updated 2019." | https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria/chapter-7-treatment.html |
| cps-fever | Completed | Canadian Paediatric Society. Caring for Kids. Fever and temperature taking. | Same, with "Last updated 2022." | https://caringforkids.cps.ca/handouts/health-conditions-and-treatments/fever_and_temperature_taking (page footer: "Last updated: June 2022") |
| cwc-caep | Replaced | Choosing Wisely Canada. Emergency medicine recommendations from the Canadian Association of Emergency Physicians. | Allan GM, Arroll B. Prevention and treatment of the common cold: making sense of the evidence. CMAJ. 2014. | https://www.cmaj.ca/content/186/3/190 |
| goldfrank | Completed | Nelson LS, et al, editors. Goldfrank's Toxicologic Emergencies. McGraw Hill. Chapter on salicylates. | Nelson LS, Hoffman RS, Howland MA, Lewin NA, Goldfrank LR, editors. ... 11th ed. McGraw Hill. 2019. Chapter on salicylates. | https://accesspharmacy.mhmedical.com/book.aspx?bookid=2569 |
| nelson | Completed | Kliegman RM, et al, editors. Nelson Textbook of Pediatrics. Elsevier. Chapters on ... | Kliegman RM, St Geme JW III, editors. Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024. Chapters on ... | https://shop.elsevier.com/books/nelson-textbook-of-pediatrics-2-volume-set/kliegman/978-0-323-88305-4 |

The ATLS citation (11th edition, 2025) was checked and left as is: https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/

Why each source was replaced:
- APSA: the old entry named no work or year. The 2019 APSA committee review supports the same point: nonoperative management of blunt splenic injury in children, driven by physiology.
- TREKK: no dated version of the TREKK sepsis bottom line could be found. The 2020 CPS statement supports the same points for pediatric-fever-03 and 04: early antibiotics, fluid reassessment, and epinephrine or norepinephrine in place of dopamine. The source id `trekk-sepsis` was kept so the question links still work. A physician may want to rename the id.
- Choosing Wisely Canada: the CAEP list names antibiotics for bronchiolitis, not upper respiratory infection in general, and gives no single year. Allan and Arroll (CMAJ 2014) is Canadian and supports pediatric-fever-09 q1: no antibiotics for a cold, honey for cough over age 1, and caution with over the counter cough and cold medicines in young children. The id `cwc-caep` was kept.

Two unused entries in the `S` objects were left alone because no SAMP cites them: `ccthr` (dated 2001) and `whoMalaria` ("World Health Organization. WHO guidelines for malaria.", no year).

## Needs physician decision

1. **SpO2 with no stated oxygen source (20 SAMPs).** The CFPC `o2sat` format needs "on room air" or "on ...". These stems give only a number: multiple-trauma-05, 07, 10, 11, 12, 14, 15 and pediatric-fever-01, 02, 04, 05, 06, 07, 08, 09, 11, 12, 13, 14, 15. Adding "on room air" would invent a fact, so the value stays in the stem as "SpO2 is NN%." and every other vital moved to `vitals`. Please confirm the oxygen source so these can move. multiple-trauma-12 is intubated, so room air does not apply there.
2. **multiple-trauma-13 prehospital vitals.** The paramedics' call ahead gives "HR 140, BP 70 by palpation, GCS 9". The patient has not arrived, and "70 by palpation" does not fit the `bp` format. These stay in the stem as the paramedic report.
3. **Keyed rewordings.** Please review the 26 rewordings above. The ones most worth a look:
   - pediatric-fever-04 q4: "every 12 hours" became "twice daily".
   - pediatric-fever-06 q2: the calculated 32 g moved from the key to the explanation.
   - multiple-trauma-01 q2: "urgent" and "pelvic" were dropped. "Preperitoneal packing" stays.
   - pediatric-fever-13 q3: now reads "urate lowering" in place of "a uric acid lowering drug", and "tumour lysis monitoring" moved to the explanation.
4. **Thrombosis Canada version (multiple-trauma-04 q3).** The only dated version I could verify is the 2020 guide. The live guide may be newer and may say more about andexanet. The q3 key was not checked against a newer version.
5. **CATMAT artesunate schedule (pediatric-fever-07 q3).** CATMAT Chapter 7 (2019) gives artesunate at 0, 12, 24 and 48 hours, then oral follow-on therapy, with daily IV doses only if oral therapy cannot be taken. It also gives 3 mg/kg for children under 20 kg. The key "at 0, 12 and 24 hours, then daily" is consistent for this 26 kg child. The physician may prefer the exact CATMAT wording. Nothing was changed.
6. **Drug name case in options.** SAMP_SPEC section 10 asks for generic drug names in lower case. Options still start with a capital letter ("Ceftriaxone 100 mg/kg IV (2 g)"). Lowercasing them would have reworded many more keyed options. This needs a bank-wide decision.
7. **Vitals in updates.** Updates still give vitals inline, for example "HR 128, BP 84/52". The brief covers stems only, so these were not changed.
