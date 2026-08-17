#!/usr/bin/env python3
"""Full validation sweep for the game file.

  1. inline JS parses            (delegated to `node --check` by the caller)
  2. IP safety scan              — must be 0
  3. portrait resolution         — every EMO / img: reference must resolve to a
                                   key in ART
  4. no remote asset URLs        — warns until scripts/bundle-assets.sh has run
  5. no fake-monetization surfaces, and no price the app invented for itself
  6. game-shape invariants that have bitten before (tray headroom, the loop
     guard, the storage shim)

Run:  python3 scripts/validate.py
Exit code is non-zero if any hard check fails.
"""
import io
import os
import re
import sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAME = os.path.join(HERE, "www", "index.html")

# Dog-adjacent franchises. Every one of these is somebody's trademark and would
# be a rejection or worse; the cast here is entirely original.
BANNED = (r"paw ?patrol|scooby|clifford the|pound puppies|101 dalmatians|"
          r"lady and the tramp|marmaduke|snoopy|bluey|bingo the|"
          r"nintendog|neopet|tamagotchi|talking tom|littlest pet shop")
# Surfaces that get an app rejected: mock ads, and any price the app invents for
# itself. Real StoreKit purchases are fine — the prices must come from the store
# at runtime, never from a string in this file.
FAKE_MONETIZATION = [
    "playAd", "playInterstitial", "adScr", "adBtn", "adDone", "insAd",
    "data-pack", "data-ra", "data-starter", "data-adp",
    "Demo storefront", "Demo checkout", "Watch ad", "Remove Ads",
]
# A literal currency amount anywhere in the source means a hard-coded price.
HARDCODED_PRICE = r"[$£€¥]\s?\d+[.,]\d{2}"

src = io.open(GAME, encoding="utf-8").read()
fails, warns = [], []


def block(name):
    m = re.search(r"var %s = \{(.*?)\n\};" % name, src, re.S)
    if not m:
        raise SystemExit("could not locate the %s object" % name)
    return m.group(1)


def keys_of(body):
    return set(re.findall(r"^\s*([A-Za-z0-9_]+)\s*:", body, re.M))


# ---- 2. IP safety -----------------------------------------------------------
hits = re.findall(BANNED, src, re.I)
print("IP scan:            %d hit(s)" % len(hits))
if hits:
    fails.append("franchise terms present: %s" % sorted(set(h.lower() for h in hits)))

# ---- 3. portrait resolution -------------------------------------------------
art_body = block("ART")
keys = keys_of(art_body)
print("ART keys:           %d" % len(keys))

refs = []   # (label, art_key)

emo = re.search(r"var EMO = \{(.*?)\n\};", src, re.S)
if emo:
    for name, a, h in re.findall(
            r"(\w+)\s*:\s*\{a:\s*(null|\"[^\"]+\"),\s*h:\s*(null|\"[^\"]+\")\}", emo.group(1)):
        for slot, val in (("a", a), ("h", h)):
            if val != "null":
                refs.append(("EMO.%s.%s" % (name, slot), val.strip('"')))
    # EMO is keyed by the portrait names used on characters — those must exist too.
    for name in re.findall(r"^\s*(\w+)\s*:\s*\{a:", emo.group(1), re.M):
        refs.append(("EMO key %s" % name, name))

# Every img:"key" anywhere — breeds, foods, gear, comforts, upgrades, boosts,
# store products, achievements and story beats all declare art this way, so one
# rule audits the whole cast. This is the check that catches art added at
# runtime instead of statically in ART.
for key in re.findall(r'img\s*:\s*"(\w+)"', src):
    refs.append(('img:"%s"' % key, key))

# Direct ART.x property reads in code.
for key in re.findall(r'\bART\.([A-Za-z0-9_]+)', src):
    refs.append(("ART.%s" % key, key))

bad = [(label, key) for label, key in refs if key not in keys]
print("portrait refs:      %d checked, %d unresolved" % (len(refs), len(bad)))
for label, key in bad:
    fails.append("unresolved portrait %s -> ART.%s" % (label, key))

# Unused art is not a failure, but a portrait nobody references is usually a
# rename that half-landed.
used = set(k for _, k in refs)
orphans = sorted(k for k in keys if k not in used)
if orphans:
    warns.append("%d ART entries referenced by nothing: %s" % (len(orphans), orphans[:6]))

# ---- 3b. content cross-references -------------------------------------------
# A breed whose favourite food is not a real food would quietly never be asked
# for, which is invisible in play and only shows up as a dead Dogdex entry.
food_keys = keys_of(block("FOODS"))
favs = re.findall(r'fav:"(\w+)"', src)
bad_fav = sorted(set(f for f in favs if f not in food_keys))
print("breed favourites:   %d checked, %d unknown" % (len(favs), len(bad_fav)))
if bad_fav:
    fails.append("breeds favour foods that do not exist: %s" % bad_fav)

gear_keys = keys_of(block("GEAR"))
weather_gear = re.findall(r'gear:\[([^\]]+)\]', src)
bad_gear = []
for grp in weather_gear:
    for g in re.findall(r'"(\w+)"', grp):
        if g not in gear_keys:
            bad_gear.append(g)
print("weather gear:       %d unknown" % len(set(bad_gear)))
if bad_gear:
    fails.append("weather asks for gear that does not exist: %s" % sorted(set(bad_gear)))

# ---- 3c. story coverage -----------------------------------------------------
# A beat keyed past the last day is written, paid for, and unreachable — the
# kind of thing you only notice when someone finishes the game and asks where
# the ending was.
m_total = re.search(r"var TOTAL_DAYS = (\d+)", src)
story_days = sorted(int(d) for d in re.findall(r"^\s{2}(\d+):\s*\{who:", src, re.M))
if m_total and story_days:
    total = int(m_total.group(1))
    unreachable = [d for d in story_days if d < 1 or d > total]
    print("story beats:        %d, days %d-%d of %d" %
          (len(story_days), story_days[0], story_days[-1], total))
    if unreachable:
        fails.append("story beats keyed outside day 1-%d and therefore unreachable: %s"
                     % (total, unreachable))
    if story_days[-1] != total:
        warns.append("the last story beat is day %d but the game runs to %d — "
                     "there is no ending on the final day" % (story_days[-1], total))
    # A chapter with no beats at all reads as a dead stretch.
    chapters = [(int(a), int(b)) for a, b in
                re.findall(r"\{from:(\d+),\s*to:(\d+),", src)]
    empty = [(a, b) for a, b in chapters if not any(a <= d <= b for d in story_days)]
    if empty:
        warns.append("chapters with no story beats: %s" % empty)
else:
    warns.append("could not read TOTAL_DAYS / STORY to check story coverage")

# ---- 4. remote assets -------------------------------------------------------
remote = len(re.findall(r"https://d8j0ntlcm91z4[^\"']+", src))
local = len(set(re.findall(r"assets/[A-Za-z0-9._-]+\.(?:png|jpg|jpeg|webp|mp4)", src)))
print("remote asset URLs:  %d   (local: %d)" % (remote, local))
if remote:
    warns.append("%d remote URLs remain — scripts/bundle-assets.sh rewrites these "
                 "at CI build time, which is expected in the repo" % remote)
else:
    missing = [r for r in sorted(set(re.findall(
                   r"assets/([A-Za-z0-9._-]+\.(?:png|jpg|jpeg|webp|mp4))", src)))
               if not os.path.isfile(os.path.join(HERE, "www", "assets", r))]
    if missing:
        fails.append("%d local asset file(s) missing, e.g. %s" % (len(missing), missing[:3]))

# ---- 5. monetization --------------------------------------------------------
left = [t for t in FAKE_MONETIZATION if t in src]
prices = re.findall(HARDCODED_PRICE, src)
print("fake-monetization:  %d   hard-coded prices: %d" % (len(left), len(prices)))
if left:
    fails.append("mock ad / demo-store surfaces present: %s" % left)
if prices:
    fails.append("hard-coded price(s) in the source: %s — prices must come from "
                 "the store via IAP.priceOf()" % sorted(set(prices)))

# If real IAP is wired, it has to be wired properly.
if "IAP" in src and "purchasePackage" in src:
    if "restorePurchases" not in src:
        fails.append("IAP present but no restorePurchases — Apple requires a restore path")
    if "data-restore" not in src:
        fails.append("IAP present but no visible Restore Purchases button")
    if "priceString" not in src:
        fails.append("IAP present but prices are not read from the store")
    if "REVENUECAT_PUBLIC_APPLE_KEY" in src:
        warns.append("RevenueCat API key is still the placeholder — the storefront "
                     "is hidden and v1.0 ships with no purchase surface, which is "
                     "what the listing should declare")
    print("IAP wiring:         restore + store-priced OK")

# ---- 6. invariants that have cost a round trip before -----------------------
# The storage shim. Without it every save throws into a silent catch and the
# game restarts at day 1 on every launch, which playtesting never reveals.
if "window.storage" not in src or "__probe" not in src:
    fails.append("the window.storage shim is missing — saves will fail silently")

# Every modal must stop the clock.
if "if(overlayOpen) return;" not in src:
    fails.append("tick() does not bail out while an overlay is open — "
                 "timers will drain under every full-screen sheet")

# Input headroom: the tray must be able to hold more than the game can ask for.
m_slots = re.search(r"function traySlots\(\)\{ return (\d+)", src)
m_dogs = re.search(r"var MAX_DOGS = (\d+)", src)
if m_slots and m_dogs:
    slots, dogs = int(m_slots.group(1)), int(m_dogs.group(1))
    print("tray headroom:      %d slots vs %d max dogs" % (slots, dogs))
    if slots <= dogs:
        fails.append("tray has %d slots but up to %d dogs can order at once — "
                     "zero headroom makes a round unsolvable" % (slots, dogs))
else:
    warns.append("could not read traySlots()/MAX_DOGS to check input headroom")

# `screen` is a read-only accessor on window; a bare `var screen` never takes.
if re.search(r"^var screen\b", src, re.M):
    fails.append("`var screen` shadows the read-only window.screen accessor")

# ---- report -----------------------------------------------------------------
print()
for w in warns:
    print("WARN  %s" % w)
for f in fails:
    print("FAIL  %s" % f)
if not fails:
    print("PASS  all hard checks green%s" % (" (with warnings)" if warns else ""))
sys.exit(1 if fails else 0)
