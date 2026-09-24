# Writer report: batch s36, Environmental

File: `src/samps/s36/environmental.ts` (export `ENVIRONMENTAL_S36`), exported from `src/samps/s36/index.ts` as `SAMPS_S36`.

## Count and mix

- 23 SAMPs, environmental-16 to environmental-38. All `reviewed: false`.
- 76 questions: 69 single and 7 menu. Menu questions are in environmental-17, 26, 28, 31, 34, 36 and 38.
- 3 to 4 questions per SAMP. Stems run 70 to 127 words.
- Checks pass: `npx tsc --noEmit -p .` shows no s36 errors, and `SAMP_BATCH=s36 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (472 tests).

## Key positions (single questions)

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Keys | 14 | 14 | 12 | 14 | 15 |

The largest share is 15 of 69 (22%). The key is the longest option in 16 of 69 single questions (23%).

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Suspect heat stroke and start cooling | 10 |
| 2. Cool severe hyperthermia while considering other causes | 12 |
| 3. Rewarm hypothermia, track core temperature, keep resuscitating | 23 |
| 4. Decompression illness in divers, hyperbaric referral | 16 |
| 5. Hidden injury after electrical injury, monitoring | 15 |

## Topics covered (chosen to avoid repeating s09, s32, s46 and s53)

- Heat: exercise-associated hyponatremia versus heat stroke (16), a heat dome with pneumonia and heat-risk medicines (17), meningococcal sepsis mimicking heat stroke (18), a wildland firefighter with RSI choice and tarp-assisted cooling (19), a football player cooled on the field, with return to play (20), chronic salicylate toxicity in a heat wave (38).
- Cold: two avalanche burials, one asphyxial and one hypothermic (21), revised Swiss staging at a Nunavut nursing station (22), frostbite with a subdural hematoma, where iloprost replaces alteplase (23), a hypothermic toddler with rewarming hypotension (24), falling through lake ice, with drowning and rescue collapse (25), failure to rewarm in an older adult (26), non-ECLS rewarming and intermittent CPR when aircraft are grounded (27).
- Diving: spinal DCS first aid and LMWH (28), mild DCS brought on by a flight home (29), AGE with a pneumothorax to drain before recompression (30), immersion pulmonary edema (31), facial baroparesis versus AGE (32).
- Electrical: conducted energy weapon with methamphetamine hyperthermia (33), a grain auger touching a power line, with posterior shoulder dislocation (34), a 347 V hand to hand injury with atrial fibrillation (35), a child with arc burns and splenic injury from the fall (36), lightning with Lichtenberg figures, myocardial injury and a thoracic spine injury (37).

## Sources (verified on PubMed or the publisher's page)

- Eifling KP et al. WMS heat illness 2024. https://pubmed.ncbi.nlm.nih.gov/38425235/
- Bennett BL et al. WMS exercise-associated hyponatremia, 2019 update (2020). https://pubmed.ncbi.nlm.nih.gov/32044213/. Full text read.
- Roberts WO et al. ACSM exertional heat illness consensus. Curr Sports Med Rep 2023. https://pubmed.ncbi.nlm.nih.gov/37036463/. Full text read.
- BC Coroners Service. Extreme heat and human mortality, 2022. Full report read (gov.bc.ca PDF).
- Evans L et al. Surviving Sepsis Campaign 2021. https://pubmed.ncbi.nlm.nih.gov/34599691/
- Tunkel AR et al. IDSA bacterial meningitis 2004. https://pubmed.ncbi.nlm.nih.gov/15494903/
- Paal P et al. Accidental hypothermia: 2021 update (2022). https://pubmed.ncbi.nlm.nih.gov/35010760/. Full text read (Europe PMC).
- Pasquier M et al. ICAR MedCom avalanche recommendations 2023. https://pubmed.ncbi.nlm.nih.gov/36709825/. Full text read.
- McIntosh SE et al. WMS frostbite 2024. https://pubmed.ncbi.nlm.nih.gov/38577729/. Checked through the Omidi 2025 appraisal (PMC11855094).
- Poole A et al. Yukon frostbite case series. CMAJ Open 2021. https://pubmed.ncbi.nlm.nih.gov/34021017/
- Davis CA et al. WMS drowning 2024. https://pubmed.ncbi.nlm.nih.gov/38379489/
- Mitchell SJ, Bennett MH, Moon RE. DCS and AGE. N Engl J Med 2022. https://pubmed.ncbi.nlm.nih.gov/35353963/. Full text read.
- Peacher DF et al. Immersion pulmonary edema. Med Sci Sports Exerc 2015. https://pubmed.ncbi.nlm.nih.gov/25222821/
- Vilke G et al. Conducted energy weapon review. J Emerg Med 2019. https://pubmed.ncbi.nlm.nih.gov/31500994/
- Waldmann V et al. Electrical cardiac injuries. Eur Heart J 2018. https://pubmed.ncbi.nlm.nih.gov/28444167/
- American Burn Association. Burn referral guidelines 2025. https://ameriburn.org/resources/burnreferral/
- Juurlink DN et al. EXTRIP salicylate 2015. https://pubmed.ncbi.nlm.nih.gov/25986310/
- Palmer BF, Clegg DJ. Salicylate toxicity. N Engl J Med 2020. https://pubmed.ncbi.nlm.nih.gov/32579814/
- Walls RM et al, editors. Rosen's Emergency Medicine, 10th ed. 2023. A textbook, not verified online.

## Points for reviewers

- The WMS heat 2024 full text was paywalled. Heat cooling claims rest mainly on the ACSM statement, which I read in full. Please check the tarp-assisted cooling and monitoring wording in environmental-19.
- Paal 2022 gives two different epinephrine interval ranges. I avoided the interval and used only withholding below 30°C and delaying shocks after three.
- environmental-26 q3 uses Paal's point that older and comorbid patients can arrest below 32°C. The formal ECLS transfer list uses below 30°C.
- The following rely on Rosen's, not on an online guideline that I read:
  - Rocuronium versus succinylcholine (19 q1).
  - Treatment of immersion pulmonary edema (31 q3).
  - Posterior dislocation (34 q1).
  - Lichtenberg figures and lightning myocardial injury (37).
  - Secondary causes of failure to rewarm (26 q2).
- environmental-35 says atrial fibrillation after electrical injury often reverts on its own, based on Waldmann. Please confirm.
- environmental-24 q1 uses dextrose 10% at 5 mL/kg. Check this against local paediatric protocols.
- The facial baroparesis teaching (32) comes from the NEJM 2022 differential table: the upper and lower face are involved, while AGE spares the upper face.
- environmental-19 q3 (core temperature probe) and environmental-21 q3 (gentle handling) overlap in part with s09 write-in teaching. I reframed both for MCQ.
- Coordinator fixes: in environmental-23 q2 I swapped the first two options and moved the key to index 0, with the answer unchanged. In environmental-26 q2 I renamed "D-dimer" to "D-dimer level" and "Troponin" to "Troponin level", with the keys unchanged.

## Rework (after Lens A review)

Every Lens A fix was kept. Five SAMPs repeated other batches. I rewrote each one whole, with a new scenario and new teaching on the same key feature, and kept its id. I searched `src/samps/` for each new scenario first and found no match in the bank.

| SAMP | Replaced | New scenario and teaching | Key feature, questions |
|---|---|---|---|
| environmental-28 | Great Lakes spinal DCS (repeated s09 environmental-10) | Two Kootenay Lake dives, then a drive over Kootenay Pass (1774 m). Teaches the mild versus serious grading of DCS, altitude after diving as the trigger, and recompression even after symptoms resolve on surface oxygen | 4, three |
| environmental-30 | Breath-hold ascent with AGE and pneumothorax (repeated s09 environmental-11) | Ciguatera after a Caribbean dive trip, seen in Halifax. Teaches toxic seafood as a DCS mimic, how onset timing separates them, and avoiding alcohol and fish to prevent relapse | 4, three |
| environmental-31 | Immersion pulmonary edema (repeated s48 pulmonary-edema-24) | A breath-hold spearfisher with stroke-like cerebral DCS. Teaches the risk factors (repeated dives, short intervals, fast ascents), recompression without a tank, and PFO assessment | 4, four (one menu) |
| environmental-34 | 14 400 V line, posterior dislocation, burn referral (repeated s09 environmental-13) | A Toronto subway third rail, 600 V direct current. Teaches direct versus alternating current, associated head and neck injury (menu), and 24 hour monitoring after loss of consciousness | 5, three (one menu) |
| environmental-38 | Chronic salicylate toxicity (near clone of s48 pulmonary-edema-26) | Malignant hyperthermia after succinylcholine for RSI in a trauma patient. Teaches recognition, the dantrolene dose (2.5 mg/kg x 80 kg = 200 mg), adjunct measures (menu) and follow-up | 2, four (one menu) |

environmental-26: in the old stem she arrived at 31.4°C. Under Paal, below 32°C in an older patient is a direct ECLS transfer criterion, so the 2 hours of local rewarming contradicted the key. She now arrives at 32.8°C with a systolic BP of 102 mmHg, which meets no transfer criterion. After 2 hours her temperature has fallen to 31.8°C and her systolic BP to 84 mmHg, so the transfer key now follows from two criteria. The q1 and q2 explanations were adjusted to match. No key changed.

New sources, all checked on PubMed or in full text:
- UHMS best practice guidelines on DCS and AGE, 2011. PDF read. It says to recompress even if signs and symptoms resolve before recompression. https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf
- Friedman MA et al. Ciguatera review. Mar Drugs 2017. Full text read: GI onset within 6 to 12 h, cold allodynia, bradycardia, barracuda, avoid alcohol and fish for 3 to 6 months. https://pubmed.ncbi.nlm.nih.gov/28335428/
- Schipke JD, Limper U, Tetzlaff K. Breath-hold diving and DCS. Am J Med 2026. Abstract read: mainly cerebral and stroke-like, risk factors are short surface intervals, deep dives, rapid ascent and PFO, and treatment is oxygen and hyperbaric oxygen. https://pubmed.ncbi.nlm.nih.gov/41397651/
- Smith I et al. Electrical injuries in adults in the ED. Cureus 2026. Full text read: AC tetany prolongs contact, loss of consciousness needs at least 24 h of monitoring, troponin has limited value, and low voltage is below 1000 V. https://pubmed.ncbi.nlm.nih.gov/42147553/
- Rosenberg H et al. Malignant hyperthermia: a review. Orphanet J Rare Dis 2015. Full text read: early rise in ETCO2 despite more ventilation, dantrolene 2.5 mg/kg repeated, cooling by all routes, no verapamil with dantrolene, recrudescence in about 25%, ICU for at least 24 h, and family testing. https://pubmed.ncbi.nlm.nih.gov/26238698/

The Peacher, EXTRIP and Palmer sources were removed because nothing cites them now.

After the rework: 23 SAMPs and 76 questions (70 single, 6 menu). The environmental-28 menu became a single question. Single key positions are 15, 17, 11, 14 and 13, so the largest is 24%. The key is the longest option in 14 of 70 (20%). Questions per key feature: 10, 12, 23, 16 and 15, unchanged. tsc is clean and `SAMP_BATCH=s36` passes 472 of 472 tests.

Points for reviewers:
- environmental-34 q1: no source I could read says outright that direct current throws the victim. The key and explanation therefore rest on what Smith 2026 does support: AC tetany prolongs contact and DC lacks it. The throw is described only as a sudden violent contraction.
- environmental-31 q1: the reason for rejecting AGE is that he breathed no compressed gas at depth. That is standard physiology but is not stated in Schipke's abstract.
- environmental-38: malignant hyperthermia is an anesthetic hypermetabolic syndrome, not an environmental one. It is placed under key feature 2 as a hyperthermia cause to consider alongside NMS and overdose. Please confirm this fit.
- environmental-30 q1: the scombroid timing (flushing within an hour) is standard teaching and was not checked against the Friedman text.
