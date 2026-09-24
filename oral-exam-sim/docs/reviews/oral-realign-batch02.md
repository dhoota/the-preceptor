# Oral realignment: batch02

Brief: `docs/ORAL_REALIGN_BRIEF.md`. Nine cases in `src/cases/batch02/` now follow the CFPC structured oral format. Every case is `reviewed: false`, `version: 2` and `durationMinutes: 12`. Only files in `src/cases/batch02/` were edited.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch02` prints nothing.
- `REALIGN=batch02 CASE_BATCH=batch02 npx vitest run tests/cases.test.ts` gives 75 passed and 9 failed. The 9 failures are the expected "is marked reviewed only if a physician signed it off", one per case.
- The full suite shows no other batch02 failures. The remaining failures are in the SAMP tests from other work in progress.

## Method, all cases

- Stem: the CFPC opener plus one sentence on age, sex, arrival and complaint and one sentence on the setting the case needs. Old patient names are gone.
- Card: vitals, medications and allergies copied from the old stem and findings with no value changed. Weight is shown as kg with lb in brackets (kg x 2.2046, rounded). Temperature has no route because no case gave one.
- History: every stem detail (paramedic or nurse quote, CTAS, capillary glucose, onset details) moved into a finding. Combined "past history and medications" findings were split so each part is its own finding.
- Rows: old ids were remapped. Diagnosis and data went to `physical`, treatment went to `management`, and communication, disposition, consultant advocacy and systems items went to `process`. New `history` items (and two other new items) were added and linked to an existing question's `rubric` list. Where the question had room, one model answer line was added naming the history to take. No existing item, points value or `critical` flag was changed.
- Timing: every case was already under 720 seconds on its longest path, so no `seconds` value changed. Longest path is the same before and after.
- Branching, choice quality and scripted feedback are unchanged except for name removal and the node edits listed per case.

"Before" rows use the legacy mapping: approach to History, data and diagnosis to Physical, plan to Management.

## 1. complete-heart-block-pacing

- Stem words: 112 to 59.
- Card: 36.6°C, 34/minute, 20/minute, 76/42 mmHg, 94% on room air. No weight. Medications: bisoprolol 2.5 mg daily, amlodipine 5 mg daily, ramipril 5 mg daily, atorvastatin 20 mg daily. Allergies: none known.
- History moved:
  - Paramedic quote, 500 mL saline, CTAS 1 and capillary glucose 6.4 mmol/L went to new `prehospital`.
  - The old `meds` finding was split into `pmh` and `meds`.
  - "Lives alone, drives and golfs" moved from `daughter` to new `social`.
  - Name removed from the stem.
- Rows (points): History 2 to 6. Physical 5 to 7. Management 21 to 15. Process 0 to 6. Total 28 to 34.
- Added: `chb-h1` history of the faints (2), `chb-h2` medication list and AV nodal blockers (2), `chb-h3` Lyme exposure (1), `chb-h4` collateral and wishes (1).
- Longest path: 630 before and after.
- Citations:
  - Removed `aha-brady` ("AHA Adult bradycardia algorithm", no year, not a verifiable work). `chb-a1` now cites `acc-brady`.
  - Added URLs to `acc-brady` (https://www.ahajournals.org/doi/10.1161/CIR.0000000000000628), `esc-pacing` (https://academic.oup.com/eurheartj/article/42/35/3427/6358547) and `ccs-drive` (https://onlinecjc.ca/article/S0828-282X(23)01755-5/fulltext).
  - Verified `aha-acls` (https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376) and `hcca` (https://www.ontario.ca/laws/statute/96h02).

## 2. pre-excited-atrial-fibrillation

- Stem words: 103 to 46.
- Card: 36.9°C, 230/minute and irregular, 20/minute, 118/72 mmHg, 98% on room air, 78 kg (172 lb). Medications: none. Allergies: none known.
- History moved:
  - CTAS 2, "anxious but talking in full sentences" and the nurse's diltiazem question went to new `triage`.
  - Old `history` was split into `history` (onset and symptoms), `pmh` (earlier spells and old ECG) and `social` (energy drinks, cannabis).
  - Old `pmh` was split into `pmh` (with family history) and `meds`.
  - The opening say node `s-open` now includes the nurse asking whether to give diltiazem for "fast AF with a bundle branch block", because `q-ecg` relies on it.
  - Name removed from the stem.
- Rows: History 0 to 6. Physical 5 to 5. Management 21 to 14. Process 0 to 7. Total 26 to 32.
- Added: `wpw-h1` onset time and symptoms (2), `wpw-h2` prior spells, old ECG and family sudden death (2), `wpw-h3` stimulants and drugs (1), `wpw-h4` sport and driving (1).
- Longest path: 480 before and after.
- Citations:
  - Added URLs to `ccs-af` (https://pubmed.ncbi.nlm.nih.gov/33191198/), `esc-svt` (https://academic.oup.com/eurheartj/article/41/5/655/5556821) and `acc-af` (https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193).
  - Verified `caep-af` (https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/).

## 3. sympathetic-crashing-pulmonary-edema

- Stem words: 118 to 50.
- Card: 36.8°C, 128/minute sinus, 38/minute, 224/122 mmHg, 83% on 15 L/minute by non-rebreather mask, 84 kg (185 lb). Medications: amlodipine 10 mg, hydrochlorothiazide 25 mg, metformin 1000 mg twice daily. Allergies: none known.
- History moved:
  - The 911 call at 03:00, the paramedic quote, the two nitro sprays, CTAS 1 and capillary glucose 11.2 mmol/L went to new `prehospital`.
  - Old `pmh` was split into `pmh` and `meds`. The meds finding also holds "ran out of the blood pressure pills 10 days ago".
  - "Independent, volunteers at church" moved from `husband` to new `social`.
  - Name removed from the stem.
- Rows: History 2 to 7. Physical 2 to 4. Management 23 to 17. Process 0 to 7. Total 27 to 35.
- Added: `scape-h1` onset and orthopnea (2), `scape-h2` adherence and salt (2), `scape-h3` comorbidity, medication list and PDE5 inhibitors (1), `scape-h4` paramedic and husband collateral (2), `scape-p1` parallel roles for NIV and nitroglycerin (1, process).
- Longest path: 495 before and after.
- Citations:
  - Added URLs to `ers-ats-niv` (https://publications.ersnet.org/content/erj/50/2/1602426), `esc-hf` (https://academic.oup.com/eurheartj/article/42/36/3599/6358045) and `ccs-hf` (https://onlinecjc.ca/article/S0828-282X(17)30973-X/fulltext).
  - Verified `cochrane-niv` (https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005351.pub4/full) and `hcca`.

## 4. wide-complex-tachycardia

- Stem words: 106 to 50.
- Card: 36.7°C, 178/minute regular, 20/minute, 118/74 mmHg, 96% on room air, 90 kg (198 lb). Medications: metoprolol 50 mg twice daily, ramipril 10 mg, atorvastatin 40 mg, ASA 81 mg, hydrochlorothiazide 25 mg. Allergies: none known.
- History moved:
  - CTAS 2, "sitting up and talking" and the nurse's quote went to new `triage`.
  - Old `pmh` was split into `pmh` and `meds` (with hydrochlorothiazide added 3 weeks ago).
  - The school bus job went to new `social`. The wife finding still confirms it.
  - `s-open` now says the resident thinks it is SVT with a bundle branch block, because `q-ecg` asks what you tell the resident.
  - Name removed from the stem.
- Rows: History 1 to 7. Physical 5 to 6. Management 19 to 13. Process 0 to 6. Total 25 to 32.
- Added: `wct-h1` onset and symptoms (2), `wct-h2` prior MI and structural disease (2), `wct-h3` medication changes and the new thiazide (2), `wct-h4` work, driving and family sudden death (1).
- Longest path: 435 before and after.
- Citations:
  - Added URLs to `esc-va` (https://academic.oup.com/eurheartj/article/43/40/3997/6675633), `acc-va` (https://www.ahajournals.org/doi/10.1161/CIR.0000000000000549) and `ccs-drive`.
  - Verified `procamio` (https://pubmed.ncbi.nlm.nih.gov/27354046/), `ontario-hta` (https://www.ontario.ca/page/reporting-driver-medical-review) and `aha-acls`.

## 5. malignant-pericardial-tamponade

- Stem words: 123 to 57.
- Card: 37.2°C, 124/minute, 28/minute, 88/68 mmHg, 92% on room air, 61 kg (134 lb). Medications: dalteparin 150 IU/kg daily, hydromorphone as needed, immunotherapy for lung cancer. Allergies: not documented.
- History moved:
  - CTAS 2 and the nurse's quote went to new `triage`.
  - "Nearly fainted getting off the toilet" went into `history`.
  - Old `onc` was split into `onc` (stage, spread, DVT, no advance directive) and `meds` (immunotherapy, dalteparin dose and last dose, hydromorphone).
- Names: the patient's name was removed from the stem and from `s-daughter` and `s-futile`. The daughter's name was removed from the `daughter` finding and the `q-daughter` prompt.
- Rows: History 1 to 6. Physical 5 to 6. Management 19 to 10. Process 0 to 9. Total 25 to 31.
- Added: `tam-h1` tempo of breathlessness and PE screen (2), `tam-h2` cancer stage and prognosis (2), `tam-h3` anticoagulant and last dose (2).
- Longest path: 555 before and after.
- Citations:
  - Added a URL to `ase-pericardial` (https://pubmed.ncbi.nlm.nih.gov/23998693/).
  - Verified `esc-pericardial` (https://academic.oup.com/eurheartj/article/36/42/2921/2293375) and `hcca`.

## 6. athlete-exertional-syncope

- Stem words: 105 to 46.
- Card: 36.8°C, 84/minute, 16/minute, 122/70 mmHg, 99% on room air. No weight. Medications: caffeine based pre-workout powder, no other medications documented. Allergies: not documented.
- History moved:
  - The trainer's quote, CTAS 2 and capillary glucose 5.4 mmol/L went to new `trainer`.
  - Old `history` was split into `history`, `pmh` (the faint 6 months ago) and `meds` (pre-workout powder).
- Names: the name was removed from the stem, the `q-coach` prompt, the model answers, the choice labels and feedback, `s-disclose`, `q-family` and the end node.
- Rows: History 4 to 8. Physical 5 to 6. Management 14 to 7. Process 0 to 7. Total 23 to 28. `syn-a1` (exertional syncope without prodrome) now counts as history.
- Added: `syn-h1` circumstances of collapse (2), `syn-h2` prior faints and family sudden death (2), `syn-h3` stimulants and supplements (1).
- Longest path: 480 before and after.
- Citations:
  - Added URLs to `esc-syncope` (https://academic.oup.com/eurheartj/article/39/21/1883/4939241), `aha-hcm` (https://www.ahajournals.org/doi/10.1161/CIR.0000000000001250) and `phipa` (https://www.canlii.org/en/on/laws/stat/so-2004-c-3-sch-a/latest/so-2004-c-3-sch-a.html).
  - Verified `csrs` (https://www.cmaj.ca/content/188/12/e289) and `ontario-hta`.

## 7. stemi-cardiogenic-shock

- Stem words: 110 to 53.
- Card: 36.2°C, 112/minute, 28/minute, 84/56 mmHg, 89% on room air, 95 kg (209 lb). Medications: metformin, ramipril, atorvastatin. Allergies: none known.
- History moved:
  - CTAS 1, capillary glucose 13.4 mmol/L and the triage nurse's quote went to new `triage`.
  - "Started while mowing the lawn" went into `history`.
  - Old `pmh` was split into `pmh`, `meds` and `social` (smoker).
- Names: the patient's name was removed from the stem. The wife's name was removed from the `wife` finding and the `q-wife` prompt.
- Rows: History 0 to 5. Physical 5 to 3. Management 17 to 13. Process 0 to 7. Total 22 to 28.
  - Physical fell because `stemi-r1` (cath lab activation) moved to process as a timely disposition.
  - `stemi-p1` was added so physical has 2 items.
- Added: `stemi-p1` dissection and mechanical complication screen (1, physical, taken from the existing model answer), `stemi-h1` onset and dissection features (2), `stemi-h2` bleeding risk and anticoagulants (2), `stemi-h3` risk factors and wife's collateral (1).
- Longest path: 510 before and after.
- Citations:
  - Added URLs to `ccs-stemi` (https://pubmed.ncbi.nlm.nih.gov/30760415/), `esc-acs` (https://academic.oup.com/eurheartj/article/44/38/3720/7243210), `soap2` (https://www.nejm.org/doi/full/10.1056/NEJMoa0907118) and `culprit-shock` (https://www.nejm.org/doi/full/10.1056/NEJMoa1710261).
  - Verified `danger-shock` (https://www.nejm.org/doi/full/10.1056/NEJMoa2312572) and `aha-acls`.

## 8. posterior-epistaxis-anticoagulated

- Stem words: 112 to 55.
- Card: 36.5°C, 116/minute and irregular, 22/minute, 174/94 mmHg, 95% on room air, 72 kg (159 lb). Medications: warfarin 5 mg daily, metoprolol 50 mg twice daily, ramipril 10 mg, clarithromycin. Allergies: none known.
- History moved:
  - CTAS 2 and the nurse's quote ("soaked two towels", "takes warfarin") went to new `triage`.
  - "Started while watching television" went into `history`.
  - Old `meds` was split into `pmh` (AF, TIA, hypertension) and `meds` (warfarin, last INR, clarithromycin 5 days ago, others).
  - `q-reversal` ("his warfarin") is covered by the card and `meds`.
  - Name removed from the stem.
- Rows: History 1 to 6. Physical 3 to 4. Management 21 to 13. Process 0 to 8. Total 25 to 31.
- Added: `epi-h1` bleed history (2), `epi-h2` anticoagulant, INR and new medications (2), `epi-h3` indication for anticoagulation (1), `epi-h4` daughter's collateral on memory and pills (1).
- Longest path: 540 before and after.
- Citations:
  - `tc-warfarin` had no year. It now reads "Thrombosis Canada. Clinical guide. Warfarin: Management of Out-of-Range INRs. Version of 15 June 2025." The URL now points to the dated PDF (https://thrombosiscanada.ca/clinical_guides/pdfs/45_59.pdf). I checked the "Date of Version: 15June2025" line in that PDF.
  - Added URLs to `aao-epistaxis` (https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599819890327) and `nopac` (https://pubmed.ncbi.nlm.nih.gov/33612282/, Annals of Emergency Medicine 2021 confirmed).
  - Verified `nac-pcc` (https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada). The document is the February 2022 revision.

## 9. knee-dislocation-vascular-injury

- Stem words: 134 to 58.
- Card: 35.9°C, 104/minute, 18/minute, 138/82 mmHg, 98% on room air, 92 kg (203 lb). Medications: none. Allergies: none known.
- History moved:
  - The paramedic quote (white foot, no pulse, splint, fentanyl 100 mcg), GCS 15 and CTAS 2 went to new `prehospital`.
  - The local resources (CT, general and orthopaedic surgeons on call, CritiCall) also went into `prehospital`, to keep the stem under 60 words.
  - Old `fasting` was split into `pmh` (healthy, tetanus), `meds` (none, no allergies) and `fasting` (last meal, two beers).
- Names: removed from the stem and the `q-patient` prompt.
- Rows: History 1 to 5. Physical 5 to 6. Management 15 to 7. Process 0 to 8. Total 21 to 26.
- Added: `kd-h1` mechanism, injury time and other injuries (2), `kd-h2` paramedic report on the limb (2), `kd-h3` AMPLE before sedation (1).
- Longest path: 525 before and after.
- Citations:
  - Added URLs to `mills-abi` (https://pubmed.ncbi.nlm.nih.gov/15211135/) and `acep-sedation` (https://pubmed.ncbi.nlm.nih.gov/24438649/).
  - Verified `atls` (https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/, 11th edition released 2025).

## Needs physician decision

1. Missing card values. The old cases did not give these, so none were invented.
   - Heart block and athlete: no weight. Weight matters in heart block for the dopamine dose in mcg/kg/min.
   - Tamponade and athlete: allergies are shown as "Not documented".
   - No case gives a temperature route.
2. Card medications give clues. The CFPC card lists prescribed medication, so the card now names clarithromycin (epistaxis), hydrochlorothiazide (wide complex tachycardia) and dalteparin (tamponade). Candidates can see these before asking. Please decide whether that is acceptable or whether some items should appear only in the findings.
3. PDE5 inhibitor screen (pulmonary edema). `scape-m2` and the new `scape-h3` reward asking about PDE5 inhibitors, but no finding answers the question. I did not invent one. Please consider adding "No sildenafil or other PDE5 inhibitor" to `meds`.
4. Node edits. Two opening say nodes gained a sentence because their first question relied on a stem quote that moved:
   - `s-open` in pre-excited AF (the nurse asks about diltiazem for "fast AF with a bundle branch block").
   - `s-open` in wide complex tachycardia (the resident thinks it is SVT with a bundle branch block).
5. New model answer lines. One history line was added to a model answer in most cases so that the new history items have visible guidance. Each is a paraphrase of facts already in the case. Please confirm.
6. New non-history items. Please review points and wording.
   - `stemi-p1`, a dissection and mechanical complication screen, comes from the existing `q-first` model answer.
   - `scape-p1` covers parallel role assignment.
7. Row choices. The judgement calls:
   - Physical: `chb-a3`, `scape-a2`, `wct-a3`, `epi-a3` (reversible causes, precipitants, trigger).
   - Process: cath lab activation `stemi-r1`, the monitoring requirement `epi-d1`, consent and goals items, and consultant advocacy.
   - Management: `syn-d2` (sport restriction) and `chb-d2` (driving advice).
8. Hospital type. The knee case was a "60 bed hospital in northern Ontario" and the wide complex tachycardia case a "regional hospital". Both are called "community hospital" here. The knee case could instead be "rural hospital".
9. Family names. The daughter's name (tamponade) and the wife's name (STEMI) were removed along with patient names, and only roles are used. The brief allows roles only.
10. Thrombosis Canada guide. The landing page may serve a newer version than 15 June 2025. Please recheck the version date before release.
