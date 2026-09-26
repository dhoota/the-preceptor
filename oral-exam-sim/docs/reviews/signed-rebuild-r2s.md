# Writer report, group r2s (scoring fixes)

Writer only. Nothing was committed. Every change below needs a fresh independent review under docs/reviews/REVIEW-RULES.md.

Scope was label r2s: match phrases, accept, unacceptable and dangerous items, update wording and explanation wording, inside anaphylaxis-02, arrhythmia-04, anaphylaxis-15 and arrhythmia-15. No keyed decision, story, `required`, `kind` or `keyFeature` changed. No other SAMP, held-back file or DECISIONS.md was touched.

## Changes

### anaphylaxis-02 q4 (src/samps/s03/anaphylaxis.ts). Source: signed-rebuild-r2i-review.md

- `chd` match: added "tr", so "Severe TR" scores.
- `rhf` match: added "dilated rv", "rv dilated", "rv dilation", "rv dilatation", "dilated right ventricle", "right ventricular dilation", "right ventricular dilatation".
- `fluid` match: added "small boluses", "cautious bolus", "cautious boluses", "careful bolus", "careful boluses", "no large", "not large", "stop fluid", "no more fluid", "no further fluid". The tokeniser reads "boluses" as "boluse" and "bolus" as "bolu", so the plural needs its own phrase.
- Not changed: the review's optional point about trimming `lv` and `tamponade`. That changes the accept list's coverage and the review left it to the writer and physician. It stays for the physician.

### arrhythmia-04 (src/samps/s03/arrhythmia.ts). Source: signed-rebuild-r2i-review.md

- **q4 update.** Removed "A colleague suggests adding an epinephrine infusion." The update now ends at the BP after 3 L of crystalloid. The prompt ("Which vasopressor would you choose for him, and why?") and the key (phenylephrine or vasopressin) are unchanged.
- **q4 unacceptable.** The epinephrine, dopamine, dobutamine and isoproterenol group is now `unacceptable` without `dangerous`. It still scores 0 on its own line, but it no longer zeroes the question, and the candidate can override a mis-flag.
- **Limit that remains.** The matcher does not treat "rather than" or "instead of" as a negation. So "Phenylephrine rather than epinephrine" and "Phenylephrine. Epinephrine would worsen tachycardia" still auto-mark 0 on that line. They no longer zero the question, and a candidate override now gives full marks (probed). "Phenylephrine, not epinephrine" and "avoid epinephrine" forms auto-score full. Auto-crediting the "rather than" forms would need an engine change, which is outside r2s.
- **q3 `rhythm` item.** Added "torsade", "torsades", "ventricular tachycardia", "vt", "polymorphic", "ventricular fibrillation", "vf". The item text now reads "Recurrent tachyarrhythmia, such as atrial fibrillation, or a ventricular arrhythmia such as torsades". This is the same item, not a new keyed decision. `required` stays 2.
- **q3 explanation.** Added one sentence: "His QTc of 520 ms and potassium of 2.3 mmol/L add a risk of torsades de pointes." It links q3 to the q1 findings (Drew 2010, already cited in q1). Griswold's "life-threatening dysrhythmias" already covers the item.
- Not changed: q2's advisory ("Esmolol rather than diltiazem" scores 0, and the dangerous catecholamine group has the same "rather than" trap). It was not in this brief.

### arrhythmia-15 q3 (src/samps/s03/arrhythmia.ts). Source: scratchpad/physician-triage.md

- The atropine dose group now also accepts "600 mcg", "1000 mcg", "1 000 mcg", "500 microgram", "600 microgram", "1000 microgram", "1 000 microgram", "500 ug", "600 ug" and "1000 ug". These are the microgram forms of the keyed 0.5 mg, 0.6 mg and 1 mg. "1,000 mcg" reads as "1 000 mcg".
- Wrong doses still miss: 1, 10, 50 and 100 mcg, 5 mg and 6 mg all score 0 for the atropine line.
- Not covered: "µg" written with the micro sign. The tokeniser strips it and leaves "500 g", and matching that would also accept grams.
- arrhythmia-01 is untouched. Its atropine line is byte-identical to HEAD (see below).

### anaphylaxis-15 q3. Not changed

- The g10 review and the triage row say the same thing. The accept list credits "STEMI", "ACS" or "MI" alone, and the fix they name is to **change the prompt** to ask for the diagnosis that links the sting and the ECG. Both make it conditional ("if q3 should test Kounis") and leave it to the physician to rule on the D1 repeat, which is recorded in DECISIONS.md.
- The current prompt asks "What is the most likely cause of his shock?". An inferior STEMI with cardiogenic shock is a correct answer to that prompt. Making Kounis mandatory in the accept list without changing the prompt would zero correct answers. Changing the prompt is outside r2s.
- So the intended fix is unclear within this label, and I did not force it. It needs the physician to say whether q3 should test Kounis. If yes, it needs a prompt change by a writer allowed to make it.

## Block check against HEAD

My own splitter (scratchpad/r2s/blocks.py) compares every `  {` ... `  },` block in each file with `git show HEAD:` and with a snapshot taken before any r2s edit.

| File | Blocks (HEAD, before, now) | Differ from HEAD | Changed by r2s | Text outside blocks |
|---|---|---|---|---|
| anaphylaxis.ts | 15, 15, 15, same order | anaphylaxis-02, anaphylaxis-06 | anaphylaxis-02 | unchanged |
| arrhythmia.ts | 15, 15, 15, same order | arrhythmia-04, arrhythmia-15 | arrhythmia-04, arrhythmia-15 | unchanged |

| Block | Result |
|---|---|
| arrhythmia-01 | Equal to HEAD, 5822 bytes, sha1 7e2d624f9b |
| arrhythmia-06 | Equal to HEAD, 6397 bytes, sha1 301ec47e4a |
| anaphylaxis-06 | Differs from HEAD because of the earlier r2i writer. Unchanged by r2s (equal to the pre-r2s snapshot) |
| anaphylaxis-15 | Equal to HEAD, sha1 b5508ac3ee |

## Tests

- `SAMP_BATCH=s03 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 435 passed, 1 failed. The failure is the expected "arrhythmia-06 is marked reviewed only if a physician signed it off", because held-back/r2i.json still lists arrhythmia-06.
- `npx tsc --noEmit -p .`: clean.
- The house-style check on the changed lines found no em or en dashes and no semicolons.

## Probe table

The script is scratchpad/r2s/r2s-probe.test.ts, run with scratchpad/r2s/vitest.r2s.config.mjs. Each row is one `markQuestion` call. Flags per line: item id, U (unacceptable), D (dangerous), or - (no match). The pre-edit run is in scratchpad/r2s/probe-out-before.md: 22 rows failed there, and 0 fail now. The anaphylaxis-02 row "Severe TR / Give a 2 L bolus" expects partial marks, because the 2 L bolus is correctly unacceptable.

| SAMP | Q | Lines | Expect | Score | Result |
|---|---|---|---|---|---|
| anaphylaxis-02 | q4 | Severe TR / Small boluses | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | Carcinoid heart disease / Cautious boluses | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | Dilated RV / Severe TR | full | 2/2 [rhf,chd] | ok |
| anaphylaxis-02 | q4 | Severe tricuspid regurgitation / Small cautious fluid boluses and reassess | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | RV dilated from volume overload / No large boluses | full | 2/2 [rhf,fluid] | ok |
| anaphylaxis-02 | q4 | Right ventricular dilation / Not large volumes of fluid | full | 2/2 [rhf,fluid] | ok |
| anaphylaxis-02 | q4 | RV dilation with severe TR / Stop fluids | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | TR from carcinoid valve disease / Careful boluses only | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | Severe TR / Give a 2 L bolus | part | 1/2 [chd,U] | ok |
| anaphylaxis-02 | q4 | Large bolus of crystalloid / Wide open fluids | zero | 0/2 [U,U] | ok |
| anaphylaxis-02 | q4 | Hypovolemia / Give more fluid | zero | 0/2 [-,-] | ok |
| anaphylaxis-02 | q4 | Tamponade / Pericardiocentesis | zero | 0/2 [-,-] | ok |
| anaphylaxis-02 | q4 | Normal RV / Large boluses | zero | 0/2 [-,-] | ok |
| anaphylaxis-02 | q4 | Severe TR / No large bolus | full | 2/2 [chd,fluid] | ok |
| anaphylaxis-02 | q4 | Trauma / Large bolus | zero | 0/2 [-,U] | ok |
| arrhythmia-04 | q3 | Vitamin deficiency / Tremor | zero | 0/2 [-,-] | ok |
| arrhythmia-04 | q3 | Torsades de pointes / Rhabdomyolysis | full | 2/2 [rhythm,rhabdo] | ok |
| arrhythmia-04 | q3 | Ventricular tachycardia / Myocardial infarction | full | 2/2 [rhythm,mi] | ok |
| arrhythmia-04 | q3 | Polymorphic VT / Hypophosphatemia | full | 2/2 [rhythm,lytes] | ok |
| arrhythmia-04 | q3 | VF / Rhabdo | full | 2/2 [rhythm,rhabdo] | ok |
| arrhythmia-04 | q3 | Ventricular fibrillation / Prolonged toxicity from a long half life | full | 2/2 [rhythm,prolonged] | ok |
| arrhythmia-04 | q3 | Torsade / Troponin rise from MI | full | 2/2 [rhythm,mi] | ok |
| arrhythmia-04 | q3 | Serotonin syndrome / Hepatitis | zero | 0/2 [-,-] | ok |
| arrhythmia-04 | q3 | Bradycardia / Hyperkalemia | zero | 0/2 [-,-] | ok |
| arrhythmia-04 | q3 | Stroke / Seizures | zero | 0/2 [-,-] | ok |
| arrhythmia-04 | q4 | Phenylephrine, a pure alpha agonist with no beta effect | full | 1/1 [alpha] | ok |
| arrhythmia-04 | q4 | Vasopressin, no beta activity | full | 1/1 [vasopressin] | ok |
| arrhythmia-04 | q4 | Phenylephrine, not epinephrine, because beta effects worsen it | full | 1/1 [alpha] | ok |
| arrhythmia-04 | q4 | Phenylephrine because it is a pure alpha agonist | full | 1/1 [alpha] | ok |
| arrhythmia-04 | q4 | Epinephrine infusion | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Adrenaline | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Dopamine | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Norepinephrine | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Dobutamine for inotropy | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Epinephrine and phenylephrine together | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | More fluid | zero | 0/1 [-] | ok |
| arrhythmia-04 | q4 | Phenylephrine rather than epinephrine | zero | 0/1 [U] | ok |
| arrhythmia-04 | q4 | Phenylephrine. Epinephrine would worsen tachycardia | zero | 0/1 [U] | ok |
| arrhythmia-15 | q3 | Atropine 500 mcg IV / Saline bolus | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 600 mcg IV / IV fluids | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 1000 mcg IV / Normal saline | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 1,000 mcg IV / Crystalloid | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 500mcg IV / Fluid bolus | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 500 micrograms IV / Saline | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 600 micrograms IV / Saline | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 500 to 1000 mcg IV / Saline | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 1 mg IV / Saline | full | 2/2 [atropine,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 50 mcg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 100 mcg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 5 mg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 1 mcg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 10 mcg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 6 mg IV / Saline | part | 1/2 [-,fluid] | ok |
| arrhythmia-15 | q3 | Atropine 50 mcg / Pralidoxime | zero | 0/2 [-,U] | ok |
| arrhythmia-15 | q3 | Pralidoxime 30 mg/kg / Digoxin Fab | zero | 0/2 [U,U] | ok |
| arrhythmia-04 | q4 | Phenylephrine rather than epinephrine (candidate overrides to correct) | full | 1/1 | ok |
| arrhythmia-04 | q4 | Phenylephrine. Epinephrine would worsen tachycardia (candidate overrides to correct) | full | 1/1 | ok |
| arrhythmia-04 | q4 | Phenylephrine instead of epinephrine because of beta effects (candidate overrides to correct) | full | 1/1 | ok |

mismatches: 0
