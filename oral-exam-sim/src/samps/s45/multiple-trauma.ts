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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-18",
    topic: "multiple-trauma",
    title: "Cyclist found hours after a crash",
    stem: "A 47-year-old man is brought to the emergency department by air ambulance after an e-bike crash on a rural road. He was not wearing a helmet. His smartwatch logged a hard fall at 21:05. A passing driver found him in a ditch at 23:40. Critical care paramedics intubated him at the scene because blood was filling his airway, and they splinted his deformed left thigh. His GCS before intubation was 12. He arrived at 00:20. His wife reports by phone that he takes no medications. Blood runs from both nostrils and around the endotracheal tube. His maxilla moves when the upper teeth are grasped.",
    vitals: {
      temperature: "35.6°C tympanic",
      pulse: "132/minute",
      resp: "16/minute",
      bp: "84/50 mmHg",
      o2sat: "95% on a ventilator with FiO2 1.0",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Two suction catheters do not keep up with the bleeding from his nose and mouth.",
        prompt: "Which of the following is the most appropriate next step to control the bleeding from his nose and mouth?",
        options: [
          "Angiography with embolization first",
          "Anterior and posterior nasal tamponade",
          "Anterior nasal gauze packing only",
          "Electrocautery of the bleeding points",
          "Ligation of the external carotid artery"
        ],
        correct: 1,
        explanation: "Brisk bleeding from both nostrils and around the tube, with a mobile maxilla, is bleeding from a midface fracture. Once the airway is secure, anterior nasal packing together with posterior balloon tamponade is the first step. The two press on the anterior and the posterior nasal plexus. Anterior packing alone leaves the posterior source without pressure. Angiography with embolization is kept for bleeding that persists after packing. Embolization has largely replaced surgical ligation of the external carotid artery. Cautery needs a single visible bleeding point, which diffuse bleeding from both nostrils does not offer.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "wu-maxfac"
      },
      {
        id: "q2",
        kind: "single",
        update: "His initial hemoglobin is 136 g/L. His blood pressure and pulse are unchanged.",
        prompt: "Which of the following is the most appropriate approach to red cell transfusion for him at this point?",
        options: [
          "Crystalloid 2 L IV, then reassess",
          "Repeat the hemoglobin in 1 hour first",
          "Transfuse if hemoglobin falls below 70 g/L",
          "Transfuse only after a full crossmatch",
          "Uncrossmatched red cells now"
        ],
        correct: 4,
        explanation: "He has a blood pressure of 84/50 mmHg and a pulse of 132/minute after hours of bleeding, so he needs red cells now. An early hemoglobin in the normal range can mask bleeding, because the value falls only as fluid moves into the vessels or is given. Waiting to repeat the hemoglobin, or for it to fall below 70 g/L, delays blood for a patient already in shock. A 2 L crystalloid load adds to hemodilution and carries no oxygen. A full crossmatch takes time he does not have, so uncrossmatched units come first.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q3",
        kind: "single",
        update: "It is now 00:25, 3 hours and 20 minutes after the fall. No tranexamic acid has been given.",
        prompt: "Which of the following is the most appropriate tranexamic acid order for him at this time?",
        options: [
          "tranexamic acid 1 g IV over 10 minutes",
          "tranexamic acid 2 g IV over 10 minutes",
          "tranexamic acid 1 g IV plus 1 g infusion",
          "tranexamic acid 15 mg/kg IV over 10 minutes",
          "No tranexamic acid"
        ],
        correct: 4,
        explanation: "The smartwatch dates the injury to 21:05, so at 00:25 he is 3 hours and 20 minutes from injury. Tranexamic acid reduced death from bleeding when it was started within 3 hours. In the CRASH-2 analysis, treatment started after 3 hours raised the risk of death from bleeding, with a relative risk of 1.44. So none is given now. The 1 g load with a 1 g infusion over 8 hours is the regimen for patients inside the 3 hour window. A 2 g bolus or a 15 mg/kg dose changes the amount but not the timing problem.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "crash2-timing"
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        update: "CT of the head shows a small right frontal contusion. Blood pressure is 104/66 mmHg. Slow oozing continues from the nose. Hemoglobin is 94 g/L, prothrombin time 1.8 times normal (INR 1.9), fibrinogen 1.8 g/L and platelets 84 x 10^9/L.",
        prompt: "Which of the following blood products or drugs are most appropriate for him based on these results?",
        options: [
          "Cryoprecipitate",
          "Desmopressin",
          "Fibrinogen concentrate",
          "Frozen plasma",
          "Platelets",
          "Recombinant factor VIIa",
          "Red cells",
          "Vitamin K"
        ],
        correct: [3, 4],
        explanation: "He has a brain contusion and ongoing bleeding. A platelet count of 84 x 10^9/L is below the 100 x 10^9/L advised when there is brain injury, so platelets are given. A prothrombin time 1.8 times normal is above the 1.5 times threshold for more plasma. Fibrinogen of 1.8 g/L is above the 1.5 g/L trigger, so cryoprecipitate and fibrinogen concentrate are not needed. A hemoglobin of 94 g/L is above the 70 to 90 g/L target. Recombinant factor VIIa is not a first-line treatment. He takes no anticoagulant, so vitamin K has no role. Desmopressin has been proposed only to reverse antiplatelet drugs, and he takes none.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q5",
        kind: "single",
        update: "His wife arrives and asks to stay at his side during the resuscitation. She is tearful but calm. The department has a family presence policy.",
        prompt: "Which of the following is the most appropriate response to her request from you as the team leader?",
        options: [
          "Ask her to wait in the family room",
          "Brief her yourself at the bedside now",
          "Have security escort her from the area",
          "Invite her in with a staff chaperone",
          "Let her stand at the head of the bed"
        ],
        correct: 3,
        explanation: "The department has a family presence policy and she is calm, so she can be offered a place in the room. A Canadian position paper found that offering family presence does not change patient outcomes, and family psychological outcomes are neutral or better. It advises that an experienced chaperone accompany and support the family member. Standing alone at the head of the bed puts her in the airway team's space without support. Briefing her yourself takes the leader away from the resuscitation. Sending her to the family room, or out with security, excludes her against the policy.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "ccs-fpdr"
      }
    ],
    sources: [
      {
        id: "wu-maxfac",
        citation: "Wu FC, Hung KS, Lin YW, et al. Effectiveness of protocolized management for patients sustaining maxillofacial fracture with massive oronasal bleeding: a single-center experience. Scand J Trauma Resusc Emerg Med. 2022.",
        url: "https://doi.org/10.1186/s13049-022-01047-9"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      },
      {
        id: "crash2-timing",
        citation: "CRASH-2 collaborators, Roberts I, Shakur H, et al. The importance of early treatment with tranexamic acid in bleeding trauma patients: an exploratory analysis of the CRASH-2 randomised controlled trial. Lancet. 2011.",
        url: "https://doi.org/10.1016/S0140-6736(11)60278-X"
      },
      {
        id: "ccs-fpdr",
        citation: "Oczkowski SJ, Mazzetti I, Cupido C, Fox-Robichaud AE. Family presence during resuscitation: a Canadian Critical Care Society position paper. Can Respir J. 2015.",
        url: "https://doi.org/10.1155/2015/532721"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-21",
    topic: "multiple-trauma",
    title: "Worker fallen onto steel bar",
    stem: "A 36-year-old man is brought to the emergency department by ambulance 40 minutes after he fell about 3 m at a construction site onto a vertical steel reinforcing bar. The bar entered the right lower abdomen and exits through the right flank. Firefighters cut it at the scene, leaving about 25 cm protruding in front and 15 cm behind. He is healthy and takes no medications. GCS 15. His airway is clear and breath sounds are equal. The bar is fixed and not bleeding externally. The abdomen is tender around the entry site. Pulses are present in both legs.",
    vitals: {
      temperature: "36.3°C tympanic",
      pulse: "102/minute",
      resp: "22/minute",
      bp: "128/84 mmHg",
      o2sat: "98% on room air",
      weight: "84 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Fifteen minutes later he is anxious and his hands are cool. His pulse is 118/minute and his BP is 116/98 mmHg.",
        prompt: "Which of the following findings best signals that he is losing blood?",
        options: [
          "Anxiety about the steel bar",
          "O2 saturation of 98%",
          "Pulse pressure narrowed to 18 mmHg",
          "Respiratory rate of 22/minute",
          "Systolic BP still above 110 mmHg"
        ],
        correct: 2,
        explanation: "His pulse pressure has narrowed from 44 mmHg to 18 mmHg while his pulse has risen. ATLS describes a narrowing pulse pressure with tachycardia and anxiety as signs of early hemorrhage, before the systolic BP falls. A systolic BP above 110 mmHg is falsely reassuring, because compensation holds it up until a large volume is lost. Anxiety alone could be fear, but here it travels with cool hands and tachycardia. His O2 saturation and respiratory rate are unchanged and do not track blood loss.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of the steel bar in the emergency department?",
        options: [
          "Cut the bar flush with the skin",
          "Pull the bar out along its track",
          "Remove it under ultrasound guidance",
          "Rotate the bar to test if it is loose",
          "Stabilize it in place with bulky dressings"
        ],
        correct: 4,
        explanation: "An impaled object may be compressing injured vessels, so ATLS teaches that it is left in place and removed only in the operating room, where bleeding can be controlled under direct vision. Bulky dressings stop it moving and tearing tissue during transfer and imaging. Pulling it out, with or without ultrasound, can release uncontrolled hemorrhage. Rotating it to test mobility causes further injury. Cutting it flush in the department adds heat and vibration and leaves nothing to grasp in surgery.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 units of red cells his BP is 84/50 mmHg and his pulse is 128/minute. eFAST shows free fluid in the right upper quadrant.",
        prompt: "Which of the following is the most appropriate next step for him?",
        options: [
          "Angioembolization of the right kidney",
          "CT of the abdomen to map the bar's path",
          "Immediate laparotomy",
          "Observation while blood is transfused",
          "Removal of the bar, then reassessment"
        ],
        correct: 2,
        explanation: "He has penetrating abdominal injury with hypotension despite blood and free intraperitoneal fluid, so he needs laparotomy now, with the bar removed in the operating room under direct vision. ATLS lists hemodynamic instability after penetrating abdominal trauma as an indication for immediate laparotomy. CT would take an unstable patient away from the resuscitation room and delay control of bleeding. Angioembolization treats selected solid organ bleeding in patients who are responding. Continued transfusion alone does not stop surgical bleeding, and removing the bar in the department risks exsanguination.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following injuries along this path is eFAST least able to detect?",
        options: [
          "Blood in the hepatorenal space",
          "Blood in the pericardium",
          "Blood in the right pleural space",
          "Retroperitoneal colon or ureter injury",
          "Right-sided pneumothorax"
        ],
        correct: 3,
        explanation: "The bar passed from the right lower abdomen to the flank, through the retroperitoneum where the ascending colon, right ureter and kidney lie. ATLS notes that FAST is insensitive for retroperitoneal and hollow viscus injuries, so they are easily missed unless the surgeon explores them. eFAST is designed to show blood in the hepatorenal space, the pericardium and the pleural spaces, and to detect a pneumothorax, so those views are its strengths.",
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
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-25",
    topic: "multiple-trauma",
    title: "Rider thrown onto a fence",
    stem: "A 31-year-old man is brought to the emergency department by ambulance after he was thrown from an all-terrain vehicle onto a broken wooden fence. He is anxious and short of breath. GCS 15. His airway is clear. There is a 4 cm hole in the left lateral chest wall at the level of the nipple, and air bubbles in and out of it with each breath. Breath sounds are reduced on the left, and the trachea is midline. A scalp laceration oozes slowly. His right ankle is swollen and deformed, with a normal foot pulse. The pelvis is stable.",
    vitals: {
      temperature: "36.5°C tympanic",
      pulse: "116/minute",
      resp: "30/minute",
      bp: "124/78 mmHg",
      o2sat: "88% on 15 L/minute by non-rebreather mask",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following injuries should be treated first in this patient?",
        options: [
          "Deformed right ankle",
          "Left chest wall wound",
          "Possible cervical spine injury",
          "Possible head injury",
          "Slowly oozing scalp laceration"
        ],
        correct: 1,
        explanation: "Air moving through the chest wall hole is an open pneumothorax, a breathing problem that is already causing hypoxemia with an O2 saturation of 88% on high flow oxygen. In the primary survey it comes before circulation and disability problems. The scalp wound oozes slowly and can be controlled with pressure. The ankle has a pulse and waits for the secondary survey. His GCS is 15, so a head injury is not the immediate threat, and spinal motion restriction continues while the chest is treated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        update: "Eleven people are now in the trauma bay. Two nurses and a student are talking over each other, and you cannot hear the respiratory therapist.",
        prompt: "Which of the following is the most appropriate action for you as team leader now?",
        options: [
          "Ask people without a role to leave the bay",
          "Keep everyone in case extra hands are needed",
          "Move the patient to a larger room",
          "Raise your voice over the others",
          "Wait until the noise settles"
        ],
        correct: 0,
        explanation: "Crowding and noise break communication and add errors, and Hicks and Petrosoniak describe managing the environment as part of team performance. Sending away people without a role quiets the room so that orders and responses can be heard. Keeping everyone adds noise without adding useful work. Shouting over others adds to the noise. Moving a hypoxemic patient delays care. Waiting lets the confusion continue while he deteriorates.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "hicks"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment for his chest wound?",
        options: [
          "Close the wound with sutures",
          "Needle through the wound into the chest",
          "Occlusive dressing sealed on all sides",
          "Pack the wound with gauze",
          "Vented chest seal over the wound"
        ],
        correct: 4,
        explanation: "ATLS treats an open pneumothorax with a dressing that lets air out but not in, followed promptly by a chest tube placed away from the wound. A dressing sealed on all sides, sutures or packing can trap air and convert the wound into a tension pneumothorax. A needle through the wound does not seal the defect and adds injury. The chest tube re-expands the lung and allows later closure of the wound.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        update: "The senior resident is skilled in chest tube insertion. A nurse is ready to take blood and give analgesia.",
        prompt: "Which of the following is the most appropriate plan for the chest tube?",
        options: [
          "Delay it until you finish the full survey",
          "Insert it yourself and pause other tasks",
          "Insert it yourself while the resident leads",
          "Resident inserts it while you keep oversight",
          "Wait for the surgeon to insert it"
        ],
        correct: 3,
        explanation: "A team leader who steps back from procedures keeps the overall picture, watches the vital signs and directs parallel tasks. Hicks and Petrosoniak describe this hands-off role as central to trauma team performance. The skilled resident can place the tube while you keep oversight and the nurse draws blood and gives analgesia. Doing it yourself stops the leadership of the resuscitation. Waiting for the surgeon or for the full survey delays treatment of his hypoxemia.",
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
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-27",
    topic: "multiple-trauma",
    title: "Fall from a hayloft",
    stem: "A 61-year-old woman is brought to the emergency department by ambulance after she fell about 4 m from a hayloft onto a wooden gate, landing on her left chest. She has hypertension treated with amlodipine. GCS 15. She is in severe pain and takes shallow breaths. A segment of the left lateral chest wall moves inward when she breathes in, with crepitus over it. Breath sounds are present on both sides. The abdomen is soft. She has received acetaminophen and ketamine 20 mg IV. The chest X-ray shows fractures of left ribs 4 to 8, each in two places, and patchy opacity in the left lung without pneumothorax. A blood gas shows a PaCO2 of 40 mmHg.",
    vitals: {
      temperature: "36.4°C tympanic",
      pulse: "108/minute",
      resp: "30/minute",
      bp: "142/84 mmHg",
      o2sat: "92% on 15 L/minute by non-rebreather mask",
      weight: "78 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Over the next hour she becomes drowsy but rousable. Her respiratory rate is 36/minute. A repeat blood gas shows a PaCO2 of 62 mmHg.",
        prompt: "Which of the following findings best shows that she is developing respiratory failure?",
        options: [
          "Crepitus over the left chest wall",
          "Opacity in the left lung on X-ray",
          "PaCO2 risen from 40 to 62 mmHg",
          "Pain on deep breathing",
          "Pulse of 108/minute"
        ],
        correct: 2,
        explanation: "A rising PaCO2 with new drowsiness shows that her ventilation is failing, as pain, the flail segment and the lung contusion tire her. The EAST guideline reserves mechanical ventilation for respiratory failure, so recognizing it early matters. Crepitus and the lung opacity were present on arrival and describe the injury, not a change. Pain on breathing and a pulse of 108/minute are expected with her injuries and do not by themselves show that ventilation is failing.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "east-flail"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate intervention for her breathing now?",
        options: [
          "Epidural catheter for analgesia",
          "Rapid sequence intubation",
          "Strapping of the flail segment",
          "Surgical fixation of the ribs today",
          "Trial of CPAP by face mask"
        ],
        correct: 1,
        explanation: "She is drowsy with hypercapnia, so she has respiratory failure and needs intubation and ventilation with PEEP. The EAST guideline suggests a trial of mask CPAP only in alert patients with marginal respiratory status, and she is no longer alert. An epidural is the preferred analgesia for severe flail chest, but it will not rescue failing ventilation now. Strapping the chest restricts breathing further. Surgical fixation may be considered later for those who cannot be weaned from the ventilator.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "east-flail"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following tasks is most important to assign to a team member at this point?",
        options: [
          "Nurse to call her family to the bedside",
          "Nurse to draw a repeat blood gas first",
          "Physician ready to decompress the left chest",
          "Recorder to phone radiology for a CT slot",
          "RT to set up for a trial of CPAP"
        ],
        correct: 2,
        explanation: "Positive pressure ventilation can turn a small pneumothorax from her rib fractures into a tension pneumothorax, so a named team member should stand ready with equipment to decompress the left chest if her airway pressures or BP change after intubation. Assigning this task now lets it run in parallel with airway management. Another blood gas adds nothing to the one that already shows failure. Calling family and booking CT can wait. A CPAP trial is not appropriate for a drowsy patient.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 7
        },
        source: "atls"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following fluid strategies is most appropriate for her lung injury?",
        options: [
          "Crystalloid 2 L bolus for every patient",
          "Furosemide to keep the lungs dry",
          "Methylprednisolone for the contusion",
          "Restrict all IV fluids",
          "Target perfusion, avoiding excess crystalloid"
        ],
        correct: 4,
        explanation: "The EAST guideline advises that patients with pulmonary contusion and flail chest should not be excessively fluid restricted, but should be resuscitated to signs of adequate tissue perfusion. Excess crystalloid worsens the contusion, which is an iatrogenic harm to avoid. Routine large boluses ignore her perfusion. Restricting all fluid risks hypoperfusion. Diuretics are only for hydrostatic fluid overload, which she does not have. The guideline advises against steroids for pulmonary contusion.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "east-flail"
      }
    ],
    sources: [
      {
        id: "east-flail",
        citation: "Simon B, et al. Management of pulmonary contusion and flail chest. An Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23114493/"
      },
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
  },
  {
    id: "multiple-trauma-28",
    topic: "multiple-trauma",
    title: "Motorcyclist still in his helmet",
    stem: "You are working in a rural hospital emergency department. The trauma centre is 1 hour away by air. A 27-year-old man is brought in by ambulance after his motorcycle left the highway at speed. Paramedics kept his full face helmet on because he was combative, and they held his head in line. He now makes gurgling sounds, and vomit is visible inside the visor. GCS 7 (E1 V2 M4). His left thigh is swollen and angulated, with a normal foot pulse and no wound. The pelvis is stable, and eFAST is negative. The department follows the European guideline on management of major bleeding after trauma.",
    vitals: {
      temperature: "36.1°C tympanic",
      pulse: "118/minute",
      resp: "26/minute",
      bp: "98/60 mmHg",
      o2sat: "88% on 15 L/minute by non-rebreather mask",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following should be done first for this patient?",
        options: [
          "Analgesia for his femur fracture",
          "Blood products for his thigh bleeding",
          "Chest X-ray before any procedure",
          "Clear and secure his airway",
          "CT of the head and cervical spine"
        ],
        correct: 3,
        explanation: "Gurgling with vomit in the visor and a saturation of 88% mean his airway is obstructed, and airway comes first in the primary survey. The helmet must come off so that the airway can be suctioned and secured. Blood for the femur fracture and analgesia follow once the airway is controlled, and other staff can start them in parallel. A chest X-ray can wait until his airway is clear, and CT needs a secured airway first.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage his helmet?",
        options: [
          "Leave it on and suction through the visor",
          "One person pulls it straight off",
          "Tilt the head back to slide it off",
          "Two people, one holding the neck in line",
          "Wait until CT of the cervical spine"
        ],
        correct: 3,
        explanation: "ATLS teaches helmet removal by two people. One holds the head and neck in line from below while the other expands the helmet sideways and eases it off, tilting it to clear the nose, then in-line stabilization continues. One person pulling it off, or tilting the head back, moves the cervical spine. Suction through the visor cannot clear an airway filled with vomit. Delaying removal until CT leaves him hypoxic.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "His pupils are equal. After initial resuscitation his BP is 94/56 mmHg.",
        prompt: "Which of the following blood pressure targets is most appropriate for him under this guideline?",
        options: [
          "MAP of 65 mmHg or more",
          "MAP of 80 mmHg or more",
          "MAP of 50 to 60 mmHg",
          "Systolic BP of 70 mmHg",
          "Systolic BP of 80 to 90 mmHg"
        ],
        correct: 1,
        explanation: "The European guideline recommends a restricted strategy with a systolic BP of 80 to 90 mmHg, a MAP of 50 to 60 mmHg, only for bleeding patients without brain injury. With severe TBI, a GCS of 8 or less, it recommends a MAP of 80 mmHg or more, because low cerebral perfusion worsens brain injury. His GCS of 7 puts him in that group, and his MAP now is about 69 mmHg. A MAP of 65 mmHg or more is a common target in septic shock but is below the level the guideline sets for severe TBI. A systolic of 70 mmHg would leave his injured brain underperfused.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q4",
        kind: "single",
        update: "An X-ray shows a closed midshaft fracture of the left femur. The knee, ankle and pelvis are normal. The flight crew arrives in 20 minutes.",
        prompt: "Which of the following is the most appropriate splint for his thigh during the flight?",
        options: [
          "Inflatable air splint on the thigh",
          "No splint until the trauma centre",
          "Pillow under the knee",
          "Plaster cast from hip to ankle",
          "Traction splint on the left leg"
        ],
        correct: 4,
        explanation: "A traction splint suits an isolated midshaft femur fracture with no pelvic, knee or ankle injury. It reduces pain and bleeding into the thigh and protects the vessels during transport. An air splint can change pressure as the aircraft climbs and descends. A pillow does not immobilize the fracture. A plaster cast hides the thigh from examination and cannot be adjusted for swelling. Leaving the fracture unsplinted adds pain and blood loss.",
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
    author: "Preceptor",
    version: 2
  },
  {
    id: "multiple-trauma-29",
    topic: "multiple-trauma",
    title: "Ironworker after a large transfusion",
    stem: "A 49-year-old man was brought to the emergency department by ambulance 6 hours ago after he fell 8 m from scaffolding. He was intubated on arrival. He had a grade IV liver laceration treated with angioembolization. He has received 14 units of red cells, 10 units of plasma and 6 L of crystalloid. He received tranexamic acid and is ventilated with PEEP of 5 cmH2O. He remains intubated in the emergency department while he waits for an intensive care bed. Over the last hour his peak airway pressure has risen from 26 to 38 cmH2O. His urine output has fallen to 5 mL/hour. His abdomen is distended and tense.",
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-31",
    topic: "multiple-trauma",
    title: "Hockey player boarding in the department",
    stem: "A 23-year-old man was brought to the emergency department 3 hours ago after he was checked hard into the boards during a hockey game. He has left lower chest and upper abdominal pain. He is healthy. GCS 15. CT with contrast showed a fracture of the left 10th rib, a grade III splenic laceration without contrast extravasation, and a small amount of free fluid around the spleen. There was no other injury seen. The trauma surgeon admitted him for nonoperative management, and he is waiting in the department for a monitored bed. His initial vital signs are listed.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "124/76 mmHg",
      o2sat: "98% on room air",
      weight: "86 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following injuries is most easily missed on his initial CT and needs serial abdominal examination?",
        options: [
          "Left hemothorax",
          "Left kidney laceration",
          "Left pneumothorax",
          "Liver laceration",
          "Small bowel injury"
        ],
        correct: 4,
        explanation: "CT is excellent for solid organ injury but less sensitive for hollow viscus injury, which may show only subtle signs early. ATLS teaches that repeated abdominal examination is needed to detect it, and nonoperative management of his spleen depends on those examinations. Hemothorax, pneumothorax and kidney or liver lacerations are well seen on CT with contrast, and none was reported.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        update: "Two hours later he is restless. His pulse is 118/minute and his BP is 112/80 mmHg. He reports pain at the tip of his left shoulder, pain with deep breaths and point tenderness over the 10th rib. His respiratory rate is 20/minute and his temperature is 37.4°C.",
        prompt: "Which of the following new findings most suggests bleeding inside the abdomen rather than rib pain?",
        options: [
          "Left shoulder tip pain",
          "Pain with deep breaths",
          "Point tenderness over the 10th rib",
          "Respiratory rate of 20/minute",
          "Temperature of 37.4°C"
        ],
        correct: 0,
        explanation: "Pain at the tip of the left shoulder is referred pain from blood irritating the diaphragm, and with his rising pulse and narrowing pulse pressure it points to ongoing bleeding from the spleen. The WSES guideline makes serial clinical and laboratory checks part of nonoperative management so that this change is caught early. Pain with breathing and point tenderness over the rib are expected from the fracture. A respiratory rate of 20/minute and a temperature of 37.4°C do not separate bleeding from rib pain.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "wses-spleen"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 unit of red cells his pulse is 98/minute and his BP is 122/78 mmHg. A repeat CT shows a new contrast blush in the spleen.",
        prompt: "Which of the following is the most appropriate management now?",
        options: [
          "Continued observation alone",
          "Discharge with a follow-up CT",
          "Immediate splenectomy",
          "Splenic angioembolization",
          "Tranexamic acid alone"
        ],
        correct: 3,
        explanation: "He responded to transfusion, so he is hemodynamically stable, and the WSES guideline suggests angiography with embolization for stable patients with an arterial blush on CT, whatever the injury grade. Observation alone ignores active arterial bleeding. Immediate splenectomy is for patients who are unstable or who fail embolization. Tranexamic acid does not stop arterial bleeding by itself. Discharge is unsafe with active bleeding.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "wses-spleen"
      },
      {
        id: "q4",
        kind: "single",
        update: "Twenty minutes later, before any procedure has started, his BP falls to 82/50 mmHg despite a second unit of red cells.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Continue the current plan unchanged",
          "Operating room for splenectomy",
          "Repeat CT to measure the bleeding",
          "Start a norepinephrine infusion",
          "Transfer to the intensive care unit"
        ],
        correct: 1,
        explanation: "He is now unstable despite transfusion, so nonoperative management has failed. The WSES guideline recommends operative management for hemodynamically unstable patients, and splenectomy when nonoperative management fails and instability persists. Keeping to the earlier plan or repeating CT delays hemorrhage control, and embolization is for stable patients. A vasopressor masks hypovolemia and does not stop bleeding. Moving him to the intensive care unit without surgery leaves the source untreated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "wses-spleen"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "wses-spleen",
        citation: "Coccolini F, et al. Splenic trauma. WSES classification and guidelines for adult and pediatric patients. World J Emerg Surg. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28828034/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-35",
    topic: "multiple-trauma",
    title: "A mother and child from one car",
    stem: "You are the only physician in a community hospital emergency department, with three nurses and a respiratory therapist. Paramedics arrive with a mother and her son from a car that was struck on the passenger side. The 34-year-old mother is screaming in pain and asking for her son. She has an open fracture of the left lower leg with slow bleeding controlled by a dressing, a pulse of 112/minute and a systolic BP of 132 mmHg. Her 3-year-old son was in a forward facing car seat. He is quiet, with snoring respirations. He opens his eyes to pain, moans and localizes pain. He has a bruise above the right ear. His vital signs are listed.",
    vitals: {
      temperature: "36.2°C tympanic",
      pulse: "150/minute",
      resp: "28/minute",
      bp: "92/56 mmHg",
      o2sat: "91% on 15 L/minute by non-rebreather mask",
      weight: "15 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following patients and problems should you attend to first?",
        options: [
          "The boy's airway",
          "The boy's scalp bruise",
          "The mother's fracture bleeding",
          "The mother's pain",
          "The mother's questions"
        ],
        correct: 0,
        explanation: "The quiet child is the sicker patient. Snoring respirations with an O2 saturation of 91% on high flow oxygen mean a partly obstructed airway, and his GCS of 9 (E2 V2 M5) from a head injury puts it at further risk. Airway threats come first in the primary survey. The mother is loud, which shows that her airway and breathing are intact, and her bleeding is controlled. Her pain and her questions matter, but a nurse can address them while you manage the boy. The bruise is noted in the secondary survey.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first manoeuvre to open the boy's airway?",
        options: [
          "Head tilt and chin lift",
          "Jaw thrust with in-line stabilization",
          "Nasopharyngeal airway",
          "Recovery position on his side",
          "Suction only, no repositioning"
        ],
        correct: 1,
        explanation: "After a side impact with a head injury, his cervical spine must be protected, and ATLS teaches the jaw thrust with manual in-line stabilization to open the airway without moving the neck. Head tilt and chin lift extends the neck. A nasopharyngeal airway is an adjunct placed once the airway has been opened, not the first manoeuvre, and it is used with caution after head trauma when a basal skull fracture has not been excluded. Suction alone does not relieve obstruction from the tongue. Rolling him to his side moves the spine and makes assessment harder.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 1
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to deploy your staff at this moment?",
        options: [
          "All staff with the boy until he is stable",
          "Nurse to the mother, then call in help",
          "RT to the mother while you manage the boy",
          "Send the mother to the waiting room",
          "Treat the mother first, then the boy"
        ],
        correct: 1,
        explanation: "You and the respiratory therapist, with one nurse, stay on the boy's airway and circulation, while a named nurse assesses the mother, gives analgesia and watches her dressing and vital signs. Calling in another physician early brings help before both patients need you. Hicks and Petrosoniak describe early calls for help and clear role assignment as ways to keep a team effective. Sending every staff member to the boy leaves an injured adult unwatched. The RT is needed at the boy's airway. The waiting room is unsafe for an open fracture.",
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
        id: "hicks",
        citation: "Hicks C, Petrosoniak A. The human factor. Optimizing trauma team performance in dynamic clinical environments. Emerg Med Clin North Am. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29132571/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
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
    author: "Preceptor",
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-40",
    topic: "multiple-trauma",
    title: "Worker crushed at a loading dock",
    stem: "A 41-year-old man is brought to the emergency department by ambulance 30 minutes after a reversing truck pinned him against a loading dock at the level of his hips. He has severe pelvic and groin pain. He is healthy. GCS 14. His airway is clear, and breath sounds are equal. He is pale and cool. There is blood at the urethral meatus, and the scrotum and perineum are swollen and bruised. He has not passed urine since the injury. The legs are not shortened, and foot pulses are present. eFAST shows no free fluid. No pelvic binder was applied at the scene.",
    vitals: {
      temperature: "36.0°C tympanic",
      pulse: "124/minute",
      resp: "24/minute",
      bp: "86/52 mmHg",
      o2sat: "97% on room air",
      weight: "92 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following should be done first for this patient?",
        options: [
          "Apply a pelvic binder now",
          "CT of the abdomen and pelvis",
          "Pelvic X-ray before any intervention",
          "Retrograde urethrogram",
          "Urinary catheter to measure urine output"
        ],
        correct: 0,
        explanation: "He is in shock after a crush to the pelvis, with a negative eFAST, so pelvic hemorrhage is the likely source and a binder is a primary survey intervention. It is applied on clinical suspicion without waiting for an X-ray, which can be done after. A retrograde urethrogram and CT belong after the circulation is addressed. A urinary catheter should not be passed blindly in a man with blood at the meatus.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 2
        },
        source: "atls"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings in his case suggest an injury to the urethra?",
        select: 2,
        options: [
          "Blood at the urethral meatus",
          "Foot pulses present on both sides",
          "GCS of 14 on arrival",
          "Legs not shortened or rotated",
          "Pulse of 124/minute and cool skin",
          "Severe pelvic and groin pain",
          "Swollen bruised scrotum and perineum"
        ],
        correct: [0, 6],
        explanation: "Blood at the meatus after pelvic trauma is the classic sign of urethral injury, and the AUA guideline calls for a retrograde urethrogram in that setting. Perineal and scrotal swelling and bruising from extravasated blood and urine also point to it, as does his inability to void. Groin pain is expected with any crush to the pelvis. Tachycardia reflects bleeding. Foot pulses, leg length and his GCS say nothing about the urethra.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "aua-urotrauma"
      },
      {
        id: "q3",
        kind: "single",
        update: "A nurse is about to insert a urinary catheter so that his urine output can be measured.",
        prompt: "Which of the following is the most appropriate instruction to the nurse?",
        options: [
          "Insert a smaller catheter with gel",
          "Insert the catheter with firm pressure",
          "Proceed, stopping if resistance is met",
          "Use a coude tip catheter",
          "Wait for a retrograde urethrogram first"
        ],
        correct: 4,
        explanation: "Passing a catheter blindly through a partly torn urethra can complete the tear or create a false passage. The AUA guideline recommends a retrograde urethrogram when there is blood at the meatus after pelvic trauma, and prompt drainage, often by a suprapubic tube, if the urethra is injured. A smaller or coude catheter, gentle technique or firm pressure all still pass blindly through the injury. Urine output can be tracked by other means until the urethra is imaged.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "aua-urotrauma"
      },
      {
        id: "q4",
        kind: "single",
        update: "After 2 units of red cells his BP is 80/48 mmHg, and he is going to angiography. Urology confirms a complete tear of the membranous urethra. His bladder is now palpable above the pubis.",
        prompt: "Which of the following is the most appropriate way to drain his bladder now?",
        options: [
          "Bladder scan, then observation",
          "Delayed drainage after pelvic repair",
          "Primary endoscopic realignment now",
          "Suprapubic catheter placement",
          "Urethral catheter over a guidewire"
        ],
        correct: 3,
        explanation: "A complete urethral tear with a distended bladder needs drainage, and the AUA guideline recommends prompt urinary drainage after a pelvic fracture urethral injury. It names percutaneous or open suprapubic tube placement as the preferred initial management for most of these injuries, because the tube drains the bladder without passing through the torn urethra. The guideline limits primary realignment to patients who are hemodynamically stable, and he remains in shock. A catheter passed over a guidewire still crosses the injury blindly. Observation or delayed drainage leaves a distended bladder that can leak or rupture.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "aua-urotrauma"
      }
    ],
    sources: [
      {
        id: "atls",
        citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual. 11th edition. Chicago: American College of Surgeons. 2025.",
        url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/"
      },
      {
        id: "aua-urotrauma",
        citation: "Morey AF, et al. Urotrauma guideline 2020. AUA guideline. J Urol. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33053308/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
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
    author: "Preceptor",
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
    author: "Preceptor",
    version: 1
  },
  {
    id: "multiple-trauma-44",
    topic: "multiple-trauma",
    title: "Breathless after a pelvic resuscitation",
    stem: "A 38-year-old woman was brought to the emergency department 4 hours ago after a car struck her as she crossed a road. She had an unstable pelvic fracture without chest injury. Her chest X-ray on arrival was clear. Under the massive hemorrhage protocol she received 6 units of red cells, 6 units of plasma and 1 adult dose of platelets over 2 hours, and pelvic bleeding was controlled by angioembolization. She is back in the department waiting for an intensive care bed. One hour after her last unit of plasma she became short of breath. She has crackles in both lungs. Her neck veins are not visible. Bedside ultrasound shows normal left ventricular function, a small collapsing IVC and B-lines in both lungs. A chest X-ray shows new bilateral infiltrates. Before the transfusions her systolic BP was 118 mmHg.",
    vitals: {
      temperature: "37.9°C tympanic",
      pulse: "118/minute",
      resp: "32/minute",
      bp: "94/56 mmHg",
      o2sat: "85% on 6 L/minute by nasal prongs",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her new respiratory distress?",
        options: [
          "Aspiration pneumonitis",
          "Delayed pulmonary contusion",
          "Fat embolism syndrome",
          "Transfusion-associated circulatory overload",
          "Transfusion-related acute lung injury"
        ],
        correct: 4,
        explanation: "New hypoxemia with bilateral infiltrates within 6 hours of transfusion, without evidence of left atrial hypertension, meets the consensus definition of transfusion-related acute lung injury. Her normal left ventricle and small collapsing IVC argue against circulatory overload. She had no chest injury and a clear X-ray on arrival, so contusion does not explain new infiltrates. Fat embolism usually appears a day or more after injury and would not explain the close timing with the plasma. Nothing suggests she vomited or aspirated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "trali-redefinition"
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings, if present, would favour transfusion-associated circulatory overload?",
        select: 2,
        options: [
          "Bilateral crackles",
          "Bilateral infiltrates on X-ray",
          "Distended neck veins",
          "Hypoxemia on oxygen",
          "Low grade fever",
          "Onset within 6 hours of plasma",
          "Rising blood pressure"
        ],
        correct: [2, 6],
        explanation: "Circulatory overload is hydrostatic edema from too much volume, so signs of raised filling pressure such as distended neck veins point to it, and the ISBT criteria for overload include increased blood pressure. The consensus panel on TRALI also suggests an objective measure such as echocardiography to look for left atrial hypertension. Crackles, bilateral infiltrates, hypoxemia and onset within 6 hours of transfusion occur in both conditions. A low grade fever does not separate them. In her case the neck veins are not visible, the IVC is small and her BP has fallen.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "trali-redefinition"
      },
      {
        id: "q3",
        kind: "single",
        update: "Her bleeding remains controlled. Her hemoglobin is 84 g/L, and her fibrinogen and platelet count are normal.",
        prompt: "Which of the following hemoglobin targets should guide any further red cell transfusion for her?",
        options: [
          "50 to 60 g/L",
          "70 to 90 g/L",
          "100 to 110 g/L",
          "120 to 140 g/L",
          "140 g/L or higher"
        ],
        correct: 1,
        explanation: "The European guideline on major bleeding after trauma recommends a target hemoglobin of 70 to 90 g/L when red cells are needed. Her level of 84 g/L is within that range, so she needs no more red cells now, which also avoids further exposure to blood products. Targets of 100 g/L or higher add transfusions without benefit. A target of 50 to 60 g/L is below the recommended range for a patient who has just bled.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following actions is required now for this complication of her resuscitation?",
        options: [
          "Diphenhydramine before any future unit",
          "Furosemide 40 mg IV",
          "Methylprednisolone 125 mg IV",
          "Report it to the transfusion service",
          "Restart plasma at a slower rate"
        ],
        correct: 3,
        explanation: "The consensus panel asks clinicians to report every case of pulmonary edema within 6 hours of transfusion to the transfusion service, which investigates the donors and the units and may prevent harm to other recipients. Furosemide treats hydrostatic overload and can worsen her low BP. Steroids and antihistamines do not treat this injury, and restarting plasma adds more of the product that may have caused it. Her care is supportive, with oxygen and ventilatory support as needed.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 3
        },
        source: "trali-redefinition"
      }
    ],
    sources: [
      {
        id: "trali-redefinition",
        citation: "Vlaar APJ, Toy P, Fung M, et al. A consensus redefinition of transfusion-related acute lung injury. Transfusion. 2019.",
        url: "https://pubmed.ncbi.nlm.nih.gov/30993745/"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
  },
  {
    id: "multiple-trauma-45",
    topic: "multiple-trauma",
    title: "Low blood pressure after a fall down stairs",
    stem: "A 72-year-old woman is brought to the emergency department by ambulance after she fell down eight stairs at home. She has taken prednisone 10 mg daily for 3 years for rheumatoid arthritis. She has missed no doses. She also takes ramipril and calcium with vitamin D. GCS 15. CT shows fractures of right ribs 5 to 7 and both left pubic rami, with no solid organ injury, no contrast extravasation and no intracranial injury. She has received 2 L of crystalloid and 1 unit of red cells, but she remains hypotensive. Her hemoglobin is 108 g/L, unchanged from arrival. Sodium 131 mmol/L, potassium 5.0 mmol/L, glucose 3.9 mmol/L. Her vital signs are listed.",
    vitals: {
      temperature: "36.2°C tympanic",
      pulse: "104/minute",
      resp: "22/minute",
      bp: "82/48 mmHg",
      o2sat: "95% on 2 L/minute by nasal prongs",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her persistent hypotension now?",
        options: [
          "fludrocortisone 0.1 mg PO",
          "hydrocortisone 25 mg IV",
          "hydrocortisone 100 mg IV",
          "norepinephrine infusion alone",
          "Red cells 4 units IV"
        ],
        correct: 2,
        explanation: "Three years of prednisone 10 mg daily puts her at risk of glucocorticoid-induced adrenal insufficiency, and trauma is a stress that can trigger adrenal crisis. Hypotension despite fluid with no ongoing bleeding, a low sodium and a low glucose fit that picture. The 2024 European Society of Endocrinology and Endocrine Society guideline advises hydrocortisone 100 mg IV at once, followed by fluid, without waiting for tests. Hydrocortisone 25 mg is close to a daily replacement dose and too little for a crisis. Fludrocortisone does not replace glucocorticoid. A vasopressor alone, or more red cells with a stable hemoglobin, leaves the cause untreated.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "gc-adrenal"
      },
      {
        id: "q2",
        kind: "single",
        update: "Her BP rises to 112/66 mmHg and her pulse falls to 84/minute within the hour. She is admitted to the trauma service for her fractures and will be in hospital for several days.",
        prompt: "Which of the following is the most appropriate treatment plan for her first day in hospital?",
        options: [
          "hydrocortisone 200 mg IV per 24 hours",
          "No further treatment for her BP",
          "norepinephrine to a MAP of 65 mmHg",
          "prednisone 5 mg PO daily",
          "prednisone 10 mg PO daily"
        ],
        correct: 0,
        explanation: "Her long term prednisone makes her unable to mount a normal cortisol response to the stress of her injuries. The joint guideline advises hydrocortisone 200 mg over 24 hours by continuous infusion, or 50 mg IV every 6 hours, for patients at risk who face major stress such as trauma needing admission, then tapering as she recovers. Her usual prednisone, or half of it, is below her need during this stress. A vasopressor does not replace cortisol, and giving nothing more risks a second crisis.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 4
        },
        source: "gc-adrenal"
      },
      {
        id: "q3",
        kind: "single",
        update: "Four hours later her pulse has risen from 84 to 112/minute. Her hemoglobin has fallen from 108 to 86 g/L, and her left groin and thigh are swollen and bruised.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Albumin 25% infusion",
          "CT angiography of the pelvis",
          "Furosemide for the thigh swelling",
          "Recheck her hemoglobin in 6 hours",
          "Surgical fixation of the pubic rami"
        ],
        correct: 1,
        explanation: "A rising pulse, a fall in hemoglobin of 22 g/L and new groin swelling point to delayed bleeding from her pelvic fractures, a separate problem from adrenal insufficiency. Low energy pubic rami fractures in older adults can still bleed from pelvic arteries. CT angiography can locate an arterial blush for embolization. Albumin does not treat hemorrhage. Waiting 6 hours lets the bleeding continue. A diuretic worsens hypovolemia, and fixation of pubic rami is not an emergency hemorrhage control step.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "euro-bleeding"
      }
    ],
    sources: [
      {
        id: "gc-adrenal",
        citation: "Beuschlein F, et al. European Society of Endocrinology and Endocrine Society joint clinical guideline. Diagnosis and therapy of glucocorticoid-induced adrenal insufficiency. J Clin Endocrinol Metab. 2024.",
        url: "https://pubmed.ncbi.nlm.nih.gov/38724043/"
      },
      {
        id: "euro-bleeding",
        citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/36859355/"
      }
    ],
    reviewed: false,
    author: "Preceptor",
    version: 2
  },
  {
    id: "multiple-trauma-46",
    topic: "multiple-trauma",
    title: "Farmer hurt while moving cattle",
    stem: "You are working in a rural hospital emergency department with no surgeon on site. The trauma centre is 2 hours away by road, and a helicopter has been requested. A 52-year-old man is brought in by his son 30 minutes after a bull pinned him against a gate and gored him in the left lower abdomen. He is healthy and takes no medications. GCS 15. His airway is clear, and breath sounds are equal. There is a 5 cm wound in the left lower quadrant, and a loop of small bowel protrudes through it. The bowel is pink and not bleeding. The abdomen is tender around the wound. The pelvis is stable, and eFAST shows no free fluid. He has received 500 mL of crystalloid. His vital signs are listed.",
    vitals: {
      temperature: "36.4°C tympanic",
      pulse: "104/minute",
      resp: "16/minute",
      bp: "128/82 mmHg",
      o2sat: "97% on room air",
      weight: "90 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate care of the exposed bowel before his transfer?",
        options: [
          "Close the skin over it with sutures",
          "Cover it with dry gauze and tape",
          "Cover it with moist sterile dressings",
          "Leave it uncovered for the surgeon",
          "Replace it gently into the abdomen"
        ],
        correct: 2,
        explanation: "Eviscerated bowel is not pushed back into the abdomen outside the operating room. PHTLS teaches that it is covered with moist sterile dressings so that it does not dry out, and the surgeon inspects and returns it under direct vision. Replacing it can carry contamination and an unseen bowel injury into the peritoneum. Dry gauze sticks to the bowel wall and lets it dry. Suturing the skin over it can strangle the loop and hides it from view. Leaving it uncovered for a 2 hour transfer exposes it to drying, cooling and contamination.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 8
        },
        source: "phtls"
      },
      {
        id: "q2",
        kind: "single",
        update: "A second 500 mL of crystalloid brings his pulse down to 92/minute. Twenty minutes later, while he waits for the helicopter, he is anxious. His pulse is 114/minute, his BP is 118/90 mmHg and his SpO2 is 97%.",
        prompt: "Which of the following is the most appropriate response to these changes?",
        options: [
          "lorazepam 1 mg IV",
          "norepinephrine infusion IV",
          "Normal saline 1 L IV bolus",
          "Red cell transfusion now",
          "Repeat vital signs in 30 minutes"
        ],
        correct: 3,
        explanation: "His pulse fell after the fluid and then rose again within 20 minutes, with new anxiety and a pulse pressure that has narrowed from 46 to 28 mmHg. ATLS calls this a transient response, which points to ongoing bleeding and a need for blood and an operation. He has now had 1 L of crystalloid, the ATLS initial bolus for an adult, so red cells are given now and the receiving trauma centre is told that he is bleeding. More saline dilutes his clotting factors and red cells. Norepinephrine does not replace lost volume, and his BP does not call for it. Lorazepam treats the anxiety that signals poor perfusion and can blunt his compensation. Waiting 30 minutes to repeat his vital signs loses time he may not have.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 5
        },
        source: "atls"
      },
      {
        id: "q3",
        kind: "single",
        update: "A venous blood gas shows a lactate of 4.8 mmol/L and a base deficit of 7 mmol/L. His hemoglobin is 138 g/L.",
        prompt: "Which of the following measures best tracks his tissue perfusion during resuscitation?",
        options: [
          "Central venous pressure",
          "Hemoglobin on a single sample",
          "Serial lactate and base deficit",
          "Skin temperature of the hands",
          "Systolic BP alone"
        ],
        correct: 2,
        explanation: "The European guideline recommends serum lactate and base deficit as sensitive tests to estimate and monitor the extent of bleeding and shock, and repeated values show whether his resuscitation is working. His lactate of 4.8 mmol/L and base deficit of 7 mmol/L show hypoperfusion while his hemoglobin is still 138 g/L. The guideline advises against a single hemoglobin or hematocrit as an isolated marker of bleeding, because it falls only after dilution. The systolic BP is held up by compensation until late. Central venous pressure does not measure tissue perfusion, and skin temperature also changes with a cold room.",
        keyFeature: {
          topic: "multiple-trauma",
          n: 6
        },
        source: "euro-bleeding"
      }
    ],
    sources: [
      {
        id: "phtls",
        citation: "National Association of Emergency Medical Technicians. PHTLS: Prehospital Trauma Life Support. 10th edition. Burlington, MA: Jones and Bartlett Learning. 2023."
      },
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
    author: "Preceptor",
    version: 2
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
    author: "Preceptor",
    version: 1
  }
];
