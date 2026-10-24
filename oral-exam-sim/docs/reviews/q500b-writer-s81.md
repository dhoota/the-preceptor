# Q500B writer report: s81, Analgesia/sedation

Batch `s81`, topic `analgesia-sedation`. File `src/samps/s81/analgesia-sedation.ts`, array `ANALGESIA_SEDATION_S81`. All items are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting | Questions | Key features |
|---|---|---|---|---|
| analgesia-sedation-48 | Restless evening under palliative care | Rural hospital, 79-year-old man, comfort care | 4 single | 1, 4, 3, 6 |
| analgesia-sedation-49 | Boy thrown from a dirt bike | Community hospital at night, 11-year-old boy | 4 single | 4, 4, 6, 5 |
| analgesia-sedation-50 | Tripped on the rug at home | Tertiary, 72-year-old woman with expressive aphasia after a stroke | 4 single | 1, 1, 2, 4 |
| analgesia-sedation-51 | Fall on an icy step in pregnancy | Tertiary, 33-year-old woman at 30 weeks | 3 single, 1 menu | 2, 5, 4, 6 |
| analgesia-sedation-52 | Fall while carrying groceries | Tertiary, 54-year-old woman on semaglutide | 4 single | 5, 5, 5, 3 |

20 questions: 19 single, 1 menu (analgesia-sedation-51 q2, select two of eight).

Single key positions (first to fifth): 4, 3, 4, 4, 4. The key is the longest option in 3 of 19 single questions (50 q4, 51 q3, 52 q2).

## Key feature coverage

Bank counts before this batch (all SAMPs, all topics): KF1 24, KF2 54, KF3 29, KF4 13, KF5 21, KF6 29. The extra questions went to KF4 and KF5, the two thinnest.

| Key feature | This batch | Bank after |
|---|---|---|
| 1 Systematic pain assessment | 3 | 27 |
| 2 Safest effective pain control | 2 | 56 |
| 3 Enough analgesia for severe pain, titrated | 2 | 31 |
| 4 Analgesia with sedation, never sedation alone | 5 | 18 |
| 5 Pre-sedation airway and hemodynamic risk | 5 | 26 |
| 6 Monitoring, adverse events, discharge | 3 | 32 |

## New angles (checked against all 47 existing analgesia-sedation SAMPs and every other SAMP tagged to this topic)

- 48: end-of-life restlessness from missed oral morphine in a man who cannot swallow. Pain behaviours set against signs of dying, oral to SC conversion (half the oral dose), repeat SC dosing every 20 minutes, and why slow but adequate breathing in a regular opioid user is not reversed. The bank had no palliative item.
- 49: a child who needs a head CT and has a painful fracture. Analgesia removes the need for sedation for the scan. Then the minimum two-person team for a night sedation in a community hospital, and a recent asthma exacerbation as a trigger for anesthesia consultation.
- 50: an older woman with expressive aphasia after a stroke who can still self-report by pointing. A pointing scale instead of a spoken rating or PAINAD, why a behavioural score of 2 does not override her own rating of 8, no NSAID with full anticoagulation (and the tramadol and sertraline caution), and a further analgesic dose rather than a hypnotic when pain keeps her awake. Revision 1 replaced an earlier version 50 (nonverbal child with cerebral palsy and a femur fracture) because it overlapped the new oral case `src/cases/batch17/hoist-transfer-thigh-fracture.ts`. No SAMP or case in the bank uses aphasia for pain assessment. s29 has an older woman with a proximal humerus fracture, but it tests imaging and fracture management, not analgesia.
- 51: shoulder dislocation at 30 weeks. Intra-articular lidocaine before sedation, uterine displacement and oxygen above 95%, an opioid with the benzodiazepine despite a resident's fetal worry, and 4 hours of fetal monitoring after trauma.
- 52: GLP-1 receptor agonist in dose escalation with GI symptoms as an aspiration risk, gastric POCUS, an intra-articular ankle block instead of sedation when the stomach holds solids, and a small fentanyl top-up.

## Sources and verification

| Source | Used in | Verified at |
|---|---|---|
| Fraser Health Hospice Palliative Care Program. Principles of opioid management. Approved 2006, appendices 2015 | 48 q2 to q4 | Full PDF read: https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/Health-Professionals/Professionals-Resources/Hospice-palliative-care/HPC_SymptomGuidelines_Opioid.pdf (half the PO dose SC, repeat in 20 minutes, breakthrough 10% of TDD hourly, respiratory depression rare with regular use, dilute naloxone slowly, transdermal not for acute pain) |
| Warden V, Hurley AC, Volicer L. PAINAD. J Am Med Dir Assoc. 2003 | 48 q1 | https://pubmed.ncbi.nlm.nih.gov/12807591/ (Europe PMC record checked) |
| Trottier ED, Ali S, Doré-Bergeron MJ, Chauvin-Kimoff L, CPS. Best practices in pain assessment and management for children. 2022 | 49 q1 | https://cps.ca/en/documents/position/pain-assessment-and-management (Table 2 read: IN fentanyl 1 to 2 mcg/kg, 1 to 2 doses, maximum 100 mcg total. r-FLACC for ages 4 to 19 with cognitive impairment. Codeine not under 18) |
| Trottier ED and colleagues, CPS. Managing pain and distress in children undergoing brief procedures. 2019 | 49 q2 | https://cps.ca/en/documents/position/managing-pain-and-distress |
| Krmpotic K, Rieder MJ, Rosen D, CPS. Recommendations for procedural sedation in infants, children, and adolescents. 2021 | 49 q3, q4 | https://cps.ca/en/documents/position/recommendations-for-procedural-sedation-in-infants-children-and-adolescents (two providers, one dedicated to monitoring. ASA I and II for non-anesthesiologists. Anesthesia consult for recent asthma exacerbation) |
| Jain V and colleagues, SOGC. Guidelines for the management of a pregnant trauma patient. J Obstet Gynaecol Can. 2015 | 51 q2, q4 | https://pubmed.ncbi.nlm.nih.gov/26334607/ (abstract recommendations 3, 6, 7, 20 and 21 read) |
| Wakai A, O'Sullivan R, McCabe A. Intra-articular lignocaine for shoulder dislocation. Cochrane. 2011 | 51 q1 | https://pubmed.ncbi.nlm.nih.gov/21491392/ (abstract read) |
| American College of Surgeons Trauma Quality Programs. Acute pain management in trauma patients. 2020 | 50 q1 to q4, 51 q3, 52 q4 | https://www.facs.org/media/exob3dwk/acute_pain_guidelines.pdf (full PDF: pain assessment section, self-report first, behavioural scores show presence not severity, keep the same tool. NSAIDs not recommended with full anticoagulation, ketorolac to avoid in older adults, tramadol and SSRI caution for SIADH, low starting opioid doses in older adults, avoid opioids with other CNS depressants. Pregnancy section and Table 16. Fentanyl IV 25 to 50 mcg. Ketamine 0.3 mg/kg bolus by ideal body weight if obese) |
| Kindel TL and colleagues. Multi-society guidance on GLP-1 receptor agonists in the perioperative period. Surg Endosc. 2025 (online 2024) | 52 q1, q2 | https://pmc.ncbi.nlm.nih.gov/articles/PMC11666732/ (full text read) |
| White BJ, Walsh M, Egol KA, Tejwani NC. Intra-articular block versus conscious sedation for ankle fracture-dislocations. J Bone Joint Surg Am. 2008 | 52 q3 | https://pubmed.ncbi.nlm.nih.gov/18381308/ (abstract read via Europe PMC) |

## Uncertain, for the reviewers

1. The Fraser Health opioid guideline is Canadian and current on its website, but its core text was approved in 2006. Its numbers (half the PO dose SC, repeat in 20 minutes, 10% breakthrough) match standard practice. Other references use oral to SC ratios of 2:1 to 3:1. The 48 q2 options are far enough apart that either ratio keys 10 mg.
2. 48 q4 keys continuing regular morphine at a resp. of 12/minute in a man who rouses to voice and is receiving comfort care. This is a palliative judgment. It differs from signed analgesia-sedation-12, where an opioid-naive older man with a GCS of 9 got titrated naloxone.
3. 49 q2 keys CT with no sedation after IN fentanyl. The CPS supports sedation as an adjunct only for persisting distress, but does not address head CT specifically.
4. 51 uses the SOGC trauma guideline (2015) for positioning, oxygen and 4 hours of fetal monitoring. I could not open the full text of ACOG Committee Opinion 775, so it is not cited. The menu distractors "Fasting for 8 hours first" and "Cricoid pressure throughout" should be checked for defensibility in a pregnant patient.
5. 52 applies the GLP-1 guidance, written for elective procedures, to an unscheduled ED sedation. White 2008 is a single trial of 42 patients.
6. New ACEP-approved guidelines on unscheduled procedural sedation came out in September 2026 (Green SM, Roback MG, Bhatt M and colleagues, Ann Emerg Med, Parts 1 and 2). Only the PubMed records could be reached, not the full text, so they are not cited. A reviewer with access should check 49 q3 and q4, 51 q2 and 52 q1 to q3 against them.
7. The web search limit was reached partway through. After that, sources were checked by opening the publisher, CPS, Fraser Health, ACS and PMC pages directly, and the PubMed, Europe PMC and Crossref records.
8. 50 q4 relies on the guideline's statement that pain control comes first and sedation second. That statement sits in its intensive care section. Its warning against combining opioids with other CNS depressants is general.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s81` prints nothing.
- After revision 1: `SAMP_BATCH=s81 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passes 128 of 128. Without the longer timeout, the bank-wide near-duplicate test can exceed 5 seconds when the machine is busy.

## Revision 2

Response to `docs/reviews/q500b-qa-s81.md` (8 fails). Every rebuilt decision was grepped across all of `src/samps` and `src/cases` before writing. Only sources already opened and read in this batch are cited. Key features stay 1, 4, 3, 6 / 4, 4, 6, 5 / 1, 1, 2, 4 / 2, 5, 4, 6 / 5, 5, 5, 3, so the coverage table above is unchanged. 51 q2 is still the menu.

1. 48 q4. The update now opens "Later he settles." Nothing else changed.
2. 49 q1. The patient is new: an 11-year-old boy, 38 kg, thrown from a dirt bike, with an angulated tibial and fibular shaft fracture and new vitals. The forearm, the 6-year-old girl at 20 kg and the old vitals are gone. q1 no longer keys a fentanyl dose. It asks for the response to the resident's midazolam order, and the key is the strategy "Treat his pain first, then reassess". The other options are midazolam as ordered, midazolam with analgesia after the CT, restraint, and IV ketamine sedation. The source is CPS 2019 (sedation only as an adjunct for persisting distress). The CPS 2022 pain statement is no longer used in the batch and is removed. q2 and q3 keep their keys, reworded for the new patient. q2 swaps "CT under general anesthesia" for "Delay CT for general anesthesia" so that the key moves to third place.
3. 49 q4. The key is now "Difficult intubation at past surgery", a CPS 2021 anesthesia-consultation trigger (features of a potentially difficult airway, including a history of difficult intubation). No SAMP keys this trigger (grep for "difficult intubation" with sedation). Asthma, URTI, Down syndrome, OSA and cardiac disease are not used.
4. 50 q3. This is a new KF2 decision: the orthopedic resident offers an interscalene block to a woman who took apixaban this morning. The key is "Deferred until 72 hours off apixaban". The ACS trauma pain guideline applies the ASRA deep plexus rules to brachial plexus blocks, and its Table 8 gives a 72-hour apixaban hold. Its Table 9 notes that interscalene blocks invariably cause ipsilateral phrenic weakness. The distractors are an INR threshold (a warfarin rule), ultrasound guidance, a 24-hour hold, and "better than opioids and safe for breathing". Tramadol and the NSAID decision are gone. The only interscalene item elsewhere in the bank is sob-22 (phrenic palsy after day surgery), a different decision. 50 q2's last sentence now reads "In a patient who can rate her own pain, reading the PAINAD of 2 as mild pain ...", as the reviewer suggested.
5. 51 q1. The four sedation distractors are replaced with non-sedation analgesic strategies of the same form: acetaminophen 1 g IV, fentanyl 50 mcg IV, hydromorphone 1 mg IV and morphine 5 mg IV, each "then retry". The key is "lidocaine 1% into the joint". The explanation keeps the Cochrane comparison: IV opioid before a retry is the IV analgesia arm, with more adverse effects and no better success. Ketorolac was considered and dropped, because its pregnancy reason sits in the ACS guideline rather than the cited Cochrane review.
6. 51 q4. This is a new KF6 discharge-advice question specific to pregnancy after sedation. The update states that 4 hours of fetal and contraction monitoring were completed and normal, so the SOGC 4-hour point is not keyed. The key is "Regular abdominal tightening", supported by the SOGC list of adverse features after trauma in pregnancy (sustained contractions, tenderness, bleeding, ruptured membranes). The distractors are expected after-effects of sedation or the reduction: nausea, sleepiness, shoulder ache and an IV-site bruise. This does not repeat s22-41 q4 (responsible adult, baseline mental status) or 51 q2.
7. 52 q3 and q4. The injury is now a posterior elbow dislocation with a cool hand and no radial pulse. No block alternative is keyed, so 51 q1 keeps the only intra-articular block angle. q3 is "Which of the following is the most appropriate plan for reducing her elbow?" The key is "General anesthesia with RSI", following the Kindel recommendation to weigh RSI with general anesthesia against cancelling when retained contents are confirmed. Cancelling or a 24-hour liquid diet is not possible with a threatened limb, and ED ketamine, propofol, or midazolam with fentanyl leave the airway unprotected. The q3 update reads "Bedside assessment confirms a large volume of solid food in her stomach" and no longer names ultrasound. q4 is now the analgesic while she waits for the reduction, and its update reveals no earlier key. Its key is still fentanyl 50 mcg IV, now with diazepam in place of lorazepam as a distractor. The White 2008 source is no longer used and is removed.
8. 52 stem. The tented-skin ankle wording is gone. The new examination (bent elbow she will not let anyone move, olecranon jutting out behind the joint, cool pale hand, no radial pulse) shares no sentence with s06 msk, s22-27, s29 msk (child gymnast) or s22-32 (OSA elbow). The GLP-1 aspiration decision is new to the bank.

Batch checks after Revision 2:
- Single key positions are 4, 3, 4, 4, 4, and the key is the longest option in 3 of 19 singles.
- `SAMP_BATCH=s81 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passes 128 of 128.
- The `tsc` grep for samps/s81 prints nothing.

Sources now cited: Fraser Health, PAINAD, CPS 2019, CPS 2021, SOGC 2015, Wakai 2011, ACS TQIP 2020 and Kindel 2025. The CPS 2022 and White 2008 rows above apply only to the earlier version.
