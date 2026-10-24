# Q500B verify review 3: s88 revision 3, Emergency medical services (EMS)

File reviewed: `src/samps/s88/ems.ts` (`EMS_S88`, ems-37 to ems-41), the whole final batch. Earlier verdicts: `docs/reviews/q500b-qa-s88.md`, `docs/reviews/q500b-verify-s88.md` and `docs/reviews/q500b-verify2-s88.md`. Writer report with Revision 1 to 3: `docs/reviews/q500b-writer-s88.md`. This reviewer did not write, edit or review this batch before and did not edit it now (REVIEW-RULES rule 1).

## Tests

`SAMP_BATCH=s88 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed (bank-wide near-duplicate stem test 5.0 s). `npx tsc --noEmit -p .` shows no errors in `samps/s88`.

House style: no em or en dashes, no semicolons in content, Canadian spelling (centre, favourable, manoeuvre, tumour not used), no personal names, `author: "Preceptor"`, `reviewed: false`, `version: 1`. Single-question options are alphabetical, with "No ..." action options last.

## Bank-wide search

Searched all of `src/samps` and `src/cases`, other Q500B batches included.
- Fistula bleeding: no other item. s50 shock is a tracheo-innominate fistula, s36 environmental uses a fistula for dialysis access in hypothermia. ems-41 is new.
- Insulin pump with ketones or unawareness: s28 chest-pain q4 has "Suspend the insulin pump" only as a distractor (ketoacidosis risk), in an ACS SAMP. Not a repeat of ems-37.
- Button battery: only s39 gi-bleed (late herald bleed), already cleared.
- ECPR: s09 ems (refractory asystole does not qualify) and batch01 refractory VF case (no ECPR program). ems-40 is a different decision.
- Active assailant and rescue task force: no other hit.
- The seizures-43, loc-21, pediatric-fever-05, ems-24, mp-37, batch04 fall case and suicide-risk-02 overlaps named in earlier reviews are gone.

## Sources

| Source | Result |
|---|---|
| NCPC button battery guideline, https://www.poison.org/battery/guideline | Opened. Sucralfate 10 mL (1 g) every 10 minutes up to 3 doses "if the child is able to swallow". No sucralfate or honey if the battery was possibly in the esophagus more than 12 hours. Radiographs of neck, esophagus and abdomen, AP and lateral. CT or MRI only to check tissue between injury and vessels or for fistula surveillance, so "Repeat radiographs now" being unhelpful in ems-39 q4 stands. |
| BCEHS CPG E04, https://handbook.bcehs.ca/clinical-practice-guidelines/e-medical-emergencies/e04-dialysis-emergencies/ | Opened. Direct pressure, tape over gauze without removing it to check, no circumferential dressings (occlude and clot), tape at most about 180 degrees, turbulence felt over a working shunt, preferential conveyance to a dialysis facility and nearest facility if critically ill, "CliniCall Support Services". Tourniquets not mentioned. |
| Diabetes Canada 2018 ch 14, https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14 | Opened. Unawareness definition (first sign is confusion), reversal with strict avoidance for 2 days to 3 months, recommendation 4.2 CSII or CGM with education and follow-up, unawareness a risk factor for severe hypoglycemia. All ems-37 q3 claims supported. |
| ELSO interim ECPR guideline 2021, https://pmc.ncbi.nlm.nih.gov/articles/PMC7984716/ | Opened. ECMO flow within 60 minutes, transport to the nearest capable hospital, mechanical compressions, ETCO2 above 10 mmHg favourable, exclusion for known life-limiting comorbidity or terminal illness and goals of care, no pupil criterion. All ems-40 claims supported. |
| Umpierrez and Klonoff 2018 (PMC6054505), IMIST-AMBO (PubMed 22626739), Hartford compendium, CHEMM SALT, Zipursky and Ratnapalan CMAJ 2021, ARREST 2020 | Not reopened (WebFetch near its weekly limit). Each was opened and checked in the first or second review, and the text citing them has changed only in wording those reviews prescribed. |

## Earlier fails: resolution

| Earlier fail | Resolved? |
|---|---|
| QA: ems-37 stem, q1, q3, q4 (batch04 fall case, suicide-risk-02, ems-06) | Yes |
| QA: ems-38 q2, q3 unsupported sentences | Yes, exact wording in place |
| QA: ems-39 q1, q3, q4 mock cues and unsupported sentences | Yes |
| QA: ems-40 q1 destination distractor, q3 "at 0724" and pupil sentence | Yes |
| QA: ems-41 near-duplicate of ems-24 and mp-37 | Yes (SAMP replaced twice) |
| Verify 1: ems-37 frame and q3 distractors (seizures-43), q4 (loc-21), q2 cue and "the reason" wording | Yes |
| Verify 1: ems-39 q3, q4 residual transfer cues | Yes |
| Verify 1: ems-41 retells pediatric-fever-05 | Yes (replaced by the fistula SAMP) |
| Verify 2: ems-37 q4 cortisol option and three explanation sentences | Yes, word for word. Options alphabetical, `correct: 0` |
| Verify 2: ems-41 q2 update mock cue | Yes, "After 10 minutes the bleeding stops. The crew asks how to dress the site for transport." |
| Verify 2: ems-41 q4 update mock cue | Yes, now the handover tape detail. No later text names the destination |

Unrequested change (REVIEW-RULES rule 4): the ems-41 stem now says "take a CliniCall consult from BC Emergency Health Services". This was verify 2 physician note 4, and E04 confirms the service name. Judged on its merits: PASS.

## Verdicts

### ems-37 Handover after a low sugar at work: PASS

Times: found 1440, arrival 1620. Glucose 1.9 then 7.4 mmol/L, glucagon 1 mg IM. Every distractor reason is true.

| Q | Verdict | Fix |
|---|---|---|
| Stem | PASS | None |
| q1 | PASS | None |
| q2 | PASS | None |
| q3 | PASS | None |
| q4 | PASS | None |

### ems-38 A call from a college campus: PASS

Unchanged since verify 1. Hot and warm zone logic, tourniquet priority, SALT dead and expectant categories and the transport order are sound.

| Q | Verdict | Fix |
|---|---|---|
| q1 to q4 | PASS | None |

### ems-39 A toddler and an empty remote: PASS

20 mm lithium cell, 14 kg, 50 and 80 minutes within 12 hours, sucralfate 1 g every 10 minutes up to 3 doses, 20 hours beyond 12. No remaining cue to the q2 transfer key.

| Q | Verdict | Fix |
|---|---|---|
| q1 to q4 | PASS | None |

### ems-40 A patch from a fitness centre: PASS

0655 collapse, 0701 crew, 0712 patch (17 minutes), 10 minute drive within the 60 minute flow target.

| Q | Verdict | Fix |
|---|---|---|
| q1 to q4 | PASS | None |

### ems-41 A consult about a bleeding arm: PASS

Every claim traces to E04 except the two inferences verify 2 noted (tourniquet "first", thrill loss needing the dialysis team), both reasonable. Pulse 104 then 96 and BP 112/70 then 118/72 support "stable" for the q3 destination.

| Q | Verdict | Fix |
|---|---|---|
| Stem | PASS | None |
| q1 | PASS | None |
| q2 | PASS | None |
| q3 | PASS | None |
| q4 | PASS | None |

## Notes for the physician (not fails)

1. ems-39 q3: NCPC gives sucralfate only "if the child is able to swallow". The stem has slight drooling and refusal to drink. She is alert and playing, so the key holds, but the physician may want "she swallows her saliva" or similar added to the stem.
2. ems-39 q4: with a possible 20 hour dwell, the receiving team may plan contrast CT before removal to look for vascular injury (NCPC mentions CT or MRI for tissue margin). The key (stop sucralfate) is unaffected.
3. ems-41 q4: three distractors point to the other arm or hand and are weak. "Capillary refill of the left hand" would be a defensible competitor, which is presumably why the writer avoided it. Acceptable, but the question is easy.
4. ems-41 q4 timeline is tight: bleeding began about 2020, the tape stayed on for 15 minutes before the crew arrived, and the consult is at 2040. Possible.
5. ems-40 q3 and q4: the arrival in VF shows he was not held on scene until circulation returned, which rules out one q1 distractor but does not show the key. Left as earlier reviews ruled.
6. ems-37 q3 and q4 updates relay bystander accounts, which hints at the q1 key "What the coworker saw and heard". Both need it for KF2 (B6 leave and flag, as earlier reviews ruled).
7. ems-37: whether recurrent severe lows with vomiting should prompt a later cortisol check is left to clinical judgement (verify 2 note 3).
8. ems-39 q3 and ems-40 q3 options mix lowercase generic drug names with capitalised words. This is the open bank-wide standard on generic names (SCORING-RULINGS D), not a batch defect.

## Not verified

WebFetch near its weekly limit. Not reopened here: Umpierrez and Klonoff 2018, IMIST-AMBO PubMed page, Hartford compendium, CHEMM SALT, CMAJ 2021, ARREST 2020 (no URL). All were checked in earlier reviews.

No silent reversal of a SCORING-RULINGS entry and no contradiction of a signed item found.

Overall: PASS
