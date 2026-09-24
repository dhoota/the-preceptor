# Batch s11 writer report

Batch s11 is 50 stand-alone items, `rn-s11-01` to `rn-s11-50`, in `src/bank/s11/part1.ts` to `part5.ts`. All carry `reviewed: false`, `version: 1` and an empty `canada` note.

Checks run:

- `BATCH=s11 npx vitest run tests/bank.test.ts`: 61 of 61 pass. This includes the whole bank near duplicate gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s11`: prints nothing.

## Counts

### Client Needs

- Psychosocial Integrity (PSY): 50

### Item type

- mc: 26
- sata: 10
- msn: 3 (items 04, 25, 50)
- dnd: 3 (06 order, 21 matching, 45 dyad with template)
- cloze: 2 (15 triad, 38 zero-one)
- highlight: 2 (10, 29)
- bowtie: 2 (08, 31)
- trend: 2 (19 and 40, both mc)

### CJMM step

- Recognize cues: 6
- Analyze cues: 9
- Prioritize hypotheses: 3
- Generate solutions: 9
- Take action: 18
- Evaluate outcomes: 5

### Difficulty

- 1: 4
- 2: 14
- 3: 19
- 4: 10
- 5: 3

## MC key positions

There are 28 mc items, counting the 2 trend items.

- Position 1: 7 (03, 11, 18, 26, 34, 39, 46)
- Position 2: 7 (07, 14, 20, 28, 35, 41, 48)
- Position 3: 7 (01, 09, 16, 24, 32, 40, 44)
- Position 4: 7 (05, 13, 19, 22, 30, 37, 43)

The key is the strict longest option in 7 of 28 mc items. Keyed choices run longer than distractors in 8 of 22 multi-key pools. Select all keys in the first half of the list: 19 of 40.

## Coverage

Topics span suicide risk and safety planning, restraint rules, de-escalation, abuse and neglect (child, elder, partner), sexual assault care, psychological first aid, therapeutic communication, motivational interviewing, anxiety levels, defense mechanisms, somatic symptoms, OCD, mania, psychosis, schizophrenia relapse and discharge supports, borderline splitting, eating disorders, substance use (stimulant intoxication, opioid withdrawal, Korsakoff syndrome), grief and end of life, perinatal loss, postpartum mood disorders, a child's view of death, sibling stress, dementia behavior, caregiver strain, sensory loss, culture and spirituality, gender-affirming communication, body image, stress management, self-injury, PTSD and ADHD home strategies.

## Sources and verification

Each source was checked by web search for author or body, title, year and edition.

- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition. 2022. https://evolve.elsevier.com/cs/product/9780323697071
- Morgan KI, Townsend MC. Davis Advantage for Townsend's Psychiatric Mental Health Nursing, 11th edition. 2023. https://www.fadavis.com/nursing/psychiatric-and-mental-health-nursing
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. 2023. Already used elsewhere in the bank.
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's, 15th edition. 2022. Used only for the normal potassium range in item 10.
- American Psychiatric Association. DSM-5-TR. 2022. https://www.psychiatry.org/psychiatrists/practice/dsm
- Stanley B, Brown GK. Safety Planning Intervention. Cognitive and Behavioral Practice 19(2):256. 2012. https://www.sciencedirect.com/science/article/abs/pii/S1077722911000630
- The Joint Commission. R3 Report Issue 18, NPSG.15.01.01. 2019. https://www.jointcommission.org/en-us/standards/r3-report/r3-report-18
- Centers for Medicare and Medicaid Services. 42 CFR 482.13. https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13 (the 1 hour face-to-face rule and the 4 hour adult order limit were confirmed)
- Child Welfare Information Gateway. What Is Child Abuse and Neglect? 2019. https://www.childwelfare.gov/resources/what-child-abuse-and-neglect-recognizing-signs-and-symptoms
- US Preventive Services Task Force. Screening for Intimate Partner Violence, Elder Abuse, and Abuse of Vulnerable Adults. JAMA 320(16):1678. 2018. https://pubmed.ncbi.nlm.nih.gov/30357305/
- American College of Obstetricians and Gynecologists. Clinical Practice Guideline No. 4. 2023. https://pubmed.ncbi.nlm.nih.gov/37486660/
- American Psychiatric Association. Practice Guideline for the Treatment of Patients With Eating Disorders, 4th edition. 2023. The adolescent thresholds used in item 10 (heart rate under 50, systolic drop over 20 mmHg, temperature under 36°C) were read from Table 6 of the guideline PDF at https://www.psychiatry.org/getmedia/97405f0d-1bd4-43d0-abdd-c013fcd8686d/APA-Eating-Disorders-Practice-Guideline-Under-Copyediting.pdf
- Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale. Journal of Psychoactive Drugs 35(2):253. 2003. https://pubmed.ncbi.nlm.nih.gov/12924748/
- SAMHSA. TIP 63: Medications for Opioid Use Disorder. 2021. https://library.samhsa.gov/product/tip-63-medications-opioid-use-disorder/pep21-02-01-002
- Miller WR, Rollnick S. Motivational Interviewing, 4th edition. 2023. https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795
- WHO, War Trauma Foundation, World Vision International. Psychological First Aid: Guide for Field Workers. 2011. https://www.who.int/publications/i/item/9789241548205
- SAMHSA. Concept of Trauma and Guidance for a Trauma-Informed Approach. 2014. https://library.samhsa.gov/product/samhsas-concept-trauma-and-guidance-trauma-informed-approach/sma14-4884
- SAMHSA. TIP 57: Trauma-Informed Care in Behavioral Health Services. 2014. https://library.samhsa.gov/product/tip-57-trauma-informed-care-behavioral-health-services/sma14-4816
- US DHHS Office of Minority Health. National CLAS Standards. 2013. https://www.federalregister.gov/documents/2013/09/24/2013-23164
- Puchalski C, Romer AL. Taking a Spiritual History. Journal of Palliative Medicine 3(1):129. 2000. https://pubmed.ncbi.nlm.nih.gov/15859737/
- Fazio S, et al. Alzheimer's Association Dementia Care Practice Recommendations. The Gerontologist 58(S1):S1. 2018. https://academic.oup.com/gerontologist/article/58/suppl_1/S1/4816759
- US Department of Justice, Office on Violence Against Women. National Protocol for Sexual Assault Medical Forensic Examinations, 3rd edition. 2024. https://www.justice.gov/ovw/media/1367191
- Worden JW. Grief Counseling and Grief Therapy, 5th edition. 2018. https://connect.springerpub.com/content/book/978-0-8261-3475-2
- Kroenke K, Spitzer RL, Williams JB. The PHQ-9. Journal of General Internal Medicine 16(9):606. 2001. https://pubmed.ncbi.nlm.nih.gov/11556941/ (severity bands 5, 10, 15, 20 were confirmed)
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition. 2024. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- The Joint Commission. LGBT Field Guide. 2011. https://lgbtagingcenter.org/resource/advancing-effective-communication-cultural-competence-and-patient-and-family-centered-care-for-the-lesbian-gay-bisexual-and-transgender-lgbt-community/
- ACOG and SMFM. Obstetric Care Consensus No. 10: Management of Stillbirth. 2020. https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth
- Wolraich ML, et al. AAP Clinical Practice Guideline for ADHD. Pediatrics 144(4):e20192528. 2019. https://pubmed.ncbi.nlm.nih.gov/31570648/

`common.ts` also defines ASAM_AWM (ASAM Alcohol Withdrawal Management guideline, 2020, verified at https://pubmed.ncbi.nlm.nih.gov/32511109/). It was verified but not used.

## For the reviewer

- Item 06 (de-escalation order). The keyed order is: move other clients away, speak calmly, offer a choice, then offer the as-needed oral medication. Some texts put calm verbal contact before moving others. Check that the order is defensible as the single key.
- Item 03. The key puts a search for hazards ahead of orientation, with one-to-one observation already prescribed. Check that no other option could be defended as first.
- Item 08. The page number of ACOG Guideline No. 4 is not in the citation. The postpartum psychosis teaching rests on it and on Halter.
- Item 10. The adolescent thresholds come from Table 6 of the APA guideline PDF (the version still under copyediting). Potassium thresholds there depend on the lab, so the normal range cites Hinkle.
- Item 31. Buprenorphine timing is kept general ("ask the provider"). No COWS score threshold is stated.
- Item 43. ACOG Consensus No. 10 is paywalled and could not be fetched. The teaching on offering contact without pressure also matches the bereavement literature found in search (PMC11462878). Check the page reference e110.
- Item 44. The Hockenberry 12th edition shows copyright 2024 on the Elsevier listing. Some sellers list 2023.
- Items 36 and 25 use general relapse and discharge teaching from Halter and Townsend. No numeric follow-up window (such as 7 days) is claimed.
