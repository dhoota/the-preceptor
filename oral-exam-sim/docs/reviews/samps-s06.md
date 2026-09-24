# SAMP batch s06 review

Adversarial review of the 30 SAMPs in batch s06. Topics are common fractures and MSK injury (msk-01 to msk-15) and continuous quality improvement (cqi-01 to cqi-15). Every dose was recomputed. Every key was read as an examiner would mark it, and sample candidate lines were run through the matcher. The matcher is now negation aware. So the review also added the unacceptable answers the key should always have had, and added negative wordings ("no barcode", "do not elevate") where a correct answer is naturally written as a negative. All SAMPs keep `reviewed: false`.

Before this review, five CQI SAMPs failed validation. Key items whose text starts with "No" ("No critical value notification", "No tamper seal") no longer matched their own text under negation handling. All now pass.

## Common fractures and MSK injury

### msk-01. Fall from a ladder
Verdict: Corrected
- q3 unacceptable answers. Before: only weight bearing as tolerated. After: also rejects a circumferential or below knee cast while the swelling is still evolving.
- Checked and correct: about 10 percent lumbar fracture rate with calcaneal fracture. CT of the thoracolumbar spine for midline tenderness.

### msk-02. Twisting injury on the soccer field
Verdict: Corrected
- q2 prompt. Before: "List TWO ways the films could be hiding an unstable injury, or TWO steps to uncover it". This mixed injuries and actions in one key. After: "List TWO steps to uncover it". The syndesmosis and deltoid items are now actions (squeeze and external rotation tests, measure the medial clear space and compare sides).
- q3 unacceptable answer. Before: any line with "tensor" was rejected, so "posterior splint wrapped with a tensor" scored zero. After: only "tensor alone", "tensor only", air cast or air stirrup are rejected.
- q3 key. Before: "cast" counted as a splint. A circumferential cast on an acute unstable ankle is not what the key wants. After: removed.
- Ottawa ankle rule application checked. Posterior medial malleolar tenderness plus inability to bear weight meets the ankle rule. The foot rule is negative.

### msk-03. Shoulder pain after a night at home
Verdict: Accurate
- Posterior dislocation signs, mechanisms and associated injuries checked. No change.

### msk-04. Forearm pain after a fall down stairs
Verdict: Corrected
- q2 key feature. Before: msk 2 (injury pattern suggests cause). The question is about how to respond to suspected intimate partner violence. After: abuse-domestic 4 (private, nonjudgmental setting). The SAMP already lists abuse-domestic in alsoTopics. msk 2 is still tested by q1.
- q2 key. Added an item for a child protection report when children are exposed, where provincial law requires it. Several provinces treat exposure to family violence as grounds.
- q2 unacceptable answers. Added "mandatory reporting" style wording. Adult intimate partner violence is not generally reportable to police without consent in Canada.
- q2 explanation rewritten to separate adult reporting (consent needed) from child protection duties.

### msk-05. Adolescent with knee pain and a limp
Verdict: Corrected
- q2 explanation. Before: "Transient synovitis and septic arthritis present with an effusion". A hip effusion is not a bedside finding. After: they do not displace the epiphysis on films, and septic arthritis usually causes fever.
- Dangerous flags checked. Weight bearing as tolerated and closed reduction are both correctly flagged dangerous in SCFE. Candidates who write "no closed reduction" are no longer caught by the flag.

### msk-06. Wrist pain after a snowboard fall
Verdict: Corrected
- q2 unacceptable answer. Before: any line with "tensor" was rejected, so "thumb spica with tensor" scored zero. After: only "tensor only" or "tensor alone".
- MRI as the best early test for occult scaphoid fracture checked.

### msk-07. Knee pain after a fall at a care home
Verdict: Corrected
- q2 source. Before: the Ontario hip fracture quality standard, which does not clearly address imaging for an occult fracture. After: NICE CG124, which says to offer MRI when a hip fracture is suspected despite negative films, and to consider CT if MRI is not available within 24 hours.
- q2 explanation. Before: "Up to a few percent". After: "A small but important share", since published rates vary widely.
- q3 key. Added "no benzodiazepine" and "no sedative" wordings for delirium prevention.
- Hip fracture standard citation updated to "Health Quality Ontario (now Ontario Health) ... 2017, updated 2024".

### msk-08. Deformed ankle after a slip on ice
Verdict: Corrected
- q4 explanation, tetanus. Before: "His last booster was over 10 years ago, so give tetanus toxoid". An open fracture is a tetanus prone wound, and the Canadian Immunization Guide threshold for those is 5 years. After: says so. The answer does not change for this patient.
- q4 unacceptable answers. Added closing the wound in the ED (suture, staple, primary closure). "Do not suture" is not caught.
- Cefazolin recomputed. 90 kg, so 2 g IV. Correct.
- Reduction before films for a threatened foot checked.

### msk-09. Knuckle cut after a night out
Verdict: Corrected
- q2 unacceptable answers. Added primary closure (suture, steri strips, tissue glue, staples). "Do not suture" and "leave open" still score.
- q4 key. Before: ampicillin sulbactam was a main answer. It is the usual American choice but it is not marketed in Canada. After: IV amoxicillin clavulanate added first (available in Canada since 2020). A carbapenem and cefoxitin are also accepted. Ampicillin sulbactam is still accepted "where available".
- q4 unacceptable answers. Before: only "cefazolin alone" or "cefazolin only". A plain "cefazolin 2 g IV" line was not flagged. After: any cefazolin line is flagged. Cefazolin misses Eikenella.
- q4 explanation now names Canadian availability.

### msk-10. Increasing leg pain after admission
Verdict: Corrected
- q2 unacceptable answers. Added "elevate the limb" and "apply ice". Elevation lowers perfusion pressure in compartment syndrome.
- q2 key. Added "avoid elevation", "do not elevate" and "avoid hypotension" wordings.
- q3 delta pressure recomputed. Diastolic 70 minus compartment 48 is 22 mmHg, below the 30 mmHg threshold. Correct.

### msk-11. Motorcycle crash with a dressed leg
Verdict: Corrected
- q2 source. Before: EAST, which does not set weight based cefazolin doses. After: the ASHP, IDSA, SIS and SHEA surgical prophylaxis guideline (Bratzler 2013), which gives 2 g, and 3 g at 120 kg or more. 125 kg, so 3 g. The key was right.
- q2 explanation. Before: "vancomycin is reserved for severe beta lactam allergy or MRSA risk". After: clindamycin or vancomycin for severe allergy or known MRSA.
- q3 key. Before: "consider adding gram negative coverage" was an accepted element. This is a 1.5 cm wound without heavy contamination (Gustilo type II), where EAST supports cefazolin alone. After: removed, and the explanation says so.
- q3 key. Before: "traction" counted as splinting a tibial shaft fracture. After: removed.
- q3 unacceptable answers. Added closing the wound in the ED.
- q1 explanation wording. Before: "photographed and recovered". After: "photographed and covered again".

### msk-12. Child with a swollen elbow
Verdict: Corrected
- q4 key. Before: "fentanyl 30 mcg" scored without any route, although the prompt asks for drug, dose and route and the child has no IV. After: the phrase must include intranasal, nasal or IN.
- q4 doses recomputed. 20 kg. Intranasal fentanyl 1.5 mcg/kg is 30 mcg (maximum 100 mcg). Intranasal ketamine 1 mg/kg is 20 mg. Both correct.
- q4 source. Before: Rosen. After: TREKK bottom line recommendations, which give 1.5 mcg/kg intranasal, maximum 100 mcg.
- q4 explanation. Codeine is now described as contraindicated under 12 in Canada, consistent with Health Canada advice.
- Supracondylar care checked. AIN palsy, pink pulseless hand needing urgent reduction and pinning, and splinting at 20 to 40 degrees of flexion while waiting are all consistent with the AAOS guideline.

### msk-13. Infant who will not move a leg
Verdict: Corrected
- q2 source. Added the 2025 AAP clinical report on evaluating young children with fractures. It says head imaging is indicated under 6 months with a fracture suspicious for abuse, and can be considered under 1 year. That confirms the neuroimaging answer for this 4 month old.
- q3 key feature. Before: msk 2. The question is about reporting and protecting the child. After: abuse-domestic 6 (report when required, secure safety of dependants). abuse-domestic added to alsoTopics.
- q3 explanation. Before: "In Ontario and all provinces ... the duty cannot be delegated". Only the rule against delegating is Ontario specific. After: every province and territory requires a report, and in Ontario the duty is personal.

### msk-14. Elbow pain after a running fall
Verdict: Accurate
- Fat pad teaching, Essex-Lopresti and early motion checked. No change.

### msk-15. Knee that popped out and back
Verdict: Accurate
- ABI threshold checked. Below 0.9 predicts arterial injury needing imaging (Mills 2004). No change.

### Topic level
- Removed unused source constants for the Ottawa knee rule and the Canadian Immunization Guide. Neither was cited by any question.
- Every msk key feature is still tested. The coverage test passes.

## Continuous quality improvement

### cqi-01. A call from the blood bank
Verdict: Corrected
- q1 key. Added negative wordings that candidates naturally use for contributing factors, such as "no two identifier check", "no barcode", "no policy".
- q1 to q3 shared unacceptable answer "education alone". Before: any line with "education" was flagged. After: only education alone, staff education, reminders, memos and retraining.

### cqi-02. Deterioration after shift change
Verdict: Corrected
- q1 validation failure fixed. "No critical value notification" did not match its own text. Added "no critical value", "no notification", "no callback" and similar.
- q1 key. Added "not mentioned", "nobody reviewed", "no reassessment", "no escalation" wordings.
- q2 key. Before: "situation" in the patient summary item captured "situation awareness" lines, so a later correct summary line scored zero. After: removed.
- q3 disclosure framing. The correct option was split into short sentences and now describes the result as "showed his infection was more serious". The explanation now says not to speculate about whether the delay changed his outcome. This follows the Canadian Disclosure Guidelines for initial disclosure: facts known so far, regret, care plan, next steps, no speculation or blame.

### cqi-03. Patients who come back
Verdict: Accurate
- Structure, process and outcome labels and the balancing measure checked.

### cqi-04. Slow first doses
Verdict: Corrected
- q2 key. Before: qSOFA counted as a triage screening change. The 2021 Surviving Sepsis Campaign advises against qSOFA as a single screening tool. After: removed from the key and named in the explanation.
- q2 key. Before: "prompt", "page" and "bolus" were match phrases. "Prompt antibiotics" and "fluid bolus" would have scored as change ideas. After: replaced with specific phrases.
- q1 explanation. Before: "the framework used by most Canadian quality improvement programs". Not verifiable. After: "widely used".
- q3 run chart rules checked against Perla 2011. Six or more consecutive points on one side of the median is a shift. Five or more consecutive rising or falling points is a trend. Seven below the median is a shift. Correct.

### cqi-05. A drowsy patient after analgesia
Verdict: Corrected
- q2 validation failure fixed. "No barcode scanning" and "No independent double check" did not reliably match their own negative wording. Negative phrases added.
- q1 unacceptable answer. Added blaming the nurse.

### cqi-06. An order for hyperkalemia
Verdict: Corrected
- q2 validation failures fixed for four items that start with "No" or "not". Negative phrases added.
- q1 ISMP Canada Do Not Use list checked against the 2025 update. U, trailing zero and µg are on the list. Lack of a leading zero is on the list, so a leading zero (0.5 mg) is correct practice and is correctly a distractor. The key was right.
- Source updated to "2006, reaffirmed 2018, updated 2025" with the ISMP Canada URL.

### cqi-07. A binder at the triage desk
Verdict: Corrected
- q2 key. Before: the "facts" item matched any line with "fracture" or "explain". So "arrange fracture clinic follow up" was spent on the facts item and could not score as follow up. After: facts needs wording such as "missed", "final report", "disclose".
- q2 disclosure framing. Before: "A delayed diagnosis is a harm that must be disclosed". Whether harm occurred is not yet known. After: it is a patient safety incident that reached the patient and must be disclosed even before lasting harm is known. Added "avoid speculating about fault".

### cqi-08. A cluster on the hallway stretchers
Verdict: Corrected
- q2 key. Before: antimicrobial stewardship was an accepted "additional precaution". It is a prevention strategy, not an additional precaution. After: removed, and the explanation says so.
- q2 key. Before: "sign" matched "vital signs". After: "signage", "door sign".

### cqi-09. An infusion running too fast
Verdict: Corrected
- q2 key. Added "no punishment" and "not blame" wordings.
- Just culture categories checked against Marx 2001.

### cqi-10. Preparing the wrong side
Verdict: Corrected
- q2 validation failure fixed. "No site marking" did not match its own text. Negative phrases added to the image, time out, marking and communication items.

### cqi-11. An outdated medication list
Verdict: Corrected
- q1 key. Before: the word "patient" alone matched the patient interview item, so "call the patient's pharmacy" scored as an interview. "family" matched "family physician". After: the family physician item is checked first, and the patient item needs "interview" or "ask the patient".

### cqi-12. A departmental dashboard
Verdict: Accurate

### cqi-13. A delay in the resuscitation room
Verdict: Corrected
- q1 validation failures fixed. "No tamper seal" and "No backup pads" did not match their own text. Negative phrases added to restocking, checks, ownership, seal and backup items.

### cqi-14. Epigastric discomfort at triage
Verdict: Corrected
- q2 source. Before: the 2013 ACCF/AHA STEMI guideline, which has been replaced. After: the 2019 CCS and CAIC STEMI focused update (Wong et al.), which calls for an ECG within 10 minutes of first medical contact.
- q1 checked. Sharing facts and actions but not protected committee deliberations is consistent with QCIPA 2016.

### cqi-15. A new department chief
Verdict: Corrected
- q2 explanation. Added that the Apology Act, 2009 also makes an apology inadmissible in civil and administrative proceedings as evidence of fault. "Most provinces" became "Most provinces and territories".
- Apology Act wording checked. An apology does not constitute an admission of fault or liability, and is not admissible in civil or administrative proceedings or arbitration as evidence of fault. The only exception is Provincial Offences Act proceedings. The correct option is accurate.
- The Excellent Care for All Act requirement for an annual hospital quality improvement plan checked.

### Topic level
- Removed the unused WHO hand hygiene source constant.
- Canadian Disclosure Guidelines citation fixed. Before: "Being open with patients and families". After: the real subtitle "Being open and honest with patients and families", with a note that CPSI is now Healthcare Excellence Canada.

## Sources verified

- NICE CG124 Hip fracture: management. MRI if films are negative, CT if MRI is not available within 24 hours. https://www.nice.org.uk/guidance/cg124
- Ontario hip fracture quality standard, updated 2024 edition confirmed through Ontario Health pages. Surgery within 48 hours and early pain management. No URL kept because the old link redirects to a generic page.
- AAP 2025 clinical report on evaluating young children with fractures for abuse. Head imaging indicated under 6 months. Found at publications.aap.org (Pediatrics 155(2) e2024070074). URL not kept because the page blocks automated checks.
- Christian CW. The evaluation of suspected child physical abuse. Pediatrics 2015. Confirmed title and journal.
- TREKK fractures bottom line recommendations. Intranasal fentanyl 1.5 mcg/kg, maximum 100 mcg.
- Wong M, Malhotra S, Afra K. Evaluation of intravenous amoxicillin clavulanate use in two Canadian hospitals. Antimicrob Steward Healthc Epidemiol 2024. IV amoxicillin clavulanate available in Canada since 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC10897708/
- ISMP Canada Do Not Use list, 2025 update. https://ismpcanada.ca/bulletin/dangerous-abbreviations/
- Canadian Disclosure Guidelines, 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/
- Canadian Incident Analysis Framework, CPSI and partners, 2012. Confirmed.
- Ontario Apology Act, 2009, section 2. https://www.canlii.org/en/on/laws/stat/so-2009-c-3/latest/so-2009-c-3.html
- 2019 CCS and CAIC STEMI focused update. https://pubmed.ncbi.nlm.nih.gov/30760415/
- Bratzler 2013 surgical prophylaxis, Hoff 2011 EAST open fractures, McQueen 1996 compartment threshold, Mills 2004 ABI, Stiell 1994 Ottawa ankle rules, Stevens 2014 IDSA skin and soft tissue, Starmer 2014 I-PASS, Perla 2011 run chart, Donabedian 1988, Marx 2001, Langley Improvement Guide 2009 and Evans 2021 Surviving Sepsis are standard references. Details matched what I know of them. They were not refetched.

## Originality

The CFPC sample SAMP for this topic is non-traumatic low back pain. No s06 SAMP covers back pain, and no stem or option resembles the sample wording. The s06 scenarios are classic teaching cases (calcaneal fracture with spine injury, Maisonneuve, posterior dislocation after seizure, fight bite). The patients, numbers and wording are original.

## Open questions for the physician

1. Ampicillin sulbactam (msk-09 q4). I could not confirm its Canadian marketing status directly in the Health Canada Drug Product Database. A Canadian guideline and a Canadian stewardship paper say it is not available. It is kept as an accepted answer "where available". Decide whether to keep it.
2. IV amoxicillin clavulanate (msk-09 q4) is now the first listed answer. Check that it is on your formulary before teaching it as the Canadian standard.
3. Primary closure (msk-08, msk-09, msk-11) is flagged unacceptable but not dangerous. Decide whether suturing a fight bite should be dangerous, since it zeroes the whole question.
4. Elevating the limb in compartment syndrome (msk-10 q2) is flagged unacceptable, not dangerous. Same decision.
5. The 2019 CCS STEMI statement on an ECG within 10 minutes of first medical contact came from a search summary. Please confirm in the full text.
6. The intranasal ketamine dose of 1 mg/kg (msk-12 q4) is within the published range of 0.5 to 1.5 mg/kg but is not in the TREKK summary I found. Confirm your local protocol.
7. The IPV key (msk-04 q2) now includes a child protection report when children are exposed. Provincial rules on exposure to family violence differ. Check the wording for your province.
8. The ISMP Canada 2025 list was confirmed through an ISMP Canada summary. The PDF could not be read by machine. Please check it directly if you use it for teaching.

## Summary

MSK: 12 of 15 SAMPs corrected. 3 accurate. CQI: 13 of 15 SAMPs corrected. 2 accurate. There were no dose errors. The most serious problems were in the answer keys. Correct answers were rejected ("splint with tensor", "thumb spica with tensor"). Missing unacceptable answers let dangerous choices through (elevation in compartment syndrome, suturing a fight bite, plain cefazolin for a fight bite). An intranasal dose scored with no route. Five CQI SAMPs failed validation under the new negation rule. Two questions were mapped to the wrong key feature and now map to abuse-domestic. One non-Canadian drug was the main antibiotic answer. Several sources were outdated or cited for claims they do not make. All type checks and batch tests pass.
