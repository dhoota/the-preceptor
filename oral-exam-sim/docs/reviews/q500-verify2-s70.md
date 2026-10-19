# Q500 verify round 2: s70, Anaphylaxis

Fresh independent review of the writer's round 2 revision of `src/samps/s70/anaphylaxis.ts` (anaphylaxis-48 to anaphylaxis-52). The reviewer had not written, edited or reviewed this batch before. Nothing was edited (REVIEW-RULES rule 1). The changes were read with `git diff 09445ba HEAD` on the file, against the previous verdict `docs/reviews/q500-verify-s70.md` and the writer report `docs/reviews/q500-writer-s70-r2.md`. Both lenses were applied to the whole batch. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Batch tests: `SAMP_BATCH=s70 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 of 128). The type check shows no s70 errors.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| anaphylaxis-48 | PASS | PASS | PASS | PASS | PASS |
| anaphylaxis-49 | FAIL | PASS | PASS | FAIL | PASS |
| anaphylaxis-50 | PASS | PASS | PASS | PASS | PASS |
| anaphylaxis-51 | FAIL | PASS | PASS | PASS | FAIL |
| anaphylaxis-52 | PASS | PASS | PASS | PASS | PASS |

Three SAMPs pass and two fail, with 2 required fixes. Every keyed answer is clinically correct. Both fixes are small text or source changes, not rebuilds.

## Previous required fixes

| Previous fix | Applied | Verdict |
|---|---|---|
| anaphylaxis-48 q4: replace the tryptase rule | Yes. Now a biphasic recurrence question (KF2). No tryptase content remains anywhere in the batch. | PASS. See the writer flag below. |
| anaphylaxis-49 q3: replace the weight-based IM dose with tenfold distractors | Yes. Now an oxygen question (KF3). No D1 row added. No dose, site or positioning content repeated. | Overlap fixed. The new question fails on its source, below. |
| anaphylaxis-51 q1: name the RCUK algorithm before q1 | Yes. The q1 update opens "Using the Resuscitation Council UK 2021 refractory anaphylaxis algorithm". | PASS |
| anaphylaxis-51 q2: remove the infusion rate that repeated the ladder-fall oral case | Yes. No rate or per-kg conversion remains. Old q3 (line) moved to q2, new q3 on extravasation added. | PASS. The new q3 passes. An unrequested change to q4 fails, below. |

## Required fixes

### anaphylaxis-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | `source` and explanation | Source `carlisle-infant`. Explanation: "A review of infant anaphylaxis advises high-flow oxygen at 8 to 10 L/minute by an infant face mask while epinephrine and fluids take effect." | Carlisle 2021 says only that "high-flow supplemental oxygen (8–10 L/m) can be administered through an infant face-mask". It does not say when oxygen is indicated, so it does not support rejecting "No oxygen while saturation is normal", which is the decision this question tests. It is also a US review where a current Canadian pediatric source exists (SAMP_SPEC section 9). Cite TREKK instead: add `{ id: "trekk-anaphylaxis", citation: "TREKK. Bottom line recommendations: anaphylaxis. Version 2.2. 2025.", url: "https://trekk.ca/resources/bottom-line-recommendations-anaphylaxis/" }` to the SAMP's `sources` (4 sources then, all cited), set q3 `source` to it, and replace the sentence with one built on its text, for example: "Canadian pediatric emergency guidance calls for oxygen at 10 to 15 L/minute by non-rebreather mask in any child with signs of shock or respiratory distress, whatever the saturation." Keep the key and options. Carlisle stays cited by q2. | TREKK Bottom Line Recommendations: Anaphylaxis, v2.2, July 2025 (PDF read): "Provide O2 (10-15 L) by non-rebreather mask if signs of shock or respiratory distress." Carlisle 2021 full text read. | High |

### anaphylaxis-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | update | "The infusion now runs well through a new IV. Twenty minutes later, ..." | The first sentence was added by the writer without a request (REVIEW-RULES rule 4). In mock mode every question shows at once, and it states the q3 key "Restart the infusion in another vein". q4 works without it, because "after two increases in the rate" already shows the infusion is running. Delete the first sentence and start the update at "Twenty minutes later". | SCORING-RULINGS B6 | Medium |

## Writer's flags judged

1. **anaphylaxis-51 q3, extravasation on a single hospital protocol: acceptable, PASS.** The LHSC protocol (PDF read, approved 5 February 2019) supports the key and the main distractor reasons. It says "Move vasopressor to alternate site", "Do not apply pressure to site", leave the catheter in place when no blood can be aspirated, give 1 to 2 mL of phentolamine 10 mg in 10 mL through the catheter and the rest intradermally, and use a warm compress. No national Canadian extravasation guideline exists, so a named Canadian institutional protocol meets SAMP_SPEC section 11 (body, work, year, real URL). Phentolamine is approved in Canada, used off label for extravasation (Devsi and colleagues, Can J Hosp Pharm 2024). Two explanation claims are not in the protocol: that hyaluronidase is for leaks of irritants that do not constrict vessels, and that ice deepens vasoconstriction. Both are standard teaching (Reynolds and colleagues, Pharmacotherapy 2014, which the LHSC protocol itself cites) and both are true, so they are not grounds for failure. See the physician items below. The key [4, 6] is the one defensible pair. Removing the cannula at once loses the antidote route, and the protocol removes it only after aspirating or after the phentolamine. No SAMP or oral case in the bank keys vasopressor extravasation.
2. **anaphylaxis-49 q3, oxygen at a normal saturation resting on Carlisle 2021: key correct, source wrong, FAIL.** Carlisle supports the device and flow but not the indication. WAO 2020 limits high-flow oxygen to "patients with respiratory distress and those receiving further doses of epinephrine", which this infant does not clearly meet after one dose (respiratory rate 40/minute, clear chest). RCUK 2021 says "Give high flow oxygen", then titrate to SpO2 94 to 98%. TREKK 2025 is Canadian and pediatric, and it ties oxygen at 10 to 15 L to signs of shock. That one line is what makes "No oxygen while saturation is normal" wrong here, so TREKK must be the cited source (fix above). The key "Face mask oxygen at 10 L/minute" sits inside TREKK's 10 to 15 L. Uniqueness: high-flow oxygen appears only as one item in write-in lists (anaphylaxis-01 q2, the piperacillin-tazobactam SAMP q2, anaphylaxis-08 q3). No item keys oxygen for a shocked infant with a normal saturation, or the choice of infant device. New to the bank.
3. **anaphylaxis-48 q4, biphasic definition under WAO 2020: acceptable, PASS.** The WAO 2020 text (Europe PMC full text read) gives the criterion the question needs: typical skin features plus "Severe gastrointestinal symptoms (eg, severe crampy abdominal pain, repetitive vomiting), especially after exposure to non-food allergens". Hives with four vomits in 20 minutes after a sting meets it. WAO also says "Around half of biphasic reactions occur within the first 6–12 h", which the explanation quotes correctly. The writer is right that WAO gives no formal definition of biphasic anaphylaxis. The explanation's wording (recurrence after recovery with no new exposure) matches the 2020 practice parameter and the 2021 consensus definition, and nothing in it is wrong. One defensible key. "Recurrent hives without anaphylaxis" is correctly rejected because the vomiting meets the criterion. Uniqueness: anaphylaxis-08 (s03) q2 has a biphasic recurrence at 5 hours with no new exposure, but keys the treatment of a recurrence with hypotension and wheeze. 48 q4 keys recognizing an incomplete recurrence (skin and gut only, normal BP) as anaphylaxis after a non-food trigger. The skin plus gut criterion is also taught in anaphylaxis-14 q1, -31 q2 and -39 q1, but for first reactions to food or a drug. The combination is new. Passes, with the 5 hour timing named for the physician below.

## Whole batch review, items not changed this round

- **anaphylaxis-48 q1 to q3:** keys correct. 80 kg x 20 mL/kg = 1.6 L, matches WAO. The new optional sentence in q2 (bedside ultrasound can miss a retroperitoneal leak) is true and removes the false reassurance the previous reviewer noted. Overlap note: the ladder-fall-ankle-sedation oral case (batch13) has a rubric item "uncovers the skin, and does not wait for a rash", with the teaching that skin signs are often hidden. 48 q1 keys a full skin exam in shock with hidden skin. The setting (field collapse, aneurysm mimic, coveralls) and the competing options differ, and the previous reviewer passed it as new. Not a fail. Named below.
- **anaphylaxis-49 q1, q2, q4:** unchanged, previously verified, still correct. Pulse 184, BP 64/38 mmHg (below 70 mmHg for an infant), refill 4 seconds. Canadian Immunization Guide MMR advice correct.
- **anaphylaxis-50:** unchanged. Menu key [1, 2, 5] correct. CSACI storage advice correct.
- **anaphylaxis-51 q1:** RCUK PDF reread: "Give IM adrenaline every 5 minutes until adrenaline infusion has been started" and "IV boluses of adrenaline are not recommended, but may be appropriate in some specialist settings (e.g. peri-operative)". Her last dose was 10 minutes ago. Key correct. The algorithm now appears before q1.
- **anaphylaxis-51 q2:** RCUK: "Prime and connect with an infusion pump via a dedicated line", "DO NOT 'piggy back'", "DO NOT infuse on the same side as a BP cuff as this will interfere with the infusion and risk extravasation". Correct.
- **anaphylaxis-51 q4:** RCUK: "↑↑ BP is likely to indicate adrenaline overdose". Reducing the rate is the one defensible key. Only the added update sentence fails.
- **anaphylaxis-52:** unchanged, previously verified against Health Canada and Satoh 2020. Correct.
- **Format:** options alphabetical, single key positions 4, 4, 3, 3, 4 of 18 (no position above 25%, every position used), two menus (50 q3, 51 q3). The 51 q3 menu option lengths run 26 to 36 characters. No semicolons, em dashes or en dashes in content strings. No mnemonics or personal names. Canadian spelling ("litre", "behaviour", "Centre").
- **Key feature coverage:** KF1 6 (48 q1, 48 q2, 49 q2, 50 q1, 50 q2, 52 q2), KF2 4 (48 q4, 49 q1, 50 q3, 52 q1), KF3 6 (48 q3, 49 q3, 51 q1 to q4), KF4 4 (49 q4, 50 q4, 52 q3, 52 q4). Every key feature is covered and the tags are honest. 49 q3 (oxygen in shock) is fairly KF3 management. Neither required fix changes coverage.
- **Mock-mode cues already accepted** (left as is): 48 q2 and q4 updates reveal earlier keys, 50 q4 reveals q1, 52 q3 and q4 reveal q1. Each later question needs the fact.

## Sources verified this round

- Cardona V and colleagues. WAO anaphylaxis guidance 2020. Europe PMC full text of PMC7607509 read. Confirmed the skin plus severe gastrointestinal criterion, the biphasic timing sentence, the 20 mL/kg bolus and the oxygen sentence quoted above.
- Carlisle A, Lieberman J. Clinical management of infant anaphylaxis. J Asthma Allergy. 2021;14:821-827. The Dove Medical Press URL opens to the article. Supports tachycardia as an early sign and hypotension as a late one (q2), and the 8 to 10 L face mask flow, but not the indication for oxygen (q3).
- TREKK. Bottom line recommendations: anaphylaxis. Version 2.2, July 2025. https://trekk.ca/resources/bottom-line-recommendations-anaphylaxis/ opens the resource page. The PDF (https://cms.trekk.ca/wp-content/uploads/2025/07/2026_09_03-Anaphylaxis-BLR-v2.3.pdf) was downloaded and read. The printed footer says "© JULY 2025, TREKK; FOR REVISION 2027. VERSION 2.2".
- Resuscitation Council UK. Refractory anaphylaxis algorithm. 2021. https://resus.org.uk/media/334/download. PDF read.
- London Health Sciences Centre, Drugs and Therapeutics Committee. Vasopressor extravasation management protocol (adults). 2019. https://lhsc.on.ca/media/8366/download. PDF read. Approval date 5 February 2019. References Reynolds 2014 and Le and Patel 2014.
- Devsi JA, Paquette V, Carr RR. Can J Hosp Pharm. 2024. Read for availability only: phentolamine is approved in Canada, and hyaluronidase is not marketed in Canada.
- Unchanged and accepted from the previous verify: FPIES consensus 2017, Canadian Immunization Guide, CSACI, Shmuely 2018, Satoh 2020, Health Canada.

## Physician-level items (not grounds for failure)

1. anaphylaxis-51 q3 rests on one Canadian hospital protocol. A peer-reviewed review (Reynolds and colleagues, Pharmacotherapy 2014, or the 2023 focused update by Stefanos and colleagues in the same journal) would cover all the explanation's claims, including hyaluronidase and cold against warm compresses. Hyaluronidase is not marketed in Canada (Special Access only), which makes it a slightly less plausible distractor for Canadian candidates. It is still a real choice.
2. anaphylaxis-49 q3: RCUK 2021 titrates oxygen to SpO2 94 to 98% after a high-flow start. The key holds as the first step in shock under TREKK and RCUK. The physician may wish to confirm that a 97% reading in a shocked infant does not make the "No oxygen" option defensible.
3. anaphylaxis-48 q4 repeats the "5 hours later, no new exposure" frame of signed anaphylaxis-08 q2, with a different decision. Changing the interval (for example 3 hours) would separate them further. Not required.
4. anaphylaxis-48 q1 shares the "uncover the skin in unexplained shock" teaching with a rubric item in the Q500 oral case ladder-fall-ankle-sedation. The coordinator may want to confirm that both can stand.

## Summary

Five SAMPs, 20 questions. anaphylaxis-48, anaphylaxis-50 and anaphylaxis-52 pass. anaphylaxis-49 and anaphylaxis-51 fail, with 2 required fixes: re-source 49 q3 to TREKK 2025 and reword one sentence, and delete the unrequested update sentence in 51 q4 that gives away the 51 q3 key. All four previous fixes were applied correctly. Of the writer's three flags, the extravasation protocol and the biphasic definition are acceptable, and the oxygen question needs its Canadian source. Every number was recomputed. No key is clinically wrong. The fixes go back to a writer, and the revision needs a fresh independent review.
