# Oral realignment: batch05

Batch05 (trauma and geriatrics, 10 cases) now follows the CFPC structured oral format in `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch05/` were edited. Git was not run.

## Done in every case

- Stem rewritten to open "You are working in the emergency department of a ... when the following patient arrives." Setting facts the case depends on (no spine service, transfer times, no burn unit) stay in the stem. Other resources (ICU, CT, surgeon on call, blood bank, thoracotomy tray) moved into the opening `say` node, which the examiner reads at the start.
- The nurse's or paramedic's quoted line from the old stem moved into the opening `say` node or the history finding. No wording was changed.
- `card` added. Vitals come from the old stem. Weight comes from the old stem, or from the findings when the stem had none. GCS, capillary glucose and CTAS from the old stem moved into an exam, triage or lab finding.
- Stem history moved into findings, one finding per part. Nothing was dropped.
- Patient names removed everywhere, including nodes, choices, model answers and the end text. In the elder abuse case the son's first name was also replaced with "her son".
- Every rubric item has a current `criterion`. Every row has at least 2 items. Management is at most 50 percent in every case. History is at least 15 percent in every case. No existing item, point value or `critical` flag was changed. No item was split.
- New history items were added to the rubric of the question where the candidate would gather that history. Where a model answer had room (under 7 points), one history line was added.
- `durationMinutes: 12`. Every longest path was already 720 seconds or less, so no question `seconds` changed.
- `reviewed: false`, `version: 2`.
- Clinical content, branching, choice quality and scripted feedback are unchanged, apart from name removal.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch05`: no output.
- `REALIGN=batch05 CASE_BATCH=batch05 npx vitest run tests/cases.test.ts`: 83 passed, 10 failed. The 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.

## Rubric rows before and after

Before uses the legacy mapping (approach to history, data and diagnosis to physical, plan to management). Points are shown as history / physical / management / process, then the total.

| Case | Before | After | Management share after | History share after |
|---|---|---|---|---|
| assault-head-injury-deterioration | 3 / 5 / 19 / 0, 27 | 6 / 8 / 13 / 6, 33 | 39% | 18% |
| precordial-stab-wound | 1 / 2 / 20 / 0, 23 | 5 / 3 / 12 / 8, 28 | 43% | 18% |
| house-fire-burns | 3 / 4 / 17 / 0, 24 | 6 / 6 / 12 / 5, 29 | 41% | 21% |
| diving-injury-cottage | 2 / 5 / 16 / 0, 23 | 5 / 7 / 10 / 6, 28 | 36% | 18% |
| restrained-driver-abdominal-pain | 3 / 6 / 14 / 0, 23 | 6 / 5 / 9 / 8, 28 | 32% | 21% |
| neck-wound-robbery | 2 / 2 / 18 / 0, 22 | 5 / 4 / 12 / 6, 27 | 44% | 19% |
| trench-collapse-crush | 0 / 5 / 18 / 0, 23 | 6 / 4 / 11 / 8, 29 | 38% | 21% |
| older-woman-brought-by-son | 6 / 2 / 16 / 0, 24 | 9 / 7 / 9 / 4, 29 | 31% | 31% |
| older-man-severe-abdominal-pain | 1 / 6 / 16 / 0, 23 | 7 / 7 / 7 / 9, 30 | 23% | 23% |
| older-woman-confusion-seizure | 1 / 4 / 17 / 0, 22 | 6 / 5 / 10 / 7, 28 | 36% | 21% |

## Timing

All cases went from 14 or 15 minutes to 12. Longest path question seconds did not change: assault 615, precordial 540, burns 525, diving 525, driver 525, neck 510, trench 495, elder abuse 525, mesenteric 480, hyponatremia 495. All are at or under 720.

## Per case

### assault-head-injury-deterioration

- Stem: 135 words before, 46 after. Tertiary care centre (neurosurgery, CT, ICU and massive hemorrhage protocol on site).
- Card: 36.5°C, 92/minute, 18/minute, 148/86 mmHg, 96% on room air, about 85 kg (187 lb). Medications unknown. Allergies unknown. His wife gives these by phone, so they stay as history.
- History moved: witness account of the punch, the fall onto a curb, brief unresponsiveness, two episodes of vomiting and the collar went to `hpi`. The old collateral finding was split into `pmh` (healthy, no seizures), `meds` (no medications, no blood thinners, no allergies) and `social` (drinks on weekends). GCS 12 and CTAS 2 went to `gcs`. Capillary glucose 6.8 went to `labs`. The nurse's hallway request went to the opening `say` node.
- Rows: tb-a1, tb-a2 and tb-m2 to physical. tb-c1, tb-c2, tb-p1 and tb-l1 to process. The rest to management.
- Added: tb-h1 (mechanism, time, loss of consciousness, vomiting, 2 points), tb-h2 (anticoagulants and bleeding disorders, 2), tb-h3 (collateral from his wife, 2). All are on q-initial.
- Citations: the Brain Trauma Foundation citation now names Carney N, et al. and Neurosurgery 2017 (published online by the BTF in 2016). URLs added for BTF, CRASH-3, the Canadian CT Head Rule and PHIPA.

### precordial-stab-wound

- Stem: 135 words before, 54 after. Community hospital, no cardiac surgery on site, trauma hospital 25 minutes away. The in house general surgeon, uncrossmatched O cells, the massive hemorrhage protocol and the thoracotomy tray moved to the opening `say` node.
- Card: temperature not recorded, 128/minute, 28/minute, 82/64 mmHg, 95% on 10 L/minute by mask, about 75 kg (165 lb). Medications none. Allergies none known.
- History moved: mechanism (kitchen knife, one wound, 20 minutes ago), GCS 14 and the paramedic's quote went to `hpi`. New `pmh` and `social` findings were added (see physician items).
- Rows: st-a1 and st-a2 to physical. st-l1, st-d1, st-c1, st-c2, st-l2 and st-p1 to process. The rest to management.
- Added: st-h1 (weapon, time, number of wounds, vital sign trend, 3), st-h2 (brief AMPLE history, 2). Both are on q-primary.
- Citations: URLs added for EAST 2015 and WTA 2012. No text change.

### house-fire-burns

- Stem: 141 words before, 52 after. No burn unit, burn centre about 90 minutes by air. ICU, CT, general surgeon, hydroxocobalamin in stock and Ornge moved to the opening `say` node.
- Card: 36.0°C, 118/minute, 30/minute, 134/80 mmHg, 98% on a non rebreather mask, about 80 kg (176 lb). Medications unknown. Allergies unknown.
- History moved: rescue from the basement fire near the furnace room, time, prehospital IV, 500 mL Ringer lactate and oxygen went to `hpi`. The old collateral finding was split into `pmh` (healthy, no medications, no allergies, tetanus unknown) and `social` (smokes a pack a day, went to check the furnace). GCS 13 and CTAS 1 went to `secondary`. Glucose 9.1 went to `labs`. The nurse's quote went to the opening `say` node.
- Rows: bu-a1, bu-a2, bu-m2 and bu-a3 to physical. bu-p1 to history. bu-d1, bu-c1, bu-l1 and bu-c2 to process. The rest to management.
- Added: bu-h1 (enclosed space, time, loss of consciousness, 2, on q-tox), bu-h2 (prehospital fluid, 2, on q-fluids), bu-h3 (collateral from his wife, 1, on q-secondary).
- Citations: ABA burn referral guidelines kept at 2022. The year is confirmed by the ABA release post of 1 December 2022. The old URL now redirects, so it points to the current ABA page. URL added for Borron 2007. No other text change.

### diving-injury-cottage

- Stem: 162 words before, 56 after. Rural hospital, no spine service, 2 hours by land or 50 minutes by helicopter. Sole physician, CT, small ICU and general surgeon moved to the opening `say` node.
- Card: 35.4°C, 46/minute, 28/minute and shallow, 78/40 mmHg, 93% on a non rebreather mask, about 70 kg (154 lb). Medications unknown. Allergies unknown.
- History moved: dive into about a metre of water, pulled out face down, collar and scoop, CTAS 1, the paramedic's quote, plus "no loss of consciousness" and "could not feel his legs" from the old friends finding went to `hpi`. The rest of that finding was split into `pmh` and `social` (three beers). Glucose 6.2 went to `labs`. GCS 15 was already in `neuro`.
- Names: "Ethan" removed from the q-family prompt and model answer.
- Rows: sc-a1, sc-a2 and sc-r2 to physical. sc-c1, sc-d1, sc-l1, sc-c2 and sc-p1 to process. The rest to management.
- Added: sc-h1 (mechanism and first symptoms, 2), sc-h2 (loss of consciousness and time face down, 2), sc-h3 (collateral from friends, 1). All are on q-primary. Its model answer already had 7 points, so no line was added.
- Citations: "American Spinal Injury Association. International Standards for Neurological Classification of Spinal Cord Injury." had no year. It was replaced with Rupp R, et al. International Standards for Neurological Classification of Spinal Cord Injury: Revised 2019. Top Spinal Cord Inj Rehabil. 2021. URLs added for Walters 2013 and HCCA.

### restrained-driver-abdominal-pain

- Stem: 128 words before, 47 after. Trauma hospital 45 minutes away. CT, surgeon, obstetrician and operating room moved to the opening `say` node.
- Card: 36.8°C, 104/minute, 20/minute, 118/74 mmHg, 98% on room air, about 62 kg (137 lb). Medications none. Allergies none known.
- History moved: belted driver, 80 km/h frontal crash, airbag, self extrication and time went to `hpi`. The old AMPLE finding was split into `pmh` (healthy, no medications, no allergies, last meal) and `ob-history` (late period, did not know she was pregnant, no prior pregnancies). GCS 15 and CTAS 2 went to `back`. The nurse's quote went to the opening `say` node.
- Names: "Priya" removed from s-mri and s-no-ct.
- Rows: sb-a1 and sb-a3 to physical. sb-a2 to history. sb-c1, sb-l1, sb-c2, sb-d2 and sb-p1 to process. The rest to management.
- Added: sb-h1 (mechanism and time, 2), sb-h2 (site of pain, back and neurological symptoms, 2), sb-h3 (AMPLE with last period and last meal, 1). All are on q-primary.
- Citations: URLs added for Hoff 2002, Jain 2015 and ACOG 723. No text change.

### neck-wound-robbery

- Stem: 126 words before, 48 after. Tertiary care centre. The in house services, the operating room one floor up and the massive hemorrhage protocol moved to the opening `say` node.
- Card: temperature not recorded, 122/minute, 24/minute, 96/60 mmHg, 94% on a non rebreather mask, about 80 kg (176 lb). Medications none. Allergies none known.
- History moved: folding knife, time, collar, IV in the left arm, CTAS 1 and the paramedic's quote (spurting at the scene, growing swelling, voice change) went to `hpi`. The old AMPLE finding became `pmh`.
- Rows: pn-a1 and pn-a2 to physical. pn-l1, pn-d1, pn-c1 and pn-c2 to process. The rest to management.
- Added: pn-h1 (weapon, time, spurting at the scene, 2), pn-h2 (voice, swallowing, hemoptysis, dyspnea, 2), pn-h3 (AMPLE with blood thinners, tetanus, last meal, 1). All are on q-primary. Its model answer was full.
- Citations: URLs added for Navsaria 2006. No text change.

### trench-collapse-crush

- Stem: 131 words before, 41 after. The ICU, orthopedics and dialysis on call and the nurse's quote moved to the opening `say` node.
- Card: 35.8°C, 118/minute, 22/minute, 104/68 mmHg, 97% on room air, about 95 kg (209 lb). Medications ramipril. Allergies none known.
- History moved: trench collapse, legs and pelvis buried about 4 hours, freed 40 minutes ago, prehospital saline and fentanyl went to `hpi`. The old history finding was split into `pmh` (hypertension, ramipril, no allergies, tetanus unknown) and `social` (working for a subcontractor). CTAS 2 went to `primary`. Glucose 7.4 went to `labs`.
- Rows: cr-a1 and cr-a2 to physical. cr-l1, cr-m4, cr-r2, cr-d1, cr-c1 and cr-p1 to process. The rest to management.
- Added: cr-h1 (entrapment time and body parts, 3), cr-h2 (prehospital fluid and analgesia, 1), cr-h3 (ACE inhibitor, allergies, tetanus, 1) on q-primary. cr-h4 (work and employer for the report, 1) on q-dispo.
- Citations: "Workplace Safety and Insurance Board of Ontario. Health professional's report (Form 8)." had no year, and the WSIB pages give conflicting form revision dates. It was replaced with "Ontario. Workplace Safety and Insurance Act, 1997, section 37." Section 37 is the duty of health professionals to report to the WSIB. URLs added for Bosch, Sever and McQueen.

### older-woman-brought-by-son

- Stem: 143 words before, 50 after. Time 16:30 is kept because the social worker leaves at 20:00. The social worker, the GEM nurse, security and the triage nurse's quote moved to the opening `say` node.
- Card: 36.9°C, 98/minute, 18/minute, 108/64 mmHg, 96% on room air, 44 kg (97 lb) from the `general` finding. Medications donepezil, amlodipine, vitamin D from the pharmacy record. Allergies unknown.
- History moved: the son's account of the fall two days ago and why he brought her went to `hpi` with glucose 5.9 and CTAS 3. Living with her 54 year old son as caregiver went to `social`.
- Names: "Margaret" and "Kevin" removed from 20 places, including the finding labels "History from the patient alone" and "Her son".
- Rows: ea-a1, ea-m1 and ea-p1 (capacity assessment) to physical. ea-c1 and ea-a2 to history. ea-m2, ea-c2, ea-d2 and ea-l1 to process. The rest to management.
- Added: ea-h1 (details of the fall and the delay, 2, on q-assess), ea-h2 (medications and missed refills, 2, on q-medical), ea-h3 (baseline function, living situation, money, 1, on q-alone).
- Citations: URLs added for Lachs 2015, EASI (the McGill tool page), HCCA, PHIPA and the Fixing Long-Term Care Act. No text change.

### older-man-severe-abdominal-pain

- Stem: 159 words before, 49 after. Vascular surgery and IR are 1 hour away. CT, the surgeon, the ICU, CritiCall and the nurse's enema question moved to the opening `say` node.
- Card: 36.9°C, 112/minute and irregular, 22/minute, 148/88 mmHg, 95% on room air, about 72 kg (159 lb). Medications apixaban, metoprolol, amlodipine. Allergies none known.
- History moved: sudden periumbilical pain 3 hours ago, two episodes of vomiting, one loose stool and no good bowel movement in days went to `hpi`. Atrial fibrillation, hypertension and treated prostate cancer went to `pmh`. The apixaban hold for a dental extraction was added to `meds`. CTAS 2 went to `abdomen`. Glucose 8.2 went to `labs`.
- Names: "Walter" removed from q-goals, c-values, s-wife and s-age.
- Rows: mi-a1, mi-a2 and mi-m3 to physical. mi-l1, mi-c1, mi-d1, mi-c2 and mi-c3 to process. The rest to management.
- Added: mi-h1 (anticoagulant and last dose, 3), mi-h2 (character of the pain, 2), mi-h3 (past history, 1) on q-ddx. mi-h4 (function and prior wishes, 1) on q-goals.
- Citations: URLs added for WSES 2022, ESVS 2017 and Rockwood 2005. No text change.

### older-woman-confusion-seizure

- Stem: 158 words before, 33 after. The ICU, step down unit, CT, lab turnaround and the nurse's quote moved to the opening `say` node.
- Card: 36.6°C, 88/minute, 18/minute, 138/74 mmHg, 96% on room air, about 50 kg (110 lb). Medications hydrochlorothiazide, sertraline. Allergies unknown.
- History moved: found confused this morning, 2 days of vomiting, unsteadiness and the daughter's stroke worry went to `hpi`. The thiazide dose and start date, sertraline duration and the bag of pill bottles went to `meds`. Living alone and the water, tea and toast intake went to `social`. GCS 13 was already in `exam`, and CTAS 2 was added there. Glucose 6.1 went to `labs`.
- Names: "Evelyn" removed from s-open, s-seizure, s-overcorrect and the end text.
- Rows: hn-a1, hn-m1 and hn-a2 to physical. hn-m2, hn-l1, hn-d1, hn-c1 and hn-p1 to process. The rest to management.
- Added: hn-h1 (medications and start dates, 3), hn-h2 (food and fluid intake, 2), hn-h3 (time course, vomiting, falls, baseline cognition, 1). All are on q-initial.
- Citations: URLs added for all four sources. No text change.

## Citation verification

Every citation in the batch was checked by web search. It names an author or body, a work and a year.

- Carney N, et al. BTF 4th edition, Neurosurgery 2017: https://pubmed.ncbi.nlm.nih.gov/27654000/
- CRASH-3, Lancet 2019: https://pubmed.ncbi.nlm.nih.gov/31623894/
- Stiell IG, et al. Canadian CT Head Rule, Lancet 2001: https://pubmed.ncbi.nlm.nih.gov/11356436/
- ATLS Student Course Manual 10th edition 2018 (ISBN 9780996826235): https://search.worldcat.org/title/Advanced-trauma-life-support-:-student-course-manual/oclc/1042565974 (no URL in the case)
- PHIPA 2004: https://www.canlii.org/en/on/laws/stat/so-2004-c-3-sch-a/latest/so-2004-c-3-sch-a.html
- Seamon MJ, et al. EAST 2015: https://pubmed.ncbi.nlm.nih.gov/26091330/
- Burlew CC, et al. WTA 2012: https://pubmed.ncbi.nlm.nih.gov/23188227/
- ABLS Provider Manual 2018 update: https://www.readkong.com/page/advanced-burn-life-support-course-provider-manual-2018-3855651 (no URL in the case. The old ABA PDF link returns 404.)
- ABA Guidelines for burn patient referral 2022: https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral and the release post https://x.com/Ameriburn/status/1598378189641945088
- Borron SW, et al. 2007: https://pubmed.ncbi.nlm.nih.gov/17481777/
- Baud FJ, et al. 1991: https://www.nejm.org/doi/full/10.1056/NEJM199112193252502
- Walters BC, et al. 2013: https://journals.lww.com/neurosurgery/fulltext/2013/08001/guidelines_for_the_management_of_acute_cervical.24.aspx
- Fehlings MG, et al. Global Spine J 2017: https://journals.sagepub.com/doi/10.1177/2192568217703085
- AO Spine and Praxis 2024: https://pubmed.ncbi.nlm.nih.gov/38526923/
- Rupp R, et al. ISNCSCI Revised 2019, 2021: https://pubmed.ncbi.nlm.nih.gov/34108832/
- Health Care Consent Act, 1996: https://www.canlii.org/en/on/laws/stat/so-1996-c-2-sch-a/latest/so-1996-c-2-sch-a.html
- Hoff WS, et al. EAST 2002: https://pubmed.ncbi.nlm.nih.gov/12352507/
- Jain V, et al. SOGC 2015: https://pubmed.ncbi.nlm.nih.gov/26334607/
- Fung-Kee-Fung K, et al. SOGC 448, 2024: https://www.jogc.com/article/S1701-2163(24)00260-3/abstract
- ACOG Committee Opinion 723, 2017: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/10/guidelines-for-diagnostic-imaging-during-pregnancy-and-lactation
- Sperry JL, et al. WTA 2013: https://www.westerntrauma.org/wp-content/uploads/2020/07/WTACriticalDecisionsPenetratingNeckTrauma.pdf
- Navsaria P, et al. 2006: https://pubmed.ncbi.nlm.nih.gov/16830215/
- Law JA, et al. CAFG 2021: https://pubmed.ncbi.nlm.nih.gov/34105065/
- Bosch X, et al. 2009: https://pubmed.ncbi.nlm.nih.gov/19571284/
- Sever MS, et al. 2012: https://academic.oup.com/ndt/article/27/Suppl_1/i1/1818526
- McQueen MM, et al. 1996: https://pubmed.ncbi.nlm.nih.gov/8898137/
- Workplace Safety and Insurance Act, 1997, s. 37: https://www.wsib.ca/en/health-care-providers/provider-information/reporting-requirements-health-professionals
- Lachs MS, Pillemer KA. 2015: https://pubmed.ncbi.nlm.nih.gov/26559573/
- Yaffe MJ, et al. EASI 2008 (J Elder Abuse Negl 20(3):276 to 300): https://www.mcgill.ca/familymed/research/resources/funding/elder
- Substitute Decisions Act, 1992: https://en.wikipedia.org/wiki/Substitute_Decisions_Act (no URL in the case)
- Fixing Long-Term Care Act, 2021, s. 28: https://www.canlii.org/en/on/laws/stat/so-2021-c-39-sch-1/latest/so-2021-c-39-sch-1.html
- Retirement Homes Act, 2010, s. 75: https://www.rhra.ca/wp-content/uploads/2018/10/Mandatory-Reporting-Fact-Sheet-PDF-2.pdf
- Bala M, et al. WSES 2022: https://pubmed.ncbi.nlm.nih.gov/36261857/
- Björck M, et al. ESVS 2017: https://pubmed.ncbi.nlm.nih.gov/28359440/
- Macdonald DB, et al. CAR 2022: https://pubmed.ncbi.nlm.nih.gov/35608223/
- Rockwood K, et al. 2005: https://pubmed.ncbi.nlm.nih.gov/16129869/
- Spasovski G, et al. 2014: https://pubmed.ncbi.nlm.nih.gov/24562549/
- Verbalis JG, et al. 2013: https://www.amjmed.com/article/S0002-9343(13)00605-0/fulltext
- Sterns RH. 2015: https://pubmed.ncbi.nlm.nih.gov/25551526/
- AGS Beers Criteria 2023: https://pubmed.ncbi.nlm.nih.gov/37139824/

## Needs physician decision

1. New history content. To give the history row something to ask about, a few neutral facts were written that were not in the old case. Please confirm or edit them:
   - precordial-stab-wound `pmh`: healthy, no medications, no blood thinners, no known allergies. `social`: drinking beer tonight, denies other drugs. This fits the ethanol of 18 mmol/L. The card shows medications none and allergies none known to match.
   - restrained-driver-abdominal-pain `hpi`: pain where the belt crossed, no leg weakness or numbness. This fits the normal neuro exam.
   - assault and hyponatremia: history labels name the source (his wife by phone, her daughter).
2. Temperature is "Not recorded" on the precordial and neck cards because neither old case gave one. Decide whether to add a value.
3. Card medications. Where the only source is later collateral (assault, burns, diving) or the case turns on discovering it, the card says "Unknown". The mesenteric card lists apixaban without saying it was held. The hold is in the `meds` finding and is tested by mi-h1. The hyponatremia card lists both culprit drugs, as a CFPC card would. Please confirm this balance.
4. restrained-driver-abdominal-pain: the opening node still says "She asks if the baby is okay", but the history says she did not know she was pregnant. The summary also says she "walks into the ED" while the old stem said she came by ambulance. Both were in the old case and were not changed.
5. Row calls you may want to change: capacity assessment (ea-p1) is under physical, recognizing the Cushing response (tb-m2) is under physical, and three critical items now sit under process: sb-l1 (calls the surgeon without repeat imaging), pn-d1 (straight to the operating room) and mi-d1 (local laparotomy when peritonitis develops). The critical flags did not move.
6. Wife and friends as history sources: tb-h3, bu-h3 and sc-h3 score collateral as history. Decide whether the examiner should release this collateral only when asked.

## Orchestrator correction

The precordial stab card said "None" for medications and "None known" for allergies, which the original case never gave. The card now reads "Not recorded". The new history finding still holds the added facts (healthy, no medications or blood thinners, no known allergies), and those remain listed above for physician review.
