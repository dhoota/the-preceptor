# Preceptor: NCLEX-RN Prep. Launch guide

These are the owner steps for Arjan. They take the app from the `claude/nclex` branch to TestFlight and the Play internal track. Nothing in this repo deploys or submits anything by itself.

The app is fully offline. It calls no AI and no server of ours. The only network traffic comes from the native RevenueCat SDK talking to Apple and Google about purchases, and from links the user taps (the official test plan, privacy and terms).

## 0. Before anything else

1. Confirm the blueprint against https://www.nclex.com/test-plans.page. The app follows the 2026 NCLEX-RN test plan, effective 1 April 2026 to 31 March 2029. The Client Needs ranges, the 85 to 150 item length, the 5 hour limit, the 52 + 18 + 15 minimum structure and the three stopping rules were checked against the NCSBN test plan PDF on 24 September 2026. The RN passing standard of 0.00 logits comes from the brief. The test plan does not state it, so confirm it against the current NCSBN passing standard announcement. It lives in `EXAM.passingStandard` in `src/engine/blueprint.ts`.
2. Review the content. Every item ships with `reviewed: false`. Each batch has three reports in `docs/reviews/`: the writer's notes, the adversarial review (fixes, key changes, sources checked, items needing your decision) and the Canada note pass. Start with "Key changes" and "Needs Arjan's decision" in each review.
3. When an item is signed off, set `reviewed: true` and add its id to `docs/signoff.json`. Bump `version` if you edit it. The tests require `reviewed: true` for exactly the ids on that list. The Draft tag disappears once reviewed.
4. Run `npm test`. Release builds also run the launch gate (`LAUNCH_GATE=1`): the full 2,000 item bank in `tests/bank.test.ts` and real RevenueCat keys in `tests/platform.test.ts`. The gate fails while either key is a placeholder.

## 1. Repository and Codemagic app

Create a Codemagic app "Preceptor: NCLEX-RN Prep" on `dhoota/the-preceptor`. Codemagic reads `codemagic.yaml` only from the repository root. On this branch the root file holds the NCLEX workflows with `working_directory: nclex-rn`, and artifact globs are relative to that folder. `nclex-rn/codemagic.yaml` is the mirror. `tests/platform.test.ts` checks they match.

If this branch is merged with `claude/oral-exam-sim`, both apps need their workflows in the one root file. Give the NCLEX workflows distinct ids at that point (for example `nclex-android-debug`) and update the platform tests in both apps.

## 2. App identity

| Setting | Value | Where |
|---|---|---|
| Bundle ID and package | `com.preceptor.nclex` | `capacitor.config.json`, `android/app/build.gradle`, Xcode project |
| Display name | Preceptor: NCLEX-RN Prep | `capacitor.config.json`, `android/app/src/main/res/values/strings.xml`, `ios/App/App/Info.plist` |
| Entitlement | `nclexrn_access` | `src/lib/purchases.ts` |
| Offering | `nclexrn` | `src/lib/purchases.ts` |
| Support | preceptor.app@gmail.com | `src/lib/constants.ts` |
| Privacy | https://thepreceptor.ca/privacy | `src/lib/constants.ts` |
| Terms | https://thepreceptor.ca/terms | `src/lib/constants.ts` |

The iOS home screen truncates long names. Consider a shorter `CFBundleDisplayName` such as "NCLEX-RN Prep" and keep the full name in App Store Connect.

## 3. App Store Connect

1. Create the app record with bundle ID `com.preceptor.nclex` and the name Preceptor: NCLEX-RN Prep.
2. In-App Purchases:

   | Reference name | Product ID | Type | Price |
   |---|---|---|---|
   | Lifetime access | `nclexrn_lifetime` | Non-Consumable | US$59.99 tier and its CA$ equivalent. Launch price US$49.99 as a temporary price |
   | Monthly access | `nclexrn_monthly` | Auto-Renewable Subscription, 1 month | US$14.99 tier and its CA$ equivalent |

   Put the monthly product in its own subscription group, "NCLEX-RN access". Add a paywall screenshot and this review note to each: "50 items and 1 case study are free. Either product opens the full bank and the adaptive mock. Restore is on the paywall and in Settings."
3. Take the CA$ price from the store's own tier table for each US$ price. Do not convert by hand. Set the launch price as a scheduled price change so it ends on a date you choose.
4. Agreements, Tax and Banking and the Paid Apps agreement must be active. Stay in the App Store Small Business Program.
5. App Privacy and age rating: see `store/listing.md`.
6. Export compliance: `Info.plist` sets `ITSAppUsesNonExemptEncryption` to false.

## 4. Google Play Console

1. Create the app with package `com.preceptor.nclex`.
2. Monetize > Products. Create the one-time product `nclexrn_lifetime` and the subscription `nclexrn_monthly` with a monthly base plan. Match the prices above. Activate both.
3. Data safety, content rating and target audience: see `store/listing.md`.

## 5. RevenueCat

All Preceptor apps share one RevenueCat project. Its Current offering belongs to another app. This app reads `offerings.all["nclexrn"]` and never `offerings.current`. Do not make `nclexrn` the Current offering.

1. Add the iOS app and the Android app for `com.preceptor.nclex` to the project.
2. Products: import `nclexrn_lifetime` and `nclexrn_monthly` from both stores.
3. Entitlement `nclexrn_access`: attach both products.
4. Offering `nclexrn` with packages `$rc_lifetime` and `$rc_monthly`, each holding its product from both stores. The app finds a package by product ID, then by package type.
5. Paste the public SDK keys into `src/lib/purchases.ts`, replacing `appl_REPLACE_WITH_NCLEXRN_IOS_PUBLIC_KEY` and `goog_REPLACE_WITH_NCLEXRN_ANDROID_PUBLIC_KEY`. Until then purchases stay off and the release launch gate fails.
6. Test with a sandbox Apple ID and a Play licence tester. Buy monthly, let the sandbox subscription lapse, confirm access ends after a silent restore. Buy lifetime, delete, reinstall, Restore.

## 6. Codemagic

1. Link the existing `preceptor_signing` and `preceptor_play` groups and the `preceptor_appstore` integration. Reuse the same `IOS_CERT_KEY`.
2. Workflows: `android-debug`, `android-release`, `android-play-internal` (manual, internal track only), `ios-release` (TestFlight only).
3. Every workflow runs `npm test`. Release workflows also run the launch gate.

## 7. Pricing

Set by Arjan: lifetime at the CA$ equivalent of US$59.99, with a launch price of US$49.99, and a monthly subscription at US$14.99. The store fee is 15 percent in the Small Business Program and for subscriptions on Play.

- Lifetime fits a one time exam and restores cleanly.
- Monthly suits a candidate with a test date 4 to 8 weeks out. Four months of monthly passes the lifetime price, which anchors lifetime as the better value for longer study.

## 8. Exam model decisions

- The adaptive mock is a simple Rasch model. Item difficulty comes from the writer's 1 to 5 rating, mapped to -1.6, -0.8, 0, 0.8 and 1.6 logits. Nobody has calibrated these items on real candidates. The app shows a readiness band (above, near or below the standard) and never a chance of passing.
- Partial credit items enter the estimate as a fraction of their points. The estimate is a posterior mode with a wide prior (SD 3 logits) so it stays finite early on.
- Stopping rules: the 95% confidence rule after 85 items, the 150 item maximum, and the 5 hour run-out-of-time rule. The final estimate decides at the maximum or when time runs out, and below 85 items a timeout is below the standard. The clock counts time on screen and pauses when the app is closed.
- Case studies and pretest items sit in the first 85 positions, one case in each third. Pretest items are drawn from the bank and do not count.
- Scoring rules per type are in `src/engine/score.ts`, with golden tests in `tests/score.test.ts`.

## 9. Store listing and assets

Everything for the store records is in `store/`:

- `store/listing.md`: identifiers, name, subtitle, promotional text, keywords, description, What's New, Play text, privacy answers, age rating answers and review notes. `tests/listing.test.ts` checks every field against the store limits, house style and the trademark rules.
- `store/screenshots/`: 8 captioned screens for iPhone 6.9, iPhone 6.5, iPad 13, Play phone, Play 7 inch tablet and Play 10 inch tablet (9:16).
- `store/graphics/play-icon-512.png` and `store/graphics/play-feature-1024x500.png`.
- To regenerate: `VITE_SEED=1 npx vite build --outDir /tmp/seeded`, then `npx vite preview --outDir /tmp/seeded --port 5174`, then `npx -y -p playwright@1 node store/tools/make-assets.mjs http://localhost:5174`.

## 10. Legal and trademark checklist

- [ ] Every item signed off and set to `reviewed: true`.
- [ ] The NCLEX name is used descriptively only. The app never presents itself as an NCSBN product. No NCSBN logo anywhere.
- [ ] The disclaimer shows on first launch, in Settings and in the listing: not affiliated with, sponsored or endorsed by NCSBN. NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN.
- [ ] No NCSBN item, test plan text, sample pack, exam preview or tutorial content anywhere. They were read for format only.
- [ ] Educational use only. Not nursing or medical advice.
- [ ] No real client information. All scenarios are invented.
- [ ] Privacy policy on thepreceptor.ca covers this app. Store privacy labels match it.
- [ ] Terms cover a one time purchase, an auto-renewing subscription and the refund route through Apple or Google.
- [ ] Accessibility: test with VoiceOver and TalkBack on a device.

## 11. Build locally

```
npm install
npm test
npm run dev            # browser preview at http://localhost:5173
npm run build
npx cap sync
npx cap open android   # Android Studio
npx cap open ios       # Xcode, on a Mac
```

In the browser dev server a purchase is simulated so the paid flow can be clicked through. A production web build never grants access.
