# SAMP review: batch s01

Topics: abdominal-pain and abuse-domestic. 30 SAMPs reviewed against `docs/SAMP_REVIEW_BRIEF.md`. All SAMPs keep `reviewed: false` and stable ids.

Checks run: `npx tsc --noEmit -p .` shows no errors in `samps/s01`. `SAMP_BATCH=s01 npx vitest run tests/samps.test.ts` passes (94 tests).

## Summary

The batch was clinically sound for the most part. Two keys were wrong against current Canadian guidance. AP-08 q4 keyed Rh immune globulin for a 7 week ectopic pregnancy, which the 2024 SOGC guideline now advises against. AP-04 q3 marked amoxicillin 40 to 45 mg/kg/day as wrong, but the CPS range is 40 to 90 mg/kg/day. One scoring trap was dangerous: AD-01 q2 flagged "ask the partner" as a dangerous answer, which would have zeroed a candidate who wrote "ask the partner to step out". Legal framing was made national where the stem did not name a province. Several match lists were tightened or widened.

## Abdominal pain

| SAMP | Verdict |
| --- | --- |
| AP-01 Older man with sudden flank pain | Corrected |
| AP-02 Older woman with severe periumbilical pain | Accurate |
| AP-03 Young woman with right lower quadrant pain | Corrected |
| AP-04 Child with fever and abdominal pain | Corrected |
| AP-05 Man with epigastric pain and nausea | Accurate |
| AP-06 Young woman with vomiting and abdominal pain | Corrected |
| AP-07 Confused nursing home resident | Accurate |
| AP-08 Young woman with lower abdominal pain and near syncope | Corrected. Needs physician attention |
| AP-09 Teenager with lower abdominal pain and vomiting | Accurate |
| AP-10 Infant with episodes of crying | Accurate |
| AP-11 Pregnant woman with right lower quadrant pain | Corrected |
| AP-12 Man with recurrent flank pain | Accurate |
| AP-13 Man with epigastric pain radiating to the back | Accurate |
| AP-14 Man with sudden severe epigastric pain | Accurate |
| AP-15 Older man with distension and vomiting | Accurate |

### Changes

- AP-01 q3. Before: the transfusion item accepted "O negative" but not "O positive". After: "o positive" and "group o" are accepted. Uncrossmatched group O Rh positive red cells are standard for a man. The q4 explanation now says so.
- AP-03 q1. Before: "List THREE diagnoses other than appendicitis". This framing was close to the CFPC sample appendicitis case. After: "Appendicitis is your leading concern. List THREE alternative diagnoses in her that would change your first investigations." The key is unchanged.
- AP-03 q3. Before: POCUS was accepted as the first imaging test for appendicitis. After: POCUS was removed and "transvaginal" was added. Formal ultrasound of the right lower quadrant and pelvis is the test. The candidate can still override the mark.
- AP-04 q3. Before: the key was amoxicillin 90 mg/kg/day only, and "amoxicillin 40" and "amoxicillin 45" were marked unacceptable. After: the key accepts 40 to 90 mg/kg/day divided three times daily, maximum 4 g/day, as the CPS statement says. Only doses below that range (20, 25, 250) are unacceptable. The explanation gives the CPS range and the calculation: 26 kg x 90 = 2340 mg/day, about 780 mg three times daily.
- AP-06 q2. Before: any line containing "bicarbonate" was unacceptable, so "monitor bicarbonate and anion gap" scored zero. After: the unacceptable phrases are "sodium bicarbonate", "give bicarbonate", "bicarbonate infusion", "iv bicarbonate" and "bicarb".
- AP-06 q3. Before: the keyed option held potassium "until below 5.0". The explanation said insulin is held only below 3.3. The question was mapped to abdominal-pain key feature 3, but it tests insulin management and not an extra-abdominal cause. After: the option reads "Hold potassium replacement while potassium is above 5.0 mmol/L and recheck it often". The explanation names both thresholds for holding insulin: 3.3 mmol/L in Diabetes Canada guidance and 3.5 mmol/L in the 2024 ADA consensus. Both now start potassium below 5.0 mmol/L. The key feature is now shock 8, a non-fluid therapy. Abdominal-pain key feature 3 is still covered by AP-04, AP-05 and AP-06 q1.
- AP-08 q4. Before: the key was "Rh immune globulin 300 mcg IM within 72 hours", and "No Rh immune globulin because she is under 12 weeks" was a distractor. After: the question is rewritten. The keyed statement is that current SOGC guidance advises against routine Rh immune globulin for ectopic pregnancy at this gestation, with Rh status documented and discussed. The distractors are now clearly wrong: delay surgery for RhIG, RhIG only if the antibody screen is positive, 1500 mcg IV for hemoperitoneum, and RhIG only if Kleihauer-Betke is positive. The explanation says that 120 to 300 mcg is still given in some centres and that SOGC allows it for risk averse patients from 8 weeks. The citation is updated to SOGC Guideline No. 448 (2024).
- AP-11 q4. Before: "ectopic" was accepted for heterotopic pregnancy, although a dating ultrasound had already shown an intrauterine pregnancy at 14 weeks. After: only "heterotopic" matches.

### Writer flags, abdominal pain

1. AP-08 q4, Rh immune globulin. The key was wrong and is now corrected, as described above. SOGC Guideline No. 448 (2024) recommends against RhIG for ectopic pregnancy before 8 weeks and suggests against it from 8 to 12 weeks. At 7 weeks, neither 300 mcg nor 120 mcg should be the keyed answer. Needs physician attention (see open questions).
2. AP-06 q3, potassium threshold. Diabetes Canada 2018 holds KCl when K is above 5.0 mmol/L. The 2024 ADA consensus also moved to 5.0 mmol/L, from the older 5.2 to 5.3. The key is now fair to both. Corrected in wording only.
3. AP-04 q3, amoxicillin. The CPS statement (updated 2024) gives 40 to 90 mg/kg/day divided three times daily, maximum 4000 mg/day. It adds that twice daily dosing is adequate for otitis but three times daily is recommended for pneumonia. The key was too narrow and is now corrected. The question asks for the total daily dose, so twice daily wording is not penalized.
4. AP-12 q1 and q3. Accurate. Ketorolac 15 mg IV is appropriate, and the analgesic ceiling is at about 10 to 15 mg. Tamsulosin 0.4 mg daily for distal ureteric stones of 5 to 10 mm fits EAU guidance. POCUS with no CT for a young patient with known stones and an uncomplicated course matches the CAEP Choosing Wisely recommendation. The 60 mg IV ketorolac and 4 mg tamsulosin distractors are plausibly wrong.
5. AP-01, blood pressure target and blood group. Accurate. SVS 2018 recommends permissive hypotension with a systolic target of 70 to 90 mmHg in ruptured AAA. Uncrossmatched group O is correct. O positive is acceptable for a man, and the short key and explanation now say so.

## Abuse (domestic)

| SAMP | Verdict |
| --- | --- |
| AD-01 Pregnant woman with abdominal pain after a fall | Corrected |
| AD-02 Man with forearm pain after a fall | Corrected |
| AD-03 Woman with a sore throat after an argument | Accurate |
| AD-04 Older woman brought in by her son | Corrected |
| AD-05 Long-term care resident with leg pain | Corrected |
| AD-06 Irritable infant after a short fall | Corrected |
| AD-07 Young woman after a party | Corrected |
| AD-08 Young woman after an intentional ingestion | Corrected |
| AD-09 Frequent visits for headache and insomnia | Accurate |
| AD-10 Woman with facial injuries after walking into a door | Corrected |
| AD-11 Pregnant woman after a fall in the kitchen | Accurate (citation updated) |
| AD-12 Man with a scald to the back | Accurate |
| AD-13 Recent newcomer with pelvic pain | Accurate |
| AD-14 Young man from a group home with foot burns | Corrected |
| AD-15 Young woman asking for STI testing | Accurate |

### Changes

- AD-01 q2. Before: "ask the partner" was a dangerous unacceptable phrase, so the correct answer "ask the partner to step out" zeroed the whole question. After: that phrase is removed and "partner present" is added. Negation handling keeps "without the partner present" from matching.
- AD-02 q4. Before: the explanation said "In Ontario there is no duty to report", but the stem names no province. After: "Canadian provinces, Ontario included, do not require reporting of partner violence against a competent adult unless another reporting law applies."
- AD-04 q3 and q4. Before: the answer was Ontario specific (Office of the Public Guardian and Trustee). After: the explanation names the provincial public guardian or adult protection service, with the OPGT as the Ontario example. The key also accepts "public trustee", "adult protection" and "adult protective".
- AD-05. Before: the stem gave no province, but the key relied on the Ontario Fixing Long-Term Care Act, 2021. After: the stem says "in Ontario". The option and explanation use the statute's wording, "harm or a risk of harm". The explanation notes that other provinces have similar laws for persons in care.
- AD-06 q3 and q4. Before: the keyed option said to report to the children's aid society, which is Ontario terms. After: "Report directly and promptly to child protection services yourself (the children's aid society in Ontario)". The explanation notes that every province has a duty to report, and that in Ontario the duty cannot be delegated. The q4 key also accepts "child and family services" and "child protective services".
- AD-07 q1. Before: the explanation left out the copper IUD, and cefixime was not accepted. After: the explanation says the copper IUD is the most effective option, up to 7 days. "cefixime" is added to the STI item. The HIV PEP citation is updated to the 2025 Canadian guideline in CMAJ.
- AD-08 q3. Before: report to the children's aid society. After: report to child protection services, with the children's aid society named as the Ontario body.
- AD-10 q1. Before: "periorbital", "nasal" and "facial" injury were accepted as inconsistent with walking into a door. After: that item is removed. A door strike can explain a single central facial injury. The four remaining items are multiple sites, ear injury, bite and defensive forearm injury.
- AD-14 q1 and q3. In q1, fear of a staff member was accepted as a "feature of this burn". It is not a burn feature, so it is removed. In q3, "patient" and "time" were bare match phrases, so any line containing "patient" scored. They are replaced with "extra time", "more time", "allow time" and "patience".

### Writer flags, abuse

6. AD-01 q3 and AD-11 q3, trauma in pregnancy. AD-01 q3 is at 22 weeks. It asks only for an obstetric assessment that includes Rh status, and it names no dose, so it is accurate. AD-11 q3, at 30 weeks, keys Rh immune globulin 300 mcg IM now plus a Kleihauer-Betke test to decide on extra doses. This matches SOGC practice: 300 mcg after 20 weeks, with quantitative FMH testing by Kleihauer-Betke or flow cytometry. Accurate.
7. Ontario law framing. AD-02 is now national. AD-05 now states Ontario in the stem. AD-06 and AD-08 now use national "child protection services" wording, with Ontario named as the example. The CYFSA duty to report directly and not rely on another person is correctly stated. AD-13 q3 is federal law and applies nationally: since the conditional permanent residence rule was repealed in 2017, a sponsor cannot cancel a spouse's permanent resident status. Accurate. AD-04 is now national.
8. AD-07, emergency contraception and prophylaxis. The timing is accurate: ulipristal up to 120 hours, levonorgestrel best within 72 hours, and the copper IUD most effective up to 7 days. The STI key accepts drug names only. Ceftriaxone is the preferred gonorrhea agent in the December 2024 national interim guidance. Doxycycline or azithromycin covers chlamydia, and metronidazole covers trichomonas. The key does not name HIV PEP drugs, so no drug change was needed. The Canadian nPEP backbone is tenofovir plus emtricitabine with an integrase inhibitor.
9. AD-03 q2, CTA after strangulation. Accurate. The Training Institute on Strangulation Prevention recommends CT angiography of the carotid and vertebral arteries when high risk features are present, such as loss of consciousness, incontinence, voice change, dysphagia or petechiae. This patient has several.
10. AD-12 q4, burn disposition. Accurate. Burns key feature 5 names home circumstances. ABA referral guidance lists suspected abuse and social needs. A 6% superficial partial thickness burn with an unsafe home is not safe for discharge home.

## Sources verified

- SOGC Guideline No. 448. Prevention of Rh D alloimmunization. 2024. Verified: https://www.guidelinecentral.com/guideline/4590140/
- CPS. Uncomplicated pneumonia in healthy Canadian children and youth: practice points for management. Updated 2024. Verified: https://cps.ca/en/documents/position/pneumonia-management-children-youth
- Diabetes Canada 2018 Clinical Practice Guidelines. Hyperglycemic emergencies in adults (Goguen and Gilbert). Verified: https://www.diabetes.ca/health-care-providers/clinical-practice-guidelines/chapter-15
- ADA consensus report. Hyperglycemic crises in adults with diabetes. 2024. Used for comparison only: https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A
- Tan DHS and colleagues. Canadian guideline on HIV pre- and postexposure prophylaxis: 2025 update. CMAJ 2025. Verified: https://www.cmaj.ca/content/197/41/E1374
- SVS 2018 AAA guideline, permissive hypotension with a systolic target of 70 to 90 mmHg. Confirmed through secondary sources, including the Cochrane review summary: https://pmc.ncbi.nlm.nih.gov/articles/PMC6513606/
- National interim gonorrhea guidance, December 2024, with ceftriaxone preferred. Confirmed through public health summaries: https://www.phsd.ca/professionals/health-professionals/advisory-alerts-health-care-professionals/updated-gonorrhea-treatment-guidance/
- The remaining citations are real and correctly attributed. None carries an unverified URL or year. They are cited plainly as organisation and topic: ESVS mesenteric, ACR RLQ, WSES appendicitis, peptic ulcer and ASBO, Image Gently, CCS/CAIC STEMI, IDSA ASB 2019, SIS/IDSA cIAI, SOGC ectopic, the TWIST score (Barbosa, J Urol 2013), ACOG CO 723, CAEP Choosing Wisely, EAU urolithiasis, ACG pancreatitis, RNAO woman abuse and suicide BPGs, WHO 2013 IPV, SOGC IPV consensus, SOGC pregnant trauma, CYFSA 2017, FLTCA 2021, AAP child abuse clinical report, TEN-4-FACESp (Pierce, JAMA Netw Open 2021), Training Institute on Strangulation Prevention, Campbell Danger Assessment, EASI, PHAC STI guidelines, Ontario SA/DVTC network and ABA referral criteria.
- Originality: compared with the CFPC sample SAMPs. The only close echo was the appendicitis differential in AP-03 q1, which was reworded.

## Open questions for the physician

1. AP-08 q4. Do you want to key the 2024 SOGC position (no routine RhIG for ectopic pregnancy before 8 weeks), as now written? Many Canadian EDs still give 120 to 300 mcg after a surgically managed ruptured ectopic. The recommendation is conditional and low certainty. An alternative is to move the case beyond 12 weeks, or to test Rh status only.
2. AP-03 q3. Ultrasound is keyed as the first test and CT as unacceptable (not dangerous) for a 23-year-old woman with a negative hCG. ACR rates CT as usually appropriate in nonpregnant adults. Confirm that this radiation stewardship key is the one you want.
3. AP-06 q3. Confirm that shock key feature 8 is an acceptable mapping for the insulin plan question. The alternative is to reframe the question around potassium and fluid choice.
4. AD-03 q3, documentation of injuries, is mapped to abuse key feature 3 (find all injuries). It is a loose fit. Confirm or remap.
5. AD-14. A group home in some provinces carries a mandatory report to police or an adult protection body, for example under Ontario's developmental services regulation. Consider adding a reporting question.
