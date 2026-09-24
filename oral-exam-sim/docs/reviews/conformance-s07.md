# Format conformance: batch s07

Batch s07 holds 30 SAMPs: critical-appraisal-01 to 15 and loc-01 to 15. This pass changed format only. No `correct`, `select`, `required`, `accept` or `unacceptable` value changed, apart from the index remapping that reordering needs. Every remap was checked against the signed-off key snapshot (`docs/signoff-keys-2026-09.json`). Menu `correct` arrays keep the snapshot's keyed order.

Files edited: `src/samps/s07/critical-appraisal.ts` and `src/samps/s07/loc.ts`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s07` gives no output.
- `CONFORM=s07 SAMP_BATCH=s07 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts` gives 499 passed and 17 failed. All 17 failures are the expected "keeps its keys" test, one for each SAMP with a reworded keyed option (listed below). One earlier run also showed a bank-wide "has unique SAMP ids" failure. It passed on every rerun and does not involve s07.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 136 (31 single, 4 menu, 101 write-in) |
| Options added or removed | 0 |
| Distractor options reworded | 70 |
| Keyed options reworded | 18, in 17 SAMPs |
| Explanations updated | 14 |
| Stems changed | 20 (13 for vitals, 7 for thousands separators only) |
| Vitals moved to the `vitals` field | 13 SAMPs (loc-01 to 05 and loc-08 to 15) |
| Patient names removed | 0 (none present) |
| Citations completed or replaced | 7 source records (5 completed, 2 replaced) |

Other format changes:
- Two lead-in sentences moved from the prompt into `update`: loc-04 q3 ("His antibiotics have been given.") and loc-09 q4 ("His BP is 188/102 mmHg.").
- loc-10 weight (12 kg) moved from the stem into `vitals.weight`.
- loc-12 "µmol/L" became "umol/L". loc-14 q4 update "208/116" became "208/116 mmHg".
- Thousands separators became spaces in stems, updates, prompts, options and explanations. Text in `accept` and `unacceptable` was not touched.
- Two write-in prompts were already questions and stayed as they were: critical-appraisal-10 q2 and loc-08 q1.

## Key position counts (31 single questions)

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 2 | 23 | 5 | 1 | 0 |
| After | 7 | 6 | 6 | 5 | 7 |

The highest share after the pass is 7 of 31 (23 percent). Every position holds at least one key. The key was the single longest option in 20 of 31 questions before and in 10 of 31 after (32 percent).

## Keyed option rewordings

These are the only keyed text changes. Most remove reason text from the option. The reason now sits in the explanation. The rest shorten the option to 60 characters or less or change the thousands separator.

| SAMP | Question | Before | After |
|---|---|---|---|
| critical-appraisal-02 | q2 | About 13 older adults with hip fracture need a block to prevent one episode of delirium within 72 hours. | About 13 blocks prevent one delirium case within 72 hours |
| critical-appraisal-03 | q5 | Decide on CT using clinical judgment and guidance for anticoagulated patients, because the rule does not apply to her | Decide on CT by clinical judgment and anticoagulant guidance |
| critical-appraisal-04 | q5 | Do not routinely prescribe it for his 4 mm stone, since the high quality trials and the small stone subgroup show no meaningful benefit | Do not routinely prescribe it for his 4 mm stone |
| critical-appraisal-05 | q5 | Nitrofurantoin, a first-line agent for cystitis that also avoids the possible harm | Nitrofurantoin as first-line therapy for cystitis |
| critical-appraisal-07 | q1 | To show the new treatment is not worse than standard care by more than a prespecified margin | To show it is no worse beyond a prespecified margin |
| critical-appraisal-07 | q4 | Explain that single dose dexamethasone may be slightly less effective, share the uncertainty, and choose with her, while starting an inhaled corticosteroid | Share uncertainty, choose with her, start inhaled steroid |
| critical-appraisal-08 | q5 | Early antibiotics are associated with lower mortality. This supports prompt antibiotics in suspected sepsis but does not prove a causal effect of the 1 hour target | Association with lower mortality, not proof of causation |
| critical-appraisal-09 | q3 | 0.5 ng/mL, because its higher sensitivity makes a negative result more useful for ruling out | The lower 0.5 ng/mL cutoff, for higher sensitivity |
| critical-appraisal-10 | q4 | The p value for interaction of 0.40 suggests the difference between sexes is likely due to chance | The difference between sexes is likely due to chance |
| critical-appraisal-11 | q5 | Offer treatment, explaining that about 1 in 25 patients like him avoids hospitalization and about 1 in 20 has extra nausea, and decide together | Offer treatment as a shared decision on benefit and harm |
| critical-appraisal-12 | q4 | Repeat the troponin at an interval set by your local pathway, since early presenters were excluded from the study | Repeat troponin at an interval set by your local pathway |
| loc-02 | q1 | Continue bag-valve-mask ventilation with 100% oxygen and give naloxone 0.04 to 0.4 mg IV, titrated to adequate breathing | Ventilate with oxygen, titrate naloxone 0.04 to 0.4 mg IV |
| loc-04 | q3 | Non-contrast CT head, because he has altered mental status and is over 60 | Non-contrast CT head |
| loc-05 | q3 (menu) | Levetiracetam 60 mg/kg IV (maximum 4,500 mg) | Levetiracetam 60 mg/kg IV (maximum 4 500 mg) |
| loc-06 | q4 | Give desmopressin 1 to 2 mcg IV and consider D5W to prevent overcorrection | Give desmopressin 1 to 2 mcg IV and consider D5W |
| loc-08 | q2 | Blood gas with co-oximetry for carboxyhemoglobin | Co-oximetry for carboxyhemoglobin |
| loc-09 | q4 | Labetalol 10 mg IV over 1 to 2 minutes, aiming for BP below 185/110 mmHg | Labetalol 10 mg IV over 1 to 2 minutes |
| loc-11 | q3 | Pneumonia is the likely source. Pyuria is common in long-term care residents and should not anchor the diagnosis | Pneumonia is the likely source, despite the pyuria |

The other keyed option in loc-05 q3 ("Lorazepam 4 mg IV") is unchanged. Wherever a shortened key dropped detail, the explanation now carries it. This covers the population in critical-appraisal-02, the 100% oxygen and titration to breathing in loc-02, the 185/110 mmHg target in loc-09 and the anchoring point in loc-11.

## Citation changes

| Source id | Change | Verification |
|---|---|---|
| users-guides | Added "2015" (3rd edition) | https://jamaevidence.mhmedical.com/book.aspx?bookId=847 and https://www.vitalsource.com/products/users-39-guides-to-the-medical-literature-gordon-guyatt-drummond-v9780071808729 (copyright 2015) |
| straus-ebm | Added "2018" (5th edition) | https://shop.elsevier.com/books/evidence-based-medicine/straus/978-0-7020-6296-4 (published 27 February 2018) |
| goldfrank | Added "2019" (11th edition) | https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html (published 21 March 2019) |
| csbpr-acute | Added "7th edition. 2022." and the URL | https://www.strokebestpractices.ca/recommendations/acute-stroke-management |
| gina | Added "2026" (current report) | https://ginasthma.org/reports/ lists the 2026 GINA Strategy Report |
| thrombosis-canada-dvt | **Replaced** by ash-vte-diagnosis: "Lim W, Le Gal G, Bates SM, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism. Diagnosis of venous thromboembolism. Blood Advances 2018." | https://pmc.ncbi.nlm.nih.gov/articles/PMC6258916/ and https://doi.org/10.1182/bloodadvances.2018024828. The Thrombosis Canada guide page renders by script only, so no year could be verified. |
| cps-meningitis | **Replaced** by the current statement: "Le Saux N. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than 2 months of age. Position statement. 2020, reaffirmed 2026." | https://cps.ca/en/documents/position/management-of-bacterial-meningitis. The cited title ("older than one month of age") is the superseded 2014 version. The current statement also recommends a third-generation cephalosporin plus vancomycin. |

All other citations already named an author or body, a work and a year. They were not changed.

## Needs physician decision

Nothing below was changed.

1. **critical-appraisal-06 q4 (D-dimer in a high pretest patient).** The key accepts "D-dimer to guide the need for repeat imaging", and the explanation says high pretest patients need further ultrasound "often guided by D-dimer". Patient B has a pretest probability of 50%. The ASH 2018 guideline, now the cited source, advises against using D-dimer alone when prevalence or pretest probability is 50% or more. It recommends whole-leg or serial ultrasound instead. Please confirm the D-dimer accept item and the explanation wording.
2. **loc-13 q4 explanation (fact not in the case).** The explanation says a diagnostic paracentesis "should be done in any patient with ascites and encephalopathy" and ties the low grade fever to SBP. The stem does not mention ascites. SAMP_SPEC section 8 requires every explanation claim to trace to the stem. Either add ascites to the case or reword the explanation.
3. **critical-appraisal-09 q3 (reason text kept in options).** Each option keeps a short descriptor ("for higher sensitivity", "for fewer false positives", "given the same area under the curve"). The study has only two cutoffs. Without the descriptors, the five options collapse into duplicates. Please confirm this is acceptable, or supply a different fifth option.
4. **Distractors whose content changed, not only their wording.** These distractors now state a different wrong action because the original depended on its reason clause. Please confirm each is clearly wrong:
   - critical-appraisal-04 q5: "Prescribe it, since the harms of a short course are negligible" became "Add it to analgesia for any distal ureteric stone".
   - critical-appraisal-11 q5: "Treat, since all patients with confirmed influenza benefit equally" became "Treat without a discussion of benefit and harm".
   - critical-appraisal-03 q5: "Apply the rule anyway, since apixaban carries less bleeding risk than warfarin" became "Apply the rule as if she were not anticoagulated". The explanation now says that apixaban's lower bleeding risk does not make the rule apply.
   - loc-03 q1: "12-lead ECG" became "ECG with rhythm strip", for length parity.
5. **GINA 2026.** The year was verified from the GINA reports page. The explanation's statement that every patient discharged after an exacerbation should leave with an inhaled corticosteroid matches earlier GINA reports. I did not check it against the 2026 text.
