# Review of signed rebuild r2p (second scoring-fix pass)

Reviewer brief: scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md. Writer report: docs/reviews/signed-rebuild-r2p.md. Requested fixes: docs/reviews/signed-rebuild-r2o-review.md.

**No edits were made.** Every fix below is for a writer. I re-ran the writer's probes (scratchpad/r2p/probe.ts and probe2.ts), and my output of probe.ts is identical to the writer's after.md. My own probes are in scratchpad/r2p-rev/ (probe3.ts and probe4.ts, with their outputs). They call markQuestion and lineMatches on the live SAMP objects and are run with `npx vite-node`.

| SAMP | Verdict |
|---|---|
| pediatric-fever-11 | **FAIL.** "At least 38, overheating" is not a lone case. At least 11 other wrong lines that blame the heat still earn the fever point through the r2o "over 38" phrases, and each scored 0 at HEAD. |
| multiple-trauma-08 | **PASS.** The r2o fixes are applied exactly and work. The right main bronchus line is a scorer limit and is recorded for the physician. |
| infectious-diseases-02 | **PASS.** The hold-antibiotics phrases are restored exactly as r2o asked. The amoxicillin line is correctly left for the physician. |
| multiple-trauma-06 | **FAIL.** This change was not requested. The new "1 mg iv" dangerous phrases zero common correct single-line answers, and those answers cannot be overridden. They also reverse an earlier bank-wide decision. The writer's fallback should land instead, after a writer makes the change and it gets a fresh review. |

## Scope (check 1)

Against the writer's pre-edit copies (scratchpad/r2p/*.ts), the diff is exactly the four lines the writer names:
- pediatric-fever.ts line 1019: the q2 unacceptable item, inside pediatric-fever-11 (block starts at line 980).
- multiple-trauma.ts line 583: the q3 dangerous item, inside multiple-trauma-06 (block starts at line 514).
- multiple-trauma.ts lines 703 and 704: the q2 `above` and `etco2` items, inside multiple-trauma-08 (block starts at line 670).
- infectious-diseases.ts line 174: the q1 hold-antibiotics item, inside infectious-diseases-02 (block starts at line 155).

Against HEAD, `git diff HEAD` on the three files also shows the r2o changes. None of them has landed. They are pediatric-fever.ts line 1012 (fever), multiple-trauma.ts line 706 (`advance`, adding "left endobronchial") and line 714 (explanation "over it" to "over the scope"), and infectious-diseases.ts line 172 (brand-name penicillins). The r2o review checked these, and r2h asked for the explanation change. They are not new in r2p. No item was added or removed, and every item keeps its id and text. No keyed decision, story, prompt, `required` count, source, version or `reviewed` flag changed. No other SAMP in the three files differs.

The multiple-trauma-06 change was not requested in the r2o review. Under rule 4 it is judged on its merits below.

## Tests

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- No command was refused. I did not run tsc (rule 2).

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-11 q1, q3, q4 | PASS | Unchanged. |
| pediatric-fever-11 q2 | **FAIL** | See below. |
| multiple-trauma-06 q1, q2 | PASS | Unchanged. |
| multiple-trauma-06 q3 | **FAIL** | Unrequested dangerous phrases. See below. |
| multiple-trauma-08 q1, q3, q4 | PASS | Unchanged. |
| multiple-trauma-08 q2 | PASS | The r2o fixes work. Scorer limits are recorded below. |
| infectious-diseases-02 q1 | PASS | Restored as asked. |
| infectious-diseases-02 q2 to q4 | PASS | Unchanged. |

## pediatric-fever-11 q2: FAIL

**What works.** Every attribution phrase r2o asked for is in place and does its job. Each line the r2o review listed ("Above 38 due to overheating", "Temp above 38 because she was overdressed", "Hyperthermia from the snowsuit, over 38" and the others) now scores 0/2 as unacceptable. The negated correct lines still earn the fever point: "Fever over 38, not from overheating", "True fever, not due to overheating", "Not because of overheating, it is a true fever", "Temp over 38 not caused by overheating" and "Not due to heat, over 38". The writer was right not to add "from the snowsuit", "heat exposure" or bare "overheating".

**Overridable false flags ("True fever rather than hyperthermia" and similar).** These are acceptable in themselves. The item is not dangerous, so the candidate can override the flag, and bare "hyperthermia" is what stops "Over 38, hyperthermia" from earning a point. The full set I found is "True fever rather than hyperthermia", "Hyperthermia unlikely, true fever", "Hyperthermia excluded, true fever", "Despite being overdressed, rectal 39.4 is a true fever", "True fever even though she was overdressed", "She was overdressed but this is a true fever" and "Not just because she was overheated, true fever". Each scores 0/2 and can be overridden.

**"At least 38, overheating" is not acceptable, because it is not alone.** The writer treats it as the one gap left. The four bare phrases "over 38", "above 38", "more than 38" and "at least 38" make the whole fever item a number check. Any wording of the wrong interpretation that dodges the phrase list scores. Each line below scored 0/2 at HEAD and scores **1/2 (fever)** now:
- "Over 38, overheating"
- "At least 38, overheating"
- "Over 38 but likely overheating"
- "Over 38 secondary to overheating"
- "Over 38 owing to overheating"
- "Over 38 from heat"
- "Above 38 because she was too warm"
- "Over 38 from being bundled"
- "Over 38, bundled up"
- "Over 38 from wrapping"
- "More than 38 from the warm clothing"
- "At least 38 from the snowsuit"

This question tests exactly whether the temperature can be put down to overheating. These lines give the wrong interpretation, and they gain marks against HEAD. The phrase list cannot close this family. "secondary", "owing", "bundled" and "warm" cannot be added as bare words without flagging correct negated lines. The r2o review foresaw this: "If the phrases cannot be made to work, drop 'over 38', 'above 38', 'more than 38' and 'at least 38' again."

**Fix needed (match phrases only, in the `fever` item).** Remove the bare "over 38", "above 38", "more than 38" and "at least 38". A writer may replace them with "fever over 38", "fever above 38", "fever more than 38", "fever at least 38", "still over 38" and "still above 38". I tested that list with lineMatches, keeping r2p's unacceptable list:
- All twelve wrong lines above then score nothing.
- These still earn the fever point: "Temperature over 38 is a fever", "Rectal temp over 38 is a fever at this age", "Over 38 is a fever in an infant", "Fever is 38 or above", "Still over 38 after undressing", "Removed from the snowsuit, still over 38" and "Fever over 38, not from overheating".
- These lose it: "Rectal temp above 38 despite undressing" (it keeps its rectal point), "Not due to heat, over 38" and "Temp over 38 not caused by overheating".
- One wrong line still earns it: "Still over 38 from being bundled". That is narrower than today, and "still" at least points toward persistence.

If the writer prefers, simply going back to HEAD's fever list is also acceptable. Once the bare numbers are gone, the writer can also narrow "overdressed" (for example to "because overdressed" and "from being overdressed"), which removes the "despite being overdressed" false flags. The writer should re-probe.

## multiple-trauma-08 q2: PASS

The r2o fixes are applied exactly: "still in the trachea" and "only in the trachea" are removed, "cuff still in the trachea" and "cuff in the trachea" are added, and bare "misleading" is replaced by the six instrument forms. The writer's results match mine:
- Both capnography-caveat answers now score 3/3 (etco2, above, scope or advance).
- "Capnography confirms the tube is still in the trachea", "EtCO2 shows the tube is still in the trachea, good placement", "The chest tube bubbling is misleading" and "SpO2 is misleading" score 0/3.
- "Chest X-ray misleading" and "Bubbling misleading" also score 0/3.
- "etCO2 misleading", "Normal capnography is misleading" and "The end tidal trace is misleading" each score 1/3 (etco2).
- "The cuff is in the trachea" now scores 1/3 (above), which is correct.

Leaving out the optional "through the tear" was fine, since it was optional.

**"Advance into right main bronchus": a scorer limit, not a blocker.** It scores 1/3 (advance), and so do "Advance further into the right bronchus" and "Advance the tube deeper on the right". I checked the writer's claim. Every phrase that needs "right" together with "advance", "main" or "into" also matches "Advance into the left main bronchus away from the right tear" and "Advance past the tear on the right into the left mainstem", because the matcher ignores word order. No existing unacceptable item fits, and adding an item is out of scope. The fault was already at HEAD, r2p does not make it worse, and a wrong-side line is unlikely when the stem names the right side. Record it for the physician.

**Minor, also recorded, not blocking.** "Cuff in the trachea is correct placement" and "The tube cuff is in the trachea, no problem" score 1/3 (above). The phrase "cuff in the trachea" is what r2o asked for, and HEAD's bare "in the trachea" credited these lines too, so this is narrower than HEAD. Adding "no problem" or "correct placement" to the "Accept the tube position" item would flag correct lines such as "bronchoscopy to confirm correct placement", so I do not ask for it.

## infectious-diseases-02 q1: PASS

The hold-antibiotics list is exactly what r2o asked for. It contains all eleven of HEAD's phrases, plus r2o's "give", "start", "only", "postpone" and "until after" forms, plus "withhold antibiotic until birth". The restored lines with vancomycin on line 1 ("hold antibiotics until delivery", "withhold antibiotics until birth", "antibiotics after delivery", "antibiotics postpartum", and the others) all score 0/2 as dangerous again. "do not postpone antibiotics" and "do not delay antibiotics" still score 1/2. Correct regimens score 2/2: "vancomycin" / "gentamicin", "vancomycin 1 g IV" / "gentamicin 5 mg/kg IV", "clindamycin" / "gentamicin", and "vancomycin" / "continue gentamicin after delivery". The brand-name penicillin line is unchanged from r2o, which the r2o review passed.

**Known false flags, as r2n accepted.** "do not hold antibiotics until delivery", "never withhold antibiotics until delivery", "continue antibiotics after delivery" and "antibiotics continued postpartum if needed" zero the question. The phrases themselves contain "hold" or "withhold", which the matcher treats as always matching, so a negation in front does not help. This is the trade r2n and r2o accepted.

**Pre-existing gaps, not regressions, optional for a later pass.** "hold antibiotics", "treat postpartum", "wait for delivery then treat", "antibiotics after the baby is born" and "no antibiotic until birth" are not flagged. They score 0 for their own line (1/2 overall with vancomycin), exactly as at HEAD.

**Amoxicillin.** "vancomycin (anaphylaxis to amoxicillin)" still zeroes a correct regimen. The writer is right that no phrase can clear it without also clearing a bare "amoxicillin" line, and that dropping a safety phrase is a decision for the physician. Leaving it was correct.

## multiple-trauma-06 q3: FAIL (unrequested change)

The writer added "epinephrine 1 mg iv", "adrenaline 1 mg iv", "epi 1 mg iv" and four 1:10,000 forms to the dangerous item "Epinephrine 1 mg IV push". The r2o review did not ask for this. The g15 reviewer considered the same widening and left it out because of "1 L IV".

**What it catches.** "Epinephrine 1 mg IV", "IV epinephrine 1 mg", "Adrenaline 1mg IV", "Epinephrine 1 mg IV slowly" and "Epinephrine 1:10000 IV" now score 0/3 as dangerous. At HEAD they scored 1/3 (epi).

**What it zeroes.** A dangerous flag zeroes the whole question and cannot be overridden (markShort ignores overrides on dangerous lines). Each of these correct lines scores **0/3**:
- "Epinephrine 0.5 mg IM, 1 L NS IV bolus"
- "Epinephrine 0.5 mg IM and 1 L IV fluid"
- "IM epinephrine 0.5 mg, IV fluids 1 L"
- "Adrenaline 0.5 mg IM, 1 L crystalloid IV"
- "Epi 0.5 mg IM, IV 1 L RL"
- "Epinephrine 0.5 mg IM, IV access, 1 L bolus"
- "Epinephrine 0.5 mg IM x 1, IV fluids" (the "1" in "x 1" is enough)
- "Epinephrine drip 1 mg in 1 L NS IV", "Epinephrine infusion 1 mg in 1000 mL NS IV" and "Epinephrine infusion 1 mg in 100 mL IV at 0.1 mcg/kg/min"
- The combined answer "Anaphylaxis" / "Epinephrine 0.5 mg IM, IV access, 1 L bolus" / "Oxygen", which would otherwise earn 3/3.

**Is zeroing correct answers acceptable here? No.**
- The question counts only the first 3 lines against 10 key items. That pushes candidates to pack actions onto one line. WAO pairs IM epinephrine with the 20 mL/kg bolus in the same sentence, so "IM epinephrine plus 1 L IV" on one line is one of the most natural ways to answer.
- A fully correct candidate losing the whole question, with no override, is a worse error than the current one. Today "Epinephrine 1 mg IV" earns 1 of 3.
- The bank already decided this. docs/reviews/samps-s03.md removed "epinephrine 1 mg iv" from the anaphylaxis dangerous lists because "epinephrine 0.5 mg IM, then 1 L IV bolus" zeroed the question. r2p brings back the pattern that was rejected, in an anaphylaxis question with the same fluid item. (asthma-copd and sob still carry the phrase, where fluids are not keyed alongside.)

**Which version should land: the writer's fallback.** Drop "epinephrine 1 mg iv", "adrenaline 1 mg iv" and "epi 1 mg iv", and keep the four 1:10,000 forms. I tested that list with lineMatches:
- All nine false positives above clear.
- "Epinephrine 1:10000 IV", "Epinephrine 10 mL of 1:10,000 IV" and "Adrenaline 1:10,000 1 mg IV" stay dangerous.
- Negated lines are not flagged: "Epinephrine 1:1000 0.5 mg IM, not 1:10,000" and "Use 1:1000 IM, not epinephrine 1:10000".
- One cost remains: "Epinephrine 0.1 mg IV slowly (1:10,000) if refractory" is flagged dangerous. WAO advises against IV bolus epinephrine for initial treatment, and this question asks for initial management, so I judge that acceptable. The physician should know about it.

A writer must make this change, and it needs a fresh review (rule 1). Reverting line 583 to HEAD is also acceptable if the physician does not want the 1:10,000 forms.

**Pre-existing, unchanged, for the physician.** "Epinephrine 1 mg IM" (twice the maximum dose) earns the epi point. "Epinephrine 1 mg intravenous" and "Epinephrine 1 mg IV" (under the fallback) earn the epi point. "No IV epinephrine 1 mg bolus" earns the fluid point through "bolus".

## Scorer limits (check 4)

| Defect | Where | Block landing? |
|---|---|---|
| Correct text like "Hyperthermia unlikely" or "despite being overdressed" loses its line mark | pediatric-fever-11 q2 | No. The flag can be overridden. Record it. It narrows once the bare "over 38" phrases go. |
| Wrong heat attributions earn the fever point through bare "over 38" style phrases | pediatric-fever-11 q2 | **Yes.** This is not a scorer limit. Removing the phrases fixes it, as above. |
| "Advance into right main bronchus" earns the advance point | multiple-trauma-08 q2 | No. The matcher is order-blind, so no phrase can separate it from correct lines. It was already at HEAD. Record it. |
| "Cuff in the trachea is correct placement" earns the above point | multiple-trauma-08 q2 | No. It is narrower than HEAD, and a fix would flag correct lines. Record it. |
| "do not hold / never withhold / continue antibiotics after delivery" zero the question | infectious-diseases-02 q1 | No. r2n and r2o accepted this. Record it. |
| "vancomycin (anaphylaxis to amoxicillin)" zeroes a correct regimen | infectious-diseases-02 q1 | No. It is the physician's call whether to drop "amoxicillin". Record it. |
| "Epinephrine 1 mg IV" without "push" cannot be flagged without flagging IM epinephrine plus "1 L IV" on one line | multiple-trauma-06 q3 | The limit itself does not block. r2p's attempt to work around it does block, because it zeroes correct answers with no override. Land the fallback and record that "Epinephrine 1 mg IV" earns 1 of 3. |
| "Epinephrine 0.1 mg IV slowly (1:10,000) if refractory" is dangerous under the fallback | multiple-trauma-06 q3 | No. It goes against WAO for initial treatment. Record it. |

## For the physician

- **pediatric-fever-11 q2.** The overheating phrases you were told about now work. But the bare "over 38" phrases added in r2o still give a point to lines like "Over 38 from being bundled" and "Above 38 because she was too warm". A writer should replace them with "fever over 38"-style phrases or remove them. "True fever rather than hyperthermia" loses its line mark, and the candidate can override that.
- **multiple-trauma-06 q3.** Please do not keep "Epinephrine 1 mg IV" as dangerous. It zeroes "Epinephrine 0.5 mg IM, 1 L NS IV bolus" and similar correct lines, with no override, which the s03 anaphylaxis review already rejected. Land only the 1:10,000 phrases. "Epinephrine 1 mg IV" then keeps earning 1 of 3. "Epinephrine 0.1 mg IV slowly (1:10,000) if refractory" will be zeroed. Say if you disagree.
- **multiple-trauma-08 q2.** "Advance into the right main bronchus" earns the advance point. The matcher cannot fix this without penalising "advance into the left main bronchus away from the right tear".
- **infectious-diseases-02 q1.** "hold antibiotics until delivery" is dangerous again, at the known cost of zeroing "do not hold antibiotics until delivery". "vancomycin (anaphylaxis to amoxicillin)" still zeroes a correct regimen. Dropping "amoxicillin" from the dangerous list is your decision.

## Landing decision

multiple-trauma-08 and infectious-diseases-02 may land with their r2p text. pediatric-fever-11 and multiple-trauma-06 may not. Each needs a writer revision limited to the match-phrase changes above, then a fresh review. Until then, HEAD's text of each stays as landed. multiple-trauma-06 and pediatric-fever-11 sit in different files from infectious-diseases-02, but multiple-trauma-08 shares multiple-trauma.ts with multiple-trauma-06. So landing multiple-trauma-08 alone means landing lines 703 and 704 (and r2o's lines 706 and 714) without line 583.
