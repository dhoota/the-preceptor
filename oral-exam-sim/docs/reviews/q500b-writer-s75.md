# Q500B writer report: s75, Headache

## Ids written

headache-48 to headache-52 in `src/samps/s75/headache.ts` (array `HEADACHE_S75`). All are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

The original task named headache-47 to headache-51. headache-47 already exists in `src/samps/s40/headache.ts` and is signed off, so the batch uses headache-48 to headache-52. The coordinator confirmed this change.

| Id | Scenario | Setting | Questions |
|---|---|---|---|
| headache-48 | Chronic subdural hematoma on apixaban, 79-year-old man | Rural hospital with CT, no neurosurgery | 4 (3 single, 1 menu) |
| headache-49 | Upper cervical herpes zoster hidden in the scalp, 72-year-old woman | Tertiary | 4 single |
| headache-50 | Migraine in a breastfeeding mother after nasal dihydroergotamine | Tertiary | 5 single |
| headache-51 | Petrous apicitis (Gradenigo syndrome) after otitis media, 8-year-old boy | Remote northern hospital, no CT | 4 single |
| headache-52 | Cardiac cephalalgia labelled as migraine, 66-year-old man | Tertiary | 4 single |

Total 21 questions: 20 single and 1 menu (headache-48 q3, select two).

Single key positions (first to fifth): 4, 4, 5, 5, 2 of 20. The key is the single longest option in 6 of 20.

## Key feature coverage

Before this batch the bank had: n1 21, n2 27, n3 16, n4 18, n5 20, n6 35. The extra questions went to the thinnest features.

| Key feature | Questions in s75 | Items |
|---|---|---|
| 1 History | 3 | 48 q1, 50 q1, 52 q1 |
| 2 Dangerous causes | 3 | 48 q3, 48 q4, 52 q2 |
| 3 Examination for red flags | 5 | 48 q2, 49 q1, 50 q2, 51 q1, 51 q4 |
| 4 Other sources | 6 | 49 q2, 49 q3, 49 q4, 51 q2, 52 q3, 52 q4 |
| 5 Migraine | 3 | 50 q3, 50 q4, 50 q5 |
| 6 Prompt investigation, empiric therapy first | 1 | 51 q3 |

## Uniqueness checks

I read every SAMP on the topic (s11 headache-01 to 15, s40 headache-16 to 47) and the headache items in cva, loc, eye and pre-eclampsia, plus the headache oral cases. I also checked these angles against the whole bank before choosing them: chronic subdural hematoma, dexamethasone in subdural hematoma, cervical zoster, lactation and migraine drugs, Gradenigo or petrous apicitis, and cardiac cephalalgia. None of them were already in the bank. I dropped angle closure, giant cell arteritis, pheochromocytoma, cerebellar hemorrhage, contraception with aura, TTP and hemophilia because the bank already covers them.

## Sources and verification

- Dziho A and colleagues. Global prevalence and incidence of chronic subdural hematoma. Brain Spine. 2025. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC12720100/ (trauma and falls the commonest cause, antithrombotics contributing, symptomatic cases usually need evacuation).
- Teitelbaum JS, Eliasziw M, Garner M. Can J Neurol Sci. 2002. Abstract opened at cambridge.org (pronator testing sensitivity 92.2% and specificity 90.0%, segmental 38.9%, finger tap 73.3%, hyperreflexia 68.9%).
- Schulman S and colleagues. Thromb Haemost. 2018. Verified through search results and the thieme-connect record (fixed PCC 2 000 units at nine Canadian hospitals).
- Hutchinson PJ and colleagues. Dex-CSDH. N Engl J Med. 2020. Abstract checked through Europe PMC (83.9% against 90.3% favourable, repeat surgery 1.7% against 7.1%).
- Cohen JI. Herpes zoster. N Engl J Med. 2013. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC4789101/ (prodrome 2 to 3 days, Table 3 doses, cervical dermatomes common, steroids not without an antiviral).
- Public Health Agency of Canada. Canadian Immunization Guide, herpes zoster chapter, updated 2025. Opened at canada.ca (spread to people who never had varicella by contact with the lesions, infectious until all lesions are crusted).
- Do TP and colleagues. SNNOOP10. Neurology. 2019. Abstract checked through Europe PMC (sudden onset and papilledema are listed).
- Orr SL and colleagues. Canadian Headache Society emergency migraine review. Cephalalgia. 2015. Abstract checked through Europe PMC (metoclopramide strongly for, dexamethasone strongly against).
- LactMed (NICHD). Entries on dihydroergotamine, ketorolac, codeine and sumatriptan, checked through Europe PMC records (PMIDs 34554670, 30000057, 30000271, 30000314). NCBI Bookshelf pages showed a captcha, so no URL is given.
- Schmit C and colleagues. Gradenigo syndrome in children, scoping review. Diagnostics (Basel). 2025. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC12428227/.
- International Headache Society. ICHD-3, 10.6 Cardiac cephalalgia. 2018. Opened at https://ichd-3.org/10-headache-attributed-to-disorder-of-homoeostasis/10-6-cardiac-cephalalgia/.
- Byrne RA and colleagues. 2023 ESC acute coronary syndrome guidelines. Eur Heart J. 2023. The record was confirmed through Europe PMC (DOI 10.1093/eurheartj/ehad191). The record has no abstract.

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s75` prints nothing.

`SAMP_BATCH=s75 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 131 of 132 pass with the default settings. The failure is the bank-wide near-duplicate stem test, which ran out of time at 5 seconds while other agents were running. With `--testTimeout=120000` all 132 pass, so no near duplicate was found.

## Uncertain, for reviewers

- headache-48 q3: I keyed a fixed PCC dose of 2 000 units from the Canadian cohort. I could not open the Thrombosis Canada DOAC bleeding guide, which may give a weight-based dose. Andexanet is left out of the options on purpose.
- headache-49 q3: the European S2k zoster guideline suggests IV acyclovir for head and neck zoster, particularly in older patients. IV acyclovir is not an option, and oral valacyclovir is keyed from Cohen 2013.
- headache-50 q4: the key (pump and discard for 3 days) rests on the nasal spray manufacturer's advice as reported by LactMed. The LactMed codeine entry is now more permissive than older regulatory advice. Codeine is used only as a distractor in q5, and the explanation says only that regulators prefer other agents.
- headache-50 q3 and q5 combine Canadian Headache Society efficacy points with LactMed safety points. Each question can cite only one source.
- headache-52 q4: the claim that the ESC guideline calls for an invasive strategy within 24 hours for dynamic ST changes comes from my own knowledge of the guideline. The full text was not opened.
- My web search budget ran out partway through. I verified the later sources by opening Europe PMC records and the open pages listed above.
- headache-49 q1 and headache-51 q1 both test looking at a site where the cause is hidden (the scalp, the ear). The skills and sites differ, but a reviewer may see them as the same angle.
