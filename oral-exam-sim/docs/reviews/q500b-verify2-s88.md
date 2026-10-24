# Q500B verify review 2: s88 revision 2, Emergency medical services (EMS)

File reviewed: `src/samps/s88/ems.ts` (`EMS_S88`, ems-37 to ems-41), the whole final batch. Earlier verdicts: `docs/reviews/q500b-qa-s88.md` and `docs/reviews/q500b-verify-s88.md`. Writer report with "Revision 1" and "Revision 2": `docs/reviews/q500b-writer-s88.md`. This reviewer did not write, edit or review this batch before and did not edit it now (REVIEW-RULES rule 1). Every fix below goes back to the writer.

## Tests

`SAMP_BATCH=s88 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed (bank-wide near-duplicate stem test 4.7 s).

House style: no em or en dashes, no semicolons, Canadian spelling, no personal names, `author: "Preceptor"`, `reviewed: false`, `version: 1`. Single-question options are in alphabetical order.

## Bank-wide keyword search

Searched all of `src/samps` and `src/cases` (Q500 and other Q500B batches included).
- **fistula, thrill, arteriovenous:** no fistula bleeding item. Hits are aortoenteric, perilymph, tracheo-innominate and carotid-cavernous fistulas, "no IV or cuff on the fistula arm" (s45 multiple-trauma), a fistula thrill on exam (batch01 hyperkalemia case) and dialysis access in a menu (s05). ems-41 is new.
- **CliniCall, clinical support line:** no other hits.
- **coworker, office desk:** s87 loc-52 (Q500B) has a coworker who finds a woman confused at work, but it is about thrombocytopenia and who knows when she was last well. batch07 ectopic case has a coworker find a woman in an office washroom. Neither teaches hypoglycemia, pumps or ketones. No repeat.
- **unawareness, infusion set, ketone with pump:** no other hits. ems-37 q3 and q4 are new.
- The seizures-43 frame (young man, roommate, sweating) and the loc-21 D50 against glucagon point are gone from ems-37.

## Sources

| Source | Result |
|---|---|
| BCEHS CPG E04 dialysis emergencies, https://handbook.bcehs.ca/clinical-practice-guidelines/e-medical-emergencies/e04-dialysis-emergencies/ | Opened. Supports bleeding after a session from needle holes, "apply direct pressure to control", tape over the gauze and do not remove it to check because that usually causes more bleeding, circumferential dressings "can occlude the shunt and cause clotting", tape at most about 180 degrees, a thrill felt over a working shunt, conveyance preferentially to a facility that provides dialysis and to the nearest facility if critically ill, and CliniCall consultation. Tourniquets are not mentioned (writer uncertainty 1). |
| IMIST-AMBO, Umpierrez and Klonoff 2018, Diabetes Canada 2018 ch 14, Hartford compendium, CHEMM SALT, NCPC 2018, CMAJ 2021, ELSO 2021, ARREST 2020 | Not reopened (WebFetch near its weekly limit). Opened and checked in the first or second review. The text citing them changed only as those reviews prescribed, except ems-37 q3 distractors and q4, checked below against the claims those reviews recorded from Umpierrez and Diabetes Canada. |

## Earlier fails: resolution

| Earlier fail | Resolved? |
|---|---|
| ems-37 stem retells seizures-43 | Yes. 48-year-old woman, office desk, coworker, not sweating. |
| ems-37 q1 option and IMIST-AMBO wording | Yes. "What the coworker saw and heard". |
| ems-37 q2 update cue and "the reason" wording | Yes, word for word. |
| ems-37 q3 distractors copied from seizures-43 | Yes. New set (basal rate too low, DKA, HHS, infusion set occlusion), all true reasons. |
| ems-37 q4 repeats loc-21 q1 | Yes, replaced. But the new q4 has an explanation error (see below). |
| ems-38 q2, q3 sentences | Yes (unchanged since verify 1 pass). |
| ems-39 q1, q3, q4 transfer cues | Yes. The q3 prompt differs from the suggested wording to meet the 10 word minimum, and is fine. |
| ems-40 q1, q3 | Yes (unchanged since verify 1 pass). |
| ems-41 retells ems-24, mp-37, then pediatric-fever-05 | Yes. Replaced with a fistula bleed. No overlap found. But two new mock cues (see below). |

**Roommate and husband check.** No "roommate" remains anywhere in s88. The only spouse in ems-37 is the q3 update: "her husband, reached by phone at the scene, told them...". This is deliberate (the writer report names it) and coherent: the coworker found her, and the crew phoned her husband for the history. No text treats the husband as the person who found her or as present. Not a defect. The ems-41 wife is part of that stem.

## Verdicts

### ems-37 Handover after a low sugar at work: FAIL (q4 only)

Numbers check: 1440 found, 1620 arrival. Glucose 1.9 then 7.4 mmol/L. Glucagon 1 mg IM.

| Q | Verdict | Fix |
|---|---|---|
| Stem | PASS | None. |
| q1 | PASS | Keys 3, 4, 6 sound. |
| q2 | PASS | None. |
| q3 | PASS | Key and reasons sound. B6 flag stands as the writer reports. |
| q4 | FAIL (clinical, explanation) | The last sentence "Nothing in the history points to adrenal, pancreatic or thyroid disease or to drug use" is wrong for this stem. Vomiting together with recurrent severe lows (q3: three this month) in a person with type 1 diabetes is a textbook prompt to consider primary adrenal insufficiency, which makes "Serum cortisol level" a defensible competitor. Also, "raises concern that ketosis was already starting" is not supported by the source (writer uncertainty 3) and sits badly with a pump that delivered enough insulin this morning to cause a severe low. Ketones remain the single best answer now. Fix: (a) replace the option "Serum cortisol level" with "Hemoglobin A1c", giving the alphabetical options "Blood ketone level", "Hemoglobin A1c", "Serum lipase level", "Thyroid stimulating hormone", "Urine drug screen", `correct: 0` unchanged. (b) Replace "and the coworker's report that she vomited this morning, which only the crew heard, raises concern that ketosis was already starting." with "and she has vomited and not eaten, which only the crew heard." (c) Replace "so a blood ketone level is needed before her insulin plan is settled." with "so a blood ketone level is needed to find ketosis that her glucose would hide." (d) Replace the last sentence with "A hemoglobin A1c, lipase, thyroid test or drug screen does not change her insulin plan now, whereas a raised ketone level does." |

### ems-38 A call from a college campus: PASS

Unchanged since verify 1 pass. q1 to q4 PASS.

### ems-39 A toddler and an empty remote: PASS

All verify 1 fixes applied. No remaining cue to the q2 transfer key: the q3 update and prompt and the q4 update no longer name the transfer, and "Defer endoscopy until the next day" does not single out a q2 option. q1 to q4 PASS.

### ems-40 A patch from a fitness centre: PASS

Unchanged since verify 1 pass. q1 to q4 PASS.

### ems-41 A consult about a bleeding arm: FAIL (two mock cues)

New scenario, no repeat in the bank. Every explanation claim is supported by E04 except the two writer uncertainties (tourniquet, thrill loss needing the dialysis team), both reasonable inferences (notes below). Keys sound. KF tags fit (KF1 field direction, KF2 crew-only detail).

| Q | Verdict | Fix |
|---|---|---|
| Stem | PASS | None. |
| q1 | PASS | None. |
| q2 | FAIL (B6 mock cue) | The update "After 10 minutes of firm pressure the bleeding stops." shows the q1 key (pressure worked, so no tourniquet, bandage or elevation). Change it to "After 10 minutes the bleeding stops. The crew asks how to dress the site for transport." |
| q3 | PASS | None. |
| q4 | FAIL (B6 mock cue) | The update "He arrives at the regional hospital." shows the q3 destination key. Change the update to "At handover, the crew reports that before they arrived his wife had wrapped tape tightly all the way around his forearm over the towel for 15 minutes." Prompt and explanation can stay. |

## Notes for the physician (not fails)

1. ems-37 q3 and q4 updates both relay what the bystanders told the crew, which hints at the q1 key "What the coworker saw and heard". Both need it for KF2, so leave and flag (B6), as verify 1 ruled for q3.
2. ems-37: 100 minutes from being found (1440) to arrival (1620) is long for an urban ACP call but possible.
3. ems-37: whether recurrent severe lows plus vomiting should prompt a later cortisol check is a physician call. The q4 fix only removes the claim that nothing points to it.
4. ems-41: BCEHS calls its physician consult service CliniCall. The stem's "clinical support line" is a fair description. The physician may prefer the name.
5. ems-41 q1: E04 does not mention tourniquets. "Tourniquet above the fistula first" is wrong because of "first" and E04's direct-pressure instruction. Many services allow a tourniquet if direct pressure fails in a life-threatening fistula bleed, which the option wording does not contradict.
6. ems-41 q4: "Loss of the thrill ... needs urgent attention from his dialysis team" follows from E04's clotting warning and thrill description, not stated in those words.

## Not verified

WebFetch near its weekly limit. Not reopened in this review: IMIST-AMBO (PubMed 22626739), Umpierrez and Klonoff 2018 (PMC6054505), Diabetes Canada 2018 chapter 14, Hartford Consensus compendium, CHEMM SALT, NCPC 2018 battery guideline, Zipursky and Ratnapalan CMAJ 2021, ELSO 2021, ARREST 2020 (no URL). Only BCEHS E04 was opened.

## Summary of fails

- ems-37 q4: explanation says nothing points to adrenal disease although vomiting and recurrent severe lows in type 1 diabetes do, and claims ketosis was already starting without support. Replace the cortisol option and three sentences as given.
- ems-41 q2 and q4: updates reveal the q1 and q3 keys. Reword as given.

No silent reversal of a SCORING-RULINGS entry and no contradiction of a signed item found.

Overall: FAIL (2 items)
