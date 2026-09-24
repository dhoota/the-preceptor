# SAMP review: batch s36 (environmental), Lens A

Lens: A, clinical truth. Scope: every SAMP in `src/samps/s36/environmental.ts` (environmental-16 to environmental-38) and `src/samps/s36/review-extra.ts` (environmental-39 and environmental-40). Every SAMP stays `reviewed: false`.

Gates after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s36` prints nothing. `SAMP_BATCH=s36 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 472 of 472. The tests do not load `review-extra.ts`, so its two SAMPs were checked by hand only.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| environmental-39 (extra) | q1 | correct | Key was index 1 (ECLS rewarming on arrival) while the explanation argues for forced air. A stable patient at 30.2°C with a systolic BP above 90 mmHg does not meet ECLS criteria. Key restored to index 4 (warm forced air and IV fluids at 40°C) | high |
| environmental-40 (extra) | q2 | explanation | Invented finding: "serum lactate of 7.8 mmol/L seen on the first blood gas confirms this". No lactate is in the case, and lactate does not confirm immersion pulmonary edema. Sentence removed | high |
| environmental-21 | q1 | explanation | Claimed ICAR advises stopping after about 30 minutes. ICAR 2023 gives no time limit and sends termination to standard normothermic guidance. Rewritten to say that | high |
| environmental-21 | q4 | options, explanation | Distractors "Epinephrine 1 mg IV every 3 minutes" and "Shock again every 2 minutes" are rejected only under European (ERC and Paal) rules. North American guidance, which Heart and Stroke Canada follows, has allowed shocks and a vasopressor alongside rewarming, so both could be defended by a Canadian candidate. Replaced them with "Local rewarming before transfer" and "Thoracic lavage in this ED", which are wrong under every guideline because ECLS is 2 hours away. The explanation now states the guideline difference. Key unchanged (index 4) | high |
| environmental-23 | q2 | source | Thaw timing was cited to Paal, which does not cover frostbite. Now cites WMS frostbite 2024, which says to treat moderate or severe hypothermia before frostbite. Added `S.wmsFrost` to sources | high |
| environmental-23 | q3 | explanation | "Iloprost is a vasodilator without that bleeding risk" was false. Iloprost inhibits platelets. Changed to "with a much lower bleeding risk". Same fix in environmental-39 | medium |
| environmental-24 | q3 | explanation | ECLS criterion given as "hypotension that does not respond". Paal's criterion is a systolic BP below 90 mmHg (adult). Corrected | medium |
| environmental-25 | stem, q1 | stem, explanation | The stem said he "swallowed" water but the explanation treats it as aspiration. Changed to "inhaled". The reason for rejecting a hot shower (that it opens cold peripheral beds and causes afterdrop) has no support in the cited source. Replaced with Paal's actual guidance on exercise and afterdrop, plus the practical problem of a shower in a hypoxemic patient | medium |
| environmental-26 | q2 | source, explanation | Cited only Rosen's (not verifiable). Re-cited to Paal Table 1 (secondary hypothermia: endocrine failure, hypoadrenalism, major infections). "Sepsis is the most common" was unsupported and was softened. Rosen's removed from this SAMP's sources because nothing cites it now | medium |
| environmental-26 | q3 | explanation | Left out the plainest criterion. Her systolic BP of 84 mmHg is below 90 mmHg, a Paal criterion for direct transfer to ECLS. It now states this, and gives Paal's criterion of below 32°C in older or comorbid patients correctly as a transfer criterion (answers the writer's doubt) | high |
| environmental-28 | q1 | explanation | "Supine position protects BP" is not the reason given in any source, and "Sitting upright" had no reason for rejection. Reworded to lying flat as the advised first aid position, rather than sitting up | low |
| environmental-31 | q1 | explanation | "Barotrauma and AGE need a rapid or breath-hold ascent" is false. Pulmonary barotrauma can follow a normal ascent. Changed to "usually follow". Same fix in environmental-40 | medium |
| environmental-35 | q2 | explanation | "AF after electrical injury often reverts on its own" could not be verified in Waldmann. Softened to "usually resolves within a day or two, on its own or with rate control, while he is monitored", which fits the case literature | low |
| environmental-36 | q3 | explanation | ABA criteria read "All pediatric burns, 14 years or younger or under 30 kg", with immediate consultation. The explanation said children "may also benefit", which understated this. Corrected | medium |
| environmental-37 | q1 | options, explanation, source | The distractor "Burn centre referral" was rejected as being "for true burns". The ABA referral criteria list lightning injury for immediate consultation, so the stated reason was false and the option was defensible. Replaced with "Cool running water for 20 minutes". Now cites WMS lightning 2014 (Lichtenberg figures are not burns) instead of the unverifiable Rosen's. Key unchanged (index 1) | high |
| environmental-38 | q2 | explanation | Treated pH 7.20 or below as a firm indication. EXTRIP rates it "suggested", and a level above 7.2 mmol/L "recommended" (6.5 mmol/L with impaired kidney function, which fits a creatinine of 142 umol/L). Wording corrected. Key unchanged | low |

## Key changes

- environmental-39 q1 (review-extra, draft): index 1 changed to index 4. Reason: the keyed ECLS option contradicted its own explanation and the Paal criteria. The patient is at 30.2°C with a BP of 104/62 mmHg and no ventricular arrhythmia.
- No key changed in environmental-16 to environmental-38. In environmental-21 q4 and environmental-37 q1, distractors were replaced and the keys kept their positions.

## Overlap with the bank (flagged, not rewritten)

A full rewrite would need new scenarios and new teaching points, which is a writer and physician decision. These overlaps repeat scenario and teaching, not just wording:

| s36 SAMP | Overlaps | What repeats | Severity |
|---|---|---|---|
| environmental-38 | pulmonary-edema-26 (s48) | Near clone. Older adult on ASA 650 mg four times daily for knee pain, confusion, tachypnea, anion gap 22 to 24, pH 7.43 to 7.44, pCO2 21 mmHg, EXTRIP altered mental status indication, intubation matched to minute ventilation. Also close to loc (s32) with gap 24 and pCO2 21 | high, replace |
| environmental-31 | pulmonary-edema-24 (s48) | Immersion pulmonary edema in cold water with hypertension, then cardiac evaluation and recurrence | high |
| environmental-28 | environmental-10 (s09) | Great Lakes wreck dives, girdle or back pain, level near T10, urinary retention, oxygen, nitrous oxide and head-down teaching. Only q3 (LMWH) is new | high |
| environmental-30 | environmental-11 (s09) | Breath-hold rapid ascent from 18 m, arm weakness, neck crepitus, AGE versus DCS, drain the pneumothorax before recompression. Only q3 (lidocaine) is new | high |
| environmental-34 | environmental-13 (s09) | 14 400 volt line, palm and heel wounds, hidden injury, posterior shoulder dislocation (in the s09 key), monitoring, burn centre referral | high |
| environmental-23 | environmental-09 (s09) | Frozen extremities after sleeping out at minus 29°C, core temperature before thawing, iloprost or tPA. environmental-39 is also a verbatim copy of environmental-23 | medium |
| environmental-26 | environmental-07 (s09) | Older woman found cold at home at 31.4°C, failure to rewarm, endocrine and septic causes | medium |
| environmental-17 | environmental-02 (s09) | Heat wave, older person without air conditioning, anticholinergic, antipsychotic and diuretic risk, immersion safe in older adults, sepsis considered | medium |
| environmental-19 q3 | environmental-01 q3 (s09) | Continuous rectal probe to guide stopping cooling (writer noted it) | low |
| environmental-21 q4, environmental-26 q1 | environmental-05 (s09) | Shocks and drugs below 30°C, AF resolving with rewarming | low |
| environmental-37 | environmental-15 (s09) | Lichtenberg figure, thrown victims and spinal injury, perforated eardrums | low |
| environmental-39, environmental-40 (extra) | environmental-23, environmental-31 | Verbatim duplicates of stems, options and explanations in this batch, with planted defects. Recommend they are not added to the bank | high |

s09 is a write-in bank kept out of mock exams, which softens the s09 overlaps. The s48 overlaps are MCQ against MCQ and matter most.

## Sources verified

- Paal P et al. Accidental hypothermia: 2021 update. 2022. Full text read (Europe PMC PMC8744717). Confirms: ECLS transfer for SBP below 90 mmHg, ventricular dysrhythmia, below 30°C, or below 32°C in older or comorbid patients. Non-ECLS rewarming only when ECLS cannot be provided within 6 h, using forced air and peritoneal lavage. Bladder lavage adds less than 0.5°C/h. Intermittent CPR at least 5 min on, with 5 min off below 28°C or 10 min off below 20°C. Epitympanic thermistor if not intubated, esophageal if intubated. Pads reduce shivering artifact. Intubation arrhythmia risk minimal. Supraventricular arrhythmias resolve with rewarming. Shocks delayed after three and epinephrine and amiodarone withheld below 30°C. Signs of failed rewarming. https://pubmed.ncbi.nlm.nih.gov/35010760/
- Pasquier M et al. ICAR MedCom avalanche 2023. Full text read. Termination deferred to standard guidance. K below 7 mmol/L and T below 30°C when HOPE is unavailable. https://pubmed.ncbi.nlm.nih.gov/36709825/
- Bennett BL et al. WMS EAH 2019 update (2020). Full text read. 100 mL 3% bolus repeated twice at 10 min, target 4 to 5 mmol/L, restrict fluids until urination, cool at once when hyperthermia is obvious. https://pubmed.ncbi.nlm.nih.gov/32044213/
- Roberts WO et al. ACSM exertional heat illness 2023. Full text read. Tarp-assisted cooling 0.14 to 0.17°C/min, rectal temperature only, no exercise for at least 7 days then 2 to 4 weeks graded return. https://pubmed.ncbi.nlm.nih.gov/37036463/
- Eifling KP et al. WMS heat illness 2024 update. Abstract and secondary summary: ice water immersion recommended, antipyretics and dantrolene not recommended. https://pubmed.ncbi.nlm.nih.gov/38425235/
- McIntosh SE et al. WMS frostbite 2024, through the Omidi 2025 appraisal (PMC11855094). Treat moderate or severe hypothermia first, iloprost up to 72 h. https://pubmed.ncbi.nlm.nih.gov/38577729/
- Poole A et al. Yukon frostbite. CMAJ Open 2021. 113 of 142 digits salvaged (79.6%). https://pubmed.ncbi.nlm.nih.gov/34021017/
- BC Coroners Service. Extreme heat death review. 2022. Full report read: 619 deaths, 98% indoors in a residence, 7% had air conditioning, 56% lived alone. https://www2.gov.bc.ca/assets/gov/birth-adoption-death-marriage-and-divorce/deaths/coroners-service/death-review-panel/extreme_heat_death_review_panel_report.pdf
- American Burn Association. Burn referral criteria. Page read: all high voltage injuries of 1000 V or more, lightning, partial thickness 10% or more, all pediatric burns (14 years or under, or under 30 kg), concomitant trauma. https://ameriburn.org/resources/burnreferral/
- Waldmann V et al. Eur Heart J 2018. Abstract: discharge low voltage without syncope and with a normal ECG, others monitored for at least 24 h. https://pubmed.ncbi.nlm.nih.gov/28444167/
- Vilke G et al. J Emerg Med 2019. Abstract: no dangerous effects with discharges up to 15 s. https://pubmed.ncbi.nlm.nih.gov/31500994/
- Juurlink DN et al. EXTRIP salicylate 2015. Thresholds confirmed. https://pubmed.ncbi.nlm.nih.gov/25986310/
- Davis C et al. WMS lightning 2014 update (added). https://pubmed.ncbi.nlm.nih.gov/25498265/
- Metadata confirmed on Europe PMC: Davis CA WMS drowning 2024 (38379489), Mitchell SJ NEJM 2022 (35353963), Peacher DF 2015 (25222821), Palmer BF NEJM 2020 (32579814), Evans L SSC 2021 (34599691), Tunkel AR IDSA 2004 (15494903).
- Rosen's Emergency Medicine 10th ed. 2023 (Walls, Hockberger, Gausche-Hill, Erickson, Wilcox). The edition and editors are confirmed. The chapter content cannot be checked online.

## Needs physician decision

1. environmental-21 q4: the 2025 AHA Part 10 guidance (Cao D, Lavonas EJ and colleagues, PMID 41122889) could not be read. Confirm its current position on shocks and epinephrine below 30°C. The revised explanation says only that North American guidance "is more permissive".
2. environmental-23 q3: iloprost in a patient with an acute 6 mm subdural hematoma. The key stays iloprost because alteplase and heparin are contraindicated, but iloprost has antiplatelet effects. IV iloprost is not marketed in Canada and is obtained through the Special Access Program. The stem's "your centre has a protocol" covers this.
3. environmental-26: by Paal's own criterion (below 32°C in an older patient), she met ECLS transfer criteria on arrival, before the 2 hours of local rewarming the case describes. Consider stating in the stem that transfer was being arranged, or making her younger or warmer.
4. environmental-24 q1: dextrose 10% 5 mL/kg (0.5 g/kg, 60 mL at 12 kg) sits inside PALS and common Canadian paediatric ranges. Confirm it against the local TREKK or hospital protocol.
5. Rosen-only claims (writer's list) are standard teaching and I found no error: rocuronium over succinylcholine with K 6.3 mmol/L and peaked T waves (environmental-19 q1), oxygen and observation for immersion pulmonary edema (environmental-31 q3), posterior dislocation after electrical tetany (environmental-34 q1), lightning myocardial injury (environmental-37 q2). environmental-26 q2 and environmental-37 q1 no longer rely on Rosen's.
6. Whether to rewrite or drop the high-severity overlaps above, above all environmental-38 and environmental-31 against s48, and whether to discard environmental-39 and environmental-40.

## Writer's doubts, answered

- WMS heat 2024 claims on ACSM: supported. ACSM lists tarp-assisted cooling and rectal-only monitoring (environmental-19).
- Paal epinephrine intervals: Paal gives withholding below 30°C and doubling the interval to 6 to 10 min from 30 to 35°C. The batch avoids intervals, which is correct.
- environmental-26 q3: Paal places below 32°C in older or comorbid patients among the ECLS transfer criteria, so it is not only a risk comment. The explanation is fixed, and the stem timing is flagged above.
- environmental-35: see fixes. Softened.
- environmental-24: see physician item 4.

## Summary

- SAMPs reviewed: 25 (23 in the batch plus 2 extra). Fixes: 17 rows across 14 SAMPs.
- By category: 1 wrong key (extra), 1 invented finding (extra), 5 false or unsupported distractor reasons (environmental-21 q1, environmental-25 q1, environmental-31 q1, environmental-37 q1, environmental-23 q3), 2 defensible distractors replaced (environmental-21 q4, environmental-37 q1), 4 wrong or misstated thresholds or criteria (environmental-24 q3, environmental-26 q3, environmental-36 q3, environmental-38 q2), 3 source misattributions (environmental-23 q2, environmental-26 q2, environmental-37 q1), 2 stem or wording consistency fixes (environmental-25, environmental-28), 1 softened unverifiable claim (environmental-35 q2).
- Most serious: the wrong key in environmental-39. The fabricated lactate in environmental-40. The ERC-only distractors in environmental-21 q4, defensible under Canadian (AHA) practice. The false rejection of burn centre referral in environmental-37 q1. The misattributed ICAR termination rule in environmental-21 q1. The near-clone overlap of environmental-38 with pulmonary-edema-26.
- SAMP ids with a defect: environmental-17, environmental-19, environmental-21, environmental-23, environmental-24, environmental-25, environmental-26, environmental-28, environmental-30, environmental-31, environmental-34, environmental-35, environmental-36, environmental-37, environmental-38, environmental-39, environmental-40.
