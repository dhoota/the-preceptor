# Review of signed rebuild r2u (third scoring-fix pass)

Reviewer brief: scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md. Writer report: docs/reviews/signed-rebuild-r2u.md. Requested fixes: docs/reviews/signed-rebuild-r2p-review.md. Rulings checked: docs/reviews/SCORING-RULINGS.md and the files listed for each id in docs/reviews/RULINGS-BY-SAMP.md.

**No edits were made.** Every fix below is for a writer. I re-ran the writer's probe (scratchpad/r2u/probe.ts), and my output is identical to the writer's probe-out.md. My own probes are in scratchpad/r2u-rev/ (probe-rev.ts and probe-rev2.ts, with their outputs). They call markQuestion on the live SAMP objects, with HEAD's match lists put back in a copy of each question for comparison, and are run with `npx vite-node`.

| SAMP | Verdict |
|---|---|
| pediatric-fever-11 | **FAIL.** The new "still over 38" and "still above 38" phrases let a whole family of wrong heat-attribution lines earn the fever point. The new "fever over 38" forms let "Over 38 but not a true fever, bundled" earn it too. Each of these scored 0 at HEAD. |
| multiple-trauma-06 | **FAIL.** Ruling 1 is now respected, and the "1 mg iv" phrases are gone. But the comma forms "epinephrine 1:10,000" and "adrenaline 1:10,000" tokenize to "1", "10" and "000". They zero correct IM lines such as "Epinephrine 1:1,000 0.5 mg IM, repeat in 10 minutes", with no override. |
| multiple-trauma-08 | **Still intact (r2p PASS stands).** Lines 703, 704, 706 and 714 are byte-identical to the pre-edit copy. |
| infectious-diseases-02 | **Still intact (r2p PASS stands).** infectious-diseases.ts was last written at 17:26:58, before the r2p review. It differs from the r2p pre-edit copy only at line 174, which is the change r2p passed. |

## Scope (check 1)

- `diff` against scratchpad/r2u/pediatric-fever.pre.ts shows one changed line, 1012, the `fever` item of pediatric-fever-11 q2. Only match phrases changed.
- `diff` against scratchpad/r2u/multiple-trauma.pre.ts shows one changed line, 583, the dangerous item of multiple-trauma-06 q3. Only match phrases changed.
- The pre-edit copies match the sha256 values in pre-sha.txt. s14/index.ts still has its recorded sha256.
- multiple-trauma.ts lines 703, 704, 706 and 714 are byte-identical to the pre-edit copy (checked one by one with `cmp`).
- The changes are exactly the ones the r2p review asked for, so rule 4 (unrequested changes) does not apply. The writer did not narrow "overdressed". That was optional and is fine.

## Tests

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- No command was refused. I did not run tsc (rule 2).

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-11 q1, q3, q4 | PASS | Unchanged. |
| pediatric-fever-11 q2 | **FAIL** | Wrong lines gain the fever point against HEAD. See below. |
| multiple-trauma-06 q1, q2 | PASS | Unchanged. |
| multiple-trauma-06 q3 | **FAIL** | The comma 1:10,000 phrases zero correct IM lines. See below. |
| multiple-trauma-08 q1 to q4 | PASS (unchanged since r2p) | Intact. |
| infectious-diseases-02 q1 to q4 | PASS (unchanged since r2p) | Intact. |

## pediatric-fever-11 q2: FAIL

**What works.** All 12 wrong lines from the r2p review now score 0/2. The correct lines the writer lists still earn the fever point.

**Residuals the writer lists, judged:**
- "Not due to heat, over 38" and "Temp over 38 not caused by overheating" now score 0/2. **Acceptable.** They also scored 0/2 at HEAD, so nothing is lost against the landed text.
- "Still over 38 from being bundled" still earns the fever point. **Not acceptable.** It scored 0/2 at HEAD. It is not a lone case. Each line below scores **1/2 (fever)** under r2u and 0/2 at HEAD:
  - "Still over 38 from being bundled"
  - "Still over 38, overheating"
  - "Still over 38, likely from the snowsuit"
  - "Still above 38 because she was too warm"
  - "Still over 38, bundled"
  - "Still above 38, environmental"
  - "Still over 38 but just from the warm clothes"
  - "Still above 38 from wrapping, reassure"
  - "Still over 38, probably heat, recheck later"

  This is the same family r2p failed for, with "still" in front. "still over 38" means the number persisted, not that it is a true fever. A candidate who blames the heat can still write it.

**A second hole the r2p review did not probe.** The matcher ignores word order (SCORING-RULINGS ruling 3), and a negation only cancels a later word when it sits within two words of it. "not a true fever" puts "a true" between "not" and "fever". So "fever over 38" matches lines that deny a fever. Each line below scores **1/2 (fever)** under r2u and 0/2 at HEAD:
- "Over 38 but not a true fever, bundled"
- "Over 38 but not a real fever, from the snowsuit"
- "Temp over 38, not a genuine fever, overheating"
- "Fever over 38 from the snowsuit" and "Fever above 38 from being bundled". These give a point for blaming the snowsuit.

Dropping only the "still" forms does not fix this. I tested that list and the five lines above still score 1/2. Any "fever … 38" phrase has the same gap.

**Fix needed (match phrases only, `fever` item, line 1012).** Put back HEAD's fever list: "true fever", "real fever", "genuine fever", "still febrile", "still has a fever", "38.0", "38 or more", "38 or higher". The r2p review already named this as acceptable. Keep r2p's unacceptable list on line 1019 as it is. Under HEAD's list, none of the wrong lines above earns a point. The cost is that "Fever over 38" and "Still over 38 after undressing" get no fever point, exactly as at HEAD. A writer makes the change, and it needs a fresh review (rule 1).

**Pre-existing, for the physician, not caused by r2u.** "Fever", "She has a fever", "This is a fever", "Febrile" and "Fever of 39.4" earn no fever point at HEAD, at r2u or under the fix. Bare "fever" or "febrile" would also credit "Fever from the snowsuit"-type lines that avoid the unacceptable phrases. Whether to accept that trade is the physician's call.

## multiple-trauma-06 q3: FAIL

**Ruling 1 (check 3).** r2u complies. "epinephrine 1 mg iv", "adrenaline 1 mg iv" and "epi 1 mg iv" are gone. What is left is IV push forms, 1:10,000 forms, "code dose" and "cardiac arrest dose", which is what ruling 1 allows. The writer's report names the reversion, and the ruling itself records it as reverted in r2u. The r2p false positives ("Epinephrine 0.5 mg IM, 1 L NS IV bolus" and the others) score 1/3 again. "Epinephrine 0.5 mg IM, then 1 L IV bolus", the line behind ruling 1, scores 1/3.

**New defect: the comma 1:10,000 phrases.** The tokenizer turns "epinephrine 1:10,000" into "epinephrine", "1", "10", "000". The "1:10000" forms are safe, because they give the single token "10000". The matcher ignores word order, so the comma form matches any epinephrine line that has "1,000" or "1:1,000" and a "10" anywhere. Each correct line below scores **0/3 (DANGEROUS)** under r2u and 1/3 (epi) at HEAD. None of them can be overridden:
- "Epinephrine 1:1,000 0.5 mg IM, repeat in 10 minutes"
- "Epinephrine 0.5 mg IM (1:1,000), repeat every 5 to 10 minutes"
- "Epinephrine 1:1,000, 0.5 mL IM, may repeat after 10 min"
- "Adrenaline 1:1,000 0.5 mg IM, repeat at 10 min"
- "Epinephrine 0.5 mg IM, repeat every 10 min, 1,000 mL NS bolus"
- "Epinephrine 0.5 mg IM, 1,000 mL crystalloid over 10 min"

This is the harm ruling 1 exists to prevent: a correct IM epinephrine line, often with its fluid bolus on the same line, zeroes the question. "1:1,000" is the usual way to write the IM concentration, and WAO repeats the dose every 5 to 15 minutes, so these are natural answers. The r2p review endorsed the four 1:10,000 forms after testing only negated lines, so it did not catch this. Nowhere else in the bank uses the comma form (grep of src/samps).

**Residuals the writer lists, judged:**
- "Epinephrine 0.1 mg IV slowly (1:10,000)" is zeroed. **Acceptable in itself.** Ruling 1 names 1:10,000 forms as the ones to flag. The question asks for initial management, and WAO advises against IV bolus epinephrine at that stage. It is caught only by the comma phrase "epinephrine 1:10,000", though, which has to go (below). After the fix it earns 1/3 (epi), as at HEAD. The physician should know that.
- "Epinephrine 1 mg IV" gets 1/3. **Acceptable, and required.** Ruling 1 forbids flagging it. It scored the same at HEAD.
- A bare "epi" is not matched. **Pre-existing, not blocking.** "Epi 0.5 mg IM" scores 0/3 at HEAD and at r2u. r2u did not cause it, and it does not affect whether line 583 may land. A writer could add "epi" to the `epi` item in a later pass. A negated "no epi" would still be cancelled by the negation window.

**Fix needed (match phrases only, dangerous item, line 583).** Remove "epinephrine 1:10,000" and "adrenaline 1:10,000". Keep "1 mg iv push", "iv push 1 mg", "epinephrine 1:10000", "adrenaline 1:10000", "code dose" and "cardiac arrest dose". Then:
- The six lines above go back to 1/3 (epi).
- "Epinephrine 1:10000 IV" and "Adrenaline 1:10000" stay dangerous.
- "Epinephrine 1:10,000 IV", "Epinephrine 10 mL of 1:10,000 IV" and "Epinephrine 0.1 mg IV slowly (1:10,000)" earn 1/3 (epi), as at HEAD.

Reverting line 583 to HEAD is also acceptable. A writer makes the change, and it needs a fresh review (rule 1). The writer should probe "1:1,000 … 10" and "1,000 mL … 10" lines along with the earlier set.

**Pre-existing, unchanged, for the physician.** "Epinephrine IV push" with no dose is not flagged and earns 1/3. "Epinephrine 1 mg IM" earns the epi point. "Avoid IV push epinephrine, give 0.5 mg IM" earns nothing, because the negation window also cancels "epinephrine".

## Check 2 summary: wrong answers and natural correct wording

| Question | Wrong answers gaining marks against HEAD | Natural correct lines losing marks against HEAD |
|---|---|---|
| pediatric-fever-11 q2 | **Yes**: 9 "still over/above 38" heat lines and 5 order-blind "fever over 38" lines | None |
| multiple-trauma-06 q3 | None | **Yes**: 6 IM lines with "1:1,000" or "1,000 mL" and a "10", zeroed as dangerous |

## For the physician

- **pediatric-fever-11 q2.** Adding "over 38"-style phrases to the fever point has not worked in three passes. Each form lets candidates who blame the snowsuit score, for example "Still over 38 from being bundled" and "Over 38 but not a true fever, bundled". I recommend going back to the landed fever list. "Fever over 38" and "Still over 38 after undressing" then earn no fever point, as today.
- **multiple-trauma-06 q3.** The IV "1 mg" phrases are gone, as ruling 1 requires. But "epinephrine 1:10,000" as written also catches "Epinephrine 1:1,000 0.5 mg IM, repeat in 10 minutes" and zeroes the question. Keep only the no-comma "1:10000" forms. "Epinephrine 1:10,000 IV" then earns 1 of 3, as today, and "Epinephrine 1 mg IV" earns 1 of 3, as ruling 1 requires.
- **Engine note.** "1:10,000" and "1,000" split into separate number tokens, so no match phrase can tell "1:10,000" from "1:1,000 … 10". Any ratio or thousands-separated number in a match phrase has this problem. This is worth adding to SCORING-RULINGS.md.
- **multiple-trauma-08 and infectious-diseases-02** are unchanged since their r2p PASS.

## Landing decision

multiple-trauma-08 and infectious-diseases-02 may land with their r2p text, as r2p decided. pediatric-fever-11 and multiple-trauma-06 may not land with their r2u text. Each needs the one-line match-phrase change above from a writer, then a fresh review. Until then, HEAD's text of each stays as landed. multiple-trauma-08 shares multiple-trauma.ts with multiple-trauma-06, so landing it alone means landing lines 703, 704, 706 and 714 without line 583.
