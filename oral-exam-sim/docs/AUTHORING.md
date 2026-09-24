# Writing a case

Cases are static TypeScript data in `src/cases/`. The app never generates content at runtime. AI tools may help draft a case at authoring time only. A physician must review every case before `reviewed` is set to `true`.

## Shape

See `src/engine/types.ts` for the full types.

- `stem`: read first. Setting, patient, triage vitals, what the nurse says.
- `findings`: what the candidate can ask for at any time. Each has an `id`, a short `label` and the `result` the examiner reads.
- `nodes`: a flat list. `start` names the first one.
  - `say`: the examiner reads a line and moves to `next`. Use it for stage openers, escalations and consequences. `phase` is an optional heading such as "Twenty minutes later".
  - `question`: a timed question. `seconds` is the answer time. `modelAnswer` lists the key points. `rubric` lists the rubric ids the question tests. Give 2 to 4 `choices` to branch, or a single `next` to continue.
  - `end`: the closing line.
- `choices`: first person, specific, honest. "I gave bicarbonate first, then prepared to intubate." Mark each `strong`, `partial` or `unsafe`. Partial and unsafe paths go to a consequence `say` node and then rejoin the main line.
- `domains` and `rubric`: each rubric item has a domain, observable `text`, `points` from 1 to 3, an optional `critical` flag and a one or two sentence `teaching` line for spaced review.

## Rules the tests enforce

Run `npm test`. It fails when:

- a `next` points to a missing node, or a node cannot be reached
- the graph has a cycle, or a path never reaches an `end`
- a rubric item is never tested by a question, or a question names a missing rubric id
- a case has no critical item
- any string contains an em dash, an en dash or a semicolon
- a case has fewer than 6 or more than 12 questions on a path, or fewer than 3 branching questions
- any source file adds network code or an AI SDK

## Style

Short sentences. One idea each. Canadian spelling. Plain clinical language. Invent every patient, number and detail. Never copy from a textbook, question bank or past exam.

## Adding a case

1. Copy an existing case file. Give it a new `id`.
2. Add it to `CASES` in `src/cases/index.ts`. The first two cases in that list are the free sample.
3. Run `npm test` and click through it with `npm run dev`.
4. Ship it with `reviewed: false` only in internal builds. Flip to `true` after physician sign off.
