# Review of signed-duplicate rebuild g15

Files: `src/samps/s14/pediatric-fever.ts` and `src/samps/s14/multiple-trauma.ts`. Held back in `src/samps/held-back/g15.json`, and still listed in `g08.json`. These are second rebuilds of the three SAMPs that failed in `docs/reviews/signed-rebuild-g08-review.md`.

## Verdict by SAMP

| SAMP | Verdict | Reason |
|---|---|---|
| pediatric-fever-11 | PASS (two small fixes recommended) | It is a new story, an overbundled 12-week-old. No question retells the cluster 56 keeper (environmental-01). q1 is a new decision and needs no D1 slot. |
| multiple-trauma-06 | PASS (one fix recommended), one D1 slot | Cefazolin anaphylaxis in a trauma patient is new. q3 is a valid D1 repeat of anaphylaxis KF 3 and does not echo the keeper, ems-09. |
| multiple-trauma-08 | FAIL | q2 keys awake flexible scope intubation past an airway tear. That is the decision signed airway-37 q2 keys, for the same reason. It is not the literal wording of airway KF 6, so D1 does not cover it. It needs a new keyed decision. Not patched. |

The recommended fixes were **not applied**. My edit to the two files was refused by the session's permission check, so the text is still exactly as the writer left it. The exact edits are listed under each row so the lead or the writer can apply them.

## Integrity check

The writer rebuilt pediatric-fever.ts from HEAD partway through the task. A script split both files at each SAMP id and compared every block with `git show HEAD:`.
- pediatric-fever.ts: 15 SAMPs, same ids in the same order. Only pediatric-fever-11 differs.
- multiple-trauma.ts: 15 SAMPs, same ids in the same order. Only multiple-trauma-06 and multiple-trauma-08 differ.
- Header changes only in the `S` source table:
  - Removed: `acsm` (acsm-heat, used only by the original pediatric-fever-11), and `acsm2023`, `kimTopiramate`, `eastBcvi` and `warnerEtco2`. The last four were orphans left in HEAD by the g08 commit. A repo-wide grep finds no remaining reference to any of these five.
  - Added: `groverBundling`, `cpsCarSeat`, `waoAnaphylaxis`, `antonescuAirway`, `wsesThoracic` and `btsPleural`. Each is used by a rebuilt SAMP.
- `git diff HEAD` has hunks only in those constant blocks and the three SAMP blocks.

Note: HEAD holds the *original* signed text of all three SAMPs, not the failed g08 drafts, so the diff shows original against rebuild. The g08 drafts were never committed. The replantation q1 and q2 in multiple-trauma-06 are the g08 writer's text, which the g08 review passed.

Structure: each SAMP keeps its id, topic, alsoTopics, question count, kinds and key features. Each has `version: 2` and `reviewed: false` after `...META`. META is `{ reviewed: true, version: 1 }`. All three ids are in `held-back/g15.json`. There are no em dashes, en dashes or semicolons in the three blocks.

## D1 rulings

The key-feature wording comes from `src/blueprint/priorityTopics.ts`. The cluster keepers come from the cluster table in `docs/SIGNED-DUPLICATES.md`: 56 is environmental-01, 54 is ems-09 and 25 is airway-04.

### pediatric-fever-11 q1 against environmental-17 q1: new decision, no D1 slot

- **Against the literal key feature.** Environmental KF 1 reads "Suspect heat stroke in a confused, febrile patient exposed to heat and start cooling right away." This infant is alert, settles when held and does not have heat stroke. The question does not match that wording, and the writer's paraphrase ("by removing insulating layers") is not in the key feature. If this were a repeat, D1 could not cover it.
- **Against environmental-17 q1 (signed, and itself a D1 row).** It is not a repeat. That question keys "Strip the blankets and cool him now" against CT first, LP first, oral fluids and warmed saline. The decision there is timing: cool before you investigate a man with heat stroke. This question has no investigate-first option. It asks for the cooling method in a well infant: passive undressing over acetaminophen, ibuprofen, ice packs and immersion. Immersion and ice are marked wrong because they risk chilling and shivering, and that reason comes from the CPS. The two questions share the words "remove the blankets" but key a different decision for a different reason.
- **Against the cluster 56 keeper (environmental-01).** It does not echo it. The keeper keys the heat stroke criteria, immersion in the tent, a rectal probe with a 39°C stop, no drugs, and a complications panel. This question marks immersion *wrong*. Its antipyretic distractors are wrong for age and sequencing reasons (ibuprofen under 6 months, and undressing comes first), not because "the set point is normal". q2 to q4 key true fever after unbundling, a noninfectious-cause history, and car seat and discharge advice. None of those appears in the keeper.
- The decision search (allkeys.tsv: undress, bundl, snowsuit, car seat, remove clothing, strip, overdress, heater, vaccin, teething) finds environmental-17 q1, environmental-04 q1 ("Remove clothing" in a heat stroke list), pediatric-fever-18 (vaccine-day fever) and pediatric-fever-34 (hot car, classic heat stroke, immersion). None keys these decisions for this reason.

### multiple-trauma-06 q3 against anaphylaxis-01 q1: valid D1 repeat, one slot

- **Against the literal key feature.** Anaphylaxis KF 3 reads "Treat anaphylaxis fast with epinephrine, early airway management when needed, IV access, and fluid resuscitation." The keyed treatment (IM epinephrine, 20 mL/kg crystalloid, oxygen, supine) is that wording. It qualifies.
- **Against the cluster 54 keeper (ems-09).** It does not echo it. ems-09 keys a chest tube before flight, trapped gas at altitude, a transfer package and arterial gas embolism in a diver. q3 has no altitude or pneumothorax content. "Hold the flight until stable" is one item of ten.
- **A closer echo the writer did not list: signed anaphylaxis-31.** That SAMP is shock 40 minutes after a first dose of amoxicillin-clavulanate. It keys "Reaction to the new antibiotic" (q1, anaphylaxis KF 1), epinephrine 0.5 mg IM (q3) and documenting the allergy (q4). multiple-trauma-06 q3 shares the pattern: shock minutes after a new antibiotic, anaphylaxis over the other cause, IM epinephrine, record the trigger. The context and the competing diagnosis differ: bleeding from a traumatic amputation with a dry dressing, against sepsis or a faint in an 81-year-old. So I count one question and one D1 slot. The D1 row should name anaphylaxis-01 q1 and anaphylaxis-31 q1 and q3.
- **Other writers.** The in-progress s03 anaphylaxis rebuild also keys drug anaphylaxis during an infusion (protamine): stop the drug, then epinephrine 0.01 mg/kg IM to 0.5 mg. The overlap is the standard treatment, which is the D1 content. The stories differ.

### multiple-trauma-08 q2 against airway-37 q3: not covered by D1, so FAIL

- **Against the literal key feature.** Airway KF 6 reads "Confirm tube placement with end tidal CO2, oximetry, and blood gases to catch misplacement that is not obvious." Only one of the seven accept items ("confirm") is that wording. The question's keyed decision, and six of its seven items, is *how to intubate*: over a flexible bronchoscope, tip and cuff beyond the tear, spontaneous breathing or awake, most experienced operator with the surgeon, surgical airway set ready, and blind intubation unacceptable.
- **Against airway-37 (signed).** q2 keys "Flexible scope intubation while awake" for a laryngeal injury with neck crepitus. Its explanation reads: "guide the tube beyond it while he keeps breathing, with a surgeon ready for a tracheostomy". Blind nasal intubation and a bougie are wrong because they risk a false passage through the tear. airway-37 q3 then keys confirming by scope that the tip lies beyond the injury. multiple-trauma-08 q2 is those two questions merged, for the same reason: do not extend an airway tear, and pass it under vision. Only the left main bronchus item is new. airway-37 q2 is airway KF 3, not a literal KF 6 decision, so D1 does not cover the repeat.
- Awake flexible bronchoscopic intubation is also keyed in signed airway-03 q3, airway-33 q2, anaphylaxis-05 q3 and sob-01 q2.
- **Against the cluster 25 keeper (airway-04).** There is only a minor overlap. The "expert: most experienced operator" item repeats an airway-04 q1 accept item, and the q4 "tube slipping" item echoes airway-04 q4 "Tube displacement". Neither is the keyed decision. The FAIL rests on airway-37.
- **A second repeat, in q4.** The "do not clamp the bubbling drain" item and its dangerous answer key the same decision, for the same BTS reason, as signed pulmonary-edema-20 q2 ("Oxygen with the drain unclamped", where the explanation says a continuing air leak can build into a tension pneumothorax). The water seal item partly echoes the same question (suction advised against). q4 can be passed without that item, but the dangerous answer is that SAMP's key.

**D1 total:** this group adds one row (multiple-trauma-06 q3). The running total goes from 17 to 18. pediatric-fever-11 needs no slot. multiple-trauma-08 cannot use D1.

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-11 q1 | PASS, fix recommended | The undressing key matches the CPS fever page (opened): "Remove extra blankets and clothing so heat can leave their body ... don't take off all your child's clothes because they may become too cold and start shivering". It also says not to give ibuprofen under 6 months without talking to a provider. Doses recompute: acetaminophen 15 mg/kg × 5.8 kg = 87 mg, ibuprofen 10 mg/kg = 58 mg. The key is not the longest option. **Recommended:** the key "Remove her snowsuit and blankets" is the only option with a pronoun. Change it to "Remove the snowsuit and blankets". |
| pediatric-fever-11 q2 | PASS, fix recommended | The CPS febrile infant statement (opened) says: fever at 90 days or younger is any rectal ≥38.0°C, rectal is the reference standard, and "any rectal temperature ≥38.0 °C should prompt further investigation". For 61 to 90 days, testing "should include at least a urinalysis and urine culture". The Grover 1994 claim is as the writer reports (abstract, not reopened). The unacceptable "due to bundling" does not wrongly reject "not due to bundling", because the engine's negation window handles it. **Recommended:** the "fever" item matches the bare words "fever" and "febrile". So "a fever from overheating" earns the "true fever" point. Replace the match list with "true fever", "real fever", "genuine fever", "still febrile", "still has a fever", "38.0", "38 or more" and "38 or higher". |
| pediatric-fever-11 q3 | PASS | Noninfectious-cause history (PF KF 6). CPS: about half of infants have fever after vaccines, SBI risk is 0.6% within 24 h and 8.9% after 24 h, and urine testing is advised if fever persists beyond 24 h. The explanation paraphrases this accurately. Formula preparation was left out because loc-40 keys it. |
| pediatric-fever-11 q4 | PASS | Discharge advice. CPS: follow-up with a provider within 24 to 48 h, with anticipatory guidance. The CPS car seat page (opened): "Bulky clothing or snowsuits should not be worn in the car seat ... Always take your baby out of the car seat when you arrive. A car seat is not a safe place to sleep." Scheduled acetaminophen is correctly unacceptable. |
| multiple-trauma-06 q1 | PASS | Replantation transfer preparation. Unchanged from the g08 draft, which g08 passed. It does not repeat ems-09's list. |
| multiple-trauma-06 q2 | PASS | Part preservation (Singletary 2025). Unchanged from g08. |
| multiple-trauma-06 q3 | PASS, D1, fix recommended | WAO 2020 (full text opened via Europe PMC) confirms: 0.01 mg/kg IM into the anterolateral thigh to a maximum of 0.5 mg, repeated every 5 to 15 min. 64 kg gives 0.64 mg, so 0.5 mg. Supine unless in respiratory distress. "20 mL/kg bolus using crystalloids" for cardiovascular instability, which is 1 280 mL. Inhaled SABA for bronchoconstriction. IV bolus epinephrine carries "potentially fatal arrhythmias" and is "not recommended for the initial treatment". **Dangerous answer:** "Epinephrine 1 mg IV push" is correct. It is not triggered by "0.5 mg IM, not 1 mg IV push" because of negation. It does not catch "epinephrine 1 mg IV" without "push", but widening it risks false hits on "1 L IV", so it was left alone. **Unsourced item:** "Record a cefazolin allergy and choose another antibiotic". WAO supports only the first half ("Register in electronic or paper medical record the suspected trigger(s)"). Choosing another antibiotic is clinically reasonable, since the open amputation still needs prophylaxis, but no cited source addresses it, and "clindamycin" in the match list credits a drug choice the explanation never makes. **Recommended:** item text "Record cefazolin as the suspected trigger in her chart and handover", with match "allergy", "allergic to cefazolin", "document the reaction", "record the reaction", "suspected trigger", "medical record" and "chart the reaction". Add to the explanation: "WAO also advises recording the suspected trigger in the medical record." This stays inside the existing keyed decision. |
| multiple-trauma-08 q1 | FAIL (SAMP) | Right main bronchus tear from a persistent air leak and the fallen lung sign. New to the bank and sound (Antonescu 2022). |
| multiple-trauma-08 q2 | FAIL | It repeats signed airway-37 q2 and q3 (see D1 above). Clinically the key is sound. Placing a single-lumen tube beyond the tear in the contralateral (left) main bronchus under bronchoscopic vision matches WSES-AAST ("potentially under bronchoscopic guidance") and Antonescu. One match-phrase problem for the rewrite: "bronchial blocker" in the "left" item credits a blocker, which for a right main bronchus tear 1.5 cm below the carina would sit at the tear. It should come out. |
| multiple-trauma-08 q3 | FAIL (SAMP) | The associated injuries of a bronchial tear. New and sound (Antonescu, WSES-AAST). |
| multiple-trauma-08 q4 | FAIL (SAMP) | The "clamp is dangerous" key is clinically correct. BTS says clamping a drain with a continuing air leak risks tension, and pulmonary-edema-20 cites the same. But that item and its dangerous answer repeat signed pulmonary-edema-20 q2 (see above). Air embolism, high pressures and the tube slipping back above the tear are new. |

## What multiple-trauma-08 needs (not written here)

- **q2 (airway KF 6).** Re-key it on a confirmation decision unique to this case, not on the intubation technique. The update would say the tube is already placed over the scope. A suggestion: after the left endobronchial tube is placed, the right chest still rises with each breath and the chest tube still bubbles with every breath, while capnography and SpO2 look acceptable. The candidate must see that a normal end-tidal CO2 does not show the cuff is beyond the tear, and must recheck the position by bronchoscopy and advance the tube. airway-28 q3 ("cuff at or above the vocal cords") and airway-37 q3 (carina seen through the scope) are the neighbours to avoid, so the decision search must be rerun.
- **q4.** Drop the clamp item and its dangerous answer, or accept that the SAMP then carries a second repeat that D1 cannot cover. Air embolism, pressure limits and the tube slipping back can carry the question.
- q1 and q3 can stay.

## Duplicate-check evidence

Simcheck, top scores (full / keys):
- pediatric-fever-11: pediatric-fever-02 0.16/0.17, pediatric-fever-18 0.15/0.13, pediatric-fever-34 0.14/0.07, pediatric-fever-17 0.13/0.10, pediatric-fever-43 0.12/0.06.
- multiple-trauma-06: multiple-patients-08 0.13/0.14, multiple-trauma-16 0.11/0.13, lacerations-37 0.05/0.13, asthma-copd-13 0.11/0.12, multiple-trauma-13 0.12/0.12.
- multiple-trauma-08: multiple-trauma-06 (HEAD text) 0.14/0.15, airway-37 0.13/0.15, environmental-11 0.10/0.14, airway-11 0.13/0.14, pulmonary-edema-20 0.13/0.07.

All scores are low. The multiple-trauma-08 failure is a decision repeat, which the decision search found and simcheck ranks only second.

Other writers: a grep of src/samps and the uncommitted diffs for snowsuit, car seat, bundling, skid steer, bronchial tear, fallen lung and cefazolin anaphylaxis finds only these files. There is one hit on the s46 hot car SAMP (pediatric-fever-34), whose story is different. The s03 protamine anaphylaxis rebuild is noted above.

## Tests

I could not run the tests. The session's permission check refused the `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` and `npx tsc --noEmit -p .` call. The writer reports 479 passed and no tsc errors. The files are unchanged since then, because no fix was applied.

## For the physician

- **multiple-trauma-08 fails a second time.** Its airway question keys awake flexible scope intubation past an airway tear, which you signed in airway-37 (the hanging with a laryngeal tear). The rest of the new story (a skid steer loader crush with a right main bronchus tear) is new and sound. Only q2, and the chest tube clamp item in q4, need re-keying. It stays held back.
- **pediatric-fever-11** (an overbundled 12-week-old, 40.2°C rectal) passes. Please confirm:
  - keying undressing ahead of acetaminophen as the first step
  - discharge after a negative catheter urinalysis, with culture pending and follow-up in 24 to 48 hours. The CPS statement allows this for 61 to 90 days.
- **multiple-trauma-06** (cefazolin anaphylaxis while awaiting a replantation flight) passes and uses one D1 slot, taking the running total to 18. It resembles your signed anaphylaxis-31 (anaphylaxis to a first antibiotic dose mistaken for another cause of shock) more than the writer said. Please say whether you see that as acceptable under D1 or as a repeat.
- **Choosing another antibiotic.** Choosing another antibiotic for the open amputation after cefazolin anaphylaxis is accepted by the current text but not sourced. I recommend narrowing the item to documenting the trigger, which WAO supports. If you want the antibiotic choice keyed, please name the agent you would use.
- **Fixes not applied.** Three small wording and match fixes are recommended above. They were not applied because file edits were refused in this session.
