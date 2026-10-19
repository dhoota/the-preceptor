# Q500 writer report: s56, Pediatric fever

Writer: Preceptor. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Questions | Key features |
|---|---|---|---|
| pediatric-fever-48 | Hot, restless toddler after a weekend away | 4 single | 6, 6, 6, 2 |
| pediatric-fever-49 | Teenager with evening fevers and a racing heart | 4 single | 5, 6, 8, 6 |
| pediatric-fever-50 | Boy with a cold and green discharge | 4 single | 7, 7, 7, 8 |
| pediatric-fever-51 | Girl whose legs hurt too much to walk | 4 single | 2, 2, 3, 2 |
| pediatric-fever-52 | Fever and a dark spot during treatment | 3 single, 1 menu | 4, 1, 1, 3 |

20 questions: 19 single, 1 menu (select 2). Single key positions, first to fifth: 4, 4, 4, 4, 3.

## Key feature coverage

KF1: 2. KF2: 4. KF3: 2. KF4: 1. KF5: 1. KF6: 5. KF7: 3. KF8: 2. Every key feature is tested. The extra weight sits on KF6, then KF2 and KF7, as asked.

## Scenarios and why they are new

All 47 existing pediatric-fever SAMPs and related topics (tox, shock, asthma-copd, sob, headache) were searched first.

- 48: dimenhydrinate (anticholinergic) poisoning presenting as fever and delirium. Existing KF6 items cover salicylate, overbundling, DRESS, MIS-C, amphetamine and heat stroke in a car. The amphetamine item used anticholinergic toxicity only as a contrast.
- 49: Graves thyrotoxicosis presenting as weeks of low-grade fever in a 14-year-old. Thyroid tests appear in the bank only as distractors.
- 50: viral rhinosinusitis with green discharge in a 6-year-old. Bronchiolitis was avoided because asthma-copd-16 already teaches it. The existing sinusitis item (s40) is Pott puffy tumour.
- 51: early meningococcal sepsis before the rash, with leg pain and cold extremities, and shock with a normal BP. Existing items teach petechial rash, cool hands with tachycardia, and LP timing, but not the early non-rash signs.
- 52: ecthyma gangrenosum in a child with ALL and fever and neutropenia. Pediatric fever and neutropenia has no existing SAMP (the s14 source was listed but not cited).

## Sources and verification

- Scharman EJ et al. Diphenhydramine and dimenhydrinate guideline. Clin Toxicol. 2006. Abstract read. https://pubmed.ncbi.nlm.nih.gov/16749537/
- Canadian Antidote Guide, physostigmine page (updated 2026). Page read (pure anticholinergic delirium, pediatric 0.01 to 0.02 mg/kg, max 0.5 mg, contraindicated with QRS widening). https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/physostigmine
- Dawson AH, Buckley NA. Br J Clin Pharmacol. 2016. Abstract read. https://pubmed.ncbi.nlm.nih.gov/26589572/
- Weiss SL et al. SSC pediatric 2020. Full text read (PMC7095013): septic shock definition including impaired perfusion, antimicrobials within 1 hour, ceftriaxone for community-acquired sepsis, fluid titrated to clinical markers. https://pubmed.ncbi.nlm.nih.gov/32030529/
- Ross DS et al. ATA 2016 hyperthyroidism. PDF read (recommendation 35, recommendation 64 on PTU in children, Table 6 point scale). The pediatric beta-blocker recommendation was confirmed from a search extract. https://pubmed.ncbi.nlm.nih.gov/27521067/
- SickKids AboutKidsHealth dosing sheet. 2024. PDF text read (acetaminophen 10 to 15 mg/kg every 4 to 6 hours, ibuprofen 5 to 10 mg/kg every 6 to 8 hours). https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf
- Wald ER et al. AAP acute bacterial sinusitis. Pediatrics. 2013. Abstract read. https://pubmed.ncbi.nlm.nih.gov/23796742/
- Thompson MJ et al. Lancet. 2006. Abstract read (72%, median 8 hours, late signs at 13 to 22 hours). https://pubmed.ncbi.nlm.nih.gov/16458763/
- Lehrnbecher T et al. Pediatric fever and neutropenia 2023. Full text read (A1 to A6). https://pubmed.ncbi.nlm.nih.gov/36689694/
- Almatrafi MA et al. Clin Case Rep. 2026. Abstract read. https://doi.org/10.1002/ccr3.73143

## For the reviewers

- 48 q2 states that diphenhydramine can widen the QRS through sodium channel blockade. The cited Canadian Antidote Guide supports the QRS warning for physostigmine, but not the mechanism. That rests on general toxicology knowledge.
- 48 q3 keys physostigmine. Benzodiazepines were left out of the options on purpose, because they are a defensible alternative for agitation.
- 49 q1 tags thyrotoxicosis as KF5 (uncommon cause of persistent fever). It could also be read as KF6. The stem was written so that she scores 15 on the ATA thyroid storm scale. Please recheck the arithmetic: temperature 37.8°C (100.0°F) = 10, pulse 108 = 5, no CNS, GI or heart points.
- 49 q3 key is 540 mg (15 mg/kg). The SickKids table rounds to 480 mg for 32 to 44 kg, which is 13.3 mg/kg and is not among the options.
- 50 cites the AAP 2013 guideline because no current CPS statement on pediatric acute bacterial sinusitis was found.
- 52 q1 cites a single case report for ecthyma gangrenosum. A dermatology or ID review would be a stronger source if a reviewer can find one.

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s5` printed nothing. `SAMP_BATCH=s56 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 128 tests passed.
