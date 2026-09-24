# Batch c07 writer report

Five case studies, 30 items. Every item has `reviewed: false` and `canada: ""`. `BATCH=c07 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints no errors for `bank/c07`.

House style for this report and the items: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Cases

The five scenarios follow the topic plan, in order.

| Case | Topic | Setting | Client | Acuity |
|---|---|---|---|---|
| rn-c07-1 | Thyroid storm | Surgical unit, then ICU | Woman, 36, day 1 after appendectomy, stopped methimazole | High |
| rn-c07-2 | Missed hemodialysis with fluid overload | Medical telemetry unit | Man, 58, missed two sessions, recent widower | High |
| rn-c07-3 | Major burn in the first 24 hours | Rural emergency department before transfer | Woman, 62, house fire with smoke inhalation, COPD | High |
| rn-c07-4 | Rising intracranial pressure after head injury | Pediatric intensive care unit | Boy, 15, subdural hematoma with an EVD | High |
| rn-c07-5 | Autonomic dysreflexia after spinal cord injury | Community home health visit | Man, 29, T4 complete injury | Moderate to high |

Mental health content sits in rn-c07-2-1 (grief, low mood, a passive death wish), rn-c07-3-6 (a family member in crisis) and rn-c07-4-6 (parental guilt and coping).

## Counts

Client Needs: MOC 5, SIPC 4, HPM 3, PSY 3, BCC 3, PPT 5, RRP 3, PA 4. This matches the plan.

| Item | Step | Type | Need |
|---|---|---|---|
| 1-1 to 1-6 | CJMM in order | highlight, matrix, mc, sata, dnd, msn | PA, RRP, MOC, BCC, PPT, HPM |
| 2-1 to 2-6 | CJMM in order | highlight, matrix, cloze, msn, mc, sata | PSY, RRP, MOC, MOC, PPT, HPM |
| 3-1 to 3-6 | CJMM in order | highlight, matrix, cloze, sata, mc, msn | PA, MOC, RRP, SIPC, PPT, PSY |
| 4-1 to 4-6 | CJMM in order | highlight, matrix, mc, sata, mc, msn | PA, BCC, SIPC, SIPC, PPT, PSY |
| 5-1 to 5-6 | CJMM in order | highlight, matrix, mc, sata, mc, msn | PA, BCC, MOC, SIPC, PPT, HPM |

Item types: mc 7, highlight 5, matrix 5 (all single mode), sata 5, msn 5, cloze 2, dnd 1. Each case uses 5 or 6 types.

Rationale scoring: one dyad (rn-c07-1-5, dnd with a template). One triad (rn-c07-3-3, cloze). rn-c07-2-3 is a two-blank cloze with zero-one scoring.

CJMM steps: each case walks the six steps in order, so each step has 5 items.

Difficulty: level 2 has 7 items, level 3 has 17 and level 4 has 6.

Calculations, each with a `calc` block: rn-c07-2-5 (calcium gluconate 2 g at 100 mg/mL is 20 mL), rn-c07-3-5 (2 mL/kg/%TBSA for 70 kg and 27%, half in the first 8 hours with 2 hours lost, is 315 mL/hour), rn-c07-4-5 (3% saline 4 mL/kg for 58 kg over 15 minutes is 928 mL/hour).

Multi-key pools: the keyed choices run longer than the distractors in 7 of 16 pools.

## MC key positions

Position 1: 1 (rn-c07-5-5). Position 2: 2 (rn-c07-3-5, rn-c07-5-3). Position 3: 3 (rn-c07-1-3, rn-c07-2-5, rn-c07-4-5). Position 4: 1 (rn-c07-4-3). The calculation items list options from low to high.

## Sources and verification

- Ross DS et al. 2016 ATA Guidelines for Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 26(10):1343. Full text checked. Recommendation 35 lists beta blockade, antithyroid drug, iodide, corticosteroid, cooling with acetaminophen and cooling blankets, volume and nutrition. Table 7 says iodide is not started until 1 hour after the antithyroid drug. Abrupt stopping of the drug and surgery are listed precipitants. Patients report fever and pharyngitis. https://journals.sagepub.com/doi/10.1089/thy.2016.0229 and https://nursing.duke.edu/sites/default/files/media/main/hyperthyroidism_guidelines_2016.pdf
- Clase CM et al. KDIGO Controversies Conference on potassium. Kidney International 97(1):42, 2020. Full text checked. Calcium salts of 1000 to 3000 mg for ECG changes, calcium gluconate preferred, calcium does not lower potassium, insulin with glucose shifts it. https://kdigo.org/wp-content/uploads/2018/04/KDIGO-Potassium-Management-Final-publication.pdf
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Barry MJ et al. USPSTF. Screening for Depression and Suicide Risk in Adults. JAMA 329(23):2057, 2023. https://jamanetwork.com/journals/jama/fullarticle/2806144
- The Joint Commission. R3 Report Issue 18, NPSG 15.01.01 suicide prevention, 2019. https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18
- American Burn Association. Guidelines for Burn Patient Referral, 2022. Page checked. Full-thickness burns, partial thickness of 10% or more, deep burns of hands, suspected inhalation injury, and burns with other medical conditions. https://ameriburn.org/resources/burnreferral/
- Cartotto R et al. ABA Clinical Practice Guidelines on Burn Shock Resuscitation. J Burn Care Res 45(3):565, 2024. Supports starting at 2 mL/kg/%TBSA and titrating to urine output. https://academic.oup.com/jbcr/article/45/3/565/7458089
- ISBI Practice Guidelines for Burn Care. Burns 42(5):953, 2016. Citation confirmed. https://www.sciencedirect.com/science/article/pii/S0305417916301449
- Havers FP et al. ACIP Tdap and Td recommendations, MMWR 69(3):77, 2020. A booster is due for wounds that are not clean and minor when 5 or more years have passed. https://www.cdc.gov/mmwr/volumes/69/wr/mm6903a5.htm
- Davidson JE et al. Guidelines for Family-Centered Care in the Neonatal, Pediatric, and Adult ICU. Crit Care Med 45(1):103, 2017. https://pubmed.ncbi.nlm.nih.gov/27984278/
- Kochanek PM et al. Pediatric Severe TBI Guidelines, Third Edition, Executive Summary. Neurosurgery 84(6):1169, 2019. Full text checked. Bolus 3% saline 2 to 5 mL/kg over 10 to 20 minutes. Treat ICP at 20 mmHg. EVD drainage suggested. https://pubmed.ncbi.nlm.nih.gov/30822776/
- Krassioukov A et al. Evaluation and Management of Autonomic Dysreflexia and Other Autonomic Dysfunctions. J Spinal Cord Med 44(4):631, 2021. Checked on PMC. Rise of more than 20 mmHg above baseline, sit up and lower legs, loosen devices, BP every 1 to 2 minutes, lidocaine jelly, antihypertensive at 150 mmHg, ask about PDE5 inhibitors before nitrates. https://pmc.ncbi.nlm.nih.gov/articles/PMC8288133/
- Consortium for Spinal Cord Medicine. Acute Management of Autonomic Dysreflexia, 2nd edition, 2001. Full text checked. Avoid tapping the bladder, drug before the rectal check at 150 mmHg or more, 1 inch of 2% nitroglycerin above the injury, monitor for 2 hours after. https://pva.org/wp-content/uploads/2021/09/cpg_autonomic-dysreflexia.pdf
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth, 15th edition, 2022. Hockenberry MJ et al. Wong's, 12th edition, 2023. Textbook citations already used in the bank.

## For the reviewer

- Needs tagging is tight because the plan gives only 7 PA and RRP slots for 15 recognize, analyze and prioritize items. Three tags are judgment calls: rn-c07-4-2 (care activities that raise ICP) is tagged BCC, rn-c07-4-3 (a closed EVD stopcock) is tagged SIPC, and rn-c07-5-3 (first action in autonomic dysreflexia) is tagged MOC as priority setting.
- rn-c07-2-1 keys a passive death wish as needing follow-up. The later items do not return to suicide screening. rn-c07-2-3 leaves the mood findings out of the report options on purpose, so the potassium key has no rival.
- rn-c07-2-2 keys a hemoglobin of 9.4 g/dL as expected with chronic kidney failure. That is common on dialysis, but a reviewer may prefer a milder value.
- rn-c07-3-5 is written on the ABA 2 mL/kg/%TBSA start, not the 4 mL/kg Parkland figure many nursing texts teach. The stem states the prescription, so the math does not depend on which formula the candidate knows. The stem also says no fluid was given before 0400. That is a simplification for a rural ED.
- rn-c07-3-4 says topical agents are held until the burn team assesses the wound. I know this from ABLS transfer teaching but did not open the ABLS manual. Please check it.
- rn-c07-3-2 treats age 62 as not a referral criterion. The 2022 ABA criteria list no adult age threshold.
- rn-c07-4-2 and rn-c07-4-4 rely on Brunner and Wong's for positioning, clustering and EVD re-leveling. The pediatric TBI guideline does not cover these nursing measures. Some units clamp the EVD during repositioning, so I left clamping out of the options.
- rn-c07-4-5 uses 4 mL/kg. That is within the 2 to 5 mL/kg range but is not a fixed guideline dose. 3% saline is a concentrated electrolyte, and local policy may need a central line or a second check.
- rn-c07-5-4 keys BP every 2 minutes. The 2021 guideline says every 1 to 2 minutes. The 2001 edition says every 2 to 5 minutes. 2 minutes fits both.
- rn-c07-5-5 uses the client's home prescription for nitroglycerin ointment. The prescription is invented for the case, and so are all the other doses and lab values.
- The 2001 autonomic dysreflexia guideline is old. Every claim cited to it is also in the 2021 guideline, except the ban on tapping the bladder and the 2-hour watch after an episode.
