// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  imist: { id: "imist-ambo", citation: "Iedema R, Ball C, Daly B, et al. Design and trial of a new ambulance-to-emergency department handover protocol: IMIST-AMBO. BMJ Qual Saf. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22626739/" },
  barkun: { id: "barkun-nvugib", citation: "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019." },
  bosch: { id: "bosch-rhabdo", citation: "Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009." },
  cannell: { id: "cannell-detect", citation: "Cannell MB, Jetelina KK, Zavadsky M, Gonzalez JM. Towards the development of a screening tool to enhance the detection of elder abuse and neglect by emergency medical technicians (EMTs): a qualitative study. BMC Emerg Med. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4888496/" },
  hartford: { id: "hartford-compendium", citation: "American College of Surgeons. Strategies to enhance survival in active shooter and intentional mass casualty events: a compendium (the Hartford Consensus). Bull Am Coll Surg. 2015.", url: "https://www.stopthebleed.org/media/0svpk45s/hartford_consensus_compendium.pdf" },
  chemm: { id: "chemm-salt", citation: "US Department of Health and Human Services. Chemical Hazards Emergency Medical Management (CHEMM). SALT mass casualty triage algorithm. Accessed 24 October 2026.", url: "https://chemm.hhs.gov/incident-primer/triage/salt-triage" },
  cmaj: { id: "cmaj-button-battery", citation: "Zipursky AR, Ratnapalan S. Button battery ingestions in children. CMAJ. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8486471/" },
  ncpc: { id: "ncpc-battery", citation: "National Capital Poison Center. Button battery ingestion triage and treatment guideline. Revised 2018.", url: "https://www.poison.org/battery/guideline" },
  elso: { id: "elso-ecpr", citation: "Richardson ASC, Tonna JE, Nanjayya V, et al. Extracorporeal cardiopulmonary resuscitation in adults. Interim guideline consensus statement from the Extracorporeal Life Support Organization. ASAIO J. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7984716/" },
  arrest: { id: "arrest-trial", citation: "Yannopoulos D, Bartos J, Raveendran G, et al. Advanced reperfusion strategies for patients with out-of-hospital cardiac arrest and refractory ventricular fibrillation (ARREST): a phase 2, single centre, open-label, randomised controlled trial. Lancet. 2020." },
  cdc: { id: "cdc-rca", citation: "US Centers for Disease Control and Prevention. Chemical emergencies. Riot control agents fact sheet. Reviewed 2026.", url: "https://www.cdc.gov/chemical-emergencies/chemical-fact-sheets/riot-control-agents.html" },
  gina: { id: "gina-2026", citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update.", url: "https://ginasthma.org/reports/" },
} satisfies Record<string, Source>;

export const EMS_S88: Samp[] = [
  /* 37 Handover after a night on the bedroom floor ------------------------- */
  {
    id: "ems-37",
    topic: "ems",
    alsoTopics: ["gi-bleed"],
    title: "Handover after a fall at home",
    stem:
      "A 79-year-old woman is brought to the emergency department by a primary care paramedic crew at 0915. A home care worker found her on her bedroom floor at 0830. She says she fell and could not get back up, but she is unsure when. She lives alone. She has atrial fibrillation treated with apixaban 5 mg twice daily and metoprolol, and hypertension treated with ramipril. She is drowsy but answers questions. She is pale. There is a bruise over the right hip, which moves fully without pain, and reddened skin over the right shoulder. Her capillary glucose is 6.8 mmol/L. The crew has another call waiting and is about to leave.",
    vitals: { temperature: "36.1°C oral", pulse: "112/minute irregular", resp: "20/minute", bp: "96/58 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following details should you obtain from the paramedics before they leave?",
        options: [
          "Blood pressure taken at the scene",
          "Current capillary glucose",
          "Current Glasgow Coma Scale score",
          "Current oxygen saturation",
          "Findings in the rooms of her home",
          "Range of motion of her right hip",
          "Time she was last seen well",
          "Tone and power in her limbs",
        ],
        select: 3,
        correct: [0, 4, 6],
        explanation:
          "The crew are the only clinicians who saw her at home, and their knowledge leaves with them. The time she was last seen well sets how long she may have been on the floor. The blood pressure at the scene shows whether her pressure of 96/58 mmHg is new or falling. What they saw in her home, such as medications, vomit, stool or hazards, can explain the fall. IMIST-AMBO handover asks for exactly these scene signs, treatments and background details. Her glucose, Glasgow Coma Scale score, oxygen saturation, hip movement and limb power can all be measured by your own team after the crew has gone.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
      {
        id: "q2",
        kind: "single",
        update: "The crew says a neighbour last saw her at 1800 yesterday. They found a rug bunched beside the bed, her glasses on the floor, the television on, her walker in the hallway and black, tarry stool in the toilet.",
        prompt: "Which of the following scene details most changes your initial workup for this patient?",
        options: ["Black tarry stool in the toilet", "Glasses lying on the bedroom floor", "Rug bunched beside the bed", "Television left switched on", "Walker left in the hallway"],
        correct: 0,
        explanation:
          "Black, tarry stool is melena, which points to upper gastrointestinal bleeding. In a woman taking apixaban who is pale, with a pulse of 112/minute and a pressure of 96/58 mmHg, the fall may have been a faint from blood loss rather than a trip. She now needs a hemoglobin, a crossmatch and a bleeding risk assessment along with the falls workup. The bunched rug, the glasses on the floor and the walker left in the hallway suggest a mechanical trip, and the television suggests an evening fall, but none of them changes the first tests the way melena does. The crew is the only source for what was in the toilet.",
        keyFeature: { topic: "ems", n: 2 },
        source: "barkun-nvugib",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her hemoglobin is 84 g/L. The crew adds that her bed had not been slept in and her supper dishes were still on the kitchen table.",
        prompt: "Which of the following investigations do these details from the crew make most important to add?",
        options: ["Blood alcohol level", "Creatine kinase", "Serum ammonia", "Serum cortisol", "Serum lipase"],
        correct: 1,
        explanation:
          "An unslept bed and supper dishes on the table, with a neighbour's sighting at 1800 and discovery at 0830, mean she was probably on the floor for up to 14.5 hours. Lying that long on a hard floor compresses muscle and can cause rhabdomyolysis, and the reddened skin over her right shoulder shows that pressure. Low blood volume from bleeding adds to the risk of kidney injury, so a creatine kinase guides her fluids and monitoring. Nothing in her history points to liver disease for an ammonia, adrenal failure for a cortisol, alcohol use or pancreatitis.",
        keyFeature: { topic: "ems", n: 2 },
        source: "bosch-rhabdo",
      },
      {
        id: "q4",
        kind: "single",
        update: "The crew adds that her refrigerator was empty, unopened mail covered the table and there were mouse droppings on the kitchen counter. She says she manages well on her own.",
        prompt: "Which of the following is the most appropriate response to these details about her home?",
        options: ["Ask police to inspect her home", "Increase home care hours at discharge", "Note them for her family physician", "Refer for geriatric and social work review", "Request a psychiatry capacity assessment"],
        correct: 3,
        explanation:
          "An empty refrigerator, piled unopened mail and mouse droppings are cues of self-neglect that paramedics are often the only professionals to see, because they enter the home. They should be recorded in her chart and acted on with a structured geriatric and social work review of her function, cognition, supports and safety before any discharge plan is made. Nothing suggests a crime by another person, so a police inspection does not fit. More home care hours may be part of the answer, but choosing them before an assessment assumes the cause. A note for her family physician alone delays help. No decision is being refused, so a capacity assessment is not the first step.",
        keyFeature: { topic: "ems", n: 2 },
        source: "cannell-detect",
      },
    ],
    sources: [S.imist, S.barkun, S.bosch, S.cannell],
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

  /* 41 Bear spray in a school hallway -------------------------------------- */
  {
    id: "ems-41",
    topic: "ems",
    alsoTopics: ["multiple-patients"],
    title: "A call from a high school",
    stem:
      "You are working in a community hospital emergency department in Alberta. At 1105 the EMS supervisor calls from a high school 6 minutes away. A student discharged a can of bear spray in a crowded hallway 15 minutes ago. About 40 students and 3 teachers have burning eyes and skin, tearing, coughing and runny noses. Staff have moved everyone outside into fresh air. Two students with asthma are wheezing, and the vital signs below belong to the more breathless of them, a 15-year-old girl. A teacher fell and was trampled as students ran from the hallway. Three ambulances are on scene. The supervisor asks for direction.",
    vitals: { pulse: "118/minute", resp: "30/minute", o2sat: "90% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following decontamination measures should you advise for the students with burning skin and eyes?",
        options: ["Bleach solution wash of the skin", "Dry wiping of skin and face", "Eye patching until hospital assessment", "Remove clothing, wash skin, rinse eyes", "No decontamination in fresh air"],
        correct: 3,
        explanation:
          "Bear spray is a concentrated pepper spray, and the CDC advice for this kind of exposure is to remove contaminated clothing, cutting it off rather than pulling it over the head, wash the skin with plenty of soap and water and rinse burning eyes with plain water for 10 to 15 minutes, with contact lenses removed. Fresh air helps, but resin left on skin and clothing keeps burning and can spread to others, including staff and crews. Dry wiping smears the resin. Bleach is a decontaminant for some other agents and only adds skin irritation here. Patching an eye keeps the irritant against the cornea.",
        keyFeature: { topic: "ems", n: 4 },
        source: "cdc-rca",
      },
      {
        id: "q2",
        kind: "single",
        update: "Thirty minutes after decontamination the supervisor asks which students can be released to school staff without transport to hospital.",
        prompt: "Which of the following students is most appropriate to release at the scene to school staff?",
        options: ["Blurred vision despite eye rinsing", "Cough and chest tightness at 45 minutes", "Throat pain and hoarseness at 45 minutes", "Well after 30 minutes outside, exam normal", "Wheeze with oxygen saturation of 91%"],
        correct: 3,
        explanation:
          "The CDC notes that the effects of these agents usually last only 15 to 30 minutes once a person is away from the source and cleaned off, and that long-term harm is unlikely when symptoms fade soon after exposure. A student who is well with a normal examination after 30 minutes outside can safely be released to school staff with advice to return if symptoms recur. Blurred vision that persists after rinsing needs an eye examination for corneal injury. Ongoing cough, chest tightness or wheeze points to airway injury or asthma, and persistent throat pain with hoarseness raises concern for injury to the throat, so each of these students needs assessment in hospital.",
        keyFeature: { topic: "ems", n: 4 },
        source: "cdc-rca",
      },
      {
        id: "q3",
        kind: "single",
        update: "The 15-year-old girl with asthma speaks in short phrases and has wheeze over both lungs. She has no hives, no lip swelling and no vomiting.",
        prompt: "Which of the following is the most appropriate field treatment to direct for this student?",
        options: ["epinephrine 0.5 mg IM", "Nebulized sodium bicarbonate", "Observation in fresh air alone", "Rinse of the mouth and nose", "Salbutamol inhaled with oxygen"],
        correct: 4,
        explanation:
          "Speaking in short phrases with a respiratory rate of 30/minute and a saturation of 90% is a moderate to severe asthma flare set off by an airway irritant. GINA advises repeated inhaled short-acting beta2 agonist with controlled oxygen, aiming for a saturation of 93% to 95% in adolescents, and urgent transport for a flare this severe. IM epinephrine is reserved for asthma with anaphylaxis or angioedema, and she has no hives, swelling or vomiting. Nebulized sodium bicarbonate has no established role in asthma. Observation alone leaves her hypoxic, and rinsing the mouth and nose does not relieve bronchospasm.",
        keyFeature: { topic: "ems", n: 4 },
        source: "gina-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "The teacher who was trampled, a 58-year-old man, arrives by ambulance with left chest pain and a pulse of 110/minute. The crew begins the handover.",
        prompt: "Which of the following handover details is most important to obtain from the crew for this teacher?",
        options: ["Body areas stepped on in the crowd", "Brand of the bear spray used", "Length of time he spent outdoors", "Number of people exposed to spray", "Time the ambulance left the school"],
        correct: 0,
        explanation:
          "A crowd running over a fallen man is a crush mechanism, and only the crew and witnesses know where he was stepped on, whether on the chest, abdomen, head or limbs. IMIST-AMBO handover starts with the mechanism and the injuries found, and here those details direct the search for rib fractures, pneumothorax and abdominal injury behind his chest pain and pulse of 110/minute. The brand of spray does not change his care, since all bear sprays are capsaicin based. The time spent outdoors, the number exposed and the ambulance departure time matter to the incident record but not to his injuries.",
        keyFeature: { topic: "ems", n: 2 },
        source: "imist-ambo",
      },
    ],
    sources: [S.cdc, S.gina, S.imist],
    ...META,
  },
];
