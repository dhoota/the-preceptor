# Batch s35 (emergency medical services) review, Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: every SAMP in `src/samps/s35/ems.ts` (ems-16 to ems-36) and `src/samps/s35/review-extra.ts` (ems-37, ems-38). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Method. I downloaded and read the Ontario ALS PCS version 5.5 file the writer cited and the version 5.4 file now in force, plus BLS PCS version 3.4, and checked every directive the keys rest on line by line: medical and trauma termination of resuscitation, cardiac ischemia, opioid toxicity and withdrawal, suspected adrenal crisis, cardiogenic shock, symptomatic bradycardia, hyperkalemia, traumatic hemorrhage, adult and pediatric nerve agent exposure, DNR, deceased patient, refusal, air ambulance use, interfacility escort, tourniquet, hazardous materials, STEMI and stroke prompt cards. I read the BCEHS P04 page, the CPS HIE statement, the REMM pages and the Okumura Part 1 full text. I searched the whole bank for overlap.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| all | all | sources | ALS PCS version 5.5 is marked "comes into force TBC". Version 5.4 has been in force since 2 June 2025. Citation and URL changed to 5.4. Every keyed directive detail was checked against 5.4 and is unchanged | high |
| ems-19 | q1, q2 | stem, explanation | BCEHS P04 gives oxygen when SpO2 is 94% or lower. The stem gave 94% and the explanations said oxygen was not indicated, which made nasal prong oxygen defensible in q2. Stem SpO2 changed to 97% and both explanations now state the real threshold | high |
| ems-19 | q1 | stem | Explanation rejected salbutamol because "he has no wheeze", which the stem never said. Added to stem. q1 prompt now says "first drug treatment", since BCEHS makes positioning and airflow the first-line measures | medium |
| ems-36 | q1 | explanation | "The dopamine directive covers cardiogenic shock with STEMI, not this" is false. The ACP symptomatic bradycardia directive gives dopamine for HR below 50 with hypotension, which she has. Reason rewritten: hyperkalemic bradycardia responds poorly to chronotropes until calcium is given | high |
| ems-22 | q1, q2 | stem, options, explanation | The stem reused the s09 ems-01 ECG sentence word for word (inferior STEMI with reciprocal change in I and aVL), and q1 (bypass) and q2 (V4R before nitroglycerin) repeated ems-01 q1 and q2. Stem changed to an anterior STEMI. q1 rebuilt to test a bypass contraindication (ventricular paced rhythm). q2 rebuilt to test pad application once STEMI is identified. q3 update and q4 explanation aligned | high |
| ems-26 | all | whole SAMP | Near duplicate of s44 multiple-patients-20: SALT global sort first, tourniquet before categorizing, a young woman with an isolated ankle injury as minimal, and an older man with an open skull fracture and exposed brain as expectant. Rebuilt as a derailment with a passenger trapped for 2 hours: saline before extrication (crush syndrome), SALT rescue breaths for an apneic child, and entrapment time as the handover detail | high |
| ems-24 | q3, q4 | options, explanation | q4 (contaminated walk-ins undress and rinse outside) and q3 (outside decontamination and a locked single entrance) repeated s44 multiple-patients-22 q1 and q2. q3 rebuilt: alert nearby hospitals about people who self-evacuated. q4 rebuilt: contact lens removal and prolonged irrigation for an alkali eye exposure. Province changed to Ontario so the irrigation standard applies | high |
| ems-24 | q3 (old) | explanation, source | "Most victims arrived without an ambulance" and the absence of field decontamination come from Okumura Part 1, not Part 2 (writer doubt 3 confirmed). Part 1 added as a source for the new q3 | high |
| ems-27 | q4 | explanation | "Many hospital staff had secondary exposure" was attributed to a paper whose abstract I could verify only for its recommendations. Rephrased to what the Part 2 abstract states: an emergency decontamination area and chemical-resistant suits and masks | medium |
| ems-35 | q3 | stem, options, explanation | Tour bus rollover with a "re-triage every arrival" key repeated s44 multiple-patients-33 (tour bus rollover, secondary triage of every arrival). Mechanism changed to a crane collapse. q3 rebuilt to the in-hospital tranexamic acid plan after a single field dose | medium |
| ems-25 | q2 | explanation, source | Staff risk and lead apron statements were cited to the REMM hospital page, which says neither. REMM's radiation PPE page states that secondary contamination has rarely caused significant problems and that diagnostic lead aprons do not shield against high-energy radiation. The unsupported "little likelihood of becoming airborne" claim removed. New source added | medium |
| ems-29 | q3 | option, explanation, source | "3 mL/kg/hour, the ACoRN starting rate" could not be verified and ACoRN is usually quoted at 80 mL/kg/day (3.3 mL/kg/hour). Rate removed from the option. Explanation now rests on the CPS statement (normal glucose, antiepileptics when seizures are present, caution about neurotoxicity). The ACoRN source is no longer cited and was removed | medium |
| ems-31 | q1 | prompt | Other references give different stress doses (for example 50 mg at 6 years, or 50 to 100 mg/m2, which puts 80 mg in range for her). Prompt now names the Ontario adrenal crisis directive, under which 40 mg is the only correct dose | medium |
| ems-34 | q2 | explanation, source | "Intraosseous access is quicker than a peripheral IV" overstated. Reworded. The 2020 AHA pediatric guideline is superseded by the 2025 AHA and AAP Part 8 guideline. Citation updated. Doses unchanged | medium |
| ems-37 | q1 | correct | Key was index 3 (wait for an advanced care crew) while the explanation argues for proceeding to the local hospital. Key restored to index 1 | high |
| ems-38 | q2 | explanation | Explanation cites a "serum lactate of 7.8 mmol/L" that appears nowhere in the case and would not confirm a blood pressure target. Sentence removed | high |
| several | n/a | sources | Added verified PubMed URLs for Iedema 2012, Shaker 2020, Warren 2004, Evans 2021 and Isselbacher 2022 | high |

## Key changes

- ems-22 q1. Before: "Direct transport to the PCI centre" (destination question). After: rebuilt question, key "Ventricular paced rhythm on ECG". Reason: duplicate of s09 ems-01 q1.
- ems-22 q2. Before: "Record V4R before any nitroglycerin". After: rebuilt question, key "Apply defibrillation pads now". Reason: duplicate of s09 ems-01 q2 once the stem became an anterior STEMI.
- ems-24 q3. Before: menu, keys airway equipment, outside decontamination area, single monitored entrance. After: single, key "Alert nearby hospitals to expect them". Reason: duplicate of s44 multiple-patients-22 q2.
- ems-24 q4. Before: "Undress and rinse them outside first". After: rebuilt, key "Remove lenses, irrigate 20 minutes or more". Reason: duplicate of s44 multiple-patients-22 q1.
- ems-26 q1 to q4. Whole SAMP rebuilt (now three questions). Keys: "Isotonic saline infusion now", "Give two rescue breaths", "Hours she was trapped". Reason: near duplicate of s44 multiple-patients-20.
- ems-35 q3. Before: "Triage each patient again on arrival". After: rebuilt, key "tranexamic acid 1 g IV over 8 hours". Reason: duplicate of s44 multiple-patients-33 q3.
- ems-37 q1. Before: index 3 "Wait at the scene for an advanced care crew". After: index 1 "Proceed now to your emergency department". Reason: the key contradicted the Ontario air ambulance standard and its own explanation.

After the changes, single key positions are 14, 13, 11, 15 and 13 of 66 (highest 22.7%), and the key is the longest option in 19 of 66 singles (28.8%).

## Writer doubts, resolved

1. ALS PCS 5.5 is not in force. Switched to 5.4. Keyed content is identical.
2. ems-22 q3. Confirmed. BLS PCS STEMI protocol paragraph 2(d)(iii) lists "VSA without ROSC" as a complication requiring PCP diversion. The explanation already says the PCI program may still accept him.
3. ems-24 Tokyo figures. Confirmed from Part 1: 688 victims moved by EMS, more than 4 000 on foot, by taxi or private vehicle, only 7% of St Luke's arrivals by ambulance, no field decontamination.
4. ems-25 wording. Rewritten against the REMM PPE page.
5. ems-29 newborn statements. CPS verified for criteria, 6 hours, passive cooling, rectal or axillary checks every 15 minutes, no ice packs, 33 to 34°C. Phenobarbital now rests on the CPS caution. The bicarbonate sentence rests on general neonatal practice (low).
6. ems-30 targets. Verified: 2022 ACC/AHA advises SBP below 120 mmHg and HR 60 to 80/minute, with IV beta-blockers first.
7. ems-31 dose. 2 mg/kg IM or IV, maximum 100 mg, rounded to the nearest 10 mg, one dose, conditions as keyed in q2. Verified in 5.4.
8. Citations from memory. Shaker 2020 (PMID 32001253), Evans 2021 (34605781) and Isselbacher 2022 (36322642) verified. Topjian 2020 is real (33081526) but superseded, and was replaced by Lasa 2025 (41122885).

## Sources verified

- Ontario ALS PCS version 5.4, in force 2 June 2025: https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf (version 5.5 file read for comparison)
- Ontario BLS PCS version 3.4: https://files.ontario.ca/moh_2/moh-standards-basic-life-support-patient-care-standards-v3-4-en-2023-03-10.pdf
- Health Care Consent Act, 1996: https://www.ontario.ca/laws/statute/96h02
- Iedema 2012, IMIST-AMBO: https://pubmed.ncbi.nlm.nih.gov/22626739/
- Seamon 2015, EAST thoracotomy: https://pubmed.ncbi.nlm.nih.gov/26091330/
- Shaker 2020, anaphylaxis practice parameter: https://pubmed.ncbi.nlm.nih.gov/32001253/
- Carter 2019, paramedic palliative care: https://pubmed.ncbi.nlm.nih.gov/30739628/
- BCEHS P04 palliative dyspnea: https://handbook.bcehs.ca/clinical-practice-guidelines/p-palliative-care/p04-palliative-care-dyspnea/
- Wong 2019, CCS/CAIC STEMI: https://pubmed.ncbi.nlm.nih.gov/30760415/
- CRASH-2 timing analysis 2011: https://pubmed.ncbi.nlm.nih.gov/21439633/
- Okumura 1998 Part 1: https://pubmed.ncbi.nlm.nih.gov/9660289/ (full text read)
- Okumura 1998 Part 2: https://pubmed.ncbi.nlm.nih.gov/9660290/ (abstract read)
- REMM contamination modifiers: https://remm.hhs.gov/contam_modifiers.htm ("removing all clothes can eliminate about up to 90% of external contamination", life-saving care before formal decontamination)
- REMM radiation PPE: https://remm.hhs.gov/radiation_ppe.htm
- REMM hospital activities: https://remm.hhs.gov/hospitalprep.htm (control line)
- Lerner 2008, SALT: https://pubmed.ncbi.nlm.nih.gov/18769263/ (two rescue breaths for children confirmed by search)
- Sever and Vanholder 2012, crush victims: https://pubmed.ncbi.nlm.nih.gov/22467763/ (fluid before extrication, avoid potassium-containing fluid, per the 2013 CJASN summary 23024157)
- Warren 2004, critical care transport: https://pubmed.ncbi.nlm.nih.gov/14707589/
- Evans 2021, Surviving Sepsis: https://pubmed.ncbi.nlm.nih.gov/34605781/
- Lemyre and Chau 2018, CPS HIE (reaffirmed 2024): https://cps.ca/en/documents/position/hypothermia-for-newborns
- Isselbacher 2022, ACC/AHA aortic: https://pubmed.ncbi.nlm.nih.gov/36322642/
- Lasa 2025, AHA and AAP pediatric ALS: https://pubmed.ncbi.nlm.nih.gov/41122885/
- Not re-verified this session, unchanged: PRISM volume 1 (writer read the PDF), CSBPR 2022 and ATLS 11th edition (both shared with s09).

## Needs physician decision

- ems-37 and ems-38 in review-extra are copies of ems-23 and ems-30 with planted defects (now fixed). As duplicates they should not ship.
- ems-30 q1 and q2 repeat s19 abdominal-pain (esmolol before vasodilators, SBP below 120 mmHg and HR 60 to 80/minute). The transfer setting is new but the teaching point is not. Rewrite or accept.
- ems-24 q2 (stridor and hoarse voice transported first) repeats s44 multiple-patients-22 q4 (the same patient assessed first). Left in place, flagged.
- ems-16 q4 (termination exclusions such as hypothermia) overlaps s09 ems-04 q3. ems-18 q1 (capacity decides refusal) overlaps s09 ems-05 q1. ems-21 q4 (last known well, not time found) overlaps s09 ems-02 q2. ems-28 q3 (peripheral norepinephrine rather than delay for a central line) overlaps s50 shock. ems-33 q1 and q3 (scene GCS and pupils known only to the crew) overlap s09 ems-03 q3. ems-27 q4 partly overlaps s44 multiple-patients-22 q2. Each adds a province-specific or transfer-specific angle, so I flagged these rather than rewriting them.
- ems-35 q3 (new) treats the field 1 g IM dose as the CRASH-2 loading dose and keys the 8 hour infusion. That is common practice, but no Canadian source states it for an IM field dose. Confirm.
- ems-26 q1 (new) says tourniquets are for life-threatening bleeding and are not used to prevent reperfusion injury, and that furosemide and mannitol are not field treatments. This is based on the Sever 2012 recommendations. I verified the abstract, not the full monograph.
- ems-25 q2 key "Low with gown, gloves and mask". REMM also describes respirators for first receivers in some settings. The key fits the relative risk, but a physician should confirm it.
- ems-29 q3. The bicarbonate sentence is general neonatal practice, not from the CPS statement (low).

## Process note

While setting up a local format check, I copied a scratch test file into `tests/` and deleted it within the same shell command. No repository file outside `src/samps/s35/` and this report was changed. The official checks ran against the unmodified test files.

## Summary

- 21 SAMPs in the batch plus 2 in review-extra, all reviewed file by file.
- 17 fix rows. Of these, 6 correct false or unsupported clinical statements (ems-19, ems-36, ems-25, ems-29, ems-27, ems-34), 4 rebuild overlapping content (ems-22, ems-24, ems-26, ems-35), 1 fixes a wrong key (ems-37), 1 removes an invented fact (ems-38), 1 names the directive that decides the dose (ems-31), and 2 cover citations (ALS PCS version and missing URLs).
- Key changes: 7 (6 rebuilt questions or SAMPs and 1 key restoration).
- SAMP ids with a defect: ems-19, ems-22, ems-24, ems-25, ems-26, ems-27, ems-29, ems-31, ems-34, ems-35, ems-36, ems-37, ems-38, plus the batch-wide ALS PCS citation. Overlap flags without edits: ems-16, ems-18, ems-21, ems-24 q2, ems-27, ems-28, ems-30, ems-33.
- Checks: `npx tsc --noEmit -p . 2>&1 | grep samps/s35` is clean. `SAMP_BATCH=s35 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 450 of 450. The count fell from 454 because ems-26 now has three questions.
