# Q500 writer report, round 2: s55, Infectious diseases

Writer: Preceptor. File: `src/samps/s55/infectious-diseases.ts`. Ids unchanged. All items `reviewed: false`, `version: 1`, `author: "Preceptor"`.

Authority: `docs/reviews/q500-verify-s55.md`. `docs/reviews/q500-qa-s55.md` was read as context. After the verify file was written, the first reviewer edited the file again (its "key decision check" addendum): it removed 48 q5, 49 q3 and 50 q3, and rewrote 51 q5. I treated those edits as writer revisions I own and judged each one below.

## Required fixes and how each was done

### infectious-diseases-48 (rebuilt)

The pacemaker pocket SAMP retold infectious-diseases-33, so the scenario was replaced, as the verdict allowed. The new case is an older man in septic shock from lumbar discitis with a small epidural abscess, 4 weeks after an epidural steroid injection. He has no complaint of pain. The title is unchanged because it still fits. The EHRA source was dropped.

| Q | Verdict | Now | KF | Source |
|---|---|---|---|---|
| q1 | Fail, repeat of id-33 q1 and id-12 q1 | KF6: percussion of the spine as the missed site in a drowsy febrile older man after recent spinal instrumentation. The spine is in no SAMP key or list key in the catalogue. | 6 | Berbari, IDSA 2015 |
| q2 | Pass (Sepsis-3 classification) | The same decision is kept with new numbers and moved to q3: 2.2 L = 30 mL/kg x 74 kg. MAP (88 + 2 x 44) / 3 = 58.7, written as 59 mmHg. Lactate 3.8 mmol/L. "Severe sepsis without shock" replaces "Sepsis without septic shock" as the sepsis-only distractor (Sepsis-3 retired the term), so the key sits in position 1. | 2 | Singer 2016 |
| q3 | Fail, repeat of id-33 q3 (remove the device) | Now q4, KF2: ICU admission within 6 hours (SSC 2026, conditional) when the ICU offers a bed in 15 hours. No SAMP or case keys ICU admission timing. | 2 | Prescott, SSC 2026 |
| q4 | Fail, repeat of the "antibiotics now after cultures" keys, and placed after the fluid and vasopressor updates | Now q2, placed before any fluid or vasopressor update, KF1: give the beta-lactam (ceftriaxone) before vancomycin through a single IV. Kondo 2025: vancomycin usually infuses over 60 minutes or longer, the vancomycin-first group got its beta-lactam a median of about 3 hours later, and beta-lactam first was linked to modestly lower mortality. The study is observational, and the explanation says so. The "after biopsy" distractor uses the IDSA rule that holding antibiotics for a biopsy is only for stable patients. No bank item keys antibiotic sequencing. | 1 | Kondo 2025 |
| q5 | Fail, repeat of id-33 q4 (TEE). The first reviewer had already removed it. | Not restored. KF7 stays covered by 49 q1 and 51 q3. | | |

### infectious-diseases-49 (passed, but now at 3 questions)

The first reviewer removed q3 (which medications raise her risk) as a near repeat of shock-46 q2, which keys holding the same drugs (metformin, ramipril and a diuretic). I agree that the decision is the same, so I did not restore it. The Diabetes Canada source goes with it. New q3, to bring the SAMP back to 4 questions: loperamide 4 mg PO to reduce stool frequency in acute watery diarrhea without blood or fever (IDSA 2017 recommendation 47). The distractors are bismuth subsalicylate, cholestyramine, codeine and octreotide. Probiotics were left out because IDSA allows them (weak), so they would have been a second defensible answer. No bank item keys loperamide: it appears only as a wrong option (gi-bleed-39, abdominal-pain-43). Tagged KF9 (symptom care instead of an antibiotic for a probably viral illness). The old q3 (dysentery features) is now q4, unchanged.

### infectious-diseases-50

| Q | Verdict | Now |
|---|---|---|
| q1, q2 | Pass | Unchanged. |
| q3 (vancomycin 25 mg/kg) | Fail, repeat of abdominal-pain-34 q3 and shock-38 q1. The first reviewer had already removed it. | New q3, KF8: the most likely organism is Staphylococcus aureus. It grew in 90% of infected femoral pseudoaneurysms in people who inject drugs in Samarakoon 2021, where Pseudomonas, Klebsiella and Streptococcus milleri were the occasional others. The explanation names organism-directed cover without keying a dose, and every organism claim cites that series. No bank item keys the organism for this infection. |
| q4 (injecting into the groin) | Fail, self-answering | Rebuilt as KF3 on a host factor the case had not named. The stem now adds untreated HIV with a CD4 count of 150 x 10^6/L, cured hepatitis C and tobacco smoking, and the methamphetamine is smoked, not injected. Key: "HIV with a low CD4 count". In Burkey 2008, a low CD4 count was an independent predictor of MRSA bacteremia, alongside injection drug use. Use of HAART was not a predictor after adjusting for CD4, so the key names the low CD4 count, not "untreated HIV". The prompt says "bloodstream infection", not MRSA, so it does not cue q3 in mock mode. |

The stem change replaced "housed in a supportive housing building and has no other medical history". Coughlin 2006 is no longer cited and was dropped.

### infectious-diseases-51

q5: the verdict asked only for the reason clause ("No action, as condoms were sometimes used") to come out. The first reviewer had since rebuilt q5 as the PHAC look-back period for partner notification in secondary syphilis (6 months, against 3 for primary and 12 for early latent), because "test and treat now" repeats infectious-diseases-44 q4. I kept that rebuild. The options are numbers with no reason clause, the key is unique in the bank, and the verifier confirmed the trace-back periods on the PHAC page. I fixed a garbled sentence in its explanation ("24 months is longer than any early stage, not to a rash she has had for days").

### infectious-diseases-52

| Item | Verdict | Now |
|---|---|---|
| stem | Wrong clearance | Changed to 22 mL/minute. Cockcroft-Gault with the female factor: (140 minus 84) x 54 x 0.85 / (0.815 x 142) = 2 570.4 / 115.7 = 22.2. The q1 explanation now says 22. The q1 key (30 mg once daily, 10 to 30 band) still holds. |
| q2 | Fail, same teaching point as pediatric-fever-50 q3 | New KF9: the care home physician started azithromycin to prevent bacterial pneumonia, and the right step is to stop it now. IDSA 2018 states that there are no data to support the safety or efficacy of antibiotic chemoprophylaxis to prevent bacterial complications of influenza. pediatric-fever-46 q3 (no antibiotics for a sibling contact) is the nearest item. Stopping a prophylactic antibiotic already started is a different decision. |
| q4 | Fail, option order and a second renal-dose question | Rebuilt as KF10 on the verdict's own suggestion: the minimum time outbreak prophylaxis continues after symptom onset in the last case is 7 days (IDSA 2018 recommendation 58: 14 days, and at least 7 days after the last case). The options are plain numbers in ascending order, so the B12 dose-order fault cannot recur. |

## Batch after the fixes

21 questions: 20 single, 1 menu (51 q3). Four SAMPs have 4 questions and one has 5. Single key positions, first to fifth: 4, 3, 5, 4, 4. Five of 20 is the 25 percent limit, and every position is used. The key is the longest option in 5 of 20 singles (25 percent).

Key features: KF1 1 (48 q2), KF2 2 (48 q3, q4), KF3 1 (50 q4), KF4 1 (50 q2), KF5 1 (51 q2), KF6 3 (48 q1, 50 q1, 51 q1), KF7 2 (49 q1, 51 q3), KF8 2 (50 q3, 51 q4), KF9 5 (49 q2, q3, q4, 52 q1, q2), KF10 3 (51 q5, 52 q3, q4). Every key feature is covered. KF1 is kept, as the task asked.

## How uniqueness was checked

- I read the full `catalog/infectious-diseases.md` (every SAMP and oral case decision). I read every SAMP key in `catalog/shock.md`. I grepped `abdominal-pain.md`, `pediatric-fever.md`, `sob.md` and `multiple-patients.md`, and all 35 catalogues for each new decision term: spine, percussion, beta-lactam or vancomycin order, ICU within 6 hours, loperamide, CD4, azithromycin, outbreak duration, look-back.
- I also grepped the other Q500 SAMP batches (s54, s56 to s70) and every oral case in `src/cases`.
- No new key matches an existing key. The closest neighbours, all different decisions:
  - The oral case fever-back-pain-injection-use gives spinal point tenderness as a finding, in a man who complains of back pain. In 48 q1 the patient has no pain complaint, and the candidate must choose the spine.
  - Two s12 SAMPs and one s32 SAMP use "within 6 hours" options for endoscopy or reduction, not for ICU admission.
  - infectious-diseases-11 q4 keys HIV as the risk for TB reactivation, not for bacteremia.
- No patient numbers were taken from another item. 48 uses 74 kg, BP 84/48 and then 88/44 mmHg, and lactate 3.8 mmol/L.

## Sources, with the URLs used to verify them

- Berbari EF et al. IDSA native vertebral osteomyelitis guideline. Clin Infect Dis 2015. Read: suspect it with back pain and fever, risk from recent instrumentation, motor and sensory examination, empiric therapy in sepsis and holding antibiotics only when the patient is stable. https://academic.oup.com/cid/article/61/6/e26/2196013 (record also confirmed in Europe PMC, PMID 26229122)
- Kondo Y et al. Clin Infect Dis 2025. Full text read (25 391 patients, aOR 0.89, vancomycin infusion 60 minutes or more, beta-lactam a median of 164 minutes after vancomycin). https://pmc.ncbi.nlm.nih.gov/articles/PMC12043061/
- Singer M et al. Sepsis-3. JAMA 2016. Not reopened. The verifier confirmed it. https://pubmed.ncbi.nlm.nih.gov/26903338/
- Prescott HC et al. Surviving Sepsis Campaign 2026. Crit Care Med 2026. The full text was not reachable. The recommendation (conditional, low certainty: admit adults who need ICU care within 6 hours) was read in the Guideline Central summary, https://www.guidelinecentral.com/guideline/5149062. The DOI link is the one already used in the bank. https://doi.org/10.1097/CCM.0000000000007075
- Shane AL et al. IDSA infectious diarrhea 2017. Recommendations 47 (loperamide) and 49 (probiotics) read. https://academic.oup.com/cid/article/65/12/e45/4557073
- Samarakoon LB et al. Singapore Med J 2021. Full text read (S. aureus 90%, other organisms, CT angiography in all patients). https://pmc.ncbi.nlm.nih.gov/articles/PMC8027151/
- Burkey MD et al. HIV Med 2008. Full text read (CD4 count, injection drug use and end-stage renal disease predict MRSA bacteremia. HAART was not significant after adjustment). https://pmc.ncbi.nlm.nih.gov/articles/PMC2581476/
- Uyeki TM et al. IDSA influenza 2018. Recommendations 53 and 58 read, and the statement that there are no data for antibiotic chemoprophylaxis. https://academic.oup.com/cid/article/68/6/e1/5251935
- Unchanged and not reopened: Tresson 2022, Guelbi 2025, the PHAC syphilis pages, AMMI 2019. The verifier or first reviewer checked them.

## Uncertain, for the reviewer

- 48 q2 rests on observational data, and Kondo's secondary analyses weakened the result. The key is also justified by infusion time alone. A physician may judge sequencing too fine a point for a key.
- 48 q4 rests on a conditional SSC 2026 suggestion read through a third-party summary, not the full text.
- 49 q3 is tagged KF9. It is symptom care for a probably viral illness, not an antibiotic decision in the strict sense.
- 50 q4: Burkey studied MRSA bacteremia, and the prompt says "bloodstream infection" to avoid cueing q3. The explanation names MRSA bacteremia as the outcome studied.
- Mock-mode flags (B6), not fixable without losing the question:
  - 48 q2's update names spinal tenderness, which is the q1 key.
  - 48 q4's update names norepinephrine, which implies the q3 key.
  - 51 q2's update names the palms and soles, which is the q1 key (the verifier flagged this one before).

## Tests

`npx tsc --noEmit -p . 2>&1 | grep 'samps/s55'` printed nothing. `SAMP_BATCH=s55 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed.
