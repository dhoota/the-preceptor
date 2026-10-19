# Q500 round 3 verify: s63, Arrhythmia

Fresh independent review by Preceptor of the round 3 revision of `src/samps/s63/arrhythmia.ts` (arrhythmia-48 to arrhythmia-52). The reviewer did not write, edit or review this batch before. It made no change to any SAMP, source or shared file (REVIEW-RULES rule 1). Every fix below goes back to a writer. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES, DECISIONS, SCORING-RULINGS, the round 2 verdict `docs/reviews/q500-verify2-s63.md`, the "Round 3" section of `docs/reviews/q500-writer-s63-r2.md`, the diff `git diff 03c5322 -- src/samps/s63/arrhythmia.ts` and the whole final file. Catalogues read: arrhythmia, ischemic heart disease, environmental and LOC. Bank greps of `src/samps` and `src/cases` for remifentanil, sevoflurane, short-acting sedation, the Canadian Syncope Risk Score (CSRS), and AF with STEMI or fibrinolysis.

Checks run: `SAMP_BATCH=s63 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 of 128). The type check shows no s63 errors. No em or en dashes and no semicolons in any string. "artefact" is left only in the source id `jafary-artefact-2007`, which round 2 allowed.

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| arrhythmia-48 | PASS | PASS | PASS | PASS | PASS |
| arrhythmia-49 | FAIL | FAIL | PASS | PASS | PASS |
| arrhythmia-50 | PASS | PASS | PASS | PASS | PASS |
| arrhythmia-51 | PASS | PASS | PASS | PASS | PASS |
| arrhythmia-52 | FAIL | PASS | FAIL | FAIL | PASS |

arrhythmia-48 and arrhythmia-51 are unchanged since 03c5322: the diff touches only 49, 50 and 52, plus the source list.

## Round 2 required fixes: were they applied?

| SAMP | Question | Required fix | Status |
|---|---|---|---|
| arrhythmia-49 | q1 | Rebuild on a KF8 decision the bank does not hold | Applied. The rebuild asks for a sedation plan during temperature control. No SAMP or oral case keys sedation drug choice after arrest. The oral case post-arrest-care-after-rosc has only "Sedation plan" as a generic line in q-dispo. The no-rewarming and fever elements are gone, and 35.1°C is now 35.6°C. One distractor reason needs fixing (table below). |
| arrhythmia-49 | q3 | Name ERC, state the AHA position, check ERC 2025 | Applied. The update says "Your department follows European Resuscitation Council guidance", which has precedent in "Your hospital ..." updates in s32, s35 and s68. The explanation states the AHA position. ERC 2025 keeps the P-wave statement (verified below). |
| arrhythmia-49 | q4 | Update names neither the q1 nor the q3 key, and spell it "artifact" | Applied. The update no longer mentions pacing or device temperature. |
| arrhythmia-50 | q1 | New KF1 decision, a lead-in that fits every option, key not the longest | Mostly applied. The decision is new and the lead-in fits all five options. The key is still the single longest option, by one character: "Atrial fibrillation at 33" is 25 characters against 24 for "Sweating after the faint". The writer's report calls this a tie, which is wrong. This is not a ground for failure (see recommendations). |
| arrhythmia-52 | q2 | Rebuild as a new decision, no D1 row | Applied. Managing stable AF after fibrinolysis is new to the bank. ischemic-heart-disease (s42, the 74-year-old with AF at 164/minute) keys IV metoprolol where rate control is needed, which is a complementary decision, not a repeat. arrhythmia-11 (tenecteplase, AIVR) keys observation of AIVR, not AF. The KF tag and a timeline gap it creates are fixed below. |

## Required fixes

| SAMP | Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|---|
| arrhythmia-49 | q1 | explanation, the sevoflurane reason | "Inhaled sevoflurane caused fewer ventilator-free days and higher mortality than propofol in a trial." | The trial ERC-ESICM 2025 cites was in 687 adults with ARDS, most from COVID-19, not in people after cardiac arrest. As written, the sentence implies harm in this population. Replace it with, for example: "Inhaled sevoflurane is not a short-acting IV agent, and in a trial of ventilated adults with ARDS it gave fewer ventilator-free days and higher 90-day mortality than propofol." | ERC-ESICM 2025 post-resuscitation care, sedation section (ref 298) | Medium |
| arrhythmia-52 | q2 | keyFeature | `{ topic: "arrhythmia", n: 7 }` | Retag to `n: 4`. ESC ACS 2023 treats AF as a complication of ACS (section on AF and the AF rows of the complications recommendation table), not as a reperfusion arrhythmia. The explanation itself frames it as AF in ACS. The decision is "stable, rate under control, so no drug or electrical therapy, and unstable means cardioversion". That is KF4 word for word ("Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly"). KF7 stays covered by 52 q1 and q3. This answers the writer's flag. | priorityTopics KF4 and KF7, ESC ACS 2023 | Medium |
| arrhythmia-52 | q3 | update (timeline) | "Forty minutes later his pain has gone and the ST elevation is 1 mm. PR intervals lengthen until a P wave is not conducted ..." | The q2 rebuild left him in AF and already "with no chest pain". q3 then shows P waves with Wenckebach cycles and says the pain "has gone", without saying AF has ended. The case never states the change of rhythm, so the case contradicts itself (Lens B 1 and 4). Change the first sentence to, for example: "Forty minutes later he is in sinus rhythm, still pain free, and the ST elevation is 1 mm." Keep the rest. Do not say how the AF ended, so that q2 is not cued in mock mode (B6). | SAMP_SPEC section 3, Lens B 4 | Medium |

## Writer flags

- **49 q1, sedation choice under KF8.** Accepted. KF8 is "start targeted temperature management when indicated". The catalogue shows every other KF8 decision is already keyed somewhere: the indication (arrhythmia-12 q1, arrhythmia-47 q2), the target (arrhythmia-12 q2, arrhythmia-31 q2, arrhythmia-29 q3), monitoring (arrhythmia-29 q2), no rewarming and fever prevention (arrhythmia-13 q1, drowning-cottage-lake), shivering, and the device and duration items in the oral cases. ERC-ESICM 2025 puts short-acting sedation and avoiding routine neuromuscular blockade in the summary row for temperature management. The question names temperature control in the update and the prompt, so the tag is fair, though loose. Listed for the physician.
- **49 q1, one defensible key.** The key holds under ERC-ESICM 2025 ("We suggest using short-acting intravenous sedative agents and daily sedation holds", and propofol-remifentanil against midazolam-fentanyl under temperature control, adjusted OR for delayed awakening 0.08). Midazolam with fentanyl is common in Canadian ICUs, but it is the comparator that did worse. Neuromuscular blockade is "not recommended" except "may be considered" in critical hypoxemia with ARDS. The explanation matches this. Remifentanil is sold in Canada. After the sevoflurane fix, q1 passes.
- **52 q2, AF after fibrinolysis under KF7.** Retag to KF4 (required above).
- **52 q2 and q3 both keyed to monitoring.** Acceptable once q2 is KF4. The two teach different things: a stable AF in ACS needs anticoagulation only, while Mobitz I after inferior reperfusion is a nodal effect that needs no drug or pacing. Each key is the single best answer. A test-taker who has seen q2 gains nothing on q3, because q3's distractors (atropine, dopamine, isoproterenol, pacing) are tested on their own merits. Not a ground for failure.

## Passes with notes

- **49 q2 to q4.** q2 now cites ERC 2025, which supports P-wave asystole as a pacing-responsive form of asystole. q3: the key holds under the named guidance. The explanation sentence "AHA guidance does not recommend routine pacing in cardiac arrest, so the ERC exception applies only to asystole with P waves" makes the ERC exception follow from AHA, which is odd logic. Recommended rewording, not required: "AHA guidance does not recommend routine pacing in cardiac arrest. ERC makes an exception only for asystole with P waves." q4: the fixes are clean, and the update now cues nothing.
- **50 q1.** CSRS item definitions checked against the CMAJ 2016 paper (PMC5008955, Tables 3 and 4 footnotes). Heart disease "includes coronary or valvular heart disease, cardiomyopathy, congestive heart failure and non-sinus rhythm (ECG evidence during index visit or documented history of ventricular or atrial arrhythmias, or device implantation)". The vasovagal predisposition item is "triggered by being in a warm crowded place, prolonged standing, fear, emotion or pain", and the QTc item is QTc over 480 ms. Every sentence of the explanation is correct. The decision is new: arrhythmia-46 q1 (s24) keys a total score of -3, and arrhythmia-01 q1 (s03) keys QRS over 130 ms as part of a write-in list. Neither keys the heart disease item. The athlete-exertional-syncope case uses CSRS only as a trap. The lead-in "details of her history" fits all five options (ruling B8).
- **50 q2 to q4, 48, 51.** Unchanged and rechecked. They pass, as in round 2.
- **52 q2 accuracy.** Checked against the ESC ACS 2023 full text. "In most cases, AF is well tolerated and no specific treatment is required, apart from anticoagulation." The recommendations: IV beta blockers when rate control is needed without acute HF or hypotension (I C), IV amiodarone when rate control is needed with acute HF and no hypotension (I C), and immediate electrical cardioversion with hemodynamic instability or when rate control cannot be achieved promptly (I C). The text adds: "In cases of hypotension, digoxin is preferred over amiodarone or beta-blockers." Every distractor reason is true. At 98/minute with BP 128/76 mmHg and clear lungs, no rate control is needed. The timeline holds: enoxaparin 35 + 30 = 65 minutes before. The lead-in fits.
- **52 q4.** ERC 2025 lists the life-threatening features as shock, syncope, heart failure (pulmonary edema and/or raised JVP) and myocardial ischemia. The explanation matches.
- **Key positions (18 singles).** First 3, second 4, third 3, fourth 4, fifth 4. The maximum is 22%, and every position is used.
- **Key is the single longest option** in 5 of 18 singles (28%): 48 q3, 48 q4, 50 q1, 52 q1 and 52 q4. This is within 35%, and the tests pass. Recommended, not required, under ruling B1: shorten the 50 q1 key to "Atrial fibrillation" (19 characters). The stem already gives the age at diagnosis. That brings the batch to 4 of 18 (22%).
- **Key feature coverage after the required retag.** KF1: 48 q1, 50 q1. KF2: 50 q2, 51 q2. KF3: 48 q2, 49 q2, 49 q4, 51 q1. KF4: 49 q3, 51 q3, 52 q2, 52 q4. KF5: 48 q3, 50 q3, 51 q4. KF6: 48 q4, 50 q4. KF7: 52 q1, 52 q3. KF8: 49 q1. Every key feature is tested.
- **Menus.** 50 q3 and 51 q2 remain, so the batch still has at least one menu.
- **Style, recommended only.** 49 q1 writes "Lorazepam 2 mg IV every 2 hours" with a capital, while 49 q3 and 52 q2 use lower-case generic names ("amiodarone 300 mg IV"). Ruling D leaves option case open bank-wide, so this is not required.
- **Rule 4 (unrequested changes).** The source swaps are not unrequested. Round 2 asked for ERC 2025 to be checked and cited if it kept the P-wave text, and that applies to 49 q2, 49 q3 and 52 q4. Dropping `erc-esicm-temp-2022` and `esc-syncope-2018` follows from the rebuilt questions. The stem temperature change from 35.1°C to 35.6°C is harmless and removes the drowning-case number. No other changes were found.

## Sources verified

- Soar J and colleagues. European Resuscitation Council Guidelines 2025: adult advanced life support. Resuscitation 2025;215:110769. Europe PMC confirms PMID 41117572 and the DOI. The copy read was the publisher PDF, mirrored at certifico.com attachment 45831. Its embedded metadata says Creator Elsevier, with CrossMark and DOI 10.1016/j.resuscitation.2025.110769, so it is the journal's own file. Text found: "Whenever a diagnosis of asystole is made, check the ECG carefully for the presence of P waves because, unlike true asystole, this is more likely to respond to cardiac pacing." Also: "Do not attempt pacing for asystole unless P waves are present". The instability list is shock, syncope, heart failure and myocardial ischaemia. The ERC 2025 bradycardia poster on cprguidelines.eu gives the same list. The publisher page returned 403.
- Nolan JP, Sandroni C, Cariou A and colleagues. ERC and ESICM Guidelines 2025: post-resuscitation care. Resuscitation 2025;215:110809. Europe PMC PMID 41117575. Read from the publisher PDF mirrored at certifico.com attachment 45829, whose metadata shows the Elsevier file and its DOI. It supports short-acting IV sedatives with daily holds, the propofol-remifentanil before-and-after study (460 patients, OR 0.08), more noradrenaline need with propofol, no systematic neuromuscular blockade except possibly in critical hypoxemia with ARDS, and the sevoflurane trial (687 adults with ARDS, mortality 53% against 44%). The trial population is why 49 q1 fails.
- Thiruganasambandamoorthy V and colleagues. CMAJ 2016, DOI 10.1503/cmaj.151469, PMID 27378464. Full text read at https://pmc.ncbi.nlm.nih.gov/articles/PMC5008955/. The definitions are quoted above.
- Byrne RA and colleagues. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J 2023, DOI 10.1093/eurheartj/ehad191. Full text read from a local copy of the published guideline, which carries the academic.oup.com download stamp. The AF text and recommendation rows are quoted above.
- Jafary 2007, Abbas 2022, Bellamy 2019, Patel 2010, Merck short QT, Dayal 2018 and Armour 2022 are unchanged and were accepted in rounds 1 and 2.

## Physician-level items (not grounds for failure)

- 49 q1: whether a choice of sedative fits KF8 ("start temperature management when indicated"). Every other KF8 decision is already keyed in the bank.
- 49 q1: propofol with remifentanil is an ERC suggestion built on a before-and-after study and a small trial. Many Canadian centres use propofol with fentanyl, which is not offered as an option.
- 49 q3: an ERC-only key in a Canadian exam whose ACLS standard is AHA. The stem now names ERC (coordinator ruling c).
- 49 q2: whether "Complete heart block" competes with "Ventricular standstill" (carried over from round 2).

## Summary

Five SAMPs, 20 questions. 3 SAMPs pass (48, 50, 51) and 2 fail (49, 52). Questions: 17 pass, 3 fail (49 q1, 52 q2, 52 q3). All five round 2 fixes were applied, and no keyed answer is clinically wrong. The fails are small:
- 49 q1 rejects sevoflurane with an ARDS trial presented as if it were in arrest patients.
- 52 q2 is tagged KF7 for a decision that is KF4.
- 52 q3 needs one sentence so that the AF from the rebuilt q2 visibly ends before the Wenckebach rhythm.

Every citation checked exists and supports its point. ERC 2025 ALS, ERC-ESICM 2025 and CSRS were read in the publisher's PDF or on PMC.
