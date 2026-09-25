# Sweep 2 rebuilds, writer sw2-b

Batches owned: s19 (abdominal pain) and s47 (pre-eclampsia). Four SAMPs rebuilt in place, as listed in sweep2-rebuild.json. No FIX verdicts were in scope for sweep 2. Nothing was committed.

Each rebuild keeps its id, topic, question count and the key feature of every question. Each is still reviewed: false, with the version raised by 1 and a neutral title. All questions are single best answer.

## Rebuilt SAMPs

| id | Old scenario | New scenario | Keyed decisions | Sources |
|---|---|---|---|---|
| abdominal-pain-23 (v3) | Older woman with months of pain after meals, then sudden periumbilical pain from acute mesenteric ischemia. Copied abdominal-pain-02. | Man of 58 with atrial fibrillation who stopped apixaban 3 weeks ago, with constant severe right flank pain, no hydronephrosis and a normal aorta on bedside ultrasound. The concern is renal infarction from an embolus. | q1 AP1: stopping apixaban is the history feature that widens the list beyond renal colic. q2 AP5: renal CT with IV contrast, not a noncontrast stone CT. q3 AP2: severe pain with a soft abdomen after two analgesics is the finding that signals a serious cause. | Bourgault M and colleagues. Acute renal infarction: a case series. Clin J Am Soc Nephrol. 2013. https://doi.org/10.2215/CJN.05570612. Motaouakil A and colleagues. Acute renal infarction mimicking renal colic. Urol Case Rep. 2024. https://doi.org/10.1016/j.eucr.2024.102823 |
| abdominal-pain-36 (v4) | Postpartum epigastric pain blamed on ibuprofen, found to be HELLP, with magnesium sulfate keyed. Copied pre-eclampsia-02. | Woman 5 days after an elective repeat caesarean, with epigastric pain she calls trapped gas. BP is severe, the urine PCR is 48 mg/mmol, and platelets, AST, LDH and the film are normal. Not HELLP and no liver hematoma. | q1 PE3: postpartum pre-eclampsia, with HELLP, ileus, pancreatitis and wound infection excluded by the given results. q2 PE4: 60 minutes is the longest acceptable delay to the first antihypertensive for confirmed severe BP. q3 PE4: keep breastfeeding as usual while on labetalol. | Magee LA and colleagues. ISSHP 2021 recommendations. Pregnancy Hypertens. 2022. https://doi.org/10.1016/j.preghy.2021.09.008. ACOG Committee Opinion No. 767. Obstet Gynecol. 2019. https://doi.org/10.1097/AOG.0000000000003082 |
| abdominal-pain-46 (v3) | Diabetic woman of 58 with exertional epigastric pain she blamed on her gallbladder, keyed ACS and ASA 160 mg chewed. Copied abdominal-pain-05. | Man of 69 from a group home with aphasia after a stroke, vomiting and rubbing his upper abdomen. Staff think he is constipated. He cannot give a history, his medication list is missing, and he failed a swallowing assessment. | q1 AP3: pallor and sweating is the finding that points outside the abdomen. q2 IHD5: episodes on his walks that settle with rest are exertional angina, not mesenteric angina. q3 CP2: ASA 650 mg PR now, without waiting for the list, because he is vomiting and cannot swallow safely. | Byrne RA and colleagues. 2023 ESC guidelines for acute coronary syndromes. Eur Heart J. 2023. https://doi.org/10.1093/eurheartj/ehad191. Maalouf R and colleagues. Salicylic acid levels after rectal versus oral dosing. Acad Emerg Med. 2009. https://doi.org/10.1111/j.1553-2712.2008.00318.x |
| pre-eclampsia-16 (v3) | Right shoulder pain at 34 weeks from HELLP with a subcapsular liver hematoma. Copied pre-eclampsia-07. | Woman at 35 weeks and 4 days with a new left Bell palsy and a BP of 138/88 mmHg against a baseline of 106/64 mmHg. She then reports nausea she blames on a new vitamin. Her results show raised transaminases below every HELLP threshold. Not HELLP and no liver hematoma. | q1 PE1: add a urine protein-creatinine ratio, not CT, MRI, Lyme serology or nerve studies. q2 PE3: platelets, liver enzymes and LDH before her nausea is blamed on the vitamin. q3 PE3: liver involvement without HELLP (Tennessee thresholds, ISSHP 40 U/L). q4 PE4: oral labetalol 200 mg twice daily for non-severe hypertension to a diastolic target of 85 mmHg. | Shmorgun D, Chan WS, Ray JG. Bell's palsy in pregnancy and pre-eclampsia. QJM. 2002. https://doi.org/10.1093/qjmed/95.6.359. Haram K and colleagues. The HELLP syndrome. BMC Pregnancy Childbirth. 2009. https://doi.org/10.1186/1471-2393-9-8. Magee LA and colleagues. ISSHP 2021. https://doi.org/10.1016/j.preghy.2021.09.008 |

## Overlap search

Before writing, I listed every SAMP in the bank that touches pre-eclampsia, and every abdominal pain, chest pain and ischemic heart disease SAMP with an ACS or flank pain story. I also grepped all batches for renal infarction, Bell palsy, group homes, rectal ASA and the postpartum breastfeeding keys. No other SAMP uses renal infarction, Bell palsy as a sign of pre-eclampsia, an aphasic patient with ACS, the time-to-treatment limit for severe BP, or breastfeeding advice after pre-eclampsia. Neither obstetric story is HELLP or a liver hematoma.

One related decision exists in another topic. cva SAMPs in s27 key rectal ASA 325 mg after a failed swallow screen in stroke. abdominal-pain-46 keys rectal ASA for ACS under chest pain key feature 2, where it is not yet keyed. The story and topic differ.

No later update, prompt or option names an earlier key. The ECG result in abdominal-pain-46 is left out for that reason, and the urine PCR result in pre-eclampsia-16 is never stated.

## Key positions after the rebuild

- s19 singles: positions 1 to 5 hold 18, 24, 22, 19 and 14 of 97 keys. The highest share is 24.7%.
- s47 singles: positions 1 to 5 hold 14, 14, 15, 13 and 15 of 71 keys.

## Tests

- SAMP_BATCH=s19 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 655 passed.
- SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 476 passed.
- npx tsc --noEmit -p .: clean.
- LAUNCH_GATE=1 npx vitest run tests/samps.test.ts: 4503 passed.

## For the physician

- abdominal-pain-46 q3 keys ASA 650 mg PR. The only trial data I found used a 600 mg suppository against 162 mg chewed ASA. The Canadian Drug Product Database lists ASA suppositories of 150 mg and 650 mg. The s27 stroke SAMPs use 325 mg PR from Canadian stroke guidance. Please confirm the rectal dose you want keyed for ACS.
- pre-eclampsia-16 q4 keys labetalol 200 mg PO twice daily. ISSHP supports oral labetalol for non-severe hypertension to a diastolic target of 85 mmHg, but its dose table did not extract as text. The dose follows the ACOG 2020 starting regimen and sits within the usual SOGC range. I could not open the full SOGC 2022 guideline to check its table.
- abdominal-pain-36 q2 uses the ACOG 30 to 60 minute window. ISSHP says only that severe hypertension needs urgent treatment. I found no Canadian source that gives a time limit.
- pre-eclampsia-16 q1 relies on one Canadian case series (29% of women with Bell palsy developed a hypertensive disorder) and on ISSHP listing Bell palsy as an organ problem of pre-eclampsia. The key is a test for proteinuria, not a diagnosis.
- The renal infarction sources are a case series and a case report. No guideline covers it. The claim that a noncontrast stone CT can miss the diagnosis comes from the case report.
