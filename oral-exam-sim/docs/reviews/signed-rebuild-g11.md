# Signed-duplicate rebuild, group g11

Files: `src/samps/s10/eye.ts`, `src/samps/s10/first-trimester-bleeding.ts`, `src/samps/s13/lacerations.ts`, `src/samps/s13/multiple-patients.ts`. Nine SAMPs rebuilt. Each keeps its id, topic, question count, question kinds and key features in order. Each is now `reviewed: false` and version 2. All nine are held back in `src/samps/held-back/g11.json`.

No other SAMP in these files changed. A block by block comparison with HEAD confirms the other 51 SAMPs are identical. Four source constants used only by the old texts were removed (acr-gca, green-ketamine, salt and eddleston-op). New sources were added. No new SAMP cites Tintinalli.

Checks: `SAMP_BATCH=s10 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 482 passed. `SAMP_BATCH=s13 ...` gives 464 passed. `npx tsc --noEmit -p .` is clean. Single-question key positions were kept where they were (ftb-15 q2 at 3 and q4 at 4, lac-05 q4 at 1, lac-08 q1 at 2, mp-06 q3 at 2). Two moved: lac-03 q3 from 0 to 4 and lac-04 q2 from 1 to 2. The batch balance gates still pass.

Duplicate checks: simcheck runs on digest3, which still holds the old texts, so an old version of a sibling id can appear in the list. Decision search covered `scratchpad/allkeys.tsv` and a final grep of `src/samps` for every new story term, run after the other writers' changes (abdominal-pain-08 and ems-12 were already rebuilt and do not overlap).

## Rebuilds

### eye-07 (cluster 60, keeper headache-08)

- Old story: a 77-year-old woman with giant cell arteritis and visual loss. It keyed high dose steroids, biopsy and urgent ophthalmology.
- New story: a 63-year-old man with hypertension and diabetes who wakes with an inferior field defect. Tadalafil the night before, snoring with apneas, bedtime antihypertensives and semaglutide. The disc is swollen and hyperemic, the other disc is crowded, ESR and CRP are normal. The diagnosis is nonarteritic anterior ischemic optic neuropathy.
- Keyed decisions:
  - q1 (eye 2): history for NAION risk factors and for arteritis. This covers PDE5 inhibitors, sleep apnea, nocturnal hypotension, semaglutide, amiodarone, arteritic symptoms and other causes of visual loss.
  - q2 (headache 4): the findings and tests that allow steroids to be withheld. These are no cranial or polymyalgic symptoms, normal ESR, CRP and platelets, a hyperemic rather than chalky disc, a crowded fellow disc and normal temporal arteries.
  - q3 (eye 2): no steroids, urgent ophthalmology, fields and imaging, baseline documentation. High dose steroids are marked unacceptable.
  - q4 (eye 2): stop semaglutide with his prescriber, stop tadalafil, sleep study, review bedtime dosing, return advice.
- Sources: AAO EyeWiki NAION, updated 2026 (opened). EMA PRAC statement on semaglutide and NAION, 6 June 2025 (opened). Mackie et al. BSR giant cell arteritis guideline 2020 (opened, symptom list quoted).
- Simcheck top 5: headache-08 0.37, eye-08 0.36, eye-20 0.24, headache-20 0.22, eye-27 0.20.
- Decision search: NAION, semaglutide, sleep study and "withhold steroids" are keyed nowhere. eye-08 q3 and headache-08 q1 key the list of arteritic symptoms. Here those symptoms appear as one accepted item in q1 and as negatives in q2, where the decision is to withhold steroids.

### first-trimester-bleeding-02 (cluster 4, keeper first-trimester-bleeding-01)

- Old story: a 22-year-old with the "worst period of her life", orthostatic, and a ruptured ectopic at an hCG of 680. It keyed shock signs, a pregnancy test, gynecology and blood, and the limits of hCG.
- New story: a 26-year-old marathon runner who collapses after a 20 km run and is labelled exertional dehydration. Her resting heart rate is 46, so a pulse of 96 is relative tachycardia. Her dilute triage urine test (specific gravity 1.002) is falsely negative. Serum hCG is 190 IU/L with pelvic free fluid and an empty uterus. She is not in frank shock.
- Keyed decisions:
  - q1 (FTB 1): relative tachycardia against her own baseline, orthostatic rise of 32, persistent symptoms after stopping and drinking 2 L, narrow pulse pressure, pallor.
  - q2 (FTB 2): serum hCG after a negative dilute urine test. Accepting the urine result is dangerous. A morning urine repeat is unacceptable.
  - q3 (FTB 2): gynecology in the department, formal transvaginal ultrasound, group and screen, CBC, IV access, monitoring, nothing by mouth. Discharge is dangerous. No massive hemorrhage protocol or uncrossmatched blood, which were the cluster's repeated key.
  - q4 (FTB 4): why a low hCG does not exclude a bleeding ectopic.
- Sources: NICE NG126 section 1.4, updated 2026 (opened). Ikomi et al. Br J Obstet Gynaecol 1998 (abstract read). Sheele et al. Case Rep Emerg Med 2016 (full text read).
- Simcheck top 5: old first-trimester-bleeding-15 0.25, first-trimester-bleeding-21 0.24, first-trimester-bleeding-13 0.24, first-trimester-bleeding-03 0.20, first-trimester-bleeding-27 0.20.
- Decision search: "serum hCG", "dilute" urine and "resting rate" or relative tachycardia are keyed nowhere else in the bank. Orthostatic change is literal KF 1 wording (decision D1) and is keyed in first-trimester-bleeding-29 and others. The q4 teaching on low hCG repeats the old ftb-02 q4, which no longer exists. It is literal KF 4 wording.

### first-trimester-bleeding-15 (cluster 4, keeper first-trimester-bleeding-01)

- Old story: a 16-year-old who fainted at school with a ruptured ectopic and hepatorenal fluid. It keyed shock signs, a pregnancy test, stat gynecology and blood, and Rh.
- New story: a 33-year-old with a mechanical mitral valve on warfarin 4 mg daily in pregnancy, INR 4.6, 12 weeks and 4 days with no scan yet, heavy bleeding and orthostatic change. The scan shows an empty uterus with blood in the cavity and no free fluid.
- Keyed decisions:
  - q1 (FTB 1): pad count and clots, orthostatic pulse and pressure change, resting pulse, pallor, the high INR.
  - q2 (FTB 2, single, key 3): bedside pelvic ultrasound now to locate the pregnancy.
  - q3 (FTB 2): manage as a pregnancy of unknown location, not a complete miscarriage. Gynecology, serial hCG, transvaginal scan, heart team and hematology, hold tonight's warfarin, PCC only if bleeding becomes life threatening, crossmatch. Reflex full reversal with vitamin K 10 mg is unacceptable.
  - q4 (FTB 5, single, key 4): Rh immune globulin 300 mcg within 72 hours without waiting for the pregnancy to be located. Distractors are deferral, Kleihauer Betke, omission because of anticoagulation and 120 mcg.
- Sources: NICE NG126 section 1.4 (opened). ESC 2025 guidelines on cardiovascular disease and pregnancy (full PDF read, sections 4.5.6.2 and Table 10). SOGC Guideline No. 448, 2024 (recommendations 8 to 10 read).
- Simcheck top 5: first-trimester-bleeding-29 0.33, first-trimester-bleeding-03 0.32, old first-trimester-bleeding-02 0.31, first-trimester-bleeding-10 0.26, first-trimester-bleeding-37 0.24.
- Decision search: no FTB SAMP involves a mechanical valve, warfarin or PCC. PCC is keyed in cva-14, gi-bleed-03 and others for nonpregnant patients. Pregnancy of unknown location is keyed in first-trimester-bleeding-03 and 10 as a diagnosis, not with an anticoagulation plan. 300 mcg after 12 weeks is keyed in ftb-31, 37 and 38. The new twist is not waiting for the location. It is literal KF 5 wording.

### lacerations-03 (cluster 68, keeper msk-09)

- Old story: a clenched fist injury over the fourth MCP joint. It keyed fist position exploration, amoxicillin clavulanate and leaving the wound open.
- New story: a 7-year-old bitten on the forearm by a German shepherd that held on and shook. Two punctures sit over a nondisplaced radial shaft fracture with soft tissue gas.
- Keyed decisions:
  - q1 (lac 1): large dog, hold and shake crush mechanism, punctures, bone tenderness, swelling.
  - q2 (msk 6): punctures directly over the fracture and gas beside it make it an open fracture.
  - q3 (lac 4, single, key 4): piperacillin tazobactam IV. Distractors are cefazolin, cloxacillin, clindamycin and oral amoxicillin clavulanate.
  - q4 (msk 7): same-day orthopedics for operative irrigation and debridement, admission, splint, neurovascular checks, punctures left open.
- Sources: IDSA SSTI guideline 2014 (animal bite section read). Garcia-Lopez et al. JPOSNA 2021 current concept review of pediatric open fracture antibiotics (read).
- Simcheck top 5: lacerations-02 0.24, lacerations-23 0.23, infectious-diseases-38 0.17, msk-11 0.14, lacerations-15 0.15.
- Decision search: "open fracture" is keyed only in msk-08 and msk-10, neither a bite. Closest decision: lacerations-12 q4 lists piperacillin tazobactam as an example of IV bite coverage for cat bite flexor tenosynovitis. Here it is the single best answer for a bite over an open fracture in a child.

### lacerations-04 (cluster 66, keeper infectious-diseases-09)

- Old story: bat contact at an Ontario cottage with no visible wound. It keyed immune globulin with vaccine and a fifth dose for prednisone.
- New story: a 52-year-old bitten on the hand by a temple macaque in Bali 4 days ago. She rinsed with bottled water. A Bali clinic gave one dose of Vero cell rabies vaccine without immune globulin. She has left arm lymphedema after breast cancer surgery.
- Keyed decisions:
  - q1 (lac 1): broken skin, mucosal splash, how the wound was washed, the monkey's behaviour, the vaccine product and route given abroad, tetanus.
  - q2 (ID 10, single, key 2): valacyclovir 1 g PO every 8 hours for 14 days for B virus.
  - q3 (ID 10): rabies immune globulin 20 IU/kg (1280 IU) today because it is within 7 days of the first vaccine dose, infiltrated into the wounds. The series continues with a dose today and on days 7 and 14. Restarting the series or omitting immune globulin is unacceptable.
  - q4 (ID 3): lymphedema of the bitten arm plus a hand wound means amoxicillin clavulanate for 3 to 5 days, review in 1 to 2 days, elevation, return advice, vaccine in the other arm.
- Sources: CDC Yellow Book 2026, zoonotic exposures (read). CDC B virus patient care page, reviewed 2026 (read). Canadian Immunization Guide rabies chapter, updated 2026 (read). IDSA SSTI 2014 (read).
- Simcheck top 5: infectious-diseases-38 0.29, infectious-diseases-09 0.26, lacerations-15 0.26, lacerations-02 0.18, lacerations-17 0.05.
- Decision search: B virus and valacyclovir for a monkey bite are keyed nowhere. "Within 7 days" for immune globulin after a series started abroad is keyed nowhere. infectious-diseases-38 keys immune globulin with vaccine for an unvaccinated traveller bitten by a dog, and infectious-diseases-09 keys the standard doses. A first draft used asplenia as the host factor, but lacerations-12 already keys asplenia after a splenectomy for a car crash, so it was replaced with lymphedema.

### lacerations-05 (cluster 28, keeper analgesia-sedation-08)

- Old story: a 4-year-old with a lip laceration and laryngospasm after ketamine 27 mg.
- New story: a 10-year-old who fell off a scooter with a deep cheek laceration over the parotid duct line. Repair under 50% nitrous oxide.
- Keyed decisions:
  - q1 (lac 2): parotid duct injury (saliva, saline through the papilla), buccal branch and other facial nerve branches before local anaesthetic, gland, intraoral extension.
  - q2 (analgesia 2): preparation, distraction, a parent present, buffered warmed slowly injected lidocaine, nitrous oxide or intranasal midazolam.
  - q3 (analgesia 5): nitrous oxide contraindications to screen for: URI or blocked nose, ear disease or recent ENT surgery, head injury, B12 disorders, chronic lung disease, recent retinal surgery, airway and cooperation.
  - q4 (analgesia 2, single, key 1): buffering with sodium bicarbonate reduces injection pain most.
  - q5 (analgesia 6): continuous observation, 100% oxygen for 5 minutes after stopping, return to baseline, nausea, wound and salivary leak advice.
- Sources: Awana et al. Ann Maxillofac Surg 2015 (read). CPS position statement on procedural pain and distress, Trottier et al. 2019, updated 2025 (read). AAPD best practices on nitrous oxide, 2025 (read).
- Simcheck top 5: lacerations-14 0.15, analgesia-sedation-46 0.14, analgesia-sedation-31 0.15, lacerations-08 (old) 0.13, lacerations-16 0.06.
- Decision search: nitrous oxide is keyed nowhere. Parotid duct appears once, as one accepted item in lacerations-14 q3 (dog bite to the lid and cheek). Buffering appears in analgesia-sedation-31 q2 as an accepted item.

### lacerations-08 (cluster 27, keeper analgesia-sedation-04)

- Old story: a woman with glass lacerations given too much infiltrated lidocaine, who seizes. It keyed the maximum lidocaine volume and lipid emulsion.
- New story: a 3-year-old off a balance bike with a clean shin laceration and a separate gritty thigh abrasion. A student spreads 6 mL of LET gel over the abrasion under plastic film and he seizes.
- Keyed decisions:
  - q1 (analgesia 2, single, key 2): LET gel into the laceration only. Topical creams on the open abrasion and LET over both wounds are distractors.
  - q2 (analgesia 2): intranasal fentanyl, oral analgesia, lidocaine within a total dose that counts the LET, sedation, distraction.
  - q3 (tox 4): remove the film and wash off the gel, benzodiazepine, airway, lipid emulsion if severe, monitoring, help, observe at least 2 hours after the seizure. Lidocaine for a dysrhythmia is dangerous.
  - q4 (lac 3): irrigation, exploration, scrub out the grit now to prevent traumatic tattoo, imaging for a suspected retained fragment, tetanus.
- Sources: CPS procedural pain statement 2019, updated 2025 (read). ASRA LAST checklist 2020 version (PDF read). Forsch et al. Am Fam Physician 2017 (read).
- Simcheck top 5: analgesia-sedation-04 0.17, analgesia-sedation-43 0.16, analgesia-sedation-31 0.08, burns-09 0.10, burns-27 0.11.
- Decision search: LET gel appears only as an accepted item in the old lacerations-08. Traumatic tattoo and grit are keyed nowhere. Lipid emulsion is keyed in analgesia-sedation-04, 07, seizures-04, shock-11 and tox-03. Here it is one accepted item. The distinct decision is removing the topical source.

### multiple-patients-06 (cluster 55, keeper ems-13)

- Old story: farm workers sprayed with an organophosphate. It keyed decontamination, PPE and doubling atropine.
- New story: eleven workers at a meat plant ill after soup seasoned from an unlabelled white powder near the curing room. Sodium nitrite methemoglobinemia, saturations near 85% on oxygen, two collapsed, two physicians on shift.
- Keyed decisions:
  - q1 (multiple patients 4): mass casualty plan, check methylene blue stock and get more through regional sharing, poison centre, co-oximetry, staff, space, public health.
  - q2 (ems 4): do not triage by saturation, triage by mental status and perfusion, oxygen, the two collapsed first, bring the powder and soup, spread mild cases.
  - q3 (tox 2, single, key 2): which of five workers gets the only dose of methylene blue. The drowsy, confused worker at 38% is keyed. An asymptomatic worker at 24% is a distractor.
  - q4 (multiple patients 1): features that set top priority.
- Sources: Ontario Poison Centre antidote stocking guideline, May 2025 (PDF read). CDC MMWR, sodium nitrite, New York 2002 (read). Iolascon et al. EHA and EuroBloodNet methemoglobinemia recommendations 2021 (summary read).
- Simcheck top 5: tox-36 0.22, ems-13 0.17, ems-15 0.16, ems-27 0.16, multiple-patients-03 0.13.
- Decision search: methylene blue is keyed in tox-04 (choice) and tox-36 (choice for benzocaine). Selecting who gets a scarce dose and antidote stocking are keyed nowhere. "Do not rely on pulse oximetry" appears in ems-15 q1 for carbon monoxide. The suggested direction (arena carbon monoxide) was not used because ems-15 already keys a multi-patient carbon monoxide event.

### multiple-patients-15 (cluster 19, keeper multiple-patients-03)

- Old story: a 30-vehicle highway pileup in a snowstorm. It keyed the pre-arrival report, distribution and Code Orange.
- New story: a crowd crush at a sold-out arena concert with a mostly teenage audience. Eleven are not breathing and dozens have chest and breathing problems.
- Keyed decisions:
  - q1 (ems 1): numbers by category, number not breathing, how long people were pinned, injury pattern, minors without parents, arrival times, destinations, hazards, callback.
  - q2 (ems 4): open the airway (2 rescue breaths for a child). Anyone still not breathing is triaged dead without prolonged CPR. SALT immediate criteria, recovery position and oxygen, reassessment, spreading patients.
  - q3 (multiple patients 4): family support and reunification centre, a safe area for unaccompanied minors, security at controlled entrances, a shared patient list, a media spokesperson, extra staff including behavioural health, surge discharges.
- Sources: Chang et al. Cureus 2024, Itaewon crowd crush (read). CHEMM SALT triage page, updated 2026 (read). ASPR TRACIE hospital MCI response plan considerations, 2024 (PDF read).
- Simcheck top 5: ems-12 (old bus crash text) 0.28, multiple-patients-03 0.19, ems-15 0.17, multiple-patients-28 0.18, ems-27 0.12.
- Decision search: reunification and unaccompanied minors are keyed nowhere. Rescue breaths are keyed in ems-12 (old) and multiple-patients-03 as "5 rescue breaths then red" under JumpSTART. Here the decision is to declare dead without prolonged CPR. Security is keyed in multiple-patients-13 for a shooting. Code Orange is one accepted item here and the key in multiple-patients-03.

## For the physician

- All nine are new texts and need your sign-off before they return to the release. They are held back in `src/samps/held-back/g11.json`.
- eye-07 q4 relies on the EMA 2025 conclusion on semaglutide and NAION. I found no Health Canada product monograph change to cite. Please confirm you are comfortable keying "contact the prescriber about stopping semaglutide".
- eye-07 q3 accepts "urgent ophthalmology review" without a set time frame.
- first-trimester-bleeding-02 uses a false negative urine test in dilute urine. The evidence is a 1998 prospective study and a 2016 case report. SOGC Guideline No. 414 was only available as an abstract.
- first-trimester-bleeding-15 applies the ESC 2025 advice on 4 factor PCC, written for urgent delivery, to bleeding in early pregnancy. It keys "PCC only if bleeding becomes life threatening" and "hold tonight's warfarin". Please check this fits your practice for a mechanical mitral valve at INR 4.6.
- lacerations-03 keys piperacillin tazobactam IV for a dog bite over an open fracture in a child. Ceftriaxone with metronidazole, also an IDSA option, was left out of the options so that only one answer is defensible. Ampicillin sulbactam is not offered.
- lacerations-04 keys B virus prophylaxis for a temple macaque bite from CDC guidance written mainly for occupational exposures. The CDC Yellow Book says travellers bitten by monkeys should be evaluated for it. The vaccine in the other arm with lymphedema is an accepted item, not a required one.
- lacerations-05 uses the AAPD nitrous oxide statement, which is written for dental care, for its contraindication list. The CPS statement supports 50% nitrous oxide in the emergency department.
- lacerations-08 keys "LET into the laceration only". The CPS lists LET as contraindicated in large, deep or contaminated wounds. I found no authoritative maximum LET volume in mL/kg, so no dose threshold is keyed.
- multiple-patients-06 q3 applies EHA thresholds (treat symptomatic patients at 10% to 30%, monitor minimally symptomatic ones) to choose who gets a single scarce dose. The keyed patient is the only one with altered mental status.
- multiple-patients-15 q2 keys SALT "dead" for a patient who does not breathe after airway opening, rather than prolonged CPR. Please confirm this matches the triage system your region uses.
