# Oral realignment brief

For the agent bringing one oral case batch into the CFPC structured oral format. Arjan approved this change. The cases leave the September sign-off and go back to physician review. Only edit files in your batch folder `src/cases/<batch>/`. Write your report to `docs/reviews/oral-realign-<batch>.md`. Do not run git.

Read first: `docs/CASE_SPEC.md` (updated for this format), `docs/FORMAT_AUDIT.md` section 2.10, and `src/engine/types.ts` (`OralCase`, `OralCard`, `ORAL_CRITERIA`).

## What the CFPC station looks like

- The candidate gets 2 minutes to read the scenario out loud, then 12 minutes with the examiner.
- The card is short. It says where you are working, gives age, sex, arrival and complaint in a sentence or two, then a labelled block: temperature, pulse, respiration, blood pressure, O2 sat, weight in kg with lb in brackets, prescribed medication and allergies. There is no patient name.
- The candidate drives the history and examination. The examiner answers what is asked. History matters most.
- The score sheet has four rows, each marked 0 to 10: History, Physical exam and differential diagnosis, Management, and Overall process of care.

## For every case

1. Stem: rewrite to "You are working in the emergency department of a [community hospital, rural hospital or tertiary care centre] when the following patient arrives." plus one or two sentences. 60 words at most. Keep the setting the case depends on (for example no CT, or a long transfer).
2. Card: add `card` with `vitals` (formats as in SAMP_SPEC section 4, weight as "70 kg (154 lb)"), `medications` and `allergies`. Take the values from the old stem and findings. Do not change a value. Never invent one: if the case never gave medications or allergies, write "Not recorded". "None" and "None known" are facts, so use them only when the case states them.
3. History: move every history detail the old stem gave into `findings`, one finding per part (history of presenting illness, past history, medication details, social history, collateral). The candidate now has to ask for them. Nothing the case needs may be lost. Where a node or feedback assumed the candidate already knew a history fact from the stem, make sure a finding holds it.
4. Names: remove every patient name from the whole case, including nodes, feedback and rubric text. Use "the patient", "he" or "she". Staff and family roles ("his daughter", "the nurse") are fine.
5. Rubric rows: set `criterion` on every item to `history`, `physical`, `management` or `process`. Each row needs at least 2 items. `management` may hold at most half the points and `history` at least 15 percent. Add history items (the specific questions a strong candidate asks, such as "Asks about anticoagulant use and the time of the last dose") and process items (organization, prioritization, reassessment, closed loop communication, timely disposition) as needed. Each new item needs `competency`, `points`, `teaching` and a `source` from the case. Keep every existing item and its `critical` flag. You may split an item if it spans two rows.
6. Timing: set `durationMinutes: 12`. Scale question `seconds` so the longest path adds up to 720 or less. Keep each at 30 or more.
7. Sources: every citation names an author or body, a work and a year, or a textbook edition and year. Verify with WebSearch or WebFetch. Never invent one. Replace an unverifiable source with a verifiable one and report it.
8. Set `reviewed: false` and bump `version` to 2.
9. Do not change the clinical content, the branching, the choice quality or the scripted feedback, except to remove names or to fix a sentence that relied on a stem fact that moved.

## Checks

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep cases/<batch>
REALIGN=<batch> CASE_BATCH=<batch> npx vitest run tests/cases.test.ts
```

Everything must pass except one expected failure per case: "is marked reviewed only if a physician signed it off". The orchestrator updates the sign-off list when committing.

## Report

In house style (no em or en dashes, no semicolons). For each case:
- Old and new stem word counts, and the card.
- Which history details moved to which findings.
- Rubric points per row, before and after, and the items you added.
- Longest path seconds, before and after.
- Citation changes, with verification URLs.
- Needs physician decision.
