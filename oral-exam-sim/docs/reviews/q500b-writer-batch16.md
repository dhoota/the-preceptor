# Q500B writer report: oral cases batch16

Writer: Preceptor. All four cases are `reviewed: false`, `version: 1`, `author: "Preceptor"`. Each case is in its own file in `src/cases/batch16/` and is registered in `BATCH_16`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch16` printed nothing.
- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts` passed 41 of 41.
- batch16 is not yet listed in `docs/oral-realign.json`. I also ran `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts` so the CFPC card and score sheet rules apply. It passed 39 of 39.

## Ids written

| Id | Title | priorityTopic | Setting | Questions | Branching | Longest path |
|---|---|---|---|---|---|---|
| ems-patch-blocked-tracheostomy-child | A patch about a boy who is working hard to breathe | ems | Community hospital, northern Ontario | 7 | 4 | 680 s |
| lip-laceration-missing-tooth-fragment | A fall on the back steps | lacerations | Rural hospital | 7 | 4 | 640 s |
| aphasia-after-ed-cardioversion | A call to the bedside before discharge | cva | Tertiary care centre | 7 | 3 | 620 s |
| cyberattack-downtime-code-stroke | The evening the screens went dark | multiple-patients | Community hospital, Ontario | 6 | 4 | 560 s |

The cva case has three branching questions: q-first, q-reperfusion and q-disclose.

Rubric points by score sheet row:

| Case | History | Physical | Management | Process | Total | Critical items |
|---|---|---|---|---|---|---|
| ems-patch-blocked-tracheostomy-child | 8 (24%) | 5 | 11 (32%) | 10 | 34 | tr-h3, tr-m1, tr-m4, tr-pr3 |
| lip-laceration-missing-tooth-fragment | 6 (21%) | 5 | 12 (41%) | 6 | 29 | la-h1, la-m1, la-m4 |
| aphasia-after-ed-cardioversion | 7 (23%) | 6 | 10 (32%) | 8 | 31 | cv-h1, cv-m1, cv-m2 |
| cyberattack-downtime-code-stroke | 6 (22%) | 5 | 7 (26%) | 9 | 27 | mp-h2, mp-m1, mp-m2, mp-pr1 |

Each case has an escalation on every path. EMS: the tube is displaced into a false passage during a one person tie change. Lacerations: the lip radiograph shows a buried tooth fragment. CVA: her husband arrives and says the palpitations began the night before, then asks whether the shock caused the stroke. Multiple patients: the laboratory phones a critical potassium on a hand labelled tube when two patients share a surname.

## Uniqueness

Before writing I read every oral case with these four priority topics or key features (ems-patch-ruptured-aaa, glass-finger-return-visit, acute-ischemic-stroke-evt, acute-vestibular-syndrome-hints, saturday-night-no-beds, highway-bus-collision, crowded-resus-room, and the cases that list these key features) and every SAMP stem in s05, s27 (cva), s09, s35 (ems), s13, s43 (lacerations), and s13, s44 (multiple patients). The Q500B SAMP files s74, s78, s86 and s88 were still empty.

Ideas I rejected because the bank already has them: infective endocarditis stroke (s27), sickle cell and varicella strokes in children (s27), hypertensive and cocaine ICH (s07, s40), ASA with platelet transfusion (s27), laryngectomy with an aspirated voice prosthesis (s21), near hanging (s21), rattlesnake bite (s50), self-harm and volar wrist glass wounds (s43).

What is new in each case:
- EMS. A child whose upper airway is not patent after subglottic stenosis. The decision is to have the trained parent change the blocked tube at the scene before transport, within Ontario PCP scope. Later decisions are a structured handover that brings out the narrowed stoma, a false passage in the department, and waiting for a pediatric critical care transport team. The bank has adult tracheostomy and laryngectomy SAMPs, but no pediatric tracheostomy, no home caregiver tube change and no EMS patch about a tracheostomy.
- Lacerations. A through and through lip wound with a broken incisor and a missing piece of tooth. The decisions are a lip radiograph before closure (IADT), marking the vermilion border and using a mental nerve block, a layered repair, Tdap at 10 years for a dirty wound, and keeping the fragment moist so a dentist can bond it back. The bank has no lip, vermilion or dental fragment case.
- CVA. An in-hospital stroke 90 minutes after an ED cardioversion. A colleague dated the atrial fibrillation from waking, but collateral puts the onset at 21:30 the night before, so the arrhythmia had lasted just over 12 hours and she had three CHADS-65 criteria. The case covers the code stroke, tenecteplase plus thrombectomy, refusing heparin, care after reperfusion, disclosure and a CQI fix. The bank has no stroke after cardioversion.
- Multiple patients. A ransomware downtime with a code stroke on apixaban, where the record cannot be checked. It runs a STEMI in parallel, then a targeted EMS redirect and a warning to neighbouring departments, then a wrong patient potassium result. The bank has no cyberattack or downtime scenario.

## Key feature coverage

- ems-patch-blocked-tracheostomy-child: ems 1 (patch, field direction, preparing the department), ems 2 (handover details only the crew knows), ems 3 (stabilizing for transfer beyond the facility), airway 4 (children and special contexts), airway 6 (capnography confirmation).
- lip-laceration-missing-tooth-fragment: lacerations 1, 2, 3 and 4.
- aphasia-after-ed-cardioversion: cva 1 (mimics such as sedation, glucose and seizure), cva 3 (territory, cause, CT and CTA, thrombolysis risk), cqi 1 (contributing factors and a fix), cqi 2 (disclosure).
- cyberattack-downtime-code-stroke: multiple-patients 1, 2, 3 and 4, cva 3, cqi 5 (two identifiers, safe medication use).

## Sources and how each was checked

The WebSearch budget ran out partway through the research. After that I checked sources by opening known URLs with WebFetch, by PubMed E-utilities esummary on known PMIDs, and by retrieving known DOIs and PMC ids from Europe PMC. A `url` is given only where I opened that page.

| Case | Source | How checked |
|---|---|---|
| EMS | Doherty C, Neal R, English C, Cooke J, et al. Paediatric tracheostomy emergencies. Anaesthesia 2018 | PubMed esummary PMID 30062783. The algorithm steps were checked against NHS copies of the NTSP paediatric algorithm (span.scot.nhs.uk, mft.nhs.uk) found by search. No url given. |
| EMS | Ontario Ministry of Health. ALS Patient Care Standards v5.4. 2025 | Opened https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf and read the patching section and the Tracheostomy Suctioning and Reinsertion directive (PCP, 2 attempts, use a trained caregiver). |
| EMS | Iedema R, et al. IMIST-AMBO. BMJ Qual Saf 2012 | Search and PubMed esummary PMID 22626739. The publisher page refused access, so no url. |
| EMS | Warren J, et al. Inter- and intrahospital transport. Crit Care Med 2004 | PubMed esummary PMID 14707589. No url. |
| Lacerations | Forsch RT, et al. Laceration repair. Am Fam Physician 2017 | Opened https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html: vermilion first suture, marking before anesthetic, suture sizes, 50 to 100 mL/cm irrigation, one third of foreign bodies missed, face sutures out in 3 to 5 days, referral list. |
| Lacerations | Bourguignon C, et al. IADT fractures and luxations. Dent Traumatol 2020 | Opened the accepted manuscript at https://eprints.whiterose.ac.uk/id/eprint/161684/1/IADT%20guidelines%20-%20Fractures%20and%20luxations.pdf. Table 4 says missing fragments must be accounted for, a lip or cheek radiograph is indicated, and an available fragment can be bonded back after rehydration. |
| Lacerations | PHAC. Canadian Immunization Guide. Tetanus toxoid. 2026 | Opened the canada.ca chapter (last full update June 2026). Table 1 and the advice on an adult Tdap dose. |
| Lacerations | Steele MT, et al. Prophylactic penicillin for intraoral wounds. Ann Emerg Med 1989 | PubMed esummary PMID 2502938. The infection rates of 6.7% and 18.8% come from a secondary summary found by search. No url. |
| Lacerations | Powers DB. How to do a mental nerve block. Merck Manual Professional. 2025 | Opened the Merck page: 1 to 2 mL, bilateral blocks for midline wounds, last full review May 2025. |
| CVA | Heran M, et al. CSBPR Acute Stroke Management 7th ed, 2022. Can J Neurol Sci 2024 | PubMed esummary PMID 36529857. Opened the strokebestpractices.ca treatment page (tenecteplase 0.25 mg/kg to 25 mg, no routine thrombolysis on a DOAC, anticoagulation does not rule out EVT) and the ED evaluation page (keep BP under 185/110 during thrombolysis and for 24 hours, record anticoagulant timing, blood work must not delay imaging). |
| CVA | Stiell IG, et al. 2021 CAEP AF/flutter checklist. CJEM 2021 | Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/: when it is safe to cardiovert, the CHADS-65 criteria, and starting anticoagulation before discharge. |
| CVA | CMPA. Disclosing harm from healthcare delivery. Version 3. 2017 | Opened the CMPA handbook page. |
| MP | Bullard MJ, et al. CTAS revisions 2016. CJEM 2017 | PubMed esummary PMID 28756800. No url. |
| MP | Dameff C, et al. Ransomware and adjacent EDs. JAMA Netw Open 2023 | Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC10167570/. |
| MP | Emergency Management Ontario. IMS guidance v2.0. 2021 | Opened the ontario.ca page. Version 2.0 is dated March 31, 2021. |
| MP | WHO Collaborating Centre. Patient identification. 2007 | Opened the WHO PDF and extracted the text: at least two identifiers, and label specimens at the bedside. |
| MP | CSBPR Acute Stroke Management 2022 | As above. |
| MP | UK Kidney Association. Treatment of acute hyperkalaemia in adults. 2026 | Opened https://guidelines.ukkidney.org/hyperkalaemia/ (updated July 2026). |

## Uncertain, for the reviewer and the physician

1. EMS. The PCP directive covers reinsertion only after the cannula is out of the airway, with a tube provided for the patient. In the case the mother removes and replaces the tube, and the crew supports her. A reviewer should confirm that this direction fits PCP scope.
2. EMS. The antibiotic choice for Pseudomonas tracheitis is left to the pediatric team, and no dose is given. The tr-m6 teaching on humidification and suction cites Doherty, which covers prevention of blockage rather than infection.
3. Lacerations. The evidence for antibiotics after an intraoral wound is weak. I keyed a short course of penicillin as strong only because this wound is through and through, dirty and held a foreign body. No dose is given. I could not open the conclusion of Mark and Granquist 2008, so I did not cite it.
4. Lacerations. "Urgent dental review, ideally the next morning" for a complicated crown fracture is my wording. The IADT table supports early pulp treatment but gives no number of hours.
5. CVA. The teaching that early heparin does not treat acute cardioembolic stroke (cv-m3, and the unsafe choice) rests on general stroke practice. I did not find it stated in the CSBPR sections I opened. A reviewer may prefer a different source.
6. CVA. "Labetalol 10 mg IV" after reperfusion has no source in the case. The cited guideline gives only the 185/110 target. A reviewer may want the dose removed or sourced.
7. CVA. The case keys tenecteplase before thrombectomy at a comprehensive stroke centre, as CSBPR 2022 does. The 2025 CSBPR EVT interim update supersedes the 2022 EVT recommendations, and I did not read whether it changes bridging thrombolysis.
8. MP. The hyperkalemia treatment is named without doses because I could not open the UKKA dosing appendices. The bank's dialysis-hyperkalemia-arrest case already gives doses.
9. MP. The STEMI is managed by the colleague and has no rubric item of its own. It counts toward triage and delegation.
10. Five sources have no url (Doherty, Iedema, Warren, Steele, Bullard) because their publisher or PubMed pages refused access.
