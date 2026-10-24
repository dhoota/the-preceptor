# Q500B verify review: s88 revision 1, Emergency medical services (EMS)

File reviewed: `src/samps/s88/ems.ts` (`EMS_S88`, ems-37 to ems-41), the whole final batch. First review: `docs/reviews/q500b-qa-s88.md`. Writer report with "Revision 1": `docs/reviews/q500b-writer-s88.md`. This reviewer did not write, edit or review this batch before, and did not edit it now (REVIEW-RULES rule 1). Every fix below goes back to the writer.

## Tests

`SAMP_BATCH=s88 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed (bank-wide near-duplicate stem test 8.1 s). `npx tsc --noEmit -p .` shows no errors in `samps/s88`. The overlaps below are in scenario and teaching point, which the TF-IDF test does not catch.

House style: no em or en dashes, no semicolons, Canadian spelling, no personal names, `author: "Preceptor"`, `reviewed: false`, `version: 1`. Key positions and menu count are as the writer reports.

## Bank-wide keyword search

Searched all of `src/samps` and `src/cases` (Q500 and other Q500B batches included) for measles, insulin pump, pump, glucagon, dextrose 50, unawareness, airborne, N95, MMR and roommate.

- **measles, airborne, N95:** signed pediatric-fever-05 (s14, `reviewed: true`, "Toddler with fever, cough and red eyes") is a close match for ems-41. See ems-41 below. Other measles hits are vaccine-schedule items (s46, s61, s70) or differentials (s46, s49), not repeats. Airborne and N95 hits in s12, s39 and s41 are TB items.
- **insulin pump:** only chest-pain s28 (cardiac risk). The pump interruption point in ems-37 q2 is new.
- **unawareness:** no hits. The ems-37 q3 teaching point is new.
- **glucagon, dextrose 50, roommate:** signed seizures-43 (s49, `reviewed: true`, "Student found confused in bed") and signed loc-21 (s32, `reviewed: true`) are close matches for ems-37. The D50 with IV against glucagon without IV decision is also taught in s16 seizures, s50 shock (beta-blocker item, dc-hypoglycemia source) and s07 loc. The s09 EMS hypoglycemia patch (sulfonylurea, treat and release) is a different point.

## Sources

| Source | Result |
|---|---|
| PHAC, Measles: for health professionals, https://www.canada.ca/en/public-health/services/diseases/measles/health-professionals-measles.html | Opened. Page dated 2026-04-08. Supports airborne precautions with an AIIR for suspected or confirmed cases, fit-tested N95 "regardless of the immunity/vaccination status of the healthcare worker", virus in the air "up to 2 hours", report suspected cases and "Do not wait for laboratory results". It also says only staff with presumptive immunity should enter the room. It does not give the two-dose standard or the 72 hour window (those come from the CIG, which ems-41 q3 cites correctly). |
| Canadian Immunization Guide, measles vaccines, https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html | Opened. Last partial content update June 2025. Supports two documented doses regardless of birth year or lab evidence for health care workers, vaccinate those without, MMR effective within 72 hours of exposure, "Ig provides only short-term protection and requires postponing the administration of MMR vaccine", and Ig groups that do not include health care workers. Serology is "not recommended before or after" vaccine, though it may be used for health care workers. No work exclusion text on this page. |
| Diabetes Canada 2018 chapter 14, https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14 | Opened. Supports 10 to 25 g (20 to 50 mL D50W) IV over 1 to 3 minutes with IV access, glucagon 1 mg SC or IM without IV access, the unawareness definition, reversal with strict avoidance for 2 days to 3 months, CSII or CGM with education and follow-up, review of the risk of driving, and unawareness as a risk factor for severe hypoglycemia. |
| Umpierrez and Klonoff, Diabetes Care 2018, https://pmc.ncbi.nlm.nih.gov/articles/PMC6054505/ | Opened (first 100,000 of 133,000 characters). Supports small depot, rapid-acting insulin, short interruption causing hyperglycemia and possibly DKA, pump failure leading to DKA, replacement of the pump basal dose with long-acting basal insulin. Table 1 lists several contraindications to pump use in hospital, of which impaired consciousness is one. No time limit for an interruption. |
| Hartford compendium, CHEMM SALT, NCPC 2018, CMAJ 2021, ELSO 2021 | Not reopened (WebFetch budget). The first review opened all five and checked each claim. I checked that every replacement sentence the first review prescribed is now in the file word for word, and that no new claim was added to ems-38, ems-39 or ems-40 except the ems-40 q1 distractor reason (the ELSO 60 minute target, already verified). |
| IMIST-AMBO (PubMed 22626739), ARREST 2020 | Not reopened. Real, verified in the first review. ems-37 q1 now uses the first review's wording. |

## First-review fails: resolution

| First-review fail | Resolved? |
|---|---|
| ems-37 stem, q3, q4 (batch04 fall case, suicide-risk-02, ems-06) | Yes. No fall, floor, apixaban, long lie, CK, fridge or mail remains. But the rebuild lands on two other signed items (see ems-37). |
| ems-37 q1 IMIST-AMBO wording | Yes. |
| ems-38 q2, q3, q4 explanation sentences | Yes, exact wording applied. |
| ems-39 q1 cue and unsourced sentence | Yes. |
| ems-39 q3 cue and glucagon, metoclopramide, water sentence | Yes as prescribed, but the prescribed update wording still cues q2 (see ems-39). |
| ems-39 q4 "Cancel the urgent transfer" and "before departure" | Yes as prescribed, with the same residual cue. |
| ems-40 q1 destination distractor, q3 "at 0724", q3 pupil sentence | Yes. q1 now tests scene time only. |
| ems-41 near-duplicate of ems-24 and mp-37 | Yes. The new SAMP shares nothing with ems-24 or mp-37. But it retells signed pediatric-fever-05 (see ems-41). |

## Verdicts

### ems-37 Handover after a low sugar: FAIL

New and sound: the pump interruption point (q2) and hypoglycemia unawareness (q3). Numbers check: 1450 to 1620 is 90 minutes, D50 50 mL is 25 g, 10 mL is 5 g, 150 mL is 75 g (three times 25 g). Key q2 is defensible (writer point 2): Umpierrez supports either restoring pump delivery once no contraindication applies or replacing pump basal with long-acting insulin, and no distractor is also right. Overlap with signed content, high confidence:
- Signed seizures-43 (s49): "A 21-year-old man with type 1 diabetes is brought to the emergency department by his roommate, who found him sweaty and confused", IV access failed, glucagon 1 mg IM. ems-37: a 23-year-old man with type 1 diabetes whose roommate found him "confused, sweating", no IV, glucagon 1 mg IM. Its q2 asks for the cause of the low with options "Adrenal insufficiency", "Gastroparesis delaying his meal", "Insulin-secreting tumour". ems-37 q3 uses "Adrenal insufficiency", "Diabetic gastroparesis", "Insulinoma of the pancreas", and its explanation rejects them in the same order.
- Signed loc-21 (s32) q1: glucose 1.7 mmol/L, IV in place, options "Buccal glucose gel 15 g", "Dextrose 50% 50 mL IV", "Glucagon 1 mg IM", key D50 50 mL, explanation "Diabetes Canada advises 10 to 25 g of IV glucose, and 50 mL of dextrose 50% gives 25 g. Glucagon is the choice when there is no IV access." ems-37 q4 keys the same option for the same reason with the same source. s16 seizures, s50 shock and s07 loc teach it again.

| Q | Verdict | Fix |
|---|---|---|
| Stem | FAIL | Change the frame so it no longer retells seizures-43: not a young man with type 1 diabetes found sweaty and confused by a roommate. For example, a person in their 40s or 50s found by a coworker or partner, or at a workplace or public place. Keep the pump, the crew disconnecting it, IM glucagon and the crew leaving. The q1 option "What the roommate saw and heard" and the q3 update change to match. |
| q1 | PASS | Keys 3, 4, 6 sound. Each distractor reason is true (glucose and GCS measurable now, basal rate and boluses stored in the pump, which the crew is handing over). |
| q2 | FAIL (low) | (a) Mock cue (B6): the update gives the disconnection time, a q1 key, and q2 does not need it, because the stem already says the pump is off and the key holds whatever the time. Change the update to "The pump has not been reconnected since the crew removed it." and change "He has had no insulin for 90 minutes." to "He has had no insulin since the crew removed the pump." (b) Change "impaired consciousness, the reason not to use a pump in hospital, no longer applies" to "impaired consciousness, one of the listed reasons not to use a pump in hospital, no longer applies", because Umpierrez Table 1 lists several. |
| q3 | FAIL | Keep the key and the teaching point. Replace the three distractors copied from seizures-43 q2 (adrenal insufficiency, gastroparesis, insulin-secreting tumour) with different ones that do not explain confusion without warning symptoms, each with a true reason in the explanation, and grep the bank for the new set. Mock-mode note (B6, leave and flag): the update shows the crew relayed the bystander's account, which hints at a q1 key. q3 needs that fact for KF2, so leave it and flag it for the physician. |
| q4 | FAIL | Replace. The D50 50 mL with IV against glucagon without IV decision repeats signed loc-21 q1 (same key, same reason, same source) and is taught in s16, s50, s07 and s49. Write a new KF1 or KF2 question on a point the bank does not hold, and search the bank for it first. If it is KF1, it should be a real call-ahead or field-direction decision, not a hypothetical resident question. |

### ems-38 A call from a college campus: PASS

All first-review fixes applied word for word. Keys sound. SALT categories, the hot and warm zone logic and the transport priority are consistent with the sources the first review opened. No overlap found beyond what the first review cleared (multiple-patients-13 is hospital actions).

| Q | Verdict | Fix |
|---|---|---|
| q1 | PASS | None. |
| q2 | PASS | None. |
| q3 | PASS | None. |
| q4 | PASS | None. |

### ems-39 A toddler and an empty remote: FAIL (mock cue)

Keys sound, numbers check (20 mm, 14 kg, 50 and 80 minutes within 12 hours, sucralfate 1 g every 10 minutes up to 3 doses, 20 hours beyond 12). The first review's sentences are in place. The residual problem is a mock-mode cue that the prescribed wording kept: the q3 update "Her transfer is being arranged", the q4 update "While the transfer is being arranged" and the q4 option "Defer transfer until the next day" together show that she is being transferred today. That rules out three of the five q2 options ("Admit locally for repeat radiographs", "Observe 4 hours, then reimage", "Transfer for endoscopy tomorrow"). Neither q3 nor q4 needs the transfer to be named: the q3 key holds whether or not she is moving, and the q4 key is about sucralfate.

| Q | Verdict | Fix |
|---|---|---|
| q1 | PASS | Optional: change the option "No imaging before transfer" to "No imaging needed now", and "Sending her without imaging" to "Skipping imaging", so q1 does not hint at the q2 key. |
| q2 | PASS | None. |
| q3 | FAIL (medium) | Change the update to "It is now about 80 minutes since her father found her with the remote." and the prompt to "Which of the following should she receive now?" Keep "Neither may delay her transfer" in the explanation (explanations are shown after answering). |
| q4 | FAIL (medium) | Change the update to "Her mother calls. She now thinks the remote may have been missing its battery since yesterday afternoon, about 20 hours ago." Change the option "Defer transfer until the next day" to "Defer endoscopy until the next day", and keep the option order alphabetical. The explanation may keep "so the transfer goes ahead". |

### ems-40 A patch from a fitness centre: PASS

First-review fixes applied. q1 now has only scene-time distractors, so the q2 prompt ("before he arrives") and q3 update no longer cue it. "Give amiodarone 150 mg before moving" is a fair distractor: the second dose is reasonable but can be given en route, and the explanation says moving is the priority. 0655 to 0712 is 17 minutes.

| Q | Verdict | Fix |
|---|---|---|
| q1 | PASS | None. |
| q2 | PASS | None. |
| q3 | PASS | None. |
| q4 | PASS | None. |

### ems-41 A call ahead about a child with a rash: FAIL (retells signed pediatric-fever-05)

Clinically accurate and every claim is supported by PHAC 2026 or the CIG. No contradiction: PHAC says only staff with presumptive immunity should enter, which matches pediatric-fever-05, and the N95 for all staff key is consistent with it. But three of the four questions retell signed pediatric-fever-05 (s14, `reviewed: true`), high confidence:
- Stem. pediatric-fever-05: "fever for 4 days with cough, runny nose and red eyes. Today a red blotchy rash started behind his ears and on his face and is spreading down his trunk. His parents chose not to vaccinate him." ems-41: "has never been vaccinated has had 4 days of fever, cough, runny nose and red eyes. A red blotchy rash began on his face yesterday and has spread to his trunk." Same age band, same days, same words.
- q1 key (airborne isolation room, virus in the air for up to 2 hours) is the pediatric-fever-05 q2 "airborne" accept item and explanation sentence ("The virus stays in room air for up to 2 hours").
- q2 keys (N95 for staff, report to public health now) are the pediatric-fever-05 q2 "n95" and "ph" accept items ("Notify public health immediately").
- q4 key (where the boy waited, to find exposed patients) is the pediatric-fever-05 q2 "contacts" accept item ("Identify exposed people in the waiting room").
The call-ahead framing is new, but the decisions are the same. The writer's report says the isolation room and the immune-staff rule were put in the stem and the q2 prompt instead of being keyed. The isolation room is in the stem, but q1 still keys it, and the immune-staff rule is not in the stem or the prompt. D1 cannot cover this: it allows one repeat of a key-feature decision, here there are three, and D1 is frozen at 20.

Writer point 1 (q3 KF tag): KF1 is call ahead, field direction and readying the department. Post-exposure vaccine for an exposed paramedic after handover is not that. It matches infectious-diseases KF10 ("Offer post-exposure prophylaxis to patients and contacts when needed"), and the bank already tags measles PEP that way inside another topic's SAMP (pediatric-fever-05 q3, `{ topic: "infectious-diseases", n: 10 }`).

| Q | Verdict | Fix |
|---|---|---|
| Stem | FAIL | Rewrite so the presentation no longer copies pediatric-fever-05: not an unvaccinated preschool child with 4 days of fever, cough, runny nose and red eyes and a blotchy rash spreading down from the face. For example, an adolescent or adult with a known exposure, or a case where the crew reports a lab-confirmed household contact and gives fewer prodrome details. |
| q1 | FAIL | Replace. Airborne isolation and the 2 hour air persistence are pediatric-fever-05 q2. Use a KF1 call-ahead or field-direction decision the bank does not hold, verified in PHAC or CIG text, and search the bank first. |
| q2 | FAIL | Replace. N95 for staff and immediate public health reporting are pediatric-fever-05 q2 accept items. |
| q3 | FAIL (tag only) | Keep the question. Every sentence is supported by the CIG (two doses regardless of birth year, MMR effective within 72 hours, Ig gives only short-term protection and postpones MMR, Ig groups do not include health care workers). Change `keyFeature` to `{ topic: "infectious-diseases", n: 10 }`, which the batch coverage test allows because ems KF1 is still tested by ems-40 q1 and q2. Optional: CIG says serology "may be indicated" for health care workers, so "Waiting for serology ... lets the 72 hour window pass" is the right reason and should stay as the only reason given. |
| q4 | FAIL | Replace, or change the teaching point. Finding exposed people in the department is pediatric-fever-05 q2 "contacts". A crew-only KF2 detail with a different use (for example, which crew members had contact and for how long, or what was done in the ambulance) would be new, but check that it is supported by a cited source and does not reuse the 2 hour air sentence. |

If the writer cannot find four new measles decisions, replace ems-41 with a different scenario that is not a chemical release, not measles, and not any scenario the first review or this review lists. Keep KF1 and KF2 coverage in the batch (KF1 currently relies on ems-40 q1 and q2 plus ems-41, KF2 on ems-37 and ems-40).

## Writer's flagged points

1. ems-41 q3 KF tag: not KF1. Retag to infectious-diseases KF10 (fix above).
2. ems-37 q2 key: defensible. "Basal insulin restarted now" is the single best answer, and the source supports both routes. Only the "the reason" wording needs a fix.
3. ems-37 q4: the distractor ranges are sound, but the question repeats loc-21 q1 and must be replaced.
4. ems-37 q2 update cue: it can be removed without breaking q2 (fix above), so B6 requires the reword rather than a flag. The q3 update cue stays as a flag.

## Not verified

- Hartford compendium, CHEMM SALT, NCPC 2018, CMAJ 2021, ELSO 2021, IMIST-AMBO PubMed page and ARREST were not reopened in this review (WebFetch near its weekly limit). They were opened and checked in the first review, and the text that cites them has changed only in the wording the first review prescribed.
- Umpierrez and Klonoff: the last 33,000 characters were not read. The claims used were all found in the part that was read.

## Summary of fails

- ems-37: stem frame and q3 distractors retell signed seizures-43, q4 repeats signed loc-21 q1, and the q2 update has a removable cue and a "the reason" wording error.
- ems-39: q3 and q4 updates and a q4 option cue the q2 transfer key. Exact rewording given.
- ems-41: stem, q1, q2 and q4 retell signed pediatric-fever-05. q3 is sound but needs the infectious-diseases KF10 tag.

ems-38 and ems-40 pass. No silent reversal of a SCORING-RULINGS entry and no contradiction of a signed item.

Overall: FAIL (3 items)
