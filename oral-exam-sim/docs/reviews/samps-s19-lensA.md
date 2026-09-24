# Review of batch s19 (abdominal pain), Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: `src/samps/s19/abdominal-pain.ts` (abdominal-pain-16 to 47) and `src/samps/s19/review-extra.ts` (abdominal-pain-48 and 49). Every question, option and explanation was read against its stem. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| abdominal-pain-48 (extra) | q1 | correct | Key was "CT abdomen with contrast" (index 0) while the explanation argues for beta-hydroxybutyrate. In euglycemic ketoacidosis the test that explains the pain is beta-hydroxybutyrate. Key restored to index 3. | High |
| abdominal-pain-49 (extra) | q2 | explanation | Closing sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas" that the case never gives and that has nothing to do with CT radiation. Sentence removed. | High |
| abdominal-pain-37, abdominal-pain-49 | q1 | explanation | Called an Alvarado score of 7 "intermediate". In Alvarado 1986, 5 to 6 is compatible, 7 to 8 probable and 9 to 10 very probable. Reworded to "probable range", with imaging still reasonable in an adult. | Medium |
| abdominal-pain-16 | q3 | explanation | Heart rate target given as "about 60/minute". The 2022 ACC/AHA guideline sets 60 to 80/minute with systolic BP below 120 mmHg. Corrected. | Medium |
| abdominal-pain-16 | q4 | explanation | "Rising lactate", but only one lactate (3.9 mmol/L) is given. Reworded to the single value. Malperfusion is what makes the dissection complicated. | High |
| abdominal-pain-29 | q2 | explanation | Said thoracic disc herniation "does not cause allodynia of the skin". Thoracic radiculopathy can cause band pain and dysesthesia, so that reason is not reliably true. Replaced with a true reason: disc herniation is rare and zoster is far more likely in this patient. | Medium |
| abdominal-pain-34 | q3 | explanation | Said single-dose azithromycin or cefixime "treats uncomplicated cervicitis only". Neither drug alone covers both gonorrhea and chlamydia. Rewritten to state which organism each covers and that neither treats PID. Added the verified PHAC ceftriaxone dose (500 mg IM, June 2026 page). | Medium |
| abdominal-pain-36 | q2 | explanation | Called levetiracetam "less effective than magnesium". There is no trial evidence for that claim. The accurate statement is that it is not proven equivalent and is kept for women who cannot receive magnesium. Diazepam and phenytoin keep the "less effective" statement. | Medium |
| abdominal-pain-41 | q3 | explanation | The reason given against the upper GI study ("the biliopancreatic limb, where many internal hernias occur") misstates the anatomy. Internal hernias occur at mesenteric defects, not "in" a limb. Rewritten: contrast follows the Roux limb only, cannot fill the excluded limb or show the mesentery, and misses many internal hernias. | Low |
| abdominal-pain-42 | q1 | explanation | Said increasing lactulose "treats a precipitant". Lactulose treats the encephalopathy, not its precipitant. Reworded. | Low |
| abdominal-pain-43 | q3 | explanation | This fulminant C. difficile case has ileus (fewer stools, hypoactive bowel sounds, megacolon), but the explanation left out rectal vancomycin (IDSA/SHEA). Added one sentence. | Low |

## Key changes

- abdominal-pain-48 q1 (review-extra): before index 0 "CT abdomen with contrast", after index 3 "Serum beta-hydroxybutyrate". The old key contradicted its own explanation and the clinical picture (anion gap 28, pH 7.14, glucose 11.2 mmol/L on empagliflozin). The explanation already supported the new key, so no rebuild was needed.

No key was changed in the main file.

## Duplicate content in review-extra.ts

- abdominal-pain-48 has the same stem, title, options and explanations as abdominal-pain-26. The only difference was the wrong key.
- abdominal-pain-49 has the same stem, options and explanations as abdominal-pain-37. The only difference was the invented lactate sentence.

Even after the fixes, neither SAMP should enter the bank. Both would fail the near-duplicate stem rule (SAMP_SPEC section 1) against 26 and 37. Recommendation: reject both.

## Sources verified

- PHAC STI-associated syndromes guide, pelvic inflammatory disease, modified June 2026. Outpatient regimen: ceftriaxone 500 mg IM once plus doxycycline 100 mg PO twice daily and metronidazole 500 mg PO twice daily for 14 days. Admission criteria include a possible surgical emergency such as tubo-ovarian abscess, pregnancy, severe illness, failure after 2 to 3 days, intolerance of oral therapy and immunocompromise. Adolescence and an IUD are not listed. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/sti-associated-syndromes/pelvic-inflammatory-disease.html
- Choosing Wisely Canada, Canadian Association of Paediatric Surgeons: do not do CT for suspected appendicitis in children until ultrasound has been considered. https://choosingwiselycanada.org/recommendation/paediatric-surgery/
- Alvarado 1986 score bands (5 to 6 compatible, 7 to 8 probable, 9 to 10 very probable). https://litfl.com/alvarado-score/ and https://link.springer.com/article/10.1186/1741-7015-9-139
- Samuel 2002 Pediatric Appendicitis Score items. The stem gives 10 of 10, and neutrophilia scores on either definition (above 7.5 x 10^9/L, or 79% of the WBC). https://pubmed.ncbi.nlm.nih.gov/12037754/
- Tenner 2024 ACG acute pancreatitis (Am J Gastroenterol. 2024. Volume 119, pages 419 to 437). Ultrasound for all patients, no routine early CT, CT only for doubt or no improvement at 48 to 72 hours, Ringer's lactate 1.5 mL/kg/hour with a 10 mL/kg bolus only for hypovolemia, same-admission cholecystectomy for mild gallstone pancreatitis. https://pubmed.ncbi.nlm.nih.gov/38857482/ and https://www.the-hospitalist.org/hospitalist/article/41218/critical-care/applying-the-2024-acg-guidelines-on-acute-pancreatitis-to-hospital-medicine/
- Isselbacher 2022 ACC/AHA aortic disease guideline. IV beta blocker first, systolic BP below 120 mmHg, heart rate 60 to 80/minute, and intervention for type B dissection with malperfusion. https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2022/11/01/12/21/2022-guideline-on-aortic-disease-2-gl-ad
- Po L and colleagues. SOGC Guideline No. 414. J Obstet Gynaecol Can. 2021. https://pubmed.ncbi.nlm.nih.gov/33453378/ (the url is not added to the source, the citation text is correct)
- Goguen J, Gilbert J. Diabetes Canada 2018, hyperglycemic emergencies in adults. Covers euglycemic DKA with SGLT2 inhibitors. https://guidelines.diabetes.ca/GuideLines/media/Docs/cpg/Ch15-Hyperglycemic-Emergencies-in-Adults.pdf
- Biggins 2021 AASLD ascites and SBP guidance. Albumin 1.5 g/kg on day 1 when creatinine is above 1 mg/dL (88 umol/L), BUN is above 30 mg/dL or bilirubin is above 4 mg/dL. Third-generation cephalosporin. The 120 g for 80 kg in 42 q2 is correct. https://onlinelibrary.wiley.com/doi/full/10.1002/hep.31884
- ATLS Student Course Manual, 10th edition, American College of Surgeons, 2018. https://store.facs.org/atls-student-course-manual-10th-edition
- Rosen's Emergency Medicine, 10th edition, Walls and colleagues, Elsevier, 2023. https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8
- IDSA/SHEA 2021 focused update on C. difficile. Fulminant disease recommendations are carried from 2017. https://academic.oup.com/cid/article/73/5/e1029/6298219
- Levetiracetam as a magnesium alternative: an ongoing noninferiority trial (NCT07220902) and a JOGC 2025 article on its use when magnesium is contraindicated. https://www.jogc.com/article/S1701-2163(25)00027-1/fulltext

I accepted the writer's verification of the other sources listed in docs/reviews/writer-s19.md and did not repeat it.

## Recomputed numbers (all correct)

- 20: lipase 2 400/60 is 40 times the upper limit. 3 mL/kg/hour at 70 kg is 210 mL/hour. 250 mL/hour is 3.6 mL/kg/hour.
- 26 and 48: anion gap 136 minus 100 minus 8 is 28.
- 32: PAS is 10 of 10.
- 37 and 49: Alvarado is 7 (temperature 37.2°C is below 37.3°C).
- 33: three PECARN predictors for the girl, none for the brother.
- 42: creatinine 138 umol/L is above 88, bilirubin 64 umol/L is below 68, and albumin is 1.5 g/kg x 80 kg = 120 g.
- 36: magnesium sulfate 4 g IV load then 1 g/hour, per SOGC 426.
- 29: valacyclovir 1 g three times daily, acyclovir 800 mg five times daily.
- 27: hydrocortisone 100 mg IV then 200 mg over 24 hours.

## Needs physician decision

- abdominal-pain-48 and 49 duplicate 26 and 37. Confirm that both are rejected.
- abdominal-pain-46 q3: ASA 160 mg chewed is keyed. It is a common Canadian loading dose. A physician should confirm that 160 mg is the local standard over 325 mg.
- abdominal-pain-43: the only source is Rosen. The IDSA/SHEA 2017 and 2021 guideline, or the AMMI Canada position, would be a stronger citation for the fulminant regimen.
- abdominal-pain-16 q1 stem: the arm pressure difference is exactly 20 mmHg. Most dissection criteria use more than 20 mmHg. The pulse deficit and leg ischemia carry the diagnosis anyway, but the stem value could be raised to 24 mmHg.

## Summary

- 11 table rows (12 question fixes, since the Alvarado fix covers 37 and 49): 1 wrong key (48 q1), 2 stem-untraceable facts (49 q2 invented lactate, 16 q4 rising lactate), 7 false or overstated reasons (16 q3, 29 q2, 34 q3, 36 q2, 37 q1 and 49 q1, 41 q3, 42 q1), and 1 omission (43 q3).
- Most serious: the wrong key in abdominal-pain-48 q1, the invented lactate in abdominal-pain-49 q2, and the fact that both extra SAMPs duplicate existing SAMPs.
- SAMP ids with a defect: abdominal-pain-16, 29, 34, 36, 37, 41, 42, 43, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s19` shows no errors. `SAMP_BATCH=s19 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 655 passed. review-extra.ts is not loaded by the suite.
