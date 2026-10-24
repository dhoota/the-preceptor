# Q500B writer report: s73, dvt-pe

Batch s73, topic `dvt-pe` (Deep venous thrombosis (DVT) and pulmonary embolus (PE)). File `src/samps/s73/dvt-pe.ts`, array `DVT_PE_S73`. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting and patient | Questions |
|---|---|---|---|
| dvt-pe-48 | Swollen leg after months of groin injecting | Tertiary ED, 31-year-old woman who injects into the femoral vein | 4 single |
| dvt-pe-49 | Breathless new mother | Tertiary ED, 34-year-old woman 10 days after an emergency caesarean, breastfeeding | 1 menu, 3 single |
| dvt-pe-50 | Teenager home from a ski trip | Tertiary ED, 15-year-old boy after tibial nailing and a long flight | 1 menu, 3 single |
| dvt-pe-51 | Painful neck early in pregnancy | Tertiary ED, 33-year-old woman at 9 weeks after IVF with severe OHSS, jugular thrombosis | 4 single |
| dvt-pe-52 | Older man with chest pain on a blood thinner | Rural hospital, 76-year-old man with PE despite apixaban (St John's wort) | 4 single |

20 questions: 18 single, 2 menu. Single key positions 0 to 4: 3, 3, 4, 4, 4 (max 22 percent). The key is the single longest option in 1 of 18 singles.

## Key feature coverage

Bank counts before this batch (all batches and alsoTopics questions): KF1 15, KF2 18, KF3 21, KF4 29, KF5 20, KF6 61, KF7 31. The extra questions went to the thinnest features.

| KF | This batch | Items |
|---|---|---|
| 1 History of risk factors | 5 | 48 q1, 49 q1, 50 q1, 51 q1, 52 q3 |
| 2 Examination | 4 | 48 q2, 49 q2, 50 q2, 51 q2 |
| 3 Decision rules | 3 | 48 q3, 50 q3, 52 q1 |
| 4 Tests by pretest probability | 2 | 48 q4, 52 q2 |
| 5 Testing tailored to context | 3 | 49 q3, 50 q4, 51 q3 |
| 6 Anticoagulant choice | 2 | 49 q4, 51 q4 |
| 7 Objective data for outpatient care | 1 | 52 q4 |

## New angles (checked against all 47 existing dvt-pe SAMPs, the sob, chest-pain, asthma-copd and abdominal-pain SAMPs that test dvt-pe, and the 3 dvt-pe oral cases)

- Femoral injecting as a DVT risk factor, a pulsatile groin mass (pseudoaneurysm) as the finding that changes management, and Wells not capturing injecting drug use.
- Postpartum risk factors as Thrombosis Canada lists them (emergency caesarean and serious infection count, a planned uncomplicated caesarean does not), peripartum cardiomyopathy as the PE mimic on examination, breastfeeding after contrast CT, and warfarin as the oral agent while breastfeeding.
- Wells score performance in children (Biss 2009) and a normal D-dimer not excluding PE in a child with high suspicion.
- Severe OHSS as a risk factor, jugular vein thrombosis in early IVF pregnancy, duplex ultrasound of the neck, and LMWH in the first trimester.
- St John's wort induction as the cause of PE on apixaban, and the Hestia item "PE diagnosed during anticoagulant treatment".

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| jackman-groin-pwid | Jackman J, Guthrie GJK, Suttie SA. The groin and people who inject drugs: management and pitfalls. Br J Hosp Med (Lond). 2026. | https://www.imrpress.com/journal/BJHM/87/5/10.31083/BJHM54135 (opened) |
| wells-dvt-2003 | Wells PS and colleagues. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003. | Already in the bank (s33). Item definitions checked against the Thrombosis Canada DVT diagnosis guide. No url added. |
| tc-dvt-dx | Thrombosis Canada. Clinical guide: deep vein thrombosis (DVT) diagnosis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/DEEPVEINTHROMBOSISDIAGNOSIS_60.pdf (downloaded and read) |
| tc-preg-prophylaxis | Thrombosis Canada. Clinical guide: pregnancy, thromboprophylaxis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/THROMBOPROPHYLAXISINPREGNANCY_43.pdf (downloaded and read) |
| hfa-ppcm-2019 | Bauersachs J and colleagues. Peripartum cardiomyopathy position statement, HFA of the ESC. Eur J Heart Fail. 2019. | Abstract confirmed by web search (Eur J Heart Fail 21(7):827 to 843). Full text not opened, so no url. |
| abm-protocol-31 | Mitchell KB, Fleming MM, Anderson PO, Giesbrandt JG, Academy of Breastfeeding Medicine. ABM clinical protocol 31. Breastfeed Med. 2019. | https://www.bfmed.org/assets/DOCUMENTS/PROTOCOLS/Protocol%20%2331%20-%20English%20Translation.pdf (downloaded and read) |
| tc-preg-vte-tx | Thrombosis Canada. Clinical guide: pregnancy, venous thromboembolism treatment. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf (downloaded and read) |
| tc-pe-dx | Thrombosis Canada. Clinical guide: pulmonary embolism (PE) diagnosis. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf (downloaded and read) |
| biss-peds-pe-2009 | Biss TT, Brandão LR, Kahr WH, Chan AK, Williams S. J Thromb Haemost. 2009. | PubMed 19682234 abstract read through the NCBI E-utilities record. |
| arya-ivf-jugular-2001 | Arya R, Shehata HA, Patel RK and colleagues. Internal jugular vein thrombosis after assisted conception therapy. Br J Haematol. 2001. | PubMed 11722427 abstract read through the NCBI E-utilities record. |
| wells-pe-2001 | Wells PS and colleagues. Excluding pulmonary embolism at the bedside without diagnostic imaging. Ann Intern Med. 2001. | Already in the bank (s33). No url added. |
| tc-apixaban | Thrombosis Canada. Clinical guide: apixaban (Eliquis). Version dated 2 June 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf (downloaded and read, St John's wort named as a strong inducer) |
| bellou-outpatient-pe | Bellou E, Keramida E, Karampinis I and colleagues. Outpatient treatment of pulmonary embolism. Breathe (Sheff). 2020. | https://pmc.ncbi.nlm.nih.gov/articles/PMC7792861/ (opened, Hestia table) |

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s73` prints nothing. `SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passes 127 of 128. The bank-wide near duplicate stem test passes when given a longer timeout (`--testTimeout=120000`, 25 seconds) but times out at the 5 second default while the shared machine is under heavy load from other agents (load average above 20 on 4 cores). No stem in this batch is a near duplicate.

## For the reviewers

- dvt-pe-50 q3. Biss 2009 is retrospective. The 2026 BEEPER study validated PERC-Peds (not Wells) in children aged 4 to 17. The item tests only the Wells score, and the explanation avoids saying no pediatric rule exists. Check that this holds.
- dvt-pe-49 q3 is tagged KF5 (testing tailored to context: breastfeeding after CT). Confirm the tag.
- dvt-pe-52 q3 is tagged KF1. It tests the medication history that explains a breakthrough PE, which is a stretch from baseline risk factors.
- dvt-pe-52 q1 uses the Wells 2001 two level cut point of more than 4 for "PE likely". The Thrombosis Canada table footnote reads "unlikely <4.5, likely >4.5". His score of 5.5 is likely under either reading.
- dvt-pe-51 q4 says 12 800 units is given "as the nearest prefilled syringe". The exact syringe band was not quoted, so a dose band was not keyed.
- dvt-pe-48 q2: the source says a pulsatile mass is present in only a few patients with pseudoaneurysm. The explanation says so.
- Thrombosis Canada guide years follow the bank's existing citations (2025). The PDFs carry no printed date.
- The web search budget ran out late in drafting. Every source above had been verified before that point.

## Revision 1

Fixes for every failed item in `docs/reviews/q500b-qa-s73.md`. Before rebuilding, each new angle was checked by keyword across all of `src/samps` and `src/cases`, not only `topic: "dvt-pe"` (septic thrombophlebitis, whole leg ultrasound, postpartum duration, gestalt for arm and neck DVT, anti-Xa monitoring in pregnancy, apixaban drug levels). No new source was added. Every rebuilt explanation draws only on sources already verified for this batch.

| Item | Fix |
|---|---|
| dvt-pe-48 stem | New patient frame, so it no longer reads as infectious-diseases-50: a 46-year-old man who injects fentanyl into the left groin. No hepatitis C and no smoking. He sleeps at a shelter, has no phone and has missed clinic visits. Added "The right leg is normal." so "pitting edema confined to the symptomatic leg" traces to the stem. q1 distractors changed to match (alcohol, fentanyl, forearm cellulitis, shelter). |
| dvt-pe-48 q2 | Pseudoaneurysm question replaced. KF2 now asks which finding suggests the thrombosed femoral vein is infected (septic thrombophlebitis). The key is fever with rigors and a groin sinus (Jackman 2026: large proximal veins in long-term injectors, fever, chills, rigors and a draining sinus, diagnosed by CT or duplex). The only other bank item is the superficial vein in dvt-pe-11. |
| dvt-pe-48 q3 | Update is now "The rest of his examination is unremarkable." It no longer names a q2 option. Pronouns changed. Score unchanged at 4. |
| dvt-pe-48 q4 | Rebuilt as a choice of ultrasound strategy for a likely patient who may not return. The key is whole leg compression ultrasound. Thrombosis Canada: a negative proximal scan needs a D-dimer and a repeat in 5 to 7 days, while a negative whole leg scan needs neither. This differs from dvt-pe-28 q4, which keys the repeat scan, and from dvt-pe-36 q2. |
| dvt-pe-49 stem | Moved away from chest-pain-04: now day 16 postpartum, 12 hours of symptoms, pain under the left breast, pulse 106, resp 20, O2 sat 95%, weight 66 kg, and a left lower lobe PE. |
| dvt-pe-49 q3 | Update is now "The rest of her examination is unremarkable." It no longer names the q2 key. |
| dvt-pe-49 q4 | Breastfeeding anticoagulant question replaced with KF6 duration. A PE 16 days after birth needs at least 3 months in total. Stopping 6 weeks after delivery would give less than 4 weeks of treatment. Thrombosis Canada pregnancy VTE treatment guide: minimum total 3 months, and at least 6 weeks postpartum. This contrasts with dvt-pe-40, an antepartum clot keyed at 6 weeks after delivery. |
| dvt-pe-50 q3 | Update is now "His chest examination is otherwise unremarkable." It no longer names the q2 key. The key was reworded to "Poor at separating children with PE" for position balance. Content unchanged. |
| dvt-pe-51 stem | Added "she has no chest pain or shortness of breath". |
| dvt-pe-51 q2 | The collateral vein and abscess question (a repeat of dvt-pe-17 q1) was replaced with KF3. Pretest probability for arm and neck DVT is set by physician gestalt (Thrombosis Canada DVT diagnosis guide: Constans has had only limited validation). The distractors are rules built for leg DVT or for PE. |
| dvt-pe-51 q3 | The duplex first question (a repeat of dvt-pe-17 and dvt-pe-43) was replaced with KF2. Which finding, if present, would suggest PE as well as the jugular clot: a respiratory rate of 26/minute (Thrombosis Canada PE diagnosis guide signs). The other options are local signs of the clot. Its update no longer names a q2 key. The unsupported "no chest symptoms" claim is now a stem fact. |
| dvt-pe-51 q4 | Weight-based LMWH dosing (a repeat of dvt-pe-05 and dvt-pe-30) was replaced with KF6 laboratory monitoring in pregnancy. The key is no routine laboratory monitoring. Thrombosis Canada: no routine peak anti-Xa testing except at extremes of weight, after a breakthrough clot or at very high risk. Trough anti-Xa only in severe renal dysfunction. Routine platelet counts not suggested. The Arya 2001 source is no longer cited and was removed. |
| dvt-pe-52 q2 | The straight-to-CT question was replaced with KF6. The test that measures apixaban is an apixaban-calibrated anti-Xa level, because the INR and aPTT are often normal on apixaban (Thrombosis Canada apixaban guide). Imaging confirmation moved into its update. q3's update is now "You review his medications with him and his daughter." The pleural effusion moved to the q4 update, so the q4 distractor still traces to the case. tc-pe-dx is no longer listed for 52. Related bank items: cva-05 (a write-in drug-specific anti-Xa level before thrombolysis) and multiple-trauma (dabigatran and thrombin time). Neither is a VTE breakthrough setting. |

### After revision

- Questions: 20 (18 single, 2 menu).
- Single key positions 0 to 4: 4, 4, 3, 3, 4 (max 22 percent).
- The key is the single longest option in 5 of 18 singles (28 percent, under 35).
- Key features:

| Key feature | Count | Items |
|---|---|---|
| KF1 | 5 | 48 q1, 49 q1, 50 q1, 51 q1, 52 q3 |
| KF2 | 4 | 48 q2, 49 q2, 50 q2, 51 q3 |
| KF3 | 4 | 48 q3, 50 q3, 51 q2, 52 q1 |
| KF4 | 1 | 48 q4 |
| KF5 | 2 | 49 q3, 50 q4 |
| KF6 | 3 | 49 q4, 51 q4, 52 q2 |
| KF7 | 1 | 52 q4 |

- Tests: `SAMP_BATCH=s73 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passes 128 of 128. tsc shows nothing for samps/s73.

### For the re-review

- 52 q2 tests anticoagulant level testing, tagged KF6. It is borderline for "choose anticoagulation that fits the patient". The explanation stays within the Thrombosis Canada apixaban guide.
- 48 q2 says the antibiotics should cover Staphylococcus aureus and that blood cultures are needed. Jackman's table lists vancomycin or flucloxacillin for endovascular infection. Blood cultures are standard practice, not quoted from the source.
- 49 q4 relies on the Thrombosis Canada wording "at least 6 weeks postpartum (with a minimum total duration of 3 months)".
