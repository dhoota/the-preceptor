# Preceptor: Oral. Launch guide

These are the owner steps for Arjan. They take the app from this branch to TestFlight and the Play internal track. Nothing in this repo deploys or submits anything by itself.

The app is fully offline. It calls no AI and no server of ours. The only network traffic comes from the native RevenueCat SDK talking to Apple and Google about the purchase.

## 0. Before anything else

1. Review all five cases. Each case file is in `src/cases/`. Each one ships with `reviewed: false`.
2. Read every stem, question, model answer and rubric line. Check every dose and threshold. The reviewer notes are at the end of this file.
3. When a case is signed off, change `reviewed: false` to `reviewed: true` in that file. Bump `version` if you edit it.
4. The "Draft" tag disappears from a case once it is reviewed. Do not ship a store build with draft cases unless you mean to.
5. Run `npm test`. It checks every case graph, the house style and the offline rule.

## 1. Give the app its own repo

Codemagic only reads `codemagic.yaml` from a repo root. The other Preceptor apps each have their own repo. Do the same here.

1. Create a private repo, for example `dhoota/preceptor-oral`.
2. Copy the contents of `oral-exam-sim/` into its root.
3. Push to `main`.

## 2. Confirm the app identity

The branch uses these values. Change them now if you want something else. They are hard to change after the first upload.

| Setting | Value | Where |
|---|---|---|
| Bundle ID and package | `com.preceptor.oral` | `capacitor.config.json`, `android/app/build.gradle`, Xcode project |
| Display name | Preceptor: Oral | `capacitor.config.json` |
| Entitlement | `oral_full_access` | `src/lib/purchases.ts` |
| Offering | `oral_unlock` | `src/lib/purchases.ts` |
| Support | preceptor.app@gmail.com | `src/lib/constants.ts` |
| Privacy | https://thepreceptor.ca/privacy | `src/lib/constants.ts` |
| Terms | https://thepreceptor.ca/terms | `src/lib/constants.ts` |

If you rename the bundle ID after `cap add`, update `android/app/build.gradle` (namespace and applicationId), the Java package folder under `android/app/src/main/java`, and the bundle identifier in Xcode.

## 3. App Store Connect

1. Go to Certificates, Identifiers and Profiles. Register the App ID `com.preceptor.oral`. In-App Purchase is on by default.
2. In App Store Connect, create a new app. Platform iOS. Name "Preceptor: Oral". Bundle ID `com.preceptor.oral`. SKU `preceptor-oral`.
3. Open Monetization > In-App Purchases. Create one Non-Consumable.
   - Reference name: Oral full case bank
   - Product ID: `oral_full_lifetime`
   - Price: see section 7
   - Display name: Full case bank
   - Description: Unlock every oral case, now and later.
   - Add the review screenshot of the paywall. Add review notes: "Two cases are free. The purchase unlocks the rest. Restore is in Settings."
4. Agreements, Tax and Banking must be active. The Paid Apps agreement is needed for IAP.
5. Enrol in the App Store Small Business Program if you have not already. Apple then takes 15 percent, not 30.
6. App Privacy: follow RevenueCat's App Store privacy guide. The app itself collects nothing. RevenueCat processes purchase history and an anonymous app user ID for app functionality. Nothing is used for tracking.

## 4. Google Play Console

1. Create a new app. Name "Preceptor: Oral". Default language English (Canada). App. Paid or free: Free (the unlock is an in-app product).
2. Upload a first signed AAB to the internal track. Play will not let you create products until a build with the BILLING permission exists. The RevenueCat plugin adds that permission.
3. Monetize > Products > In-app products. Create:
   - Product ID: `oral_full_lifetime`
   - Name: Full case bank
   - Description: Unlock every oral case, now and later.
   - Price: see section 7. Let Play convert other currencies.
   - Activate it.
4. Enrol in the 15 percent service fee tier if you have not already.
5. Data safety: the app collects no data itself. Declare purchase history processed by RevenueCat for app functionality, per RevenueCat's Play data safety guide. No data is shared for ads.
6. Content rating: fill in the questionnaire. It is a reference and education app with medical content.
7. Target audience: 18 and over.

## 5. RevenueCat

You already use RevenueCat for the Preceptor apps. You can add this app to the same project or make a new project. A separate project keeps the dashboards clean. Either works.

1. Add two apps: App Store (`com.preceptor.oral`) and Play Store (`com.preceptor.oral`). Connect the App Store Connect API key and the Play service account the same way you did for Preceptor CCFP.
2. Products: import `oral_full_lifetime` from both stores.
3. Entitlements: create `oral_full_access`. Attach both `oral_full_lifetime` products.
4. Offerings: create `oral_unlock`. Add one package of type Lifetime that holds both products. Mark it Current.
5. Copy the two public SDK keys (they start with `appl_` and `goog_`). Paste them into `src/lib/purchases.ts` in place of the `REPLACE` placeholders. These keys are public. They are safe in the app bundle, as in Preceptor CCFP.
6. Test with a sandbox Apple ID and a Play licence tester. Buy, delete the app, reinstall, then tap Restore in Settings.

Until the keys are pasted in, the native app shows "Purchases are not set up in this build yet." and nothing can be bought.

## 6. Codemagic

The workflows mirror Preceptor CCFP and reuse its groups. Nothing new is secret.

1. Add the new repo as an application in Codemagic.
2. Environment groups already exist: `preceptor_signing` (keystore vars and `IOS_CERT_KEY`) and `preceptor_play` (Play service account). Link them to this app. Reuse the same `IOS_CERT_KEY` so no new distribution certificate is created. See `CODEMAGIC-NOTES.md` in preceptor-app.
3. The App Store Connect integration `preceptor_appstore` is reused.
4. Workflows in `codemagic.yaml`:
   - `android-debug`: sideloadable APK. Start here.
   - `android-release`: signed APK and AAB.
   - `android-play-internal`: manual. Uploads to the Play internal track only.
   - `ios-release`: signed IPA to TestFlight only.
5. Every workflow runs `npm test` before building. A broken case or a network call in the source fails the build.
6. The Play upload key: you can reuse the Preceptor keystore as the upload key. Play App Signing holds the real app signing key.

## 7. Price proposal

The web ladder of $499, $799 and $1,199 CAD was built for a SaaS that paid for AI on every turn. That cost is gone. The app now costs nothing to run per user.

Recommendation: one non-consumable unlock.

| When | Price | Why |
|---|---|---|
| Launch, 5 to 15 cases | CA$129.99 (about US$94.99) | Fair for a small but high quality bank. Well under one prep course. Below the CCFP app's annual price of $250. |
| 25 or more cases | CA$179.99 to CA$199.99 | The bank is then a full study resource. Earlier buyers keep everything. |

Reasoning:

- One purchase fits the product. The oral exam is a single event. Candidates study for a few months and stop. A subscription would feel wrong and would churn at exam day anyway.
- Non-consumable purchases restore cleanly on both stores. Time-limited tiers would need non-renewing subscriptions. Those need our own expiry tracking and restore logic. That is complexity with no benefit here.
- Store buyers compare against other apps, not against courses. A price over about CA$200 in an app store sees sharp drop-off, even for professionals.
- With a 15 percent store fee and no running cost, CA$129.99 nets about CA$110 per buyer.
- The two free cases carry the conversion. Keep them strong. The chest pain and febrile infant cases are the free pair.
- Keep the price the same on iOS and Android.

If you want tiers later, add case packs as separate non-consumables (for example Pediatrics, Toxicology, Ethics). Keep the full bank as the main offer. The code supports one entitlement today. Packs would need one entitlement per pack.

## 8. Store listing

Copy is in `store/listing.md`. Screenshots are in `store/screenshots/`. Retake them on a real device once the cases are reviewed. Apple needs 6.9 inch and 13 inch iPad sizes. Play needs phone and 7 inch tablet shots.

## 9. Website

1. Add a Preceptor: Oral section to thepreceptor.ca with the store badges.
2. Update https://thepreceptor.ca/privacy to cover this app. Key points: no account, no data collected by the app, progress stays on the device, purchases handled by Apple or Google through RevenueCat, support at preceptor.app@gmail.com.
3. Make sure https://thepreceptor.ca/terms covers this app too.

## 10. Legal and disclaimer checklist

- [ ] Every case reviewed and `reviewed: true` set by a physician.
- [ ] No CFPC logos or trademarks in the app, icon, screenshots or listing. Use "CCFP-EM style". Say it is independent and not affiliated.
- [ ] In-app disclaimer shown on first launch. It is in `src/screens/Disclaimer.tsx`.
- [ ] Educational use only. Not medical advice. Not for patient care.
- [ ] No real patient information in any case. All cases are invented.
- [ ] No copied textbook or question bank text. All cases were written for this app.
- [ ] Practice score is self-marked. The app says it does not predict exam results.
- [ ] Privacy policy on thepreceptor.ca covers this app. Store privacy labels match it.
- [ ] Terms of use cover a one-time purchase, no subscription and the refund route. Refunds go through Apple or Google.
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
