#!/usr/bin/env bash
# Decodes the release keystore from the Codemagic secret PRECEPTOR_KEYSTORE_BASE64
# and checks it before Gradle runs, so a bad secret fails in seconds, not after a
# 15 minute build. Never prints any secret value. Prints only variable names,
# byte counts and the file's leading format bytes.
#
# Needs these variables from the Codemagic group preceptor_signing:
#   PRECEPTOR_KEYSTORE_BASE64  base64 of the .jks or .p12 file (one encoding only)
#   PRECEPTOR_STORE_PASSWORD   keystore password
#   PRECEPTOR_KEY_ALIAS        alias of the signing key inside the keystore
#   PRECEPTOR_KEY_PASSWORD     password of that key
# Writes PRECEPTOR_STORE_FILE to $CM_ENV for android/app/build.gradle.
set -euo pipefail

missing=""
for v in PRECEPTOR_KEYSTORE_BASE64 PRECEPTOR_STORE_PASSWORD PRECEPTOR_KEY_ALIAS PRECEPTOR_KEY_PASSWORD; do
  if [ -z "${!v:-}" ]; then missing="$missing $v"; fi
done
if [ -n "$missing" ]; then
  echo "ERROR: missing or empty in the Codemagic group preceptor_signing:$missing"
  echo "Add each one in Codemagic > Team settings > Environment variables > preceptor_signing (mark as Secret)."
  exit 1
fi

OUT="${CM_BUILD_DIR:?CM_BUILD_DIR not set}/preceptor-release.jks"

# Decode in Python so the rules are the same on macOS and Linux:
# - whitespace and CR/LF anywhere in the value are removed (pasted line wraps),
# - one pair of surrounding quotes is removed (value pasted with quotes),
# - strict base64: any other stray character fails instead of decoding to garbage,
# - if the result is itself base64 text, the secret was encoded twice: fail and say so.
OUT="$OUT" python3 - <<'PY'
import base64, binascii, os, re, sys
raw = os.environ["PRECEPTOR_KEYSTORE_BASE64"]
s = re.sub(r"\s+", "", raw)
if len(s) >= 2 and s[0] == s[-1] and s[0] in "\"'":
    print("WARNING: PRECEPTOR_KEYSTORE_BASE64 is wrapped in quotes. Removing them. Re-save it without quotes.")
    s = s[1:-1]
if s.startswith("-----BEGIN"):
    sys.exit("ERROR: PRECEPTOR_KEYSTORE_BASE64 holds a PEM block, not a base64 keystore. Upload the output of: base64 -i preceptor-release.jks")
try:
    data = base64.b64decode(s, validate=True)
except (binascii.Error, ValueError):
    sys.exit("ERROR: PRECEPTOR_KEYSTORE_BASE64 is not valid base64 (stray characters). Re-upload it.")
head = data[:4]
jks = head == bytes.fromhex("feedfeed")
jceks = head == bytes.fromhex("cececece")
pkcs12 = len(data) > 1 and data[0] == 0x30
if not (jks or jceks or pkcs12):
    if re.fullmatch(rb"[A-Za-z0-9+/=\s]+", data or b"x"):
        sys.exit("ERROR: PRECEPTOR_KEYSTORE_BASE64 decodes to base64 text. It was encoded twice. Re-upload a single base64 encoding of the .jks file.")
    sys.exit(f"ERROR: PRECEPTOR_KEYSTORE_BASE64 decodes to {len(data)} bytes starting {head.hex()}, which is not a JKS (feedfeed) or PKCS12 (30..) keystore. Re-upload it.")
with open(os.environ["OUT"], "wb") as f:
    f.write(data)
kind = "JKS" if jks else "JCEKS" if jceks else "PKCS12"
print(f"Decoded keystore: {len(data)} bytes, format {kind}.")
PY

# Parse it with keytool. Passwords are passed through the environment (:env), never on the command line.
if ! keytool -list -keystore "$OUT" -storepass:env PRECEPTOR_STORE_PASSWORD >/dev/null 2>&1; then
  echo "ERROR: keytool cannot open the keystore with PRECEPTOR_STORE_PASSWORD."
  echo "Either the store password is wrong or the file is damaged. Check both in preceptor_signing."
  exit 1
fi
if ! keytool -list -keystore "$OUT" -storepass:env PRECEPTOR_STORE_PASSWORD -alias "$PRECEPTOR_KEY_ALIAS" >/dev/null 2>&1; then
  echo "ERROR: the keystore opens, but it has no entry named by PRECEPTOR_KEY_ALIAS."
  echo "Aliases in the keystore:"
  keytool -list -keystore "$OUT" -storepass:env PRECEPTOR_STORE_PASSWORD 2>/dev/null | grep -iE 'PrivateKeyEntry|trustedCertEntry' | cut -d, -f1 | sed 's/^/  /'
  exit 1
fi
# Use the key once (a throwaway certificate request) to prove PRECEPTOR_KEY_PASSWORD unlocks it.
if ! keytool -certreq -keystore "$OUT" -storepass:env PRECEPTOR_STORE_PASSWORD -alias "$PRECEPTOR_KEY_ALIAS" -keypass:env PRECEPTOR_KEY_PASSWORD -file /dev/null >/dev/null 2>&1; then
  echo "ERROR: the key alias exists, but PRECEPTOR_KEY_PASSWORD does not unlock that key."
  exit 1
fi
echo "Keystore check passed: store password opens it, the key alias exists and the key password unlocks it."

echo "PRECEPTOR_STORE_FILE=$OUT" >> "${CM_ENV:?CM_ENV not set}"
