#!/usr/bin/env bash
#
# Move Dutch's Doggy Daycare out of the-preceptor and into its own repository.
#
# Why this script exists: creating a GitHub repository from the agent
# environment fails with `403 Resource not accessible by integration` — the
# GitHub App authorising those sessions does not hold repo-creation permission.
# So the one manual step is making an EMPTY repo on github.com. This script does
# everything after that.
#
# Usage, from a clone of the-preceptor with the game branch checked out:
#
#     ./scripts/move-to-own-repo.sh git@github.com:dhoota/dutchs-doggy-daycare.git
#
# or over HTTPS:
#
#     ./scripts/move-to-own-repo.sh https://github.com/dhoota/dutchs-doggy-daycare.git
#
# Create the repo first at https://github.com/new — name it
# `dutchs-doggy-daycare`, leave "Add a README" UNTICKED (an initialised repo
# gives you a merge conflict on the first push for no reason), private is fine.
#
# What this does:
#   1. verifies you are on the game branch and the tree is clean
#   2. makes a scratch branch with the Preceptor site's index.html removed, so
#      the new repo contains the game and nothing else
#   3. pushes that to `main` on the new remote
#   4. leaves your original branch and repo completely untouched
#
# It is safe to run twice: the second run force-updates the scratch branch
# rather than failing, and it never force-pushes the remote.

set -euo pipefail

REMOTE_URL="${1:-}"
BRANCH="claude/dog-care-game-dutch-ensogr"
SCRATCH="game-export"
REMOTE_NAME="game"

say()  { printf '\n\033[1m%s\033[0m\n' "$*"; }
die()  { printf '\n\033[31m✗ %s\033[0m\n' "$*" >&2; exit 1; }

[ -n "$REMOTE_URL" ] || die "Give me the new repo's URL.
  ./scripts/move-to-own-repo.sh git@github.com:dhoota/dutchs-doggy-daycare.git"

cd "$(dirname "$0")/.."

# ---------------------------------------------------------------- preflight
say "1/5  Checking the working tree"
git rev-parse --git-dir >/dev/null 2>&1 || die "not inside a git repository"

CURRENT="$(git rev-parse --abbrev-ref HEAD)"
if [ "$CURRENT" != "$BRANCH" ]; then
  echo "     on '$CURRENT', switching to '$BRANCH'"
  git checkout "$BRANCH" || die "no branch '$BRANCH' here — clone the-preceptor and fetch it first"
fi

if [ -n "$(git status --porcelain)" ]; then
  die "you have uncommitted changes. Commit or stash them, then run this again."
fi

[ -f www/index.html ] || die "www/index.html is missing — are you in the right repo?"
echo "     ✓ clean, on $BRANCH"

# ------------------------------------------------------------ sanity checks
say "2/5  Running the fast checks before publishing anything"
awk '/<script>/{f=1;next}/<\/script>/{f=0}f' www/index.html > /tmp/ddd-export-check.js
node --check /tmp/ddd-export-check.js || die "the game has a syntax error — not publishing that"
python3 scripts/validate.py >/dev/null || die "validate.py failed — not publishing that"
echo "     ✓ syntax and validation green"

# ------------------------------------------------------- build the export
say "3/5  Building the export branch"
# Force-create so a second run replaces the old scratch branch instead of dying.
git checkout -B "$SCRATCH" "$BRANCH" >/dev/null 2>&1

# index.html at the root is the Preceptor one-page site. It belongs to the other
# project and must not travel with the game. www/index.html is the game and is
# a different file entirely — do not confuse the two.
if git ls-files --error-unmatch index.html >/dev/null 2>&1; then
  git rm -q index.html
  git -c user.email="${GIT_AUTHOR_EMAIL:-noreply@example.com}" \
      -c user.name="${GIT_AUTHOR_NAME:-Dutch export}" \
      commit -q -m "Drop the Preceptor site — this repo is the game only

index.html at the root was the Preceptor one-page site and belongs to the other
project. The game is www/index.html, which is untouched."
  echo "     ✓ removed the Preceptor site from the export"
else
  echo "     ✓ no Preceptor site present, nothing to remove"
fi

# ------------------------------------------------------------ push it up
say "4/5  Pushing to $REMOTE_URL"
if git remote get-url "$REMOTE_NAME" >/dev/null 2>&1; then
  git remote set-url "$REMOTE_NAME" "$REMOTE_URL"
else
  git remote add "$REMOTE_NAME" "$REMOTE_URL"
fi

# Never force. If the remote already has commits, stop and let a human decide.
if ! git push -u "$REMOTE_NAME" "$SCRATCH:main"; then
  git checkout -q "$BRANCH"
  die "push rejected. If the new repo was created WITH a README, it already has a
commit and this push cannot fast-forward. Easiest fix: delete that repo, make a
new empty one with no README, and run this again."
fi

# --------------------------------------------------------------- clean up
say "5/5  Returning you to $BRANCH"
git checkout -q "$BRANCH"
echo "     ✓ your original branch is exactly as it was"

cat <<DONE

Done. The game now lives at:
  $REMOTE_URL   (branch: main)

Next:
  1. Point Codemagic at the new repo. It auto-detects codemagic.yaml.
     Nothing inside it needs changing — the bundle ID, the signing group and
     the workflows are all already correct.
  2. Run the android-debug workflow first. It needs no signing and proves the
     asset bundler works on a real runner.
  3. The scratch branch '$SCRATCH' is still here locally if you want to inspect
     what was published: git log $SCRATCH

DONE
