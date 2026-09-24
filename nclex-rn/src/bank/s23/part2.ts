import type { Item } from "@/engine/types";
import { AFIB, ALS, ARDS, HHS, HINKLE, PERI, PLEURA, THYROID, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s23-11", {
      topic: "Severe hypothyroid state after stopping treatment",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 79-year-old client with hypothyroidism stopped taking levothyroxine 2 months ago. The client is now lethargic. Temperature is 34.9°C (94.8°F), heart rate 46/minute, respiratory rate 8/minute and BP 92/58 mmHg. Serum sodium is 126 mEq/L (126 mmol/L). Which condition should the nurse suspect?",
      rationale:
        "Stopping levothyroxine for 2 months can lead to severe hypothyroidism in an older adult. Myxedema coma slows metabolism throughout the body. It causes hypothermia, bradycardia, hypoventilation, hypotension, lethargy and low sodium. The temperature of 34.9°C, heart rate of 46/minute and sodium of 126 mEq/L fit this pattern. Thyroid storm causes fever and a fast pulse instead.",
      sources: [THYROID, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Thyroid storm", why: "Thyroid storm causes fever and tachycardia, the opposite of these findings." },
      { text: "Adrenal crisis", why: "Adrenal crisis causes low BP with a fast pulse. It does not explain hypothermia and bradycardia after stopping levothyroxine." },
      { text: "Opioid overdose", why: "The stem gives no opioid use, and opioids do not explain the low sodium after stopping thyroid hormone." },
      { text: "Myxedema coma", why: "Hypothermia, bradycardia, slow breathing, low sodium and lethargy after stopping levothyroxine fit severe hypothyroidism." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-12", {
      topic: "Chest findings with collapsed lung",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 22-year-old tall, thin client arrives with sudden sharp left chest pain and breathlessness that began at rest. Respiratory rate is 26/minute and SpO2 is 92%. A spontaneous pneumothorax is suspected. Which findings should the nurse expect on the left side? Select all that apply.",
      rationale:
        "Air in the pleural space collapses part of the lung. The affected side moves less with each breath. Air muffles sound, so breath sounds are diminished. An air-filled space gives a hyperresonant percussion note. Tactile fremitus falls because air dampens vibration. Dullness and increased fremitus point to fluid or consolidation. Crackles come from fluid in the alveoli.",
      sources: [PLEURA, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Coarse crackles on auscultation", why: "Crackles come from fluid in the airways or alveoli, not air in the pleural space." },
      { text: "Dull note on percussion", why: "Dullness points to fluid or consolidation. Air gives a hyperresonant note." },
      { text: "Diminished breath sounds", why: "Air between the lung and chest wall muffles breath sounds." },
      { text: "Increased tactile fremitus", why: "Fremitus rises with consolidation. Air in the pleural space reduces it." },
      { text: "Hyperresonant percussion note", why: "An air-filled pleural space gives a hollow, hyperresonant note." },
      { text: "Reduced chest wall movement", why: "The collapsed side expands less with each breath." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s23-13", {
      topic: "Positional chest pain after a viral illness",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 34-year-old client had a viral illness 10 days ago. The client now reports sharp chest pain that worsens with deep breaths and lying down and eases when leaning forward. A scratchy sound is heard at the left lower sternal border. Temperature is 38.1°C (100.6°F). Which condition do these findings suggest?",
      rationale:
        "Inflamed pericardial layers rub against each other. That causes sharp pain that worsens with breathing and lying flat. Leaning forward moves the heart away from the inflamed surface and eases the pain. The scratchy sound is a pericardial friction rub. A recent viral illness and a temperature of 38.1°C fit a viral cause.",
      sources: [PERI],
    }),
    kind: "mc",
    options: [
      { text: "Stable angina", why: "Angina is pressure brought on by exertion and eased by rest, not by a change of position." },
      { text: "Acute pericarditis", why: "Sharp positional pain eased by leaning forward and a friction rub fit pericardial inflammation." },
      { text: "Pulmonary embolism", why: "Embolism causes sudden breathlessness and pleuritic pain, but leaning forward does not ease it." },
      { text: "Esophageal spasm", why: "Esophageal pain relates to swallowing and does not produce a friction rub." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-14", {
      topic: "Blood gas in a sedated ventilated client",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client on mechanical ventilation after a drug overdose has a set rate of 24 breaths/minute. The client is sedated and is not breathing above the set rate. Blood gas results are pH 7.53, PaCO2 27 mmHg and HCO3 23 mEq/L (23 mmol/L). Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A pH of 7.53 is alkalotic. The PaCO2 of 27 mmHg is low and matches the alkalosis, so the cause is respiratory. The HCO3 of 23 mEq/L is normal, so the kidneys have not compensated. A sedated client breathing only at a set rate of 24 breaths/minute is blowing off too much carbon dioxide. The provider may lower the rate or the tidal volume.",
      refs: ["Normal arterial values are pH 7.35 to 7.45, PaCO2 35 to 45 mmHg and HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client has {0} caused by {1}.",
    blanks: [
      {
        options: [
          { text: "metabolic alkalosis", why: "The HCO3 of 23 mEq/L is normal, so the alkalosis is not metabolic." },
          { text: "respiratory alkalosis", why: "A pH of 7.53 with a low PaCO2 of 27 mmHg is respiratory alkalosis." },
          { text: "respiratory acidosis", why: "The pH of 7.53 is alkalotic, not acidotic." },
          { text: "metabolic acidosis", why: "The pH is high and the HCO3 is normal, so this is not metabolic acidosis." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "loss of bicarbonate", why: "Bicarbonate loss lowers the pH. The HCO3 here is normal." },
          { text: "carbon dioxide retention", why: "Retained carbon dioxide raises the PaCO2. Here it is low at 27 mmHg." },
          { text: "a high ventilator rate", why: "A set rate of 24 breaths/minute in a sedated client removes too much carbon dioxide." },
          { text: "loss of gastric acid", why: "Gastric acid loss raises the HCO3. Here the HCO3 is normal." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s23-15", {
      topic: "Low-pressure ventilator alarm",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The low-pressure alarm sounds on the ventilator of a client with a tracheostomy. SpO2 is 95% and the client appears comfortable. What should the nurse do first?",
      rationale:
        "A low-pressure alarm means the ventilator senses less resistance than expected. The usual cause is a leak or a disconnection in the circuit or at the tracheostomy. SpO2 of 95% shows the client is stable enough for a quick check of the tubing. A client in distress would first be ventilated with a manual bag. Secretions and agitation raise pressure and trigger the high-pressure alarm.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Suction the tracheostomy tube", why: "Secretions raise airway pressure and set off the high-pressure alarm, not the low one." },
      { text: "Silence the alarm for 2 minutes", why: "Silencing the alarm before finding the cause can leave a disconnection unnoticed." },
      { text: "Check the tubing for a disconnection", why: "A leak or a loose connection is the usual cause of low pressure." },
      { text: "Give the prescribed sedative", why: "Agitation and fighting the ventilator raise pressure. They do not cause a low-pressure alarm." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-16", {
      topic: "Severe hyperglycemia without ketosis",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 76-year-old client with type 2 diabetes is brought from home after 5 days of increasing thirst and confusion. Mucous membranes are dry. Heart rate is 118/minute and BP is 96/58 mmHg. Glucose is 940 mg/dL (52.2 mmol/L). Serum osmolality is 356 mOsm/kg. Arterial pH is 7.37 and urine ketones are trace. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Type 2 diabetes, days of thirst, confusion, a glucose of 940 mg/dL and an osmolality of 356 mOsm/kg fit hyperosmolar hyperglycemic state. A pH of 7.37 and trace ketones rule out ketoacidosis. Severe volume loss is the main threat, so IV 0.9% sodium chloride comes first. IV insulin lowers the glucose. Osmolality is lowered gradually to limit brain swelling. Insulin drives potassium into cells, so potassium is monitored.",
      refs: ["Hyperosmolar hyperglycemic state is defined by glucose of 600 mg/dL (33.3 mmol/L) or higher, effective osmolality above 300 mOsm/kg or total serum osmolality above 320 mOsm/kg, and little or no ketosis or acidosis."],
      sources: [HHS, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }, { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15" }],
      canada: "Canadian labs report glucose in mmol/L only. Diabetes Canada says glucose in hyperosmolar hyperglycemic state is typically 34.0 mmol/L or higher, with plasma osmolality above 320 mmol/kg."
    }),
    kind: "bowtie",
    conditions: [
      { text: "Diabetic ketoacidosis", why: "A pH of 7.37 and trace ketones rule out ketoacidosis." },
      { text: "Hyperosmolar hyperglycemic state", why: "Glucose of 940 mg/dL, osmolality of 356 mOsm/kg and no acidosis fit this state." },
      { text: "Lactic acidosis from sepsis", why: "The pH is 7.37, so there is no acidosis. The stem gives no sign of infection." },
      { text: "Acute ischemic stroke", why: "Confusion here is explained by the high osmolality. The stem gives no focal deficit." },
    ],
    actions: [
      { text: "Infuse IV 0.9% sodium chloride", why: "Isotonic fluid restores the large volume deficit, which is the first need." },
      { text: "Give IV sodium bicarbonate", why: "The pH is 7.37, so there is no acidosis to correct." },
      { text: "Restrict fluids to 1 L a day", why: "Restricting fluid would deepen the dehydration and raise osmolality." },
      { text: "Start the prescribed IV insulin", why: "IV insulin lowers the glucose once fluid replacement is under way." },
      { text: "Encourage oral fluids by cup", why: "A confused client may aspirate, and oral intake cannot replace the deficit fast enough." },
    ],
    parameters: [
      { text: "Serum lipase level", why: "Lipase tracks pancreatitis. It does not guide this treatment." },
      { text: "Serum osmolality", why: "Osmolality is lowered gradually to avoid brain swelling." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of control and does not guide acute care." },
      { text: "Serum potassium level", why: "Insulin moves potassium into cells, so the level can fall quickly." },
      { text: "Peak expiratory flow", why: "Peak flow measures airway narrowing and does not guide this treatment." },
    ],
    correct: { condition: 1, actions: [0, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s23-17", {
      topic: "Priority after high-voltage electrical injury",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 36-year-old electrician is brought in after contact with a high-voltage line. There is a small burn on the right palm and another on the left heel. The client is alert. Heart rate is 104/minute and BP is 128/80 mmHg. Which assessment should the nurse plan as the priority?",
      rationale:
        "Current passing from a hand to the opposite foot crosses the heart. Electrical injury can cause ventricular dysrhythmias and cardiac arrest, sometimes after a delay. Continuous monitoring detects a lethal rhythm early. Small entry and exit wounds hide deep muscle damage, so wound size underestimates the injury. Tetanus status and pain matter but do not threaten life first.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Continuous cardiac monitoring", why: "Current crossing the chest can trigger a lethal rhythm, so the heart is watched first." },
      { text: "Measuring the size of the burns", why: "Small surface wounds hide deep tissue damage, so size is a poor guide and not the priority." },
      { text: "Checking tetanus immunization", why: "Tetanus status is needed for a burn but is not the first concern." },
      { text: "Rating pain on a 0 to 10 scale", why: "Pain matters, but a rhythm problem threatens life sooner." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-18", {
      topic: "Why atrial fibrillation raises stroke risk",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 2,
      stem: "A 70-year-old client has new atrial fibrillation with a ventricular rate of 88/minute. The client asks why a blood thinner is needed. Which mechanism should the nurse's answer be based on?",
      rationale:
        "In atrial fibrillation the atria quiver instead of contracting. Blood pools, mostly in the left atrial appendage, and can form a clot. A clot that leaves the left heart can lodge in a brain artery and cause a stroke. Anticoagulation lowers that risk. The ventricular rate of 88/minute is controlled, but the stroke risk remains.",
      sources: [AFIB],
    }),
    kind: "mc",
    options: [
      { text: "A fast pulse damages the carotid artery walls", why: "The rate does not injure the carotids. The clot forms in the atria." },
      { text: "Low cardiac output forms clots in leg veins", why: "Leg vein clots travel to the lungs, not the brain. The stroke risk comes from the atria." },
      { text: "An irregular rhythm raises pressure in the brain", why: "The rhythm does not raise pressure in the brain. Stroke comes from an embolus." },
      { text: "Blood pools in the quivering atria and clots", why: "Stasis in the atria allows a clot that can travel to the brain." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-19", {
      topic: "Stable narrow-complex tachycardia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 29-year-old client reports sudden palpitations. The monitor shows a regular narrow-complex tachycardia at 188/minute. BP is 118/76 mmHg. The client is alert, with no chest pain and no breathlessness. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A regular narrow-complex rhythm at 188/minute in an alert client with BP 118/76 mmHg is stable supraventricular tachycardia. A 12-lead ECG records the rhythm. Vagal maneuvers are tried first. Adenosine by rapid IV push follows if they fail, so IV access is needed. Defibrillation is for pulseless rhythms. Atropine speeds the heart. Pressing both carotids at once can cut blood flow to the brain.",
      sources: [ALS],
    }),
    kind: "sata",
    options: [
      { text: "Obtain a 12-lead ECG", why: "A 12-lead ECG records the rhythm and helps confirm its type." },
      { text: "Prepare for immediate defibrillation", why: "Defibrillation is for pulseless rhythms. This client is stable." },
      { text: "Coach the client in a vagal maneuver", why: "Vagal maneuvers can slow conduction through the AV node and end the rhythm." },
      { text: "Give atropine IV as prescribed", why: "Atropine speeds the heart and is used for symptomatic bradycardia." },
      { text: "Prepare adenosine for rapid IV push", why: "Adenosine is the next step if vagal maneuvers fail." },
      { text: "Start or confirm IV access", why: "Adenosine needs a working IV line close to the heart." },
      { text: "Massage both carotid arteries together", why: "Pressing both carotids at once can cut blood flow to the brain." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s23-20", {
      topic: "Response to prone positioning",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with severe acute respiratory distress syndrome is on mechanical ventilation with FiO2 0.80. Before prone positioning, PaO2 was 56 mmHg. The client has now been prone for 16 hours with no change in ventilator settings. Which finding shows the intervention is helping?",
      rationale:
        "Prone positioning opens collapsed lung regions near the back and matches ventilation to blood flow better. A PaO2 rise from 56 to 84 mmHg on the same FiO2 of 0.80 shows better oxygenation. A rising heart rate suggests stress or instability. Higher airway pressure means stiffer lungs. Facial swelling is a known side effect of lying prone.",
      refs: ["Adults with severe ARDS are placed prone for more than 12 hours a day."],
      sources: [ARDS],
    }),
    kind: "mc",
    options: [
      { text: "Heart rate rose to 112/minute", why: "A rising heart rate suggests stress or instability, not benefit." },
      { text: "PaO2 rose to 84 mmHg", why: "A higher PaO2 on the same FiO2 shows better oxygenation." },
      { text: "Peak airway pressure rose to 36 cm H2O", why: "Higher airway pressure means the lungs are stiffer, not better." },
      { text: "New swelling of the face", why: "Facial swelling is a side effect of lying prone, not a sign of benefit." },
    ],
    correct: 1,
  },
];
