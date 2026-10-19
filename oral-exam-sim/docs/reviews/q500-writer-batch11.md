# Q500 writer report: batch11

Four new oral cases in `src/cases/batch11/`, registered in `BATCH_11` in blueprint order. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`, and each file opens with the DRAFT line.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch11` prints nothing.
- `CASE_BATCH=batch11 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes, 45 of 45 tests.
- batch11 is in `docs/oral-realign.json`, so the CFPC card and score sheet test ran on every case.

## Cases

| id | title | blueprint | priority topic | questions on every path | longest path | findings | rubric items (critical) | points H / P / M / Pr | sources |
|---|---|---|---|---|---|---|---|---|---|
| stopped-antiplatelets-dental-stemi | Heartburn before dawn | cardio | ischemic-heart-disease | 8 | 555 s | 17 | 20 (3) | 8 / 8 / 9 / 9 of 34 | 4 |
| peritoneal-dialysis-wheeze-overload | The puffers are not helping | resp | pulmonary-edema | 8 | 555 s | 16 | 20 (3) | 7 / 8 / 10 / 9 of 34 | 5 |
| glass-finger-return-visit | Back with a sore finger | procedures | lacerations | 7 | 540 s | 15 | 19 (4) | 7 / 10 / 9 / 8 of 34 | 5 |
| ems-patch-ruptured-aaa | A patch from a hardware store | systems | ems | 9 | 600 s | 14 | 21 (4) | 8 / 8 / 10 / 12 of 38 | 6 |

Every case has 3 or 4 branching questions with strong, partial and unsafe choices and consequence nodes, and an escalation that happens on every path. Stems are 43 to 52 words.

### stopped-antiplatelets-dental-stemi

A 57 year old woman at a community hospital with epigastric burning. She stopped ASA and ticagrelor 6 days earlier on dental office advice, 4 months after a drug eluting stent. The first ECG shows hyperacute T waves only. The repeat shows an anterior STEMI. The PCI centre accepts, but no ambulance is free and the air ambulance is grounded, so first contact to device goes over 120 minutes. The candidate must switch to fibrinolysis and weigh a 2 day old dental extraction. After tenecteplase come accelerated idioventricular rhythm and a socket ooze. Then pharmacoinvasive transfer, a talk about the dentist, and a triage review.
Key features: ischemic-heart-disease 1, 2, 4, 6, 7 and chest-pain 5.

### peritoneal-dialysis-wheeze-overload

A 64 year old man on home peritoneal dialysis at a rural hospital at night. A walk in clinic called his wheeze bronchitis. It is pulmonary edema from loss of ultrafiltration caused by PD peritonitis after a line disconnection. The case covers early bilevel ventilation and nitrates, the history and effluent tests that find the cause, and ISPD empiric antibiotics. The escalation is septic shock in an overloaded patient: stop the nitrate, give antibiotics IV, use a vasopressor instead of boluses, and intubate when bilevel fails. It ends with transfer to an ICU with dialysis and a talk with his daughter.
Key features: pulmonary-edema 1, 2, 3, 4, 5 and infectious-diseases 1.

### glass-finger-return-visit

A 46 year old left handed hairstylist with diabetes returns 3 days after a colleague sutured a glass laceration at the base of her index finger. No X ray was done. She now has all four Kanavel signs, a retained 4 mm glass fragment and a radial digital nerve deficit that dates from the injury. The case covers mechanism and first visit history, separate FDS and FDP testing, two point discrimination, X ray rather than ultrasound to exclude glass, IV antibiotics, same day hand surgery, a tetanus booster, honest disclosure without blaming the colleague, and the department standard for glass wounds. That standard includes when antibiotics are and are not needed.
Key features: lacerations 1, 2, 3, 4, infectious-diseases 4 and cqi 2.

### ems-patch-ruptured-aaa

A primary care paramedic crew patches about a 71 year old man who collapsed in a store with back pain and hypotension. The candidate gives field direction: come to the nearest emergency department, limit fluid, permissive hypotension. Then readying the department, a structured handover that draws out the syncope, the first BP and his known 4.8 cm aneurysm, and ultrasound. The candidate pushes back on CT before the CritiCall referral. The escalation is deterioration while the helicopter is 30 minutes out: blood near 1:1, no crystalloid, no induction in the department. Then packaging for transfer, his wife, and documentation and feedback to the crew.
Key features: ems 1, 2, 3, abdominal-pain 1, 4 and shock 3.

## Uniqueness check

I read every oral title and stem, the existing oral cases on these topics (stemi-cardiogenic-shock, sympathetic-crashing-pulmonary-edema, the seed chest-pain case) and the SAMPs for each topic (s09 and s35 EMS, s13 and s43 lacerations, s12 and s42 IHD, s15 and s48 pulmonary edema, plus the msk fight bite SAMP).

- I dropped two first ideas because SAMPs already cover them. An opioid overdose refusal patch is too close to "A young man who feels better after the ambulance" and the glyburide refusal SAMP. A fight bite is too close to msk-09, "Knuckle cut after a night out". A peripartum cardiomyopathy idea is too close to "Cough five weeks after delivery".
- No oral case or SAMP has a ruptured AAA as an EMS patch and transfer, stent thrombosis after stopping DAPT for dental work, or PD peritonitis causing pulmonary edema. No case or SAMP has a missed retained glass return visit with disclosure. Flexor tenosynovitis with Kanavel signs appears only in a cat bite SAMP.
- A note on the concurrent batches. batch15 `weak-and-pale-after-a-stent` (gi-bleed) also involves a recent stent, but its problem is bleeding, not stent thrombosis. batch13 `late-dinner-chest-pain` is a different diagnosis.

## Sources and verification

I verified PubMed records through NCBI E-utilities (title, authors, journal, year). Guideline text I fetched directly.

- Wanhainen A, et al. ESVS 2024 abdominal aorto-iliac aneurysm guidelines. Eur J Vasc Endovasc Surg 2024. https://pubmed.ncbi.nlm.nih.gov/38307694/ . I read the full text (open copy at arts.units.it). It confirmed recommendation 72 on permissive hypotension with a systolic of 70 to 90 while conscious, plasma to red cells near 1:1, instability defined as reduced consciousness or systolic under 80, CTA for most patients, and the risk of collapse at induction.
- Chaikof EL, et al. SVS AAA guidelines. J Vasc Surg 2018. https://pubmed.ncbi.nlm.nih.gov/29268916/ . The door to intervention under 90 minutes point was confirmed from a search summary of the guideline text.
- Ontario ALS Patient Care Standards v5.4, in force 2 June 2025. https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf . I downloaded and read the PDF. The PCP auxiliary fluid bolus is 10 mL/kg, reassessed every 250 mL, maximum 1 000 mL. It also gives the patching rules and the duty to advise when an order exceeds scope.
- Iedema R, et al. IMIST AMBO. BMJ Qual Saf 2012. https://pubmed.ncbi.nlm.nih.gov/22626739/
- Ontario Life or Limb Policy, 2024, updated 2025. https://www.ontario.ca/page/ontario-life-or-limb-policy (fetched)
- Warren J, et al. Transport of critically ill patients. Crit Care Med 2004. https://pubmed.ncbi.nlm.nih.gov/14707589/
- Chapman T, Ilyas AM. Pyogenic flexor tenosynovitis. J Hand Microsurg 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6894957/ . I read the full text: Kanavel signs, S aureus up to 75 percent, MRSA up to 29 percent, surgery for 3 or more signs, complications up to 38 percent.
- Forsch RT, et al. Laceration repair. Am Fam Physician 2017. https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html (fetched)
- Manthey DE, et al. Ultrasound versus radiography for soft tissue foreign bodies. Ann Emerg Med 1996. https://pubmed.ncbi.nlm.nih.gov/8669741/ . Abstract: radiography 98 percent for radio-opaque objects, ultrasound 43 percent overall.
- CMPA. Disclosing harm from healthcare delivery, version 3, 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients (fetched)
- PHAC. Canadian Immunization Guide, tetanus toxoid, updated 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html . The table confirmed a booster, without TIg, for wounds other than clean minor ones when 5 to under 10 years have passed after a complete series.
- Wong GC, et al. CCS and CAIC STEMI focused update. Can J Cardiol 2019. https://pubmed.ncbi.nlm.nih.gov/30760415/
- Byrne RA, et al. 2023 ESC ACS guidelines. https://doi.org/10.1093/eurheartj/ehad191 . The text confirmed the 120 minute threshold, 10 minutes to bolus and the 2 to 24 hour window. The contraindication table was confirmed through an NHS Grampian protocol that reproduces it.
- Ibanez B, et al. 2017 ESC STEMI guidelines. https://doi.org/10.1093/eurheartj/ehx393 . The text confirmed hyperacute T waves, reperfusion arrhythmia as a sign of success, enoxaparin 30 mg IV then 1 mg/kg SC, clopidogrel 300 mg (75 mg at 75 or older) and ASA 150 to 300 mg.
- Grines CL, et al. Premature discontinuation of DAPT advisory. Circulation 2007. https://pubmed.ncbi.nlm.nih.gov/17224480/
- Li PK, et al. ISPD peritonitis 2022 update. https://pubmed.ncbi.nlm.nih.gov/35264029/ . Diagnosis, empiric cover and the IP route except in systemic sepsis were confirmed from the NephJC summary at https://www.nephjc.com/news/ispd2022peritonitis because the publisher blocked the full text.
- Ezekowitz JA, et al. CCS heart failure 2017. https://pubmed.ncbi.nlm.nih.gov/29111106/
- Rochwerg B, et al. ERS/ATS NIV guideline 2017. https://pubmed.ncbi.nlm.nih.gov/28860265/
- Wang AY, et al. Volume management in PD. Perit Dial Int 2020. https://pubmed.ncbi.nlm.nih.gov/32063208/

## Needs physician decision

- Tenecteplase weight bands (40 mg for 70 to under 80 kg) come from secondary drug tables. ESC prints them only as a table image.
- The dental extraction is judged a minor, compressible risk that does not prevent fibrinolysis. It is not on the ESC contraindication list, but no guideline addresses it directly.
- The PD case does not give intraperitoneal antibiotic doses or a hypertonic exchange prescription. It defers both to the home dialysis nephrologist because I could not verify them in the full ISPD text.
- Avoiding succinylcholine at a potassium of 5.4 in kidney failure, and the reduced dose ketamine induction, rest on standard teaching. The cited rubric item (pd-m5, Rochwerg) supports timely intubation when NIV fails, not the drug choice.
- The flexor tenosynovitis antibiotic is described as cover for staphylococci, including MRSA where common, and streptococci. No specific agent is named, because the source gives no regimen.
- The EMS case uses the Ontario PCP auxiliary directive. Not every PCP is authorized for IV starts. The patch states this crew is.
- An unanswered question for the bank: the ESVS also allows for a direct transfer to a vascular centre. The bypass choice is marked partial, not unsafe, because the patient was unstable with a PCP crew.
- Process note: to print the stats table above, I briefly created and then deleted a temporary test file in `tests/`. No shared file was changed.
