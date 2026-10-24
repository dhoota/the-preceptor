# Q500B verify review 2: oral cases batch18 (revision 2)

Reviewer: a fresh independent QA agent. I did not write, edit or review this batch before. I read Q500B_BRIEF, REVIEW-RULES, SCORING-RULINGS, CASE_SPEC and ORAL_REALIGN_BRIEF, the first review (q500b-qa-batch18.md), the first verify review (q500b-verify-batch18.md) and the writer report with its Revision 1 and Revision 2 sections. I read all four case files in full and reviewed the whole final batch, not only the changed lines. I edited no case file.

## Tests

- `REALIGN=batch18 CASE_BATCH=batch18 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 45 passed (cases 39, citations 6).
- `npx tsc --noEmit -p . 2>&1 | grep cases/batch18`: no output.

House style: no em or en dashes and no semicolons in any string. No mnemonics. No personal names. Author "Preceptor", `reviewed: false` and `version: 1` in all four. Canadian spelling.

## Earlier fails: all resolved

First review (8 items), confirmed in the final files:
1. early-pregnancy q-rh and f-m3: both `c-no-rhig` and `c-rhig` are strong, with the requested labels and feedback. `s-rhig` only records the dose and indication. The f-m3 text and the model answer match.
2. early-pregnancy c-mtx: unsafe, with "can end or harm a viable intrauterine pregnancy".
3. early-pregnancy c-in-front: partial, with "can put her at risk".
4. post-lysis c-full-dose and s-full-dose: no longer contradict. The enoxaparin is ordered, then the IV bolus is cancelled before it is drawn up.
5. post-lysis c-wait-pci: ASA 160 mg only. No switch from UFH to LMWH.
6. post-lysis c-half-dose: 14:12, 9 minutes after the 14:03 ECG. s-ct says "less than an hour ago". That holds on all three paths: 14:12 to 15:10 is 58 minutes, and the other two paths dose later.
7. cannabis reassess-0600: "Opens her eyes spontaneously", E4 V4 M6, GCS 14. This matches the q-dispo prompt and the q-document model answer.
8. cannabis CCHR: GCS 12 is outside the rule and needs CT, in c-ct, l-p3 and q-investigate. "Age over 65" matches the Stiell 2001 abstract.

First verify review (1 item):
1. cannabis q-first: the line now reads "New drowsiness after a fall in an older adult is an emergency until proven otherwise." Resolved.

Advisory changes in revision 2, judged on their merits (rule 4):
- airgun c-mri: "A pellet may contain steel, which can move in the magnet." This fits the lead pellets in the collateral history. PASS.
- post-lysis s-lysis: the ambulance arrives "in about an hour", so it now arrives after the 15:10 CT and the reversal. PASS.

## Health Canada 2018 claims (checked with WebFetch)

I opened the canada.ca page (803,537 characters) at both offsets the writer gave.
- Offset 690,000 to 790,000, section 6.0 Warnings. Occupational hazards: "impairment can last for over 24 h after last use". Dosing: "the effects following oral administration only begin to be felt 30 min to 1 h or more after ingestion, and peak at 3 - 4 h". Both confirmed. The l-p4 teaching is supported.
- Offset 90,000 to 190,000, section 2.3, oral and oro-mucosal cannabinoids. "Systolic blood pressure dropped at the lower dose (i.e. 30 mg) but increased at higher doses (i.e. 75 mg and 90 mg)" (seven cannabis users, oral THC 15 to 90 mg). In a comparison of oral THC 5 and 15 mg with nabiximols: "diastolic blood pressure decreased between 4 and 8 h after dosing". Both confirmed. The l-m4 clause "oral THC can lower blood pressure for hours" is supported, with the caveat in the physician notes.

## Duplicate search

Grepped the whole bank (src/samps and src/cases, Q500B batches 16, 17, 19 and 20 included) for air rifle, pellet, gummies, edible, after fibrinolysis or tenecteplase, post lysis and partner violence. No new overlaps beyond those the earlier reviews cleared. The half dose tenecteplase setup still repeats s57 q2 and q3. That stays advisory and goes to the TF-IDF pass.

## Case 1: airgun-pellet-eye-rural-child: PASS

Rechecked: ondansetron 4 mg is 0.125 mg/kg at 32 kg. Morphine is 3.2 mg, about 3 mg. Vancomycin 480 mg and ceftazidime 1.6 g. Tetanus booster at 6 years for a contaminated wound, with no TIG. A right pupil peaked toward 9 o'clock is temporal, which matches the temporal limbal wound. Labels follow C1.

Per question: q-history, q-exam, q-ddx, q-protect, q-imaging, q-transfer, q-father, q-handover: all PASS.

## Case 2: early-pregnancy-bleeding-partner-violence: PASS

Rechecked: orthostatic rise 90 to 102 (12, below 30). hCG 1650 to 2900 is a 76% rise, and the ending is a live IUP. Glass 2008: more than sixfold and more than sevenfold. Labels follow C1.

Per question: q-first, q-history, q-exam, q-interpret, q-disclosure, q-partner, q-rh, q-dispo, q-talk: all PASS.

## Case 3: post-lysis-bleed-rural-anterior-stemi: PASS

Rechecked: tenecteplase 30 mg under 60 kg, so half dose is 15 mg. CrCl about 40 mL/minute. Enoxaparin 0.75 x 58 is 43.5 mg, about 44 mg, with no bolus. Clopidogrel 75 mg with no load. GCS 13 at 14:55 and 12 at the CT. Cryoprecipitate 10 units to a fibrinogen of 1.5 g/L or more, TXA 1 g over 10 minutes, protamine about 1 mg per mg within 8 hours, no platelets, and SBP 140 within 130 to 150. The timeline is consistent on every path.

Per question: q-ecg, q-history, q-exam, q-reperfusion, q-monitor, q-ich, q-reverse, q-destination, q-family: all PASS.

## Case 4: cannabis-gummies-older-woman-drowsy: PASS

Rechecked: GCS 13 at the scene, 12 on arrival, 9 at 23:30 and 14 at 06:00, each by component. 3 x 50 mg is 150 mg THC. Naloxone is correctly withheld. A worsening at about 6 hours after ingestion fits a 3 to 4 h peak and effects that last 12 hours or more.

Per question: q-first, q-history, q-exam, q-investigate, q-worse, q-supportive, q-dispo, q-document: all PASS.

## Physician judgement notes (not fails)

1. early-pregnancy q-rh: giving RhIG after abdominal trauma at 6 weeks is keyed strong, as is withholding it. SOGC 448 Recommendation 8 and its "no evidence or pathophysiologic rationale" line before 8 weeks lean toward withholding. "120 mcg is enough before 12 weeks" for trauma rests on analogy, not on a trauma statement. This is the writer's open "Needs physician decision" item.
2. cannabis l-m4: the Health Canada blood pressure evidence is mixed. Systolic BP fell at 30 mg but rose at 75 and 90 mg. Her dose was about 150 mg. The diastolic fall at 4 to 8 h came from 5 and 15 mg doses. The clause is supported but modest. The writer notes it can be dropped without changing the scoring.
3. cannabis q-worse and l-p4 say THC peaks at 2 to 4 h. The Warnings section says 3 to 4 h, and the pharmacokinetic section (seen in the first verify review) says about 2 to 4 h. These are consistent.
4. post-lysis: the extrapolation from stroke thrombolysis (Yaghi 2017) to tenecteplase for STEMI, and the protamine ratio, are standard practice but not stated in a STEMI guideline, as the earlier reviews noted.

## Sources

Opened in this review: the Health Canada 2018 page on canada.ca, at offsets 90,000 and 690,000 (WebFetch). curl to the same page failed with a stream error and an empty reply, so I used WebFetch.

Not re-opened in this review. The earlier reviews confirmed them, and their content did not change in revision 2: Zhou 2022, the CIG tetanus chapter, Walton 2002, SOGC 414, SOGC 448, McGee 1999, WHO 2013, Glass 2008, Campbell 2009, CCS 2019, ESC 2023, STREAM-2, Yaghi 2017, Greenberg 2022, Stiell 2001, Teasdale 2014 and Boyer 2012. Full texts of ESC 2023, CCS 2019, Yaghi 2017 and Greenberg 2022 have not been re-read by any reviewer, because Europe PMC returned 503 and ahajournals blocks fetching.

Overall: PASS
