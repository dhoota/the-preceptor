# Batch s31 review

Adversarial review of batch s31 (Safety and Infection Prevention and Control). Scope was all 50 items in `part1.ts` to `part5.ts` and the sources in `common.ts`. The folder holds no extra item file. Both lenses were applied to every item. Every why and rationale sentence was read against its stem. Numbers were recomputed with a script.

The writer flagged ten sources as cited from knowledge without being read. Each was opened and checked, or replaced with a source that was opened. Seven unread sources were removed from `common.ts`: ANSI/AAMI ST79, the CDC 2022 opioid guideline, Potter 2023, Hinkle 2022, NFPA 99, NFPA 101 and the ACSM 2021 heat statement.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s31-02 | rationale, options[3].why | Said two pairs of extended-cuff gloves. CDC 2024 requires two pairs, with extended cuffs at a minimum on the outer pair. | A | high |
| rn-s31-10 | rationale, options[0].why | Said a positive blood test "stays positive". IGRA results can revert. Sosa 2019 says people with documented prior infection are not retested. Reworded to that. | A | medium |
| rn-s31-19 | sources, rationale, options[0].why | ST79 was never read. Replaced with the AORN instrument cleaning FAQ, which states saline is corrosive and causes pitting and rust. Removed the unsourced transport container sentence. | A | medium |
| rn-s31-32 | sources, rationale, options[6].why | Potter was never read for these measures. Replaced with WHO 2007 LASA solution, which names tall man letters, the indication, read-back, separate storage and not relying on appearance. The brand-only why now matches WHO advice to use both names. | A | medium |
| rn-s31-33 | sources, rationale, refs | The CDC conversion factor of 5 is an oral MME factor, and CDC warns it is not for dose conversion. The item is IV. Replaced with the PA Patient Safety Advisory 2016 figure of about 7 mg parenteral morphine per 1 mg hydromorphone. | A | high |
| rn-s31-37 | stem, rationale, sources | The meaning of the red zone was assumed. The stem now says the zone is marked Refill. Potter and NFPA 99 were replaced with the BOC medical gas safety guide. | A, B | medium |
| rn-s31-38 | options[2], rationale, sources | "Lift by the valve" had no source that could be opened. Replaced with a sourced peer distractor, opening the valve quickly. BOC and Air Liquide support restraint, no oil or grease, slow opening and closing after use. | A | medium |
| rn-s31-40 | rationale, sources | The extension cord key rested on no source. The Outset Medical Tablo safety information states that extension cords and power strips are prohibited for this home hemodialysis machine. Added it and reworded the rationale. | A | medium |
| rn-s31-41 | sources | Only an unopened textbook. Added the Children's Healthcare of Atlanta fall sheet (crib rails up and locked) and CPSC crib tips (no pillows in the crib). | A | medium |
| rn-s31-42 | options[2], rationale, sources | "Replace parts only with maker parts" was unsourced. Replaced with a cracked slat distractor that CPSC tips support. The CPSC rule citation read 75 FR 81786. The correct page is 75 FR 81766. Added CPSC crib tips. | A | high |
| rn-s31-44 | sources | Hinkle and NFPA 101 were never read. Replaced with King et al, CHEST 2014, which supports bag-valve ventilation when power or compressed gas is lost. | A | medium |
| rn-s31-45 | rationale, options[0].why, options[2].why, sources | NFPA 101 and Potter were never read. Replaced with the Minnesota Department of Health fire plan template. It says horizontal evacuation comes first, stairs only if that fails, and elevators are avoided because power may fail. | A | medium |
| rn-s31-46 | refs, options[3].why, sources | Refs gave heat stroke as above 40°C. NATA 2015 gives a core temperature typically above 40.5°C. ACSM 2021 was not readable and was removed. | A | high |
| rn-s31-48 | sources | ACSM 2021 was not readable. NATA 2015 alone supports removal from immersion at 38.9°C. | A | medium |
| rn-s31-49 | sources | The CDC smallpox signs page does not describe chickenpox. The rationale's chickenpox features (superficial lesions, crops, trunk-centered, palms and soles rarely) now cite the CDC rash illness protocol. | A | high |
| rn-s31-50 | sources | Added the CDC rash illness protocol, which states airborne and contact precautions and immediate report to infection control and public health. | A | medium |

Every edited item carries `version: 2`. Source URL additions in `common.ts` (Lewinsohn, ISPD, ISMP high-alert list, Humpty Dumpty, NATA, WMS) changed no item text.

## Pull

- rn-s31-47 (exercise-associated hyponatremia bow-tie). It duplicates rn-s37-40 from a parallel batch. Both show a marathon runner who drank at every station, gained 2 kg, vomited twice and has a sodium of 124 mEq/L. Both key the same condition, a 3% saline bolus, fluid restriction, sodium and level of consciousness. It cannot be made unique without a full rewrite. It also teaches a physiological point, not SIPC. Its refs give heat stroke as above 40°C, against 40.5°C in NATA 2015.

## Key changes

None.

## Uniqueness

Every item was grepped against `inventory.txt`, `cases.txt` and `new500.txt` by topic and teaching point.

- rn-s31-46 against rn-s38-33. rn-s38-33 asks the client to name heat stroke when the skin is still sweating. rn-s31-46 asks which of four attendees to treat first among cramps, syncope, exhaustion and stroke. The step and the point differ. Kept.
- rn-s31-48 against rn-s25-42. rn-s25-42 asks for the set of cooling actions. rn-s31-48 asks for the exact temperature to stop immersion. Kept.
- rn-s31-09 against rn-s20-10. rn-s20-10 reads a single skin test and its window. rn-s31-09 tests the booster effect in two-step testing. Kept.
- rn-s31-33 against rn-s04-08. rn-s04-08 is the wrong strength of the right drug. rn-s31-33 is the wrong drug. Kept.
- rn-s31-38 against rn-s26-10. rn-s26-10 is storage of a cylinder in a room. rn-s31-38 is transport handling. Kept.
- rn-s31-16 against rn-s34-48. rn-s34-48 is home nebulizer technique. rn-s31-16 is the rinse water in a Legionella cluster. Kept.
- rn-s31-45 against rn-s06-06. rn-s06-06 is rescue first for a fire in the room. rn-s31-45 is where to move clients. Kept.
- rn-s31-47 against rn-s37-40. Duplicate. Marked for pull.

No other overlap was found.

## Writer flags resolved

- Lewinsohn 2017. Read in PMC5504475. It recommends an IGRA over a TST in people 5 years or older with a BCG history.
- ISPD 2023. Abstract read on PubMed. The definitions were confirmed in the Doncaster and Bassetlaw NHS guideline that quotes them. Exit site infection needs purulent discharge, with or without erythema. Tunnel infection is clinical inflammation along the tunnel. Item 24 stands.
- AAMI ST79. Not readable. Removed from item 19.
- CDC opioid conversion factor. Wrong route for item 33. Replaced.
- NATA 2015. Read in PMC4639891. Heat stroke typically above 40.5°C, removal at 38.9°C, cool first and transport second.
- ACSM 2021 and WMS 2020. Only the PubMed records were readable. ACSM was removed. WMS stays only on the pulled item 47.
- Humpty Dumpty. The 2009 paper is real (PubMed 19161572). Scale items were confirmed in hospital copies: age under 3, male, neurological diagnosis, and sedation or anesthesia within 24 hours.
- NFPA 99 and 101, Potter, Hinkle. Not opened. All replaced.
- Hockenberry 2024. Real book. Kept on item 41 beside two sources that were opened.
- Item 12. ACIP 2020 does not list coworker prophylaxis among the item's choices, so no choice is wrong. The Canada note adds the Canadian coworker rule.
- CDC personnel pages. The pertussis and measles pages were read. Both say published May 15, 2024.

## Sources verified

- CDC VHF PPE, 2024. Ensemble and the 23-step N95 doffing order match items 02 and 03. The observer must not touch the person doffing. https://www.cdc.gov/viral-hemorrhagic-fevers/hcp/guidance/ppe-clinically-unstable.html
- CDC personnel pertussis, 2024. PEP for all exposed staff who see high-risk clients, no restriction on PEP, symptomatic exclusion for 5 days of therapy or 21 days. https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/pertussis.html
- CDC personnel measles, 2024. Exclusion from day 5 to day 21 whatever the PEP. https://www.cdc.gov/infection-control/hcp/healthcare-personnel-epidemiology-control/measles.html
- Sosa et al, MMWR 2019. https://www.cdc.gov/mmwr/volumes/68/wr/mm6819a3.htm
- CDC tuberculin skin test, 2025. Two-step boosting, BCG false positives, 48 to 72 hour read. https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html
- Lewinsohn et al, Clin Infect Dis 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5504475/
- Rutala and Weber 2008. Presoak to prevent drying, weekly and daily spore tests, daily Bowie-Dick, implant quarantine, wet packs, chemical indicators do not replace spore tests. https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/sterilizing-practices.html
- AORN Clinical FAQ, Instrument Cleaning, 2014. https://qsep.cms.gov/data/2501/InstrumentCleaning_AssociationofperiOperativeRegisteredNurses.pdf
- Fresenius PD exit site card, 2025. https://freseniusmedicalcare.com/content/dam/home-products-education/steps2home-pd/PD_Catheter_Exit_Site_Care.pdf
- Chow et al, ISPD 2023, PubMed 37232412. https://doi.org/10.1177/08968608231172740
- FDA Food Code 2-201.13 reinstatement, confirmed through state copies. https://www.fda.gov/food/fda-food-code/food-code-2022
- ISMP high-alert list, 2024. https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings
- WHO LASA solution, 2007. https://cdn.who.int/media/docs/default-source/patient-safety/patient-safety-solutions/ps-solution1-look-alike-sound-alike-medication-names.pdf
- ISMP List of Confused Drug Names, 2024, checked for traMADol, traZODone, hydrOXYzine and hydrALAZINE. https://online.ecri.org/hubfs/ISMP/Resources/ISMP_ConfusedDrugNames.pdf
- Grissinger, PA Patient Safety Advisory 2016. https://patientsafety.pa.gov/ADVISORIES/Pages/201603_29.aspx
- BOC medical gas safety guide, 2017. https://static.prd.echannel.linde.com/wcsstore/AU_BOC_Industrial_Store/pdf/en_AU/HCD186_Gases%20safety%20pocket%20guide_V3_FA_web_tcm350-131320.pdf
- Air Liquide Healthcare Canada, cylinder safety. https://ca.healthcare.airliquide.com/academy/cylinder-safety-basics
- FDA home device checklist, 2024, and Unique Considerations in the Home, 2018. https://www.fda.gov/medical-devices/home-health-and-consumer-devices/brochure-home-healthcare-medical-devices-checklist
- Outset Medical Tablo safety information. https://www.outsetmedical.com/indications/
- CPSC final rule 75 FR 81766, 2010, read on govinfo. Fixed sides only, which removes drop sides. https://www.govinfo.gov/content/pkg/FR-2010-12-28/pdf/2010-32178.pdf
- CPSC crib safety tips. Slats no more than 2 3/8 inches, firm tight mattress, no loose hardware, no pillows. https://www.cpsc.gov/safety-education/safety-guides/cribs/crib-safety-tips
- Children's Healthcare of Atlanta fall sheet, 2025. https://www.choa.org/-/media/Files/Childrens/teaching-sheets/fall-prevention-program.pdf
- King et al, CHEST 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4504249/
- Minnesota Department of Health fire plan template, 2017. https://www.health.state.mn.us/facilities/regulation/engineering/docs/lscsafetyplan.docx
- Casa et al, NATA 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4639891/
- CDC smallpox clinical signs, 2024. https://www.cdc.gov/smallpox/hcp/clinical-signs/index.html
- CDC smallpox rash illness protocol, 2024. https://www.cdc.gov/smallpox/hcp/diagnosis-testing/evaluating-patients-rash-illness-protocol.html

The writer's reading of the ACIP measles and hepatitis A reports, the CDC Legionella pages, Tablan 2004, the HICPAC endoscope template, the CDC epidemiology lesson, ISMP Canada 2005, the ISMP pump guideline and the FDA name project was not reopened. The item text matches what the writer reported reading.

## Needs the Preceptor team's decision

- rn-s31-47. Pull, or keep it and pull rn-s37-40 instead. The two cannot both ship.
- rn-s31-48 and rn-s31-46 carry need SIPC. Cooling end points are arguably Physiological Adaptation. They were left as SIPC to keep the batch plan.
- rn-s31-41 still lists Hockenberry, whose crib text was not opened. The point is also supported by two sources that were read.
- rn-s31-38 and rn-s31-37 now rest on supplier safety guides, not a regulator or a nursing body. No hospital standard that could be opened covered these points.

## Summary

- Items reviewed: 50.
- Fixed with the key unchanged: 16 (02, 10, 19, 32, 33, 37, 38, 40, 41, 42, 44, 45, 46, 48, 49, 50).
- Marked for pull: 1 (47).
- Passed unchanged, apart from a Canada note in 4 of them: 33.
- Key changes: 0.
- Checks: `npx tsc` prints nothing for bank/s31. `BATCH=s31 npx vitest run tests/bank.test.ts` passes 62 of 62.
