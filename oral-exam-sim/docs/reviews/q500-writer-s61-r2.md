# Q500 writer report, batch s61 (seizures), revision round 2

Writer: Preceptor. File: `src/samps/s61/seizures.ts`. Verdict applied: `docs/reviews/q500-verify-s61.md` (the first-round `q500-qa-s61.md` was read for context only). Ids are unchanged. Every item stays `reviewed: false`, `version: 1`, `author: "Preceptor"`. No D1 repeat is claimed or used.

## Shape after revision

5 SAMPs, 20 questions (19 single, 1 menu). Every SAMP now has 4 questions, in line with the Q500 rule of 4 or 5 per SAMP (seizures-50 and seizures-51 had 3).

Single key positions (index 0 to 4): 3, 4, 4, 4, 4. No position holds more than 4 of 19 (21%).

Key feature tags: KF1 3, KF2 1, KF3 1, KF4 1, KF5 4, KF6 3, KF7 4, KF8 3. Every key feature is tested.

Checks run: `npx tsc --noEmit -p . | grep samps/s61` printed nothing. `SAMP_BATCH=s61 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128, including the bank-wide near-duplicate stem check. No em or en dashes or semicolons in content strings.

## Required fixes and what was done

| Item | Required fix | What was done |
|---|---|---|
| seizures-48 q4 | Replace the prophylaxis question (repeat of seizures-11) with a new KF8 or KF5 decision | Replaced with recurrence counselling: which of her features most raises the risk of another febrile seizure. Key "Onset at 13 months of age" (Berg rule, age under 18 months). Her temperature of 39.3°C also scores, so she has 2 of 4 points, about 32% recurrence. The temperature is deliberately not an option. Tagged KF5 (advice after a first seizure). Source: Saguil and Servey, Am Fam Physician 2020. |
| seizures-49 q2 | Replace the "convulsive status epilepticus" definition question with a KF3 decision not in the bank | Replaced with treat-promptly timing: after midazolam 0.7 mg IV (0.1 mg/kg for 6.8 kg) at 10:02, when the second dose is due if he is still convulsing. Key 10:07 (CPS 2021: second dose if not stopped within 5 minutes). The update names the CPS algorithm because APLS uses a 10-minute interval. Options are times in ascending order. |
| seizures-49 q3 | Replace bag-valve-mask ventilation (repeat of the oral case pediatric-status-epilepticus) with a KF4 decision not in the bank | Replaced with a stepwise-escalation decision: the convulsion stopped after the second midazolam dose and he is crying, moving all limbs and breathing well, so no further anticonvulsant now. Distractors: levetiracetam 408 mg IV (60 mg/kg), phenobarbital 136 mg IV (20 mg/kg), a third midazolam 0.7 mg IV, a midazolam 0.7 mg/hour infusion. CPS 2021: second-line drugs are for seizures that persist after two benzodiazepine doses. The q4 update was rewritten to drop the bag-mask sentence. q1 and q4 are unchanged otherwise. |
| seizures-50 q2 | Remove the mock-mode cue (lead-in presupposed seizure, and q1 had only one seizure option) and the repeated recognition angle | Replaced with a KF5 sleep-safety decision: key "Avoid sleeping in a top bunk". Distractors: keep him home from school, stop all sports and gym, wake him twice each night, no swimming even with supervision. To stop this question giving q1 away in mock mode, q1 now offers a second seizure option: "Childhood absence epilepsy" replaces "Obstructive sleep apnea", and the q1 explanation was updated. This q1 edit was not requested and is flagged for the reviewer's judgement (REVIEW-RULES rule 4). Source: MedlinePlus, Epilepsy in children, discharge (reviewed 2024). |
| seizures-50 (added q4) | Not required. Added to reach 4 questions | KF7 decision on known epilepsy follow-up: which new feature most warrants prompt neurology reassessment. Key "Declining language and school work" (ILAE: consider a sleep EEG for DEE-SWAS when cognitive or language deterioration occurs). The other options are typical features of the syndrome that do not need new tests. No update, so it does not name q3's key. |
| seizures-51 q2 and q3 | KF2 mapping was not honest. Add or reframe a question to test a rapidly reversible cause or a dangerous mimic | Added q4 (KF2): six weeks later an unprovoked pallid spell while sitting quietly. Key "Twelve-lead ECG" to look for an arrhythmia such as long QT. Leung 2019: precipitating factors are almost always present in breath-holding spells, an ECG helps rule out prolonged QT, and arrhythmias rarely cause pallid spells. This follows the verdict's own example. The q4 update avoids the words "crying first" so it does not cue q1. q2 content unchanged, retagged KF6 (targeted testing of a paroxysmal event, no EEG or CT). q3 content unchanged, retagged KF1 (a mimic treated as such, with no antiseizure drug). |
| seizures-52 q1 | Replace the "Recurrent seizures without status" question | Rebuilt as KF7: the most appropriate ED investigation is a urine pregnancy test (reproductive age, 36 hours of vomiting, unsure of last period, and pregnancy lowers levetiracetam levels per the Sandoz monograph). CT, EEG, lumbar puncture and blood cultures are rejected with stem facts (full recovery, no head injury, normal examination, 37.6°C). The stem gained "She is unsure of the date of her last menstrual period", "She did not hit her head" and "She cares for their 9-month-old son at home during the day". |
| seizures-52 q2 | Replace lorazepam 4 mg IV (repeat of seizures-16 and loc-05) | Rebuilt as an antiemetic choice in epilepsy: key "ondansetron 4 mg IV". Metoclopramide is contraindicated in epileptics (JAMP monograph 2023: frequency and severity of seizures may increase), phenothiazines and haloperidol lower the seizure threshold, and oral domperidone will not stay down. Tagged KF7 (avoid a drug trigger in known epilepsy). |
| seizures-52 q3 | Replace the menu with a KF4 decision not keyed in the bank, no D1 claim | Rebuilt as KF5 safety advice for a parent with epilepsy: key "Bathe him only with another adult present" (Epilepsy Action 2026). Distractors contradict the same guidance: bathing alone in shallow water, changing on a raised table, feeding while standing, avoiding a pram. See "Deviation" below on the KF4 tag. |
| seizures-52 q4 | Keep | Kept. The update was reworded ("after the infusion" no longer applies) and "the gap that led to status" became "the gap that led to her seizures". Key and options unchanged. |

The status-epilepticus sequence is gone from seizures-52. It no longer has lorazepam, a second-line load or a "not yet status" label, so it no longer retells loc-05.

## Deviation: seizures-52 q3 is not tagged KF4

The verdict asked for a KF4 decision in 52 q3 while moving the scenario away from the convulsive status sequence. Every KF4 decision I could put in this scenario was already keyed. Lateral position and suction are keyed in seizures-39 q1 and seizures-01 q1. Eclampsia and magnesium appear in seizures-03, pre-eclampsia-04, -06 and -13. Hyponatremia, hypoglycemia, hypocalcemia, lithium, theophylline, organophosphates, carbon monoxide and local anesthetic toxicity are each keyed elsewhere. Any ongoing-seizure drug step is the D1 sequence. So 52 q3 was rebuilt as a new KF5 decision, and KF4 is restored in seizures-49 q3. The reviewer should judge whether 49 q3 (no further anticonvulsant once the seizure has stopped after two benzodiazepine doses) is an honest KF4 item. If it is not, KF4 has no item and the batch fails coverage.

## How uniqueness was checked

- I read the full seizures catalogue (`scratchpad/q500/catalog/seizures.md`). That covers every seizures SAMP, the loc-05, delirium, pre-eclampsia and ems items in it, and the oral cases refractory-status-epilepticus, older-woman-confusion-seizure, pediatric-status-epilepticus and driver-asks-for-silence.
- I read the related parts of `loc.md` (loc-05, loc-22, loc-29, loc-40, loc-47, and the headings of every loc SAMP), `pediatric-fever.md` (every heading, the infant febrile and meningitis items, and the febrile-infant oral case) and `tox.md` (every heading, the carbon monoxide, theophylline, carbamazepine and flumazenil items, and the TCA oral case).
- I grepped every catalogue for each new key and teaching point: bunk, pregnancy test, ondansetron or antiemetic in epilepsy, bathing a baby, febrile seizure recurrence factors, language decline or DEE-SWAS, the 5-minute repeat interval, no load after cessation, unprovoked spell, Dravet, phenobarbital under 6 months, pyridoxine, acyclovir, IO and flumazenil.
- Results:
  - No catalogue keys bunk-bed safety, antiemetic choice in epilepsy, parenting safety, febrile seizure recurrence predictors, language decline in SeLECTS, the benzodiazepine repeat interval or no load after cessation.
  - "Urine pregnancy test" is keyed in first-trimester-bleeding SAMPs, but for pelvic pain and bleeding, not for seizures. Flagged below.
  - The ECG in 51 q4 is the same kind of test as seizures-07 q2, seizures-31 q2 and seizures-35 q1. Those were a teen with long QT, an older man with heart block and an adult first seizure. Here the patient is a toddler with breath-holding spells and an unprovoked spell, as the verdict suggested. Flagged below.
- Ideas I rejected because they were already in the catalogues:
  - phenobarbital as second line under 6 months (febrile-infant and pediatric-status-epilepticus oral cases)
  - pyridoxine under 18 months (pediatric-status-epilepticus oral case)
  - avoiding valproate under 2 years (same oral case)
  - acyclovir for possible HSV (seizures-14, seizures-15, pediatric-fever-01)
  - empiric meningitis antibiotics in an infant (pediatric-fever-45)
  - carbon monoxide in a vomiting family (headache-12, tox-12, loc-08, oral case)
  - torsades and magnesium (arrhythmia)
  - flumazenil seizure risk (tox-38)
- No new patient reuses numbers from another item. The 6.8 kg infant and 58 kg woman are the batch's own patients.

## Sources (new or newly used this round, each opened)

- Saguil A, Servey J. Predicting the likelihood of a recurrent febrile seizure. Am Fam Physician. 2020. https://www.aafp.org/pubs/afp/issues/2020/0415/p497.html. The Berg rule: age under 18 months, temperature below 40°C, fever under 1 hour and family history. Recurrence is 13% with 0 points and 32% with 2.
- McKenzie KC et al., CPS. Emergency management of the paediatric patient with convulsive status epilepticus. 2021. https://doi.org/10.1093/pch/pxaa127 (full text read at academic.oup.com/pch/article/26/1/50/6125966). It supports:
  - midazolam IV 0.1 mg/kg, maximum 5 mg
  - a second dose if the seizure has not stopped within 5 minutes
  - second-line drugs if the seizure persists after two doses, including prehospital doses
  - more respiratory depression with more than two doses
  - phenobarbital's greater respiratory depression
  - second-line maximum doses
- International League Against Epilepsy. EpilepsyDiagnosis.org. SeLECTS overview, last updated 30 June 2024. https://epilepsydiagnosis.org/syndrome/ects-overview.html. It supports:
  - "If cognitive or language deterioration occurs... consider a sleep EEG" for DEE-SWAS
  - brief hemifacial sensorimotor seizures
  - seizures cease by puberty
- US National Library of Medicine. MedlinePlus. Epilepsy in children, discharge. Review date 19 August 2024. https://medlineplus.gov/ency/patientinstructions/000127.htm. It supports:
  - "Avoid letting a child with epilepsy sleep on the top bunk"
  - supervised swimming
  - plenty of sleep on a regular schedule
  - safe activities
  - telling school staff
- Leung AKC et al. Breath-holding spells in pediatrics. Curr Pediatr Rev. 2019. https://doi.org/10.2174/1573396314666181113094047 (full text PMC6696822). It supports:
  - an ECG may be considered and helps rule out prolonged QT
  - precipitating factors are almost always present
  - arrhythmias rarely cause pallid spells
- Sandoz Canada. Levetiracetam for injection product monograph, 2026. https://pdf.hres.ca/dpd_pm/00083259.PDF (downloaded and searched). Levetiracetam concentrations decrease during pregnancy, by up to 60% in the third trimester. The IV route is used when oral dosing is not feasible.
- JAMP Pharma. Metoclopramide hydrochloride injection product monograph, date of preparation 20 April 2023. https://pdf.hres.ca/dpd_pm/00070463.PDF (downloaded and searched). "Metoclopramide should not be used in epileptics... since the frequency and severity of seizures... may be increased."
- Ondansetron injection monographs (Canadian, pdf.hres.ca 00072523 and 00074400). They list only rare reports of seizures and no epilepsy contraindication. These were used to check the explanation and are not cited.
- Epilepsy Action. Looking after a baby or young child when you have epilepsy. Published April 2026. https://www.epilepsy.org.uk/info/caring-children. It supports:
  - no bath unless another adult is there, and a shallow bowl and cloth when alone
  - changing on the floor
  - sitting on the floor to feed
  - a pram for longer distances
- Unchanged from earlier rounds: AAP 2011 (PMID 21285335), the CIG measles chapter, the PHAC AEFI guide and the ILAE SeLECTS diagnostic criteria page.
- Removed because no question cites them any more: AAP 2008, Cochrane 2021, Specchio 2022, AES 2016 and ESETT 2019.

## Uncertain, for the reviewer

1. The seizures-52 q3 KF4 deviation and the honesty of seizures-49 q3 as KF4, as described above.
2. 49 q3, no load after cessation. Some clinicians load a second-line drug after febrile status in a young infant with possible CNS infection. CPS 2021 ties second-line drugs to seizures that persist after two benzodiazepine doses, and the update shows him recovering. A physician should confirm the key.
3. 49 q2 is a recall of the CPS interval. The update names the CPS algorithm to avoid the APLS 10-minute interval.
4. 51 q4. The ECG repeats a test type keyed elsewhere, in a new population, as the verdict suggested. Leung says only that an ECG "may be considered" for frequent and severe spells. The key rests on the spell being unprovoked and pallid.
5. 51 q3 tagged KF1 and 48 q4 tagged KF5 are loose fits. No seizures key feature names iron treatment or recurrence counselling.
6. 52 q1. "Pregnancy test" is keyed in first-trimester-bleeding SAMPs, in an unrelated context.
7. 52 has three KF7 items (q1, q2, q4).
8. Non-Canadian sources were used where no Canadian guidance was found: Am Fam Physician for the recurrence rule, MedlinePlus for child safety and Epilepsy Action (UK) for parenting safety. I found no Caring for Kids or CPS page on these points.
9. 50 q1 was changed without a request (one distractor swapped, explanation updated) to remove the mock-mode cue that the new q2 would otherwise create.
