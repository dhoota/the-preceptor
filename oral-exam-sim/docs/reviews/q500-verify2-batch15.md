# Q500 fresh verification, round 2: batch15

Fresh independent review of the four oral cases in `src/cases/batch15/` after the writer's round 2 revision (`docs/reviews/q500-writer-batch15-r2.md`). This reviewer has not written, edited or reviewed any batch15 file before and made no edits (REVIEW-RULES rule 1). The changes were read with `git diff ddfb2aa HEAD` and `git show a19b8bd` (the later retitle of the heat case to "Found in a tent by the river"). Every finding, node, choice, feedback line, model answer, rubric item and source in all four cases was read on every path.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch15`: no output.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- Path walk of every case (temporary test outside the case folder, removed after use):

| Case | Questions on every path | Longest path | Branching | Rubric H, P, M, Pr (total) | History | Management | Critical |
|---|---|---|---|---|---|---|---|
| headache-building-over-five-days | 8 | 650 s | 5 | 8, 7, 10, 8 (33) | 24% | 30% | 3 |
| unwell-after-a-night-shift | 8 | 640 s | 4 | 8, 6, 10, 7 (31) | 26% | 32% | 3 |
| weak-and-pale-after-a-stent | 8 | 635 s | 4 | 7, 6, 10, 8 (31) | 23% | 32% | 3 |
| unhoused-man-hallway-heat-stroke | 7 | 525 s | 3 | 7, 5, 11, 8 (31) | 23% | 35% | 3 |

  Every rubric item is used by a question and every source is cited by an item.
- House style: no em dashes, no en dashes, no semicolons in strings, no personal names, Canadian spelling. `author: "Preceptor"`, `reviewed: false`, `version: 1` in all four.
- Titles: `grep -rh 'title:' src/cases src/samps` shows all four titles are unique and neutral.
- Uniqueness: the per-topic catalogues (suicide-risk, gi-bleed, environmental, headache, tox, loc, delirium-agitation, ischemic-heart-disease and others), plus the current source of SAMPs `src/samps/s11/gi-bleed.ts` and `src/samps/s68/gi-bleed.ts`, since the catalogue's [Q500 NEW] entries are stale.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| headache-building-over-five-days | PASS | Province fix applied exactly. No other issue |
| unwell-after-a-night-shift | FAIL | All three fixes applied and the new opening is unique. One clock error in the end node |
| weak-and-pale-after-a-stent | FAIL | Both fixes applied, but the case retells SAMP gi-bleed-14 and collides with Q500 drafts gi-bleed-48 and gi-bleed-50 |
| unhoused-man-hallway-heat-stroke | FAIL | Rebuild is unique and sound. One clock error and one mislabelled blood pressure |

## 1. headache-building-over-five-days: PASS

### Previous required fix

- `q-dispo` model answer line 2 and `bs-pr2` text now match the verdict word for word. Applied correctly and completely. No other change in the diff.

### Full review

- Numbers: enoxaparin 1 mg/kg at 66 kg = 66 mg every 12 hours. Lorazepam 0.1 mg/kg = 6.6 mg, capped at 4 mg. Levetiracetam 60 mg/kg = 3960 mg, under 4500 mg. All correct.
- Clinical content matches ESO 2017 (LMWH preferred, UFH accepted, anticoagulate despite hemorrhagic infarct, no DOAC acutely, avoid estrogen, LMWH prophylaxis in later pregnancy considered) and SNNOOP10.
- C1: c-cocktail unsafe (sends a secondary headache home), c-lp-first unsafe (herniation risk), c-txa unsafe (procoagulant in venous thrombosis), c-wait partial, c-blame unsafe. All fit C1.
- Uniqueness: the bank's other CVT items are postpartum (SAMP s11, s15, batch13). Not repeated.
- SNNOOP10 is the name of a cited published tool, not a mnemonic the case teaches. Acceptable.

## 2. unwell-after-a-night-shift: FAIL

### Previous required fixes

1. Uniqueness against SAMP s52 suicide-risk-30. Applied. The chest tightness, troponins, panic label and lorazepam distractor are gone. The new hook (vomiting after drinking alone to sleep after a bereavement, in a nurse weeks into sertraline) is not in the suicide-risk, tox or loc catalogues. Closest items checked and judged distinct: suicide-risk-36 (sober man after a drinking text, keyed on morning discharge timing), suicide-risk-28 (pills to sleep, keyed on observation and capacity), suicide-risk-06 and -07 (low risk passive ideation, later parts already accepted in the previous verdict). The hidden suicidality is found through an alcohol presentation, which is key feature 2 ("substance using patients").
2. C1, `c-form1`: now `partial`. Applied.
3. Province: the stem now says "a community hospital in Ontario". Applied.

### Unrequested changes (rule 4), judged on merit

- Id, file, export and title renamed to `unwell-after-a-night-shift` and "Unwell after a night shift". Accepted. The old title described the removed presentation, the new one is neutral and unique, and `index.ts` matches.
- Gulati 2021 removed, Dart 2023 added. Accepted. Dart 2023 opened at https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062. It says "A nondetectable concentration at 2 to 4 h after ingestion typically excludes significant ingestion" and "If in doubt, the history should be considered unreliable". `ns-p1` teaching matches.
- Times moved (husband 15:00, psychiatrist 16:30, discharge 18:30, mental status at 13:30). Checked below.

### Numbers and clinical content

- Ethanol 19 mmol/L (about 88 mg/dL) at 10:45 after most of a bottle of wine near 08:00 in a 68 kg woman who then vomited 7 times: plausible. Clinically sober by 13:30 at the usual elimination rate: plausible.
- Acetaminophen undetectable at 10:45, about 2.5 to 3 hours after any possible ingestion: inside the Dart 2 to 4 hour statement.
- C1: c-early-discharge unsafe (discharges an intoxicated patient with an uncertain ingestion), c-gastritis partial, c-leading partial, c-avoid unsafe, c-admit partial, c-form1 partial, c-lock partial. All fit C1.
- Clock on every path: s-open 10:40, labs 10:45, s-early-discharge 11:20 (blood work not back, consistent), s-gastritis 13:40, q-formulate when sober, s-husband 15:00, s-admit 16:30, crisis nurse hours 08:00 to 20:00. Consistent except the item below.

### Required fix

1. Clock, end node. File `src/cases/batch15/unwell-after-a-night-shift.ts`, node `end`.
   - Current: "She leaves at 18:30 with her husband and a written safety plan. The pills are handed in at a pharmacy that afternoon."
   - Problem: on the `c-lock` path, `s-lock` has her husband take the box to the pharmacy "on the way home", which is after 18:30. On the other paths her husband is at the hospital from 15:00. "That afternoon" contradicts the clock.
   - Required: "She leaves at 18:30 with her husband and a written safety plan. Her husband hands the pills in at a pharmacy on the way home."

## 3. weak-and-pale-after-a-stent: FAIL

### Previous required fixes

1. C1, `q-resus` `c-crystalloid`: now `unsafe`, with feedback that opens with the reason. Applied correctly.
2. Uniqueness against SAMP gi-bleed-36: `q-antiplatelet`, its choices and consequence nodes are removed. The antiplatelet plan is now ungraded model answer text in `q-resus` and `q-dispo`, as the verdict allowed. Applied correctly. The case keeps 4 branching questions and the fixed rebleed (`s-rebleed`) on every path.

### Unrequested changes (rule 4), judged on merit

- New graded `q-scope`, consequence nodes `s-cardiology-first` and `s-wait-peak`, new `wp-m3` (Barkun) and `wp-pr2` (Fourth UDMI), reworded `q-source` prompt and `s-rebleed`. Clinically sound: Barkun 2019 advises endoscopy within 24 hours, and a 2 day delay in a patient with a Glasgow Blatchford score of 14 delays time critical care, so `c-wait-peak` unsafe fits C1. `wp-pr2` is supported by the Fourth UDMI definition of a type 2 infarction. Uniqueness is judged below.

### Numbers

- Glasgow Blatchford score 14 (urea 21.4 mmol/L = 4, hemoglobin 71 g/L in a man = 6, systolic 94 = 2, pulse 118 = 1, melena = 1, near faint scores 0, no liver disease, EF 50%): correct.
- Pantoprazole 80 mg IV then 8 mg per hour for 3 days after endoscopic therapy, then twice daily to day 14: correct.
- Clock: relative phases only. Consistent on every path.

### Uniqueness: residual overlaps judged

The writer flagged gi-bleed-14 and gi-bleed-38. Read against the current SAMP source:

- **SAMP `src/samps/s11/gi-bleed.ts` gi-bleed-14 "Chest pressure and pallor" (landed).** A 66 year old man with exertional chest pressure, 1 mm horizontal ST depression in V4 to V6, a raised high sensitivity troponin and hemoglobin 72 g/L, with a heparin bolus about to be ordered. q2 keys "Hold anticoagulation, do rectal exam and GI assessment" against heparin with ticagrelor, nitroglycerin and angiography. q3 keys "Transfuse red cells now, reassess, target 80 g/L or more" against "No transfusion unless hemoglobin falls below 70 g/L". q4 keys gastroenterology for endoscopy within 24 hours and cardiology to plan angiography timing, with angiography deferred until the bleeding is controlled.
  This case: a 66 year old man, exertional chest heaviness, 1.5 mm horizontal ST depression in V4 to V6 and I, aVL, hemoglobin 71 g/L. `q-resus` keys transfuse now above 80 g/L (strong) against heparin, nitroglycerin and catheterization (`c-acs`, unsafe) and transfusion only below 70 g/L (`c-crystalloid`, unsafe). That is gi-bleed-14 q2 and q3, with the same age, ECG and hemoglobin. Same diagnosis and same key decisions. **This is a repeat (Q500_BRIEF rule 3)** that neither the first QA nor the previous verdict found. The previous verdict's ruling on q-antiplatelet ("the consultant conflict framing changes the wording, not the decision") applies here too.
  `q-scope` (endoscopy within 24 hours, not deferred for the infarction, cardiology informed) is close to gi-bleed-14 q4, but gi-bleed-14 keys a consult list and does not test a consultant's deferral. On its own I would accept `q-scope` against the landed bank. See the Q500 collision below.
- **SAMP gi-bleed-38 "Near faint on the toilet" (landed).** It keys a recent sphincterotomy as the clue to an upper source for maroon stool, and a side viewing duodenoscope. `q-source` keys the response to a proposed colonoscopy, using melena, urea and NSAID with dual antiplatelets. The shared teaching is key feature 2 itself. Accepted against gi-bleed-38.
- **Q500 collision, not landed (for the coordinator).** `src/samps/s68/gi-bleed.ts` is in QA now and its current text (not the stale catalogue entry) overlaps this case:
  - gi-bleed-48 "Maroon stools before dawn": maroon stool with clots in a man on naproxen and ASA, urea raised out of proportion to creatinine, q3 keys "Immediate upper endoscopy" against "Colonoscopy after bowel preparation" after CT angiography, and q4 keys high dose PPI for 72 hours after clips and thermal coagulation of a duodenal ulcer with a visible vessel. This repeats `q-source` (upper endoscopy now against colonoscopy tomorrow or CT angiography, same clues) and the `q-dispo` endoscopy finding and PPI plan.
  - gi-bleed-50 "Fall in the kitchen with a sore wrist": q3 keys "Within 24 hours of presentation" against "After her wrist is fixed in 2 days", and q5 is a large maroon stool with clots while she waits for endoscopy, keyed as brisk upper bleeding. This repeats `q-scope` (within 24 hours against a 2 day deferral for another condition) and the `s-rebleed` to `q-source` twist.
  Only one of the two batches can keep these decisions. Since this case fails on gi-bleed-14 anyway, the simplest resolution is to settle it in this revision.

Taken together, nearly every graded decision in this case now exists in gi-bleed-14, gi-bleed-36, gi-bleed-48 or gi-bleed-50. The distinctive material is the prescribing gap (naproxen from a walk-in clinic on top of dual antiplatelets with no PPI) and its communication to the wife and prescribers, the massive hemorrhage protocol response to a rebleed, and the type 2 mechanism argued with a consultant.

### Required fixes

1. Remove the mirror of gi-bleed-14 in the data. In `stem`, `card`, `hpi`, `ecg`, `labs` and every node or feedback line that quotes them, change at least the age (not 66), the ECG description (not horizontal ST depression in V4 to V6) and the hemoglobin (not 71 or 72 g/L). Recompute the Glasgow Blatchford score and every line that quotes it (`q-resus`, `q-scope`, `c-wait-peak` feedback, `wp-pr1`).
2. `q-resus` must not key gi-bleed-14 q2 and q3. Required: make `q-resus` a non branching question (keep its model answer, `wp-m1`, `wp-m2` and `wp-pr1` as ungraded content), set its `next` to `q-scope`, and delete `c-blood`, `c-crystalloid`, `c-acs`, `s-crystalloid` and `s-acs`. If the writer prefers to keep `q-resus` branching, its graded choices must key a decision gi-bleed-14 does not key, and heparin, nitroglycerin, catheterization and a 70 g/L threshold may not be the distractors.
3. Resolve the Q500 collision with s68 for `q-scope` and `q-source`. Unless the coordinator rules that s68 changes instead, this case must not key endoscopy within 24 hours against a 2 day deferral (gi-bleed-50 q3), nor upper endoscopy now against colonoscopy or CT angiography for maroon stool with these clues (gi-bleed-48 q3). Either question may stay as ungraded model answer content. Key feature 2 stays covered by `wp-p4`.
4. Keep at least 3 branching questions on every path, each keying a decision that no landed SAMP or case and no current Q500 draft keys. A candidate not found in the gi-bleed or cqi catalogues: make `q-handover` branching on how to explain and report another clinician's prescribing gap (naproxen with dual antiplatelets and no PPI) honestly to the wife, with the patient's consent, and to the walk-in clinic, family physician and pharmacist. Under C1, blaming the clinic or hiding the cause is partial, not unsafe. Any other new decision must be checked against the catalogues and the current s54 to s70 source and named in the writer report.
5. If the result keeps less than one graded decision per three questions on any path, the writer should say so and consider rebuilding the case around the distinctive material listed above.

### Recommended, not required

- On the `c-scope-today` path the same gastroenterologist who has just agreed to scope in the ICU then proposes colonoscopy tomorrow. If `q-source` stays, give the suggestion to a different speaker (for example the admitting internist) so the consultant does not read as obstructive twice.

## 4. unhoused-man-hallway-heat-stroke: FAIL

### Previous required fix

The verdict required a rebuild. Checked item by item:
- The surge escalation (`s-surge`, `q-surge`, its consequence nodes, old `bd-l1`) is gone. `s-outreach` now concerns people at the encampment and says nothing about more patients coming to the department. Applied.
- The day 3 heat wave, seniors' building and failed air conditioning are gone. Applied.
- The s09 environmental-02 risk factor and NMS, serotonin and thyroid differential questions are gone. The new `q-ddx` keys alcohol withdrawal, Wernicke, aspiration with possible sepsis and head injury alongside heat stroke. No environmental, tox, loc or delirium item keys that combination. Applied.
- The batch03 graded cooling choices and the separate stop question are gone. Cooling is now the ungraded `q-cool`, which key feature 2 needs. Accepted.
- Kept as the verdict allowed: the public health call (`bd-l2`) and disposition to a cooled setting (`bd-d1`).
- Key features 1 and 2, 3 branching questions (`q-first`, `q-ddx`, `q-public`) and a fixed escalation (`s-outreach`) on every path. Applied.

### Uniqueness of the new scenario

- No heat item in the bank sets heat stroke in a person living outdoors. environmental-18 (tree planter, meningococcemia, "simultaneous cooling and antibiotics") and environmental-33 and -38 are different diagnoses.
- `q-first` revisits a triage label of intoxication. The bank teaches "do not blame alcohol" elsewhere (loc-01 "Found on a bench in November", head injury, keyed on findings against intoxication. tox-06 toxic alcohol. loc "Turned away at the bar door", DKA). Here the keyed decision is a rectal core temperature against a falsely low tympanic reading and moving to cooling, which no item keys. Accepted. The move from a park bench to a tent removes the scene overlap with loc-01 and s53.
- Id: "hallway" refers to the hallway stretcher in the emergency department where triage left him (`triage` finding, `s-open`, phase "The hallway"), not the scene. It is consistent with the content. Accepted. The rubric prefix `bd-` is left over from the old id. Cosmetic only.

### Sources verified this round

- Wood E and colleagues, CRISM, CMAJ 2023, full text read through Europe PMC (PMC10581718). Parenteral thiamine 200 to 300 mg daily for at least 5 days for suspected Wernicke, decompensated liver disease or risk of malnourishment, recommendation 7 (benzodiazepine for high risk of severe withdrawal, ideally inpatient) and recommendation 13 (SSRIs not recommended in AUD with a concurrent depressive disorder): confirmed. Supports `bd-h2`, `bd-m2`, `bd-c1`.
- Health Canada 2011 extreme heat guide, opened at the cited canada.ca URL: "People who live in shelters and outdoors are automatically at a higher risk of heat-related illness and death", core temperature "most accurately assessed by rectal thermometer", "Antipyretics have not been demonstrated to be effective", "applying water to the entire skin surface, and fanning vigorously", outreach to isolated people and coordination with community care services: confirmed. Supports `bd-h1`, `bd-h4`, `bd-p1`, `bd-l1`, `bd-l2`, `bd-d1`.
- Epstein Y, Yanovich R. Heatstroke. N Engl J Med 2019, PMID 31216400 confirmed through Europe PMC.

### Numbers

- GCS 9 (E2 V3 M4) = 9. Correct.
- Osmolar gap: calculated 2 x 132 + 5.6 + 11.8 = 281.4, plus ethanol 9 (or 11.3 at 1.25 x) = 290.4 to 292.7 mmol/kg. Measured 298 gives a gap of about 5 to 8. "Normal" is correct once ethanol is counted.
- Cooling rate 0.2 against 0.1°C per minute and stop at about 39°C: consistent with WMS 2019, as accepted in the previous verdict.
- Thiamine 300 mg IV is inside the CRISM range.
- C1: `c-sleep` unsafe and `c-withdrawal` unsafe (both delay time critical care). `c-tympanic` partial: it starts weak cooling in a monitored bed and does not wait, comparable to the partial ice packs choice in batch03. Accepted. `c-heat-only` and `c-later` partial: accepted.

### Required fixes

1. Clock. File `src/cases/batch15/unhoused-man-hallway-heat-stroke.ts`, node `s-outreach`.
   - Current: `phase: "17:45"`.
   - Problem: on the `c-sleep` path ice water cooling starts at 17:20 from 42.0°C, so `q-ddx` ("40.3°C and falling") is about 17:30 to 17:35. `s-heat-only` ("Twenty minutes later") then lands near 17:55 and `s-withdrawal` ("Fifteen minutes later") near 17:50, both after 17:45.
   - Required: `phase: "18:00"`. `s-later` (18:30), `q-leave` (18:40) and the end node stay consistent.
2. Blood pressure mislabelled. The card gives 100/58 mmHg and the response finding 108/64 mmHg, which is not hypotension (systolic 90 or more, MAP about 72). The case calls him hypotensive in three places and builds `bd-m4` teaching on possible septic shock.
   - `q-ddx` model answer line 4. Current: "He is hypotensive with a lactate of 4.9 mmol/L." Required: "His pressure is low for an untreated hypertensive man and his lactate is 4.9 mmol/L."
   - `c-heat-only` feedback. Current: "an antibiotic now for possible aspiration with hypotension and a lactate of 4.9 mmol/L." Required: "an antibiotic now for possible aspiration with a soft pressure and a lactate of 4.9 mmol/L."
   - `bd-m4` text. Current: "Sends cultures and gives an empiric antibiotic for possible aspiration pneumonia with hypotension and a raised lactate." Required: "Sends cultures and gives an empiric antibiotic for possible aspiration pneumonia with a soft pressure and a raised lactate."
   - `bd-m4` teaching. Current: "When septic shock is possible, antimicrobials should start immediately, ideally within an hour." Required: "When sepsis is likely or septic shock is possible, antimicrobials should start immediately, ideally within an hour." (Surviving Sepsis 2021: possible septic shock or a high likelihood of sepsis.)
   - Alternative: lower the card pressure so he is hypotensive, then recheck every line that quotes the pressure (`response`, `s-heat-only`, the `q-ddx` prompt).

## Physician-level flags

The writer's flags, judged:

1. Suicide case, sertraline with heavy drinking. CRISM 2023 recommendation 13 advises against SSRIs in AUD with a concurrent depressive disorder. The case does not diagnose AUD and keeps the family physician's sertraline. CRISM also says that with a diagnosed mental health disorder and past benefit from an SSRI, continued use can be considered with close monitoring. She recovered on sertraline after postpartum depression. Judged defensible, but the physician should decide whether `q-meds` should add "her drinking needs formal assessment at Friday's visit, because heavy drinking changes the antidepressant plan".
2. Suicide case, `ns-p1` and Dart 2023. Confirmed: Dart supports levels when the history is in doubt and the 2 to 4 hour statement. The item does not claim every intoxicated patient needs a level. No issue.
3. GI case, endoscopy timing during an active type 2 infarction. No guideline addresses it directly. Lau 2020 found no benefit from endoscopy within 6 hours in high risk patients. The key rests on mechanism and on Barkun's 24 hour window. Defensible. It may become moot under required fix 3.
4. GI case, overlap with gi-bleed-14 and gi-bleed-38. Judged above. gi-bleed-14 is a repeat and is a required fix. gi-bleed-38 is accepted.
5. Heat case, thiamine 300 mg IV and lorazepam 1 mg IV. Thiamine is within CRISM. Many centres give higher doses for suspected Wernicke. Lorazepam in a man with a GCS around 9 to 12 who has vomited and has a right basal opacity needs airway monitoring, and the strong label says so. Physician to confirm that a benzodiazepine in the strong choice is wanted at that level of consciousness.
6. Heat case, cooling content ungraded and the 2019 stop temperature. Accepted as ungraded key feature 2 content. The 2024 WMS text was not reachable this round either.
7. Heat case, capacity in national terms with no statute. Accepted under A17, since the stem names no province.

Further items for the physician from this review:

8. Heat case, antibiotics for an opacity seen within about an hour of vomiting. Early aspiration pneumonitis often does not need antibiotics. The case justifies them by possible sepsis, leukocytosis and lactate, with an unknown time down. Physician to confirm.
9. Heat case, sweating on the face and chest is atypical for classic heat stroke but is explained by withdrawal. Acceptable.

## Sources checked this round

- Dart RC, Mullins ME, Matoushek T, and colleagues. JAMA Netw Open 2023, opened at the cited URL. Supports `ns-p1`.
- Wood E, Bright J, Hsu K, and colleagues. CMAJ 2023 (CRISM), full text through Europe PMC. Supports `bd-h2`, `bd-m2`, `bd-c1`.
- Health Canada. Extreme heat events guidelines, technical guide for health care workers, 2011, opened at the cited URL. Supports the items listed above.
- Epstein Y, Yanovich R. N Engl J Med 2019, PMID 31216400 confirmed.
- Unchanged sources (ESO 2017, AHA 2024 CVT, SNNOOP10 2019, ACEP 2019, Hasbun 2001, ESETT 2019, MHCC and CPSI 2021, Stanley 2018, CANMAT 2023, Ontario MHA, PHIPA, Barkun 2019, Abraham 2022, Villanueva 2013, Blatchford 2000, Fourth UDMI 2018, HALT-IT 2020, WMS 2019, SSC 2021) were verified in the previous round and still support the items attached to them. `wp-m3` (Barkun, 24 hour endoscopy) and `wp-pr2` (UDMI, type 2 mechanism) are new attachments and are supported.
