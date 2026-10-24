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
