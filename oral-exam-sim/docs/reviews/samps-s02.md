# SAMP review, batch s02 (airway, analgesia-sedation)

Adversarial review of `src/samps/s02/`. Every dose and number was recomputed. Every key was read against the scoring engine, including its negation rule. All SAMPs stay `reviewed: false`. Ids are unchanged.

## Airway

| SAMP | Verdict |
| --- | --- |
| airway-01 Unresponsive man after drinking | Corrected |
| airway-02 Bedroom fire | Corrected |
| airway-03 Swollen lips and tongue | Accurate |
| airway-04 Highway rollover | Corrected |
| airway-05 Toddler still seizing | Corrected |
| airway-06 Obesity with pneumonia | Accurate |
| airway-07 Septic shock | Corrected |
| airway-08 Neck swelling after thyroid surgery | Corrected |
| airway-09 Salicylate overdose | Accurate |
| airway-10 Intubated asthmatic | Corrected |
| airway-11 TBI with transfer | Corrected |
| airway-12 Hyperkalemia | Accurate |
| airway-13 Tube confirmation | Corrected |
| airway-14 Eclampsia | Accurate |
| airway-15 Upper GI bleed | Corrected |

### Changes

- airway-01 q3. Before: "Another intubation attempt" flagged dangerous. After: kept as unacceptable but not dangerous, with phrases "another intubation" and "fourth attempt" added. Reason: CAFG 2021 Part 1 allows a single final attempt with a technique not yet tried, done while eFONA is prepared. A dangerous flag would zero a guideline based answer. The explanation now says this, and notes that video laryngoscopy had already failed twice. Added a key item for full neuromuscular blockade (DAS 2015 step).
- airway-02 q4. Cyanide lactate threshold changed from "about 8" to "about 8 to 10 mmol/L".
- airway-04 q1. Before: the "avoid head tilt" item matched only "head tilt", so the negation rule rejected the correct answer "avoid head tilt". After: negation is inside the phrases ("avoid head tilt", "neutral position" and others).
- airway-05 q3. Explanation said the pediatric succinylcholine dose is "about 2 mg/kg". After: 1.5 to 2 mg/kg for a toddler, 2 mg/kg for infants. Rocuronium 14 mg for 12 kg is correct. Tube 4.0 cuffed at 12 cm is correct ((2/4)+3.5 = 4.0, depth 3 x 4.0 = 12 cm, 13 cm also accepted).
- airway-05 q4. Unacceptable phrase "decompress" rejected a good answer such as "pull back the tube, then consider decompression". Narrowed to named procedures.
- airway-07 q2. The "higher paralytic dose" item matched any mention of rocuronium, including an underdose. Now needs 1.2 or 1.6, or wording about a higher dose.
- airway-07 q3. The "reduce sedation" item matched "sedation", so "increase sedation" scored. Fixed.
- airway-08 q2. Mapped to airway KF4 (special contexts) instead of KF1. Bedside hematoma evacuation is not a failed first attempt. KF1 stays covered by airway-01 and airway-15.
- airway-10 q2. The "low PEEP" item matched "peep", so "high PEEP" scored. Fixed.
- airway-10 q3. Before: dangerous phrases "increase rate" and "increase respiratory rate". With word bag matching, the correct answer "reduce the rate and increase expiratory time" contains both words and would score zero with no override. After: dangerous only for "hyperventilate", "faster rate", "blow off CO2" and similar. "Increase rate" stays unacceptable without the dangerous flag, so the candidate can override it. The flag is justified: a higher rate worsens dynamic hyperinflation and can cause PEA.
- airway-11 q1. SpO2 target text changed from "94% or higher" to "above 90% and ideally 94% or higher". BTF uses 90% as the floor. SBP 100 or higher for age 58 matches BTF 4th edition (ages 50 to 69).
- airway-13 q4. The equipment item matched the word "line", which is too broad. Narrowed.
- airway-15 q2. The "continue" item matched any line with "continue", including "continue laryngoscopy". Narrowed. Added a key item for one further attempt with a different technique by a more experienced operator, which CAFG lists as an exit option. The unacceptable item now targets repeated attempts by the same operator.
- Citations. NAP4 now names Part 1. The DAS thyroid hematoma guideline title was wrong and is now the published title.

### Writer's flags checked (airway)

- eFONA. CAFG 2021 Part 1 recommends scalpel-bougie-tube with a 6.0 mm cuffed tube in adults. Confirmed.
- Attempts. CAFG 2021 limits attempts to three or fewer before declaring failure. The "fourth attempt by a more experienced clinician" comes from DAS 2015, not CAFG. After failure with SGA oxygenation, CAFG lists: wake the patient, temporize with the SGA, one more attempt with a different technique, or FONA. Keys now reflect this.
- Second generation SGA after failure. Correct.
- Ketamine 0.5 to 1 mg/kg in shock and rocuronium 1.2 mg/kg (1.2 to 1.6) are correct. Ketamine 1.5 mg/kg for asthma is correct.
- Succinylcholine is safe in the first 24 h after a burn and is not contraindicated in acute head injury. Correct.
- Thyroid hematoma bedside opening (SCOOP) matches the 2022 DAS multidisciplinary guideline.
- Pregnancy: a smaller tube and magnesium potentiating nondepolarizing block are correct.
- Etomidate is accepted in airway-07 q2 and is never the keyed answer. Confirmed.
- Dangerous flag on leaving an esophageal tube in place (airway-13 q3). Justified and kept.

## Analgesia and sedation

| SAMP | Verdict |
| --- | --- |
| analgesia-sedation-01 Ankle fracture | Accurate |
| analgesia-sedation-02 Renal colic | Accurate |
| analgesia-sedation-03 Hip fracture with dementia | Accurate |
| analgesia-sedation-04 Lidocaine toxicity | Corrected |
| analgesia-sedation-05 Pediatric forearm fracture | Corrected |
| analgesia-sedation-06 Shoulder dislocation sedation | Corrected (source) |
| analgesia-sedation-07 Bier block | Needs physician attention |
| analgesia-sedation-08 Ketamine for a chin laceration | Corrected |
| analgesia-sedation-09 Sickle cell crisis | Accurate |
| analgesia-sedation-10 Buprenorphine and tibial fracture | Accurate |
| analgesia-sedation-11 Hot oil burn | Accurate |
| analgesia-sedation-12 Opioid oversedation | Corrected |
| analgesia-sedation-13 Hip prosthesis dislocation | Corrected |
| analgesia-sedation-14 Appendicitis pain | Accurate |
| analgesia-sedation-15 Rib fractures on apixaban | Corrected, needs physician attention |

### Changes

- Source "caep-psa". Before: "CAEP. Guidance on procedural sedation and analgesia in the ED", with no author or year. No such current CAEP document was found. After: the real CAEP-initiated consensus guideline, Innes G, Murphy M, Nijssen-Jordan C, Ducharme J, Drummond A. Procedural sedation and analgesia in the emergency department. Canadian consensus guidelines. J Emerg Med. 1999. It is dated. Questions about propofol with analgesia (06 q2, 13 q3) now cite ACEP 2014.
- analgesia-sedation-04 q1. Also accepts 5 mg/kg for plain lidocaine, which some references use. 4.5 mg/kg (max 300 mg, 30 mL of 1%) and 7 mg/kg with epinephrine (490 mg for 70 kg) are correct. The 35 mL of 2% in the update is 700 mg, 10 mg/kg. Correct.
- analgesia-sedation-04 q2. Before: dangerous phrases "beta blocker" and "calcium channel blocker". The correct line "avoid beta blockers and calcium channel blockers" would trip the second phrase, because it sits more than 3 words after "avoid", and the question would score zero. After: dangerous only for giving one ("give beta blocker") or naming a drug (metoprolol, esmolol, labetalol, propranolol, diltiazem, verapamil). The "stop injecting" item moved to the end of the key so "stop the seizure with midazolam" scores as the benzodiazepine item.
- analgesia-sedation-04 q3. Lipid regimen now cites the ASRA 2020 checklist (Neal, Neal, Weinberg, Reg Anesth Pain Med 2021). The explanation now says 1.5 mL/kg of ideal body weight over 2 to 3 min, or 100 mL over 70 kg, then about 0.25 mL/kg/min. The writer's 2018 citation is real but is the third practice advisory (Executive summary 2017, published 2018). It stays for q2 with the full title.
- analgesia-sedation-05 q4. The dangerous phrase "tylenol 3" would match "Tylenol 300 mg every 4 hours for 3 days". Replaced with "t3". The codeine dangerous flag is justified. Health Canada says codeine must not be used under 12 years. Intranasal fentanyl 1.5 mcg/kg = 30 mcg, ibuprofen 200 mg and acetaminophen 300 mg for 20 kg are correct.
- analgesia-sedation-08 q2. "Infant" and "neonate" scored as the age contraindication. Green 2011 says under 3 months. Infancy under 12 months is only a relative risk. Now only "3 months" matches.
- analgesia-sedation-12. The naloxone questions cited the ACEP procedural sedation policy, which does not cover opioid overdose. q1 now cites Tintinalli and q2 cites Boyer EW, Management of opioid analgesic overdose, N Engl J Med 2012. The "avoid benzodiazepines" item in q4 matched any mention of lorazepam, so "add lorazepam" scored. It now needs the negation. q4 moved from KF1 to KF2 (safest pain control, including blocks).
- analgesia-sedation-13 q3. The unacceptable phrase "no analgesia" matched the correct line "fentanyl, because propofol has no analgesia". Narrowed.
- analgesia-sedation-15 q2. Now cites the ASRA anticoagulation guideline, 5th edition (Kopp SL, Vandermeulen E, McBane RD, et al. Reg Anesth Pain Med 2025). The explanation now says paravertebral blocks are managed like neuraxial blocks and names the roughly 72 hour apixaban window. q3 explanation: bupivacaine 2.5 mg/kg is 185 mg for 74 kg, and many use a 175 mg ceiling.

### Writer's flags checked (analgesia)

- Ketorolac 15 mg with its ceiling effect, sub-dissociative ketamine 0.1 to 0.3 mg/kg and naloxone titration from 0.04 mg are all correct.
- Green 2011 lists only two absolute contraindications: age under 3 months and known or suspected schizophrenia. Timing of intake need not delay ED ketamine. Correct.
- Sickle cell care: a parenteral opioid within 60 min, reassessment every 15 to 30 min and a 25% dose increase match the NHLBI 2014 report. ASH 2020 suggests low dose ketamine for refractory pain. Correct.
- Buprenorphine: continue it and add a full agonist at higher doses. This is correct. Nerve block with compartment syndrome caution is reasonable.
- Bier block: 0.5% lidocaine 1.5 to 3 mg/kg and a minimum cuff time of 20 to 30 min are correct. The bupivacaine dangerous flag is justified by historical deaths.
- Epidural on apixaban flagged dangerous is justified. Paravertebral as unacceptable but not dangerous is consistent with ASRA.

## Engine limitation (affects several dangerous flags)

The negation window only looks 3 words back. A candidate who writes a correct warning with the negation after the drug ("serratus block. Epidural is contraindicated on apixaban", or "lidocaine. Bupivacaine is contraindicated") triggers the dangerous flag. The whole question then scores zero and the candidate cannot override it. This remains for "epidural" (15 q2), "bupivacaine" (07 q3), "codeine" (05 q4) and the esophageal tube phrases (airway-13 q3). Phrases were narrowed where possible without missing real dangerous answers.

## Sources verified

- CAFG 2021 Part 1 (three or fewer attempts, scalpel-bougie-tube, 6.0 cuffed tube, single final attempt during CICO): https://pmc.ncbi.nlm.nih.gov/articles/PMC8212585/ and https://pubmed.ncbi.nlm.nih.gov/34143394/
- CAFG 2021 Part 2: https://pubmed.ncbi.nlm.nih.gov/34105065/
- Innes et al. 1999, CAEP Canadian consensus guidelines on ED procedural sedation: https://www.sciencedirect.com/science/article/abs/pii/S0736467998001358
- ASRA LAST checklist 2020: https://pubmed.ncbi.nlm.nih.gov/33148630/ and https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/11/01/checklist-for-treatment-of-local-anesthetic-systemic-toxicity
- ASRA anticoagulation guideline, 5th edition 2025: https://pubmed.ncbi.nlm.nih.gov/39880411/
- The other citations (DAS 2015, NAP4, OAA/DAS 2015, EXTRIP salicylate 2015, BTF 4th edition, Mosier 2015, Weingart and Levitan 2012, Green 2011, ACEP 2014, AAP/AAPD 2019, CPS 2019, Poonai 2014, Hicks 2001, PAINAD 2003, Pathan 2016, NHLBI 2014, ASH 2020, CRISM 2018, EAST 2016, Manterola 2011, CDC 2022, Boyer 2012) were checked against known bibliographic details. None were fetched online. No URLs were added for them.

## Open questions for the physician

1. analgesia-sedation-15. Does ASRA 5th edition classify the erector spinae plane block as superficial for DOAC timing? I could not read the full text. Serratus anterior is clearly superficial. The ESP key may need a caveat.
2. airway-01 q3. Should another laryngoscopy during CICO stay non-dangerous, as now, to match CAFG's single final attempt?
3. airway-14 q1. Is intubation the keyed answer in a postictal eclamptic patient with GCS 7? Many would give a short trial of airway manoeuvres and reassessment first. Obstruction and vomiting make the key defensible.
4. analgesia-sedation-07. Should the dangerous bupivacaine flag accept the engine risk described above?
5. The Innes 1999 CAEP guideline is old. Confirm whether a newer CAEP statement exists that you would prefer to cite.

## Summary

Of 30 SAMPs, 12 airway and analgesia items needed corrections, mainly answer key matching faults. Examples: negated correct answers that failed to match ("avoid head tilt"), broad phrases that rewarded wrong answers ("high PEEP", "increase sedation", "add lorazepam", any rocuronium dose), and dangerous flags that would zero correct answers ("reduce rate, increase expiratory time", "avoid beta blockers and calcium channel blockers", "Tylenol 300 mg for 3 days"). Clinical content was largely accurate. Clinical fixes: pediatric succinylcholine dose wording, the TBI SpO2 floor, the cyanide lactate threshold, one KF mislabel, alignment with CAFG exit options, and ketamine contraindication keys. The CAEP sedation citation was unverifiable and now points to the real 1999 CAEP consensus guideline. Typecheck and `SAMP_BATCH=s02` tests pass (94 of 94).
