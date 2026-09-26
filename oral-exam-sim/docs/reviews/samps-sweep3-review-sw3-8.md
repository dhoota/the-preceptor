# Review of sweep 3 rebuilds, label sw3-8 (s45, s46, s48, s49, s52)

Reviewer: independent AI audit, both lenses. This is not clinician verification. All six SAMPs stay `reviewed: false`. Nothing was committed.

Scope: multiple-trauma-18, pediatric-fever-22, pulmonary-edema-32, pulmonary-edema-38, seizures-22 and suicide-risk-23. No other SAMP was changed. suicide-risk-30 and suicide-risk-31 were not touched. The s52 diff has one hunk, and it is inside suicide-risk-23.

## Writer's report

`docs/reviews/samps-sweep3-sw3-8.md` is intact and matches the code as the writer left it. Two of its statements are now out of date. pediatric-fever-22 no longer keys the hypotension threshold (see below). suicide-risk-23 q2 now cites the lithium product monograph as well as CANMAT.

## Key features

Each SAMP's set of key features matches `git show HEAD`:

- multiple-trauma-18: 1, 6, 6, 6, 7
- pediatric-fever-22: 2, 2, 2, 3
- pulmonary-edema-32: 6, 6, 6
- pulmonary-edema-38: was 1, 3, 5 in HEAD order, now 5, 1, 3. The set is the same.
- seizures-22: 8, 8, 8, 8
- suicide-risk-23: 5, 5, 5

Each question tests the key feature it is mapped to. multiple-trauma-18 q5 (family presence, key feature 7) is a loose fit. The team leader assigns a chaperone and stays with the resuscitation, but the question is more about family presence than about running tasks in parallel.

## Verdicts

| SAMP | Q | Verdict | Finding and change | Confidence |
|---|---|---|---|---|
| multiple-trauma-18 | q1 | pass | Wu 2022 (PMC9677620): after a secure airway, anterior gauze packing and posterior Foley balloon tamponade come first. Embolization is used when bleeding persists. The paper says embolization has replaced external carotid ligation, which is rarely effective. | high |
| multiple-trauma-18 | q2 | pass | BP 84/50 mmHg and pulse 132/minute after hours of bleeding. European guideline R9 says an initial hemoglobin in the normal range may mask early bleeding. | high |
| multiple-trauma-18 | q3 | pass | 21:05 plus 3 h 20 min is 00:25, which is correct. CRASH-2 exploratory analysis: treatment after 3 hours gave RR 1.44 for death from bleeding. European guideline R23 limits TXA to within 3 hours. "No tranexamic acid" is the single best answer. ems-35 q2 (s35, unsigned) also teaches the 3-hour exclusion, but as a paramedic directive criterion in a different story. | high |
| multiple-trauma-18 | q4 | fixed | R27 (PT above 1.5 times normal), R29 (fibrinogen 1.5 g/L or less), R30 (platelets above 100 x 10^9/L in TBI, grade 2C), R16 (Hb 70 to 90 g/L) and R32 (rFVIIa not first line) were confirmed in the sixth edition. The explanation said desmopressin "has been studied only for antiplatelet drug effect". The guideline makes no desmopressin recommendation and discusses it only as a possible reversal of antiplatelet agents. The text now says it "has been proposed only to reverse antiplatelet drugs, and he takes none". | high |
| multiple-trauma-18 | q5 | fixed | Cue: the key "Invite her in with a staff member beside her" was the longest option (44 characters against a distractor mean of 36) and carried the qualifier that made it right. It is now "Invite her in with a staff chaperone" (36). Its position is unchanged. The CCCS position paper (Oczkowski 2015, PMC4530851) says experienced chaperones should accompany family members. The explanation now uses that word. | high |
| pediatric-fever-22 | q1 | pass | CPS Table 1 gives a toddler's heart rate as 98 to 140 awake and 80 to 120 asleep, and a respiratory rate of 22 to 37. A rate of 134/minute asleep is abnormal. | high |
| pediatric-fever-22 | q2 | fixed | Overlap: the old q2 ("systolic pressure below which she would be hypotensive", key 74 mmHg) duplicated shock-33 q2 (s50). That item is also a 12 kg 2-year-old in shock with a normal BP, has the same key of 74 mmHg and shares 3 of 5 option values. Its q1 also keys the sign that shows shock despite a normal BP. simcheck missed it because digest3.json predates shock-33. A grep of the current bank found it. The question now tests another subtle sign under key feature 2. A new update says the girl rouses only to a loud voice, glances at her mother without crying and falls back asleep. The key is "Reduced response to social cues", at index 2 as before. The source is NICE NG143, already in the s46 source list: amber is "not responding normally to social cues", and red is "if roused does not stay awake". CPS gives no behaviour criteria. No SAMP in the bank keys social cues. | medium |
| pediatric-fever-22 | q3 | fixed | CPS Table 2 and Case 3 describe vasodilated shock (flash refill, bounding pulses). The pulse pressure is 80 - 32 = 48 mmHg. The 74 mmHg threshold (70 + 2 x 2) now appears in this explanation instead of being keyed, so the teaching point that her systolic pressure is not low stays. | medium |
| pediatric-fever-22 | q4 | pass | CPS: "Intramuscular or intraosseous injections can be used until IV access is obtained", with antibiotics within one hour and ceftriaxone named. IM ceftriaxone is the single best answer once IV and IO access have both failed and the flight is 3 hours away. | high |
| pulmonary-edema-32 | q1 | pass | CAEP 2025 resting criteria: SpO2 above 92%, SBP above 100 mmHg, HR below 90 and RR 20 or less, all confirmed. Only HR 96 fails. | high |
| pulmonary-edema-32 | q2 | fixed | CAEP asks for the ability "to walk (or baseline level of mobility)" without tachycardia, tachypnea or hypoxia. The failure thresholds (SpO2 below 90%, HR above 110, RR above 28) come from the Ottawa HF risk scale footnote in the checklist. Cue: the key "Observe his usual transfers and wheeling" was the longest option (40 characters against a mean of 32.5) and carried the qualifier "usual". It is now "Observe transfers and wheeling". | medium |
| pulmonary-edema-32 | q3 | pass | CAEP: "consider a temporary increase of 2 x current dose for 5 to 10 days" and "electrolytes and creatinine checked within 7 days". 40 mg to 80 mg is correct. | high |
| pulmonary-edema-38 | q1 | pass | CAEP: NT-proBNP above 1 800 pg/mL at age over 75 makes AHF likely, and below 300 makes it unlikely. 7 800 is correct. See the physician note on renal function. | medium |
| pulmonary-edema-38 | q2 | pass | CAEP: nitroglycerin if SBP is 100 mmHg or more, with an immediate sublingual spray at 400 mcg. IV morphine "should not be used". Beta blockers are avoided for tachycardia when the LVEF is low or not known. All confirmed. | high |
| pulmonary-edema-38 | q3 | fixed | NICE CG97 (2010, updated June 2015) says "Catheterise men who have impaired renal function or hydronephrosis secondary to chronic urinary retention", which is confirmed. The explanation said NICE uses an alpha blocker "before a catheter is removed" as a general rule. NICE gives that advice for acute retention only. It now says so. Canadian source: the CUA 2022 male LUTS/BPH guideline (Elterman et al., CUAJ 2022) was opened. It lists renal dysfunction from BPH as an indication for surgery and suggests an alpha blocker during catheterization for acute retention. It gives no ED recommendation to catheterize chronic retention with renal impairment. So NICE stays as the source for the catheter, and no current Canadian guideline is displaced. | medium |
| seizures-22 | q1 | fixed | The stem did not say when the father started recording, so 4 minutes of jerking on the video might not have been the whole seizure. The stem now says he "started recording on his phone as the jerking began" (stem 143 words). The 15-minute limit is confirmed in Gardner 2025. | medium |
| seizures-22 | q2 | pass | The Choosing Wisely Canada recommendation from AAP and CAEP is confirmed in Gardner 2025: "Do not order laboratory testing or a CT scan of the head for a patient with an unprovoked, generalized seizure or simple febrile seizure who has returned to baseline mental status". Its table of indications for laboratory tests (prolonged seizure, altered mental status, sepsis or meningitis signs, GI losses, dehydration) has no item that applies to him. "None" as the only key is valid. The urinalysis distractor is reasonable to reject: he is over 24 months and has a viral source. | high |
| seizures-22 | q3 | pass | "Children with simple febrile seizures do not require assessment by a neurologist and generally outgrow them by 6 years", confirmed. | high |
| seizures-22 | q4 | pass | "The risk of serious bacterial infection ... is the same in children with simple febrile seizures as those with fever alone", confirmed. Hedged key check: the key is a plain statement, and two distractors are "Unknown until ...", so the key is not the only hedged option. | high |
| suicide-risk-23 | q1 | fixed | The option "Keep taking lithium, as it lowers suicide risk" carried its own justification, which spec section 7 bars. It was also the longest option (47 characters against a mean of 35), and it overstated the guideline, which says lithium "appears to have a degree of anti-suicidal effects". It is now "Keep lithium at her current dose", still at index 1. CANMAT confirms that antidepressant monotherapy "should NOT be used" in bipolar I depression. | high |
| suicide-risk-23 | q2 | fixed | Source defect: the CANMAT/ISBD 2018 sentence on checking lithium 5 to 7 days after an NSAID change sits in the older adults section ("when lithium is used in this population"). The explanation presented it as general advice for a 36-year-old. A current Canadian source for all adults was added: the Carbolith (lithium carbonate) product monograph, revised 2019. It reports that indomethacin raises lithium levels by 30 to 59%, that other NSAIDs may have a similar effect, and that monitoring should be more frequent. The explanation now cites both accurately. It also says the check is still needed if the naproxen is stopped, which resolves a conflict with q3. The key "Recheck lithium level and creatinine this week" (46 characters, the longest) is now "Recheck lithium and creatinine this week" (40, level with the longest distractor). | high |
| suicide-risk-23 | q3 | pass, flagged | Acetaminophen is the single best of the options given. It is also the only non-NSAID offered. All four distractors are wrong for the same reason, so the item tests only whether the candidate recognizes an NSAID. Topical NSAIDs and splinting are not offered. The explanation's argument is that acetaminophen is absent from the CANMAT list, not that the guideline recommends it. CANMAT line 818 confirms that NSAIDs add to the long-term kidney risk of lithium. Left for the physician. | medium |

Counts by SAMP: 0 pass, 6 fixed, 0 re-rebuilt. By question: 13 pass (one of them flagged), 9 fixed.

## Key changes

- pediatric-fever-22 q2: the key was "Below 74 mmHg" (index 2) for a hypotension threshold question. It is now "Reduced response to social cues" (index 2) in a new question on her response to being woken. The reason is overlap with shock-33 q2.
- multiple-trauma-18 q5, pulmonary-edema-32 q2 and suicide-risk-23 q1 and q2: the wording of the key changed, but the answer and the position did not.

## Overlap

- simcheck.py was run on current text for all six (dumped from the live files, not digest3.json). Top scores after the fixes: multiple-trauma-18 0.15 (ems-33), pediatric-fever-22 0.28 (anaphylaxis-46, the nursing station setting only), pulmonary-edema-32 0.23 (pulmonary-edema-35), pulmonary-edema-38 0.18 (delirium-agitation-35), seizures-22 0.15, suicide-risk-23 0.19 (tox-25). No card tells the same story.
- Grep of the current bank:
  - "e-bike", "smartwatch", "social cue", "flash capillary", "warm septic shock", "wheelchair", "5 to 10 days" and "bladder scan" with kidney failure appear only in these SAMPs.
  - Found by grep and not by simcheck: shock-33 (s50) keys 74 mmHg for a 2-year-old. This was fixed in pediatric-fever-22 q2.
  - "Posterior nasal" tamponade appears only in gi-bleed-05 (s11, signed off). It is an epistaxis item, not a keyed maxillofacial trauma decision. airway-34 has the mobile midface but keys a double set-up airway, which this rebuild avoided.
  - TXA after 3 hours: shock-12 and shock-05 (signed off) and multiple-trauma-11 (signed off) key TXA within 3 hours. ems-35 q2 (unsigned) keys the 3-hour exclusion from the paramedic directive. multiple-trauma-18 q3 is the only in-hospital "withhold" key.
  - Family presence: other hits are delirium measures only.
  - Lithium with NSAIDs: tox-07 (signed off) and delirium-agitation-09 (signed off) key NSAIDs as a cause of toxicity. suicide-risk-23 keys monitoring and analgesic choice in a stable patient.
  - Simple febrile seizure: seizures-11 (signed off) has a very similar toddler story. Its q1 explanation states that no bloods, LP, EEG or imaging are needed, but its keys are the criteria, the LP indications, antipyretic doses and discharge advice. seizures-22 keys the timing source, "None" investigations, follow-up and SBI risk. Key feature 8 forces some overlap. This is flagged, not changed.
  - pulmonary-edema-38 q1 (BNP to separate edema from a presumed chest infection) repeats the teaching point of the pulmonary-edema-03/09 borderline pair. It is required by key feature 5, and q2 and q3 differ.
- sweep3-ss-merged.json: none of the six ids is in a dup, borderline or cluster entry. The new stories do not match any signed cluster. The nearest are the pediatric-fever-03, pediatric-fever-04 and shock-12 febrile shock cluster, which keys boluses and ceftriaxone 100 mg/kg, and the multiple-trauma-01 and shock-05 pelvic hemorrhage pair. Neither decision set is keyed here.

## Cue checks

- Mock mode: no later update, prompt or option names an earlier key in any of the six. In multiple-trauma-18 q4, "slow oozing continues from the nose" implies that packing was placed, but it does not choose between the q1 options. In suicide-risk-23, the q3 prompt ("while she takes lithium") fits the q1 key, but so do all q1 distractors except stopping or tapering. This is mild and was left.
- Hedged keys: only seizures-22 q4 is a "most accurate statement" item, and it passes. suicide-risk-23 q1 ("most accurate advice") had a justifying key, which is now fixed.
- Longest option: fixed in multiple-trauma-18 q5, pulmonary-edema-32 q2, suicide-risk-23 q1 and q2. suicide-risk-23 q3 (acetaminophen, 34 characters against a longest distractor of 33) is still the longest by one character. Batch caps pass in all five batches.

## Sources verified

- Rossaint 2023 European guideline, sixth edition: https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/ (R9, R16, R23, R27, R29, R30, R32. No desmopressin recommendation.)
- Wu 2022, maxillofacial bleeding protocol: https://doi.org/10.1186/s13049-022-01047-9 (PMC9677620)
- CRASH-2 timing analysis, Lancet 2011: https://doi.org/10.1016/S0140-6736(11)60278-X (RR 1.44 after 3 hours)
- Oczkowski 2015, CCCS family presence position paper: https://doi.org/10.1155/2015/532721 (PMC4530851, abstract confirmed through Europe PMC)
- Farrell 2020, CPS sepsis practice point, reaffirmed January 2026: https://cps.ca/en/documents/position/diagnosis-and-management-of-sepsis-in-the-paediatric-patient (Tables 1 and 2, IM or IO until IV access, one hour)
- NICE NG143, fever in under 5s (2019, updated 2021): https://www.nice.org.uk/guidance/ng143 (traffic light behaviour items)
- Stiell 2025 CAEP AHF checklist: https://doi.org/10.1007/s43678-025-00961-y (PMC12484285)
- NICE CG97 (2010, updated 2015): https://www.nice.org.uk/guidance/cg97
- Elterman 2022 CUA male LUTS/BPH update: https://www.cua.org/system/files/Guideline-Files/7906_V2.pdf (opened, not cited)
- Gardner 2025 Can Fam Physician: https://www.cfp.ca/content/71/9/563 (PMC12454563)
- Yatham 2018 CANMAT/ISBD: https://pmc.ncbi.nlm.nih.gov/articles/PMC5947163/
- Carbolith product monograph, Bausch Health, revised 30 May 2019: https://pdf.hres.ca/dpd_pm/00051552.PDF

## Checks

- `SAMP_BATCH=s45`: 715 passed. `s46`: 687 passed. `s48`: 464 passed. `s49`: 651 passed. `s52`: 456 passed. Each run covered tests/samps.test.ts and tests/samp-quality.test.ts.
- `npx tsc --noEmit -p .`: no errors.
- Scratch files are in `scratchpad/rv-sw3-8`.

## For the physician

- multiple-trauma-18 q3 teaches withholding tranexamic acid at 3 hours 20 minutes. This rests on the CRASH-2 exploratory subgroup (RR 1.44) and European R23. Please confirm.
- multiple-trauma-18 q4 keys platelets at 84 x 10^9/L on a grade 2C suggestion for TBI (target above 100). It also keys plasma under a plasma-based strategy. A factor concentrate strategy is not offered.
- multiple-trauma-18 q5 is mapped to key feature 7 (team leadership). The fit is loose. Please confirm, or remap if you prefer.
- pediatric-fever-22 q2 is new. It cites NICE NG143 for the social cue and "does not stay awake" items because the CPS sepsis practice point gives no behaviour criteria. Please confirm that this UK source is acceptable here.
- pediatric-fever-22 q3: "Fever with normal perfusion" is rejected because of flash refill, bounding pulses, a diastolic of 32 mmHg and a sleeping heart rate of 134. Fever alone can flush the skin. The CPS gives no normal diastolic range. Please confirm that warm shock is the single best reading.
- pediatric-fever-22: the shared S.cpsSepsis citation in s46 reads "Diagnosis and management of severe sepsis in the paediatric patient". The CPS page title omits "severe". It was not changed because other SAMPs in the file use it.
- pulmonary-edema-38 q1: in mock mode the candidate also sees a creatinine of 386 umol/L, and kidney failure raises NT-proBNP. The key still holds at 7 800 pg/mL, but the explanation does not mention this.
- pulmonary-edema-38 q3: NICE CG97 stays because the CUA 2022 BPH guideline has no emergency recommendation for chronic retention with renal impairment. NICE also suggests considering intermittent catheterization before indwelling in chronic retention. The key is an indwelling catheter in an acutely unwell man, and no intermittent option is offered.
- seizures-22 overlaps seizures-11 (signed off) in story type because key feature 8 requires it. The keyed decisions differ.
- suicide-risk-23 q2: the 5 to 7 day check is CANMAT advice for older adults. The general adult source is the product monograph, which says only "increased frequency". The key "this week" is a reasonable reading. Please confirm.
- suicide-risk-23 q3: acetaminophen is the only non-NSAID offered, so the item is easy. Consider whether a topical NSAID or a splint belongs in a future version.
