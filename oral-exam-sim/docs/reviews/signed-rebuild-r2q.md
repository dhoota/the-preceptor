# Signed-duplicate rebuild, writer fix r2q: asthma-copd-01 scoring

Writer label r2q. This round answers the asthma-copd-01 findings in docs/reviews/signed-rebuild-r2g-review.md (q1 and q4 accept lists). File: src/samps/s04/asthma-copd.ts. Nothing was committed. No command was refused.

## Scope

Only the asthma-copd-01 block changed. Within it, only these changed:
- q1 match phrases in `gas`, `vent`, `card` and `drugs`
- q4 match phrases in `budes`, `eos`, `discuss` and `short`
- one new q4 unacceptable
- one added sentence in the q4 explanation

No keyed decision, item text, stem, update, required count, kind, keyFeature, source or title changed. asthma-copd-04, 11 and 13, burns.ts, the held-back files and DECISIONS.md were not touched. The pre-edit copy is scratchpad/r2q/ac_before.ts. A diff against it shows only the lines listed above.

## Changes

### q1 (history that marks hypercapnic risk on oxygen)

- **`card`:** removed "target saturation", "target spo2", "usual target" and "documented target". Added "alert on her chart".
- **`vent`:** every bare treatment word is gone ("niv", "bipap", "bilevel", "noninvasive", "intubat", "ventilated", "mechanical ventilation"). Each phrase now carries a history word:
  - previous, prior or past NIV, BiPAP or bilevel
  - needed, required, history of, home or ever NIV or BiPAP
  - previously intubated, previous, prior or past intubation, ever or been intubated
  - previous ventilation, home ventilation
  
  Forms like "bipap before" were not used. The scorer ignores word order, so "Start BiPAP before she tires" would have scored.
- **`drugs`:** bare drug names are gone ("opioid", "benzodiazepine", "sedative", "morphine", "hydromorphone", "oxycodone", "lorazepam", "zopiclone"). The phrases now read as home medication history:
  - home, take, taking, prescribed, "she on" or "use" with opioid, benzodiazepine, benzo or sedative
  - sedating drug or medication, sleeping pill
  - take or home with a named opioid or hypnotic
  
  A bare "on opioid" was not used, because it would match "morphine based on pain".
- **`gas`:**
  - Added "previous abg", "prior abg", "old abg", "past abg", the matching VBG forms, "prior pco2", "prior paco2", "hypercapnic before" and "hypercapnia before".
  - Added "high co2" only in history forms: "high co2 in the past", "high co2 previously", "known high co2" and "history of high co2". This differs from the review. A bare "high co2" would let monitoring lines score, such as "Repeat gas to look for high CO2". "Previous ABG with high CO2" scores through "previous abg".
  - Replaced bare "co2 retention" with previous, prior, history of and known forms. Before, "Watch for CO2 retention on oxygen" scored.

### q4 (steroid choice after steroid psychosis)

- **`short`:** removed bare "40 mg", "5 day" and "five day". It now needs dose and duration together: "prednisone 40 5 day", "prednisone 40 five day", "40 mg 5 day" and "40 mg five day". "shortest course", "lowest dose" and "lowest effective" are kept.
- **`budes`:** removed bare "budesonide" and "pulmicort", and "inhaled steroid/corticosteroid instead", which a SMART inhaler line could satisfy.
  - It now needs a nebulized form: nebulized or nebulised budesonide, budesonide neb or nebule, Pulmicort neb or nebule, and nebulized steroid, corticosteroid or glucocorticoid.
  - Added negation-carrying forms, for example "avoid prednisone nebulized budesonide" and "no systemic budesonide neb". The engine's three-word negation window otherwise voids "Avoid prednisone, nebulized budesonide".
- **`eos`:** kept "eosinophil" and "eos count". Added negation-carrying forms such as "avoid prednisone eosinophil" and "no prednisone eosinophil" so that "No prednisone unless eosinophils are high" scores.
- **`discuss`:** removed bare "discuss". The phrases now name her, her family or the risks:
  - discuss with daughter, patient or family
  - discuss risk, benefit or option
  - talk with daughter
  - shared or informed decision, informed consent
  - her or patient preference, risk and benefit
  
  "discuss with her" was not used, because the scorer ignores word order and it would match "Discuss with her respirologist".
- **New unacceptable:** "Prednisone 50 mg as before" (match "prednisone 50"). A negated form such as "Not prednisone 50 mg again" is not caught, and still scores through its other content.
- **Explanation:** added one sentence: "Repeating the 50 mg course that caused her psychosis is not acceptable, and a maintenance inhaler alone does not address the steroid decision."

## markQuestion probe

Script: scratchpad/r2q/probe.ts. Output: scratchpad/r2q/probe.out. The script ran with `npx vite-node`. "Before" is the r2g text (scratchpad/r2q/ac_before.ts) and "After" is the current file. Only the first `required` lines count, as in the engine. 0 probe failures.

| Q | Probe | Lines | Before | After | Want | After hits |
|---|---|---|---|---|---|---|
| q1 | treatments (review set) | "Titrate to target saturation 88 to 92%" + "NIV" + "Hydromorphone for pain" | 3/3 | 0/3 | 0 | none |
| q1 | target line alone | "Titrate to target saturation 88 to 92%" | 1/3 | 0/3 | 0 | none |
| q1 | NIV alone | "NIV" | 1/3 | 0/3 | 0 | none |
| q1 | hydromorphone alone | "Hydromorphone for pain" | 1/3 | 0/3 | 0 | none |
| q1 | signed-style set | "Venturi to a target SpO2 88 to 92%" + "BiPAP if pH below 7.35" + "Intubate if she tires" | 2/3 | 0/3 | 0 | none |
| q1 | more treatments | "Start BiPAP before she tires" + "Morphine 2 mg IV based on pain score" + "Lorazepam for anxiety" | 2/3 | 0/3 | 0 | none |
| q1 | monitoring lines | "Watch for CO2 retention on oxygen" + "Repeat ABG in 1 hour" + "Target SpO2 88 to 92%" | 2/3 | 0/3 | 0 | none |
| q1 | history (brief set) | "Previous ABG with high CO2" + "prior NIV or intubation" + "oxygen alert card" | 2/3 | 3/3 | 3 | gas, vent, card |
| q1 | history (r2g set) | "Has she needed BiPAP or been intubated before?" + "Previous blood gases showing CO2 retention" + "Does she carry an oxygen alert card?" | 3/3 | 3/3 | 3 | vent, gas, card |
| q1 | history, drugs | "Is she on opioids or benzodiazepines at home?" + "Kyphoscoliosis or neuromuscular disease" + "Bronchiectasis" | 3/3 | 3/3 | 3 | drugs, wall, bronch |
| q1 | history variants | "Is she a known CO2 retainer" + "Home BiPAP" + "Takes hydromorphone or sleeping pills" | 3/3 | 3/3 | 3 | gas, vent, drugs |
| q1 | history variants 2 | "Ever been intubated in the ICU" + "Alert in her chart with her target saturation" + "Sedating medications" | 2/3 | 3/3 | 3 | vent, card, drugs |
| q4 | pred 50 x5 + SMART (review) | "Prednisone 50 mg PO daily for 5 days" + "Budesonide formoterol maintenance and reliever" | 2/2 | 0/2 | below 2 | unacceptable, none |
| q4 | pred 50 x5 + respirology (review) | "Prednisone 50 mg for 5 days" + "Discuss with respirology" | 2/2 | 0/2 | below 2 | unacceptable, none |
| q4 | signed COPD key + SMART | "Prednisone 40 mg PO daily for 5 days" + "Budesonide formoterol maintenance and reliever" | 2/2 | 1/2 | below 2 | short, none |
| q4 | SMART alone | "Budesonide formoterol maintenance and reliever" + "Budesonide formoterol 2 puffs as needed" | 1/2 | 0/2 | 0 | none |
| q4 | prednisone 50 as before | "Prednisone 50 mg as before" + "Monitor for psychosis" | 1/2 | 1/2 | below 2 | unacceptable, watch |
| q4 | bare 40 mg and 5 day | "Methylprednisolone 40 mg IV" + "Antibiotics for 5 days" | 1/2 | 0/2 | 0 | none |
| q4 | discuss with specialists | "Discuss with respirology" + "Discuss with her GP" | 1/2 | 0/2 | 0 | none |
| q4 | natural (r2g) | "Nebulized budesonide instead of prednisone" + "Check a blood eosinophil count" | 2/2 | 2/2 | 2 | budes, eos |
| q4 | negation, avoid systemic prednisone | "Avoid systemic prednisone, give nebulized budesonide" + "Check eosinophils" | 2/2 | 2/2 | 2 | budes, eos |
| q4 | negation, short window | "Avoid prednisone, nebulized budesonide" + "No prednisone unless eosinophils are high" | 0/2 | 2/2 | 2 | budes, eos |
| q4 | negation, prednisone 50 | "Not prednisone 50 mg again, use Pulmicort nebs" + "Blood eosinophil count" | 2/2 | 2/2 | 2 | budes, eos |
| q4 | discuss and watch | "Discuss risks and benefits with her and her daughter" + "If prednisone is used, monitor for psychosis" | 2/2 | 2/2 | 2 | discuss, watch |
| q4 | short course and psychiatry | "If needed, prednisone 40 mg daily for 5 days" + "Involve psychiatry early" | 2/2 | 2/2 | 2 | short, watch |
| q4 | shared decision and eosinophils | "Shared decision with her and her daughter" + "Eosinophil count to guide steroid" | 2/2 | 2/2 | 2 | discuss, eos |

### Keeper check (asthma-copd-09)

Every keeper answer was fed alone: each short-answer item text and the correct single option. Distinct item hits were then pooled.

| Keeper answers on asthma-copd-01 | Score | Lines that hit |
|---|---|---|
| q1 | 0/3 | none |
| q2 | 0/3 | none |
| q4 | 0/2 | none |
| q3, keeper-style "Ventilatory failure" | 0/1 | none |

### Cluster sets from the r2g probe (all lines counted)

| Set | q1 before | q1 after | q4 before | q4 after | After hits q1 / q4 |
|---|---|---|---|---|---|
| Signed HEAD asthma-copd-01 GINA list | 0/3 | 1/3 | 0/2 | 0/2 | vent / none |
| HEAD first 20 minute orders | 0/3 | 0/3 | 0/2 | 0/2 | none / unacceptable ("Prednisone 50 mg PO") |
| HEAD q4 escalation | 1/3 | 0/3 | 0/2 | 0/2 | none |

"Previous intubation or ICU admission for asthma" now scores `vent` on q1. It is a genuine history marker that BTS names, and it reaches only 1/3. The old bare "intubat" never matched, because the scorer matches whole words.

## Notes for the reviewer

1. The signed COPD key "Prednisone 40 mg PO daily for 5 days" still scores the `short` item, 1 of 2. This follows the review's prescription ("prednisone 40 5 day", "40 mg 5 day"). The item's own text is that regimen, and it cannot reach full marks without a second, case-specific item.
2. **False-positive edge.** "prednisone 50" also catches "Prednisone 40 mg instead of the 50 mg she had before" and "Prednisone 40 mg rather than 50 mg", because the line holds both words and has no negation word. "Prednisone 40 mg, not the 50 mg she had before" is not caught, because the engine's later-word negation applies. The check is in scratchpad/r2q/edge.ts. The candidate override covers the rare false positive.
3. **Deviation from the review.** Bare "high co2" was not added to `gas`, for the reason given under q1. The review's probe line still scores.
4. **Not addressed here.** The optional q2 tidy (the MDI-with-spacer sentence and its citation, and bare "ophthalmology") was outside this brief and is unchanged.

## Checks

- `SAMP_BATCH=s04 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 481/481 passed.
- `npx tsc --noEmit -p .`: clean.
- House style: no em or en dashes and no semicolons in the changed strings.
