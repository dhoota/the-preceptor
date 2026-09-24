# SAMP review: batch s32, decreased level of consciousness

Lens: A (clinical truth).

Scope: `src/samps/s32/loc.ts` (loc-16 to loc-47, 111 questions) and `src/samps/s32/review-extra.ts` (loc-48, loc-49). I read every stem, option and explanation. I checked every threshold and dose the writer took from memory against its source text. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| loc-48 (review-extra) | q1 | correct | Key was index 1 (flumazenil 0.2 mg IV) under an explanation for sodium bicarbonate. Flumazenil is harmful in tricyclic poisoning. Key set to 4 (sodium bicarbonate 100 mmol IV). | high |
| loc-49 (review-extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas", which the case never gives and which does not bear on airway priority. Removed. | high |
| loc-41 | q4 | explanation | Stated thrombolysis was contraindicated because he was last known well "more than 8 hours ago". No guideline uses 8 hours. CSBPR 2022 allows thrombolysis beyond 4.5 hours with advanced imaging, and by the EXTEND rule (midpoint of sleep about 0245) he could have been a candidate. The true reason is the DOAC. Rewritten. Key unchanged. | high |
| loc-36 | q2 | explanation | Said the Endocrine Society 2023 guideline prefers zoledronic acid. The guideline recommends denosumab or an IV bisphosphonate and suggests denosumab over a bisphosphonate. Rewritten. Key (saline and zoledronic acid) still holds because denosumab is not offered. | high |
| loc-24 | source, q4 | citation, update, explanation | WMS 2019 update is superseded by the WMS 2024 update. The 2024 target for stopping immersion is 38.3 to 38.8°C, not "about 39°C". Citation replaced with Eifling 2024, explanation corrected, and the update temperature changed from 38.9°C to 38.6°C so it sits inside the target. | high |
| loc-21 | q1 | explanation | The stem gives 5 beers the night before, but the explanation did not say that Diabetes Canada 2023 warns glucagon works less well after more than 2 drinks in the previous few hours. Sentence added. Doses (1 mg SC or IM, 3 mg IN) verified against the 2023 chapter. Key unchanged. | medium |
| loc-42 | q3 | explanation | Said a heart rate above 120/minute "suggests too much atropine". Eddleston and poison centre guidance say tachycardia is not a contraindication to atropine and is not a stop signal on its own. Rewritten. | medium |
| loc-41 | q2 | explanation | Called a DOAC dose within 48 hours "a contraindication to thrombolysis in most patients", a US framing. CSBPR 2022 says thrombolysis should not routinely be given to patients on DOACs. Aligned to the cited Canadian source. | medium |
| loc-24 | q1 | explanation | Said NMS "needs a dopamine antagonist or levodopa withdrawal", then that she lacks it. She lay on the floor up to 2 days and likely missed levodopa, so withdrawal is present. Rewritten to reject the distractor for the true reason: no rigidity. | medium |
| loc-18 | source | citation | AAP 2009 statement (Christian) is superseded by AAP 2020 (Narang et al.). Citation and DOI updated. Content of q1 to q3 is consistent with the 2020 statement. | medium |
| loc-31 | q1 | explanation | Said migraine does not cause "seizures or a focal deficit". Migraine with aura can cause focal deficits, and hemiplegic migraine exists. Now rejected on papilledema and CT hemorrhage, which hold. | low |

## Key changes

- loc-48 q1 (review-extra, draft): before index 1 (flumazenil 0.2 mg IV), after index 4 (sodium bicarbonate 100 mmol IV). The explanation already taught bicarbonate. Flumazenil can provoke seizures in tricyclic poisoning.

No key in `loc.ts` was changed.

## Thresholds and doses checked against the source text

- EXTRIP salicylate (loc-19 q2): ECTR recommended above 7.2 mmol/L, above 6.5 mmol/L with impaired kidney function, with altered mental status, or new hypoxemia. Suggested above 6.5 mmol/L, above 5.8 mmol/L with impaired kidney function, or pH 7.20 or lower. The item's figures are right for her normal creatinine. Correct.
- EXTRIP methanol (loc-25 q4): coma, seizures, new vision deficits, pH 7.15 or lower, persistent acidosis, anion gap above 24 mmol/L calculated as Na minus Cl minus HCO3 (no potassium). The item's gap of 32 uses the same formula. Correct.
- EXTRIP lithium (loc-27 q3): decreased level of consciousness, seizures or life-threatening dysrhythmia at any level, or impaired kidney function with lithium above 4.0 mmol/L. Correct.
- Diabetes Canada 2023 (loc-21): glucagon 1 mg SC or IM, or 3 mg IN, for an unconscious person without IV access. IV glucose 10 to 25 g. Unchanged from 2018. Correct.
- Goldfrank doses: octreotide about 1 mcg/kg SC in children (loc-22, published range 1 to 2 mcg/kg, maximum 50 mcg) and levocarnitine 100 mg/kg IV load, maximum 6 g (loc-34). Both consistent with published toxicology references. I could not open Goldfrank itself.
- CPS meningitis (loc-32): ceftriaxone 100 mg/kg/day divided every 12 hours, maximum 4 g. LP deferred for decreased consciousness, unstable status such as shock, or coagulopathy. Reaffirmed January 2026. Correct.
- ISPAD 2022 (loc-28): mannitol 0.5 to 1 g/kg over 10 to 15 minutes, or 3% saline 2.5 to 5 mL/kg. Correct.
- Every arithmetic item recomputed: anion and osmolal gaps (loc-19, loc-25), Winter's formula, MAPs (loc-23), weight-based doses (loc-22, 23, 25, 26, 28, 32, 34, 37, 39, 43), corrected calcium (loc-36), free water deficit (loc-40), ethanol conversions (loc-16, 39, 45) and all GCS totals. All correct.

## Sources verified

- EXTRIP salicylate: https://www.extrip-workgroup.org/salicylates
- EXTRIP methanol: https://www.extrip-workgroup.org/methanol
- EXTRIP lithium: https://www.extrip-workgroup.org/lithium
- Diabetes Canada 2023 hypoglycemia chapter: https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14-2023-update (Crossref 10.1016/j.jcjd.2023.08.003)
- CPS bacterial meningitis statement: https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- WMS 2024 heat illness update (Eifling et al.): PubMed 38425235, https://doi.org/10.1177/10806032241227924, target temperature from https://wms.org/magazine/magazine/1540/Heat-Illness-CPG/default.aspx
- Endocrine Society hypercalcemia of malignancy 2023: PubMed 36545746 abstract
- CSBPR acute ischemic stroke treatment, 7th edition 2022 with 2025 thrombectomy interim update: https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment
- AAP abusive head trauma 2020: Crossref 10.1542/peds.2020-0203
- AHA CVT 2024: Crossref 10.1161/STR.0000000000000456
- ISPAD 2022 cerebral edema dosing: text quoted in search results from the ISPAD 2022 DKA chapter
- Eddleston 2008 atropine endpoints and tachycardia: Lancet article page and Atlantic Canada Poison Centre atropine monograph
- Levocarnitine and octreotide dosing: poison centre and systematic review sources (J Med Toxicol 2025 octreotide review, PMC11933575)

## Needs physician decision

- review-extra.ts: loc-48 is a word-for-word copy of loc-26, and loc-49 of loc-37. Their stems would fail the bank's near-duplicate test (trigram overlap 1.0). They should not be added to the bank in this form. I fixed their clinical errors only so the file is not left teaching a wrong key.
- loc-37 q3: mannitol 1 g/kg is keyed. The BTF 4th edition did not carry forward the 3rd edition mannitol dose as a recommendation, and hypertonic saline is an equal alternative. The key holds because saline is not offered, but a physician may want a Canadian trauma source.
- loc-26 q1: GEMNet 2011 (UK) is the only guideline cited for bicarbonate dosing. No Canadian guideline exists. 100 mmol (1.6 mmol/kg) is within usual practice.
- loc-17 q3: the keyed option "prothrombin complex concentrate and vitamin K" gives no dose while every distractor does. That is a Lens B specificity point, noted here only.

## Summary

- 11 fixes in 10 SAMPs: 1 key change (review-extra), 1 invented fact removed (review-extra), 6 false or outdated reasons in explanations, 2 outdated sources replaced (WMS 2019 to 2024, AAP 2009 to 2020), 1 stem update value changed to match the current source.
- Most serious: loc-48 keyed flumazenil in tricyclic poisoning. loc-41 q4 gave a false 8 hour thrombolysis cutoff. loc-36 q2 reversed the Endocrine Society preference. loc-24 used a superseded cooling target.
- The writer's memory-based EXTRIP thresholds, glucagon doses and Goldfrank doses were all correct.
- SAMPs with a defect: loc-18, loc-21, loc-24, loc-31, loc-36, loc-41, loc-42, loc-48, loc-49.
- Checks: `tsc` shows no errors in samps/s32. `SAMP_BATCH=s32 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed.
