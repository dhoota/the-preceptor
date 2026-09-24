# Batch c04 writer report

Five case studies, 30 items. Every item and case has `reviewed: false` and `canada: ""`. `BATCH=c04 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p . 2>&1 | grep bank/c04` prints nothing.

Files: `src/bank/c04/helpers.ts`, `case1.ts` to `case5.ts`, `index.ts`.

## Cases

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c04-1 | Pediatric unit | Boy, 4 months, RSV bronchiolitis with poor feeding | Moderate |
| rn-c04-2 | Mental health unit, then medical unit | Woman, 42, bipolar I disorder with lithium toxicity and suicide risk | High |
| rn-c04-3 | Surgical unit | Woman, 46, hypocalcemia on the night of a total thyroidectomy | Moderate to high |
| rn-c04-4 | Labor and birth unit | Woman, 27, G1 at 34 weeks, preeclampsia with severe features, then magnesium toxicity | High |
| rn-c04-5 | Home health | Man, 71, COPD after discharge, home oxygen, smoking | Low to moderate |

## Counts

Client Needs: MOC 6, SIPC 3, HPM 3, PSY 3, BCC 3, PPT 5, RRP 3, PA 4. This matches the plan.

| Need | Items |
|---|---|
| MOC | 1-3, 3-3, 3-6, 4-3, 5-3, 5-5 |
| SIPC | 1-5, 4-4, 5-1 |
| HPM | 1-6, 5-2, 5-6 |
| PSY | 2-4, 2-5, 2-6 |
| BCC | 1-4, 3-4, 5-4 |
| PPT | 2-1, 2-3, 3-5, 4-5, 4-6 |
| RRP | 2-2, 3-2, 4-2 |
| PA | 1-1, 1-2, 3-1, 4-1 |

Item types: matrix 8 (all single mode), sata 5, mc 5, highlight 4, cloze 4, dnd 3, msn 1. Each case uses 5 or 6 types.

Rationale scoring: dyads in rn-c04-1-3 (cloze), rn-c04-4-3 (dnd) and rn-c04-5-3 (dnd). One triad in rn-c04-2-3 (cloze). Other cloze and dnd items use zero-one scoring.

CJMM steps: each case walks the six steps in order, so there are 5 items per step.

Difficulty: level 2 has 6 items, level 3 has 18 and level 4 has 6.

Calculations: rn-c04-3-5 (calcium gluconate 15 mL) and rn-c04-4-5 (magnesium loading dose 200 mL/hour). Both carry `calc` blocks. The options run low to high.

## MC key positions

Position 1: 1 (rn-c04-5-5). Position 2: 1 (rn-c04-1-5). Position 3: 2 (rn-c04-3-5, rn-c04-4-5). Position 4: 1 (rn-c04-2-5).

## Sources and verification

- Ralston SL et al. AAP Clinical Practice Guideline: Bronchiolitis. Pediatrics 134(5):e1474, 2014. Checked the key action statements in the full text: no albuterol, no chest physiotherapy, oxygen may be withheld above 90%, NG or IV fluids when oral intake fails, hand hygiene, tobacco smoke counseling, smoke lingering on clothes, and the suctioning discussion (nasal suction may give short relief, deep suction linked to longer stays). https://www.stanfordchildrens.org/content/dam/sch/content-public/pdf/aap-bronchiolitis-practice-guidelines.pdf
- AHA PALS Provider Manual, 2020. Awake infant heart rate 100 to 190/minute and infant respiratory rate 30 to 53/minute, checked through a table sourced to AHA PALS 2020. https://media.api.sf.gov/documents/EMSA-Protocol-14.1-Pediatric-Vital-Signs-Final-10.1.25.pdf
- Hockenberry MJ et al. Wong's Nursing Care of Infants and Children, 12th edition, 2023. Textbook, as used in c01.
- Siegel JD et al. HICPAC 2007 Isolation Guideline, Appendix A. RSV: contact plus standard precautions for the duration of illness, mask per standard precautions. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- Lithium Carbonate Tablets label (West-Ward), revised October 2022, on DailyMed. Target 0.8 to 1.2 mEq/L acute, toxicity at 1.5 mEq/L or more, mild, moderate and severe neurologic signs (ataxia, slurred speech, clonus, seizure), sodium depletion, dehydration, NSAIDs and thiazides raising levels, level drawn 12 hours after the last dose. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d20ed2aa-aa56-4709-9e7a-9243c71465c9&type=display
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition. Edition confirmed by ISBN 9780323697071. https://openlibrary.org/isbn/9780323697071
- Orloff LA et al. ATA Statement on Postoperative Hypoparathyroidism. Thyroid 28(7):830, 2018. PTH below 15 pg/mL signals raised risk. https://pubmed.ncbi.nlm.nih.gov/29848235/
- Calcium Gluconate Injection label (Fresenius Kabi), PI revised 6/2023. 100 mg/mL, adult bolus 1000 to 2000 mg, dilute to 10 to 50 mg/mL, no faster than 200 mg/minute, ECG monitoring, tissue necrosis with leakage. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8b77c3d2-992d-4261-8421-9cfd07328fbf&type=display
- Hinkle JL et al. Brunner and Suddarth's, 15th edition. Textbook, as used in c01.
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- ACOG Practice Bulletin No. 222, Obstet Gynecol 135(6):e237, 2020. Read in full text: Box 3 severe features, proteinuria ratio 0.3, magnesium 4 to 6 g over 20 to 30 minutes then 1 to 2 g/hour, stop the infusion above 9.6 mg/dL, calcium gluconate for toxicity, urine output monitoring. https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf
- Magnesium Sulfate in Water for Injection label (Hospira) on DailyMed. The 4 g/100 mL bag exists. The rate generally does not exceed 150 mg/minute. A present patellar reflex and respirations of about 16/minute or more show safe dosing. Urine output should stay at 100 mL every 4 hours. Low doses cause flushing and sweating. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=22ca78b4-f5a3-4144-cf89-5f633acf1e6d&type=display
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023. Textbook, as used in c01.
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. The list year was confirmed at https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings
- GOLD 2026 Report, PDF dated December 2025. https://goldcopd.org/2026-gold-report/
- NFPA Medical Oxygen Safety tip sheet, 2016. No smoking in the home with oxygen, keep equipment at least five feet from heat sources, keep oil and grease away, post signs. https://www.nfpa.org/downloadable-resources/safety-tip-sheets/medical-oxygen-safety-tip-sheet
- Prochaska JO, DiClemente CC, Norcross JC. Am Psychol 47(9):1102, 1992. The five stages, including preparation. https://pubmed.ncbi.nlm.nih.gov/1329589/
- Krist AH et al. USPSTF tobacco cessation recommendation. JAMA 325(3):265, 2021. https://pubmed.ncbi.nlm.nih.gov/33464343/
- Nicotine Transdermal System Drug Facts (Rugby) on DailyMed, revised 2026. Start on the quit day, one new patch every 24 hours on clean, dry, hairless skin at a new site, remove at bedtime for vivid dreams, one patch at a time, fold used patches. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ae406389-0f83-d5c8-bd2f-56075e57453a&type=display
- Patient Self-Determination Act, OBRA 1990. Home health agencies must give written advance directive information. Implemented at 42 CFR 489.102. https://www.law.cornell.edu/cfr/text/42/489.102

## For the reviewer

- rn-c04-4-5 uses a 30 minute loading dose on purpose. The Hospira label advises an IV rate generally no faster than 150 mg/minute. A 4 g dose over 20 minutes would run at 200 mg/minute. ACOG allows 20 to 30 minutes.
- rn-c04-4-5 says magnesium sulfate is a high-alert medication. The ISMP acute care list names magnesium sulfate injection. Checked at https://www.ismp.org/sites/default/files/attachments/2018-01/highalertmedications(1).pdf and https://www.nursingworld.org/globalassets/practiceandpolicy/innovation--evidence/high-alert-medications-list.pdf
- rn-c04-1-5 keys contact precautions from the CDC 2007 Appendix A. Some hospitals use droplet plus contact precautions for RSV. A reviewer may want the stem to say "according to CDC guidance".
- The AAP bronchiolitis guideline dates from 2014. A search in September 2026 found no newer AAP bronchiolitis guideline. It is still the one cited in current literature. A reviewer may still want to check for a formal reaffirmation.
- rn-c04-1-4 keys gentle nasal suction before feeds. The AAP guideline finds too little evidence to recommend for or against suctioning. It notes short relief from nasal suction and harm from deep suction. The key rests on that and on Wong's.
- rn-c04-1-3, 3-3, 4-3 and 5-3 are prioritize items tagged MOC under establishing priorities. Their content is clinical. A reviewer could retag some as PA or RRP, but the batch totals would then need rebalancing.
- rn-c04-2-6 teaches that a sudden calm after days of hopelessness is a warning sign. The source is Varcarolis. I did not check the page itself.
- rn-c04-3-4 comfort measures (neck support, raised head, voice rest, items within reach) come from Brunner and Suddarth as I recall it. I did not check the page itself.
- rn-c04-5-4 nutrition measures (rest before meals, oxygen during meals, small frequent meals, fluids between meals) come from Brunner and GOLD as I recall them. I did not check the pages themselves.
- Lab reference ranges in the tabs have no units, because the unit gate asks for SI pairs on every bare mg/dL value inside an item tab. The result column gives the unit.
- The prescriptions, doses and lab values in all five cases are invented for the scenarios. None comes from a published case.
- A file `src/bank/c04/extra.ts` was in the folder at the retry. Nothing imported it. Its ids (rn-c04-8, rn-c04-9) do not fit the case scheme. It also had clinical errors. It named protamine as the reversal agent for magnesium, which is wrong. The antidote is calcium gluconate. It also called sodium polystyrene sulfonate too fast to be safe. I deleted the file. No bank item came from it.

## Rework

Cases 2, 3 and 4 repeated scenarios that batch c02 already covers: lithium toxicity, low calcium after thyroidectomy and preeclampsia on magnesium. I replaced all three with the scenarios `docs/topic-plan.json` assigns to c04. Cases 1 and 5 are unchanged. Case ids and item ids stay in place. 18 items were replaced. No `extra.ts` was in the folder at this rework. `BATCH=c04 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p . 2>&1 | grep bank/c04` prints nothing.

The earlier tables above describe the first version. The tables here replace them for cases 2 to 4.

### New cases

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c04-2 | Medical unit | Man, 76, acute kidney injury after 3 days of vomiting and diarrhea, potassium 6.8 mEq/L on an ACE inhibitor, spironolactone, a potassium supplement and ibuprofen | High |
| rn-c04-3 | Emergency department | Woman, 67, new atrial fibrillation at 146/minute with lightheadedness, IV diltiazem | Moderate to high |
| rn-c04-4 | Intensive care unit, then medical unit | Man, 58, upper gastrointestinal bleeding on naproxen and aspirin, bleeding duodenal ulcer at endoscopy, heavy beer use | High |

The batch now spans pediatric, medical, emergency, critical care and home health settings. It no longer has a maternity or mental health setting. The topic plan fixes the five scenarios, so I could not restore them.

### Items

| Item | Need | Step | Type | Difficulty |
|---|---|---|---|---|
| 2-1 | PA | recognize | highlight | 2 |
| 2-2 | RRP | analyze | matrix | 3 |
| 2-3 | MOC | prioritize | cloze, triad | 4 |
| 2-4 | PPT | generate | dnd, zero-one | 3 |
| 2-5 | PSY | action | mc | 3 |
| 2-6 | PPT | evaluate | matrix | 4 |
| 3-1 | PA | recognize | msn, select 3 | 2 |
| 3-2 | RRP | analyze | cloze, zero-one | 3 |
| 3-3 | MOC | prioritize | mc | 3 |
| 3-4 | PSY | generate | sata | 2 |
| 3-5 | PPT | action | mc with calc | 3 |
| 3-6 | SIPC | evaluate | matrix | 3 |
| 4-1 | RRP | recognize | highlight | 2 |
| 4-2 | PPT | analyze | matrix | 3 |
| 4-3 | MOC | prioritize | cloze, dyad | 4 |
| 4-4 | BCC | generate | sata | 2 |
| 4-5 | PPT | action | mc | 3 |
| 4-6 | PSY | evaluate | matrix | 3 |

### Counts after the rework

Client Needs: MOC 6, SIPC 3, HPM 3, PSY 3, BCC 3, PPT 5, RRP 3, PA 4. This matches the plan. The three replaced cases hold the same 18 needs as before (PPT 5, RRP 3, MOC 3, PSY 3, PA 2, BCC 1, SIPC 1), spread to fit the new scenarios.

| Need | Items |
|---|---|
| MOC | 1-3, 2-3, 3-3, 4-3, 5-3, 5-5 |
| SIPC | 1-5, 3-6, 5-1 |
| HPM | 1-6, 5-2, 5-6 |
| PSY | 2-5, 3-4, 4-6 |
| BCC | 1-4, 4-4, 5-4 |
| PPT | 2-4, 2-6, 3-5, 4-2, 4-5 |
| RRP | 2-2, 3-2, 4-1 |
| PA | 1-1, 1-2, 2-1, 3-1 |

Item types: matrix 8 (all single mode), mc 6, cloze 5, sata 4, highlight 4, dnd 2, msn 1. Each case uses 5 item types.

Rationale scoring: dyads in rn-c04-1-3 (cloze), rn-c04-4-3 (cloze) and rn-c04-5-3 (dnd). One triad in rn-c04-2-3 (cloze). rn-c04-2-4, rn-c04-3-2 and rn-c04-5-2 use zero-one scoring.

CJMM steps: each case walks the six steps in order, 5 items per step.

Difficulty: level 2 has 8 items, level 3 has 19 and level 4 has 3.

Calculation: rn-c04-3-5 (diltiazem 0.25 mg/kg for 72 kg from a 5 mg/mL vial, 3.6 mL). It carries a `calc` block. The options run low to high.

MC key positions: position 1: 1 (5-5). Position 2: 2 (1-5, 3-5). Position 3: 2 (3-3, 4-5). Position 4: 1 (2-5).

Batch length balance: keyed choices run longer than distractors in 7 of 11 multi-key pools, within the 65 percent limit. To get there I trimmed two keyed options in rn-c04-4-4 and gave one distractor in rn-c04-3-4 a more specific noun. I added no filler.

### Sources added, with verification

- KDIGO Clinical Practice Guideline for Acute Kidney Injury, Kidney Int Suppl 2(1):1, 2012. I read the PDF text. It defines acute kidney injury as a creatinine rise of 0.3 mg/dL or more within 48 hours, a rise to 1.5 times baseline within 7 days, or urine under 0.5 mL/kg/hour for 6 hours. https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf
- Alfonzo A et al. UK Kidney Association, Treatment of Acute Hyperkalaemia in Adults, July 2020, PDF revised July 2022. I read the PDF text. It covers severe hyperkalemia at 6.5 mmol/L or more, peaked T waves and wide QRS, and IV calcium to protect the heart without lowering potassium. It also covers insulin 10 units with glucose 25 g, hypoglycemia after insulin, sodium zirconium cyclosilicate 10 g, and potassium supplements and NSAIDs adding risk alongside RAAS blockers and MRAs. The web page now marks it archived with a review date of July 2025. https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults
- Joglar JA et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation 149(1):e1, 2024. The citation was checked through the PubMed E-utilities record, PMID 38033089. https://pubmed.ncbi.nlm.nih.gov/38033089/
- Diltiazem Hydrochloride Injection label (Hikma), revised November 2020, on DailyMed. 0.25 mg/kg actual body weight over 2 minutes, 5 mg/mL vial, hypotension may occur. https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=734beeef-3968-4137-af2c-276e8a9317df
- Laine L et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 116(5):899, 2021. The abstract, read through PubMed E-utilities, gives a transfusion threshold of 7 g/dL and high-dose PPI after endoscopic hemostasis. https://pubmed.ncbi.nlm.nih.gov/33929377/
- Lanza FL, Chan FK, Quigley EM. ACG Guidelines for Prevention of NSAID-Related Ulcer Complications. Am J Gastroenterol 104(3):728, 2009. Citation checked through PubMed E-utilities, PMID 19240698. https://pubmed.ncbi.nlm.nih.gov/19240698/
- AABB and partners, Circular of Information for the Use of Human Blood and Blood Components, June 2024. I read the PDF text. It requires the recipient and unit to be identified before transfusion. It allows only 0.9% sodium chloride in the same tubing and says to start the infusion slowly. It names identification errors as the cause of ABO-incompatible hemolytic reactions. https://www.aabb.org/news-resources/resources/circular-of-information
- Miller WR, Rollnick S. Motivational Interviewing, 4th edition, Guilford, 2023. The publisher page confirms the edition and its change talk and sustain talk chapters. https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795
- Potter PA et al. Fundamentals of Nursing, 11th edition, 2022. Edition confirmed by ISBN 9780323810340. https://openlibrary.org/isbn/9780323810340
- Varcarolis (Halter, 9th edition) and Brunner and Suddarth (15th edition) were already in the batch.

I removed the sources that only the old cases used: the lithium label, ATA statement, calcium gluconate label, delegation guidelines, ACOG Bulletin 222, magnesium label and Lowdermilk.

### For the reviewer

- rn-c04-2-4 uses calcium gluconate 3 g over 15 minutes. The UK guideline gives 30 mL of 10 percent calcium gluconate, which is 3 g. The US calcium gluconate label caps the rate at 200 mg/minute, which 15 minutes meets. The UK guideline is British. US references give the same three steps, but I could not open a US hyperkalemia guideline behind the proxy.
- rn-c04-2-2 keys furosemide as not contributing. Loop diuretics increase urinary potassium loss. Volume depletion from vomiting and diarrhea plus a diuretic did add to his kidney injury, but the row asks about the potassium level itself.
- rn-c04-2-6 keys a potassium of 5.4 mEq/L as improvement although it is above 5.0. The row asks about the trend after treatment. A reviewer may prefer to reword the column.
- rn-c04-3-2 keys shortened ventricular filling time as the main mechanism. Loss of atrial kick also lowers output. The rationale names both. Loss of atrial kick is not an option.
- rn-c04-3-6 fall precautions rest on Potter's fundamentals text. I could not open the AHRQ fall toolkit because the site returned 403 errors. I did not check the Potter page itself.
- rn-c04-4-2 teaches that acetaminophen, atorvastatin and amlodipine do not raise ulcer bleeding risk. Only the NSAID and aspirin rows rest on Lanza. The other rows rest on general pharmacology.
- rn-c04-4-4 comfort measures (mouth care without alcohol, emesis basin, raised head, clean linens) come from Brunner and Potter as I recall them. I did not check the pages themselves.
- rn-c04-4-6 labels minimizing and blaming others as denial. The source is Varcarolis plus Miller and Rollnick on sustain talk. I did not check the page itself. The bank already has an alcohol item on motivational interviewing (s11). This one evaluates statements in a hospitalized client, not the nurse's reply.
- A Jehovah's Witness refusal with a bleeding duodenal ulcer already exists in s01, and interpreter items exist in s01 and s11. I avoided both for rn-c04-4.
- Two stems (rn-c04-2-1 and rn-c04-4-1) were reworded to clear the near duplicate gate against rn-c01-1-1 and rn-c02-1-1.
- The prescriptions, doses and lab values in the new cases are invented. None comes from a published case.
