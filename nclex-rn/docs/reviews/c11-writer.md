# c11 writer report

Batch c11 holds 5 case studies with 6 items each. That makes 30 items. Every item has reviewed: false and an empty canada field.

## Cases

1. rn-c11-1. Febrile seizure in a 20-month-old girl. Pediatric emergency department.
2. rn-c11-2. Suspected maltreatment of a 5-month-old boy. Emergency department.
3. rn-c11-3. Major depression with suicide risk in a 68-year-old widowed farmer. Inpatient mental health unit.
4. rn-c11-4. Acute mania in a 29-year-old woman with bipolar I disorder who stopped lithium. Inpatient mental health unit.
5. rn-c11-5. Schizophrenia with command hallucinations in a 24-year-old man. Community home visit.

The order matches docs/topic-plan.json.

## Counts

Client Needs. The totals match docs/bank-plan.json.

| Area | Items |
|---|---|
| MOC | 5 |
| SIPC | 4 |
| HPM | 3 |
| PSY | 3 |
| BCC | 3 |
| PPT | 5 |
| RRP | 3 |
| PA | 4 |

Item types.

| Type | Items |
|---|---|
| mc | 6 |
| matrix | 5 |
| highlight | 5 |
| sata | 5 |
| cloze | 4 |
| msn | 4 |
| dnd | 1 |

Dyad scoring appears in rn-c11-1-3, rn-c11-2-5 and rn-c11-4-3. Triad scoring appears in rn-c11-2-3 and rn-c11-5-3. Every case uses at least 4 item types.

CJMM steps. Each case walks recognize, analyze, prioritize, generate, action and evaluate in order. That gives 5 items per step.

Difficulty. Level 2 has 6 items. Level 3 has 16. Level 4 has 8.

## MC key positions

Positions are zero based, out of 4 options.

| Item | Key |
|---|---|
| rn-c11-1-5 | 2 |
| rn-c11-2-6 | 3 |
| rn-c11-3-3 | 1 |
| rn-c11-3-5 | 0 |
| rn-c11-4-6 | 2 |
| rn-c11-5-5 | 1 |

## Sources

- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2023. Textbook, no URL.
- AAP Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of simple febrile seizure. Pediatrics, 2011. https://pubmed.ncbi.nlm.nih.gov/21285335/
- AAP Steering Committee on Quality Improvement. Long-term management of simple febrile seizures. Pediatrics, 2008. https://pubmed.ncbi.nlm.nih.gov/18519501/
- Sullivan JE, Farrar HC. Fever and Antipyretic Use in Children. Pediatrics, 2011. https://pubmed.ncbi.nlm.nih.gov/21357332/
- CDC. First Aid for Seizures, 2024. https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html
- Pierce MC and others. Bruising clinical decision rule. JAMA Network Open, 2021. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2778559
- Christian CW, AAP. The Evaluation of Suspected Child Physical Abuse. Pediatrics, 2015. https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse
- Zubler JM and others. Evidence-Informed Milestones for Developmental Surveillance Tools. Pediatrics, 2022. https://www.cdc.gov/act-early/milestones/4-months.html
- Child Welfare Information Gateway. Mandatory Reporting of Child Abuse and Neglect, 2023. https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/
- Barr RG and others. Crying and shaken baby education. Pediatrics, 2009. https://pubmed.ncbi.nlm.nih.gov/19255028/
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022. https://evolve.elsevier.com/cs/product/9780323697071
- Stanley B, Brown GK. Safety Planning Intervention. Cognitive and Behavioral Practice, 2012. https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630
- The Joint Commission. R3 Report Issue 18, suicide prevention goal, 2019. https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18
- FDA. Ultram (tramadol) prescribing information, 2021. https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020281s049lbl.pdf
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition, 2023. Textbook, no URL.
- DailyMed. Lithium carbonate tablets prescribing information, 2023. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display
- CMS. 42 CFR 482.13(e), restraint or seclusion, 2024. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13
- NCSL. Mental Health Professionals' Duty to Warn, 2022. https://www.ncsl.org/health/mental-health-professionals-duty-to-warn
- FDA. Invega Sustenna (paliperidone palmitate) prescribing information, 2024. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022264s037lbledt.pdf
- NCSBN and ANA. National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf

## For the reviewer

- rn-c11-1-5 asks for an ibuprofen dose by weight. Please recompute the calc block and every wrong choice.
- rn-c11-3-5 turns on serotonin syndrome risk when tramadol is given with an antidepressant. Check the label wording.
- rn-c11-5-4 uses duty to protect. Laws differ by state. The item keeps to the general nursing duty to report the threat to the team.
- rn-c11-5-5 names the deltoid for the first two paliperidone palmitate doses. That comes from the 2024 label.
- rn-c11-4-5 covers seclusion rules from the federal CMS rule. State and facility rules may be stricter.
- For a time, the whole bank near duplicate test failed on rn-c09-4-1 against rn-c13-3-1. Neither item is in c11. It passed on the final run.
- Two source URLs were replaced with sturdier links. Sullivan and Farrar now points to PubMed. The Joint Commission report now points to its current page.

## House style

No em or en dashes. No semicolons. Short sentences with one idea each. No filler.
