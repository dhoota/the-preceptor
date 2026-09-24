# Case writing spec

This spec is for anyone writing cases for Preceptor: Oral, human or AI assisted. Cases are static data. The app runs no AI. Every case ships with `reviewed: false` until a physician signs it off.

Read `src/engine/types.ts` first. The types are the contract. `src/cases/seed/chest-pain.ts` is the reference example.

## File layout

- One case per file: `src/cases/batchNN/<case-id>.ts`, exporting a named `const` typed `OralCase`.
- `src/cases/batchNN/index.ts` exports `BATCH_NN: OralCase[]` in blueprint order.
- First line of every case file:
  `// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.`
- Import the type with `import type { OralCase } from "@/engine/types";`

## Required fields

- `id`: kebab case, globally unique, descriptive. `refractory-vf-arrest`.
- `title`: neutral. Must not give away the diagnosis. "Collapse in the parking lot", not "VF arrest".
- `blueprint`: the primary area id from `BLUEPRINT`. `alsoCovers` lists secondary areas if any.
- `summary`: one line, no spoilers.
- `durationMinutes`: 12 to 15.
- `stem`: setting (a Canadian ED, name the resources available), patient, triage vitals with units, what the nurse or paramedic says. 4 to 8 sentences.
- `findings`: 8 to 14. `{ id, label, result }`. Vitals, focused exam, bedside tests, labs with numbers and SI units, imaging, POCUS, collateral history. Invent realistic values.
- `start` and `nodes`: see the flow rules.
- `rubric`: 12 to 26 items. `{ id, competency, text, points, critical?, teaching, source }`.
- `sources`: 2 to 6. `{ id, citation, url? }`. Every source must be cited by at least one rubric item.
- `reviewed: false`, `author: "Draft for review by Arjan Dhoot, MD"`, `version: 1`.

## Flow rules

- `nodes` is a flat array. Kinds: `say`, `question`, `end`.
- 6 to 10 questions on every path. Question `seconds` 45 to 120. `modelAnswer` 3 to 7 crisp key points. `rubric` lists the rubric ids the question tests.
- At least 3 questions branch with 2 to 4 `choices`. Each choice:
  - `label`: first person, specific, what the candidate says they did. "I gave 1 g of calcium chloride through the central line before anything else."
  - `quality`: `strong`, `partial` or `unsafe`. Every branching question has at least one strong choice.
  - `feedback`: 2 to 4 short sentences of scripted examiner feedback. Say why it is right, partial or unsafe, and what the examiner wanted to hear. Be specific. Include the key number or threshold.
  - `next`: strong choices continue on the main line. Partial or unsafe choices go to a short consequence `say` node (the patient worsens, a consultant pushes back, a nurse questions the order) that then rejoins the main line.
- Include at least one escalation that happens whatever the candidate chose: deterioration, a new result, a complication, a family member or a disposition problem.
- The graph must be acyclic. Every path reaches the `end` node. Every node is reachable.

## Rubric rules

- `competency` must be one of: `assessment`, `resuscitation`, `management`, `communication`, `disposition`, `professionalism`, `leadership`. Use at least four different competencies per case.
- `text` is an observable behaviour. "Gives sodium bicarbonate 1 to 2 mEq/kg IV for QRS over 100 ms."
- `points` 1 to 3. Mark 2 to 4 truly critical, safety defining actions `critical: true`.
- `teaching`: one or two sentences that explain the point for spaced review.
- `source`: the id of the source that supports it.

## Sources

Cite current Canadian guidance first, then major international guidance. Examples: CAEP position statements and guidelines, Canadian Paediatric Society (CPS) position statements, TREKK bottom line recommendations, Heart and Stroke Canadian Stroke Best Practice Recommendations, Heart and Stroke and ILCOR resuscitation guidelines, SOGC clinical practice guidelines, Canadian Thoracic Society, Canadian Cardiovascular Society, Diabetes Canada, CPSO policies, CMPA guidance, Ontario statutes such as the Health Care Consent Act and Mental Health Act, Surviving Sepsis Campaign, ATLS, ACMT and poison centre guidance, and landmark trials or validated rules (Canadian CT Head Rule, Canadian C-Spine Rule, Ottawa SAH Rule, Canadian Syncope Risk Score, PECARN).

Write the citation as organisation, title and year. Do not invent document titles, years or URLs. If you are not sure of the exact title or year, cite the organisation and topic plainly ("Canadian Paediatric Society. Position statement on bronchiolitis.") and leave out the year and URL. Only add a `url` you are confident is real.

## House style

This applies to every string in the case, citations included.

- No em dashes or en dashes. Use "to" for ranges.
- No semicolons.
- Short sentences. One idea each.
- Canadian spelling and Canadian units (mmol/L, SI). Canadian drug names and systems (CTAS, CritiCall, provincial poison centre, Ontario Form 1).
- Plain clinical language. No filler.

## Originality

Invent every patient, number and detail. Do not copy or paraphrase any textbook, question bank, past exam or published case. Cases may teach standard content, but the scenario and wording must be your own.

## Checks

Run both before you report:

```
npx tsc --noEmit -p . 2>&1 | grep batchNN
CASE_BATCH=batchNN npx vitest run tests/cases.test.ts
```
