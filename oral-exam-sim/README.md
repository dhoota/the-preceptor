# Preceptor: CCFP-EM

Exam prep for both components of the CFPC Examination of Added Competence in Emergency Medicine, for iOS and Android. Part of the Preceptor family and built on the same stack as Preceptor CCFP: Vite, React, Capacitor 7, RevenueCat and Codemagic.

Fully offline. No AI at runtime, no account and no backend. All content is static data, original, and marked `reviewed: false` until a physician signs it off.

## What it does

Written component
- 525 original SAMPs, 15 per CFPC priority topic, in the three formats the exam uses: short answer, menu and single best answer.
- Short answers are scored against examiner style keys: acceptable answers, required count, unacceptable and dangerous answers. Only the first N answers count. The candidate can override a match.
- Practice by priority topic, and a timed 4 hour mock (or 2 hour half mock) balanced across the blueprint.

Structured oral
- 100 branching oral cases with scripted examiner feedback on every decision.
- 12 minute stations timed from reading the stem, and a four station mock oral on four different topics.
- Self-marked on the four examiner criteria. Rule-built report with critical misses, top three fixes and next cases.

Across both
- Every SAMP and case is mapped to the 35 CFPC EM priority topics and 215 key features. Progress shows each topic and key feature.
- Spaced review of missed oral rubric points. Readiness estimate and trend.
- Official CFPC resources screen that links out to the CFPC material. Nothing is copied from it.
- Free sample: 10 SAMPs and 2 oral cases. One time purchases: Complete, Written or Oral.

## Run it

```
npm install
npm test
npm run dev    # http://localhost:5173
```

In the dev server purchases are simulated so the paid flows can be clicked through. `?seed=1` loads a sample history for screenshots.

## Layout

- `src/engine/`: the reusable engine. Oral cases, SAMP scoring, exam composition, reports, analytics, spaced review. No framework imports.
- `src/blueprint/`: CFPC EM priority topics and key features (key features paraphrased).
- `src/cases/`: 100 oral cases. `src/samps/`: 525 SAMPs.
- `src/lib/`: storage, RevenueCat, text to speech, access rules. `src/screens/`: the UI.
- `tests/`: engine, scoring, content structure and style, blueprint coverage, offline guard, store listing.
- `docs/`: blueprints, writing specs and the adversarial review reports.
- `LAUNCH.md`: owner steps. `store/`: listing, screenshots, graphics.
