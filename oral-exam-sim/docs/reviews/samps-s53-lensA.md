# SAMP review, batch s53 (Toxicology), Lens A (clinical truth)

Reviewer lens: A, clinical truth. Files in scope: src/samps/s53/tox.ts (tox-16 to tox-47), src/samps/s53/review-extra.ts (tox-48, tox-49), src/samps/s53/index.ts. Every SAMP stays reviewed: false. All fixes were made in the batch folder only. Gates green after edits: tsc clean for samps/s53, and SAMP_BATCH=s53 vitest 743 passed.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
| --- | --- | --- | --- | --- |
| tox-16 | q3 | explanation | Rejection reason for lidocaine and phenytoin was imprecise. Phenytoin does not treat toxic seizures and lidocaine is a second line for a dysrhythmia that persists after bicarbonate. Reworded. | medium |
| tox-16 | q3 | stem, explanation | No weight given although the keyed dose is fixed at 100 mmol. Added weight 64 kg and noted 1.5 mmol/kg equivalence. | low |
| tox-17 | q1, q3, q4 | stem, explanation | Keyed drug was gliclazide, but gliclazide has inactive metabolites and is hepatically cleared, so the explanations' stated reason (renal accumulation of active metabolites causing prolonged hypoglycemia) is false for it. Changed the agent to glyburide, which has renally cleared active metabolites, the classic cause of prolonged hypoglycemia in renal impairment. Octreotide teaching unchanged. Glyburide is sold in Canada. | high |
| tox-18 | q2 | stem, explanation | Keyed hemodialysis, but the stem numbers (pH 7.04, lactate 14 mmol/L) did not meet a firm EXTRIP recommended criterion. Raised the stem to pH 6.96 and lactate 22 mmol/L so both the pH 7.0 or less and lactate above 20 mmol/L criteria are met, and rewrote the explanation to name them. Anion gap recomputed to 33 mmol/L. | high |
| tox-18 | q3 | prompt, explanation | "Best excludes a toxic alcohol" overstated what a normal osmolal gap does. Changed to "best screens for" and noted the gap is read against his renal failure and lactate. | medium |
| tox-19 | q1 | explanation | Added the Canadian Antidote Guide levocarnitine loading dose (100 mg/kg to a maximum of 6 g), so a 72 kg dose is capped at 6 g not 7.2 g. | medium |
| tox-19 | q2 | options, explanation | Recast against EXTRIP valproate thresholds. 6800 umol/L is about 980 mg/L, above the 900 mg/L (about 6 250 umol/L) suggested threshold, with coma needing ventilation and hyperammonemia as further suggested criteria. Replaced the "Ammonia" distractor with "Blood pressure of 104/62 mmHg" and explained why that is not the shock that firms the recommendation. | high |
| tox-20 | q1, q4 | explanation | Added SI to mg/L conversions (165 umol/L is about 39 mg/L, 220 about 52 mg/L) and mapped the key to the actual EXTRIP carbamazepine criteria (refractory seizures, coma needing ventilation, rising level despite MDAC). Removed plasma exchange as a listed alternative since EXTRIP lists hemoperfusion and continuous techniques. | high |
| tox-21 | q4 | option, explanation | Folic acid was keyed at "50 mg every 6 hours". The Canadian Antidote Guide gives 2 mg/kg to a maximum of 100 mg every 4 to 6 hours with acidosis. Changed the option to "Folic acid IV every 4 to 6 hours" and stated the dose in the explanation. | medium |
| tox-24 | q2 | explanation | Physostigmine rejection said "his pupils are 2 mm with normal skin" although skin was not described. Trimmed to the pupils. | low |
| tox-25 | q2 | kind, options, explanation | Was a single with a bare "None" key. The app renders a "None" single with "Select one" and no None instruction, so the intended "nothing is appropriate" reading is unclear. Converted to a menu (select 1, key None) so the app shows "Select one, or None if none are required." Added a whole bowel irrigation distractor and its reason. | medium |
| tox-26 | q4 | explanation | Explanation ignored the stem calcium of 2.02 mmol/L. Added that peripheral calcium is needed for the low serum calcium but does not reach the palms, keeping intra-arterial calcium as the key. | low |
| tox-28 | q3 | stem, select, options, explanation | Chest radiograph was rejected although he was just intubated and had been vomiting, where a film confirms tube position and looks for aspiration. Added it to the key (select now 4) and added a line to the stem that he was mixing pesticide for work, so the acetaminophen level is correctly excluded. | high |
| tox-30 | q4 | explanation | "1 hour after arrival" was not in the stem. Changed to "on arrival". | low |
| tox-31 | q2 | explanation | Amiodarone rejection blamed sodium channels. Amiodarone's hazard here is potassium channel block lengthening a QTc already at 560 ms. Reworded, and separated lidocaine's role. | medium |
| tox-31 | q4 | explanation | Added that BCCSU also allows a low dose start that does not wait for withdrawal, so the COWS still governs a standard start. | low |
| tox-33 | q3 | kind, options, explanation | Same bare "None" single problem as tox-25. Converted to a menu (select 1, key None), added a peritoneal dialysis distractor, and noted dialysis may later be needed for kidney failure itself. | medium |
| tox-34 | q3 | explanation | Said MDAC worthwhile "even 14 hours after the meal" while the stem timeline is 14 hours of symptoms starting 10 hours post meal, so about 24 hours since ingestion. Changed to 24 hours. | low |
| tox-36 | q3 | options, explanation | Keyed "Hemolysis and tissue hypoxia", but hemolysis is not the anticipated complication of rising methemoglobin. The threat is tissue hypoxia with lactic acidosis, dysrhythmia and coma. Changed the key option to "Dysrhythmia with lactic acidosis" and rewrote the reason. | high |
| tox-36 | q4 | explanation | Kidney disease rejection was too absolute. Noted severe renal impairment does slow methylene blue excretion but G6PD deficiency is the safety issue. | low |
| tox-37 | q1 | explanation | Physostigmine rejection reason (sodium channel or QT block) was not the real reason here. Reworded to the true reason: sedation is mainly histamine blockade, physostigmine risks bradycardia and seizures. | medium |
| tox-37 | q3 | options, explanation | Pulmonary embolism distractor had no stated reason for rejection. Added one. Softened "60 tablets" to "up to 60 tablets" since the count is a bottle estimate. | low |
| tox-38 | q1 | explanation | Naloxone rejection leaned on pupils and needle marks. Reworded to the physiological reason (adequate ventilation, no opioid history). | low |
| tox-39 | q2 | none | No change made. The intubation key is defensible and its distractor reasons are true. See "Needs physician decision" for a note. | n/a |
| tox-41 | q1 | explanation | Added the PCC dose (3 000 units for INR above 5, the single dose maximum in the Canadian recommendations) and vitamin K 10 mg IV. Dose does not exceed 3 000 units. | medium |
| tox-44 | q1 | explanation | "adds little after 30 minutes" was a weak reason. Trimmed to the aspiration risk. | low |
| tox-44 | q2 | explanation | "nicotine does not drive it down for hours" implied a delayed drop. Changed to "hypoglycemia is not a feature". | low |
| tox-44 | q3 | explanation | Pralidoxime and physostigmine were lumped as "act on cholinesterase". Separated: physostigmine inhibits the enzyme, pralidoxime reactivates it, and nicotine does not inhibit it. | medium |
| tox-46 | stem | stem | Provincial guidance (BCCSU) drives the key but no province was named. Added "You are working in an emergency department in British Columbia." | medium |
| tox-46 | q2 | explanation | Said tolerance falls "once 3 or more consecutive daily doses are missed", but BCCSU resumes the usual dose after up to 3 missed doses and reduces only at 4 or more. Corrected to the 4 missed dose rule (50% or 30 to 40 mg, whichever is higher). Key (45 mg) unchanged. | high |
| tox-46 | q4 | options, key, explanation, source | The keyed "observe 3 hours after the dose" was not supported by a citable Canadian source and the 3 to 4 hour peak claim is not in the BCCSU summary. Rebuilt the question around notifying the pharmacy and prescriber, which the Emergency Care BC missed OAT dose summary states, and cited that source. See "Key changes". | high |
| tox-48 (extra) | q1 | correct | Keyed index 0 (magnesium sulfate soaks) while the explanation says topical calcium gluconate gel is correct (index 3). Fixed the key to 3. | high |
| tox-48 (extra) | q4 | explanation | Same peripheral calcium omission as tox-26. Added the serum calcium point. | low |
| tox-49 (extra) | q1 | explanation | Physostigmine rejection reason corrected as in tox-37 q1. | medium |
| tox-49 (extra) | q2 | explanation | Explanation invented a lab value ("serum lactate of 7.8 mmol/L seen on the first blood gas") not in the stem. Removed the sentence. | high |
| tox-49 (extra) | q3 | options, explanation | Pulmonary embolism distractor had no reason and "60 tablets" was firm. Added a reason and softened to "up to 60". | low |

## Source fixes

- Caustic ingestion (tox-25): the citation credited Hoffman, Burns, Gosselin to PMID 32757536, which is the reply letter. The review article is PMID 32348645. URL corrected. Author line kept because the Europe PMC record confirms Hoffman RS, Burns MM, Gosselin S authored the review.
- Whole bowel irrigation (tox-43 q4): URL pointed to PMID 25636306, which does not resolve. The Thanacoody position paper update is PMID 25511637. URL corrected.
- Acetaminophen consensus (tox-45): URL pointed to PMID 36995718, which is an unrelated smoking initiation paper. The Dart et al consensus statement is PMID 37552484. URL corrected.
- Cannabis (tox-30): the CFP article is authored Zwiebel H, Greenky D, Goldman RD. Citation expanded from Goldman alone.
- Added source ecbc-missed-oat (Emergency Care BC missed OAT doses clinical summary, Kestler et al, 2024) for tox-46 q4.

## Key changes

- tox-25 q2: kind single to menu, key changed from index 4 (None as a single option) to correct [5] (None in a menu). Reason: the app does not render a None instruction for a single, so the intended reading needed the menu format. Same clinical answer.
- tox-33 q3: kind single to menu, key from index 4 to correct [5]. Same reason and same clinical answer.
- tox-36 q3: key changed from "Hemolysis and tissue hypoxia" to "Dysrhythmia with lactic acidosis". Reason: hemolysis is not the anticipated complication of a rising methemoglobin fraction, tissue hypoxia with acidosis and dysrhythmia is.
- tox-28 q3: select changed from 3 to 4, key from [4,6,7] to [1,4,6,7], adding the chest radiograph. Reason: a film after intubation and vomiting confirms tube position and looks for aspiration, so its rejection was wrong.
- tox-46 q4: key changed from index 2 ("Observe for 3 hours after the dose") to a rebuilt option set keyed to "Notify his pharmacy and prescriber" (index 1). Reason: the 3 hour observation and 3 to 4 hour peak were not supported by a citable Canadian source, while pharmacy and prescriber notification is stated in the Emergency Care BC summary now cited.
- tox-48 q1 (extra): key changed from index 0 to index 3. Reason: the explanation identifies topical calcium gluconate gel as correct, so the key contradicted its own explanation. This was a straight key error.

## Sources verified

All confirmed via Europe PMC (EXT_ID lookups) and the named bodies. URLs verified where reachable.

- Ghannoum M et al. EXTRIP valproic acid. Clin Toxicol. 2015. https://pubmed.ncbi.nlm.nih.gov/25950372/ Thresholds confirmed: recommended VPA above 1300 mg/L (9000 umol/L), suggested above 900 mg/L (6250 umol/L), coma or respiratory depression, hyperammonemia, pH 7.10 or less. IHD preferred.
- Ghannoum M et al. EXTRIP carbamazepine. Clin Toxicol. 2014. https://pubmed.ncbi.nlm.nih.gov/25355482/ Recommended for refractory multiple seizures or life threatening dysrhythmia, suggested for prolonged coma or respiratory depression or rising level despite MDAC. IHD preferred, hemoperfusion or CRRT as alternatives. Continue MDAC.
- Calello DP et al. EXTRIP metformin. Crit Care Med. 2015. https://pubmed.ncbi.nlm.nih.gov/25860205/ Lactate above 20 mmol/L, pH 7.0 or less, shock, failure of supportive care, decreased consciousness. IHD preferred.
- Roberts DM et al. Methanol ECTR. Crit Care Med. 2015. https://pubmed.ncbi.nlm.nih.gov/25493973/
- Canadian Antidote Guide in Acute Care Toxicology (CIUSSS de la Capitale-Nationale). Levocarnitine 100 mg/kg (max 6 g) loading, 15 mg/kg every 4 hours. Folic acid with acidosis 2 mg/kg (max 100 mg) every 4 to 6 hours. Methylene blue 1 to 2 mg/kg. Atropine 1 to 2 mg (max 3 mg) doubled to effect. https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes (via CIUSSSCN antidote monographs and Atlantic Canada Poison Centre mirror).
- NAC. PCC in Canada. Revised 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada INR above 5 gives 3000 units, single dose maximum 3000 units, IV vitamin K, repeat INR immediately after infusion.
- BCCSU methadone 2023 clinical summary. Missed doses: 1 to 3 same dose, 4 reduce to 50% or 30 to 40 mg whichever is higher, 5 or more restart at 30 to 40 mg. https://www.bccsu.ca/opioid-use-disorder/
- Emergency Care BC. Missed OAT doses. Kestler A et al. 2024. https://emergencycarebc.ca/clinical_resource/clinical-summary/missed-oat-doses/
- Neal JM et al. ASRA LAST checklist 2020. Reg Anesth Pain Med. 2021. https://pubmed.ncbi.nlm.nih.gov/33148630/ Reduced epinephrine 1 mcg/kg or less confirmed. tox-35 key of 50 mcg for 52 kg is within this.
- Remaining citations verified as correct: Starr 19857406, Tenenbein 19514875, Glatstein 23046209, Slaughter 24815348, McKee 25114621, Borron 17481777, Eddleston 17706760, Tormoehlen 24911841, Eggleston 27140747, Finkelstein 20586571, Enjalbert 12475187, Penninga 26096314, Traub 14695412, O'Grady 2490426, Wesson 12924748, Rosenson 22999778, Johansen 29316226.

## Needs physician decision

- tox-39 q2 keys immediate intubation for a suspected GHB exposure (deeply unresponsive, snoring, RR 10, sat 92%). This is defensible and the distractor reasons are true, so no edit was made. A physician may wish to confirm whether the batch should also offer a positioning and observation pathway. No defect recorded. The GHB SAMP cites Goldfrank only. A physician may prefer to add Chin RL et al, Clinical course of GHB overdose, Ann Emerg Med 1998 (PMID 9624311), which supports the abrupt recovery and bradycardia teaching.
- tox-27 q1 deliberately omits sodium thiosulfate from the cyanide menu, per the writer. The key (hydroxocobalamin plus high concentration oxygen) is correct and no listed option is a second defensible answer, so this is acceptable as written. Confirm the omission is acceptable for the exam.

## Overlap with the wider bank

Checked the whole bank with grep for each scenario and teaching point. Toxicology overlaps s18 (tox-01 to tox-15), s49 seizures, s32 loc, s07 loc, s09 ems, s51 sob, s04 burns, s21 airway, s08 delirium, s22 analgesia. Findings:

- Bupropion: s49 seizures tox-18 tests seizure management and QRS after bupropion XL. s53 tox-16 tests delayed seizure risk factor, monitoring duration, QRS treatment and screening. Different key features and different questions, but the QRS bicarbonate teaching point is shared. Acceptable, flagged low.
- Organophosphate: s49 seizures and s09 ems and s13 both cover OP cholinergic crisis and decontamination. s53 tox-28 overlaps the decontamination and atropine teaching closely. Distinct stems and questions, but the teaching point recurs. Flagged low for physician awareness.
- Methamphetamine agitation and hyperthermia: s08, s21, s22 cover stimulant agitation and cooling. s53 tox-40 overlaps the cooling and rhabdomyolysis teaching. Distinct case. Flagged low.
- GHB: s32 loc and s49 both key GHB coma with supportive care. s53 tox-39 keys airway management instead, a different decision. Acceptable.
- Hydrofluoric acid: s04 burns covers HF burn and calcium gluconate and systemic hypocalcemia. s53 tox-26 and the extra tox-48 repeat this teaching almost exactly (the extra tox-48 is a near duplicate of tox-26 with the same stem wording). If both tox-26 and tox-48 are kept, the HF teaching appears three times across the bank. Recommend the physician keep only one HF SAMP in s53. Flagged medium.
- Methemoglobinemia from a local anesthetic: s51 sob (benzocaine after endoscopy) and s22 both cover this. s53 tox-36 keys the same co-oximetry and methylene blue teaching. Distinct stem. Flagged low.
- Quetiapine: s21 airway and s08 use quetiapine. s53 tox-37 and the extra tox-49 are the same stem and questions (tox-49 is a near duplicate of tox-37). Recommend keeping only one. Flagged medium.

Note: tox-48 duplicates tox-26 and tox-49 duplicates tox-37. They sit in review-extra.ts as candidates. The duplicate stem test did not fire because the extras are not exported into SAMPS. If any extra is promoted, the physician should drop its in-batch twin.

## Summary

Fixes by category:
- Key errors (keyed answer wrong or contradicted by its own explanation): tox-36 q3, tox-48 q1 (extra). Two.
- Threshold and dose accuracy against Canadian guidance and EXTRIP: tox-18 q2, tox-19 q1 and q2, tox-20 q1 and q4, tox-21 q4, tox-41 q1, tox-46 q2. Nine.
- False or weak distractor reasons: tox-16 q3, tox-24 q2, tox-31 q2, tox-37 q1, tox-44 q3, tox-49 q1 (extra), plus smaller reason fixes in tox-30 q4, tox-31 q4, tox-36 q4, tox-38 q1, tox-44 q1 and q2, tox-48 q4 (extra), tox-49 q3 (extra).
- Keyed drug not fitting the teaching: tox-17 (gliclazide to glyburide).
- Stem facts missing or invented: tox-16 q3 (weight), tox-28 (occupational exposure detail), tox-49 q2 (invented lactate removed).
- Format and app rendering (None single to menu): tox-25 q2, tox-33 q3.
- Provincial practice not named: tox-46 stem.
- Source citation errors: tox-25, tox-43, tox-45, tox-30, plus rebuilt source for tox-46 q4.

Most serious errors:
1. tox-48 q1 (extra) keyed the wrong option outright (magnesium soaks) against its own explanation naming calcium gluconate gel.
2. tox-36 q3 keyed hemolysis as the anticipated complication of methemoglobinemia, which is not the expected course.
3. tox-17 keyed a sulfonylurea (gliclazide) whose pharmacology contradicts the explanations that justify the answers.
4. tox-18 stem numbers did not meet the EXTRIP metformin criteria the key relied on.
5. tox-46 q2 stated the missed methadone dose rule incorrectly and q4 keyed an unsourced observation time.

SAMP ids where a defect was found: tox-16, tox-17, tox-18, tox-19, tox-20, tox-21, tox-24, tox-25, tox-26, tox-28, tox-30, tox-31, tox-33, tox-34, tox-36, tox-37, tox-38, tox-41, tox-44, tox-46, tox-48, tox-49. Source URL errors also touched tox-43 and tox-45.

Every SAMP remains reviewed: false pending physician sign-off.
