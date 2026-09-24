# Batch c14 writer report

Batch c14 holds 5 case studies of 6 items each. That is 30 items in total. Every case and item is marked reviewed: false and version 1. The canada field is an empty string on every item. A later pass writes it.

## Cases

The five scenarios are the ones assigned in docs/topic-plan.json, in the planned order.

1. rn-c14-1 "Severe Headache in the Emergency Department". A hypertensive emergency in a 52-year-old man who stopped his medications after he lost his insurance. Setting: emergency department, then intensive care.
2. rn-c14-2 "Recovery on the Vascular Surgery Unit". Care after a femoral to popliteal bypass in a 71-year-old woman with diabetes who smokes. On day 1 the graft occludes. Setting: surgical unit.
3. rn-c14-3 "Calf Pain in the Weeks After Birth". A popliteal deep vein thrombosis 11 days after a cesarean birth, with enoxaparin started at home. Setting: emergency department, then discharge home.
4. rn-c14-4 "The Night Before a Planned Repair". A 78-year-old man from long-term care awaits endovascular repair of a 6.2 cm abdominal aortic aneurysm. The aneurysm leaks overnight. Setting: vascular surgery unit.
5. rn-c14-5 "First Evening After Heart Surgery". Cardiac tamponade 6 hours after bypass grafting of 3 coronary arteries. Setting: cardiac surgery intensive care.

## Counts

Client Needs, matching the plan:

| Need | Planned | Written |
|---|---|---|
| MOC | 5 | 5 |
| SIPC | 4 | 4 |
| HPM | 3 | 3 |
| PSY | 3 | 3 |
| BCC | 3 | 3 |
| PPT | 5 | 5 |
| RRP | 3 | 3 |
| PA | 4 | 4 |

Item types: mc 8, matrix 5, cloze 4, highlight 4, sata 4, msn 3, dnd 2. The rationale-scored items are 3 dyads (1 cloze, 2 dnd) and 2 triads (both cloze). One cloze uses zero-one scoring. Each case uses 5 or 6 item types.

CJMM steps: each case walks all 6 steps in order, so each step has 5 items.

Difficulty: level 1 has 1 item, level 2 has 7, level 3 has 18, level 4 has 3 and level 5 has 1.

MC key positions across the 8 mc items: position 1 has 2, position 2 has 2, position 3 has 2 and position 4 has 2. The two calculation items list their options from low to high.

Calculations: 2 items carry a calc block. rn-c14-1-5 finds a nicardipine titration rate of 100 mL/hour. rn-c14-3-5 finds an enoxaparin volume of 0.8 mL.

## Sources and verification

| Key | Source | Verified at |
|---|---|---|
| htn | Jones DW et al. 2025 AHA/ACC High Blood Pressure Guideline. Circulation, 2025 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356 |
| nicardipine | Cardene I.V. Premixed Injection prescribing information, DailyMed, 2024 | https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a14a6a4d-232b-634f-e053-2a95a90a2323 |
| brunner | Hinkle, Cheever, Overbaugh. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022 | Publisher listing, ISBN 9781975161033 |
| tobacco | Krist AH et al. USPSTF. JAMA 325(3):265, 2021 | https://pubmed.ncbi.nlm.nih.gov/33464343/ |
| pad | Gornik HL et al. 2024 ACC/AHA Lower Extremity PAD Guideline. Circulation 149(24):e1313 | https://pubmed.ncbi.nlm.nih.gov/38743805/ |
| ssi | Berrios-Torres SI et al. CDC Guideline for Prevention of Surgical Site Infection. JAMA Surgery 152(8):784, 2017 | https://jamanetwork.com/journals/jamasurgery/fullarticle/2623725 |
| varcarolis | Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022 | https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1 |
| acogVte | ACOG Practice Bulletin No. 196, Thromboembolism in Pregnancy, 2018 | https://pubmed.ncbi.nlm.nih.gov/29939938/ |
| lowdermilk | Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023 | https://shop.elsevier.com/books/maternity-and-womens-health-care/lowdermilk/978-0-323-81018-0 |
| lovenox | Lovenox prescribing information, FDA, 2021 | https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf |
| mec | Nguyen AT et al. CDC U.S. Medical Eligibility Criteria for Contraceptive Use, 2024 | https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm |
| aaa | Chaikof EL et al. SVS AAA Practice Guidelines. Journal of Vascular Surgery 67(1):2, 2018 | https://pubmed.ncbi.nlm.nih.gov/29268916/ |
| aortic | Isselbacher EM et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation 146(24):e334 | https://pubmed.ncbi.nlm.nih.gov/36322642/ |
| falls | Montero-Odasso M et al. World Guidelines for Falls Prevention. Age and Ageing 51(9), 2022 | https://academic.oup.com/ageing/article/51/9/afac205/6730755 |
| potter | Potter PA et al. Fundamentals of Nursing, 11th edition, 2023 | https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0 |
| pericardial | Adler Y et al. 2015 ESC Pericardial Diseases Guidelines. European Heart Journal 36(42):2921 | https://academic.oup.com/eurheartj/article/36/42/2921/2293375 |
| sts | STS Expert Consensus on Resuscitation After Cardiac Surgery. Annals of Thoracic Surgery 103(3):1005, 2017 | https://pubmed.ncbi.nlm.nih.gov/28122680/ |

Specific facts checked against these sources:

- In a hypertensive emergency, SBP falls by no more than 25% in the first hour. Source: htn.
- Nicardipine premix is 20 mg in 200 mL. It starts at 5 mg/hour and rises by 2.5 mg/hour, up to 15 mg/hour. Source: nicardipine.
- Enoxaparin for DVT is 1 mg/kg every 12 hours. Do not rub the site. A graduated 100 mg/mL syringe exists. Source: lovenox.
- Warfarin and LMWH are compatible with breastfeeding. Source: acogVte.
- Combined hormonal contraception is category 4 with an acute DVT. Source: mec.
- The perioperative glucose target is below 200 mg/dL. Source: ssi.
- Permissive hypotension is used for a ruptured AAA. Source: aaa.

## For the reviewer

- rn-c14-1-4 keys immediate-release sublingual nifedipine as a distractor. The reason given is an abrupt, unpredictable fall in BP. I did not confirm that the 2025 AHA/ACC guideline says this in so many words. Brunner and pharmacology texts support it.
- rn-c14-2-1 and rn-c14-2-4 teach that long sitting with the knees bent can compress a femoral to popliteal graft. They also teach that an ischemic leg is kept level or slightly lowered, never raised. These are standard nursing texts, not guideline recommendations. Please check them against the Brunner vascular chapter.
- rn-c14-2-6 keys a structured walking program as correct teaching after bypass. The PAD guideline supports exercise therapy. The timing after surgery follows the surgeon, which the option covers with "as told".
- rn-c14-3-4 keys avoiding ibuprofen during enoxaparin therapy. The label warns about agents that affect hemostasis. Ibuprofen is common after birth, so the Canada pass may want to note local practice.
- rn-c14-3-5 uses a 100 mg/mL graduated prefilled syringe for an 80 mg dose. The label tells users not to expel the air bubble from the fixed-dose syringes. This item does not test the air bubble.
- rn-c14-4-2 replaces the case Vital Signs tab with a trend table. The temperature row drops out of view from that item onward.
- rn-c14-4-4 keys "Give fluids only to a prescribed lower BP target" for a leaking aneurysm before repair. SVS 2018 supports permissive hypotension for rupture. The client is still alert.
- rn-c14-5-4 keys stopping nitroglycerin and does not key volume loading. Fluid for tamponade is debated. I left fluid out of the options so no second key can be defended.
- rn-c14-5-6 teaches traditional sternal precautions: splinting with a pillow, no pushing up with both arms, and no heavy lifting. Some centers now teach a less restrictive "move in the tube" approach. The item avoids a numeric lifting limit.
- Difficulty is writer-rated and clusters at level 3. It still spans all 5 levels.
- The whole-bank near duplicate test currently fails on rn-c02-1-1 against rn-c16-4-1. Neither item is in this batch. All other tests pass with BATCH=c14.

## House style

No em or en dashes, no semicolons, no smart quotes and no filler. Sentences have 35 words or fewer. The client is never named. Terms are client and primary health care provider.
