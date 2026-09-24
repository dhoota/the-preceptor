# Review of the SAMP overlap pass

Lenses: A (clinical truth) and B (internal consistency, numbers and format), applied to the 11 SAMPs rewritten in `docs/reviews/samps-overlap-pass.md`. Task 2 checked s53 tox-16, tox-21, tox-28 and tox-39 for overlap.

Every SAMP touched keeps its id, topic, question count and `reviewed: false`. No signed-off SAMP was edited.

## Verdicts, task 1

| SAMP | Question | Verdict | Flaw found and change made | Confidence | Source |
|---|---|---|---|---|---|
| ischemic-heart-disease-16 | q2 | Fixed | The key (pantoprazole with DAPT after an ulcer bleed) is right. The distractor reason "not the agents that guideline recommends" is a "not indicated" reason. Each distractor now has its own true reason: famotidine suppresses acid less completely, misoprostol protects mainly against NSAID injury and causes diarrhea, sucralfate has no proven preventive role. | Medium | Byrne 2023 ESC ACS (PPI with DAPT at high GI bleeding risk, class I) |
| ischemic-heart-disease-18 | q1 | Fixed | The explanation called the crackles "new" and the onset "sudden". The stem says neither. It now says "of 90 minutes" and drops "new". "He has no history of COPD" is reworded to match the stem. Sgarbossa ratios recomputed: 5/16 = 0.3125 (about 0.31), 3/16 = 0.1875 (about 0.19). Both correct. | Medium | Gulati 2021, Dodd 2021 |
| ischemic-heart-disease-23 | q1 | Fixed | False distractor reason. The explanation said T wave inversion across V2 to V4 "was present in both groups" of Kosuge 2007 and "cannot separate them". The abstract says negative T waves in V3 to V6 were less frequent in pulmonary embolism, so inversion in V3 and V4 favours ACS. The option is now "T wave inversion in V3 and V4", and the explanation states the true finding. The 88%, 1% and 99% figures match the abstract. | High | Kosuge 2007, abstract read on PubMed (PMID 17350373) |
| ischemic-heart-disease-23 | q2 | Fixed (flagged item settled) | Wells recomputed: pulse over 100 (1.5), surgery in 4 weeks (1.5), cancer treated within 6 months (1), PE most likely (3), total 7. The 3 points are defensible, but the explanation rested them on the ECG alone. It now names the stem facts that make embolism the leading diagnosis: saturation of 88% with clear lungs, a near faint, cancer surgery 3 weeks ago and negative T waves in III and V1. Without the 3 points the score is 4 (PE unlikely), so the key does depend on this judgement. | Medium | Konstantinides 2019 ESC PE (CTPA without D-dimer when PE is likely or probability is high) |
| ischemic-heart-disease-23 | q3 | Kept | Stopping ticagrelor once PE explains the troponin is defensible. The oxygen reason (ESC advises oxygen below 90%) is true. | Medium | ESC PE 2019 |
| ischemic-heart-disease-27 | q3 | Kept | TIMI IIIB figures verified against the abstract: 54.2% vs 55.5% (NS), MI 7.4% vs 4.9% (P = .04), 4 intracranial hemorrhages vs 0. The trial used alteplase and the stem asks about tenecteplase. This is a class inference and is acceptable. The key "Not indicated without ST elevation" ignores posterior MI as an exception, but her depression is in V4 to V6, so the key holds for her. | Low | TIMI IIIB 1994, PMID 8149520 |
| ischemic-heart-disease-34 | q4 | Kept | Ramipril as the drug to avoid in pregnancy is correct. The ESC 2025 pregnancy guideline does not recommend ACE inhibitors, and recommends ASA with clopidogrel after stenting. ACE inhibitor avoidance in pregnancy is now keyed twice bank-wide (pre-eclampsia s47 and here). That is within the two-instance limit. | Medium | De Backer 2025 ESC pregnancy |
| ischemic-heart-disease-46 | q3 | Fixed (flagged item settled) | "Which of the following treatments is expected to be ineffective" is a negative lead-in in disguise, which SAMP_SPEC section 6 forbids. Rebuilt as a positive question: "Which of the following drugs is most appropriate to raise his heart rate?" Key: epinephrine infusion. Distractors: atropine (no vagal innervation), calcium chloride (potassium 4.4 mmol/L added to the update, no calcium channel blocker), glucagon (no beta blocker), magnesium (for torsades). The old pacing options were dropped because pacing is also correct. | High | Wu 2025 J Clin Med, full text read on PMC: atropine does not raise HR after denervation, beta-adrenergic agents remain effective |
| ischemic-heart-disease-46 | q1, q2 | Kept | Wu 2025 supports both: no angina because of denervation, and prompt referral to the transplant centre when ischemia or rejection is suspected. | Medium | Wu 2025 |
| infectious-diseases-31 | all | Kept | The stem no longer holds ketoacidosis data, and no explanation refers to it. The new lactate and BP support "sepsis" in q4. | Medium | Bersoff-Matcha 2019, Stevens 2014 |
| infectious-diseases-35 | all | Kept | Menu indexes checked: 0, 4 and 6 are age, PPI and ciprofloxacin. WBC 18.6 and creatinine 142 umol/L (above 133) meet IDSA severe criteria. The new soft abdomen and present bowel sounds support "not fulminant". No new overlap: fidaxomicin appears only in this SAMP. | Medium | McDonald 2018, Johnson 2021 |
| abuse-domestic-20 | stem | Fixed | Plausibility. The stem justified a chest x-ray in bronchiolitis by the low saturation, which teaches imaging that the CPS does not advise routinely. The stem now gives crackles at the right base, and the film is done to look for pneumonia. | Low | CPS bronchiolitis guidance (not a cited source, stem change only) |
| abuse-domestic-20 | q1, q2 | Kept | Barsness 2003 verified on PubMed (PPV 95%, 100% once other causes are excluded, 29% rib only). Lindberg 2013 verified (AUC 0.87, 0.72 lipase, 0.67 amylase, 80 U/L threshold, 83.8% and 83.1%). Transaminase screening (q2) and acting on raised transaminases (abuse-domestic-18 q2, CT) are different decisions. | High | PMID 12813330, PMID 23319537 |
| tox-27 | stem | Fixed | Format. The stem opened "A 38-year-old farm worker" with no sex, against SAMP_SPEC section 3. It now opens "A 38-year-old man who works on a dairy farm". | High | n/a |
| tox-27 | q2 to q4 | Kept | ATSDR checked on the CDC site: nitrite "currently recommended if it can be started shortly after exposure", "questionable" beyond the first few minutes, hyperbaric oxygen "controversial and based on anecdotal evidence", 24 hour monitoring after serious exposure, discharge after 4 to 6 hours only if asymptomatic, and blood and urine tests "generally are not useful". No other SAMP covers hydrogen sulfide as a case. | High | ATSDR 2014, Ng 2019 |
| shock-39 | whole SAMP | Rebuilt | The writer's rewrite created a new near duplicate of a signed-off SAMP. shock-06 (s16) is "Diver pulled from the lake": a man dives from a dock into shallow water, friends pull him out, pulse 48, BP 76/40, warm skin, then "1 L of crystalloid, HR 46, BP 80/44", then the vasopressor question with the identical five options and norepinephrine as key. shock-39 had the same setup, the same numbers within 2 mmHg and the same question. Neurogenic versus hemorrhagic shock is also keyed in multiple-trauma-40. I rebuilt shock-39 as dynamic outflow obstruction in known obstructive hypertrophic cardiomyopathy made worse by gastroenteritis and missed metoprolol. q1: dynamic outflow tract obstruction as the cause (KF5). q2: phenylephrine as the vasopressor (KF7). q3: restart metoprolol, with verapamil, digoxin and furosemide as harmful distractors (KF8). KF mapping stays 5, 7, 8. Grep found no other SAMP on shock from outflow obstruction in HCM. The takotsubo outflow obstruction item in chest-pain-25 tests a different disease and no vasopressor choice. | High | Ommen 2024 AHA/ACC HCM guideline (phenylephrine or another vasoconstrictor without inotropic activity, alone or with a beta blocker, for acute hypotension not responding to fluid. Beta blockers first line. Vasodilators, digoxin and high-dose diuretics worsen obstruction) |

## Key changes

- ischemic-heart-disease-46 q3. Before: key "atropine 1 mg IV" to a negative lead-in ("expected to be ineffective"). After: key "epinephrine infusion 2 mcg/minute IV" to "most appropriate to raise his heart rate". Reason: negative lead-ins are not allowed, and two pacing options were also defensible under the old wording.
- shock-39 q1 to q3. The whole SAMP was rebuilt (see above). Keys are now dynamic outflow tract obstruction, phenylephrine infusion and metoprolol 25 mg PO.

## Verdicts, task 2 (s53)

| SAMP | Verdict | Reason |
|---|---|---|
| tox-16 | Kept, distinct enough | Hydroxychloroquine overdose appears as a case only here. Elsewhere it is only an item in a legacy write-in list (s18) and a risk factor in chest-pain and pre-eclampsia items. The epinephrine key for chloroquine-type hypotension appears only here. |
| tox-21 | Kept, distinct enough | Sustained release potassium chloride overdose appears only here. Whole bowel irrigation is keyed in several SAMPs, but each for a different ingestion (iron, verapamil, packets, potassium). The drug specific indication is the teaching point. |
| tox-28 | Kept, distinct enough | Theophylline overdose appears as a case only here. Multiple dose charcoal is keyed twice (tox-28 theophylline, the s53 carbamazepine item), which is within the limit. |
| tox-39 | Kept, distinct enough | Nitrous oxide myeloneuropathy, methylmalonic acid and a normal B12 appear only here. Other nitrous oxide items concern analgesia. |

## Found on search, outside this task

- Iron ingestion with whole bowel irrigation is keyed in s18 (legacy, signed off, line about 1303) and in shock-45 (s50) for a toddler with the same drug and decision. Left unchanged because it is outside this task. For the lead to schedule.

## Sources verified

- Kosuge 2007, Am J Cardiol, PubMed abstract (PMID 17350373). The DOI in the bank is correct.
- TIMI IIIB 1994, Circulation, PubMed abstract (PMID 8149520).
- Wu 2025, J Clin Med, full text via PMC (PMC11856219).
- Barsness 2003, J Trauma, PubMed abstract (PMID 12813330).
- Lindberg 2013, Pediatrics, PubMed abstract (PMID 23319537).
- ATSDR hydrogen sulfide medical management guideline, https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=385&toxid=67
- De Backer 2025 ESC pregnancy guideline, via search of the published summary (ACE inhibitors not recommended, ASA with clopidogrel after stenting).
- Ommen 2024 AHA/ACC HCM guideline, https://doi.org/10.1161/CIR.0000000000001250. I confirmed the phenylephrine and vasodilator recommendations through the ACC summary and search results. The full text was not reachable.

## Checks

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes for s20, s41, s42, s50 and s53.
- `npx tsc --noEmit -p .` passes.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts` passes (4 503 tests).

## SAMP ids edited

ischemic-heart-disease-16, ischemic-heart-disease-18, ischemic-heart-disease-23, ischemic-heart-disease-46, abuse-domestic-20, tox-27, shock-39.

## For the physician

- IHD-23 q2. The key (CT pulmonary angiography before invasive angiography) depends on counting "PE most likely" for 3 Wells points. Without them the score is 4. I judged the 3 points defensible from hypoxemia with clear lungs, near syncope and the ECG. Please confirm.
- IHD-46 q3. The epinephrine starting dose of 2 mcg/minute comes from the AHA bradycardia algorithm, not from the cited Wu 2025 review. Wu supports only the principle that beta-adrenergic drugs work and atropine does not. The 2025 AHA adult ALS guideline could not be opened to cite it directly.
- shock-39 is a new case. Please check the key in q3 (restarting oral metoprolol while on phenylephrine). The AHA/ACC recommendation supports phenylephrine "alone or in combination with beta-blocking drugs". The statement that verapamil is potentially harmful with hypotension comes from the 2020 AHA/ACC guideline, and I believe the 2024 update keeps it.
- IHD-27 q3. The key "Not indicated without ST elevation" does not allow for posterior MI with ST depression in V1 to V3. It is correct for this patient, whose depression is in V4 to V6.
- IHD-23 and IHD-46 cite ESC and US sources. No Canadian guideline covers these points, apart from the Thrombosis Canada PE guides, which could replace ESC 2019 for q2.

## Second check

An independent second reviewer checked the three items that had no second look. Lens A and lens B.

| SAMP | Question | Verdict | Finding and change | Confidence | Source |
|---|---|---|---|---|---|
| shock-39 | q1 to q3 | Kept | The keys hold. The AHA/ACC recommends IV phenylephrine or another vasoconstrictor without inotropic activity, alone or with a beta blocker, for acute hypotension in obstructive HCM that does not respond to fluid. The ACC key points confirm that verapamil is contraindicated with hypotension or rest symptoms. The guideline also advises stopping digoxin and vasodilators in obstructive HCM. Each distractor reason is true. The numbers agree: pulse 118, then 112, then 108, BP 82/50, then 84/52, then 104/64, 2 L then a third litre in a 62 kg woman. Grep found no HCM shock case elsewhere. HCM appears in s24 and s28 only as an exertional syncope diagnosis, and in s01 to s18 only as an ECG finding (s16 seizures). No overlap with a signed-off SAMP. | Medium | Ommen 2024 AHA/ACC HCM guideline, https://doi.org/10.1161/CIR.0000000000001250 (full text blocked, checked through the ACC key points and guideline summaries) |
| ischemic-heart-disease-46 | q3 | Fixed (source and one sentence) | Epinephrine is defensible. Isoproterenol, aminophylline and pacing are not among the options, so no distractor is also correct. The 2018 ACC/AHA/HRS bradycardia guideline says atropine should not be used after heart transplant without reinnervation (class III, harm). It allows beta agonists, including epinephrine, for sinus node dysfunction with hemodynamic compromise. Its dosing table gives epinephrine 2 to 10 mcg/minute, so the 2 mcg/minute start is correct. The same table supports the distractor doses of calcium chloride and glucagon. The question cited only Wu 2025, which does not give a dose. It now cites Kusumoto 2018. The guideline limits beta agonists to patients at low likelihood of ischemia, and this man may have ischemia. The explanation now says epinephrine raises oxygen demand, so pacing is prepared as well. | High | Kusumoto 2018, https://doi.org/10.1161/CIR.0000000000000628, dosing table read in the ACC Guidelines Made Simple bradycardia booklet |
| ischemic-heart-disease-23 | q1 | Fixed (wording) | The Kosuge abstract (PMID 17350373) confirms 88% versus 1%, a specificity of 99%, and that negative T waves in V3 to V6 were less frequent with PE. The study enrolled patients with negative T waves in the precordial leads V1 to V4, not patients inverted in all four leads. The explanation now says "negative precordial T waves in V1 to V4 on admission". | Medium | Kosuge 2007, https://doi.org/10.1016/j.amjcard.2006.10.043 |
| ischemic-heart-disease-23 | q2 | Kept | Wells recomputed: pulse 112 (1.5), colectomy 3 weeks ago (1.5), colon cancer treated within 6 months (1), PE the most likely diagnosis (3). No signs of DVT, no prior VTE, no hemoptysis. The total is 7, so PE is likely. The key still depends on the 3 points for "PE most likely", as the first reviewer noted. | Medium | Konstantinides 2019 ESC PE |

Checks after these edits: `SAMP_BATCH=s42` and `SAMP_BATCH=s50` pass `tests/samps.test.ts` and `tests/samp-quality.test.ts`. `npx tsc --noEmit -p .` passes. `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts` passes (4 503 tests).

SAMP ids edited in the second check: ischemic-heart-disease-46, ischemic-heart-disease-23.

For the physician:
- IHD-46 q3. Post transplant, the 2018 guideline rates aminophylline as reasonable (class IIa) and beta agonists as "may be considered" in patients at low risk of ischemia. Epinephrine is keyed because aminophylline, isoproterenol and pacing are not options. Please confirm that epinephrine is the best of the five options for a hypotensive man who may have ischemia.
- shock-39. The full 2024 HCM guideline text could not be opened. The phenylephrine and verapamil statements were confirmed only through summaries.
