# Submission checklist: Preceptor CCFP-EM

For Arjan. These are the exact steps to ship the app on the App Store and Google Play, in order. You do not need to know this repository. Each step names the website, the screen, and what to click or paste. Items marked **UNKNOWN** are things this repository cannot tell. Check them before you rely on the step.

Nothing here happens automatically. No step in this repository builds, uploads or submits anything unless you press the button yourself.

Store menus get renamed from time to time. If a screen name below does not match exactly, look for the nearest match.

## Critical path: Google Play is at least 14 days away

Read this first. The Play launch is gated by Google's timeline, not by the build.

State on 25 September 2026: Preceptor: CCFP-EM is a Draft in Play Console with zero testers. No bundle has been uploaded.

1. **Upload a bundle with billing.**
   - Play will not let you create subscriptions until a bundle that uses Play Billing has been uploaded.
   - This app's bundle includes Play Billing through RevenueCat.
   - Steps D3 and F0 below.
2. **Create the three annual subscriptions.**
   - Step B1, only after step 1.
   - Then do B2 and B3 in RevenueCat.
3. **Run a closed test with at least 12 opted-in testers for 14 days in a row.**
   - Google requires this before you can even apply for production access.
   - The 14 days start when 12 testers have opted in, not when you invite them.
   - Recruit the testers now, before the build exists. See F0.
4. **Apply for production access.**
   - Screen: Play Console > Dashboard.
   - Answer Google's questions about the closed test.
   - Google then reviews the application, which can take up to about a week.
5. **Release to production.** Step F4.

So the earliest Play launch is 14 days after the 12th tester opts in, plus Google's review of the application, plus review of the release.

The App Store has no such wait. It needs only the `appl_` key pasted in (A4), a build (D2) and App Review. So iOS will very likely ship first. Nothing in the app needs both stores live at once.

## Facts you will need

| Item | Value |
|---|---|
| App name | Preceptor: CCFP-EM |
| Bundle ID (iOS) and package name (Android) | `com.preceptor.oral` |
| Version | 1.0. Codemagic sets the build number |
| Subscription product IDs, same on both stores | `ccfpem_complete_1y`, `ccfpem_written_1y`, `ccfpem_oral_1y` |
| Prices per year | Complete CA$199.99. Written CA$149.99. Oral CA$99.99 |
| RevenueCat entitlements | `written_access` (Complete, Written). `oral_full_access` (Complete, Oral) |
| RevenueCat offering | `ccfpem`, with packages `complete`, `written`, `oral` |
| Support email | preceptor.app@gmail.com |
| Privacy policy | https://thepreceptor.ca/privacy |
| Terms of use | https://thepreceptor.ca/terms |
| Marketing site | https://thepreceptor.ca |
| All listing text | `store/listing.md` in this repository |
| Screenshots | `store/screenshots/<size>/01` to `08` |
| Play icon and feature graphic | `store/graphics/` |

## Phase A. Decisions and text before any build

**A1. Content sign-off.**
- Open `docs/PHYSICIAN_REVIEW.md` and `docs/SAMP-TRIAGE.md`.
- Decide the items in Part 1, and sign off or hold the new SAMPs.
- The app can ship with new SAMPs still at `reviewed: false`. They show a Draft tag in the app.
- **UNKNOWN:** whether you want Draft content visible at launch. If not, the unsigned SAMPs must be hidden first. That is a code change, so ask for it.

**A2. Terms page.**
- On thepreceptor.ca, update https://thepreceptor.ca/terms to cover:
  - yearly subscriptions that renew automatically
  - how to cancel in the App Store or Google Play account
  - that access runs to the end of the paid year after cancelling
  - that refunds go through Apple or Google
- Apple rejects subscription apps whose terms do not say this.

**A3. Privacy page.**
- Update https://thepreceptor.ca/privacy to cover this app:
  - no account
  - the app collects no data
  - progress stays on the device
  - purchases are handled by Apple or Google through RevenueCat
  - support is at preceptor.app@gmail.com

**A4. iOS RevenueCat key.**
- Done on 26 September 2026. `src/lib/purchases.ts` holds the iOS `appl_` key and the Android `goog_` key, and the launch gate passes.

## Phase B. Google Play products and RevenueCat

**B1. Create the three subscriptions.**
- **Blocked until a bundle is uploaded (D3 and F0).** Play disables subscription setup until then. This is why the annual products could not be made yet.
- Screen: Play Console > Preceptor app > Monetize with Play > Products > Subscriptions > Create subscription.
- Make one per row:

| Product ID | Name | Base plan ID | Type | Billing period | Price (CAD) | Free trial |
|---|---|---|---|---|---|---|
| `ccfpem_complete_1y` | CCFP-EM Complete, yearly | `yearly` | Auto-renewing | 1 year | 199.99 | None |
| `ccfpem_written_1y` | CCFP-EM Written, yearly | `yearly` | Auto-renewing | 1 year | 149.99 | None |
| `ccfpem_oral_1y` | CCFP-EM Oral, yearly | `yearly` | Auto-renewing | 1 year | 99.99 | None |

- For each one:
  - Add the base plan.
  - Set Canada to the price above.
  - Activate the base plan.
- **UNKNOWN:** which countries to sell in. Play will convert the CAD price for other countries unless you turn them off. The App Store availability should match.

**B2. Real-time developer notifications.**
- In RevenueCat: Preceptor project > the Play app config > Google developer notifications. Copy the Pub/Sub topic.
- In Play Console: Monetize with Play > Monetization setup. Paste the topic into "Real-time developer notifications". Send a test notification.

**B3. RevenueCat Play products.**
- Screen: RevenueCat > Preceptor project > Product catalog > Products.
- Import the three Play subscriptions. They appear as `ccfpem_complete_1y:yearly` and similar.
- Then:
  - Entitlements > `written_access`: attach the Play `ccfpem_written_1y` and `ccfpem_complete_1y`.
  - Entitlements > `oral_full_access`: attach the Play `ccfpem_oral_1y` and `ccfpem_complete_1y`.
  - Offerings > `ccfpem`: in each package (`complete`, `written`, `oral`), add the matching Play product beside the App Store one.
  - Detach the three lifetime placeholder products from every entitlement and package, then delete them.
- Do not make `ccfpem` the Current offering. Another Preceptor app uses the Current offering, and this app reads `ccfpem` by name.

**B4. App Store side of RevenueCat.**
- Done on 25 September 2026. Nothing to do.

## Phase C. App Store Connect setup (before the build)

All of these are in App Store Connect > Apps > the app with bundle `com.preceptor.oral`.

**C1. Agreements.**
- Screen: Business (or Agreements, Tax, and Banking).
- The Paid Apps agreement must show Active.

**C2. Clear out old products.**
- Screen: the app > Monetization > In-App Purchases.
- Delete the three unsubmitted drafts: `ccfpem_complete_lifetime`, `ccfpem_written_lifetime` and `oral_full_lifetime`.

**C3. Subscriptions.**
- Screen: the app > Monetization > Subscriptions.
- The group and the three 1-year subscriptions already exist.
- In the group, check the levels: Complete alone on level 1, and Written and Oral on level 2.
- For each subscription:
  - It needs a display name and a description. Localization English (Canada) is enough.
  - Add a review screenshot. Use `store/screenshots/iphone-6.9/` or a screenshot of the paywall from TestFlight.
  - Add this review note: "Ten SAMPs and two oral cases are free. Three yearly auto-renewable subscriptions in one group open the rest. Complete opens both components. Written or Oral opens one. The paywall shows the price per year, says the subscription renews automatically, and links to the Terms of Use and Privacy Policy. Restore is in Settings and on the paywall."
- Each should show "Ready to Submit".

**C4. App Information.**
- Screen: the app > App Information.
- Paste:
  - Name: `Preceptor: CCFP-EM`
  - Subtitle: `EM exam SAMPs and oral cases`
  - Primary category: Medical
  - Secondary category: Education
  - Privacy Policy URL: https://thepreceptor.ca/privacy
- License Agreement: either paste https://thepreceptor.ca/terms as a custom EULA, or keep the standard EULA and make sure the description ends with the Terms of use line from `store/listing.md`.

**C5. Pricing and Availability.**
- Screen: the app > Pricing and Availability.
- Price: Free. The app itself is free, and the subscriptions carry the price.
- Availability: see the UNKNOWN in B1.

**C6. App Privacy.**
- Screen: the app > App Privacy.
- Answer as in `store/listing.md` under "Apple App Privacy":
  - Purchases > Purchase History, and Identifiers > User ID.
  - Both are App Functionality, not linked to identity, and not used for tracking.
- Check RevenueCat's current App Privacy guidance before you publish the answers.

**C7. Age rating.**
- Screen: the app > App Information > Age Rating > Edit.
- Answers: Medical or Treatment Information: Frequent/Intense. Everything else: None. Expected result: 17+.

## Phase D. Builds (you press these, nothing else starts them)

**D1. Check the launch gate.**
- The release workflows run the launch gate. They fail if the iOS key from A4 is missing.
- No other preparation is needed.

**D2. iOS build.**
- Screen: codemagic.io > app "Preceptor: CCFP-EM" > Start new build.
- Branch: `claude/oral-exam-sim`, or `main` once it is merged.
- Workflow: `ios-release`.
- It builds, signs and uploads to TestFlight. It does not submit for review.
- **UNKNOWN:** build 7 was reported as "in review" on 24 September 2026. If an older build of version 1.0 is still in App Review, it predates the yearly subscriptions and the 1,500 SAMPs. On the version page, choose "Remove from Review" before you attach the new build. Only you can see its state.

**D3. Android build.**
- Screen: the same Codemagic app > Start new build.
- Workflow: `android-play-internal`.
- It builds a signed bundle and uploads it to the Play internal testing track only.
- **UNKNOWN:** Play usually refuses uploads through its API while an app is still a Draft that has never had a release. The error says only draft releases are allowed. If the upload step fails that way, take the `.aab` from the Codemagic build's artifacts. Then upload it by hand in step F0.

**D4. Test on devices.**
- Install from TestFlight and from the Play internal testing link.
- Subscribe to Written with a sandbox or licence-tester account, then upgrade to Complete.
- Check:
  - both components open
  - Settings shows a "renews or ends" date
  - Restore works after a reinstall
- If anything fails here, stop and report it.

## Phase E. Submit on the App Store

**E1. Version page.**
- Screen: the app > iOS App > 1.0 Prepare for Submission.
- Paste from `store/listing.md`:
  - Promotional Text: section "Promotional text (170)".
  - Description: section "Description (4000)". It ends with the subscription terms and the Terms and Privacy links.
  - Keywords: `ccfp,emergency,samp,oral exam,em,resident,exam prep,mock exam,priority topics,key features,case`
  - Support URL: https://thepreceptor.ca
  - Marketing URL: https://thepreceptor.ca
  - What's New: section "What's New (4000)".
  - Copyright: **UNKNOWN**. For example "2026 Arjan Dhoot" or your company name.

**E2. Screenshots.**
- Upload, in order 01 to 08:
  - `store/screenshots/iphone-6.9/` to the 6.9 inch slot
  - `store/screenshots/iphone-6.5/` to the 6.5 inch slot, if shown
  - `store/screenshots/ipad-13/` to the 13 inch iPad slot

**E3. Build.**
- Screen: the Build section of the version page.
- Pick the TestFlight build from D2.

**E4. Subscriptions with the version.**
- Screen: the "In-App Purchases and Subscriptions" section of the version page.
- Select all three subscriptions.
- A first subscription must go to review together with an app version, or Apple will not review it.

**E5. App Review Information.**
- Sign-in required: No.
- Contact: your name, phone and email.
- Notes: paste the review note from C3.

**E6. Submit.**
- Press "Add for Review", then "Submit for Review".

## Phase F. Submit on Google Play

**F0. Closed test (start this as early as you can).**
- Recruit at least 12 testers now. Each needs a Google account and must agree to stay opted in for 14 days. Colleagues and residents are fine. Recruit a few extra in case some drop out.
- Screen: Play Console > the app > Test and release > Testing > Closed testing > Create track, or use the default "Closed testing - Alpha" track.
- Testers: add an email list with the testers' Google account addresses, or a Google Group.
- Release: create a release on the closed track. Choose "Add from library" to reuse the bundle from D3. If D3 could not upload, upload the `.aab` here by hand.
- Countries: at least Canada.
- Send for review. When the closed test is live, copy the opt-in link and send it to every tester. A tester counts only after opening the link and choosing to join.
- Keep at least 12 opted in for 14 days in a row. Testers may also give feedback. Google asks about the test when you apply for production.
- After 14 days: Dashboard > "Apply for production". Answer the questions. Wait for Google's decision.

**F1. Main store listing.**
- Screen: Play Console > the app > Grow users > Store presence > Main store listing.
- Paste:
  - App name: `Preceptor: CCFP-EM`
  - Short description: `SAMPs and 12 minute oral stations for the CCFP-EM exam. Fully offline.`
  - Full description: the App Store description from `store/listing.md`.
- Upload:
  - App icon: `store/graphics/play-icon-512.png`
  - Feature graphic: `store/graphics/play-feature-1024x500.png`
  - Phone screenshots: `store/screenshots/play-phone/`
  - 7 inch tablet screenshots: `store/screenshots/play-tablet-7/`
  - 10 inch tablet screenshots: `store/screenshots/play-tablet-10/`

**F2. App content.**
- Screen: Policy and programs > App content. Complete every card:
  - Privacy policy: https://thepreceptor.ca/privacy
  - App access: "All functionality is available without special access". No login. Paid content is behind subscriptions, and the free sample is open.
  - Ads: No ads.
  - Content rating: questionnaire answers in `store/listing.md` under "Google Play (IARC)".
  - Target audience: 18 and over only.
  - Data safety: answers in `store/listing.md` under "Google Play Data safety".
  - Health apps: **UNKNOWN**. Play may ask whether this is a health app. It is medical education for physicians, not a health or medical device app. Answer according to the current form.
  - Government app: No. Financial features: None.

**F3. Store settings.**
- Screen: Grow users > Store presence > Store settings.
- Category: Medical.
- Email: preceptor.app@gmail.com.
- Website: https://thepreceptor.ca

**F4. Release to production.**
- Screen: Test and release > Production > Create new release.
- Add the bundle from the internal track. Choose "Add from library".
- Release notes: section "Release notes (500)" in `store/listing.md`.
- Countries: see the UNKNOWN in B1.
- Then choose Review release, then Start rollout to Production.
- Production stays locked until Google grants production access after the closed test in F0. See the critical path at the top.

## Phase G. After approval

1. Release the iOS version, manually or automatically, as you chose on the version page.
2. On thepreceptor.ca, add a Preceptor: CCFP-EM section with both store badges.
3. In RevenueCat, watch Customers for the first real purchase on each store. Check that the entitlement and its expiry date appear.

## Still unknown, all in one place

- Whether Draft (unsigned) SAMPs may be visible at launch (A1).
- Countries to sell in (B1, C5, F4).
- The state of build 7 in App Review (D2).
- The copyright line (E1).
- The Play health apps declaration (F2).
- Whether the Codemagic upload works while the Play app is a Draft, or the first bundle must go up by hand (D3).
- Who the 12 closed testers are (F0).
