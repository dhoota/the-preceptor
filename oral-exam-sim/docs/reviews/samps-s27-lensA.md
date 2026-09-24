# SAMP review. Batch s27 (CVA). Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: every SAMP in `src/samps/s27/cva.ts` (cva-16 to cva-47) and `src/samps/s27/review-extra.ts` (cva-48, cva-49). Each SAMP was read on its own, every explanation sentence against the stem and the source. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Main checks: CSBPR Acute Stroke Management 2022 with the EVT interim update 2025 (full text), CSBPR ICH 2020 (full text), CSBPR Secondary Prevention 2020 (full text), Canadian TIA Score validation (full text), CMAJ Bell palsy guideline (full recommendations), AHA 2024 CVT statement (author manuscript), CSBPR pregnancy consensus (web recommendation pages), NAC PCC recommendations 2022 (full text), ASH 2020 slide set, and PubMed abstracts for the rest.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| cva-17 | q4 | options, explanation, source | Distractor "PCC 1500 units" (26 units/kg) fell inside the 25 to 50 units/kg range in the Canadian NAC PCC recommendations, so it was defensible. The case is a subdural, while the cited CSBPR module covers spontaneous ICH only. Distractor changed to 1000 units (17 units/kg, below every range). Source changed to the NAC PCC recommendations. The explanation now gives both Canadian dosing schemes and the true reason plasma and vitamin K are wrong. Key unchanged (2900 units holds under both). | high |
| cva-34 | q1 | explanation, source | Key "withhold" rested on one observational database study that says "caution". Now cited to the 2026 AHA/ASA acute ischemic stroke guideline, which lists definite or suspected endocarditis as a contraindication to IV thrombolysis. The unused Asaithambi source was removed. Key unchanged. | medium |
| cva-35 | q4 | explanation, source | The early antiseizure claim was not in the AHA 2024 CVT statement. Now cited to the ESO 2017 CVT guideline, which suggests antiseizure drugs after an early seizure with a supratentorial lesion. The wording now matches it. | medium |
| cva-35 | q2 | explanation | The AHA 2024 text says catheter angiography is typically used only when invasive treatment is being considered. The explanation added "inconclusive noninvasive venography", which the source does not say. Now matches. | low |
| cva-16 | q2 | explanation | Said pain behind the ear "comes from a branch of the facial nerve". Reworded: postauricular pain is a common feature, and the other three come from nerve branches. | medium |
| cva-16 | q3 | explanation | Called the palsy "not complete" to justify no antiviral. The CMAJ guideline splits mild to moderate from severe to complete. Full eye closure with effort is moderate. Reworded. | low |
| cva-18 | q2, q3 | explanation | Said he is "outside the thrombolysis window". CSBPR allows thrombolysis beyond 4.5 hours with advanced imaging, and he woke with symptoms 3.5 hours before arrival. Now "beyond the standard 4.5-hour window". | medium |
| cva-18 | q4 | explanation | Said episodes resolved "as the trigger, most often infection, was treated". The Topcuoglu abstract gives 69% resolved by day 1 and lists infection, hypotension and hyponatremia as triggers. It does not say they resolved with treatment or that infection was most common. Now matches the source. | medium |
| cva-29 | q1 | explanation | Said optic neuropathy would "change the fundi". Posterior ischemic optic neuropathy has a normal fundus at first. Reworded so the fundus change applies to retinal artery occlusion only. | low |
| cva-31 | q2, q3 | explanation | Said tranexamic acid is "for bleeding, not swelling". It is sometimes used for bradykinin angioedema. Reworded to say it is not among the CSBPR-recommended treatments for this reaction. | low |
| cva-36 | q3 | explanation | Said thrombolysis is decided "with stroke and obstetric experts". The consensus says consultation with a physician with stroke expertise, with interdisciplinary obstetric input. Reworded. | low |
| cva-37 | q1 | explanation | Called ASPECTS below 6 "a CT exclusion". CSBPR Box 5B lists it as a relative exclusion. Corrected. The same fix was made in cva-49. | low |
| cva-46 | q1 | explanation | Said dissociative amnesia "usually involves loss of personal identity". It mainly affects recall of personal past events, and loss of identity is the uncommon form. Reworded. | medium |
| cva-48 (extra) | q1 | correct | Key was index 2 (left MCA). The explanation and findings support the left ACA (index 0). This is the worst kind of defect, a key the explanation argues against. Key restored to 0. | high |
| cva-49 (extra) | q2 | explanation | Added an invented fact: "serum lactate of 7.8 mmol/L ... confirms this". No lactate is in the case, and lactate does not confirm EVT eligibility. Sentence removed. | high |

## Key changes

- cva-48 q1 (review-extra): correct 2 (Left middle cerebral artery) changed to 0 (Left anterior cerebral artery). Leg weakness greater than arm weakness, abulia and incontinence fit the ACA, and the explanation already said so.
- No key changes in cva.ts.

## Needs physician decision

- cva-48 and cva-49 in review-extra.ts copy the stems and questions of cva-26 and cva-37 exactly. If they were added to the index, the near duplicate stem gate would reject them. Recommend dropping them. They add nothing once fixed.
- cva-17 q4: the key assumes PCC before surgery on a subdural hematoma at 50 units/kg. Canadian practice also accepts a fixed 2000 units. No 2000 option is offered, so the key holds, but a physician may prefer to test the fixed dose.
- cva-39 q2: the key says dual antiplatelet therapy is not recommended at NIHSS 4, per CSBPR 2022 (NIHSS 0 to 3). INSPIRES supports DAPT up to NIHSS 5 within 72 hours. The item holds because the option is oral in a patient who cannot swallow safely. Worth watching when CSBPR updates.
- cva-34 q1: the AHA 2026 contraindication wording was confirmed through secondary sources. The full text was paywalled (HTTP 403). A physician should confirm the exact wording.
- cva-23 q1 cites the chameleon review for the claim that midline cerebellar infarcts spare limb coordination. The claim is standard neuroanatomy, but the review may not state it directly.

## Checked and found correct (selected)

- Scores: Canadian TIA Score in cva-41 (11), cva-45 (5) and cva-47 (minus 3), with risk bands 0.5%, 2.3% and 5.9% and the disposition suggestions, all against the Perry 2021 full text. ABCD2 in cva-42 (5) and cva-43 (4).
- Doses: tenecteplase 16 mg at 64 kg (cva-26). Alteplase 58 mg. Enoxaparin 72 mg every 12 hours (cva-35). Idarucizumab 5 g. aPCC 50 units/kg to a maximum of 2000 units, PCC maximum 3000 units (cva-40), all against CSBPR ICH 2020. ASA 325 mg PR (cva-22, cva-39), against CSBPR 6.1.
- Thresholds: lab relative exclusions (INR above 1.7, platelets below 100, glucose 2.7 to 22.2), major surgery within 14 days, DOAC "should not routinely" be given, BP 185/110 and 220/120, the BP rule above 185/110 in symptomatic ICH after thrombolysis, angioedema steps, cryoprecipitate or TXA and avoiding PCC, platelets and factor VIIa after thrombolysis-associated ICH. All match CSBPR 2022.
- EVT 2025: NIHSS above 5, basilar occlusion within 24 hours (cva-28 and cva-29, NIHSS 6 qualifies), MeVO case by case (cva-26), moderate core ASPECTS 3 to 5 (cva-37), procedural sedation preferred (cva-33), no delay to judge thrombolysis response.
- DOAC timing (1, 3, 6 and 12 days) and repeat imaging after 24 hours (cva-24, cva-42), from CSBPR secondary prevention 2020.
- HINTS plus sensitivity 99.2% and a false negative early MRI in 15 of 105 (cva-38), from the Newman-Toker 2013 abstract. The AICA mechanism is standard teaching.
- Pregnancy: CT/CTA is acceptable, fetal dose is about 0.001 mGy, pregnancy is no contraindication to EVT, and thrombolysis is "reasonable to consider" (cva-36), from the CSBPR pregnancy pages.
- CVT: DOACs are contraindicated in breastfeeding (cva-35 q3), from the AHA 2024 text.
- ASH 2020: transfusion without delay beyond 2 hours, exchange preferred, and exchange suggested above Hb 85 g/L (cva-21).
- Anatomy: forehead sparing, the nucleus ambiguus, the Percheron triad and V sign, the pupillary pathway in cortical blindness, and limb shaking with ICA occlusion. The lateral medullary series (VA disease 67%, dissection 15%), orolingual angioedema (5.1%, contralateral, ACE inhibitor), mimic thrombolysis (0.5% sICH, RR 0.33) and ASA in endocarditis all match their abstracts.
- PCC dose cap check, requested by the coordinator. Every PCC dose in s27 was checked against the NAC 2022 method: PCC 25 to 50 IU/kg to a maximum of 3000 IU, or a fixed 2000 IU, and activated PCC (FEIBA) 50 IU/kg to a maximum of 2000 IU. cva-17 q4: the key of 2900 units is 50 units/kg at 58 kg, under the 3000 cap. cva-40 q2: PCC 4000 units is a distractor, and the explanation rejects it for exceeding the 3000 cap. cva-40 q3: the key of activated PCC 2000 units applies the 2000 cap to 80 x 50 = 4000, and the 4000 distractor is rejected for exceeding it. No key exceeds a cap.
- Wijdicks 2014: early loss of corneal reflexes and miosis with brainstem compression (cva-23 q4).

## Sources verified

- CSBPR Acute Stroke Management 2022 with EVT interim update 2025. Full PDF text. https://www.strokebestpractices.ca/recommendations/acute-stroke-management
- CSBPR ICH 2020, Shoamanesh. Full text. https://pubmed.ncbi.nlm.nih.gov/33174815/
- CSBPR Secondary Prevention 2020, Gladstone. Full text. https://pubmed.ncbi.nlm.nih.gov/34140063/
- Perry JJ, Canadian TIA Score, BMJ 2021. Full text. https://pubmed.ncbi.nlm.nih.gov/33541890/
- de Almeida JR, Bell palsy, CMAJ 2014. Recommendations 1 to 11 read. https://pmc.ncbi.nlm.nih.gov/articles/PMC4150706/
- NAC. Recommendations for use of PCCs in Canada, revised 2022. Full text. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada (new source)
- Prabhakaran S, 2026 AHA/ASA AIS guideline, Stroke 2026. PubMed record plus secondary summaries of the contraindication table. https://pubmed.ncbi.nlm.nih.gov/41582814/ (new source)
- Ferro JM, ESO CVT guideline, Eur J Neurol 2017. Abstract. https://pubmed.ncbi.nlm.nih.gov/28833980/ (new source)
- Saposnik G, AHA CVT statement 2024. Author manuscript. https://discovery.ucl.ac.uk/id/eprint/10186797/
- Ladhani NNN, CSBPR pregnancy consensus 2018. https://www.strokebestpractices.ca/recommendations/acute-stroke-management-during-pregnancy/part-two-section-two and part-two-section-three
- DeBaun MR, ASH 2020 SCD cerebrovascular guideline. ASH slide set. https://pubmed.ncbi.nlm.nih.gov/32298430/
- Newman-Toker 2013, Topcuoglu 2017, Arena 2015, Tsivgoulis 2015, Hill 2003, Kim 2003, Persoon 2010 and Chan 2003. PubMed abstracts via efetch.
- Wijdicks EF, swelling statement 2014. https://pubmed.ncbi.nlm.nih.gov/24481970/

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s27` prints nothing.
- `SAMP_BATCH=s27 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 715 passed.

## Summary

34 SAMPs reviewed (32 in cva.ts, 2 in review-extra). 17 fixes in 13 SAMPs: 1 key change (review-extra), 1 defensible distractor rebuilt, 1 invented stem fact removed, 3 source changes, and 11 false or unsupported explanation statements corrected.
