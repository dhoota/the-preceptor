# Q500B writer report: s84 Environmental

Author: Preceptor. All items `reviewed: false`, `version: 1`.

## Ids written

environmental-39 to environmental-43 in `src/samps/s84/environmental.ts` (array `ENVIRONMENTAL_S84`).

| Id | Title | Setting | Questions | Key features |
|---|---|---|---|---|
| environmental-39 | Found confused on the couch | Community hospital, Kamloops, heat warning | 4 single | KF1, KF2, KF2, KF2 |
| environmental-40 | A runner carried into the medical tent | Track meet medical tent, Saskatoon, adolescents | 5 single | KF1 x5 |
| environmental-41 | Found on a bench at dawn | Tertiary ED, Edmonton winter | 4 single | KF3 x4 |
| environmental-42 | Breathless after a wreck dive | Rural ED, Bruce Peninsula | 4 single | KF4 x4 |
| environmental-43 | A shock while replacing an outlet | Tertiary ED, household 240 V | 4 single, 1 menu | KF5 x5 |

22 questions: 21 single, 1 menu (environmental-43 q4, select 3 of 7).

## Key feature coverage

Bank counts before this batch: KF1 17, KF2 30, KF3 49, KF4 28, KF5 29. The extra questions went to KF1 (the thinnest), then KF4 and KF5.

| Key feature | This batch | Bank after |
|---|---|---|
| 1 Suspect heat stroke and cool now | 6 | 23 |
| 2 Cool severe hyperthermia, consider other causes | 3 | 33 |
| 3 Rewarm, reliable core probe, keep resuscitating | 4 | 53 |
| 4 Decompression illness, hyperbaric referral | 4 | 32 |
| 5 Electrical injury, hidden damage, monitoring | 5 | 34 |

KF3 has 4 because environmental-41 needed four questions, and every one is a new angle. See below.

Single key positions (0 to 4): 5, 2, 4, 5, 5. The quality gates pass.

## New angles (checked against all 54 SAMPs on or tagged to this topic and the four environmental oral cases)

- 39: classic heat stroke that unmasks chronic lithium toxicity. Cool before results. The lithium level is the test for a second cause. Confusion that persists after cooling to 38.9°C points to lithium neurotoxicity. EXTRIP criteria for hemodialysis.
- 40: triage in a track meet tent. Subtle disorientation counts as heat stroke even with sweating. Shivering and a clearer mind are not the end point for immersion (38.9°C is). Transport to hospital after cooling on site. Exertional sickling in an athlete with sickle cell trait, told apart from heat stroke and cramps, and its management.
- 41: severe urban hypothermia. Pulse check for up to 1 minute with POCUS before compressions. Weight-based ventilation, not end-tidal CO2. Alpha-stat blood gas reading. Rectal probe lag compared with esophageal temperature.
- 42: pulmonary decompression sickness (chokes) after a missed stop. Oxygen, not aspirin, steroids, lidocaine or furosemide. Isotonic fluid without dextrose for hemoconcentration. A 72 hour wait before flying after treatment.
- 43: household 240 V shock with tetany and current across the chest. Posterior shoulder dislocation from tetany, and its mechanism. No cardiac monitoring after a normal ECG (Bailey 2007). CBC, electrolytes with creatinine and CK. Burn centre consultation for every electrical burn.

## Sources and verification

- Bouchama A, et al. Classic and exertional heatstroke. Nat Rev Dis Primers. 2022. Abstract read through PubMed E-utilities (PMID 35115565): "No specific therapy other than rapid cooling is available." No URL listed because I did not open the article page.
- Decker BS, et al. EXTRIP lithium. Clin J Am Soc Nephrol. 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4422246/ (abstract and text: criteria for extracorporeal treatment, volume depletion raises lithium, charcoal does not adsorb lithium, myoclonus in severe toxicity).
- Casa DJ, et al. NATA position statement: preventing sudden death in sports. J Athl Train. 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3418121/ (heat stroke criteria, removal at 38.9°C, cool first and transport second, exertional sickling features and treatment).
- Paal P, et al. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC8744717/ (60 second check for signs of life with ECG, end-tidal CO2 and POCUS, weight-based ventilation, end-tidal CO2 unreliable, alpha-stat, rectal and bladder lag, esophageal probe at about 40 cm).
- Lampropoulou DI, et al. Diving medicine. Cureus. 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11044526/ (chokes symptoms, arterial gas embolism within 10 to 20 minutes).
- UHMS best practice guidelines, DCS and AGE. 2011. https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf (PDF text extracted: oxygen 15 L/minute, supine, no aspirin, corticosteroids or lidocaine, isotonic fluid, avoid dextrose and overload, urine 1 to 2 mL/kg/hour, flying 72 hours after treatment).
- Smith I, et al. Electrical injuries in adults in the ED. Cureus. 2026. https://pmc.ncbi.nlm.nih.gov/articles/PMC13179728/ (posterior shoulder dislocation from tetany, alternating current tetany, troponin not helpful, CBC, CMP and CK, burn centre consultation for all electrical burns).
- Bailey B, Gaudreault P, Thivierge RL. Cardiac monitoring of high-risk patients after an electrical injury. Emerg Med J. 2007. Abstract read through PubMed E-utilities (PMID 17452703). No URL listed.

The web search budget ran out partway through. All the checks above used WebFetch, or PubMed E-utilities through curl.

## Uncertain, for reviewers

1. environmental-39 q4 (hemodialysis for lithium toxicity) has the same key decision as tox-07 q2. The new twist is that the confusion persists after heat stroke cooling. Replace it if the near-duplicate check flags it.
2. environmental-39: in mock mode the q3 update reports the lithium level, which implies the q2 key (rule B6). The stem already names lithium, so the cue is weak. I left it in and flag it here.
3. environmental-40 q4 and q5 (exertional sickling) are tagged KF1, as the step of telling heat stroke apart at the point of collapse. KF2 would also be defensible.
4. environmental-40 q2: the claim that shivering and recovery of orientation are not end points rests on NATA's temperature-based end point (38.9°C). NATA does not discuss shivering itself.
5. environmental-41 q1: the reasons that atropine and pacing do not help, and that compressions wait for the 1 minute check, follow Paal 2022 in general. They are not direct quotes.
6. environmental-42 q4: the 12 to 24 hour figure for uneventful dives comes from general flying-after-diving guidance (DAN 2004), not from the cited UHMS document.
7. environmental-43 q3 keys "No further cardiac testing" on Bailey 2007. That study included tetany and current across the chest. An older reference that lists those as reasons to monitor would disagree.
8. The bank-wide near-duplicate stem test times out at the default 5 seconds while the machine is under heavy load (load average about 14 on 4 cores). It passes with `--testTimeout=120000`, so no duplicate stems were found.

## Revision 1

This revision answers `docs/reviews/q500b-qa-s84.md`, which failed 8 items. No D1 slot was used. Every replacement was checked against the whole bank by keyword search of `src/samps` and `src/cases`.

| Item | QA finding | Change |
|---|---|---|
| 39 q1 | Same keyed decision as cooling before tests (environmental-02, environmental-17, s36) | Removed. The SAMP now opens with the lithium level question. Its update says cooling is under way, so cooling first is shown, not tested. |
| 39 q4 | Same keyed decision as hemodialysis in tox-07, and it misquoted the EXTRIP criterion | Removed, so the SAMP no longer has an EXTRIP dialysis key. Two new KF2 questions added (q3, q4, below). |
| 39 new q3 (KF2) | | Hydration advice on lithium in hot weather. The key is water through the day, and the distractors are electrolyte solutions, salt tablets and fluid restriction. Health Canada 2011 says lithium levels run higher in summer, that 11.5% of lithium poisonings needing hospital care came from heat and dehydration, and that patients should drink water and avoid electrolyte solutions because of hypernatremia. Bank search found no item on lithium with electrolyte solutions or sports drinks. |
| 39 new q4 (KF2) | | Plan after discharge while the heat warning continues. The key is an air-conditioned place, and the distractors are a fan, a fan with open windows, a fan with extra fluids, and an evening shower. Health Canada 2011 says air conditioning is one of the most protective factors, evidence for fans is mixed, a fan warms the body by convection above a skin temperature of about 36°C, and people at risk need a daily check-in plan. Bank search found no SAMP on fans or air conditioning. The batch15 oral case teaches discharge to a cooled setting, but not this choice. |
| 40 q1 | "Lying BP" was not in the stem | Now reads "Her BP of 104/60 mmHg". |
| 40 q3 | Mock-mode cue: the update gave the 38.9°C end point | Update now reads "Cooling is completed and she is lifted out of the tank." |
| 40 q5 | Explanation overstated NATA on transport | First sentences rewritten to the reviewer's wording: NATA's conditional transport, the tachycardia and tachypnea, no laboratory in the tent, and readiness for explosive rhabdomyolysis. |
| 41 q2 | Mock-mode cue: the update named the q1 key | Update now opens "Ultrasound shows slow coordinated ventricular contractions". A weak remaining cue is flagged under B6. |
| 42 q4 | The 12 to 24 hour sentence was not in UHMS and was wrong against DAN 2004 | Sentence deleted. The explanation now rests on UHMS alone. |
| 43 q2 | Same teaching as msk-03 q2 and s36 subway q1 (AC tetany mechanism) | Replaced with a new KF5 decision on the extent of the examination for hidden injury. The key is a full musculoskeletal examination, from Smith 2026: "All patients with electrical injuries should undergo a thorough musculoskeletal examination", because injury can be present without visible wounds. Bank search found no electrical item that keys this. q1 is now the only shoulder question. |

Other changes:
- Bouchama 2022 is no longer cited and has been removed from the sources.
- Health Canada 2011 was added, verified by WebFetch of the full guide, with the URL listed.
- The Bailey 2007 URL was added (https://pmc.ncbi.nlm.nih.gov/articles/PMC2658483/, confirmed by the reviewer).

### Coverage after Revision 1

22 questions: 21 single, 1 menu. Every key feature is still tested, and the extra questions still go mainly to KF1 (the thinnest), then KF4 and KF5.

| Key feature | Questions in this batch |
|---|---|
| KF1 | 5 |
| KF2 | 4 |
| KF3 | 4 |
| KF4 | 4 |
| KF5 | 5 |

- environmental-39 is now KF2 x4.
- Single key positions (0 to 4): 5, 3, 4, 4, 5. The longest-option and position gates pass.

### Still flagged

- environmental-39: the q2 update reports the lithium level, which implies the q1 key in mock mode. Left in under rule B6.
- environmental-40: the q2 update implies the q1 key in mock mode. Left in under rule B6.
- environmental-41: the q2 update still implies a check was done. Left in under rule B6.
- environmental-39 q3 and q4 are tagged KF2 as the coordinator asked. They test heat risk in a patient on a drug that impairs heat tolerance, at discharge. A physician may prefer another tag.
- environmental-40 q3 and q5 need the physician decisions the reviewer listed.

### Tests

`SAMP_BATCH=s84 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 136 of 136 tests passed. tsc shows no errors in `samps/s84`.

## Revision 2

This revision answers `docs/reviews/q500b-verify-s84.md`, which failed 3 questions, all in environmental-39. Nothing outside environmental-39 changed.

| Item | Finding | Change |
|---|---|---|
| 39 q2 | "She takes no serotonergic drug" is not true, because lithium is serotonergic | The clause now reads "Lithium can add to serotonin toxicity, but she takes no other serotonergic drug, and her toxic lithium level explains her findings." The Wernicke sentence keeps its wording and now stands as its own sentence. |
| 39 q3 | Mock-mode cue: the update named treatment for lithium toxicity | Update now reads "She is admitted and recovers over 4 days. Her psychiatrist plans to continue lithium. The heat warning has been extended for 3 more days." |
| 39 q4 | At 33°C the air is cooler than the skin, which contradicted the explanation's own fan reasoning | The update now says "Her apartment reached 37°C this afternoon." The explanation now reads 37°C. |
| 39 q4, optional | The key was the single longest option | Key reworded from "Stay in an air-conditioned place" (32 characters) to "Stay somewhere air-conditioned" (30). The meaning is the same, it is no longer the single longest option, and it stays in the last position. |

Coverage, key positions (5, 3, 4, 4, 5) and the menu question are unchanged.

Tests: `SAMP_BATCH=s84 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed 136 of 136. tsc shows no errors in `samps/s84`.
