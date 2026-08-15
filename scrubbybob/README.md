# ScrubbyBob's Burger Frenzy — store build

App-store packaging for the game. Kept in its own folder so it stays separate
from The Preceptor site at the repo root.

## Status

| Step | State |
| --- | --- |
| Folder + npm project | done |
| Capacitor core + CLI (8.5.0) | installed |
| `capacitor.config.json` (`webDir: "www"`) | created |
| **Game file** | **waiting — see below** |
| Bundle local assets | blocked on game file |
| Strip fake monetization | blocked on game file |
| `cap add ios` / `cap add android` | blocked on game file |
| Icon + splash | blocked on game file |

## Drop the game file here

Put `scrubbybobs-burger-saga.html` in this folder (or anywhere in the repo and
say where). It then becomes `www/index.html`, with the downloaded art beside it
in `www/assets/`.

## Identifiers

- **App name:** ScrubbyBob's Burger Frenzy — 26 chars, inside the App Store's 30 limit
- **Bundle ID / package:** `com.dhoota.scrubbybob`

The bundle ID is the same on both stores and is permanent once submitted. It is
a placeholder derived from the GitHub handle — change it in
`capacitor.config.json` before the first upload if you want something else.

## Commands

```bash
cd scrubbybob
npx cap add ios          # after www/index.html exists
npx cap add android
npx cap sync             # re-run after ANY change to the game
```

## Validation

Run from the repo root after any edit to the game:

```bash
# JS syntax
awk '/<script>/{flag=1;next}/<\/script>/{flag=0}flag' scrubbybob/www/index.html > /tmp/game.js \
  && node --check /tmp/game.js && echo "JS OK"

# IP safety — MUST print 0
grep -ciE "spongebob|krusty|krabby|bikini bottom|squidward|patrick star|mr\.? krabs|plankton" \
  scrubbybob/www/index.html

# No remote assets left — MUST print 0
grep -c 'https://d8j0ntlcm91z4' scrubbybob/www/index.html
```

Plus the portrait audit: every `EMO` `a`/`h` value, every `img:ART.x` in `CAST`,
and every `img:"x"` on a character const must resolve to a key in `ART`.
