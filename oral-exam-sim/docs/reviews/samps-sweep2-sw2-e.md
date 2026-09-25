# Sweep 2 rebuilds, batch s42 (label sw2-e)

Writer SW2-E. File: `src/samps/s42/ischemic-heart-disease.ts`. Only the three listed SAMPs were changed. ischemic-heart-disease-23 and 46 were left alone. Nothing was committed.

## Search before writing

I dumped every chest-pain, ischemic-heart-disease and arrhythmia SAMP in the bank (141 SAMPs, s03, s05, s12, s24, s28, s42) with its stem and keyed answers. I read them all before choosing each story. I also searched other topics for the same scenarios and decisions (anemia with ACS in gi-bleed, mechanical complications in pulmonary-edema and shock, fondaparinux and HIT in dvt-pe, exercise-induced asthma in asthma-copd). I dropped several first ideas because another SAMP already held them. These included papillary muscle rupture (s15), anemia with MI (s11), HIT (s33) and a "salbutamol did not help" throat tightness story (s25). I re-ran the searches just before finalizing.

## Rebuilt SAMPs

| SAMP | Old scenario (copied) | New scenario | Keyed decisions (KF) | Sources |
|---|---|---|---|---|
| ischemic-heart-disease-24 (v3) | Man near 80 with an anterior STEMI in a rural hospital 3 hours from PCI, half dose tenecteplase then transfer (copied chest-pain-15) | 79-year-old man at a community hospital with 3 hours of aching in both forearms at rest, sweating and new lateral ST depression. He blamed arthritis and started diclofenac a week ago. His NSTEMI is confirmed, and the PCI centre can take him in 3 days | q1 forearm ache is myocardial ischemia (KF5). q2 fondaparinux 2.5 mg SC daily when angiography will not be within 24 hours (KF7). q3 stop diclofenac (KF7). q4 ventricular tachycardia is a very high-risk feature that calls for immediate angiography (KF3) | ESC 2023 ACS guideline (doi 10.1093/eurheartj/ehad191). Schjerning Olsen, Circulation 2011 (doi 10.1161/CIRCULATIONAHA.110.004671) |
| ischemic-heart-disease-41 (v3) | Man in his fifties with recurrent pain, normal ECG and two normal troponins, keyed HEART score, admission and sharp pain not excluding ACS (copied chest-pain-09) | 66-year-old woman woken by heaviness and sweating. A lung cancer screening CT showed no coronary calcium. Her hs troponin T is 12, 13 and 13 ng/L, all under the 99th percentile, and falls in the observe zone | q1 zero coronary calcium does not rule out obstructive disease (KF4). q2 ward admission for further evaluation (KF8). q3 CT coronary angiography to resolve the diagnosis (KF8) | CONFIRM registry, Villines, JACC 2011 (doi 10.1016/j.jacc.2011.10.851). ESC 2023 ACS guideline |
| ischemic-heart-disease-42 (v4) | Middle aged man with exertional episodes, normal troponins and ECG, keyed outpatient ischemia testing and sublingual nitroglycerin (copied ischemic-heart-disease-15) | 64-year-old woman sent by her physiotherapist after 5 weeks of "thoracic strain". On the treadmill the pain between her shoulder blades came only with brisk walking and eased within 2 minutes. Movement and pressure on the spine did not bring it on | q1 exertional angina as the cause of upper back pain (KF5). q2 CT coronary angiography, not exercise ECG (KF8). q3 resting echocardiogram as part of the evaluation (KF8) | ESC 2024 chronic coronary syndromes guideline (doi 10.1093/eurheartj/ehae177) |

Key features and question counts are unchanged: 24 keeps 5, 7, 7 and 3 over 4 questions. 41 keeps 8, 8 and 4 over 3 questions, now in the order 4, 8, 8. 42 keeps 5, 8 and 8. All questions are single best answer. The titles are neutral, and each version went up by 1 with `reviewed: false` kept.

## Source checks

- ESC 2023 ACS: I read the full text (PDF). Checked items: fondaparinux recommended when early angiography (under 24 hours) is not expected, with a single UFH bolus at PCI and avoided if CrCl is under 20 mL/minute. UFH, or enoxaparin as an alternative, for early angiography. Enoxaparin if fondaparinux is unavailable. The list of very high-risk criteria. Arm pain as a chest pain equivalent. Observe-zone mortality comparable to rule-in, a third troponin at 3 hours, and non-invasive imaging on the ward with CCTA named.
- ESC 2024 CCS: I read the full text (PDF). Checked items: upper back pain on exertion as an angina equivalent (IIa B). Effort angina settling in 1 to 5 minutes (Figure 3). CCTA recommended for low or moderate likelihood (I A). Exercise ECG not recommended to rule out CAD when CCTA or functional imaging is available (III C). Resting echocardiogram recommended (I B). Ambulatory ECG for suspected vasospasm. Carotid imaging only to adjust a low likelihood (IIb). The risk factor-weighted table gives women aged 60 to 69 at most 19%.
- Schjerning Olsen 2011 and Villines 2011: checked against the PubMed abstracts. The hazard ratios 1.45 and 3.26 and the percentages 13%, 3.5%, 3.9% and 0.8% are quoted from them.
- CrCl for 24: (140 minus 79) x 72 x 1.23 / 88 = 61.4 mL/minute.

## Checks

- `SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 655 passed.
- `npx tsc --noEmit -p .`: clean.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.

## For the physician

- 24 q2: fondaparinux is keyed because the ESC 2023 guideline gives it a Class I recommendation when angiography will be delayed past 24 hours. Fondaparinux is sold in Canada, and its Canadian monograph lists UA/NSTEMI. Please confirm this fits your local practice. Some Canadian sites use enoxaparin by default.
- 24 q3: the NSAID evidence is a cohort study of patients after a first MI, not a trial in acute NSTEMI. The explanation says so.
- 41: the hs troponin T values are written so that the stem states the protocol's result (observe zone). The item does not depend on any one assay's cut-offs. Mapping q2 and q3 to KF8 depends on reading "ensure investigation until the diagnosis is eliminated or confirmed" to include observe-zone patients who are not strictly low risk. Please confirm.
- 41 q1: CONFIRM used ECG-gated calcium scoring. The stem's scan was a screening CT. The teaching point holds either way, but the explanation quotes only CONFIRM's figures.
- 41 q3 and 42 q2 both key CT coronary angiography, for different reasons in unrelated stories. One is an observe-zone troponin and the other is exertional back pain in suspected chronic coronary syndrome.
- The "later items never imply an earlier key" rule was followed as closely as a sequential case allows. In 24, the q2 update reports a troponin rise, which fits the q1 diagnosis. The update does not name it.
