# SAMP review, batch s40 (headache), Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: every file in `src/samps/s40/`, including `review-extra.ts`. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

Gates after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s40` shows no errors. `SAMP_BATCH=s40 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 691 passed.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| headache-25 | q2 | options, explanation, source, sources | Keyed PCC dose of 3 500 units (50 units/kg x 70 kg) exceeds the Canadian single-dose ceiling of 3 000 units. Key rebuilt to 2 000 units, which holds under both Canadian dosing strategies (fixed 2 000 units, or 25 to 50 units/kg to a maximum of 3 000). Source moved from AHA/ASA ICH to NAC 2022 | high |
| headache-26 | q3 | options, correct, explanation | Amitriptyline was keyed as the preventive for chronic migraine with medication overuse. It is reasonable but not the agent the MOH or chronic migraine evidence names first (topiramate, onabotulinumtoxinA, CGRP agents, propranolol), and choosing an agent is not the ED decision. Option changed to "Start a migraine preventive". The key moved from [0, 3, 7] to [2, 6, 7] and the explanation now names the example agents | medium |
| headache-27 | q2 | explanation | Said "frontal swelling and severe frontal headache are red flags in the Canadian guideline". The Canadian guideline lists systemic toxicity, altered mental status, severe headache and orbital swelling or visual change, not frontal swelling. Reworded | medium |
| headache-40 | q3 | explanation | Said fluoroquinolones are reserved for failure "or beta-lactam allergy" and rejected macrolides for resistance. The Canadian guideline names TMP-SMX or a macrolide for beta-lactam allergy and quinolones for failure. Reason corrected | high |
| headache-36 | q2 | prompt | "Would indicate HELLP syndrome". A platelet count alone does not establish HELLP, and the explanation itself says so. Changed to "would be consistent with" | medium |
| headache-38 | q4 | keyFeature | Supportive care of viral meningitis was tagged KF5 (migraine). Retagged KF2, matching the writer's convention for managing dangerous causes | high |
| headache-24 | q4 | explanation | Rejected "night sweats", which the stem never gives (stem: felt feverish at night). Changed to "night-time fevers" | medium |
| headache-47 | q2 | explanation | "Progestin-only methods such as an intrauterine device". The copper IUD is not progestin-only. Now names the levonorgestrel system and copper IUD separately | low |
| headache-48 (review-extra) | q1 | correct | Key was 0 (chronic tension-type headache). The explanation argues for medication overuse headache. Key restored to 3 | high |
| headache-49 (review-extra) | q2 | explanation | Contained a fabricated closing sentence about a "serum lactate of 7.8 mmol/L" that is not in the case and has no bearing on SAH. Removed | high |

## Key changes

- headache-25 q2: key text changed from "prothrombin complex 3 500 units IV" to "prothrombin complex 2 000 units IV" (index 3 unchanged). Reason: NAC 2022 and Thrombosis Canada both say a single PCC dose should not exceed 3 000 units. The explanation was rewritten around the new key.
- headache-26 q3: menu key changed from [0, 3, 7] to [2, 6, 7] after the option change. Reason: the option now reads "Start a migraine preventive", which stays correct whichever preventive is chosen.
- headache-48 q1 (review-extra): key changed from 0 to 3 (medication overuse headache).

## Writer's flagged items, checked

- 25 q2 (extrapolated): the reversal was a real error. See above. Using ICH guidance for a subdural is acceptable, and the Canadian NAC guidance covers any life-threatening bleed.
- 31 q2 (extrapolated): AHA/ASA 2022 recommends 4F-PCC over plasma with IV vitamin K when INR is 2 or more. Reversal in a life-threatening bleed despite a mechanical valve is correct. No change.
- 26 q3: changed, see above.
- 28 q3: the CPS statement (reaffirmed 12 January 2026) gives ceftriaxone or cefotaxime plus vancomycin 60 mg/kg/day divided every 6 hours, with ampicillin only for immunocompromised children. 15 x 30 = 450 mg is correct. No change.
- 44 q2: "generally avoided" for metoprolol in cocaine toxicity is fair. Benzodiazepine first is correct. No change.
- 36 q3 (the writer's "36 q2"): levetiracetam is not an established alternative to magnesium for eclampsia prevention. True. No change.
- 24 q2 and q3: the ESCMID 2024 guideline recommends a third-generation cephalosporin plus metronidazole for community-acquired abscess in immunocompetent adults, and aspiration or excision whenever feasible. About 6 weeks of total therapy is consistent with it. No change.
- 30 q4: carbamazepine and thiazide additive hyponatremia is well documented (Ranta and Wooten, Epilepsia 2004). The stem supplies the thiazide and age. No change. Low residual risk because the EAN guideline was not checked for this point.
- 42 q3 (the writer's "42 q4"): about half of paediatric brain tumours are infratentorial (commonly quoted as 45 to 60%). Acceptable. No change.
- Key feature tags: all 115 were reviewed. Only 38 q4 was wrong. Cluster treatment under KF5 (18 q3, q4) and trigeminal neuralgia under KF4 (30 q3, q4) are the nearest fits and are left as the writer disclosed them.

## Other checks with no defect found

- 16: CPS 2025 doses confirmed: metoclopramide 0.15 mg/kg IV, maximum 10 mg (5.7 mg at 38 kg), and ibuprofen 10 mg/kg, maximum 600 mg (380 mg). Opioids are not recommended, IV fluids are given by hydration status, and prochlorperazine IV is not available in Canada.
- 26 q2, 34 q1, 35 q3, 47 q3: the Orr 2015 CHS abstract confirms strong recommendations for metoclopramide, sumatriptan and ketorolac (low evidence), strong against dexamethasone for pain, and weak against acetaminophen, magnesium and valproate. Note that CHS weakly recommends meperidine. Rejecting meperidine in 26 q2 is still valid because she overuses codeine.
- 18 q3, q4: the AHS 2016 cluster guideline gives Level A to SC sumatriptan, zolmitriptan nasal and high-flow oxygen.
- 22 q3: MAP (238 + 268) / 3 = 168.7, and a 20 to 25% fall gives 127 to 135. Correct.
- 29 q3: the WHO 2022 guideline drains CSF to below 20 cm H2O or by half, and does not recommend mannitol, acetazolamide or steroids.
- 33 q3: tenecteplase 0.25 mg/kg, maximum 25 mg, gives 22.5 mg at 90 kg. Correct under CSBPR.
- 35 q4: almotriptan 12.5 mg is marketed in Canada (Sandoz almotriptan, DIN 02405334).
- 43 q3: AAP 2017 advises no more than 25% of the planned reduction over the first 8 hours.
- 44 q3: AHA/ASA 2022 gives a target of 140 mmHg with a 130 to 150 range for SBP 150 to 220 mmHg.

## Sources verified

- NAC. Recommendations for use of PCCs in Canada, revised February 2022. https://nacblood.ca/sites/default/files/2022-04/PCC-Recommendations%20_Revision%20Feb%202022%20_Posted%20April%202022.pdf (factor Xa: 2 000 IU fixed or 25 to 50 IU/kg to a maximum of 3 000 IU, and single doses should not exceed 3 000 IU)
- Thrombosis Canada. NOACs/DOACs: management of bleeding, 2020 copy. https://profedu.blood.ca/sites/default/files/thrombosiscanada2020mb_tc_day_4.pdf (50 units/kg, maximum 3 000 units)
- CPS 2025 acute migraine. https://cps.ca/en/documents/position/acute-migraine
- CPS bacterial meningitis, reaffirmed January 2026. https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- Orr SL et al. Cephalalgia 2015, 35(3), 271-84. https://pubmed.ncbi.nlm.nih.gov/24875925/
- Choosing Wisely Canada headache, July 2020. https://choosingwiselycanada.org/recommendation/headache/
- Kaplan A. Can Fam Physician 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC3952756/ and the parent guideline, Desrosiers M et al. Allergy Asthma Clin Immunol 2011, 7:2. https://pubmed.ncbi.nlm.nih.gov/21310056/
- Bodilsen J et al. ESCMID brain abscess guideline. Clin Microbiol Infect 2024, 30(1), 66-89. https://pubmed.ncbi.nlm.nih.gov/37648062/
- Robbins MS et al. Headache 2016, 56(7), 1093-106. https://pubmed.ncbi.nlm.nih.gov/27432623/
- WHO 2022 cryptococcal guideline. https://www.nicd.ac.za/wp-content/uploads/2023/01/2022-WHO-Guideline-Crypto-Final-9789240052178-eng.pdf
- Medrea I et al. Updated CHS migraine prevention guideline. Can J Neurol Sci 2024. https://pubmed.ncbi.nlm.nih.gov/39506371/ (consulted for 26 q3 but not added to the SAMP, because the test gate rejects an uncited source)
- Health Canada almotriptan listing via pharmacy DIN 02405334. https://www.jeancoutu.com/en/health/medication-dictionary/sandoz-almotriptan-tablet-125mg/02405334/
- Citations confirmed to exist by PubMed record (titles and years match): Ducros 2012, van den Born 2019.

## Needs physician decision

- review-extra.ts: headache-48 and headache-49 are near verbatim copies of headache-26 and headache-37, with the same stems and titles. Beyond the two defects fixed above, they fail the no-near-copy rule and should not be added to the bank.
- headache-26 q3: confirm that an agent-neutral "Start a migraine preventive" is preferred to naming one drug.
- headache-25 q2: some Canadian centres use 50 units/kg capped at 3 000 units. The keyed 2 000 units is the dose all Canadian references accept.
- The writer's note on the signed-off s11 item headache-10 q2 (prochlorperazine): the CPS 2025 statement confirms that IV prochlorperazine is not available in Canada. That item is outside this batch, but it needs a physician look.

## Summary

- 10 fixes in 10 SAMPs: 1 dose or key error (25), 2 key changes after rework (26, 48), 4 incorrect or unsupported distractor or explanation statements (24, 27, 40, 47), 1 fabricated explanation sentence (49), 1 prompt overreach (36), 1 key feature tag (38).
- Most serious: the PCC dose above the Canadian maximum in headache-25 q2, the wrong key in headache-48 q1, and the fabricated lactate sentence in headache-49 q2.
- SAMP ids with a defect: headache-24, headache-25, headache-26, headache-27, headache-36, headache-38, headache-40, headache-47, headache-48, headache-49.
