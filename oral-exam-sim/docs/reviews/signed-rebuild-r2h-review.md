# Review of signed-duplicate rebuild r2h

Files: `src/samps/s14/pediatric-fever.ts` and `src/samps/s14/multiple-trauma.ts`. Held back in `src/samps/held-back/r2h.json` (all three ids, with the correct cluster numbers 56, 54 and 25). The prior review is `docs/reviews/signed-rebuild-g15-review.md`. The before text is the wip snapshot at `origin/wip/sweep3-unreviewed` commit ee013c9.

## Verdict by SAMP

| SAMP | Verdict | Reason |
|---|---|---|
| pediatric-fever-11 | PASS (one optional match fix recommended) | The writer applied exactly the two g15 fixes and nothing else. No D1 slot. |
| multiple-trauma-06 | PASS, one D1 slot | The writer applied exactly the one g15 fix and nothing else. The q3 D1 repeat (IM epinephrine for anaphylaxis, anaphylaxis KF 3) is confirmed. It does not echo the cluster 54 keeper, ems-09. |
| multiple-trauma-08 | PASS (match-phrase and wording fixes recommended, not blocking) | The new q2 keys a new decision: persistent leak after intubation means the cuff is above a bronchial tear, despite normal capnography. It does not repeat airway-37, airway-44 or the keeper airway-04. q4 is sound without the clamp item. No D1 slot. |

## Editing

I made scratch edits to probe the fixes below, then read the new standing rule (docs/reviews/REVIEW-RULES.md, reviewers do not edit) and reverted them. Both files are byte for byte as the writer left them. Every fix below is a recommendation for a writer.

## Unrequested writer changes

None. pediatric-fever-11 and multiple-trauma-06 differ from the g15 text only as g15 asked. multiple-trauma-08 changes only q2 (the re-key g15 asked for) and the q4 clamp removal (also asked for).

## Integrity check

- **wip snapshot (ee013c9) against the working tree.**
  - The file headers and the `S` source tables are identical.
  - pediatric-fever.ts differs only at the two lines the g15 review specified: the q1 option "Remove the snowsuit and blankets", and the q2 "fever" match list.
  - multiple-trauma-06 differs only in the q3 "allergy" item and the one added explanation sentence. Both are word for word as g15 recommended.
  - multiple-trauma-08 differs only in q2 (all of it) and in q4 (clamp item, clamp dangerous answer and clamp sentence removed).
- **HEAD against the working tree.** I split both files at each id and compared every block.
  - pediatric-fever.ts: same ids in the same order. Only pediatric-fever-11 differs.
  - multiple-trauma.ts: same ids in the same order. Only multiple-trauma-06 and multiple-trauma-08 differ.
  - The source constants differ, as g15 recorded.
    - Removed: `acsm`, `acsm2023`, `kimTopiramate`, `eastBcvi` and `warnerEtco2`. None is referenced in s14. The only other `S.acsm` references are in s36/environmental.ts, which has its own table.
    - Added: `groverBundling`, `cpsCarSeat`, `waoAnaphylaxis`, `antonescuAirway`, `wsesThoracic` and `btsPleural`. Each is used once by a rebuilt SAMP.
- **Structure.**
  - Each SAMP keeps its id, topic, question count, kinds and key features.
  - Each has `version: 2` and `reviewed: false` after `...META`.
  - There are no em dashes, en dashes or semicolons in the three blocks.

## D1 rulings

- **multiple-trauma-06 q3: confirmed, one slot.**
  - The keyed treatment is epinephrine 0.5 mg IM into the thigh, with fluids, oxygen and supine positioning. That is the literal wording of anaphylaxis KF 3 ("Treat anaphylaxis fast with epinephrine ... IV access, and fluid resuscitation").
  - It echoes signed anaphylaxis-01 q1 (epinephrine 0.5 mg IM) and anaphylaxis-31 (anaphylaxis after a new antibiotic, q1, with epinephrine 0.5 mg IM, q3).
  - The narrowed "allergy" item now also echoes anaphylaxis-31 q4 (document the reaction). That is one optional item of ten (required 3), so I still count one question.
  - It does not echo the cluster 54 keeper, ems-09. ems-09 keys pneumothorax, altitude, flight preparation and cabin pressure, with no anaphylaxis content. So landing rule 1 does not apply.
- **pediatric-fever-11: none needed.** q1 to q4 are unchanged in substance from the text g15 passed. q1 keys passive undressing in a well infant and marks immersion wrong, so it does not echo the keeper environmental-01.
- **multiple-trauma-08: none needed.** The rows below give the reasons.
- **Running total.** HEAD's DECISIONS.md says 18. This group adds 1, which makes 19. Note that the working tree of DECISIONS.md already holds an uncommitted row from another group (delirium-agitation-14 q4). If that row lands first, this one makes 20, the freeze limit, but not beyond it.

## Rows

| Question | Result | Notes |
|---|---|---|
| pediatric-fever-11 q1 | PASS | The g15 fix is applied. "Remove the snowsuit and blankets" is at index 4, with no pronoun and not the longest option. markQuestion gives choice 4 a score of 1 and every other choice 0. |
| pediatric-fever-11 q2 | PASS, fix recommended | The g15 match list is applied exactly. "A fever from overheating", "febrile from being overdressed" and bare "fever" now score 0. "True fever", "still febrile", "still has a fever", "genuine fever" and "38 or more" score. **Recommended (optional):** "Temperature over 38 is a fever" and "It is a fever above 38" score 0 on the fever item. Add "over 38", "above 38", "more than 38" and "at least 38" to its match list. I probed this in a scratch edit, now reverted: those lines then score, and the side effect is that "a fever from overheating, over 38" also earns the fever point. The question is passable without the fix, because four other items remain. |
| pediatric-fever-11 q3 | PASS | Unchanged from g15. |
| pediatric-fever-11 q4 | PASS | Unchanged from g15. |
| multiple-trauma-06 q1 | PASS | Unchanged. |
| multiple-trauma-06 q2 | PASS | Unchanged. |
| multiple-trauma-06 q3 | PASS (D1) | The g15 fix is applied exactly: the item text, seven match phrases and the added WAO sentence. WAO (g15 copy reopened): "Register in electronic or paper medical record the suspected trigger(s)". **markQuestion results:** "Choose another antibiotic", "Switch to clindamycin" and "different antibiotic" score 0/3. "Anaphylaxis to cefazolin" + "Epinephrine 0.5 mg IM thigh" + "Record the reaction in her handover" scores 3/3. "Epinephrine 1 mg IV push" is dangerous and scores 0. "0.5 mg IM, not 1 mg IV push" is not penalised. |
| multiple-trauma-08 q1 | PASS | Unchanged. The fallen lung sign, and "within 2.5 cm of the carina in 62% to 75%", are confirmed in Antonescu 2022 (reopened). |
| multiple-trauma-08 q2 | PASS, fixes recommended | See the q2 section below. |
| multiple-trauma-08 q3 | PASS | Unchanged. Its update now follows on from q2. |
| multiple-trauma-08 q4 | PASS | The clamp item, the "Clamp the chest tube" dangerous answer and the clamp sentence are gone. The explanation still reads cleanly. Five items remain with required 3 (water seal, air embolism, pressures, tube slipping back, hypothermia), so it is still answerable. It now has no pulmonary-edema-20 q2 repeat. **markQuestion results:** "Air embolism" + "plateau pressure low" + "tube slipping back" scores 3/3. "Water seal" + "barotrauma from high PEEP" + "keep him warm" scores 3/3. Keeper airway-04 answers score 1/3. "Clamp the drain" scores 0 but is no longer penalised. |

## multiple-trauma-08 q2

- **Decision.**
  - A single lumen tube gives a normal capnogram (EtCO2 38 mmHg). But SpO2 is only 87%, the right chest rises and the right chest tube bubbles with every breath.
  - The keyed items are: the cuff is above the tear, a normal EtCO2 does not locate the cuff, pass a bronchoscope, advance into the left main bronchus, and recheck that the leak settles.
  - Unacceptable answers: accepting the position because the capnography is normal, and pulling the tube back.
  - It fits airway KF 6 literally ("to catch misplacement that is not obvious").
  - Clinically sound. With a right main bronchus tear 1.5 cm below the carina, a tracheal cuff lets positive pressure reach the tear.
- **Sources (reopened in the g15 copies).**
  - WSES-AAST 2025: "Careful intubation, potentially under bronchoscopy guidance, is necessary to ensure ventilation without exacerbating the underlying injury".
  - Antonescu 2022: "attempting to place the tip of the endotracheal tube distal to the injury", and "the flexible bronchoscope can also be used for mainstem intubations".
  - The "distal to the injury ... avoid direct positive pressure" line the writer quotes is from the post-repair paragraph. The explanation's paraphrase is still supported by the first quote.
- **Against airway-04 (the cluster 25 keeper).**
  - airway-04 q4 keys the DOPE differential for a new desaturation with high peak pressure and a capnogram present.
  - Here the task is to read one specific pattern and correct the tube, not to list a differential.
  - Keeper answers ("Tube displacement such as mainstem intubation", "obstruction", "tension pneumothorax", "equipment", "hemothorax", "breath stacking") score 0/3.
  - The HEAD multiple-trauma-08 confirmation list also scores 0/3.
  - The shared theme is hypoxia after intubation with a capnogram present (the cluster title), but the keyed decision differs. Not a retelling. Landing rule 1 does not apply.
- **Against airway-37 q2 and q3.**
  - "Awake flexible scope intubation", "Carina seen through the scope" and "Surgical airway ready" score 1/3.
  - Closest echo: airway-37 q3's explanation ("Capnography confirms that the tube is in the airway, but only direct sight ... shows that the tip lies beyond the tear") hits the etco2 item. Add a scope line and it scores 2/3.
  - The two questions share that caveat, but they key different decisions.
    - airway-37 q3 confirms an uneventful passage by seeing the carina.
    - This question must recognize, from bedside signs, that the tube is already wrong, then correct it by advancing endobronchially.
  - Its key answer, "Carina seen through the scope", scores 0 here. Neither airway-37 key alone reaches full marks. I judge it not a repeat and flag it for the physician.
- **Against airway-44 q3.**
  - airway-44 q3 keys selective right mainstem intubation to protect the healthy lung from blood. It scores at most 1/3 here ("Selective left mainstem intubation" hits the advance item).
  - "Selective mainstem intubation of the healthy lung" scores 0.
  - It is a different indication, and airway-44 has no tear, capnography or cuff decision.
- **Decision search** (allkeys.tsv and src/samps; terms: above the tear, beyond the tear, cuff above, capnography does not or only, falsely reassuring, endobronchial, mainstem, misplaced, malposition, bubbling).
  - No signed key recognizes a cuff above a bronchial tear. The nearest hits are airway-05 q4 (right mainstem, withdraw), burns-11 q3 and airway-11 q3 (confirmation lists), and airway-18 q4 (endobronchial through a stoma).
  - Other writers' uncommitted diffs: one new EtCO2 and PaCO2 gap question, a dead space decision, which is not this one.
  - No other file has the skid steer or bronchial tear story.
- **simcheck.** airway-37 0.14/0.18, airway-11 0.14/0.15, multiple-trauma-06 (HEAD) 0.13/0.15, then lower.
- **Recommended fixes (match phrases and wording only, inside the writer's decision; for a writer to apply):**
  - "above" item: remove "in the trachea", because "Capnography confirms the tube is in the trachea", a reassurance answer, scores the item (1/3). Add "still in the trachea", "only in the trachea", "too proximal", "not deep enough", "not far enough" and "ventilating the injured".
  - "etco2" item: add "misleading".
  - "advance" item: add "left endobronchial". "Right endobronchial intubation" would still score 0.
  - Explanation: change "advance the tube over it" to "advance the tube over the scope", because "it" has no clear referent.
- **Probes.** On the current text, and in a reverted scratch edit with the fixes above:
  - The writer's three natural answer sets still score 3/3.
  - "Tube is too proximal, still ventilating the injured bronchus" + "EtCO2 is misleading here" + "Left endobronchial intubation" scores 0/3 now, and 3/3 with the fixes. "Tube not deep enough" scores 0 now. Candidates can override automatic marks, so this is not blocking.
  - "Capnography confirms correct position", "Tube is fine" and "Pull the tube back" are unacceptable, and score 0/3.
  - "Do not pull the tube back" is not penalised.
  - "Withdraw the tube slightly" is unacceptable, correctly.
  - "Bronchial blocker" and "double lumen" score 0.

## Duplicate-check evidence

simcheck, top scores (full / keys):
- pediatric-fever-11: pediatric-fever-02 0.15/0.17, pediatric-fever-18 0.15/0.13, pediatric-fever-34 0.14/0.07.
- multiple-trauma-06: multiple-trauma-16 0.11/0.14, multiple-patients-08 0.13/0.14, lacerations-37 0.05/0.13.
- multiple-trauma-08: airway-37 0.14/0.18, airway-11 0.14/0.15, multiple-trauma-06 (HEAD) 0.13/0.15.

A re-grep of src/samps for snowsuit, skid steer, bronchus or bronchial tear, cefazolin anaphylaxis and "end-tidal CO2 of 38" finds only these two files.

## Tests

Optional for reviewers (REVIEW-RULES.md rule 2).
- I ran `SAMP_BATCH=s14 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` with my scratch edits in place: 479 passed. `npx tsc --noEmit -p .` reported no errors.
- The writer reports the same results on the text as it stands now.

## For the physician

- **multiple-trauma-08 q2** (a skid steer crush with a right main bronchus tear) now asks the candidate to see that a normal capnogram does not show the cuff is past the tear. The persistent chest tube bubbling and the rising right chest show that it is not. The keyed response is a bronchoscope, advancing into the left main bronchus, and a recheck that the leak settles. Please confirm the following.
  - This sequence, and the expectation that the bubbling largely settles once the left lung is isolated. That is reasoning, not a quoted line.
  - That it is distinct enough from airway-37 q3, which you signed. That question uses the same caveat, that capnography cannot place the tip relative to a tear, to confirm an uneventful scope intubation. Here the tube is already wrong and must be corrected.
- **multiple-trauma-08 q4** no longer keys "do not clamp the bubbling drain". Clamping is now neither credited nor penalised. This avoids repeating pulmonary-edema-20 q2.
- **multiple-trauma-06** uses one D1 slot for IM epinephrine in anaphylaxis to a new antibiotic, which echoes your signed anaphylaxis-01 and anaphylaxis-31. It takes the D1 total to 19, or 20 if another pending group lands first. Choosing a replacement antibiotic is no longer credited. Only recording cefazolin as the suspected trigger is keyed.
- **pediatric-fever-11** is unchanged in substance from the g15 pass. The earlier requests still stand: undressing before acetaminophen as the first step, and discharge after a negative catheter urinalysis with culture pending and follow-up in 24 to 48 hours.

## Landing decision

All three land. The reviewer's scratch edits were restored before landing. Both s14 files were confirmed byte for byte against the snapshot taken when the writer finished. The recommended match-phrase fixes are not applied, since a reviewer may not write them. One multiple-trauma-08 q2 wording, "capnography confirms the tube is in the trachea", still earns 1 of 3. The other recommendations would credit more correct wordings. They are listed for the physician and for any later writer pass. multiple-trauma-06 q3 is the one D1 repeat, and the D1 total goes to 19.
