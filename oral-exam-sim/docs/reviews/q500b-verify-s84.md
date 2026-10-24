# Q500B verification review: s84 Environmental (Revision 1)

Reviewer: fresh independent QA agent. I did not write, edit or first-review this batch. File reviewed: `src/samps/s84/environmental.ts` (environmental-39 to environmental-43, 22 questions: 21 single, 1 menu). I reviewed the whole final batch, not only the changes, against SAMP_REVIEW_BRIEF lenses A and B, REVIEW-RULES, SCORING-RULINGS (section B) and the Q500B brief. Read with `docs/reviews/q500b-qa-s84.md` (first review) and `docs/reviews/q500b-writer-s84.md` (with "Revision 1").

## Tests

`SAMP_BATCH=s84 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 136 of 136 passed. The bank-wide near-duplicate stem test passed in 5.6 s.

## First-review fails: all resolved

| Item | First-review fail | Status |
|---|---|---|
| 39 q1 | Cool before tests, fifth keying | Resolved. Removed. The new q1 update says cooling is under way, so cooling first is not tested. No D1 slot used. |
| 39 q4 | Hemodialysis repeat of tox-07 q2, EXTRIP level criterion misquoted | Resolved. Removed. No EXTRIP dialysis key or level-above-4.0 claim remains anywhere in the SAMP. |
| 40 q1 | "Lying BP" not in the stem | Resolved. Now "Her BP of 104/60 mmHg". |
| 40 q3 | Update gave the q2 38.9°C key | Resolved. Update now "Cooling is completed". |
| 40 q5 | Overstated NATA on transport | Resolved. The text matches the first reviewer's wording and NATA. |
| 41 q2 | Update named the q1 key | Resolved. Update now "Ultrasound shows...". Remaining weak cue (a femoral pulse is felt) is flagged under B6, acceptable. |
| 42 q4 | 12 to 24 hour sentence not in UHMS | Resolved. Deleted. The explanation rests on UHMS alone, which I confirmed (PDF text: "72 hours if no residual S/S"). |
| 43 q2 | AC tetany mechanism repeat of msk-03 q2 and s36 | Resolved. Replaced with the extent of the examination for hidden injury. q1 is now the only shoulder question. |

Unrequested changes (REVIEW-RULES rule 4): Bouchama 2022 removed (no longer cited, correct), Health Canada 2011 added (verified below), Bailey URL added (verified). All acceptable.

## Sources verified

| Source | How checked | Result |
|---|---|---|
| Health Canada 2011, Extreme heat events guidelines (new) | WebFetch of the canada.ca page, read in three windows (characters 0 to 300000 of 437020) | Exists. Supports: lithium levels "higher in summer", "11.5% of lithium poisonings requiring hospitalization were due to summer heat exposure and consequent dehydration", "Hydrate with water rather than an electrolyte solution to minimize potential hypernatremic complications" and Table 4.2 "Stay hydrated throughout the day", "Drink water". Also "Air conditioning has been shown to be one of the most protective factors", mixed fan evidence, hot air warming a person by convection when air is above 36°C, fans counter-productive in high heat and humidity, public air-conditioned places, and "a plan in place to check on those individuals daily". |
| Smith 2026, Cureus, PMC13179728 | WebFetch | Exists. Supports the thorough musculoskeletal examination with "significant injury may occur in the absence of visible entry or exit wounds" (new 43 q2), posterior shoulder dislocation as the most commonly described joint injury, CBC, CMP and CK, troponin not helpful, normal CK and creatinine in discharge criteria, and "Early consultation with a burn center or burn surgery team is recommended for all electrical burns". |
| Bailey 2007, Emerg Med J, PMC2658483 | WebFetch | Exists. Title, authors, 21 EDs, 134 patients and conclusion match the 43 q3 explanation. |
| UHMS 2011 DCS and AGE PDF | curl and pdftotext | Exists. "Avoid dextrose-containing fluids", "No aspirin", "No lidocaine" (DCS section), "72 hours if no residual S/S". |
| Decker 2015 EXTRIP, Casa 2012 NATA, Paal 2022, Lampropoulou 2024 | Not reopened (WebFetch budget). Verified in full text by the first reviewer, and the claims citing them are unchanged or were rewritten to the first reviewer's verified wording. | Accepted on the first review's verification. Not independently reopened by me. |

Recomputed: alpha-stat correction for 41 q3 (9.1°C: pH +0.137 to 7.33, PaCO2 x 0.66 to about 37) is consistent. Urine target 42 q3 (84 to 168 mL/hour at 84 kg) is correct. Creatinine 71 to 162 is 2.3 times, so "more than doubled" is correct. Cooling rates (39 q2 0.06°C/minute with ice packs, spray and fans, 40 q2 0.13°C/minute in ice water) and the rewarming rate in 41 q4 (27.9 to 31.6°C over about 2 hours) are plausible. "He is now at 48 hours" in 42 q4 matches "two days after treatment". Single key positions 0 to 4 are 5, 3, 4, 4, 5. Keys that are strictly the longest option: 39 q4, 40 q5, 42 q1, 43 q1 (4 of 21, 19%), well under the limit.

## Bank-wide repeat search

Keyword searches over `src/samps` and `src/cases` (all batches, Q500B included): lithium, air condition, fan, electric fan, sports drink, electrolyte solution, rehydration salt, check-in, sickling, sickle cell trait, alpha-stat, end-tidal, 1 minute pulse check, flying, cool first, musculoskeletal examination, electrical injury, electric shock.

- 39 q3 and q4: no item in the bank keys lithium hydration advice or fan against air conditioning. The nearest are s09 environmental (heat wave, no air conditioning as a risk factor) and the batch15 oral case (discharge to a cooled setting). Not repeats.
- 40 q4: s36 environmental-20 q1 lists "Exertional sickling collapse" as a distractor but keys heat stroke. 40 q4 keys sickling. Not a repeat.
- 40 q2: signed environmental-01 q3 (write-in) accepts removal from the water at about 39°C. 40 q2 tests that shivering and clearer thinking are not the end point. Teaching overlap only, as the first reviewer found. Passed.
- 41: no other item keys the 1 minute check, weight-based ventilation or alpha-stat.
- 42 q4: signed s09 "Vertigo after a morning dive" keys the DAN interval after uneventful diving. 42 q4 keys the interval after treatment. Distinct.
- 43 q2: signed environmental-13 q1 (s09, write-in) lists hidden injuries, including fractures and dislocations from tetany. 43 q2 tests the extent of the examination, not the list. Teaching overlap, passed with a note. No other electrical item keys the musculoskeletal examination.

## Verdicts

### environmental-39 Found confused on the couch: FAIL (3 questions)

**q1: PASS.** Lithium level is the best test for a second cause. Reasons for the distractors hold. KF2 (consider overdose and other causes while cooling) is a good fit.

**q2: FAIL (distractor reason not true, Lens A2, medium confidence).** The explanation says "She takes no serotonergic drug". Lithium itself is listed as a serotonergic agent that can contribute to serotonin toxicity, and tremor and myoclonus are serotonin toxicity features, so this reason is wrong as written. The key still holds. Fix: replace that clause with "Lithium can add to serotonin toxicity, but she takes no other serotonergic drug, and her toxic lithium level explains her findings." Keep the Wernicke sentence unchanged.

**q3: FAIL (mock-mode cue, rule B6, high confidence).** The update opens "She is admitted and treated for lithium toxicity", which names the q2 key (lithium neurotoxicity as the cause of her confusion) when all questions show at once. q3 does not need that fact. The stem already names lithium. Fix: change the update to "She is admitted and recovers over 4 days. Her psychiatrist plans to continue lithium. The heat warning has been extended for 3 more days." The key, options and explanation hold otherwise. They match Health Canada 2011 exactly.

**q4: FAIL (explanation contradicts the stem, Lens B1, medium confidence).** The explanation says a fan warms the body by convection "once the air is hotter than the skin, about 36°C", then says a fan in an apartment that reaches 33°C does not protect her. At 33°C the air is cooler than the skin, so by the explanation's own reasoning (and Health Canada's, which says a fan helps convective heat loss when the air is cooler than the skin) the fan would help. Fix: change the update to "Her apartment reached 37°C this afternoon." and change "33°C" to "37°C" in the explanation. The rest holds under Health Canada 2011. Optional, under B1: the key "Stay in an air-conditioned place" is the longest option (32 against 30). It could become "Air-conditioned place by day" or a distractor could gain a real detail, but the batch rate is low and this is not required.

### environmental-40 A runner carried into the medical tent: PASS

**q1: PASS.** Exertional heat stroke. The BP fix is in. Overlap with environmental-01 q1 and s36 environmental-20 q1 noted by the first reviewer. The new point (sweating and subtle disorientation still count) holds.

**q2: PASS.** Continue immersion to 38.9°C is from NATA. B6 flag (the update implies the q1 key) stays as flagged.

**q3: PASS.** The update cue is fixed. Transport after on-site cooling fits NATA for a minor in a tent with no laboratory. Physician note kept (see below).

**q4: PASS.** Exertional sickling matches NATA on each feature.

**q5: PASS.** The rewritten explanation matches NATA's conditional wording and the stem.

### environmental-41 Found on a bench at dawn: PASS

**q1: PASS.** 1 minute check with ECG, end-tidal CO2 and POCUS, from Paal. He breathes 4/minute with an organized rhythm, so compressions are not first.

**q2: PASS.** The cue is fixed. The remaining weak cue is flagged under B6. Weight-based standard settings are keyed, and the end-tidal CO2 of 21 mmHg against a PaCO2 of 55 mmHg in q3 is consistent with the widened gap the explanation describes.

**q3: PASS.** Alpha-stat numbers agree.

**q4: PASS.** Rectal lag, with the esophageal probe at about 40 cm.

### environmental-42 Breathless after a wreck dive: PASS

**q1: PASS.** Chokes, with AGE timing from Lampropoulou.

**q2: PASS.** Oxygen at 15 L/minute, supine, and no aspirin, corticosteroids or lidocaine, from UHMS (rechecked in the PDF).

**q3: PASS.** Isotonic fluid titrated to BP and 1 to 2 mL/kg/hour urine, and no dextrose. The borderline overlap with s09 is noted as before.

**q4: PASS.** The fix is in. 72 hours with no residual signs, from UHMS (rechecked in the PDF).

### environmental-43 A shock while replacing an outlet: PASS

**q1: PASS.** Posterior dislocation. The overlap with msk-03 q1 is noted as before. It is now the only shoulder question.

**q2 (new): PASS.** A full musculoskeletal examination is quoted in substance from Smith 2026 ("significant injury may occur in the absence of visible entry or exit wounds"). Distractor reasons hold. The skin survey is a needed part of the assessment, but the lead-in asks for the extent of the examination for other injuries, and a skin survey alone does not find skeletal injury, so the key is the single best answer. Teaching overlap with environmental-13 q1 (write-in list of hidden injuries) is noted, but the keyed decision differs.

**q3: PASS.** Matches Bailey 2007 (rechecked).

**q4: PASS.** CBC, electrolytes with creatinine and CK, from Smith.

**q5: PASS.** Burn centre consultation for all electrical burns, quoted from Smith.

## House style

There are no em or en dashes, no semicolons in text, no mnemonics and no personal names. Canadian forms are used (centre, litre, analyser). There are no "all" or "none of the above" options.

## Needs physician decision

- environmental-39 q3 and q4 are tagged KF2. They test discharge prevention after severe hyperthermia on a drug that impairs heat tolerance, not the cooling or the search for other causes that KF2 names. The Q500B brief asks for disposition across each key feature's breadth, and no other KF fits, so I pass the tag. A physician should confirm it.
- environmental-40 q3: hospital transport after full recovery on site (NATA). Some mass-event protocols release recovered runners. Carried from the first review.
- environmental-40 q5: KF1 tag for sickling management. Carried from the first review.
- environmental-42 q3, environmental-43 q1 and q2: borderline teaching-point overlaps with signed s09 items and msk-03 q1. Passed with low confidence.

## Summary

22 questions reviewed: 19 PASS, 3 FAIL, all in environmental-39. The fails are a mock-mode cue (39 q3), an explanation reason that contradicts the stem's own temperature (39 q4) and a distractor reason that is not true (39 q2, lithium is serotonergic). No keyed answer is clinically wrong. All 8 first-review fails are resolved. Key feature coverage (KF1 5, KF2 4, KF3 4, KF4 4, KF5 5) and position balance are intact, and the fixes do not change them. Sources I could not reopen this round (WebFetch budget): Decker 2015 EXTRIP, Casa 2012 NATA, Paal 2022 and Lampropoulou 2024. All four were verified in full text by the first reviewer, and the claims that cite them are unchanged.

Overall: FAIL (3 items)
