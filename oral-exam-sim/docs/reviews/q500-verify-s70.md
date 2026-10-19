# Q500 verify report: s70, Anaphylaxis

Fresh independent review by Preceptor of the whole final text of `src/samps/s70/anaphylaxis.ts` (anaphylaxis-48 to anaphylaxis-52). The reviewer did not write or edit this batch. The first QA round edited the file in place, which breaks REVIEW-RULES rule 1, so the current file is treated as a writer revision. Nothing was edited in this round. Both lenses were applied: clinical truth, and internal consistency and numbers. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| anaphylaxis-48 | FAIL | PASS | PASS | PASS | FAIL |
| anaphylaxis-49 | FAIL | PASS | PASS | FAIL | PASS |
| anaphylaxis-50 | PASS | PASS | PASS | PASS | PASS |
| anaphylaxis-51 | FAIL | FAIL | FAIL | PASS | PASS |
| anaphylaxis-52 | PASS | PASS | PASS | PASS | PASS |

Two SAMPs pass and three fail. Every keyed answer is clinically correct. The failures are repeated teaching (three) and one unnamed reference.

Batch tests run by the reviewer: `SAMP_BATCH=s70 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 of 128), and the type check shows no s70 errors.

## Required fixes

### anaphylaxis-48

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | whole question | "Which of the following best describes the meaning of his two tryptase results?" Key "Confirms acute mast cell activation", with the 1.2 x baseline + 2 rule | The oral case ladder-fall-ankle-sedation (`src/cases/batch13/ladder-fall-ankle-sedation.ts`, rubric item with teaching "A rise above 1.2 times baseline plus 2 supports mast cell activation") already scores interpreting the same rise with the same rule. s23 "Third faint after a wasp sting" already teaches baseline tryptase and mastocytosis after sting anaphylaxis in a man, and s23 also tests tryptase timing. Replace q4 with a KF2 decision not in the bank. The arithmetic itself is correct (1.2 x 6.0 + 2 = 9.2 mcg/L, and 18.6 is about twice that). | Q500_BRIEF rule 3. WAO 2020 (Europe PMC full text): "peak MCT should be > 1.2x baseline tryptase + 2" | Medium |

Not required but noted: in q2, "the aorta has not grown, there is no free fluid" is true but weak evidence against rupture. Most ruptures are retroperitoneal, which bedside ultrasound can miss. The reason that decides it, generalized hives after a sting, is already stated. Adding one clause would stop the item teaching that no free fluid lowers concern for rupture. The scenario (an older man with vascular disease, a sting during yard work, BP 76/40 mmHg) also sits close to the oral case refractory-anaphylaxis-beta-blocker ("Clearing out the shed", 74/40 mmHg) and to s23 "Gardener with coronary disease". The aneurysm mimic and the hidden skin are new, so the scenario passes. It is named here for the physician.

### anaphylaxis-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | whole question | "Which of the following is the most appropriate first dose of epinephrine for him, drawn from the 1 mg/mL ampoule?" Key "epinephrine 0.09 mg IM", with tenfold and decimal slip distractors | Third retelling of the weight-based IM dose with tenfold error distractors: signed s03 "Vomiting toddler after a snack" q2 (accept 0.01 mg/kg, unacceptable "a tenfold epinephrine dose") and s23 "Telephone call from a nursing station" q1 (19 kg, 0.019 mg decimal slip). The first QA kept it as the literal wording of KF3, which is a D1 claim. D1 stands at 19 of 20, and only the product owner or the physician can add a row (docs/DECISIONS.md). The batch does not need the item for coverage, because KF3 has five other questions. Replace it with an infant-specific KF3 decision not in the bank. Positioning, IM site and the 0.01 mg/kg dose with a tenfold error are already taught, so do not repeat those. Or formally record the repeat as a D1 row with the owner's decision. | docs/DECISIONS.md D1. `src/samps/s03/anaphylaxis.ts` line 351 onward. `src/samps/s23/anaphylaxis.ts` line 2188 onward | Medium |

### anaphylaxis-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | update | "You ask the nurse to prepare an epinephrine infusion, which will take several minutes." | The key (IM 0.5 mg every 5 minutes until the infusion runs) and the reason for rejecting "epinephrine 0.1 mg IV push" both come from the Resuscitation Council UK algorithm, but the stem names that reference only later, in the q2 update. Other references (WAO 2020) allow IV epinephrine by experienced clinicians. SAMP_SPEC section 9 requires the stem to say which reference applies when references differ. Move "using the Resuscitation Council UK 2021 refractory anaphylaxis algorithm" into the stem or the q1 update. | SAMP_SPEC section 9. RCUK refractory anaphylaxis algorithm PDF: "Give IM adrenaline every 5 minutes until adrenaline infusion has been started" and "IV boluses of adrenaline are not recommended, but may be appropriate in some specialist settings" | Medium |
| q2 | whole question | "Which of the following starting infusion rates is most appropriate for her?" Key "48 mL/hour" (1 mg in 100 mL at 0.5 to 1.0 mL/kg/hour) | The oral case ladder-fall-ankle-sedation model answer already teaches the same regimen and the same per-patient conversion: "1 mg in 100 mL at 0.5 to 1 mL/kg/h ... or 40 to 80 mL/h for her". That case is also a Q500 item. One of the two must change. Unless the coordinator chooses to change the oral case, replace q2 with a KF3 decision not in the bank. The arithmetic is correct: 64 kg x 0.5 to 1.0 = 32 to 64 mL/hour, 48 mL/hour = 480 mcg/hour = 8 mcg/minute, 16 = 0.25, 160 = 2.5 and 480 = 7.5 mL/kg/hour. | Q500_BRIEF rule 3. `src/cases/batch13/ladder-fall-ankle-sedation.ts` line 231 | Medium |

## Items the first QA changed or replaced: current text judged

| Item | First QA change | Verdict on current text |
|---|---|---|
| anaphylaxis-48 stem, title and q2 | Woodpile and wasp in place of garden and bee. Sting mark under the collar | Acceptable. The hidden skin premise now holds. See the scenario note above. |
| anaphylaxis-48 q3 | Replaced with the fluid decision | Acceptable. WAO 2020 full text (Europe PMC) confirms "intravenous fluids to patients with cardiovascular instability (20 mL/kg bolus using crystalloids)", which is 1.6 L at 80 kg. The RCUK algorithm gives 500 to 1000 mL per adult bolus. A rapid first litre fits both. One defensible key. This resolves the first QA residual uncertainty. |
| anaphylaxis-49 stem | Reworked away from s03 | Acceptable. BP 64/38 mmHg is below 70 mmHg, the hypotension threshold for infants aged 1 to 12 months, so the shock signs hold. The QA report's "70 + 2 x age" formula belongs to children aged 1 to 10 years, but that formula is not in the item text, so nothing needs to change. |
| anaphylaxis-49 q1 | Replaced with the FPIES distinction | Acceptable. Hives within 10 minutes separate an IgE-mediated reaction from FPIES (vomiting 1 to 4 hours after the food without classic skin or respiratory signs, 2017 consensus). Mapping a mimic to KF2 is fair, though not literal. That was a first QA residual point, and it is accepted. |
| anaphylaxis-49 q2 | Values updated, "two vomits in under half an hour" | Acceptable. Hives began within 10 minutes and he arrived at 35 minutes, so both vomits fall within about 25 minutes. |
| anaphylaxis-49 q3 | Re-sourced to WAO 2020 | The source is now correct (0.01 mg/kg, maximum 0.5 mg, repeat every 5 to 15 minutes. WAO Table 6 gives 0.01 mg/kg for infants under 10 kg). 9 kg x 0.01 = 0.09 mg = 0.09 mL. The question fails on overlap, above. |
| anaphylaxis-50 stem | Staff saw him slump | Acceptable. The stem, q2 and the explanations now agree. |
| anaphylaxis-50 q2 | Study population named | Acceptable. The key also rests on his hypotension and on jerking that stopped within seconds. |
| anaphylaxis-50 q5 | Removed | Acceptable. The SAMP keeps 4 questions and its three sources are all cited. |
| anaphylaxis-51 q1 | Replaced with IM epinephrine while the infusion is prepared | The key is correct under RCUK. Her last dose was 10 minutes ago, more than 5. The question fails only because the reference is named too late, above. The refractory definition kept in the explanation matches RCUK ("No improvement in respiratory or cardiovascular symptoms despite 2 appropriate doses of intramuscular adrenaline"). |

## First QA residual uncertainty list

- anaphylaxis-48 q3, fluid volume: resolved. Both WAO and RCUK support the key.
- anaphylaxis-51 q1 and q2 rest on a UK algorithm. No Canadian refractory protocol exists, so international guidance is allowed (SAMP_SPEC section 9). The stem must name the algorithm before q1, which is a required fix above.
- anaphylaxis-49 q1 maps a mimic to KF2: accepted.

## Checks with no change needed

- anaphylaxis-48 q1: full exposure in a shocked patient whose skin is hidden is new to the bank. Every distractor reason is true. One defensible key.
- anaphylaxis-49 q4: the Canadian Immunization Guide (modified 2026-08-26) says MMR can be given "in the routine manner" to people with egg anaphylaxis, says "Skin testing is not recommended", allows any authorized influenza vaccine at full dose in any routine setting, and calls for allergist referral before yellow fever vaccine. All match the explanation. MMR is new to the bank.
- anaphylaxis-50 q1, q3 and q4: the menu key [1, 2, 5] (flushing, lip swelling, rubbing as itch) is correct. CSACI page 16 says autoinjectors are "easily accessible", "not in locked cupboards or drawers", and kept away from extreme cold or heat ("glove box in a vehicle"). The group home angle is new. Its link to the "carry at all times" teaching in s23 is named, and acceptable.
- anaphylaxis-51 q3: the RCUK PDF says "dedicated line", "DO NOT piggy back" and "DO NOT infuse on the same side as a BP cuff". The cuff and piggyback detail is new, although the oral cases mention a dedicated line in passing. Passes.
- anaphylaxis-51 q4: RCUK says "a large rise in BP is likely to indicate adrenaline overdose". Reducing the rate is the one defensible key.
- anaphylaxis-52: Health Canada (modified 2026-05-28) lists eggs, milk, mustard, peanuts, crustaceans and molluscs, fish, sesame seeds, soy, sulphites, tree nuts, and wheat and triticale. Buckwheat is not listed. Satoh 2020 supports buckwheat as gluten free, a hidden allergen, and an ingredient in soba. The scenario and every question are new to the bank.
- House style: no semicolons, em dashes or en dashes in content strings, and no mnemonics or personal names. "café" carries an accented letter, which is not one of the barred symbols.
- Mock mode cues built into the case (left as is): anaphylaxis-48 q2 update reveals q1, the q3 update (epinephrine given) reveals q2, anaphylaxis-50 q4 reveals q1, and anaphylaxis-52 q3 and q4 name buckwheat, which reveals q1. Each later question cannot work without the fact.

## Sources verified

- Cardona V and colleagues. WAO anaphylaxis guidance 2020. Full text read through the Europe PMC REST copy of PMC7607509. Confirmed: 20 mL/kg crystalloid bolus, 0.01 mg/kg to 0.5 mg IM repeated every 5 to 15 minutes, the tryptase peak at 1 to 2 hours, baseline at least 24 hours after recovery, and the 1.2 x baseline + 2 rule. The PMC URL resolves (it served a browser check to this reviewer).
- Resuscitation Council UK. Refractory anaphylaxis algorithm. 2021. https://resus.org.uk/media/334/download. PDF downloaded and text read.
- Public Health Agency of Canada. Canadian Immunization Guide Part 2, contraindications and precautions. Opened, modified 2026-08-26.
- Health Canada. Food allergies and priority food allergens. Opened, modified 2026-05-28.
- CSACI. Anaphylaxis in schools and other settings, 3rd edition. Page 16 opened.
- Carlisle A, Lieberman J. J Asthma Allergy. 2021. The Dove Medical Press URL opens to the right article.
- Nowak-Wegrzyn A and colleagues. FPIES consensus. J Allergy Clin Immunol. 2017. No URL. The first QA read Table IV from the open copy.
- Shmuely S and colleagues. Neurology. 2018. No URL. Citation correct (PubMed 29549227).
- Satoh R and colleagues. Breed Sci. 2020. The PMC URL resolves (it served a browser check).

## Key feature coverage after fixes

Current coverage: KF1 6, KF2 4, KF3 6, KF4 4. Replacing anaphylaxis-48 q4 (KF2), anaphylaxis-49 q3 (KF3) and anaphylaxis-51 q2 (KF3) must keep all four covered. KF2 has the least margin.

## Summary

Five SAMPs: anaphylaxis-50 and anaphylaxis-52 pass. anaphylaxis-48, anaphylaxis-49 and anaphylaxis-51 fail, with 4 required fixes. Three fixes replace repeated teaching: the tryptase rule from the ladder-fall oral case, the infant dose with tenfold error from s03 and s23 (an unrecorded D1 claim), and the infusion rate from the ladder-fall oral case. One fix names the RCUK algorithm before q1. Every number was recomputed and is correct. No keyed answer is clinically wrong. The fixes go back to a writer, and the revision needs a fresh independent review.
