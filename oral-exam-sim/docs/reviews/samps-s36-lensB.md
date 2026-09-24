# SAMP review: batch s36 (environmental), Lens B

Lens: B, internal consistency and numbers. Scope: every SAMP in `src/samps/s36/environmental.ts` (environmental-16 to environmental-38) and `src/samps/s36/review-extra.ts` (environmental-39 and environmental-40). As asked, the SAMPs rewritten after the Lens A review (environmental-28, 30, 31, 34 and 38) and the new environmental-26 stem also had a full Lens A check. Every SAMP stays `reviewed: false`.

Gates after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s36` prints nothing. `SAMP_BATCH=s36 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 472 of 472. The tests do not load `review-extra.ts`, so I checked its two SAMPs by hand and by a script that compared each one field by field with its twin in the batch.

## Key feature check for environmental-38 (malignant hyperthermia)

Key feature 2 as worded: "When managing a patient with severe hyperthermia (i.e., at risk for heat stroke), cool the patient promptly and aggressively using multiple effective modalities, before having confirmed any etiological diagnosis, while considering the need to look for etiologies other than environmental heat stress (e.g., NMS, OD, endocrine, infections)."

The malignant hyperthermia SAMP failed this check. The patient had no heat stress, so environmental heat was never in the differential. His temperature was 39.4°C when the diagnosis was made, which is not severe hyperthermia. q2 (the dantrolene dose) and q4 (ICU stay and family testing) test anesthetic management of malignant hyperthermia, not cooling before a diagnosis or the search for a cause. Only part of q3 (cooling by all routes) touched the key feature. It passed the overlap check: no other SAMP in `src/samps/` uses a malignant hyperthermia scenario. It failed the fit check, though, so I rebuilt it as the task directs.

New environmental-38, same id: a man with C6 tetraplegia and an intrathecal baclofen pump, on day 3 of a Montreal heat warning, in an apartment with no air conditioning. He has a temperature of 40.8°C, itching, stronger spasms than usual, cloudy urine in his catheter bag and a pump refill that he missed. Every question tests key feature 2:
- q1: cool at once with several methods together, before the cause is known. The key is fans, mist, ice packs and cold IV fluid.
- q2: which finding points away from environmental heat. The key is itching with rebound spasticity, the early signs of intrathecal baclofen withdrawal.
- q3 (menu, select 2): look for infection. The keys are blood cultures and urinalysis with urine culture.
- q4: specific treatment. The key is urgent restoration of intrathecal baclofen.

I searched the bank for baclofen, tetraplegia and quadriplegia. No SAMP uses baclofen withdrawal or heat illness in a spinal cord injury. The rebuild keeps the old key positions for the single questions (2, 3, 1) and one menu question, so the batch statistics are unchanged. Sources: WMS heat 2024 (q1), Surviving Sepsis 2021 (q3) and the Canadian Lioresal Intrathecal product monograph (q2, q4), which I read in full on the Health Canada site. The Rosenberg source is removed because nothing cites it now.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| environmental-39 (extra) | q1 | correct | The key is index 1 (ECLS rewarming) but the explanation argues for forced air, and the patient (30.2°C, BP 104/62 mmHg) meets no Paal ECLS criterion. Lens A reported this fix, but the file still had key 1. Restored to index 4 | high |
| environmental-40 (extra) | q2 | explanation | The invented sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" was still there, even though Lens A reported removing it. No lactate is in the case. Removed | high |
| environmental-38 | all | whole SAMP | Malignant hyperthermia did not test key feature 2 as worded (see above). Rebuilt as a heat illness scenario, heat stroke versus intrathecal baclofen withdrawal and urosepsis | high |
| environmental-31 and environmental-40 | q2 | explanation | Said he had "all three" risk factors, deep dives among them. Schipke 2026 defines deep dives as beyond 40 m, and his dives were 18 to 22 m. Rewritten: he had many repeated dives, short surface intervals and fast ascents | high |
| environmental-31 and environmental-40 | q2 | stem | The menu offered "Hyperventilating before dives", "Wearing a 7 mm wetsuit" and "Weight belt of 6 kg" as features of his diving, but the stem gave none of them. Added all three to the stem | medium |
| environmental-31 and environmental-40 | q1 | explanation | Called his 18 to 22 m dives "deep", which conflicts with the source's threshold. Now gives the depths | medium |
| environmental-28 | stem, q1, q3 | stem, options, update | The stem gave a mottled rash (cutis marmorata), and q1 had it as a distractor under "skin rash is mild". Cutis marmorata is not treated as mild DCS (UHMS 2011 excludes it from surface oxygen, and it is often handled as serious), so the distractor could be defended. Changed to itching with faint redness and scratch marks, no mottling. The option is now "Itchy red skin over the trunk" and the update says her itching settled | medium |
| environmental-28 | q3 | options | The distractor "Cancel transfer, as she is now well" carried a justification inside the option. Now "Cancel the hyperbaric transfer" | low |
| environmental-29 | q3 | options, explanation | The distractor "No recompression, as it is too late" carried a justification. Now "No recompression after 24 hours", and the explanation matches | low |
| environmental-29 | q3 | update | A 5 word update, below the CFPC range. Now names the examination components, which matches q2 | low |
| environmental-30 | q2 | stem | The distractor "Fatigue and generalized malaise" and the explanation relied on fatigue, which the stem never gave. Added fatigue to his symptoms (Friedman lists fatigue in ciguatera) | medium |
| environmental-30 | q2 | explanation | "Nearly all decompression sickness appears within 6 hours" overstated. Changed to "most" | low |
| environmental-32 | q3 | prompt | Asked for "new findings", but three options (blood behind the eardrum, ear fullness, forehead weakness) are already in the stem. Removed "new" | medium |
| environmental-34 | q2 | stem | The explanation says "a GCS below 15", but the stem gave only repeated questioning, which does not by itself make GCS verbal 4. Added "disoriented to time", which fits the later update that he is "now fully oriented" | medium |
| environmental-36 | q2 | explanation | "He is not struggling to ventilate" is not in the stem. Now says the burns are on the front of the chest only and his saturation is 97% on room air | low |
| environmental-37 | q1 | options | The key "Reassurance, as it fades within a day" had its justification inside the option, which cued it. Now "Reassurance without treatment". Key position unchanged | medium |
| environmental-26 | q1 | explanation | "She has a hip fracture" stated a diagnosis the case never confirmed (only a shortened, externally rotated leg). Now "suggests a hip fracture" | low |

## Recomputed numbers (script in the scratchpad)

All of these were correct and needed no change:
- environmental-16: 11 x 750 mL = 8.25 L (about 8 L). Weight 61 to 63 kg. Sodium rise 121 to 126 = 5 mmol/L, inside the WMS 4 to 5 target.
- environmental-19: rocuronium 1.2 mg/kg x 85 kg = 102 mg (about 100 mg).
- environmental-20: 41.6 to 38.9°C in 14 minutes = 0.19°C/minute, a plausible immersion rate.
- environmental-21: 26.4°C is below 30, SBP 78 below 90, burial 95 minutes over 60. 34.6°C after a 20 minute burial fits asphyxia.
- environmental-22: SBP 88 below 90. Responds to voice = revised Swiss stage 2 (Verbal, GCS 9 to 14), which I checked against Paal Table 3.
- environmental-23: 30.2°C is not below 30, and SBP 104 is not below 90, so there is no ECLS criterion.
- environmental-24: dextrose 10% 5 mL/kg x 12 kg = 60 mL = 6 g. 20 mL/kg = 240 mL, and 600 mL = 50 mL/kg. Rewarming of 1.4°C in 40 minutes = 2.1°C/h, inside Paal's 0.5 to 4°C/h for active external rewarming.
- environmental-26: arrival at 32.8°C and SBP 102, no criterion. After 2 hours, 31.8°C (below 32 in an older patient) and SBP 84 (below 90), two criteria.
- environmental-27: 19.8°C is below 20, so 5 minutes on and up to 10 off (Paal Figure 3).
- environmental-28: surfaced 13:00, drive 14:30 = 90 minutes, as stated. Kootenay Pass is given as 1774 to 1781 m by different sources, so 1774 m stands.
- environmental-30: last dive 96 h ago, meal 60 h ago, GI onset 6 h later = 54 h ago, so onset came 42 h after the dive, as stated. The flight the next morning is about 46 to 48 h ago, which matches "2 days ago".
- environmental-34 and environmental-35: 600 V and 347 V are below 1000 V (low voltage, Smith 2026). environmental-36: 7200 V is 1000 V or more, age 13 is 14 or younger, 12% is 10% or more, and SBP 88 is below 90 at 10 years or older.
- Old environmental-38 (now replaced): dantrolene 2.5 mg/kg x 80 kg = 200 mg was correct. The total of 300 mg = 3.75 mg/kg.

## Key changes

- environmental-39 q1 (review-extra, draft): index 1 changed to index 4 (warm forced air and IV fluids at 40°C). Reason: the key contradicted its own explanation and the Paal criteria.
- environmental-38: the whole SAMP was rebuilt, so every key is new. q1 index 2, q2 index 3, q3 [0, 5], q4 index 1.
- No other key changed.

## Sources verified

- Paal P et al. Accidental hypothermia 2021 update. Full text (Europe PMC PMC8744717). Confirmed the revised Swiss stages (Verbal = GCS 9 to 14), ECLS transfer criteria (below 30°C, below 32°C in older or comorbid patients, SBP below 90 mmHg, ventricular dysrhythmia), intermittent CPR, bladder lavage below 0.5°C/h, epitympanic and esophageal probes, pads over leads, AF resolving with rewarming, and walking increasing afterdrop. https://pubmed.ncbi.nlm.nih.gov/35010760/
- UHMS best practice guidelines, DCS and AGE, 2011. PDF read. Recompress even if signs and symptoms resolve. Surface oxygen alone only for mild symptoms stable for 24 h, with a normal neurological examination, when evacuation is hard. Cutis marmorata excluded from ground level oxygen. https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf
- Schipke JD et al. Am J Med 2026. Abstract (Europe PMC). Cerebral, stroke-like presentation, inadequate surface intervals, deep dives beyond 40 m, rapid ascent, PFO, oxygen and hyperbaric treatment. https://pubmed.ncbi.nlm.nih.gov/41397651/
- Smith I et al. Cureus 2026. Full text (PMC13179728). AC is more dangerous because of tetany and prolonged contact. Low voltage is below 1000 V. At least 24 h of monitoring after loss of consciousness or ECG abnormality. Troponin has limited value. Trend CK. Lichtenberg figures resolve within 24 h. https://pubmed.ncbi.nlm.nih.gov/42147553/
- Friedman MA et al. Mar Drugs 2017. Full text (PMC5367029). GI onset within 6 to 12 h, loose teeth, cold allodynia, bradycardia, fatigue. Recurrence with alcohol, nuts, caffeine, pork, chicken and any fish, and avoidance for 3 to 6 months. https://pubmed.ncbi.nlm.nih.gov/28335428/
- Rosenberg H et al. Orphanet J Rare Dis 2015. Abstract read before the rebuild. It confirms rising ETCO2 despite more ventilation and dantrolene as the specific antagonist. It is no longer cited. https://pubmed.ncbi.nlm.nih.gov/26238698/
- Novartis Pharmaceuticals Canada Inc. Lioresal Intrathecal product monograph, revised May 5, 2020. Full text read. Abrupt withdrawal gives high fever, altered mental status, rebound spasticity and rigidity, with rhabdomyolysis, multiple organ failure and death. Early signs include return of baseline spasticity, pruritus, hypotension and paresthesias. It can resemble sepsis, autonomic dysreflexia, malignant hyperthermia and NMS. Common causes include low reservoir volume. Treatment is restoration of intrathecal baclofen at or near the prior dose, with GABA agonists (oral baclofen, benzodiazepines) if that is delayed. Oral baclofen alone should not be relied on. https://pdf.hres.ca/dpd_pm/00056262.PDF
- Coffey RJ et al. Abrupt withdrawal from intrathecal baclofen. Arch Phys Med Rehabil 2002 (PMID 12048649). Abstract read, which corroborates the monograph (restore intrathecal baclofen, benzodiazepine bridge, distinct from MH and NMS). Not cited in the SAMP.
- WMS heat 2024 (Eifling), metadata confirmed on Europe PMC. Full text paywalled. https://pubmed.ncbi.nlm.nih.gov/38425235/

## Needs physician decision

1. environmental-38 (rebuilt): confirm the scenario and keys. In particular, confirm that combined evaporative, ice pack and cold IV fluid cooling is the best of the options offered for a rigid, agitated tetraplegic patient, since immersion is deliberately not an option. Also confirm that restoring intrathecal baclofen is realistic as the ED "specific treatment" key, done through the pump team or neurosurgery.
2. Key feature mapping, low confidence, not changed: environmental-16 q2 and q3 (treatment of hyponatremia in a normothermic runner) are tagged key feature 2, which is about severe hyperthermia. environmental-30 q3 (ciguatera relapse advice) is tagged key feature 4 but does not test dysbarism or hyperbaric referral. Consider re-tagging or replacing.
3. environmental-39 and environmental-40 are verbatim duplicates of environmental-23 and environmental-31, apart from the planted defects now fixed. I recommend that neither is added to the bank.
4. Lens A overlaps that the writer did not rework remain: environmental-23 with s09 environmental-09, environmental-17 with s09 environmental-02, and environmental-26 with s09 environmental-07.

## Summary

- SAMPs checked: 25 (23 in the batch plus 2 extra). Fix rows: 17 across 13 SAMPs, including one full rebuild.
- By category: 1 wrong key (environmental-39), 1 invented finding (environmental-40 lactate), 1 key feature misfit rebuilt (environmental-38), 1 claim contradicted by its source (environmental-31 and environmental-40, deep dives), 4 stem facts missing for explanation or option claims (environmental-30 fatigue, environmental-31 and environmental-40 diving details, environmental-34 disorientation, environmental-36 ventilation), 1 defensible distractor (environmental-28 mottled rash), 3 justifications inside options (environmental-28, 29, 37), 1 prompt inconsistent with the stem (environmental-32 "new"), 2 overstatements (environmental-26 hip fracture, environmental-30 "nearly all"), 1 short update (environmental-29).
- Every recomputed number (temperatures, cooling and rewarming rates, doses by weight, altitude, dive timeline, BP and temperature criteria, voltages) was correct.
- SAMP ids with a defect: environmental-26, environmental-28, environmental-29, environmental-30, environmental-31, environmental-32, environmental-34, environmental-36, environmental-37, environmental-38, environmental-39, environmental-40.
