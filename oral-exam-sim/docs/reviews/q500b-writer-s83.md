# Q500B writer report: s83, Toxicology

Author: Preceptor. All items `reviewed: false`, `version: 1`.

## Ids written

tox-48 to tox-52 in `src/samps/s83/tox.ts` (array `TOX_S83`).

| Id | Scenario | Setting | Questions |
|---|---|---|---|
| tox-48 | Withdrawal from a gamma-butyrolactone wheel cleaner used every 2 to 3 hours | Tertiary | 5 single |
| tox-49 | 5-day-old with neonatal opioid withdrawal, mother on methadone | Community | 4 single |
| tox-50 | Teen with acetaminophen and a hidden antihistamine, delayed absorption | Tertiary | 5 single |
| tox-51 | Amlodipine overdose with unexpected hypoglycemia from a spouse's gliclazide | Tertiary | 4 single |
| tox-52 | Man asking for help to stop drinking, PAWSS triage | Rural | 3 single, 1 menu |

23 questions: 22 single, 1 menu (tox-52 q3, select 3 of 7).

## Key feature coverage

Bank counts before this batch: kf1 16, kf2 36, kf3 15, kf4 48, kf5 50, kf6 26, kf7 35, kf8 13. The extra questions went to the thinnest key features (8, 3 and 1).

| Key feature | Questions in s83 |
|---|---|
| 1 Collateral | 3 (tox-50 q2, tox-51 q2, tox-52 q3) |
| 2 Toxidromes and selective antidotes | 2 (tox-48 q1, tox-51 q3) |
| 3 Co-ingestion and unexpected labs | 3 (tox-50 q1, tox-50 q5, tox-51 q1) |
| 4 Treatment by toxidrome and agent | 2 (tox-48 q4, tox-51 q4) |
| 5 Complications | 1 (tox-48 q5) |
| 6 Decontamination | 1 (tox-50 q3) |
| 7 Tests that change management | 2 (tox-49 q1, tox-50 q4) |
| 8 Withdrawal severity | 9 (tox-48 q2 q3, tox-49 q2 q3 q4, tox-52 q1 q2 q4) |

Single key positions (0 to 4): 5, 4, 3, 5, 5. No position above 25 percent.

## Uniqueness

I read every existing tox SAMP (tox-01 to tox-47) and the tox key feature questions in other topics. None of the bank's SAMPs covers GHB withdrawal (s32 loc covers GHB intoxication only), neonatal opioid withdrawal, PAWSS triage for outpatient withdrawal, an acetaminophen level that rises late because of an anticholinergic co-ingestant, or an amlodipine overdose with a hidden sulfonylurea. tox-14 and existing octreotide items teach octreotide for a known sulfonylurea. tox-51 instead tests whether the candidate spots an unexpected result and follows it up with collateral. The amlodipine vasopressor question (norepinephrine for vasodilatory shock) is new to the tox bank.

## Sources and verification

- Weaver VK, Ickowicz S, Fairbairn N. CMAJ 2023 (GHB). Opened in full at https://pmc.ncbi.nlm.nih.gov/articles/PMC10241545/ : onset 1 to 6 hours, half-life 20 to 30 minutes, not on standard urine screens, benzodiazepines first line (diazepam up to 300 mg a day), phenobarbital and a high-acuity unit if symptoms worsen despite escalating benzodiazepines.
- Tay E, Lo WKW, Murnion B. Subst Abuse Rehabil 2022. Read at the dovepress URL: GBL is an industrial solvent, delirium and hallucinations in severe withdrawal, antipsychotics with variable success, barbiturates after benzodiazepine failure.
- Wojtowicz JM, Yarema MC, Wax PM. CJEM 2008. Abstract read at the Cambridge URL: seizures and rhabdomyolysis in 7 percent.
- Narvey M, Hamilton D, Paquette V, CPS Fetus and Newborn Committee. Paediatr Child Health 2025. Read at https://cps.ca/en/documents/position/nas-nows : ESC recommended, non-drug dyad care first, hypoglycemia in the differential, breastfeeding supported on opioid agonist therapy if HIV negative and not using unregulated substances.
- Dart RC and colleagues. JAMA Netw Open 2023 (acetaminophen consensus). The full text would not load (503 and 403 errors). Abstract read through PubMed eutils. The rules on co-ingestants (repeat the level 4 to 6 hours after the first when it is below the line but above 10 mg/L) and the 4 hour charcoal window come from secondary summaries quoting the consensus (EMCrit IBCC acetaminophen page, and a search snippet of the full text). The URL used is the PubMed record already used in s53.
- Glatstein M, Scolnik D, Bentur Y. Clin Toxicol 2012. Abstract read through PubMed eutils: octreotide 50 mcg SC or IV then 50 mcg every 6 hours in adults, better than dextrose or diazoxide.
- St-Onge M and colleagues. Crit Care Med 2017 (CCB consensus). Read at https://pmc.ncbi.nlm.nih.gov/articles/PMC5312725/ : norepinephrine preferred in vasodilatory shock, dopamine suggested against, glucagon and methylene blue not recommended, no recommendation for adjunct vasopressin.
- Wood E and colleagues, CRISM. CMAJ 2023 (alcohol use disorder guideline). Read at https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/ and in the BC guideline summary: PAWSS under 4 means outpatient care without benzodiazepines (gabapentin, carbamazepine, clonidine), PAWSS 4 or more means a short benzodiazepine course, ideally as an inpatient.
- Maldonado JR and colleagues. Alcohol 2014 (PAWSS). Citation confirmed through PubMed eutils. Items checked against the published scale form.

## Uncertain points for reviewers

1. Mock-mode cues (ruling B6). tox-51 q3's update (gliclazide missing from the home) gives away the keys of q1 and q2. The question needs that fact. tox-48 q4 says "the first-line drug class" without naming it.
2. tox-51 q1 says amlodipine does not drive insulin release and so does not explain recurrent hypoglycemia. That is standard teaching. I could not check it against a source because the session ran out of web searches.
3. tox-50: I could not open the full Dart 2023 text. The co-ingestion repeat-level rule and the 4 hour charcoal window were checked only through secondary sources that quote it. The conversion is 6.62 umol/L per mg/L: 480 umol/L is 73 mg/L, 690 umol/L is 104 mg/L, and the 8 hour line is about 500 umol/L (75 mg/L).
4. tox-52 q2 keys outpatient gabapentin over an outpatient diazepam taper for PAWSS 3. This follows CRISM 2023. Some EDs still send low risk patients home on a benzodiazepine taper.
5. tox-48 q3 keys lorazepam 2 mg IV. CMAJ gives no starting dose. Diazepam is not an option, which avoids two correct answers.
6. tox-49 sits on kf8 even though the patient is a newborn. Key feature 8 names opioid withdrawal without an age limit.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s83` prints nothing.
- `SAMP_BATCH=s83 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 136 of 136 pass with `--testTimeout=120000`. With the default 5 second timeout, only the bank-wide near-duplicate stem test fails, and it fails by timing out (10 to 22 seconds) on a machine shared with other writers. It does not report a duplicate.
