# Preceptor: Oral

A CCFP-EM style oral exam simulator for iOS and Android. It is part of the Preceptor family and uses the same stack as Preceptor CCFP: Vite, React, Capacitor 7, RevenueCat and Codemagic.

It is fully offline. There is no AI at runtime, no account and no backend. Cases are scripted, branching examiner flows that ship as static data.

## What it does

- The examiner reads the stem and asks timed questions. The candidate answers out loud.
- The candidate picks the option closest to what they said. The script branches to a follow-up, an escalation or a consequence.
- Ask for findings at any time.
- Practice mode can show the model answer after each question. Exam day mode reads every line aloud with the device voice and ends each question when time runs out.
- At the end the candidate sees the model answers and self-scores the rubric. Critical misses fail the attempt.
- Scores roll up into weak areas by domain. Missed rubric points go into a spaced review deck.
- Two cases are free. One non-consumable in-app purchase unlocks the rest. Restore is in Settings and on the paywall.

## Run it

```
npm install
npm test
npm run dev    # http://localhost:5173
```

In the dev server the purchase is simulated so you can click through the paid flow.

## Layout

- `src/engine/`: the reusable engine. Types, graph validation, the attempt runner, scoring, weak areas and the spaced review scheduler. No framework imports.
- `src/cases/`: the five seed cases. All `reviewed: false`.
- `src/lib/`: on-device storage, RevenueCat purchases, OS text to speech, free sample gating.
- `src/screens/`: the UI.
- `tests/`: engine, review scheduler, platform, case validation and the offline guard.
- `android/`, `ios/`: Capacitor native projects.
- `codemagic.yaml`: CI builds, mirroring Preceptor CCFP.
- `LAUNCH.md`: owner steps for the stores, RevenueCat, Codemagic, pricing and legal.
- `docs/AUTHORING.md`: how to write a case.
