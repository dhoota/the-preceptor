# Q500B writer report: s74, Lacerations

File: `src/samps/s74/lacerations.ts` (`LACERATIONS_S74`). Five SAMPs, all `reviewed: false`, author "Preceptor", version 1.

## Ids written

| Id | Title | Setting and patient | Questions |
|---|---|---|---|
| lacerations-39 | Skateboard fall onto the mouth | Community hospital, 16-year-old boy, lip wound across the vermilion border with a missing tooth piece | 4 single |
| lacerations-40 | Toddler who fell in the hallway | Tertiary, 3-year-old boy, soft palate impalement | 3 single, 1 menu |
| lacerations-41 | Toddler and a large farm dog | Rural Saskatchewan, 14-month-old girl, dog bite to the scalp with an open skull fracture | 4 single |
| lacerations-42 | Cut during a hockey game | Community hospital in northern Ontario, 15-year-old boy, skate blade cut above the boot | 4 single |
| lacerations-43 | Painful finger in a coastal community | Remote health centre in Labrador, 44-year-old woman, seal finger after skinning a seal | 4 single |

20 questions: 19 single and 1 menu (lacerations-40 q2, select 3 of 8).

Single key positions (0 to 4): 3, 4, 4, 4, 4. The key is the single longest option in 4 of 19 single questions.

## Key feature coverage

Bank count before this batch (s13 and s43): n1 17, n2 25, n3 38, n4 23.

| Key feature | This batch | Questions |
|---|---|---|
| 1. Mechanism and history | 5 | 39 q1, 40 q1, 41 q1, 42 q1, 43 q1 |
| 2. Examination of nearby structures | 5 | 40 q2, 41 q2, 42 q2, 42 q3, 43 q2 |
| 3. Explore, irrigate, image, closure decision | 5 | 39 q2, 39 q4, 40 q3, 41 q3, 42 q4 |
| 4. Antibiotics, tetanus and follow-up | 5 | 39 q3, 40 q4, 41 q4, 43 q3, 43 q4 |

The split is even rather than weighted. Key feature 3 already had the most questions, so it got no more than the others. Key feature 1 could not take more questions without repeating a history angle within the batch.

## Uniqueness

Before writing I read all 38 lacerations SAMPs (s13 and s43), the lacerations oral case (`glass-finger-return-visit`), and the analgesia-sedation, msk and suicide-risk SAMPs that list lacerations as a secondary topic. I dropped a fight bite SAMP because msk-09 already covers it, and rabies scenarios because the bank has five. None of these appear anywhere in the bank: a vermilion border lip repair, a retained tooth fragment in the lip, a palatal impalement, a cranial dog bite, a skate blade boot-top cut, the deep peroneal nerve, and seal finger. The bank stem duplicate gate passes.

## Sources and verification

| Source id | Citation | Verified at |
|---|---|---|
| iadt-2020-fractures | Bourguignon C and colleagues. IADT guidelines 1. Fractures and luxations. Dent Traumatol. 2020 | Full text read as a PDF (lip and cheek radiographs to search for a missing fragment). The DOI https://doi.org/10.1111/edt.12578 resolves to Wiley |
| forsch-laceration-repair | Forsch RT, Little SH, Williams C. Laceration repair: a practical approach. Am Fam Physician. 2017 | https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html (first skin suture at the vermilion border, layered closure) |
| cig-tetanus | PHAC. Canadian Immunization Guide, tetanus toxoid, wound table. Updated 2026 | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html (June 2026 table) |
| hennelly-palate | Hennelly K and colleagues. Incidence of morbidity from penetrating palate trauma. Pediatrics. 2010 | https://profiles.wustl.edu/en/publications/incidence-of-morbidity-from-penetrating-palate-trauma/ (0 strokes in 122, infection 1 in 116, CTA positive in 10% with no interventions) |
| sgem-429-oropharyngeal | Ren D, Espinel A. SGEM 429, reviewing Curry SD and colleagues, Laryngoscope 2023. 2024 | https://thesgem.com/2024/02/sgem-429-its-ct-angio-hi-im-the-problem-its-me-for-pediatric-oropharyngeal-trauma/ (CTA for profuse bleeding, neurological change, neck crepitus) |
| steen-dog-bite-cranial | Steen T, Ravin K, Timmons S, Kershenovich A. Intracranial injuries from dog bites in children. Pediatr Neurosurg. 2015 | https://pure.psu.edu/en/publications/intracranial-injuries-from-dog-bites-in-children/ |
| tahir-cranial-dog-bite | Tahir SA and colleagues. Pediatric cranial dog bite injuries: more than meets the eye. Clin Pract Cases Emerg Med. 2022 | https://westjem.com/articles/pediatric-cranial-dog-bite-injuries-more-than-meets-the-eye.html |
| simonet-boot-top | Simonet WT, Sim L. Boot-top tendon lacerations in ice hockey. J Trauma. 1995 | Abstract record at https://www.bisp-surf.de/Record/PU199611201055. No URL in the source because only the abstract was seen |
| christman-tibialis-anterior | Christman-Skieller C, Merz MK, Tansey JP. Systematic review of tibialis anterior tendon rupture. Am J Orthop. 2015 | https://cdn.mdedge.com/files/s3fs-public/issues/articles/ajo044e094.pdf (compensation by EHL and EDL, sequelae, graft after delay) |
| statpearls-deep-peroneal | Palmisano LL, Launico MV. StatPearls, deep peroneal nerve. 2025 | Abstract via Europe PMC record MED 30252289 (first web space sensation). No URL in the source because the NCBI page was blocked |
| white-seal-finger | White CP, Jewer DD. Seal finger. Can J Plast Surg. 2009 | https://pmc.ncbi.nlm.nih.gov/articles/PMC2827281/ |
| sips-seal-finger | Sips GJ and colleagues. Seal finger following a photography incident. IDCases. 2021 | https://pmc.ncbi.nlm.nih.gov/articles/PMC8056412/ (doxycycline 200 mg a day) |
| clark-hand-infections | Clark DC. Common acute hand infections. Am Fam Physician. 2003 | https://www.aafp.org/pubs/afp/issues/2003/1201/p2167.html (Kanavel signs) |

## Uncertain, for the reviewers

1. lacerations-40 cites a podcast summary (SGEM) for the CTA indications, because the Curry 2023 abstract could not be opened directly. A reviewer may want the primary paper.
2. lacerations-40 q1 (what was in his mouth) comes before an update that describes a palate laceration. In mock mode the update implies an object injury. The object itself is never named, to limit the cue.
3. lacerations-40 q3 says a 1 cm palate wound with no flap heals without sutures. This is standard teaching, but the cited cohort does not state it directly.
4. lacerations-42 q4 (early repair of a cut tibialis anterior) relies on a review of closed ruptures, applied to a laceration. The review includes some open cases. No splint position is keyed because I found no source for it.
5. lacerations-43 is a niche infection, but it suits the remote and northern setting, and the mechanism-to-organism pattern is a recurring exam theme. The claim that trimethoprim-sulfamethoxazole does not treat it is worded as "not among the drugs reported" rather than as proven resistance. Doxycycline 100 mg twice daily equals the 200 mg daily course in the IDCases report. White and Jewer give tetracycline 500 mg four times daily.
6. lacerations-39 q3 keys no tetanus prophylaxis for a road wound 2 years after a Tdap booster, as the CIG table gives.
7. The full required test command passes except the bank-wide near duplicate test, which timed out at its 5 second default under machine load (8.1 s). With `--testTimeout=60000` all 128 tests pass and no near duplicates are reported.
8. I hit the web search limit for this turn while writing. Every citation above was confirmed before that point.
