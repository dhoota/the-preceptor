# Q500 writer report. Batch 15 oral cases

Four new oral cases in `src/cases/batch15/`, registered in `BATCH_15`. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`, `durationMinutes: 12`. Each file opens with the DRAFT line.

## Checks

- `npx tsc --noEmit -p . | grep cases/batch15`: no errors.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed. This includes the realigned CFPC card and score sheet checks, since batch15 is listed in `docs/oral-realign.json`.

## Cases

| Id | Title | Topic and key features | Blueprint | Questions on every path | Longest path | Findings | Rubric items, points by row (H, P, M, Pr) |
|---|---|---|---|---|---|---|---|
| back-with-the-same-headache | Back with the same headache | headache 1, 2, 3, 6 | neuro | 8 | 650 s | 15 | 20 items, 8, 7, 10, 8 (history 24%, management 30%) |
| chest-tightness-after-night-shift | Chest tightness after a night shift | suicide-risk 1, 2, 4, 5 | psych | 8 | 640 s | 15 | 17 items, 8, 6, 10, 7 (history 26%, management 32%) |
| weak-and-pale-after-a-stent | Weak and pale after a recent hospital stay | gi-bleed 1, 2, 3, 5, 6 | resus | 8 | 635 s | 15 | 19 items, 7, 6, 10, 8 (history 23%, management 32%) |
| brought-down-from-the-eighth-floor | Brought down from the eighth floor | environmental 1, 2 | enviro | 8 | 625 s | 16 | 19 items, 7, 7, 11, 8 (history 21%, management 33%) |

Each case has 4 branching questions with strong, partial and unsafe choices, consequence `say` nodes that rejoin the main line, a fixed escalation and 3 critical items. Stems are 39 to 44 words.

### Scenarios and how they differ from the bank

1. Headache. A 27 year old woman on a combined pill returns two days after a migraine diagnosis. Cerebral venous thrombosis with papilledema, a focal sign, a hemorrhagic venous infarct and a seizure. Key decisions: fundoscopy, CT venography rather than lumbar puncture, heparin despite the bleed, honest talk about the first visit. The existing headache orals are thunderclap SAH and a mass on CT. The only CVT SAMP is postpartum with a seizure at home. This case is non pregnant and built on the return visit.
2. Suicide risk. A 44 year old ICU nurse with chest tightness after a night shift. Cardiac causes are excluded, then passive ideation is found, with her late mother's hydromorphone and lorazepam at home and a father who died by suicide. Key decisions: direct inquiry, a collaborative outpatient plan (no Form 1) when her frightened husband asks for admission, removal of the opioids, sertraline counselling, confidentiality with her employer. The existing orals are a teen who wants to leave and a farmer who wants to leave. The low risk discharge SAMPs start from a stated psychiatric complaint. This one starts as chest pain and turns on hidden ideation and means.
3. GI bleed. A 66 year old man 5 weeks after a drug eluting stent, on ASA and ticagrelor, with walk-in naproxen and no PPI. He presents with near syncope and demand ischemia, then rebleeds with maroon stool. Key decisions: transfuse with a higher threshold for ischemia, no heparin, continue ASA, no platelets, a joint ticagrelor decision, massive hemorrhage protocol without tranexamic acid, upper endoscopy for an apparent lower bleed. The existing orals are a rural variceal bleed and a refusal of blood.
4. Environmental. An 82 year old woman with classic heat stroke after building air conditioning failed, on furosemide, metoprolol, oxybutynin and quetiapine. Then a surge from the same building. Key decisions: conductive ice water cooling in a body bag before imaging, core temperature probe, a broad differential (anticholinergic, NMS, sepsis, intracranial), stopping at 39°C, organ injury, surge preparation and a call to public health. The existing heat oral is exertional heat stroke in a runner. The heat wave SAMPs are single patients. None has a building cluster or surge.

## Sources and verification

Headache
- Ferro JM and colleagues, ESO guideline for CVT, Eur Stroke J 2017. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC6454824/ (therapeutic heparin even with baseline hemorrhage, LMWH preferred, no DOAC in the acute phase, antiseizure drugs after a seizure with a supratentorial lesion).
- Saposnik G and colleagues, AHA scientific statement on CVT, Stroke 2024. Verified by search (DOI 10.1161/STR.0000000000000456). No URL given because the journal page returned 403.
- Do TP and colleagues, SNNOOP10, Neurology 2019. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC6340385/.
- Godwin SA and colleagues, ACEP clinical policy on acute headache, Ann Emerg Med 2019. Verified through the Europe PMC record (DOI 10.1016/j.annemergmed.2019.07.009). No URL given.
- Kapur J and colleagues, ESETT, N Engl J Med 2019. Verified by search. Levetiracetam 60 mg/kg to a maximum of 4500 mg was confirmed at https://first10em.com/esett/.

Suicide risk
- MHCC and CPSI Suicide Risk Assessment Toolkit 2021. The PDF was opened and read (tools inform but do not replace judgment, and access to lethal means is part of assessment).
- Stanley B, Brown GK, safety planning intervention, Cogn Behav Pract 2012. Verified by search.
- Lam RW and colleagues, CANMAT 2023 MDD update, Can J Psychiatry 2024. Full text read through Europe PMC (ask about side effects within 2 weeks, closer suicide monitoring in the first 4 weeks).
- Ontario Mental Health Act, s. 15. Form 1 criteria and the 72 hour limit were confirmed through the official form text and Ontario Shores summaries found by search. The e-Laws page did not render for the fetch tool, so no URL is given.
- Public Health Agency of Canada, 9-8-8 news release 2023. Opened at https://www.canada.ca/en/public-health/news/2023/11/9-8-8-suicide-crisis-helpline.html.

GI bleed
- Barkun AN and colleagues, International Consensus Group, Ann Intern Med 2019. Abstract confirmed through Europe PMC (GBS of 1 or less, under 80 g/L without cardiovascular disease and higher with it, endoscopy within 24 hours, high dose PPI for 3 days). URL https://doi.org/10.7326/M19-1795.
- Abraham NS and colleagues, ACG and CAG antithrombotic guideline, Am J Gastroenterol 2022. Abstract confirmed through Europe PMC (do not hold cardiac ASA, no platelet transfusion, DAPT handling).
- Villanueva C and colleagues, N Engl J Med 2013. Verified by search, including exclusion of massive bleeding and recent ACS.
- Blatchford O and colleagues, Lancet 2000. Verified by search.
- HALT-IT Trial Collaborators, Lancet 2020. Verified by search.

Environmental
- Lipman GS and colleagues, WMS heat illness guideline 2019 update. Full text read from a PDF copy (cold water immersion is optimal, about 0.2 vs 0.1°C per minute, cool to no lower than 39°C, avoid antipyretics and dantrolene, cold IV fluids as an adjunct). No URL given because the copy was not an official host. A 2024 WMS update exists (Eifling KP and colleagues). Its abstract was confirmed, but the full text was paywalled, so the 2019 version is cited.
- Epstein Y, Yanovich R, Heatstroke, N Engl J Med 2019. Verified by search only.
- Health Canada, Extreme heat events guidelines for health care workers 2011. Opened at the canada.ca URL in the case (medication risk chapter, living alone as a key risk factor, facility preparedness).
- BC Coroners Service, Extreme heat and human mortality, 2022. Verified through the BC government news release of 7 June 2022 (619 deaths, 98% indoors, 67% aged 70 or older, 56% living alone). The URL points to that release, and the citation says so.

## Uncertain, for physician review

- Headache. The case gives enoxaparin 1 mg/kg every 12 hours. Some centres prefer unfractionated heparin when a hemorrhage is present. The ESO guideline supports either and prefers LMWH.
- Suicide risk. The disposition rests on judging her risk as low enough for discharge, despite a father who died by suicide and her access to drugs at work. A reviewer may want this case to land as moderate risk with same day psychiatry. The plan already includes crisis team assessment before discharge and psychiatry within 72 hours.
- GI bleed. The transfusion target with active ischemia is written as "at least 80 g/L". Barkun says only "higher" for cardiovascular disease, and the MINT trial (not cited) favours higher targets in MI. The ticagrelor decision is left to a joint cardiology and GI call, because the ACG and CAG guideline has no firm recommendation for P2Y12 inhibitors during active bleeding.
- Environmental. Empiric ceftriaxone until sepsis is excluded is a common practice, but no cited guideline addresses it in heat stroke. The differential and complication teaching is cited to Epstein 2019, which was verified by search but not read in full.
