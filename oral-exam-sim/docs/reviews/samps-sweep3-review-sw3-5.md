# Review of sweep 3 rebuilds, label sw3-5 (s24, s27, s28)

Independent review of the five rebuilt SAMPs in `docs/reviews/samps-sweep3-sw3-5.md`. Both lenses (clinical truth, and internal consistency with numbers) plus a meaning-level overlap search of the whole bank. Nothing was committed. Every SAMP stays `reviewed: false`.

## Verdicts

| SAMP | Verdict | Summary |
|---|---|---|
| arrhythmia-29 | fixed | One cueing fix in q2. Keys hold against the 2025 pediatric guidance as reported in the review source. |
| cva-27 | needs re-rebuild (not patched) | q2 copies signed-off cva-06 q2. q4 copies cva-26 q3. q3 overlaps cva-28. |
| cva-42 | fixed | One wording fix in the q2 prompt. ABCD2 and PFO clues check out. |
| chest-pain-41 | fixed | q3 copied signed-off ischemic-heart-disease-05 q4. Replaced with a new KF 5 question on pain severity. |
| chest-pain-47 | needs re-rebuild (not patched) | It repeats the keyed decision of signed-off cva-09, with chest-pain-01 behind it. It also has two cueing defects. |

## One row per question

| SAMP | Q | KF (HEAD / now) | Verdict | Finding | Confidence |
|---|---|---|---|---|---|
| arrhythmia-29 | q1 | 8 / 5 | pass | Sudden sniffing death is the best answer. A shockable first rhythm, the run from police, no chest blow, normal QTc and no delta wave each defeat a distractor. No other SAMP keys inhalant arrest. | high |
| arrhythmia-29 | q2 | 8 / 8 | fixed | The prompt said "over the coming days". That hints at q3's multi-day key and rules out the 12-hour and 24-hour options. Changed to "after admission". Continuous core temperature monitoring is in the review source. arrhythmia-12 (signed) lists it as one item on a long adult menu, so the overlap is minor. | medium |
| arrhythmia-29 | q3 | 5 / 8 | pass | The review source (Lee 2026, PMC13175904) says a 5-day course is reasonable. That can be 32 to 34°C then 36 to 37.5°C, or 36 to 37.5°C throughout. Its checklist says "for up to 5 d". The key matches. The AHA full text returned 403 again. The Korean 2025 PALS guideline (PMC13277418) does not name a preferred range. | medium |
| arrhythmia-29 | q4 | 8 / 8 | pass, flag | The review's checklist says "Delay prognostication until at least 72 h after cardiac arrest". The AHA primary text could not be opened. The mapping to KF 8 (start TTM) is indirect. The question is about prognosis, and it links to TTM only because TTM confounds the examination. | low |
| cva-27 | q1 | 2 / 2 | pass | Alexia without agraphia with a right hemianopia is a left PCA stroke. The distractor reasons are true. Right PCA strokes also appear in cva-24 and cva-28. | high |
| cva-27 | q2 | 3 / 3 | defect, not patched | This copies signed-off cva-06 q2. That question asks "results must be available before a thrombolysis decision", keys capillary glucose, and offers INR and aPTT, platelets, creatinine and troponin. cva-27 has the same keyed decision and four of the same distractors. CSBPR 2022/2025 calls for point-of-care glucose and says blood work should not delay treatment. It does not state that glucose is the only result required. That wording is AHA's. | high |
| cva-27 | q3 | 3 / 3 | concern | The key agrees with CSBPR. Its definition of disabling is "usually NIHSS >4", and non-disabling is judged by effect on ADLs, work or walking (PRISMS). The scenario overlaps cva-28 q2, which rules a PCA field defect disabling and gives tenecteplase. | medium |
| cva-27 | q4 | 3 / 3 | defect, not patched | The key is correct under the 2025 CSBPR EVT update, section 5 note 6. Trial data do not support uniform EVT for M2, A2 or P2 occlusions, and a case-by-case discussion is allowed. But cva-26 q3 in the same batch already keys this exact decision. The writer's claim that no SAMP keys it is wrong. | high |
| cva-42 | q1 | 4 / 4 | pass | Recomputed ABCD2: age 44 = 0, BP 128/78 = 0, speech without weakness = 1, 15 minutes = 1, no diabetes = 0. Total 2. | high |
| cva-42 | q2 | 4 / 4 | fixed | The CSBPR Secondary Prevention 2020 PFO section lists these clues: Valsalva before onset, waking with stroke, sleep apnea, DVT or PE, respiratory symptoms at onset, and recent prolonged travel or immobilization. The three keys match. None of the distractors is on the list. The prompt said "features of his history", but calf swelling is an examination finding. Changed to "presentation". | high |
| cva-42 | q3 | 4 / 4 | pass | CSBPR Acute 2022, 4.5 vi: patients 60 or younger with embolic stroke or TIA of undetermined source get a saline bubble echo if the result could change management. The contrast TEE and TCD sensitivity statement is also verified. No other SAMP keys PFO for stroke. The s36 diving items are a different story. | high |
| chest-pain-41 | q1 | 4 / 4 | pass | Tendon xanthomas plus premature ASCVD in a first-degree relative are clinical features in the Canadian FH definitions (Kramer 2024, Table 1, Ontario criteria). No LDL is given, so "most likely" is the right framing. | medium |
| chest-pain-41 | q2 | 2 / 2 | pass | ECG within 10 minutes and early ASA, per ESC 2023. | high |
| chest-pain-41 | q3 | 5 / 5 | fixed (rewritten) | The old q3 keyed that lack of relief from nitroglycerin "does not discriminate cardiac pain". That is the keyed decision of signed-off ischemic-heart-disease-05 q4 ("Relief does not reliably separate cardiac from other pain"), with an almost identical prompt. It also had the hedged-key cue: the key was the only non-committal option. Replaced with a question on a low triage pain score (3/10), sourced to Edwards 2011, Ann Emerg Med (3 306 patients, severe pain not associated with AMI or 30-day events, verified on PubMed 21802776). The options now include both directions (lowers, raises) so the null key is not the lone hedge. The key moves to position 1. No other SAMP keys pain severity. The Henrikson numbers in the old text (35% vs 41%) were correct. | high |
| chest-pain-41 | q4 | 4 / 4 | pass | Cascade screening of first-degree relatives, per Kramer 2024 citing the CCS 2018 statement. In mock mode the q4 option implies an inherited condition, but hypertrophic cardiomyopathy in q1 is also inherited, so it does not single out the q1 key. | medium |
| chest-pain-47 | q1 | 2 / 2 | defect, not patched | Bedside echo before the cath lab. The keyed decision is part of the dissection-mimic pattern below. | medium |
| chest-pain-47 | q2 | 5 / 5 | defect, not patched | Hedged-key cue. "It does not prove a primary coronary cause" is the only hedged option. Every distractor overclaims ("confirms", "rules out", "makes safe", "requires"). | high |
| chest-pain-47 | q3 | 1 / 2 | defect, not patched | Holding heparin and ticagrelor for a suspected dissection is the keyed decision of signed-off cva-09: stop reperfusion or antithrombotics when a type A dissection mimics an ischemic emergency. In mock mode, q4's options (type A and type B dissection) expose this key and the q1 key. | high |
| chest-pain-47 | q4 | 2 / 1 | defect, not patched | Type A dissection with a new AR murmur and equal pulses not excluding it. This is the keyed diagnosis of signed-off chest-pain-01 and cva-09. chest-pain-01 q3 also keys "equal pulses do not rule out". | high |

Key features: each SAMP keeps the HEAD multiset of key features. arrhythmia-29 (HEAD 8, 8, 5, 8, now 5, 8, 8, 8) and chest-pain-47 (HEAD 2, 5, 1, 2, now 2, 5, 2, 1) changed which question carries which number. The writer's report calls this "each question's key feature". It is true of the set, not of each question. cva-27, cva-42 and chest-pain-41 match question by question.

## chest-pain-47: repeat of a signed-off keyed decision

It does repeat one. cva-09 (signed) is a type A dissection with a new diastolic murmur, presenting as an ischemic emergency with reperfusion about to start. Its keys are to exclude dissection before reperfusion, recognize the dissection findings, and withhold thrombolysis and antithrombotics. chest-pain-47 has the same structure with the organ swapped. It has a type A dissection with a new diastolic murmur, presents as a STEMI with the cath lab activated, and keys "ST elevation does not prove a coronary cause", "hold heparin and ticagrelor" and "type A dissection". chest-pain-01 (signed) adds the type A diagnosis, heparin as a dangerous answer, and the teaching that equal pulses and a normal ECG do not exclude dissection. sweep3-ss-merged.json already lists cva-09 and chest-pain-01 as a borderline pair, so this would be a third SAMP on the same teaching. The writer's note, that the presentation is cardiac rather than neurologic, changes the setting but not the decision. A re-rebuild is needed. I made no edits to it.

## cva-27: re-rebuild needed

Three of four questions repeat decisions already keyed in the bank. q2 repeats signed-off cva-06. q4 repeats cva-26. q3 largely repeats cva-28. Only the alexia localization in q1 is new. Targeted edits cannot fix this, so I left the SAMP untouched for a re-rebuild. Facts checked for whoever rebuilds it:
- NIHSS 3 as "disabling" fits CSBPR. Box 5B says "usually NIHSS >4", and the definition rests on function (PRISMS).
- The MeVO statement matches the December 2025 CSBPR text.
- "Glucose is the only result needed" is AHA wording. CSBPR only says blood work should not delay treatment.

## Checks

- `SAMP_BATCH=s24`, `s27` and `s28` with `tests/samps.test.ts tests/samp-quality.test.ts`: 675, 715 and 699 passed.
- `npx tsc --noEmit -p .`: clean.
- `simcheck.py` run on the current text of all five (outputs in `scratchpad/rv-sw3-5/*.sim`). Top lexical scores were at most 0.33 (chest-pain-47 against ischemic-heart-disease-16). The overlaps above were found by meaning-level grep, not by the similarity scores.

## Sources verified

- Lee JE and colleagues, Anesth Pain Med 2026, PMC13175904: the temperature course, continuous core monitoring and the "at least 72 h" checklist item. https://pmc.ncbi.nlm.nih.gov/articles/PMC13175904/
- AHA 2025 PALS (doi 10.1161/CIR.0000000000001368): only the abstract could be read, via Europe PMC (PMID 41122885). The full text and PDF returned 403.
- Korean 2025 PALS guideline, PMC13277418: gives no preferred temperature range and supports multimodal prognostication.
- CSBPR Acute Stroke Management 2022 with the EVT interim update 2025 (local copy of the December 2025 PDF): the non-disabling definition, the NIHSS >4 wording, the glucose and blood work notes, Box 5B, MeVO note 6 and bubble echo 4.5 vi.
- CSBPR Secondary Prevention 2020 (local copy): the PFO clinical clues.
- Kramer AI and colleagues, CJC Open 2024, PMC11583881: autosomal dominant inheritance, CCS endorsement of cascade screening, and the provincial FH criteria table.
- Edwards M and colleagues, Ann Emerg Med 2011, PMID 21802776, doi 10.1016/j.annemergmed.2011.05.036 (new source for chest-pain-41 q3).

## For the physician

- arrhythmia-29 q3 and q4 rest on a 2026 review of the 2025 AHA PALS guideline, because the AHA text was blocked twice. Please confirm "up to 5 days" at 36 to 37.5°C and "at least 72 hours" before prognostication against Part 8 itself.
- arrhythmia-29 q4 tests prognostication timing under KF 8 (start TTM). Please accept this mapping or ask for a TTM-specific question.
- chest-pain-41 q3 is new: a low pain score does not change the probability of ACS (Edwards 2011). Please check that you accept a single US cohort as the source.
- chest-pain-41 q1 keys FH without an LDL value. The Canadian definitions need an LDL threshold for a formal diagnosis, so the key reads "most likely".
- cva-27 and chest-pain-47 need a re-rebuild. The reasons are above.
