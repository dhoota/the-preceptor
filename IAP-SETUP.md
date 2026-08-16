# In-app purchases — the catalog and the 1.0 → 1.1 flip

The storefront is fully written and completely inert. This document is what you
do when you want to switch it on.

---

## Why 1.0 ships with nothing to sell

Shipping IAP in 1.0 means creating every product in App Store Connect, writing a
description for each, capturing a review screenshot per product, wiring
RevenueCat, and submitting the products *with* the version. That is days of
dashboard work standing between a finished game and a live app.

**Apple allows a first in-app purchase to be submitted with any new version**, so
1.1 is a perfectly normal home for it. Ship the game, get reviews, then monetise.

The code is already there. It hangs on one flag:

```js
// www/index.html — IAP.available()
available: function(){
  return !!this.plugin() && this.KEY.indexOf("REVENUECAT_") !== 0;
}
```

While `IAP.KEY` is `"REVENUECAT_PUBLIC_APPLE_KEY"` this returns false, and:

```js
var storeOn = IAP.available();
$("#tabP").style.display = storeOn ? "" : "none";
if(!storeOn && shopTab === "P") shopTab = "U";
```

**Hiding is the part that matters.** A tab that opens onto "store unavailable"
reads to a reviewer as a broken feature, and it contradicts a listing that
declares no purchases. With the placeholder key the app *genuinely* has no
purchase surface.

---

## The catalog

Thirteen products across four kinds. The ladder follows the pattern that
consistently works in casual games: 5–7 price points, the $4.99–$9.99 band
carrying most transactions, and $49.99+ tiers capturing the top of the curve.

**Set the actual prices in App Store Connect / Play Console. Never in code.**
`validate.py` fails the build if a currency literal appears anywhere in the
source; prices are read at runtime from `priceString`.

### Consumables — bones (premium currency)

| Product ID | Name | Grants | Suggested tier |
| --- | --- | --- | --- |
| `bones_s` | Pocket of Bones | 100 bones | Tier 1 |
| `bones_m` | Sack of Bones | 550 bones | Tier 5 — mark **POPULAR** |
| `bones_l` | Crate of Bones | 1,200 bones | Tier 10 |
| `bones_xl` | Wagon of Bones | 3,000 bones | Tier 20 — mark **BEST VALUE** |
| `bones_xxl` | Kennel Vault | 7,000 bones | Tier 50 |

Bones buy boost triples and heart refills. In-game, a boost triple costs
`round(bone × 2.5)` — 20–30 bones — so `bones_s` is roughly four boost packs and
`bones_m` is a comfortable month.

### Consumables — coins (soft currency) and the starter

| Product ID | Name | Grants | Suggested tier |
| --- | --- | --- | --- |
| `coins_m` | Coin Jar | 6,000 coins | Tier 3 |
| `coins_l` | Coin Chest | 20,000 coins | Tier 10 |
| `starter` | Starter Kennel | 400 bones + 5,000 coins + 5× each of Frost Treat / Whistle / Clock Bone | Tier 5, **one time**, mark **ONE TIME** |

> **Gate the starter pack to day 3–7.** Every source agrees a starter offer
> shown before the player has a reason to commit kills conversion. The code does
> not gate it yet — add `S.best >= 3` to its visibility in `paintStore()` when
> you turn the store on.

Coins are also fully earnable: a clean day around day 60 pays ~1,500. `coins_l`
is roughly two weeks of play, which is the right ratio — meaningful, not
required.

### Non-consumables — permanent, server-owned

| Product ID | Name | Effect | Entitlement ID |
| --- | --- | --- | --- |
| `collar` | Golden Collar | +25% coins from every dog, forever | `collar` |
| `deluxe` | Dutch's Deluxe Kit | +2 tray slots permanently (8 → 10) | `deluxe` |
| `costume` | Costume Chest | Cosmetic bandanas and hats | `costume` |
| `themes` | Kennel Themes | Unlocks all four daycare colour schemes | `themes` |

Suggested tiers: Golden Collar 10, Deluxe Kit 5, Costume Chest 5, Themes 3.

These are read back from `customerInfo.entitlements.active` on every launch and
every restore — never trusted from a local flag. `IAP.apply()` does this.

### Subscription

| Product ID | Name | Effect | Entitlement ID |
| --- | --- | --- | --- |
| `pass` | Golden Pass | Daily bones, +50% coins, an exclusive breed | `pass` |

Monthly, auto-renewing. Suggested tier 5 ($4.99-equivalent), which is the band
where battle-pass-shaped products converge.

`S.owned.pass` is set **authoritatively** from entitlements — including being set
back to `false` when the subscription lapses. That is deliberate and different
from the non-consumables, which latch on:

```js
S.owned.collar = !!a.collar || !!S.owned.collar;   // latches
S.owned.pass   = !!a.pass;                          // authoritative, can lapse
```

> **A subscription is materially more App Store Connect work** than any other
> product type: a subscription group, localised display names, a review
> screenshot, and the Terms of Use / Privacy Policy links required in the
> purchase flow. If you want the fastest possible 1.1, ship the twelve
> consumables and non-consumables first and add `pass` in 1.2.

---

## Turning it on

### 1. RevenueCat

1. Create a project. Add the iOS app with bundle ID `com.dhoota.dutchgolden`, and
   the Android app with the same package name.
2. Create the thirteen products above in App Store Connect and Play Console
   first, then import them into RevenueCat.
3. Create **entitlements** `collar`, `deluxe`, `costume`, `themes`, `pass` and
   attach each non-consumable / subscription to its matching entitlement. The
   identifiers must match the strings in `IAP.apply()` exactly.
4. Create an offering — call it `default` and mark it current. Add all thirteen
   products as packages whose **package identifier equals the product ID**
   above. `IAP.find()` matches on either `package.identifier` or
   `package.product.identifier`, so either works, but keeping them identical
   avoids a whole category of confusion.
5. Copy the **public Apple SDK key** (starts `appl_`).

### 2. One line in the game

```js
// www/index.html
IAP: {
  KEY: "appl_YourRealKeyHere",   // was "REVENUECAT_PUBLIC_APPLE_KEY"
```

That is the entire code change. The Bones tab appears, `paintStore()` renders
only the packages the store actually returns, and the Restore Purchases button
(already present, already carrying `data-restore`) becomes visible.

For Android, RevenueCat uses a separate Google key. Add a platform check when
you get there:

```js
KEY: (window.Capacitor && window.Capacitor.getPlatform() === "android")
       ? "goog_YourAndroidKey" : "appl_YourAppleKey",
```

### 3. The three things that must flip together

| | 1.0 (now) | 1.1 |
| --- | --- | --- |
| App Store listing | "No in-app purchases" | declare **Offers In-App Purchases** |
| App Privacy | **Data Not Collected** | **Purchases** — not linked to identity, not used for tracking, App Functionality |
| Description | may claim no IAP | must not claim no IAP |

If any one of these lags, the metadata contradicts the binary and it is a
rejection.

### 4. Re-run the suite

`validate.py` already enforces the wiring: if `purchasePackage` is present it
requires `restorePurchases`, a `data-restore` button, and `priceString`. Once the
key is real, the "placeholder key" warning disappears and the check tightens by
itself.

---

## Implementation notes worth keeping

**Reachable without a bundler.** `@revenuecat/purchases-capacitor` registers
natively as `Purchases`, so `window.Capacitor.Plugins.Purchases` finds it with no
import and no build step.

**Prefer the `customerInfo` that comes back from the purchase.**

```js
return this.plugin().purchasePackage({aPackage:p}).then(function(res){
  self.apply(res && res.customerInfo, sku);   // not a fresh getCustomerInfo()
```

A network round trip immediately after a successful charge is exactly when a
flaky connection costs the player the thing they just paid for.

**Never show a package the store did not return.**

```js
var pkg = IAP.find(sku);
if(!pkg) return;   // never show what cannot be sold
```

A product that is still "Waiting for Review" in App Store Connect will not come
back in the offering, and a button that cannot possibly work is worse than an
absent one.

**Consumables are granted locally, non-consumables are not.** Consumables are
spent the moment they arrive so there is nothing to restore; non-consumables and
the subscription are re-read from entitlements on every launch, so a reinstall or
a new device picks them up automatically.

**Apple requires a visible restore path.** There are two — one at the bottom of
the Bones tab, one in Settings. Both carry `data-restore`, which is what
`validate.py` looks for.
