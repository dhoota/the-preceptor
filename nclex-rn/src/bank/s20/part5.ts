import type { Item } from "@/engine/types";
import { ACR_CONTRAST, HINKLE, JARVIS, PAGANA, POTTER, SPASOVSKI, WANG_CONTRAST, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s20-41", {
      topic: "Care after a barium study",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A client had an upper gastrointestinal series with barium this morning and is ready to go home. Which instruction should the nurse give?",
      rationale:
        "Barium can harden in the colon and cause constipation or impaction. Extra fluids and the prescribed laxative help pass it. Stools are white or chalky for a day or more. The throat is not numbed for a barium study, so the gag reflex is intact. Black stools suggest bleeding or iron, not barium.",
      sources: [PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "Stay NPO until your gag reflex has returned", why: "No throat anesthetic is used for a barium study, so the gag reflex is intact." },
      { text: "Expect black stools for about a week", why: "Barium makes stools white or chalky. Black stools can signal bleeding." },
      { text: "Limit fluids for the rest of today", why: "Limiting fluids lets barium harden and raises the risk of impaction." },
      { text: "Drink extra fluids and take the laxative", why: "Fluids and a laxative help clear the barium from the bowel." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-42", {
      topic: "Severe reaction to iodinated contrast",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "Two minutes after IV iodinated contrast for a CT scan, a 52-year-old client reports throat tightness. The nurse finds hives on the chest and wheezing. BP is 78/44 mmHg, down from 128/80 mmHg, heart rate is 124/minute and SpO2 is 89%. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Hives, throat tightness, wheezing and a fall in BP to 78/44 mmHg within minutes of contrast fit a severe anaphylactic reaction. IM epinephrine treats the airway swelling and the low BP. Oxygen treats the SpO2 of 89%. BP and oxygen saturation show whether treatment is working. The IV line stays in place for fluids and drugs.",
      refs: ["Severe allergic-like contrast reactions are treated with IM epinephrine, oxygen, IV fluids and leg elevation while IV access is kept."],
      sources: [ACR_CONTRAST, WANG_CONTRAST],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Vasovagal reaction", why: "A vasovagal reaction slows the heart. The heart rate here is 124/minute." },
      { text: "Anaphylactic reaction", why: "Hives, wheezing, throat tightness and hypotension after contrast fit anaphylaxis." },
      { text: "Acute kidney injury", why: "Kidney injury develops over days and does not cause hives or wheezing." },
      { text: "Panic attack", why: "Panic does not cause hives or a BP of 78/44 mmHg." },
    ],
    actions: [
      { text: "Give oral diphenhydramine", why: "Antihistamines do not reverse airway swelling or shock and are not first line." },
      { text: "Give IM epinephrine as prescribed", why: "Epinephrine reverses bronchospasm, swelling and low BP." },
      { text: "Remove the peripheral IV catheter", why: "IV access is kept for fluids and emergency drugs." },
      { text: "Give oxygen by face mask", why: "Oxygen treats the low saturation from bronchospasm." },
      { text: "Sit the client up in a chair", why: "Sitting up worsens low BP. The client lies flat with the legs raised." },
    ],
    parameters: [
      { text: "Serum creatinine", why: "Creatinine does not guide the emergency response." },
      { text: "Blood pressure", why: "BP shows whether shock is reversing." },
      { text: "Capillary glucose", why: "Glucose does not reflect this reaction." },
      { text: "Oxygen saturation", why: "SpO2 shows whether bronchospasm is easing." },
      { text: "Body temperature", why: "Temperature does not guide anaphylaxis treatment." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s20-43", {
      topic: "Falling sodium after surgery",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A 42-year-old client had an open abdominal hysterectomy. Because of poor oral intake the client has received IV dextrose 5% in water at 125 mL per hour since surgery. The nurse reviews the flow sheet. Which findings need follow-up? Select all that apply.",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "Day 0, 2000", "Day 1, 0800", "Day 1, 2000", "Day 2, 0800"],
            rows: [
              ["Serum sodium (mEq/L)", "138", "133", "128", "123"],
              ["BP (mmHg)", "124/76", "126/78", "122/74", "128/80"],
              ["Temperature", "37.0°C (98.6°F)", "37.2°C (99.0°F)", "37.1°C (98.8°F)", "37.1°C (98.8°F)"],
              ["SpO2 (%)", "97", "96", "97", "97"],
              ["Headache", "None", "None", "Mild", "Severe"],
              ["Vomiting", "None", "None", "Once", "Twice"],
              ["Orientation", "Oriented", "Oriented", "Oriented", "Confused to time"],
            ],
          },
        },
      ],
      rationale:
        "Surgery raises antidiuretic hormone. Dextrose in water gives free water once the glucose is used. Sodium fell from 138 to 123 mEq/L in less than 2 days. Headache, vomiting and new confusion point to brain swelling from the fall. These findings need urgent report. BP, temperature and SpO2 are stable.",
      refs: ["Hyponatremia is serum sodium below 135 mEq/L (135 mmol/L). Vomiting, headache and confusion with low sodium signal brain swelling."],
      canada: "Canadian labs report sodium in mmol/L only, with the same numbers as mEq/L. The fall reads 138 to 123 mmol/L, and the Medical Council of Canada lists 136 to 146 mmol/L as normal.",
      sources: [SPASOVSKI, HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "sata",
    options: [
      { text: "Sodium falling to 123 mEq/L", why: "A fall from 138 to 123 mEq/L is well below 135 mEq/L." },
      { text: "BP of 128/80 mmHg on day 2", why: "BP has stayed stable across the trend." },
      { text: "Headache that became severe", why: "A worsening headache can signal brain swelling." },
      { text: "Temperature of 37.1°C (98.8°F)", why: "Temperature is normal and stable." },
      { text: "Vomiting twice on day 2", why: "Vomiting with low sodium signals worsening brain swelling." },
      { text: "SpO2 of 97% on day 2", why: "Oxygen saturation is normal and stable." },
      { text: "New confusion to time", why: "New confusion is a sign of severe hyponatremia." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s20-44", {
      topic: "Findings after ileal conduit surgery",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is on day 3 after a radical cystectomy with an ileal conduit. Which findings should the nurse report to the primary health care provider? Select all that apply.",
      rationale:
        "A dusky purple stoma signals poor blood supply and possible necrosis. No urine from the stoma for 2 hours can signal a blocked ureter or a leak at the anastomosis. Fever of 38.7°C with flank pain suggests kidney infection. The conduit is made from bowel, so mucus in the urine is expected. A red, moist stoma and mild swelling are normal early findings.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Threads of mucus in the urine", why: "Bowel lining in the conduit makes mucus. This is expected." },
      { text: "Stoma dusky purple", why: "A dusky stoma signals poor blood supply and possible necrosis." },
      { text: "Stoma red and moist", why: "A red, moist stoma shows good blood supply." },
      { text: "No stoma output for 2 hours", why: "Absent output can signal obstruction or an anastomotic leak." },
      { text: "Mild swelling of the stoma", why: "Mild swelling is expected in the first weeks after surgery." },
      { text: "Fever 38.7°C (101.7°F), flank pain", why: "Fever with flank pain suggests an upper urinary tract infection." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s20-45", {
      topic: "Preparing for an EEG",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client is scheduled for a routine electroencephalogram (EEG) tomorrow morning. Which two instructions should the nurse include? Select two.",
      rationale:
        "Clean hair free of oil, conditioner and spray lets the electrodes make good contact. Caffeine stimulates the brain and can change the tracing, so it is avoided before the test. Seizure drugs are stopped only if the provider prescribes it. Skipping meals can cause low glucose, which changes the tracing. Electrodes record activity and do not shock the client.",
      sources: [PAGANA],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Wash your hair tonight and skip conditioner", why: "Clean, dry hair lets the electrodes stick and record well." },
      { text: "Avoid coffee and cola before the test", why: "Caffeine stimulates the brain and can alter the tracing." },
      { text: "Stop your seizure medicine 3 days before", why: "Seizure drugs are stopped only on a prescription for the test." },
      { text: "Skip breakfast on the morning of the test", why: "Low glucose from fasting can change the EEG tracing." },
      { text: "Expect small shocks from the electrodes", why: "EEG electrodes only record activity and give no shock." },
      { text: "Apply hair gel to improve contact", why: "Gel products block electrode contact." },
    ],
    correct: [0, 1],
  },
  {
    ...meta("rn-s20-46", {
      topic: "Grating lung sound with chest pain",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with pneumonia reports sharp right chest pain on deep breaths. Over the right lower lateral chest the nurse hears a coarse, grating sound during both inspiration and expiration. The sound does not clear with coughing. Which sound is the nurse hearing?",
      rationale:
        "A pleural friction rub is a coarse grating sound from inflamed pleural layers rubbing together. It is heard in both phases of breathing, often over the lower lateral chest. It comes with sharp pain on deep breaths and does not clear with coughing. Rhonchi often clear with coughing. Wheezes are musical. Fine crackles are brief popping sounds.",
      sources: [JARVIS],
    }),
    kind: "mc",
    options: [
      { text: "Pleural friction rub", why: "A grating sound in both phases with pleuritic pain fits inflamed pleura." },
      { text: "Low-pitched rhonchi", why: "Rhonchi come from secretions in large airways and often clear with coughing." },
      { text: "High-pitched wheezes", why: "Wheezes are high-pitched musical sounds from narrowed airways." },
      { text: "Fine late crackles", why: "Fine crackles are brief popping sounds at the end of inspiration." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-47", {
      topic: "Pressure after arterial puncture on heparin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse has just drawn an arterial blood gas sample from the right radial artery of a client receiving a continuous heparin infusion. How long should the nurse hold firm pressure on the site?",
      rationale:
        "An arterial puncture bleeds more than a venous one because of arterial pressure. Pressure is held for at least 5 minutes. A client on heparin needs at least 10 minutes, and longer until bleeding stops. The site is then checked for a hematoma and the hand for circulation.",
      refs: ["Pressure is held on an arterial puncture site for at least 5 minutes, and for at least 10 minutes when the client receives an anticoagulant."],
      sources: [POTTER, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "At least 1 minute", why: "One minute is too short for an arterial puncture." },
      { text: "At least 3 minutes", why: "Three minutes is too short for a client receiving heparin." },
      { text: "At least 5 minutes", why: "Five minutes suits a client without anticoagulants. Heparin prolongs bleeding." },
      { text: "At least 10 minutes", why: "Heparin prolongs bleeding, so pressure is held at least 10 minutes." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-48", {
      topic: "Preparing for a guaiac stool test",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client will collect stool samples at home for a guaiac-based fecal occult blood test. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "The guaiac test detects peroxidase activity from heme. Red meat and peroxidase-rich raw vegetables such as turnips and horseradish can give false positives. High-dose vitamin C can give a false negative. Aspirin and other anti-inflammatory drugs can cause bleeding that is not from disease. Samples come from 3 separate stools. Toilet water and menstrual blood alter the result.",
      refs: ["Before a guaiac test, clients avoid red meat for 3 days and vitamin C above 250 mg a day."],
      canada: "Every provincial and territorial colorectal screening program in Canada uses the fecal immunochemical test (FIT), not a guaiac test. BC Cancer states that FIT needs no diet or medication restrictions. This teaching applies only when a guaiac test is ordered.",
      sources: [PAGANA, { body: "Canadian Partnership Against Cancer", work: "Colorectal Cancer Screening in Canada 2023 to 2024: Screening Parameters", year: 2025, url: "https://www.partnershipagainstcancer.ca/topics/colorectal-screening-canada-2023-2024/programs/screening-parameters/" }, { body: "BC Cancer", work: "Colon Screening: What Is the FIT?", year: 2026, url: "https://www.bccancer.bc.ca/screening/colon/how-it-works/what-is-the-fit" }],
    }),
    kind: "sata",
    options: [
      { text: "Avoid red meat for 3 days before", why: "Heme in red meat can give a false positive result." },
      { text: "Keep taking vitamin C 500 mg daily", why: "Vitamin C above 250 mg a day can give a false negative result." },
      { text: "Collect samples from 3 separate stools", why: "Bleeding from lesions can be intermittent, so several stools are tested." },
      { text: "Collect a sample during your period", why: "Menstrual blood can give a false positive result." },
      { text: "Avoid raw turnips and horseradish", why: "These vegetables contain peroxidase that can give a false positive." },
      { text: "Let the stool touch the toilet water", why: "Toilet water can dilute the sample or add chemicals." },
      { text: "Stop aspirin if your provider agrees", why: "Aspirin can cause stomach bleeding that is not from the disease screened." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s20-49", {
      topic: "Collecting sputum for culture",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with suspected bacterial pneumonia needs a sputum specimen for culture before antibiotics start. Which action should the nurse take?",
      rationale:
        "Rinsing the mouth with water lowers the number of mouth organisms in the sample. The client then coughs deeply to bring up sputum from the lower airways. Antiseptic mouthwash can kill the organisms the culture must grow. Saliva is not sputum. A specimen after antibiotics start can fail to grow the cause.",
      sources: [POTTER, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "Have the client rinse the mouth with water", why: "Water reduces mouth organisms without harming organisms in the sputum." },
      { text: "Have the client use antiseptic mouthwash", why: "Antiseptic can kill organisms and give a false negative culture." },
      { text: "Have the client spit saliva into the cup", why: "Saliva comes from the mouth and does not show lower airway organisms." },
      { text: "Collect sputum after the first antibiotic", why: "Antibiotics can prevent the cause from growing in the culture." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-50", {
      topic: "Teaching for a Holter monitor",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "A client is going home wearing a 24-hour Holter monitor. Which statement by the client shows understanding of the teaching?",
      rationale:
        "A Holter monitor records the heart rhythm during normal daily life. The client keeps a diary of activities and symptoms so the reader can match them to the tracing. The monitor stays dry, so the client does not shower. The leads stay on through sleep. Staying in bed defeats the purpose of recording usual activity.",
      sources: [PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "\"I will shower tonight with the monitor on.\"", why: "Water can damage the recorder and loosen the leads." },
      { text: "\"I will write down my activities and symptoms.\"", why: "A diary lets symptoms be matched to the rhythm recording." },
      { text: "\"I will stay in bed so the tracing is clear.\"", why: "The test records the heart during usual daily activity." },
      { text: "\"I will take the leads off each night while I sleep.\"", why: "The recording continues through the night, so the leads stay on." },
    ],
    correct: 1,
  },
];
