#!/bin/bash
# Usage: finish-exp.sh sNN "topic name"
set -e
b=$1; cd /home/user/the-preceptor/oral-exam-sim
[ -f src/samps/$b/review-extra.ts ] && { echo "tripwire file still present"; exit 1; }
for r in writer-$b samps-$b-lensA samps-$b-lensB; do [ -f docs/reviews/$r.md ] || { echo "missing $r"; exit 1; }; [ "$(grep -c '[—–;]' docs/reviews/$r.md)" = "0" ] || { echo "style issue $r"; exit 1; }; done
extra=$(ls src/samps/$b | grep -v '\.ts$' || true); [ -z "$extra" ] || { echo "stray files: $extra"; exit 1; }
grep -rq "reviewed: true" src/samps/$b && { echo "new SAMPs must be reviewed: false"; exit 1; }
r=$(SAMP_BATCH=$b npx vitest run tests/samps.test.ts tests/samp-quality.test.ts 2>&1 | grep -E "Tests ")
echo "$b gates: $r"; { echo "$r" | grep -q passed && ! echo "$r" | grep -q failed; } || { echo "NOT COMMITTING $b"; exit 1; }
t=$(python3 -c "import json;d=json.load(open('docs/samp-expansion.json'));print(d.get('batches',d)['$b']['topic'])")
n=$(grep -hoE "\"?id\"?: \"$t-[0-9]+\"" src/samps/$b/*.ts | sort -u | wc -l | tr -d " ")
[ "$n" -gt 0 ] || { echo "count failed"; exit 1; }
cd ..
git add oral-exam-sim/src/samps/$b oral-exam-sim/docs/reviews/writer-$b.md oral-exam-sim/docs/reviews/samps-$b-lensA.md oral-exam-sim/docs/reviews/samps-$b-lensB.md
git commit -q -m "SAMPs $b: $2, $n new in the 2027 MCQ format

Written to SAMP_SPEC, then reviewed by two independent lenses (clinical
truth, then internal consistency and numbers), each calibrated with
planted defects it had to catch. All quality gates pass. All new SAMPs
are reviewed: false.

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_016nbThuVLjmLnfy9tzkMcir"
git push -q origin claude/oral-exam-sim
git log --oneline -1
