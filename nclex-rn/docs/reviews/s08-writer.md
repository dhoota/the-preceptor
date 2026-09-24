# Batch s08 writer report

Batch s08 holds 50 stand-alone items, rn-s08-01 to rn-s08-50. All are Safety and Infection Prevention and Control. Every item has reviewed: false and an empty Canada note.

Files: src/bank/s08/common.ts, part1.ts to part5.ts and index.ts.

Checks run:

- BATCH=s08 npx vitest run tests/bank.test.ts: 61 of 61 pass.
- npx tsc --noEmit -p . 2>&1 | grep bank/s08: prints nothing.

## Counts

Client Needs: SIPC 50.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. Both trend items are mc (23 and 40).

CJMM steps: recognize 6, analyze 6, prioritize 4, generate 8, action 17, evaluate 9.

Difficulty: level 1 has 2, level 2 has 16, level 3 has 18, level 4 has 12, level 5 has 2.

Calculations: 2 items carry a calc block (38 absolute neutrophil count, 50 inverse square dose rate). The batch has no PPT items, so the 12 percent rule does not apply.

## MC key positions

28 mc items, including the 2 trend items. Positions 1 to 4: 7, 7, 7, 7.

The key is the strict longest option in 7 of 28 (items 11, 16, 27, 35, 44, 46, 49). The limit is 9.

## Topics

Linen handling, specimen labeling, radioactive iodine home precautions, oral syringes, chain of infection, unit safety round, restraint circulation priority, transport on contact precautions, repositioning a client who cannot assist, gloves under standard precautions, bomb threat call, fire extinguisher use, restraint time limits, site marking, near miss reporting, artificial nails, home care bag technique, droplet precautions choice, chemical decontamination, sling lift use, surgical hand rub, contact precaution breaches, ending influenza droplet precautions, mpox isolation, varicella exposure risk, window falls, smoke alarm, N95 donning, gait belt, reportable events, pregnant nurse and CMV, low vision home safety, armed threat at a home visit, non-ventilator pneumonia prevention, hand rub teaching, dementia kitchen fire risk, active shooter, absolute neutrophil count, transplant food safety, catheter removal protocol data, similar client names, broken mercury thermometer, empiric contact precautions, isolation loneliness, visitor violence cues, power failure priority, staff return after influenza, latex anaphylaxis, body mechanics, distance and dose rate.

I checked s06 and s07 topics first and avoided their scenarios. The whole-bank near duplicate gate passes.

## Sources and verification

- The Joint Commission, National Performance Goals Effective January 2026 for the Hospital Program, 2026. Two identifiers, labeling in the client's presence, room number not an identifier, site marking by the accountable practitioner with the client involved, mark visible after draping, adhesive marker not the sole mark. Read in the PDF: https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- Sisson JC et al., ATA, Radiation Safety in the Treatment of Patients with Thyroid Diseases by Radioiodine 131I, Thyroid 2011. https://pubmed.ncbi.nlm.nih.gov/21417738/
- Waters TR, When Is It Safe to Manually Lift a Patient?, AJN 107(8):53, 2007. 35 lb limit. https://journals.lww.com/ajnonline/Abstract/2007/08000/When_Is_It_Safe_To_Manually_Lift_A_Patient_.30.aspx
- ANA, Safe Patient Handling and Mobility Standards, 2nd edition, 2021. https://www.nursingworld.org/nurses-books/safe-patient-handling-and-mobility-2nd-edition2/
- 42 CFR 482.13(e): 4, 2 and 1 hour limits by age and the 1 hour face-to-face rule. https://www.law.cornell.edu/cfr/text/42/482.13
- CISA, Bomb Threat Guidance, 2025. https://www.cisa.gov/sites/default/files/2025-08/Bomb_Threat_Guidance_Quad_Fold_082025_508.pdf
- OSHA eTool, Portable Fire Extinguisher Use. https://www.osha.gov/etools/evacuation-plans-procedures/emergency-standards/portable-extinguishers/use
- OSHA 29 CFR 1910.134 Appendix B-1, user seal check each time. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.134AppB1
- ISMP Targeted Medication Safety Best Practices, oral syringes for oral liquids. https://home.ecri.org/blogs/ismp-alerts-and-articles-library/implement-strategies-to-prevent-persistent-medication-errors-and-hazards-2024
- AHRQ PSNet, Reporting Patient Safety Events. https://psnet.ahrq.gov/primer/reporting-patient-safety-events
- CDC, Prevention Strategies for Seasonal Influenza in Healthcare Settings: droplet precautions 7 days or 24 hours after symptoms resolve, whichever is longer. https://www.cdc.gov/flu/hcp/infection-control/index.html
- CDC, Infection Control in Healthcare Personnel, Part II (published 2024, updated 2026): respiratory virus return criteria, source control through day 7, pregnant staff not excluded from CMV care. https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/summary-recommendations.html
- CDC, Infection Prevention and Control in Healthcare Settings: Monkeypox, 2026: single room with bathroom, no special air handling, gown, gloves, eye protection, N95, precautions until new skin forms, no unroofing with sharps. https://www.cdc.gov/monkeypox/hcp/infection-control/healthcare-settings.html
- CDC, Clinical Guidance for People at Risk for Severe Varicella. https://www.cdc.gov/chickenpox/hcp/clinical-guidance/index.html
- AAP, Falls From Heights: Windows, Roofs, and Balconies, Pediatrics 107(5):1188, 2001. https://pubmed.ncbi.nlm.nih.gov/11331708/
- US Fire Administration, Smoke Alarms. https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/
- Klompas M et al., SHEA 2022 Update, ICHE 43(6):687. https://pmc.ncbi.nlm.nih.gov/articles/PMC10903147/
- HHS and partners, Incorporating Active Shooter Incident Planning into Health Care Facility Emergency Operations Plans, 2014. https://aspr.hhs.gov/AboutASPR/ProgramOffices/ICC/Documents/active-shooter-planning-eop2014.pdf
- USDA FSIS, Food Safety for Transplant Recipients, 2006. https://ucfoodsafety.ucdavis.edu/sites/g/files/dgvnsk7366/files/inline-files/26487.pdf
- EPA, What to Do if a Mercury Thermometer Breaks. https://www.epa.gov/mercury/what-do-if-mercury-thermometer-breaks
- CHEMM, Decontamination Procedures. https://chemm.hhs.gov/decontamination.htm
- NRC, Minimize Your Exposure. https://www.nrc.gov/facilities-safety/radiation-protection/how-the-nrc-protects-you/minimize-your-exposure
- NFPA 99, distinctive color for emergency power receptacles. https://up.codes/s/receptacle-identification
- Already in the bank or standard texts, not refetched: Siegel 2007 HICPAC isolation guideline, Boyce and Pittet 2002, WHO hand hygiene 2009, Gould 2009 CAUTI guideline, Freifeld 2011 IDSA neutropenia guideline, Shaker 2020 anaphylaxis parameter, OSHA 3148 workplace violence 2016, CDC STEADI Check for Safety, CPSC scald publication 5098, Potter Fundamentals 11th edition, Hinkle Brunner and Suddarth 15th edition.

## For the reviewer

- Source years for web pages with no clear date (ISMP 2024, CHEMM 2024, NFPA 99 2024, OSHA eTool 2024, USFA 2024, EPA 2024, NRC 2024, AHRQ primer 2019) are my best estimates. Please confirm them.
- Item 50: the NRC page says dose falls sharply with distance. It does not state the inverse square law in those words. A physics or radiation safety text could be added.
- Item 24: CDC now titles the page "Monkeypox". The item says mpox. The lesion features used to rule out varicella, scabies and impetigo come from standard clinical teaching, not from the cited infection control page.
- Item 06: NFPA 99 supports the oxygen cylinder and electrical findings. The fire door finding rests on Potter. NFPA 101 would be the primary source.
- Item 41: the name alert practice is standard, but the Joint Commission goal does not name it directly.
- Item 20: the details on lift height and releasing the sling come from Potter and manufacturer practice, not the ANA standards text.
- Item 34: head of bed elevation was left out on purpose. SHEA rates its evidence for clients not on ventilators as insufficient.
- Item 13: the cloze uses clock times as options. Some reviewers may prefer durations.
