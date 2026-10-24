// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  tjc: { id: "tjc-sea67", citation: "The Joint Commission. Sentinel Event Alert, Issue 67. Preserving patient safety after a cyberattack. 2023.", url: "https://digitalassets.jointcommission.org/api/public/content/8bd6addf4df943f383a074f2d9d4af64" },
  ssc: { id: "ssc-2026", citation: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.", url: "https://doi.org/10.1097/CCM.0000000000007075" },
  ccsStemi: { id: "ccs-stemi", citation: "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.", url: "https://pubmed.ncbi.nlm.nih.gov/30760415/" },
  godwin: { id: "acep-psa-2014", citation: "Godwin SA, Burton JH, Gerardo CJ, et al. American College of Emergency Physicians. Clinical policy. Procedural sedation and analgesia in the emergency department. Ann Emerg Med. 2014." },
  dawson: { id: "dawson-amoah-hip", citation: "Dawson-Amoah K, Raszewski J, Duplantier N, Waddell BS. Dislocation of the hip. A review of types, causes, and treatment. Ochsner J. 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/" },
  atls: { id: "atls", citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. 2025.", url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/" },
  bts: { id: "bts-oxygen", citation: "O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28507176/" },
  stoller: { id: "stoller-o2", citation: "Stoller JK, Stefanak M, Orens D, Burkhart J. The hospital oxygen supply. An O2K problem. Respir Care. 2000.", url: "https://pubmed.ncbi.nlm.nih.gov/10771798/" },
  paedctas: { id: "paedctas", citation: "Warren DW, Jarvis A, LeBlanc L, Gravel J. Revisions to the Canadian Triage and Acuity Scale paediatric guidelines (PaedCTAS). CJEM. 2008.", url: "https://doi.org/10.1017/S1481803500010149" },
  ctas2016: { id: "ctas-2016", citation: "Bullard MJ, Musgrave E, Warren D, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) Guidelines 2016. CJEM. 2017.", url: "https://doi.org/10.1017/cem.2017.365" },
  rtvs: { id: "rtvs", citation: "Rural Coordination Centre of BC. Real-Time Virtual Support (RTVS) pathways for rural, remote and First Nations health care providers. Web page, accessed 2026.", url: "https://rccbc.ca/initiatives/rtvs/" },
} satisfies Record<string, Source>;

export const MULTIPLE_PATIENTS_S78: Samp[] = [
  /* 36 Ransomware downtime with a septic patient ------------------------- */
  {
    id: "multiple-patients-36",
    topic: "multiple-patients",
    alsoTopics: ["cqi", "shock"],
    title: "Screens go dark at shift change",
    stem:
      "A 74-year-old man is brought to the emergency department by ambulance with 2 days of fever, productive cough and new confusion. He has type 2 diabetes and chronic kidney disease. As he is moved onto a stretcher at 18:40, every hospital computer displays a ransom demand. The electronic record, order entry, laboratory interface, image viewing and electronic tracking board all stop working. Telephones, cardiac monitors, the CT scanner and the laboratory analyzers still work, and the laboratory can phone results. There are 32 patients in the department and 11 more in the waiting room. He is oriented to person only. He has crackles at the right lung base.",
    vitals: { temperature: "39.1°C oral", pulse: "118/minute", resp: "28/minute", bp: "86/48 mmHg", o2sat: "90% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step for the department?",
        options: [
          "Activate the hospital downtime procedures",
          "Divert all ambulances to other hospitals",
          "Hold new orders until access returns",
          "Send waiting patients to walk-in clinics",
          "Wait for an IT estimate of repair time",
        ],
        correct: 0,
        explanation:
          "A ransomware attack can keep critical systems down for days or weeks, and the Joint Commission advises against delaying decisive action. Declaring downtime starts the paper ordering, registration and result reporting processes so care goes on for all 43 patients. Holding orders or waiting for an IT estimate delays treatment for a septic man who cannot wait. Diverting every ambulance pushes the load onto neighbouring hospitals, which may also be affected, and it is a hospital level decision after a risk review. Sending waiting patients away unassessed is unsafe.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "tjc-sea67",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "The charge nurse asks which work practices the team should follow while the computer systems are down.",
        prompt: "Which of the following downtime practices are most appropriate in the emergency department?",
        options: [
          "Charting deferred until systems return",
          "Extra blood work drawn on every patient",
          "Independent double check of high alert drugs",
          "Laboratory tests ordered only if they change care",
          "Paper forms matching the electronic layout",
          "Pre-electronic order forms from storage",
          "Verbal orders for routine medications",
        ],
        correct: [2, 3, 4],
        explanation:
          "Without barcode scanning and order checking, the Joint Commission advises manual or double check processes for medications, especially high alert drugs such as insulin and heparin. It advises ordering tests judiciously so the laboratory can keep reporting critical results. Paper forms should match the current electronic workflow, not older forms retired when the electronic record began. Deferring charting loses the history, allergies and orders that must be entered once systems return. Extra blood work overloads a laboratory that now phones every result. Routine verbal orders leave no written record for the pharmacy and the double check to work from.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "tjc-sea67",
      },
      {
        id: "q3",
        kind: "single",
        update: "His lactate on the stand-alone blood gas analyzer is 4.6 mmol/L. Two sets of blood cultures have been drawn.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "CT chest before antibiotics",
          "Delay antibiotics until order entry returns",
          "Fluids only until the record is available",
          "Paper order for IV antibiotics now",
          "Transfer to a hospital with working systems",
        ],
        correct: 3,
        explanation:
          "His BP of 86/48 mmHg, lactate of 4.6 mmol/L, confusion and right basal crackles point to septic shock from pneumonia. The Surviving Sepsis Campaign recommends immediate antimicrobials for possible septic shock, so a handwritten order must not wait for the computers. Fluids alone treat the shock without its cause. A CT chest adds delay when the examination already shows the likely source. Transfer of an unstable man delays antibiotics further and moves the problem rather than treating it.",
        keyFeature: { topic: "multiple-patients", n: 2 },
        source: "ssc-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "An hour later, staff ask how they will learn which systems are working and when each one returns.",
        prompt: "Which of the following is the most appropriate way to keep the emergency team informed?",
        options: [
          "Email updates to each staff member",
          "Messages on the electronic tracking board",
          "Scheduled huddles with the charge nurse",
          "Updates only when IT declares recovery",
          "Written memo at the end of each shift",
        ],
        correct: 2,
        explanation:
          "Short huddles at set times give the team one shared picture of which systems are down, which still work and what has changed. The Joint Commission advises frequent huddles among unit staff and leadership rounding, with frequent status updates. Email and the electronic tracking board are among the systems that failed. Waiting for IT to declare recovery leaves staff guessing for hours. A memo at the end of each shift is too slow for a situation that changes by the hour.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "tjc-sea67",
      },
      {
        id: "q5",
        kind: "single",
        update: "Systems return 30 hours later. Hundreds of paper orders, results and notes were created during the outage.",
        prompt: "Which of the following is the most appropriate step as the electronic systems return?",
        options: [
          "Discard paper notes once systems return",
          "Keep paper charts as the only record",
          "Re-register every current patient",
          "Resume electronic orders without review",
          "Transcribe records with assigned staff",
        ],
        correct: 4,
        explanation:
          "The Joint Commission advises restoring systems deliberately, with staff assigned to scan or enter the paper record and every transcribed order authenticated, so the electronic chart is current and accurate. Resuming electronic orders without review leaves medications and results given on paper invisible to the next clinician. Discarding the paper notes destroys part of the medical record. Keeping paper as the only record splits each chart in two. Re-registering every patient adds work at triage and does not fill in the missing information.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "tjc-sea67",
      },
    ],
    sources: [S.tjc, S.ssc],
    ...META,
  },
  /* 37 Two STEMI activations and one catheterization team --------------- */
  {
    id: "multiple-patients-37",
    topic: "multiple-patients",
    alsoTopics: ["ischemic-heart-disease", "shock"],
    title: "Two activations eight minutes apart",
    stem:
      "A 54-year-old man is brought to the emergency department of your PCI centre by ambulance at 23:10 with 1 hour of chest pain. His ECG shows ST elevation in V1 to V5. He is pale, cool and confused, with crackles to both mid lung fields. Eight minutes earlier, EMS brought a 68-year-old woman with 2 hours of chest pain and ST elevation in II, III and aVF. Paramedics first reached her at 22:45. Her BP is 138/80 mmHg and she is comfortable after ASA. One catheterization laboratory team is in the hospital. A second team takes call from home and can be ready in 30 minutes. The vital signs listed are his.",
    vitals: { pulse: "118/minute", resp: "28/minute", bp: "78/46 mmHg", o2sat: "89% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate order of care for the catheterization laboratory?",
        options: [
          "Fibrinolysis for both, then angiography",
          "Man first, then the woman",
          "Tenecteplase for the man, PCI for the woman",
          "The first arrival goes first",
          "Woman first, then the man",
        ],
        correct: 1,
        explanation:
          "The man has anterior STEMI with cardiogenic shock: BP 78/46 mmHg, cool skin, confusion and crackles. Shock from STEMI needs emergency mechanical revascularization, and fibrinolysis works poorly in shock. The woman is stable, so she can safely wait a short time for the next team. Order of arrival does not set priority between two STEMI patients. Fibrinolysis for either patient gives up primary PCI, which is available here within the time limit.",
        keyFeature: { topic: "multiple-patients", n: 1 },
        source: "ccs-stemi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the woman's reperfusion?",
        options: [
          "Await the end of the first case",
          "Give tenecteplase in the department",
          "Second team called in from home now",
          "Transfer to another PCI centre",
          "Wait for the morning catheterization list",
        ],
        correct: 2,
        explanation:
          "The CCS guideline prefers primary PCI when first medical contact to device time can stay within 120 minutes. Her first contact was at 22:45. If the second team is called now and is ready by about 23:45, PCI can start well inside that limit. Waiting for the first case to finish adds an unknown delay that may push her past 120 minutes. Fibrinolysis is for patients who cannot get timely PCI, which she can. Transfer adds travel time when a team can be here in 30 minutes, and waiting until morning leaves her infarct untreated.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "ccs-stemi",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate place for the woman to wait for the second team?",
        options: [
          "Hallway stretcher with hourly vital signs",
          "Seated in the chest pain waiting area",
          "Telemetry bed on the cardiology ward",
          "Transport to the lab holding area alone",
          "With a nurse in a monitored bay, pads on",
        ],
        correct: 4,
        explanation:
          "Ventricular fibrillation and high grade block are most likely in the first hours of STEMI, so she needs continuous monitoring, defibrillator pads in place and a nurse who can act at once, with repeat vital signs and ECGs. A hallway stretcher or a chair in a waiting area leaves an arrhythmia unseen. A ward telemetry bed moves her away from the team that will treat her within the hour. Sending her alone to a holding area leaves no one to respond to an arrest.",
        keyFeature: { topic: "multiple-patients", n: 2 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "single",
        update: "EMS calls about a third STEMI patient 15 minutes away. Both teams will be busy for at least 90 minutes. The city's other PCI centre is 20 minutes away and has a free team.",
        prompt: "Which of the following is the most appropriate advice to EMS for this third patient?",
        options: [
          "Bring the patient here to wait for a team",
          "Divert every ambulance away from your hospital",
          "Give tenecteplase on scene before transport",
          "Redirect the patient to the other PCI centre",
          "Stop at the nearest non-PCI hospital first",
        ],
        correct: 3,
        explanation:
          "Regional STEMI systems rely on EMS taking each patient straight to a PCI centre that can open the artery within 120 minutes of first medical contact. A free team 20 minutes away beats a 90 minute wait here, so redirecting this one patient is fastest. Prehospital fibrinolysis is for patients who cannot reach timely PCI, and this patient can. Stopping at a non-PCI hospital adds a door in, door out delay. Diverting every ambulance closes your department to other emergencies when only the laboratory is full.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "ccs-stemi",
      },
    ],
    sources: [S.ccsStemi],
    ...META,
  },
  /* 38 Planned sedation interrupted by a chest stab wound --------------- */
  {
    id: "multiple-patients-38",
    topic: "multiple-patients",
    alsoTopics: ["analgesia-sedation", "multiple-trauma"],
    title: "Propofol drawn up in bay two",
    stem:
      "You are working in a rural hospital emergency department as the only physician, with three nurses and a respiratory therapist. A general surgeon takes call from home 20 minutes away, and the nearest trauma centre is 50 minutes away by air. A 27-year-old woman presents to the emergency department 90 minutes after her car struck a guardrail and her right knee hit the dashboard. Radiographs show an isolated posterior dislocation of the right hip without fracture. Foot sensation, ankle dorsiflexion and foot pulses are normal. Fentanyl has controlled her pain. You are drawing up propofol for a closed reduction when EMS arrives with a 19-year-old man stabbed in the left chest. The vital signs listed are hers.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "16/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The man is pale and gasping. Pulse 136/minute, BP 78/44 mmHg, O2 sat 86% on room air. Breath sounds are absent on the left.",
        prompt: "Which of the following is the most appropriate plan for the woman with the hip dislocation?",
        options: [
          "Ask the respiratory therapist to sedate her",
          "Postpone sedation and keep her analgesia going",
          "Reduce the hip now without sedation",
          "Start the sedation and leave a nurse with her",
          "Transfer her by road for reduction elsewhere",
        ],
        correct: 1,
        explanation:
          "The man is in shock with an absent left breath sound, and as the only physician you must lead his resuscitation now. Procedural sedation needs the physician doing the procedure plus a second qualified person monitoring, and emergency physicians should coordinate procedures with the department staff. Starting propofol and then leaving her means no one can manage apnea or hypotension. Her limb is neurovascularly intact and her pain is controlled, so a short delay is safe. Handing the sedation to the respiratory therapist takes the person you need for the man's breathing. Reduction without sedation is painful and often fails. Transfer adds hours for a procedure you can do here.",
        keyFeature: { topic: "multiple-patients", n: 2 },
        source: "acep-psa-2014",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "You place a left chest tube. It drains 1 600 mL of blood at once. After 2 units of O-negative red cells his BP is 84/50 mmHg.",
        prompt: "Which of the following calls are most appropriate to make now for this man?",
        options: [
          "Blood bank to activate massive transfusion",
          "Cardiology for an urgent echocardiogram",
          "CT technologist for a chest CT",
          "General surgeon to come in now",
          "Interventional radiology for embolization",
          "Pulmonology for bronchoscopy",
          "Trauma centre to arrange air transfer",
        ],
        correct: [0, 3, 6],
        explanation:
          "Immediate drainage of 1 500 mL or more of blood is a massive hemothorax, and with ongoing hypotension he will likely need an operative thoracotomy. He needs a massive transfusion protocol, early transfer to definitive surgical care, and the local surgeon in the building in case he cannot wait for the aircraft. Calling all three at once saves the minutes that sequential calls would cost. An echocardiogram, a CT scan or bronchoscopy adds delay and does not stop intrathoracic bleeding in an unstable patient. Embolization is not the treatment for a bleeding chest wound in shock.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following new findings before reduction would most increase the urgency of reducing her hip?",
        options: [
          "Bruising over the right knee",
          "Hip pain rising to 5 out of 10",
          "Nausea after a fentanyl dose",
          "Pulse of 98/minute",
          "Weak ankle dorsiflexion",
        ],
        correct: 4,
        explanation:
          "Sciatic nerve injury complicates about 10% of posterior hip dislocations, and the peroneal division is the part most often affected, so new weakness of ankle dorsiflexion after a documented normal examination points to a nerve under strain from the displaced femoral head. It needs documentation and reduction without further delay, which is why a nurse should repeat her neurovascular checks at set times. Rising pain calls for more analgesia. Nausea after fentanyl needs an antiemetic. A pulse of 98/minute fits pain. Knee bruising from the dashboard prompts a knee examination, because an ipsilateral knee injury can change the reduction plan, but it does not make reduction more urgent.",
        keyFeature: { topic: "multiple-patients", n: 2 },
        source: "dawson-amoah-hip",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following staffing plans is most appropriate for her sedation?",
        options: [
          "A nurse monitors her while you sedate and reduce",
          "Nurse-administered propofol while you reduce",
          "The respiratory therapist sedates and monitors her",
          "Wait for an anaesthetist to manage the sedation",
          "You sedate, reduce and monitor her yourself",
        ],
        correct: 0,
        explanation:
          "A nurse or other qualified person should be present to monitor the patient continuously, in addition to the physician doing the procedure. You give the propofol and reduce the hip while the nurse watches her airway, breathing and monitor. Doing all three yourself leaves no one watching while both hands pull on the leg. Having the respiratory therapist both sedate and monitor leaves one person giving the drug and watching the airway, and nurse or respiratory therapist administration of propofol depends on provincial scope and local policy. Propofol is safe in the emergency department in trained hands, so waiting for an anaesthetist only adds delay.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "acep-psa-2014",
      },
    ],
    sources: [S.godwin, S.atls, S.dawson],
    ...META,
  },
  /* 39 Loss of piped oxygen ---------------------------------------------- */
  {
    id: "multiple-patients-39",
    topic: "multiple-patients",
    alsoTopics: ["asthma-copd"],
    title: "Alarms on every wall outlet",
    stem:
      "You are working in a community hospital emergency department at 04:00. A 64-year-old woman with a COPD exacerbation is on oxygen at 4 L/minute by nasal prongs. She is alert and speaking in sentences. At 04:05 a contractor's excavator breaks the main oxygen line outside the building. Wall oxygen alarms sound across the department, and facilities staff expect the repair to take at least 6 hours. Portable cylinders on hand will last about 2 hours at current use. Other patients on oxygen include a 71-year-old man intubated for pneumonia on a ventilator at FiO2 0.6. The vital signs listed are hers.",
    vitals: { temperature: "37.2°C oral", pulse: "96/minute", resp: "22/minute", bp: "142/84 mmHg", o2sat: "97% on 4 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        update: "Six patients in the department are receiving oxygen.",
        prompt: "Which of the following patients should be the first to receive portable oxygen cylinders?",
        options: [
          "Man, 30, after sedation, O2 sat 99% on 3 L",
          "Man, 66, chest pain, O2 sat 97% on 2 L",
          "Man, 71, ventilated at FiO2 0.6",
          "Woman, 64, COPD, O2 sat 97% on 4 L",
          "Woman, 45, migraine, O2 sat 98% on 2 L",
          "Woman, 58, pneumonia, O2 sat 89% on 15 L mask",
        ],
        correct: [2, 5],
        explanation:
          "The ventilated man depends entirely on supplied oxygen, and the woman with pneumonia is hypoxemic at 89% despite 15 L/minute. Both need cylinders first. The BTS guideline targets 94% to 98% for most patients and 88% to 92% for those at risk of hypercapnic failure, and it advises against oxygen for patients who are not hypoxemic, such as those with chest pain or migraine and normal saturation. The woman with COPD at 97% is above her target and can have her flow reduced. The man recovering from sedation at 99% can likely come off oxygen with monitoring.",
        keyFeature: { topic: "multiple-patients", n: 1 },
        source: "bts-oxygen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to make the remaining oxygen last?",
        options: [
          "Reserve all cylinders for the ventilated man",
          "Stop oxygen for every patient on nasal prongs",
          "Switch every patient to 2 L/minute by prongs",
          "Titrate each patient to a target saturation",
          "Wait for the facilities estimate of repair time",
        ],
        correct: 3,
        explanation:
          "Prescribing oxygen to a target range, 94% to 98% for most patients and 88% to 92% for those at risk of hypercapnia, gives each patient what they need and no more. That frees cylinders for the patients who depend on them. A fixed 2 L/minute for everyone underdoses the hypoxemic and overdoses those who need none. Stopping all nasal prong oxygen ignores patients who are hypoxemic on low flow. Keeping every cylinder for one patient abandons the woman with pneumonia. Waiting for an estimate wastes the 2 hours of supply on hand.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "bts-oxygen",
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes after her flow is turned down, the woman with COPD is alert, breathing 20/minute, with an O2 sat of 90% on 1 L/minute.",
        prompt: "Which of the following O2 sat ranges is the most appropriate target for her?",
        options: ["84 to 87%", "88 to 92%", "93 to 95%", "94 to 98%", "97 to 100%"],
        correct: 1,
        explanation:
          "COPD puts her at risk of hypercapnic respiratory failure, so the BTS target is 88% to 92%. Her O2 sat of 90% on 1 L/minute is inside that range, she is alert and her breathing rate has settled, so the lower flow is safe and saves oxygen. The range of 94% to 98% is for patients without that risk, and pushing her higher can raise her carbon dioxide. A range of 84% to 87% accepts hypoxemia. A target of 97% to 100% is what her original 4 L/minute produced and wastes oxygen.",
        keyFeature: { topic: "multiple-patients", n: 2 },
        source: "bts-oxygen",
      },
      {
        id: "q4",
        kind: "single",
        update: "Facilities report that the reserve oxygen tank feeds the building through the same broken pipe.",
        prompt: "Which of the following is the most appropriate hospital level step now?",
        options: [
          "Ask hospital command for bulk cylinder resupply",
          "Close the emergency department to all patients",
          "Move every oxygen patient to another hospital",
          "Run the ventilator on room air until repair",
          "Wait for the repair before taking more steps",
        ],
        correct: 0,
        explanation:
          "In many hospitals the primary and reserve oxygen supplies join and enter the building through one pipe, so a single break cuts off both. Cylinders, ideally linked in manifolds along the oxygen line, become the only source for 6 hours. Hospital command must arrange bulk cylinder deliveries and manifolds now, because the 2 hours of supply on hand will not last. Moving every oxygen patient puts unstable patients on the road and loads other hospitals. Room air would leave the ventilated man hypoxemic. Closing to all patients turns away emergencies that need no oxygen. Waiting lets the supply run out.",
        keyFeature: { topic: "multiple-patients", n: 4 },
        source: "stoller-o2",
      },
    ],
    sources: [S.bts, S.stoller],
    ...META,
  },
  /* 40 Rural night with an infant in shock and a tourniquet -------------- */
  {
    id: "multiple-patients-40",
    topic: "multiple-patients",
    alsoTopics: ["pediatric-fever", "shock"],
    title: "Two arrivals at 02:00 in the north",
    stem:
      "You are working overnight as the only physician in a rural hospital emergency department in northern British Columbia, with two nurses. No other physician is on call in the community, and the referral hospital is 3 hours away by road. At 02:00 an 8-month-old girl is carried in with 2 days of vomiting and diarrhea. She is limp and mottled, with a weak cry and a capillary refill of 5 seconds. Two minutes later EMS brings a 66-year-old man who cut his thigh with a chainsaw. A tourniquet placed 40 minutes ago has stopped the bleeding. He is alert, with a pulse of 104/minute and BP 118/72 mmHg. The vital signs listed are hers.",
    vitals: { temperature: "38.2°C rectal", pulse: "188/minute", resp: "44/minute", o2sat: "97% on room air", weight: "8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first use of your time?",
        options: [
          "Call the referral hospital for both patients",
          "Explore the man's wound under the tourniquet",
          "Infant resuscitation with vascular access now",
          "Loosen the tourniquet to check for bleeding",
          "Wound repair for the man before the infant",
        ],
        correct: 2,
        explanation:
          "The infant is in shock: limp, mottled, a pulse of 188/minute and a capillary refill of 5 seconds. Shock is the highest paediatric CTAS acuity and needs a physician now for vascular access and fluid. The man's bleeding is controlled by the tourniquet and his vital signs are stable, so a nurse can watch him for a few minutes. Exploring, repairing or loosening his wound risks fresh bleeding and pulls you away from the sicker patient. Calls for transfer matter but come after the infant's resuscitation has started.",
        keyFeature: { topic: "multiple-patients", n: 1 },
        source: "paedctas",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to get help with the infant's resuscitation?",
        options: [
          "Ask EMS to drive her to the referral hospital",
          "Call the referral pediatrician once she is stable",
          "Email the regional PICU with her vital signs",
          "Pediatric real-time virtual support video call",
          "Wait for the day physician at 08:00",
        ],
        correct: 3,
        explanation:
          "British Columbia's Real-Time Virtual Support has a pediatric pathway that rural physicians and nurses can reach 24 hours a day by video or phone, so a pediatric emergency physician can guide her resuscitation now. With no second physician in the community, this is the fastest added help. A 3 hour drive in shock without resuscitation is unsafe. Waiting until she is stable or until 08:00 gives up advice when it matters most. An email is too slow for a child in shock.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "rtvs",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following tasks should you assign to the nurse caring for the man?",
        options: [
          "Check the wound for new bleeding regularly",
          "Give IV analgesia as ordered",
          "Give oral fluids and a meal",
          "Loosen the tourniquet every 15 minutes",
          "Record the tourniquet application time",
          "Remove the tourniquet to clean the wound",
          "Wheel him out to the waiting room",
        ],
        correct: [0, 1, 4],
        explanation:
          "A tourniquet that controls bleeding stays on until the wound can be managed definitively, and the time it was applied is recorded because ischemic injury grows with time. The nurse watches for fresh bleeding and treats his pain, which is severe with a tourniquet in place. Loosening it on a schedule or removing it to clean the wound restarts bleeding that has already cost him blood. He may need surgery, so food and drink should wait. The waiting room is no place for a patient with a tourniquet on.",
        keyFeature: { topic: "multiple-patients", n: 3 },
        source: "atls",
      },
      {
        id: "q4",
        kind: "single",
        update: "At 02:40 a 24-year-old man walks in with an asthma flare. He speaks in short phrases, with an O2 sat of 91% on room air and a respiratory rate of 30/minute.",
        prompt: "Which of the following CTAS levels is most appropriate for this man at triage?",
        options: ["CTAS level 1", "CTAS level 2", "CTAS level 3", "CTAS level 4", "CTAS level 5"],
        correct: 1,
        explanation:
          "Under CTAS 2016, moderate respiratory distress with an O2 sat below 92% is level 2, which fits his short phrases, rate of 30/minute and O2 sat of 91%. He needs a bronchodilator started by protocol and a physician within 15 minutes, which is hard tonight and is why he must not be left to wait unseen. Level 1 is for severe distress or an O2 sat below 90%. Level 3 is mild distress with an O2 sat of 92% to 94%, which he is worse than.",
        keyFeature: { topic: "multiple-patients", n: 1 },
        source: "ctas-2016",
      },
    ],
    sources: [S.paedctas, S.rtvs, S.atls, S.ctas2016],
    ...META,
  },
];
