# Q500 QA report. Batch 15 oral cases

Independent clinical accuracy review of the four batch 15 oral cases. Every finding, node, choice, feedback line, model answer and rubric item was read against the stem and current guidance. Doses, thresholds and scores were recomputed. Fixes were made in place in `src/cases/batch15/`. All four cases stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal names were found.

## Checks

- `npx tsc --noEmit -p . | grep cases/batch15`: no errors.
- `CASE_BATCH=batch15 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.

## Verdicts

| Case | Verdict | Corrections |
|---|---|---|
| headache-building-over-five-days (was back-with-the-same-headache) | Pass after rewrite | 30 |
| chest-tightness-after-night-shift | Pass after fixes | 21 |
| weak-and-pale-after-a-stent | Pass after fixes | 22 |
| brought-down-from-the-eighth-floor | Pass after fixes | 21 |

## 1. Headache (cerebral venous thrombosis)

Near duplicate found. The case had the same title ("Back with the same headache"), the same setting, the same "seen two days ago and sent home" twist, the same card weight (74 kg (163 lb)) and pulse, and the same closing disclosure and apology question as `src/cases/batch13/postpartum-headache-return-visit.ts`. The heparin despite hemorrhage and antiseizure points also appear in SAMP s11 headache (postpartum CVT), which is unavoidable for any CVT item, so the scenario had to carry the difference.

Changes:
- Id, file and export renamed to `headache-building-over-five-days` (`headacheBuildingOverFiveDays`). `index.ts` updated. Title now "A headache that keeps building". The writer report still uses the old id.
- Stem and summary rewritten as a first presentation. No earlier ED visit.
- Finding "Record of the visit two days ago" replaced by "Treatment so far" (daily ibuprofen with fading relief, a pharmacist suggested migraine). Medication finding adds occasional acetaminophen.
- Weight changed to 66 kg (146 lb) and pulse to 96/minute, ECG rate to 94/minute. Recomputed: enoxaparin 1 mg/kg = 66 mg every 12 hours (label, model answer, consequence node). Levetiracetam 60 mg/kg = 3960 mg, under the 4500 mg maximum. Lorazepam 0.1 mg/kg = 6.6 mg, capped at 4 mg (unchanged).
- q-history: model answer, strong and partial labels, partial feedback and the unsafe "migraine cocktail" choice no longer refer to a prior diagnosis. Feedback now turns on the change from her usual pattern.
- q-treat strong feedback now states the debate the writer flagged: ESO prefers LMWH (weak recommendation), unfractionated heparin is accepted and some centres choose it with a bleed or a likely procedure. Model answer says the same.
- q-talk rewritten as a counselling question (cause, future estrogen, contraception, pregnancy). New partial choice (deflects to the next team) and new unsafe choice (restart the same pill later), with new consequence nodes and end text. ESO 2017 supports avoiding estrogen after CVT and considering prophylactic LMWH in later pregnancy.
- Rubric: bs-h5 now analgesic use and pregnancy (SNNOOP10). bs-pr1 now pattern change and not closing on response to treatment (SNNOOP10). bs-pr4 now plain language explanation of cause (AHA 2024). bs-pr5 now future pregnancy counselling (ESO 2017). bs-pr2 teaching now matches ESO wording on decompressive surgery. bs-m4 teaching now "should be avoided" and cites ESO, which states it.
- Citation support fixed. The ACEP 2019 policy covers only neuroimaging risk stratification, nonopioid analgesia, CT within 6 hours and CTA versus LP for SAH. It had been cited for chart review, exam, LP avoidance, anchoring, disclosure and departmental review, which it does not address. bs-p2 moved to SNNOOP10. bs-m2 (no LP before imaging with a focal deficit) moved to a new source, Hasbun 2001. bs-m6 reworded to nonopioid analgesia, which ACEP 2019 does support. ACEP now cited only by bs-m6.

## 2. Suicide risk

Writer flag on risk level and disposition. CANMAT 2023 reserves inpatient care mainly for intent to act or psychosis, advises against relying on fixed historical factors such as a family history of suicide, and centres management on modifiable factors, means removal, safety planning and follow up. The outpatient key is therefore guideline supported. However, with a father who died by suicide, a considered method, alcohol and access to drugs at home and at work, many clinicians would call her moderate rather than low risk. The safer standard is a same day mental health assessment before discharge.

Changes:
- Formulation model answer no longer calls her low risk. It names the debate and makes discharge conditional on means removal, same day mental health assessment and fast follow up.
- Strong disposition choice now includes crisis nurse assessment and review with the on call psychiatrist before discharge. Feedback explains why some would grade her moderate and why same day review is the safer standard.
- Form 1 feedback and ns-m1 teaching now state both parts of the Ontario Mental Health Act s. 15 test (threat, attempt or inability to care for self, plus likely serious bodily harm).
- Consequence node s-admit reworded ("reviews her by phone and in person" was contradictory).
- Citation support fixed. The MHCC and CPSI toolkit is a catalogue of scales. It supports risk and protective factors, means and "tools inform judgment" but not the chest pain workup, depression cues, alcohol and shift work, confidentiality or documentation. CANMAT 2023 full text (read through Europe PMC) supports routine suicide assessment in the ED, risk formulation, modifiable factors including alcohol and sleep, night shift work as a depression risk factor, CBC and TSH, side effect review within 2 weeks, closer monitoring in the first 4 weeks, safety planning and 9-8-8.
- Reassigned: ns-h2, ns-h4, ns-p2, ns-m3, ns-m5 to CANMAT. ns-h5 to MHCC. ns-h1 and ns-p1 to the 2021 AHA/ACC chest pain guideline (new). ns-pr3 (employer confidentiality) to Ontario PHIPA 2004 (new). ns-m2, ns-pr1, ns-pr2 to Stanley 2018.
- Stanley and Brown 2012 replaced by Stanley 2018 JAMA Psychiatry (ED safety planning with follow up calls, about half the rate of suicidal behaviour at 6 months), which supports the ED and follow up points. The PHAC 9-8-8 news release was removed because CANMAT now carries the 9-8-8 point and the case was at the 6 source limit.
- ns-h4 teaching corrected. It had said a family history of suicide raises risk without noting CANMAT's point that fixed historical factors predict poorly.

## 3. GI bleed

Errors found and fixed:
- Glasgow Blatchford score was 16. Recomputed from the case: urea 21.4 mmol/L = 4, hemoglobin 71 g/L in a man = 6, systolic 94 mmHg = 2, pulse 118 = 1, melena = 1, no hepatic disease, no heart failure (EF 50%). He nearly fainted, which does not score as syncope. Total 14. Model answer and wp-pr1 corrected. wp-h2 teaching now says a near faint does not add the 2 syncope points.
- Transfusion threshold misstated. The case said 70 g/L is the threshold "used in other GI bleeds". Barkun 2019 suggests 80 g/L without cardiovascular disease and a higher threshold with it, with no number. Model answer, strong label and feedback, partial feedback, wp-m1 text and teaching, and the post endoscopy model answer now say "well above 80 g/L while ischemic", state that the exact target is debated and that many aim near 100 g/L (consistent with MINT 2023 and with SAMP gi-bleed-36).
- Ticagrelor (writer flag). ACG and CAG 2022 (full text read on PMC) suggest against holding cardiac ASA and against platelet transfusion, and make no recommendation on holding or continuing a P2Y12 inhibitor in acute bleeding. Strong feedback and model answer now say this. Partial feedback now says stopping both is kept for truly life threatening bleeding, briefly and with cardiology.
- "Near normal creatinine" was wrong (112 against a baseline of 88). Now "a urea far out of proportion to the creatinine".

Near duplicate found. SAMP s39 gi-bleed-36 ("Black stools after a coronary stent") already tests keep ASA, involve cardiology and no platelets after a DES on ticagrelor. The antiplatelet question was reframed as a conflict between the gastroenterologist (stop both) and the cardiologist (continue both) that the candidate must resolve on one call, with the partial choice now siding with gastroenterology. The stem was also too close to batch09 melena-wallet-card ("black stools for two days and nearly fainted"). It now opens with being found grey and sweaty and chest heaviness on the stairs.

Citation support fixed: wp-p3 (type 2 MI) moved from Barkun, which does not discuss it, to the Fourth Universal Definition of MI 2018 (new). wp-p4 moved to Blatchford with reworded teaching (urea rises from digested upper GI blood). wp-pr5 moved from Abraham, which does not address PPI co-prescription, to Barkun, which advises continuing PPI in patients who need antiplatelets after an ulcer bleed. Abraham URL added (PMC full text opened).

Other numbers checked and correct: pantoprazole 80 mg IV, high dose PPI for 3 days then twice daily to day 14, endoscopy within 24 hours, HALT-IT (no mortality benefit, more venous thromboembolism), Villanueva exclusions.

## 4. Environmental (classic heat stroke)

Near duplicate found. SAMP s44 multiple-patients ("Third day of a heat wave") has an 86 year old woman found confused by a building superintendent during a check of units without air conditioning, 41.6°C rectal, pulse 126, resp 28, BP 92/54 mmHg, metoprolol, then several heat patients arriving. The batch 15 stem (82 year old woman, day 3, superintendent, 41.3°C, 128, 30, 92/50) was nearly the same. Changed:
- Stem, summary and scene: found by firefighters who forced the door after her daughter could not reach her, on a July evening. History question and bd-h1 now name paramedics and firefighters.
- Card: 41.8°C rectal, pulse 118, resp 26, BP 86/48 mmHg, O2 sat 92%. Triage, s-open, ECG and the CT consequence temperature updated to match. Timeline moved 70 minutes later to follow the 17:30 entry.
- The surge question keeps its preparation and public health angle, which s44 does not test (s44 is triage priority). A physician may still judge the overlap too close. See below.

Clinical fixes:
- Cooling (writer flag). WMS 2019 (read in full): ice water about twice as fast as evaporative cooling (0.2 vs 0.1°C per minute), cold water immersion "can be considered" in classic heat stroke (1C), evaporative cooling may suit older patients, wet ice packs over the whole body cool by conduction. Strong feedback and model answer now say the evidence is weaker in classic heat stroke and that whole body ice packs with evaporative cooling are an accepted alternative. Partial (tepid sponge) feedback now fair to evaporative cooling.
- Stop at 39°C (writer flag). WMS 2019 recommends cooling to no lower than 39°C (1B). The case is correct.
- Ceftriaxone (writer flag). Replaced with "an empiric antibiotic" in the strong label. She is hypotensive with lactate 4.6 mmol/L, so Surviving Sepsis 2021 (immediate antimicrobials, ideally within 1 hour when septic shock is possible) is now cited for bd-m2 (new source). Model answer adds that persistent confusion after cooling should prompt a lumbar puncture and meningitic dosing that covers Listeria at her age. Ceftriaxone alone would not.
- BC heat dome wording: "most deaths were older people alone at home without cooling" overstated the coroners' data. Now 98% indoors, two thirds aged 70 or older, over half living alone, most in homes without adequate cooling.
- bd-h2 teaching aligned with Health Canada wording on antipsychotics. bd-r1 teaching gives the cooling rates. bd-h4 moved from Health Canada to Epstein.
- WMS 2019 vs 2024 (writer flag). The 2024 update (Eifling KP and colleagues, Wilderness Environ Med 2024) exists. Its full text was not reachable (403 and paywall). A secondary summary (AFP 2025) confirms ice water immersion is preferred. The 2019 citation is kept because its text was read. A physician should confirm the 2024 stop temperature, which one secondary summary gives as 38.3 to 38.8°C.

## Sources checked

Headache
- Ferro JM and colleagues. ESO guideline on CVT. Eur Stroke J 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC6454824/ (opened: therapeutic heparin with baseline hemorrhage, LMWH over UFH weak, no DOAC, AEDs for seizure with supratentorial lesion, avoid estrogen, LMWH prophylaxis in later pregnancy, decompressive surgery for impending herniation).
- Saposnik G and colleagues. AHA scientific statement on CVT. Stroke 2024. Confirmed by search (Stroke 2024, volume 55, e77 to e90). No URL.
- Do TP and colleagues. SNNOOP10. Neurology 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6340385/ (writer opened, list content known).
- ACEP Clinical Policies Subcommittee on Acute Headache. Ann Emerg Med 2019. Abstract read through Europe PMC for PMID 31543134 (four questions only). URL https://pubmed.ncbi.nlm.nih.gov/31543134/
- Hasbun R and colleagues. CT of the head before LP in suspected meningitis. N Engl J Med 2001. Abstract read through Europe PMC for PMID 11742046 (arm drift predicts abnormal CT). URL https://pubmed.ncbi.nlm.nih.gov/11742046/
- Kapur J and colleagues. ESETT. N Engl J Med 2019. Unchanged.

Suicide risk
- MHCC and CPSI. Suicide Risk Assessment Toolkit 2021. https://www.mentalhealthcommission.ca/wp-content/uploads/drupal/2021-01/mhcc_cpsi_suicide_risk_assessment_toolkit_eng.pdf (PDF text extracted and read).
- Lam RW and colleagues. CANMAT 2023 MDD update. Can J Psychiatry 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/ (full text read through the Europe PMC API).
- Stanley B and colleagues. Safety planning intervention with follow up vs usual care in the ED. JAMA Psychiatry 2018. Confirmed by search (75(9):894 to 900). No URL.
- Gulati M and colleagues. 2021 AHA/ACC chest pain guideline. Circulation 2021. Confirmed by search (ECG within 10 minutes, high sensitivity troponin preferred). No URL.
- Ontario Mental Health Act s. 15. Unchanged, no URL.
- Ontario Personal Health Information Protection Act, 2004. Confirmed by search (consent required for disclosure to a non custodian employer, IPC guidance). No URL.

GI bleed
- Barkun AN and colleagues. International Consensus Group. Ann Intern Med 2019. https://doi.org/10.7326/M19-1795 (abstract content confirmed by search: 80 g/L without cardiovascular disease, higher with it, GBS of 1 or less, endoscopy within 24 hours).
- Abraham NS and colleagues. ACG and CAG 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8966740/ (opened: statements 8, 9, 10, no recommendation on P2Y12 in acute bleeding).
- Thygesen K and colleagues. Fourth universal definition of MI. Circulation 2018. Confirmed by search. No URL.
- Villanueva C 2013, Blatchford O 2000, HALT-IT 2020. Unchanged.
- MINT (Carson JL, N Engl J Med 2023) checked by search for the feedback statement only. Not cited.

Environmental
- Lipman GS and colleagues. WMS heat illness guideline 2019 update. Full text extracted from the PDF copy and read. No URL (not an official host).
- Epstein Y, Yanovich R. Heatstroke. N Engl J Med 2019 (380:2449 to 2459). Confirmed by search only.
- Health Canada. Extreme heat events guidelines for health care workers 2011. URL in the case, opened (antipsychotics, anticholinergics, diuretics, rapid cooling, antipyretics ineffective, avoid fluid overload, preparedness).
- BC Coroners Service release of 7 June 2022. https://news.gov.bc.ca/releases/2022PSSG0042-000903 (opened: 619 deaths, 98% indoors, 67% aged 70 or older, 56% living alone, most without adequate cooling).
- Evans L and colleagues. Surviving Sepsis Campaign 2021. Crit Care Med 2021. Confirmed by search (possible septic shock: immediately, ideally within 1 hour). No URL.

## Needs a physician's eye

- Suicide risk: whether she is low or moderate risk, and whether the same day psychiatrist review in the strong choice should be mandatory. The key is now the safer option and states the debate.
- GI bleed: the transfusion target during active type 2 MI in a bleeding patient ("well above 80 g/L", many aim near 100 g/L) is not settled by any GI guideline.
- GI bleed: holding versus continuing ticagrelor in the first 6 weeks after a DES. No ACG and CAG recommendation.
- Heat: the 2024 WMS stop temperature and its grading of immersion in classic heat stroke, which could not be read. Also whether the building surge twist is still too close to SAMP s44 for the bank wide near duplicate check.
- Headache: CVT with heparin despite a venous hemorrhage remains a shared teaching point with SAMP s11. The scenario now differs (first visit, non pregnant, contraception and pregnancy counselling).
