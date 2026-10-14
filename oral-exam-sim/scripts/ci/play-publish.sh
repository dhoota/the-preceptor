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
# Fail before anything is uploaded if R8 did not write a mapping file, or if
# the bundle does not carry it. AGP embeds mapping.txt in the AAB as
# BUNDLE-METADATA/com.android.tools.build.obfuscation/proguard.map, and Play
# takes the deobfuscation file from there when the bundle is uploaded.
[ -s "$MAPPING" ] || { echo "No R8 mapping file at $MAPPING. Is minifyEnabled on for release?"; exit 1; }
# (grep without -q reads the whole listing; -q would SIGPIPE unzip under pipefail.)
unzip -l "$AAB" | grep "BUNDLE-METADATA/com.android.tools.build.obfuscation/proguard.map" >/dev/null \
  || { echo "The bundle does not embed proguard.map, so Play would get no deobfuscation file."; exit 1; }

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

# Play normally takes the mapping straight from the bundle's BUNDLE-METADATA,
# and then refuses a second upload with "The App Bundle with version code N is
# added previously - the Deobfuscation File can't be modified" (seen on
# android-play-internal #4). That answer means the file is already attached,
# so it counts as success. The explicit upload stays as a fallback for a bundle
# Play did not read the mapping from. Any other failure is a warning, not a
# failed build: the bundle is already published and carries the mapping.
for attempt in 1 2 3; do
  if OUT=$(google-play deobfuscation-files upload --credentials "$CREDS" \
      --package-name "$PACKAGE" --version-code "$VC" \
      --deobfuscation-file "$MAPPING" --type proguard 2>&1); then
    echo "$OUT"
    echo "Deobfuscation file uploaded for versionCode $VC."
    exit 0
  fi
  echo "$OUT"
  if echo "$OUT" | grep -qiE "added previously|can.t be modified|cannot be modified"; then
    echo "Play already has the deobfuscation file for versionCode $VC (taken from the bundle). Nothing to do."
    exit 0
  fi
  echo "Mapping upload attempt $attempt failed; retrying in 20 s."
  sleep 20
done
echo "WARNING: the separate mapping upload for versionCode $VC failed. The bundle embeds"
echo "proguard.map, so Play normally has it already. Check Play Console > App bundle"
echo "explorer > versionCode $VC > Downloads; if it is missing, upload $MAPPING there."
exit 0
