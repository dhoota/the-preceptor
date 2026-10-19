# Q500 verify, round 4: s57, Ischemic heart disease

Fresh independent review by Preceptor of the round 4 revision of `src/samps/s57/ischemic-heart-disease.ts`. This reviewer had not written, edited or reviewed s57 before. Both lenses (clinical truth, and internal consistency and numbers). No SAMP, source or shared file was edited (REVIEW-RULES rule 1). All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Read: SAMP_SPEC, SAMP_REVIEW_BRIEF, REVIEW-RULES (rule 4 in particular), DECISIONS, SCORING-RULINGS, Q500_BRIEF rule 3, the previous verdict `docs/reviews/q500-verify3-s57.md`, "Round 4" in `docs/reviews/q500-writer-s57-r2.md`, and `git diff 5d1f124` on the batch file. Uniqueness was checked against the catalogues for ischemic-heart-disease, chest-pain and environmental, and by grep of `src/samps` and `src/cases` (CK-MB, CKMB, creatine kinase, myoglobin, marker, biomarker).

Tests: `SAMP_BATCH=s57 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests). `npx tsc --noEmit -p .` reports nothing for `samps/s57`.

## Verdicts

| SAMP | Stem | q1 | q2 | q3 | q4 | SAMP verdict |
|---|---|---|---|---|---|---|
| ischemic-heart-disease-48 | PASS | PASS | PASS | PASS | PASS | PASS (byte-identical to the version passed in q500-verify3-s57.md) |
| ischemic-heart-disease-49 | PASS | PASS | PASS | PASS | PASS | PASS (byte-identical to the version passed in q500-verify3-s57.md) |
| ischemic-heart-disease-50 | PASS | PASS | PASS | PASS | PASS | PASS |
| ischemic-heart-disease-51 | PASS | PASS | PASS | PASS | PASS | PASS |
| ischemic-heart-disease-52 | PASS | PASS | PASS | PASS | PASS | PASS (byte-identical to the version passed in q500-verify3-s57.md) |

Totals: 5 of 5 SAMPs pass. 20 of 20 questions pass. No fix is required.

The whole s57 batch has now passed fresh review: 48, 49 and 52 in `docs/reviews/q500-verify3-s57.md` (unchanged since), and 50 and 51 here.

## 1. The scripted-edit mishap

- `git diff 5d1f124` on the batch file has four hunks only: removal of `S.tnk` from the source list, 50 q4, the 51 q1 explanation and 51 q2, and the 51 `sources` line. Nothing else changed. The file has 416 lines before and after, and 20 questions.
- I extracted the 48, 49 and 52 blocks from 5d1f124 (the commit holding the round 3 verdict) and from the working tree and hashed them. The hashes match for all three, so they are byte-identical to the passed version.
- The new 50 q4 text appears once. "A colleague has added", "two added markers", "They have no added diagnostic value" and the explanation's opening each occur only in 50 q4 across `src`. "Summon EMS by calling 911" and the old 51 q2 update are gone. No orphan `S.tnk` or `tnkase` reference remains. The other source files changed since 5d1f124 (s63, s68, a batch14 case) belong to other writers and hold no s57 text.

## 2. SAMPs 50 and 51

### ischemic-heart-disease-50 q4 (PASS)

- Item: update "A colleague has added CK-MB and myoglobin to his blood work." Prompt "Which of the following best describes what these two added markers contribute to his assessment for MI?" Key "They have no added diagnostic value" (fourth position), KF 1, source aha-chest-pain-2021.
- Source checked myself in the extracted text of the Gulati 2021 executive summary (JACC 78:2218, DOI 10.1016/j.jacc.2021.07.052), page 2229, biomarker recommendations: "3: No benefit B-NR. 4. With availability of cTn, creatine kinase myocardial (CK-MB) isoenzyme and myoglobin are not useful for diagnosis of acute myocardial injury". Its supporting references include Eggers 2004 ("limited value of adding myoglobin to troponin I for exclusion of myocardial infarction") and Kavsak 2007 on the early markers. The key holds.
- Distractor reasons are true: neither marker beats a high sensitivity troponin for early detection or rule-out, unstable angina has no necrosis to detect, and both are necrosis markers, not ischemia markers. The skeletal muscle remark on myoglobin is standard teaching and supports, not replaces, the cited recommendation.
- Uniqueness. The IHD and chest-pain catalogues key no biomarker choice of this kind (their troponin items concern timing, repeat testing and interpretation). The writer's statement that "CK-MB appears nowhere in `src/samps`" is not correct: signed environmental-35 q3 (s36, `reviewed: true`) keys "Troponin I or T" over "CK-MB fraction" and "Myoglobin level" after electrical injury, and environmental-36 q4 has "CK-MB every 8 hours" as a distractor. I judge 50 q4 distinct. The environmental item tests marker specificity when skeletal muscle is injured by current. 50 q4 tests that the old markers add nothing to a troponin workup for possible ACS, a laboratory stewardship point from the chest pain guideline. Different topic, scenario, reason and decision. Recorded as a physician-level item below.
- KF tag. KF 1 reads "In possible ACS, start testing immediately and continue serial ECGs and biomarkers until the question is resolved." He has new exertional chest tightness, a possible ACS, and the item asks which biomarkers help resolve it. The tag is honest.
- Ruling compliance. Not discharge or return advice. Names no lipid or statin therapy and no intermediate risk judgement. Options alphabetical, all start "They" (B4). The key is not the longest (35 characters against 36 for "They detect MI earlier than troponin"). It is a null statement but not hedged and not the plain negation of any distractor (B5). No absolute words.
- Mock mode (B6). Nothing in the q4 update, prompt or options names or implies the q1 key ("They do not exclude coronary disease"), the q2 key (statin) or the q3 key (CT coronary angiography). Placing an added blood test after the outpatient test question reveals no disposition and is acceptable.

### ischemic-heart-disease-50 q1 to q3 and stem (PASS)

Unchanged since round 3 and still correct.

### ischemic-heart-disease-51 q2 (PASS)

- Item: update "Her full weight-based tenecteplase dose would be 35 mg." Prompt "Which of the following tenecteplase doses is most appropriate for her?" Options low to high 8.75, 17.5 (key, second position), 26.25, 35 and 52.5 mg, all "tenecteplase N mg IV". KF 7, source ccs-stemi-2019.
- This is the change required in round 3, applied as specified. The age decision is back with the candidate, and the full dose is a fact in the update, so no weight band source is needed.
- Source checked myself in the CCS/CAIC 2019 full text: "Practical tip. A half dose of fibrinolytic therapy may be considered for patients undergoing a pharmacoinvasive strategy who are older than 75 years of age", and on STREAM: "an increase in intracranial hemorrhage among elderly patients randomized to pharmacoinvasive strategy ... was negated after a protocol change implementing a half dose of tenecteplase among patients older than 75 years of age". The explanation follows both, says "older than 75" and gives no STREAM-2 age threshold. 78 is older than 75 and half of 35 mg is 17.5 mg. She is on a pharmacoinvasive path (3 hour transfer to PCI after fibrinolysis).
- Quarter and three quarter dose distractors (the writer's flag): acceptable. Round 3 asked that every rejection reason trace to the update or to CCS/CAIC 2019 alone, and these do: the guideline's adjustment is a half dose, so 8.75 mg and 26.25 mg are not it, 35 mg ignores her age, and 52.5 mg exceeds the full dose in the update. They are plausible errors for a candidate who knows a reduction is due but not its size, which is part of the KF 7 risk and benefit judgement. They carry no cue: the key is not the middle value, not the longest or the shortest, and the options are in numeric order. Weight band distractors would have needed the monograph again, which round 3 ruled out.
- KF 7 is honest again: the candidate must weigh age-related bleeding risk and adjust the fibrinolytic dose before giving it.
- Uniqueness: as round 2 found (verify2 physician item 5), the half dose decision is new in the bank. ems-10 q1 has it only as distractor teaching. IHD-01 q3 keys a weight band, which this item no longer tests.
- `sources` now lists CCS/CAIC 2019 and STREAM-2, both cited (q1, q2, q4 and q3). The monograph is removed from the list and from the `S` table.
- Mock mode: the update does not mention age, so it no longer hints against the "Age of 78 years" option in q1.

### ischemic-heart-disease-51 q1, unrequested explanation change (rule 4): sound on its merits

The writer removed "and the guideline suggests a half dose may be considered for patients older than 75" from the q1 explanation. The round 3 verdict allowed the sentence to stay, but the writer's reason is good: in one-question-at-a-time mode the q1 explanation shows before q2 is answered, and the sentence would then give away the q2 key. Removal loses no teaching, because q2's explanation now carries it with the same source. The remaining sentence ("Older age raises the risk of intracranial hemorrhage ... her age weighs against it") is needed to reject the "Age of 78 years" option and does not name a dose. Key, options and source are unchanged. PASS.

### ischemic-heart-disease-51 stem, q3 and q4 (PASS)

Unchanged since round 3 and still correct (0.75 x 62 = 46.5 mg, so "about 46 mg" holds, and (6 minus 4) / 6 = 33%).

## 3. Batch checks

- 5 SAMPs, 20 questions, 19 single and 1 menu.
- Single key positions, first to fifth: 4, 4, 4, 4, 3. Highest share 4 of 19 (21%). No position above 25%.
- Questions per key feature: KF1 2 (48 q2, 50 q4), KF2 2, KF3 2, KF4 4, KF5 3, KF6 1 (51 q1), KF7 2 (51 q2, q3), KF8 4. Every key feature is covered.
- House style in the changed text: no em or en dashes, no semicolons, no mnemonics, no personal names outside citations, Canadian spelling. Options keep the drug style "tenecteplase N mg IV".
- No D1 entry is used. No prior ruling is reversed.

## Physician-level items (not grounds for failure)

1. 50 q4 and signed environmental-35 q3 both rest on troponin superseding CK-MB and myoglobin. This review judged them distinct (marker specificity after electrical injury against no added value in a troponin workup for possible ACS). A physician may prefer one of them to carry the point.
2. 51 q2 keys a dose under a "may be considered" practical tip. The key holds because the half dose is the only age adjustment either cited source describes, and the full dose distractor is rejected on that basis.
3. Round 3 physician items 1 and 2 still apply (50 stem close in scenario to signed IHD-15, and the round 2 items on 52, the age 75 bank inconsistency and 48 resting on a US guideline).
