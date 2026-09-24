# Writer report: batch s40, Headache

File: `src/samps/s40/headache.ts`, exported as `HEADACHE_S40_SAMPS` and re-exported from `src/samps/s40/index.ts` as `SAMPS_S40`.

## Count, mix and key positions

- 32 SAMPs, ids headache-16 to headache-47. All `reviewed: false`.
- 115 questions: 102 `single` and 13 `menu`. No `short` questions.
- 19 SAMPs have 4 questions (16 to 27, 30, 35, 36, 38, 39, 40, 42) and 13 have 3. I stopped at 3 where a fourth question would have repeated a teaching point of the s11 set (Ottawa rule, CT within 6 hours, akathisia, chemoprophylaxis, return precautions).
- 13 SAMPs have one menu question (17, 20, 21, 23, 26, 27, 34, 35, 37, 39, 40, 41, 45).
- Single key positions, first to fifth: 17, 21, 20, 23, 21. Highest share 22.5 percent.
- The key is the single longest option in 23 of 102 single questions (22.5 percent).
- Explanations run about 300 to 530 characters and open with the deciding stem finding.
- Tests: `SAMP_BATCH=s40 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 691 passed. `tsc` shows no errors in `samps/s40`.

## Settings and patients

Children of 5, 6, 8, 9, 11 and 14, adults from 23 to 66, and older adults of 74, 77 and 81. Tertiary default, and two rural hospitals with no CT (28, 37). One postpartum patient (36) and one kidney transplant recipient (45).

## Key feature coverage (headache)

| Key feature | Questions |
|---|---|
| 1. Detailed headache history | 19 |
| 2. Consider and exclude dangerous causes | 19 |
| 3. Examine for red flags | 15 |
| 4. Extracranial sources (arteritis, glaucoma, sinusitis and similar) | 12 |
| 5. Diagnose and treat migraine | 17 |
| 6. Investigate promptly, empiric therapy first when indicated | 33 |

`alsoTopics`: cva (33), infectious-diseases (28, 29), pre-eclampsia (36), tox (44). All questions carry `keyFeature.topic` headache.

## Scenarios (none repeat the s11 set)

16 paediatric migraine (weight-based metoclopramide and ibuprofen, no imaging). 17 idiopathic intracranial hypertension on minocycline. 18 cluster headache with a red eye. 19 post-dural puncture headache after an ED lumbar puncture. 20 pituitary apoplexy with adrenal crisis. 21 reversible cerebral vasoconstriction syndrome. 22 hypertensive encephalopathy. 23 VP shunt failure. 24 brain abscess after a dental infection. 25 chronic subdural hematoma on apixaban. 26 medication overuse headache. 27 Pott puffy tumour. 28 meningococcal sepsis in a rural hospital. 29 cryptococcal meningitis in untreated HIV. 30 trigeminal neuralgia. 31 cerebellar hemorrhage on warfarin. 32 spontaneous intracranial hypotension. 33 stroke mistaken for migraine aura. 34 migraine with coronary stents. 35 typical migraine asking for a CT. 36 postpartum pre-eclampsia and HELLP. 37 thunderclap headache with no CT on site. 38 enteroviral meningitis. 39 giant cell arteritis without visual loss. 40 acute bacterial rhinosinusitis. 41 septic cavernous sinus thrombosis. 42 posterior fossa tumour in a child. 43 post-streptococcal glomerulonephritis with severe hypertension. 44 cocaine-associated intracerebral hemorrhage. 45 PRES on tacrolimus. 46 pupil-involving third nerve palsy from an aneurysm. 47 migraine with aura on a combined pill.

## Sources, with verification

The session WebSearch budget ran out partway through. After that, each journal citation was checked by title, authors, journal and year on PubMed E-utilities (esearch and esummary), and key abstracts were read with efetch. The web pages were read with WebFetch.

- CPS 2025 acute migraine in the ED (Rogers, Orr, Parisien, Chauvin-Kimoff). https://cps.ca/en/documents/position/acute-migraine
- TREKK migraine bottom line recommendations, version 1.0, 2025. https://trekk.ca/resources/bottom-line-recommendations-migraine
- CPS bacterial meningitis in children, 2020, reaffirmed 2026. https://cps.ca/en/documents/position/management-of-bacterial-meningitis
- Choosing Wisely Canada, Canadian Headache Society, 2020. https://choosingwiselycanada.org/recommendation/headache/
- Orr 2015 CHS emergency migraine. https://pubmed.ncbi.nlm.nih.gov/24875925/
- Worthington 2013 CHS acute drug therapy. https://pubmed.ncbi.nlm.nih.gov/23968886/
- Lewis 2002 AAN child headache evaluation. https://pubmed.ncbi.nlm.nih.gov/12196640/
- ICHD-3 2018. https://pubmed.ncbi.nlm.nih.gov/29368949/
- Mollan 2018 IIH consensus. https://pubmed.ncbi.nlm.nih.gov/29903905/
- Friedman 2013 pseudotumor cerebri criteria. https://pubmed.ncbi.nlm.nih.gov/23966248/
- Robbins 2016 AHS cluster headache. https://pubmed.ncbi.nlm.nih.gov/27432623/
- Uppal 2023 post-dural puncture headache. https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808365
- Nath 2018 atraumatic needles. https://pubmed.ncbi.nlm.nih.gov/29223694/
- Rajasekaran 2011 UK pituitary apoplexy. https://pubmed.ncbi.nlm.nih.gov/21044119/
- Ducros 2012 RCVS. https://pubmed.ncbi.nlm.nih.gov/22995694/
- van den Born 2019 ESC hypertensive emergencies. https://pubmed.ncbi.nlm.nih.gov/30165588/
- WHO 2022 cryptococcal disease. https://www.ncbi.nlm.nih.gov/books/NBK581839/
- Bendtsen 2019 EAN trigeminal neuralgia. https://onlinelibrary.wiley.com/doi/10.1111/ene.13950
- Greenberg 2022 AHA/ASA ICH. https://pubmed.ncbi.nlm.nih.gov/35579034/
- Cheema 2023 SIH consensus. https://pubmed.ncbi.nlm.nih.gov/37147116/
- Heran 2022 CSBPR acute stroke (Can J Neurol Sci 2024). https://pubmed.ncbi.nlm.nih.gov/36529857/
- Magee 2022 SOGC No. 426. https://pubmed.ncbi.nlm.nih.gov/35577426/
- ACOG CPG No. 3, 2022. https://pubmed.ncbi.nlm.nih.gov/35576364/
- Perry 2011 BMJ CT within 6 hours. https://pubmed.ncbi.nlm.nih.gov/21768192/
- Perry 2013 JAMA SAH rules. https://pubmed.ncbi.nlm.nih.gov/24065011/
- Hoh 2023 AHA/ASA aneurysmal SAH. https://pubmed.ncbi.nlm.nih.gov/37212182/
- McGill 2016 UK meningitis. https://pubmed.ncbi.nlm.nih.gov/26845731/
- Tunkel 2004 IDSA bacterial meningitis. https://pubmed.ncbi.nlm.nih.gov/15494903/
- Mackie 2020 BSR giant cell arteritis. https://pubmed.ncbi.nlm.nih.gov/31970410/
- Smetana 2002 JAMA temporal arteritis. https://pubmed.ncbi.nlm.nih.gov/11754714/
- Kaplan 2014 CFP rhinosinusitis summary. https://pubmed.ncbi.nlm.nih.gov/24627376/
- Bodilsen 2024 ESCMID brain abscess (Clin Microbiol Infect 30(1):66 to 89, found through its corrigendum). https://pubmed.ncbi.nlm.nih.gov/38309325/
- Flynn 2017 AAP high BP in children. https://pubmed.ncbi.nlm.nih.gov/28827377/
- Fugate 2015 PRES. https://pubmed.ncbi.nlm.nih.gov/26184985/
- Black 2017 SOGC No. 329 combined hormonal contraception. https://pubmed.ncbi.nlm.nih.gov/28413042/
- Diener 2019 medication overuse headache. https://pubmed.ncbi.nlm.nih.gov/31174999/
- PHAC 2005 meningococcal guidelines, and Rosen 10th ed. 2023 and Tintinalli 9th ed. 2020. These three citations are reused from the s11 file. I did not check the textbook chapters page by page.

## For the reviewers

1. Key feature mapping. The headache key features cover history, dangerous causes, examination, extracranial causes, migraine and investigation. None covers treatment of secondary causes. I tagged treatment and disposition of dangerous causes to KF2 (17 q4, 19 q4, 21 q4, 24 q3, 25 q3, 31 q3, 32 q3, 33 q2 and q3, 45 q3, 46 q3). I tagged urgent empiric or reversal treatment to KF6. Cluster headache treatment (18 q3, q4) is tagged KF5 although cluster is not migraine. Trigeminal neuralgia treatment and monitoring (30 q3, q4) is tagged KF4.
2. Prochlorperazine. CPS 2025 and TREKK 2025 both state that prochlorperazine is not available in Canada. So I keyed metoclopramide for all ED migraine questions and did not use prochlorperazine as an option. The signed-off headache-10 q2 in s11 may key prochlorperazine and may need a look.
3. 25 q2. PCC 50 units/kg for apixaban comes from the AHA/ASA guideline for spontaneous ICH, applied here to a subdural. Andexanet is left out of the options so that there is only one key.
4. 31 q2. Warfarin reversal with a mechanical mitral valve. The explanation says reversal is still indicated for a life-threatening bleed.
5. 26 q3. Amitriptyline as a preventive is one of three menu keys. Starting prevention from the ED varies in practice. Diener supports prevention in general but does not name amitriptyline in its abstract.
6. 28 q3. Vancomycin 15 mg/kg per dose (CPS 60 mg/kg/day every 6 hours) is added to ceftriaxone, although the picture suggests meningococcus. This follows CPS empiric therapy.
7. 44 q2. The reason given for metoprolol in cocaine toxicity is worded as "generally avoided" because the evidence is disputed.
8. 36 q2. Levetiracetam is a distractor. The reason given is that it is not an established alternative for preventing eclampsia.
9. 40 q3. It is worded "if one is prescribed" because the Canadian guideline allows intranasal steroid alone for mild or moderate cases.
10. 30 q4. The thiazide and carbamazepine hyponatremia point is standard pharmacology. I did not confirm that the EAN guideline text names thiazides.
11. 42 q4 says about half of childhood brain tumours arise in the posterior fossa. Please check the wording against Tintinalli.
12. 24 q2. The ESCMID empiric regimen (third-generation cephalosporin plus metronidazole) and 24 q3 (about 6 weeks of treatment) come from my knowledge of the guideline. I confirmed only its citation, not its full text.
13. US or European guidance was used where I found no Canadian equivalent: ESC hypertensive emergencies, AHA/ASA ICH and SAH, ACOG headache in pregnancy, IDSA meningitis, the UK meningitis and pituitary guidelines, and the EAN, AHS and ESCMID guidelines. PHAC 2005 is old but is still the Canadian meningococcal guideline cited in s11.
14. 20 q1 is fairly easy because the stem describes the bitemporal field loss directly.
