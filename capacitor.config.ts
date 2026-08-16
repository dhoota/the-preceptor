// `import type` (not a bare named import): Capacitor 8 loads this file through
// Node's TS type-stripping, which erases type-only imports but would try to
// resolve a value import against @capacitor/cli's CommonJS export map and fail.
import type { CapacitorConfig } from '@capacitor/cli';

// Dutch's Doggy Daycare — a game, brand-separate from the Preceptor apps.
// Golden rule from the playbook: reuse the workflow, make every identifier
// brand-new. This appId is distinct from com.preceptor.mccqe /
// com.preceptor.study / com.dhoota.scrubbybob so nothing collides in App Store
// Connect or Play Console, and no entitlements cross-contaminate. A bundle ID is
// permanent after the first submission, so it is chosen once, here.
//
// webDir is `www` (not `dist`) — the game is a hand-written self-contained HTML
// file, so there is no bundler step to produce a build directory.
const config: CapacitorConfig = {
  appId: 'com.dhoota.dutchgolden',
  appName: "Dutch's Doggy Daycare",
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'always'
  },
  // No plugin configuration block is needed. @revenuecat/purchases-capacitor is
  // a dependency and registers itself natively as `Purchases`, but it stays
  // inert until IAP.KEY holds a real RevenueCat key. v1.0 ships the placeholder,
  // so the storefront never renders and nothing is collected. No ads, no
  // notifications, nothing else that would add a privacy declaration.
  plugins: {}
};

export default config;
