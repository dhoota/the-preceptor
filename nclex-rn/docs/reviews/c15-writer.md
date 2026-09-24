# Batch c15 writer report

Case batch. Five case studies of six items each. 30 items in total. All items are `reviewed: false` and `version: 1`. `canada` is an empty string on every item.

Files: `src/bank/c15/helpers.ts`, `case1.ts` to `case5.ts` and `index.ts`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Cases

The cases follow the topic plan in order.

| Case | Title | Setting | Client | Topic plan entry |
|---|---|---|---|---|
| rn-c15-1 | Weakness That Keeps Climbing | Medical unit | Man, 29 | Guillain-Barre syndrome with rising weakness |
| rn-c15-2 | Drooping Eyelids and a Weak Voice | Emergency department | Woman, 63 | Myasthenic crisis |
| rn-c15-3 | Two Falls in One Week | Long-term care | Man, 81 | Parkinson disease with falls and missed doses |
| rn-c15-4 | Day 3 at the Infusion Clinic | Outpatient infusion clinic | Woman, 34 | Multiple sclerosis relapse on high-dose steroids |
| rn-c15-5 | Convulsions That Do Not Stop | Emergency department | Man, 47 | Status epilepticus in an adult |

## Counts

### Client Needs (matches the bank plan)

| Area | Planned | Written |
|---|---|---|
| MOC | 6 | 6 |
| SIPC | 4 | 4 |
| HPM | 3 | 3 |
| PSY | 2 | 2 |
| BCC | 2 | 2 |
| PPT | 5 | 5 |
| RRP | 4 | 4 |
| PA | 4 | 4 |

### Item type

| Type | Count |
|---|---|
| highlight | 5 |
| matrix (single) | 5 |
| sata | 5 |
| cloze | 4 (2 dyad, 2 triad) |
| dnd | 4 (zero-one) |
| msn | 4 |
| mc | 3 |

Every case uses at least 5 item types.

### CJMM step

Each case walks the six steps in order. That gives 5 items per step: recognize, analyze, prioritize, generate, action and evaluate.

### Difficulty

| Level | Count |
|---|---|
| 2 | 12 |
| 3 | 16 |
| 4 | 2 |

## MC key positions

There are 3 MC items. rn-c15-2-4 is keyed C. rn-c15-4-6 is keyed D. rn-c15-5-5 is keyed C. Options in rn-c15-5-5 run low to high by dose.

## Calculations

- rn-c15-1-3: 1400 mL / 80 kg = 17.5 mL/kg.
- rn-c15-2-3: 1100 mL / 62 kg = 17.7 mL/kg.
- rn-c15-5-5: 60 mg/kg * 70 kg = 4200 mg. This is below the 4500 mg single-dose maximum.

## Sources and verification

The journal citations were checked against PubMed records through the NCBI E-utilities API. The PubMed web pages blocked the fetch tool.

- Leonhard SE et al. Diagnosis and management of Guillain-Barre syndrome in ten steps. Nature Reviews Neurology 15(11):671. 2019. PMID 31541214. https://www.nature.com/articles/s41582-019-0250-9
- Lawn ND et al. Anticipating mechanical ventilation in Guillain-Barre syndrome. Archives of Neurology 58(6):893. 2001. PMID 11405803. https://pubmed.ncbi.nlm.nih.gov/11405803/
- Wendell LC, Levine JM. Myasthenic crisis. The Neurohospitalist 1(1):16. 2011. PMID 23983833. https://doi.org/10.1177/1941875210382918
- Narayanaswami P et al. International Consensus Guidance for Management of Myasthenia Gravis: 2020 Update. Neurology 96(3):114. 2021. PMID 33144515. https://doi.org/10.1212/WNL.0000000000011124
- Armstrong MJ, Okun MS. Diagnosis and Treatment of Parkinson Disease: A Review. JAMA 323(6):548. 2020. PMID 32044947. https://pubmed.ncbi.nlm.nih.gov/32044947/
- American Geriatrics Society Beers Criteria Update Expert Panel. 2023 AGS Beers Criteria. Journal of the American Geriatrics Society 71(7):2052. 2023. PMID 37139824. https://pubmed.ncbi.nlm.nih.gov/37139824/
- Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults. Epilepsy Currents 16(1):48. 2016. PMID 26900382. https://journals.sagepub.com/doi/10.5698/1535-7597-16.1.48
- Kapur J et al. Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus. New England Journal of Medicine 381(22):2103. 2019. PMID 31774955. https://www.nejm.org/doi/full/10.1056/NEJMoa1905795
- National Institute for Health and Care Excellence. Multiple sclerosis in adults: management, NG220. 2022. https://www.nice.org.uk/guidance/ng220/chapter/Recommendations. Checked by web search: no vitamin D solely to treat MS, and no supply of steroids to self-treat at home.
- Parkinson's Foundation. Hospital Care Recommendations. 2023. https://www.parkinson.org/sites/default/files/documents/hospital-care-recommendations-april2023.pdf. Checked by web search: medications within 15 minutes of the home schedule.
- Bayer and US FDA. Cipro prescribing information. 2024. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/019537s095%2C020780s050lbl.pdf. Checked by web search: boxed warning for worsening myasthenia gravis, and advice to avoid use in known disease.
- NCSBN and ANA. National Guidelines for Nursing Delegation. 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Institute for Healthcare Improvement. SBAR Tool. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition. Wolters Kluwer. 2022. ISBN 9781975161033.

## For the reviewer

- rn-c15-4: The case uses IV methylprednisolone 1000 mg daily for 3 days. This is common US practice. NICE NG220 prefers oral methylprednisolone 0.5 g daily for 5 days first. It keeps IV 1 g daily for 3 to 5 days for clients who cannot take oral or whose oral treatment failed. The Canada note pass may want to mention this.
- rn-c15-4-1, 4-2 and 4-4: Steroid mood change, hyperglycemia, sleep and diet teaching rest mainly on Brunner and on NICE. NICE does not list each side effect in detail.
- rn-c15-5-3: The priority order puts the airway before stopping the seizure. In practice both happen at once. The item treats airway and oxygen as the first problem.
- rn-c15-5-5: The 1400 mg distractor matches 20 mg/kg. Its why says only "a lower dose per kilogram". That avoids adding a number that is not in the stem.
- rn-c15-1-5: The practical nurse gets the scheduled enoxaparin injection. Scope differs by state and by facility policy.
- rn-c15-2-6: The 30 minute gap between pyridostigmine and lunch is keyed safe. The ref says 30 to 60 minutes before meals. This rests on Brunner.
- The IHI SBAR tool page carries no single edition year. Year 2023 follows the date of the PDF on the IHI site.
- Test status: all 44 tests in `BATCH=c15 npx vitest run tests/bank.test.ts` pass. The type check shows no errors in `bank/c15`.
