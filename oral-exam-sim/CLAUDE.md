# Preceptor: CCFP-EM: standing rules

These hold for every change to this app. Tests in `tests/launch.test.ts` and
`tests/platform.test.ts` enforce most of them.

## App entry
- Never gate app entry behind a user interaction. No TAP TO BEGIN, no "I understand", no screen the user must click to get in.
- Launch shows only the branded splash (`src/components/Splash.tsx`). Its timer starts on mount and always routes into the app after about 1.2 s. A tap anywhere ends it sooner. It has no button.
- The splash and the first screen never await RevenueCat, the network, storage or any promise that can hang or throw. Launch reads go through `settle()` with a timeout and a fallback.
- If bootstrap fails, the user still lands in the app. The paywall decides access, never the launch path.
- The disclaimer lives on the splash (one line) and in full under More. It is never a click-through.

## RevenueCat
- Configure exactly once, at bootstrap (`startPurchases()` in `src/main.tsx`), with an `appUserID` persisted in `@capacitor/preferences` (`rc_app_user_id_v1`).
- No `logOut` (or `logIn`) anywhere.
- Gate access only on `customerInfo.entitlements.active`: `written_access` (Complete, Written) and `oral_full_access` (Complete, Oral). An entitlement missing from `active` never opens anything, whatever its date says.
- Handle promotional entitlements defensively: `productIdentifier` may be null, `expirationDate` may be null and `activeSubscriptions` may be empty or missing. Never require any of them to open access.
- Fetch the `ccfpem` offering by id. Never use `offerings.current`. Prices come only from the store.

## Layout and controls
- Full-height containers use `100dvh` (with a `100vh` fallback first) and pad for `env(safe-area-inset-bottom)`.
- Every primary action is a real `<button>` with `onClick`. No clickable divs or spans for primary actions.

## Scope
- CCFP-EM work happens in `oral-exam-sim/`. Do not start store builds or submissions unless asked.
