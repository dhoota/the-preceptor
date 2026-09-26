# Independent review of r2r (sob-08 scoring fixes)

Scope: sob-08 in `src/samps/s17/sob.ts`. Prior review: `docs/reviews/signed-rebuild-r2a-review.md`. Writer report: `docs/reviews/signed-rebuild-r2r.md`. Pre-edit copy and the writer's probes are in `scratchpad/r2r/`. My probe script is `scratchpad/r2r-review/probe2.ts`. I did not edit or commit anything.

## Result

| SAMP | Verdict | Main reason |
|---|---|---|
| sob-08 | FAIL (fixable, keep the story and keys) | The requested fixes work, and the diff stays inside sob-08. But several of the new match phrases let wrong answers gain a mark that scored 0 before this round. The worst case is q3: "Furosemide for the overload after the leak" now earns `diur`, the item keyed against giving furosemide. All fixes are match-phrase changes inside the existing keyed decisions, so this goes back to the writer. It does not need a new story or new keys. |

## 1. Diff against the pre-edit copy

- The diff has 8 hunks, lines 725 to 774. All are inside the sob-08 block (lines 709 to 783). The rest of the file is byte-identical to the pre-edit copy.
- These are unchanged: id, topic, `alsoTopics`, title, stem, vitals, both updates, all three prompts, kinds (all `short`), `required` (3, 3, 3), key features (q1 sob 2, q2 shock 3, q3 sob 3), sources, `reviewed: false` and `version: 2`.
- sob-08 is still in `src/samps/held-back/r2a.json`.
- House style: sob-08 has no em dashes, en dashes or semicolons.
- **The q1 removal of `edema` and `bleed` is a scoring fix, not a re-key.** The prompt and the keyed decision are unchanged: what is causing her dyspnea now. The two items credited causes that are not present before any IV fluid and at a hematocrit of 0.52. The explanation already said they come "later". The r2a review asked for exactly this ("remove or reword those two items"). The other five items are unchanged, and 3 of 5 is still easy to reach with correct answers. Nothing was added or replaced, so the brief's bar on a replaced accept list does not apply.

## 2. Probes (engine `markQuestion`)

I re-ran the writer's probe script and got the same output as `r2r/probe-output.md`. Every requested fix works:
- q1 overload and bleeding answers no longer score.
- "Third spacing" scores.
- Bare "Red cells", "Blood transfusion" and "PRBC now" no longer score.
- "Saline" scores.
- The new q3 furosemide wordings score.
- "Cut back the IV rate" scores.

My own probes. Before is the pre-edit copy and After is the working tree. In the brackets, `U` means an unacceptable hit and `-` means no match.

### Wrong answers that now gain a mark (blocking)

| Q | Answer lines | Before | After | Phrase at fault |
|---|---|---|---|---|
| q3 | "Furosemide for the overload after the leak", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | `furosemide after leak` |
| q3 | "Diuresis after the leak into the lungs", "CPAP", "Oxygen" | 2/3 | 3/3 [diur] | `diuresis after leak` |
| q3 | "Lasix once to offload the leak fluid", "CPAP", "Oxygen" | 2/3 | 3/3 [diur] | `lasix once leak` ("once" read as a single dose) |
| q3 | "Furosemide once for the leak", "CPAP", "Oxygen" | 2/3 | 3/3 [diur] | `furosemide once leak` |
| q2 | "Transfuse if hematocrit rising", "Ringer's lactate", "CRT" | 2/3 | 3/3 [rbc] | `transfuse if hematocrit` |
| q2 | "Give blood if hematocrit is high", "Ringer's lactate", "CRT" | 2/3 | 3/3 [rbc] | `blood if hematocrit` |
| q2 | "Transfuse if hct high", "Ringer's lactate", "CRT" | 2/3 | 3/3 [rbc] | `transfuse if hct` |
| q2 | "Platelets only if count below 50", "Ringer's lactate", "CRT" | 2/3 | 3/3 [plt] | `platelet only if` (unrequested) |
| q2 | "Platelet transfusion unless count above 50", "Ringer's lactate", "CRT" | 2/3 | 3/3 [plt] | `platelet unless` (unrequested) |
| q2 | "Cut back on albumin", "Ringer's lactate", "Repeat lactate" | 2/3 | 3/3 [taper] | bare `cut back` (unrequested) |
| q2 | "Cut back platelets", "Ringer's lactate", "Repeat lactate" | 2/3 | 3/3 [taper] | bare `cut back` (unrequested) |
| q2 | "Hypertonic saline", "Repeat lactate", "CRT" | 1/3 | 2/3 [cryst] | bare `saline` (minor) |

Why these happen: `lineMatches` needs every word of a phrase somewhere in the line, in any order. So a conditional phrase like "transfuse if hematocrit" does not carry the direction ("falls"). "After leak" and "once leak" do not carry the meaning "only after". The q3 furosemide case is the most serious, because it is the exact trap q3 tests.

### Correct answers (checked, not blocking)

- These score: "Platelets only if she bleeds", "No blood transfusion now", "Transfuse only if she bleeds", "Blood products only for major bleeding", "No PRBCs, hematocrit is hemoconcentration", "Lasix after the critical phase", "Furosemide only after the critical phase", "Diuretics are contraindicated", "Hold off on diuretics", "No Lasix yet", "Cut back IV fluids to KVO", "Bilateral pleural effusions", "Ascites", "Third space fluid in pleura".
- These miss `rbc`: "Red cells not indicated" (3/3 before, now 2/3), "No blood products" and "Avoid transfusion". This is a small loss inside a 5-item, 3-required question, and the candidate can override the mark. It is not blocking. The writer could add `no blood product` and `avoid transfusion`. See the caution below about negation phrases.

### Still leaking from before this round (not a gain, but worth fixing while the SAMP is open)

- "Crossmatch and transfuse 2 units" earns `rbc` through `crossmatch`. It scored 3/3 before this round as well.
- "Transfuse red cells, no albumin" and "Transfuse PRBC with no delay" earn `rbc` through `no red cell` and `no prbc`. A phrase that contains a negation word matches in any order and skips the negation check, so "no" anywhere in the line is enough. Bare `red cell` gave the same result before this round.

### Unrequested changes, judged on their merits

- **q2 `plt` conditional phrases.** The aim is sound. "Platelet transfusion only if bleeding" should score `plt` and not use up `rbc`. But `platelet only if` and `platelet unless` are too loose. They credit prophylactic transfusion to a count threshold, and at a count of 28 that is the wrong answer the item rejects. `platelet if bleed` and `platelet if bleeding` are acceptable. **Verdict: not accepted as written.** Keep the bleed-tied phrases. Replace `platelet only if` and `platelet unless` with bleed-tied forms (`platelet unless bleed`, `platelet unless bleeding`). The existing `platelet if bleed` phrases already cover "only if bleeding".
- **q2 `taper` "cut back".** Matching the q3 fix is reasonable, and "Cut back the fluids" is equivalent to the existing `reduce fluid`. But bare `cut back` has no fluid word, so it credits "Cut back on albumin" or "Cut back platelets". **Verdict: not accepted as written.** Use `cut back fluid`, `cut back iv`, `cut back rate` and `cut back the rate`. The same narrowing is advisable for q3 `fluid`, although there the `o2` and `niv` items sit earlier in the accept order and absorb most stray lines.

## 3. Open items

| Item | Blocks landing? | Reasoning |
|---|---|---|
| "Transfuse platelets only if bleeding" and "Give furosemide after the critical phase" hit unacceptable items | No | Neither unacceptable item is dangerous, so the line scores 0 as it would with no match, and the candidate can override. The cause is the engine: unacceptable items are checked before accept items. A writer cannot carve out a conditional within the matcher. The only in-file option is to drop `give platelet`, `transfuse platelet` and `give furosemide` from `unacceptable`. That changes only the label on a bare wrong answer, not its score. This was pre-existing before r2r. Record it for an engine change, where unacceptable is skipped when an accept item containing "only if", "unless" or "after" also matches. |
| "Ringer's lactate bolus, repeat lactate, avoid fluid overload" scores 3/3 on q2 | No | All three are correct actions for her. Choosing Ringer's lactate is the keyed crystalloid-over-colloid decision, even if albumin goes unnamed. With 5 items and 3 required, a candidate who skips the platelet question loses nothing. This is a design choice, not a scoring error. The physician may want `required` raised, but that would be a re-key and is out of scope for a match-phrase round. |
| q2 and q3 explanations naming WHO 2012 against 2025 | No on the facts. One wording fix goes with the blocking fixes. | Checked against the opened sources in `scratchpad/r2a/src/`. The WHO 2012 handbook (who2012.txt, about line 1664) says: in adults, if the hematocrit "increases or is still high (e.g. haematocrit > 50%), repeat a second bolus of crystalloid/colloid solution at 10−20 ml/kg/hour". WHO 2025 section 5.1 says "WHO suggests using crystalloid fluid rather than colloid fluid ... [Conditional recommendation, low certainty evidence]". The 2025 text has no mention of diuretics or furosemide (a full-text grep found none). WHO 2012 advises "Avoid diuretics during the plasma leakage phase because they may precipitate..." (about line 2480) and gives furosemide to patients "out of the critical phase" (about line 2468). All claims are accurate. **Wording defect:** in q2 the inserted sentence sits between the 2025 sentence and "It recommends capillary refill time and lactate" and "It suggests against prophylactic platelet transfusion". "It" now reads as the 2012 handbook. Change both to "The 2025 guideline recommends" and "It also suggests against". |

## 4. Keeper and D1

- **Keeper abdominal-pain-06.** I ran all 720 orders of the six keeper answer lines. The best scores are q1 0/3, q2 1/3 and q3 0/3. The one q2 mark is "IV 0.9% saline bolus" on `cryst`, which the r2a review accepted. The keeper never reaches full marks. Rule 3 is met.
- **D1.** This round changes only match phrases and explanation text. It keys no new decision. sob-08 is not in the D1 table in `docs/DECISIONS.md`, and the running total there reads 19. The new `rbc` wordings (crossmatch, group and screen) sit under the keyed decision to withhold red cells unless she bleeds. That is not gi-bleed-01 q2's "early crossmatch and transfuse" decision. No repeat is added.

## Rows

| Q | Verdict | Reason |
|---|---|---|
| q1 | PASS | The `edema` and `bleed` items were removed as requested. This is a scoring fix inside the keyed decision. `third spacing` and `third space` work. The explanation is correct. No wrong answer gains. |
| q2 | FAIL (writer fix) | The requested fixes work. But new phrases let wrong answers gain. In `rbc`: drop `blood if hematocrit`, `blood if hct`, `red cell if hematocrit`, `red cell if hct`, `prbc if hematocrit`, `prbc if hct`, `transfuse if hematocrit`, `transfuse if hct`, `transfusion if hematocrit` and `transfusion if hct`. Use falling-hematocrit forms instead, such as `transfuse hematocrit fall`, `transfuse hematocrit drop`, `blood hematocrit fall` and `red cell hematocrit fall`. In `plt`: drop `platelet only if` and `platelet unless`, and use `platelet unless bleed` and `platelet unless bleeding`. In `taper`: replace `cut back` with fluid-tied forms. Optionally add "hypertonic saline" to `unacceptable`. Fix the "It" antecedent in the explanation. |
| q3 | FAIL (writer fix) | In `diur`: remove all eight `after leak` and `once leak` phrases. "Furosemide for the overload after the leak" and "Lasix once..." now earn the item that is keyed against them. Keep `after critical phase` and `out of critical phase`. If the writer wants leak timing, use end-tied forms such as `furosemide leak end`, `furosemide leak over`, `furosemide leak stop`, `lasix leak end` and `lasix leak over`, and probe them. Optionally narrow `cut back` in `fluid`. |

## Tests

`SAMP_BATCH=s17 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 passed. I ran nothing else. No command was refused.

## For the physician

- sob-08 keeps its dengue story and its three keyed decisions. This round fixed the scoring problems from the last review, but some of the new wordings now reward wrong answers. The most important is that "furosemide for the overload after the leak" earns the mark for holding furosemide. This goes back to the writer for match-phrase changes only.
- **Engine limit, not fixable in the SAMP:** a correct conditional answer that starts with a wrong action, such as "Transfuse platelets only if bleeding" or "Give furosemide after the critical phase", is marked unacceptable and scores 0 on that line. The candidate can override the mark. An engine change would fix this across the bank.
- **q2 can be answered in full without the colleague's two suggestions.** Ringer's lactate, repeat lactate and avoiding overload score 3/3. All three are correct. If you want the albumin and platelet decisions to be required, that is a re-key for a later round.
- The WHO 2012 against 2025 wording in the explanations is accurate against both documents. The earlier physician points still stand: rejecting albumin, holding furosemide on the 2012 handbook alone, and the size of the first bolus in the q2 update.
