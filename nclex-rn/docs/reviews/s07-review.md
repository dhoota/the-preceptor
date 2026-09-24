# Batch s07 adversarial review

Scope: all 50 items in part1.ts to part5.ts, the shared sources in common.ts, and the two items under consideration in extra.ts (rn-s07-91 and rn-s07-92). Both lenses were applied to every item, every why and every rationale sentence.

Note on extra.ts: the file was read in full at the start of the review. It was deleted from the batch folder by another process during the review, before any fix could be applied. I did not delete it and did not recreate it. Its defects are listed below with the fixes that should be applied if the items come back.

## Fixes applied

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s07-03 | rationale | Said the end point "falls partway through the stay", but the stem gives no length of stay. It also said swelling is not a marker, while onset of swelling is the marker. Rewritten to say the 5 days count from onset, not admission, and that resolution of fever or swelling is not the marker. | B | high |
| rn-s07-09 | sources (TJC_NPSG in common.ts) | Cited "National Patient Safety Goals Effective January 2026". From January 2026 the hospital NPSGs are replaced by the National Performance Goals. The suicide goal is now NPG.08.01.01, whose note for nonpsychiatric units names one-to-one monitoring, removing objects, checking visitor items and safe transport. Citation corrected. | A | high |
| rn-s07-16 | sources (CDC_LEAD in common.ts) | Work title "Preventing Childhood Lead Exposure" does not match the CDC page, which is "Preventing Childhood Lead Poisoning" (updated June 2024). Title corrected. | A | high |
| rn-s07-21 | rationale | "Carbon monoxide binds hemoglobin, so pulse oximetry can read normal" gives the wrong mechanism. The oximeter reads normal because it cannot tell carboxyhemoglobin from oxyhemoglobin. Sentence corrected to match the parameter why. | A | medium |
| rn-s07-30 | option A why | "Cases acquired after day 3 of the stay rose each week" is false. New diarrhea after day 3 was 1, 1, 4, 6, so it did not rise from week 1 to week 2. Now says it rose from 1 to 6 over 4 weeks. | B | high |
| rn-s07-30 | option D why | "A steady rise over 4 weeks" did not hold for the diarrhea row. Now cites the positive tests, which did rise every week, 0, 1, 3, 5. | B | medium |

## Defects found in extra.ts, not applied (file removed)

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s07-91 | key, option B, rationale | The keyed antidote is protamine sulfate, which reverses heparin. The antidote for magnesium sulfate toxicity is IV calcium gluconate, 10 mL of a 10% solution. Option B should read "Calcium gluconate" with the why "IV calcium counters the neuromuscular effect of magnesium", and the rationale should name calcium gluconate. The key position (1) stays the same but the keyed answer changes. | A | high |
| rn-s07-91 | sources | The SOGC Guideline No. 426 (Magee et al., J Obstet Gynaecol Can 44:547, 2022) is real, but I could not read its text to confirm it names the antidote. Replace with Xia M, Ni Q, Zhu S. Magnesium sulfate pharmacology for maternal and critical-care indications. Frontiers in Pharmacology, 2026, which states hold criteria (absent patellar reflex, respirations under 12/minute) and calcium gluconate 10% 10 mL IV for toxicity. | A | high |
| rn-s07-91 | need | Tagged SIPC. An antidote for drug toxicity is Pharmacological and Parenteral Therapies. Should be PPT. | B | high |
| rn-s07-92 | rationale | States "this client has asthma". The stem gives hypertension only. The claim is invented, and a nonselective beta blocker for a client with asthma would itself be a prescribing concern the item never addresses. Rewrite: stopping propranolol suddenly can cause rebound tachycardia, and as a nonselective beta blocker it can cause bronchospasm, so wheezing is reported. | B | high |
| rn-s07-92 | need | Tagged SIPC. Drug teaching is PPT. | B | high |

## Key changes

None applied to the bank.

Proposed for Arjan, if rn-s07-91 is restored: before, "Protamine sulfate" keyed at index 1. After, "Calcium gluconate" keyed at index 1. Reason: protamine reverses heparin and has no action on magnesium. Calcium gluconate is the accepted antidote for magnesium sulfate toxicity (Xia et al. 2026, and standard drug references).

## Items checked and found sound

The keys and whys of the other 43 items hold against their sources. Points confirmed directly:

- Appendix A rows for items 01, 03, 06, 18, 25, 39, 40 and 43 match CDC isolation guidance exactly (RSV contact for the illness, mumps droplet until 5 days after swelling onset, lice contact until 24 hours after therapy, adenovirus conjunctivitis contact, rubella droplet, hepatitis A contact for incontinent adults, smallpox airborne and contact, CMV standard, group A strep pharyngitis droplet until 24 hours of therapy, Legionnaires standard, Mycoplasma droplet, impetigo and rotavirus contact, draining extrapulmonary TB airborne and contact).
- Item 04: ISMP lists U as mistaken for zero or 4, IU as mistaken for IV or 10, and trailing zeros as causing tenfold errors.
- Item 07: every why matches CDC safe injection text.
- Item 19: REMM states clothing removal reduces contamination up to 90%, warns against hot water and vigorous scrubbing, and puts stabilization first.
- Item 22: CDC states products relying solely on quaternary ammonium compounds are not effective and shared equipment is disinfected after each use.
- Items 34 and 45: CPSC advises 120°F (49°C). Burns occur in 6 seconds at 140°F, which supports "within seconds".
- Item 48: NCPC gives honey 10 mL every 10 minutes for children 12 months or older within 12 hours, immediate x-ray for children 12 years or younger, serious burns within 2 hours and no induced vomiting.
- Item 50: FDA advises placing sharps in a container immediately and not overfilling.
- Numbers recomputed by script: item 10 line days 1180 to 1210 and infections 6, 5, 2, 1. Item 30 census 26 to 28, diarrhea 1, 1, 4, 6, positive tests 0, 1, 3, 5. Temperature pairs 36.8°C = 98.2°F, 38.9°C = 102.0°F, 49°C = 120.2°F, 60°C = 140°F all convert within rounding.

## Sources verified

- CDC. Isolation Precautions Appendix A, Type and Duration of Precautions. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- The Joint Commission. National Performance Goals Effective January 2026 for the Hospital Program, NPG.08.01.01. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82
- Olsen MM, Walton AL, editors. Safe Handling of Hazardous Drugs, 4th edition. Oncology Nursing Society, 2024. https://www.ons.org/books/safe-handling-hazardous-drugs-fourth-edition
- National Capital Poison Center. Button Battery Ingestion Triage and Treatment Guideline, revised 2018. https://www.poison.org/battery/guideline
- CDC. Infection Control Guidance: Candida auris, updated 2026. https://www.cdc.gov/candida-auris/hcp/infection-control/index.html
- ISMP. List of Error-Prone Abbreviations, Symbols, and Dose Designations, 2021. https://www.ismp.org/system/files/resources/2021-02/Error%20Prone%20Abbreviations%202021_0.pdf
- CPSC. Avoiding Tap Water Scalds, Publication 5098. https://www.cpsc.gov/s3fs-public/5098.pdf
- REMM. Procedures for Radiation Decontamination. https://remm.hhs.gov/ext_contamination.htm
- CDC. Carbon Monoxide Poisoning Basics, updated January 2026. https://www.cdc.gov/carbon-monoxide/about/index.html
- CDC. Preventing Childhood Lead Poisoning, updated June 2024. https://www.cdc.gov/lead-prevention/prevention/index.html
- FDA. Best Way to Get Rid of Used Needles and Other Sharps. https://www.fda.gov/medical-devices/safely-using-sharps-needles-and-syringes-home-work-and-travel/best-way-get-rid-used-needles-and-other-sharps
- CDC. Safe Injection Practices to Prevent Transmission of Infections to Patients, reviewed April 2024. https://www.cdc.gov/injection-safety/hcp/clinical-guidance/index.html
- AAP policy statements confirmed by DOI through Europe PMC: Child Passenger Safety 10.1542/peds.2018-2460, Prevention of Drowning 10.1542/peds.2019-0850, Prevention of Choking Among Children 10.1542/peds.2009-2862, Firearm-Related Injuries 10.1542/peds.2022-060070. AARC endotracheal suctioning guideline, Respir Care 55(6):758, 2010. https://europepmc.org
- Magee LA et al. Guideline No. 426, J Obstet Gynaecol Can 44:547, 2022 (existence confirmed, text not read). Xia M, Ni Q, Zhu S. Front Pharmacol 2026, PMC12963761 (text read). https://europepmc.org/article/PMC/PMC12963761
- Vallerand AH, Sanoski CA. Davis's Drug Guide for Nurses, 18th edition, F. A. Davis, released 2022 as the 2023 edition (ISBN 9781719646406). https://openlibrary.org/isbn/9781719646406

Not read at page level (403 or unavailable): TJC Sentinel Event Alerts 53 and 68, AAP full texts, CMS 42 CFR 482.13(e) guidance, FDA bed entrapment guidance, the CDC LTC influenza page (the current URL returns 404, the writer's archive link was not re-read), and the textbook claims from Potter and Hinkle. The claims resting on them are standard and I found no error in them.

## Needs Arjan's decision

- extra.ts is gone from the batch folder. Decide whether rn-s07-91 and rn-s07-92 return. If they do, apply the fixes above, including the key change on rn-s07-91, and file them in a PPT batch rather than this SIPC batch.
- rn-s07-50: the why "Sharps containers are not reused" is sound practice, but the FDA page does not state it. Consider a local disposal program source if a direct citation is wanted.
- rn-s07-35: the 3 feet spacing comes from the 2007 isolation guideline. Some current CDC respiratory hygiene material uses 6 feet. The key is unaffected.

## Summary

52 items reviewed (50 in the bank, 2 in extra.ts). Defects found in 7 items: rn-s07-03, 09, 16, 21, 30, 91 and 92. Six fixes applied in the bank across 5 items. No key changed in the bank. One key change is proposed for rn-s07-91, which could not be applied because extra.ts was removed during the review. tsc prints nothing for bank/s07 and BATCH=s07 npx vitest run tests/bank.test.ts passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
