# Q500B writer report: s85, chest pain

File: `src/samps/s85/chest-pain.ts`, array `CHEST_PAIN_S85`. All items `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting | Patient | Core content |
|---|---|---|---|---|
| chest-pain-48 | Pain while carrying a water heater | Community ED with CT | Man, 47 | Suspected aortic dissection. ADD-RS pain and condition items, ADD-RS 2 with a negative D-dimer, beta blocker before CT |
| chest-pain-49 | Sharp pain after a week of fevers | Tertiary ED | Woman, 64 | Subacute pericarditis with systemic features. ESC poor prognosis predictors, first-line therapy, tamponade sign |
| chest-pain-50 | Fever and pain on swallowing at a nursing station | Remote northern nursing station | Woman, 36 | Descending necrotizing mediastinitis from a molar infection. Normal chest X-ray, IV antibiotics before air transfer |
| chest-pain-51 | Girl sent from a school assembly | Tertiary ED | Girl, 12 | Precordial catch syndrome. Red flags for cardiac testing, family history, no further tests |
| chest-pain-52 | Gardener with emphysema and new pain | Rural ED, no CT | Woman, 71 | Secondary spontaneous pneumothorax in severe COPD. History against an exacerbation, size against symptoms, chest drain |

## Count, mix and key positions

- 5 SAMPs, 20 questions: 18 `single`, 2 `menu` (chest-pain-49 q2, chest-pain-51 q3).
- Single key positions 1 to 5: 3, 3, 4, 4, 4 (no position above 25 percent).
- The key is the single longest option in 2 of 18 single questions.
- Stems 125 to 148 words.

## Key feature coverage

Bank before this batch (grep of `topic: "chest-pain", n:`): KF1 40, KF2 45, KF3 20, KF4 32, KF5 32. The extra questions went to KF3, the thinnest.

| Key feature | This batch | Questions |
|---|---|---|
| 1 Lethal causes first | 2 | 49 q4, 50 q2 |
| 2 Early treatment and tests | 4 | 48 q4, 49 q3, 50 q4, 52 q4 |
| 3 Pain and symptom history | 7 | 48 q1, 49 q1, 50 q1, 51 q1, 51 q2, 51 q3, 52 q2 |
| 4 Risk factors and pretest probability | 4 | 48 q2, 49 q2, 51 q4, 52 q1 |
| 5 Unreliable reassurance | 3 | 48 q3, 50 q3, 52 q3 |

## Uniqueness checks

- Read all 47 existing chest-pain SAMPs and the related ischemic heart disease, dvt-pe, abdominal pain and asthma-copd items, plus the two chest pain oral cases.
- ACS clues (antacid, nitroglycerin, chest wall tenderness, pain score, HEART, point-of-care troponin) are heavily covered, so this batch avoids ACS. Pre-eruptive zoster (abdominal-pain), spontaneous pneumomediastinum (asthma-copd), triptan vasospasm and HCM (ischemic heart disease, arrhythmia, oral case) were also left out as already covered.
- chest-pain-01 tests ADD-RS as a write-in list (score 3). chest-pain-48 tests the separate condition and pain items and why ADD-RS 2 makes a negative D-dimer useless. ems-30 and the seed oral case cover type A transfer and dissection with inferior STEMI, which are not repeated.
- Highest stem trigram Jaccard against the whole bank: 0.06 to 0.10.

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| acc-aha-aorta-2022-s85 | Isselbacher EM and colleagues. 2022 ACC/AHA aortic disease guideline. Circulation. 2022. | https://pmc.ncbi.nlm.nih.gov/articles/PMC9876736/ (ADD-RS scoring, risk bands, IV beta blocker first, heart rate 60 to 80, systolic below 120 mmHg, vasodilators not first, up to 20% family history) |
| advised-2018-s85 | Nazerian P and colleagues. ADvISED. Circulation. 2018. | Europe PMC record for PMID 29030346 (abstract: rule-out tested only for ADD-RS 0 or 1, 8 AAS with negative D-dimer). No URL added because the publisher and PubMed pages could not be opened |
| esc-pericardial-2015-s85 | Adler Y and colleagues. 2015 ESC pericardial guideline. Eur Heart J. 2015. | https://academic.oup.com/eurheartj/article/36/42/2921/2293375 (major and minor predictors, admission, pulsus paradoxus over 10 mmHg) |
| esc-myo-peri-2025-s85 | Schulz-Menger J and colleagues. 2025 ESC myocarditis and pericarditis guideline. Eur Heart J. 2025. | https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf192/8234510 (admission with predictors, aspirin or NSAID every 8 hours plus colchicine, steroids low to moderate with colchicine, tamponade signs) |
| eacts-mediastinitis-s85 | Abu-Omar Y and colleagues. EACTS mediastinitis consensus. Eur J Cardiothorac Surg. 2017. | https://academic.oup.com/ejcts/article/51/1/10/2736969 (liberal cervicothoracic CT essential for early detection, immediate IV broad-spectrum antibiotics, prompt drainage) |
| dnm-review-2025-s85 | Chaulk RC and colleagues. DNM narrative review. Mediastinum. 2025. | https://pmc.ncbi.nlm.nih.gov/articles/PMC11982982/ (odontogenic origin, chest pain and dysphagia, cephalosporin with metronidazole or piperacillin-tazobactam, early source control) |
| cps-precordial-catch-s85 | Kofman K and colleagues. Precordial catch syndrome. Paediatr Child Health. 2024. | https://pmc.ncbi.nlm.nih.gov/articles/PMC11261817/ (features, red flags, testing rarely needed, posture advice) |
| chest-pain-scamp-s85 | Verghese GR and colleagues. Pediatric chest pain SCAMP. J Am Heart Assoc. 2012. | https://pmc.ncbi.nlm.nih.gov/articles/PMC3487367/ (exertional pain drives echo use, exertional syncope, fever, first-degree sudden death) |
| bts-pleural-2023-s85 | Roberts ME and colleagues. BTS guideline for pleural disease. Thorax. 2023. | Europe PMC record PMID 37433578. Full text blocked (403), so no URL |
| ptx-review-2024-s85 | Cheng HS and colleagues. Spontaneous pneumothorax mini-review. J Thorac Dis. 2024. | https://jtd.amegroups.org/article/view/88287/html (BTS 2023 high-risk characteristics, symptoms and risk drive treatment, chest drain often needed in SSP, ambulatory vent 46% against 15% failure) |

## Anything uncertain

1. chest-pain-52 cites the BTS 2023 algorithm through the Cheng 2024 review because the BTS full text could not be opened. A reviewer with access should check the BTS pathway wording for secondary pneumothorax, chest drain and admission.
2. chest-pain-49 takes the list of poor prognosis predictors from the 2015 ESC guideline. The 2025 guideline keeps the predictor-based admission rule, but its table could not be read. Please confirm the list is unchanged.
3. chest-pain-48 q4 keys esmolol before CT is confirmed. The update makes CT 45 minutes away to support starting treatment on suspicion. The guideline targets (heart rate 60 to 80, systolic below 120 mmHg) match ems-30.
4. chest-pain-50 q3 says a normal chest X-ray may miss early mediastinal spread. EACTS supports CT as essential for early detection but does not give a sensitivity figure for plain films.
5. chest-pain-51 q2 keys no further testing after a normal ECG. Kofman says testing is rarely needed once precordial catch is diagnosed. The ECG is already in the stem, so the key does not depend on whether an ECG is routine.
6. With the machine at a load average near 19 from parallel agents, the bank-wide near duplicate test hit its 5 second timeout on the last runs of the standard command. Every other test passed. The same suite passed in full (104 of 104) with `--testTimeout=120000`, and it passed under the standard command earlier in the session. The highest similarity of a new stem is 0.10 against a limit of 0.5.
7. The web search budget ran out late in the session. All citations above were checked before that, by direct fetch or Europe PMC record.

## Revision 1

This revision answers `docs/reviews/q500b-qa-s85.md`. It replaces the earlier tables wherever they disagree.

### chest-pain-48 replaced

- The aortic SAMP is gone. Its four teaching points were already in `batch17/bench-press-chest-pain`, chest-pain-01, ems-30 and the seed case. The ACC/AHA 2022 and ADvISED sources were removed with it.
- New SAMP, same id: "Pain near the collarbone after yard work". A 61-year-old man with diabetes and an infected foot ulcer has 12 days of worsening pain at the right sternoclavicular joint, with night chills and a temperature of 37.6°C. The diagnosis is sternoclavicular septic arthritis.
- Bank grep before writing: no hits for sternoclavicular septic arthritis in `src/samps` or `src/cases`. The only sternoclavicular hit is the s29 msk posterior dislocation item, which is unrelated. Highest stem trigram Jaccard is 0.08.
- Same key feature map as before:
  - q1 KF3: chills with steadily worsening pain point to infection over strain.
  - q2 KF4: infected diabetic foot ulcer, which counts as both a distant infection and diabetes.
  - q3 KF5: a temperature of 37.6°C does not exclude it, because only 65% were febrile.
  - q4 KF2: blood cultures and CT of the chest wall.
- Source: Ross JJ, Shamsuddin H. Sternoclavicular septic arthritis: review of 180 cases. Medicine (Baltimore). 2004. Verified on the Europe PMC record for PMID 15118542, abstract read in full: chest pain 78%, shoulder pain 24%, median 14 days, 65% febrile, bacteremia 62%, intravenous drug use 21%, distant infection 15%, diabetes 13%, trauma 12%, central line 9%, abscess or phlegmon 25%, mediastinitis 13%, S. aureus 49%, routine CT or MRI, MRSA cover. No URL was added: the DOI goes to a paywall (402), and the Europe PMC and PubMed pages returned 403 or a cookie wall.
- The ",." typo goes away with the old q1.

### chest-pain-50

- q3: the key now reads "It may be normal early in this illness", so it no longer names the mediastinum. The other options and the key position are unchanged.
- q4: the update now says "on-call surgical services" instead of "thoracic surgery".

### chest-pain-51

- q1: "not by exclusion" is now "It is a clinical diagnosis made from the history and examination."

### chest-pain-52

- q1: the explanation now says COPD with emphysema is "a common cause", and the question cites BTS 2023 instead of Cheng.
- q2: replaced with a menu (select 2) on the 2023 BTS high-risk characteristics she has: age over 50 with a heavy smoking history, and a saturation of 86%. Underlying lung disease is left off the options so the q1 key is not shown. The new list is verified in Cheng 2024 (re-fetched). Its key feature is now KF4.
- q4: replaced with the choice of drainage device. The key is a 12 Fr small-bore drain. Distractors are an 8 Fr ambulatory vent, 24, 28 and 32 Fr large-bore drains. Cheng 2024, re-fetched, gives:
  - 12 to 14 Fr: less pain, shorter drainage time, fewer complications, success similar to large-bore drains.
  - Large-bore drains: kept for a large air leak, surgical emphysema or mechanical ventilation. Drains over 28 Fr give no added flow.
  - Ambulatory vent: failed in 46% against 15% in secondary pneumothorax.

  Needle aspiration is not used as a distractor, because Cheng reports a higher immediate success in the one secondary pneumothorax trial. Neither drain plus admission nor the 88 to 92% oxygen target is keyed.

### Batch after revision

- 5 SAMPs, 20 questions: 17 single, 3 menu (49 q2, 51 q3, 52 q2).
- Single key positions 1 to 5: 3, 3, 4, 4, 3. The key is the single longest option in 4 of 17.

| Key feature | Questions |
|---|---|
| KF1 | 2 (49 q4, 50 q2) |
| KF2 | 4 (48 q4, 49 q3, 50 q4, 52 q4) |
| KF3 | 6 (48 q1, 49 q1, 50 q1, 51 q1, 51 q2, 51 q3) |
| KF4 | 5 (48 q2, 49 q2, 51 q4, 52 q1, 52 q2) |
| KF5 | 3 (48 q3, 50 q3, 52 q3) |

- Tests: `SAMP_BATCH=s85 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed 128 of 128. tsc reports no errors for samps/s85.

### Still uncertain

1. Ross 2004 is a 2004 review with no current guideline behind it. It is the largest case series of this infection.
2. chest-pain-52 q4 shows that she will be drained, and in mock mode that is visible while q3 (size against symptoms) is answered. The earlier q4 (drain plus admission) carried the same cue and q3 passed review.
3. In chest-pain-52 q2, "significant hypoxia" has no numeric cut-off in the source. The saturation of 86% against her usual 92% is offered as significant.

## Revision 2

This revision answers `docs/reviews/q500b-verify-s85.md`. It replaces the earlier tables wherever they disagree.

### chest-pain-48 q3

- The distractor "It makes blood cultures unneeded" is now "It suggests gout in the joint", so q3 no longer gives away part of the q4 key. The key is still index 0.
- The explanation sentence on bacteremia is replaced with the reviewer's sentence on gout.
- The temperature wording is now consistent: "a temperature below 38°C" and "This temperature".

### chest-pain-51

- Stem: added "She has had no palpitations." The q2 explanation relies on this.
- q3 prompt now reads "Which of the following features in a child with chest pain are red flags that call for echocardiography?" The options, key and explanation are unchanged.

### chest-pain-52 replaced (same id)

- The pneumothorax SAMP is gone. Its q3 repeated signed chest-pain-19, and its q4 repeated the signed batch03 secondary pneumothorax case. BTS 2023 and Cheng 2024 were removed with it, so the UK spelling in the old q2 is gone too.
- Before writing, I searched all of `src` (every batch, the Q500B ones included) for Pancoast, superior sulcus, slipping rib, Mondor and xiphodynia. There were no hits.
- New SAMP: "Shoulder pain that physiotherapy did not help". A 63-year-old man who has smoked for 45 pack-years has 3 months of constant shoulder and upper chest pain that is worse at night and does not change with movement. The pain now runs to the little finger, and he has lost 5 kg. He has Horner syndrome and weak finger abduction, and a walk-in chest X-ray 6 weeks ago was reported as normal. The diagnosis is a superior sulcus (Pancoast) tumour. The stem is 150 words.
- Key feature map as asked:
  - q1 KF4: 45 pack-years is the strongest risk factor.
  - q2 KF4: unequal pupils with ptosis (Horner syndrome) most raises the probability of an apical cause.
  - q3 KF5: the earlier chest X-ray is unreliable at the lung apex.
  - q4 KF2: CT of the chest with contrast.
- No MRI option is offered, because the source names MRI as its preferred modality. The q4 explanation says so.
- Source, read in full on PMC: Wilkinson M, Obst S, Palmer T, Whish-Wilson G. Misdiagnosis of superior sulcus tumours: a scoping review. J Thorac Dis. 2026. https://pmc.ncbi.nlm.nih.gov/articles/PMC12972777/
- Facts used from that review:
  - Shoulder pain 60%, arm pain 26%, weight loss 20%, Horner syndrome 18%. T1 neuropathy was the commonest neuropathy.
  - Radiographic error was the commonest cause of delay. One study had 78 lesions missed and 20 misdiagnosed on 166 radiographs from 50 patients.
  - Shoulder pain with Horner syndrome, a smoking history or weight loss should prompt apical imaging.
  - The pain of these tumours is not mechanical.
  - Passive range and crepitus help identify glenohumeral arthritis. Spurling and traction tests help identify cervical radiculopathy.
  - MRI is preferred, with a sensitivity of about 90%, and CT is preferred over X-ray for staging.

### Batch after revision 2

- 5 SAMPs, 20 questions: 18 single, 2 menu (49 q2, 51 q3).
- Single key positions 1 to 5: 3, 4, 4, 4, 3, so no position holds more than 25%. The key is the single longest option in 5 of 18 (28%).

| Key feature | Questions |
|---|---|
| KF1 | 2 (49 q4, 50 q2) |
| KF2 | 4 (48 q4, 49 q3, 50 q4, 52 q4) |
| KF3 | 6 (48 q1, 49 q1, 50 q1, 51 q1, 51 q2, 51 q3) |
| KF4 | 5 (48 q2, 49 q2, 51 q4, 52 q1, 52 q2) |
| KF5 | 3 (48 q3, 50 q3, 52 q3) |

- Highest stem trigram Jaccard against the bank: 0.10.
- Tests: `SAMP_BATCH=s85 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed 128 of 128. tsc reports no errors for samps/s85.

### Uncertain

1. chest-pain-52 is a subacute presentation to the ED. The key decision is to image the apex now, but some EDs would arrange urgent outpatient CT instead. The options do not set CT now against urgent outpatient CT.
2. The scoping review is the only source for chest-pain-52. It is recent and was read in full, but it is a review, not a guideline.
3. The Horner syndrome mechanism in 52 q2 (invasion of the sympathetic chain) is standard teaching and is not quoted from the review.
