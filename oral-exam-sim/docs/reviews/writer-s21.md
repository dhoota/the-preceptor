# Writer report: batch s21, Airway management

File: `src/samps/s21/airway.ts` (array `AIRWAY_S21_SAMPS`), exported from `src/samps/s21/index.ts` as `SAMPS_S21`.

## Count, mix and key positions

- 32 SAMPs, airway-16 to airway-47. All `reviewed: false`.
- 111 questions: 101 `single` and 10 `menu`. No `short` questions.
- 15 SAMPs have 4 questions and 17 have 3.
- Menu questions sit in 10 SAMPs (airway-20, 31, 32, 33, 34, 35, 38, 42, 45, 47). Select counts are 2, 3 and 4. None of them keys "None".
- Single key positions, first to fifth: 19, 21, 21, 20, 20 (largest share 20.8 percent).
- The key is the single longest option in 22 of 101 single questions (22 percent).
- `SAMP_BATCH=s21 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 675 passed. `npx tsc --noEmit -p .` gives no errors in s21.

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1. Move promptly to rescue techniques | 14 |
| 2. Anticipate early intubation | 14 |
| 3. Predict difficulty and prepare | 21 |
| 4. Adapt to trauma, children, comorbid illness | 26 |
| 5. Choose RSI drugs for the condition | 17 |
| 6. Confirm placement with CO2, oximetry, gases | 18 |

One more question (airway-31 q1, epinephrine dose) is tagged to anaphylaxis key feature 3.

## Scenarios (none repeat s02 airway-01 to airway-15)

Penetrating neck stab, blocked new tracheostomy, laryngectomy stoma with an aspirated voice prosthesis, adult supraglottitis, Ludwig angina, infant bronchiolitis with apnea, preterm delivery in a rural ED, child with a tracheal foreign body, myasthenic crisis, Guillain-Barre syndrome, Duchenne muscular dystrophy with pneumonia, massive PE with RV failure, severe aortic stenosis with pulmonary edema, hypoxemic pneumonia (preoxygenation, PreVent, ARDSNet, dead space), methamphetamine agitation (delayed sequence intubation), child anaphylaxis, anterior mediastinal mass, ankylosing spondylitis neck fracture, midface and mandible fractures, edentulous COPD patient, VF arrest airway and capnography, near-hanging laryngeal injury, caustic ingestion, severe croup, high cervical cord injury, rural post-intubation care after a tricyclic overdose, post-tonsillectomy hemorrhage, pediatric head injury, massive hemoptysis, three failed attempts with oxygenation kept, ventilator alarm with tension pneumothorax, cardiac tamponade.

Ages run from a newborn to 84 years. Settings include tertiary, community and rural departments.

## Sources and verification

Verified by search in this session (title, authors, journal and year):

- Law JA et al. CAFG Part 1. Can J Anesth 2021. https://doi.org/10.1007/s12630-021-02007-0 (also checked the three attempt limit, scalpel-bougie-tube FONA and VL for all intubations via https://www.tomwademd.net summary)
- Law JA et al. CAFG Part 2. Can J Anesth 2021. https://doi.org/10.1007/s12630-021-02008-z
- McGrath BA et al. Tracheostomy and laryngectomy airway emergencies. Anaesthesia 2012. https://pubmed.ncbi.nlm.nih.gov/22731935/
- Ahmad I et al. DAS awake tracheal intubation guidelines. Anaesthesia 2020. https://pubmed.ncbi.nlm.nih.gov/32557546/
- Gibbs KW et al. PREOXI. N Engl J Med 2024. https://pubmed.ncbi.nlm.nih.gov/38869091/
- Casey JD et al. PreVent. N Engl J Med 2019. https://pubmed.ncbi.nlm.nih.gov/31216407/
- Weingart SD et al. Delayed sequence intubation. Ann Emerg Med 2015. https://www.annemergmed.com/article/S0196-0644(14)01365-1/abstract
- Kornas RL et al. Physiologically difficult airway, Society for Airway Management. Anesth Analg 2021. https://journals.lww.com/anesthesia-analgesia/abstract/2021/02000/evaluation_and_management_of_the_physiologically.16.aspx
- Blank RS, de Souza DG. Anterior mediastinal mass. Can J Anesth 2011. https://pubmed.ncbi.nlm.nih.gov/21779948/
- Lawn ND et al. Anticipating mechanical ventilation in Guillain-Barre syndrome. Arch Neurol 2001. https://pubmed.ncbi.nlm.nih.gov/11405803/
- Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia. Anesthesiology 2006. https://pubmed.ncbi.nlm.nih.gov/16394702/
- Blichfeldt-Lauridsen L, Hansen BD. Anesthesia and myasthenia gravis. Acta Anaesthesiol Scand 2012. https://onlinelibrary.wiley.com/doi/10.1111/j.1399-6576.2011.02558.x
- Davidson K, Shojaee S. Managing massive hemoptysis. Chest 2020. https://pubmed.ncbi.nlm.nih.gov/31374211/
- Fields RG et al. Pediatric bleeding tonsil. Paediatr Anaesth 2010. https://onlinelibrary.wiley.com/doi/10.1111/j.1460-9592.2010.03426.x
- ACS Committee on Trauma. ATLS 11th edition. 2025. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- AHA. Part 9 Adult ALS. Circulation 2025. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376
- AHA and AAP. Part 8 PALS. Circulation 2025. https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-advanced-life-support
- Weiner GM, Zaichkin J, editors. Textbook of Neonatal Resuscitation, 8th ed. 2021. Tube sizes by weight confirmed from search results only.
- Walters BC et al. Acute cervical spine and spinal cord injuries, 2013 update. Neurosurgery 2013 (MAP 85 to 90 mmHg for 7 days).
- Sperry JL et al. WTA penetrating neck trauma. J Trauma Acute Care Surg 2013. https://www.westerntrauma.org/wp-content/uploads/2020/07/WTACriticalDecisionsPenetratingNeckTrauma.pdf
- ARDS Network. Lower tidal volumes. N Engl J Med 2000 (predicted body weight formula confirmed).
- Ortiz-Alvarez O, Mikrogianakis A. CPS croup statement. Paediatr Child Health 2017. https://pubmed.ncbi.nlm.nih.gov/29532807/
- Cardona V et al. WAO anaphylaxis guidance 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/

Not verified in this session: Brown CA et al. The Walls Manual of Emergency Airway Management, 6th ed, 2023 (already used in s02, cited by 40 questions), and Devlin JW et al. PADIS guidelines, Crit Care Med 2018 (1 question).

## For the reviewers

- Walls carries most textbook claims (predictors of difficult mask ventilation, cuffed tube formulas, pushing a tracheal foreign body distally, croup tube downsizing, succinylcholine in Duchenne, ketamine and propofol hemodynamics, peak and plateau pressure logic). Please check these against the 6th edition.
- airway-19 q4: the DAS ATI maximum topical lidocaine of 9 mg/kg lean body weight, and the infiltration limits used as distractors (4.5 and 7 mg/kg).
- airway-21 q2 and airway-23 q2: cuffed tube sizes (3.0 mm for an infant over 3 kg, 3.5 + age/4 for age 2 and over). airway-23 keys 4.5 mm for a 4-year-old. Some centres would start at 4.0 mm.
- airway-22 q2: NRP tube size 3.0 mm for 1 to 2 kg. Insertion depth was deliberately not tested because I could not verify the 8th edition table.
- airway-24 q3: prolonged rocuronium effect in myasthenia. The source abstract does not state it, but it is standard teaching.
- airway-33 q1: supporting an ankylosing spondylitis neck in its pre-injury flexed posture. I cited ATLS 11 but could not open the chapter.
- airway-37 q3: the DAS ATI "two-point check" (capnography plus seeing tracheal rings or carina).
- airway-40 q2: "atropine and a vasopressor" is keyed as the item to have ready. The MAP target and the recommendation against methylprednisolone come from the 2013 AANS/CNS guideline.
- airway-41 q1: the target pH in tricyclic toxicity (about 7.45 to 7.55) and the estimate 52 x 12 / 20 = 31 mmHg assume constant CO2 production and dead space.
- airway-30 q4: avoiding succinylcholine in methamphetamine toxicity with hyperthermia while potassium and CK are pending is a risk judgement. Please confirm it is not seen as over-cautious.
- airway-45 q1: the stem gives "short neck". It is not offered as an option, so it does not create a third correct answer.
- Several SAMPs have 3 questions. I added a fourth where there was a new teaching point and did not pad the rest.
- A read-only `git log` was run once on tests/samps.test.ts by mistake. No other git command was run.
