# Signed-duplicate rebuild, group g04

File: `src/samps/s08/delirium-agitation.ts`. Eight SAMPs rebuilt. Each keeps its id, topic, question count, question kinds and key features. Each is now `reviewed: false` and version 2. All eight are held back in `src/samps/held-back/g04.json`.

No other SAMP in the file changed. A block by block comparison with the original file confirms that 01, 02, 03, 08, 10, 12 and 13 are identical. Source constants used only by the old texts were removed. New ones were added.

Checks: `SAMP_BATCH=s08 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 443 passed. `npx tsc --noEmit -p .` is clean.

## Rebuilds

### delirium-agitation-04 (cluster 45, keeper tox-15)

- Old story: a heavy drinker in delirium tremens with a head bruise. It keyed IV diazepam, thiamine and objective CIWA signs.
- New story: a 27-year-old man dependent on GHB. He dosed every 2 to 3 hours and ran out 36 hours ago. He has hallucinations, fever, tremor and sweating.
- Keyed decisions:
  - q1 (kf 2): other causes of his delirium. These include stimulant and serotonin toxicity, other sedative withdrawal, CNS infection and a head injury.
  - q2 (kf 4): with no IV, an IM benzodiazepine before any restraint, midazolam or lorazepam. IM diazepam and an antipsychotic alone are marked unacceptable.
  - q3 (kf 2): treatment of rhabdomyolysis with kidney injury (CK 21 400 U/L). This means IV fluid, urine output monitoring, continued benzodiazepine and phenobarbital if benzodiazepines fail.
  - q4 (tox 8): objective findings that mark withdrawal as severe enough for ICU care.
- Sources:
  - Marinelli et al., Arh Hig Rada Toksikol 2020 (PMC7837237, full text read).
  - Floyd, Wood and Dargan, Eur J Clin Pharmacol 2018 (PMC5808054, full text read).
  - Borelli et al., Am J Addict 2025 (abstract read).
- Simcheck top 5: old delirium-agitation-11 0.22, tox-15 0.22, pediatric-fever-11 0.20, tox-09 0.19, seizures-13 0.16.
- Decision search: GHB withdrawal is keyed nowhere. loc-44 keys GHB toxicity only. IM midazolam appears in delirium-agitation-03, a stimulant case with a ketamine key. tox-15 keys "phenobarbital IV" for resistant alcohol withdrawal. Here phenobarbital is one accepted item among six in q3, not the key of a question.

### delirium-agitation-05 (cluster 26, keeper analgesia-sedation-03)

- Old story: a man with dementia and a hip fracture, agitated and pulling at his IV. It keyed a nerve block, a low dose antipsychotic and alternatives to restraint.
- New story: an 86-year-old man with Alzheimer disease from long-term care who strikes aides during transfers. He has an acute gout flare of the knee and a rising creatinine after a furosemide increase.
- Keyed decisions:
  - q1 (kf 2): knee aspiration as the key test for a reversible cause, with blood cultures, electrolytes and a bladder scan.
  - q2 (analgesia 2): he refuses all tablets, so the key is an IM or IV glucocorticoid, with acetaminophen by suppository or IV, ice and rest. Ketorolac or another NSAID is unacceptable because of the kidney injury. Steroid into the joint is unacceptable while the culture is pending.
  - q3 (kf 4): haloperidol 0.25 to 1 mg IM or SC, or olanzapine IM, before restraint.
  - q4 (kf 3): measures that keep staff safe, such as analgesia before care, two staff and a clear exit.
- Sources:
  - CCSMH delirium guideline 2014 (PDF retrieved).
  - ACR gout guideline 2020 (PMC10563586, flare recommendations read).
  - Richmond et al., BETA de-escalation 2012 (record confirmed).
- Simcheck top 5: pediatric-fever-01 0.14, delirium-agitation-34 0.13, delirium-agitation-30 0.12, delirium-agitation-02 0.10, asthma-copd-08 0.09.
- Decision search:
  - The rebuild direction was dropped. Opioid accumulation with kidney injury is already keyed in analgesia-sedation-12 and delirium-agitation-26. Retention is keyed in 35 and constipation in 34.
  - A first gout draft keyed oral prednisone over an NSAID in kidney disease, plus ice. That repeated analgesia-sedation-45 (s22), so q2 was rewritten around a patient who cannot take tablets.
  - No SAMP keys arthrocentesis.

### delirium-agitation-06 (cluster 46, keeper tox-11)

- Old story: a diphenhydramine overdose. It keyed the ECG, an acetaminophen level and physostigmine.
- New story: a 16-year-old on a cough syrup dare. The bottle holds 240 mL with dextromethorphan 15 mg and acetaminophen 325 mg per 15 mL. He is dissociated, with nystagmus.
- Keyed decisions:
  - q1 (kf 1): delirium rather than a first psychosis. He took 4 mg/kg of dextromethorphan.
  - q2 (tox 7): an acetaminophen level at 4 hours or later. He took 5 200 mg, about 87 mg/kg. A urine drug screen is unacceptable.
  - q3 (tox 2): an IV benzodiazepine. Physostigmine is dangerous here because the patient is sweating and has bowel sounds.
- Sources:
  - Romanelli and Smith, J Am Pharm Assoc 2009 (abstract read: over 2 mg/kg is dissociative, naloxone inconsistent).
  - Dart et al., US and Canada acetaminophen consensus, JAMA Netw Open 2023 (abstract read).
- Simcheck top 5: old delirium-agitation-11 0.23, tox-11 0.17, old delirium-agitation-14 0.15, tox-16 0.13, tox-03 0.13.
- Decision search:
  - Dextromethorphan appears only in the tox-10 list of serotonergic drugs.
  - An acetaminophen level is also keyed in suicide-risk-04, pediatric-fever-09 and tox-11. Here the decision rests on a combination product.

### delirium-agitation-07 (cluster 6, lighter option not taken, other rebuilds cva-01 and seizures-05)

- Old story: combative sulfonylurea hypoglycemia. It keyed dextrose, collateral and octreotide.
- New story: a 79-year-old woman with 4 days of confusion and vomiting. She takes hydrochlorothiazide and a calcium supplement and has secretly chewed calcium carbonate antacids. This is calcium-alkali syndrome: calcium 3.58 mmol/L, bicarbonate 36 mmol/L and creatinine up from 78 to 186 umol/L.
- Keyed decisions:
  - q1 (kf 2): calcium, electrolytes, creatinine and a blood gas.
  - q2 (loc 3): collateral about over-the-counter antacids and supplements, and about symptoms of malignancy.
  - q3 (tox 4): IV saline, stopping the calcium, vitamin D and thiazide, and serial calcium for rebound hypocalcemia. Bicarbonate is unacceptable.
- Sources:
  - CCSMH 2014.
  - Medarov, Mayo Clin Proc 2009 (PMC2664604, treatment and history passages read).
- Simcheck top 5: loc-36 0.18 (hypercalcemia of malignancy, keys zoledronic acid), tox-24 0.16, abdominal-pain-26 0.16, gi-bleed-10 0.16, delirium-agitation-16 0.15.
- Decision search: calcium-alkali syndrome and antacid collateral are keyed nowhere.
- Two earlier drafts were abandoned:
  - Carbamazepine plus clarithromycin, the suggested direction, was dropped because tox-20 keys multiple-dose charcoal for carbamazepine.
  - A valproate hyperammonemia draft was dropped when simcheck found loc-34 (0.37, levocarnitine key).

### delirium-agitation-09 (cluster 47, keeper tox-07)

- Old story: chronic lithium toxicity. It keyed hemodialysis and a capacity question with the husband as substitute.
- New story: a 74-year-old on peritoneal dialysis with acyclovir neurotoxicity after full-dose valacyclovir for shingles. His son thinks he is being stubborn.
- Keyed decisions:
  - q1 (kf 1): delirium rather than intoxication or refusal.
  - q2 (tox 7): CT, then LP with CSF cell count and VZV PCR to exclude VZV encephalitis, plus potassium, urea and a blood gas.
  - q3 (tox 6): hemodialysis. More peritoneal exchanges are unacceptable, and IV acyclovir is dangerous.
  - q4 (kf 5, single, key still at index 2): under the Ontario HCCA, a partner of 6 years outranks an adult son. A wife living separate and apart does not qualify.
- Sources:
  - Brandariz-Nunez et al., J Clin Pharm Ther 2021 (abstract read).
  - Robertson et al., J Med Case Rep 2020 (abstract read).
  - Sadjadi et al., Am J Case Rep 2018 (abstract read).
  - HCCA s. 20 (hierarchy and definitions of spouse and partner, via a law firm summary quoting the statute. The e-Laws page did not render).
- Simcheck top 5: headache-38 0.15, pediatric-fever-01 0.13, seizures-42 0.13, pediatric-fever-20 0.13, loc-17 0.13.
- Decision search:
  - Acyclovir neurotoxicity is keyed nowhere. The closest neighbour is seizures-42, cefepime neurotoxicity in a hemodialysis patient that keys "stop cefepime and arrange dialysis". The drug, the teaching (PD does not clear the drug) and the other three questions differ.
  - No SAMP keys the rank of partner over child.
- The ethylene glycol direction was dropped because tox-06 already keys fomepizole and dialysis for ethylene glycol.

### delirium-agitation-11 (cluster 48, keeper tox-10)

- Old story: serotonin syndrome from sertraline and tramadol. It keyed the Hunter criteria, benzodiazepines and cyproheptadine.
- New story: a 23-year-old who smoked a synthetic cannabinoid sold as herbal incense, then seized and became combative, with kidney injury.
- Keyed decisions:
  - q1 (tox 2): no specific antidote, supportive care. Flumazenil and physostigmine are dangerous.
  - q2 (kf 2): other causes, such as a head injury in the seizure, co-ingestion, withdrawal, CNS infection and stroke.
  - q3 (kf 4): midazolam or lorazepam IM, or ketamine 4 to 5 mg/kg IM (320 to 400 mg), as restraint is applied.
  - q4 (tox 4): kidney injury care with IV fluid, urine output and no nephrotoxins. Furosemide is unacceptable.
- Sources:
  - Takakuwa and Schears, Int J Emerg Med 2021 (PMC7874647, synthetic cannabinoid section read).
  - ACEP severe agitation clinical policy 2024 (record confirmed only).
- Simcheck top 5: old delirium-agitation-04 0.16, loc-05 0.14, seizures-13 0.13, tox-10 0.11, delirium-agitation-03 0.12.
- Decision search:
  - Synthetic cannabinoids are keyed nowhere.
  - "No antidote" appears only in burns-21 (cyanide).
  - delirium-agitation-03 keys IM ketamine or midazolam for a stimulant patient. It is the closest neighbour for q3.

### delirium-agitation-14 (cluster 49, keeper seizures-14)

- Old story: HSV encephalitis. It keyed acyclovir, LP and MRI, and a first-line benzodiazepine.
- New story: a 48-year-old man with 6 weeks of paranoia and cognitive decline, then a seizure. He had a palm and sole rash 4 months ago and has Argyll Robertson pupils. This is neurosyphilis.
- Keyed decisions:
  - q1 (kf 1): features of a medical cause.
  - q2 (ID 1): aqueous penicillin G 3 to 4 million units IV every 4 hours before CSF results, or ceftriaxone. Benzathine penicillin IM and doxycycline are unacceptable.
  - q3 (LOC 1): CT, LP with VDRL, HIV test and EEG.
  - q4 (seizures 4): no IV in place, so midazolam 10 mg IM. RAMPART reported 73.4% against 63.4%.
- Sources:
  - CDC STI treatment guidelines 2021, neurosyphilis page (read). PHAC's 2025 syphilis guide was checked, but it places neurosyphilis treatment outside its scope and advises IV therapy with ID input, so the CDC regimen is cited.
  - RAMPART, Silbergleit et al., NEJM 2012 (abstract read).
- Simcheck top 5: seizures-14 0.18, loc-05 0.15, seizures-11 0.13, headache-05 0.12, anaphylaxis-38 0.12.
- Decision search: syphilis appears only in serology lists. Penicillin G for neurosyphilis and the VDRL are keyed nowhere. No SAMP keys midazolam 10 mg IM.

### delirium-agitation-15 (cluster 50, keeper loc-06)

- Old story: sodium 114 with a seizure. It keyed 3% saline and the correction limits.
- New story: an 84-year-old woman thought depressed after a bereavement. She has hypoactive delirium and a pulse of 42 from complete heart block. She uses timolol eye drops. On the monitor she has convulsive syncope during 12 seconds of block.
- Keyed decisions:
  - q1 (kf 1): hypoactive delirium rather than depression.
  - q2 (seizures 2): pacing, or an epinephrine or isoproterenol infusion. Atropine is unacceptable because the escape is wide complex, following ERC 2025. An antiseizure drug is unacceptable.
  - q3 (kf 2): reversible causes, with timolol as the key cause.
  - q4 (kf 5): she refuses a permanent pacemaker after the delirium clears. Reassess capacity, respect a capable refusal, and her daughter cannot consent.
- Sources:
  - Inouye et al., Lancet 2014 (PMC4120864 abstract).
  - ERC 2025 adult ALS guideline (bradycardia and pacing sections read in full).
  - HCCA.
- Simcheck top 5: seizures-31 0.20, ischemic-heart-disease-07 0.18, asthma-copd-29 0.13, ischemic-heart-disease-38 0.17, arrhythmia-21 0.09.
- Decision search: timolol is keyed only as glaucoma treatment and as a bronchospasm cause (asthma-copd-29). The capable refusal after delirium clears is close to delirium-agitation-23 ("regained capacity") and 26 ("accept his choice").
- Two alternatives were tried and dropped:
  - A draft with PPI-induced hypomagnesemia and a seizure matched seizures-44.
  - Hypocalcemia matches seizures-46.

## For the physician

- **Closest overlap, delirium-agitation-15.** q2 overlaps seizures-31 (s49). seizures-31 is convulsive syncope from heart block in an 81-year-old man, with a transcutaneous pacing key. The rest of 15 differs: hypoactive delirium taken for depression, timolol as the cause, atropine rejected for wide complex block, and capacity after the delirium clears. Every other reversible cause of a seizure in an older adult that I tried is already keyed in the bank. Please decide whether this overlap is acceptable.
- **delirium-agitation-09.** It follows the pattern of seizures-42 (drug neurotoxicity in a dialysis patient treated with dialysis) with a different drug and teaching point.
- **delirium-agitation-04.** The accepted items in q3 include phenobarbital, which tox-15 keys for alcohol withdrawal. The GHB evidence is case series and reviews, and no guideline exists. The dosing statements are limited to what the sources report.
- **delirium-agitation-05 q2.**
  - The case treats as gout while the culture is pending, after a negative Gram stain and with crystals present. Please confirm you accept systemic glucocorticoid before the culture returns.
  - The key accepts any IM or IV glucocorticoid without a dose.
- **delirium-agitation-14.** The penicillin regimen comes from the CDC 2021 guideline because PHAC defers neurosyphilis treatment. The stem does not name a province, and the dose holds everywhere.
- **delirium-agitation-09 q4.** This is Ontario law (HCCA s. 20), and the update names Ontario.
- **Sources not opened in full.**
  - ACEP 2024 agitation policy: only its record was confirmed. It was already in the file.
  - Richmond 2012: only its record was confirmed.
  - The CCSMH PDF downloaded but its text did not extract.
  - The HCCA text was checked through a secondary summary.
- Tintinalli is not cited anywhere.
