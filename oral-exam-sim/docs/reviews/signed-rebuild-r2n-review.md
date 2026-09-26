# Review of signed-duplicate rebuild r2n

Reviewer brief: scratchpad/signed-rebuild-review-brief.md, including the two landing rules. Writer report: docs/reviews/signed-rebuild-r2n.md. Prior review: docs/reviews/signed-rebuild-g14b-review.md, which failed the SAMP on q1 scoring. File: `src/samps/s12/infectious-diseases.ts`. One SAMP: infectious-diseases-02, cluster 3, keeper pediatric-fever-04.

**Verdict: PASS.** Every g14b point is fixed. The keyed decisions and story are unchanged from g14b, so the g14b findings on sources, decision search and simcheck still apply.

**No edits were made.** I tried to add brand name penicillin match phrases to the dangerous ampicillin item (see q1). The permission classifier refused the write to the shared SAMP file, and it also refused `python3 scratchpad/simcheck.py`. The recommendation below is not applied. The vitest and tsc runs were allowed.

## Structure and scope

- Same id, topic and four questions. Kinds short, single, short, menu. Key features ID 1, ID 1, ID 3, ID 10, as at HEAD.
- `...META`, then `version: 2` and `reviewed: false`.
- Held back in `src/samps/held-back/g14b.json`, which matches HEAD.
- `git diff HEAD` on the file has two hunks. One is the `S` constants (adds chorio, cpsEos, mbGbs, and removes idsaMening, escmidMening, phacMening, ssc2026, cigMpox, phacMpox, none of which is referenced elsewhere in s12). The other is infectious-diseases-02. No other SAMP in the file differs from HEAD.
- House style: no em or en dashes and no semicolons in the added lines.

## Keeper and D1

- **Keeper (markQuestion).** pediatric-fever-04 answers: "ceftriaxone 100 mg/kg IV / vancomycin 15 mg/kg IV" scores q1 1/2 (ceftriaxone unacceptable). "vancomycin 15 mg/kg / give immediately before LP" scores 1/2. Droplet precautions, public health, contact chemoprophylaxis, contact vaccination, rifampin and staff prophylaxis all score q3 0/2. q2 and q4 have no keeper decision. In q2, "Antibiotics now" appears in two options, so the keeper's "treat immediately" does not decide the key. The keeper's answers cannot earn full marks.
- **D1.** The working tree D1 table has 19 rows and does not list infectious-diseases-02. This rebuild adds no D1 row, and none is needed. The frozen limit of 20 is not touched.

## Rows

| Q | Result | Notes |
|---|---|---|
| q1 | PASS | **g14b fix confirmed.** Two items at `required: 2`: `gpos` (vancomycin or clindamycin) and `gent`. Probes: "vancomycin / clindamycin" 1/2, "gentamicin / acetaminophen" 1/2, "vancomycin / acetaminophen" 1/2, "vancomycin 1 g IV q12h / gentamicin 5 mg/kg IV q24h" 2/2, "vanc 1 g / gent 390 mg" 2/2. Only the full regimen scores 2/2. The prompt no longer asks for a dose. **Hold antibiotics** is now caught: "hold antibiotics until after delivery", "hold antibiotics until delivery", "give antibiotics after delivery" and "postpone antibiotics until after birth" all score 0/2 as dangerous. "do not delay antibiotics" is not flagged. **Unrequested narrowing of the ampicillin item: safe.** Bare "penicillin" zeroed the correct line "vancomycin 1 g IV (penicillin anaphylaxis)", which now scores 2/2. Ampicillin, amoxicillin, amoxicillin-clavulanate and "penicillin G 5 million units" are still dangerous. "penicillin G", "IV penicillin", "penicillin G 5 MU", "pip-tazo", "Zosyn", "Unasyn" and "amp 2 g" now escape the dangerous flag. They still score 0 for that line, so no wrong answer gains marks. The only loss is that the question is not zeroed (1/2 with gentamicin instead of 0/2). **Recommended, not applied (write refused):** add "pip tazo", "tazocin", "zosyn", "unasyn", "augmentin", "clavulin" and "cloxacillin" to the dangerous item. None can match a correct answer. Plain "penicillin g" or "penicillin iv" should not be added, because the matcher ignores word order and would flag "vancomycin 1 g IV, penicillin anaphylaxis". **Remaining scorer limits: acceptable.** "vancomycin instead of ampicillin / gentamicin" scores 0/2, and a dangerous line cannot be overridden. "vancomycin, no ampicillin" and "vancomycin in place of penicillin" score 2/2. Ampicillin after anaphylaxis is the central safety error, so keeping the flag is worth more than this uncommon phrasing. The new negation-word phrases also flag "do not hold antibiotics until delivery" and "don't withhold antibiotics until delivery" as dangerous, and the g14b phrase flags "continue antibiotics after delivery". None of these lines names a drug, so each could only move a 1/2 to 0/2. |
| q2 | PASS | Unchanged from g14b, which passed it. "Antibiotics now, aiming for vaginal birth" scores 1/1. |
| q3 | PASS | **g14b fix confirmed.** The item reads "No adequate prophylaxis, since she has had none and vancomycin would not count". The explanation carries the CPS sentence that clindamycin or vancomycin counts as inadequate prophylaxis. "no IAP", "inadequate IAP", "hasn't received IAP", "she has not had antibiotics", "pyrexia" and "febrile" now match. Keeper answers score 0/2. "preterm" is unacceptable. |
| q4 | PASS | **g14b fix confirmed.** The prompt now starts "Which of the following" and names the Manitoba protocol. The explanation says that CPS offers risk based prophylaxis only when the swab result is unknown, so option 0 is Manitoba specific. The key [0, 1, 6] is unchanged and scores 3/3. |

## Tests

- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- `npx tsc --noEmit -p .`: clean.
- `simcheck.py`: refused by the permission classifier. The story is unchanged from g14b, whose simcheck top match was pediatric-fever-16 at 0.24/0.09.

## For the physician

- **q1 now scores only the full regimen**: vancomycin or clindamycin plus gentamicin. A candidate who writes a penicillin G, piperacillin-tazobactam or ampicillin-sulbactam brand still loses the gram positive point, but the question is no longer zeroed for those names. Adding the brand names above would restore that.
- **"Vancomycin instead of ampicillin" scores 0/2** and cannot be overridden, because the scorer reads it as naming ampicillin. Writing "no ampicillin" or "vancomycin" alone scores correctly. We judge this acceptable. Please say if you would rather drop the dangerous flag on ampicillin.
- The g14b questions are still open: the vancomycin dose in the explanation (1 g q12h vs 20 mg/kg q8h), whether you want a Manitoba-specific indication tested in q4 option 0, and whether q3 should move to `required: 3` to reduce overlap with pediatric-fever-16 q1.

## Landing decision

infectious-diseases-02 lands. It uses no D1 repeat. The recommended extra dangerous match phrases (pip tazo, tazocin, zosyn, unasyn, augmentin, clavulin, cloxacillin) were not applied, because the edit was refused and no one else may write it unreviewed. Without them no wrong answer gains marks. Those lines score 0 but do not zero the question. They are listed for the physician.
