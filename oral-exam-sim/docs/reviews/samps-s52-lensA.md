# Review of SAMP batch s52 (suicide risk), Lens A: clinical truth

Reviewer lens: A (clinical truth). Scope: every file in `src/samps/s52/`: `suicide-risk.ts` (suicide-risk-16 to suicide-risk-38) and `review-extra.ts` (suicide-risk-39 and suicide-risk-40). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s52` gives no output. `SAMP_BATCH=s52 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 456 passed.

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| suicide-risk-39 | q1 | correct | Key was "Increase amitriptyline to 100 mg" (index 3), while the explanation says increasing it keeps a lethal supply in his hands. Key reset to "Change to sertraline 50 mg daily" (index 1) | high |
| suicide-risk-40 | q2 | explanation | Invented closing sentence cited a serum lactate of 7.8 mmol/L from a blood gas that the case never gives and that has nothing to do with the question. Removed | high |
| suicide-risk-35 | q1 | explanation, source | Said psychotic depression carries a "much higher" suicide risk. The meta-analysis shows a modest rise (pooled OR 1.21, 1.69 in a subset). Changed to "a higher". Bolton 2015 does not cover psychotic depression, so the source is now Gournellis 2018 | high |
| suicide-risk-36 | q2 | explanation, source | Bolton 2015 names only chronic "alcohol misuse", not acute use. Source changed to the Borges 2017 meta-analysis (OR about 7 for any acute use). The claim about "more lethal acts" was replaced with the dose effect that source reports | high |
| suicide-risk-16 | q2 | explanation | Called online method searching a Columbia "preparatory behaviour". The C-SSRS preparatory acts are things like collecting pills or writing a note. Method searching counts as ideation with a method. Reworded. The key stands | medium |
| suicide-risk-16 | q4 | source | The CPS 2015 statement does not cover means restriction or no-harm contracts. Source changed to Yip 2012 (means restriction), added to the sources | medium |
| suicide-risk-17 | q3 | source | Bolton 2015 does not list family history, religious involvement or children as risk or protective factors. Source changed to SAFE-T, which lists all of them and says protective factors do not outweigh acute risk | medium |
| suicide-risk-30 | q1 | source | Bolton 2015 does not cover legal or shaming events. Source changed to SAFE-T, which lists "triggering events leading to humiliation, shame, or despair" and global insomnia. Bolton removed from the sources | medium |
| suicide-risk-30 | q3 | explanation | Called ED-SAFE a "trial" of a safety plan plus calls. ED-SAFE was a 3-phase quasi-experimental study whose intervention also included secondary screening. Reworded | low |
| suicide-risk-36 | q3 | explanation | Said none of 2-1-1, 3-1-1 or 8-1-1 handles crisis support. Quebec's 8-1-1 includes Info-Social, a psychosocial crisis line (Educaloi). Reworded so the point is that 9-8-8 is the national suicide crisis line | medium |
| suicide-risk-38 | q2, q3 | source | Bolton 2015 does not say when to ask about intent or that psychiatric assessment must come before discharge. Changed to SAFE-T ("assessments should be conducted at first contact", and for a potentially lethal attempt "admission generally indicated"). Bolton kept for q1 (patients may conceal plans) | low |
| suicide-risk-24 | q2 | explanation | "Breastfeeding is not a protective factor" is not supported by Grigoriadis 2017. Reworded to say that the study gives no evidence breastfeeding protects | low |
| suicide-risk-23 | q1 | explanation | This is the writer's doubt about the ED switch from amitriptyline to sertraline. The key fits CANMAT 2023 (TCAs are second line, and overdose toxicity matters when there is suicidal ideation). Added that the change is made with the psychiatry consultant and the family physician is told | low |

## Key changes

- suicide-risk-39 q1: before index 3 ("Increase amitriptyline to 100 mg"), after index 1 ("Change to sertraline 50 mg daily"). Reason: raising the dose of a tricyclic in a man with suicidal ideation and 90 tablets at home is dangerous. The explanation already argued for the sertraline switch. No other key changed.

## Writer's doubts, resolved

1. Quebec P-38.001 s.7 (suicide-risk-21): the wording is confirmed. A physician practising in the institution may place a person under preventive confinement for up to 72 hours, without consent, without court authorization and before a psychiatric examination, when the person's mental state presents a grave and immediate danger. Legisquebec and CanLII both returned 403, so the text was confirmed through a search snippet quoting legisquebec and through Educaloi. Educaloi adds that a period ending on a weekend or holiday runs to the next working day, and that a court order is needed beyond 72 hours. No change.
2. BC s.31(1): confirmed on bclaws (current to 15 September 2026). It reads "[Repealed 2025-28-2.]". suicide-risk-19 stays clear of treatment consent. BC s.22 was checked in full. A physician or nurse practitioner can complete the first certificate. The second must come from a physician, and a different physician when a physician completed the first. Detention lasts 48 hours, and the second certificate is due within 48 hours of admission. The s.22(3)(c) criteria match the suicide-risk-19 q2 explanation. The Provincial Court warrant under s.28(3) and (4) brings a person in, as the q3 explanation says. No change.
3. Alberta s.4(1)(a) (suicide-risk-20 q3): confirmed in the King's Printer consolidation, current as of 18 December 2025. It gives authority "for any person to care for, observe, assess, detain and control the person ... during the person's apprehension and conveyance", which covers the weather delay in a non-facility hospital. Section 4(2) ends the authority to apprehend and convey 72 hours after issue. Section 4(1)(b) starts the 24 hours from arrival at the facility. Section 2 requires issue within 24 hours of the examination and lists the four criteria in the q2 explanation, including "potential to benefit from treatment" and "harm to others or ... negative effects". No change.
4. Owens 2002 (suicide-risk-34 q1): the abstract gives a median of 16% non-fatal repetition at 1 year. Its conclusion says fatal repetition "lies somewhere between 0.5% and 2% after 1 year". Both figures are correct. No change.
5. Grigoriadis 2017 (suicide-risk-24 q2): the abstract confirms more hanging and jumping, most deaths in the final quarter of the first postpartum year, 39.2% with mental health contact in the prior 30 days, and the highest rates in rural and remote regions. The breastfeeding line was fixed as above.
6. Amitriptyline to sertraline (suicide-risk-23 q1): see the table.
7. 8-1-1 and 3-1-1 (suicide-risk-36 q3): see the table.
8. Bolton 2015: the accepted manuscript was read in full from the McGill repository. It does not cover psychotic depression (only a passing mention as a model variable) or acute alcohol use. It also does not cover legal stressors or the timing of assessment after a disguised attempt. Five citations were moved as listed above.
9. Beck, Schuyler and Herman 1974: confirmed as a real chapter (APA PsycNET record 1975-05602-003, pages 45 to 56, Charles Press, Bowie MD). The Beck intent scale items (timing, isolation, precautions against discovery, acts to get help, final acts such as a note) support suicide-risk-17 q1 and suicide-risk-20 q1.

## Overlap with the bank

- suicide-risk-39 is a word-for-word copy of suicide-risk-23. suicide-risk-40 is a word-for-word copy of suicide-risk-31. Both must not be merged. If they were, the near-duplicate stem test would fail. Their planted defects were still fixed.
- suicide-risk-28 q1 (acetaminophen level after every intentional ingestion) repeats a teaching point already in suicide-risk-04 (s17), burns in s26, delirium-agitation-06 (s08) and two s53 tox SAMPs (the hydroxychloroquine and theophylline cases). Flag: rewrite or accept as deliberate reinforcement. Medium.
- suicide-risk-31 (widowed older man living alone, injury presented as an accident, hidden attempt, older adult risk factors) closely overlaps suicide-risk-02 (s17). Medium.
- suicide-risk-20 q4 (firearms on a farm) overlaps suicide-risk-15 (s17, firearm safety plan for a farmer). Low to medium.
- suicide-risk-22 q2 (contents of a safety plan) overlaps suicide-risk-06 q3 (s17). Low.
- suicide-risk-23 q2 (SSRI counselling points) overlaps suicide-risk-07 q3 (s17). Low.
- suicide-risk-25 (opioid overdose called accidental, judging intent) overlaps suicide-risk-10 (s17). Low.
- suicide-risk-33 and suicide-risk-36 (remark made while drinking, reassessed once sober) overlap suicide-risk-08 (s17) and each other. Low.
- suicide-risk-38 (disguised attempt as injury) overlaps suicide-risk-09 (s17, crash as a concealed attempt). Low.
- Within the batch, structured follow-up calls are keyed three times: suicide-risk-22 q3, suicide-risk-30 q3 and suicide-risk-34 q3 (the last two lean on the same Stanley 2018 and ED-SAFE point). No-harm contracts are rejected in six SAMPs. Consider replacing one follow-up call item.
- No overlap of substance with s34 delirium. s53 overlap is limited to the acetaminophen point above.

## Sources verified

- Statutes: BC Mental Health Act, https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01 (read directly). Alberta Mental Health Act, https://kings-printer.alberta.ca/documents/Acts/M13.pdf (read directly). Quebec P-38.001 s.7, via a search snippet quoting legisquebec and https://educaloi.qc.ca/en/capsules/forced-hospitalization-in-emergencies-72-hours/ (legisquebec and CanLII returned 403). Ontario Mental Health Act s.15(1) serious harm test, via search results quoting the section and the Form 1 (ontario.ca returned 502). An official read of the Ontario text is still recommended.
- PubMed records matched on author, journal, year and title for all 24 PMIDs cited in the file, plus the two new sources: Gournellis 2018 (https://pubmed.ncbi.nlm.nih.gov/30258483/) and Borges 2017 (https://pubmed.ncbi.nlm.nih.gov/27928972/).
- Abstracts read against the explanations: Owens 2002, Grigoriadis 2017, Stanley 2018, ED-SAFE 2017, Motto 2001, Fralick 2019, Russell 2018, Lanzillo 2019, Chung 2017.
- Bolton 2015 accepted manuscript, McGill repository: https://mcgill.scholaris.ca/items/13321c24-1f83-4f91-92ac-464c2b14ce25
- SAFE-T pocket card, full text: https://www.mcpap.com/pdf/SAFE-T.pdf. The SAMHSA store URL in the citation now redirects to library.samhsa.gov.
- CCSMH 2006 guideline, full text (older men at especially high risk, lethality ratio, denial with other risk factors, collateral, hospitalization for severe ideation): https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf
- CPS statement (Korczak 2015, updated 2019, reaffirmed 2024): https://cps.ca/en/documents/position/suicidal-ideation-and-behaviour
- 9-8-8 (call or text, 24/7, Public Health Agency of Canada): https://988.ca
- Cybertip.ca sextortion advice (stop contact, screenshot, never pay, report): https://www.cybertip.ca/en/online-harms/sextortion/
- Beck 1974 chapter: https://psycnet.apa.org/record/1975-05602-003
- Stanley and Brown 2012: https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630

## Needs physician decision

- suicide-risk-39 and suicide-risk-40: reject as duplicates of suicide-risk-23 and suicide-risk-31.
- suicide-risk-28 q1: repeated teaching point (see overlap). Rewrite or accept.
- suicide-risk-31: overlap with s17 suicide-risk-02. Consider a different older adult scenario.
- suicide-risk-27 q3 and suicide-risk-26 q3: the keys are sound, but the CPS 2015 statement names no follow-up interval and no safety planning protocol. "Within 7 days" rests on general practice, not the cited source. A stronger paediatric source would help.
- suicide-risk-25 q3: set in Winnipeg but cites the BC (BCCSU) guideline. The national CRISM guideline (Bruneau, CMAJ 2018) may fit better. The key is unaffected.
- suicide-risk-16 q1: the explanation infers a non-acute positive from a "no" to the past-week question. The ASQ decides acuity by its fifth question ("right now"), which the stem does not report. The key is unaffected. Low.

## Summary

- 13 table rows across 10 SAMPs:
  - 1 key change and 1 invented stem fact, both in review-extra.
  - 6 explanation corrections: suicide-risk-16 q2, suicide-risk-23 q1, suicide-risk-24 q2, suicide-risk-30 q3, suicide-risk-35 q1 and suicide-risk-36 q3.
  - 7 citations moved to sources that support the point: suicide-risk-16 q4, suicide-risk-17 q3, suicide-risk-30 q1, suicide-risk-35 q1, suicide-risk-36 q2, suicide-risk-38 q2 and suicide-risk-38 q3. Two new verified sources were added: Gournellis 2018 and Borges 2017.
- Most serious errors:
  - suicide-risk-39 q1 keyed a dose increase of a tricyclic in a suicidal patient.
  - suicide-risk-40 q2 carried an invented lactate value.
  - suicide-risk-35 q1 overstated the risk from psychotic depression.
  - Bolton 2015 was cited for five points it does not make.
- All four mental health acts check out on the points tested. No key in suicide-risk.ts changed.
- SAMP ids with a defect: suicide-risk-16, suicide-risk-17, suicide-risk-23, suicide-risk-24, suicide-risk-30, suicide-risk-35, suicide-risk-36, suicide-risk-38, suicide-risk-39, suicide-risk-40. Flagged for overlap or sourcing without an edit: suicide-risk-20, suicide-risk-22, suicide-risk-25, suicide-risk-26, suicide-risk-27, suicide-risk-28, suicide-risk-31, suicide-risk-33, suicide-risk-34.
