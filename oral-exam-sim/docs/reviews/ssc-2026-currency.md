# Surviving Sepsis Campaign 2026 currency check

Scope: src/samps s19, s31, s32, s36 and s48.

Every question that cited the adult Surviving Sepsis Campaign 2021 guideline (Evans L and colleagues) now cites the 2026 guideline. Wording was checked against the SCCM recommendation page.

New source: Prescott HC, Antonelli M, Alhazzani W, and colleagues. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026. https://doi.org/10.1097/CCM.0000000000007075

Recommendation page: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026

No key changed. The 2021 source object was removed from each SAMP, since no question still uses it.

## Question by question

| SAMP and question | Old claim | 2026 wording | What changed |
|---|---|---|---|
| abdominal-pain-44 q4 | Balanced crystalloid first. Starches not recommended. Albumin considered only after large volumes of crystalloid. | Balanced crystalloids suggested over 0.9% saline. Recommend against starches. Suggest crystalloids alone over crystalloids with supplemental albumin. | Albumin sentence rewritten to "Crystalloid alone is preferred over adding albumin." Starch sentence now says "recommended against". Key (Ringer's lactate) holds. Source id ssc-2021 became ssc-2026. |
| critical-appraisal-24 q5 | Hypotension and lactate 3.4 mmol/L. Fluids, blood and urine cultures, and IV antibiotics within the first hour. | Give antimicrobials immediately, ideally within 1 hour, in possible or probable septic shock. Take blood cultures as soon as possible, ideally before antimicrobials. Suggest at least 30 mL/kg crystalloid for hypoperfusion. | Source only. The guideline supports the management question. It is not what the study appraises, so the appraisal questions (q1 to q4) keep their meaning. Key holds. |
| loc-23 q1 | At least 30 mL/kg crystalloid within 3 hours (2400 mL for 80 kg). Starches recommended against. Albumin is not the initial fluid. | Suggest at least 30 mL/kg IV crystalloid in the first 3 hours. Recommend against starches. Suggest crystalloids alone over added albumin. | Albumin sentence rewritten to "Crystalloid alone is preferred over adding albumin." Key (2.4 L crystalloid) holds. 30 x 80 = 2400 mL rechecked. |
| loc-23 q2 | MAP about 59 mmHg after fluids. Norepinephrine first line. Vasopressin added later. | Recommend norepinephrine first line over dopamine, epinephrine or selepressin. Recommend an initial MAP target of 65 mmHg. Suggest adding vasopressin on escalating norepinephrine. | Source only. Key holds. (84 + 92) / 3 = 58.7 mmHg rechecked. |
| loc-23 q4 | Antibiotics within 1 hour in probable septic shock. A 3 hour window only for possible sepsis without shock. | Immediately, ideally within 1 hour, for septic shock. For possible sepsis without shock, suggest rapid investigation and antimicrobials within 3 hours if concern persists. | Source only. Key holds. |
| environmental-38 q3 | Blood and urine cultures before antibiotics when this causes no delay. | Recommend collecting blood cultures as soon as possible and ideally before antimicrobial therapy. | Source only. Key holds. |
| pulmonary-edema-34 q1 | Fluid overloaded, MAP about 61 mmHg. Norepinephrine first line to a MAP of 65 mmHg. Vasopressin added when norepinephrine needs rise. | Recommend norepinephrine first line. Recommend an initial MAP target of 65 mmHg. Suggest adding vasopressin on escalating norepinephrine. | Source only, and a DOI link added. Key holds. (84 + 100) / 3 = 61.3 mmHg rechecked. Source id stays "ssc". |

## Candidates with no SSC citation

- environmental-17: this pediatric heat stroke SAMP cites ACSM, Incecik, IDSA and WMS. It cites neither SSC 2021 nor the 2020 pediatric SSC guideline. No change.
- None of the five files cites the 2020 pediatric SSC guideline. The move to Weiss SL and colleagues, Intensive Care Med 2026, was not needed here.

## Known 2026 changes and where they touch

- Corticosteroids: IV corticosteroids suggested for septic shock with no norepinephrine threshold. No question in these files tests steroids.
- Albumin: crystalloid alone preferred over adding albumin. Wording fixed in abdominal-pain-44 q4 and loc-23 q1. Albumin was already a wrong option there, so no key changed.
- Inotropes: an inotrope is suggested over none, either dobutamine added to norepinephrine or epinephrine alone, and levosimendan is suggested against. Dobutamine is a wrong option in loc-23 q2 because he has no stated cardiac dysfunction. That still holds.

## Checks

- SAMP_BATCH for s19, s31, s32, s36 and s48 with tests/samps.test.ts and tests/samp-quality.test.ts: all passed.
- npx tsc --noEmit -p .: passed.

## Edited SAMP ids

abdominal-pain-44, critical-appraisal-24, loc-23, environmental-38, pulmonary-edema-34. All keep reviewed: false.

## For the physician: signed-off SAMPs still citing SSC 2021

These are signed off (reviewed: true) and were not edited. Each still cites the 2021 guideline. Please check them against 2026, especially any question on steroids, albumin or inotropes.

| SAMP | File |
|---|---|
| cqi-04 | src/samps/s06/cqi.ts |
| loc-11 | src/samps/s07/loc.ts |
| delirium-agitation-08 | src/samps/s08/delirium-agitation.ts |
| infectious-diseases-01 | src/samps/s12/infectious-diseases.ts |
| infectious-diseases-07 | src/samps/s12/infectious-diseases.ts |
| multiple-patients-07 | src/samps/s13/multiple-patients.ts |
| multiple-patients-09 | src/samps/s13/multiple-patients.ts |
| shock-03 | src/samps/s16/shock.ts |
