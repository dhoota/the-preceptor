# Q500 writer revision round 2: batch11

Revision against `docs/reviews/q500-verify-batch11.md`. Only the two failed cases were changed. `peritoneal-dialysis-wheeze-overload` and `ems-patch-ruptured-aaa` passed and are untouched. `reviewed: false`, `version: 1` and `author: "Preceptor"` are unchanged.

## stopped-antiplatelets-dental-stemi

1. Required fix 1, node `s-wait`. Replaced "You give tenecteplase 40 mg, clopidogrel and enoxaparin." with "You give tenecteplase 40 mg and keep the heparin running. She has already had ticagrelor, so you do not add clopidogrel." This is the review's exact text. Source `esc17` (one P2Y12 inhibitor and one anticoagulant with fibrinolysis).
2. Required fix 2.
   - Finding `ecg2` label changed from "ECG at 06:58" to "Repeat ECG".
   - "09:15" changed to "09:30" in finding `transport` and node `s-transport`.
   - First line of the `q-reperfusion` model answer is now "First medical contact was 06:40 and the diagnostic ECG followed. A lab time of 09:30 is more than 120 minutes from either." From the latest repeat ECG (about 07:15 on the `c-reflux` path), 09:30 is 135 minutes, so the line holds on every path. Sources `esc23` and `ccs`.

Advisory items (ih-h5 source, driving advice source) were not changed. No source in the case covers collateral history, and the reviewer did not require it.

## glass-finger-return-visit

1. Required fix 1, choice `c-blame` in `q-disclose`: `quality` changed from "unsafe" to "partial" per SCORING-RULINGS C1. Feedback unchanged. The question still has its strong choice.
2. Required fix 2.
   - `s-oral` now reads "She returns at 07:00 with a temperature of 39.0°C and swelling into her palm. You call the hand surgeon, who asks why she was sent home."
   - `s-surgeon` now reads "The plastic surgeon on call at the regional centre is on the phone. She can take the patient to the operating room as soon as she arrives and asks for your summary."
3. Consequential changes needed for the same path (internal consistency, CASE_SPEC flow rules). On the `c-oral` path the case is now the next morning, so:
   - the phases of `s-deflect` and `s-blame` changed from "19:00" to "Minutes later", so the clock no longer runs from 07:00 to 19:00 while she waits for transport
   - the `q-disclose` model answer line "Antibiotics and surgery tonight, and the nerve repair." became "Antibiotics, urgent surgery and the nerve repair."
   The main path reads the same as before.

Advisory items (lc-pr4 source, the 2 mm glass figure, the title) were not changed.

## Checks

- `npx tsc --noEmit -p .` shows no errors in `cases/batch11`.
- `CASE_BATCH=batch11 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- No em dashes, en dashes or semicolons were added.
