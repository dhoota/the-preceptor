// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const carbonMonoxideFamily: OralCase = {
  id: "carbon-monoxide-family",
  title: "A family with headaches",
  blueprint: "enviro",
  alsoCovers: ["tox", "obgyn"],
  priorityTopic: "tox",
  keyFeatures: [
    { topic: "tox", n: 1 },
    { topic: "tox", n: 2 },
    { topic: "tox", n: 5 },
    { topic: "tox", n: 7 },
  ],
  summary: "A pregnant woman who fainted at home arrives with her husband and daughter, who all feel unwell.",
  durationMinutes: 15,
  stem:
    "You are working at a community hospital ED in North Bay, Ontario, on the first cold morning in October. There is an obstetrician on call, a lab that runs co oximetry, and a 6 bed ICU. " +
    "The nearest hospital hyperbaric unit that treats emergencies around the clock is at Toronto General Hospital, about an hour by air. Transfers go through CritiCall Ontario and Ornge. " +
    "Chloé Lefebvre is 31 years old and 26 weeks pregnant. For two days she, her husband and their 6 year old daughter have had headaches and nausea that are worse in the morning. They turned the furnace on for the first time this week. " +
    "An hour ago she fainted in the kitchen for about 30 seconds. Paramedics put her on a non rebreather mask and brought the whole family in. " +
    "Her triage vitals: heart rate 112, blood pressure 116/70, respiratory rate 22, SpO2 99 percent, temperature 36.9, capillary glucose 5.8 mmol/L. GCS 14. CTAS 2. " +
    "The paramedic says: 'Her sats were 99 percent the whole way so I took the mask off at the door. The fire department is at the house now.'",
  findings: [
    {
      id: "exam",
      label: "Exam",
      result:
        "Slow to answer and cannot recall three words at 5 minutes. Mild truncal ataxia. No focal weakness. Pupils equal and reactive. " +
        "Chest clear. Uterus soft and nontender, fundus at 26 cm. No vaginal bleeding. No burns or soot.",
    },
    {
      id: "coox",
      label: "Co oximetry, drawn after 40 minutes on the paramedic mask",
      result: "Carboxyhemoglobin 24 percent. Methemoglobin 0.8 percent. Measured oxyhemoglobin saturation 74 percent. Pulse oximeter reads 99 percent at the same time.",
    },
    {
      id: "gas",
      label: "Venous blood gas",
      result: "pH 7.33. pCO2 30 mmHg. HCO3 17 mmol/L. Lactate 3.1 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "High sensitivity troponin T 42 ng/L. Hemoglobin 112 g/L. White cells 10.8 x 10^9/L. Sodium 136 mmol/L. Potassium 3.9 mmol/L. Creatinine 54 µmol/L. CK 240 U/L.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 110. 1 mm horizontal ST depression in V4 to V6. No ST elevation. QTc 450 ms.",
    },
    {
      id: "fetal",
      label: "Fetal assessment",
      result: "Fetal heart rate 168 by Doppler. The obstetric nurse can start continuous fetal monitoring in the ED.",
    },
    {
      id: "husband",
      label: "Her husband Marc, 34",
      result: "Headache and nausea. Alert, normal neuro exam. Carboxyhemoglobin 18 percent. ECG normal. Smokes 10 cigarettes a day.",
    },
    {
      id: "daughter",
      label: "Her daughter Élise, 6",
      result: "Headache and vomited once. Alert and playful. Normal neuro exam. Carboxyhemoglobin 14 percent.",
    },
    {
      id: "fire",
      label: "Fire department report",
      result: "Carbon monoxide at 380 ppm in the basement near the furnace. The flue is blocked by a bird nest. The house has no CO alarm. The family pet cat was lethargic.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute area",
      text: "All three are in one room. Chloé is on room air with a pulse oximeter reading 99 percent. Her daughter is crying and her husband is pacing.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What is your leading diagnosis and what do you do first for this family?",
      seconds: 60,
      modelAnswer: [
        "Carbon monoxide poisoning is likely: several people in one house, furnace just started, headache and syncope.",
        "Put all three back on 100 percent oxygen by non rebreather at 15 L/min now.",
        "Pulse oximetry is falsely normal because it reads carboxyhemoglobin as oxyhemoglobin.",
        "Co oximetry on blood for each person. ECG and troponin. Fetal heart rate.",
        "Ask about fire or smoke. If present, consider cyanide.",
      ],
      rubric: ["cm-a1", "cm-m1"],
      choices: [
        {
          id: "c-o2",
          label: "I put all three back on 100 percent oxygen by non rebreather and sent co oximetry for each, plus an ECG, troponin and fetal heart rate for Chloé.",
          next: "q-interpret",
          quality: "strong",
          feedback:
            "Correct. High flow oxygen shortens the half life of carboxyhemoglobin from hours to about 60 to 90 minutes. Treating everyone from the same house at once is key. The pulse oximeter cannot see carbon monoxide.",
        },
        {
          id: "c-titrate",
          label: "I gave Chloé oxygen by nasal prongs to keep her saturation above 94 percent.",
          next: "s-titrate",
          quality: "partial",
          feedback:
            "Oxygen is right but the target is wrong. Her pulse oximeter already reads 99 percent because it cannot detect carboxyhemoglobin. She needs 100 percent oxygen by non rebreather regardless of the reading. Her family needs it too.",
        },
        {
          id: "c-none",
          label: "I held oxygen because her saturation is 99 percent and ordered a CT head for the faint.",
          next: "s-none",
          quality: "unsafe",
          feedback:
            "A normal pulse oximeter reading does not exclude carbon monoxide poisoning. Every minute off oxygen prolongs exposure of her brain, heart and fetus. The history points strongly to CO.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-titrate",
      phase: "Twenty minutes later",
      text: "The lab calls with a carboxyhemoglobin of 24 percent. The nurse asks if the husband and child should have oxygen too. You switch everyone to non rebreather masks.",
      next: "q-interpret",
    },
    {
      kind: "say",
      id: "s-none",
      phase: "Thirty minutes later",
      text: "Before CT, the lab calls with a carboxyhemoglobin of 24 percent. Her daughter has vomited again. You cancel the CT and put all three on non rebreather masks.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "Results",
      prompt: "Interpret her co oximetry and gas. Why is her true exposure probably worse than 24 percent?",
      seconds: 60,
      modelAnswer: [
        "Carboxyhemoglobin 24 percent confirms significant CO poisoning.",
        "The sample was drawn after 40 minutes of high flow oxygen. Her peak level was higher.",
        "Carboxyhemoglobin level correlates poorly with severity. Symptoms matter more.",
        "Saturation gap: pulse oximeter 99 percent against measured 74 percent.",
        "Metabolic acidosis and lactate reflect tissue hypoxia.",
        "Fetal hemoglobin binds CO more tightly and clears more slowly. Fetal levels can be higher and last longer.",
      ],
      rubric: ["cm-a2", "cm-a3"],
      next: "q-hbo",
    },
    {
      kind: "question",
      id: "q-hbo",
      phase: "Hyperbaric oxygen",
      prompt: "Does she need hyperbaric oxygen? Justify your answer and tell me what you do.",
      seconds: 90,
      modelAnswer: [
        "Yes. Discuss with the hyperbaric physician now.",
        "She had loss of consciousness and has ongoing neurological findings.",
        "She is pregnant with a level over 15 percent and there are signs of fetal distress.",
        "She has ECG changes and a raised troponin.",
        "HBO aims to reduce delayed neurological sequelae. It is considered safe in pregnancy.",
        "Continue 100 percent oxygen until and during transfer.",
      ],
      rubric: ["cm-m2", "cm-l1"],
      choices: [
        {
          id: "c-hbo",
          label: "I listed her HBO criteria, called the hyperbaric physician in Toronto through CritiCall and arranged Ornge transfer on 100 percent oxygen.",
          next: "s-cardiac",
          quality: "strong",
          feedback:
            "Correct. Syncope, neurological findings, pregnancy and cardiac involvement each support HBO. A randomized trial showed fewer cognitive sequelae at 6 weeks with three HBO sessions. The trial started HBO within 24 hours and earlier is thought to be better, so refer now.",
        },
        {
          id: "c-nbo",
          label: "I kept her on 100 percent oxygen for 6 hours and planned to discharge her when her level was normal.",
          next: "s-nbo",
          quality: "partial",
          feedback:
            "Normobaric oxygen is the right bridge. A normal carboxyhemoglobin level does not mean the brain or the fetus are safe. With syncope, neurological signs, pregnancy and cardiac injury, she should be discussed with a hyperbaric physician.",
        },
        {
          id: "c-home",
          label: "I gave oxygen until her headache settled and sent the family home to rest.",
          next: "s-home",
          quality: "unsafe",
          feedback:
            "The source is still in their house. She has several features of severe poisoning and is pregnant. Discharging the family home without HBO assessment and a safe house is dangerous.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-nbo",
      phase: "Two hours later",
      text: "The obstetrician reviews her and asks whether hyperbaric oxygen has been considered for the fetus. You call CritiCall and the hyperbaric physician accepts her.",
      next: "s-cardiac",
    },
    {
      kind: "say",
      id: "s-home",
      phase: "At the desk",
      text:
        "The fire captain calls. The house has 380 ppm of CO and has been sealed. The charge nurse stops the family at the door. You call CritiCall and the hyperbaric physician accepts Chloé.",
      next: "s-cardiac",
    },
    {
      kind: "say",
      id: "s-cardiac",
      phase: "While waiting for Ornge",
      text:
        "Chloé says her chest feels tight. Her repeat ECG shows 1.5 mm ST depression in V4 to V6. Her repeat troponin T is 68 ng/L. Fetal heart rate is 164 with reduced variability on the monitor.",
      next: "q-cardiac",
    },
    {
      kind: "question",
      id: "q-cardiac",
      phase: "New findings",
      prompt: "How do you interpret this and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Myocardial injury from CO poisoning. It predicts higher long term mortality.",
        "Continue 100 percent oxygen. It strengthens the HBO indication.",
        "Serial ECGs and troponins. Cardiac monitoring.",
        "Left lateral tilt. Obstetrics at the bedside with continuous fetal monitoring.",
        "Tell the hyperbaric team and the receiving obstetric team. Plan cardiology follow up.",
      ],
      rubric: ["cm-a4", "cm-c1"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Husband and daughter",
      prompt: "Her husband wants to take their daughter home to pack a bag and look at the furnace. What do you do for him and for the child?",
      seconds: 90,
      modelAnswer: [
        "No one goes back into the house until the fire department or gas utility clears it.",
        "Both stay on 100 percent oxygen until symptoms resolve and carboxyhemoglobin is normal.",
        "Discuss the child with the hyperbaric physician. She had vomiting but no neurological signs.",
        "Reassess his neurological exam. Adjust for his smoking baseline.",
        "Arrange a safe place to stay with family or social work.",
      ],
      rubric: ["cm-d1", "cm-c2"],
      choices: [
        {
          id: "c-stay",
          label: "I explained the house is still dangerous, kept both on high flow oxygen, discussed his daughter with the hyperbaric physician, and got social work to find them a place to stay.",
          next: "q-counsel",
          quality: "strong",
          feedback:
            "Correct. Going back into the house risks re exposure. Both need oxygen and reassessment. Children are often discussed with the hyperbaric physician because symptoms can be subtle.",
        },
        {
          id: "c-window",
          label: "I let him go home for a few minutes as long as he opened the windows first.",
          next: "s-window",
          quality: "partial",
          feedback:
            "Opening windows does not make the house safe while the flue is blocked. He is still symptomatic and his level is 18 percent. The house must be cleared by the fire department or gas utility.",
        },
        {
          id: "c-discharge",
          label: "I discharged both of them home once their headaches improved.",
          next: "s-discharge",
          quality: "unsafe",
          feedback:
            "Sending them back to the source is the classic error in CO poisoning. The house has 380 ppm of CO. They also need oxygen until their levels are normal.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-window",
      phase: "At the triage desk",
      text: "The fire captain calls back to say the house is sealed and no one may enter. The husband returns to the room. You restart his oxygen and ask social work to help.",
      next: "q-counsel",
    },
    {
      kind: "say",
      id: "s-discharge",
      phase: "In the parking lot",
      text: "Security calls. The husband is dizzy and has vomited next to his car. The fire department says the house is sealed. You bring them both back in on oxygen and call social work.",
      next: "q-counsel",
    },
    {
      kind: "question",
      id: "q-counsel",
      phase: "Before they leave",
      prompt: "What will you tell the family about the days ahead, and what reporting or prevention steps do you take?",
      seconds: 60,
      modelAnswer: [
        "Warn about delayed neurological sequelae: memory, mood, concentration problems days to weeks later.",
        "Return if new confusion, weakness, personality change or chest pain.",
        "Follow up with family doctor and cognitive screening. Obstetric follow up for the pregnancy.",
        "The house must be cleared by the gas utility or a licensed technician before return.",
        "Ontario law requires CO alarms near sleeping areas in homes with fuel burning appliances.",
        "Notify public health if local rules require it. Offer smoking cessation to her husband.",
      ],
      rubric: ["cm-d2", "cm-p1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Chloé leaves by air for the hyperbaric chamber with continuous fetal monitoring. Her family is on oxygen and has a safe place to stay. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cm-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Suspects carbon monoxide poisoning from clustered symptoms in one household and a new heat source.",
      points: 2,
      teaching: "Several people from one home with headache and nausea is CO until proven otherwise. Symptoms that improve away from home are a strong clue.",
      source: "acep",
    },
    {
      id: "cm-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives 100 percent oxygen by non rebreather to all exposed family members regardless of pulse oximetry.",
      points: 3,
      critical: true,
      teaching: "Standard pulse oximeters read carboxyhemoglobin as oxyhemoglobin. Treat on history and co oximetry, not the SpO2.",
      source: "acep",
    },
    {
      id: "cm-a2",
      competency: "assessment",
      criterion: "data",
      text: "Explains that carboxyhemoglobin drawn after oxygen underestimates peak exposure and correlates poorly with severity.",
      points: 2,
      teaching: "Levels fall quickly on oxygen. Symptoms such as syncope and neurological signs guide severity more than the number.",
      source: "acep",
    },
    {
      id: "cm-a3",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes that the fetus is at higher risk because fetal hemoglobin binds CO tightly and clears slowly.",
      points: 2,
      teaching: "Fetal carboxyhemoglobin can exceed maternal levels and lasts longer. Maternal symptoms understate fetal risk.",
      source: "uhms",
    },
    {
      id: "cm-m2",
      competency: "management",
      criterion: "plan",
      text: "Identifies HBO criteria including syncope, neurological findings, pregnancy and cardiac injury, and refers for hyperbaric oxygen.",
      points: 3,
      critical: true,
      teaching: "HBO reduced cognitive sequelae at 6 weeks in a landmark trial. Pregnancy lowers the threshold for referral.",
      source: "weaver",
    },
    {
      id: "cm-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Coordinates CritiCall, the hyperbaric physician, Ornge and obstetrics for a safe transfer.",
      points: 1,
      teaching: "HBO centres are few. Early calls let the chamber, crew and receiving obstetric team prepare.",
      source: "uhms",
    },
    {
      id: "cm-a4",
      competency: "assessment",
      criterion: "data",
      text: "Recognizes ECG changes and troponin rise as CO related myocardial injury and arranges serial monitoring and follow up.",
      points: 2,
      teaching: "Myocardial injury is common in moderate to severe CO poisoning and is linked to higher long term mortality.",
      source: "acep",
    },
    {
      id: "cm-c1",
      competency: "communication",
      criterion: "plan",
      text: "Involves obstetrics early with continuous fetal monitoring and left lateral tilt.",
      points: 1,
      teaching: "Fetal tachycardia and reduced variability signal fetal hypoxia. The obstetric team must be part of the plan.",
      source: "uhms",
    },
    {
      id: "cm-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Prevents return to the house until it is cleared and arranges a safe place for the family to stay.",
      points: 3,
      critical: true,
      teaching: "Re exposure is a preventable cause of harm. The source must be fixed and cleared before anyone goes home.",
      source: "acep",
    },
    {
      id: "cm-c2",
      competency: "communication",
      criterion: "plan",
      text: "Addresses the husband's concerns directly and keeps him and the child on oxygen with reassessment.",
      points: 1,
      teaching: "Worried family members may leave to deal with the house. Explain the danger in plain words and help with practical problems.",
      source: "acep",
    },
    {
      id: "cm-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Counsels on delayed neurological sequelae and arranges follow up for mother, pregnancy and child.",
      points: 1,
      teaching: "Delayed neurological sequelae can appear days to weeks later. Families should know what to watch for.",
      source: "weaver",
    },
    {
      id: "cm-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Advises on CO alarms and home safety and notifies public health where required.",
      points: 1,
      teaching: "Ontario requires CO alarms in homes with fuel burning appliances. A short prevention talk protects the next family.",
      source: "ontario",
    },
  ],
  sources: [
    {
      id: "acep",
      citation:
        "Wolf SJ, Maloney GE, Shih RD, Shy BD, Brown MD. Clinical policy. Critical issues in the evaluation and management of adult patients presenting to the emergency department with acute carbon monoxide poisoning. Annals of Emergency Medicine. 2017.",
    },
    {
      id: "weaver",
      citation: "Weaver LK, Hopkins RO, Chan KJ, et al. Hyperbaric oxygen for acute carbon monoxide poisoning. New England Journal of Medicine. 2002.",
    },
    {
      id: "uhms",
      citation: "Undersea and Hyperbaric Medical Society. UHMS hyperbaric medicine indications manual. 15th edition. 2023.",
    },
    {
      id: "ontario",
      citation: "Ontario. Hawkins Gignac Act (Carbon Monoxide Safety), 2013.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
