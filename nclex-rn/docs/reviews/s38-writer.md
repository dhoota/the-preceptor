# Batch s38 writer report

Stand-alone batch. 50 items, rn-s38-01 to rn-s38-50. All items are `reviewed: false` and `canada` is an empty string. Files are `src/bank/s38/common.ts`, `part1.ts` to `part5.ts` and `index.ts`.

Checks run:

- `BATCH=s38 npx vitest run tests/bank.test.ts`: 61 of 61 tests pass. This includes the whole-bank near duplicate gate and the sign-off gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s38`: prints nothing.
- All 50 topic labels are unique and none matches an existing topic label in the bank or in the inventory.

## Counts

Client Needs: PA 50. This matches the plan.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 23 is a trend mc (clotting tests after heat stroke). Item 38 is a trend mc (creatine kinase, urine and creatinine in rhabdomyolysis).

CJMM step: analyze 15, action 12, generate 9, recognize 6, evaluate 5, prioritize 3.

Difficulty: 2 has 10, 3 has 19, 4 has 19, 5 has 2.

Calculations: items 12 (effective osmolality), 27 (pulsus paradoxus) and 32 (cerebral perfusion pressure). Each has a `calc` block. The batch has no PPT items, so the 12 percent rule does not apply.

## MC key positions

Across 28 mc items, counting the 2 trend mc: each of the 4 positions holds 7 keys. Across the 26 plain mc items: position 1 has 6, position 2 has 7, position 3 has 7, position 4 has 6. The key is the strict longest option in 5 items (23, 31, 38, 45, 49).

Multi-key pools: keyed choices run longer than distractors in 8 of 22 pools. Select all keys in the first half of the list: 19 of 38.

## Coverage and how each item avoids the existing bank

Every listed condition was searched in the inventory and the case list first. Where a condition already had items, the new item tests a different point.

- 01 Guillain-Barre: dysautonomia with swinging pulse and BP. Existing items test vital capacity and swallow.
- 02 Myasthenia: why pyridostigmine is held on the ventilator. Existing items test the cholinergic crisis itself.
- 03 and 04 ALS: nocturnal hypoventilation needing night ventilation, and gastrostomy timing against vital capacity. The existing item tests orthopnea as a priority.
- 05 and 06: diabetes insipidus after head injury (highlight) and the opposite patterns of DI and SIADH. Existing items cover SIADH in cancer and after pituitary surgery and desmopressin excess.
- 07 and 08 Pheochromocytoma (absent from the bank): beta blocker before alpha blockade, and the first 24 hours after adrenalectomy.
- 09 Hepatic encephalopathy: precipitating factors. Existing items test lactulose response, signs and protein diet.
- 10 and 11 Varices: balloon tamponade airway obstruction, and octreotide plus antibiotic prophylaxis. The existing item tests prevention of a first bleed.
- 12 HHS: effective osmolality calculation. The existing item tests labs that separate HHS from DKA.
- 13 and 14 Intussusception (absent): recognition, and a normal stool before reduction.
- 15 and 16 Hirschsprung (absent): enterocolitis triage after pull-through, and saline washouts.
- 17 Croup: quieter stridor as a sign of exhaustion. 50 Croup versus epiglottitis: the distinguishing finding.
- 18, 19 and 20 Cystic fibrosis (absent): salt in heat, enzyme teaching, and the order of airway treatments.
- 21 Hemophilia: factor before imaging after a head bump. The existing item covers general home care.
- 22 ITP in a child: isolated thrombocytopenia after a viral illness. The existing item tests an adult intracranial bleed.
- 23 and 24 DIC (absent): trend after heat stroke, and bleeding precautions.
- 25 Aortic disease: spinal cord ischemia after endovascular repair. The existing bow-tie tests acute dissection.
- 26 and 27 Pericarditis: supporting findings and pulsus paradoxus. The existing item tests first-line drugs.
- 28 ARDS: ARDS versus cardiogenic edema with a normal echo. The ARDS case covers P/F ratio, ventilator settings and prone positioning.
- 29 Tension pneumothorax on a ventilator (bow-tie). Existing items cover chest drains.
- 30 Flail chest: analgesia priority. The existing item tests paradoxical movement.
- 31 Spinal shock: sign that it is ending. The existing item tests neurogenic shock.
- 32 Raised ICP: cerebral perfusion pressure calculation.
- 33 Heat stroke: confusion with sweating skin. The existing item tests cooling.
- 34 Hypothermia: hypothermic arrest. The existing item tests rewarming of a drowsy client.
- 35 Drowning: rescue breaths first. 36 Snake bite. 37 and 38 Crush injury and rhabdomyolysis. 39 Fat embolism prevention. All absent or new points. The fat embolism case covers recognition and recovery only.
- 40 and 41 Nephrotic syndrome in a child (absent).
- 42 HELLP (bow-tie), 43 amniotic fluid embolism, 44 cord prolapse, 45 shoulder dystocia, 46 and 47 newborn respiratory distress and transient tachypnea, 48 and 49 necrotizing enterocolitis. All absent from the bank.

Nothing in the batch tests fluid and electrolyte management, shock types, sepsis or burns, which s37 covers.

## Sources

Content checked against the full text or an official summary:

- Leonhard SE et al. 2019, Guillain-Barre in ten steps: https://pmc.ncbi.nlm.nih.gov/articles/PMC6821638/
- Wendell LC, Levine JM 2011, Myasthenic crisis: https://pmc.ncbi.nlm.nih.gov/articles/PMC3726100/
- Miller RG et al. 2009, AAN ALS practice parameter: https://pmc.ncbi.nlm.nih.gov/articles/PMC2764727/
- Lenders JWM et al. 2014, Endocrine Society pheochromocytoma guideline: https://academic.oup.com/jcem/article/99/6/1915/2537399
- Vilstrup H et al. 2014, AASLD and EASL hepatic encephalopathy guideline (Table 3, precipitating factors): https://www.aasld.org/sites/default/files/2022-07/Hepatic%20Encephalopathy%20in%20Chronic%20Liver%20Disease%202014.pdf
- Gosain A et al. 2017, Hirschsprung-associated enterocolitis: https://pmc.ncbi.nlm.nih.gov/articles/PMC5395325/
- Nemours KidsHealth, order of inhaled CF treatments: https://khpi.kidshealth.org/en/parent/1919.html
- Adler Y et al. 2015, ESC pericardial guideline: https://academic.oup.com/eurheartj/article/36/42/2921/2293375
- Sayed Ahmed WA, Hamdy MA 2018, cord prolapse: https://www.dovepress.com/optimal-management-of-umbilical-cord-prolapse-peer-reviewed-article-IJWH
- Umpierrez GE et al. 2024, hyperglycemic crises consensus. Diagnostic criteria (glucose 600 mg/dL or more, effective osmolality above 300 mOsm/kg) were checked through a search summary of the report: https://consultqd.clevelandclinic.org/hyperglycemic-crises-in-adults-the-2024-consensus-report
- Kaplan DE et al. 2024, AASLD portal hypertension guidance. The citation was verified: https://boris.unibe.ch/187395/

The shared web search budget for the session ran out partway through part 3. After that I checked each remaining citation's authors, title, journal, volume, pages and year against its DOI record on Crossref, and the DOI resolves. The content points for these come from my own knowledge of the sources and were not re-read in full text:

- Srivastava A et al. 2020, WFH hemophilia guidelines, 10.1111/hae.14046
- Neunert C et al. 2019, ASH ITP guidelines, 10.1182/bloodadvances.2019000966
- Levi M, Scully M 2018, DIC, 10.1182/blood-2017-10-804096
- Epstein Y, Yanovich R 2019, Heatstroke, 10.1056/NEJMra1810762
- Isselbacher EM et al. 2022, ACC/AHA aortic disease guideline, 10.1161/CIR.0000000000001106
- ARDS Definition Task Force 2012, Berlin definition, 10.1001/jama.2012.5669
- Simon B et al. 2012, EAST pulmonary contusion and flail chest, 10.1097/TA.0b013e31827019fd
- Ditunno JF et al. 2004, spinal shock four-phase model, 10.1038/sj.sc.3101603
- Carney N et al. 2017, Brain Trauma Foundation 4th edition, 10.1227/NEU.0000000000001432
- Dow J et al. 2019, WMS accidental hypothermia, 10.1016/j.wem.2019.10.002
- Szpilman D et al. 2012, Drowning, 10.1056/NEJMra1013317
- Lavonas EJ et al. 2011, crotaline snakebite algorithm, 10.1186/1471-227X-11-2
- Bosch X et al. 2009, rhabdomyolysis, 10.1056/NEJMra0801327
- Kwiatt ME, Seamon MJ 2013, fat embolism syndrome, 10.4103/2229-5151.109426
- ACOG Practice Bulletin 222, 2020, 10.1097/AOG.0000000000003891
- ACOG Practice Bulletin 178, 2017, 10.1097/AOG.0000000000002043
- Pacheco LD et al. 2016, SMFM amniotic fluid embolism, 10.1016/j.ajog.2016.03.012
- Sweet DG et al. 2023, European RDS guidelines, 10.1159/000528914
- ATLS 10th edition, 2018 (no DOI).
- Textbooks already used in the bank: Hinkle 2022 (Brunner and Suddarth 15th edition) and Hockenberry 2024 (Wong's 12th edition).

## For the reviewer

- 02: the teaching point that pyridostigmine is held on the ventilator because of secretions comes from Wendell and Levine. Check that it is not too close to rn-s16-34, which holds the drug in a cholinergic crisis.
- 03: the claim that oxygen alone can hide rising carbon dioxide is standard teaching for neuromuscular hypoventilation. Miller 2009 does not state it.
- 08: the drop in glucose after adrenalectomy (insulin no longer suppressed) is standard physiology. Lenders 2014 says only to monitor glucose after surgery.
- 16: Gosain 2017 does not name the irrigation fluid. The saline-not-tap-water point rests on Hockenberry.
- 19: the point about not mixing beads into milk is from pancrelipase product labeling as I recall it. The cited source is Hockenberry.
- 26 and 27: the 2015 ESC pericardial guideline has a 2025 update. I could not read the update, so the items cite 2015. The diagnostic criteria and the 10 mmHg pulsus threshold are long standing.
- 36: Lavonas 2011 is the US crotaline algorithm. Check the wording "keep the arm still in a neutral position" against it.
- 39: the item keys fixation within 24 hours as the risk-lowering prescription. This is from Kwiatt 2013 as I recall it. I could not reread the full text.
- 42: the bow-tie keys magnesium sulfate and IV labetalol. Betamethasone at 33 weeks would also be reasonable, so I left it out of the action list on purpose.
- 46: the respiratory rate range and the 10-second periodic breathing limit are in `refs`, from Hockenberry.
- The near duplicate gate passed against the bank as it stood at the end of my run. Writers s29 to s37 were still writing, so the gate should be rerun once all batches are in.
