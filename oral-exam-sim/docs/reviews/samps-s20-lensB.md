# Review: batch s20, Abuse (domestic), Lens B

Lens: B, internal consistency and numbers. By request, the two rebuilt SAMPs (abuse-domestic-16 and abuse-domestic-25) also had a full Lens A check, because they were rebuilt after the Lens A review.

Scope: every SAMP in `src/samps/s20/abuse-domestic.ts` (abuse-domestic-16 to abuse-domestic-38) and in `src/samps/s20/review-extra.ts` (abuse-domestic-39 and abuse-domestic-40). Each SAMP was read on its own, stem, updates, options and every explanation sentence. Option lengths, parity, key positions, stem and prompt word counts were recomputed with a script.

Gates after the fixes: `npx tsc --noEmit -p . 2>&1 | grep samps/s20` prints nothing. `SAMP_BATCH=s20 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (488 tests). Every SAMP stays `reviewed: false`.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| abuse-domestic-39 | q1 | correct | Key was index 4 ("Thyroid stimulating hormone") while the explanation argues for insulin and C-peptide. The Lens A report says this was fixed, but the file still held index 4. Restored to index 2. | high |
| abuse-domestic-40 | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L seen on the first blood gas". The case has no blood gas or lactate. The Lens A report says it was removed, but it was still in the file. Removed. | high |
| abuse-domestic-16 | q3 | explanation | Said a person "who knows of an earlier report must report again". The physician has not reported before, so this is his first report, not a further one. CYFSA s.125(1) and (3) make each person report immediately and directly, without relying on another person's report. s.125(2) is the further report duty. Rewritten to match the statute. | medium |
| abuse-domestic-16 | q1 | explanation | "the fall he describes". The mother gave the bike history. He says little. Changed to the fall his mother describes. | medium |
| abuse-domestic-16 | q2 | explanation | "Bruises are often painless" is in neither the stem nor the CPS source, and the reason for rejecting "Ask him to point to sore areas" rested on it. Replaced with the stem fact that he looks to his mother before he answers. | medium |
| abuse-domestic-19 | q2 | stem | The explanation rejects head CT because "her examination shows neither" neurologic signs nor head injury. The stem never gave a neurologic or full examination. Added "The rest of the examination is normal." | medium |
| abuse-domestic-22 | q1 | option, stem, explanation | Distractor "Tenderness of the left wrist" was a finding the case does not contain, and the explanation admitted it. Replaced with "Scrape over the right shin", added that finding to the stem, and gave a true reason. Key position unchanged (index 2). | medium |
| abuse-domestic-22 | q3 | update | Timeline. The stem says he punched a wall 2 hours before a 23:30 arrival, and the update said he hit his father back "last night", which leaves the timing of the fracture unclear. Changed to "tonight". | medium |
| abuse-domestic-23 and abuse-domestic-39 | q1 | keyFeature | Mapped to key feature 2, which is about injured patients. Recurrent hypoglycemia is not an injury, and the question is about the test that confirms the manifestation. Remapped to key feature 3. | medium |
| abuse-domestic-23 and abuse-domestic-39 | q2 | keyFeature | Mapped to key feature 2. The question is the differential diagnosis of hypoglycemia, which is key feature 1 ("when establishing the differential diagnosis"). Remapped to 1. | medium |
| abuse-domestic-25 | q2 | explanation | "People with moderate dementia can often describe recent events" traces to no source. Replaced with the point Lachs and Pillemer make: a separate interview can show a history that differs from the caregiver's. | medium |
| abuse-domestic-25 | q3 | explanation | The Nova Scotia definition of an adult in need of protection (s.3(b)(i)) has three limbs: abuse where he lives, inability to protect himself because of disability or infirmity, and refusing, delaying or being unable to arrange his own protection. The third limb was missing. Added, tied to "He cannot manage on his own". | low |
| abuse-domestic-27 | q1 | stem | The option and explanation say "chest tightness at rest", but the stem never said at rest. Added "at rest" to the stem. | medium |
| abuse-domestic-27 | q4 | explanation | "Four normal workups and a normal ECG and troponin today" counts today's visit twice. Today is her fourth visit, so three earlier workups were normal. Fixed. | medium |
| abuse-domestic-28 | q2 | explanation | Called him "a controlling partner". The case never describes control. Reworded to their recent separation, his gun access and his threat with a weapon, all given in the case. | low |
| abuse-domestic-31 and abuse-domestic-40 | q1 | prompt | The prompt asked about "features in her record", but three options (arrival at 03:00, blood alcohol, bus shelter) come from tonight's visit. Changed to "features of her presentation". | low |
| abuse-domestic-34 | q1 | explanation | The BC Act requires the facility's "name and location", and the explanation gave the name only. Fixed. "He is capable" was not in the case. Changed to say that nothing suggests he cannot protect himself. | low |
| abuse-domestic-35 | q2, q3 | stem | The explanations call the partner "him", but the stem never gave the partner's sex. Stem now says "Her husband, her only caregiver". | low |
| abuse-domestic-37 | q3 | explanation | "directly and promptly". CYFSA s.125(1) says "immediately". Fixed. | low |
| abuse-domestic-38 | q2 | keyFeature | Mapped to key feature 1 (quiet clues in higher risk groups). The question is about why separation raises danger, which informs her safety and disposition. Remapped to key feature 6. | low |

## Key changes

- abuse-domestic-39 q1: before index 4 ("Thyroid stimulating hormone"), after index 2 ("Insulin and C-peptide levels"). The explanation and the matching item abuse-domestic-23 q1 both key insulin and C-peptide. This is the same change Lens A reported. It was not present in the file when this review started.

No key changes in abuse-domestic.ts.

## Numbers recomputed

- abuse-domestic-17: head circumference from the 50th percentile at 4 months to above the 98th at 6 months is 2 months, as the explanation says. Retinal hemorrhage 78% vs 5% (Maguire 2013). Lindberg 2012: 16 of 134 contacts under 24 months had abusive fractures, 11.9%, which rounds to the "12%" given. None had examination findings, and neuroimaging of 19 contacts under 6 months found nothing. The brother is 18 months old, so a skeletal survey and no routine neuroimaging is consistent.
- abuse-domestic-18: TEN-4-FACESp. Ear bruise and flank (torso) bruise in a child under 4 years. Both are TEN regions, so the rule is positive. 95.6% and 87.1% round to 96% and 87%. Transaminase threshold above 80 U/L. AST 310 and ALT 245 both exceed it. Sensitivity 83.8% and specificity 83.1% round to 84% and 83%.
- abuse-domestic-20: 5 months old, rolling from last week, sister 3 years old. Lindberg protocol (examination under 5 years, survey under 24 months, neuroimaging under 6 months) applied correctly to the sister.
- abuse-domestic-21: 13 years old. Criminal Code s.150.1 close in age exception is less than 2 years older and no position of trust. LMP 9 weeks. Consistent.
- abuse-domestic-24: 7 cm lateral right arm bruise exceeds the Wiglesworth "large (>5 cm)" cutoff. Third visit in 6 months with two earlier visits listed.
- abuse-domestic-26: EASI six questions, sensitivity 0.47, specificity 0.75, under 2 minutes, cognitively intact (27 of 30). 84 and 50 years, 6 kg loss to 58 kg. Consistent.
- abuse-domestic-27: MacMillan 2009, 46% vs 53%, modeled odds ratio 0.82 (0.32 to 2.12). The crude odds ratio from 46% and 53% is about 0.76. The explanation quotes the published modeled value, which is correct as written.
- abuse-domestic-31: GCS 14 with confused speech (verbal 4) is consistent. 14 prior visits and three injuries listed.
- abuse-domestic-32: 17 and 19 years, 2 year gap. Consistent.
- abuse-domestic-33: EPDS 16 at 5 weeks postpartum.
- abuse-domestic-35: baclofen three times daily for 6 weeks, bottle full. Sodium 149 mmol/L.
- abuse-domestic-36: 71 years, amnesia for the blow, GCS 15. Canadian CT Head Rule applies and age is a high risk factor.
- abuse-domestic-37: 2.2% of girls examined nonacutely (26 of 1160 is 2.24%). Last contact 10 days ago.
- Danger Assessment: no SAMP computes a score. abuse-domestic-28 and abuse-domestic-38 cite its risk factors only, and those match Campbell 2003.
- Format: all stems 50 to 150 words (range 86 to 131). All prompts 10 to 30 words. Single key positions first to fifth: 14, 14, 16, 17, 13 (highest 23%). The key is the longest option in 25 of 74 singles (33.8%), close to the 35% limit. The writer's report says 20. Any later edit that lengthens a key will break this gate.

## Lens A check of the rebuilt SAMPs

abuse-domestic-16:
- q1: CPS 2013 bruising practice point names "loop marks from impact with a cord" as patterned bruising and lists the buttocks and torso (including the back) as concerning sites. Supported.
- q2: CPS 2013 says "the entire skin surface should be examined" with attention to the neck, trunk, buttocks, genitalia, pinnae, hands and feet, and a skeletal survey for all children under 2 years. Supported. One unsupported reason replaced (see fixes).
- q3: checked against the official CYFSA text on ontario.ca. s.125(1) duty "immediately" to a society, s.125(2) ongoing duty, s.125(3) report directly and not rely on others, s.125(4) no duty at 16 or 17. The key holds. The explanation misapplied s.125(2) and was rewritten.
- q4: Romito 2021 AAP child life statement abstract covers preparation for procedures and coping strategies. Supported.
- Overlap: searched the bank for loop or cord bruises, child life, an open child welfare file and the ongoing duty. No repeat. Child life appears in s02 and s22 for procedural sedation only.

abuse-domestic-25:
- q1: Lachs and Pillemer 2015 table 1: "Ankles and wrists should be examined for abrasions suggestive of the use of restraints." Supported.
- q2: Lachs and Pillemer 2015: "The interview should be conducted alone with the patient" and suspected victims and perpetrators "should be interviewed separately and alone". Supported. In Nova Scotia a power of attorney covers property, and health decisions go to a delegate under a personal directive, so the claim that it gives no right to attend the interview holds.
- q3: read in the official PDF. s.5(1): "Every person who has information, whether or not it is confidential or privileged, indicating that an adult is in need of protection shall report that information to the Minister." s.3(a) adult is 16 or older. s.3(b)(i) definition quoted above. The key holds. Bill 34 (2021), the only later amendment bill found, stayed at first reading, so the 2014 consolidation is current.
- Overlap: s01 abuse-domestic-04 is also an older person with dementia neglected by a live-in relative caregiver (dry mucous membranes, bruising). Its questions are write-in findings, workup and disposition for an incapable adult in Ontario. The teaching points differ (restraint marks, POA and the private interview, the Nova Scotia duty). Low overlap.

## Sources verified

- Ontario Child, Youth and Family Services Act, 2017, s.125, official e-Laws text: https://www.ontario.ca/laws/statute/17c14
- Nova Scotia Adult Protection Act, R.S.N.S. 1989, c. 2, as amended 2014, official PDF: https://nslegislature.ca/sites/default/files/legc/statutes/adult%20protection.pdf
- Nova Scotia Bill 34 (2021) status: https://nslegislature.ca/legislative-business/bills-statutes/bills/assembly-64-session-1/bill-34
- Nova Scotia power of attorney scope: https://www.legalinfo.org/wills-estates-law/power-of-attorney
- BC Child, Family and Community Service Act ss.13 and 14: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96046_01 (13(1)(e)(ii) emotional harm from domestic violence and 13(1.2) confirmed)
- BC Gunshot and Stab Wound Disclosure Act ss.1 to 3: https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/10007_01
- Lachs MS, Pillemer KA. Elder abuse. NEJM 2015. Full text: https://maltraitancedesaines.com/wp-content/uploads/2019/11/2015_Lachs_Pillemer.pdf (restraint abrasions, interview alone, caregiver burden and respite, mandated treatment for psychiatrically ill abusers)
- Ward MG and colleagues, CPS bruising practice point 2013: https://pmc.ncbi.nlm.nih.gov/articles/PMC3887084/
- Romito B and colleagues, Child life services, Pediatrics 2021 (abstract, PMID 33372119)
- Abstracts through Europe PMC: Wiglesworth 2009 (PMID 19558476), Lindberg 2012 (PMID 22778300), Yaffe 2008 (PMID 18928055), MacMillan 2009 (PMID 19654384)

## Needs physician decision

- abuse-domestic-22 q3: the mandatory report for the 9-year-old sister rests on s.125(1) paragraph 2 (risk of physical harm by the person having charge). Lens A raised the same point.
- abuse-domestic-24 q2: "older adults with mild dementia can often describe recent events reliably" has no specific source. Kept, since the key does not depend on it.
- abuse-domestic-32 q2: the PHIPA exception for a significant risk of serious bodily harm is stated, but the question cites only the CYFSA. A physician may want PHIPA added as a source.
- abuse-domestic-35: stage 3 sacral pressure injury and dehydration in a dependent adult echo s01 abuse-domestic-04. The teaching point (withheld medication) differs. Low overlap.
- abuse-domestic-25 and abuse-domestic-34 open with "You are working in an emergency department in [province]" although the setting is not unusual. The bank uses this form 10 times, so it was left.
- abuse-domestic-39 and abuse-domestic-40 copy abuse-domestic-23 and abuse-domestic-31. They should not be added to the bank. Their defects were fixed so the file is consistent.
- The writer's report says 10 SAMPs have 4 questions and 13 have 3. The file has 11 and 12.

## Summary

- 25 SAMPs checked (23 in the main file and 2 in review-extra). 20 fix rows across 14 SAMPs.
- By category: facts or findings the case never gave 8 (abuse-domestic-16 twice, 19, 22, 25, 27, 28, 35). Wrong count or timeline 2 (abuse-domestic-22 q3, 27 q4). Statute wording 4 (abuse-domestic-16 q3, 25 q3, 34 q1, 37 q3). Key feature mapping 3 (abuse-domestic-23, 38, 39). Prompt wording 1 (abuse-domestic-31 and 40). Wrong key 1 and invented lab value 1 (abuse-domestic-39, 40). Reported Lens A fixes that were not in the file: 2.
- Most serious: abuse-domestic-39 q1 keyed TSH, and abuse-domestic-40 q2 cited a lactate the case never gave. Lens A reported both fixed, but neither was in the file. Also the misstated ongoing duty in abuse-domestic-16 q3 and the double-counted workups in abuse-domestic-27 q4.
- Key changes: 1 (abuse-domestic-39 q1).
- SAMP ids with a defect: abuse-domestic-16, abuse-domestic-19, abuse-domestic-22, abuse-domestic-23, abuse-domestic-25, abuse-domestic-27, abuse-domestic-28, abuse-domestic-31, abuse-domestic-34, abuse-domestic-35, abuse-domestic-37, abuse-domestic-38, abuse-domestic-39, abuse-domestic-40.
