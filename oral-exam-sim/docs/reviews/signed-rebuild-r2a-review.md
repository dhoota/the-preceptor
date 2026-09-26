# Independent review of signed-duplicate rebuild r2a

Scope: sob-08 only, in `src/samps/s17/sob.ts`. Writer report: `docs/reviews/signed-rebuild-r2a.md`. Round 1 review: `docs/reviews/signed-rebuild-g01-review.md`. The ten "cannot" ids (sob-01, 03, 04, 05, 06, 09, 10, 11, 14, 15) hold failed round 1 text and were not reviewed. Nothing was edited or committed by the reviewer.

## Result

| SAMP | Verdict | Main reason |
|---|---|---|
| sob-08 | FAIL (fixable, keep the story) | The dengue story and its three keyed decisions are new, sourced and clear of the keeper and the signed bank. But the q2 red cell item gives credit for "Transfuse packed red cells" and "Blood transfusion now", which is wrong for this patient. The q3 furosemide item misses common correct wordings. The q1 key credits fluid overload and bleeding as present causes before any IV fluid, and its own explanation says those come later. Reviewers do not edit, so this goes back to the writer. |

## Structure

- Same id and topic. Three questions, all `short`, required 3, 3 and 3, as in HEAD. Key features match HEAD: q1 sob 2, q2 shock 3, q3 sob 3.
- `...META, reviewed: false, version: 2` is in the right order. The id is in `src/samps/held-back/r2a.json`.
- Sources `S.whoArbo2025` and `S.whoDengue2012` are both cited and both used by q sources.
- House style: no em or en dashes and no semicolons in sob-08 prose.
- Unrequested change: `alsoTopics` is now `["shock", "infectious-diseases"]`. Round 1 added `shock`, and `infectious-diseases` is new. It fits a dengue case. Accepted on its merits.

## Diff scope (sob.ts against HEAD)

Checked by splitting both files into per-id blocks.
- The blocks that differ are sob-08 and the ten "cannot" ids. Every other block is byte-identical to HEAD.
- sob-12 is byte-identical to HEAD.
- In the source table `S`, two entries were added: `whoArbo2025` and `whoDengue2012`. Only sob-08 cites them.
- Eight entries were removed: `cafg`, `gina`, `gold`, `extripSal`, `perc`, `adjust`, `bts` and `atls`. Each is cited only by the HEAD text of a "cannot" id (sob-01, 04, 05, 06, 09, 10 and 14), so these removals come from the round 1 text.
- The writer report mentions only the two additions. **Coordinator:** restoring those ids to HEAD must also restore these eight `S` entries, or the type check will fail.

## Not a duplicate

- **Keeper abdominal-pain-06.** The keeper keys the DKA diagnosis, saline with insulin and potassium, the insulin and potassium plan, and no CT. sob-08 keys none of these decisions and does not retell the DKA story.
- **D1.** I confirm the writer's claim that sob-08 uses no D1 repeat. D1 stays at 19 of 20.
- **Decision search.** I searched `allkeys.tsv` and `src/samps` for dengue, colloid and albumin, platelet transfusion, capillary refill, holding or avoiding a diuretic, and reducing fluid. The nearest hits:
  - multiple-trauma-41 q1 keys no routine platelets, but in an antiplatelet head injury. That is a different reason.
  - chest-pain (s05) q4 keys no diuretic in tamponade. That is a different reason.
  - burns-25 q4 and shock-22 q1 give albumin, which is the opposite decision.
  - shock-03 q2 and q5 key crystalloid boluses with repeat lactate and capillary refill as perfusion markers in sepsis.
  - pulmonary-edema-34 keys IV furosemide for overload after sepsis fluids, which is the opposite decision for a different reason.
- **Other writers.** No in-progress story in the working tree or in the r2 reports uses dengue, a Philippines return or plasma leak.
- **simcheck.** Top hits were signed sob-08 (0.16), infectious-diseases-23 (0.14), shock-12, pulmonary-edema-08, pulmonary-edema-34 and pulmonary-edema-12. None is a retelling.
- **Compared with infectious-diseases-23 (outpatient dengue).** That SAMP keys the diagnosis, malaria smears, acetaminophen with oral fluids instead of ibuprofen, and the admission warning signs. sob-08 gives the diagnosis in the stem (NS1 positive, smears negative) and keys the critical phase: causes of dyspnea, fluid and product choice in shock, and overload management. The two share the phase of illness and nothing more. The ibuprofen detail in sob-08's stem echoes infectious-diseases-23 q3 but is not keyed or used anywhere in sob-08. It is harmless background, and the writer may drop it.

## markQuestion probes (engine `markQuestion`, run from a scratchpad script, no repo files touched)

| Answer set | q1 | q2 | q3 |
|---|---|---|---|
| Keeper abdominal-pain-06 answers, several orders | 0/3 | 1/3 ("IV 0.9% saline bolus" hits `cryst`) | 0/3 |
| Signed HEAD sob-08 answers | 1/3 (Kussmaul or loss of compensation hits `acid`) | 1/3 (saline) | 1/3 ("normal oxygen saturation" hits `o2`) |
| Signed shock-03 answers | not tested | 2/3 | not tested |

The keeper does not reach full marks anywhere. Natural correct answers score 3/3 on every question.

The defects the probes found:
- q2: "Transfuse packed red cells" earns `rbc`. So does "Blood transfusion now" (3/3 with "Crystalloid" and "CRT"). The item is conditional ("only if major bleeding or a falling hematocrit in shock"), but the match phrases `red cell`, `packed cell`, `prbc`, `blood transfusion` and `transfuse blood` credit transfusing now. That is the wrong action at a hematocrit of 0.52 with no bleeding.
- q2: "Saline boluses", "Saline" and "More saline" score 0, but "normal saline" and "0.9% saline" score. The item has no bare `saline` phrase.
- q3: these all score 0 on `diur`, the central decision of q3: "Don't give Lasix", "No diuresis during the leak", "Furosemide is contraindicated during the leak phase", "Diuretics only after the critical phase" and "Furosemide once out of the critical phase". "Do not give furosemide", "Hold off on diuretics" and "Avoid Lasix" do score.
- q3: "Cut back the IV rate" scores 0.
- q1: "Fluid overload" earns `edema` and "Bleeding" or "Anemia" earns `bleed` at presentation. For example, "shock, capillary leak, fluid overload" scores 3/3.
- q2: "Ringer's lactate bolus, repeat lactate, avoid fluid overload" scores 3/3 without addressing either colleague suggestion (albumin, platelets). This is a design weakness, not a fail on its own.
- Wrong answers behave: "Give albumin 25%", "Albumin 5% bolus", "Transfuse platelets", "Furosemide 40 mg IV" and "Rapid sequence intubation" hit unacceptable items and score 0 for that line. Bare "Albumin", "Platelet transfusion", "Lasix" and "Intubate" match nothing and also score 0, so there is no scoring leak.

## Rows

### sob-08 (cluster 22, keeper abdominal-pain-06)

| Q | Verdict | Reason |
|---|---|---|
| q1 | FAIL (fix needed) | The causes of dyspnea in the dengue critical phase are sound and sourced. Winter's formula recomputes: 1.5 x 12 + 8 = 26. The hematocrit rise is 33% over baseline. The pulse pressure is 14 mmHg. **Defect:** the `edema` item (fluid overload or ARDS) and the `bleed` item (occult bleeding, anemia) credit causes that are not present at presentation. She has had no IV fluid, and her hematocrit is 0.52. Her own explanation says these "can add to the problem later". The WHO 2012 handbook also places overload after IV fluid therapy. With 7 items and 3 required, "shock, capillary leak, fluid overload" scores 3/3. **Writer fix:** remove or reword those two items so that only present causes score (acidosis, shock, effusions, ascites, myocarditis as rare). Also add `third spac` to `pleural`. |
| q2 | FAIL (fix needed) | The keyed decision is sound. WHO 2025 5.1 supports crystalloid over colloid, and 5.2.2 and 5.2.3 support capillary refill time and lactate. WHO 2025 5.5 advises against prophylactic platelets below 50 x 10^9/L without active bleeding. The WHO 2012 handbook supports red cells for bleeding and a falling hematocrit in persistent shock. **Defect 1:** `rbc` credits transfusion now (see probes). **Writer fix:** limit the match phrases to crossmatch, group, or conditional wording ("if bleeding", "if hematocrit falls"). Add "transfuse now", "prbc now" and "blood transfusion now" to `unacceptable`. **Defect 2:** bare "saline" scores 0. Add `saline`. This cannot lift the keeper above its current 1/3. |
| q3 | FAIL (fix needed) | The keyed decision is sound and verbatim from WHO 2012 section 2.3.2, scenario 2: a hemodynamically stable patient within 48 hours of plasma leakage should have fluid reduced and diuretics avoided "because they may precipitate intravascular volume depletion". The same section gives oxygen at once and CPAP for an alert, cooperative, stable patient with little acidosis. Timing checks out: the fever settled 36 hours ago. **Defect:** the `diur` match misses natural correct wordings (see probes). **Writer fix:** add `dont give lasix`, `dont give furosemide`, `dont give diuretic`, `no diuresis`, `avoid diuresis`, `contraindicated`, `after the critical phase`, `out of the critical phase` and `after the leak`. Also add `cut back` to `fluid`. |

Specific checks asked for:
- **Crystalloid over colloid: WHO 2025 against WHO 2012.**
  - WHO 2025 makes a conditional recommendation on low-certainty evidence. The evidence comes from children only and includes no albumin trials. The guideline says fluid choice after initial resuscitation should be personalised.
  - The WHO 2012 handbook lets an adult whose shock persists with hematocrit above 50% have a second bolus of "crystalloid/colloid". It prefers colloid in hypotensive shock, and in overload scenario 2 it allows a switch to colloid at 1 to 2 mL/kg/h.
  - So the q2 situation is exactly where the two WHO documents differ. Keying crystalloid on the current guideline is defensible. Albumin is non-dangerous "unacceptable", so it zeroes only that line.
  - The explanation should say that WHO 2012 allowed colloid and WHO 2025 now suggests crystalloid, so a candidate trained on 2012 understands the key.
  - The writer's report says it "did not key colloid either way beyond rejecting albumin". That is inaccurate. `cryst` credits "no colloid", and hetastarch, pentastarch and dextran are unacceptable. The key is still acceptable, and HES is restricted in Canada, but the physician should know the key rejects colloid.
- **Holding furosemide during the leak.** This is supported, but only by the 2012 handbook. The 2025 guideline does not address diuretics. It is the deliberate opposite of pulmonary-edema-34, where IV furosemide is keyed after sepsis fluids. The explanation says why they differ.
- **"Saline" gives the keeper one mark in q2.** Acceptable. The keeper's "IV 0.9% saline bolus" earns 1 of 3 through `0.9% saline`, and 0 on q1 and q3. Rule 3 bars full marks only. The q2 decision (crystalloid rather than albumin after a colleague's suggestion, plus platelet refusal) differs from the keeper's decision (volume first in DKA). Crystalloid is correct in dengue, so the key must accept it. The real problem is the reverse: plain "saline" currently earns nothing (defect 2 above).

Unrequested writer changes:
- New title.
- `alsoTopics` gained `infectious-diseases`.
- Two new source constants.

All three are appropriate. The writer's report does not mention that the `S` table lost eight entries (see Diff scope). The loss belongs to the round 1 text, not to sob-08.

## Tests

`SAMP_BATCH=s17 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 passed. I ran nothing else in the repo; the type check was not run. No command was refused.

## For the physician

- sob-08 is a new dengue shock case in a returned traveller. The story and decisions are fresh. It uses no D1 slot, so D1 stays at 19 of 20. It is going back to the writer for match-phrase and key-item fixes only. It does not need a new story.
- **Colloid.** q2 keys crystalloid and rejects albumin on the current WHO 2025 arboviral guideline, a conditional recommendation on low-certainty evidence. The older WHO 2012 handbook still allowed colloid for persistent shock with a high hematocrit, which is this patient's situation. Please confirm that rejecting albumin suits Canadian practice.
- **Furosemide.** q3 keys holding furosemide during the leak phase on the WHO 2012 handbook alone. This is the opposite of the furosemide keyed for overload elsewhere in the bank, on purpose. Please confirm.
- **Rate of the first bolus.** The q2 update gives 1 L of Ringer's lactate over 30 minutes, about 33 mL/kg/h. The WHO 2012 handbook starts adults in compensated shock at 5 to 10 mL/kg/h. This is not keyed, but the case later turns on fluid overload. Consider whether the update should show a smaller first bolus.
- **Restoring the "cannot" ids.** When the coordinator restores the ten ids to HEAD, it must also restore the eight source entries the round 1 text removed: `cafg`, `gina`, `gold`, `extripSal`, `perc`, `adjust`, `bts` and `atls`.
