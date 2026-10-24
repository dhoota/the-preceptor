import type { Item } from "@/engine/types";
import { HINKLE, KAPLAN_VARICES, LENDERS_PHEO, LEONHARD_GBS, MILLER_ALS, VILSTRUP_HE, WENDELL_MG, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s38-01", {
      need: "PA",
      topic: "Swinging pulse and pressure in ascending paralysis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 46-year-old client is on day 5 of Guillain-Barre syndrome. The weakness has now reached the arms. Over the past 2 hours the heart rate has ranged from 44 to 136/minute. The BP has ranged from 84/50 to 186/102 mmHg. The client has no pain and no fever. Which condition do these findings most suggest?",
      rationale:
        "Guillain-Barre syndrome can damage the autonomic nerves as well as the motor nerves. Swings in heart rate from 44 to 136/minute and in BP from 84/50 to 186/102 mmHg fit dysautonomia. These swings can lead to dangerous arrhythmias. The client needs ECG, heart rate and BP monitoring. The client has no spinal cord injury, so autonomic dysreflexia does not apply.",
      sources: [LEONHARD_GBS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Autonomic dysreflexia from a trigger", why: "Autonomic dysreflexia follows a spinal cord injury at T6 or above. This client has none, and the BP also falls." },
      { text: "Hypovolemia from poor oral intake", why: "Low volume gives a low BP with a fast pulse. It does not push the BP up to 186/102 mmHg." },
      { text: "Dysautonomia from nerve involvement", why: "Damage to autonomic nerves in this syndrome causes unstable heart rate and BP." },
      { text: "Pulmonary embolism from immobility", why: "An embolism causes a fast pulse and low oxygen. It does not cause a pulse that drops to 44/minute and then climbs." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s38-02", {
      need: "PA",
      topic: "Why the cholinesterase inhibitor stops on the ventilator",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 4,
      stem: "A 52-year-old client with myasthenia gravis develops pneumonia and then a myasthenic crisis. The client is intubated and placed on mechanical ventilation. The primary health care provider puts the scheduled pyridostigmine on hold. The client's spouse asks why the usual medication was stopped. Which reason should the nurse give?",
      rationale:
        "Pyridostigmine relieves symptoms but does not change the course of a myasthenic crisis. On the ventilator it adds bronchial and oral secretions, which can plug the airway. It also makes it harder to judge how well other treatments work. It is usually restarted when strength returns, around the time of extubation. Infection, not excess drug, triggered this crisis.",
      sources: [WENDELL_MG],
    }),
    kind: "mc",
    options: [
      { text: "It adds airway secretions and does not change the crisis", why: "The drug only relieves symptoms and increases bronchial secretions in a ventilated client." },
      { text: "It is the cause of the weakness in a myasthenic crisis", why: "A myasthenic crisis reflects the disease itself. Pneumonia triggered it here. Excess drug causes a cholinergic crisis." },
      { text: "It reacts with the sedative used during intubation", why: "A drug interaction with the sedative is not the reason. The drug is held because of secretions." },
      { text: "It cannot be given while the client is unable to swallow", why: "Pyridostigmine can be given through a feeding tube or IV. Swallowing is not the reason it is held." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s38-03", {
      need: "PA",
      topic: "Morning headaches in motor neuron disease",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 58-year-old client with amyotrophic lateral sclerosis reports waking several times each night. The client has headaches on waking that ease by noon and falls asleep while reading in the afternoon. Speech and swallowing are unchanged from last month. Which prescription should the nurse anticipate?",
      rationale:
        "Frequent waking, morning headaches and daytime sleepiness point to hypoventilation during sleep. Weak breathing muscles let carbon dioxide build up overnight. Noninvasive ventilation at night supports breathing, eases these symptoms and can lengthen survival. A sedative would depress breathing further. An analgesic treats the headache but not its cause.",
      sources: [MILLER_ALS],
    }),
    kind: "mc",
    options: [
      { text: "A sedative-hypnotic at bedtime", why: "A sedative depresses breathing and would worsen night-time hypoventilation." },
      { text: "Noninvasive ventilation at night", why: "Night ventilation supports weak breathing muscles and relieves the signs of carbon dioxide build-up." },
      { text: "A daily analgesic for the headaches", why: "The headaches come from carbon dioxide retained overnight. An analgesic misses the cause." },
      { text: "Oxygen at 2 L/minute alone overnight", why: "Oxygen alone does not support weak breathing muscles and can hide rising carbon dioxide." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s38-04", {
      need: "PA",
      topic: "Timing a feeding tube against falling vital capacity",
      cjmm: "action",
      process: "teaching",
      difficulty: 4,
      stem: "A 63-year-old client with amyotrophic lateral sclerosis coughs during meals and has lost weight over 3 months. The forced vital capacity is 58% of predicted, down from 71% 4 months ago. The client is unsure about having a gastrostomy tube placed. Which information should the nurse give the client?",
      rationale:
        "The forced vital capacity has fallen from 71% to 58% of predicted. The risk of gastrostomy placement rises when it falls below 50%. Placing the tube while breathing capacity is still above that level is safer. A gastrostomy can stabilize weight and may prolong survival. Waiting until oral intake stops lets breathing decline further.",
      sources: [MILLER_ALS],
    }),
    kind: "mc",
    options: [
      { text: "It is best delayed until eating by mouth stops", why: "Waiting lets breathing capacity fall further, which raises the risk of the procedure." },
      { text: "Weight loss in this disease does not affect survival", why: "Weight loss is linked to poorer survival. A gastrostomy can stabilize weight." },
      { text: "Placement needs a vital capacity above 80%", why: "There is no 80% threshold. The risk rises below 50%, and 58% is still above that." },
      { text: "Placement is safer while vital capacity is above 50%", why: "Procedure risk rises once the vital capacity falls below 50% of predicted." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s38-05", {
      need: "PA",
      topic: "Water loss after a severe head injury",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 27-year-old client is 2 days after a severe closed head injury. The nurse reviews the 0600 note. Click to highlight the findings that need follow-up.",
      rationale:
        "Head injury can stop the release of antidiuretic hormone and cause diabetes insipidus. Urine output of 450 mL/hour with a specific gravity of 1.003 shows large volumes of dilute urine. Losing free water raises the serum sodium to 151 mEq/L, above the upper limit of 145 mEq/L. Thirst is the body's response to the rising sodium. The temperature, Glasgow Coma Scale, pupils and scalp wound are stable.",
      refs: ["Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L).", "Normal urine specific gravity is 1.005 to 1.030."],
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Urine output 450 mL/hour for the past 3 hours]]. [[Temperature 37.0°C (98.6°F)]]. [[Urine specific gravity 1.003]]. [[Serum sodium 151 mEq/L (151 mmol/L)]]. [[Asks for water every few minutes]]. [[Glasgow Coma Scale 14, unchanged]]. [[Pupils equal and reactive]]. [[Scalp laceration dry]].",
    spans: [
      { text: "Urine output 450 mL/hour for the past 3 hours", why: "This volume far exceeds normal output and points to a loss of antidiuretic hormone." },
      { text: "Temperature 37.0°C (98.6°F)", why: "The temperature is normal and needs no follow-up." },
      { text: "Urine specific gravity 1.003", why: "A specific gravity below 1.005 shows the kidneys cannot concentrate urine." },
      { text: "Serum sodium 151 mEq/L (151 mmol/L)", why: "The sodium is above 145 mEq/L because free water is being lost." },
      { text: "Asks for water every few minutes", why: "Intense thirst responds to the rising serum sodium and water loss." },
      { text: "Glasgow Coma Scale 14, unchanged", why: "A stable score shows no new neurologic decline." },
      { text: "Pupils equal and reactive", why: "Equal, reactive pupils are an expected finding." },
      { text: "Scalp laceration dry", why: "A dry wound is expected and needs no action." },
    ],
    correct: [0, 2, 3, 4],
  },
  {
    ...meta("rn-s38-06", {
      need: "PA",
      topic: "Opposite patterns of antidiuretic hormone disorders",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "Two clients on a neurosurgical unit have disorders of antidiuretic hormone. One has diabetes insipidus. The other has the syndrome of inappropriate antidiuretic hormone (SIADH). Drag the findings to fill in each blank.",
      rationale:
        "In diabetes insipidus too little antidiuretic hormone acts on the kidney. The client passes large volumes of dilute urine and the serum sodium rises. In SIADH too much hormone acts, so the kidney holds water. Urine is scant and concentrated and the serum sodium falls. Potassium and urine glucose are not the defining changes in either disorder.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    template: "Diabetes insipidus produces {0} and {1}. SIADH produces {2} and {3}.",
    targets: ["Diabetes insipidus urine", "Diabetes insipidus serum", "SIADH urine", "SIADH serum"],
    tokens: [
      { text: "a falling serum sodium", why: "Water held by the kidney in SIADH dilutes the sodium." },
      { text: "dilute urine in large volume", why: "Without antidiuretic hormone the kidney cannot hold back water." },
      { text: "a rising serum potassium level", why: "Potassium is not the defining change in either disorder." },
      { text: "concentrated urine in small volume", why: "Excess antidiuretic hormone makes the kidney retain water." },
      { text: "a rising serum sodium", why: "Free water loss in diabetes insipidus concentrates the sodium." },
      { text: "glucose spilling into the urine", why: "Glucose in the urine points to diabetes mellitus, not a hormone disorder of water balance." },
    ],
    correct: [1, 4, 3, 0],
  },
  {
    ...meta("rn-s38-07", {
      need: "PA",
      topic: "Order of blockade before adrenal tumor surgery",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 44-year-old client has episodes of pounding headache, sweating and palpitations. BP during an episode is 224/122 mmHg. Plasma free metanephrines are high and a CT scan shows a 4 cm adrenal mass. Surgery is planned in 14 days. No BP medication has been given yet. The nurse reviews today's prescriptions. Which prescription should the nurse clarify?",
      rationale:
        "The findings fit a pheochromocytoma. Preparation starts with an alpha blocker such as doxazosin for 7 to 14 days. A beta blocker is added only after alpha blockade is in place, to control a fast heart rate. A beta blocker given first leaves alpha receptors unopposed, and the BP can surge. A high-sodium diet with fluids restores volume. Orthostatic BP checks detect the low BP that alpha blockade can cause.",
      refs: ["Alpha blockade is given for 7 to 14 days before surgery."],
      sources: [LENDERS_PHEO],
    }),
    kind: "mc",
    options: [
      { text: "Doxazosin 2 mg by mouth daily", why: "An alpha blocker is the first choice to control BP before surgery." },
      { text: "High-sodium diet with extra fluids", why: "Extra sodium and fluid restore volume and lower the risk of hypotension after surgery." },
      { text: "Standing and lying BP checks each morning", why: "Alpha blockade can cause a low standing BP, so these checks are expected." },
      { text: "Propranolol 40 mg by mouth twice daily", why: "A beta blocker started before alpha blockade leaves alpha receptors unopposed and can raise the BP further." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s38-08", {
      need: "PA",
      topic: "First day after removal of a catecholamine tumor",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 39-year-old client had a laparoscopic adrenalectomy for a pheochromocytoma 2 hours ago. The client took doxazosin for 2 weeks before surgery. Which assessments should the nurse include in the plan for the next 24 hours? Select all that apply.",
      rationale:
        "Catecholamine levels drop sharply once the tumor is out. Blood vessels relax, so the BP can fall, and the heart rate changes as well. Catecholamines also suppress insulin release. When they fall, insulin rises and the blood glucose can drop. BP, heart rate and glucose are therefore checked often. Calcium and urine concentration checks belong to parathyroid and pituitary surgery.",
      sources: [LENDERS_PHEO, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Serum calcium level every 4 hours", why: "Calcium falls after parathyroid or thyroid surgery, not after adrenal surgery." },
      { text: "Frequent blood pressure checks", why: "The sudden drop in catecholamines can cause hypotension." },
      { text: "Hourly urine specific gravity", why: "Hourly specific gravity watches for diabetes insipidus after pituitary surgery." },
      { text: "Bedside blood glucose checks", why: "Insulin release rises once catecholamines fall, so glucose can drop." },
      { text: "Serum amylase each morning", why: "Amylase tracks the pancreas and is not a concern after adrenal surgery." },
      { text: "Heart rate and rhythm checks", why: "Heart rate changes as catecholamines fall and alpha blockade persists." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s38-09", {
      need: "PA",
      topic: "Triggers of new confusion in cirrhosis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 61-year-old client with cirrhosis is admitted with new confusion and asterixis. The nurse takes a history from the client's partner. Which findings could have triggered the hepatic encephalopathy? Select all that apply.",
      rationale:
        "Infection, gastrointestinal bleeding, constipation and sedating drugs are leading triggers of hepatic encephalopathy. Blood in the gut is a protein load that raises ammonia. Fever with cloudy urine suggests infection. No stool for 4 days lets more ammonia be absorbed. Lorazepam is a benzodiazepine that depresses the brain. Moderate protein intake is advised. A low-sodium diet and propranolol are routine cirrhosis care.",
      sources: [VILSTRUP_HE],
    }),
    kind: "sata",
    options: [
      { text: "A low-sodium diet prescribed for ascites", why: "Sodium restriction controls ascites and does not raise ammonia." },
      { text: "Black, tarry stools for 2 days", why: "Blood in the gut is digested into ammonia and is a leading trigger." },
      { text: "Propranolol taken daily for varices", why: "This beta blocker lowers portal pressure and is not a known trigger." },
      { text: "Temperature 38.6°C (101.5°F) with cloudy urine", why: "Infection is the most common trigger of an episode." },
      { text: "Protein intake of 1.2 g/kg each day", why: "Guidelines advise moderate protein. Restricting protein is not recommended." },
      { text: "No bowel movement for 4 days", why: "Constipation lets gut bacteria make and absorb more ammonia." },
      { text: "Lorazepam taken at night for sleep", why: "Benzodiazepines depress the brain and can precipitate encephalopathy." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s38-10", {
      need: "PA",
      topic: "Airway blocked by a variceal tamponade balloon",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with bleeding esophageal varices has a balloon tamponade tube in place as a bridge to a transjugular intrahepatic portosystemic shunt. Both balloons are inflated and the tube is under traction. The client suddenly has stridor, cannot speak and has an SpO2 of 82%. Which action should the nurse take first?",
      rationale:
        "Sudden stridor and loss of voice mean the balloon has moved up and is blocking the airway. The fastest fix is to cut across the tube so all balloons deflate, then remove it. Scissors are kept at the bedside for this reason. More oxygen does not pass a blocked airway. Suction does not move the balloon. More traction worsens the obstruction.",
      sources: [HINKLE, KAPLAN_VARICES],
    }),
    kind: "mc",
    options: [
      { text: "Cut across the tube and remove it", why: "Cutting the tube deflates every balloon at once and clears the airway." },
      { text: "Suction the mouth and the back of the throat", why: "Secretions do not explain the stridor. Suction does not move the balloon." },
      { text: "Raise the oxygen to 6 L/minute", why: "Extra oxygen cannot pass an airway blocked by the balloon." },
      { text: "Add weight to the tube traction", why: "More traction pulls the balloon further into the airway." },
    ],
    correct: 0,
  },
];
