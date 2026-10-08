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
- Never move an existing customer to a new identity. With no stored ID (first run after an update), configure WITHOUT an `appUserID`, read the SDK's own ID with `getAppUserID()`, store it and use it from then on. Mint `preceptor_<uuid>` only when `getAppUserID()` returns nothing at all (a genuinely fresh install). If that read fails, store nothing and try again next launch. Nobody should ever need Restore purchase after an update (`configureWithStableId` in `src/lib/purchases.ts`).
- No `logOut` (or `logIn`) anywhere.
- Gate access only on `customerInfo.entitlements.active`: `written_access` (Complete, Written) and `oral_full_access` (Complete, Oral). An entitlement missing from `active` never opens anything, whatever its date says.
- Handle promotional entitlements defensively: `productIdentifier` may be null, `expirationDate` may be null and `activeSubscriptions` may be empty or missing. Never require any of them to open access.
- Fetch the `ccfpem` offering by id. Never use `offerings.current`. Prices come only from the store.

## Citations (App Store Guideline 1.4.1)
- Every answer, rationale and model answer shows a visible "Source:" citation via `src/components/SourceLinks.tsx`, plus a tappable "Blueprint:" link to the CFPC key features PDF page for its priority topic.
- Only real, verified URLs. Never invent one. A source without a confirmed public URL is listed as text; the blueprint link still makes it tappable.
- Every cited source is listed on the Sources & References screen (More > Exam, More > About, and the Oral home page footer).
- "Educational exam preparation only. Not medical advice." (`EDU_ONLY`) stays visible on the result, review and sources screens.
- `tests/citations.test.ts` fails if any question lacks a citation or link.

## Layout and controls
- Full-height containers use `100dvh` (with a `100vh` fallback first) and pad for `env(safe-area-inset-bottom)`.
- Every primary action is a real `<button>` with `onClick`. No clickable divs or spans for primary actions.

## Scope
- CCFP-EM work happens in `oral-exam-sim/`. Do not start store builds or submissions unless asked.
