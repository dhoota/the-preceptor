# Q500 round 2 verify: s67, Abuse (domestic)

Fresh independent review by Preceptor of the revised batch. File: `src/samps/s67/abuse-domestic.ts`, ids abuse-domestic-39 to abuse-domestic-43. This reviewer did not write, edit or review this batch before, and edited no SAMP, source or shared file (REVIEW-RULES rule 1). Both lenses were applied to the whole final batch, not only the changes. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: docs/reviews/q500-qa-s67.md (round 1 verdict), docs/reviews/q500-writer-s67-r2.md, git history of the file, Q500_BRIEF, SAMP_REVIEW_BRIEF, SAMP_SPEC, REVIEW-RULES, DECISIONS, SCORING-RULINGS. Catalogues read: abuse-domestic, multiple-trauma, pediatric-fever, plus greps of msk, burns, lacerations, delirium-agitation, abdominal-pain and tox. Current Q500 text grepped in s5x, s6x, s70 and case batch11 to batch15. No elder or geriatric catalogue exists.

Checks run: `SAMP_BATCH=s67 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 128 tests). `npx tsc --noEmit -p .` printed nothing for samps/s67. House style scan is clean (no dashes, no semicolons in strings, Canadian spelling). Single key positions, first to fifth: 4, 4, 4, 4, 3 (19 singles, highest share 21%). One menu (39 q3).

## Verdicts

| Id | Verdict | Questions that fail |
|---|---|---|
| abuse-domestic-39 | PASS | none |
| abuse-domestic-40 | FAIL | q3 (low) |
| abuse-domestic-41 | FAIL | q3 (medium, repeat) |
| abuse-domestic-42 | PASS | none |
| abuse-domestic-43 | FAIL | q3 (high, repeat), q4 (medium, defensible distractor and source) |

## Round 1 required fixes: applied?

| Round 1 fix | Applied | Note |
|---|---|---|
| 39 q3 replace, keep a menu | Yes | New menu verified against CPS 2025. Passes. |
| 40 stem reframe | Yes | Older man, paid live-in caregiver. Differs from the batch05 oral case and from 04, 24, 25, 26, 36. |
| 40 q3 replace | Yes, with new defects | See 40 q3 below. |
| 40 q4 citation range | Yes | "sections 44 to 50". Sections 46 and 50 read on bclaws.gov.bc.ca. |
| 41 q2 replace | Yes | Response to a denial. New to the bank. Passes. |
| 41 Miller source | Yes | Replaced by WHO 2013. Every WHO claim in 41 checked against the full text. |
| 42 q1 cue | Yes | Sentence replaced word for word as required. |
| 42 q2 replace | Yes | Forced sex and PEP. New to the bank. Passes. |
| 42 q3 rebuild | Yes | Keys contrast CT with delayed images, matching AUA Statements 2 and 3. Passes. |
| 43 q2 B5 and wording | Yes | Two hedged distractors, "raises" and "lowers" on both sides. Survey wording corrected. |
| 43 q3 replace | Applied, but the replacement repeats a signed key | See 43 q3 below. |

## Per question

### abuse-domestic-39: PASS

- Stem PASS. Timeline and facts consistent. 6.1 kg fits 3 months.
- q1 PASS. Sheets 2013 abstract verified. Advisory kept from round 1: "most likely cause" is strong for one frenulum tear.
- q2 PASS. ACR revised 2025 variant 1 (prior verification stands).
- q3 PASS (menu, select 2, keys "Full mouth exam with both frenula" and "Head growth from past records"). CPS 2025 full text read on cps.ca: the focused examination lists "Growth parameters, including head circumference, compared with previous measurements" and "Mouth, including the frenulae (tongue and lips)". Abdominal CT is "recommended for infants with an abnormal abdominal examination, abdominal bruising, or elevated transaminases or lipase or amylase". Spine MRI "particularly in cases where symptomatic intracranial hemorrhage is present or there is concern for neck injury, vertebral fractures, or multiple rib fractures". PECARN and other decision tools "have not been validated for child maltreatment". A babygram or bone scan, and bedside or portable films, are insufficient. No distractor is defensible. Uniqueness: head circumference is only a stem fact in abuse-domestic-17, and the frenulum appears only as a finding or write-in model line (batch06 oral case). Neither is keyed as a decision. Writer flag on PECARN: see "Writer open points".
- q4 PASS. CPS 2013 bruising statement (Ward) verified as real (PubMed 24426797).

### abuse-domestic-40: FAIL (q3)

- Stem PASS. "The caregiver told her last week that her father sleeps better now" reads correctly with "her" as the daughter.
- q1 PASS. ESDC 2014 (prior verification stands).
- q2 PASS. PharmaNet page (prior verification stands).
- q3 FAIL (low, two defects in one question).
  - Defect 1, mock-mode cue (ruling B6). Current update: "PharmaNet shows no benzodiazepine dispensed to him. Fully undressed, he has a yellow bruise ...". The first sentence names the q2 key ("Check his PharmaNet dispensing record") and q3 does not need it. It is a bruise dating question. Required change: delete "PharmaNet shows no benzodiazepine dispensed to him." from the q3 update. Nothing in q3 or q4 depends on it (the stem's pharmacy list already shows no sedative, and q4's explanation does not use it).
  - Defect 2, hedged-key cue (ruling B5). The key "Their age cannot be judged by colour" is the only option that declines to date the bruises. The four distractors all assert a confident age. A test-taker can pick the lone "cannot tell" option without the content. Required change: reword at least one distractor into another limited or conditional claim that is still wrong, for example "Only the yellow bruise can be dated" (Mosqueda found mostly yellow bruises within 24 hours) or "Colour dates bruises in people under 80". Keep 5 options, alphabetical order, and recheck length parity and key position (q3 key is fifth, and position five holds only 3 of 19 keys, so it may move).
  - Content PASS: Mosqueda 2005 abstract verified (16 bruises predominantly yellow within 24 hours, "One cannot reliably predict the age of a bruise by its color", 101 adults aged 65 and older examined daily). Uniqueness: bruise dating is keyed nowhere. It appears only as a teaching sentence in the batch05 oral case rubric ("Bruise colour is a poor guide to age"). Accepted, but see physician items.
- q4 PASS. Adult Guardianship Act s 46(1) and (2) and s 50 read on bclaws.gov.bc.ca and match the explanation.

### abuse-domestic-41: FAIL (q3)

- Stem PASS. pH 7.14, bicarbonate 8, glucose 28 fit moderate to severe DKA.
- q1 PASS. Justice Canada page (prior verification stands). See advisory on 41 q1 and 42 q1.
- q2 PASS. WHO 2013 Figure 1 care pathway, read in the IRIS text of the PDF: when IPV is not disclosed, "Give information on services if available. Do not pressure to disclose. Offer information on IPV impact on health and children. Offer follow-up appointment." Recommendation 10 has "listening without pressuring her to respond or disclose information". The key matches "offer follow-up". Distractor reasons are true. No item in the bank keys the response to a denial. The private moment arises by chance and is not keyed, so the "seen alone" device is not reused.
- q3 FAIL (medium, repeat of a signed key).
  - Problem: abuse-domestic-26 q3 (s20, `reviewed: true`) asks "Which of the following team members is most appropriate to help him protect his income?" and keys "Social worker", teaching that a pharmacist can restart medicines but cannot fix the money that pays for them. 41 q3 asks "Which of the following team members is most important to address the cause of her repeated ketoacidosis?" and keys "Hospital social worker", teaching that diabetes teaching and specialist advice cannot fix access when the partner controls the money. Same key decision (social worker for financial abuse that blocks access to medication), same lead-in form, same twist. Round 1 did not check 26 q3. It is not a D1 entry.
  - Required change: replace 41 q3 with a KF5 decision new to the bank. It must stay KF5, because 41 q3 is the batch's only KF5 item. A possible angle is how to connect her with violence services before discharge (for example a warm handoff to a violence counsellor in the department, against a phone number, a letter or a later referral), checked first against abuse-domestic-27 q3, 28 q3, 01 q4 and 10 q4. Recheck the key position balance after the change (position three holds 4 of 19 now).
  - Alternative for the product owner only: KF5 literally names social workers, so this could be recorded as D1 row 20, the last row allowed under the freeze. A reviewer cannot grant that.
- q4 PASS. WHO 2013 verified: first-line support includes "assisting her to increase safety for herself and her children", recommendation 4 warns about "taking them home if an abusive partner is there", and recommendation 37 says mandatory police reporting "is not recommended" while a report should be offered "if the woman wants this". Overlap with safety-plan keys (24 q3, 29 q4, 32 q3) was accepted in round 1 for the insulin twist. I agree.

### abuse-domestic-42: PASS

- Stem PASS.
- q1 PASS. Required sentence present. The direction ("more often") remains, but the figure no longer cues q4.
- q2 PASS. WHO 2013 recommendation 1 ("asking about her history of violence, listening carefully, but not pressuring her to talk") and recommendation 15 ("Consider offering HIV post-exposure prophylaxis (PEP) for women presenting within 72 hours of a sexual assault. Use shared decision-making") verified. 2 days is within 72 hours. KF3 tag is honest only through "can reveal injuries she has not mentioned". Most of the teaching is PEP. Acceptable, noted for the physician. No item keys asking about sexual violence after a physical IPV disclosure.
- q3 PASS. AUA page read: Statement 2 lists "significant blow to flank" and "significant flank ecchymosis", its discussion says renal injury can occur "despite absence of hematuria", Statement 3 calls for "immediate and delayed images", and "Ultrasound may be used in children, although CT is preferred." The explanation matches. PubMed 33053308 matches the citation. No renal trauma imaging item exists elsewhere in the bank (s45 urotrauma items are urethral).
- q4 PASS. Peitzmeier 2020 (prior verification stands, abstract reread).

### abuse-domestic-43: FAIL (q3, q4)

- Stem PASS.
- q1 PASS. Pierce 2021 abstract reread: 95.6% and 87.1%, the listed regions, under 4 years.
- q2 PASS. B5 fix done. Hamby 2010 abstract: 33.9% against 8.6% of youth who witnessed partner violence. "No law requires a police report for a capable adult's injury" holds for a bruise (gunshot wound laws do not apply).
- q3 FAIL (high, repeat of a signed key and its teaching).
  - Problem: abuse-domestic-17 q3 (s20, `reviewed: true`) keys "Dilated fundoscopy" for an infant with subdural hematomas, and its explanation already teaches "Dilated fundoscopy by an experienced pediatric ophthalmologist is indicated for any infant with intracranial hemorrhage, ideally within 72 hours because retinal hemorrhages fade." 43 q3 keys "Dilated ophthalmology exam within 72 hours" for a toddler with a subdural, with the same reason. The writer's "when and by whom" angle is the teaching 17 q3 already gives. Round 1 suggested timing and who performs fundoscopy "when CT is normal", which is a different situation from a known hemorrhage. The batch06 oral case also keys "Dilated retinal exam by ophthalmology".
  - Required change: replace 43 q3 with a KF3 decision new to the bank. Possible angles, each to be checked first against abuse-domestic-06 q2, 17 q3, 17 q4, 19 q2, 20, 23 q3 and the batch06 oral case: (a) the bleeding workup for a subdural, where CPS 2025 lists factor VIII, von Willebrand antigen and activity, factors IX and XIII beyond INR and PTT, so normal INR and PTT do not exclude a bleeding cause, or (b) review of his earlier records and visits. Do not reuse the CT head decision of 39 q2. If the subdural update is removed, recheck that q4 and its update still hold. Recheck key position balance (position two holds 4 of 19 now).
- q4 FAIL (medium, defensible distractor and unsupported claims).
  - Problem 1: WHO's clinical handbook (Health care for women subjected to intimate partner violence or sexual violence, WHO/RHR/14.26, 2014) says "Talk about abuse only when you and she are alone. No one older than age 2 should overhear your conversation." Her son is 22 months old. So "Ask her in front of her son" is defensible under WHO guidance, and the explanation's "Asking in front of her son ... makes disclosure less likely" contradicts it.
  - Problem 2: the cited source, Hamby 2010, does not support the privacy point or "the survey authors called for adult victims to be identified wherever children are assessed". Hamby says screening for adult victims "could be done in child protective service settings". It also reports maltreatment among youth who witnessed partner violence, not partner violence among families of maltreated children, so "Families in which a child is maltreated often include an adult victim" reverses the direction.
  - Required change: replace the distractor "Ask her in front of her son" with another plausible wrong choice that no guidance supports (for example asking within earshot of other caregivers or at the open triage desk). Change q4's `source` to "who-ipv" and add `S.who` to the 43 sources (4 sources in all, within the limit). Rewrite the explanation to WHO's text: the consultation is conducted in private, and first-line support includes helping her increase safety for herself and her children. Remove the Hamby sentence from q4 (Hamby stays cited by q2). Recheck parity and alphabetical order.
  - Note: the key itself ("Ask her privately while a nurse sits with him") remains sound.

## Writer open points, judged

- 39 q3 PECARN distractor as a cue: not a defect. The option does not say whether a rule should decide head imaging, so a candidate must already know the content to read anything into it. In mock mode the q3 options name no q2 option. Accepted.
- WHO 2013 applied to a transgender woman in 42 q2: accepted. She is a woman, WHO's PEP window applies to any sexual assault survivor, and the higher sexual violence rate is kept for q4. A Canadian source exists for the 72 hour nPEP window (Tan DHS et al., Canadian guideline on HIV pre-exposure prophylaxis and nonoccupational postexposure prophylaxis, CMAJ 2017) and could be considered under SAMP_SPEC 9, but it is not required here because the question keys asking, not the PEP regimen.
- 43 q4 single source: FAIL, see 43 q4. Adding WHO is needed, and the WHO handbook's age 2 rule makes one distractor defensible.
- "Seen alone" device for KF4: no item in this batch keys a pretext for separating a patient from a companion any more. 41 q2 keys the response to a denial. 43 q4 keys a private conversation with a parent who is not the patient. That is privacy, the literal KF4 wording, but not the "everyone is seen alone" device. It stays open for the physician, below.

## Advisories (not grounds for failure)

- 41 q1 and 42 q1 have nearly the same lead-in ("most strongly suggests that her partner is controlling her") and both teach a partner controlling her medicines (insulin through money, estradiol directly). The facts differ, so it passes, but 42 q1 would be more distinct if its explanation named withholding gender-affirming hormones as a transgender-specific form of abuse, with a source that says so.
- Mock-mode facts left in because the later question needs them (B6, flag only): 40 q2 update (benzodiazepine screen) implies the 40 q1 key, 41 q3 update (bank card, insulin only when she behaves) confirms the 41 q1 key, 43 q4 update ("A child welfare report is planned") implies the direction of 43 q1 and q2.
- 39 q3 explanation says spine MRI is for "intracranial hemorrhage". CPS says "symptomatic intracranial hemorrhage". Minor.

## Needs physician decision

1. KF4 privacy keys. KF4 is the literal wording "offer a private ... setting", and the bank already keys privacy in 21 q2, 22 q2, 24 q2, 25 q2, 31 q2, 33 q1 and the batch05 oral case. Decide whether 43 q4 (asking the mother privately) is an acceptable new angle or must be rebuilt.
2. 41 q3: rebuild, or record as D1 row 20 (product owner).
3. 42 q3: AUA supports CT for a significant flank blow with flank ecchymosis even with a normal urinalysis. Some emergency physicians would observe a stable adult with a single kick. Confirm the key fits Canadian practice.
4. 41 q2 distractor "List the signs that point to abuse": some Canadian training (for example VEGA) encourages sharing concern about specific findings without judgment. As worded (a list put to her after a denial) it reads as pressure. Confirm it is not defensible.
5. Bank consistency on bruise dating: 40 q3 teaches that colour cannot date a bruise. abuse-domestic-04 (s01) accepts "different colour" as evidence of "Bruises of different ages", and multiple-trauma-15 q1 and the batch05 oral case rubric reward "bruises of different ages". Decide whether those keys need a wording note.
6. 42 q2 KF tag: KF3 holds only through hidden injuries. The PEP teaching sits closer to KF5 or KF6.

## Key feature coverage after the fails

Passing questions: KF1 40 q1, 41 q1, 42 q1, 42 q4, 43 q2. KF2 39 q1, 39 q4, 43 q1 (40 q3 fails). KF3 39 q2, 39 q3, 40 q2, 42 q2, 42 q3. KF4 41 q2. KF5 none (41 q3 fails, so its replacement must be KF5). KF6 40 q4, 41 q4. The menu (39 q3) passes.

## Sources verified this round

- CPS 2025 practice point (Shouldice), full text on cps.ca: https://cps.ca/en/documents/position/medical-assessment-of-THI-CM. Citation URL https://pubmed.ncbi.nlm.nih.gov/40904407/ opens the right record.
- WHO 2013 guideline: landing page https://www.who.int/publications/i/item/9789241548595 and full text from the WHO IRIS text bundle of 9789241548595_eng.pdf (recommendations 1, 4, 10, 15, 37, Box B, Figure 1, minimum requirements box).
- WHO clinical handbook 2014 (WHO/RHR/14.26): https://www.philippines.unfpa.org/sites/default/files/pub-pdf/WHO_RHR_14.26_eng_1.pdf (age 2 rule).
- Mosqueda 2005: https://pubmed.ncbi.nlm.nih.gov/16078959/ (abstract).
- AUA Urotrauma guideline: https://www.auanet.org/guidelines-and-quality/guidelines/urotrauma-guideline (Statements 2 and 3 with discussion), PubMed 33053308.
- BC Adult Guardianship Act: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96006_01 (s 46, s 50).
- PubMed records confirmed for Sheets 2013, Ward 2013, Peitzmeier 2020, Pierce 2021 and Hamby 2010. Abstracts reread for Pierce, Hamby and Peitzmeier.

## Summary

5 SAMPs, 20 questions. 2 SAMPs pass (abuse-domestic-39, 42). 3 fail (abuse-domestic-40, 41, 43). 16 questions pass, 4 fail: 40 q3 (low, PharmaNet mock cue and lone "cannot tell" key), 41 q3 (medium, repeats signed abuse-domestic-26 q3), 43 q3 (high, repeats signed abuse-domestic-17 q3 and its 72 hour teaching), 43 q4 (medium, a distractor is defensible under WHO's age 2 rule, and Hamby does not support the explanation). Every round 1 fix was applied. The new 43 q3 brought in a fresh repeat. Six physician items.
