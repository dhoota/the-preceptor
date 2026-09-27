# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The app is a Vite and React web app wrapped by Capacitor for iOS and Android. Its design language is its own, not native iOS or Material.

## Users

New nursing graduates and internationally educated nurses preparing for the NCLEX-RN, in the United States and in Canada. They study on a phone in short sessions: a commute, a break on shift, the evening. Many are anxious about the exam and short on time.

## Product Purpose

Preceptor: NCLEX is an offline study tool. It gives original practice items in every Next Generation NCLEX item type, scored with the rule the exam uses for that type. Case studies walk the six clinical judgment steps. An adaptive mock follows the published exam structure and ends with a readiness band. Success is a candidate who knows where they stand and what to practise next.

## Positioning

- Every item is original and reviewed, with a reason for every choice and a named source.
- Scoring matches the exam: 0/1, plus/minus and rationale scoring.
- The mock gives an honest readiness band, never a percent chance of passing.
- Notes say where practice in Canada differs.
- Fully offline. No account, tracking or ads.

## Operating Context

- Tabs: Practice, Cases, Mock, Progress, More.
- A practice set is 10 or 25 items, picked by Client Needs area, clinical judgment step or item type.
- The mock runs up to 150 items in 5 hours, often in one sitting, and can be paused.
- Free tier: 50 items and 1 case study. Two auto-renewing subscriptions open the rest.

## Capabilities and Constraints

- Offline and deterministic. The only network use is store purchases through RevenueCat.
- Clinical content, pricing, purchase logic and store metadata are fixed. Design work must not change them.
- House copy style: no em or en dashes, no semicolons, short single-idea sentences, no filler. A test enforces it on content and docs.
- The NCLEX name is used descriptively only. The NCSBN disclaimer stays visible on first run and in Settings.
- Terminology follows the exam: client, primary health care provider, Client Needs, clinical judgment steps.

## Brand Commitments

- Part of the Preceptor family of exam preparation apps. Credit is to Preceptor, with no personal names.
- The Preceptor house look is binding: warm paper, navy ink, one gold accent from the Preceptor mark, serif for clinical text, sans for the interface, mono for numbers and time, flat surfaces and hairline rules. Work on it is refinement, not a new brand.
- The mark is three concentric rings in gold and navy.

## Evidence on Hand

- 2,000 original items and 100 case studies in `src/bank/`, reviewed and signed off.
- Store screenshots in `store/screenshots/` and the paywall review screenshot in `store/screenshots/review/`.
- No testimonials, pass rates or outcome data exist. Never invent them.

## Product Principles

1. Honest over encouraging. Show real scores and an honest band, never a promise.
2. The item comes first. Stems, exhibits and choices must be easy to read on a small screen.
3. Calm under pressure. Candidates are anxious. The interface stays quiet and predictable.
4. Every result explains itself. Feedback shows the points, the key and the reason.

## Accessibility & Inclusion

- WCAG 2.2 AA contrast in light and dark.
- A Larger text setting scales stems, choices and exhibits.
- Touch targets of at least 44 by 44 points on answer controls.
- Many users read English as a second language. Keep interface copy plain.
