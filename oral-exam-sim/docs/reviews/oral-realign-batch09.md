# Oral realignment. Batch 09

This batch now follows the CFPC structured oral format set out in `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch09/` were changed. Every case is now `reviewed: false`, `version: 2` and `durationMinutes: 12`. Case ids, node ids, the branching, choice quality and scripted feedback are unchanged, except for name removal and the one prompt edit listed under the teen case. No rubric item was removed. Every `critical` flag was kept.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch09` prints nothing.
- `REALIGN=batch09 CASE_BATCH=batch09 npx vitest run tests/cases.test.ts` gives 83 passed and 10 failed. All 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.
- The full suite gives 27 failures. All 27 are the same reviewed check, in this batch and in other batches.

## Method notes

- Stems open "You are working in the emergency department of a ..." and are 60 words or fewer. Each keeps the setting the case depends on, such as no spine surgery on site, no IV artesunate, no weekend interventional radiology or no child psychiatrist.
- Card values come from the old stem and findings. No value was changed. Where the case gave no value, the card says "Not recorded". Weight is shown as kg with lb in brackets, rounded to the nearest pound.
- History from the old stem (the story, triage glucose, CTAS and the nurse's words) moved into findings. Where a finding held several parts, it was split into history of presenting illness, past history, medications, social history and collateral as far as the test cap of 14 findings allowed.
- Every patient name was removed. I also removed the names of family and staff (the colleague, the charge nurse, the daughter, the bedside nurse, the husband and the son) and used roles instead, in line with batches 01, 02 and seed.
- Before points use the old criterion ids mapped as the test's legacy map does: approach to history, data and diagnosis to physical, plan to management. Process was 0 in every case before.
- New rubric items are tied to existing questions through the question `rubric` lists. Each got one model answer line where the question had room. No choice, feedback or `next` was changed.
- Longest path seconds did not need scaling. Every case was already at or under 720 seconds.
- Sources were checked with WebSearch, WebFetch and PubMed E-utilities (esearch and esummary).

---

## fever-back-pain-injection-use. Fever and back pain in a man who injects drugs

**Stem.** 139 words before, 56 after. Community hospital in southern Ontario. MRI until 23:00, then an on call technologist. Neurosurgery 45 minutes away through CritiCall Ontario. A 36 year old man walks in with ten days of fevers and five days of low back pain.

**Card.** Temperature 39.4°C. Pulse 124/minute. Resp. 26/minute. BP 92/54 mmHg. O2 sat 91% on room air. Weight 72 kg (159 lb). Medications: None. Allergies: No known allergies.

**History moved.**
- `history` (now "History of presenting illness"): keeps fevers, back pain, pleuritic chest pain and absent neuro symptoms. Adds triage glucose 6.2 mmol/L and CTAS 2.
- New `substance` ("Substance use history"): fentanyl four to five times a day, sharing cookers and water (moved from the old history finding), last use eight hours ago, early withdrawal and his threat to leave (from the stem).
- `pmh` now holds only past history. New `meds` holds no regular medications, no known allergies and weight 72 kg.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 4 | 6 |
| Physical and differential | 5 | 9 |
| Management | 20 | 16 |
| Process | 0 | 6 |
| Total | 29 | 37 |

Added: pw-h1 back pain red flags and bladder symptoms (2), pw-h2 injection drug use history (2), pw-h3 prior MRSA, hepatitis C, past opioid agonist treatment, medications and allergies (2), pw-o1 organizes care in order of threat with neuro checks every 2 to 4 hours (process, 2). Moved: pw-a1 and pw-a2 (exam items) from approach to physical. pw-c1, pw-p1, pw-c2 and pw-c3 to process.

**Longest path seconds.** 615 before, 615 after.

**Citations.** No change. All verified on PubMed: SSC 2021 (PMID 34605781), Baddour 2015 (26373316), Delgado 2023 ESC (37622656), Berbari 2015 IDSA (26229122), Rybak 2020 AJHP (32191793), CRISM 2024 CMAJ (39532476, https://www.cmaj.ca/content/196/38/E1280).

---

## fever-returning-traveller. Fever and confusion after a family visit abroad

**Stem.** 122 words before, 56 after. Large community hospital in the Greater Toronto Area. IV artesunate is not stocked. The nearest Canadian Malaria Network pharmacy is 30 minutes away. A 31 year old woman is brought in by her sister with four days of fever and new confusion.

**Card.** Temperature 39.8°C. Pulse 118/minute. Resp. 24/minute. BP 104/62 mmHg. O2 sat 95% on room air. Weight 64 kg (141 lb). Medications: None. Allergies: None.

**History moved.**
- `history` (now "History of presenting illness"): symptoms, vomiting, confusion since waking, the repeated questions from the nurse's report, triage glucose 4.1 mmol/L and CTAS 2.
- New `travel` ("Travel and exposure history"): return nine days ago from four weeks in Lagos (from the stem), upbringing, no prophylaxis, mosquito bites and the negative viral hemorrhagic fever exposures.
- `pmh` split into `pmh` ("Past and gynecological history") and new `meds` ("Medications and allergies").
- The lab's round the clock rapid test and smears moved from the stem into the `rdt` finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 4 | 5 |
| Physical and differential | 3 | 5 |
| Management | 17 | 11 |
| Process | 0 | 7 |
| Total | 24 | 28 |

Added: ma-h1 travel history (2), ma-h3 pregnancy and last menstrual period (1), ma-h4 collateral from the sister (1). ma-a2 (viral hemorrhagic fever screen) is now history. ma-a1 is now physical. ma-l1, ma-d1, ma-l2, ma-c1 and ma-c2 moved to process.

**Longest path seconds.** 555 before, 555 after.

**Citations.**
- `catmat`: added the year. "Updated 2024." The page shows date modified 2024-04-02. Chapter 7 confirms artesunate 2.4 mg/kg at 0, 12 and 24 hours then daily, and exchange transfusion considered above 10 percent. https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria.html
- `who`: added the edition. "WHO guidelines for malaria. 13 August 2025." https://www.who.int/publications/i/item/guidelines-for-malaria
- `cdc`: added the year. "Updated 2026." The page (last updated August 2026) states CDC does not recommend exchange transfusion and advises weekly monitoring for up to four weeks after IV artesunate. https://www.cdc.gov/malaria/hcp/clinical-guidance/treatment-of-severe-malaria-1.html
- `ontario-dd`: now names HPPA RSO 1990 c H.7 and O Reg 135/18 Designation of Diseases, 2018, with the e-Laws URL https://www.ontario.ca/laws/regulation/180135. The e-Laws page confirmed the title but did not render the disease list.

---

## flank-pain-rigors. Flank pain and rigors on a Saturday night

**Stem.** 120 words before, 59 after. Community hospital in eastern Ontario on a Saturday evening. Interventional radiology works weekdays until 17:00. Urology is on call from home. The tertiary centre is 90 minutes away. A 58 year old woman has left flank pain since yesterday and shaking chills since this afternoon.

**Card.** Temperature 39.2°C. Pulse 122/minute. Resp. 24/minute. BP 84/48 mmHg. O2 sat 96% on room air. Weight 80 kg (176 lb). Medications: Metformin 1000 mg twice daily, empagliflozin 10 mg daily, candesartan. Allergies: None.

**History moved.**
- `history` (now "History of presenting illness"): adds four episodes of vomiting, "looks grey", triage at 21:00, glucose 14.8 mmol/L and CTAS 2 from the stem. The stone history moved to `pmh`.
- `pmh` now holds diabetes, hypertension, past stones and the ESBL culture. New `meds` holds the three drugs, no allergies and weight.
- `husband` now includes his report of a bad kidney infection last year (from the stem).

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 5 |
| Physical and differential | 7 | 2 |
| Management | 15 | 12 |
| Process | 0 | 8 |
| Total | 22 | 27 |

Added: ks-h1 prior cultures, resistant organisms and recent antibiotics (2), ks-h2 onset, radiation, urinary symptoms and stone history (2), ks-h3 diabetes and blood pressure medications and last doses (1). ks-m1 (data) and ks-m2 (diagnosis) moved to management. ks-c1, ks-l1, ks-c2 and ks-d1 moved to process.

**Longest path seconds.** 525 before, 525 after.

**Citations.**
- `eau` replaced. Before: "European Association of Urology. EAU guidelines on urolithiasis." It had no year. After: "Skolarikos A, et al. European Association of Urology guidelines on the diagnosis and treatment of urolithiasis. European Urology. 2025." Verified at https://pubmed.ncbi.nlm.nih.gov/40268592/ (Eur Urol 2025, 88:64 to 75).
- Unchanged and verified: SSC 2021 (PMID 34605781), Assimos 2016 AUA (27238616), Pearle 1998 (9751331).

---

## melena-wallet-card. Black stools and a card in his wallet

**Stem.** 125 words before, 50 after. Community hospital with an ICU, a blood bank, gastroenterology on call and daytime interventional radiology. A 47 year old man has had black stools for two days and nearly fainted at work this morning.

**Card.** Temperature 36.8°C. Pulse 116/minute. Resp. 20/minute. BP 98/62 mmHg. O2 sat 98% on room air. Weight: Not recorded. Medications: Naproxen 500 mg twice daily for three weeks. Allergies: Not recorded.

**History moved.**
- `history` (now "History of presenting illness"): adds the near faint at work, triage glucose 6.0 mmol/L and CTAS 2. Naproxen and alcohol moved out.
- New `nurse` ("The nurse's report"): the nurse's words from the stem. Hemoglobin 64, he declined the blood, he is a Jehovah's Witness with a signed card, and his wife on the phone insists on blood.
- New `pmh-meds` ("Past history and medications"): naproxen, no liver disease, no anticoagulants.
- New `social` ("Social history"): two beers a week, his faith, married with two children (both from existing findings).

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 5 | 7 |
| Physical and differential | 0 | 5 |
| Management | 21 | 14 |
| Process | 0 | 7 |
| Total | 26 | 33 |

Added: jw-h1 bleeding history and prior ulcer or liver disease (2), jw-h2 NSAID, antiplatelet, anticoagulant and alcohol use (2), jw-h3 when the card was signed and whether it still reflects his wishes (1), jw-x1 exam for shock and melena with a Glasgow Blatchford score (physical, 2). jw-c1 stays history. jw-a1 (capacity) is now physical. jw-c3, jw-p2, jw-p4, jw-c4, jw-d2 and jw-l1 moved to process. Without the new items management was 54 percent.

**Longest path seconds.** 555 before, 555 after.

**Citations.**
- `cpso`: added the year. "Consent to Treatment. Policy. Updated 2025." The page says approved February 2001 and updated March 2025, and that physicians must tell a patient found incapable about the substitute decision maker and the Consent and Capacity Board. https://www.cpso.on.ca/physicians/policies-guidance/policies/consent-to-treatment
- `cmpa` replaced. Before: "Consent. A guide for Canadian physicians." with no year. After: "Consent. A guide for Canadian physicians. Fourth edition. Revised 2024." The page shows "Published May 2006, Revised October 2024". https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians
- `malette`: text unchanged. Added the CanLII URL https://www.canlii.org/en/on/onca/doc/1990/1990canlii6868/1990canlii6868.html (1990 CanLII 6868, 72 OR (2d) 417).
- Unchanged: HCCA 1996 (existing e-Laws URL), Barkun 2019 (PMID 31634917).

---

## teen-wants-to-leave. A fifteen year old who wants to go home

**Stem.** 138 words before, 59 after. Community hospital at 05:00. A pediatric unit but no child psychiatrist. The nearest is at a children's hospital through CritiCall Ontario. A 15 year old girl is brought in by her mother, who found an empty acetaminophen bottle in her room.

**Card.** Temperature 36.7°C. Pulse 96/minute. Resp. 16/minute. BP 112/68 mmHg. O2 sat 99% on room air. Weight 55 kg (121 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved.**
- `ingestion`: adds the time the bottle was found (04:00) and her report that she took the whole bottle at about 02:00.
- New `nurse` ("Triage and the nurse's report"): triage at 05:00, glucose 5.4 mmol/L, CTAS 2, and the nurse's words that she refuses an IV and wants to go home.
- The `q-first` prompt said "Before we get to the refusal", which relied on the stem. It now reads "The nurse tells you she is refusing an IV. Before we get to the refusal, what is your medical assessment and treatment plan?"
- The first `q-first` model answer line now reads "Confirm the product, tablet strength, number taken, time of ingestion and weight. Up to about 545 mg/kg is a potentially hepatotoxic overdose." It ties the new history item to the question.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 7 |
| Physical and differential | 3 | 5 |
| Management | 20 | 13 |
| Process | 0 | 7 |
| Total | 25 | 32 |

Added: tn-h1 ingestion details and weight (2), tn-h2 suicidal intent, mood, prior self harm (2), tn-h3 private psychosocial interview (2), tn-h4 collateral on custody and who lives in the home (1). tn-a1 (no fixed age of consent) and tn-a2 (capacity finding) are physical. tn-p1, tn-c1, tn-d2, tn-l1 and tn-c2 moved to process.

**Longest path seconds.** 555 before, 555 after.

**Citations.**
- `cpso`: added "Updated 2025". Verified as above.
- Unchanged and verified: Coughlin 2018 CPS (PMID 30653623), Chiew 2020 MJA (31786822). CYFSA 2017 section 125 duty to report for a child under 16 confirmed by the Ontario Association of Children's Aid Societies (https://www.oacas.org/childrens-aid-child-protection/duty-to-report/). HCCA 1996 and MHA RSO 1990 unchanged.

---

## colleague-at-handover. A colleague at handover

**Stem.** 130 words before, 52 after. Community hospital in Ontario. The charge nurse takes you aside at the start of your 19:00 shift. The senior physician you are relieving smells of alcohol, nearly fell, and ordered 10 mg of IV hydromorphone for an 84 year old.

**Card.** Every field is "Not recorded". There is no patient in this station.

**History moved.**
- New `nurse-report` ("The charge nurse's report"): the medication room conversation and her words from the stem.
- New `background` ("The physician and the department"): 20 years at the hospital, respected, scheduled until 23:00, 180 beds, 28 stretchers, the 19:00 to 23:00 overlap then alone until 07:00, and the call in list.
- Names: the colleague and the charge nurse were named in the stem, `observations` label, `s-open`, `q-first` model answer, `s-public`, `s-ignore`, `s-denial`, `s-finish-low`, `s-secret`, `s-keys`, `q-team` and the end node. They are now "the physician", "he" and "the charge nurse".

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 5 |
| Physical and differential | 3 | 3 |
| Management | 18 | 14 |
| Process | 0 | 7 |
| Total | 22 | 29 |

Added: ic-h1 asks the charge nurse exactly what she saw (2), ic-h2 asks the team about a pattern (1), ic-h3 asks how he got to work and plans to get home (1), ic-x1 confirms by direct observation (physical, 2), ic-x2 keeps a medical differential open (physical, 1). ic-c3 (asks about suicide) is history. ic-m1 (review of orders, was data) is now management. ic-c1, ic-l1, ic-c2, ic-p3 and ic-l3 moved to process.

**Longest path seconds.** 525 before, 525 after.

**Citations.**
- `cpso`: added "Updated 2024". The Reporting Requirements page says approved November 2000, updated November 2024, and that physicians must take appropriate and timely action on reasonable grounds of a colleague's incapacity. https://www.cpso.on.ca/physicians/policies-guidance/policies/reporting-requirements
- `php` replaced. Before: "Ontario Medical Association. Physician Health Program." It is a program, not a work, and has no year. After: "Canadian Medical Association. CMA Policy. Physician health. 2017." Approved by the CMA Board in October 2017. It discusses physician health programs and support for colleagues. Verified from the PDF at https://www.cosprc.ca/wp-content/uploads/2019/10/CMA-Policy-Physician-Health-2017.pdf. The CMA PolicyBase link (PD18-01) returned 404, so no URL is set.
- `cmpa` replaced. Before: "Advice to members on concerns about a colleague." No such title could be found. After: "Canadian Medical Protective Association. Do you need to report another health professional? 2010, revised 2023." It advises members to call the CMPA when unsure and describes physician health programs. https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2010/do-you-need-to-report-another-health-professional
- `cma` Code of Ethics 2018 unchanged.

---

## driver-asks-for-silence. A driver who asks you to keep it quiet

**Stem.** 122 words before, 59 after. Community hospital in Ontario. CT is available. MRI and EEG are outpatient only. The first seizure clinic books within two to four weeks. A 49 year old man arrives by ambulance after his wife saw him stiffen and shake in bed for about two minutes.

**Card.** Temperature 37.0°C. Pulse 88/minute. Resp. 16/minute. BP 138/84 mmHg. O2 sat 98% on room air. Weight: Not recorded. Medications: Amlodipine. Allergies: Not recorded.

**History moved.**
- `history` (now "History of presenting illness"): adds the 911 call at 06:30, two minutes of shaking, 20 minutes of confusion, triage at 07:20, glucose 6.4 mmol/L, CTAS 3 and the nurse's report that he is back to himself.
- `pmh` keeps hypertension, seizure and family history and the Class B licence. New `meds` holds amlodipine and no new medications.
- `work` (now "Social history, work and family"): adds alcohol and drugs from the old history, and the 14:30 school bus route from the stem.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 7 |
| Physical and differential | 2 | 4 |
| Management | 17 | 10 |
| Process | 0 | 7 |
| Total | 21 | 28 |

Added: dr-h1 witness account (2), dr-h2 earlier spells, sleep, alcohol, drugs and medications (1), dr-h3 licence class and driving for work (2), dr-x1 exam and differential of seizure, convulsive syncope and arrhythmia (physical, 2). dr-a1 stays history. dr-p1, dr-c2, dr-l1, dr-c3 and dr-p3 moved to process.

**Longest path seconds.** 510 before, 510 after.

**Citations.**
- `mto`: added the year. "Government of Ontario, Ministry of Transportation. Reporting a driver for medical review. Updated 2026." The page describes the Medical Condition Report and mandatory reporting under HTA section 203 and O Reg 340/94. https://www.ontario.ca/page/reporting-driver-medical-review
- `cma-driver`: added the edition and year. "10th edition. 2023." The site lists corrections in May 2024 and February 2025. https://driversguide.ca/
- Unchanged: Huff 2014 ACEP (PMID 24655445), HTA RSO 1990 and PHIPA 2004. HTA good faith protection for reporters was confirmed in secondary sources (ontario.ca and Miller Thomson). I did not read the e-Laws statute text.

---

## news-in-the-family-room. A husband and son in the family room

**Stem.** 111 words before, 58 after. Community hospital in Ontario. A 44 year old woman collapsed while running and could not be resuscitated. You stopped at 08:22. Her husband and their 12 year old son have just arrived and have been told nothing.

**Card.** Pulse: "No pulse. No return of circulation. Resuscitation stopped at 08:22." Every other field is "Not recorded".

**History moved.**
- New `nurse` ("The nurse's report"): the nurse's words from the stem, including that the coroner has not been called, and the social worker and spiritual care provider on site.
- `timeline`: adds that she never had a return of circulation and the roughly 40 minutes of ED resuscitation.
- Names: the patient, husband and son were named in the stem, `family-history`, `family`, `s-open`, the `q-deliver` model answer and a choice label, `s-long`, `s-euphemism`, `q-reaction`, `q-son`, `q-interrupt` label, `s-leave-silent`, `s-stay`, `s-viewing`, `s-no-viewing`, `s-question`, `q-genetic` model answer, labels and feedback, `s-reassure`, `q-close` and the end node. They are now "her husband", "their son" and "she". "Jennifer died" is now "she died".

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 6 |
| Physical and differential | 3 | 4 |
| Management | 19 | 13 |
| Process | 0 | 10 |
| Total | 23 | 33 |

Added: dn-h1 confirms who is present and what they know (2), dn-h2 asks about her fainting, family sudden deaths and relatives' testing (2), dn-h3 religious or cultural needs and who to call (1), dn-h4 asks the son what he understands (1), dn-x1 recognizes the prior QTc of 498 ms as prolonged (physical, 2), dn-x2 differential for sudden death in a young adult (physical, 2). dn-d1 (was diagnosis) is now management. dn-l1, dn-c1, dn-c4, dn-l2, dn-p2, dn-p3, dn-d2 and dn-l3 moved to process.

**Longest path seconds.** 615 before, 615 after.

**Citations.** No change. Verified: Hobgood 2005 GRIEV_ING (PMID 15805319), Baile 2000 SPIKES (10964998), Gollob 2011 CCS and CHRS (21459272). Coroners Act RSO 1990 and Gift of Life Act RSO 1990 unchanged.

---

## headaches-and-a-ct-result. Headaches and a CT result

**Stem.** 118 words before, 56 after. Community hospital in Ontario in the evening. Neurosurgery is at the regional centre through CritiCall Ontario. A 61 year old man comes alone by taxi with three weeks of headaches. His CT is back and the radiologist wants to speak with you.

**Card.** Temperature 36.6°C. Pulse 82/minute. Resp. 16/minute. BP 146/88 mmHg. O2 sat 96% on room air. Weight: Not recorded. Medications: Not recorded. Allergies: Not recorded.

**History moved.**
- `history` (now "History of presenting illness"): adds dropping things with his left hand, his question about migraine, triage glucose 6.8 mmol/L and CTAS 3. Smoking and work moved to `social`.
- `social`: adds smoking, work as a machinist, driving, that he came alone by taxi and that his wife is at work.
- The case gives no past history, medications or allergies, so no findings were made for them.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 5 |
| Physical and differential | 3 | 4 |
| Management | 18 | 11 |
| Process | 0 | 10 |
| Total | 21 | 30 |

Added: bn-h1 headache pattern, focal weakness and seizures (2), bn-h2 smoking, weight loss and cough (2), bn-h3 work, driving and supports (1), bn-x1 focal neuro exam and fundi (physical, 2), bn-x2 differential for ring enhancing lesions (physical, 2). bn-c4 (was diagnosis) is now management. bn-c1, bn-p1, bn-c2, bn-d1, bn-c6 and bn-p2 moved to process.

**Longest path seconds.** 525 before, 525 after.

**Citations.**
- `cpso`: added "Updated 2025". Verified as above.
- Unchanged and verified: Baile 2000 (PMID 10964998), Vogelbaum 2022 JCO (34932393), the ASCO and SNO endorsement of the CNS guidelines, JCO 2019 (30883246, first author Chang SM), CMA Code 2018 and PHIPA 2004.

---

## hour-seven-in-the-hallway. Hour seven in the hallway

**Stem.** 126 words before, 59 after. Community hospital in Ontario at 23:00. Twenty two admitted patients boarding and 11 on hallway stretchers. An 86 year old woman with a hip fracture has waited in the hallway since 16:05. Her daughter is yelling at the desk and filming staff.

**Card.** Weight 52 kg (115 lb). Medications: "Not on anticoagulants. Others not recorded." Every other field is "Not recorded". The case gives no vital signs.

**History moved.**
- New `hpi` ("History of presenting illness"): the fall, arrival at 16:05, the displaced femoral neck fracture, admission to orthopedics, surgery tomorrow and no ward bed.
- `nurse`: adds the nurse's words from the stem (yelling, filming, "called me useless", nothing for pain since 16:30, "slammed").
- `census`: adds security on site, the manager and administrator on call and patient relations opening at 08:00.
- Names: the patient, her daughter and the bedside nurse were named throughout findings, nodes, choice labels, feedback and the end node. They are now "the patient", "the daughter" or "her daughter", and "the nurse". In the patient's own quote, the daughter's name became "My daughter". The model answer "Reassign Mrs. Olsen to another nurse if Leah wishes" became "Offer to reassign the patient to another nurse if she wishes."

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 0 | 5 |
| Physical and differential | 2 | 3 |
| Management | 21 | 8 |
| Process | 0 | 13 |
| Total | 23 | 29 |

Added: hw-h1 reviews what analgesia was ordered and given (2), hw-h2 baseline cognition, prior delirium, glasses and hearing aids (2), hw-h3 weight, kidney function and anticoagulants (1), hw-x1 looks for other causes of delirium (physical, 1). hw-l1 (limit setting) is management. hw-c1, hw-c2, hw-c3, hw-p1, hw-p2, hw-l2, hw-l3, hw-c4 and hw-p3 moved to process.

**Longest path seconds.** 510 before, 510 after.

**Citations.**
- `ccsmh` replaced. Before: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health. The assessment and treatment of delirium." It had no year. After: "Canadian Coalition for Seniors' Mental Health. 2014 guideline update. The assessment and treatment of delirium. 2014." It is the current CCSMH delirium guideline listed on its site. https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf
- Unchanged and verified: Richmond 2012 Project BETA (PMID 22461917), Guay and Kopp 2020 Cochrane (33238043), Affleck 2013 CAEP (24176460). Apology Act 2009 and OHSA RSO 1990 unchanged.

---

## Needs physician decision

1. **Stations without an arriving patient.** The colleague, family room and hallway cases cannot honestly say "when the following patient arrives". Their stems say "when the charge nurse takes you aside", "when the family of a patient arrives" and "when the nurse asks for help". Their cards are mostly "Not recorded". Please decide whether these stations should carry a card at all.
2. **Family and staff names.** I removed the names of the colleague, the charge nurse, the bedside nurse, the daughter, the husband and the son, not only the patients. In the death notification the model line is now "Despite everything we did, she died." Real practice uses the patient's name. Restore names if you want only patient names removed.
3. **Card medications give clues.** The cards now show naproxen (melena), metformin, empagliflozin and candesartan (flank pain) and amlodipine (seizure). The candidate sees them before asking. The flank pain card gives no candesartan dose because the case gives none.
4. **Malaria stem.** "IV artesunate is not stocked" is the setting the case depends on, but it hints at the diagnosis. Consider moving it to a finding or to the `q-treat` prompt.
5. **Findings cap.** CASE_SPEC says 10 to 18 findings, but `tests/cases.test.ts` allows 8 to 14. The injection use case is at 14, so its history could not be split further. The headaches case stays at 8 because it gives no past history, medications or allergies to split out.
6. **Weak source fit.** ks-m3 and the new ks-h3 (hold metformin, empagliflozin and candesartan) cite the EAU urolithiasis guideline, which does not cover diabetes drugs in sepsis. A Diabetes Canada sick day source may fit better.
7. **Physician health source.** ic-c3 (asking the colleague about suicide), ic-c2 and ic-d2 now cite the CMA Physician Health policy 2017. It covers physician health programs and support for colleagues. I did not find the word suicide in it. Choose a better source for ic-c3 if you want one.
8. **Web page years.** CATMAT, CDC and the MTO page carry the year of their last update (2024, 2026 and 2026). They will drift as the pages change.
9. **Setting detail dropped from stems.** These setting details were not moved into findings: bed counts (except the colleague case), "ICU and ID by phone" (malaria), "CT and an ICU" (flank pain), "internal medicine and oncology by referral" (headaches), and "social work on call and the poison centre by phone" (teen). The nodes still name these services where they act. The shift time of day was dropped for the seizure case.
10. **Teen prompt.** The `q-first` prompt now opens "The nurse tells you she is refusing an IV." The old prompt relied on the stem for the refusal.
