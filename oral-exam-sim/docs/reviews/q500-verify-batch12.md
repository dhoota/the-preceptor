# Q500 verification review: batch12

Fresh independent review of the four oral cases in `src/cases/batch12/`. I did not write or edit any of them. The first QA round edited the files in place (including renaming `ice-hut-heater-contact-burns` to `work-trailer-heater-burns`), so this review treats the current text as a writer revision and reviews the whole of it. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-writer-batch12.md` and `docs/reviews/q500-qa-batch12.md`.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| first-trimester-loss-mechanical-valve | FAIL | 2 |
| work-trailer-heater-burns | FAIL | 1 |
| hyperacute-purulent-red-eye | PASS | 0 |
| intoxicated-driver-hip-dislocation | FAIL | 1 |

## Checks run

- `CASE_BATCH=batch12 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes, 45 of 45.
- No em dashes, en dashes or semicolons in any string. No US spellings outside proper names of cited works. No personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` on every case. No mnemonics.
- Stems are 43 to 53 words. Every card weight converts correctly to pounds.
- Every PubMed id checked through NCBI E-utilities. All match the cited work. PMC pages, the NAC PCC PDF and the ABA referral page open to the right documents. The CDC gonorrhea page and the PHAC gonorrhea page were read through WebFetch (PHAC modified 4 June 2026). ATLS 10th edition (2018) has no URL, which the rules allow.

## first-trimester-loss-mechanical-valve: FAIL

### Numbers recomputed

- PCC: INR 4.6 falls in the NAC 2022 INR 3 to 5 band, 2000 IU. The weight and INR option for INR 4 to 6 is 35 IU/kg, 35 x 64 = 2240 IU. Both confirmed in the NAC PDF (sample dosing options 2 and 3).
- Major bleeding: hemoglobin 128 to 84 g/L is a fall of 44 g/L, over the ISTH 20 g/L threshold quoted by NAC. Correct.
- Rh immune globulin 300 mcg at 13 weeks and 4 days: consistent with SOGC 448 and SCORING-RULINGS A18 (300 mcg from 12 weeks).
- Warfarin over 5 mg a day favours heparin in the first trimester: matches ACC/AHA 2020.
- Orthostatic change: lying 112 and 100/62, sitting 136 and 82/50. Pulse rise 24, systolic fall 18. See fix 1.

### Required fixes

1. File `src/cases/batch12/first-trimester-loss-mechanical-valve.ts`, node `q-first`, choice `c-resus`, feedback.
   - Current text: "A young woman compensates well, so a pulse of 118 and a 30 mmHg drop on sitting are late signs, not reassurance."
   - Problem: finding `orthostatics` gives 100/62 lying and 82/50 sitting, a systolic fall of 18 mmHg, not 30.
   - Required change: "A young woman compensates well, so a pulse rise of 24 and an 18 mmHg fall in systolic pressure on sitting are late signs, not reassurance."
   - Source: the case's own finding `orthostatics`.

2. Same file. The `q-reverse` model answer (fourth line) and rubric item `ft-m3` (text, teaching and source).
   - Current model answer: "Give IV vitamin K with the PCC, in a dose agreed with cardiology. A 10 mg dose suits only when warfarin will not restart for a week."
   - Current ft-m3 text: "Gives IV vitamin K with the dose agreed with cardiology, knowing 10 mg suits only when warfarin will not restart within a week." Teaching: "In mechanical valves with uncontrollable bleeding, PCC is reasonable and adjunctive IV vitamin K is reasonable when warfarin will not resume for 7 days. Lower doses keep restarting simple." Source `acc-valve`.
   - Problem: neither source gives the "10 mg only when warfarin will not restart for a week" rule. ACC/AHA 2020 speaks to whether vitamin K is reasonable at all (when warfarin will not resume within 7 days), not to a 10 mg dose. In this case warfarin restarts within days, so under that ACC/AHA line vitamin K would not be indicated, which contradicts the case giving it. The Canadian NAC 2022 document, read in full, says PCC and IV vitamin K "should be given concurrently" because the PCC effect lasts about 6 hours, and that clinicians "should not be hesitant to prescribe IV vitamin K as it does not produce ... warfarin resistance when used at appropriate doses". It gives no dose. The rubric item tests a claim no source supports.
   - Required change: model answer line to "Give IV vitamin K with the PCC. Canadian guidance gives them together because the PCC effect fades over about 6 hours. Agree the dose with cardiology, since anticoagulation restarts within days." ft-m3 text to "Gives IV vitamin K with the PCC, with the dose agreed with cardiology because anticoagulation restarts within days." ft-m3 teaching to "PCC corrects the INR for about 6 hours. IV vitamin K given at the same time sustains the correction and, at appropriate doses, does not cause warfarin resistance." ft-m3 source to `nac-pcc`.
   - Source: National Advisory Committee on Blood and Blood Products, Recommendations for use of PCCs in Canada, 2022, indications section and "Vitamin K for VKA Reversal" (https://profedu.blood.ca/fr/media/5843/download).

### First QA changes

- PCC half life corrected to about 6 hours: verified in NAC.
- Vitamin K given with PCC: correct, but the leftover 10 mg sentence and ft-m3 wording must go (fix 2).
- IV Rh immune globulin worded as a sensible route choice, both routes work: acceptable (SOGC 448, WinRho monograph).
- ft-h4 pad threshold removed, ft-m1 rewritten to the ISTH definition: acceptable.
- "Almost certainly" in the blame feedback: acceptable.
- Age 36 and 13 weeks and 4 days, 6 pads in 2 hours, near faint at triage: these remove the surface echo of SAMP s38. Acceptable.

### "Needs a physician" items

- Vitamin K dose: current text not acceptable (fix 2). After fix 2 the dose is left to cardiology with a sourced reason, which is acceptable.
- IV route for Rh immune globulin: acceptable.
- Speculum removal of tissue cited to SOGC 460, which does not describe it: acceptable as standard practice, flagged below.

### Advisory (not required)

- ft-p1, ft-p2, ft-c1 and ft-d1 cite SOGC 460 for shock recognition, tissue removal at the os and team process. SOGC 460 does not cover these (C2).
- "Use Rh D negative cells in a woman of childbearing age" in ft-m1 teaching has no case source.

## work-trailer-heater-burns: FAIL

### Numbers recomputed

- TBSA 5 + 4 = 9 percent, erythema excluded. Correct.
- Wrong formula choice: 4 x 92 x 9 = 3312 mL. Correct. ATLS 10th edition uses 2 mL/kg/% TBSA from the time of injury for burns of 20 percent or more. Consistent.
- Carboxyhemoglobin 11 percent after about 100 minutes of oxygen: consistent with a higher starting level.
- Hyperkalemia doses (calcium gluconate 10% 30 mL or calcium chloride 10% 10 mL, insulin 10 units with 25 g dextrose, salbutamol): standard adult doses.
- Urine target 300 mL/hour and no strong evidence for bicarbonate or mannitol: as in Long 2019.
- ACEP 2025 Level C hyperbaric wording and the age 36 and loss of consciousness risk factors: consistent.

### Required fix

1. File `src/cases/batch12/work-trailer-heater-burns.ts`, node `q-arm`, choice `c-elevate`.
   - Current: `quality: "partial"` for "I elevated the arm on two pillows, gave more fentanyl and planned to reassess in 2 hours."
   - Problem: this is established compartment syndrome with pain on passive stretch and numbness. The choice raises the limb (which the feedback itself says lowers inflow and can worsen ischemia) and delays fasciotomy by 2 hours. SCORING-RULINGS C1 grades a choice that delays time critical care as unsafe. The signed bank grades the same act unsafe twice: batch04 `high-voltage-electrical-injury` ("I elevated the arm high on pillows and planned to reassess in 4 hours") and batch05 `trench-collapse-crush` ("I elevated the leg on pillows with ice and planned to reassess in 2 hours"). Partial here is a silent reversal.
   - Required change: `quality: "unsafe"`. Add to the feedback: "Waiting 2 hours risks permanent muscle and nerve loss."
   - Source: docs/reviews/SCORING-RULINGS.md C1, and ATLS 10th edition (compartment syndrome is a surgical emergency).

### First QA changes

- Setting moved from an ice hut to a work trailer at a winter road camp, id and file renamed, `index.ts` updated: acceptable. It removes the surface echo of SAMP s04 "An explosion at the ice hut".
- ib-p1 wording on pulse co-oximetry: correct (ACEP 2017 Level B against noninvasive carboxyhemoglobin).
- ib-m7 moved from the ABA referral page to ATLS: correct. I confirmed the ABA page has no wound care advice.

### "Needs a physician" items

- ATLS points rest on the 10th edition manual, not opened by me either. They match standard ATLS 10 content (2 mL/kg/% TBSA, half in the first 8 hours, burns of 20 percent or more). Acceptable.
- Hyperkalemia doses not quoted in Long 2019: standard, acceptable.
- ib-h5 ACE inhibitor teaching is pharmacology, not a line in Long: acceptable but weak (C2), see advisory.

### Advisory (not required)

- ib-h5 and ib-m5 teaching points (ACE inhibitor effect, avoiding morphine in kidney injury) are not in their cited sources (C2).
- `c-bicarb` gives no calcium for ECG changes but is partial, while `c-burn-formula` is unsafe partly for leaving the potassium untreated. Defensible because bicarbonate is a weak shifting measure, but a physician may want them graded alike.
- Uniqueness flag for the bank-wide check: SAMP s26 "Found beside the heater" is a long lie beside a heater with a contact burn and rhabdomyolysis. This case adds carbon monoxide, hyperkalemia, compartment syndrome, a second patient and fasciotomy before transfer, so I did not fail it.

## hyperacute-purulent-red-eye: PASS

### Checks

- CDC 2021 (read through WebFetch): gonococcal conjunctivitis ceftriaxone 1 g IM once with one time saline lavage. Disseminated infection 1 g IM or IV every 24 hours, switch to oral by susceptibility 24 to 48 hours after improvement, at least 7 days in total, hospitalization and infectious diseases consultation for initial therapy. Doxycycline 100 mg twice daily for 7 days if chlamydia is not excluded. Every dose and duration in the case matches.
- PHAC gonorrhea guide (read through WebFetch, modified 4 June 2026): ceftriaxone 500 mg IM single dose for uncomplicated infection, hospitalization for initial management of disseminated infection, partners from the 60 days before symptom onset, nationally notifiable, test of cure by culture at 3 days or NAAT at 3 to 4 weeks. The case matches, including the partial choice wording.
- Choice grades are defensible.

### First QA changes

None were made. I agree no clinical change was needed.

### "Needs a physician" items

- Ceftriaxone 1 g for conjunctivitis and disseminated infection taken from CDC because PHAC gives no regimen: acceptable. PHAC defers complicated infection to specialist advice and the case admits him with infectious diseases.

### Advisory (not required)

- `c-switch` (moxifloxacin drops, family doctor next week, no acuity or slit lamp) is partial. It discharges a sight threatening infection without an exam, and its own feedback says next week may be too late. A physician may prefer unsafe.
- Uniqueness flag: SAMP s41 "Painful wrist and scattered skin spots" covers disseminated gonococcal infection with ceftriaxone 1 g IV daily. gk-m1 repeats that teaching point. The eye, consultant advocacy and confidentiality angles are new.

## intoxicated-driver-hip-dislocation: FAIL

### Numbers recomputed

- Fentanyl 75 mcg then 25 mcg every 5 minutes at 84 kg: about 1 mcg/kg then small top ups. Correct.
- Propofol 40 mg then 20 mg at 84 kg: about 0.5 then 0.25 mg/kg, matching the model answer.
- Reduction within 6 hours, sciatic injury 10 to 15 percent mostly peroneal, CT after reduction: as in Dawson-Amoah 2018.
- ACEP 2014: do not delay ED sedation for fasting time. Matches.

### Required fix

1. File `src/cases/batch12/intoxicated-driver-hip-dislocation.ts`, node `s-wait`.
   - Current text: "She says the hip has now been out for nearly 3 hours and needs reduction now, in the ED."
   - Problem: the crash was at 00:50 and he arrived about 01:30. The plan question comes after history, examination, X ray, CT and blood results, so at the earliest about 02:00. "Two hours later" is then about 04:00, which is more than 3 hours from the injury, not nearly 3.
   - Required change: "She says the hip has now been out for more than 3 hours and needs reduction now, in the ED."
   - Source: the case's own times (finding `mechanism` and `resources`).

### First QA changes

- Naloxone and flumazenil while apneic regraded unsafe: correct.
- Wait feedback changed to "to or well past 6 hours from the injury": correct.
- hd-c4 moved from ATLS to Gentilello 1999: verified (PMID 10522717, Ann Surg 1999). The teaching matches the trial.

### "Needs a physician" items

- Propofol bolus doses not quoted in the sources: acceptable, standard practice, and lower doses are justified by alcohol and opioid on board.
- Capacity item cited to Green 2019 in general terms: acceptable.

### Advisory (not required)

- Uniqueness flag: SAMP s45 "Front seat passenger with hip pain" has the same mechanism (head on collision, knee to dashboard, right posterior dislocation, knee abrasion) and teaches the pre reduction nerve exam and timing. hd-p3, hd-m2 and hd-p4 repeat its teaching. The sedation, intoxication and apnea angles are new.
