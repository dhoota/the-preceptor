# Bank-wide scoring rulings

Rules that apply to every SAMP, not only the one where they were first made. A writer must read this file before changing any match phrase, accept item or unacceptable item. A reviewer must FAIL a change that breaks one of these rules unless the writer names the rule and gives a reason.

| # | Ruling | Why | Source |
|---|---|---|---|
| 1 | Do not flag "epinephrine 1 mg iv", "epinephrine iv bolus" or similar route-plus-dose phrases as dangerous. Flag only IV push forms ("epinephrine iv push", "epinephrine 1 mg iv push") and 1:10,000 forms. | A correct line such as "epinephrine 0.5 mg IM, then 1 L IV bolus" matched the broader phrase and zeroed the question with no override. multiple-trauma-06 reversed this in round 2 (r2p) because the ruling was not visible, and it was reverted in r2u. | docs/reviews/samps-s03.md, "All files, dangerous IV epinephrine phrases" |
| 2 | The scorer does not read "rather than", "instead of", "over", "in place of", "versus" or "in preference to" as negation. Do not rely on them in probes of correct answers. Expect a correct "X rather than Y" line to trip Y's unacceptable or dangerous item. | Engine limit, open for Arjan. | docs/SCORER-NEGATION.md |
| 3 | The scorer ignores word order. A phrase matches when all its words appear anywhere in the line. A phrase that contains a negation word matches regardless of where the negation sits. | Negation-carrying phrases let lines that reject the key score (asthma-copd-01, r2q). | docs/reviews/signed-rebuild-r2q-review.md |
| 4 | Do not put ratios or comma-grouped numbers (1:10,000, 5,760, 06:30) in match phrases. Use the plain form (1:10000, 5760). | The tokeniser splits them into separate numbers, so "epinephrine 1:10,000" matched a correct "1:1,000 ... 10 minutes" line and zeroed it (multiple-trauma-06, r2u review). | docs/reviews/signed-rebuild-r2u-review.md |

More rulings are being collected from earlier batch and conformance reviews and will be added below.
