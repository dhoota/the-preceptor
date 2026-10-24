// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const hoistTransferThighFracture: OralCase = {
  id: "hoist-transfer-thigh-fracture",
  title: "Upset since the morning transfer",
  blueprint: "procedures",
  alsoCovers: ["trauma", "comm"],
  priorityTopic: "analgesia-sedation",
  keyFeatures: [
    { topic: "analgesia-sedation", n: 1 },
    { topic: "analgesia-sedation", n: 2 },
    { topic: "analgesia-sedation", n: 3 },
    { topic: "analgesia-sedation", n: 4 },
    { topic: "analgesia-sedation", n: 6 },
  ],
  summary: "A young woman who cannot speak has been crying and stiff all day, and the nurse wants something to settle her.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 27 year old woman with cerebral palsy is brought by ambulance from home. Her mother says she has been crying and having more spasms since a hoist transfer this morning.",
  card: {
    vitals: {
      temperature: "37.3°C tympanic",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "138/86 mmHg",
      o2sat: "97% on room air",
      weight: "36 kg (79 lb)",
    },
    medications: "Clobazam, levetiracetam, baclofen and pantoprazole, all by gastrostomy tube. Acetaminophen as needed.",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "At 07:30 her mother moved her from bed to wheelchair with a ceiling hoist. One sling strap slipped and her left leg caught against the footplate as she swung down. Her mother did not hear a crack. " +
        "Since then she has cried on and off, her arms and legs stiffen in spasms, and she screams when her pants or brief are changed. She has not slept today. No vomiting, no fever, no head strike. It is now 19:00.",
    },
    {
      id: "communication",
      label: "Her usual communication and pain cues",
      result:
        "She does not speak. She smiles and makes a soft hum when content. She answers yes by looking at her mother's left hand. " +
        "When she hurts she clenches her jaw, gives a high pitched moan, cries without tears and her arms go stiff. Her mother says, 'This is her pain face. It is not a bad mood.' Asked if her leg hurts, she looks at the left hand and cries.",
    },
    {
      id: "past-analgesia",
      label: "Past responses to pain medicine",
      result:
        "After hip operations at 16 she had an epidural and did well. Later on the ward, oral morphine made her so drowsy that her oxygen dropped and she needed a mask. Ibuprofen upsets her stomach. Acetaminophen helps period cramps.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Cerebral palsy after birth at 28 weeks. Spastic quadriplegia. She does not walk or stand and uses a tilt wheelchair. Moderate intellectual disability. Epilepsy, last seizure 4 months ago. " +
        "Reflux with two aspiration pneumonias, the last 2 years ago. Scoliosis. Hip surgery at 16. No previous fractures. Bone density has never been checked. Low vitamin D 3 years ago.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "All by gastrostomy tube. Clobazam 10 mg at 08:00 and 20:00. Levetiracetam 750 mg twice a day. Baclofen 10 mg at 08:00, 14:00 and 20:00. Pantoprazole 40 mg daily. Vitamin D 1000 units daily, often missed. " +
        "Acetaminophen 500 mg at 08:00 and 14:00 today. Her mother carries the 20:00 doses in her bag and usually gives them herself.",
    },
    {
      id: "social",
      label: "Social history and decision making",
      result:
        "Lives with her parents in a bungalow. Her mother is her main caregiver and her substitute decision maker. A personal support worker comes twice a day but was not there this morning. Her father works nights. " +
        "She cannot weigh complex choices but shows clear likes and dislikes. Last tube feed at 12:00, water flush at 17:00.",
    },
    {
      id: "general",
      label: "General appearance and behaviour",
      result:
        "Thin young woman in her wheelchair. She grimaces, clenches her jaw and moans each time anyone nears her left leg. Her arms are flexed and stiff. She flinches and cries when the leg is touched and settles a little when left alone.",
    },
    {
      id: "pain-tool",
      label: "Behavioural pain checklist by the nurse",
      result:
        "On an adult checklist for people who cannot speak, she scores high on vocal, facial, body tone and protective items: frequent moaning, grimacing, guarding the left leg and flinching on touch. Her mother agrees this is much worse than her usual period pain.",
    },
    {
      id: "leg",
      label: "Left leg examination",
      result:
        "The distal left thigh is swollen, warm and bruised on the outer side. She cries with any movement above the knee. The leg is slightly shortened. Skin intact. " +
        "Dorsalis pedis and posterior tibial pulses present. Foot warm with capillary refill 2 seconds. Calf soft. She withdraws the foot to touch. Fixed hip and knee contractures as at baseline, per her mother.",
    },
    {
      id: "other-exam",
      label: "Rest of the examination",
      result:
        "No scalp injury. Chest clear. Abdomen soft, gastrostomy site clean. Bladder not palpable. Right leg and both arms move as usual without pain. No other bruises. Sacrum and heels intact. Pupils 4 mm and reactive.",
    },
    {
      id: "bedside",
      label: "Bedside tests",
      result: "Capillary glucose 5.6 mmol/L. Bladder scan 120 mL. Urine dip negative. Urine beta hCG negative.",
    },
    {
      id: "xray",
      label: "X ray of the left femur and knee",
      result:
        "Displaced and angulated transverse fracture of the distal third of the left femoral shaft. Thin cortices and general osteopenia. No other fracture seen. Old osteotomy changes at the hip.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 124 g/L. White cells 9.1 x 10^9/L. Platelets 280 x 10^9/L. Sodium 138 mmol/L. Potassium 4.0 mmol/L. Creatinine 28 µmol/L. Calcium 2.28 mmol/L. Alkaline phosphatase 140 U/L. 25 hydroxy vitamin D 32 nmol/L.",
    },
    {
      id: "event",
      label: "Observations at 21:30",
      result:
        "At 21:00 the nurse gave hydromorphone 0.2 mg IV as a breakthrough dose when she moaned during a splint check. Now she responds only to a firm sternal rub. Respiratory rate 6/minute with snoring. O2 sat 86% on room air. End tidal CO2 68 mmHg by nasal capnography. Pulse 74/minute. BP 104/62 mmHg. Pupils 2 mm.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "On arrival",
      text: "The triage note says 'agitated, behavioural, pain score unable'. The nurse tells you X ray cannot get a film while she thrashes and asks for an order for lorazepam 1 mg IV to settle her.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First steps",
      prompt: "How do you answer the nurse, and what do you do first?",
      seconds: 80,
      modelAnswer: [
        "Treat distress in a person who cannot speak as pain until shown otherwise. Ask her mother about her pain cues.",
        "Do not give a sedative alone. Sedation without analgesia hides pain and adds to airway risk.",
        "Score her pain with a behavioural tool and her mother's help, not a numeric scale.",
        "Give titrated IV fentanyl by weight, about 0.5 mcg/kg (15 to 20 mcg), before moving her for X ray.",
        "Splint the leg in the position of comfort and place her on SpO2 and capnography monitoring.",
      ],
      rubric: ["at-m1", "at-p1", "at-pr1"],
      choices: [
        {
          id: "c-pain-first",
          label: "I declined the lorazepam. I asked her mother how she shows pain, scored her with a behavioural checklist, gave fentanyl 18 mcg IV, splinted the leg and put her on a monitor with capnography before X ray.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Good. Changes in behaviour may be the only sign of pain in a person who cannot speak. Her mother knows her pain face better than any scale. Small weight based opioid doses treat the cause, and the monitor guards against her known sensitivity to opioids.",
        },
        {
          id: "c-oral-only",
          label: "I gave acetaminophen through her tube and sent her to X ray with two staff to hold the leg.",
          next: "s-oral-only",
          quality: "partial",
          feedback:
            "Acetaminophen is a reasonable start but it will not control the pain of a long bone fracture. Holding a fractured leg still for films is painful. Give a titrated IV opioid first and reassess with a behavioural tool.",
        },
        {
          id: "c-lorazepam",
          label: "I ordered lorazepam 1 mg IV so she would lie still for the films.",
          next: "s-lorazepam",
          quality: "unsafe",
          feedback:
            "This sedates without treating pain. She already takes clobazam and baclofen and has aspirated before, so a benzodiazepine adds airway risk. Her distress was pain. A sedative alone is never the answer for a painful condition.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-oral-only",
      phase: "In X ray",
      text: "The technologist calls. The patient screamed and arched when the leg was moved, and the films are blurred. Her mother is in tears. You go to the bedside and give fentanyl 18 mcg IV before a second attempt.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-lorazepam",
      phase: "Twenty minutes later",
      text: "She is drowsy and snoring with an O2 sat of 91%, yet she still moans and stiffens whenever the leg is touched. Her mother says, 'She is still in pain. Now she just cannot show you.' You give oxygen, reposition her airway and give fentanyl in small doses.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "Her mother is with her. What history do you want, and why does each part matter for your pain plan?",
      seconds: 90,
      modelAnswer: [
        "Mechanism and timing. The strap slipped at 07:30 and her leg caught against the footplate.",
        "Her usual communication, how she shows pain, and how today is different.",
        "Past responses to analgesia. Morphine caused oversedation and low oxygen. An epidural worked well. Ibuprofen upsets her stomach.",
        "Every sedating home drug, with dose and time. Clobazam and baclofen are due at 20:00, and her mother carries them.",
        "Other causes of distress. Constipation, urinary retention, reflux, menses, infection, seizures, pressure areas.",
        "Aspiration history, last tube feed, and who makes decisions with her.",
      ],
      rubric: ["at-h1", "at-h2", "at-h3", "at-h4", "at-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination",
      prompt: "What do you look for on examination, and what is your differential for her distress?",
      seconds: 80,
      modelAnswer: [
        "Examine her whole body with her clothes off. She cannot point to every injury.",
        "The left leg. Swelling, deformity, skin, distal pulses, perfusion and compartments. Compare with her baseline contractures.",
        "Look for other injuries from the fall and for pressure areas.",
        "Check the abdomen, bladder, gastrostomy site, chest and temperature.",
        "Differential. Femur or knee fracture, hip dislocation, constipation, urinary retention, reflux, menstrual pain, infection, seizure activity, raised tone.",
        "A low energy injury can break thin bone in a person who does not bear weight.",
      ],
      rubric: ["at-p2", "at-p3"],
      next: "s-xray",
    },
    {
      kind: "say",
      id: "s-xray",
      phase: "The X ray",
      text: "The X ray shows a displaced distal third left femoral shaft fracture with osteopenia. Pulses are present and the foot is warm. Orthopedics will see her in 2 hours. She still moans with any movement despite two doses of fentanyl 18 mcg.",
      next: "q-analgesia",
    },
    {
      kind: "question",
      id: "q-analgesia",
      phase: "Pain plan",
      prompt: "What is your plan for her pain until she gets to the operating room?",
      seconds: 90,
      modelAnswer: [
        "Ultrasound guided femoral nerve or fascia iliaca block. It suits a femoral shaft fracture and spares opioids.",
        "Dose the local anesthetic by her 36 kg. For example bupivacaine 0.25% 20 mL is 50 mg, well under the weight based maximum.",
        "Have 20% lipid emulsion available. The bolus is 1.5 mL/kg, about 54 mL for her.",
        "Scheduled acetaminophen about 15 mg/kg by tube or IV every 6 hours. Avoid NSAIDs, which upset her stomach.",
        "Small weight based opioid doses only for breakthrough pain. Padded long leg splint.",
        "Reassess with the behavioural tool after each step and keep her on capnography.",
      ],
      rubric: ["at-m2", "at-m3", "at-m4", "at-pr1"],
      choices: [
        {
          id: "c-block",
          label: "I did an ultrasound guided fascia iliaca block with bupivacaine 0.25% 20 mL, 50 mg, with lipid emulsion in the room, started acetaminophen 540 mg every 6 hours, kept the splint and wrote small fentanyl doses for breakthrough pain.",
          next: "s-event",
          quality: "strong",
          feedback:
            "Good. A nerve block is the most effective and opioid sparing choice for her. You dosed the local anesthetic by her low weight and had lipid ready. Multimodal analgesia with scheduled acetaminophen lowers the opioid she needs.",
        },
        {
          id: "c-hydromorphone",
          label: "I ordered hydromorphone 1 mg IV every hour as needed and acetaminophen.",
          next: "s-hydromorphone",
          quality: "partial",
          feedback:
            "Titrating opioid for severe pain is right in principle. But 1 mg hourly is a standard adult dose and is too much for a 36 kg woman who became hypoxic on morphine before. A regional block would give better relief with less respiratory risk.",
        },
        {
          id: "c-big-block",
          label: "I asked the resident to do a fascia iliaca block with bupivacaine 0.5% 40 mL, the volume we use for older adults with hip fractures.",
          next: "s-big-block",
          quality: "unsafe",
          feedback:
            "That is 200 mg of bupivacaine, more than 5 mg/kg in a 36 kg woman. It risks local anesthetic systemic toxicity, with seizures and cardiac arrest. Calculate every local anesthetic dose by weight and stay within the maximum.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-hydromorphone",
      phase: "The orthopedic resident",
      text: "The orthopedic resident arrives and asks whether a block was considered, since the opioid has barely helped. You do an ultrasound guided fascia iliaca block with bupivacaine 0.25% 20 mL and keep lipid emulsion at the bedside.",
      next: "s-event",
    },
    {
      kind: "say",
      id: "s-big-block",
      phase: "The pharmacist",
      text: "The pharmacist checks the order, works out 5.6 mg/kg and stops it. You recalculate by weight and the block is done with bupivacaine 0.25% 20 mL, with lipid emulsion at the bedside.",
      next: "s-event",
    },
    {
      kind: "say",
      id: "s-event",
      phase: "21:30",
      text:
        "The block worked within 20 minutes and she fell asleep. At 21:00 the nurse gave a breakthrough dose of hydromorphone 0.2 mg IV when she moaned during a splint check. The nurse now calls you urgently. The patient responds only to a firm sternal rub. Respiratory rate 6/minute and snoring. O2 sat 86% on room air. End tidal CO2 68 mmHg. Pupils 2 mm. " +
        "Her mother says she gave her usual 20:00 clobazam and baclofen through the tube while you were at the bedside of another patient.",
      next: "q-event",
    },
    {
      kind: "question",
      id: "q-event",
      phase: "Oversedation",
      prompt: "What is happening, and what do you do?",
      seconds: 80,
      modelAnswer: [
        "Opioid induced respiratory depression from the breakthrough hydromorphone on top of the earlier fentanyl, made worse by clobazam and baclofen. The block took away the pain that had been keeping her awake.",
        "Stimulate her, open the airway with a jaw thrust, give oxygen and bag mask ventilation if needed. Suction ready because she aspirates.",
        "Naloxone 0.04 mg IV, repeated every 2 to 3 minutes until her breathing is adequate.",
        "Avoid flumazenil. She takes clobazam daily and has epilepsy, so it can cause seizures.",
        "Stop further opioid. Keep continuous capnography and SpO2 and watch for renarcotization.",
      ],
      rubric: ["at-p4", "at-m5", "at-pr2"],
      choices: [
        {
          id: "c-titrate",
          label: "I stimulated her, did a jaw thrust, gave oxygen with bag mask breaths and naloxone 0.04 mg IV repeated every 2 minutes until her respiratory rate was over 10 and her end tidal CO2 fell. I stopped further opioid.",
          next: "q-reassess",
          quality: "strong",
          feedback:
            "Correct. Support ventilation first, then reverse in small doses. The block still covers her fracture, so you lose little analgesia. Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating.",
        },
        {
          id: "c-full-dose",
          label: "I gave naloxone 0.4 mg IV at once.",
          next: "s-full-dose",
          quality: "partial",
          feedback:
            "Naloxone is the right drug and she will wake. But a full bolus can cause sudden distress, vomiting and spasms in a woman who has aspirated before. Ventilate first and titrate small doses to breathing, not to full alertness.",
        },
        {
          id: "c-sleeping",
          label: "I told the nurse she is comfortable for the first time today and asked for observations again in an hour.",
          next: "s-sleeping",
          quality: "unsafe",
          feedback:
            "An end tidal CO2 of 68 mmHg and a rate of 6 are respiratory failure, not comfortable sleep. Opioids combined with benzodiazepines and other sedatives are strongly linked with deaths from opioid toxicity. This needs action now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-full-dose",
      phase: "A minute later",
      text: "She wakes suddenly, stiffens into a spasm and retches. The nurse suctions her and turns her on her side. Her O2 sat recovers to 95% with oxygen. You hold further opioid and watch her closely.",
      next: "q-reassess",
    },
    {
      kind: "say",
      id: "s-sleeping",
      phase: "Fifteen minutes later",
      text: "The monitor alarms. Her O2 sat is 78% and her rate is 4. You open her airway, ventilate with a bag and mask and give naloxone 0.04 mg IV twice. She starts breathing at 12/minute.",
      next: "q-reassess",
    },
    {
      kind: "question",
      id: "q-reassess",
      phase: "The next few hours",
      prompt: "She is breathing at 14/minute with an end tidal CO2 of 44 mmHg. What orders do you write for the rest of the night?",
      seconds: 70,
      modelAnswer: [
        "Continuous SpO2 and capnography until the risk of recurrent respiratory depression has passed. Naloxone lasts 20 to 90 minutes, shorter than many opioids.",
        "Behavioural pain scores every hour with her mother's input.",
        "Lower breakthrough opioid doses now that the block works. Plan for the block wearing off in about 8 to 12 hours.",
        "Reconcile home medicines with her mother. Write when clobazam and baclofen are given and by whom. Do not stop them abruptly.",
        "Aspiration precautions, head of bed raised, nothing by tube before surgery as anesthesia directs.",
      ],
      rubric: ["at-pr2", "at-pr3"],
      next: "q-mother",
    },
    {
      kind: "question",
      id: "q-mother",
      phase: "Talking with her mother",
      prompt: "Her mother asks, 'Did I do this? Why did her leg break so easily?' Orthopedics wants to fix the fracture tomorrow. How do you respond?",
      seconds: 80,
      modelAnswer: [
        "Sit down with her mother and include the patient. Speak to the patient directly too.",
        "Explain the fracture in plain words. Bones thin in people who do not bear weight, so a small twist can break them.",
        "This was an accident with equipment, not a failure of her care. Offer an occupational therapy review of the hoist and sling.",
        "Explain the breathing event honestly, including the timing of the home medicines, and how the team will prevent a repeat.",
        "Her mother is the substitute decision maker for surgery. Involve the patient as far as she can take part.",
        "Bone health work up after recovery.",
      ],
      rubric: ["at-pr4"],
      choices: [
        {
          id: "c-explain",
          label: "I sat with them both, explained the thin bones and the fracture without blame, explained the breathing event and the medicine timing honestly, offered a hoist review, and went over the surgery so her mother could decide with her.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Good. Fragility fractures are more common and occur younger in people with developmental disabilities. A clear, blame free explanation and shared decisions with the person and her caregiver are what the examiner wants.",
        },
        {
          id: "c-brief",
          label: "I told her it was just bad luck and that orthopedics would explain the surgery.",
          next: "s-brief",
          quality: "partial",
          feedback:
            "Kind, but incomplete. She asked why the bone broke so easily. Explaining bone fragility, the breathing event and the plan now helps her decide for her daughter and prevents a repeat.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-brief",
      phase: "A few minutes later",
      text: "Her mother stops you in the hallway and asks why her daughter needed 'the antidote'. You sit down with her again and explain the bone fragility, the breathing event and the surgery plan.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Give your handover to the admitting orthopedic team.",
      seconds: 70,
      modelAnswer: [
        "Displaced distal third femoral shaft fracture after a hoist incident in a woman who cannot speak.",
        "Pain cues and the behavioural tool, with her mother as the expert on her pain.",
        "Block time, drug and dose. Opioid doses given. The respiratory depression at 21:30 and the naloxone given.",
        "Home sedating medicines and their timing. Aspiration risk and gastrostomy feeding plan.",
        "Needs continuous capnography, pressure care for her contractures, and a bone health referral with vitamin D.",
        "Her mother is the substitute decision maker.",
      ],
      rubric: ["at-pr5", "at-pr3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She has fixation of the fracture the next morning under general anesthesia with a nerve catheter. She goes home after 5 days with a plan for bone density testing and a new hoist sling. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "at-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks her mother how she communicates and shows pain, and how today differs from her usual.",
      points: 2,
      teaching: "In adults with developmental disabilities, behaviour may be the only sign of pain. Caregiver input is the core of the pain assessment.",
      source: "sullivan",
    },
    {
      id: "at-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks the mechanism and time of the hoist incident and how she has been since.",
      points: 1,
      teaching: "A clear mechanism points to the injury and the area to examine. A low energy twist can fracture thin bone in a person who does not bear weight.",
      source: "sullivan",
    },
    {
      id: "at-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about past responses to analgesics and learns of oversedation with morphine and good relief from a regional technique.",
      points: 2,
      teaching: "Every patient given opioids needs an assessment of the risk of advancing sedation and respiratory depression, and the dose and monitoring plan should follow that risk. Her past opioid related hypoxia puts her at high risk.",
      source: "jungquist",
    },
    {
      id: "at-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks the dose and timing of every sedating home medicine, including clobazam and baclofen, and who gives the next doses.",
      points: 2,
      teaching: "Benzodiazepines and other sedatives are strongly linked with death from opioid toxicity. Knowing when they are due prevents an unplanned combination.",
      source: "boyer",
    },
    {
      id: "at-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about other causes of distress, such as constipation, urinary retention, reflux, menses, infection and seizures, and the last tube feed.",
      points: 1,
      teaching: "Use a systematic approach to a change in behaviour. Several treatable causes may coexist with an injury.",
      source: "sullivan",
    },
    {
      id: "at-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Scores her pain with a behavioural checklist for adults who cannot communicate, with her mother's input, rather than a numeric scale.",
      points: 2,
      teaching: "The Non-Communicating Adult Pain Checklist was adapted from the children's version and is sensitive to pain in adults with intellectual and developmental disabilities.",
      source: "lotan",
    },
    {
      id: "at-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Examines her whole body and the left leg, documenting distal pulses, perfusion, compartments and skin, and compares with her baseline contractures.",
      points: 1,
      teaching: "She cannot point to every sore spot. A full body exam with her caregiver present finds other injuries and pressure areas.",
      source: "sullivan",
    },
    {
      id: "at-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential for her distress and recognizes a fragility fracture after low energy trauma.",
      points: 1,
      teaching: "Osteoporosis and fragility fractures are more common and occur at a younger age in people with developmental disabilities.",
      source: "sullivan",
    },
    {
      id: "at-p4",
      competency: "resuscitation",
      criterion: "physical",
      text: "Recognizes opioid induced respiratory depression from the low rate, high end tidal CO2 and small pupils, worsened by clobazam and baclofen.",
      points: 2,
      critical: true,
      teaching: "Respiratory depression is the defining feature of opioid toxicity. Stupor with a respiratory rate of 12 or less calls for bag mask ventilation while naloxone is given.",
      source: "boyer",
    },
    {
      id: "at-m1",
      competency: "management",
      criterion: "management",
      text: "Declines a sedative alone and treats her pain first with a titrated, weight based IV opioid.",
      points: 2,
      critical: true,
      teaching: "Distress in a person who cannot speak is pain until proven otherwise. A sedative alone hides pain and adds airway risk.",
      source: "sullivan",
    },
    {
      id: "at-m2",
      competency: "management",
      criterion: "management",
      text: "Performs an ultrasound guided femoral nerve or fascia iliaca block for the femoral fracture.",
      points: 2,
      teaching: "Ultrasound guided nerve blocks are a core emergency skill and part of a multimodal, opioid sparing pain plan.",
      source: "acep-ugnb",
    },
    {
      id: "at-m3",
      competency: "management",
      criterion: "management",
      text: "Calculates the local anesthetic dose by her 36 kg weight and has 20% lipid emulsion available.",
      points: 1,
      teaching: "Small adults reach toxic doses quickly. If toxicity occurs, give 20% lipid 1.5 mL/kg as a bolus for patients under 70 kg, then an infusion.",
      source: "asra-checklist",
    },
    {
      id: "at-m4",
      competency: "management",
      criterion: "management",
      text: "Splints the leg and limits opioid to small doses for breakthrough pain once the block works.",
      points: 1,
      teaching: "A nerve block is the core of a multimodal, opioid sparing pain plan. With the block working, opioid becomes a small top up rather than the main treatment.",
      source: "acep-ugnb",
    },
    {
      id: "at-m5",
      competency: "resuscitation",
      criterion: "management",
      text: "Supports ventilation and gives naloxone 0.04 mg IV, repeated until breathing is adequate.",
      points: 2,
      critical: true,
      teaching: "Start naloxone at 0.04 mg and increase the dose every 2 minutes if there is no response. Support ventilation in the meantime.",
      source: "boyer",
    },
    {
      id: "at-pr1",
      competency: "assessment",
      criterion: "process",
      text: "Reassesses pain with the behavioural tool after each intervention and before moving her.",
      points: 1,
      teaching: "Repeat the same tool after every step. A falling score shows the plan is working, and a high score before transfer to X ray means more analgesia first.",
      source: "lotan",
    },
    {
      id: "at-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Keeps her on continuous SpO2 and capnography after opioids and after naloxone, and lowers opioid doses once the block works.",
      points: 2,
      teaching: "High risk patients on opioids need extra vigilance, with electronic monitoring and repeated reassessment.",
      source: "jungquist",
    },
    {
      id: "at-pr3",
      competency: "leadership",
      criterion: "process",
      text: "Reconciles her home medicines with her mother and writes clear orders for who gives clobazam and baclofen and when.",
      points: 1,
      teaching: "Caregivers often give home medicines in hospital. Agreeing on one plan prevents hidden doses of sedatives on top of opioids.",
      source: "sullivan",
    },
    {
      id: "at-pr4",
      competency: "communication",
      criterion: "process",
      text: "Explains the fracture, bone fragility and the breathing event honestly and without blame, and makes the surgical decision with her mother as substitute decision maker while involving the patient.",
      points: 2,
      teaching: "Shared decision making includes the person and the caregivers who know her best. The substitute decision maker is guided by what is known of her wishes and interests.",
      source: "sullivan",
    },
    {
      id: "at-pr5",
      competency: "disposition",
      criterion: "process",
      text: "Gives a structured handover with the block, opioid doses, the respiratory event, home medicines, aspiration risk and a bone health referral.",
      points: 2,
      teaching: "Adults with developmental disabilities should be screened for osteoporosis starting in early adulthood. A fragility fracture is the moment to start.",
      source: "sullivan",
    },
  ],
  sources: [
    {
      id: "sullivan",
      citation:
        "Sullivan WF, Diepstra H, Heng J, and colleagues. Primary care of adults with intellectual and developmental disabilities. 2018 Canadian consensus guidelines. Can Fam Physician. 2018.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068/",
    },
    {
      id: "lotan",
      citation:
        "Lotan M, Ljunggren EA, Johnsen TB, Defrin R, Pick CG, Strand LI. A modified version of the Non-Communicating Children Pain Checklist-Revised, adapted to adults with intellectual and developmental disabilities. Sensitivity to pain and internal consistency. J Pain. 2009.",
    },
    {
      id: "acep-ugnb",
      citation: "American College of Emergency Physicians. Ultrasound guided nerve blocks. Policy statement. 2021.",
    },
    {
      id: "asra-checklist",
      citation:
        "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine local anesthetic systemic toxicity checklist. 2020 version. Reg Anesth Pain Med. 2021.",
    },
    {
      id: "jungquist",
      citation:
        "Jungquist CR, Quinlan-Colwell A, Vallerand A, and colleagues. American Society for Pain Management Nursing guidelines on monitoring for opioid-induced advancing sedation and respiratory depression. Revisions. Pain Manag Nurs. 2020.",
    },
    {
      id: "boyer",
      citation: "Boyer EW. Management of opioid analgesic overdose. N Engl J Med. 2012.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
