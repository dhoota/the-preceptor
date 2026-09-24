// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  wmsHeat: { id: "wms-heat", citation: "Eifling KP, Gaudio FG, Dumke C, and colleagues. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of heat illness. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38425235/" },
  wmsEah: { id: "wms-eah", citation: "Bennett BL, Hew-Butler T, Rosner MH, Myers T, Lipman GS. Wilderness Medical Society clinical practice guidelines for the management of exercise-associated hyponatremia. 2019 update. Wilderness Environ Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32044213/" },
  acsm: { id: "acsm-ehi", citation: "Roberts WO, Armstrong LE, Sawka MN, Yeargin SW, Heled Y, O'Connor FG. ACSM expert consensus statement on exertional heat illness: recognition, management, and return to activity. Curr Sports Med Rep. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37036463/" },
  bcHeat: { id: "bc-heat", citation: "BC Coroners Service. Extreme heat and human mortality: a review of heat-related deaths in B.C. in summer 2021. Report to the Chief Coroner of British Columbia. 2022.", url: "https://www2.gov.bc.ca/assets/gov/birth-adoption-death-marriage-and-divorce/deaths/coroners-service/death-review-panel/extreme_heat_death_review_panel_report.pdf" },
  ssc: { id: "ssc-2021", citation: "Evans L, Rhodes A, Alhazzani W, and colleagues. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34599691/" },
  tunkel: { id: "idsa-meningitis", citation: "Tunkel AR, Hartman BJ, Kaplan SL, and colleagues. Practice guidelines for the management of bacterial meningitis. Infectious Diseases Society of America. Clin Infect Dis. 2004.", url: "https://pubmed.ncbi.nlm.nih.gov/15494903/" },
  rosen: { id: "rosen", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapters on heat illness, accidental hypothermia, dysbarism and electrical injury." },
  paal: { id: "paal-hypothermia", citation: "Paal P, Pasquier M, Darocha T, and colleagues. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/35010760/" },
  icar: { id: "icar-avalanche", citation: "Pasquier M, Strapazzon G, Kottmann A, and colleagues. On-site treatment of avalanche victims: scoping review and 2023 recommendations of the International Commission for Mountain Emergency Medicine (ICAR MedCom). Resuscitation. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36709825/" },
  wmsFrost: { id: "wms-frostbite", citation: "McIntosh SE, Freer L, Grissom CK, and colleagues. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of frostbite. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38577729/" },
  poole: { id: "poole-yukon", citation: "Poole A, Gauthier J, MacLennan M. Management of severe frostbite with iloprost, alteplase and heparin: a Yukon case series. CMAJ Open. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34021017/" },
  wmsDrown: { id: "wms-drowning", citation: "Davis CA, Schmidt AC, Sempsrott JR, and colleagues. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38379489/" },
  nejmDcs: { id: "nejm-dcs", citation: "Mitchell SJ, Bennett MH, Moon RE. Decompression sickness and arterial gas embolism. N Engl J Med. 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/35353963/" },
  peacher: { id: "peacher-ipe", citation: "Peacher DF, Martina SD, Otteni CE, Wester TE, Potter JF, Moon RE. Immersion pulmonary edema and comorbidities: case series and updated review. Med Sci Sports Exerc. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25222821/" },
  vilke: { id: "vilke-cew", citation: "Vilke G, Chan T, Bozeman WP, Childers R. Emergency department evaluation after conducted energy weapon use: review of the literature for the clinician. J Emerg Med. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/31500994/" },
  waldmann: { id: "waldmann-electrical", citation: "Waldmann V, Narayanan K, Combes N, Jost D, Jouven X, Marijon E. Electrical cardiac injuries: current concepts and management. Eur Heart J. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/28444167/" },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/resources/burnreferral/" },
  extrip: { id: "extrip-salicylate", citation: "Juurlink DN, Gosselin S, Kielstein JT, and colleagues, for the EXTRIP Workgroup. Extracorporeal treatment for salicylate poisoning: systematic review and recommendations from the EXTRIP workgroup. Ann Emerg Med. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25986310/" },
  palmer: { id: "palmer-salicylate", citation: "Palmer BF, Clegg DJ. Salicylate toxicity. N Engl J Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32579814/" },
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
    title: "An older woman found in a hot apartment",
    stem:
      "An 83-year-old woman is brought to the emergency department by ambulance on the fourth day of an extreme heat warning in the Fraser Valley. Her daughter found her in bed in her top floor apartment, which has no air conditioning. The indoor thermometer read 34°C. She had a cough for two days before. She has heart failure, atrial fibrillation, type 2 diabetes, overactive bladder and insomnia. She takes apixaban, atorvastatin, furosemide, metformin, oxybutynin and quetiapine at bedtime.\n\nShe responds only to pain. Her skin is hot and dry. There are crackles at the right lung base. There is no neck stiffness or rash. Capillary glucose is 8.2 mmol/L.",
    vitals: { temperature: "41.3°C rectal", pulse: "124/minute irregular", resp: "30/minute", bp: "96/54 mmHg", o2sat: "90% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to lower her temperature once her airway is assessed?",
        options: ["Acetaminophen 1 g PR", "Cold water immersion in a tarp", "Cooling blanket under her back", "Dantrolene 2.5 mg/kg IV", "Tepid sponging every 30 minutes"],
        correct: 1,
        explanation:
          "A rectal temperature of 41.3°C with coma needs the fastest cooling available, started before the cause is settled. Cold water immersion is the most effective method, and a tarp or body bag makes it possible on an ED stretcher with the head supported and monitored. Acetaminophen does not act when the hypothalamic set point is normal, as in heat stroke. Dantrolene has no proven benefit. A cooling blanket under the back and intermittent tepid sponging cool far too slowly.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "wms-heat",
      },
      {
        id: "q2",
        kind: "single",
        update: "Chest radiograph shows right lower lobe consolidation. Lactate is 4.8 mmol/L and WBC is 17.2 x 10^9/L. Cooling is under way.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Antibiotics once cooling is complete", "Antibiotics only if the fever persists", "Blood cultures and IV antibiotics now", "Procalcitonin before antibiotics", "Sputum culture, then antibiotics"],
        correct: 2,
        explanation:
          "Consolidation, a lactate of 4.8 mmol/L and a BP of 96/54 mmHg mean sepsis from pneumonia is likely, alongside or instead of heat stroke. Surviving Sepsis advises antimicrobials immediately, ideally within one hour, when septic shock is possible, after blood cultures if they cause no delay. Waiting for cooling to finish or for the fever to persist delays antibiotics for hours. A procalcitonin result should not decide whether to start them in a patient this ill. A sputum sample is often not obtainable and should not delay treatment.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "ssc-2021",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following of her medications impair her ability to tolerate extreme heat?",
        options: ["apixaban", "atorvastatin", "furosemide", "metformin", "oxybutynin", "quetiapine"],
        correct: [2, 4, 5],
        explanation:
          "Furosemide reduces circulating volume and the reserve available for sweating and skin blood flow. Oxybutynin is anticholinergic and blocks sweating, the main route of heat loss. Quetiapine, like other antipsychotics, impairs central thermoregulation and adds anticholinergic effect. Apixaban, atorvastatin and metformin do not impair heat dissipation. Most of the 619 people who died in the 2021 British Columbia heat dome were older, lived alone and had chronic disease.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "wms-heat",
      },
      {
        id: "q4",
        kind: "single",
        update: "She recovers over five days. Her daughter asks how to protect her during the next heat warning. She will continue to live alone.",
        prompt: "Which of the following is the most protective plan for her during future extreme heat?",
        options: ["Cool room and daily wellness checks", "Drink 3 L of water each day", "Electric fan beside her bed at night", "Stop furosemide until the heat ends", "Windows open day and night"],
        correct: 0,
        explanation:
          "In the 2021 British Columbia heat dome, 98% of heat deaths occurred indoors in a residence, only 7% of those who died had air conditioning, and 56% lived alone. The coroners' review called for access to cooled spaces and for checks on older adults who live alone. A fan does not make a very hot room safe. Drinking 3 L a day risks decompensating her heart failure. Stopping furosemide unsupervised risks the same. Open windows let in hot daytime air, so windows are covered by day and opened when it is cooler outside.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "bc-heat",
      },
    ],
    sources: [S.wmsHeat, S.ssc, S.bcHeat],
    ...META,
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
          "Succinylcholine raises serum potassium by about 0.5 mmol/L, which is dangerous at 6.3 mmol/L with ECG changes and likely rhabdomyolysis from exertional heat stroke. Rocuronium 1.2 mg/kg, about 100 mg at 85 kg, gives intubating conditions in about 60 seconds without raising potassium. Cisatracurium, pancuronium and vecuronium at these doses take several minutes to work, which is too slow for rapid sequence intubation.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "rosen",
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
        prompt: "Which of the following is the most appropriate way to decide when to stop active cooling?",
        options: ["Continuous rectal or esophageal probe", "Infrared tympanic reading every 10 minutes", "Oral thermometer after extubation", "Skin temperature on the forehead", "Temporal artery scan every 5 minutes"],
        correct: 0,
        explanation:
          "Only a core measurement shows when he nears the end point of cooling, and an indwelling rectal or esophageal probe gives a continuous reading without interrupting treatment. Tympanic, temporal artery and forehead readings are strongly affected by the ice water and the skin, and they do not track core temperature in heat stroke. An oral reading is not possible while he is intubated and would come far too late.",
        keyFeature: { topic: "environmental", n: 1 },
        source: "acsm-ehi",
      },
    ],
    sources: [S.rosen, S.acsm],
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
          "A burial of 20 minutes with an obstructed airway and a core temperature of 34.6°C means an asphyxial arrest, not a hypothermic one. ICAR advises standard resuscitation for such victims, and stopping after about 30 minutes without return of circulation, which he has passed. Continuing until 35°C and ECLS apply to hypothermic arrest, which needs a core temperature below 30°C. Potassium helps triage victims buried more than 60 minutes. Intermittent CPR is for patients below 28°C.",
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
        prompt: "Which of the following precautions is most important while the woman is moved to the aircraft?",
        options: ["Defer intubation until she is rewarmed", "Gentle horizontal handling at all times", "Monitor leads rather than defibrillator pads", "Rub her limbs to improve circulation", "Sit her up to reduce aspiration risk"],
        correct: 1,
        explanation:
          "Rough or sudden movement can trigger ventricular fibrillation in a cold heart, so a severely hypothermic patient is moved gently and kept horizontal to prevent rescue collapse. Rubbing the limbs returns cold blood to the core. Sitting her up risks hypotension. Pads are preferred over monitor leads because they reduce shivering artifact and allow immediate defibrillation. Intubation should not be deferred in a patient with a respiratory rate of 6/minute, because the risk of causing an arrhythmia is small.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q4",
        kind: "single",
        update: "During loading she goes into ventricular fibrillation. Three shocks fail. Her core temperature is 26.2°C.",
        prompt: "Which of the following is the most appropriate next step in her resuscitation?",
        options: ["Amiodarone 300 mg IV", "Epinephrine 1 mg IV every 3 minutes", "Shock again every 2 minutes", "Stop resuscitation after 20 minutes", "Transport with ongoing mechanical CPR"],
        correct: 4,
        explanation:
          "Below 30°C, further shocks are delayed after three failed attempts until the core temperature is above 30°C, and epinephrine and amiodarone are withheld. Her arrest is hypothermic, since she was buried more than 60 minutes with an air pocket and is at 26.2°C, so the goal is continuous CPR to the ECLS centre. A mechanical device keeps compressions effective in the aircraft. Stopping at 20 minutes ignores that hypothermic arrest can end in full recovery after hours of CPR.",
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
    title: "A man found in a bus shelter",
    stem:
      "A 51-year-old man is brought to the emergency department by ambulance in January after being found lying in a bus shelter in Winnipeg at minus 29°C. He was last seen 8 hours earlier. He smells of alcohol. He has a 3 cm scalp laceration over a boggy occipital hematoma. He mumbles to voice and is not shivering. Both feet are pale, hard and insensate to the ankles, and his socks are frozen to his skin. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "30.2°C rectal", pulse: "48/minute", resp: "12/minute", bp: "104/62 mmHg", o2sat: "94% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to rewarm him now?",
        options: ["Bladder irrigation with warmed saline", "ECLS rewarming on arrival", "Passive rewarming with blankets", "Warm bath immersion at 40°C", "Warm forced air and IV fluids at 40°C"],
        correct: 4,
        explanation:
          "He has moderate hypothermia at 30.2°C with a stable circulation, a systolic BP above 90 mmHg and no ventricular arrhythmia, so active external rewarming with forced air is appropriate. IV fluids warmed to about 40°C prevent further cooling but do not rewarm on their own. Passive rewarming is too slow without shivering. ECLS is for arrest or instability. Bladder irrigation adds little heat. A warm bath risks vasodilation and collapse.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate time to thaw his frozen feet?",
        options: ["After 24 hours of observation", "After his core temperature stabilizes", "Before core rewarming begins", "Once the feet thaw on their own", "Only after surgical consultation"],
        correct: 1,
        explanation:
          "Frozen tissue is thawed as soon as circulation and core temperature have been stabilized, because core rewarming comes first and the feet have no risk of refreezing in hospital. Thawing before core rewarming diverts care from the priority and returns cold blood from the limbs. Slow spontaneous thawing gives worse tissue outcomes than rapid rewarming in 37 to 39°C water. Waiting 24 hours or for surgery wastes the window for iloprost or thrombolysis.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q3",
        kind: "single",
        update: "His feet are thawed 4 hours after arrival. The toes stay grey and cold with no capillary refill. CT head shows a 6 mm acute subdural hematoma. Your centre has a frostbite protocol using iloprost and alteplase.",
        prompt: "Which of the following is the most appropriate treatment to improve tissue survival in his feet?",
        options: ["Alteplase IV with heparin", "Early amputation of the toes", "Heparin infusion alone", "Iloprost IV infusion", "Topical nitroglycerin paste"],
        correct: 3,
        explanation:
          "Deep frostbite with no capillary refill after thawing needs a systemic treatment to restore perfusion. His acute subdural hematoma contraindicates alteplase and heparin. Iloprost is a vasodilator without that bleeding risk and is recommended for deep frostbite within 72 hours. A Yukon protocol using it salvaged about 80% of affected digits. Amputation is delayed for weeks until the tissue demarcates. Heparin alone and topical nitroglycerin lack evidence.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "poole-yukon",
      },
    ],
    sources: [S.paal, S.poole],
    ...META,
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
          "Ventricular arrhythmia in a hypothermic patient signals a high risk of cardiac arrest and is one of the criteria for transfer to an ECLS centre, along with arrest, a core temperature below 30°C and hypotension that does not respond. A core temperature of 32.4°C shows he is rewarming. A pulse of 72/minute is expected sinus bradycardia at this temperature. Mild hypoglycemia is treated with dextrose. Red, swollen fingers are superficial cold injury.",
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
      "A 39-year-old man is brought to the emergency department by ambulance after his snowmobile broke through the ice on Lake of the Woods, Ontario. He held onto the ice edge for about 25 minutes until firefighters pulled him out. He swallowed some water and has been coughing. He is alert and oriented and shivering hard. His wet clothes have been cut off and he is under blankets. There are fine crackles at both lung bases. He has no medical history.",
    vitals: { temperature: "33.8°C rectal", pulse: "96/minute", resp: "24/minute", bp: "134/82 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage his temperature?",
        options: ["Exercise on the spot to generate heat", "Hot shower as soon as possible", "Transfer to an ECLS centre", "Warm sweet drinks and insulation", "Warmed IV saline as the sole method"],
        correct: 3,
        explanation:
          "He is alert and shivering hard at 33.8°C, which is mild hypothermia with a low risk of cardiac arrest. Insulation, removal of wet clothes and warm sweet drinks let his own shivering rewarm him, and forced air can be added. Exercise and a hot shower both open cold peripheral beds and can cause afterdrop and collapse. ECLS is reserved for arrest or instability. Warmed IV fluids do not rewarm on their own.",
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
    vitals: { temperature: "31.4°C rectal", pulse: "58/minute irregular", resp: "14/minute", bp: "102/58 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of her atrial fibrillation?",
        options: ["Amiodarone 150 mg IV", "Continue rewarming and observe", "Diltiazem 10 mg IV", "Heparin infusion now", "Synchronized cardioversion"],
        correct: 1,
        explanation:
          "Atrial fibrillation is common in moderate hypothermia and usually resolves as the patient rewarms, so rewarming and monitoring are the treatment. Her ventricular rate of 58/minute and BP of 102/58 mmHg need no rate control. Amiodarone and diltiazem add bradycardia and hypotension in a cold heart. Cardioversion is unlikely to hold below 32°C and handling risks ventricular fibrillation. Anticoagulation is not urgent for new atrial fibrillation that is expected to resolve, and she has a hip fracture.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "After 2 hours of forced air warming and warmed fluids her rectal temperature is 31.3°C. Lactate has risen from 2.1 to 4.6 mmol/L and her BP is 84/50 mmHg.",
        prompt: "Which of the following tests are most useful to look for a cause of her failure to rewarm?",
        options: ["Blood cultures", "Carboxyhemoglobin level", "D-dimer", "Serum cortisol", "Serum lipase", "Troponin", "TSH and free T4", "Urine drug screen"],
        correct: [0, 3, 6],
        explanation:
          "A core temperature that does not rise with active external rewarming, with a rising lactate and falling BP, suggests a secondary cause that limits heat production. Sepsis is the most common, so blood cultures are drawn and antibiotics considered. Hypothyroidism and adrenal insufficiency also impair thermogenesis, so TSH, free T4 and cortisol are sent. D-dimer and troponin are often abnormal in hypothermia and do not explain it. Lipase, carboxyhemoglobin and a urine drug screen do not address the common endocrine and septic causes.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her rewarming?",
        options: ["Add a second forced air blanket", "Continue and reassess in 2 hours", "Norepinephrine to a MAP of 65 mmHg", "Transfer for ECLS rewarming", "Warmed IV fluid boluses only"],
        correct: 3,
        explanation:
          "A static core temperature, a rising lactate and falling BP are the signs of failed rewarming, and they call for active internal rewarming, preferably with ECLS. She is also at higher risk of arrest than a young adult, because older and comorbid patients can arrest below 32°C. More forced air or warmed fluids repeats a strategy that has failed. Waiting 2 hours risks arrest. Vasopressors are poorly effective and arrhythmogenic in a cold heart and do not fix the cause.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "paal-hypothermia",
      },
    ],
    sources: [S.paal, S.rosen],
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
    title: "Leg numbness after a wreck dive",
    stem:
      "You are working in a rural hospital emergency department on the Bruce Peninsula, Ontario. The nearest hyperbaric chamber is 3.5 hours away by road. A 42-year-old woman is brought in by ambulance after two wreck dives to 38 m. Thirty minutes after surfacing from the second dive she felt a band of pain around her upper abdomen, then numbness in both legs. She has not voided since the dive. She has no medical history.\n\nPinprick sensation is reduced below the umbilicus. Hip flexion is 4/5 on both sides. Bedside bladder scan shows 650 mL. The rest of the examination is normal.",
    vitals: { temperature: "36.4°C oral", pulse: "102/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 4,
        prompt: "Which of the following are the most appropriate immediate measures while transfer is arranged?",
        options: ["Dextrose 5% IV infusion", "Head-down tilt position", "High-flow oxygen by mask", "Isotonic crystalloid IV", "Nitrous oxide for analgesia", "Sitting upright position", "Supine position", "Urinary catheter"],
        correct: [2, 3, 6, 7],
        explanation:
          "Girdle pain followed by bilateral leg numbness, weakness and urinary retention after deep diving is spinal decompression sickness. The highest possible fraction of oxygen speeds nitrogen washout, non-glucose isotonic fluid corrects the hemoconcentration common in divers, and the supine position protects BP. Her 650 mL retention needs a catheter. Nitrous oxide diffuses into bubbles and enlarges them. Head-down tilt raises intracranial pressure and is no longer used. Glucose-containing fluid is avoided in neurological injury.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate definitive plan for her?",
        options: ["High-dose methylprednisolone IV", "MRI of the spine before transfer", "Neurology consultation first", "Oxygen and observation for 24 hours", "Urgent transfer for recompression"],
        correct: 4,
        explanation:
          "Spinal cord decompression sickness is a serious form that needs recompression with hyperbaric oxygen as soon as possible, because outcomes worsen as the delay grows. MRI is not sensitive for spinal decompression sickness and must not delay transfer. Surface oxygen is first aid, not definitive care, for neurological signs. Steroids have no proven benefit. Consultation can happen by phone during transfer rather than before it.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        update: "After two hyperbaric treatments she still has weakness and cannot walk. She is admitted to hospital.",
        prompt: "Which of the following medications is recommended for her while she remains immobile?",
        options: ["alteplase 0.9 mg/kg IV", "aspirin 81 mg PO daily", "dexamethasone 10 mg IV", "enoxaparin 40 mg SC daily", "tranexamic acid 1 g IV"],
        correct: 3,
        explanation:
          "Low molecular weight heparin is indicated for thromboprophylaxis in immobile patients with spinal cord decompression sickness, and enoxaparin 40 mg SC daily is a standard prophylactic dose. Alteplase treats thrombus, not gas bubbles, and adds bleeding risk. Aspirin is not a recommended adjunct and does not replace heparin prophylaxis. Dexamethasone has no proven benefit. Tranexamic acid promotes clotting and has no role.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
    ],
    sources: [S.nejmDcs],
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
        update: "His neurological examination is normal.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: ["Call a diving medicine physician", "Discharge with ibuprofen and a sling", "Observe on oxygen for 2 hours only", "Physiotherapy for a rotator cuff strain", "No recompression, as it is too late"],
        correct: 0,
        explanation:
          "Even mild decompression sickness should be discussed with a physician who specializes in diving medicine, through a hyperbaric unit or a 24 hour diving emergency line. That physician decides between recompression and surface oxygen with fluids and an NSAID. Recompression can still help a day or more after the dive, so it is not too late. Discharging him with a sling or physiotherapy treats the wrong diagnosis. A short period of oxygen alone skips expert review.",
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
    title: "An out-of-air ascent",
    stem:
      "A 24-year-old man is brought to the emergency department by ambulance from a dive training site in Howe Sound, British Columbia. The hospital has a hyperbaric chamber. At 18 m he ran out of air and made a rapid ascent while holding his breath. At the surface he was unconscious for about a minute. He then had weakness of the right arm, which is improving. He now has chest pain, dyspnea and has coughed up blood.\n\nThere is crepitus in the neck. Breath sounds are reduced on the left. Right arm strength is 4/5. The rest of the neurological examination is normal. A supine chest radiograph shows a moderate left pneumothorax.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute", resp: "26/minute", bp: "122/78 mmHg", o2sat: "93% on 15 L/minute by non-rebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his right arm weakness?",
        options: ["Arterial gas embolism", "Carotid artery dissection", "Hemorrhagic stroke", "Spinal decompression sickness", "Todd paralysis after a seizure"],
        correct: 0,
        explanation:
          "Loss of consciousness and a focal deficit within minutes of a rapid breath-hold ascent, with pneumothorax, subcutaneous air and hemoptysis showing lung overexpansion, point to cerebral arterial gas embolism. Spinal decompression sickness is unlikely after a short, shallow dive and causes bilateral cord signs rather than a single weak arm. A stroke or dissection at the moment of surfacing would be a very unlikely coincidence. He had no witnessed seizure.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following must be done before he enters the hyperbaric chamber?",
        options: ["Alteplase for acute stroke", "Bubble echocardiogram for PFO", "CT head to confirm air emboli", "Pneumothorax drainage with a chest tube", "Wait for the weakness to settle"],
        correct: 3,
        explanation:
          "An undrained pneumothorax can expand into a tension pneumothorax when chamber pressure falls during decompression, so it is drained before recompression. CT is not sensitive enough to exclude arterial gas embolism and must not delay treatment. Alteplase treats clot, not gas, and he has hemoptysis. Echocardiography for a patent foramen ovale belongs to later follow-up. Improvement is common but relapse can follow, so recompression is not deferred.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following medications may be considered as an adjunct to recompression for his arterial gas embolism?",
        options: ["dexamethasone 10 mg IV", "heparin 5000 units IV", "lidocaine IV infusion", "mannitol 1 g/kg IV", "nimodipine 60 mg PO"],
        correct: 2,
        explanation:
          "IV lidocaine is neuroprotective in animal models of arterial gas embolism and may be considered as an adjunct, although evidence in humans is limited. Heparin adds bleeding risk in a patient with hemoptysis and lung injury. Corticosteroids have not shown benefit and may worsen outcome in brain injury. Mannitol and nimodipine have no established role. None of these replace recompression, which remains the definitive treatment.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
    ],
    sources: [S.nejmDcs],
    ...META,
  },

  /* 31 ------------------------------------------------------------------ */
  {
    id: "environmental-31",
    topic: "environmental",
    title: "Breathless at depth in a cold lake",
    stem:
      "You are working in a community hospital emergency department in the Okanagan Valley, British Columbia. A 58-year-old woman is brought in by ambulance from a lake dive to 12 m in 11°C water. About 15 minutes into the dive, while still at depth and swimming hard against a current, she became short of breath and began to cough. She ascended at a normal rate with her buddy. She now coughs pink frothy sputum. She has hypertension and takes amlodipine.\n\nThere are crackles over both lungs. There is no neck crepitus and the neurological examination is normal. A chest radiograph shows bilateral patchy opacities and no pneumothorax.",
    vitals: { temperature: "36.1°C oral", pulse: "108/minute", resp: "28/minute", bp: "172/96 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her breathlessness?",
        options: ["Arterial gas embolism", "Cardiopulmonary decompression sickness", "Immersion pulmonary edema", "Pulmonary barotrauma", "Water aspiration from panic"],
        correct: 2,
        explanation:
          "Breathlessness and cough that began at depth, before ascent, on a short 12 m dive with a normal ascent, followed by pink frothy sputum and bilateral opacities, fit immersion pulmonary edema. Cardiopulmonary decompression sickness follows provocative dives, such as deep dives or rapid ascents, and starts after surfacing. Barotrauma and arterial gas embolism need a rapid or breath-hold ascent, and she has no pneumothorax, crepitus or neurological signs. She did not panic or inhale water.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "nejm-dcs",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features of her history increased her risk of this condition?",
        options: ["A normal ascent rate", "Cold water at 11°C", "Fresh rather than salt water", "Nitrox breathing gas", "Shallow 12 m depth", "Strenuous swimming", "Treated hypertension"],
        correct: [1, 5, 6],
        explanation:
          "Immersion pulmonary edema is driven by a rise in pulmonary capillary pressure. Cold water causes peripheral vasoconstriction and shifts blood centrally, and hard exertion raises pulmonary pressure further. Hypertension and other cardiac disease are present in many recreational cases. A normal ascent and a shallow depth protect against decompression illness but do not cause this condition. Fresh water and nitrox have no established link to it.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "peacher-ipe",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for her?",
        options: ["Empiric antibiotics for aspiration", "Hyperbaric recompression", "IV normal saline 1 L bolus", "Methylprednisolone 125 mg IV", "Oxygen and close observation"],
        correct: 4,
        explanation:
          "Immersion pulmonary edema usually resolves within 24 to 48 hours once she is out of the water, with supplemental oxygen and positive pressure ventilation if oxygen alone is not enough. Recompression treats gas bubbles, which are not the cause here. A fluid bolus adds to pulmonary edema. There is no infection to treat, and corticosteroids have no role.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "single",
        update: "She recovers fully within 24 hours. She asks whether she can keep diving.",
        prompt: "Which of the following is the most appropriate advice before she dives again?",
        options: ["Cardiac and pulmonary evaluation", "Chest CT to exclude bullae", "Dive only in warmer water", "Repeat chest radiograph only", "No restriction once she feels well"],
        correct: 0,
        explanation:
          "Many recreational divers with immersion pulmonary edema have underlying cardiopulmonary disease such as hypertension, arrhythmia or structural heart disease, so an episode should prompt evaluation of cardiac and pulmonary function. Recurrence is common and can be fatal. Diving in warmer water alone does not address her risk. A chest CT for bullae is aimed at barotrauma, and a repeat radiograph shows only that the edema has cleared.",
        keyFeature: { topic: "environmental", n: 4 },
        source: "peacher-ipe",
      },
    ],
    sources: [S.nejmDcs, S.peacher, S.rosen],
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
        prompt: "Which of the following new findings would most strongly suggest a diagnosis other than facial baroparesis?",
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
        source: "rosen",
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
    sources: [S.rosen, S.vilke],
    ...META,
  },

  /* 34 ------------------------------------------------------------------ */
  {
    id: "environmental-34",
    topic: "environmental",
    alsoTopics: ["burns"],
    title: "A grain auger and an overhead line",
    stem:
      "You are working in a rural hospital emergency department in Saskatchewan. A 47-year-old farmer is brought in by ambulance after the grain auger he was moving touched an overhead 14 400 volt power line. He was gripping the auger with both hands. A coworker saw him go rigid, fall backwards and lie unresponsive for about a minute. He is now awake and complains of severe pain in his left shoulder and both hands. He has no medical history.\n\nThere are charred wounds on both palms and a 2 cm wound on the right heel. He holds the left arm adducted and internally rotated and cannot externally rotate it. His urine is tea coloured. His ECG shows sinus tachycardia.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "20/minute", bp: "138/86 mmHg", o2sat: "97% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely injury to his left shoulder?",
        options: ["Acromioclavicular separation", "Anterior shoulder dislocation", "Posterior shoulder dislocation", "Rotator cuff tear", "Scapular body fracture"],
        correct: 2,
        explanation:
          "Current causes violent tetanic contraction of all shoulder muscles, and the stronger internal rotators pull the humeral head backwards. An arm held adducted and internally rotated that cannot be externally rotated is the typical sign of posterior dislocation, which is often missed on a single AP view. Anterior dislocation holds the arm slightly abducted and externally rotated. An acromioclavicular separation, rotator cuff tear or scapular fracture would not block external rotation in this way.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "menu",
        select: 4,
        prompt: "Which of the following investigations or monitoring are most appropriate for him now?",
        options: ["Continuous cardiac monitoring", "Creatine kinase level", "Creatinine and potassium", "Electroencephalogram", "Serum lipase level", "Shoulder radiographs, axillary view", "Technetium bone scan", "Transthoracic echocardiogram"],
        correct: [0, 1, 2, 5],
        explanation:
          "A high voltage injury with loss of consciousness needs cardiac monitoring, because delayed arrhythmia is the main early cardiac risk. Tea coloured urine means myoglobinuria, so CK, creatinine and potassium guide fluids and screen for kidney injury and hyperkalemia. An axillary or scapular Y view confirms a posterior dislocation that an AP view can miss. Echocardiography is not routine with a normal rhythm and no instability. An EEG, lipase and bone scan do not guide early care.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "waldmann-electrical",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition once his shoulder is reduced?",
        options: ["Admit to the local ward for telemetry", "Discharge after shoulder reduction", "Observe 6 hours, then discharge", "Outpatient plastic surgery review", "Transfer to a burn centre"],
        correct: 4,
        explanation:
          "The American Burn Association calls for immediate consultation and consideration of transfer for all high voltage injuries of 1000 volts or more and for deep burns of the hands. Small entry and exit wounds can hide extensive muscle damage and compartment syndrome, and his myoglobinuria confirms deep injury. A local ward cannot manage fasciotomy or hand reconstruction. Discharge or a short observation ignores the hidden injury.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "aba-referral",
      },
    ],
    sources: [S.rosen, S.waldmann, S.abaRef],
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
          "Patients with a low voltage injury can be discharged only if they have no loss of consciousness and a normal ECG. He has a new arrhythmia after a transthoracic current path, so he needs monitoring in hospital, usually for at least 24 hours. Atrial fibrillation after an electrical injury often reverts on its own. A normal troponin does not exclude later arrhythmia. Cardioversion or rate control followed by discharge removes the monitoring he needs.",
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
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his assessment?",
        options: ["Burn dressings before any imaging", "Echocardiogram for myocardial injury", "Escharotomy of the chest wall", "FAST examination at the bedside", "Parkland fluids, reassess in 1 hour"],
        correct: 3,
        explanation:
          "A bedside FAST examination quickly looks for intraperitoneal blood in a hypotensive trauma patient and guides the decision for surgery. Dressing the burns can wait until life threats are addressed. His chest burns are not circumferential and he is not struggling to ventilate, so escharotomy is not needed. Burn formula fluids treat burn shock, not hemorrhage. Echocardiography does not address the more likely source of his shock.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "menu",
        select: 4,
        prompt: "Which of the following features of his case are criteria for burn centre consultation or referral?",
        options: ["Age 14 years or younger", "Associated traumatic injury", "Burns to the chest wall", "High voltage mechanism", "Normal level of alertness", "Partial thickness burns of 12%", "Sinus tachycardia on ECG"],
        correct: [0, 1, 3, 5],
        explanation:
          "The American Burn Association lists all high voltage injuries of 1000 volts or more, partial thickness burns of 10% or more and burns with associated trauma as triggers for immediate consultation. Children aged 14 years or younger may also benefit from a burn centre. The chest wall is not one of the listed critical areas, which are the face, hands, feet, genitalia, perineum and major joints. Sinus tachycardia and his level of alertness are not referral criteria.",
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
    sources: [S.rosen, S.abaRef, S.waldmann],
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
        options: ["Burn centre referral", "Reassurance, as it fades within a day", "Silver sulfadiazine dressings", "Tetanus booster for the wound", "Topical corticosteroid cream"],
        correct: 1,
        explanation:
          "A branching, fern-like pattern on intact skin after a lightning strike is a Lichtenberg figure, which is not a burn and fades within hours to a day. It needs no treatment. Silver sulfadiazine and burn centre referral are for true burns, and she has no broken skin. A tetanus booster is not needed for intact skin. Corticosteroid cream does not change its course.",
        keyFeature: { topic: "environmental", n: 5 },
        source: "rosen",
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
        source: "rosen",
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
        source: "rosen",
      },
    ],
    sources: [S.rosen],
    ...META,
  },

  /* 38 ------------------------------------------------------------------ */
  {
    id: "environmental-38",
    topic: "environmental",
    alsoTopics: ["tox"],
    title: "Confusion and fast breathing in a heat wave",
    stem:
      "A 74-year-old man is brought to the emergency department by ambulance on the third day of a heat wave in Montreal. His wife says he has been increasingly confused and breathing fast for 2 days. For a month he has taken ASA 650 mg four times a day for knee pain, and this week he added an over-the-counter bismuth subsalicylate product for loose stools. He has hypertension and takes ramipril.\n\nHe is restless and disoriented, with no focal deficit and no neck stiffness. His skin is flushed and moist. The chest is clear. Capillary glucose is 7.2 mmol/L.",
    vitals: { temperature: "38.9°C rectal", pulse: "112/minute", resp: "32/minute", bp: "138/76 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Na 140 mmol/L, Cl 103 mmol/L, HCO3 13 mmol/L, creatinine 142 umol/L. Venous pH 7.43 and pCO2 21 mmHg. Lactate is 2.4 mmol/L.",
        prompt: "Which of the following is the most likely cause of his confusion?",
        options: ["Chronic salicylate toxicity", "Classic heat stroke", "Early sepsis without a source", "Hypertensive encephalopathy", "Uremic encephalopathy"],
        correct: 0,
        explanation:
          "His anion gap is 140 minus (103 plus 13), which is 24, a high gap metabolic acidosis, and a pCO2 of 21 mmHg with a normal pH shows a primary respiratory alkalosis as well. This mixed pattern with confusion, tachypnea and fever, after a month of ASA 2.6 g a day plus a salicylate antidiarrheal, is chronic salicylate toxicity. Classic heat stroke needs a core temperature above 40°C. A creatinine of 142 umol/L is too mild for uremia. His BP of 138/76 mmHg excludes hypertensive encephalopathy.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "palmer-salicylate",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "His salicylate concentration is 3.9 mmol/L (54 mg/dL).",
        prompt: "Which of the following findings would each be an indication for extracorporeal treatment in salicylate poisoning?",
        options: ["Altered mental status", "Nausea and vomiting", "pH of 7.18 despite treatment", "Rectal temperature of 38.9°C", "Respiratory rate of 32/minute", "Salicylate of 7.5 mmol/L", "Tinnitus and hearing loss"],
        correct: [0, 2, 5],
        explanation:
          "The EXTRIP workgroup recommends extracorporeal treatment for any patient with altered mental status, regardless of the salicylate concentration, so his confusion alone is an indication despite a level of 3.9 mmol/L. A concentration above 7.2 mmol/L and severe acidemia with a pH of 7.20 or less are also indications. Tinnitus, vomiting, tachypnea and mild fever are common features of toxicity but do not by themselves require dialysis.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "extrip-salicylate",
      },
      {
        id: "q3",
        kind: "single",
        update: "The nephrology team will start hemodialysis in 2 hours.",
        prompt: "Which of the following is the most appropriate treatment while hemodialysis is being arranged?",
        options: ["Acetazolamide 250 mg IV", "Calcium gluconate 1 g IV", "Furosemide 40 mg IV", "Magnesium sulfate 2 g IV", "Sodium bicarbonate infusion"],
        correct: 4,
        explanation:
          "Sodium bicarbonate raises serum pH, which keeps salicylate in its ionized form outside the brain, and alkalinizes the urine to trap and excrete it. Potassium must be replaced, because hypokalemia prevents alkaline urine. Acetazolamide alkalinizes the urine but causes a metabolic acidosis that drives more salicylate into the brain. Furosemide adds volume loss without increasing clearance. Calcium and magnesium have no role.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "palmer-salicylate",
      },
      {
        id: "q4",
        kind: "single",
        update: "Before dialysis starts he becomes drowsy and his respiratory effort weakens. You decide to intubate him.",
        prompt: "Which of the following ventilator strategies is most appropriate after his intubation?",
        options: ["Low tidal volume at 14/minute", "Match his high minute ventilation", "Permissive hypercapnia", "Standard settings, gas in 1 hour", "Stop bicarbonate after intubation"],
        correct: 1,
        explanation:
          "He was compensating with a pCO2 of 21 mmHg, and any rise in pCO2 after intubation lowers the pH and moves salicylate into the brain, which can cause sudden deterioration. The ventilator must match his pre-intubation minute ventilation, with early blood gases and bicarbonate continued. A rate of 14/minute, standard settings and permissive hypercapnia all allow the pCO2 to rise. Stopping bicarbonate removes his alkalinization when it is most needed.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "palmer-salicylate",
      },
    ],
    sources: [S.palmer, S.extrip],
    ...META,
  },
];
