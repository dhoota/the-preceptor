# Batch s06 writer report

Batch s06 holds 50 stand-alone items, ids rn-s06-01 to rn-s06-50. All are Safety and Infection Prevention and Control (SIPC). Every item has reviewed: false, version 1 and an empty canada note.

Files: src/bank/s06/common.ts (shared metadata helper and sources), part1.ts to part5.ts (10 items each), index.ts.

## Checks

- BATCH=s06 npx vitest run tests/bank.test.ts: 61 of 61 pass, including the whole bank near duplicate gate.
- npx tsc --noEmit -p . 2>&1 | grep bank/s06: prints nothing.

## Counts

Client Needs: SIPC 50.

Item type: mc 26, sata 10, msn 3, dnd 3, cloze 2 (one dyad, one zero-one), highlight 2, bowtie 2, trend 2 (both mc, items 19 and 39).

CJMM step: take action 18, generate solutions 11, prioritize hypotheses 6, evaluate outcomes 6, analyze cues 5, recognize cues 4.

Difficulty: level 1 has 5, level 2 has 15, level 3 has 19, level 4 has 9, level 5 has 2.

No calculations. The batch has no PPT items, so the calc rule does not apply.

## MC key positions

28 mc items, including the two trend items. Positions A 7, B 7, C 7, D 7.

01 A, 03 B, 04 C, 06 D, 08 C, 10 D, 11 B, 14 A, 16 B, 18 C, 19 A, 21 C, 23 B, 25 D, 26 D, 29 A, 30 D, 32 B, 34 A, 36 C, 38 C, 39 A, 41 B, 44 D, 46 A, 48 C, 49 B, 50 D.

The key is the strict longest option in 6 of 28 mc items (04, 06, 23, 39, 44, 48).

## Coverage

Client identification. Restraint orders, application and circulation checks. Fall prevention in hospital and at home, orthostatic fall risk, and a fall with a head strike on an anticoagulant. Fire response and home oxygen safety. Electrical equipment safety. Safe patient handling. Seizure precautions. Latex allergy screening. MRI screening. Radiation implant precautions. Hazardous drug administration. Chemical splash and safety data sheets. Needlestick care, sharps handling and blood spill cleanup. Hand hygiene in norovirus and C. difficile. Removing protective equipment. Airborne, droplet, contact, standard and protective environment precautions: measles, varicella, disseminated zoster, pertussis, meningococcal disease, inhalational anthrax, scabies, MRSA and C. difficile. Single room priority and staff assignment for measles. Surgical site infection, catheter-associated urinary tract infection and ventilator-associated pneumonia prevention. Sterile field and catheter insertion technique. Medication error response and incident reporting. Newborn abduction prevention, safe infant sleep and toddler poisoning. Workplace violence. Mass casualty triage and disaster discharge. Alarm fatigue. Surgical time-out.

## Sources and verification

- Siegel JD et al. 2007 Guideline for Isolation Precautions, last updated 2024. Appendix A rows for measles, varicella, zoster, mumps, pertussis, meningococcus, rubella, scabies, C. difficile, norovirus, anthrax and smallpox were read directly. https://www.cdc.gov/infection-control/media/pdfs/Guideline-Isolation-H.pdf
- Boyce JM, Pittet D. Guideline for Hand Hygiene in Health-Care Settings. MMWR 51(RR-16), 2002. https://www.cdc.gov/mmwr/pdf/rr/rr5116.pdf
- MacCannell T et al. Norovirus outbreak guideline. ICHE 32(10):939, 2011. Recommendation 8 on soap and water was read directly. https://www.cdc.gov/infection-control/media/pdfs/guideline-norovirus-h.pdf
- CDC. Updated US PHS Guidelines for Occupational Exposures to HBV, HCV and HIV. MMWR 50(RR-11), 2001. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5011a1.htm
- Kofman AD et al. 2025 US PHS Guidelines for Occupational Exposures to HIV. ICHE 46(9):863, 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/
- CMS. 42 CFR 482.13(e). https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.13
- The Joint Commission. National Patient Safety Goals, 2026. https://www.jointcommission.org/en-us/standards/national-patient-safety-goals
- The Joint Commission. Universal Protocol. https://www.jopan.org/article/S1089-9472(16)30105-8/abstract
- WHO Guidelines for Safe Surgery, 2009.
- Potter PA et al. Fundamentals of Nursing, 11th edition, 2022. https://shop.elsevier.com/books/fundamentals-of-nursing/potter/978-0-323-81034-0
- Hinkle JL et al. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022.
- Gould CV et al. CAUTI guideline, 2009. https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf
- Berrios-Torres SI et al. CDC SSI guideline, 2017. JAMA Surg 152(8):784. https://jamanetwork.com/journals/jamasurgery/fullarticle/2623725
- Klompas M et al. VAP prevention, 2022 update. ICHE 43(6):687. https://pubmed.ncbi.nlm.nih.gov/35589091/
- Ganz DA et al. AHRQ Preventing Falls in Hospitals toolkit, 2013. https://www.ahrq.gov/sites/default/files/publications/files/fallpxtoolkit_0.pdf
- CDC STEADI. Check for Safety, 2017. https://www.cdc.gov/steadi/pdf/steadi-brochure-checkforsafety-508.pdf
- Moon RY et al. AAP safe sleep 2022. Pediatrics 150(1). https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/
- OSHA 3148, 2016. https://www.osha.gov/sites/default/files/publications/OSHA3148.pdf
- Olsen MM, Walton AL, editors. ONS Safe Handling of Hazardous Drugs, 4th edition, 2024. https://www.ons.org/store/books/safe-handling-hazardous-drugs-fourth-edition
- NIOSH List of Hazardous Drugs 2024, Publication 2025-103. https://www.cdc.gov/niosh/publications/hcp/numbered/2025-103.html
- ACR Manual on MR Safety, 2024. https://pubmed.ncbi.nlm.nih.gov/40167436/
- NCMEC. Guidelines on Prevention of and Response to Infant Abductions, 9th edition, 2009. Parent teaching and bassinet placement were read directly. https://www.govinfo.gov/content/pkg/GOVPUB-J32-PURL-LPS116693/pdf/GOVPUB-J32-PURL-LPS116693.pdf
- Waters TR. When Is It Safe to Manually Lift a Patient? AJN 107(8):53, 2007. https://pubmed.ncbi.nlm.nih.gov/17667392/
- ANA. SPHM Standards, 2nd edition, 2021. https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/
- Benson M, Koenig KL, Schultz CH. START then SAVE. Prehosp Disaster Med 11(2):117, 1996. START criteria (walking, respirations over 30/minute, radial pulse or capillary refill, obeying commands) were confirmed in search results from CHEMM, REMM and mcitriage.org. The algorithm image itself was not read.
- Sehulster L, Chinn RYW. Environmental Infection Control guideline. MMWR 52(RR-10), 2003. https://pubmed.ncbi.nlm.nih.gov/12836624/
- Blanco C. Latex-Fruit Syndrome. Curr Allergy Asthma Rep 3(1):47, 2003. https://link.springer.com/article/10.1007/s11882-003-0012-y
- Kilgore PE et al. Pertussis. Clin Microbiol Rev 29(3):449, 2016. https://pubmed.ncbi.nlm.nih.gov/27029594/
- AAP. Poison Treatment in the Home. Pediatrics 112(5):1182, 2003. https://pubmed.ncbi.nlm.nih.gov/14595067/
- AACN Practice Alert on alarms. Crit Care Nurse 38(2):e16, 2018. https://www.aacn.org/clinical-resources/practice-alerts/managing-alarms-in-acute-care-across-the-life-span
- OSHA Hazard Communication Standard, 29 CFR 1910.1200, updated 2024. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1200
- OSHA 29 CFR 1910.151(c) and its 2002 ANSI Z358.1 interpretation. https://www.osha.gov/laws-regs/standardinterpretations/2002-04-18-1
- OSHA Bloodborne Pathogens Standard, 29 CFR 1910.1030, revised 2001.
- CDC. Sequence for Putting On and Removing PPE, 2014. https://stacks.cdc.gov/view/cdc/24767
- CDC. Public Health Strategies for Scabies Outbreaks in Institutional Settings. https://www.cdc.gov/scabies/php/public-health-strategy/index.html

## Points for the reviewer

- Source years: the CDC scabies page year (2024), the CMS regulation year (2024) and the Universal Protocol year (2004) are best estimates for web and regulatory documents. The Hinkle and Potter claims (radiation implant care, seizure setup, RACE order, restraint tying, sterile field rules, oxygen and petroleum products) were not checked against the page text.
- Item 04: the no-PRN rule in 42 CFR 482.13(e) covers all restraint. The 4 hour renewal limit applies only to violent or self-destructive behavior, so the item says "time-limited" and does not give a number.
- Item 06: the key follows the RACE order. Some facility plans let the alarm be raised at the same time as rescue.
- Item 10: the key relies on the norovirus outbreak recommendation. Outside an outbreak, alcohol rub is acceptable for hands that are not visibly soiled.
- Item 13: roommate and single room priority follows Siegel V.B.2. Nasal MRSA colonization in a continent, alert client is the closest distractor.
- Item 15: the post-fall bundle is cited to the AHRQ toolkit and Hinkle. Local policy may require imaging for every head strike on an anticoagulant.
- Item 18: the 35 lb limit from Waters 2007 is in refs.
- Item 20: the orthostatic hypotension definition is in refs and cited to AHRQ and Potter.
- Item 24: the START rules are cited to Benson 1996 and confirmed through search results. CHEMM was unreachable for a direct read.
- Item 27: "prime the tubing without the drug" follows ONS and USP 800 practice. The exact ONS wording was not read.
- Item 34: the 15 minute flush comes from ANSI Z358.1 through OSHA's interpretation.
- Item 36: a stem detail says the workers showered. Siegel lists pulmonary anthrax as standard precautions.
- Item 37: the chlorhexidine oral care why says it "may raise mortality". Klompas 2022 lists it as not recommended and cites a possible mortality signal. The reviewer may want softer wording.
- Item 41: early discharge reasoning is cited to Potter. A disaster nursing source would be stronger.
- Item 43: the cleanup order follows Sehulster 2003 (remove visible material, then disinfect). Some policies flood large spills with disinfectant first.
- Item 45: the scabies precaution duration (24 hours after treatment) is in refs from Siegel. Hot laundering and treating contacts come from CDC pages.
- Process note: while debugging I briefly copied a probe test into tests/ to list item problems, ran it once and deleted it at once. No other file outside src/bank/s06 and this report was changed.
