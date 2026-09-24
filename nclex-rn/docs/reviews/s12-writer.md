# s12 writer report

Batch s12. Stand-alone. Psychosocial Integrity. 50 items, rn-s12-01 to rn-s12-50. All items are `reviewed: false`, `version: 1`, `canada: ""`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- `BATCH=s12 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s12`: prints nothing.

## Counts

Client Needs: PSY 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are `mc` (rn-s12-08, rn-s12-33).

CJMM step: recognize 7, analyze 8, prioritize 3, generate 9, action 18, evaluate 5.

Difficulty: 1 is 4 items, 2 is 13, 3 is 18, 4 is 12, 5 is 3.

## MC key positions

Across the 28 mc items, trend items included: position 1 has 6, position 2 has 7, position 3 has 8, position 4 has 7. The key is the strict longest option in 1 of 28.

## Coverage of the focus list

- Therapeutic communication: 01, 07, 12, 17, 41, 43, 48.
- Crisis intervention: 03, 04, 46.
- Grief and loss: 05, 09, 18, 45.
- Abuse and neglect: 02 (trafficking), 06 (infant injury pattern), 21 (safety plan), 22 (charting), 23 (factitious disorder imposed on another), 42 (older adult neglect), 44 (teen dating violence).
- Substance use and withdrawal: 08, 11, 20, 29, 30, 31, 33, 39, 50.
- Coping: 28, 37.
- Cultural and spiritual: 13, 24, 25, 38, 45.
- Stress management: 14, 15, 40, 47.
- Sensory and perceptual alterations: 10, 16, 19, 27, 32, 36, 49.
- Behavioural interventions: 26, 34, 35.

I checked existing PSY topics in s11, s28 and the case batches first. I avoided their scenarios. The s01 Jehovah's Witness bow-tie and the s16 disulfiram item led me to drop those topics.

## Sources and verification

- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022. https://evolve.elsevier.com/cs/product/9780323697071
- Morgan KI, Townsend MC. Davis Advantage for Townsend's Psychiatric Mental Health Nursing, 11th edition, 2023. Same citation as s11.
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition, 2023. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. Same citation as the fixture.
- American Psychiatric Association. DSM-5-TR, 2022. https://www.psychiatry.org/psychiatrists/practice/dsm
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2024. https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html
- Giger JN, Haddad LG. Transcultural Nursing: Assessment and Intervention, 8th edition, 2021. https://shop.elsevier.com/books/transcultural-nursing/giger/978-0-323-69554-1
- ASAM Clinical Practice Guideline on Alcohol Withdrawal Management, 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- SAMHSA. TIP 63: Medications for Opioid Use Disorder, 2021. https://library.samhsa.gov/product/tip-63-medications-opioid-use-disorder/pep21-02-01-002
- Brunner E, et al. Joint Clinical Practice Guideline on Benzodiazepine Tapering. J Gen Intern Med 40(12):2814, 2025. https://pubmed.ncbi.nlm.nih.gov/40526204/
- Sechi G, Serra A. Wernicke's encephalopathy. Lancet Neurology 6(5):442, 2007. https://pubmed.ncbi.nlm.nih.gov/17434099/
- USPSTF, Curry SJ, et al. Unhealthy alcohol use screening. JAMA 320(18):1899, 2018. https://pubmed.ncbi.nlm.nih.gov/30422199/
- AACN Practice Alert. Facilitating Family Presence During Resuscitation and Invasive Procedures Throughout the Life Span. Critical Care Nurse 44(2):e1, 2024. https://aacnjournals.org/ccnonline/article/44/2/e1/32253/Facilitating-Family-Presence-During-Resuscitation
- Christian CW, AAP. The Evaluation of Suspected Child Physical Abuse. Pediatrics 135(5):e1337, 2015. https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse
- ENA and IAFN. Joint Position Statement: Human Trafficking Awareness in the Emergency Care Setting, 2023. https://pubmed.ncbi.nlm.nih.gov/39102314/
- Dong XQ. Elder Abuse: Systematic Review and Implications for Practice. JAGS 63(6):1214, 2015. https://pubmed.ncbi.nlm.nih.gov/26096395/
- CDC. About Teen Dating Violence, 2024. https://www.cdc.gov/intimate-partner-violence/about/about-teen-dating-violence.html
- Sege RD, Siegel BS, AAP. Effective Discipline to Raise Healthy Children. Pediatrics 142(6), 2018. https://pubmed.ncbi.nlm.nih.gov/30397164/
- Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet 383(9920):911, 2014. https://pubmed.ncbi.nlm.nih.gov/23992774/
- Pang L. Charles Bonnet Syndrome. Optometry and Vision Science 93(12):1466, 2016. https://pubmed.ncbi.nlm.nih.gov/27529611/
- Winstein CJ, et al. AHA/ASA Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke 47(6):e98, 2016.
- Cavanagh N, et al. Compassion fatigue in healthcare providers. Nursing Ethics 27(3):639, 2020. https://journals.sagepub.com/doi/10.1177/0969733019889400
- McEwen BS. Physiology and neurobiology of stress and adaptation. Physiological Reviews 87(3):873, 2007. https://pubmed.ncbi.nlm.nih.gov/17615391/

I verified each source with WebSearch for author, title, journal and year. PubMed pages would not load through WebFetch because they needed cookies, so the PMIDs were checked through search results.

## For the reviewer

- rn-s12-35: the rule of about 1 minute of time-out per year of age is in `refs`. I am sure it appears in pediatric nursing texts. I did not confirm that Sege and Siegel 2018 states it. Hockenberry is cited as well.
- rn-s12-33: the prescription sets the buprenorphine threshold at COWS 13 or more, so the key does not rest on one guideline cut-off. The ref gives COWS 13 to 24 as moderate withdrawal. TIP 63 wording on the exact start score should be checked.
- rn-s12-20: the ref gives an early withdrawal window of 6 to 24 hours after the last drink. It comes from ASAM 2020 in general terms. The exact wording was not checked.
- rn-s12-08: the flow sheet shows no lorazepam at 1000 and 1200. The rationale does not state the protocol's dosing threshold, because the stem does not give it.
- rn-s12-24: the claim that saving life comes before Sabbath rules is a general teaching point. I expect Giger covers it but did not confirm the page.
- rn-s12-42: adult protective services is the US reporting route. Canadian reporting rules differ by province. The Canada note is left for the later pass.
- rn-s12-44: the dnd triad includes "a visit to the nurse for a headache" as a distractor. This reason for the visit is weak evidence for any listed risk. Please check that no reviewer would call it defensible.
- CDC_TDV year 2024 is the page's revision year as best I could tell. The page may carry a later date.
