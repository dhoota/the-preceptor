# Signed rebuild r2o: scoring fixes

Writer pass on three held-back SAMPs. Only match phrases, unacceptable items and one explanation phrase changed. No keyed decision, story, structure, version or `reviewed` flag changed. Nothing is committed.

Sources of the requested fixes: docs/reviews/signed-rebuild-r2h-review.md (pediatric-fever-11, multiple-trauma-08) and docs/reviews/signed-rebuild-r2n-review.md (infectious-diseases-02).

Probe script: scratchpad/r2o/probe.ts, run with `npx vite-node` from the repo root. It calls markQuestion on the live SAMP objects. No probe file was written in tests/.

## pediatric-fever-11 q2 (src/samps/s14/pediatric-fever.ts)

Change: added "over 38", "above 38", "more than 38" and "at least 38" to the `fever` item.

| Line | Before | After |
|---|---|---|
| Temperature over 38 is a fever | 0/2 | 1/2 (fever) |
| It is a fever above 38 | 0/2 | 1/2 (fever) |
| More than 38 rectal is a fever | 1/2 (rectal) | 1/2 (fever) |
| At least 38 rectal, so a fever | 1/2 (rectal) | 1/2 (fever) |
| A fever from overheating | 0/2 | 0/2 |
| febrile from being overdressed | 0/2 | 0/2 |
| fever | 0/2 | 0/2 |
| True fever / 38 or more | 1/2 | 1/2 |

Known side effect, as the r2h reviewer predicted: "a fever from overheating, over 38" now earns the fever point (1/2). The line names a true threshold, so the credit is defensible. The bare wrong answer still scores 0.

## multiple-trauma-08 q2 (src/samps/s14/multiple-trauma.ts)

Changes:
- `above` item: removed "in the trachea". Added "too proximal", "not deep enough", "not far enough", "still in the trachea", "only in the trachea" and "ventilating the injured".
- `etco2` item: added "misleading".
- `advance` item: added "left endobronchial".
- Explanation: "advance the tube over it" is now "advance the tube over the scope".

| Line(s) | Before | After |
|---|---|---|
| Capnography confirms the tube is in the trachea | 1/3 (above) | 0/3 |
| Tube is too proximal | 0/3 | 1/3 (above) |
| Tube not deep enough | 0/3 | 1/3 (above) |
| Tube not far enough in | 0/3 | 1/3 (above) |
| Cuff is still in the trachea | 1/3 | 1/3 (above) |
| Still ventilating the injured bronchus | 0/3 | 1/3 (above) |
| EtCO2 is misleading here | 0/3 | 1/3 (etco2) |
| Left endobronchial intubation | 0/3 | 1/3 (advance) |
| Right endobronchial intubation | 0/3 | 0/3 |
| Too proximal, still ventilating the injured bronchus / EtCO2 is misleading here / Left endobronchial intubation | 0/3 | 3/3 |
| Cuff above the tear / Capnography does not show cuff position / Bronchoscope and advance into left main bronchus | 3/3 | 3/3 |
| Capnography confirms correct position / Tube is fine / Pull the tube back | 0/3, all unacceptable | 0/3, all unacceptable |
| Do not pull the tube back / Withdraw the tube slightly / Bronchial blocker | 0/3 | 0/3 (withdraw unacceptable) |

Note: "Capnography only shows the tube is in the trachea" is credited to `above` (via "only in the trachea"), not to `etco2`. It still earns one point, as before.

## infectious-diseases-02 q1 (src/samps/s12/infectious-diseases.ts)

### Dangerous penicillin item

Added: "pip tazo", "piperacillin tazobactam", "tazocin", "zosyn", "unasyn", "augmentin", "clavulin" and "cloxacillin".

**Not added: "penicillin g" and "iv penicillin".** The matcher ignores word order and ignores "g" as a separate token. Both phrases flag correct lines that name the allergy. The g14b review failed the SAMP for exactly this. Probe with the two phrases (lineMatches, not applied):

| Line | Result with the two phrases |
|---|---|
| vancomycin (penicillin anaphylaxis) | clear |
| vancomycin 1 g IV (penicillin anaphylaxis) | FLAGGED dangerous |
| vancomycin IV, penicillin allergy | FLAGGED dangerous |
| Vancomycin 20 mg/kg IV (anaphylaxis to penicillin) | FLAGGED dangerous |
| clindamycin 900 mg IV, penicillin allergic | FLAGGED dangerous |

The dose-free line would still score 2/2. But a correct regimen with a dose or route would be zeroed and could not be overridden. So these two phrases were left out. "Penicillin G 5 MU IV", "IV penicillin" and "penicillin g" still score 0 for that line (1/2 with gentamicin). They just do not zero the question. The existing "penicillin 5 million" and "penicillin million unit" phrases still catch a dosed penicillin G.

| Line pair (with gentamicin) | Before | After |
|---|---|---|
| pip tazo / Pip-tazo 4.5 g IV / Tazocin / Zosyn / Unasyn / Augmentin / Clavulin / Cloxacillin | 1/2 | 0/2 dangerous |
| piperacillin tazobactam | 0/2 dangerous | 0/2 dangerous |
| vancomycin (penicillin anaphylaxis) / gentamicin | 2/2 | 2/2 |
| vancomycin 1 g IV (penicillin anaphylaxis) / gentamicin 5 mg/kg IV | 2/2 | 2/2 |
| vancomycin 1 g IV q12h / gentamicin 5 mg/kg IV q24h | 2/2 | 2/2 |
| vanc 1 g / gent 390 mg | 2/2 | 2/2 |
| vancomycin, no ampicillin / gentamicin | 2/2 | 2/2 |

### "Hold antibiotics" item: false dangerous flags fixed

Match list changed from broad phrases to specific ones:
- "antibiotic after delivery", "antibiotic after birth" and "antibiotic postpartum" became "give ..." and "start ..." forms, plus "antibiotic only after delivery" and "antibiotic only after birth". "continue antibiotics after delivery" no longer matches.
- "hold antibiotic until delivery", "hold antibiotic until birth" and "withhold antibiotic until delivery" became "hold/withhold antibiotic until after delivery" and "until after birth". A phrase that contains "hold" always matches when its words are present, whatever negation comes before it. Requiring "after" separates "hold antibiotics until after delivery" from "do not hold antibiotics until delivery".
- Added "postpone antibiotic".

| Line (with vancomycin on line 1) | Before | After |
|---|---|---|
| hold antibiotics until after delivery | 0/2 dangerous | 0/2 dangerous |
| withhold antibiotics until after delivery | 0/2 dangerous | 0/2 dangerous |
| give antibiotics after delivery | 0/2 dangerous | 0/2 dangerous |
| start antibiotics after delivery | 0/2 dangerous | 0/2 dangerous |
| postpone antibiotics until after birth | 0/2 dangerous | 0/2 dangerous |
| wait until after delivery | 0/2 dangerous | 0/2 dangerous |
| do not hold antibiotics until delivery | 0/2 dangerous | 1/2 |
| don't withhold antibiotics until delivery | 0/2 dangerous | 1/2 |
| continue antibiotics after delivery | 0/2 dangerous | 1/2 |
| gentamicin, continue antibiotics after delivery | 0/2 dangerous | 2/2 |
| do not delay antibiotics | 1/2 | 1/2 |

Trade-off: two wrong lines lose the dangerous flag. They still score 0 for their line, so no wrong answer gains marks:
- "hold antibiotics until delivery" (without "after"). Its words are a subset of "do not hold antibiotics until delivery", so no phrase can flag one without the other.
- A bare "antibiotics after delivery". Its words are a subset of "continue antibiotics after delivery".

"do not hold antibiotics until after delivery" is still flagged, for the same subset reason.

## Checks

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- `npx tsc --noEmit -p .`: exit 0, no errors.
- Scope: a diff against pre-edit copies shows changed lines only inside the three named blocks (pediatric-fever.ts line 1012, multiple-trauma.ts lines 703, 704, 706 and 714, infectious-diseases.ts lines 172 and 174).

## For the physician

- infectious-diseases-02 q1: "penicillin G" and "IV penicillin" are still not dangerous phrases, because they would zero "vancomycin 1 g IV (penicillin anaphylaxis)". If you want penicillin G itself zeroed, the matcher needs an order-aware rule. That is an engine change, not a match-phrase change.
- infectious-diseases-02 q1: "hold antibiotics until delivery" and a bare "antibiotics after delivery" now score 0 for the line but no longer zero the question. That is the price of no longer zeroing "do not hold antibiotics until delivery" and "continue antibiotics after delivery".
- pediatric-fever-11 q2: "a fever from overheating, over 38" now earns the fever point.
