# Review of SAMP batch s29 (common fractures and MSK), Lens A

Lens: A, clinical truth. Scope: every SAMP in `src/samps/s29/msk.ts` (msk-16 to msk-38) and `src/samps/s29/review-extra.ts` (msk-39, msk-40). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s29` prints nothing. `SAMP_BATCH=s29 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 532 of 532.

## Fixes made

| SAMP | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| msk-39 | q1 | correct | Planted defect. Key was the radial collateral ligament, but the stem, the mechanism and the explanation all give the ulnar collateral ligament. Key set to the UCL (index 3) | high |
| msk-40 | q2 | explanation | Planted defect. A closing sentence cited "serum lactate of 7.8 mmol/L seen on the first blood gas" in a child with a buckle fracture who had no blood gas. Sentence removed | high |
| msk-28 | q4 | options, key, explanation, source | Key "Similar rerupture rate" rested on one 2010 trial. Myhrvold 2022 (NEJM, 526 patients) found rerupture 6.2% without surgery against 0.6% with it, and Ochen 2019 (BMJ) found a lower pooled rate after surgery. "Higher rerupture rate" was defensible. Rebuilt with key "Fewer wound complications", which holds in every trial, new distractors, new explanation and the Myhrvold source added | high |
| msk-25 | q4 | options, key, explanation | "Add calcitonin nasal spray" was a strawman. Health Canada withdrew calcitonin nasal spray from the Canadian market in October 2013 for cancer risk. Replaced with "Switch to oral risedronate", a plausible bisphosphonate trap. Key unchanged in content (Stop alendronate), now index 2 | high |
| msk-19 | q1 | stem, prompt, options, explanation | The IN fentanyl 36 mcg against 120 mcg, codeine, IM morphine and acetaminophen alone set repeated s02 analgesia-sedation q2 (IN fentanyl 30 mcg against 100 mcg, codeine, IM morphine, acetaminophen alone) and s06 msk-12. Its cited source, the TREKK fractures summary, also does not contain the dose. Rebuilt as an immobilization question (above elbow splint as it lies), which TREKK fractures does support. Stem now says IN fentanyl was given at triage | high |
| msk-31 | q1 | explanation, source | Said codeine and tramadol are not recommended "under 12". TREKK pain treatment 2023 says Health Canada advises avoiding codeine under 18, and Health Canada does not recommend tramadol under 18. Wording corrected. Source changed from TREKK fractures, which has no dosing, to TREKK pain treatment 2023, which gives ibuprofen 10 mg/kg (max 600 mg) | high |
| msk-34 | q2 | stem, options, key, select, explanation | The wound (3 mm puncture, fat droplets), the tetanus history (booster 15 years ago, complete series) and cefazolin 2 g IV repeated s06 msk-08 almost word for word. Explanation also called the wound "small clean" and then "not a clean minor wound". Tetanus history changed to unknown, so the key is now cefazolin plus tetanus toxoid vaccine plus TIG 250 units IM (select 3), per the Canadian Immunization Guide table. Wound changed to 5 mm. Contradiction removed | high |
| msk-22 | q3 | explanation | Called the median nerve deficit "progressing". The stem gives one examination and no change over time | medium |
| msk-18 | q2 | explanation | Presented Fresno-Quebec as established criteria. It is a derivation study whose abstract says prospective validation is warranted, and its criteria are age over 35 with a first episode or a blunt injury. Now says so. The key holds without the rule. Also fixed "films taken only after reduction cannot show a fracture" (they can, only too late) | medium |
| msk-35 | stem | stem | "Needed ibuprofen and acetaminophen every 3 hours" reads as both drugs every 3 hours, above the maximum daily doses. Now alternating | medium |
| msk-35 | q4 | explanation | Keyed "heart level or higher" for routine cast care right after q1 taught that high elevation worsens ischemia. Explanation now separates routine cast care from suspected compartment syndrome | medium |
| msk-36 | stem, q1, q2 | stem, explanation | Explanation said "tenderness at the base of the fifth metatarsal" when the stem placed it 2 cm beyond the base. q2 rejected the stress fracture for "weeks of pain, which he did not have", a fact the stem never gave. Stem now places tenderness over the proximal fifth metatarsal, 2 cm from the tuberosity tip, and says he had no foot pain before today | medium |
| msk-37 | stem | stem | q2 offers "Fracture of the dominant arm" but the stem never said which hand was dominant. Added "She is right-handed" | medium |
| msk-30 | q2 | explanation | No reason given for rejecting peroneal tendon subluxation. Added one. Mechanism softened from "dorsiflexion and inversion" to dorsiflexion with a hindfoot twist, since published mechanisms differ (inversion and eversion both described) and von Knoch 2007 does not state one | medium (reason), low (mechanism) |
| msk-24 | all | source | ATLS cited as 10th edition 2018. The current edition is the 11th, 2025, which the rest of the bank already cites. Citation updated. The claims used (referred shoulder tip pain, FAST, transfer, limited crystalloid) hold in the 11th edition | medium |
| msk-19 | q2 | explanation | "The radius has shortened through a joint" is not a real mechanism. Now explains the forearm ring | low |
| msk-20 | q3 | explanation | Option says "not yet cruising" and explanation said "cannot yet pull to stand", two different milestones. Aligned to cruising | low |
| msk-21 | q2 | explanation | "A Cochrane review of eight trials". The 2017 review has nine trials, eight of which compared hyperpronation with supination and flexion. Reworded. Failure rates 9.2% and 26.4% and NNT 6 verified | low |
| msk-16 | stem, q2 | stem, explanation | "Body turned outward over" a planted right foot externally rotates the leg, which is the opposite of the external rotation of the foot the case needs. Reworded to the foot twisting outward. q2 linked "ankle films miss a high fibula" to "meets no Ottawa criterion" with a false "since". Split into two true sentences | low |
| msk-31 | q2 | explanation | FORCE compared a soft bandage with rigid immobilization (casts or splints), not with a rigid splint | low |

Answer positions of single keys after the edits (first to fifth): 17, 17, 16, 16, 16. The tests confirm no position above 25% and the key longest in under 35%.

## Key changes

| SAMP | Question | Before | After | Reason |
|---|---|---|---|---|
| msk-39 | q1 | Radial collateral ligament of the thumb (index 0) | Ulnar collateral ligament of the thumb (index 3) | Planted wrong key. Stem and explanation describe a UCL injury |
| msk-28 | q4 | Similar rerupture rate (index 4) | Fewer wound complications (index 1) | Old key contradicted by Myhrvold 2022 and Ochen 2019. Question rebuilt |
| msk-25 | q4 | Stop alendronate (index 3) | Stop alendronate (index 2) | Same answer. Position moved when the withdrawn calcitonin distractor was replaced |
| msk-19 | q1 | Fentanyl 36 mcg IN (index 2) | Above elbow splint as it lies (index 0) | Question rebuilt for overlap and an unsupported citation |
| msk-34 | q2 | Cefazolin 2 g IV and tetanus toxoid booster (select 2) | Cefazolin 2 g IV, tetanus immune globulin 250 units IM and tetanus toxoid vaccine (select 3) | Stem tetanus history changed to unknown to end the duplication of s06 msk-08 |

## Needs physician decision

1. **msk-16 duplicates s06 msk-02 (high confidence).** Both are an external rotation ankle injury with deltoid tenderness and proximal fibular tenderness, full length fibula films, a Maisonneuve injury with a wide medial clear space, and a splint, no weight bearing and fixation. All four teaching points repeat. The writer's notes say the "Ottawa ankle soccer case" was excluded, but msk-02 is that Maisonneuve case. I did not rebuild msk-16 as a new injury in the review. Suggest replacing it with a companion injury pattern not in the bank, such as a Galeazzi or Essex-Lopresti injury, or dropping it.
2. **msk-27 q1 and q3 overlap s06 msk-11 (medium).** "Lift the paramedic dressing, inspect and photograph" and "cefazolin 2 g IV for a low grade open fracture" are the same teaching points as msk-11 q1 and q2. msk-27 q2 (fat-fluid level, CT) and q4 are distinct. Suggest turning q1 into a question on whether the wound enters the knee joint (traumatic arthrotomy).
3. **msk-34 q1 and q3 still overlap s06 msk-08 (medium).** Even after my change to q2, "blood with fat droplets means an open fracture" and "realign a pulseless limb before films" repeat msk-08 q1 and q3, in a different joint. The q3 teaching is KF5 itself, so some repetition may be acceptable. Physician to decide.
4. **msk-24 overlaps the bank's shoulder tip pain teaching (medium).** Shoulder tip pain from blood under the diaphragm is taught in s01, s10, s38 and s50 (ruptured ectopic) and in s44 (splenic bleed after rib trauma). The q4 menu (ectopic and perforated ulcer refer to the shoulder) is abdominal pain content with little MSK in it. q3 (unstable spleen, transfer) sits in s45 multiple trauma territory. The KF3 angle, a "shoulder" complaint that is not the shoulder, is new. Suggest rewriting q4 around MSK referred pain.
5. **msk-37 q2 and q3 overlap s20 abuse-domestic (medium).** s20 has an 86-year-old with moderate dementia, a hip fracture, bilateral upper arm grip bruises, and a question keyed to interviewing him alone despite dementia. msk-37 repeats grip bruises and the interview alone point. The fracture framing and the family caregiver are new. The reporting duty wording in q4 ("vary by province") is correct because the stem names no province.
6. **msk-39 and msk-40 in review-extra.ts are verbatim copies of msk-23 and msk-31**, apart from the planted defects I corrected. They should not be added to the bank. They are not wired into `index.ts`. The msk-31 source and codeine fixes were not copied into msk-40.
7. **msk-35 (low).** The teaching is sound (split cast and padding to skin, heart level, fasciotomy, the rising analgesic need). Its source, von Keudell 2015, is mainly an adult review. A pediatric source (for example Bae and colleagues, J Pediatr Orthop 2001, on the three As) would suit q3 better. I did not add it because I did not verify it this session.
8. **msk-31 q3 (low).** The explanation says an ulnar styloid fleck does not change the plan for a buckle fracture. TREKK fractures 2025 supports this ("distal radius buckle fracture +/- ulnar buckle/styloid fracture" managed with a removable device), but q3 cites Plint 2006, which does not address it.

## Checked and found sound

- msk-18 q1 and q3: Robinson 2012 supports cuff tear or tuberosity fracture in patients 60 or older after low energy falls, the link between cuff tear and nerve deficit, and the advice to check each when the other is found.
- msk-19 q2 to q4: Monteggia, the radiocapitellar line, the PIN palsy pattern (wrist extends radially, sensation spared), and urgent reduction (Ring 1998).
- msk-21 q3 and q4 (Rosen only): X-rays before reduction when there is swelling or bruising, and no immobilization after a successful reduction, agree with usual Canadian practice. The key holds. Rosen 10th ed was not checked page by page.
- msk-22: Herzberg 1993, 41 of 166 missed (25%), dorsal in 97%.
- msk-23: BSSH 2024 (radiographs first, shared decision within 2 weeks for significant laxity) and Beutel 2019 (aponeurosis interposed) support the keys.
- msk-26: Shao 2005, palsy in 11.8%, spontaneous recovery 70.7%, no difference with early exploration.
- msk-28 q1 and q2: Maffulli 1998 (calf squeeze sensitivity 0.96, specificity 0.93, gap palpation 0.73), van der Linden 2003 (raised risk with current and recent exposure, highest in older adults on corticosteroids).
- msk-29: Groh and Wirth 2011 (CT has replaced plain films, MRI to separate a physeal injury under 23, dysphagia, stridor, arm swelling, late onset possible). At 26 the key holds. Anterior dislocations are more common, but the hollow and the posterior force fit a posterior dislocation.
- msk-32: Boutis 2016, 4 of 135 (3.0%) Salter-Harris I and 108 (80.0%) ligament injuries. Boutis 2007, brace better than cast.
- msk-33: Gottschalk 2012, 60% of medial epicondyle fractures occur with a dislocation, and an incarcerated fragment is an absolute indication for surgery.
- msk-25 q1 to q3: ASBMR 2014 case definition (4 of 5 major features shown), contralateral imaging, and a lower risk after stopping.
- msk-38: BMI 47 / 1.65 squared = 17.3. Robertson 2017 (MRI second line, tension side fractures fixed).
- Doses: msk-27 and msk-34 cefazolin 2 g for 70 kg and 60 kg (3 g only at 120 kg or more). msk-31 ibuprofen 230 mg = 10 mg/kg for 23 kg, 460 mg = 20 mg/kg. TIG 250 units IM for adults.
- Originality: no stem resembles the CFPC sample SAMPs. No reference derives from exam recall.

## Sources verified

- Emond 2018, Fresno-Quebec rule, derivation only, "Prospective validation is warranted": https://pubmed.ncbi.nlm.nih.gov/29861274/
- Krul 2017, Cochrane pulled elbow: https://pubmed.ncbi.nlm.nih.gov/28753234/
- Herzberg 1993: https://pubmed.ncbi.nlm.nih.gov/8228045/
- Shao 2005: https://pubmed.ncbi.nlm.nih.gov/16326879/
- Willits 2010: https://pubmed.ncbi.nlm.nih.gov/21037028/
- Myhrvold 2022, NEJM (added): https://pubmed.ncbi.nlm.nih.gov/35417636/
- Ochen 2019, BMJ (checked, not cited): https://pubmed.ncbi.nlm.nih.gov/30617123/
- Boutis 2016: https://pubmed.ncbi.nlm.nih.gov/26747077/
- Boutis 2007: https://pubmed.ncbi.nlm.nih.gov/17545357/
- Plint 2006: https://pubmed.ncbi.nlm.nih.gov/16510648/
- Perry 2022, FORCE: https://pubmed.ncbi.nlm.nih.gov/35780790/
- Gottschalk 2012: https://pubmed.ncbi.nlm.nih.gov/22474092/
- van der Linden 2003: https://pubmed.ncbi.nlm.nih.gov/12912715/
- Maffulli 1998: https://pubmed.ncbi.nlm.nih.gov/9548122/
- von Knoch 2007 (no mechanism stated): https://pubmed.ncbi.nlm.nih.gov/17613502/
- Robinson 2012: https://pubmed.ncbi.nlm.nih.gov/22218378/
- Groh and Wirth 2011: https://pubmed.ncbi.nlm.nih.gov/21205762/
- Shane 2014, ASBMR: https://pubmed.ncbi.nlm.nih.gov/23712442/
- Robertson and Wood 2017: https://pubmed.ncbi.nlm.nih.gov/30539087/
- Hoff 2011, EAST (abstract has no text, citation details confirmed): https://pubmed.ncbi.nlm.nih.gov/21610369/
- von Keudell 2015: https://pubmed.ncbi.nlm.nih.gov/26460664/
- Zwitser 2010: https://pubmed.ncbi.nlm.nih.gov/19570536/
- Cheong 2025: https://pubmed.ncbi.nlm.nih.gov/40588256/
- Ross 1996: https://pubmed.ncbi.nlm.nih.gov/8932671/
- Sherief 2007: https://pubmed.ncbi.nlm.nih.gov/17214988/
- Beutel 2019: https://pubmed.ncbi.nlm.nih.gov/30865860/
- Dean 2024, BSSH: https://pubmed.ncbi.nlm.nih.gov/39315553/
- Ring 1998: https://pubmed.ncbi.nlm.nih.gov/9682084/
- TREKK pediatric fractures v4.0, April 2025 (read in full, no drug doses in it): https://cms.trekk.ca/wp-content/uploads/2023/11/2025_04_22-Fractures-BLR-v4.0-Final.pdf
- TREKK pain treatment v4.0, June 2023 (IN fentanyl 1.5 mcg/kg, max 100 mcg, ibuprofen 10 mg/kg, max 600 mg, codeine avoided under 18): https://trekk.ca/resources/bottom-line-recommendations-pain-treatment/
- Canadian Immunization Guide, tetanus toxoid, updated June 2026 (wound table, TIG 250 units): https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Health Canada, calcitonin nasal spray market withdrawal, 2013: https://recalls-rappels.canada.ca/en/alert-recall/synthetic-calcitonin-salmon-nasal-spray-ns-market-withdrawal-all-products-effective
- Health Canada, tramadol summary safety review (not recommended under 18): https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/safety-reviews/summary-safety-review-tramadol-potential-risk-serious-breathing-problems-children-adolescents.html
- Not verified online: Rosen 10th ed 2023, ATLS 11th ed 2025, Christian 2015, Kocher 1999, Stiell 1993, 1994 and 1996, Stassen 2012, Lachs 2015 and Mountjoy 2023 (all well known, and the same citations sit elsewhere in the bank).

## Summary

- Fixes: 20 rows across 17 SAMPs. By category: 2 planted defects in review-extra (a wrong key and an invented lab value), 3 key rebuilds for clinical truth or overlap (msk-28 q4, msk-19 q1, msk-34 q2), 1 strawman drug no longer sold in Canada (msk-25 q4), 2 citation corrections (TREKK pain for dosing, ATLS 11th ed), 4 stem facts added or corrected (msk-35, msk-36, msk-37, msk-34), and 8 false or unsupported explanation statements.
- Key changes: 5 (listed above), one of them only a position change.
- Needs physician decision: 8 items. The most important is msk-16, a near duplicate of s06 msk-02.
- SAMP ids with a defect: msk-16, msk-18, msk-19, msk-20, msk-21, msk-22, msk-24, msk-25, msk-27, msk-28, msk-30, msk-31, msk-34, msk-35, msk-36, msk-37, msk-39, msk-40.
