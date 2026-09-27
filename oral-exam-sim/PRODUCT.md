# Product

<!-- impeccable:product-schema 1 -->

<!-- Written by /impeccable init from repository evidence (README.md, LAUNCH.md, store/listing.md, src/). The owner was not interviewed; lines marked (inferred) are unconfirmed. -->

## Platform

web

The app is a Vite and React web app that ships inside Capacitor 7 shells for iOS and Android. Its design language is its own, not iOS or Material, and it looks the same on both stores.

## Users

Emergency physicians preparing for the CFPC Examination of Added Competence in Emergency Medicine (CCFP-EM). They study in short sessions on a phone, often between or after shifts. (inferred) Both components are covered. The written component is SAMPs, and the structured oral is four 12 minute stations run out loud.

## Product Purpose

Exam prep for both components in one app. It has original SAMPs scored against examiner style keys and branching oral cases the candidate answers out loud and then self-marks on the four examiner criteria. Progress shows every CFPC priority topic and key feature, and spaced review brings back missed points. Success means a candidate walks into each component having rehearsed its format and closed the gaps the app shows them.

## Positioning

Practice that follows the real exam format: SAMP formats, 12 minute oral stations, examiner criteria, and all 35 priority topics with 215 key features. It works fully offline, with no account, no AI at runtime and no backend.

## Operating Context

- Mobile first: iPhone and Android phones, plus tablets. iOS 15 and later, Android API 36 target.
- Offline by design. A Content-Security-Policy blocks any outbound connection from the web layer. RevenueCat runs in the native SDK.
- Text to speech reads examiner lines aloud through the device voice.
- Light and dark follow the system setting.

## Capabilities and Constraints

- Clinical content (SAMPs, oral cases, answer keys, model answers, sources) is physician reviewed. Design work must not change it.
- Pricing, RevenueCat products and paywall logic are fixed by the owner. Store metadata is managed separately.
- Free sample: a set of SAMPs and 2 oral cases. Then yearly subscriptions: Complete, Written or Oral.
- Credit goes to "Preceptor" or "the Preceptor team". No personal names in the app.

## Brand Commitments

- Part of the Preceptor family of apps. They share one look: warm paper, navy ink, one gold accent from The Preceptor mark (concentric rings with a gold centre), a serif for examiner voice, a sans for the interface and a mono for time and numbers.
- Plain, direct Canadian English. No hype.
- Independent study tool, not affiliated with or endorsed by the CFPC. That disclaimer stays.

## Evidence on Hand

- Content counts shown in the app come from the data (`SAMPS.length`, `CASES.length`, priority topics). Never hard-code or inflate them.
- There are no testimonials, pass rates or outcome claims, and none may be invented.

## Product Principles

1. Rehearse the real format. Timing, structure and marking mirror the exam.
2. Calm under pressure. The interface stays quiet so the case and the clock carry the attention.
3. Honest feedback. Scores are self-marks and study guides, never predictions.
4. Private and offline. Nothing leaves the device.

## Accessibility & Inclusion

WCAG 2.1 AA contrast in light and dark. Touch targets sized for one-handed phone use. Every control reachable by keyboard with a visible focus ring. Reduced motion respected. (inferred)
