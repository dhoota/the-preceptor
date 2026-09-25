# Sweep 2 review: writer sw2-d

Independent review of four rebuilt SAMPs: abuse-domestic-18 (s20), anaphylaxis-42 (s23), eye-25 (s37) and infectious-diseases-28 (s41). Both lenses were applied. Writer's report: docs/reviews/samps-sweep2-sw2-d.md. All four stay reviewed: false. Nothing was committed.

## Verdicts

| SAMP | Verdict | What changed |
|---|---|---|
| abuse-domestic-18 | fixed | Questions reordered so each key feature matches HEAD. The imaging result update was removed because it gave away the transaminase key in mock mode. "Normal enzymes" corrected. Ontario source URL now points to the guide PDF. |
| anaphylaxis-42 | fixed | TREKK citation updated from version 2.2, 2025 to version 2.3, 2026, the current English version. Content unchanged. |
| eye-25 | fixed | A false claim was removed. It said timolol has none of the systemic effects of the other drugs. |
| infectious-diseases-28 | fixed | The MAP explanation overstated the evidence. It now says the 60 to 65 mmHg suggestion is conditional, rests on low certainty evidence and draws mainly on one trial. |

## Question by question

| SAMP | Q | Key feature (HEAD, now) | Verdict | Finding |
|---|---|---|---|---|
| abuse-domestic-18 | q1 | KF2, KF2 | fixed | The rebuild had put the transaminase question here as KF3. It is now the pattern question, asked before imaging. Key: mechanism too minor for his signs. Sowrey 2013 checked on PubMed: 20 of 32 abusive, 6 of 6 under age 2. |
| abuse-domestic-18 | q2 | KF3, KF3 | fixed | Transaminase question moved here. AST 64 and ALT 52 are above the normal range for a toddler, so "normal enzymes" was false. Now "enzymes below that cutoff". Lindberg 2009 checked: 80 IU/L cutoff, sensitivity 77%, specificity 82%. |
| abuse-domestic-18 | q3 | KF3, KF3 | fixed | CT question moved here. Its content is unchanged. ACR 2025 variant 5 checked: CT abdomen and pelvis with IV contrast usually appropriate, ultrasound usually not appropriate, radiography of the area may be appropriate with disagreement. The old q3 update named a duodenal hematoma. That told a mock-mode reader that injury was present, which gave away the transaminase key. It was removed. |
| abuse-domestic-18 | q4 | KF6, KF6 | pass | Wording checked against the MCCSS guide (2022 PDF) and CYFSA s.125. Report immediately and directly. Do not rely on anyone else, s.125(3). All societies give emergency service 24 hours a day. Call police if urgent and the society cannot be reached. The ontario.ca web page (updated April 2026) lacks the 24 hour line, so the URL now points to the PDF. |
| anaphylaxis-42 | q1 | KF3, KF3 | pass | TREKK checked: 0.01 mg/kg, minimum 0.1 mg, maximum 0.5 mg, 1 mg/mL. No IV bolus. No first generation antihistamines. 8 kg x 0.01 = 0.08 mg, so 0.1 mg is right. |
| anaphylaxis-42 | q2 | KF4, KF4 | fixed | TREKK checked: 0.15 mg autoinjector under 15 kg "given the lack of a suitable alternative in Canada". Urgent allergist referral under 1 year. Cetirizine rarely needed. Steroids may raise biphasic risk in children. The citation version was updated. |
| anaphylaxis-42 | q3 | KF4, KF4 | pass | CPS 2021 checked: once introduced, keep regular ingestion "a few times a week". |
| eye-25 | q1 | KF5, KF5 | pass | Microhyphema is seen only on slit lamp. Distractor reasons are true. |
| eye-25 | q2 | KF3, KF3 | pass | Pinhole acuity is sound. Kanclerz 2024 checked on Crossref. |
| eye-25 | q3 | KF5, KF5 | fixed | EyeWiki (updated September 2026) names topical aqueous suppressants (beta-blockers and alpha agonists) as first line. Acetazolamide and mannitol are for when topical treatment fails. The claim that timolol has no systemic effects was false and was removed. |
| eye-25 | q4 | KF2, KF2 | pass | EyeWiki: no ASA or NSAIDs, and rebleeding usually within 5 days. Both match. |
| infectious-diseases-28 | q1 | KF1, KF1 | pass | SSC 2026: antimicrobials immediately, ideally within 1 hour, for possible, probable or definite septic shock. |
| infectious-diseases-28 | q2 | KF8, KF8 | pass | SSC 2026 suggests MDR cover when risk is high. Previous infection with the pathogen is a listed risk factor. Vancomycin 25 mg/kg x 88 kg = 2200 mg. Every distractor leaves MRSA uncovered. |
| infectious-diseases-28 | q3 | KF2, KF2 | fixed | SSC 2026 does state it: for adults 65 or older, "suggest an initial MAP range of 60-65 mm Hg over higher ranges", conditional, low certainty. The writer's "a lower target was linked to lower mortality" overstated the 65 trial, which found no significant mortality difference. Now corrected. |

## Overlap

The whole bank was searched for duodenal injury, transaminases, cork, microhyphema, pinhole, timolol, egg, autoinjector dose, prosthetic joint and MAP range. The only match is s45 multiple-trauma, a handlebar duodenal hematoma. That case is accidental and tests other decisions. abuse-domestic-20 in s20 also teaches the 80 U/L transaminase screen. It keys ordering the test. abuse-domestic-18 keys reading a value below the cutoff. No copy found.

## Checks

- SAMP_BATCH=s20, s23, s37 and s41 with tests/samps.test.ts and tests/samp-quality.test.ts: 488, 679, 496 and 699 passed.
- npx tsc --noEmit -p .: clean.

## For the physician

- infectious-diseases-28 q3: the 60 to 65 mmHg range for age 65 or older is a real SSC 2026 statement, but it is a conditional suggestion on low certainty evidence. Plus or minus 5 mmHg around 65 also fits the strong recommendation, so the key holds either way.
- infectious-diseases-28 q2: the vancomycin loading dose and the choice of ceftriaxone as partner are not in SSC. Each question can cite only one source. Vancomycin plus cefepime would also be reasonable and is not offered.
- abuse-domestic-18 q4: calling police is rejected because the guide keeps police for when the society cannot be reached. Some physicians might call both when a baby is at home overnight with the suspected person. Please confirm.
- abuse-domestic-18 q1 now comes before imaging. Its explanation says the signs suggest an injury "such as" a duodenal hematoma. That is inference, and the Sowrey figures apply to duodenal injury.
- abuse-domestic-18 q2: the key "Abdominal injury remains possible" is hedged. Two distractors are also probabilistic ("unlikely", "likely"), so it is not the only hedged option. It was left as is.
- eye-25 relies on EyeWiki, an AAO-hosted peer-edited resource, not a formal guideline. It is adequate for first-line topical treatment. No Canadian hyphema guideline was found.
