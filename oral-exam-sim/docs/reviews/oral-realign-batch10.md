# Oral realignment. Batch 10

Brief: `docs/ORAL_REALIGN_BRIEF.md`. The seven cases in `src/cases/batch10/` now follow the CFPC structured oral format. Every case is now `reviewed: false`, `version: 2` and `durationMinutes: 12`. Only files in `src/cases/batch10/` were changed. Git was not run.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch10` prints nothing.
- `REALIGN=batch10 CASE_BATCH=batch10 npx vitest run tests/cases.test.ts` gives 59 passed and 7 failed. All 7 failures are the expected "is marked reviewed only if a physician signed it off", one per case.

## Method, all cases

- Stems use the CFPC opener word for word, then one or two sentences. Each keeps the setting the case needs (rural, 380 km to neurosurgery, 110 km to the trauma centre, a full department).
- Card values were copied from the old stem and findings. No value was changed. Where the case gives no value, the card says "Not recorded". Weight is kg with lb in brackets (kg x 2.2046, rounded).
- Every history fact from the old stem is now in a finding. Combined history findings were split into past history, medications and social history where the case had those facts. No fact was dropped. The hospital setting details that no longer fit in the stem went into a setting or resources finding.
- Patient names and family first names were removed everywhere, including nodes, choices, feedback and the end text. Staff names were kept (see decisions below).
- Rows: legacy `approach` went to history, `data` and `diagnosis` to physical, `plan` to management or process. Treatment and the core decision stayed in management. Leadership, communication, professionalism, documentation and most disposition items went to process. New items are linked to an existing question's `rubric` list. Where a model answer had room (fewer than 7 points), one line was added for the new history item. No existing item, points value or `critical` flag was changed or removed.
- Timing: every case was already at or under 720 seconds on its longest path. No `seconds` value changed.
- Branching, choice quality and scripted feedback are unchanged except for name removal and the two `s-open` edits listed below.
- "Before" rows use the legacy mapping in `src/engine/types.ts`.

---

## 1. discrepancy-callback

- Stem words: 127 before, 46 after. Community hospital. A 78 year old woman you discharged two nights ago after a fall is on this morning's radiology discrepancy list for her hip X rays. Nobody has called her yet.
- Card: Temperature Not recorded. Pulse 88/minute, irregular, at the first visit. Resp. Not recorded. BP 146/82 mmHg at the first visit. O2 sat Not recorded. Weight Not recorded. Medications: apixaban 5 mg twice daily, amlodipine 5 mg daily, acetaminophen 1 g four times daily since discharge. Allergies: none known.
- History moved:
  - New `discrepancy`: the 23:40 visit two nights ago, your normal read, the discharge with acetaminophen and a walker, the full final report text signed yesterday at 16:10, and the charge nurse's quote.
  - Old `meds` ("Medications and history") split into `pmh` (AF, hypertension, untreated osteoporosis, no cognitive concerns), `meds` (apixaban, amlodipine, no allergies) and `social` (lives alone in a bungalow, independent).
  - `policy` now also holds the setting: 220 beds, 28 stretchers, radiologist until 17:00, orthopedics on call from home, the morning list handover.
- Names: the patient's name was removed from the stem, `phone-contact`, `s-clerk`, `q-phone`, `s-arrive`, `q-disclose`, `s-minimize`, `s-shutdown` and the end node. The daughter's first name was removed from the `daughter` finding, `phone-contact`, seven say nodes, the `q-anger` and `q-followup` prompts, a model answer and the end node.
- Rows (points): History 1 to 7. Physical 2 to 2. Management 31 to 12. Process 0 to 19. Total 34 to 40.
- Added: `dc-h1` how she has been since discharge (2), `dc-h2` first visit mechanism, syncope and anticoagulant (2), `dc-h3` home situation (1), `dc-h4` baseline function and memory (1). `dc-d1` (last apixaban dose) counts as history. Disclosure (`dc-c3`) and apology (`dc-p1`) count as management.
- Longest path: 720 before and after.
- Citations:
  - `cmpa` had no year. Now "... 2017." Verified at https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2015/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients (page says "Published: March 2017").
  - `cpso-disclosure` had no year. Now "Updated 2019." Verified at https://www.cpso.on.ca/en/Physicians/Policies-Guidance/Policies/Disclosure-of-Harm (approved 2003, updated 2010 and December 2019).
  - `cpso-records` had no year. Now "Updated 2020." Verified at https://www.cpso.on.ca/en/Physicians/Policies-Guidance/Policies/Medical-Records-Documentation (updated March 2020).
  - `hqo-hip` got a URL, https://www.hqontario.ca/Evidence-to-Improve-Care/Quality-Standards/View-All-Quality-Standards/Hip-Fracture. The 2024 update is confirmed by the file qs-hip-fracture-2024-en.pdf and the Ontario Health implementation toolkit, which lists surgery within 48 hours as quality statement 2 and early regional nerve blocks.
  - Verified with no change: `cpsi-disclosure` (2011, https://psnet.ahrq.gov/issue/canadian-disclosure-guidelines-being-open-and-honest-patients-and-families), `apology-act` (S.O. 2009, c. 3, https://www.canlii.org/en/on/laws/stat/so-2009-c-3/latest/so-2009-c-3.html).

## 2. interpreter-consent-reduction

- Stem words: 133 before, 46 after. Community hospital. A 63 year old woman who speaks only Tamil fell at home and has a deformed right ankle with a dusky foot. Her 15 year old grandson has been translating.
- Card: 36.7°C, 98/minute, 18/minute, 150/88 mmHg, 97% on room air, 72 kg (159 lb). Medications: metformin 1000 mg twice daily, ramipril 10 mg daily, no blood thinners. Allergies: no known drug allergies.
- History moved:
  - New `triage`: CTAS 2, capillary glucose 7.9 mmol/L and the nurse's quote (deformed ankle, dusky foot, Tamil only, grandson translating, "sugar and pressure pills").
  - Old `history` split into `history` (missed a step, foot twisted under her, last meal 2 hours ago), `pmh` (diabetes, hypertension, gallbladder surgery with 2 days of confusion afterwards, snoring) and `meds` (metformin, ramipril, no blood thinners, no known drug allergies).
  - New `setting`: evening shift in the GTA, 24 hour phone interpreters, video tablet until 23:00, orthopedics on call from home, sedation with a respiratory therapist.
- Names: the patient's name was removed from the stem and 7 nodes. The grandson's and daughter's first names were removed from the findings, `s-open`, `s-arun`, `s-emergency`, `s-daughter`, `q-daughter`, `q-consent`, 6 choice labels, 3 feedback texts, 4 model answers and the end node. The interpreter keeps her name (staff).
- Rows: History 2 to 6. Physical 3 to 5. Management 24 to 8. Process 0 to 16. Total 29 to 35.
- Added: `ic-h1` mechanism and last meal (2), `ic-h2` comorbidity, medications, blood thinners and allergies (2), `ic-h3` past anesthetic problems and snoring (2). `ic-a2` (capacity assessment) moved from history to physical. Consent elements (`ic-p2`) count as management.
- Longest path: 615 before and after.
- Citations:
  - `cpso-consent` had no year. Now "Updated 2025." Verified at https://www.cpso.on.ca/en/Physicians/Policies-Guidance/Policies/Consent-to-Treatment (updated March 2025).
  - URLs added after checking in PubMed: `flores` https://pubmed.ncbi.nlm.nih.gov/12509547/, `karliner` https://pubmed.ncbi.nlm.nih.gov/17362215/, `green-sedation` https://pubmed.ncbi.nlm.nih.gov/31029297/.
  - Verified with no change: `hcca` (https://www.ontario.ca/laws/statute/96h02).

## 3. highway-bus-collision

- Stem words: 130 before, 54 after. Community hospital. Paramedics call to say a school ski club bus has hit a transport truck 25 minutes away, with 30 or more patients, about half of them children. The nearest lead trauma hospital is 110 km away.
- Card: every vital sign, medications and allergies say Not recorded. The case has no single patient at the start.
- History moved:
  - New `call`: 300 bed regional hospital in central Ontario, 15:20 on a Friday in February, the supervisor's full quote, the charge nurse waiting.
  - `peds` now also says there is no pediatric intensive care and the pediatric trauma centre is 110 km away.
  - In house services, the two elective ORs and the single CT were already in `staffing` and `or-ct`.
- Names: none in the case.
- Rows: History 0 to 6. Physical 7 to 7. Management 23 to 8. Process 0 to 15. Total 30 to 36.
- Added: `mc-h1` numbers, ages, injuries and arrival times from the supervisor (2), `mc-h2` seat position, seat belt and pain in self presenters (2), `mc-h3` AMPLE history for red patients (1), `mc-h4` current department capacity (1). `mc-d2` (the aircraft goes to the child who needs neurosurgery) counts as management.
- Longest path: 705 before and after.
- Citations:
  - `oha-codes` replaced. Before: "Ontario Hospital Association. Standardized hospital emergency colour codes. Code Orange for external disasters." It had no year and was not a named work. After: "Ontario Hospital Association. Emergency management toolkit. Developing a sustainable emergency management program for hospitals. 2008." Verified through the ASPR TRACIE listing (https://asprtracie.hhs.gov/technical-resources/84/emncy-operations-plans-emncy-management-program/1) and secondary sources that credit the 2008 toolkit with the Ontario colour codes. The host PDF (http://www.mtpinnacle.com/pdfs/Emergency%20Management%20Toolkit.pdf) returned 503, so no URL was added.
  - `ems-ims` had no year. Now "Version 2.0. 2022." Verified at https://www.ontario.ca/document/incident-management-system-ims-guidance-version-2 (published March 24, 2022, updated April 1, 2025).
  - `start` got a URL, https://pubmed.ncbi.nlm.nih.gov/10159733/.
  - Verified with no change: `jumpstart` (Romig LE, JEMS 2002, 27(7), https://www.semanticscholar.org/paper/Pediatric-triage.-A-system-to-JumpSTART-your-triage-Romig/dcfec3ac539728acebc4f90638856f3972caef29), `caep-disaster` (https://pubmed.ncbi.nlm.nih.gov/32425150/), `atls` (11th edition launched July 2025, https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/).

## 4. saturday-night-no-beds

- Stem words: 136 before, 52 after. Community hospital. An 83 year old man from a long term care home with fever and confusion has waited 95 minutes on a paramedic stretcher in your full department. A STEMI and a code stroke are minutes away.
- Card (the hallway bay 4 patient): 38.9°C, 118/minute, 26/minute, 84/48 mmHg, 91% on 2 L/minute oxygen. Weight, medications and allergies: Not recorded.
- History moved:
  - New `patches`: 21:00 on a Saturday and the charge nurse's full quote (STEMI 12 minutes out, the failed field line, the stroke patient last seen well at 20:25, the hallway patient 95 minutes on the stretcher).
  - `hospital` now also holds 450 beds, the 24 hour cath lab with the team on call from home, the stroke centre with CT angiography, the ICU and 36 stretchers.
  - `s-open` now reads "The charge nurse, Dana, has just told you about three EMS patches in five minutes and is waiting." The old text ("Dana is waiting") assumed the candidate had read her quote in the stem.
- Names: no patient names. The charge nurse keeps her name (staff).
- Rows: History 1 to 6. Physical 2 to 4. Management 24 to 9. Process 0 to 15. Total 27 to 34.
- Added: `sn-h1` stroke eligibility history (2), `sn-h2` STEMI onset, first contact and drugs given (1), `sn-h3` focused history of the hallway patient (2), `sn-x1` recognizes septic shock with a urinary source (2, physical, taken from the existing model answer). `sn-l1` (board overview with the charge nurse) stays in history under the legacy mapping.
- Longest path: 600 before and after.
- Citations:
  - URLs added after checking in PubMed: `caep-crowding` https://pubmed.ncbi.nlm.nih.gov/24176460/, `viccellio` https://pubmed.ncbi.nlm.nih.gov/19345442/, `ctas` https://pubmed.ncbi.nlm.nih.gov/28756800/, `ccs-stemi` https://pubmed.ncbi.nlm.nih.gov/30760415/, `ssc` https://pubmed.ncbi.nlm.nih.gov/34605781/.
  - Verified with no change: `csbpr` (7th edition acute stroke management, published as Heran M et al, Can J Neurol Sci 2024, https://pubmed.ncbi.nlm.nih.gov/36529857/).

## 5. crowded-resus-room

- Stem words: 98 before, 57 after. Community hospital. Paramedics are four minutes out with a 52 year old man who collapsed at the gym and is still in VF after three shocks. The team is two nurses, a respiratory therapist, a first year resident and a medical student.
- Card: Temperature Not recorded. Pulse: no pulse, ventricular fibrillation on the paramedic monitor. Resp.: ventilated through a supraglottic airway. BP: not obtainable, CPR in progress. O2 sat Not recorded. Weight Not recorded. Medications: ramipril, dose not recorded. Allergies: none known.
- History moved:
  - `handover` now also says he collapsed at the gym, it was witnessed, and he is still in VF four minutes out. The times, shocks, drugs and airway were already there.
  - Old `history` (wife by phone) split into `history` (two days of chest pressure), `pmh` (hypertension, no known heart disease, no allergies), `meds` (ramipril, dose unknown) and `social` (smoker).
  - New `resources`: community teaching hospital, 10:26 on a weekday, 24 hour cath lab, ICU, cardiology in house, mechanical CPR device.
- Names: no patient names. Staff names kept.
- Rows: History 1 to 6. Physical 2 to 3. Management 26 to 11. Process 0 to 18. Total 29 to 38.
- Added: `cr-h1` prehospital timeline (2), `cr-h2` symptoms before the collapse from his wife (2), `cr-h3` past history, medications, allergies and smoking (2), `cr-x1` reads the post arrest ECG as an anterior STEMI (2, physical), `cr-x2` looks for reversible causes with end tidal CO2, echo and gas (1, physical). The physical items were added because the old case had only one physical item (`cr-d1`, emergent angiography), which now counts as management.
- Longest path: 495 before and after.
- Citations:
  - `cpso-behaviour` had no year. Now "Updated 2024." Verified at the existing URL, https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Physician-Behaviour-in-the-Professional-Environmen (approved November 2007, updated 2016, 2019 and September 2024). The truncated slug is CPSO's own.
  - URLs added after checking in PubMed: `carne` https://pubmed.ncbi.nlm.nih.gov/22313554/, `hicks` https://pubmed.ncbi.nlm.nih.gov/29132571/, `dose-vf` https://pubmed.ncbi.nlm.nih.gov/36342151/, `aha-als` https://pubmed.ncbi.nlm.nih.gov/41122884/, `aha-pca` https://pubmed.ncbi.nlm.nih.gov/41122894/.

## 6. northern-snowmobile-transfer

- Stem words: 152 before, 51 after. Rural hospital. A 24 year old man was knocked out briefly when his snowmobile hit a tree, and friends drove him in. You are the only physician on shift, and the nearest neurosurgery is 380 km away.
- Card: 36.1°C, 70/minute, 16/minute, 150/86 mmHg, 97% on room air, about 85 kg (187 lb). Medications and allergies: Not recorded.
- History moved:
  - New `crash`: crash at about 18:00, brief loss of consciousness, walked and talked, friends drove him in at 19:05.
  - New `triage`: capillary glucose 6.3 mmol/L, GCS 14.
  - New `setting`: 25 bed hospital in northwestern Ontario, 19:40 on a Saturday in January, CT with remote reading, three nurses, respiratory therapist on call, two primary care paramedic crews, trauma centre 380 km away, airport 15 minutes away.
  - `ct` now opens with the radiologist's phoned report, including "C spine CT is normal."
  - `s-open` now adds "The radiologist has just phoned with his CT results." The first question ("The CT result. What do you do now?") relied on the CT report that was in the old stem.
- Names: the patient's name was removed from the stem, `s-open`, `s-deteriorate` and the end node.
- Rows: History 0 to 6. Physical 4 to 4. Management 24 to 12. Process 0 to 12. Total 28 to 34.
- Added: `nt-h1` mechanism, loss of consciousness and lucid interval (2), `nt-h2` headache, vomiting and drowsiness (2), `nt-h3` alcohol, anticoagulants, medications and allergies (1), `nt-h4` collateral and next of kin (1). `nt-d2` (road rendezvous instead of waiting for weather) counts as management.
- Longest path: 585 before and after.
- Citations:
  - `criticall` replaced. Before: "CritiCall Ontario. Emergency consultation and referral service for Ontario hospitals." It had no work and no year. After: "Ontario Ministry of Health. Ontario Life or Limb Policy. 2024. Updated 2025." Verified at https://www.ontario.ca/page/ontario-life-or-limb-policy (published May 6, 2024, updated October 30, 2025). It says CritiCall sets up the conference call between referring and consulting physicians and coordinates transport.
  - `ornge` replaced. Before: "Ornge. Air ambulance and critical care land transport services in Ontario." It had no work and no year. After: "Ornge. 2024/2025 Annual Report. 2025." Verified at https://www.ornge.ca/Media/Ornge/Documents/Publications/Annual%20Report/Annual-Report-2024-2025.pdf. It describes multi leg northern transfers (helicopter, fixed wing, land ambulance) and weather limits.
  - URLs added after checking in PubMed: `btf` https://pubmed.ncbi.nlm.nih.gov/27654000/, `crash3` https://pubmed.ncbi.nlm.nih.gov/31623894/, `warren` https://pubmed.ncbi.nlm.nih.gov/14707589/.
  - Verified with no change: `atls`.

## 7. waiting-room-slump

- Stem words: 135 before, 45 after. Community hospital. A 71 year old woman triaged 3.5 hours ago with urinary symptoms and weakness is found slumped in a waiting room chair and will not answer the security guard.
- Card: 39.4°C, 128/minute, 30/minute, 76/42 mmHg, 90% on room air. Weight Not recorded. Medications: ramipril 10 mg daily, metformin 500 mg twice daily. Allergies: none known.
- History moved:
  - New `found`: 14:10 on a Tuesday, the guard at the charge desk, triaged at 10:40 as CTAS 3 with "urinary symptoms and weakness", opens eyes to voice but confused.
  - Old `history` split into `history` (hypertension, diabetes, kidney stone 6 years ago), `meds` (ramipril, metformin, no allergies) and `social` (lives with her son and daughter in law, independent, wants full treatment).
  - `waiting-log` now also holds the department status from the old stem: 250 beds, ICU, urology and interventional radiology on call, 30 full stretchers, 11 boarders, 38 waiting, one triage nurse.
- Names: the patient's name was removed from the stem, `s-open` and the end node. The son's name was removed from the `son` finding, `s-son`, `q-son`, `s-defend`, `s-blame` and the end node. The triage nurse keeps her name (staff).
- Rows: History 0 to 6. Physical 5 to 5. Management 22 to 7. Process 0 to 15. Total 27 to 33.
- Added: `wr-h1` history of the illness (2), `wr-h2` kidney stones, diabetes, medications and allergies (2), `wr-h3` collateral and goals of care (1), `wr-h4` review of the triage record (1). The `q-source` model answer line on drainage now ends "Her past kidney stone fits."
- Longest path: 585 before and after.
- Citations:
  - `cpso-disclosure` had no year. Now "Updated 2019." Same check as case 1.
  - URLs added: `ctas`, `ssc` and `caep-crowding` (PubMed, as in case 4), and `ciaf` https://psnet.ahrq.gov/issue/canadian-incident-analysis-framework (Incident Analysis Collaborating Parties, CPSI, 2012).
  - Verified with no change: `cpsi-disclosure`.

---

## Needs physician decision

1. **The CFPC opener in cases without an arriving patient.** The brief's opener "when the following patient arrives" is used word for word. In five cases no single patient walks in at the start: a callback from a discrepancy list, a mass casualty warning call, three patients at once, an arrest four minutes out, and a patient found in the waiting room. The sentences after the opener make each situation clear, but the opener reads oddly for the discrepancy and bus cases.
2. **Which patient the card describes.** Bus case: the card is all Not recorded. Saturday night: the card shows the hallway bay 4 patient because he is already in the department. Discrepancy: the card uses the first visit vitals from two nights ago, so temperature, respiration and O2 sat are Not recorded, even though `return-status` has values from her return. Arrest: the card gives the arrest state in words.
3. **Missing values that new history items ask for.** Some new items ask questions the case cannot answer: the hallway patient's medications, allergies and goals of care (`sn-h3`), anticoagulants and allergies in the snowmobile case (`nt-h3`), and AMPLE histories in the bus case (`mc-h3`). I did not invent answers. You may want to add them to the findings.
4. **Staff names.** Staff names were kept because the brief covers patient names only: Dr. Grant, Dr. Lee, nurses Karen and Jas, Omar (respiratory therapist), Dana (charge nurse), Meena (interpreter), Mei (triage nurse) and Dr. Okafor. The crowded resus case depends on them.
5. **Choice ids with family names.** The ids `c-arun`, `c-priya-signs` and `c-priya-interprets` in the interpreter case were kept so saved attempts still resolve. Candidates never see them.
6. **Row placement in the communication and systems cases.** I counted disclosure (`dc-c3`), apology (`dc-p1`), consent elements (`ic-p2`), transport choices (`nt-d2`, `mc-d2`) and emergent angiography (`cr-d1`) as management, and most communication and leadership items as process. Management now holds 21 to 35 percent of points. Please confirm this split. In the bus and Saturday cases, history means gathering facts about the incident and the department, not only one patient's story.
7. **New physical items.** `sn-x1`, `cr-x1` and `cr-x2` were added because each row needs at least 2 items. They come from existing model answers.
8. **Newer guidance you may prefer.** Both older citations are still accurate, so I kept them:
   - A 2026 CAEP overcrowding position statement exists: Li MK, McLeod SL, Affleck A, et al. CJEM 2026 (https://pubmed.ncbi.nlm.nih.gov/42437839/). The cases cite Affleck 2013.
   - A September 2026 update of the unscheduled procedural sedation guideline exists: Green SM, Roback MG, Bhatt M, et al. Ann Emerg Med 2026, parts 1 and 2 (https://pubmed.ncbi.nlm.nih.gov/42618173/, https://pubmed.ncbi.nlm.nih.gov/42618174/). The interpreter case cites Green 2019.
9. **OHA toolkit source.** I could not open the 2008 toolkit itself because the host returned 503. The citation rests on a listing and secondary sources. You may prefer a hospital's own Code Orange policy or another source.
10. **Findings at the test cap.** The test allows at most 14 findings (CASE_SPEC says 10 to 18). The discrepancy, interpreter and waiting room cases are at 14. The hospital setting was folded into existing findings to stay under the cap.
