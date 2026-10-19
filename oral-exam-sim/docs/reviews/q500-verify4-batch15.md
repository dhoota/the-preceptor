# Q500 fresh verification, round 4: batch15

Fresh independent review of `src/cases/batch15/weak-and-pale-after-a-stent.ts` after the writer's round 4 revision ("Round 4" section of `docs/reviews/q500-writer-batch15-r2.md`). This reviewer has not written, edited or reviewed any batch15 file before and made no edits to any file except this verdict (REVIEW-RULES rule 1). The changes were read with `git diff bf81793 -- oral-exam-sim/src/cases/batch15`. The case was then read in full on every path: every finding, node, choice, feedback line, model answer, rubric item and source.

## Verdict

**PASS.** Both required fixes from `q500-verify3-batch15.md` are applied exactly. Both optional changes are sound. No new issue was found.

With this pass, all four batch15 cases have now passed fresh review. The other three (headache-building-over-five-days, unwell-after-a-night-shift, unhoused-man-hallway-heat-stroke) passed in `q500-verify3-batch15.md` and are unchanged since.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch15`: no output.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- `git diff bf81793` on `headache-building-over-five-days.ts`, `unwell-after-a-night-shift.ts`, `unhoused-man-hallway-heat-stroke.ts` and `index.ts`: empty. No uncommitted change in `src/cases`.
- The diff touches only `weak-and-pale-after-a-stent.ts`: 6 lines added, 45 removed.
- House style, by script over every string literal: no em dash, no en dash, no semicolon. No personal name. `author: "Preceptor"`, `reviewed: false`, `version: 1`, as in the other three cases.
- `grep` finds no "T wave", "lying flat", "horizontal", `s-blame`, `s-vague`, `c-honest`, `c-blame` or `c-vague` left in the case.

## Path walk

| Item | Result |
|---|---|
| Questions on every path | 8 (`q-history`, `q-exam`, `q-resus`, `q-scope`, `q-massive`, `q-source`, `q-dispo`, `q-handover`) |
| Seconds on every path | 85 + 75 + 90 + 80 + 85 + 75 + 75 + 70 = 635 (720 or less) |
| Branching questions on every path | 3 (`q-history`, `q-scope`, `q-source`). Meets the CASE_SPEC minimum and the round 3 requirement |
| Escalation on every path | `s-rebleed` (maroon stool with clots, 78/44 mmHg) |
| Node references | Every `next` resolves. Every node is reachable. Graph is acyclic. All paths reach `end` |
| Rubric H, P, M, Pr (total) | 7, 6, 10, 8 (31). History 23%, management 32% |
| Critical items | 3 (`wp-h3`, `wp-p3`, `wp-m1`) |
| Sources | 6, each cited by at least one item |

## Required fixes from round 3

1. **`q-handover` non-branching.** Applied exactly. `c-honest`, `c-blame`, `c-vague`, `s-blame` and `s-vague` are deleted. `next: "end"`. The prompt and model answer are unchanged. `wp-pr5` and its CPSI 2011 source stay as ungraded content. The question no longer keys "contact the other clinician" against a complaint or concealment, so the collision with cqi-39 q1 (s59) is gone.
2. **ECG.** Applied word for word in all four places:
   - `ecg`: "Sinus tachycardia at 116/minute. New 1 mm downsloping ST depression in II, III, aVF, V5 and V6 compared with his discharge ECG. No ST elevation."
   - `q-resus` prompt: "the ECG shows new diffuse ST depression".
   - `response`: "ST depression improving."
   - `wp-p3`: "Interprets the new diffuse ST depression and troponin as demand ischemia".

### Clinical check of the new ECG

- **It fits demand ischemia.** Global subendocardial ischemia from anemia and hypotension classically gives ST depression across more than one territory, most often inferior and lateral, without a localising elevation. Here it spans II, III, aVF, V5 and V6. It no longer sits in the V2 to V4, I and aVL territory of his proximal LAD stent, so it no longer reads as a Wellens type stent problem.
- **It meets the infarction definition.** The fourth universal definition (the `udmi` source) counts new horizontal or downsloping ST depression of 0.5 mm or more in two contiguous leads as an ECG sign of ischemia. 1 mm in contiguous inferior and lateral leads qualifies. With the troponin rise (64 then 118 ng/L) and his symptoms, this is a type 2 infarction. `wp-p3` and its source agree.
- **It supports the `q-scope` key.** Diffuse, non territorial ST depression that improves with transfusion (`response`) is what a supply problem looks like. That supports the strong choice "his ischemia is caused by the bleed and will settle only when the bleeding stops". `wp-p3` still asks the candidate to consider stent thrombosis, and `q-exam` line 7 says so, which is right.
- **"Diffuse" is fair** for five leads across the inferior and lateral territories. "No ST elevation" also excludes aVR elevation, so the ECG does not point to left main or multivessel occlusion.
- **"Improving" after 2 units is plausible.** ST depression from demand ischemia resolves quickly once supply is restored, unlike deep T wave inversion.
- **No mirror of gi-bleed-14.** gi-bleed-14 uses 1 mm horizontal ST depression in V4 to V6. The new leads and morphology differ, as round 3 required. A bank search for "downsloping ST depression" finds only this case, a de Winter teaching line in s28 and a UDMI teaching line in s57. No collision.

## Optional changes (rule 4), judged on merit

1. **`wp-h4` dropped from the `q-handover` rubric list.** Round 3 recommended this. `q-handover` never tested alcohol, liver disease, previous ulcer or nosebleeds. `wp-h4` is still listed and tested by `q-history` (model answer lines 5 and 6, strong choice `c-full`), so no item is orphaned and history points are unchanged at 7. The round 3 required fix said to keep the rubric list unchanged, but the same review recommended this removal, and it is correct. Accepted.
2. **`s-open` wording.** "He says he feels better lying flat" is now "He says the chest heaviness came back as they lifted him onto the stretcher." Round 3 recommended this. It closes the gap between the HPI ("It settled with rest") and the later "has eased" (`q-scope`) and "gone" (`response`). Recurrence with the exertion of being lifted fits demand ischemia from anemia and supports the new ECG. Nothing else in the case depended on "lying flat". The chest heaviness is ongoing at `q-resus`, which fits the model answer "no nitroglycerin". Accepted.

## Full re-read: other content

- Clock: relative phases only (`s-no-meds` a few minutes, `s-cardiology-first` and `s-wait-peak` thirty minutes, `s-rebleed` forty minutes, end on day 6). Consistent on every path.
- C1: `c-no-meds`, `c-cardiology-first` and `c-cta` partial, `c-wait-peak` unsafe (delays time critical care). All fit C1.
- Numbers unchanged and correct: hemoglobin 64 then 82 g/L, Glasgow Blatchford score 14 quoted the same in `q-resus`, `q-scope`, `c-wait-peak` and `wp-pr1`, pantoprazole 80 mg IV then 8 mg per hour for 3 days then twice daily to day 14, no tranexamic acid (HALT-IT).
- C2: every rubric item's source supports it. No source changed this round.
- Prior rulings: no scoring ruling applies to oral case text beyond C1 and C2, and neither is reversed.

## Required fixes

None.

## Physician-level flags

1. The type 2 infarction mechanism in a patient with a 5 week old proximal LAD stent. The new inferolateral downsloping ST depression reads as demand ischemia to this reviewer. The physician should confirm.
2. Minor, not required: `pocus` still reports "mild anterior wall hypokinesis". This is consistent with his recent LAD infarction and EF of 50%, but the finding does not say it is old. The physician may want "unchanged from discharge" added in a later pass.
3. Unchanged from earlier rounds for the other cases: sertraline with heavy drinking (night shift case), lorazepam at a low GCS and antibiotics for early aspiration (heat case).
