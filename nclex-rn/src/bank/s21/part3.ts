import type { Item } from "@/engine/types";
import { AANN_EVD, ASPMN, ASRA, HINKLE, NPIAP, POTTER, VAP, meta } from "./common";

/** s21 items 21 to 30. Drains, ventilation, epidural analgesia, opioid sedation, wound therapy and pressure injury risk. */
export const PART3: Item[] = [
  {
    ...meta("rn-s21-21", {
      topic: "Moving a client with a ventricular drain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with a subarachnoid hemorrhage has an external ventricular drain open to drain. The prescription sets the drip chamber at 15 cm above the tragus. The head of the bed is at 30 degrees. The client must be moved up in bed. Which action should the nurse take before the move?",
      rationale:
        "The drain height is set against the tragus. When the head moves, the height of the chamber against the tragus changes. Cerebrospinal fluid can then drain too fast or too slowly. Clamping the drain for the move prevents both. After the move the nurse relevels the chamber at 15 cm above the tragus and reopens the drain. Ventricular drains are not flushed by nurses.",
      sources: [AANN_EVD, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Empty the collection bag into a graduate", why: "Emptying the bag does not protect against over drainage during the move." },
      { text: "Clamp the drain until it is releveled", why: "Clamping stops sudden drainage while the head moves against the chamber." },
      { text: "Flush the drain tubing with saline", why: "Flushing can push fluid or bacteria into the ventricle. Nurses do not flush the drain." },
      { text: "Raise the drip chamber 10 cm higher", why: "The height is set by prescription. Changing it alters the drainage." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-22", {
      topic: "Causes of a high-pressure ventilator alarm",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The high-pressure alarm sounds several times on the ventilator of an intubated client. Which findings could explain this alarm? Select all that apply.",
      rationale:
        "A high-pressure alarm means the ventilator meets resistance as it delivers each breath. Biting the tube, kinked tubing, thick secretions and bronchospasm all narrow the path for air. A deflated cuff, a loose connection and a tube pulled above the cords let air escape. Escaping air lowers pressure and triggers the low-pressure alarm instead.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Air escaping around a deflated tube cuff", why: "A cuff leak lowers airway pressure and sets off the low-pressure alarm." },
      { text: "Client biting on the tube", why: "Biting narrows the tube and raises the pressure of each breath." },
      { text: "Loose connection at the humidifier chamber", why: "A loose connection leaks air and lowers pressure." },
      { text: "Tubing kinked under the arm", why: "A kink blocks flow and raises pressure." },
      { text: "Thick secretions in the airway", why: "Secretions narrow the airway and raise the pressure needed for each breath." },
      { text: "New wheezing from bronchospasm", why: "Narrowed bronchi resist airflow and raise peak pressure." },
      { text: "Tube tip pulled up above the vocal cords", why: "A displaced tube leaks air into the pharynx and lowers pressure." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s21-23", {
      topic: "Lowering ventilator pneumonia risk",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is expected to need mechanical ventilation for several days after a severe pneumonia. Which measures should the nurse include in the plan to lower the risk of ventilator-associated pneumonia? Select all that apply.",
      rationale:
        "Raising the head of the bed limits aspiration of stomach contents. Daily sedation pauses and breathing trials shorten time on the ventilator. Toothbrushing reduces mouth bacteria. Early mobility supports faster weaning. Routine circuit changes add no benefit and are done only when the circuit is soiled or faulty. Saline instillation before suctioning is not recommended. A flat supine position raises aspiration risk.",
      sources: [VAP],
    }),
    kind: "sata",
    options: [
      { text: "Change the ventilator circuit every 24 hours", why: "Routine changes do not lower pneumonia risk. The circuit is changed when soiled or faulty." },
      { text: "Raise the head of the bed to 30 to 45 degrees", why: "An upright position limits aspiration of gastric contents." },
      { text: "Keep the client supine and flat in bed", why: "A flat position raises the risk of aspiration." },
      { text: "Pause sedation daily as prescribed", why: "Sedation breaks allow breathing trials and earlier extubation." },
      { text: "Brush the client's teeth", why: "Toothbrushing lowers the bacterial load in the mouth." },
      { text: "Instill saline before each suction pass", why: "Saline instillation can push bacteria deeper and is not recommended." },
      { text: "Begin early mobility", why: "Early mobility supports weaning and shortens ventilation." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s21-24", {
      topic: "Rising level of an epidural block",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 2 hours after an open abdominal operation and has a thoracic epidural infusion of bupivacaine and fentanyl. BP is 82/48 mmHg, down from 128/74 mmHg, and heart rate is 54/minute. Both hands tingle and the grip is weak. Loss of cold sensation extends up to the collarbones. Respirations are 18/minute and SpO2 is 96%. Incision pain is 2 of 10. The epidural dressing is dry. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Loss of cold sensation up to the collarbones shows the block has climbed above the chest. Tingling hands and a weak grip show it is reaching the nerves of the arms. A high block blocks sympathetic nerves, so the BP falls to 82/48 mmHg and the heart slows to 54/minute. Respirations of 18/minute and an SpO2 of 96% show breathing is still adequate. The nurse stops the infusion and notifies the provider.",
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "a high epidural block", why: "A rising sensory level with arm symptoms and low BP fits a block spreading upward." },
          { text: "hypovolemic shock", why: "Volume loss raises the heart rate. This client's heart rate is 54/minute." },
          { text: "opioid respiratory depression", why: "Respirations are 18/minute and SpO2 is 96%." },
          { text: "an epidural site infection", why: "The dressing is dry and the findings are 2 hours after surgery." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "numbness up to the collarbones", why: "A sensory level at the collarbones is well above the level needed for abdominal surgery." },
          { text: "a dry epidural dressing", why: "A dry dressing is expected and points to no complication." },
          { text: "respirations of 18/minute", why: "This rate is normal and does not point to a high block." },
          { text: "incision pain rated 2 of 10", why: "Mild pain shows the epidural is working as intended." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "tingling hands with a weak grip", why: "Arm symptoms show the block has reached the cervical nerves." },
          { text: "an SpO2 reading of 96%", why: "An SpO2 of 96% is adequate and does not signal a problem." },
          { text: "incision pain of 2 of 10", why: "Mild pain is expected with a working epidural." },
          { text: "a dry catheter site dressing", why: "A dry dressing shows no leak at the site." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s21-25", {
      topic: "New leg weakness after epidural removal",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 74-year-old client had a lumbar epidural catheter removed at 0800 on day 2 after a knee replacement. Enoxaparin 40 mg subcut was given at 1000. At 1500 the client reports new sharp back pain and says both legs feel heavy and numb. Leg strength is 2 of 5 in both legs, down from 5 of 5 at 1200. The client has not voided since 0900. A bladder scan shows 650 mL. Temperature is 36.9°C (98.4°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Enoxaparin was given 2 hours after catheter removal, earlier than the 4 hour minimum. New back pain, weakness in both legs and a bladder of 650 mL fit a spinal epidural hematoma pressing on the cord. The temperature of 36.9°C argues against an abscess. Strength was normal at 1200, so this is not a leftover block. Outcome depends on emergency imaging and decompression, so the provider is called at once. Anticoagulation is held.",
      refs: ["Prophylactic enoxaparin is given no sooner than 4 hours after an epidural catheter is removed."],
      sources: [ASRA, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Spinal epidural hematoma", why: "Anticoagulant given soon after removal, back pain and new weakness in both legs fit a hematoma." },
      { text: "Spinal epidural abscess", why: "An abscess develops over days with fever. The temperature is 36.9°C." },
      { text: "Residual local anesthetic block", why: "Strength was 5 of 5 at 1200, after the catheter was out. The weakness is new." },
      { text: "Deep vein thrombosis", why: "A clot causes calf swelling and pain in one leg, not weakness in both." },
    ],
    actions: [
      { text: "Notify the provider for emergency imaging", why: "Cord compression needs imaging and surgery within hours." },
      { text: "Apply a heating pad to the lower back", why: "Heat does not treat compression and may delay the correct response." },
      { text: "Help the client walk to the bathroom", why: "The client has leg strength of 2 of 5 and would fall." },
      { text: "Hold the next enoxaparin dose", why: "More anticoagulant can enlarge the bleed." },
      { text: "Give oral ibuprofen for the back pain", why: "Ibuprofen adds bleeding risk and masks a key symptom." },
    ],
    parameters: [
      { text: "Leg strength and sensation", why: "Serial checks show whether cord compression is worsening." },
      { text: "Drainage on the knee incision dressing", why: "The knee incision is not the source of these findings." },
      { text: "Serum albumin level", why: "Albumin does not guide care of cord compression." },
      { text: "Bladder volume and voiding", why: "Urinary retention reflects the cord level and guides catheter use." },
      { text: "Oral temperature every 4 hours", why: "The temperature is normal and does not track a hematoma." },
    ],
    correct: { condition: 0, actions: [0, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s21-26", {
      topic: "Sedation scale during opioid therapy",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client received IV hydromorphone 45 minutes ago after a spinal fusion. The client drifts off to sleep in the middle of a sentence. Respirations are 10/minute and SpO2 is 93% on 2 L/minute. The nurse rates sedation at level 3 on the Pasero Opioid-Induced Sedation Scale. Pain was 7 of 10 before the dose. What should the nurse do?",
      rationale:
        "Level 3 means the client is often drowsy and drifts off during talk. It is unacceptable sedation and comes before respiratory depression. The nurse holds more opioid, keeps the client awake and asks the prescriber to lower the dose. Naloxone is kept for a client who cannot be roused or is not breathing enough. Waiting an hour leaves the risk unwatched.",
      sources: [ASPMN],
    }),
    kind: "mc",
    options: [
      { text: "Give the next dose if pain stays above 4", why: "Pain relief waits. More opioid now would deepen sedation." },
      { text: "Recheck sedation in 1 hour as usual", why: "Level 3 needs closer checks and action now, not routine timing." },
      { text: "Give naloxone 0.4 mg IV push undiluted", why: "Naloxone is for a client who cannot be roused or breathes too little, and it is titrated in dilute doses. A full push reverses all pain relief." },
      { text: "Hold further opioid and rouse the client", why: "Holding the opioid and stimulating the client treats level 3 sedation." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s21-27", {
      topic: "Opioid safety with sleep apnea",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with obstructive sleep apnea uses CPAP at home. On day 1 after a laparoscopic colectomy the client has an IV opioid pump that the client controls with a button. Which two actions should the nurse include in the plan of care? Select two.",
      rationale:
        "Sleep apnea and opioids together raise the risk of airway collapse and hypoventilation during sleep. The client's own CPAP keeps the airway open. Continuous pulse oximetry, or capnography where available, detects falling ventilation between checks. A sedative adds to the depression. Only the client presses the analgesia button. A flat supine position worsens obstruction.",
      sources: [ASPMN],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Give a sedative-hypnotic for sleep at bedtime", why: "A sedative adds to opioid respiratory depression." },
      { text: "Apply the client's CPAP during sleep", why: "CPAP keeps the upper airway open during sleep." },
      { text: "Let family press the button while the client sleeps", why: "Only the client should press the button. Proxy dosing bypasses the sedation safety check." },
      { text: "Keep the client flat on the back for sleep", why: "Lying supine lets the tongue and soft palate block the airway." },
      { text: "Use continuous pulse oximetry monitoring", why: "Continuous monitoring catches hypoventilation during sleep." },
      { text: "Remove the CPAP mask to allow the opioid to work", why: "CPAP does not reduce pain relief. Removing it raises airway risk." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s21-28", {
      topic: "Bleeding during negative pressure wound therapy",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client receiving a therapeutic heparin infusion is on day 2 after debridement of a thigh wound. Negative pressure wound therapy runs at 125 mmHg. In the past 30 minutes, 150 mL of bright red blood has filled the tubing and canister. The foam dressing is sealed. Temperature is 37.1°C (98.8°F). Complete the sentence by dragging the correct words into the blanks.",
      rationale:
        "Bright red drainage of 150 mL in 30 minutes in a client on heparin shows active bleeding. Suction can keep drawing blood from the wound. The nurse stops the therapy, applies pressure and notifies the provider at once. A sealed dressing and a temperature of 37.1°C do not point to infection or any other listed problem.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The client is at risk for {0} as evidenced by {1}.",
    targets: ["Condition", "Evidence"],
    tokens: [
      { text: "hemorrhage", why: "Heavy bright red drainage in a client on heparin shows active bleeding." },
      { text: "a localized wound infection", why: "The temperature is 37.1°C and the drainage is bright red blood, not pus." },
      { text: "150 mL of bright red drainage", why: "This volume in 30 minutes shows active bleeding into the canister." },
      { text: "a sealed foam dressing without leaks", why: "A sealed dressing shows the system is working. It is not a warning sign." },
      { text: "fluid volume excess from infusions", why: "The client is losing blood, not retaining fluid." },
      { text: "a temperature of 37.1°C (98.8°F)", why: "This temperature is normal and supports no listed condition." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s21-29", {
      topic: "Scoring pressure injury risk",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 81-year-old client on bed rest has these Braden subscale scores: sensory perception 2, moisture 2, activity 1, mobility 2, nutrition 2, and friction and shear 1. How should the nurse interpret the total score?",
      rationale:
        "The six subscales add to 10. A total of 10 to 12 means high risk for pressure injury. A total of 9 or less means severe risk. The client needs a pressure redistribution surface, a turning schedule and heel offloading.",
      refs: ["Braden totals: 15 to 18 mild risk, 13 to 14 moderate risk, 10 to 12 high risk, 9 or less severe risk."],
      calc: { expr: "2 + 2 + 1 + 2 + 2 + 1", answer: 10, unit: "points", round: 0, steps: ["2 + 2 + 1 + 2 + 2 + 1 = 10"] },
      sources: [POTTER, NPIAP],
    }),
    kind: "mc",
    options: [
      { text: "10, mild risk", why: "Mild risk is a total of 15 to 18." },
      { text: "10, high risk", why: "A total of 10 falls in the 10 to 12 high risk band." },
      { text: "10, severe risk", why: "Severe risk is a total of 9 or less." },
      { text: "13, moderate risk", why: "The subscales add to 10, not 13." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-30", {
      topic: "Protecting the heels on bed rest",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client on bed rest after a stroke has a Braden score of 11. Both heels are intact with redness that blanches when pressed. Which action best protects the heels?",
      rationale:
        "Blanching redness is an early warning, not yet a pressure injury. Floating the heels on a pillow under the calves removes pressure from the heels. The knee is slightly bent. Massage can damage fragile tissue. Ring cushions concentrate pressure around the ring. A high head of bed raises shear on the sacrum and heels.",
      sources: [NPIAP],
    }),
    kind: "mc",
    options: [
      { text: "Float the heels on a pillow under the calves", why: "This lifts the heels off the mattress and removes the pressure." },
      { text: "Massage the red areas of both heels", why: "Massage can injure tissue that is already under pressure." },
      { text: "Place a ring cushion under each heel", why: "A ring concentrates pressure on the tissue around it." },
      { text: "Keep the head of the bed raised to 60 degrees", why: "A steep head of bed makes the client slide and adds shear." },
    ],
    correct: 0,
  },
];
