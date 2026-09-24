# Adversarial review: SAMP batch s09 (ems, environmental)

Reviewer: adversarial CCFP-EM examiner pass. Files: `src/samps/s09/ems.ts`, `src/samps/s09/environmental.ts`. All SAMPs keep `reviewed: false` and stable ids.

## Summary

Both topics were clinically sound overall. The main problems were in the answer keys, not the medicine. Several match phrases gave credit for the wrong answer. Examples: a bare "SpO2" earned credit for "do not rely on pulse oximetry", a bare "epinephrine" earned credit for "withhold epinephrine", and "elevate" earned credit for "keep the limb at heart level". Other phrases missed correct wordings. For example, "cool" does not match "cooling", and "nitro" does not match "nitroglycerin". One scenario was wrong. JumpSTART was applied to a 12 year old, but it is for children aged about 1 to 8. The lysis adjunct key gave full marks for naming two anticoagulants. Ontario specific content now says Ontario, or the key accepts wording that works in any province. Key feature coverage remains complete. EMS KF1 to 4 and environmental KF1 to 5 are all tested, and no key feature is the focus of more than 8 SAMPs.

Checks: `npx tsc` shows no s09 errors. The full `SAMP_BATCH=s09` vitest run could not load because batch s04 (`CPS_ASTHMA is not defined`, another reviewer's work in progress) broke the shared index. I ran the same test file against the s09 export only. All 94 tests passed, and I then deleted the temporary test.

## Writer's flagged points

1. **Ontario protocol wording.** The PCP glucagon 1 mg IM directive (ems-05) matches the Ontario ALS PCS and is standard in most provinces. The ems-05 stem now says "in Ontario", because its questions rest on the Health Care Consent Act. Capacity q1 no longer says "under Ontario consent law". It accepts the statutory abilities (understand, appreciate) and the clinical ones (communicate, reason), and the explanation says which is which. TOR after about 20 minutes (ems-04) is consistent with the Ontario TOR directive and with the validated BLS and ALS rules used nationally. The keys are generic. For the divert to the closest ED with an unmanageable airway (ems-02 q4), the principle is universal and no edit was needed. Bypass time limits: the stems give transport times (35 to 45 minutes to PCI, 45 minutes to the stroke centre) that fall inside any provincial bypass window. No province specific number is keyed. The CritiCall items (ems-08, ems-15) now also accept a generic provincial transfer line. The Code Orange text now says "Ontario and many provinces", and the key already accepted "disaster plan". **Verdict: acceptable after edits.**
2. **CO.** Pregnancy with COHb 17% as a hyperbaric indication is correct (threshold about 15%). The explanation now notes that some centres use 20%. The half life of 75 minutes on 100% oxygen sits inside the accepted 60 to 90 minute range. The nearest distractors are 20 minutes and 5 hours, so the item is fair. **Verdict: accurate.**
3. **Hypothermic arrest.** The ERC 2021 guidance is confirmed and restated in ERC 2025: after three shocks, delay further defibrillation until above 30 C, and withhold adrenaline below 30 C. On potassium, ERC states that no survivor has been reported above 12 mmol/L, and the HOPE score is preferred. The explanation now says older sources used 10. The key of 14 mmol/L is above both thresholds. Stopping only at 32 C or higher is accepted. There was one real problem. AHA guidance, which Heart and Stroke Canada follows, allows standard shocks and epinephrine alongside rewarming. That made the "standard ACLS" distractor defensible for a Canadian candidate. The distractor now says "with forced air warming only", so the keyed option (which includes ECLS) is clearly best. The explanation names both schools. **Verdict: corrected.**
4. **Frostbite.** WMS 2024 confirms rewarming at 37 to 39 C and ibuprofen 12 mg/kg/day divided twice daily. The 400 mg twice daily option is kept as reasonable for most adults, and the explanation gives the weight based dose. The tPA window is **within 24 hours of injury**, best within 12 hours, not "of rewarming". The key text and explanation are corrected. q4 said bone scan "guides thrombolysis", but angiography is what guides intra-arterial tPA. That clause is removed. **Verdict: corrected.**
5. **Heat stroke.** Stopping cooling at about 39 C is keyed. The keys accept 39, 38.9, 38.6 and now 38.5. "None" as the drug answer is correct, because antipyretics and dantrolene are not indicated. **Verdict: accurate.**
6. **Thyroid storm.** Accepting acetaminophen and rejecting ASA is correct (ATA 2016). The ASA unacceptable is negation aware, so "avoid ASA" is not penalized. **Verdict: accurate.**
7. **Electrical.** The urine output target of 75 to 100 mL/h (about 1 to 1.5 mL/kg/h) is correct per ABLS. Fetal monitoring at 24 weeks is correct. The toddler with the commissure burn is discharged, and the delayed labial artery bleeding teaching is present and keyed (q3 and the q4 explanation). **Verdict: accurate.**
8. **Pediatric DKA transport.** The advice to avoid intubation is correct. Mannitol 0.5 to 1 g/kg is keyed, and 3% saline 2.5 to 5 mL/kg is in the explanation. Neither distractor is the other correct agent. **Verdict: accurate.**
9. **Lysis adjuncts (ems-10).** The patient is 55, so full dose TNK, a clopidogrel 300 mg load and enoxaparin 30 mg IV plus 1 mg/kg SC are all correct. Prasugrel and ticagrelor are unacceptable. **Error:** enoxaparin and UFH were separate key items, so "enoxaparin, heparin" scored 2/2 for two anticoagulants. They are now one anticoagulant item. The key text adds the 100 mg cap on the first two SC doses and the adjustments over 75. **Verdict: corrected.**

## EMS

| SAMP | Verdict | Changes |
|---|---|---|
| ems-01 | Corrected | q3: the hold item did not match "no nitroglycerin" or "no nitrates". It now accepts nitroglycerin and nitrate wordings. The dangerous "repeat nitro" item missed "repeat nitroglycerin". Added nitroglycerin and nitrate forms. |
| ems-02 | Corrected | q3: a candidate writing "No ASA until CT" (a correct instruction) got no credit. Added a "no ASA or antithrombotic" key item. |
| ems-03 | Accurate | None. |
| ems-04 | Corrected | Stem: a collapse in a garage raises CO poisoning, a toxic cause that is an exclusion to TOR. Added "No vehicle or fuel burning appliance was running." |
| ems-05 | Corrected | The stem now says Ontario. q1 prompt and explanation changed as described in point 1. |
| ems-06 | Accurate | None. |
| ems-07 | Corrected | q3 (HBO decision for COHb 24% with confusion) tested toxicology, not EMS handover. Relabelled from ems KF2 to tox KF2 and added `alsoTopics: ["tox"]`. |
| ems-08 | Corrected | q1: the CritiCall item now also accepts a generic provincial transfer line. q3: the distractor "3% saline 2 L" was absurd, so it is now "Normal saline 2 L bolus to raise cerebral perfusion". |
| ems-09 | Corrected | q3: the IV item matched a bare "iv", so "IV fentanyl" was scored as the IV item. It now uses specific phrases. |
| ems-10 | Corrected | q2: anticoagulants merged into one item, with dose caveats (point 9). q3: bare "iv" phrase fixed. |
| ems-11 | Accurate | None. |
| ems-12 | Corrected | q3: JumpSTART was applied to a 12 year old. A 12 year old is triaged with adult START, where an apneic patient after airway repositioning is expectant. The child is now 6 years old. The stem is now "32 students aged 6 to 17", and the explanation states the JumpSTART age range. The Code Orange text now includes "Ontario and many provinces". |
| ems-13 | Accurate | None. |
| ems-14 | Corrected | q2: "cool" did not match "cooling" or "ice", so a correct "start cooling" line scored zero. Added phrases. "Stop cooling at 39" was blocked by the negation rule, so negation-inclusive phrases were added. The bare "iv" phrase was fixed. The restraint unacceptable matched "chemical restraint with midazolam", which rejected a correct answer. It now targets physical restraint only. |
| ems-15 | Corrected | q1: the "do not rely on pulse oximetry" item matched a bare "SpO2" or "saturation", so "monitor SpO2" got credit for the opposite teaching. Bare phrases removed. q2: relabelled from ems KF4 to tox KF2 (hyperbaric selection in the ED), and the explanation adds the 20% pregnancy threshold that some centres use. q3: the CritiCall wording is generalized. |

## Environmental

| SAMP | Verdict | Changes |
|---|---|---|
| environmental-01 | Accurate | Added 38.5 to the stop-cooling key. |
| environmental-02 | Accurate | None. |
| environmental-03 | Corrected | q2: the restraint unacceptable would reject "chemical restraint with lorazepam". It is narrowed to physical restraint. |
| environmental-04 | Accurate | None. |
| environmental-05 | Corrected | q2: at 29.8 C and HR 42, he meets the ERC 2025 criteria for direct transfer to an ECPR centre (core below 30 C, HR below 45). The keyed option now includes alerting an ECLS centre. The ECMO distractor now specifies cannulation while perfusing. q3: the central line item matched "central line" and "wire", and the bradycardia item matched a bare "bradycardia". Both rewarded the wrong action and are now specific. q4: AHA note and a clearer distractor (point 3). |
| environmental-06 | Corrected | q3: the withhold item matched a bare "epinephrine" and "shock", so "give epinephrine every 3 minutes" got credit. It now needs withhold or no wording. q4: the potassium explanation is refined. |
| environmental-07 | Accurate | None. |
| environmental-08 | Corrected | q1: bare "iv" replaced. |
| environmental-09 | Corrected | tPA window (injury, not rewarming). Weight based ibuprofen added to the explanation. The q4 prompt no longer claims that bone scan guides thrombolysis. |
| environmental-10 | Accurate | None. |
| environmental-11 | Corrected | q4 asked for "other" barotrauma signs but keyed pneumomediastinum and subcutaneous emphysema, which were already given in the stem and update. The prompt now says "beyond those already found". Those two items were removed, and pneumoperitoneum was added. |
| environmental-12 | Corrected | q3: bare "diving", "fly" and "flight" matched "resume diving" and "fly home tomorrow". The key now requires no or avoid wording. |
| environmental-13 | Corrected | q4: "elevate" counted as the heart-level item. Elevation is wrong in compartment syndrome. It is now an unacceptable answer, and the explanation says why. |
| environmental-14 | Accurate | None. |
| environmental-15 | Accurate | None. |

## Sources verified

- CCS/CAIC 2019 STEMI focused update on regionalization and reperfusion, Wong GC et al., Can J Cardiol 2019. Year and URL added: https://pubmed.ncbi.nlm.nih.gov/30760415/
- WMS frostbite CPG 2024 update. Year and URL added: https://journals.sagepub.com/doi/10.1177/10806032231222359 . Confirmed 37 to 39 C, ibuprofen 12 mg/kg/day twice daily, and tPA within 24 hours of injury (best within 12).
- ERC 2021 cardiac arrest in special circumstances. Year and URL added: https://www.sciencedirect.com/science/article/pii/S0300957221000642 . Hypothermia points were rechecked against the ERC 2025 special circumstances guideline as summarized by Resuscitation Council UK: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines
- HOPE score, Pasquier M et al., Resuscitation. Year 2018 added.
- Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A. The citation is corrected to add "Sched. A".
- Checked from knowledge only, with no URL added: Morrison LJ et al., NEJM 2006 (TOR rule), Weaver LK et al., NEJM 2002 (HBO for CO), Benson, Koenig and Schultz, Prehosp Disaster Med 1996 (START then SAVE), the Ontario ALS and BLS PCS, TREKK DKA, Diabetes Canada, ACS field triage, ATLS, BTF, UHMS, US Navy Diving Manual, DAN flying after diving workshop, ATA hyperthyroidism and hypothyroidism, ABLS, Rosen's and Tintinalli. All are real publications cited without invented details.
- Originality: there is no overlap with the CFPC sample SAMPs. None of them covers EMS or environmental topics.

## Open questions for the physician

1. environmental-05 q4 and environmental-06: European and AHA practice differ on shocks and epinephrine below 30 C. The key follows ERC and explains the AHA view. Confirm this is the stance you want for a Canadian exam.
2. environmental-05 q2: confirm that "active external rewarming and alert an ECLS centre" is the intended best answer for a perfusing patient at 29.8 C with HR 42. ERC 2025 would transfer directly to an ECPR centre if one is reachable.
3. ems-05 q1: confirm you want the clinical abilities (communicate, reason) accepted alongside the two statutory HCCA abilities.
4. environmental-06 q5: resuscitation stops at 32 C or higher. Some sources use 35 C. Confirm.
5. ems-12 q4 and ems-15 q3: Code Orange and CritiCall are Ontario terms. The keys accept generic wording. Decide whether the stems should name a province.
6. environmental-14 q3: the delayed labial artery bleed is taught at 5 to 14 days. Some texts extend the window to 3 weeks.
