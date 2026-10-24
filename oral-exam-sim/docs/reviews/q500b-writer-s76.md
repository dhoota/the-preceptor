# Q500B writer report: s76, Eye: red eye and loss of vision

File: `src/samps/s76/eye.ts` (`EYE_S76`). All items `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Scenario | Setting | Questions |
|---|---|---|---|---|
| eye-39 | Wrestler with a watery eye | Herpes simplex blepharoconjunctivitis from herpes gladiatorum in a 17-year-old, then epithelial keratitis after he stops his antiviral | Tertiary | 5 single |
| eye-40 | Red eyes after a trip abroad | Acute hemorrhagic conjunctivitis (coxsackievirus A24 variant) in a 41-year-old teacher back from an outbreak village | Tertiary | 4 single |
| eye-41 | Blurred vision after a faded rash | Ocular syphilis (bilateral uveitis with a macular lesion) in a 34-year-old man labelled conjunctivitis at a walk in clinic | Tertiary | 3 single, 1 menu (select 3 of 8) |
| eye-42 | Older woman who fell against the counter | Occult posterior scleral rupture in an 81-year-old with old large incision cataract surgery, triaged as a subconjunctival hemorrhage, with a normal CT | Tertiary | 3 single, 1 menu (select 4 of 8) |
| eye-43 | Burning eyes after a collision | Airbag alkali powder exposure plus blunt injury with a microhyphema found only on slit lamp, disposition 2 hours from ophthalmology | Rural | 4 single |

Totals: 21 questions, 19 single and 2 menu.

## Key feature coverage

Bank counts before this batch (all SAMPs with `keyFeature: { topic: "eye" }`): n1 39, n2 33, n3 36, n4 14, n5 16. The extra questions went to n4 and n5.

| Key feature | This batch | Questions |
|---|---|---|
| 1 Exclude serious causes before calling it conjunctivitis | 3 | eye-40 q2, eye-40 q4, eye-41 q3 |
| 2 Detailed history, including systemic disease | 4 | eye-39 q1, eye-40 q1, eye-41 q1, eye-41 q4 |
| 3 Acuity for every complaint, then a full examination | 4 | eye-39 q2, eye-41 q2, eye-42 q1, eye-43 q1 |
| 4 No routine topical steroids for viral eye infection | 4 | eye-39 q3, eye-39 q4, eye-39 q5, eye-40 q3 |
| 5 Trauma with subconjunctival blood: exclude hyphema | 6 | eye-42 q2, eye-42 q3, eye-42 q4, eye-43 q2, eye-43 q3, eye-43 q4 |

Single key positions (first to fifth): 4, 4, 3, 4, 4 of 19 singles. The key is the single longest option in 4 of 19.

## Uniqueness checks

Read every existing eye SAMP (eye-01 to eye-38) and the SAMPs that list eye as a secondary topic. New ground in this batch: herpes gladiatorum, the stromal versus epithelial rule for when a steroid is right, acute hemorrhagic conjunctivitis, ocular syphilis, occult scleral rupture in an older adult with a normal CT, and airbag alkali with hyphema. Overlaps a reviewer should weigh:

- eye-03 (HSV dendrite on drops) and eye-05 (zoster) also teach HSV and steroids. eye-39 differs in mechanism (contact sport), lid disease first, and the stromal question.
- eye-43 q4 (head raised, no NSAIDs, shield) overlaps the write-in management list of eye-10 q2. It is a single best answer in a different case, but it is the item most likely to be flagged.
- eye-43 q1 (irrigate first) shares the principle of eye-12 q1 (splash at work). The new point is the hidden alkali in airbag powder during trauma care.
- Neonatal HSV, periorbital eczema herpeticum, infant abuse with retinal hemorrhage and occipital hemianopia were considered and dropped because other topics already teach them.

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| belongia-gladiatorum | Belongia EA et al. N Engl J Med. 1991 | PubMed abstract PMID 1652687 (read through the NCBI E-utilities). No URL given because the PubMed page itself did not load. |
| rveeh-hsv | Royal Victorian Eye and Ear Hospital ED. Herpetic corneal infections CPG18.0 v4.0. 2020 | https://eyeandear.org.au/wp-content/uploads/2021/11/Herpetic-Corneal-Infections-Clinical-Practice-Guideline1.pdf |
| azari-conjunctivitis | Azari AA, Barney NP. JAMA. 2013 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4049531/ (Table 2 HSV doses, steroid statements, hand hygiene) |
| aao-hsv | White ML, Chodosh J. AAO. 2014 | https://www.aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline |
| lay-ahc | Lay K et al. Western Pac Surveill Response J. 2026 | https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1226/1270 (doi 10.5365/wpsar.2026.17.1.1226) |
| phac-syphilis-clinical | PHAC. Syphilis guide: risk factors and clinical manifestations. 2023 | https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/risk-factors-clinical-manifestation.html |
| cdc-sti-2021 | Workowski KA et al. MMWR Recomm Rep. 2021 (same object as s08) | https://www.cdc.gov/std/treatment-guidelines/neurosyphilis.htm |
| open-globe | Zhou Y et al. Clin Ophthalmol. 2022 (same object as s37) | https://doi.org/10.2147/OPTH.S372011, which resolves to the Dove Press full text |
| stein-airbag | Stein JD et al. Trans Am Ophthalmol Soc. 1999 | https://pmc.ncbi.nlm.nih.gov/articles/PMC1298254/ |
| barnes-airbag-alkali | Barnes SS et al. Hawaii J Med Public Health. 2012 | https://pmc.ncbi.nlm.nih.gov/articles/PMC3419824/ |
| eyewiki-hyphema | Oldham GW et al. AAO EyeWiki. Hyphema. Updated 2026 (same object as s37) | https://eyewiki.org/Hyphema (reviewed 2 September 2026) |

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 132 of 132 pass. Under heavy machine load from other agents, the bank wide near duplicate stem test can go past its default 5 second timeout. It passed on the final run in 4.3 seconds and found no duplicates.

## Uncertain, for reviewers

1. Ocular syphilis treatment and CSF advice come from the 2021 US CDC guideline. The PHAC syphilis guide (updated 2026) sends neurosyphilis treatment to a specialist and does not mention ocular syphilis, so there is no Canadian source for the regimen.
2. Topical antivirals (acyclovir ointment, trifluridine, ganciclovir gel) are left out of the keys because of doubt about Canadian supply. The keys use oral valacyclovir 500 mg three times daily (Azari Table 2).
3. The HSV stromal rule (eye-39 q4) comes from an Australian hospital ED guideline and the 2014 AAO statement, which has not been revised recently.
4. The acute hemorrhagic conjunctivitis source is one outbreak study. Its statements on incubation (12 to 48 hours), resolution in 1 to 2 weeks and subconjunctival hemorrhage in 82% come from that paper. No guideline gives treatment for this illness, so the key (supportive care) rests on Azari's advice for viral conjunctivitis in general.
5. Prophylactic antibiotics for open globe (vancomycin with ceftazidime) follow the Zhou review. Canadian centres may use other agents. The menu option is kept generic ("Broad spectrum IV antibiotics").
6. eye-42 q1 keys visual acuity over the other steps. A reviewer may want the stem to state more plainly that acuity has not been measured yet.
7. The airbag disposition (eye-43 q3) relies on EyeWiki's outpatient criteria. Next day ophthalmology review is assumed to be possible 2 hours away by road.
8. Web search ran out partway through the work. Every citation above was opened with WebFetch or read on PubMed, but a few distractor reasons rest on standard teaching, not on the cited source. Examples are the incubation of adenovirus (left out on purpose), HLA-B27 uveitis findings and toxoplasma findings.

## Revision 1

This revision answers every fail in `docs/reviews/q500b-qa-s76.md`. It does not use the last D1 repeat slot. Before writing each new decision I searched all of `src/samps` and `src/cases` by keyword (enterovirus, hyphema grade, von Willebrand, Ocular Trauma Score or visual outcome, afferent defect after trauma, airbag and sodium hydroxide, subconjunctival hemorrhage investigations). None of the new keys is keyed anywhere else in the bank.

### Changes by item

| Item | QA finding | Change |
|---|---|---|
| eye-39 q2 | "no floaters" not in stem | Explanation now reads "His vision is 20/20". |
| eye-39 q3 | Update named the q2 key | The update now opens "The cornea is clear." |
| eye-39 q5 | Repeat of eye-03, update cue | Removed. eye-39 now has 4 questions. Return to wrestling had no source with exact criteria, so I dropped the question rather than replace it. `aao-hsv` is no longer cited and has been removed from the sources. |
| eye-40 q1 | "red discharge" | Now "watery discharge". |
| eye-40 q3 | Repeat of eye-04 q4 and eye-21 q3, lead-in cue, TF-IDF 0.53 with eye-39 q3 | Replaced with a new menu (select 1 or None). Which investigations do her subconjunctival hemorrhages need? The key is None, because the hemorrhages are part of the illness (82% in Lay 2026). The question shares no option or wording with eye-39 q3. It differs from eye-36 q1, where the key is an INR for a patient on warfarin. |
| eye-40 q4 | Repeat of eye-04 q3 (hand washing) | Replaced with a new single question. Which test confirms the outbreak virus? The key is a conjunctival swab for enterovirus PCR (Lay 2026: RT-PCR of conjunctival swabs, then sequencing to the coxsackievirus A24 variant). Azari is no longer cited in eye-40 and has been removed from its sources. |
| eye-41 q1 | Detail added beyond the stem and source | Now "A rash on the palms and soles is the rash of secondary syphilis, and the Canadian guide lists uveitis and retinitis among its eye signs." Also "Back pain that began with a move". |
| eye-41 q3 | Update named the q2 key | The update now opens "Further examination shows". Sarcoid has its own reason: it can cause a panuveitis but does not explain a reactive treponemal test. |
| eye-41 q4 | Doxycycline duration wrong | Now "A single IM dose of benzathine penicillin treats early syphilis, and oral doxycycline for 28 days treats late latent syphilis. Neither treats eye disease." |
| eye-42 stem | Echoed eye-11 (kitchen counter) | She now gets up in the dark and falls against her bedside table. Title changed to "Older woman who fell in the night". The large incision cataract history stays. |
| eye-42 q4 | Repeat of eye-13 q4 and the batch18 airgun case, lead-in cue | Replaced with prognosis. Which factor most predicts poor final vision? The key is a relative afferent pupillary defect. Zhou 2022 (re-read by WebFetch) names preoperative acuity, an afferent defect and the wound site as the strongest predictors, and repair within 12 to 24 hours and anterior wounds as predictors of a better result. The lead-in does not mention surgery. The question is tagged KF3 because it tests the pupil examination. |
| eye-43 | Rebuilt | q1 is now recognition: the most likely cause of the burning in both eyes is sodium hydroxide from the airbag (Barnes 2012). Immediate irrigation is taught in the explanation, not keyed. The old q2 slit lamp search is gone. The new q2 asks for the hyphema grade (grade 0 microhyphema, EyeWiki), and its update no longer names a key ("Further examination shows"). The new q3 asks which finding would support admission (a known bleeding disorder, from the EyeWiki admission criteria). q4 is the disposition, with the IOP corrected from 22 to 16 mmHg and called normal. The head raised and no NSAID question (repeat of eye-10 and eye-25), and the wrong "drainage angle" phrase, are gone. Stein 1999 is no longer cited and has been removed from the sources. |

### Coverage after revision

20 questions (18 single, 2 menu: eye-40 q3 and eye-41 q4).

| Key feature | Count | Questions |
|---|---|---|
| 1 | 5 | eye-40 q2, q3, q4, eye-41 q3, eye-43 q1 |
| 2 | 5 | eye-39 q1, eye-40 q1, eye-41 q1, eye-41 q4, eye-43 q3 |
| 3 | 4 | eye-39 q2, eye-41 q2, eye-42 q1, eye-42 q4 |
| 4 | 2 | eye-39 q3, eye-39 q4 |
| 5 | 4 | eye-42 q2, eye-42 q3, eye-43 q2, eye-43 q4 |

Single key positions, first to fifth: 4, 4, 4, 4, 2 of 18. The key is the single longest option in 4 of 18.

### Still uncertain

1. Key feature 4 dropped from 4 to 2 questions. Its two repeat items (eye-39 q5 and eye-40 q3) were removed, and I found no steroid decision for a viral eye infection that the bank does not already key. Every key feature is still tested. The reviewer may want one more key feature 4 item if the physician can name a new angle.
2. eye-42 q2 (dense ring of hemorrhage means occult rupture) passed QA. Signed eye-36 q2 mentions the same sign in its explanation, but there it is not the key.
3. eye-40 q4: a few distractor reasons rest on standard teaching rather than Lay 2026, namely that antibody testing gives no answer during the illness and that HSV is one sided with lid vesicles.

### Tests after revision

`npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass.

## Revision 2

This revision answers the 5 fails in `docs/reviews/q500b-verify-s76.md`. Nothing else was changed, apart from one distractor reword in eye-43 q3 to keep the key positions balanced (see the table).

| Item | Change |
|---|---|
| eye-40 q3 | Added "She has had no nosebleeds, bleeding gums or easy bruising." to the stem after "She recalls no injury.", so "no other bleeding" in the explanation now comes from the stem. |
| eye-40 q4 | The prompt is now "Which of the following tests would best identify the cause of her eye findings?" The options and explanation are unchanged. |
| eye-42 q4 | The distractor "Repair within 12 hours of injury" is now "Systolic blood pressure of 168 mmHg". This is the reviewer's example, reworded so that it sorts last and the key stays in the third position. In the explanation, the 12 to 24 hour sentence is now "A wound close to the front of the eye predicts a better result. Her blood pressure does not change the visual outlook." |
| eye-43 q2 | Rebuilt around a grade 1 hyphema. The update is now "Acuity is 20/60 right and 20/25 left. The globe is intact. Further examination shows a layer of blood filling about a quarter of the right anterior chamber." The irrigation sentence is gone. The key is Grade 1. The explanation now covers grade 1 (less than a third) against grades 0, 2, 3 and 4, with the EyeWiki rates of pressure rise (13.5% in grades 1 and 2, 27% in grade 3, 52% in grade 4). |
| eye-43 q4 | The update is now "She understands the plan. The intraocular pressure is 16 mmHg in the right eye." The explanation now opens "A small grade 1 hyphema" in place of "A microhyphema". |
| eye-43 q3 (balance only) | The distractor "Hypothyroidism on levothyroxine" is now "Treated hypothyroidism". It sorts last, so the key "Known von Willebrand disease" moves to the first position. Without this, the grade 1 key in q2 would have put five keys in the second position. The explanation already says "Treated hypothyroidism and myopia do not change the plan". |

Key feature counts are unchanged: 1: 5, 2: 5, 3: 4, 4: 2, 5: 4. That is 20 questions, 18 single and 2 menu. Single key positions, first to fifth: 4, 4, 4, 4, 2 of 18. The key is the single longest option in 3 of 18.

Tests: `npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass.

## Revision 3

This revision answers `docs/reviews/q500b-verify2-s76.md`. Nothing else was changed.

| Item | Change |
|---|---|
| eye-43 q1 | The ultraviolet sentence in the explanation is now "Ultraviolet keratitis starts 6 to 12 hours after sun or welding exposure, and she has had neither." |
| eye-43 q3 | The two distractors already in the stem, "Treated hypothyroidism" and "Myopia requiring glasses", are now "Seasonal allergies on cetirizine" and "Up to date tetanus immunization". These are not in the stem and do not support admission. In the explanation, the matching sentence is now "Seasonal allergies and an up to date tetanus status do not change the plan." Both new options sort after the key, so "Known von Willebrand disease" stays first and is not the longest option. |
| eye-43 q4 | The update is now "She understands the plan. After irrigation the corneas show only punctate staining. The intraocular pressure is 16 mmHg in the right eye." |

Balance is unchanged. Single key positions, first to fifth: 4, 4, 4, 4, 2 of 18. The key is the single longest option in 3 of 18. Key feature counts are unchanged.

Tests: `npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass.

## Revision 4

This revision answers `docs/reviews/q500b-verify3-s76.md`. Nothing else was changed.

| Item | Change |
|---|---|
| eye-43 q4 | The update is now "She understands the plan. The corneas show only punctate staining. The intraocular pressure is 16 mmHg in the right eye." It no longer says "After irrigation", which was a cue. |
| eye-39 q1 | The stem does not say "daily", so the distractor "Daily fluticasone nasal spray" is now "Use of a fluticasone nasal spray". It now sorts last. The key "Blisters on two teammates' faces" stays first and ties in length with the new option, so it is not the single longest. |
| eye-40 stem | "She takes ASA 81 mg daily since a transient ischemic attack" is now "She has taken ASA 81 mg daily since a transient ischemic attack". |

Balance is unchanged. Single key positions, first to fifth: 4, 4, 4, 4, 2 of 18. The key is the single longest option in 3 of 18.

Tests: `npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass.

## Revision 5

This revision answers `docs/reviews/q500b-verify4-s76.md`.

| Item | Change |
|---|---|
| eye-39 q4 | The prompt is now "Which of the following later findings would make a topical corticosteroid appropriate under ophthalmology care?" The phrase "with antiviral cover" is gone. It pointed to the q3 key. |
| eye-43 stem | "and has no other conditions" is gone. It conflicted with the hypothetical "additional findings" in q3, such as a known von Willebrand disease. The stem now reads "She has hypothyroidism treated with levothyroxine." |
| eye-43 q4 explanation | Two consequential edits follow from the stem change. "good understanding and no bleeding disorder" is now "good understanding", because the stem no longer states the absence of a bleeding disorder. "She meets none of the criteria for admission." is now "Nothing in her history meets the criteria for admission." As asked, I added "The next day review also rechecks both corneas after the alkali exposure." |

Balance is unchanged. Options and keys are unchanged. Single key positions, first to fifth: 4, 4, 4, 4, 2 of 18. The key is the single longest option in 3 of 18.

Tests: `npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass.
