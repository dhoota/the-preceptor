# SAMP review: batch s37, Eye: red eye and loss of vision. Lens A

Reviewer lens: A, clinical truth. Scope: `src/samps/s37/eye.ts` (eye-16 to eye-38) and `src/samps/s37/review-extra.ts` (eye-39 and eye-40). The writer notes in `docs/reviews/writer-s37.md` were read first. Every question, option and explanation was read against its stem. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after the fixes: `npx tsc --noEmit -p . 2>&1 | grep samps/s37` shows nothing. `SAMP_BATCH=s37 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 496 of 496. review-extra.ts is not loaded by the suite.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| eye-39 (review-extra) | q1 | correct | Keyed "Dilated fundus examination" (index 1). The explanation argues for the slit lamp, and dilating before the chamber is checked can hide a microhyphema. Key set to index 4, "Slit lamp examination". | high |
| eye-40 (review-extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L seen on the first blood gas". The case has no blood gas, and lactate cannot confirm an organism. Sentence removed. | high |
| eye-33 | q4 | explanation | Said oral fluconazole "reaches filamentous fungi poorly". Fluconazole penetrates the eye well. The true reason is that it has little activity against filamentous fungi such as Fusarium. Reworded. | high |
| eye-33 | q4 | explanation | Named natamycin as the usual start without noting that it is not marketed in Canada (no entry in the Health Canada Drug Product Database). Now names natamycin through the Special Access Program or voriconazole, as in Thomas 2013. | medium |
| eye-26 | sources | url | The Okhravi 2005 URL pointed to PMID 16644370, a 2006 letter by Lin et al. Corrected to PMID 15967190. | high |
| eye-27, eye-28 | sources | citation | The AAO Retinal Vein Occlusions and Diabetic Retinopathy PPPs cited were the 2019 editions (Flaxel, Ophthalmology 2020). Both were replaced in 2025 (Kovach et al and Lim et al). Citations updated with PubMed URLs. The statements tested still hold. | high |
| eye-16, 17, 18, 21, 22, 31, 32, 33 | sources | citation | The 2024 Conjunctivitis and Bacterial Keratitis PPPs were credited to a "Committee". They are by the AAO PPP Cornea/External Disease Panel (conjunctivitis lead authors Cheung, Choi, Ahmad). Corrected, with AAO URLs. The HSV guideline title was also corrected and its AAO URL added. | medium |
| eye-20, 21, 23, 17, 38 | sources | url | ONTT, Jones and Rhee, Walton, Wipperman and Loeys were verified on Europe PMC and PubMed URLs were added. | low |
| eye-16 | q3 | explanation | "A 250 mg dose is twice the maximum" holds only under the CPS 125 mg cap, and the writer notes that other references allow up to 250 mg. Now says 250 mg is 100 mg/kg, twice the weight based dose, and above the Canadian maximum, which is true under every reference. | medium |
| eye-20 | q4 | explanation | Stated that plasma exchange is reserved for steroid failures as though from the cited ONTT, which never studied it. Now says it was not studied in the trial and is kept for severe attacks that fail IV steroids. | medium |
| eye-21 | q2 | explanation | Keyed "Stop them" while the explanation said ophthalmology would decide "whether a taper" was needed, which contradicts the key. Rewritten: the steroid is stopped, and ophthalmology sees him in 1 to 2 days for the optic nerves, pressure drops and the corneal opacities, which can flare on withdrawal. | medium |
| eye-22 | q3 | explanation | Rejected "Debridement and patching" only for the patching. Epithelial debridement is a recognized ophthalmology adjunct for dendritic keratitis. The explanation now says so, and why the option is still wrong. | medium |
| eye-23 | q2 | explanation | "Warm compresses to the eye" had no stated reason for rejection. Reason added. | medium |
| eye-24 | stem | stem | The q1 explanation relied on "a normal level of alertness", which the case never gave. "Is alert and oriented" added to the stem. | medium |
| eye-26 | q3 | explanation | Said scleritis "signals active systemic vasculitis". This holds for necrotizing scleritis in rheumatoid arthritis, not for every scleritis. Now "can also signal". | low |
| eye-27 | q4 | explanation | Rejected carotid Doppler as aimed at "arterial occlusion". The 2025 AAO RVO PPP lists carotid occlusive disease as a CRVO risk factor. The reason now says carotid disease is a weaker association and Doppler is kept for carotid symptoms or ocular ischemia. The key (CBC, lipids, A1c) is unchanged. | medium |
| eye-34 | q1 | source | Cited Reddy 2012 for warm compresses and spontaneous opening in 1 to 4 days. In Reddy's cases the lids were pulled apart and the lashes trimmed, so the source does not support the teaching. q1 now cites Tintinalli, which was added to the SAMP's sources. | low |

## Key changes

- eye-39 q1 (review-extra): before index 1 "Dilated fundus examination", after index 4 "Slit lamp examination". The explanation already supported the new key. It matches eye-23 q1.

No key was changed in eye.ts.

## Duplicate content in review-extra.ts

- eye-39 is eye-23 word for word, except for the wrong key.
- eye-40 is eye-31 word for word, except for the invented lactate sentence.
- Both would fail the duplicate stem test and should not be added to the bank. Their defects were still fixed.

## Points checked and found sound

- eye-16 q3. The CPS 2015 statement gives ceftriaxone 50 mg/kg to a maximum of 125 mg IV or IM once. At 2.5 kg that is 125 mg. Azithromycin 20 mg/kg is 50 mg. The key holds under every reference.
- eye-19. Fraunfelder 2004 (abstract on Europe PMC): topiramate angle closure is bilateral and secondary, iridectomy is ineffective, and it reverses when the drug is stopped. The 85% within 2 weeks and almost 50% at 50 mg or less figures are confirmed from the series as summarized in BMC Pediatrics 2014. Cycloplegia is supported there as well. Acetazolamide is not an option, so leaving it out makes no key error. The menu key (brimonidine, cyclopentolate, timolol) is defensible.
- eye-20 q4. The ONTT abstract confirms oral prednisone alone increased new episodes (relative risk 1.79).
- eye-21 q1 and eye-32 q3. Jones and Rhee 2006 confirm steroid response risk factors.
- eye-23. Head elevation is not keyed, which is correct given the Cochrane 2019 review.
- eye-25 q3. Vancomycin with ceftazidime is a standard example of IV open globe prophylaxis. See "Needs physician decision".
- eye-27 q4. The 2025 AAO RVO PPP stresses control of blood pressure, diabetes and lipids and keeps the hypercoagulable workup for patients under 50. That supports CBC, lipids and A1c over thrombophilia and homocysteine.
- eye-30 q1. Jackson 2014 confirms fever in 74% ("about three quarters").
- eye-31 q3. CPS AOM (reaffirmed 21 November 2024) states that amoxicillin-clavulanate or cefuroxime axetil is preferred for otitis-conjunctivitis syndrome. Verified word for word.
- Canadian products checked in the Health Canada Drug Product Database: trifluridine 1% (Viroptic), apraclonidine 1% (Iopidine), phenylephrine 2.5% (Mydfrin), naphazoline 0.012% (Clear Eyes), olopatadine 0.1%, brimonidine 0.2%, dorzolamide 2%, ketorolac 0.5%, pilocarpine 2% and cyclopentolate 1% are marketed. Natamycin has no entry (see eye-33).
- Key feature tags are acceptable, except eye-35 q3 (see below).
- Snellen acuity. No case needs acuity in the stem to answer a question before the first update, so none was moved.

## Sources verified

- CPS, Moore and MacDonald 2015, ophthalmia neonatorum: https://academic.oup.com/pch/article/20/2/93/2647267
- CPS, Le Saux and Robinson 2016, reaffirmed 2024, acute otitis media: https://cps.ca/en/documents/position/acute-otitis-media
- AAO Conjunctivitis PPP 2024 (Ophthalmology 131(4):P134 to P204): https://www.aao.org/education/preferred-practice-pattern/conjunctivitis-ppp-2023
- AAO Bacterial Keratitis PPP 2024 (Ophthalmology 131(4):P87 to P133): https://www.aao.org/education/preferred-practice-pattern/bacterial-keratitis-ppp-2023
- White and Chodosh, AAO HSV keratitis treatment guideline 2014: https://www.aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline
- AAO Retinal Vein Occlusions PPP 2025, Kovach et al: https://pubmed.ncbi.nlm.nih.gov/39918523/ (full text read from the AAO PDF)
- AAO Diabetic Retinopathy PPP 2025, Lim et al: https://pubmed.ncbi.nlm.nih.gov/39918521/
- Beck et al, ONTT 1992: https://pubmed.ncbi.nlm.nih.gov/1734247/
- Fraunfelder et al 2004: https://pubmed.ncbi.nlm.nih.gov/14711721/ and the series summary in https://link.springer.com/article/10.1186/1471-2431-14-96
- Jones and Rhee 2006: https://pubmed.ncbi.nlm.nih.gov/16552251/
- Walton et al 2002: https://pubmed.ncbi.nlm.nih.gov/12161209/
- Gharaibeh et al, Cochrane 2019: https://pubmed.ncbi.nlm.nih.gov/30640411/
- Jordan et al 1998: https://pubmed.ncbi.nlm.nih.gov/9842557/
- Ellis et al 2012: https://pubmed.ncbi.nlm.nih.gov/22537135/
- Reddy 2012: https://pubmed.ncbi.nlm.nih.gov/23166877/
- Jackson et al 2014: https://pubmed.ncbi.nlm.nih.gov/25113611/
- Thomas and Kaliamurthy 2013: https://pubmed.ncbi.nlm.nih.gov/23398543/
- Lachkar and Bouassida 2007: https://pubmed.ncbi.nlm.nih.gov/17301614/
- Tarlan and Kiratli 2013: https://pubmed.ncbi.nlm.nih.gov/23843690/
- Lahham et al 2019: https://pubmed.ncbi.nlm.nih.gov/30977855/
- Okhravi et al 2005: https://pubmed.ncbi.nlm.nih.gov/15967190/
- Wipperman and Dorsch 2013: https://pubmed.ncbi.nlm.nih.gov/23317075/
- Loeys et al 2010: https://pubmed.ncbi.nlm.nih.gov/20591885/
- Rosen 10th edition 2023 and Tintinalli 9th edition 2020 are real editions. Chapter text was not checked online.

## Overlap

1. eye-25 (81-year-old woman on apixaban falls and strikes the eye) repeats the setup of s10 eye-11 (82-year-old woman on apixaban falls and strikes the orbit). The teaching differs (open globe here, retrobulbar hemorrhage there), but the scenario reads as the same patient. Medium.
2. eye-23 (blunt trauma, triage label "subconjunctival hemorrhage, low acuity", slit lamp for microhyphema, shield and acetaminophen) repeats the teaching and the triage label device of s10 eye-10 ("labelled this a bruised eye"). eye-35 q1 tests microhyphema on the slit lamp a third time. Medium.
3. eye-37 (drug-triggered pupil block in a farsighted older woman) repeats s10 eye-01 (diphenhydramine trigger, farsighted). The writer flagged this. Its COPD drop choice and inhaler questions are new. Low.
4. eye-21 q3 (cool compresses, no steroid for viral conjunctivitis) and eye-32 q3 (steroid pressure rise) repeat teaching points of s10 eye-03 and eye-04. KF 4 invites some repetition. Low.

## Needs physician decision

- eye-25 q3: vancomycin with ceftazidime is keyed as the IV prophylaxis. Many Canadian centres use a fluoroquinolone (for example moxifloxacin) instead. The option is written as an example, and the other options are clearly wrong, so I kept it.
- eye-21 q2: some ophthalmologists taper rather than stop dexamethasone after 3 weeks because subepithelial infiltrates can rebound. The key reads "Stop them and refer to ophthalmology". Confirm that this wording is acceptable.
- eye-35 q3 is tagged key feature 4 (steroids in viral infection), but the case is sterile traumatic iritis. The tag is a stretch. KF 4 is still covered by six other questions if it is retagged.
- eye-27 q2: "Anticoagulation is not recommended for vein occlusion" is standard teaching but is not stated in the 2025 AAO RVO PPP. Low.
- eye-17 q4 cites Wipperman 2013 (corneal abrasion) for ultraviolet keratitis treatment. The treatment is the same, but the source is indirect. Low.
- eye-25 and eye-23: see Overlap 1 and 2. Decide whether to rebuild or keep.

## Summary

- 23 SAMPs in eye.ts and 2 in review-extra.ts reviewed. 17 fix rows in the table.
- By category: wrong key 1 (eye-39). Invented fact 1 (eye-40). False distractor reason 2 (eye-33 fluconazole, eye-27 carotid). Missing distractor reason 2 (eye-22 debridement, eye-23 warm compresses). Explanation contradicting the key 1 (eye-21). Overstated or unsupported claim 3 (eye-16, eye-20, eye-26). Non-Canadian product 1 (eye-33 natamycin). Stem fact missing 1 (eye-24). Sources: 2 PPPs outdated (eye-27, eye-28), 1 wrong URL (eye-26), panel names corrected (8 SAMPs), 1 source not supporting the teaching (eye-34).
- Most serious: eye-39 q1 wrong key. eye-40 q2 invented lactate. eye-33 q4 false reason for rejecting fluconazole. eye-21 q2 explanation contradicting its own key.
- Key changes: 1 (eye-39 q1, review-extra). None in eye.ts.
- SAMP ids with a defect: eye-16, eye-17, eye-18, eye-20, eye-21, eye-22, eye-23, eye-24, eye-25, eye-26, eye-27, eye-28, eye-31, eye-32, eye-33, eye-34, eye-35, eye-37, eye-38, eye-39, eye-40. eye-17, eye-18, eye-31, eye-32 and eye-38 are there for citation corrections only. eye-25 and eye-37 are there for overlap only.
