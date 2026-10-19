# Q500 fresh verification: s54, Common fractures/MSK

Reviewer: Preceptor (fresh independent AI audit, both lenses: clinical truth, and internal consistency and numbers). This reviewer did not write or edit s54. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the whole current text of `src/samps/s54/msk.ts`, which is a writer revision because the first reviewer edited it in place. Uniqueness was checked against the decision catalogue (`msk.md`, `multiple-trauma.md`, `lacerations.md`, `analgesia-sedation.md`, `burns.md`, `environmental.md`, `cva.md` and the oral cases listed there).

Tests: `SAMP_BATCH=s54 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 passed. The tests cannot see repeated decisions, cues or stale sources.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| msk-39 | FAIL | q1 FAIL, q2 FAIL, q3 PASS, q4 PASS |
| msk-40 | FAIL | q1 FAIL, q2 PASS, q3 PASS, q4 FAIL |
| msk-41 | FAIL | q1 FAIL, q2 PASS, q3 PASS (note), q4 PASS |
| msk-42 | FAIL | q1 FAIL, q2 FAIL, q3 FAIL, q4 FAIL |
| msk-43 | FAIL | q1 PASS (note), q2 PASS, q3 FAIL, q4 FAIL |

0 of 5 SAMPs pass. 9 of 20 questions pass.

## Required fixes

### msk-39 (Runner with an aching knee)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Key "Groin pain on passive hip internal rotation" for knee pain referred from the hip | Repeats a signed key decision. msk-05 q1 keys "Examine the hip, including internal rotation" for knee pain with a normal knee (SCFE), and msk-07 q1 keys "Examine the hip" for knee pain after a fall. The teaching point (knee pain with a normal knee, examine hip rotation) is the same. | Replace q1 with a KF3 decision the bank has not keyed, or move this SAMP's KF3 weight elsewhere. The femoral neck stress fracture diagnosis itself is new, so a q1 that tests something specific to it (for example the hop test or tenderness pattern that separates a stress fracture from a muscle strain) would be unique. | msk.md, msk-05 q1, msk-07 q1 | High |
| q2 | Key "MRI of the right hip" after normal hip X-rays | Repeats msk-07 q2 ("MRI of the hip, or CT if MRI unavailable") for an occult hip fracture after normal films, and the occult-fracture-then-MRI decision in msk-06 q3 and msk-25 q3. One SAMP may not carry two repeats, and no D1 row covers this. | Rebuild q2 on a decision not in the bank (for example what she must do until the MRI is done, or the bone scan versus MRI trade-off only if the key differs from MRI). Also replace "CT is not the recommended second-line test" with a true reason, because "not recommended" is not a reason (SAMP_SPEC section 8). | msk.md, msk-07 q2. Robertson and Wood 2017 (MRI second line) | High |
| q3 | Pass | Robertson's own text says tension fractures form a vertical, unstable fracture line and lists complete tension fractures for fixation, so the key and explanation hold. | None | Robertson and Wood 2017, full text checked | |
| q4 | Pass | BMI 49 / 1.68^2 = 17.4 kg/m2, rechecked. Low energy availability is new to the bank. The prompt wording copies msk-38 q4 but the key differs. | None | IOC REDs 2023 | |

### msk-40 (Fall on an icy driveway), reviewer-authored, first independent review

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Key "Cervical spine injury". Explanation: "Blunt trauma to the head in an alert, stable patient brings him within the Canadian C-spine rule, and age 65 or older is a high-risk factor that mandates imaging" | (1) Repeats a keyed teaching point: multiple-trauma-04 q2 keys CT cervical spine after an older adult's fall, and the oral case fall-anticoagulated-hip-fracture model answer says "CT cervical spine. Age 65 or over is a high risk factor in the Canadian C Spine Rule". (2) The explanation overstates the rule. The CCR derivation enrolled patients without neck pain only if they also had a visible injury above the clavicles, were not ambulatory and had a dangerous mechanism. He has no neck pain and walked in, so the rule as derived does not cover him. (3) Mock-mode cue (SCORING-RULINGS B6): q2 lists "Cervical spinal cord injury" and the q3 update puts him in a collar with a cervical spine CT, both naming the q1 key. | Rebuild q1 on a KF1 decision the bank lacks and make the explanation true to the CCR's population, or reword so the decision rests on hyperextension in an older patient with a stiff spine rather than on the CCR. If q1 is removed, KF1 must still be tested in s54 (it is the batch's only KF1 item). | Stiell 2001 (abstract and inclusion criteria). multiple-trauma.md, multiple-trauma-04 q2. msk.md oral case fall-anticoagulated-hip-fracture | Medium |
| q2 | Pass | Central cord syndrome is new to the bank (searched all catalogues). Distractor reasons are true. KF3 (cervical lesion presenting as upper limb symptoms) is an honest tag. | None | Divi 2019 | |
| q3 | Pass | MRI after a CT without fracture in a patient with a cord deficit is new to the bank. cva-35 q1 keys cervical MRI for a stroke mimic, a different decision. | None | Fehlings 2017 MRI guideline | |
| q4 | Explanation and source: "The 2017 guideline by Fehlings and colleagues suggests that early surgery, within 24 hours of injury, be considered for adults with traumatic central cord syndrome" | Stale source. The 2024 AO Spine and Praxis update (Fehlings MG, Tetreault LA, Hachem L, et al. An update of a clinical practice guideline for the management of patients with acute spinal cord injury: recommendations on the role and timing of decompressive surgery. Global Spine J. 2024) now recommends that early surgery within 24 hours be offered as the preferred option for adults with acute spinal cord injury regardless of level. The bank's diving oral case already cites the 2024 update. | Replace the 2017 timing source with the 2024 update (https://pmc.ncbi.nlm.nih.gov/articles/PMC10964895/) and reword the sentence to its recommendation. The key "Urgent spine surgery consultation" stays. | Fehlings 2024, abstract read via Europe PMC | High |

### msk-41 (Arm pain while lifting a kettle)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | "felt a crack in his right upper arm while lifting a full kettle", humeral shaft pathologic fracture | Retells the scenario of analgesia-sedation-16 (a man who "heard a crack while lifting a grocery bag", pathologic humeral shaft fracture). The writer report said no pathologic fracture item existed, which is not correct. The decisions differ, but the diagnosis-plus-setting combination is reused (Q500_BRIEF rule 3). | Move the fracture to a site and mechanism the bank does not use for a pathologic fracture (for example a vertebral or rib fracture from a minor strain), keeping the myeloma teaching. | msk.md, analgesia-sedation-16 | Medium |
| q1 | Update: "a transverse fracture of the humeral shaft through a well defined lytic lesion". Key: "Pathologic fracture through a lesion" | The key repeats the update's words, so the question answers itself (Lens B 6). | Describe the X-ray without the word "lesion" or "through" (for example a lucent area with endosteal scalloping and thinned cortex), and shorten the key to "Pathologic fracture". | SAMP_REVIEW_BRIEF Lens B 6 | High |
| q2 | Pass | IMWG CRAB checked: Hb 96 g/L (below 100), creatinine 188 umol/L (above 177), lytic lesions. Protein gap 98 minus 31 = 67 g/L, rechecked. | None | Rajkumar 2014 | |
| q3 | Pass, with note | Key holds. Note: the KF2 tag (causative etiology) is loose for a calcium test, and q4's update ("His corrected calcium is 3.18 mmol/L") names the q3 key in mock mode (B6). Flag only. | Consider tagging honestly or rewording the q4 update after the fix above. | SCORING-RULINGS B6 | Low |
| q4 | Pass | Admission with IV saline for calcium 3.18 mmol/L with kidney injury is correct and new to the bank. | None | Dimopoulos 2016 | |

### msk-42 (Boy who fell from a skateboard)

Every question repeats a decision already keyed in the bank. The pediatric setting is new, but the decisions are the same. The SAMP needs a rebuild, not a patch.

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | Key "Open fracture of both forearm bones", with the wound hidden under a bandage | Repeats msk-11 q1 ("Remove the dressing and inspect skin", the dressing-hides-the-wound twist) and msk-11 q4 ("A small puncture wound near a fracture"). msk-08 q3 and msk-34 also key open fracture recognition. This is the literal KF6 wording, so it could ride on D1 only if the product owner adds it as the 20th and last row (DECISIONS.md D1). A reviewer cannot grant that. | Either rebuild q1 on a hidden-open-fracture sign the bank has not keyed, or ask the product owner for the D1 row and name it. | msk.md, msk-11 q1 and q4. DECISIONS.md D1 | High |
| q2 | Menu (select 1), key "Cefazolin IV" | Repeats msk-11 q2 (cefazolin for an open fracture) and msk-08 q4. It also repeats the angle of msk-43 q2 within this batch (antibiotic choice for an open fracture), and its explanation teaches the msk-43 q2 key ("penicillin considered for farm injuries"). Options capitalize generic drug names, unlike msk-43 (SAMP_SPEC section 10). | Replace with a decision the bank lacks. Do not test open fracture antibiotic choice twice in s54. | msk.md, msk-11 q2. Garcia-Lopez 2021 | High |
| q3 | Key "Motor and sensory testing of each nerve" before splinting | Repeats msk-12 q1, msk-03 q3, msk-08 q2 and msk-10 q1 (document each nerve before and after manipulation). This is s54's only KF5 item, so the replacement must still test KF5. | Rebuild on a KF5 decision the bank has not keyed (for example "reduce before imaging when indicated", the other half of KF5). | msk.md | High |
| q4 | Key "Urgent orthopedic consultation now" | Repeats msk-34 q4 ("Urgent orthopedic surgery consult" for an open fracture) and the consult items in msk-08 q4 and msk-11 q3. | Replace with a decision specific to pediatric open fractures that the bank lacks. | msk.md, msk-34 q4 | High |

### msk-43 (Farmer stepped on in the barn)

| Q | Current text | Flaw | Required change | Source | Confidence |
|---|---|---|---|---|---|
| stem | Open fractures of the second and third metatarsals with soil contamination | Close to lacerations-31 (open second and third metatarsal fractures with grass and soil in the wound). Rural Saskatchewan farm injury with transfer is also the setting of multiple-trauma-16 and burns-31. | Change the fracture pattern so the diagnosis does not mirror lacerations-31. | lacerations.md, lacerations-31. multiple-trauma.md, multiple-trauma-16 | Medium |
| q1 | Pass, with note | Key "Immediately after transfer" is correct under BOAST (agricultural contamination). msk-34 q3 asks the same BOAST timing question with key "24 hours". The teaching (agricultural contamination means immediate) is new, so this passes, but the reviser should not widen the overlap. | None | BOAST open fractures 2017 | Low |
| q2 | Pass | Penicillin for clostridial farm contamination is not keyed elsewhere. EAST statements checked. The type III reclassification for farmyard contamination is correct. | None (but msk-42 q2 must stop teaching this key, see above) | Hoff 2011 | |
| q3 | Key "Padded posterior slab and crutches" | Repeats lacerations-31 q3 ("Moist sterile dressing and a splint" for open metatarsal fractures), msk-17 q4 ("Below knee posterior splint", "Crutches with no weight bearing") and msk-36 q4. | Replace with a KF8 decision the bank lacks. KF8 must stay covered in s54 (msk-41 q4 is the other KF8 item). | msk.md, lacerations.md | Medium |
| q4 | Key "Urgent surgeon call for decompression" for compartment syndrome | Repeats msk-10 q2 ("Urgent orthopedic consultation for fasciotomy"), msk-35 q2 ("Orthopedic consult for fasciotomy"), burns and environmental electrical items, and the trench crush oral case. Foot location does not change the decision. | Replace with a decision the bank lacks. | msk.md, burns.md, environmental.md, multiple-trauma.md | High |

## Key feature coverage after the required fixes

Every key feature must still be tested once in s54. The failing items carry the batch's only KF1 (msk-40 q1) and only KF5 (msk-42 q3). The reviser must keep KF1 and KF5 covered. KF6 stays covered by msk-43 q1 and q2. KF8 stays covered by msk-41 q4.

## Writer and first-reviewer items adjudicated

- msk-40 (new): reviewed in full above. q2 and q3 pass. q1 and q4 fail.
- msk-42 q2 (new): fails as a repeat of msk-11 q2 and of msk-43 q2's angle, as the first reviewer feared.
- msk-40 q4 timing debate: settled by the 2024 update, which strengthens the key. The source must change.
- msk-41 three KF2 items: acceptable once tags are honest.
- No Canadian open fracture guideline found. BOAST, EAST and AFP stand.

## Sources verified

- Robertson GA, Wood AM. 2017. Full text via Europe PMC (PMC6226070): tension fractures vertical and unstable, complete tension fractures to surgery, MRI second line, internal rotation pain. https://pubmed.ncbi.nlm.nih.gov/30539087/
- Mountjoy M et al. IOC REDs 2023. Record confirmed. https://pubmed.ncbi.nlm.nih.gov/37752011/
- Stiell IG et al. JAMA 2001. Abstract read (age 65 or older a high-risk factor). https://pubmed.ncbi.nlm.nih.gov/11597285/
- Divi SN et al. Global Spine J 2019. Record confirmed. https://pmc.ncbi.nlm.nih.gov/articles/PMC6512200/
- Fehlings MG et al. 2017 MRI guideline. Record confirmed. https://pmc.ncbi.nlm.nih.gov/articles/PMC5684845/
- Fehlings MG et al. 2017 timing guideline. Record confirmed, superseded for timing by Fehlings 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC5684850/
- Fehlings MG, Tetreault LA, Hachem L, et al. Global Spine J 2024 timing update. Abstract read via Europe PMC. https://pmc.ncbi.nlm.nih.gov/articles/PMC10964895/
- Rajkumar SV et al. 2014, Dimopoulos MA et al. 2016, Hoff WS et al. 2011, Dodd A, Le I 2013. Records confirmed via Europe PMC.
- BOAST metastatic bone disease 2022, BOAST open fractures 2017, Bica 2016, Garcia-Lopez 2021: not reopened. The first reviewer read them, and no key in a passing question depends on a claim this review doubts.

## House style

No em or en dashes, smart quotes, semicolons, US spellings or absolute words were found by script. Stems, updates and prompts are within the word limits.

## Summary

0 of 5 SAMPs pass. 11 questions fail: 9 for repeating a keyed decision (msk-39 q1 and q2, msk-40 q1, msk-42 q1 to q4, msk-43 q3 and q4), 1 for a stale source (msk-40 q4), 1 for a self-answering cue (msk-41 q1), plus a stem-level scenario repeat in msk-41 and msk-43. The most serious problem is msk-42, whose four questions all retell msk-11, msk-12 and msk-34. Needs physician or product owner decision: whether msk-42 q1 should become the 20th D1 row.
