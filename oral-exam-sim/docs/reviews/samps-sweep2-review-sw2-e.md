# Sweep 2 review, writer sw2-e

Independent review of the three SAMPs rebuilt in docs/reviews/samps-sweep2-sw2-e.md. Both lenses, a search of the whole bank by meaning, and the two added checks (hedged-key cue, and mock mode showing every question at once). File touched: src/samps/s42/ischemic-heart-disease.ts. ischemic-heart-disease-23 and 46 were not touched. Nothing was committed. All three SAMPs stay reviewed: false.

Every keyFeature was compared with git show HEAD. Each SAMP keeps the same set of key features as before the rebuild. 24 had 7, 7, 5, 3 and now has 5, 7, 7, 3. 41 had 8, 8, 4 and now has 4, 8, 8. 42 had 5, 8, 8 and still has 5, 8, 8.

## Verdicts

| SAMP | Verdict | Summary |
|---|---|---|
| ischemic-heart-disease-24 | fixed | Forearm ache as an NSTEMI in a 79-year-old man. Two explanation sentences corrected (q2, q3). |
| ischemic-heart-disease-41 | fixed | Observe-zone troponins after a zero calcium screening CT. q1 had a hedged-key cue and a misquoted CONFIRM result. |
| ischemic-heart-disease-42 | fixed | Exertional upper back pain. q2 is rewritten to a new decision. q2 and q3 now cite the CCS 2014 guideline. |

No SAMP needed a re-rebuild.

## One row per question

| SAMP | Q | KF (set same as HEAD) | Verdict | Finding |
|---|---|---|---|---|
| ischemic-heart-disease-24 | q1 | IHD5 | pass, flagged | Myocardial ischemia is the right key. ESC 2023 lists pain in the left or right arm as a chest pain-equivalent symptom. Each distractor reason is true. In mock mode the q2 update (rising troponin, angiography booked) implies this key. See For the physician. |
| ischemic-heart-disease-24 | q2 | IHD7 | fixed (wording) | Fondaparinux 2.5 mg SC daily is right. ESC 2023 gives it Class I, level B, in preference to enoxaparin when angiography within 24 hours is not expected. The explanation said ESC advises avoiding it "only" when CrCl is below 20 mL/minute. Thrombosis Canada gives a different cut-off (below 30). The word "only" is removed. CrCl recomputed: (140 minus 79) x 72 x 1.23 / 88 = 61.4 mL/minute. That is above both cut-offs. Confidence medium. |
| ischemic-heart-disease-24 | q3 | IHD7 | fixed | The explanation said he started diclofenac "for pain that was not arthritis". The stem says he started it for knee osteoarthritis. It was the forearm ache that he blamed on arthritis. The sentence now reads "for knee osteoarthritis". Olsen 2011 figures were checked against the abstract: HR 1.45 at the start of treatment, diclofenac HR 3.26 for days 1 to 7. Confidence high. |
| ischemic-heart-disease-24 | q4 | IHD3 | pass | The ESC 2023 very high-risk list was checked in the full text. It includes life-threatening arrhythmia or cardiac arrest after presentation. Each distractor reason is true. |
| ischemic-heart-disease-41 | q1 | IHD4 | fixed | Hedged-key cue. The key "It does not rule out obstructive disease" was the only hedged option. It was also the direct negation of the distractor "It rules out obstructive disease". The key is now a plain fact: "Noncalcified plaque can still cause stenosis". "It points to a noncardiac cause of pain" became a hedged wrong option, "It suggests the pain may be esophageal". The key moved from position 1 to 5. The explanation also said the zero-score patients with a stenosis had "more deaths". CONFIRM found no difference in mortality. Only the combined endpoint (death, MI or late revascularization) differed, 3.9% against 0.8%. The wording is corrected. Confidence high. |
| ischemic-heart-disease-41 | q2 | IHD8 | pass | ESC 2023 was checked in the full text. Observe-zone mortality is comparable to rule-in. It recommends a third troponin at 3 hours. Low to intermediate likelihood patients go to non-invasive imaging after transfer to the ward. Her HEART score is 5 (history 2, ECG 0, age 2, two risk factors 1, troponin 0), which also supports admission. |
| ischemic-heart-disease-41 | q3 | IHD8 | pass | CT coronary angiography stays keyed here. ESC 2023 names it for observe-zone patients. ESC also allows stress CMR or other stress imaging, but no stress imaging option is offered, so the key is the single best. See the CCTA check below. |
| ischemic-heart-disease-42 | q1 | IHD5 | pass, flagged | ESC 2024 lists upper back pain among angina equivalents, and effort angina settles within 1 to 5 minutes. Each distractor reason is true. In mock mode the q2 options and the q3 echo imply this key. |
| ischemic-heart-disease-42 | q2 | IHD8 | fixed (new decision) | The key was CT coronary angiography, which 41 q3 also keys. The distractor "Exercise ECG treadmill test" was defensible under Canadian guidance. CCS 2014 suggests an exercise ECG for patients who can exercise and have a readable resting ECG, as she does. The question now asks for the next step in her investigation. The key is "Noninvasive coronary testing". The new distractor "Repeat troponin in 6 hours" replaces the two test modalities. The source is now CCS 2014. The explanation counts her 2 of 3 anginal features and gives the CCS testing advice. It says exercise ECG or CCTA can serve her, depending on local access. Confidence high. |
| ischemic-heart-disease-42 | q3 | IHD8 | fixed (source) | The key (resting echocardiogram) is right under both guidelines. CCS 2014 strongly recommends a noninvasive assessment of resting LV function in all patients with suspected stable ischemic heart disease (high-quality evidence). The source is now CCS 2014. The ESC-only carotid claim is replaced by a plain reason. |

## The specific checks

**1. Key features.** All three SAMPs match HEAD as sets. The order changed in 24 and 41, which the writer disclosed.

**2. CCTA keyed twice.** Yes, this was a repeated keyed decision. 41 q3 and 42 q2 both keyed "CT coronary angiography" as the test that settles suspected coronary disease, in the same batch. No other SAMP in s42 keys CCTA. The s12 write-in items only accept it among other tests. 42 q2 was the one to change because its key also depended on the guideline used (see check 4). It now keys noninvasive coronary testing without a modality, which is still KF8 ("ensure appropriate follow-up and investigation, e.g. provocative testing"). The decision differs from IHD-15 q3. That write-in item asks for a whole discharge plan (outpatient testing, ASA, nitroglycerin, return advice). 42 q2 now asks whether she needs coronary testing at all rather than spine imaging, rhythm monitoring or more troponins.

**3. Fondaparinux 2.5 mg daily with angiography after 24 hours.**
- ESC 2023 (full text read): "For patients with NSTE-ACS in whom early invasive angiography (i.e. within 24 h) is not anticipated, fondaparinux is recommended." Class I, level B. Also: "fondaparinux (with a UFH bolus at time of PCI) is recommended in preference to enoxaparin, although enoxaparin should be considered if fondaparinux is not available". The dosing table gives 2.5 mg/d SC, a single UFH bolus at PCI, and "Avoid if CrCl <20 mL/min".
- Thrombosis Canada, Clinical Guide "Unfractionated heparin, low molecular weight heparin and fondaparinux", version dated 30 April 2025: it lists fondaparinux for UA, NSTEMI and STEMI managed without PCI. The ACS dose is 2.5 mg once daily. It advises adding UFH at PCI and says "the ultimate choice of agent(s) should be guided by institution-specific protocols". It lists enoxaparin 1 mg/kg BID as an alternative for intermediate and high-risk UA/NSTEMI. It says fondaparinux is contraindicated when CrCl is below 30 mL/minute.
- No current CCS or CAIC guideline on anticoagulant choice in NSTE-ACS was found. The CCS/CAIC antiplatelet guidelines do not cover it. The 2011 "Canadian perspective" in Can J Cardiol (Part 1, NSTE-ACS) could not be opened (403).
- Verdict: the key holds. The dose matches both sources. The preference over enoxaparin comes from ESC only. Thrombosis Canada does not rank the two drugs.

**4. Canadian sources for ESC-sourced claims.**
- 42 q3 (resting LV assessment): covered by CCS 2014, recommendation 6. Now cited.
- 42 q2 (testing in suspected stable disease): covered by CCS 2014. It conflicts with ESC 2024 on exercise ECG, so the question was rewritten to what both agree on. Now cited.
- 42 q1 (upper back pain as an angina equivalent): CCS 2014 only says that nonclassical symptoms are common. ESC 2024 kept.
- 41 q1: CCS 2014 states that "the absence of calcium does not rule out coronary artery stenoses in symptomatic individuals". The question cites CONFIRM, whose figures the explanation quotes. CONFIRM kept, and CCS 2014 noted here.
- 41 q2 and q3 (observe zone): the Canadian review by Andruchow, Kavsak and McRae (Can J Cardiol 2018, doi 10.1016/j.cjca.2017.11.012) confirms that about a third of patients stay in the observe zone and have a higher short-term risk. It says no validated pathway exists. It does not name admission or CCTA. ESC 2023 kept.
- 24 q1, q2 and q4: no Canadian guideline covers arm pain equivalents, the anticoagulant preference or the very high-risk list. Thrombosis Canada covers the q2 dose only. ESC 2023 kept.

**5. CrCl.** Cockcroft-Gault for a 79-year-old man of 72 kg with creatinine 88 umol/L: 61 x 72 x 1.23 / 88 = 61.4 mL/minute. The explanation's "about 61" is correct.

**6. Mock-mode cueing.**
- 24: the q2 update (troponin 58 then 164 ng/L, angiography booked) and the q2 to q4 prompts imply the q1 key (myocardial ischemia). The stem's new ST depression already points there, and q2 to q4 cannot work without an NSTEMI. Left in place and flagged, as in earlier reviews.
- 41: the q3 prompt ("to resolve her diagnosis") shows that more testing follows. This rules out one q1 distractor ("makes further cardiac testing unnecessary") and one q2 distractor ("Discharge with no further testing"). It does not identify either key. Accepted.
- 42: the q2 options and the q3 echocardiogram imply a cardiac cause, which is the q1 key. The q2 prompt was worded without "coronary" to limit this. The remaining cue is built into the case. Flagged.

## Overlap search

I searched all of src/samps for forearm pain, diclofenac and NSAIDs, coronary calcium, observe zone, fondaparinux, physiotherapy, and interscapular or upper back pain.
- 24: pulmonary-edema (s15) keys stopping naproxen, but as the trigger for heart failure, not in ACS. s12 IHD mentions fondaparinux only as a distractor before primary PCI. No copy.
- 41: the only other calcium score item is chest-pain (s28), where a score of 410 raises risk. The teaching is the opposite. No other observe-zone SAMP. No copy.
- 42: upper back pain elsewhere is aortic dissection (s05) or acupuncture pneumothorax (s28). No copy.

## Sources verified

- Byrne 2023 ESC ACS, doi 10.1093/eurheartj/ehad191. Full text read (arm pain equivalents, observe zone, very high-risk criteria, fondaparinux).
- Vrints 2024 ESC CCS, doi 10.1093/eurheartj/ehae177. Text checked for upper back pain and the 1 to 5 minute offset.
- Mancini 2014 CCS stable ischemic heart disease, doi 10.1016/j.cjca.2014.05.013. Full text read (anginal features, exercise ECG, CCTA, recommendation 6).
- Thrombosis Canada clinical guide on UFH, LMWH and fondaparinux, 30 April 2025 (thrombosiscanada.ca/clinical_guides/pdfs/UNFRACTIONATEDHEPARINANDLOWMOL_43.pdf). Read. Not cited in the SAMP.
- Schjerning Olsen 2011, doi 10.1161/CIRCULATIONAHA.110.004671. Abstract read.
- Villines 2011 CONFIRM, doi 10.1016/j.jacc.2011.10.851. Abstract read.
- Andruchow 2018, doi 10.1016/j.cjca.2017.11.012. Abstract read. Not cited in the SAMP.

## Checks

- SAMP_BATCH=s42 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts: 655 passed.
- npx tsc --noEmit -p .: clean.

## For the physician

- 24 q2 keys fondaparinux 2.5 mg SC daily. The preference over enoxaparin is from ESC 2023 (Class I). Thrombosis Canada 2025 lists both drugs for NSTEMI and leaves the choice to local protocol. Please confirm this suits a Canadian key, or accept enoxaparin as a second valid answer and rewrite the distractor.
- 24 q2 stem: the PCI centre takes him in 3 days. ESC 2023 advises early angiography (within 24 hours) for a confirmed NSTEMI. The delay is a system constraint in the story, not a recommendation. The explanation does not endorse it.
- 24 q3 (stop diclofenac) is mapped to KF7. KF7 is about weighing interventions before starting them. Stopping a harmful drug fits loosely. HEAD also had two KF7 questions.
- 24 q1 and 42 q1: in mock mode, the later questions imply the diagnosis. This is built into the cases.
- 41: the troponins are all below the 99th percentile. Some Canadian 0/2 hour pathways would call this a rule-out. The stem states that the hospital protocol puts her in the observe zone. Please confirm that the item reads fairly.
- 42 q2: CCS 2014 suggests an exercise ECG first for her. ESC 2024 prefers CCTA and advises against exercise ECG when imaging is available. The key now avoids choosing between them. If you prefer a modality key, the prompt must name the guideline.
- 42 q2 key "Noninvasive coronary testing" is a category, and the distractors are specific tests. It sits next to "Invasive coronary angiography", so the two options differ by one prefix. Low risk of cueing, but noted.

## Summary

3 SAMPs, 10 questions. Verdicts: 0 pass, 3 fixed, 0 re-rebuilt. By question: 5 pass (2 flagged), 5 fixed. Defects fixed:

1. 24 q2: overstated renal cut-off ("only" below 20 mL/minute).
2. 24 q3: a false stem reference (diclofenac was for knee osteoarthritis).
3. 41 q1: hedged-key cue with a negation pair.
4. 41 q1: CONFIRM misquoted as showing more deaths.
5. 42 q2: CCTA repeated 41 q3, and a distractor was defensible under CCS 2014. Rewritten to a new decision.
6. 42 q3: source switched to the Canadian guideline.
