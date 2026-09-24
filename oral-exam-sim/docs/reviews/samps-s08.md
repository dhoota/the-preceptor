# SAMP review: batch s08

Topics: dvt-pe and delirium-agitation. 30 SAMPs, 116 questions.
Reviewer stance: adversarial emergency physician, thrombosis and CCFP-EM SAMP examiner. All SAMPs stay `reviewed: false`.

## Summary

The batch was clinically sound. Every Wells, YEARS, age adjusted D-dimer and sPESI calculation was recomputed and is correct. No dose was wrong. The main problem was the answer keys, not the medicine.

The matching engine checks negation only before a phrase. Many unacceptable and dangerous lists named a bare drug ("warfarin", "doac", "haloperidol", "flumazenil"). A correct candidate who added a contrast after the drug, such as "enoxaparin 80 mg SC q12h, warfarin contraindicated", would have scored zero. In some questions the flag was dangerous and zeroed the whole question. Word matching also ignores order, so even dose based phrases can collide ("apixaban 10 then 5 mg, warfarin not needed" matched "warfarin 5"). I rewrote these flags as action or dose phrases that a correct candidate will not write ("start warfarin", "give flumazenil", "haloperidol 0.5"). Where no safe phrase existed I removed the flag and moved the teaching into the explanation. In a question that asks for one answer, a wrong answer scores zero whether or not it is flagged, so removing a flag only protects correct answers. Every change was probed with sample candidate lines.

Other fixes: rivaroxaban 10 mg is now accepted for superficial vein thrombosis. UFH and once daily enoxaparin are accepted in pregnancy. The CrCl 18 explanation was rewritten with more nuance. The alteplase explanation had a heparin statement that contradicts ESC. Ontario is now stated wherever Ontario law is tested, and explanations note that other provinces differ. The head injury SAMP now cites NICE NG232 in place of CCSMH. Three delirium questions were remapped to delirium key feature 2.

## Engine limitation: flags changed for post negation

| SAMP | Question | Before | After |
|---|---|---|---|
| dvt-pe-01 | q5 | Unacceptable "dabigatran", "edoxaban", "warfarin", "asa" | "dabigatran 150", "edoxaban 60", "start dabigatran/edoxaban", "start warfarin", "warfarin alone", "asa 81/325" |
| dvt-pe-04 | q3 | "warfarin", "vka" | "start warfarin", "warfarin inr", "bridge to warfarin", "warfarin alone" |
| dvt-pe-05 | q2 | Dangerous "warfarin", "coumadin". Unacceptable bare DOAC names | Dangerous "start warfarin", "warfarin 5/10", "warfarin inr", "bridge to warfarin", "warfarin overlap". DOAC flag uses "start doac/apixaban/rivaroxaban", "apixaban 10", "rivaroxaban 15/20". The DOAC flag stays unacceptable, not dangerous |
| dvt-pe-07 | q1, q2 | Dangerous CTPA flag on every CT phrase ("CTPA contraindicated" hit it) | Removed. The explanations now say why CT is wrong |
| dvt-pe-07 | q3 | Bare LMWH and DOAC names | Full dose regimens only ("enoxaparin 1 mg/kg bid", "dalteparin 200", "rivaroxaban 15/20", "apixaban 10", "dabigatran 150", "edoxaban 60") |
| dvt-pe-09, dvt-pe-13 | q3, q2 | Bare DOAC names | "start doac/apixaban/rivaroxaban" and loading doses. "apixaban 5" was dropped because "5 days of LMWH overlap" collides with it |
| dvt-pe-03 | q2 | Unacceptable "500" also caught "1000 (500 if items present)" | Removed |
| delirium-agitation-01 | q1 | Unacceptable "memory" caught "acute onset, unlike gradual memory loss" | Removed. The explanation covers it |
| delirium-agitation-04 | q2 | "haloperidol" | "haloperidol alone", "haloperidol monotherapy", "antipsychotic alone" |
| delirium-agitation-05 | q3 | Bare benzodiazepine names | Dose or action phrases that do not collide with low dose antipsychotic answers |
| delirium-agitation-06 | q3 | Dangerous "iv push" caught the correct "slow IV push over 5 minutes". "bolus 2 mg" caught "1 mg bolus, max 2 mg" | Rapid push flag removed. The explanation now stresses giving it over at least 5 minutes. Neostigmine and haloperidol flags narrowed |
| delirium-agitation-07 | q3 | "glucagon" | "repeat glucagon", "glucagon 1 mg", "glucagon infusion", "give glucagon" |
| delirium-agitation-09 | q3 | "charcoal" caught "hemodialysis, charcoal does not bind lithium" | "give charcoal", "activated charcoal 50", "charcoal 1 g/kg" |
| delirium-agitation-10 | q1, q2, q4 | MRI, dangerous LP ("CT before any LP" hit it), vitamin K, plasma, protamine, idarucizumab, two physician consent | Removed. The explanations name each wrong answer |
| delirium-agitation-11 | q3, q4 | Bare "haloperidol", "droperidol", "physical restraint". Dangerous bare "bromocriptine" | Restraint flag is now "restraint alone". Antipsychotic flag removed, with the teaching kept in the explanation. Bromocriptine and dantrolene flags use "give/start" or dose phrases |
| delirium-agitation-12 | q2 | Dangerous bare "haloperidol" after a stem that invites "haloperidol contraindicated" | Dangerous flag uses "give/start haloperidol" and haloperidol or droperidol doses. Risperidone and olanzapine flags are dose based |
| delirium-agitation-13 | q1 | Dangerous bare "flumazenil" zeroed "naloxone 0.4 mg, flumazenil contraindicated" | "give flumazenil", "administer flumazenil", "trial of flumazenil", "flumazenil 0.5" |
| delirium-agitation-14 | q2 | "oral acyclovir" caught "IV acyclovir, switch to oral later" | "valacyclovir 1", "valtrex", "acyclovir 800", "famciclovir" |
| delirium-agitation-15 | q2 | "normal saline", "0.9%", "fluid restriction" caught correct lines that mentioned them | "normal saline 1 l/500", "fluid restriction alone/only" |

Remaining risk: a candidate who answers only with a bare drug name ("Warfarin", "Flumazenil") is no longer labelled dangerous. In one answer questions they still score zero. In delirium-agitation-13 q1 (three answers), a bare "flumazenil" line now scores zero for that line but no longer zeroes the whole question. A tokenizer or engine fix for post negation (for example "contraindicated" or "not" after the phrase) would let these flags be restored. That fix is outside this batch.

## dvt-pe

| SAMP | Verdict | Notes |
|---|---|---|
| dvt-pe-01 | Corrected | Wells DVT 1 (deep vein tenderness only) is correct. The apixaban and rivaroxaban loading regimens are correct. Added "eliquis 10mg" and "xarelto 15mg". Flags rewritten (see the table above) |
| dvt-pe-02 | Accurate | PERC fails on HR 104 and estrogen. Wells 1.5 with D-dimer 310 means no imaging |
| dvt-pe-03 | Corrected | YEARS items, the 1000 threshold with zero items, and the age adjusted cutoff of 740 (74 x 10) against a D-dimer of 690 are all correct. The "500" flag was removed |
| dvt-pe-04 | Corrected | Wells PE 9.5 (3 + 3 + 1.5 + 1 + 1) is correct. sPESI 2 (cancer, HR 112) is correct. SpO2 93% does not score. q3 now cites the Thrombosis Canada cancer guide and names Caravaggio in the text. q4 now cites the sPESI derivation paper. The Caravaggio source was dropped because it was no longer cited |
| dvt-pe-05 | Corrected | Enoxaparin 1 mg/kg q12h (78 kg, about 80 mg), dalteparin 200 units/kg daily or 100 units/kg q12h, and tinzaparin 175 units/kg daily are all correct. The SOGC guideline and the CFPC sample key both allow once or twice daily dosing. Now also accepts enoxaparin 1.5 mg/kg daily and IV UFH, which the CFPC sample key accepts. Warfarin stays dangerous. DOACs are unacceptable, not dangerous |
| dvt-pe-06 | Accurate | sPESI 2 (chronic cardiopulmonary disease, SpO2 86%). HR 108 does not reach the sPESI threshold of 110 but is still accepted as a clinical finding. CT is preferred over V/Q in bullous COPD |
| dvt-pe-07 | Corrected | CrCl 18: UFH 80 units/kg then 18 units/kg/h is correct (58 kg gives about 4600 units then 1040 units/h). Added "heparin 80", "heparin bolus" and "heparin nomogram" to catch answers that do not say "unfractionated". The explanation now says fairly that renally adjusted enoxaparin (1 mg/kg daily) is labelled below 30 mL/min and tinzaparin has data down to about 20 mL/min, but at 18 both are second choices that need anti-Xa monitoring. Canadian labelling does not recommend apixaban below 25 mL/min, although some US guidance uses it in dialysis. Only full dose LMWH and standard DOAC regimens are flagged, not reduced doses |
| dvt-pe-08 | Corrected | Alteplase 100 mg over 2 h, accelerated 0.6 mg/kg over 15 min (maximum 50 mg), and off label tenecteplase are accepted. Added "alteplase 90" (for 10 mg then 90 mg) and "rt pa 100". Before, the explanation said to stop UFH during alteplase as a rule. ESC 2019 allows UFH to continue during rtPA, so it now says "practice varies, follow local protocol". Fluids of 500 mL or less and norepinephrine are correct |
| dvt-pe-09 | Corrected | sPESI 0 supports outpatient care. Carbamazepine rules out DOACs (a strong CYP3A4 and P-gp inducer). LMWH or warfarin is correct. The DOAC flag was rewritten |
| dvt-pe-10 | Accurate | Intermediate high risk (RV/LV 1.3 and troponin) is correct. The key is admit and anticoagulate, with no routine lysis (PEITHO). Rescue lysis after decompensation is correct |
| dvt-pe-11 | Corrected | Fondaparinux 2.5 mg SC daily for 45 days is correct. Thrombosis Canada lists rivaroxaban 10 mg PO daily for 45 days (SURPRISE trial) and prophylactic or intermediate dose LMWH, so both are now accepted. Specific LMWH doses were added to the LMWH item. The CALISTO source was replaced by SURPRISE (verified) because q4 now teaches both drugs |
| dvt-pe-12 | Accurate | Wells DVT 4 (cast, surgery within 12 weeks, calf over 3 cm, tenderness) is correct |
| dvt-pe-13 | Corrected | Triple positive APS gets warfarin with a target INR of 2 to 3 (TRAPS). The DOAC flag was rewritten |
| dvt-pe-14 | Corrected | Wells PE 6 (3 + 1.5 + 1.5) is correct. q4 remapped from sob#4 to dvt-pe#7, because it asks about the admission decision from objective data |
| dvt-pe-15 | Corrected | Wells DVT 0 (1 + 1 - 2) is correct. q4 (two point compression sites) remapped from dvt-pe#2 (examination) to dvt-pe#4 (test choice) |

Key feature coverage for dvt-pe: 1 (6 questions), 2 (7), 3 (7), 4 (9), 5 (5), 6 (8), 7 (9). All are covered.

## delirium-agitation

Key feature balance: 21 of 57 questions were mapped to other topics. Three were remapped because they test delirium key feature 2 ("treat reversible causes"):

- delirium-agitation-04 q3 (dextrose and thiamine): loc#2 changed to delirium#2.
- delirium-agitation-08 q4 ("treatments for the cause of his delirium"): shock#4 changed to delirium#2.
- delirium-agitation-10 q1 (CT for a structural cause): loc#1 changed to delirium#2.

Now 18 of 57 questions map to other topics. Own key features: 1 (6 questions), 2 (11 questions in 9 SAMPs), 3 (6), 4 (8), 5 (8). Key feature 2 is now the focus of 9 SAMPs, one above the spec guide of 8. I accepted this because the brief does not strictly cap balance. The remaining cross mapped questions (toxicology antidotes, tests and enhanced elimination, encephalitis antiviral, status epilepticus, hyponatremia, hip block) genuinely test those topics' key features.

| SAMP | Verdict | Notes |
|---|---|---|
| delirium-agitation-01 | Corrected | Removed the "memory" flag. Removed bare "catheter" from the "avoid tethers" item, because "insert catheter" was getting credit. Added "lighting" |
| delirium-agitation-02 | Corrected | The Form 1 Box A criteria, the 7 day exam and Form 42 are correct. The stem already states Ontario. Added a note that other provinces differ |
| delirium-agitation-03 | Accurate | Ketamine 4 to 5 mg/kg IM (360 to 450 mg for 90 kg), midazolam 5 to 10 mg IM and droperidol are correct. See the open questions about the PRMA citation |
| delirium-agitation-04 | Corrected | Diazepam, lorazepam and phenobarbital doses are correct. q3 remapped. The haloperidol flag was narrowed. The CRISM citation was corrected ("Substance Matters", official title) and a URL added |
| delirium-agitation-05 | Corrected | Haloperidol 0.25 to 0.5 mg (up to 1 mg), risperidone, quetiapine and olanzapine at low doses are correct. The benzodiazepine flag was rewritten |
| delirium-agitation-06 | Corrected | Physostigmine 0.5 to 1 mg IV over at least 5 minutes, repeated, is correct. QRS 88 ms allows it. The flag fixes are listed above |
| delirium-agitation-07 | Corrected | The D50W key text is now 20 to 50 mL (10 to 25 g), in line with Diabetes Canada. Octreotide is correct. The glucagon flag was narrowed |
| delirium-agitation-08 | Corrected | Added "You work in Ontario" to the stem. HCCA capacity (understand and appreciate) is correct. The spouse ranks above adult children. A Form 1 does not authorize treatment. The s.25 emergency conditions and the prior capable wish exception are correct. The explanations now name s.25 and note provincial differences. q4 remapped |
| delirium-agitation-09 | Corrected | The EXTRIP criterion (lithium above 4.0 with impaired kidney function) is correct. Charcoal flag narrowed. Ontario added to the q4 prompt |
| delirium-agitation-10 | Corrected | CCSMH was replaced by NICE NG232 (2023, verified) for CT and for observation trending. NICE advises CT within 1 hour for GCS below 15 after head injury and lowers the threshold for anticoagulated patients. The explanation notes that the Canadian CT Head Rule excluded anticoagulated patients, so it does not apply. PCC 2000 units or 25 to 50 units/kg, or andexanet where available, is correct. Ontario was added. Several flags were removed (see above) |
| delirium-agitation-11 | Corrected | The Hunter criteria are correct. Cyproheptadine 12 mg then 2 mg every 2 h is correct, and the regimen is now stated in the explanation. Bromocriptine stays dangerous with safe phrases |
| delirium-agitation-12 | Corrected | Quetiapine 12.5 to 25 mg in Parkinson disease dementia, with haloperidol dangerous, is correct. The flags were rewritten so "quetiapine, haloperidol contraindicated" scores. Removed bare "transfer" from an item. Ontario added to q4 |
| delirium-agitation-13 | Corrected | Naloxone is a reasonable answer (fentanyl contamination). Flumazenil stays dangerous with safe phrases, and the explanation adds benzodiazepine dependence |
| delirium-agitation-14 | Corrected | Acyclovir 10 mg/kg IV q8h (620 mg) is correct. Lorazepam 4 mg, midazolam 10 mg IM and diazepam 10 mg are correct. The oral antiviral flag was narrowed |
| delirium-agitation-15 | Corrected | 3% saline 100 mL over 10 minutes or 150 mL over 20 minutes, an initial rise of 4 to 6 mmol/L, and a limit of 8 mmol/L in 24 h for high risk are correct. The flags were narrowed. Bare "thiazide" and "citalopram" were removed from the "stop drugs" item, because "continue citalopram" was getting credit. Ontario and Form G added to q4 |

## Sources verified

- SURPRISE trial, Lancet Haematol 2017 (added): https://pubmed.ncbi.nlm.nih.gov/28219692/
- Thrombosis Canada, superficial thrombophlebitis guide. It lists fondaparinux 2.5 mg or rivaroxaban 10 mg daily for 45 days: https://thrombosiscanada.ca/clinical_guides/pdfs/90_33.pdf
- ACEP severe agitation clinical policy. Published in Ann Emerg Med 2024, volume 83, pages e1 to e30, approved October 2023. The year was corrected from 2023 to 2024: https://pubmed.ncbi.nlm.nih.gov/38105109/
- NICE NG232 Head injury, 2023 (added): https://www.nice.org.uk/guidance/ng232
- CRISM Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder, 2023. The organisation name was corrected: https://crism.ca/alcohol-use-disorder/
- SOGC VTE in pregnancy (Chan 2014, JOGC) is confirmed as real. It allows once or twice daily LMWH.
- Recognised as real without change: ESC 2019 PE, PERC (Kline 2008), YEARS (2017), ADJUST-PE (2014), pregnancy adapted YEARS (2019), Wells 2003, sPESI (2010), Hestia (2011), TRAPS (2018), CAM (1990), Inouye Lancet 2014, CIWA-Ar (1989), Hunter (2003), Boyer NEJM 2005, EXTRIP lithium (2015), IDSA encephalitis (2008), RAMPART (2012), European hyponatremia guideline (2014), DLB consortium (2017), SSC 2021, Diabetes Canada 2018 hypoglycemia, Project BETA (2012) and the Cochrane review on nerve blocks for hip fracture. Ontario statute citations (HCCA, MHA, PRMA) are in standard form. Thrombosis Canada guides are cited by organisation and topic without a year.
- Removed as no longer cited: Caravaggio and CALISTO (both real).

## Originality

The CFPC sample has a pregnancy VTE case with an LMWH dosing question. dvt-pe-05 covers the same teaching point, but its scenario, gestation, weight and question flow are different. No other overlap was found.

## Open questions for the physician

1. dvt-pe-07 q3: should renally adjusted enoxaparin (1 mg/kg daily) or tinzaparin be credited at CrCl 18? I kept UFH as the only accepted answer, in line with the key feature wording ("avoiding LMWH in renal failure"). I did not flag the reduced doses.
2. dvt-pe-05 q2: is it acceptable to credit IV UFH as an initial answer in a stable 29 week patient? The CFPC sample key credits it.
3. delirium-agitation-03 q3 and delirium-agitation-13 q4 cite the Ontario Patient Restraints Minimization Act for restraint monitoring and post event review in stems that are not set in Ontario. Consider a national restraint or monitoring source.
4. delirium-agitation-03 q1: should haloperidol with lorazepam IM be credited for sympathomimetic agitation? It is not accepted at present.
5. delirium-agitation-10 q2: andexanet is accepted "where available". Please confirm current Canadian availability and your local PCC dose (fixed 2000 units against 25 to 50 units/kg).
6. Engine: consider detecting negation after a phrase ("X contraindicated", "X is not indicated"). That would let bare drug dangerous flags return.

## Checks

- `npx tsc --noEmit -p . | grep samps/s08`: no errors.
- `SAMP_BATCH=s08 npx vitest run tests/samps.test.ts`: 94 of 94 passed.
