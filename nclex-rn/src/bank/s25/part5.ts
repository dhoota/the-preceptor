import type { Item } from "@/engine/types";
import { ACS, DKA, HINKLE, PPH, VARICES, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s25-41", {
      topic: "Early care for ST elevation infarction",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 58-year-old client has had crushing chest pain for 40 minutes and is sweating. The 12-lead ECG shows ST elevation in leads II, III and aVF. BP is 134/82 mmHg and SpO2 is 97% on room air. Which actions should the nurse anticipate? Select all that apply.",
      rationale:
        "ST elevation with ongoing chest pain shows an acute infarction. Chewed aspirin blocks platelet clumping early. Continuous monitoring detects dysrhythmias, which are common in the first hours. Primary percutaneous coronary intervention restores blood flow, and delay costs heart muscle. An SpO2 of 97% does not call for oxygen, which is given below 90%. Treatment does not wait for troponin when the ECG shows ST elevation. Walking raises oxygen demand.",
      refs: ["In acute coronary syndromes, supplemental oxygen is given when SpO2 is below 90%."],
      sources: [ACS],
    }),
    kind: "sata",
    options: [
      { text: "Apply oxygen at 10 L/minute by mask", why: "Oxygen is not needed with an SpO2 of 97% and gives no benefit in infarction without hypoxemia." },
      { text: "Give chewable aspirin as prescribed", why: "Aspirin reduces platelet clumping in the blocked artery." },
      { text: "Wait for troponin results to confirm", why: "ST elevation on the ECG is enough to start reperfusion without waiting for troponin." },
      { text: "Start continuous cardiac monitoring", why: "Dysrhythmias are common early in infarction and need prompt detection." },
      { text: "Walk the client to the bathroom", why: "Activity raises oxygen demand in a heart that is already ischemic." },
      { text: "Prepare the client for primary PCI", why: "Opening the artery quickly limits the size of the infarction." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s25-42", {
      topic: "Cooling in heat stroke",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 22-year-old client collapsed while running a race on a hot day. Core temperature is 41.2°C (106.2°F). The client is confused and the skin is hot. Which actions should the nurse plan? Select all that apply.",
      rationale:
        "A core temperature of 41.2°C with confusion after exertion in heat fits heat stroke. The temperature must come down fast to limit organ damage. Removing clothing and cold water immersion cool the body quickly. Core temperature is tracked continuously so cooling stops before the client becomes too cold. Antipyretics do not work, because the heat does not come from a reset thermostat. A confused client cannot drink safely.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Give acetaminophen to lower the fever", why: "Heat stroke is not driven by the hypothalamic set point, so antipyretics do not help." },
      { text: "Remove the client's clothing", why: "Exposed skin loses heat faster." },
      { text: "Offer cold fluids to drink", why: "A confused client may aspirate. Fluids are given IV." },
      { text: "Cool with cold water immersion", why: "Immersion in cold water is the fastest way to lower core temperature." },
      { text: "Track core temperature continuously", why: "Continuous readings guide when to stop cooling so the client does not become hypothermic." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s25-43", {
      topic: "Ascending weakness priorities",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with Guillain-Barre syndrome had weakness begin in the feet 3 days ago. It now involves the hips and trunk. Knee and ankle reflexes are absent. Which two assessments are the nurse's priority? Select two.",
      rationale:
        "The weakness is climbing from the feet to the trunk. It can reach the diaphragm and the muscles of breathing. Falling vital capacity and weak effort warn of respiratory failure before the SpO2 drops. Cranial nerve involvement can weaken the swallow and cough, which leads to aspiration. Absent reflexes and leg weakness are already known. Skin and bowel checks matter but are not the priority.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Deep tendon reflexes in the legs", why: "Absent leg reflexes are already known and do not change the immediate risk." },
      { text: "Skin integrity over the sacrum", why: "Pressure injury prevention matters but is not a threat to life now." },
      { text: "Vital capacity and breathing effort", why: "Ascending paralysis can reach the breathing muscles and cause respiratory failure." },
      { text: "Strength of the leg muscles", why: "Leg weakness is already known. The trunk and breathing muscles are the concern." },
      { text: "Swallowing and cough strength", why: "Weak swallow and cough raise the risk of aspiration and airway compromise." },
      { text: "Bowel sounds in all quadrants", why: "Bowel function is checked, but it is not an immediate threat to life." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s25-44", {
      topic: "Acid-base change with gastric suction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with a small bowel obstruction has had a nasogastric tube on low intermittent suction for 3 days. Arterial blood gas results are pH 7.51, PaCO2 47 mmHg and HCO3 34 mEq/L (34 mmol/L). Serum potassium is 3.2 mEq/L (3.2 mmol/L). Which imbalance do these results show?",
      rationale:
        "Gastric suction removes hydrochloric acid, so bicarbonate builds up in the blood. The pH of 7.51 is above 7.45 and the bicarbonate of 34 mEq/L is above 26 mEq/L, so the cause is metabolic. The PaCO2 of 47 mmHg is slightly high because breathing slows to compensate. Low potassium often goes with this pattern.",
      refs: ["Normal arterial pH is 7.35 to 7.45.", "Normal PaCO2 is 35 to 45 mmHg.", "Normal bicarbonate is 22 to 26 mEq/L."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Respiratory acidosis", why: "Acidosis needs a pH below 7.35. The pH is 7.51." },
      { text: "Metabolic acidosis", why: "Metabolic acidosis has a low bicarbonate. The bicarbonate is 34 mEq/L." },
      { text: "Respiratory alkalosis", why: "Respiratory alkalosis has a low PaCO2. The PaCO2 is 47 mmHg." },
      { text: "Metabolic alkalosis", why: "A high pH with a high bicarbonate after acid loss from the stomach fits this imbalance." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s25-45", {
      topic: "Hematemesis in cirrhosis",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with alcohol-related cirrhosis suddenly vomits about 600 mL of bright red blood. Heart rate is 124/minute and BP is 86/52 mmHg. The skin is cool and clammy. Hemoglobin is 7.4 g/dL (74 g/L). The abdomen is soft. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Portal hypertension in cirrhosis creates fragile varices in the esophagus. Sudden vomiting of bright red blood with a heart rate of 124/minute and a BP of 86/52 mmHg fits variceal hemorrhage with shock. Two large-bore IV lines allow fast volume and blood replacement. Urgent endoscopy finds and bands the bleeding varix. Heart rate, BP and hemoglobin show whether bleeding continues. A soft abdomen makes perforation and peritonitis less likely.",
      sources: [VARICES, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hepatic encephalopathy", why: "Encephalopathy causes confusion, not vomiting of bright red blood." },
      { text: "Esophageal variceal hemorrhage", why: "Cirrhosis with sudden bright red hematemesis and shock fits a bleeding varix." },
      { text: "Perforated peptic ulcer", why: "Perforation causes sudden severe pain and a rigid abdomen. This abdomen is soft." },
      { text: "Spontaneous bacterial peritonitis", why: "Peritonitis causes fever and abdominal tenderness, not massive hematemesis." },
    ],
    actions: [
      { text: "Offer ice chips and clear fluids", why: "The client needs nothing by mouth before urgent endoscopy." },
      { text: "Insert two large-bore IV catheters", why: "Large-bore access allows fast fluid and blood replacement." },
      { text: "Give a soapsuds enema", why: "An enema does not treat bleeding and is not a first action in shock." },
      { text: "Prepare for urgent endoscopy", why: "Endoscopy finds the bleeding varix and allows banding." },
      { text: "Delay fluids until labs return", why: "Waiting lets shock worsen. Volume replacement starts now." },
    ],
    parameters: [
      { text: "Heart rate and BP", why: "A rising heart rate or falling BP signals ongoing blood loss." },
      { text: "Serum amylase level", why: "Amylase guides pancreatitis care, not variceal bleeding." },
      { text: "Deep tendon reflexes", why: "Reflexes do not track blood loss." },
      { text: "Hemoglobin level", why: "Serial hemoglobin shows the extent of blood loss and guides transfusion." },
      { text: "Serum lipid panel", why: "Lipids do not guide acute bleeding care." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s25-46", {
      topic: "Temporary pacemaker malfunction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client has a temporary transvenous pacemaker set in demand mode at a rate of 70/minute. The monitor shows pacing spikes at 70/minute, but several spikes have no QRS complex after them. The pulse is 44/minute and the client reports dizziness. Which problem is the nurse seeing?",
      rationale:
        "A pacing spike shows the pacemaker fired. A spike with no QRS after it shows the impulse did not depolarize the ventricle. That is failure to capture. It explains a pulse of 44/minute below the set rate of 70/minute and the dizziness. Failure to pace shows no spikes when they are due. Failure to sense shows spikes that fire on top of the client's own beats.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Failure to capture", why: "Spikes with no QRS after them mean the impulse is not depolarizing the ventricle." },
      { text: "Failure to sense", why: "Undersensing shows spikes firing on the client's own beats. That is not described." },
      { text: "Failure to pace", why: "Failure to pace shows no spike when one is due. Spikes are present here." },
      { text: "Normal demand pacing", why: "Normal pacing produces a QRS after each spike and a pulse at the set rate." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-47", {
      topic: "Findings in low magnesium",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client with alcohol use disorder is admitted for poor intake. Serum magnesium is 1.1 mg/dL (0.45 mmol/L). Which findings are consistent with this magnesium level? Select all that apply.",
      rationale:
        "A magnesium of 1.1 mg/dL is low. Low magnesium makes nerves and muscles more excitable. That shows as tremor, brisk reflexes and a facial twitch when the cheek is tapped, which is Chvostek's sign. Absent reflexes, warm flushed skin and slow, shallow breathing are signs of high magnesium, which depresses nerves and muscles.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Absent patellar reflexes", why: "Loss of reflexes is a sign of high magnesium, not low." },
      { text: "Tremor of the hands", why: "Low magnesium raises neuromuscular excitability and causes tremor." },
      { text: "Warm, flushed skin", why: "Flushing comes from the vasodilation of high magnesium." },
      { text: "Hyperactive deep tendon reflexes", why: "Low magnesium makes reflexes brisk." },
      { text: "Slow, shallow breathing", why: "Respiratory depression is a sign of high magnesium." },
      { text: "Facial twitch with a cheek tap", why: "This is Chvostek's sign of neuromuscular irritability." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s25-48", {
      topic: "Heavy bleeding after birth",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client gave birth vaginally 30 minutes ago. The fundus is soft and boggy at 2 cm above the umbilicus. The perineal pad is soaked in 15 minutes. BP is 118/72 mmHg and heart rate is 96/minute. What should the nurse do first?",
      rationale:
        "A soft, boggy fundus with a pad soaked in 15 minutes points to uterine atony, the most common cause of postpartum hemorrhage. Fundal massage makes the uterus contract and squeeze the bleeding vessels. It is the first action. A laceration is suspected when bleeding continues with a firm fundus. More IV fluid and pad weighing come after the uterus is firm.",
      sources: [PPH],
    }),
    kind: "mc",
    options: [
      { text: "Check the perineum for a tear", why: "A tear is suspected when bleeding continues with a firm fundus. This fundus is boggy." },
      { text: "Increase the IV fluid rate", why: "Fluids support volume but do not stop bleeding from a relaxed uterus." },
      { text: "Massage the uterine fundus", why: "Massage stimulates the uterus to contract and compress bleeding vessels." },
      { text: "Weigh the pads in 1 hour", why: "Weighing measures blood loss but delays the action that stops it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s25-49", {
      topic: "Sick day care in type 1 diabetes",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with type 1 diabetes has a stomach virus with nausea. The nurse teaches the client how to manage diabetes while sick. Which statements by the client show understanding? Select all that apply.",
      rationale:
        "Illness raises stress hormones, which raise glucose even without food. Basal insulin continues so ketones do not build up. Glucose is checked more often and ketones are checked to catch early ketoacidosis. Skipping insulin and stopping fluids both raise the risk of ketoacidosis and dehydration. Persistent vomiting needs a call the same day, not after days.",
      sources: [DKA, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "\"I will skip insulin until I can eat.\"", why: "Stopping insulin allows ketones to build and can lead to ketoacidosis." },
      { text: "\"I will keep taking my basal insulin.\"", why: "Basal insulin is still needed during illness to prevent ketosis." },
      { text: "\"I will stop fluids so I do not vomit.\"", why: "Fluids prevent dehydration. Small, frequent sips are used." },
      { text: "\"I will check my glucose more often.\"", why: "Illness can raise glucose, so frequent checks guide insulin doses." },
      { text: "\"I will wait 3 days before I call.\"", why: "Persistent vomiting with type 1 diabetes can lead to ketoacidosis within hours." },
      { text: "\"I will check for ketones when ill.\"", why: "Ketone checks catch early ketoacidosis." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s25-50", {
      topic: "Response to fluid restriction",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with small cell lung cancer has the syndrome of inappropriate antidiuretic hormone. On day 1 the serum sodium was 124 mEq/L (124 mmol/L), weight was 71.2 kg and urine specific gravity was 1.030. The client is on a fluid restriction of 800 mL/day. Which finding on day 3 shows the treatment is effective?",
      rationale:
        "Excess antidiuretic hormone makes the kidneys hold water, which dilutes the sodium. Restricting fluid lets the body lose the extra water. A rise in sodium from 124 to 130 mEq/L shows the dilution is correcting. A weight gain to 72.1 kg shows more retained water. Low output of concentrated urine shows the water retention continues. New cramps and nausea suggest the sodium is falling further.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Weight up to 72.1 kg", why: "Weight gain shows the body is retaining more water." },
      { text: "Urine output 400 mL/day, specific gravity 1.030", why: "Low output of concentrated urine shows water retention has not changed." },
      { text: "New muscle cramps and nausea", why: "These are signs of worsening hyponatremia." },
      { text: "Serum sodium of 130 mEq/L", why: "A rise from 124 mEq/L shows the excess water is being cleared." },
    ],
    correct: 3,
  },
];
