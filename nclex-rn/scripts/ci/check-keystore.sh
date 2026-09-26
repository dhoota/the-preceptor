#!/usr/bin/env bash
# Checks the Android upload keystore that Codemagic installs from the keystore
# reference in codemagic.yaml (environment.android_signing: preceptor_upload_key).
# Runs before Gradle, so a missing or wrong keystore fails in seconds, not after
# a 15 minute build. Never prints a password. Prints only variable names.
#
# Codemagic sets these from the uploaded keystore:
#   CM_KEYSTORE_PATH, CM_KEYSTORE_PASSWORD, CM_KEY_ALIAS, CM_KEY_PASSWORD
set -euo pipefail

missing=""
for v in CM_KEYSTORE_PATH CM_KEYSTORE_PASSWORD CM_KEY_ALIAS CM_KEY_PASSWORD; do
  if [ -z "${!v:-}" ]; then missing="$missing $v"; fi
done
if [ -n "$missing" ]; then
  echo "ERROR: Codemagic did not provide:$missing"
  echo "Upload the keystore once in Codemagic > Team settings > codemagic.yaml settings >"
  echo "Code signing identities > Android keystores, with reference name preceptor_upload_key."
  exit 1
fi
if [ ! -s "$CM_KEYSTORE_PATH" ]; then
  echo "ERROR: CM_KEYSTORE_PATH does not point to a non-empty file."
  exit 1
fi
if ! keytool -list -keystore "$CM_KEYSTORE_PATH" -storepass:env CM_KEYSTORE_PASSWORD >/dev/null 2>&1; then
  echo "ERROR: keytool cannot open the uploaded keystore with its keystore password."
  echo "Re-upload preceptor_upload_key with the correct keystore password."
  exit 1
fi
if ! keytool -list -keystore "$CM_KEYSTORE_PATH" -storepass:env CM_KEYSTORE_PASSWORD -alias "$CM_KEY_ALIAS" >/dev/null 2>&1; then
  echo "ERROR: the keystore has no entry named by the key alias given at upload."
  echo "Aliases in the keystore:"
  keytool -list -keystore "$CM_KEYSTORE_PATH" -storepass:env CM_KEYSTORE_PASSWORD 2>/dev/null | grep -iE 'PrivateKeyEntry' | cut -d, -f1 | sed 's/^/  /'
  exit 1
fi
# Use the key once (a throwaway certificate request) to prove the key password unlocks it.
if ! keytool -certreq -keystore "$CM_KEYSTORE_PATH" -storepass:env CM_KEYSTORE_PASSWORD -alias "$CM_KEY_ALIAS" -keypass:env CM_KEY_PASSWORD -file /dev/null >/dev/null 2>&1; then
  echo "ERROR: the key alias exists, but the key password given at upload does not unlock it."
  exit 1
fi
echo "Keystore check passed: preceptor_upload_key opens, its alias exists and its key password unlocks it."
