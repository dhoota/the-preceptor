#!/bin/sh
# Preceptor: CCFP-EM — resolve the App Store Connect signing key into a real .p8 file.
#
# Used by the asset-library workflows. It reads the key the existing
# app_store_connect integration (preceptor_appstore) already provides; it
# creates nothing new. The release workflows do not use this script and are
# unchanged.
#
# The problem it solves: the .p8 reaches the
# runner as an environment variable and picks up damage on the way. Literal
# backslash-n instead of newlines, CRLF, base64 wrapping, a bare body with no
# PEM header, or a PATH to the file rather than the file's contents. OpenSSL
# then rejects it with "invalid curve name" and nothing says why.
#
# Writes $CM_BUILD_DIR/asc_key.p8 and echoes the path. Exits non-zero if no
# usable key can be formed, because a later failure is harder to read.
set -e
OUT="${CM_BUILD_DIR:-/tmp}/asc_key.p8"

CANDIDATES="APP_STORE_CONNECT_PRIVATE_KEY APP_STORE_CONNECT_PRIVATE_KEY_BASE64 APP_STORE_CONNECT_API_KEY APP_STORE_CONNECT_KEY ASC_KEY_CONTENT APP_STORE_CONNECT_P8"
key=""; used=""
for v in $CANDIDATES; do
  eval "val=\${$v-}"
  n=$(printf '%s' "$val" | wc -c | tr -d ' ')
  if [ "$n" -gt 0 ]; then echo "  $v: $n chars"; else echo "  $v: unset"; fi
  if [ -z "$key" ] && [ "$n" -gt 0 ]; then key="$val"; used="$v"; fi
done
if [ -z "$key" ]; then
  echo "No App Store Connect private key in the environment."
  env | cut -d= -f1 | grep -i 'APP_STORE\|ASC_' | sort | sed 's/^/  seen: /'
  exit 1
fi
echo "using $used"

# A path has to be detected BEFORE any content handling, because "/" is a
# base64 character and a path survives the base64 filter looking plausible.
cand=$(printf '%s' "$key" | sed -e 's/^@file://' -e 's/^@env://' \
  -e 's/^[[:space:]]*"//' -e 's/"[[:space:]]*$//' -e "s/^[[:space:]]*'//" -e "s/'[[:space:]]*\$//" \
  -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
if [ -f "$cand" ] && [ -r "$cand" ]; then
  echo "value is a readable file: $(basename "$cand") — reading the key from it"
  key=$(cat "$cand")
fi

key=$(printf '%s' "$key" | sed -e 's/^[[:space:]]*"//' -e 's/"[[:space:]]*$//' -e "s/^[[:space:]]*'//" -e "s/'[[:space:]]*\$//")
key=$(printf '%b' "$key" | tr -d '\r')
body=$(printf '%s' "$key" | sed -e 's/-----BEGIN[^-]*-----//g' -e 's/-----END[^-]*-----//g' | tr -dc 'A-Za-z0-9+/=')
if printf '%s' "$body" | base64 --decode 2>/dev/null | grep -q 'BEGIN'; then
  echo "value was a base64-wrapped PEM; decoding"
  body=$(printf '%s' "$body" | base64 --decode 2>/dev/null | sed -e 's/-----BEGIN[^-]*-----//g' -e 's/-----END[^-]*-----//g' | tr -dc 'A-Za-z0-9+/=')
fi

{ echo "-----BEGIN PRIVATE KEY-----"; printf '%s' "$body" | fold -w 64; echo ""; echo "-----END PRIVATE KEY-----"; } | sed '/^$/d' > "$OUT"
chmod 600 "$OUT"

if ! openssl pkey -in "$OUT" -noout 2>/dev/null; then
  echo "OpenSSL cannot read the key after normalising."
  echo "A P-256 .p8 body is about 184 base64 characters; this one is $(printf '%s' "$body" | wc -c | tr -d ' ')."
  echo "A body near the variable's own length, with no BEGIN/END, usually means"
  echo "the variable holds a file path that did not resolve."
  exit 1
fi
echo "OpenSSL parses the key: $OUT"
