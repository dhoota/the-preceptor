# Batch 09 adversarial review

Reviewer role: skeptical emergency physician, oral examiner and medicolegal educator. All cases remain `reviewed: false`. Checks after edits: `npx tsc --noEmit -p .` shows no batch09 errors. `CASE_BATCH=batch09 npx vitest run tests/cases.test.ts` passes 63 of 63.

Several government and journal sites block automated fetching (ontario.ca e-Laws, CanLII, CMAJ, PubMed). Where a page could not be opened, the statute or guideline wording was checked through search results that quote it. These are marked below.

## fever-returning-traveller. Fever and confusion after a family visit abroad

Verdict: Corrected

Changes
1. Stem. Before: artesunate "stocked through the Canadian Malaria Network at a partner hospital". After: not stocked here, the nearest Canadian Malaria Network pharmacy is 30 minutes away. CATMAT says physicians contact the listed CMN pharmacy and complete case forms.
2. Severe malaria threshold. Before: "5 percent or more meets the Canadian threshold". After: 5 percent or more in a non immune adult, with a line that she has lost childhood immunity after eight years away. CATMAT Table 7.1 uses 5 percent for non immune adults and 10 percent for semi immune adults. Rubric teaching now states both.
3. Oral bridge. Before: "start an oral artemisinin combination or atovaquone proguanil". After: start an oral agent if artesunate is more than about an hour away and she can swallow. CATMAT names oral quinine. CDC prefers artemether lumefantrine. Use what pharmacy stocks, with ID advice. The strong choice label and rubric item were changed to match.
4. Artesunate schedule. Kept 2.4 mg/kg at 0, 12 and 24 hours then daily if needed (CDC). Added that CATMAT lists 0, 12, 24 and 48 hours. The 154 mg dose for 64 kg is correct.
5. Exchange transfusion. Before: "no longer recommended". After: not indicated at 7 percent. CDC no longer recommends it. CATMAT still says it may be considered above 10 percent. The old wording contradicted the Canadian guideline.
6. Partial feedback on atovaquone proguanil now says that drug clears parasites slowly, rather than implying every oral agent does.
7. Chloroquine feedback. "This dose buys nothing" reworded.
8. Delayed hemolysis teaching. Before: one to four weeks. After: usually two to three weeks, weekly checks for four weeks per CDC.
9. Added verified URLs for CATMAT and CDC. Retitled the CDC citation to match the page.

Sources verified
- PHAC CATMAT. Canadian recommendations for the prevention and treatment of malaria. Chapter 7 treatment and Appendix 5 Canadian Malaria Network. https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria.html
- CDC. Treatment of severe malaria. https://www.cdc.gov/malaria/hcp/clinical-guidance/treatment-of-severe-malaria-1.html
- Ontario Regulation 135/18 lists malaria as a disease of public health significance. Not fetched, consistent with known list.

Residual uncertainties
- Search results indicate Health Canada authorized an IV artesunate product (Amivas) in 2025. If so, some hospitals may now stock it outside the CMN. I could not open the Health Canada page. The case text no longer claims CMN is the only route in teaching.
- Oral quinine is rarely stocked in Ontario EDs. The physician should decide which bridge the case should reward.
- WHO defines impaired consciousness in adults as GCS under 11. CATMAT and CDC do not set a GCS cut off. The case relies on CATMAT. Parasitemia alone makes the case severe, so the teaching holds either way.

## fever-back-pain-injection-use. Fever and back pain in a man who injects drugs

Verdict: Corrected

Changes
1. Vancomycin load. Before: 25 to 30 mg/kg "about 1.8 to 2 g". After: about 1.8 to 2.2 g, which matches 72 kg. Range is within Rybak 2020 (20 to 35 mg/kg).
2. Beta lactam. Before: ceftriaxone framed as the MSSA agent that "covers MSSA better than vancomycin". After: ceftriaxone 2 g every 12 hours is kept for gram negative and CNS cover while a spinal source is possible, with a switch to cefazolin or cloxacillin once MSSA grows. Ceftriaxone is not a preferred agent for MSSA bacteremia or endocarditis. Model answer, strong feedback, rubric text and teaching changed.
3. Cefazolin partial feedback now says cefazolin alone misses MRSA, so vancomycin should be added. This avoids implying vancomycin plus cefazolin is wrong.
4. Buprenorphine. Added the COWS over 12 threshold. Dose unchanged (2 to 4 mg then to effect, 8 to 16 mg day one).
5. Unsafe feedback on medical therapy. Before: antibiotics alone are for poor surgical candidates without deficits. After: reserved for selected patients without a deficit or who cannot have surgery.
6. OUD source. Before: CRISM 2018 guideline, with "buprenorphine naloxone is first line". After: the 2024 CRISM update in CMAJ, which makes methadone and buprenorphine both first line. CRISM is now the Canadian Research Initiative in Substance Matters.

Sources verified
- Management of opioid use disorder. 2024 update to the national clinical practice guideline. CMAJ 2024, volume 196, issue 38, E1280. https://www.cmaj.ca/content/196/38/E1280 (confirmed by search, page blocked)
- Rybak 2020 ASHP, IDSA, PIDS, SIDP vancomycin guideline, Delgado 2023 ESC endocarditis, Berbari 2015 IDSA vertebral osteomyelitis, Baddour 2015 AHA, Evans 2021 SSC. All real. Titles checked from knowledge, not fetched.

Residual uncertainties
- Empiric regimen for combined S. aureus endocarditis and epidural abscess varies by centre. Some would use vancomycin plus cefazolin or cloxacillin plus a gram negative agent. Physician to confirm the preferred local answer.
- Right sided surgical indications follow ESC 2023. His 22 mm vegetation with septic emboli may already meet one. The case does not test that.

## flank-pain-rigors. Flank pain and rigors on a Saturday night

Verdict: Corrected

Changes
1. Overlap with batch10 waiting-room-slump. That case has a 71 year old with a 7 mm right UPJ stone, a stone six years ago, metformin, ramipril and baseline creatinine 78. Ours had the same stone size, the same stone history, metformin plus ramipril and the same baseline. Changed ours to a 9 mm left proximal ureteric stone at L3, two stones passed in her forties, baseline creatinine 70, and metformin, empagliflozin and candesartan. The organism stays ESBL E. coli. Batch10 names no organism. Focus stays on antibiotic choice, drainage and the urology pushback.
2. New teaching from the medication change: hold the SGLT2 inhibitor and recheck ketones because of euglycemic ketoacidosis. Finding changed from "No ketones" to beta hydroxybutyrate 0.4 mmol/L.
3. Meropenem. Before: 1 g every 8 hours, adjusted by pharmacy. After: 1 g now, later doses adjusted. Her estimated clearance is about 40 mL/min, where 1 g every 12 hours is usual.
4. Hold list in model answer and rubric updated to match the new medications.

Sources verified
- Pearle 1998 J Urol on stent versus nephrostomy. Assimos 2016 AUA and Endourological Society surgical management of stones. EAU urolithiasis guideline. SSC 2021 vasopressin threshold of 0.25 to 0.5 mcg/kg/min. All real. Checked from knowledge.

Residual uncertainties
- AUA is cited for the advocacy and escalation rubric items. It supports why drainage is needed, not how to escalate. Physician may prefer a CMPA or CPSO source.

## melena-wallet-card. Black stools and a card in his wallet

Verdict: Corrected

Changes
1. Glasgow Blatchford score. Before: 13. After: 14. Urea 18.4 scores 4, male hemoglobin under 100 scores 6, systolic 98 scores 2, heart rate over 100 scores 1, melena scores 1. Near syncope was not scored as syncope.
2. Unsafe feedback. Before: "Ontario courts have held physicians liable for exactly this". After: names Malette v Shulman, where the Court of Appeal upheld damages against a physician who transfused despite a Witness card. The original overstated the match, since Malette was unconscious.
3. Age wording. "over 16" changed to "at 16 or older" to match HCCA wording "after attaining 16 years of age".
4. Section 26 named for the bar on emergency treatment against a prior capable wish.
5. Section 36. Before: the Board "can hear an application to depart from wishes". After: the Board can allow it only if he would probably consent now because the likely result is significantly better than he expected. That test does not fit here.
6. Endoscopy. "Do not wait for 24 hours" clarified to "do not use the full 24 hour window".
7. Internal consistency. The disposition prompt referred to "the nurse who refused to hang the blood". On the strong path no nurse refused. Now the nurse stopped the transfusion when he refused.
8. Malette citation given with its report reference. HCCA and CPSO citations given URLs.

Sources verified
- HCCA s.26 and s.36 wording, through the CPSO Guide to the HCCA and search quotes. https://www.cpso.on.ca/physicians/policies-guidance/policies/consent-to-treatment/guide-to-the-health-care-consent-act
- CPSO Consent to Treatment. https://www.cpso.on.ca/physicians/policies-guidance/policies/consent-to-treatment
- Malette v Shulman (1990), 72 OR (2d) 417 (CA). From knowledge.
- Barkun 2019 International Consensus Group. Real.

Residual uncertainties
- The card names his brother as contact. It does not appoint a power of attorney. The case treats the wife as SDM by HCCA ranking, which is correct, but a candidate may raise the brother.

## teen-wants-to-leave. A fifteen year old who wants to go home

Verdict: Corrected

Changes
1. Acetaminophen. Added that the 4 hour level of 1650 µmol/L is below double the treatment line, so standard two bag dosing applies, and that the reported ingestion is over 500 mg/kg so the poison centre may advise more if levels stay high. The two bag regimen of 200 mg/kg over 4 hours then 100 mg/kg over 16 hours is correct per the 2020 Australian and New Zealand guideline.
2. Mother as SDM. Added that the allegation is against her partner, not her, so she remains SDM unless the children's aid society takes Chloe into care. Added a prompt to check she acts in Chloe's best interests.
3. Informing the minor. Teaching now cites the CPSO requirement to tell a patient found incapable that an SDM will decide and that she can apply to the Board for review.
4. Form 1 grounds reworded closer to the Act. Added that Form 1 detention is in a psychiatric facility, or authorizes transfer to one.
5. Boyfriend teaching. Before: framed as a PHIPA point but cited the HCCA. After: he is not her legal parent or SDM.
6. CYFSA citation now names section 125. CPSO citation given a URL.

Sources verified
- CYFSA 2017 s.125. Mandatory for under 16, direct report, may not rely on another person. Confirmed through search of CAS and college summaries.
- CPSO Consent to Treatment, required information for incapable patients. Fetched.
- Coughlin 2018 CPS position statement and Chiew 2020 MJA paracetamol guideline. Real.

Residual uncertainties
- Whether this community hospital is a Schedule 1 facility changes how the Form 1 works. Physician to decide.
- The right to apply to the Board for appointment of a representative (s.33) applies at 16 or older, so it was not added for a 15 year old. Physician to confirm.
- Duty to tell the mother about the disclosure is not addressed. Most would let the CAS guide this.

## colleague-at-handover. A colleague at handover

Verdict: Corrected

Changes
1. Legal duty. Before: implied medical leadership "handles any report to the College" and cited the CPSO policy on Physician Behaviour in the Professional Environment, which is about disruptive behaviour. After: cites the CPSO Reporting Requirements policy. That policy says all physicians must take appropriate and timely action when a colleague appears incapacitated. Telling hospital leadership meets that. A direct College report is allowed but not the only route. The hospital, as facility operator, has its own legal duty to report suspected incapacity.
2. There is no general statutory duty on an individual Ontario physician to report a colleague's incapacity to the CPSO. The case no longer implies one.
3. Clinical catch. The corrected hydromorphone order of 1 mg IV for an 84 year old is still high. Added a recheck to the patient review.
4. Driving. Before: "public safety outweighs his privacy". He is not a patient, so privacy law framing was off. Reworded as a public safety call.
5. CMA Code given a verified URL. CMPA citation reworded as a plain topic.

Sources verified
- CPSO Reporting Requirements. https://www.cpso.on.ca/physicians/policies-guidance/policies/reporting-requirements (fetched)
- CMA Code of Ethics and Professionalism 2018. https://policybase.cma.ca/media/PolicyPDF/PD19-03.pdf (text includes reporting unprofessional conduct and supporting colleagues in need)
- OMA Physician Health Program. Real.

Residual uncertainties
- The facility duty sits in the Health Professions Procedural Code. I did not open the statute to confirm the section number, so no section is cited.
- Hospital by-law wording for immediate suspension varies. Not cited.

## driver-asks-for-silence. A driver who asks you to keep it quiet

Verdict: Corrected

Changes
1. Mandatory report wording. Before: "Seizures that caused sudden incapacitation with a moderate or high risk of recurrence". After: the prescribed condition is a disorder that has caused sudden incapacitation and has a moderate or high risk of recurrence. Recurrent seizures qualify. Rubric teaching now names HTA s.203 and O.Reg 340/94.
2. Epilepsy definition. Added "more than 24 hours apart".
3. Added that the report goes only to the Registrar.
4. MTO source given a URL.

Sources verified
- HTA s.203 mandatory report for patients 16 or older, good faith protection, report privileged for the Registrar. Checked through search quotes. e-Laws blocked.
- O.Reg 340/94 s.14.1 sudden incapacitation wording. Checked through search quotes and the OMA fitness to drive page. https://www.oma.org/practice-professional-support/running-your-practice/patient-care/fitness-to-drive/
- MTO. https://www.ontario.ca/page/reporting-driver-medical-review
- PHIPA s.40(1). Huff 2014 ACEP seizure policy. Real.

Residual uncertainties
- ACEP published a 2024 seizure policy that covers only benzodiazepine refractory status. The 2014 policy is still the one that covers first seizure workup. Kept.
- Labelling the employer call "unsafe" is a judgment. It is a privacy breach rather than direct physical harm.

## news-in-the-family-room. A husband and son in the family room

Verdict: Corrected

Changes
1. Donation notification. Before: "Ontario hospitals must notify" and "a legal requirement in Ontario". After: designated hospitals must notify Ontario Health (Trillium Gift of Life Network) as soon as possible after a death or when death is imminent. The duty applies to designated facilities only.
2. Statute name. Before: Trillium Gift of Life Network Act. After: Gift of Life Act, RSO 1990, c H.20, s.8.1.
3. Viewing. Before: clean her and remove blood. After: with the coroner's agreement.

Sources verified
- Gift of Life Act s.8.1. https://www.canlii.org/en/on/laws/stat/rso-1990-c-h20/latest/rso-1990-c-h20.html (confirmed through search, page blocked)
- Coroners Act s.10, sudden and unexpected death. From knowledge.
- Hobgood 2005 GRIEV_ING, Baile 2000 SPIKES, Gollob 2011 CCS and CHRS genetic testing position paper. Real.

Residual uncertainties
- The prior visit with a QTc of 498 ms is a possible missed diagnosis. Disclosure to the family after quality review is mentioned in teaching. Physician may want it tested more directly.

## headaches-and-a-ct-result. Headaches and a CT result

Verdict: Corrected

Changes
1. Dexamethasone. Before: 4 to 8 mg per day, "higher for severe symptoms". After: 4 to 8 mg per day, or 16 mg per day or more for severe symptoms of raised pressure, then taper. This is the CNS guideline endorsed by ASCO and SNO.
2. Source. Steroid and anticonvulsant items cited Vogelbaum 2022. That guideline covers surgery, radiation and systemic therapy, not steroid dose. Added the 2019 ASCO and SNO endorsement of the CNS guidelines and moved both items to it. Vogelbaum kept for the admission and surgical items.
3. Driving. Added a prompt to consider an MTO report.

Sources verified
- ASCO and SNO endorsement of CNS guidelines on anticonvulsant prophylaxis and steroids. https://ascopubs.org/doi/10.1200/JCO.18.02085
- Vogelbaum 2022 ASCO, SNO, ASTRO guideline. Real.

Residual uncertainties
- With a motor deficit and 4 mm shift, some would start 10 mg IV then 4 mg every 6 hours. Physician to set the preferred answer.

## hour-seven-in-the-hallway. Hour seven in the hallway

Verdict: Corrected

Changes
1. Acetaminophen. Before: "1 g every 6 hours with a maximum of 3 g per day". That schedule gives 4 g. After: 1 g every 8 hours, keeping to 3 g per day.
2. Fascia iliaca block. Added the arithmetic. 30 mL of 0.25 percent is 75 mg, under the 2 mg/kg maximum of 104 mg at 52 kg.
3. Sources. The boarding escalation item cited the Occupational Health and Safety Act, and the safety report item cited a Cochrane review of nerve blocks. Both now cite the CAEP position statement on overcrowding and access block (Affleck 2013).

Sources verified
- Guay and Kopp 2020 Cochrane nerve blocks for hip fracture, Richmond 2012 Project BETA, Apology Act 2009, OHSA workplace violence provisions, CCSMH delirium guideline, Affleck 2013 CAEP. All real.

Residual uncertainties
- None of substance.

## Batch summary

All ten cases needed correction. None were accurate as written. Most serious:
1. Malaria case said exchange transfusion is no longer recommended and named oral bridges that CATMAT does not. It also used the 5 percent threshold without the non immune qualifier.
2. Endocarditis case presented ceftriaxone as good MSSA therapy.
3. Impaired colleague case cited the wrong CPSO policy and blurred who must report to the College.
4. Death notification case said all Ontario hospitals must notify for donation and used the old statute name.
5. Hallway case had an acetaminophen schedule that gave 4 g while stating a 3 g cap.
6. Flank pain case shared its stone size, stone history, medications and baseline creatinine with batch10. Details now differ.

Physician attention is still needed on the artesunate supply route after the likely 2025 Health Canada authorization, the choice of oral bridge, local empiric antibiotics for the endocarditis case, Form 1 use in a non Schedule 1 hospital, and dexamethasone starting dose.
