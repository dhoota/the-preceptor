#!/bin/bash
# Usage: tripcheck.sh sNN lensA|lensB  -> checks the lens report names both planted ids, then removes the extra file
b=$1; lens=$2; cd /home/user/the-preceptor/oral-exam-sim
t=/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/tripwires/$b.json
r=docs/reviews/samps-$b-$lens.md
a=$(python3 -c "import json;print(json.load(open('$t'))['wrongKey']['id'])"); c=$(python3 -c "import json;print(json.load(open('$t'))['inventedFinding']['id'])")
ok=1
{ grep -q "$a" $r || grep -qE "^\| *${a##*-}( \(extra\))? *\|" $r; } && echo "caught wrong key $a" || { echo "MISSED wrong key $a"; ok=0; }
{ grep -q "$c" $r || grep -qE "^\| *${c##*-}( \(extra\))? *\|" $r; } && echo "caught invented finding $c" || { echo "MISSED invented finding $c"; ok=0; }
cp $t /tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/tripwires/$b-$lens-result.json 2>/dev/null
rm -f src/samps/$b/review-extra.ts
# strip tripwire rows from the report is not needed: they document calibration
[ $ok = 1 ] && echo "CALIBRATED $b $lens" || echo "FAILED CALIBRATION $b $lens"
