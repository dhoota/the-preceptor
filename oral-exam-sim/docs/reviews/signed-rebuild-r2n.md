# Signed-duplicate rebuild r2n

One SAMP: infectious-diseases-02 in `src/samps/s12/infectious-diseases.ts`, cluster 3, keeper pediatric-fever-04. This is round 2 of the g14b rebuild. It fixes the reasons in docs/reviews/signed-rebuild-g14b-review.md. The story (intraamniotic infection at term in a GBS-positive mother with penicillin anaphylaxis) and the keyed decisions are unchanged.

## Structure kept

- Same id, topic and four questions. Kinds are short, single, short and menu. Key features are ID 1, ID 1, ID 3 and ID 10.
- `...META`, then `version: 2` and `reviewed: false`, as in g14b. Title unchanged.
- Held back in `src/samps/held-back/g14b.json`, not edited. No other SAMP and no source constant was changed.

## Changes

| Q | Change |
|---|---|
| q1 | Accept list restructured to two items at `required: 2`. `gpos` merges vancomycin and clindamycin into one gram positive item. `gent` is gentamicin. Full marks now need both. Acetaminophen moved out of the key into the explanation. |
| q1 | Abbreviations added: vanc, vanco, clinda (to `gpos`) and gent (to `gent`). |
| q1 | Prompt changed to "What antibiotics do you start now to treat her infection?", because dose is not scored. |
| q1 | Dangerous "hold antibiotics" item now also matches "hold antibiotic until delivery", "hold antibiotic until birth", "withhold antibiotic until delivery", "delay antibiotic" and "defer antibiotic". Phrases that contain the negation word itself bypass the scorer's negation check. |
| q1 | Bare "penicillin" removed from the dangerous ampicillin item, which otherwise zeroed "vancomycin, given penicillin anaphylaxis". It now matches ampicillin, amoxicillin, piperacillin, benzylpenicillin, "pen g", "penicillin million unit" and "penicillin 5 million". |
| q1 | Explanation says full marks need both parts of the regimen, and that acetaminophen treats the fever but is not part of the antibiotic regimen. |
| q3 | Item text is now "No adequate prophylaxis, since she has had none and vancomycin would not count". Matches added: "no adequate", "no iap", "inadequate iap", "not iap", "not antibiotic", "not prophylaxis", "not received", "hasnt iap", "hasnt antibiotic", "hasnt prophylaxis". "pyrexia" and "febrile" added to the fever item. |
| q3 | Explanation uses the review's sentence: adequate only with penicillin G, ampicillin or cefazolin at least 4 hours before birth, and CPS counts clindamycin or vancomycin as inadequate when managing the newborn. |
| q4 | Prompt now starts "Which of the following": "Which of the following situations call for intrapartum prophylaxis against group B streptococcus under the Manitoba protocol?" The stem still names Manitoba. |
| q4 | Explanation adds that CPS offers risk based prophylaxis only when the swab result is unknown, so the fever with a negative swab follows the Manitoba protocol and is Manitoba specific. Key [0, 1, 6] unchanged. |

## markQuestion probes (vite-node, engine `markQuestion`)

| Q | Lines | Score | Line marks |
|---|---|---|---|
| q1 | vancomycin / clindamycin | 1/2 | gpos, none |
| q1 | gentamicin / acetaminophen | 1/2 | gent, none |
| q1 | vancomycin / acetaminophen | 1/2 | gpos, none |
| q1 | vancomycin 1 g IV q12h / gentamicin 5 mg/kg IV q24h | 2/2 | gpos, gent |
| q1 | clindamycin 900 mg IV q8h / gentamicin 390 mg IV | 2/2 | gpos, gent |
| q1 | vanc 1 g IV / gent 390 mg | 2/2 | gpos, gent |
| q1 | vanco / gent | 2/2 | gpos, gent |
| q1 | clinda 900 mg / gent 5 mg/kg | 2/2 | gpos, gent |
| q1 | Vancomycin 1 g IV given penicillin anaphylaxis / gentamicin | 2/2 | gpos, gent |
| q1 | vancomycin / avoid penicillins and cephalosporins | 1/2 | gpos, none (not flagged) |
| q1 | vancomycin / hold antibiotics until after delivery | 0/2 | gpos, DANGEROUS |
| q1 | gentamicin / delay antibiotics until after birth | 0/2 | gent, DANGEROUS |
| q1 | vancomycin / do not delay antibiotics | 1/2 | gpos, none (not flagged) |
| q1 | ampicillin 2 g IV / gentamicin | 0/2 | DANGEROUS, gent |
| q1 | cefazolin 2 g IV / gentamicin | 1/2 | unacceptable, gent |
| q1 | Keeper: ceftriaxone 100 mg/kg / vancomycin 15 mg/kg | 1/2 | unacceptable, gpos |
| q3 | GBS positive / no IAP | 2/2 | gbs, noiap |
| q3 | GBS positive / inadequate IAP | 2/2 | gbs, noiap |
| q3 | GBS positive / hasn't received IAP | 2/2 | gbs, noiap |
| q3 | ROM 26 hours / she has not had antibiotics | 2/2 | rom, noiap |
| q3 | febrile / no adequate prophylaxis | 2/2 | fever, noiap |
| q3 | Keeper: droplet precautions / prophylaxis for contacts | 0/2 | none, none |
| q3 | Keeper: public health / rifampin | 0/2 | none, none |
| q4 | [0, 1, 6] | 3/3 | |
| q4 | [0, 1, 2] | 2/3 | |

## Keeper check

I read pediatric-fever-04 in src/samps/s14/pediatric-fever.ts. It keys a petechial rash feature, ceftriaxone 100 mg/kg with vancomycin 15 mg/kg given before LP, droplet precautions, public health notification, contact chemoprophylaxis, staff prophylaxis, contact vaccination and sibling prophylaxis. No question keys any of these. The keeper's answers score at most 1/2 in q1 (vancomycin alone, with ceftriaxone flagged unacceptable) and 0/2 in q3. q2 and q4 have no keeper decision.

## Checks

- `SAMP_BATCH=s12 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 474 passed.
- `npx tsc --noEmit -p .`: clean.

## For the physician

- q1 now scores only the full regimen: a gram positive substitute (vancomycin or clindamycin) plus gentamicin.
- One scorer limit remains. A line that names ampicillin in a positive sense, such as "vancomycin instead of ampicillin", is flagged as dangerous. "No ampicillin" and "avoid ampicillin" are read as negations and are not flagged.
- The open questions from the g14b review still stand: the vancomycin dose in the explanation (1 g q12h vs 20 mg/kg q8h), whether you want to test a Manitoba-specific indication in q4 option 0, and whether q3 should go to `required: 3` to reduce the overlap with pediatric-fever-16 q1.
