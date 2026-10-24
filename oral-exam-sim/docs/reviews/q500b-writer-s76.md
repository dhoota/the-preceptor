# Q500B writer report: s76, Eye: red eye and loss of vision

File: `src/samps/s76/eye.ts` (`EYE_S76`). All items `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Scenario | Setting | Questions |
|---|---|---|---|---|
| eye-39 | Wrestler with a watery eye | Herpes simplex blepharoconjunctivitis from herpes gladiatorum in a 17-year-old, then epithelial keratitis after he stops his antiviral | Tertiary | 5 single |
| eye-40 | Red eyes after a trip abroad | Acute hemorrhagic conjunctivitis (coxsackievirus A24 variant) in a 41-year-old teacher back from an outbreak village | Tertiary | 4 single |
| eye-41 | Blurred vision after a faded rash | Ocular syphilis (bilateral uveitis with a macular lesion) in a 34-year-old man labelled conjunctivitis at a walk in clinic | Tertiary | 3 single, 1 menu (select 3 of 8) |
| eye-42 | Older woman who fell against the counter | Occult posterior scleral rupture in an 81-year-old with old large incision cataract surgery, triaged as a subconjunctival hemorrhage, with a normal CT | Tertiary | 3 single, 1 menu (select 4 of 8) |
| eye-43 | Burning eyes after a collision | Airbag alkali powder exposure plus blunt injury with a microhyphema found only on slit lamp, disposition 2 hours from ophthalmology | Rural | 4 single |

Totals: 21 questions, 19 single and 2 menu.

## Key feature coverage

Bank counts before this batch (all SAMPs with `keyFeature: { topic: "eye" }`): n1 39, n2 33, n3 36, n4 14, n5 16. The extra questions went to n4 and n5.

| Key feature | This batch | Questions |
|---|---|---|
| 1 Exclude serious causes before calling it conjunctivitis | 3 | eye-40 q2, eye-40 q4, eye-41 q3 |
| 2 Detailed history, including systemic disease | 4 | eye-39 q1, eye-40 q1, eye-41 q1, eye-41 q4 |
| 3 Acuity for every complaint, then a full examination | 4 | eye-39 q2, eye-41 q2, eye-42 q1, eye-43 q1 |
| 4 No routine topical steroids for viral eye infection | 4 | eye-39 q3, eye-39 q4, eye-39 q5, eye-40 q3 |
| 5 Trauma with subconjunctival blood: exclude hyphema | 6 | eye-42 q2, eye-42 q3, eye-42 q4, eye-43 q2, eye-43 q3, eye-43 q4 |

Single key positions (first to fifth): 4, 4, 3, 4, 4 of 19 singles. The key is the single longest option in 4 of 19.

## Uniqueness checks

Read every existing eye SAMP (eye-01 to eye-38) and the SAMPs that list eye as a secondary topic. New ground in this batch: herpes gladiatorum, the stromal versus epithelial rule for when a steroid is right, acute hemorrhagic conjunctivitis, ocular syphilis, occult scleral rupture in an older adult with a normal CT, and airbag alkali with hyphema. Overlaps a reviewer should weigh:

- eye-03 (HSV dendrite on drops) and eye-05 (zoster) also teach HSV and steroids. eye-39 differs in mechanism (contact sport), lid disease first, and the stromal question.
- eye-43 q4 (head raised, no NSAIDs, shield) overlaps the write-in management list of eye-10 q2. It is a single best answer in a different case, but it is the item most likely to be flagged.
- eye-43 q1 (irrigate first) shares the principle of eye-12 q1 (splash at work). The new point is the hidden alkali in airbag powder during trauma care.
- Neonatal HSV, periorbital eczema herpeticum, infant abuse with retinal hemorrhage and occipital hemianopia were considered and dropped because other topics already teach them.

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| belongia-gladiatorum | Belongia EA et al. N Engl J Med. 1991 | PubMed abstract PMID 1652687 (read through the NCBI E-utilities). No URL given because the PubMed page itself did not load. |
| rveeh-hsv | Royal Victorian Eye and Ear Hospital ED. Herpetic corneal infections CPG18.0 v4.0. 2020 | https://eyeandear.org.au/wp-content/uploads/2021/11/Herpetic-Corneal-Infections-Clinical-Practice-Guideline1.pdf |
| azari-conjunctivitis | Azari AA, Barney NP. JAMA. 2013 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4049531/ (Table 2 HSV doses, steroid statements, hand hygiene) |
| aao-hsv | White ML, Chodosh J. AAO. 2014 | https://www.aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline |
| lay-ahc | Lay K et al. Western Pac Surveill Response J. 2026 | https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1226/1270 (doi 10.5365/wpsar.2026.17.1.1226) |
| phac-syphilis-clinical | PHAC. Syphilis guide: risk factors and clinical manifestations. 2023 | https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/risk-factors-clinical-manifestation.html |
| cdc-sti-2021 | Workowski KA et al. MMWR Recomm Rep. 2021 (same object as s08) | https://www.cdc.gov/std/treatment-guidelines/neurosyphilis.htm |
| open-globe | Zhou Y et al. Clin Ophthalmol. 2022 (same object as s37) | https://doi.org/10.2147/OPTH.S372011, which resolves to the Dove Press full text |
| stein-airbag | Stein JD et al. Trans Am Ophthalmol Soc. 1999 | https://pmc.ncbi.nlm.nih.gov/articles/PMC1298254/ |
| barnes-airbag-alkali | Barnes SS et al. Hawaii J Med Public Health. 2012 | https://pmc.ncbi.nlm.nih.gov/articles/PMC3419824/ |
| eyewiki-hyphema | Oldham GW et al. AAO EyeWiki. Hyphema. Updated 2026 (same object as s37) | https://eyewiki.org/Hyphema (reviewed 2 September 2026) |

## Tests

`npx tsc --noEmit -p . 2>&1 | grep samps/s76` prints nothing. `SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 132 of 132 pass. Under heavy machine load from other agents, the bank wide near duplicate stem test can go past its default 5 second timeout. It passed on the final run in 4.3 seconds and found no duplicates.

## Uncertain, for reviewers

1. Ocular syphilis treatment and CSF advice come from the 2021 US CDC guideline. The PHAC syphilis guide (updated 2026) sends neurosyphilis treatment to a specialist and does not mention ocular syphilis, so there is no Canadian source for the regimen.
2. Topical antivirals (acyclovir ointment, trifluridine, ganciclovir gel) are left out of the keys because of doubt about Canadian supply. The keys use oral valacyclovir 500 mg three times daily (Azari Table 2).
3. The HSV stromal rule (eye-39 q4) comes from an Australian hospital ED guideline and the 2014 AAO statement, which has not been revised recently.
4. The acute hemorrhagic conjunctivitis source is one outbreak study. Its statements on incubation (12 to 48 hours), resolution in 1 to 2 weeks and subconjunctival hemorrhage in 82% come from that paper. No guideline gives treatment for this illness, so the key (supportive care) rests on Azari's advice for viral conjunctivitis in general.
5. Prophylactic antibiotics for open globe (vancomycin with ceftazidime) follow the Zhou review. Canadian centres may use other agents. The menu option is kept generic ("Broad spectrum IV antibiotics").
6. eye-42 q1 keys visual acuity over the other steps. A reviewer may want the stem to state more plainly that acuity has not been measured yet.
7. The airbag disposition (eye-43 q3) relies on EyeWiki's outpatient criteria. Next day ophthalmology review is assumed to be possible 2 hours away by road.
8. Web search ran out partway through the work. Every citation above was opened with WebFetch or read on PubMed, but a few distractor reasons rest on standard teaching, not on the cited source. Examples are the incubation of adenovirus (left out on purpose), HLA-B27 uveitis findings and toxoplasma findings.
