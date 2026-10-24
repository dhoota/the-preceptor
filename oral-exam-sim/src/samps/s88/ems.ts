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
  bcehsDialysis: { id: "bcehs-e04", citation: "BC Emergency Health Services. Clinical practice guideline E04: dialysis emergencies. BCEHS Handbook. Accessed 24 October 2026.", url: "https://handbook.bcehs.ca/clinical-practice-guidelines/e-medical-emergencies/e04-dialysis-emergencies/" },
  bcehsBleeding: { id: "bcehs-d02", citation: "BC Emergency Health Services. Clinical practice guideline D02: bleeding. BCEHS Handbook. Accessed 24 October 2026.", url: "https://handbook.bcehs.ca/clinical-practice-guidelines/d-circulatory/d02-bleeding/" },
} satisfies Record<string, Source>;

export const EMS_S88: Samp[] = [
  /* 37 Insulin pump left off after a severe low --------------------------- */
  {
    id: "ems-37",
    topic: "ems",
    alsoTopics: ["loc"],
    title: "Handover after a low sugar at work",
    stem:
      "A 48-year-old woman is brought to the emergency department by an advanced care paramedic crew at 1620. A coworker found her confused and combative at her office desk at 1440 and called 911. She has type 1 diabetes and uses an insulin pump. The crew found a capillary glucose of 1.9 mmol/L. They could not place an IV while she resisted, so they gave glucagon 1 mg IM, and she woke over 15 minutes. She is now alert and oriented and has eaten crackers and juice. Her capillary glucose is 7.4 mmol/L. An infusion cannula sits on her abdomen with no tubing attached, and her pump is in the crew's bag. The crew is about to leave for another call.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "128/78 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following details should you obtain from the paramedics before they leave?",
        options: [
          "Current capillary glucose",
          "Current Glasgow Coma Scale score",
          "Her usual pump basal rate",
          "Time glucagon was given",
          "Time the pump was disconnected",
          "Today's insulin boluses",
          "What the coworker saw and heard",
        ],
        select: 3,
        correct: [3, 4, 6],
        explanation:
          "IMIST-AMBO asks the crew for the mechanism, the signs found, the treatment given and the background. Here three of those facts leave with the crew. The time the pump came off tells you how long she has gone without any insulin. The time of the glucagon tells you when its effect will wear off. What the coworker saw, such as a convulsion, a fall or how long she was confused, comes only through the crew because the coworker is not here. Her glucose and Glasgow Coma Scale score can be measured now, and her basal rate and boluses are stored in the pump and known to her.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
      {
        id: "q2",
        kind: "single",
        update: "The pump has not been reconnected since the crew removed it.",
        prompt: "Which of the following is the most appropriate plan for her insulin now?",
        options: ["Basal insulin restarted now", "Dextrose 10% with no insulin", "Hold insulin until glucose exceeds 14", "Hold insulin until her next meal", "Rapid-acting insulin 10 units SC"],
        correct: 0,
        explanation:
          "An insulin pump delivers only rapid-acting insulin and leaves a small depot under the skin, so even a short interruption can cause hyperglycemia, and pump failure can lead to diabetic ketoacidosis. She has had no insulin since the crew removed the pump. She is now alert and eating, and impaired consciousness, one of the listed reasons not to use a pump in hospital, no longer applies, so her basal insulin should be restored now, by reconnecting the pump or by long-acting basal insulin. Holding insulin until her glucose rises or until her next meal, or giving dextrose without insulin, invites ketosis. A fixed bolus of 10 units at a glucose of 7.4 mmol/L, after a severe low, risks another one.",
        keyFeature: { topic: "ems", n: 2 },
        source: "umpierrez-pumps",
      },
      {
        id: "q3",
        kind: "single",
        update: "The crew adds that her husband, reached by phone at the scene, told them this is her third severe low this month, and that each time she became confused before she noticed any warning signs.",
        prompt: "Which of the following does this detail from the crew most strongly suggest?",
        options: ["Basal rate set too low", "Diabetic ketoacidosis", "Hyperglycemic hyperosmolar state", "Hypoglycemia unawareness", "Infusion set occlusion"],
        correct: 3,
        explanation:
          "Hypoglycemia unawareness occurs when the threshold for autonomic warning symptoms comes close to the level that impairs the brain, so confusion can be the first sign. Frequent lows blunt the normal responses, and three severe lows this month fit that pattern. Diabetes Canada lists unawareness as a risk factor for severe hypoglycemia, notes that it can reverse with strict avoidance of lows for 2 days to 3 months, and advises a pump or continuous glucose monitoring with education and follow-up. A basal rate set too low, a blocked infusion set, ketoacidosis and a hyperosmolar state all come from too little insulin and raise the glucose, so none of them explains repeated severe lows.",
        keyFeature: { topic: "ems", n: 2 },
        source: "dc-hypoglycemia",
      },
      {
        id: "q4",
        kind: "single",
        update: "The crew adds that the coworker told them she had vomited twice in the office washroom this morning and had skipped lunch.",
        prompt: "Which of the following does this detail from the crew make most important to check now?",
        options: ["Blood ketone level", "Serum cortisol level", "Serum lipase level", "Thyroid stimulating hormone", "Urine drug screen"],
        correct: 0,
        explanation:
          "A pump gives only rapid-acting insulin with a small depot, so any break in delivery can cause hyperglycemia, and pump failure can lead to diabetic ketoacidosis. She has had no insulin since the crew removed the pump, and the coworker's report that she vomited this morning, which only the crew heard, raises concern that ketosis was already starting. Her glucose of 7.4 mmol/L reflects the glucagon and food she has had, so a blood ketone level is needed before her insulin plan is settled. Nothing in the history points to adrenal, pancreatic or thyroid disease or to drug use.",
        keyFeature: { topic: "ems", n: 2 },
        source: "umpierrez-pumps",
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
        options: ["Abdominal radiograph alone", "CT of the neck, chest and abdomen", "Radiographs from neck to abdomen", "Ultrasound of the abdomen", "No imaging needed now"],
        correct: 2,
        explanation:
          "A child of 12 or younger with a possible battery ingestion needs radiographs at once, without waiting for symptoms. The films must cover the neck, esophagus and abdomen, with frontal and lateral views when the battery is in the esophagus, because its position sets the urgency and the plan the receiving team will follow. Her gagging, drooling and refusal to drink raise concern for a battery in the esophagus, which an abdominal film alone would miss. The guideline calls for plain radiographs, so ultrasound and CT are not the first step. Skipping imaging leaves the urgency unknown.",
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
        update: "It is now about 80 minutes since her father found her with the remote.",
        prompt: "Which of the following should she receive now?",
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
        update: "Her mother calls. She now thinks the remote may have been missing its battery since yesterday afternoon, about 20 hours ago.",
        prompt: "Which of the following changes in her care now because of this information?",
        options: ["Defer endoscopy until the next day", "Give honey instead of sucralfate", "Repeat radiographs now", "Start ceftriaxone now", "Stop further sucralfate doses"],
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

  /* 41 Bleeding dialysis fistula at home ---------------------------------- */
  {
    id: "ems-41",
    topic: "ems",
    alsoTopics: ["shock"],
    title: "A consult about a bleeding arm",
    stem:
      "You are working in a British Columbia emergency department and take a consult through the BC Emergency Health Services clinical support line at 2040. A primary care paramedic crew is at the home of a 71-year-old man who has hemodialysis three times a week through a left forearm arteriovenous fistula. His session ended at 1600. Twenty minutes ago a needle site on the fistula began to spurt blood. His wife pressed a towel on it, and there is blood on the bathroom floor. The crew is holding gauze over the site, which is still oozing. He is pale but alert. The nearest community hospital, 10 minutes away, has no dialysis. A regional hospital with a dialysis unit is 30 minutes away.",
    vitals: { pulse: "104/minute", resp: "18/minute", bp: "112/70 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate direction to the crew to control the bleeding?",
        options: ["Circumferential pressure bandage", "Direct pressure on the bleeding site", "Elevation of the arm alone", "Pressure over the brachial artery", "Tourniquet above the fistula first"],
        correct: 1,
        explanation:
          "BCEHS directs crews to control bleeding from a dialysis fistula or graft with direct pressure on the site, and its bleeding guideline uses direct pressure first for any compressible bleeding. A needle site is small and compressible, so firm pressure placed exactly over it stops the flow while keeping the fistula working. A circumferential bandage can occlude the fistula and cause it to clot, which the guideline warns against. A tourniquet is kept for bleeding that pressure cannot control. Elevation alone or pressure placed away from the site does not press on the bleeding point.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bcehs-e04",
      },
      {
        id: "q2",
        kind: "single",
        update: "After 10 minutes of firm pressure the bleeding stops. The crew asks how to dress the site for transport.",
        prompt: "Which of the following is the most appropriate direction about the dressing for this patient?",
        options: ["Apply a tourniquet as a precaution", "Lift the gauze to check the site", "Replace soaked gauze with fresh gauze", "Tape over the gauze without lifting it", "Wrap a tensor bandage around the arm"],
        correct: 3,
        explanation:
          "Once the bleeding stops, BCEHS advises taping over the gauze and not removing it to check, because lifting it usually restarts the bleeding. The tape should cover no more than about half the circumference of the limb. Replacing soaked gauze means lifting it from the site, with the same effect as checking it. A tensor bandage wrapped around the arm, like a precautionary tourniquet, encircles the limb and can occlude the fistula and cause it to clot.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bcehs-e04",
      },
      {
        id: "q3",
        kind: "single",
        update: "His pulse is now 96/minute and his BP is 118/72 mmHg. The bleeding has not restarted, and the crew asks where to take him.",
        prompt: "Which of the following is the most appropriate destination to direct for this patient?",
        options: ["Community hospital 10 minutes away", "Home with dialysis unit review tomorrow", "Kidney clinic when it opens at 0800", "Regional hospital with dialysis", "Tertiary centre 3 hours away"],
        correct: 3,
        explanation:
          "BCEHS advises that dialysis patients be taken preferentially to a facility that provides dialysis, and to the nearest facility only when they are critically ill. He is now stable with the bleeding controlled, so the regional hospital 30 minutes away suits him best, with access to his dialysis team. The community hospital has no dialysis. Leaving him at home or waiting for the clinic in the morning ignores a fistula bleed that can restart. A centre 3 hours away offers nothing the regional hospital cannot.",
        keyFeature: { topic: "ems", n: 1 },
        source: "bcehs-e04",
      },
      {
        id: "q4",
        kind: "single",
        update: "He arrives at the regional hospital. At handover the crew reports that before they arrived his wife had wrapped tape tightly all the way around his forearm over the towel for 15 minutes.",
        prompt: "Which of the following examinations does this handover detail make most important on his arrival?",
        options: ["Capillary refill of the other hand", "Movement of the left shoulder", "Palpation for a thrill over the fistula", "Radial pulse on the other arm", "Sensation over the right forearm"],
        correct: 2,
        explanation:
          "Only the crew saw the tight tape his wife placed before they arrived. BCEHS warns that a dressing wrapped all the way around the limb can occlude a fistula and cause it to clot, so the first check is for the thrill that shows blood is still flowing through it. Loss of the thrill means his access may be lost and needs urgent attention from his dialysis team. The other hand and arm were not wrapped, and nothing suggests a shoulder injury or a problem with sensation in his right arm.",
        keyFeature: { topic: "ems", n: 2 },
        source: "bcehs-e04",
      },
    ],
    sources: [S.bcehsDialysis, S.bcehsBleeding],
    ...META,
  },
];
