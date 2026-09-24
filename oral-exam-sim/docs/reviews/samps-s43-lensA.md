# SAMP review, batch s43 (lacerations), Lens A: clinical truth

Lens: A (clinical truth). Scope: every SAMP in `src/samps/s43/lacerations.ts` (lacerations-16 to lacerations-38) and `src/samps/s43/review-extra.ts` (lacerations-39 and lacerations-40). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s43` prints nothing. `SAMP_BATCH=s43 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 464 passed, 0 failed. The count fell from 468 because lacerations-16 now has 3 questions.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| lacerations-16 | q4 | whole question, stem, sources | Repeated the teaching of infectious-diseases (s41, cat bite) q4 almost word for word: last booster 12 years ago, no adult pertussis dose, Tdap alone. burns (s26) q2 teaches the same row. Question removed. The stem sentence on adult pertussis and the unused CIG source were removed. The SAMP keeps 3 questions. | high |
| lacerations-17 | q2 | whole question | Repeated lacerations-08 q1 (s13) and the s02 analgesia item: maximum volume of 1% lidocaine with epinephrine at 7 mg/kg. Rebuilt as a new question on how to give DTaP-IPV and tetanus immune globulin together (separate needles, syringes and sites, TIg deep IM, not infiltrated into the wound and not IV), from CIG Table 1 footnote b. Key feature 4. | high |
| lacerations-17 | q1 | explanation | Gave away the new q2 answer (separate sites and syringes). Sentence trimmed. | medium |
| lacerations-17 | q4 | explanation | Said thigh sutures stay about 7 to 10 days. AAFP 2017 gives 10 to 14 days for the legs. Now 7 to 14 days. | low |
| lacerations-18 | q1 | source, explanation | Used a UK guideline (NICE NG225) where a current Canadian one exists. Re-cited to the CPS practice point on suicidal ideation and behaviour (Korczak 2015, reaffirmed 2024), which says to interview the adolescent alone and ask whether self-harm is made with suicidal intent. The CPS also advises collateral from parents, so the reason given for rejecting "Ask her mother" now says her collateral is useful later but she did not see the injury. NICE NG225 stays for q3 (psychosocial assessment before discharge), which the CPS text does not address as directly. | medium |
| lacerations-21 | q1 | source | Cited the 2017 ACC/AHA/HRS syncope guideline, although a Canadian source exists. Re-cited to the CCS clinical practice update on syncope (Sandhu 2020). The US source was removed from the map. | medium |
| lacerations-28 | q1 | explanation | Said that climbing the chair "does not explain a period of drowsiness". A fall from a chair with a head strike can cause drowsiness, so the stated reason was false. Rewritten: climbing supports a simple fall but does not account for a lateral tongue bite. | medium |
| lacerations-28 | q3 | source, explanation | The writer queried this one. The only support was Roberts and Hedges, and the explanation said prophylaxis "is not recommended". Re-cited to a Canadian systematic review (Gonsalves 2022, Paediatr Child Health). It found no infections in 142 reported tongue lacerations and judged them very low risk of infection in otherwise healthy people. Key (no antibiotics) unchanged. | medium |
| lacerations-29 | stem, q1, q2 | stem, explanation | The writer queried this one. The key (vaccine plus TIg) depended on treating rituximab as the "humoral immune deficiency" in the CIG. The CIG gives HIV, agammaglobulinemia and hypogammaglobulinemia as examples and does not name rituximab. The stem now records hypogammaglobulinemia with IgG 4.2 g/L, so the case meets the CIG wording and the key holds. The explanations were updated to match. | high |
| lacerations-34 | q1 | explanation, source | Said the wrinkle test needs soaking "for several minutes". The accepted time is about 30 minutes, and Grinbaum 2022 found up to 40 minutes is sometimes needed. Corrected. The writer queried Rosen as the source. Re-cited to Tindall 2006 (Emerg Med J), a paper on this test in children and uncooperative patients. Rosen stays for q2. | high |
| lacerations-39 (extra) | q1 | key | Keyed index 3 "Cephalexin for 5 days". The explanation says cephalexin has poor Pasteurella activity and argues for amoxicillin-clavulanate for 3 to 5 days. Key changed to index 1. | high |
| lacerations-40 (extra) | q2 | explanation | Ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." No lactate is in the case, and a lactate does not decide the timing of antibiotics. Sentence removed. | high |

## Key changes

- lacerations-39 q1 (review-extra.ts): before index 3 "Cephalexin for 5 days", after index 1 "Amoxicillin-clavulanate for 3 to 5 days". Reason: IDSA 2014 preemptive amoxicillin-clavulanate for dog bites in advanced liver disease or edema. The explanation already taught this.
- lacerations-17 q2: this question was rebuilt, not rekeyed. The old key was "12.6 mL". The new key is index 3 "Separate syringes at separate sites".
- lacerations-16 q4 removed (old key "Tdap vaccine alone").

No other key in the main batch file changed.

## Items checked and found correct

- Tetanus rows against the CIG tetanus toxoid chapter (page modified 3 June 2026). Table 1 was read on the page.
  - lacerations-17 q1: no doses, not a clean minor wound, age under 7. Toxoid plus TIg, with DTaP-IPV as the product under 7. Correct.
  - lacerations-29 q2: humoral immune deficiency, not a clean minor wound. TIg plus toxoid, whatever the time since the last booster. Correct once the stem gives the hypogammaglobulinemia.
  - lacerations-31 q4: 3 or more doses, last dose 4 years ago. Nothing is needed for any wound. Correct.
  - lacerations-33 q3: 3 or more doses, 5 to 10 years, not clean and minor. Toxoid without TIg. He has had adult Tdap, so Td is suitable, and Td Adsorbed is still listed as authorized. Correct.
  - lacerations-23 q3: booster 2 years ago, so no vaccine. Correct.
  - TIg dosing in the CIG: 250 units IM from age 7, 4 units/kg or the whole 250 unit vial under 7. No SAMP in s43 keys a TIg dose.
- lacerations-25: the EAST 2012 wording is ABI below 0.9 (patients with abnormal examination findings or an ABI below 0.9 need further evaluation, with CT angiography as the study of choice). The explanation says below 0.9, and 0.82 meets any version.
- lacerations-18 q2, lacerations-29 q1 and lacerations-36 q1 and q2: Quinn 2014 abstract confirmed (2663 patients at three EDs, diabetes RR 2.7, lower extremity RR 4.1, contamination RR 2.0, length over 5 cm RR 2.9, no difference before or after 12 hours).
- lacerations-24 q2: Courter 1990 used chicken legs, and two-view films found 2 mm glass 99% of the time. The explanation's "animal tissue model" is accurate.
- lacerations-26 q2: Davis 2015 pooled sensitivity 72% and specificity 92%. Correct.
- lacerations-19 q2: IV doxycycline is now sold in Canada (SteriMax Doxycycline for Injection USP, Health Canada authorization 28 October 2025), so the keyed regimen is available.
- lacerations-22 q4: ear helix sutures are commonly removed at 4 to 5 days, so the 14 day distractor is wrong. The earlobe range is longer, but the wound is through the helix.
- lacerations-17 q2 (old version) arithmetic before the rebuild: 7 x 18 = 126 mg = 12.6 mL. It was correct, only duplicated.
- lacerations-23 q1, q2: IDSA 2014 recommends preemptive therapy for advanced liver disease and edema, and advises against primary closure of bites except on the face. Consistent.

## Overlap with the rest of the bank

The trigram stem gate passes. These repeat another SAMP's scenario or teaching point.

- lacerations-36 q3 (delayed closure at 3 to 5 days of a contaminated shin wound in a patient with diabetes) vs lacerations-07 q2 (s13, farmer's shin with manure, diabetes, delayed closure at 3 to 5 days). Same teaching point. The writer kept it for the contrast with the forehead in q2. Not rewritten. Physician decision.
- lacerations-36 q1 and lacerations-29 q1 are both menus on Quinn 2014 infection risk factors within this batch, and lacerations-02 q1 (s13) asks the same. Three versions of one teaching point.
- lacerations-23 (dog bite with a host risk factor, preemptive amoxicillin-clavulanate for 3 to 5 days, wounds left open, rabies handled by observing the dog) vs lacerations-02 (s13, dog bite in a woman with diabetes: the same antibiotic plan, bite wounds left open and a 10 day dog observation). Close in teaching. lacerations-11 (s13, cat bite, asplenia) is related.
- lacerations-31 q4 (3 or more doses, last dose under 5 years, tetanus-prone wound, nothing needed) repeats infectious-diseases in s41 (dog bite while travelling, q4, booster 3 years ago, nothing needed). The child product point (DTaP-IPV vs Tdap) is the only new part.
- lacerations-18 q1 (parallel, evenly spaced cuts point to self-harm) vs suicide-risk-31 q1 (s52, parallel cuts across the wrist suggest a self-inflicted wound). Similar teaching point. The key step differs (ask her alone).
- lacerations-24 q2 (radiographs for glass before closure) vs lacerations-08 q4 (s13, glass of 2 mm or more shows on plain films). Similar. Low.
- lacerations-37 (nail into the MCP joint, washout) vs lacerations-10 (s13, glass into the knee joint). Related. Different joint and mechanism. Low.
- lacerations-39 is a verbatim copy of lacerations-23, and lacerations-40 is a verbatim copy of lacerations-31. Neither can join the bank. They were fixed above only so that the file is not left wrong.
- No overlap found with s29 open fractures (lacerations-31 tests antibiotic timing, s29 tests the choice of drug) or with s22 local anesthesia beyond the lidocaine item already rebuilt.

## Sources verified

- Public Health Agency of Canada. Canadian Immunization Guide, tetanus toxoid. Page modified 3 June 2026. Table 1 with footnotes, the humoral immune deficiency statement, TIg dosing and the list of authorized products were read with WebFetch. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html
- Korczak DJ, CPS. Suicidal ideation and behaviour. Paediatr Child Health. 2015, reaffirmed 11 January 2024. Read on the CPS page. https://cps.ca/en/documents/position/suicidal-ideation-and-behaviour
- Sandhu RK and colleagues. CCS clinical practice update on syncope. Can J Cardiol. 2020. Metadata and abstract from Europe PMC. https://doi.org/10.1016/j.cjca.2019.12.023
- Gonsalves CL and colleagues. Tongue lacerations systematic review. Paediatr Child Health. 2022. Abstract from Europe PMC. https://doi.org/10.1093/pch/pxab044
- Tindall A, Dawood R, Povlsen B. The skin wrinkle test. Emerg Med J. 2006. Abstract from PubMed E-utilities. https://doi.org/10.1136/emj.2005.031377
- Grinbaum E and colleagues. Optimal duration for the wrinkle test. Sci Rep. 2022. Used to check the soak time, not cited in the SAMP. https://doi.org/10.1038/s41598-022-13083-7
- Quinn JV, Polevoi SK, Kohn MA. Emerg Med J. 2014. Abstract from PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/23314208/
- Courter BJ. Ann Emerg Med. 1990. Abstract from PubMed E-utilities. https://pubmed.ncbi.nlm.nih.gov/2393187/
- Fox N and colleagues. EAST 2012. Abstract from PubMed E-utilities, and the recommendation wording from the EAST guideline page. https://www.east.org/education-resources/practice-management-guidelines/details/penetrating-lower-extremity-arterial-trauma,-evaluation-and-management-of
- Davis J and colleagues. Acad Emerg Med. 2015. Abstract from Europe PMC. https://doi.org/10.1111/acem.12714
- ACS TQIP orthopaedic trauma best practices 2015. The 60 minute target was confirmed through search results and the ACS case study page. https://www.facs.org/media/mkbnhqtw/ortho_guidelines.pdf
- Forsch RT and colleagues. Laceration repair: a practical approach. Am Fam Physician. 2017. Used to check suture removal times. https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html
- SteriMax. Doxycycline for Injection USP product monograph, authorized 28 October 2025. https://pdf.hres.ca/dpd_pm/00082259.PDF
- IDSA 2014 SSTI (Stevens) and ISTAP 2018 (LeBlanc) were not re-read. The writer read their full text, and the claims used match standard teaching. The textbooks (Roberts and Hedges 7th ed, Tintinalli 9th ed, Rosen 10th ed) could not be fetched.

## Needs physician decision

- The overlap list above, especially lacerations-36 q3, lacerations-23 and lacerations-31 q4. A physician should decide whether to rewrite or drop them.
- lacerations-18 q3 keys a psychosocial assessment by mental health staff before discharge, following NICE NG225. In many Canadian EDs the emergency physician assesses a low risk adolescent and arranges urgent follow-up. That fits suicide-risk key feature 4, and "Urgent referral to her family doctor only" is close to it. Low confidence flag.
- lacerations-28 q2 keys repair of a 2.5 cm full thickness gaping tongue laceration. Gonsalves 2022 found the indications for repair inconsistent and good outcomes with either approach. The textbook indications support the key.
- lacerations-23 q2: IDSA 2014 advises against closing non-facial bites, but newer trials support closing selected dog bite lacerations. The cirrhosis and leg edema make "leave open" the safer key.
- lacerations-29: rituximab alone, without a measured low IgG, is not named by the CIG. The stem now supplies the hypogammaglobulinemia. A physician may prefer another stem fact.

## Summary

- 12 fixes in 9 SAMPs. By category: 2 duplicate teaching points removed or rebuilt (lacerations-16 q4, lacerations-17 q2), 4 false or unsupported explanation statements (lacerations-17 q4, lacerations-18 q1, lacerations-28 q1, lacerations-34 q1), 1 stem fact added so the key meets the guideline (lacerations-29), 4 source replacements (lacerations-18 q1 UK to CPS, lacerations-21 US to CCS, lacerations-28 q3, lacerations-34 q1), 1 answer leak removed (lacerations-17 q1), and in review-extra 1 key change (lacerations-39 q1) and 1 invented stem fact removed (lacerations-40 q2). Some rows cover more than one category.
- Most serious: lacerations-39 q1 keyed against its own explanation. lacerations-40 q2 relied on an invented lactate. lacerations-29 keyed TIg on a label of immune deficiency the CIG does not give for rituximab. lacerations-16 q4 and lacerations-17 q2 duplicated items already in the bank.
- SAMP ids with a defect: lacerations-16, lacerations-17, lacerations-18, lacerations-21, lacerations-28, lacerations-29, lacerations-34, lacerations-39, lacerations-40. Overlap flags: lacerations-18, lacerations-23, lacerations-24, lacerations-29, lacerations-31, lacerations-36, lacerations-37, lacerations-39, lacerations-40.
