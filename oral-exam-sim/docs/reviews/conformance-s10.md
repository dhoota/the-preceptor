# Format conformance: batch s10 (eye, first trimester bleeding)

Scope: 30 signed-off SAMPs in `src/samps/s10/` (eye-01 to eye-15, first-trimester-bleeding-01 to 15). 120 questions: 28 single, 4 menu, 88 write-in. Format only. No `correct`, `select`, `required`, `accept` or `unacceptable` value changed except the index remapping that reordering needs. No clinical fact, value or timeline changed.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s10`: no output.
- `CONFORM=s10 SAMP_BATCH=s10 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 469 passed, 16 failed. All 16 failures are the expected "keeps its keys" test for the 16 SAMPs with a reworded keyed option (table below). Nothing else fails.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 119 of 120 (first-trimester-bleeding-02 q2 already conformed) |
| Options added | 0 |
| Options removed | 2 (first-trimester-bleeding-06 q2 and first-trimester-bleeding-15 q4 had 6 options) |
| Options reworded (new text) | 75 (58 distractors, 17 keyed) |
| Keyed options reworded | 17, in 17 questions across 16 SAMPs |
| Stems changed | 30 (ages hyphenated in all 30) |
| Vitals moved to `vitals` | 24 SAMPs |
| Names removed | 0 (no patient names found) |
| Citations completed | 11 (8 in eye.ts, 3 in first-trimester-bleeding.ts) |
| Citations replaced | 0 |

Options removed:
- first-trimester-bleeding-06 q2: "Methotrexate 500 mg/m2 IV" (weakest distractor, not named in the explanation).
- first-trimester-bleeding-15 q4: "Not required because she is under 18" (weakest distractor). The explanation still says "regardless of age".

## Key position across the 28 single questions

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 18 | 5 | 5 | 0 | 0 |
| After | 5 | 7 | 3 | 6 | 7 |

Highest share after: 7 of 28 (25 percent). Every position holds a key. The key is the single longest option in 5 of 28 single questions after (19 of 28 before).

Every remap was checked by comparing the keyed option text before and after for all 32 single and menu questions. Pure reorders (same keyed text, new index): eye-01 q2 menu [0, 2, 3] to [1, 2, 9], eye-02 q2 2 to 3, eye-06 q4 0 to 1, eye-09 q3 0 to 3, eye-11 q1 1 to 2, eye-13 q3 0 to 1, eye-14 q2 0 to 0, first-trimester-bleeding-01 q2 0 to 1, first-trimester-bleeding-01 q3 menu [0, 3] to [1, 4], first-trimester-bleeding-04 q4 2 to 1, first-trimester-bleeding-06 q2 0 to 3, first-trimester-bleeding-10 q1 1 to 3, first-trimester-bleeding-12 q4 0 to 0, first-trimester-bleeding-15 q2 0 to 3, eye-04 q4 menu None stays [6].

## Keyed option rewordings

Each rewording shortens the key to 60 characters and 10 words or fewer, removes reason text from the option, or evens option length. The removed detail is already stated in the explanation in every case.

| SAMP | Question | Before | After |
|---|---|---|---|
| eye-01 | q4 | Urgent ophthalmology assessment today for laser peripheral iridotomy and assessment of the fellow eye | Urgent ophthalmology today for laser peripheral iridotomy |
| eye-03 | q4 | Acyclovir 400 mg PO five times daily for 7 to 10 days | Acyclovir 400 mg five times daily, 7 to 10 days |
| eye-05 | q2 | It shows involvement of the nasociliary branch and predicts ocular involvement | Nasociliary branch involvement predicting eye involvement |
| eye-06 | q3 (menu) | Prednisolone acetate 1% drops, started after discussion with ophthalmology | Prednisolone acetate 1% drops after ophthalmology input |
| eye-08 | q1 | Activate the stroke protocol for urgent stroke team assessment and vascular imaging | Urgent stroke team assessment and vascular imaging |
| eye-09 | q4 | Same day ophthalmology or retina assessment because the macula is still attached | Same day ophthalmology or retina assessment |
| eye-12 | q1 | Instil topical anaesthetic and begin copious irrigation right away | Instil topical anaesthetic and irrigate copiously now |
| eye-15 | q3 | Emergent ophthalmology assessment today for vitreous tap and intravitreal antibiotics | Emergent ophthalmology for tap and intravitreal antibiotics |
| first-trimester-bleeding-03 | q1 | Pregnancy of unknown location. An early intrauterine pregnancy, a failing pregnancy or an ectopic are all possible | Pregnancy of unknown location |
| first-trimester-bleeding-04 | q1 | These findings are concerning for ectopic pregnancy because the collection may be a pseudosac | Concerning for ectopic with a possible pseudosac |
| first-trimester-bleeding-05 | q3 | Urgent gynecology for laparoscopy aiming to preserve the intrauterine pregnancy | Urgent laparoscopy preserving the intrauterine pregnancy |
| first-trimester-bleeding-07 | q1 | Vagal response from products of conception distending the cervical os | Vagal response to tissue in the cervical os |
| first-trimester-bleeding-08 | q1 | A crown rump length of 7 mm or more without cardiac activity is diagnostic of a nonviable pregnancy | Diagnostic of a nonviable pregnancy |
| first-trimester-bleeding-08 | q3 | Mifepristone 200 mg PO, then misoprostol 800 mcg vaginally 24 hours later | Mifepristone 200 mg, misoprostol 800 mcg PV 24 hours later |
| first-trimester-bleeding-09 | q4 | Most pregnancies with these findings continue. The risk of loss is low, around 10% or less | Low risk of loss, around 10% or less |
| first-trimester-bleeding-13 | q3 | An empty uterus with an adnexal mass separate from the ovary and a positive hCG is highly suggestive of ectopic pregnancy | Highly suggestive of ectopic pregnancy |
| first-trimester-bleeding-15 | q4 | Rh immune globulin 300 mcg IM or IV within 72 hours | Rh immune globulin 300 mcg IM/IV within 72 hours |

Notes on the rewordings:
- eye-03 q4 and first-trimester-bleeding-08 q3 drop "PO" from the key to meet the 10 word limit. The eye-03 prompt asks for an oral regimen and every eye-03 option now omits PO in parallel. Mifepristone is given only by mouth.
- first-trimester-bleeding-15 q4: the key text was 11 words. "IM or IV" became "IM/IV".
- eye-06 q3 keeps its other key, "Cyclopentolate 1% one drop three times daily", unchanged.

## Stems and vitals

- All 30 stems: ages hyphenated ("67-year-old").
- 24 SAMPs: vitals moved to the `vitals` field, every value kept. Temperatures written as "36.8°C". The 6 stems that read "Vital signs are normal." were left as written, with no `vitals` field.
- eye-08: pulse recorded as "88/minute irregular". The stem keeps "His pulse is irregularly irregular." because the field format allows only "regular" or "irregular".
- eye-11: pulse recorded as "94/minute irregular" (the stem read "HR 94 irregular"). The SpO2 of 96% gives no oxygen source, so it cannot go in the `o2sat` field without inventing "on room air". It stays in the stem as "Her oxygen saturation is 96% and her GCS is 15."
- first-trimester-bleeding-02 and -15: the lying vitals went to the `vitals` field. The stem now says "Her vital signs were taken lying down." and keeps the standing or sitting values as written (-02: "On standing her pulse is 128/minute, her BP is 98/62 mmHg and she feels faint." -15: "When she sits up her heart rate rises to 138/minute and she feels faint.").
- first-trimester-bleeding-03 and -04: "with no orthostatic change" kept as "There is no orthostatic change."
- first-trimester-bleeding-06: weight 68 kg moved to `vitals`. Height 165 cm stays in the stem. The explanation's methotrexate dose of about 90 mg still matches (BSA about 1.77 m2).
- No explanation quotes a vital that moved.
- Vitals given in updates (for example first-trimester-bleeding-01 q3, first-trimester-bleeding-13 q2) were left in the updates.

## Prompts

- Single and menu prompts are one "Which of the following ...?" sentence of 10 to 30 words, with no "Select ..." instruction.
- Write-in prompts are questions ending in "?", with the "List N" instruction removed. Detail requests were kept inside the question ("..., including the drug, dose and route?"). Where a prompt carried a context sentence (for example eye-04 q2, first-trimester-bleeding-05 q1), the sentence was kept in front of the question.
- first-trimester-bleeding-08 q3: "She chooses medical management." was folded into the question ("... for the medical management she has chosen?").

## Citation changes

All years verified by web search. No source was replaced.

| Source id | New citation | Verification |
|---|---|---|
| aao-pac | Gedde SJ, et al. Primary angle closure disease Preferred Practice Pattern. American Academy of Ophthalmology. Ophthalmology. 2021. | https://pubmed.ncbi.nlm.nih.gov/34933744/ |
| aao-conj | American Academy of Ophthalmology Cornea/External Disease Committee. Conjunctivitis Preferred Practice Pattern. Ophthalmology. 2024. | https://www.aao.org/education/preferred-practice-pattern/conjunctivitis-ppp-2023 |
| aao-keratitis | American Academy of Ophthalmology Cornea/External Disease Committee. Bacterial keratitis Preferred Practice Pattern. Ophthalmology. 2024. | https://www.aaojournal.org/article/S0161-6420(24)00007-1/fulltext |
| aao-rao | Flaxel CJ, et al. Retinal and ophthalmic artery occlusions Preferred Practice Pattern. American Academy of Ophthalmology. Ophthalmology. 2020. | https://pubmed.ncbi.nlm.nih.gov/31757501/ |
| aao-pvd | Flaxel CJ, et al. Posterior vitreous detachment, retinal breaks and lattice degeneration Preferred Practice Pattern. American Academy of Ophthalmology. Ophthalmology. 2020. | https://www.aaojournal.org/article/S0161-6420%2819%2932094-9/fulltext |
| csbpr | Heran M, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update. Heart and Stroke Foundation of Canada. Can J Neurol Sci. 2022. | https://pubmed.ncbi.nlm.nih.gov/36529857/ |
| rosen (eye) | Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter on ophthalmology. | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| tintinalli | Tintinalli JE, et al, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. Chapters on eye emergencies and ocular trauma. | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| rosen (first trimester) | Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter on acute complications of pregnancy. | as above |
| nice-ng126 | National Institute for Health and Care Excellence. NG126. Ectopic pregnancy and miscarriage. Diagnosis and initial management. 2019, updated 2023. | https://www.nice.org.uk/guidance/ng126/chapter/Update-information |
| phac-sti | Public Health Agency of Canada. Canadian Guidelines on Sexually Transmitted Infections. Chlamydia guide and gonorrhea guide. Gonorrhea treatment updated December 2024. | https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html |

The csbpr citation previously named both the acute and the secondary prevention modules without a year. It now names the acute stroke management module (2022), which covers retinal ischemia and TIA workup.

Citations that already had a year were checked and left as written: COS glaucoma 2009 (https://pubmed.ncbi.nlm.nih.gov/19492005/), White and Chodosh HSV keratitis 2014 (https://www.aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline), Mac Grory AHA CRAO 2021 (https://pubmed.ncbi.nlm.nih.gov/33677974/), Maz ACR GCA 2021 (https://pubmed.ncbi.nlm.nih.gov/34235884/), Mackie BSR GCA 2020 (https://pubmed.ncbi.nlm.nih.gov/31970405/), SOGC 414 2021 (https://pubmed.ncbi.nlm.nih.gov/33453378/), SOGC 448 2024 (https://pubmed.ncbi.nlm.nih.gov/38553007/), SOGC 408 2021 (https://www.jogc.com/article/S1701-2163(20)30222-X/abstract), ACOG 193 2018 (https://pubmed.ncbi.nlm.nih.gov/29470343/), ACOG 200 2018 (https://pubmed.ncbi.nlm.nih.gov/30157093/), Doubilet NEJM 2013 (https://pubmed.ncbi.nlm.nih.gov/24106937/).

## Needs physician decision

Nothing below was changed.

1. eye-11: the stem gives SpO2 96% with no oxygen source. Confirm whether it is on room air so it can move into the `vitals` field.
2. eye-01 (q2): the only Canadian source is the COS glaucoma guideline from 2009. Consider whether a more current source should back the acute angle closure drug choices. The AAO primary angle closure PPP (2021, with a 2025 update listed on aao.org) is already cited.
3. first-trimester-bleeding-03, -07, -08, -09, -10, -14: NICE NG126 (UK) is cited next to SOGC and ACOG. SAMP_SPEC section 9 says not to use a UK guideline in place of a current Canadian one. SOGC 414 already covers the PUL and ectopic content. Decide whether NICE should stay as a supporting source.
4. first-trimester-bleeding-12 q4: the key (ceftriaxone 500 mg IM plus azithromycin 1 g PO) agrees with the PHAC December 2024 change to ceftriaxone 500 mg monotherapy for gonorrhea, with azithromycin as the chlamydia agent in pregnancy. The PHAC chlamydia guide also lists amoxicillin in pregnancy. No change is needed unless you want the explanation to mention it.
5. The AAO PVD and retinal artery occlusion PPPs cited are the 2020 editions. aao.org lists newer editions (PVD PPP 2024). The teaching points in eye-08 and eye-09 match both, but you may prefer the newer editions.
