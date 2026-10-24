# Q500B verify review: oral cases batch18 (revision 1)

Reviewer: a fresh independent QA agent. I did not write, edit or review this batch before. I read Q500B_BRIEF, REVIEW-RULES, SCORING-RULINGS, CASE_SPEC and ORAL_REALIGN_BRIEF, the first review (q500b-qa-batch18.md), the writer report with its Revision 1 section, and all four case files in full. I reviewed the whole final batch, not only the changed lines. I edited no case file.

## Tests

`REALIGN=batch18 CASE_BATCH=batch18 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 45 passed (cases 39, citations 6).

House style, checked by script over every string: no em or en dashes, no semicolons, no spaced hyphens. No mnemonics. No personal names. Author is "Preceptor" in all four. `reviewed: false` and `version: 1` in all four. Spelling is Canadian (paediatric, centre, judgement, tumour). "Hemorrhage" and "anesthesia" follow bank usage.

## First review fails: all 8 resolved

1. early-pregnancy q-rh and f-m3: resolved. `c-rhig` is strong with the exact label and feedback asked for. `c-no-rhig` has the new feedback. `s-rhig` now only records the dose and indication. The f-m3 text matches word for word. The model answer gives both options. The writer report has the "Needs physician decision" line.
2. early-pregnancy c-mtx: resolved. It is unsafe now, and the feedback says "can end or harm a viable intrauterine pregnancy".
3. early-pregnancy c-in-front: resolved. It says "can put her at risk" and stays partial.
4. post-lysis c-full-dose and s-full-dose: resolved word for word.
5. post-lysis c-wait-pci: resolved. The label gives ASA 160 mg only, so there is no switch from UFH to LMWH.
6. post-lysis c-half-dose: resolved. The time is 14:12, 9 minutes after the 14:03 ECG. The writer used an equivalent fix in s-ct: "less than an hour ago". I checked it on every path. On the strong path the enoxaparin is given about 14:12 and the CT is at 15:10, so the gap is about 58 minutes. On the wait-pci path the dose is at 14:28. On the full dose path it comes just after lysis. The wording holds on all three. Accepted under REVIEW-RULES rule 4.
7. cannabis reassess-0600: resolved. It reads "Opens her eyes spontaneously", E4 V4 M6, GCS 14. That matches the q-dispo prompt and the q-document model answer.
8. cannabis CCHR wording: resolved in c-ct, l-p3 and q-investigate. The writer kept "age over 65" instead of "65 or older". I checked the Stiell 2001 abstract, which says "age >65 years", so the wording matches the cited source. Accepted.

Unrequested or advisory changes, judged on their merits (rule 4):
- The cannabis case is retitled "Sleepy after a family visit". It is neutral. PASS.
- "Effects can last 12 hours or more" is added to q-worse and l-p4. Health Canada Table 4 gives 4 to 12 h for oral edible cannabis. It confirms peak plasma THC "approximately 2 to 4 h after oral dosing", and some subjects peaked at 6 h. The statement is supported. PASS. See "Sources I could not fully open" for the 24 hour quote.
- post-lysis q-history model answer: the 3 month intervals are removed ("recent ischemic stroke", "recent head or facial trauma or surgery"). This is now consistent with `esc-acs` (C2). PASS.

## SOGC 448 and trauma before 8 weeks (writer uncertainty 7, Needs physician decision)

I got the full SOGC 448 text (the delphi.sogc.org PDF) and read the relevant parts:
- Recommendation 8: "For non-sensitized Rh D-negative individuals who have experienced threatened, spontaneous or induced abortion, ectopic pregnancy, or molar pregnancy before 8 weeks gestation, we recommend not administering Rho(D) immune globulin (conditional, low)."
- Section on bleeding and induced abortion before 20 weeks: "Prior to 8 weeks gestation, there is no evidence or pathophysiologic rationale for the use of RhIG."
- "Blunt trauma to the abdomen" appears only in the general list of events with possible placental trauma that "can lead to sensitizing FMH". The guideline gives no first trimester trauma recommendation and no trauma dose before 12 weeks. It says "There is little evidence to support what dosage of RhIG should be provided in the first trimester". Recommendation 11 (CVS) uses a minimum of 120 mcg in the first 12 weeks.

Verdict: the revised keying, with both withholding and giving RhIG strong, is defensible. It does not contradict A18 or the signed batch05 trauma case. The guideline's general statement before 8 weeks leans toward withholding. A physician may still want to decide whether giving after trauma at 6 weeks should stay strong. I leave that open, as the writer did. It is not a fail. The "120 mcg is enough before 12 weeks" teaching in f-m3 rests on analogy (Recommendations 7 and 11), not on a trauma statement. That is acceptable, and I note it for the physician.

## Duplicate search (whole bank, s01 to s88 and every case batch, Q500B included)

Keywords: pellet, air rifle, airgun, BB gun, open globe, intraocular foreign, Seidel, strangulat, partner violence, hunting rifle, pregnancy of unknown location, tenecteplase, half dose tenecteplase, after fibrinolysis, intracranial hem, cryoprecipitate, protamine, cannabis, cannabinoid, THC, edible, gummies, curling. I also read the titles and topics in batch16, 17, 19 and 20.

- Eye: there is no pellet or air rifle item. s10 has an adult chisel IOFB. The new Q500B s76 eye has an occult globe rupture in an 81 year old after a fall. It shares generic teaching (no tonometry, CT sensitivity, acuity as predictor), but the scenario, age, mechanism and key decisions differ. Clear. Advisory: watch this pair in the TF-IDF pass.
- First trimester bleeding with partner violence: the PUL items (s10, s38, s65, batch07, batch12) have no partner violence. The violence items (s01, s20, s67 abuse-domestic, batch07 sexual assault) have no PUL. Clear.
- ICH after STEMI fibrinolysis: s12, s42 and s57 mention ICH only as a risk or contraindication. s27 and s86 are stroke. Clear. The half dose setup repeats s57 q2 and q3, as the first review noted. That is advisory only.
- Cannabis in an older adult: s07 loc lists cannabis edibles only in a toddler's history. s18 and s53 tox are child ingestions. s51 is a teenage vape. batch15 and batch17 mention cannabis use incidentally. Clear.

## Case 1: airgun-pellet-eye-rural-child: PASS

Unchanged in revision 1. I re-reviewed it in full.

Recomputed: ondansetron 4 mg at 32 kg is 0.125 mg/kg, below Zhou's 0.15 mg/kg (cap 12 mg). Morphine is 3.2 mg, so about 3 mg. Vancomycin is 480 mg and ceftazidime 1.6 g. Zhou confirms "vancomycin (15 mg/kg, up to 1.5 g)" and "ceftazidime (50 mg/kg, up to 2 g)", so the e-m3 teaching is right. Tetanus: CIG Table 1 (updated June 2026) gives a booster at 5 or more years for wounds other than clean minor ones, no TIg after 3 or more doses, and Tdap from age 7. Repair at 7 hours is within 24 hours. A 4.5 mm pellet fits a .177 air rifle. A pupil peaked to 9 o'clock in the right eye is temporal, which matches the wound. Labels follow C1.

Per question: q-history PASS, q-exam PASS, q-ddx PASS, q-protect PASS, q-imaging PASS, q-transfer PASS, q-father PASS, q-handover PASS.

Advisory, not a fail: the collateral says "lead pellets", and the c-mri feedback says "A steel pellet can move in the magnet". MRI is still contraindicated because the metal is not known for certain. The writer may change it to "A pellet may contain steel, which can move in the magnet."

## Case 2: early-pregnancy-bleeding-partner-violence: PASS

All three first review fails are resolved (see above). Rechecked numbers:
- The orthostatic rise is 12 beats, below 30.
- hCG goes from 1650 to 2900, a 76% rise, which fits the live IUP at 7 weeks.
- LMP 6 weeks 2 days.
- Glass 2008: more than sixfold for attempted homicide and more than sevenfold for homicide.

The disposition is safe for both the pregnancy and her safety. Labels follow C1: confronting him and discharging her home are unsafe, methotrexate is unsafe, and asking in front of him is partial.

Per question: q-first PASS, q-history PASS, q-exam PASS, q-interpret PASS, q-disclosure PASS, q-partner PASS, q-rh PASS (see the SOGC section), q-dispo PASS, q-talk PASS.

## Case 3: post-lysis-bleed-rural-anterior-stemi: PASS

Recomputed:
- Onset 13:10, arrival 14:00 (50 minutes), ECG 14:03, lysis 14:12.
- Tenecteplase under 60 kg is 30 mg, so half dose is 15 mg.
- Cockcroft-Gault: 61 x 58 x 0.85 / (0.815 x 92) is 40 mL/minute.
- Enoxaparin 0.75 x 58 is 43.5 mg, about 44 mg, with no bolus.
- Clopidogrel 75 mg with no load over 75.
- GCS at 14:55: E3 V4 M6 is 13.
- Cryoprecipitate 10 units to a fibrinogen of 1.5 g/L or more, TXA 1 g over 10 minutes, and protamine about 1 mg per mg within 8 hours, no faster than 50 mg in 10 minutes.
- No platelets without surgery, and SBP 140 within 130 to 150.

The full dose path is partial. No signed case labels full dose at 75 or older otherwise, and it is still used in places.

Per question: q-ecg PASS, q-history PASS, q-exam PASS, q-reperfusion PASS, q-monitor PASS, q-ich PASS, q-reverse PASS, q-destination PASS, q-family PASS.

Advisory, not a fail: s-lysis says the ambulance "will arrive in 40 minutes", that is about 14:55. q-destination has it arriving only after the 15:10 CT and the reversal. The writer may change it to "in about an hour".

## Case 4: cannabis-gummies-older-woman-drowsy: FAIL (1 item)

Both first review fails are resolved. Rechecked:
- GCS: 13 at the scene (E3 V4 M6), 12 on arrival (E3 V4 M5), 9 at 23:30 (E2 V2 M5) and 14 at 06:00 (E4 V4 M6).
- 3 x 50 mg is 150 mg THC.
- Ingestion between 17:00 and 18:00 puts 21:40 at about 4 hours and 23:30 at about 6 hours. That fits a peak at 2 to 4 h and the 6 h peaks Health Canada reports.
- Naloxone is correctly withheld.
- CCHR: GCS 12 is outside the rule, and the abstract wording is "age >65".

Per question: q-history PASS, q-exam PASS, q-investigate PASS, q-worse PASS, q-supportive PASS, q-dispo PASS, q-document PASS. q-first FAIL.

1. **q-first model answer, first line, wording inverts its meaning.** "A new fall in drowsiness in an older adult is an emergency until proven otherwise." A "fall in drowsiness" means she is less drowsy, the opposite of what is meant. Exact fix: replace that sentence with "New drowsiness after a fall in an older adult is an emergency until proven otherwise." Leave the rest of the line ("She is not just tired.") as it is.

## Sources

Opened and confirmed in this review:
- Zhou 2022: full text at dovepress.
- CIG tetanus: canada.ca, updated June 2026.
- SOGC 448: full PDF at delphi.sogc.org, and the PubMed record for PMID 38553007.
- Health Canada 2018: about half of the page text read (see below).
- Stiell 2001: abstract.
- WHO 2013: who.int page title.

DOIs resolved on Crossref, each with the right title, first author and year:
- STREAM-2 (Van de Werf 2023)
- Yaghi 2017
- Greenberg 2022
- ESC 2023 (Byrne)
- Teasdale 2014
- Boyer 2012
- McGee 1999
- Stiell 2001

PMIDs confirmed on PubMed:
- 30760415 (Wong 2019 CCS/CAIC)
- 12161209 (Walton 2002)
- 17961956 (Glass 2008)
- 18667689 (Campbell 2009)
- 33453378 (Po 2021, SOGC 414)
- 38553007 (SOGC 448)

Sources I could not fully open (listed, not guessed):
- Health Canada 2018. The page is about 800,000 characters, and I read the first 400,000. I could not find the sentence the writer quotes, "impairment can last for over 24 h after last use", or a statement that oral THC lowers blood pressure (l-m4 teaching). The parts I read support the 2 to 4 h peak, 4 to 12 h edible duration, and greater effects in the elderly. The l-p4 and l-m4 points stand on that. A physician or the writer may want to confirm those two phrases.
- ESC 2023, CCS 2019, Yaghi 2017 and Greenberg 2022 full texts were not re-read in this review. Europe PMC returned 503, and the first review found that ahajournals blocks fetching. Their records exist, and the doses match the first review's check and the signed s57 and s12.

## Fails and exact fixes

1. cannabis-gummies-older-woman-drowsy, q-first model answer: replace "A new fall in drowsiness in an older adult is an emergency until proven otherwise." with "New drowsiness after a fall in an older adult is an emergency until proven otherwise."

Overall: FAIL (1 item)
