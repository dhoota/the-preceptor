import type { Item } from "@/engine/types";
import { HINKLE, STROKE, THYROID, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s22-21", {
      topic: "Sign of a ruptured appendix",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 16-year-old has had right lower quadrant pain for 2 days. The pain eased suddenly this morning and then spread across the whole abdomen. Temperature is 38.9°C (102.0°F). Which finding most suggests perforation with peritonitis?",
      rationale:
        "Sudden relief of appendix pain can mean the appendix has burst. Pain then spreads as infection reaches the peritoneum. Inflamed peritoneum causes reflex spasm of the abdominal wall, which feels rigid like a board. Nausea, loss of appetite, pain near the navel and tenderness at McBurney point are features of appendicitis before rupture.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Nausea and loss of appetite", why: "Nausea and poor appetite occur early in appendicitis, before rupture." },
      { text: "Tenderness at McBurney point", why: "Localized tenderness at McBurney point fits appendicitis before rupture." },
      { text: "Rigid, board-like abdomen", why: "A rigid abdomen reflects peritoneal inflammation after rupture." },
      { text: "Pain that began near the navel", why: "Pain that starts near the navel and moves to the right is typical early appendicitis." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-22", {
      topic: "Protecting the neck after a diving injury",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 25-year-old client is brought to the emergency department after diving into a shallow lake. The client reports neck pain and tingling in both hands. A cervical collar is in place. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Neck pain and tingling in both hands after a diving injury suggest a cervical spine injury. The spine is kept in line until imaging clears it. The collar stays on, and turning is done by logrolling with a team. Motor and sensory checks set a baseline and detect any change. Raising the head of the bed, moving the head and removing the collar can shift an unstable fracture.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Raise the head of the bed to 45 degrees", why: "Flexing at the hips and neck can move an unstable fracture." },
      { text: "Keep the cervical collar in place", why: "The collar limits neck movement until imaging clears the spine." },
      { text: "Ask the client to turn the head side to side", why: "Active neck movement can shift an unstable fracture and injure the cord." },
      { text: "Logroll with a team to turn the client", why: "Logrolling turns the body as one unit and protects the spine." },
      { text: "Check movement and sensation in all limbs", why: "Serial checks set a baseline and detect worsening cord injury." },
      { text: "Remove the collar to check the neck", why: "The collar is not removed until imaging rules out an unstable injury." },
      { text: "Keep the head and body in line", why: "Neutral alignment protects the spinal cord from further injury." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s22-23", {
      topic: "First client to see on a medical unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse receives report on four clients on a medical unit. Which client should the nurse assess first?",
      rationale:
        "New slurred speech that began 40 minutes ago in a client with atrial fibrillation suggests an acute ischemic stroke. Clot-dissolving and clot-removal treatment depend on time from onset, so a stroke alert is called at once. An SpO2 of 89% is within the usual target for COPD with CO2 retention. Weight gain with ascites and fever with pneumonia need care but are not time critical in the same way.",
      refs: ["In COPD with chronic CO2 retention the usual target SpO2 is 88% to 92%."],
      sources: [STROKE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A client with COPD and chronic CO2 retention whose SpO2 is 89% on 2 L of oxygen", why: "An SpO2 of 89% is within the usual 88% to 92% target in COPD." },
      { text: "A client with atrial fibrillation and new slurred speech for 40 minutes", why: "New speech loss in atrial fibrillation points to an embolic stroke, which is time critical." },
      { text: "A client with cirrhosis and ascites who gained 1 kg since yesterday", why: "A 1 kg gain needs follow-up, but it is not an emergency." },
      { text: "A client with pneumonia, a productive cough and a temperature of 38.2°C (100.8°F)", why: "Fever and a productive cough are expected in pneumonia." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-24", {
      topic: "Blood gas during a panic attack",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client in the emergency department is having a panic attack. Respirations are 34/minute and the client reports tingling lips and fingers. Arterial blood gases show pH 7.51, PaCO2 29 mmHg and HCO3 24 mEq/L. Complete the sentence by dragging the correct words into the blanks.",
      rationale:
        "A pH of 7.51 is alkalotic. The PaCO2 of 29 mmHg is low and moves opposite to the pH, so the cause is respiratory. The HCO3 of 24 mEq/L is normal, so the kidneys have not yet compensated. Breathing 34 times a minute during a panic attack blows off CO2. Low CO2 lowers ionized calcium, which causes the tingling.",
      refs: ["Normal arterial values: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report bicarbonate in mmol/L, so the result reads HCO3 24 mmol/L. PaCO2 is still reported in mmHg. The Medical Council of Canada lists bicarbonate as 21 to 32 mmol/L.",
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The results show {0} caused by {1}.",
    targets: ["Acid-base state", "Cause"],
    tokens: [
      { text: "respiratory alkalosis", why: "A high pH with a low PaCO2 and a normal HCO3 is respiratory alkalosis." },
      { text: "metabolic alkalosis", why: "Metabolic alkalosis has a high HCO3. Here it is 24 mEq/L." },
      { text: "respiratory acidosis", why: "Respiratory acidosis has a low pH and a high PaCO2. Both are the reverse here." },
      { text: "hyperventilation", why: "Fast breathing in a panic attack blows off CO2 and raises the pH." },
      { text: "prolonged vomiting", why: "Vomiting causes metabolic alkalosis with a high HCO3. The HCO3 is normal." },
      { text: "hypoventilation", why: "Slow breathing retains CO2. The PaCO2 here is low." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s22-25", {
      topic: "Response to a bronchodilator in asthma",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 30-year-old client having an asthma attack receives nebulized albuterol. Before treatment the peak expiratory flow was 180 L/minute, which is 40% of the client's personal best. Wheezing was heard in both lungs. Which finding 20 minutes after treatment best shows improvement?",
      rationale:
        "Peak flow measures how fast air leaves the lungs. A rise from 180 to 340 L/minute means the airways have opened. Faint breath sounds with no wheeze can mean too little air is moving, which is a danger sign. A faster heart rate is a side effect of albuterol, not a sign of relief. Leaning forward to breathe shows ongoing distress.",
      sources: [HINKLE, { body: "Health Canada", work: "Drug Product Database", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/" }],
      canada: "Albuterol is called salbutamol in Canada, and it is sold under that name.",
    }),
    kind: "mc",
    options: [
      { text: "Peak flow of 340 L/minute", why: "Peak flow has nearly doubled toward the personal best, which shows open airways." },
      { text: "Faint breath sounds and no wheeze", why: "A quiet chest can mean little air is moving. It can signal worsening obstruction." },
      { text: "Heart rate up from 104 to 118/minute", why: "Albuterol can speed the heart. A faster rate does not show better breathing." },
      { text: "Sits leaning forward to breathe", why: "The tripod position shows the client is still working hard to breathe." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-26", {
      topic: "Home care with cirrhosis and ascites",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with alcohol-related cirrhosis and ascites is going home on spironolactone and furosemide. The nurse evaluates the client's understanding of home care. Which two statements show understanding? Select two.",
      rationale:
        "Ascites comes from sodium and water retention, so salt is limited. A daily morning weight shows fluid gain or loss and guides the diuretics. Alcohol damages the liver further. NSAIDs such as ibuprofen can cause kidney injury and bleeding in cirrhosis. Canned soups are high in sodium. Skipping diuretics lets fluid build up.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will weigh myself each morning.\"", why: "A daily weight tracks fluid and shows whether the diuretics are working." },
      { text: "\"I can still drink beer on weekends.\"", why: "Any alcohol adds to liver damage in cirrhosis." },
      { text: "\"Canned soups are a good choice for me.\"", why: "Canned soups are high in sodium, which worsens ascites." },
      { text: "\"I will take ibuprofen for my aches.\"", why: "NSAIDs can cause kidney injury and bleeding in cirrhosis." },
      { text: "\"I will limit the salt in my food.\"", why: "Less sodium means less fluid retention and less ascites." },
      { text: "\"I will skip my water pills on busy days.\"", why: "Skipping diuretics lets fluid build up again." },
    ],
    correct: [0, 4],
  },
  {
    ...meta("rn-s22-27", {
      topic: "Spells of headache, sweating and palpitations",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 42-year-old client reports sudden spells of pounding headache, heavy sweating and palpitations that last 15 to 20 minutes. During a spell in the clinic, BP is 218/124 mmHg and heart rate is 128/minute. Between spells BP is 134/84 mmHg. Which condition should the nurse suspect?",
      rationale:
        "A pheochromocytoma releases bursts of catecholamines. Each burst causes headache, sweating and palpitations with severe high BP. BP returns toward normal between spells. Graves disease causes steady symptoms, not spells. Panic attacks and migraine do not usually push BP to 218/124 mmHg with this pattern.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Panic disorder", why: "Panic attacks cause palpitations and sweating but not repeated severe spikes to 218/124 mmHg." },
      { text: "Graves disease", why: "Graves disease causes steady symptoms rather than brief spells." },
      { text: "Migraine headache", why: "Migraine does not cause sweating, palpitations and severe BP spikes together." },
      { text: "Pheochromocytoma", why: "Bursts of catecholamines cause spells of headache, sweating, palpitations and high BP." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s22-28", {
      topic: "Rewarming after cold exposure",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 70-year-old client is found outdoors on a winter morning. Core temperature is 30.2°C (86.4°F). The client is drowsy and has stopped shivering. Heart rate is 44/minute. Which interventions should the nurse plan? Select all that apply.",
      rationale:
        "A core temperature of 30.2°C with drowsiness and no shivering is moderate hypothermia. Wet clothing is removed to stop further heat loss. Forced-air warming and warmed IV fluids raise the core temperature. A cold heart is irritable, so the rhythm is monitored. Rough handling, rubbing the limbs and walking can trigger ventricular fibrillation. A drowsy client cannot drink safely.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Massage the cold arms and legs briskly", why: "Rough handling of a cold client can trigger ventricular fibrillation." },
      { text: "Give hot coffee to drink right away", why: "A drowsy client can aspirate, and caffeine does not rewarm the core." },
      { text: "Remove wet clothing", why: "Wet clothing keeps drawing heat from the body." },
      { text: "Help the client walk to warm up", why: "Exertion in moderate hypothermia can trigger a fatal rhythm." },
      { text: "Apply a forced-air warming blanket", why: "Forced warm air rewarms the body safely from the outside." },
      { text: "Infuse warmed IV fluids", why: "Warmed fluids add heat to the core and support the circulation." },
      { text: "Start continuous cardiac monitoring", why: "A cold heart is prone to slow rhythms and ventricular fibrillation." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s22-29", {
      topic: "Night-time breathlessness with frothy sputum",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with heart failure wakes at night gasping for breath. The client is coughing up pink, frothy sputum. Crackles are heard throughout both lungs. Respirations are 34/minute and SpO2 is 84% on room air. What should the nurse do first?",
      rationale:
        "Pink, frothy sputum with crackles in both lungs and an SpO2 of 84% signal acute pulmonary edema. Sitting upright with the legs down pools blood in the legs and lowers the return to the heart. It also lets the diaphragm move more freely. Oxygen is applied at the same time. Lying flat with raised legs adds to the load on the heart. Walking raises oxygen demand. Extra fluid worsens the edema.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Lay flat with legs raised", why: "Raising the legs sends more blood back to a failing heart." },
      { text: "Offer a glass of water to sip", why: "Extra fluid adds to the volume overload behind the edema." },
      { text: "Sit upright with legs down", why: "An upright position with dangling legs lowers venous return and eases breathing." },
      { text: "Walk the client to the chair", why: "Walking raises oxygen demand in a client who is already hypoxic." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-30", {
      topic: "Expected findings in Graves disease",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 34-year-old client is newly diagnosed with Graves disease. Which pair of findings should the nurse expect?",
      rationale:
        "Graves disease produces too much thyroid hormone. The metabolic rate rises, so the client feels hot and loses weight even with a good appetite. Weight gain, constipation, cold intolerance, dry skin, a slow pulse and a puffy face are signs of too little thyroid hormone.",
      sources: [THYROID],
    }),
    kind: "mc",
    options: [
      { text: "Weight gain and constipation", why: "These are signs of a slow metabolism from too little thyroid hormone." },
      { text: "Cold intolerance and dry, coarse skin", why: "These fit hypothyroidism, not an overactive gland." },
      { text: "Heat intolerance and weight loss", why: "Excess thyroid hormone raises heat production and burns calories." },
      { text: "Slow pulse and a puffy face", why: "A slow pulse and facial puffiness fit hypothyroidism." },
    ],
    correct: 2,
  },
];
