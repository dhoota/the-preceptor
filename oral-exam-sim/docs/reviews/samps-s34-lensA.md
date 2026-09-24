# SAMP review: batch s34, delirium and agitation

Lens A: clinical truth. Every SAMP in `src/samps/s34/delirium-agitation.ts` (delirium-agitation-16 to delirium-agitation-38) and in `src/samps/s34/review-extra.ts` (delirium-agitation-39 and delirium-agitation-40) was read question by question. This is an AI audit. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| delirium-agitation-39 (review-extra) | q1 | correct | Key was index 4, "Inattention and altered consciousness only", which lacks acute onset and fails the CAM. The explanation itself says so. Key restored to index 2 | high |
| delirium-agitation-40 (review-extra) | q2 | explanation | Invented fact: "serum lactate of 7.8 mmol/L seen on the first blood gas". No gas or lactate in the case, and lactate has nothing to do with steroid psychiatric risk. Sentence removed | high |
| delirium-agitation-18 | q3 | update, prompt, explanation | Oral risperidone was keyed to "settle him for the drainage". A fluctuant intraoral abscess in a boy who screams on approach cannot be drained on oral risperidone. Procedural sedation (ketamine) would be the defensible answer. The update now sends him to oral surgery under general anesthesia in 4 hours and the prompt asks what settles him while he waits. The explanation also said ketamine "is for dangerous agitation when oral treatment fails". Gerson 2019 states that ketamine is not recommended for agitation. Reason rewritten | high |
| delirium-agitation-36 | q3 | explanation | Same false ketamine reason attributed to the pediatric consensus. Gerson 2019 does not recommend ketamine for agitation. Rewritten | high |
| delirium-agitation-28 | q4 | explanation | Olanzapine was rejected as "not advised within an hour or two of a parenteral benzodiazepine". The stem gives lorazepam at 21:00 and the question is set at 23:30, so the stated reason does not apply. Replaced with a true reason: another dopamine blocker, does not treat akathisia, and adds sedation | high |
| delirium-agitation-17 | q3 | explanation | "Usually reduced by about a third to a half" overstates the Maudsley-derived advice, which is an initial cut of about 25% guided by levels. Corrected | medium |
| delirium-agitation-28 | q1 | explanation | "Face-to-face physician evaluation within the first hour" is the US CMS rule quoted in Knox. It is not a Canadian standard. Replaced with prompt reassessment in person | medium |
| delirium-agitation-35 | q1, q3 | source, explanation | Cited the EAU 2016 guideline where a current Canadian one exists. Replaced with the CUA 2021 ureteral calculi guideline (Lee JY et al.), which says the same: timely decompression by stent or nephrostomy, whichever is most expedient, and definitive treatment only after drainage and treatment of the infection | high |
| delirium-agitation-32 | q1 | stem, options, key indexes, explanation | Overlap. Diphenhydramine as a removable delirium contributor in an older person boarding with pneumonia is already the teaching point of delirium-agitation-08 SAMP "A difficult second night in the department" (s08). The iatrogenic drug is now zopiclone 7.5 mg PO for sleep (twice the 3.75 mg starting dose for an older adult). Options re-sorted alphabetically, key now [2, 5] (catheter, zopiclone) | medium |
| delirium-agitation-23 and delirium-agitation-39 | q4 | option | The distractor "Decide as he would for himself" can be read as substituted judgment ("as the father would decide"), which is close to the keyed rule and defensible. Reworded to "Decide by his own personal values" to match the explanation's reason | medium |
| delirium-agitation-20 | q4 | explanation | Stated antipsychotic intolerance as a general fact from Lejuste, an adult-only cohort (111 adults). Now says the evidence comes from an adult cohort (21 of 45 first admitted to psychiatry) and that the caution is extended to adolescents | medium |
| delirium-agitation-24 | q1 | explanation | Rejected Wernicke encephalopathy on "no eye signs or ataxia", which the stem never examines. Now rejected on facts in the case (asterixis and constipation point to hepatic encephalopathy), with a note that thiamine is harmless | medium |
| delirium-agitation-26 | q2 | explanation | Distractor "Nonconvulsive status epilepticus" had no reason given. Added a true reason | medium |
| delirium-agitation-27 | q2 | explanation | "Feed on demand leaves them alone together" is not necessarily true. Reworded to the real problem: frequent close contact with no plan for supervision | low |
| delirium-agitation-37 | q1 | explanation | "Sedated about a quarter more patients" is ambiguous (relative or absolute). Taylor 2017 reports absolute differences of 25.0 and 25.4 percentage points. Reworded | low |

## Key changes

- delirium-agitation-39 q1: key index 4 ("Inattention and altered consciousness only") changed to index 2 ("Acute onset, inattention and disorganized thinking"). The CAM needs acute onset or fluctuating course plus inattention, plus disorganized thinking or altered consciousness.
- delirium-agitation-32 q1: key changed from [2, 3] (diphenhydramine, catheter) to [2, 5] (catheter, zopiclone). The question was rebuilt with the stem, options and explanation to remove the s08 overlap. It is not a correction of a wrong key.

No other key was changed.

## Writer doubts, checked

- delirium-agitation-16 q2: pregabalin at CrCl 15 to 30 mL/minute has a total daily range of 25 to 150 mg in the product monograph. The ceiling of 150 mg is correct. The explanation cites Beers only for "reduce the dose", which Beers supports. No change.
- delirium-agitation-17: a clozapine level rise of about 50% after stopping smoking, and re-titration after more than 48 hours off, match the Maudsley-derived NHS guidance. The size of the dose cut was overstated and is now fixed. Nicotine replacement does not induce CYP1A2. Correct.
- delirium-agitation-20 q4: adult data. Explanation now says so. Benzodiazepine is still the best key given her seizure.
- delirium-agitation-21 q2: lorazepam 1 mg IV for a 60 kg woman of 72 with withdrawal delirium and hallucinations is within usual practice. No change.
- delirium-agitation-24 q1: the key holds as "contributors". The AASLD/EASL 2014 guideline lists constipation among precipitants and discusses benzodiazepines as precipitants. EASL published an updated HE guideline in 2022. Lactulose remains first line there. No change needed.
- delirium-agitation-25 q3: CCQ article 13 says consent is still required where care is "unusual or has become useless or where its consequences could be intolerable". Primary PCI for an anterior STEMI is standard care, not unusual. The reading is reasonable. Physician to confirm.
- delirium-agitation-28 q3 and q4: propranolol 20 mg PO is within Maudsley's range for akathisia. The key holds among the options given. See the olanzapine fix above.
- delirium-agitation-30 q3: risperidone 0.25 mg twice daily is a standard start. In Canada, risperidone is the only antipsychotic with an indication for aggression in severe Alzheimer dementia. That supports the key.
- delirium-agitation-33 q2: the CMPA guide (4th edition, revised October 2024) says: "In cases of medical emergency when the patient (or substitute decision maker) is unable to consent, a physician has the duty to do what is immediately necessary without consent." The application is sound.
- delirium-agitation-34 q1: 4AT recomputed. Alertness 0. Two AMT4 errors (year, place) give 2. Eight months backward (December to May) give 0. Acute change gives 4. Total 6. Correct.
- delirium-agitation-36 q3: Gerson says lorazepam should be used for intoxication with an unknown substance, with 0.5 to 2 mg per dose (0.05 to 0.1 mg/kg). 2 mg for 55 kg is correct.
- delirium-agitation-37 q1: Taylor 2017 used midazolam 5 mg plus droperidol 5 mg IV against droperidol 10 mg or olanzapine 10 mg IV. There were fewer extra doses and no difference in adverse events. Correct.
- delirium-agitation-37 q2: capnography is not in Knox. It is standard for deep sedation. The key holds. Low concern.

## Statutes checked against official text

- BC Health Care (Consent) and Care Facility (Admission) Act, s 12(1)(a) to (d), s 16(1) to (3) and s 19(1) to (3), read on BC Laws. delirium-agitation-23 matches: the list order, the 12-month contact rule, the PGT fallback, the emergency conditions including the second provider "where practicable", and the TSDM duties.
- BC Mental Health Act, s 22(1) to (5) and s 28(1), read on BC Laws. delirium-agitation-27 q3 matches. The Act now also lets a nurse practitioner complete a certificate. The keyed option says "physician", which is still true.
- Nova Scotia Personal Directives Act, s 2 ("nearest relative", "spouse") and s 14, read in the official consolidated PDF (nslegislature.ca). "Spouse" means a person cohabiting in a conjugal relationship as married spouse, registered domestic partner or common-law partner, and the spouse ranks first. delirium-agitation-24 q3 is correct. Section 14 is "subject to the Hospitals Act".
- Civil Code of Québec, articles 13 and 15, English text. delirium-agitation-25 q2 and q3 match.

## Sources verified

- Gerson R et al. 2019 pediatric BETA, full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC6404720/ (doses, oral before IM, ketamine not recommended, extra dose of standing medication in autism, benzodiazepine disinhibition)
- Lejuste F et al. 2016 abstract (Europe PMC, PMID 27606355): an adult cohort of 111
- Taylor DM et al. 2017 abstract (Europe PMC, PMID 27745766)
- Lee JY et al. CUA guideline, management of ureteral calculi, 2021: https://doi.org/10.5489/cuaj.7581, full text PDF at https://www.cua.org/system/files/Guideline-Files/7581_v4.pdf
- CMPA consent guide: https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians
- BC HCCA: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96181_01
- BC MHA: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01
- NS Personal Directives Act: https://nslegislature.ca/sites/default/files/legc/statutes/personal%20directives.pdf
- Civil Code of Québec articles 13 and 15, via Légis Québec and CanLII search results: https://www.canlii.org/en/qc/laws/stat/cqlr-c-ccq-1991/latest/cqlr-c-ccq-1991.html
- Pregabalin renal dosing table in the prescribing information: https://labeling.pfizer.com/showlabeling.aspx?id=561
- Clozapine and smoking cessation (Maudsley-derived NHS guidance): https://www.oxfordhealthformulary.nhs.uk/docs/Smoking%20and%20cessation%20effetcs%20on%20psychotropics%20and%20other%20medications_DTG%20approved%20Dec%202023.pdf
- Other citations (CCSMH 2014, ATA 2016, Graus 2016, Soyka 2017, CAM 1990, Inouye 2006, BETA 2012 papers, Vilstrup 2014, Gallagher 2007, Bergink 2016, Warrington 2006, CCHR 2001, Bellelli 2014, Tieges 2021, Bosch 2009, Beers 2023, Appelbaum 2007) name a real author or body, work and year. Their claims were checked against my own knowledge of the content, not re-read in full. The Maudsley book could not be checked online.

## Overlap with the bank

- delirium-agitation-39 and delirium-agitation-40 in review-extra.ts are word-for-word copies of delirium-agitation-23 and delirium-agitation-31, apart from the two planted defects. They must not be added to the bank. After the fixes, a field-by-field comparison shows they differ from their twins only in id.
- delirium-agitation-35 repeats the infected obstructed stone and urgent decompression teaching of s12 infectious-diseases (write-in) and s01 abdominal-pain (write-in). The delirium and capacity framing is new, but q1 teaches the same point. Flagged, not rewritten.
- Within the batch, "intact attention and orientation argue against delirium" is taught four times: delirium-agitation-22 q4, delirium-agitation-30 q1, delirium-agitation-36 q1 and delirium-agitation-38 q1. It is also in s08 "Shouting in the waiting room". Recommend recasting two of these on another key feature 1 angle.
- delirium-agitation-20 q1 and delirium-agitation-27 q4 both teach "seizure and neurological signs mean a medical cause, not psychosis". The same point is in s08 "Strange behaviour with a headache". Low concern.
- delirium-agitation-23 overlaps s08 "Wanting to go home with a fever" (Ontario HCCA: SDM, emergency treatment, SDM principles). The statute differs, so the teaching differs. Low concern.
- delirium-agitation-28 q1 (restraint monitoring) and delirium-agitation-29 q4 (debrief after violence) overlap s08 "Running through traffic" and "Quiet after the struggle". Low concern.
- delirium-agitation-26 q2 (morphine metabolites with kidney injury) is close to s32 loc "Hard to rouse after hip surgery". delirium-agitation-34 q4 (fluids for rhabdomyolysis) is close to s53 tox "Agitated man brought in by police after a struggle". Low concern.
- No overlap found in s22 (the clozapine SAMP there is about sedation), s49 or s52.

## Needs physician decision

- delirium-agitation-19 q3: "potassium iodide 5 drops PO" is SSKI, which the ATA 2016 guideline uses. SSKI is not a marketed product in Canada. Lugol solution is dispensed instead. Consider rewording to Lugol solution. That would change the alphabetical key position, so it was not done in review.
- delirium-agitation-25 q3: whether primary PCI in an 88-year-old with dementia could be "unusual" care under CCQ article 13.
- delirium-agitation-28 q4: in Canadian emergency practice, many physicians treat acute akathisia first with diphenhydramine or a benzodiazepine. None is offered, so propranolol stands, but the physician may prefer an option set that shows this.
- delirium-agitation-33 q3: "olanzapine plus lorazepam IM" gives no doses, unlike the other options. Adding doses breaks the 2.1 length ratio. Lens B may want to rework it.
- delirium-agitation-35: overlap with s12 and s01 (above). Decide whether to recast q1.
- delirium-agitation-21 q2: lorazepam 1 mg IV at 72 is a judgment dose (writer doubt). I agree with it.

## Summary

- 15 fixes in 13 SAMPs, plus 2 in review-extra.
- By category: 2 planted defects in review-extra (1 wrong key, 1 invented lab fact). 5 false or unsupported reasons for rejecting a distractor (18 q3, 36 q3, 28 q4, 24 q1, and 26 q2 with no reason). 1 case that could not support its key (18 q3). 1 non-Canadian standard (28 q1). 1 non-Canadian source replaced (35). 1 overstated dose statement (17 q3). 1 defensible distractor (23 q4 and 39 q4). 1 overlap rebuild (32 q1). 3 wording and precision fixes (20 q4, 27 q2, 37 q1).
- Key changes: 2 (delirium-agitation-39 q1 corrected, delirium-agitation-32 q1 rebuilt).
- Gates: `npx tsc --noEmit -p .` shows no s34 errors. `SAMP_BATCH=s34 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 528 of 528.
- SAMP ids with a defect: delirium-agitation-17, delirium-agitation-18, delirium-agitation-20, delirium-agitation-23, delirium-agitation-24, delirium-agitation-26, delirium-agitation-27, delirium-agitation-28, delirium-agitation-32, delirium-agitation-35, delirium-agitation-36, delirium-agitation-37, delirium-agitation-39, delirium-agitation-40. Flagged without an edit: delirium-agitation-19, delirium-agitation-22, delirium-agitation-25, delirium-agitation-30, delirium-agitation-33, delirium-agitation-38.
