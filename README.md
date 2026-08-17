# Dutch's Doggy Daycare

A three-timer dog care game for iOS and Android. You run a small-town daycare
with Dutch, a golden retriever who has opinions about how things are done.

**Bundle ID:** `com.dhoota.dutchgolden` · **App name:** Dutch's Doggy Daycare (21 chars)

> **Note on where this lives.** The game currently sits at the root of the
> `the-preceptor` repo on branch `claude/dog-care-game-dutch-ensogr`, because
> that is the branch this work was scoped to. The root `index.html` is the
> Preceptor site and is untouched; everything else here is the game. Before
> launch, move this to its own repository — see
> [Moving to its own repo](#moving-to-its-own-repo).

---

## The loop

Each day is three rounds, and they depend on each other. That dependency *is*
the game.

| Round | The clock | What you do | What happens if you run out |
| --- | --- | --- | --- |
| **Mealtime** | Corner clock **and** a patience ring on every dog | Each dog asks for one specific food. Tap the bowl, then tap the dog — or drag it across. | The dog goes hungry and tired. |
| **Walk Time** | Corner clock | Gear every dog up for the weather and get them out. | Dogs left inside have an accident. You pay for the mop. |
| **Bedtime** | Corner clock | Match each dog's comfort item — blanket, lullaby, water, plushie. | They bark all night. |

The chain: **a dog that was never fed will not take the leash**, so it is
resolved out of the walk round as an accident on the spot. **A dog that never
got its walk** is wound up at bedtime and will only settle for a calming item.
Rush the bowls and you spend the evening with a mop — which is the whole lesson,
and it is enforced in code, not in a tooltip.

A **care meter** drains on every miss. Empty it and the day is lost and costs a
heart. Hearts refill on the wall clock, five maximum, one every twelve minutes.

## What's in it

- **34 breeds**, each with a portrait, a size, a favourite food and a Dogdex
  entry that levels up as you care for them. Learning a favourite is worth real
  seconds, which is what makes the collection more than a checklist.
- **250 days across 10 chapters** and **87 scripted story beats** — roughly one
  every three days — with a wisdom card on every unscripted day. Three threads
  run underneath the arc: Bruno's barrel (set up day 74, referenced day 157,
  opened day 235), Biscuit's list (days 5, 184, 243), and Dutch handing the
  place over one morning at a time through the last chapter.
- **16 foods, 6 pieces of walk gear, 8 comforts**, unlocking gradually so day one
  is three bowls, not sixteen.
- **5 weather states** that change what gear the walk needs — a rainy day is a
  raincoat day.
- **8 upgrades, 4 boosts, 11 achievements, 4 themes**, offline earnings, and a
  daily streak.
- **81 pieces of generated art**, every one declared statically in `ART`.

## Layout

```
www/index.html          the entire game — one file, no bundler, no framework
capacitor.config.ts     appId, appName, webDir: 'www'
codemagic.yaml          android-debug / android-release / ios-release
ios/  android/          native projects (Capacitor 8, Swift Package Manager)
scripts/                the verification suite and the asset bundler
PRIVACY-POLICY.md       covers this app as written
LAUNCH_KIT.md           store listing copy, ASO, positioning, screenshot plan
IAP-SETUP.md            the full product catalog and the 1.0 → 1.1 flip
SUBMIT.md               the submission blockers App Store Connect hides
```

One self-contained HTML file is a deliberate constraint. The whole game stays
greppable, diffable, and testable in a browser with no build step.

### iPad

iPad is a first-class target, not a stretched phone. Above 900px the tray moves
from a bottom strip to a **right-hand rail**, the dog grid gets the room, and the
boost bar sits at the foot of the rail — which is the layout the 13" iPad
screenshot has to show. `layout-probe.js` reports which layout each viewport
resolved to, so a regression that silently drops the rail fails visibly rather
than merely looking worse:

| Viewport | Layout |
| --- | --- |
| iPhone SE / 15 Pro / Pro Max | phone-stack |
| iPad mini + Pro 11 portrait, Split View ½ | phone-stack |
| iPad Pro 13 portrait, Pro 11 + 13 landscape | **tablet-rail** |

`TARGETED_DEVICE_FAMILY` stays `"1,2"`. iPad screenshots at exactly 2064 × 2752
are required — see `LAUNCH_KIT.md` §4.

## Verification — run all five before every push

```bash
export CHROME_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
npm install --no-save playwright-core          # npm install prunes it sometimes

awk '/<script>/{f=1;next}/<\/script>/{f=0}f' www/index.html > /tmp/game.js
node --check /tmp/game.js       # syntax — there is no build step to catch this
python3 scripts/validate.py     # IP scan, portrait audit, monetization, invariants
node scripts/playtest.js 250    # plays 250 days through the real functions
node scripts/save-probe.js      # the silent save-loss bug
node scripts/layout-probe.js    # 9 iPhone/iPad viewports
```

Or `npm run verify`. Together they take about two minutes.

Current status — all five green:

| Script | Result |
| --- | --- |
| `node --check` | pass |
| `validate.py` | pass, 203 portrait refs resolved, 87 story beats covering days 1–250, 0 hard-coded prices |
| `playtest.js 250` | 250 days, 3519 deliveries, 0 issues |
| `save-probe.js` | `PERSISTED: true`, 10 fields survive a reload |
| `layout-probe.js` | 0 of 9 viewports overflow or clip; tablet rail confirmed on the three widest |

`playtest.js` earned its place on the first run: it caught the dog count being
pinned at three for the entire game unless the player happened to buy Big Yard,
which would have made day 60 play exactly like day 6.

## Assets

The repo does not carry the image binaries. `scripts/bundle-assets.sh` downloads
all 81 of them plus the icon and 4K splash, rewrites the URLs in
`www/index.html` to relative `assets/…` paths, generates the icon and splash
sets, and runs `cap sync`. Every Codemagic workflow runs it first, which is why
the shipped binary plays in airplane mode.

It runs at CI time rather than being committed because the environment that
built this repo has an egress policy that blocks the asset CDN (403 on CONNECT).
Two consequences worth knowing:

- **Screenshots have to come off a real device.** Anything rendered here has
  empty boxes where the art belongs.
- **Run the bundler twice before trusting it.** It is written to be idempotent —
  `grep` with no matches exits 1, and under `set -e` that would kill the script
  on its second run, which is a bug you only find by running it twice.

## In-app purchases

v1.0 ships with **no purchase surface at all**. The storefront is fully written
and gated on one flag:

```js
available: function(){
  return !!this.plugin() && this.KEY.indexOf("REVENUECAT_") !== 0;
}
```

While `IAP.KEY` holds the placeholder this is false, the Bones tab is
`display:none`, and the app genuinely has nothing to sell — which is what lets
the listing declare no in-app purchases truthfully. Setting one string in 1.1
turns the whole thing on. See `IAP-SETUP.md`.

No price string is ever written in source. Prices come from the store at runtime
via `priceString`, and `validate.py` fails the build if a currency literal
appears anywhere. That is what keeps the app correct in every currency.

## Moving to its own repo

Creating a repository from this environment fails with
`403 Resource not accessible by integration` — the GitHub App authorising these
sessions does not hold repo-creation permission. Either create
`dutchs-doggy-daycare` yourself on github.com and push, or grant repo-creation
to the Claude GitHub App and ask a session to do it. Then:

```bash
git checkout claude/dog-care-game-dutch-ensogr
git rm --cached index.html            # the Preceptor site does not come along
git remote add game git@github.com:dhoota/dutchs-doggy-daycare.git
git push game claude/dog-care-game-dutch-ensogr:main
```

Nothing else changes — the bundle ID, the Codemagic file and the signing group
are all already correct.

## Reminders

- Bump `versionCode` in `android/app/build.gradle` by +1 before every Play
  upload, or Play rejects the `.aab` as a duplicate.
- The `dutch_signing` variable group in `codemagic.yaml` is commented out on
  purpose. Codemagic kills a build at pre-flight if the yaml names a group that
  does not exist in the UI. Uncomment it once you have created it.
- `preceptor_mccqe_ios` is shared deliberately. `IOS_CERT_KEY` is an Apple
  *account*-level distribution key; one certificate signs many apps and Apple
  caps how many exist, so reusing it is correct rather than a shortcut.
