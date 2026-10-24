# Q500B writer report: s87, Decreased level of consciousness (loc)

Author: Preceptor. All items `reviewed: false`, `version: 1`.

## Ids written

loc-48 to loc-52 in `src/samps/s87/loc.ts` (array `LOC_S87`).

| Id | Title | Scenario (setting) | Questions |
|---|---|---|---|
| loc-48 | Could not be woken for breakfast | Man unrousable in police cells after arrest for intoxication, head injury (fly-in northern Ontario hospital, no CT) | 4 (1 menu) |
| loc-49 | Less responsive at the group home | Nonverbal adult with intellectual disability and cerebral palsy, hypovolemic hypernatremia after a heat wave (tertiary) | 4 |
| loc-50 | Collected early from daycare | 9-month-old with lethargy from intussusception, father blames teething (tertiary) | 4 |
| loc-51 | Sleeping after his headache treatment | Cerebellar hemorrhage, drowsiness blamed on ED diphenhydramine (tertiary) | 4 |
| loc-52 | Confused and bruised, four months in Canada | Dari-speaking newcomer with TTP, history via interpreter, earlier labelled stress (tertiary) | 4 (1 menu) |

20 questions: 18 single, 2 menu. Single key positions 4, 4, 2, 4, 4 (max 22%). Key is the longest option in 4 of 18 singles (22%).

## Key feature coverage

Bank counts before this batch: KF1 48, KF2 64, KF3 24, KF4 14, KF5 25. Extra questions went to KF4, KF5 and KF3.

| KF | Summary | This batch | Questions |
|---|---|---|---|
| 1 | Differential, exclude bleed, infection, toxins | 4 | 48 q4, 49 q4, 50 q4, 52 q3 |
| 2 | Correct reversible causes | 2 | 49 q3 (isotonic bolus for shock), 52 q4 (plasma exchange) |
| 3 | Collateral and prehospital history | 4 | 48 q1, 49 q1, 50 q2, 52 q1 |
| 4 | Do not blame a minor cause | 5 | 48 q2 (worse while sobering), 50 q1 (teething), 51 q1 and q2 (diphenhydramine), 52 q2 (stress) |
| 5 | Document and trend with descriptions and GCS | 5 | 48 q3 (GCS and pupils before induction), 49 q2 (verbal NT in nonverbal adult), 50 q3 (pediatric verbal scale), 51 q3 (central stimulus), 51 q4 (GCS trend) |

New angles not in the bank: custody check logs and worsening while sobering, NT coding for a lifelong nonverbal patient, choosing a central stimulus (sternal rub discouraged), pediatric verbal scale, intussusception as a cause of lethargy, ED-given sedative as false attribution, professional interpreter for collateral, TTP and PLASMIC.

## Sources and verification

- Edlow JA, Rabinstein A, Traub SJ, Wijdicks EFM. Diagnosis of reversible causes of coma. Lancet. 2014. Abstract verified on Europe PMC (PMID 24767707).
- Jones AW. Evidence-based survey of the elimination rates of ethanol from blood. Forensic Sci Int. 2010. Abstract verified on Europe PMC (PMID 20304569): 10 to 20 mg/100 mL/h, 25 to 35 in alcoholics.
- Hawryluk GWJ, Lulla A, and colleagues. Brain Trauma Foundation prehospital TBI guidelines, 3rd edition. Neurosurgery. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10627685/ (GCS before sedatives or paralytics, document pupils, direct transport to CT and neurosurgical care).
- Glasgow Coma Scale FAQ. https://glasgowcomascale.org/faq/ (NT not 1, no total when NT, adult verbal criteria not used in infants).
- Glasgow Coma Scale structured assessment aid. https://www.glasgowcomascale.org/gcs-aid/ (fingertip peripheral, trapezius and supraorbital central, sternal rub strongly discouraged).
- Shah MK, Workeneh B, Taffet GE. Hypernatremia in the geriatric population. Clin Interv Aging. 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4242070/ (isotonic saline essential if unstable, 0.5 mmol/L/h, concentrated urine with intact kidneys).
- Kleizen KJ and colleagues. Neurological symptoms in children with intussusception. Acta Paediatr. 2009. Abstract verified on Europe PMC (17%, lethargy most common).
- Lin-Martore M and colleagues. POCUS for intussusception, meta-analysis. West J Emerg Med. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7390574/ (sensitivity 94.9%, specificity 99.1%).
- Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium. Br J Clin Pharmacol. 2016. Abstract verified on Europe PMC (PMID 26589572).
- Karliner LS and colleagues. Professional interpreters, systematic review. Health Serv Res. 2007. Abstract verified on Europe PMC.
- Bendapudi PK and colleagues. PLASMIC score. Lancet Haematol. 2017. Items and bands checked on the MSD Manuals PLASMIC calculator, which cites the paper.
- Zheng XL and colleagues. ISTH good practice statements for TTP. J Thromb Haemost. 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7880820/ (emergency plasma exchange with corticosteroids, platelet transfusion usually avoided).

Also read but not cited: the AHA/ASA 2022 ICH guideline (Greenberg and colleagues) for cerebellar hemorrhage background, and the ISTH 2020 TTP treatment guideline.

## Uncertain, for reviewers

1. loc-51 q2: the point that antimuscarinic toxicity causes tachycardia is standard, but I verified only the Dawson and Buckley abstract, not the passage.
2. loc-52 q4 is tagged KF2 (treating a reversible cause). TTP is not one of the four examples in the key feature, so the tag is a judgment call. The options leave out rituximab and caplacizumab, which ISTH suggests as add-ons, so that no distractor can be defended.
3. loc-49 q2: the key is NT for the verbal score because the patient has never spoken. A reviewer could argue for V1 with a description, but the GCS guidance says not to use 1 for a component that cannot be assessed.
4. loc-50 q3: the pediatric GCS verbal descriptors are not quoted, only the principle from the GCS FAQ. I could not verify the full Borgialli table.
5. Edlow 2014 is cited for history-taking points (48 q1, 49 q1, 50 q2) and the psychiatric cause point (52 q2), from the abstract only.
6. Test note: the bank-wide test "has no near duplicate stems" can go over its default 5 s timeout when the machine is busy. With `--testTimeout 120000` all 128 tests pass, the duplicate check included.
