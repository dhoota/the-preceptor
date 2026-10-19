# Q500 fresh review, round 3: s64, Asthma/COPD

Fresh independent review by Preceptor of the round 3 revision. File `src/samps/s64/asthma-copd.ts`. This reviewer did not write, edit or review this batch before. It changed no SAMP, source or shared file (REVIEW-RULES rule 1). Both lenses were applied to 48, 49 and 51 in full, and 50 and 52 were checked for changes. Every item stays `reviewed: false`. This is an AI audit, not clinician verification.

Inputs: the round 2 verdict `docs/reviews/q500-verify2-s64.md`, the "Round 3" section of `docs/reviews/q500-writer-s64-r2.md`, and `git diff 1247e3a` on the file. The diff has 10 changed lines, all in 48 (stem, q2 explanation), 49 (q1 options and explanation) and 51 (q3, q4 update). Nothing changed in 50 or 52.

Checks run: `SAMP_BATCH=s64 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests). A script found no em or en dashes, smart quotes or micro signs. The only semicolons are TypeScript statement ends. Single key positions (first to fifth): 4, 4, 4, 3, 4 of 19, none above 25%.

Sources read by this reviewer, not taken from the writer's summary: the BTS/ICS 2016 PDF and the GINA 2026 PDF in the writer's download folder, extracted again here with a separate script. The BTS/ICS supplemental oxygen section (summary page and full text) and the GINA 2026 chapter 9 blood gas paragraph and chapter 3 outdoor allergen text were read.

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| asthma-copd-48 | PASS | PASS | PASS | PASS | PASS |
| asthma-copd-49 | PASS | PASS | PASS | PASS | PASS |
| asthma-copd-50 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| asthma-copd-51 | FAIL | PASS | PASS | FAIL | PASS |
| asthma-copd-52 | PASS (unchanged) | PASS | PASS | PASS | PASS |

Question counts: 19 pass, 1 fails. SAMPs: 4 pass, 1 fails. The s64 batch has not yet passed fresh review.

## Round 2 fixes

| Fix | Applied | Note |
|---|---|---|
| 51 q3 rebuild with a new KF7 decision | Yes, with a new defect | New decision: oxygen set-up during bilevel ventilation. Unique in the bank (below). The update now names the key by its own word, and the fall in saturation has no stated cause (required fix below). |
| 51 q4 update cue | Yes | "The leak is fixed." is gone. The update names nothing from q1 to q3. Key [3, 5] still correct against BTS/ICS (62% survival against 49% predicted, most survivors would choose it again). |
| 49 q1 stem and option agreement | Yes | Option now "Using about 10 inhalations a day", which matches the stem's total. The explanation matches. Options are alphabetical, key second. 49 q3 is untouched and still holds (10 a day is under the 12 a day limit, Step 4 MART 2 twice daily plus 1 as needed). |
| 48 q2 blood gas sentence | Yes | Matches GINA 2026 chapter 9 text read: gases "should be considered for patients with PEF or FEV1 <50% predicted" and "Supplemental controlled oxygen should be continued while blood gases are obtained". 160/450 = 36%, so the claim fits her. |
| 48 q1 word-echo cue | Yes | The stem now reads "a storm front with strong gusts and a sudden drop in temperature". "Thunderstorm" no longer appears before the key. The q4 lead-in "future storms" stays under ruling B6, as the round 2 verdict allowed. |

## Required fixes

| SAMP | Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|---|
| asthma-copd-51 | q3 | update (word-echo cue, lens B6) | "The ventilator has no oxygen blender." with key "Use a ventilator with an oxygen blender" | The update names the missing device in the key's own words. The only option with "blender" is the key, so a candidate can match the words without knowing the BTS/ICS point. This is the cue class failed in 48 q1 in round 2. Describe the set-up without the word, for example "with wall oxygen bled in at the mask at 4 L/minute". A bleed-in from a wall flowmeter shows that the current machine does not blend oxygen, so the key stays single-defensible. Keep the key wording. | Lens B6, round 2 verdict on 48 q1 | Medium |
| asthma-copd-51 | q3 | update and stem (unexplained desaturation) | Stem: SpO2 90% on 2 L/minute by nasal prongs, PaO2 60 mmHg. Update: on bilevel with 4 L/minute entrained and PaCO2 down from 69 to 64, "her SpO2 is 85% with little leak" | Her oxygen supply has doubled and her ventilation has improved, yet her saturation has fallen by 5 points with no stated cause. BTS/ICS says the 88 to 92% target "is usually easily achieved in AECOPD". A new fall on NIV in severe COPD would lead an emergency physician to look for a pneumothorax or another new problem (KF4) before changing the oxygen set-up, and the explanation calls NIV "working" without addressing this. Make the fall explicable and close the branch. For example: (1) stem vitals "90% on 4 L/minute by nasal prongs" (her pre-NIV need was already 4 L), and (2) update "Bilevel ventilation runs at IPAP 16 and EPAP 5 cm H2O, with wall oxygen bled in at the mask at 4 L/minute. A chest X-ray shows no pneumothorax. At 1 hour her pH is 7.31, PaCO2 64 mmHg and SpO2 85% with little leak." (44 words). The explanation may then add the BTS/ICS reasons in the text: the inspired fraction from bled-in oxygen is limited, flows above 4 L/minute add little (Padkin and Kinnear), and higher inspiratory pressure lowers the benefit through leak (Kaul). Keep "Entrain oxygen at the ventilator end" wrong by stating the current bleed-in site is at the mask. Recheck the stem word count, the duplicate stem test and the q1 and q2 explanations, which do not use the oxygen flow. | BTS/ICS 2016, supplemental oxygen with NIV (full text read) | Medium |

## Writer flag on 51 q3 (the blender)

The BTS/ICS text was read, summary and full text. Recommendation 4 (Grade A): SaO2 88 to 92% on NIV. Recommendation 5 (Grade C): oxygen "entrained as close to the patient as possible". Good practice points: "NIV settings should be optimised before increasing the FiO2", "Mask leak and delayed triggering may be caused by oxygen flow rates >4 L/min", and "A ventilator with an integral oxygen blender is recommended if oxygen at 4 L/min fails to maintain SpO2 >88%". The full text adds that introducing oxygen at the ventilator end "was less effective" and that flows above 4 L/minute "provided minimal additional increase" in FiO2.

Judgement: single-defensible under BTS/ICS, provided the case makes clear that oxygen is a low-flow bleed-in and not blended. Against each distractor:

- Accept 85%: below the Grade A target. Wrong.
- Entrain at the ventilator end: contrary to recommendation 5. Wrong.
- 10 L/minute: the guideline's own reason not to (leak, delayed triggering, little FiO2 gain). In some hospitals without blenders this is done as a stopgap, but under the cited guideline it is not the best answer. Wrong.
- High-flow nasal oxygen: abandons pressure support that is lowering her PaCO2. Wrong.
- "Optimise NIV settings first" is the guideline's step before raising FiO2, but the lead-in limits the choice to oxygen delivery and no settings option is offered, so it does not compete.

The flag is real but answered: the case needs to say how oxygen is given, which the fix above does without naming the blender. If every ventilator in a department blends oxygen, the same decision is to raise the FiO2 on it, as the writer says. That is a physician note, not a defect, because the case fixes the equipment.

## Uniqueness of 51 q3

- Catalogues asthma-copd.md, pulmonary-edema.md, sob.md, ems.md and airway.md searched for blender, entrain, 4 L/min, FiO2, oxygen flow and bleed. No keyed decision on oxygen set-up during NIV. The nearest items set FiO2 on BiPAP for pulmonary edema in a stem (pulmonary-edema.md line 69), list "persistent hypoxemia despite high FiO2" as NIV failure (line 70) and set FiO2 after intubation. None keys how to raise oxygen on a non-blending NIV ventilator.
- The SpO2 target 88 to 92% is keyed elsewhere (asthma-copd.md line 91 and others), but here it is only the reason a distractor is wrong, not the key.
- Bank grep over `src/samps` and `src/cases`: "blender" appears only in s64. "entrain" appears elsewhere only for air embolism in a neck wound (batch05 neck-wound-robbery).
- Not a D1 repeat. D1 stays at 19.

## Full review of 48, 49 and 51

- **48.** Key "Thunderstorm asthma" is the one defensible cause. Each mimic is rejected with a stem fact. q2 key and every distractor reason match GINA 2026 (oxygen not withheld without oximetry, Evidence D, controlled low flow better than high concentration, gases considered below 50% with oxygen continued). q3 and q4 unchanged since round 2 and still match GINA 2026 (no routine antibiotics, thunderstorm pollen advice, Evidence D). Numbers: 160/450 = 35.6%, 370/450 = 82.2%. No mock-mode cue beyond the allowed "future storms". KF tags 1, 5, 4, 8 hold.
- **49.** q1 fixed as above. q2 to q4 unchanged and correct against GINA 2026 (Box 9-1, Step 4 MART after an ED visit, PEF monitoring for poor perceivers). Numbers: 150/480 = 31.25%, 400/480 = 83.3%. KF tags 3, 2, 6, 8 hold.
- **51.** q1 (gabapentin, Health Canada 2016), q2 (full face mask, BTS/ICS recommendation 2) and q4 (prognostic pessimism) hold. q3 fails as above. Gas check: pH 7.31 with PaCO2 64 gives bicarbonate about 31 mmol/L by Henderson-Hasselbalch, consistent with the stem's 32. KF7 fits q3 (delivering NIV well), and loosely fits q4.
- House style: Canadian spelling, no dashes, no semicolons in strings, no personal names, author "Preceptor". Every question cites a listed source, and every listed source is cited.

## Unrequested writer changes (REVIEW-RULES rule 4)

- 49 q1 option re-sort. The writer reordered the options to keep alphabetical order after the rewording. The key stays second. Accepted.
- No other unrequested change. 50 and 52 are byte-identical to the round 2 version.

## Key features and positions

KF1 48 q1, 50 q1 to q3. KF2 49 q2. KF3 49 q1, 52 q1, 52 q3. KF4 48 q3, 50 q4, 51 q1. KF5 48 q2, 52 q2. KF6 49 q3, 52 q4. KF7 51 q2 to q4. KF8 48 q4, 49 q4. All eight are covered, and the 51 q3 fix keeps KF7. Single key positions 4, 4, 4, 3, 4, every position used, none above 25%. The key is not the longest option in 51 q3 (39 characters against 40).

## Physician-level items (not grounds for failure)

1. 51 q3: most Canadian emergency NIV ventilators blend oxygen, so the bleed-in set-up reflects UK practice and home-style bilevel machines. The case fixes the equipment, so the key stands.
2. 48 q1 explanation: "A cluster of people wheezing within an hour of a storm front" and "21 people at the same hour". The stem gives her onset within 30 minutes and 21 arrivals since 18:00, but not the others' timing. "Within hours" would match the stem exactly. The writer may change it while 51 is open. It is not a failure.
3. Earlier round 2 physician items still apply (48 q2 oximeter scenario, 49 q2 ICU wording, 49 q3 adult dexamethasone, 51 q4 loose KF7, 52 q3 and q2 source notes).

## Summary

Five SAMPs, 20 questions. 19 questions pass and 1 fails. asthma-copd-48 and 49 now pass. 50 and 52 are unchanged and still pass. asthma-copd-51 fails on q3 only. Its new decision (oxygen set-up on bilevel ventilation) is unique in the bank and correct under BTS/ICS 2016. But the update states "no oxygen blender" next to a key that says "with an oxygen blender", and her saturation falls on NIV with more oxygen and better ventilation, with no stated cause. One update rewrite, plus a stem oxygen value, fixes both. The whole s64 batch has not yet passed fresh review. After the 51 q3 fix it needs one more fresh review of 51 only.
