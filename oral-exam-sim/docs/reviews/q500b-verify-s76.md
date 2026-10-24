# Q500B verification review: s76, Eye (eye-39 to eye-43), revision 1

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before, and I made no edits to it (REVIEW-RULES rule 1). File reviewed in full: `src/samps/s76/eye.ts`. Context read: `docs/reviews/q500b-qa-s76.md` (first review) and `docs/reviews/q500b-writer-s76.md` with its "Revision 1" section.

Lenses: A (clinical truth) and B (internal consistency, numbers, cueing), plus a whole-bank overlap check of the new keys (src/samps and src/cases).

## Tests

`SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass (bank-wide near-duplicate stem test 7.5 s). House style: no em or en dashes and no semicolons in prose, Canadian spelling (centre, litre, neighbours), no mnemonics, no personal names. Format: option order alphabetical, "None" last in the eye-40 q3 menu as SAMP_SPEC section 6 allows, 2 menus in the batch, 4 questions in every SAMP.

## Sources verified (this review)

| Id | Result |
|---|---|
| eyewiki-hyphema | Opened. Grade 0 is red cells in the chamber with no layering (microhyphema), grades I to IV as written. IOP rise 13.5% in grades I to II and 52% in grade IV (Coles series). Admission considered for poor adherence, bleeding diathesis, severe ocular or orbital injury, sickle cell with raised IOP. Rebleed usually within 5 days. Supports eye-43 q2, q3, q4. |
| lay-ahc | WebFetch returned the PDF, read with pdftotext. "RT-PCR identified enterovirus in 52.4% (11/21) of conjunctival swabs, with RNA sequencing confirming the coxsackievirus A24 variant ... in five swabs." Subconjunctival haemorrhage 82.2%. Supports eye-40 q2, q3, q4. |
| open-globe (Zhou 2022) | Opened at the Dove Press full text. "Preoperative visual acuity, absence of APD, and anterior injury location as the most impactful predictors" of good acuity. OTS "the first and most widely used prognostic model". "A primary repair within 12 to 24 hours ... leads to improved visual outcomes and lower rates of endophthalmitis." Supports eye-42 q4. |
| barnes-airbag-alkali | Opened. NaOH powder, irrigation at least 15 minutes with at least 1 litre until pH normal, first irrigation 6 to 7 hours after the crash, severe limbal ischemia and scarring. Supports eye-43 q1. |
| cdc-sti-2021 | Opened. CSF "unnecessary before treatment" with isolated ocular findings and no neurologic abnormality, aqueous penicillin G 3 to 4 million units IV every 4 hours for 10 to 14 days, HIV test for all, immediate ophthalmology. Supports eye-41 q2 and q4. |
| phac-syphilis-clinical | Opened. Palms and soles rash, eye involvement including uveitis and retinitis. Supports the revised eye-41 q1 sentence. |
| azari-conjunctivitis | Opened. Table 2: valacyclovir 500 mg 3 times daily or acyclovir 400 mg 5 times daily for 7 to 10 days. "Topical corticosteroids should be avoided because they potentiate the virus and may cause harm." Supports eye-39 q3. |
| rveeh-hsv, belongia-gladiatorum | Not re-opened in this review (WebFetch quota). The claims that cite them (eye-39 q1, q2, q4) are unchanged from the text the first review verified against these sources. |

## Status of the first-review fails

All 15 first-review fails are resolved. eye-39 q2 and q3 fixed as asked. eye-39 q5 removed. eye-40 q1 fixed. eye-40 q3 and q4 replaced with new decisions. eye-41 q1, q3 and q4 fixed with the exact wording asked. eye-42 stem moved to a bedside table at night (no other bedside table fall in the bank). eye-42 q4 replaced with the prognosis question the first review suggested. eye-43 rebuilt: q1 is now recognition, the old slit lamp search and head-raised items are gone, the IOP is now 16 mmHg and "drainage angle" is gone. New defects in the replacement items are listed below.

## eye-39 Wrestler with a watery eye

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | "His vision is 20/20" now traces to the stem. |
| q3 | PASS | Update no longer names the q2 key. Dose matches Azari Table 2. |
| q4 | PASS | Flag only (inherent, as in the first review): the lead-in tells the candidate a steroid is right only in a later finding. |

## eye-40 Red eyes after a trip abroad

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | "watery discharge" now matches the stem. |
| q2 | PASS | |
| q3 | FAIL (low, B1 claim not in stem) | The key (None) is defensible and the 82% figure is verified. The explanation says she has "no other bleeding", but the stem never says so. Fix: add "She has had no nosebleeds, bleeding gums or easy bruising." to the stem after "She recalls no injury.", or delete "and no other bleeding" from the explanation. Overlap note (flag only): eye-36 q1 asks the investigation for a subconjunctival hemorrhage (INR on warfarin) with similar distractors (CBC, factor assays, CT orbits). The key decision differs (no workup because the bleeding is part of the outbreak illness), so I accept it. KF1 mapping is acceptable but loose. |
| q4 | FAIL (medium, B6 mock-mode cue) | Key verified (Lay: RT-PCR of conjunctival swabs, 11 of 21 enterovirus positive, sequencing to CV-A24v). The lead-in "the virus behind the cluster of red eyes she was exposed to" names the q1 key (neighbours with red eyes) and tells the candidate in q2 that the cause is viral, which removes the allergic, bacterial and spontaneous distractors. Fix: change the prompt to "Which of the following tests would best identify the cause of her eye findings?" and leave the options and explanation as they are. Flag only (inherent): the key "enterovirus PCR" points to the q2 key for a candidate who knows the agent. Writer uncertainty 3 (antibody testing gives no answer during the illness, HSV one sided with lid vesicles): both true as standard teaching, accepted. |

## eye-41 Blurred vision after a faded rash

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Wording now matches the stem and PHAC. |
| q2 | PASS | |
| q3 | PASS | Update now opens "Further examination shows". Sarcoid has its own true reason. The serology confirming q1 is inherent (flag only). |
| q4 | PASS | Doxycycline sentence corrected. Every key and distractor reason matches CDC 2021. Physician note kept: no Canadian ocular syphilis regimen, so the keys rest on CDC 2021. |

## eye-42 Older woman who fell in the night

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | The eye-11 echo is gone. |
| q1 | PASS | |
| q2 | PASS | Writer uncertainty 2: eye-36 q2 mentions the full ring of bulging hemorrhage only in its explanation, and its key is "eye trauma yesterday". eye-42 q2 keys the diagnosis from several signs. Accepted. |
| q3 | PASS | Flag only (B6, inherent): the update's "no clear defect in the globe" hints at the q2 key, but q3 cannot work without the CT result. The shield is also used for hyphema, so that sentence does not single out the key. |
| q4 | FAIL (low, B6 mock-mode cue) | Key verified (Zhou: absence of APD is among the strongest predictors of good acuity, OTS the most used model). The distractor "Repair within 12 hours of injury" names the q3 key (surgical exploration), which is the cue the first review asked the writer to keep out of this question. Fix: replace that option with a non-surgical detail of the same kind that does not predict outcome, for example "Blood pressure of 168/90 mmHg", give it a reason in the explanation ("Her blood pressure does not change the visual outlook"), and keep or drop the 12 to 24 hour sentence in the explanation. Flag only (inherent): "Rupture close to the limbus" presumes the q2 key, as any prognosis question must. Two further flags, no change required: (1) eye-23 q1's explanation already says an afferent defect is one of the strongest predictors of final vision after serious eye trauma, but it is not keyed there. (2) The KF3 tag (full examination) is loose for a prognosis question. A physician may prefer to retag or accept it. |

## eye-43 Burning eyes after a collision

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Recognition key verified (Barnes). Irrigation is taught, not keyed, so eye-12 q1 is not repeated. |
| q2 | FAIL (medium, overlap and B6) | (1) Overlap with signed eye-25 q1 (same key feature, same EyeWiki source): eye-25 q1 keys "Red cells circulating in the aqueous" as the definition of a microhyphema, and this update gives "red cells circulating in the right anterior chamber with no layered blood" and asks the candidate to name it (grade 0, a microhyphema). The decision is the same definition in reverse. Only the grading scale is new. (2) B6: "Both eyes are irrigated until the pH is 7.4" tells the candidate the q1 key is a chemical (alkali) exposure. Fix: make the hyphema a layered one so the grade itself is the decision, for example change the update to "Acuity is 20/60 right and 20/25 left. The globe is intact. Further examination shows a layer of blood filling about a quarter of the right anterior chamber." with Grade 1 as the key, and rewrite the explanation around grade 1 (less than a third, 13.5% IOP rise in grades I to II). Then change q4's explanation from "A microhyphema" to "A small grade 1 hyphema". EyeWiki still supports outpatient care for this. Remove the irrigation sentence from the update. |
| q3 | PASS | Key verified (EyeWiki admission criteria, bleeding diathesis). KF2 (systemic disease in the history) fits. |
| q4 | FAIL (low, B6 mock-mode cue) | IOP corrected to 16 mmHg and the key verified. The update "She has no bleeding disorder" names the q3 key. The stem already says she "has no other conditions", so the sentence is not needed. Fix: change the update to "She understands the plan. The intraocular pressure is 16 mmHg in the right eye." The explanation's "no bleeding disorder" then traces to the stem. |

## Writer's open points

1. Key feature 4 has 2 questions (eye-39 q3, q4). Accepted, with a physician note. Every key feature is still tested, so the test requirement is met. It goes against the brief's balance rule, because KF4 has the fewest questions in the bank (14) and the batch puts its extras on KF1 and KF2. But the uniqueness rule comes first, and the steroid angles for a viral eye infection are already keyed in eye-03, eye-04, eye-05 and eye-21. I found no unkeyed KF4 decision either. A physician may name a new angle (for example, a steroid started by another prescriber for an adenoviral infiltrate) for a later round.
2. eye-42 q2 against eye-36 q2: accepted (see eye-42 q2).
3. eye-40 q4 distractor reasons from standard teaching: true, accepted.

## Unrequested changes

eye-42 title changed to "Older woman who fell in the night": neutral, gives nothing away, accepted. Sources dropped (aao-hsv, stein-airbag, azari from eye-40): each matches the removed questions, and no remaining explanation cites them. Accepted.

## Repeat search

Keywords searched across src/samps and src/cases: hemorrhagic or haemorrhagic conjunctivitis, coxsackie, enterovirus, microhyphema, grade 0, airbag, Ocular Trauma Score, afferent with predict, poor final vision, von Willebrand, bedside table, in the dark. No new key is keyed elsewhere, except the eye-25 q1 microhyphema definition (eye-43 q2 fail). Enterovirus hits elsewhere are pediatric fever and meningitis only. The airbag hits elsewhere are trauma history items, not eye items.

## Could not verify

rveeh-hsv and belongia-gladiatorum were not re-opened (WebFetch quota). Their claims are unchanged from the first review, which verified them.

## Summary

First-review fails: 15 of 15 resolved. New fails: 5, all in replacement items. Mock-mode cues 4 (eye-40 q4, eye-42 q4, eye-43 q2, eye-43 q4). Overlap with a signed item 1 (eye-43 q2 with eye-25 q1). Explanation claim not in the stem 1 (eye-40 q3). No wrong keys, doses or numbers found. No reviewer edits made.

Failed items: eye-40 q3, eye-40 q4, eye-42 q4, eye-43 q2, eye-43 q4.

Overall: FAIL (5 items)
