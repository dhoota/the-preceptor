# Batch s35 (emergency medical services) review, Lens B: internal consistency and numbers

Reviewer lens: B, internal consistency and numbers. Scope: every SAMP in `src/samps/s35/ems.ts` (ems-16 to ems-36) and `src/samps/s35/review-extra.ts` (ems-37, ems-38). As asked, the parts rebuilt by Lens A (ems-22 q1 and q2, ems-24 q3 and q4, all of ems-26, ems-35 q3) also had a full Lens A check. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Method. I read every stem, update, option and explanation sentence against its own case. I checked each directive the keys rest on against the text of the Ontario ALS PCS version 5.4 and BLS PCS version 3.4 (the files Lens A downloaded from ontario.ca, which I read again line by line): medical and trauma termination, field trauma triage, cardiac ischemia, STEMI and stroke prompt cards, opioid toxicity and withdrawal, adrenal crisis, traumatic hemorrhage (tranexamic acid), adult and pediatric nerve agent, symptomatic bradycardia, hyperkalemia, DNR, deceased patient, refusal, air ambulance, patient transport and escorts, hazardous materials and tourniquet. I recomputed every dose, score and timeline with a script (below). I compared the batch against the current `src/samps/s44/multiple-patients.ts`.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| ems-37 | q1 | correct | The planted wrong key had returned: index 3 "Wait at the scene for an advanced care crew" while the explanation argues for proceeding to the local hospital. Restored to index 1 | high |
| ems-38 | q2 | explanation | The invented "serum lactate of 7.8 mmol/L seen on the first blood gas" had returned. The case gives no lactate and a lactate would not confirm a BP target. Sentence removed | high |
| ems-23, ems-37 | q2 | update | Timeline. The crash was 25 minutes before the 1420 call (1355) and the loaded ambulance was 20 minutes from the hospital, so arrival is 1440 at the earliest, 45 minutes after the crash. The update said 40 minutes. Changed to 50 minutes, which still fits the aircraft landing 15 minutes later and the 3 hour tranexamic acid window | high |
| ems-27 | q3 | update, explanation | The explanation relies on "her pinpoint pupils" but the update never gave her pupils (only the stem says many commuters have them). Added pinpoint pupils to the update | high |
| ems-26 | q2 | prompt, options, explanation | Repeated s44 multiple-patients-20 q4 (SALT two rescue breaths for an apneic child, with near identical options). Rebuilt to a different SALT teaching point on key feature 4: the global sort, where those who are still or have an obvious life threat are assessed first, then those who wave, then walkers. Key position moves from 2 to 4 | high |
| ems-27 | q4 | whole question, stem, sources | Menu keys (chemical protective gear and decontamination at one entrance) repeated s44 multiple-patients-22 q2, which now keys the chemical disaster plan with an outside decontamination area and staff PPE. Rebuilt as a weight-based pediatric pralidoxime dose under the Ontario pediatric nerve agent directive: 24 kg x 15 mg/kg = 360 mg IM, under the 600 mg cap. Stem now says paramedics hold the adult and pediatric directives. Okumura Part 2 was no longer cited and was removed from this SAMP's sources | high |
| ems-17 | q3 | update | The crew patched from 12 minutes away but the patient "arrives 11 minutes later", faster than the stated drive. Changed to 14 minutes | medium |
| ems-26 | q3 | explanation | "Only the crew can report how long her legs were compressed" overstated, since the call ahead already gave the entrapment start (0815). Reworded: only the crew knows when she was actually freed, which sets the compression time (about 2.5 to 2.75 hours given the 1130 arrival and 30 minute drive) | medium |
| ems-29 | q2 | explanation | Distractor reason spoke of "a range of 34 to 36°C", which matches neither option. Now names both options' ranges (34 to 35°C and 35 to 36°C) | medium |
| ems-31 | q2 | explanation | Her glucose of 3.4 mmol/L is hypoglycemia under the ALS PCS preamble (below 4.0 mmol/L from age 2), so it is also a qualifying sign. The explanation implied only the other signs qualified. Added | medium |
| ems-16 | q3 | explanation | "Time found and time CPR began ... define her low flow time" is imprecise. Found time and the roommate's last contact bound the no-flow time, and CPR start defines low flow. Reworded | low |
| ems-32 | q1 | explanation | "Methadone ... is the listed contraindication" but the directive also lists allergy. Changed to "a listed contraindication ... alongside allergy" | low |
| ems-22 | n/a | code comment | Comment still read "inferior infarct" after the Lens A rebuild to an anterior STEMI. Corrected (not shown to users) | low |

## Key changes

- ems-37 q1. Before: index 3, "Wait at the scene for an advanced care crew". After: index 1, "Proceed now to your emergency department". Reason: the key contradicted the Ontario air ambulance standard (BLS PCS: proceed to the closest local hospital unless the helicopter is on final approach) and its own explanation.
- ems-26 q2. Before: "Give two rescue breaths". After: rebuilt question, key "Those still or with a clear life threat". Reason: duplicate of s44 multiple-patients-20 q4.
- ems-27 q4. Before: menu, keys bulk atropine, chemical protective gear, decontamination at one entrance. After: single, key "pralidoxime 360 mg IM". Reason: partial duplicate of s44 multiple-patients-22 q2.

After the changes, single key positions are 14, 13, 11, 16 and 13 of 67 (highest 23.9%), and the key is the longest option in 20 of 67 singles (29.9%).

## Numbers recomputed (script)

- ems-31: 2 mg/kg x 21 kg = 42 mg, rounded to the nearest 10 mg = 40 mg. 60 and 80 mg are 2.9 and 3.8 mg/kg. 100 mg cap reached at 50 kg. Hypotension for age 6 is SBP below 82 mmHg (78 qualifies). Hypoglycemia is below 4.0 mmol/L (3.4 qualifies). Directive allows one dose. Correct.
- ems-34: 9 kg. epinephrine 0.09 mg, atropine 0.18 mg, amiodarone 45 mg, bicarbonate 9 mmol. Correct.
- ems-27: adult moderate atropine 2 mg, severe 6 mg, pralidoxime 600 and 1800 mg. Pediatric under 10 kg atropine 0.5 mg. New q4: 24 kg x 15 = 360 mg, 45 mg/kg = 1080 mg (over the 600 mg cap), 600 mg = 25 mg/kg, 240 mg = 10 mg/kg.
- ems-33: GCS E2 V3 M5 = 10. Correct.
- ems-21: LAMS facial droop 1 + arm falls rapidly 2 + weak grip 1 = 4. Last known well 0620 to arrival about 0835 is 2.25 hours. A last known well 4 hours earlier plus 50 minutes is 4.8 hours, within 6. GCS 9 is below 10. Correct.
- ems-22: 3 mm elevation in V2 to V5 meets the 2 mm V1 to V3 criterion. PCI 40 minutes minus 15 minutes driven = 25 minutes. 50 minute transport is under the 60 minute exclusion. Correct.
- ems-23: 1355 crash, earliest arrival 1440 = 45 minutes. Fixed as above.
- ems-26: trapped from 0815, 2 hours at the 1015 call, freed about 1045 to 1100 (2.5 to 2.75 hours), arrival 1130. Consistent after the q3 rewording.
- ems-29: pH 6.92 (at most 7.0), base deficit 17 (at least 16), Apgar 5 at 10 minutes, 90 minutes old plus a 3 hour wait = 4.5 hours, within 6. Correct.
- ems-32: naloxone 0.4 mg IM x2 within the maximum of 3. COWS 14 is at least 8. COWS 6 is mild (5 to 12) and under 8. Buprenorphine and naloxone 16 mg initial, 8 mg subsequent. Age 16 or older. Correct.
- ems-35: injury 1350, arrival 1500 = 70 minutes. HR 124 and option HR 118 are both at least 110/minute. Age 16 or older, exclusions over 3 hours or unknown time and isolated head injury. Correct.
- ems-36: HR 44 below 50, SBP 82 below 90. Calcium gluconate 1 g over 2 to 3 minutes, repeat after 5 minutes, maximum 2 doses. Salbutamol 10 mg NEB or 1600 mcg MDI. Duration of action 20 to 60 minutes. Correct.
- ems-16 and ems-34: medical TOR age 16 or older, arrest not witnessed by paramedics, 20 minutes without ROSC, no shock. Exclusions: pregnancy of 20 weeks or more, hypothermia, airway obstruction, non-opioid overdose. Correct.
- ems-17: trauma TOR PEA only with the closest ED 30 minutes or more away. Penetrating torso or head and neck with a lead trauma hospital under 30 minutes is excluded. Field trauma triage paragraph 6 sends a VSA penetrating torso patient to the LTH when under 30 minutes. Correct.

## Lens A check of the parts Lens A rebuilt

- ems-22 q1 and q2. Verified against the STEMI prompt card (18 or older, under 12 hours, ventricular paced rhythm and LBBB excluded, 60 minutes from patient contact) and the PCP cardiac ischemia directive (ASA 160 to 162 mg once, nitroglycerin maximum single dose 0.4 mg, "apply defibrillation pads when a STEMI is identified"). Sound.
- ems-24 q3 and q4. Tokyo figures (688 by EMS, more than 4 000 on foot, taxi or private vehicle, no guidance to private vehicles) confirmed in the Okumura Part 1 text. BLS PCS hazardous materials: remove readily removable contact lenses, irrigate an alkali burn for at least 20 minutes at scene if stable and continue en route. Sound. Neither now repeats s44 multiple-patients-22 as rebuilt.
- ems-26. Crush teaching (fluid before extrication, isotonic saline, no potassium) matches Lens A's source. q2 rebuilt by me. The SALT global sort is confirmed in the 2008 SALT concept statement (walkers assessed last, the rest asked to wave, those still or with an obvious life threat first).
- ems-35 q3. Internally consistent (70 minutes from injury, still in shock). The IM field dose treated as the CRASH-2 loading dose remains a physician decision, as Lens A noted. The directive itself allows one 1 000 mg dose IV or IM.

## Overlap with the current s44 file

- ems-26 q2 and ems-27 q4: rebuilt (above).
- ems-24 q2 (stridor patient transported first): Lens A flagged an overlap with s44 multiple-patients-22 q4. That s44 question is now about an exposed triage nurse, so the overlap is gone.
- ems-24 q1 (remove clothing and irrigate for a caustic agent) and s44 multiple-patients-22 q1 (move him outside for decontamination) share clothing removal but test different decisions. Left.
- ems-35 q1 (tourniquet time at handover) and s44 multiple-patients-20 q1 (SALT category after a tourniquet) are different points. Left.
- ems-35 is no longer a tour bus case, so s44 multiple-patients-33 does not overlap.

## Sources verified

- Ontario ALS PCS version 5.4: https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf (text read for every directive listed above)
- Ontario BLS PCS version 3.4: https://files.ontario.ca/moh_2/moh-standards-basic-life-support-patient-care-standards-v3-4-en-2023-03-10.pdf
- SALT mass casualty triage concept statement, Disaster Med Public Health Prep 2008, volume 2, issue 4, pages 245 to 246: https://em.umaryland.edu/files/uploads/ems/salt_2008.pdf (global sort and lifesaving interventions read). The cited Lerner 2008 paper (https://pubmed.ncbi.nlm.nih.gov/18769263/) is the evaluation that proposed SALT.
- Okumura 1998 Part 1 (text) and Part 2 abstract (PubMed eutils): https://pubmed.ncbi.nlm.nih.gov/9660289/ and https://pubmed.ncbi.nlm.nih.gov/9660290/. The Part 2 abstract recommends a decontamination area and chemical-resistant suits and masks but says nothing on antidote stock, one more reason the old ems-27 q4 atropine key was unsupported by its cited source.

## Needs physician decision

- ems-37 and ems-38 in review-extra are copies of ems-23 and ems-30. Their planted defects had reappeared after Lens A fixed them and are fixed again. As duplicates they should not ship.
- ems-35 q3: the field IM dose treated as the CRASH-2 loading dose, with the 8 hour infusion keyed (carried from Lens A).
- ems-27 q4 (new): check that the pediatric pralidoxime dose is an acceptable examination point for an emergency physician giving field direction.
- Lens A overlap flags that remain unedited (ems-16 q4, ems-18 q1, ems-21 q4, ems-28 q3, ems-30 q1 and q2, ems-33 q1 and q3) are outside s44 and were not changed.

## Summary

- 21 SAMPs plus 2 in review-extra, each read file by file.
- 13 fix rows: 2 reappeared planted defects in review-extra (wrong key, invented lactate), 1 timeline error across two SAMPs (ems-23 and ems-37), 1 finding cited but never given (ems-27 pupils), 2 rebuilds for overlap with the current s44 file (ems-26 q2, ems-27 q4), 1 minor timeline mismatch (ems-17), 4 inaccurate explanation statements (ems-26 q3, ems-29 q2, ems-31 q2, ems-16 q3), 1 wording slip (ems-32 q1) and 1 code comment (ems-22).
- Every dose, score, threshold and timeline was recomputed. No dose error was found in the keys.
- Key changes: 3.
- SAMP ids with a defect: ems-16, ems-17, ems-22, ems-23, ems-26, ems-27, ems-29, ems-31, ems-32, ems-37, ems-38.
- Checks: `npx tsc --noEmit -p . 2>&1 | grep samps/s35` is clean. `SAMP_BATCH=s35 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 450 of 450.
