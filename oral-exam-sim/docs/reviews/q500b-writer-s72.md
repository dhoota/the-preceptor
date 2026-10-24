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
