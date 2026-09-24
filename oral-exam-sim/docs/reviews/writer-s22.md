# Writer report, batch s22: Analgesia/sedation

File: `src/samps/s22/analgesia-sedation.ts`, exported as `ANALGESIA_SEDATION_S22_SAMPS` and wired into `SAMPS_S22` in `src/samps/s22/index.ts`.

## Count and mix

- 32 SAMPs, ids analgesia-sedation-16 to analgesia-sedation-47. All `reviewed: false`.
- 112 questions. 101 `single`, 11 `menu`. No `short`.
- 16 SAMPs have 4 questions and 16 have 3.
- 10 SAMPs carry a menu question (19, 23, 24, 25, 28, 30, 32, 41, 45, 47). SAMP 41 has two, one of them a "None" menu.
- Settings: rural (21, 34), community (22), tertiary for the rest. Ages run from a 7-week-old infant to an 86-year-old, with 6 children or teens (17, 25, 26, 31, 42, 44, 46).

## Key positions (single questions, first to fifth)

23, 19, 23, 18, 18. The highest position share is 23 percent. The key is the single longest option in 1 of 101 singles (SAMP 32 q1, "ASA III" in an ASA I to V list).

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1. Structured pain assessment | 17 |
| 2. Safest effective technique or agent | 34 |
| 3. Adequate, titrated strong analgesia | 20 |
| 4. Analgesia given with sedation | 8 |
| 5. Pre-sedation risk assessment | 13 |
| 6. Monitoring, adverse events, discharge | 20 |

## New ground versus the 15 s02 SAMPs

The s02 set covered ankle fracture with morphine intolerance, renal colic, dementia hip fracture, lidocaine toxicity, a child forearm fracture, propofol for a shoulder, a frail wrist, toddler ketamine with laryngospasm, sickle cell crisis, buprenorphine, burns, oversedation with naloxone, a prosthetic hip, appendicitis and rib blocks. This batch adds opioid tolerance in cancer, FLACC and a fascia iliaca block in a toddler, pregnancy and NSAIDs, schizophrenia and ketamine, methoxyflurane, dental blocks, an interpreter and vital signs, low back pain, dialysis, an infant lumbar puncture, adolescent ketamine emesis, aortic stenosis and etomidate, hemothorax, analgesia-first ventilation, IM ketamine for agitation, intranasal midazolam, obesity and OSA with ketofol, flumazenil in benzodiazepine dependence, frostbite, epinephrine in finger blocks, compartment syndrome, pancreatitis titration, a hypotensive femur, a chronic pain care plan, elderly propofol dosing, a snoring child, adult ketamine recovery agitation, intranasal ketamine, gout, nitrous oxide with a pneumothorax, and methadone.

## Sources, with verification URLs

- Tintinalli, 9th ed, 2020. Textbook already cited in the bank. Not re-fetched.
- Roberts and Hedges, 7th ed, 2019. https://shop.elsevier.com/books/roberts-and-hedges-clinical-procedures-in-emergency-medicine-and-acute-care/roberts/978-0-323-35478-3
- Schwenk 2018, ketamine consensus. https://pubmed.ncbi.nlm.nih.gov/29870457/
- Merkel 1997, FLACC. https://pubmed.ncbi.nlm.nih.gov/9220806/
- Black 2013, Cochrane femoral blocks in children. https://pubmed.ncbi.nlm.nih.gov/24343768/
- Health Canada 2020, NSAIDs beyond 20 weeks. https://recalls-rappels.canada.ca/en/alert-recall/use-non-steroidal-anti-inflammatory-drugs-nsaids-beyond-20-weeks-pregnancy-and-risk
- Health Quality Ontario 2018, opioid prescribing for acute pain. https://www.hqontario.ca/evidence-to-improve-care/quality-standards/view-all-quality-standards/opioid-prescribing-for-acute-pain
- Green 2011, ketamine guideline. https://www.annemergmed.com/article/s0196-0644(10)01827-5/fulltext
- Miner and Burton 2007, propofol advisory. https://www.annemergmed.com/article/S0196-0644(06)02686-2/abstract
- PENTHROX Canadian product monograph, revised 2024. https://pdf.hres.ca/dpd_pm/00075149.PDF (read in full: indication, contraindications, 6 mL a day and 15 mL a week limits)
- Chang 2017, JAMA extremity pain. https://einstein.elsevierpure.com/en/publications/effect-of-a-single-dose-of-oral-opioid-and-nonopioid-analgesics-o/
- Moore 2018, dental pain overview. https://pubmed.ncbi.nlm.nih.gov/29599019/
- Marco 2006, pain scores and vital signs. https://onlinelibrary.wiley.com/doi/10.1197/j.aem.2006.04.015
- Chang 2013, hydromorphone in older adults. https://pubmed.ncbi.nlm.nih.gov/23846749/
- Chang 2016, "Do you want more pain medication?". https://www.sciencedirect.com/science/article/abs/pii/S0196064415003868
- Friedman 2015, low back pain. https://pubmed.ncbi.nlm.nih.gov/26501533/
- CPS 2019, procedural pain in children. https://cps.ca/en/documents/position/managing-pain-and-distress
- CPS 2022, pain assessment in children. https://cps.ca/en/documents/position/pain-assessment-and-management
- ASA physical status classification, last amended 2020. https://www.ncbi.nlm.nih.gov/sites/books/NBK441940/ (secondary description. The ASA page itself was not fetched.)
- Godwin 2014, ACEP procedural sedation policy. https://pubmed.ncbi.nlm.nih.gov/24438649/
- Miner 2007, etomidate versus propofol. https://pubmed.ncbi.nlm.nih.gov/16997421/
- ASA 2018, moderate procedural sedation. https://pubmed.ncbi.nlm.nih.gov/29334501/
- Motov 2015, sub-dissociative ketamine. https://www.annemergmed.com/article/S0196-0644(15)00191-2/abstract
- Devlin 2018, PADIS. https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-prevention-and-management-of-pa
- Cole 2016, ketamine versus haloperidol for agitation. https://pubmed.ncbi.nlm.nih.gov/27102743/
- Coté 2019, AAP pediatric sedation. https://publications.aap.org/pediatrics/article/143/6/e20191000/37173/
- Andolfatto 2012, ketofol. https://pubmed.ncbi.nlm.nih.gov/22401952/
- McIntosh 2024, WMS frostbite. https://pubmed.ncbi.nlm.nih.gov/38577729/
- Lalonde 2005, epinephrine in fingers. https://pubmed.ncbi.nlm.nih.gov/16182068/
- Busse 2017, opioids for chronic noncancer pain. https://pubmed.ncbi.nlm.nih.gov/28483845/
- Frey 2019, PRIME trial. https://pubmed.ncbi.nlm.nih.gov/30592476/
- FitzGerald 2020, ACR gout. https://pubmed.ncbi.nlm.nih.gov/32391934/
- Handoll 2002, anaesthesia for distal radius fracture. https://pubmed.ncbi.nlm.nih.gov/12137688/
- Sener 2011, ketamine with midazolam. https://pubmed.ncbi.nlm.nih.gov/20970888/

The session's web search budget ran out partway. The later citations were checked by title and abstract through the Europe PMC API.

## For the reviewers

1. SAMP 34 (frostbite). I could not open the full WMS 2024 text. The advice on parenteral opioids during rewarming and on ibuprofen for analgesia and tissue protection comes from my knowledge of the 2019 and 2024 versions. The questions give no ibuprofen dose for this reason.
2. SAMPs 22 q3 and 24 q2. I recalled the 0.5 mg then 0.5 mg hydromorphone schedule in Chang 2013 from the abstract but did not see the full text.
3. Green 2011 details from memory: schizophrenia as a contraindication even when stable (19 q1), asthma a relative contraindication only when active (26 q2), anticholinergics not routine (26 q2), ondansetron (26 q4), treating recovery reactions with midazolam (43 q4).
4. 18 q3. The Ontario Health page for the HQO standard returned a 404. The 3-day and 7-day figures were confirmed in search summaries. The point that controlled-release opioids should not be started for acute pain comes from memory.
5. ASA class examples (26 q1 mild asthma as II, 32 q1 BMI of 40 or more as III) come from the 2020 ASA examples via a secondary source.
6. Tintinalli is the cited source for several standard claims: propofol in older adults, opioids in dialysis, compartment syndrome, the post-sedation discharge advice in 19 q4 and 41 q4, and airway rescue in 32 q4 and 33. A reviewer may want more specific sources for some of these.
7. 17 q2 rests on one small, low-quality trial (Black 2013) for a fascia iliaca block over systemic opioid in a toddler. The distractors leave out IV morphine and intranasal fentanyl on purpose, so that no second answer is defensible.
8. 27 q2. Etomidate plus fentanyl is keyed for severe aortic stenosis. The options offer no regional or intra-articular ankle block, since that would also be defensible.
9. 45 q1. The dose of prednisone 35 mg for 5 days follows common trial dosing. ACR 2020 recommends glucocorticoids but does not set that exact dose.
10. 41 q1 (the None menu) relies on ASA 2018: pre-procedure tests are guided by the patient's condition, not ordered routinely.
11. When I ran the full suite, failures appeared only in other agents' batches (s46, s51, s53). s22 passes `tsc` and `SAMP_BATCH=s22` on both test files (679 tests).
