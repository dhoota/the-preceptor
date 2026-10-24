// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  imist: { id: "imist-ambo", citation: "Iedema R, Ball C, Daly B, et al. Design and trial of a new ambulance-to-emergency department handover protocol: IMIST-AMBO. BMJ Qual Saf. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22626739/" },
  hartford: { id: "hartford-compendium", citation: "American College of Surgeons. Strategies to enhance survival in active shooter and intentional mass casualty events: a compendium (the Hartford Consensus). Bull Am Coll Surg. 2015.", url: "https://www.stopthebleed.org/media/0svpk45s/hartford_consensus_compendium.pdf" },
  chemm: { id: "chemm-salt", citation: "US Department of Health and Human Services. Chemical Hazards Emergency Medical Management (CHEMM). SALT mass casualty triage algorithm. Accessed 24 October 2026.", url: "https://chemm.hhs.gov/incident-primer/triage/salt-triage" },
  cmaj: { id: "cmaj-button-battery", citation: "Zipursky AR, Ratnapalan S. Button battery ingestions in children. CMAJ. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8486471/" },
  ncpc: { id: "ncpc-battery", citation: "National Capital Poison Center. Button battery ingestion triage and treatment guideline. Revised 2018.", url: "https://www.poison.org/battery/guideline" },
  elso: { id: "elso-ecpr", citation: "Richardson ASC, Tonna JE, Nanjayya V, et al. Extracorporeal cardiopulmonary resuscitation in adults. Interim guideline consensus statement from the Extracorporeal Life Support Organization. ASAIO J. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7984716/" },
  arrest: { id: "arrest-trial", citation: "Yannopoulos D, Bartos J, Raveendran G, et al. Advanced reperfusion strategies for patients with out-of-hospital cardiac arrest and refractory ventricular fibrillation (ARREST): a phase 2, single centre, open-label, randomised controlled trial. Lancet. 2020." },
  umpierrez: { id: "umpierrez-pumps", citation: "Umpierrez GE, Klonoff DC. Diabetes technology update: use of insulin pumps and continuous glucose monitoring in the hospital. Diabetes Care. 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6054505/" },
  dcHypo: { id: "dc-hypoglycemia", citation: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Can J Diabetes. 2018.", url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" },
  phacMeasles: { id: "phac-measles-hp", citation: "Public Health Agency of Canada. Measles: for health professionals. 2026.", url: "https://www.canada.ca/en/public-health/services/diseases/measles/health-professionals-measles.html" },
  cigMeasles: { id: "cig-measles", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4, active vaccines. Measles vaccines. Last partial content update 2025.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html" },
} satisfies Record<string, Source>;

export const EMS_S88: Samp[] = [
  /* 37 Insulin pump left off after a severe low --------------------------- */
  {
    id: "ems-37",
    topic: "ems",
    alsoTopics: ["loc"],
    title: "Handover after a low sugar",
    stem:
      "A 23-year-old man is brought to the emergency department by an advanced care paramedic crew at 1620. His roommate found him confused, sweating and combative in their apartment at 1440 and called 911. He has type 1 diabetes and uses an insulin pump. The crew found a capillary glucose of 1.9 mmol/L. They could not place an IV while he fought them, so they gave glucagon 1 mg IM, and he woke over 15 minutes. He is now alert and oriented and has eaten a sandwich. His capillary glucose is 7.4 mmol/L. An infusion cannula sits on his abdomen with no tubing attached, and his pump is in the crew's bag. The crew is about to leave for another call.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "124/76 mmHg", o2sat: "99% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following details should you obtain from the paramedics before they leave?",
        options: [
          "Current capillary glucose",
          "Current Glasgow Coma Scale score",
          "His usual pump basal rate",
          "Time glucagon was given",
          "Time the pump was disconnected",
          "Today's insulin boluses",
          "What the roommate saw and heard",
        ],
        select: 3,
        correct: [3, 4, 6],
        explanation:
          "IMIST-AMBO asks the crew for the mechanism, the signs found, the treatment given and the background. Here three of those facts leave with the crew. The time the pump came off tells you how long he has gone without any insulin. The time of the glucagon tells you when its effect will wear off. What the roommate saw, such as a convulsion, a fall or how long he was confused, comes only through the crew because the roommate is not here. His glucose and Glasgow Coma Scale score can be measured now, and his basal rate and boluses are stored in the pump and known to him.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
      {
        id: "q2",
        kind: "single",
        update: "The crew disconnected the pump at 1450 when they found him hypoglycemic, and it has not been reconnected. It is now 1620.",
        prompt: "Which of the following is the most appropriate plan for his insulin now?",
        options: ["Basal insulin restarted now", "Dextrose 10% with no insulin", "Hold insulin until glucose exceeds 14", "Hold insulin until his next meal", "Rapid-acting insulin 10 units SC"],
        correct: 0,
        explanation:
          "An insulin pump delivers only rapid-acting insulin and leaves a small depot under the skin, so even a short interruption can cause hyperglycemia, and pump failure can lead to diabetic ketoacidosis. He has had no insulin for 90 minutes. He is now alert and eating, and impaired consciousness, the reason not to use a pump in hospital, no longer applies, so his basal insulin should be restored now, by reconnecting the pump or by long-acting basal insulin. Holding insulin until his glucose rises or until his next meal, or giving dextrose without insulin, invites ketosis. A fixed bolus of 10 units at a glucose of 7.4 mmol/L, after a severe low, risks another one.",
        keyFeature: { topic: "ems", n: 2 },
        source: "umpierrez-pumps",
      },
      {
        id: "q3",
        kind: "single",
        update: "The crew adds that his roommate told them this is his third severe low this month, and that each time he became confused before he noticed any warning signs.",
        prompt: "Which of the following does this detail from the crew most strongly suggest?",
        options: ["Adrenal insufficiency", "Diabetic gastroparesis", "Factitious insulin use", "Hypoglycemia unawareness", "Insulinoma of the pancreas"],
        correct: 3,
        explanation:
          "Hypoglycemia unawareness occurs when the threshold for autonomic warning symptoms comes close to the level that impairs the brain, so confusion can be the first sign. Frequent lows blunt the normal responses, and three severe episodes this month fit that pattern. Diabetes Canada lists unawareness as a risk factor for severe hypoglycemia, notes that it can reverse with strict avoidance of lows for 2 days to 3 months, and advises a pump or continuous glucose monitoring with follow-up, and review of the risk of driving. Nothing in the history points to adrenal failure, gastroparesis, secret insulin use or an insulin-secreting tumour.",
        keyFeature: { topic: "ems", n: 2 },
        source: "dc-hypoglycemia",
      },
      {
        id: "q4",
        kind: "single",
        update: "A resident asks what the crew should have been told to give if he had stayed unresponsive 15 minutes after the glucagon, once an IV was in place.",
        prompt: "Which of the following treatments would have been most appropriate for him at that point?",
        options: ["dextrose 50% 50 mL IV", "dextrose 50% 10 mL IV", "dextrose 50% 150 mL IV", "glucagon 1 mg IM repeated", "oral glucose gel 15 g"],
        correct: 0,
        explanation:
          "Diabetes Canada advises 10 to 25 g of glucose IV, which is 20 to 50 mL of 50% dextrose given over 1 to 3 minutes, for an unconscious person with IV access, so 50 mL gives 25 g. Ten millilitres gives only 5 g, below that range, and 150 mL gives 75 g, three times the top of it. The guideline uses glucagon for the unconscious person without IV access, and an IV was now in place. Oral glucose is for a person who is conscious and can swallow safely.",
        keyFeature: { topic: "ems", n: 1 },
        source: "dc-hypoglycemia",
      },
    ],
    sources: [S.imist, S.umpierrez, S.dcHypo],
    ...META,
  },

  /* 38 Active assailant on a college campus ------------------------------- */
  {
    id: "ems-38",
    topic: "ems",
    alsoTopics: ["multiple-patients", "multiple-trauma"],
    title: "A call from a college campus",
    stem:
      "You are working in the emergency department of a lead trauma hospital. At 1340 the EMS district chief calls from a college campus 8 minutes away. A man with a rifle has shot several people in a lecture building. Police are inside and report that he is contained on the third floor but not yet in custody. Wounded students and staff are on the first floor and in the lobby, out of his line of fire. Police have set up a casualty collection point in a parking lot across the street. Six ambulances wait at the staging area. The paramedic service and police train together as rescue task forces. The most seriously wounded so far is a 20-year-old woman shot in the upper abdomen, whose vital signs are below. The chief asks how to use the paramedics.",
    vitals: { pulse: "136/minute", resp: "28/minute", bp: "84/50 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate role for the paramedics while the shooter is still active?",
        options: ["Enter the third floor to reach the wounded", "Go in with police to the first floor", "Hold at staging until the building is cleared", "Send crews in alone in ballistic vests", "Treat only patients carried to staging"],
        correct: 1,
        explanation:
          "The wounded on the first floor are outside the real hot zone, which is the third floor where the shooter is contained. The Hartford Consensus calls for earlier access to victims outside that zone, using trained teams of paramedics with ballistic protection escorted by police, so that bleeding is controlled within minutes. This service has trained such rescue task forces in advance, which the consensus requires. Holding at staging until the whole building is cleared, or treating only those carried out, lets people bleed to death while waiting. Crews without a police escort, or crews sent to the third floor, enter a zone where they can be shot.",
        keyFeature: { topic: "ems", n: 4 },
        source: "hartford-compendium",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following interventions should the paramedics give first priority to for casualties on the first floor?",
        options: ["Cervical collars for neck wounds", "Crystalloid IV to a normal BP", "Intubation of unresponsive casualties", "Splinting of long bone fractures", "Tourniquets for limb bleeding"],
        correct: 4,
        explanation:
          "The Hartford Consensus holds that no one should die from uncontrolled bleeding after a mass shooting, and it builds its response on hemorrhage control with tourniquets and hemostatic dressings, followed by rapid extrication and transport. A tourniquet takes seconds and stops limb bleeding at once. The consensus puts hemorrhage control before fluid resuscitation. Intubation, collars and splints are not part of the hemorrhage control and rapid extrication that the consensus puts first.",
        keyFeature: { topic: "ems", n: 4 },
        source: "hartford-compendium",
      },
      {
        id: "q3",
        kind: "single",
        update: "A rescue task force reaches a 52-year-old instructor in the lobby with a gunshot wound to the chest. He has no pulse and does not breathe after his airway is opened.",
        prompt: "Which of the following SALT triage categories should the crew assign to this instructor?",
        options: ["Tag as dead", "Tag as delayed", "Tag as expectant", "Tag as immediate", "Tag as minimal"],
        correct: 0,
        explanation:
          "In SALT triage, an adult who does not breathe once the airway has been opened is tagged dead. Children receive two rescue breaths first, which does not apply to this adult. Expectant is for patients who are still alive but unlikely to survive given their injuries and the care available. Immediate is for those with life-threatening injuries and a good chance of survival, such as the wounded who are still breathing and bleeding. CPR is not one of the SALT lifesaving interventions, which are opening the airway, controlling bleeding, chest decompression and antidotes.",
        keyFeature: { topic: "ems", n: 4 },
        source: "chemm-salt",
      },
      {
        id: "q4",
        kind: "single",
        update: "Police carry four wounded students, including the woman shot in the abdomen, to the casualty collection point. One ambulance is ready to leave for your hospital.",
        prompt: "Which of the following students should the first ambulance transport to your hospital?",
        options: ["Shot in the arm, tourniquet on, alert", "Shot in the hand, walking, not bleeding", "Shot in the head, GCS 3, no pupil reflex", "Shot in the thigh, tourniquet on, pulse 104", "Shot in the upper abdomen, pulse 136"],
        correct: 4,
        explanation:
          "A gunshot wound to the upper abdomen with a pulse of 136/minute and a pressure of 84/50 mmHg means bleeding inside the torso, where no tourniquet or pressure can reach, so this student needs rapid transport to surgery and is the first priority as an immediate patient. The two students whose limb bleeding is controlled by tourniquets are stable for now and can follow on the next ambulances. The student walking with a hand wound has minimal injuries. A head wound with a GCS of 3 and no pupil reflexes is unlikely to survive and fits the expectant category while resources are stretched.",
        keyFeature: { topic: "ems", n: 4 },
        source: "chemm-salt",
      },
    ],
    sources: [S.hartford, S.chemm],
    ...META,
  },

  /* 39 Missing battery far from an endoscopist ---------------------------- */
  {
    id: "ems-39",
    topic: "ems",
    title: "A toddler and an empty remote",
    stem:
      "You are working in a rural hospital emergency department 2.5 hours by road from the nearest children's hospital, which offers pediatric endoscopy. A 3-year-old girl is brought in by her father 50 minutes after he found her chewing on a television remote control. The remote takes one 20 mm lithium coin battery, and its compartment is empty. She gagged and coughed briefly at home. She now refuses to drink and is drooling slightly. She has no medical history. She is alert and playing. Her chest is clear, there is no stridor, and her abdomen is soft and not tender.",
    vitals: { temperature: "36.9°C axillary", pulse: "118/minute", resp: "24/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "14 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for her now?",
        options: ["Abdominal radiograph alone", "CT of the neck, chest and abdomen", "Radiographs from neck to abdomen", "Ultrasound of the abdomen", "No imaging before transfer"],
        correct: 2,
        explanation:
          "A child of 12 or younger with a possible battery ingestion needs radiographs at once, without waiting for symptoms. The films must cover the neck, esophagus and abdomen, with frontal and lateral views when the battery is in the esophagus, because its position sets the urgency and the plan the receiving team will follow. Her gagging, drooling and refusal to drink raise concern for a battery in the esophagus, which an abdominal film alone would miss. The guideline calls for plain radiographs, so ultrasound and CT are not the first step. Sending her without imaging leaves both teams guessing about the urgency.",
        keyFeature: { topic: "ems", n: 3 },
        source: "ncpc-battery",
      },
      {
        id: "q2",
        kind: "single",
        update: "The radiographs show a 20 mm round radiopaque disc in the upper esophagus at the level of the clavicles. She is still alert and playing.",
        prompt: "Which of the following is the most appropriate plan for her transfer?",
        options: ["Admit locally for repeat radiographs", "Immediate transfer for removal", "Observe 4 hours, then reimage", "Transfer for endoscopy tomorrow", "Transfer if she starts vomiting"],
        correct: 1,
        explanation:
          "A button battery in the esophagus must be removed endoscopically at once, because it can cause serious tissue damage within 2 hours of ingestion. She swallowed it at least 50 minutes before arrival and the drive is 2.5 hours, so the transfer has to start now. Her playful, well appearance does not mean the battery is harmless, since children can look well while the esophagus is being burned. Observing her, admitting her locally, waiting until tomorrow or waiting for vomiting all let the injury deepen toward perforation or a fistula into a blood vessel.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cmaj-button-battery",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her transfer is being arranged. It is now about 80 minutes since her father found her with the remote.",
        prompt: "Which of the following should she receive while she remains in your department?",
        options: ["glucagon 0.5 mg IV", "metoclopramide 1.5 mg IV", "sucralfate 1 g PO every 10 minutes", "Water to wash the battery down", "No oral intake until removal"],
        correct: 2,
        explanation:
          "Within 12 hours of ingestion, sucralfate given in hospital, 1 g every 10 minutes for up to 3 doses, led to fewer full-thickness esophageal injuries in animal studies. Honey plays the same role before a child reaches hospital. Neither may delay her transfer. Neither source lists glucagon, metoclopramide or water among the measures before removal, and removal must not wait for any drug. Keeping her fully fasting gives up a simple measure that may limit the burn during a 2.5 hour drive.",
        keyFeature: { topic: "ems", n: 3 },
        source: "cmaj-button-battery",
      },
      {
        id: "q4",
        kind: "single",
        update: "While the transfer is being arranged, her mother calls. She now thinks the remote may have been missing its battery since yesterday afternoon, about 20 hours ago.",
        prompt: "Which of the following changes in her care now because of this information?",
        options: ["Defer transfer until the next day", "Give honey instead of sucralfate", "Repeat radiographs now", "Start ceftriaxone now", "Stop further sucralfate doses"],
        correct: 4,
        explanation:
          "Sucralfate and honey are given only when the battery has been in the esophagus for 12 hours or less, and the National Capital Poison Center advises against both when it may have been there longer. The new history puts the possible time at 20 hours, so further sucralfate doses stop, and honey is excluded for the same reason. Removal is still needed at once, so the transfer goes ahead, and the receiving team must be told of the possible 20 hour dwell. New films would not change the plan, and nothing yet suggests the perforation or infection that antibiotics would treat.",
        keyFeature: { topic: "ems", n: 3 },
        source: "ncpc-battery",
      },
    ],
    sources: [S.ncpc, S.cmaj],
    ...META,
  },

  /* 40 Refractory VF and an ECPR program ---------------------------------- */
  {
    id: "ems-40",
    topic: "ems",
    alsoTopics: ["arrhythmia"],
    title: "A patch from a fitness centre",
    stem:
      "You are working in the emergency department of a tertiary care hospital that runs an extracorporeal CPR (ECPR) program for out-of-hospital cardiac arrest. At 0712 an advanced care paramedic crew patches from a fitness centre 10 minutes away. A 49-year-old man collapsed on a treadmill at 0655. A staff member started CPR at once and gave two AED shocks before the crew arrived at 0701. The crew has given a third shock, epinephrine 1 mg IV and amiodarone 300 mg IV. He remains in ventricular fibrillation. A supraglottic airway and a mechanical CPR device are in place. A community hospital without an ECPR program is 4 minutes away.",
    vitals: { weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew at this point in the patch?",
        options: ["Continue on scene for 10 more minutes", "Give amiodarone 150 mg before moving", "Intubate before leaving the scene", "Load now for transport to your hospital", "Stay on scene until circulation returns"],
        correct: 3,
        explanation:
          "He is 49, his arrest was witnessed, CPR began at once and he remains in ventricular fibrillation after three shocks, which fits the usual criteria for ECPR. The ELSO guideline aims for ECMO flow within 60 minutes of collapse and advises moving suitable patients quickly to the nearest hospital that can provide it, with mechanical compressions to keep CPR going during transport. He is already 17 minutes from collapse. Ten more minutes on scene, a further drug dose before moving or an intubation that the supraglottic airway makes unnecessary each uses up that time. Staying until circulation returns abandons the 60 minute target for ECMO flow, which is the reason to move him now.",
        keyFeature: { topic: "ems", n: 1 },
        source: "elso-ecpr",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should your department activate or prepare before he arrives?",
        options: ["Cardiac catheterization team", "CT scanner held for his arrival", "ECPR cannulation team", "Massive hemorrhage protocol", "Tenecteplase drawn up for arrival", "Transvenous pacing kit"],
        select: 2,
        correct: [0, 2],
        explanation:
          "In the ARREST trial, patients in refractory ventricular fibrillation went straight to the catheterization laboratory, where ECMO was started and coronary angiography followed so that any coronary occlusion could be treated. Calling both teams during the patch lets them assemble before he arrives. A CT scanner cannot be used while compressions continue. A massive hemorrhage protocol treats bleeding, which he does not have. Fibrinolysis was not part of that pathway, and he has no reason to receive it before cannulation. A pacing kit treats bradycardia, not ventricular fibrillation.",
        keyFeature: { topic: "ems", n: 1 },
        source: "arrest-trial",
      },
      {
        id: "q3",
        kind: "single",
        update: "He arrives in ventricular fibrillation with mechanical compressions running. The paramedic begins the handover while your team prepares to cannulate.",
        prompt: "Which of the following handover details most supports proceeding with ECPR for this patient?",
        options: ["amiodarone 300 mg IV given at 0705", "End-tidal CO2 of 24 mmHg en route", "epinephrine 1 mg IV at 0703", "Pupils 4 mm at the scene", "Supraglottic airway at 0702"],
        correct: 1,
        explanation:
          "The ELSO guideline lists an end-tidal CO2 above 10 mmHg during conventional CPR as a favourable sign for ECPR, because it shows that compressions are moving blood and his tissues are still producing carbon dioxide. A reading of 24 mmHg during the drive is a change en route that only the crew saw. The times of his amiodarone and epinephrine doses and of airway insertion record his care but do not predict whether ECPR will help. The ELSO criteria do not use pupil findings.",
        keyFeature: { topic: "ems", n: 2 },
        source: "elso-ecpr",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later, a resident asks which detail from the crew would have ruled him out of the ECPR program.",
        prompt: "Which of the following details, if the crew had reported it, would most clearly exclude him from ECPR?",
        options: ["Asthma treated with inhalers", "Collapse during exercise", "Palliative care for metastatic cancer", "Previous coronary stent", "Smoker of 20 cigarettes a day"],
        correct: 2,
        explanation:
          "The ELSO guideline excludes patients with a known life-limiting illness, such as terminal cancer, and those for whom ECPR would not fit their goals of care. Paramedics often learn these facts from family at the scene, and that information may not reach the hospital any other way. A previous coronary stent and smoking make coronary occlusion more likely, a cause that ECPR and angiography can treat. Collapse during exercise is a common setting for a witnessed, shockable arrest. Asthma treated with inhalers is not a life-limiting illness.",
        keyFeature: { topic: "ems", n: 2 },
        source: "elso-ecpr",
      },
    ],
    sources: [S.elso, S.arrest],
    ...META,
  },

  /* 41 Call ahead for a child with suspected measles --------------------- */
  {
    id: "ems-41",
    topic: "ems",
    alsoTopics: ["pediatric-fever", "infectious-diseases"],
    title: "A call ahead about a child with a rash",
    stem:
      "You are working in a community hospital emergency department in Ontario during a regional measles outbreak. At 1520 a primary care paramedic crew calls ahead from a home 15 minutes away. A 4-year-old boy who has never been vaccinated has had 4 days of fever, cough, runny nose and red eyes. A red blotchy rash began on his face yesterday and has spread to his trunk. His older sister was diagnosed with measles 12 days ago. He is drowsy but rousable and is drinking less. His mother will ride with him. The waiting room is full, and the department's single airborne infection isolation room is empty. The crew's vital signs are below.",
    vitals: { temperature: "39.2°C axillary", pulse: "140/minute", resp: "30/minute", bp: "96/58 mmHg", o2sat: "96% on room air", weight: "16 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew for their arrival with this boy?",
        options: ["Bring him straight to the isolation room", "Divert to the children's hospital 90 minutes away", "Hold him in the ambulance until he is tested", "Mask him and register him at the triage desk", "Transfer care in a corridor near triage"],
        correct: 0,
        explanation:
          "Fever, cough, runny nose and red eyes followed by a rash spreading down from the face, in an unvaccinated child whose sister has measles, is suspected measles. The Public Health Agency of Canada advises airborne precautions, including an airborne infection isolation room, for any suspected case, and notes that the virus can stay in the air for up to 2 hours after an infected person has left a space. Calling ahead lets staff take him straight to the empty room. Registering at the desk or handing over in a corridor near triage spreads the virus to a full waiting room. Holding him in the ambulance delays care for a drowsy child while a room is free, and a 90 minute diversion is not needed when your department can isolate him.",
        keyFeature: { topic: "ems", n: 1 },
        source: "phac-measles-hp",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following should your department arrange in addition to the isolation room before he arrives?",
        options: [
          "Cohort with other febrile children",
          "Contact precautions alone",
          "Fit-tested N95 respirators for staff",
          "N95 only for unvaccinated staff",
          "Report to public health now",
          "Surgical masks for all staff",
          "Wait for PCR before reporting",
        ],
        select: 2,
        correct: [2, 4],
        explanation:
          "The Public Health Agency of Canada recommends a fit-tested N95 respirator for anyone caring for a suspected or confirmed case, whatever their immunity or vaccination status, so limiting respirators to unvaccinated staff falls short. Suspected cases must be reported to the local public health authority without waiting for laboratory results, so holding the report for PCR delays contact tracing in an outbreak. Contact precautions or surgical masks alone are not the airborne precautions measles needs, and placing him with other febrile children exposes them.",
        keyFeature: { topic: "ems", n: 1 },
        source: "phac-measles-hp",
      },
      {
        id: "q3",
        kind: "single",
        update: "After handover, one of the paramedics says her records show only one dose of measles vaccine. She was with him for about 40 minutes.",
        prompt: "Which of the following is the most appropriate advice for this paramedic?",
        options: ["Delay MMR until 21 days have passed", "Immune globulin IM instead of vaccine", "Measles serology before any vaccine", "MMR vaccine dose within 72 hours", "No action needed after one dose"],
        correct: 3,
        explanation:
          "The Canadian Immunization Guide counts a health care worker as immune only with two documented doses of measles vaccine, whatever the year of birth, or a documented positive serology, and advises vaccinating anyone without them. MMR given within 72 hours of exposure works as prophylaxis, so her second dose should be given now. Waiting for serology or for 21 days lets the 72 hour window pass. Immune globulin gives only short-term protection and delays the MMR she needs for lasting protection. One documented dose does not meet the standard for a health care worker.",
        keyFeature: { topic: "ems", n: 1 },
        source: "cig-measles",
      },
      {
        id: "q4",
        kind: "single",
        update: "At handover the crew reports that his saturation stayed at 96% en route, that the drive took 15 minutes, and that they waited 10 minutes in the corridor beside triage while a locked door to the isolation room was opened.",
        prompt: "Which of the following handover details is most important for finding exposed patients in your department?",
        options: ["Drive time from home to hospital", "Oxygen saturation during the trip", "Paramedics' own vaccine records", "Places they waited before his room", "Time his rash first appeared"],
        correct: 3,
        explanation:
          "The measles virus can stay in the air for up to 2 hours after an infected person has left a space, so everyone who was in the corridor beside triage during the 10 minute wait, and in the 2 hours after, may have been exposed. Only the crew knows where they stood and for how long, and this detail lets your team and public health list the patients and visitors to assess. The time the rash appeared helps set his infectious period, but it does not identify who in your department was exposed. The drive time and his saturation do not affect contact tracing, and the paramedics' own records concern staff, not patients.",
        keyFeature: { topic: "ems", n: 2 },
        source: "phac-measles-hp",
      },
    ],
    sources: [S.phacMeasles, S.cigMeasles],
    ...META,
  },
];
