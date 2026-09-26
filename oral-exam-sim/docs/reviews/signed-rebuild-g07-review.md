# Review of signed-duplicate rebuild, group g07

Reviewed: asthma-copd-01, asthma-copd-04, asthma-copd-11, asthma-copd-13 (src/samps/s04/asthma-copd.ts) and burns-01, burns-06 (src/samps/s04/burns.ts). Nothing was patched. Every SAMP fails decision D1, and each one needs new keyed decisions from a writer. Nothing was committed.

## How D1 was applied

D1 (docs/DECISIONS.md) allows one repeat per SAMP. That repeat must be of a decision already keyed in a signed-off SAMP, and the decision must itself be the literal wording of a key feature (src/blueprint/priorityTopics.ts). Any second repeat fails. So does any repeat whose decision is not key-feature wording.

The writer's decision search used scratchpad/allkeys.tsv. That file holds key text only, not the reason for the key. Several repeats below have different key wording but the same decision for the same reason, and the search missed them. I found them by reading the comparator SAMPs in full.

## Summary

| SAMP | Verdict | Repeats found | D1-eligible |
|---|---|---|---|
| asthma-copd-01 | FAIL | q1, q2, q4 | q1 only |
| asthma-copd-04 | FAIL | q1, q2, q3 | q1 or q2, not both |
| asthma-copd-11 | FAIL | q2, q3 | q2 only |
| asthma-copd-13 | FAIL | q2, q3 | q2 or q3, not both |
| burns-01 | FAIL | q1, q3, q4 | q1 or q4, not both |
| burns-06 | FAIL | q4 | none |

## Structure (all six)

PASS. Each SAMP keeps its id, topic, question count, question kinds and keyFeatures. Each is version 2 with `reviewed: false`. All six are in src/samps/held-back/g07.json. `git diff HEAD` touches only these six SAMPs plus 14 new Source constants. No existing constant changed. PE_COPD, THROMBOSIS_CANADA and CCS_HF in asthma-copd.ts are now unused. That is harmless and tsc is clean.

## Rows

### asthma-copd-01

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (D1-eligible) | The GINA fatal-asthma red-flag list repeats signed asthma-copd-12 q1 and asthma-copd-10 q4, and it matches both the old and the rebuilt sob-04 q1. It is asthma KF2 wording, so it could be this SAMP's one D1 repeat. |
| q2 | FAIL | First 20 minute orders (salbutamol, ipratropium, prednisone, oxygen, magnesium) repeat signed asthma-copd-10 q1, asthma-copd-27 q2 and anaphylaxis-10 q2, plus the rebuilt sob-04 q2. SIGNED-DUPLICATES cluster 5 names this as its repeated key. The MDI twist does not change what is scored, because prednisone, oxygen and magnesium alone earn full marks. This would be a second repeat. |
| q3 | PASS | 250/610 is 41%, which is a severe attack. No signed SAMP keys this grading. The number was rechecked. The GINA box was not reopened. |
| q4 | FAIL | Four of the seven accept items are q2's drugs again. Salbutamol, ipratropium and prednisone earn 3/3, so the new decision (triage standing orders and surge) is optional. |

Simcheck against the live bank puts the rebuilt sob-04 (g01) at **0.42 full and 0.40 keys**. The writer's 0.39 was measured against the old sob-04. The two rebuilds have converged: both are a 34-year-old man at 80 kg with RR 32/minute, both key the GINA red flags at q1, and both key first-hour bronchodilator, steroid, magnesium and oxygen orders at q2. That breaks the rule that two rebuilds must not converge. Both kept cluster 5's repeated keys.

### asthma-copd-04

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (D1-eligible) | The wheeze differential repeats signed pulmonary-edema-03 q4 (the cluster 14 keeper) and asthma-copd-05 q4. This is asthma KF1 wording. |
| q2 | FAIL | Features of edema rather than asthma (orthopnea, nocturnal cough, AF, poor response to salbutamol) repeat pulmonary-edema-03 q1 for the same reason. This is pulmonary edema KF5 wording, but it is a second repeat. |
| q3 | FAIL | Signed pulmonary-edema-18 is an immigrant with rheumatic mitral stenosis and AF at 148/minute. It keys IV beta-blocker rate control as the main treatment, then furosemide, then anticoagulation. q3 keys the same three decisions for the same reason. Pregnancy changes the drug choice, not the decision. Also, with required 3, CPAP, furosemide and oxygen earn full marks without rate control, and that is cluster 14's repeated key. The writer found pulmonary-edema-18 but set it aside as "in pregnancy". |
| q4 | PASS | Tests for triggers that raise the mitral gradient (TSH, CBC, cultures, formal echo) are not keyed elsewhere. |

The story itself is close to pulmonary-edema-18. A rebuild needs a new story, not only new keys.

### asthma-copd-11

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Harms of his current treatment (oral steroid VTE, itraconazole boosting fluticasone, adrenal suppression, switch to budesonide-formoterol) are not keyed elsewhere. |
| q2 | FAIL (D1-eligible) | Leg compression ultrasound first in a patient with leg signs and a contrast reaction repeats signed dvt-pe-07 q1: leg signs and contrast anaphylaxis, so ultrasound first to avoid contrast. The abnormal film is an extra reason, not a new decision. "Leg ultrasound first" is DVT-PE KF5 wording, so this can be the one D1 repeat. |
| q3 | FAIL | Signed dvt-pe-09 q3 keys a DOAC drug interaction (carbamazepine) leading to LMWH, or warfarin with LMWH overlap and more INR checks. q3 is the same decision for the same reason, with itraconazole instead. It is not KF6 wording ("avoiding warfarin in pregnancy or LMWH in renal failure"), and it would be a second repeat. The writer's search for "itraconazole" and "CYP3A4" missed it because allkeys holds key text only. |

**Clinical claim, "LMWH is the single best choice with itraconazole":** only partly supported.
- Thrombosis Canada Rivaroxaban (2 November 2025): contraindicated with strong dual CYP3A4 and P-gp inhibitors, itraconazole named. Confirmed.
- Thrombosis Canada Apixaban (2 June 2025): avoid, itraconazole named. Confirmed.
- Thrombosis Canada Dabigatran (1 May 2025, DABIGATRAN_54.pdf): lists itraconazole as a *moderate* P-gp inhibitor, "caution is advised". Not contraindicated.
- Thrombosis Canada Edoxaban (11 December 2023, 89_43.pdf): given after at least 5 days of parenteral anticoagulant. The dose drops to 30 mg with a strong P-gp inhibitor. Itraconazole is not named.
- LMWH is defensible as the drug to *start*, because every option begins with a parenteral agent. It is not the sourced *single* best choice for the 3 months: dabigatran with caution, or edoxaban 30 mg after LMWH, are not excluded by the cited body. The explanation's "A DOAC can be reconsidered once itraconazole is stopped" overstates the guides.
- The TC_DOAC url points only to the rivaroxaban guide.
- The warfarin and itraconazole INR interaction was not checked against an opened source.

### asthma-copd-13

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Anaphylaxis from an inhaled food allergen (WAO criterion 1 through the skin) is not in the bank. |
| q2 | FAIL (D1-eligible) | Epinephrine 0.5 mg IM repeats keeper anaphylaxis-01 and signed anaphylaxis-12 q2, anaphylaxis-17 q2 and anaphylaxis-34 q2. It is cluster 1's repeated key. It is anaphylaxis KF3 wording. The number checks out: 0.01 x 58 is 0.58 mg, capped at 0.5 mg. |
| q3 | FAIL | Repeat IM epinephrine, IV access and a crystalloid bolus for hypotension and wheeze that persist after the first dose repeat signed anaphylaxis-38 q2, anaphylaxis-23 q3 and anaphylaxis-12 q2, for the same reason. This is also KF3 wording, but it is a second repeat. The number checks out: 20 x 58 is 1160 mL. |
| q4 | PASS | The work-related asthma differential is not keyed elsewhere. |

### burns-01

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (D1-eligible) | Signs of a threatened airway (hoarseness, stridor, drooling, swelling, distress) are nearly word for word signed burns-15 q1. This is burns KF2 wording. |
| q2 | PASS | Arytenoid and aryepiglottic swelling as the finding that decides intubation is not keyed elsewhere. |
| q3 | FAIL | Admitting and observing with serial airway checks after a normal airway examination repeats signed burns-37 q1 ("Observe with serial airway checks") and burns-15 q3. This is not key-feature wording, so it fails on its own. |
| q4 | FAIL | Titrated IV fentanyl 1 mcg/kg, not IM or oral, repeats signed burns-14 q1 and q2 (also a pulp-mill steam burn), burns-37 q4, burns-23 q3 and analgesia-sedation-11 q1. This is KF3 wording, but it is another repeat. The number checks out: 1 x 90 is 90 mcg. |

### burns-06

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | Associated injuries of an arc flash (eye, eardrum, fall, inhalation) are distinct from environmental-13's list of conduction injuries. |
| q2 | PASS | Signs that current passed through him. This is closest to environmental-35 (current path), but it is a different decision. |
| q3 | PASS, with a source note | The arithmetic checks out. 2 x 85 x 24 is 4080 mL, and 2040/8 is 255 mL/hour. The distractors are 510 (4 mL/kg), 382.5 rounded to 383 (3 mL/kg, so 6120/2/8), 170 (4080/24) and 127.5 rounded to 128 (2040/16). See the clinical claim below. |
| q4 | FAIL | Escharotomy now, along medial and lateral lines, before a long transfer. The patient has a circumferential full thickness arm burn with absent Doppler. Signed burns-23 q1 and q2 key exactly this: a flame burn of 22% TBSA with transfer pending. Escharotomy is not the wording of any key feature (MSK KF7 says "compartment syndrome or open fractures"), so D1 cannot cover it. The writer flagged it in physician note 4 but kept it. |

**Clinical claim, "2 mL/kg thermal formula for an arc flash with no current":** the math is right, but no opened source states the rule.
- The Alaska guideline (local alaska.txt, lines 238 to 256) gives "Adults 2 mL/kg, Children 3 mL/kg, Electrical 4 mL/kg", half in the first 8 hours post-burn. It never mentions arc or flash injury.
- The StatPearls abstract (Europe PMC, 2025) says flash injuries from an arc cause cutaneous burns with no current through the body, and flame injuries are thermal burns. It gives no fluid formula.
- Keying 2 mL/kg therefore joins two sources. That is physiologically sound, since the 4 mL/kg exists for deep conduction injury. But the item keys "Using the Alaska guideline" to a distinction the guideline does not make. A candidate who reads "electrical" in the Alaska table would choose 510.
- The ABA 2023 resuscitation guideline (Cartotto et al) supports starting adults at 2 mL/kg. It does not address arc flash either.
- A physician must confirm this, or the item needs a source that says it outright.

## Tests

- `SAMP_BATCH=s04 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 481/481 passed.
- `npx tsc --noEmit -p .`: clean.
- House style scan of all six SAMPs: no em dashes, en dashes or semicolons in prose.

## D1 repeats

**Surviving D1 repeats: none.** All six SAMPs fail, so no entry from g07 should be added to the D1 table in docs/DECISIONS.md.

If each SAMP is reworked to drop its other repeats, these are the repeats D1 could cover, at most one per SAMP:

| SAMP | Candidate D1 repeat | Signed-off SAMP it echoes | Key feature wording |
|---|---|---|---|
| asthma-copd-01 q1 | GINA fatal-asthma risk history | asthma-copd-12 q1, asthma-copd-10 q4 | asthma-copd KF2 |
| asthma-copd-04 q1 | Wheeze mimics differential | pulmonary-edema-03 q4, asthma-copd-05 q4 | asthma-copd KF1 |
| asthma-copd-11 q2 | Leg ultrasound first | dvt-pe-07 q1 | dvt-pe KF5 |
| asthma-copd-13 q2 | Epinephrine 0.5 mg IM | anaphylaxis-01, anaphylaxis-12 q2 | anaphylaxis KF3 |
| burns-01 q1 | Signs of airway threat in inhalation injury | burns-15 q1 | burns KF2 |
| burns-06 | none (escharotomy is not key-feature wording) | burns-23 q1 | none |

## For the physician

1. All six stay held back in src/samps/held-back/g07.json. None is ready for sign-off.
2. **asthma-copd-01 and sob-04 (g01) have converged** on the same patient and the same q1 and q2 keys. Whoever reworks either one must coordinate with the other.
3. **asthma-copd-04** is too close to pulmonary-edema-18 (immigrant, rheumatic mitral stenosis, fast AF, rate control, then furosemide, then anticoagulation). The cluster note "mitral stenosis appears only in pregnancy" led the rebuild into that story.
4. **asthma-copd-11 q3:** Thrombosis Canada does not contraindicate dabigatran (caution only) or edoxaban (30 mg with a strong P-gp inhibitor) with itraconazole. Please decide how they should be scored if this item is kept in any form.
5. **burns-06 q3:** please confirm that an arc flash with no conduction is resuscitated at 2 mL/kg and not the 4 mL/kg electrical rate. The cited Alaska guideline does not say so.
6. **burns-06 q4 and burns-01 q3 and q4** follow the rebuild directions in SIGNED-DUPLICATES.md (escharotomy, observation, titrated IV analgesia), but the bank already keys each of these in signed SAMPs. Those directions need revising before a second rebuild.
