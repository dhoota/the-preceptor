# Independent review, group r2s (scoring fixes in src/samps/s03)

Reviewer only, under docs/reviews/REVIEW-RULES.md. I edited no SAMP, source, held-back file or DECISIONS.md. Nothing was committed.

Writer report: docs/reviews/signed-rebuild-r2s.md. Pre-edit snapshots and writer probes: scratchpad/r2s/. My probes: scratchpad/r2s-review/probe.test.ts and probe2.test.ts, with outputs probe-out.md and probe2-out.md.

## Verdicts

| SAMP | Verdict | Reason |
|---|---|---|
| anaphylaxis-02 | FAIL (back to writer, match phrases only) | q4: the new `fluid` phrases that contain a negation word ("no large", "not large", "stop fluid", "no more fluid", "no further fluid") match in any word order. So "Give more fluid, no pressors" now scores the cautious-fluid item. That is the opposite decision, and a wrong answer gains marks |
| arrhythmia-04 | FAIL (back to writer, one flag) | q3 and q4 are sound. q2 still has a `dangerous` catecholamine group, and natural correct reasoning such as "Esmolol, because clenbuterol acts like epinephrine" is zeroed with no override. This is the same defect r2i blocked in q4 |
| arrhythmia-15 | PASS | q3 microgram forms are correct equivalents of the keyed doses. No keyed wrong dose gains marks. Leaving "µg" out is safe |
| anaphylaxis-15 | PASS (unchanged) | Equal to HEAD byte for byte. The writer's reason for not changing q3 is sound: the fix needs a prompt change and a physician ruling |

## Structure and scope

- Diff against the pre-edit snapshots (`diff scratchpad/r2s/*.before.ts`) shows exactly seven changed lines:
  - anaphylaxis-02 q4: three `match` arrays (`chd`, `rhf`, `fluid`).
  - arrhythmia-04 q3: `rhythm` text and match, and one added explanation sentence.
  - arrhythmia-04 q4: the update (colleague sentence removed) and `dangerous: true` removed from the epinephrine group.
  - arrhythmia-15 q3: the atropine `match` array.
- No keyed decision, `required`, `kind`, `keyFeature`, prompt, option, id, source or version changed. All three edited SAMPs are already `reviewed: false`, version 2.
- Byte-for-byte check (writer's splitter, cross-checked by mapping every `git diff HEAD -U0` hunk to its SAMP): anaphylaxis-15 (sha1 b5508ac3ee), arrhythmia-01 (7e2d624f9b) and arrhythmia-06 (301ec47e4a) equal HEAD. Outside-block text is unchanged. The only other differing blocks, anaphylaxis-06 and arrhythmia-04's non-r2s lines, come from r2i and equal the pre-r2s snapshot.
- House style on added lines: no em or en dashes, no semicolons.
- No held-back file was touched. The three edited ids are already held back in r2i.json or g10.json.

## D1

r2s adds no keyed decision, so it cannot add a repeat. docs/DECISIONS.md still lists 19 rows. The working-tree diff to DECISIONS.md only moves the shock-09 row, which is not from r2s. Keeper checks (every pair of keyed answers from the cluster keeper against each changed question): anaphylaxis-02 q4 against anaphylaxis-01 and its cluster reaches 0 of 2. arrhythmia-04 q3 against tox-03 reaches 1 of 2 (tox-03's "unstable VT" cardioversion line now hits `rhythm`, "QRS above 100 ms" hits nothing, so still not full). q4 against tox-03 reaches 0. arrhythmia-15 q3 against tox-05 reaches 0 of 2.

## Per question

| SAMP | Q | Verdict | Notes |
|---|---|---|---|
| anaphylaxis-02 | q4 | FAIL | See below |
| arrhythmia-04 | q2 | FAIL (not touched by r2s, but it blocks landing) | See below |
| arrhythmia-04 | q3 | PASS | Scoring fix, not a re-key |
| arrhythmia-04 | q4 | PASS | The remaining "rather than" gap is acceptable to land |
| arrhythmia-15 | q3 | PASS | Microgram forms correct. Note on shared-line doses below |

### anaphylaxis-02 q4: FAIL

Good parts: "tr", the RV dilation forms and the plural and "cautious or careful bolus" forms all work. All 15 writer probes and my correct-wording probes ("Avoid large fluid boluses", "Small fluid boluses with reassessment", "Dilated RV with severe tricuspid regurgitation") score as they should. "No RV dilation", "RV not dilated" and "No TR" are correctly negated.

The defect: `lineMatches` returns true for any phrase that itself contains a negation word, as long as every word is somewhere in the line, in any order. Five of the new phrases contain "no", "not" or "stop". Each of these wrong lines scored 0 before r2s and now scores the `fluid` item (probe-out.md, probe2-out.md):

| Line | Now |
|---|---|
| RV is preload dependent, give more fluid, no pressors | `fluid` |
| Give more fluid, no vasopressor yet | `fluid` |
| Give large amounts of fluid, not vasopressors | `fluid` |
| Large fluid resuscitation, no inotropes | `fluid` |
| Aggressive fluid resuscitation, do not stop fluids | `fluid` |
| Keep giving fluid, do not stop | `fluid` |

"Give more fluid" is the exact wrong decision this question tests. The bank sweep also shows "No large vessel occlusion" now crediting `fluid`.

**Fix for the writer (match phrases only):** remove "no large", "not large", "stop fluid", "no more fluid" and "no further fluid" from `fluid`. Keep "small boluses", "cautious bolus(es)" and "careful bolus(es)". "Stop fluids" and "no more fluid" will then score 0 and can be overridden, which is the safe side. Probe the six lines above again afterwards. (The existing "avoid large" has the same any-order weakness, for example "Give large amounts of fluid, avoid pressors". It is older than r2s, but the writer should consider removing it for the same reason.)

Pre-existing, not r2s: "Tricuspid valve normal" scores `chd` through the older phrase "tricuspid valve". Advisory.

### arrhythmia-04 q3: PASS, scoring fix

- The HEAD match list already had "arrhythmia" and "dysrhythmia", so "Ventricular arrhythmia" already scored. Naming torsades, VT and VF credits specific forms of the same item. It does not add a new decision.
- Griswold's "life-threatening dysrhythmias" covers ventricular rhythms. q1 already teaches that this patient is at risk of torsades.
- The new text and explanation sentence are accurate: QTc 520 ms and K 2.3 mmol/L are in the stem.
- `required` stays 2. Wrong answers ("Bradycardia", "Heart block", "Sinus bradycardia") still score 0.
- Advisory: bare "polymorphic" credits any line with that word ("Polymorphic rash" scores `rhythm`). No realistic answer to this prompt uses it outside VT, so this does not block. The writer could narrow it to "polymorphic vt" on the next pass.

### arrhythmia-04 q4: PASS

- Making the epinephrine group `unacceptable` without `dangerous` is right. With `required: 1`, the line still scores 0, and the only change is that the candidate can override it. That now matches how norepinephrine was already treated.
- "Phenylephrine rather than epinephrine", "instead of" and "since epinephrine adds beta stimulation" still auto-score 0 but can be overridden to full. Before r2s they zeroed the question with no override. Removing the colleague's suggestion also removes what prompted a candidate to mention epinephrine at all. "Phenylephrine, not epinephrine", "avoid epinephrine" and "epinephrine is contraindicated" score full automatically. Closing the last gap needs an engine change ("rather than" and "instead of" as negations), not a SAMP change. Acceptable to land.
- Removing "A colleague suggests adding an epinephrine infusion" from the update: this is update wording, and it was the fix r2i asked for first. The prompt still asks which vasopressor and why, the key is unchanged, and the explanation still says why epinephrine is wrong. The question loses a lure, but it still tests the same decision. The lure was also a cue that pointed at epinephrine as the wrong answer. PASS.
- Wrong answers still score 0: epinephrine, adrenaline, push-dose epinephrine, dopamine, dobutamine, norepinephrine, milrinone, more fluid, and "epinephrine and phenylephrine together".

### arrhythmia-04 q2: FAIL, blocks landing

r2s left q2 alone. The "Esmolol rather than diltiazem" form scores 0 but is overridable, which is low risk. The real problem is the `dangerous` catecholamine group. The prompt asks "Given the cause of his poisoning", which invites the candidate to name the mechanism, and these correct answers are zeroed with **no override**:

| Line | Now |
|---|---|
| Esmolol, because clenbuterol acts like epinephrine | 0, D |
| Esmolol to block the adrenaline-like beta effect | 0, D |
| Beta blocker to counter the beta agonist, unlike isoproterenol | 0, D |

This is the same class of defect r2i found blocking in q4. arrhythmia-04 lands as one unit, so it should not land with it. **Fix for the writer:** drop `dangerous: true` from the q2 catecholamine group, the same change made in q4. With `required: 1`, "Isoproterenol" still scores 0. Re-probe the three lines above for an overridable 0.

### arrhythmia-15 q3: PASS

- 500, 600 and 1 000 mcg, microgram and ug equal the keyed 0.5, 0.6 and 1 mg. "1,000" tokenises to "1 000", and "micrograms" singularises. All forms score (probes include "1,000 micrograms" and "600ug").
- Wrong doses still miss: 1, 10, 50, 60 and 100 mcg, 5 000, 6 000 and 10 000 mcg, 5 and 6 mg, 50 and 1 ug, "20 mcg/kg", and glycopyrrolate.
- "µg" is safe to leave out. The tokeniser strips the micro sign, so "500 µg" reads as "500 g". Matching that would also credit grams. As it stands, "500 µg" scores 0 on the atropine line and can be overridden, and "500 g" scores 0.
- Shared-line note (engine limit, not a blocker): tokens match in any order. So "Atropine 50 mcg IV and 1000 mL saline" scores `atropine` through "1000 mcg". The same hole already exists at HEAD for the keyed forms: "Atropine 50 mcg and 500 mL" hits "500 mcg", and "Atropine 0.1 mg and 1 L" hits "1 mg". It needs a wrong dose and a matching volume on one line. r2s does not create a new class of error, so it does not block. It is recorded for the engine owner.
- Not covered, advisory: "1 milligram" and "0.5 milligram" score 0 (overridable).
- arrhythmia-01's atropine line is untouched (block equals HEAD).

## Tests

`SAMP_BATCH=s03 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`, run once: 435 passed, 1 failed. The failure is the expected "arrhythmia-06 is marked reviewed only if a physician signed it off", because r2i.json still lists arrhythmia-06. I did not run tsc. Landing safety comes from the clean-worktree checks.

## For the physician

- anaphylaxis-02 q4: should "Stop fluids and start a vasopressor" be a correct answer? r2i treated it as one, but the key text says "give further fluid cautiously". Once the negation phrases are removed, it will score 0 and be overridable. If you want it credited automatically, it needs its own wording, not the order-free negation phrases.
- anaphylaxis-02 q4: the r2i question about trimming `lv` and `tamponade` is still open.
- anaphylaxis-15 q3: should it test Kounis syndrome? If yes, a writer needs to change the prompt. D1 already records it.
- arrhythmia-04 q4: please confirm norepinephrine as unacceptable (carried over from r2i).
- Engine (not SAMP) items: "rather than" and "instead of" are not negations. A phrase that contains a negation word matches in any word order. Dose and volume tokens on one line can combine.
