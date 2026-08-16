# Submission checklist

The blockers App Store Connect does not mention until you press **Add for
Review**, in the order they will bite. Each of these cost a round trip on the
previous app.

---

## Before the first build

- [ ] **Register the bundle ID.** `com.dhoota.dutchgolden` at
      <https://developer.apple.com/account/resources/identifiers>. If it is not
      in the dropdown when you create the app record, this is why.
- [ ] **Create the App Store Connect record.** Without it the upload fails with
      `Cannot determine the Apple ID from Bundle ID`, which does not say what is
      actually wrong.
- [ ] **Decide iPad now.** `TARGETED_DEVICE_FAMILY` is `"1,2"`, so iPad
      screenshots at exactly 2064 × 2752 are mandatory. No iPad? Set it to `"1"`
      in **both** build configurations in
      `ios/App/App.xcodeproj/project.pbxproj` and add iPad in 1.1.
      `layout-probe.js` confirms the layout already works on all six iPad
      viewports, so this is purely a question of whether you can photograph one.
- [ ] **Game Center.** `ios/App/App/App.entitlements` declares
      `com.apple.developer.game-center` and `CODE_SIGN_ENTITLEMENTS` is set in
      both configurations. The game has no GameKit features, so the cleaner
      choice is to **turn Game Center off on the version page**. If you leave it
      on, the entitlement above is what stops the "you must add the
      com.apple.developer.game-center key in Xcode" error.

## Codemagic

- [ ] Connect the repo. It auto-detects `codemagic.yaml`.
- [ ] `preceptor_mccqe_ios` must exist as a variable group with `IOS_CERT_KEY`.
      It is shared with the other apps on purpose — that key is an Apple
      *account*-level distribution certificate and Apple caps how many exist.
- [ ] `dutch_signing` is **commented out** in `codemagic.yaml`. Codemagic kills a
      build at pre-flight with `unknown variable group` if the yaml names a group
      that does not exist. Create the group, then uncomment. Check the Android
      workflow too — the identical landmine sat in Android after iOS was fixed
      last time.
- [ ] First build: run `android-debug`. It needs no signing at all and proves
      the asset bundler and validator work on a real runner.

## Already handled in the repo

These are done; listed so you do not go looking for them.

- [x] `ITSAppUsesNonExemptEncryption = false` in `Info.plist` — answers export
      compliance at upload time instead of per-build in the UI.
- [x] `PrivacyInfo.xcprivacy` in the target, declaring `CA92.1` for UserDefaults.
- [x] Shared scheme committed at
      `ios/App/App.xcodeproj/xcshareddata/xcschemes/App.xcscheme`. Xcode does not
      create it by default and CI cannot find the scheme without it.
- [x] No `cocoapods:` line and no `.xcworkspace` — Capacitor 8 uses Swift
      Package Manager. CI builds with `--project ios/App/App.xcodeproj`.
- [x] `node: 22` in every workflow. The Capacitor 8 CLI declares
      `engines >=22.0.0` and dies on Node 20 with an error that never mentions
      Node.
- [x] Assets bundled at CI time so the binary plays in airplane mode.

## The version page, in the order it blocks you

1. [ ] **App Privacy is a separate left-sidebar section**, not part of the
       version page, and submission is blocked until an Admin publishes it.
       For 1.0: **Data Not Collected**, no tracking.
2. [ ] **Privacy Policy URL lives on App Information**, not the version page.
       The version page's Support URL is a different field and setting one does
       not set the other. Host `PRIVACY-POLICY.md` somewhere reachable.
3. [ ] Screenshots at exact pixel sizes. `scripts/fit-screenshots.py` does the
       scale-and-crop. See `LAUNCH_KIT.md` §4 for the five shots.
4. [ ] Age rating: **4+**. No violence, gambling, UGC, or web views.
5. [ ] In-app purchases: **No** for 1.0. See `IAP-SETUP.md`.
6. [ ] **Re-select the build after every upload.** The build selection is
       sticky — it keeps whatever was chosen before. Shipping a stale binary
       whose content contradicts the listing is the easiest own-goal available
       and it nearly happened last time.

## Google Play — start on day one

A new personal Play developer account must run a **closed test with 12 testers
for 14 continuous days** before production. That is the longest pole in the
project and it is pure calendar time.

- [ ] Recruit twelve distinct Google accounts **while the iOS build is in
      review**.
- [ ] Bump `versionCode` in `android/app/build.gradle` by +1 before every
      upload, or Play rejects the `.aab` as a duplicate.
- [ ] Data safety form: no data collected, no data shared.

## Before every push

```bash
export CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
npm run verify
```

All five must be green. Current state: they are.
