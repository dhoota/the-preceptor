# Q500 writer report, round 2: s66, Multiple trauma

Writer: Preceptor. File: `src/samps/s66/multiple-trauma.ts`, ids multiple-trauma-48 to multiple-trauma-52 (unchanged). All SAMPs stay `reviewed: false`, `version: 1`, author "Preceptor". This revision needs a fresh independent review.

## Required fixes and how each was done

| Item | Required fix | Change made |
|---|---|---|
| 48 q3 | Replace the defensible distractor "Cervical collar alone on the stretcher" and rewrite the key's reason from the statement's own words | Distractor replaced by "Side lying with a cervical collar". The key reason now quotes the statement: a long spine board, scoop stretcher or vacuum mattress "is recommended to assist with patient transfers", and time on backboards is minimized "with consideration for use of a vacuum mattress or padding" if prolonged. It adds that she moves between stretcher, aircraft and trauma centre over about 90 minutes. Side lying is rejected because the statement requires head, neck and torso alignment. Key moved from position 3 to position 2 (index 1). |
| 48 q4 | Remove "pediatric style schedule" | Sentence now reads exactly as the reviewer gave it: "A single dose of 10 mg/kg, 600 mg at 60 kg, is not the tested regimen and gives less drug than the 8 hour infusion." (10 x 60 = 600 mg.) |
| 49 q3 | Attribute only the briefing content to the CAFG | First sentence replaced with the reviewer's wording (brief the team on the plan, the response to failure and the triggers, empower everyone to call a trigger), then "A challenge-response checklist read aloud is a structured way to deliver that briefing." The briefing and empowerment wording was rechecked in the full text (Europe PMC, PMC8186352). |
| 50 q2 | Remove "his CT" from the bladder and renal sentence | Now "and his examination gives no sign of either." |
| 50 q3 | Key depended on the reference, plus "rising creatinine" | Option (a): the update now names the reference: "The department's rhabdomyolysis protocol follows the 2016 Critical Care systematic review." This follows the bank's precedent in multiple-trauma-28 ("The department follows the European guideline ..."). Under that named source the target is 300 mL/hour, so 30, 50, 100 and 150 mL/hour are all below it and only one key holds. The explanation now says "a raised creatinine", and adds the review's point that mannitol is reserved for output that stays below 300 mL/hour on fluids. Option (b) was rejected because distractors below 1 mL/kg/hour would still leave the s09 target (75 to 100 mL/hour) closest to a distractor, not the key. |
| 51 q1 | Repeat of multiple-trauma-33 q2 (intubate before transfer) | Removed as a decision. The intubation is now a fact in the q1 update ("His GCS falls to 8 (E2 V2 M4) and he is intubated"). The former q2 (screening CT angiography of the neck, which passed) is now q1. A new transport decision was written as q4: add invasive arterial pressure monitoring before the flight (key feature 8). Source: WSES 2023 consensus on severe TBI in a hospital without neurosurgery, recommendation 7 (invasive arterial pressure in addition to ECG, SpO2 and ETCO2, weak recommendation), with the text that the line "should not excessively delay the patient transfer". Distractors: central venous pressure line, cuff readings spaced to 15 minutes, automated pupillometry and optic nerve sheath ultrasound (the consensus could not recommend the last two as screening tools, recommendations 16 and 17). |
| 51 q3 | Repeat of airway-34 q2 teaching (nasal route through a skull base fracture) | Removed. The basal skull fracture stays as a stem detail in a new q2 with a different decision: no prophylactic antibiotics for a basal skull fracture with a CSF leak (Cochrane 2015, Ratilal et al., five RCTs, 208 participants, no reduction in meningitis or mortality, with or without leak, and one trial showing a shift to resistant nasopharyngeal flora). Mapped to key feature 3 (easily missed injuries and iatrogenic problems). The update no longer says "CT angiography is normal", which avoids a mock-mode cue to the q1 key. |
| 51 q4 (advisory) | Thin reason against 3% saline | Taken: "Hypertonic 3% saline is reserved for signs of herniation or raised intracranial pressure, and it is not the first fluid for hypotension after sedation." The fluid question is now q3. |

multiple-trauma-51 now has 4 questions: q1 CT angiography (KF3), q2 no prophylactic antibiotics (KF3), q3 0.9% saline (KF6), q4 arterial line before transfer (KF8). The ATLS source was dropped from this SAMP because no question in it cites ATLS any more. Cochrane and WSES were added (4 sources).

multiple-trauma-52 (passed) was not changed.

## Uniqueness check

Read the full catalogues `catalog/multiple-trauma.md`, `catalog/airway.md` and `catalog/environmental.md`. There is no head-injury catalogue (`headache.md` is a different topic). Also grepped every catalogue for the new angles:

- Arterial line before transfer: the only arterial line items in the bank are peri-intubation hemodynamic preparation (airway, shock), vasopressor support (infectious diseases, tox, IHD, arrhythmia, anaphylaxis oral cases) and the diving oral case. None tests monitoring for a transfer. The transfer items in the bank (ems-08, ems-09, burns-07, burns-11, multiple-patients-08, airway-11, the snowmobile oral case) cover tube securing, capnography, cuff pressure at altitude, gastric and urinary tubes, ventilator gas check, oxygen supply and documents. None keys an arterial line.
- Antibiotic prophylaxis for a basal skull fracture: absent from every catalogue. The only skull base items are airway-34 q2 (nasal route danger) and an eye stem detail.
- Rhabdomyolysis urine target: the decision stays, now under a named protocol. The bank holds two other targets (environmental s09, 1 to 1.5 mL/kg/hour, and the trench collapse oral case, 200 to 300 mL/hour), listed below for the physician.
- New patient numbers in 51 q4 (BP 128/76 mmHg, 45 minutes) were checked against the catalogues. No reuse found.

No new D1 repeat was created.

## Key positions and coverage after the revision

21 single questions, 1 menu. Single key positions (first to fifth): 5, 4, 2, 5, 5. No position is above 25 percent and every position is used.

| Key feature | Questions |
|---|---|
| 1 | 52 q1 |
| 2 | 48 q1, 49 q2, 49 q5, 52 q3 |
| 3 | 50 q4, 51 q1, 51 q2 |
| 4 | 50 q1 |
| 5 | 50 q2 |
| 6 | 48 q4, 50 q3, 51 q3 |
| 7 | 48 q2, 49 q1, 49 q3, 49 q4, 52 q2 |
| 8 | 48 q3, 51 q4, 52 q4, 52 q5 |

## Checks

`npx tsc --noEmit -p . | grep samps/s66`: no output. `SAMP_BATCH=s66 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 136 tests passed. Strings scanned for dashes and semicolons: none. All updates are 45 words or fewer.

## Sources verified this round

- Fischer PE et al. Spinal motion restriction in the trauma patient: a joint position statement. Prehosp Emerg Care. 2018. Full text read: https://www.ena.org/sites/default/files/2025-08/Spinal%20Motion%20Restriction%20in%20the%20Trauma%20Patient.pdf (cited URL unchanged: https://pubmed.ncbi.nlm.nih.gov/30091939/).
- Law JA et al. CAFG part 2. Can J Anaesth. 2021. Full text via Europe PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/
- Chavez LO et al. Crit Care. 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4908773/ ("targeting a urine output of 300 mL/h", mannitol only if fluids alone do not give output above 300 mL/h).
- Ratilal BO, Costa J, Pappamikail L, Sampaio C. Antibiotic prophylaxis for preventing meningitis in patients with basilar skull fractures. Cochrane Database Syst Rev. 2015. https://pubmed.ncbi.nlm.nih.gov/25918919/ (abstract read through Europe PMC, PMC10554555).
- Picetti E, Catena F, Abu-Zidan F, et al. Early management of isolated severe traumatic brain injury patients in a hospital without neurosurgical capabilities: WSES consensus. World J Emerg Surg. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9830860/ (full text read: recommendations 7, 16, 17 and the text on not delaying transfer).
- Checked but not used: Sever MS, Vanholder R, et al. Recommendations for the management of crush victims in mass disasters. Nephrol Dial Transplant. 2012 (field version read). It gives fluid rates (1000 mL/hour, then 500 mL/hour) but no 300 mL/hour urine target, so it could not support the key. Association of Anaesthetists 2019 brain-injured transfer guideline: full text was not reachable, so not cited.

## Uncertain, for the reviewer and physician

- Bank conflict to settle: three myoglobinuria urine targets now coexist (environmental s09 about 75 to 100 mL/hour, trench collapse oral case 200 to 300 mL/hour, multiple-trauma-50 q3 300 mL/hour under a named protocol). The naming makes 50 q3 single-keyed, but the bank should settle one position.
- 51 q4 rests on a weak WSES recommendation (82.9% agreement). The stem gives 45 minutes before the aircraft lands so that the line does not delay transfer, which the consensus requires.
- 51 q2 maps antibiotic prophylaxis to key feature 3 (iatrogenic problems: resistant flora, no benefit). A reviewer may prefer another key feature. Coverage does not depend on it.
- 48 q3: the statement does not mention side lying. It is rejected on the statement's requirement to keep head, neck and torso aligned on a device. She is conscious with a clear airway, so the lateral trauma position used for airway protection does not apply.
- Mock-mode cues already flagged by QA (48 q1 by the flight in q3 and q4, 49 q2 by the q3 update) are unchanged.
