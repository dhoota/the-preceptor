// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";

export const MULTIPLE_TRAUMA_S45: Samp[] = [
  {
    id: "multiple-trauma-16",
    topic: "multiple-trauma",
    title: "Farm worker with a forearm injury",
    stem: "You are working in a rural hospital emergency department in Saskatchewan with no surgeon and no CT scanner. A 46-year-old man is brought in by his brother 40 minutes after his right forearm was caught in a grain auger. He takes no medications. He is pale, anxious and cool to the touch. The forearm is mangled below the elbow with exposed bone, and the hand is pale. A nurse has held firm direct pressure on the wound for 3 minutes, but bright red blood keeps pulsing around her hands. A rapid survey finds no other injury.",
    vitals: {
      temperature: "36.2°C oral",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "92/58 mmHg",
      o2sat: "98% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to control the bleeding from his forearm?",
        options: [
          "Blind clamping of vessels in the wound",
          "Compression over the brachial pressure point",
          "Elevation and a firm pressure bandage",
          "Tourniquet on the upper arm above the wound",
          "Wound exploration to ligate the artery"
        ],
        correct: 3,
        explanation: "Pulsatile bleeding that continues through 3 minutes of firm direct pressure is life-threatening extremity hemorrhage, so a tourniquet proximal to the wound is the next step. It is tightened until the bleeding stops and the distal pulse is gone. Blind clamping in a mangled wound rarely secures the vessel and can injure the adjacent nerves. Pressure point compression and elevation do not reliably stop arterial bleeding. Exploration to ligate the artery needs a surgeon and an operating room, which this hospital does not have.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "euro-bleeding"
      },
      {
        id: "q2",
        kind: "single",
        update: "The tourniquet stops the bleeding. Two units of uncrossmatched group O red cells are running through a warmer. It is now 55 minutes since the injury.",
        prompt: "Which of the following is the most appropriate additional treatment for his hemorrhage at this time?",
        options: [
          "desmopressin 0.3 mcg/kg IV",
          "norepinephrine infusion to MAP 65 mmHg",
          "normal saline 2 L IV bolus",
          "recombinant factor VIIa 90 mcg/kg IV",
          "tranexamic acid 1 g IV over 10 minutes"
        ],
        correct: 4,
        explanation: "He arrived in hemorrhagic shock with a pulse of 128/minute and a BP of 92/58 mmHg, and it is 55 minutes since injury, well inside the 3 hour window, so he should receive tranexamic acid 1 g IV over 10 minutes followed by 1 g over 8 hours. A 2 L crystalloid bolus dilutes clotting factors when blood is already running. Norepinephrine is added only when volume replacement fails to reach the target pressure, and he is still receiving his first units of blood. Recombinant factor VIIa is reserved for bleeding that persists after every other measure. Desmopressin is not a routine treatment for traumatic bleeding.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q3",
        kind: "single",
        update: "A fixed wing air ambulance will take him to a trauma centre 300 km away. Departure is expected in 45 minutes.",
        prompt: "Which of the following is the most appropriate way to manage the tourniquet for the transfer?",
        options: [
          "Convert it to a blood pressure cuff",
          "Loosen it briefly every 30 minutes",
          "Release it once systolic BP exceeds 100",
          "Replace it with a pressure dressing",
          "Secure it in place and record the time"
        ],
        correct: 4,
        explanation: "A tourniquet that controls life-threatening bleeding stays on until the patient reaches surgical care, with the time of application written on the patient and the transfer record so the receiving team knows the ischemic time. Loosening it every 30 minutes causes repeated blood loss in a patient who is already in shock. Replacing it with a pressure dressing before a flight risks rebleeding far from help. A blood pressure cuff can lose pressure or slip during transport. A higher blood pressure after transfusion makes rebleeding more likely, not less.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following should be completed before he leaves your emergency department for the trauma centre?",
        options: [
          "cefazolin 2 g IV before departure",
          "CT angiography of the arm before departure",
          "Delay departure until the BP is normal",
          "Direct physician to physician handover",
          "Formal wound washout in the department",
          "Padded splint for the injured forearm",
          "Two litres of normal saline for the flight",
          "Uncrossmatched red cells sent on the flight"
        ],
        select: 4,
        correct: [
          0,
          3,
          5,
          7
        ],
        explanation: "The mangled forearm with exposed bone is an open fracture, so cefazolin should be given early and not wait for the trauma centre. A padded splint limits pain and further soft tissue injury, red cells on the flight cover rebleeding, and a direct physician handover passes on the tourniquet time and treatment given. CT angiography is not available here and would delay definitive care. Waiting for a normal BP delays surgical hemorrhage control, which is what he needs. Formal washout belongs in the operating room. Large volume crystalloid worsens dilutional coagulopathy.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-17",
    topic: "multiple-trauma",
    title: "Older driver after a side impact",
    stem: "A 71-year-old man is brought to the emergency department by ambulance after another car struck the driver side of his car at an intersection. He has left chest and left upper abdominal pain. He takes warfarin for atrial fibrillation and bisoprolol 10 mg daily. His wife says his usual systolic pressure is about 150 mmHg and his usual pulse is about 70/minute. He drinks two beers a week. GCS 15. He has tenderness over the left lower ribs and the left upper quadrant. The examination is otherwise normal.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "76/minute",
      resp: "22/minute",
      bp: "102/64 mmHg",
      o2sat: "95% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why his vital signs may underestimate his blood loss?",
        options: [
          "Beta blockade blunting a rise in pulse",
          "Hypothermia slowing the heart rate",
          "Pain producing a vagal bradycardia",
          "Splenic capsule stretch slowing the pulse",
          "Warfarin effect on cardiac conduction"
        ],
        correct: 0,
        explanation: "Bisoprolol blocks the expected tachycardia, so a pulse of 76/minute can hide significant hemorrhage, and a systolic pressure of 102 mmHg is well below his usual 150 mmHg. Older and beta blocked trauma patients need a low threshold for occult shock and measurement of lactate or base deficit. His temperature is 36.6°C, so hypothermia is not slowing his heart. Pain usually raises the pulse rather than lowering it. Splenic injury does not slow the pulse, and warfarin has no effect on cardiac conduction.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "east-geriatric"
      },
      {
        id: "q2",
        kind: "single",
        update: "INR is 3.8 and hemoglobin 104 g/L. eFAST shows free fluid in the left upper quadrant. His BP rises to 110/70 mmHg after 1 unit of red cells.",
        prompt: "Which of the following should be given with vitamin K 10 mg IV to reverse his anticoagulation?",
        options: [
          "desmopressin 0.3 mcg/kg IV",
          "frozen plasma 4 units IV",
          "prothrombin complex concentrate 1000 IU IV",
          "prothrombin complex concentrate 2000 IU IV",
          "recombinant factor VIIa 90 mcg/kg IV"
        ],
        correct: 3,
        explanation: "An INR of 3.8 with active intra-abdominal bleeding needs rapid reversal. The Canadian sample INR based schedule gives 2000 IU of prothrombin complex concentrate for an INR of 3 to 5, and the weight and INR schedule (25 IU/kg for an INR of 2 to less than 4) also gives 2000 IU at 80 kg. IV vitamin K sustains the effect after the concentrate wears off. A 1000 IU dose is the sample dose for an INR below 3 and is likely to leave him under-reversed. Frozen plasma is no longer appropriate for warfarin reversal. Recombinant factor VIIa and desmopressin do not replace the missing vitamin K dependent factors.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "nac-pcc"
      },
      {
        id: "q3",
        kind: "single",
        update: "After reversal his BP is 118/72 mmHg and pulse 72/minute. He has received 1 unit of red cells in total.",
        prompt: "Which of the following is the most appropriate next step in locating and managing his source of bleeding?",
        options: [
          "Admission for serial hemoglobin checks",
          "CT of chest, abdomen and pelvis with contrast",
          "Diagnostic peritoneal aspirate and lavage",
          "Laparotomy in the operating room now",
          "Repeat eFAST in 4 hours, then decide"
        ],
        correct: 1,
        explanation: "He has responded to 1 unit of red cells and reversal, so he no longer needs an immediate bleeding control procedure and can go to contrast CT to grade the injury and look for a blush that may be embolized. Laparotomy now is for a patient who stays in shock with a positive eFAST. Diagnostic peritoneal lavage adds nothing to a positive eFAST and cannot grade a splenic injury. Serial hemoglobin checks or a delayed repeat eFAST leave the injury undefined in an anticoagulated older patient.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "euro-bleeding"
      },
      {
        id: "q4",
        kind: "single",
        update: "CT shows a grade III splenic laceration without a contrast blush. Six hours after admission he is restless and pulls at his lines. Pulse is 84/minute and BP 104/66 mmHg. He had hydromorphone 0.5 mg IV 3 hours ago.",
        prompt: "Which of the following causes of his restlessness is the most important to exclude first?",
        options: [
          "Alcohol withdrawal syndrome",
          "Anxiety about the admission",
          "Delirium from hydromorphone",
          "Pain from rib fractures",
          "Recurrent splenic hemorrhage"
        ],
        correct: 4,
        explanation: "New agitation with a pulse that has risen from 72 to 84/minute despite bisoprolol, and a systolic pressure that has fallen from 118 to 104 mmHg, suggests renewed bleeding from the spleen. In a beta blocked patient this small rise in pulse is a significant change. It needs an urgent hemoglobin, a repeat eFAST and a call to the surgeon. Two beers a week makes alcohol withdrawal unlikely. Anxiety, a single small hydromorphone dose and rib pain are diagnoses of exclusion once bleeding has been ruled out.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "east-geriatric",
        citation: "Calland JF, Ingraham AM, Martin N, et al. Evaluation and management of geriatric trauma: an Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23114492/"
      },
      {
        id: "nac-pcc",
        citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022."
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-18",
    topic: "multiple-trauma",
    title: "Stab wound near the groin",
    stem: "A 23-year-old man is brought to the emergency department by police 15 minutes after he was stabbed once in the right groin. The wound is 2 cm long, just below the inguinal ligament. Blood has soaked through the dressing that a paramedic is pressing on the wound. He has no other wounds. He is pale and sweaty. GCS 14. He has no medical history and takes no medications. His right foot is warm with a palpable dorsalis pedis pulse.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "134/minute",
      resp: "28/minute",
      bp: "84/52 mmHg",
      o2sat: "97% on room air",
      weight: "75 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate method to control the bleeding from this wound?",
        options: [
          "Blind clamping of the femoral vessels",
          "Elevation and a firm pressure bandage",
          "Packing with hemostatic gauze and pressure",
          "Skin closure with a running suture",
          "Tourniquet at the top of the thigh"
        ],
        correct: 2,
        explanation: "A wound just below the inguinal ligament is junctional, with no room above it for a tourniquet. The bleeding point is packed tightly with hemostatic gauze and firm pressure is held until surgical control. A tourniquet at the top of the thigh would sit over or below the wound and cannot compress the vessel. Blind clamping risks injury to the femoral vein and nerve. Skin closure lets bleeding continue into the thigh, and elevation with a bandage cannot control bleeding at this depth.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "euro-bleeding"
      },
      {
        id: "q2",
        kind: "single",
        update: "The bleeding is controlled with packing. eFAST shows no free fluid in the abdomen and no pericardial effusion.",
        prompt: "Which of the following is his assessment of blood consumption (ABC) score at this point?",
        options: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        correct: 2,
        explanation: "The ABC score gives 1 point each for a penetrating mechanism, systolic BP of 90 mmHg or less, pulse of 120/minute or more and a positive FAST. He scores 1 for the stab wound, 1 for a systolic of 84 mmHg and 1 for a pulse of 134/minute, for a total of 3. The negative eFAST adds nothing, so a score of 4 is wrong. A score of 2 or more predicts massive transfusion, so the massive hemorrhage protocol should be activated. The score has only four items, so a score of 5 is not possible.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "abc-score"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following red cell products is most appropriate for him while his blood group is unknown?",
        options: [
          "Crossmatched red cells when available",
          "Group AB RhD negative red cells",
          "Group O RhD negative red cells",
          "Group O RhD positive red cells",
          "Type specific red cells after grouping"
        ],
        correct: 3,
        explanation: "He is a man, so uncrossmatched group O RhD positive red cells are appropriate. A Canadian consensus massive hemorrhage protocol reserves O RhD negative red cells for females of child-bearing potential, under 45 years, because O negative stock is limited. Group AB is the universal plasma donor group, not a red cell group that is safe for an unknown recipient. Grouping and crossmatching take far longer than a patient in shock can wait, so uncrossmatched units are given first.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "on-mhp"
      },
      {
        id: "q4",
        kind: "single",
        update: "He has received 6 units of red cells and 4 units of plasma. Ionized calcium is 0.86 mmol/L. His ECG shows sinus tachycardia with no other change.",
        prompt: "Which of the following is the most appropriate treatment for his ionized calcium result?",
        options: [
          "calcium chloride 1 g IV",
          "calcium gluconate 1 g IV",
          "magnesium sulfate 2 g IV",
          "sodium bicarbonate 50 mmol IV",
          "No calcium unless the ECG changes"
        ],
        correct: 0,
        explanation: "Citrate in transfused products binds calcium, and his ionized calcium of 0.86 mmol/L is well below the normal range of 1.1 to 1.3 mmol/L. Low calcium impairs clotting and cardiac contractility, so it is corrected with calcium chloride. One gram of calcium chloride holds about 6.8 mmol of calcium, three times the 2.2 mmol in 1 g of calcium gluconate, so the gluconate dose is too small. Bicarbonate raises pH and lowers ionized calcium further. Magnesium does not correct hypocalcemia. Waiting for ECG changes leaves the coagulopathy untreated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q5",
        kind: "single",
        update: "The surgeon arrives and starts to examine the wound. The nurses, the respiratory therapist and the surgeon are all asking you questions at the same time.",
        prompt: "Which of the following is the most appropriate action for you as the team leader at this moment?",
        options: [
          "Answer each question in the order asked",
          "Call a brief pause and summarize the plan",
          "Hand leadership to the surgeon without comment",
          "Leave the bay to book the operating room",
          "Raise your voice to regain control"
        ],
        correct: 1,
        explanation: "When several people speak at once, a brief pause with a spoken summary of the findings, the priorities and each person's task rebuilds a shared mental model and lets the team work in parallel again. Answering questions one at a time keeps the team waiting in a queue. A silent change of leader leaves the team unsure who is in charge, so any handover must be stated aloud. Leaving the bay removes the leader from the resuscitation. Raising your voice adds noise without restoring order.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      }
    ],
    sources: [
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "abc-score",
        citation: "Nunez TC, Voskresensky IV, Dossett LA, et al. Early prediction of massive transfusion in trauma: simple as ABC (assessment of blood consumption)? J Trauma. 2009.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19204506/"
      },
      {
        id: "on-mhp",
        citation: "Callum JL, Yeh CH, Petrosoniak A, et al. A regional massive hemorrhage protocol developed through a modified Delphi technique. CMAJ Open. 2019.",
        url: "https://www.cmajopen.ca/content/7/3/E546"
      },
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-19",
    topic: "multiple-trauma",
    title: "Older man with a written care plan",
    stem: "You are working in a community hospital emergency department in Ontario. An 88-year-old man is brought to the emergency department by ambulance after a car reversing in a parking lot knocked him down. He has metastatic prostate cancer. He carries a written advance care plan that states he does not want intubation or admission to an intensive care unit. His daughter, who is his named substitute decision maker, arrives with him. He is alert and oriented, and he understands his injuries when you explain them. GCS 15. He has a paradoxical segment of the right chest wall with crepitus. A chest X-ray shows five right rib fractures with no pneumothorax. CT of the head is normal.",
    vitals: {
      temperature: "36.3°C oral",
      pulse: "104/minute",
      resp: "28/minute",
      bp: "138/76 mmHg",
      o2sat: "91% on 4 L/minute by nasal prongs",
      weight: "68 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to decide about intubation if he deteriorates?",
        options: [
          "Ask him now while he remains capable",
          "Defer to his daughter as decision maker",
          "Follow the written plan without discussion",
          "Intubate first, then review his wishes",
          "Obtain an ethics consult before deciding"
        ],
        correct: 0,
        explanation: "He is alert, oriented and understands his injuries, so he is capable and gives or refuses consent himself under the Ontario Health Care Consent Act. A conversation now confirms whether the written plan still reflects his wishes in this situation. His daughter acts as substitute decision maker only if he becomes incapable. Following the paper plan without talking to a capable patient misses the chance to confirm it. Intubating first overrides a known refusal. An ethics consult is not needed when the patient can decide.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "hcca"
      },
      {
        id: "q2",
        kind: "single",
        update: "He confirms he does not want intubation but would accept a trial of noninvasive ventilation. Twenty minutes later he is restless and pulls at his nasal prongs. Resp. is 34/minute and SpO2 86% on 4 L/minute. Capillary glucose is 6.8 mmol/L.",
        prompt: "Which of the following is the most likely cause of his new restlessness?",
        options: [
          "Anxiety about his prognosis",
          "Delirium from the hospital setting",
          "Hypoglycemia from poor oral intake",
          "Hypoxemia from his chest injury",
          "Urinary retention from analgesia"
        ],
        correct: 3,
        explanation: "Restlessness with a respiratory rate of 34/minute and SpO2 falling from 91% to 86% points to worsening hypoxemia from the flail segment and the injured chest wall. Agitation is often the first sign of hypoxia and must be treated as such before any other cause is considered. His glucose of 6.8 mmol/L excludes hypoglycemia. Anxiety, delirium and urinary retention are diagnoses of exclusion once hypoxemia is corrected.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next intervention for his breathing?",
        options: [
          "Adhesive strapping of the flail segment",
          "Bilateral chest tubes as a precaution",
          "Noninvasive ventilation with analgesia",
          "Rapid sequence intubation",
          "Surgical rib fixation this evening"
        ],
        correct: 2,
        explanation: "He has consented to noninvasive ventilation, which splints the flail segment from inside and improves oxygenation, and good analgesia allows him to breathe deeply enough for it to work. Rapid sequence intubation would override his capable refusal. Strapping the chest wall restricts ventilation and worsens atelectasis. His chest X-ray shows no pneumothorax, so chest tubes are not indicated. Surgical rib fixation is not an emergency measure for hypoxemia and does not fit his goals.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "east-flail"
      },
      {
        id: "q4",
        kind: "single",
        update: "Despite noninvasive ventilation he becomes drowsy and no longer follows the conversation. GCS 11. His daughter asks that everything be done, including intubation.",
        prompt: "Which of the following is the most appropriate action now?",
        options: [
          "Apply to the Consent and Capacity Board",
          "Honour his refusal and focus on comfort",
          "Intubate because his daughter now requests it",
          "Transfer to intensive care for intubation",
          "Wait for other relatives to arrive and decide"
        ],
        correct: 1,
        explanation: "He is now incapable, and under the Ontario Health Care Consent Act a substitute decision maker must follow wishes the patient expressed while capable and aged 16 or older. He refused intubation in writing and again to you today, so the plan is comfort focused care with an explanation to his daughter. Intubating or transferring to intensive care would override his capable refusal. An application to the Consent and Capacity Board is not needed when his prior wish is clear and applies to this situation. Waiting for another relative delays symptom relief.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "hcca"
      }
    ],
    sources: [
      {
        id: "hcca",
        citation: "Health Care Consent Act, 1996, S.O. 1996, c. 2 (Ontario)."
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "east-flail",
        citation: "Simon B, Ebert J, Bokhari F, et al. Management of pulmonary contusion and flail chest: an Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012.",
        url: "https://doi.org/10.1097/TA.0b013e31827019fd"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-20",
    topic: "multiple-trauma",
    title: "Rider thrown from a horse",
    stem: "A 30-year-old woman, G1P0 at 26 weeks of gestation, is brought to the emergency department by ambulance after she was thrown from a horse and landed on her back. She has pelvic and lower abdominal pain. She has no medical history and takes prenatal vitamins. She is on a spine board in a collar. GCS 15. The uterine fundus is palpable 6 cm above the umbilicus and is mildly tender. The pelvis is tender to gentle palpation. There is no vaginal bleeding.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "94/60 mmHg",
      o2sat: "97% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following positioning measures is most appropriate during her primary survey?",
        options: [
          "Left manual displacement of the uterus",
          "Passive leg raise with the patient supine",
          "Right lateral tilt of about 15 degrees",
          "Semi-upright position at 45 degrees",
          "Trendelenburg position with head down"
        ],
        correct: 0,
        explanation: "At 26 weeks the uterus compresses the inferior vena cava when she lies supine, which lowers venous return and blood pressure. Displacing the uterus manually to the left relieves this while her spine stays in line. Tilting to the right keeps the uterus on the vena cava. A passive leg raise and head down positioning leave the uterus compressing the vena cava. Sitting her up at 45 degrees is unsafe with an uncleared spine and hypotension.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "sogc-trauma"
      },
      {
        id: "q2",
        kind: "single",
        update: "Her BP rises to 104/66 mmHg after 1 unit of red cells. A pelvic X-ray shows fractures of the right superior and inferior pubic rami. eFAST is indeterminate in the pelvis.",
        prompt: "Which of the following is the most appropriate approach to CT imaging for her injuries?",
        options: [
          "Avoid CT and rely on serial ultrasound",
          "Delay CT until obstetrics assesses the fetus",
          "Limit CT to the head and chest only",
          "Obtain MRI of the abdomen instead of CT",
          "Obtain the indicated CT without delay"
        ],
        correct: 4,
        explanation: "Imaging that is indicated for the mother should not be withheld or delayed because of the fetus, and the fetal radiation dose of a trauma CT is below the level linked to malformation. Maternal survival is the best protection for the fetus. Serial ultrasound cannot exclude retroperitoneal and pelvic bleeding. Waiting for obstetrics delays diagnosis in a patient who has needed blood. Leaving out the abdomen and pelvis misses the likely source. MRI is slow and unsuitable for an unstable trauma patient.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "sogc-trauma"
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows a pelvic ring fracture with a small hematoma and no solid organ injury. The uterus is now firmer and more tender. Her fibrinogen is 1.8 g/L.",
        prompt: "Which of the following is the most important concern raised by her fibrinogen result?",
        options: [
          "Dilution from the transfused red cells",
          "Placental abruption with coagulopathy",
          "Pregnancy related fall in fibrinogen",
          "Reassuring level above 1.5 g/L",
          "Sample error, repeat before acting"
        ],
        correct: 1,
        explanation: "Fibrinogen rises through pregnancy, so 1.8 g/L is low for her, and with a firm, tender uterus after abdominal trauma it suggests consumptive coagulopathy from placental abruption. She needs continuous fetal and uterine monitoring, urgent obstetric assessment and fibrinogen replacement if she keeps bleeding. Normal pregnancy raises fibrinogen rather than lowering it. The 1.5 g/L trauma threshold is set for non-pregnant patients and would falsely reassure here. One unit of red cells cannot dilute fibrinogen this far. Repeating the test before acting delays recognition of a dangerous complication.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "sogc-trauma"
      },
      {
        id: "q4",
        kind: "single",
        update: "Her BP falls to 88/50 mmHg. The fetal heart rate is 170/minute with minimal variability. Obstetrics and the trauma surgeon are at the bedside.",
        prompt: "Which of the following should take priority at this point?",
        options: [
          "Betamethasone before any other treatment",
          "Emergency cesarean delivery for the fetus",
          "Maternal resuscitation and hemorrhage control",
          "Tocolysis with nifedipine for the uterus",
          "Transfer to a perinatal centre by ground"
        ],
        correct: 2,
        explanation: "The fetal tachycardia and reduced variability reflect poor uteroplacental perfusion from maternal hypovolemia and a possible abruption, because uterine blood flow is sacrificed early in maternal shock. Restoring maternal volume, replacing fibrinogen and controlling the bleeding is the best treatment for the fetus. Betamethasone may be given later if preterm birth becomes likely but is not the priority. Cesarean delivery in a mother in shock adds major blood loss. Nifedipine lowers blood pressure further. Transfer of an unstable patient delays hemorrhage control.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "sogc-trauma"
      }
    ],
    sources: [
      {
        id: "sogc-trauma",
        citation: "Jain V, Chari R, Maslovitz S, et al. Guidelines for the management of a pregnant trauma patient. SOGC Clinical Practice Guideline No. 325. J Obstet Gynaecol Can. 2015.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26334607/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-21",
    topic: "multiple-trauma",
    title: "Ventilated driver after a rollover",
    stem: "A 41-year-old man is brought to the emergency department by ambulance after a rollover collision. He was intubated in the department 10 minutes ago for a GCS of 7. The tube is at 23 cm at the teeth, and waveform capnography was present after intubation. He has crepitus over the left lateral chest wall. He is on volume control ventilation. His peak airway pressure has risen from 22 to 40 cmH2O over 3 minutes, and end-tidal CO2 has fallen from 38 to 24 mmHg.",
    vitals: {
      pulse: "136/minute",
      resp: "16/minute",
      bp: "72/40 mmHg",
      o2sat: "84% on FiO2 1.0 by ventilator",
      weight: "95 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Breath sounds are absent on the left. A suction catheter passes easily down the tube. The tube is still at 23 cm at the teeth.",
        prompt: "Which of the following is the most likely cause of his deterioration?",
        options: [
          "Left tension pneumothorax",
          "Mucus plugging of the tube",
          "Progression of pulmonary contusion",
          "Right mainstem intubation",
          "Sedation induced vasodilation"
        ],
        correct: 0,
        explanation: "Rising airway pressure, hypoxemia, hypotension and a drop in end-tidal CO2 after the start of positive pressure ventilation, with absent left breath sounds and left chest crepitus, point to a left tension pneumothorax. In ventilated patients tension develops quickly and presents with hypoxemia and hypotension. The unchanged tube depth argues against mainstem intubation. The suction catheter passes easily, which argues against a plug. A pulmonary contusion worsens over hours, and neither it nor sedation causes one-sided absent breath sounds with a sudden rise in airway pressure.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "roberts-tension"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate intervention for his chest?",
        options: [
          "Chest X-ray to confirm the diagnosis",
          "Increase PEEP to 10 cmH2O and reassess",
          "Needle in the second space, midclavicular",
          "Simple thoracostomy at the left fifth space",
          "Withdraw the tube 2 cm and reassess"
        ],
        correct: 3,
        explanation: "He is ventilated and peri-arrest, so the chest is opened at the fourth or fifth intercostal space just anterior to the midaxillary line with a simple (finger) thoracostomy, and a chest tube follows. The lateral site has a thinner chest wall than the second space in the midclavicular line, where needles fail more often. Waiting for an X-ray delays treatment of a clinical diagnosis. More PEEP raises intrathoracic pressure further. The tube depth is unchanged, so withdrawing it treats a problem he does not have.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "laan"
      },
      {
        id: "q3",
        kind: "single",
        update: "There is a rush of air and his SpO2 rises to 95%. A chest tube is placed. His BP is 80/48 mmHg after 2 units of red cells. eFAST shows free fluid in the right upper quadrant.",
        prompt: "Which of the following is the most appropriate next step for his ongoing shock?",
        options: [
          "Angiography and embolization",
          "CT of the abdomen before deciding",
          "Diagnostic peritoneal lavage",
          "Laparotomy in the operating room",
          "Repeat eFAST in 15 minutes"
        ],
        correct: 3,
        explanation: "He remains in shock after his chest was decompressed and blood was given, and eFAST shows free fluid, so the abdomen is the likely source and he needs an immediate bleeding control procedure. Taking an unstable patient to CT or angiography risks arrest away from the resuscitation area. Diagnostic peritoneal lavage only repeats what the positive eFAST already shows. Repeating the eFAST delays surgery.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "euro-bleeding"
      },
      {
        id: "q4",
        kind: "single",
        update: "The trauma surgeon agrees to operate. The team prepares to move him to the operating room in 10 minutes.",
        prompt: "Which of the following checks is most important to complete before he leaves the trauma bay?",
        options: [
          "Chest X-ray for tube and drain position",
          "CT of the cervical spine",
          "Formal tertiary survey of the limbs",
          "Retrograde urethrogram",
          "Skeletal survey of the long bones"
        ],
        correct: 0,
        explanation: "He has had an endotracheal tube and a chest tube placed during an emergency, so a portable chest X-ray confirms both positions and shows residual pneumothorax or hemothorax before he is moved and ventilated in the operating room. It takes minutes at the bedside. CT of the cervical spine can follow surgery if his spine is protected. A tertiary survey is done within 24 hours, after life-threatening problems are treated. A urethrogram and a skeletal survey are not indicated by anything in the case and would delay laparotomy.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "roberts-tension",
        citation: "Roberts DJ, Leigh-Smith S, Faris PD, et al. Clinical presentation of patients with tension pneumothorax: a systematic review. Ann Surg. 2015.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25563887/"
      },
      {
        id: "laan",
        citation: "Laan DV, Vu TD, Thiels CA, et al. Chest wall thickness and decompression failure: a systematic review and meta-analysis comparing anatomic locations in needle thoracostomy. Injury. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26724173/"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-22",
    topic: "multiple-trauma",
    title: "Boy with abdominal pain after a bike fall",
    stem: "You are working in a community hospital emergency department. A 9-year-old boy is brought to the emergency department by his parents because of vomiting and upper abdominal pain. Yesterday evening, about 14 hours ago, he fell off his bicycle and the end of the handlebar struck his upper abdomen. He was well enough to go to bed. He has vomited green fluid four times this morning. He is healthy and his immunizations are up to date. He has a round bruise over the epigastrium and epigastric tenderness with guarding. GCS 15.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "124/minute",
      resp: "24/minute",
      bp: "98/60 mmHg",
      o2sat: "98% on room air",
      weight: "30 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following injuries is most likely given the mechanism and his symptoms?",
        options: [
          "Duodenal or pancreatic injury",
          "Lap belt type lumbar fracture",
          "Left renal contusion",
          "Splenic capsular tear",
          "Viral gastroenteritis"
        ],
        correct: 0,
        explanation: "A handlebar end drives a focused force into the epigastrium and crushes the duodenum and pancreas against the spine. Delayed bilious vomiting and epigastric pain the next day fit a duodenal hematoma or pancreatic injury, which are easily missed at first. A lap belt fracture comes from flexion over a seatbelt, not a handlebar. Renal and splenic injuries cause flank or left upper quadrant pain rather than bilious vomiting. Gastroenteritis does not explain the patterned bruise and guarding.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes his shock index, pediatric age adjusted?",
        options: [
          "0.79, elevated for age",
          "0.79, normal for age",
          "1.27, elevated for age",
          "1.27, normal for age",
          "1.71, elevated for age"
        ],
        correct: 2,
        explanation: "The shock index is pulse divided by systolic BP, 124 / 98 = 1.27. The age adjusted cutoff for children aged 7 to 12 years is 1.0, so his value is elevated and identifies a child at higher risk of severe injury even though his systolic pressure is normal for age. A value of 0.79 comes from dividing BP by pulse. A value of 1.71 comes from dividing the pulse by the mean arterial pressure of about 73 mmHg.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "sipa"
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows a grade IV liver laceration with free fluid and a duodenal wall hematoma. He has had one 20 mL/kg crystalloid bolus. His pulse is 132/minute and BP 90/56 mmHg.",
        prompt: "Which of the following is the most appropriate next fluid or blood product order?",
        options: [
          "albumin 5% 20 mL/kg IV (600 mL)",
          "normal saline 20 mL/kg IV (600 mL)",
          "Red cells 10 mL/kg IV (300 mL)",
          "Red cells 40 mL/kg IV (1200 mL)",
          "tranexamic acid 15 mg/kg IV (450 mg)"
        ],
        correct: 2,
        explanation: "He remains in shock after a 20 mL/kg crystalloid bolus with a bleeding liver injury, so the next step is red cells at 10 mL/kg, which is 300 mL at 30 kg. A second crystalloid or albumin bolus dilutes clotting factors without restoring oxygen carrying capacity. A 40 mL/kg volume is a massive transfusion and is given in steps while response is reassessed. Tranexamic acid gives no benefit when started more than 3 hours after injury, and his injury was more than 14 hours ago.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "His pulse settles to 110/minute and BP 102/64 mmHg. He is accepted by the pediatric trauma centre. He retches every few minutes.",
        prompt: "Which of the following is the most appropriate step before he is transferred?",
        options: [
          "Intubation for airway protection",
          "Nasogastric tube for gastric decompression",
          "Oral contrast study of the duodenum",
          "Repeat CT to track the liver injury",
          "Wait for a stable hemoglobin level"
        ],
        correct: 1,
        explanation: "Persistent retching from duodenal obstruction puts him at risk of aspiration during transport, so a nasogastric tube is placed to decompress the stomach before he leaves. He has a GCS of 15 and is protecting his airway, so intubation is not indicated. An oral contrast study and a repeat CT add nothing that changes transfer and delay definitive care. Waiting for a stable hemoglobin delays transfer of a child whose bleeding may need a pediatric surgeon.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "sipa",
        citation: "Acker SN, Ross JT, Partrick DA, et al. Pediatric specific shock index accurately identifies severely injured children. J Pediatr Surg. 2015.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25638631/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-23",
    topic: "multiple-trauma",
    title: "Pedestrian struck on a highway",
    stem: "A 27-year-old man is brought to the emergency department by ambulance 20 minutes after a car struck him at highway speed. Paramedics are ventilating him with a bag-valve mask. GCS 6. He has crepitus over both sides of the chest and reduced breath sounds bilaterally. His abdomen is distended and his pelvis is unstable on gentle compression. There are no external wounds. No medical history is known.",
    vitals: {
      pulse: "142/minute",
      resp: "8/minute",
      bp: "68/40 mmHg",
      o2sat: "82% on bag-valve mask with oxygen",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "As the team prepares for intubation, he becomes pulseless. The monitor shows a narrow complex rhythm at 110/minute.",
        prompt: "Which of the following is the most appropriate immediate priority in his resuscitation?",
        options: [
          "Chest compressions and epinephrine 1 mg IV",
          "Pericardiocentesis before any other step",
          "Terminate resuscitation in the trauma bay",
          "Transfer to the operating room with CPR",
          "Treat hypovolemia, hypoxia and tension first"
        ],
        correct: 4,
        explanation: "Traumatic cardiac arrest is usually caused by hypovolemia, hypoxia, tension pneumothorax or tamponade, and treating these reversible causes takes priority over chest compressions. He has bilateral chest signs, an SpO2 of 82%, a distended abdomen and an unstable pelvis, so hypovolemia, hypoxia and tension pneumothorax are all likely here. Compressions and epinephrine do not restore volume in an empty heart. Pericardiocentesis does not address his likely causes, and no effusion has been shown. He arrested moments ago with organized electrical activity, so stopping is not justified, and moving him with CPR in progress delays every treatment.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "erc-special"
      },
      {
        id: "q2",
        kind: "menu",
        update: "POCUS shows weak cardiac activity and no pericardial effusion. A pulse check finds no pulse.",
        prompt: "Which of the following interventions should be performed at the same time now?",
        options: [
          "Bilateral finger thoracostomies",
          "Cervical collar before other steps",
          "Crystalloid 2 L as a rapid bolus",
          "Endotracheal intubation with oxygen",
          "Mechanical CPR device placement",
          "Pelvic binder at the greater trochanters",
          "Pericardiocentesis with a spinal needle",
          "Rapid transfusion of red cells and plasma"
        ],
        select: 4,
        correct: [
          0,
          3,
          5,
          7
        ],
        explanation: "Each reversible cause is treated in parallel. Bilateral finger thoracostomies treat possible tension pneumothorax, intubation with oxygen treats hypoxia, a binder over the greater trochanters closes the pelvis, and rapid blood and plasma restore volume. A collar does not treat any cause of arrest and must not delay these steps. Large volume crystalloid dilutes clotting factors. A mechanical CPR device does not fill an empty heart. POCUS shows no effusion, so pericardiocentesis is not indicated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "erc-special"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most effective way to deliver these interventions as team leader?",
        options: [
          "Ask for volunteers to take on each task",
          "Assign each task to a named team member",
          "Complete tasks in strict ABC sequence",
          "Do the thoracostomies yourself, then direct",
          "Wait for the trauma surgeon to assign roles"
        ],
        correct: 1,
        explanation: "Naming the person for each task, with closed loop confirmation, lets the interventions happen at the same time and avoids both duplication and missed tasks. Asking for volunteers leaves tasks unclaimed or claimed twice. A strict ABC sequence delays life-saving steps that should run in parallel in traumatic arrest. A leader who starts a procedure loses the overview of the room. Waiting for a surgeon wastes minutes that this patient does not have.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      },
      {
        id: "q4",
        kind: "single",
        update: "Air escapes from the right thoracostomy. Four units of red cells and 2 units of plasma are running. CPR continues with waveform capnography in place.",
        prompt: "Which of the following findings during CPR would best signal return of spontaneous circulation?",
        options: [
          "Abrupt rise in end-tidal CO2",
          "Gasping respiratory efforts",
          "Narrow complexes on the monitor",
          "Pink colour returning to the lips",
          "Pupils becoming smaller"
        ],
        correct: 0,
        explanation: "End-tidal CO2 reflects pulmonary blood flow, so an abrupt and sustained rise during CPR is the best of these signs that circulation may have returned. It is not enough on its own to stop compressions. It is combined with other signs of return of circulation before the next rhythm and pulse check. Narrow complexes were already present while he was pulseless. Gasping can occur during CPR without a pulse. Colour change and pupil size are subjective and change late.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "erc-als"
      }
    ],
    sources: [
      {
        id: "erc-special",
        citation: "Lott C, Truhlar A, Alfonzo A, et al. European Resuscitation Council Guidelines 2021: cardiac arrest in special circumstances. Resuscitation. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33773826/"
      },
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      },
      {
        id: "erc-als",
        citation: "Soar J, Böttiger BW, Carli P, et al. European Resuscitation Council Guidelines 2025: adult advanced life support. Resuscitation. 2025.",
        url: "https://doi.org/10.1016/j.resuscitation.2025.110769"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-24",
    topic: "multiple-trauma",
    title: "Rear seat passenger with a belt mark",
    stem: "A 16-year-old girl is brought to the emergency department by ambulance after a head-on collision at about 70 km/h. She was a rear seat passenger wearing a lap and shoulder belt. She has mid back pain and mild abdominal pain. She is healthy and takes no medications. GCS 15. There is a band of bruising across her lower abdomen below the umbilicus. Her abdomen is mildly tender without guarding. She has tenderness over the upper lumbar spine. Motor and sensory examination of the legs is normal.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "116/72 mmHg",
      o2sat: "99% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following injury combinations is most important to look for given her abdominal bruising?",
        options: [
          "Aortic and sternal injury",
          "Chance fracture and hollow viscus injury",
          "Diaphragm and liver injury",
          "Pelvic ring and bladder injury",
          "Splenic and left renal injury"
        ],
        correct: 1,
        explanation: "A seatbelt sign across the lower abdomen with upper lumbar tenderness points to a flexion distraction (Chance) fracture and to bowel or mesenteric injury, which often occur together and are easily missed on the first CT. Aortic and sternal injuries come from deceleration and a blow to the chest, not from the lap belt. Her spinal tenderness is lumbar, and her bruise lies across the lower abdomen rather than the left upper quadrant or the pelvis. Diaphragm and liver injuries are not the pattern this mark predicts.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows an L2 flexion distraction fracture and a small amount of free fluid in the pelvis with no solid organ injury. She remains stable.",
        prompt: "Which of the following is the most appropriate disposition for her abdominal findings?",
        options: [
          "Admit under surgery for serial examinations",
          "Discharge once she tolerates fluids",
          "Discharge with return precautions",
          "Observe 4 hours in the ED, then discharge",
          "Repeat CT in 24 hours as an outpatient"
        ],
        correct: 0,
        explanation: "Free fluid without a solid organ injury, in a patient with a seatbelt sign and a Chance fracture, suggests bowel or mesenteric injury until proven otherwise. Early CT can miss these injuries, so she is admitted under surgery for serial abdominal examinations and early operation if signs develop. Discharge, with or without a short period of observation, risks a delayed perforation at home. An outpatient CT the next day does not replace repeated examination by a surgeon.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following spinal precautions is most appropriate while she awaits spine surgery review?",
        options: [
          "Flat bed rest with log roll turns",
          "Keep her on the long spine board",
          "Mobilize now in a soft lumbar brace",
          "Sit upright to eat and to void",
          "Thoracolumbar brace, sitting at 45 degrees"
        ],
        correct: 0,
        explanation: "An unstable thoracolumbar fracture needs spinal motion restriction on a flat surface with log roll turns until the spine team decides on management. A long spine board is an extrication device and should be removed as soon as possible because it causes pain and pressure injury. Mobilizing in a brace, sitting her up at 45 degrees or sitting upright to eat before review risks displacement of an unstable fracture.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "smr-2018"
      },
      {
        id: "q4",
        kind: "single",
        update: "Eighteen hours later she has worsening abdominal pain. Temperature is 38.4°C oral and pulse 118/minute. Her abdomen is diffusely tender with guarding. She is voiding normally.",
        prompt: "Which of the following is the most likely explanation for her change?",
        options: [
          "Delayed bowel perforation",
          "Ileus from the spine fracture",
          "Opioid related constipation",
          "Pneumonia from bed rest",
          "Urinary tract infection"
        ],
        correct: 0,
        explanation: "New fever, tachycardia and diffuse guarding a day after a seatbelt injury with free fluid on CT are the typical course of a bowel injury that was not visible at first. She needs urgent surgical review for laparotomy. Pneumonia from bed rest can cause fever and tachycardia but not diffuse guarding, and constipation does not cause peritonitis. Ileus after a spine fracture causes distension without guarding or fever. She is voiding normally with no urinary symptoms, and a urinary infection does not explain diffuse peritoneal signs.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "smr-2018",
        citation: "Fischer PE, Perina DG, Delbridge TR, et al. Spinal motion restriction in the trauma patient: a joint position statement. Prehosp Emerg Care. 2018.",
        url: "https://www.tandfonline.com/doi/full/10.1080/10903127.2018.1481476"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-25",
    topic: "multiple-trauma",
    title: "Motorcyclist and a busy trauma bay",
    stem: "A 52-year-old man is brought to the emergency department by ambulance after his motorcycle collided with a truck. The trauma team is a senior resident, two nurses, a respiratory therapist and a recorder. He is pale and cool. GCS 15. His airway is clear and breath sounds are equal. There is an open fracture of the right tibia with slow oozing. His pelvis is tender, and there is bruising over the perineum. He has no neurological deficit. eFAST is negative, and a portable chest X-ray is normal.",
    vitals: {
      temperature: "35.9°C oral",
      pulse: "128/minute",
      resp: "26/minute",
      bp: "86/50 mmHg",
      o2sat: "96% on room air",
      weight: "84 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely source of his shock?",
        options: [
          "Bleeding from the open tibial fracture",
          "Cardiac contusion with pump failure",
          "Neurogenic shock from spinal injury",
          "Pelvic ring fracture hemorrhage",
          "Tension pneumothorax on the left"
        ],
        correct: 3,
        explanation: "He is in shock with a tender pelvis and perineal bruising, and the negative eFAST and normal chest X-ray make the pelvis the most likely source. Slow oozing from a tibial fracture cannot account for this degree of shock. Neurogenic shock causes warm skin and bradycardia with a neurological deficit, and he has none. Equal breath sounds and a normal chest X-ray exclude tension pneumothorax. Cardiac contusion rarely causes shock and would not explain the pelvic signs.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "wses-pelvis"
      },
      {
        id: "q2",
        kind: "single",
        update: "Three team members are cleaning and dressing the tibial wound. The recorder has stopped writing to help them. Nobody has applied the pelvic binder.",
        prompt: "Which of the following is the most appropriate way to redirect your team?",
        options: [
          "Announce that the pelvis needs a binder",
          "Apply the binder yourself without delay",
          "Ask the team what should happen next",
          "Let them finish the wound, then bind",
          "Name one nurse to apply the binder now"
        ],
        correct: 4,
        explanation: "The team has fixated on a visible but minor injury, so the leader reassigns a named person to the life-saving task and returns the recorder to documentation. Directed requests to a named person get done, while a general announcement to the room is often not acted on. A leader who applies the binder personally loses sight of the whole resuscitation. Asking the team to decide wastes time when the priority is clear. Finishing the wound first delays control of the likely source of bleeding.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the correct position for the pelvic binder?",
        options: [
          "Centred at the level of the umbilicus",
          "Centred over the anterior superior iliac spines",
          "Centred over the greater trochanters",
          "Centred over the iliac crests",
          "Centred over the upper thighs"
        ],
        correct: 2,
        explanation: "A binder centred over the greater trochanters closes the pelvic ring and reduces the pelvic volume most effectively. Binders are often placed too high, over the iliac crests or the anterior superior iliac spines, where they reduce the fracture poorly and may widen it. A binder at the level of the umbilicus compresses the abdomen instead of the pelvis. A binder on the upper thighs sits below the joint it needs to close.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "bonner"
      },
      {
        id: "q4",
        kind: "single",
        update: "You ask a nurse to give tranexamic acid 1 g IV over 10 minutes.",
        prompt: "Which of the following responses by the nurse best completes closed loop communication?",
        options: [
          "Draw up the drug and give it quietly",
          "Nod and start preparing the drug",
          "Repeat the order, then report it given",
          "Tell the recorder once the drug is in",
          "Write the order down on the chart"
        ],
        correct: 2,
        explanation: "Closed loop communication has three steps: a clear order to a named person, a spoken read-back of the order, and a report once the task is done. This catches errors of drug, dose and route and keeps the leader's picture current. A nod or silent preparation gives the leader no confirmation that the order was heard correctly. Telling only the recorder or writing it down leaves the leader unaware that the task is complete.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      }
    ],
    sources: [
      {
        id: "wses-pelvis",
        citation: "Coccolini F, Stahel PF, Montori G, et al. Pelvic trauma: WSES classification and guidelines. World J Emerg Surg. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28115984/"
      },
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      },
      {
        id: "bonner",
        citation: "Bonner TJ, Eardley WG, Newell N, et al. Accurate placement of a pelvic binder improves reduction of unstable fractures of the pelvic ring. J Bone Joint Surg Br. 2011.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22058306/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-26",
    topic: "multiple-trauma",
    title: "Front seat passenger with hip pain",
    stem: "A 34-year-old woman is brought to the emergency department by ambulance after a head-on collision. She was the front seat passenger, and her knees struck the dashboard. She has severe right hip pain. She is healthy and takes no medications. GCS 15. Her primary survey is otherwise normal. Her right leg is shortened, flexed, adducted and internally rotated. There is an abrasion over the right knee. A pelvic X-ray shows a posterior dislocation of the right hip with a small posterior wall acetabular fragment.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "104/minute",
      resp: "20/minute",
      bp: "128/80 mmHg",
      o2sat: "98% on room air",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings is most important to document before any reduction attempt?",
        options: [
          "Femoral nerve sensation on the thigh",
          "Hip range of motion against gravity",
          "Leg length compared with the other side",
          "Sciatic nerve function below the knee",
          "Straight leg raise on the injured side"
        ],
        correct: 3,
        explanation: "The sciatic nerve runs directly behind the hip and is injured in a significant proportion of posterior dislocations, most often its peroneal division. Foot dorsiflexion, plantar flexion and sensation below the knee must be documented before reduction, because a new deficit after reduction changes management. The femoral nerve lies anterior and is rarely involved. Testing hip motion or a straight leg raise is painful and adds nothing. The leg length difference is already evident and does not change management.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "rosen"
      },
      {
        id: "q2",
        kind: "single",
        update: "The sciatic nerve examination is normal. Her abdomen, chest and head are cleared.",
        prompt: "Which of the following is the most appropriate timing for reduction of her hip?",
        options: [
          "After MRI of the hip is completed",
          "As soon as possible, within 6 hours",
          "At the next elective orthopedic list",
          "Once swelling settles in 24 to 48 hours",
          "Within 24 hours on the trauma list"
        ],
        correct: 1,
        explanation: "The risk of avascular necrosis of the femoral head rises with the time the hip stays dislocated, so a posterior dislocation is reduced as soon as possible and ideally within 6 hours. With her other injuries cleared, it is now her most time-sensitive problem. Waiting for MRI, for swelling to settle or for an elective list increases the risk of femoral head necrosis. Waiting up to 24 hours for a scheduled list is too long.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "rosen"
      },
      {
        id: "q3",
        kind: "single",
        update: "The hip is reduced under procedural sedation. Afterwards her right knee has an effusion, and with the knee flexed to 90 degrees the tibia sags backward.",
        prompt: "Which of the following knee injuries is most likely given this finding?",
        options: [
          "Anterior cruciate ligament tear",
          "Lateral collateral ligament tear",
          "Medial meniscus tear",
          "Posterior cruciate ligament tear",
          "Quadriceps tendon rupture"
        ],
        correct: 3,
        explanation: "A dashboard blow drives the tibia backward and tears the posterior cruciate ligament, and a posterior sag with the knee flexed to 90 degrees is its sign. This injury is often missed when attention is on the hip. An anterior cruciate tear gives anterior laxity, not a posterior sag. Collateral ligament and meniscal injuries do not cause a posterior sag. A quadriceps tendon rupture causes loss of active knee extension rather than tibial sag.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "rosen-knee"
      },
      {
        id: "q4",
        kind: "single",
        update: "One hour after reduction she cannot dorsiflex her right foot, and she has new numbness over the top of the foot. Both were normal before reduction.",
        prompt: "Which of the following is the most appropriate next step for this new finding?",
        options: [
          "Ankle foot orthosis and discharge",
          "Nerve conduction studies in 3 weeks",
          "Observation for spontaneous recovery",
          "Repeat closed reduction at once",
          "Urgent CT and orthopedic review"
        ],
        correct: 4,
        explanation: "A sciatic nerve deficit that appears after reduction, when the examination before it was normal, suggests the nerve or a bone fragment is trapped in the joint. It needs urgent CT and orthopedic review for possible open exploration. Observation or a brace assumes a stretch injury that will recover and may miss a reversible cause. Nerve conduction studies are not useful for weeks after injury. A repeat closed reduction of a hip that is already reduced does not free an entrapped nerve.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "rosen"
      }
    ],
    sources: [
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th edition. Elsevier. 2023. Chapter 47, Femur and Hip Injuries.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "rosen-knee",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th edition. Elsevier. 2023. Chapter 48, Knee and Lower Leg Injuries.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-27",
    topic: "multiple-trauma",
    title: "All-terrain vehicle rider and a wire fence",
    stem: "A 19-year-old man is brought to the emergency department by ambulance after he rode an all-terrain vehicle into a wire fence that caught him across the front of the neck. He has neck pain and a hoarse voice. He is healthy and takes no medications. GCS 15. He is sitting up and speaking in short sentences. There is a linear abrasion across the anterior neck with tenderness over the larynx and crepitus in the soft tissues of the neck. There is no stridor. His breath sounds are equal.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "104/minute",
      resp: "22/minute",
      bp: "132/80 mmHg",
      o2sat: "96% on room air",
      weight: "76 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Over 20 minutes his voice becomes weaker and the crepitus spreads to the upper chest wall. His SpO2 is 94% on room air.",
        prompt: "Which of the following is the most likely explanation for this change?",
        options: [
          "Anxiety related vocal fatigue",
          "Carotid artery dissection",
          "Laryngotracheal disruption",
          "Recurrent laryngeal nerve stretch",
          "Simple pneumothorax"
        ],
        correct: 2,
        explanation: "A direct blow to the anterior neck with hoarseness, laryngeal tenderness and spreading subcutaneous emphysema indicates disruption of the larynx or trachea with an ongoing air leak. A weakening voice and spreading air warn that the airway may soon be lost. Anxiety does not produce subcutaneous emphysema. A carotid dissection causes neurological signs rather than air in the tissues. A stretched recurrent laryngeal nerve can cause hoarseness but not spreading air. His breath sounds are equal and the air started in the neck.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "rosen"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to securing his airway?",
        options: [
          "Awake flexible scope intubation, surgeon ready",
          "Blind nasotracheal intubation",
          "Rapid sequence intubation by laryngoscopy",
          "Supraglottic airway insertion",
          "Surgical cricothyroidotomy now"
        ],
        correct: 0,
        explanation: "With a suspected laryngotracheal injury, the tube should pass the injury under direct vision while he breathes on his own, so awake flexible scope intubation is used with a surgeon ready to perform a tracheostomy. Paralysis for rapid sequence intubation can turn a partial disruption into a complete loss of the airway, and a tube passed blindly can create a false passage. A supraglottic airway pushes air through the disrupted larynx. A cricothyroidotomy at the site of injury may enter the damaged segment or miss a distal tear.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "rosen"
      },
      {
        id: "q3",
        kind: "single",
        update: "An anesthesiologist, an otolaryngologist, a respiratory therapist and two nurses gather in the operating room for his airway.",
        prompt: "Which of the following is the most important step before the first airway attempt begins?",
        options: [
          "Brief the team on each backup plan",
          "Discuss the plan once the tube is in",
          "Leave planning to the anesthetist alone",
          "Sedate him deeply first, then decide",
          "Start without a surgeon in the room"
        ],
        correct: 0,
        explanation: "A short briefing before a high-risk airway gives the whole team a shared mental model of the primary plan, the backup plans and the trigger to move to a surgical airway, and assigns each person a role. Planning after the attempt or leaving it to one person means others cannot anticipate or speak up. Deep sedation before a plan can abolish his own breathing through a disrupted airway. Starting without the surgeon present removes the surgical backup he may need within seconds.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      },
      {
        id: "q4",
        kind: "single",
        update: "His airway is secured in the operating room. He has a GCS of 15 before sedation and no focal deficit.",
        prompt: "Which of the following investigations is most appropriate to look for an associated vascular injury?",
        options: [
          "Carotid duplex ultrasound",
          "CT angiography of the neck",
          "Four vessel catheter angiography",
          "MR angiography of the neck",
          "Noncontrast CT of the neck"
        ],
        correct: 1,
        explanation: "A clothesline mechanism with an anterior neck abrasion is a risk factor for blunt cerebrovascular injury, which is often silent until a stroke occurs. CT angiography is the recommended screening test because it is fast, widely available and accurate. Duplex ultrasound misses injuries near the skull base. Catheter angiography is invasive and is kept for unclear CT results or treatment. MR angiography is slower and less available. A noncontrast CT cannot show the vessel wall.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "east-bcvi"
      }
    ],
    sources: [
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th edition. Elsevier. 2023. Chapter 36, Neck Trauma.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      },
      {
        id: "east-bcvi",
        citation: "Kim DY, Biffl W, Bokhari F, et al. Evaluation and management of blunt cerebrovascular injury: a practice management guideline from the Eastern Association for the Surgery of Trauma. J Trauma Acute Care Surg. 2020.",
        url: "https://pubmed.ncbi.nlm.nih.gov/32176167/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-28",
    topic: "multiple-trauma",
    title: "Man who jumped from a burning house",
    stem: "You are working in a regional hospital emergency department without a burn unit. A 35-year-old man is brought to the emergency department by ambulance 30 minutes after he jumped from a third floor window to escape a house fire. He has pain in his chest, abdomen and left hip. He is healthy and has received no analgesia. GCS 14. He moves all four limbs normally. His voice is hoarse, his nasal hairs are singed and he coughs up black sputum. He has partial thickness burns to the front of both arms and the front of the chest, about 18% of his body surface area, without circumferential full thickness areas. His left upper quadrant is tender. eFAST shows free fluid in the left upper quadrant.",
    vitals: {
      temperature: "36.1°C oral",
      pulse: "128/minute",
      resp: "28/minute",
      bp: "88/52 mmHg",
      o2sat: "93% on a non-rebreather mask",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his hypotension?",
        options: [
          "Burn shock from capillary leak",
          "Carbon monoxide poisoning",
          "Hemorrhage from blunt injuries",
          "Neurogenic shock from spinal injury",
          "Vasodilation from opioid analgesia"
        ],
        correct: 2,
        explanation: "He fell from a third floor window and has free fluid in the left upper quadrant, so hemorrhage is the most likely cause of shock within the first hour. Burn shock develops over hours and is uncommon this early, so early hypotension in a burned patient points to another injury. Carbon monoxide causes hypoxia and neurological symptoms more than early hypotension. He is tachycardic and moves all four limbs normally, which argues against neurogenic shock. He has received no analgesia, so opioid vasodilation is not the cause.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate decision about his airway?",
        options: [
          "Early intubation with a large tube",
          "High-flow nasal oxygen and reassess",
          "Intubate only if stridor develops",
          "Nebulized epinephrine and observation",
          "Observe and reassess in 4 hours"
        ],
        correct: 0,
        explanation: "Hoarseness, singed nasal hair and carbonaceous sputum indicate inhalation injury, and airway swelling will worsen over the next hours with fluid resuscitation and transfer. Early intubation with a large tube, before swelling develops, is the safest course and allows later bronchoscopy. Waiting for stridor means intubating a narrowed, swollen airway. Nebulized epinephrine, high-flow oxygen and observation do not prevent progressive edema.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following should guide his fluid and blood therapy in the first hour?",
        options: [
          "Blood products for hemorrhagic shock",
          "Burn formula based on 18% of body area",
          "Colloid infusion to expand plasma volume",
          "Crystalloid titrated to urine output",
          "Hypertonic saline to limit burn edema"
        ],
        correct: 0,
        explanation: "His shock is from bleeding, so it is treated with blood products and early hemorrhage control, as in any bleeding trauma patient. Burn formulas estimate the fluid lost by capillary leak over 24 hours and do not replace blood lost to injury. Large volumes of crystalloid or colloid dilute clotting factors and worsen edema. Hypertonic saline has no proven benefit in bleeding trauma.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q4",
        kind: "single",
        update: "He is intubated and has received 4 units of red cells. The burn and trauma centre accepts him for transfer by air.",
        prompt: "Which of the following is the most appropriate care of his burns before transfer?",
        options: [
          "Apply silver sulfadiazine to the burns",
          "Cool wet soaks for the transfer",
          "Cover the burns with clean dry dressings",
          "Deroof all blisters before departure",
          "Escharotomy of both arms before leaving"
        ],
        correct: 2,
        explanation: "Clean dry dressings protect the burns and limit heat loss during transport, and the receiving centre will assess and dress the wounds. Wet soaks over 18% of his body promote hypothermia, which worsens coagulopathy in a bleeding patient. Topical agents such as silver sulfadiazine obscure the wound for the burn team. Deroofing blisters is not an emergency step. His burns are partial thickness and not circumferential, so escharotomy is not indicated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-29",
    topic: "multiple-trauma",
    title: "Ironworker after a large transfusion",
    stem: "A 49-year-old man was brought to the emergency department by ambulance 6 hours ago after he fell 8 m from scaffolding. He was intubated on arrival. He had a grade IV liver laceration treated with angioembolization. He has received 14 units of red cells, 10 units of plasma and 6 L of crystalloid. He remains intubated in the emergency department while he waits for an intensive care bed. Over the last hour his peak airway pressure has risen from 26 to 38 cmH2O. His urine output has fallen to 5 mL/hour. His abdomen is distended and tense.",
    vitals: {
      temperature: "35.8°C core",
      pulse: "122/minute",
      resp: "18/minute",
      bp: "96/58 mmHg",
      o2sat: "92% on FiO2 0.6 by ventilator",
      weight: "100 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his rising airway pressure and falling urine output?",
        options: [
          "Abdominal compartment syndrome",
          "Acute respiratory distress syndrome",
          "Acute tubular necrosis",
          "Right mainstem tube migration",
          "Transfusion associated circulatory overload"
        ],
        correct: 0,
        explanation: "Rising airway pressure and oliguria with a tense, distended abdomen after large volume resuscitation for a liver injury point to abdominal compartment syndrome. Raised abdominal pressure pushes the diaphragm up and compresses the renal veins and parenchyma. Acute respiratory distress syndrome and transfusion associated circulatory overload can raise airway pressure but do not explain a tense abdomen. Acute tubular necrosis explains oliguria but not the ventilation change. Tube migration does not cause oliguria or abdominal distension.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "wsacs"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following are required for an accurate bladder measurement of his intra-abdominal pressure?",
        options: [
          "Head of bed raised to 45 degrees",
          "Instill 100 mL of saline first",
          "Instill no more than 25 mL of saline",
          "Patient lying supine",
          "Reading taken at end expiration",
          "Reading taken during a cough",
          "Transducer zeroed at the midaxillary line",
          "Transducer zeroed at the symphysis pubis"
        ],
        select: 4,
        correct: [
          2,
          3,
          4,
          6
        ],
        explanation: "Intra-abdominal pressure is measured through the bladder with the patient supine, at end expiration, with the transducer zeroed at the midaxillary line and a priming volume of no more than 25 mL of saline. This standard method makes readings reproducible and comparable with the thresholds for intra-abdominal hypertension and compartment syndrome. Raising the head of the bed and coughing both raise the reading falsely. Larger instilled volumes overestimate the pressure. The symphysis pubis is not the recommended zero reference.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "wsacs"
      },
      {
        id: "q3",
        kind: "single",
        update: "His bladder pressure is 28 mmHg. His BP is now 88/54 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Decompressive laparotomy",
          "furosemide 40 mg IV",
          "Higher PEEP to recruit the lungs",
          "Repeat bladder pressure in 6 hours",
          "Saline 1 L bolus for the oliguria"
        ],
        correct: 0,
        explanation: "A pressure above 20 mmHg with new organ dysfunction, here oliguria, rising airway pressure and hypotension, defines abdominal compartment syndrome, and the treatment for overt syndrome is decompressive laparotomy. More crystalloid increases bowel and abdominal wall edema and raises pressure further. Furosemide cannot work while the kidneys are compressed and he is hypotensive. Higher PEEP raises intrathoracic pressure without relieving the abdomen. Waiting 6 hours allows organ failure to progress.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "wsacs"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following aspects of his resuscitation most increased his risk of this complication?",
        options: [
          "Angioembolization contrast load",
          "Large volume crystalloid infusion",
          "Plasma given with red cells",
          "Positive end-expiratory pressure of 5",
          "Tranexamic acid infusion"
        ],
        correct: 1,
        explanation: "Six litres of crystalloid in a bleeding patient cause bowel and tissue edema that raises abdominal pressure, which is why a restricted crystalloid strategy is recommended in bleeding trauma. Giving plasma with red cells is part of damage control resuscitation and lowers the crystalloid needed. Contrast load affects the kidneys, not abdominal pressure. PEEP of 5 cmH2O is standard and tranexamic acid does not cause abdominal edema.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "euro-bleeding"
      }
    ],
    sources: [
      {
        id: "wsacs",
        citation: "Kirkpatrick AW, Roberts DJ, De Waele J, et al. Intra-abdominal hypertension and the abdominal compartment syndrome: updated consensus definitions and clinical practice guidelines from the World Society of the Abdominal Compartment Syndrome. Intensive Care Med. 2013.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23673399/"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-30",
    topic: "multiple-trauma",
    title: "Young man waiting for femur surgery",
    stem: "A 22-year-old man was brought to the emergency department by ambulance 30 hours ago after a car hit him while he was cycling. He has an isolated closed fracture of the left femoral shaft in a traction splint. He is waiting in the emergency department for an operating room. He has received hydromorphone 1 mg IV every 4 hours, last 3 hours ago. Tonight the nurse finds him confused and short of breath. He has petechiae over both axillae and the conjunctivae. His chest is clear. CT of the head on arrival was normal, and he did not lose consciousness.",
    vitals: {
      temperature: "38.1°C oral",
      pulse: "122/minute",
      resp: "30/minute",
      bp: "118/70 mmHg",
      o2sat: "86% on room air",
      weight: "74 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for his new symptoms?",
        options: [
          "Alcohol withdrawal delirium",
          "Delayed epidural hematoma",
          "Fat embolism syndrome",
          "Opioid toxicity",
          "Pulmonary embolism from DVT"
        ],
        correct: 2,
        explanation: "Hypoxemia, confusion and a petechial rash in the axillae and conjunctivae 30 hours after a long bone fracture are the classic triad of fat embolism syndrome. A pulmonary embolism can cause hypoxia and tachycardia but not a petechial rash. Opioid toxicity causes a slow respiratory rate, and his is 30/minute. A delayed epidural hematoma does not cause hypoxemia or petechiae. Alcohol withdrawal does not explain the rash or the degree of hypoxemia.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "miyake-fes"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial management of this complication?",
        options: [
          "heparin infusion by weight nomogram",
          "methylprednisolone 30 mg/kg IV",
          "naloxone 0.4 mg IV",
          "Oxygen, then supportive ICU care",
          "Thrombolysis with alteplase"
        ],
        correct: 3,
        explanation: "Treatment of fat embolism syndrome is supportive, starting with oxygen and escalating to ventilatory support as needed, with admission to intensive care. Corticosteroids have inconsistent benefit and possible harm, so they are not standard treatment. Heparin and thrombolysis treat thrombus, not fat, and add bleeding risk in a patient awaiting surgery. His respiratory rate of 30/minute does not suggest opioid toxicity, so naloxone would only cause pain.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "miyake-fes"
      },
      {
        id: "q3",
        kind: "single",
        update: "He improves on oxygen by high-flow nasal cannula and is admitted to the intensive care unit.",
        prompt: "Which of the following would have most reduced his risk of this complication?",
        options: [
          "Bed rest for 72 hours before surgery",
          "Early fixation of the femoral fracture",
          "Prolonged skeletal traction",
          "Prophylactic corticosteroids",
          "Restricting oxygen to SpO2 90%"
        ],
        correct: 1,
        explanation: "Early stabilization of a femoral shaft fracture, ideally within 24 hours, lowers the rate of fat embolism syndrome and pulmonary complications. He waited 30 hours in a traction splint, which is a delay the trauma team can prevent. Prolonged traction and bed rest delay fixation. Prophylactic corticosteroids are not standard care. Oxygen targets do not prevent fat embolism.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "miyake-fes"
      }
    ],
    sources: [
      {
        id: "miyake-fes",
        citation: "Miyake T, Okada H, Kanda N. Advances and uncertainties in fat embolism syndrome: a review. Trauma Surg Acute Care Open. 2026.",
        url: "https://doi.org/10.1136/tsaco-2025-001913"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-31",
    topic: "multiple-trauma",
    title: "Driver with chest pain after a crash",
    stem: "A 58-year-old woman is brought to the emergency department by ambulance after a frontal collision at about 60 km/h. The steering wheel struck her chest. She has anterior chest pain. She has hypertension treated with amlodipine. GCS 15. She has tenderness and bruising over the sternum. Breath sounds are equal and the abdomen is soft. A chest X-ray shows a nondisplaced sternal fracture. The primary survey is otherwise normal.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "108/minute",
      resp: "20/minute",
      bp: "128/74 mmHg",
      o2sat: "97% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following initial tests is most appropriate to screen for blunt cardiac injury?",
        options: [
          "Cardiac MRI within 24 hours",
          "CK-MB and a chest X-ray",
          "ECG and troponin I",
          "Echocardiogram for every patient",
          "Sternal view X-ray alone"
        ],
        correct: 2,
        explanation: "An ECG is recommended for every patient with suspected blunt cardiac injury, and adding troponin I improves the screen, because blunt cardiac injury is effectively excluded when both are normal. CK-MB does not help in diagnosis. Echocardiography is for patients who are unstable or have abnormal screening results, not for everyone. Cardiac MRI is not a screening test. A sternal fracture alone does not predict cardiac injury, so a sternal view adds nothing.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "east-bci"
      },
      {
        id: "q2",
        kind: "single",
        update: "Her ECG shows a new right bundle branch block and frequent premature ventricular complexes. Troponin I is elevated.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admission with continuous monitoring",
          "Cardiac catheterization now",
          "Discharge with a repeat troponin",
          "Observe 6 hours, then discharge",
          "Pericardial window tonight"
        ],
        correct: 0,
        explanation: "A new conduction abnormality and ectopy on the ECG, with an elevated troponin, indicate blunt cardiac injury, and she needs admission with continuous cardiac monitoring for arrhythmias and pump failure. Discharge after a short observation is unsafe with an abnormal ECG. Catheterization is not a routine step unless coronary injury is suspected. A pericardial window is for tamponade, which she does not have.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "east-bci"
      },
      {
        id: "q3",
        kind: "single",
        update: "Three hours later her pulse is 124/minute and her BP is 92/78 mmHg. Her neck veins are distended. Breath sounds remain equal.",
        prompt: "Which of the following bedside tests will most quickly confirm the likely cause of this change?",
        options: [
          "Chest X-ray for heart size",
          "CT of the chest with contrast",
          "Focused cardiac ultrasound",
          "Formal echo by cardiology",
          "Repeat troponin I level"
        ],
        correct: 2,
        explanation: "Her pulse pressure has narrowed to 14 mmHg, her pulse has risen and her neck veins are distended, which suggests pericardial tamponade. Equal breath sounds make tension pneumothorax unlikely. Focused cardiac ultrasound at the bedside shows an effusion and chamber collapse within minutes. A chest X-ray is insensitive for acute tamponade. CT moves an unstable patient away from the resuscitation area. A formal echo takes longer to arrange, and a repeat troponin does not identify tamponade.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "Ultrasound shows a large pericardial effusion with right ventricular collapse. A cardiac surgeon is in the hospital and the operating room is ready.",
        prompt: "Which of the following is the most appropriate management at this point?",
        options: [
          "Fluid bolus and observation in the ICU",
          "Norepinephrine infusion and repeat echo",
          "Pericardiocentesis alone, then observe",
          "Sternotomy or window in the operating room",
          "Thoracotomy in the emergency department"
        ],
        correct: 3,
        explanation: "Traumatic tamponade is treated surgically, and with a cardiac surgeon and operating room ready, she goes directly for pericardial decompression and repair. Pericardiocentesis is a temporizing step when surgery is not immediately available and often fails with clotted blood. A fluid bolus may buy minutes but is not definitive. Vasopressors do not relieve tamponade. She still has a pulse and a blood pressure, so thoracotomy in the emergency department is not indicated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "east-bci",
        citation: "Clancy K, Velopulos C, Bilaniuk JW, et al. Screening for blunt cardiac injury: an Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23114485/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-32",
    topic: "multiple-trauma",
    title: "Pedestrian during a large transfusion",
    stem: "A 44-year-old woman was brought to the emergency department by ambulance 90 minutes ago after a car struck her as she crossed a road. She has an unstable pelvic fracture and a closed left femoral shaft fracture. She was intubated on arrival. The massive hemorrhage protocol was activated, and she has received 10 units of red cells, 6 units of plasma and 2 L of crystalloid. A pelvic binder is on, and the interventional radiology team is preparing for angioembolization. She has no medical history. There is no head injury on CT. Her blood group is now known.",
    vitals: {
      temperature: "34.6°C core",
      pulse: "118/minute",
      resp: "16/minute",
      bp: "94/58 mmHg",
      o2sat: "97% on FiO2 0.5 by ventilator",
      weight: "66 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following laboratory targets are appropriate during her massive hemorrhage protocol?",
        options: [
          "Fibrinogen above 1.5 g/L",
          "Fibrinogen above 4.0 g/L",
          "Hemoglobin above 120 g/L",
          "INR below 1.0 before surgery",
          "Ionized calcium above 1.15 mmol/L",
          "Platelets above 150 x 10^9/L",
          "Platelets above 50 x 10^9/L",
          "Potassium below 3.0 mmol/L"
        ],
        select: 3,
        correct: [
          0,
          4,
          6
        ],
        explanation: "Canadian consensus targets during a massive hemorrhage protocol include fibrinogen above 1.5 g/L, ionized calcium above 1.15 mmol/L and platelets above 50 x 10^9/L, together with hemoglobin above 80 g/L and INR below 1.8. She has no head injury, so the higher platelet target of 100 x 10^9/L for brain injury does not apply. Targets of 4.0 g/L for fibrinogen, 120 g/L for hemoglobin, 150 x 10^9/L for platelets and an INR of 1.0 lead to overtransfusion. A potassium below 3.0 mmol/L is hypokalemia, not a target.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "on-mhp"
      },
      {
        id: "q2",
        kind: "single",
        update: "Her potassium is 6.6 mmol/L and ionized calcium 0.78 mmol/L. The ECG shows new peaked T waves. The monitor shows sinus tachycardia.",
        prompt: "Which of the following is the most appropriate immediate treatment for these results?",
        options: [
          "calcium chloride 1 g IV",
          "furosemide 40 mg IV",
          "magnesium sulfate 2 g IV",
          "sodium bicarbonate 100 mmol IV",
          "sodium polystyrene sulfonate 30 g PR"
        ],
        correct: 0,
        explanation: "Stored red cells release potassium and their citrate binds calcium, so a large transfusion can cause both hyperkalemia and hypocalcemia. Calcium chloride treats both problems at once. It stabilizes the myocardium against the potassium of 6.6 mmol/L and corrects the ionized calcium of 0.78 mmol/L, which also impairs clotting. Bicarbonate raises pH and lowers ionized calcium further. Furosemide and a potassium binder act too slowly for ECG changes and do not help the calcium. Magnesium does not treat either problem.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "euro-bleeding"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate measure for her core temperature of 34.6°C?",
        options: [
          "Keep her fully exposed until CT",
          "Target 34°C for brain protection",
          "Wait until surgery to rewarm her",
          "Warm crystalloid only, not blood",
          "Warm every product through a fluid warmer"
        ],
        correct: 4,
        explanation: "Hypothermia worsens coagulopathy and is often caused by the resuscitation itself, through cold products and exposure. All red cells, plasma and fluids should run through a warmer, with active warming to reach normothermia of 36°C or higher. Blood is the largest volume she receives, so warming only crystalloid leaves the main cause untreated. Prolonged exposure increases heat loss. She has no head injury, and induced hypothermia has no role in bleeding trauma. Waiting for surgery lets the temperature fall further.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "on-mhp"
      },
      {
        id: "q4",
        kind: "single",
        update: "Angioembolization controls the pelvic bleeding. Her BP has been stable at 118/70 mmHg for 30 minutes without vasopressors, and no products have been needed for 30 minutes.",
        prompt: "Which of the following is the most appropriate next step for her massive hemorrhage protocol?",
        options: [
          "Continue fixed ratio products for 24 hours",
          "Keep the protocol active until morning",
          "Stop it and stop all laboratory testing",
          "Terminate it and transfuse by lab results",
          "Transfuse until hemoglobin exceeds 120 g/L"
        ],
        correct: 3,
        explanation: "Termination is appropriate once the source of bleeding is controlled, she is hemodynamically stable without vasopressors and the transfusion rate has slowed. Further transfusion is then guided by laboratory results. Continuing fixed ratio products or keeping the protocol active risks overtransfusion and wastes scarce components. Laboratory monitoring should continue after the protocol ends to guide ongoing care. A hemoglobin target of 120 g/L is far above the 80 g/L resuscitation target.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "on-mhp"
      }
    ],
    sources: [
      {
        id: "on-mhp",
        citation: "Callum JL, Yeh CH, Petrosoniak A, et al. A regional massive hemorrhage protocol developed through a modified Delphi technique. CMAJ Open. 2019.",
        url: "https://www.cmajopen.ca/content/7/3/E546"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-33",
    topic: "multiple-trauma",
    title: "Toddler after a fall from a balcony",
    stem: "You are working in a community hospital emergency department 2 hours by road from the pediatric trauma centre. A 3-year-old boy is brought in by his parents 30 minutes after he fell about 4 m from a second floor balcony onto concrete. He vomited twice in the car and is now drowsy. GCS 8 (E2 V2 M4). He has a large boggy swelling over the right parietal scalp. The right pupil is 4 mm and the left 3 mm, and both react to light. His abdomen is soft. There are no other obvious injuries.",
    vitals: {
      temperature: "36.5°C tympanic",
      pulse: "150/minute",
      resp: "28/minute",
      bp: "104/64 mmHg",
      o2sat: "94% on room air",
      weight: "15 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in arranging his definitive care?",
        options: [
          "Ask the parents to drive him there",
          "Call the pediatric trauma centre now",
          "Complete a full CT before calling",
          "Page the local general surgeon first",
          "Wait for a GCS trend before calling"
        ],
        correct: 1,
        explanation: "A child with a GCS of 8 and an asymmetric pupil after a 4 m fall needs neurosurgical care that your hospital cannot provide, so the call to the pediatric trauma centre is made early, alongside resuscitation. The receiving team can advise on imaging, airway and transport. Completing a CT or waiting for a trend delays transfer and the decision should not depend on them. A local general surgeon cannot treat a pediatric brain injury. A child with a GCS of 8 must never travel by private car.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following airway plans is most appropriate before he is transferred?",
        options: [
          "Intubate and ventilate before transfer",
          "Nasopharyngeal airway and oxygen",
          "Observe for 1 hour, then reassess",
          "Transfer now with oxygen by face mask",
          "Wait for the transport team to intubate"
        ],
        correct: 0,
        explanation: "A GCS of 8 means he cannot reliably protect his airway, and hypoxia or hypercarbia during a 2 hour transfer would worsen his brain injury, so he is intubated and ventilated before he leaves. Securing the airway in the department is safer than doing it in a moving vehicle. Waiting an hour or for a transport team leaves an unprotected airway while he deteriorates. A nasopharyngeal airway risks entering the cranium if there is a basal skull fracture and does not protect against aspiration.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "After intubation his pulse is 168/minute and BP 72/40 mmHg. eFAST shows free fluid around the spleen and in the pelvis. It is 50 minutes since the fall.",
        prompt: "Which of the following is the most appropriate initial dose of tranexamic acid for him?",
        options: [
          "tranexamic acid 150 mg IV",
          "tranexamic acid 225 mg IV",
          "tranexamic acid 450 mg IV",
          "tranexamic acid 1000 mg IV",
          "No tranexamic acid in children"
        ],
        correct: 1,
        explanation: "Tranexamic acid is accepted practice for injured children who need transfusion, within the same 3 hour window as adults. The suggested initial bolus is 15 mg/kg to a maximum of 1 g, so at 15 kg the dose is 15 x 15 = 225 mg. A dose of 150 mg is 10 mg/kg and underdoses him. A dose of 450 mg is 30 mg/kg, twice the suggested bolus. The adult dose of 1000 mg is about 67 mg/kg. Withholding it ignores accepted pediatric practice.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "on-mhp"
      },
      {
        id: "q4",
        kind: "single",
        update: "He has received red cells and his BP is 96/58 mmHg. The transport team has arrived and he is ready to leave.",
        prompt: "Which of the following ventilation targets is most appropriate during his transfer?",
        options: [
          "End-tidal CO2 25 to 30 mmHg",
          "End-tidal CO2 35 to 40 mmHg",
          "End-tidal CO2 45 to 50 mmHg",
          "Resp. rate 50/minute",
          "SpO2 85 to 88%"
        ],
        correct: 1,
        explanation: "Normal ventilation, with an end-tidal CO2 of about 35 to 40 mmHg checked against a blood gas PaCO2 target of 35 to 40 mmHg, avoids both the cerebral ischemia of hyperventilation and the raised intracranial pressure of hypercarbia. Prophylactic hyperventilation to 25 to 30 mmHg narrows cerebral vessels and reduces brain blood flow, and is kept for brief use during active herniation. A CO2 of 45 to 50 mmHg dilates cerebral vessels and raises intracranial pressure. An oxygen saturation of 85 to 88% is hypoxia, which worsens brain injury. A rate of 50/minute is hyperventilation for a 3-year-old.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "btf-peds"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "on-mhp",
        citation: "Callum JL, Yeh CH, Petrosoniak A, et al. A regional massive hemorrhage protocol developed through a modified Delphi technique. CMAJ Open. 2019.",
        url: "https://www.cmajopen.ca/content/7/3/E546"
      },
      {
        id: "btf-peds",
        citation: "Kochanek PM, Tasker RC, Carney N, et al. Guidelines for the management of pediatric severe traumatic brain injury, third edition: update of the Brain Trauma Foundation guidelines. Pediatr Crit Care Med. 2019.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30829890/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-34",
    topic: "multiple-trauma",
    title: "Farmer pinned under a tractor",
    stem: "You are working in a rural hospital emergency department in northern Manitoba, 3 hours by road from the trauma centre. A 60-year-old man is brought in by ambulance after his tractor rolled and pinned his right leg for about 1 hour in an outdoor temperature of minus 10°C. His clothes are wet. He takes ramipril for hypertension. GCS 15. His primary survey is otherwise normal. He has a closed deformity of the mid right thigh and a swollen, deformed right ankle.",
    vitals: {
      temperature: "35.0°C rectal",
      pulse: "112/minute",
      resp: "20/minute",
      bp: "124/76 mmHg",
      o2sat: "95% on room air",
      weight: "92 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "X-rays show a midshaft femoral fracture and a fracture dislocation of the right ankle. The right foot is pale and cool with no palpable pulses.",
        prompt: "Which of the following is the most appropriate step for his ankle before transfer?",
        options: [
          "Arrange CT angiography at the trauma centre",
          "Elevate the leg and transfer urgently",
          "Reduce the ankle under sedation now",
          "Splint the ankle as it lies and transfer",
          "Wait for an orthopedic surgeon to reduce it"
        ],
        correct: 2,
        explanation: "A pale, pulseless foot with a dislocated ankle means the vessels are kinked or compressed by the deformity, and reduction usually restores flow. He is 3 hours from the trauma centre, so reduction under procedural sedation is done now and the pulses are rechecked afterwards. Splinting the ankle in its deformed position leaves the foot ischemic for the whole journey. Elevation lowers perfusion pressure further. Waiting for an orthopedic surgeon or CT angiography at the trauma centre adds hours of ischemia.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "boast-ankle"
      },
      {
        id: "q2",
        kind: "single",
        update: "After reduction the foot is pink with a palpable dorsalis pedis pulse. The ankle is placed in a padded splint.",
        prompt: "Which of the following is the most appropriate splint for his femoral fracture during transfer?",
        options: [
          "Air splint inflated around the thigh",
          "Long padded board splint, no traction",
          "Soft dressing and pillow support",
          "Traction splint applied at the ankle",
          "No splint to allow examination"
        ],
        correct: 1,
        explanation: "A traction splint pulls through the ankle, so it is contraindicated when the same ankle is fractured, and a long padded splint that immobilizes the hip, knee and ankle is used instead. Air splints do not control a femoral shaft fracture and can lose pressure. A soft dressing and pillows allow the fragments to move during a 3 hour transfer. Leaving the leg unsplinted causes pain and further soft tissue injury.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "naemsp-femur"
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following measures will best prevent further heat loss during his transfer?",
        options: [
          "Cold saline to keep the line open",
          "Frequent full exposure for skin checks",
          "Heat packs or warming blanket on the trunk",
          "Oral hot fluids during the transfer",
          "Remove wet clothing, then insulate",
          "Vigorous rubbing of the limbs",
          "Warmed IV fluids through a line warmer"
        ],
        select: 3,
        correct: [
          2,
          4,
          6
        ],
        explanation: "His core temperature is 35.0°C after an hour pinned in the cold in wet clothes. Removing the wet clothing and insulating him, applying heat to the trunk and warming all IV fluids prevent further cooling during a 3 hour transfer. Cold fluids and repeated exposure increase heat loss. Rubbing the limbs does not rewarm the core and can injure cold tissue. Oral fluids add aspiration risk in a patient who will need surgery.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "paal-hypothermia"
      }
    ],
    sources: [
      {
        id: "boast-ankle",
        citation: "British Orthopaedic Association. BOAST: the management of ankle fractures. 2016.",
        url: "https://www.boa.ac.uk/resource/boast-12-pdf.html"
      },
      {
        id: "naemsp-femur",
        citation: "Lyng JW, Corsa JG, Nawrocki PS, et al. Prehospital trauma compendium: management of suspected femoral shaft fractures. A position statement and resource document of NAEMSP. Prehosp Emerg Care. 2025.",
        url: "https://doi.org/10.1080/10903127.2025.2493846"
      },
      {
        id: "paal-hypothermia",
        citation: "Paal P, Pasquier M, Darocha T, et al. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35010760/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-35",
    topic: "multiple-trauma",
    title: "Three patients from one rollover",
    stem: "You are working in a community hospital emergency department as the only physician on duty, with three nurses and a respiratory therapist. Paramedics arrive at the same time with three patients from one van rollover. A 30-year-old man is talking and has an open fracture of the left forearm with minimal bleeding. A 70-year-old man is alert with right hip pain and a systolic BP of 146 mmHg. A 45-year-old woman is anxious and short of breath. Her breath sounds are absent on the right, and her neck veins are distended. Her vital signs are listed below.",
    vitals: {
      pulse: "134/minute",
      resp: "34/minute",
      bp: "86/58 mmHg",
      o2sat: "84% on a non-rebreather mask",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following patients should you assess and treat first?",
        options: [
          "All three together in one bay",
          "The man with the forearm fracture",
          "The older man with hip pain",
          "The woman who is short of breath",
          "Whoever arrived first by ambulance"
        ],
        correct: 3,
        explanation: "The woman has hypoxia, hypotension, absent breath sounds on the right and distended neck veins, which is a tension pneumothorax and the most immediately lethal problem. The man with an open forearm fracture is talking and barely bleeding, so his airway and circulation are intact for now. The older man is alert with a normal systolic pressure. Treating all three together splits a small team, and arrival order ignores severity.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate intervention for the woman?",
        options: [
          "Chest tube after a CT of the chest",
          "Chest X-ray before any procedure",
          "Intubation and positive pressure first",
          "Needle at the fourth space, anterior axillary line",
          "Needle at the second space, midclavicular line"
        ],
        correct: 3,
        explanation: "Her clinical tension pneumothorax needs immediate decompression without imaging. In adults the fourth or fifth intercostal space at the anterior axillary line has a thinner chest wall than the second space in the midclavicular line, and decompression fails less often there. A chest tube follows decompression. Waiting for an X-ray or CT delays treatment of a clinical diagnosis. Positive pressure ventilation before decompression enlarges the pneumothorax and can cause arrest.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "laan"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to deploy your staff at this moment?",
        options: [
          "All staff stay with the woman first",
          "Assign a nurse to watch each other patient",
          "Call for extra staff once she is stable",
          "Leave the others in the waiting room",
          "Treat all three in strict arrival order"
        ],
        correct: 1,
        explanation: "With one physician and three patients, the leader works on the sickest patient while a named nurse monitors each of the other two and reports any change. This keeps everyone observed and lets you move when priorities change. Help from off-duty staff and nearby physicians should be called at once, not after she stabilizes. Leaving injured patients in a waiting room removes monitoring. Arrival order ignores severity.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "laan",
        citation: "Laan DV, Vu TD, Thiels CA, et al. Chest wall thickness and decompression failure: a systematic review and meta-analysis comparing anatomic locations in needle thoracostomy. Injury. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26724173/"
      },
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-36",
    topic: "multiple-trauma",
    title: "Man on dialysis after a fall",
    stem: "A 64-year-old man is brought to the emergency department by ambulance after he fell about 3 m from a ladder. His wife found him 1 hour later. He has end stage kidney disease on hemodialysis through a left forearm arteriovenous fistula and missed his last session 3 days ago. He takes ASA 81 mg daily. GCS 7 (E1 V2 M4). He has snoring respirations. His right pupil is 6 mm and sluggish, and the left is 3 mm and reactive. A blood gas shows potassium 6.9 mmol/L, and the ECG shows peaked T waves.",
    vitals: {
      temperature: "36.4°C tympanic",
      pulse: "52/minute",
      resp: "10/minute",
      bp: "182/98 mmHg",
      o2sat: "90% on a non-rebreather mask",
      weight: "78 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate neuromuscular blocker for his rapid sequence intubation?",
        options: [
          "cisatracurium 0.2 mg/kg IV",
          "rocuronium 1.2 mg/kg IV",
          "succinylcholine 1.5 mg/kg IV",
          "vecuronium 0.1 mg/kg IV",
          "No paralytic, awake intubation"
        ],
        correct: 1,
        explanation: "Succinylcholine raises serum potassium by about 0.5 mmol/L, which is dangerous with a potassium of 6.9 mmol/L and peaked T waves. Rocuronium at 1.2 mg/kg gives rapid intubating conditions without that risk. Cisatracurium and vecuronium have a slow onset at these doses and are not suited to rapid sequence intubation. An awake intubation is not feasible in a patient with a GCS of 7 and snoring respirations.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following aspects of his trauma care change because of his kidney failure?",
        options: [
          "Crystalloid 30 mL/kg as a bolus",
          "Dialysis once he is stabilized",
          "Fentanyl in preference to morphine",
          "Fistula arm kept free of IVs and cuffs",
          "Platelet transfusion for his ASA",
          "Withhold IV contrast for the trauma CT"
        ],
        select: 3,
        correct: [
          1,
          2,
          3
        ],
        explanation: "His fistula is his lifeline for dialysis, so no IV line or blood pressure cuff goes on that arm. Morphine metabolites accumulate in kidney failure, so fentanyl is preferred. Dialysis is arranged once he is stable, to treat his potassium and volume. A 30 mL/kg crystalloid bolus risks volume overload in a man who has missed dialysis. He is already on dialysis, so contrast should not be withheld when CT is needed. A platelet transfusion is a decision about his ASA and any neurosurgical procedure, not his kidney failure, and routine transfusion for antiplatelet use is not recommended.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "rosen"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best explains his pulse, blood pressure and breathing pattern?",
        options: [
          "Hyperkalemia from missed dialysis",
          "Hypertensive emergency from pain",
          "Raised intracranial pressure",
          "Uremic encephalopathy",
          "Volume overload from missed dialysis"
        ],
        correct: 2,
        explanation: "Bradycardia, hypertension and slow respirations with a GCS of 7 and a dilating right pupil form the Cushing response to raised intracranial pressure and impending herniation. Hyperkalemia can slow the pulse but does not cause hypertension, slow breathing or a unilateral dilated pupil. Volume overload can raise his blood pressure but does not slow the pulse or dilate one pupil. Uremic encephalopathy does not cause a unilateral pupil change. Pain raises the blood pressure but speeds the pulse rather than slowing it.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "btf"
      },
      {
        id: "q4",
        kind: "single",
        update: "He is intubated. After induction his BP falls to 104/66 mmHg.",
        prompt: "Which of the following is the lowest systolic BP that should be maintained for him after intubation?",
        options: [
          "80 mmHg",
          "90 mmHg",
          "100 mmHg",
          "110 mmHg",
          "120 mmHg"
        ],
        correct: 2,
        explanation: "The Brain Trauma Foundation recommends keeping systolic BP at or above 100 mmHg for patients aged 50 to 69 years with severe traumatic brain injury, and he is 64. The higher threshold of 110 mmHg applies to patients aged 15 to 49 years or over 70 years. Thresholds of 80 or 90 mmHg allow hypotension, which worsens outcome after brain injury. A floor of 120 mmHg is above the guideline threshold for his age.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "btf"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th edition. Elsevier. 2023. Chapter 83, Renal Failure.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "btf",
        citation: "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Neurosurgery. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27654000/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-37",
    topic: "multiple-trauma",
    title: "Older pedestrian on an anticoagulant",
    stem: "A 76-year-old man is brought to the emergency department by ambulance after a pickup truck struck him in a crosswalk. He takes dabigatran 150 mg twice daily for atrial fibrillation, last taken 3 hours ago. His recent creatinine clearance was 45 mL/minute. GCS 15. He has pelvic pain, and his pelvis is tender. A pelvic binder is applied. eFAST is negative, and a pelvic X-ray shows fractures of the left sacrum and both pubic rami. After 2 units of red cells, his vital signs are listed below.",
    vitals: {
      temperature: "36.3°C oral",
      pulse: "104/minute",
      resp: "22/minute",
      bp: "96/62 mmHg",
      o2sat: "96% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate agent to reverse his anticoagulant?",
        options: [
          "andexanet alfa IV bolus and infusion",
          "frozen plasma 4 units IV",
          "idarucizumab 5 g IV",
          "protamine sulfate 50 mg IV",
          "vitamin K 10 mg IV"
        ],
        correct: 2,
        explanation: "He took dabigatran 3 hours ago, his kidney function is reduced, and he has a bleeding pelvic fracture, so the specific reversal agent idarucizumab 5 g IV is given. Andexanet alfa reverses factor Xa inhibitors, not a direct thrombin inhibitor. Protamine reverses heparin. Vitamin K reverses warfarin and has no effect on dabigatran. Frozen plasma does not reverse a direct thrombin inhibitor.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "euro-bleeding"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests best shows residual dabigatran effect when a specific drug level is not available?",
        options: [
          "Fibrinogen concentration",
          "Heparin calibrated anti-Xa level",
          "INR and prothrombin time",
          "Platelet function assay",
          "Standard thrombin time"
        ],
        correct: 4,
        explanation: "The thrombin time is very sensitive to dabigatran, so a normal result makes a clinically relevant drug effect unlikely, and a prolonged one confirms that some drug is present. An anti-Xa assay measures factor Xa inhibition and is used for heparins and the Xa inhibitors, not dabigatran. The INR is insensitive to dabigatran and can be normal despite significant drug levels. Fibrinogen and platelet function tests do not measure dabigatran effect.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "euro-bleeding"
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes after idarucizumab his BP is 108/90 mmHg and pulse 118/minute. He has become restless and keeps trying to sit up.",
        prompt: "Which of the following is the most likely interpretation of these changes?",
        options: [
          "Delirium from unfamiliar surroundings",
          "Improving perfusion, as systolic BP rose",
          "Ongoing hemorrhage with compensation",
          "Pain and anxiety from the pelvic fracture",
          "Reaction to the idarucizumab infusion"
        ],
        correct: 2,
        explanation: "His pulse pressure has narrowed from 34 to 18 mmHg and his pulse has risen from 104 to 118/minute, which reflects a falling stroke volume with vasoconstriction as he keeps bleeding. New restlessness suggests reduced cerebral perfusion. A slightly higher systolic pressure does not mean improvement when the pulse pressure narrows. Delirium, pain and anxiety are diagnoses of exclusion after hemorrhage. Idarucizumab is not known to cause this pattern.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "euro-bleeding"
      }
    ],
    sources: [
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-38",
    topic: "multiple-trauma",
    title: "Stab wound to the lower left chest",
    stem: "A 28-year-old man is brought to the emergency department by ambulance 20 minutes after he was stabbed once in the left side of the chest. The wound is at the sixth intercostal space in the anterior axillary line. He is short of breath. He has no medical history. GCS 15. There is no air movement through the wound. Breath sounds are reduced on the left, with dullness to percussion at the left base. The trachea is midline. His abdomen is soft and not tender.",
    vitals: {
      temperature: "36.5°C oral",
      pulse: "124/minute",
      resp: "28/minute",
      bp: "92/60 mmHg",
      o2sat: "92% on a non-rebreather mask",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial intervention for his chest?",
        options: [
          "CT of the chest before any procedure",
          "Diagnostic thoracentesis with a catheter",
          "Left tube thoracostomy",
          "Needle decompression, second space",
          "Three-sided occlusive dressing"
        ],
        correct: 2,
        explanation: "Reduced breath sounds with dullness at the left base after a stab wound indicate a hemothorax, and he is hypoxic and hypotensive, so a left chest tube is inserted to drain the blood, re-expand the lung and measure the blood loss. A needle does not drain blood. A diagnostic thoracentesis cannot evacuate a hemothorax. CT delays treatment in an unstable patient. A three-sided dressing is for an open pneumothorax, and no air moves through his wound.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate site for his chest tube?",
        options: [
          "Directly through the stab wound",
          "Fifth space, midclavicular line",
          "Second space, midclavicular line",
          "Seventh space, posterior axillary line",
          "Triangle of safety, fifth space"
        ],
        correct: 4,
        explanation: "A chest tube goes in the fourth or fifth intercostal space just anterior to the midaxillary line, within the triangle of safety bordered by the pectoralis major, the latissimus dorsi and the level of the nipple. This avoids the heart, the great vessels and the diaphragm. Passing it through the stab wound risks infection and following the tract into the abdomen. The midclavicular sites pass through thick pectoral muscle, the fifth space on the left lies over the heart, and an anterior tube drains a dependent hemothorax poorly. A seventh space posterior site risks placing the tube below the diaphragm.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are accepted indications for urgent thoracotomy after chest tube insertion for hemothorax?",
        options: [
          "Any air leak through the chest tube",
          "Hemoglobin below 100 g/L on arrival",
          "Immediate drainage of 1500 mL or more",
          "Immediate drainage of 500 mL or more",
          "Ongoing drainage over 200 mL/hour for 2 to 4 hours",
          "Ongoing need for blood transfusion",
          "Residual haziness on the chest X-ray",
          "Subcutaneous emphysema at the site"
        ],
        select: 3,
        correct: [
          2,
          4,
          5
        ],
        explanation: "Thoracotomy is indicated when the chest tube drains 1500 mL or more at once, when drainage continues at more than 200 mL/hour for 2 to 4 hours, or when he keeps needing blood transfusion. An initial 500 mL is common and is usually managed with the tube alone. A small air leak and subcutaneous emphysema are expected after a stab wound and chest tube. A single hemoglobin result and residual haziness on X-ray do not by themselves call for thoracotomy.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "The chest tube drains 450 mL of blood and then 40 mL over the next hour. He becomes stable. CT of the chest and abdomen shows no solid organ injury.",
        prompt: "Which of the following injuries is most easily missed with a wound at this location?",
        options: [
          "Cardiac laceration",
          "Descending aorta tear",
          "Esophageal perforation",
          "Left diaphragm laceration",
          "Left kidney laceration"
        ],
        correct: 3,
        explanation: "A wound at the sixth intercostal space in the anterior axillary line lies within the thoracoabdominal zone, because the diaphragm rises as high as the fourth or fifth intercostal space in expiration. Small left diaphragm lacerations are often invisible on CT, and missed defects can cause bowel herniation later, so laparoscopy or thoracoscopy is used to look for them. The heart lies medial to this wound. Aortic and esophageal injuries are uncommon with a lateral stab wound. A kidney laceration would usually be seen on CT.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-39",
    topic: "multiple-trauma",
    title: "Older driver after a long extrication",
    stem: "A 74-year-old woman is brought to the emergency department by ambulance after her car slid into a ditch on a winter night. Extrication took 90 minutes, and she has been on a long spine board for 3 hours in total. She has mild dementia and takes donepezil. She is cold to touch and says her back is sore. GCS 14. She has tenderness over the left lateral chest wall. A log roll finds a 5 cm area of non-blanching redness over the sacrum. CT of the spine shows no fracture. CT of the chest shows four left rib fractures.",
    vitals: {
      temperature: "34.8°C rectal",
      pulse: "88/minute",
      resp: "22/minute",
      bp: "138/82 mmHg",
      o2sat: "93% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate action regarding the long spine board?",
        options: [
          "Keep it on until MRI of the spine",
          "Keep it on until the morning team reviews",
          "Pad it and leave her on it overnight",
          "Remove it now and pad the sacrum",
          "Remove it only if she reports pain"
        ],
        correct: 3,
        explanation: "A long spine board is an extrication device, and 3 hours on it has already caused a pressure injury over the sacrum in a frail older adult. Her CT shows no spinal fracture, so she is moved off the board now and the sacrum is offloaded and protected. Keeping her on the board for a review or an MRI adds pain and tissue injury without benefit. Padding the board does not remove the pressure. Waiting for her to report pain is unreliable in a patient with dementia.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "smr-2018"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her temperature of 34.8°C?",
        options: [
          "Cold fluids to protect the brain",
          "Forced air warming and warmed IV fluids",
          "Hot water bottles against the skin",
          "Rewarm the limbs with warm soaks",
          "Warm her only after the CT is done"
        ],
        correct: 1,
        explanation: "At 34.8°C she has mild hypothermia caused by prolonged exposure during extrication. Active external warming with forced air, warmed IV fluids and insulation is safe and effective. Hot water bottles placed directly on cold skin can cause burns. Wet soaks on the limbs promote evaporative heat loss. Cold fluids worsen hypothermia and have no protective role in trauma. Waiting until imaging is complete lets her keep cooling.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "paal-hypothermia"
      },
      {
        id: "q3",
        kind: "single",
        update: "Four hours later she is more confused. Resp. is 28/minute and SpO2 89% on room air. She is taking shallow breaths and will not cough because of pain.",
        prompt: "Which of the following is the most important measure to prevent further respiratory deterioration?",
        options: [
          "Bed rest lying flat for comfort",
          "Chest binder around the lower ribs",
          "Early regional anesthesia for rib pain",
          "Oral acetaminophen when needed",
          "Restrict fluids and give furosemide"
        ],
        correct: 2,
        explanation: "Older adults with multiple rib fractures have much higher rates of pneumonia and respiratory failure, because pain prevents deep breathing and coughing. Effective analgesia, such as a regional block or epidural, lets her breathe and cough and is the key preventive step, along with oxygen and physiotherapy. Lying flat and a binder restrict ventilation and worsen atelectasis. As-needed oral acetaminophen alone is inadequate for four rib fractures. Furosemide does not treat pain-limited ventilation.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "acs-chest-wall"
      }
    ],
    sources: [
      {
        id: "smr-2018",
        citation: "Fischer PE, Perina DG, Delbridge TR, et al. Spinal motion restriction in the trauma patient: a joint position statement. Prehosp Emerg Care. 2018.",
        url: "https://www.tandfonline.com/doi/full/10.1080/10903127.2018.1481476"
      },
      {
        id: "paal-hypothermia",
        citation: "Paal P, Pasquier M, Darocha T, et al. Accidental hypothermia: 2021 update. Int J Environ Res Public Health. 2022.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35010760/"
      },
      {
        id: "acs-chest-wall",
        citation: "American College of Surgeons Committee on Trauma. ACS Trauma Programs best practices guidelines: management of chest wall injuries. 2025.",
        url: "https://www.facs.org/media/qdgliayt/2025_tr_bestpracticesguidelines_chest-wall.pdf"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-40",
    topic: "multiple-trauma",
    title: "Woman who cannot move after a rollover",
    stem: "A 30-year-old woman is brought to the emergency department by ambulance in spinal motion restriction after a highway rollover. She cannot move her arms or legs. She has no medical history. GCS 15. She can shrug her shoulders but has no other movement in her arms or legs, and sensation is absent below the clavicles. Her skin is warm and dry below the clavicles. Her breathing is mainly abdominal. eFAST shows free fluid in the left upper quadrant.",
    vitals: {
      temperature: "36.0°C oral",
      pulse: "62/minute",
      resp: "26/minute",
      bp: "80/44 mmHg",
      o2sat: "94% on a non-rebreather mask",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate interpretation of her hypotension?",
        options: [
          "Cardiogenic shock from contusion",
          "Hemorrhage until proven otherwise",
          "Isolated neurogenic shock",
          "Spinal shock from cord injury",
          "Vasovagal response to pain"
        ],
        correct: 1,
        explanation: "She has a high cervical cord injury, but eFAST shows free fluid in the left upper quadrant, and sensory loss below the clavicles removes the abdominal pain and tenderness that would otherwise point to it. Hypotension in a trauma patient is treated as hemorrhage until proven otherwise, and neurogenic shock is a diagnosis of exclusion. Spinal shock describes the loss of reflexes and tone below the injury, not low blood pressure. Nothing suggests a cardiac contusion. A vasovagal response does not explain free intraperitoneal fluid.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings favour a neurogenic component to her shock?",
        options: [
          "Anxiety and agitation",
          "Delayed capillary refill in the hands",
          "Free fluid on eFAST",
          "Narrow pulse pressure",
          "Pulse above 120/minute",
          "Relative bradycardia with hypotension",
          "Warm, dry skin below the injury"
        ],
        select: 2,
        correct: [
          5,
          6
        ],
        explanation: "Loss of sympathetic outflow below a cervical cord injury causes vasodilation with warm, dry skin and leaves vagal tone unopposed, so the pulse stays slow despite hypotension. Her pulse of 62/minute with a BP of 80/44 mmHg fits this. Tachycardia, a narrow pulse pressure, delayed capillary refill and agitation are signs of hypovolemia. Free fluid on eFAST points to hemorrhage, which can coexist with neurogenic shock.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "Over the next 30 minutes her respiratory rate rises to 36/minute and her voice becomes quieter. SpO2 is 95% on a non-rebreather mask.",
        prompt: "Which of the following bedside measures best tracks her ventilatory reserve?",
        options: [
          "Chest X-ray every 4 hours",
          "Peak flow measurement hourly",
          "Serial forced vital capacity",
          "SpO2 trend on high-flow oxygen",
          "Venous lactate every hour"
        ],
        correct: 2,
        explanation: "A cervical cord injury weakens the intercostal muscles and can progress to involve the diaphragm as the cord swells. A falling forced vital capacity shows failing respiratory muscles before hypoxemia appears and helps decide on early intubation. SpO2 on high-flow oxygen stays normal until late. Peak flow reflects airway obstruction and effort rather than muscle reserve. A chest X-ray and lactate do not measure respiratory muscle strength.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "Her forced vital capacity has fallen to 11 mL/kg, and the team decides to intubate her.",
        prompt: "Which of the following is the most appropriate technique to protect her cervical spine during intubation?",
        options: [
          "Awake cricothyroidotomy",
          "Blind nasotracheal intubation",
          "Full neck extension for the best view",
          "Keep the collar fully closed throughout",
          "Manual in-line stabilization, collar front open"
        ],
        correct: 4,
        explanation: "Manual in-line stabilization by an assistant holds the head and neck while the front of the collar is opened, which allows mouth opening and laryngoscopy with limited neck movement. A closed collar restricts mouth opening and makes laryngoscopy harder. Full neck extension risks further cord injury. Blind nasal intubation is unreliable in an apneic or tiring patient and has a high failure rate. Cricothyroidotomy is a rescue for failed intubation, not a first choice.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-41",
    topic: "multiple-trauma",
    title: "Older man after a ladder fall",
    stem: "You are working in a community hospital emergency department without neurosurgery. An 83-year-old man is brought to the emergency department by ambulance after he fell about 2 m from a ladder while cleaning his eavestroughs. He takes ASA 81 mg and clopidogrel 75 mg daily since a coronary stent was placed 3 months ago. GCS 14 (confused). He has a large occipital scalp hematoma and left hip pain. CT of the head shows a 6 mm acute subdural hematoma without midline shift. His platelet count is 210 x 10^9/L.",
    vitals: {
      temperature: "36.5°C oral",
      pulse: "84/minute",
      resp: "18/minute",
      bp: "156/88 mmHg",
      o2sat: "96% on room air",
      weight: "76 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to platelet transfusion for him now?",
        options: [
          "Platelets 1 adult dose now",
          "Platelets before any further imaging",
          "Platelets to a count above 150 x 10^9/L",
          "Platelets twice daily for 3 days",
          "No routine platelet transfusion"
        ],
        correct: 4,
        explanation: "Routine platelet transfusion is not recommended for bleeding patients who take antiplatelet drugs, because it has not been shown to improve outcome and exposes the patient to transfusion risks. His platelet count of 210 x 10^9/L is already above the 100 x 10^9/L target used in brain injury. Transfusing a fixed dose, before imaging, to a count of 150 or repeatedly for 3 days all apply a treatment without proven benefit. Decisions about his antiplatelet drugs are made with neurosurgery and cardiology because of his recent stent.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "euro-bleeding"
      },
      {
        id: "q2",
        kind: "single",
        update: "Four hours later he vomits twice and is harder to rouse. GCS 12 (E3 V4 M5). His pupils are equal and reactive.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Antiemetic and reassess in the morning",
          "Increase IV fluids and observe",
          "MRI of the brain tomorrow",
          "Neurological checks every 4 hours",
          "Repeat CT of the head now"
        ],
        correct: 4,
        explanation: "A fall in GCS from 14 to 12 with new vomiting in an older man on two antiplatelet drugs suggests expansion of his subdural hematoma, so the CT is repeated at once. Antiplatelet therapy and older age both raise the risk that a small subdural hematoma grows in the first hours. Treating the vomiting and waiting, or checking every 4 hours, delays detection of a surgical lesion. MRI tomorrow is too late and adds nothing for acute blood. Extra fluid does not treat deterioration from an expanding hematoma.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "The repeat CT shows the subdural hematoma has grown to 12 mm with 7 mm of midline shift. GCS is 11.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Admit for overnight observation",
          "Call the neurosurgical centre for transfer",
          "Complete hip X-rays before transfer",
          "Repeat CT of the head in 2 hours",
          "Wait for family consent to transfer"
        ],
        correct: 1,
        explanation: "An expanding subdural hematoma with midline shift and a falling GCS needs neurosurgery, which this hospital does not have, so the neurosurgical centre is called at once to arrange transfer. Local admission or a further CT delays surgery while he deteriorates. His hip can be imaged at the receiving hospital. Emergency transfer for a time-critical condition does not wait for family agreement, although the family should be informed.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-42",
    topic: "multiple-trauma",
    title: "Young woman under an all-terrain vehicle",
    stem: "An 18-year-old woman is brought to the emergency department by ambulance 40 minutes after the all-terrain vehicle she was driving rolled over onto her. She is pale and confused. GCS 13. Her abdomen is distended and tender. Her pelvis is stable. eFAST shows free fluid in the right and left upper quadrants. The massive hemorrhage protocol is activated, and the trauma surgeon is preparing the operating room. Her blood group is not known.",
    vitals: {
      temperature: "35.8°C tympanic",
      pulse: "140/minute",
      resp: "30/minute",
      bp: "76/40 mmHg",
      o2sat: "95% on a non-rebreather mask",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following blood products are most appropriate for her before her blood group is known?",
        options: [
          "Crossmatched red cells only",
          "Group AB plasma",
          "Group AB red cells",
          "Group O plasma",
          "Group O RhD negative red cells",
          "Group O RhD positive red cells"
        ],
        select: 2,
        correct: [
          1,
          4
        ],
        explanation: "She is a female of child-bearing potential, so uncrossmatched group O RhD negative red cells are used, which in Canada are also Kell negative for women of child-bearing age. This avoids sensitization that could cause hemolytic disease of the fetus in a future pregnancy. Group AB plasma has no anti-A or anti-B antibodies and is safe for any recipient. Group O plasma contains anti-A and anti-B, and group AB red cells carry both antigens, so neither is safe for an unknown recipient. RhD positive red cells are for males and older women. Waiting for crossmatched units is unsafe in shock.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "cbs-mhp"
      },
      {
        id: "q2",
        kind: "single",
        update: "She has received 6 units of red cells and 3 units of plasma. Fibrinogen is 1.2 g/L, INR 1.6 and platelets 118 x 10^9/L.",
        prompt: "Which of the following is the most appropriate treatment for her fibrinogen result?",
        options: [
          "calcium chloride 1 g IV",
          "cryoprecipitate 2 units IV",
          "desmopressin 0.3 mcg/kg IV",
          "fibrinogen concentrate 1 g IV",
          "fibrinogen concentrate 4 g IV"
        ],
        correct: 4,
        explanation: "Her fibrinogen of 1.2 g/L is below the 1.5 g/L target during a massive hemorrhage protocol, so fibrinogen is replaced now. The Canadian consensus protocol uses 4 g of fibrinogen concentrate, which is about the same as 10 units of cryoprecipitate. A 1 g dose or 2 units of cryoprecipitate is too small to raise her level meaningfully. Calcium and desmopressin do not replace fibrinogen.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "on-mhp"
      },
      {
        id: "q3",
        kind: "single",
        update: "Bleeding from a liver laceration is controlled at laparotomy. She recovers in the intensive care unit and is awake the next day.",
        prompt: "Which of the following should she be told about her transfusion?",
        options: [
          "Need for lifelong iron supplements",
          "Need to avoid pregnancy for 5 years",
          "Requirement for monthly CBC testing",
          "Risk of hepatitis C from each unit",
          "Risk of red cell antibodies in pregnancy"
        ],
        correct: 4,
        explanation: "Patients who receive a massive hemorrhage protocol are told about the transfusion and its risks, and women of child-bearing potential are told about red cell alloimmunization, which can cause hemolytic disease of the fetus in a future pregnancy. Antibody screening at about 6 weeks and 6 months is advised. She does not need to avoid pregnancy for a set time, take lifelong iron or have monthly blood counts. The risk of hepatitis C transmission from a unit in Canada is extremely small.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "on-mhp"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following arrangements for communicating with the blood bank is most appropriate?",
        options: [
          "Each nurse who hangs a unit calls",
          "One designated person for all blood bank calls",
          "The surgeon calls once in the operating room",
          "The team leader makes every call",
          "Whoever is free at the time calls"
        ],
        correct: 1,
        explanation: "A single person on the clinical team should be the sole contact with the transfusion laboratory during a massive hemorrhage protocol. This reduces duplicate orders and ensures that critical results reach the leader. Calls from several nurses or whoever is free create confusion and duplicate requests. A team leader who makes every call is pulled away from the resuscitation, and the surgeon is occupied once operating.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "on-mhp"
      }
    ],
    sources: [
      {
        id: "cbs-mhp",
        citation: "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services. 2021.",
        url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion"
      },
      {
        id: "on-mhp",
        citation: "Callum JL, Yeh CH, Petrosoniak A, et al. A regional massive hemorrhage protocol developed through a modified Delphi technique. CMAJ Open. 2019.",
        url: "https://www.cmajopen.ca/content/7/3/E546"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-43",
    topic: "multiple-trauma",
    title: "Motorcyclist arriving by ambulance",
    stem: "A 40-year-old man is brought to the emergency department by ambulance after his motorcycle struck a guardrail at about 80 km/h. As the paramedics wheel him in, team members start to move him to the bed, cut off his clothes and ask the paramedics questions at the same time. A tourniquet applied at the scene 25 minutes ago controls bleeding from an open right femur fracture. He is in a cervical collar. He has a bleeding scalp laceration. He is pale and anxious. GCS 14.",
    vitals: {
      temperature: "36.0°C tympanic",
      pulse: "132/minute",
      resp: "32/minute",
      bp: "80/50 mmHg",
      o2sat: "86% on a non-rebreather mask",
      weight: "88 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to the paramedic handover?",
        options: [
          "Each team member asks questions as needed",
          "Hands-off pause while one medic reports",
          "Move him to the bed during the report",
          "Read the written run sheet later",
          "Take the report once he is settled"
        ],
        correct: 1,
        explanation: "A brief structured handover given while the team pauses and listens, unless an immediate intervention is needed, ensures everyone hears the same information once. Moving the patient and cutting clothes during the report means key details are missed. Questions from several people at once fragment the handover. Taking the report later or relying on a written sheet loses information that the paramedics may not document, and they may leave for another call.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following elements belong in a structured trauma handover such as MIST?",
        options: [
          "Detailed past medical history",
          "Home medication list",
          "Injuries found or suspected",
          "Mechanism of injury",
          "Next of kin contact details",
          "Review of scene photographs",
          "Signs and vital sign trends",
          "Treatment given so far"
        ],
        select: 4,
        correct: [
          2,
          3,
          6,
          7
        ],
        explanation: "MIST stands for mechanism, injuries, signs and treatment, which give the team what it needs in the first seconds. Here that includes the 80 km/h impact, the open femur fracture, his vital signs and the tourniquet time. Past history, medications and family contacts matter and are collected later in the secondary survey. Scene photographs are not part of the verbal handover.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "The paramedic reports absent breath sounds on the left, and you confirm this. The tourniquet still controls the thigh bleeding.",
        prompt: "Which of the following problems should be addressed first in this patient?",
        options: [
          "Antibiotics for the open femur fracture",
          "Assessment of the distal leg pulses",
          "Closure of the scalp laceration",
          "CT of the cervical spine",
          "Decompression of the left chest"
        ],
        correct: 4,
        explanation: "Hypoxia, hypotension and absent left breath sounds point to a tension pneumothorax, which is the most immediately lethal problem now that the tourniquet controls the thigh. The chest is decompressed before other steps. Antibiotics for the open fracture matter but can follow within the hour. Distal pulses are not relevant while the tourniquet is on. A bleeding scalp laceration is controlled with pressure or staples during the survey, and CT waits until he is stable.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "His left chest is decompressed and a chest tube is placed. The scalp laceration is 8 cm long and is bleeding briskly despite a gauze dressing.",
        prompt: "Which of the following best controls the scalp bleeding during his resuscitation?",
        options: [
          "Bulky dressing, repair after CT",
          "Leave it for the plastic surgeon",
          "Rapid closure with staples",
          "Silver nitrate to the wound edges",
          "Topical tranexamic acid soak alone"
        ],
        correct: 2,
        explanation: "The scalp is highly vascular and a long laceration can cause significant blood loss in a patient who is already in shock, so it is closed quickly with staples or a running suture as part of hemorrhage control. A dressing that is already soaked will not stop brisk bleeding while he goes to CT. Waiting for a plastic surgeon allows ongoing loss. Silver nitrate and a topical tranexamic acid soak cannot control bleeding from the scalp vessels of a long laceration.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor: optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-44",
    topic: "multiple-trauma",
    title: "Worker trapped under a fallen wall",
    stem: "A 38-year-old man is brought to the emergency department by ambulance after a concrete wall collapsed on both of his legs at a construction site. He was trapped for 4 hours, and firefighters freed him 30 minutes ago. He has no medical history. GCS 15. Both thighs and calves are swollen and tense. His urinary catheter drains dark brown urine. X-rays of both legs show no fracture. He has no other injuries.",
    vitals: {
      temperature: "36.2°C oral",
      pulse: "118/minute",
      resp: "24/minute",
      bp: "102/64 mmHg",
      o2sat: "96% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following complications poses the most immediate threat to his life now?",
        options: [
          "Acute kidney injury",
          "Compartment syndrome",
          "Fat embolism syndrome",
          "Hyperkalemic arrhythmia",
          "Hypocalcemic tetany"
        ],
        correct: 3,
        explanation: "When crushed muscle is released after hours of compression, potassium can enter the circulation quickly. Severe hyperkalemia is uncommon after crush injury, but when it occurs it can cause arrhythmia and cardiac arrest within minutes. Of these options it is the only one that can kill him in minutes, so it is looked for first with an ECG and a blood gas. Acute kidney injury and compartment syndrome are serious but develop over hours. Hypocalcemia is common but tetany is rarely the immediate threat. Fat embolism is linked to long bone fractures, and his leg X-rays show none.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "fphc-crush"
      },
      {
        id: "q2",
        kind: "menu",
        update: "A blood gas shows potassium 6.8 mmol/L. The ECG shows peaked T waves and a widened QRS.",
        prompt: "Which of the following treatments are appropriate for his potassium at this point?",
        options: [
          "amiodarone 150 mg IV",
          "calcium chloride 1 g IV",
          "furosemide 80 mg IV",
          "insulin 10 units IV with dextrose 25 g",
          "magnesium sulfate 2 g IV",
          "salbutamol 10 mg nebulized",
          "sodium polystyrene sulfonate 30 g PO"
        ],
        select: 3,
        correct: [
          1,
          3,
          5
        ],
        explanation: "Peaked T waves and a wide QRS need calcium at once to stabilize the myocardium. Insulin with dextrose and nebulized salbutamol then shift potassium into cells within minutes. Furosemide is inappropriate in a patient who needs volume to protect his kidneys. Sodium polystyrene sulfonate acts too slowly to help in the next few minutes. Amiodarone and magnesium do not treat hyperkalemia.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "erc-special-2025"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following fluid strategies is most appropriate for him?",
        options: [
          "Dextrose 5% in water at 100 mL/hour",
          "Furosemide before any fluid",
          "Generous isotonic saline, high urine output",
          "Permissive hypotension, minimal fluid",
          "Wait for the CK before starting fluid"
        ],
        correct: 2,
        explanation: "Myoglobin released from crushed muscle can cause acute kidney injury, so early generous isotonic saline, about 1 to 1.5 L/hour in an adult at first, is given to maintain a high urine output. His dark brown urine suggests myoglobinuria is already present. He is not bleeding, so permissive hypotension does not apply. Hypotonic dextrose does not expand the circulation. Furosemide before volume worsens hypovolemia. Waiting for the CK result delays treatment that is clearly indicated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "crush-isn"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings is the earliest reliable sign of compartment syndrome in his legs?",
        options: [
          "Absent dorsalis pedis pulses",
          "Numbness only after 6 hours",
          "Pain on passive stretch of the toes",
          "Pale and cool feet",
          "Paralysis of the toes"
        ],
        correct: 2,
        explanation: "Pain out of proportion to the injury and pain on passive stretch of the muscles in the compartment are the earliest reliable signs of compartment syndrome in an awake patient. Compartment pressure rarely exceeds arterial pressure, so pulses and colour are usually preserved until very late. Paralysis is a late sign of established muscle and nerve damage. Numbness can occur early and has no fixed 6 hour delay.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "boast-cs"
      }
    ],
    sources: [
      {
        id: "fphc-crush",
        citation: "Wood F, Cowburn P, Smith J, et al. Early management of crush injury and crush syndrome: a Faculty of Pre-Hospital Care consensus statement. Emerg Med J. 2026.",
        url: "https://doi.org/10.1136/emermed-2025-215431"
      },
      {
        id: "erc-special-2025",
        citation: "Lott C, Karageorgos V, Abelairas-Gomez C, et al. European Resuscitation Council Guidelines 2025: special circumstances in resuscitation. Resuscitation. 2025.",
        url: "https://doi.org/10.1016/j.resuscitation.2025.110753"
      },
      {
        id: "boast-cs",
        citation: "British Orthopaedic Association. BOAST: diagnosis and management of compartment syndrome of the extremities. 2014, updated 2025.",
        url: "https://www.boa.ac.uk/resource/boast-10-pdf.html"
      },
      {
        id: "crush-isn",
        citation: "Sever MS, Vanholder R. Recommendation for the management of crush victims in mass disasters. Renal Disaster Relief Task Force of the International Society of Nephrology. Nephrol Dial Transplant. 2012.",
        url: "https://pubmed.ncbi.nlm.nih.gov/22467763/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-45",
    topic: "multiple-trauma",
    title: "Older man with a stiff spine after a fall",
    stem: "A 71-year-old man is brought to the emergency department by ambulance after he slipped on ice and fell backward, striking the back of his head. He has neck pain. He has long-standing ankylosing spondylitis with a fixed forward curve of his neck and takes naproxen. GCS 15. Paramedics could not fit a collar because of his posture, and he is supported on pillows. He has midline tenderness at the base of his neck. Motor and sensory examination of his arms and legs is normal.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "82/minute",
      resp: "16/minute",
      bp: "148/84 mmHg",
      o2sat: "96% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to restrict motion of his cervical spine?",
        options: [
          "Rigid collar in neutral alignment",
          "Sandbags and tape with neck extended",
          "Soft collar for comfort only",
          "Support in his usual flexed position",
          "No immobilization, as he is intact"
        ],
        correct: 3,
        explanation: "His neck is fused in flexion by ankylosing spondylitis, so forcing it into neutral alignment with a rigid collar or flat board can displace a fracture through the fused spine and injure the cord. His spine is supported in his usual position with pillows or blanket rolls. Extending the neck with sandbags is dangerous for the same reason. A soft collar does not restrict motion. An intact neurological examination does not exclude an unstable fracture, so he still needs motion restriction.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "rosen"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following imaging studies is most appropriate for his neck?",
        options: [
          "CT of the whole spine",
          "Flexion and extension X-rays",
          "MRI in 2 weeks if still sore",
          "Plain X-rays of the neck only",
          "No imaging, as the rule is negative"
        ],
        correct: 0,
        explanation: "Patients with known vertebral disease such as ankylosing spondylitis were excluded from the Canadian C-spine rule, and he is also over 65, which is a high-risk factor, so imaging is required. The fused spine fractures easily and often at more than one level, so CT of the whole spine is used. Plain X-rays miss fractures in osteopenic, fused bone. Flexion and extension views are dangerous in a possibly unstable spine. Waiting 2 weeks for MRI misses an acute unstable injury.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "ccr"
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows a fracture through the fused C6 to C7 segment without displacement. Three hours later he reports new weakness and tingling in both hands.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Discharge with a soft collar",
          "Nerve conduction studies",
          "Physiotherapy assessment",
          "Repeat CT of the neck in 24 hours",
          "Urgent MRI of the cervical spine"
        ],
        correct: 4,
        explanation: "New bilateral hand weakness after a fracture through a fused spine suggests cord compression, most often from an epidural hematoma or displacement, which is common in ankylosing spondylitis. Urgent MRI shows the hematoma and the cord, and spine surgery is contacted at once. A repeat CT in 24 hours delays decompression. Nerve conduction studies and physiotherapy do not assess the cord. Discharge would be dangerous.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "rosen",
        citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th edition. Elsevier. 2023. Chapter 35, Spinal Trauma.",
        url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html"
      },
      {
        id: "ccr",
        citation: "Stiell IG, Wells GA, Vandemheen KL, et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA. 2001.",
        url: "https://pubmed.ncbi.nlm.nih.gov/11597285/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-46",
    topic: "multiple-trauma",
    title: "Scooter rider who becomes drowsy",
    stem: "You are working in a community hospital emergency department without neurosurgery. A 24-year-old man was brought to the emergency department by ambulance 1 hour ago after a car knocked him off an electric scooter and he struck the left side of his head. He was briefly unconscious at the scene, then alert with a GCS of 15 at triage. He has no medical history. He now has a severe headache, has vomited three times and is drowsy. GCS 11 (E3 V3 M5). His left pupil is 5 mm and sluggish, and the right is 3 mm and reactive. Capillary glucose is 5.9 mmol/L.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "64/minute",
      resp: "14/minute",
      bp: "158/88 mmHg",
      o2sat: "97% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his deterioration?",
        options: [
          "Diffuse axonal injury",
          "Epidural hematoma",
          "Hypoglycemia from missed meals",
          "Post-concussive drowsiness",
          "Traumatic subarachnoid hemorrhage"
        ],
        correct: 1,
        explanation: "A brief loss of consciousness followed by a lucid interval and then a falling GCS with a dilating pupil on the side of the impact is the classic course of an epidural hematoma from a torn middle meningeal artery. Diffuse axonal injury causes coma from the time of injury, without a lucid interval. His glucose is 5.9 mmol/L, which excludes hypoglycemia. Post-concussive drowsiness does not cause a unilateral dilated pupil. Traumatic subarachnoid hemorrhage rarely causes this rapid focal decline.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows a 2 cm left temporal epidural hematoma with midline shift. The neurosurgical centre accepts him, and a helicopter will arrive in 20 minutes.",
        prompt: "Which of the following is the most appropriate step before his transfer?",
        options: [
          "Admit to the local ICU overnight",
          "Complete facial bone imaging first",
          "Intubate with end-tidal CO2 monitoring",
          "Repeat CT before he leaves",
          "Wait for GCS to improve before transfer"
        ],
        correct: 2,
        explanation: "His GCS is falling with a dilating pupil, so his airway is secured before a helicopter transfer, with end-tidal CO2 monitoring to keep ventilation normal. Intubating in flight is far harder than in the department. Local admission and waiting for improvement delay the surgery he needs. A repeat CT or facial imaging adds nothing that changes the plan and delays transfer.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "After intubation his BP falls to 102/60 mmHg and his pulse is 58/minute.",
        prompt: "Which of the following is the lowest systolic BP that should be maintained for him during transfer?",
        options: [
          "80 mmHg",
          "90 mmHg",
          "100 mmHg",
          "110 mmHg",
          "No target until surgery"
        ],
        correct: 3,
        explanation: "The Brain Trauma Foundation recommends keeping systolic BP at or above 110 mmHg for patients aged 15 to 49 years with severe traumatic brain injury, and he is 24. Hypotension after brain injury reduces cerebral perfusion and worsens outcome, so his current 102 mmHg needs treatment. The threshold of 100 mmHg applies to patients aged 50 to 69 years. Thresholds of 80 or 90 mmHg allow harmful hypotension. Leaving blood pressure without a target during transfer risks secondary brain injury.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "btf"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "btf",
        citation: "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Neurosurgery. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27654000/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  },
  {
    id: "multiple-trauma-47",
    topic: "multiple-trauma",
    title: "Driver in a high-speed frontal crash",
    stem: "A 45-year-old man is brought to the emergency department by ambulance after his car struck a bridge support at highway speed. He was unrestrained, and the steering wheel is bent. He has chest pain and left upper abdominal pain. He has no medical history. GCS 15. He has bruising over the left upper chest and tenderness in the left upper quadrant. A chest X-ray shows a widened mediastinum, a left apical cap, and fractures of the left first rib and scapula.",
    vitals: {
      temperature: "36.4°C oral",
      pulse: "112/minute",
      resp: "24/minute",
      bp: "104/66 mmHg",
      o2sat: "95% on room air",
      weight: "86 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following injuries must be excluded given his chest X-ray findings?",
        options: [
          "Blunt thoracic aortic injury",
          "Cardiac tamponade",
          "Diaphragmatic rupture",
          "Esophageal perforation",
          "Tracheobronchial rupture"
        ],
        correct: 0,
        explanation: "A widened mediastinum and a left apical cap after a high-speed deceleration injury, with first rib and scapular fractures that show great force, point to blunt thoracic aortic injury. It is easily missed because many patients have few specific symptoms. Tamponade causes hypotension with distended neck veins, and an acute hemopericardium does not produce an apical cap. Diaphragmatic, esophageal and tracheobronchial injuries do not explain this X-ray pattern.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "east-aorta"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate to confirm or exclude this injury?",
        options: [
          "Aortography in the angiography suite",
          "Bedside transthoracic echocardiogram",
          "Chest X-ray repeated upright",
          "CT angiography of the chest",
          "MRI of the chest and aorta"
        ],
        correct: 3,
        explanation: "CT angiography of the chest is the recommended test for blunt aortic injury because it is fast, widely available and highly accurate, and it also shows other chest injuries. Catheter aortography is invasive and is kept for treatment or unclear CT. Transthoracic echocardiography cannot see the aortic isthmus well. A repeat X-ray cannot exclude the injury. MRI is too slow for an acute trauma patient.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "east-aorta"
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows a pseudoaneurysm at the aortic isthmus and a splenic laceration with active contrast extravasation. His BP is now 88/50 mmHg.",
        prompt: "Which of the following should be prioritized for this patient?",
        options: [
          "Beta blocker infusion to lower heart rate",
          "Endovascular aortic repair first",
          "Observation of both injuries",
          "Open aortic repair first",
          "Splenic hemorrhage control first"
        ],
        correct: 4,
        explanation: "He is hypotensive from active splenic bleeding, which is the immediate threat to life, while a contained aortic pseudoaneurysm can usually wait for repair once he is stable. Hemorrhage control comes first. A beta blocker would worsen shock in a hypotensive patient and is only used once bleeding is controlled. Repairing the aorta first, by either route, delays control of the bleeding that is killing him. Observation is unsafe with active extravasation and shock.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "After splenectomy his BP is 148/86 mmHg and pulse 110/minute. Repair of the aorta is planned for the next morning.",
        prompt: "Which of the following is the most appropriate treatment for his blood pressure and pulse while he waits?",
        options: [
          "esmolol infusion titrated to effect",
          "hydralazine 10 mg IV bolus alone",
          "nitroglycerin infusion alone",
          "norepinephrine to MAP above 90",
          "No treatment until the repair"
        ],
        correct: 0,
        explanation: "With bleeding controlled, a short-acting beta blocker such as esmolol lowers both heart rate and blood pressure, which reduces shear stress on the injured aortic wall until repair. A vasodilator such as hydralazine or nitroglycerin given alone causes reflex tachycardia and increases wall stress. Norepinephrine raises pressure on the injured wall. Leaving the pressure and pulse untreated raises the risk of free rupture before repair.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "atls"
      }
    ],
    sources: [
      {
        id: "east-aorta",
        citation: "Fox N, Schwartz D, Salazar JH, et al. Evaluation and management of blunt traumatic aortic injury: a practice management guideline from the Eastern Association for the Surgery of Trauma. J Trauma Acute Care Surg. 2015.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25539215/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Draft for review by Arjan Dhoot, MD",
    version: 1
  }
];
