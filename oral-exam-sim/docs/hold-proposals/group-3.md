### abdominal-pain-29 (s19)

**Problem.** Triage held this SAMP because chest-pain-30 (s28) was a near copy: an older woman with burning band pain, allodynia, herpes zoster and valacyclovir. That problem no longer exists. chest-pain-30 is now version 3, "Light-headed after sudden chest pain", a 24-year-old man with a hemopneumothorax (rebuilt twice, see docs/reviews/samps-replace-s32-s28.md, commit fd4ae63). A search of src/samps for "zoster" and "allodynia" finds no other MCQ SAMP about prodromal zoster band pain. The s01 write-in abdominal-pain item lists zoster only as one accept line, and the s10, s11 and s37 zoster items are about the eye. The unused ZOSTER source const is still defined in src/samps/s28/chest-pain.ts but no SAMP there cites it.

**Evidence.**
- The q3 dose. Beutner KR et al. Valaciclovir compared with acyclovir for improved therapy for herpes zoster in immunocompetent adults. Antimicrob Agents Chemother. 1995. https://pmc.ncbi.nlm.nih.gov/articles/PMC162779/. The abstract compares "oral valaciclovir given at a dosage of 1,000 mg three times daily for 7 or 14 days and oral acyclovir given at a dosage of 800 mg five times daily for 7 days" in adults aged 50 or older. This matches the q3 key and the explanation.
- The prodrome. CDC. Clinical overview of shingles. 2024. https://www.cdc.gov/shingles/hcp/clinical-overview/index.html: "People with herpes zoster can have pain, itching, or tingling in the area where the rash will develop."
- Open physician-review note, not part of this HOLD: Beutner enrolled immunocompetent adults, and she takes methotrexate and prednisone 7.5 mg. The oral key stays reasonable for localized zoster in a patient on low-dose immunosuppression, but I did not find a Canadian source that states this.

**Proposal: NO CHANGE, release from HOLD.** The duplicate is gone. The keys and doses are correct.

**Cueing check (mock mode, all questions shown).** Two cross-question cues exist in the current text. They are not part of the HOLD, so they are offered as an optional second edit that Arjan may take or leave.
1. The q2 update, "Light touch over the painful band causes sharp pain", states the q1 key ("Skin sensitive to light touch").
2. The q3 update (grouped vesicles) and prompt ("antiviral treatment") give away the q2 key (herpes zoster). This is the usual pattern of a later update confirming a diagnosis. Fixing it would need a rebuild of q2 or q3, so no change is proposed.

Optional edit for cue 1:

q2 update
- Before: "Light touch over the painful band causes sharp pain. The band stops at the midline in front and behind."
- After: "The band of pain stops at the midline in front and behind. Deep palpation of the abdomen is not tender."

q2 explanation
- Before: "Burning, unilateral pain in a band that stops at the midline, with allodynia, a normal abdomen and normal tests in an older immunosuppressed patient is typical of herpes zoster before the rash. The pain often starts in the area where the rash will later appear. Renal colic is colicky and usually causes hematuria, and her urinalysis is normal. Pyelonephritis causes fever and pyuria. A splenic infarct causes left upper quadrant tenderness, not skin allodynia. A thoracic disc herniation is rare, and zoster is far more likely in an immunosuppressed older adult with burning pain confined to one band."
- After: "Burning, one-sided pain in a band that stops at the midline, with a normal abdomen and normal tests in an older immunosuppressed patient, is typical of herpes zoster before the rash. The pain often starts in the area where the rash will later appear. Renal colic is colicky and usually causes hematuria, and her urinalysis is normal. Pyelonephritis causes fever and pyuria. A splenic infarct causes left upper quadrant tenderness, and deep palpation of her abdomen is not tender. A thoracic disc herniation is rare, and zoster is far more likely in an immunosuppressed older adult with burning pain confined to one band."

Keys, options, sources and keyFeatures do not change. The update is 19 words.

**Arjan decides:** approve / reject (release from HOLD). Optional cue edit: approve / reject

Reviewer: FIXED. Confirmed chest-pain-30 is now the hemopneumothorax case and a bank search (plus simcheck, top match headache-13 at 0.20) finds no other prodromal zoster SAMP. Beutner abstract quote and doses confirmed on PubMed Central. The CDC page returned "Access Denied" to me, so its quote is unverified, but it only supports the unchanged q2 key. In the optional edit, the writer's splenic infarct reason ("her abdomen is soft without guarding") did not exclude tenderness, and with the light-touch sentence gone the case no longer states allodynia. I changed the new update's second sentence to "Deep palpation of the abdomen is not tender." and the matching explanation clause, so the distractor reason rests on a stated fact. The q3 cue of q2 (vesicles confirming zoster) is intrinsic and left as is.

---

### anaphylaxis-38 (s23)

**Problem.** The duplicate sweep called this a borderline copy of anaphylaxis-19. Both patients get one IM epinephrine dose next door before arrival, and both SAMPs key a repeat 0.5 mg IM dose (q2) and extended observation (q3). The other two questions differ. anaphylaxis-38 q1 separates anaphylaxis from a Jarisch-Herxheimer reaction and q4 teaches penicillin avoidance. anaphylaxis-19 q1 teaches anaphylaxis without skin signs (laryngeal only) and q4 teaches allergist review before the next vaccine. The stems differ in trigger (drug depot against vaccine), organ systems (urticaria and hypotension against stridor without rash) and sex and age. The repeat IM dose and extended observation are core key features 3 and 4 of the topic, keyed in at least five other s23 SAMPs (for example the 0.24 mg and 0.19 mg pediatric repeats and the 0.5 mg repeat at line 2047 of the file). Sharing those teaching points is expected, not copying.

A separate mock-mode defect: the q3 update, "His symptoms resolve after the second dose and 1 L of crystalloid", gives away the q2 key (repeat epinephrine 0.5 mg IM). The q3 explanation then rests on the second dose.

**Evidence.** Shaker MS et al. Anaphylaxis. A 2020 practice parameter update, systematic review, and GRADE analysis. J Allergy Clin Immunol. 2020. https://doi.org/10.1016/j.jaci.2019.12.924 (AAAAI copy: https://www.aaaai.org/Aaaai/media/MediaLibrary/PDF%20Documents/Practice%20and%20Parameters/Anaphylaxis-2020-grade-document.pdf). Key point: "Severe anaphylaxis and/or the need for >1 dose of epinephrine to treat anaphylaxis are risk factors for biphasic anaphylaxis." The text adds: "for patients without severe risk features, discharge after a 1-hour asymptomatic observation may be reasonable" and "extended observation of up to 6 hours or longer (including hospital admission) may be appropriate." His BP of 84/50 mmHg after one dose is a severe reaction on its own, so the q3 key holds without naming the second dose.

**Proposal: EDIT (keep both SAMPs). No key change.** Only the q3 update and q3 explanation change.

q3 update
- Before: "His symptoms resolve after the second dose and 1 L of crystalloid."
- After: "His hives, wheeze and hypotension resolve with treatment in the emergency department."

q3 explanation
- Before: "He needed more than one dose of epinephrine, a major risk factor for a biphasic reaction, and benzathine penicillin is a long-acting depot that keeps releasing drug for days to weeks. Both favour extended observation or admission rather than early discharge. Cetirizine and prednisone do not prevent a biphasic reaction. The clinic cannot provide the observation he needs."
- After: "His BP of 84/50 mmHg after a first dose of epinephrine marks severe anaphylaxis, a major risk factor for a biphasic reaction. Benzathine penicillin is also a long-acting depot that keeps releasing drug for days to weeks. Both favour extended observation or admission. Discharge after 1 hour suits only a reaction without severe features that settles with one dose. Cetirizine and prednisone do not prevent a biphasic reaction. The clinic cannot provide the observation he needs."

Options, key (index 4), source (jtf20) and keyFeature stay the same.

**Cueing check.** The new update is 12 words and names no drug, so it no longer reveals the q2 key. q2's update (BP 84/50 mmHg, wheeze persists) still supports the q1 key, which is fair because q1 already rests on stem facts. No option text changes, so length and hedge checks are unchanged.

**Alternative.** Keep anaphylaxis-19 and reject anaphylaxis-38, rebuilding it around the one thing no other s23 SAMP tests: the Jarisch-Herxheimer reaction against anaphylaxis after syphilis treatment, keyed to supportive care and continuing treatment. I do not recommend this, because the penicillin allergy advice in q4 is also unique in the batch.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match src. Shaker 2020 quotes confirmed word for word in the full text (Box 2 and the observation section). simcheck puts anaphylaxis-19 top at only 0.25 full text and 0.13 keys, so keeping both is reasonable. The writer's new q3 explanation had 7 sentences, above the spec limit of 6. I merged the first two sentences and changed "a mild reaction" to "a reaction without severe features", the source's own term ("patients without severe risk features"). Note: the source does not define hypotension as severe in so many words. Calling a BP of 84/50 mmHg severe anaphylaxis is standard grading, not a quote.

---

### asthma-copd-32 (s25)

**Problem.** The q1 key is "Exertion test with oximetry" before discharge. The stem gives a 14-year-old 2 hours after his last salbutamol with no indrawing, faint end-expiratory wheeze only, SpO2 95% on room air and peak flow 75% of his best. By TREKK he already meets every discharge criterion (PRAM 1). No Canadian or international guideline found requires an exertion test. The only source is Rosen. asthma-copd-25 keys "Ready for discharge now" in the same situation, so the bank teaches two answers. q2 (a stair test that drops SpO2 to 90%) depends entirely on the q1 key, and q3 (follow-up timing) overlaps asthma-copd-25 q2.

What Arjan should also weigh (added by reviewer). The CFPC's own key feature asthma-copd 8 reads "Before discharge, confirm true recovery with an exertion test and objective measures" (src/blueprint/priorityTopics.ts). Two signed-off write-in SAMPs in s04/asthma-copd.ts, both adults, credit an ambulation test as a discharge check (accept lines "Ambulation test without significant breathlessness or desaturation" and "Ambulation test with oximetry, without desaturation below about 88% or marked breathlessness"). So the exam blueprint names an exertion test. The case against this key rests on the pediatric Canadian source (TREKK), which lists no exertion test and would discharge this boy now. The rebuild keeps key feature 8 through objective discharge criteria and leaves the exertion teaching to the adult SAMPs.

**Evidence.** TREKK. Bottom Line Recommendations. Asthma exacerbations for children aged 12 months and older. Version 2.1. 2024. https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf. "Criteria for safe discharge home. PRAM score less than or equal to 3 at least 1-2 hours after last bronchodilator treatment. No significant intercostal and/or suprasternal indrawing. Good air entry on auscultation with at most mild expiratory wheeze. Oxygen saturation greater or equal to 92% in room air." There is no exertion or ambulation test in the document. (Triage mentions a v2.3 of 2025. I could open only v2.1, which the SAMP cites.)

**Proposal: REJECT and rebuild.** The key cannot be kept against TREKK, and keying "discharge now" would copy asthma-copd-25 q1.

Rebuild outline, same id, topic and title theme ("Fine sitting down"):
- Stem: 14-year-old boy, same history, 2 hours after his last salbutamol, says he feels fine and wants to go home, speaks in full sentences, faint end-expiratory wheeze, no indrawing. Peak flow 330 of 440 L/minute. Vitals field: SpO2 90% on room air, pulse 100/minute, resp 20/minute. Controller changed from fluticasone to "budesonide-formoterol 200/6 mcg, one inhalation twice daily and as needed" (needed for q3).
- q1 (keyFeature asthma-copd 8): "Which of the following findings argues most against his discharge now?" Options: "Faint end-expiratory wheeze", "Heart rate of 100/minute", "Oxygen saturation of 90%", "Peak flow 75% of personal best", "Respiratory rate of 20/minute". Key: SpO2 90%, below the TREKK threshold of 92% on room air. Use 90%, not 91%: TREKK also allows "(>90% for higher altitude)", so 91% would meet the criterion at altitude and could be argued. His PRAM is 3 (wheeze 1, SpO2 below 92% 2), so he meets the PRAM criterion and fails only on saturation. The wheeze is within "at most mild expiratory wheeze". A peak flow of 75% is inside the GINA 60 to 80% good-response range. Source: TREKK.
- q2 (keyFeature asthma-copd 8): next step. Key "Further salbutamol and reassessment" against discharge with a plan, chest radiograph, venous gas and a second dexamethasone dose. Do not offer an oxygen option. With SpO2 90%, "oxygen and reassessment" would also be defensible. The q2 update must not restate the q1 finding. Source: TREKK.
- q3 (keyFeature asthma-copd 6, as in the writer's outline, because the key is an inhaled corticosteroid-containing reliever): reliever at discharge for a 12-year-old or older already on budesonide-formoterol. Key "budesonide-formoterol as needed" (or its dose form). Sources: TREKK ("Age ≥ 12 years: salbutamol OR if patient is already on budesonide/formoterol, they could be discharged with it instead of salbutamol") and GINA 2026 ("Patients using ICS–formoterol as their reliever should return to this on or before discharge if SABA was substituted in ED or hospital"). Salbutamol must not be an option, because TREKK allows it too. Distractors could be formoterol alone, salmeterol, ipratropium and montelukast as relievers. The writer's version (a stopped budesonide-formoterol prescription) does not work. A boy who stopped it is not "already on" it, so salbutamol stays a second defensible key. Overlap: asthma-copd-21 (s25, not signed) keys "budesonide-formoterol maintenance and reliever" as an adult controller plan. The teaching point is close but the question differs. Arjan may prefer a different q3.
- Drop the current q3 (GINA follow-up 2 to 7 days). asthma-copd-25 q2 already keys "Follow-up within 7 days".
- Drop the Rosen chapter 163 source. Sources become TREKK and GINA.

simcheck (reviewer, on this outline): top matches asthma-copd-21 (0.36 full text, 0.23 keys), asthma-copd-28 (0.30), asthma-copd-25 (0.22) and the signed asthma-copd-07 (0.22). None share the story. asthma-copd-25 is an 8-year-old at 05:30 who meets every TREKK criterion. The rebuild is an adolescent who fails on SpO2 alone. The only signed asthma SAMP in the top 15 is asthma-copd-07 (adult roofer, write-in discharge criteria) and asthma-copd-01, and neither is copied. SpO2 90% also appears as the key finding in asthma-copd-42 (adult, wildfire smoke) and asthma-copd-39 (2-year-old). That is one shared finding across unrelated stories, not a copy.

**Cueing check.** For the rebuild, q2's update must not state the q1 finding again. The q1 key "Oxygen saturation of 90%" (24 characters) sits within the option range of 24 to 30 characters, with a ratio of 1.25. q2's options reveal that he is not discharged, which points toward q1 having a finding against discharge but not which one.

**Alternative.** None found. No Canadian pediatric guideline supports an exertion test as a discharge condition. The CFPC key feature does name one (see above). If Arjan wants the bank to teach it for children, asthma-copd-25 q1 would need to change instead, and TREKK would not support that.

**Arjan decides:** approve / reject

Reviewer: FIXED. TREKK v2.1 downloaded from the cited URL and the discharge criteria and age 12 reliever quotes confirmed. It has no exertion, ambulation or stair test. The GINA 2026 quote was confirmed in the saved report text. Changes: (1) Disclosed that CFPC key feature 8 itself names an exertion test and that two signed s04 adult SAMPs credit an ambulation test. The writer's "no guideline" framing left this out. (2) SpO2 91% changed to 90% because of TREKK's ">90% for higher altitude" clause. Stated that SpO2 goes in the vitals field. (3) Added a warning against an oxygen option in q2. (4) Rebuilt the q3 outline. The writer's version had two defensible keys. Budesonide-formoterol is now his current controller so the TREKK and GINA rule applies, and salbutamol is excluded. (5) The old follow-up q3 is now dropped outright, since it repeats asthma-copd-25 q2. (6) Ran simcheck and recorded the results. No copy of asthma-copd-25 or any signed asthma SAMP.

---

### critical-appraisal-33 (s31)

**Problem.** q4 keys "Enoxaparin 40 mg SC daily while in the cast" for a 38-year-old with a prior provoked DVT and a below-knee cast for 6 weeks. The source is NICE NG89. No Canadian guideline covers cast thromboprophylaxis, and ACCP 2012 suggests no routine prophylaxis for isolated lower-leg injury.

**Evidence.**
- NICE. Venous thromboembolism in over 16s. NG89. 2018, updated 2019. https://www.nice.org.uk/guidance/ng89: "Consider pharmacological VTE prophylaxis with LMWH or fondaparinux sodium for people with lower limb immobilisation whose risk of VTE outweighs their risk of bleeding."
- Falck-Ytter Y et al. Prevention of VTE in orthopedic surgery patients. Antithrombotic therapy and prevention of thrombosis, 9th ed. ACCP evidence-based clinical practice guidelines. Chest. 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3278063/: "We suggest no prophylaxis rather than pharmacologic thromboprophylaxis in patients with isolated lower-leg injuries requiring leg immobilization (Grade 2C)." The recommendation is for unselected patients and does not address prior VTE.
- Douillet D et al. Targeted prophylactic anticoagulation based on the TRiP(cast) score in patients with lower limb immobilisation (CASTING). Lancet. 2024. https://doi.org/10.1016/S0140-6736(23)02369-3. Withholding prophylaxis was tested only in low-risk patients: "patients with a TRiP(cast) score <7 who are not receiving anticoagulation have a very low risk of VTE" (ACC summary, https://www.acc.org/latest-in-cardiology/journal-scans/2024/03/25/15/50/targeted-prophylactic-anticoagulation). Current practice is risk-targeted, not "none for all".

**Proposal: NO CHANGE.** The two guidelines disagree only for unselected patients. The SAMP is built so that the decision turns on his individual risk. The stem says the trial excluded prior VTE, q3 has the candidate compute his own NNT of 21 against an NNH of 250, and q4 applies that balance. That is the critical-appraisal point of the SAMP, and it matches the NICE rule "whose risk of VTE outweighs their risk of bleeding" and risk-targeted practice. The ACCP 2012 grade 2C suggestion for unselected patients does not make "No prophylaxis" right for a man with prior VTE. The other distractors stay wrong: a stocking cannot go under the cast, and rivaroxaban 20 mg and warfarin to INR 2 to 3 are treatment intensity. No Canadian guideline exists, so NICE is the right source under SAMP_SPEC section 9.

Open note for Arjan (added by reviewer). The largest real trial is not cited. van Adrichem RA et al. Thromboprophylaxis after knee arthroscopy and lower-leg casting (POT-CAST). N Engl J Med. 2017. https://doi.org/10.1056/NEJMoa1613303. Abstract: "Venous thromboembolism occurred in 10 of the 719 patients (1.4%) in the treatment group and in 13 of the 716 patients (1.8%) in the control group (relative risk, 0.8; 95% confidence interval [CI], 0.3 to 1.7)". It concludes that LMWH "during the full period of immobilization due to casting was not effective". The SAMP's fictional trial has almost the same design and size (1 500 adults, below-knee cast, prophylactic LMWH against none) but reports a 60% relative reduction. Fictional data are allowed, and q1 to q3 are arithmetic. But q4 asks for real management, and the fictional effect is what makes the key right. A candidate who knows POT-CAST could argue "No prophylaxis". The key still holds for a man with prior VTE on the NICE rule and risk-targeted practice. CASTING, whose abstract carries the quote above, gave anticoagulation to patients with a TRiP(cast) score of 7 or more. If Arjan wants to close this gap, one q4 explanation sentence could change, keeping the explanation at 6 sentences. Before: "No prophylaxis ignores his much higher baseline risk." After: "No prophylaxis is reasonable for unselected casted patients, in whom a real trial found no clear benefit, but it ignores his much higher baseline risk." This is optional and not part of the NO CHANGE proposal.

**Cueing check.** No text changes. For the record: the q1 key "84" appears again as a distractor in q2 and q3, and the q2 key "250" appears in q1. Each is used as a deliberate "wrong calculation" distractor with a true reason, so the repetition does not point to the key. The q4 key (43 characters) ties with the stocking option as the longest. It is 1.12 times the mean distractor length, within the 1.5 limit.

**Arjan decides:** approve / reject

Reviewer: FIXED (the NO CHANGE proposal itself is sound). Recomputed NNT 84, NNH 250, RRR 60% and individual NNT 21, and all are correct. NICE NG89 1.11.1 was confirmed on nice.org.uk. The CASTING quote was confirmed in the Lancet abstract through Europe PMC. The ACCP 2012 full text did not load for me (PMC service error), so that quote is unverified, but it only supports the case against the key. Added the POT-CAST open note, which the writer left out and which a physician reviewer will likely raise. Also corrected the q4 key length from 44 to 43 characters and the ratio from 1.09 to 1.12. The key ties for longest.

---

### environmental-23 (s36)

**Problem.** q3 keys IV iloprost for deep frostbite in a man whose CT head shows a 6 mm acute subdural hematoma. The explanation says iloprost has "a much lower bleeding risk", but iloprost inhibits platelets. Using it next to an acute intracranial bleed needs caution and a neurosurgical view, which the case does not give. The explanation also relies on a Yukon case series for the salvage figure. IV iloprost is available in Canada only through the Special Access Program. The stem covers this with "Your centre has a frostbite protocol using iloprost and alteplase."

**Evidence.**
- McIntosh SE et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of frostbite: 2024 update. Wilderness Environ Med. 2024. https://doi.org/10.1177/10806032231222359 (summary PMC11855094): "Consider iloprost for deep frostbite (Cauchy Grades 2–4) to or proximal to the distal interphalangeal joint within 72 h after rewarming but ideally as soon as possible." Strong recommendation, low-quality evidence. It gives no bleeding contraindication.
- Parsons S, Fraulin F. Care of the adult and child with severe frostbite. Alberta Children's Hospital. Last updated January 2023. https://achpccg.com/wp-content/uploads/2023/11/tms-picuc-physician-severe-frostbite.pdf. A Canadian protocol. Iloprost: the only absolute contraindication is "Known hypersensitivity to Iloprost or excipients". It lists "Exercise caution in patient populations with ... Increased risk of bleeding". Alteplase: absolute contraindications include "history of any intracranial hemorrhage" and "significant closed-head or facial trauma within the preceding 3 months". It also notes "Iloprost is a Special Access Program (SAP) medication".
- AURLUMYN (iloprost) injection prescribing information. US FDA. 2024. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4&type=display. Contraindications: "None." The only warning is hypotension. The mechanism section says iloprost "inhibits platelet aggregation".

So the key is defensible: alteplase and heparin are contraindicated, and iloprost is not. But the explanation's bleeding claim is wrong, and the case should show that the bleed has been weighed.

**Proposal: EDIT (q3 update, q3 explanation, q3 source, sources). No key change.**

q3 update
- Before: "His feet are thawed 4 hours after arrival. The toes stay grey and cold with no capillary refill. CT head shows a 6 mm acute subdural hematoma. Your centre has a frostbite protocol using iloprost and alteplase."
- After: "His feet are thawed 4 hours after arrival. The toes stay grey and cold with no capillary refill. CT head shows a 6 mm acute subdural hematoma. Neurosurgery plans nonoperative care. Your centre has a frostbite protocol using iloprost and alteplase."

q3 explanation
- Before: "Deep frostbite with no capillary refill after thawing needs a systemic treatment to restore perfusion. His acute subdural hematoma contraindicates alteplase and heparin. Iloprost is a vasodilator with a much lower bleeding risk and is recommended for deep frostbite within 72 hours. A Yukon protocol using it salvaged about 80% of affected digits. Amputation is delayed for weeks until the tissue demarcates. Heparin alone and topical nitroglycerin lack evidence."
- After: "Deep frostbite with no capillary refill after thawing needs a systemic treatment to restore perfusion. Any intracranial hemorrhage is an absolute contraindication to alteplase, and heparin would add to the bleed. Iloprost is a vasodilator, not a thrombolytic, and it is recommended for deep frostbite within 72 hours of rewarming. It does inhibit platelets, so protocols advise caution when bleeding risk is raised. With a small subdural managed without surgery, the plan is agreed with neurosurgery and he is watched closely. Amputation is delayed for weeks until the tissue demarcates. Heparin alone and topical nitroglycerin lack evidence."

q3 source
- Before: "poole-yukon"
- After: "ach-frostbite"

sources
- Before: [S.paal, S.wmsFrost, S.poole]
- After: [S.paal, S.wmsFrost, S.achFrost], with a new entry in S: `achFrost: { id: "ach-frostbite", citation: "Parsons S, Fraulin F. Care of the adult and child with severe frostbite. Alberta Children's Hospital clinical care guideline. Alberta Health Services. 2023.", url: "https://achpccg.com/wp-content/uploads/2023/11/tms-picuc-physician-severe-frostbite.pdf" }`. No other SAMP cites S.poole, so its entry can be deleted.

Options, key (index 3, "Iloprost IV infusion") and keyFeature stay the same.

**Cueing check.** The update is 41 words, within 10 to 45. "Neurosurgery plans nonoperative care" names no drug and fits every option equally. It argues against alteplase and heparin no more than the hematoma already does. The q3 update still says CT head was done, which hints that q1 involved CT but not when, so the q1 timing decision is not given away. Options are unchanged.

**Alternative.** Remove the bleed. Change the CT sentence to "CT head shows no intracranial injury." Alteplase stays contraindicated by "significant closed-head or facial trauma within the preceding 3 months" (Alberta protocol, above), so iloprost stays the key with no bleeding caveat. The explanation's second sentence would then read "His recent head injury is an absolute contraindication to alteplase, and heparin adds bleeding risk after head trauma." This is cleaner, but it loses the teaching that iloprost is not an absolute contraindication with a bleed.

**Arjan decides:** approve / reject

Reviewer: WITHDRAW, superseded by the sweep 3 rebuild. The duplicate sweep found that environmental-23 copies the signed-off environmental-09, and it is being rebuilt with a new story. Not reviewed further. Do not send this edit to Arjan.

---

### lacerations-18 (s43)

**Problem.** q3 keys "Psychosocial assessment by mental health staff" before discharge for a 15-year-old with repeated self-harm, no suicidal intent and a supportive mother. The source is NICE NG225, which asks for a mental health professional. In many Canadian EDs the emergency physician does this assessment for a low-risk adolescent and arranges urgent mental health follow-up. So a Canadian candidate could argue the key names the wrong person, and "Urgent referral to her family doctor only" sits close to Canadian practice.

**Evidence.**
- Korczak DJ, Canadian Paediatric Society. Suicidal ideation and behaviour. Paediatr Child Health. 2015, reaffirmed January 2024. https://cps.ca/en/documents/position/suicidal-ideation-and-behaviour: "Paediatricians and primary care clinicians need to know how to assess suicidal ideation and behaviour among children and adolescents, and identify those at greatest risk for suicide." For youth managed as outpatients it lists "the need for mental health follow-up care; the availability of local crisis services and telephone lines". It also says "Health care practitioners should consider referring adolescents with potential or confirmed mental illness for psychiatric assessment."
- NICE. Self-harm: assessment, management and preventing recurrence. NG225. 2022. https://www.nice.org.uk/guidance/ng225. It asks for referral "to crisis response service (or an equivalent specialist mental health service or a suitably skilled mental health professional) as soon as possible after arrival, for a psychosocial assessment" (wording as quoted in search summaries, the NICE page returned 403).

Both agree that an assessment must happen before she leaves. They differ only on who does it. A key that leaves out who does it is true under both.

**Proposal: EDIT (q3 option text, explanation, source). No key change.** The key stays at index 3. Only its wording changes.

q3 options
- Before: ["Admission to an adolescent inpatient unit", "Discharge with a pamphlet on self-harm", "Involuntary hold under mental health law", "Psychosocial assessment by mental health staff", "Urgent referral to her family doctor only"], correct 3
- After: ["Admission to an adolescent inpatient unit", "Discharge with a pamphlet on self-harm", "Involuntary hold under mental health law", "Psychosocial assessment and safety plan", "Urgent referral to her family doctor only"], correct 3

q3 explanation
- Before: "Repeated self-harm over 4 months calls for a psychosocial assessment by a mental health clinician before discharge, covering risk, needs and a safety plan made with her and her family. Denying suicidal thoughts does not remove the need for that assessment. Written material or a family doctor referral alone skips it. She has no suicidal intent or plan and a supportive parent, so an involuntary hold or admission is not justified on these facts."
- After: "Repeated self-harm over 4 months calls for a psychosocial assessment before she leaves. It covers risk, needs and supports, and it ends with a safety plan made with her and her mother. The emergency physician or mental health staff may do it, and mental health follow-up is arranged. Denying suicidal thoughts does not remove the need for that assessment. A pamphlet or a family doctor referral alone skips it. She has no suicidal intent or plan and a supportive parent, so an involuntary hold or admission is not justified on these facts."

q3 source
- Before: "nice-ng225"
- After: "cps-suicidal-ideation"

sources
- Before: [S.cps, S.nice, S.quinnRisk]
- After: [S.cps, S.quinnRisk]

**Cueing check.** Option lengths are 41, 38, 40, 39 and 41 characters. The key is not the longest and is 0.97 times the mean distractor length. Alphabetical order is unchanged. The key has no hedge word.

Optional second edit, mock-mode cue (added by reviewer). The q2 update ("She tells you she cut herself with a razor blade about 12 hours ago. She denies suicidal intent.") reports her answer to the q1 key question, so q1 is given away when all questions show at once. q2 needs neither fact. The prompt already says the cut is 12 hours old, and the q3 update repeats her denial. The only thing q2 took from "razor blade" was a clean wound. With the mirror story still standing, a glass foreign body would be a fair worry, so the new update rules it out.

q2 update
- Before: "She tells you she cut herself with a razor blade about 12 hours ago. She denies suicidal intent."
- After: "Exploration under good light shows no foreign material in any of the cuts."

q2 explanation
- Before: "A clean, linear razor cut on the forearm of a healthy teenager can be closed primarily after irrigation, even 12 hours after injury."
- After: "A clean, linear cut with no foreign material on the forearm of a healthy teenager can be closed primarily after irrigation, even 12 hours after injury."
(The Before is the first sentence of the q2 explanation. The rest does not change.)

The new update is 13 words and names nothing about self-harm. q2 options, key and source do not change. The q3 update ("She has cut herself about once a week for 4 months") still shows that self-harm was disclosed. That cue is intrinsic, because q3 is about self-harm, and it is left as is.

**Alternative.** Keep the NICE standard: leave the key as "Psychosocial assessment by mental health staff" with source nice-ng225. This is defensible where the ED has youth mental health or crisis staff on site, but it is a UK standard, and SAMP_SPEC section 9 prefers a Canadian source.

**Arjan decides:** approve / reject. Optional q2 cue edit: approve / reject

Reviewer: FIXED. Before texts match src. CPS quotes confirmed on cps.ca (reaffirmed January 11, 2024). The NICE NG225 1.7.13 quote now loads and is confirmed word for word. Changes: (1) The new key "Psychosocial assessment before discharge" echoed the prompt's "before she leaves the emergency department", a wording cue under SAMP_SPEC section 6. It is now "Psychosocial assessment and safety plan" (39 characters), which the explanation already covers. (2) Removed "urgent" from "urgent mental health follow-up" in the explanation, because CPS says only "the need for mental health follow-up care". (3) Added the optional q2 update edit for the mock-mode cue, with the matching explanation clause. S.nice becomes unused in s43 and can be deleted from S.

---

### pulmonary-edema-33 (s48)

**Problem.** q3 keys "morphine 2.5 mg SC" for end-of-life breathlessness in an opioid-naive 89-year-old with stage 4 chronic kidney disease. The explanation says the reduced dose "suits" her kidney disease. B.C. provincial palliative guidance lists morphine as the opioid to avoid in renal failure, so the key teaches a choice that Canadian palliative guidance ranks last.

**Evidence.**
- BC Ministry of Health, Guidelines and Protocols Advisory Committee. Palliative care for the patient with incurable cancer or advanced disease. Part 2: Pain and symptom management. Effective February 22, 2017. https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/bc-guidelines/palliative-pain-management. Opioid selection table, renal failure row: preferred "fentanyl transdermal or methadone", avoid "morphine, codeine, meperidine". Footnote: "Morphine is the least preferred in renal failure because of renally cleared active metabolites." For opioid-naive patients: "low dose morphine, hydromorphone or oxycodone". The dyspnea section's drug table gives hydromorphone injection "0.25-0.5 mg SC q4h" and, for crisis dyspnea, morphine "5 mg IV/SC q5-10 min".
- BC Centre for Palliative Care. B.C. inter-professional palliative symptom management guidelines. Dyspnea. 2017 (the current q3 source): "Opioid naïve: use morphine 5 mg SC or IV bolus every 5 to 10 minutes." It says nothing about renal failure. It also says "Use benzodiazepines only as a second or third line agent", which supports the lorazepam and midazolam distractor reasons.

**Proposal: EDIT (q3 options, key, explanation, source, sources). KEY CHANGE: morphine 2.5 mg SC (index 3) becomes hydromorphone 0.5 mg SC (index 1).** Morphine leaves the option list so that no distractor can be defended.

q3 options
- Before: ["fentanyl 100 mcg IV", "lorazepam 2 mg IV", "midazolam 5 mg IV", "morphine 2.5 mg SC", "salbutamol 5 mg nebulized"], correct 3
- After: ["fentanyl 100 mcg IV", "hydromorphone 0.5 mg SC", "lorazepam 2 mg IV", "midazolam 5 mg IV", "salbutamol 5 mg nebulized"], correct 1

q3 explanation
- Before: "Her breathlessness is now a crisis at the end of life, and the B.C. palliative symptom guideline uses an opioid as the first drug, with morphine given SC or IV and repeated every 5 to 10 minutes until she is comfortable. A reduced starting dose such as 2.5 mg SC suits an opioid naive 89-year-old with stage 4 kidney disease, in whom morphine metabolites can accumulate, so repeat doses should be watched. Fentanyl 100 mcg IV is a large first dose for someone who has never had opioids. The guideline keeps benzodiazepines as an addition for anxiety or a second-line agent, not the sole drug for breathlessness. Salbutamol treats bronchospasm, not edema."
- After: "She has crisis breathlessness after failing full treatment, and she has declined intubation, so relief of breathlessness comes first. An opioid given SC or IV is the first drug, and doses are repeated until she is comfortable. She has stage 4 kidney disease, and morphine is the least preferred opioid in renal failure because its active metabolites build up. Hydromorphone 0.5 mg SC equals about 2.5 mg of morphine SC, half the guideline's morphine crisis dose, which suits an opioid naive 89-year-old. Fentanyl 100 mcg IV is a large first dose for someone who has never had opioids. Benzodiazepines are added for anxiety or used second line, not as the sole drug for breathlessness, and salbutamol treats bronchospasm, not edema."

q3 source
- Before: "bcpal"
- After: "bc-palliative-2017"

sources
- Before: [NIV, BCPAL]
- After: [NIV, BCGUIDE_PALLIATIVE], with a new const `BCGUIDE_PALLIATIVE: Source = { id: "bc-palliative-2017", citation: "BC Ministry of Health, Guidelines and Protocols Advisory Committee. Palliative care for the patient with incurable cancer or advanced disease. Part 2: Pain and symptom management. 2017.", url: "https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/bc-guidelines/palliative-pain-management" }`. No other SAMP cites BCPAL, so the const can be deleted.

Batch balance: s48 single keys by position are now 19.1, 16.2, 19.1, 25.0 and 20.6 percent. Moving this key from position 4 to position 2 gives 19.1, 17.6, 19.1, 23.5 and 20.6 percent, within the 25 percent cap.

**Cueing check.** Option lengths are 19, 23, 17, 17 and 25 characters. Longest to shortest is 1.47 (limit 2.1). The key is 1.18 times the mean distractor length (limit 1.5) and not the longest. Options are alphabetical in lower case, generic names, each with drug, dose, unit and route. The prompt is unchanged. Mock-mode cues on existing text: the q2 update ("After 1 hour of noninvasive ventilation") and two q2 options ("Continue NIV ...", "Transfer to ICU for NIV") give away the q1 key. The q3 update ("Her son agrees with comfort-focused care. The mask is removed.") gives away the q2 key, and "the mask" also points to the q1 key. The writer left both. The optional edit below fixes them without the q2 explanation resting on q1. The update itself states that she had full treatment within her directive.

Optional second edit, mock-mode cues (added by reviewer)

q2 update
- Before: "After 1 hour of noninvasive ventilation, nitroglycerin and furosemide, she opens her eyes only to pain. Her saturation is 82%. Venous gas: pH 7.16, PCO2 74 mmHg. Her son arrives."
- After: "After 1 hour of full treatment within her directive, including nitroglycerin and furosemide, she opens her eyes only to pain. Her saturation is 82%. Venous gas: pH 7.16, PCO2 74 mmHg. Her son arrives."

q2 options
- Before: ["Add dobutamine infusion", "Continue NIV and recheck gas in 2 hours", "Intubate despite her directive", "Shift to comfort-focused care", "Transfer to ICU for NIV"], correct 3
- After: ["Add dobutamine infusion", "Continue care, recheck gas in 2 hours", "Intubate despite her directive", "Shift to comfort-focused care", "Transfer to ICU for ongoing care"], correct 3

q2 explanation
- Before: "She has failed noninvasive ventilation, with falling consciousness, a pH of 7.16 and a PCO2 of 74 mmHg, and she has declined intubation." and "Dobutamine and an ICU transfer for NIV continue a treatment that has already failed at the limit she chose."
- After: "She has failed full treatment within her directive, with falling consciousness, a pH of 7.16 and a PCO2 of 74 mmHg, and she has declined intubation." and "Dobutamine and an ICU transfer only prolong treatment that has already failed at the limit she chose."
(Two separate sentence replacements. The rest of the explanation does not change.)

q3 update
- Before: "Her son agrees with comfort-focused care. The mask is removed. She is gasping and restless. She has not taken opioids before."
- After: "She remains gasping and restless. She has not taken opioids before."

The q3 explanation in the main edit above already rests only on the q2 update and the stem (failed full treatment, declined intubation), so it fits either q3 update. q2 option lengths become 23, 37, 30, 29 and 32 characters. Longest to shortest is 1.61, and the key is 0.95 times the mean distractor length and stays at index 3. The q2 update is 34 words and the q3 update 11. With this edit, the q3 prompt ("relieve her breathlessness") still hints that care has turned to comfort. That hint is mild and cannot be removed without dropping q3.

**Alternative.** NO CHANGE, keeping morphine 2.5 mg SC. The dyspnea guideline above names morphine for crisis dyspnea in the opioid naive. At the end of life, with death expected within hours, a single small dose leaves little time for metabolites to build up. This is defensible, but the explanation's claim that 2.5 mg "suits" stage 4 kidney disease conflicts with the B.C. guideline's renal table.

**Arjan decides:** approve / reject. Optional cue edit: approve / reject

Reviewer: FIXED. Before texts match src. Both BC GPAC Part 2 PDFs were downloaded from gov.bc.ca (identical to the writer's copies). Confirmed: the renal failure row (preferred fentanyl transdermal or methadone, avoid morphine), footnote b, "low dose morphine, hydromorphone or oxycodone" for opioid naive patients, the dyspnea table's hydromorphone "0.25-0.5 mg SC q4h" and morphine "Crisis dyspnea: 5 mg IV/SC q5-10 min", and the effective date of February 22, 2017. The BCCPC quotes were confirmed in the saved text. Dose check: 0.5 mg SC is the top of the B.C. standard opioid-naive range. The table header says elderly or renal patients "may require reduced dosages". By the B.C. equivalence table (morphine 10 mg SC = hydromorphone 2 mg SC), 0.5 mg equals morphine 2.5 mg SC, half the crisis dose. The dose is defensible for crisis dyspnea, but the writer's "a small dose ... suits" was loose. Note that hydromorphone is not on the B.C. preferred list in renal failure (fentanyl transdermal or methadone is). It is only absent from the avoid list. The q3 explanation was rewritten: it states the conversion, drops the "every 5 to 10 minutes" interval (both sources give that for morphine only), and joins two sentences to stay at 6. I also added the optional mock-mode edit for the two cues the writer left. Also for Arjan: the GPAC dyspnea key recommendations say opioids for breathlessness in non-cancer patients need "extreme caution" and probable palliative care consultation. That is reasonable to set aside in an end-of-life crisis, but it is worth knowing.
