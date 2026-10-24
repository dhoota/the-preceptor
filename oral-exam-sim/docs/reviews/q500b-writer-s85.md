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
