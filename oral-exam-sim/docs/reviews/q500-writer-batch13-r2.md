# Q500 writer revision round 2: batch13

Revision against `docs/reviews/q500-verify-batch13.md`. All four cases failed, three only on their titles. `reviewed: false`, `version: 1` and `author: "Preceptor"` are unchanged. Ids and file names are unchanged.

New titles were checked against every case and SAMP title in the bank (`grep -rh 'title:' src/cases src/samps`, 1618 titles). None is an exact or near match, none names the diagnosis, and none uses the patterns the review flagged.

## late-dinner-chest-pain

1. Required fix, `title`: "Chest pain after a family dinner" is now "Driven in late by his wife". It does not start "Chest pain after" and gives nothing away. It matches the stem (driven in by his wife at 23:40).

## postpartum-headache-sixth-day

1. Required fix 1, node `s-partner`: `phase` "17:15" is now "Later that afternoon". On the `c-xl` path it follows `s-xl` at 17:30 and comes before 17:40, so the clock no longer runs backwards.
2. Required fix 2, `title`: "Six days after the birth" is now "Sparkling lights in both eyes". It does not use the "N days after ... birth" pattern and does not name the diagnosis. It comes from her own symptom in the history finding.
3. Required fix 3: the confirmed severe value is now 176/104 mmHg, in finding `repeat-bp` and in the `c-treat` label in `q-first` ("I repeated the BP in 15 minutes and got 176/104."). It is still in the severe range (systolic 160 or more), so the treat within 30 to 60 minutes teaching and every grade still hold. Nothing else depended on 168/110. The triage BP (164/108), `s-wait-labs`, `s-migraine` and `bp-course` values are separate and unchanged.

## boarder-hard-to-wake

1. Required fix, `title`: "Hard to wake before morning rounds" is now "The 05:30 vital signs round". It does not start "Hard to wake" and matches the stem time and summary.

## ladder-fall-ankle-sedation

1. Required fix, `title`: "A fall from a ladder" is now "Cleaning the eavestrough", the review's own example, taken from the history finding. It does not give away anaphylaxis.
2. As instructed, the anaphylaxis infusion rate content was not changed.

## Checks

- `npx tsc --noEmit -p .` shows no errors in `cases/batch13`.
- `CASE_BATCH=batch13 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- No em dashes, en dashes or semicolons were added.
