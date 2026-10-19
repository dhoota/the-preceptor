# Q500 round 3 verify: s67, Abuse (domestic)

Fresh independent review by Preceptor of the round 3 revision. File: `src/samps/s67/abuse-domestic.ts`, ids abuse-domestic-39 to abuse-domestic-43. This reviewer did not write, edit or review this batch before, and edited no SAMP, source or shared file (REVIEW-RULES rule 1). Both lenses were applied to SAMPs 40, 41 and 43 in full. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: docs/reviews/q500-verify2-s67.md, the "Round 3" section of docs/reviews/q500-writer-s67-r2.md, Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES (rules 1 to 6), DECISIONS, SCORING-RULINGS. Bank checked: the abuse-domestic catalogue, the s20 and s01 abuse-domestic source files (all key feature 5 items listed by script), the batch05 and batch06 oral cases, and greps of s54 to s70 and case batch11 to batch15 for bleeding disorder workups, factor and von Willebrand tests, crisis and helpline numbers, phoning a service and warm handoffs.

## File integrity

- The file holds exactly five SAMPs (abuse-domestic-39 to -43) and 20 questions. No id appears twice.
- A duplicate sentence scan found no repeated or truncated text. The only repeated string is the "Canadian Paediatric Society, Child and Youth Maltreatment Section" body name inside two different citations, which is correct.
- `git diff 803156b` shows hunks only in the source map (new `whoHandbook`), 40 q3, 41 q3, 41 sources, 43 q3, 43 q4 and 43 sources. A block comparison by script confirms abuse-domestic-39 and abuse-domestic-42 are byte-identical to the version that passed at 803156b. The working tree matches HEAD (c7ed20b) for this file.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep samps/s67` printed nothing.
- `SAMP_BATCH=s67 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed: 3 files, 128 tests.
- House style scan: no em or en dashes, no semicolons in strings, Canadian spelling.
- Single key positions, first to fifth: 4, 4, 4, 4, 3 (19 singles, highest share 21%). No key moved this round. One menu (39 q3).

## Verdicts

| Id | Verdict | Questions that fail |
|---|---|---|
| abuse-domestic-39 | PASS | none (unchanged, byte-identical) |
| abuse-domestic-40 | PASS | none |
| abuse-domestic-41 | FAIL | q3 (low, internal contradiction) |
| abuse-domestic-42 | PASS | none (unchanged, byte-identical) |
| abuse-domestic-43 | FAIL | q3 (low, distractor reasons) |

## Round 2 required fixes: applied?

| Round 2 fix | Applied | Note |
|---|---|---|
| 40 q3 delete the PharmaNet sentence (B6) | Yes | Update now starts "Fully undressed, he has ...". |
| 40 q3 hedged-key cue (B5) | Yes | "The yellow bruise is at least a week old" became "Only the yellow bruise can be dated". The key is no longer the only limited claim. |
| 41 q3 replace the social worker repeat with a new KF5 decision | Yes | New decision: phone the violence service with her now. The social worker key and teaching are gone. New defect, see below. |
| 43 q3 replace the fundoscopy repeat with a new KF3 decision | Yes | Bleeding workup beyond INR and PTT, angle (a) of the round 2 verdict. Distractor reasons need work, see below. |
| 43 q4 replace the defensible distractor | Yes | "Ask her in front of her son" became "Ask her at the open triage desk". |
| 43 q4 source to WHO, rewrite explanation, remove Hamby | Yes | Source is now the WHO 2014 handbook (`who-handbook`), added to 43 sources (4 in all). Hamby sentences removed. Hamby is still cited by 43 q2. |

No unrequested changes were found (REVIEW-RULES rule 4). The 40 q3 explanation edit ("So even his yellow bruise cannot be dated, because it may be recent") follows from the requested distractor change and is correct.

## Per question

### abuse-domestic-40: PASS

- q3 PASS. Mosqueda 2005 abstract reread on PubMed: 101 adults aged 65 and older examined daily, "16 bruises were predominately yellow within the first 24 hours after onset", and "One cannot reliably predict the age of a bruise by its color." The new distractor "Only the yellow bruise can be dated" is the plausible wrong belief that yellow marks an older bruise, which the abstract names as a common perception it contradicts. It is not defensible. Options are alphabetical ("Only" before "The ..." before "Their"), lengths 35 to 39 characters, key fifth. The update no longer names the q2 key. Nothing in q4 depended on the deleted sentence.
- q1, q2, q4 unchanged and pass. The B6 flag on the q2 update (benzodiazepine screen implies the q1 key) stands as a flag only.

### abuse-domestic-41: FAIL (q3)

- q3 FAIL (low, internal contradiction).
  - Problem: the stem says her partner "holds her phone and her wallet", and the explanation opens "Her partner holds her phone". The new update sentence says she "has no phone of her own". Those cannot both be true. Lens B item 1.
  - Required change: in the q3 update, replace "She asks for help but has no phone of her own." with "She asks for help, but her partner still has her phone." Nothing else in q3 needs to change. The explanation then matches the stem and the update.
  - Content otherwise PASS. WHO 2014 handbook (WHO/RHR/14.26), opened and extracted this round, Support section, "Referrals" (p 30 to 31): "Often women do not follow up on referrals from health-care providers", and "Offer to telephone to make an appointment for her if this would be of help (for example, she does not have a phone or a safe place to make a call)", and "Tell her about the service (location, how to get there, who she will see)". The key matches that text. Each distractor reason is true from the stem: a call once home or a crisis line number depends on a phone he holds, and a letter to the home can be found. KF5 tag is honest (connecting her with an abuse service). Options are alphabetical, lengths 30 to 35 characters, key third. In mock mode the update does not name the q2 key ("Say she can return to talk any time"). It shows that she spoke later, which fits any response that did not close the door, so it is not a cue.
  - Uniqueness: no item keys the clinician making the call with her. Judged against the bank, see "Overlap judged" below.
- q1, q2, q4 unchanged and pass. q4 still holds after the q3 change (it uses only the q4 update and WHO 2013).

### abuse-domestic-43: FAIL (q3)

- q3 FAIL (low, distractor reasons below the standard).
  - Content: CPS 2025 practice point (Shouldice et al.) reread on cps.ca this round. "Coagulation testing should include: CBC, differential, blood smear. International normalized ratio (INR), partial thromboplastin time (PTT). Fibrinogen. Factor VIII, von Willebrand antigen, platelet-dependent von Willebrand activity. Blood group (for interpretation of von Willebrand results). Factor IX, XIII." The key and the explanation's list match. With a normal CBC, platelets, INR and PTT, the specific factor and von Willebrand tests are the next step, so the key is the single best answer. "No further bleeding tests" and "Repeat INR and PTT in 24 hours" are rejected with true reasons.
  - Problem: the only reason given against "Bleeding time at the bedside" and "Platelet function screen only" is "A bleeding time and a platelet function screen are not among the tests it lists." That is a "not indicated" reason, which SAMP_SPEC section 8 says is not a reason. The writer flagged this. A candidate learns nothing about why these tests fall short.
  - Required change: replace the sentence "A bleeding time and a platelet function screen are not among the tests it lists." with "A bleeding time or a platelet function screen looks at platelet plug formation and does not measure factors VIII, IX or XIII, so neither can exclude hemophilia or factor XIII deficiency." No other field changes. Recheck the explanation stays under house style (no semicolons).
  - Mock mode: the update does not name or imply the q1 or q2 key. KF3 tag: a bleeding workup excludes a mimic rather than finding an injury, but the bank already files "Coagulation studies" under KF3 in abuse-domestic-17 q3, so the tag is consistent. Accepted, noted below for the physician.
  - Uniqueness: abuse-domestic-17 q3 (signed) keys "Coagulation studies" as one menu choice with one sentence of teaching. The batch06 oral case and abuse-domestic-36 q3 reward "CBC, INR, PTT and fibrinogen". No item keys or teaches that normal screening tests do not complete the workup, or names factor VIII, IX, XIII or von Willebrand testing in suspected maltreatment. The factor and von Willebrand items elsewhere (multiple-trauma s14, gi-bleed s39 and s68) treat known disorders or acquired von Willebrand syndrome. New to the bank. It does not reuse the CT head decision of 39 q2.
- q4 PASS. WHO 2014 handbook, "Avoid putting her at risk" (p 28): "Talk about abuse only when you and she are alone. No one older than age 2 should overhear your conversation." and "If her children are with her, ask a colleague to look after them while you talk." The key matches. The new distractor (open triage desk) is wrong under the same text. No remaining distractor is defensible. Options are alphabetical, key third. The Hamby claims are gone.
- q1, q2 unchanged and pass.

## Writer's uncertain points, judged

1. 43 q3 rejects bleeding time and a platelet function screen only because CPS does not list them: agreed this is too thin. FAIL, fix above.
2. 41 q3 says a family physician referral adds delay, as the writer's own reasoning: accepted. A referral through a third party is an extra step by plain logic, and the stem gives her two missed diabetes clinic visits. Advisory only: "she has missed her recent clinic visits" would be more exact as "she has missed her last two diabetes clinic visits".
3. WHO 2014 handbook URL on the UNFPA Philippines site: accepted. I opened it. It is the full WHO/RHR/14.26 PDF (title page, 112 pages, the quoted passages on p 28, 30 and 31). A WHO landing page also exists and returned the correct title: https://www.who.int/publications/i/item/WHO-RHR-14.26 . Advisory: since 41 and 43 go back anyway, the writer may switch `S.whoHandbook.url` to that WHO page, matching the style of `S.who`. Not required.

## Overlap judged (not a failure)

- 41 q3 against abuse-domestic-28 q3 (signed, KF5). 28 q3 keys "Hospital violence program advocate" and rejects "Crisis line number on paper" because "A number on paper leaves her to make every call alone." 41 q3 rejects "Give her the crisis line number" for a related reason. The keyed decisions differ: 28 asks who to involve for a high lethality case, 41 asks how to make the connection when she has no safe phone, from WHO's referral tips. The shared idea sits in one distractor reason, not the key. Accepted, listed for the physician.
- 41 q3 against abuse-domestic-27 q3 (signed, KF4). 27 q3 keys how she can keep information safely when her husband checks her phone. 41 q3 keys the clinician phoning the service. Different decision. Accepted.
- 41 q3 against abuse-domestic-18 q4. That phone call is a child protection report. Different decision.

## Advisories (not grounds for failure)

- 43 q4 explanation ends "before they go home". A toddler with a subdural hemorrhage and a planned child welfare report is unlikely to go home soon. "before her partner returns" fits the update better.
- Mock-mode facts left in because a later question needs them (B6, flag only, carried from round 2): 40 q2 update implies the 40 q1 key, 41 q3 update confirms the 41 q1 key, 43 q4 update ("A child welfare report is planned") implies the direction of 43 q1 and q2.

## Needs physician decision

1. Carried from round 2, items 1 and 3 to 6 (KF4 privacy keys including 43 q4, 42 q3 CT for a flank blow with normal urinalysis, 41 q2 "List the signs" distractor, bank consistency on bruise dating against 40 q3, and the KF3 tag of 42 q2). Item 2 (41 q3 as D1 row 20) is closed: the writer rebuilt it and D1 was not used.
2. 41 q3 and abuse-domestic-28 q3 both reject a crisis line number in favour of an active connection. Confirm the overlap is acceptable.
3. 43 q3 KF3 tag: a bleeding disorder workup excludes a medical mimic. The bank files it under KF3 (abuse-domestic-17 q3). Confirm.
4. Bank consistency: 43 q3 teaches that a normal CBC, INR and PTT do not complete the bleeding workup for an intracranial hemorrhage, while the batch06 oral case model answer lists "CBC, INR, PTT and fibrinogen to exclude a bleeding disorder". Decide whether that oral case line needs a note.

## Key feature coverage

Passing now: KF1 40 q1, 41 q1, 42 q1, 42 q4, 43 q2. KF2 39 q1, 39 q4, 40 q3, 43 q1. KF3 39 q2, 39 q3, 40 q2, 42 q2, 42 q3. KF4 41 q2, 43 q4. KF6 40 q4, 41 q4. KF5 rests on 41 q3 alone, and 43 q3 is one of six KF3 items. Once the two one-sentence fixes land, every key feature is covered. Neither fix moves a key, so the position spread (4, 4, 4, 4, 3) holds.

## Sources verified this round

- WHO. Health care for women subjected to intimate partner violence or sexual violence: a clinical handbook. WHO/RHR/14.26. 2014. Full PDF downloaded and text extracted: https://www.philippines.unfpa.org/sites/default/files/pub-pdf/WHO_RHR_14.26_eng_1.pdf (p 28 "Avoid putting her at risk", p 29 to 31 "Support" and "Referrals"). WHO landing page with the same title: https://www.who.int/publications/i/item/WHO-RHR-14.26
- CPS 2025 practice point (Shouldice M, Ward MGK, Nolan K, Cory E), full text on cps.ca: https://cps.ca/en/documents/position/medical-assessment-of-THI-CM (laboratory evaluation list, dilated eye examination paragraph). Citation URL https://pubmed.ncbi.nlm.nih.gov/40904407/ kept from round 2.
- Mosqueda L, Burnight K, Liao S. J Am Geriatr Soc 2005. Abstract read through PubMed E-utilities: https://pubmed.ncbi.nlm.nih.gov/16078959/

## Summary

5 SAMPs, 20 questions. The file is intact: five SAMPs, no duplicated or truncated text, and 39 and 42 byte-identical to the passing version. 3 SAMPs pass (abuse-domestic-39, 40, 42). 2 fail (abuse-domestic-41, 43), each on one low-confidence, one-sentence fix: 41 q3 says she "has no phone of her own" while the stem and explanation say her partner holds her phone, and 43 q3 rejects bleeding time and a platelet function screen only because CPS does not list them. Every round 2 required fix was applied. The new keys (phone the service with her now, factor and von Willebrand tests) are new to the bank and supported by the WHO 2014 handbook and CPS 2025, which I read myself. Tests and the type check pass. Four physician items, one of them carried from round 2.
