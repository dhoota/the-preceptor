# Batch s07 writer report

Batch s07 holds 50 stand-alone items, ids rn-s07-01 to rn-s07-50. All are Safety and Infection Prevention and Control (SIPC). Every item has reviewed: false, version 1 and an empty canada note.

Files: src/bank/s07/common.ts (shared metadata helper and sources), part1.ts to part5.ts (10 items each), index.ts.

## Checks

- BATCH=s07 npx vitest run tests/bank.test.ts: 61 of 61 pass, including the whole bank near duplicate gate.
- npx tsc --noEmit -p . 2>&1 | grep bank/s07: prints nothing.

## Counts

Client Needs: SIPC 50.

Item type: mc 26, sata 10, msn 3, dnd 3 (two ordering, one matching), cloze 2 (one dyad, one zero-one), highlight 2, bowtie 2, trend 2 (both mc, items 10 and 30).

CJMM step: take action 22, generate solutions 9, evaluate outcomes 6, recognize cues 5, analyze cues 5, prioritize hypotheses 3.

Difficulty: level 1 has 3, level 2 has 16, level 3 has 20, level 4 has 9, level 5 has 2.

Integrated process: nursing process 31, clinical judgment 10, teaching 6, communication 3.

No calculations. The batch has no PPT items, so the calc rule does not apply.

## MC key positions

28 mc items, including the two trend items. Positions A 7, B 7, C 7, D 7.

01 A, 03 C, 04 B, 06 D, 08 A, 10 C, 11 D, 12 B, 15 C, 17 A, 19 B, 20 D, 22 C, 24 A, 26 B, 28 D, 30 A, 31 C, 32 B, 33 D, 35 A, 37 C, 40 D, 42 B, 44 C, 46 A, 48 B, 50 D.

The key is the strict longest option in 9 of 28 mc items (06, 15, 30, 33, 37, 40, 42, 46, 50). The limit is 9.

Select all keys in the first half of the list: 18 of 34.

## Coverage

Chosen to avoid the s06 scenarios. Precautions: RSV, mumps end point, head lice, adenovirus conjunctivitis, group A streptococcal pharyngitis, Candida auris equipment cleaning, CRE, draining extrapulmonary tuberculosis, influenza in long-term care, a matching item (rubella, hepatitis A, smallpox, cytomegalovirus) and a standard precautions only item (Legionnaires' disease). Transport on contact precautions. Isolation room pressure check. Respiratory hygiene at clinic check-in. Standard precautions gown use. Hand hygiene moments. Surgical asepsis: open sterile gloving, breaks in a sterile dressing change, pouring sterile solution, tracheostomy suctioning, urine culture from a catheter port, central line insertion barriers and central line site care. Safe injection practices. Central line quality data and a hospital-onset C. difficile cluster (trends). Hazardous drugs: excreta after cyclophosphamide and a spill response. Regulated waste. Home sharps disposal. Error prevention: error-prone insulin abbreviations, smart pump hard limit, tubing misconnection, telephone prescription read-back. Surgical fire. Restraint: family request for four rails, alternatives in delirium, wandering resident, bed entrapment. Suicide risk room safety on a medical unit. Emergency: external radiation contamination. Home and child safety: rear-facing car seat, pool fencing, choking foods, firearm storage for a teen at risk, lead paint, carbon monoxide, scald prevention, toddler home hazards, button battery ingestion.

## Sources and verification

- Siegel JD et al. 2007 Guideline for Isolation Precautions, last updated 2024. Appendix A rows (RSV, mumps, hepatitis A, smallpox, rubella, pediculosis, adenovirus conjunctivitis, impetigo, rotavirus, Mycoplasma, Legionnaires, CMV, group A streptococcal pharyngitis, draining extrapulmonary tuberculosis) read directly. Sections IV.B.3 (gowns), IV.C.2.d (masks and 3 feet spacing), IV.H (safe injection), V.B.4 (transport), V.D.2.a.iii (daily AIIR pressure check) read in the PDF text. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html and https://www.cdc.gov/infection-control/media/pdfs/Guideline-Isolation-H.pdf
- O'Grady NP et al. Guidelines for the Prevention of Intravascular Catheter-Related Infections, 2011. Skin prep, dressing change, ointment, submersion, port scrub and maximal barrier text read directly. https://www.cdc.gov/infection-control/media/pdfs/Guideline-BSI-H.pdf
- Gould CV et al. CAUTI guideline, 2009. Specimen collection recommendation U.1 read directly. https://www.cdc.gov/infection-control/media/pdfs/Guideline-CAUTI-H.pdf
- CDC. Safe Injection Practices, page reviewed 2024. https://www.cdc.gov/injection-safety/hcp/clinical-guidance/index.html
- WHO Guidelines on Hand Hygiene in Health Care, 2009 (five moments). https://www.ncbi.nlm.nih.gov/books/NBK144046/
- Durbin DR, Hoffman BD. Child Passenger Safety. Pediatrics 142(5), 2018. https://publications.aap.org/pediatrics/article/142/5/e20182460/38530/Child-Passenger-Safety
- Denny SA et al. Prevention of Drowning. Pediatrics 143(5), 2019. https://publications.aap.org/pediatrics/article/143/5/e20190850/37134/Prevention-of-Drowning
- AAP. Prevention of Choking Among Children. Pediatrics 125(3):601, 2010. https://publications.aap.org/pediatrics/article/125/3/601/72642/Prevention-of-Choking-Among-Children
- Lee LK et al. Firearm-Related Injuries and Deaths in Children and Youth: Injury Prevention and Harm Reduction. Pediatrics 150(6), 2022. https://publications.aap.org/pediatrics/article/150/6/e2022060070/189686/
- The Joint Commission. National Patient Safety Goals 2026, NPSG.15.01.01 guidance for non-psychiatric units. https://www.jointcommission.org/standards/standard-faqs/critical-access-hospital/national-patient-safety-goals-npsg/000001551/
- ISMP List of Error-Prone Abbreviations, 2021. https://www.ismp.org/system/files/resources/2021-02/Error%20Prone%20Abbreviations%202021_0.pdf
- ISMP Smart Infusion Pump Guidelines, 2020. https://www.ismp.org/system/files/resources/2020-10/ISMP176C-Smart%20Infusion%20Pumps-100620.pdf
- The Joint Commission. Sentinel Event Alert 53, 2014. https://www.jointcommission.org/en/resources/patient-safety-topics/sentinel-event/sentinel-event-alert-newsletters/sentinel-event-alert-53-managing-risk-during-transition-to-new-iso-tubing-connector-standards/
- The Joint Commission. Sentinel Event Alert 68, 2023. https://www.jointcommissionjournal.com/article/S1553-7250(23)00236-2/fulltext
- CMS. 42 CFR 482.13(e) and interpretive guidance on four raised side rails as restraint. https://www.cms.gov/Regulations-and-Guidance/Guidance/Transmittals/downloads/R37SOMA.pdf
- FDA. Hospital Bed System Dimensional and Assessment Guidance to Reduce Entrapment, 2006. https://www.fda.gov/media/71460/download
- CDC. Carbon Monoxide Poisoning Basics, updated 2026. https://www.cdc.gov/carbon-monoxide/about/index.html
- REMM (HHS). Procedures for Radiation Decontamination. Clothing removal up to 90 percent, tepid water, no abrasion, stabilization first, read directly. https://remm.hhs.gov/ext_contamination.htm
- CDC. Interim Guidance for Influenza Outbreak Management in Long-Term Care, 2024. Droplet duration, room restriction and antivirals before test results read directly. https://archive.cdc.gov/www_cdc_gov/flu/hcp/infection-control/ltc-facility-guidance.html
- CDC. Infection Control Guidance: Candida auris. Contact precautions, List P and quaternary ammonium text read directly. https://www.cdc.gov/candida-auris/hcp/infection-control/index.html
- CDC. CRE Toolkit, November 2015 update. https://stacks.cdc.gov/view/cdc/79104
- CPSC. Avoiding Tap Water Scalds, Publication 5098, 2012. Read directly. https://www.cpsc.gov/s3fs-public/5098.pdf
- CDC. Lead prevention page, updated 2024 (homes built before 1978). https://www.cdc.gov/lead-prevention/prevention/index.html
- National Capital Poison Center. Button Battery Ingestion Triage and Treatment Guideline, revised 2018. Read directly. https://www.poison.org/battery/guideline
- FDA. Best Way to Get Rid of Used Needles and Other Sharps, 2023. Read directly. https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/best-way-get-rid-used-needles-and-other-sharps
- AARC Clinical Practice Guideline on Endotracheal Suctioning, Respir Care 55(6):758, 2010. Abstract read through PubMed. https://pubmed.ncbi.nlm.nih.gov/20507660/
- OSHA Bloodborne Pathogens Standard, 29 CFR 1910.1030.
- Olsen MM, Walton AL. ONS Safe Handling of Hazardous Drugs, 4th edition, 2024.
- Potter PA et al. Fundamentals of Nursing, 11th edition, 2022. Hinkle JL et al. Brunner and Suddarth, 15th edition, 2022.

## Points for the reviewer

- Source years for web pages are best estimates. REMM (2026) and C. auris (2026) use the current page version because neither page shows a fixed publication year. The CDC lead work title "Preventing Childhood Lead Exposure" is my label for the CDC prevention page and may not match its exact heading.
- Not read at page level: SEA 53 and SEA 68 (403 on fetch). Item 12 (trace lines from the client to the source) and item 26 (let alcohol prep dry before draping) rest on search summaries of those alerts. The OSHA regulated waste definition (item 36) was not fetched (403). It is quoted from the standard as I know it. ONS spill steps (item 27) and excreta PPE (item 13) were confirmed only through secondary summaries. Potter and Hinkle claims (sterile gloving order, pouring solutions, tracheostomy asepsis, pot handles, blind cords, telephone read-back, carbon monoxide and pulse oximetry) were not checked against page text.
- Item 01: Siegel lists contact precautions for RSV. Some facilities add droplet precautions. The key follows Siegel.
- Item 21: the stem gives SpO2 97 percent to test the falsely normal oximetry point. Carboxyhemoglobin and level of consciousness are the keyed parameters.
- Item 30: the key says "hospital-onset infection" rather than naming C. difficile to keep the option lengths level.
- Item 41: Legionnaires' disease is the closest condition distractor. The unit cluster of confirmed influenza is the deciding cue.
- Item 43: the airborne precaution for a draining extrapulmonary lesion comes from Siegel Appendix A. Some local policies use contact precautions alone once pulmonary disease is excluded.
- Item 48: the honey advice applies to children aged 1 year or older within 12 hours of ingestion. The key is the emergency department visit.
- Process note: to count key positions and lengths, I placed a temporary stats test in tests/ for one run and deleted it straight after. No other file outside src/bank/s07 and this report was changed.

## Removed file

- src/bank/s07/extra.ts held two unimported items, rn-s07-91 and rn-s07-92. They were outside the 01 to 50 range and not SIPC. Item 91 keyed protamine sulfate as the antidote for magnesium toxicity. The antidote is calcium gluconate. Item 92 gave a rationale that relied on asthma, which the stem never mentions. The file was removed from the batch folder. It is not part of ITEMS.
