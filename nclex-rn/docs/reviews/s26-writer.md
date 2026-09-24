# s26 writer report

Batch s26 is a mixed stand-alone batch. It has 50 items, rn-s26-01 to rn-s26-50. Every item has `reviewed: false`, `version: 1` and an empty `canada` field.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Checks

- `BATCH=s26 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s26`: prints nothing.
- An earlier run failed the whole-bank near duplicate gate on rn-c02-1-1 and rn-c16-4-1. Those are other batches. The failure cleared on the final run.

## Counts

Client Needs: SIPC 30, RRP 18, PPT 2. This matches the plan.

Item types: mc 26, sata 10, msn 3, dnd 3, cloze 2, highlight 2, bowtie 2, trend 2. The trend items are 22 (mc) and 42 (sata).

CJMM steps: recognize 7, analyze 11, prioritize 4, generate 7, action 16, evaluate 5.

Difficulty: level 1 has 5, level 2 has 14, level 3 has 18, level 4 has 12, level 5 has 1.

Calculations: 05 (corrected calcium, RRP), 20 (ceftriaxone IM volume, PPT) and 44 (time left on a pump infusion, PPT). Each has a `calc` block.

## MC key positions

27 items use the mc kind, counting trend item 22. A is 7, B is 6, C is 7, D is 7.

01 B, 03 D, 05 C, 06 A, 08 C, 09 D, 10 A, 11 C, 12 B, 17 A, 19 D, 20 B, 22 D, 23 C, 25 D, 26 B, 30 A, 32 D, 34 A, 35 C, 39 B, 40 A, 41 D, 44 C, 46 B, 47 C, 49 A.

The key is the strict longest option in 6 of 27 mc items: 06, 19, 23, 26, 46 and 49. The batch cueing gate passes.

## Topic coverage

SIPC covers these areas:
- Standard precautions: 01, 02, 03, 29.
- Surgical asepsis: 04, 06, 24, 41.
- Equipment reprocessing: 16, 37.
- Hazardous drugs: 08, 19, 23, 27, 35, 48.
- Chemical hazards: 17, 21.
- Bloodborne pathogens and occupational exposure: 11, 13, 26, 30, 32, 39, 43, 46, 49.
- Glucose meter infection control: 14.
- Catheter care: 33.
- Oxygen cylinder storage: 10.

RRP lab value items are 05, 07, 09, 12, 15, 18, 22, 25, 28, 31, 34, 36, 38, 40, 42, 45, 47 and 50.

Before writing, I checked the existing SIPC and RRP topics across the bank. Some planned items duplicated s06 items: priming hazardous drug tubing, discarding tubing and replacing a sharps container at its fill line. I dropped those. My first draft of item 44 was a levothyroxine tablet count that was a near copy of rn-s17-27. I replaced it with an infusion time calculation.

## Sources and verification

- CDC HICPAC, Siegel et al., 2007 Guideline for Isolation Precautions, 2007. https://www.cdc.gov/infection-control/hcp/isolation-precautions/precautions.html
- CDC HICPAC, Boyce and Pittet, Guideline for Hand Hygiene in Health-Care Settings, MMWR 51(RR-16), 2002. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5116a1.htm
- WHO Guidelines on Hand Hygiene in Health Care, 2009. https://www.ncbi.nlm.nih.gov/books/NBK144013/
- CDC HICPAC, Rutala and Weber, Guideline for Disinfection and Sterilization, 2008. https://www.cdc.gov/infection-control/media/pdfs/guideline-disinfection-h.pdf
- CDC HICPAC, Gould et al., CAUTI guideline, 2009. https://www.cdc.gov/infection-control/hcp/cauti/evidence-review.html
- ASHP Guidelines on Handling Hazardous Drugs, Power and Coyne, AJHP 75(24):1996, 2018. I read the full text. The facts used are single gloves for intact unit-dose oral drugs, the Appendix H administration steps, alternative duty in pregnancy, and washing with soap and water rather than using sanitizing gel. https://pubmed.ncbi.nlm.nih.gov/30327293/
- NIOSH, Connor et al., NIOSH List of Antineoplastic and Other Hazardous Drugs, 2016, Publication 2016-161. It says single gloves for intact tablets or capsules. https://stacks.cdc.gov/view/cdc/41372
- OSHA Bloodborne Pathogens Standard, 29 CFR 1910.1030. I verified these provisions: vaccine and PPE at no cost, annual training, annual plan review, the recapping ban, broken glass handled by mechanical means, specimen containers and secondary containers, and no food where blood is stored. https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030
- OSHA Hazard Communication Pictogram QuickCard, OSHA 3491-08R, 2024. I read the text of the PDF. https://www.osha.gov/sites/default/files/publications/OSHA3491QuickCardPictogram.pdf
- OSHA, Best Practices for the Safe Use of Glutaraldehyde in Health Care, 2006. It covers latex, nitrile and butyl gloves, goggles, tight lids and washing with soap and water. https://www.osha.gov/sites/default/files/publications/GLUTARALDEHYDE.pdf
- CDC, Considerations for Blood Glucose Monitoring and Insulin Administration. https://www.cdc.gov/injection-safety/hcp/infection-control/index.html
- CDC, Best Practices for Occupational Exposure to Blood, 2023. It says to irrigate the eyes with water, saline or sterile irrigant. https://www.cdc.gov/dental-infection-control/hcp/dental-ipc-faqs/occupational-exposure.html
- US Public Health Service, Kofman et al., 2025 occupational HIV PEP guidelines, ICHE 46(9):863. It says to start as soon as possible and up to 72 hours after exposure. https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/
- ACIP, Schillie et al., Prevention of Hepatitis B Virus Infection, MMWR 67(RR-1), 2018. It covers the responder rule and revaccination after anti-HBs below 10 mIU/mL. https://www.cdc.gov/mmwr/volumes/67/rr/rr6701a1.htm
- ADA, Standards of Care in Diabetes 2026, section 2, Diabetes Care 49(Suppl 1):S27. https://pubmed.ncbi.nlm.nih.gov/41358893/
- Umpierrez et al., Hyperglycemic Crises in Adults With Diabetes, Diabetes Care 47(8):1257, 2024. I read the full text. It gives the HHS criteria, dextrose below 250 mg/dL and a potassium goal of 4 to 5 mmol/L. https://diabetesjournals.org/care/article/47/8/1257/156808
- ASPEN, da Silva et al., Refeeding Syndrome consensus, NCP 35(2):178, 2020. I read the full text. It gives the 30 percent severity cut, monitoring every 12 hours and a 50 percent calorie cut. https://pubmed.ncbi.nlm.nih.gov/32115791/
- KDIGO Clinical Practice Guideline for Acute Kidney Injury, Kidney Int Suppl 2(1), 2012. It defines a rise of 0.3 mg/dL within 48 hours as AKI. https://kdigo.org/guidelines/acute-kidney-injury/
- Sandoz ceftriaxone prescribing information, FDA label 2014. A 1 g vial with 2.1 mL of diluent gives 350 mg/mL for IM use. https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/065169s022lbl.pdf
- Howard, Jones and Pui, The Tumor Lysis Syndrome, NEJM 364:1844, 2011.
- Cuker et al., ASH 2018 HIT guideline, Blood Advances 2(22):3360.
- El-Hajj Fuleihan et al., Endocrine Society hypercalcemia of malignancy guideline, JCEM 108(3):507, 2023.
- Jonklaas et al., ATA hypothyroidism guideline, Thyroid 24(12):1670, 2014.
- Evans et al., Surviving Sepsis Campaign 2021, Crit Care Med 49(11):e1063.
- Tenner et al., ACG acute pancreatitis guideline, 2024.
- NFPA 99, 2024.
- Textbooks: Potter and Perry, Fundamentals of Nursing, 11th edition, 2023. Hinkle and Cheever, Brunner and Suddarth, 15th edition, 2022. Burchum and Rosenthal, Lehne's Pharmacology, 11th edition, 2022.

## For the reviewer

- **Item 24 (gown zones):** AORN guideline text is paywalled. I confirmed the zones through secondary summaries of AORN guidance: the front from the chest to the field, and the sleeves from 2 inches above the elbow to the cuff. The AORN 2025 citation names the current guideline, but I could not read its full text.
- **Item 16 (Spaulding):** the laryngoscope blade is keyed to high-level disinfection as the minimum. Some facilities sterilize blades. The stem asks for the level each item needs.
- **Item 42 (DKA trend):** potassium 3.4 mEq/L is keyed as reportable because it is below the 4 to 5 mEq/L goal. The item does not claim insulin must be held.
- **Item 47:** the INR target of 2.0 to 3.0 for atrial fibrillation sits in `refs` and is supported by Lehne. No separate anticoagulation guideline is cited.
- **Item 50:** acetaminophen at 4 g/day raising the INR is a known but modest interaction. It is written as "can raise the INR".
- **Item 22 (HIT trend):** the item does not use 4Ts scoring. The rationale relies only on the fall of more than 50 percent, the timing and the new calf swelling.
- **Item 25 (TSH):** reference ranges vary by laboratory. The range is given in the stem.
- **Items 01 to 10:** these came from an earlier session of this run before the usage limit. I kept them after they passed every gate. Their sources are in `common.ts` and were not re-verified this session, except where listed above.
- **Unused sources:** `common.ts` still exports some unused but real sources from the first session's planning: NIOSH_ALERT, NIOSH_LIST, ASCO_HD, NIOSH_BBP and OSHA_HCS. No item cites them.
