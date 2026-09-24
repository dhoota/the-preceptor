# Format conformance: batch s12

Batch s12 holds 30 SAMPs: infectious-diseases-01 to 15 and ischemic-heart-disease-01 to 15. It has 114 questions: 83 write-in, 28 single and 3 menu. The work followed `docs/CONFORMANCE_BRIEF.md`. It is format only. No `correct` target, `select`, `required`, `accept`, `unacceptable`, clinical fact, value or timeline was changed. The only exceptions are the index remaps that reordering needs, and the keyed option rewordings listed below.

Files edited: `src/samps/s12/infectious-diseases.ts` and `src/samps/s12/ischemic-heart-disease.ts`.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s12` prints nothing.
- `CONFORM=s12 SAMP_BATCH=s12 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts` gives 458 passed and 18 failed. All 18 failures are the expected "keeps its keys" test, for the SAMPs whose keyed option text was reworded (table below). They pass once the orchestrator logs the edits in `docs/conformance-key-edits.json`.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 114 (83 write-in, 28 single, 3 menu) |
| Context sentences moved from a prompt into `update` | 12 (new or extended updates) |
| Options removed | 8 (six-option single questions cut to 5) |
| Options added | 0 |
| Option texts reworded (all, keyed included) | 72 |
| Keyed options reworded | 20, in 18 SAMPs |
| Stems changed | 30 |
| Vitals moved to the `vitals` field | 29 SAMPs (infectious-diseases-08 has no vitals) |
| Patient names removed | 0 (none present) |
| Citations completed | 11 distinct sources (12 SAMP source entries) |
| Citations replaced | 0 |
| Explanations edited | 4 (see below) |

Options removed: infectious-diseases-01 q2 ("Maintenance fluid at 100 mL/h"), infectious-diseases-04 q2 (MRI of the thigh), infectious-diseases-05 q3 ("Oral prednisone and discharge"), infectious-diseases-06 q4 ("Oral primaquine"), infectious-diseases-08 q2 ("Zidovudine alone for 28 days"), infectious-diseases-14 q3 ("Azithromycin 500 mg PO daily"), ischemic-heart-disease-02 q3 ("Tenecteplase now"), ischemic-heart-disease-05 q2 (the HEART score option "0").

Write-in prompts now read as questions ending in "?", with "List N", "Name", "Give" and "Select" instructions removed. Detail requests were kept inside the question ("including the drug, dose and route").

Stems: every age is hyphenated. Vitals left the stem text for the `vitals` field with every value unchanged. Pulse and respiration now carry "/minute" and BP carries "mmHg". Micro signs became "umol/L", "x10^9/L" became "x 10^9/L", "3200" became "3 200", and "48 mL/min" became "48 mL/minute". Updates that quoted BP or HR gained units in the same way (infectious-diseases-01 q4, ischemic-heart-disease-01 q5, 07 q2, 14 q3). The mean arterial pressure in infectious-diseases-01 stays in the stem as "Her mean arterial pressure is 58 mmHg."

## Key position across single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 2 | 17 | 6 | 3 | 0 |
| After | 7 | 6 | 4 | 6 | 5 |

Maximum after is 7 of 28 (25 percent). Every position holds a key. The key was the single longest option in 19 of 28 single questions before and in 5 of 28 after.

## Keyed option rewordings

| SAMP | Question | Before | After |
|---|---|---|---|
| infectious-diseases-01 | q2 | Ringer's lactate 1.8 L IV over the first 1 to 3 hours with frequent reassessment | Ringer's lactate 1.8 L IV over 1 to 3 hours |
| infectious-diseases-02 | q2 | Blood cultures, then dexamethasone and antibiotics, then CT head, then lumbar puncture if safe | Blood cultures, dexamethasone, antibiotics, CT, LP if safe |
| infectious-diseases-02 | q4 (menu) | His 17 year old son, who lives at home | His 17-year-old son, who lives at home |
| infectious-diseases-05 | q3 | Needle aspiration or incision and drainage, then oral antibiotics and outpatient follow up if she can drink | Drain, oral antibiotics, outpatient follow up if drinking |
| infectious-diseases-05 | q5 | No strep testing and no antibiotic. Symptomatic care and return advice | No strep test or antibiotic, symptomatic care, return advice |
| infectious-diseases-06 | q4 | IV artesunate 2.4 mg/kg at 0, 12 and 24 hours, then daily | IV artesunate 2.4 mg/kg at 0/12/24 hours, then daily |
| infectious-diseases-08 | q2 | Tenofovir DF and emtricitabine plus dolutegravir for 28 days, first dose now | Tenofovir DF, emtricitabine, dolutegravir now for 28 days |
| infectious-diseases-09 | q1 | Rabies post exposure prophylaxis with immune globulin and vaccine now | Rabies immune globulin and vaccine now |
| infectious-diseases-10 | q2 | Symptomatic care with acetaminophen or ibuprofen, fluids and return precautions | Acetaminophen or ibuprofen, fluids and return precautions |
| infectious-diseases-12 | q2 | It is common in this population, often reflects asymptomatic bacteriuria and does not establish the source | Often reflects asymptomatic bacteriuria, not proof of source |
| infectious-diseases-14 | q3 | Admission with cardiac monitoring and ceftriaxone 2 g IV daily | Admit for cardiac monitoring and ceftriaxone 2 g IV daily |
| ischemic-heart-disease-01 | q2 | Tenecteplase in your department within 30 minutes of arrival, then transfer to the PCI centre | Tenecteplase within 30 minutes of arrival, then transfer |
| ischemic-heart-disease-02 | q3 | Admission with antithrombotic therapy and invasive coronary angiography within 24 hours | Admit, antithrombotics, invasive angiography within 24 hours |
| ischemic-heart-disease-03 | q3 | Pleuritic or positional pain lowers the likelihood of ACS but does not exclude it, so ECG and troponin testing are still needed | Pleuritic or positional pain lowers but does not exclude ACS |
| ischemic-heart-disease-04 | q2 | Admit under cardiology for early coronary angiography and avoid stress testing | Admit to cardiology for early angiography, avoid stress test |
| ischemic-heart-disease-05 | q4 | Relief with nitroglycerin does not reliably separate cardiac from non cardiac pain and should not change her risk assessment on its own | Relief does not reliably separate cardiac from other pain |
| ischemic-heart-disease-07 | q3 | Emergency primary PCI with temporary pacing support as needed | Emergency primary PCI with temporary pacing as needed |
| ischemic-heart-disease-09 | q2 | Transfer directly to the PCI centre catheterization laboratory for primary PCI | Transfer directly to the PCI laboratory for primary PCI |
| ischemic-heart-disease-10 | q4 | Admit with antithrombotic therapy and plan invasive angiography within 24 hours | Admit, antithrombotics, invasive angiography within 24 hours |
| ischemic-heart-disease-11 | q1 | Immediate transfer for primary PCI despite the expected delay | Immediate transfer for primary PCI despite the delay |

For the "keeps its keys" log, infectious-diseases-02 q4 keeps its keyed order as [wife, son, paramedic]. Its `correct` is [2, 1, 5] for that reason.

Explanations edited to carry text that left an option:
- infectious-diseases-05 q3: added "Needle aspiration or incision and drainage are both options."
- ischemic-heart-disease-03 q3: "Objective testing is still required." became "ECG and troponin testing are still required."
- ischemic-heart-disease-05 q4: added "Relief alone should not change her risk assessment."
- infectious-diseases-06 q3: units only (umol/L).

## Citation changes

| Source id | Change | Verification |
|---|---|---|
| eau-stone | Skolarikos A, et al. EAU Guidelines on Urolithiasis, 2025 edition. URL added | https://uroweb.org/guidelines/urolithiasis/summary-of-changes/2025 |
| cig-tetanus | Year added: updated 2026 (page shows June 2026). URL added | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html |
| tintinalli-neck | Editors, 9th ed and 2020 added | https://www.mheducation.com/highered/mhp/product/tintinalli-s-emergency-medicine-comprehensive-study-guide-9th-edition.html |
| catmat | 2014, treatment chapter updated 2019 | https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria/chapter-7-treatment.html and https://publications.gc.ca/site/eng/9.699136/publication.html |
| who-malaria | 13 August 2025 edition. URL added | https://www.who.int/publications/i/item/guidelines-for-malaria |
| cdc-tss | 2011 case definition | https://ndc.services.cdc.gov/case-definitions/toxic-shock-syndrome-2011/ |
| cig-hbv | 2017, updated 2022. URL added | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-7-hepatitis-b-vaccine.html |
| cig-rabies | 2015, updated 2026 (existing URL) | https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-18-rabies-vaccine.html |
| cwc | Named the specific 2018 Using Antibiotics Wisely primary care effort on acute upper respiratory tract infections. URL added | https://choosingwiselycanada.org/using-antibiotics-wisely-across-canada-2018/ |
| phac-ipac | 2016. URL added | https://www.canada.ca/content/dam/phac-aspc/documents/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/routine-practices-precautions-healthcare-associated-infections-2016-FINAL-eng.pdf |
| phac-pid | Updated 2026 (page shows June 2026, existing URL) | https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/sti-associated-syndromes/pelvic-inflammatory-disease.html |

No source was replaced. The ischemic heart disease sources already named a body, a work and a year and were left alone. The COMMIT citation keeps its published title "45,852" as printed.

## Needs physician decision

1. **Oxygen saturation with no delivery stated.** In 21 stems the saturation was written as "SpO2 NN%" with no "on room air" or oxygen source. The CFPC vitals format needs the source, and adding "on room air" would add a fact. So these values stay in the stem as "Oxygen saturation is NN%." and are not in the `vitals` field. Confirm room air, or give the oxygen source, and they can move: infectious-diseases-02, 03, 04, 05, 06, 07, 11, 13, 14 and ischemic-heart-disease-01, 03, 04, 05, 06, 07, 08, 09, 10, 11, 14, 15.
2. **Keyed rewordings that moved content into the explanation.** Please confirm the meaning is unchanged:
   - infectious-diseases-01 q2: "with frequent reassessment" was dropped from the key to meet the 10-word limit. The explanation already says "Reassess often to avoid fluid overload."
   - infectious-diseases-05 q3: "Needle aspiration or incision and drainage" became "Drain". The explanation now names both methods.
   - infectious-diseases-06 q4: "at 0, 12 and 24 hours" is now written "at 0/12/24 hours" to meet the 10-word limit.
   - infectious-diseases-12 q2: "common in this population" was dropped. The explanation already says it is very common in long term care residents.
   - ischemic-heart-disease-01 q2: "in your department" and "to the PCI centre" were dropped.
   - ischemic-heart-disease-03 q3 and ischemic-heart-disease-05 q4: the second clause of the key now sits in the explanation.
   - ischemic-heart-disease-09 q2: "PCI centre catheterization laboratory" became "PCI laboratory".
3. **New distractor wording to check as clearly wrong.** infectious-diseases-06 q4 now gives regimens for the oral distractors ("Atovaquone proguanil PO daily for 3 days", "Chloroquine PO as a standard 3 day course", "Doxycycline 100 mg PO twice daily alone") and "IV artesunate 1 mg/kg as a single dose". infectious-diseases-05 q5 gives "Rapid strep test, then amoxicillin for 10 days if positive". ischemic-heart-disease-11 q1 now has "Full dose tenecteplase now, then transfer for angiography" and "Half dose tenecteplase now, then transfer". The reasons that used to sit inside these options ("because of the recent stroke", "because PCI cannot be achieved within 120 minutes") are covered by the existing explanation.
4. **No clinical errors found.** One minor nuance: the infectious-diseases-06 q3 explanation lists "bilirubin above 50 umol/L" as a WHO severe malaria criterion. WHO also requires a parasite count above 100 000/uL for that criterion. This patient meets it at 12 percent parasitemia, so the key stands. It was left unchanged.
