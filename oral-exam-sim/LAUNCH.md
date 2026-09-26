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
| Access | Yearly auto-renewing subscriptions. Expiry comes from the RevenueCat entitlements `written_access` and `oral_full_access` | `src/lib/purchases.ts` |
| Offering | `ccfpem` | `src/lib/purchases.ts` |
| Support | preceptor.app@gmail.com | `src/lib/constants.ts` |
| Privacy | https://thepreceptor.ca/privacy | `src/lib/constants.ts` |
| Terms | https://thepreceptor.ca/terms | `src/lib/constants.ts` |

The iOS home screen truncates long names under the icon. "Preceptor: CCFP-EM" will likely show as "Preceptor: C..." there. If you prefer, set a shorter `CFBundleDisplayName` such as "CCFP-EM" in `Info.plist` and keep the full name in App Store Connect.

## 3. App Store Connect

The app record exists under `com.preceptor.oral`. Update the name to Preceptor: CCFP-EM.

1. Monetization > Subscriptions. Access is a yearly subscription that renews automatically (Arjan, 24 September 2026). Create one subscription group, for example "CCFP-EM access", and three **Auto-Renewable Subscriptions** in it, each with a duration of 1 year:

   | Level | Reference name | Product ID | Duration | Price |
   |---|---|---|---|---|
   | 1 | Complete: written and oral, yearly | `ccfpem_complete_1y` | 1 year | CA$199.99 |
   | 2 | Written: SAMP bank, yearly | `ccfpem_written_1y` | 1 year | CA$149.99 |
   | 2 | Oral: oral simulator, yearly | `ccfpem_oral_1y` | 1 year | CA$99.99 |

   Put Complete alone on the top level and Written and Oral together on the level below. A group lets a person hold one subscription at a time. So a subscriber to Written or Oral who wants both upgrades to Complete. The App Store does that at once and refunds the unused part. The paywall offers only Complete to someone who already holds Written or Oral. Moving between Written and Oral, or down from Complete, is left to the App Store subscription settings, where it takes effect at the next renewal.

   Add a localized display name and description to the group and to each subscription. The earlier drafts `ccfpem_complete_lifetime`, `ccfpem_written_lifetime` and `oral_full_lifetime` are abandoned unsubmitted. If any `_11mo` products were created, leave them unsubmitted too. Apple never lets a product ID be reused, so the new IDs are different on purpose.

   Add a paywall screenshot and this review note to each: "Ten SAMPs and two oral cases are free. Three yearly auto-renewable subscriptions in one group open the rest. Complete opens both components. Written or Oral opens one. The paywall shows the price per year, says the subscription renews automatically, and links to the Terms of Use and Privacy Policy. Restore is in Settings and on the paywall."

   Auto-renewable subscriptions need a Terms of Use (EULA) link in the App Store description or the EULA field, and the Privacy Policy URL in App Information. `store/listing.md` covers both.
2. Agreements, Tax and Banking and the Paid Apps agreement must be active.
3. Stay in the App Store Small Business Program (15 percent).
4. App Privacy: see `store/listing.md`.
5. Export compliance: `Info.plist` sets `ITSAppUsesNonExemptEncryption` to false. The app uses only the encryption built into iOS (HTTPS to the stores), so uploads skip the export compliance question.

## 4. Google Play Console

The app is a Draft with zero testers. Subscriptions can only be created after a bundle with billing is uploaded. Production access needs a closed test with at least 12 opted-in testers for 14 days first. Play is therefore at least two weeks out. The ordered steps are at the top of `docs/SUBMISSION-CHECKLIST.md`.

1. Rename the app to Preceptor: CCFP-EM.
2. Monetize > Products > Subscriptions. Create three subscriptions with the same product IDs: `ccfpem_complete_1y`, `ccfpem_written_1y` and `ccfpem_oral_1y`. Give each one auto-renewing base plan with a billing period of 1 year (for example base plan ID `yearly`) at the prices above. Activate the base plans. Play has no subscription group, so the app itself replaces Written or Oral when a subscriber upgrades to Complete. It passes the old product to Play Billing with immediate time proration, so nobody pays for both. If any `_lifetime` or `_11mo` products were created in Play, leave them inactive. Play IDs cannot be reused either.
   Then in RevenueCat:
   - Import the three Play subscriptions.
   - Attach each to the same entitlements as its App Store twin.
   - Add each to its package in `ccfpem` beside the App Store product.
   - Detach the three lifetime placeholders from every entitlement and package, then delete them. They are "not found" because they never existed in Play.
   Turn on Real-time developer notifications (Play Console > Monetization setup) with the Pub/Sub topic RevenueCat gives. Renewals and cancellations then reach RevenueCat without waiting for the app to open.
3. Data safety, content rating and target audience: see `store/listing.md`.

## 5. RevenueCat

Status on 25 September 2026:
- App Store side done. The app config "Preceptor: CCFP-EM (App Store)" for `com.preceptor.oral` exists in the Preceptor project, and the three annual products are imported from App Store Connect.
- `written_access` holds `ccfpem_written_1y` and `ccfpem_complete_1y`. `oral_full_access` holds `ccfpem_oral_1y` and `ccfpem_complete_1y`.
- Offering `ccfpem` (display name "CCFP-EM Subscriptions") has packages `complete`, `written` and `oral`, each with its App Store product. These match `src/lib/purchases.ts` exactly.
- Still open:
  - The Play subscriptions do not exist yet (section 4).
  - The three lifetime placeholders in RevenueCat still need to be detached and deleted.


All Preceptor apps share one RevenueCat project. Its Current offering belongs to another app, so this app fetches its offering by id (`offerings.all["ccfpem"]`) and never reads `offerings.current`. Do not make `ccfpem` the Current offering.

1. Products: import the three `_1y` subscriptions from both stores. On Play, RevenueCat lists each as `productId:basePlanId`, such as `ccfpem_oral_1y:yearly`. The app accepts either form. Delete any `_lifetime` products from RevenueCat if they were imported.
2. Entitlements. Attach the products like this:

   | Entitlement | Products attached (App Store and Play) |
   |---|---|
   | `written_access` | `ccfpem_complete_1y`, `ccfpem_written_1y` |
   | `oral_full_access` | `ccfpem_complete_1y`, `ccfpem_oral_1y` |

   Complete is attached to both entitlements. Nothing else from the shared project may be attached to these two, or another app's subscribers would open this one. For auto-renewable subscriptions RevenueCat gives each active entitlement a real expiration date, the end of the current paid year, and moves it forward on each renewal. The app caches those dates on the device, so access works offline and still ends on time if a subscription lapses.
3. Offering `ccfpem` with three packages, custom identifiers `complete`, `written` and `oral`, each holding its `_1y` product from both stores. The app finds a package by its identifier, then by product ID.
4. Public SDK keys in `src/lib/purchases.ts`:
   - Android: done (`goog_...`).
   - iOS: done (`appl_...`).
5. Test with a sandbox Apple ID and a Play licence tester. Sandbox years pass in about an hour on iOS and in minutes on Play test tracks. Subscribe to Written and confirm Settings shows "renews or ends" on the entitlement date. Upgrade to Complete and confirm both open, only one subscription is active, and the Written subscription ended (App Store: replaced in the group. Play: replaced by the app). Let a sandbox renewal happen and confirm the date moves forward. Cancel, let the period end, and confirm access closes on the next launch. Delete, reinstall, Restore.

A candidate with no subscription sees all three offered. A candidate who holds Written or Oral sees only the upgrade to Complete.

## 6. Codemagic

1. The Codemagic app "Preceptor: CCFP-EM" uses the root `codemagic.yaml` (section 1). It needs the `preceptor_play` group and the `preceptor_appstore` integration. Signing no longer uses pasted secrets, and the `preceptor_signing` group is not used.
   - **iOS:** `ios_signing` (app_store, com.preceptor.oral) uses the account-level distribution certificate `preceptor_distribution`. Codemagic needs the App Store provisioning profile for com.preceptor.oral in Code signing identities > iOS provisioning profiles. Done on 26 September 2026: an App Store profile for com.preceptor.oral, signed with the preceptor_distribution certificate, was created in the Apple portal and fetched into team code signing as `preceptor_ccfpem_appstore`. `ios_signing` finds it by bundle ID and distribution type.
   - **Android:** `android_signing: preceptor_upload_key`. Codemagic keeps the other Preceptor apps' keystore as pasted text inside each app's own `preceptor_signing` group. It cannot be read or exported into another app, which is why CCFP-EM sees those values as empty. What can be reused is the keystore file itself. One-time step, in the Codemagic website only:
     1. **Preferred: reuse the existing Preceptor keystore.** Find `preceptor-release.jks`, the file the other apps were set up with, and its password (alias `preceptor`). Go to Codemagic > Team settings > codemagic.yaml settings > Code signing identities > Android keystores and upload it. Give the keystore password, key alias `preceptor`, the key password and reference name `preceptor_upload_key`. Play lets one upload key serve several apps, and this app has never been uploaded, so any key works for its first upload.
     2. **Only if that file or its password cannot be found: make a new key.**
        - **Windows:** open PowerShell and run `& "C:\Program Files\Android\Android Studio\jbr\bin\keytool.exe" -genkeypair -v -keystore "$HOME\Desktop\preceptor-upload.jks" -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload`. Or use Android Studio's own screen: Build > Generate Signed App Bundle or APK > Create new.
        - **Mac:** in Terminal, run `"/Applications/Android Studio.app/Contents/jbr/Contents/Home/bin/keytool" -genkeypair -v -keystore preceptor-upload.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload`.
        - Then upload it the same way, with key alias `upload` and reference name `preceptor_upload_key`.
     3. Keep the .jks and its password in a password manager. Never commit them. With Play App Signing, a lost upload key can be reset through Play Console support, but that takes days.
2. Workflows: `android-debug`, `android-release`, `android-play-internal` (manual, internal track only), `ios-release` (TestFlight only).
3. Every workflow runs `npm test`. Release workflows also run the launch gate.

## 7. Price proposal

Confirmed by Arjan on 24 September 2026: Complete CA$199.99, Written CA$149.99, Oral CA$99.99.

The bank is now far larger: 1,500 SAMPs and 100 oral cases. Running cost is still zero. The store fee is 15 percent.

| Product | Price | Nets about |
|---|---|---|
| Complete (written and oral) | CA$199.99 | CA$170 |
| Written only | CA$149.99 | CA$127 |
| Oral only | CA$99.99 | CA$85 |

Reasoning:

- Candidates can pass one component and repeat the other. Selling each component on its own serves repeat candidates. It is also the honest price for someone who only wants the written bank.
- The written bank is the bigger body of work and the part most candidates use daily, so it is priced higher than the oral.
- Complete is 20 percent less than buying both, so it is the clear choice for a first attempt. It anchors the paywall.
- A yearly subscription fits an exam cycle and renews for candidates who sit again. It renews automatically until cancelled in the store account (Arjan, 24 September 2026). The paywall says so next to the price.
- CA$199.99 sits below the Preceptor CCFP annual price of $250 while offering two exam components, and stays under the price point where app store buyers balk.
- The store and RevenueCat track the subscription and its renewals, so no server of our own is needed. The app caches the entitlement end dates, which keep working offline and still end access on time.

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
- [ ] App Store Connect: delete the three unsubmitted lifetime drafts (`ccfpem_complete_lifetime`, `ccfpem_written_lifetime`, `oral_full_lifetime`). They are leftovers. The app never references them. Their IDs cannot be reused either way.
- [ ] Not this app: the separate CCFP written and study App Store config in the same RevenueCat project shows a credentials warning on its in-app purchase key that re-validating did not clear. Arjan to check that key in App Store Connect.
- [ ] Terms of use cover yearly subscriptions that renew automatically, how to cancel in the App Store or Google Play account, that cancelling stops the next renewal and access runs to the end of the paid year, and the refund route. Refunds go through Apple or Google. The terms page at thepreceptor.ca is outside this repo and must be updated by hand.
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
