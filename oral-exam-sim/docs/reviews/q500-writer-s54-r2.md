# Q500 writer revision round 2: s54, Common fractures/MSK

Writer: Preceptor. Authority: docs/reviews/q500-verify-s54.md. The first-round report (q500-qa-s54.md) and its "key decision check" addendum were read for context only. All items stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. Ids are unchanged. Only `src/samps/s54/msk.ts` and this report were edited.

## Starting point

An earlier agent had already edited the file after the verdict. It replaced msk-42 with a patellar dislocation SAMP, removed the msk-39 MRI question and added a new q3, and replaced the msk-43 compartment question with a Gustilo question. Each of those changes was treated as a writer revision owned here and checked against the verdict and the catalogues. Judgements are below.

## Required fixes and how each was done

### msk-39 (Runner with an aching knee)

| Q | Required fix | What was done |
|---|---|---|
| q1 | Key "groin pain on internal rotation" repeats msk-05 q1 and msk-07 q1 | Rebuilt. The internal rotation finding now sits in the update, and q1 asks the most likely cause of her knee pain. Key "Femoral neck stress fracture" (KF3). No femoral neck stress fracture is keyed anywhere in the bank. |
| q2 | MRI after normal X-rays repeats msk-07 q2, msk-06 q3, msk-25 q3. "Not recommended" is not a reason. | Already removed by the earlier agent. The normal films and the MRI result are in the q2 update, and no question keys MRI. The "not recommended" sentence is gone. |
| q3 (earlier agent's new item) | Not in the verdict | Removed. It asked which MRI finding would "instead" have allowed nonoperative care. That wording told a mock-mode candidate that the management key was surgery (SCORING-RULINGS B6), and it re-tested the same Robertson table as q2. Replaced with a new q3 (KF8): activity order before fixation, key "Strict bed rest, no standing". Robertson and Wood state that bed rest is mandatory before surgery for a complete fracture, because even non weight bearing lets the pelvic stabilizers displace it. This is the opposite of the "crutches, no weight bearing" keys in msk-17 q4 and msk-36 q4, which appear here as distractors. |
| q2 (management, passed as old q3) | Pass | Key kept as urgent fixation (shortened to "Urgent surgical fixation"). Its weight-bearing distractors were replaced with clinic, repeat MRI and spica options so q2 and q3 do not test the same angle. The explanation was rewritten to give each distractor a true reason. |
| q4 | Pass | Unchanged. |

### msk-40 (Fall on an icy driveway)

| Q | Required fix | What was done |
|---|---|---|
| q1 | "Cervical spine injury" repeats multiple-trauma-04 q2 and an oral case, overstates the Canadian C-spine rule, and is named by q2 and q3 in mock mode | Rebuilt on the reviewer's second option: the decision rests on hyperextension, not the CCR. Key "Hyperextension" from a forehead strike (KF2, the injury pattern suggests the mechanism), sourced to Divi 2019. No catalogue item keys a neck mechanism, and "hyperextension" appears in no catalogue. The CCR source (Stiell 2001) was removed. No later update, prompt or option names hyperextension. |
| q4 | Stale 2017 timing source | Replaced with Fehlings MG, Tetreault LA, Hachem L, et al. Global Spine J 2024 (AO Spine update), as the caller asked. The sentence now states its recommendation: early surgery within 24 hours offered as the preferred option for adults with acute SCI regardless of level. The full text was checked: its evidence includes a study of acute central cord syndrome. Key unchanged. |
| q2, q3 | Pass | Unchanged. |

KF1 moved: the old q1 carried s54's only KF1 item. KF1 is now tested by msk-42 q2 and msk-43 q3.

### msk-41 (now "Pain in the side after reaching back")

| Q | Required fix | What was done |
|---|---|---|
| stem | Humeral shaft pathologic fracture while lifting retells analgesia-sedation-16 | Moved to a pathologic fracture of the right eighth rib after a twist to reach the back seat of a car, as the reviewer suggested. Myeloma teaching and all lab values kept. No catalogue item has a pathologic rib fracture. |
| q1 | Key repeats the update's words | The update now describes "a lucent, slightly expanded area with a thinned and scalloped cortex" with no "lesion" or "through". Key shortened to "Pathologic fracture". |
| q3 | Pass, note on the KF2 tag and the q4 calcium update (B6, flag only) | Not changed. The q4 decision needs the calcium value, so the update still states it. The KF2 tag is kept (calcium belongs to the myeloma workup). Flagged below. |
| q4 | Pass | Rewritten for the rib: the sling and plating options were replaced. Key unchanged (admission with IV saline). |

### msk-42 (now "Twisted knee at a trampoline park")

The verdict failed every question in the skateboard open fracture SAMP. The caller ruled that q1 may not take the 20th D1 slot. The SAMP is rebuilt with no repeat, and no D1 row is used or requested.

The earlier agent's patellar dislocation rebuild was kept as the base and revised:

- Patient changed from a 13-year-old girl at dance class to a 14-year-old boy at a trampoline park, to move away from analgesia-sedation-20, which has a young female athlete with a lateral patellar dislocation. That item tests analgesia only.
- q1 (KF5): reduction manoeuvre, key "Extension with medial patellar push". Kept. The distractor "Pushing the patella further laterally" was replaced with "Valgus stress with the knee flexed". The source sentence reads "extending the knee and slightly lateral pressure on the patella", so the explanation now says pressure on the lateral side guides it medially. This matches the source and avoids a distractor the source text could be read to support.
- q2 (KF1): the earlier version keyed "Osteochondral fracture". The later MRI update then named that key (B6). Rebuilt: q2 asks which later finding would most suggest an osteochondral fracture, key "Rapid tense knee effusion" (hemarthrosis). The distractors are medial patellar and medial condyle tenderness, which Sinikumpu says are present after almost every first dislocation, plus apprehension and pain on flexion. The later fragment update no longer names a key.
- q3: the earlier menu keyed "MRI as soon as possible" after normal X-rays. That is the occult-injury-then-MRI decision the verdict failed in msk-39 q2. Replaced with a new KF8 menu (select 1): support for the knee overnight, key "Elastic patellar brace". Sinikumpu advises against a cast or rigid orthosis. No patellar immobilization item exists in the bank.
- q4 (KF7): repair of a 1.8 cm2 fragment (15 mm by 12 mm). ESSKA repairs 1 cm2 or more. Kept, and the "Brace and physiotherapy only" distractor was changed so that it does not echo the q3 key.
- ESSKA part 1 is no longer cited and was removed from the sources.

KF5 stays covered by msk-42 q1, and KF1 by msk-42 q2.

### msk-43 (now "Dairy farmer kicked during milking")

| Q | Required fix | What was done |
|---|---|---|
| stem | Open second and third metatarsal fractures mirror lacerations-31, and a farm with transfer echoes multiple-trauma-16 and burns-31 | Changed to an open fibular neck fracture from a dairy cow's kick in Manitoba. The bull pinning against a gate in multiple-trauma-46 was avoided. This also fixes a scope problem found on reading BOAST: the open fracture standard covers long bones, hindfoot and midfoot and excludes the forefoot, so the old metatarsal case sat outside the cited standard. A fibula is a long bone. |
| q1 | Pass, with note | Key kept (immediately). The explanation was adapted to the fibula. Tagged KF6, as the original writer tagged it, to keep a second KF6 item. |
| q2 (earlier agent's Gustilo type III item) | Not in the verdict | Removed. msk-34 q2 already asks the provisional Gustilo grade. With msk-43 q1 already echoing msk-34 q3, the reviewer asked not to widen that overlap. Kim and Leopold was removed. The type III point now sits in the penicillin explanation, citing the EAST table. |
| q3 (slab and crutches) | Repeats lacerations-31 q3, msk-17 q4 and msk-36 q4 | Removed, with the Bica source. Replaced with a KF1 question: the injury most likely with a fibular neck fracture, key "Common peroneal nerve injury" (Lezak, StatPearls 2024). KF8 is covered by msk-39 q3, msk-41 q4 and msk-42 q3. |
| q4 (compartment syndrome) | Repeats msk-10 q2, msk-35 q2 and others | Already removed by the earlier agent. The new q4 (KF7) handles a capable patient who asks to go home and return tomorrow. Key "Explain the risk and transfer him now". |
| penicillin (now q2) | Pass | Unchanged apart from the type III sentence. |

## Coverage and format

| SAMP | Question key features |
|---|---|
| msk-39 | 3, 7, 8, 2 |
| msk-40 | 2, 3, 4, 7 |
| msk-41 | 2, 2, 2, 8 |
| msk-42 | 5, 1, 8, 7 |
| msk-43 | 6, 6, 1, 7 |

- Every key feature is tested: KF1 2, KF2 5, KF3 2, KF4 1, KF5 1, KF6 2, KF7 4, KF8 3.
- 20 questions: 19 single and 1 menu (msk-42 q3).
- Single key positions, first to fifth: 4, 4, 4, 3, 4.

## How uniqueness was checked

Before writing, I read the whole catalogue `catalog/msk.md`. That file includes the analgesia-sedation, lacerations, multiple-trauma and abuse items filed under msk, plus the oral cases. I then grepped every catalogue file for each candidate diagnosis and key: patella, osteochondral, hyperextension, central cord, stress fracture, bed rest, brace, pathologic, myeloma, rib, peroneal, tetanus, cultures, Gustilo, cow, horse and cattle. I also read the related farm and trauma items in multiple-trauma.md, burns.md and lacerations.md.

The checks returned three near-matches, judged as follows:

- "Flat bed rest with log roll turns" (spinal precautions): a different decision and population.
- "Common peroneal nerve injury": appears inside msk-15 q1's list for a knee dislocation (see below).
- "Removable ankle brace" (msk-32): a different joint and decision.

No new stem or patient reuses another item's numbers. The bank-wide near-duplicate stem test passes.

## Sources verified this round

- Robertson GA, Wood AM. Sports Med Int Open. 2017. Full text read via Europe PMC (PMC6226070). It covers the presentation, internal rotation sign, female sex risk, the management table and "initial bed rest is mandatory prior to surgical intervention" for a completed fracture. https://pubmed.ncbi.nlm.nih.gov/30539087/
- Divi SN et al. Global Spine J. 2019. Full text read (PMC6512200): hyperextension is the most common mechanism, often without bony injury, in older adults after falls with spondylosis. https://pmc.ncbi.nlm.nih.gov/articles/PMC6512200/
- Fehlings MG, Tetreault LA, Hachem L, et al. Global Spine J. 2024. Abstract and full text read via Europe PMC: early surgery within 24 hours offered as the preferred option regardless of level, and its evidence includes a central cord study. https://pmc.ncbi.nlm.nih.gov/articles/PMC10964895/
- Sinikumpu J, Nicolaou N. J Child Orthop. 2023. Full text read (PMC9900011). It covers reduction before other care by extension with pressure on the patella, medial tenderness invariably present, hemarthrosis prompting a search for chondral injury, MRI the investigation of choice, no cast or rigid orthosis, an elastic patella-specific brace and weight bearing as tolerated. https://pmc.ncbi.nlm.nih.gov/articles/PMC9900011/
- Balcarek P et al. ESSKA 2024 consensus part 2. 2025. Full text read (PMC12684363): repair defects of 1 cm2 or more, refixation preferred. https://pmc.ncbi.nlm.nih.gov/articles/PMC12684363/
- BOA. BOAST open fractures. 2017. Page read. It covers inclusions (long bones, hindfoot, midfoot, forefoot excluded), immediate debridement for agricultural contamination, and the consequences of infection. https://www.boa.ac.uk/resource/boast-4-pdf.html
- Hoff WS et al. EAST. J Trauma. 2011. PDF text read. It covers penicillin for farm injuries, gram-negative cover for type III, farm injuries as a type III special category, and fluoroquinolones. https://pubmed.ncbi.nlm.nih.gov/21610369/
- Lezak B, Massel DH, Varacallo MA. Peroneal nerve injury. StatPearls. 2024. Record and abstract confirmed via Europe PMC (PMID 31751049): the nerve wraps around the fibular neck, with foot drop and dorsal foot numbness. The chapter's list of traumatic causes (direct impact on the fibular neck, proximal fibula fracture) was seen in the search extract. The NCBI Bookshelf page itself was behind a browser check. https://pubmed.ncbi.nlm.nih.gov/31751049/
- Unchanged from earlier rounds and not reopened: Mountjoy 2023 (REDs), Fehlings 2017 MRI guideline, BOAST metastatic bone disease 2022, Rajkumar 2014, Dimopoulos 2016.
- Removed: Stiell 2001, Fehlings 2017 timing, Blønd 2025 (ESSKA part 1), Kim and Leopold 2012, Bica 2016.

## Uncertain, for the reviewer

- msk-43 q3: "Common peroneal nerve injury" is one item in msk-15 q1's list of injuries to exclude after a knee dislocation. Here it is the single key for a different primary injury, a fibular neck fracture. A reviewer may count it as a repeat.
- msk-43 q4 tests handling a capable patient's wish to delay. Its urgency comes from the same BOAST standard as q1, but the decision is different. A reviewer may see it as the same angle.
- msk-41 q4's update states the calcium value that q3 keys (B6). It is left in because q4 needs the number. The q3 KF2 tag is kept.
- msk-42 is still a lateral patellar dislocation in an adolescent athlete, like analgesia-sedation-20, although the sex, age, mechanism and every decision differ.
- BOAST and EAST are UK and US sources. No Canadian open fracture guideline was found.
- KF4 and KF5 each have one item (msk-40 q3, msk-42 q1).

## Tests

`npx tsc --noEmit -p . 2>&1 | grep 'samps/s54'` printed nothing. `SAMP_BATCH=s54 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 128 tests passed.
