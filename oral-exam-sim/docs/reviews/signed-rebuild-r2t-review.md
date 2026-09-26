# Independent review of signed-duplicate rebuild r2t

Scope: seizures-05 and seizures-07 in `src/samps/s16/seizures.ts`, and shock-04 and shock-05 in `src/samps/s16/shock.ts`. Writer report: `docs/reviews/signed-rebuild-r2t.md`. Prior review: `docs/reviews/signed-rebuild-r2e-review.md`. Pre-edit copies and writer probes: `scratchpad/r2t/`. My probe script and output: `scratchpad/r2t-rev/probe.ts`, `probes.json`, `probes2.json`, `probe-out.txt`. The reviewer edited nothing and committed nothing.

## Result

| SAMP | Verdict | Main reason |
|---|---|---|
| seizures-05 | FAIL | q3 cannot land with the beta blocker key. The only standard sources that were opened (Medscape, and a 216-case review) name amiodarone or lidocaine for caffeine VT, and phenylephrine for hypotension. They call beta blockade for refractory hypotension theoretical. Support for the key is three single case reports, and the key is not the single best answer. q4 still gives 2 of 2 to answers that let her drive now, and one natural correct line is marked unacceptable. |
| seizures-07 | FAIL | The q4 re-key follows the r2e request and is legitimate in form (`required` 1, epinephrine avoidance only). But the bare drug-name matches give 1 of 1 to the standard ACLS/PALS answer that q4 exists to catch. For example, "None, epinephrine is still indicated in arrest", "Epinephrine per PALS" and "Avoid amiodarone, continue epinephrine" all score. The prompt also cues the answer. |
| shock-04 | FAIL (fixable, match only) | The q3 re-key is legitimate and now sound: stage 1A AKI, no SBP, Ringer's removed, and normal saline is the single best answer under EASL. The writer's new q4 phrases, "instead of / rather than NSAID", match in either direction. So "Ibuprofen instead of acetaminophen" scores the no-NSAID item. Also, "Don't stop nadolol" plus "Do not stop spironolactone" scores 2 of 2. |
| shock-05 | FAIL (fixable, match only) | All three r2e fixes are done correctly. The stem now calls the equipment "chest drain kits", but the q2 accept list only knows "chest tube". So "Give him back the blood from the chest drain" and "Use the chest drain blood via the blood giving set" score 0. |

**shock-09 and shock-11** equal HEAD byte for byte. I compared each SAMP object from `{` to `},` against `git show HEAD`. In a block split, shock-11's block differs only by the `/* 12 ... */` comment line, and that line belongs to shock-12.

**D1:** none of the four adds a D1 row. seizures-05 q4 `neuro` repeats a signed decision at item level (see below). D1 stays at 19 of 20.

## Structure and diff scope

- `git diff HEAD` in seizures.ts touches seizures-03, 05 and 07, plus the next blocks' header comments. Added `S` entries: `lastReview`, `asraLast`, `kohara`, `luoCpvt`, `fitzgeraldCpvt`, `bellamyCpvt` and `miyamuraCaffeine`. Nothing was removed.
- `git diff HEAD` in shock.ts touches shock-04, 05, 07, 12 and 13, plus header comments. The source constants are already in HEAD.
- Against the pre-edit copies, the writer's only other change is the one new `S` entry, `bellamyCpvt`.
- All four keep their id, topic, question count, kinds and key features. Each has `...META, reviewed: false, version: 2`. All four are in `src/samps/held-back/r2e.json`.
- **Coordinator:** the working tree still holds round 1 text for seizures-03, shock-07, shock-12 and shock-13. It is identical to the pre-edit copies and not signed text, and all four are still listed in `r2e.json`. The r2e landing note says those ids keep their signed text. Restore them and prune `r2e.json` before any landing from these files.
- House style: no em or en dashes and no semicolons in the four blocks. Options in shock-04 q3 are alphabetical, lengths 19 to 21 characters.
- Format nit: the shock-04 q3 update is now 84 words in 7 sentences, against the spec's "one to three sentences, about 10 to 45 words". It was already over, and the paracentesis sentence adds to it.

## Tests

`SAMP_BATCH=s16 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` ran once and passed 465 of 465. No command was refused. I did not run `tsc`.

## Keeper check (markQuestion, engine `lineMatches`)

The keeper-only and all-cluster text sets are from `scratchpad/r2t/`. Scores are the bipartite best.

| Q | Keeper only | All cluster |
|---|---|---|
| seizures-05 q3 | 0/1 | 0/1 |
| seizures-05 q4 | 0/2 | 0/2 |
| seizures-07 q4 | 0/1 | 0/1 |
| shock-04 q3 (single) | n/a | n/a |
| shock-04 q4 | 0/2 | 0/2 |
| shock-05 q2 | 0/1 | 0/1 |
| shock-05 q3 | 0/1 | 0/1 |
| shock-05 q4 | 1/2 (`or` via "Call the trauma surgeon ...") | 1/2 |

No keeper reaches full marks, and no keyed decision echoes a keeper.

## Per question

| SAMP | Q | Verdict | Reason |
|---|---|---|---|
| seizures-05 | q1, q2 | PASS | Unchanged. Passed in r2e. |
| seizures-05 | q3 | FAIL (source, key not single best) | **Unchanged, and it cannot land with this key.** The writer opened Medscape "Caffeine toxicity", and I re-read `r2t/medscape.txt`. It says "In the hemodynamically stable patient, amiodarone or lidocaine may be used to treat ventricular tachycardia (VT). Electrical cardioversion may be used in hemodynamically unstable patients or in patients whose condition is refractory to pharmacologic intervention". It says alpha agonists such as phenylephrine "may be needed to support blood pressure in hypotensive patients". Beta blockade is "In theory ... beneficial in patients with refractory hypotension and could be used in consultation with the regional poison control center". The Dtsch Arztebl 2025 review of 216 cases (`r2t/dae.txt`) says "Amiodarone and lidocaine were the drugs used primarily to treat ventricular cardiac arrhythmia" and "no definitive treatment recommendations can be derived". Only case reports support the key (Miyamura 2024, Price 1990, Laskowski 2015), and Miyamura itself warns that beta blockers "may be inadvisable" when a patient is unstable. The stem has not tried lidocaine, and "Lidocaine 1.5 mg/kg IV" scores 0. A key that the one opened standard source points away from is not the single best answer. **Needs a re-key (writer) or a physician ruling.** Options: key hemodialysis, which Kohara supports. The update's "nephrologist is on the way" would then have to go, and q4's "After beta blockade and hemodialysis" would change. Or accept lidocaine and a beta blocker together with a source for each. Either way this is a new accept list, so it goes back. |
| seizures-05 | q4 | FAIL (match, repeat) | The r2e fixes are only partly effective. (1) **Wrong answers still score 2 of 2.** `neuro` phrases contain a negation word, so under ruling 3 they match in any order. Three answers that let her drive now each score 2 of 2. They are "Neurology follow-up, no driving restrictions needed" + "She can drive once recovered, no need to wait", then "She can start driving before neurology sees her" + "No need to wait", and "Not necessary to see neurology, she can drive" + "No waiting period". The new `abstain` item is an unrequested addition. It lets `toxic` + `abstain` reach 2 of 2 with no neurologic gate at all: "She may drive, but avoid caffeine pills" + "No 3 month wait" scores 2 of 2. That is the r2e defect by another route. On its merits `abstain` is well sourced (CMA Section 11 alert), but as scored it re-opens the hole. (2) **A correct line is marked unacceptable.** "A provoked seizure does not need the usual 3 month wait" hits "wait 3 month", because "not" is more than three words before the phrase. "Hold off driving until neurology review" scores 0. (3) **Item-level repeat.** `neuro`, "No driving until a neurologic evaluation", keys the same decision for the same CMA reason as signed seizures-09 q4 `drive` ("No driving until cleared by neurology and the licensing authority", seizures KF 5), signed seizures-40 q3 ("Stop driving from today", citing the same CMA line) and signed seizures-08 q4. seizures-09's text scores 1 of 2 here. The r2e review asked for this item, and it is not a keeper echo. But with 3 items and `required` 2, full marks never need the new decision, the no-3-month-wait rule for a provoked toxic seizure. **Suggested fix (writer):** put the neurologic gate in the update. For example: "A neurologist has seen her and found no sign of epilepsy." Then key only the new decisions, `toxic` and `abstain`, with the "can drive now" unacceptable removed or reworded. That removes both the repeat and the "drive now" hole. Probe every negation-carrying phrase against reversed lines. |
| seizures-07 | q1 to q3 | PASS | Unchanged. |
| seizures-07 | q4 | FAIL (match, cue) | **The re-key is legitimate:** `required` 2 to 1, `noepi` as the only item, and sedation and beta blockade moved to the explanation. That is what r2e asked for. It clears the arrhythmia-24 q4 repeat and the keeper's decision. No bank key avoids epinephrine for CPVT, and the only other avoid-epinephrine keys are hypothermic (environmental-06 q3, arrhythmia-06 q4). Bellamy 2019 was checked in `r2t/bellamy.txt`: "Appropriate management is avoidance of epinephrine, administration of general anesthesia, IV opiates, and consideration of flecainide", and "catecholamines should be avoided". The explanation is faithful. **Defects:** (1) **The wrong answer scores.** Bare "epinephrine", "adrenaline", "catecholamine" and "isoproterenol" match any positive mention. These all score 1 of 1: "None, epinephrine is still indicated in arrest", "Nothing, follow PALS including epinephrine", "Epinephrine per PALS", "Epinephrine is still needed in arrest, avoid nothing", "Avoid amiodarone, continue epinephrine", "Continue epinephrine every 3 to 5 minutes, avoid amiodarone". So does "No change, standard PALS with epinephrine", through "no epinephrine" under ruling 3. The ACLS/PALS answer is exactly what q4 must not reward. (2) **Correct lines marked unacceptable.** "Epinephrine, even the 1 mg arrest dose" and "Epinephrine 0.01 mg/kg, because it drives the VT" hit "epinephrine 1 mg" and "epinephrine 0.01". "Epi" and "Isoprenaline" score 0. (3) **Cue.** "which drug from the usual resuscitation algorithm would you avoid?" follows q3, where the candidate has just named catecholaminergic VT. It shrinks the answer to epinephrine, amiodarone or lidocaine and points at the catecholamine. SAMP_SPEC section 6 says "the lead-in must not hint at the answer". **Fix (writer):** use a neutral prompt that asks how the diagnosis changes resuscitation if he arrests. Drop the bare drug-name matches. Add unacceptable positive-use forms that survive reordering, such as "epinephrine indicated", "continue epinephrine", "epinephrine per pals", "epinephrine per acls" and "standard pals". Re-probe every line above. Ruling 1 is not engaged, because "epinephrine 1 mg" is unacceptable here, not dangerous. It still catches correct lines, though. |
| shock-04 | q1, q2 | PASS | Unchanged. q1's arithmetic (96/90 about 1.1, 96 minus 58 is 38) is unaffected by the creatinine change. |
| shock-04 | q3 | PASS (legitimate re-key) | This is within what r2e allowed ("change the scenario or the options so that one answer is clearly best"). Checked against EASL 2018 (`r2e/easl.txt`). Stage 1A is "SCr <1.5 mg/dl" within KDIGO stage 1, which is a rise of 50% or more from a baseline within 3 months. 128/84 = 1.52, and 128 umol/L = 1.45 mg/dL, below 133. So this is stage 1A. Fig. 8 gives stage 1A "Remove risk factors ... expand plasma volume", and albumin 1 g/kg only at stage >1A. The text says "Patients with diarrhoea or excessive diuresis should be treated with crystalloids". Ascitic neutrophils of 90 x 10^6/L are below 250, so there is no SBP. The albumin 20% option is now wrong under the SAMP's own source. Ringer's is gone, so there is one crystalloid. 0.45% saline is a plausible distractor (the salt-restriction misconception) and is correctly explained. Option probes: only index 2 scores. The decision is not keyed elsewhere: albumin keys are SBP (abdominal-pain-42), burns (burns-25) and shock-22 (albumin 5%, different). Nit: the update length (see Structure). |
| shock-04 | q4 | FAIL (match) | The r2e fix to the unacceptable (positive orders only) is right. "Acetaminophen instead of NSAIDs" now scores. But the writer's added phrases "instead of nsaid", "rather than nsaid", "instead of ibuprofen", "rather than ketorolac" and so on ignore word order (ruling 3, and ruling 2 on comparatives). So these wrong answers score the `nsaid` item: "Ibuprofen instead of acetaminophen for his ribs" (2 of 2 with "Hold nadolol"), "Ketorolac rather than opioids to avoid encephalopathy" and "NSAID rather than opioid for rib pain". These phrases were carried from r2e and not flagged there: "stop nadolol", "hold beta blocker", "stop spironolactone", "no ibuprofen". They let full wrong answers score 2 of 2: "Don't stop nadolol, he needs it for his varices" + "Do not stop spironolactone", and "Continue nadolol, no need to hold it" + "Ibuprofen is fine, no concern". **Fix (writer, same decisions):** remove the comparative phrases. Add unacceptable continue forms ("continue nadolol", "keep nadolol", "continue beta blocker", "continue spironolactone", "ibuprofen is fine", "nsaid is fine"), checked so they do not catch "Hold nadolol, restart it when he recovers". Accept that "Acetaminophen instead of NSAIDs" may need the candidate's override, or add an acetaminophen phrasing that does not also match the reverse. |
| shock-05 | q1 | PASS | Unchanged. |
| shock-05 | q2 | FAIL (match) | The cue is fixed. "autotransfusion port" is gone, and the stem uses r2e's neutral sentence. European Recommendation 17 was added correctly. The keeper scores 0. But the stem's "chest drain kits" wording primes "drain", and the accept list has only "chest tube" forms. These score 0: "Give him back the blood from the chest drain", "Hook the chest drain up to the giving set and give him his own blood", "Use the chest drain blood via the blood giving set" and "Give the drained blood back through the giving set". **Fix:** add forms such as "chest drain blood", "blood from the chest drain", "drain blood back", "own blood", "blood back" and "drained blood". Nit: bare "2 litre" in the unacceptable catches "Reinfuse up to 2 litres of shed chest blood". Tie it to crystalloid or saline. |
| shock-05 | q3 | PASS (nit) | The unacceptable was narrowed as r2e asked. "More crystalloid" is now 0 with no label, and "Norepinephrine infusion with a small crystalloid bolus" scores. Engine-level nit, pre-existing and not blocking: "Pressors are harmful in hemorrhage, avoid, give more fluid" scores 1 through bare "pressor", because a trailing "avoid" is not read as negation. |
| shock-05 | q4 | PASS | Bare "packing" was replaced by wound-specific forms as r2e asked. The keeper now reaches 1 of 2. "Preperitoneal packing" + "Pelvic binder" scores 0. "Pack it with gauze" + "Firm pressure" scores 2 of 2. Nit: "Stuff gauze into the wound" scores 0. |

## Prior rulings

- There is no silent reversal of any ruling in RULINGS-BY-SAMP or SCORING-RULINGS.
- Ruling 1 (dangerous IV epinephrine phrases) is not engaged, because seizures-07's epinephrine phrases are unacceptable, not dangerous.
- Ruling 4: no ratio or comma-grouped numbers in match phrases.
- Rulings 2 and 3 are the cause of the shock-04 q4, seizures-05 q4 and seizures-07 q4 defects above.

## Decision search and duplicates

- CPVT, caffeine, autotransfusion and lactulose appear only in s16 in the working tree. Other writers' in-progress diffs do not converge on these stories.
- Simcheck was re-run on the writer's current-text cards. The top matches are seizures-18 0.18, arrhythmia-34 0.24, abdominal-pain-42 0.27 and multiple-trauma-16 0.18. None of them tells the same story.
- seizures-05 q4 `neuro` against seizures-09 q4: this is the same decision for the same reason, at item level (see q4). It is not a keeper echo, since the keeper of cluster 6 is loc-03. With the suggested restructure it would disappear. If the coordinator instead wants to keep it as scored, it would be the 20th D1 row, which freezes D1. I do not recommend spending the last row on it.

## For the physician

- **seizures-05 q3.** Is a short-acting beta blocker for caffeine VT with hypotension, after cardioversion, amiodarone and magnesium, the teaching you want? The only standard reference opened (Medscape) lists amiodarone or lidocaine and cardioversion for VT, and phenylephrine for hypotension. It calls beta blockade theoretical and says to use it with poison centre input. Support for the key is three case reports. If you accept it, say so and it can be re-sourced. Otherwise q3 needs a new key, for example hemodialysis.
- **seizures-05 q4.** The Ontario reporting question from r2e is still open. Please confirm whether a provoked toxic seizure with full recovery must be reported to MTO. Also, would you accept the neurologist's assessment being stated in the update, so that the question tests only the provoked-seizure rule and abstinence?
- **seizures-07 q4.** Do you accept "avoid epinephrine even if he arrests" for known CPVT? The support is Bellamy 2019 (three cases, titled "the cardiac arrest where epinephrine is contraindicated") and the Sydney cohort discussion. It departs from ACLS and PALS.
- **shock-04 q3.** In AKI stage 1A from lactulose diarrhea with no SBP and a small subdural, is normal saline over 20% albumin 1 g/kg the answer you want?
- **shock-05 q2.** Do rural Canadian trauma chest drain kits connect to a blood giving set, as the stem now says?

## Landing decision

None of the four lands on this review.
- **shock-04 and shock-05:** match fixes only. The keys and stories stay.
- **seizures-07 q4:** match and prompt fixes. The re-keyed decision can stay.
- **seizures-05 q3:** needs a re-key or a physician ruling. q4 needs the restructure described above.

All four keep their signed text until a revised version passes a fresh review.
