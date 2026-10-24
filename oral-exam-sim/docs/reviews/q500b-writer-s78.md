# Q500B writer report: s78, Multiple patients

File: `src/samps/s78/multiple-patients.ts` (`MULTIPLE_PATIENTS_S78`). All items `reviewed: false`, `author: "Preceptor"`, `version: 1`.

## Ids written

| Id | Title | Setting | Angle |
|---|---|---|---|
| multiple-patients-36 | Screens go dark at shift change | Tertiary | Ransomware downtime of the electronic record with a full department and a septic patient |
| multiple-patients-37 | Cars arriving from the aquatic centre | Community | Chlorine gas release at a swim meet with families arriving by car before EMS |
| multiple-patients-38 | Propofol drawn up in bay two | Rural | Planned hip reduction sedation interrupted by a chest stab wound with massive hemothorax |
| multiple-patients-39 | A faint at home after midnight | Community, night | Ruptured ectopic pregnancy with the gynecologist and OR team at home, and consultant pushback |
| multiple-patients-40 | Saturday at the arena | Community | Carbon monoxide from an ice resurfacer at a youth hockey tournament |

## Counts

- 5 SAMPs, 21 questions: 16 `single`, 5 `menu` (one per SAMP).
- Single key positions (first to fifth): 4, 3, 3, 3, 3.
- Key feature coverage in this batch: KF1 3, KF2 5, KF3 7, KF4 6.
- Bank before this batch: KF1 38, KF2 28, KF3 25, KF4 21. The extra questions went to KF4 and KF3, the thinnest.

## Uniqueness

All 35 existing multiple-patients SAMPs (s13, s44), the EMS SAMPs that touch mass casualty work (s09, s35) and the multiple-patients oral cases were read first. None of the bank items covers an IT or ransomware downtime, a chlorine release, an interrupted procedural sedation, consultant pushback on an unstable ectopic pregnancy, or a CO cluster at an arena. Chlorine and CO appear elsewhere in the bank as single patient toxicology. These items test the multi-patient decisions instead (self-presenters, decontamination triage, ending the exposure, early hyperbaric referral, discharge to free beds). The bank-wide near duplicate stem test passes.

## Sources and verification

| Source | Verified with |
|---|---|
| The Joint Commission. Sentinel Event Alert 67. 2023 | Full PDF read: https://digitalassets.jointcommission.org/api/public/content/8bd6addf4df943f383a074f2d9d4af64 |
| Prescott HC et al. Surviving Sepsis Campaign 2026 | SCCM guideline page and summaries confirm "immediate antimicrobial therapy" for possible septic shock. DOI https://doi.org/10.1097/CCM.0000000000007075 (already used in the bank) |
| Auf der Heide E. Ann Emerg Med. 2006 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/16387217/ |
| ATSDR. Medical management guidelines for chlorine. 2014 | Page read: https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=198&toxid=36 |
| Godwin SA et al. ACEP clinical policy, procedural sedation. 2014 | PubMed record (PMID 28395927, correction listing authors) and the ACEP Now summary of the recommendations. No URL given |
| Dawson-Amoah K et al. Ochsner J. 2018 | Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/ |
| ATLS 11th edition. 2025 | Bank source, unchanged |
| Moore C et al. Acad Emerg Med. 2007 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/17554008/ |
| ACOG Practice Bulletin No. 193. 2018 | PubMed abstract, https://pubmed.ncbi.nlm.nih.gov/29470343/ |
| Bullard MJ et al. CTAS 2016. CJEM 2017 | Bank source, unchanged |
| Rose JJ et al. Am J Respir Crit Care Med. 2017 | Full text read: https://pmc.ncbi.nlm.nih.gov/articles/PMC5363978/ |
| Creswell PD et al. MMWR. 2015 | Page read: https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6445a3.htm |

## Uncertain points for the reviewers

1. multiple-patients-38 q2 keys a massive hemothorax at 1 600 mL immediate drainage, using the ATLS 1 500 mL threshold as the bank already does. My web search budget ran out before I could recheck the 11th edition wording. It matches the signed bank item that uses ATLS.
2. multiple-patients-38 q1 and q4 rest on the ACEP 2014 two-person recommendation (a nurse or other qualified individual monitors continuously). The reasons for rejecting "the respiratory therapist sedates" and "nurse-administered propofol" are practice based, not quoted from the policy. Provincial scope of practice may differ.
3. multiple-patients-39 q2: the reasons for uncrossmatched red cells and two large-bore lines are standard hemorrhage care and are not in the ACOG abstract. The methotrexate contraindication with instability or rupture is in the full bulletin, which I could not open.
4. multiple-patients-36 q1: diversion is a reasonable hospital level choice after a risk review (the Joint Commission case diverted emergency cases). The item keys declaring downtime as the first step, not diversion as wrong in all cases.
5. multiple-patients-40 q3 keys the fire service call. The hyperbaric and poison centre reasons come from Rose 2017, not the MMWR source cited for that question.
6. Test timing: the bank wide near duplicate stem test needs about 20 seconds and timed out at the 5 second default while the machine was under heavy load (load average above 20). With `--testTimeout=300000` all 132 tests pass, and the test passes on its own.

## Revision 1

This revision responds to `docs/reviews/q500b-qa-s78.md` and the coordinator's decisions.

### What changed

| Id | Change |
|---|---|
| multiple-patients-36 | Kept as written. The coordinator's decision: the overlapping batch16 cyberattack case is removed, not this SAMP. |
| multiple-patients-37 | Whole SAMP replaced. New scenario: "Two activations eight minutes apart". Two STEMI patients at a PCI centre with one catheterization team in house. q1 KF1: the man in cardiogenic shock goes to the laboratory first. q2 KF3: call in the second team now (first medical contact 22:45, team ready about 23:45, inside 120 minutes). q3 KF2: the woman waits in a monitored bay with pads on and a nurse present. q4 KF4: EMS redirects a third STEMI patient to the city's other PCI centre, which has a free team. |
| multiple-patients-38 | q3 deleted (the 6 hour reduction point was in the batch12 hip case, and its update revealed the q1 key). New q3 is KF3: timed nurse neurovascular checks with triggers to call you until the hip is reduced. It has no update, and the prompt does not depend on the q1 key. q4 explanation: replaced the "separates the drug" sentence with the reviewer's wording on one person both giving the drug and watching the airway, and on provincial scope. |
| multiple-patients-39 | Whole SAMP replaced. New scenario: "Alarms on every wall outlet". The main oxygen line is broken outside a community hospital, so piped oxygen is lost. q1 KF1 menu: the ventilated man and the hypoxemic pneumonia patient get cylinders first. q2 KF4: titrate every patient to a target saturation to make the oxygen last. q3 KF2: the target for the woman with COPD is 88% to 92%. q4 KF4: the reserve tank shares the broken pipe, so hospital command arranges bulk cylinder resupply. |
| multiple-patients-40 | Whole SAMP replaced. New scenario: "Two arrivals at 02:00 in the north". A rural BC hospital overnight with no second physician, an infant in hypovolemic shock and a man whose chainsaw wound is controlled by a tourniquet. q1 KF1: resuscitate the infant first. q2 KF3: pediatric Real-Time Virtual Support by video. q3 KF2 menu: a repeat 20 mL/kg bolus (160 mL) and D10W 5 mL/kg (40 mL) for glucose 2.3 mmol/L. q4 KF1: a walk-in with asthma at O2 sat 91% is CTAS level 2. |

The old stems with a BP in the text were changed so the BP sits in the vitals field or is described in words.

### Uniqueness checks (whole bank, src/samps and src/cases)

- "two STEMI", "second team", "other PCI centre": no SAMP or case has two STEMI patients competing for one catheterization team or EMS redirection for a third. "second team" appears only in an s09 EMS key about two resuscitation teams.
- "piped oxygen", "oxygen line", "cylinders", "medical gas": none. "oxygen supply" appears only as a ventilator troubleshooting item.
- "RTVS", "virtual support": none.
- A first draft of 38 q3 (a new foot drop) repeated the batch12 hip case's sciatic examination point. A first draft of 40 q3 (tourniquet nurse tasks) repeated s45 multiple-trauma (time of application, no loosening). Both drafts were dropped before testing.
- Wildfire evacuation (now in batch16) was avoided.

### Counts after revision

- 21 questions: 17 single, 4 menu.
- Single key positions, first to fifth: 3, 4, 3, 4, 3.
- Key features: KF1 4, KF2 5, KF3 6, KF4 6.

### New sources and verification

| Source | Verified with |
|---|---|
| Wong GC et al. CCS/CAIC STEMI focused update. Can J Cardiol. 2019 | PubMed record, https://pubmed.ncbi.nlm.nih.gov/30760415/ (bank source) |
| O'Driscoll BR et al. BTS guideline for oxygen use in adults. Thorax. 2017 | PubMed record, https://pubmed.ncbi.nlm.nih.gov/28507176/ (bank source). The 94% to 98% and 88% to 92% targets are as the bank uses them |
| Stoller JK et al. The hospital oxygen supply. Respir Care. 2000 | PubMed abstract read, https://pubmed.ncbi.nlm.nih.gov/10771798/ (primary and reserve supplies often share one pipe, backups should have separate feeds and manifolded cylinders) |
| Rural Coordination Centre of BC. Real-Time Virtual Support | Page read, https://rccbc.ca/initiatives/rtvs/ (pediatric pathway CHARLiE 24/7 by Zoom or phone for rural providers) |
| TREKK. Bottom line recommendations: gastroenteritis. Version 5.0. 2025 | PDF text extracted from the resource page link: 20 mL/kg boluses over 10 to 20 minutes, often 60 mL/kg or more in the first hour, reassess before and after each one, D10W 5 mL/kg for glucose 2.6 mmol/L or less, recheck in 5 to 10 minutes |
| Warren DW et al. PaedCTAS. CJEM. 2008. CTAS 2016 | Bank sources, unchanged |

Sources no longer used were removed: Auf der Heide, ATSDR chlorine, Moore 2007, ACOG 193, Rose 2017, MMWR 2015.

### Uncertain points for the reviewers

1. 37 q3: the reasons for a monitored bay (early ventricular fibrillation and block) are standard teaching and are not quoted from the CCS regionalization update.
2. 39 q4: the bulk cylinder resupply key rests on the Stoller survey and general continuity planning, not a Canadian standard. CSA Z7396.1 could not be opened.
3. 40 q3: D10W 5 mL/kg dosing appears elsewhere in the bank as single patient care (seizures, shock, tox). Here it sits inside the parallel care of two patients. The batch06 pediatric septic shock case also uses dextrose for hypoglycemia, though on a different scenario.
4. 40 q2 names a British Columbia service. The stem sets the province.

## Revision 2

This revision responds to `docs/reviews/q500b-verify-s78.md`. multiple-patients-36 passed and was not touched.

### What changed

| Item | Change |
|---|---|
| 37 q3 | Prompt now reads "Which of the following is the most appropriate place for the woman before her angiography?", so it no longer reveals the q1 or q2 key. The explanation now says "Early STEMI carries a risk of ventricular fibrillation and high grade block" and keeps the CCS point on short delay to PCI. It no longer credits CCS with an arrhythmia timing claim. |
| 37 q4 | Update now reads "Your catheterization laboratory will be busy for at least 90 minutes." |
| 38 q3 | Key shortened to "Timed nurse checks with call triggers" (37 characters). Distractors now carry wrong detail of the same kind: "Checks by you only after the reduction", "Hourly checks by you between patients", "Nurse checks only when she reports pain", "One check by you before CT of the pelvis". The key stays in position 5, and the explanation was matched to the new distractors. |
| 39 q3 | Replaced. The COPD target question is gone. New KF2 question: an arriving 77-year-old man with heart failure on a non-rebreather at 15 L/minute from a full 680 L cylinder. How long will it last? 680 / 15 = about 45 minutes, so a named nurse watches the gauge and has the next cylinder ready. Distractors are 30, 60, 75 and 90 minutes (90 fits 7.5 L/minute, 75 fits about 9, 60 fits about 11, and 30 wastes a third-full cylinder). The update names a new patient, not a q1 key patient, and does not show titration (the q2 key). |
| 40 q2 | Changed to a menu question (select 3): what BC Real-Time Virtual Support can provide at 02:00. Keys: guidance on the infant's resuscitation (pediatric pathway, 24/7), help coordinating patient transport, and point-of-care ultrasound support. Distractors: a physician sent on site (the service is virtual), critical care pathway advice at 02:00 (ROCCi runs 08:00 to 21:00), and weekday quick reply advice (business hours only). The explanation no longer says the pathway is staffed by pediatric emergency physicians. It says "a physician on that pathway". |
| 40 q3 | Replaced. No infant fluid or dextrose dosing and no tourniquet tasks. New KF2 question: after resuscitation, disposition is admission for ongoing fluids and monitoring. TREKK lists severe dehydration and young infant among its admission criteria. |
| 40 q4 | Replaced. No CTAS modifier. New KF2 question: the infant's 3-year-old brother with mild to moderate dehydration gets nurse-run oral rehydration at the TREKK rate of 30 mL every 10 minutes for 6 months to under 5 years. 60 and 90 mL are the rates for older children. |
| 40 spelling | "pediatric" is used throughout. The PaedCTAS citation keeps its published title. CTAS 2016 was dropped from 40's sources because q4 no longer cites it. |

### Uniqueness checks (whole bank)

- "680 L", "cylinder will last", "cylinder duration", "L of oxygen": no hits outside s78.
- "Real-Time Virtual", "RTVS": none outside s78.
- "30 mL every 10" and "per 10 minutes" oral rehydration rates: none. s16 shock-02 uses the 50 to 100 mL/kg deficit for an infant, not the per 10 minute rate for a toddler.
- Gastroenteritis disposition or admission: no SAMP keys admission after severe dehydration (grep of gastroenteritis with admit, discharge or transfer finds only a pre-eclampsia stem and a CQI return visit).
- "Before her angiography" and the new 37 wording add no new decision.

### Counts after Revision 2

- 21 questions: 17 single, 4 menu (36 q2, 38 q2, 39 q1, 40 q2).
- Single key positions, first to fifth: 4, 3, 4, 3, 3.
- Key features: KF1 3, KF2 6, KF3 6, KF4 6.

### Sources for the new items, all opened in this session

- Stoller 2000 (PubMed record and abstract) for 39 q3: cylinders become the only supply when the pipe fails. The arithmetic uses the volume and flow stated in the update.
- RCCbc RTVS page (opened): pathway names and hours (RUDi, MaBAL and CHARLiE 24/7, ROCCi 08:00 to 21:00, Quick Reply weekdays), Zoom or phone access, help coordinating patient transport, point-of-care ultrasound support.
- TREKK gastroenteritis bottom line recommendations, version 5.0, October 2025. The PDF was downloaded through the resource page and its text extracted. It gives the admission criteria (severe dehydration, young infant) and the oral rates of 30, 60 and 90 mL every 10 minutes by age band.

### Uncertain points

1. 40 q2 tests features of one provincial service. The stem sets British Columbia, as ruling A17 asks.
2. 40 q3: admission "here or at the referral centre" is keyed together. The distractors are all discharge options.
3. 39 q3: the cylinder volume is given in the update rather than taken from a manufacturer's sheet, which I could not open.

## Revision 3

This revision responds to `docs/reviews/q500b-verify2-s78.md`. Only multiple-patients-38 q3 changed.

### What changed

- 38 q3 was replaced. It repeated the delegated monitoring with call triggers decision in signed multiple-patients-30 q3 and two s13 items.
- New q3 (KF3, lead clearly): while you lead the man's resuscitation, staff keep interrupting you with phone calls and questions about other patients. The key is to have one nurse screen calls and questions, so only urgent matters reach you, and keep a written task list. Distractors: answer each call yourself, ask every caller to phone back in an hour, leave calls unanswered, pause his care for each question.
- The update and prompt do not mention the woman, so they do not reveal the q1 key.
- The key stays in position 5 and is not the longest option (39 characters against 37 to 41).
- Source: Westbrook JI et al. The impact of interruptions on clinical task completion. Qual Saf Health Care. 2010. The abstract was read through PubMed E-utilities (https://pubmed.ncbi.nlm.nih.gov/20463369/): emergency doctors were interrupted 6.6 times an hour and failed to return to 18.5% of interrupted tasks.
- Dawson-Amoah 2018 is no longer cited in 38 and was removed from the source object. 38's sources are now ACEP 2014, ATLS and Westbrook 2010.

### Uniqueness check (whole bank)

- "interrupt" outside suture and drug-interruption wording: only s13 handover items ("protected time with few interruptions", and workload or interruptions as an incident factor). Neither keys how to handle interruptions during a resuscitation.
- "task list", "screen calls", "phone calls": only s06 cqi (an action list at handover), s52 suicide-risk follow-up calls and a batch10 privacy point. None matches the new decision.
- The new decision is not delegated monitoring, not the 6 hour reduction or sciatic examination, not tourniquet tasks and not role assignment before arrival.

### Counts after Revision 3

- 21 questions: 17 single, 4 menu. Single key positions, first to fifth: 4, 3, 4, 3, 3.
- Key features: KF1 3, KF2 6, KF3 6, KF4 6. 38 still has 4 questions.
- `SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 132 of 132 pass.

### Uncertain point

Westbrook 2010 is an observational study from one Australian teaching hospital. It supports the risk that interrupted tasks are dropped. The screening nurse and task list are the practical response, not a tested intervention.

## Revision 4

This revision responds to `docs/reviews/q500b-verify3-s78.md`. It fixes the two grammar cues and nothing else.

- 37 q2: the key now reads "Call the second team in from home now", a verb phrase like the other options. After alphabetical sorting it sits in position 2 (`correct: 1`).
- 38 q3: the key now reads "Have a nurse screen calls and list tasks", a verb phrase like the other options. After alphabetical sorting it sits in position 3 (`correct: 2`). The optional "or the unit clerk" wording was not used.
- The unused `S.ctas2016` entry was removed from the source object, because no question cites it any longer.
- Single key positions, first to fifth: 4, 4, 4, 3, 2 (no position above 25%).
- `SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 132 of 132 pass.
