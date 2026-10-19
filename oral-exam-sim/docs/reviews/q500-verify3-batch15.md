# Q500 fresh verification, round 3: batch15

Fresh independent review of the four oral cases in `src/cases/batch15/` after the writer's round 3 revision ("Round 3" section of `docs/reviews/q500-writer-batch15-r2.md`). This reviewer has not written, edited or reviewed any batch15 file before and made no edits to any file except this verdict (REVIEW-RULES rule 1). The changes were read with `git diff a0d0362 -- oral-exam-sim/src/cases/batch15`. The three changed cases were then read in full on every path: every finding, node, choice, feedback line, model answer, rubric item and source.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch15`: no output.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- `git diff a0d0362` on `headache-building-over-five-days.ts` and `index.ts`: empty. No uncommitted change in `src/cases`.
- Path walk by hand:

| Case | Questions on every path | Longest path | Branching on every path | Rubric H, P, M, Pr (total) | History | Management | Critical |
|---|---|---|---|---|---|---|---|
| headache-building-over-five-days | 8 | 650 s | 5 | unchanged | | | |
| unwell-after-a-night-shift | 8 | 640 s | 4 | 8, 6, 10, 7 (31) | 26% | 32% | 3 |
| weak-and-pale-after-a-stent | 8 | 635 s | 4 | 7, 6, 10, 8 (31) | 23% | 32% | 3 |
| unhoused-man-hallway-heat-stroke | 7 | 525 s | 3 | 7, 5, 11, 8 (31) | 23% | 35% | 3 |

- House style, by script over every string literal in the three changed files: no em dash, no en dash, no semicolon, no personal name, no American spelling found. `author: "Preceptor"`, `reviewed: false`, `version: 1` in all four.
- Every rubric item is used by a question, and every source is cited by an item (citations test and a read of each case).

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| headache-building-over-five-days | PASS | Unchanged since the round 2 pass |
| unwell-after-a-night-shift | PASS | Clock fix applied exactly. No other change, no new issue |
| weak-and-pale-after-a-stent | FAIL | Required fixes applied, but the new graded `q-handover` repeats cqi-39 q1 (s59, passed), and the new ECG points at the stented artery |
| unhoused-man-hallway-heat-stroke | PASS | Clock and blood pressure fixes applied exactly. No other change, no new issue |

## 1. headache-building-over-five-days: PASS

No byte changed since `a0d0362`, where it passed. Not re-adjudicated.

## 2. unwell-after-a-night-shift: PASS

### Previous required fix

1. End node. Now "She leaves at 18:30 with her husband and a written safety plan. Her husband hands the pills in at a pharmacy on the way home." Word for word as required. It is now consistent on every path: `c-dispose` asks for the pills to go "to a pharmacy today", `s-lock` has him take the box "on the way home", and the collateral says he "will remove the pills today".

### Full re-read

The diff is that one line. The rest of the case is as passed on merit in round 2. Clock on every path: 10:40, 10:45 labs, 11:20 (`s-early-discharge`), 13:30 sober, 13:40 (`s-gastritis`), 15:00 husband, 16:30 psychiatrist (`s-admit`), 18:30 discharge, crisis nurse 08:00 to 20:00. Consistent. C1 labels unchanged and correct. No new issue.

## 3. unhoused-man-hallway-heat-stroke: PASS

### Previous required fixes

1. Clock. `s-outreach` phase is now "18:00". Rechecked on every path:
   - `c-assess`: cooling from about 16:40, `q-ddx` near 16:50, `s-outreach` 18:00.
   - `c-tympanic`: ice water from 17:00 at 41.6°C, `q-ddx` (40.3°C) near 17:10, `s-heat-only` near 17:30, `s-withdrawal` near 17:25.
   - `c-sleep`: ice water from 17:20 at 42.0°C, `q-ddx` near 17:30, `s-heat-only` near 17:50, `s-withdrawal` near 17:45.
   - All before 18:00. `s-later` 18:30, `q-leave` 18:40 ("confused an hour ago") and the end node stay consistent. Applied correctly.
2. Blood pressure. The four lines now read exactly as required: `q-ddx` model answer line 4, `c-heat-only` feedback ("a soft pressure"), `bd-m4` text and `bd-m4` teaching ("When sepsis is likely or septic shock is possible"). `grep hypotens` finds nothing in the case. The only hypotensive value left is 86/50 mmHg in `s-heat-only`, which is correct there. The `bd-m4` teaching matches Surviving Sepsis 2021 ("possible septic shock or a high likelihood for sepsis", antimicrobials immediately, ideally within 1 hour). Applied correctly.

### Full re-read

No other line changed. Numbers rechecked (GCS 9, osmolar gap about 5 to 8 once ethanol is counted, cooling rates, thiamine dose). C1 labels unchanged and correct. No new issue.

## 4. weak-and-pale-after-a-stent: FAIL

### Previous required fixes

1. **Data that mirrored gi-bleed-14.** Applied. Age 72 (stem), ECG now T wave inversion (not horizontal ST depression in V4 to V6), hemoglobin 64 g/L, then 82 g/L after 2 units. `q-resus` prompt, `wp-p3` and the `response` finding updated to match. No line still says 66, 71, 84 or ST depression. See the new required fix 2 on the ECG itself.
   - **Glasgow Blatchford score recomputed:** urea 21.4 mmol/L (band 10 to 25) = 4, hemoglobin 64 g/L in a man (under 100) = 6, systolic 94 mmHg (band 90 to 99) = 2, pulse 118 (100 or more) = 1, melena = 1, near faint (not syncope) = 0, no hepatic disease = 0, EF 50% with no heart failure = 0. Total **14**. Correct. Every line that quotes it (`q-resus` model answer, `q-scope` model answer, `c-wait-peak` feedback, `wp-pr1`) says 14.
   - 64 to 82 g/L after 2 units in an 88 kg man who is still bleeding: plausible.
2. **`q-resus` non-branching.** Applied. `next: "q-scope"`. `c-blood`, `c-crystalloid`, `c-acs`, `s-crystalloid` and `s-acs` are gone, with no dangling reference (tests pass). Model answer, `wp-m1`, `wp-m2` and `wp-pr1` kept as ungraded content. The added line "Uncrossmatched O blood if crossmatched units are not ready" fits the blood bank finding (O negative available now, crossmatched in 40 minutes). Accepted.
3. **Collision with s68.** By coordinator ruling this case owns "upper endoscopy before colonoscopy" (`q-source`) and "endoscopy within 24 h rather than deferring" (`q-scope`). Checked against current `src/samps/s68/gi-bleed.ts`: gi-bleed-48 and gi-bleed-50 as described in round 2 no longer exist. The current five (Heyde syndrome, a COPD patient on rivaroxaban, a crash from an H. pylori ulcer, hemoptysis in cystic fibrosis, hemosuccus pancreaticus) key neither decision. The crash SAMP keys H. pylori as the source clue and "repeat endoscopy only if he rebleeds", not timing or colonoscopy. Resolved.
4. **Recommended fix.** The colonoscopy suggestion in `q-source` now comes from the admitting internist. Applied.
5. **Graded `q-handover`.** Applied as the round 2 verdict proposed, with `c-blame` and `c-vague` partial (C1: unprofessional conduct, not patient danger). But see new required fix 1: the decision is already keyed by cqi-39.
6. **Graded decisions per path.** 4 branching questions on every path of 8 (`q-history`, `q-scope`, `q-source`, `q-handover`).

### Unrequested changes (rule 4), judged on merit

- **Villanueva 2013 removed, `wp-m1` re-cited to Barkun 2019.** Barkun 2019 suggests a transfusion threshold of 80 g/L in upper GI bleeding without cardiovascular disease and a higher threshold with it. The new teaching says only that. Accepted. No orphan: `grep` finds no "villanueva", "70 g/L", "landmark" or "main trial" anywhere in the case, the source list has no Villanueva entry, and no rubric item cites it.
- **New source CPSI 2011 for `wp-pr5`.** PDF downloaded from the cited URL (HTTP 200, application/pdf, 52 pages) and read. The cover reads "Canadian Disclosure Guidelines. Being open with patients and families", © 2011 Canadian Patient Safety Institute, Disclosure Working Group. It says patients want to know "what will be done to prevent similar events in the future", that "only the agreed upon facts that are known are communicated", with "the avoidance of blame and speculation", and that "consideration should be given to notifying the patient's primary healthcare provider". It supports the new `wp-pr5` teaching. Accepted. (Optional: the document's own suggested citation is "Canadian disclosure guidelines: being open and honest with patients and families". The cover title the writer used is also correct.)

### Full re-read: other content

- Clock: relative phases only (`s-cardiology-first` and `s-wait-peak` thirty minutes, `s-rebleed` forty minutes, `s-blame` the next day, `s-vague` before discharge, end on day 6). Consistent on every path.
- C1: `c-wait-peak` unsafe (delays time critical care), `c-cardiology-first` partial, `c-cta` partial, `c-no-meds` partial, `c-blame` and `c-vague` partial. All fit C1.
- Pantoprazole 80 mg IV then 8 mg per hour for 3 days after endoscopic therapy, then twice daily to day 14: correct. No tranexamic acid (HALT-IT): correct.
- Every rubric item's source supports it (C2). Six sources, all cited.

### Uniqueness

- **gi-bleed-14 (s11).** With the age, ECG and hemoglobin changed and `q-resus` ungraded, the case no longer keys gi-bleed-14 q2 (hold heparin, assess for GI bleeding) or q3 (transfuse now to 80 g/L or more against a 70 g/L threshold). The transfusion and no-heparin content survives only as model answer text. gi-bleed-14 q4 lists "gastroenterology for endoscopy within 24 hours" as one consult item, but does not test a consultant's deferral for the infarction, which `q-scope` keys and which the coordinator has assigned to this case. No longer a mirror.
- **gi-bleed.md catalogue.** "Endoscopy within 24 hours" appears as a plain timing key in gi-bleed-02, -16, -26, -37 and -44, and in batch09 melena-wallet-card. None keys it against a deferral for an infarction or a cardiology clearance. "Upper source for maroon stool" is keyed by gi-bleed-38 (sphincterotomy clue, accepted in round 2) and gi-bleed-44 (urea ratio made unreliable by dialysis). Neither keys upper endoscopy against a proposed colonoscopy. The catalogue's gi-bleed-48 and -50 entries are stale. Accepted under the coordinator ruling.
- **ischemic-heart-disease.md.** Only gi-bleed-14 (listed there too) and an AF demand ischemia item. No other GI bleed type 2 infarction. Accepted.
- **cqi.md: collision found.** See required fix 1.

### Required fixes

1. **`q-handover` repeats cqi-39 q1.** File `src/cases/batch15/weak-and-pale-after-a-stent.ts`.
   - cqi-39 "A swollen palm after a repair elsewhere" (`src/samps/s59/cqi.ts`, passed in `q500-verify3-s59.md`) is in `cqi.md`. Its catalogue key is "Share what you found and ensure disclosure occurs". Its current q1 keys "Speak with the first physician" against "File a report with the College", "Leave disclosure to that hospital", "Record the concern in his chart only" and "Await his own questions before acting". The explanation teaches that a later physician who finds another clinician's lapse talks to that clinician and makes sure the patient is told.
   - `q-handover` keys the same decision in the same frame. A later physician finds another clinician's lapse (the walk-in naproxen with no PPI). The strong choice is to tell the family the facts and contact that prescriber. The two wrong choices are to blame and steer toward a complaint (cqi-39's College report) or to conceal and contact no one (cqi-39's chart only or await questions). The medication safety detail changes the wording, not the decision. Round 2 proposed this question as "not found in the cqi catalogue", but missed cqi-39. Neither the writer nor that reviewer could have known it would collide, but the bank cannot hold it twice.
   - Required, unless the coordinator rules that s59 changes instead. Note that cqi-39 has already passed. Make `q-handover` non-branching again:
     - Delete its `choices` (`c-honest`, `c-blame`, `c-vague`) and the nodes `s-blame` and `s-vague`.
     - Set `next: "end"` on `q-handover`.
     - Keep the prompt, the model answer and the rubric list unchanged, so `wp-pr5` and its CPSI 2011 source stay as ungraded content.
   - Result: 3 branching questions on every path (`q-history`, `q-scope`, `q-source`). That meets CASE_SPEC and the round 2 requirement of at least 3, and 3 graded decisions in 8 questions is more than one per three. If the writer prefers to keep 4 branching questions, any new graded decision must be checked against the gi-bleed, cqi and ischemic-heart-disease catalogues and the current s54 to s70 source, and named in the writer report. It must not key contacting another clinician against a complaint, concealment or waiting.
2. **The new ECG points at the stent, not at demand ischemia.** He had a proximal LAD drug eluting stent 5 weeks ago and exertional chest heaviness this morning that settled with rest. The new ECG gives new T wave inversion in V2 to V4, I and aVL. That is the LAD territory, in a pattern that resembles Wellens, a sign of critical proximal LAD stenosis. An examiner would read it as a stent problem. Yet critical item `wp-p3` and the `q-scope` strong choice ask the candidate to call it demand ischemia from blood loss. Deep T wave inversion also rarely "improves" within an hour of transfusion, which the `response` finding claims. Global subendocardial demand ischemia classically shows as diffuse ST depression. The new data weakens the central teaching point of the case.
   - `ecg` finding. Current: "Sinus tachycardia at 116/minute. New T wave inversion in I, aVL and V2 to V4 compared with his discharge ECG. No ST elevation or depression." Required: "Sinus tachycardia at 116/minute. New 1 mm downsloping ST depression in II, III, aVF, V5 and V6 compared with his discharge ECG. No ST elevation." This avoids gi-bleed-14's "1 mm horizontal ST depression in V4 to V6": the leads and the morphology differ.
   - `q-resus` prompt. Current: "the ECG shows new T wave inversion". Required: "the ECG shows new diffuse ST depression".
   - `response` finding. Current: "T wave changes improving." Required: "ST depression improving."
   - `wp-p3` text. Current: "Interprets the new T wave inversion and troponin as demand ischemia". Required: "Interprets the new diffuse ST depression and troponin as demand ischemia".
   - Acceptable alternative: an ECG with sinus tachycardia and no new ST or T wave change (type 2 infarction shown by the troponin rise with ischemic symptoms), with the same three lines adjusted to match. Either way, nothing may return to horizontal ST depression in V4 to V6.

### Recommended, not required

- `q-handover` lists `wp-h4` (alcohol, liver disease, previous ulcer, nosebleeds) in its rubric, but its model answer tests none of it. This is unchanged from earlier rounds. Consider dropping `wp-h4` from `q-handover`, since `q-history` already tests it.
- The HPI says the chest heaviness "settled with rest" before arrival, while `q-scope` says it "has eased" after transfusion and the `response` finding says "gone". Consider adding a line to `s-open` saying the heaviness has come back while lying on the stretcher. This is unchanged from earlier rounds.

## Physician-level flags

1. GI case: the type 2 infarction mechanism in a patient with a 5 week old proximal LAD stent. See required fix 2. The physician should confirm the chosen ECG reads as demand ischemia.
2. Unchanged from round 2: sertraline with heavy drinking (night shift case), lorazepam at a low GCS and antibiotics for early aspiration (heat case).

## Sources checked this round

- Canadian Patient Safety Institute, Disclosure Working Group. Canadian disclosure guidelines. Being open with patients and families. 2011. PDF opened at the cited cfhi-fcass.ca URL and read. Supports `wp-pr5`.
- Barkun AN and colleagues, International Consensus Group, Ann Intern Med 2019. Its transfusion recommendation (80 g/L without cardiovascular disease, higher with it) supports the rewritten `wp-m1`. Its 24 hour endoscopy recommendation still supports `wp-m3` and `wp-m5`.
- Surviving Sepsis Campaign 2021 for the reworded `bd-m4` teaching.
- All other sources are unchanged since round 2, where they were verified.
