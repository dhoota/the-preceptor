# Q500B independent QA: oral cases batch18

Reviewer: independent QA agent (did not write or edit this batch). Files read in full: the four cases in `src/cases/batch18/`, the writer report, Q500B_BRIEF, REVIEW-RULES, SCORING-RULINGS, CASE_SPEC and ORAL_REALIGN_BRIEF. No case file was edited.

## Tests

`REALIGN=batch18 CASE_BATCH=batch18 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 45 passed (cases 39, citations 6).

## Mock mode

Oral mocks (`src/screens/Mocks.tsx`, `MockOralScreen`) run each station through the normal runner one node at a time. Later prompts that name earlier facts (for example the q-disclosure prompt, or "Her CT was normal" in q-worse) are not mock-mode cues for oral cases. No fail on this ground.

## Duplicate search (whole bank, s01 to s88 and every case batch)

Keywords searched: pellet, air rifle, airgun, BB gun, intraocular foreign, strangulation, partner violence, firearm, rifle, tenecteplase, half dose, cryoprecipitate, after fibrinolysis or thrombolysis, cannabis, THC, edible, gummies.

- Air gun pellet eye injury in a child: no other item. s10 eye has an adult chisel IOFB. Clear.
- First trimester bleeding with partner violence: s01 abuse-domestic has a fall with abruption at 30 weeks. s01, s20 and s67 teach strangulation and firearms as lethality factors. Here those factors are combined with pregnancy of unknown location, an aggressive partner in the department and a safety-dependent PUL disposition. That angle is new. Clear.
- ICH after fibrinolysis for STEMI: s27 cva and s07 loc cover ICH after stroke thrombolysis. batch11 stopped-antiplatelets-dental-stemi only mentions protamine and cryoprecipitate in a distractor. Clear.
- Advisory, not a fail: q-reperfusion repeats a key decision that the bank already teaches several times (half dose tenecteplase at 75 or older, and enoxaparin 0.75 mg/kg SC with no bolus). See s57 ischemic-heart-disease (78 year old woman, q2 and q3), s12, s42 and s09 ems. It is the necessary setup for the ICH, and the case's key decisions come after it. Leave it to the bank-wide TF-IDF check.
- Edible cannabis in an older adult: the only edible items are a child exploratory ingestion (s18 and s53 tox) and a teenage vape (s34, s51). Clear.

## Case 1: airgun-pellet-eye-rural-child: PASS

Recomputed: ondansetron 4 mg at 32 kg is 0.125 mg/kg (within 0.15 mg/kg and a 4 mg cap). Morphine 0.1 mg/kg is 3.2 mg, about 3 mg. Vancomycin 15 mg/kg is 480 mg. Ceftazidime 50 mg/kg is 1.6 g. Tetanus: last dose 6 years ago with a contaminated wound, so a booster is due (CIG, 5 years or more). Tdap is acceptable at 10, and TIG is not needed after 3 or more doses. All feedback matches the stem and findings. Choice labels follow C1 (tonometry and pressure patch are unsafe, ibuprofen is partial). Sources: Zhou 2022 Clin Ophthalmol, the CIG tetanus chapter and Walton 2002 all exist and support their items. House style is clean.

Per question: q-history PASS, q-exam PASS, q-ddx PASS, q-protect PASS, q-imaging PASS, q-transfer PASS, q-father PASS, q-handover PASS.

Note, not a fail: the q-exam model answer says "even a microhyphema", but the finding is a 0.5 mm layered hyphema. The model answer is general teaching, so it is acceptable as written.

## Case 2: early-pregnancy-bleeding-partner-violence: FAIL (3 items)

Checked and correct: orthostatic rise 90 to 102 (12 beats, below the McGee threshold of 30). hCG 1650 to 2900 in 48 hours is a 76% rise, which fits the viable IUP in the ending. GA 6 weeks 2 days. Glass 2008: odds about 6.7 for attempted homicide and 7.5 for homicide, so "more than sixfold" and "sevenfold" are correct. SOGC 448 confirmed on Europe PMC (Fung-Kee-Fung K and colleagues, JOGC 2024, 46(4):102449). The other sources exist and support their items.

Per question: q-first PASS, q-exam PASS, q-disclosure PASS, q-partner PASS, q-dispo PASS, q-talk PASS. q-history, q-interpret and q-rh FAIL.

1. **q-rh, f-m3 (contradicts a signed item).** After abdominal trauma (she was pushed down the stairs and kicked in the right side), the case keys withholding RhIG as strong and giving 300 mcg as partial. It applies A18. A18 was ruled for first trimester bleeding and loss. The signed case batch05 `restrained-driver-abdominal-pain` teaches "Rh immune globulin for every Rh negative, unsensitized pregnant trauma patient, within 72 hours". It adds "Before 12 weeks a minimum of 120 mcg is enough". The batch05 review (docs/reviews/batch05.md l.112) records that the SOGC 448 early-loss guidance "does not apply to abdominal trauma". The writer did not check the trauma wording (uncertainty 7). I could not open the full text either (JOGC returns 403). Until the trauma wording is confirmed, the case must not mark the trauma-based choice as inferior. Exact fix:
   - Set `c-rhig` quality to `strong`. Change its label to "I gave Rh immune globulin, 120 mcg or 300 mcg IM, because she had abdominal trauma, and documented why." Change its feedback to: "Reasonable. The SOGC advice not to give it before 8 weeks is written for bleeding and pregnancy loss. Abdominal trauma is often treated as a separate indication, and before 12 weeks 120 mcg is enough. Checking her Rh status and documenting the decision was the key step."
   - Change the `c-no-rhig` feedback to: "Reasonable. SOGC guidance does not recommend Rh immune globulin before 8 weeks for bleeding or loss. Some clinicians give it after abdominal trauma at any gestation. Checking her Rh status and documenting the decision was the key step."
   - Rewrite `s-rhig` so the pharmacist simply records the dose and the indication, with no challenge.
   - Change the f-m3 text to "Checks Rh status and makes a documented decision about Rh immune globulin, recognizing that the under 8 week guidance covers bleeding and loss and that abdominal trauma may be a separate indication."
   - Make the q-rh model answer match.
   - Add a "Needs physician decision" line to the writer report: SOGC 448 trauma wording before 8 weeks. If the writer can read SOGC 448 and it says RhIG is not needed before 8 weeks even after trauma, the writer may keep the original keying instead, quoting the recommendation and citing it against batch05.
2. **q-interpret, c-mtx label (ruling C1).** Methotrexate for a pregnancy of unknown location, when a viable intrauterine pregnancy has not been excluded, is a clearly harmful drug: it can end a viable pregnancy and is teratogenic. Under C1 that is `unsafe`, not `partial`. The end node also shows that this was a live IUP. Exact fix: set `c-mtx` quality to `unsafe`. In its feedback, replace "risks ending a wanted intrauterine pregnancy" with "can end or harm a viable intrauterine pregnancy", because her feelings about the pregnancy are mixed.
3. **q-history, c-in-front feedback contradicts its label.** The choice is labelled `partial`, but the feedback says the question "is unsafe for her". Exact fix (keep it `partial`): replace "asking about safety in front of a possible abuser is unsafe for her and will not get a true answer" with "asking about safety in front of a possible abuser can put her at risk and will not get a true answer".

## Case 3: post-lysis-bleed-rural-anterior-stemi: FAIL (3 items)

Recomputed and checked:

- Tenecteplase under 60 kg is 30 mg, so half dose is 15 mg. Correct.
- Cockcroft-Gault: (140 minus 79) x 58 x 0.85 / (0.815 x 92) is about 40 mL/minute. Correct.
- Enoxaparin 0.75 x 58 is 43.5 mg, about 44 mg, with no bolus at 75 or older. This matches the ESC 2023 dosing table (no IV bolus, 0.75 mg/kg SC, maximum 75 mg for the first 2 doses) and signed s57 ischemic-heart-disease q3. Writer uncertainty 2 is resolved.
- Clopidogrel 75 mg with no load over 75 is correct.
- ASA 160 mg chewed is acceptable: Canadian practice, inside ESC 150 to 300 mg (uncertainty 3).
- Cryoprecipitate 10 units with a fibrinogen target of 1.5 g/L or more, and TXA 1 g over 10 minutes, match the AHA/ASA table for symptomatic ICH after thrombolysis that derives from Yaghi 2017 (extra cryoprecipitate when fibrinogen is below 150 mg/dL). The ahajournals pages blocked fetching, so this is checked against the known table, not re-read. Acceptable for uncertainty 1, with the stroke-to-STEMI extrapolation noted in the teaching.
- Protamine 1 mg per mg of enoxaparin given within 8 hours, no faster than 50 mg in 10 minutes, with partial reversal. This is standard, and Greenberg 2022 supports partial reversal and the rate (uncertainty 4). Acceptable.
- No platelets without surgery (PATCH, Greenberg 2022), and SBP 140 within 130 to 150. Correct.
- The CCS 2019 PMID, ESC 2023 DOI, STREAM-2 DOI, Yaghi DOI and Greenberg DOI are all consistent with real records.

Per question: q-ecg PASS, q-history PASS, q-exam PASS, q-monitor PASS, q-ich PASS, q-reverse PASS, q-destination PASS, q-family PASS. q-reperfusion FAIL.

1. **q-reperfusion, c-full-dose and s-full-dose contradict each other.** The label says "I gave ... enoxaparin 30 mg IV and 1 mg/kg SC". The consequence node then says "You hold the IV bolus that has not yet been given and reduce the SC dose". Exact fix: change the label to "I gave full dose tenecteplase, 30 mg IV, with clopidogrel 300 mg and ASA, ordered enoxaparin 30 mg IV then 1 mg/kg SC, and arranged transfer." Change `s-full-dose` to "The pharmacist notes her age before the enoxaparin is drawn up. You cancel the IV bolus and give 0.75 mg/kg SC, 44 mg, instead. The full dose tenecteplase is already in."
2. **q-reperfusion, c-wait-pci path switches anticoagulants.** The label gives "ASA and heparin", and `s-wait-pci` then adds enoxaparin 44 mg SC. Switching from UFH to LMWH after a heparin bolus raises the bleeding risk, and it does not match the 44 mg enoxaparin that s-ct assumes. Exact fix: change the label to "I gave ASA 160 mg and sent her by ambulance for primary PCI, since fibrinolysis is risky at her age." Leave `s-wait-pci` as is.
3. **q-reperfusion, c-half-dose timing misses its own target.** The model answer and i-pr4 give the goal as fibrinolysis within 10 minutes of diagnosis. The strong label gives 14:20, which is 17 minutes after the 14:03 ECG. Exact fix: change "at 14:20" to "at 14:12" in the c-half-dose label. The s-ct "50 minutes ago" then reads "58 minutes ago", or the writer can set the CT time to 15:02 so the 50 minutes still holds.

Advisory, no fail: the i-h2 model answer uses 3 month intervals (ischemic stroke and head trauma), which matches CCS/AHA and signed s12. i-h2 cites `esc-acs`, which uses 6 months for ischemic stroke and 1 month for trauma or surgery. The writer may re-point i-h2 to `ccs-stemi` (C2).

## Case 4: cannabis-gummies-older-woman-drowsy: FAIL (2 items)

Checked: arrival GCS E3 V4 M5 is 12, and 23:30 E2 V2 M5 is 9. Both are correct. Naloxone is correctly withheld (RR 14, pupils 4 mm). 3 gummies x 50 mg is 150 mg THC. Sodium 131 with a thiazide and sertraline is plausible. Sources exist (Health Canada 2018, page date "Spring 2018" confirmed; Stiell 2001; Teasdale 2014; Boyer 2012). Uncertainty 8 (poison centre call, thiazide hold) is reasonable general practice and acceptable.

Per question: q-first PASS, q-history PASS, q-exam PASS, q-worse PASS, q-supportive PASS. q-investigate, q-dispo and q-document FAIL.

1. **GCS arithmetic error (findings `reassess-0600`, q-dispo prompt, q-document model answer).** "Opens her eyes to voice. Oriented to person and place but not date. Obeys commands" is E3 V4 M6, which is GCS 13, not 14. Exact fix: change the `reassess-0600` result to start "Opens her eyes spontaneously." Change the q-document model answer line to "06:00: E4 V4 M6, GCS 14." The q-dispo prompt (GCS 14) can then stay.
2. **Canadian CT Head Rule misapplied (c-ct feedback, l-p3 teaching, q-investigate model answer).** The CCHR applies only to minor head injury with GCS 13 to 15. At GCS 12 she is outside the rule and needs CT outright. Exact fix:
   - c-ct feedback, second sentence: "A GCS of 12 after a head strike is a moderate head injury and needs CT outright. Even in minor head injury, age 65 or older and a GCS below 15 at 2 hours are high risk features."
   - l-p3 teaching: "A GCS of 12 after a head strike is outside the Canadian CT Head Rule and needs CT. In minor head injury the rule's high risk factors, including age 65 or older and failure to reach GCS 15 within 2 hours, were fully sensitive for injuries needing neurosurgical intervention."
   - q-investigate model answer, second line: "She is over 65 and her GCS is 12, below the range of the Canadian CT Head Rule, so she needs CT."

Advisory, not counted: the title "Sleepy after the grandchildren's visit" says grandchildren, but the findings have one granddaughter. The writer may retitle it "Sleepy after a family visit". Also, the worsening at 23:30 comes about 5.5 to 6.5 hours after ingestion, later than the stated 2 to 4 hour peak. The writer may add to q-worse and l-p4 that effects of edible THC can last 12 hours or more.

## Uncertainties from the writer report

1. Cryoprecipitate: acceptable (see case 3).
2. Enoxaparin at 75 or older: confirmed against ESC 2023 and signed s57.
3. ASA 160 mg: acceptable.
4. Protamine: acceptable.
5. CCS 2019 for the 120 minute pathway: the record exists, and its content is consistent with s12 and s57, which cite it for the same point.
6. Ondansetron: correct.
7. Rh before 8 weeks after trauma: FAIL, case 2 item 1.
8. Poison centre and thiazide hold: acceptable.

## Fails and exact fixes

1. early-pregnancy-bleeding-partner-violence, q-rh and f-m3: accept RhIG after abdominal trauma as strong (fix above), or quote the SOGC 448 trauma text that supports withholding it.
2. early-pregnancy-bleeding-partner-violence, c-mtx: change to `unsafe` and fix the feedback wording.
3. early-pregnancy-bleeding-partner-violence, c-in-front: change the feedback wording from "unsafe for her" to "can put her at risk".
4. post-lysis-bleed-rural-anterior-stemi, c-full-dose and s-full-dose: fix the contradiction.
5. post-lysis-bleed-rural-anterior-stemi, c-wait-pci: remove heparin from the label.
6. post-lysis-bleed-rural-anterior-stemi, c-half-dose: change the time to 14:12, and adjust the s-ct interval or the CT time.
7. cannabis-gummies-older-woman-drowsy: fix the 06:00 GCS (E4 V4 M6, 14).
8. cannabis-gummies-older-woman-drowsy: fix the CCHR wording for GCS 12 in c-ct, l-p3 and q-investigate.

Overall: FAIL (8 items)
