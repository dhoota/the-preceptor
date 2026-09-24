# Oral realignment, batch04

Batch04 (neurology, environmental and geriatrics, 10 cases) is now in the CFPC structured oral format, following `docs/ORAL_REALIGN_BRIEF.md`. Only files in `src/cases/batch04/` were edited. No git commands were run.

## What changed in every case

- The stem now opens "You are working in the emergency department of a [community hospital or tertiary care centre] when the following patient arrives." It then gives age, sex, arrival and complaint in one or two sentences. Every stem is 60 words or fewer.
- A `card` holds the vitals in SAMP format, the medications and the allergies. Weight appears as kg with lb in brackets when the old case gave a weight. No value was changed.
- Every history detail from the old stem is now in `findings`. There is one finding for each part (presenting illness, past history, medications, social history, collateral).
- Every patient name is gone. So are the first names of two family members ("Arun", "Colleen", "Maria"). Nodes now say "the patient".
- Every rubric item has `criterion` set to `history`, `physical`, `management` or `process`. Every row has at least 2 items. Management holds 50 percent of the points or less and history holds 15 percent or more. Every existing item and its `critical` flag is kept.
- `durationMinutes: 12`, `reviewed: false`, `version: 2`.
- Branching, choice quality, choice feedback and clinical content are unchanged. A script compared every node against the originals. The only text changes are name removals, one choice label in the electrical case (name removed), and the new history bullets in model answers.
- Before 12 minutes was required, every case's longest path was already 720 seconds or less. No `seconds` value needed scaling, so all are unchanged.

"Before" rubric rows use the legacy mapping in `types.ts`: approach to history, data and diagnosis to physical, plan to management. The old rubric had no process row.

## Checks

```
npx tsc --noEmit -p . 2>&1 | grep cases/batch04     (no output)
REALIGN=batch04 CASE_BATCH=batch04 npx vitest run tests/cases.test.ts
```

93 tests: 83 passed. The 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case.

## 1. acute-ischemic-stroke-evt

- Stem: 150 words before, 59 after. Community hospital with CT angiography and tenecteplase but no endovascular therapy. Comprehensive stroke centre 55 minutes by land. 71 year old woman, pre notified code stroke, cannot speak, right arm limp.
- Card: 36.8°C, 96/minute irregular, 18/minute, 198/104 mmHg, 95% on room air, 72 kg (159 lb). Medications: ramipril, metformin. Allergies: none known.
- History moved to findings: the timeline (07:40, 07:55, arrival 08:30) went to `timeline`, now labelled "History of presenting illness". Capillary glucose and CTAS went to a new `glucose` finding. The irregular heartbeat and the refused blood thinner went to a new `pmh`. Ramipril and metformin went to a new `meds`. Independence, driving, modified Rankin 0 and the 72 kg weight moved from `timeline` to a new `social`.
- Model answer: "Capillary glucose already 6.4" became "Check capillary glucose. It is 6.4". The last known well bullet now also asks about seizure, head strike, anticoagulants, bleeding and baseline function.
- Rubric points before: history 2, physical 5, management 21, process 0 (total 28). After: history 6, physical 5, management 12, process 9 (total 32).
- Items added: st-h1 (contraindication and anticoagulant history, 2), st-h2 (seizure, head strike, vomiting, 1), st-h3 (past history and baseline function, 1). Items moved to process: st-m1, st-d1, st-c1, st-c2, st-c3, st-l1.
- Longest path: 585 seconds before and after.
- Citations: added the 2024 publication year to hsf-acute. Verified: Heran https://pubmed.ncbi.nlm.nih.gov/36529857/, AcT https://pubmed.ncbi.nlm.nih.gov/35779553/, ESCAPE https://pubmed.ncbi.nlm.nih.gov/25671798/, Powers https://www.ahajournals.org/doi/10.1161/STR.0000000000000211, HCCA https://www.canlii.org/en/on/laws/stat/so-1996-c-2-sch-a/latest/so-1996-c-2-sch-a.html.

## 2. refractory-status-epilepticus

- Stem: 150 words before, 54 after. Tertiary care centre, 21:10 on a Saturday. An after hours EEG technologist must come from home, about an hour away. 34 year old man, still convulsing after midazolam.
- Card: 37.8°C, 134/minute, 30/minute irregular, 176/98 mmHg, 88% on a non rebreather mask, 80 kg (176 lb). Medications: phenytoin 300 mg PO at bedtime, clobazam 10 mg PO at bedtime. Allergies: none known.
- History moved to findings: the roommate, the paramedic times, the midazolam dose, the brief pause, "ran out of his pills" and the glucose went to a new `hpi`. The old `collateral` finding (sister) was split into `pmh` (epilepsy since the head injury at 17, last seizure 14 months ago), `meds` (doses, lost drug plan, out for 5 days) and `social` (job loss, sleep, 3 beers, driving). The roommate's weight estimate moved from the removed `weight` finding into `social`.
- Model answer: the glucose bullet now asks for the value. "Say the time since onset out loud" now also confirms onset and the prehospital dose. q-workup gained a history bullet on triggers.
- Rubric points before: history 2, physical 7, management 22, process 0 (total 31). After: history 7, physical 7, management 16, process 6 (total 36).
- Items added: se-h1 (onset, prehospital drug and dose, waking between seizures, 2), se-h2 (epilepsy, usual drugs, last doses, 2), se-h3 (other triggers, 1). Items moved to process: se-l1, se-c1, se-p1, se-c2, se-d1.
- Longest path: 615 seconds before and after.
- Citations: no changes. Verified: Glauser https://journals.sagepub.com/doi/full/10.5698/1535-7597-16.1.48, ESETT https://www.nejm.org/doi/full/10.1056/NEJMoa1905795, RAMPART https://www.nejm.org/doi/full/10.1056/NEJMoa1107494, Brophy https://link.springer.com/article/10.1007/s12028-012-9695-z, DeLorenzo https://pubmed.ncbi.nlm.nih.gov/9701373/, HTA reporting https://www.ontario.ca/page/reporting-driver-medical-review (the July 2018 start date is confirmed at https://www.mondaq.com/canada/healthcare/732062/do-you-have-a-duty-to-report-a-medically-unfit-driver-new-reporting-requirements-in-effect).

## 3. thunderclap-headache-sah

- Stem: 134 words before, 51 after. Community hospital with CT angiography but no neurosurgery. Neurosurgical centre 90 minutes by land. 46 year old woman, arrived by car, sudden severe headache that began at her gym.
- Card: 36.9°C, 88/minute, 16/minute, 164/92 mmHg, 99% on room air. No weight in the old case. Medications: sumatriptan as needed. Allergies: none.
- History moved to findings: onset at 10:15 while deadlifting, arrival 11:40, CTAS 3 as migraine, GCS 15, seen at 12:20, vomiting twice and the request for her usual migraine cocktail all went to `hx`, now labelled "History of presenting illness". The old `pmh` was split into `pmh` (migraine, no hypertension, mother's brain bleed), `meds` (sumatriptan, no antithrombotics, no allergies) and `social` (smoking).
- Names: "Mrs Raman" in s-decline became "The patient". "Her husband Arun" became "Her husband".
- Rubric points before: history 1, physical 7, management 14, process 0 (total 22). After: history 5, physical 7, management 8, process 6 (total 26).
- Items added: sah-h1 (onset, peak, exertion, syncope, neck pain, difference from usual migraine, 2), sah-h2 (sentinel headache, 1), sah-h3 (family history, smoking, hypertension, antithrombotics, 1). Items moved to process: sah-d1, sah-c1, sah-c2, sah-l1.
- Longest path: 600 seconds before and after.
- Citations: no changes. Verified: Perry JAMA 2013 https://pubmed.ncbi.nlm.nih.gov/24065011/, Perry CMAJ 2017 https://pubmed.ncbi.nlm.nih.gov/29133539/, Perry BMJ 2011 https://pubmed.ncbi.nlm.nih.gov/21768192/, Hoh 2023 https://pubmed.ncbi.nlm.nih.gov/37212182/.

## 4. metastatic-cord-compression

- Stem: 141 words before, 56 after. Community hospital at 21:30. MRI closed until 07:00. Spine surgery and radiation oncology 110 km away. 72 year old man, back pain and weak legs after two falls today.
- Card: 36.7°C, 92/minute, 18/minute, 148/84 mmHg, 96% on room air. No weight in the old case. Medications: androgen deprivation therapy, hydromorphone 2 mg PO as needed. Allergies: none known.
- History moved to findings: 4 weeks of back pain, the "pulled muscle" diagnosis, 2 days of heavy legs, two falls and his wife's report of no urine since morning all went to `pain`, now labelled "History of presenting illness". Prostate cancer with bone metastases, androgen deprivation therapy and the last oncology visit went to a new `pmh`. Medications went to a new `meds`. `baseline` is now labelled "Social history, baseline function and wishes".
- Name: "Mr Almeida" in s-progress became "The patient".
- Rubric points before: history 4, physical 4, management 13, process 0 (total 21). After: history 7, physical 6, management 5, process 8 (total 26).
- Items added: cc-h1 (cancer history, 2), cc-h2 (tempo of weakness, falls, bladder, bowel, saddle symptoms, 2), cc-h3 (baseline mobility and performance status, 1). cc-a2 (neuro exam) moved from the legacy approach row to physical. Items moved to process: cc-d1, cc-c1, cc-c2, cc-p1, cc-l1.
- Longest path: 480 seconds before and after.
- Citations: no changes. Verified: NICE NG234 https://www.nice.org.uk/guidance/ng234, Loblaw https://www.sciencedirect.com/science/article/pii/S0360301612000570, Patchell https://pubmed.ncbi.nlm.nih.gov/16112300/, Fisher SINS https://www.ovid.com/jnls/spinejournalabstracts/fulltext/00152232-201010001-00334.

## 5. myasthenic-crisis-airway

- Stem: 136 words before, 53 after. Community hospital. Anesthesia on call from home. Neurology by phone only from a tertiary centre 2.5 hours away. 58 year old woman, 5 day cough, shortness of breath, trouble swallowing.
- Card: 37.8°C, 108/minute, 28/minute shallow, 138/82 mmHg, 95% on room air, 68 kg (150 lb). Medications: pyridostigmine 60 mg PO four times a day, prednisone 10 mg PO daily, levofloxacin PO started 3 days ago. Allergies: none known.
- History moved to findings: the cough, the walk in clinic levofloxacin and the triage nurse's report (nasal voice, spitting saliva, cannot lie flat) went to a new `hpi`. The myasthenia diagnosis went to a new `pmh`. Medications went to a new `meds`.
- Name: "Mrs Novak" in s-sats-fine became "The patient".
- Rubric points before: history 1, physical 4, management 15, process 0 (total 20). After: history 5, physical 5, management 12, process 4 (total 26).
- Items added: mg-h1 (triggers including the new fluoroquinolone, 2), mg-h2 (bulbar and respiratory symptoms and tempo, 2), mg-h3 (myasthenia history and doses taken today, 1), mg-l1 (process: early anesthesia and RT call, FVC and NIF every 1 to 2 hours, 1). mg-a2 (bulbar and neck exam) moved from the legacy approach row to physical. Items moved to process: mg-c1, mg-d1, mg-p1.
- Longest path: 495 seconds before and after.
- Citations: no changes. Verified: Sanders 2016 https://www.neurology.org/doi/10.1212/WNL.0000000000002790, Narayanaswami 2021 https://www.neurology.org/doi/pdfdirect/10.1212/WNL.0000000000011124, Lawn https://pubmed.ncbi.nlm.nih.gov/11405803/, Metlay https://pubmed.ncbi.nlm.nih.gov/31573350/.

## 6. bacterial-meningitis-adult

- Stem: 132 words before, 52 after. Community hospital with CT, an ICU, and infectious diseases and ENT on call. 57 year old man, arrives with his wife, fever and confusion after 4 days of right ear pain.
- Card: 39.6°C, 118/minute, 24/minute, 104/62 mmHg, 94% on room air, 90 kg (198 lb). Medications: not known. Allergies: no known drug allergies.
- History moved to findings: the ear pain, headache, confusion, triage observations, GCS and glucose went to a new `hpi`. Type 2 diabetes, the prior pneumonia and vaccine history went to a new `pmh`. A new `meds` holds the allergy status. Alcohol use and the grandchildren's visit went to a new `social`. The old `wife` finding was absorbed into these and removed.
- Rubric points before: history 0, physical 3, management 19, process 0 (total 22). After: history 6, physical 5, management 12, process 7 (total 30).
- Items added: men-h1 (course, confusion, seizure, rash, ear treatment, 2), men-h2 (Listeria and pneumococcal risk factors, vaccines, 2), men-h3 (close contacts, 1), men-h4 (drug allergies, 1), men-x1 (physical: meningism, focal signs, ear and mastoid, petechial rash, 2). Items moved to process: men-m1 (antibiotics without waiting for CT), men-c1, men-c2, men-p1, men-d1.
- Longest path: 435 seconds before and after.
- Citations: phac-men had no year. It is now "Public Health Agency of Canada. Guidelines for the prevention and control of meningococcal disease. Canada Communicable Disease Report. 2005." with URL https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/05pdf/31s1_e.pdf. Verified: Tunkel https://academic.oup.com/cid/article/39/9/1267/402080, de Gans https://pubmed.ncbi.nlm.nih.gov/12432041/, ESCMID https://pubmed.ncbi.nlm.nih.gov/27062097/, SSC 2021 https://pubmed.ncbi.nlm.nih.gov/34599691/, O. Reg. 135/18 https://www.canlii.org/en/on/laws/regu/o-reg-135-18/latest/o-reg-135-18.html.

## 7. acute-vestibular-syndrome-hints

- Stem: 136 words before, 49 after. Community hospital, 14:00 on a Saturday. MRI on weekdays only. Neurosurgery 2 hours away. 63 year old man, constant vertigo and vomiting since he woke at 02:00.
- Card: 36.6°C, 84/minute, 16/minute, 176/94 mmHg, 97% on room air. No weight in the old case. Medications: not known. Allergies: none known.
- History moved to findings: bed at 23:00, waking at 02:00, six vomits, needing the wall to walk, dimenhydrinate given, wanting to go home and the glucose all went to `hx`, now labelled "History of presenting illness". Hypertension and diabetes went to a new `pmh`. Smoking went to a new `social`.
- Names: "Mr MacIsaac" became "The patient". "His daughter Colleen" became "His daughter".
- Model answer: q-treat now states last known well as 23:00, not 02:00.
- Rubric points before: history 4, physical 7, management 11, process 0 (total 22). After: history 7, physical 7, management 7, process 6 (total 27).
- Items added: av-h1 (brainstem symptoms, neck pain, headache, 2), av-h2 (hearing, ear, prior episodes, viral illness, 1), av-h3 (vascular risk factors, 1), av-h4 (last known well 23:00, 1). av-a2 (HINTS and gait exam) moved to physical. av-m1 (CTA and neurology) moved from the legacy data row to management. Items moved to process: av-d1, av-d2, av-c1, av-l1.
- Longest path: 510 seconds before and after.
- Citations: added the 2024 publication year to hsf-acute. Verified: GRACE 3 https://pubmed.ncbi.nlm.nih.gov/37166022/, Kattah https://www.ahajournals.org/doi/10.1161/strokeaha.109.551234, POINT https://pubmed.ncbi.nlm.nih.gov/29766750/, Wijdicks https://pubmed.ncbi.nlm.nih.gov/24481970/, Heran as in case 1.

## 8. high-voltage-electrical-injury

- Stem: 155 words before, 56 after. Community hospital with general surgery but no plastic surgery or burn unit. Burn centre 90 minutes by ground. 31 year old lineworker, arrives by ambulance after overhead line contact, right forearm pain.
- Card: 36.9°C, 112/minute, 20/minute, 138/84 mmHg, 97% on room air, 85 kg (187 lb). Medications: none known. Allergies: none known.
- History moved to findings: the 25 kV contact at 09:20, the coworker's account (2 seconds, slumped, unresponsive under a minute, no fall), arrival at 10:05, GCS 15 and the paramedic's report all went to a new `hpi`. `tetanus` is now labelled "Immunizations".
- Names: "Tyler" was removed from the q-supervisor model answer, the c-consent choice label and s-share.
- Rubric points before: history 3, physical 3, management 17, process 0 (total 23). After: history 6, physical 6, management 11, process 6 (total 29).
- Items added: el-h1 (voltage, contact points, duration, fall, 2), el-h2 (loss of consciousness, palpitations, chest pain, prehospital rhythm, 2), el-h3 (tetanus, medications, allergies, 1), el-h4 (limb pain, numbness, weakness, 1). el-a1 and el-a4 moved from the legacy approach row to physical. Items moved to process: el-d1, el-d2, el-c1, el-p1.
- Longest path: 480 seconds before and after.
- Citations: abls had no year. It is now "American Burn Association. Advanced Burn Life Support course provider manual. 2018 update." Verified at https://www.readkong.com/page/advanced-burn-life-support-course-provider-manual-2018-3855651. ukka had no year. It is now "...Treatment of acute hyperkalaemia in adults. 2023." with URL https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0 (final version October 2023). Verified: ATLS 10th edition https://store.facs.org/atls-student-course-manual-10th-edition, Bosch https://pubmed.ncbi.nlm.nih.gov/19571284/, PHIPA https://www.canlii.org/en/on/laws/stat/so-2004-c-3-sch-a/latest/so-2004-c-3-sch-a.html.

## 9. delirium-older-adult

- Stem: 130 words before, 42 after. Tertiary care centre, Monday at 16:00. 86 year old woman brought in by her daughter, sleepy and muddled since Saturday.
- Card: 37.2°C, 96/minute, 18/minute, 142/76 mmHg, 95% on room air, 55 kg (121 lb). Medications: oxybutynin 5 mg PO twice daily, zopiclone 7.5 mg PO nightly, hydrochlorothiazide 12.5 mg PO daily, amlodipine 5 mg PO daily. Allergies: none known. The over the counter diphenhydramine is not prescribed, so it stays in the `meds` finding for the candidate to find.
- History moved to findings: the daughter's account, poor intake, the glucose and the triage note (dipstick, "likely UTI", family wants her home) went to a new `hpi`. Living with her 88 year old husband went to `baseline`, now labelled "Social history and baseline function".
- Names: "Mrs Fitzgerald" in s-open and s-agitation became "The patient".
- Rubric points before: history 4, physical 5, management 15, process 0 (total 24). After: history 8, physical 4, management 10, process 7 (total 29).
- Items added: del-h1 (time course, fluctuation, baseline cognition, 2), del-h2 (new and over the counter drugs, sleep aids, alcohol, sedatives, 2), del-h3 (bowel, bladder, intake, falls, urinary symptoms, 1). del-a3 spanned two rows, so it was split. del-a3 (history) keeps the anticholinergic drugs at 1 point. The new del-x1 (physical) holds retention and impaction at 1 point. del-m2 moved from the legacy data row to management. Items moved to process: del-p1, del-c1, del-c2, del-d1.
- Longest path: 495 seconds before and after.
- Citations: ccsmh had no year. It is now "Canadian Coalition for Seniors' Mental Health. 2014 guideline update. The assessment and treatment of delirium. 2014." with URL https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf. cw-ammi had no year. It is now "Choosing Wisely Canada. Medical microbiology. Recommendations from the Association of Medical Microbiology and Infectious Disease Canada. Updated 2021." with URL https://choosingwiselycanada.org/recommendation/medical-microbiology/ (recommendation 1, last updated June 2021). Verified: Inouye https://www.acpjournals.org/doi/10.7326/0003-4819-113-12-941, Beers 2023 https://pubmed.ncbi.nlm.nih.gov/37139824/, HCCA as in case 1.

## 10. fall-anticoagulated-hip-fracture

- Stem: 151 words before, 49 after. Community hospital with orthopaedic surgery but no neurosurgery, 07:15. 89 year old man arrives by ambulance after his home care worker found him on his bedroom floor, right hip pain.
- Card: 35.4°C, 88/minute irregular, 18/minute, 118/64 mmHg, 95% on room air, 58 kg (128 lb). Medications: apixaban 5 mg PO twice daily, metoprolol 50 mg PO twice daily, furosemide 20 mg PO daily, tamsulosin 0.4 mg PO daily. Allergies: no known allergies.
- History moved to findings: the fall at 23:00, light headedness, head strike, being found at 06:30, the paramedic's leg findings, his usual pressure, GCS and glucose went to a new `hpi`. The old `meds` finding was split into `meds` (with the last apixaban dose at 20:00 from the stem) and a new `pmh`. Living alone, the cane and cooking went to a new `social`. The daughter's name was removed from `collateral`.
- Rubric points before: history 0, physical 6, management 18, process 0 (total 24). After: history 6, physical 6, management 12, process 6 (total 30).
- Items added: hip-h1 (the fall, prodrome, head strike, length of lie, 2), hip-h2 (anticoagulant, dose, last dose time, 2), hip-h3 (new tamsulosin, orthostatic dizziness, 1), hip-h4 (baseline mobility, living situation, wishes, 1). Items moved to process: hip-c1, hip-c2, hip-p1, hip-d1, hip-l1.
- Longest path: 510 seconds before and after.
- Citations: thrombosis-canada had no year. It is now "Thrombosis Canada. Clinical guides. DOACs: management of bleeding, version of 5 February 2024. DOACs: perioperative management, version of 2 February 2023." with the bleeding guide URL https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf. The version dates were read from the PDFs. The perioperative guide is https://thrombosiscanada.ca/clinical_guides/pdfs/PERIOPERATIVEMANAGEMENTOFPATIE_77.pdf. Verified: Stiell CT head https://pubmed.ncbi.nlm.nih.gov/11356436/, Stiell C spine https://pubmed.ncbi.nlm.nih.gov/11597285/, Guay https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001159.pub3/full, FOCUS https://pubmed.ncbi.nlm.nih.gov/22168590/, Ontario Health hip fracture 2024 https://www.hqontario.ca/portals/0/documents/evidence/quality-standards/qs-hip-fracture-2024-en.pdf.

## Needs physician decision

1. Allergies that were not in the old case. The card needs an allergy line. Where the old case was silent, the card says "None known". These cases are stroke, status epilepticus, cord compression, myasthenia, vestibular, electrical and delirium. In stroke, status epilepticus, cord compression and myasthenia the `meds` finding also says no known drug allergies. Please confirm or supply the allergy status.
2. Medications that were not in the old case. The meningitis case (diabetes) and the vestibular case (hypertension, diabetes) never named his drugs, so the card says "Not known". The electrical case says "None known". Please supply real drug lists or accept these.
3. Cards that give away a clue. Prescribed drugs are on the card, as on a CFPC card. In myasthenia this shows levofloxacin (a trigger). In delirium it shows oxybutynin. In status epilepticus it shows his antiseizure drugs, although he ran out of them. Please confirm this is acceptable.
4. Setting labels. The old stems named hospitals by size and region. I mapped them to "community hospital" or "tertiary care centre" and kept only the details the case needs. The meningitis case (300 bed Ottawa hospital with infectious diseases and ENT on call) could be either. Details dropped from the stems include bed counts, city names, CritiCall (still named in the nodes), stroke centre designation and pharmacist hours.
5. Criterion choices on borderline items. Timely actions moved to process: st-m1 (straight to CT), st-d1 and cc-d1 (transfer), men-m1 (antibiotics before imaging). Exam items that the legacy map put in history moved to physical: cc-a2, mg-a2, av-a2, el-a1, el-a4. Imaging orders stayed in physical except av-m1, which moved to management. Please review.
6. The del-a3 split. The 2 point item became del-a3 (history, 1 point) and del-x1 (physical, 1 point). The total for that behaviour is unchanged.
7. Citation fit, not changed. In delirium, del-m4 (sodium correction no faster than 8 mmol/L in 24 hours) and del-p2 (Patient Restraints Minimization Act) cite the CCSMH delirium guideline, which may not cover them. In the hip case, hip-l1 (apixaban dose reduction criteria) cites Thrombosis Canada, but the criteria are in the DOAC comparison guide and product monograph, not in the two guides now cited. Please consider a better source for each.
8. Pre existing, not changed. In stroke, q-angioedema has 8 model answer points, one over the spec limit of 7.

## Orchestrator correction

The first pass wrote "None known" for allergies in seven cases, and for medications in the electrical case, where the original cases gave no value. That invents a fact. These now read "Not recorded", as in the other batches. The sentence "No known drug allergies." that was added to the medication findings of the cord compression, myasthenia and status epilepticus cases was removed. The meningitis and hip fracture cases stated allergies in the original, so theirs stay.
