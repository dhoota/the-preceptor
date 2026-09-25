### airway-24 (s21)

**Problem.** Triage held this as a near duplicate of sob-21 in s51, which was a myasthenic crisis after ciprofloxacin. That duplicate no longer exists. sob-21 in `src/samps/s51/sob.ts` is now "Fever and breathlessness at 31 weeks", an influenza case in pregnancy (rebuilt in commit c204579, "SAMPs s51: rebuild 22 duplicate SAMPs as new cases"). A search of `src/samps` for "myasthen" finds no other myasthenic crisis SAMP. The only hits are a write-in differential list in s17 sob, a distractor in s37 eye and a passing mention in s48. airway-24 is now the only myasthenic crisis case in the bank.

**Evidence.** The keys still hold against a current source.
- Wendell LC, Levine JM. Myasthenic crisis. The Neurohospitalist. 2011. https://doi.org/10.1177/1941875210382918 (PMC3726100).
  - q1: "A VC less than 1 L (or <20-25 mL/kg) or an NIF <20 cm H2O indicates significant respiratory weakness." Her FVC is 1100 / 70 = 15.7 mL/kg.
  - q3: "Nondepolarizing agents (for example, vecuronium) have increased potency, and reduced doses are required for paralysis."
  - q2: the review notes that NIV can prevent intubation in some patients. It also lists nasal speech and dysphagia as signs of bulbar weakness, and it notes that bulbar weakness causes upper airway obstruction. Among the five options, only the swallowing and cough weakness makes a mask unsafe. None of the other options is defensible.
- Blichfeldt-Lauridsen L, Hansen BD. Acta Anaesthesiol Scand. 2012. https://doi.org/10.1111/j.1399-6576.2011.02558.x. This is the cited source. It says neuromuscular blockers "should be in smaller doses and the patient should be carefully monitored."

**Proposal: NO CHANGE, release from HOLD.** The duplicate partner was rebuilt on a different topic, so no pair remains to choose between. The keys are correct.

Cueing check in mock mode: the q1 prompt and the q2 and q3 updates all point toward intubation. But the q1 prompt already asks what supports intubating her now, so no key is given away. No key is the longest option. No option is hedged.

Arjan decides: approve / reject

Reviewer: FIXED. Verdict holds. sob-21 is the influenza case and "myasthen" appears nowhere else as a case. I checked the Wendell quotes (VC under 1 L or 20 to 25 mL/kg, "increased potency", NIV "may be used to prevent intubation", bulbar signs and upper airway obstruction) and the Blichfeldt-Lauridsen abstract ("smaller doses ... carefully monitored") against the sources. The one fix: the proposal named commit 51eff54 as the sob-21 rebuild. That commit rebuilt a different airway SAMP, an anaphylaxis case, in s21. The s51 rebuild is c204579. Note that q1 and q2 cite Walls chapters I could not open. Wendell is supporting evidence here, not a proposed citation.

### arrhythmia-20 (s24)

**Problem.** Triage held this as a near duplicate of shock-36 in s50, which was a BRASH case. That duplicate no longer exists. shock-36 is now "Fever days after a cancer treatment", a CAR T cell cytokine release case. A search of `src/samps` for "BRASH" finds only arrhythmia-20. It is now the bank's only BRASH case.

**Evidence.** Farkas JD, Long B, Koyfman A, Menson K. BRASH syndrome: bradycardia, renal failure, AV blockade, shock, and hyperkalemia. J Emerg Med. 2020. https://doi.org/10.1016/j.jemermed.2020.05.001 (PMID 32565167).
- q2: "BRASH syndrome is initiated by synergistic bradycardia due to the combination of hyperkalemia and medications that block the atrioventricular (AV) node. The most common precipitant is hypovolemia or medications promoting hyperkalemia or renal injury."
- q3: "management of bradycardia (which may necessitate epinephrine infusion)."
- q4: holding metoprolol, ramipril and spironolactone follows from the same mechanism.

**Proposal: NO CHANGE, release from HOLD.** The keys are correct and the duplicate partner is gone.

Cueing check in mock mode: the q3 update names calcium gluconate, which hints at hyperkalemia for q2. The cue adds nothing, because the stem already gives potassium 6.2 mmol/L and peaked T waves. No key is the longest option. No option is hedged.

Housekeeping, not a content change: the `brash` source has no `url`. Arjan may add `url: "https://doi.org/10.1016/j.jemermed.2020.05.001"`.

Arjan decides: approve / reject

Reviewer: SOUND. shock-36 is now the CAR T case, and "BRASH" appears only in s24 arrhythmia. Both Farkas quotes match the abstract (PMID 32565167), and the DOI resolves to it in Europe PMC. The q1 to q4 keys are single best answers. No other option in q1 fits a regular narrow rhythm at 36 with no P waves.

### chest-pain-24 (s28)

**Problem.** Triage kept this as the earlier copy of a pair with sob-38 in s51. sob-38 has since been rebuilt as pembrolizumab pneumonitis ("Breathless during cancer treatment"). No other adult acute chest syndrome SAMP remains in the bank. The other HbSS cases are fever in a child (s41), stroke (s27), sequestration (s50) and a pain crisis (s02). So the duplicate question is closed.

One real defect remains. In the q3 explanation, the line "Steroids are linked to rebound pain crises" is not in the cited NHLBI report (lens A, `docs/reviews/samps-s28-lensA.md` line 60). Every other claim checks against the report.

**Evidence.** National Heart, Lung, and Blood Institute. Evidence-Based Management of Sickle Cell Disease. Expert Panel Report. 2014. https://www.nhlbi.nih.gov/sites/default/files/media/docs/sickle-cell-disease-report%20020816_0.pdf. The JAMA summary (Yawn 2014) is the cited source.
- "Treat people with SCD who have ACS with an intravenous cephalosporin, an oral macrolide antibiotic, supplemental oxygen (to maintain oxygen saturation of greater than 95 percent)" (Strong).
- "give simple blood transfusion (10 mL/kg red blood cells) ... to people with symptomatic ACS whose hemoglobin concentration is >1.0 g/dL below baseline." Her drop is 85 minus 68 = 17 g/L.
- "perform urgent exchange transfusion ... when there is rapid progression of ACS as manifested by oxygen saturation below 90 percent despite supplemental oxygen." This supports the q4 key.
- On steroids: "The therapeutic role of corticosteroids and other anti-inflammatory agents is uncertain and requires further study." The largest observational study found "a significant increase in the length of hospitalization in people who received corticosteroids as part of their ACS management."
- For reference only, not proposed as a citation: Lopinto J et al. Haematologica. 2022. https://doi.org/10.3324/haematol.2021.280105. This meta-analysis found that corticosteroids increased readmission (pooled OR 3.21).

**Proposal: EDIT, q3 explanation only. No key change.** The new sentence traces to the cited NHLBI report.

Before:
> The expert panel recommends an IV cephalosporin with an oral macrolide, incentive spirometry and oxygen for saturation below 95%. Her hemoglobin has fallen 17 g/L below baseline, which exceeds the 10 g/L drop at which simple transfusion is recommended. Large fluid boluses can cause pulmonary edema and worsen the syndrome. Steroids are linked to rebound pain crises. She has no indication for anticoagulation or diuresis.

After:
> The expert panel recommends an IV cephalosporin with an oral macrolide, incentive spirometry and oxygen for saturation below 95%. Her hemoglobin has fallen 17 g/L below baseline, which exceeds the 10 g/L drop at which simple transfusion is recommended. Large fluid boluses can cause pulmonary edema and worsen the syndrome. The panel judges the role of corticosteroids uncertain, and a large study linked them to longer hospital stays. She has no indication for anticoagulation or diuresis.

Cueing check in mock mode: the q1 update gives the infiltrate and hemoglobin but does not name the diagnosis. The q2 prompt says "this complication" without naming it. The q4 prompt names exchange transfusion, which does not settle the q3 menu. The q4 key "Oxygen saturation under 90% on oxygen" is still the longest option at 1.47 times the mean distractor. That is under the 1.5 limit, and the qualifier is essential.

Arjan decides: approve / reject

Reviewer: SOUND. I matched every NHLBI quote against the report text, including the corticosteroid lines. "Rebound" does not appear anywhere in the report. Her baseline of 85 g/L is below the report's 9 g/dL cut, above which simple transfusion "may not be required", so the transfusion key holds. The new sentence has no dash or semicolon and is shorter than the one it replaces. The phrase "acute chest syndrome" appears nowhere else in src/samps. The q4 ratio is 37 / 25.25 = 1.47.

### loc-37 (s32)

**Problem.** Triage raised two concerns.
1. Teaching overlap with signed-off write-ins. ems-08 (s09) is an epidural hematoma with mannitol 1 g/kg and dexamethasone and labetalol distractors. multiple-trauma-12 (s14) tests the TBI systolic target.
2. The mannitol dose rests on the ENLS protocol.

Both write-ins are s09 and s14 write-in SAMPs. The app keeps write-ins out of mock exams, so they never appear beside loc-37. Their stems and settings also differ. ems-08 is a rural transfer after a fall on ice. multiple-trauma-12 is a 55-year-old with abdominal bleeding. loc-37 tests GCS scoring, the airway decision, herniation therapy and the age 15 to 49 target. The overlap is a shared teaching point, not a duplicate.

Reading the current text turned up a real defect that triage did not flag. In mock mode, two updates give away earlier keys. The q3 update opens "He is intubated", which answers q2 (rapid sequence intubation). The q4 update opens "After mannitol", which answers q3 (mannitol 80 g IV).

**Evidence.**
- Neurocritical Care Society. ENLS Intracranial Hypertension and Herniation Protocol, version 6.0. 2024. The PDF is at the URL already cited. It says "Mannitol is administered as 0.5-1 g/kg IV bolus" and "Mannitol or hypertonic saline (HTS) have shown equivalent efficacy." On steroids it says "should otherwise be avoided." The keyed 80 g is 1 g/kg for 80 kg. That is inside every current range: ENLS 0.5 to 1 g/kg, and SIBICC 2019 and BTF 3rd edition 0.25 to 1 g/kg. So the key does not depend on which reference is used. Hypertonic saline is not offered, so no second option is correct. No Canadian guideline gives a dose, and the ENLS source is adequate.
- Carney N et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th edition. Neurosurgery. 2017. https://doi.org/10.1227/NEU.0000000000001432. It says "Maintaining SBP at ≥100 mm Hg for patients 50 to 69 years old or at ≥110 mm Hg or above for patients 15 to 49 or over 70 years old may be considered." This supports the q4 key of at least 110 mmHg for a 34-year-old.

**Proposal: EDIT, the q3 and q4 updates only. No key change.** Keep the scenario, and accept the overlap with the write-ins.

q3 update. Before:
> He is intubated. CT shows a large right epidural hematoma, and neurosurgery is on the way. His right pupil is now 6 mm and fixed.

After (22 words):
> CT shows a large right epidural hematoma, and neurosurgery is on the way. His right pupil is now 6 mm and fixed.

q4 update. Before:
> After mannitol, and while he waits for the operating room, his BP is 98/58 mmHg.

After (13 words):
> While he waits for the operating room, his BP falls to 98/58 mmHg.

No explanation relies on the removed words. The q3 explanation cites the fixed pupil, bradycardia and hypertension, and all of these stay.

Cueing check in mock mode after the edit: no update names an earlier key. The q1 options are GCS totals and do not cue the other questions. No key is the longest option.

Alternative: if Arjan wants less overlap with ems-08, replace the q3 dexamethasone and labetalol distractors, for example with "phenytoin 20 mg/kg IV". Do not add hypertonic saline as a distractor. ENLS rates it as equal to mannitol, so it would make two options correct. This alternative is not recommended, because the write-ins never share a mock exam with loc-37. Source: ENLS v6.0 as above.

Arjan decides: approve / reject

Reviewer: FIXED. Both "Before" updates match src/samps/s32/loc.ts exactly. I checked the ENLS v6.0 PDF, last updated September 2024, for all three quotes. The mannitol key of 80 g at 80 kg holds. The q3 and q4 updates have no other role in the explanations, so removing the cue words is safe. The one fix is to the alternative. It offered hypertonic saline as a replacement distractor "which would then need a new key". That would create two correct answers, so I removed it. I could not open the BTF 4th edition full text, and the SBP quote is taken from the proposal.

### first-trimester-bleeding-27 (s38)

**Problem.** Triage asked whether this should stay beside first-trimester-bleeding-10 (s10). Both end with an empty uterus, an hCG near 1400 to 1850 IU/L and serial hCG as a possible ectopic. The current texts differ in scenario and in most decisions.

first-trimester-bleeding-10:
- write-in (s10), so it is never in a mock exam
- passage of tissue at home, with no prior scan
- tests the label "pregnancy of unknown location", steps to confirm, a plateau at 48 hours, and emotional support

first-trimester-bleeding-27:
- MCQ
- telehealth medical abortion with mifepristone and misoprostol and no ultrasound
- q1 tests that the regimen does not treat an ectopic pregnancy
- q2 tests that a urine hCG stays positive for weeks
- q3 tests the pregnancy of unknown location step

Only q3 of first-trimester-bleeding-27 shares a teaching point with first-trimester-bleeding-10. The no-ultrasound telehealth abortion is a current Canadian ED presentation that the bank covers nowhere else.

**Evidence.**
- Health Canada. Health Canada approves updates to Mifegymiso prescribing information: ultrasound no longer mandatory. 2019. https://recalls-rappels.canada.ca/en/alert-recall/health-canada-approves-updates-mifegymiso-prescribing-information-ultrasound-no-longer. It says Mifegymiso "should not be prescribed to patients who ... have an ectopic pregnancy", and "prescribers now have the flexibility to use their medical judgement on how best to determine the gestational age and to rule out an ectopic pregnancy." This supports q1.
- Barnhart K et al. Obstet Gynecol. 2004. https://doi.org/10.1097/01.aog.0000142712.80407.fd. It says "The rate of decline ranged from 21% to 35% at 2 days and 60% to 84% at 7 days" and "A rate of decline less than 21% at 2 days or 60% at 7 days suggests retained trophoblasts or an ectopic pregnancy." This supports q2 and the serial hCG logic in q3.
- SOGC Guideline No. 414 (Po L et al. JOGC. 2021. https://doi.org/10.1016/j.jogc.2021.01.002) is the cited source for managing a pregnancy of unknown location.

**Proposal: NO CHANGE, keep both, release from HOLD.** The overlap is one shared step in a different clinical story, and the two SAMPs never meet in mock mode. The stems are far apart and pass the trigram gate.

Cueing check in mock mode: the q3 update (empty uterus, hCG 1850) does not reveal the q1 key "Undiagnosed ectopic pregnancy" or the q2 key. The q2 key "It can remain positive for several weeks" is the longest q2 option at 41 characters, against a shortest of 30. That is within the limits and is not hedged.

Arjan decides: approve / reject

Reviewer: SOUND. I checked the Health Canada quotes on the live page, the Barnhart figures in the PubMed abstract, and SOGC 414, whose summary statement 3 defines pregnancy of unknown location. The texts differ as described. One minor point needs no change: the q2 explanation's "a level in the tens of thousands" is a hypothetical, not a stem value. first-trimester-bleeding-28 in the same batch also follows a falling hCG in a pregnancy of unknown location. Its story and decisions differ, so it is not a duplicate.

### multiple-patients-29 (s44)

**Problem.** q1 and q3 key CTAS levels from the 2016 heat related issue modifiers. CTAS 2025 has been published: Hall JN, McCarron J, Toarta C, McLeod SL et al. CJEM. 2025. https://doi.org/10.1007/s43678-025-00996-1. I could not open its tables either, because the article is paywalled and a regional quick look booklet returned 403. So a key may not match the current version.

There is also an unflagged mock mode cue. The q2 update opens "She is in a resuscitation bed", which answers q1 (CTAS level 1).

**Evidence.**
- Bullard MJ et al. Revisions to the CTAS Guidelines 2016. CJEM. 2017. https://doi.org/10.1017/cem.2017.365. This is the cited source. Lens B (`docs/reviews/samps-s44-lensB.md` lines 40 to 42) confirmed the 2016 table: core temperature above 41°C is level 1, 39 to 41°C is level 2, and ongoing heat cramps are level 3.
- The q1 key does not depend only on the heat table. The CTAS first order hemodynamic modifier says: "Shock 1: Evidence of severe end-organ hypoperfusion; weak or thready pulse, hypotension, significant tachycardia or bradycardia, decreased level of consciousness. Could also appear as flushed, febrile, toxic." Source: CTAS National Working Group. CTAS Participant Manual v2.5b. 2013. http://ctas-phctas.ca/wp-content/uploads/2018/05/participant_manual_v2.5b_november_2013_0.pdf. Her BP of 92/54 mmHg, pulse of 126/minute and confusion support it, so the shock modifier alone gives level 1 on a reasonable reading. A strict reader could call this level 2, hemodynamic compromise. The 2016 paper's Table 2 lists hemodynamic status as a level 1 to 3 modifier for heat related issue but does not define shock.
- Only q3 (ongoing heat cramps, level 3) rests on the heat table alone. Spec section 9 says that when references differ, the stem should state which one applies.

**Proposal: EDIT the stem, the q1 explanation and the q2 update. No key change.**

Stem. Before (last two sentences):
> Nine other patients with heat related complaints are waiting, and ambulances report more on the way. The vital signs listed are hers.

After (stem 84 words):
> Nine other patients with heat related complaints are waiting, and ambulances report more on the way. The department triages with the CTAS 2016 guidelines. The vital signs listed are hers.

q1 explanation. Before:
> The 2016 CTAS heat related issue complaint assigns level 1 to a core temperature above 41°C. Her rectal temperature is 41.6°C, and she also has confusion, tachycardia and a soft BP. A core temperature of 39 to 41°C would be level 2. Level 3 fits ongoing heat cramps or mild dehydration. Heat stroke in an older adult can progress to seizures, arrhythmia and multiorgan failure within hours, so she needs a resuscitation bed now.

After:
> The 2016 CTAS heat related issue complaint assigns level 1 to a core temperature above 41°C, and her rectal temperature is 41.6°C. Her BP of 92/54 mmHg, pulse of 126/minute and confusion also point to shock, which the hemodynamic modifier places at level 1. A core temperature of 39 to 41°C would be level 2. Level 3 fits ongoing heat cramps or mild dehydration. Heat stroke in an older adult can progress to seizures, arrhythmia and multiorgan failure within hours, so she needs a resuscitation bed now.

q2 update. Before:
> She is in a resuscitation bed with evaporative cooling under way. Five other heat related patients are waiting at triage.

After (17 words):
> Evaporative cooling of the woman is under way. Five other heat related patients are waiting at triage.

Cueing check in mock mode after the edit: no update states her triage level. The q4 option "Discharge the woman once she is below 39°C" does not cue q1. The q1 and q3 options are the five levels, so there is no length cue.

Alternative: if Arjan can confirm the CTAS 2025 heat modifiers, rekey q3 to the 2025 table. Then change the stem sentence to "The department triages with the CTAS 2025 guidelines." and the citations to Hall JN et al. CJEM 2025, https://doi.org/10.1007/s43678-025-00996-1. I could not verify the 2025 table, so I propose no 2025 key.

Arjan decides: approve / reject

Reviewer: FIXED. All three "Before" texts match src/samps/s44/multiple-patients.ts. The 2016 Table 2 in the scratchpad PDF gives level 1 above 41°C, level 2 at 39 to 41°C, level 3 for ongoing heat cramps and level 4 for resolving cramps. The shock definition matches the 2013 participant manual. I made three fixes. (1) The proposed q1 explanation led with the shock modifier. The cited source, CTAS 2016, lists hemodynamic status but does not define shock, and "new" confusion is not in the stem. I reordered it so that it opens with the temperature rule the cited source gives and says "confusion". (2) The stem is 84 words, not 83. (3) I softened "level 1 under any version" in the evidence. I tried again to reach CTAS 2025 (Hall JN et al. CJEM 2025). Springer returned a paywall preview, Europe PMC has no abstract, the earlier scratchpad copies are Cloudflare challenge pages, and web searches found no secondary report of its heat or temperature modifiers. So the 2025 criteria are still unverified. Pinning the stem to 2016 is the honest fix. Arjan should know that if 2025 changed the heat table, this teaches a superseded version.

### sob-23 (s51)

**Problem.** q3 keys serial leg compression ultrasound after a V/Q scan that is neither normal nor high probability. The patient has a Wells score of 7.5, which is "high" on the three level Wells scale (above 6). Thrombosis Canada's algorithm supports serial ultrasound for any such scan. But the study behind that pathway showed it was safe only for low or moderate pretest probability. High probability patients went to angiography. So the key is defensible in Canada but weak on evidence for this patient.

**Evidence.**
- Thrombosis Canada. Pulmonary Embolism (PE): Diagnosis. Clinical guide, version 6 August 2023. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf. Footnote d says "When the V/Q scan is neither normal nor high probability for PE (diagnostic for PE), serial compression ultrasounds (CUS) of the legs should be undertaken." The text says "when the Wells score is 4.5 or greater, one should go directly to imaging."
- Wells PS et al. Use of a clinical model for safe management of patients with suspected pulmonary embolism. Ann Intern Med. 1998. https://doi.org/10.7326/0003-4819-129-12-199812150-00002. It says "Testing by serial ultrasonography, venography, or angiography depended on pretest probability and lung scans." Safety was shown for "the 665 patients (0.5% [95% CI, 0.1% to 1.3%]) with low or moderate pretest probability and a non-high-probability scan." Among high probability patients, 78.4% had PE. Reviewer note: the abstract does not itself say that high probability patients with a nondiagnostic scan went to angiography. It says only that "Testing by serial ultrasonography, venography, or angiography depended on pretest probability and lung scans", and that safety was reported for the low and moderate groups. I could not open the full text (403), so the angiography detail rests on the methods as usually summarized. The 1998 study graded pretest probability with the original implicit clinical model, not the point score.
- Wells PS et al. Thromb Haemost. 2000. https://doi.org/10.1055/s-0037-1613830. It says "low probability if the score was <2.0, moderate of the score was 2.0 to 6.0 and high if the score was over 6.0", and "PE likely if the score was >4.0." This paper turned the 1998 model into the point score and set the three bands to match the 1998 proportions. It is the source for "6 is moderate", so the edit below cites it for q1.

**Proposal: EDIT. Lower the pretest probability to moderate (Wells 6) while keeping "PE likely", so every step still holds.** Remove the prior DVT. q2 logic is unchanged, because a score of 6 is still "PE likely", so there is no D-dimer and imaging comes first. q3 now falls inside the population where serial ultrasound was validated.

**KEY CHANGE (q1): the keyed answer changes from "7.5 points" to "6 points". The key index stays 2.**

Stem. Before:
> She had an unprovoked DVT 6 years ago and stopped anticoagulation after 6 months.

After (stem 87 words):
> She has no personal history of venous thromboembolism or cancer.

q1 options. Before:
> ["4.5 points", "6 points", "7.5 points", "9 points", "10.5 points"], correct: 2

After (numeric order, key still index 2, longest to shortest ratio 1.25):
> ["3 points", "4.5 points", "6 points", "7.5 points", "9 points"], correct: 2

q1 explanation. Before:
> She scores 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute, 1.5 for surgery within 4 weeks and 1.5 for a previous DVT, a total of 7.5. That is 4.5 or more, so PE is likely, and Thrombosis Canada advises going straight to imaging without a D-dimer. A score of 6 leaves out either the surgery or the old DVT, and 4.5 leaves out both. A score of 9 counts surgery and immobilization as two items, although they form one. A score of 10.5 adds 3 points for signs of DVT, and her legs are normal.

After:
> She scores 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute and 1.5 for surgery within 4 weeks, a total of 6. She has no previous VTE, cancer, hemoptysis or signs of DVT. That makes PE likely, and on the three level scale a score of 2 to 6 is moderate. A score of 4.5 leaves out either the heart rate or the surgery, and 3 counts only the leading diagnosis. A score of 7.5 counts surgery and immobilization as two items, although they form one. A score of 9 adds 3 points for signs of DVT, and her legs are normal.

q2 explanation, first sentence only. Before:
> A CT that could not assess the segmental arteries is not a negative study, and with a Wells score of 7.5 her probability of PE is still high.

After:
> A CT that could not assess the segmental arteries is not a negative study. With a Wells score of 6, PE is still likely.

q3 explanation. Before:
> Thrombosis Canada advises serial compression ultrasound of the legs when a V/Q scan is neither normal nor high probability. Finding a proximal DVT confirms that she needs anticoagulation, and repeated normal studies make a clinically important PE unlikely. A single normal study is not enough, because a calf clot can extend into the proximal veins over the following days, which is why the test is repeated. Treating for 3 months commits her to anticoagulation and its bleeding risk without a diagnosis. Discharge without further testing ignores a nondiagnostic result in a patient whose pretest probability was high, and repeating the V/Q scan does not resolve the uncertainty.

After:
> Her Wells score of 6 is moderate, and serial compression ultrasound of the legs was shown to be safe after a V/Q scan that is neither normal nor high probability when pretest probability is low or moderate. Finding a proximal DVT confirms that she needs anticoagulation, and repeated normal studies make a clinically important PE unlikely. A single normal study is not enough, because a calf clot can extend into the proximal veins over the following days. Treating for 3 months commits her to anticoagulation and its bleeding risk without a diagnosis. Discharge ignores a nondiagnostic result, and repeating the V/Q scan does not resolve the uncertainty.

q1 source. Before: `source: "tc-pe"`. After: `source: "wells-2000"`. The imaging-first point from Thrombosis Canada now appears only in q2, which still cites tc-pe.

q3 source. Before: `source: "tc-pe"`. After: `source: "wells-1998"`.

sources. Before: `[TCPE]`. After: `[TCPE, WELLS2000, WELLS1998]`, with:
> `{ id: "wells-2000", citation: "Wells PS, Anderson DR, Rodger M, and colleagues. Derivation of a simple clinical model to categorize patients' probability of pulmonary embolism: increasing the model's utility with the SimpliRED D-dimer. Thromb Haemost. 2000.", url: "https://doi.org/10.1055/s-0037-1613830" }`
> `{ id: "wells-1998", citation: "Wells PS, Ginsberg JS, Anderson DR, and colleagues. Use of a clinical model for safe management of patients with suspected pulmonary embolism. Ann Intern Med. 1998.", url: "https://doi.org/10.7326/0003-4819-129-12-199812150-00002" }`

keyFeature: unchanged (sob 5 for all three).

Cueing check in mock mode: no update states the Wells score. The q2 and q3 updates do not reveal the q1 total. The q3 key "Serial leg compression ultrasound" (33 characters) is the longest q3 option. It is 1.16 times the mean distractor (28.5 characters), under 1.5. It was already the longest before this edit, and its options do not change. After the edit, s51 should be rerun through the batch gate for the 35 percent longest-key cap.

Alternative: NO CHANGE. Keep Wells 7.5 and key serial ultrasound on the unconditional wording of Thrombosis Canada 2023 footnote d, quoted above. This follows spec section 9, which makes the current Canadian guide the source of record. No option offers repeat CTPA or angiography, so no distractor is also correct. The cost is that the key rests on a pathway that was not validated for high pretest probability. Many emergency physicians would repeat the CTPA here.

Arjan decides: approve / reject

Reviewer: FIXED. Every "Before" text matches src/samps/s51/sob.ts. Recomputed Wells score for the proposed stem: PE most likely 3, heart rate 108 above 100 gives 1.5, and cholecystectomy 3 weeks ago gives 1.5, for a total of 6. Items worth 0: no previous DVT or PE after the edit, no hemoptysis, legs not swollen or tender, and no cancer after my addition. The q1 key "6 points" at index 2 is correct. The distractors 3, 4.5, 7.5 and 9 each map to a plausible error, and the longest to shortest option ratio is 1.25. A score of 6 is "PE likely" under both Thrombosis Canada (4.5 or more) and Wells 2000 (over 4.0), so the q2 logic still holds. It is also moderate under Wells 2000 ("2.0 to 6.0"), though it sits at the top edge of that band. Thrombosis Canada: the scratchpad copy and a fresh download of PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf are both dated 06 August 2023. Footnote d advises serial CUS after a scan that is neither normal nor high probability, with no pretest condition. Footnote f and the text are as quoted. Wells 1998: the abstract supports safety for low or moderate pretest probability only. See my note under Evidence on the angiography detail and the implicit model. My changes: (1) the stem now says "or cancer", because cancer is a Wells item and the stem never excluded it. The stem is 87 words. (2) "Moderate" comes from Wells 2000, not 1998. So I made wells-2000 the q1 source, added it to sources, and moved the band statement into the q1 explanation. That dropped q1's Thrombosis Canada sentence, which q2 already covers. (3) I rewrote the opening of the q3 explanation, because "the tested next step" was unclear. Mock mode: the q2 explanation still says "when suspicion stays high", which is Thrombosis Canada's word for a score over 4.5, while q3 says "moderate". Explanations are not shown during the exam, and both are correct on their own scale. This is not a cue. Remaining judgement for Arjan: a score of exactly 6 is a boundary value, so a candidate who recalls "over 6 is high" is still right, but the case is not far from the edge. The alternative (NO CHANGE) is correctly described.
