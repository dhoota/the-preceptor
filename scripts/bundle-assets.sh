#!/usr/bin/env bash
#
# Bundle every remote asset into the app so it runs fully offline.
#
# Why this is a script instead of already-done work: the container that prepared
# this repo has an egress policy that blocks d8j0ntlcm91z4.cloudfront.net (403 on
# CONNECT), which is where every game asset AND the generated icon/splash live.
# Your own machine has no such restriction, so run this once, locally:
#
#     ./scripts/bundle-assets.sh
#
# It is idempotent — already-downloaded files are skipped, and rewriting the HTML
# twice is harmless. Requires: bash, curl, python3 (with Pillow for the splash resize).

set -euo pipefail

cd "$(dirname "$0")/.."

GAME="www/index.html"
ASSETS="www/assets"
HOST="${ASSET_HOST:-https://d8j0ntlcm91z4.cloudfront.net}"
# Prefix used to find asset URLs in the game file. Overridable so the script
# itself can be exercised end-to-end against a mock server in tests.
URL_PREFIX="${ASSET_URL_PREFIX:-https://d8j0ntlcm91z4}"

# Icon and splash are store artwork, not game artwork, so they are named here
# rather than in ART — keeping a 4K splash out of the app's own asset payload.
ICON_URL="${ICON_URL:-$HOST/user_3EtwLgJyGWKJ5f55jawOYZp2o0t/hf_20260816_232253_a7d562c7-7422-45c4-9f21-79084c742f1a.png}"
# Splash: generated at 2K then upscaled to 4K, so the resize down to 2732 stays
# sharp instead of being interpolated up from a smaller original.
SPLASH_URL="${SPLASH_URL:-$HOST/user_3EtwLgJyGWKJ5f55jawOYZp2o0t/hf_20260816_234740_a1b53687-e215-426f-bb43-e81a49083488.png}"

say() { printf '\n\033[1m%s\033[0m\n' "$*"; }

# ---------------------------------------------------------------- game assets
say "1/5  Downloading game assets"
mkdir -p "$ASSETS"
# `|| true`: once the URLs are rewritten, grep matches nothing and exits 1,
# which under `set -e` would kill the script on every later run.
{ grep -oE "$URL_PREFIX[^\"]+" "$GAME" || true; } | sort -u > /tmp/ddd-urls.txt
total=$(wc -l < /tmp/ddd-urls.txt | tr -d ' ')
echo "     $total unique URLs referenced"

n=0
while IFS= read -r url; do
  n=$((n + 1))
  name="${url##*/}"
  if [ -s "$ASSETS/$name" ]; then
    echo "     [$n/$total] have $name"
    continue
  fi
  echo "     [$n/$total] get  $name"
  curl -fsSL --retry 3 --retry-delay 2 --max-time 180 -o "$ASSETS/$name.part" "$url"
  mv "$ASSETS/$name.part" "$ASSETS/$name"
done < /tmp/ddd-urls.txt

# ------------------------------------------------------------------- rewrite
say "2/5  Rewriting asset URLs to local paths"
python3 - "$GAME" "$URL_PREFIX" <<'PY'
import io, re, sys
p, prefix = sys.argv[1], sys.argv[2]
s = io.open(p, encoding="utf-8").read()
before = s.count(prefix)
# <prefix>.../<file>  ->  assets/<file>   (ART entries and both <video> sources)
out = re.sub(re.escape(prefix) + r'[^"\']*/([^/"\']+)', r'assets/\1', s)
io.open(p, "w", encoding="utf-8").write(out)
print("     rewrote %d references" % before)
PY

remaining=$(grep -c "$URL_PREFIX" "$GAME" || true)
if [ "$remaining" != "0" ]; then
  echo "     ✗ $remaining remote URLs still present" >&2
  exit 1
fi
echo "     ✓ 0 remote URLs remain"

# ------------------------------------------------------------- missing files
say "3/5  Verifying every referenced file exists"
python3 - "$GAME" "$ASSETS" <<'PY'
import io, os, re, sys
game, adir = sys.argv[1], sys.argv[2]
s = io.open(game, encoding="utf-8").read()
refs = sorted(set(re.findall(r'assets/([A-Za-z0-9._-]+\.(?:png|jpg|jpeg|webp|mp4))', s)))
missing = [r for r in refs if not os.path.isfile(os.path.join(adir, r))]
print("     %d referenced, %d present" % (len(refs), len(refs) - len(missing)))
if missing:
    print("     ✗ missing: %s" % ", ".join(missing[:10]))
    sys.exit(1)
print("     ✓ all present")
PY

# ------------------------------------------------------------ icon + splash
say "4/5  Fetching app icon and splash"
mkdir -p assets
[ -s assets/icon.png ]   || curl -fsSL --retry 3 --max-time 180 -o assets/icon.png "$ICON_URL"
# Resize to an exact opaque square. Prefers Pillow, falls back to `sips`, which
# is built into macOS — Codemagic Mac runners often ship a Python that refuses
# `pip install` under PEP 668, so Pillow is not guaranteed to be there.
square() {
  file="$1"; size="$2"
  if python3 -c "import PIL" 2>/dev/null; then
    python3 - "$file" "$size" <<'PY'
from PIL import Image
import sys
f, n = sys.argv[1], int(sys.argv[2])
im = Image.open(f).convert("RGB")     # convert drops alpha; stores reject transparency
if im.size != (n, n):
    im = im.resize((n, n), Image.LANCZOS)
im.save(f, "PNG")
print("     %s -> %dx%d (Pillow)" % (f, n, n))
PY
  elif command -v sips >/dev/null 2>&1; then
    sips -s format png -z "$size" "$size" "$file" >/dev/null
    echo "     $file -> ${size}x${size} (sips)"
  else
    echo "     ! neither Pillow nor sips available — leaving $file as downloaded"
  fi
}

if [ -n "$SPLASH_URL" ]; then
  [ -s assets/splash.png ] || curl -fsSL --retry 3 --max-time 300 -o assets/splash.png "$SPLASH_URL"
  square assets/splash.png 2732
else
  echo "     ! SPLASH_URL empty — skipping splash (icon alone is enough to generate)"
fi

square assets/icon.png 1024

say "5/5  Generating icon/splash sets and syncing native projects"
npx --yes @capacitor/assets generate --iconBackgroundColor '#0f3b3d' --splashBackgroundColor '#0f3b3d'
npx cap sync

say "Done. Offline build ready."
