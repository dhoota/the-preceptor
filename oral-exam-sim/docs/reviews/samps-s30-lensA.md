# Review of batch s30 (continuous quality improvement), Lens A: clinical truth

Reviewer lens: A, clinical truth. For this topic, truth includes quality and safety science: the hierarchy of effectiveness, disclosure, incident analysis, run charts and SPC, and the Canadian bodies (CPSI, now Healthcare Excellence Canada, CMPA and Accreditation Canada). Scope: `src/samps/s30/cqi.ts` (cqi-16 to cqi-35) and `src/samps/s30/review-extra.ts` (cqi-36 and cqi-37). Every question, option and explanation was read against its stem and checked against the primary source text. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| cqi-36 (extra) | q1 | correct | Key was "Disclose only to the man who saw it" (index 2), while the explanation rejects that option and argues for contacting all 37. The CMPA says no harm incidents with potential future harm require disclosure. Key restored to index 0, "Contact and offer testing to all 37". | High |
| cqi-37 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives and that has nothing to do with handover. Sentence removed. | High |
| cqi-23 | q3 | explanation | Rejected physician assessment at triage because time to assessment "already meets target". It does not. The stem gives a median of 1.4 hours, and the CAEP median target (2013, reaffirmed 2026) is 1 hour. Rewritten: the gap is small beside a 14-hour boarding median, and front-end work does nothing for access block. The key holds. | High |
| cqi-21 | q3 | source, explanation | Cited a UK source (Haslam 2022, Prep stop block) when a current Canadian one exists. The Canadian Anesthesiologists' Society Guidelines to the Practice of Anesthesia, 2026 edition, strongly recommend a pre-block pause, with side marking, in all areas where peripheral blocks are done. Source replaced. The unsourced claim that wrong-side blocks "often follow a delay or distraction" was replaced with the stem's own facts. | Medium |
| cqi-19 | q3 | explanation | Rejected "Common cause variation only" by calling a run chart trend "not common cause variation". Perla 2011, the cited source, advises against the terms special and common cause on run charts and keeps them for control charts. Reason rewritten to match the source. The key holds. | Medium |
| cqi-16 | q1 | explanation | Said the dose ran at "more than twice" the intended amount. 110/50 is 2.2 only without a weight cap, and many Canadian acetylcysteine order sets cap the dosing weight at 100 kg, which gives exactly twice. Changed to "about twice". | Low |
| cqi-34 | q1 | explanation | Said limiting cases to deaths, grading presenters and physician-only attendance "made these rounds unattractive". The stem names only the focus on individual error. Each distractor now has its own true reason, and none is part of the Ottawa model (Calder 2014). | Low |
| cqi-31 | stem, title | stem | Scenario overlap with cqi-05 (s06): both use hydromorphone 2 mg IV, a drowsy older patient, RR 6 to 7, SpO2 82 to 84% and naloxone. The teaching points differ (cqi-05 is a look-alike product error, cqi-31 is the reporting gap and trigger tools). The opioid was changed to two 5 mg doses of morphine, and the title to "Drowsy after a second dose", so the two cases no longer read as the same event. No question depends on the drug. | Medium |

## Key changes

- cqi-36 q1 (review-extra): before index 2 "Disclose only to the man who saw it", after index 0 "Contact and offer testing to all 37". The old key contradicted its own explanation, the CMPA handbook and the CDG section on large-scale disclosure. The explanation already supported the new key, so no rebuild was needed.

No key was changed in the main file.

## Duplicate content in review-extra.ts

- cqi-36 has the same title, stem, options and explanations as cqi-22. The only difference was the wrong key.
- cqi-37 has the same title, stem, options and explanations as cqi-29. The only difference was the invented lactate sentence.

Even after the fixes, neither SAMP should enter the bank. Both would fail the near-duplicate stem rule (SAMP_SPEC section 1) against cqi-22 and cqi-29. Recommendation: reject both.

## Overlap with the rest of the bank

Searched all of `src/samps/` for each scenario and teaching point (trigger tool, Pareto, control chart, second victim, insulin pen, concentrated potassium, wrong side, return visit, access block, 90th percentile, teach-back, interpreter, SBAR, read-back, substitution test, aim statement, hierarchy of effectiveness, falls, kilogram, M&M, audit and feedback, CT head rule).

- cqi-31 and cqi-05: scenario overlap, fixed above.
- cqi-23 q3 and multiple-patients (s13, the 18:00 crowding case) q2: both teach that access block drives crowding and that an inpatient overcapacity protocol treats it, while front-end measures do not. The s13 item is write-in and the cqi item is MCQ, with a different frame (quality lead reading indicators). Flagged below.
- cqi-18 q3 and multiple-patients (s13, handover case) q4: both teach read-back when a critical result arrives by phone. The s13 item adds closed-loop transfer to the next physician. Flagged below.
- cqi-21 and cqi-10: both are wrong-side procedures where a pause would have caught the error. cqi-10 teaches graded assertiveness (CUS). cqi-21 teaches the substitution test, review triage and post-analysis disclosure. Only cqi-21 q3 repeats the pause. Flagged below.
- cqi-28 q1 and cqi-11 q1: both teach the best possible medication history (interview plus one other source). cqi-11 is about admission, cqi-28 about prescribing at discharge. Low overlap. Noted only.
- Disclosure timing (do not wait for the review, the most responsible physician leads) recurs in cqi-06 q3, cqi-16 q4 and cqi-20 q2. Each adds a different angle (capable minor, death with a grieving spouse). Noted only.

No stem resembles the CFPC sample SAMPs. No item draws on recalled exam content.

## Writer's doubts, resolved

1. Benneyan 2003 (cqi-32 q1 and q2). Full text read (7 pages). It states that data outside the control limits indicate special cause variation, that special causes should be eliminated first, and that a process with only common cause variation needs a fundamental change or redesign. Both questions are supported. Perla 2011 mentions tampering in these words: people "over- or under-react to a single or most recent data point (and begin tampering, possibly making things worse)". That supports cqi-32 q3.
2. CAEP 2026 targets (cqi-23 q2). The CAEP page carries the June 2026 statement by Li, McLeod, Affleck and colleagues. It reaffirms the 2013 benchmarks: time to inpatient bed median 2 hours and 90th percentile 8 hours, and time to physician initial assessment median 1 hour and 90th percentile 3 hours. It also recommends demand-driven overcapacity protocols. q2 is correct. This check found the cqi-23 q3 error above.
3. Accreditation Canada 2021 ROP handbook. Read in full. The falls ROP applies to inpatient services, and cqi-30 makes the patient an admitted boarder, which is reasonable. Universal precautions (bed low, brakes locked, call bell within reach, S.A.F.E. with family engagement) and post-fall debriefings are in the text. Client identification, information transfer (minimum content, SBAR, read-back, teach-back, audit of effectiveness) and concentrated electrolytes (list, annual audit, exceptions) all match the SAMPs.
4. cqi-21 q3 UK source. A Canadian source exists and replaced it (see Fixes).
5. Hierarchy ranking (cqi-25 q1, cqi-28 q2). CIAF Figure 3.9 lists, from most to least effective: forcing functions and constraints, automation/computerization, simplification/standardization, reminders, checklists and double checks, rules and policies, education and information. A computerized interaction check against dispensing data is computerization, the second tier, as cqi-28 q2 says. The CT order that requires rule criteria in cqi-25 q1 is at least computerization, and every distractor ranks lower (radiologist vetting is a double check). Both keys hold.
6. cqi-35 q2. The ROP list is calcium 10% or more, magnesium sulfate above 20%, potassium 2 mmol/mL or more, sodium acetate and phosphate 4 mmol/mL or more, and sodium chloride above 0.9%. Calcium is left out of the options, which avoids the emergency cart exception. The keys (magnesium 50%, potassium 2 mmol/mL) are correct. The arithmetic for the diluted products (0.2 mmol/mL, 4%) is correct.

## Sources verified

- CPSI. Canadian Incident Analysis Framework. 2012. Full PDF read: immediate response and secure items, concise, comprehensive and multi-incident analysis with harm levels, triage questions, incident decision tree tests, "how and why the defences failed", statements of findings, hierarchy of effectiveness, close the loop, FMEA as a prospective method. https://a-ca.storyblok.com/f/850807391887861/840d08578d/canadian-incident-analysis-framework-final-ua.pdf
- CPSI. Canadian Disclosure Guidelines. 2011. Full PDF read: harmful incident replaces adverse event, no premature attribution to "a complication", near miss disclosure discretionary with the same-name example, large-scale and multi-patient disclosure, leadership role after analysis. https://a-ca.storyblok.com/f/850807391887861/904d0aadef/cpsi-canadian-disclosure-guidelines-final-ua.pdf
- CMPA. Disclosing harm from healthcare delivery. 3rd ed. 2017. Full PDF read: MRP leads, residents encouraged to take part, a healthcare translator rather than a family member, "unfair and unprofessional to speculate or blame others", addendum for corrections, "No harm incidents require disclosure", apology with acknowledgement of responsibility after analysis, avoid "negligence". https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_15_disclosure_handbook-e.pdf
- CMPA. Learning from adverse events. 2009. Triage questions confirmed. https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_learning_from_adverse_events-e.pdf
- Accreditation Canada. Required Organizational Practices: 2021 handbook. Full PDF read. https://vitalitenb.ca/images/files/documents/medecins/2021_rop_handbook.pdf
- ISMP Canada. Canadian High-Alert Medication List. 2024. Read: insulins, injectable anticoagulants including LMWH, and IV acetylcysteine as an antidote are listed. https://ismpcanada.ca/wp-content/uploads/ISMP-Canada-High-Alert-Med-List-2024-8x11-1.pdf
- ISMP Canada. Weight-based medication dose errors. 2016. Read: default to kilograms and lock out pounds, automatic transfer from scales to records. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2016-09-WeightBasedDoseErrors.pdf
- ISMP Canada. Insulin pen alert. 2013. Read: patient-specific labelled pens, transmission risk even with needle change. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2013-04_ALERT_InsulinPenHighRiskPractice.pdf
- Li MK, McLeod SL, Affleck A, and colleagues. CAEP position statement on ED overcrowding. CJEM. 2026. PMID 42437839. Targets and overcapacity recommendation read on the CAEP page. https://www.caep.ca/position-statements/emergency-department-overcrowding
- Affleck A and colleagues. CAEP 2013. PMID 24176460.
- Chartier LB and colleagues. Ontario ED Return Visit Quality Program. Ann Emerg Med. 2021. Abstract read: some 72-hour returns with admission, all 7-day returns with sentinel diagnoses (AMI, SAH, pediatric sepsis), cognitive lapses as a recurrent theme. The program is still active under Ontario Health. https://pubmed.ncbi.nlm.nih.gov/33199045/ and https://ontariohealth.ca/quality/hospital/emergency-dept-return-visit
- Ivers N and colleagues. Audit and feedback. Cochrane. 2025. Abstract read. Every claim in cqi-26 matches. The review was republished with the same abstract in June 2026 (CD000259.pub5, PMID 42325158). The 2025 citation is still accurate. https://pubmed.ncbi.nlm.nih.gov/40130784/
- Calder LA and colleagues. Ottawa M&M model. Acad Emerg Med. 2014. Abstract read: the four elements match cqi-34 q1. https://pubmed.ncbi.nlm.nih.gov/24628757/
- Scott SD and colleagues. Second victim. 2009. Abstract read: a predictable course, screen and support right after the event. https://pubmed.ncbi.nlm.nih.gov/19812092/
- Griffin FA, Resar RK. IHI Global Trigger Tool. 2nd ed. 2009. Full PDF read: M3 INR above 6, M6 vitamin K, M9 naloxone (an adverse event unless given for abuse or self-harm), M11 over-sedation or hypotension, "10 to 20 percent of errors" reported, random sampling. https://www.ihi.org/sites/default/files/IHIGlobalTriggerToolWhitePaper2009.pdf
- Benneyan JC, Lloyd RC, Plsek PE. SPC. 2003. Full text read. https://www.crohnscolitisfoundation.org/sites/default/files/2025-07/Benneyan%20et%20al_2003_SPC%20as%20a%20tool%20for%20healthcare%20research%20and%20improvement.pdf
- Perla RJ, Provost LP, Murray SK. The run chart. 2011. Full text read: shift is 6 or more, trend is 5 or more, astronomical point, a frozen baseline median, tampering, special and common cause kept for control charts. https://qi.elft.nhs.uk/wp-content/uploads/2014/08/perla_provost_murray-run-charts-analytical-tool.pdf
- Canadian Anesthesiologists' Society. Guidelines to the Practice of Anesthesia, revised edition 2026. Section 8.1 read. The 2024 edition has the same text. https://www.cas.ca/CASAssets/Documents/Practice-Resources/Guidelines/CAS_Guidelines_Anesthesia_2026.pdf

I accepted the writer's verification of Haig 2006 (SBAR) and the three Chartier QI primers (aim statements, PDSA, sustain). Their use here is standard teaching.

## Recomputed numbers (all correct)

- cqi-16: 40 x 500 mg is 20 g, or 400 mg/kg at 50 kg. 110 lb is 49.9 kg.
- cqi-19: 5 consecutive falling points is a trend. 5 points cannot make a shift.
- cqi-23: 14/2 is 7 times the target, 39/8 is about 4.9 times.
- cqi-25: 38 + 26 is 64 of 80, or 80%. 36/116 is 31%.
- cqi-31: 61 minus 44 is 17 non-overdose naloxone doses.
- cqi-32: 6.1% is above the 4.4% UCL.
- cqi-35: 20 mmol/100 mL is 0.2 mmol/mL. 2 g/50 mL is 4%.

## Needs physician decision

- cqi-36 and cqi-37 duplicate cqi-22 and cqi-29. Confirm that both are rejected.
- cqi-23 q3 overlaps multiple-patients (s13) q2 on access block and overcapacity protocols. Decide whether a different output intervention should be keyed (for example, inpatient discharge before 11:00 or weekend discharge) or whether the overlap is acceptable across topics.
- cqi-18 q3 overlaps multiple-patients (s13) q4 on critical result read-back. Decide whether to keep it or rewrite it around another SBAR or communication point.
- cqi-21 q3 repeats the pause lesson in cqi-10. It is a minor overlap.
- cqi-28 stem: the interaction was missed because the prescription was filled at another pharmacy. In provinces with a shared dispensing record (BC PharmaNet, Alberta Netcare, Saskatchewan PIP, Manitoba DPIN), the dispensing pharmacist would likely have seen the warfarin. The q2 key (check against provincial drug data) assumes such data exist but were not used at the ED. Consider naming a province or adding that the ED had no access to the provincial record.
- cqi-28 q1 cites the ROP medication reconciliation practice, which in the ED applies to patients with a decision to admit. This patient was discharged. The BPMH definition is correct, but the practice is not an accreditation requirement for this visit.

## Summary

- 8 table rows: 1 wrong key (cqi-36 q1), 1 invented stem fact (cqi-37 q2), 3 false or overstated reasons (cqi-23 q3, cqi-19 q3, cqi-16 q1), 1 UK source replaced by a Canadian one (cqi-21 q3), 1 untraceable distractor reason (cqi-34 q1) and 1 scenario overlap (cqi-31 against cqi-05).
- Most serious: the wrong key in cqi-36 q1, the invented lactate in cqi-37 q2, the fact that both extra SAMPs duplicate existing SAMPs, and the false claim in cqi-23 q3 that a 1.4-hour time to assessment meets the CAEP target.
- SAMP ids with a defect: cqi-16, cqi-19, cqi-21, cqi-23, cqi-31, cqi-34, cqi-36, cqi-37. Flagged for overlap or province only: cqi-18, cqi-28.
- Checks: `npx tsc --noEmit -p . | grep samps/s30` shows no errors. `SAMP_BATCH=s30 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 443 passed. review-extra.ts is not loaded by the suite.
