### airway-19 (s21)

**Problem.** Triage held this SAMP as a near duplicate of sob-16 in s51. That concern no longer holds. sob-16 has been rebuilt (commit c204579, now version 2). It is now a 71-year-old woman on warfarin with a retropharyngeal hematoma after blunt neck trauma, with PCC reversal. No other SAMP in the bank is an adult supraglottitis case or has hyoid tenderness. A grep of src/samps finds "nasendoscopy" only in a burns-11 (s04) option and "supraglottitis" only as a distractor in sob-25 (s51), a croup case. Triage found the keys and the lidocaine dose correct. Two cues remain for mock mode, where all questions show at once. The q3 update opens with "Nasendoscopy shows ...", which gives away the q2 key ("Flexible nasendoscopy sitting upright"). The q4 update says the lidocaine is "planned for the awake intubation", which gives away the q3 key ("Awake flexible intubation with ENT present").

**Evidence.** Difficult Airway Society guidelines for awake tracheal intubation in adults (Ahmad I, et al. Anaesthesia. 2020): "The maximum dose of lidocaine should not exceed 9 mg.kg-1 lean body weight." 9 x 70 = 630 mg, which matches the q4 key. https://doi.org/10.1111/anae.14904

**Proposal: EDIT (small), then release from HOLD.** The duplicate concern is resolved. The two changes remove the mock-mode cues. No key change.

q3 update
- Before: "Nasendoscopy shows a swollen, red epiglottis and swollen arytenoids, with about half of the airway open. Ceftriaxone 2 g IV and dexamethasone 10 mg IV are given. Anesthesia and otolaryngology are called."
- After: "The epiglottis and arytenoids are confirmed to be swollen, with about half of the airway open. Ceftriaxone 2 g IV and dexamethasone 10 mg IV are given. Anesthesia and otolaryngology are called."

q4 update
- Before: "Airway topical anesthesia with lidocaine is planned for the awake intubation. His estimated lean body weight is 70 kg."
- After: "Topical lidocaine is planned to anesthetize his airway. His estimated lean body weight is 70 kg." (16 words)

**Cue check.** With these changes, no update or option names the q2 method, and no update names the q3 method. Topical airway lidocaine still fits an awake technique, but it is also used with ketamine sedation and with blind nasal intubation, so it does not single out the q3 key. The q2 key and the q3 key both contain "flexible". This is a mild residual overlap and is left as it is. The q3 key ("Awake flexible intubation with ENT present", 42 characters) is the longest option by one character. It is 1.12 times the mean distractor length, within the 1.5 limit, and it is unchanged. The new update is 32 words, within the 10 to 45 word range.

**Arjan decides:** approve / reject

Reviewer: FIXED. Confirmed sob-16 is now version 2 (warfarin, neck trauma) and the before text matches. Opened the DAS guideline (PMC7078877) and confirmed the 9 mg/kg lean body weight quote. Found a second mock-mode cue the writer missed: the q4 update said "planned for the awake intubation", naming the q3 key. Added a q4 update edit. Corrected the grep claim, since "nasendoscopy" appears in burns-11 and "supraglottitis" in sob-25, though neither is an adult supraglottitis case.

---

### arrhythmia-16 (s24)

**Problem.** Triage held this SAMP as a near duplicate of chest-pain-22 in s28. That concern no longer holds. chest-pain-22 has been rebuilt (now version 3) as a 66-year-old Tamil-speaking woman with diabetes and possible ACS described as gas. No other SAMP tests exertional syncope with a murmur manoeuvre. Other SAMPs name hypertrophic cardiomyopathy only as a distractor (s23, s28, s42, s48), and arrhythmia-47 is commotio cordis. Triage found the keys correct.

**Evidence.**
- ACC "Ten points to remember" summary of the 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR hypertrophic cardiomyopathy guideline (Ommen SR, et al. Circulation. 2024). The SCD risk assessment includes "arrhythmogenic syncope". On obstruction: "If the resting gradient is <50 mm Hg, provocative maneuvers (e.g., Valsalva) are recommended." https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/05/06/15/12/2024-hypertrophic-cardiomyopathy-gl . Full guideline: https://doi.org/10.1161/CIR.0000000000001250 . This supports q4: syncope with no other explanation in suspected HCM is a major risk marker.
- q3 manoeuvre. Verified in review. Javadi N, Galazka P, Peters M, Tajik AJ. Squat in obstructive hypertrophic cardiomyopathy. JACC Case Rep. 2026. https://doi.org/10.1016/j.jaccas.2026.106920 (open full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC13008517/). "Valsalva maneuvers and standing reduce preload, resulting in increased LVOT gradient and murmur intensity. Squatting increases preload and afterload, leading to a reduction in LVOT gradient and murmur. Transitioning from squatting to standing causes an abrupt decrease in preload and afterload, with marked augmentation of LVOT gradient and murmur intensity." In both reported patients, Doppler confirmed it: on squat-to-stand the murmur rose to grade IV with a gradient of 97 mm Hg, and to grade IV-V with 112 mm Hg. The same report says auscultation during a squat "is recommended in guidelines". A second open review agrees: "LVOT obstruction can be evaluated by provocative maneuvers such as Valsalva and standing from a squatting position at the bedside" (Diagnostic approach to left ventricular hypertrophy: a review. 2026. https://doi.org/10.15420/usc.2024.65 , PMC13284792). This supports the q3 key and the direction of every distractor reason (squat, leg raise and head-down tilt raise preload, handgrip raises afterload). The full 2024 AHA/ACC guideline text (the q3 source "hcm") could not be opened (403), so it is still not confirmed that the guideline itself names squat-to-stand. The ACC summary names only Valsalva.

**Proposal: NO CHANGE, release from HOLD.** The duplicate partner is gone and the keys are sound.

**Cue check.** The q2 update gives the ECG but does not name the diagnosis. The q3 prompt does not name HCM. The q4 key ("Admission with monitoring and cardiology review", 47 characters) is the longest option. It is 1.21 times the mean distractor length, within the 1.5 limit.

**Note for Arjan (not a change).** Lens B flagged the q3 key feature mapping (murmur manoeuvre mapped to arrhythmia key feature 1) as loose. It is left as it is.

**Arjan decides:** approve / reject

Reviewer: SOUND. Confirmed chest-pain-22 is now version 3 (the Tamil-speaking woman) and arrhythmia-47 is not an HCM case. Opened the ACC summary and confirmed both quotes. Verified the q3 squat-to-stand direction, which was unverified, against the open full text of the JACC Case Reports paper (PMC13008517) and a second open review. The evidence bullet now quotes them. The q4 length ratio (1.21) recomputes. If Arjan wants the q3 citation to be one he can open, the Javadi 2026 case report could be added as a third source for q3. It is not proposed here.

---

### burns-38 (s26)

**Problem.** Triage flagged a possible copy of burns-01 (s04). Both are men pulled from a basement fire, and both teach the same inhalation markers. The overlap is confined to q1. burns-01 is a signed-off write-in SAMP (s04) that is kept out of mock exams. It shows a 30% TBSA burn with facial burns and a hoarse voice, and its decision is to intubate now. burns-38 is the opposite case: 2% TBSA, no facial burn, a normal voice, and a raised carboxyhemoglobin. Its decisions are bedside nasolaryngoscopy rather than intubation (q2), normobaric oxygen rather than hyperbaric oxygen (q3), and burn centre referral (q4). As a pair they teach when to intubate and when to look first. One defect was found. In mock mode, the q4 update ("Nasolaryngoscopy shows soot ...") gives away the q2 key ("Nasolaryngoscopy at the bedside").

**Evidence.** American Burn Association. Guidelines for burn patient referral (2022, on the current ABA page). In the inhalation injury row, the "Immediate Consultation with Consideration for Transfer" column reads "All patients with suspected inhalation injury". The "Consultation Recommendation" column reads "Patients with signs of potential inhalation such as facial flash burns, singed facial hairs, or smoke exposure." (The page carries a 2025 copyright, which matches the SAMP citation year.) https://www.ameriburn.org/burn-care-team/resources/guidelines-for-burn-patient-referral . This supports the q4 key without the scope result, so the scope finding can come out of the update. q3 hyperbaric thresholds, checked in review. The Hampson NB, et al. paper (Am J Respir Crit Care Med. 2012, https://doi.org/10.1164/rccm.201207-1284CI) is paywalled and could not be opened (403 at ATS and Oxford Academic). Its recommendation is quoted verbatim, with Hampson 2012 as the cited reference, in Rose JJ, et al. Carbon monoxide poisoning: pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017 (open full text https://pmc.ncbi.nlm.nih.gov/articles/PMC5363978/): "HBO2 should be considered for all cases of serious acute CO poisoning, including loss of consciousness, ischemic cardiac changes, neurological deficits, significant metabolic acidosis, or COHb greater than 25%". This matches the five markers in the q3 explanation, and he has none of them. The same review lists age of 36 or older and exposure of 24 hours or longer as risk factors for 6-week cognitive impairment, not as HBO criteria. He is 62, which a hyperbaric physician may weigh, but the key follows the Hampson criteria.

**Proposal: EDIT. Keep both SAMPs.** Remove the nasolaryngoscopy result from the q4 update and anchor q4 on the stem findings. No key change.

q4 update
- Before: "Nasolaryngoscopy shows soot in the pharynx and on the epiglottis with no edema."
- After: "Two hours later his voice is still normal and he has no stridor."

q4 explanation
- Before: "Soot in the pharynx confirms smoke inhalation, and the American Burn Association advises burn centre consultation with consideration of transfer for every suspected inhalation injury, because airway edema and lower airway injury can worsen over the next 24 to 48 hours. A general ward lacks airway and burn expertise. Discharge once the carboxyhemoglobin falls, discharge with clinic review or a 6 hour stay all end monitoring too early."
- After: "Soot in the nostrils, carbonaceous sputum and a raised carboxyhemoglobin after an enclosed space fire make this a suspected inhalation injury. The American Burn Association advises immediate burn centre consultation, with consideration of transfer, for every patient with suspected inhalation injury. Airway edema and lower airway injury can worsen over the next 24 to 48 hours, so a normal voice at 2 hours does not end the risk. A general ward lacks airway and burn expertise. Discharge once the carboxyhemoglobin falls, discharge with clinic review or a 6 hour stay all end monitoring too early."

**Cue check.** No later update now names the q2 method. The q4 update is 13 words. The q4 key ("Refer to the burn centre for admission", 38 characters) is not the longest option ("Discharge after a normal carboxyhemoglobin" is 42).

**Arjan decides:** approve / reject

Reviewer: FIXED (evidence text only, the edit itself is unchanged). Before texts match. Opened the ABA page. Its two inhalation quotes sit in different columns, and the writer had put both under immediate consultation. That is now corrected. The first quote alone supports the q4 key. Verified the q3 Hampson thresholds, which were unverified, through a verbatim secondary quote in Rose 2017 (PMC5363978). The primary paper is paywalled. Noted that his age (62) is a Weaver risk factor for cognitive sequelae, though not a Hampson criterion. Fixed the q4 update word count (13, not 14). The key lengths recompute (38 against 42).

---

### loc-25 (s32)

**Problem.** In q2 (osmolal gap) and q3 (fomepizole 15 mg/kg), triage found the same skills as signed-off tox-06 (s18). The overlap is real but narrow. tox-06 is ethylene glycol and sits in a write-in batch that is kept out of mock exams. Its q1 is a single best answer osmolal gap calculation, and q2 to q5 are write-in. Its teaching is oxalate crystals, the ethanol term in the calculated osmolality, glycolate dialysis criteria and the pyridoxine and thiamine adjuncts. loc-25 is methanol under the LOC topic. Its new teaching is that an undetectable ethanol excludes intoxication (q1), methanol vision and the EXTRIP methanol criteria (q4). The osmolal gap and the fomepizole load are core toxic alcohol skills that deserve repetition across topics. The writer brief bars repeating an existing SAMP's teaching within the same topic, and tox-06 is a different topic. The numbers recompute: 2 x 138 + 6.0 + 5.0 = 287, 318 - 287 = 31 mmol/kg, anion gap 138 - (100 + 6) = 32 mmol/L, fomepizole 15 x 70 = 1050 mg. A related bank item is multiple-patients-35 (s44), a methanol mass casualty case. It tests triage, calls and who gets fomepizole, not the gap or the dose.

**Evidence.** Roberts DM, et al. EXTRIP recommendations for extracorporeal treatment in acute methanol poisoning. Crit Care Med. 2015. Indications for extracorporeal treatment in severe poisoning include "coma, seizures, new vision deficits, metabolic acidosis with blood pH ≤7.15 ... or serum anion gap higher than 24 mmol/L". https://doi.org/10.1097/CCM.0000000000000708 . This matches the q4 key (blurred vision, pH 7.02, anion gap 32).

**Proposal: NO CHANGE, keep both, release from HOLD.** The repeated skills are standard and appear in a different toxin, topic and format. The methanol-specific teaching is new.

**Cue check.** The q1 option "Raised serum osmolal gap" says the gap is raised but does not give its value, so it does not answer q2. The q4 options list findings only and do not name the antidote.

**Arjan decides:** approve / reject

Reviewer: FIXED (problem text only). No SAMP edit. Opened the EXTRIP methanol abstract (PMID 25493973) and confirmed the quote: coma, seizures, new vision deficits, pH of 7.15 or lower, anion gap above 24 mmol/L. Recomputed 287, 31, 32 and 1050 mg. Read tox-06. It confirms ethylene glycol (oxalate crystals, antifreeze), the ethanol term, glycolate criteria and the pyridoxine and thiamine adjuncts. One correction to the problem text: tox-06 q1 is a single best answer question, not write-in. The overlap stays narrow and the release is reasonable. The keep-both decision is Arjan's.

---

### eye-21 (s37)

**Problem.** q2 keys "Stop them and refer to ophthalmology" for tobramycin and dexamethasone drops used for 3 weeks. The stem gives subepithelial opacities, left acuity of 20/50 and pressures of 31 and 38 mmHg. Current ophthalmology guidance says topical steroids given for adenoviral subepithelial infiltrates should be tapered slowly, not stopped, and names loteprednol as a lower pressure option. So the keyed "stop" is not the standard, and the loteprednol distractor is partly defensible. Stopping, tapering and switching are decisions for the ophthalmologist. What belongs to the emergency physician is the urgency of that review.

**Evidence.** American Academy of Ophthalmology. Conjunctivitis Preferred Practice Pattern (Cheung AY, et al. Ophthalmology. 2024), adenoviral section: "Topical corticosteroids should be tapered once inflammation is controlled." And: "Patients who are being treated with topical corticosteroids should have the dosage slowly tapered to the minimum effective dose. Corticosteroids with poor ocular penetration, including fluorometholone or site-specific corticosteroids such as loteprednol, may be less likely to result in elevated IOP or cataract formation." PDF: https://www.aao.org/Assets/76c4baa7-869e-42ad-9ffc-215781185a7b/638434228319430000/conjunctivitis-ppp-pdf . The source aao-conj is already in this SAMP's sources.

**Proposal: EDIT q2. KEY CHANGE.** The question now tests the emergency department plan: timely ophthalmology review, with the steroid decision left to the specialist. Key moves from index 3 to index 2.

q2 prompt
- Before: "Which of the following is the most appropriate plan for his tobramycin and dexamethasone drops?"
- After: "Which of the following is the most appropriate plan for this patient?" (12 words. The reviewer changed this from "for his drops and his follow-up", because the key names no drop plan and the prompt then asked for something the key does not give.)

q2 options
- Before: ["Add latanoprost and continue the drops", "Continue them with a 3-month recheck", "Replace them with loteprednol drops", "Stop them and refer to ophthalmology", "Switch to moxifloxacin drops alone"], correct: 3
- After: ["Add latanoprost and continue the drops", "Continue the drops with a 3-month recheck", "Ophthalmology review within 24 hours", "Stop the drops and see his family physician", "Switch to loteprednol and recheck in 1 month"], correct: 2

q2 explanation
- Before: "The steroid is the cause of the pressure rise, and the pressure usually falls over weeks once it is stopped. Ophthalmology should see him within 1 to 2 days to check the optic nerves, decide on pressure lowering drops and follow the corneal opacities, which can flare once the steroid is withdrawn. Loteprednol still carries a steroid pressure risk. Adding latanoprost treats the number but keeps the cause. Waiting 3 months risks optic nerve damage. He has no bacterial infection that needs moxifloxacin."
- After: "A pressure of 38 mmHg with reduced vision in the left eye needs an ophthalmologist within 24 hours to examine the optic nerve and lower the pressure if needed. The ophthalmologist also decides how to withdraw the dexamethasone. The American Academy of Ophthalmology advises that steroids used for subepithelial infiltrates be tapered slowly to the minimum effective dose, with regular pressure checks. Stopping the drops with family physician follow-up skips that taper and leaves a pressure of 38 mmHg without specialist review. Loteprednol may carry a lower pressure risk, but a 1-month recheck leaves the pressure unwatched. Adding latanoprost treats the pressure but keeps full strength dexamethasone going with no specialist review, and waiting 3 months risks optic nerve damage."

q2 source
- Before: "steroid-iop"
- After: "aao-conj" (steroid-iop stays cited by q1)

**Checks.** Options are alphabetical. They run 36 to 44 characters (ratio 1.22). The key is 36 characters against a distractor mean of 41.5 (0.87), so it is the shortest option, not the longest. No absolute words are used. Batch s37 single-key positions go from [16, 15, 17, 15, 14] to [16, 15, 18, 14, 14] of 77, which puts 23.4% in the top position, under the 25% limit. keyFeature is unchanged (eye 4).

**Cue check.** The q1 update and key point to a steroid response but do not name a plan or a follow-up interval. The q3 options cover first-visit treatment and share no wording with the new q2 options.

**Alternative.** Keep the original shape but make the steroid decision explicit: key "Taper the steroid and refer to ophthalmology". The same AAO source supports it. This option was not chosen because it asks the emergency physician to set a taper that the ophthalmologist would set, and "Switch to loteprednol" stays close to defensible.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match. Opened the AAO PPP (2023 text, in scratchpad conj.txt) and confirmed both quotes. Recomputed the option lengths (36 to 44, key 0.87 of the distractor mean) and the s37 positions ([16, 15, 17, 15, 14] becomes [16, 15, 18, 14, 14], 23.4%). Three changes to the proposal. (1) The explanation said latanoprost leaves "no plan for the pressure", which is false, since latanoprost lowers the pressure. It is reworded. (2) The explanation said the AAO advises tapering "because the infiltrates can flare when a steroid is withdrawn". The AAO text gives no such reason, so the clause is removed. "Carries a lower pressure risk" is softened to "may carry", as in the source. (3) The prompt asked for a plan for "his drops and his follow-up", but the key names only follow-up. It is now a neutral prompt. Note for Arjan: "within 24 hours" is clinical judgment for a pressure of 38 mmHg. Neither cited source states a time frame, and the original said 1 to 2 days. The steroid-iop find string occurs 4 times in eye.ts, so change it only in eye-21 q2.

---

### lacerations-28 (s43)

**Problem.** q2 keys "Repair with absorbable sutures" for a 2.5 cm full thickness lateral tongue laceration that gapes on movement and oozes slowly. The only support is Roberts and Hedges. The Canadian systematic review this SAMP cites in q3 found that the traditional repair indications are inconsistent and that tongue lacerations heal well either way. It reports a gaping case that healed well without repair. So "Healing without repair" is also defensible, and the item is not single best answer. One more defect affects mock mode. The q3 update ("The laceration is repaired under procedural sedation"), the q3 prompt ("after this repair") and the q3 key ("No antibiotics after repair") all give away the q2 key.

**Evidence.** Gonsalves CL, Zhu JW, Kim GY, Leveille CF, Kam AJ. Surgical versus conservative management of tongue lacerations in the acute care setting: a systematic review. Paediatr Child Health. 2022. https://doi.org/10.1093/pch/pxab044 (full text https://pmc.ncbi.nlm.nih.gov/articles/PMC8900692/). "Historical teaching has recommended repair of tongue lacerations with sutures for wounds involving the lateral borders, having a large flap or gap at rest, length greater than 2 cm, and those without hemostatic control." And: "Current literature is inconsistent with regards to indications and guidelines for primary repair of tongue lacerations." And: "one case of a paediatric tongue laceration that met criteria for primary repair ... as it was gaping at rest but was treated conservatively with excellent outcomes".

**Proposal: EDIT.** Keep the key but make the wound one that needs repair by any standard: a flap that gaps at rest and bleeding that pressure does not control. Then rest q2 on Gonsalves rather than the textbook, and remove the repair cue from q3. No key change.

Stem, second paragraph
- Before: "There is a 2.5 cm full thickness laceration on the lateral border of the tongue that gapes when he moves his tongue. It oozes slowly. His teeth are intact and he opens his mouth normally. The neurological examination is normal."
- After: "There is a 2.5 cm full thickness laceration on the lateral border of the tongue. It gapes at rest, with a flap on its lower edge. It is still bleeding after 10 minutes of firm pressure with gauze. His teeth are intact and he opens his mouth normally. The neurological examination is normal."
(The stem is now 114 words.)

q2 explanation
- Before: "Many small tongue lacerations heal well without repair, but a full thickness wound, a gaping wound longer than about 1 to 2 cm, a flap or persistent bleeding is repaired, usually with absorbable sutures that do not need removal. This wound is full thickness and gapes. Nylon sutures would need removal from a small child's tongue. Tissue adhesive does not hold on a wet, mobile surface. Silver nitrate treats small bleeding points, not a gaping full thickness wound."
- After: "This wound is still bleeding after 10 minutes of firm pressure, and it gapes at rest with a flap. Bleeding that pressure does not control needs sutures, and the flap and gap add to the case for repair. Absorbable sutures are used because they do not need removal from a small child's tongue. A systematic review found that most tongue lacerations heal well with or without sutures, so healing without repair suits a small wound that has stopped bleeding, not this one. Nylon would need removal, tissue adhesive does not hold on a wet and mobile surface, and silver nitrate treats only small bleeding points."

q2 source
- Before: "rh-ch35"
- After: "gonsalves-tongue"

sources array
- Before: [S.gonsalves, S.benbadis, S.rhCh35]
- After: [S.gonsalves, S.benbadis] (rh-ch35 is no longer cited in this SAMP. The constant stays in the file for other SAMPs.)

q3 update
- Before: "The laceration is repaired under procedural sedation. His mother asks about antibiotics."
- After: "His mother asks whether he needs antibiotics for the tongue wound." (11 words)

q3 prompt
- Before: "Which of the following is the most appropriate antibiotic plan after this repair?"
- After: "Which of the following is the most appropriate antibiotic plan for this tongue wound?" (14 words)

q3 option 4
- Before: "No antibiotics after repair"
- After: "No antibiotics" (still last. Key index stays 4.)

q3 explanation: unchanged. It does not mention the repair.

**Cue check.** No update, prompt or option now names the q2 management. The persistent bleeding adds mild appeal to the q1 distractor "Any history of easy bruising". The q1 explanation already gives a true reason against it: it does not explain the drowsiness or the lateral bite. The q2 key ("Repair with absorbable sutures", 30 characters) is not the longest option ("Nylon sutures through the tongue" is 32). It is 1.14 times the distractor mean. The options are unchanged.

**Arjan decides:** approve / reject

Reviewer: SOUND. Before texts match. Opened Gonsalves 2022 (PMC8900692) and confirmed all three quotes. The historical indications include wounds "without hemostatic control", and the gaping-at-rest case that healed without repair is why the edit rests the key on bleeding that pressure does not control, not on the gap. The new stem is 114 words. simcheck shows no near copy (top match lacerations-21 at 0.21). The q2 and q3 option ratios recompute (1.14, and "No antibiotics" is last and excluded). Apply note: "rh-ch35" occurs 6 times in lacerations.ts, so change the source id only in lacerations-28 q2.

---

### seizures-30 (s49)

**Problem.** q2 keys "Observation with EEG if available" over lorazepam, fosphenytoin or intubation after about 30 minutes of generalized events. The patient is a woman taking levetiracetam who has had IM midazolam 10 mg. The key rests on bedside features, and its only cited support is a textbook (Rosen's chapter 88). The stem already shows the three interactive signs that the literature treats as near specific for a nonepileptic event: she resists eye opening, her pupils react, and the movements change when her name is called. She also has regular breathing and an O2 sat of 99% at 30 minutes. So the key is defensible, but it needs a primary source that says so. In mock mode, the q3 update ("The event stops after 10 more minutes") hints that nothing more was given.

**Evidence.** Jungilligens J, Michaelis R, Popkirov S. Misdiagnosis of prolonged psychogenic non-epileptic seizures as status epilepticus: epidemiology and associated risks. J Neurol Neurosurg Psychiatry. 2021. https://doi.org/10.1136/jnnp-2021-326443 (https://pmc.ncbi.nlm.nih.gov/articles/PMC8606439/). "Among 980 patients aged 8 years or older diagnosed and treated for status epilepticus in RAMPART and ESETT, 79 (8.1%) were discharged with a final diagnosis of pPNES." "Adverse effects, including respiratory depression and intubation, were documented in 26% of patients with pPNES receiving benzodiazepines in RAMPART and 33% of patients receiving additional second-line medication in ESETT." Interactive responsivity ("resistance to eye-opening, preservation of pupillary and eyelash reflexes, change in seizure intensity in response to others") offers "near-absolute specificity for PNES."

**Proposal: EDIT (source and explanation). No key change.** Rest q2 on Jungilligens 2021 in place of Rosen's. Tie the explanation to the three interactive signs. Soften the q3 cue.

New source constant (add to S in src/samps/s49/seizures.ts)
- `jungilligens: { id: "jungilligens-2021", citation: "Jungilligens J, Michaelis R, Popkirov S. Misdiagnosis of prolonged psychogenic non-epileptic seizures as status epilepticus: epidemiology and associated risks. J Neurol Neurosurg Psychiatry. 2021.", url: "https://doi.org/10.1136/jnnp-2021-326443" }`

q2 source
- Before: "rosen-ch88"
- After: "jungilligens-2021"

sources array
- Before: [S.lafrance, S.rosen88]
- After: [S.lafrance, S.jungilligens] (S.rosen88 is still used by another SAMP in the file.)

q2 explanation
- Before: "After 30 minutes of generalized movements she still has regular breathing, an O2 sat of 99% and reactive pupils, she reacts to her name, and the features point to a nonepileptic event. Generalized epileptic convulsions of this length often cause desaturation or cyanosis. Repeated benzodiazepines, loading doses and intubation expose patients with nonepileptic events to real harm, so supportive observation is appropriate. EEG during an event is the best test when there is doubt, and escalation is resumed if it shows seizure activity or her condition changes. Painful or noxious stimuli are unhelpful and damage trust."
- After: "She resists eye opening, her pupils react and her movements pause when her name is called. These signs of interaction are close to fully specific for a nonepileptic event. After 30 minutes she still breathes regularly with an O2 sat of 99%, while generalized epileptic convulsions of this length often cause desaturation or cyanosis. In two large status epilepticus trials, about 1 in 12 patients had nonepileptic events, and a quarter to a third of those given benzodiazepines or second line drugs had adverse effects such as respiratory depression or intubation. Observation is appropriate, with EEG during an event if doubt remains, and treatment escalates if EEG shows seizure activity or her condition changes. Sternal rub and ammonia capsules are unhelpful and damage trust."

q3 update
- Before: "The event stops after 10 more minutes. She is alert and asks what is happening to her."
- After: "The event stops. Soon after, she is alert and asks what is happening to her."

**Cue check.** The q3 update still shows that the event ended, which cannot be avoided in a sequential case. It no longer implies a further stretch of time with no treatment. The q2 key ("Observation with EEG if available", 33 characters) is the longest option by one character. It is 1.22 times the distractor mean, within 1.5. No option wording changes.

**Alternative (a genuine second standard). KEY CHANGE.** Treat the event as convulsive status until EEG proves otherwise. Key "Fosphenytoin 1 280 mg PE IV" (20 mg PE/kg x 64 kg), index 0. Source: Glauser T, et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. American Epilepsy Society. Epilepsy Curr. 2016. https://doi.org/10.5698/1535-7597-16.1.48 . "The second-therapy phase should begin when the seizure duration reaches 20 minutes and should conclude by the 40-minute mark". Also: "Initial therapies should not be given twice except for IV lorazepam and diazepam that can be repeated at full doses once". Under this standard, q1 and q3 would need rewording, because the case would no longer teach the recognition of a nonepileptic event. The primary proposal is preferred because the stem shows all three near specific signs and normal oxygenation.

**Arjan decides:** approve / reject

Reviewer: FIXED. Before texts match. Opened Jungilligens 2021 (PMC8606439) and confirmed the 8.1%, 26% and 33% figures and the "near-absolute specificity" quote. The source says "Adverse effects, including respiratory depression and intubation", not that all of those patients had respiratory depression or intubation. The explanation sentence now reads "had adverse effects such as respiratory depression or intubation". Opened Glauser 2016 (PMC4749120) and confirmed both alternative quotes. 20 x 64 = 1 280 mg PE. Apply note: "rosen-ch88" occurs 4 times in seizures.ts, so change the source id only in seizures-30 q2. Keep the S.rosen88 constant.
