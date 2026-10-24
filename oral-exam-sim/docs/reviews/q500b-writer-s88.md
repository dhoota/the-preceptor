# Q500B writer report: s88, Emergency medical services (EMS)

File: `src/samps/s88/ems.ts` (`EMS_S88`). All items `reviewed: false`, `version: 1`, `author: "Preceptor"`.

## Ids written

| Id | Title | Setting | Questions | Key features |
|---|---|---|---|---|
| ems-37 | Handover after a fall at home | Tertiary ED, older woman after a long lie | 4 (1 menu) | 2, 2, 2, 2 |
| ems-38 | A call from a college campus | Lead trauma hospital, active assailant | 4 | 4, 4, 4, 4 |
| ems-39 | A toddler and an empty remote | Rural ED, esophageal button battery | 4 | 3, 3, 3, 3 |
| ems-40 | A patch from a fitness centre | Tertiary ED with an ECPR program | 4 (1 menu) | 1, 1, 2, 2 |
| ems-41 | A call from a high school | Community ED in Alberta, bear spray release | 4 | 4, 4, 4, 2 |

20 questions: 18 single and 2 menu.

Single key positions (index 0 to 4): 3, 4, 3, 4, 4. The key is the single longest option in 4 of 18 single questions.

## Key feature coverage

Bank counts before this batch (grep of `keyFeature: { topic: "ems"`): KF1 58, KF2 21, KF3 31, KF4 26. The extra questions went to the thinnest features.

| Key feature | This batch | Bank after |
|---|---|---|
| 1 Call ahead, field direction, ready the hospital | 2 | 60 |
| 2 Handover details only paramedics know | 7 | 28 |
| 3 Stabilize before transfer | 4 | 35 |
| 4 Mass casualty triage, early treatment, decontamination | 7 | 33 |

## Uniqueness

I read all 36 existing EMS SAMPs (s09, s35) and the EMS questions in s03, s11, s13 and s15. I then searched the bank for each planned scenario. Hydrogen sulfide (s53 tox), smoke inhalation (burns batches) and pepper spray first aid were dropped or reshaped because the bank already has them.

- ems-37: the handover angle is new. It covers what to take from the crew before they leave, melena seen at the scene, how long she lay on the floor, and signs of self-neglect in the home. No existing EMS item uses a long lie or home conditions.
- ems-38: active shooter field care (rescue task force, the warm zone, tourniquets first, SALT "dead", transport priority) is new. multiple-patients-13 covers hospital actions in a mall shooting and is not repeated.
- ems-39: no existing item covers stabilizing an acute esophageal battery before transfer (imaging, urgency, sucralfate, the 12 hour limit). gi-bleed (s39) has a late presentation with a herald bleed, where honey is a distractor. That is a different teaching point, and the two items agree with each other.
- ems-40: ECPR activation from a patch, the end-tidal CO2 en route and exclusion criteria are new. The batch01 refractory VF oral case is set in a centre with no ECPR program.
- ems-41: a bear spray (capsaicin) mass exposure at a school is new. The ammonia rink item (ems-24) uses different hazards and different teaching points: stridor first and contact lenses. I avoided both here.

## Sources and verification

- Iedema R et al. IMIST-AMBO. BMJ Qual Saf 2012. Confirmed through Europe PMC (PMID 22626739). https://pubmed.ncbi.nlm.nih.gov/22626739/
- Barkun AN et al. Nonvariceal upper GI bleeding guideline. Ann Intern Med 2019. Confirmed by search. No URL.
- Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med 2009. Confirmed by search. No URL.
- Cannell MB et al. EMT elder abuse and neglect screening tool. BMC Emerg Med 2016. Opened at https://pmc.ncbi.nlm.nih.gov/articles/PMC4888496/
- American College of Surgeons. Hartford Consensus compendium. Bull Am Coll Surg 2015. Opened, and the text extracted: https://www.stopthebleed.org/media/0svpk45s/hartford_consensus_compendium.pdf
- CHEMM SALT triage algorithm. Opened: https://chemm.hhs.gov/incident-primer/triage/salt-triage
- National Capital Poison Center button battery guideline, revised 2018. Opened: https://www.poison.org/battery/guideline
- Zipursky AR, Ratnapalan S. Button battery ingestions in children. CMAJ 2021. Opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC8486471/
- Richardson ASC et al. ELSO interim ECPR guideline. ASAIO J 2021. Opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC7984716/
- Yannopoulos D et al. ARREST trial. Lancet 2020. Confirmed by search. No URL.
- CDC riot control agents fact sheet. Opened: https://www.cdc.gov/chemical-emergencies/chemical-fact-sheets/riot-control-agents.html
- Global Initiative for Asthma 2026 Strategy Report. The reports page was opened and lists the 2026 report: https://ginasthma.org/reports/

## Uncertain points for reviewers

1. ems-41 q3: the GINA oxygen target (93% to 95% in adolescents) and the rule that IM epinephrine is used only for asthma with anaphylaxis or angioedema. These are from memory and match signed bank items. The 2026 PDF was too large to fetch, and the web search budget ran out before a second check.
2. ems-39 q3: CMAJ 2021 and the National Capital Poison Center place honey before hospital and sucralfate in hospital. ESPGHAN 2021 allows either while removal is awaited. To avoid two defensible answers, honey is not offered as an option.
3. ems-38 q1: the key, a rescue task force entering the warm zone with a police escort, depends on the stem saying the service trains for this. The Hartford compendium warns against improvising it on the day.
4. ems-40 q2: the claim that ECMO starts in the catheterization laboratory, with angiography to follow, reflects the ARREST pathway. Programs differ in where they cannulate.
5. ems-38 and ems-41 contain a few general clinical statements that the cited sources do not directly support: that crystalloid to a normal BP worsens bleeding, that collars do not stop bleeding, and that patching an eye keeps the irritant in place.
6. The bank-wide near-duplicate stem test passed only with `--testTimeout`. Under the default 5 second limit it timed out because the container was under heavy load (load average about 17 from parallel agents). It found no duplicates when allowed to finish.

## Revision 1

This revision applies every fix in `docs/reviews/q500b-qa-s88.md`. Before writing new content I searched the whole bank by keyword (all of `src/samps` and `src/cases`, not only topic "ems"). Candidates I rejected because the bank already covers them: hydrogen sulfide, smoke inhalation, button battery honey, tube displacement, postpartum hemorrhage, TXA in GI bleeding, bat rabies, alcohol-related hypoglycemia, and the Glasgow-Blatchford syncope point.

### ems-37 rebuilt
- **New scenario:** a 23-year-old with type 1 diabetes on an insulin pump after a severe low. The roommate found him in the apartment, an ACP crew gave glucagon IM, and the crew disconnected the pump.
- **Overlap removed:** none of the batch04 fall case, ems-06 or suicide-risk-02 remains (no floor, no home care worker, no apixaban, no long lie or CK, no fridge or mail cues).
- **Bank search:** the pump-interruption point appears nowhere in the bank. The only pump item is chest-pain s28, which is about cardiac risk.
- **q1 (menu, KF2):** crew-only details: when the pump was disconnected, when glucagon was given, and what the roommate saw. The IMIST-AMBO sentence now uses the reviewer's wording.
- **q2 (KF2):** restore basal insulin, because a pump carries only rapid-acting insulin and interruption risks DKA (Umpierrez and Klonoff 2018).
- **q3 (KF2):** the roommate's report given through the crew, three severe lows this month with confusion before any warning, points to hypoglycemia unawareness (Diabetes Canada 2018 chapter 14).
- **q4 (KF1):** direction after failed glucagon once IV access exists: dextrose 50% 50 mL IV, within the guideline's 20 to 50 mL (10 to 25 g).
- **Sources removed:** Barkun, Bosch and Cannell are no longer used.

### ems-38 to ems-40
The reviewer's exact wording is applied:
- **ems-38 q2:** "hemorrhage control before fluid resuscitation". Intubation, collars and splints are now described as not part of THREAT.
- **ems-38 q3:** the closing CPR sentence now cites the SALT lifesaving interventions.
- **ems-38 q4:** "rapid transport to surgery".
- **ems-39 q1:** the prompt now ends "now". The ultrasound and CT sentence is replaced.
- **ems-39 q3:** the update now says the transfer is being arranged, and the prompt says "while she remains in your department". The glucagon, metoclopramide and water sentence is replaced.
- **ems-39 q4:** the update opens "While the transfer is being arranged". "Defer transfer until the next day" replaces "Cancel the urgent transfer". "Now" replaces "before departure".
- **ems-40 q1:** "Give amiodarone 150 mg before moving" and "Stay on scene until circulation returns" replace the divert and terminate distractors. The explanation now gives the ELSO 60 minute flow target as the reason.
- **ems-40 q3:** "at 0724" is removed, and the pupil sentence now reads "The ELSO criteria do not use pupil findings."

### ems-41 replaced
- **New scenario:** a crew call-ahead for an unvaccinated 4-year-old with suspected measles during an outbreak. It is not a chemical exposure, has no supervisor frame, and has no decontamination or release question.
- **q1 (KF1):** bring him straight to the airborne isolation room, because the virus persists in the air for 2 hours.
- **q2 (menu, KF1):** fit-tested N95 respirators for all staff whatever their immunity, and report to public health without waiting for PCR.
- **q3 (KF1):** the exposed paramedic has only one documented dose, so she needs MMR within 72 hours (Canadian Immunization Guide).
- **q4 (KF2):** the crew-only handover detail of where they waited before reaching the room, for contact tracing.
- **Overlap avoided:** pediatric-fever s14 already teaches measles diagnosis, negative pressure isolation and PEP for infants and pregnancy. The isolation room and the immune-staff rule are therefore given in the stem and the q2 prompt rather than keyed.

### Coverage and balance after revision

| | KF1 | KF2 | KF3 | KF4 |
|---|---|---|---|---|
| Questions | 6 | 6 | 4 | 4 |

- **Questions:** 20 in total, 17 single and 3 menu (ems-37 q1, ems-40 q2, ems-41 q2).
- **Key positions:** every position 0 to 4 is used, none above 25 percent, and the longest-option rule passes.

### New sources, verified by WebFetch
- Umpierrez GE, Klonoff DC. Diabetes Care 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC6054505/
- Diabetes Canada 2018, chapter 14, Hypoglycemia (Yale, Paty, Senior). https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- PHAC. Measles: for health professionals (page dated 2026-04-08). https://www.canada.ca/en/public-health/services/diseases/measles/health-professionals-measles.html
- Canadian Immunization Guide, measles vaccines (partial update June 2025). https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html

### Uncertain points for reviewers
1. **ems-41 q3 key feature:** I tagged staff exposure management as KF1 (readying the department and hospital). A reviewer may read it as outside the EMS key features.
2. **ems-37 q2 key:** "Basal insulin restarted now" covers both reconnecting the pump and starting long-acting insulin. The source supports replacing pump basal insulin with long-acting insulin and treats impaired consciousness as the contraindication to pump use. It gives no time limit for an interruption.
3. **ems-37 q4:** this is a hypothetical patch question. The 10 mL and 150 mL distractors sit outside the 20 to 50 mL range.
4. **Mock-mode cue (B6), for the physician:** in ems-37, the q2 update states the disconnection time, which is a q1 key. I left it, as the reviewer advised for the earlier version.
