# Oral realignment, batch03

Batch03 (respiratory and environmental) is now in the CFPC structured oral format, following docs/ORAL_REALIGN_BRIEF.md. Only files in src/cases/batch03/ were edited. Every case now has `durationMinutes: 12`, `reviewed: false` and `version: 2`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch03` gives no output.
- `REALIGN=batch03 CASE_BATCH=batch03 npx vitest run tests/cases.test.ts` gives 83 passed and 10 failed. All 10 failures are the expected "is marked reviewed only if a physician signed it off", one per case. All ten cases were on the September sign-off list.

## Method, applied to every case

- Stem. The opening sentence is the required one. City names were removed. Setting facts the case depends on stayed: resources on site, distances, and CritiCall or Calgary where the nodes use them. The regional hospitals are now called community hospitals. The two teaching hospitals are now tertiary care centres.
- Card. Values come from the old stem vitals. Temperature is given with its route when the old stem gave one. Weight is given as "kg (lb)". Two old stems said "about" a weight, and the card now gives that number without "about". Medications and allergies come from the old findings. Where the case never gave allergies or medications, the card says "Not recorded" (or "Not known" for the arrest). Nothing was made up.
- Findings. The old single history finding was split into history of presenting illness, paramedic or triage handover, past history, medications, and social or collateral history. Triage glucose, GCS and CTAS moved into the handover finding. Every finding holds at least one of the candidate questions from the rubric. The test allows at most 14 findings, and the case spec allows 10 to 18, so each case has 11 to 14.
- Rubric. Every item now has a current `criterion`. Old `approach`, `data` and `diagnosis` rows were checked one by one and moved to the row that fits the behaviour. Leadership, handover, team communication, family updates and disposition moved from `plan` to `process`. Existing items, their points and their `critical` flags are unchanged. The new items are all history items (plus a few physical exam items), none of them critical, and each has a teaching line and a case source.
- Questions. New item ids were added to the question that tests them. Where a question had room (7 points at most), one model answer line was added so the new item has something to score against. No choice, quality, feedback or branch was changed.
- Timing. Only the asthma case was over 720 seconds. Its question times were scaled by 0.96. The other nine were already under 720 and were not changed.

Points below are per row: History, Physical exam and differential diagnosis, Management, and Overall process of care. "Before" maps the old ids the way the engine did (approach to history, data and diagnosis to physical, plan to management).

## 1. near-fatal-asthma

- Stem words: 121 before, 45 after. Community hospital. Respiratory therapist in the department. Anesthesia and ICU in house.
- Card: 37.1°C, 134/minute, 34/minute, 108/64 mmHg, 87% on 8 L/minute by nebulizer mask, 60 kg (132 lb). Medications: salbutamol inhaler as needed. Allergies: none known.
- History moved:
  - hpi: woke at 02:00 unable to breathe, her friend called 911, 3 days of cold symptoms, no new foods or drugs.
  - paramedic: two doses of salbutamol 5 mg and ipratropium 0.5 mg by nebulizer on the way in, the paramedic's quote about single words and closing her eyes, glucose 11.2 mmol/L, CTAS 1.
  - pmh: asthma since childhood, intubated at 19, three ED visits this year.
  - meds: stopped her inhaled steroid last spring because of cost, about two salbutamol inhalers a month, no known allergies.
  - social: vapes cannabis.
- Rows before: 1, 9, 28, 0 (total 38, 23 items). After: 9, 10, 23, 5 (total 47, 26 items). Management is 49 percent and history 19 percent.
- Added: as-h1 (prior intubation, ICU and ED visits, 3 points), as-h2 (controller use, salbutamol use and prehospital doses, 3 points), as-h3 (trigger, anaphylaxis features and vaping, 3 points). as-a4 (excludes pneumothorax) moved from approach to physical.
- Longest path: 750 seconds before, 718 after. Question times are now 115, 58, 86, 115, 86, 86, 86 and 86.
- Citations: no change. GINA 2024 (https://ginasthma.org/wp-content/uploads/2024/05/GINA-2024-Strategy-Report-24_05_22_WMS.pdf), Yang et al. CTS 2021 (https://www.tandfonline.com/doi/full/10.1080/24745332.2021.1945887) and Kew et al. Cochrane 2014 (https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD010909.pub2/full) were all verified.

## 2. hypercapnic-copd-exacerbation

- Stem words: 127 before, 50 after. Community hospital with a respiratory therapist, BiPAP, a 6 bed ICU and an internist on call.
- Card: 37.6°C, 112/minute, 26/minute, 152/88 mmHg, 99% on 15 L/minute by non rebreather mask, 58 kg (128 lb). Medications: tiotropium and olodaterol daily, salbutamol as needed. Allergies: not recorded.
- History moved:
  - hpi: 3 days of cough, breathlessness and green sputum, hard to wake this morning, no chest pain, leg swelling, travel or surgery.
  - paramedic: SpO2 81 percent at home, then a non rebreather at 15 L, the paramedic's quote that he was talking at the house, glucose 6.9 mmol/L, GCS 12 (E3 V4 M5), CTAS 2.
  - pmh: COPD for 9 years, FEV1 34 percent, two admissions last year, no home oxygen.
  - meds: inhalers, no sedatives or opioids at home.
  - social: smokes half a pack a day.
- Rows before: 4, 3, 19, 0 (total 26, 15 items). After: 10, 7, 13, 6 (total 36, 20 items).
- Added: co-h1 (baseline severity, 3 points), co-h2 (trigger, 2), co-h3 (sedatives and smoking, 2), co-h4 (level of consciousness at home and oxygen given, 2), co-h5 (advance directive and stated wishes, 1). co-a1 and co-a3 moved from approach to physical. co-r2 (close NIV monitoring) moved to process as reassessment.
- Longest path: 570 seconds before and after.
- Citations: CMPA changed from "Consent. A guide for Canadian physicians." to "... Fourth edition. 2024.", with a URL. The CMPA page reads "Published: May 2006 / Revised: October 2024", fourth edition. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians
- Verified with no change: GOLD 2024 (https://goldcopd.org/2024-gold-report/), Bourbeau et al. CTS 2023 (https://www.tandfonline.com/doi/full/10.1080/24745332.2023.2231451), Rochwerg et al. ERS/ATS 2017 (https://publications.ersnet.org/content/erj/50/2/1602426), O'Driscoll et al. BTS 2017 (https://kclpure.kcl.ac.uk/portal/en/publications/british-thoracic-society-guideline-for-oxygen-use-in-adults-in-he/) and Leuppi et al. REDUCE, JAMA 2013 (https://research.manchester.ac.uk/en/publications/short-term-vs-conventional-glucocorticoid-therapy-in-acute-exacer/).

## 3. intermediate-risk-pe

- Stem words: 116 before, 49 after. Tertiary care centre with CT, ICU, IR, cardiac surgery and a PE response team.
- Card: 37.4°C, 118/minute, 26/minute, 104/68 mmHg, 89% on room air, 92 kg (203 lb). Medications: ramipril. Allergies: not recorded.
- History moved:
  - hpi: a 16 hour drive from Winnipeg 3 days ago, fainted on the stairs this morning, breathless since, no head injury.
  - collateral: his wife, through the triage nurse, says he was grey and out for about 10 seconds and cannot walk to the bathroom. Glucose 6.2 mmol/L, CTAS 2.
  - pmh: no cancer, surgery, trauma or prior clots, no bleeding, stroke or ulcers.
  - meds: ramipril for blood pressure.
  - social-family: father had a clot in his 60s, nonsmoker.
- Rows before: 1, 9, 19, 0 (total 29, 17 items). After: 9, 9, 15, 4 (total 37, 21 items).
- Added: pe-h1 (VTE risk factors, 3 points), pe-h2 (the faint and collateral, 2), pe-h3 (bleeding risk before anticoagulation, 2), pe-h4 (leg, chest pain and hemoptysis, 1). pe-a5 (checks contraindications to lysis) stays in history.
- Longest path: 570 seconds before and after.
- Citations: the Thrombosis Canada source changed from "Clinical guide on pulmonary embolism treatment." with a home page link to "Pulmonary embolism (PE). Treatment. Clinical guide. 2023." with the guide PDF, which is dated 13 December 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/44_52.pdf
- Verified with no change: Konstantinides et al. ESC 2019, European Heart Journal 2020 (https://pubmed.ncbi.nlm.nih.gov/31473594/) and Meyer et al. PEITHO, NEJM 2014 (https://pubmed.ncbi.nlm.nih.gov/24716681/).

## 4. secondary-pneumothorax-copd

- Stem words: 113 before, 53 after. Community hospital with CT, a respiratory therapist and a respirologist on call. Thoracic surgery is 20 minutes away.
- Card: 36.8°C, 112/minute, 28/minute, 142/86 mmHg, 86% on room air, 64 kg (141 lb). Medications: inhaled triple therapy inhaler. Allergies: not recorded.
- History moved:
  - hpi: a coughing fit 2 hours ago with sharp right chest pain, more breathless since, the triage quote that this is not like his usual flare ups and he cannot lie down, glucose 7.1 mmol/L, CTAS 2.
  - pmh: severe COPD, FEV1 38 percent, a known left apical bulla on CT last year, no prior pneumothorax.
  - meds: triple therapy, no anticoagulants.
  - social: smokes a few cigarettes a day, and his wife has dementia and depends on him.
- Rows before: 2, 8, 16, 0 (total 26, 15 items). After: 10, 10, 10, 6 (total 36, 20 items).
- Added: sp-h1 (onset and change from usual, 3 points), sp-h2 (baseline disease and known bullae, 3), sp-h3 (anticoagulants before the drain, 2), sp-h4 (smoking, 1), sp-h5 (home situation, 1). sp-a1 moved from approach to physical. sp-d1 (admits) moved to process as disposition.
- Longest path: 600 seconds before and after.
- Citations:
  - CMPA gained "Fourth edition. 2024." and the URL, as in case 2.
  - CPSI title corrected from "Being open with patients and families" to "Being open and honest with patients and families", with a URL. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/ and https://psnet.ahrq.gov/issue/canadian-disclosure-guidelines-being-open-and-honest-patients-and-families
  - Verified with no change: Roberts et al. BTS 2023 (https://pubmed.ncbi.nlm.nih.gov/37553157/) and ATLS 10th edition 2018 (https://store.facs.org/atls-student-course-manual-10th-edition).

## 5. massive-hemoptysis

- Stem words: 135 before, 58 after. Community hospital with CT, an anesthetist, a 6 bed ICU and a blood bank. IR and thoracic surgery are 2 hours by land or 45 minutes by air.
- Card: 37.2°C, 108/minute, 26/minute, 118/72 mmHg, 90% on room air, 80 kg (176 lb). Medications: apixaban 5 mg twice daily. Allergies: not recorded.
- History moved:
  - hpi: the nurse's quote about two cups of blood since noon and half a basin in triage, no prior bleed this large, now 13:00, CTAS 2.
  - pmh: stage III squamous cell cancer on chemoradiation, atrial fibrillation, creatinine clearance about 70 mL/min.
  - meds: apixaban 5 mg twice daily, last dose at 07:00. The model answer "last dose 6 hours ago" depends on this finding.
  - social-goals: 40 years of smoking, quit, wants full treatment.
- Rows before: 1, 2, 19, 0 (total 22, 12 items). After: 9, 6, 11, 7 (total 33, 17 items).
- Added: mh-x1 (exam for the bleeding side and source, physical, 2 points), mh-x2 (volume and rate, physical, 2), mh-h1 (anticoagulant, dose, last dose and renal function, 3), mh-h2 (volume, duration and warning bleeds, 2), mh-h3 (cancer and goals, 2). mh-p1 (confirms his wish for full treatment) is now history. mh-m3 (embolization with CT angiogram) is now physical, to give that row a second item.
- Longest path: 510 seconds before and after.
- Citations: no change. Verified: Davidson and Shojaee, Chest 2020 (https://pubmed.ncbi.nlm.nih.gov/31374211/), Wand et al., Chest 2018 (https://journal.chestnet.org/article/S0012-3692(18)32572-8/abstract), and NAC PCC recommendations, revised February 2022 (https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada).

## 6. ludwig-angina-airway

- Stem words: 127 before, 51 after. Community hospital with an anesthetist, ENT and oral surgery on call, an OR, CT and an ICU.
- Card: 38.9°C, 118/minute, 24/minute, 138/82 mmHg, 95% on room air, 96 kg (212 lb). Medications: metformin. Allergies: no known drug allergies.
- History moved:
  - hpi: 4 days of lower left molar pain, neck swelling since last night, cannot swallow saliva, a dentist 5 days ago advised extraction, ibuprofen, last ate 14 hours ago.
  - triage: the nurse's quote about drooling, the hot potato voice and not lying back, glucose 21.4 mmol/L, CTAS 2.
  - pmh: type 2 diabetes, HbA1c 10.8 percent.
  - meds: metformin with missed doses, ibuprofen, no known drug allergies.
  - social: could not afford the extraction.
- Rows before: 2, 2, 20, 0 (total 24, 12 items). After: 9, 6, 14, 6 (total 35, 17 items).
- Added: lu-h1 (airway symptoms and progression, 3 points), lu-h2 (dental source, 2), lu-h3 (diabetes control, 2), lu-h4 (allergies and last meal, 2), lu-x1 (trismus and floor of mouth exam, physical, 2). lu-a2 (airway predictors) moved from approach to physical.
- Longest path: 540 seconds before and after.
- Citations: no change. Verified: Law et al. CAFG Part 2, 2021 (https://pubmed.ncbi.nlm.nih.gov/34105065/), Ahmad et al. DAS awake intubation, 2020 (https://pubmed.ncbi.nlm.nih.gov/31729018/), Ahmad et al. DAS 2025, Br J Anaesth 2026, 136: 283 to 307 (https://www.sciencedirect.com/science/article/pii/S0007091225006932), and Bridwell et al., AJEM 2021 (https://pubmed.ncbi.nlm.nih.gov/33383265/).

## 7. hypothermic-cardiac-arrest

- Stem words: 164 before, 60 after. Community hospital with mechanical CPR and a general surgeon, no bypass or ECMO. The ECLS centre in Calgary is 20 minutes by air or 70 by road.
- Card: temperature 26°C tympanic. Pulse: no pulse, CPR in progress. Resp: no spontaneous breathing, ventilated through a supraglottic airway. BP and O2 sat: not obtainable during CPR. 78 kg (172 lb). Medications and allergies: not known.
- History moved:
  - scene: missing after a solo ski tour, found at 06:30 by a creek with an injured ankle, confused, shivering had stopped, not buried.
  - handover: unresponsive at 07:10, VF, CPR, one shock, now 07:35, supraglottic airway, the flight paramedic's quote.
  - The existing timeline, HOPE and wife findings were kept.
- Rows before: 0, 7, 16, 0 (total 23, 12 items). After: 9, 7, 12, 4 (total 32, 16 items).
- Added: hy-h1 (timeline, witnessed arrest and time to CPR, 3 points), hy-h2 (asphyxia and burial, 3), hy-h3 (shocks, drugs and airway before arrival, 2), hy-h4 (injuries, intoxicants and history, 1).
- Longest path: 510 seconds before and after.
- Citations: no change. Verified: Dow et al. WMS 2019 (https://pubmed.ncbi.nlm.nih.gov/31740369/), Lott et al. ERC 2021 (https://www.sciencedirect.com/science/article/pii/S0300957221000642) and Pasquier et al. HOPE 2018 (https://www.resuscitationjournal.com/article/S0300-9572(18)30094-7/abstract).

## 8. exertional-heat-stroke

- Stem words: 149 before, 60 after. Tertiary care centre on a hot July morning with a humidex of 38. No cooling tub, but ice, a body bag and a tarp.
- Card: 41.8°C rectal, 148/minute, 32/minute, 94/52 mmHg, 96% on room air, 74 kg (163 lb). Medications: none. Allergies: not recorded.
- History moved:
  - hpi: collapsed at kilometre 19, staggered and fought off help, no tub at the tent, a 12 minute drive, the paramedic's quote, glucose 4.6 mmol/L, GCS 11, CTAS 1.
  - pmh-meds, split from the old collateral: no history, no medications, a caffeine pre workout powder, no other drugs or alcohol.
  - The running partner's collateral keeps the stomach bug and fluid intake.
- Rows before: 1, 4, 20, 0 (total 25, 14 items). After: 8, 5, 15, 5 (total 33, 18 items).
- Added: hs-h1 (collapse timeline and time hot, 3 points), hs-h2 (stimulants and supplements, 2), hs-h3 (recent illness, fluids and acclimatization, 2), hs-h4 (history and medications, 1). hs-a2 (differential) moved from approach to physical.
- Longest path: 540 seconds before and after.
- Citations: no change. Verified: Eifling et al. WMS 2024 (https://pubmed.ncbi.nlm.nih.gov/38425235/), Roberts et al. ACSM 2021 (https://pubmed.ncbi.nlm.nih.gov/34524191/) and UK Kidney Association hyperkalaemia guideline, July 2020 (https://ukkidney.org/guidelines/joint-guidelines/treatment-of-acute-hyperkalaemia-in-adults).

## 9. drowning-cottage-lake

- Stem words: 170 before, 55 after. Community hospital with a 6 bed ICU. Transfers through CritiCall Ontario and Ornge. The friend in the waiting room stays in the stem because the second patient depends on it.
- Card: 35.1°C rectal, 124/minute, resp assisted with bag valve mask, 102/60 mmHg, 84% with bag valve mask on 15 L/minute, 78 kg (172 lb) with height 180 cm (needed for predicted body weight). Medications and allergies: not recorded.
- History moved:
  - rescue: the jump at 16:40 after two beers, found after about 4 minutes in 2.5 m of water, bystander CPR for about 6 minutes.
  - paramedic: arrived 17:30, glucose 9.2 mmol/L, GCS 6, CTAS 1, the pink froth quote, and the friend who swam out is in the waiting room.
- Names: the patient and his friend (a second patient) were both named in the stem, findings, three say nodes, one prompt and the end node. All are now "he", "his friend" or "the friend". The q-friend prompt now says the friend swam out to help, because that fact left the stem.
- Rows before: 1, 2, 17, 0 (total 20, 12 items). After: 9, 6, 10, 7 (total 32, 18 items).
- Added: dr-x1 (injury, aspiration and temperature exam, physical, 2 points), dr-x2 (reassesses the friend, physical, 2), dr-h1 (submersion timeline, 3), dr-h2 (mechanism, 2), dr-h3 (alcohol, swimming ability and history, 2), dr-h4 (the friend's own submersion and symptoms, 1). dr-a2 (spinal motion restriction by mechanism) stays in history.
- Longest path: 510 seconds before and after.
- Citations:
  - Replaced "Heart and Stroke Foundation of Canada. Guidelines for CPR and emergency cardiovascular care. Post cardiac arrest care." It had no year. Heart and Stroke released its 2025 Canadian guidelines on 22 October 2025, but I could not find a separate post arrest document to cite by title. It is now "Hirsch KG, et al. Part 11. Post cardiac arrest care. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025." The source id changed from hsf to aha, and dr-m3 and dr-d2 were repointed. https://pubmed.ncbi.nlm.nih.gov/41122894/ and https://www.heartandstroke.ca/what-we-do/media-centre/news-releases/new-cpr-guidelines-for-canada-released
  - Verified with no change: Davis et al. WMS 2024 (https://journals.sagepub.com/doi/10.1177/10806032241227460) and Szpilman et al., NEJM 2012 (https://www.nejm.org/doi/abs/10.1056/NEJMra1013317).

## 10. carbon-monoxide-family

- Stem words: 187 before, 60 after. Community hospital with an obstetrician and co oximetry. The hyperbaric unit is in Toronto, an hour by air.
- Card: 36.9°C, 112/minute, 22/minute, 116/70 mmHg, 99% (non rebreather mask removed at the door). No weight was given. Medications and allergies: not recorded.
- History moved:
  - hpi: two days of morning headaches and nausea in all three, the furnace on for the first time on the first cold October morning, a 30 second faint an hour ago.
  - paramedic: non rebreather, whole family brought in, the quote about the 99 percent sats and the fire department, glucose 5.8 mmol/L, GCS 14, CTAS 2.
- Names: the patient, her husband and her daughter were named. The husband and daughter are also patients. Two finding labels and seven node strings now use "the patient", "her", "her husband" and "her daughter".
- Rows before: 2, 6, 14, 0 (total 22, 12 items). After: 11, 8, 8, 6 (total 33, 17 items).
- Added: cm-h1 (exposure history, 3 points), cm-h2 (faint and neurological symptoms, 2), cm-h3 (fire or smoke for cyanide, 2), cm-h4 (pregnancy symptoms, 2), cm-x1 (neurological exam with memory and gait, physical, 2). cm-a1 (suspects CO from a clustered household) stays in history. cm-d1 (no return home, critical) moved to process as disposition.
- Longest path: 450 seconds before and after.
- Citations:
  - The Ontario statute gained its chapter number "S.O. 2013, c. 14" and the Legislative Assembly URL. https://www.ola.org/en/legislative-business/bills/parliament-40/session-2/bill-77
  - Verified with no change: Wolf et al. ACEP 2017, Ann Emerg Med 69(1): 98 to 107 (https://pubmed.ncbi.nlm.nih.gov/27993310/), Weaver et al., NEJM 2002 (https://www.nejm.org/doi/full/10.1056/NEJMoa013121) and UHMS indications manual, 15th edition 2023 (https://uhms.org/images/indications/UHMS%20Indications%2015th%20Ed%20Front%20Matter%20and%20References.pdf).

## Needs physician decision

1. Allergies and medications the old cases never gave. The card says "Not recorded" or "Not known" in 8 of 10 cases. Please supply real values or accept the wording.
2. Hypothermic arrest card. The card shows the unreliable tympanic 26°C so that the esophageal 24.1°C stays a finding the candidate must ask for. Pulse, BP and O2 sat are written as not obtainable during CPR. Please confirm this suits an arrest card.
3. Asthma card. It lists only salbutamol. The stopped inhaled steroid is left for the candidate to find in history. Management is at 49 percent, just under the cap.
4. Massive hemoptysis. The nodes use CritiCall Ontario and Ornge, but the 60 word limit left no room to put Ontario in the stem. Consider adding the province to the opening node.
5. New model answer lines. One history or exam line was added to 17 questions so the new rubric items can be scored. Please review them with the new items.
6. New teaching lines make standard claims that need a check. Examples are hs-h4 (drugs that impair heat loss) and cm-h3 (hydroxocobalamin if there was smoke).
7. Drowning source. The post arrest items now cite the 2025 AHA Part 11, which is American. If you prefer the Heart and Stroke 2025 Canadian guideline, please give the exact document title. dr-d2 (structured handover) is only loosely supported by a post arrest guideline.
8. ACEP has since published a newer clinical policy on CO poisoning in Annals of Emergency Medicine (https://www.annemergmed.com/article/S0196-0644(24)01264-2/fulltext). The 2017 citation is real and was kept. Consider updating to the newer one.
9. The case spec says 10 to 18 findings but tests/cases.test.ts allows at most 14. All cases here have 11 to 14, which fits both.
