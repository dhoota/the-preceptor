# SAMP review: batch s11 (gi-bleed, headache)

Adversarial review of `src/samps/s11/`. Every dose, score and threshold was recomputed. Keys were probed against likely candidate wordings with the scoring engine. All SAMPs keep `reviewed: false` and stable ids.

Checks after the edits: `npx tsc` shows no errors in s11. `SAMP_BATCH=s11 npx vitest run tests/samps.test.ts` passes 94 of 94.

## GI bleed

| SAMP | Verdict | Notes |
| --- | --- | --- |
| gi-bleed-01 | Corrected | Keys widened. British match phrase removed. |
| gi-bleed-02 | Accurate | Glasgow Blatchford 11 confirmed. |
| gi-bleed-03 | Corrected | Reversal justified and PCC dosing fixed. |
| gi-bleed-04 | Corrected | Upper endoscopy first now justified. |
| gi-bleed-05 | Accurate | |
| gi-bleed-06 | Accurate | CTA first is correct. |
| gi-bleed-07 | Corrected | Key feature remap. |
| gi-bleed-08 | Corrected | Key widened and key feature remap. |
| gi-bleed-09 | Corrected | Shock wording and keys. |
| gi-bleed-10 | Accurate | |
| gi-bleed-11 | Corrected | Child Pugh score was wrong. |
| gi-bleed-12 | Accurate | |
| gi-bleed-13 | Corrected | Keys, reversal justification and key feature remap. |
| gi-bleed-14 | Corrected | MINT described accurately. |
| gi-bleed-15 | Accurate | |

### Changes

- gi-bleed-11 q4. Before: "Child Pugh score is 9 (class B)". After: "12 (class C)". Recomputed from the stem: bilirubin 58 micromol/L scores 3, albumin 26 g/L scores 3, INR 1.9 scores 2, ascites scores 2, encephalopathy with asterixis scores 2. Total 12. Pre-emptive TIPS is still the right answer because Baveno VII includes Child Pugh C below 14.
- gi-bleed-11 q2. Octreotide key now accepts "50 mcg/h" written alone. PPI key accepts esomeprazole. The redundant "ceftriaxone 1g" phrase became "ceftriaxone 1000", since the engine now splits "1g".
- gi-bleed-11 q3. Before: "stopped lactulose" or "stop lactulose" scored nothing, because "stop" negated the phrase. After: phrases with the negation built in.
- gi-bleed-03 q3. Before: the key read "PCC, about 50 units/kg" and the explanation implied reversal was routine. After: the key reads "PCC 50 units/kg (maximum 3000 units) or a fixed 2000 units, or andexanet". This matches the Thrombosis Canada DOAC bleeding guide, checked in its PDF. The explanation now says why reversal is justified despite the 2022 ACG and CAG advice against routine reversal: shock despite fluid, hemoglobin 71 g/L and apixaban taken 3 hours ago. "FFP" is now rejected with "plasma". "Hold" and "discontinue" NSAID wordings now score.
- gi-bleed-13 q2. Reversal justification added (shock, active bleeding, INR 6.8). "Vit K 10 mg IV" now matches. Key feature 6 changed to 5, because the question is a PCC versus plasma choice of blood product.
- gi-bleed-13 q4. The endoscopy item now also accepts "gastroenterology".
- gi-bleed-04 q2. Upper endoscopy stays keyed. CTA is not among the options, so the key is unambiguous. The explanation now justifies the choice. The urea to creatinine ratio is about 236 and there is heavy NSAID use, so the ACG favours upper endoscopy first. The BSG approach of CTA first applies when no upper source is suspected, and CTA is the next step if upper endoscopy is negative.
- gi-bleed-07 q4 (Boerhaave signs). Key feature changed from gi-bleed 1 to chest-pain 1, with `alsoTopics: ["chest-pain"]`. Perforation is not a clue to the bleeding source.
- gi-bleed-08 q4. "Transfuse prior to induction" and similar wordings now score. So does "pre oxygenation".
- gi-bleed-08 q5 (massive transfusion complications). Key feature changed from shock 3 (choice of fluid) to gi-bleed 5 (optimal resuscitation).
- gi-bleed-09 q2. Red cell key now accepts rbc, cc/kg and absolute volumes of 120 to 180 mL. The access key now accepts IV wording. Before: "compensated shock with hypotension for age approaching". After: tachycardia and delayed refill, with a systolic BP of 84 still above the cutoff for age of about 74. Red cells 10 to 15 mL/kg is 120 to 180 mL at 12 kg, which is correct.
- gi-bleed-14 q3. The MINT trial is now described accurately: liberal threshold 100 g/L against restrictive 70 to 80 g/L, with a nonsignificant trend favouring liberal. The keyed answer (transfuse now, at least 80 g/L with active ischemia) is fair. Hemoglobin is 72 g/L, so the "below 70" distractor is truly wrong.
- gi-bleed-01. "massive haemorrhage" match phrase removed (British spelling outside a title). IV access, Blakemore and Linton wordings added.
- Three explanations trimmed to four sentences.

### Confirmed accurate, no change

- Glasgow Blatchford in gi-bleed-02 totals 11: urea 14.2 scores 4, hemoglobin 94 in a woman scores 6, melena scores 1. BP 118 and HR 96 score 0. Light headedness is not syncope. In gi-bleed-07 the score is 0, and 0 to 1 means outpatient care.
- Transfusion thresholds of 70 to 80 g/L, and 80 or more with cardiovascular disease, match the ICG 2019 and ACG 2021 guidelines.
- Octreotide 50 mcg then 50 mcg/h. Ceftriaxone 1 g daily for up to 7 days. Endoscopy within 12 h. No plasma to correct the INR. PPI until the source is known. Erythromycin 250 mg IV 30 to 120 minutes before endoscopy. Idarucizumab 5 g. Vitamin K 10 mg IV with PCC.
- CTA first for a suspected aortoenteric fistula. Pertechnetate scan for Meckel.
- O negative red cells for a woman of childbearing potential and O positive for an adult man.

### Key feature 6 load

Key feature 6 dropped from 14 to 13 questions after the gi-bleed-13 q2 remap. It remains the main focus of well under 8 SAMPs. Most of the remaining questions genuinely test octreotide, PPI, endoscopy timing or reversal. gi-bleed-04 q4 and gi-bleed-12 q4 (embolization or surgery) are kept as abdominal-pain 4. They could also be read as gi-bleed 6, which names "endoscopy versus surgical intervention". All six gi-bleed key features remain covered.

## Headache

| SAMP | Verdict | Notes |
| --- | --- | --- |
| headache-01 | Corrected | Stem now states time to peak. |
| headache-02 | Accurate | |
| headache-03 | Corrected | CTA alternative explained. |
| headache-04 | Corrected | Contact key tightened, azithromycin no longer rejected. |
| headache-05 | Corrected | Wrong attribution of age 60 to the IDSA. |
| headache-06 | Corrected | Stop magnesium and calcium keys widened. |
| headache-07 | Corrected | CVT citation completed. |
| headache-08 | Corrected | Key feature remap. |
| headache-09 | Corrected | Key features swapped. |
| headache-10 | Corrected | Dystonia wrongly accepted as akathisia. |
| headache-11 | Corrected | Negation bug in the "avoid" key. Sources fixed. |
| headache-12 | Corrected | Key order bug. Weaver attribution. |
| headache-13 | Accurate | |
| headache-14 | Accurate | |
| headache-15 | Accurate | |

### Changes

- headache-11 q3 (medications to avoid). Before: the natural answers "Avoid NSAIDs", "No ergots" and "NSAIDs are contraindicated" all scored zero, because the engine treats them as negated. After: every item carries "avoid X", "no X" and "X contraindicated" phrases. Probed and confirmed.
- headache-11 q2 and q3 sources. Before: both cited the 2013 Canadian Headache Society guideline for NSAIDs from 20 weeks. That guideline predates the warning. After: q3 cites the Health Canada public advisory of 30 October 2020 (verified, URL added). q2 cites ACOG Clinical Practice Guideline No. 3 (2022) for acetaminophen and metoclopramide in pregnancy. The CHS source was dropped from this SAMP only.
- headache-05 q1. Before: "CT before LP is advised with ... age 60 or older", presented as IDSA criteria. The IDSA 2004 list does not include age. Age 60 or older came from the Hasbun derivation study. After: the explanation attributes it correctly. Age stays an accepted answer.
- headache-10 q3. Before: "dystonia" matched the akathisia item, so a wrong diagnosis scored. After: removed. "Lorazepam 0.5" added.
- headache-10 q4. "Opioids are avoided" now scores.
- headache-12 q4. Before: a candidate who wrote "pregnancy with COHb above 15%" first and "COHb above 25%" second lost a point, because the level item captured the pregnancy line. After: the pregnancy item comes first. Probed and scores 3 of 3. The explanation now says that age 36 or older and exposure of 24 hours or more come from a later analysis of the Weaver trial, not the 2002 trial itself. A pregnancy threshold of about 15 to 20 percent matches UHMS practice.
- headache-06 q3. "Discontinue MgSO4 infusion" and "Ca gluconate" now score. Doses confirmed against SOGC 426: MgSO4 4 g IV then 1 g/h, labetalol 20 mg IV, calcium gluconate 1 g.
- headache-04 q4. Before: "residence" accepted "everyone in her residence", which is wrong. After: roommates, household and shared sleeping arrangements only.
- headache-04 q5. Before: azithromycin was an unacceptable answer. It is used for chemoprophylaxis in some jurisdictions where ciprofloxacin resistance is present. After: it earns no credit but is not flagged. Ciprofloxacin 500 mg once, rifampin 600 mg every 12 h for 2 days and ceftriaxone 250 mg IM match PHAC guidance.
- headache-01 stem. Now states that the headache peaked within seconds, so the Ottawa SAH Rule clearly applies.
- headache-03 q2. LP stays keyed and CTA is not an option. The explanation now names CTA as an accepted alternative in many Canadian centres and gives its drawbacks.
- headache-07. CVT citation completed as the 2024 AHA scientific statement (verified).
- headache-08 q4 (referrals). Key feature changed from eye 2 (eye history) to headache 4.
- headache-09. q1 (exam findings of angle closure) is now eye 1. q2 (pressure lowering drugs) is now headache 4. Drugs confirmed: timolol 0.5%, apraclonidine and acetazolamide 500 mg IV.
- ESCMID 2016 removed from the source list. It was never cited.

### Confirmed accurate, no change

- The Ottawa SAH Rule criteria. The 6 h CT rule needs a modern scanner, a qualified reader and a neurologically intact patient, and the stem states this. An LP with fewer than 2000 x 10^6/L red cells and no xanthochromia rules out SAH.
- SAH care: SBP below 160, enteral nimodipine 60 mg every 4 h, prophylactic phenytoin unacceptable.
- Meningitis: ceftriaxone 2 g, vancomycin (20 mg/kg as a menu option, any dose accepted in headache-05), dexamethasone 10 mg, ampicillin 2 g for Listeria risk, acyclovir 10 mg/kg (640 mg at 64 kg).
- GCA: high dose glucocorticoids the same day. HZO: valacyclovir 1 g three times daily for 7 days. Dissection: CTA, then antithrombotic therapy per CADISS. Brain tumour: LP is dangerous with midline shift, and prophylactic antiseizure drugs are unacceptable.

## Sources verified

- HALT-IT, Lancet 2020. The title was invented and has been replaced with the real one: https://pubmed.ncbi.nlm.nih.gov/32563378/
- MINT, N Engl J Med 2023. "(MINT)" was removed from the title, because the published title does not contain it.
- Thrombosis Canada DOAC bleeding guide. The dosing was checked in the 2020 PDF, whose table reads "50 units/kg, max 3000 units" or "2000 units": https://profedu.blood.ca/sites/default/files/thrombosiscanada2020mb_tc_day_4.pdf. Both Thrombosis Canada guides are now cited plainly by organisation and topic.
- Health Canada NSAID advisory, 30 October 2020: https://recalls-rappels.canada.ca/en/alert-recall/use-non-steroidal-anti-inflammatory-drugs-nsaids-beyond-20-weeks-pregnancy-and-risk
- ACOG Clinical Practice Guideline No. 3, Obstet Gynecol 2022: https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2022/05/headaches-in-pregnancy-and-postpartum
- AHA CVT scientific statement, Stroke 2024: https://pubmed.ncbi.nlm.nih.gov/38284265/
- The other journal citations match known publications and were left unchanged: ICG 2019, ACG 2021 UGIB, ACG and CAG 2022, Baveno VII, Villanueva 2013, Blatchford 2000, Stanley 2017, BSG 2019, ACG 2023 LGIB, Pollack 2015, the Perry papers of 2011, 2013, 2015 and 2017, AHA SAH 2023, IDSA 2004 and 2008, SOGC 426, BSR 2020, EULAR 2020, AHS 2016, CHS 2013, Weaver 2002 and CADISS 2015.

## Open questions for the physician

1. gi-bleed-03. Should activated charcoal be accepted for apixaban taken 3 hours ago? It is not keyed now.
2. gi-bleed-04 q4 and gi-bleed-12 q4. Keep these as abdominal-pain 4, or move them to gi-bleed 6?
3. headache-03 q2 and gi-bleed-04 q2. CTA is left out of the options, so the single keyed answer stays unambiguous. Would you rather add CTA and convert these to short answer questions that accept both?
4. headache-14 q4 is mapped to cva 4 (TIA workup). This is a loose fit for antithrombotic choice after a dissection.
5. headache-04. The PHAC contact definitions, including shared drinks, were not re-read in the source document this round.

## Summary

- GI bleed: 9 SAMPs corrected, 6 accurate.
- Headache: 11 SAMPs corrected, 4 accurate.
- Most serious errors:
  - The Child Pugh score in gi-bleed-11.
  - A negation bug in headache-11 q3 that marked every correct "avoid" answer wrong.
  - Dystonia accepted as akathisia in headache-10.
  - An invented HALT-IT title.
  - Age 60 wrongly attributed to the IDSA CT criteria.
  - A key order bug in headache-12 that cost a point for a correct answer.
- No clinical dose errors were found.
