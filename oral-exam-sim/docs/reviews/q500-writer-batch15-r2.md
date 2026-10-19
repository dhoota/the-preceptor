# Q500 writer report, round 2. Batch 15 oral cases

Revision against `docs/reviews/q500-verify-batch15.md`. All four cases stay `reviewed: false`, `version: 1`, `author: "Preceptor"`, `durationMinutes: 12`. Only `src/cases/batch15/` and this report were edited. No git, no `npm test`, no `bank:encode`.

## Checks

- `npx tsc --noEmit -p . | grep cases/batch15`: no output.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- House style scan: no em or en dashes, no semicolons in strings, no personal names.
- Uniqueness checked against `grep -rh 'title:\|stem:' src/cases`, every SAMP on each topic, and the coordinator's catalogue in `scratchpad/q500/catalog/` (environmental, suicide-risk, gi-bleed, delirium-agitation, tox, ischemic-heart-disease).

| Case | Questions on every path | Longest path | Rubric points H, P, M, Pr (total) | Items | Critical |
|---|---|---|---|---|---|
| headache-building-over-five-days | 8 | 650 s | 8, 7, 10, 8 (33) | 20 | 3 |
| unwell-after-a-night-shift (was chest-tightness-after-night-shift) | 8 | 640 s | 8, 6, 10, 7 (31) | 17 | 3 |
| weak-and-pale-after-a-stent | 8 | 635 s | 7, 6, 10, 8 (31) | 19 | 3 |
| unhoused-man-hallway-heat-stroke (was brought-down-from-the-eighth-floor) | 7 | 525 s | 7, 5, 11, 8 (31) | 18 | 3 |

History is 21 to 26 percent and management 30 to 35 percent in every case.

## 1. headache-building-over-five-days

Required fix 1 (province) done exactly as the verdict worded it:
- `q-dispo` model answer line 2 now reads "Call the regional stroke centre through the provincial transfer service, such as CritiCall in Ontario. Speak with neurology and let neurosurgery know."
- `bs-pr2` text now reads "Arranges transfer to a stroke centre through the provincial transfer service with neurology and neurosurgery aware, a structured handover and a monitored escort."

No other change.

## 2. Suicide risk: id, file and export renamed

`chest-tightness-after-night-shift` became `unwell-after-a-night-shift` (`unwellAfterANightShift`), title "Unwell after a night shift". `index.ts` updated. The old title described the removed presentation.

Required fix 1 (uniqueness, SAMP s52 "Palpitations two days after an arrest"). The chest tightness opening, troponins, panic label and lorazepam distractor are gone. New opening:
- Stem: a 44 year old woman arrives by taxi at 10:30 with vomiting and upper abdominal pain that began at home after a night shift.
- HPI: she drank most of a bottle of wine alone "to get to sleep" after the shift, then vomited 7 times. She says she took no tablets. She has drunk this way after night shifts several times since her mother died.
- Exam, ECG and labs rewritten to fit: smell of alcohol, slurred speech that clears by 13:30, epigastric tenderness, serum ethanol 19 mmol/L, lipase, liver tests, beta hCG, acetaminophen and salicylate undetectable at 10:45.
- `q-approach` keys a new decision: treat the vomiting, exclude complications and a hidden ingestion (treat an uncertain ingestion history as unreliable), read drinking alone to sleep after a loss as a cue, and ask about suicide once she is clinically sober. Strong: full medical and mood assessment. Partial (`c-gastritis`): treats alcohol related gastritis and plans discharge without a mood screen. Unsafe (`c-early-discharge`): discharges her by taxi while still intoxicated, with no levels and no screen. New consequence nodes `s-gastritis` and `s-early-discharge`.
- `ns-h1` is now the history of the drinking episode (amount, timing, pills, blood, pregnancy, why the drinking changed), cited to CANMAT. `ns-p1` is now the exam and tests that exclude complications and a hidden ingestion, cited to Dart 2023. The 2021 AHA/ACC chest pain guideline is removed, because nothing cites it now.
- `q-formulate` prompt now says she is clinically sober with reassuring blood work. The risk factor list adds drinking alone to sleep. Later times moved to fit (husband 15:00, psychiatrist 16:30, discharge 18:30). The mental status exam is timed at 13:30, when she is sober.
- The later parts named as distinctive (opioids at home, husband asks for admission, Form 1, sertraline, employer confidentiality) are unchanged.
- Catalogue check: no suicide risk item opens with vomiting after drinking. The s17 and s52 titles named in the verdict ("An extra dose by mistake", "Asking for something to help him sleep", "Rolled ankle at basketball practice") and "Empty bottles beside the bed" were read. None is an alcohol related GI complaint, and none keys these distractors.

Required fix 2 (C1): `q-dispo` `c-form1` is now `quality: "partial"`. Feedback unchanged.

Required fix 3 (province): the stem now reads "a community hospital in Ontario".

## 3. weak-and-pale-after-a-stent

Required fix 1 (C1): `q-resus` `c-crystalloid` is now `quality: "unsafe"`. The feedback opens with why: hemorrhagic shock with active ischemia, and withholding red cells delays the treatment he needs.

Required fix 2 (uniqueness, SAMP gi-bleed-36). `q-antiplatelet`, its three choices, its consequence nodes, and the old `wp-m3` and `wp-pr2` items are removed. The antiplatelet plan (continue ASA, no platelets, stop naproxen, ticagrelor with cardiology) now appears only as ungraded model answer text: a new line in `q-resus` and the existing `q-dispo` line.

New graded question `q-scope` ("Timing of endoscopy"). After 2 units he is better, but his troponin is still rising. The gastroenterologist wants cardiology clearance and the troponin peak, about 2 days, before scoping.
- Strong (`c-scope-today`): the infarction comes from the bleed, so endoscopy goes ahead within 24 hours once he is resuscitated, sooner if unstable, in the ICU with monitoring and anesthesia support, and cardiology is told the plan.
- Partial (`c-cardiology-first`): makes cardiology clearance a gate for endoscopy.
- Unsafe (`c-wait-peak`): waits 2 days with transfusion and PPI alone, which delays time critical care.
- New consequence nodes `s-cardiology-first` and `s-wait-peak` rejoin the fixed rebleed. The rebleed now happens while the endoscopy team sets up.
- New `wp-m3`: arranges endoscopy within 24 hours and does not defer it for the infarction (Barkun 2019). New `wp-pr2`: explains the type 2 mechanism to the consultant and agrees a safe time and place (Fourth UDMI 2018).
- `q-source` prompt reworded so the gastroenterologist proposes switching to colonoscopy after seeing the maroon stool.
- Catalogue check: no gi-bleed or ischemic heart disease item keys "do not defer endoscopy for a type 2 MI". gi-bleed-14's q4 explanation says angiography is deferred until bleeding is controlled. That is the reverse decision and is not keyed.

The case still has 4 branching questions (q-history, q-resus, q-scope, q-source) and the fixed rebleed on every path.

## 4. Environmental case: rebuilt

`brought-down-from-the-eighth-floor` was replaced by `unhoused-man-hallway-heat-stroke` (`unhousedManHallwayHeatStroke`), title "Found in a tent by the river". The old file was deleted and `index.ts` updated. `priorityTopic: "environmental"`, key features 1 and 2.

New scenario. A 57 year old man who lives in a riverside encampment is brought in at 16:10 on a hot August afternoon. An outreach worker found him hard to rouse in his tent, which stood in full sun. Triage records a tympanic 38.9°C, labels him "intoxicated, sleeping it off" and puts him on a hallway stretcher. His rectal temperature is 41.4°C and his ethanol is only 9 mmol/L. He has alcohol use disorder with a past withdrawal seizure, went without a drink overnight, and has a right basal opacity after vomiting.

Graded and ungraded questions:
1. `q-first` (graded): revisit a triage label of intoxication, take a rectal temperature, move him to resuscitation and cool. Partial: treats the tympanic reading with fans and cold saline. Unsafe: leaves him in the hallway.
2. `q-cool` (ungraded): cooling method, core probe, stop at about 39°C, no antipyretics. Key feature 2 needs this content. It is no longer a graded decision.
3. `q-history` (ungraded): exposure, alcohol pattern and last drink, drugs, falls, where he sleeps and who else is at risk.
4. `q-ddx` (graded): what is happening alongside the heat stroke. Strong: IV thiamine, a benzodiazepine for withdrawal, cultures and an antibiotic for possible aspiration with shock, electrolyte replacement and CT head, while cooling continues. Partial: heat stroke alone. Unsafe: calls it delirium tremens and stops cooling.
5. Fixed escalation `s-outreach` on every path. Two more people at the encampment are unwell and will not leave their belongings, and the heat warning continues tomorrow. Nothing says more patients are coming to the department.
6. `q-public` (graded): 911 for the confused woman, field cooling advice, and a call to the public health unit. Partial: tells the outreach worker to bring people in if they get worse.
7. `q-leave` (ungraded): he wakes and wants to return to his tent to protect his belongings. Covers capacity, the practical reason he wants to leave, and withdrawal treatment in hospital.
8. `q-dispo` (ungraded): ICU, then discharge only to a cooled setting (a respite bed with air conditioning), plus addiction and hepatitis C follow up.

Verdict items:
- The surge is gone: `s-surge`, `q-surge`, its consequence nodes and `bd-l1` are removed.
- The day 3 heat wave, the seniors' building and the failed air conditioning are gone.
- The s09 risk factor questions (anticholinergic, antipsychotic, diuretic) and the NMS, serotonin and thyroid differential are gone.
- The batch03 graded cooling choices (body bag strong, ice packs and CT partial, acetaminophen unsafe) and the separate stop question are gone.
- Kept as allowed: the public health call about people still at home, which became the encampment, and the safe disposition to a cooled setting.

Catalogue and grep checks:
- No item in the bank sets heat stroke in a person experiencing homelessness.
- No heat item keys alcohol withdrawal or Wernicke alongside heat stroke, or a public health call for an encampment.
- `delirium-agitation` and `tox` list alcohol withdrawal only as one item in a differential of agitated delirium with fever.
- I first set the case on a park bench. I moved it to a tent after finding s07 loc ("slumped on a park bench", "just drunk again", head injury) and s53 tox ("Man found asleep on a park bench").

## Sources added or changed, with verification

- Dart RC, Mullins ME, Matoushek T, and colleagues. Management of acetaminophen poisoning in the US and Canada. A consensus statement. JAMA Netw Open 2023. Opened at https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808062. It treats a doubtful history as unreliable, and a nondetectable concentration at 2 to 4 hours typically excludes a significant ingestion. Used for `ns-p1`.
- Wood E, Bright J, Hsu K, and colleagues, Canadian Alcohol Use Disorder Guideline Committee. Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. CMAJ 2023 (CRISM). Full text read through the Europe PMC API for PMC10581718. The PMC page https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/ returned 200. What it supports:
  - Inpatient parenteral thiamine 200 to 300 mg daily for at least 5 days for suspected Wernicke encephalopathy, decompensated liver disease or risk of malnourishment.
  - Benzodiazepines for patients at high risk of severe withdrawal, ideally in hospital (recommendation 7).
- Health Canada. Extreme heat events guidelines, technical guide for health care workers, 2011. Re-read at the canada.ca URL in the case. What it supports:
  - "People who live in shelters and outdoors are automatically at a higher risk of heat-related illness and death."
  - Alcohol alters awareness of heat.
  - Core temperature "is most accurately assessed by rectal thermometer".
  - Antipyretics are not effective.
  - Evaporative cooling means wetting the whole skin and fanning vigorously.
  - Stay in an air conditioned environment.
  - Coordinate with community services, especially on discharge from a care facility.
  - Health care workers support community outreach to isolated people.
- Epstein Y, Yanovich R. Heatstroke. N Engl J Med 2019. PMID 31216400 confirmed through Europe PMC. URL https://pubmed.ncbi.nlm.nih.gov/31216400/ added.
- Unchanged and cited as before: Lipman 2019 WMS heat guideline (no URL), Surviving Sepsis 2021 (no URL), Barkun 2019, Abraham 2022, Fourth UDMI 2018, CANMAT 2023, MHCC and CPSI 2021, Stanley 2018, Ontario MHA, PHIPA.
- Removed: Gulati 2021 AHA/ACC chest pain guideline (suicide case), and BC Coroners Service 2022 (heat case, no longer relevant to a death review of indoor deaths).

## Uncertain, for the physician

- Suicide case: the CRISM 2023 guideline advises against SSRIs for people with alcohol use disorder and a concurrent depressive disorder. This case does not label her drinking as alcohol use disorder, keeps the sertraline her family physician started, and does not cite CRISM. A physician may want her drinking assessed formally against DSM criteria before the sertraline advice stands.
- Suicide case: `ns-p1` rests on Dart 2023. The consensus statement does not state that every intoxicated patient needs an acetaminophen level. The item only asks for levels when the ingestion history is uncertain.
- GI bleed: "within 24 hours, sooner if unstable" follows Barkun 2019. Lau 2020 (N Engl J Med, not cited) found no benefit from endoscopy within 6 hours in high risk patients who stabilized. No guideline directly addresses endoscopy during an active type 2 MI. The key rests on the mechanism.
- GI bleed: q-resus still overlaps SAMP gi-bleed-14 on transfusion with a higher threshold and avoiding heparin, and q-source overlaps gi-bleed-38 on maroon stool from an upper source. The verdict did not flag either. Both are central to this case's resuscitation.
- Heat case: thiamine 300 mg IV is at the top of the CRISM daily range. Many centres give higher doses for suspected Wernicke. Lorazepam 1 mg IV in a patient with a GCS near 9 to 12 needs airway monitoring, and the label says so.
- Heat case: the cooling content in `q-cool` (ice water or combined methods, rectal probe, stop at about 39°C, no antipyretics) is still the bank's standard heat stroke teaching. Key feature 2 requires it. It is now ungraded model answer text, not a branching decision. The 2024 WMS update could still not be read, so the 2019 stop temperature stands.
- Heat case: capacity and emergency treatment in `q-leave` is written in national terms, because the stem names no province. It cites no consent statute.

## Round 3

Revision against `docs/reviews/q500-verify2-batch15.md`. headache-building-over-five-days passed and was not touched. Checks after the edits: the batch15 tsc grep gave no output, and `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts` passed 45 of 45. Paths: 8, 8, 8 and 7 questions on every path. Longest paths 650, 640, 635 and 525 s. Rubric rows are unchanged from round 2.

### unwell-after-a-night-shift

- Required fix 1 (clock): the end node now reads "She leaves at 18:30 with her husband and a written safety plan. Her husband hands the pills in at a pharmacy on the way home."

### unhoused-man-hallway-heat-stroke

- Required fix 1 (clock): `s-outreach` phase is now 18:00.
- Required fix 2 (blood pressure): the card and the response pressures are unchanged (100/58 and 108/64 mmHg). The four lines now use the verdict's wording:
  - `q-ddx` model answer line 4: "His pressure is low for an untreated hypertensive man and his lactate is 4.9 mmol/L."
  - `c-heat-only` feedback: "with a soft pressure".
  - `bd-m4` text: "with a soft pressure and a raised lactate".
  - `bd-m4` teaching: "When sepsis is likely or septic shock is possible, antimicrobials should start immediately, ideally within an hour."
- No line in the case calls him hypotensive now.

### weak-and-pale-after-a-stent

- Required fix 1 (the gi-bleed-14 mirror):
  - The age is now 72.
  - The ECG is now "New T wave inversion in I, aVL and V2 to V4 compared with his discharge ECG. No ST elevation or depression."
  - The hemoglobin is now 64 g/L, and 82 g/L after 2 units.
  - The `q-resus` prompt and `wp-p3` text were updated to match. The response finding now reads "T wave changes improving".
  - Glasgow Blatchford score recomputed: urea 21.4 mmol/L = 4, hemoglobin 64 g/L in a man = 6, systolic 94 mmHg = 2, pulse 118 = 1, melena = 1, near faint = 0, no liver disease, no heart failure. The total is still 14, so the lines that quote it (`q-resus`, `q-scope`, `c-wait-peak` feedback, `wp-pr1`) stay correct.
- Required fix 2: `q-resus` is now non-branching and goes to `q-scope`.
  - Removed: `c-blood`, `c-crystalloid`, `c-acs`, `s-crystalloid` and `s-acs`.
  - Kept as ungraded content: the model answer, `wp-m1`, `wp-m2` and `wp-pr1`. One model answer line now adds uncrossmatched O blood if crossmatched units are not ready.
- Required fix 3 (collision with s68): the coordinator ruled that this case keeps `q-source` and `q-scope` as graded questions and that the s68 writer will change instead. Both stay.
- Recommended fix applied: the colonoscopy suggestion in `q-source` now comes from the admitting internist, not the gastroenterologist.
- Required fix 4: `q-handover` is now a graded question on explaining and reporting another clinician's prescribing gap.
  - Strong (`c-honest`): with his consent, tells his wife the cause plainly and reports the facts to the walk-in clinic, the family physician and the pharmacist. He leaves on a PPI with a list of drugs to avoid.
  - Partial (`c-blame`): blames the clinic and suggests a complaint.
  - Partial (`c-vague`): hides the cause and contacts no prescriber.
  - Both wrong choices are partial, as C1 requires. New consequence nodes `s-blame` (the clinic had no record of the stent) and `s-vague` (the pharmacist asks about a naproxen refill) lead to the end.
  - Catalogue check: cqi.md and gi-bleed.md have no item that keys this decision, and no s68 item mentions a walk-in prescriber.
- Required fix 5: the case now has 4 branching questions on every path out of 8 questions: q-history, q-scope, q-source and q-handover. That is more than one graded decision per three questions.

### Source change for wp-pr5 (coordinator request)

- Villanueva 2013 was the least used source, cited only by `wp-m1`. It is removed. `wp-m1` (prompt transfusion, a higher threshold with active ischemia, limited crystalloid) is now cited to Barkun 2019. Barkun suggests 80 g/L without cardiovascular disease and a higher threshold with it, and the teaching was rewritten to say only that. The case no longer mentions the 70 g/L trial anywhere.
- New source: Canadian Patient Safety Institute. Canadian disclosure guidelines. Being open with patients and families. 2011. The PDF at https://cfhi-fcass.ca/media/v4zni14t/cpsi-canadian-disclosure-guidelines-final-ua.pdf was downloaded and read. It says patients want the facts about what happened and what will prevent it in future. It says only agreed facts are shared, with "the avoidance of blame and speculation". It also covers learning and system improvement, and involving others with the patient's consent.
- `wp-pr5` is now cited to it, with teaching rewritten to match. Every source is still cited and the case keeps 6 sources. tsc grep clean, 45 of 45 tests passed.

### Still for the physician

- GI case: he still has exertional chest heaviness and a type 2 infarction from anemia. That is the case's mechanism and the reason for `q-scope`. Only the data and the graded resuscitation decisions that mirrored gi-bleed-14 were changed.
- Unchanged from round 2: the sertraline and alcohol question, the lorazepam dose with a low GCS, and whether antibiotics are needed for early aspiration in the heat case.

## Round 4

This round changed weak-and-pale-after-a-stent only, against `docs/reviews/q500-verify3-batch15.md`. The other three cases passed and were not touched.

Required fix 1: `q-handover` repeated cqi-39 q1 in s59, so it is non-branching again.
- Deleted `c-honest`, `c-blame`, `c-vague`, `s-blame` and `s-vague`.
- `next` is now "end". The prompt and model answer are unchanged.
- `wp-pr5` and its CPSI 2011 source stay as ungraded content.

Required fix 2: the ECG no longer points at the LAD territory.
- The `ecg` finding now reads "Sinus tachycardia at 116/minute. New 1 mm downsloping ST depression in II, III, aVF, V5 and V6 compared with his discharge ECG. No ST elevation."
- The `q-resus` prompt now reads "the ECG shows new diffuse ST depression".
- The `response` finding now reads "ST depression improving".
- `wp-p3` now reads "Interprets the new diffuse ST depression and troponin as demand ischemia".

Optional fixes, both applied:
- `wp-h4` is dropped from the `q-handover` rubric list, because `q-history` already tests it.
- `s-open` now says the chest heaviness came back as he was lifted onto the stretcher. This replaces "feels better lying flat", so the later "eased" and "gone" lines make sense.

Checks:
- The batch15 tsc grep has no output.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts` passed 45 of 45.
- A path walk shows 8 questions, 3 branching questions (`q-history`, `q-scope`, `q-source`) and 635 s on every path.
- Rubric points are unchanged at 7, 6, 10 and 8, 31 in total.
