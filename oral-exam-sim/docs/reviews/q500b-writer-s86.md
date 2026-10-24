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
