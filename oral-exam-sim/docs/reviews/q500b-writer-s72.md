# Q500B writer report: s72, Suicide risk

File: `src/samps/s72/suicide-risk.ts` (array `SUICIDE_RISK_S72`). All items `reviewed: false`, `author: "Preceptor"`, `version: 1`.

## Ids written

| Id | Title | Scenario | Setting |
|---|---|---|---|
| suicide-risk-39 | Third admission since the spring | 16-year-old girl, third DKA in 5 months from hidden insulin omission, later disclosed as partly suicidal | Tertiary |
| suicide-risk-40 | A video call from the nursing station | 34-year-old man on spring river ice, video examination from a fly-in nursing station, Manitoba Mental Health Act | Northern regional hospital, remote community |
| suicide-risk-41 | He wants to go to heaven | 27-year-old man with Down syndrome and grief, group home | Tertiary |
| suicide-risk-42 | Six days out | 31-year-old man 6 days after release from provincial custody, shelter curfew, no phone | Tertiary |
| suicide-risk-43 | Checking a fence at night | 71-year-old farmer struck by a pickup after his long-term oxycodone was stopped | Tertiary |

## Count and mix

- 5 SAMPs, 20 questions: 17 `single`, 3 `menu` (41 q3, 42 q3, 43 q1, each select 3).
- Single key positions (0 to 4): 4, 3, 3, 3, 4. The key is the longest option in 1 of 17 singles.

## Key feature coverage

Bank counts before this batch: KF1 32, KF2 19, KF3 25, KF4 16, KF5 33. The extra questions went to KF2 and KF4, the thinnest.

| Key feature | Questions in this batch | Items |
|---|---|---|
| 1 Risk factors (hopelessness, supports, impulsivity) | 4 | 39 q3, 40 q1, 41 q1, 42 q1 |
| 2 Hidden suicidality | 5 | 39 q1, 39 q2, 43 q1, 43 q2, 43 q3 |
| 3 Certification when the patient wants to leave | 3 | 40 q2, 40 q3, 40 q4 |
| 4 Agreed outpatient plan and discharge timing | 4 | 39 q4, 41 q2, 41 q3, 42 q2 |
| 5 Follow-up, crisis contacts, medication counselling | 4 | 41 q4, 42 q3, 42 q4, 43 q4 |

## Uniqueness

I read every suicide-risk SAMP in s17 and s52, the cross-tagged items (abuse-domestic, lacerations-18, airway-37, seizures-18, tox-25) and the oral case titles and stems. New angles not in the bank: insulin omission as hidden self-harm and insulin as a means that cannot be removed, a Manitoba application (no Manitoba item existed) with the 2026 remote examination provision, an adult with an intellectual disability, the post-release window from custody, the shelter curfew as a discharge timing factor, follow-up for a patient with no phone, a pedestrian collision as an equivocal act, the older adult attempt to death ratio, and the link between stopping long-term opioids and overdose or suicide death. The bank-wide trigram duplicate gate passes.

## Sources and verification

| Source id | Citation | Verified at |
|---|---|---|
| dc-t1d-peds | Wherrett DK and colleagues, Diabetes Canada. Type 1 diabetes in children and adolescents. Can J Diabetes. 2018. | https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34 (DKA in established diabetes from failing to take insulin, eating disorders when insulin omission is suspected, family support lowers DKA) |
| cps-youth-2015 | Korczak DJ, CPS. Suicidal ideation and behaviour. Paediatr Child Health. 2015. | https://pmc.ncbi.nlm.nih.gov/articles/PMC4472054/ (access to means such as medications, a safe home, a trusted adult) |
| mb-mha | The Mental Health Act, C.C.S.M. c. M110 (Manitoba), as amended by S.M. 2026, c. 13. | https://web2.gov.mb.ca/laws/statutes/ccsm/m110.php (current as of October 21, 2026, in effect since October 1, 2026): s. 1 qualified health professional, s. 8(1) criteria, s. 8(1.1) remote examination, s. 8(3) 2 days, s. 8(4) content, s. 9(1) 72 hours, s. 13(1) 24 hours, s. 19 21 days, s. 20(2) release. Enacting chapter checked at https://web2.gov.mb.ca/laws/statutes/2026/c01326.php?lang=en |
| beck-hopelessness | Beck AT and colleagues. Hopelessness and eventual suicide. Am J Psychiatry. 1985. | PubMed record 3985195 read through NCBI E-utilities |
| sullivan-idd | Sullivan WF and colleagues. Primary care of adults with IDD: 2018 Canadian consensus guidelines. Can Fam Physician. 2018. | https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068 (guidelines 2.1 to 2.6, 3.3, 29.5, 29.8, 30.2) |
| nice-ng225 | NICE. Self-harm: assessment, management and preventing recurrence. NG225. 2022. | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations (1.5.8, 1.6.2, 1.6.4, 1.10.2, 1.11.7, 1.13.2) |
| kouyoumdjian-custody | Kouyoumdjian FG and colleagues. Mortality over 12 years in people admitted to provincial custody in Ontario. CMAJ Open. 2016. | https://pmc.ncbi.nlm.nih.gov/articles/PMC4933645/ (suicide 2.3 vs 0.4 per 1000 person-years, SMR 14.0 in the first 2 weeks, overdose SMR 56.0 in the first 2 weeks) |
| phac-988 | Public Health Agency of Canada. Mental health support: get help. 2026. | https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html (call or text 9-8-8, 24/7) |
| ccsmh-suicide | Canadian Coalition for Seniors' Mental Health. Assessment of suicide risk and prevention of suicide. 2006. | https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf (ratio under 4 to 1 in older adults vs about 20 to 1, somatic presentation, equivocal behaviour in Table 2.1) |
| oliva-opioid-stop | Oliva EM and colleagues. Stopping opioids and overdose or suicide deaths in US veterans. BMJ. 2020. | https://pmc.ncbi.nlm.nih.gov/articles/PMC7249243/ (HR 1.67 to 6.77 by length of treatment) |

## Uncertain, for the reviewers

1. suicide-risk-40 relies on Manitoba amendments in force since October 1, 2026 (remote examination, the "qualified health professional" term). The nurse practitioner clause (s. 2(2)) comes into force on November 1, 2026 by proclamation. The distractor names a registered nurse, who is not a qualified health professional before or after that date, but reviewers should confirm. Section 8(1.1) is "subject to the regulations", and I did not find a regulation that limits remote examination.
2. ISPAD 2022 says population studies do not show more suicide attempts in youth with type 1 diabetes. suicide-risk-39 does not claim that they do. It teaches insulin omission as a possible hidden self-harm, which the update then confirms.
3. 42 q3 (menu) cites the PHAC 9-8-8 page. The naloxone reasoning uses the overdose SMR from the Kouyoumdjian source listed in the same SAMP. A Groot 2016 coroner study (20% of post-release drug deaths in week 1) supports the point too but is not cited, because the one-source-per-question rule left it uncited.
4. 43 q3 tags KF2. The Oliva data are about risk, so KF1 could also fit. The 43 q3 update reveals intent after q1 asked which features raise concern. This does not name q1's keyed features, but check it under the mock-mode cue rule (B6).
5. KF5 items 41 q4 and 43 q4 test prescribing choices (no new sedative, a short supply with review) as part of medication counselling.
6. The bank-wide near duplicate test takes 8 to 10 seconds here under load. The default 5 second timeout made it fail on some runs. It passes with `--testTimeout=120000`, and no duplicate was reported.

## Revision 1

This revision answers `docs/reviews/q500b-qa-s72.md` (13 failed items, no key wrong). Where this section disagrees with the tables above, this section is current. Before rebuilding anything I grepped all of `src/samps` and `src/cases` for the new angles (unused glucose meter, volleyball, unopened pens, HbA1c, "told relatives", 38%, discharge letter, discharge summary, warning signs). I opened no new sources. The new content uses the sources already verified, all re-read by WebFetch or curl: the CPS 2015 text on intent behind self-harm, the CCSMH 2006 lines on relatives and the 38%, and NICE NG225 1.7.8.

### Changes by item

| Item | Finding | Change |
|---|---|---|
| 39 stem | Near duplicate of abuse-domestic-41 | Rebuilt and retitled "A meter used on three days". It no longer uses the third-DKA, ran-out-of-insulin frame. She faints at volleyball practice and has mild ketoacidosis (pH 7.28, bicarbonate 15). Her HbA1c rose from 7.6% to 12.9%, refills were collected on time, her meter shows only 3 days of readings, she lost 6 kg, she says she takes every dose, and her injection sites are normal. Vitals changed to 106, 22, 112/70, 51 kg. Her father replaces her mother throughout. The q1 prompt and explanation were rewritten to these clues. The key is unchanged. |
| 39 q2 | Insulin self-harm claim had no source | Removed the claim about insulin omission or overdose as suicide. The explanation now rests on what CPS 2015 says: ask adolescents about the intent behind self-harming behaviour and ask directly whether they want to end their life. The key is unchanged. |
| 40 q2 | Grammar cue | Key is now "Unwillingness to undergo a voluntary assessment". It stays last. |
| 40 q3 | Out-of-date legal statement, and a "recent plan" not in the case | Stem: "A registered nurse, who is not a nurse practitioner". Explanation adds that nurse practitioners join under an amendment in force from November 1, 2026. "Recent plan" is replaced by "a goodbye message and a walk onto thin ice". |
| 40 q4 | Mock-mode cue | Removed "You complete the application." The prompt now reads "an application under section 8". |
| 41 q3 | Cue to q4 and wrong source field | The lorazepam distractor is replaced by "Move to a quieter group home", and the sedative sentence is removed. Source is now `sullivan-idd`, and the explanation cites guidelines 2.3 and 30.2. NICE is no longer cited in SAMP 41, so it was removed from that SAMP's sources. Key [1, 2, 6] is unchanged. |
| 42 q1 | Distractor reason without support | "Lower than during custody" is now "Lowest in the first month out". The unsupported sentence is replaced by the verified overall suicide SMR of 4.3. |
| 42 q2 | Optional wording | "Low acute risk" is now "passive thoughts and no plan or intent". The service is named "the community mental health clinic" to match q4. |
| 42 q3 | Shelter phone not in the case | Stem: "He has no phone of his own, but the shelter has one that residents may use." |
| 42 q4 | Inconsistent services | The update now says the clinic usually phones patients to set a time, without repeating "no phone". The explanation says "without a phone of his own". |
| 43 q1 | "Abrupt" not in the stem | Stem: "stopped it abruptly 5 weeks ago". The source field is now `oliva-opioid-stop`, so that source stays cited. |
| 43 q2 | Repeat of s17-02, and a defensible distractor | Replaced. New KF2 question: "Which of the following people is most likely to know whether he has spoken of wanting to die?" The key is his adult son. CCSMH 2006: three quarters of older adults who died by suicide had told relatives or friends, and only 38% had told a health professional. Not found elsewhere in the bank. |
| 43 q3 | Overlap with s17-10, and a B6 cue | Replaced. The disclosure is now "Asked directly again the next morning, he says he meant to end his life", which names no q1 feature. New KF5 question on the discharge letter to his family physician. The key is that the letter names the collision as a suicide attempt (NICE 1.7.8: regular review of the self-harm and a medicines review in primary care). |
| 43 q4 | Overlap with s17-10 | Replaced with the reviewer's suggested angle: advice to his son, keyed "Call 9-8-8 if he talks of dying" (PHAC 9-8-8 page, now listed on SAMP 43). Opioid quantity, naloxone and firearms are not used. |

### Counts after revision

- 20 questions: 17 single and 3 menu. Single key positions: 4, 3, 3, 3, 4. The key is the longest option in 2 of 17.
- Key features: KF1 4, KF2 4, KF3 3, KF4 4, KF5 5. Replacing 43 q3 moved one question from KF2 to KF5. The thinnest bank features, KF2 and KF4, still get 4 each.

### Still open for the verifier

1. 43 q4 keys 9-8-8 as advice to a family member. s52 already keys the 9-8-8 number in a patient's own plan. The decision here is different (what a relative does when he hears talk of dying), but please check it under D1.
2. 43 q3 overlaps loosely with s17 "Going home to the farm" (a component about communication with his family physician) and with the s52 "Discharge summary sent to her doctor" option. The decision tested here, naming the injury as an attempt in the letter, is not keyed elsewhere.
3. The 39 q1 to q2 mock-mode flag remains, as the review allows.

Test run: `SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed. Typecheck shows no s72 errors.

## Revision 2

This revision answers `docs/reviews/q500b-verify-s72.md` (6 items failed, SAMPs 40 and 41 passed). Before writing I grepped s17, s52 and s72 for the new 43 q2 and q4 angles ("confided", "told relatives", "wax and wane", "fluctuat", "refused meals", "stopped eating", "before she is discharged"). The only near match was s52 "Hanging laundry" q3, which keys a psychiatric assessment on the orthopaedic ward before discharge. The new 43 q4 tests something else, so it does not repeat that item. I opened no new source. Both new 43 questions cite CCSMH 2006, which I have already opened and read: lines on three quarters telling relatives or friends against 38% telling a health professional, older adults avoiding volunteering symptoms, somatic presentation, most without severe or terminal illness, perhaps over 10% without a diagnosable mental illness, self-neglect in Table 2.1, and "repeatedly assess ... might wax and wane".

| Item | Change |
|---|---|
| 39 q1 | The distractor sentence now reads, as the review asked, "Heat-damaged insulin and poor needle technique give erratic glucose but would not explain a meter left unused on all but 3 days of the month." The lipohypertrophy point is now a separate sentence. |
| 39 q4 | The update is now word for word as the review gave it. She is assessed by the adolescent mental health team before discharge, and the mental health team and the eating disorder program can see her in 3 days. Key, options and explanation are unchanged. |
| 42 q1 | "Lowest in the first month out" is replaced by "Rises steadily over the first year", in the review's option order, with `correct: 0`. The explanation sentence now reads "The rate falls over the first year rather than rising, and he is 6 days out." |
| 42 q2 | The explanation now says "A probation officer, if he has one, has no role in his medical discharge". The distractor "Hold until his probation officer is reached" and the q1 distractor "Highest once probation ends" still mention probation. I left them because the stem does not rule probation out. The verifier may want the stem to say he is on probation. |
| 43 q2 | Rebuilt as the CCSMH disclosure-pattern question. The prompt is "Which of the following best describes what older adults who die by suicide have usually done in the year before?" The key is "Confided the wish to family or friends". The distractors are "Had a severe or terminal physical illness", "Had no diagnosable mental illness", "Shown obvious sadness more than physical complaints" and "Told a health professional of the wish", each refuted by CCSMH text. The son sentence moved from the q2 update to the q3 update. The explanation says older adults tell family rather than clinicians and often do not volunteer symptoms to clinicians, which agrees with s17-02 q2. KF2, `ccsmh-suicide`. |
| 43 q4 | Replaced (KF2). On the morning planned for discharge, nurses report that for 2 days he has refused most meals and his enoxaparin. The key is "Check again today for intent to die". It rests on CCSMH: self-neglect is an equivocal suicidal behaviour, and suicidal thoughts should be assessed repeatedly because they wax and wane. The distractors are a dietitian review, discharge as planned, recording the refusal and proceeding, and switching to an oral anticoagulant. The question uses no crisis line, opioid quantity, naloxone, family-held medicines, firearms, safety contract or asking myth. The PHAC 9-8-8 source is no longer cited in SAMP 43, so it was removed from that SAMP. It remains on 42. |

### Counts after revision 2

- 20 questions: 17 single and 3 menu. Single key positions: 4, 3, 3, 3, 4. The key is the longest option in 2 of 17.
- Key features: KF1 4, KF2 5, KF3 3, KF4 4, KF5 4. The thinnest bank features, KF2 and KF4, get 5 and 4.
- Tests: `SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed. Typecheck shows no s72 errors.

## Revision 3

This revision answers `docs/reviews/q500b-verify2-s72.md`. SAMPs 39 to 42 passed. The only fail was 43 q4.

Before writing I grepped s17, s52 and s72 for the new decision ("social support", "interpersonal", "lonel", "living alone", "medical alert", "day program", "church", "curling"). Neither s17 nor s52 keys a plan for social contact once a support person leaves. s17-01 q1 lists lack of supports as a risk factor to ask about, and s52 lists church attendance as a protective finding. Those are different decisions. "Curling" appears only in unrelated topics.

| Item | Change |
|---|---|
| 43 q4 | Replaced with the KF4 decision the review suggested. His son goes back to the city in 1 week. He wants to stay on the farm, declines to move in with his son, and has a neighbour and curling club friends nearby. The prompt asks for the most appropriate addition to his plan for when his son returns to the city. The key is "Planned regular visits with friends". It rests on CCSMH 2006, which recommends working with the person to enhance social support and interpersonal activities, and which links living far from relatives, seeing friends infrequently and loneliness to higher risk. I opened and read both lines in the PDF. The distractors are "Contact only if he calls for help", "Medical alert pendant as the only support", "Move into long-term care near his wife" and "Stay with his son in the city", the last being a plan he has declined. The new item does not use self-neglect, treatment refusal, ward reassessment, a crisis line, opioid quantity, naloxone, family-held medicines, firearms, a safety contract, collateral sources or the asking myths. The old sentence "His denial of intent days ago" is gone. KF4, `ccsmh-suicide`. |

### Counts after revision 3

- 20 questions: 17 single and 3 menu. Single key positions: 4, 2, 3, 4, 4. No position is above 25 percent, and every position is used. The key is the longest option in 2 of 17.
- Key features: KF1 4, KF2 4, KF3 3, KF4 5, KF5 4.
- Tests: `SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed. Typecheck shows no s72 errors.
