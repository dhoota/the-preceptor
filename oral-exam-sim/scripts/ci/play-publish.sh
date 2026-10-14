#!/usr/bin/env bash
# Publish the release AAB to a Google Play track AND upload its R8 mapping
# file (deobfuscation file) for the same versionCode, so Play Console can
# deobfuscate crashes and ANRs and stops warning "There is no deobfuscation
# file associated with this App Bundle."
#
# Codemagic's built-in google_play publishing uploads only the bundle, so the
# Play workflows call this instead. It runs the same `google-play bundles
# publish` command Codemagic ran, then `google-play deobfuscation-files
# upload` for the versionCode that was just published.
#
# Usage (from oral-exam-sim/):  bash scripts/ci/play-publish.sh <track> [--draft]
# Needs GCLOUD_SERVICE_ACCOUNT_CREDENTIALS (group preceptor_play).
set -euo pipefail

TRACK="${1:?usage: play-publish.sh <track> [--draft]}"
DRAFT="${2:-}"
PACKAGE="com.preceptor.oral"
AAB="android/app/build/outputs/bundle/release/app-release.aab"
MAPPING="android/app/build/outputs/mapping/release/mapping.txt"
CREDS="@env:GCLOUD_SERVICE_ACCOUNT_CREDENTIALS"

[ -n "${GCLOUD_SERVICE_ACCOUNT_CREDENTIALS:-}" ] || { echo "Missing GCLOUD_SERVICE_ACCOUNT_CREDENTIALS (group preceptor_play)."; exit 1; }
[ -f "$AAB" ] || { echo "No release bundle at $AAB."; exit 1; }
# Fail before anything is uploaded if R8 did not write a mapping file.
[ -s "$MAPPING" ] || { echo "No R8 mapping file at $MAPPING. Is minifyEnabled on for release?"; exit 1; }

VC=$(grep -oE 'versionCode [0-9]+' android/app/build.gradle | awk '{print $2}')
echo "Publishing $PACKAGE versionCode $VC to track '$TRACK'${DRAFT:+ as a draft}"
echo "Mapping: $MAPPING ($(wc -c < "$MAPPING" | tr -d ' ') bytes)"

# The deobfuscation-files command needs a recent codemagic-cli-tools.
if ! google-play deobfuscation-files upload --help >/dev/null 2>&1; then
  pip3 install --quiet --upgrade codemagic-cli-tools
fi

ARGS=(--credentials "$CREDS" --bundle "$AAB" --track "$TRACK")
[ "$DRAFT" = "--draft" ] && ARGS+=(--draft)
if [ -s release_notes.txt ]; then
  NOTES=$(node -e 'process.stdout.write(JSON.stringify([{language:"en-US",text:require("fs").readFileSync("release_notes.txt","utf8").trim()}]))')
  ARGS+=(--release-notes "$NOTES")
fi
google-play bundles publish "${ARGS[@]}"

# Attach the mapping to the versionCode just published. Retried, because the
# bundle is already on Play at this point and a transient API error must not
# leave the release without its deobfuscation file.
for attempt in 1 2 3; do
  if google-play deobfuscation-files upload --credentials "$CREDS" \
      --package-name "$PACKAGE" --version-code "$VC" \
      --deobfuscation-file "$MAPPING" --type proguard; then
    echo "Deobfuscation file uploaded for versionCode $VC."
    exit 0
  fi
  echo "Mapping upload attempt $attempt failed; retrying in 20 s."
  sleep 20
done
echo "The bundle for versionCode $VC is on Play, but its mapping file did not upload."
echo "Upload $MAPPING by hand in Play Console > App bundle explorer > versionCode $VC > Downloads > ReTrace mapping file, or re-run:"
echo "  google-play deobfuscation-files upload --package-name $PACKAGE --version-code $VC --deobfuscation-file $MAPPING"
exit 1
