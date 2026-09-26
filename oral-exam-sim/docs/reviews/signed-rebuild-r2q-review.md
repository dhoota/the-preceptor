# Review: writer fix r2q, asthma-copd-01 scoring

Reviewer brief: scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md. Review that asked for the fixes: docs/reviews/signed-rebuild-r2g-review.md. Writer report: docs/reviews/signed-rebuild-r2q.md. File: src/samps/s04/asthma-copd.ts.

The reviewer edited nothing (REVIEW-RULES rule 1). Every fix below goes back to the writer, and the revision needs a fresh review. No command was refused. `SAMP_BATCH=s04` on tests/samps.test.ts and tests/samp-quality.test.ts was run once: 481/481 passed. That run is not what makes a landing safe (rule 2).

Reviewer probes: scratchpad/r2q_rev/rp.ts and rp2.ts, with output in rp.out and rp2.out. They use `markQuestion` on the current file and on scratchpad/r2q/ac_before.ts.

## Verdict

| SAMP | Verdict |
|---|---|
| asthma-copd-01 | **FAIL. Return to writer for match-phrase fixes. No new keyed decision is needed.** |

Why it fails:
- In q4, the new negation-carrying phrases make two answers that reject the key score **2/2**. Before this pass, those answers scored 0/2.
- The new `prednisone 50` unacceptable zeroes natural correct lines such as "Prednisone 40 mg instead of the 50 mg".
- In q1, sets of three treatment lines still score **3/3**, and one of those sets rose from 2/3.
- Natural history wording that scored 2/3 before now scores 0/3.

## 1. Scope of the diff

- **Against the pre-edit copy (scratchpad/r2q/ac_before.ts).** The only differences are inside asthma-copd-01:
  - q1: the `gas`, `vent`, `card` and `drugs` match arrays
  - q4: the `budes`, `eos`, `discuss` and `short` match arrays
  - one new q4 unacceptable ("Prednisone 50 mg as before")
  - one sentence appended to the q4 explanation
  
  No item text, stem, update, prompt, required count, kind, keyFeature, source, title, version or `reviewed` flag changed. This matches the writer's report and the allowed scope. The new sentence has no dashes or semicolons.
- **asthma-copd-04, 11 and 13.** Each block is byte-identical between ac_before.ts and the current file, so this pass did not touch them. All three still differ from HEAD. 04 is the r2g round 2 text. 11 and 13 now carry new titles ("A swollen calf during a steroid taper", "A banquet shift in the kitchen") that are in neither HEAD nor the r2g snapshot (scratchpad/r2g/ac_r2_current.ts). The preamble constants also changed between that snapshot and ac_before.ts. So another writer changed 11 and 13 between 17:15 and 17:28, before this pass began. This is not an r2q change, but the coordinator should make sure those edits have their own review.
- **Held back.** asthma-copd-01 is still listed in src/samps/held-back/r2g.json. No r2q.json exists, and a fix pass needs none.

## 2. Probes

The writer's probe.ts was re-run, and its output (probe.out) reproduces. I added about 110 single lines and 11 answer sets. Selected results follow. "Before" is the r2g text and "after" is the r2q text.

### q1 (history marking hypercapnic risk, required 3)

**Wrong answers that still score, or now score:**

| Line or set | Before | After | Item |
|---|---|---|---|
| "BiPAP if needed" + "Minimize sedative use" + "Check for high CO2 before giving more oxygen" | 3/3 | **3/3** | vent, drugs, gas |
| "NIV if needed" + "Limit opioid use" + "Watch for hypercapnia before increasing the oxygen" | 2/3 | **3/3** | vent, drugs, gas |
| "Start NIV given her history of COPD" + "Caution with sedating medications" + "Give her an oxygen alert card at discharge" | 3/3 | **3/3** | vent, drugs, card |
| "Prepare for intubation given her history of smoking" | 0 | **1** | vent ("history of intubation") |
| "Watch for hypercapnia before increasing the oxygen" | 0 | **1** | gas ("hypercapnia before", new) |
| "NIV may be required" / "Start NIV and arrange home oxygen" / "Send her home on BiPAP" | 1 | 1 | vent ("required niv", "home niv", "home bipap") |
| "Take care with morphine" / "Take an ABG then give morphine" | 1 | 1 | drugs ("take morphine") |

The scorer ignores word order, and the writer said so when rejecting "bipap before". The same reasoning rules out these kept or added phrases:
- "needed niv", "needed bipap", "required niv", "required bipap"
- "home niv", "home bipap"
- "history of niv", "history of intubation"
- "high co2 before", "high pco2 before", "raised co2 before", "hypercapnic before", "hypercapnia before"
- "take morphine", "take hydromorphone", "take oxycodone"
- "opioid use", "sedative use", "benzo use"

"BiPAP if needed" and "NIV if needed" are among the most common ED treatment lines.

**Natural history wording that no longer scores:**

| Set | Before | After |
|---|---|---|
| "Has she been ventilated before?" + "Is she on any sedatives?" + "Did previous blood gases show a high CO2?" | 2/3 | **0/3** |
| "Any ICU admissions or intubations?" + "Medications: opioids, benzos" + "Baseline PaCO2" | 1/3 | **0/3** |

Other single lines that score 0 after this pass:
- "Does she use BiPAP at night?" (1 before)
- "Does she have a target saturation documented in her chart?" (1 before)
- "High CO2 on past gases"
- "Baseline CO2 on old gases"
- "Chronic hypercapnia"
- "Elevated bicarbonate on previous bloodwork"

Also note that "gases" tokenises to "gase", so "previous blood gas", "old gas" and "past gas" never match a plural. That flaw was there before this pass.

**Mixed treatment and history lines.** Most of these score correctly when they carry real history:
- "Venturi 28% as she is a known CO2 retainer" scores gas.
- "Hold her home opioids, she takes hydromorphone" scores drugs.
- "Previous NIV, so target 88 to 92%" scores vent.

But "Titrate O2 to 88 to 92% as her old gases showed CO2 retention" dropped from 1 to 0, because "gases" does not match and bare "co2 retention" was removed.

The writer's fixes for the r2g items do work. The review's treatment set, "Titrate to target saturation 88 to 92%", bare "NIV" and "Hydromorphone for pain" now all score 0.

### q4 (steroid choice after steroid psychosis, required 2)

**Wrong answers that gain marks:**

| Set | Before | After | Items |
|---|---|---|---|
| "No need for eosinophil count, give prednisone" + "Avoid budesonide nebs, prednisone is better" | 0/2 | **2/2** | eos, budes |
| "No nebulized budesonide, just prednisone" + "Prednisone without checking eosinophils" | 0/2 | **2/2** | budes, eos |

Cause: `lineMatches` returns true for any phrase that contains a negation word once all its words are present, in any order. So "no prednisone nebulized budesonide" matches "No nebulized budesonide, just prednisone". "no prednisone eosinophil" and "without prednisone eosinophil" work the same way.

**Correct answers now zeroed:**

| Line | Before | After |
|---|---|---|
| "Prednisone 40 mg instead of the 50 mg" | 1 | **0, unacceptable** |
| "Prednisone 40 mg rather than 50 mg" | 1 | **0, unacceptable** |
| "Lower dose than 50 mg: prednisone 40 mg for 5 days" | 1 | **0, unacceptable** |
| "Prednisone 40 mg instead of the 50 mg, for 5 days" + "Monitor for psychosis" | 2/2 | **1/2** |
| "Budesonide by nebulizer" | 1 | 0 ("nebulizer" is neither "neb" nor "nebulized") |
| "Avoid prednisone if eos low" | 0 | 0 |

The writer's review-set fixes do work:
- "Prednisone 50 mg ... 5 days" with a SMART inhaler line, or with "Discuss with respirology", now scores 0/2.
- SMART alone, "Inhaled budesonide instead", "Discuss with respirology" and "Discuss with her GP" now score 0.
- Natural correct lines score: "Nebulized budesonide", "Pulmicort nebules", "Check eosinophils", "Eos count", "Shared decision making", "Discuss with her and her daughter", "Prednisone 40 mg x 5 days", "Monitor for psychosis" and "Involve psychiatry".

"Methylprednisolone 40 mg IV daily for 5 days" still scores `short` through "40 mg 5 day". The item is prednisone 40 mg. This is minor and was there before this pass.

## 3. The five items to judge on their merits

| Item | Judgment |
|---|---|
| No bare "high co2", history forms used instead | **The choice is sound, but the execution is not.** A bare "high co2" would let "Watch for high CO2" score, so leaving it out is right. The history forms added are too narrow: "High CO2 on past gases" and "Did previous blood gases show a high CO2?" score 0. The writer also kept "high co2 before" and added "hypercapnia before" and "hypercapnic before". Because word order is ignored, these let exactly the monitoring lines the deviation was meant to exclude score ("Check for high CO2 before giving more oxygen", "Watch for hypercapnia before increasing the oxygen"). |
| Signed COPD key "Prednisone 40 mg PO daily for 5 days" scores 1/2 on q4 | **Acceptable.** It is the writer's own keyed `short` item ("if a systemic glucocorticoid is given"), and the r2g review prescribed this. It cannot reach 2/2 without a line that addresses the psychosis. That holds except for "Informed consent for prednisone", which now scores `discuss` through the new "informed consent" phrase. It lifts the signed key to 2/2. Whether consent to prednisone alone counts as "discuss risks and benefits" is doubtful. Tighten it, for example "informed consent" only with "risk" or "daughter", or drop it. |
| New unacceptable "prednisone 50" also catches "Prednisone 40 mg instead of the 50 mg" | **FAIL.** The stem hands the candidate the 50 mg figure, so contrasting 40 against 50 is a natural way to write the correct answer. A marking rule that zeroes correct answers is not fixed by the candidate override. Match forms that carry the repeat instead ("prednisone 50 as before", "same prednisone dose", "prednisone 50 again", "repeat prednisone 50"). Or match "prednisone 50" only on lines without "40". The engine cannot express that last option, so it needs phrase forms. |
| Signed GINA line "Previous intubation or ICU admission" scores 1/3 on q1 | **Acceptable.** Previous intubation is a genuine BTS marker, and the `vent` item names it. The pooled signed HEAD GINA list reaches only 1/3, and the keeper (asthma-copd-09) scores 0 on every question. |
| Negation-carrying phrases in q4 | **FAIL.** See section 2: two anti-key answers go from 0/2 to 2/2. Remove every phrase that contains "no", "avoid", "hold" or "without" from `budes` and `eos`. To rescue "Avoid prednisone, nebulized budesonide", use negation-free phrases the window does not reach, or accept the override. A few correct lines scoring 0 is better than anti-key lines scoring full. |

## 4. Other questions and the SAMP as a whole

- **q2 and q3.** The objects are identical in ac_before.ts and the current file (JSON compare), so the r2g PASS stands. The optional q2 tidy (MDI-with-spacer citation, bare "ophthalmology") is still open.
- **Keeper.** asthma-copd-09 answers score 0 on q1, q2 and q4, and "Ventilatory failure" scores 0 on q3. This confirms the writer's check.
- **Structure and style.** Unchanged since r2g: version 2, `reviewed: false`, same kinds and keyFeatures.

| Q | Verdict |
|---|---|
| q1 | **FAIL (match phrases).** Treatment triplets still score 3/3, one rose from 2/3, and natural history triplets fell to 0/3. |
| q2 | PASS (unchanged since r2g) |
| q3 | PASS (unchanged since r2g) |
| q4 | **FAIL (match phrases, unacceptable).** Negation phrases let anti-key answers score 2/2, and "prednisone 50" zeroes correct 40-versus-50 lines. |
| **asthma-copd-01** | **FAIL, return to writer** |

## 5. D1

The pass changed no keyed decision, so it adds no repeat. docs/DECISIONS.md has no asthma-copd-01 row. Its working-tree diff is a row reorder (shock-09 moved) that the writer did not make. D1 stays at 19 of 20.

## Fixes for the writer (match phrases only)

**q1**
1. `vent`: drop "needed niv", "needed bipap", "required niv", "required bipap", "history of niv", "history of intubation", "home niv" and "home bipap". Replace them with forms whose extra word does not turn up in treatment lines, such as "previous", "prior", "past", "ever", "previously" and "been". Also add "ventilated before", "icu admission", "intubation before" and "bipap at night". Check each against "BiPAP if needed", "NIV may be required", "Start NIV given her history of COPD" and "Send her home on BiPAP".
2. `gas`: drop the "before" forms. Add "high co2 on past", "previous blood gases" (the plural tokenises as "gase"), "old gases", "baseline co2", "baseline pco2", "baseline paco2", "chronic hypercapnia" and "chronically high co2".
3. `drugs`: drop "take morphine", "take hydromorphone", "take oxycodone", "opioid use", "sedative use" and "benzo use", or pair each with a history word. Add "on any sedative", "on opioid" paired with "she" or "home", and "medication opioid".
4. Re-run the section 2 sets. Every treatment triplet must score 0 or 1, and every history triplet must score 3.

**q4**
1. Remove every negation-carrying phrase from `budes` and `eos`.
2. Replace the "prednisone 50" unacceptable with forms that carry the repeat. Check that "Prednisone 40 mg instead of the 50 mg" is not caught.
3. Add "budesonide by nebulizer", "nebulizer budesonide" and "budesonide nebulizer" to `budes`.
4. Tighten or drop "informed consent".
5. Re-run the section 2 q4 sets.

## For the physician

1. asthma-copd-01 fails only on accept-list mechanics. The story, the four keyed decisions and the sources are as passed in r2g.
2. asthma-copd-11 and 13 in the working tree now carry new stories from an unrelated writer. They were not reviewed here.
