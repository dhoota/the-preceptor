# Writer report: batch s29, Common fractures/MSK

File: `src/samps/s29/msk.ts` (export `MSK_S29`), wired into `src/samps/s29/index.ts` as `SAMPS_S29`.

## Count and mix

- 23 SAMPs, msk-16 to msk-38. All `reviewed: false`.
- 91 questions: 82 single and 9 menu. 22 SAMPs have 4 questions and msk-32 has 3.
- Menu questions sit in 9 SAMPs: msk-17, 24, 29, 31, 33, 34, 35, 36 and 37.
- Key positions across the 82 singles, first to fifth: 16, 16, 16, 17, 17. The highest share is 20.7%.
- The key is the single longest option in 23 of 82 singles (28.0%).
- Checks: `tsc` shows no s29 errors. `SAMP_BATCH=s29 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 532 of 532.

## Scenarios and spread

Before writing I searched the whole bank so these cases would not repeat existing ones. Cases already covered were left out: calcaneus with spine, the Ottawa ankle soccer case, posterior shoulder dislocation after a seizure, the nightstick fracture, SCFE, occult scaphoid, occult hip, trimalleolar reduction, fight bite, tibial compartment syndrome, open tibia, supracondylar, infant femur from abuse, occult radial head, knee dislocation. Also left out were the MSK sedation and analgesia cases in s02 and s22, the dashboard hip in s45, and high pressure injection in s13.

New scenarios: Maisonneuve, Lisfranc, anterior shoulder dislocation in an older woman (nerve and cuff), Monteggia with PIN palsy, toddler's fracture that later shows a hip picture, pulled elbow, perilunate dislocation, skier's thumb with Stener lesion, splenic injury presenting as shoulder pain (rural), atypical femoral fracture, humeral shaft with radial nerve palsy, open tibial plateau fracture under an EMS dressing, Achilles rupture after a fluoroquinolone, posterior sternoclavicular dislocation, lateral talar process fracture, buckle fracture, radiograph negative pediatric ankle, medial epicondyle with elbow dislocation, open distal radius with a pulseless hand, compartment syndrome under a cast, Jones fracture, elder abuse with a humeral fracture, femoral neck stress fracture with REDs.

Ages run from 22 months to 84 years. There are 8 pediatric or adolescent cases and 4 cases in adults over 70. One case is set in a rural hospital.

## Key feature coverage (questions per key feature)

- KF1, companion injuries: 13
- KF2, pattern suggests cause: 12
- KF3, referred pain: 6
- KF4, occult injury with normal first films: 12
- KF5, neurovascular documentation and reduction before films: 8
- KF6, subtle open fractures: 4 (msk-27 q1 and q3, msk-34 q1 and q2)
- KF7, urgent surgical consult: 13
- KF8, splinting, analgesia and follow-up: 23

## Sources (all checked on PubMed through E-utilities, except the textbooks and the Canadian Immunization Guide)

- Stiell 1993, JAMA, Ottawa ankle and foot refinement: https://pubmed.ncbi.nlm.nih.gov/8433468/
- Stiell 1994, JAMA, Ottawa ankle implementation: https://pubmed.ncbi.nlm.nih.gov/8114236/
- Stiell 1996, JAMA, Ottawa knee rule: https://pubmed.ncbi.nlm.nih.gov/8594242/
- Ross 1996, J Orthop Trauma, plantar ecchymosis: https://pubmed.ncbi.nlm.nih.gov/8932671/
- Sherief 2007, Injury, missed Lisfranc: https://pubmed.ncbi.nlm.nih.gov/17214988/
- Emond 2018, J Emerg Med, Fresno-Quebec rule: https://pubmed.ncbi.nlm.nih.gov/29861274/
- Robinson 2012, JBJS Am, injuries with anterior dislocation: https://pubmed.ncbi.nlm.nih.gov/22218378/
- Ring, Jupiter, Waters 1998, JAAOS, Monteggia: https://pubmed.ncbi.nlm.nih.gov/9682084/
- TREKK pediatric fractures bottom line recommendations v4.0, 2025 (URL as used in s06)
- Cheong 2025, Bone Joint J, toddler's fracture: https://pubmed.ncbi.nlm.nih.gov/40588256/
- Kocher 1999, JBJS Am, septic hip: https://pubmed.ncbi.nlm.nih.gov/10608376/
- Christian 2015, Pediatrics, AAP child abuse (already in the bank)
- Krul 2017, Cochrane, pulled elbow: https://pubmed.ncbi.nlm.nih.gov/28753234/
- Herzberg 1993, J Hand Surg Am, perilunate: https://pubmed.ncbi.nlm.nih.gov/8228045/
- Beutel 2019, Bull Hosp Jt Dis, Stener lesion: https://pubmed.ncbi.nlm.nih.gov/30865860/
- Dean 2024, J Hand Surg Eur, BSSH thumb UCL guideline: https://pubmed.ncbi.nlm.nih.gov/39315553/
- ATLS 10th ed, 2018 (already in the bank)
- Stassen 2012, EAST splenic injury: https://pubmed.ncbi.nlm.nih.gov/23114484/
- Shane 2014, ASBMR atypical femoral fractures: https://pubmed.ncbi.nlm.nih.gov/23712442/
- Shao 2005, JBJS Br, radial nerve palsy: https://pubmed.ncbi.nlm.nih.gov/16326879/
- Hoff 2011, EAST open fracture antibiotics: https://pubmed.ncbi.nlm.nih.gov/21610369/
- Maffulli 1998, Am J Sports Med, Achilles tests: https://pubmed.ncbi.nlm.nih.gov/9548122/
- Willits 2010, JBJS Am, Achilles trial: https://pubmed.ncbi.nlm.nih.gov/21037028/
- van der Linden 2003, Arch Intern Med, quinolones and Achilles rupture: https://pubmed.ncbi.nlm.nih.gov/12912715/
- Groh and Wirth 2011, JAAOS, sternoclavicular injuries: https://pubmed.ncbi.nlm.nih.gov/21205762/
- von Knoch 2007, JBJS Br, lateral talar process: https://pubmed.ncbi.nlm.nih.gov/17613502/
- Plint 2006, Pediatrics, buckle fracture splint: https://pubmed.ncbi.nlm.nih.gov/16510648/
- Perry 2022, Lancet, FORCE trial: https://pubmed.ncbi.nlm.nih.gov/35780790/
- Boutis 2016, JAMA Pediatr, radiograph negative ankle: https://pubmed.ncbi.nlm.nih.gov/26747077/
- Boutis 2007, Pediatrics, brace versus cast: https://pubmed.ncbi.nlm.nih.gov/17545357/
- Gottschalk 2012, JAAOS, medial epicondyle: https://pubmed.ncbi.nlm.nih.gov/22474092/
- Public Health Agency of Canada, Canadian Immunization Guide, tetanus toxoid, updated 2026 (wording matches the existing bank citation)
- von Keudell 2015, Lancet, compartment syndrome: https://pubmed.ncbi.nlm.nih.gov/26460664/
- Zwitser 2010, Injury, fifth metatarsal: https://pubmed.ncbi.nlm.nih.gov/19570536/
- Lachs and Pillemer 2015, NEJM, elder abuse: https://pubmed.ncbi.nlm.nih.gov/26559573/
- Robertson and Wood 2017, Sports Med Int Open, femoral neck stress fractures: https://pubmed.ncbi.nlm.nih.gov/30539087/
- Mountjoy 2023, Br J Sports Med, IOC REDs consensus: https://pubmed.ncbi.nlm.nih.gov/37752011/
- Rosen's Emergency Medicine, 10th ed, 2023 (textbook, not checked page by page)

## Points for reviewers

- msk-18 q2: the Fresno-Quebec rule comes from a derivation study, and the abstract says prospective validation is still needed. The key (films before reduction in a 71-year-old with a first dislocation from a fall) matches the Quebec rule and usual practice.
- msk-19 q1: the intranasal fentanyl dose of 1.5 mcg/kg and the 100 mcg maximum come from TREKK and general practice. I did not open the TREKK PDF this session.
- msk-21 q3 and q4: the X-ray triggers for pulled elbow (swelling or bruising) and the advice on recurrence are cited to Rosen, not to a trial.
- msk-24 q3: this is a KF7 question set in the rural trauma setting. It borders on multiple trauma. The teaching point is referred shoulder pain.
- msk-25 q4: calcitonin appears as a weak distractor. Please check it is not seen as a strawman.
- msk-27 q3 and msk-34 q2 both key cefazolin 2 g IV for a low grade open fracture. msk-34 adds the tetanus decision, so the two questions test different things.
- msk-29 q1: this relies on the medial clavicular physis usually being closed by age 26. Groh and Wirth advise MRI to look for a physeal injury under about 23.
- msk-31 q1 and msk-19 q1: the statement that codeine and tramadol are not recommended under 12 reflects Health Canada restrictions. It is cited to TREKK.
- msk-32 has only 3 questions. I left out an imaging decision question, because the Ottawa ankle rule and the low risk ankle rule give different answers for this child.
- msk-35 q1: the advice to keep the limb at heart level, not high, comes from general compartment syndrome teaching in von Keudell.
- msk-37 q4: the stem names no province, so reporting duties are described as varying by province.
- KF8 is the most tested key feature (23 questions). KF6 has 4, above the minimum of 3.
