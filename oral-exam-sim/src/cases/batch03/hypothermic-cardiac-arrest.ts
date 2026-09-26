// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const hypothermicCardiacArrest: OralCase = {
  id: "hypothermic-cardiac-arrest",
  title: "Rescued from the backcountry",
  blueprint: "enviro",
  alsoCovers: ["resus", "systems"],
  priorityTopic: "environmental",
  keyFeatures: [
    { topic: "environmental", n: 3 },
    { topic: "arrhythmia", n: 6 },
    { topic: "ems", n: 3 },
  ],
  summary: "A 34 year old skier is brought in by rescue helicopter with CPR in progress.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "You have a mechanical CPR device and a general surgeon on call, but no bypass or ECMO. The ECLS centre in Calgary is 20 minutes by air or 70 minutes by road. " +
    "A 34 year old man arrives by helicopter with CPR in progress.",
  card: {
    vitals: {
      temperature: "26°C tympanic",
      pulse: "No pulse. CPR in progress",
      resp: "No spontaneous breathing. Ventilated through a supraglottic airway",
      bp: "Not obtainable during CPR",
      o2sat: "Not obtainable during CPR",
      weight: "78 kg (172 lb)",
    },
    medications: "Not known",
    allergies: "Not known",
  },
  findings: [
    {
      id: "scene",
      label: "History from search and rescue",
      result:
        "He was reported missing after a solo ski tour yesterday. Search and rescue found him at 06:30 beside a creek with an injured ankle. " +
        "He was confused, shivering had stopped, and he was not buried in snow.",
    },
    {
      id: "handover",
      label: "Flight crew handover",
      result:
        "During the helicopter extraction at 07:10 he became unresponsive. The crew saw ventricular fibrillation on the monitor and started CPR. They gave one shock with no change. " +
        "It is now 07:35. A supraglottic airway is in place. The flight paramedic says: 'He talked to us at the scene. He arrested right in front of us.'",
    },
    {
      id: "arrival",
      label: "Arrival assessment",
      result:
        "Unresponsive. Pupils 5 mm and sluggish. Skin very cold and pale. Chest wall compressible. Monitor shows coarse ventricular fibrillation. " +
        "No obvious trauma other than a swollen right ankle. Snow and ice melted from his clothing.",
    },
    {
      id: "temp",
      label: "Core temperature",
      result: "Esophageal probe in the lower third of the esophagus reads 24.1 °C. The tympanic reading was 26 °C but is unreliable.",
    },
    {
      id: "gas",
      label: "Blood gas (uncorrected)",
      result: "pH 7.08. pCO2 48 mmHg. HCO3 14 mmol/L. Lactate 7.2 mmol/L. Glucose 9.8 mmol/L.",
    },
    {
      id: "lytes",
      label: "Electrolytes",
      result: "Potassium 4.8 mmol/L. Sodium 141 mmol/L. Ionized calcium 1.12 mmol/L. Creatinine 110 µmol/L.",
    },
    {
      id: "cbc",
      label: "Blood count and clotting",
      result: "Hemoglobin 158 g/L. Platelets 142 x 10^9/L. INR 1.2. Lab reports clotting tests are run at 37 °C.",
    },
    {
      id: "pocus",
      label: "Cardiac ultrasound during pulse check",
      result: "Fibrillating myocardium with no organized contraction. No pericardial effusion.",
    },
    {
      id: "timeline",
      label: "Timeline from rescue crew",
      result:
        "Found 06:30. Conscious and confused. Witnessed arrest 07:10 with CPR within one minute. One shock at 07:12. Mechanical CPR since 07:20. No epinephrine given. No snow burial. No drugs or alcohol found.",
    },
    {
      id: "hope",
      label: "HOPE score",
      result: "Using age, sex, no asphyxia, CPR duration, potassium 4.8 mmol/L and temperature 24.1 °C, predicted survival is well above the 10 percent threshold.",
    },
    {
      id: "wife",
      label: "Phone call from his wife",
      result: "His wife is on the line from Calgary. She asks: 'Is he alive? The search team said he was talking.'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text: "The mechanical CPR device is running. The flight crew is giving handover. Your nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Arrival",
      prompt: "What are your first priorities in the next five minutes?",
      seconds: 90,
      modelAnswer: [
        "Continue high quality mechanical CPR. Hypothermic arrest can have excellent outcomes.",
        "Measure core temperature with an esophageal probe.",
        "Secure the airway with an endotracheal tube. Do not delay for fear of VF.",
        "Handle gently. Remove wet clothing. Insulate and start forced air warming and warmed IV fluids at 38 to 42 °C.",
        "Send potassium early. It guides prognosis.",
        "Call the ECLS centre early.",
        "Get the timeline from the flight crew: when found, when he arrested, whether it was witnessed, time to CPR, shocks and drugs given, and any burial.",
      ],
      rubric: ["hy-r1", "hy-a1", "hy-l1", "hy-h1", "hy-h3", "hy-h4"],
      next: "q-drugs",
    },
    {
      kind: "question",
      id: "q-drugs",
      phase: "Shocks and drugs",
      prompt: "He is still in VF at 24.1 °C. The nurse has epinephrine and amiodarone drawn up. What do you do about shocks and drugs?",
      seconds: 60,
      modelAnswer: [
        "ERC 2021: up to three shocks while under 30 °C, then hold further shocks until above 30 °C. WMS 2019 advises a single shock under 30 °C.",
        "Withhold epinephrine and antiarrhythmics under 30 °C. They accumulate and can cause arrhythmia on rewarming.",
        "Between 30 and 35 °C, give epinephrine every 6 to 10 minutes, double the usual interval.",
        "Know that AHA guidance, which Heart and Stroke follows, allows standard ACLS drugs and shocks during rewarming.",
        "Continue CPR and rewarming throughout.",
      ],
      rubric: ["hy-m1"],
      choices: [
        {
          id: "c-hold",
          label: "I gave two more shocks for a total of three, then held drugs and further shocks until he is above 30 °C, and kept CPR going.",
          next: "q-prognosis",
          quality: "strong",
          feedback:
            "Correct by ERC 2021. A cold myocardium responds poorly to shocks and drugs. ERC allows up to three shocks under 30 °C and WMS advises one. Drugs are held under 30 °C because they build up and act all at once when he warms.",
        },
        {
          id: "c-acls",
          label: "I followed standard ACLS with epinephrine 1 mg every 3 to 5 minutes and amiodarone 300 mg.",
          next: "s-acls",
          quality: "partial",
          feedback:
            "This follows AHA guidance, so it is defensible. Under 30 °C drugs are barely metabolized and can accumulate. ERC and WMS guidance withholds them until the core is above 30 °C. The examiner wanted you to know that debate.",
        },
        {
          id: "c-stop",
          label: "After the third shock failed I called the code. He has had 25 minutes of CPR with no response.",
          next: "s-stop",
          quality: "unsafe",
          feedback:
            "No one is dead until warm and dead, unless there are clear signs of futility. A witnessed hypothermic arrest with no asphyxia has a good chance of survival with ECLS. Stopping now would be a serious error.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-acls",
      phase: "Fifteen minutes later",
      text:
        "He has had three doses of epinephrine. He remains in VF at 24.8 °C. The pharmacist asks whether you want to keep giving it while he is this cold. You hold further drugs until he is above 30 °C.",
      next: "q-prognosis",
    },
    {
      kind: "say",
      id: "s-stop",
      phase: "At the bedside",
      text:
        "The flight paramedic speaks up. He says the arrest was witnessed and the patient was talking before it. The charge nurse reminds you that the core temperature is 24 °C. You restart CPR.",
      next: "q-prognosis",
    },
    {
      kind: "question",
      id: "q-prognosis",
      phase: "Prognosis",
      prompt: "How do you decide whether he is a candidate for extracorporeal rewarming?",
      seconds: 60,
      modelAnswer: [
        "Witnessed arrest with a core temperature under 30 to 32 °C is a strong indication.",
        "No asphyxia. He was not buried. This favours survival.",
        "Potassium 4.8 mmol/L. Over 12 mmol/L suggests futility in hypothermic arrest.",
        "HOPE score estimates survival. Under 10 percent argues against ECLS.",
        "No lethal injury. Chest is compressible.",
      ],
      rubric: ["hy-a2", "hy-a3", "hy-h2"],
      next: "q-ecls",
    },
    {
      kind: "question",
      id: "q-ecls",
      phase: "Getting to ECLS",
      prompt: "Who do you call and how would you get him to ECLS?",
      seconds: 60,
      modelAnswer: [
        "Call the ECLS centre directly or through RAAPID, the Alberta referral line. Give the key prognostic data.",
        "Transfer with mechanical CPR running. Continue insulating and warming en route.",
        "Critical care transport team, by air if possible.",
        "Handover with timeline, temperature, potassium, shocks and drugs given.",
        "Do not stop in the ED to rewarm by surface methods alone.",
      ],
      rubric: ["hy-m2", "hy-l1"],
      next: "s-grounded",
    },
    {
      kind: "say",
      id: "s-grounded",
      phase: "Ten minutes later",
      text:
        "The ECLS team in Calgary accepts him. Then the transport dispatcher calls back. A storm has grounded all aircraft and a multi vehicle pileup has closed the highway for at least three hours. " +
        "He is still in VF on the mechanical device. Core temperature is 24.6 °C.",
      next: "q-local",
    },
    {
      kind: "question",
      id: "q-local",
      phase: "No way out",
      prompt: "You cannot get him to ECLS for at least three hours. What do you do?",
      seconds: 90,
      modelAnswer: [
        "Start active internal rewarming here while continuing mechanical CPR.",
        "Thoracic lavage through chest tubes with saline warmed to about 40 to 42 °C. Start on the left, over the heart, then add the right. On each side one tube goes anterior, 2nd or 3rd space midclavicular, for inflow and one goes lateral, 5th or 6th space, for outflow.",
        "Continue warmed IV fluids and forced air. Warm humidified ventilation.",
        "Bladder or gastric lavage add a little heat but are much less effective.",
        "Call the general surgeon to help. Keep the ECLS centre updated.",
      ],
      rubric: ["hy-m3", "hy-l2"],
      choices: [
        {
          id: "c-lavage",
          label: "I placed bilateral chest tubes and started thoracic lavage with 40 °C saline, kept mechanical CPR going, and got the surgeon in to help.",
          next: "s-rosc",
          quality: "strong",
          feedback:
            "This is the right step when ECLS is not available. Thoracic lavage warms the heart directly and faster than surface methods. Continuing CPR during rewarming is essential.",
        },
        {
          id: "c-surface",
          label: "I continued CPR with forced air warming and warm IV fluids and waited for the road to open.",
          next: "s-surface",
          quality: "partial",
          feedback:
            "Surface warming and warm fluids are helpful but slow in arrest. With CPR alone they may add less than 1 °C per hour. The examiner wanted active internal rewarming such as thoracic lavage.",
        },
        {
          id: "c-terminate",
          label: "I stopped resuscitation because ECLS is not available and he has been in arrest for an hour.",
          next: "s-terminate",
          quality: "unsafe",
          feedback:
            "There are no signs of futility. Potassium is normal, the arrest was witnessed and there was no asphyxia. Long CPR with good outcomes is well described in hypothermia. Rewarm with the tools you have.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-surface",
      phase: "One hour later",
      text: "His core temperature has risen only to 25.3 °C. The general surgeon arrives and suggests thoracic lavage. You place bilateral chest tubes and start lavage with warmed saline.",
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-terminate",
      phase: "At the bedside",
      text:
        "The RT asks to hold the pronouncement. She says the ECLS physician on the phone wants to talk to you. He asks you to start thoracic lavage and continue CPR. You restart and call the surgeon.",
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-rosc",
      phase: "Two hours after arrival",
      text:
        "With lavage his core temperature reaches 30.4 °C. He is still in VF. You shock once and he goes into a slow junctional rhythm with a pulse. " +
        "Blood pressure 76/40. Heart rate 48. Temperature 30.6 °C. Potassium 5.4 mmol/L. The transport dispatcher says the highway will open in 45 minutes.",
      next: "q-postrosc",
    },
    {
      kind: "question",
      id: "q-postrosc",
      phase: "After ROSC",
      prompt: "What is your post arrest plan while you wait for transport?",
      seconds: 90,
      modelAnswer: [
        "Treat rewarming shock: warmed fluid boluses and norepinephrine.",
        "Continue controlled rewarming. Avoid overshoot and fever.",
        "Once above 30 °C, drugs can be given at longer intervals.",
        "Repeat potassium, glucose and gas often. Potassium can rise with rewarming.",
        "Lung protective ventilation. 12 lead ECG. Look for injuries.",
        "Still transfer to the ECLS centre for ICU care and possible ECLS support.",
      ],
      rubric: ["hy-m4", "hy-d1"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "His wife",
      prompt: "His wife is on the phone. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Introduce yourself and check who you are speaking to.",
        "Plain and honest: his heart stopped from the cold. The team did CPR and warmed him and his heart is now beating.",
        "He is very sick. He will go to the ICU in Calgary. It is too early to know about brain recovery.",
        "Tell her where he is going and who will call her.",
        "Offer support. Ask if someone can be with her.",
      ],
      rubric: ["hy-c1"],
      choices: [
        {
          id: "c-honest",
          label: "I told her plainly that his heart had stopped from the cold, that it is beating again after rewarming, that he is critically ill and that it is too early to know about brain recovery.",
          next: "end",
          quality: "strong",
          feedback:
            "This is honest and clear. It gives hope without false promises. Families remember the first call, so plain words and a clear next step matter.",
        },
        {
          id: "c-reassure",
          label: "I told her he would be fine because young people do well after hypothermia.",
          next: "s-reassure",
          quality: "partial",
          feedback:
            "Survival rates are good in this group, but neurological outcome is not yet known. False reassurance damages trust if things go badly. Say what you know and what you do not.",
        },
        {
          id: "c-deflect",
          label: "I told her I could not discuss details over the phone and she should call the ICU in Calgary later.",
          next: "s-deflect",
          quality: "unsafe",
          feedback:
            "Once you confirm who she is, his next of kin should get timely information about a critical event. Withholding updates leaves her in distress and without a plan.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reassure",
      phase: "On the phone",
      text: "She asks if he will be able to walk and talk. You pause and explain that it is too early to know about the brain, and that the ICU team will keep her updated.",
      next: "end",
    },
    {
      kind: "say",
      id: "s-deflect",
      phase: "On the phone",
      text: "She begins to cry and asks whether he is alive. The nurse hands the phone back to you. You explain that his heart is beating again and he is being sent to the ICU in Calgary.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The road opens and a critical care crew takes him to Calgary with a pulse and rising temperature. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "hy-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Continues high quality CPR, using a mechanical device, and secures the airway with an endotracheal tube.",
      points: 2,
      teaching: "Mechanical CPR allows long resuscitations and safe transport. Intubation is indicated and rarely triggers VF when done gently.",
      source: "wms",
    },
    {
      id: "hy-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Measures core temperature with an esophageal probe and sends potassium early.",
      points: 2,
      teaching: "An esophageal probe in the lower third is the best core measure in the intubated patient. Potassium is the key lab for prognosis.",
      source: "wms",
    },
    {
      id: "hy-m1",
      competency: "management",
      criterion: "management",
      text: "Limits shocks to at most three and withholds epinephrine and antiarrhythmics below 30 °C, then doubles the drug interval between 30 and 35 °C.",
      points: 2,
      teaching: "The cold heart resists shocks and drugs. Drugs given under 30 °C accumulate and act together on rewarming. AHA guidance is more permissive than ERC and WMS.",
      source: "erc",
    },
    {
      id: "hy-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Uses witnessed arrest, absence of asphyxia, potassium and the HOPE score to judge ECLS candidacy.",
      points: 2,
      teaching: "Potassium over 12 mmol/L or HOPE survival under 10 percent argues against ECLS. A witnessed arrest without asphyxia favours good outcomes.",
      source: "hope",
    },
    {
      id: "hy-a3",
      competency: "assessment",
      criterion: "physical",
      text: "States that hypothermic patients should not be pronounced dead until rewarmed unless clear futility criteria are present.",
      points: 3,
      critical: true,
      teaching: "Hypothermia protects the brain. Survival with good neurology after hours of CPR is well documented.",
      source: "wms",
    },
    {
      id: "hy-m2",
      competency: "management",
      criterion: "management",
      text: "Arranges transfer to an ECLS centre with mechanical CPR running rather than attempting prolonged surface rewarming.",
      points: 3,
      critical: true,
      teaching: "ECLS is the rewarming method of choice for hypothermic arrest. Surface rewarming alone is too slow during CPR.",
      source: "erc",
    },
    {
      id: "hy-m3",
      competency: "management",
      criterion: "management",
      text: "Uses active internal rewarming such as bilateral thoracic lavage when ECLS is not available.",
      points: 3,
      critical: true,
      teaching: "Thoracic lavage warms the heart directly. It is the best ED option when bypass or ECMO cannot be reached.",
      source: "wms",
    },
    {
      id: "hy-l1",
      competency: "leadership",
      criterion: "process",
      text: "Contacts the ECLS centre early and gives the key prognostic data.",
      points: 1,
      teaching: "The ECLS team needs time to prepare. Call as soon as you suspect hypothermic arrest.",
      source: "erc",
    },
    {
      id: "hy-l2",
      competency: "leadership",
      criterion: "process",
      text: "Adapts the plan when transfer fails and brings in local help such as the general surgeon.",
      points: 1,
      teaching: "Rural resuscitation often means using the skills in the building. Name a plan B before you need it.",
      source: "wms",
    },
    {
      id: "hy-m4",
      competency: "management",
      criterion: "management",
      text: "Treats post ROSC hypotension with warmed fluid and norepinephrine and monitors potassium and glucose during rewarming.",
      points: 2,
      teaching: "Rewarming causes vasodilation and fluid shifts. Potassium and glucose can change quickly.",
      source: "erc",
    },
    {
      id: "hy-d1",
      competency: "disposition",
      criterion: "process",
      text: "Still transfers to the ECLS centre after ROSC for ICU care and possible circulatory support.",
      points: 1,
      teaching: "Myocardial dysfunction after hypothermic arrest can need ECLS even after ROSC.",
      source: "erc",
    },
    {
      id: "hy-c1",
      competency: "communication",
      criterion: "process",
      text: "Gives his wife an honest update with clear next steps and no false reassurance.",
      points: 1,
      teaching: "Say what happened, where he is going and what is not yet known. Offer support.",
      source: "erc",
    },
    {
      id: "hy-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the rescue crew for the timeline: when he was last seen, when found, when he arrested, whether it was witnessed, and the time to CPR.",
      points: 3,
      teaching: "A witnessed arrest with immediate CPR has the best outcome. CPR duration feeds the HOPE score and the ECLS decision.",
      source: "hope",
    },
    {
      id: "hy-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about asphyxia: snow burial or submersion, and whether he was breathing and talking before the arrest.",
      points: 3,
      teaching: "Hypothermia before arrest protects the brain. Asphyxia first, as in avalanche burial, carries a far worse outlook.",
      source: "hope",
    },
    {
      id: "hy-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks what was done before arrival: shocks, drugs, airway and rewarming.",
      points: 2,
      teaching: "Prior shocks and drugs count toward the limits used below 30 °C. Knowing them avoids stacking doses in a cold heart.",
      source: "erc",
    },
    {
      id: "hy-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about injuries, drugs or alcohol, medications and past medical history.",
      points: 1,
      teaching: "Trauma, intoxicants and illness change both the cause of the collapse and the futility assessment.",
      source: "wms",
    },
  ],
  sources: [
    {
      id: "wms",
      citation:
        "Dow J, Giesbrecht GG, Danzl DF, et al. Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia. 2019 update. Wilderness and Environmental Medicine. 2019.",
    },
    {
      id: "erc",
      citation: "Lott C, Truhlář A, Alfonzo A, et al. European Resuscitation Council Guidelines 2021. Cardiac arrest in special circumstances. Resuscitation. 2021.",
    },
    {
      id: "hope",
      citation:
        "Pasquier M, Hugli O, Paal P, et al. Hypothermia outcome prediction after extracorporeal life support for hypothermic cardiac arrest patients. The HOPE score. Resuscitation. 2018.",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
