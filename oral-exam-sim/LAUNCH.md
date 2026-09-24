# Preceptor: CCFP-EM. Launch guide

These are the owner steps for Arjan. They take the app from this branch to TestFlight and the Play internal track. Nothing in this repo deploys or submits anything by itself.

The app covers both components of the CFPC Examination of Added Competence in Emergency Medicine: the written SAMP exam and the structured oral. It is fully offline. It calls no AI and no server of ours. The only network traffic comes from the native RevenueCat SDK talking to Apple and Google about purchases, and from the Official CFPC resources links when the candidate taps them.

## 0. Before anything else

1. Review the content. New content ships with `reviewed: false`. The first 525 SAMPs and 100 oral cases were signed off by Arjan Dhoot, MD on 24 September 2026. Their ids are listed in `docs/signoff-2026-09.json`, and the tests require `reviewed: true` exactly for those ids. All 100 oral cases were then realigned to the CFPC oral card, reading time and four row score sheet, with Arjan's approval. They left the sign-off (listed under `withdrawn`) and are back to `reviewed: false` for a re-check. The realign reports are `docs/reviews/oral-realign-*.md`.
   - Oral: 100 cases in `src/cases/seed/` and `src/cases/batch01/` to `batch10/`. Blueprint in `docs/BLUEPRINT.md`.
   - Written: 525 SAMPs in `src/samps/s01/` to `s18/`, 15 per priority topic. Blueprint in `docs/SAMP_BLUEPRINT.md`.
2. Start with the adversarial review reports in `docs/reviews/`. Each batch had a separate clinical review against current Canadian guidance. The reports list what was corrected, the sources checked and what still needs a physician's eye.
3. For SAMPs, read each answer key as an examiner would. Check the acceptable answers, the required count, the unacceptable answers and anything flagged dangerous. Check that the match phrases would catch the ways a candidate might write a correct answer.
4. When an item is signed off, change `reviewed: false` to `reviewed: true` and add its id to a sign-off file in `docs/`. Bump `version` if you edit it. If a signed-off item changes later, remove its id and set it back to `reviewed: false`. The Draft tag disappears once reviewed.
5. Run `npm test`. Release builds also run the launch gate (`LAUNCH_GATE=1`): the content minimums in `tests/cases.test.ts` and `tests/samps.test.ts`, and real RevenueCat keys for both stores in `tests/platform.test.ts`. The gate fails while either key is still a placeholder.

## 1. Repository and Codemagic app

The Codemagic app "Preceptor: CCFP-EM" (id 6ab4a0114e7acd498ad4caf1) builds from `dhoota/the-preceptor`. Codemagic reads `codemagic.yaml` only from the repository root, so the root holds a copy of `oral-exam-sim/codemagic.yaml` with `working_directory: oral-exam-sim` on every workflow. Keep the two files in step. `tests/platform.test.ts` checks that they match.

## 2. App identity

| Setting | Value | Where |
|---|---|---|
| Bundle ID and package | `com.preceptor.oral` (unchanged, the store records exist) | `capacitor.config.json`, `android/app/build.gradle`, Xcode project |
| Display name | Preceptor: CCFP-EM | `capacitor.config.json`, `android/app/src/main/res/values/strings.xml`, `ios/App/App/Info.plist` |
| Access | 11 months from purchase, worked out in the app from purchase dates. No RevenueCat entitlements | `src/lib/purchases.ts` |
| Offering | `ccfpem` | `src/lib/purchases.ts` |
| Support | preceptor.app@gmail.com | `src/lib/constants.ts` |
| Privacy | https://thepreceptor.ca/privacy | `src/lib/constants.ts` |
| Terms | https://thepreceptor.ca/terms | `src/lib/constants.ts` |

The iOS home screen truncates long names under the icon. "Preceptor: CCFP-EM" will likely show as "Preceptor: C..." there. If you prefer, set a shorter `CFBundleDisplayName` such as "CCFP-EM" in `Info.plist` and keep the full name in App Store Connect.

## 3. App Store Connect

The app record exists under `com.preceptor.oral`. Update the name to Preceptor: CCFP-EM.

1. Monetization > In-App Purchases. Access lasts 11 months from purchase (Arjan, 24 September 2026), so these are **Non-Renewing Subscriptions**, not Non-Consumables. Create all three:

   | Reference name | Product ID | Type | Price |
   |---|---|---|---|
   | Complete: written and oral, 11 months | `ccfpem_complete_11mo` | Non-Renewing Subscription | CA$199.99 |
   | Written: SAMP bank, 11 months | `ccfpem_written_11mo` | Non-Renewing Subscription | CA$149.99 |
   | Oral: oral simulator, 11 months | `ccfpem_oral_11mo` | Non-Renewing Subscription | CA$99.99 |

   The earlier drafts `ccfpem_complete_lifetime`, `ccfpem_written_lifetime` and `oral_full_lifetime` are abandoned unsubmitted. Apple never lets a product ID be reused, so the new IDs are different on purpose.

   Add a paywall screenshot and this review note to each: "Ten SAMPs and two oral cases are free. Each purchase gives 11 months of access from the purchase date and does not renew. Complete opens both components. Written or Oral opens one. Restore is in Settings and on the paywall. The app records the purchase date and ends access after 11 months." 
2. Agreements, Tax and Banking and the Paid Apps agreement must be active.
3. Stay in the App Store Small Business Program (15 percent).
4. App Privacy: see `store/listing.md`.
5. Export compliance: `Info.plist` sets `ITSAppUsesNonExemptEncryption` to false. The app uses only the encryption built into iOS (HTTPS to the stores), so uploads skip the export compliance question.

## 4. Google Play Console

1. Rename the app to Preceptor: CCFP-EM.
2. Monetize > Products > One-time products. Create the same three product IDs and prices as above (`ccfpem_complete_11mo`, `ccfpem_written_11mo`, `ccfpem_oral_11mo`). Activate them. Play has no 11 month subscription or prepaid plan (prepaid plans stop at 8 months or 1 year), so these are one-time products and the app ends access after 11 months. If any `_lifetime` products were created in Play, leave them inactive. Play IDs cannot be reused either.
3. Data safety, content rating and target audience: see `store/listing.md`.

## 5. RevenueCat

All Preceptor apps share one RevenueCat project. Its Current offering belongs to another app, so this app fetches its offering by id (`offerings.all["ccfpem"]`) and never reads `offerings.current`. Do not make `ccfpem` the Current offering.

1. Products: import the three `_11mo` product IDs from both stores. On the Play products, set the type to **Non-consumable**. RevenueCat consumes Play one-time products by default, and this app has no accounts, so a consumed purchase could not be restored after a reinstall (Play Billing 8, used by purchases-capacitor 11). Delete the `_lifetime` products from RevenueCat if they were imported.
2. Entitlements: attach **none** of the three products to any entitlement. Neither store sends an expiry for these products, and RevenueCat reports any product attached to an entitlement as unlocked forever. The app reads each purchase date from `customerInfo.nonSubscriptionTransactions` and ends access 11 calendar months later. `written_access` and `oral_full_access` are no longer used. Leave them empty or delete them.
3. Offering `ccfpem` with three packages, custom identifiers `complete`, `written` and `oral`, each holding its `_11mo` product from both stores. The app finds a package by its identifier, then by product ID.
4. Public SDK keys in `src/lib/purchases.ts`:
   - Android: done (`goog_...`).
   - iOS: still a placeholder. Upload the App Store in-app purchase key in RevenueCat, then paste the `appl_...` key. Until then purchases stay off on iOS and the release launch gate fails.
5. Test with a sandbox Apple ID and a Play licence tester. Buy Written, then Oral, confirm both open and Settings shows "access until" 11 months out. Delete, reinstall, Restore. Settings > Purchase shows the end date for each component.
6. Renewal after 11 months: on iOS the same product can be bought again, and a purchase made before expiry extends from the current end date. On Play a non-consumable product cannot be bought twice. A Play buyer who wants a second term needs a second set of products. Decide before the first terms end (earliest late summer 2027).

A candidate who already owns one component sees only the other one offered. Complete is shown only to someone who owns neither.

## 6. Codemagic

1. The Codemagic app "Preceptor: CCFP-EM" uses the root `codemagic.yaml` (section 1). Link the existing `preceptor_signing` and `preceptor_play` groups and the `preceptor_appstore` integration. Reuse the same `IOS_CERT_KEY`.
2. Workflows: `android-debug`, `android-release`, `android-play-internal` (manual, internal track only), `ios-release` (TestFlight only).
3. Every workflow runs `npm test`. Release workflows also run the launch gate.

## 7. Price proposal

Confirmed by Arjan on 24 September 2026: Complete CA$199.99, Written CA$149.99, Oral CA$99.99.

The bank is now far larger: 525 SAMPs and 100 oral cases. Running cost is still zero. The store fee is 15 percent.

| Product | Price | Nets about |
|---|---|---|
| Complete (written and oral) | CA$199.99 | CA$170 |
| Written only | CA$149.99 | CA$127 |
| Oral only | CA$99.99 | CA$85 |

Reasoning:

- Candidates can pass one component and repeat the other. Selling each component on its own serves repeat candidates. It is also the honest price for someone who only wants the written bank.
- The written bank is the bigger body of work and the part most candidates use daily, so it is priced higher than the oral.
- Complete is 20 percent less than buying both, so it is the clear choice for a first attempt. It anchors the paywall.
- A single payment for 11 months fits an exam cycle. It does not renew, so nobody is charged after their exam. Access ends 11 months after purchase (Arjan, 24 September 2026).
- CA$199.99 sits below the Preceptor CCFP annual price of $250 while offering two exam components, and stays under the price point where app store buyers balk.
- Time limited access is tracked in the app from the purchase date, so no server is needed. The cached end date keeps working offline and still ends access on time.

## 7a. Exam format decisions

- Written mocks: a full mock is 40 SAMPs in 4 hours and a half mock is 20 in 2 hours. The CFPC states the SAMP exam is designed to last four hours but we did not find a published case count, so 40 was our estimate. Arjan confirmed 40 SAMPs in 4 hours on 24 September 2026. The setting is `MOCK_WRITTEN` in `src/engine/exam.ts`.
- Written scoring: each question is worth one point, split evenly across the answers it asks for. Only the first N answers count. A dangerous answer zeroes the question. Candidates may override the automatic match on their own answers. The CFPC does not publish a pass mark, so the app shows scores without a pass band for the written component.
- Oral: 12 minute stations, timed from the moment the candidate has read the stem, four stations on four different priority topics, marked on four criteria: diagnostic approach, use and interpretation of data, diagnosis, and a timely treatment plan.
- Blueprint: the 35 CFPC EM priority topics and 215 key features, from the CFPC key features document linked on the Preparing page. Key feature text in the app is our own paraphrase. The official wording is linked, not copied, because CFPC material may only be reproduced for non-commercial use.
- No CFPC sample question or recalled exam content appears anywhere in the app. The samples were read for format only.

## 8. Store listing

Everything for the store records is in `store/`:

- `store/listing.md`: identifiers, name, subtitle, promotional text, keywords, description, What's New, Play short and full description, release notes, privacy answers for both stores, age rating answers and review notes. `tests/listing.test.ts` checks every field against the store character limits and the house style.
- `store/screenshots/iphone-6.9/` (1320 by 2868), `iphone-6.5/` (1284 by 2778), `ipad-13/` (2064 by 2752) and `play-phone/` (1080 by 1920). Eight captioned screens each.
- `store/graphics/play-icon-512.png` and `store/graphics/play-feature-1024x500.png`.
- The App Store icon (1024) comes from `assets/icon-only.png` through the Xcode asset catalog.

To regenerate the screenshots after content changes, build a seeded static copy with `VITE_SEED=1 npx vite build --outDir /tmp/seeded`, serve it with `npx vite preview --outDir /tmp/seeded --port 5174`, then run `npx -y -p playwright@1 node store/tools/make-assets.mjs http://localhost:5174`. The seed and the simulated store exist only when `VITE_SEED=1` is set, so production builds never include them. Set `ONLY=play-phone` to render one size.

## 9. Website

1. Add a Preceptor: CCFP-EM section to thepreceptor.ca with the store badges.
2. Update https://thepreceptor.ca/privacy to cover this app. Key points: no account, no data collected by the app, progress stays on the device, purchases handled by Apple or Google through RevenueCat, support at preceptor.app@gmail.com.
3. Make sure https://thepreceptor.ca/terms covers this app too.

## 10. Legal and disclaimer checklist

- [x] First 525 SAMPs and 100 oral cases signed off by a physician (24 September 2026).
- [ ] Every SAMP added after that signed off and set to `reviewed: true`.
- [ ] No CFPC logos or trademarks in the app, icon, screenshots or listing. "CCFP-EM" names the certificate the exam leads to. Say clearly that the app is independent and not affiliated. Consider asking the CFPC whether it objects to the name.
- [ ] No CFPC sample question or recalled exam content in the app. The Official CFPC resources screen only links out.
- [ ] In-app disclaimer shown on first launch. It is in `src/screens/Disclaimer.tsx`.
- [ ] Educational use only. Not medical advice. Not for patient care.
- [ ] No real patient information in any case. All cases are invented.
- [ ] No copied textbook or question bank text. All cases were written for this app.
- [ ] Practice score is self-marked. The app says it does not predict exam results.
- [ ] Privacy policy on thepreceptor.ca covers this app. Store privacy labels match it.
- [ ] Terms of use cover a single payment for 11 months of access from the purchase date, no automatic renewal, and the refund route. Refunds go through Apple or Google. The terms page at thepreceptor.ca is outside this repo and must be updated by hand.
- [ ] Sales tax: Apple and Google collect and remit GST and HST on app sales in Canada. Keep records for your own filings.
- [ ] Accessibility: test with VoiceOver and TalkBack on a device. All controls are real buttons with labels.
- [ ] CASL: the app sends no marketing messages. If you add a mailing list later, collect express consent.
- [ ] Consider professional liability advice for publishing clinical education content.

## 11. Reviewer notes from case drafting

Check these first. They are the points where sources differ or where local practice varies.

- Febrile infant: ampicillin written as 75 to 100 mg/kg. Cefotaxime 50 mg/kg with alternatives. Acyclovir 20 mg/kg. Tube size and depth. Phenobarbital 20 mg/kg as second line.
- Ethics case: PCC for apixaban written as 50 units/kg "or per local protocol". Andexanet not mentioned.
- Ontario legal content: Health Care Consent Act, Consent and Capacity Board, Apology Act 2009, Form 1 and Form 42, Trillium Gift of Life Network notification.
- CPSO no-CPR policy wording was left out on purpose. Add it if you want it.
- Overdose: acetylcysteine regimens (two-bag and three-bag both accepted). Bicarbonate infusion 150 mEq in 1 L D5W at 150 to 250 mL/h.
- Trauma: reduced RSI doses in shock (ketamine 0.5 to 1 mg/kg, rocuronium 1.2 to 1.6 mg/kg). Fibrinogen 4 g or 10 units cryoprecipitate.
- Targets: ICH systolic about 140 to 160. Dissection heart rate under 60 and systolic 100 to 120.
- Invented local details: Ontario Poison Centre advice, travel times, CritiCall, Ornge and blood bank stock. Adjust to your setting.

## 12. Build locally

```
npm install
npm test
npm run dev            # browser preview at http://localhost:5173
npm run build
npx cap sync
npx cap open android   # Android Studio
npx cap open ios       # Xcode, on a Mac
```

In the browser dev server the unlock is simulated so you can click through the paid flow. A production web build never unlocks anything.

## Physician review: items the reviewers flagged

Each batch review in `docs/reviews/` ends with open questions. These changed keyed answers.

Status: confirmed by Arjan Dhoot, MD on 24 September 2026. That covers every item below, the Ontario law framing, the pricing and the 40 SAMP four hour mock.

- Rh immune globulin in early pregnancy loss and ectopic pregnancy now follows SOGC No. 448 (2024). It is not routinely given before 8 weeks and is optional from 8 to 12 weeks. The CFPC key feature still says to offer prophylaxis. Affects s01 and s10.
- Beta blockers in cocaine toxicity are unacceptable, not dangerous, following the 2023 AHA update. Affects s12 and s18.
- Pediatric levetiracetam is capped at 3000 mg, per TREKK 2025. Affects s16.
- Febrile neonate antibiotic doses follow CPS 2024: ampicillin 75 mg/kg every 6 h and gentamicin 5 mg/kg every 24 h. Affects s14.
- PID treatment follows the current PHAC guide: ceftriaxone 500 mg IM, doxycycline and metronidazole. Affects s12.
- Provincial law. Stems that test Ontario statutes now say Ontario. Other stems use national wording. Confirm this suits a national exam.
- Short answer matching ignores word order and reads only simple negation ("no", "avoid", "don't", "contraindicated" after a drug). "Rather than NG" is not read as negation. Candidates can override any line except one marked dangerous.
