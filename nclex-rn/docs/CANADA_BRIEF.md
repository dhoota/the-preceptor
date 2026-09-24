# Canada note brief

For the Canada pass on one reviewed batch in Preceptor: NCLEX-RN Prep. The NCLEX-RN is the entry exam for registered nurses in every Canadian province and territory except Quebec. The exam tests the practice NCSBN describes. Canadian candidates also need to know where Canadian practice differs. The `canada` field says so.

Only edit the `canada` field, and add a source when the note needs one. Do not change stems, choices, keys or rationales. Work only in `src/bank/<batch>/`. Write your report to `docs/reviews/<batch>-canada.md`. Do not run git.

## When to write a note

Write one or two short sentences when a Canadian nurse would do or read something different:

- Units. Canadian labs report SI units only (mmol/L, micromol/L, g/L). Say so when the item turns on a lab value.
- Drugs. A drug or formulation not sold in Canada, a different generic name (salbutamol for albuterol, acetaminophen, epinephrine) or a different schedule.
- Guidelines. A different Canadian threshold or schedule: Diabetes Canada, Hypertension Canada, NACI and the Canadian Immunization Guide, Canadian Tuberculosis Standards, PHAC infection control, SOGC, CPS, Heart and Stroke.
- Law and scope. Consent, capacity, mental health acts, reporting duties and substitute decision makers vary by province. The LPN role is RPN in Ontario. Delegation rules come from each provincial regulator.
- Systems. Publicly funded care, no Medicare or Medicaid, provincial health cards.

Leave `canada` as an empty string when there is no material difference. Do not write filler such as "Practice is the same in Canada."

## Rules

- The note never changes or softens the key. It adds context.
- Name the Canadian body and its guidance. Every claim in the note must be true and current. Verify it with WebSearch or WebFetch. If the note relies on a source the item does not cite, add it to `sources` (at most 4 in total), with author or body, work and year.
- Say "varies by province" rather than picking one province, unless the note names the province.
- House style: no em or en dashes, no semicolons, sentences of 35 words or fewer.

## Checks before you report

```
cd /home/user/the-preceptor/nclex-rn
BATCH=<batch> npx vitest run tests/bank.test.ts
```

## Report

`docs/reviews/<batch>-canada.md`: the count of notes written, the count left empty, and each source added with its URL.
