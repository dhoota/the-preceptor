# Q500 writer report, batch s62 round 2 (abdominal pain)

Writer: Preceptor. File: `src/samps/s62/abdominal-pain.ts`. Verdict applied: `docs/reviews/q500-verify-s62.md` (the earlier `q500-qa-s62.md` was read for context only). Ids are unchanged. All items stay `reviewed: false`, `version: 1`, author "Preceptor". abdominal-pain-50 passed and was not touched.

## Required fixes and how each was done

| Item | Required fix | Done |
|---|---|---|
| abdominal-pain-48 | Whole SAMP retold signed infectious-diseases-15 (PID with tubo-ovarian abscess). Rebuild with a different KF8 diagnosis mislabelled as cystitis. | Rebuilt as early ovarian hyperstimulation syndrome 5 days after an egg retrieval, labelled a bladder infection because of scanty dark urine. New patient, stem and decisions: q1 diagnosis (KF8), q2 menu of first investigations (ultrasound, CBC with hematocrit, electrolytes and creatinine, KF5), q3 analgesia without NSAIDs (analgesia-sedation KF2), q4 titrated IV crystalloid once oral rehydration fails (shock KF3). Source: CFAS 2026 Canadian guideline. Now 4 questions (was 3). |
| abdominal-pain-49 q1 | Bag specimen teaching repeats pediatric-fever s14 and s46. Nearby inflammation causing pyuria is also taken. | Replaced with "which finding today most strongly suggests a cause other than a urinary infection", key "Pain when the stretcher is bumped" (peritoneal irritation on jarring, the strongest predictor in the study that built the Pediatric Appendicitis Score). The stem no longer mentions a bag specimen or its culture: the clinic diagnosed UTI from a dipstick. The child is now 4 (inside the 4 to 15 year range of the source), with new vitals (pulse 148, resp 28, BP 100/62, 16 kg). q2 explanation updated from "3-year-old" to "4-year-old". q2 to q4 otherwise unchanged. CPS 2014 source removed (no longer cited). |
| abdominal-pain-51 q2 | Remove (repeats abdominal-pain-02 q1 and overlaps 50 q4). | Removed. No bowel ischemia item was added anywhere in 51. WSES 2022 AMI source removed. |
| abdominal-pain-51 q3, q4 | CT with IV contrast, then surgery now for perforation with abscess, repeat abdominal-pain-35. Replace with decisions the steroid angle makes new. Check adrenal crisis items before stress dosing. | Stress dosing was not used: stress-dose hydrocortisone for a patient on long-term prednisone is already keyed in multiple-trauma (s45) and listed in abdominal-pain-07 q4. The CT result is now given in an update (uncomplicated sigmoid diverticulitis), so no imaging choice is keyed. New q2: hospital admission with antibiotics, because WSES advises antibiotics for immunocompromised patients and regards them as high risk of non-operative failure (the opposite of the signed abdominal-pain-24 key, "Outpatient care without antibiotics", for an immunocompetent patient). New q3: amoxicillin-clavulanate PO, with ciprofloxacin plus metronidazole rejected because the Canadian monograph warns of more tendon rupture over age 60 and with corticosteroids. New q4: surgical review for elective resection after recovery (WSES 2020 suggestion for immunocompromised patients). q1 kept unchanged. alsoTopics now infectious-diseases. |
| abdominal-pain-52 q2 | Explanation said "no cough" against a stem with hemoptysis, and claimed no pelvic symptoms that the stem never stated. | Stem now says "Apart from that she has no cough or sputum" and "no ... vaginal discharge or pelvic pain". Explanation now reads "no fever, sputum or productive cough for pneumonia" and "she has no vaginal discharge or pelvic pain". |
| abdominal-pain-52 stem and q3 | Stem mirrored sob-23 (woman 3 weeks after surgery, near-identical vitals). q3 (imaging over D-dimer at high Wells) repeats s51 and s28. Replace with a KF5 decision. | Risk profile changed from recent surgery plus contraceptive to a previous DVT 3 years ago (contraceptive stopped, 3 months of anticoagulation). Age 27, pulse 116, resp 24, BP 118/74, SpO2 94%, 66 kg, temperature 37.3°C. Wells recomputed: 1.5 previous DVT + 1.5 pulse over 100 + 1 hemoptysis + 3 PE most likely = 7.0. New q3 (KF5): imaging when the abdominal presentation tempts abdominal imaging, key "CT angiography of the chest" against CT abdomen, HIDA, MRCP and renal CT. Following the reviewer's B6 note, no option in q3 names pulmonary embolism. No D-dimer option is offered. |

## Other changes

- abdominal-pain-52 gained q4 (KF8) so that every SAMP has 4 or 5 questions: stop the ciprofloxacin, because nothing supports pyelonephritis and the Canadian monograph says prescribing without a proven or strongly suspected bacterial infection is unlikely to help and risks resistance.
- abdominal-pain-48 also now has 4 questions.
- Distractor lengths were adjusted in 48 q1 and 51 q2 so the key is the single longest option in no more than 35% of single questions.

## Batch shape

5 SAMPs, 21 questions (20 single, 1 menu). Single key positions, first to fifth: 4, 4, 4, 4, 4.

Key feature coverage, abdominal pain: KF1 1 (50 q2), KF2 2 (50 q4, 51 q1), KF3 2 (52 q1, q2), KF4 2 (49 q4, 50 q5), KF5 3 (48 q2, 50 q3, 52 q3), KF6 1 (49 q3), KF7 1 (49 q2), KF8 4 (48 q1, 49 q1, 50 q1, 52 q4). Every key feature is covered. Secondary topics: analgesia-sedation KF2 (48 q3), shock KF3 (48 q4), infectious-diseases KF3 (51 q2, q4) and KF8 (51 q3).

## How uniqueness was checked

I read the whole abdominal-pain catalogue and searched the infectious-diseases, pediatric-fever, sob and dvt-pe catalogues (and, by grep, every catalogue in the folder) for each new diagnosis, key and teaching point:
- Ovarian hyperstimulation syndrome, egg retrieval, NSAID avoidance in it, and crystalloid titrated to urine output: no SAMP, oral case or keyed answer in the bank. The only "hyperstimulation" text in `src` is the new item.
- Jarring or bump tenderness as the keyed sign: not keyed anywhere. It appears only as stem text (abdominal-pain-04 "can jump") and one line of the return-visit-belly-pain-girl model answer about examination.
- Antibiotics and admission for uncomplicated diverticulitis because of immunosuppression, elective resection for an immunocompromised patient, and fluoroquinolone tendon risk with corticosteroids: not keyed anywhere. Diverticulitis items in the bank (abdominal-pain-07, -24, -35, gi-bleed) key different decisions.
- Stopping an unneeded antibiotic after a urinary misdiagnosis: no matching key.
- Stress-dose steroids, intestinal ischemia and imaging over D-dimer were deliberately avoided.
- The tests' bank-wide near-duplicate stem check passes.

## Sources (each opened)

- Buckett W, Sylvestre C, Liu K, et al. Management of moderate and severe ovarian hyperstimulation syndrome: a Canadian Fertility and Andrology Society clinical practice guideline. Reprod Biomed Online. 2026. Full text read: investigations (Table 2), differential diagnosis (Table 3), classification (Table 4), no fever as a usual feature, NSAIDs to be avoided, acetaminophen with or without an opioid, oral then IV crystalloid (recommendations 7 and 8) titrated to 20 to 30 mL/hour, no salt or water restriction, LMWH for admitted patients (recommendation 5), cabergoline generally not recommended (recommendation 4). https://cfas.ca/_Library/Clinical_Practice_Guidance_Documents_/OHSS_RBMO_CFAS_CPG.pdf (DOI 10.1016/j.rbmo.2026.105541)
- Samuel M. Pediatric appendicitis score. J Pediatr Surg. 2002. Record and abstract read in Europe PMC (PMID 12037754): children 4 to 15, cough, percussion or hopping tenderness had the highest diagnostic index. https://doi.org/10.1053/jpsu.2002.32893
- Sartelli M et al. 2020 update of the WSES diverticulitis guidelines. Full text read again through Europe PMC (PMC7206757): immunocompromised patients at high risk of non-operative failure (2D), antibiotics against gram-negative bacilli and anaerobes in high-risk patients including the immunocompromised, oral antibiotics whenever possible, outpatient care only without significant comorbidities, elective resection suggested for immunocompromised patients after conservative treatment (2D), Biondo series with the most emergency surgery in the chronic corticosteroid group. https://doi.org/10.1186/s13017-020-00313-4
- Pharmascience Inc. pms-CIPROFLOXACIN product monograph, revised 13 October 2022. PDF text read: tendinitis and tendon rupture risk further increased over age 60 and with corticosteroids, disabling and potentially persistent reactions, use only for proven or strongly suspected bacterial infection. https://pdf.hres.ca/dpd_pm/00067730.PDF
- Thrombosis Canada. Pulmonary embolism (PE): diagnosis. Version 30 April 2025. PDF text read again: Wells bands, imaging tests named as CTPA and ventilation-perfusion scan. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf
- Unchanged and still cited: Choosing Wisely Canada radiology (49), Ohle 2020 and ACC/AHA 2022 (50), Brandl 2016 (51 q1).
- Removed because no longer cited: PHAC PID page, CPS 2014 UTI statement, WSES 2022 mesenteric ischemia.

## Uncertain, for the reviewer

- 52 q3: CT pulmonary angiography is keyed many times in the bank. The decision here is chest imaging rather than the abdominal imaging the presentation invites, which the verify report proposed. If the reviewer judges the key itself a repeat, a fallback is high pretest probability with a negative CT angiogram leading to leg ultrasound or a V/Q scan (in the Thrombosis Canada guide and not keyed in the bank), but that is a DVT-PE key feature, not abdominal pain KF5. The Thrombosis Canada guide also says V/Q should be considered in young patients with a normal chest radiograph. No V/Q option is offered, and the explanation names both tests.
- 52 q3 Wells: the Thrombosis Canada Wells table is an image in the PDF. The item weights used (previous DVT or PE 1.5, heart rate over 100 1.5, hemoptysis 1, PE most likely 3) are the standard Wells items. The bands (high over 6) were read from the text.
- 51 q3: cefuroxime and trimethoprim-sulfamethoxazole lacking anaerobic cover, and metronidazole lacking gram-negative cover, are standard pharmacology, not quoted from the cited sources.
- 51 q2 and q4 both carry infectious-diseases KF3 (host factor). They test different decisions: admission and antibiotics now, and elective resection after recovery.
- 48 q4 is tagged shock KF3 (choice of resuscitation fluid). The key is IV crystalloid against restriction, oral fluids, paracentesis first and cabergoline.
- 48 is set at a walk-in clinic followed by the ED. The fertility clinic is not on site, and the CFAS guideline advises contacting the treating fertility team. This is not tested.

## Checks run

`npx tsc --noEmit -p . | grep samps/s62`: no output. `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed. No em dashes, en dashes or semicolons in content strings.
