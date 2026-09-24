# SAMP writer report. Batch s27, cerebrovascular accident (CVA)

32 new SAMPs, ids cva-16 to cva-47, in `src/samps/s27/cva.ts`. The file exports `CVA_S27_SAMPS` and `src/samps/s27/index.ts` exports it as `SAMPS_S27`. All SAMPs have `reviewed: false`. The 15 existing SAMPs in `src/samps/s05/cva.ts` were read first. Their scenarios were not repeated. These were hypoglycemia on a sulfonylurea, Todd paralysis with a meningioma, HINTS head impulse in vertigo, basilar occlusion with AF off apixaban, Wernicke aphasia labelled as delirium, right MCA with thrombolysis dose and BP drug, wake-up stroke, stroke on rivaroxaban, aortic dissection with stroke, ABCD2 in a TIA with DAPT regimen, amaurosis fugax, migraine aura versus TIA, carotid dissection after hockey, warfarin ICH and a brain metastasis.

## Checks

- `npx tsc --noEmit -p . | grep samps/s27` prints nothing.
- `SAMP_BATCH=s27 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 715 passed, 0 failed, with the gates from commit 79e31bf (25% position cap, 200 character explanations, opener check). The run includes the bank wide near duplicate stem gate.
- A separate script checked stems at 50 to 150 words, updates at 10 to 45 words, explanations at 3 to 6 sentences and 200 characters or more, and no dashes or semicolons. All pass.

## Count, mix and key positions

- 32 SAMPs and 121 questions. 25 SAMPs have 4 questions and 7 have 3. None has 5.
- 111 single questions and 10 menu questions. One menu question sits in each of 10 SAMPs (17, 18, 27, 30, 31, 34, 38, 43, 45, 46), about one SAMP in three.
- Single key positions, first to fifth: 25, 25, 25, 15, 21. The highest is 23%.
- The key is the single longest option in 33 of 111 single questions, 30%.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Stroke mimics | 19 |
| 2. Subtle non-MCA presentations and isolated confusion | 18 |
| 3. Territory, cause, CT choice and thrombolysis risk | 66 |
| 4. TIA risk tools and prompt carotid and cardiac workup | 18 |

## Setting and population spread

- Ages 7 to 84. Children in 20 (focal arteriopathy after varicella) and 21 (sickle cell stroke). Older adults in 17, 18, 27, 29, 39, 40 and others.
- Community hospitals in 16 and 23. Rural hospitals in 30 (no CT angiography, drip and ship), 43 (no CT angiography) and 47.
- Mimics: Bell palsy, chronic subdural on apixaban, post-stroke recrudescence with sepsis, functional weakness, TGA, limb-shaking TIA versus seizure.
- Non-MCA and chameleons: lateral medullary syndrome, midline cerebellar infarct with swelling, PCA hemianopia, artery of Percheron, ACA leg weakness, right hemisphere neglect presenting as a fall, basilar occlusion presenting as a seizure, Anton syndrome, AICA stroke with hearing loss (HINTS plus), vertebrobasilar TIA.
- Reperfusion and risk: tenecteplase weight dose, MeVO (A2), large core (ASPECTS 4), sedation for thrombectomy, post-thrombolysis ICH and angioedema, warfarin INR, DOAC exclusion, endocarditis, pregnancy, recent surgery, CVT, dabigatran cerebellar ICH, BP when not a lysis candidate, dysphagia and rectal ASA.
- TIA: Canadian TIA Score at high (11), medium (5) and low (minus 3), ABCD2, carotid revascularization timing, new AF, 24-hour ECG monitoring, lipids and A1c.

## Sources

All verified by PubMed record (esearch or efetch) or by reading the full text or guideline PDF.

- Heran M and colleagues. CSBPR Acute Stroke Management, 7th edition update 2022. Can J Neurol Sci. 2024. Full PDF read (2022 text with 2025 EVT section): https://www.strokebestpractices.ca/recommendations/acute-stroke-management and https://pubmed.ncbi.nlm.nih.gov/36529857/
- Heran MKS and colleagues. CSBPR endovascular thrombectomy interim update 2025. Can J Neurol Sci. 2025. https://pubmed.ncbi.nlm.nih.gov/41340372/
- Gladstone DJ and colleagues. CSBPR secondary prevention of stroke update 2020. Can J Neurol Sci. 2022. Full PDF read. https://pubmed.ncbi.nlm.nih.gov/34140063/
- Shoamanesh A and colleagues. CSBPR management of spontaneous ICH, 2020. Int J Stroke. 2021. Full PDF read. https://pubmed.ncbi.nlm.nih.gov/33174815/
- Ladhani NNN and colleagues. CSBPR consensus statement, acute stroke management during pregnancy. Int J Stroke. 2018. https://pubmed.ncbi.nlm.nih.gov/30021491/
- Perry JJ and colleagues. Canadian TIA Score validation. BMJ. 2021. Full text read for the point table and risk bands. https://pubmed.ncbi.nlm.nih.gov/33541890/
- Johnston SC and colleagues. ABCD2. Lancet. 2007. https://pubmed.ncbi.nlm.nih.gov/17258668/
- Newman-Toker DE and colleagues. HINTS outperforms ABCD2. Acad Emerg Med. 2013. https://pubmed.ncbi.nlm.nih.gov/24127701/
- Ferriero DM and colleagues. Stroke in neonates and children, AHA/ASA statement. Stroke. 2019. https://pubmed.ncbi.nlm.nih.gov/30686119/
- DeBaun MR and colleagues. ASH 2020 sickle cell cerebrovascular guideline. Blood Adv. 2020. Recommendations 4.1 and 4.2 read. https://pubmed.ncbi.nlm.nih.gov/32298430/
- Saposnik G and colleagues. CVT, AHA statement. Stroke. 2024. https://pubmed.ncbi.nlm.nih.gov/38284265/
- de Almeida JR and colleagues. Bell palsy guideline. CMAJ. 2014. Full text read. https://pubmed.ncbi.nlm.nih.gov/24934895/
- Tsivgoulis G and colleagues. Thrombolysis in stroke mimics. Stroke. 2015. https://pubmed.ncbi.nlm.nih.gov/25791717/
- Wijdicks EF and colleagues. Cerebral and cerebellar infarction with swelling. Stroke. 2014. https://pubmed.ncbi.nlm.nih.gov/24481970/
- Hill MD and colleagues. Orolingual angioedema with alteplase and ACE inhibitors. Neurology. 2003. https://pubmed.ncbi.nlm.nih.gov/12743244/
- Kim JS. Lateral medullary infarction in 130 patients. Brain. 2003. https://pubmed.ncbi.nlm.nih.gov/12805095/
- Lazzaro NA and colleagues. Artery of Percheron infarction. AJNR. 2010. https://pubmed.ncbi.nlm.nih.gov/20299438/
- Cereda C, Carrera E. PCA territory infarctions. Front Neurol Neurosci. 2012. https://pubmed.ncbi.nlm.nih.gov/22377879/
- Maddula M and colleagues. Anton syndrome. J Med Case Rep. 2009. https://pubmed.ncbi.nlm.nih.gov/20226004/
- Kumral E and colleagues. ACA territory infarction. Eur J Neurol. 2002. https://pubmed.ncbi.nlm.nih.gov/12453077/
- Chen HS and colleagues. ARAMIS. JAMA. 2023. https://pubmed.ncbi.nlm.nih.gov/37367978/
- Espay AJ and colleagues. Functional neurological disorders. JAMA Neurol. 2018. Full text checked for Hoover sign and drift without pronation. https://pubmed.ncbi.nlm.nih.gov/29868890/
- Persoon S and colleagues. Limb-shaking TIA. Brain. 2010. https://pubmed.ncbi.nlm.nih.gov/20157011/
- Asaithambi G and colleagues. Thrombolysis with infective endocarditis. Stroke. 2013. https://pubmed.ncbi.nlm.nih.gov/23943218/
- Chan KL and colleagues. ASA in infective endocarditis. J Am Coll Cardiol. 2003. https://pubmed.ncbi.nlm.nih.gov/12957419/
- Liberman AL, Prabhakaran S. Stroke chameleons and mimics. Curr Neurol Neurosci Rep. 2017. https://pubmed.ncbi.nlm.nih.gov/28229398/
- Topcuoglu MA and colleagues. Post-stroke recrudescence. JAMA Neurol. 2017. https://pubmed.ncbi.nlm.nih.gov/28783808/
- Arena JE, Rabinstein AA. Transient global amnesia. Mayo Clin Proc. 2015. https://pubmed.ncbi.nlm.nih.gov/25659242/

## For the reviewers

- Some anatomy facts rest on general neurology rather than the cited text. Examples are forehead sparing in central facial palsy (16 q1), facial nerve branch symptoms (16 q2), midline cerebellar infarcts sparing limb coordination (23 q1), vertical gaze and the rostral midbrain (25 q1), nucleus ambiguus (22 q2) and the pupillary pathway in cortical blindness (29 q2).
- CSBPR has two BP numbers for thrombolysis: 185/110 in section 4.3 and 180/105 in Box 5B. I used 185/110 throughout and did not test the difference.
- 24 q4: CSBPR 2020 suggests starting a DOAC about day 3 after a minor stroke. ELAN supports earlier starts. The key reads "within a few days" so that it is true under both.
- 42 q2: the apixaban dose reduction criteria come from the CSBPR secondary prevention drug table, not a product monograph.
- 35 q3 and q4: apixaban avoided in breastfeeding, and early antiseizure treatment after a seizure with a parenchymal lesion in CVT, are standard teaching. I could not read the full AHA 2024 CVT text to confirm the exact wording.
- 35 q2: the explanation says catheter angiography is kept for inconclusive noninvasive imaging or planned endovascular therapy. Please check against the AHA 2024 statement.
- 36 q1 and q4: the claims that fetal radiation from head CT is minimal, that iodinated contrast is acceptable and that obstetrics should join the stroke team come from the pregnancy consensus. I only read its abstract.
- 38 q2: the claim that AICA infarction can give a peripheral-looking head impulse test is the reason for HINTS plus. The abstract gives the sensitivity numbers but not that mechanism.
- 46: TGA criteria (identity kept, no focal signs, resolution within 24 hours), recurrence being rare and headache during an episode come from the Arena review and classic criteria. I read only the abstract.
- 20 q1: the claim that hemiplegic migraine builds gradually and is followed by headache is general teaching.
- 17 q4 applies the CSBPR ICH reversal dose (PCC 50 units/kg, maximum 3000) to a subdural hematoma. The module is written for spontaneous ICH.
- 34 q1 keys "withhold" thrombolysis in suspected endocarditis. The cited study is observational and says "caution". The key is worded so that the reason is the likely endocarditis.
- I could not do a web search for the 2026 AHA ischemic stroke guideline wording on endocarditis, because the session search budget ran out. PubMed was used for every other check.
