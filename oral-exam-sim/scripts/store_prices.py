#!/usr/bin/env python3
"""
Cut or raise subscription prices on App Store Connect and Google Play.

WHY THIS EXISTS: Arjan approved a 50%-off price cut on the 3-month and
6-month subscriptions of every Preceptor exam app (Oct 2026), to build
volume before a later raise. Prices are never hardcoded in the apps (they
come live from each store via RevenueCat) — this script is the one place
that touches real store prices, and it is built to be reused for the
eventual raise too, not just this cut.

NO PRODUCT IDS IN CONFIG. The config (scripts/store_prices_config.json,
next to this file) names only the app: its iOS bundle ID and/or Android
package name, plus the rounding rule and the Android migration flag. This
script DISCOVERS the real subscription products straight from each store
at run time and keeps only the 3-month and 6-month ones:
  - Apple: GET the app by bundleId -> its subscriptionGroups -> each
    group's subscriptions -> keep subscriptionPeriod in
    {THREE_MONTHS, SIX_MONTHS}, skip everything else (ONE_WEEK, ONE_MONTH,
    TWO_MONTHS, ONE_YEAR, ...).
  - Play: GET monetization.subscriptions.list for the package -> each
    subscription's basePlans -> keep state ACTIVE and billingPeriodDuration
    in {P3M, P6M}, skip everything else (P1M, P1Y, ...).
There is therefore no placeholder product ID to go stale and no list to
keep in sync by hand — a product that doesn't exist yet (e.g. an NDEB
tier not yet live) simply isn't discovered, and a new 3m/6m product added
later is picked up automatically next run.

SAFETY MODEL — read before ever setting DRY_RUN=false:
  - DRY_RUN defaults to true (env var DRY_RUN, or --dry-run/--no-dry-run).
    A dry run only READS current prices and PRINTS the discovered table
    and planned change for every product; it makes zero mutating API
    calls to either store.
  - Only 3-month/6-month products are ever discovered — the hidden legacy
    1-month/1-year products can never be reached by this script's own
    filtering, by construction, not by a list someone has to maintain.
  - Every discovered product is handled independently: one failure (a
    missing price point, a permission error) is logged and skipped, never
    a reason to abort the whole run.
  - `migrate_existing_subscribers` is a per-app, explicit config flag, not
    a global default. For THIS cut Arjan approved it for Android; nothing
    in this script defaults it to true for a future price RAISE — flip it
    per app when that's actually wanted, after reading the migration note
    below.

RUN:
    DRY_RUN=true  python3 scripts/store_prices.py --config scripts/store_prices_config.json
    DRY_RUN=false python3 scripts/store_prices.py --config scripts/store_prices_config.json
  (the Codemagic workflow `store-prices` wraps exactly this, with DRY_RUN
  as its one input, defaulting to true)

CREDENTIALS (from the environment — never hardcode, never log):
  App Store Connect API (reuses this repo's existing `app_store_connect`
  Codemagic integration — the same one iOS release workflows already use):
    APP_STORE_CONNECT_KEY_IDENTIFIER
    APP_STORE_CONNECT_ISSUER_ID
    APP_STORE_CONNECT_PRIVATE_KEY   (a Codemagic @file:/@env: reference —
                                     see resolve_ref() below, not a raw PEM)
  Google Play Developer API (reuses the existing `preceptor_play` group):
    GCLOUD_SERVICE_ACCOUNT_CREDENTIALS   (the service account JSON, whole)

PERMISSIONS THIS NEEDS (if missing, every call below 403s and the script
says so by app rather than guessing):
  - App Store Connect API key: role must be Admin or App Manager. The
    Developer role (sufficient for builds) cannot read or write subscription
    prices. Check: App Store Connect > Users and Access > Integrations >
    the key named in this repo's `app_store_connect` integration > Roles.
  - Play service account: needs the app-level "Monetization" permission
    (view AND manage — view alone cannot write prices). Check: Play Console
    > Setup > API access > the service account used as
    GCLOUD_SERVICE_ACCOUNT_CREDENTIALS > App permissions > this app >
    Monetization. The existing grant here is release-management only
    ("testing-track release rights" per this repo's codemagic.yaml
    comment), which is NOT enough for this script — Arjan needs to add
    Monetization access before a real (non-dry) run can write anything.

ROUNDING RULE (Arjan, Oct 2026): new USD price = half the current USD
price, rounded to the nearest .99 AT OR BELOW that half (never round up
past the midpoint — this is a cut, not a rounding-driven increase).
  100.00 -> 49.99    150.00 -> 74.99    59.99 -> 29.99
"""
import argparse
import json
import os
import sys
import time
import urllib.parse
import urllib.request
import urllib.error
from decimal import Decimal, ROUND_HALF_UP

KEEP_IOS_PERIODS = {"THREE_MONTHS", "SIX_MONTHS"}
KEEP_ANDROID_DURATIONS = {"P3M", "P6M"}

# ---------------------------------------------------------------------------
# Rounding
# ---------------------------------------------------------------------------

def half_round_99(old_price: Decimal) -> Decimal:
    """Half the price, then the largest X.99 that does not exceed that half.

    Using Decimal throughout (never float) because this is money: a float
    half of 59.99 is 29.995, and plain float rounding is exactly the kind
    of off-by-a-cent bug a pricing script must not have.
    """
    half = (old_price / 2).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
    whole_dollars = int(half // 1)
    candidate = Decimal(whole_dollars) + Decimal("0.99")
    if candidate > half:
        candidate -= 1
    return candidate


def new_price_for(old_price: Decimal, rule: str) -> Decimal:
    if rule == "half_round_99":
        return half_round_99(old_price)
    raise ValueError(f"unknown round rule: {rule}")


# ---------------------------------------------------------------------------
# App Store Connect API (ES256 JWT bearer)
# ---------------------------------------------------------------------------

ASC_BASE = "https://api.appstoreconnect.apple.com/v1"


def resolve_ref(value: str) -> str:
    """APP_STORE_CONNECT_PRIVATE_KEY arrives as a REFERENCE, not the key.

    Codemagic's `app_store_connect` integration hands scripts `@file:/path`
    (or `@env:SOME_VAR`) for the app-store-connect CLI to resolve itself —
    reading the env var raw gives a ~70-char string starting with '@', not a
    PEM. Carried over verbatim from scripts/asc-review-screenshots.py (NDEB,
    ndeb-app branch), which hit exactly this and confirmed the fix live.
    """
    v = value.strip()
    if v.startswith("@file:"):
        path = v[len("@file:"):].strip()
        if not os.path.exists(path):
            sys.exit("APP_STORE_CONNECT_PRIVATE_KEY points at %s, which does not exist" % path)
        with open(path, "r") as fh:
            return fh.read()
    if v.startswith("@env:"):
        name = v[len("@env:"):].strip()
        inner = os.environ.get(name)
        if not inner:
            sys.exit("APP_STORE_CONNECT_PRIVATE_KEY points at env var %s, which is empty" % name)
        return inner
    return value


def normalize_pem(raw: str) -> str:
    """Rebuild the .p8 into a PEM `cryptography`/PyJWT will accept.

    The value that reaches the environment is not reliably well-framed: it
    can arrive quoted, with literal \\n instead of newlines, CRLF, indented,
    on one line, or as bare base64 with no header. Take only the base64 and
    re-frame it. Same fix as scripts/asc-review-screenshots.py.
    """
    text = raw.strip().strip('"').strip("'")
    text = text.replace("\\n", "\n").replace("\r\n", "\n").replace("\r", "\n")
    label = "PRIVATE KEY"
    if "-----BEGIN" in text:
        head = text.split("-----BEGIN ", 1)[1].split("-----", 1)[0].strip()
        if head:
            label = head
        body = text.split("-----", 2)[2]
        body = body.split("-----END")[0]
    else:
        body = text
    body = "".join(body.split())
    lines = [body[i:i + 64] for i in range(0, len(body), 64)]
    return "-----BEGIN %s-----\n%s\n-----END %s-----\n" % (label, "\n".join(lines), label)


class AppStoreConnect:
    def __init__(self):
        self.key_id = os.environ.get("APP_STORE_CONNECT_KEY_IDENTIFIER")
        self.issuer_id = os.environ.get("APP_STORE_CONNECT_ISSUER_ID")
        self.private_key_pem = os.environ.get("APP_STORE_CONNECT_PRIVATE_KEY")
        self._token = None
        self._token_exp = 0

    def available(self) -> bool:
        return bool(self.key_id and self.issuer_id and self.private_key_pem)

    def _jwt(self) -> str:
        # Apple's API keys are ES256 (P-256 ECDSA). Lazy-import so a dry run
        # against Play-only config doesn't require `cryptography` + `jwt`.
        now = int(time.time())
        if self._token and now < self._token_exp - 30:
            return self._token
        import jwt  # PyJWT

        exp = now + 15 * 60  # Apple caps this token at 20 minutes
        payload = {"iss": self.issuer_id, "iat": now, "exp": exp, "aud": "appstoreconnect-v1"}
        headers = {"alg": "ES256", "kid": self.key_id, "typ": "JWT"}
        self._token = jwt.encode(payload, normalize_pem(resolve_ref(self.private_key_pem)), algorithm="ES256", headers=headers)
        self._token_exp = exp
        return self._token

    def _request(self, method: str, path: str, body: dict | None = None) -> dict:
        url = path if path.startswith("http") else ASC_BASE + path
        data = json.dumps(body).encode() if body is not None else None
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Authorization", "Bearer " + self._jwt())
        req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                raw = r.read()
                return json.loads(raw) if raw else {}
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"ASC {method} {path} -> HTTP {e.code}: {e.read().decode(errors='replace')[:500]}")

    def _paginate(self, path: str) -> list[dict]:
        out = []
        next_url = ASC_BASE + path
        while next_url:
            res = self._request("GET", next_url)
            out.extend(res.get("data", []))
            next_url = res.get("links", {}).get("next")
        return out

    def find_app_id(self, bundle_id: str) -> str | None:
        q = urllib.parse.urlencode({"filter[bundleId]": bundle_id})
        res = self._request("GET", f"/apps?{q}")
        items = res.get("data", [])
        return items[0]["id"] if items else None

    def discover_subscriptions(self, bundle_id: str) -> list[dict]:
        """bundleId -> subscriptionGroups -> subscriptions, kept to 3m/6m only."""
        app_id = self.find_app_id(bundle_id)
        if not app_id:
            return []
        groups = self._paginate(f"/apps/{app_id}/subscriptionGroups")
        found = []
        for g in groups:
            subs = self._paginate(f"/subscriptionGroups/{g['id']}/subscriptions")
            for s in subs:
                attrs = s.get("attributes", {})
                period = attrs.get("subscriptionPeriod")
                if period in KEEP_IOS_PERIODS:
                    found.append({"subscription_id": s["id"], "product_id": attrs.get("productId"), "period": period, "name": attrs.get("name")})
        return found

    def current_usd_price(self, subscription_id: str) -> Decimal | None:
        res = self._request(
            "GET",
            f"/subscriptions/{subscription_id}/prices"
            "?filter[territory]=USA&include=subscriptionPricePoint&limit=1"
            "&sort=-startDate",
        )
        included = {i["id"]: i for i in res.get("included", [])}
        for price in res.get("data", []):
            pp_id = price.get("relationships", {}).get("subscriptionPricePoint", {}).get("data", {}).get("id")
            pp = included.get(pp_id)
            if pp:
                customer_price = pp["attributes"].get("customerPrice")
                if customer_price is not None:
                    return Decimal(str(customer_price))
        return None

    def find_price_point(self, subscription_id: str, target_usd: Decimal) -> str | None:
        # subscriptionPricePoints are Apple's fixed tier ladder for USA; find
        # the one whose customerPrice matches our computed new price exactly
        # (Apple's tiers land on real .99/.49 values, so an exact match is
        # expected for a target already rounded to .99).
        q = urllib.parse.urlencode({"filter[territory]": "USA", "limit": 8000})
        res = self._request("GET", f"/subscriptions/{subscription_id}/pricePoints?{q}")
        for pp in res.get("data", []):
            if Decimal(str(pp["attributes"]["customerPrice"])) == target_usd:
                return pp["id"]
        return None

    def set_price(self, subscription_id: str, price_point_id: str, start_date: str, preserve_current_price: bool = False) -> dict:
        # VERIFY against current ASC API docs before the first live run:
        # preserveCurrentPrice=false on every other territory is how a USD
        # price change "equalizes" to Apple's own tier table for the rest of
        # the world, per the task's instruction ("USD price point then
        # equalizations for all territories"). If Apple's API has since
        # changed this to a relationship-array shape instead of a flag,
        # update this call, not the rest of the script.
        body = {
            "data": {
                "type": "subscriptionPrices",
                "attributes": {"preserveCurrentPrice": preserve_current_price, "startDate": start_date},
                "relationships": {
                    "subscription": {"data": {"type": "subscriptions", "id": subscription_id}},
                    "subscriptionPricePoint": {"data": {"type": "subscriptionPricePoints", "id": price_point_id}},
                },
            }
        }
        return self._request("POST", "/subscriptionPrices", body)


# ---------------------------------------------------------------------------
# Google Play Developer API (service-account OAuth2, Android publisher scope)
# ---------------------------------------------------------------------------

PLAY_TOKEN_URL = "https://oauth2.googleapis.com/token"
PLAY_API_BASE = "https://androidpublisher.googleapis.com/androidpublisher/v3"
PLAY_SCOPE = "https://www.googleapis.com/auth/androidpublisher"


class PlayDeveloper:
    def __init__(self):
        raw = os.environ.get("GCLOUD_SERVICE_ACCOUNT_CREDENTIALS")
        self.creds = json.loads(raw) if raw else None
        self._token = None
        self._token_exp = 0

    def available(self) -> bool:
        return bool(self.creds)

    def _jwt_assertion(self) -> str:
        import jwt  # PyJWT; RS256 needs `cryptography`, already a dependency above

        now = int(time.time())
        payload = {
            "iss": self.creds["client_email"],
            "scope": PLAY_SCOPE,
            "aud": PLAY_TOKEN_URL,
            "iat": now,
            "exp": now + 3600,
        }
        return jwt.encode(payload, self.creds["private_key"], algorithm="RS256")

    def _access_token(self) -> str:
        now = int(time.time())
        if self._token and now < self._token_exp - 30:
            return self._token
        body = urllib.parse.urlencode(
            {"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer", "assertion": self._jwt_assertion()}
        ).encode()
        req = urllib.request.Request(PLAY_TOKEN_URL, data=body, method="POST")
        req.add_header("Content-Type", "application/x-www-form-urlencoded")
        with urllib.request.urlopen(req, timeout=30) as r:
            res = json.loads(r.read())
        self._token = res["access_token"]
        self._token_exp = now + int(res.get("expires_in", 3600))
        return self._token

    def _request(self, method: str, path: str, body: dict | None = None) -> dict:
        url = PLAY_API_BASE + path
        data = json.dumps(body).encode() if body is not None else None
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Authorization", "Bearer " + self._access_token())
        req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                raw = r.read()
                return json.loads(raw) if raw else {}
        except urllib.error.HTTPError as e:
            raise RuntimeError(f"Play {method} {path} -> HTTP {e.code}: {e.read().decode(errors='replace')[:500]}")

    def discover_base_plans(self, package_name: str) -> list[dict]:
        """List every subscription for the package, keep ACTIVE 3m/6m base plans.

        https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.subscriptions/list
        """
        found = []
        page_token = None
        while True:
            q = {"pageSize": 200}
            if page_token:
                q["pageToken"] = page_token
            res = self._request("GET", f"/applications/{package_name}/subscriptions?{urllib.parse.urlencode(q)}")
            for sub in res.get("subscriptions", []):
                product_id = sub.get("productId")
                for bp in sub.get("basePlans", []):
                    if bp.get("state") == "ACTIVE" and bp.get("billingPeriodDuration") in KEEP_ANDROID_DURATIONS:
                        found.append({"product_id": product_id, "base_plan": bp})
            page_token = res.get("nextPageToken")
            if not page_token:
                break
        return found

    def current_usd_price(self, base_plan: dict) -> Decimal | None:
        for cfg in base_plan.get("regionalConfigs", []):
            if cfg.get("regionCode") == "US":
                price = cfg.get("price", {})
                units = int(price.get("units", 0))
                nanos = int(price.get("nanos", 0))
                return Decimal(units) + (Decimal(nanos) / Decimal(10**9))
        return None

    def convert_region_prices(self, package_name: str, new_usd: Decimal) -> dict:
        # Google's own conversion table: give it one region's price, get back
        # the full equalized map for every other region ("Play:
        # convertRegionPrices" in the task - this is that exact method) PLUS
        # the regionVersion that the patch below must echo back.
        # https://developers.google.com/android-publisher/api-ref/rest/v3/monetization/convertRegionPrices
        body = {"price": {"currencyCode": "USD", "units": str(int(new_usd)), "nanos": int((new_usd % 1) * 10**9)}}
        return self._request("POST", f"/applications/{package_name}/pricing:convertRegionPrices", body)

    def update_base_plan_prices(
        self,
        package_name: str,
        product_id: str,
        base_plan: dict,
        converted: dict,
        migrate_existing_subscribers: bool,
    ) -> dict:
        # There is no basePlans.batchUpdate/update method in Play Developer
        # API v3 — a base plan's regionalConfigs are updated by PATCHing the
        # parent Subscription with an updateMask scoped to this one base
        # plan, per
        # https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.subscriptions/patch
        # newSubscriberAvailability is preserved per-region from the base
        # plan we already read (discover_base_plans), so a region that was
        # off for new subscribers doesn't silently flip on just because its
        # price changed.
        base_plan_id = base_plan["basePlanId"]
        existing_by_region = {c["regionCode"]: c for c in base_plan.get("regionalConfigs", [])}
        region_version = converted.get("regionVersion", {}).get("version")
        regional_configs = []
        for region, price in converted.get("convertedRegionPrices", {}).items():
            existing = existing_by_region.get(region, {})
            regional_configs.append(
                {
                    "regionCode": region,
                    "newSubscriberAvailability": existing.get("newSubscriberAvailability", True),
                    "price": {"currencyCode": price["currencyCode"], "units": price["units"], "nanos": price.get("nanos", 0)},
                }
            )
        patch_body = {
            "packageName": package_name,
            "productId": product_id,
            "basePlans": [{"basePlanId": base_plan_id, "regionalConfigs": regional_configs}],
        }
        q = urllib.parse.urlencode(
            {"updateMask": f"basePlans[{base_plan_id}].regionalConfigs", "regionsVersion.version": region_version}
        )
        result = self._request("PATCH", f"/applications/{package_name}/subscriptions/{product_id}?{q}", patch_body)
        if migrate_existing_subscribers:
            # https://developers.google.com/android-publisher/api-ref/rest/v3/monetization.subscriptions.basePlans/migratePrices
            migrate_body = {
                "regionalPriceMigrations": [{"regionCode": c["regionCode"]} for c in regional_configs],
                "regionsVersion": {"version": region_version},
            }
            result["migration"] = self._request(
                "POST",
                f"/applications/{package_name}/subscriptions/{product_id}/basePlans/{base_plan_id}:migratePrices",
                migrate_body,
            )
        return result


# ---------------------------------------------------------------------------
# Driver — discover, then price each discovered product independently
# ---------------------------------------------------------------------------

def process_ios(bundle_id: str, rule: str, asc: AppStoreConnect, dry_run: bool, today: str) -> list[dict]:
    rows = []
    if not asc.available():
        return [{"platform": "ios", "status": "skipped", "reason": "ASC credentials not in environment"}]
    try:
        discovered = asc.discover_subscriptions(bundle_id)
    except Exception as e:  # noqa: BLE001 - one app's failure must not stop the rest
        return [{"platform": "ios", "status": "error", "error": str(e)}]
    if not discovered:
        return [{"platform": "ios", "status": "not_found", "bundle_id": bundle_id}]
    for sub in discovered:
        row = {"platform": "ios", "product_id": sub["product_id"], "period": sub["period"], "name": sub["name"]}
        try:
            current = asc.current_usd_price(sub["subscription_id"])
            if current is None:
                row["status"] = "no_current_price"
            else:
                new = new_price_for(current, rule)
                row.update(status="ok", old_usd=str(current), new_usd=str(new))
                if not dry_run:
                    pp_id = asc.find_price_point(sub["subscription_id"], new)
                    if not pp_id:
                        row["status"] = "error"
                        row["error"] = f"no ASC price point for ${new} - check it lands on a real Apple tier"
                    else:
                        asc.set_price(sub["subscription_id"], pp_id, today, preserve_current_price=False)
                        row["status"] = "applied"
        except Exception as e:  # noqa: BLE001
            row["status"] = "error"
            row["error"] = str(e)
        rows.append(row)
    return rows


def process_android(package_name: str, rule: str, migrate: bool, play: PlayDeveloper, dry_run: bool) -> list[dict]:
    rows = []
    if not play.available():
        return [{"platform": "android", "status": "skipped", "reason": "Play credentials not in environment"}]
    try:
        discovered = play.discover_base_plans(package_name)
    except Exception as e:  # noqa: BLE001
        return [{"platform": "android", "status": "error", "error": str(e)}]
    if not discovered:
        return [{"platform": "android", "status": "not_found", "package_name": package_name}]
    for item in discovered:
        product_id, bp = item["product_id"], item["base_plan"]
        row = {"platform": "android", "product_id": f"{product_id}:{bp['basePlanId']}", "duration": bp.get("billingPeriodDuration")}
        try:
            current = play.current_usd_price(bp)
            if current is None:
                row["status"] = "no_current_price"
            else:
                new = new_price_for(current, rule)
                row.update(status="ok", old_usd=str(current), new_usd=str(new), migrate_existing_subscribers=migrate)
                if not dry_run:
                    converted = play.convert_region_prices(package_name, new)
                    play.update_base_plan_prices(package_name, product_id, bp, converted, migrate)
                    row["status"] = "applied"
        except Exception as e:  # noqa: BLE001
            row["status"] = "error"
            row["error"] = str(e)
        rows.append(row)
    return rows


def process_app(entry: dict, asc: AppStoreConnect, play: PlayDeveloper, dry_run: bool, today: str) -> dict:
    name = entry["name"]
    rule = entry.get("round_rule", "half_round_99")
    rows: list[dict] = []

    ios_cfg = entry.get("ios")
    if ios_cfg:
        rows += process_ios(ios_cfg["bundle_id"], rule, asc, dry_run, today)

    android_cfg = entry.get("android")
    if android_cfg:
        migrate = bool(android_cfg.get("migrate_existing_subscribers", False))
        rows += process_android(android_cfg["package_name"], rule, migrate, play, dry_run)

    return {"name": name, "rows": rows}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", required=True)
    ap.add_argument("--dry-run", dest="dry_run", action="store_true", default=None)
    ap.add_argument("--no-dry-run", dest="dry_run", action="store_false")
    args = ap.parse_args()

    dry_run = args.dry_run
    if dry_run is None:
        dry_run = os.environ.get("DRY_RUN", "true").strip().lower() not in ("false", "0", "no")

    with open(args.config) as f:
        config = json.load(f)

    asc = AppStoreConnect()
    play = PlayDeveloper()
    today = time.strftime("%Y-%m-%d")

    apps = config["apps"]
    print(f"=== store_prices.py — DRY_RUN={dry_run} — {len(apps)} app(s) — "
          f"keeping iOS periods {sorted(KEEP_IOS_PERIODS)} / Android durations {sorted(KEEP_ANDROID_DURATIONS)} ===")
    if dry_run:
        print("(dry run: discovering + reading current prices only, no store will be changed)")

    results = []
    for entry in apps:
        r = process_app(entry, asc, play, dry_run, today)
        results.append(r)
        print(f"\n--- {r['name']} ---")
        for row in r["rows"]:
            print(json.dumps(row))

    print("\n=== summary table ===")
    print(f"{'app':<16} {'platform':<9} {'product':<28} {'old USD':>8} {'new USD':>8}  status")
    for r in results:
        for row in r["rows"]:
            print(
                f"{r['name']:<16} {row.get('platform', '-'):<9} {str(row.get('product_id', '-'))[:28]:<28} "
                f"{row.get('old_usd', '-'):>8} {row.get('new_usd', '-'):>8}  {row.get('status')}"
            )

    bad = [row for r in results for row in r["rows"] if row.get("status") == "error"]
    if bad:
        print(f"\n{len(bad)} row(s) errored — see above. Non-zero exit.", file=sys.stderr)
        sys.exit(1)
    print("\nDone.")


if __name__ == "__main__":
    main()
