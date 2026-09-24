# Oral realignment. Batch 08

This batch now follows the CFPC structured oral format set out in `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch08/` were changed. Every case is now `reviewed: false`, `version: 2` and `durationMinutes: 12`. Case ids, node ids, the branching, choice quality and scripted feedback are unchanged. No existing rubric item was removed. Every `critical` flag was kept (3 per case). Patient names appeared only in the old stems and have all been removed.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch08` prints nothing.
- `REALIGN=batch08 CASE_BATCH=batch08 npx vitest run tests/cases.test.ts` gives 83 passed and 10 failed. All 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.
- In the full suite, every one of the 30 failures is that same sign-off check (batch 01, 02 and 08).

## Method notes

- Stems now open "You are working in the emergency department of a ... when the following patient arrives." Each keeps the setting the case depends on, such as no transvenous pacing, the distance to a Schedule 1 facility, or the ERCP gastroenterologist at home. The full list of hospital resources from each old stem went into a new "Hospital resources" finding where it did not fit in 60 words.
- Where a question prompt depends on the complaint (for example "Is this failed cellulitis?" or "Can she wait for her blood count?"), the stem keeps that complaint in one short clause. The details moved to findings.
- Card values were copied from the old stem and findings without change. Weight in pounds is the kilogram value times 2.2046, rounded. Where the case gave no value, the card says "Not recorded".
- Triage glucose, CTAS, GCS and the nurse's quote moved from each stem into a history or triage finding.
- Longest path seconds did not need scaling. Every case was already at or under 720.
- New rubric items are tied to existing questions through the question `rubric` lists. Where a model answer had room (fewer than 7 points), one line was added. No choice, feedback or `next` was changed.
- Row reassignment: legacy `approach` items went to history or physical, `data` and `diagnosis` to physical, and `plan` to management or process. Communication, leadership, professionalism and most disposition items went to process.
- "Before" rubric rows below use the legacy mapping in `src/engine/types.ts` (approach to history, data and diagnosis to physical, plan to management).
- Sources were verified through PubMed E-utilities, Crossref, WebSearch, the issuing bodies' own pages and ontario.ca/laws.

---

## chronic-lithium-toxicity. Confused and shaky after a stomach bug

**Stem.** 121 words before, 56 after. A 280 bed community hospital in southern Ontario with an ICU, CT, nephrology on call and intermittent hemodialysis on site. A 71 year old woman brought in by her daughter, confused and unsteady for two days.

**Card.** Temperature 36.9°C. Pulse 54/minute. Resp. 18/minute. BP 104/62 mmHg. O2 sat 96% on room air. Weight 64 kg (141 lb). Medications: lithium carbonate, lisinopril, levothyroxine. Ibuprofen over the counter. Allergies: Not recorded.

**History moved.** New `hpi` ("History of presenting illness and triage"): five days of vomiting and loose stools, two days of confusion and unsteadiness, GCS 13, CTAS 2, glucose 6.1 mmol/L and the nurse's quote about the tremor, jerking and the lithium bottle. The medication list and the daughter's collateral were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 6 |
| Physical and differential | 6 | 9 |
| Management | 21 | 14 |
| Process | 0 | 7 |
| Total | 28 | 36 |

Added: li-h1 vomiting course, intake and lithium doses while sick (2), li-h2 full medication history including lisinopril, ibuprofen and last lithium dose (2), li-h3 intentional overdose and suicidal thoughts (1), li-h4 last level, prescriber and psychiatric history (1), li-p1 exam for clonus, rigidity, cerebellar signs and volume (2). li-a3 (differential) is now in physical. Moved to process: li-c1, li-c2, li-c3, li-d1, li-d3.

**Longest path seconds.** 600 before, 600 after.

**Citations.**
- `poison` replaced by `aha-tox`. Before: "Ontario Poison Centre. Toxicology consultation for health care providers." It had no work and no year. After: "Lavonas EJ, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life threatening toxicity due to poisoning. Circulation. 2023." It recommends timely consultation with a medical toxicologist or regional poison center. https://pubmed.ncbi.nlm.nih.gov/37721023/ and https://professional.heart.org/en/science-news/2023-american-heart-association-focused-update-on-the-management-of-patients-with-cardiac-arrest/top-things-to-know
- Confirmed unchanged: EXTRIP, Decker 2015 https://pubmed.ncbi.nlm.nih.gov/25583292/. Baird-Gunning 2017 https://pubmed.ncbi.nlm.nih.gov/27516079/. CANMAT and ISBD 2018 https://pubmed.ncbi.nlm.nih.gov/29536616/.

**Needs physician decision.**
- li-c3 ("Calls the provincial poison centre") now rests on the US AHA statement. A Canadian poison centre document with a title and year would be preferable if one is known.
- The card lists ibuprofen as over the counter because the case says so. The CFPC card says "prescribed medication". Confirm it should stay on the card.

---

## chronic-digoxin-toxicity. Nausea and a slow pulse in an older man

**Stem.** 123 words before, 54 after. A community hospital in the Ottawa Valley with no cardiology or transvenous pacing. The regional cardiac centre is 90 minutes away by land. An 82 year old man brought in by his wife after three days of vomiting.

**Card.** Temperature 36.6°C. Pulse 38/minute, regular. Resp. 18/minute. BP 92/56 mmHg. O2 sat 95% on room air. Weight 68 kg (150 lb). Medications: digoxin, metoprolol, furosemide, apixaban. Clarithromycin from a walk in clinic. Allergies: Not recorded.

**History moved.** New `hpi`: three days of vomiting, stopped eating, muddled since yesterday, CTAS 2, glucose 5.8 mmol/L and the nurse's quote about yellow rings and the blister pack. New `resources`: 45 beds, four bed ICU, internist on call, transcutaneous pacing, no cardiology or transvenous pacing, cardiac centre 90 minutes by land. The medication list and the wife's collateral were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 7 |
| Physical and differential | 7 | 7 |
| Management | 15 | 9 |
| Process | 0 | 6 |
| Total | 24 | 29 |

Added: dg-h1 vomiting course, intake, digoxin doses and time of last dose (2), dg-h2 full medication history including clarithromycin, and visual halos (2), dg-h3 reason for digoxin, kidney function and wishes about treatment (1). dg-a2 (precipitants) is now in history. Moved to process: dg-c1, dg-c2, dg-d1, dg-d2, dg-l1.

**Longest path seconds.** 585 before, 585 after.

**Citations.**
- `monograph` replaced. Before: "DigiFab (digoxin immune fab, ovine). Canadian product monograph. Paladin Labs." It had no year, and the linked PDF names BTG International, not Paladin. After: "BTG International Inc. DigiFab (digoxin immune fab, ovine) product monograph. Date of revision November 25, 2022." The URL now points to that revision: https://digifab.health/getmedia/3f1076f4-7959-4a6b-8b66-a364f662c644/product-monograph_English_Updated-Dec-2022.pdf (title page read directly). The old URL https://pdf.hres.ca/dpd_pm/00046345.PDF is the July 16, 2018 BTG version.
- Confirmed unchanged: Chan and Buckley 2014 https://pubmed.ncbi.nlm.nih.gov/25089630/. AHA 2023 https://pubmed.ncbi.nlm.nih.gov/37721023/. CCS and CHRS 2020 AF https://pubmed.ncbi.nlm.nih.gov/33191198/.

**Needs physician decision.**
- The old stem said "a 45 bed hospital". The new stem calls it a community hospital. Rural hospital would also fit.
- The card gives clarithromycin, which points at the interaction. It is on the card because it was prescribed. Confirm this is the intended level of cueing.

---

## severe-agitation-sedation. A man held down by police

**Stem.** 128 words before, 48 after. A tertiary care centre in Toronto. Police bring in a 29 year old man apprehended under section 17 of the Mental Health Act after he ran through traffic shouting that people were chasing him.

**Card.** Temperature 38.7°C tympanic. Pulse 142/minute. Resp. 28/minute. BP 170/98 mmHg. O2 sat 97%, poor trace. Weight about 90 kg (198 lb), estimated. Medications: None known. Allergies: Not recorded.

**History moved.** New `hpi` ("Police report and triage"): the friend's report of two days of crystal meth, vitals taken with difficulty, CTAS 1, and the charge nurse's quote about the prone hold in resus 2. New `resources`: security team, psychiatric emergency service, ICU and CT. The friend's collateral was already a finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 6 |
| Physical and differential | 1 | 5 |
| Management | 23 | 15 |
| Process | 0 | 8 |
| Total | 26 | 34 |

Added: ag-h1 police story, days awake and any injury (2), ag-h2 collateral from the friend on use, psychiatric history, medications and allergies (2), ag-h3 other drugs and withdrawal risk (2), ag-x1 exam for trauma, clonus, rigidity and toxidrome (2). All four are tested at q-workup. ag-a2 (medical differential) is now in physical. Moved to process: ag-l1, ag-c1, ag-p1, ag-p2, ag-d1, ag-l2.

**Longest path seconds.** 525 before, 525 after.

**Citations.**
- `restraint-act` completed. Before: "Government of Ontario. Patient Restraints Minimization Act, 2001." After: "Government of Ontario. Patient Restraints Minimization Act, 2001. S.O. 2001, c. 16." https://www.ontario.ca/laws/statute/01p16
- Confirmed unchanged: ACEP severe agitation clinical policy 2024 (first author Thiessen) https://pubmed.ncbi.nlm.nih.gov/38105109/. AHA 2023 https://pubmed.ncbi.nlm.nih.gov/37721023/. Holloman and Zeller 2012 https://pubmed.ncbi.nlm.nih.gov/22461914/. Richmond 2012 https://pubmed.ncbi.nlm.nih.gov/22461917/. HCCA https://www.ontario.ca/laws/statute/96h02 and MHA https://www.ontario.ca/laws/statute/90m07.

**Needs physician decision.**
- The old stem said "a busy urban emergency department in Toronto". The new stem calls it a tertiary care centre.
- The old stem did not say the SpO2 of 97% was on room air, so the card does not say so either.
- History here is exactly at the 15 percent floor plus one item (6 of 34). The first minute is about safety, so history questions sit at q-workup.

---

## suicidal-patient-leaving. A farmer who wants to go home

**Stem.** 137 words before, 56 after. A rural hospital in a farming town in southwestern Ontario. You are the only physician overnight, and the nearest Schedule 1 facility is 70 km away. A 49 year old dairy farmer arrives with his sister at 23:10 after a worrying text.

**Card.** Temperature 36.6°C. Pulse 96/minute. Resp. 16/minute. BP 142/88 mmHg. O2 sat 98% on room air. Weight not given in the case, so the field is left out. Medications: None. Allergies: Not recorded.

**History moved.** New `triage`: arrival at 23:10, CTAS 2, glucose 6.4 mmol/L, and the nurse's quote (smells of alcohol, "only came to get some sleep", the sister found him in his truck with his rifle, now putting his boots on). New `resources`: 40 beds, not a Schedule 1 facility, the nearest 70 km away, one security guard overnight, OPP detachment in town. The sister's collateral and past history were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 6 | 9 |
| Physical and differential | 1 | 3 |
| Management | 21 | 10 |
| Process | 0 | 11 |
| Total | 28 | 33 |

Added: su-h1 alcohol tonight, usual drinking and co ingestion (2), su-h2 prior attempts, psychiatric care and the ATV crash (1), su-x1 exam for injury and co ingestion with a mental status exam (2). su-a1, su-a2 and su-a3 are now in history. Moved to process: su-c1, su-p1, su-p2, su-c2, su-p3, su-c3, su-d3, su-c4.

**Longest path seconds.** 570 before, 570 after.

**Citations.**
- `perlman` corrected. Before: "Perlman CM, et al. Suicide risk assessment inventory: a resource guide for Canadian health care organizations. ..." That title does not match the publication. After: "Perlman CM, Neufeld E, Martin L, Goy M, Hirdes JP. Suicide risk assessment guide: a resource for health care organizations. Ontario Hospital Association and Canadian Patient Safety Institute. 2011." https://www.oha.com/Legislative%20and%20Legal%20Issues%20Documents1/English%20Version%20-%20Suicide%20Risk%20Assessment%20Guide.pdf and https://www.suicideinfo.ca/resource/suicide-risk-assessment-guide-a-resource-for-health-care-organizations/
- Confirmed unchanged: MHA https://www.ontario.ca/laws/statute/90m07. PHIPA https://www.ontario.ca/laws/statute/04p03. ACEP 2017 psychiatric patient clinical policy (first author Nazarian) https://pubmed.ncbi.nlm.nih.gov/28335913/. Stanley and Brown 2012 https://doi.org/10.1016/j.cbpra.2011.01.001. Wilson 2012 https://pubmed.ncbi.nlm.nih.gov/22461918/.

**Needs physician decision.**
- q-leave's strong answer rests on the rifle and the goodbye text. These are no longer read aloud. The stem keeps "after a worrying text" as the complaint, and the rifle is in the `triage` and `sister` findings. Confirm the candidate should now have to ask for them.
- The card says "Medications: None" from the past history finding ("No medications").

---

## psychosis-medical-cause. Strange behaviour for three days

**Stem.** 141 words before, 53 after. A community hospital in northern Ontario with neurology by phone from a tertiary centre. A 46 year old man brought in by his wife because he believes she is poisoning his food, and triage has paged the crisis worker.

**Card.** Temperature 38.1°C. Pulse 108/minute. Resp. 18/minute. BP 138/84 mmHg. O2 sat 97% on room air. Weight 82 kg (181 lb). Medications: Not recorded. No new medications. Allergies: Not recorded.

**History moved.** New `hpi`: accountant with no psychiatric history, three days of accusing his wife of poisoning his food, a smell of burnt rubber, CTAS 3, glucose 6.8 mmol/L, placement in the mental health room, the paged crisis worker and the nurse's "probably a first break". New `resources`: CT around the clock, MRI on weekdays, inpatient psychiatry, internal medicine, ICU, neurology by phone. The wife's collateral was already a finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 5 |
| Physical and differential | 7 | 9 |
| Management | 15 | 9 |
| Process | 0 | 6 |
| Total | 24 | 29 |

Added: ps-h1 collateral on time course, flu like illness, headache and staring spells (2), ps-h2 substances, medications and psychiatric history (2), ps-h3 travel, immune suppression, HIV risk and exposures (1). ps-a2 (temporal lobe features) is now in physical. Moved to process: ps-p1, ps-c1, ps-c2, ps-d1.

**Longest path seconds.** 600 before, 600 after.

**Citations.** No change. Tunkel 2008 https://pubmed.ncbi.nlm.nih.gov/18582201/. Venkatesan 2013 https://pubmed.ncbi.nlm.nih.gov/23861361/. Tunkel 2004 https://pubmed.ncbi.nlm.nih.gov/15494903/. Glauser 2016 https://pubmed.ncbi.nlm.nih.gov/26900382/. ACEP 2017 https://pubmed.ncbi.nlm.nih.gov/28335913/. HCCA and MHA on ontario.ca/laws as above.

**Needs physician decision.**
- The old stem said "a regional hospital". The new stem calls it a community hospital.
- The case gives no regular medication list, only "No new medications" from his wife.

---

## severe-alcohol-withdrawal. Shaking and seeing bugs on the wall

**Stem.** 133 words before, 48 after. A community hospital in Ontario with an ICU, CT and an internist on call. A 54 year old man brought in by paramedics after his partner saw him have a seizure at home.

**Card.** Temperature 38.0°C. Pulse 128/minute. Resp. 24/minute. BP 176/102 mmHg. O2 sat 95% on room air. Weight 78 kg (172 lb). Medications: Not recorded. No benzodiazepines or opioids at home. Allergies: Not recorded.

**History moved.** New `hpi`: generalized seizure of about one minute, the head strike on the kitchen floor, CTAS 2, glucose 3.6 mmol/L and the nurse's quote (shaking, bugs on the wall, CIWA 29). New `alcohol` ("Alcohol use"): a 26 ounce bottle of vodka a day, last drink about 48 hours ago because he ran out of money. The partner's history was already a finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 6 |
| Physical and differential | 4 | 5 |
| Management | 18 | 13 |
| Process | 0 | 8 |
| Total | 24 | 32 |

Added: aw-h1 usual intake and last drink (2), aw-h2 past withdrawal seizures and delirium (2), aw-h3 other sedatives, medications and liver disease (1), aw-h4 recent eating and the head strike (1), aw-x1 exam for Wernicke signs, head injury, liver disease and infection (2). aw-a2 (other causes) is now in physical. aw-m4 (legacy `diagnosis`, phenobarbital for refractory withdrawal) is now in management because it is a treatment step. Moved to process: aw-l1, aw-p1, aw-d1, aw-c1, aw-d2.

**Longest path seconds.** 525 before, 525 after.

**Citations.** No change. CRISM 2023 (Wood) https://pubmed.ncbi.nlm.nih.gov/37844924/, CMAJ 195(40):E1364 to E1379. The CMAJ URL in the case returns 403 to automated fetches (Cloudflare) but matches the PubMed record. ASAM 2020 https://pubmed.ncbi.nlm.nih.gov/32511109/. Sullivan 1989 https://pubmed.ncbi.nlm.nih.gov/2597811/. Rosenson 2013 https://pubmed.ncbi.nlm.nih.gov/22999778/. HCCA on ontario.ca/laws.

**Needs physician decision.**
- q-first now carries 7 rubric ids across history, exam and first orders, with two added model answer lines. Confirm this is not too much for a 75 second question.

---

## eating-disorder-instability. Fainting at the campus gym

**Stem.** 121 words before, 55 after. A tertiary care centre in a university city in Ontario with an adult eating disorders program. It is a Schedule 1 psychiatric facility. A 19 year old woman arrives by ambulance after she fainted on a treadmill at the campus gym.

**Card.** Temperature 35.3°C oral. Pulse 42/minute lying. Resp. 14/minute. BP 84/52 mmHg lying. O2 sat 99% on room air. Weight 41.2 kg (91 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved.** New `triage`: the faint at the gym, the roommate with her, glucose 3.0 mmol/L, height 168 cm, BMI 14.6, CTAS 2 and the nurse's quote ("very thin and cold", "just skipped lunch"). New `resources`: academic hospital, internal medicine, eating disorders program, psychiatry, dietitian on call, ICU, Schedule 1 facility. Eating history, mental health screen and the roommate's collateral were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 3 | 6 |
| Physical and differential | 3 | 4 |
| Management | 20 | 9 |
| Process | 0 | 11 |
| Total | 26 | 30 |

Added: ed-h1 details of the faint (2), ed-h2 weight trajectory, intake and menses (1), ed-h3 medications, supplements and substances (1). ed-a2 (purging, laxatives, exercise, suicidal thoughts) is now in history. ed-a3 (medical causes of weight loss) is now in physical. Moved to process: ed-p1, ed-p2, ed-d1, ed-c1, ed-d2, ed-l1.

**Longest path seconds.** 525 before, 525 after.

**Citations.** No change. SAHM 2022 https://pubmed.ncbi.nlm.nih.gov/36058805/. RCPsych MEED CR233, May 2022 https://www.rcpsych.ac.uk/improving-care/campaigning-for-better-mental-health-policy/college-reports/2022-college-reports/cr233. ASPEN 2020 (da Silva) https://pubmed.ncbi.nlm.nih.gov/32115791/. MHA and HCCA on ontario.ca/laws.

**Needs physician decision.**
- She takes bisacodyl most days, but the case does not say it is prescribed, and asking about laxatives is a scored history item (ed-a2). The card says "Not recorded" rather than listing it.
- Height and BMI have no card field. They are in the `triage` finding.

---

## adult-septic-shock. Fever and confusion in a retired teacher

**Stem.** 119 words before, 50 after. A community hospital in Ontario in the evening, with the ERCP gastroenterologist on call from home. A 74 year old woman brought in by her husband with abdominal pain, fever and new confusion.

**Card.** Temperature 39.2°C. Pulse 124/minute. Resp. 28/minute. BP 78/44 mmHg. O2 sat 93% on room air. Weight 70 kg (154 lb). Medications: ramipril, metformin. Allergies: No allergies.

**History moved.** New `hpi`: retired teacher, two days of right upper belly pain and shaking chills, confused this afternoon, CTAS 1, glucose 9.1 mmol/L and the nurse's quote (yellow eyes, mottled knees, one IV). New `resources`: 300 beds, ICU, general surgery, CT, IR on call, ERCP on site with the gastroenterologist at home tonight. Past history and medications were already a finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 2 | 6 |
| Physical and differential | 5 | 7 |
| Management | 19 | 15 |
| Process | 0 | 6 |
| Total | 26 | 34 |

Added: ss-h1 pain, rigors, jaundice and onset of confusion (2), ss-h2 known gallstones and biliary history (2), ss-h3 medications, allergies and goals of care (1), ss-h4 other sources (1), ss-o1 calls for help, assigns roles and reassesses perfusion (2, process). ss-r1 (recognizes septic shock, legacy `approach`) is now in physical. Moved to process: ss-c1, ss-c2, ss-d1.

**Longest path seconds.** 600 before, 600 after.

**Citations.** No change. SSC 2021 (Evans) https://pubmed.ncbi.nlm.nih.gov/34605781/. Tokyo Guidelines 2018 diagnosis (Kiriyama) https://pubmed.ncbi.nlm.nih.gov/29032610/. Tokyo Guidelines 2018 management (Miura) https://pubmed.ncbi.nlm.nih.gov/28941329/. PRISM 2017 https://pubmed.ncbi.nlm.nih.gov/28320242/.

**Needs physician decision.**
- q-first already had 7 model answer points, so ss-o1 was added to its rubric list without a new line. "Call for help" and reassessment are already in that answer.

---

## necrotizing-soft-tissue-infection. Leg pain after a scrape

**Stem.** 129 words before, 55 after. A community hospital in a mid sized Ontario city with general surgery on call but no plastic surgery. A 38 year old woman with worsening pain in her left leg after a walk in clinic diagnosed cellulitis yesterday.

**Card.** Temperature 38.8°C. Pulse 122/minute. Resp. 24/minute. BP 96/58 mmHg. O2 sat 97% on room air. Weight 80 kg (176 lb). Medications: cephalexin from a walk in clinic, ibuprofen. Allergies: No allergies.

**History moved.** New `hpi`: the dock scrape four days ago, cephalexin 500 mg four times daily from yesterday, pain much worse today, two episodes of vomiting, ibuprofen 600 mg every 6 hours, CTAS 2, glucose 7.2 mmol/L and the triage note. New `resources`: 220 beds, general surgery on call, ICU, CT, MRI, no plastic surgery. Past history and contacts were already a finding.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 1 | 6 |
| Physical and differential | 5 | 6 |
| Management | 16 | 8 |
| Process | 0 | 8 |
| Total | 22 | 28 |

Added: ns-h1 mechanism and water exposure (2), ns-h2 course since the clinic visit (2), ns-h3 NSAIDs, host factors and allergies (1), ns-h4 sick contacts including strep throat at home (1). All four are tested at q-abx, with one model answer line. ns-a3 (marking the border) is now in physical. ns-l1 (calls surgery immediately) is in management. Moved to process: ns-c1, ns-l2, ns-c2, ns-d2, ns-d1.

**Longest path seconds.** 495 before, 495 after.

**Citations.** No change. IDSA SSTI 2014 (Stevens) https://pubmed.ncbi.nlm.nih.gov/24973422/. LRINEC 2004 (Wong) https://pubmed.ncbi.nlm.nih.gov/15241098/. PHAC iGAS 2006, CCDR 32S2, URL returns 200 https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/06pdf/32s2_e.pdf. SSC 2021 as above.

**Needs physician decision.**
- ns-l2 (escalation if surgery is delayed, critical) is now in process. Confirm that row.
- The PHAC iGAS guideline is from 2006. A newer Canadian source may be preferred.

---

## febrile-neutropenia. Chills at home during cancer treatment

**Stem.** 133 words before, 53 after. A tertiary care centre in Ontario with a full department and 14 patients waiting. A 57 year old woman on chemotherapy for breast cancer with fever and shaking chills. The triage nurse asks if she can wait out front.

**Card.** Temperature 38.9°C. Pulse 116/minute. Resp. 22/minute. BP 96/58 mmHg. O2 sat 96% on room air. Weight 65 kg (143 lb). Medications: docetaxel and cyclophosphamide chemotherapy. Dexamethasone premedication. Allergies: Penicillin, as listed in her chart.

**History moved.** New `hpi`: adjuvant chemotherapy through an implanted port, last cycle of docetaxel and cyclophosphamide 9 days ago, home temperature of 38.7 with shaking chills, glucose 7.4 mmol/L and the nurse's full quote. New `resources`: academic hospital, on site regional cancer centre, oncology on call, infectious diseases, IR and ICU. History and allergy history were already findings.

**Rubric points per row.**

| Row | Before | After |
|---|---|---|
| History | 6 | 7 |
| Physical and differential | 5 | 9 |
| Management | 12 | 9 |
| Process | 0 | 5 |
| Total | 23 | 30 |

Added: fn-h1 last cycle, agents and growth factor (2), fn-h2 localizing symptoms (2), fn-h3 prophylaxis, steroids and resistant organisms (1), fn-o1 reassesses perfusion and escalates (2, process). fn-a2 (penicillin allergy history) is in history. fn-a1 (day 9 nadir) and fn-a3 (source search) are now in physical. Moved to process: fn-l1, fn-c1, fn-c2.

**Longest path seconds.** 495 before, 495 after.

**Citations.** No change. IDSA 2010 update (Freifeld, 2011) https://pubmed.ncbi.nlm.nih.gov/21258094/. ASCO and IDSA 2018 (Taplitz) https://pubmed.ncbi.nlm.nih.gov/29461916/. MASCC 2000 (Klastersky) https://pubmed.ncbi.nlm.nih.gov/10944139/. IDSA catheter infection 2009 (Mermel) https://pubmed.ncbi.nlm.nih.gov/19489710/. SSC 2021 as above. Shenoy 2019 https://pubmed.ncbi.nlm.nih.gov/30644987/.

**Needs physician decision.**
- q-triage asks about the day 9 nadir, which is now only in the `hpi` finding. The stem still says she is on chemotherapy. Confirm the candidate should have to ask for the cycle date.
- The card allergy line says "Penicillin, as listed in her chart" so that fn-a2 (clarifying a low risk reaction) still rewards the history.

---

## For every case

- The new history and process items and their teaching lines are clinical content I wrote. Please check them with the rest of the case.
- Six stems use a setting word the old stem did not. Tertiary care centre replaces "busy urban emergency department in Toronto" and the two "academic hospital" settings. Community hospital replaces the "regional hospital" and the "45 bed hospital". Rural hospital replaces "40 bed hospital in a farming town". The CFPC opening allows only community, rural or tertiary.
