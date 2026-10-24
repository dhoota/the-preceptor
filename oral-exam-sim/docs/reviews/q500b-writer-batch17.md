# Q500B writer report: oral cases batch17

Four new oral cases in `src/cases/batch17/`, registered in `BATCH_17` in this order. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Priority topic | Setting | Questions on every path | Branching questions | Longest path seconds | Rubric items and points |
|---|---|---|---|---|---|---|---|
| hoist-transfer-thigh-fracture | Upset since the morning transfer | analgesia-sedation | Community hospital | 8 | 4 | 640 | 19 items, 30 points |
| sleepover-smoothie-vomiting | Sick at a sleepover | anaphylaxis | Rural hospital | 8 | 4 | 580 | 18 items, 33 points |
| noodle-soup-scald-return | A spill at the kitchen table | burns | Community hospital | 8 | 4 | 630 | 17 items, 29 points |
| bench-press-chest-pain | Sore chest after the gym | chest-pain | Community hospital | 9 | 5 | 680 | 18 items, 29 points |

Points per score sheet row (history, physical, management, process):

- hoist-transfer-thigh-fracture: 8, 6, 8, 8. History 27%. Management 27%. Critical: at-p4, at-m1, at-m5.
- sleepover-smoothie-vomiting: 7, 6, 11, 9. History 21%. Management 33%. Critical: an-p2, an-m1, an-m4.
- noodle-soup-scald-return: 6, 7, 8, 8. History 21%. Management 28%. Critical: bn-p3, bn-m2, bn-m4.
- bench-press-chest-pain: 7, 6, 7, 9. History 24%. Management 24%. Critical: cp-p1, cp-m1, cp-m4.

Each case has a fixed escalation that every path reaches: the opioid and home sedative event at 21:30, the IV epinephrine error, the day 3 return in shock, and the patient who wants to leave after the CT.

## Uniqueness

I read the eight existing oral cases on these topics (sedation-shoulder-reduction, intoxicated-driver-hip-dislocation, refractory-anaphylaxis-beta-blocker, ladder-fall-ankle-sedation, house-fire-burns, work-trailer-heater-burns, chest-pain seed, late-dinner-chest-pain), every case title and summary in the bank, and the SAMP stems in s02, s22, s03, s23, s70, s04, s26, s69, s05 and s28. s81 and s85 were empty when I checked.

- Analgesia: no oral case and no SAMP has a nonverbal adult with cerebral palsy, a hoist injury, a femoral block that removes the pain stimulus, and stacking with home clobazam and baclofen. Bank items on hip fracture in dementia, LAST dose limits and flumazenil exist as SAMPs, so here the dose check is only one option of one branch and flumazenil sits only in a model answer.
- Anaphylaxis: the bank has no case or SAMP with an IM to IV epinephrine error, its management, re-dosing after the error, disclosure and system fixes. No kiwi trigger and no oral pediatric anaphylaxis case existed.
- Burns: toxic shock after a small pediatric scald was not in any item. The s16 shock file defines a burn TSS source but no SAMP uses it. Scald disposition with burn centre telehealth and specific TSS return advice is the link between the two halves.
- Chest pain: the bank's dissection items are older patients (seed rural STEMI mimic, s05 64 year old). This case is a young man with undiagnosed Marfan features, a resident's pec strain label, unreliable first tests, ADD-RS reasoning, informed refusal and family screening. The anti-impulse question repeats a standard step taught in the seed case, with different framing and a different escalation.

## Key feature coverage

- analgesia-sedation: 1 (behavioural tool, caregiver cues, past responses), 2 (nerve block, splint), 3 (titrated, combined agents), 4 (refuses sedative alone), 6 (monitoring, oversedation, naloxone).
- anaphylaxis: 1, 2 (shock with faded hives and GI symptoms), 3 (IM epinephrine, fluids, re-dose), 4 (autoinjectors, plan, allergist, asthma, school).
- burns: 1 (toxic shock as a complication), 3 (intranasal fentanyl), 5 (disposition by size, site, age and home circumstances).
- chest-pain: 1, 2, 3, 4, 5.

## Sources and verification

Verified with WebSearch, WebFetch and Europe PMC records by PMID. A URL is given only where I opened the page and it was the right document.

| Case | Source | Verified at |
|---|---|---|
| Analgesia | Sullivan WF and colleagues. Primary care of adults with IDD. 2018 Canadian consensus guidelines. Can Fam Physician 2018 (guidelines 3, 9 and 20 read) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068/ (PMID 29650602) |
| Analgesia | Lotan M and colleagues. NCAPC adaptation. J Pain 2009 | PMID 19201658 |
| Analgesia | ACEP. Ultrasound guided nerve blocks. Policy statement 2021 | ACEP pages found by search (acep.org returned 403 to fetch), no URL given |
| Analgesia | Neal JM, Neal EJ, Weinberg GL. ASRA LAST checklist 2020. Reg Anesth Pain Med 2021 | PMID 33148630 |
| Analgesia | Boyer EW. Management of opioid analgesic overdose. N Engl J Med 2012 (initial naloxone 0.04 mg read in full text) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/ (PMID 22784117) |
| Anaphylaxis | CPS Acute Care Committee. Emergency treatment of anaphylaxis in infants and children. 2011, reaffirmed 2018 | Found by search on cps.ca. The page blocked fetch, so no URL |
| Anaphylaxis | Golden DBK and colleagues. Anaphylaxis: a 2023 practice parameter update. Ann Allergy Asthma Immunol 2024 | PMID 38108678 |
| Anaphylaxis | Kanwar M and colleagues. Confusion about epinephrine dosing leading to iatrogenic overdose. Ann Emerg Med 2010 | PMID 20031267 |
| Anaphylaxis | CPSI Disclosure Working Group. Canadian disclosure guidelines. 2011 | Found by search on healthcareexcellence.ca, no URL |
| Anaphylaxis | Li LDX and colleagues. CSACI transition recommendations on epinephrine autoinjectors. 2021 (0.3 mg for 25 to under 45 kg read) | https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/ |
| Burns | American Burn Association. Guidelines for burn patient referral (page dated 2025) | https://ameriburn.org/burnreferral |
| Burns | Royal Children's Hospital Melbourne. Burns, acute management. 2026 (cool running water 20 minutes within 3 hours, no ice, discuss over 5%) | https://www.rch.org.au/clinicalguide/guideline_index/Burns/ |
| Burns | Royal Children's Hospital Melbourne. Intranasal fentanyl. 2025 (1.5 mcg/kg, max 100 mcg, repeat 0.75 to 1.5 mcg/kg) | https://www.rch.org.au/clinicalguide/guideline_index/Intranasal_Fentanyl/ |
| Burns | Gutzler L and colleagues. Toxic shock syndrome in paediatric thermal injuries. Burns 2018 | https://folia.unifr.ch/unifr/documents/298413 |
| Burns | Weiss SL and colleagues. Surviving Sepsis Campaign pediatric guidelines. Pediatr Crit Care Med 2020 | PMID 32032273 |
| Burns | Stevens DL and colleagues. IDSA skin and soft tissue infection guideline 2014 | PMID 24973422 |
| Chest pain | Isselbacher EM and colleagues. 2022 ACC/AHA aortic disease guideline | PMID 36322642 |
| Chest pain | Boodhwani M and colleagues. CCS thoracic aortic disease position statement. 2014 | PMID 24882528 |
| Chest pain | Nazerian P and colleagues. ADvISED. Circulation 2018 (failure rate 0.3% read in abstract) | PMID 29030346 |
| Chest pain | Hagan PG and colleagues. IRAD. JAMA 2000 (ECG normal 31.3%, CXR normal 12.4%, type A mortality 26% with surgery and 58% without) | PMID 10685714 |
| Chest pain | Loeys BL and colleagues. Revised Ghent nosology. J Med Genet 2010 | PMID 20591885 |
| Chest pain | CMPA. Consent: a guide for Canadian physicians. 4th edition, revised 2024 | https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians |

The web search budget ran out partway through. All of the above were checked before it ran out, or by direct fetch afterwards.

## Checks

```
npx tsc --noEmit -p . 2>&1 | grep cases/batch17      (no output)
CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts      41 passed
REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts      39 passed (card, rows and timing checks)
```

Stems are 44 to 56 words.

## Uncertain, for the physician

1. Analgesia. The case does not give a bupivacaine maximum in a rubric item. The 2.5 mg/kg figure is in the bank's s02 SAMP, but I did not confirm it in the ASRA checklist. The rubric item says only "calculate by weight" and cites ASRA for the lipid dose (1.5 mL/kg under 70 kg, about 54 mL here).
2. Analgesia. Acetaminophen 15 mg/kg (540 mg) every 6 hours for a 36 kg adult and fentanyl 0.5 mcg/kg are standard doses, but no listed source states them.
3. Anaphylaxis. Overdose management (no beta blocker, no amiodarone for brief runs, supportive care) is reasoned from pharmacology and the Kanwar case series. No guideline sets out this treatment. Metoprolol is keyed unsafe because it can make anaphylaxis resistant to epinephrine. Amiodarone is keyed partial.
4. Anaphylaxis. The 0.3 mg autoinjector weight band comes from the 2021 CSACI transition statement, which was written for the Emerade recall. A 42 kg patient fits the 0.3 mg band in every Canadian source I saw.
5. Burns. The two RCH guidelines are Australian. I used them because they state the cooling window and intranasal fentanyl doses directly. The CPS procedural pain statement (Trottier 2019) exists, but I could not confirm its intranasal fentanyl dose.
6. Burns. The teaching that a clean looking wound does not exclude toxic shock is widely taught, but the Gutzler abstract does not state it directly.
7. Burns. Antibiotic choice (cefazolin or cloxacillin plus clindamycin, plus vancomycin if MRSA is possible) follows the IDSA rationale for toxin suppression. No doses are keyed.
8. Chest pain. Beta blockade with moderate aortic regurgitation is keyed as standard anti-impulse therapy. A physician may want a caution added if the regurgitation were severe.

## Revision 1

This revision answers docs/reviews/q500b-qa-batch17.md. Item 1 (overlap between hoist-transfer-thigh-fracture and analgesia-sedation-50) was closed by the coordinator: the SAMP was replaced, so the case keeps its scenario. Items 2 to 12 are applied as listed below. The point totals and critical flags are unchanged in every case.

### hoist-transfer-thigh-fracture

- Item 2.
  - s-event and the `event` finding now say that at 21:00 the nurse gave a breakthrough dose of hydromorphone 0.2 mg IV when she moaned during a splint check. The q-event model answer names that dose.
  - The c-sleeping feedback now says "strongly linked with deaths from opioid toxicity".
  - Flumazenil is removed from the at-m5 text and teaching. It stays in the q-event model answer only. The at-m5 teaching now gives Boyer's titration (0.04 mg, increased every 2 minutes if there is no response).
  - The at-p4 teaching now gives Boyer's point that stupor with a respiratory rate of 12 or less calls for bag mask ventilation. The capnography claim is removed.
- Item 3.
  - The q-reassess line is replaced with the wording the reviewer gave (naloxone lasts 20 to 90 minutes).
  - The at-pr2 teaching no longer says that pain drives breathing. It now says that high risk patients need electronic monitoring and reassessment, and that reversal with naloxone is often brief. at-pr2 now cites `jungquist`.
- Item 4. I added `jungquist`: Jungquist CR, Quinlan-Colwell A, Vallerand A, and colleagues. ASPMN guidelines on monitoring for opioid-induced advancing sedation and respiratory depression. Revisions. Pain Manag Nurs. 2020.
  - I confirmed it on its Europe PMC record (PMID 31377031, doi 10.1016/j.pmn.2019.06.007).
  - The publisher full text returned 403, so I checked it against the abstract. The abstract says that all patients given opioids must be assessed for risk, that monitoring and the plan of care should follow the level of risk, and that high risk patients need extra vigilance with electronic monitoring.
  - at-h3 and at-pr2 are worded to those points only. I did not cite it for the claim that capnography detects hypoventilation earlier, or for any named risk factor, because I could not read the full text.
  - No URL is given. The case now has 6 sources.
- Item 5. at-m4 is narrowed to "splints the leg and limits opioid to small doses for breakthrough pain once the block works". Its teaching now speaks only of the block as the core of a multimodal, opioid sparing plan, as the ACEP policy describes. Scheduled acetaminophen stays in the model answer and the c-block label but is no longer keyed.
- Advisory. The c-hydromorphone feedback now reads "a standard adult dose and is too much for a 36 kg woman".

### sleepover-smoothie-vomiting

- Advisory. The q-history cofactor line now reads "Exercise around the meal, NSAIDs, illness."
- I did not apply the optional advisory to tie the "two autoinjectors" point to another source. That point is in the model answer and in an-m5. The 0.3 mg band, which is what an-m5 cites CSACI for, was confirmed by the reviewer.

### noodle-soup-scald-return

- Item 6. The return-history finding now says the video review is booked for "this evening". The c-ceftriaxone label now says the dressing was "due to be reviewed this evening".
- Items 7 and 8. Every claim that a clean looking wound does not exclude toxic shock is removed or softened. That covers the bn-p4 text and teaching, the bn-pr4 teaching, the q-shock and q-father model answers, the c-reassure label, and the c-fp and c-dressing feedback.
  - bn-p4 and bn-pr4 now use the reviewer's wording.
  - c-fp now says toxic shock often starts with fever, rash, vomiting and diarrhea.
  - c-dressing now says toxic shock can follow small burns without any lapse in care.
  - The return-exam finding still describes this wound as clean. That is a finding, not a teaching claim.
- Item 9. I kept `gutzler` and dropped "treated as outpatients" from the bn-pr2 teaching. Sirajee 2025 was not added: the publisher page returned 403 to fetch, so I could not open it as the brief requires.

### bench-press-chest-pain

- Items 10 and 11. The heart rate target is now 60 to 80 in the q-treat model answer, the c-impulse label and the cp-m2 text, which matches the 2022 ACC/AHA guideline. The systolic target now reads "under 120 mmHg, or the lowest that keeps organs perfused". I added "Watch for worsening regurgitation as the rate falls." The double "first" is fixed: the model answer and cp-m2 now say "then an IV beta blocker before any vasodilator". s-refuse keeps a pulse of 62.
- Item 12. The q-call line now reads "Tell the surgeon about the ibuprofen at 16:00 and any ASA or anticoagulant given."

### Checks after revision

```
npx tsc --noEmit -p . 2>&1 | grep cases/batch17      (no output)
CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000      41 passed
REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000      39 passed
```

## Revision 2

This revision answers docs/reviews/q500b-verify-batch17.md. All edits are in hoist-transfer-thigh-fracture. Points, rows and critical items are unchanged, and the total is still 30.

- c-titrate feedback. The capnography sentence is replaced with "Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating."
- at-pr2 teaching. The sentence on brief naloxone reversal is deleted. The teaching now holds only the point that the Jungquist abstract supports: high risk patients need extra vigilance, electronic monitoring and repeated reassessment. Naloxone duration stays in the q-reassess model answer.
- at-p4 text (advisory). "The loss of pain stimulus after the block" is removed, because no cited source states it. The item now reads "worsened by clobazam and baclofen".

Checks: `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000` 41 passed. `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000` 39 passed. tsc shows no batch17 errors.

## Revision 3

This revision answers docs/reviews/q500b-verify2-batch17.md. Two teaching sentences changed in bench-press-chest-pain. Nothing else changed.

- cp-p1 teaching. "They were present in only a minority of registry patients, so look for them on purpose." is replaced with "They are part of the aortic dissection detection risk score, so look for them on purpose." The source stays `advised`.
- cp-pr1 teaching. "Anchoring on a benign label is a classic cause of a missed dissection." is replaced with "The presentation is diverse, so a benign working label must be checked at the bedside." The source stays `irad`.

Checks: `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000` 41 passed. `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000` 39 passed. tsc shows no batch17 errors.
