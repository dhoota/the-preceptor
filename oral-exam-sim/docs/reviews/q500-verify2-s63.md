# Q500 round 2 verify: s63, Arrhythmia

Fresh independent review by Preceptor of the revised batch `src/samps/s63/arrhythmia.ts` (arrhythmia-48 to arrhythmia-52). The reviewer did not write, edit or review this batch before, and made no change to any SAMP, source or shared file (REVIEW-RULES rule 1). Every fix below goes back to a writer. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES, DECISIONS, SCORING-RULINGS, the round 1 verdict `docs/reviews/q500-qa-s63.md`, the writer report `docs/reviews/q500-writer-s63-r2.md`, and the change to the file (git diff ec7b9cc to 0441c06). Catalogues checked: arrhythmia, ischemic heart disease, chest pain, EMS, shock and LOC, plus greps of all of `src/samps` and `src/cases` for every new key decision.

Checks run: `SAMP_BATCH=s63 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests). No em or en dashes and no semicolons in any string.

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| arrhythmia-48 | PASS | PASS | PASS | PASS | PASS |
| arrhythmia-49 | FAIL | FAIL | PASS | FAIL | FAIL |
| arrhythmia-50 | FAIL | FAIL | PASS | PASS | PASS |
| arrhythmia-51 | PASS | PASS | PASS | PASS | PASS |
| arrhythmia-52 | PASS | PASS | PASS (D1 record needed) | PASS | PASS |

## Round 1 required fixes: were they applied?

| SAMP | Question | Round 1 fix | Status |
|---|---|---|---|
| arrhythmia-49 | whole SAMP | Rebuild q2 to q4, keep a KF8 question | Applied. q2 to q4 are new and none of them repeats the old shivering, repeat angiography or fever control keys. q1 stays the only KF8 question, but see the new q1 overlap below. |
| arrhythmia-49 | q1 | Remove the "not shockable" update and the PEA distractor | Applied. The writer also changed the key, which was not asked for (judged below under rule 4). |
| arrhythmia-49 | q1 | Cite the 2022 ERC-ESICM guideline | Applied (`erc-esicm-temp-2022`, DOI resolves to Resuscitation pii S0300957222000107). |
| arrhythmia-49 | q2, q3 | Replace the keys, fix the KF tag | Applied. New keys are new to the bank. |
| arrhythmia-49 | q4 | Replace the fever key, align 35°C and 36°C | Applied, but the new update now names the q3 key (see q4 below). |
| arrhythmia-50 | q1 | Replace the posture key | Applied in form only. The new key repeats arrhythmia-14 q2 by the same standard that failed the posture key (see below). |
| arrhythmia-50 | q4 | Mock-mode cue | Applied correctly ("digoxin or methadone"). |
| arrhythmia-52 | q4 | Replace the atropine key with a new KF4 decision | Applied. The new decision is new to the bank and Frampton is removed cleanly. |

## Required fixes

| SAMP | Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|---|
| arrhythmia-49 | q1 | key decision | Key "No rewarming, prevent fever" for a comatose woman at 35.1°C core after return of circulation | This decision is already taught in the oral case drowning-cottage-lake (batch03, question q-other). That patient was also resuscitated from arrest and also had a core temperature of 35.1°C, and the model answer reads "Do not rush to rewarm. Prevent fever for at least 72 hours." Rubric dr-m3 scores the fever prevention part. The fever part also echoes the arrhythmia-13 q1 key ("No induced cooling, but prevent fever") and arrhythmia-12 q2. Round 1 missed the drowning case. Rebuild q1 on a KF8 decision that the bank does not hold, keeping KF8 covered, and grep `src/cases` as well as `src/samps` first. If the coordinator rules that a model-answer line in an oral case on another topic does not count as a keyed decision, q1 may stand as it is, and that ruling must be recorded. | Bank (drowning-cottage-lake, arrhythmia-13 q1, arrhythmia-12 q2) | Medium |
| arrhythmia-49 | q3 | stem or prompt, explanation | Prompt "Which of the following is the most appropriate treatment to add to CPR and epinephrine now?" The explanation cites only ERC. | The key is the only defensible option of the five. Defibrillation, amiodarone, atropine and calcium are wrong under every guideline. But the guidelines disagree: AHA, whose ACLS Heart and Stroke teaches in Canada, recommends against routine pacing in cardiac arrest, while ERC 2021 says P waves in apparent asystole may respond to pacing. Under SAMP_SPEC section 9 and Lens A item 11, the stem must say which guidance applies. Name ERC in the update or the prompt, for example "Using European Resuscitation Council guidance, which of the following ...". Add one sentence to the explanation saying that AHA guidance does not recommend routine pacing in arrest, and that the ERC exception is P-wave asystole. Also check the ERC 2025 adult ALS guideline (Resuscitation 2025, PMID 41117572), which replaces 2021. Cite it if it keeps the P-wave statement, or record that its text could not be opened. | ERC 2021 ALS (official German translation read, see sources), AHA ALS | Medium |
| arrhythmia-49 | q4 | update (ruling B6) and consistency with q1 | "Pacing restores a pulse, sinus rhythm returns and her LAD is stented. On a device holding 35°C, she has chest physiotherapy." | "Pacing restores a pulse" names the q3 key, which mock mode shows at the same time (B6). "On a device holding 35°C" describes deliberate device cooling at 35°C. That cues q1 against "Active rewarming to 37°C" and "Cool to 31°C", and it does not match the q1 key, which the writer chose because a device is a second step. Rewrite the update to name neither, for example "After her LAD is stented she is in the ICU. During chest physiotherapy, lead II shows ...". | SCORING-RULINGS B6 | High |
| arrhythmia-49 | q4 | option and explanation | "Artefact from chest physiotherapy" (also "artefact" three times in the explanation and in the `jafary` source id) | Canadian spelling and bank usage is "artifact" (s42, s09, batch02). Change the option and the explanation text. The source id may stay. | SAMP_SPEC section 14 | Low |
| arrhythmia-50 | q1 | key decision and lead-in | Prompt "Which of the following details of last night's event points most strongly toward an arrhythmia?" Key "Brother's death in his sleep" | (1) Repeat. arrhythmia-14 q2 (s03) asks the same question ("What features of his syncope suggest an arrhythmic cause?") and keys "Family history of sudden death at a young age", with a nearly identical stem detail ("His brother died in his sleep at age 38"). seizures-07 q1 and the oral case athlete-exertional-syncope also key it. Round 1 failed the posture key because it was a list item in arrhythmia-01 q1 and arrhythmia-14 q2, and the same standard applies here. (2) Lead-in mismatch (ruling B8). A brother's death is not a "detail of last night's event", and neither is the age distractor. Rebuild q1 on a KF1 decision the bank does not hold. Round 1 suggested how the family history changes disposition, but arrhythmia-01 q3 already keys monitored admission, so check the catalogue first. Make the lead-in fit every option. Prefer a key that is not the longest option. | Bank catalogue, SCORING-RULINGS B8 | High |

## Writer flags and points the coordinator asked about

- **arrhythmia-49 q3, transcutaneous pacing for P-wave asystole.** The key is the single best answer among the options offered, because no distractor survives under any guideline. It is a true guideline conflict, though, not a matter of wording. The official ERC translation confirms "check the ECG carefully for P waves, because transcutaneous pacing may then be indicated". AHA advises against routine pacing in arrest, and that is the ACLS standard taught in Canada. Required fix above: name the governing guidance and state the AHA position.
- **arrhythmia-52 q4, instability wording checked only through the German translation.** The reviewer read the same official German translation (Notfall Rettungsmed 2021, Europe PMC full text). It lists shock (systolic BP under 90 mmHg), syncope, heart failure shown as pulmonary edema or raised JVP, and myocardial ischemia. That matches the explanation. The English original could not be opened (403). The key also holds under AHA, whose tachycardia algorithm lists acute heart failure among the signs of instability. So the key holds under both and the question passes. Recommended, not required: add the AHA adult ALS guideline as a second, Canadian-relevant source. The decision (which finding makes a normotensive VT unstable) is new to the bank. Existing items key the treatment (synchronized cardioversion in arrhythmia-10, arrhythmia-45 and pulmonary-edema-05), not how instability is identified.
- **arrhythmia-50 q1, family history as the key.** It fails on overlap and on the lead-in (see the table). Clinically, ESC 2018 lists family history of young sudden death as a minor high-risk feature, which counts here because her ECG is abnormal. The supine faint, a major feature, is not offered as an option, so the key was defensible but is not new.
- **arrhythmia-49 q1, unrequested key change (rule 4).** Judged on its merits. The new key "No rewarming, prevent fever" is clinically sound and fits ERC-ESICM 2022 better than "Feedback device, no rewarming": exposure and antipyretics come first and a device is the fallback, and the key also holds under AHA 32 to 37.5°C control with fever prevention. The change itself is acceptable. But it writes fever prevention, an element round 1 removed from q4 as a repeat, into the key text, and it now matches the drowning-cottage-lake model answer word for word. q1 fails on that overlap (see the table), not on clinical grounds.
- **Key is the longest option in 5 of 17 singles (29%).** This is within the spec limit of 35% (SAMP_SPEC section 7) and the tests pass. The five are 48 q3 (a diagnosis name), 48 q4 (a two-part treatment), 50 q1, 52 q1 and 52 q4. In 48 q3, 48 q4 and 52 q4 the length is essential content. 52 q1 "Reperfusion of the artery" could be shortened, but its ratio of 1.27 is within the limit. Ruling B1 asks for a rate "well under" 35%, so the writer should make the rebuilt 50 q1 key not the longest. That brings the batch to 4 of 17 (24%). Not a ground for failure.
- Key positions across the 17 singles: first 3, second 3, third 4, fourth 3, fifth 4. The most-used position holds 24%, every position is used, and the spec is met. Recheck after the rebuilds.

## Passes with notes (no fix required)

- arrhythmia-48 (unchanged): rechecked. All four keys hold. Bidirectional VT, CPVT, opioid and general anesthesia for the storm, as adjudicated in round 1.
- arrhythmia-49 q2: ventricular standstill (P-wave asystole) is new to the bank, and a grep of all SAMPs and cases finds no other item. The explanation sets complete heart block apart by its escape rhythm. Some texts call standstill complete block with no escape, so the physician may want "Complete heart block" read as a weak competitor (see the physician items).
- arrhythmia-49 q4: clinically sound apart from the fixes above. The arterial line and the narrow QRS in V1 settle it. Jafary 2007 (full text read) supports QRS complexes "marching through" artifact, and movement, interference and loose leads as causes. Monitor artifact that mimics VF is new to the bank. The only other artifact item is pacer artifact versus capture in complete-heart-block-pacing.
- arrhythmia-50 q2 to q4: QTc recomputed. RR is 60/62 = 0.968 s, its square root is 0.984, and 300/0.984 = 305 ms. The menu key [0, 1] (digoxin, hypercalcemia) is correct by index. The q4 update cue is fixed.
- arrhythmia-51 (unchanged): rechecked. 88/minute with 2:1 conduction gives 44/minute, and 3:1 gives about 29 to 30/minute. Menu key [4, 6, 7] correct. Note that two singles in this batch key "Transcutaneous pacing": 49 q3 (arrest with P waves) and 51 q3 (infranodal block with a pulse). The indications and teaching differ, so this is acceptable. Round 1's recommendation to add the ACC/AHA/HRS 2018 bradycardia guideline still stands.
- arrhythmia-52 q1 and q3: unchanged and pass (ESC 2023 text verified in round 1).
- arrhythmia-52 q2 (menu): round 1 named this as a D1-type repeat of arrhythmia-11 q2 and arrhythmia-12 q5 (observe reperfusion rhythms), and it is the literal wording of key feature 7. It is not yet in the DECISIONS.md D1 table, which holds 19 rows and is frozen at 20. **Coordinator action:** record it as D1 row 20, or the question fails and must be rebuilt.

## Physician-level items (not grounds for failure)

- arrhythmia-49 q1: ERC-ESICM 2022 says "suggest against" (a good practice statement) for active rewarming of mild hypothermia, so "recommends not" overstates its strength. Its cold fluid recommendation is about prehospital infusion right after return of circulation, while the distractor is an ED bolus.
- arrhythmia-49 q2: whether "Complete heart block" competes with "Ventricular standstill" as a description of P waves without QRS complexes and without a pulse.
- arrhythmia-49 q3: whether a question built on an ERC-only recommendation suits a Canadian exam whose ACLS standard is AHA.
- arrhythmia-52 q4: the ERC instability list was read only in the official German translation. AHA agrees on acute heart failure.

## Sources verified

- Soar J and colleagues. ERC Guidelines 2021: adult advanced life support. Resuscitation 2021. DOI https://doi.org/10.1016/j.resuscitation.2021.02.010 resolves to pii S0300957221000630. The English full text was blocked (403). The official German translation was read from Europe PMC full text (PMC8185697). It says to check every diagnosis of asystole for P waves because transcutaneous pacing may be indicated, and it gives the life-threatening features as shock, syncope, heart failure (pulmonary edema or raised JVP) and myocardial ischemia.
- ERC Guidelines 2025: adult advanced life support. Resuscitation 2025, PMID 41117572. It exists and is not open access. The public-comment PDF on cprguidelines.eu did not download. Its wording on P waves was not seen.
- AHA adult ALS (2020 and 2025 Part 9, Circulation 2025, DOI 10.1161/CIR.0000000000001376). Full text not reached. AHA advises against routine pacing in arrest (from the reviewer's knowledge of the 2020 statement, not re-read here).
- Nolan JP and colleagues. ERC-ESICM temperature control 2022. DOI resolves to pii S0300957222000107. Recommendations are as in round 1 and in the writer's report.
- Jafary FH. J Med Case Rep 2007. Full text read through Europe PMC (PMC2000884). Supports the 49 q4 explanation.
- Brignole M and colleagues. ESC syncope 2018. DOI resolves to Eur Heart J 39(21):1883. The ERC 2021 table (German translation) reproduces family history of young sudden death and sitting syncope among its features.
- Unchanged and accepted from round 1: Abbas 2022, Bellamy 2019, Patel 2010, Merck short QT, Dayal 2018, Armour 2022, ESC ACS 2023.

## Key feature coverage

Every key feature is tested now: KF1 48 q1, 50 q1. KF2 50 q2, 51 q2. KF3 48 q2, 49 q2, 49 q4, 51 q1. KF4 49 q3, 51 q3, 52 q4. KF5 48 q3, 50 q3, 51 q4. KF6 48 q4, 50 q4. KF7 52 q1 to q3. KF8 49 q1 only. The rebuilds must keep KF1 (50 q1 is one of two) and KF8 (49 q1 is the only one).

## Summary

Five SAMPs, 20 questions. 3 SAMPs pass (48, 51, 52) and 2 fail (49, 50). Questions: 16 pass, 4 fail (49 q1, 49 q3, 49 q4, 50 q1). Six of the eight round 1 fixes were fully applied. The 50 q1 fix produced another repeat, and the 49 q4 rebuild added a mock-mode cue. One coordinator action: record 52 q2 as D1 row 20 or send it back. No keyed answer was found clinically wrong. The fails are two bank repeats, one guideline conflict that the stem must resolve, and one mock-mode cue.
