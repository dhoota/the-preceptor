# Q500B writer report: s86, Cerebrovascular accident (CVA)

File: `src/samps/s86/cva.ts` (array `CVA_S86`). All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

cva-48, cva-49, cva-50, cva-51 and cva-52.

The task asked for cva-16 to cva-20, and `docs/samp-expansion.json` gives s86 `firstId` 16. But cva-16 to cva-47 already exist in `src/samps/s27/cva.ts` (signed off). Reusing them fails the "has unique SAMP ids" test and the sign-off test. So the batch continues the numbering at cva-48, as the other Q500B batches do (for example msk and loc start at 48). The json entry for s86 should read `firstId: 48`. I did not edit that shared file.

## Count and mix

- 5 SAMPs, 20 questions: 19 `single` and 1 `menu` (cva-48 q4, select 2 of 7).
- Single key positions, first to fifth: 4, 4, 4, 4, 3 (no position above 21 percent).
- The key is the longest option in 4 of 19 singles (21 percent).
- Stems run 85 to 143 words.

## Key feature coverage

Count in the bank before this batch (all cva-tagged questions, s05, s27 and other topics): key feature 1: 29, key feature 2: 28, key feature 3: 101, key feature 4: 28. The extra questions went to 1, 2 and 4.

| Key feature | This batch | Items |
|---|---|---|
| 1 Stroke mimics | 4 | cva-48 q1 to q4 |
| 2 Subtle non-MCA strokes | 6 | cva-49 q1, q3. cva-50 q1. cva-52 q1, q2, q3 |
| 3 Reperfusion, imaging, territory | 3 | cva-49 q2, q4. cva-52 q4 |
| 4 TIA risk and work-up | 7 | cva-50 q2, q3, q4. cva-51 q1 to q4 |

## Scenarios and why they are new

I read all 47 cva SAMPs and every other SAMP with a cva key feature (loc, eye, headache, ems, multiple patients, pre-eclampsia, seizures) and the cva oral cases.

- cva-48: chronic subdural hematoma on apixaban causing repeated TIA-like spells. No cva SAMP has a subdural mimic. Teaches CT first, the mechanism, holding the anticoagulant, neurosurgery, and that dexamethasone worsened outcomes (Dex-CSDH).
- cva-49: bilateral anterior cerebral artery ischemia from a single A1, sent in as a spinal cord problem. cva-26 is a unilateral ACA stroke with tenecteplase dosing and A2 thrombectomy. This item tests brain against cord signs, brain imaging before spinal MRI, the A1 variant, and giving thrombolysis without waiting for thrombectomy.
- cva-50: fluctuating brainstem spells over 3 days from an 80% basilar stenosis, first called an inner ear problem. New points: symptomatic intracranial stenosis gets ASA and clopidogrel for 90 days (not 21), medical therapy over stenting (SAMMPRIS), and the Canadian LDL target below 1.8 mmol/L. cva-43 covers vertebral origin stenosis with 21 days of dual therapy, a different lesion and key.
- cva-51: TIA reported 9 days late. New points: work-up still as soon as possible after 48 hours, a single ASA load rather than dual therapy outside the early window, at least 2 weeks of ECG monitoring after a negative Holter, and the Canadian BP target below 140/90 mmHg (below 130 systolic only for lacunar stroke).
- cva-52: locked-in syndrome from basilar occlusion with a GCS of 6, after a warning spell the day before. No item in the bank covers locked-in syndrome. Thrombectomy at 8 hours 45 minutes uses the 24-hour basilar window. cva-04 and loc-09 cover early basilar occlusion with lysis plus thrombectomy.

## Sources and verification

| Id | Citation | Checked at |
|---|---|---|
| s86-csbpr-sp | Gladstone DJ and colleagues. CSBPR secondary prevention of stroke update 2020. Can J Neurol Sci. 2022. | Downloaded the module PDF from https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke and read sections 1.1, 1.2, 1.4A, 3.2, 4.2, 6.1, 6.2, 9.4 and clinical consideration 1.1.2. PubMed record 34140063 confirmed by eutils. |
| s86-csbpr-acute | Heart and Stroke Foundation of Canada. CSBPR acute stroke management, 7th edition 2022, with the EVT interim update 2025. | Downloaded the module PDF (version dated 5 Dec 2025) from https://www.strokebestpractices.ca/recommendations/acute-stroke-management. Read section 5.4 (EVT within 24 hours, basilar occlusion, NIHSS above 5, thrombolysis not delayed for EVT) and the tenecteplase dose. Interim update confirmed as PMID 41340372. |
| s86-russell-csdh | Russell NA and colleagues. Chronic subdural hematoma mimicking transient ischemic attacks. J Trauma. 1985. | Abstract read via eutils, https://pubmed.ncbi.nlm.nih.gov/4057306/ |
| s86-dex-csdh | Hutchinson PJ and colleagues. Trial of dexamethasone for chronic subdural hematoma. N Engl J Med. 2020. | Abstract read via eutils (83.9% against 90.3% favourable outcome), https://pubmed.ncbi.nlm.nih.gov/33326713/ |
| s86-forsberg-aca | Forsberg J and colleagues. Bilateral ACA infarction presenting with acute paraparesis and parkinsonism. Neurol Clin Pract. 2019. | Full text read, https://pmc.ncbi.nlm.nih.gov/articles/PMC6927436/ |
| s86-sammpris | Chimowitz MI and colleagues. Stenting versus aggressive medical therapy for intracranial arterial stenosis. N Engl J Med. 2011. | Abstract read via eutils (14.7% against 5.8% at 30 days), https://pubmed.ncbi.nlm.nih.gov/21899409/ |
| s86-locked-in | Smith E, Delargy M. Locked-in syndrome. BMJ. 2005. | Full text read, https://pmc.ncbi.nlm.nih.gov/articles/PMC549115/ |

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s86` prints nothing.

`SAMP_BATCH=s86 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 127 of 128 pass. The one failure is "bank wide > has no near duplicate stems", which times out at the default 5 second limit (it compares every stem pair in the bank). It also times out with SAMP_BATCH=s70, so it is a speed problem in this environment, not this batch. With `--testTimeout=120000` all 128 pass, so no stem in the bank is a near duplicate.

## For the reviewers

1. Ids: see above. The batch uses cva-48 to cva-52, not cva-16 to cva-20.
2. Mock-mode cues (ruling B6). In cva-48 the q3 update reports the hematoma, which confirms the q1 and q2 keys. In cva-49 the q3 update reports CT findings, which confirms the q2 key. In cva-52 the q4 update reports a basilar occlusion, which supports the q3 key. Each later question needs the finding. I wrote "Imaging shows" in cva-48 q3 so it does not name the test.
3. cva-51 q2. The guideline gives dual therapy for an acute high-risk TIA, with antiplatelets started within 24 hours. It does not name a cut-off for dual therapy itself. At 9 days the key is a single ASA load. INSPIRES enrolled patients up to 72 hours, still well short of 9 days.
4. cva-51 q4. The Canadian secondary prevention target is below 140/90 mmHg, which differs from the AHA's below 130/80 mmHg. The prompt names the Canadian recommendations. The stem gives a cortical TIA (word-finding trouble) and no diabetes, so the lacunar and diabetes targets do not apply.
5. cva-50 q3. The sentence that warfarin is no better than antiplatelet therapy for intracranial stenosis and causes more bleeding comes from WASID (Chimowitz 2005), not from the cited SAMMPRIS paper. It is true, but a reviewer may want it trimmed or sourced.
6. cva-49 q4. A distal A1 occlusion is not one of the standard large vessel targets in the 2025 update, so the key says "urgent EVT review" rather than thrombectomy. Thrombolysis is the clear part of the key.
7. cva-48 q4. Reversing apixaban before drainage is left to neurosurgery, and reversal is not among the options. Her last dose was 3 hours before arrival.

## Revision 1

This revision answers `docs/reviews/q500b-qa-s86.md` (10 failed items) and the coordinator's rulings. Ids, key features and question kinds are unchanged.

| QA item | Change |
|---|---|
| 1 cva-48 stem | No change, on the coordinator's ruling (headache-48 is being replaced on its side). |
| 2 cva-48 q4 | Rebuilt as a menu on her anticoagulant. A new update gives the time (11:40), creatinine 82 umol/L, no anti-Xa level and planned drainage. The keys are "Hold apixaban" and "Andexanet alfa, low-dose regimen" (apixaban 5 mg or less, last dose under 8 hours ago). The explanation says urgent reversal is normally indicated for an intracranial bleed, all the more before surgery, and names PCC 25 to 50 units/kg as the alternative. The distractors are ASA, a lower apixaban dose, idarucizumab, protamine and vitamin K. The dexamethasone option, the Dex-CSDH sentence and the `s86-dex-csdh` source are removed. The new source is `s86-tc-bleed` (Thrombosis Canada order set, June 2024). Also in q2, "shows" now reads "can show". |
| 3 cva-49 stem | New patient: an 81-year-old woman who slid from her chair at a quilting group in a church hall. Last known well 14:20, arrival 15:05, 62 kg, hypertension and diabetes. The left leg is weaker than the right. The occlusion is the distal right A1, and the left A1 is absent. The Forsberg case report is cited only for the mechanism. The title changed to "Slid from her chair". Tenecteplase is recomputed as 0.25 x 62 = 15.5 mg. The timings are recomputed as 45 minutes at arrival and 1 hour 10 minutes at 15:30. |
| 4 cva-49 q2 | The stem now states "no back pain, bruising, spinal tenderness or step" and "radial and femoral pulses are equal and strong". The explanation rejects the aortic and spinal options on those findings. |
| 5 cva-49 q4 | The update now reads only "CT angiography shows occlusion of the distal right A1 segment. It is now 15:30." The absent left A1 is given in the q3 explanation. |
| 6 cva-50 stem | New patient: a 72-year-old woman who has never smoked. Her spells are spinning vertigo, numbness around the mouth and difficulty swallowing, at rest. The closing sentences are rewritten. The q1 explanation now centres on the point that spells fluctuating over more than 48 hours still need urgent work-up (CSBPR clinical consideration 1.1.2). Pronouns are updated in q2 to q4. |
| 7 cva-50 q3 | The warfarin sentence is deleted. The distractor "Heparin infusion then warfarin" is replaced by "Balloon angioplasty without a stent", which is rejected on CSBPR 9.4 (angioplasty, with or without a stent, only after recurrence on full medical therapy). I did not add WASID: `validateSamp` fails any listed source that no question cites, and q3 cites SAMMPRIS for its numbers. |
| 8 cva-51 q1 | The stem now opens "You are working in a regional hospital emergency department with CT and CT angiography." |
| 9 cva-51 q2 | The prompt is now "Which of the following is the most appropriate antiplatelet treatment to start now?" |
| 10 cva-52 | The locked-in basilar scenario stays, on the coordinator's ruling (the batch18 oral case was replaced). q3 is new: why a GCS of 6 is expected in locked-in syndrome (loss of motor and verbal output). It cites Smith and Delargy, and it no longer repeats cva-50 q1, cva-43 or cva-47. The day-before prodrome is removed from the stem, so `s86-csbpr-sp` is no longer cited in this SAMP and is dropped from its sources. q2 now says vertical gaze and lid control are "usually spared". In q4, "an aware patient" now reads "a man who may be fully conscious". BP is lowered to 172/94 mmHg, below the 185/110 threshold. The q4 key is reworded to "Thrombectomy now", which moves it to the fifth position to keep key positions balanced. The phrase "his GCS of 6 hides it" is removed from q1 so it does not repeat q3. |

### Grep before writing changed stems

Searched `src/samps` and `src/cases` for "quilting", "church hall", "slid from her chair", "numbness around the mouth", "betahistine", "trouble swallowing" and "Radial and femoral pulses". There are no scenario matches. The pulse sentence and "trouble swallowing" appear only in unrelated items (chest pain, airway, toxicology).

### After revision

- Single key positions, first to fifth: 4, 4, 4, 3, 4. The key is the longest option in 4 of 19 singles. There is still one menu (cva-48 q4).
- Key features: 1: 4, 2: 6, 3: 3, 4: 7.
- Stems run 95 to 149 words.
- Sources now in the batch: s86-csbpr-sp, s86-csbpr-acute, s86-russell-csdh, s86-tc-bleed (read in full from the Thrombosis Canada PDF, including the major bleed definition, "Hold anticoagulant therapy", and andexanet dosing by dose and time of the last dose), s86-forsberg-aca, s86-sammpris and s86-locked-in.
- `npx tsc --noEmit -p . 2>&1 | grep samps/s86` prints nothing. `SAMP_BATCH=s86 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passes 128 of 128.

### Still open

- Mock-mode cues accepted under B6 in the review: the cva-48 q3 update (hematoma), the cva-49 q3 update (CT and CT perfusion) and the cva-50 q2 update (basilar stenosis).
- cva-48 q4: andexanet is keyed because Thrombosis Canada prefers a targeted agent where one is available. A centre without andexanet would use PCC, and the explanation says so.
