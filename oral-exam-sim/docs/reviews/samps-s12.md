# Review of SAMP batch s12: Infectious diseases and Ischemic heart disease

Reviewer: adversarial review against current Canadian and international guidance. Files reviewed: `src/samps/s12/infectious-diseases.ts` (15 SAMPs) and `src/samps/s12/ischemic-heart-disease.ts` (15 SAMPs). All SAMPs keep `reviewed: false`. Ids are unchanged. One question was added (infectious-diseases-05 q5).

Checks after edits: `tsc` shows no s12 errors. `SAMP_BATCH=s12 vitest` passes 94 of 94.

Key feature coverage after edits. Infectious diseases: KF1 5, KF2 4, KF3 7, KF4 7, KF5 5, KF6 5, KF7 6, KF8 9, KF9 3, KF10 8. Ischemic heart disease: KF1 8, KF2 8, KF3 8, KF4 6, KF5 5, KF6 8, KF7 8, KF8 4. Every key feature is covered. Short answer share is 74 percent.

## Infectious diseases

### infectious-diseases-01 Urosepsis with obstruction. Accurate

30 mL/kg at 60 kg is 1.8 L. Norepinephrine first, MAP 65, peripheral start and source control by stent or nephrostomy all match Surviving Sepsis 2021. No changes.

### infectious-diseases-02 Bacterial meningitis. Corrected (citation only)

Doses checked: ceftriaxone 2 g, ampicillin 2 g, dexamethasone 10 mg, vancomycin 15 to 20 mg/kg (1.2 to 1.6 g at 80 kg) or a 25 to 30 mg/kg load. Chemoprophylaxis doses (ciprofloxacin 500 mg once, rifampin 600 mg every 12 hours for 2 days, ceftriaxone 250 mg IM once) are correct. The paramedic who suctioned without a mask is a close contact under PHAC 2005. Masked clinical care and office contact are not.

- Citation. Before: "Guidelines for the prevention and control of invasive meningococcal disease", no year. After: the verified title "Guidelines for the prevention and control of meningococcal disease", CCDR 2005, volume 31, supplement 1.

### infectious-diseases-03 Febrile neutropenia. Accurate

Antibiotics within 60 minutes of triage matches ASCO and IDSA 2018. Ceftriaxone as unacceptable is right because it does not cover Pseudomonas. No changes.

### infectious-diseases-04 Necrotizing soft tissue infection. Corrected

- q3 key. Before: ceftriaxone and metronidazole were separate items. So "ceftriaxone, metronidazole, clindamycin" scored 3 of 3 with no MRSA cover. After: three components: Gram negative and anaerobic cover (piperacillin tazobactam, a carbapenem, or ceftriaxone plus metronidazole), MRSA cover, and clindamycin. The prompt now asks for "components". Explanation updated.
- Tetanus toxoid plus TIG 250 units for an uncertain primary series matches the Canadian Immunization Guide.

### infectious-diseases-05 Peritonsillar abscess. Corrected

- Galioto NJ, Am Fam Physician 2017, volume 95, page 501 verified. URL added.
- New q5 (KF9). The roommate has cough, coryza and hoarseness with no fever or exudate. A McIsaac score of 0 means no strep testing and no antibiotic. It cites Choosing Wisely Canada, which was added to this SAMP's sources. This adds the third KF9 question.

### infectious-diseases-06 Severe malaria. Corrected (explanations)

Severity values checked against WHO and CATMAT criteria. GCS 10 (below 11), glucose 2.0 (below 2.2), creatinine 298 (above 265), lactate 6.1 (5 or more), bilirubin 64 (above 50 with high parasitemia) and parasitemia 12% (above 10%) all qualify. Hb 104 and platelets 41 do not. Thrombocytopenia as unacceptable is correct.

- q3 explanation now lists the thresholds.
- q4 explanation. Before: "0, 12 and 24 hours, then daily". After: CATMAT wording, 2.4 mg/kg at 0, 12, 24 and 48 hours, available 24 hours a day through the Canadian Malaria Network. The keyed option is the same regimen and was left as is.
- CATMAT citation title verified. URL added.

### infectious-diseases-07 Toxic shock. Corrected

- q2 source changed from the CDC case definition to Surviving Sepsis, since the question is about resuscitation.
- q3 (antistaphylococcal agent plus clindamycin) remapped from KF2 to KF8, since it tests antibiotic choice by likely organism. Source changed from Surviving Sepsis to IDSA SSTI 2014, which covers clindamycin for toxin suppression. IDSA SSTI added to the SAMP's sources.

### infectious-diseases-08 Needlestick. Corrected (citations and explanation)

TDF/FTC plus dolutegravir for 28 days is a preferred regimen in both 2025 guidelines. HBIG 0.06 mL/kg plus a vaccine dose for a vaccinee with anti HBs below 10 IU/L after an HBsAg positive source is correct.

- Citation. Before: Kuhar 2013 USPHS. After: Kofman AD et al, 2025 USPHS occupational PEP guideline (Infect Control Hosp Epidemiol 2025, volume 46, page 863), which replaces the 2013 guideline.
- Citation. Before: Tan 2017 CMAJ (nonoccupational PEP). After: Tan DHS, Hull MW, Onyegbule SO, et al. Canadian guideline on HIV pre- and postexposure prophylaxis: 2025 update. CMAJ 2025, volume 197, page E1374.
- q2 explanation. Before: "ideally within 2 hours". That exact window is not in either guideline. After: "as soon as possible, within hours and no later than 72 hours". It now names bictegravir, emtricitabine and TAF as the other preferred regimen.

### infectious-diseases-09 Bat exposure. Corrected (explanations)

Checked against the current Canadian Immunization Guide rabies chapter. RIG 20 IU/kg on day 0 (1800 IU at 90 kg), vaccine 1 mL IM on days 0, 3, 7 and 14, and for immunocompromised people a fifth dose on day 28 all match.

- q1 explanation. Before: said Canadian guidance "no longer recommends PEP for simply being in a room with a bat". This is true, but it skipped the CIG advice for people asleep. After: any bare skin contact with a live bat warrants PEP unless a bite can be ruled out. For the sleeping wife, look for signs of contact, such as waking upset or a mark on her skin.
- q2. Added "1800 iu" match phrases.
- q3 explanation. Serology is now timed 7 to 14 days after the day 28 dose. It adds the CIG line that immunosuppressive agents should not be given during PEP unless essential.

### infectious-diseases-10 Influenza like illness. Corrected (citation only)

- AMMI citation. Before: organisation and topic only. After: Aoki FY, Allen UD, Mubareka S, et al. Use of antiviral drugs for seasonal influenza: foundation document for practitioners. Update 2019. JAMMI 2019.

### infectious-diseases-11 Cavitary TB. Accurate

Canadian TB Standards 8th edition (2022) verified. No changes.

### infectious-diseases-12 Long term care resident. Accurate

IDSA LTC (2009) and IDSA asymptomatic bacteriuria (2019) verified. No changes.

### infectious-diseases-13 Endocarditis and epidural abscess. Accurate

Duke-ISCVID 2023 (Fowler VG et al, Clin Infect Dis 2023, volume 77, page 518) verified. The full title ends with "Updating the Modified Duke Criteria". The shorter form was kept. Baddour 2015 and Darouiche 2006 verified. No changes. See open questions about a new 2026 AHA statement.

### infectious-diseases-14 Lyme carditis. Corrected (citation and explanation)

PR 360 ms, symptomatic, so admission and IV ceftriaxone match IDSA 2020. Doxycycline 200 mg once within 72 hours of removal, for an Ixodes tick attached 36 hours or more in an endemic area, matches Canadian guidance. The husband qualifies.

- Citation. Before: "PHAC. Lyme disease. Information for health professionals". That page does not give the prophylaxis criteria. After: Hatchette TF, Davis I, Johnston BL. Lyme disease: clinical diagnosis and treatment. CCDR 2014. This source gives the 36 hour and 72 hour criteria.
- q4 explanation now also mentions an engorged tick.

### infectious-diseases-15 PID. Corrected

The current PHAC STI associated syndromes guide (modified June 2026) gives ceftriaxone 500 mg IM once, plus doxycycline 100 mg twice daily and metronidazole 500 mg twice daily, each for 14 days. Metronidazole is part of the main regimen. The US CDC 2021 regimen is the same. Leaving metronidazole out of the required answer was therefore not fair.

- q3. Before: "List the TWO antibiotics", ceftriaxone with no dose, doxycycline, cited to CDC. After: "List the THREE antibiotics of the recommended Canadian outpatient regimen", with required 3. The key includes ceftriaxone 500 mg IM, doxycycline and metronidazole. It is cited to PHAC. The explanation now gives the doses and drops the unsourced "last 60 days" partner window.
- q4. Added "immunocompromised" as an admission criterion, as PHAC lists it. Follow up changed from "within 72 hours" to reassessment in 2 to 3 days.
- PHAC citation retitled to the actual page title. URL added.

## Ischemic heart disease

### ischemic-heart-disease-01 Inferior and RV STEMI, rural. Corrected

Tenecteplase at 84 kg is 45 mg (80 to 89 kg band). The absolute contraindications match ACC/AHA 2013.

- q3 explanation. Before: "Many Canadian protocols give half dose" at 75 or older, with no source. After: STREAM-2 used half dose, and the 2023 ESC guideline and many Canadian regional protocols now advise it. It no longer implies a CCS recommendation.
- q4 explanation. Added the aortic dissection screen: inferior STEMI can come from a dissection of the right coronary artery, so ask about tearing pain and check pulses and blood pressure in both arms.
- q5 match. "Hold nitrates", "no nitrates" and "discontinue nitro" did not score before. They do now.

### ischemic-heart-disease-02 Atypical NSTEMI. Accurate

Invasive angiography within 24 hours for NSTEMI matches ESC 2023. No changes.

### ischemic-heart-disease-03 Pericarditis. Corrected

- q1. Before: the aVR item matched any line containing "avr", so "ST elevation in aVR" scored as PR elevation. After: requires "pr elevation" or "pr avr".

### ischemic-heart-disease-04 Wellens. Accurate

de Zwaan 1982 verified. No changes.

### ischemic-heart-disease-05 Low risk chest pain. Corrected (mapping)

HEART recomputed: history 1, ECG 0, age 0, risk factors 1 (smoking), troponin 0. Total 2. The key is correct.

- q2 remapped from KF8 to KF3, since calculating the score is risk stratification. KF8 is still tested by q3 and by ischemic-heart-disease-06 and 15.

### ischemic-heart-disease-06 Cocaine chest pain. Corrected

- q1. Before: beta blocker flagged dangerous, and labetalol a separate unacceptable item. After: one unacceptable item, not dangerous, covering metoprolol, propranolol, esmolol, atenolol and labetalol. This matches the s18 toxicology change and the 2023 AHA focused update, which calls beta blocker safety in cocaine toxicity controversial. The stem does show ongoing toxicity, but the evidence of harm is not strong enough to zero the whole question.
- q1 explanation rewritten to state the AHA position. Lavonas 2023 was added as a source and is cited by q1.

### ischemic-heart-disease-07 Inferior STEMI with complete heart block. Accurate

Isoproterenol as unacceptable, not dangerous, is fair. It raises oxygen demand in active ischemia. No changes.

### ischemic-heart-disease-08 Posterior STEMI. Corrected

- q1. Before: the T wave item matched any "t wave", so "T wave inversion" scored. After: requires "upright t", "positive t" or "tall t".
- The V7 to V9 threshold (0.5 mm, or 1 mm in men under 40) matches the fourth universal definition.

### ischemic-heart-disease-09 LBBB with Sgarbossa criteria. Accurate

Smith 2012 verified. No changes.

### ischemic-heart-disease-10 Reflux label. Accurate

No changes.

### ischemic-heart-disease-11 STEMI weeks after a stroke. Corrected (citation)

A stroke 5 weeks ago is an absolute contraindication to lysis at any dose, so primary PCI is right despite the delay. ASA 160 mg chewed, ticagrelor 180 mg and UFH 70 units/kg are correct. Prasugrel is contraindicated after stroke. The 2 mm threshold in V2 and V3 for a man aged 40 or older is correct.

- q2 source. Before: CCS 2018 antiplatelet update. After: the CCS/CAIC 2023 focused update (Bainey KR et al, Can J Cardiol 2024, volume 40, page 160), which now covers P2Y12 choice and pretreatment in ACS.

### ischemic-heart-disease-12 Anterior STEMI with shock. Corrected (citations)

- COMMIT citation. Before: an invented title, "Early intravenous beta-blockade...". After: the verified title "Early intravenous then oral metoprolol in 45,852 patients with acute myocardial infarction", Chen ZM et al, Lancet 2005.
- q3 (mortality predictors) was cited to the SHOCK trial, which does not address them. It now cites ESC 2023. SHOCK was removed as a source.

### ischemic-heart-disease-13 Failed lysis. Accurate

Tenecteplase 40 mg for 76 kg is correct. ST elevation in III fell from 5 mm to 4 mm, a 20% drop. That is less than 50%, so lysis has failed. The adjuncts are age adjusted: clopidogrel 300 mg under 75 (75 mg at 75 or older) and enoxaparin 30 mg IV then 1 mg/kg SC (no bolus and a reduced dose at 75 or older). Angiography within 2 to 24 hours after successful lysis matches CCS 2019. No changes.

### ischemic-heart-disease-14 aVR elevation, NSTE-ACS. Corrected

Immediate angiography (within 2 hours) for recurrent pain with hypotension is correct very high risk management. High risk would be within 24 hours.

- q4 explanation. Before: "some cardiologists defer the load". After: the 2023 ESC guideline advises against routine P2Y12 pretreatment in NSTE-ACS when early angiography is planned. The source changed from CCS 2018 to ESC 2023, and CCS 2018 was removed from this SAMP.

### ischemic-heart-disease-15 Exertional angina. Corrected

- q3. Before: the key matched any line containing "avoid", including "avoid ASA". After: requires "avoid exertion", "avoid heavy", "exertion" or "shovel".

## Sources verified

Verified on PubMed or the publisher's site. Author, year and title were checked.

- Evans 2021 SSC. Tunkel 2004. van de Beek 2016 ESCMID. Freifeld 2011. Taplitz 2018. Stevens 2014. Wong 2004 LRINEC. High 2009. Nicolle 2019. Baddour 2015. Darouiche 2006. Lantos 2021. Workowski 2021. All correct as written.
- Fowler 2023 Duke-ISCVID: https://pubmed.ncbi.nlm.nih.gov/37138445/
- Galioto 2017: https://www.aafp.org/afp/2017/0415/p501
- Tan 2025 Canadian PEP: https://www.cmaj.ca/content/197/41/E1374 (replaces Tan 2017)
- Kofman 2025 USPHS: https://pubmed.ncbi.nlm.nih.gov/41569270/ (replaces Kuhar 2013)
- Hatchette 2014 CCDR Lyme: https://pubmed.ncbi.nlm.nih.gov/29769842/
- Aoki 2019 AMMI influenza: https://pubmed.ncbi.nlm.nih.gov/36337743/
- CATMAT malaria: https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria.html (chapter 7 for severity and artesunate)
- CIG rabies: https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-18-rabies-vaccine.html
- PHAC PID: https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/sti-associated-syndromes/pelvic-inflammatory-disease.html
- PHAC meningococcal 2005: https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/05pdf/31s1_e.pdf
- Wong 2019 CCS STEMI. Mehta 2018 CCS antiplatelet. Bainey 2024 CCS antiplatelet (2023 update): https://pubmed.ncbi.nlm.nih.gov/38104631/
- Byrne 2023 ESC ACS. Gulati 2021. O'Gara 2013. Six 2008. Backus 2013. Thygesen 2018. Smith 2012. de Zwaan 1982. Adler 2015. McCord 2008. Panchal 2020. Thiele 2017. Lavonas 2023. Chen 2005 COMMIT (title corrected).
- Removed as never cited: Rao 2025 ACC/AHA ACS, and Hochman 1999 SHOCK (no longer cited after the q3 source fix).
- Left as plain organisation citations, since they cannot be verified to an exact title: EAU urolithiasis, Tintinalli chapter, WHO malaria guidelines, CDC TSS case definition, CIG tetanus and hepatitis B chapters, Choosing Wisely Canada, PHAC routine practices.

## Open questions for the physician

1. infectious-diseases-06: CATMAT uses a 5% parasitemia threshold for non immune adults and WHO uses 10%. The case (12%) meets both. Confirm you are happy teaching WHO values.
2. infectious-diseases-13: AHA published a new infective endocarditis scientific statement in September 2026 (DeSimone DC et al, Circulation). It was not reviewed here. Consider replacing Baddour 2015 once you have read it.
3. infectious-diseases-08: the 2025 Canadian PEP guideline may focus on nonoccupational exposure. Occupational advice now rests on the 2025 USPHS guideline. Confirm local occupational health practice.
4. ischemic-heart-disease-01: half dose tenecteplase at 75 or older is framed as ESC 2023 and regional protocols, not CCS. Confirm this fits your region.
5. ischemic-heart-disease-06: the beta blocker answer is now unacceptable, not dangerous, although the stem shows ongoing cocaine toxicity. This keeps it consistent with s18. Confirm you agree.
6. ischemic-heart-disease-14 q4: the CCS 2023 update covers pretreatment, but its full text could not be read. The answer relies on ESC 2023.
7. infectious-diseases-05 q5 is new. Please check its wording and originality.

## Summary

Both topics were broadly accurate. All requested doses, scores and thresholds were recomputed and are correct: tenecteplase 45 mg and 40 mg, HEART 2, RIG 1800 IU, the WHO malaria criteria, PR 300 ms or more for IV therapy and a 36 hour tick attachment. The most serious problems were:

- PID taught a two drug regimen without the ceftriaxone dose, when PHAC now gives a three drug regimen with ceftriaxone 500 mg.
- The necrotizing fasciitis key gave full marks to a regimen without MRSA cover.
- Two citations were superseded (2013 USPHS and the 2017 Canadian PEP guideline).
- The COMMIT title was invented.
- Several match phrases were too loose (aVR, T wave, "avoid").

Beta blockers in cocaine chest pain were downgraded to unacceptable, and one KF9 question was added.
