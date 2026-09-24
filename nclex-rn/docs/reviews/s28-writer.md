# Batch s28 writer report

Stand-alone batch. 50 items, rn-s28-01 to rn-s28-50. All items are `reviewed: false` and `canada` is an empty string.

Checks run:

- `BATCH=s28 npx vitest run tests/bank.test.ts`: 61 of 61 tests pass. This includes the whole-bank near duplicate gate.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s28`: prints nothing.

## Counts

Client Needs: PSY 24, BCC 26. This matches the plan.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Item 23 is the trend mc (BCC, weekly weights). Item 26 is the trend matrix (PSY, mania flow sheet).

CJMM step: action 17, recognize 8, generate 8, analyze 6, evaluate 6, prioritize 5.

Difficulty: 1 has 3, 2 has 16, 3 has 19, 4 has 11, 5 has 1.

Calculations: items 05 (intake and output balance), 42 (PAINAD total) and 48 (continuous feeding rate). Each has a `calc` block. The batch has no PPT items, so the 12 percent rule does not apply.

## MC key positions

Across 27 mc items, counting the trend mc: position 1 has 7, position 2 has 7, position 3 has 6, position 4 has 7. The key is the strict longest option in 3 items (10, 34, 39).

Multi-key pools: keyed choices run longer than distractors in 9 of 22 pools. Select all keys in the first half of the list: 20 of 39.

## Coverage

PSY:

- Depression that looks like dementia
- Delusional fear of poisoning
- Codependence
- A monopolizing group member
- Coping after job loss
- Prolonged grief
- Early cues of aggression
- A religious fast with diabetes
- Triage on a mental health unit
- Alcohol withdrawal delirium (bow-tie)
- Cultural practice after a death
- Confidentiality limits with an adolescent
- Mania trend
- Inhalant signs
- PTSD versus acute stress disorder (triad)
- Financial exploitation
- Flashback grounding
- Activity in severe depression
- Assertive communication
- An autistic adolescent in hospital
- The first goal in depression with dehydration
- Phases of the nurse-client relationship
- Cannabinoid hyperemesis
- A traditional healing request

BCC:

- Cane on stairs
- Pressure injury prevention
- Intake and output
- Dysphagia feeding
- Gastrostomy bolus
- Sleep on a medical unit
- Crutch technique
- Fecal impaction
- Urinary retention (dyad)
- Oral care with a weak gag
- Bowel training
- Weight loss trend
- Dementia bathing
- Cold for a sprain
- Colostomy pouching
- Noisy breathing near death
- Wheelchair transfer
- Nasogastric feeding checks
- Functional incontinence
- Stage 2 pressure injury (bow-tie)
- Constipation teaching
- PAINAD scoring
- Postmortem care
- Incontinence types
- Feeding rate
- Judging a prevention plan

I checked the s11 topics and the PSY and BCC items already in the bank so these would not repeat them.

## Sources and verification

I verified journal articles through NCBI E-utilities (PubMed esummary) for author, title, journal, volume, pages and year. Books and web pages were checked on the publisher or agency page.

- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition. 2023. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition. 2022. https://shop.elsevier.com/books/varcarolis-foundations-of-psychiatric-mental-health-nursing/halter/978-0-323-69707-1
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's, 15th edition. 2022. Already used in the bank and the fixture.
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition. 2024. Same entry as s11.
- American Psychiatric Association. DSM-5-TR. 2022. https://www.psychiatry.org/psychiatrists/practice/dsm
- EPUAP, NPIAP, PPPIA. Prevention and Treatment of Pressure Ulcers/Injuries, 3rd edition. 2019. https://internationalguideline.com/2019
- Boullata JI et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN 41(1):15. 2017. https://pubmed.ncbi.nlm.nih.gov/27815525/
- Devlin JW et al. PADIS guideline. Crit Care Med 46(9):e825. 2018. https://pubmed.ncbi.nlm.nih.gov/30113379/
- Edinger JD et al. AASM behavioral treatments for chronic insomnia. J Clin Sleep Med 17(2):255. 2021. https://pubmed.ncbi.nlm.nih.gov/33164742/
- Sloane PD et al. Person-centered showering and the towel bath. J Am Geriatr Soc 52(11):1795. 2004. https://pubmed.ncbi.nlm.nih.gov/15507054/
- WOCN Society. Fecal or urinary ostomy guideline, executive summary. J WOCN 45(1):50. 2018. https://pubmed.ncbi.nlm.nih.gov/29300288/
- Warden V, Hurley AC, Volicer L. PAINAD. J Am Med Dir Assoc 4(1):9. 2003. https://pubmed.ncbi.nlm.nih.gov/12807591/
- Sorensen CJ et al. Cannabinoid hyperemesis syndrome review. J Med Toxicol 13(1):71. 2017. https://pubmed.ncbi.nlm.nih.gov/28000146/
- Hassanein M et al. Diabetes and Ramadan: Practical Guidelines 2021. Diabetes Res Clin Pract 185:109185. 2022. https://pubmed.ncbi.nlm.nih.gov/35016991/
- American Society of Addiction Medicine. Alcohol Withdrawal Management guideline. J Addict Med 14(3S). 2020. https://pubmed.ncbi.nlm.nih.gov/32511109/
- Sullivan JT et al. CIWA-Ar. Br J Addict 84(11):1353. 1989. https://pubmed.ncbi.nlm.nih.gov/2597811/ (declared in common.ts but not cited by any item)
- Yalom ID, Leszcz M. The Theory and Practice of Group Psychotherapy, 6th edition. 2020. https://www.hachettebookgroup.com/titles/irvin-d-yalom/the-theory-and-practice-of-group-psychotherapy/9781541617575/
- National Consensus Project. Clinical Practice Guidelines for Quality Palliative Care, 4th edition. 2018. https://www.nationalcoalitionhpc.org/ncp/
- Moons L, De Roo ML, Deschodt M, Oldenburger E. Death rattle review. Ann Palliat Med 13(1):150. 2024. https://pubmed.ncbi.nlm.nih.gov/38073292/
- Mosafer H et al. Factors associated with financial exploitation in older adults. Geriatr Nurs 61:662. 2025. https://pubmed.ncbi.nlm.nih.gov/39516091/
- White JV et al. AND and ASPEN malnutrition consensus statement. JPEN 36(3):275. 2012. https://pubmed.ncbi.nlm.nih.gov/22535923/
- Gould CV et al. HICPAC CAUTI guideline. Infect Control Hosp Epidemiol 31(4):319. 2010. https://pubmed.ncbi.nlm.nih.gov/20156062/
- National Institute on Drug Abuse. Inhalants research topic page, updated 2024-09-18. https://nida.nih.gov/research-topics/inhalants
- SAMHSA TIP 57 (2014) and the HHS CLAS standards (2013). Same entries as s11.

## For the reviewer

- The session's WebSearch budget was used up before this batch began, so I checked sources through PubMed E-utilities, WebFetch and curl. I did not open textbook pages. Claims cited to Potter, Halter and Hinkle rest on standard teaching: cane and crutch technique, transfer, chin tuck, oral care, bowel training, cold therapy, postmortem care, the Braden high-risk band, incontinence types, phases of the relationship, assertive communication.
- Potter 11th edition went on sale in January 2022. I used the 2023 copyright year to match the rest of the bank.
- Item 12: the prolonged grief disorder threshold of 12 months for adults and the rule that PTSD after a loved one's death needs a violent or accidental death are from DSM-5-TR. I did not open the manual text.
- Item 16: in the Ramadan guideline, glucose testing does not break the fast and the pre-dawn meal is encouraged. Metformin timing is left to the provider review, which is the key.
- Item 20: the stem does not say when the client last drank. The rationale assumes drinking stopped at admission for surgery 3 days earlier.
- Item 22: the item teaches asking rather than assuming. It does not state specific Islamic death rites. That keeps it from stereotyping, but a reviewer may want a faith-specific source.
- Item 23: the 5 percent in 1 month threshold is from the malnutrition consensus statement. The loss here is 3.1 kg of 62.0 kg, which is 5.0 percent. The rationale says "about 5 percent" to avoid a calc block.
- Item 31: side-lying for death rattle and not suctioning deeply follow the Moons review. The NCP guideline supports family explanation in general terms.
- Item 32: Mosafer covers risk factors such as living alone and cognitive impairment. The specific warning signs rest on Halter.
- Item 35: the 30 degree head of bed minimum is in refs and cited to ASPEN.
- Item 42: PAINAD has no official severity bands in Warden 2003, so the item asks only for the total.
- Item 49: the key asks what the ceremony involves. Smoke near oxygen is given as an example in the rationale only.
