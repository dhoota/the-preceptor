# Format conformance, batch s02 (airway, analgesia-sedation)

Format pass on `src/samps/s02/` under `docs/CONFORMANCE_BRIEF.md`. No answer changed. Every `correct`, `select`, `required`, `accept` and `unacceptable` value is the same as at sign-off, apart from the index remapping that reordering needs. Every remap was checked by text. No clinical fact, value or timeline changed.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s02` prints nothing.
- `CONFORM=s02 SAMP_BATCH=s02 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 440 pass, 16 fail. All 16 failures are the expected "keeps its keys" test, one for each SAMP with a reworded keyed option (17 rewordings in 16 SAMPs, listed below). They pass once the edits are logged in `docs/conformance-key-edits.json`.

## Counts

| Item | Count |
| --- | --- |
| Prompts reworded | 104 of 105 (28 single, 2 menu, 74 write-in) |
| Context moved from a prompt into a new `update` | 3 (airway-11 q4, analgesia-sedation-07 q3, analgesia-sedation-09 q1) |
| Options added | 0 |
| Options removed | 0 |
| Options reworded | 60 (43 distractors, 17 keyed) |
| Keyed options reworded | 17, in 16 SAMPs |
| Explanations updated | 15 (reason or detail text moved out of a keyed option) |
| Stems changed | 29 of 30 |
| Vitals moved to the `vitals` field | 29 SAMPs (weight also moved in 27) |
| Patient names removed | 0 (none found) |
| Unit fixes in stems | 2 ("µmol/L" to "umol/L") |
| Citations completed | 6 sources (7 constants) |
| Citations replaced | 0 |

Every single question already had 5 options and both menus had 8, so none were added or removed.

## Key position, single questions (28)

| Position | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Before | 18 | 9 | 1 | 0 | 0 |
| After | 6 | 6 | 5 | 6 | 5 |

The largest share is now 21 percent (6 of 28). The key is the single longest option in 9 of 28 questions (32 percent). Before, it was 18 of 28 (64 percent).

## Keyed option rewordings

Each was shortened to meet the 60 character, 10 word and length parity limits. The dropped detail or reason now sits in the explanation, usually in the original words.

| SAMP | Question | Before | After |
| --- | --- | --- | --- |
| airway-02 | q2 | Intubate now in the emergency department with a front of neck access kit open | Intubate now with a front of neck access kit open |
| airway-03 | q3 | Awake flexible bronchoscopic nasotracheal intubation with topical anesthesia and a prepared neck | Awake flexible bronchoscopic nasotracheal intubation |
| airway-06 | q3 | Identify and mark the cricothyroid membrane with ultrasound while she is positioned | Mark the cricothyroid membrane with ultrasound |
| airway-08 | q2 | Open the wound at the bedside by cutting the sutures and opening the skin and deep layers to evacuate the hematoma | Open the wound at the bedside to evacuate the hematoma |
| airway-11 | q2 | Ketamine may be used because it maintains blood pressure and has not been shown to worsen outcome in brain injury | Ketamine may be used for induction |
| airway-13 | q1 | A sustained waveform on continuous capnography over several breaths | Continuous capnography with a sustained waveform |
| airway-14 | q1 | Persistent GCS 7 with airway obstruction and recent vomiting | Persistent GCS 7, airway obstruction and recent vomiting |
| airway-14 | q3 | Magnesium potentiates nondepolarizing blockers, so rocuronium may last longer | Magnesium may prolong rocuronium blockade |
| analgesia-sedation-01 | q2 | Hydromorphone 1 mg IV, reassessed and repeated every 10 to 15 minutes until pain is controlled | Hydromorphone 1 mg IV, repeated every 10 to 15 minutes |
| analgesia-sedation-03 | q2 | Fascia iliaca compartment block with bupivacaine 0.25%, 30 mL | Fascia iliaca block with 30 mL bupivacaine 0.25% |
| analgesia-sedation-04 | q3 | 20% lipid emulsion 1.5 mL/kg IV over 2 to 3 minutes, then an infusion of about 0.25 mL/kg/min | 20% lipid 1.5 mL/kg IV bolus, then 0.25 mL/kg/min |
| analgesia-sedation-06 | q4 | Upper airway obstruction. Reposition with jaw thrust and consider an airway adjunct. | Upper airway obstruction, jaw thrust, consider adjunct |
| analgesia-sedation-07 | q2 | Regional anesthesia without systemic sedation, such as a Bier block | Regional anesthesia without systemic sedation |
| analgesia-sedation-08 | q1 | Recent intake does not require a delay, and the mild runny nose slightly increases the risk of laryngospasm | Proceed now, noting a slightly higher laryngospasm risk |
| analgesia-sedation-10 | q2 | Continue buprenorphine, add non-opioid analgesia, and titrate a potent full agonist such as hydromorphone at higher than usual doses | Continue buprenorphine, add nonopioids, titrate full agonist |
| analgesia-sedation-12 | q2 | Naloxone 0.04 to 0.1 mg IV, repeated every 2 to 3 minutes until breathing improves | Naloxone 0.04 to 0.1 mg IV repeated to effect |
| analgesia-sedation-13 | q2 | Recent food intake is not by itself a reason to delay ED sedation, but it can be weighed with his other risk factors when choosing timing and depth | Not alone a reason to delay, weigh with other risks |

The two menu keys (airway-04 q3, analgesia-sedation-06 q2) kept their exact text.

## Other format changes

- Prompts. Every single and menu prompt is now one "Which of the following ...?" sentence of 10 to 30 words, with no "Select one." or "Select TWO." Write-in prompts are questions ending in "?" with no "List N", "Give N" or "Include ..." sentence. Where a detail request carried meaning, it stays in the question ("including the drug and route"). Scene-setting sentences became an `update` in three questions. In airway-01 q3 the "cannot intubate, cannot oxygenate" statement stays in the question sentence. The analgesia-sedation-06 q2 preamble "Propofol has no analgesic effect." moved to the start of the explanation.
- Options. All are in alphabetical order, with "No ..." options last. Doses of one drug sit together, higher dose first, as in the CFPC sample. Reasons were taken out of distractors (for example "because it raises intracranial pressure" in airway-11 q2). Distractors were lengthened with neutral words ("as a single dose", "after intubation") for length parity. None of them became correct.
- Vitals. HR, BP, RR, SpO2, temperature and weight moved into `vitals` in CFPC formats with every value unchanged. Where RR had a qualifier ("38 and deep", "12 and shallow", "10 and irregular"), the qualifier stays in the stem as "His breathing is deep." and similar. airway-01 keeps capillary glucose in the stem. airway-05 "90% with bag-mask support" became "90% on bag-mask support". airway-15 "93% on 4 L nasal cannula" became "93% on 4 L/minute by nasal cannula". Two approximate weights ("about 110 kg", "about 80 kg") stay in the stem because the vitals format has no place for "about".
- airway-13 was not changed. Its stem gives preintubation values with timing ("Preintubation vitals were HR 92, BP 176/94, SpO2 98% after preoxygenation") next to a post-intubation SpO2. A vitals list would lose that timing, so they stay in the stem.
- Ages were already hyphenated. No thousands separators or number and unit spacing needed fixing.

## Citation changes

| Source | Before | After | Verification |
| --- | --- | --- | --- |
| walls | Brown CA, Sakles JC, Mick NW, eds. The Walls Manual of Emergency Airway Management. Wolters Kluwer. | Brown CA, Sakles JC, Mick NW, Mosier JM, Braude DA, editors. The Walls Manual of Emergency Airway Management. 6th ed. Wolters Kluwer. 2023. | https://www.theairwaysite.com/walls-manual-of-emergency-airway-management-6th-edition-published-by-wolters-kluwer-health/ and https://shop.lww.com/The-Walls-Manual-of-Emergency-Airway-Management/p/9781975190682 |
| abls (both files) | American Burn Association. Advanced Burn Life Support provider manual. | American Burn Association. Advanced Burn Life Support course provider manual. 2018 update. | http://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf |
| pals | Heart and Stroke Foundation of Canada. Pediatric Advanced Life Support provider manual. | ... provider manual. 2020. | https://hsf.gilmoreglobal.com/en/product/12fb2373-5bad-4eb6-8510-037b0fff0713 |
| gina | Global Initiative for Asthma. Global strategy for asthma management and prevention. | ... 2026 update. | https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf |
| tintinalli | Tintinalli JE, et al, eds. Tintinalli's Emergency Medicine. A Comprehensive Study Guide. McGraw Hill. | Tintinalli JE, Ma OJ, Yealy DM, et al, editors. Tintinalli's Emergency Medicine. A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| guay | Guay J, Parker MJ, Griffiths R, Kopp S. Peripheral nerve blocks for hip fractures. Cochrane Database Syst Rev. | ... Cochrane Database Syst Rev. 2017. | https://pubmed.ncbi.nlm.nih.gov/28494088/ |

No source had to be replaced. A web search did not confirm a 10th edition of Tintinalli, so the 9th edition is cited.

## Needs physician decision

Nothing clinical was changed. These points are for the physician.

1. analgesia-sedation-08 q1. This is the least literal keyed rewording. "Proceed now, noting a slightly higher laryngospasm risk" stands for "recent intake does not require a delay" plus "the runny nose slightly raises laryngospasm risk". The full original sentence now opens the explanation. Please confirm that the new wording keeps the meaning.
2. analgesia-sedation-13 q2 and analgesia-sedation-10 q2. Both keys were cut from long sentences ("weighed with his other risk factors when choosing timing and depth", "titrate a potent full agonist such as hydromorphone at higher than usual doses"). The full original text is now in each explanation. Please confirm the short forms.
3. analgesia-sedation-04 q3 and analgesia-sedation-12 q2. The keys dropped "over 2 to 3 minutes" and "every 2 to 3 minutes until breathing improves" to meet the 10 word limit. Both explanations still give these details.
4. airway-10 q1. The explanation says propofol causes hypotension "in a dehydrated patient", but the stem does not say she is dehydrated. SAMP_SPEC section 8 bars findings the case does not give. Left unchanged.
5. airway-13. The preintubation vitals stay in the stem (see above). Decide whether to restructure them.
6. Open questions from the earlier review (`docs/reviews/samps-s02.md`) are still open: the ESP block and DOAC timing (analgesia-sedation-15), intubation as the key in the postictal eclamptic patient (airway-14 q1), the bupivacaine dangerous flag (analgesia-sedation-07) and the age of the Innes 1999 CAEP sedation guideline.
