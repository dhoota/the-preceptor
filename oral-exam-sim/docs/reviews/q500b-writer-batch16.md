# Q500B writer report: oral cases batch16

Writer: Preceptor. All four cases are `reviewed: false`, `version: 1`, `author: "Preceptor"`. Each case is in its own file in `src/cases/batch16/` and is registered in `BATCH_16`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch16` printed nothing.
- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000` passed 41 of 41 after the revision.
- batch16 is not yet listed in `docs/oral-realign.json`. I also ran `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts` so the CFPC card and score sheet rules apply. It passed 39 of 39 after the revision.

## Revision 1 (coordinator request)

Two first drafts duplicated SAMPs written in parallel this round. lip-laceration-missing-tooth-fragment matched lacerations-39 in s74 (a lip cut through the vermilion with a missing piece of tooth). cyberattack-downtime-code-stroke matched multiple-patients-36 in s78 (ransomware takes down the record). I deleted both files and replaced them with forearm-laceration-hemophilia-emicizumab and wildfire-evacuees-host-hospital. Before writing the replacements I read every new SAMP stem in s72 to s88 and every case in batch17 and batch18. batch19 and batch20 were still empty.

## Ids written

| Id | Title | priorityTopic | Setting | Questions | Branching | Longest path |
|---|---|---|---|---|---|---|
| ems-patch-blocked-tracheostomy-child | A patch about a boy who is working hard to breathe | ems | Community hospital, northern Ontario | 7 | 4 | 680 s |
| forearm-laceration-hemophilia-emicizumab | A cut at the hardware store | lacerations | Community hospital | 6 | 4 | 560 s |
| aphasia-after-ed-cardioversion | A call to the bedside before discharge | cva | Tertiary care centre | 7 | 3 | 620 s |
| wildfire-evacuees-host-hospital | The first plane from the north | multiple-patients | Community hospital, Ontario host community | 6 | 4 | 540 s |

The cva case has three branching questions: q-first, q-reperfusion and q-disclose.

Rubric points by score sheet row:

| Case | History | Physical | Management | Process | Total | Critical items |
|---|---|---|---|---|---|---|
| ems-patch-blocked-tracheostomy-child | 8 (24%) | 5 | 11 (32%) | 10 | 34 | tr-h3, tr-m1, tr-m4, tr-pr3 |
| forearm-laceration-hemophilia-emicizumab | 6 (21%) | 5 | 11 (39%) | 6 | 28 | hf-h2, hf-m2, hf-m3 |
| aphasia-after-ed-cardioversion | 7 (23%) | 6 | 10 (32%) | 8 | 31 | cv-h1, cv-m1, cv-m2 |
| wildfire-evacuees-host-hospital | 5 (20%) | 4 | 7 (28%) | 9 | 25 | wf-m1, wf-pr1, wf-pr3 (after revision 2) |

Each case has an escalation on every path. EMS: the tube is displaced into a false passage during a one person tie change. Lacerations: at the pre discharge check the forearm is tense from a muscle bleed with a developing compartment syndrome. CVA: her husband arrives and says the palpitations began the night before, then asks whether the shock caused the stroke. Multiple patients: the second plane brings three more people on dialysis to a full unit, and then an unverified man asks to take a confused elder away.

## Uniqueness

Before writing I read every oral case with these four priority topics or key features (ems-patch-ruptured-aaa, glass-finger-return-visit, acute-ischemic-stroke-evt, acute-vestibular-syndrome-hints, saturday-night-no-beds, highway-bus-collision, crowded-resus-room, and the cases that list these key features) and every SAMP stem in s05, s27 (cva), s09, s35 (ems), s13, s43 (lacerations), and s13, s44 (multiple patients). For the revision I also read every new SAMP in s72 to s88 and the cases in batch17 and batch18.

Ideas I rejected because the bank already has them: infective endocarditis stroke (s27), sickle cell and varicella strokes in children (s27), hypertensive and cocaine ICH (s07, s40), ASA with platelet transfusion (s27), laryngectomy with an aspirated voice prosthesis (s21), near hanging (s21), rattlesnake bite (s50), self-harm and volar wrist glass wounds (s43), lip and mouth wounds with tooth injury (s74), a ransomware downtime and a chlorine release at a pool (s78), a hydrogen sulfide manure pit (s53), measles exposure of contacts (s14), hospital fire evacuation (rejected because I could not verify a source for the evacuation steps), and freshwater propeller wounds (Aeromonas teaching already in s43).

What is new in each case:
- EMS. A child whose upper airway is not patent after subglottic stenosis. The decision is to have the trained parent change the blocked tube at the scene before transport, within Ontario PCP scope. Later decisions are a structured handover that brings out the narrowed stoma, a false passage in the department, and waiting for a pediatric critical care transport team. The bank has adult tracheostomy and laryngectomy SAMPs, but no pediatric tracheostomy, no home caregiver tube change and no EMS patch about a tracheostomy.
- Lacerations. A deep forearm laceration in a 15 year old (17 before revision 2) with severe hemophilia A on emicizumab. The aPTT is falsely normal, so the decisions are to call the treatment centre and give factor VIII before exploring and closing, to avoid activated prothrombin complex concentrate (thrombotic microangiopathy with emicizumab), and to stop ibuprofen. The exam finds a superficial radial nerve deficit. Antibiotics and tetanus vaccine are correctly withheld. A delayed compartment syndrome from a muscle bleed follows. The bank's only hemophilia item is a GI bleed SAMP (s39). No laceration item covers a bleeding disorder or emicizumab.
- CVA. An in-hospital stroke 90 minutes after an ED cardioversion. A colleague dated the atrial fibrillation from waking, but collateral puts the onset at 21:30 the night before, so the arrhythmia had lasted just over 12 hours and she had three CHADS-65 criteria. The case covers the code stroke, tenecteplase plus thrombectomy, refusing heparin, care after reperfusion, disclosure and a CQI fix. The bank has no stroke after cardioversion.
- Multiple patients (after revision 2). A host hospital receives evacuees from a fly-in First Nation during a wildfire. The index patient is a woman at 37 weeks, in her fourth pregnancy, whose baby was lying across. Her membranes rupture on the walk from the arena and she waits behind earlier arrivals. Triage by acuity finds a cord prolapse with a shoulder presenting and fetal bradycardia. The decisions are to hold the presenting part up, handle the cord as little as possible, use knee-chest positioning, call for a category 1 caesarean, and use bladder filling and terbutaline if there is a delay. The parallel streams, the provincial routing of three dialysis patients on the second plane, and the unverified man with the elder are unchanged. Before choosing it I grepped the whole bank for cord prolapse. The only hit is a passing word in an s09 EMS breech SAMP. I also ruled out adrenal crisis, thyroid storm, VP shunt failure and levodopa withdrawal, which the bank already has.

## Key feature coverage

- ems-patch-blocked-tracheostomy-child: ems 1 (patch, field direction, preparing the department), ems 2 (handover details only the crew knows), ems 3 (stabilizing for transfer beyond the facility), airway 4 (children and special contexts), airway 6 (capnography confirmation).
- forearm-laceration-hemophilia-emicizumab: lacerations 1, 2, 3 and 4.
- aphasia-after-ed-cardioversion: cva 1 (mimics such as sedation, glucose and seizure), cva 3 (territory, cause, CT and CTA, thrombolysis risk), cqi 1 (contributing factors and a fix), cqi 2 (disclosure).
- wildfire-evacuees-host-hospital: multiple-patients 1, 2, 3 and 4, cqi 5 (two identifiers).

## Sources and how each was checked

The WebSearch budget ran out partway through the research. After that I checked sources by opening known URLs with WebFetch, by PubMed E-utilities esummary on known PMIDs, and by retrieving known DOIs and PMC ids from Europe PMC. A `url` is given only where I opened that page.

| Case | Source | How checked |
|---|---|---|
| EMS | Doherty C, Neal R, English C, Cooke J, et al. Paediatric tracheostomy emergencies. Anaesthesia 2018 | PubMed esummary PMID 30062783. The algorithm steps were checked against NHS copies of the NTSP paediatric algorithm (span.scot.nhs.uk, mft.nhs.uk) found by search. No url given. |
| EMS | Ontario Ministry of Health. ALS Patient Care Standards v5.4. 2025 | Opened https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf and read the patching section and the Tracheostomy Suctioning and Reinsertion directive (PCP, 2 attempts, use a trained caregiver). |
| EMS | Iedema R, et al. IMIST-AMBO. BMJ Qual Saf 2012 | Search and PubMed esummary PMID 22626739. The publisher page refused access, so no url. |
| EMS | Warren J, et al. Inter- and intrahospital transport. Crit Care Med 2004 | PubMed esummary PMID 14707589. No url. |
| Lacerations | Srivastava A, et al. WFH guidelines for the management of hemophilia, 3rd edition. Haemophilia 2020 | Downloaded and read https://www1.wfh.org/publications/files/pdf-1863.pdf. Section 7.10: for deep lacerations raise the factor level, then suture, with consideration of cover for suture removal. Factor VIII for breakthrough bleeds on emicizumab without inhibitors. aPCC with emicizumab caused TMA or thrombosis. Emicizumab shortens the aPTT whatever the reagent. NSAIDs other than selective COX-2 inhibitors are not used, and the IM route is not advised. Continued evaluation to avoid compartment syndrome. |
| Lacerations | Forsch RT, et al. Laceration repair. Am Fam Physician 2017 | Opened https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html: structure by structure exam, 50 to 100 mL/cm irrigation, a third of foreign bodies missed, no antibiotic benefit for simple nonbite wounds. |
| Lacerations | PHAC. Canadian Immunization Guide. Tetanus toxoid. 2026 | Opened the canada.ca chapter (last full update June 2026). Table 1: no vaccine if the last dose was under 5 years ago. |
| CVA | Heran M, et al. CSBPR Acute Stroke Management 7th ed, 2022. Can J Neurol Sci 2024 | PubMed esummary PMID 36529857. Opened the strokebestpractices.ca treatment page (tenecteplase 0.25 mg/kg to 25 mg, no routine thrombolysis on a DOAC, anticoagulation does not rule out EVT) and the ED evaluation page (keep BP under 185/110 during thrombolysis and for 24 hours, record anticoagulant timing, blood work must not delay imaging). |
| CVA | Stiell IG, et al. 2021 CAEP AF/flutter checklist. CJEM 2021 | Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/: when it is safe to cardiovert, the CHADS-65 criteria, and starting anticoagulation before discharge. |
| CVA | CMPA. Disclosing harm from healthcare delivery. Version 3. 2017 | Opened the CMPA handbook page. |
| MP | Bullard MJ, et al. CTAS revisions 2016. CJEM 2017 | PubMed esummary PMID 28756800. No url. |
| MP | RCOG. Umbilical cord prolapse. Green-top Guideline No. 50. 2014, reviewed 2024 | Downloaded and read https://www.rcog.org.uk/media/3wykswng/gtg-50-umbilicalcordprolapse-2014.pdf. It confirms suspecting prolapse with an abnormal fetal heart soon after rupture, minimal handling, no manual replacement, manual or bladder elevation (500 to 750 mL), knee-chest or left lateral head down, terbutaline 0.25 mg SC, category 1 caesarean within 30 minutes, and multiparity and abnormal lie as associations. The guideline page shows reviews through 2024 with no update. |
| MP | Emergency Management Ontario. IMS guidance v2.0. 2021 | Opened the ontario.ca page. Version 2.0 is dated March 31, 2021. |
| MP | Kollek D, et al. CAEP position statement: hospital disaster preparedness. CJEM 2020 | Europe PMC record for PMID 32425150, then opened the article page by its DOI redirect: all hazards planning, vulnerable populations, regional resources and mutual aid, IMS based command. No url given because I reached it through a redirect. |
| MP | WHO Collaborating Centre. Patient identification. 2007 | Opened the WHO PDF and extracted the text: at least two identifiers, and standard approaches for confused patients. |

## Uncertain, for the reviewer and the physician

1. EMS. The PCP directive covers reinsertion only after the cannula is out of the airway, with a tube provided for the patient. In the case the mother removes and replaces the tube, and the crew supports her. A reviewer should confirm that this direction fits PCP scope.
2. EMS. The antibiotic choice for Pseudomonas tracheitis is left to the pediatric team, and no dose is given. The tr-m6 teaching on humidification and suction cites Doherty, which covers prevention of blockage rather than infection.
3. Lacerations. No factor VIII dose is given. The case defers it to the treatment centre, as WFH does. The emicizumab dose in the findings (87 mg weekly for 58 kg after revision 2) is the 1.5 mg/kg weekly maintenance dose, which the reviewer confirmed.
4. Lacerations. The compartment syndrome teaching (pain on passive stretch, a palpable pulse until late) is standard teaching. The WFH guideline only says to evaluate continually to avoid compartment syndrome, so the case does not cite a specific compartment syndrome source.
5. CVA. The teaching that early heparin does not treat acute cardioembolic stroke (cv-m3, and the unsafe choice) rests on general stroke practice. I did not find it stated in the CSBPR sections I opened. A reviewer may prefer a different source.
6. CVA. "Labetalol 10 mg IV" after reperfusion has no source in the case. The cited guideline gives only the 185/110 target. A reviewer may want the dose removed or sourced.
7. CVA. The case keys tenecteplase before thrombectomy at a comprehensive stroke centre, as CSBPR 2022 does. The 2025 CSBPR EVT interim update supersedes the 2022 EVT recommendations, and I did not read whether it changes bridging thrombolysis.
9. MP. The buprenorphine continuity, the insulin for the boy and the obstetric assessment are cited to the CAEP statement on vulnerable populations, not to drug specific guidance. No doses are given. A reviewer may want a more specific source.
10. MP. The hyperkalemia overlap with batch01 was removed in revision 2. The cord prolapse management is from an RCOG guideline because I found no Canadian source I could open. A reviewer may prefer SOGC guidance if one exists.
11. Five sources have no url (Doherty, Iedema, Warren, Bullard, Kollek) because their publisher or PubMed pages refused access or I reached them only by redirect.

## Revision 2 (QA review docs/reviews/q500b-qa-batch16.md, 9 fails)

1. ems-patch-blocked-tracheostomy-child, card. The card now shows the patch values: temperature 38.5°C axillary measured at home by his mother, pulse 152, resp 48, BP 108/68 mmHg (also added to the patch-report finding) and 84% on 10 L/minute by tracheostomy mask. The 18:32 values (38.4°C, 138, 36, 102/64 mmHg, 93% on 6 L/minute) moved into exam-arrival.
2. ems, c-send-now feedback. "an hour ago" became "less than half an hour ago".
3. ems, tr-pr5. Split. tr-pr5 (1 point, doherty) is now the thanks, the narrowed stoma and the go-bag advice. New tr-pr6 (1 point, professionalism, process) covers honest disclosure and reporting of the tie change displacement and cites a new fifth source, CMPA Disclosing harm 2017. I had opened that page earlier in this session. The process row still totals 10 points.
4. ems, tr-h2. The first teaching sentence now says what the directive says: paramedics may suction for obstruction or increased secretions and may reinsert a tube once it is out.
5. forearm-laceration-hemophilia-emicizumab, hf-h3. Deleted "His Tdap at age 14 means no vaccine is needed now."
6. aphasia-after-ed-cardioversion, cv-m3. I could not open the AHA/ASA 2019 guideline (the publisher refuses access), so I used the reword option. The teaching now cites CSBPR section 6: avoid antithrombotics for 24 hours after thrombolysis until the scan excludes hemorrhage, and start the anticoagulant by infarct size, about day 3 after a minor stroke. The c-heparin feedback was reworded the same way. It is still unsafe under C1 because it would rule out thrombolysis and delay thrombectomy.
7. wildfire-evacuees-host-hospital, uniqueness. The dialysis hyperkalemia index patient is replaced by a cord prolapse in a multiparous woman at 37 weeks with an abnormal lie (new stem, card, findings ob-hpi, ob-exam and ob-after, nodes q-first, s-in-order, s-wheelchair, q-cord and s-delivered). q-hyperk became q-cord, so every path still has 6 questions (540 s on the longest). wf-h1, wf-p2, wf-m1 and wf-m2 were rewritten and cite RCOG Green-top Guideline No. 50, which I downloaded and read. Waiting room stream A is now a 2 month old with a cough, because the index patient is pregnant. Triage by acuity over arrival order, the parallel streams, the provincial routing of the second plane's dialysis patients and the unverified man with the elder are kept. ukka-k and warren were removed as sources, and the nephrology finding was removed.
8. wildfire, wf-m2. It is now the caesarean and delay measures item and cites only rcog-cord. No transport sentence remains.
9. wildfire, wf-p1. The CTAS teaching now reads: "CTAS assigns acuity by presenting complaint and modifiers such as vital signs. Ruptured membranes with an abnormal lie and something felt at the vulva need an examination at once, ahead of earlier arrivals."

Advisories applied:
- The q-patch model answer now says "Once the tube is out, the crew can reinsert one themselves under their directive, up to 2 attempts."
- The hemophilia patient is now 15. Weight 58 kg, so emicizumab 1.5 mg/kg weekly is 87 mg. Grade 10. Tdap at 14 is now 1 year ago, and hf-m7 and the choices were updated to match.
- hf-p3 and hf-m6 teaching now cite WFH chapter 10.4: continuous monitoring, pain as an indirect sign, measure the pressure if in doubt, and fasciotomy within 12 hours under factor cover.
- The q-disclose model answer now says "The timing of the rhythm and whether blood thinners were needed first will be part of the review."
- Not changed: fascial closure in q-repair, which is not keyed, and the s21 false passage echo, which the reviewer passed.

Tests after revision 2: `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000` passed 41 of 41, and `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000` passed 39 of 39. tsc printed nothing for cases/batch16.

## Revision 3 (fresh review docs/reviews/q500b-verify-batch16.md, 3 fails in wildfire-evacuees-host-hospital)

1. q-others prompt is now "Your colleague has arrived. How do you manage the other evacuees now?"
2. The q-cord prompt now says "and the fetal heart is slow and does not recover" in place of "80/minute", so it agrees with the 70/minute on the c-in-order path.
3. s-delivered now says "A baby boy was born by caesarean section at 20:32 and is pink and crying." The interval that was wrong on two paths is removed.

Physician notes applied:
- The opening node no longer has the triage nurse mention "something between her legs" or the sideways lie, so it does not give away wf-h1. She now says only that the woman reports her waters broke on the walk over.
- s-delivered now states who held the presenting part up: "You kept a gloved hand in the vagina holding the presenting part up, from the bay to the operating room, until the obstetrician delivered the baby."

Nothing else changed. Tests after revision 3: `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000` passed 41 of 41, and `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000` passed 39 of 39.
