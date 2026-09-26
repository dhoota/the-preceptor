# Review of signed rebuild r2o (scoring fixes)

Reviewer brief: scratchpad/signed-rebuild-review-brief.md and docs/reviews/REVIEW-RULES.md. Writer report: docs/reviews/signed-rebuild-r2o.md. Requested fixes: docs/reviews/signed-rebuild-r2h-review.md (pediatric-fever-11, multiple-trauma-08) and docs/reviews/signed-rebuild-r2n-review.md (infectious-diseases-02).

**No edits were made.** Every fix below is for a writer. My probe scripts are in scratchpad/r2o-rev/ (probe.ts, probe2.ts), run with `npx vite-node`. They call markQuestion and lineMatches on the live SAMP objects.

| SAMP | Verdict |
|---|---|
| pediatric-fever-11 | **FAIL.** The new fever phrases credit lines that blame overheating. |
| multiple-trauma-08 | **FAIL.** "only in the trachea" and "still in the trachea" misfire. Bare "misleading" credits wrong lines. |
| infectious-diseases-02 | **FAIL.** The unrequested narrowing of the hold-antibiotics item removed the dangerous flag from its most natural wording. |

## Scope (check 1)

`git diff HEAD` on the three files touches only these lines:
- pediatric-fever.ts line 1012: the q2 `fever` match list.
- multiple-trauma.ts lines 703, 704 and 706: the q2 `above`, `etco2` and `advance` lists. Line 714: one explanation phrase.
- infectious-diseases.ts line 172: the dangerous penicillin list. Line 174: the hold-antibiotics list.

No keyed decision, story, prompt, item id, item text, `required`, source, version or `reviewed` flag changed. No other SAMP in the files differs. The explanation change ("over it" to "over the scope") is exactly what r2h asked for.

## Tests

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- I did not run tsc (optional for reviewers, rule 2).

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-11 q1, q3, q4 | PASS | Unchanged. |
| pediatric-fever-11 q2 | **FAIL** | See below. |
| multiple-trauma-08 q1, q3, q4 | PASS | Unchanged. |
| multiple-trauma-08 q2 | **FAIL** | See below. |
| infectious-diseases-02 q1 | **FAIL** | See below. |
| infectious-diseases-02 q2 to q4 | PASS | Unchanged. |

## pediatric-fever-11 q2: FAIL

The r2h fix was applied as written. Correct wordings now score: "Temperature over 38 is a fever", "Rectal temp over 38 is a fever at this age", "Fever is 38 or above", "Still over 38 after undressing", "Febrile over 38.0" (each 1/2, fever).

**The side effect is a wrong answer gaining marks.** This question tests whether a raised rectal temperature can be put down to overheating. A line that says the temperature comes from overheating gives the wrong interpretation. The number in it does not make it right. The writer calls this defensible. I disagree. It is also wider than the one line in the report. Each of these scored 0/2 at HEAD and now scores 1/2 (fever):
- "a fever from overheating, over 38"
- "Over 38 but from overheating"
- "Above 38 due to overheating"
- "Temp above 38 because she was overdressed"
- "Hyperthermia from the snowsuit, over 38"
- "Over 38, caused by the snowsuit"
- "Temperature more than 38 because of heat exposure"
- "At least 38, overheating"

"Over 38 from bundling" is caught by the existing unacceptable item. "It is not above 38 once corrected" scores 0.

**Fix needed (match phrases only, inside the existing unacceptable item "Overheating alone explains it").** Add "from overheating", "due to overheating", "caused by overheating", "because of overheating", "overheated", "hyperthermia", "from the snowsuit", "from overdressing" and "overdressed". lineMatches probe:
- Flagged: the first five lines above.
- Not flagged: "Fever over 38, not from overheating", "Over 38 so a fever, not explained by overheating", "True fever, not hyperthermia", "Not just overheating, true fever over 38", "True fever, not due to overheating", "Still febrile, not simply overheated", "Rectal temp over 38 is a fever" and the fever item's own text.

The writer should also cover the snowsuit, heat exposure and bare "overheating" lines ("caused by the snowsuit", "because of heat exposure", "38, overheating"), for example with "by the snowsuit" and "heat exposure", and should re-probe. "overheating" alone must not be added, because it would flag "not explained by overheating" (the negation rule only looks back three words from the phrase's first word). Keep the item non-dangerous. If the phrases cannot be made to work, drop "over 38", "above 38", "more than 38" and "at least 38" again. The question was passable without them.

## multiple-trauma-08 q2: FAIL

The requested changes are applied exactly. What now works: "Capnography confirms the tube is in the trachea" no longer scores. "Tube not deep enough" / "misleading capnography" / "left endobronchial" scores 3/3. "Tube is too proximal" / "Capnography cannot localize the cuff" / "Fiberoptic bronchoscopy" scores 3/3. "Cuff is sitting above the tear, so air is leaking" / "End tidal only proves tracheal placement" / "Scope and advance tube into left mainstem" scores 3/3. "Exchange for a double lumen tube" / "Bronchial blocker" / "Surgical airway" scores 0/3. "The bubbling is misleading, tube is in the right place" is unacceptable.

**The "capnography only shows the tube is in the trachea" quirk is a defect, not a harmless re-route.** `above` is listed before `etco2`, and each item scores once. When "only in the trachea" credits the capnography caveat to `above`, the candidate's real cuff line then scores nothing:
- "Capnography only shows the tube is in the trachea" / "Cuff above the tear" / "Bronchoscope": **2/3** (above, none, scope).
- "EtCO2 only confirms the tube is in the trachea, not cuff position" / "Cuff is above the tear" / "Advance into left main bronchus": **2/3**.
- The same answer worded "Normal EtCO2 only confirms tracheal placement" scores 3/3.

That is natural correct wording losing a mark. It also matches airway-37 q3's own explanation wording, so candidates will write it.

**"still in the trachea" credits reassurance answers.** "Capnography confirms the tube is still in the trachea" / "tube is fine" scores 1/3 (above). "EtCO2 shows the tube is still in the trachea, good placement" scores 1/3 (above). This is the same fault r2h removed "in the trachea" to fix. r2h's own recommendation brought it back.

**Bare "misleading" credits wrong answers.** "The chest tube bubbling is misleading" scores 1/3 (etco2), and so does "SpO2 is misleading". Both dismiss the very signs that show the tube is wrong.

**Fixes needed (match phrases only):**
- `above`: remove "only in the trachea" and "still in the trachea". Add "cuff still in the trachea" and "cuff in the trachea". Probe: "Cuff is still in the trachea" and "The cuff sits in the trachea, above the tear" match. "Capnography confirms the tube is still in the trachea", "Capnography only shows the tube is in the trachea" and "EtCO2 only confirms the tube is in the trachea, not cuff position" do not. The two capnography caveat lines then fall to `etco2` ("capnography only", "etco2 only").
- `etco2`: replace "misleading" with "capnography misleading", "capnogram misleading", "etco2 misleading", "end tidal misleading", "co2 misleading" and "trace misleading". Probe: "EtCO2 is misleading here", "Capnography is misleading", "The normal CO2 trace is misleading" and "Misleading end-tidal" match. "The chest tube bubbling is misleading" and "SpO2 is misleading" do not.
- Optional: add "through the tear" to `above`. "Positive pressure going through the tear" scores nothing now.

**Pre-existing, not from r2o, for the physician.** "Advance into right main bronchus" scores the `advance` point via "advance". The right bronchus is the torn side, so this is a wrong answer earning a point. The matcher cannot separate it from "Advance into the left main bronchus away from the right tear", because it ignores word order. So I do not require a phrase fix. "Right endobronchial intubation" and "right mainstem intubation" score 0 already. They could safely be added to an unacceptable item if the physician wants them penalised.

## infectious-diseases-02 q1: FAIL

**Requested brand names: PASS.** The additions are what r2n asked for, plus "piperacillin tazobactam" (redundant with "piperacillin", harmless). "Ampicillin-sulbactam", "cloxacillin" and "Pen G" with gentamicin now score 0/2 as dangerous. "vancomycin, avoid augmentin and pip-tazo" and "vancomycin (no penicillins incl. zosyn)" with gentamicin still score 2/2. Correct regimens score 2/2: "clindamycin 900 mg IV q8h" / "gentamicin 5 mg/kg", "Vancomycin 20 mg/kg IV" / "Gentamicin 5 mg/kg IV daily", "vanc 1 g" / "gent 390 mg".

**Declining "penicillin g" and "iv penicillin": correct.** r2n asked for exactly this restraint. One correction to the report's reasoning: the matcher does not ignore "g". It keeps "g" as a token, so "1 g" in a vancomycin dose supplies the "g" of "penicillin g". The conclusion stands. "Penicillin G 5 MU IV" and "penicillin g" with gentamicin score 1/2. That line earns nothing, but the question is not zeroed. Optional, for a writer to probe: "penicillin mu" flags "Penicillin G 5 MU IV" and does not flag "vancomycin 1 g IV (penicillin anaphylaxis)", "vancomycin IV, penicillin allergy" or "vancomycin 1 g, gentamicin 5 mg/kg, penicillin allergic". Not required.

**Narrowed hold-antibiotics phrases: unrequested change, FAIL.** r2n did not ask for this. It named the false flags on "do not hold antibiotics until delivery", "don't withhold antibiotics until delivery" and "continue antibiotics after delivery", and accepted them. None of those lines names a drug, so a false flag could only turn 1/2 into 0/2. The writer reversed that reviewed judgment. The cost falls on the safety flag. With vancomycin on line 1, these now score **1/2**. At HEAD they scored 0/2 as dangerous:
- "hold antibiotics until delivery"
- "withhold antibiotics until delivery"
- "hold antibiotics until birth"
- "antibiotics after delivery"

"vancomycin and gentamicin" / "hold antibiotics until delivery" also scores 1/2. "hold antibiotics until delivery" is the most natural wording of the dangerous answer, and r2n confirmed that it was caught. The writer is right that no phrase can separate it from "do not hold antibiotics until delivery". The matcher cannot do both, so the choice is which error to accept. Taking the flag off the natural dangerous wording is the wrong side of that choice for a safety item, and the review did not request it. The gain is narrow: "gentamicin, continue antibiotics after delivery" and "gentamicin, do not hold antibiotics until delivery" now score 2/2 instead of 0/2. Both are uncommon lines in a regimen question.

**Does a wrong answer gain marks?** No line that states a wrong answer is credited. But a response that contains the dangerous answer now keeps its other line's mark, where before it was zeroed. Taken with the check that a wrong answer must never gain marks, and the rule that an unsure call fails, this does not pass.

**Fix needed (match phrases only).** Use the writer's new list plus HEAD's phrases. Put back "antibiotic after delivery", "antibiotic after birth", "antibiotic postpartum", "hold antibiotic until delivery", "hold antibiotic until birth" and "withhold antibiotic until delivery", and add "withhold antibiotic until birth". Keep the writer's "give", "start", "only", "postpone" and "until after" additions. They are pure gains ("postpone antibiotics until after birth" is flagged, and "do not postpone antibiotics" is not). The false flags r2n accepted then return, and the For the physician section records them. If the physician prefers the writer's trade, that is the physician's call. A writer should not make it unasked.

**Lines that lose the dangerous flag but score 0 (as the writer asked me to judge):**
- For the brand penicillins that are still unflagged ("penicillin g", "IV penicillin", "amp 2 g IV"): acceptable, and already accepted in r2n.
- For "hold antibiotics until delivery" and the bare "antibiotics after delivery": not acceptable, as above.
- "no antibiotics until delivery" was never flagged (1/2 at HEAD and now). The writer might add "no antibiotic until delivery" and "no antibiotic until birth". A phrase that contains "no" matches regardless of the negation window, so the writer should re-probe that it does not flag a correct line.

**Pre-existing, not from r2o, for the physician.** "vancomycin 1 g IV q12h (anaphylaxis to amoxicillin)" / "gentamicin 390 mg IV" scores **0/2 as dangerous** and cannot be overridden. So does "vancomycin, amoxicillin anaphylaxis". The stem names amoxicillin as the trigger, so candidates will cite it. This is correct natural wording that zeroes the question. It is the same family as r2n's accepted "vancomycin instead of ampicillin", but more likely to be written. One option is to remove "amoxicillin" from the dangerous list. IV amoxicillin is not a chorioamnionitis regimen, and an amoxicillin line would still score 0 for its line. The physician should decide.

## For the physician

- **pediatric-fever-11 q2.** The new "over 38" phrases give a point to lines that blame overheating for the temperature ("Above 38 due to overheating", "Temp above 38 because she was overdressed"). A writer needs to add overheating attribution phrases to the unacceptable item, or remove the "over 38" phrases.
- **multiple-trauma-08 q2.** Writing the capnography caveat as "EtCO2 only confirms the tube is in the trachea" currently takes the cuff point, so a fully correct answer scores 2/3. "The chest tube bubbling is misleading" earns a point. Both need match-phrase fixes. Separately, "Advance into the right main bronchus" earns the advance point. The matcher cannot fix this without penalising correct lines.
- **infectious-diseases-02 q1.** The writer, unasked, stopped "hold antibiotics until delivery" from zeroing the question. That was done to stop "do not hold antibiotics until delivery" and "continue antibiotics after delivery" from being zeroed. I recommend restoring the flag. Please say if you prefer the writer's trade. Also, "vancomycin (anaphylaxis to amoxicillin)" zeroes a correct regimen. Consider dropping "amoxicillin" from the dangerous list.
- Declining "penicillin G" and "IV penicillin" as dangerous phrases was right. Zeroing penicillin G itself would need an order-aware matcher.

## Landing decision

None of the three lands from this pass. The HEAD text of each remains as landed. Each needs a writer revision limited to the match-phrase fixes above, and then a fresh review.
