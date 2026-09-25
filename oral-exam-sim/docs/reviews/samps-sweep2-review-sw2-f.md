# Review of sweep 2 rebuilds sw2-f (s21, s24, s27, s38)

Reviewer: independent check of the writer report `docs/reviews/samps-sweep2-sw2-f.md`. Both lenses. Nothing was committed. Only `src/samps/s21/airway.ts`, `src/samps/s24/arrhythmia.ts`, `src/samps/s27/cva.ts` and `src/samps/s38/first-trimester-bleeding.ts` were edited, and only the SAMPs named below. Every SAMP stays `reviewed: false`.

## Verdicts

| SAMP | Verdict | Summary |
|---|---|---|
| airway-31 | pass, flagged | Keys hold. Sources confirmed. "Intubate before the flight" is also keyed in burns-25 q1 and environmental-21 q3, for other reasons. |
| arrhythmia-27 | fixed (q2 rebuilt) | q2 keyed the same decision as ischemic-heart-disease-25 q1. It now asks for the cause of the slow rate. q3 timing and q4 risk factors adjusted. |
| cva-45 | fixed | q2 lead-in cued the key. Age changed from 76 to 73 to break a surface match with cva-08. Keys hold under CSBPR 2020 and Thrombosis Canada. |
| first-trimester-bleeding-34 | fixed | q2 now cites SOGC 460. q1 now gives the confidence interval. Crochet LRs confirmed. |
| first-trimester-bleeding-25 | fixed | NICE NG126 replaced by SOGC 460 for all three questions. Explanations rewritten to the SOGC text. |
| first-trimester-bleeding-29 q1 | pass, flagged | The postural pulse key is sound under McGee 1999. The q3 key option points to it in mock mode. |

Counts: pass 2 (airway-31, first-trimester-bleeding-29 q1), fixed 4 (arrhythmia-27, cva-45, first-trimester-bleeding-34, first-trimester-bleeding-25), re-rebuilt 0.

## One row per question

| SAMP | Q | KF (matches HEAD) | Key | Verdict | Notes |
|---|---|---|---|---|---|
| airway-31 | q1 | anaphylaxis 3, yes | epinephrine infusion IV | pass | Two IM doses of 0.5 mg (0.01 mg/kg x 80 kg = 0.8 mg, capped at 0.5 mg) and 2 L failed. WAO 2020 supports an IV infusion for anaphylaxis that does not respond to IM epinephrine. The key carries no dose while three distractors do. This is minor. |
| airway-31 | q2 | airway 2, yes | Intubate here before the flight | pass, flagged | Progressive tongue swelling and louder stridor while the BP recovers. CAFG 2021 part 2 allows deferral only when the patient can be temporized. Same keyed wording as burns-25 q1 and environmental-21 q3. The reasons differ. |
| airway-31 | q3 | airway 3, yes | Cut the fixation wires | pass | Kellman and Losquadro 2008 (PMC3052732) say wire cutters must be at the bedside and staff taught which wires to cut "if significant dyspnea or severe nausea/vomiting develops". The arch bar claim is reasoning, not a quote. No other SAMP in the bank has wired jaws. |
| arrhythmia-27 | q1 | arrhythmia 7, yes | potassium chloride 20 mmol IV | pass | Frampton 2023: treat hypokalemia and hypomagnesemia aggressively. Lidocaine and procainamide prophylaxis raise mortality. Amiodarone is not for routine prophylaxis. No target is stated in the item. See targets below. |
| arrhythmia-27 | q2 | arrhythmia 7, yes | Increased vagal tone after reperfusion (new) | fixed | The old key "No treatment now" for a tolerated slow rate after an inferior STEMI was the same decision as ischemic-heart-disease-25 q1 ("Monitoring without pacing"). The stem also shares "The catheterization laboratory team has been called". Rebuilt as a cause question. The update now says the rhythm is still irregular with narrow QRS and no return of ST elevation. Frampton: block in inferior MI comes from ischemia or enhanced vagal activity at the AV node and often recovers after reperfusion. Distractors: complete heart block (would be regular), reocclusion (no pain or ST return), drug effect (none of her drugs slows the AV node), sinus node dysfunction (she is in AF). Key now at position 3. |
| arrhythmia-27 | q3 | arrhythmia 4, yes | magnesium sulfate 2 g IV | fixed | Key holds. Drew 2010: 2 g IV first line whatever the serum magnesium. Shock for torsades that does not stop or becomes VF. The update said she was still waiting for angiography 95 minutes after arrival at a PCI centre. It now reads "Thirty minutes later, before she leaves for angiography". |
| arrhythmia-27 | q4 | arrhythmia 5, yes | clarithromycin 500 mg PO | fixed | Clarithromycin is on the Drew drug table. Drew also lists bradycardia as a risk factor, so "a slow ventricular rate" was added to the explanation. |
| cva-45 | q1 | cva 4, yes | CT angiography of head and neck | pass | CSBPR 7.2 (2020) asks for a search for other causes after a TIA on anticoagulation. The acute guideline asks for CT with CTA for high risk TIA. cva-43, 44 and 47 also key CTA, for other reasons. |
| cva-45 | q2 | cva 4, yes | Increase apixaban to 5 mg twice daily | fixed | Thrombosis Canada (2 June 2025): 2.5 mg only with 2 of 3 criteria (creatinine 133 umol/L or more, age 80 or more, weight 60 kg or less). He now is 73, 82 kg, creatinine 104. He meets none. CSBPR 7.3 rec 2: avoid inappropriate underdosing. The lead-in said "change to his anticoagulant", which argued against the "Continue" distractor. It now says "plan for". |
| cva-45 | q3 | cva 4, yes | Stop the St. John's wort | pass | Thrombosis Canada names St. John's wort as a strong inducer that lowers apixaban levels and says to avoid it. CSBPR 7.2 rec: avoid DOAC interactions. |
| cva-45 | q4 | cva 4, yes | None | pass | CSBPR 7.3 rec 4: no antiplatelet added to chronic anticoagulation for AF without a specific indication. The stem says he has no coronary disease. |
| first-trimester-bleeding-34 | q1 | ftb 3, yes | Cervical motion tenderness | fixed | Confirmed in Crochet 2013 table 2: cervical motion tenderness LR+ 4.9 (95% CI 1.7 to 14, I2 93%). Peritoneal findings 4.2 to 4.5. Adnexal mass 2.4 (1.6 to 3.7). Adnexal tenderness 1.9 (1.0 to 3.5). Every history item under 1.5. It has the highest point estimate among examination findings. The CI is now in the explanation. |
| first-trimester-bleeding-34 | q2 | ftb 4, yes | Transfer by air today for ultrasound | fixed | Now cites SOGC 460: ultrasound is the key to location, and hCG alone should not be used because values overlap between viable, nonviable and ectopic pregnancies. SOGC 414 was read but its recommendations cover risk models and treatment, not this claim. Overlaps in part with first-trimester-bleeding-20 q3 ("Formal transvaginal ultrasound today"). The remote transfer makes it a different decision. |
| first-trimester-bleeding-34 | q3 | ftb 1, yes | Shock index of 1.1 | pass | 116 / 104 = 1.12. Pacagnella 2013 abstract confirmed: AUC 0.77 to 0.84 for shock index, 0.56 to 0.74 for HR, 0.56 to 0.79 for SBP. No Canadian guideline covers this. |
| first-trimester-bleeding-25 | q1 | ftb 2, yes | Confirm where the pregnancy is | fixed | Source changed from NICE NG126 to SOGC 460 ("Ultrasound is key to establishing pregnancy location and viability"). Explanation rewritten to that text. |
| first-trimester-bleeding-25 | q2 | ftb 4, yes | hCG cannot show whether the embryo is alive | fixed | SOGC 460 box 1: CRL of 7 mm or more with no heartbeat is diagnostic. Rec 2: avoid hCG values alone. Rec 4: no treatment changes a threatened loss. The NICE sentence on scan error was removed. Not a hedged-key cue: a distractor ("Progesterone may restart the heartbeat") is also hedged. |
| first-trimester-bleeding-25 | q3 | ftb 6, yes | Arrange her own follow-up and support | fixed | SOGC 460 summary 3 and rec 3 (psychosocial harm, depression screening), rec 7 (when and where to return), follow-up by urine test, hCG, scan or symptom review. The consent sentence is now a plain statement, not a NICE claim. |
| first-trimester-bleeding-29 | q1 | ftb 1 | Pulse rise of 34/minute on standing | pass, flagged | 122 - 88 = 34. McGee 1999: a postural pulse rise of 30/minute or more, or severe postural dizziness, is the most helpful sign of large blood loss, and supine tachycardia and hypotension are often absent. The select 1 key is sound, and no other option is defensible. |

## Mock mode and cueing

- airway-31, cva-45, first-trimester-bleeding-34: no later update, prompt or option names an earlier key.
- arrhythmia-27: the new q2 options avoid naming potassium, so they do not point to the q1 key.
- first-trimester-bleeding-25: the q2 update shows an intrauterine embryo. It gives the scan result, not the purpose keyed in q1. Left as is, as the writer noted.
- first-trimester-bleeding-29: the q3 key "No rise in pulse on standing" is visible at the same time as q1 and points to the postural pulse as the measure of volume. Not fixed. See below.

## Whole bank overlap search

The bank was dumped (1 500 SAMPs, every key and stem) and searched by scenario and by keyed decision.

- Wired jaws, peanut shake: no other SAMP. Epinephrine infusion for refractory anaphylaxis is keyed in signed-off write-ins anaphylaxis-01 q3, asthma-copd-13 q3 and sob-15 q3, and in no draft MCQ. sob-15 shares stem phrases (hoarse voice, lip swelling, soft inspiratory stridor, scattered wheeze) but not the story.
- Tolerated bradycardia after an inferior STEMI: ischemic-heart-disease-25 q1. Fixed in arrhythmia-27 q2. Magnesium for torsades: signed-off arrhythmia-05 q2 only, in a different story. Clarithromycin as the culprit: no other key.
- DOAC failure: signed-off cva-08 q4 lists the reasons a patient on a DOAC has a stroke (inappropriate dose reduction, inducers, carotid disease). cva-45 turns three of those into applied decisions in a TIA. Both patients were 76-year-old men with AF. The age was changed. The shared teaching remains. cva-42 q3 (DAPT not preferred in AF) is close to cva-45 q4 (no antiplatelet added to an anticoagulant).
- Gestational carrier: no other SAMP. Nursing station ectopic: no other. Shock index: shock-16 (s50) only, as a calculation. Cervical motion tenderness is listed in signed-off first-trimester-bleeding-09 q2 but not keyed as the strongest sign.

## Sources verified

- Crochet JAMA 2013, full text: https://emupdates.com/perm/Crochet%202013%20Ectopic%20Rational%20Clinical%20Exam%20JAMA.pdf (doi 10.1001/jama.2013.3914)
- Pacagnella PLoS One 2013, abstract via Europe PMC (doi 10.1371/journal.pone.0057594)
- SOGC Guideline No. 460, 2025, full text via the Wayback Machine: https://web.archive.org/web/2025/https://www.jogc.com/article/S1701-2163(25)00154-9/fulltext
- SOGC Guideline No. 414, 2021, archived page: https://web.archive.org/web/20230331064405/https://www.jogc.com/article/S1701-2163(21)00016-5/fulltext
- Frampton Yale J Biol Med 2023: https://pmc.ncbi.nlm.nih.gov/articles/PMC10052595/
- Drew Circulation 2010: https://pmc.ncbi.nlm.nih.gov/articles/PMC3056123/
- Thrombosis Canada apixaban guide, 2 June 2025: https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf
- CSBPR secondary prevention 2020, section 7: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anticoagulation-for-individuals-with-stroke-and-atrials-fibrillation
- Kellman and Losquadro 2008: https://pmc.ncbi.nlm.nih.gov/articles/PMC3052732/

## Key changes

- arrhythmia-27 q2. Before: "No treatment now" (management of the slow rate). After: "Increased vagal tone after reperfusion" (cause of the slow rate). The question was rebuilt, not patched: update, prompt, options and explanation are new. Reason: duplicate keyed decision with ischemic-heart-disease-25 q1.

## For the physician

- arrhythmia-27 q2 is now a cause question under KF7. Frampton names both ischemia and vagal tone as causes of AV block in inferior MI. AV node ischemia is left out of the options, and the stem points to reperfusion (pain gone, ST not returned). Please confirm this is a fair single best answer.
- Potassium and magnesium targets. arrhythmia-27 states no target. Signed-off arrhythmia-12 q5 keys potassium of at least 4 mmol/L and magnesium of at least 1 mmol/L after an arrest. Drew 2010 allows potassium of 4.5 to 5 mmol/L in torsades (class IIb). Her magnesium of 0.84 mmol/L is normal by laboratory range and above the older ACC/AHA 2004 target of 2.0 mg/dL (0.82 mmol/L), but below the 1 mmol/L that arrhythmia-12 teaches. The q4 explanation calls it normal. Please decide whether to add a target.
- airway-31 q2 keys the same words as burns-25 q1 and environmental-21 q3. The reasons differ, and airway KF2 names edema as a trigger. Consider whether the bank needs three "intubate before the flight" keys. For a rural physician without anesthesia on site, the key assumes the skills to intubate a swollen airway.
- airway-31 q3 is asked after q2 in time, but the wires would be cut at arrival. The prompt ("under any airway plan") keeps it from cueing q2.
- cva-45 q2 to q4 test secondary prevention under cva KF4 (risk stratification and workup). The mapping comes from HEAD. The teaching overlaps with signed-off cva-08 q4.
- first-trimester-bleeding-25 now cites SOGC 460, whose target population is a located intrauterine loss. q1 (location) leans on its general statement about ultrasound. The confidentiality point in q3 has no source. It is a general privacy principle.
- first-trimester-bleeding-34 q2 now cites SOGC 460 for the limits of hCG. Crochet stays for q1.
- first-trimester-bleeding-29: the q3 option "No rise in pulse on standing" shows in mock mode with q1 and points to the q1 key. Removing it means rebuilding q3. q3 also stretches McGee, which studied the detection of blood loss, not the proof of restored volume. first-trimester-bleeding-29 q1 and first-trimester-bleeding-34 q3 both ask for the vital sign that best reflects blood loss, with different keys (postural pulse rise, shock index). Neither offers the other's answer, so they do not contradict. A candidate may still find the pair confusing.
- NICE NG126 is no longer cited by first-trimester-bleeding-25. It is still cited elsewhere in s38.

## Checks

- `SAMP_BATCH=s21`: 667 passed. `s24`: 675 passed. `s27`: 715 passed. `s38`: 456 passed. (`npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`)
- `npx tsc --noEmit -p .`: clean.
