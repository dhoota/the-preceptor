### abdominal-pain-18 (s19)

**Problem.** Triage held this SAMP as a near duplicate of shock-41 (s50) and infectious-diseases-28 (s41). Both of those have since been rebuilt. shock-41 is now septic shock from pneumonia at 30 weeks. infectious-diseases-28 was first rebuilt as an obstructed infected kidney, and the current src/ version is "Fever and a swollen knee in an older man" (a prosthetic knee). Neither is cholangitis. A bank search finds no other MCQ SAMP that keys cholangitis or biliary drainage. The duplicate concern no longer exists, and this SAMP is now the only carrier of the drainage teaching. One mock mode cue remains. The q3 update says "Ultrasound shows gallstones", which gives away the q2 key (right upper quadrant ultrasound) when all questions show at once.

**Evidence.**
- Rebuild records: docs/reviews/samps-replace-s50-s25-s26.md (shock-41 now "septic shock from pneumonia at 30 weeks of pregnancy") and docs/reviews/samps-replace-s39-s42.md (infectious-diseases-28 rebuilt as "Obstructed infected kidney at a rural hospital"). The current src/s41 title of infectious-diseases-28 is "Fever and a swollen knee in an older man", so it has changed again since that record. Reviewer grep of the current bank: the only SAMPs that mention cholangitis are abdominal-pain-18, gi-bleed-30 (no biliary key) and three write-ins (abdominal-pain-07, abdominal-pain-13, pre-eclampsia-02).
- Tokyo Guidelines 2018 (Kiriyama S et al. J Hepatobiliary Pancreat Sci. 2018. https://doi.org/10.1002/jhbp.512), criterion A-2 as reproduced by MDCalc: "WBC <4 × 10⁹/L or >10 × 10⁹/L and/or CRP ≥1 mg/dL". Her WBC of 14.8 x 10^9/L meets A-2 without fever. https://www.mdcalc.com/calc/10142/tokyo-guidelines-acute-cholangitis-2018
- TG18 grade III, as summarized by Endoscopy Campus: "Cholangitis with dysfunction of one of the following organs / organ systems: ... Clouding of consciousness". For grade III, "immediate drainage or removal of the obstruction is required." The same page gives A-2 as "leukocytes < 4,000 or > 10,000/µL; CRP > 1 mg/dL". https://www.endoscopy-campus.com/en/classifications/tokyo-classification-cholangitis-guidelines/ (These TG18 lines rest on secondary summaries. The Kiriyama paper itself was not opened.)
- Afebrile presentation in older adults: Comoglu M et al. Medicina (Kaunas). 2024. https://doi.org/10.3390/medicina60111759 (full text read via PMC11596043). Table 1, "Main complaint at admission": fever in 14 (16.1%) of those aged 80 and over and 27 (16.6%) of those aged 65 to 79. "Charcot's triad was present in only 17 (6.8%) patients." Note that fever here is a presenting complaint, not a measured temperature.

**Proposal: EDIT (release from HOLD).** The duplicate reason is resolved. One wording change removes the mock mode cue. No key change.

q3 `update`
- Before: "Ultrasound shows gallstones and a common bile duct of 13 mm. Blood cultures are drawn and piperacillin-tazobactam is started. BP is 92/56 mmHg after 1 L of Ringer's lactate."
- After: "Imaging shows gallstones and a common bile duct of 13 mm. Blood cultures are drawn and piperacillin-tazobactam is started. BP is 92/56 mmHg after 1 L of Ringer's lactate."

q3 `explanation` (replace this last sentence only, the rest is unchanged)
- Before: "MRCP adds delay when ultrasound already shows the obstruction."
- After: "MRCP adds delay when imaging already shows the obstruction."

**Cueing check.** With the edit, no update reveals the q2 key. q1 key "Afebrile cholangitis is common in older adults" is the single longest option (46 characters against a distractor mean of 42, ratio 1.10, under the 1.5 limit). Two distractors carry absolute ideas ("required", "excludes"), so the key reads as the hedged option. This is a mild hedged-key cue. It is inherent to the teaching point (fever is not required), so I left it.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match src/samps/s19/abdominal-pain.ts. Keys hold. Corrected the stale description of infectious-diseases-28 (now a prosthetic knee case, still not cholangitis) and confirmed by grep that no other MCQ SAMP keys biliary drainage. Checked Comoglu 2024 in full text: the figures are right but they count fever as a presenting complaint, and I said so. Corrected the q1 key length to 46 characters (ratio 1.10). Marked the q3 explanation change as a one-sentence replacement. The TG18 criteria still rest on secondary summaries (Endoscopy Campus, MDCalc). I did not open the Kiriyama paper.

---

### analgesia-sedation-17 (s22)

**Problem.** q2 keys a fascia iliaca compartment block as "the most effective initial intervention" for a screaming 3-year-old with a femoral shaft fracture and an IV already in place. The only evidence is one small low-quality trial. The Canadian standard for severe pain with IV access is a titrated IV opioid first. The block is a sound second step. q3 then gives IV morphine after the block, which is the reverse of Canadian practice.

**Evidence.**
- Canadian Paediatric Society. Trottier ED, Ali S, Doré-Bergeron MJ, Chauvin-Kimoff L. Best practices in pain assessment and management for children. Paediatr Child Health. 2022. https://cps.ca/en/documents/position/pain-assessment-and-management. "IV opioids are often used preferentially in acute medical settings, once vascular access has been established, with IV morphine being the most common agent." "Codeine should never be used in children under 18 years old, as per Health Canada directives." The statement does not mention nerve blocks.
- Black KJL, Bevan CA, Murphy NG, Howard JJ. Nerve blocks for initial pain management of femoral fractures in children. Cochrane Database Syst Rev. 2013. https://doi.org/10.1002/14651858.CD009587.pub2. Authors' conclusions: "Low quality evidence from one small trial suggests that FICB provides better and longer lasting pain relief with fewer adverse events than intravenous opioids for femur fractures in children."

**Proposal: EDIT. KEY CHANGE in q2 and q3.** Swap the order. IV morphine comes first (q2) and the block is added when pain persists (q3). keyFeature stays KF2 for q2 and KF3 for q3. q2 now cites cps-pain and q3 cites black-femur. All three sources are still cited.

q2 `prompt`
- Before: "Which of the following is the most effective initial intervention for his femoral fracture pain?"
- After: "Which of the following is the most appropriate initial analgesic for his femoral fracture pain?"

q2 `options`
- Before: ["acetaminophen 225 mg PR alone", "Fascia iliaca compartment block", "ibuprofen 150 mg PO alone", "midazolam 0.75 mg IV", "morphine 1.5 mg IM into the thigh"]
- After: ["acetaminophen 225 mg PR alone", "codeine 15 mg PO", "midazolam 0.75 mg IV", "morphine 1.5 mg IV", "morphine 4.5 mg IV"]

q2 `correct`: 1 becomes 3. KEY CHANGE.

q2 `explanation`
- Before: "A fascia iliaca compartment block anaesthetises the femoral nerve territory. In the one randomized trial of children with femoral fractures, it gave better and longer-lasting pain relief with fewer adverse events than IV morphine, although the evidence is of low quality. Acetaminophen 15 mg/kg is 225 mg and ibuprofen 10 mg/kg is 150 mg for 15 kg. Both are useful adjuncts but neither is enough alone for a FLACC score of 9. IM morphine is painful and unnecessary when an IV is in place. Midazolam sedates without relieving pain."
- After: "A FLACC score of 9 is severe pain, and with an IV in place a titrated IV opioid gives the fastest reliable relief. The Canadian Paediatric Society lists IV morphine at 0.05 to 0.1 mg/kg a dose, so 0.1 mg/kg is 1.5 mg for 15 kg. A dose of 4.5 mg is 0.3 mg/kg, three times the top of that range. Acetaminophen 15 mg/kg is 225 mg, a useful adjunct but not enough alone for severe pain. Codeine should not be used in children in Canada. Midazolam sedates without relieving pain."

q2 `source`: "black-femur" becomes "cps-pain".

q3 `update`
- Before: "Twenty minutes after the block he still cries when his leg is moved. His FLACC score is 6. His breathing is normal."
- After: "Twenty minutes after his first analgesic dose he still cries when his leg is moved. His FLACC score is 6. He is awake and his breathing is normal."

q3 `prompt`
- Before: "Which of the following is the most appropriate next analgesic for him?"
- After: "Which of the following is the most appropriate next step to control his pain?"

q3 `options`
- Before: ["codeine 15 mg PO", "ketamine 22 mg IV", "morphine 1.5 mg IV", "morphine 4.5 mg IV", "No further analgesia"]
- After: ["codeine 15 mg PO", "Fascia iliaca block", "ketamine 22 mg IV", "midazolam 0.75 mg IV", "No further analgesia"]

q3 `correct`: 2 becomes 1. KEY CHANGE.

q3 `explanation`
- Before: "A FLACC score of 6 is still moderate to severe pain, so a titrated IV opioid is needed on top of the block. The Canadian Paediatric Society lists IV morphine at 0.05 to 0.1 mg/kg a dose, so 0.1 mg/kg is 1.5 mg for 15 kg, repeated after reassessment. 4.5 mg is 0.3 mg/kg, three times the top of that range. Codeine should not be used in children in Canada. Ketamine 22 mg is about 1.5 mg/kg, a dissociative sedation dose rather than an analgesic dose. Stopping now leaves him in pain."
- After: "A FLACC score of 6 twenty minutes after the first dose is still moderate pain, so another modality should be added. A fascia iliaca block anaesthetises the femoral nerve territory and adds analgesia without more systemic opioid. In the one randomized trial of children with femoral fractures, it gave better and longer lasting pain relief than IV opioids, although the evidence is of low quality. Codeine should not be used in children in Canada. Ketamine 22 mg is about 1.5 mg/kg, a dissociative sedation dose rather than an analgesic dose. Midazolam sedates without relieving pain, and stopping now leaves him in pain."

q3 `source`: "cps-pain" becomes "black-femur".

**Format check.** q2 lengths are 29, 16, 20, 18 and 18 characters. Longest to shortest is 1.81 (limit 2.1). The key is 0.87 times the distractor mean and is not the longest. q3 lengths without "No further analgesia" are 16, 19, 17 and 20. The key is 1.08 times the distractor mean (19 against 17.7) and is not the longest. Options are alphabetical, with the morphine doses together, low to high, and "No" last. s22 single key positions move from index 1 and 2 to index 3 and 1. Reviewer recount of s22 from current src (101 single questions): positions now 24, 20, 25, 14, 18. After the swap they are 24, 20, 24, 15, 18. The largest share falls from 24.8% to 23.8%, every position is still used, and the single-longest-key count for s22 is unchanged (3 of 101).

**Cueing check.** The q3 update says "his first analgesic dose" and not "morphine", so it does not reveal the q2 key in mock mode. Neither key is hedged or the longest option.

**Alternative.** Keep the current order and only drop "initial" from the q2 prompt ("Which of the following is the most effective intervention for his femoral fracture pain?"). Black 2013 supports this, because the block beat IV opioids in the one trial. It still rests on low quality evidence and still teaches a block before any systemic analgesia with an IV in place, which CPS 2022 does not.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match src/samps/s22/analgesia-sedation.ts. Checked the CPS 2022 full text (PMC copy). It confirms both quotes, and Table 2 gives "Morphine, IV (intermittent dosing) 0.05 mg/kg/dose to 0.1 mg/kg/dose (maximum 5 mg/dose)". It does not mention nerve blocks. Black 2013's conclusion is confirmed verbatim from the Cochrane abstract. Added the missing Before text for both explanations, so the edit can apply as find and replace. Merged two sentences in the q3 explanation to keep it at 6 sentences, as SAMP_SPEC section 8 allows. Corrected the q3 key parity figure to 1.08. Recounted the s22 positions: the largest share goes from 24.8% to 23.8%, so the batch stays within the 25% cap. Arjan should know one thing. A repeat titrated IV morphine dose is also standard at FLACC 6. It is deliberately not offered in q3, so the block is the only defensible option. That is acceptable, but a candidate who wants a second morphine dose will find no option for it.

---

### asthma-copd-24 (s25)

**Problem.** Triage held this SAMP as a near duplicate of sob-27 (COPD with bullae and a secondary pneumothorax). It has since been rebuilt (version 2). The current SAMP is a 64-year-old woman with asthma who has an NSTEMI. q1 asks for NSTEMI over asthma tightness, q2 keys ASA 160 mg chewed despite her asthma, and q3 keys bisoprolol for an ejection fraction of 35%. Nothing about pneumothorax remains, so the duplicate concern no longer exists. sob-27 has also been rebuilt (docs/reviews/samps-replace-s51.md). It is now an acute exacerbation of idiopathic pulmonary fibrosis, so neither SAMP is a pneumothorax case any more. The one AERD SAMP in s25 (line 1128, avoid ASA in aspirin-exacerbated disease) teaches the opposite side of the same decision and does not duplicate q2.

**Evidence.**
- 2023 ESC ACS guideline (Byrne RA et al. Eur Heart J. 2023. https://doi.org/10.1093/eurheartj/ehad191), checked in the full text. Recommendation Table 5: "Aspirin is recommended for all patients without contraindications at an initial oral LD of 150 to 300 mg (or 75 to 250 mg i.v.)" (class I, level A). Long-term beta-blocker table: "Beta-blockers are recommended in ACS patients with LVEF ≤40% regardless of HF symptoms" (class I, level A). 160 mg is inside the range, and her ejection fraction of 35% meets the threshold.
- Olenchock BA et al. Current use of beta blockers in patients with reactive airway disease who are hospitalized with acute coronary syndromes. Am J Cardiol. 2009. https://pubmed.ncbi.nlm.nih.gov/19166678. "Receipt of beta blockers within 24 hours after admission was associated with a lower in-hospital mortality rate for patients with reactive airway disease (odds ratio = 0.52)." This is the study GINA draws on.
- GINA 2026 (cited in the SAMP), checked in the full 2026 report, section 3, page 67: "Asthma should not be regarded as an absolute contraindication to use cardioselective beta-blockers when they are indicated for acute coronary events, but the relative risks and benefits should be considered (Evidence D)." Also: "treatment should only be initiated under close medical supervision by a specialist", and "Aspirin and NSAIDs are not generally contraindicated in asthma unless there is a history of previous reactions to these agents (Evidence A)." GINA reference 271 is Olenchock 2009.

**Proposal: NO CHANGE, release from HOLD.** The rebuilt text has no duplicate. The keys hold against ESC 2023 and GINA.

**Cueing check.** In mock mode, q2 ("antiplatelet treatment") and q3 (echocardiography, beta-blocker) show that q1's answer is cardiac. The sweep review accepted this as structural, and q1 can be answered from its own troponin rise and ST depression anyway. The q1 key "Non-ST-elevation myocardial infarction" is the longest option at 1.39 times the distractor mean, which is under the 1.5 limit. No hedged key.

**Note for Arjan (not part of this proposal).** docs/physician-review/s25-asthma-copd.md already flags that q3 (starting bisoprolol the next morning) is a ward decision rather than an ED one. It is accurate. Keep it or retarget it in a later pass.

**Arjan decides:** approve / reject

Reviewer: FIXED. The proposal said sob-27 was still a pneumothorax case. It has also been rebuilt, as an IPF exacerbation, so the duplicate concern is gone on both sides. I corrected that. I opened both primaries in full. The ESC 2023 recommendation tables confirm ASA 150 to 300 mg and a beta-blocker at LVEF ≤40%. GINA 2026 page 67 confirms the beta-blocker and NSAID statements. The evidence no longer rests on search summaries. The q1 key parity is 1.39, and the key is the single longest option, which is accepted and within limits. Keys hold. No change to the SAMP.

---

### chest-pain-39 (s28)

**Problem.** Triage held this SAMP as the kept copy of a duplicate pair with sob-41 (s51). sob-41 has since been rebuilt as pleuritic pain in new nephrotic syndrome (docs/reviews/samps-replace-s51.md), so the pair no longer exists. The triage note also asks for "a physician read before use". On that read, q1 (saturation of 94% as the finding against panic), q2 (combined pill and long flight raise PE probability) and q3 (Wells 4.5, straight to CT) are all correct. The nearest remaining case is asthma-copd-44 (s25), a young woman on an estrogen pill after a flight with pleuritic pain. It has a different mimic (asthma, with peak flow as the key finding), prior DVT and hemoptysis (Wells 7), and a fourth question on anticoagulation during a delay to imaging. The two do share a question pattern: a finding against the mimic, then Wells, then straight to CT pulmonary angiography. The shared part is the standard PE pathway. The distinct teaching here is the panic mimic, and the saturation finding against it. Arjan may judge this closer than "not a duplicate". The simcheck similarity is low (0.18 full text, 0.02 keys).

**Evidence.**
- Kline JA et al. Clinical criteria to prevent unnecessary diagnostic testing in emergency department patients with suspected pulmonary embolism. J Thromb Haemost. 2004. https://doi.org/10.1111/j.1538-7836.2004.00790.x. The abstract lists the PERC variables as "Age < 50 years, pulse < 100 bpm, SaO(2) > 94%, no unilateral leg swelling, no hemoptysis, no recent trauma or surgery, no prior PE or DVT, no hormone use". Her saturation of 94% fails the SaO2 criterion, and her combined pill fails the hormone criterion.
- Emergency Care BC. Pulmonary embolism: diagnosis. 2022. https://emergencycarebc.ca/clinical_resource/clinical-summary/pulmonary-embolism-diagnosis/. "Wells Total Score: >4.5 PE is likely. Arrange for imaging." and "Wells Total Score: <4.5 PE is unlikely (< 15%). Apply PERC rule." Note that this page leaves a score of exactly 4.5 undefined, so it should not be the source for her category.
- Wells PS et al. Thromb Haemost. 2000 (the SAMP's wells-pe source), abstract: "Pulmonary embolism unlikely was assigned to patients with scores < or =4.0 and PE likely if the score was >4.0." Wells arithmetic: PE most likely (3) plus heart rate 118/minute (1.5) gives 4.5. A long flight is not "immobilization or surgery" in Wells. A score of 4.5 is above 4.0, so PE is likely and D-dimer is skipped.

**Proposal: NO CHANGE, release from HOLD.** The duplicate is gone and the keys are sound.

**Cueing check.** The q2 and q3 prompts name PE, which frames q1 in mock mode. It does not single out the q1 key, because the heart rate is also a PE feature and occurs in panic. Every q1 option is a finding of about the same length, and the key is not the longest.

**Arjan decides:** approve / reject

Reviewer: FIXED. Keys confirmed: saturation 94% fails PERC, OCP and flight are the two risk factors, and Wells 4.5 is PE likely under Wells 2000. Corrected the PERC quote, which reads "no hormone use", not "no estrogen use". Replaced the Emergency Care BC cut-off, which leaves exactly 4.5 undefined, with the Wells 2000 threshold (>4.0). Also stated honestly that asthma-copd-44 shares the question pattern (mimic finding, Wells, then CT), so that Arjan can judge the overlap himself.

---

### dvt-pe-30 (s33)

**Problem.** Triage says q1 (compression ultrasound first in pregnancy) and q2 (therapeutic LMWH) repeat s08 dvt-pe-05 and s17 sob-12. Both of those SAMPs contain `short` questions (dvt-pe-05 has three, and sob-12 has two in q2 and q3), so the engine tags them "writein" and mock exams never draw them. Reviewer check in src/: `sampFormat` (src/engine/samp.ts line 127) returns "writein" when any question is `short`. `composeWrittenMock` (src/engine/exam.ts line 53) builds its pool with `samps.filter((s) => sampFormat(s) === "mcq" && ...)`, and it is the only mock builder, called from src/screens/Written.tsx line 32. Write-ins still appear in ordinary practice, tagged "Write-in", so a candidate can still meet the overlap outside mock exams. A search of s19 to s53 finds no other MCQ SAMP about DVT diagnosis in pregnancy. In the MCQ bank, dvt-pe-30 is the only carrier of this teaching. Its q2 decision also differs from the write-ins. They treat a confirmed DVT, while q2 here starts empiric therapeutic LMWH during an imaging delay after a negative study. q3 (iliac DVT, MR unavailable, serial ultrasound with iliac Doppler) appears nowhere else.

**Evidence.**
- Bates SM et al. American Society of Hematology 2018 guidelines: venous thromboembolism in the context of pregnancy. Blood Adv. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/. Recommendation 31 suggests "additional investigations, including serial compression ultrasound or magnetic resonance venography compared with no further investigations after an initial negative ultrasound with imaging of the iliac veins". Recommendation 2: "recommends LMWH over unfractionated heparin (UFH)".
- Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. Version 7 May 2025. https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf. "if there will be a significant delay (greater than 4 hours), patients with a moderate/high or likely pre-test probability of DVT should receive a rapidly acting anticoagulant (e.g. low-molecular-weight heparin ...) until testing is performed".
- Dose check: dalteparin 200 units/kg x 80 kg = 16 000 units. The 15 000 unit prefilled syringe covers the 69 to 82 kg band.

**Proposal: NO CHANGE, release from HOLD.** The overlap is with write-in SAMPs that never appear in mock exams, so the MCQ bank needs this item.

**Cueing check.** The q2 update ("Ultrasound of the femoral and popliteal veins is normal") confirms the q1 key in mock mode. This cannot be avoided while q2 depends on q1's result, and it is the same pattern accepted across the bank. The q3 key "Serial ultrasound with iliac Doppler" (36 characters) is the single longest option, one character ahead of "Contrast venography of the left leg" (35). Parity is 1.17 against the other three counted distractors (1.16 if "No further testing and stop LMWH" is included), within the 1.5 limit. The cue is slight. No hedged key.

**Arjan decides:** approve / reject

Reviewer: FIXED. Verified the claim in src/ that write-ins never enter mock exams (see the corrected evidence in the Problem paragraph). Confirmed by searching the current bank that the only other MCQ SAMPs with pregnancy and DVT content are chest-pain-31 (PE, YEARS) and dvt-pe-40 (anticoagulation at delivery). Neither tests leg ultrasound. ASH 2018 recommendations 2 and 31 are confirmed in the PMC text. The Thrombosis Canada quote is confirmed verbatim in the 7 May 2025 PDF. The dalteparin arithmetic is correct. Corrected the cueing check: the q3 key is the single longest option by one character, not "not the longest". Keys hold. No change to the SAMP.

---

### infectious-diseases-35 (s41)

**Problem.** q4 keys fidaxomicin 200 mg PO twice daily for a first recurrence after oral vancomycin. Triage asked whether this is the single best Canadian answer, given AMMI Canada guidance and uneven provincial coverage. My read is that the key holds, because it is the only option every reference accepts. IDSA/SHEA 2021 prefers fidaxomicin. AMMI Canada 2018 prefers 14 days of oral vancomycin, which is not offered, and it also lists fidaxomicin. A Canadian ED resource follows IDSA. The other four options are wrong under every guideline. A separate defect exists. The q4 update says "completes 10 days of oral vancomycin", which gives away the q3 key (vancomycin 125 mg PO four times daily) in mock mode.

**Evidence.**
- IDSA/SHEA 2021 focused update (Johnson S et al. Clin Infect Dis. 2021. https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/): "In patients with recurrent CDI episodes, we suggest fidaxomicin (standard or extended-pulsed regimen) rather than a standard course of vancomycin." "Vancomycin in a tapered and pulsed regimen or vancomycin as a standard course are acceptable alternatives for a first CDI recurrence." "For patients with multiple recurrences, vancomycin in a tapered and pulsed regimen, vancomycin followed by rifaximin, and fecal microbiota transplantation are options."
- AMMI Canada: Loo VG, Davis I, Embil J et al. JAMMI. 2018. https://doi.org/10.3138/jammi.2018.02.13. The full text returned 403. The reviewer also tried jammi.utpjournals.press (full text and PDF) and utppublishing.com (PDF), and all returned 403. **The AMMI position therefore rests on a secondary source, not the guideline itself.** Its first recurrence recommendation is quoted from Prosty C et al. JAMMI. 2026. https://doi.org/10.3138/jammi-2025-0014 (read in full at PMC13167151): "Practice alignment with the AMMI Canada CDI treatment guideline recommendations ... 14 days of oral vancomycin for first recurrences was 23.5%". The same survey reports "Fidaxomicin reimbursement was reported by 43.5%", and that practice variability may reflect "differences in provincial or institutional drug coverage affecting the availability and reimbursement of fidaxomicin". A search summary of the AMMI guideline lists fidaxomicin 200 mg twice daily for 10 days as the first recurrence alternative. This line is unconfirmed in any full text.
- Emergency Care BC. C. difficile infection. Reviewed 16 December 2022. https://emergencycarebc.ca/clinical_resource/clinical-summary/c-difficile-infection/. "Fidaxomicin is favored over vancomycin given a small benefit with respect to recurrence rates, in accordance with 2021 Infectious Diseases Society of America (IDSA) guidelines." The page gives no separate first recurrence regimen, so it supports fidaxomicin in general, not this exact decision.

**Proposal: EDIT (key confirmed, no key change).** Remove the mock mode cue from the q4 update.

q4 `update`
- Before: "She recovers and completes 10 days of oral vancomycin. Three weeks later she returns with watery diarrhea 6 times a day, and her stool is again positive for C. difficile toxin. She is not in shock."
- After: "She recovers after 10 days of treatment. Three weeks later she returns with watery diarrhea 6 times a day, and her stool is again positive for C. difficile toxin. She is not in shock."

The q4 explanation does not depend on which drug she received first, so it stays as written.

**Alternative (AMMI-aligned, KEY CHANGE).** If Arjan wants the Canadian preferred regimen as the key, replace the fidaxomicin option with oral vancomycin. Fidaxomicin must then leave the list, or two options would be correct.
- q4 `options` after: ["Fecal microbiota transplantation", "metronidazole 500 mg PO three times daily", "rifaximin 400 mg PO three times daily", "vancomycin 1 g IV every 12 hours", "vancomycin 125 mg PO four times daily"]. `correct` 1 becomes 4. KEY CHANGE.
- q4 `explanation` after: "Diarrhea with a positive toxin 3 weeks after a treated episode is a first recurrence. AMMI Canada recommends a 14 day course of oral vancomycin 125 mg four times daily for a first recurrence. Metronidazole is not recommended for recurrent infection. IV vancomycin does not reach the colon. Fecal microbiota transplantation is reserved for a second or later recurrence. Rifaximin is used only after a vancomycin course in repeated recurrences, not alone."
- Add source {id: "ammi-cdi", citation: "Loo VG, Davis I, Embil J, and colleagues. Association of Medical Microbiology and Infectious Disease Canada treatment practice guidelines for Clostridium difficile infection. J Assoc Med Microbiol Infect Dis Can. 2018.", url: "https://doi.org/10.3138/jammi.2018.02.13"} and set q4 `source` to "ammi-cdi". johnson-cdi stays cited by q3.
- Drawbacks: the q3 and q4 keys become the same option text, and the key conflicts with the IDSA 2021 preference. I recommend the primary proposal.

**Cueing check.** With the edit, nothing in any update names the q3 drug. The q4 key "fidaxomicin 200 mg PO twice daily" (33 characters) is not the longest. The metronidazole option is 41. No hedged key. Once the update no longer names the first drug, the q4 key still holds, because IDSA/SHEA 2021 suggests fidaxomicin for recurrent CDI whichever agent treated the first episode.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before text matches src/samps/s41/infectious-diseases.ts. The IDSA/SHEA 2021 recommendations are confirmed on the IDSA page. The Prosty 2026 figures are confirmed in the full text. The AMMI 2018 guideline could not be opened from any of four URLs (all 403), so I stated plainly that the AMMI position rests on Prosty 2026 and a search summary. Noted that Emergency Care BC does not address first recurrence specifically. Corrected the key length to 33. The primary proposal is sound: the cue removal is correct, and fidaxomicin is the only option acceptable under every reference. The Alternative is correctly marked as a key change, and its drawbacks are stated.

---

### pre-eclampsia-23 (s47)

**Problem.** q2 asks for "the longest acceptable interval" between repeat laboratory tests after birth in HELLP syndrome and keys 12 hours. The figure is ACOG wording, but the question does not say which reference applies, and other references give different intervals (6 hours in some reviews). So a single right number depends on the reference. The q2 update also names misoprostol and tranexamic acid as the drugs that stopped the bleeding. In mock mode, that clears two q1 options and narrows q1 to three. q1 shows "ergonovine 0.2 mg IM", while SOGC 431 gives 0.25 mg IM.

**Evidence.**
- 12 hour interval: ACOG Practice Bulletin 222 (Obstet Gynecol. 2020. https://pubmed.ncbi.nlm.nih.gov/32443079/), checked by the reviewer in the full text (the Preeclampsia Foundation copy of the interim update, https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf): "Very close monitoring is required in HELLP syndrome until delivery and in the postpartum period, with laboratory testing at least at 12-hour intervals." The same paragraph gives "platelet count usually decreases at an average rate of approximately 40% per day" and "The lowest observed platelet count occurs at a mean of 23 hours after delivery." So the 12 hour figure explicitly covers the postpartum period, which answers the triage concern that it was antepartum wording. The "every 6 hours" figure in other reviews comes from search results only and was not opened. SOGC Guideline 426 (the Canadian HDP guideline) could not be opened (the sogc.org PDF link returns an HTML page), so whether SOGC gives a lab interval is unknown. That is why naming ACOG in the case is the safe route under SAMP_SPEC section 9.
- Ergonovine: Health Canada product monograph, Ergonovine Maleate Injection USP 0.25 mg/mL, Teligent Canada, revised 4 May 2021. https://pdf.hres.ca/dpd_pm/00061054.PDF. "The immediate postpartum dose of ergonovine maleate is 0.2 mg I.M." Contraindications include "toxemia" and "hypertension". (Reviewer confirmed both lines in the monograph PDF, which also states the product strength as 0.25 mg/mL.) SOGC Guideline No. 431 (Postpartum hemorrhage and hemorrhagic shock. J Obstet Gynaecol Can. 2022. https://www.jogc.com/article/S1701-2163(22)00668-5/abstract), checked by the reviewer in a full text extraction of the December 2022 guideline. Table 6 (second-line uterotonics) gives ergometrine/ergonovine at 250 micrograms IM (preferred), or 250 micrograms IV over 1 minute only in life-saving circumstances. It is repeated every 2 hours, to a maximum of 5 doses, with hypertension as a caution. The micro sign was lost in extraction, but the value matches carboprost 250 micrograms in the same table. The text also says: "Ergometrine should not be used in patients with essential or gestational hypertension". FIGO 2022 (cited in the SAMP) uses 200 mcg. The key (ergonovine carries the greatest risk) holds at either dose, and SOGC 431 supports it directly.

**Proposal: EDIT (no key change).** Name the reference in the q2 update, as SAMP_SPEC section 9 requires when references differ. Remove the q1 cue. Align the ergonovine dose with SOGC, the Canadian source of record.

q1 `options`
- Before: ["carbetocin 100 mcg IV", "carboprost 250 mcg IM", "ergonovine 0.2 mg IM", "misoprostol 800 mcg SL", "tranexamic acid 1 g IV"]
- After: ["carbetocin 100 mcg IV", "carboprost 250 mcg IM", "ergonovine 0.25 mg IM", "misoprostol 800 mcg SL", "tranexamic acid 1 g IV"]
- `correct` stays 2.

q2 `update`
- Before: "The bleeding settles after misoprostol and tranexamic acid, with a total blood loss of 900 mL. She is admitted to the obstetric unit."
- After: "The bleeding settles, with a total blood loss of 900 mL. She is admitted to an obstetric unit that follows ACOG guidance for HELLP syndrome."

q2 `explanation`
- Before: "ACOG advises very close monitoring in HELLP syndrome, with laboratory tests at least every 12 hours, because the platelet count can fall by about 40% a day as liver enzymes rise, and the disease can worsen in the first days after birth. From 78 x 10^9/L, a 40% fall would bring her to about 47 x 10^9/L within a day, since 78 x 0.6 = 46.8. Intervals of 24 to 72 hours would miss that fall. Testing every 4 hours is acceptable when she is unstable, but it is not the longest safe interval."
- After: "ACOG advises very close monitoring in HELLP syndrome before and after birth, with laboratory tests at least every 12 hours. The platelet count can fall by about 40% a day as liver enzymes rise, and the disease can worsen in the first days after birth. From 78 x 10^9/L, a 40% fall would bring her to about 47 x 10^9/L within a day, since 78 x 0.6 = 46.8. Intervals of 24 to 72 hours would miss that fall. Testing every 4 hours is reasonable when she is unstable, but it is not the longest interval ACOG accepts."

q2 prompt, options and `correct` stay as written.

**Cueing check.** The q2 update no longer shows which q1 drugs were safe. The q1 option lengths stay within limits (21 to 22 characters). q2 options are numbers in ascending order, so length and hedging cues do not apply. The ACOG full text confirms that the 12 hour interval applies after birth (see Evidence).

**Alternative (dose only).** Keep "ergonovine 0.2 mg IM". The Canadian label gives 0.2 mg IM and so does the cited FIGO source. Everything else in the proposal stays the same.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match src/samps/s47/pre-eclampsia.ts. I opened both primaries the writer could not reach. ACOG PB 222 confirms the 12 hour wording and states that it covers "until delivery and in the postpartum period", which removes the main triage concern. SOGC 431 Table 6 confirms 250 micrograms IM and adds that ergometrine "should not be used" in gestational hypertension. The evidence is updated and the "Arjan should confirm" caveat is removed. The only claims that still rest on summaries are the "every 6 hours" alternative interval and the question of whether SOGC 426 sets its own interval, which I could not open. The new q2 explanation has 5 sentences and 511 characters. The q1 option lengths are 21 to 22 characters, and the key is not the single longest. The q2 update is 25 words.

---

### suicide-risk-31 (s52)

**Problem.** q1 asks for the "most accurate" statement about suicide risk in Canadian Armed Forces veterans and keys "Release before age 25 carries the highest risk". The source is a single 1976 to 2012 VAC release cohort (VanTil 2021). That is epidemiology trivia rather than an ED decision. It is also a "most accurate statement" item, a format prone to hedged-key cues. KF1 is not short of items: s52 already tests KF1 in at least 16 other questions. q3 keys psychiatric admission for a high risk patient under KF4, which is written for low risk discharge. I think that mapping is defensible (see below).

**Evidence.**
- Veterans Affairs Canada. 2019 Veteran Suicide Mortality Study, research summary. 2019. https://www.veterans.gc.ca/en/about-vac/research/research-papers/2019-veteran-suicide-mortality-study/research-summary-december-2019. For male veterans under 25, "the risk was 2.5 times higher than other male Canadians of the same age". "As male Veterans aged, their risk of suicide decreased to levels below those for other male Canadians." (Reviewer confirmed both quotes on the page.) This summary is about current age under 25, not age at release. So it does not verify the q1 key, which comes from VanTil's release-age analysis. The deletion does not depend on that. Either way, it is a population statistic with no ED action attached.
- KF4 in src/blueprint/priorityTopics.ts: "For low risk suicidal patients, agree on an outpatient plan together and discharge at the right time." Every q3 distractor is a discharge plan. The decision tested is whether this patient meets the threshold for discharge, which is the "right time" judgement of KF4. No other key feature fits a voluntary admission. KF3 covers a patient who wants to leave, and he agrees to stay.

**Proposal: EDIT. Delete q1.** The SAMP drops to 3 questions, which SAMP_SPEC section 2 allows (3 to 5). No remaining key changes. q3 keeps KF4.

`stem`
- Before: "... He served 6 years in the Canadian Armed Forces and was released at the rank of corporal 3 years ago, at age 24, after a deployment injury. ..."
- After: "... He served 6 years in the Canadian Armed Forces and was released 3 years ago after a deployment injury. ..."
- The rest of the stem is unchanged. It stays above 50 words.

`questions`
- Remove q1 (veteran risk statement, KF1, source vantil-veterans).
- Renumber: q2 (preparatory act) becomes q1, q3 (disposition) becomes q2, q4 (VAC Assistance Service) becomes q3. Their text, keys, keyFeatures and sources are unchanged.

`sources`
- Before: [S.vantil, S.posner, S.safet, S.vac]
- After: [S.posner, S.safet, S.vac]
- Remove the now-unused `vantil` entry from the `S` object if nothing else uses it.

Side effects: s52 KF1 coverage drops by one question and stays well above 3. The s52 single key count at index 2 drops by one.

Launch gate (reviewer count across the whole current bank, all SAMPs, any topic, questions with keyFeature topic "suicide-risk"). Before the deletion: KF1 33, KF2 19, KF3 25, KF4 16, KF5 33. After: KF1 32, with the others unchanged. Counting only MCQ SAMPs, which mock exams can draw: KF1 18 before and 17 after, KF2 12, KF3 14, KF4 10, KF5 18. In s52 alone after the deletion: KF1 17, KF2 12, KF3 14, KF4 9, KF5 18. Every key feature stays far above 3 questions bank-wide and at least 1 in the batch, so the gate holds. Batch balance in s52 after the deletion: single keys by position go from 12, 12, 15, 13, 13 of 65 to 12, 12, 14, 13, 13 of 64, a maximum of 21.9%. The q1 key is currently the single longest option, so the single-longest-key share falls from 17 of 65 to 16 of 64. Any sign-off or review file that refers to suicide-risk-31 question ids needs the new numbering.

**Cueing check.** The remaining questions are unchanged. None is a "most accurate statement" item, and none has a hedged or longest-option key. The q3 update ("Asked directly, he says he plans ...") does not reveal the q2 (preparatory act) key.

**Alternative.** Keep q1 but base it on the broader VAC Veteran Suicide Mortality Study rather than the single release cohort. Change `source` to a new VAC 2019 citation and rewrite the explanation around "male Veterans under 25 had 2.5 times the risk of other male Canadians of the same age". This keeps 4 questions, but it is still an epidemiology item with a "most accurate" lead-in. Reviewer caution: the VAC figure is about veterans who are under 25 now. He is 27, so under this alternative the statistic would not apply to him, and the item would drift further from the case. I do not recommend the alternative without a rewrite.

**Arjan decides:** approve / reject

Reviewer: FIXED. The stem Before text matches src/samps/s52/suicide-risk.ts exactly. The `vantil` entry in `S` is used only by this SAMP (lines 29, 842, 881), so removing it is safe. Launch gate confirmed by a count across the whole bank (added above). Every suicide-risk key feature keeps at least 16 questions bank-wide and 9 in s52. The q3 KF4 mapping is defensible as argued. Corrected the evidence: the VAC summary concerns current age under 25, not release before 25. Flagged that the Alternative would not fit a 27-year-old. docs/physician-review/s52-suicide-risk.md and several docs/reviews files cite suicide-risk-31 and need renumbering if Arjan approves.
