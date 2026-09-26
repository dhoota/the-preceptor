# Signed rebuild r2p: scoring fixes

Writer pass on three held-back SAMPs, answering docs/reviews/signed-rebuild-r2o-review.md. The only edits are to match phrases in existing accept, unacceptable and dangerous items. No keyed decision, story, prompt, item id, item text, `required`, explanation, source, version or `reviewed` flag changed. No item was added or removed. Nothing is committed.

Probe scripts: scratchpad/r2p/probe.ts and probe2.ts in the session scratchpad. Run them from oral-exam-sim with `npx vite-node`. They call markQuestion on the live SAMP objects. Results before the edits are in before.md and results after are in after.md, in the same folder. No probe file was written in tests/.

Scope: a diff against pre-edit copies shows exactly four changed lines:
- pediatric-fever.ts line 1019: the pediatric-fever-11 q2 unacceptable item.
- multiple-trauma.ts line 583: the multiple-trauma-06 q3 dangerous item.
- multiple-trauma.ts lines 703 and 704: the multiple-trauma-08 q2 `above` and `etco2` items.
- infectious-diseases.ts line 174: the infectious-diseases-02 q1 hold-antibiotics item.

## 1. pediatric-fever-11 q2

Added to the existing non-dangerous item "Overheating alone explains it, so she needs no testing":
- As requested: "from overheating", "due to overheating", "caused by overheating", "because of overheating", "overheated", "hyperthermia", "from overdressing", "overdressed".
- Beyond the brief, following the r2o review's advice to cover the snowsuit and heat lines: "caused by the snowsuit", "due to the snowsuit", "because of the snowsuit", "caused by heat", "due to heat", "because of heat". "from the snowsuit" was not added, because it would flag "removed from the snowsuit, still over 38". "heat exposure" was not added, because it would flag "Heat exposure doesn't explain it" (the negation comes after the phrase).

The four "over 38"-style fever phrases stay. The attribution phrases work, so the fallback was not needed.

| Line | Before | After |
|---|---|---|
| a fever from overheating, over 38 | 1/2 (fever) | 0/2 (unacceptable) |
| Above 38 due to overheating | 1/2 (fever) | 0/2 (unacceptable) |
| Temp above 38 because she was overdressed | 1/2 (fever) | 0/2 (unacceptable) |
| Hyperthermia from the snowsuit, over 38 | 1/2 (fever) | 0/2 (unacceptable) |
| Over 38 but from overheating | 1/2 (fever) | 0/2 (unacceptable) |
| Over 38, caused by the snowsuit | 1/2 (fever) | 0/2 (unacceptable) |
| Temperature more than 38 because of heat exposure | 1/2 (fever) | 0/2 (unacceptable) |
| Over 38 caused by overheating | 1/2 (fever) | 0/2 (unacceptable) |
| Over 38 from overdressing | 1/2 (fever) | 0/2 (unacceptable) |
| She overheated, temp over 38 | 1/2 (fever) | 0/2 (unacceptable) |
| **At least 38, overheating** | 1/2 (fever) | **1/2 (fever), not fixed** |
| Fever over 38, not from overheating | 1/2 | 1/2 (fever) |
| Over 38 so a fever, not explained by overheating | 1/2 | 1/2 (fever) |
| true fever, not hyperthermia | 1/2 | 1/2 (fever) |
| It is not hyperthermia, it is a true fever | 1/2 | 1/2 (fever) |
| Not just overheating, true fever over 38 | 1/2 | 1/2 (fever) |
| True fever, not due to overheating | 1/2 | 1/2 (fever) |
| Still febrile, not simply overheated | 1/2 | 1/2 (fever) |
| Not caused by the snowsuit, true fever | 1/2 | 1/2 (fever) |
| Not because of overheating, it is a true fever | 1/2 | 1/2 (fever) |
| True fever, not simply because of the heat | 1/2 | 1/2 (fever) |
| Temperature over 38 is a fever | 1/2 | 1/2 (fever) |
| Rectal temp over 38 is a fever at this age | 1/2 | 1/2 (fever) |
| Still over 38 after undressing / after the snowsuit was removed | 1/2 | 1/2 (fever) |
| Febrile over 38.0 / Fever is 38 or above | 1/2 | 1/2 (fever) |
| The item's own text | 1/2 | 1/2 (fever) |
| True fever over 38 / Needs urinalysis and urine culture | 2/2 | 2/2 |

Known limits. These are false flags on the non-dangerous item, so the candidate can override them:
- "True fever rather than hyperthermia" now scores 0/2. The matcher does not treat "rather than" as a negation. It comes from bare "hyperthermia", which the brief asked for. Without it, "Over 38, hyperthermia" would earn the fever point.
- "She was overdressed but this is a true fever" and "Not just because she was overheated, true fever" now score 0/2. The negation in the second line is more than three words before "overheated".
- "At least 38, overheating" still earns the fever point. Only bare "overheating" would catch it, and that would flag "not explained by overheating".

## 2. multiple-trauma-08 q2

- `above`: removed "still in the trachea" and "only in the trachea". Added "cuff still in the trachea" and "cuff in the trachea".
- `etco2`: replaced bare "misleading" with "capnography misleading", "capnogram misleading", "etco2 misleading", "end tidal misleading", "co2 misleading" and "trace misleading".
- `advance`: unchanged. See below.
- The optional "through the tear" was not added. It was not in the brief.

| Line(s) | Before | After |
|---|---|---|
| Capnography only shows the tube is in the trachea / Cuff above the tear / Bronchoscope | 2/3 (above, none, scope) | **3/3** (etco2, above, scope) |
| EtCO2 only confirms the tube is in the trachea, not cuff position / Cuff is above the tear / Advance into left main bronchus | 2/3 | **3/3** (etco2, above, advance) |
| Normal EtCO2 only confirms tracheal placement / Cuff above the tear / Bronchoscope | 3/3 | 3/3 |
| Capnography confirms the tube is still in the trachea | 1/3 (above) | **0/3** |
| EtCO2 shows the tube is still in the trachea, good placement | 1/3 (above) | **0/3** |
| Capnography confirms the tube is in the trachea | 0/3 | 0/3 |
| The chest tube bubbling is misleading | 1/3 (etco2) | **0/3** |
| SpO2 is misleading | 1/3 (etco2) | **0/3** |
| The bubbling is misleading, tube is in the right place | 0/3 (unacceptable) | 0/3 (unacceptable) |
| Cuff is still in the trachea | 1/3 (above) | 1/3 (above) |
| The cuff sits in the trachea, above the tear | 1/3 (above) | 1/3 (above) |
| The cuff is in the trachea | 0/3 | 1/3 (above) |
| EtCO2 is misleading here / Capnography is misleading / The normal CO2 trace is misleading / Misleading end-tidal / Misleading capnogram | 1/3 each (etco2) | 1/3 each (etco2) |
| Tube not deep enough / misleading capnography / left endobronchial | 3/3 | 3/3 |
| Tube is too proximal / Capnography cannot localize the cuff / Fiberoptic bronchoscopy | 3/3 | 3/3 |
| Cuff is sitting above the tear, so air is leaking / End tidal only proves tracheal placement / Scope and advance tube into left mainstem | 3/3 | 3/3 |
| Exchange for a double lumen tube / Bronchial blocker / Surgical airway | 0/3 | 0/3 |
| Capnography confirms correct position / Tube is fine / Pull the tube back | 0/3, all unacceptable | 0/3, all unacceptable |

**"Advance into right main bronchus": not fixed, because the matcher cannot separate it.** It scores 1/3 (advance) through "advance". It can only be stopped by a phrase that needs "right" (or "right main") in an unacceptable item. The matcher ignores word order and has no "left" exclusion, so every such phrase also matches correct lines that name the torn side:
- "Advance into the left main bronchus away from the right tear"
- "Advance past the tear on the right into the left mainstem"

Both score 1/3 now. They would drop to 0/3. Plain "advance into the left main bronchus" and "Advance into the left main bronchus, not the right" (negated) would still score. But no existing unacceptable item fits the wording, and adding an item is a structural change, so I made no change. "Right mainstem intubation" already scores 0/3.

## 3. infectious-diseases-02 q1

The hold-antibiotics item is now HEAD's full list plus r2o's safe additions plus "withhold antibiotic until birth":
- Restored from HEAD: "antibiotic after delivery", "antibiotic after birth", "antibiotic postpartum", "hold antibiotic until delivery", "hold antibiotic until birth", "withhold antibiotic until delivery".
- Kept from r2o: the "give ..." and "start ..." forms, "antibiotic only after delivery/birth", "postpone antibiotic", and the "hold/withhold ... until after delivery/birth" forms.
- Kept from HEAD and r2o: "treat after delivery", "wait until delivery", "wait until after delivery", "delay antibiotic", "defer antibiotic".
- Added, as the r2o review asked: "withhold antibiotic until birth".
- The brand-name additions to the dangerous penicillin item are unchanged.

Each row below has vancomycin on line 1.

| Line 2 | r2o | r2p |
|---|---|---|
| hold antibiotics until delivery | 1/2 | **0/2 dangerous** |
| withhold antibiotics until delivery | 1/2 | **0/2 dangerous** |
| hold antibiotics until birth | 1/2 | **0/2 dangerous** |
| withhold antibiotics until birth | 1/2 | **0/2 dangerous** |
| antibiotics after delivery | 1/2 | **0/2 dangerous** |
| antibiotics postpartum | 1/2 | **0/2 dangerous** |
| hold antibiotics until delivery (line 1 "vancomycin and gentamicin") | 1/2 | **0/2 dangerous** |
| hold antibiotics until after delivery / give antibiotics after delivery / start antibiotics after delivery / postpone antibiotics until after birth / wait until after delivery / antibiotics only after delivery | 0/2 dangerous | 0/2 dangerous |
| do not postpone antibiotics / do not delay antibiotics | 1/2 | 1/2 |
| do not hold antibiotics until delivery | 1/2 | 0/2 dangerous (the false flag r2n accepted, back again) |
| continue antibiotics after delivery | 1/2 | 0/2 dangerous (the false flag r2n accepted, back again) |
| no antibiotics until delivery | 1/2 | 1/2 (never flagged; not in brief) |

Regimens, unchanged from r2o:

| Lines | r2p |
|---|---|
| Pip-tazo 4.5 g IV / Augmentin / Ampicillin-sulbactam / amoxicillin / Amoxicillin 2 g IV, each with gentamicin | 0/2 dangerous |
| vancomycin (penicillin anaphylaxis) / gentamicin | 2/2 |
| vancomycin 1 g IV (penicillin anaphylaxis) / gentamicin 5 mg/kg IV | 2/2 |
| clindamycin 900 mg IV q8h / gentamicin 5 mg/kg | 2/2 |
| Vancomycin 20 mg/kg IV / Gentamicin 5 mg/kg IV daily | 2/2 |
| vanc 1 g / gent 390 mg | 2/2 |
| vancomycin, avoid augmentin and pip-tazo / gentamicin | 2/2 |
| vancomycin, no ampicillin / gentamicin | 2/2 |

**The "anaphylaxis to amoxicillin" false flag: not fixed, because it cannot be fixed.** "vancomycin 1 g IV q12h (anaphylaxis to amoxicillin)" / "gentamicin 390 mg IV" and "vancomycin, amoxicillin anaphylaxis" / "gentamicin" still score 0/2 dangerous. The one-word line "amoxicillin" can only be matched by the phrase "amoxicillin". That phrase matches every line that contains the word unless a negation word comes before it, and "anaphylaxis", "allergy" and "to" are not negations. So the allergy line cannot be cleared unless a bare amoxicillin line is also cleared. Following the brief, I did not force it. The physician's choice from the r2o review still stands: drop "amoxicillin" from the dangerous list, and a line that names amoxicillin would then only score 0 for that line.

## 4. multiple-trauma-06 q3

Added to the dangerous item "Epinephrine 1 mg IV push": "epinephrine 1 mg iv", "adrenaline 1 mg iv", "epi 1 mg iv", "epinephrine 1:10000", "adrenaline 1:10000", "epinephrine 1:10,000", "adrenaline 1:10,000".

| Line(s) | Before | After |
|---|---|---|
| Epinephrine 1 mg IV | 1/3 (epi) | **0/3 dangerous** |
| Adrenaline 1 mg IV | 1/3 (epi) | **0/3 dangerous** |
| IV epinephrine 1 mg | 1/3 (epi) | **0/3 dangerous** |
| 1 mg of epinephrine IV | 1/3 (epi) | **0/3 dangerous** |
| Epinephrine 1 mg IV bolus | 1/3 (epi) | **0/3 dangerous** |
| Epinephrine 1:10000 IV | 1/3 (epi) | **0/3 dangerous** |
| Epi 1 mg IV | 0/3 | **0/3 dangerous** |
| Epinephrine 1 mg IV push | 0/3 dangerous | 0/3 dangerous |
| Epinephrine 0.5 mg IM | 1/3 (epi) | 1/3 (epi) |
| Epinephrine 0.5 mg IM thigh, repeat every 5 to 15 min | 1/3 | 1/3 (epi) |
| Epinephrine 0.5 mg IM, not 1 mg IV | 1/3 | 1/3 (epi) |
| Epinephrine 0.5 mg IM, not 1 mg IV push | 1/3 | 1/3 (epi) |
| Avoid epinephrine 1 mg IV | 0/3 | 0/3, not flagged |
| IM epinephrine 0.5 mg of 1 mg/mL | 1/3 | 1/3 (epi) |
| Epinephrine 0.5 mg IM (0.5 mL of 1 mg/mL) | 1/3 | 1/3 (epi) |
| Epinephrine 0.5 mg IM (1:1000) | 1/3 | 1/3 (epi) |
| Epinephrine 0.01 mg/kg IM, max 0.5 mg | 1/3 | 1/3 (epi) |
| Epinephrine infusion 0.1 mcg/kg/min IV if refractory | 1/3 | 1/3 (epi) |
| Start IV epinephrine infusion at 1 mcg/min | 1/3 | 1/3 (epi) |
| IV epinephrine infusion 1 to 10 mcg/min if no response to IM doses | 1/3 | 1/3 (epi) |
| If refractory, IV epinephrine infusion | 1/3 | 1/3 (epi) |
| Epinephrine infusion 1 mg in 1 L NS at 1 mcg/min | 1/3 | 1/3 (epi) |
| Epinephrine 0.5 mg IM / IV access and 1 L NS bolus / Oxygen | 3/3 | 3/3 |
| Crystalloid bolus 1 L IV / Normal saline 1 L IV bolus | 1/3 (fluid) | 1/3 (fluid) |
| Anaphylaxis to cefazolin / Epinephrine 0.5 mg IM thigh / Record the reaction in her handover | 3/3 | 3/3 |

**Known cost, for the physician.** The matcher ignores word order, so a single line that holds "epinephrine", "1", "mg" and "IV" anywhere is flagged. The g15 reviewer predicted this. Two correct wordings are now zeroed, and a dangerous flag cannot be overridden:
- An infusion mix written with IV: "Epinephrine drip 1 mg in 1 L NS IV" and "Epinephrine infusion 1 mg in 1000 mL NS IV, 1 to 10 mcg/min" score 0/3 dangerous. The same mix without "IV" is not flagged. Neither is any rate-based infusion wording.
- IM epinephrine and fluids on one line: "Epinephrine 0.5 mg IM, IV access, 1 L bolus" scores 0/3 dangerous. On separate lines they score 3/3.

The alternative is to leave "Epinephrine 1 mg IV" earning the epinephrine point. If the physician prefers that, remove the three "... 1 mg iv" phrases and keep the 1:10,000 phrases, which had no false flags in the probe.

Pre-existing, out of scope and unchanged: "Epinephrine 1 mg IM" (twice the maximum dose) earns the epinephrine point. "No IV epinephrine 1 mg bolus" earns the fluid point through "bolus".

## Checks

- `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 479 passed.
- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- `npx tsc --noEmit -p .`: exit 0.
- No git write command was run. No command was refused.

## For the physician

- **multiple-trauma-06 q3.** "Epinephrine 1 mg IV" is now dangerous. The price is that an IV infusion mix line ("1 mg in 1 L NS IV") or IM epinephrine combined with "1 L" and "IV" on one line is also zeroed. Please choose whether to keep this trade.
- **multiple-trauma-08 q2.** "Advance into the right main bronchus" still earns the advance point. The matcher cannot fix this without penalising "advance into the left main bronchus away from the right tear".
- **infectious-diseases-02 q1.** "hold antibiotics until delivery" is dangerous again, so "do not hold antibiotics until delivery" and "continue antibiotics after delivery" are zeroed again, as r2n accepted. "vancomycin (anaphylaxis to amoxicillin)" still zeroes a correct regimen. The only fix is to drop "amoxicillin" from the dangerous list, which is your call.
- **pediatric-fever-11 q2.** The overheating attributions no longer score. "True fever rather than hyperthermia" and "She was overdressed but this is a true fever" now lose their line mark, and the candidate can override it. "At least 38, overheating" still earns the fever point.
