# Q500 fresh verification, round 4: batch14

This is a fresh independent review of two oral cases in `src/cases/batch14/` after the round 4 writer revision ("Round 4" in `docs/reviews/q500-writer-batch14-r2.md`). The reviewer had not written, edited or reviewed batch14 before and edited no case, source or shared file. Changes were read with `git diff ac75ae1 -- oral-exam-sim/src/cases/batch14`. Both cases were then read in full: every finding, node, choice, feedback line, model answer, rubric item and source, on every path.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch14`: no output.
- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.
- String literal scan of both files: no em dashes, no en dashes and no semicolons. Both have `author: "Preceptor"`, `reviewed: false` and `version: 1`. No personal names.
- "paediatric" now appears only inside the two CPS citations.
- `git diff ac75ae1 --stat -- src/cases` lists only the two cases under review. `return-visit-belly-pain-girl.ts`, `neck-node-fever-day-five.ts` and `index.ts` are unchanged since they passed in `q500-verify3-batch14.md`. `git status` shows nothing modified in `src/cases`.

## Verdicts

| Case | Verdict | Reason in one line |
|---|---|---|
| rural-breathless-after-ulcer-bleed | PASS | The s-specialist fix is safe on every path, and the recommended path neutral lines are applied |
| rural-child-wheeze-tiring | FAIL | The unrequested as-h4 rewrite now grades controller use, which as-h2 already grades at the same question |

## 1. rural-breathless-after-ulcer-bleed: PASS

### Required fix from round 3

Applied. s-specialist now ends: "You follow her advice. If he has had no anticoagulant yet, you give the first apixaban dose now. If he has already had a dose, apixaban starts when his next dose is due."

Every path into s-specialist was traced:

| Path | Anticoagulant before s-specialist | What the node does | Double dose? |
|---|---|---|---|
| c-pocus, then c-rivaroxaban | Rivaroxaban 15 mg ("I prescribed") | Apixaban at his next due dose | No |
| c-pocus, then c-filter | None | First apixaban dose now | No |
| c-transfer, then c-rivaroxaban | Apixaban at about 18:30, then rivaroxaban | Apixaban at his next due dose | No |
| c-transfer, then c-filter | Apixaban at about 18:30 | Apixaban at his next due dose | No |
| c-rebleed, then c-rivaroxaban or c-filter | As in the c-pocus rows | As above | No |

c-apixaban goes straight to s-gi and does not pass through s-specialist. A second rivaroxaban dose is never scripted.

### Recommended items from round 3

- q-site and q-discharge model answers now say "Give the first dose here if he has not already had one". This is true on every path, including c-transfer. Accepted.

### Rechecked and correct

- Wells 7.5, creatinine clearance about 84 mL/minute, sPESI 0, 86 kg = 190 lb.
- Clock 18:00, 18:40, 19:00, 19:20, 19:30, 20:00, 21:00. Seven questions on every path.
- Rubric rows 7, 9, 10 and 7 of 33. Three critical items (pe-a2, pe-m2, pe-m3). Three sources, each cited.
- The end node (3 months of apixaban) and c-home ("go home with apixaban") are true on every path, since s-specialist moves the rivaroxaban and filter paths to apixaban.

No further required fixes.

## 2. rural-child-wheeze-tiring: FAIL

### Required fix from round 3

Applied. as-c2 now reads "Gives the transport team a structured handover with doses, times, procedures, current settings and pending issues." It grades the handover only. The early call is graded once, by as-l1 at q-next. as-l1 text and points are unchanged. Its teaching now carries the CPS sentence and it cites `cps-asthma`, which states it (see sources below).

### Other changes judged on their merits (REVIEW-RULES rule 4)

- Follow up "within 4 weeks of discharge" in the q-grandmother model answer and as-c1 teaching. The CPS 2021 page says follow up "to review asthma control, environmental history, and symptom recognition within 4 weeks of discharge". Accepted.
- New sixth source `ipass` for as-c2. Verified (see below). Accepted. The study is of resident handoffs on inpatient wards, not interfacility transport, but the teaching says only what the study found and does not overstate it. Six sources is within the cap of ruling C2, and every source is cited.
- "paediatric" removed outside citations. Accepted.
- as-h4 rewrite. Not acceptable as written. See the required fix.

### Required fix

1. as-h4 now double counts controller use with as-h2 (rule 4, judged on its merits). File `rural-child-wheeze-tiring.ts`.
   - Current as-h4 text: "Asks about tobacco smoke at home, who cares for him, how he takes his controller and how far he lives from follow up."
   - as-h2 text (unchanged): "Asks about controller adherence, salbutamol use, spacer use and inhalers per month."
   - Problem: both items are graded at q-history only. "How he takes his controller" is controller adherence (or technique, which as-h2's spacer clause also covers). A candidate who asks about controller use scores it twice, and one who does not loses it twice. This is the same double count that failed as-c2 in round 3. Removing cost was right, since the CPS page does not mention cost, but the gap was filled with a behaviour already graded.
   - Also, the q-history model answer still says "Smoke exposure, cost of medicines, who looks after him and access to follow up." It no longer matches as-h4.
   - Required change:
     - as-h4 text: drop the controller clause, for example "Asks about tobacco smoke at home, who cares for him and how far he lives from follow up."
     - as-h4 teaching: drop "and poor adherence" so the item teaches only what it grades, for example "The CPS lists tobacco smoke as a trigger to review, and low socioeconomic status and psychosocial concerns as risk factors. Distance to care limits follow up."
     - q-history model answer, last line: match the item, for example "Tobacco smoke at home, who looks after him and how far he lives from follow up." A cost question may stay in the model answer as ungraded context if the writer wishes.
   - Points, row and source stay the same. History stays at 6 of 32 (19 percent).

### Recommended, not required

- as-c1 text still grades "controller adherence and cost" and cites `cps-asthma`. The CPS page does not mention cost (it lists low socioeconomic status and psychosocial concerns). Consider "controller adherence and access to his medicines", or cite a source that names cost.

### Rechecked and correct

- PRAM 10, then 9. At 28 kg: salbutamol 10 puffs or 5 mg, ipratropium 4 puffs or 250 to 500 mcg, dexamethasone 12 mg, magnesium 1400 mg, ceftriaxone 1400 mg. Weight 62 lb.
- Clock 14:00, 14:25, 15:05, 15:30, 15:45, 16:00, 16:30, 16:45. Eight questions on every path. No path scripts a second dose of any drug: s-saba-only adds ipratropium and steroid only after c-saba-only or c-tests-first, s-wait gives magnesium only after c-wait or c-sedate, and s-missed gives ceftriaxone only after c-more-pressure or c-needle.
- Rubric rows 6, 9, 11 and 6 of 32. Management 34 percent. Three critical items (as-a2, as-m1, as-m5). Five competencies.

## Sources checked this round

- Starmer AJ, Spector ND, Srivastava R, et al. N Engl J Med 2014;371(19):1803-12, PMID 25372088, abstract read through PubMed E-utilities. It exists and matches the citation. It supports the as-c2 teaching: a handoff program with "a mnemonic to standardize oral and written handoffs" in nine hospitals, medical errors "decreased by 23%", preventable adverse events "decreased by 30%", and no significant change in oral handoff duration (2.4 and 2.5 minutes per patient).
- CPS 2021 acute asthma statement, https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation, opened. It states:
  - as-l1: "Call a tertiary care paediatric ED and/or PICU specialist to discuss patient management and transport" when the PRAM stays 8 to 12 after 1 to 2 hours, and "Early consultation ... when response to treatment is insufficient is advised".
  - as-h4: "Review environmental triggers, including tobacco smoke", risk factors "Lack of an asthma action plan or poor adherence to treatment" and "Low socioeconomic status, psychosocial concerns", and "distance to the health facility" as a factor affecting close follow up.
  - as-c1 and q-grandmother: follow up "within 4 weeks of discharge".
  - It does not mention cost.
- BC VTE 2024, Lee 2019 and Dawwas 2022 were verified in round 2. No wording that cites them changed this round except the path neutral dose lines, which cite nothing new.

## Batch status

rural-breathless-after-ulcer-bleed now passes. With return-visit-belly-pain-girl and neck-node-fever-day-five, which passed in `q500-verify3-batch14.md` and are unchanged, three of the four batch14 cases have passed fresh review. rural-child-wheeze-tiring needs the one as-h4 fix above and a fresh review.
