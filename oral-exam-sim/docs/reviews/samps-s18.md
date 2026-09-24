# Review of SAMP batch s18: Toxicology

Reviewer: adversarial review against current Canadian and international guidance. File reviewed: `src/samps/s18/tox.ts` (15 SAMPs, 69 questions). All SAMPs keep `reviewed: false`. Ids are unchanged.

The writer's temporary files (`tmp.vitest.config.ts`, `tmp18.test.ts`) were already gone from `src/samps/s18`. The folder holds only `index.ts` and `tox.ts`.

Checks after edits: `tsc` shows no s18 errors. `SAMP_BATCH=s18 vitest` passes 49 of 49.

## Verdicts and changes

### tox-01 Acetaminophen. Corrected

Recomputed: 40 x 500 mg is 20 g, or 333 mg/kg in 60 kg. 1450 µmol/L divided by 6.62 is 219 mg/L. The Canadian 4 hour treatment line of 1000 µmol/L (150 mg/L, 993 µmol/L exactly) is correct. The level is below the 2023 high risk line (about 300 mg/L), so standard dosing is right.

- q2 update. Before: "It is now 2200 h. The 4 hour level, drawn at 2300 h, returns at..." After: "arrived at 2200 h. The 4 hour level, drawn at 2300 h, is...". The old wording read as a future result.
- q2 keyed option. Before: only the 3 bag regimen. After: "A full 300 mg/kg IV course over about 21 hours", as 3 bags or the equivalent 2 bag regimen. Both are now accepted.
- q3 stop criteria. Before: acetaminophen "very low or undetectable", INR with no threshold. After: acetaminophen below about 66 µmol/L (10 mg/L), INR below 2.0, ALT normal or clearly falling, patient well. This matches the 2023 US and Canada consensus. Explanation rewritten.
- q4 King's College criteria and lactate thresholds (3.5 mmol/L early, 3.0 mmol/L after resuscitation) are correct. The lactate values come from Bernal et al (Lancet 2002), not the 1989 O'Grady paper. Left as is because each question may cite one source. See open questions.

### tox-02 Salicylate. Corrected

Recomputed anion gap 141 minus 101 minus 16 is 24. 4.2 mmol/L is about 58 mg/dL.

- q4 explanation. Before: said EXTRIP "suggests" dialysis for failure of standard therapy. After: failure of standard therapy is a recommendation (1D). Only pH 7.20 or lower is a suggestion. Thresholds 7.2 mmol/L, and 6.5 mmol/L with impaired kidney function, confirmed.
- q4 level key. Before: matched any line with "salicylate level" or "high level", so "salicylate level above 5" scored. After: requires 7.2, 100 mg/dL or similar.
- Acetazolamide as dangerous is fair. It causes systemic acidemia and drives salicylate into the CNS.
- q3 intubation key (bicarbonate bolus, most experienced operator, match his high minute ventilation) is correct. Mapping to airway key feature 4 (special contexts) is fair.

### tox-03 Tricyclic. Corrected

Bicarbonate 1 to 2 mmol/kg (65 to 130 mmol at 65 kg) is right. AHA 2023 gives bicarbonate a class 1 and lidocaine a class 2b recommendation. Procainamide as dangerous is fair. Phenytoin as dangerous is defensible (sodium channel blocker, worsened dysrhythmias in animal models). Physostigmine taught as contraindicated with a QRS of 146 ms is correct.

- q5 key item. Before: "Synchronized cardioversion if pulseless or peri arrest". After: "Synchronized cardioversion for unstable VT, or defibrillation if pulseless". Pulseless VT is defibrillated, not synchronized.

### tox-04 Calcium channel blocker. Accurate

High dose insulin 1 unit/kg bolus then 1 unit/kg/h, titrated up to 10 unit/kg/h, with dextrose and potassium, matches St-Onge 2017 and AHA 2023 (class 1). Calcium gluconate 3 g or calcium chloride 1 g is within the consensus range. Charcoal 50 g and whole bowel irrigation 1.5 to 2 L/h for sustained release verapamil are right. No changes.

### tox-05 Digoxin. Corrected

Recomputed: 4.1 nmol/L divided by 1.28 is 3.2 ng/mL. 3.2 x 52 / 100 is 1.66 vials.

- q2 level item. Before: "above 15 nmol/L at any time or above 13 nmol/L at 6 hours". The classic thresholds are 15 ng/mL at any time and 10 ng/mL at 6 hours. 15 ng/mL is about 19 nmol/L, so "15 nmol/L" was a unit slip. After: "After an acute ingestion, 13 nmol/L (10 ng/mL) or more at 6 hours, or about 19 nmol/L (15 ng/mL) or more at any time".
- q2 potassium item. After: labelled as a threshold validated in acute poisoning. Explanation now says the level and dose thresholds apply to acute poisoning, and that chronic toxicity is judged clinically.
- q3 keyed option. Before: "2 vials". After: "1 to 2 vials IV over 30 minutes, then reassess". Canadian poison centre protocols give chronic toxicity 1 vial at a time. The explanation now shows the SI to ng/mL conversion.
- q5 unacceptable. Before: "digoxin level" was a match phrase, so "free digoxin level", which is a correct answer, was rejected. After: matches "total digoxin", "serial digoxin", "repeat digoxin".
- Empiric Fab for bidirectional VT (q4) is correct.

### tox-06 Toxic alcohols. Corrected

Recomputed: 2 x 138 + 6 + 5 + 1.25 x 8 is 297. Gap 331 minus 297 is 34. Without ethanol it is 44. Anion gap 138 minus 98 minus 7 is 33. Fomepizole 15 mg/kg is 1125 mg. Ethanol target 22 mmol/L is 100 mg/dL.

- "Osmolar gap" changed to "osmolal gap" throughout this SAMP, since measured osmolality in mmol/kg is used. Match phrases accept both.
- q3 explanation. Added the increase to 15 mg/kg every 12 hours after 48 hours.
- q4 key rewritten to EXTRIP 2023 (Ghannoum et al, Crit Care 2023). Before: "pH at or below 7.25 or anion gap above 27". The pH 7.25 threshold is not an EXTRIP criterion. After: anion gap above 27 mmol/L or glycolate above 12 mmol/L. Also ethylene glycol above 50 mmol/L or osmolal gap above 50, and coma, seizures or kidney injury. Explanation rewritten. He meets criteria on anion gap and kidney injury.
- q5 calcium item. Before: any line with "calcium" scored. After: requires hypocalcemia or seizures, since routine calcium is not given.
- Citation. Before: "EXTRIP workgroup. Recommendations for extracorporeal treatment in ethylene glycol poisoning." After: the full verified 2023 citation.

### tox-07 Lithium. Corrected (explanation only)

The key (nephrology for hemodialysis at 2.9 mmol/L) is defensible. EXTRIP 2015 recommends dialysis for a decreased level of consciousness at any level, and her GCS is 13. It also suggests dialysis for significant confusion or when clearance to below 1.0 mmol/L will take over 36 hours, which is likely with a creatinine of 188 µmol/L. The explanation now states the recommended thresholds (above 4.0 mmol/L with impaired kidney function) and the suggested ones (above 5.0 mmol/L) and why she qualifies.

### tox-08 Opioid. Accurate

Naloxone 0.04 to 0.1 mg IV titrated to breathing, the St. Paul's early discharge criteria, COWS items and the harm reduction key are correct. Starting buprenorphine at objective moderate withdrawal ("for example a COWS of about 12 or more") matches common Canadian practice. Low dose starts are mentioned. No changes.

### tox-09 Sympathomimetic. Corrected

- q2 beta blocker. Before: dangerous. After: unacceptable, not dangerous. The 2023 AHA update calls beta blocker safety in cocaine toxicity controversial and supports benzodiazepines first, then vasodilators (class 2a). Harm is not established well enough to zero the whole question. The answer still earns no credit.
- q2 and q3 explanations. Removed the flat statement that beta blockers cause unopposed alpha stimulation. They now cite the AHA position. The q3 key (nitroglycerin and phentolamine) is unchanged and still best.

### tox-10 Serotonin toxicity. Corrected

Cyproheptadine 12 mg then 2 mg every 2 hours is correct. Bromocriptine and succinylcholine as dangerous are fair.

- q3 unacceptable. Before: "restraint" matched "chemical restraint with benzodiazepines", which is a correct answer. After: matches only "physical restraint" or "mechanical restraint".

### tox-11 Anticholinergic. Corrected

Physostigmine 0.5 to 1 mg IV over at least 5 minutes, repeated after 10 to 15 minutes, is correct for this 62 kg teen.

- q1. Removed the key item "mumbling speech", because the stem already gives it and the question asks for further findings.

### tox-12 Carbon monoxide. Corrected

Hyperbaric oxygen in pregnancy is commonly considered at a lower carboxyhemoglobin (about 15 to 20%) or with fetal distress. The keyed option (high flow oxygen and an early call to a hyperbaric centre) is defensible.

- q4 carboxyhemoglobin item. Before: "carboxyhemoglobin above" matched any threshold, such as 15%. After: requires 25%.

### tox-13 Iron. Corrected

Recomputed: 12 x 60 mg is 720 mg elemental, or 48 mg/kg in 15 kg. 90 µmol/L is about 500 µg/dL. Deferoxamine up to 15 mg/kg/h and whole bowel irrigation at 500 mL/h for ages 9 months to 6 years (1 L/h for 6 to 12 years, 1.5 to 2 L/h for 12 years and up) are correct.

- q4 serum iron key. Before: matched any line with "90", "500" or "iron level". After: requires the threshold with iron or units.
- q4 key feature. Changed from 7 to 6, since deferoxamine chelation for iron is named in key feature 6 and the question is about indications, not testing.

### tox-14 Pediatric exploratory ingestion. Corrected

D10W 2 to 5 mL/kg (24 to 60 mL) and octreotide 1 mcg/kg (about 12 mcg) every 6 to 8 hours are correct.

- q3 dextrose key. Added D25 1 to 2 mL/kg as acceptable (0.25 to 0.5 g/kg), which PALS allows at this age.
- D50 in a toddler stays unacceptable but not dangerous. It is the wrong concentration and risks vein injury, but it still treats life threatening hypoglycemia. Zeroing the whole question seems too harsh.

### tox-15 Alcohol withdrawal. Corrected

Diazepam 10 to 20 mg IV every 5 to 10 minutes and escalation to phenobarbital or propofol after 200 mg of diazepam are correct.

- Title. Before: "two days after admission". He is still in the ED. After: "Tremor and sweating while awaiting a bed".
- q4 source changed from the BCCSU guideline to Goldfrank, because the BCCSU guideline focuses on outpatient care and does not cover benzodiazepine resistant withdrawal. Goldfrank added to the sources.

## Key feature coverage

All 8 tox key features are tested. Question counts: KF1 7, KF2 8, KF3 3, KF4 8, KF5 8, KF6 7, KF7 7, KF8 5. The secondary topic questions each test their named key feature: airway 4, arrhythmia 2 and 6, seizures 4, shock 8, chest pain 1, environmental 2, delirium 2 and 4, and loc 2.

## Sources verified

Checked on PubMed (titles, authors, journals and years all match):

- Dart RC et al. JAMA Netw Open 2023 (PMID 37552484)
- O'Grady JG et al. Gastroenterology 1989 (PMID 2490426)
- Juurlink DN et al. Ann Emerg Med 2015 (PMID 25986310)
- Decker BS et al. Clin J Am Soc Nephrol 2015 (PMID 25583292)
- Ghannoum M et al. Crit Care 2023 (PMID 36765419), https://pubmed.ncbi.nlm.nih.gov/36765419/
- Lavonas EJ et al. Circulation 2023 (PMID 37721023), https://www.ahajournals.org/doi/10.1161/CIR.0000000000001161
- St-Onge M et al. Crit Care Med 2017 (PMID 27749343)
- Thanacoody R et al. Clin Toxicol 2015 (PMID 25511637)
- Chan BS, Buckley NA. Clin Toxicol 2014 (PMID 25089630)
- Christenson J et al. Acad Emerg Med 2000 (PMID 11015242)
- Wesson DR, Ling W. J Psychoactive Drugs 2003 (PMID 12924748)
- Dunkley EJ et al. QJM 2003 (PMID 12925718)
- Boyer EW, Shannon M. N Engl J Med 2005 (PMID 15784664)
- Weaver LK et al. N Engl J Med 2002 (PMID 12362006)
- Manoguerra AS et al. Clin Toxicol 2005 (PMID 16255338)
- Sullivan JT et al. Br J Addict 1989 (PMID 2597811)

Organisation citations, accepted as real:

- CRISM national OUD guideline 2018, https://www.substanceuse.ca/crism-national-guideline-clinical-management-opioid-use-disorder
- BCCSU alcohol use disorder guideline 2019
- Canadian Antidote Guide
- UHMS
- Goldfrank

Digoxin Fab thresholds were checked against the Atlantic Canada Poison Centre protocol: https://atlanticcanadapoisoncentre.ca/digoxin-immune-fab-adult.html

No URLs are in the file. No invented sources were found.

## Originality

The scenarios are original. The CFPC sample SAMPs contain no toxicology case.

## Open questions for the physician

1. tox-01 q4: the lactate criteria come from Bernal et al (Lancet 2002), but the question cites only O'Grady 1989. Should lactate stay in the key, or should a Bernal source be added in place of O'Grady?
2. tox-05: confirm the Canadian Antidote Guide wording for Fab thresholds in chronic toxicity, especially whether hyperkalemia alone justifies Fab in chronic poisoning with kidney injury.
3. tox-08 q4: I could not find the COWS threshold for buprenorphine starts in the text of the 2018 CRISM guideline. The key says "about 12 or more" as an example. Please confirm this against your local protocol. Many EDs use 8 to 12. The 2024 CRISM update (CMAJ 2024) does not cover induction protocols.
4. tox-09: beta blocker is now unacceptable, not dangerous. Please confirm you agree.
5. tox-14: D50 in a toddler stays unacceptable, not dangerous. Please confirm.
6. tox-03 q4: phenytoin is flagged dangerous in tricyclic seizures. This is defensible, but please confirm.

## Summary

The batch is clinically sound. The most serious errors were:

- A digoxin level threshold written as 15 nmol/L when the source threshold is 15 ng/mL (about 19 nmol/L).
- Ethylene glycol dialysis criteria that used a non EXTRIP pH threshold.
- A lithium explanation that left out the recommended criteria.
- An unacceptable match on "digoxin level" that rejected the correct answer "free digoxin level".
- A restraint phrase that rejected "chemical restraint".
- Several key items loose enough to credit wrong thresholds.

The dangerous flag on beta blockers in cocaine toxicity was downgraded to unacceptable, in line with the 2023 AHA update. All doses and calculations were recomputed and are correct.
