# Q500B verification review 2: s84 Environmental (Revision 2)

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before. File reviewed: `src/samps/s84/environmental.ts` (environmental-39 to environmental-43, 22 questions: 21 single, 1 menu). I reviewed the whole final batch, not only the Revision 2 changes. I read it with `q500b-qa-s84.md` (first review), `q500b-verify-s84.md` (verification 1) and `q500b-writer-s84.md` (Revisions 1 and 2).

## Tests

`SAMP_BATCH=s84 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 136 of 136 passed. The bank-wide near-duplicate stem test passed in 7.7 s.

## Earlier fails: all resolved

| Item | Earlier fail | Status |
|---|---|---|
| 39 q1 (first review) | Cool before tests, repeat | Resolved. Removed. Cooling is now shown in the update, not tested. |
| 39 q4 (first review) | Hemodialysis repeat of tox-07 q2, EXTRIP misquote | Resolved. No EXTRIP dialysis key or level criterion remains. |
| 40 q1 (first review) | "Lying BP" not in stem | Resolved. Now "Her BP of 104/60 mmHg". |
| 40 q3 (first review) | Update gave the 38.9°C end point | Resolved. "Cooling is completed". |
| 40 q5 (first review) | Overstated NATA on transport | Resolved. Matches NATA's conditional wording, which I reread. |
| 41 q2 (first review) | Update named the q1 key | Resolved. Now opens "Ultrasound shows". The weak remaining cue is flagged under B6. |
| 42 q4 (first review) | 12 to 24 hour sentence | Resolved. Deleted. |
| 43 q2 (first review) | AC tetany mechanism repeat | Resolved. Replaced with the extent of the examination. |
| 39 q2 (verify 1) | "She takes no serotonergic drug" not true | Resolved. Now "Lithium can add to serotonin toxicity, but she takes no other serotonergic drug, and her toxic lithium level explains her findings." The Wernicke sentence stands on its own. |
| 39 q3 (verify 1) | Mock cue: update named lithium toxicity treatment | Resolved. The update now reads "She is admitted and recovers over 4 days. Her psychiatrist plans to continue lithium. The heat warning has been extended for 3 more days." That is word for word the fix asked for. The diagnosis is not named. |
| 39 q4 (verify 1) | 33°C apartment contradicted the fan reasoning | Resolved. Update and explanation now read 37°C, which is above the 34 to 36°C skin threshold Health Canada gives, so the reasoning holds. The key now reads "Stay somewhere air-conditioned" (30 characters), the same length as "Fan with windows open at night", so it is no longer the single longest option. |

No change outside environmental-39 in Revision 2. I found no unrequested edits.

## Sources verified this round

| Source | How checked | Result |
|---|---|---|
| Health Canada 2011, Extreme heat events guidelines | WebFetch, characters 0 to 300000 | Supports lithium "higher in summer", "11.5% of lithium poisonings requiring hospitalization were due to summer heat exposure and consequent dehydration", "Hydrate with water rather than an electrolyte solution to minimize potential hypernatremic complications". It also supports "Air conditioning has been shown to be one of the most protective factors", the mixed evidence on fans, convective cooling from a fan only when the air is cooler than the skin (about 34 to 36°C), fans counter-productive when sweat cannot evaporate, public air-conditioned places, and "a plan in place to check on those individuals daily". |
| Decker 2015 EXTRIP, PMC4422246 | WebFetch | Supports volume depletion raising proximal tubular reabsorption, and "coma, convulsions, myoclonus" in severe cases with neurotoxicity mostly in chronic poisoning (39 q1, q2). |
| Casa 2012 NATA, PMC3418121 | WebFetch | Supports EHS criteria (above 40°C with CNS dysfunction), removal at 38.9°C, cool first and transport second, sickling within the first half hour with slumping, weak muscles and core temperature not greatly raised, oxygen 15 L/min by non-rebreather, conditional transport, and explosive rhabdomyolysis (40 q1 to q5). |
| Paal 2022, PMC8744717 | WebFetch | Supports the 60 second check with ECG, ETCO2 and ultrasound, "standard weight-based settings without relying on ETCO2", alpha-stat, rectal and bladder lag, and the esophageal probe in the lower third at about 40 cm (41 q1 to q4). |
| Lampropoulou 2024, PMC11044526 | WebFetch | Supports "inspiratory burning sensation and substernal discomfort", dry cough and breathlessness in chokes, and cerebral AGE "within 10-20 minutes after surfacing" (42 q1). |
| UHMS 2011 PDF, Smith 2026 (PMC13179728), Bailey 2007 (PMC2658483) | Not reopened by me (WebFetch budget). Verification 1 checked all three in full text, and the claims that cite them have not changed since. | Accepted on verification 1. |

Recomputed: the alpha-stat correction in 41 q3 (9.1°C: pH 7.19 + 0.137 = 7.33, PaCO2 55 x about 0.67 = 37) is consistent. The urine target in 42 q3 (1 to 2 mL/kg/hour at 84 kg = 84 to 168 mL/hour) is correct. Creatinine 71 to 162 is 2.3 times, which matches "more than doubled". Cooling rates (39 about 0.06°C/minute, 40 about 0.13°C/minute) and rewarming in 41 q4 are plausible. Single key positions 0 to 4: 5, 3, 4, 4, 5.

## Bank-wide repeat search

I searched keywords over `src/samps` and `src/cases`, including s85 to s88, which are newer than verification 1: lithium, air condition, sports drink, electrolyte solution, musculoskeletal exam, fan. No new repeats. s36 environmental (tetraplegia heat stroke) keys fans with mist and ice for cooling in the ED, not fans at discharge. s36 ultramarathon lists "Encourage oral sports drinks" for hyponatremia, a different decision. s44 multiple-patients uses no air conditioning only as history. The only s85 to s88 lithium hit, s88 ems, is not about lithium. The overlaps that earlier reviewers passed (environmental-01 q1 and q3, s36 environmental-20 q1, s09 diving and electrical items, msk-03 q1) are unchanged, and I agree with passing them.

## Verdicts

### environmental-39 Found confused on the couch: PASS
- q1: PASS. A lithium level is the test for a second cause, and EXTRIP supports the reasons.
- q2: PASS. The serotonin clause is now accurate. Lithium neurotoxicity is keyed, with a normal temperature, myoclonus, a level of 3.6 mmol/L and an AKI.
- q3: PASS. Water through the day, from Health Canada. Electrolyte solutions and salt are correctly rejected. The mock-mode cue is gone.
- q4: PASS. Air conditioning is keyed. The 37°C apartment is now consistent with the fan reasoning.

### environmental-40 A runner carried into the medical tent: PASS
- q1 to q5: PASS. Every claim matches NATA on reread. The B6 flag on q2 (the update implies q1) is weak and stays as flagged.

### environmental-41 Found on a bench at dawn: PASS
- q1 to q4: PASS. Every claim matches Paal on reread. The numbers are consistent.

### environmental-42 Breathless after a wreck dive: PASS
- q1 to q4: PASS. Chokes against AGE timing, from Lampropoulou. Oxygen, isotonic fluid without dextrose and 72 hours before flying, from UHMS (as verified in round 1).

### environmental-43 A shock while replacing an outlet: PASS
- q1 to q5: PASS. Posterior dislocation, the full musculoskeletal examination, no monitoring after a normal ECG (Bailey 2007), CBC with electrolytes, creatinine and CK, and burn centre consultation.

## House style

Python scan: no em or en dashes, and no semicolons in any string. No US spellings were found (color, center, behavior, liter, analyzer, pediatric). Canadian forms are used (centre, litre, analyser). There are no mnemonics, no personal names, and no "all" or "none of the above" options.

## Notes for physician judgement (not fails)

- 39 q3 and q4 are tagged KF2. They test heat-risk prevention at discharge in a patient on lithium, not cooling or the search for other causes. The tag is acceptable because no other key feature fits better.
- 39 q4: Health Canada also recommends cool showers or baths. The "Cool shower each evening" distractor is rejected only because it is less protective than air conditioning. A physician may want to confirm that this distractor is clearly inferior and not partly correct.
- 40 q3: transport to hospital after full recovery on site. Some mass-event protocols release recovered athletes.
- 40 q4 and q5: the KF1 tag for exertional sickling. KF2 is also defensible.
- 43 q3: Bailey 2007 supports no monitoring despite tetany and current across the chest. Some older texts still advise monitoring for transthoracic current, so a candidate trained on those may pick "ED cardiac monitoring for 6 hours".
- 42 q3, 43 q1 and 43 q2: teaching-point overlaps with signed s09 items and msk-03 q1, passed by earlier reviewers with low confidence.

## Sources I could not open this round

UHMS 2011 PDF, Smith 2026 and Bailey 2007 were not reopened because of the WebFetch budget. Verification 1 confirmed them in full text, and the cited claims are unchanged.

## Summary

22 questions reviewed: 22 PASS. All 8 first-review fails and all 3 verification-1 fails are resolved. No keyed answer is clinically wrong, and no new repeat, mock-mode cue or style breach was found.

Overall: PASS
