# Q500 fresh verification, round 3: s54, Common fractures/MSK

Reviewer: Preceptor (fresh independent AI audit, both lenses). This reviewer has not written, edited or reviewed s54 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the round-3 writer changes (`git diff e4d3571 -- oral-exam-sim/src/samps/s54/msk.ts`, writer notes under "Round 3" in `q500-writer-s54-r2.md`) and msk-40 to msk-43 in full. Uniqueness was checked against `catalog/msk.md`, `analgesia-sedation.md`, `lacerations.md` and `multiple-trauma.md`, and by grep of `src/samps` and `src/cases`. Coordinator ruling applied: a repeated scenario counts as a repeat even when the decisions differ.

Tests: `SAMP_BATCH=s54 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 128 tests passed. House style script: no em or en dashes, smart quotes or semicolons inside strings. No US spellings beyond the bank's own forms ("orthopedic", "edema").

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| msk-39 | PASS (unchanged) | Lines 26 to 107 are identical to e4d3571 |
| msk-40 | FAIL | q1 FAIL (citation record only), q2 PASS, q3 PASS, q4 PASS |
| msk-41 | PASS | q1 PASS, q2 PASS, q3 PASS, q4 PASS |
| msk-42 | FAIL | title FAIL, stem PASS, q1 PASS, q2 PASS, q3 PASS, q4 PASS |
| msk-43 | FAIL | stem PASS, q1 PASS, q2 PASS, q3 FAIL, q4 FAIL |

2 of 5 SAMPs pass. 17 of 20 questions pass. Every remaining fix is small and listed exactly below.

## Round-2 required fixes: were they applied?

| Round-2 item | Applied? | Comment |
|---|---|---|
| msk-40 q1 unsupported forehead claim and q2 give-away | Yes | Aresco 2010 opened. It says that if an elderly patient "presents with abrasions on his/her forehead or face and describes a hyperextensive injury", one "should be highly suspicious of a cervical extension or distraction injury". That supports the explanation. The stem gives a forehead laceration "with a surrounding abrasion". The central cord, canal narrowing and "puts him in that group" sentences are gone. The bibliographic record needs one correction (below). |
| msk-41 q1 false "follows a fall" reason | Yes | Exact reviewer sentence used. Code comment now says "rib". |
| msk-42 stem retells analgesia-sedation-20 | Yes | Now a 12-year-old girl, a slip on a stair at home, a community hospital with MRI only at the regional hospital. No sport, no athlete, no twisting landing. No catalogue item or bank text has a patellar dislocation in this setting. The title was not updated to match (below). |
| msk-42 q2 mock-mode cue | Yes | "The patella is reduced." No direction of movement. |
| msk-42 q3 defensible hinged brace, explanation too strong | Yes | "Hinged brace locked in extension for 6 weeks". The explanation now matches the sources: ESSKA part 2 (PMC12684363) says "there is no evidence for the superiority in the use of any brace (as opposed to no bracing)" and "bracing with an unrestricted range of motion may only be considered in the acute phase ... for a very short time". Sinikumpu advises against a cast or rigid orthosis and says an elastic brace may be useful. Menu ratio 44/22 = 2.0, under 2.6. |
| msk-43 q3 peroneal nerve repeat | Yes, replaced | The replacement q3 has a new defect (below). The fracture moved to the mid shaft, so the peroneal nerve teaching is no longer implied. |
| msk-43 q4 same angle as q1, repeat, mock cue | Yes, replaced | The replacement q4 has no urgency or transfer content and gives no mock-mode cue. It has a new defect (below). |
| msk-43 q1 note on "5 mm" | Yes | Now 4 mm. |

Unrequested writer change (rule 4): msk-42 q1 "Axial traction on the lower leg" became "Longitudinal traction on the leg" to move the key to the first position. Same meaning, the explanation ("traction along the leg") still fits, and it balances positions. Accepted. The msk-43 q3 lag screw option is part of the requested q3 rebuild and is judged there.

## Required fixes

### msk-40 (Fall on an icy driveway)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 (source record) | `aresco` citation: "Aresco C, Gambert SR, Stein DM. Cervical spine injuries in the geriatric patient. Consultant360. 2010." | Consultant360 is the publisher's web portal, not the journal. The page heads the article "Volume 18 - Number 02 - February, 2010". The Consultant journal was in its fiftieth volume in 2010. Volume 18 in 2010 matches Clinical Geriatrics (the American Geriatrics Society clinical journal that Consultant360 hosts), whose editor-in-chief was the second author, Steven R. Gambert. The writer flagged this. The content and URL are right. Only the work name is wrong. The paper is not indexed in PubMed, Europe PMC or Crossref, so this rests on the volume number and the editorship. | Change the citation to: "Aresco C, Gambert SR, Stein DM. Cervical spine injuries in the geriatric patient. Clin Geriatr. 2010." Keep the id, the URL and the explanation unchanged. | https://www.consultant360.com/articles/cervical-spine-injuries-geriatric-patient (issue line and author affiliations), https://www.consultant360.com/articles/introducing-new-clinical-geriatrics (Clinical Geriatrics hosted on Consultant360), Gambert bios naming him editor-in-chief of Clinical Geriatrics | Medium |

### msk-42 (Knee that gave way on a wet floor)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| title | "Knee that gave way on a wet floor" | The stem now says her foot "slipped on a stair at home". There is no wet floor in the case. The writer's own note says "wet kitchen floor" was avoided because msk-34 and msk-37 use it, but the title kept it. A user sees the title. | Change the title to "Knee that gave way on the stairs". It is neutral and does not name the diagnosis. | Stem of msk-42. SAMP_SPEC section 14 | High |

### msk-43 (Dairy farmer kicked during milking)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | Key "Nonoperative care of the fracture". Distractor "Above knee cast for 6 weeks". | The key is a category and the cast is a member of it: an above knee cast is nonoperative care. A candidate who knows the fracture is not fixed can defend the cast option as "nonoperative care" too. The key is also the only option that is not a specific treatment, which breaks the specificity rule (SAMP_SPEC section 7, SCORING-RULINGS B10) and lets it stand out. The rest of the item is sound: Walters (abstract via Europe PMC, PMID 32310599) states that "the vast majority of isolated fibula shaft fractures" are treated non-operatively and that the shaft is "non-weight bearing". | Replace "Above knee cast for 6 weeks" with "External fixator spanning the leg". The order then reads External, Intramedullary, Lag screw, Nonoperative, Plate, so the key stays at index 3 and position balance is unchanged. Do not use a distractor that starts after "N", or the key moves to index 2 and that position reaches 5 of 19 singles (26%, over the 25% limit). Replace the explanation's last sentence with a true reason, for example: "A spanning external fixator holds an unstable or badly contaminated tibial fracture, and his tibia is intact." Rerun the tests for parity. | Walters BB, Constant D, Anand P. StatPearls 2023 (Europe PMC record) | Medium |
| q4 | Update: "The receiving surgeon expects to close his wound 5 days after the injury." Explanation last sentence: "EAST notes consensus that prophylaxis continued well beyond 72 hours is more likely to harm than help." | (1) The update models care that breaches the standard this SAMP cites in q1. BOAST open fractures 2017 says definitive soft tissue closure or coverage "should be achieved within 72 hours of injury if it cannot be performed at the time of debridement". Day 5 is past that. A candidate learns a closure timeline the SAMP's own source rejects, for a 4 mm puncture. (2) The harm sentence misattributes. In the EAST 2011 article it comes from the published discussion, not the recommendations, and it reads "long-term (i.e., >72 hours after surgery) prophylactic antibiotics", measured from surgery, not injury. The same discussion says the 24 hour after coverage limit "has little scientific foundation". The key itself is right. EAST 2011 Level II: "In type III fractures, antibiotics should be continued for 72 hours after injury or not >24 hours after soft tissue coverage has been achieved." The 2000 text it updates adds "whichever occurs first". Table 1 lists farm injuries as a special category of type III. Recomputed with closure at day 5: 72 hours after injury is day 3, and 24 hours after closure is day 6. The earlier of the two is day 3, so "3 days after injury" is the only option that meets both limits. 7, 10 and 14 days pass both. 1 day stops short of 72 hours. | (a) Change the update to: "The receiving surgeon expects to close his wound 72 hours after the injury." Recomputed: 72 hours after injury is day 3, and 24 hours after closure is day 4. The earlier is day 3. The key "3 days after injury" still holds, no option sits at 4 days, and the closure now meets BOAST. In the explanation, change "because his wound is closed on day 5" to "because his wound is closed at 72 hours". (b) Change the last sentence to: "Courses of 7, 10 or 14 days run past both limits, and a discussion published with the guideline notes consensus that routine prophylaxis for more than 72 hours after surgery is more likely to harm than help." Options and key unchanged. | Hoff WS et al. J Trauma 2011, volume 70, issue 3, pages 751 to 754, full text read from https://www.east.org/Content/documents/practicemanagementguidelines/EAST%20PMG_prophyl%20antibiotic_2011.pdf. BOAST open fractures 2017, https://www.boa.ac.uk/resource/boast-4-pdf.html | Medium for (1), high for (2) |

## Question-by-question notes on passing items

### msk-40: q2 to q4 PASS (unchanged since round 2)

- q1 apart from the citation record: the key "Hyperextension" holds. The explanation no longer gives away q2. The distractor mechanisms are standard and correctly oriented. The KF2 tag (injury pattern points to mechanism) is honest.
- Scenario note: airway-33 (s21) is an older man who falls forward down stairs, strikes his forehead and has hand tingling. Its decisions are airway decisions (difficult laryngoscopy predictors, awake intubation, neuro check before sedation), and it is an ankylosing spondylitis fracture in an ambulance arrival. msk-40 was passed on scenario in rounds 1 and 2. Not reopened here, but recorded.

### msk-41: PASS

- q1: the new sentence is true and matches the X-ray in the update. The code comment is corrected. q2 to q4 unchanged and passed in round 2.

### msk-42: stem and q1 to q4 PASS

- Stem: 12-year-old girl, community hospital, MRI at the regional hospital. "Knee buckled inward" (valgus with the knee flexed) is a correct mechanism for a lateral patellar dislocation. The new setting gives the 2 day MRI wait in q3 and q4 a reason. No bank item has this diagnosis in this setting. The near-duplicate stem test passes.
- q1: key at index 0. Clinically correct. The explanation's "after the knee buckled inward" matches the new stem.
- q2: no direction cue. Content passed in round 2.
- q3: see the table of applied fixes. Note: ESSKA part 2 also describes "6 weeks of immobilization using a cylinder cast or removable splint" as one approach in the literature, without endorsing it. For a 12-year-old under Sinikumpu's paediatric guidance, the elastic brace remains the single best answer.
- q4: 15 mm x 12 mm = 180 mm2 = 1.8 cm2, rechecked. Pronouns updated. Passed.

### msk-43: stem, q1 and q2 PASS

- Stem: mid-shaft kick, tenderness over the fibula, pulse present. Consistent with the q1 update and with q3.
- q1: BOAST 2017 page reopened: "Immediately for highly contaminated wounds (agricultural, aquatic, sewage)", 12 hours for other high energy, 24 hours for all other low energy. Scope: "open fractures of long bones, hind foot or midfoot". The fibula is a long bone. The msk-34 q3 overlap stays a note, as in rounds 1 and 2.
- q2: EAST 2011 Level I recommendations read in full text: gram-positive cover as soon as possible, added gram-negative cover for type III, high-dose penicillin for "fecal or potential clostridial contamination (e.g., farm-related injuries)", and fluoroquinolones offer no advantage and may impair healing. Supported.
- Writer flag, q2 and q4 both on EAST: not the same angle. q2 asks which agent covers clostridia. q4 asks how long prophylaxis runs for a type III fracture. They are different decisions from different recommendations (Level I and Level II). Sharing a guideline is not a repeated angle. No bank item keys an open fracture antibiotic duration (grep of `src/samps` and `src/cases`).
- KF tags: q1, q2 and q4 are tagged KF6 (subtle open fracture, so treatment is timely). As in round 2, no question makes the candidate find the puncture, because the q1 update shows it. q4 does depend on reading a 4 mm farm puncture as a type III fracture, which is a fair link to KF6. Accepted as a note. q3 KF8 (care after diagnosis) is honest.

## Writer's flags adjudicated

1. Aresco record: the content is real and supports the point. The work name should be Clinical Geriatrics (fix above).
2. msk-43 q2 and q4 both on EAST: different decisions, not one angle. Accepted.
3. Walters read only as an abstract: acceptable. The Europe PMC record (Walters BB, Constant D, Anand P. Fibula Fractures. StatPearls Publishing, 2023) was confirmed, and the abstract text contains both claims the explanation uses: treatment "for the vast majority of isolated fibula shaft fractures is non-operative" and the fibula "is a non-weight bearing bone in terms of the shaft". The explanation adds no claim from the full text. The q3 failure is about the options, not the source.

## Key feature coverage

Tags: msk-39 3, 7, 8, 2. msk-40 2, 3, 4, 7. msk-41 2, 2, 2, 8. msk-42 5, 1, 8, 7. msk-43 6, 6, 8, 6. Every key feature from 1 to 8 is tested. KF1 rests on msk-42 q2 alone (osteochondral fracture as the companion of a patellar dislocation), which is a fair KF1 item. KF4 (msk-40 q3) and KF5 (msk-42 q1) have one item each. None of the required fixes changes a tag.

Single key positions, first to fifth: 4, 4, 4, 3, 4 (19 singles, maximum 21%). The required fixes keep these counts, provided the msk-43 q3 replacement option sorts before "Nonoperative" as stated.

## Uniqueness

- New and unique: patellar dislocation in a child at home in a community hospital (msk-42), isolated fibular shaft fracture care (msk-43 q3), open fracture antibiotic duration (msk-43 q4), mid-shaft open fibular fracture from a cow kick (msk-43 stem). Greps for "fibular shaft", "isolated fibula", "nonoperative care", "soft tissue coverage", "72 hours after injury", "patellar dislocation", "kneecap shift" and "osteochondral" found no other keyed item. The catalogue entries for msk-40 to msk-43 are older drafts of this batch, not other items.
- lacerations-07 (manure leg wound), lacerations-31 and lacerations-35 (rural leg wound) key wound care, tetanus, timing of the first antibiotic dose and extensor testing. None is keyed here.

## Sources verified

- Aresco C, Gambert SR, Stein DM. Cervical spine injuries in the geriatric patient. Page opened. Issue line "Volume 18 - Number 02 - February, 2010". Forehead and face abrasion quote confirmed. https://www.consultant360.com/articles/cervical-spine-injuries-geriatric-patient
- Hoff WS, Bonadies JA, Cachecho R, Dorlac WC. J Trauma 2011, volume 70, issue 3, pages 751 to 754. Full text read from the EAST PDF: Level I and Level II recommendations, Table 1 (farm injuries as type III), and the discussion on prophylaxis "> 72 hours after surgery". https://www.east.org/Content/documents/practicemanagementguidelines/EAST%20PMG_prophyl%20antibiotic_2011.pdf (PubMed record https://pubmed.ncbi.nlm.nih.gov/21610369/ confirmed via Europe PMC)
- Walters BB, Constant D, Anand P. Fibula fractures. StatPearls 2023. Europe PMC record and abstract (PMID 32310599). https://pubmed.ncbi.nlm.nih.gov/32310599/
- British Orthopaedic Association. BOAST: open fractures. December 2017. Debridement timing, scope and the 72 hour closure standard read. https://www.boa.ac.uk/resource/boast-4-pdf.html
- Balcarek P et al. ESSKA 2024 consensus part 2. Full text via Europe PMC (PMC12684363): bracing statements quoted above. https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/
- Sinikumpu J, Nicolaou N. J Child Orthop 2023 (PMC9900011) and Divi SN et al. Global Spine J 2019 (PMC6512200): records and content as checked in round 2. Divi is now cited by q2 only, which it supports.

## Needs physician or product owner decision

- msk-43 q4: EAST 2011 is the newest open fracture antibiotic guideline the batch cites. Some centres now give shorter courses (24 hours) even for type III fractures. The key holds under EAST, and no Canadian guideline exists.
- From round 2, still open: Fehlings 2024 "preferred option" (abstract) against "an option" (body text) for msk-40 q4.

## Summary

2 of 5 SAMPs pass (msk-39, msk-41). 17 of 20 questions pass. Every round-2 fix was applied. Four small fixes remain:

- msk-40: correct the Aresco work name to Clin Geriatr (citation line only).
- msk-42: title still says "wet floor". Change it to "Knee that gave way on the stairs".
- msk-43 q3: the "Above knee cast" distractor is itself nonoperative care. Replace it with "External fixator spanning the leg" and update the explanation's last sentence.
- msk-43 q4: wound closure on day 5 breaches BOAST's 72 hour standard, and the harm sentence misattributes the EAST discussion. Set closure at 72 hours and reword that sentence. The key is unchanged.

The s54 batch has not yet passed fresh review. After these four fixes it needs one more fresh review.
