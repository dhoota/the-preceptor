# Writer report: batch s34, delirium and agitation

## Count, mix and key positions

- 23 SAMPs, delirium-agitation-16 to delirium-agitation-38, in `src/samps/s34/delirium-agitation.ts`, exported through `src/samps/s34/index.ts` as `SAMPS_S34`.
- 90 questions: 85 single and 5 menu. Twenty-one SAMPs have 4 questions. SAMPs 36 and 37 have 3.
- Menu questions are in SAMPs 20, 24, 27, 32 and 34. That is about one SAMP in five, a little below the one in three the brief suggests.
- Single key positions, first to fifth: 19, 17, 16, 18, 15 (largest share 22 percent).
- The key is the longest option in 17 of 85 singles (20 percent).
- `npx tsc` shows no s34 errors. `SAMP_BATCH=s34 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes all 528 tests.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Delirium versus dementia and psychosis | 13 |
| 2. Wide differential, treat reversible causes | 31 |
| 3. Safety of staff, family, other patients and the patient | 16 |
| 4. Sedate first, then monitor restraint closely | 16 |
| 5. Capacity, substitute decision maker, involuntary care | 14 |

## Scenarios

The s08 SAMPs (01 to 15) were read first, and so were related SAMPs in s22, s32, s49 and s53. Themes already covered there were left out: hip fracture pain, anticholinergic toxicity, alcohol withdrawal, sulfonylurea hypoglycemia, lithium, serotonin toxicity, missed levodopa, post-restraint collapse, HSV encephalitis, hyponatremia, cefepime neurotoxicity, asymptomatic bacteriuria, aphasia mistaken for confusion, NMS and hypernatremia.

This batch covers:
- Hypoactive delirium from pregabalin in kidney disease.
- Clozapine toxicity after the patient stopped smoking.
- A nonverbal autistic teen with a dental abscess.
- Thyroid storm, including the Burch-Wartofsky score.
- Anti-NMDA receptor encephalitis.
- Benzodiazepine withdrawal.
- A stimulant user with a knife.
- Pneumonia delirium in BC, testing the TSDM choice, section 12 emergency care and section 19 duties.
- Hepatic encephalopathy in Nova Scotia, testing the Personal Directives Act.
- A silent STEMI in Quebec, testing Civil Code articles 13 and 15.
- Opioid neurotoxicity.
- Postpartum psychosis, testing a BC Mental Health Act section 22 certificate.
- Akathisia and restraint release.
- An aggressive parent in the resuscitation room.
- Behavioural symptoms of dementia that are not delirium.
- Steroid-induced mania.
- A frail boarder with iatrogenic delirium.
- A rural intoxicated head injury.
- A 4AT score after a long lie with rhabdomyolysis.
- An obstructed infected kidney with a capacity question.
- Cannabis-related agitation in a teen.
- Midazolam-droperidol sedation.
- A capable COPD boarder leaving against advice.

Ages range from 3 to 90. Settings include tertiary, rural and four named provinces.

## Sources (all verified)

- Canadian Coalition for Seniors' Mental Health. Delirium guideline 2014 update. PDF read: https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf
- Inouye SK. Delirium in older persons. NEJM 2006. PDF read for doses and precipitants: https://pubmed.ncbi.nlm.nih.gov/16540616/
- Inouye SK et al. Confusion Assessment Method. Ann Intern Med 1990: https://doi.org/10.7326/0003-4819-113-12-941
- Tieges Z et al. 4AT meta-analysis. Age Ageing 2021: https://pubmed.ncbi.nlm.nih.gov/33951145/
- Bellelli G et al. 4AT validation. Age Ageing 2014: https://pubmed.ncbi.nlm.nih.gov/24590568/
- Appelbaum PS. Competence to consent. NEJM 2007: https://doi.org/10.1056/NEJMcp074045
- AGS Beers Criteria 2023: https://doi.org/10.1111/jgs.18372
- Taylor, Barnes, Young. Maudsley Prescribing Guidelines, 14th edition, 2021. This is a book and was not checked online.
- Gerson R et al. Pediatric BETA. West J Emerg Med 2019. Dose table read: https://pubmed.ncbi.nlm.nih.gov/30881565/
- Richmond JS et al. BETA de-escalation 2012: https://pubmed.ncbi.nlm.nih.gov/22461917/
- Wilson MP et al. BETA psychopharmacology 2012. Full text read: https://pubmed.ncbi.nlm.nih.gov/22461918/
- Knox DK, Holloman GH. BETA seclusion and restraint 2012: https://pubmed.ncbi.nlm.nih.gov/22461919/
- Taylor DM et al. Midazolam-droperidol trial. Ann Emerg Med 2017: https://doi.org/10.1016/j.annemergmed.2016.07.033
- Ross DS et al. ATA hyperthyroidism guideline 2016: https://doi.org/10.1089/thy.2016.0229. The BWPS item scores were checked on MDCalc.
- Graus F et al. Autoimmune encephalitis. Lancet Neurol 2016. Lejuste F et al. Neuroleptic intolerance. Neurol Neuroimmunol Neuroinflamm 2016: https://pubmed.ncbi.nlm.nih.gov/27606355/
- Soyka M. Benzodiazepine dependence. NEJM 2017: https://doi.org/10.1056/NEJMra1611832
- Vilstrup H et al. AASLD/EASL hepatic encephalopathy 2014. PDF read: https://doi.org/10.1002/hep.27210
- Gallagher R. Opioid-induced neurotoxicity. Can Fam Physician 2007: https://pmc.ncbi.nlm.nih.gov/articles/PMC1949075/
- Bergink V et al. Postpartum psychosis. Am J Psychiatry 2016: https://doi.org/10.1176/appi.ajp.2016.16040454
- Warrington TP, Bostwick JM. Corticosteroid psychiatric effects. Mayo Clin Proc 2006: https://doi.org/10.4065/81.10.1361
- Stiell IG et al. Canadian CT Head Rule. Lancet 2001.
- Bosch X et al. Rhabdomyolysis. NEJM 2009.
- Türk C et al. EAU urolithiasis guidelines. Eur Urol 2016.
- CMPA. Consent: a guide for Canadian physicians. 4th edition, revised 2024: https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians
- BC Health Care (Consent) and Care Facility (Admission) Act, sections 3, 7, 12, 12.1, 16 and 19. Text read: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96181_01
- BC Mental Health Act, sections 1, 22 and 28. Text read: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01
- Nova Scotia Personal Directives Act, SNS 2008 c 8, the section 14 ranking. Checked through summaries of the Act.
- Civil Code of Québec, articles 13, 15 and 16.

## For the reviewers

- 16 q2: the pregabalin ceiling of 150 mg a day for this level of kidney function comes from the product monograph. The cited Beers source says only to reduce the dose.
- 17: the size and timing of the rise in clozapine level, and the rule to re-titrate after 48 hours off, rest on Maudsley. The online text was not checked.
- 20 q4: Lejuste's study was in adults, and the patient is 16.
- 21 q2: lorazepam 1 mg IV as the first dose in a 72-year-old is a judgment call.
- 24 q1: benzodiazepines appear in the AASLD differential table for hepatic encephalopathy, not in its precipitant table. The question asks about "contributors" for that reason.
- 25 q3: the claim that primary PCI is not "unusual" care under article 13 is my own reading of the article.
- 28 q3 and q4: the akathisia treatment, low dose propranolol, is cited to Maudsley. The book text was not checked online.
- 30 q3: the risperidone starting dose of 0.25 mg twice daily comes from the product monograph and practice, not from Beers.
- 33 q2: the CMPA emergency principle is applied to an intoxicated patient trying to leave. The guide does not discuss that scenario directly.
- 34 q1: 4AT attention scoring follows the 4AT form: 7 or more months correct scores 0. The case avoids the grey zone, since he gives 8 months correctly.
- 35 q4 and 36 q3: the doses are within the published ranges, but the choice of agent is a judgment.
- 36 q3: Gerson favours lorazepam for intoxication with an unknown substance, so the stem says the vape contents are uncertain.
- 37 q1: Taylor did not study lorazepam alone or haloperidol alone. The explanation's comparison with those arms is general knowledge.
- 37 q2: the call for end-tidal CO2 monitoring is standard practice and is not stated in Knox.
- Only 5 SAMPs have a menu question. A reviewer may want more.
