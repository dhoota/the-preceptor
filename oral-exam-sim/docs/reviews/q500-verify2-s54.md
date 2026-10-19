# Q500 fresh verification, round 2: s54, Common fractures/MSK

Reviewer: Preceptor (fresh independent AI audit, both lenses). This reviewer has not written, edited or reviewed s54 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the whole current text of `src/samps/s54/msk.ts`. An earlier agent edited the file after the round-1 verdict (`q500-verify-s54.md`) and the writer then revised it (`q500-writer-s54-r2.md`). The whole file is treated as the revision. Uniqueness was checked against `catalog/msk.md`, `lacerations.md`, `analgesia-sedation.md`, `multiple-trauma.md`, with greps of all other catalogues and of the current text in `src/samps` and `src/cases`.

Tests: `SAMP_BATCH=s54 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 128 tests passed.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| msk-39 | PASS | q1 PASS, q2 PASS (note), q3 PASS, q4 PASS |
| msk-40 | FAIL | q1 FAIL, q2 PASS, q3 PASS, q4 PASS |
| msk-41 | FAIL | q1 FAIL, q2 PASS, q3 PASS (note), q4 PASS (note) |
| msk-42 | FAIL | stem FAIL, q1 PASS, q2 FAIL, q3 FAIL, q4 PASS |
| msk-43 | FAIL | q1 PASS (note), q2 PASS, q3 FAIL, q4 FAIL |

1 of 5 SAMPs pass. 14 of 20 questions pass.

## Round-1 required fixes: were they applied?

| Round-1 item | Applied? | Comment |
|---|---|---|
| msk-39 q1 repeat of msk-05 q1 and msk-07 q1 | Yes | The hip sign is now in the update and q1 keys the diagnosis, femoral neck stress fracture, which no other item keys. |
| msk-39 q2 MRI repeat and the "not recommended" reason | Yes | The MRI question is gone. The MRI result sits in the q2 update. |
| msk-40 q1 CCR repeat, CCR overstated, mock cue | Partly | The CCR repeat and the overstatement are gone, and nothing later names "hyperextension". New defects in the rebuilt q1 are listed below. |
| msk-40 q4 stale 2017 timing source | Yes | Fehlings 2024 is cited and checked (see Sources). |
| msk-41 stem retells analgesia-sedation-16 | Yes | It is now a pathologic rib fracture. No catalogue item has one. |
| msk-41 q1 self-answering update | Yes | The update no longer says "lesion" or "through". The key is "Pathologic fracture". |
| msk-41 q3 note (KF2 tag, q4 calcium update) | Flagged | Left under SCORING-RULINGS B6 ("if the later question cannot work without the fact, leave it and flag it"). Accepted. |
| msk-42 every question a repeat | Yes for decisions | Rebuilt as a patellar dislocation. No decision repeats the bank. The stem now raises a scenario-level repeat (below). |
| msk-43 stem mirrors lacerations-31 | Yes | It is now an open fibular neck fracture from a cow's kick. |
| msk-43 q3 splint repeat | Yes, removed | The replacement q3 fails (below). |
| msk-43 q4 compartment repeat | Yes, removed | The replacement q4 fails (below). |

## Required fixes

### msk-40 (Fall on an icy driveway)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Key "Hyperextension". Explanation: "A forward fall that drives the forehead into the ground pushes the head backward and forces the neck into hyperextension, so the forehead wound marks the mechanism. Divi and colleagues describe hyperextension as the most common mechanism of acute traumatic central cord syndrome, in which the cord is compressed within a canal already narrowed by spondylosis ... His age and the arthritis of his neck put him in that group" | (1) The key rests on the claim that a forehead wound marks hyperextension. Divi 2019 does not say this. The full text (read via Europe PMC, both parts) never mentions a forehead, face or forward fall. It supports only "hyperextension is the most common mechanism of ATCCS" and "falls in elderly patients". The deciding claim of the question has no cited support (Lens A 8, Lens B 1). (2) The explanation names central cord syndrome, cord compression over a narrowed canal, and says "his age and the arthritis of his neck put him in that group". That gives away the q2 key ("Cervical spinal cord injury") before q2 is answered. | (a) Cite a source you have opened that states that a blow to the forehead or face drives the neck into hyperextension, and add it to `sources`, or reword the explanation so every claim traces to a cited text. Do not invent one. (b) Take the central cord and cord-compression sentences out of the q1 explanation. Keep only the mechanism teaching and the distractor reasons. The central cord teaching already sits in q2. | Divi SN et al. Global Spine J 2019, full text PMC6512200 | Medium |

### msk-41 (Pain in the side after reaching back)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Explanation: "A fragility fracture of osteoporosis follows a fall and does not produce a lucent, expanded area or months of night pain." | "Follows a fall" is not a true reason. A fragility fracture follows a fall from standing height or less, or minimal trauma such as a twist or cough. A rib fragility fracture from a twist is exactly this mechanism. The distractor is wrong only because of the X-ray and the night pain. | Change to: "A fragility fracture of osteoporosis can follow a minor twist, but it does not produce a lucent, expanded area with a scalloped cortex, or months of night pain at the site." | BOAST metastatic bone disease 2022 (night pain and antecedent pain are suspicious) | Low |

### msk-42 (Twisted knee at a trampoline park)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | A young athlete twists a knee landing in sport, feels the kneecap shift, and arrives holding the knee flexed with the patella displaced laterally | This retells analgesia-sedation-20 (s22), which is also filed in the MSK catalogue: a young athlete who twisted her knee in sport, felt her kneecap shift, knee held flexed, patella displaced laterally, in a tertiary ED. Age, sex, first versus second episode and the sport differ, but the diagnosis-plus-setting combination is the same (Q500_BRIEF rule 3). Round 1 failed msk-41's stem on exactly this ground (decisions different, diagnosis and setting reused), and the writer accepted that ruling there. The same standard applies here. The decisions themselves are all new. | Change the setting so the combination differs from analgesia-sedation-20, keeping the four decisions. For example, a community or rural ED where MRI means a transfer or a delay, or a mechanism other than a twisting landing in sport. Or get a product owner ruling, recorded in the review trail, that a scenario used only as the backdrop for another topic's analgesia decisions does not count as a reuse. A reviewer cannot grant that. | analgesia-sedation.md and msk.md, analgesia-sedation-20 | Medium |
| q2 | Update: "The patella returns to its groove as the knee is extended." | Mock-mode cue (SCORING-RULINGS B6). In mock mode the q2 update shows with q1, and "as the knee is extended" points to the only option that contains extension, the q1 key "Extension with medial patellar push". The later question works without this detail. | Reword to something like "The patella is reduced. He can now do a straight leg raise." Do not mention the direction of movement. | SCORING-RULINGS B6 | High |
| q3 | Menu (select 1), key "Elastic patellar brace". Distractor "Hinged brace locked in extension" (no duration) | The distractor is defensible. The update says he goes home overnight until MRI the next morning, and q2 has just raised an osteochondral fracture. ESSKA 2024 part 2, which this SAMP cites, finds "no evidence for the superiority in the use of any brace" and notes no consensus on the type or duration of immobilization. Its discussion describes functional bracing after a short immobilization. A brace locked in extension for one night before the MRI is a recognized option. Sinikumpu says an elastic brace "may be useful" and advises against a cast or rigid orthosis, which is a preference, not a single best answer over a one-night locked brace. The other rigid options carry durations of 3 to 6 weeks, which makes them wrong, but this one has no duration. | Give the hinged brace option a duration that makes it plainly wrong (for example "Hinged brace locked in extension for 6 weeks"), or replace it. Then soften the explanation's claim to match the sources: ESSKA finds no brace superior, and Sinikumpu prefers an elastic patella brace and advises against prolonged rigid immobilization. Recheck menu length parity after the edit. | Balcarek P et al. ESSKA 2024 part 2 (PMC12684363). Sinikumpu J, Nicolaou N 2023 (PMC9900011) | Medium |

### msk-43 (Dairy farmer kicked during milking)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | Key "Common peroneal nerve injury" as the injury most likely with a fibular neck fracture. The explanation then teaches foot drop, weak dorsiflexion and eversion, and numbness of the lateral leg and dorsum of the foot. | Repeats a keyed decision and teaching point (writer's flag 1 upheld). msk-15 (s06, signed) is a knee injury with a fibular head avulsion: q1 keys "Common peroneal nerve injury" among the associated injuries to exclude, and q3 keys the peroneal nerve examination (ankle and toe dorsiflexion, eversion, first web space and dorsal foot sensation), which this explanation repeats almost word for word. The lateral knee laceration item (lacerations and msk catalogues) also keys "Peroneal or saphenous nerve function". The idea "injury at the fibular head or neck, so check the common peroneal nerve" is already in the bank, and no D1 row covers it. | Replace q3 with a decision the bank lacks. It does not need to stay KF1, because msk-42 q2 covers KF1. Check the candidate against the catalogues first. Wound care before transfer (photograph, saline dressing) is already keyed in msk-11 and lacerations-31, and tetanus for a manure-soiled leg wound is keyed in lacerations-07, so neither is available. | msk.md, msk-15 q1 and q3. lacerations.md knee laceration item | Medium |
| q4 | Update: he has capacity and asks to go home and return for surgery tomorrow. Key "Explain the risk and transfer him now". | (1) Same angle as q1 within the batch (writer's flag 2 upheld). Both questions turn on the BOAST "immediate debridement for agricultural contamination" rule, and the q4 explanation restates it. Q500_BRIEF rule 3 forbids repeating an angle within a batch. (2) The underlying decision (urgent transfer or referral for open fracture debridement) is keyed in msk-34 q4, msk-11 q3 and the D1 row multiple-trauma-10 q3. The capacity twist does not change the decision. (3) Mock-mode cue (B6): the q4 update ("return for surgery tomorrow") and the options "Agree to surgery tomorrow morning" and "transfer him now" tell a mock-mode candidate that the q1 answer is "Immediately after transfer". | Replace q4 with a decision that is neither open fracture urgency nor transfer timing and that the bank lacks. If KF7 leaves this SAMP, it stays covered by msk-39 q2, msk-40 q4 and msk-42 q4. Check the catalogues before writing. | BOAST open fractures 2017. msk.md, msk-34 q3 and q4, msk-11 q3. DECISIONS.md D1 | High for (1) and (3), medium for (2) |

## Question-by-question notes on passing items

### msk-39 (Runner with an aching knee): PASS

- q1: Femoral neck stress fracture is keyed nowhere else in the bank. Robertson's full text supports the history, the internal rotation sign, female sex and the link to amenorrhea. Note: the q2 update ("a fracture line ... of the right femoral neck") names the q1 key in mock mode. q2 cannot work without it, so it is flagged under B6, not failed.
- q2: Robertson defines complete as more than 50% of neck width and lists surgical fixation for tension fractures. The key holds. Physician-level: "A spica cast is not the treatment for an unstable tension-sided fracture" is close to "not indicated" (SAMP_SPEC section 8). A true reason (a cast does not hold an unstable femoral neck in an adult) would be better.
- q3: Robertson states "initial bed rest [is] mandatory prior to surgical intervention" for a completed fracture, because even non-weight-bearing lets the pelvic stabilizers displace it. The key holds against the source, and the crutch distractors are the bank's msk-17 q4 and msk-36 q4 keys used as wrong answers, which is legitimate. The KF8 tag (initial disposition) is acceptable.
- q4: BMI 49 / 1.68^2 = 17.36, rechecked. Low energy availability is new to the bank.

### msk-40: q2 to q4 PASS

- q2: Divi supports every claim: the most common incomplete SCI, arms worse than legs, older adults after falls, often without bony injury.
- q3: The MRI after a CT that shows no fracture, in a patient with a deficit, is new. Fehlings 2017 MRI record confirmed.
- q4: Fehlings 2024 checked (see Sources). The explanation's wording ("offered as the preferred option ... regardless of level") matches the abstract. The included evidence does contain a central cord study (Aarabi 2021, early surgery under 24 hours in acute traumatic CCS). Physician-level: the body text of the guideline says "offered as an option", while the abstract says "the preferred option". The key ("Urgent spine surgery consultation") holds under either wording.
- KF2 tag on q1 (injury pattern points to mechanism) is acceptable.

### msk-41: q2 to q4 PASS

- q2: Hb 96 g/L is below 100. Creatinine 188 umol/L is above 177. Lytic lesions are present. The protein gap is 98 - 31 = 67 g/L. All rechecked.
- q3: BOAST metastatic bone disease 2022, Standard 6, lists "calcium & bone profile ... myeloma screen" and orthogonal X-rays of the whole bone. Supported. The KF2 tag is loose but defensible within a workup for the cause of the fracture.
- q4: Calcium 3.18 mmol/L with creatinine 188 umol/L. Admission with IV saline is correct. Dimopoulos 2016 record confirmed. The update states the q3 key (B6). Flagged, accepted, because q4 needs the value.
- Cosmetic: the code comment above msk-41 still reads "Pathologic humeral fracture from myeloma". It is not shown to users. The writer may correct it.

### msk-42: q1 and q4 PASS

- q1: Clinically correct (extension with medially directed pressure on the lateral border of the patella). Sinikumpu's own words, "extending the knee and slightly lateral pressure on the patella", are ambiguous, and the passage is about an irreducible patella under general anesthesia. The explanation's reading is the standard technique. Physician-level: confirm the sentence attributed to Sinikumpu. The key itself is not in doubt.
- q2: Apart from the update cue above, the content is supported. Sinikumpu: medial tenderness is "invariably present" after a first dislocation, a hemarthrosis prompts a search for chondral injury, and MRI is the investigation of choice. Hemarthrosis is common after any first dislocation, but among these options it is the best single marker. The key holds.
- q4: 15 mm x 12 mm = 180 mm2 = 1.8 cm2, rechecked. ESSKA part 2: repair defects of 1 cm2 or more, with refixation preferred. Supported.

### msk-43: q1 and q2 PASS

- q1: BOAST 2017: immediate for agricultural contamination, 12 hours for high energy, 24 hours for other low energy. A fibula is a long bone, so it is within BOAST's scope. The overlap with msk-34 q3 (same BOAST timing question, key "24 hours") was passed with a note in round 1. It stays a note. Physician-level: the "5 mm" wound repeats msk-34's "5 mm wound" detail. Consider another size.
- q2: EAST 2011 supports penicillin for clostridial or farm contamination, farm injuries as type III, and the fluoroquinolone statement. Not keyed elsewhere.
- KF6 note (low, not a failure): neither q1 nor q2 makes the candidate identify the hidden open fracture. The q1 prompt already calls for debridement. Round 1 accepted these tags, so this is noted, not failed. If q3 or q4 is rebuilt, a genuine KF6 decision that the bank lacks would strengthen coverage.

## Writer's flags adjudicated

1. msk-43 q3 common peroneal nerve against msk-15 q1: upheld as a repeat. FAIL (above).
2. msk-43 q4 against q1 sharing BOAST urgency: upheld. It is the same angle, it echoes msk-34 q4 and the D1 row, and it gives a mock-mode cue to q1. FAIL.
3. msk-41 q4 stating q3's calcium value: accepted under B6 as a flag. Not a failure.
4. msk-42 against analgesia-sedation-20 (patellar dislocation): a repeat at the scenario level (diagnosis plus setting), not at the decision level. FAIL at stem level, medium confidence, for consistency with the round-1 msk-41 ruling. A product owner ruling could instead clear it (above).
5. StatPearls confirmed only via Europe PMC: acceptable. The Europe PMC record (PMID 31751049, Lezak B, Massel DH, Varacallo MA, StatPearls, 2024, NBK549859) is confirmed. The NCBI Bookshelf page is behind a reCAPTCHA for this reviewer too. The StatPearls mirror (statpearls.com article 27038) lists "direct impact or cut on the fibular neck" and "proximal fibula fracture" among the traumatic causes. The citation exists and supports the point. It becomes moot if q3 is replaced.
6. KF4 and KF5 each have one item (msk-40 q3, msk-42 q1). This meets the batch rule.

## Key feature coverage after the required fixes

Tags now: msk-39 3, 7, 8, 2. msk-40 2, 3, 4, 7. msk-41 2, 2, 2, 8. msk-42 5, 1, 8, 7. msk-43 6, 6, 1, 7. Every key feature is tested.

- If msk-43 q3 and q4 are replaced, KF1 stays covered by msk-42 q2 and KF7 by three items.
- If msk-42 is reset to a new setting, it must keep KF5 (q1) and KF1 (q2), which are otherwise the batch's only KF5 item and one of two KF1 items.

Single key positions, first to fifth: 4, 4, 4, 3, 4 (19 singles, maximum 21%). The tests confirm parity, order and lengths.

## Uniqueness

- New and unique: femoral neck stress fracture (msk-39), central cord syndrome and the MRI after a CT without fracture (msk-40), pathologic rib fracture and myeloma (msk-41; myeloma appears elsewhere only in dvt-pe as a VTE risk), patellar reduction manoeuvre, osteochondral fracture sign, patellar brace and fragment repair (msk-42), and penicillin for farm contamination (msk-43 q2).
- Not unique: msk-43 q3 and q4, and the msk-42 scenario (above).
- No new stem is a near duplicate. The bank-wide stem test passes.

## Sources verified

- Robertson GA, Wood AM. Sports Med Int Open 2017. Full text via Europe PMC (PMC6226070): bed rest mandatory before surgery for a completed fracture, the pelvic stabilizer mechanism, more than 50% of neck width as complete, surgical fixation for tension fractures, internal rotation as the most consistent sign, radiation to the knee. https://pubmed.ncbi.nlm.nih.gov/30539087/
- Divi SN, Schroeder GD, Mangan JJ, et al. Global Spine J 2019;9(1 Suppl):89S to 97S. Full text read (PMC6512200): hyperextension the most common mechanism, older adults after falls, stenosis and spondylosis predispose, it can occur without bony injury, the most common incomplete SCI, arms worse than legs. No statement linking a forehead or facial impact to hyperextension. https://pmc.ncbi.nlm.nih.gov/articles/PMC6512200/
- Fehlings MG, Tetreault LA, Hachem L, et al. An update of a clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the role and timing of decompressive surgery. Global Spine J 2024;14(3 Suppl):174S to 186S. Full text via Europe PMC (PMC10964895): early surgery within 24 hours "offered as the preferred option" (abstract) or "as an option" (body text) regardless of level. The included evidence contains an early versus late surgery study in acute traumatic central cord syndrome (Aarabi 2021). It supports the msk-40 q4 explanation. https://pmc.ncbi.nlm.nih.gov/articles/PMC10964895/
- Fehlings MG et al. 2017 MRI guideline. Record unchanged from round 1. https://pmc.ncbi.nlm.nih.gov/articles/PMC5684845/
- British Orthopaedic Association. BOAST: management of metastatic bone disease. 2022. Page read: "Low energy fractures in the non-osteoporotic population, antecedent pain, night pain" raise suspicion. Standard 6 lists calcium and bone profile, myeloma screen and orthogonal X-rays of the whole bone. https://boa.ac.uk/resource/boast-management-of-metastatic-bone-disease.html
- Rajkumar 2014, Dimopoulos 2016, Mountjoy 2023 (REDs): records unchanged from round 1. Not reopened.
- Sinikumpu J, Nicolaou N. J Child Orthop 2023. Full text via Europe PMC (PMC9900011): reduction by extension with "slightly lateral pressure on the patella", medial tenderness "invariably present", hemarthrosis prompts a search for chondral injury, MRI the investigation of choice, no cast or rigid orthosis, an elastic patella brace "may be useful", weight bearing as tolerated. No fragment size threshold. https://pmc.ncbi.nlm.nih.gov/articles/PMC9900011/
- Balcarek P, Blønd L, Beaufils P, et al. ESSKA 2024 formal consensus part 2. Knee Surg Sports Traumatol Arthrosc 2025;33(12):4197 to 4206. Full text via Europe PMC (PMC12684363): repair defects of 1 cm2 or more in the patellofemoral contact area, with refixation preferred, and "no evidence for the superiority in the use of any brace". https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/
- BOAST open fractures 2017 and Hoff WS et al. EAST 2011: the writer's reading of them is consistent with the round-1 reviewers' checks. Not reopened.
- Lezak B, Massel DH, Varacallo MA. Peroneal nerve injury. StatPearls 2024. Record via Europe PMC (PMID 31751049). Content checked through the statpearls.com mirror. https://pubmed.ncbi.nlm.nih.gov/31751049/

## House style

Checked by script: no em or en dashes, smart quotes or semicolons inside strings. No US spellings were found ("manoeuvre", "orthopedic" as used bank-wide). Stems run 105 to 116 words. Updates run 17 to 40 words. Prompts run 11 to 16 words. No personal names in author fields. Physician-level: the explanations name source authors ("Robertson and Wood", "Divi and colleagues"). That is common across the bank (about 40 SAMP files), so it is not failed here, but SAMP_SPEC section 8 says not to restate the citation.

## Needs physician or product owner decision

- Whether a scenario used in another topic only as the backdrop for that topic's decisions (analgesia-sedation-20, patellar dislocation) blocks reusing the diagnosis-plus-setting in the MSK topic. This reviewer applied the round-1 standard and failed msk-42's stem.
- msk-40 q4: the Fehlings 2024 abstract says "preferred option" and the body text says "an option".
- No Canadian open fracture guideline exists. BOAST and EAST stand.

## Summary

1 of 5 SAMPs pass (msk-39). 14 of 20 questions pass. 6 questions fail, plus 1 stem:

- Repeated decision or angle: msk-43 q3 (peroneal nerve, msk-15) and msk-43 q4 (same BOAST urgency as q1, msk-34 q4, mock cue).
- Unsupported key claim and a later answer given away: msk-40 q1.
- Mock-mode cue: msk-42 q2 update.
- Defensible distractor: msk-42 q3 ("Hinged brace locked in extension" with no duration).
- False distractor reason: msk-41 q1 (low confidence, one sentence).
- Scenario repeat: msk-42 stem against analgesia-sedation-20 (medium confidence).

Every round-1 required fix was applied. The new failures are in content added this round.
