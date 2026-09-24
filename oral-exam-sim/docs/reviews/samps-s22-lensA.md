# Review of batch s22 (analgesia and sedation), Lens A: clinical truth

Reviewer lens: A, clinical truth. Scope: `src/samps/s22/analgesia-sedation.ts` (analgesia-sedation-16 to 47) and `src/samps/s22/review-extra.ts` (analgesia-sedation-48 and 49). I read every question, option and explanation against its stem. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| analgesia-sedation-48 (extra) | q1 | correct | The key was "ASA IV" (index 3), but the explanation and the ASA 2020 examples place asthma without exacerbation in class II. Key restored to index 1. | High |
| analgesia-sedation-49 (extra) | q2 | explanation | The last sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas". The case never gives this, and it has nothing to do with gabapentin. Sentence removed. | High |
| analgesia-sedation-42 | q3 | explanation | Said the mental foramen lies "below the lower premolars". This boy is 5 years old and has no premolars. At his age the foramen lies below the primary molars. Corrected. | Medium |
| analgesia-sedation-17 | q2 | explanation | Said the fascia iliaca block gave "fewer analgesia failures at 30 minutes than IV morphine, with no respiratory depression or vomiting". Black 2013 does not report those outcomes. Its one trial found "better and longer lasting pain relief with fewer adverse events than intravenous opioids". Reworded to match the source. | Medium |
| analgesia-sedation-34 | q1 | explanation | Stated that ibuprofen or other nonopioids "will not control this pain". WMS advises NSAIDs or opiate analgesics during rewarming "as dictated by individual patient response". Reworded: the guideline allows either, and deep injury to both hands usually needs a titrated parenteral opioid. The key is unchanged. | Medium |
| analgesia-sedation-30 | q3 | explanation | Rejected glycopyrrolate because it "acts too slowly". IV glycopyrrolate acts within minutes. The true reason is that it does not clear secretions already in the airway. Reworded. | Low |
| analgesia-sedation-26, analgesia-sedation-48 | q1 | explanation | Gave "poorly controlled asthma" as the ASA III example. The ASA 2020 pediatric example for class III is "asthma with exacerbation". Aligned. | Low |
| analgesia-sedation-37, analgesia-sedation-49 | q2 | explanation | "Acetaminophen needs no dose change in kidney failure" is too absolute, since some references lengthen the interval in severe kidney failure. Changed to "little or no dose change". The keyed dose of 650 mg every 6 hours still holds. | Low |
| (sources) | n/a | url | Added verified PubMed URLs for Green 2011 (21256625), Chang 2016 (26590747) and Motov 2015 (25817884). | High |

## Key changes

- analgesia-sedation-48 q1 (review-extra): before, index 3 "ASA IV". After, index 1 "ASA II". The old key contradicted its own explanation and the ASA examples. The explanation already supported the new key, so the question did not need a rebuild.

No key was changed in the main file.

## Duplicate content in review-extra.ts

- analgesia-sedation-48 matches analgesia-sedation-26 in stem, title, options and explanations. Only the key differed, and that key was wrong.
- analgesia-sedation-49 matches analgesia-sedation-37 in stem, title, options and explanations. Only the invented lactate sentence differed.

Even after the fixes, neither should enter the bank. Both would fail the near-duplicate stem rule (SAMP_SPEC section 1) against 26 and 37. Recommendation: reject both.

## Items the writer flagged

- SAMP 34 (frostbite). I checked this against the WMS guideline text (the 2019 version, which the 2024 abstract describes as the base of the update, plus 2024 search summaries). The guideline recommends ibuprofen at 12 mg/kg a day divided twice daily, up to 2 400 mg a day, to block prostaglandin and thromboxane production (grade 2C). It also recommends analgesia with NSAIDs or opiates during rewarming "as dictated by individual patient response" (grade 1C). Rewarming is in water at 37 to 39°C. q2 and q3 are accurate. I softened the q1 explanation (see table). The key holds.
- SAMP 22 q3 and 24 q2 (hydromorphone). Verified. Chang 2013 gave 0.5 mg IV hydromorphone first, with further 0.5 mg doses available. Relief was similar to usual care (83% against 82.5%), with lower initial and total opioid doses and no naloxone use.
- SAMP 19 q1 and 26 q2 (ketamine contraindications). Verified. Green 2011 lists known or suspected schizophrenia as an absolute contraindication, even when stable or controlled. It lists active pulmonary infection or disease, including a URI or asthma, as a relative one. It found adjunctive atropine unnecessary, with no link between anticholinergics and laryngospasm. The 26 q2 explanation's "not recommended" for routine anticholinergics is accurate.
- SAMP 18 q3 (controlled-release opioids). Verified. The HQO acute pain standard, Quality Statement 3, calls for the lowest effective dose of the least potent immediate-release opioid. It says 3 days or less is often enough and more than 7 days is rarely indicated. The distractor reason is true.
- ASA class examples. Verified against the ASA document (approved 2014, last amended 13 December 2020). Adult class II includes well-controlled DM and HTN and obesity with a BMI above 30 and below 40. Adult class III includes morbid obesity with a BMI of 40 or more. Pediatric class II includes asthma without exacerbation and mild or moderate OSA. Pediatric class III includes asthma with exacerbation and severe OSA. 26 q1 and 32 q1 are correct. The ASA statement has since been republished in Anesthesiology Open (2026). I could not open that version, so the 2020 citation is left as it is.
- Claims cited only to Tintinalli. Tintinalli is a real, specific source, so no citation needed replacing. I checked each of these claims on its merits and found none false: propofol in older adults (41), opioids in dialysis (37), compartment syndrome (36), discharge after sedation (19 q4, 41 q4) and airway rescue (32 q4, 33). Where a primary source now backs a claim, the URL is in the list below.
- 17 q2 (fascia iliaca block). The key holds among the options given, because IV morphine and intranasal fentanyl are absent on purpose. The evidence is one small unblinded trial. The explanation now states the source finding accurately.
- 27 q2 (etomidate plus fentanyl in severe aortic stenosis). The key holds. ACEP 2014 supports etomidate for adult ED sedation (Level B). No regional option is offered, and ketamine's tachycardia is a real concern with a fixed outflow obstruction.
- 45 q1 (prednisone 35 mg for 5 days). The key holds. ACR 2020 strongly recommends oral glucocorticoids as first-line treatment for a flare. The explanation does not say that ACR sets the dose.

## Sources verified

- PENTHROX Canadian product monograph, last revised 5 April 2024. The indication is conscious adults with trauma or procedural pain. It is not indicated in pregnancy or the peripartum period. Contraindications include malignant hyperthermia susceptibility, altered consciousness, significant renal impairment, hemodynamic instability and respiratory impairment. Avoid it with CNS depressants. 3 mL, then a second 3 mL, to a limit of 6 mL a day and 15 mL a week. Median onset is 5 minutes. No pediatric authorization. https://pdf.hres.ca/dpd_pm/00075149.PDF
- Green 2011, ketamine guideline. https://pubmed.ncbi.nlm.nih.gov/21256625/ and https://pemcincinnati.com/blog/ketamine-cnotraindications/ (secondary summary of the contraindication list)
- Chang 2013, hydromorphone in older adults. https://pubmed.ncbi.nlm.nih.gov/23846749/
- Chang 2016, titration by the simple query. https://pubmed.ncbi.nlm.nih.gov/26590747/
- Black 2013, Cochrane review of nerve blocks for femoral fractures in children. https://pubmed.ncbi.nlm.nih.gov/24343768/
- Andolfatto 2012, ketofol. No reduction in respiratory events (30% against 32%), with more consistent sedation depth. https://pubmed.ncbi.nlm.nih.gov/22401952/
- Cole 2016, prehospital agitation. Median time to sedation 5 minutes against 17. Hypersalivation 38%, laryngospasm 5%, intubation 39% with ketamine. https://pubmed.ncbi.nlm.nih.gov/27102743/
- Sener 2011, midazolam with ketamine. Recovery agitation 8% against 25%, NNT 6. Nausea or vomiting 28% to 34%. https://pubmed.ncbi.nlm.nih.gov/20970888/
- Miner 2007, etomidate against propofol. Myoclonus in 20.0% with etomidate. https://pubmed.ncbi.nlm.nih.gov/16997421/
- Lalonde 2005. 3 110 cases with no digital tissue loss and no phentolamine needed. https://pubmed.ncbi.nlm.nih.gov/16182068/
- Frey 2019, PRIME trial. IN ketamine 1.5 mg/kg was noninferior to IN fentanyl, with more minor transient adverse events. https://pubmed.ncbi.nlm.nih.gov/30592476/
- Motov 2015. Ketamine 0.3 mg/kg against morphine 0.1 mg/kg, with comparable analgesia. https://pubmed.ncbi.nlm.nih.gov/25817884/
- Marco 2006. No clinically significant association between pain scores and vital signs. https://pubmed.ncbi.nlm.nih.gov/16902046/
- Friedman 2015. No added benefit from cyclobenzaprine or oxycodone/acetaminophen when added to naproxen at 1 week. https://pubmed.ncbi.nlm.nih.gov/26501533/
- Merkel 1997, FLACC. Validated in children aged 2 months to 7 years. https://pubmed.ncbi.nlm.nih.gov/9220806/
- Health Quality Ontario, Opioid Prescribing for Acute Pain, 2018. Statement 3 covers immediate-release opioids and duration. Statement 6 says to continue opioid agonist therapy during acute pain and to communicate with the prescriber, which supports 47 q2 and q4. https://www.hqontario.ca/evidence-to-improve-care/quality-standards/view-all-quality-standards/opioid-prescribing-for-acute-pain
- ASA Physical Status Classification System, last amended 2020. https://dam.assets.ohio.gov/image/upload/med.ohio.gov/portals/0/resources/asa%20physical%20status%20classification%20system.pdf
- WMS frostbite guideline (2024 update abstract, and 2019 text for the analgesia and ibuprofen wording). https://pubmed.ncbi.nlm.nih.gov/38577729/ and https://www.wildmedcenter.com/uploads/5/9/8/2/5982510/wms_frostbite.pdf

I accepted the writer's verification of the remaining sources in docs/reviews/writer-s22.md.

## Recomputed numbers (all correct)

- 16: 12 mg twice daily plus 2 mg three times daily is 30 mg of oral hydromorphone a day. Ketamine 0.3 mg/kg at 70 kg is 21 mg.
- 17: acetaminophen 225 mg (15 mg/kg), ibuprofen 150 mg (10 mg/kg), morphine 1.5 mg (0.1 mg/kg). 4.5 mg is 0.3 mg/kg. 22 mg of ketamine is 1.47 mg/kg.
- 19: fentanyl 1 mcg/kg at 82 kg is 82 mcg.
- 24 and 45: 650 mg every 6 hours is 2.6 g a day.
- 26 and 48: ketamine 21, 42, 63, 105 and 168 mg at 42 kg are 0.5, 1, 1.5, 2.5 and 4 mg/kg.
- 28: 24 mg is 0.3 mg/kg at 80 kg. 50 mcg is 0.63 mcg/kg and 250 mcg is 3.1 mcg/kg.
- 29: 50 mcg/hour is 0.71 mcg/kg/hour at 70 kg.
- 30: 400 mg is 5 mg/kg at 80 kg.
- 31: 0.4 mg/kg at 24 kg is 9.6 mg.
- 39: 300 mcg is 4 mcg/kg at 75 kg.
- 41: 0.5 mg/kg at 70 kg is 35 mg.
- 43: midazolam 0.03 mg/kg at 60 kg is 1.8 mg. Ketamine 60, 150, 240 and 18 mg are 1, 2.5, 4 and 0.3 mg/kg.
- 44: 45 mg is 1.5 mg/kg at 30 kg, and 450 mg of acetaminophen is 15 mg/kg.

## Needs physician decision

- 17 q2. The key (fascia iliaca block) rests on one small, low-quality trial. In Canadian practice a 3-year-old with a FLACC of 9 would usually get IN fentanyl or IV morphine first, with the block after. The options avoid a second defensible answer, but the word "initial" in the prompt may read oddly to a clinician. Consider dropping "initial" from the prompt.
- 40 q1 cites Busse 2017, a guideline on opioids for chronic noncancer pain, for the use of an individualized ED care plan. Busse supports the opioid-avoidance part but not care plans as such. A physician may prefer a different source.
- 28 q1 applies Motov 2015 to a hypotensive trauma patient. That trial enrolled stable adults aged 18 to 55. The key is reasonable, but it is an extrapolation.

## Summary

- Fixes: 9 rows in total. 2 in the review-extra file (1 wrong key, 1 invented finding), 6 explanation corrections in the main file and extras (anatomy 1, source misstatement 1, overstated distractor reasons 3, ASA wording 1), and 1 source-URL addition.
- Key changes: 1, in review-extra (48 q1). None in the main file.
- Most serious: the wrong key in 48 q1, the invented lactate in 49 q2, and the premolar anatomy error for a 5-year-old in 42 q3.
- SAMP ids with defects: analgesia-sedation-17, 26, 30, 34, 37, 42, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s22` is clean. `SAMP_BATCH=s22 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (679 tests).
