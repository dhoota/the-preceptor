# Q500 writer revision round 2: batch12

Revision against `docs/reviews/q500-verify-batch12.md`. Only the three failed cases were changed. `hyperacute-purulent-red-eye` passed and is untouched. `reviewed: false`, `version: 1` and `author: "Preceptor"` are unchanged.

## first-trimester-loss-mechanical-valve

1. Required fix 1, feedback of `c-resus` in `q-first`. "a pulse of 118 and a 30 mmHg drop on sitting" is now "a pulse rise of 24 and an 18 mmHg fall in systolic pressure on sitting". This matches finding `orthostatics` (lying 112 and 100/62, sitting 136 and 82/50).
2. Required fix 2.
   - `q-reverse` model answer line is now "Give IV vitamin K with the PCC. Canadian guidance gives them together because the PCC effect fades over about 6 hours. Agree the dose with cardiology, since anticoagulation restarts within days."
   - `ft-m3` text is now "Gives IV vitamin K with the PCC, with the dose agreed with cardiology because anticoagulation restarts within days."
   - `ft-m3` teaching is now "PCC corrects the INR for about 6 hours. IV vitamin K given at the same time sustains the correction and, at appropriate doses, does not cause warfarin resistance."
   - `ft-m3` source changed from `acc-valve` to `nac-pcc`.
   - Verified by downloading the NAC PDF (https://profedu.blood.ca/fr/media/5843/download, version 20220208 FINAL) and reading the text. It says the INR half life of PCC "is approximately 6 hours", that "PCCs and vitamin K should be given concurrently", and that IV vitamin K "does not produce the inability to resume oral anticoagulation ('warfarin resistance') when used at appropriate doses". `acc-valve` is still cited by other rubric items.

## work-trailer-heater-burns

1. Required fix, choice `c-elevate` in `q-arm`: `quality` changed from "partial" to "unsafe". Added "Waiting 2 hours risks permanent muscle and nerve loss." to the end of the feedback. Basis SCORING-RULINGS C1 and the signed precedents in batch04 and batch05.

## intoxicated-driver-hip-dislocation

1. Required fix, node `s-wait`: "nearly 3 hours" is now "more than 3 hours".

## Checks

- `npx tsc --noEmit -p .` shows no errors in `cases/batch12`.
- `CASE_BATCH=batch12 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 pass.
- No em dashes, en dashes or semicolons were added.
