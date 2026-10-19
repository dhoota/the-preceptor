# Q500 writer report, batch s62 (abdominal pain)

Writer: Preceptor. File: `src/samps/s62/abdominal-pain.ts`. All items `reviewed: false`, `version: 1`.

## Items

5 SAMPs, ids abdominal-pain-48 to abdominal-pain-52. 19 questions: 18 single, 1 menu.

| Id | Scenario | Questions (key feature) |
|---|---|---|
| abdominal-pain-48 | 22-year-old treated for cystitis who has pelvic inflammatory disease with a tubo-ovarian abscess | 3 (8, 8 menu, 4) |
| abdominal-pain-49 | 3-year-old diagnosed with UTI from a bag specimen who has appendicitis | 4 (8, 7, 6, 4) |
| abdominal-pain-50 | 61-year-old woman, dipstick positive, type B dissection with mesenteric malperfusion | 5 (8, 1, 5, 2, 4) |
| abdominal-pain-51 | 69-year-old on prednisone, perforated diverticulitis with a soft abdomen | 4 (2, 6, 2, 4) |
| abdominal-pain-52 | 31-year-old treated for pyelonephritis who has pulmonary embolism with right upper quadrant pain | 3 (3, 3, 5) |

Single key positions (first to fifth): 3, 4, 4, 4, 3. The key is the longest option in 5 of 18 single questions.

## Key feature coverage

KF1 1, KF2 3, KF3 2, KF4 4, KF5 2, KF6 2, KF7 1, KF8 4. Every key feature is tested. KF8 is the most tested, with KF2 next among the weighted features. Four of the five cases (all women) open with a urinary label that turns out to be wrong.

## Uniqueness

Checked against all 47 existing abdominal pain SAMPs and the abdominal items in other topics. Not reused: obturator hernia (msk-29), acute porphyria (loc), adrenal crisis. New angles: pelvic examination after a failed cystitis treatment, bag urine culture in a toddler, an inconclusive ultrasound in a child, a pulse deficit against a urinary diagnosis, malperfusion as the cause of pain out of proportion, peritonitis masked by steroids, and pulmonary embolism as upper abdominal pain.

## Sources and verification

- PHAC. STI-associated syndromes guide, pelvic inflammatory disease. Page opened (criteria, investigations, hospitalization indications including abscess, modified June 2026). https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/sti-associated-syndromes/pelvic-inflammatory-disease.html
- Robinson JL et al. CPS. Urinary tract infections in infants and children. Paediatr Child Health. 2014. Abstract read (PMID 25332662): bag urine for urinalysis only, not culture. No URL given.
- Canadian Association of Radiologists. Choosing Wisely Canada radiology recommendations, updated September 2026. Page opened (ultrasound before CT for pediatric appendicitis, CT if inconclusive, 94%). https://choosingwiselycanada.org/recommendation/radiology/
- Ohle R et al. Diagnosing acute aortic syndrome: a Canadian clinical practice guideline. CMAJ. 2020. Record confirmed (PMID 32690558, DOI 10.1503/cmaj.200021). Content confirmed from the abstract and summaries: pulse deficit is a high-risk finding, high probability goes to expedited CT of the aorta. The full text returned 403, so no URL is given.
- Mazzolai L et al. 2024 ESC Guidelines for peripheral arterial and aortic diseases. Eur Heart J. 2024. Article page opened but truncated before the type B dissection tables. https://doi.org/10.1093/eurheartj/ehae179
- Brandl A et al. Diverticulitis in immunosuppressed patients. Can J Surg. 2016. Abstract read (PMID 27240131): masking, mortality 20% compared with 4.7%, more emergency surgery. No URL given.
- Sartelli M et al. 2020 update of the WSES diverticulitis guidelines. World J Emerg Surg. 2020. Full text read (PMC7206757): contrast CT first choice, no diagnosis on examination alone, immunocompromised patients at high risk of failing non-operative treatment. https://doi.org/10.1186/s13017-020-00313-4
- Thrombosis Canada. Pulmonary embolism diagnosis. Version 30 April 2025. PDF read (Wells cut-off 4.5, imaging when likely). https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf

## For the reviewers

- abdominal-pain-50 q5: the ESC 2024 recommendation that complicated type B dissection with malperfusion goes to endovascular repair could not be read in the full text because the page was truncated. It matches ESC 2014, ESVS and STS/AATS guidance. Please confirm the wording.
- abdominal-pain-50 uses a weak femoral pulse rather than an arm blood pressure difference, because the Canadian guideline does not treat a blood pressure difference on its own as high risk.
- abdominal-pain-52 q3: the Thrombosis Canada guide also says a V/Q scan should be considered in young patients with a normal chest radiograph, so the key reads "Imaging for pulmonary embolism now" and does not name a modality.
- KF2 has 3 questions and KF4 has 4. If more weight on KF2 is wanted, abdominal-pain-49 q4 or abdominal-pain-51 q4 could be reframed.
