// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  wmsHeat: { id: "wms-heat", citation: "Eifling KP, Gaudio FG, Dumke C, and colleagues. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38425235/" },
  wmsEah: { id: "wms-eah", citation: "Bennett BL, Hew-Butler T, Rosner MH, Myers T, Lipman GS. Wilderness Medical Society clinical practice guidelines for the management of exercise-associated hyponatremia. 2019 update. Wilderness Environ Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32044213/" },
  acsm: { id: "acsm-ehi", citation: "Roberts WO, Armstrong LE, Sawka MN, Yeargin SW, Heled Y, O'Connor FG. ACSM expert consensus statement on exertional heat illness: recognition, management, and return to activity. Curr Sports Med Rep. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37036463/" },
  bcHeat: { id: "bc-heat", citation: "BC Coroners Service. Extreme heat and human mortality: a review of heat-related deaths in B.C. in summer 2021. Report to the Chief Coroner of British Columbia. 2022.", url: "https://www2.gov.bc.ca/assets/gov/birth-adoption-death-marriage-and-divorce/deaths/coroners-service/death-review-panel/extreme_heat_death_review_panel_report.pdf" },
  ssc: { id: "ssc-2026", citation: "Prescott HC, Antonelli M, Alhazzani W, and colleagues. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.", url: "https://doi.org/10.1097/CCM.0000000000007075" },
  tunkel: { id: "idsa-meningitis", citation: "Tunkel AR, Hartman BJ, Kaplan SL, and colleagues. Practice guidelines for the management of bacterial meningitis. Infectious Diseases Society of America. Clin Infect Dis. 2004.", url: "https://pubmed.ncbi.nlm.nih.gov/15494903/" },
  rosenCh54: { id: "rosen-ch54", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 54, Thermal Injuries.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh38: { id: "rosen-ch38", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 38, Abdominal Trauma.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh140: { id: "rosen-ch140", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 140, Anticholinergics.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh144: { id: "rosen-ch144", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 144, Cocaine and Other Sympathomimetics.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  sccmRsi: { id: "sccm-rsi", citation: "Acquisto NM, Mosier JM, Bittner EA, and colleagues. Society of Critical Care Medicine clinical practice guidelines for rapid sequence intubation in the critically ill adult patient. Crit Care Med. 2023. doi:10.1097/CCM.0000000000006000", url: "https://pubmed.ncbi.nlm.nih.gov/37707379/" },
  acrSpine: { id: "acr-spine-trauma", citation: "Beckmann NM, West OC, Nunez D Jr, and colleagues. ACR Appropriateness Criteria suspected spine trauma. American College of Radiology. J Am Coll Radiol. 2019. doi:10.1016/j.jacr.2019.02.002", url: "https://pubmed.ncbi.nlm.nih.gov/31054754/" },
  paal: { id: "paal-hypothermia", citation: "Paal P, Pasquier M, Darocha T, and colleagues. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/35010760/" },
  icar: { id: "icar-avalanche", citation: "Pasquier M, Strapazzon G, Kottmann A, and colleagues. On-site treatment of avalanche victims: scoping review and 2023 recommendations of the International Commission for Mountain Emergency Medicine (ICAR MedCom). Resuscitation. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36709825/" },
  wmsFrost: { id: "wms-frostbite", citation: "McIntosh SE, Freer L, Grissom CK, and colleagues. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of frostbite. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38577729/" },
  poole: { id: "poole-yukon", citation: "Poole A, Gauthier J, MacLennan M. Management of severe frostbite with iloprost, alteplase and heparin: a Yukon case series. CMAJ Open. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34021017/" },
  wmsDrown: { id: "wms-drowning", citation: "Davis CA, Schmidt AC, Sempsrott JR, and colleagues. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38379489/" },
  nejmDcs: { id: "nejm-dcs", citation: "Mitchell SJ, Bennett MH, Moon RE. Decompression sickness and arterial gas embolism. N Engl J Med. 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/35353963/" },
  vilke: { id: "vilke-cew", citation: "Vilke G, Chan T, Bozeman WP, Childers R. Emergency department evaluation after conducted energy weapon use: review of the literature for the clinician. J Emerg Med. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31500994/" },
  waldmann: { id: "waldmann-electrical", citation: "Waldmann V, Narayanan K, Combes N, Jost D, Jouven X, Marijon E. Electrical cardiac injuries: current concepts and management. Eur Heart J. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/28444167/" },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/resources/burnreferral/" },
  wmsLightning: { id: "wms-lightning", citation: "Davis C, Engeln A, Johnson EL, and colleagues. Wilderness Medical Society practice guidelines for the prevention and treatment of lightning injuries. 2014 update. Wilderness Environ Med. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25498265/" },
  uhms: { id: "uhms-dcs", citation: "Undersea and Hyperbaric Medical Society. UHMS best practice guidelines: prevention and treatment of decompression sickness and arterial gas embolism. 2011.", url: "https://www.uhms.org/images/DCS-AGE-Committee/dcsandage_prevandmgt_uhms-fi.pdf" },
  friedman: { id: "friedman-ciguatera", citation: "Friedman MA, Fernandez M, Backer LC, and colleagues. An updated review of ciguatera fish poisoning: clinical, epidemiological, environmental, and public health management. Mar Drugs. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28335428/" },
  schipke: { id: "schipke-breath-hold", citation: "Schipke JD, Limper U, Tetzlaff K. Breath-hold diving and decompression sickness. Am J Med. 2026.", url: "https://pubmed.ncbi.nlm.nih.gov/41397651/" },
  smithElec: { id: "smith-electrical", citation: "Smith I, Kidd S, Kim S, Tennill RM. Assessment and management of electrical injuries in adults in the emergency department. Cureus. 2026.", url: "https://pubmed.ncbi.nlm.nih.gov/42147553/" },
  lioresal: { id: "lioresal-pm", citation: "Novartis Pharmaceuticals Canada Inc. Lioresal Intrathecal (baclofen injection) product monograph. Revised 2020.", url: "https://pdf.hres.ca/dpd_pm/00056262.PDF" },
  incecik: { id: "incecik-topiramate", citation: "Incecik F, Herguner MO, Altunbasak S. Hypohidrosis and hyperthermia during topiramate treatment in children. Turk J Pediatr. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23427516/" },
  liu: { id: "liu-electrical", citation: "Liu Y, Jimeno ZKL, Sulaiman WAW. Similarities and differences between lightning and electrical injuries: two case reports. J Trauma Inj. 2025.", url: "https://doi.org/10.20408/jti.2024.0067" },
} satisfies Record<string, Source>;

export const ENVIRONMENTAL_S36: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "environmental-16",
    topic: "environmental",
    title: "Collapse at a mountain aid station",
    stem:
      "A 44-year-old woman is brought to the emergency department by ambulance from a 100 km mountain ultramarathon in the Alberta Rockies. She collapsed at the 78 km aid station, 14 hours after the start. The afternoon high was 21°C. Her pacer says she drank about 750 mL of water or sports drink at each of the 11 aid stations and took ibuprofen 400 mg twice during the race. She weighed 61 kg at race check-in. She has vomited three times. She has no medical history.\n\nShe is disoriented to time and place, with no focal deficit. Her mucous membranes are moist. Her fingers are puffy and her race wristband is tight. Capillary glucose is 6.1 mmol/L.",
    vitals: { temperature: "37.8°C rectal", pulse: "92/minute", resp: "22/minute", bp: "128/80 mmHg", o2sat: "95% on room air", weight: "63 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her confusion?",
        options: ["Exercise-associated hyponatremia", "Exertional heat stroke", "Exertional hypoglycemia", "Hypernatremic dehydration", "Severe heat exhaustion"],
        correct: 0,
        explanation:
          "A normal rectal temperature of 37.8°C with confusion and vomiting, a weight gain from 61 to 63 kg, puffy fingers and an intake of about 8 L (11 x 750 mL) point to exercise-associated hyponatremia. Exertional heat stroke needs a core temperature usually above 40°C with central nervous system dysfunction. Hypernatremic dehydration comes with net fluid loss and weight loss, not gain. A glucose of 6.1 mmol/L excludes hypoglycemia. Heat exhaustion leaves mental status intact.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "wms-eah",
      },
      {
        id: "q2",
        kind: "single",
        update: "Point of care sodium is 121 mmol/L. While you review the result she has a generalized seizure that stops after 90 seconds.",
        prompt: "Which of the following is the most appropriate treatment now?",
        options: ["Fluid restriction until she voids", "Hypertonic saline 3% 100 mL IV", "Lorazepam 2 mg IV and observe", "Normal saline 1 L IV bolus", "Tolvaptan 15 mg PO"],
        correct: 1,
        explanation:
          "A seizure with a sodium of 121 mmol/L is hyponatremic encephalopathy, and the Wilderness Medical Society advises an immediate 100 mL IV bolus of 3% saline, repeated up to twice at 10 minute intervals. Normal saline can lower the sodium further, because vasopressin keeps the kidney retaining free water. Fluid restriction alone is for mild cases without encephalopathy. Lorazepam may stop a seizure but does nothing for cerebral edema. Tolvaptan acts over hours and has no role in acute encephalopathy.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "wms-eah",
      },
      {
        id: "q3",
        kind: "single",
        update: "After two boluses she is alert and oriented. Repeat sodium is 126 mmol/L. She has not voided since the race.",
        prompt: "Which of the following is the most appropriate fluid plan for the next few hours?",
        options: ["Dextrose 5% IV at 100 mL/hour", "Encourage oral sports drinks", "Half normal saline at maintenance", "Normal saline IV at 150 mL/hour", "Restrict fluids until she voids"],
        correct: 4,
        explanation:
          "Her sodium has risen 5 mmol/L (121 to 126) and her symptoms have reversed, which meets the target of about 4 to 5 mmol/L. The guideline then advises restricting oral and IV fluids until urination begins and letting free water excretion correct the rest. Dextrose 5% and half normal saline are hypotonic and contraindicated in fluid overload hyponatremia. Sports drinks are also hypotonic. Normal saline is avoided while she is still retaining water, unless shock or rhabdomyolysis requires it.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "wms-eah",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings in another confused runner should prompt immediate cooling before a sodium result is available?",
        options: ["Hand swelling and a tight wristband", "Heart rate of 118/minute", "Rectal temperature of 40.6°C", "Vomiting four times", "Weight gain of 1.5 kg"],
        correct: 2,
        explanation:
          "Confusion with a rectal temperature of 40.6°C meets the definition of heat stroke, and cooling cannot wait for a laboratory result. The Wilderness Medical Society advises starting cooling at once when hyperthermia is obvious or the diagnosis is uncertain, while preparing hypertonic saline, since the two conditions can coexist. Tachycardia is common to both. Hand swelling, vomiting and weight gain point toward hyponatremia, not heat stroke.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "wms-eah",
      },
    ],
    sources: [S.wmsEah],
    ...META,
  },

  /* 17 ------------------------------------------------------------------ */
  {
    id: "environmental-17",
    topic: "environmental",
    title: "A miner brought up from depth",
    stem: "You are working in a rural hospital emergency department in northern Ontario. It is January and the outdoor temperature is minus 28°C. A 44-year-old miner is brought by the mine's ambulance 50 minutes after he collapsed while shovelling at the 2 400 m level of a deep nickel mine, where the air was 34°C and humid. Diesel loaders were working nearby. His supervisor says he was well and sober at the start of the shift, and he had worked for 7 hours. His coworkers wrapped him in blankets for the drive through the cold. He takes no medications. He is agitated and disoriented. His skin is hot and wet. There is no neck stiffness, rash or sign of head injury.",
    vitals: { temperature: "41.2°C rectal", pulse: "148/minute", resp: "30/minute", bp: "102/58 mmHg", o2sat: "97% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in his management?",
        options: [
          "CT of the head, then cooling",
          "Lumbar puncture, then cooling",
          "Oral fluids and rest in a cool room",
          "Strip the blankets and cool him now",
          "Warmed saline 1 L IV bolus",
        ],
        correct: 3,
        explanation: "Disorientation with a rectal temperature of 41.2°C after 7 hours of heavy work in hot, humid air is exertional heat stroke until proven otherwise, and the time the core stays above about 40.5°C drives the injury. The NATA statement advises starting rapid cooling at once, by cold water immersion where available, and removing excess clothing to speed heat loss, so the blankets come off first. CT and a lumbar puncture can follow once cooling is under way and must not delay it. Oral fluids and rest suit heat exhaustion, where thinking is intact, and he is disoriented. Warmed IV fluid adds heat to a patient who needs to lose it.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "nata-ehi",
      },
      {
        id: "q2",
        kind: "single",
        update: "His blood pressure falls to 86/48 mmHg and his pulse is 150/minute. His lungs are clear. The first IV line has just been placed.",
        prompt: "Which of the following is the most appropriate management of his blood pressure?",
        options: [
          "Continue cooling, crystalloid 1 L IV",
          "Continue cooling, crystalloid 3 L IV over 1 hour",
          "Continue cooling, norepinephrine infusion",
          "Pause cooling, crystalloid 1 L IV",
          "Pause cooling until his blood pressure recovers",
        ],
        correct: 0,
        explanation: "Health Canada's technical guide lists shock among the complications of heat stroke, but low blood pressure does not change the first priority. The guide states that the primary goal must be to cool quickly, and that the risk of organ damage and death rises with the time the core stays hot. So cooling goes on while his pressure is treated, and pausing it, with or without fluid, only prolongs that time. The guide warns that fluid loss may be limited in heat stroke and that brisk IV fluid at 3 to 4 L an hour can cause pulmonary edema and heart failure. It gives about 1 L of crystalloid, within a range of 0.5 to 2.5 L, as the usual need. So 1 L and a reassessment is the right start, and 3 L in an hour is the rate it warns against. His line has only just gone in and he has had no fluid, so a norepinephrine infusion comes too early.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "hc-heat",
      },
      {
        id: "q3",
        kind: "single",
        update: "His rectal temperature reaches 38.6°C and active cooling is stopped. He becomes oriented and is covered with a dry sheet. The air ambulance crew arrives 40 minutes later. His rectal temperature is now 39.9°C, and he is restless and confused again.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Acetaminophen 1 g PR, then recheck in 1 hour",
          "Dantrolene 2.5 mg/kg IV",
          "Recheck his rectal temperature in 30 minutes",
          "Restart active cooling now",
          "Tympanic temperature to confirm the reading",
        ],
        correct: 3,
        explanation: "A rectal temperature that climbs from 38.6°C to 39.9°C after cooling stopped, with his confusion back, is rebound hyperthermia. It is treated like the first rise, by cooling again at once. A 2026 consensus statement in BMJ Military Health warns that rebound hyperthermia can occur after cooling and calls for continued monitoring to prevent further tissue injury. It also sets the resolution of hyperthermia as the priority. Waiting 30 minutes to recheck leaves him hot and confused for longer. Health Canada's technical guide notes that tympanic readings do not match core temperature well in heat illness, so a tympanic check adds nothing to the rectal reading he already has. The same guide states that antipyretics have not been shown to work in heat stroke, and that dantrolene is not as effective as direct cooling.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "leckie-ehi",
      },
      {
        id: "q4",
        kind: "single",
        update: "A coworker from the same crew arrives an hour later with headache, nausea and heavy sweating after the same shift. He is alert and oriented. His rectal temperature is 39.2°C, and his other vital signs are normal.",
        prompt: "Which of the following is the most appropriate management for the coworker?",
        options: [
          "Discharge home to rest, untreated",
          "Observe seated in the waiting room",
          "Rest in a cool area with fans and fluids",
          "Return to the same shift after an hour of rest",
          "Transfer with the first miner",
        ],
        correct: 2,
        explanation: "Headache, nausea and heavy sweating with a clear mind and a rectal temperature of 39.2°C fit heat exhaustion, not heat stroke, which brings central nervous system dysfunction and a core temperature usually above 40.5°C. The NATA statement advises removing excess clothing, moving him to a cool area, cooling further with fans or ice towels if needed and giving fluids while his vital signs are watched. Same-day return to activity is not recommended after heat exhaustion. Sending him home or leaving him seated without cooling skips that treatment, and he has no feature that needs transfer.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "nata-ehi",
      },
    ],
    sources: [
      {
        id: "nata-ehi",
        citation: "Casa DJ, DeMartini JK, Bergeron MF, and colleagues. National Athletic Trainers' Association position statement: exertional heat illnesses. J Athl Train. 2015.",
        url: "https://doi.org/10.4085/1062-6050-50.9.07",
      },
      {
        id: "hc-heat",
        citation: "Health Canada. Extreme heat events guidelines: technical guide for health care workers. Section 5.2.7, Heat stroke. Ottawa: Health Canada. 2011.",
        url: "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/climate-change-health/extreme-heat-events-guidelines-technical-guide-health-care-workers.html",
      },
      {
        id: "leckie-ehi",
        citation: "Leckie T, Stourton F, Fitzpatrick D, and colleagues. Operationalising prehospital management of exertional heat illness in athletes and team sports. Consensus statement. BMJ Mil Health. 2026.",
        url: "https://doi.org/10.1136/military-2025-003116",
      },
    ],
    ...META,
    version: 3,
  },

  /* 18 ------------------------------------------------------------------ */
  {
    id: "environmental-18",
    topic: "environmental",
    alsoTopics: ["infectious-diseases"],
    title: "A tree planter brought in from camp",
    stem:
      "You are working in a rural hospital emergency department in northwestern Ontario. A 20-year-old man is brought in at 18:00 by his crew boss from a tree planting camp. It was 31°C and he planted all day. His coworkers say he had a headache and felt feverish from early morning, before work began, and vomited twice at lunch. He became confused on the drive in. He has no medical history and takes no medications.\n\nHe is agitated and disoriented. There are several non-blanching purple spots on both shins and on his trunk. Neck flexion is painful. His skin is hot and sweaty.",
    vitals: { temperature: "40.4°C rectal", pulse: "132/minute", resp: "26/minute", bp: "94/52 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his illness?",
        options: ["Exertional heat stroke", "Immune thrombocytopenia", "Meningococcal septicemia", "Serotonin toxicity", "Viral meningitis"],
        correct: 2,
        explanation:
          "Headache and fever that began before any exertion, followed by vomiting, confusion, meningism, hypotension and a non-blanching purpuric rash, point to invasive meningococcal disease. Heat stroke can cause purpura through disseminated intravascular coagulation, but it would not explain symptoms that started before work. Immune thrombocytopenia causes petechiae without fever or meningism. He takes no serotonergic drugs. Viral meningitis does not cause purpura or shock.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "idsa-meningitis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step?",
        options: ["Blood culture and CBC, then decide", "Ceftriaxone 2 g IV immediately", "Cooling alone and reassess in 1 hour", "CT head, then lumbar puncture", "Lumbar puncture before antibiotics"],
        correct: 1,
        explanation:
          "Suspected meningococcal septicemia with shock needs antibiotics at once, and ceftriaxone 2 g IV covers Neisseria meningitidis. Blood cultures can be drawn first only if they cause no delay. The IDSA guideline adds vancomycin and dexamethasone for suspected bacterial meningitis. Waiting for a CBC, for a CT or for a lumbar puncture delays treatment of a disease that can kill within hours. He is also too unstable for a lumbar puncture now. Cooling does not treat the infection.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "idsa-meningitis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to his temperature of 40.4°C?",
        options: ["Acetaminophen and observe for 1 hour", "Cooling once heat stroke is confirmed", "Dantrolene 2.5 mg/kg IV", "Simultaneous cooling and antibiotics", "No cooling until the CT is reviewed"],
        correct: 3,
        explanation:
          "He worked all day at 31°C and is confused with a temperature above 40°C, so heat stroke may be adding to the infection, and the cause cannot be confirmed quickly. Severe hyperthermia with altered mental status is cooled at once with physical methods while the antibiotics run. Waiting for confirmation or for imaging prolongs the time spent above 40°C. Acetaminophen alone is too slow. Dantrolene has no proven role in heat stroke or sepsis.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "wms-heat",
      },
    ],
    sources: [S.tunkel, S.wmsHeat],
    ...META,
  },

  /* 19 ------------------------------------------------------------------ */
  {
    id: "environmental-19",
    topic: "environmental",
    title: "A firefighter flown in from the fire line",
    stem:
      "You are working in a regional hospital emergency department in the interior of British Columbia. A 27-year-old man is brought by helicopter from a wildfire, where he had been cutting fireline in protective gear for 9 hours at 33°C. He became confused and fell. The flight crew poured water over him and gave 1 L of normal saline. On arrival he has a generalized seizure that stops after midazolam 5 mg IV. He then responds only to pain and has snoring respirations. He has no medical history and takes no medications.",
    vitals: { temperature: "41.8°C rectal", pulse: "148/minute", resp: "30/minute", bp: "104/58 mmHg", o2sat: "93% on room air", weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "You decide to intubate him. Point of care potassium is 6.3 mmol/L and creatinine is 188 umol/L. His ECG shows peaked T waves.",
        prompt: "Which of the following neuromuscular blockers is most appropriate for his rapid sequence intubation?",
        options: ["Cisatracurium 0.15 mg/kg IV", "Pancuronium 0.1 mg/kg IV", "Rocuronium 1.2 mg/kg IV", "Succinylcholine 1.5 mg/kg IV", "Vecuronium 0.1 mg/kg IV"],
        correct: 2,
        explanation:
          "Succinylcholine raises serum potassium, which is dangerous at 6.3 mmol/L with ECG changes and likely rhabdomyolysis from exertional heat stroke. The Society of Critical Care Medicine suggests either rocuronium or succinylcholine for rapid sequence intubation when succinylcholine has no known contraindication. Rocuronium 1.2 mg/kg, about 100 mg at 85 kg, gives rapid intubating conditions without raising potassium. Cisatracurium, pancuronium and vecuronium at these doses take several minutes to work, which is too slow for rapid sequence intubation.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "sccm-rsi",
      },
      {
        id: "q2",
        kind: "single",
        update: "He is intubated and sedated. His rectal temperature is 41.6°C. There is no immersion tub in the department.",
        prompt: "Which of the following is the most effective way to cool him now?",
        options: ["Cold IV saline 30 mL/kg alone", "Cooling blanket and ice to the groin", "Evaporative mist with fans", "Ice packs to neck, axillae and groin", "Tarp-assisted ice water immersion"],
        correct: 4,
        explanation:
          "A tarp held around him by staff, filled with ice water, gives cooling rates close to tub immersion and can be done on a stretcher in an intubated patient. Cooling is urgent because the time spent above 40°C drives organ injury. Cold IV saline alone lowers temperature slowly and adds a large volume in a patient with acute kidney injury. Evaporative cooling, ice packs and cooling blankets all cool much more slowly than immersion.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
      {
        id: "q3",
        kind: "single",
        update: "Tarp immersion lowers his rectal temperature to 38.9°C in 22 minutes, and cooling is stopped. His ALT, INR and platelet count on arrival were normal.",
        prompt: "Which of the following is the most appropriate plan for his liver and clotting tests?",
        options: ["No repeat after normal arrival values", "Repeat once at 6 hours", "Repeat only if bleeding or jaundice", "Serial testing over the next few days", "Single check at a 1 week clinic visit"],
        correct: 3,
        explanation: "Organ injury after exertional heat stroke may not show on arrival. The ACSM consensus lists liver failure and disseminated intravascular coagulation among the common sequelae and calls for serial testing to measure the damage, and in a large series liver markers peaked within 4 days of the injury. Normal values at arrival therefore do not end the monitoring. A single repeat at 6 hours can come before the peak. Waiting for bleeding or jaundice detects liver failure or coagulopathy late. A clinic check at 1 week misses the period of highest risk.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
    ],
    sources: [S.sccmRsi, S.acsm],
    ...META,
  },

  /* 20 ------------------------------------------------------------------ */
  {
    id: "environmental-20",
    topic: "environmental",
    title: "A football player cooled on the sideline",
    stem:
      "A 16-year-old boy is brought to the emergency department by ambulance from a high school football practice in southern Ontario in late August. The humidex was 39. He was doing conditioning sprints in full equipment when he stumbled and became confused. The athletic therapist measured a rectal temperature of 41.6°C, removed his equipment and immersed him in an ice water tub on the sideline for 14 minutes, until his rectal temperature was 38.9°C. She then called EMS. He has no medical history.\n\nHe is oriented but slow to answer. The examination is otherwise normal.",
    vitals: { temperature: "38.4°C rectal", pulse: "108/minute", resp: "20/minute", bp: "112/64 mmHg", o2sat: "98% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this boy?",
        options: ["Cardiac syncope from arrhythmia", "Exercise-associated hyponatremia", "Exertional heat stroke", "Exertional sickling collapse", "Heat exhaustion with dehydration"],
        correct: 2,
        explanation:
          "He was confused with a rectal temperature of 41.6°C during exertion in the heat, which meets the definition of exertional heat stroke. The ED temperature of 38.4°C reflects effective cooling and must not be used to downgrade the diagnosis. Heat exhaustion does not cause confusion. Hyponatremia would not explain a core temperature above 40°C. Sickling collapse and arrhythmic syncope do not produce this degree of hyperthermia.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
      {
        id: "q2",
        kind: "single",
        update: "His CK is 4200 U/L, creatinine 128 umol/L, ALT 96 U/L and sodium 141 mmol/L. His mental status is now normal.",
        prompt: "Which of the following is the most appropriate disposition for him now?",
        options: ["Admit for IV fluids and serial labs", "Discharge after 2 L of oral fluids", "Discharge with CK recheck in 1 week", "ICU admission for dantrolene", "Observe 4 hours, then discharge"],
        correct: 0,
        explanation:
          "A creatinine of 128 umol/L and a CK of 4200 U/L show early kidney and muscle injury, and liver and coagulation injury often peak 24 to 48 hours after heat stroke. He needs admission for IV fluids and repeat creatinine, CK, liver enzymes and coagulation tests. Discharge after oral fluids or a short observation would miss this evolution. Dantrolene has no proven role, and his normal mental status does not require ICU care.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
      {
        id: "q3",
        kind: "single",
        update: "He recovers and his laboratory values return to normal by day 4. He asks when he can play again.",
        prompt: "Which of the following is the most appropriate advice about his return to football?",
        options: ["Full practice once he feels well", "Light practice in full gear in 2 days", "Permanent exclusion from contact sport", "Rest 7 days, then a graded return", "Return after one normal CK result"],
        correct: 3,
        explanation:
          "The ACSM advises no exercise for at least 7 days after release from care, then a review of end organ function. After that he starts exercise in a cool setting and increases duration, intensity and heat exposure over 2 to 4 weeks. Returning when he feels well, or after one normal CK, skips the rest period and acclimatization. Early practice in full gear adds heat stress too soon. One episode of heat stroke does not require permanent exclusion.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
    ],
    sources: [S.acsm],
    ...META,
  },

  /* 21 ------------------------------------------------------------------ */
  {
    id: "environmental-21",
    topic: "environmental",
    title: "Two skiers from the same slide",
    stem:
      "You are working in a rural hospital emergency department in the Selkirk Mountains of British Columbia. The nearest centre offering extracorporeal life support (ECLS) is 2 hours away by air. A helicopter brings two backcountry skiers who were fully buried in the same avalanche.\n\nThe first, a 34-year-old man, was dug out after 20 minutes with snow packed in his mouth and nose. He had no signs of life when uncovered. CPR has continued for 35 minutes and he is in asystole. His core temperature is 34.6°C.\n\nThe second, a 29-year-old woman, was found after 95 minutes under 1.5 m of snow with a clear air pocket in front of her face. She responds only to pain and has no apparent injuries. Her vital signs are below.",
    vitals: { temperature: "26.4°C core", pulse: "38/minute", resp: "6/minute", bp: "78/40 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of the man who was buried for 20 minutes?",
        options: ["Continue CPR until core temperature is 35°C", "Intermittent CPR during transport", "Measure potassium to guide the decision", "Stop resuscitation efforts", "Transfer for ECLS with mechanical CPR"],
        correct: 3,
        explanation:
          "A burial of 20 minutes with an obstructed airway and a core temperature of 34.6°C means an asphyxial arrest, not a hypothermic one. ICAR 2023 treats such victims as normothermic arrests and defers the decision to stop to standard termination guidance, and 35 minutes of CPR in asystole with no hypothermia or other reversible cause meets it. Continuing until 35°C and ECLS apply to hypothermic arrest, which needs a core temperature below 30°C. Potassium helps triage victims buried more than 60 minutes. Intermittent CPR is for patients below 28°C.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "icar-avalanche",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the woman?",
        options: ["Active external rewarming, then reassess", "Bladder lavage with warmed saline", "Forced air warming and admission here", "Transfer to an ECLS centre now", "Warm peritoneal lavage in this ED"],
        correct: 3,
        explanation:
          "A core temperature of 26.4°C, which is below 30°C, and a systolic BP of 78 mmHg, which is below 90 mmHg, each place her at high risk of cardiac arrest. Either one is a criterion for direct transfer to an ECLS centre, with ECLS ready if she arrests. External rewarming here and reassessing wastes the time she needs for transfer. Bladder lavage adds less than 0.5°C per hour. Peritoneal lavage is reserved for when ECLS cannot be reached within about 6 hours.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan for the woman before the flight?",
        options: ["Defer intubation until rewarmed", "Intubate before departure", "Nasal high flow oxygen", "Oxygen by face mask only", "Supraglottic airway in flight"],
        correct: 1,
        explanation: "She responds only to pain and breathes 6/minute, so she can neither protect her airway nor ventilate adequately for a 2 hour flight, and her airway is secured in the warm department before departure. The risk that intubation triggers a malignant arrhythmia in a hypothermic patient is minimal compared with the benefit of oxygenation and airway protection, so it is not deferred until she is warm. High flow nasal oxygen and a face mask give oxygen but do not treat hypoventilation or protect the airway. A supraglottic airway placed in flight is a rescue device, not a planned airway for a long transfer in a cramped cabin.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q4",
        kind: "single",
        update: "During loading she goes into ventricular fibrillation. Three shocks fail. Her core temperature is 26.2°C.",
        prompt: "Which of the following is the most appropriate next step in her resuscitation?",
        options: ["Amiodarone 300 mg IV", "Local rewarming before transfer", "Stop resuscitation after 20 minutes", "Thoracic lavage in this ED", "Transport with ongoing mechanical CPR"],
        correct: 4,
        explanation:
          "Her arrest is hypothermic, since she was buried more than 60 minutes with an air pocket and is at 26.2°C, so the goal is continuous CPR all the way to the ECLS centre, with a mechanical device keeping compressions effective in the aircraft. Local rewarming and thoracic lavage are for when ECLS cannot be reached within about 6 hours, and here it is 2 hours away. The Paal review, following European guidance, withholds amiodarone and epinephrine below 30°C and delays further shocks after three. North American guidance is more permissive about shocks and drugs, but under either approach they must not delay departure. Stopping at 20 minutes ignores that hypothermic arrest can end in full recovery after hours of CPR.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.icar, S.paal],
    ...META,
  },

  /* 22 ------------------------------------------------------------------ */
  {
    id: "environmental-22",
    topic: "environmental",
    title: "A hunter brought in by sled",
    stem:
      "You are working at a nursing station in a fly-in community in Nunavut. There is no low-reading thermometer. A 46-year-old man is brought in by relatives on a sled after his snowmobile broke down and he spent 14 hours out on the land at minus 32°C. He has no medical history.\n\nHe opens his eyes and mumbles to voice but is not oriented. He is not shivering. His fingers on both hands are white and hard. The triage thermometer reads LO. The medevac aircraft will arrive in 2 hours.",
    vitals: { pulse: "44/minute", resp: "10/minute", bp: "88/50 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his stage and risk using the revised Swiss system?",
        options: ["Stage I, low risk of arrest", "Stage II, moderate risk of arrest", "Stage III, high risk of arrest", "Stage IV, hypothermic cardiac arrest", "Unstageable without a core reading"],
        correct: 1,
        explanation:
          "The revised Swiss system stages hypothermia by level of consciousness on the AVPU scale when core temperature cannot be measured. He responds to voice, which is stage II with a moderate risk of cardiac arrest. Stage I is alert, stage III responds only to pain or is unresponsive with vital signs, and stage IV has no vital signs. The system exists so that treatment is not delayed when no low-reading thermometer is available.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment at the nursing station while awaiting the aircraft?",
        options: ["Heat packs to the trunk and insulation", "Immerse his hands in 38°C water now", "Rub his hands to restore circulation", "Walk to the plane to generate heat", "Warm bath for the whole body"],
        correct: 0,
        explanation:
          "Stage II hypothermia needs active rewarming, and heat applied to the trunk under insulation and a vapour barrier is the practical method at a nursing station. Walking and a warm bath both return cold peripheral blood and can cause afterdrop and collapse. Frozen fingers are thawed only once circulation and core temperature are stable and there is no risk of refreezing during a cold flight. Rubbing frozen tissue adds mechanical injury.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate destination for the medevac flight?",
        options: ["Closest hospital with a CT scanner", "Closest hospital with an ICU", "Nearest community health centre", "Regional hospital with dialysis", "Tertiary centre offering ECLS"],
        correct: 4,
        explanation:
          "A systolic BP of 88 mmHg is below 90 mmHg, and with stage II hypothermia and a pulse of 44/minute he is at risk of cardiac arrest. Guidelines advise direct transfer to a centre that can provide ECLS, even when it is farther away, because a hypothermic arrest elsewhere has far worse survival. A hospital with an ICU or a CT scanner but no ECLS cannot rescue an arrest. Dialysis based rewarming is a fallback only when ECLS is unavailable.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to monitor his core temperature during the flight?",
        options: ["Esophageal probe via the nose", "Infrared ear thermometer", "Oral digital thermometer", "Temporal artery scanner", "Thermistor probe in the ear canal"],
        correct: 4,
        explanation:
          "In a patient who is not intubated, a thermistor-based epitympanic probe in an insulated ear canal gives a continuous estimate of core temperature. An esophageal probe is the choice once the airway is secured but is relatively contraindicated without one. Infrared ear thermometers are for screening only and do not read reliably in the cold. Oral and temporal artery devices do not measure core temperature and often cannot read below about 34°C.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
  },

  /* 23 ------------------------------------------------------------------ */
  {
    id: "environmental-23",
    topic: "environmental",
    title: "Found on his driveway at dawn",
    stem:
      "A 71-year-old man is brought to the emergency department by ambulance in February. A newspaper carrier found him at 06:00 lying on his icy driveway in Thunder Bay, where the overnight low was minus 24°C. He was last seen at 23:00 taking out his garbage. He has end-stage kidney disease treated with hemodialysis through a left arm fistula, and his last session was 2 days ago. He takes apixaban for atrial fibrillation.\n\nHe is shivering. He opens his eyes to pain, makes incomprehensible sounds and localizes to pain. There is an abrasion over the right occiput. His capillary glucose is 6.1 mmol/L. His temperature was measured with a low-reading rectal probe.",
    vitals: { temperature: "33.2°C rectal", pulse: "52/minute irregular", resp: "12/minute", bp: "108/64 mmHg", o2sat: "94% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best shows that hypothermia alone does not explain his condition?",
        options: ["GCS of 9 at 33.2°C", "Heart rate of 52/minute", "Respiratory rate of 12/minute", "Shivering at 33.2°C", "Systolic pressure of 108 mmHg"],
        correct: 0,
        explanation:
          "At 33.2°C he is in the mild stage of hypothermia, in which patients are expected to be conscious and shivering. His shivering fits that temperature, but a GCS of 9 (E2 V2 M5) does not. Paal and colleagues note that consciousness can be impaired by trauma, central nervous system conditions, toxins and drugs independent of core temperature, so his depressed level of consciousness needs its own explanation. With an occipital abrasion and apixaban, an intracranial bleed comes first, while rewarming continues. A slow irregular pulse, a systolic pressure of 108 mmHg and a respiratory rate of 12/minute are all compatible with hypothermia, in which bradycardia and low blood pressure reflect the fall in metabolism.",
        keyFeature: { topic: "loc", n: 4 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        update: "His trauma imaging shows no bleeding or injury. His potassium is 6.4 mmol/L and urea 36 mmol/L. After 1 hour of forced air warming and warmed IV fluid, his rectal temperature is unchanged at 33.2°C. His BP is 116/70 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his rewarming?",
        options: ["Bladder lavage with warm saline", "Closed thoracic lavage", "Continue forced air warming alone", "ECLS at a cardiac surgery centre", "Hemodialysis through his fistula"],
        correct: 4,
        explanation:
          "A core temperature that stays the same after an hour of active external rewarming is a sign of failure to rewarm, and active internal rewarming should be added. Hemodialysis adds about 2 to 3°C an hour when the patient can raise cardiac output to perfuse the circuit, and his BP of 116/70 mmHg allows it. The circuit needs heparin, which is easier to accept on apixaban now that imaging shows no bleeding. His fistula gives ready access, and dialysis also treats his potassium of 6.4 mmol/L. Bladder lavage adds less than 0.5°C an hour and is not recommended. Continuing forced air alone persists with a method that has failed. ECLS is the preferred method for cardiac arrest, and he has a stable circulation. Thoracic lavage through chest tubes is very invasive and is kept for unstable patients when ECLS is not available.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following core temperatures should be the goal of his rewarming?",
        options: ["34°C", "35°C", "36°C", "37°C", "38°C"],
        correct: 3,
        explanation:
          "For a patient with a spontaneous circulation and a core temperature of 33 to 36°C, Paal and colleagues set the goal of rewarming as normothermia, a core temperature of about 37°C. A target of 34, 35 or 36°C stops short of that goal, and at the lower end slowing of the heart and impaired consciousness from cold can persist and cloud his assessment. A target of 34°C borrows from therapeutic hypothermia, which the review separates from accidental hypothermia and does not apply to him. A target of 38°C overshoots the goal into fever.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
    version: 2,
  },

  /* 24 ------------------------------------------------------------------ */
  {
    id: "environmental-24",
    topic: "environmental",
    title: "A toddler found in a neighbour's yard",
    stem:
      "A 2-year-old boy is brought to the emergency department by ambulance in Regina in February. He left the house unnoticed in his pyjamas and was found 70 minutes later in a neighbour's yard at minus 22°C. He is drowsy but rouses to voice and whimpers. He is not shivering. His hands and feet are cold and red, with soft tissue. Capillary glucose is 2.4 mmol/L. He has no medical history.",
    vitals: { temperature: "31.6°C rectal", pulse: "78/minute", resp: "18/minute", bp: "80/48 mmHg", o2sat: "95% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his capillary glucose of 2.4 mmol/L?",
        options: ["dextrose 10% 60 mL IV", "glucagon 0.5 mg IM", "oral glucose gel 15 g", "warm apple juice 120 mL PO", "No treatment until rewarmed"],
        correct: 0,
        explanation:
          "Hypoglycemia in a drowsy hypothermic child needs IV dextrose now, and 5 mL/kg of dextrose 10% is 60 mL at 12 kg, which gives 6 g. IM glucagon is absorbed poorly from cold, vasoconstricted muscle and needs glycogen stores that cold exposure depletes. Oral gel or juice risks aspiration while he is drowsy. Waiting until he is rewarmed leaves the brain without fuel.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        update: "Forced air warming and warmed fluids are started. After 40 minutes his rectal temperature is 33.0°C and his BP falls to 64/36 mmHg. He still rouses to voice.",
        prompt: "Which of the following is the most appropriate treatment for his fall in blood pressure?",
        options: ["Epinephrine infusion 0.1 mcg/kg/minute", "Hydrocortisone 24 mg IV", "Stop active rewarming for 1 hour", "Warmed normal saline 240 mL IV", "Warmed normal saline 600 mL IV"],
        correct: 3,
        explanation:
          "As he rewarms, cold-induced vasoconstriction releases and his vascular space expands after cold diuresis, which causes rewarming hypotension. A warmed isotonic bolus of 20 mL/kg, 240 mL at 12 kg, is the first treatment. 600 mL is 50 mL/kg as one bolus, which is too much. Vasopressors work poorly and are arrhythmogenic in a cold heart. Stopping rewarming prolongs his hypothermia. He has no history suggesting adrenal insufficiency.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following new findings would most clearly require transfer to a centre able to provide ECLS?",
        options: ["Blood glucose of 3.1 mmol/L", "Core temperature of 32.4°C", "Pulse of 72/minute", "Red, swollen fingers", "Ventricular tachycardia"],
        correct: 4,
        explanation:
          "Ventricular arrhythmia in a hypothermic patient signals a high risk of cardiac arrest and is one of the criteria for transfer to an ECLS centre, along with arrest, a core temperature below 30°C and, in adults, a systolic BP below 90 mmHg. A core temperature of 32.4°C shows he is rewarming. A pulse of 72/minute is expected sinus bradycardia at this temperature. Mild hypoglycemia is treated with dextrose. Red, swollen fingers are superficial cold injury.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
  },

  /* 25 ------------------------------------------------------------------ */
  {
    id: "environmental-25",
    topic: "environmental",
    title: "Through the ice on a March afternoon",
    stem:
      "A 39-year-old man is brought to the emergency department by ambulance after his snowmobile broke through the ice on Lake of the Woods, Ontario. He held onto the ice edge for about 25 minutes until firefighters pulled him out. He inhaled some water and has been coughing. He is alert and oriented and shivering hard. His wet clothes have been cut off and he is under blankets. There are fine crackles at both lung bases. He has no medical history.",
    vitals: { temperature: "33.8°C rectal", pulse: "96/minute", resp: "24/minute", bp: "134/82 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage his temperature?",
        options: ["Exercise on the spot to generate heat", "Hot shower as soon as possible", "Transfer to an ECLS centre", "Warm sweet drinks and insulation", "Warmed IV saline as the sole method"],
        correct: 3,
        explanation:
          "He is alert and shivering hard at 33.8°C, which is mild hypothermia with a low risk of cardiac arrest. Insulation, removal of wet clothes and warm sweet drinks let his own shivering rewarm him, and forced air can be added. Exercise increases afterdrop, and patients found lying down should not walk until they have taken calories and shivered for about 30 minutes. A hot shower would take a hypoxemic patient upright and away from oxygen and monitoring. ECLS is reserved for arrest or instability. Warmed IV fluids do not rewarm on their own.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for his cough and hypoxemia?",
        options: ["Discharge once he is rewarmed", "Empiric antibiotics for aspiration", "Furosemide for pulmonary edema", "Oxygen and admission for observation", "Steroids to limit lung injury"],
        correct: 3,
        explanation:
          "Coughing, bilateral crackles and an SpO2 of 91% after aspirating water mean a symptomatic drowning, and lung injury can worsen over the next hours. He needs oxygen and admission for observation. Discharge is only for drowning patients who stay symptom free for several hours. Prophylactic antibiotics and corticosteroids are not recommended. The pulmonary edema of drowning is from lung injury, not fluid overload, so furosemide does not help.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "wms-drowning",
      },
      {
        id: "q3",
        kind: "single",
        update: "His companion, a 58-year-old man, held on in the water for 45 minutes. He was talking until firefighters lifted him upright out of the water, when he lost his pulse.",
        prompt: "Which of the following most likely caused the companion to lose his pulse during the rescue?",
        options: ["Cold shock hyperventilation", "Hypotension on vertical extraction", "Myocardial infarction on exertion", "Pulmonary embolism from immobility", "Sudden release of potassium"],
        correct: 1,
        explanation:
          "Collapse during extrication, called rescue collapse, is most often caused by hypovolemia and by movement that triggers arrhythmia in a cold heart. Lifting him upright removed the water pressure that had supported his venous return, so rescuers lift hypothermic patients horizontally. Cold shock hyperventilation occurs in the first minutes of immersion, not at 45 minutes. Infarction and embolism are possible but far less likely in this sequence. Hyperkalemia follows cell death, not extraction.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal, S.wmsDrown],
    ...META,
  },

  /* 26 ------------------------------------------------------------------ */
  {
    id: "environmental-26",
    topic: "environmental",
    title: "Three days without power",
    stem:
      "You are working in a community hospital emergency department in eastern Ontario. The nearest ECLS centre is 90 minutes away by road. A 79-year-old woman is brought in by ambulance on the third day of a power outage after an ice storm. Her son found her on the kitchen floor of her unheated house. She fell during the night and could not get up. She has hypertension and takes amlodipine.\n\nShe responds to voice with confused speech and is not shivering. The left leg is shortened and externally rotated. Her ECG shows atrial fibrillation with J waves. Capillary glucose is 6.4 mmol/L.",
    vitals: { temperature: "32.8°C rectal", pulse: "58/minute irregular", resp: "14/minute", bp: "102/58 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of her atrial fibrillation?",
        options: ["Amiodarone 150 mg IV", "Continue rewarming and observe", "Diltiazem 10 mg IV", "Heparin infusion now", "Synchronized cardioversion"],
        correct: 1,
        explanation:
          "Atrial fibrillation is common in hypothermia and usually resolves as the patient rewarms, so rewarming and monitoring are the treatment. Her ventricular rate of 58/minute and BP of 102/58 mmHg need no rate control. Amiodarone and diltiazem add bradycardia and hypotension in a cold heart. Cardioversion often fails while she is still cold, and handling risks ventricular fibrillation. Anticoagulation is not urgent for new atrial fibrillation that is expected to resolve, and her shortened, externally rotated leg suggests a hip fracture.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "After 2 hours of forced air warming and warmed fluids her rectal temperature has fallen to 31.8°C. Lactate has risen from 2.1 to 4.6 mmol/L and her BP is 84/50 mmHg.",
        prompt: "Which of the following tests are most useful to look for a cause of her failure to rewarm?",
        options: ["Blood cultures", "Carboxyhemoglobin level", "D-dimer level", "Serum cortisol", "Serum lipase", "Troponin level", "TSH and free T4", "Urine drug screen"],
        correct: [0, 3, 6],
        explanation:
          "A core temperature that falls despite active external rewarming, with a rising lactate and falling BP, suggests a secondary cause that limits heat production. Major infection is a common treatable cause, so blood cultures are drawn and antibiotics considered. Hypothyroidism and adrenal insufficiency also impair thermogenesis, so TSH, free T4 and cortisol are sent. D-dimer and troponin are often abnormal in hypothermia and do not explain it. Lipase, carboxyhemoglobin and a urine drug screen do not address the common endocrine and septic causes.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her rewarming?",
        options: ["Add a second forced air blanket", "Continue and reassess in 2 hours", "Norepinephrine to a MAP of 65 mmHg", "Transfer for ECLS rewarming", "Warmed IV fluid boluses only"],
        correct: 3,
        explanation:
          "A falling core temperature, a rising lactate and falling BP are the signs of failed rewarming, and they call for active internal rewarming, preferably with ECLS. Her systolic BP of 84 mmHg is now below 90 mmHg, a criterion for direct transfer to an ECLS centre. Her core temperature has also fallen below 32°C, which Paal lists as a transfer criterion in older or comorbid patients, because they can arrest at higher temperatures. On arrival, at 32.8°C with a systolic BP above 90 mmHg, she met no transfer criterion. More forced air or warmed fluids repeats a strategy that has failed. Waiting 2 hours risks arrest. Vasopressors are poorly effective and arrhythmogenic in a cold heart and do not fix the cause.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
  },

  /* 27 ------------------------------------------------------------------ */
  {
    id: "environmental-27",
    topic: "environmental",
    title: "A trapper during a blizzard",
    stem:
      "You are working in a regional hospital emergency department in northern Manitoba. The nearest ECLS centre is 750 km away. A blizzard has grounded all aircraft for at least 12 hours. A 41-year-old man is brought in by ground ambulance after he was found face down in the snow beside his stalled snowmobile. He was last seen 10 hours earlier. Paramedics found him in ventricular fibrillation and have done CPR for 50 minutes. He has no visible injuries.\n\nHe is intubated. A mechanical CPR device is running. His esophageal temperature is 19.8°C. Potassium is 4.1 mmol/L.",
    vitals: { temperature: "19.8°C core" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate overall plan for his resuscitation?",
        options: ["Air transfer once the storm clears", "Declare death, since ECLS is unavailable", "Local non-ECLS rewarming with CPR", "Road transfer with manual CPR", "Stop after 30 minutes of hospital CPR"],
        correct: 2,
        explanation:
          "His arrest is almost certainly hypothermic, with a core temperature of 19.8°C, no trauma and a potassium of 4.1 mmol/L, so he may survive neurologically intact. When an ECLS centre cannot be reached within about 6 hours, guidelines advise rewarming with local non-ECLS methods while CPR continues. Waiting 12 hours for aircraft delays rewarming. A 750 km road trip with manual CPR cannot deliver good compressions. Stopping at a fixed time or because ECLS is unavailable abandons a potentially survivable arrest.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most effective rewarming method to add during CPR in this hospital?",
        options: ["Bladder irrigation with warmed saline", "Heat packs to the hands and feet", "Humidified oxygen at 40°C alone", "IV fluids at 40°C as the sole method", "Warmed peritoneal lavage via catheter"],
        correct: 4,
        explanation:
          "Peritoneal lavage with warmed fluid is an internal rewarming method that a general hospital can provide during CPR, and guidelines list it with forced air and heating blankets for non-ECLS rewarming. Bladder irrigation adds less than 0.5°C per hour because of its small surface area. Warmed IV fluids and humidified oxygen prevent further heat loss but do not rewarm on their own. Heat to the hands and feet does little for the core and may cause burns on cold skin.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        update: "The mechanical CPR device fails and the team is exhausted. His core temperature is still 19.8°C.",
        prompt: "Which of the following intermittent CPR patterns is acceptable until continuous compressions can resume?",
        options: ["2 minutes on, up to 2 minutes off", "5 minutes on, up to 5 minutes off", "5 minutes on, up to 10 minutes off", "5 minutes on, up to 20 minutes off", "10 minutes on, up to 30 minutes off"],
        correct: 2,
        explanation:
          "When continuous CPR is impossible in severe hypothermic arrest, the ERC based algorithm allows alternating at least 5 minutes of CPR with pauses. Below 20°C, as here at 19.8°C, pauses of up to 10 minutes are acceptable. Between 20 and 28°C pauses are limited to 5 minutes. Longer pauses and cycles of 2 minutes are not part of the algorithm. Continuous compressions should resume as soon as staff or a device allow.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal],
    ...META,
  },

  /* 28 ------------------------------------------------------------------ */
  {
    id: "environmental-28",
    topic: "environmental",
    title: "A drive over the pass after two lake dives",
    stem:
      "You are working in a rural hospital emergency department in the Kootenay region of British Columbia. A 45-year-old woman is brought in by her husband at 17:00. She made two dives in Kootenay Lake this morning, to 27 m and then to 18 m, with a 50 minute surface interval, and surfaced for the last time at 13:00. At 14:30 they drove over Kootenay Pass, at 1774 m. During the drive she became tired, developed itching over her trunk and an ache in her left elbow, and her husband noticed she kept repeating questions. She has no medical history.\n\nThere is faint redness with scratch marks over the trunk, without mottling. The elbow is not tender and moves fully. She is oriented to person and place but not to the date, and she makes several errors on serial sevens. The rest of the neurological examination is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "124/78 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following of her findings classifies her decompression sickness as serious rather than mild?",
        options: ["Aching left elbow", "Errors on serial sevens", "Fatigue and malaise", "Itchy red skin over the trunk", "Onset during the drive home"],
        correct: 1,
        explanation:
          "Impaired concentration and memory are cerebral manifestations, and any cerebral, spinal, inner ear or cardiopulmonary involvement makes decompression sickness serious. Joint pain, skin rash and itch, and constitutional symptoms such as fatigue are the mild forms. Onset within a few hours of surfacing is typical of both mild and serious disease and does not grade severity.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following most likely brought on her symptoms after two otherwise uneventful dives?",
        options: ["Driving over a high mountain pass", "Eating lunch between the dives", "Freshwater rather than sea diving", "Two cups of coffee at lunch", "Wearing a drysuit on both dives"],
        correct: 0,
        explanation:
          "Going to altitude soon after diving lowers the ambient pressure, so nitrogen still dissolved in her tissues comes out of solution and bubbles grow. The drive to 1774 m began only 90 minutes after two dives, one of them to 27 m, and her symptoms began on the way. Late onset of decompression sickness is well described after post-dive altitude exposure. Food, coffee, fresh water and a drysuit do not explain the timing.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "She breathes 100% oxygen by non-rebreather mask while transfer to a hyperbaric unit is arranged. After 1 hour her itching has settled and her mental status and serial sevens are normal.",
        prompt: "Which of the following is the most appropriate next step now that her symptoms have resolved?",
        options: ["Cancel the hyperbaric transfer", "Continue oxygen here overnight only", "Discharge with advice to return", "Observe 6 hours, then discharge", "Proceed with transfer for recompression"],
        correct: 4,
        explanation:
          "The UHMS advises recompression even when signs and symptoms resolve before treatment, because cerebral decompression sickness can recur and surface oxygen is first aid, not definitive care. Her cerebral findings make this serious disease, so the transfer should go ahead with oxygen continued. Surface oxygen alone is considered only for mild, stable symptoms with a normal neurological examination when evacuation is not feasible. Discharge or local observation leaves a serious case without recompression.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "uhms-dcs",
      },
    ],
    sources: [S.nejmDcs, S.uhms],
    ...META,
  },

  /* 29 ------------------------------------------------------------------ */
  {
    id: "environmental-29",
    topic: "environmental",
    title: "A shoulder ache after a holiday flight",
    stem:
      "A 52-year-old man presents to the emergency department in Calgary with a deep ache in his right shoulder. He returned last night from a week of diving in Mexico, with 12 dives over 6 days to depths of up to 30 m. His flight left 20 hours after his last dive. The ache began during the flight. It is constant and does not change with movement. He did not fall or lift anything heavy. He has no medical history.\n\nThe shoulder has full range of motion without tenderness. The rest of the examination so far is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "76/minute", resp: "14/minute", bp: "132/84 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shoulder pain?",
        options: ["Cervical radiculopathy", "Decompression sickness", "Referred cardiac pain", "Rotator cuff strain", "Septic arthritis"],
        correct: 1,
        explanation:
          "A deep, constant joint ache that does not change with movement and has no local tenderness, starting on a flight after a week of repeated diving, is typical musculoskeletal decompression sickness. Flying lowers ambient pressure and can bring on symptoms more than 24 hours after diving. A rotator cuff strain usually follows an injury and is tender and worse with movement. He has no fever or joint signs of infection. Radicular and cardiac pain have other features that he lacks.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important assessment before his condition can be called mild?",
        options: ["Bubble study echocardiogram", "Chest radiograph", "Joint aspiration of the shoulder", "MRI of the shoulder", "Neurological exam including gait"],
        correct: 4,
        explanation:
          "Mild decompression sickness is limited to pain, skin and constitutional symptoms, and divers often underreport neurological symptoms. A careful neurological examination, including sensation, strength, coordination and gait, is strongly recommended before a case is called mild. A neurological finding makes it serious and changes the urgency. Imaging, echocardiography and joint aspiration do not diagnose decompression sickness and do not change its severity grade.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His neurological examination, including sensation, strength, coordination and gait, is normal.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: ["Call a diving medicine physician", "Discharge with ibuprofen and a sling", "Observe on oxygen for 2 hours only", "Physiotherapy for a rotator cuff strain", "No recompression after 24 hours"],
        correct: 0,
        explanation:
          "Even mild decompression sickness should be discussed with a physician who specializes in diving medicine, through a hyperbaric unit or a 24 hour diving emergency line. That physician decides between recompression and surface oxygen with fluids and an NSAID. Recompression can still help a day or more after the dive, so the time since diving is no reason to withhold it. Discharging him with a sling or physiotherapy treats the wrong diagnosis. A short period of oxygen alone skips expert review.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
    ],
    sources: [S.nejmDcs],
    ...META,
  },

  /* 30 ------------------------------------------------------------------ */
  {
    id: "environmental-30",
    topic: "environmental",
    alsoTopics: ["tox"],
    title: "Tingling after a Caribbean dive trip",
    stem:
      "A 38-year-old man presents to the emergency department in Halifax with tingling in his hands, his feet and around his mouth. He returned 2 days ago from a week of scuba diving in the Caribbean. His last dive, to 25 m, was 4 days ago. On his last evening there, about 60 hours ago, he ate grilled barracuda. Six hours later he had vomiting and diarrhea, which settled within a day. He flew home the next morning. Since then he has had tingling, fatigue, generalized itching without a rash and a feeling that his teeth are loose, and cold drinks feel burning hot. He has no weakness, headache or joint pain. He has no medical history.\n\nStrength, reflexes, coordination, gait and pinprick sensation are normal. There is no rash.",
    vitals: { temperature: "36.6°C oral", pulse: "52/minute", resp: "14/minute", bp: "104/66 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his symptoms after this trip?",
        options: ["Ciguatera fish poisoning", "Decompression sickness", "Guillain-Barre syndrome", "Paralytic shellfish poisoning", "Scombroid poisoning"],
        correct: 0,
        explanation:
          "Vomiting and diarrhea within hours of eating barracuda, a reef fish known to carry ciguatoxin, followed by perioral and limb paresthesia, itching, loose-feeling teeth, a burning sensation from cold and a pulse of 52/minute is typical ciguatera. Scombroid causes flushing and headache within an hour and settles quickly. Paralytic shellfish poisoning follows shellfish, not fish. Guillain-Barre syndrome causes weakness and lost reflexes. Decompression sickness does not begin with a gastrointestinal illness after a meal.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "friedman-ciguatera",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features most helps distinguish his illness from decompression sickness?",
        options: ["Fatigue and generalized malaise", "Generalized itching without rash", "Normal limb strength and gait", "Onset after a barracuda meal", "Tingling in hands and feet"],
        correct: 3,
        explanation:
          "Toxic seafood poisoning is a recognized mimic of decompression sickness in divers, and its onset with nausea and vomiting after a fish meal is the clue. His illness began about 42 hours after his last dive and before he flew, whereas most decompression sickness appears within 6 hours of surfacing unless altitude provokes it. Itching, tingling, fatigue and a normal motor examination all occur in mild decompression sickness too, so they do not separate the two.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important advice to reduce the chance his symptoms return?",
        options: ["Avoid alcohol and all fish for months", "Hyperbaric oxygen if tingling returns", "Only avoid reef fish such as barracuda", "Return to his usual diet once he is well", "Take loperamide if diarrhea recurs"],
        correct: 0,
        explanation:
          "Symptoms of ciguatera often recur in the weeks or months after poisoning when patients drink alcohol or eat any fish, including freshwater species. The review advises avoiding alcohol, caffeine, nuts, pork, chicken and all fish for 3 to 6 months or until symptom free. Avoiding only reef fish is not enough. Hyperbaric oxygen does not treat a toxin. Loperamide does not prevent the neurological relapse.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "friedman-ciguatera",
      },
    ],
    sources: [S.friedman, S.nejmDcs],
    ...META,
  },

  /* 31 ------------------------------------------------------------------ */
  {
    id: "environmental-31",
    topic: "environmental",
    title: "A spearfisher with a weak hand",
    stem:
      "A 34-year-old man is brought to the emergency department by ambulance from a boat launch on Vancouver Island. He had been spearfishing on breath-hold for 4 hours in a 7 mm wetsuit and a 6 kg weight belt, making repeated dives to 18 to 22 m. He hyperventilated before each dive. He ascended quickly and spent about 1 minute at the surface between dives. He did not use scuba equipment. Twenty minutes after his last dive he noticed a flickering blind spot, then numbness and clumsiness of his right hand and trouble finding words. He did not lose consciousness. He has no medical history.\n\nHe has mild word-finding difficulty and a right pronator drift, with slow fine finger movements on the right. The rest of the examination is normal. Capillary glucose is 6.0 mmol/L. CT of the head is normal.",
    vitals: { temperature: "36.4°C oral", pulse: "88/minute", resp: "16/minute", bp: "132/82 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his neurological symptoms?",
        options: ["Arterial gas embolism", "Cerebral decompression sickness", "Hypoglycemia after exertion", "Hypoxic blackout injury", "Todd paralysis after a seizure"],
        correct: 1,
        explanation:
          "Repeated breath-hold dives to 18 to 22 m with short surface intervals and fast ascents let nitrogen accumulate over hours, and decompression sickness in breath-hold divers mainly causes cerebral symptoms that mimic a stroke in young, healthy people. Arterial gas embolism from lung overexpansion follows breathing compressed gas at depth, which he did not do. His glucose is 6.0 mmol/L. He never lost consciousness and had no seizure.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "schipke-breath-hold",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features of his diving increased his risk of this condition?",
        options: ["Diving without a tank", "Hyperventilating before dives", "Many repeated dives", "Rapid ascents to the surface", "Short surface intervals", "Wearing a 7 mm wetsuit", "Weight belt of 6 kg"],
        correct: [2, 3, 4],
        explanation:
          "Risk factors for decompression sickness in breath-hold divers include inadequate surface intervals during repetitive dives, deep dives beyond 40 m and rapid ascents. He made many repeated dives over 4 hours, with surface intervals of about 1 minute and fast ascents. Diving without a tank does not protect him, because each dive adds nitrogen that short intervals do not clear. Hyperventilating before a dive raises the risk of hypoxic blackout, not decompression sickness. A wetsuit and weight belt are not risk factors.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "schipke-breath-hold",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate definitive treatment for him?",
        options: ["Alteplase 0.9 mg/kg IV", "Aspirin and stroke unit admission", "Hyperbaric oxygen recompression", "Surface oxygen for 24 hours only", "No recompression without tank use"],
        correct: 2,
        explanation:
          "High-flow oxygen now and urgent hyperbaric oxygen are the treatments for decompression sickness in breath-hold divers, the same as in scuba divers. Treating him as an ischemic stroke with alteplase or aspirin targets clot rather than gas bubbles and delays recompression. Surface oxygen alone is not enough for cerebral involvement. Breath-hold diving does not exclude decompression sickness, so the lack of a tank is no reason to withhold recompression.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "schipke-breath-hold",
      },
      {
        id: "q4",
        kind: "single",
        update: "He recovers fully after two hyperbaric treatments. He asks what he should do before diving again.",
        prompt: "Which of the following is the most appropriate assessment before he returns to diving?",
        options: ["Bubble contrast echo for PFO", "Chest CT for lung bullae", "Lung function testing only", "Resume diving in 1 week", "No restriction once he is well"],
        correct: 0,
        explanation:
          "A patent foramen ovale lets venous bubbles reach the arterial circulation and is an individual risk factor for decompression sickness in breath-hold divers, especially the cerebral form he had. A bubble contrast echocardiogram looks for it and guides advice with a diving physician. Chest CT and lung function address barotrauma, which he did not have. Resuming within a week, or without restriction, ignores a serious neurological event.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "schipke-breath-hold",
      },
    ],
    sources: [S.schipke],
    ...META,
  },

  /* 32 ------------------------------------------------------------------ */
  {
    id: "environmental-32",
    topic: "environmental",
    title: "A facial droop after a shore dive",
    stem:
      "A 31-year-old man presents to the emergency department 1 hour after a shore dive to 14 m on Vancouver Island. He had trouble equalizing his left ear on the descent and felt pain that eased at depth. On the ascent his left ear felt full. After surfacing he noticed that the left side of his face was numb and drooping. He has no headache, limb symptoms or confusion.\n\nHe cannot wrinkle his left forehead or close his left eye fully, and the left side of his mouth droops. The left tympanic membrane is red with blood behind it. Limb strength, sensation, coordination and gait are normal.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "128/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his facial weakness?",
        options: ["Arterial gas embolism", "Bell palsy unrelated to diving", "Brainstem ischemic stroke", "Facial nerve baroparesis", "Inner ear barotrauma"],
        correct: 3,
        explanation:
          "Difficulty equalizing, ear pain on descent, a hemorrhagic left eardrum and then a complete left facial palsy fit facial baroparesis. High pressure in the middle ear compresses the facial nerve where its bony canal is exposed. Inner ear barotrauma causes vertigo and hearing loss, not facial palsy. Arterial gas embolism and stroke would be unlikely to give an isolated palsy that includes the forehead. The timing and ear findings link this to the dive rather than to Bell palsy.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings most helps distinguish his condition from arterial gas embolism?",
        options: ["Absence of headache", "Dive depth of 14 m", "Forehead is also weak", "Normal level of consciousness", "Onset after surfacing"],
        correct: 2,
        explanation:
          "Facial baroparesis is a peripheral facial nerve lesion, so the upper and lower face are both weak. Arterial gas embolism is a central lesion that usually spares the forehead. Both conditions begin after surfacing and can occur with a normal level of consciousness and no headache. Arterial gas embolism can follow dives as shallow as a few metres, so a depth of 14 m does not separate them.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings would most strongly suggest a diagnosis other than facial baroparesis?",
        options: ["Blood behind the eardrum", "Ear fullness on ascent", "Forehead weakness", "Taste change on the tongue", "Weakness of the right arm"],
        correct: 4,
        explanation:
          "Weakness of an arm points to a lesion in the brain, which after a dive suggests arterial gas embolism, and it needs urgent discussion about recompression. The facial nerve carries taste fibres from the front of the tongue through the chorda tympani, so a taste change fits baroparesis. Blood behind the eardrum and fullness on ascent show middle ear barotrauma. Forehead weakness supports a peripheral nerve lesion.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
    ],
    sources: [S.nejmDcs],
    ...META,
  },

  /* 33 ------------------------------------------------------------------ */
  {
    id: "environmental-33",
    topic: "environmental",
    alsoTopics: ["tox"],
    title: "Brought in by police after an arrest",
    stem:
      "A 33-year-old man is brought to the emergency department by police 40 minutes after a conducted energy weapon was used during his arrest. He had been running through traffic and shouting. He received one 5 second discharge and fell forward onto pavement. He says he used methamphetamine today. He does not remember the fall.\n\nHe is agitated, sweating and pacing. One barbed probe is embedded in the skin just below his left eyebrow and another in his left lower back. There is a 4 cm forehead abrasion and a boggy scalp hematoma.",
    vitals: { temperature: "40.4°C rectal", pulse: "142/minute", resp: "24/minute", bp: "168/98 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important immediate treatment for him?",
        options: ["Acetaminophen 1 g PO", "Haloperidol 5 mg IM alone", "Midazolam IV and active cooling", "Physical restraint, prone position", "Troponin and 24 hour monitoring"],
        correct: 2,
        explanation:
          "A temperature of 40.4°C with agitation and tachycardia after methamphetamine is sympathomimetic hyperthermia, which can progress to rhabdomyolysis, coagulopathy and arrest. A benzodiazepine calms him and reduces heat production, and active cooling brings his temperature down. Prone restraint raises the risk of sudden death and struggling adds heat. Haloperidol alone does not control sympathetic drive. Acetaminophen does not treat drug induced hyperthermia.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "rosen-ch144",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of the probe below his eyebrow?",
        options: ["Leave in place for ophthalmology", "Pull out with a sharp tug", "Push through and cut the barb", "Remove after a skin incision", "Twist out under local anesthetic"],
        correct: 0,
        explanation:
          "Probes in the skin of most areas can be removed with a quick pull, but a probe near the eye may have penetrated the globe or orbit. It is left in place, and the eye is assessed by ophthalmology before removal. Pulling, twisting or pushing it through risks further injury to the eye if it has entered the orbit. Cutting down on it blindly near the eye carries the same risk. The probe in his back can be removed in the usual way.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "vilke-cew",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations is most indicated for injuries related to his arrest?",
        options: ["CT head without contrast", "Echocardiogram for cardiac injury", "Serial troponins over 6 hours", "Telemetry for 24 hours", "Urine drug screen"],
        correct: 0,
        explanation:
          "He fell face first onto pavement, has a scalp hematoma and does not remember the fall, so he needs CT of the head. Intoxication and agitation make his examination unreliable. Studies of discharges up to 15 seconds have found no dangerous cardiac or laboratory effects, so the weapon itself does not call for troponins, echocardiography or prolonged telemetry. A urine drug screen does not change management when he has already disclosed methamphetamine use.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "vilke-cew",
      },
    ],
    sources: [S.rosenCh144, S.vilke],
    ...META,
  },

  /* 34 ------------------------------------------------------------------ */
  {
    id: "environmental-34",
    topic: "environmental",
    alsoTopics: ["multiple-trauma"],
    title: "A fall onto the subway tracks",
    stem:
      "A 29-year-old man is brought to the emergency department by ambulance after he fell from a subway platform onto the tracks in Toronto and grasped the 600 volt direct current third rail with his right hand. Witnesses say there was a flash and he was thrown back against the platform wall, where he lay unresponsive for about 30 seconds. He has no medical history.\n\nHe now opens his eyes spontaneously and obeys commands, but he is disoriented to time and keeps asking what happened. He has an occipital scalp hematoma and posterior neck pain. There is a 2 cm charred wound on the right palm and a 3 cm charred wound over the left knee. His ECG shows normal sinus rhythm.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "18/minute", bp: "128/78 mmHg", o2sat: "98% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why he did not stay stuck to the rail after contact?",
        options: ["Current passing through the brainstem", "Direct current without tetany", "Low skin resistance from wet hands", "Tetany from alternating current", "Voltage above 1000 V"],
        correct: 1,
        explanation:
          "Alternating current causes tetanic muscle contraction that can stop the victim letting go, which prolongs contact and is why it is generally considered more hazardous than direct current. The third rail carries direct current, which does not cause this sustained tetany, so his contact was brief. The sudden violent contraction that throws a victim adds blunt injury from the impact. At 600 volts the injury is low voltage, below the 1000 V threshold. Wet skin increases current flow but does not release the grip. Brainstem current causes apnea, not release.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "liu-electrical",
      },
      {
        id: "q2",
        kind: "menu",
        select: 4,
        prompt: "Which of the following investigations or monitoring are most appropriate for him now?",
        options: ["Carboxyhemoglobin level", "Continuous cardiac monitoring", "Creatine kinase level", "CT head without contrast", "CT of the cervical spine", "Nerve conduction studies", "Serum lipase level", "Transthoracic echocardiogram"],
        correct: [1, 2, 3, 4],
        explanation:
          "Loss of consciousness after an electrical injury calls for cardiac monitoring for at least 24 hours. Current passed from the right hand to the left knee, so CK screens for deep muscle injury. He was thrown against a wall, lost consciousness, has a scalp hematoma and keeps repeating questions, so he needs CT of the head. With neck pain and a GCS below 15, his cervical spine cannot be cleared clinically. Echocardiography is not routine with a normal ECG and stable vital signs. Carboxyhemoglobin, lipase and nerve studies do not guide early care.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "smith-electrical",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT of the head and cervical spine is normal. CK is 1850 U/L. His ECG remains in normal sinus rhythm and he is now fully oriented.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Discharge after a normal troponin", "Discharge home with a Holter monitor", "Observe 4 hours, then discharge", "Outpatient cardiology referral", "Telemetry admission for 24 hours"],
        correct: 4,
        explanation:
          "Selected patients with a low voltage injury, no loss of consciousness and a normal ECG may go home, but he lost consciousness, so he needs at least 24 hours of monitoring even though his current is low voltage and his ECG is normal. The raised CK and his wounds also need follow-up. Troponin has limited value for risk stratification after electrical injury, so a normal result does not allow discharge. A Holter, clinic referral or a short observation all remove the monitoring he needs.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
    ],
    sources: [S.smithElec, S.liu, S.waldmann],
    ...META,
  },

  /* 35 ------------------------------------------------------------------ */
  {
    id: "environmental-35",
    topic: "environmental",
    title: "An electrician who could not let go",
    stem:
      "A 36-year-old electrician is brought to the emergency department by ambulance after touching a live 347 volt commercial lighting circuit. The current passed from one hand to the other. He could not let go for about 3 seconds until a coworker switched off the breaker. He felt his heart racing afterward. He did not lose consciousness. He wore rubber-soled boots and stood on a dry concrete floor. He has no medical history.\n\nHe has a 5 mm grey wound on each index finger. The forearms are soft and the hands have normal sensation and movement. His ECG shows atrial fibrillation at 128/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "128/minute irregular", resp: "18/minute", bp: "132/80 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his exposure most increased his risk of cardiac injury?",
        options: ["Dry concrete floor", "Hand to hand current path", "Rubber-soled work boots", "Small entry wounds", "Voltage under 1000 V"],
        correct: 1,
        explanation:
          "A hand to hand path carries current across the chest and through the heart, which raises the risk of arrhythmia. His inability to let go prolonged the contact. A dry floor and rubber soles increase resistance to ground and reduce current, and small wounds do not raise risk. A voltage under 1000 V defines a low voltage injury, which on its own carries less risk than high voltage.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Continuous cardiac monitoring in hospital", "Discharge if troponin is normal", "Discharge now with a Holter monitor", "Electrical cardioversion, then discharge", "Rate control, then discharge home"],
        correct: 0,
        explanation:
          "Patients with a low voltage injury can be discharged only if they have no loss of consciousness and a normal ECG. He has a new arrhythmia after a transthoracic current path, so he needs monitoring in hospital, usually for at least 24 hours. Atrial fibrillation after an electrical injury usually resolves within a day or two, on its own or with rate control, while he is monitored. A normal troponin does not exclude later arrhythmia. Cardioversion or rate control followed by discharge removes the monitoring he needs.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most useful test for myocardial injury in this patient?",
        options: ["B-type natriuretic peptide", "CK-MB fraction", "Myoglobin level", "Total CK level", "Troponin I or T"],
        correct: 4,
        explanation:
          "Electrical injury damages skeletal muscle, which releases CK, myoglobin and the CK-MB fraction, so these can rise without any myocardial injury. Cardiac troponin is specific to the myocardium and is the preferred marker after electrical injury. BNP reflects cardiac wall stress and does not identify myocardial injury from current.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
    ],
    sources: [S.waldmann],
    ...META,
  },

  /* 36 ------------------------------------------------------------------ */
  {
    id: "environmental-36",
    topic: "environmental",
    alsoTopics: ["burns", "multiple-trauma"],
    title: "A boy who climbed a tree in the park",
    stem:
      "A 13-year-old boy is brought to the emergency department by ambulance in Winnipeg in July. He climbed a tree in a park and grabbed a branch that was touching a 7200 volt distribution line. There was a flash, his T-shirt caught fire and he fell about 4 m onto grass. A bystander smothered the flames. He was briefly unresponsive.\n\nHis GCS is now 14 and he complains of abdominal pain. There are deep partial thickness burns over the front of the chest and both arms, about 12% of body surface area, and a charred 1 cm wound on the right palm. The left upper quadrant is tender with guarding.",
    vitals: { temperature: "37.0°C tympanic", pulse: "136/minute", resp: "26/minute", bp: "88/52 mmHg", o2sat: "97% on room air", weight: "45 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his hypotension?",
        options: ["Burn shock from fluid loss", "Hemorrhage from the fall", "Myocardial injury from current", "Neurogenic shock from spinal injury", "Third spacing from rhabdomyolysis"],
        correct: 1,
        explanation:
          "A systolic BP of 88 mmHg with a pulse of 136/minute soon after a 4 m fall, with left upper quadrant tenderness and guarding, points to hemorrhage, most likely from the spleen. Burn shock develops over hours, so early hypotension in a burned patient means another cause must be found. Third spacing from rhabdomyolysis is also a later process. Neurogenic shock causes bradycardia, not tachycardia. Myocardial injury is possible but less likely than bleeding in this picture.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "rosen-ch54",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his assessment?",
        options: ["Burn dressings before any imaging", "Echocardiogram for myocardial injury", "Escharotomy of the chest wall", "FAST examination at the bedside", "Parkland fluids, reassess in 1 hour"],
        correct: 3,
        explanation:
          "A bedside FAST examination quickly looks for intraperitoneal blood in a hypotensive trauma patient and guides the decision for surgery. Dressing the burns can wait until life threats are addressed. His burns are on the front of the chest only, not circumferential, and his saturation is 97% on room air, so escharotomy is not needed. Burn formula fluids treat burn shock, not hemorrhage. Echocardiography does not address the more likely source of his shock.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "rosen-ch38",
      },
      {
        id: "q3",
        kind: "menu",
        select: 4,
        prompt: "Which of the following features of his case are criteria for burn centre consultation or referral?",
        options: ["Age 14 years or younger", "Associated traumatic injury", "Burns to the chest wall", "High voltage mechanism", "Normal level of alertness", "Partial thickness burns of 12%", "Sinus tachycardia on ECG"],
        correct: [0, 1, 3, 5],
        explanation:
          "The American Burn Association lists all high voltage injuries of 1000 volts or more, partial thickness burns of 10% or more and burns with associated trauma as triggers for immediate consultation. All burns in children aged 14 years or younger, or under 30 kg, are also on the list. The chest wall is not one of the listed critical areas, which are the face, hands, feet, genitalia, perineum and major joints. Sinus tachycardia and his level of alertness are not referral criteria.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "aba-referral",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate cardiac evaluation for him?",
        options: ["CK-MB every 8 hours", "ECG and continuous monitoring", "Holter monitor after discharge", "Troponin alone at 6 hours", "No cardiac tests if he is alert"],
        correct: 1,
        explanation:
          "A high voltage exposure with a brief loss of consciousness calls for an ECG and continuous cardiac monitoring, because arrhythmia is the main early cardiac risk after electrical injury. CK-MB rises from skeletal muscle damage and does not show myocardial injury reliably. A troponin alone does not detect arrhythmia. A Holter after discharge is too late for early risk. Being alert does not remove the need for monitoring after high voltage injury.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
    ],
    sources: [S.rosenCh54, S.rosenCh38, S.abaRef, S.waldmann],
    ...META,
  },

  /* 37 ------------------------------------------------------------------ */
  {
    id: "environmental-37",
    topic: "environmental",
    title: "A storm on a Kananaskis trail",
    stem:
      "A 26-year-old woman is brought to the emergency department by ambulance from a hiking trail in Kananaskis Country, Alberta. Lightning struck a tree beside her during an afternoon thunderstorm. Her friend says she was thrown about 3 m and was unresponsive for about 30 seconds. She has no medical history.\n\nShe is now alert and oriented. She has ringing in both ears and pain in her mid back. There is a red, branching, fern-like pattern over her left shoulder and chest, with intact skin. Both tympanic membranes are perforated. There is midline tenderness over T7 and T8. Limb strength and sensation are normal.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "18/minute", bp: "124/76 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of the pattern on her shoulder and chest?",
        options: ["Cool running water for 20 minutes", "Reassurance without treatment", "Silver sulfadiazine dressings", "Tetanus booster for the wound", "Topical corticosteroid cream"],
        correct: 1,
        explanation:
          "A branching, fern-like pattern on intact skin after a lightning strike is a Lichtenberg figure, which is not a burn and fades within hours to a day. The pattern itself needs no treatment. Cool running water and silver sulfadiazine are for true burns, and she has no burned or broken skin. A tetanus booster is not needed for intact skin. Corticosteroid cream does not change its course.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "wms-lightning",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her ECG shows sinus rhythm with new T wave inversion in V2 to V5 and a QTc of 510 ms. High sensitivity troponin is 180 ng/L, where normal is below 14 ng/L.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Aspirin and heparin for ischemia", "Cardiac catheterization now", "Discharge with cardiology follow-up", "Telemetry admission and echocardiogram", "Urgent coronary CT angiography"],
        correct: 3,
        explanation:
          "Lightning can cause myocardial injury, repolarization changes and QT prolongation, and her loss of consciousness, abnormal ECG and raised troponin call for admission with telemetry and an echocardiogram to assess function. The injury is from current, not coronary occlusion, so a young woman without risk factors does not need anticoagulation, urgent catheterization or coronary CT. Discharge ignores the risk of arrhythmia while the QT is prolonged.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "wms-lightning",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation for her back pain?",
        options: ["Analgesia and discharge home", "CT of the thoracic spine", "MRI of the brain", "Plain chest radiograph only", "Spine radiographs in 1 week"],
        correct: 1,
        explanation:
          "She was thrown 3 m and has midline tenderness at T7 and T8, so a thoracic spine fracture must be excluded, and CT is the most sensitive rapid test. Lightning victims are often thrown or fall, and their blunt injuries are easy to miss among the more striking electrical findings. A chest radiograph does not show the spine well. Delayed radiographs or discharge risk missing an unstable fracture. Brain MRI does not address the back.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "acr-spine-trauma",
      },
    ],
    sources: [S.wmsLightning, S.acrSpine],
    ...META,
  },

  /* 38 ------------------------------------------------------------------ */
  {
    id: "environmental-38",
    topic: "environmental",
    alsoTopics: ["tox"],
    title: "Confusion in a hot apartment",
    stem:
      "A 41-year-old man is brought to the emergency department by ambulance on the third day of an extreme heat warning in Montreal. He has C6 tetraplegia from a hockey injury 15 years ago, an intrathecal baclofen pump and an indwelling urinary catheter. His attendant found him confused this morning in his apartment, which has no air conditioning and was 31°C indoors. Since yesterday he has had generalized itching, and his leg spasms have been much stronger than usual. He takes no other medications.\n\nHe is agitated and disoriented. His skin is hot, with sweating only on his face and neck. Both legs are rigid with sustained clonus. The catheter bag holds cloudy urine. Capillary glucose is 6.2 mmol/L.",
    vitals: { temperature: "40.8°C rectal", pulse: "132/minute", resp: "24/minute", bp: "92/54 mmHg", o2sat: "95% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to lower his temperature now?",
        options: ["Acetaminophen 1 g PR, then reassess", "Cooling after the cause is confirmed", "Fans, mist, ice packs, cold IV fluid", "Single cooling blanket under his back", "Tepid sponging every 30 minutes"],
        correct: 2,
        explanation:
          "A rectal temperature of 40.8°C with confusion is cooled at once, before the cause is confirmed, and of these options only the combination of evaporative and conductive methods cools quickly. Mist with fans adds evaporation, ice packs to the neck, axillae and groin add conduction, and cold IV fluid also treats his BP of 92/54 mmHg. He sweats only on his face and neck, so he depends on external cooling. Acetaminophen does not lower heat from muscle activity and a hot room, where the set point is normal. Waiting for a diagnosis, a single blanket or intermittent sponging keeps him above 40°C for longer.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "wms-heat",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests a cause other than environmental heat?",
        options: ["Confusion and agitation", "Dry skin below the neck", "Indoor temperature of 31°C", "Itching and stronger spasms", "Pulse of 132/minute"],
        correct: 3,
        explanation:
          "Itching and a return of spasticity beyond his baseline are early signs of intrathecal baclofen withdrawal, which can progress to high fever, altered mental status, rigidity, rhabdomyolysis, multiple organ failure and death. Heat exposure does not explain them. Confusion and a pulse of 132/minute occur in heat stroke, in baclofen withdrawal and in sepsis, so they do not separate the causes. Absent sweating below his cervical cord injury is expected and adds to his heat risk. An indoor temperature of 31°C explains heat stress but not his itching or spasms.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "lioresal-pm",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "Cooling is under way and his rectal temperature is 39.8°C. His BP is 96/58 mmHg after 1 L of cold normal saline.",
        prompt: "Which of the following investigations are most appropriate now to look for another cause of his fever?",
        options: ["Blood cultures", "Carboxyhemoglobin level", "CT of the abdomen", "D-dimer level", "Serum lipase level", "Urinalysis and urine culture", "Urine drug screen"],
        correct: [0, 5],
        explanation:
          "Advanced baclofen withdrawal can resemble sepsis, and his indwelling catheter and cloudy urine make urinary infection a real second cause of fever, so blood cultures and a urine culture are sent before antibiotics, provided they cause no delay. Carboxyhemoglobin, D-dimer, lipase and CT of the abdomen look for problems that his history and examination do not suggest. A urine drug screen does not explain fever with itching and rebound spasticity in a man who takes no other drugs.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "ssc-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "His attendant finds that his pump refill was due 6 days ago and was missed, and that the pump alarm has been sounding. His temperature is 39.2°C.",
        prompt: "Which of the following is the most appropriate specific treatment for his condition?",
        options: ["Bromocriptine 2.5 mg by NG tube", "Intrathecal baclofen restored now", "Oral baclofen as the only treatment", "Propranolol 1 mg IV for tachycardia", "Pump removal in the operating room"],
        correct: 1,
        explanation:
          "A missed refill with a sounding alarm confirms interruption of intrathecal baclofen, and the recommended treatment is to restore intrathecal delivery at or near the dose he received before. If restoration is delayed, GABA agonists such as IV benzodiazepines or enteral baclofen may prevent fatal complications, but oral baclofen alone should not be relied on to halt the syndrome. Removing the pump cuts off the drug he is missing. Bromocriptine treats neuroleptic malignant syndrome, and he takes no antipsychotic. Propranolol can deepen his low BP, and his tachycardia reflects withdrawal and fever.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "lioresal-pm",
      },
    ],
    sources: [S.wmsHeat, S.lioresal, S.ssc],
    ...META,
  },
];
