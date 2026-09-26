# Preceptor: NCLEX-RN Prep. Launch guide

These are the owner steps for Arjan. They take the app from the `claude/nclex` branch to TestFlight and the Play internal track. Nothing in this repo deploys or submits anything by itself.

The app is fully offline. It calls no AI and no server of ours. The only network traffic comes from the native RevenueCat SDK talking to Apple and Google about purchases, and from links the user taps (the official test plan, privacy and terms).

## 0. Before anything else

1. Blueprint: the app follows the 2026 NCLEX-RN test plan, effective 1 April 2026 to 31 March 2029, checked against the NCSBN test plan PDF on 24 September 2026. The RN passing standard of 0.00 logits, effective through 31 March 2029, was confirmed on https://www.nclex.com/passing-standard.page on 26 September 2026. It lives in `EXAM.passingStandard` in `src/engine/blueprint.ts`.
2. Content: signed off by Arjan Dhoot on 26 September 2026, including the three bank key changes in `docs/SIGNOFF_QUEUE.md`. All 2,000 items and 100 case studies carry `reviewed: true` and are listed in `docs/signoff.json`. If an item changes later, remove its id and set it back to `reviewed: false`.
3. When an item is signed off, set `reviewed: true` and add its id to `docs/signoff.json`. Bump `version` if you edit it. The tests require `reviewed: true` for exactly the ids on that list. The Draft tag disappears once reviewed.
4. Run `npm test`. Release builds also run the launch gate (`LAUNCH_GATE=1`): the full 2,000 item bank in `tests/bank.test.ts` and real RevenueCat keys in `tests/platform.test.ts`. The gate fails while either key is a placeholder.

## 0a. Bank status

- 2,000 items: 1,400 stand-alone items in 28 batches and 100 case studies of 6 items in 20 batches. Client Needs totals match the 2026 test plan midpoints: 360, 260, 180, 180, 180, 320, 240, 280.
- Every batch went through a writer, an adversarial review with verified sources, and a Canada note pass. Each review was calibrated with 2 planted defects. All 96 were caught.
- The reviews made about 520 fixes. About 420 were in bank items and the rest in planted items. Almost all were in rationales and choice reasons, as in the other Preceptor banks. Three bank keys changed, listed in `docs/SIGNOFF_QUEUE.md`.
- The session web search allowance ran out partway through. Later sources were checked on PubMed, publisher and agency pages instead. Each review report lists what was verified and how.

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

1. App record: created 26 September 2026. Name Preceptor: NCLEX-RN Prep, bundle ID `com.preceptor.nclex`, Apple ID 6816532704, SKU `preceptor-nclex`, primary language English (U.S.).
2. Subscriptions:

   | Reference name | Product ID | Type | Duration | Group level | Price |
   |---|---|---|---|---|---|
   | NCLEX-RN Access, 6 months | `nclexrn_6month` | Auto-Renewable Subscription | 6 months | 1 | US$149.99 |
   | NCLEX-RN Access, 3 months | `nclexrn_3month` | Auto-Renewable Subscription | 3 months | 2 | US$99.99 |

   Both go in one subscription group, "NCLEX-RN Access". There is no lifetime and no monthly product. Add the paywall review screenshot `store/screenshots/review/paywall.png` and this review note to each: "50 items and 1 case study are free. Either subscription opens the full bank and the adaptive mock. Restore Purchases is on the paywall and in Settings."
3. Set US$149.99 and US$99.99 as the base prices and let the store derive the other currencies from its tier table. There is no launch price.
4. Agreements, Tax and Banking and the Paid Apps agreement must be active. Stay in the App Store Small Business Program.
5. App Privacy and age rating: see `store/listing.md`.
6. Export compliance: `Info.plist` sets `ITSAppUsesNonExemptEncryption` to false.

## 4. Google Play Console

1. Create the app with package `com.preceptor.nclex`.
2. Monetize > Subscriptions. Create `nclexrn_6month` with an auto-renewing base plan `p6m` (6 months, US$149.99) and `nclexrn_3month` with an auto-renewing base plan `p3m` (3 months, US$99.99). Activate both base plans.
3. Data safety, content rating and target audience: see `store/listing.md`.

## 5. RevenueCat

All Preceptor apps share one RevenueCat project. Its Current offering belongs to another app. This app reads `offerings.all["nclexrn"]` and never `offerings.current`. Do not make `nclexrn` the Current offering.

1. Add the iOS app and the Android app for `com.preceptor.nclex` to the project.
2. Products: import `nclexrn_6month` and `nclexrn_3month` from App Store Connect, and `nclexrn_6month:p6m` and `nclexrn_3month:p3m` from Play.
3. Entitlement `nclexrn_access`: attach both products.
4. Offering `nclexrn` with packages `$rc_six_month` and `$rc_three_month`, each holding its product from both stores. The app finds a package by package type, then by product ID (the Play form `id:basePlan` included).
5. Paste the public SDK keys into `src/lib/purchases.ts`, replacing `appl_REPLACE_WITH_NCLEXRN_IOS_PUBLIC_KEY` and `goog_REPLACE_WITH_NCLEXRN_ANDROID_PUBLIC_KEY`. Until then purchases stay off and the release launch gate fails.
6. Test with a sandbox Apple ID and a Play licence tester. Buy the 3 month plan, let the sandbox subscription lapse and confirm access ends after a silent restore. Upgrade from 3 months to 6 months within the group. Delete, reinstall and Restore.

## 6. Codemagic

1. Link the existing `preceptor_signing` and `preceptor_play` groups and the `preceptor_appstore` integration. Reuse the same `IOS_CERT_KEY`.
2. Workflows: `android-debug`, `android-release`, `android-play-internal` (manual, internal track only), `ios-release` (TestFlight only).
3. Every workflow runs `npm test`. Release workflows also run the launch gate.

## 7. Pricing

Set by Arjan on 26 September 2026: two auto-renewing subscriptions and nothing else. US$149.99 every 6 months and US$99.99 every 3 months. Other currencies come from the store price tiers. The store fee is 15 percent in the App Store Small Business Program and on Play subscriptions.

- The plans match how long candidates study for the exam. The 6 month plan costs about 25 percent less per month.
- Both plans renew until cancelled, so a candidate who retakes the exam keeps access.

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
- `store/screenshots/review/paywall.png` (1320 by 2868) is the in-app purchase review screenshot for both subscriptions. Regenerate it with `npx -y -p playwright@1 node store/tools/make-review.mjs http://localhost:5174` against the same seeded preview.

## 10. Legal and trademark checklist

- [x] Every item signed off and set to `reviewed: true` (26 September 2026).
- [ ] The NCLEX name is used descriptively only. The app never presents itself as an NCSBN product. No NCSBN logo anywhere.
- [ ] The disclaimer shows on first launch, in Settings and in the listing: not affiliated with, sponsored or endorsed by NCSBN. NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN.
- [ ] No NCSBN item, test plan text, sample pack, exam preview or tutorial content anywhere. They were read for format only.
- [ ] Educational use only. Not nursing or medical advice.
- [ ] No real client information. All scenarios are invented.
- [ ] Privacy policy on thepreceptor.ca covers this app. Store privacy labels match it.
- [ ] Terms cover auto-renewing 3 and 6 month subscriptions, cancellation and the refund route through Apple or Google.
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
