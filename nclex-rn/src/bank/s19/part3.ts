import type { Item } from "@/engine/types";
import { AARC_SUCTION, ACOG_NST, ACR_CONTRAST, ASPEN_EN, ESC_PE, HINKLE, MR_SAFETY, POTTER, STROKE, TONSIL, WONG, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s19-21", {
      topic: "Bleeding after tonsil removal",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 6-year-old child is 4 hours past a tonsillectomy and is resting in bed. Which finding should the nurse report to the surgeon right away?",
      rationale:
        "Frequent swallowing after tonsillectomy is a key sign of bleeding from the tonsil bed. The child swallows blood that trickles down the throat. The nurse inspects the throat with a light and reports promptly. Throat pain, referred ear pain and dark old blood in vomit are expected early after surgery.",
      sources: [WONG, TONSIL],
    }),
    kind: "mc",
    options: [
      { text: "Throat pain rated 4 on a faces scale", why: "Throat pain is expected after tonsillectomy and is treated with analgesics." },
      { text: "Dark brown specks in vomited fluid", why: "Old blood swallowed during surgery can look dark brown and is expected." },
      { text: "Ear pain on both sides", why: "Referred ear pain is common after tonsillectomy." },
      { text: "Frequent swallowing while asleep", why: "Frequent swallowing can mean blood is trickling down the throat from the tonsil bed." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-22", {
      topic: "Reading a nonstress test",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client at 36 weeks of gestation has a nonstress test. Over 20 minutes the fetal heart rate baseline is 140/minute. There are three accelerations that rise 15/minute above baseline and last 20 seconds each. How should the nurse interpret the result?",
      rationale:
        "At 36 weeks, a reactive nonstress test shows at least two accelerations in 20 minutes. Each must peak at least 15/minute above baseline and last at least 15 seconds. This tracing has three accelerations of 15/minute lasting 20 seconds. A reactive result is reassuring about fetal oxygenation.",
      refs: ["After 32 weeks, a reactive nonstress test has at least two accelerations in 20 minutes that each peak at least 15/minute above baseline and last at least 15 seconds."],
      sources: [ACOG_NST],
    }),
    kind: "mc",
    options: [
      { text: "Reactive result showing fetal well-being", why: "Two or more qualifying accelerations in 20 minutes make the test reactive." },
      { text: "Nonreactive result needing a biophysical profile", why: "A nonreactive test lacks qualifying accelerations. This test has three." },
      { text: "Positive result showing placental insufficiency", why: "A positive result belongs to the contraction stress test with late decelerations." },
      { text: "Inconclusive result needing a longer tracing", why: "The tracing already meets the criteria within 20 minutes." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-23", {
      topic: "Sudden breathlessness after knee surgery",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 64-year-old client is on day 3 after a total knee arthroplasty. The client suddenly reports sharp chest pain that worsens on inspiration and says, \"I can't get enough air.\" Heart rate is 124/minute, respirations 30/minute, BP 118/72 mmHg and SpO2 87% on room air. The lungs are clear. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Sudden pleuritic chest pain and dyspnea on day 3 after knee arthroplasty point to pulmonary embolism. A heart rate of 124/minute, respirations of 30/minute and SpO2 of 87% with clear lungs support it. The nurse raises the head of the bed, gives oxygen and calls the rapid response team. SpO2 shows the effect of oxygen. Heart rate and BP show whether the clot is straining the circulation.",
      sources: [ESC_PE, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Postoperative pneumonia", why: "Pneumonia usually brings fever, cough and crackles. The lungs here are clear." },
      { text: "Pulmonary embolism", why: "Sudden pleuritic pain, dyspnea, tachycardia and low SpO2 with clear lungs after joint surgery fit a clot in the lung." },
      { text: "Atelectasis", why: "Atelectasis develops gradually with diminished breath sounds, not sudden severe dyspnea." },
      { text: "Fat embolism syndrome", why: "Fat embolism usually follows long bone fracture and shows confusion and a petechial rash. Neither is present." },
    ],
    actions: [
      { text: "Massage the calf to ease pain", why: "Massaging the leg can dislodge more clot." },
      { text: "Apply oxygen to raise the SpO2", why: "Oxygen treats the hypoxemia from blocked pulmonary blood flow." },
      { text: "Lower the head of the bed flat", why: "Lying flat worsens dyspnea. The head of the bed is raised." },
      { text: "Call the rapid response team", why: "Sudden hypoxemia and tachycardia need urgent team assessment and imaging." },
      { text: "Walk with the client in the hall", why: "Walking adds oxygen demand and can dislodge more clot." },
    ],
    parameters: [
      { text: "Blood glucose level", why: "Glucose does not guide care of a clot in the lung." },
      { text: "Oxygen saturation", why: "SpO2 shows whether oxygen therapy is working." },
      { text: "Serum albumin level", why: "Albumin does not change in the acute phase of this event." },
      { text: "Heart rate and BP", why: "A rising heart rate and falling BP would signal a large clot straining the right heart." },
      { text: "Urine specific gravity", why: "Urine specific gravity does not guide the emergency response." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s19-24", {
      topic: "Leveling an arterial line transducer",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client in the intensive care unit has a radial arterial line. The nurse raises the head of the bed from 0 to 30 degrees. What should the nurse do before recording the next pressure reading?",
      rationale:
        "The transducer must sit at the phlebostatic axis, the fourth intercostal space at the midaxillary line. That point matches the right atrium. When the client's position changes, the nurse relevels the transducer. A transducer below this point reads falsely high and one above reads falsely low. The client does not need to lie flat.",
      refs: ["Pressure readings stay accurate with the head of the bed between 0 and 60 degrees when the transducer is leveled at the phlebostatic axis."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Lower the head of the bed flat for each reading", why: "Readings are valid with the head of the bed up to 60 degrees when the transducer is leveled." },
      { text: "Flush the line with 10 mL of saline", why: "Flushing clears the line but does not correct a change in reference level." },
      { text: "Level the transducer to the phlebostatic axis", why: "The transducer must sit level with the right atrium after a position change." },
      { text: "Move the transducer to the level of the wrist", why: "The reference point is the right atrium, not the insertion site." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-25", {
      topic: "Suctioning a tracheostomy",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a tracheostomy has coarse crackles over the trachea and an SpO2 of 89%. Place the nurse's steps for open suctioning in order.",
      rationale:
        "The nurse gives 100% oxygen first because the SpO2 is already 89%. The catheter goes in with no suction. Suction is applied only on withdrawal and lasts less than 15 seconds. The nurse then reoxygenates and rechecks the SpO2 and breath sounds.",
      refs: ["Each suction pass lasts less than 15 seconds."],
      sources: [AARC_SUCTION, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Suction while withdrawing the catheter", why: "Suction is applied only while the catheter is withdrawn, for less than 15 seconds." },
      { text: "Give 100% oxygen before suctioning", why: "Preoxygenation limits the fall in SpO2 during suctioning." },
      { text: "Apply suction while inserting the catheter", why: "Suction during insertion removes oxygen and injures the airway lining." },
      { text: "Reoxygenate and recheck the SpO2", why: "Oxygen after suctioning restores saturation, and the SpO2 shows the effect." },
      { text: "Insert the catheter with suction off", why: "Suction off during insertion protects the mucosa and saves oxygen." },
      { text: "Hold suction on for 30 seconds", why: "Suction passes last less than 15 seconds to prevent hypoxemia." },
    ],
    correct: [1, 4, 0, 3],
  },
  {
    ...meta("rn-s19-26", {
      topic: "Screening before an MRI",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client is scheduled for an MRI of the brain with gadolinium contrast. Which findings from the screening interview should the nurse report to the MRI team before the scan? Select all that apply.",
      rationale:
        "The MRI magnet can move, heat or disrupt metal and electronic devices. A pacemaker and a metal fragment in the eye need review before the client enters the scanner. Some medication patches contain metal and can burn the skin. An eGFR of 25 raises the risk of harm from gadolinium. Shellfish allergy, lisinopril and a recent vaccine do not affect MRI safety.",
      sources: [MR_SAFETY, ACR_CONTRAST],
    }),
    kind: "sata",
    options: [
      { text: "Takes lisinopril daily for hypertension", why: "Lisinopril does not interact with the magnet or with gadolinium." },
      { text: "Has a cardiac pacemaker", why: "The magnetic field can disrupt a pacemaker. The device needs review before the scan." },
      { text: "Allergic reaction to shellfish as a child", why: "Shellfish allergy does not predict a reaction to gadolinium contrast." },
      { text: "Metal fragment in the eye from welding", why: "The magnet can move a metal fragment and injure the eye." },
      { text: "Received a flu vaccine last week", why: "A recent vaccine has no bearing on MRI safety." },
      { text: "Wears a transdermal medication patch", why: "Some patches contain metal that can heat and burn the skin." },
      { text: "eGFR of 25 mL/min/1.73 m2", why: "Poor kidney function raises the risk of harm from gadolinium." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s19-27", {
      topic: "Headache after lumbar puncture",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client had a lumbar puncture yesterday. Today the client reports a throbbing headache that gets worse when sitting up and eases when lying flat. Neck movement is full and temperature is 36.9°C (98.4°F). Which cause should the nurse suspect?",
      rationale:
        "A headache that worsens when upright and eases when lying flat is typical after lumbar puncture. Spinal fluid leaks through the dural puncture and lowers the pressure around the brain. A normal temperature and full neck movement argue against meningitis. The nurse reports the headache and encourages fluids unless they are restricted.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Bacterial meningitis from the puncture", why: "Meningitis brings fever and neck stiffness. The temperature is normal and the neck moves freely." },
      { text: "Leak of spinal fluid at the puncture site", why: "A headache that worsens upright and eases lying flat fits low pressure from a fluid leak." },
      { text: "Bleeding into the spinal epidural space", why: "An epidural hematoma causes back pain and leg weakness or numbness, not a positional headache." },
      { text: "Tension headache from lying in bed", why: "A tension headache does not change so clearly with position." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-28", {
      topic: "Oral intake after upper endoscopy",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client returns to the unit 30 minutes after an upper endoscopy done with throat spray and moderate sedation. The client asks for a drink of water. What should the nurse do first?",
      rationale:
        "Local anesthetic spray numbs the throat during upper endoscopy. Sedation also blunts protective reflexes. Fluids given before the gag reflex returns can be aspirated. The nurse checks the gag and swallow reflexes first. Once they return, the client starts with small sips of water.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Offer small sips of ice water", why: "Fluid before the gag reflex returns risks aspiration." },
      { text: "Give warm tea to soothe the throat", why: "Any fluid before the gag reflex returns risks aspiration." },
      { text: "Raise the head of the bed and offer juice", why: "Sitting up does not protect the airway if the throat is still numb." },
      { text: "Check that the gag reflex has returned", why: "The spray numbs the throat. Swallowing is safe only once the gag reflex is back." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-29", {
      topic: "Swallow screen after stroke",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client admitted 3 hours ago with an acute ischemic stroke has right-sided weakness and slurred speech. Oral aspirin is prescribed. The client is awake and asks for a drink. What should the nurse do first?",
      rationale:
        "Stroke often impairs swallowing, and aspiration can be silent. Slurred speech and one-sided weakness raise the risk. Guidelines call for a dysphagia screen before the client takes food, fluid or oral medicines. If the client fails the screen, oral intake is held and a speech-language assessment is requested.",
      sources: [STROKE],
    }),
    kind: "mc",
    options: [
      { text: "Complete a bedside swallow screen", why: "A swallow screen comes before any food, fluid or oral drug to detect aspiration risk." },
      { text: "Give the aspirin with applesauce", why: "Thickened food does not remove aspiration risk before a screen." },
      { text: "Offer a small cup of water", why: "Water given before a swallow screen can be aspirated silently." },
      { text: "Crush the aspirin into juice", why: "Crushing the tablet does not make swallowing safe before a screen." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-30", {
      topic: "Aspiration risk with tube feeding",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client receives continuous nasogastric tube feedings after a stroke. Which actions should the nurse plan to lower the risk of aspiration? Select all that apply.",
      rationale:
        "Tube feeding raises aspiration risk, and stroke adds weak swallowing and cough. The head of the bed stays at 30 to 45 degrees. The feeding is paused when the client must lie flat. Regular checks of tube position catch a tube that has moved. Coughing or labored breathing during feeds can signal aspiration. Sedatives and large bolus feeds raise the risk.",
      sources: [ASPEN_EN, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Lower the head of the bed flat at night", why: "Lying flat lets the feeding reflux into the airway." },
      { text: "Keep the head of the bed at 30 to 45 degrees", why: "An upright position reduces reflux and aspiration." },
      { text: "Give a sedative at night to stop tube pulling", why: "Sedation blunts the cough and gag reflexes and raises aspiration risk." },
      { text: "Check tube position every 4 hours", why: "Regular checks catch a tube that has moved out of the stomach." },
      { text: "Switch to bolus feeds given by syringe", why: "Large bolus volumes raise gastric pressure and reflux in a high-risk client." },
      { text: "Watch for coughing or labored breathing", why: "Coughing or labored breathing during a feed can signal aspiration." },
      { text: "Pause feeding when the client must lie flat", why: "Stopping the feed while flat limits reflux into the airway." },
    ],
    correct: [1, 3, 5, 6],
  },
];
