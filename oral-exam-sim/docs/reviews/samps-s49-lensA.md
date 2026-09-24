# Review of batch s49 (Seizures), Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: `src/samps/s49/seizures.ts` (seizures-16 to seizures-47) and `src/samps/s49/review-extra.ts` (seizures-48 and seizures-49). Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s49` shows no errors. `SAMP_BATCH=s49 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (651 tests). No em or en dashes or semicolons in either file.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| seizures-48 (extra) | q1 | correct | Key was index 2, "IV magnesium sulfate bolus", while the explanation teaches IV calcium gluconate and rejects magnesium. Key changed to index 0 | high |
| seizures-48 (extra) | all | whole SAMP | Stem, options and explanations are a verbatim copy of seizures-26. It would fail the near duplicate stem test if promoted. Recommend it is dropped, not added | high |
| seizures-49 (extra) | q2 | explanation | Invented and false last sentence: "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate is in the case, and lactate cannot confirm juvenile myoclonic epilepsy. Removed | high |
| seizures-49 (extra) | q2 | explanation, source | Same Hirtz scope error as seizures-37 q2 (below). Rewritten and re-sourced to NICE NG217 | medium |
| seizures-49 (extra) | q3 | explanation | Added the CMA rule specific to juvenile myoclonic epilepsy, as in seizures-37 q3 | low |
| seizures-49 (extra) | all | whole SAMP | Verbatim copy of seizures-37. Recommend it is dropped | high |
| seizures-18 | q2 | explanation | "A QRS of 130 ms calls for sodium bicarbonate" overstated the evidence for bupropion, whose QRS widening responds less reliably than tricyclic toxicity. Now "a trial of sodium bicarbonate, ICU monitoring and readiness for dysrhythmias" | low |
| seizures-18 | q3 | explanation, source | Delay claim rested on Goldfrank from memory and said cardiac toxicity is delayed "up to about a day", which is not well supported. Rewritten to the verified Starr 2009 data (first seizures 0.5 to 24 hours after extended release ingestion, a third after 8 hours, about half recurrent). Source changed to Starr 2009 and added to the SAMP | medium |
| seizures-20 | q3 | explanation | DOAC distractor reason now matches the 2024 Canadian CVT wording and adds that DOACs are contraindicated in breastfeeding (the stem says she breastfeeds) | low |
| seizures-21 | q2 | explanation, source | Explanation called this "a first nonfebrile seizure" and cited Hirtz 2000. She has had many daily spells, and Hirtz covers only partial, generalized tonic clonic and tonic first seizures and excludes children with epilepsy. Rewritten on NICE NG217 (routine awake EEG with provoking manoeuvres to support diagnosis and seizure type). Hirtz removed from this SAMP's sources | medium |
| seizures-21 | q3 | explanation | "National guidance" for a UK guideline read as Canadian. Now "NICE advises" | low |
| seizures-22 | q3 | source | The claim that side effects of continuous or intermittent antiseizure drugs outweigh the risks is from AAP 2008, not Gardner 2025, which does not discuss prophylaxis. Source changed to aap-fs-long | medium |
| seizures-27 | q4 | explanation | "Delivery is not indicated for a maternal seizure that responds to treatment", but her seizure had not responded. Reworded | low |
| seizures-30 | q2 | update, explanation | Key (observation over a further benzodiazepine) was open to argument after 25 minutes of events in a patient taking levetiracetam. Added an update with continued regular breathing, O2 sat 99% and reactive pupils, and tied the explanation to those findings | medium |
| seizures-31 | q1 | explanation | "Collapse while seated does not suggest a seizure and raises concern for an arrhythmia rather than excluding one" was muddled. Rewritten | low |
| seizures-34 | q2 | explanation | False claim that Canadian stroke guidance says seizure is not a contraindication to reperfusion. CSBPR Box 5B lists stroke symptoms from seizure with postictal Todd paralysis as an exclusion. Rewritten: CT and CT angiography are needed to look for hemorrhage or occlusion before that judgment is made. Key unchanged | high |
| seizures-37 | q2 | explanation, source | Called this "a first nonfebrile seizure" and cited Hirtz 2000, which excludes myoclonic seizures and children with epilepsy. Rewritten on NICE NG217. Hirtz replaced by NICE in the SAMP sources | medium |
| seizures-37 | q3 | explanation | Added the CMA rule that people with juvenile myoclonic epilepsy may not drive any class of vehicle unless on appropriate antiseizure medication | low |
| seizures-38 | q3 | explanation, source | Key point rested on Rosen only. Re-sourced to Bullock 2006 (Brain Trauma Foundation surgical guideline: evacuate an acute epidural hematoma as soon as possible in coma with anisocoria), and the explanation now states that criterion. Rosen removed from this SAMP | medium |
| seizures-43 | q3 | explanation | "National guidance" now "NICE" | low |
| seizures-44 | q2 | update, explanation | Threshold question did not name its reference (brief rule A10). Added an update naming the 2014 European guideline. Added that a daily limit of 8 mmol/L is often used when demyelination risk is high, as with her poor intake | medium |
| seizures-46 | q3 | explanation | "Hyperbaric oxygen reduces lasting neurological and mood effects" overstated the evidence. Now "reduced delayed cognitive sequelae in a randomized trial" | low |
| seizures-47 | q2 | explanation | Reason for rejecting acute rejection was "creatinine does not suggest uremia from rejection". Replaced with a true reason: rejection does not explain headache, visual loss and seizures, and 142 umol/L is far too low for uremic encephalopathy | low |

## Key changes

- seizures-48 q1 (review-extra only): before index 2 "IV magnesium sulfate bolus", after index 0 "IV calcium gluconate with monitoring". The explanation, the magnesium of 0.80 mmol/L and the matching seizures-26 q1 all support calcium. This SAMP is also an exact duplicate of seizures-26 and should not ship.

No key changed in `seizures.ts`.

## Items checked first, as requested

- **CMA Driver's Guide year.** 10th edition. The site says it adds the CCS recommendations "to be published in 2023", and the Updates page lists only cardiovascular table corrections (May 2024, February 2025). The 2025 copyright is the website notice. Keep "10th edition. 2023". Wording checked word for word: "Any seizure is grounds for immediate cessation of all driving activities" (36 q3, 40 q3). Single unprovoked seizure, 3 months (35 q3). Epilepsy on medication, 6 months seizure free with confidence in adherence (34 q4, 37 q3). The 3 month rule after medication withdrawal "does not apply to voluntary cessation", so the 34 q4 distractor reason holds. Typical vasovagal syncope, single or recurrent: no restriction, private or commercial (45 q3). Reversible cause: 1 week private.
- **Rosen-only claims.** Rosen 10th edition (2023) exists. I cannot check chapter text word for word. 38 q3 now cites Bullock 2006. 21 q2 and 37 q2 now cite NICE (that was a Hirtz problem, not Rosen). The others are standard teaching and I judge them true: IV calcium for hypocalcemic seizures (26 q1), hyperventilation to bring on absences (21 q1), observation in a likely nonepileptic event (30 q2, now firmed up), no imaging for a clear breakthrough cause (28 q3), sleep loss and alcohol as juvenile myoclonic epilepsy triggers (37 q4), late onset focal seizures (40), left uterine displacement after 20 weeks (27 q4). A physician should confirm them.
- **seizures-18.** Delayed seizures verified (Starr 2009, PMID 19857406: seizures 0.5 to 24 hours, 32% after 8 hours, and the authors advise at least 24 hours of observation). Delayed cardiac toxicity is not in that source, so the explanation no longer claims it.
- **seizures-30 q2.** Key kept and firmed up (see table). Listed below for a physician.
- **seizures-44 q2.** European 2014 guideline verified: 150 mL of 3% saline boluses aiming for a 5 mmol/L rise in the first hour, and a limit of 10 mmol/L in the first 24 hours. The US expert panel range of 4 to 6 mmol/L also contains 5, so the key holds under both. The guideline is now named in an update.

## Sources verified

- CMA Driver's Guide, 10th edition, nervous system and cardiovascular sections, and the Updates page: https://driversguide.ca/sections/nervous-system , https://driversguide.ca/sections/cardiovascular-diseases , https://driversguide.ca/updates
- TREKK Status epilepticus BLR, version 1.2, February 2026 (PDF read): lorazepam 0.1 mg/kg (maximum 4 mg), levetiracetam 60 mg/kg (maximum 3 000 mg), fosphenytoin avoided in toxicologic seizures, no more than two benzodiazepine doses, drug levels named for phenytoin, carbamazepine, phenobarbital and valproic acid. Supports 18 q1, 23 q2 and q3, 29 q1 and q3. https://cms.trekk.ca/wp-content/uploads/2025/05/2026_02_17-Status-Epilepticus-BLR-v1.2.pdf
- Gardner 2025, Can Fam Physician 71(9):563 (PMID 40940149, PMC12454563). Electrolytes cause under 1%, serious bacterial infection risk no higher than with fever alone, antipyretics for comfort, outpatient EEG. Does not cover prophylaxis (hence the 22 q3 source change).
- Hirtz 2000, Neurology 55:616 (PMID 10980722, full text read via the Child Neurology Society PDF). Scope excludes children with epilepsy and myoclonic seizures, and covers only partial, generalized tonic clonic and tonic seizures.
- NICE NG217, published 2022, last updated 5 August 2026. EEG recommendations 1.x (routine awake EEG to support diagnosis and syndrome, provoking manoeuvres). Box 1: showers rather than baths, supervised swimming, no climbing above own height without supervision. https://www.nice.org.uk/guidance/ng217
- Canadian Stroke Best Practice Recommendations, CVT 2024 module PDF: LMWH preferred, blood not a contraindication, no DOAC without parenteral lead-in, no thrombolysis, antiseizure drugs for acute symptomatic seizures, longer than 3 months may not be needed, DOACs contraindicated in pregnancy and breastfeeding.
- CSBPR Acute stroke management, Box 5B (2022): seizure with postictal Todd paralysis is an exclusion. https://www.strokebestpractices.ca/-/media/1-stroke-best-practices/acute-stroke-management/csbpr7-asm-box5b.pdf
- Diabetes Canada 2018, chapter 15: effective osmolality 2 x Na + glucose, above 320, 0.9% saline first, then 0.45% saline possible after hypotension is corrected, osmolality fall no faster than 3 mmol/kg/h, seizures in HHS. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- Ward 2007 CMAJ (PMID 17600035): hypocalcemic seizures in 19%, no rickets in breastfed children given 400 IU/day.
- Aeronautics Act s. 6.5(1) and (4), duty to report and good faith protection: https://laws-lois.justice.gc.ca/eng/acts/A-2/section-6.5.html
- Brophy 2012 (NCS): EEG within 1 hour if ongoing seizures are suspected. Definition of refractory status.
- Spasovski 2014 (European hyponatremia guideline): 150 mL 3% saline, 5 mmol/L target, 10 mmol/L limit.
- Starr 2009, Am J Emerg Med 27:911 (PMID 19857406). Added.
- Bullock 2006, Neurosurgery 58(3 Suppl):S7 (PMID 16710967). Added.
- Chang 2019 J Clin Oncol 37:1130 (PMID 30883246). Existence and year confirmed via PubMed: Payne 2017 (29137682), Eddleston 2008 (17706760), Rose 2017 (27753502), Trinka 2015 (26336950), LaFrance 2013 (24111933), Pennell 2008 (18046009), AAP 2008 (18519501), Pack 2024 (38748979), Magee 2022 (35577426), Sheldon 2011 (21459273), Sabers 2003 (12939444), Mancl and Gidal 2009 (doi 10.1345/aph.1m296, Crossref).
- Carried over and not re-read: Goldfrank 11th edition, Rosen 10th edition, Kapur 2019, Krumholz 2015, AAP 2011, White 2018, AHA 2025, Carney 2017, Fugate 2015, Le Saux 2014.

## Needs physician decision

- seizures-30 q2: whether observation with EEG, rather than one more dose of lorazepam, is the single best answer after 30 minutes of events in a patient taking levetiracetam. It is now better supported, but it still rests on bedside features. A physician should confirm it.
- seizures-48 and seizures-49 (review-extra): exact copies of seizures-26 and seizures-37. They should be dropped, not added to the batch.
- NICE NG217 is a UK guideline, used for safety advice (21, 25, 43) and EEG (21, 37). I found no Canadian guideline that covers the same points. Accept NICE, or name a Canadian source if one exists.
- `S.hirtz` and `S.acep24` are now unused constants in `seizures.ts`. They are harmless, but the Lens B reviewer or the writer may remove them.

## Summary

- 34 SAMPs reviewed (32 in the batch and 2 extras). 23 fixes across 16 SAMPs. One key change, in a review-extra SAMP.
- Fixes by category: wrong key 1, invented stem fact 1, false or unsupported distractor or key reason 6 (18 q2, 18 q3, 34 q2, 46 q3, 47 q2, 27 q4), wrong or out-of-scope source 5 (21 q2, 22 q3, 37 q2, 38 q3, 49 q2), a key that could be argued made firmer 1 (30 q2), threshold reference not named 1 (44 q2), clarity or accuracy of wording 6, duplicate SAMPs 2.
- Most serious errors: the magnesium key in seizures-48 q1. The invented lactate sentence in seizures-49 q2. The false Canadian stroke guidance claim in seizures-34 q2.
- SAMP ids with a defect: seizures-18, seizures-20, seizures-21, seizures-22, seizures-27, seizures-30, seizures-31, seizures-34, seizures-37, seizures-38, seizures-43, seizures-44, seizures-46, seizures-47, seizures-48, seizures-49.
