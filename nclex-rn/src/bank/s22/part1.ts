import type { Item } from "@/engine/types";
import { ALS, HEAT, HINKLE, HYPONA, SEPSIS, SICKLE, WONG, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s22-01", {
      topic: "Shunt problem in an infant",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 7-month-old with hydrocephalus had a ventriculoperitoneal shunt placed 3 months ago. The parents bring the infant in because of vomiting and irritability since last night. Heart rate is 130/minute. Which finding most suggests that the shunt is not working?",
      rationale:
        "A blocked shunt lets cerebrospinal fluid build up, so intracranial pressure rises. In an infant with an open anterior fontanel the rising pressure makes the fontanel bulge and feel tense. Vomiting and irritability are early signs of the same problem. A sunken fontanel points to dehydration. A closed posterior fontanel is normal at this age. A heart rate of 130/minute is normal for an infant.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Sunken anterior fontanel", why: "A sunken fontanel suggests fluid loss, not rising pressure." },
      { text: "Closed posterior fontanel", why: "The posterior fontanel closes within the first few months, so this is expected." },
      { text: "Tense, bulging anterior fontanel", why: "Rising fluid pressure pushes the open fontanel outward." },
      { text: "Heart rate of 130/minute", why: "A heart rate of 130/minute is within the normal range for an infant." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-02", {
      topic: "Early care in suspected bacterial meningitis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 19-year-old college student has a temperature of 39.6°C (103.3°F), a severe headache, a stiff neck and a new petechial rash. Bacterial meningitis is suspected. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Fever, headache, neck stiffness and a petechial rash in a young adult suggest meningococcal meningitis. Droplet precautions start at once. Blood cultures are drawn, but antibiotics are not delayed for a lumbar puncture. Brain irritation can cause seizures, so padded rails are used. Frequent neurologic checks catch rising intracranial pressure. Bright light worsens photophobia. Contact precautions alone do not stop droplet spread.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Use contact precautions only", why: "Meningococcal disease spreads by droplets, so droplet precautions are needed." },
      { text: "Start droplet precautions", why: "Droplet precautions limit spread of the organism to staff and other clients." },
      { text: "Keep the room brightly lit", why: "Bright light worsens photophobia and discomfort in meningitis." },
      { text: "Draw blood cultures as prescribed", why: "Cultures identify the organism and are drawn before the first antibiotic dose." },
      { text: "Delay antibiotics until the lumbar puncture is done", why: "Antibiotics are not delayed for a lumbar puncture in suspected bacterial meningitis." },
      { text: "Pad the side rails", why: "Irritation of the brain can trigger seizures, so padding prevents injury." },
      { text: "Check neurologic status often", why: "Frequent checks detect rising intracranial pressure early." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s22-03", {
      topic: "Seizure from severe low sodium",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 72-year-old client taking hydrochlorothiazide is admitted with new confusion. Serum sodium is 116 mEq/L (116 mmol/L). While the nurse is in the room, the client has a generalized seizure that stops after 2 minutes. Which prescription should the nurse carry out first?",
      rationale:
        "A sodium of 116 mEq/L with a seizure is severe symptomatic hyponatremia. Brain swelling is the threat. A bolus of 3% sodium chloride raises sodium quickly by a few mEq/L and stops the seizure risk. The total rise over 24 hours is kept within a set limit to avoid osmotic demyelination. Fluid restriction and oral tablets act too slowly. A hypotonic solution lowers sodium further.",
      refs: ["Severe symptomatic hyponatremia is treated with a bolus of 3% sodium chloride. The rise is limited to 10 mEq/L (10 mmol/L) in the first 24 hours."],
      sources: [HYPONA],
    }),
    kind: "mc",
    options: [
      { text: "Give a bolus of 3% sodium chloride IV", why: "Hypertonic saline raises sodium fast enough to reduce brain swelling after a seizure." },
      { text: "Restrict fluids to 1000 mL per day", why: "Fluid restriction raises sodium over days. It is too slow for a client who has just seized." },
      { text: "Give oral sodium chloride tablets", why: "Oral tablets act slowly and are unsafe to swallow right after a seizure." },
      { text: "Infuse 0.45% sodium chloride IV", why: "Half-strength saline is hypotonic and would lower the sodium further." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-04", {
      topic: "Early change after head injury",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client is admitted after a fall with a closed head injury. Over 2 hours the client goes from alert and oriented to drowsy and asking the same question again and again. Pupils are equal and brisk. BP is 132/78 mmHg and heart rate 80/minute. How should the nurse interpret this change?",
      rationale:
        "A falling level of consciousness is the earliest and most sensitive sign of rising intracranial pressure. The client has gone from alert to drowsy and repetitive in 2 hours. Pupil changes and the triad of high BP, slow pulse and irregular breathing come later. The pupils are brisk and the BP and heart rate are normal, so this is an early change. It is not expected fatigue.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Expected fatigue after the fall", why: "New drowsiness and repeated questions after a head injury are not dismissed as fatigue." },
      { text: "A late sign of brainstem compression", why: "Late signs include fixed pupils, high BP and a slow pulse. The pupils and vital signs are normal here." },
      { text: "A sign of mild dehydration", why: "The stem gives no sign of dehydration. The change follows a head injury." },
      { text: "An early sign of rising intracranial pressure", why: "A falling level of consciousness is the first sign of rising pressure inside the skull." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s22-05", {
      topic: "Matching rhythms to first responses",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse on a telemetry unit responds to four clients with new rhythms. The client in sinus bradycardia is dizzy with a low BP. The client in supraventricular tachycardia is alert with a normal BP. Match each rhythm to the first response. Not every response is used.",
      rationale:
        "Ventricular fibrillation needs an unsynchronized shock as soon as a defibrillator is ready. Asystole is not shockable, so care is CPR with epinephrine. Symptomatic bradycardia is treated first with IV atropine. A stable, regular narrow tachycardia is first treated with vagal maneuvers. Synchronized cardioversion is for an unstable tachycardia with a pulse. Amiodarone does not come before the first shock in ventricular fibrillation.",
      sources: [ALS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Ventricular fibrillation", "Asystole", "Symptomatic sinus bradycardia", "Stable supraventricular tachycardia"],
    tokens: [
      { text: "IV atropine", why: "Atropine is the first drug for bradycardia with dizziness and a low BP." },
      { text: "Unsynchronized shock", why: "Ventricular fibrillation is shockable and needs defibrillation." },
      { text: "Synchronized cardioversion at once", why: "Immediate cardioversion is for an unstable tachycardia. This client is stable." },
      { text: "Vagal maneuvers", why: "Vagal maneuvers are the first step for a stable, regular narrow tachycardia." },
      { text: "CPR and IV epinephrine", why: "Asystole is not shockable, so CPR and epinephrine are given." },
      { text: "IV amiodarone before any shock", why: "Amiodarone follows failed shocks. It does not replace or delay defibrillation." },
    ],
    correct: [1, 4, 0, 3],
  },
  {
    ...meta("rn-s22-06", {
      topic: "First measure in a blocked small bowel",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a history of abdominal surgery has cramping pain, a distended abdomen and vomiting of green fluid. Bowel sounds are high pitched. An X-ray shows a small bowel obstruction from adhesions. Which prescription should the nurse expect first?",
      rationale:
        "Vomiting and distension above a small bowel blockage come from trapped gas and fluid. A nasogastric tube to low suction removes that content, eases pain and lowers the risk of aspiration. IV fluids replace the losses at the same time. Food, laxatives and enemas add to the load above the blockage or do not reach it.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Clear liquid diet as tolerated", why: "Oral intake adds fluid above the blockage and worsens vomiting." },
      { text: "Nasogastric tube to low suction", why: "Suction decompresses the bowel and stomach above the blockage." },
      { text: "Oral stimulant laxative now", why: "A laxative increases cramping against a blocked bowel." },
      { text: "Soapsuds enema until clear", why: "An enema does not reach a small bowel blockage and adds discomfort." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-07", {
      topic: "Findings of excess cortisol",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the admission note on a 48-year-old client referred for weight gain and easy bruising. Click to highlight the findings consistent with excess cortisol.",
      rationale:
        "Excess cortisol moves fat to the face and trunk and thins the limbs. It weakens collagen, so wide purple striae and bruising appear. It raises glucose and retains sodium, which raises BP. Dark skin creases usually point to adrenal insufficiency, where ACTH is high. Cold intolerance points to low thyroid function. A heart rate of 76/minute is normal.",
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Round, full face]]. [[Wide purple stretch marks on the abdomen]]. [[BP 162/98 mmHg]]. [[Thin arms and legs]]. [[Capillary glucose 212 mg/dL (11.8 mmol/L)]]. [[Dark skin in the palm creases]]. [[Heart rate 76/minute]]. [[Reports cold intolerance]].",
    spans: [
      { text: "Round, full face", why: "Cortisol moves fat to the face, giving a rounded face." },
      { text: "Wide purple stretch marks on the abdomen", why: "Cortisol thins the skin, so wide purple striae form." },
      { text: "BP 162/98 mmHg", why: "Cortisol retains sodium and water and raises BP." },
      { text: "Thin arms and legs", why: "Cortisol breaks down muscle in the limbs while fat gathers on the trunk." },
      { text: "Capillary glucose 212 mg/dL (11.8 mmol/L)", why: "Cortisol raises glucose by increasing its production in the liver." },
      { text: "Dark skin in the palm creases", why: "Dark creases usually reflect high ACTH in adrenal insufficiency. They are not a typical sign of excess cortisol." },
      { text: "Heart rate 76/minute", why: "A heart rate of 76/minute is normal." },
      { text: "Reports cold intolerance", why: "Cold intolerance points to low thyroid function." },
    ],
    correct: [0, 1, 2, 3, 4],
  },
  {
    ...meta("rn-s22-08", {
      topic: "Response to septic shock treatment",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with septic shock from pneumonia received 30 mL/kg of IV crystalloid. A norepinephrine infusion was then started. Three hours later the nurse reviews the client's data. Which finding best shows that treatment is working?",
      rationale:
        "Lactate rises when tissues are poorly perfused. A fall from 4.6 to 2.2 mmol/L shows perfusion is improving. A mean arterial pressure of 60 mmHg is still below the target of 65 mmHg. A heart rate rising to 124/minute and 10 mL of urine in an hour point to ongoing shock.",
      refs: ["The initial mean arterial pressure target in septic shock is 65 mmHg."],
      sources: [SEPSIS],
    }),
    kind: "mc",
    options: [
      { text: "Mean arterial pressure of 60 mmHg", why: "A mean arterial pressure of 60 mmHg is below the target of 65 mmHg." },
      { text: "Lactate down from 4.6 to 2.2 mmol/L", why: "A falling lactate shows tissue perfusion is improving." },
      { text: "Heart rate up from 112 to 124/minute", why: "A rising heart rate suggests the shock is not yet controlled." },
      { text: "Urine output of 10 mL over the last hour", why: "Output of 10 mL in an hour shows the kidneys are still poorly perfused." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-09", {
      topic: "Weakness and dizziness while working in the heat",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 24-year-old laborer feels weak, dizzy and nauseated after hours of work in heat of 38°C (100.4°F). Core temperature is 38.9°C (102.0°F). The client is alert, oriented and answers questions clearly. The skin is pale and sweaty. Heart rate is 118/minute. Which condition is most likely?",
      rationale:
        "Weakness, dizziness, nausea, sweating and a fast pulse after work in the heat fit heat exhaustion. The core temperature of 38.9°C is raised but below the heat stroke range. The client is alert and oriented, so the brain is not affected. Heat cramps cause muscle spasm. Heat syncope is a brief faint with quick recovery.",
      refs: ["Heat stroke is central nervous system dysfunction with a core temperature usually above 40°C (104°F)."],
      sources: [HEAT],
    }),
    kind: "mc",
    options: [
      { text: "Heat cramps", why: "Heat cramps cause painful muscle spasms, not dizziness with a raised core temperature." },
      { text: "Heat stroke", why: "Heat stroke needs brain dysfunction and usually a core temperature above 40°C. The client is alert." },
      { text: "Heat exhaustion", why: "Weakness, sweating and a fast pulse with a clear mind fit heat exhaustion." },
      { text: "Heat syncope", why: "Heat syncope is a brief faint with a normal core temperature." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-10", {
      topic: "Pain crisis in sickle cell disease",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 17-year-old client with sickle cell disease comes to the emergency department with severe pain in the back and legs, rated 9 of 10. SpO2 is 95% on room air. The client has vomited twice and cannot keep fluids down. Which interventions should the nurse plan? Select all that apply.",
      rationale:
        "Pain of 9 of 10 in sickle cell disease is a vaso-occlusive crisis. Prompt parenteral opioids are the first treatment. Pain is reassessed every 15 to 30 minutes so doses can be repeated. IV hydration at no more than the maintenance rate helps a client who cannot keep fluids down. Cold causes vasoconstriction and more sickling. Oxygen is not needed with an SpO2 of 95% on room air.",
      sources: [SICKLE],
    }),
    kind: "sata",
    options: [
      { text: "Apply ice packs to painful joints", why: "Cold narrows blood vessels and can worsen sickling and pain." },
      { text: "Delay opioids until labs return", why: "Analgesia is not delayed for lab results. It is given promptly." },
      { text: "Start IV hydration as prescribed", why: "The client cannot keep fluids down, so IV fluid maintains hydration." },
      { text: "Give oxygen to keep SpO2 at 100%", why: "The guideline gives oxygen for an SpO2 below 95% on room air. This client is at 95%." },
      { text: "Give IV opioid analgesia promptly", why: "Severe crisis pain needs rapid parenteral opioid treatment." },
      { text: "Reassess pain every 15 to 30 minutes", why: "Frequent reassessment guides repeat doses until the pain is controlled." },
    ],
    correct: [2, 4, 5],
  },
];
