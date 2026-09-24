# Review: batch s20, Abuse (domestic), Lens A

Lens: A, clinical truth.

Scope: every SAMP in `src/samps/s20/abuse-domestic.ts` (abuse-domestic-16 to abuse-domestic-38) and in `src/samps/s20/review-extra.ts` (abuse-domestic-39 and abuse-domestic-40). Writer notes in `docs/reviews/writer-s20.md` were read first.

Gates after the fixes: `tsc` has no s20 errors. `SAMP_BATCH=s20 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (488 tests). Every SAMP stays `reviewed: false`.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| abuse-domestic-16 | q2 | explanation | Said head imaging is indicated for "a visible injury to the face or head". CPS 2025 says visible signs of head injury, particularly in infants. Reworded to the CPS wording and tied to the facial bruise and frenulum. | medium |
| abuse-domestic-16 | q4 | explanation | Called the rib fracture "nondisplaced". The update never says so. Removed. | medium |
| abuse-domestic-20 | q2 | explanation | Called a linear skull fracture "only moderately specific". In the standard specificity table (Kleinman, used by ACR) simple linear skull fractures have low specificity. Fixed. | high |
| abuse-domestic-20 | q2 | explanation | Rejected a spiral tibial fracture as "typical of children who walk", but the prompt asks about an infant. Rewritten: a shaft fracture is concerning in an infant who does not walk, but long bone shaft fractures have low specificity. Buckle fracture reason made separate. | high |
| abuse-domestic-23 | q1 | explanation | Added that some insulin assays miss insulin analogues, so a suppressed C-peptide during hypoglycemia is suspicious even without a high insulin. His mother has type 1 diabetes, so she probably uses an analogue. | medium |
| abuse-domestic-23 | q2 | source | The insulin and C-peptide patterns were cited to the AAP fabricated illness report, which does not give them. Added and cited Cryer 2009, Endocrine Society, table 3 (exogenous insulin: high insulin, low C-peptide and proinsulin, no hypoglycemic agent. Insulinoma and sulfonylurea: C-peptide raised). | high |
| abuse-domestic-23 | q4 | option, explanation | "Repeat the fast before any report" and "A further fast" refer to a fast that the case never gave. Changed to "Repeat the workup before any report". Key position unchanged. | medium |
| abuse-domestic-25 | q2 | explanation, source | The PPCA is described as covering "a client of a publicly funded care service". The current Act defines service providers, which include a continuing care home, and publicly funded supportive living is a type B continuing care home. Reworded. Added section 7 and the King's Printer URL to the citation. | medium |
| abuse-domestic-29 | q3 | explanation | Said the BC CFCSA "treats a child as likely to be physically harmed" when living with domestic violence. Section 13(1.2) says only that the likelihood of physical harm increases. Fixed. The key holds. | high |
| abuse-domestic-32 | q2 | explanation | "Confidentiality can be broken only for a serious and imminent risk of harm" misstates Ontario PHIPA section 40(1). That section needs a significant risk of serious bodily harm, not an imminent one. Fixed. | medium |
| abuse-domestic-33 | q2 | explanation | Argued that shaking causes brain injury with no outward sign and then said an examination is enough. Now says the assessment starts with an examination and goes on to head imaging when shaking is reported. | medium |
| abuse-domestic-34 | q2 | explanation | "Pressing charges is his decision" is false in Canada. Police and the Crown lay charges. Reworded to say that whether to involve police is his decision. | high |
| abuse-domestic-36 | q2 | explanation | Same error: "Charges are the father's choice". Reworded. | high |
| abuse-domestic-37 | q2 | explanation | Gave no reason for rejecting "Enlarged hymenal opening", "Perianal scarring" or "Healed hymenal transection". Added a true reason for each (Adams 2018). | medium |
| abuse-domestic-39 (review-extra) | q1 | correct | Keyed "Thyroid stimulating hormone" (index 4). The explanation argues for insulin and C-peptide. Key restored to index 2. | high |
| abuse-domestic-40 (review-extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L seen on the first blood gas". The case has no such result, and lactate has nothing to do with the timing of the question. Sentence removed. | high |

## Key changes

- abuse-domestic-39 q1: before index 4 ("Thyroid stimulating hormone"), after index 2 ("Insulin and C-peptide levels"). The explanation and the other SAMP with this item (abuse-domestic-23 q1) both key insulin and C-peptide. TSH does not explain severe hypoglycemia.

No key changes in abuse-domestic.ts.

## Checked and found correct

- abuse-domestic-16 q2: head CT in a 4-month-old with a cheek bruise, a torn frenulum and a normal examination. CPS 2025 advises imaging for visible head injury "particularly in infants", and the face counts. The key holds. The TEN-4-FACESp elements are also correct: frenulum, fleshy cheek, and any bruise at 4.99 months or younger.
- abuse-domestic-17 q3: retinal hemorrhage 78% in abusive vs 5% in non-abusive head trauma (Maguire 2013). Dilated eye examination ideally within 72 hours (CPS 2025).
- abuse-domestic-17 q4 and abuse-domestic-20 q4: Lindberg 2012 found abusive fractures in 16 of 134 contacts under 24 months (11.9%), none with examination findings, and no injuries on neuroimaging in 19 of 25 eligible contacts under 6 months. The protocol was examination under 5 years, skeletal survey under 24 months and neuroimaging under 6 months.
- abuse-domestic-18 q1 and q2: TEN-4-FACESp 95.6% sensitive and 87.1% specific. Transaminase threshold 80 IU/L, sensitivity 83.8% and specificity 83.1%.
- abuse-domestic-20 q3: repeat skeletal survey at about 14 days (CPS 2025).
- abuse-domestic-21: Criminal Code s.150.1, close in age exception for 12 and 13 year olds (less than 2 years older, no position of trust).
- abuse-domestic-22 q3: Ontario CYFSA s.125 grounds include a risk that a child is likely to suffer physical harm inflicted by the person having charge. A report about the 9-year-old sister is defensible as mandatory. For 16 and 17 year olds a report is permitted, not required. Kept, but see the physician list.
- abuse-domestic-22 q4: voluntary youth services agreements for 16 and 17 year olds under CYFSA s.77.
- abuse-domestic-23 q2: insulin 520 pmol/L with undetectable C-peptide means exogenous insulin (Cryer 2009, table 3).
- abuse-domestic-24 q1: bruises over 5 cm on the face, lateral right arm or posterior torso (Wiglesworth 2009).
- abuse-domestic-24 q3 and abuse-domestic-26 q2: Ontario Public Guardian and Trustee investigations need alleged incapacity and serious adverse effects (SDA ss.27 and 62). Ontario has no mandatory report for a capable adult in the community.
- abuse-domestic-25 q2: PPCA s.7(1) duty on every individual with reasonable grounds to believe, reporting to a complaints officer, police or another authorized body, as soon as reasonably practicable (s.8(1)).
- abuse-domestic-26 q1: EASI has six questions, sensitivity 0.47, specificity 0.75, under 2 minutes, cognitively intact seniors (Yaffe 2008).
- abuse-domestic-27 q2: MacMillan 2009, 11 EDs, 12 family practices and 3 obstetrics and gynecology clinics in Ontario. 46% vs 53%, OR 0.82 (0.32 to 2.12).
- abuse-domestic-28 and abuse-domestic-38: Campbell 2003 risk factors (gun access, prior threat with a weapon, estrangement from a controlling partner). Danger Assessment validation (Campbell 2009).
- abuse-domestic-29 q3: BC CFCSA s.14(1), "reason to believe", report promptly to a director. The duty applies even to confidential information (s.14(2)).
- abuse-domestic-34 q1: BC Gunshot and Stab Wound Disclosure Act s.2(1). The health care facility discloses name, the fact of treatment and the facility. A "stab wound" includes any wound from a knife and excludes wounds reasonably believed to be self-inflicted or unintentional.
- abuse-domestic-36 q1: Canadian CT Head Rule. The Lancet abstract reads "age >65". The patient is 71, so the key holds under either wording.
- abuse-domestic-37 q2: 2.2% (26 of 1160) of girls examined nonacutely had diagnostic findings (Adams 2018).

## Sources verified

- Shouldice M, Ward MGK, Nolan K, Cory E. CPS THI-CM. 2025. Full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12402887/
- Maguire SA and colleagues. Eye 2013. Abstract through Europe PMC (PMID 23079748).
- Lindberg DM and colleagues. Pediatrics 2012 (PMID 22778300) and 2013 (PMID 23319537). Abstracts through Europe PMC.
- Pierce MC and colleagues. JAMA Netw Open 2021 (PMID 33852003). Abstract through Europe PMC.
- MacMillan HL and colleagues. JAMA 2009 (PMID 19654384). Abstract through Europe PMC.
- Yaffe MJ and colleagues. EASI 2008 (PMID 18928055). Abstract through Europe PMC.
- Wiglesworth A and colleagues. 2009 (PMID 19558476). Abstract through Europe PMC.
- Adams JA, Farst KJ, Kellogg ND. 2018 (PMID 29294380). Abstract through Europe PMC.
- Campbell JC and colleagues. 2003 (PMID 12835191) and 2009 (PMID 18667689). Abstracts through Europe PMC.
- Stiell IG and colleagues. Lancet 2001 (PMID 11356436). Abstract through Europe PMC.
- Rosen T and colleagues. J Emerg Med 2016 (PMID 26810019). Abstract through Europe PMC.
- Lachs MS, Pillemer KA. NEJM 2015 (PMID 26559573). Listing and abstract only.
- Flaherty EG, MacMillan HL. Pediatrics 2013. Publisher page: https://publications.aap.org/pediatrics/article/132/3/590/31627/ Real, but it does not give the insulin and C-peptide patterns.
- Cryer PE and colleagues. Endocrine Society hypoglycemia guideline. J Clin Endocrinol Metab 2009. Table 3 checked: https://academic.oup.com/jcem/article/94/3/709/2596247 (newly added)
- Alberta Protection for Persons in Care Act, ss.1, 7 and 8. Current text from King's Printer: https://kings-printer.alberta.ca/documents/Acts/P29P1.pdf
- BC Child, Family and Community Service Act, ss.13 and 14: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96046_01
- BC Gunshot and Stab Wound Disclosure Act, ss.1 to 3: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/10007_01
- Ontario CYFSA s.125 grounds, the direct duty and the 16 and 17 year old rule, through the OCSWSSW guidance: https://www.ocswssw.org/ocswssw-resources/the-duty-to-report-under-the-child-youth-and-family-services-act-2017/ e-Laws and CanLII would not render or refused access.
- Ontario SDA s.62, through secondary summaries only. Statute text not rendered.
- WHO 2013 and Rosen's 10th edition were not fetched. They carry most of the reasons in abuse-domestic-30, 31, 35 and 38. Those reasons were checked against general knowledge and none is false. They still lack a specific passage.

## Overlap with the bank

Searched all of `src/samps/` for the batch's scenarios and teaching points. These repeat existing SAMPs:

1. abuse-domestic-16 repeats s01 abuse-domestic-06 ("Irritable infant after a short fall") almost question by question. Both have a 4-month-old with facial or ear bruising and TEN-4-FACESp, an occult injury workup, then an update of healing posterior rib fractures leading to a direct, non-delegable Ontario report to a children's aid society, then the child protection team. The distractors in q3 match too: social worker, confirmation first, police only. Rebuild or drop. High.
2. abuse-domestic-25 repeats s01 abuse-domestic-05 ("Long-term care resident with leg pain"). Both have a care home resident with dementia, a femoral neck fracture and bruising, and a personal duty to report that cannot be left to the facility and needs no confirmation or family consent. Only the province differs. Rebuild q1 and q2 or drop. High.
3. abuse-domestic-20 q1 repeats s06 msk-13 ("Infant who will not move a leg"): a 4-month-old boy with a spiral femoral shaft fracture, then a skeletal survey. Medium.
4. Within the batch, "skeletal survey for any child under 2 with suspected abuse" is keyed in abuse-domestic-16 q2, abuse-domestic-17 q3, abuse-domestic-19 q2 and abuse-domestic-20 q1. Four keys teach the same point. Medium.
5. Within the batch, screening of household contacts after Lindberg 2012 is taught twice (abuse-domestic-17 q4 and abuse-domestic-20 q4). Medium.
6. Within the batch, "no mandatory report for a capable adult in Ontario, and the PGT acts only on incapacity" is taught twice (abuse-domestic-24 q3 and abuse-domestic-26 q2). Medium.
7. abuse-domestic-30 q1 (the husband as ASL interpreter, so use a professional) repeats the point of s01 abuse-domestic-09 q2 (the husband as Punjabi interpreter). Low to medium.
8. abuse-domestic-34 q2 and q3 (acknowledge that men are abused, services that serve men) repeat s01 abuse-domestic-02 q2 and q3. q1, the BC stab wound law, is new. Low to medium.
9. abuse-domestic-27 q1 and abuse-domestic-32 q1 (phone monitoring as a sign of control) overlap s01 abuse-domestic-15 q1. abuse-domestic-29 q2 (believe her and ask about her needs) overlaps s01 abuse-domestic-15 q2. Low.
10. abuse-domestic-29 q3 (children exposed to partner violence must be reported) repeats the point of s01 abuse-domestic-08 q3, under a different province's statute. Low.
11. review-extra: abuse-domestic-39 copies abuse-domestic-23 word for word, and abuse-domestic-40 copies abuse-domestic-31 word for word. Both would fail the duplicate stem test and should not be added to the bank. Their defects were still fixed (see above). High.

## Needs physician decision

- abuse-domestic-16 and abuse-domestic-25: rebuild or drop because of the s01 duplication above. I did not rebuild them, because a rebuild changes every question and should go back through both lenses.
- abuse-domestic-22 q3: the mandatory report for the sister rests on "risk of physical harm by the person having charge" under CYFSA s.125. I think it is defensible, but it is an inference, and some physicians may call it discretionary.
- abuse-domestic-24 q4: caregiver strain is keyed as the driver of the abuse. The literature treats it as one risk factor among others. Perpetrator dependency, mental illness and substance use may be stronger. The key is the best of the options, but the wording "most directly addresses a likely driver" needs a physician's view.
- abuse-domestic-33 q2: the keyed option "Examination of the infant and a report" is now explained as the start of an assessment that includes head imaging. A physician may prefer to rewrite the option, for example as "Infant abuse assessment and a report", subject to option length parity.
- abuse-domestic-39 and abuse-domestic-40: remove from consideration as duplicates.
- Side note from the writer: s01 abuse-domestic-01 and abuse-domestic-11 cite SOGC guideline 157 (2005), which PubMed lists as retired. Outside this batch. Not changed.

## Summary

- 23 SAMPs in the main file and 2 in review-extra reviewed. 16 fixes in 12 SAMPs: 10 in the main file and 2 in review-extra.
- By category: false or missing distractor reasons 5 (abuse-domestic-20 twice, 34, 36, 37). Statute wording 3 (abuse-domestic-25, 29, 32). Missing source 1 (abuse-domestic-23 q2). Facts the case never gave 3 (abuse-domestic-16 q4, 23 q4, 40 q2). Clinical nuance 3 (abuse-domestic-16 q2, 23 q1, 33 q2). Wrong key 1 (abuse-domestic-39).
- Key changes: 1 (abuse-domestic-39 q1). None in the main file.
- Overlap: 2 serious duplicates of s01 (abuse-domestic-16 and 25), 2 verbatim internal duplicates in review-extra, and 7 lesser repeats.
- SAMP ids with a defect: abuse-domestic-16, 17, 19, 20, 23, 24, 25, 26, 27, 29, 30, 32, 33, 34, 36, 37, 39, 40. SAMPs 17, 19, 24, 26, 27 and 30 are there for overlap only.
