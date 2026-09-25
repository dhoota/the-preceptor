### abdominal-pain-28 (s19)

**Problem.** Triage held this SAMP because pediatric-fever-44 (s46) was a near copy: IgA vasculitis after a sore throat with a urinalysis and BP follow-up key. That problem no longer exists. pediatric-fever-44 is now version 2, "Red patch on the thigh after a camping trip", about erythema migrans and doxycycline (rebuilt in docs/reviews/samps-replace-s33-s44-s45-s46.md). gi-bleed-43, the other IgA vasculitis copy, is now a juvenile polyp case (docs/reviews/samps-replace-s39-s42.md). A search of src/samps for "IgA vasculitis" and "Henoch" finds only this SAMP's MCQ items, one accept line in the s01 write-in abdominal-pain-04 (causes of abdominal pain from outside the abdomen), and two source constants left in src/samps/s46/pediatric-fever.ts (eularIgav and narchi) that no SAMP now lists or cites. abdominal-pain-28 is now the only IgA vasculitis MCQ in the bank.

**Evidence.**
- Narchi H. Risk of long term renal impairment and duration of follow up recommended for Henoch-Schonlein purpura with normal or minimal urinary findings: a systematic review. Arch Dis Child. 2005. https://doi.org/10.1136/adc.2005.074641 (PMID 15871983). The abstract says: "Proteinuria and/or haematuria ... developed in 85% of cases within 4 weeks ... and in 97% within 6 months." It concludes: "Even if urinalysis is normal at presentation, the testing should be continued for six months." This supports the q3 key (serial urinalysis and BP).
- The cited SHARE 2019 recommendations (Ozen S et al. Rheumatology (Oxford). 2019. https://doi.org/10.1093/rheumatology/kez041) could only be read as an abstract. It lists "renal work-up" among its diagnostic recommendations. The q1 and q3 keys agree with it.

**Proposal: NO CHANGE, release from HOLD.** The overlap is gone. The keys are correct. The q2 intussusception question stays unique in the bank.

**Cueing check.** Not applicable. The text is unchanged.

**Arjan decides:** approve / reject

Reviewer: SOUND. Current text matches. Narchi 2005 abstract (PMID 15871983) confirmed word for word. SHARE 2019 (PMID 30879080) confirmed as the cited work. pediatric-fever-44 is now the Lyme case and gi-bleed-43 the polyp case. Corrected the search claim: two unused Henoch source constants remain in s46/pediatric-fever.ts (dead code, not a bank item). The release holds.

---

### analgesia-sedation-29 (s22)

**Problem.** q1 keys "fentanyl 50 mcg/hour IV" alone as the first infusion, 15 minutes after ketamine 150 mg and rocuronium 100 mg. The PADIS analgesia-first approach was written for ICU patients who are not paralysed. Here the induction ketamine wears off long before the rocuronium does. An opioid-only start leaves a paralysed patient open to awareness. The q2 update then shows the signs of that awareness. The SAMP teaches the unsafe order and then tests the harm it causes. In mock mode, q2 ("The fentanyl infusion is running", key "Bolus fentanyl and start propofol") and q3 ("She is on fentanyl and propofol infusions") also give away the q1 key.

**Evidence.**
- Pappal RD, Roberts BW, Mohr NM, et al. The ED-AWARENESS Study: a prospective, observational cohort study of awareness with paralysis in mechanically ventilated patients admitted from the emergency department. Ann Emerg Med. 2021. https://doi.org/10.1016/j.annemergmed.2020.10.012 (PMID 33485698). The abstract says: "Data from the emergency department (ED) demonstrate a high rate of longer-acting neuromuscular blocking agent use, delayed analgosedation, and a lack of sedation depth monitoring. These practices are discordant with recommendations for preventing awareness with paralysis." It also reports: "The prevalence of awareness with paralysis was 2.6% (10/383). Exposure to rocuronium ... (70%) versus the rest of the cohort (31.4%) (unadjusted odds ratio 5.1)." The full text (PMC8166299) adds: "for ED patients receiving longer-acting NMBAs such as rocuronium, post-intubation sedation is initiated at lower doses and with greater delays". Its case table includes patient 1: ketamine 100 mg and rocuronium 60 mg for intubation, then a fentanyl infusion only, with awareness adjudicated. That is this SAMP's current q1 key.
- Limits of this source. ED-AWARENESS is observational and does not name propofol or any agent as the one to start. Several of its awareness cases were on propofol infusions. It supports "analgesia and sedation together, without delay, after rocuronium". It does not by itself make propofol better than midazolam. The key works because the only option that pairs an opioid with a sedative is fentanyl with propofol. No option pairs fentanyl with midazolam or ketamine, which some would prefer in a bleeding trauma patient (pulse 124/minute after 2 units of red cells). Arjan should confirm he is content with propofol as the named sedative here.
- Drug durations, from US prescribing information (openFDA labels). Rocuronium 1.2 mg/kg has a median clinical duration of "67 (38 to 160)" minutes. For ketamine, "the average amount required to produce 5 to 10 minutes of surgical anesthesia ... is 2 mg/kg." Her 100 mg dose is about 1.4 mg/kg, and her ketamine dose is about 2 mg/kg.
- No Canadian guideline on post-intubation sedation in the ED was found. PADIS 2018 stays the source for q2 to q4.

**Proposal: EDIT (q1, q2, q3 update, sources). KEY CHANGE in q1 and q2. The key index is the same (q1 index 1, q2 index 0), so batch position balance is unchanged.**

q1 prompt
- Before: "Which of the following is the most appropriate infusion to start first for her now?"
- After: "Which of the following is the most appropriate infusion plan to start for her now?"

q1 options
- Before: ["dexmedetomidine 0.5 mcg/kg/hour", "fentanyl 50 mcg/hour IV", "midazolam 2 mg/hour IV", "propofol 20 mcg/kg/minute IV", "rocuronium 0.6 mg/kg/hour IV"], correct 1
- After: ["dexmedetomidine infusion alone", "fentanyl and propofol infusions", "fentanyl now, sedative once paralysis ends", "midazolam infusion alone", "propofol infusion alone"], correct 1 (KEY CHANGE: fentanyl and propofol infusions)

q1 explanation
- Before: "With a pelvic fracture and bilateral femur fractures she has severe pain that she cannot report, and rocuronium hides any movement. An analgesia-first approach starts an opioid infusion such as fentanyl before adding a sedative. 50 mcg/hour is about 0.7 mcg/kg/hour at 70 kg. Propofol, dexmedetomidine and midazolam sedate without adequate analgesia for her fractures. A rocuronium infusion adds paralysis without comfort and raises the risk of unrecognized awareness."
- After: "Rocuronium 100 mg, about 1.4 mg/kg, will keep her paralysed long after her induction dose of ketamine wears off. She cannot move or speak, so pain and awareness are both hidden. Fentanyl for her pelvic and femur fractures and propofol to prevent awareness should start together now. Propofol starts at a low rate with close BP monitoring, since she has needed blood. Delaying sedation after rocuronium is the pattern linked to awareness with paralysis in ventilated ED patients. Propofol, dexmedetomidine or midazolam alone leaves her fracture pain untreated."

q1 source
- Before: "padis"
- After: "ed-awareness"

q2 update
- Before: "Twenty minutes later the rocuronium is still active. Her pulse rises to 138/minute and BP to 168/98. The fentanyl infusion is running."
- After: "Twenty minutes later the rocuronium is still active. Her pulse rises to 138/minute and BP to 168/98 mmHg. No drug doses have been changed."

q2 options
- Before: ["Bolus fentanyl and start propofol", "Give labetalol 10 mg IV", "Give more rocuronium", "Increase the ventilator rate", "Order repeat CT of chest and abdomen"], correct 0
- After: ["Give fentanyl 50 mcg IV", "Give labetalol 10 mg IV", "Give rocuronium 50 mg IV", "Increase the ventilator rate", "Order repeat CT of chest and abdomen"], correct 0 (KEY CHANGE in text: Give fentanyl 50 mcg IV)

q2 explanation
- Before: "In a paralysed patient a sudden rise in pulse and BP may be the only sign of pain or awareness, since she cannot move or speak. The right response is to deepen analgesia with a fentanyl bolus and add a sedative such as propofol. Labetalol would hide the warning sign without treating its cause. More rocuronium deepens paralysis while she may be aware. Changing the ventilator rate or repeating CT does not address the likely cause."
- After: "In a paralysed patient a sudden rise in pulse and BP may be the only sign of pain or awareness, since she cannot move or speak. A fentanyl bolus treats the likely pain, and her sedation is then deepened. Labetalol would hide the warning sign without treating its cause. More rocuronium deepens paralysis while she may be aware. Changing the ventilator rate or repeating CT does not address the likely cause."

q3 update
- Before: "The rocuronium has worn off. She is on fentanyl and propofol infusions. She grimaces and fights the ventilator when she is turned."
- After: "The rocuronium has worn off. She grimaces and fights the ventilator when she is turned."

sources (add one. padis stays, cited by q2 to q4)
- Before: [padis]
- After: [padis, { id: "ed-awareness", citation: "Pappal RD, Roberts BW, Mohr NM, et al. The ED-AWARENESS study: a prospective, observational cohort study of awareness with paralysis in mechanically ventilated patients admitted from the emergency department. Ann Emerg Med. 2021.", url: "https://doi.org/10.1016/j.annemergmed.2020.10.012" }]

keyFeature unchanged (q1 analgesia-sedation 4, q2 4).

**Format check.** q1 prompt has 15 words. q1 option lengths are 30, 31, 42, 24 and 23 characters, so the longest is 1.83 times the shortest (limit 2.1). The key is 31 characters, 1.04 times the mean distractor (limit 1.5), and it is not the longest option. q2 option lengths are 23, 23, 24, 28 and 36, a ratio of 1.57. The q2 key is not the longest. Both option sets are in alphabetical order. They contain no absolute words.

**Cueing check (mock mode).** The q2 update no longer names the running infusions. The q2 key names only fentanyl, which appears in three q1 options, so it does not point to the q1 key. The q3 update no longer names fentanyl and propofol. q4 ("once her pain is controlled") gives nothing away. The q1 key is not hedged and not the longest.

**Reviewer change to the q1 explanation.** The draft said propofol "is titrated to her BP". q4 keys light sedation and rejects "Sedation titrated to BP" as a wrong target. The sentence now reads "Propofol starts at a low rate with close BP monitoring, since she has needed blood", so the two questions do not contradict each other. The explanation is 6 sentences. It has no dashes or semicolons.

**Alternative.** Keep the fentanyl-first key, but set the stem after the paralysis has worn off: no rocuronium, or rocuronium given 90 minutes earlier and train-of-four recovered. Then PADIS analgesia-first applies as written, since she is not paralysed. This needs stem, q1 explanation and q2 rebuilds, and it loses the awareness teaching point. Source: Devlin JW, Skrobik Y, Gelinas C, et al. PADIS guideline. Crit Care Med. 2018. https://doi.org/10.1097/CCM.0000000000003299

**Arjan decides:** approve / reject

Reviewer: FIXED. Current text matches all before strings. ED-AWARENESS abstract and full-text quotes confirmed (PMID 33485698, PMC8166299). Rocuronium label "67 (38 to 160)" at 1.2 mg/kg and ketamine "2 mg/kg" for "5 to 10 minutes" confirmed on openFDA. Option lengths, order and ratios rechecked and pass. Changes: (1) q1 explanation no longer says propofol is "titrated to her BP", which clashed with the q4 distractor "Sedation titrated to BP". (2) Evidence now says plainly that ED-AWARENESS supports prompt sedation with analgesia, not propofol in particular, and that the BP context (pulse 124/minute, 2 units given) makes the choice of propofol something Arjan should confirm. It is still the single best option offered, because it is the only opioid plus sedative pair. Mock-mode note: three options end in "alone", so the two fentanyl options stand out. A test-taker still has to choose between sedating now and sedating later, which is the point being taught, so I left the options as they are.

---

### asthma-copd-25 (s25)

**Problem.** The duplicate sweep flagged this SAMP as a possible copy of asthma-copd-06 (s04). Both are school-age children with a viral wheeze who used salbutamol at home without a spacer. Both have a discharge step that covers a spacer, a written plan and an inhaled steroid. Current text shows the overlap is one question out of four:
- asthma-copd-06 is a signed-off, mostly write-in triage and acute-treatment case: PRAM 8 severe (q1), bronchodilator doses (q2, write-in), dexamethasone dose (q3) and a write-in list of discharge interventions (q4). Write-in SAMPs are kept out of mock exams.
- asthma-copd-25 is an MCQ discharge-decision case: readiness for discharge by TREKK criteria at PRAM 1 (q1), the discharge bundle (q2, menu), keeping the low-dose ICS rather than stepping up when adherence is poor (q3), and home salbutamol dosing for the first 24 hours (q4).
Only asthma-copd-25 q2 repeats asthma-copd-06 q4. The stems differ in age, sex, severity, timeline and wording.

**Evidence.** TREKK. Bottom Line Recommendations: Asthma exacerbations for children aged 12 months and older. Version 2.1. February 2024. https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf
- Discharge: "PRAM score less than or equal to 3 at least 1-2 hours after last bronchodilator treatment ... Oxygen saturation greater or equal to 92% in room air" (q1).
- Discharge bundle: "spacer for use with all MDIs", "Asthma Teaching and Action Plan", "follow up with primary care provider or alternative (ideally within 7 days)" (q2).
- Controller: fluticasone "6-11 100 mcg BID" and "Only move to medium dose after ensuring good technique, adherence and trigger control on low dose ICS" (q3).
- Reliever: "2-4 puffs q4h for 24 hours, and then 2 puffs q4h PRN" (q4).
All four keys match the current TREKK text.

**Proposal: NO CHANGE. Keep both.** Three of the four questions in asthma-copd-25 test decisions that asthma-copd-06 does not test. The shared discharge bundle is core teaching for key feature 8. The spec does not permit a repeat by default: docs/SAMP_REVIEW_BRIEF.md item 10 says a repeated teaching point "must be rewritten or flagged". This is the flag, and keeping the repeat is Arjan's call. The two SAMPs also serve different modes: 06 is write-in practice and 25 is for mock exams. (Separate HOLD item, not in this group: asthma-copd-32 keys the opposite discharge answer in the same situation. asthma-copd-25 q1 is the one that matches TREKK.)

**Cueing check.** Not applicable. The text is unchanged.

**Arjan decides:** approve / reject

Reviewer: FIXED. Current text of both SAMPs matches the description. asthma-copd-06 has two short questions, so sampFormat makes it write-in and exam.ts keeps it out of mock exams. All four TREKK quotes were confirmed in the TREKK asthma bottom line recommendations. The newer version 2.3 (March 2025) has the same wording. Change: removed the false claim that "the spec allows a teaching point to be keyed more than once". The review brief says a repeat must be rewritten or flagged, and the text now says so. The recommendation to keep both still stands.

---

### msk-34 (s29)

**Problem.** q3 asks for "the standard target" interval to debridement and keys 24 hours. That figure comes only from the British BOAST 2017 standard. No Canadian standard sets an interval, so a Canadian candidate cannot know which "standard" is meant. q1 (realign a pulseless limb before films) repeats the point of signed-off s06 msk-08 q1 in a different joint. The overlap pass (docs/reviews/samps-overlap-pass2a.md) already accepted that repeat because it is key feature 5 itself. msk-08 is also a write-in SAMP that mock exams leave out.

**Evidence.**
- British Orthopaedic Association. BOAST: Open fractures. December 2017. https://www.boa.ac.uk/resource/boast-4-pdf.html. It reads: "Immediately for highly contaminated wounds (agricultural, aquatic, sewage) or when there is an associated vascular compromise", "within 12 hours of injury for other solitary high energy open fractures", and "within 24 hours of injury for all other low energy open fractures".
- Canadian data: Weber D, Dulai SK, Bergman J, Buckley R, Beaupre LA. Time to initial operative treatment following open fracture does not impact development of deep infection: a prospective cohort study of 736 subjects. J Orthop Trauma. 2014. https://doi.org/10.1097/BOT.0000000000000197 (three Canadian level 1 centres). It reports: "Infection after open fracture was associated with increasing Gustilo grade or tibia/fibula fractures but not time to surgery or antibiotics." The median time to surgery was about 9 hours. This supports "not the old 6 hour rule". It sets no Canadian interval.
- Spec section 9: "When a threshold or dose differs between references, state in the stem which one applies". It also says to use international guidance where no Canadian guidance exists.

**Proposal: EDIT q3 prompt only. No key change.** Name the standard so that the key is exact. Keep q1 as it is.

q3 prompt
- Before: "Which of the following intervals from the time of injury is the standard target for surgical debridement of her open fracture?"
- After: "Which of the following is the British Orthopaedic Association target time from injury to debridement for her fracture?"

Options, key (index 2, "24 hours"), explanation, source (boast-open) and keyFeature (msk 7) are unchanged. The explanation already says "The British Orthopaedic Association open fracture standard sets debridement within 24 hours of injury for low energy open fractures."

**Format check.** The new prompt has 18 words, starts "Which of the following" and ends with "?".

**Cueing check (mock mode).** The prompt names the body, not the interval. Across q1 to q4, no update states a debridement time. The q4 key ("Urgent orthopedic surgery consult") does not point to any interval. The options are numeric, in ascending order and of equal length, so length gives no cue.

**Alternative.** Delete q3 and leave the SAMP with 3 questions (q1, q2, q4), which the spec allows. Key feature 7 is still tested by q4. This avoids testing a British figure in a Canadian bank. The q3 update ("Cefazolin 2 g IV is given ...") would then need to move to q4. Source for dropping it: Weber 2014 above. No Canadian body sets a debridement interval. If Arjan chooses this route, recheck the s29 batch key position balance, because q3's key (index 2) leaves the batch.

**Arjan decides:** approve / reject

Reviewer: SOUND. Current text matches. The BOAST open fractures text (December 2017) was confirmed on the BOA page: "within 12 hours of injury for other solitary high energy open fractures" and "within 24 hours of injury for all other low energy open fractures". The "Immediately" clause was confirmed too. Weber 2014 (PMID 25050748) confirmed: three Canadian level 1 centres, median time to surgery 9 hours 4 minutes, and no link between infection and time to surgery. msk-08 has short questions, so it is write-in and kept out of mock exams. The new prompt has 18 words and cues nothing. Added one note to the alternative: recheck batch position balance if q3 is deleted.

---

### ems-35 (s35)

**Problem.** q3 keys "tranexamic acid 1 g IV over 8 hours" for a patient who got a single 1 g IM dose in the field. The explanation treats that field dose as the CRASH-2 loading dose. The cited source (the CRASH-2 timing analysis) covers only IV dosing started in hospital. No cited source shows a field bolus followed by an in-hospital 8 hour infusion, or that an IM dose can stand in for the IV bolus. The key is right, but the support is missing.

**Evidence.**
- PATCH-Trauma Investigators. Prehospital tranexamic acid for severe trauma. N Engl J Med. 2023. https://doi.org/10.1056/NEJMoa2215457 (PMID 37314244). Patients received tranexamic acid "administered intravenously as a bolus dose of 1 g before hospital admission, followed by a 1-g infusion over a period of 8 hours after arrival at the hospital". At 28 days, 17.3% of the tranexamic acid group had died against 21.8% of the placebo group (risk ratio 0.79, 95% CI 0.63 to 0.99). Its primary outcome, survival with a favourable functional outcome at 6 months, did not differ (53.7% against 53.5%, risk ratio 1.00). This source supports the regimen (a field bolus, then an 8 hour infusion in hospital). It is not strong evidence of benefit.
- Shakur-Still H, Grassin-Delyle S, Muhunthan K, et al. Alternative routes to intravenous tranexamic acid for postpartum hemorrhage: a systematic search and narrative review. Int J Gynaecol Obstet. 2022. https://doi.org/10.1002/ijgo.14201. It reports: "Studies in healthy volunteers and shocked trauma patients show that intramuscular TXA achieves a plasma level of over 10 mg/L within 15 min", which is "near maximal inhibition of fibrinolysis".
- The Ontario directive allows one 1 000 mg dose IV or IM and says nothing about care in hospital (checked in docs/reviews/samps-s35-lensB.md). No Canadian source on the in-hospital dose after a field dose was found.

**Proposal: EDIT q3 explanation and source. No key change.**

q3 explanation
- Before: "The Ontario directive gives a single 1 g dose, IV or IM, which matches the loading dose of the CRASH-2 regimen, and that regimen continues with 1 g IV infused over 8 hours. He is 70 minutes from injury, with a pulse of 124/minute and BP of 98/60 mmHg, so completing the regimen is appropriate. Another 1 g or a 2 g bolus over 10 minutes repeats the loading dose rather than completing the regimen. A further IM dose is unnecessary once IV access is in place in hospital. Stopping after the field dose leaves the regimen incomplete while he remains in shock."
- After: "The field dose of 1 g counts as the first dose of the standard regimen. In a large prehospital trial, 1 g IV before hospital was followed by 1 g IV over 8 hours after arrival. He is 70 minutes from injury, with a pulse of 124/minute and BP of 98/60 mmHg, so the 8 hour infusion should follow. Another 1 g or a 2 g bolus repeats the first dose, and a further IM dose is not needed once he has IV access. Stopping after the field dose leaves the regimen incomplete while he remains in shock."

q3 source
- Before: "crash2-timing"
- After: "patch-trauma"

sources (add one, keep bls-pcs and crash2-timing, which q1 and q2 cite, for a total of 3)
- Add: { id: "patch-trauma", citation: "PATCH-Trauma Investigators and the ANZICS Clinical Trials Group. Prehospital tranexamic acid for severe trauma. N Engl J Med. 2023.", url: "https://doi.org/10.1056/NEJMoa2215457" }

Reviewer note on the dropped IM source. The tests do require every listed source to be cited. validateSamp in src/engine/samp.ts (line 335) reports any listed source that no question cites ("source ... is never cited"), and tests/samps.test.ts expects validateSamp to return no errors. Each question cites one source, q1 and q2 need bls-pcs and crash2-timing, and q3 needs PATCH-Trauma. So the Shakur-Still review cannot be listed, and PATCH-Trauma cannot carry the IM point because it used IV dosing only. The IM sentence and the "im-txa" source are dropped. What is left: that an IM field dose can stand in for the IV bolus rests on no cited source. The Shakur-Still finding (IM TXA above 10 mg/L within 15 minutes in shocked trauma patients, confirmed in the abstract, PMID 35762806) stays here as evidence for Arjan only. The alternative below closes this gap fully.

**Cueing check (mock mode).** Options are unchanged. The key ("tranexamic acid 1 g IV over 8 hours", 35 characters) is the longest of the five options (shortest 26), a ratio of 1.35. That was already the case, and the batch check passed. Nothing in q1 or q2 gives away the infusion.

**Alternative (reviewer: preferred if Arjan wants every claim sourced).** Make the field dose IV. Change the stem sentence "The primary care crew gave tranexamic acid 1 g IM at the scene under their auxiliary directive." to "The advanced care crew gave tranexamic acid 1 g IV at the scene under their directive." This matches the PATCH-Trauma protocol exactly and removes the IM question. The q2 distractor "Intramuscular route with no IV" is still a true distractor, because the directive allows IM. Source: PATCH-Trauma 2023 above. With this stem change, the q3 explanation's first sentence stays true, and "a further IM dose" still describes the "tranexamic acid 1 g IM now" option.

**Arjan decides:** approve / reject

Reviewer: FIXED. Current text matches. PATCH-Trauma quotes confirmed (PMID 37314244), and the Shakur-Still quote confirmed (PMID 35762806). The tests require every listed source to be cited (validateSamp, run by tests/samps.test.ts), so the proposal as written would fail. I dropped "im-txa" and the IM sentence, and set the source total to 3. I changed "the largest prehospital trial" to "a large prehospital trial", because "largest" was not checked, and I made the IV route of the trial bolus explicit. I added PATCH-Trauma's null primary outcome to the evidence, and I flagged that the IM-for-IV equivalence is now unsourced in the SAMP. The new explanation has 5 sentences, is over 200 characters, and has no dashes or semicolons. The options and key are unchanged.

---

### ischemic-heart-disease-33 (s42)

**Problem.** In q3 a 64-year-old man with a prior MI has 2 days of new epigastric discomfort after meals and when walking uphill. MI is ruled out by 0 hour and 1 hour hs-troponin. The key is discharge with urgent cardiology follow-up. As written, "after meals" could mean rest angina, and the case does not say the pattern is stable. Read that way, it could be new or crescendo unstable angina, which many would admit.

**Evidence.**
- Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023. https://doi.org/10.1093/eurheartj/ehad191. It defines unstable angina: "UA is defined as myocardial ischaemia at rest or on minimal exertion in the absence of acute cardiomyocyte injury/necrosis. It is characterized by ... prolonged (>20 min) angina at rest; new onset of severe angina; angina that is increasing in frequency, longer in duration, or lower in threshold; or angina that occurs after a recent episode of MI." On rule-out it says: "the 0 h/1 h and 0 h/2 h algorithms will enable the identification of appropriate candidates for early discharge and outpatient management."
- Campeau L. The Canadian Cardiovascular Society grading of angina pectoris revisited 30 years later. Can J Cardiol. 2002. PMID 11992130. CCS class II triggers are "Walking rapidly, Walking uphill, Climbing stairs rapidly, Walking or climbing stairs after meals" (as tabled in the MSD Manual Professional, citing Campeau 2002). Angina on walking uphill or walking after meals is class II, not the severe new-onset angina of the ESC definition.
- The ESC 2023 decision rule for disposition: "An invasive strategy during hospital admission is recommended in NSTE-ACS patients with high-risk criteria or with a high index of suspicion for UA", and "A selective invasive approach is recommended in patients without very high- or high-risk NSTE-ACS criteria and with a low index of suspicion for NSTE-ACS" (Class I, level A). Such patients "should be managed as per the ESC Guidelines for the management of CCS". The edit works by making the index of suspicion for UA low. Caution: earlier ESC NSTE-ACS guidelines (2015, 2020) are generally quoted as counting new-onset CCS class II or III angina as an unstable angina presentation. The reviewer could not open the 2020 full text to confirm this wording. His symptoms are only 2 days old. The 2023 text quoted above says "new onset of severe angina", and this proposal rests on that newer wording.
- The numbers were rechecked. 0 hour hs-cTnT 11 ng/L (below 12) and a 1 hour change of 1 ng/L (below 3) meet the ESC rule-out criteria, which matches the lens B check in docs/reviews/samps-s42-lensB.md.

**Proposal: EDIT the q3 update and explanation. No key change.** Add the facts that make this stable class II angina. The key then becomes the clear answer rather than one practice among several.

q3 update
- Before: "The 1-hour troponin is 12 ng/L. He now mentions that the epigastric discomfort also comes on when he walks uphill and eases with rest."
- After: "The 1-hour troponin is 12 ng/L. He now mentions that the discomfort comes only when he walks after meals or walks uphill. It eases within 5 minutes of rest and has not become more frequent."

q3 explanation
- Before: "A baseline below 12 ng/L with a change of only 1 ng/L at 1 hour rules out MI by the ESC algorithm. His exertional epigastric discomfort that eases with rest is an anginal equivalent in a man with known coronary disease, so it cannot be put down to reflux. He needs prompt cardiology follow-up for possible progressive disease, with review of his antianginal therapy and clear return advice. Emergency angiography is not needed without rest pain or a rising troponin, and a further troponin adds nothing."
- After: "A baseline below 12 ng/L with a change of only 1 ng/L at 1 hour rules out MI by the ESC algorithm. His discomfort comes on walking after meals or uphill and eases with rest. That is exertional angina in a man with known coronary disease, so neither a proton pump inhibitor alone nor stopping cardiac testing is safe. It does not meet the ESC definition of unstable angina, which needs ischemia at rest or on minimal exertion, severe new angina or a crescendo pattern. He needs prompt cardiology follow-up with review of his antianginal therapy and clear return advice. Emergency angiography is not needed without rest pain or a rising troponin, and a further troponin adds nothing."

Update length: 3 sentences, 35 words (limit about 45). Options, key (index 1), source (esc-acs-2023) and keyFeature are unchanged.

**Cueing check (mock mode).** The new update sentences do not point to any q3 option over another. The q3 key ("Discharge with urgent cardiology follow-up", 42 characters) sits in a set from 26 to 42 characters, which is unchanged. Remaining cue, present before this edit: in mock mode the q3 update "The 1-hour troponin is 12 ng/L" shows the q2 key ("Repeat troponin at 1 hour").

**Minimal cue fix (reviewer addition, q2 not rebuilt). Approve separately.** State the result of the rule-out without saying how it was done. The q2 explanation already teaches the 0 hour and 1 hour values, so q3 can drop them.

q3 update (use this in place of the "After" above)
- Before: "The 1-hour troponin is 12 ng/L. He now mentions that the epigastric discomfort also comes on when he walks uphill and eases with rest."
- After: "MI has now been excluded. He mentions that the discomfort comes only when he walks after meals or walks uphill. It eases within 5 minutes of rest and has not become more frequent."

q3 explanation, first sentence only (the rest as in the "After" above)
- Before (in the proposed After): "A baseline below 12 ng/L with a change of only 1 ng/L at 1 hour rules out MI by the ESC algorithm."
- After: "MI has been excluded, so the decision rests on what his symptoms mean."

Update length is 3 sentences and 34 words. "Excluded" is used rather than "ruled out", so the update does not echo the q2 distractor "Discharge, MI is ruled out". This reduces the cue but does not remove it. A test-taker can still infer that some test excluded MI after q2. It no longer names the test or the 1 hour interval. The remaining explanation still makes sense: "without rest pain or a rising troponin" and "a further troponin adds nothing" rely only on MI being excluded. What is lost: q3 no longer repeats the delta arithmetic, which q2 already teaches.

**Alternative.** Keep the ambiguity, but key admission for unstable angina with inpatient angiography. That is defensible where new angina in known coronary disease is admitted by local policy. It is not supported by the ESC 2023 definition for class II exertional symptoms after a negative hs-troponin rule-out. It would need a new option set and explanation. Source: none stronger than local practice was found, so this option is not recommended.

**Arjan decides:** approve / reject (main edit), approve / reject (cue fix)

Reviewer: FIXED. Current text matches. The ESC 2023 unstable angina definition and rule-out quotes were confirmed in the guideline PDF. The CCS class II wording matches Campeau. The new update fits within the stem ("after meals" narrows to walking after meals). The main edit makes discharge with urgent follow-up the single best answer under ESC 2023. Additions: (1) The ESC 2023 index-of-suspicion recommendation, the rule that actually decides inpatient against selective invasive care. (2) A caution that earlier ESC guidelines may have counted new-onset CCS class II angina as unstable angina. This is not verified here, and Arjan should weigh it. (3) A minimal cue fix that does not rebuild q2: the q3 update says "MI has now been excluded" in place of the 1 hour troponin value, with a matching first sentence in the explanation. The main explanation has 6 sentences and no dashes or semicolons.

---

### pulmonary-edema-28 (s48)

**Problem.** The duplicate sweep flagged this SAMP as a possible copy of pulmonary-edema-26 (s48). Both are men on a new drug with breathlessness, crackles, a high troponin and later cardiogenic shock with cool hands and a raised lactate. Both key drug-induced myocarditis. On current text, the keyed decisions differ:
- pulmonary-edema-28: a 24-year-old on clozapine, day 18. q1 is clozapine myocarditis. q2 is stopping clozapine by the Ronaldson troponin and CRP thresholds. q3 is transfer from a community hospital to a tertiary cardiac ICU for mechanical support.
- pulmonary-edema-26: a 67-year-old on nivolumab with ipilimumab, with ptosis and myositis. q1 is checkpoint inhibitor myocarditis using the IC-OS criteria. q2 is high-dose IV methylprednisolone. q3 is intubation for bulbar weakness plus norepinephrine (menu).
No other SAMP in the bank keys clozapine myocarditis (the s34 and s22 clozapine items test toxicity after smoking cessation and procedural sedation).

**Evidence.**
- Ronaldson KJ, Fitzgerald PB, Taylor AJ, Topliss DJ, McNeil JJ. A new monitoring protocol for clozapine-induced myocarditis based on an analysis of 75 cases and 94 controls. Aust N Z J Psychiatry. 2011. https://doi.org/10.3109/00048674.2011.572852 (PMID 21524186). It reports "83% of cases developing between days 14 and 21 inclusive" and states "Cessation of clozapine is advised if troponin is more than twice the upper limit of normal or C-reactive protein is over 100 mg/L." This supports q1 (day 18) and q2 (troponin 310 ng/L against a 14 ng/L limit, CRP 142 mg/L).
- q3 wording was already corrected to the verified ESC 2021 mechanical support text (docs/reviews/samps-s48-lensA.md).

**Proposal: NO CHANGE. Keep both.** The shared features are the class of diagnosis and a generic shock update. Each SAMP's management decisions are specific to its drug and do not overlap. Stopping clozapine by threshold and transfer for mechanical support are taught only here. Steroids, airway and vasopressor for checkpoint myocarditis are taught only in pulmonary-edema-26. Some ED teaching value comes from having both, because they contrast: stop the drug and give no steroids for clozapine, but give high-dose steroids for checkpoint inhibitors.

**Optional wording tweak (not required).** To reduce surface likeness in the shock updates, the pulmonary-edema-28 q3 update "Six hours later his BP is 82/50 mmHg, his hands are cool and lactate is 4.8 mmol/L." could read "Six hours later his BP is 82/50 mmHg, his fingers are mottled and lactate is 4.8 mmol/L." The key and explanation are unaffected (the explanation cites the ejection fraction, lactate and vasopressor, not the hands).

Second optional tweak (reviewer addition). The two stems also share whole sentences. pulmonary-edema-28 reads "He is tired but alert. The JVP is 5 cm above the sternal angle and there are crackles at both lung bases." pulmonary-edema-26 reads "He is tired but alert. ... The JVP is 5 cm above the sternal angle. There are crackles at both lung bases." If Arjan wants less surface likeness, change pulmonary-edema-28:
- Before: "He is tired but alert. The JVP is 5 cm above the sternal angle and there are crackles at both lung bases."
- After: "He looks unwell but answers questions clearly. His JVP is raised to 5 cm above the sternal angle, with crackles at both bases."
Nothing that an explanation relies on changes. The q1 explanation cites "a raised JVP", which still holds.

**Cueing check.** Not applicable to the primary proposal. The optional tweaks add no cue.

**Arjan decides:** approve / reject

Reviewer: SOUND. Current text of both SAMPs matches the description. Ronaldson 2011 quotes confirmed (PMID 21524186). No other SAMP keys clozapine myocarditis: the s34 and s22 clozapine items are about toxicity after smoking stops and about procedural sedation. The keyed decisions differ, and the contrast (no steroids for clozapine, high-dose steroids for checkpoint inhibitors) is real teaching. Added a second optional tweak for the two stem sentences the SAMPs share word for word. It is not needed to pass the trigram test, which both already pass.
