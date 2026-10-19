# Q500 verification review: batch11

Fresh independent review of the four oral cases in `src/cases/batch11/`. I did not write or edit any of them. The first QA round edited the files in place, so this review treats the current text as a writer revision and reviews the whole of it. I changed no case, source or shared file (REVIEW-RULES rule 1).

Read first: `docs/Q500_BRIEF.md`, `docs/CASE_SPEC.md`, `docs/ORAL_REALIGN_BRIEF.md`, `docs/reviews/REVIEW-RULES.md`, `docs/reviews/SCORING-RULINGS.md`, `src/engine/types.ts`, `docs/reviews/q500-writer-batch11.md` and `docs/reviews/q500-qa-batch11.md`.

## Summary

| Case | Verdict | Required fixes |
|---|---|---|
| stopped-antiplatelets-dental-stemi | FAIL | 2 |
| peritoneal-dialysis-wheeze-overload | PASS | 0 |
| glass-finger-return-visit | FAIL | 2 |
| ems-patch-ruptured-aaa | PASS | 0 |

## Checks run

- `CASE_BATCH=batch11 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes, 45 of 45.
- No em dashes, en dashes or semicolons in any string. The only US forms are inside proper names in titles of cited works. No personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` on every case.
- Stems are 43 to 52 words. Every card weight converts correctly to pounds.
- Every PubMed id was checked through NCBI E-utilities and every DOI through Crossref. All resolve to the cited work, authors and year. The Ontario ALS PCS PDF, the TNKase monograph, the CMPA page, the AAFP page, the PMC pages and the Life or Limb page all open to the right document. The Canadian Immunization Guide tetanus page was read through WebFetch (modified 3 June 2026).
- Mnemonics: none taught. IMIST AMBO is named once as a published handover tool with its citation. That is acceptable.

## How I graded choices

SCORING-RULINGS C1 says "unsafe" is for patient danger only, and that delaying time critical care or giving a clearly harmful drug is "unsafe". The signed bank applies the delay half unevenly (for example, "2 L of saline wide open" is partial in the signed variceal case, and "BiPAP and recheck the gas in an hour" is partial in two signed cases). I failed a grade only where it breaks the explicit C1 categories or contradicts a signed precedent for the same act. I list other borderline grades as advisory.

## stopped-antiplatelets-dental-stemi: FAIL

### Numbers recomputed

- Tenecteplase 40 mg for 74 kg. Confirmed against the Canadian TNKase monograph dose table (under 60 kg 30 mg, rising by 5 mg per 10 kg band, 50 mg at 90 kg or more).
- Enoxaparin 30 mg IV then 1 mg/kg SC (74 mg) every 12 hours, clopidogrel 300 mg under 75, ASA 160 mg. Correct.
- ST threshold 1.5 mm in V2 and V3 for women. The first ECG (1 mm) falls short and the repeat (3 mm) meets it. Correct.
- hs troponin I female 99th percentile 16 ng/L. Plausible.
- Dental timeline: stopped 6 days ago, extraction 2 days ago, so 4 days. Matches the corrected instruction.
- On the strong path, first contact 06:40, diagnostic ECG 06:58, lab 09:15. Over 120 minutes from both. See fix 2 for the slower paths.

### Required fixes

1. File `src/cases/batch11/stopped-antiplatelets-dental-stemi.ts`, node `s-wait` (consequence of the partial choice `c-wait`).
   - Current text: "You give tenecteplase 40 mg, clopidogrel and enoxaparin."
   - Problem: on this path she has already had heparin and ticagrelor 180 mg (`c-wait` label). Adding clopidogrel gives a second P2Y12 inhibitor. Adding enoxaparin on top of running heparin stacks two anticoagulants. The scripted consequence teaches a dosing error.
   - Required change: "You give tenecteplase 40 mg and keep the heparin running. She has already had ticagrelor, so you do not add clopidogrel."
   - Source: Ibanez 2017 ESC STEMI guideline (`esc17`), which pairs fibrinolysis with one P2Y12 inhibitor (clopidogrel) and one anticoagulant (enoxaparin or unfractionated heparin).

2. Same file. Finding `ecg2`, finding `transport`, node `s-transport`, and the first line of the `q-reperfusion` model answer.
   - Current text: finding label "ECG at 06:58". Transport finding and `s-transport`: "she would reach the lab at about 09:15 at the earliest". Model answer: "First medical contact was 06:40 and the STEMI diagnosis 06:58. A lab time of 09:15 is well over 120 minutes from either."
   - Problem: on the `c-troponin` path the repeat ECG is at about 07:05 and on the `c-reflux` path at about 07:15 (`s-troponin` and `s-reflux` phases). From 07:15, a lab time of 09:15 is exactly 120 minutes from diagnosis, which is not over the ESC threshold. The finding label also contradicts those two paths. The model answer does not read correctly on every path.
   - Required change: relabel finding `ecg2` "Repeat ECG". Change "09:15" to "09:30" in finding `transport` and node `s-transport`. Rewrite the model answer line to: "First medical contact was 06:40 and the diagnostic ECG followed. A lab time of 09:30 is more than 120 minutes from either."
   - Source: Byrne 2023 ESC ACS guideline (`esc23`), which uses 120 minutes from diagnosis, and Wong 2019 CCS (`ccs`), which uses 120 minutes from first medical contact.

### First QA changes

- Lab time and next crew moved to make the delay exceed 120 minutes: correct in intent, but incomplete on the slower paths (fix 2).
- "4 days before" dental instruction: correct.
- ih-m3 moved to the TNKase monograph: verified. The monograph lists "Recent major surgery" and "Recent trauma" among the risks to weigh, not as contraindications. Acceptable.
- `c-no-lysis` rewritten to withhold all antithrombotic therapy, graded unsafe: correct and now clearly different from `c-wait`.
- Removed the unverified half dose at 75 teaching from ih-m2: acceptable.

### "Needs a physician" items

- Dental extraction as a relative, compressible risk that does not stop lysis: acceptable. It is not on the ESC or monograph contraindication lists, and the monograph frames recent surgery and trauma as risks to weigh.
- Tenecteplase weight bands: now verified directly in the Canadian monograph. Acceptable.

### Advisory (not required)

- ih-h5 (collateral from her husband) cites ESC 2023, which does not discuss collateral history. Consider re-pointing it or rewording the teaching to something ESC 2023 says about history taking (C2).
- The driving advice in `q-talk` and ih-pr4 has no source. Consider citing the CCS fitness to drive guidance, or keep it general.
- `c-wait` (wait for primary PCI) stays partial. It still delivers reperfusion therapy. Defensible.
- Uniqueness flag for the bank-wide check: SAMP s48 "Warfarin held for a dental extraction" uses the same cause (a dental office tells the patient to stop an antithrombotic, causing device thrombosis). The device, drug and decisions here differ, so I did not fail it.

## peritoneal-dialysis-wheeze-overload: PASS

### Numbers recomputed

- Gas: pH 6.1 + log(24 / (0.03 x 52)) = 7.29. Consistent.
- 2.5 L bolus is 30 mL/kg at 84 kg. Correct.
- ISPD 2022 diagnosis (two of: pain or cloudy effluent, effluent white count over 100 per µL after a 2 hour dwell with over 50 percent neutrophils, positive culture) and empiric cover are stated correctly.
- Succinylcholine raises potassium about 0.5 mmol/L. Stated correctly.

### First QA changes

- Rochwerg "recommend" for bilevel or CPAP in cardiogenic edema: correct (strong recommendation).
- IV first doses given the systemic features at `q-treat`, and IV now in shock: acceptable. ISPD prefers IP unless there is systemic sepsis, and fever, tachycardia, a white count of 15.8 and new confusion meet that exception.
- Softened succinylcholine wording, pd-m5 rewritten to test timely intubation: acceptable.
- "Makes little urine": correct.

### "Needs a physician" items

- IV first doses before shock: acceptable for the reason above.
- No IP doses or hypertonic exchange plan, deferred to the home dialysis nephrologist: acceptable for an ED station.

### Advisory (not required)

- pd-pr4 (handover content) cites the Ontario Life or Limb Policy and pd-pr5 (talk with his daughter) cites the CCS heart failure guideline. Neither source covers that content (C2). Warren 2004 would support pd-pr4 if added as a sixth source.
- `s-stay-niv`: "He recovers a pulse of 110" reads as if he had lost his pulse. Consider "His heart rate recovers to 110".
- `c-wait-ip` and `c-stay-niv` stay partial. The signed bank grades the same acts partial (adult septic shock, near fatal asthma, myasthenic crisis). Defensible.
- Uniqueness flag: SAMP s15 "Wheezy older woman labelled with COPD" teaches the same point that cardiac wheeze gets a lung label and the patient sleeps in a recliner. The peritonitis angle here is new.

## glass-finger-return-visit: FAIL

### Numbers and facts checked

- Tetanus: last dose 8 years ago after a complete series, wound not clean and minor. The Canadian Immunization Guide table gives a booster and no TIg at 5 to under 10 years. Correct.
- Manthey 1996: chicken thigh model, radiography 98 percent for radio-opaque objects, ultrasound 43 percent overall. Matches the current wording.
- Chapman 2019: S aureus up to 75 percent, MRSA up to 29 percent, complications up to 38 percent, surgery for 3 or more Kanavel signs. Matches.

### Required fixes

1. File `src/cases/batch11/glass-finger-return-visit.ts`, node `q-disclose`, choice `c-blame`.
   - Current: `quality: "unsafe"` for "I told her the first doctor should have done an X ray and that it was a mistake."
   - Problem: SCORING-RULINGS C1 says unprofessional conduct that does not endanger the patient is "partial". Blaming a colleague before review is unprofessional, not dangerous to her. The same act is graded partial in batch12 `first-trimester-loss-mechanical-valve` (`c-blame-drug`). This is a silent reversal of C1.
   - Required change: `quality: "partial"`. The feedback can stay as it is.
   - Source: docs/reviews/SCORING-RULINGS.md C1.

2. Same file, nodes `s-oral` and `s-surgeon` (path through the unsafe choice `c-oral`).
   - Current `s-oral`: "She returns at 07:00 with a temperature of 39.0°C and swelling into her palm. The hand surgeon is called, asks why she was sent home, and takes her to the operating room that morning." Current `s-surgeon`: "She can take the patient to the operating room tonight and asks for your summary."
   - Problem: on this path it is the next morning and the surgeon has already taken her to the operating room. `s-surgeon`, `q-handover` ("What do you tell the surgeon?") and `q-disclose` ("While you wait for transport") then read wrongly.
   - Required change: `s-oral` to "She returns at 07:00 with a temperature of 39.0°C and swelling into her palm. You call the hand surgeon, who asks why she was sent home." `s-surgeon` to "The plastic surgeon on call at the regional centre is on the phone. She can take the patient to the operating room as soon as she arrives and asks for your summary."
   - Source: internal consistency (CASE_SPEC flow rules).

### First QA changes

- Manthey described as an animal tissue model with its real figures: correct.
- Gram negative cover considered for diabetes: supported by Chapman.
- lc-p1 "independent predictors" wording: correct.
- lc-m3 teaching rewritten to what Chapman says about diabetes and amputation: acceptable.
- `c-bedside` rewritten as bedside exploration before calling the surgeon, graded partial: acceptable and now consistent with its consequence.

### "Needs a physician" items

- No named antibiotic, described as staphylococcal (including MRSA where common) and streptococcal cover with gram negative cover considered: acceptable for an oral station.

### Advisory (not required)

- lc-pr4 (surgeon handover) cites Chapman, which does not discuss handover (C2).
- "Glass of 2 mm or more is usually visible" in the `q-workup` model answer has no case source. Consider removing the number or citing a source.
- Title "Back with a sore finger" echoes batch14 "Back the next day with a sore belly". Different topic and diagnosis. Consider a different title to avoid two "Back ... with a sore ..." titles.

## ems-patch-ruptured-aaa: PASS

### Numbers and facts checked

- Ontario ALS PCS v5.4, PCP Intravenous and Fluid Therapy auxiliary directive, read in the PDF (pages 189 to 191): 0.9% NaCl bolus 20 mL/kg, reassess every 250 mL, maximum 2 000 mL at age 12 or more, only if authorized for PCP Autonomous IV, and "where it does not delay transport". The first QA correction is right. 1 500 mL on scene in `s-scene` is within the directive.
- ESVS 2024 targets (systolic 70 to 90 while conscious, plasma to red cells near 1:1, induction only with the surgical team ready) and the SVS door to intervention under 90 minutes: consistent with the first QA's full text reading.
- Timeline: patch 14:24, arrival 14:38, helicopter 30 minutes out after the call, wife at 15:40 as it leaves. Consistent on every path.

### First QA changes

- PCP fluid directive corrected to 20 mL/kg, maximum 2 000 mL: verified.
- Bypass feedback rewritten and graded partial: acceptable.
- Field fluid trigger aligned to "below 70" or confusion: correct.
- Group O positive for an older man: consistent with Canadian massive hemorrhage practice.

### "Needs a physician" items

- Bypass to the vascular centre graded partial: acceptable. He is unstable with a PCP crew and no blood, 12 minutes from an ED versus 55 minutes from the vascular centre.
- PCP autonomous IV: acceptable because the patch states this crew is authorized, which matches the directive's condition.

### Advisory (not required)

- Card weight "About 92 kg (203 lb)" adds "About" to the spec format. Acceptable for an EMS estimate, but "92 kg (203 lb)" matches the spec.
- `c-crystalloid` (2 L wide open to a systolic over 100) is partial while the field version `c-fluids` is unsafe. The signed variceal case grades a similar act partial, so I did not fail it. A physician may prefer unsafe here because ESVS restricts crystalloid.
- Title pattern "A patch from ..." is shared with several EMS SAMPs (s09, s35). Different diagnoses.
