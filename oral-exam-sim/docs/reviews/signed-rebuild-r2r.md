# Signed-duplicate rebuild, round 2, fix r2r (sob-08)

Writer label r2r. File `src/samps/s17/sob.ts`, the sob-08 block only. This round fixes the scoring defects in `docs/reviews/signed-rebuild-r2a-review.md`. Nothing was committed.

## Scope kept

- The story, stem, vitals, updates, prompts, the three keyed decisions, the kinds (all `short`), the key features (q1 sob 2, q2 shock 3, q3 sob 3) and `required` (3, 3, 3) are unchanged.
- No other SAMP was touched. The source table `S` is unchanged. The explanations now name WHO 2012 by year, using the existing `whoDengue2012` entry.
- A diff against a copy of the file taken just before editing shows 23 changed lines, all inside the sob-08 block. Everything before and after the block is byte-identical.
- No held-back file and no DECISIONS.md were edited.

## Changes

| Q | Review asked | Done |
|---|---|---|
| q1 | Stop crediting fluid overload and occult bleeding as present causes. | Removed the `edema` (fluid overload or ARDS) and `bleed` (occult bleeding, anemia) items. The key now has 5 items (acidosis, shock, pleural effusion, ascites, myocarditis) for 3 required. "Shock, capillary leak, fluid overload" now scores 2/3. |
| q1 | Add `third spac` to `pleural`. | Matching is by whole word, so `third spac` would never match. Added `third spacing` and `third space` instead. |
| q1 | Explanation. | It now says that fluid overload and occult bleeding are not causes yet, because she has had no IV fluid and a hematocrit of 0.52 argues against blood loss, and that they can add to the problem later. |
| q2 | Narrow `rbc` to conditional or crossmatch wording. | Bare `red cell`, `packed cell`, `prbc`, `whole blood`, `blood transfusion` and `transfuse blood` were removed. `rbc` now needs a blood word (blood, red cell, prbc, transfuse, transfusion) together with a condition (if bleed or bleeding, unless bleed or bleeding, if hematocrit, if hct, for bleeding). It also takes crossmatch, group and screen, type and screen, type and cross, and explicit "not now" wording such as "no red cells", "no PRBC" and "no blood transfusion". Those last ones are the keyed decision at a hematocrit of 0.52. |
| q2 | Add transfusion now to the unacceptable list. | New unacceptable item "Red cell transfusion now, with a high hematocrit and no bleeding": `transfuse now`, `transfusion now`, `blood now`, `red cell now`, `prbc now`, `packed cell now`. It is not dangerous. A negated form ("No blood transfusion now") is not caught and scores `rbc`. |
| q2 | Add `saline` to `cryst`. | Done. The keeper stays at 1/3 on q2. |
| q2 | Explanation: name the WHO 2025 against 2012 change on colloid. | Added: "This is a change. The 2012 WHO handbook allowed crystalloid or colloid for a second bolus when shock persists with a hematocrit above 50%, and the 2025 advice is conditional and based on low-certainty evidence." Also added one sentence that her hematocrit of 0.52 shows concentration, not blood loss, so red cells are not given now. |
| q3 | `diur` must take "Don't give Lasix", "No diuresis", "Furosemide is contraindicated during the leak" and "Diuretics only after the critical phase". | Added `dont give lasix`, `dont give furosemide`, `dont give diuretic`, `no diuresis`, `avoid diuresis`, `hold diuresis`, and `furosemide`, `lasix` or `diuretic` with `contraindicated`. Also added each of furosemide, lasix, diuretic and diuresis with `after critical phase`, `out of critical phase`, `after leak` and `once leak`. I did not add bare `contraindicated`, `after the critical phase` or `after the leak` as the review suggested. On their own, "Intubation is contraindicated" or a second "More oxygen after the leak" line would score `diur`. The probes below show both still score 0. |
| q3 | `fluid` must take "Cut back the IV rate". | Added `cut back`. |
| q3 | Explanation: cite WHO 2012 for holding furosemide. | Now reads "The 2012 WHO dengue handbook advises oxygen at once and reducing IV fluid ... The same handbook advises against diuretics during the leakage phase ... The 2025 WHO guideline does not address diuretics." |

### Changes the review did not ask for (for the reviewer to judge)

- **q2 `plt`.** Added `platelet only if`, `platelet if bleed`, `platelet if bleeding` and `platelet unless`. Without them, "Platelet transfusion only if bleeding" would fall through to the new conditional `rbc` phrases ("transfusion" + "if bleeding") and use up the red cell item. It now scores `plt`.
- **q2 `taper`.** Added `cut back`, to match the q3 fix. Before this, "Cut back the rate once refill normal" scored 0.

## markQuestion probe

The script is `r2r/probe.ts` in the session scratchpad. It runs with `npx vite-node`, imports the engine's `markQuestion` and compares the pre-edit copy (`r2r/sob.before.ts`) with the working tree. The raw output is in `r2r/probe-output.md`. In each cell, the list in brackets shows the item each line hit. `U` means the line hit an unacceptable item, and `-` means no match.

| Change | Q | Answer lines | Before | After | Expected |
|---|---|---|---|---|---|
| q1 edema/bleed removed | q1 | "Shock", "Capillary leak", "Fluid overload" | 3/3 [shock,pleural,edema] | 2/3 [shock,pleural,-] | below 3 |
| q1 edema/bleed removed | q1 | "Pulmonary edema from fluid overload", "Occult bleeding", "Anemia" | 2/3 [edema,bleed,-] | 0/3 [-,-,-] | 0 |
| q1 edema/bleed removed | q1 | "ARDS", "Bleeding", "Shock" | 3/3 [edema,bleed,shock] | 1/3 [-,-,shock] | 1 |
| q1 natural correct | q1 | "Metabolic acidosis with respiratory compensation", "Pleural effusions from plasma leak", "Tense ascites splinting the diaphragm" | 3/3 [acid,pleural,ascites] | 3/3 [acid,pleural,ascites] | 3 |
| q1 natural correct | q1 | "Lactic acidosis", "Hypovolemic shock", "Dengue myocarditis" | 3/3 [acid,shock,myo] | 3/3 [acid,shock,myo] | 3 |
| q1 third spacing | q1 | "Third spacing into the chest", "Shock", "Acidosis" | 2/3 [-,shock,acid] | 3/3 [pleural,shock,acid] | 3 |
| q2 rbc narrowed | q2 | "Transfuse packed red cells", "Crystalloid", "CRT" | 3/3 [rbc,cryst,guide] | 2/3 [-,cryst,guide] | 2 |
| q2 rbc narrowed | q2 | "Blood transfusion now", "Crystalloid", "CRT" | 3/3 [rbc,cryst,guide] | 2/3 [U,cryst,guide] | 2 (line 1 unacceptable) |
| q2 rbc narrowed | q2 | "PRBC now", "Ringer's lactate", "Repeat lactate" | 3/3 [rbc,cryst,guide] | 2/3 [U,cryst,guide] | 2 (line 1 unacceptable) |
| q2 rbc narrowed | q2 | "Red cells", "Ringer's lactate", "Repeat lactate" | 3/3 [rbc,cryst,guide] | 2/3 [-,cryst,guide] | 2 |
| q2 rbc conditional | q2 | "Red cells only if bleeding", "Ringer's lactate", "Repeat lactate" | 3/3 [rbc,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 rbc conditional | q2 | "Crossmatch 2 units", "Ringer's lactate", "Repeat lactate" | 3/3 [rbc,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 rbc conditional | q2 | "Transfuse blood if hematocrit falls with ongoing shock", "Ringer's lactate", "Repeat lactate" | 3/3 [rbc,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 rbc conditional | q2 | "Group and screen", "Ringer's lactate", "Repeat lactate" | 2/3 [-,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 rbc conditional | q2 | "No blood transfusion unless she bleeds", "Ringer's lactate", "Repeat lactate" | 2/3 [-,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 rbc conditional | q2 | "No red cells now, hematocrit is high", "Ringer's lactate", "Repeat lactate" | 2/3 [-,cryst,guide] | 3/3 [rbc,cryst,guide] | 3 |
| q2 plt conditional | q2 | "Platelet transfusion only if bleeding", "Red cells only if bleeding", "Crystalloid" | 2/3 [-,rbc,cryst] | 3/3 [plt,rbc,cryst] | 3 |
| q2 plt unchanged | q2 | "No platelets", "Crystalloid", "CRT" | 3/3 [plt,cryst,guide] | 3/3 [plt,cryst,guide] | 3 |
| q2 plt unchanged | q2 | "Transfuse platelets", "Crystalloid", "CRT" | 2/3 [U,cryst,guide] | 2/3 [U,cryst,guide] | 2 (line 1 unacceptable) |
| q2 albumin unchanged | q2 | "Give albumin 25%", "Crystalloid", "CRT" | 2/3 [U,cryst,guide] | 2/3 [U,cryst,guide] | 2 (line 1 unacceptable) |
| q2 saline | q2 | "Saline boluses", "CRT", "No platelets" | 2/3 [-,guide,plt] | 3/3 [cryst,guide,plt] | 3 |
| q2 saline | q2 | "Saline", "Repeat lactate", "No platelets" | 2/3 [-,guide,plt] | 3/3 [cryst,guide,plt] | 3 |
| q2 saline | q2 | "More saline", "Repeat lactate", "No platelets" | 2/3 [-,guide,plt] | 3/3 [cryst,guide,plt] | 3 |
| q2 taper | q2 | "Cut back the rate once refill normal", "Crystalloid", "CRT" | 2/3 [-,cryst,guide] | 3/3 [taper,cryst,guide] | 3 |
| q3 diur wordings | q3 | "Don't give Lasix", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "No diuresis", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "No diuresis during the leak", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Furosemide is contraindicated during the leak", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Furosemide is contraindicated during the leak phase", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Diuretics only after the critical phase", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Furosemide once out of the critical phase", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Don't give furosemide", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur wordings | q3 | "Lasix after the leak", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur unchanged | q3 | "Do not give furosemide", "CPAP", "Oxygen" | 3/3 [diur,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur unchanged | q3 | "Avoid Lasix", "CPAP", "Oxygen" | 3/3 [diur,niv,o2] | 3/3 [diur,niv,o2] | 3 |
| q3 diur guard | q3 | "Intubation is contraindicated", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 2/3 [-,niv,o2] | 2 |
| q3 diur guard | q3 | "Oxygen", "More oxygen after the leak", "CPAP" | 2/3 [o2,-,niv] | 2/3 [o2,-,niv] | 2 |
| q3 fluid cut back | q3 | "Cut back the IV rate", "CPAP", "Oxygen" | 2/3 [-,niv,o2] | 3/3 [fluid,niv,o2] | 3 |
| q3 unacceptable unchanged | q3 | "Furosemide 40 mg IV", "CPAP", "Oxygen" | 2/3 [U,niv,o2] | 2/3 [U,niv,o2] | 2 (line 1 unacceptable) |
| q3 unacceptable unchanged | q3 | "Rapid sequence intubation", "CPAP", "Oxygen" | 2/3 [U,niv,o2] | 2/3 [U,niv,o2] | 2 (line 1 unacceptable) |

Keeper abdominal-pain-06 answers

| Order | q1 before | q1 after | q2 before | q2 after | q3 before | q3 after |
|---|---|---|---|---|---|---|
| 1 | 0/3 [-,-,-] | 0/3 [-,-,-] | 1/3 [-,cryst,-] | 1/3 [-,cryst,-] | 0/3 [-,-,-] | 0/3 [-,-,-] |
| 2 | 0/3 [-,-,-] | 0/3 [-,-,-] | 0/3 [-,-,-] | 0/3 [-,-,-] | 0/3 [-,-,-] | 0/3 [-,-,-] |
| 3 | 0/3 [-,-,-] | 0/3 [-,-,-] | 1/3 [cryst,-,-] | 1/3 [cryst,-,-] | 0/3 [-,-,-] | 0/3 [-,-,-] |
| 4 | 0/3 [-,-,-] | 0/3 [-,-,-] | 1/3 [-,cryst,-] | 1/3 [-,cryst,-] | 0/3 [-,-,-] | 0/3 [-,-,-] |
| 5 | 0/3 [-,-,-] | 0/3 [-,-,-] | 1/3 [-,-,cryst] | 1/3 [-,-,cryst] | 0/3 [-,-,-] | 0/3 [-,-,-] |

The keeper abdominal-pain-06 answer lines were "Diabetic ketoacidosis", "IV 0.9% saline bolus", "IV insulin infusion", "Monitor and replace potassium", the keyed q3 option and the keyed q4 option. They were probed in five orders and never score above 1/3 on any question. That one mark is still "IV 0.9% saline bolus" on `cryst` in q2, which the review accepted. Rule 3 is met.

## Residual points, not changed

- q2: "Transfuse platelets only if bleeding" still hits the unacceptable `transfuse platelet` phrase, because unacceptable items are checked first. This was already true before this round.
- q3: "Give furosemide after the critical phase" still hits the unacceptable `give furosemide` phrase for the same reason. "Lasix after the leak" and "Furosemide once out of the critical phase" do score.
- q2: "Ringer's lactate bolus, repeat lactate, avoid fluid overload" still scores 3/3 without mentioning albumin or platelets. The review called this a design weakness, not a fail, and did not ask for a fix.
- The review's physician points still stand: rejecting albumin against WHO 2012, holding furosemide on WHO 2012 alone, and the size of the first bolus in the q2 update. I did not change the update text.

## Checks

- `SAMP_BATCH=s17 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 465 passed.
- `npx tsc --noEmit -p .`: exit 0, no output.
- House style: sob-08 has no em or en dashes and no semicolons.
- No git write commands were run. No repo file was removed. No command was refused.
