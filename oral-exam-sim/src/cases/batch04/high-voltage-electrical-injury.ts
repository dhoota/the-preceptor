// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const highVoltageElectricalInjury: OralCase = {
  id: "high-voltage-electrical-injury",
  title: "Lineworker brought in from a job site",
  blueprint: "enviro",
  alsoCovers: ["trauma", "resus"],
  priorityTopic: "environmental",
  keyFeatures: [
    { topic: "environmental", n: 5 },
    { topic: "burns", n: 1 },
    { topic: "burns", n: 5 },
    { topic: "msk", n: 7 },
  ],
  summary: "A 31 year old utility worker arrives after contact with an overhead line with small visible wounds and a sore arm.",
  durationMinutes: 15,
  stem:
    "You are working at a regional hospital in central Ontario with general surgery, orthopaedics, an ICU and CT around the clock. There is no plastic surgery and no burn unit. " +
    "The nearest adult burn centre is 90 minutes away by ground. Transfers are arranged through CritiCall Ontario. " +
    "Tyler Bouchard is 31 years old. He is a power lineworker. At 09:20 his right hand touched a 25 kV distribution line while he was working from a bucket truck. " +
    "His coworker says he was stuck for about 2 seconds, then slumped in the harness and was unresponsive for under a minute. He did not fall. " +
    "He arrives by ground ambulance at 10:05. " +
    "Vitals: heart rate 112, blood pressure 138/84, respiratory rate 20, SpO2 97 percent on room air, temperature 36.9, GCS 15. Weight 85 kg. " +
    "The paramedic says: 'The burns look small. His main complaint is his right forearm. His ECG in the truck was sinus tach.'",
  findings: [
    {
      id: "wounds",
      label: "Skin wounds",
      result:
        "A 3 cm charred, depressed, painless full thickness wound in the right palm. A 2 cm full thickness wound on the left heel. " +
        "Patchy partial thickness flash burns to the right forearm and anterior chest. Total burn area about 4 percent TBSA.",
    },
    {
      id: "forearm",
      label: "Right forearm exam",
      result:
        "Forearm tense and swollen from wrist to elbow. Severe pain on passive finger extension. Reduced sensation in the median nerve distribution. " +
        "Radial pulse present by Doppler. Capillary refill 3 seconds. Hand held flexed.",
    },
    {
      id: "compartment",
      label: "Compartment pressure",
      result: "Volar forearm compartment pressure 44 mmHg. Diastolic pressure 72 mmHg. Delta pressure 28 mmHg.",
    },
    {
      id: "secondary",
      label: "Secondary survey",
      result:
        "No head or spine tenderness. No chest wall injury. Right tympanic membrane intact. Visual acuity 20/20 both eyes. Abdomen soft. Left heel wound as above. No long bone deformity.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 110. Nonspecific ST and T changes in the inferior leads. QRS 88 ms. QTc 452 ms.",
    },
    {
      id: "labs-initial",
      label: "Initial blood work",
      result:
        "Hemoglobin 158 g/L. WBC 14.2 x 10^9/L. Sodium 140 mmol/L. Potassium 4.6 mmol/L. Creatinine 92 µmol/L. CK 3,400 U/L. " +
        "High sensitivity troponin I 18 ng/L. Lactate 2.9 mmol/L. Glucose 7.2 mmol/L.",
    },
    {
      id: "urine",
      label: "Urine",
      result: "Tea coloured urine. Dipstick blood 3+. Microscopy 0 to 2 RBC per high power field. Consistent with myoglobinuria.",
    },
    {
      id: "labs-repeat",
      label: "Repeat blood work at 14:00",
      result:
        "Potassium 6.4 mmol/L. CK 28,000 U/L. Creatinine 168 µmol/L. Ionized calcium 0.98 mmol/L. Bicarbonate 18 mmol/L. Glucose 7.0 mmol/L. Troponin I 24 ng/L.",
    },
    {
      id: "tetanus",
      label: "Tetanus history",
      result: "Last tetanus booster 12 years ago.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Arrival",
      text: "He is alert and talking. He is holding his right arm across his chest. His work supervisor is in the waiting room asking for an update.",
      next: "q-primary",
    },
    {
      kind: "question",
      id: "q-primary",
      phase: "Primary survey",
      prompt: "How do you approach this patient in the first few minutes?",
      seconds: 75,
      modelAnswer: [
        "Treat as a trauma and a high voltage injury. Primary survey with cardiac monitoring.",
        "High voltage is over 1,000 volts. Visible skin burns badly underestimate deep muscle injury.",
        "12 lead ECG. Brief loss of consciousness and possible arrhythmia.",
        "Identify contact points. Right hand to left heel means current crossed the torso.",
        "Two large bore IVs away from the injured limb. Bloods including CK, troponin and electrolytes.",
        "Consider spine injury if there was a fall or violent muscle contraction.",
      ],
      rubric: ["el-a1", "el-r1"],
      next: "q-fluids",
    },
    {
      kind: "question",
      id: "q-fluids",
      phase: "Fluids",
      prompt: "His urine is tea coloured. How do you plan his fluid resuscitation?",
      seconds: 75,
      modelAnswer: [
        "Burn formulas based on TBSA underestimate needs in electrical injury.",
        "Ringer's lactate titrated to urine output.",
        "Target a urine output of 75 to 100 mL/h in an adult, about 1 mL/kg/h for him, until the pigment clears.",
        "Insert a urinary catheter to measure output hourly.",
        "Check CK, potassium, calcium and creatinine every 4 to 6 hours.",
        "Bicarbonate and mannitol are not routinely needed. Discuss with the burn centre.",
      ],
      rubric: ["el-m1", "el-a2"],
      choices: [
        {
          id: "c-uop",
          label: "I started Ringer's lactate, inserted a catheter and titrated fluid to a urine output of 75 to 100 mL per hour until the pigment cleared.",
          next: "q-forearm",
          quality: "strong",
          feedback:
            "Correct. Urine output is the target in myoglobinuria, not a burn formula. ABLS advises 75 to 100 mL per hour in an adult until the urine clears. Hourly measurement lets you titrate.",
        },
        {
          id: "c-parkland",
          label: "I calculated Parkland at 4 mL/kg per percent TBSA for 4 percent, which is 1,360 mL over 24 hours.",
          next: "s-parkland",
          quality: "partial",
          feedback:
            "Parkland is based on surface area and will under resuscitate an electrical injury. Most of the damage is deep muscle. The formula ignores the pigment load reaching his kidneys.",
        },
        {
          id: "c-oral",
          label: "The burns are small so I encouraged oral fluids and planned to recheck in the morning.",
          next: "s-oral",
          quality: "unsafe",
          feedback:
            "Tea coloured urine means myoglobinuria. Without aggressive IV fluid he is at high risk of acute kidney injury and hyperkalemia. The visible burn is not the injury.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-parkland",
      phase: "Two hours later",
      text: "His urine output over the last hour is 20 mL and still dark. The nurse asks if the rate can go up. You increase fluids to target urine output.",
      next: "q-forearm",
    },
    {
      kind: "say",
      id: "s-oral",
      phase: "Ninety minutes later",
      text: "He has passed 80 mL of dark brown urine since arrival. His heart rate is 124. You insert a catheter and start Ringer's lactate titrated to urine output.",
      next: "q-forearm",
    },
    {
      kind: "question",
      id: "q-forearm",
      phase: "The forearm",
      prompt: "What is happening in his right forearm and what do you do about it?",
      seconds: 75,
      modelAnswer: [
        "Acute compartment syndrome from deep muscle injury.",
        "Pain with passive stretch, tense compartment and median nerve sensory loss.",
        "Compartment pressure 44 mmHg with a delta pressure of 28 mmHg. Under 30 supports the diagnosis.",
        "A palpable pulse does not exclude it.",
        "Emergency fasciotomy with carpal tunnel release. Local surgeon now if transfer would delay it.",
        "Keep the limb at heart level. Remove anything constricting.",
      ],
      rubric: ["el-a3", "el-m2"],
      choices: [
        {
          id: "c-fasciotomy",
          label: "I diagnosed compartment syndrome, kept the arm at heart level and asked the on site surgeon to do an emergency fasciotomy with carpal tunnel release before transfer.",
          next: "s-hyperk",
          quality: "strong",
          feedback:
            "Correct. Muscle and nerve die within hours. Transfer takes 90 minutes plus mobilization. Fasciotomy by the local surgeon, with the burn centre informed, is the safer path.",
        },
        {
          id: "c-transfer-first",
          label: "I measured the pressure and planned to let the burn centre do the fasciotomy after transfer.",
          next: "s-transfer-first",
          quality: "partial",
          feedback:
            "The diagnosis is right but the timing is not. Transfer will take at least 2 to 3 hours door to door. Delay to fasciotomy leads to muscle necrosis and a worse hand. Call the burn centre but decompress locally.",
        },
        {
          id: "c-elevate",
          label: "I elevated the arm high on pillows and planned to reassess in 4 hours.",
          next: "s-elevate",
          quality: "unsafe",
          feedback:
            "Elevating above the heart reduces perfusion pressure in a compartment that is already failing. Waiting 4 hours risks losing forearm muscle and nerve. This needs a surgeon now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-transfer-first",
      phase: "The burn centre calls",
      text: "The burn surgeon asks how long transport will take. She recommends a fasciotomy locally before transfer. Your general surgeon takes him to the OR.",
      next: "s-hyperk",
    },
    {
      kind: "say",
      id: "s-elevate",
      phase: "One hour later",
      text: "His fingers are now numb and his pain is worse. The nurse calls you back. You lower the arm to heart level and call the surgeon, who takes him to the OR.",
      next: "s-hyperk",
    },
    {
      kind: "say",
      id: "s-hyperk",
      phase: "14:00",
      text:
        "He is back from the OR after fasciotomy. Much of the deep flexor muscle was pale. His repeat labs show potassium 6.4 mmol/L, CK 28,000 U/L and creatinine 168 µmol/L. The ECG shows peaked T waves. Urine output is 45 mL in the last hour.",
      next: "q-hyperk",
    },
    {
      kind: "question",
      id: "q-hyperk",
      phase: "New problem",
      prompt: "Manage his potassium.",
      seconds: 75,
      modelAnswer: [
        "Calcium to stabilize the myocardium. Calcium gluconate 10 percent 30 mL IV, or calcium chloride 10 percent 10 mL through a good line.",
        "Insulin regular 10 units IV with 25 g of dextrose IV. Glucose checks for 6 hours.",
        "Salbutamol 10 to 20 mg nebulized.",
        "Increase fluids to restore urine output. Remove potassium from IV fluids.",
        "Nephrology early. Dialysis if refractory, oliguric or acidotic.",
        "Avoid succinylcholine if he goes back to the OR.",
      ],
      rubric: ["el-m3", "el-d2"],
      choices: [
        {
          id: "c-k-strong",
          label: "I gave calcium gluconate 3 g IV, insulin 10 units IV with 25 g of dextrose and salbutamol 10 mg nebulized, increased fluids and called nephrology.",
          next: "q-monitor",
          quality: "strong",
          feedback:
            "Correct. Calcium first because the ECG is abnormal. Insulin and salbutamol shift potassium into cells. Ongoing muscle breakdown will keep releasing potassium, so nephrology should know early.",
        },
        {
          id: "c-k-binder",
          label: "I gave a potassium binder orally and repeated the level in 4 hours.",
          next: "s-k-binder",
          quality: "partial",
          feedback:
            "Binders act over hours and do not protect the heart. With ECG changes he needs calcium now and a shifting strategy.",
        },
        {
          id: "c-k-no-dextrose",
          label: "I gave insulin 10 units IV without dextrose because his glucose is 7.",
          next: "s-k-no-dextrose",
          quality: "unsafe",
          feedback:
            "Insulin without dextrose risks severe hypoglycemia unless the glucose is already above about 14 mmol/L. His is 7.0. Give 25 g dextrose with it and check glucose hourly for at least 6 hours. Calcium should come first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-k-binder",
      phase: "Twenty minutes later",
      text: "The monitor shows a widening QRS. You give calcium gluconate 3 g IV, insulin with dextrose and salbutamol. The QRS narrows.",
      next: "q-monitor",
    },
    {
      kind: "say",
      id: "s-k-no-dextrose",
      phase: "Forty five minutes later",
      text: "He is sweaty and confused. His glucose is 2.1 mmol/L. You give 25 g of dextrose IV and he recovers. You give calcium gluconate for the ECG changes.",
      next: "q-monitor",
    },
    {
      kind: "question",
      id: "q-monitor",
      phase: "Other injuries",
      prompt: "What other injuries and complications do you need to consider, and how long does he need cardiac monitoring?",
      seconds: 60,
      modelAnswer: [
        "High voltage, loss of consciousness and an abnormal ECG mean admission with continuous cardiac monitoring, commonly for 24 hours.",
        "Serial troponin.",
        "Cataracts can develop later. Document baseline visual acuity.",
        "Tympanic membrane rupture, spinal fractures from tetanic contraction and internal organ injury along the current path.",
        "Neurological sequelae may be delayed.",
        "Tetanus booster, Tdap 0.5 mL IM.",
      ],
      rubric: ["el-a4", "el-m4"],
      next: "q-supervisor",
    },
    {
      kind: "question",
      id: "q-supervisor",
      phase: "The employer",
      prompt: "His supervisor asks you how he is and what happened, because the company must file a report. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Health information is confidential. Do not share without the patient's consent.",
        "Ask Tyler what he wants shared and with whom.",
        "The employer can be told he is being treated, if he agrees.",
        "Complete the WSIB Health Professional's Report, Form 8, as Ontario requires.",
        "Occupational health and safety investigations go through the proper channels, not a bedside conversation.",
      ],
      rubric: ["el-p1"],
      choices: [
        {
          id: "c-consent",
          label: "I asked Tyler what he wanted shared, gave the supervisor only that, and completed the WSIB Form 8.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Confidentiality applies to employers. The WSIB report is a legal requirement and goes to the WSIB, not the employer. Serious workplace injuries are reported to the Ministry of Labour by the employer.",
        },
        {
          id: "c-share",
          label: "I told the supervisor about his injuries and the surgery because it was a workplace injury.",
          next: "s-share",
          quality: "unsafe",
          feedback:
            "A workplace injury does not waive confidentiality. Sharing clinical details without consent breaches PHIPA. Ask the patient first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-share",
      phase: "Later",
      text: "Tyler is upset that his supervisor knew details before his wife did. The charge nurse suggests you apologize and speak with the privacy office.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "What is your disposition plan and what goes in your handover?",
      seconds: 60,
      modelAnswer: [
        "Electrical injury is a burn centre referral criterion. Transfer through CritiCall Ontario.",
        "Critical care transport with cardiac monitoring.",
        "Handover: voltage and contact points, loss of consciousness, fasciotomy findings, CK and potassium trend, treatments and times.",
        "Urine output target and current rate. Dialysis discussion.",
        "Wound care, tetanus given, and pending troponin.",
      ],
      rubric: ["el-d1", "el-c1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is transferred to the burn centre that evening. He needs two more debridements of the forearm and three sessions of dialysis. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "el-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Recognizes that surface burns underestimate deep tissue injury in high voltage exposure.",
      points: 2,
      teaching: "Current follows nerves, vessels and muscle. A small skin wound can hide massive muscle necrosis.",
      source: "abls",
    },
    {
      id: "el-a2",
      competency: "assessment",
      criterion: "data",
      text: "Identifies myoglobinuria from tea coloured urine with dipstick blood and few RBCs.",
      points: 1,
      teaching: "A positive dipstick for blood with few red cells on microscopy suggests myoglobin. It is a warning of kidney injury.",
      source: "bosch",
    },
    {
      id: "el-a3",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Diagnoses compartment syndrome clinically, supported by a delta pressure under 30 mmHg, and knows a pulse does not exclude it.",
      points: 2,
      teaching: "Pain with passive stretch is the earliest sign. Pulses disappear late. Delta pressure is diastolic minus compartment pressure.",
      source: "atls",
    },
    {
      id: "el-a4",
      competency: "assessment",
      criterion: "approach",
      text: "Looks for associated injuries including cardiac injury, cataracts, tympanic rupture and spinal fractures.",
      points: 1,
      teaching: "Cataracts can appear months later. Baseline acuity protects the patient and the record.",
      source: "abls",
    },
    {
      id: "el-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Places him on continuous cardiac monitoring and obtains an ECG and IV access away from the injured limb.",
      points: 1,
      teaching: "Arrhythmias usually appear early. The injured limb may soon need surgery and swell.",
      source: "abls",
    },
    {
      id: "el-m1",
      competency: "management",
      criterion: "plan",
      text: "Titrates Ringer's lactate to a urine output of 75 to 100 mL per hour while pigment persists, rather than using a TBSA formula alone.",
      points: 3,
      critical: true,
      teaching: "Formulas based on surface area under resuscitate electrical injury. Urine output is the guide in myoglobinuria.",
      source: "abls",
    },
    {
      id: "el-m2",
      competency: "management",
      criterion: "plan",
      text: "Arranges emergency fasciotomy with carpal tunnel release without delaying for transfer, and keeps the limb at heart level.",
      points: 3,
      critical: true,
      teaching: "Muscle ischemia becomes irreversible within about 6 hours. Elevation above the heart lowers perfusion in compartment syndrome.",
      source: "atls",
    },
    {
      id: "el-m3",
      competency: "management",
      criterion: "plan",
      text: "Treats hyperkalemia with calcium, insulin 10 units with 25 g of dextrose and salbutamol, and monitors glucose.",
      points: 3,
      critical: true,
      teaching: "Calcium stabilizes the heart within minutes but does not lower potassium. Insulin without dextrose causes hypoglycemia.",
      source: "ukka",
    },
    {
      id: "el-m4",
      competency: "management",
      criterion: "plan",
      text: "Gives tetanus prophylaxis and orders cardiac monitoring for at least 24 hours with serial troponin.",
      points: 1,
      teaching: "Full thickness burns are tetanus prone. His last booster was over 5 years ago. High voltage with loss of consciousness or ECG changes warrants monitored admission.",
      source: "abls",
    },
    {
      id: "el-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Transfers to a burn centre, since electrical injury is a burn centre referral criterion.",
      points: 2,
      teaching: "Burn centres manage serial debridement, reconstruction and rehabilitation for electrical injury.",
      source: "abls",
    },
    {
      id: "el-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Involves nephrology early for rising creatinine, hyperkalemia and possible dialysis.",
      points: 1,
      teaching: "Ongoing rhabdomyolysis can overwhelm medical therapy. Dialysis may be needed for potassium, acidosis or oliguria.",
      source: "bosch",
    },
    {
      id: "el-c1",
      competency: "communication",
      criterion: "plan",
      text: "Gives a structured handover with voltage, contact points, fasciotomy findings, lab trends, treatments and pending issues.",
      points: 1,
      teaching: "The receiving team needs the mechanism and trends, not only the current numbers.",
      source: "abls",
    },
    {
      id: "el-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Protects confidentiality with the employer, obtains consent before sharing and completes the WSIB Form 8.",
      points: 2,
      teaching: "Under Ontario's PHIPA, employers have no right to clinical details without consent. The WSIB report is a separate legal duty that goes directly to the WSIB.",
      source: "phipa",
    },
  ],
  sources: [
    {
      id: "abls",
      citation: "American Burn Association. Advanced Burn Life Support course provider manual.",
    },
    {
      id: "atls",
      citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support student course manual, 10th edition. 2018.",
    },
    {
      id: "ukka",
      citation: "UK Kidney Association. Clinical practice guideline. Treatment of acute hyperkalaemia in adults.",
    },
    {
      id: "bosch",
      citation: "Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. New England Journal of Medicine. 2009.",
    },
    {
      id: "phipa",
      citation: "Ontario. Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
