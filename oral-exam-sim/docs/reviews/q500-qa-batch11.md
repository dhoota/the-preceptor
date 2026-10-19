# Q500 QA report: batch11

Independent clinical accuracy review of the four oral cases in `src/cases/batch11/`. I did not write them. I read the Q500 brief, the case spec, the realign brief, the review rules, `src/engine/types.ts` and the writer report first. I fixed what could be fixed in the four case files. I did not touch shared files, run git, `npm test` or `bank:encode`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch11` prints nothing.
- `CASE_BATCH=batch11 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes, 45 of 45 tests.
- No em dashes, en dashes or semicolons in any string. No US spellings found. No mnemonics. No personal names. Author is "Preceptor" on every case.

## Verdicts

| id | verdict |
|---|---|
| stopped-antiplatelets-dental-stemi | pass with fixes |
| peritoneal-dialysis-wheeze-overload | pass with fixes |
| glass-finger-return-visit | pass with fixes |
| ems-patch-ruptured-aaa | pass with fixes |

## stopped-antiplatelets-dental-stemi

Numbers rechecked. Tenecteplase 40 mg for 74 kg is right. The Canadian TNKase monograph (Table 1) gives 30 mg under 60 kg, 35 mg for 60 to under 70, 40 mg for 70 to under 80, 45 mg for 80 to under 90 and 50 mg at 90 or more. Enoxaparin 30 mg IV then 1 mg/kg (74 mg) SC every 12 hours, clopidogrel 300 mg under 75, and ASA 160 mg are right. The ST threshold of 1.5 mm in V2 and V3 for women is right. The first ECG (1 mm in V2 and V3) correctly falls short. The hs troponin I female cut off of 16 ng/L is plausible.

Fixes:
- Timing. The ESC measures the 120 minute limit from STEMI diagnosis, not first contact. With a diagnosis at 06:58 and a lab time of 08:50, that gap was only 112 minutes, so lysis would not clearly be indicated under ESC. I moved the next crew to 70 minutes away and the lab time to 09:15 (finding, say node and model answer). It is now over 120 minutes by either definition.
- Dental timeline. She stopped the drugs 6 days ago and had the extraction 2 days ago, which is 4 days, but the dental office was said to want 5. Changed the instruction to "4 days before".
- Dental extraction as a fibrinolysis risk. It is not an absolute contraindication in the Canadian monograph or the ESC list. The monograph lists "recent major surgery" and "recent trauma" as risks to weigh against benefit. I added the monograph as a source and moved rubric ih-m3 to it, with teaching that says so. Model answer now says "not a listed contraindication. Weigh it as a relative risk."
- The unsafe choice c-no-lysis was the same plan as the partial c-wait (heparin and wait for PCI), with only the reason being different. I rewrote it to withholding the fibrinolytic and all anticoagulation, which is clearly unsafe. The feedback matches.
- ih-m2 teaching said to halve tenecteplase at 75 or older, cited to ESC 2017. I could not confirm that line in ESC 2017, so I removed it. The teaching keeps the clopidogrel 75 mg and no enoxaparin bolus points.

Residual uncertainty: I could not open the full CCS 2019 text (publisher blocked). The 120 minute, 30 minute door to needle and 2 to 24 hour points rest on the writer's reading and on ESC 2023. The ih-h5 collateral item cites ESC 2023, which supports it only in general. Overlap with batch15 `weak-and-pale-after-a-stent` is acceptable. That case is a GI bleed on antiplatelets, and this one is stent thrombosis after stopping them.

## peritoneal-dialysis-wheeze-overload

The ISPD 2022 points are right: diagnosis needs two of three (pain or cloudy effluent, effluent WBC over 100 per µL after a dwell of 2 hours or more with over 50 percent neutrophils, positive culture). Empiric cover is a first generation cephalosporin or vancomycin plus a third generation cephalosporin or an aminoglycoside. IP is preferred unless there is systemic sepsis, and therapy must not wait for the IP route. The gas is consistent (pH 7.29 from pCO2 52 and bicarbonate 24). The 2.5 L bolus is 30 mL/kg for 84 kg.

Fixes:
- Rochwerg 2017 makes a strong recommendation for bilevel or CPAP in cardiogenic pulmonary edema. "Suggest" became "recommend" in the feedback and teaching.
- Antibiotic route. At the treatment question he already has fever, a pulse of 112, WBC 15.8 and new confusion. That is arguably systemic sepsis, so the model answer now says IV first doses are reasonable. The shock question now says "IV now if not already given", and the strong choice says "made sure the antibiotics went in IV".
- Succinylcholine at K 5.4. Kidney failure alone does not make the potassium rise bigger, so I softened the text to a plain statement: succinylcholine raises potassium by about 0.5 mmol/L, his is already 5.4 with acidosis, and rocuronium is the sound choice. This is now in the model answer and in the strong and unsafe feedback. The unsafe grade stays because of full dose propofol with no pressor. Rubric pd-m5 (cited to Rochwerg) no longer names the drugs. It now tests timely intubation with a pressor running and a plan for hypotension after induction, which Rochwerg supports.
- "Anuric in practice" became "makes little urine", because he passes 400 mL a day.

Residual uncertainty: as the writer flagged, there are no IP doses and no hypertonic exchange plan. Both are deferred to the nephrologist, which is appropriate for an ED station. Rubrics pd-pr5 (ccs) and pd-pr1 (rochwerg) have only general support from their sources.

## glass-finger-return-visit

Tetanus is right. After a complete series, a wound that is not clean and minor needs a booster at 5 years or more, with no TIg. Her last dose was 8 years ago. Kanavel signs, X ray before ultrasound and the CMPA disclosure points are right.

Fixes:
- Manthey 1996 was a chicken thigh model, not a clinical study. The feedback and the lc-p5 teaching now say "animal tissue model" and give its real figures (radiography 98 percent for radio-opaque objects, ultrasound 43 percent overall).
- Flexor tenosynovitis antibiotics. Chapman says to cover staphylococci (especially MRSA) and streptococci, and gram negatives and anaerobes especially in immunocompromised patients. She has diabetes with an A1c of 8.4 percent, so the model answer adds "consider gram negative cover". The lc-m1 teaching now gives Chapman's figures (S aureus up to 75 percent, MRSA up to 29 percent).
- lc-p1 teaching said sheath tenderness and pain on passive extension are "the strongest predictors". Chapman reports one study that found them to be independent predictors. The teaching now says that.
- lc-m3 cited Chapman for splinting and elevation, which Chapman does not discuss. The teaching now uses what Chapman does say: diabetes is linked to a higher risk of amputation, so control her glucose while she waits for the operating room.
- The partial choice c-bedside ended with discharge on oral antibiotics. For a febrile patient with all four Kanavel signs, that is unsafe, and it was not consistent with its consequence node. I rewrote it as a bedside exploration under a digital block before calling the surgeon. That is a partial answer, and it matches the consequence. The feedback adds that this delays antibiotics.

Residual uncertainty: no specific antibiotic is named, which is acceptable for an oral station. lc-p3 "test before anesthetic" is standard teaching, and Forsch supports only the referral half. The s13 lacerations SAMPs already teach that X rays find glass. This case's angle (a return visit with flexor tenosynovitis and disclosure) is new.

## ems-patch-ruptured-aaa

ESVS 2024 confirmed from the full text. Recommendation 72 calls for permissive hypotension with a systolic target of 70 to 90 while the patient is conscious, plasma to red cells near 1:1, instability defined as reduced consciousness or a systolic under 80, and induction only with the surgical team scrubbed and ready. Recommendation 70 calls for prompt CTA. The SVS door to intervention target of under 90 minutes (30, 30, 30) is confirmed. The Ontario Life or Limb Policy confirms no refusal acceptance and the CritiCall role.

Fixes:
- A material error in the PCP fluid directive. The writer took 10 mL/kg, at most 1 000 mL, from the Cardiogenic Shock auxiliary directive. In ALS PCS v5.4, the PCP Intravenous and Fluid Therapy auxiliary directive for hypotension at age 12 or older is 20 mL/kg, reassessed every 250 mL, at most 2 000 mL. It says a bolus should not delay transport. I corrected the c-fluids feedback and the ap-pr1 teaching, and changed the scene consequence to 1 500 mL.
- Bypass grading. The ESVS notes that transfer to a high volume centre can be safe, and US data are mixed. It gives no prehospital bypass recommendation. Partial is a fair grade. I rewrote the feedback to say bypass is used in some systems, and why the nearest emergency department 12 minutes away is still the better answer here. I also removed "an arrest on the highway would be unrecoverable".
- The model answer fluid trigger ("well below 80") did not match the strong choice and the ESVS target. It now reads "250 mL only if he becomes confused or his systolic falls below 70".
- Blood group. Canadian massive hemorrhage practice keeps O negative for females of childbearing potential and uses O positive for older men. "O negative" became "uncrossmatched group O" or "uncrossmatched O positive" in the model answers, the strong choice, the consequences and the rubric. The resources finding still lists both groups.

Residual uncertainty: not every Ontario PCP is authorized for autonomous IV, but the patch states this crew is. A ruptured aneurysm SAMP exists in the ED (s01, "Older man with sudden flank pain"). This case's angle (base hospital patch, destination, handover and interfacility transfer) is new.

## Citations verified

PubMed records checked through NCBI E-utilities (title, first author, journal, year) for every PubMed URL. Full text or primary pages were opened where noted.

- Wong GC, et al. CCS and CAIC STEMI 2019. https://pubmed.ncbi.nlm.nih.gov/30760415/ (record and abstract confirmed. Full text blocked.)
- Byrne RA, et al. ESC ACS 2023. https://doi.org/10.1093/eurheartj/ehad191 (kept on the writer's verification)
- Ibanez B, et al. ESC STEMI 2017. https://doi.org/10.1093/eurheartj/ehx393 (kept on the writer's verification)
- Grines CL, et al. Circulation 2007. https://pubmed.ncbi.nlm.nih.gov/17224480/
- New: Hoffmann-La Roche. TNKase product monograph, revised 21 March 2023. https://pdf.hres.ca/dpd_pm/00069984.PDF (downloaded and read: dose table, contraindications, warnings)
- Li PK, et al. ISPD 2022. https://pubmed.ncbi.nlm.nih.gov/35264029/ (recommendations confirmed from https://www.nephjc.com/news/ispd2022peritonitis)
- Ezekowitz JA, et al. CCS HF 2017. https://pubmed.ncbi.nlm.nih.gov/29111106/
- Rochwerg B, et al. ERS/ATS NIV 2017. https://pubmed.ncbi.nlm.nih.gov/28860265/
- Wang AY, et al. Perit Dial Int 2020. https://pubmed.ncbi.nlm.nih.gov/32063208/
- Chapman T, Ilyas AM. J Hand Microsurg 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6894957/ (full text read)
- Forsch RT, et al. Am Fam Physician 2017. https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html (full text read: one third of foreign bodies missed, meta-analysis on antibiotics, referral for nerve and tendon injury)
- Manthey DE, et al. Ann Emerg Med 1996. https://pubmed.ncbi.nlm.nih.gov/8669741/ (abstract read)
- CMPA. Disclosing harm, version 3, March 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients (page read)
- PHAC. Canadian Immunization Guide, tetanus toxoid, updated June 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html (page read)
- Wanhainen A, et al. ESVS 2024. https://pubmed.ncbi.nlm.nih.gov/38307694/ (full text read from https://arts.units.it/bitstream/11368/3098740/1/PIIS1078588423008894.pdf)
- Chaikof EL, et al. SVS 2018. https://pubmed.ncbi.nlm.nih.gov/29268916/
- Ontario ALS Patient Care Standards v5.4. https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf (downloaded and read: fluid directives and patching)
- Iedema R, et al. IMIST AMBO. BMJ Qual Saf 2012. https://pubmed.ncbi.nlm.nih.gov/22626739/
- Ontario Life or Limb Policy, published 2024, updated 30 October 2025. https://www.ontario.ca/page/ontario-life-or-limb-policy (page read)
- Warren J, et al. Crit Care Med 2004. https://pubmed.ncbi.nlm.nih.gov/14707589/

No URL was removed. All resolve to the right document.

## Needs physician decision

- The STEMI case treats a 2 day old dental extraction as a relative risk that does not stop lysis. No guideline speaks to it directly.
- The EMS bypass choice is graded partial. Some regional systems direct ruptured aneurysms straight to a vascular centre.
- The PD case gives the first antibiotic doses IV before shock. ISPD prefers IP unless there is systemic sepsis, and the case argues that sepsis is already present.
