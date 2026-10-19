# Q500 writer report, batch s62 round 2 (abdominal pain)

Writer: Preceptor. File: `src/samps/s62/abdominal-pain.ts`. Verdict applied: `docs/reviews/q500-verify-s62.md` (the earlier `q500-qa-s62.md` was read for context only). Ids are unchanged. All items stay `reviewed: false`, `version: 1`, author "Preceptor". abdominal-pain-50 passed and was not touched.

## Required fixes and how each was done

| Item | Required fix | Done |
|---|---|---|
| abdominal-pain-48 | Whole SAMP retold signed infectious-diseases-15 (PID with tubo-ovarian abscess). Rebuild with a different KF8 diagnosis mislabelled as cystitis. | Rebuilt as early ovarian hyperstimulation syndrome 5 days after an egg retrieval, labelled a bladder infection because of scanty dark urine. New patient, stem and decisions: q1 diagnosis (KF8), q2 menu of first investigations (ultrasound, CBC with hematocrit, electrolytes and creatinine, KF5), q3 analgesia without NSAIDs (analgesia-sedation KF2), q4 titrated IV crystalloid once oral rehydration fails (shock KF3). Source: CFAS 2026 Canadian guideline. Now 4 questions (was 3). |
| abdominal-pain-49 q1 | Bag specimen teaching repeats pediatric-fever s14 and s46. Nearby inflammation causing pyuria is also taken. | Superseded by a coordinator instruction received during this round: the oral case `src/cases/batch14/return-visit-belly-pain-girl.ts` (already passed review) is a child with appendicitis misdiagnosed as UTI at a clinic, given cephalexin, returning worse, keyed to ultrasound first and a surgeon now. I read the case. The whole of abdominal-pain-49 shared that frame and those decisions, so I rebuilt it as a new SAMP rather than replacing only q1. New 49: a 15-year-old girl with suspected ureteric stone. There is no misdiagnosis frame, no appendicitis key, no ultrasound for appendicitis and no surgeon key. q1 (KF6): a urinalysis without blood leaves a stone likely (hematuria sensitivity 84%, Luchs 2002). q2 (KF7): kidney and bladder ultrasound first in a young person because of radiation concern (NICE NG118 1.1.2). q3 (analgesia-sedation KF2): decline hyoscine butylbromide, because NICE advises against antispasmodics (1.2.4). q4 (KF5): low-dose noncontrast CT when the diagnosis is still uncertain after ultrasound (NICE 1.1.3). This keeps KF6 and KF7, which rested only on 49. The CPS 2014 and Choosing Wisely Canada sources are no longer cited and were removed. An intermediate version (q1 jarring tenderness, Samuel 2002) was replaced by this rebuild and is not in the file. |
| abdominal-pain-51 q2 | Remove (repeats abdominal-pain-02 q1 and overlaps 50 q4). | Removed. No bowel ischemia item was added anywhere in 51. WSES 2022 AMI source removed. |
| abdominal-pain-51 q3, q4 | CT with IV contrast, then surgery now for perforation with abscess, repeat abdominal-pain-35. Replace with decisions the steroid angle makes new. Check adrenal crisis items before stress dosing. | Stress dosing was not used: stress-dose hydrocortisone for a patient on long-term prednisone is already keyed in multiple-trauma (s45) and listed in abdominal-pain-07 q4. The CT result is now given in an update (uncomplicated sigmoid diverticulitis), so no imaging choice is keyed. New q2: hospital admission with antibiotics, because WSES advises antibiotics for immunocompromised patients and regards them as high risk of non-operative failure (the opposite of the signed abdominal-pain-24 key, "Outpatient care without antibiotics", for an immunocompetent patient). New q3: amoxicillin-clavulanate PO, with ciprofloxacin plus metronidazole rejected because the Canadian monograph warns of more tendon rupture over age 60 and with corticosteroids. New q4: surgical review for elective resection after recovery (WSES 2020 suggestion for immunocompromised patients). q1 kept unchanged. alsoTopics now infectious-diseases. |
| abdominal-pain-52 q2 | Explanation said "no cough" against a stem with hemoptysis, and claimed no pelvic symptoms that the stem never stated. | Stem now says "Apart from that she has no cough or sputum" and "no ... vaginal discharge or pelvic pain". Explanation now reads "no fever, sputum or productive cough for pneumonia" and "she has no vaginal discharge or pelvic pain". |
| abdominal-pain-52 stem and q3 | Stem mirrored sob-23 (woman 3 weeks after surgery, near-identical vitals). q3 (imaging over D-dimer at high Wells) repeats s51 and s28. Replace with a KF5 decision. | Risk profile changed from recent surgery plus contraceptive to a previous DVT 3 years ago (contraceptive stopped, 3 months of anticoagulation). Age 27, pulse 116, resp 24, BP 118/74, SpO2 94%, 66 kg, temperature 37.3°C. Wells recomputed: 1.5 previous DVT + 1.5 pulse over 100 + 1 hemoptysis + 3 PE most likely = 7.0. New q3 (KF5): imaging when the abdominal presentation tempts abdominal imaging, key "CT angiography of the chest" against CT abdomen, HIDA, MRCP and renal CT. Following the reviewer's B6 note, no option in q3 names pulmonary embolism. No D-dimer option is offered. |

## Other changes

- abdominal-pain-52 gained q4 (KF8) so that every SAMP has 4 or 5 questions: stop the ciprofloxacin, because nothing supports pyelonephritis and the Canadian monograph says prescribing without a proven or strongly suspected bacterial infection is unlikely to help and risks resistance.
- abdominal-pain-48 also now has 4 questions.
- Distractor lengths were adjusted in 48 q1 and 51 q2 so the key is the single longest option in no more than 35% of single questions.

## Batch shape

5 SAMPs, 21 questions (20 single, 1 menu). Single key positions, first to fifth: 4, 4, 4, 4, 4. The key is the single longest option in no more than 35% of single questions.

Key feature coverage, abdominal pain: KF1 1 (50 q2), KF2 2 (50 q4, 51 q1), KF3 2 (52 q1, q2), KF4 1 (50 q5), KF5 4 (48 q2, 49 q4, 50 q3, 52 q3), KF6 1 (49 q1), KF7 1 (49 q2), KF8 3 (48 q1, 50 q1, 52 q4). Every key feature is covered. KF4 now rests on 50 q5 alone, because the old 49 q4 (pediatric surgery now) was the oral case's decision. Secondary topics: analgesia-sedation KF2 (48 q3, 49 q3), shock KF3 (48 q4), infectious-diseases KF3 (51 q2, q4) and KF8 (51 q3).

## How uniqueness was checked

I read the whole abdominal-pain catalogue and searched the infectious-diseases, pediatric-fever, sob and dvt-pe catalogues (and, by grep, every catalogue in the folder) for each new diagnosis, key and teaching point:
- Ovarian hyperstimulation syndrome, egg retrieval, NSAID avoidance in it, and crystalloid titrated to urine output: no SAMP, oral case or keyed answer in the bank. The only "hyperstimulation" text in `src` is the new item.
- Pediatric or adolescent kidney stone, hematuria absent with a stone, low-dose CT after nondiagnostic ultrasound: no SAMP or oral case in the bank. Adult renal colic items (abdominal-pain-01, -12, -23, critical-appraisal-04) key different decisions. abdominal-pain-12 asks about POCUS with no CT for a recurrent adult stone former, not a first episode in a young person.
- Hyoscine butylbromide appears as a wrong option in two signed adult renal colic analgesia questions (s01 abdominal-pain-12 q3 and s02 analgesia-sedation), where the key is an NSAID. In 49 q3 the keyed decision is to decline the antispasmodic when a parent asks for it after the NSAID is given. The teaching overlaps with those distractors, but the keyed decision is new.
- The new 49 shares nothing with return-visit-belly-pain-girl: it has no misdiagnosed UTI, cephalexin, appendicitis, ultrasound for appendicitis or surgical consult.
- Antibiotics and admission for uncomplicated diverticulitis because of immunosuppression, elective resection for an immunocompromised patient, and fluoroquinolone tendon risk with corticosteroids: not keyed anywhere. Diverticulitis items in the bank (abdominal-pain-07, -24, -35, gi-bleed) key different decisions.
- Stopping an unneeded antibiotic after a urinary misdiagnosis: no matching key.
- Stress-dose steroids, intestinal ischemia and imaging over D-dimer were deliberately avoided.
- The tests' bank-wide near-duplicate stem check passes.

## Sources (each opened)

- Buckett W, Sylvestre C, Liu K, et al. Management of moderate and severe ovarian hyperstimulation syndrome: a Canadian Fertility and Andrology Society clinical practice guideline. Reprod Biomed Online. 2026. Full text read: investigations (Table 2), differential diagnosis (Table 3), classification (Table 4), no fever as a usual feature, NSAIDs to be avoided, acetaminophen with or without an opioid, oral then IV crystalloid (recommendations 7 and 8) titrated to 20 to 30 mL/hour, no salt or water restriction, LMWH for admitted patients (recommendation 5), cabergoline generally not recommended (recommendation 4). https://cfas.ca/_Library/Clinical_Practice_Guidance_Documents_/OHSS_RBMO_CFAS_CPG.pdf (DOI 10.1016/j.rbmo.2026.105541)
- National Institute for Health and Care Excellence. Renal and ureteric stones: assessment and management. NG118. Published 8 January 2019. Recommendations page read: 1.1.2 ultrasound first for children and young people, 1.1.3 low-dose noncontrast CT if still uncertain, committee rationale on radiation and on MRI and plain radiograph being less accurate than CT in adults, 1.2.1 to 1.2.4 NSAID first, then IV paracetamol, then opioids, no antispasmodics. No Canadian guideline on ED stone imaging in young people was found, so an international guideline is used (SAMP_SPEC section 9). https://www.nice.org.uk/guidance/ng118/chapter/Recommendations
- Luchs JS et al. Utility of hematuria testing in patients with suspected renal colic: correlation with unenhanced helical CT results. Urology. 2002. Abstract read in Europe PMC (PMID 12031364): sensitivity 84%, NPV 65%, 95 false negatives among 587 stones (16%, about 1 in 6). https://doi.org/10.1016/s0090-4295(02)01558-3
- Sartelli M et al. 2020 update of the WSES diverticulitis guidelines. Full text read again through Europe PMC (PMC7206757): immunocompromised patients at high risk of non-operative failure (2D), antibiotics against gram-negative bacilli and anaerobes in high-risk patients including the immunocompromised, oral antibiotics whenever possible, outpatient care only without significant comorbidities, elective resection suggested for immunocompromised patients after conservative treatment (2D), Biondo series with the most emergency surgery in the chronic corticosteroid group. https://doi.org/10.1186/s13017-020-00313-4
- Pharmascience Inc. pms-CIPROFLOXACIN product monograph, revised 13 October 2022. PDF text read: tendinitis and tendon rupture risk further increased over age 60 and with corticosteroids, disabling and potentially persistent reactions, use only for proven or strongly suspected bacterial infection. https://pdf.hres.ca/dpd_pm/00067730.PDF
- Thrombosis Canada. Pulmonary embolism (PE): diagnosis. Version 30 April 2025. PDF text read again: Wells bands, imaging tests named as CTPA and ventilation-perfusion scan. https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf
- Unchanged and still cited: Ohle 2020 and ACC/AHA 2022 (50), Brandl 2016 (51 q1).
- Removed because no longer cited: PHAC PID page, CPS 2014 UTI statement, Choosing Wisely Canada radiology, WSES 2022 mesenteric ischemia.

## Uncertain, for the reviewer

- 52 q3: CT pulmonary angiography is keyed many times in the bank. The decision here is chest imaging rather than the abdominal imaging the presentation invites, which the verify report proposed. If the reviewer judges the key itself a repeat, a fallback is high pretest probability with a negative CT angiogram leading to leg ultrasound or a V/Q scan (in the Thrombosis Canada guide and not keyed in the bank), but that is a DVT-PE key feature, not abdominal pain KF5. The Thrombosis Canada guide also says V/Q should be considered in young patients with a normal chest radiograph. No V/Q option is offered, and the explanation names both tests.
- 52 q3 Wells: the Thrombosis Canada Wells table is an image in the PDF. The item weights used (previous DVT or PE 1.5, heart rate over 100 1.5, hemoptysis 1, PE most likely 3) are the standard Wells items. The bands (high over 6) were read from the text.
- 51 q3: cefuroxime and trimethoprim-sulfamethoxazole lacking anaerobic cover, and metronidazole lacking gram-negative cover, are standard pharmacology, not quoted from the cited sources.
- 51 q2 and q4 both carry infectious-diseases KF3 (host factor). They test different decisions: admission and antibiotics now, and elective resection after recovery.
- 48 q4 is tagged shock KF3 (choice of resuscitation fluid). The key is IV crystalloid against restriction, oral fluids, paracentesis first and cabergoline.
- 49: Luchs 2002 is an adult series. The explanation says "a large series" and does not claim pediatric figures. NICE NG118 is UK guidance. Its pediatric imaging recommendations match the AUA approach (ultrasound first, low-dose CT if needed), which I saw described only in secondary sources and did not cite. The 52 kg weight and ketorolac 15 mg IV in the q3 update are not tested.
- 49 q3 is close in teaching to the hyoscine distractors in abdominal-pain-12 and an s02 analgesia SAMP (see uniqueness).
- 48 is set at a walk-in clinic followed by the ED. The fertility clinic is not on site, and the CFAS guideline advises contacting the treating fertility team. This is not tested.

## Checks run

`npx tsc --noEmit -p . | grep samps/s62`: no output. `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed. One intermediate run failed on duplicate ids abuse-domestic-40 to -43 in `src/samps/s67/abuse-domestic.ts`, which another agent was editing. The rerun passed, and no failure involved s62. No em dashes, en dashes or semicolons in content strings.

## Round 3 (verdict `docs/reviews/q500-verify2-s62.md`)

abdominal-pain-48 passed and was not changed. Ids are unchanged.

| Required fix | Done |
|---|---|
| 49 q2 (ultrasound first for a stone to spare radiation) repeats abdominal-pain-12 q1 and the oral case. Keep a new KF7 item. | Replaced. New 49 q2 (analgesia-sedation KF3): after ketorolac 15 mg IV leaves her at 7 out of 10, the next analgesic is acetaminophen 750 mg IV (about 14 mg/kg at 52 kg), before an opioid (NICE NG118 1.2.2 and 1.2.3). Distractors are more ketorolac, ibuprofen, morphine and oral codeine. The old q4 (low-dose noncontrast CT after a nondiagnostic ultrasound) is now q3, tagged KF7, with the explanation rewritten around the dose choice (NICE 1.1.3 and the committee's concern about radiation in young people). abdominal-pain-37 q2 is a statement that low-dose CT performs well for appendicitis in a young adult. This is a choice of next test for a suspected stone in an adolescent after ultrasound, so the decision differs. |
| 49 q3 (decline hyoscine) repeats abdominal-pain-12 q3 and analgesia-sedation-02 q1, and its key carried a reason. | Removed. New 49 q4 (tagged KF1, see below): after a first stone in a young person, referral for metabolic assessment (NICE 1.7.3). Distractors are rejected by NICE 1.8.1 and 1.8.4 (no calcium restriction, potassium citrate only for recurrent calcium oxalate stones with hypercalciuria or hypocitraturia) or add radiation. No option carries a reason. |
| 52 q3 CTPA key repeated about 30 times. Not V/Q or serial leg ultrasound. | Replaced with a KF7 statement question. Chest imaging is planned and she asks about radiation. Key "It may raise her breast cancer risk" (the Thrombosis Canada caution for young women), against "equals a chest radiograph", "too small to matter", "matters only in pregnancy" and "outweighs the risk of no scan". The explanation keeps the Wells 7.0 arithmetic and says the caution does not argue against imaging. No V/Q or leg ultrasound key. The update says only "Chest imaging is planned". |
| 52 q4 update named PE and CT angiography. | Now "Imaging confirms a cause outside the urinary tract, and treatment is started. She asks what to do with the ciprofloxacin." |
| 50 q4 "no stone was seen" not in the update. | The update now says "Both kidneys enhance normally, with no ureteric stone or hydronephrosis". |
| 51 q2 "IV opioids" not in the stem. | The stem now says "two doses of IV hydromorphone". |
| 52 q1 "without lung disease" not in the stem. | The stem adds "She has no other medical problems." The explanation now says "a 27-year-old with no other medical problems". |
| Physician note: walk-in clinic dipstick UTI opening shared by 48, 52 and abdominal-pain-34. | 52 now opens with self-treatment: "thinking it was a kidney infection, she started ciprofloxacin left over from an earlier bladder infection". It has no clinic, dipstick or virtual visit (abdominal-pain-34 uses a virtual visit). The dipstick option in 52 q1 became "Temperature of 37.3°C", with the explanation updated. The 52 q4 explanation now refers to "the kidney infection she treated herself for". 48 is unchanged. |

**Uniqueness check.** Searched all catalogues. No key says IV acetaminophen is the next step after an NSAID, refers a young person with a stone for metabolic assessment, or states that CT radiation may raise breast cancer risk. Every bank key mentioning radiation is listed in the search output: abdominal-pain-37 q2 is the only abdominal one, and it is a different statement. No stem uses leftover-antibiotic self-treatment.

**Key feature coverage now (abdominal pain).** KF1 2 (50 q2, 49 q4), KF2 2, KF3 2 (52 q1, q2), KF4 1 (50 q5), KF5 2 (48 q2, 50 q3), KF6 1 (49 q1), KF7 2 (49 q3, 52 q3), KF8 3 (48 q1, 50 q1, 52 q4). Other topics: analgesia-sedation KF2 (48 q3) and KF3 (49 q2), shock KF3 (48 q4), infectious-diseases KF3 (51 q2, q4) and KF8 (51 q3). Single key positions, first to fifth: 5, 3, 3, 5, 4.

**Uncertain, for the reviewer.**
- 49 q4 is tagged KF1, because a young age prompts a search for a metabolic cause. That fit is loose. No abdominal pain key feature covers follow-up.
- 49 q2: many EDs would add morphine at this point. The key follows NICE's order (IV acetaminophen before opioids).
- 52 q3: "a chest CT gives far more radiation than a plain radiograph" is general knowledge, not quoted from the guide. The teaching about breast dose sits behind the V/Q keys elsewhere in the bank, but no question keys it.
- 52 q3 update "Chest imaging is planned" points toward the chest. It does not name q2's key.

**Checks.** `npx tsc --noEmit -p . | grep samps/s62`: no output. `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed.

## Round 4 (verdict `docs/reviews/q500-verify3-s62.md`)

abdominal-pain-48 and -50 passed and were not touched.

| Required fix | Done |
|---|---|
| 49 q2 dose: Canadian monographs dose by weight only under 50 kg. | The key is now "acetaminophen 1000 mg IV". I opened and read the B. Braun Acetaminophen Injection monograph (DPD 00069718, initial authorization 24 February 2023). Section 4.2, Table 1: adults and adolescents of 50 kg or more take 650 mg every 4 hours or 1000 mg every 6 hours, and those of 50 kg or less take 12.5 mg/kg every 4 hours or 15 mg/kg every 6 hours. The AVIR monograph (00048547) gives the same 1000 mg dose for 50 kg or more. The B. Braun monograph is added as a third source in 49 and is cited on q2. The explanation now says she takes 1000 mg every 6 hours, or 650 mg every 4 hours, at 52 kg. To keep key positions balanced, the codeine distractor became "acetaminophen 500 mg IV", an underdose by the monograph. The test sort ignores dose for the same drug, so the key sits second. The NICE order (IV acetaminophen before opioids) is still stated. |
| 49 q3: "the contrast adds nothing to finding a stone" was not sourced. | Replaced with "NICE recommends the low-dose noncontrast study, and a standard CT with IV contrast gives a larger dose." |
| 49 q4: KF1 tag was not a fit, and the update gave away keys. | Dropped, per the coordinator ruling that a 3-question SAMP is acceptable. I found no clean replacement that is unique, honestly tagged and free of cues. 49 now has q1 (KF6), q2 (analgesia-sedation KF3) and q3 (KF7). |
| 51 q3: the antibiotic spectrum claims had no source. | I removed the spectrum claims instead of adding a fourth source. The distractors are now all fluoroquinolone regimens (ciprofloxacin with metronidazole, levofloxacin with metronidazole, moxifloxacin alone), plus "No antibiotic until cultures return". The monograph rejects every fluoroquinolone option: it warns of tendinitis and tendon rupture for "fluoroquinolones including" ciprofloxacin, further increased over age 60 and with corticosteroids. WSES 2020 rejects withholding antibiotics, since that is advised only for immunocompetent patients. The key is supported by WSES: coverage of gram-negative bacilli and anaerobes, oral treatment whenever possible, and amoxicillin-clavulanate, IV and then by mouth, as the antibiotic arm of the diverticulitis trial it describes. The key stays in the first position. |
| 52 q3: the radiation statement had a stem gap, a mock-mode cue and an unsourced claim. | Dropped (3 questions accepted). The ciprofloxacin question moves from q4 to q3. 52 now has q1 (KF3), q2 (KF3) and q3 (KF8). |

**Batch now.** 18 questions: 17 single and 1 menu. 48 and 50 are unchanged, and 49 and 52 have 3 questions each. Single key positions, first to fifth: 4, 3, 3, 4, 4 (no position above 25%). The longest-option rate is within the test limit.

Abdominal pain key feature coverage: KF1 1 (50 q2), KF2 2 (50 q4, 51 q1), KF3 2 (52 q1, q2), KF4 1 (50 q5), KF5 2 (48 q2, 50 q3), KF6 1 (49 q1), KF7 1 (49 q3), KF8 3 (48 q1, 50 q1, 52 q3). Every key feature is still covered.

**Uncertain, for the reviewer.**
- 51 q3: three distractors share one flaw (fluoroquinolone with a corticosteroid at age 69). A candidate who knows the warning finds the key quickly, but each reason is sourced. Amoxicillin-clavulanate as the key rests on WSES describing it in a trial, not on a regimen recommendation.
- 49 q2: many Canadian EDs would add an opioid at this point. The key follows NICE, which the previous verdict accepted.

**Checks.** `npx tsc --noEmit -p . | grep samps/s62`: no output. `SAMP_BATCH=s62 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 124 tests passed.
