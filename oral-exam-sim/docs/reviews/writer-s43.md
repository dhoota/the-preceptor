# Writer report: batch s43, Lacerations

File: `src/samps/s43/lacerations.ts` (export `LACERATIONS_S43`), exported from `src/samps/s43/index.ts` as `SAMPS_S43`.

## Count and mix

- 23 SAMPs, ids lacerations-16 to lacerations-38. All are `reviewed: false`.
- 75 questions: 69 `single` and 6 `menu`. There are 3 or 4 questions per SAMP. Six SAMPs have 4 and seventeen have 3.
- The menus are in lacerations-22, 23, 29, 31, 35 and 36. They select 2 (five menus) or 4 (one menu). None uses "None".
- Single key positions, first to fifth: 14, 15, 13, 14, 13 of 69. That is 20%, 22%, 19%, 20% and 19%.
- The key is the longest option in 10 of 69 singles (14%). Every key is at most 1.5 times the mean distractor length.
- Checks: `npx tsc --noEmit -p . | grep samps/s43` gives no output. `SAMP_BATCH=s43 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 468 of 468.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Clarify how the laceration happened | 10 |
| 2. Examine tendons, nerves, vessels and joints | 17 |
| 3. Explore, irrigate, image, delayed or no closure | 31 |
| 4. Antibiotics and follow-up for infection prone wounds, none for low risk | 16 |
| suicide-risk 4 (secondary, lacerations-18 q3) | 1 |

## Scenarios

The batch avoids the s13 lacerations scenarios and the bite and tetanus items in s41 and s22. It covers:
- ulnar nerve injury at the wrist
- an unvaccinated child with a farm wound
- adolescent self-harm
- a fish hook, with Aeromonas infection and a felon
- a chin laceration with a condylar fracture
- a skin tear in an older woman after syncope
- a human bite of the ear
- a dog bite in a patient with cirrhosis
- an Achilles laceration
- a thigh stab wound screened with the ankle-brachial index
- a wood splinter and a grinder metal fragment
- a lateral tongue bite that points to a seizure
- rituximab and tetanus
- a fingertip amputation
- a lawn mower open fracture
- an extensor tendon cut on the back of the hand
- a ring avulsion
- digital nerve testing in a toddler
- a chainsaw cut of the patellar tendon
- a late presentation with a face wound and a shin wound
- a nail gun injury into a joint
- an eyebrow laceration

Tetanus items cover different rows of the Canadian Immunization Guide (CIG) table: no doses in a child under 7, a last dose more than 10 years ago, 5 to 10 years ago, less than 5 years ago, and humoral immune deficiency. The local anesthetic item is recomputed: 7 mg/kg x 18 kg = 126 mg = 12.6 mL of 1%.

## Sources, with verification

- Public Health Agency of Canada. Canadian Immunization Guide, tetanus toxoid, updated 2026. Table 1, the TIg dosing and the humoral immune deficiency statement were checked on the page. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Stevens DL and colleagues. IDSA SSTI guideline, 2014. Recommendations 40, 42 to 44, Table 4 (Aeromonas) and Table 5 (human bites) were read in the full text. https://academic.oup.com/cid/article/59/2/e10/2895845
- Quinn JV, Polevoi SK, Kohn MA. Emerg Med J 2014. https://pubmed.ncbi.nlm.nih.gov/23314208/
- Courter BJ. Ann Emerg Med 1990. https://pubmed.ncbi.nlm.nih.gov/2393187/
- Davis J and colleagues. Acad Emerg Med 2015. https://onlinelibrary.wiley.com/doi/10.1111/acem.12714
- Fox N and colleagues. EAST 2012. https://pubmed.ncbi.nlm.nih.gov/23114487/
- LeBlanc K and colleagues. ISTAP, Wounds International 2018. The full PDF was read. It says sutures, staples and strips are not viable options, and it describes the direction-of-removal arrow and the products to avoid. https://woundsinternational.com/best-practice-statements/istap-best-practice-recommendations-prevention-and-management-skin-tears-aged-skin/
- ACS TQIP best practices in the management of orthopaedic trauma, 2015 (antibiotics within 60 minutes). https://www.facs.org/media/mkbnhqtw/ortho_guidelines.pdf
- NICE NG225, 2022. https://www.nice.org.uk/guidance/ng225
- Shen WK and colleagues. 2017 ACC/AHA/HRS syncope guideline. This is a known citation that was not fetched.
- Textbooks, known editions that were not fetched: Roberts and Hedges 7th ed 2019, Tintinalli 9th ed 2020, Rosen 10th ed 2023.

## For the reviewers

1. lacerations-29 q2 treats rituximab B cell depletion as the "humoral immune deficiency" named in the CIG. The CIG does not name rituximab.
2. lacerations-28 q3 keys no antibiotics after a tongue repair. The evidence for intraoral wounds is limited, and it is cited to Roberts and Hedges.
3. lacerations-36 q3 keys delayed closure of a contaminated shin wound in a patient with diabetes. This is close to lacerations-07 (s13). It is kept because the teaching is the contrast with the forehead wound in q2.
4. lacerations-34 q1 (the water immersion wrinkle test) is cited to Rosen. Please confirm the chapter covers it, or swap in Tintinalli.
5. NICE NG225 is a UK guideline. It is used for lacerations-18 because I found no Canadian emergency guideline on self-harm assessment.
6. lacerations-25 cites the EAST threshold for CT angiography as an ankle-brachial index below 0.9. Some summaries say 0.9 or less. The case value of 0.82 meets either.
7. lacerations-21 cites a US syncope guideline for the first ECG, a point every reference agrees on.
8. Seventeen SAMPs have 3 questions. Adding a fourth to some of them would bring the batch closer to the brief's "usually 4 or 5".
