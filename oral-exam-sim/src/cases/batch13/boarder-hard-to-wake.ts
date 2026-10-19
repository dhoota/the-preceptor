// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const boarderHardToWake: OralCase = {
  id: "boarder-hard-to-wake",
  title: "Hard to wake before morning rounds",
  blueprint: "geri",
  alsoCovers: ["neuro", "tox", "systems"],
  priorityTopic: "loc",
  keyFeatures: [
    { topic: "loc", n: 1 },
    { topic: "loc", n: 2 },
    { topic: "loc", n: 3 },
    { topic: "loc", n: 4 },
    { topic: "loc", n: 5 },
  ],
  summary: "An older man admitted overnight and still waiting in the department for a ward bed cannot be woken on the early morning vital signs round.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "It is 05:30. A 79 year old man admitted to medicine last evening and still waiting in your department for a bed is hard to wake. " +
    "The nearest neurosurgery service is 2 hours away by road.",
  card: {
    vitals: {
      temperature: "37.4°C oral",
      pulse: "64/minute irregular",
      resp: "8/minute",
      bp: "158/84 mmHg",
      o2sat: "86% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "Apixaban, gliclazide, amlodipine, tamsulosin. In hospital: cefazolin, hydromorphone, zopiclone",
    allergies: "None known",
  },
  findings: [
    {
      id: "found",
      label: "How the nurse found him",
      result:
        "On the 05:30 round he was snoring and did not wake to his name. He opens his eyes briefly to pressure, makes moaning sounds and pushes her hand away. " +
        "At 01:00 he was awake and chatting and asked for something to help him sleep.",
    },
    {
      id: "admission",
      label: "Why he was admitted",
      result: "Cellulitis of the left lower leg, seen at 17:00 yesterday. Admitted to medicine at 19:00 for IV cefazolin. No ward bed yet.",
    },
    {
      id: "mar",
      label: "Medications given overnight",
      result:
        "Cefazolin 2 g IV at 20:00 and 04:00. Gliclazide 80 mg orally and apixaban 5 mg orally at 21:00 from his home list. " +
        "Hydromorphone 1 mg IV at 22:50 and again at 02:40 for leg pain. Zopiclone 7.5 mg orally at 23:00. He ate two crackers at supper and nothing since.",
    },
    {
      id: "night",
      label: "Overnight events",
      result:
        "Nursing note at 02:20: 'Found sitting on the floor beside the stretcher. States he slipped going to the washroom. No injury seen. Helped back to bed.' No physician was told. " +
        "The patient on the next hallway stretcher says he heard a loud bang and saw him hit his head on the side rail.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Type 2 diabetes for 15 years. Chronic kidney disease, baseline creatinine about 150 µmol/L. Atrial fibrillation. Hypertension. Enlarged prostate. No stroke, seizures or memory problems.",
    },
    {
      id: "home-meds",
      label: "Home medications and allergies",
      result:
        "Apixaban 5 mg twice daily. Gliclazide 80 mg twice daily. Amlodipine 5 mg daily. Tamsulosin 0.4 mg daily. No opioids or sleeping pills at home. No allergies.",
    },
    {
      id: "wife",
      label: "Collateral from his wife by phone",
      result:
        "\"He was fine when I left at nine. He is sharp as a tack. He does the crossword in pen and still drives. He never takes sleeping pills and he does not drink.\"",
    },
    {
      id: "social",
      label: "Social history",
      result: "Retired machinist. Lives with his wife in a bungalow. Independent in all activities. No alcohol, tobacco or other drugs.",
    },
    {
      id: "exam",
      label: "Exam at 05:35",
      result:
        "GCS 9 (E2 V2 M5). Pupils 2 mm, equal, sluggish. Shallow breathing at 8 with snoring. Skin cool and sweaty. " +
        "Boggy 3 cm swelling over the right parietal scalp. Moves the right side more than the left to pressure. Left plantar response extensor. No neck stiffness. Left leg cellulitis is improving.",
    },
    {
      id: "glucose",
      label: "Capillary glucose",
      result: "2.1 mmol/L at 05:36.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.28. pCO2 62 mmHg. Bicarbonate 28 mmol/L. Lactate 1.6 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Creatinine 168 µmol/L, eGFR 34 mL/min/1.73 m2. Sodium 136 mmol/L. Potassium 4.8 mmol/L. Urea 14 mmol/L. Hemoglobin 128 g/L. Platelets 210 x 10^9/L. INR 1.2. White cells 13.1 x 10^9/L.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Atrial fibrillation at 64. Normal QRS and QT. No acute ST change.",
    },
    {
      id: "response",
      label: "After dextrose and naloxone",
      result:
        "Glucose 8.4 mmol/L. Resp 16. SpO2 95% on 2 L. GCS 13 (E3 V4 M6). Pupils 3 mm. He says his head hurts. His left arm drifts down and his left grip is weaker.",
    },
    {
      id: "ct",
      label: "CT head without contrast",
      result: "Acute right convexity subdural hematoma, 9 mm thick, with 3 mm midline shift. No skull fracture. No other bleeding.",
    },
    {
      id: "gcs-chart",
      label: "Neuro observation chart",
      result:
        "05:35 GCS 9 (E2 V2 M5). 05:50 GCS 13 (E3 V4 M6). 06:20 GCS 13 (E3 V4 M6). 06:45 GCS 11 (E3 V3 M5), sweaty again. Pupils 3 mm and equal throughout.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "05:30",
      text: "The nurse calls you to the hallway stretcher. \"He was fine at one o'clock. Now I can't wake him and his sats are 86 percent.\"",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What do you do right now?",
      seconds: 90,
      modelAnswer: [
        "Move him to a monitored resus bed. Call for help.",
        "Airway positioning and bag valve mask ventilation with oxygen. His resp rate is 8. Ventilation comes before history.",
        "Capillary glucose now. Dextrose 10 to 25 g IV, 20 to 50 mL of D50W, if it is low.",
        "Naloxone 0.04 mg IV, repeated and increased every 2 minutes until breathing is adequate. The goal is ventilation, not full arousal.",
        "Record the GCS by component, pupils and focal signs before and after each treatment.",
        "Venous gas, blood work and ECG.",
      ],
      rubric: ["lc-m1", "lc-m2", "lc-m3", "lc-p1"],
      choices: [
        {
          id: "c-abc",
          label:
            "I moved him to resus, bagged him with oxygen, checked a glucose of 2.1 and gave 50 mL of D50W IV, then gave naloxone 0.04 mg IV every 2 minutes until his resp rate was over 12. I recorded his GCS and pupils before and after.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Excellent. You supported ventilation first, then corrected two reversible causes at once. " +
            "Small titrated naloxone doses restore breathing without abrupt pain or agitation. Recording GCS before and after each step shows what each treatment did.",
        },
        {
          id: "c-naloxone",
          label: "I gave naloxone 0.4 mg IV. His breathing picked up, so I asked the nurse to keep an eye on him.",
          next: "s-naloxone",
          quality: "partial",
          feedback:
            "Naloxone helped his breathing, but you did not check a glucose. Hypoglycemia is the first reversible cause to exclude in anyone with decreased consciousness. " +
            "The examiner also wanted a GCS record and a search for other causes.",
        },
        {
          id: "c-sleep",
          label: "He had hydromorphone and zopiclone. I put him on oxygen, held the next doses and let him sleep it off.",
          next: "s-sleep",
          quality: "unsafe",
          feedback:
            "Blaming the sedatives without checking glucose, ventilation or for a head injury can be fatal. " +
            "A resp rate of 8 with a saturation of 86 percent needs assisted ventilation, not supplemental oxygen alone.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-naloxone",
      phase: "05:50",
      text: "The nurse calls back. He is sweaty and moaning and has not woken further. She checks a glucose on her own. It is 1.9 mmol/L. You give 50 mL of D50W IV.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-sleep",
      phase: "05:55",
      text:
        "Twenty minutes later the respiratory therapist finds him with a saturation of 80 percent and pCO2 of 74 mmHg on a gas. She starts bagging him and calls you. His glucose is 1.8. You give D50W and titrated naloxone.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "He is breathing and his glucose is corrected. Where do you get the history, and what do you need to know?",
      seconds: 75,
      modelAnswer: [
        "The medication record: two doses of hydromorphone, zopiclone, gliclazide given with almost no food, apixaban at 21:00.",
        "The nurse and the chart: last normal at 01:00, and any overnight events.",
        "The patient next to him: he fell at about 02:15 and hit his head on the rail. Nobody told a physician.",
        "His wife: his usual state is fully independent and sharp. No alcohol, no sleeping pills at home.",
        "Past history: chronic kidney disease, diabetes, atrial fibrillation on apixaban. No seizures, stroke or dementia.",
        "Kidney disease lets hydromorphone metabolites build up and raises the risk of hypoglycemia on a sulfonylurea.",
      ],
      rubric: ["lc-h1", "lc-h2", "lc-h3", "lc-h4"],
      next: "s-better",
    },
    {
      kind: "say",
      id: "s-better",
      phase: "05:50",
      text:
        "After dextrose and naloxone his glucose is 8.4 and his resp rate is 16. His GCS is 13 (E3 V4 M6). He says his head hurts. His left arm drifts down. The nurse says, \"Great, it was the hydromorphone.\"",
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Is it solved?",
      prompt: "Do you agree with the nurse? What is your differential and what do you do next?",
      seconds: 75,
      modelAnswer: [
        "No. He is not back to his baseline and he has a new left sided weakness.",
        "Several causes can coexist: opioid and sedative toxicity, sulfonylurea hypoglycemia, hypercapnia, and a head injury on an anticoagulant.",
        "Also consider stroke, a seizure and postictal state, sepsis and uremia.",
        "Urgent CT head now. He fell, struck his head and takes apixaban. His last dose was at 21:00.",
        "The gas shows acute respiratory acidosis from hypoventilation.",
        "Neuro checks every 15 minutes while he is in CT and after.",
      ],
      rubric: ["lc-p2", "lc-p3", "lc-p4"],
      choices: [
        {
          id: "c-ct",
          label: "No. He is not at baseline and has a new left drift after a head strike on apixaban. I sent him for an urgent CT head with a nurse and a monitor.",
          next: "s-ct",
          quality: "strong",
          feedback:
            "Right. Improvement after naloxone and dextrose does not mean the only cause has been found. " +
            "A fall with head strike on an anticoagulant plus a focal deficit needs a CT now. Several causes often coexist in older patients.",
        },
        {
          id: "c-morning",
          label: "He is much better. I asked for a CT head with the morning list after the day team reviews him.",
          next: "s-morning",
          quality: "partial",
          feedback:
            "You thought of the head injury but you did not act on its urgency. An anticoagulated patient with a new focal deficit after a fall needs imaging now. " +
            "Expanding bleeding can drop his GCS in the next hour.",
        },
        {
          id: "c-agree",
          label: "I agreed it was the hydromorphone and zopiclone, cancelled further doses and asked for hourly checks.",
          next: "s-agree",
          quality: "unsafe",
          feedback:
            "This attributes his state to a minor cause before excluding a head injury. He has a new focal deficit and a scalp hematoma and takes apixaban. " +
            "The examiner wanted an urgent CT head.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-morning",
      phase: "06:30",
      text: "The nurse calls you at 06:30. His left arm is now weaker and he is harder to rouse. You send him for an urgent CT head.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-agree",
      phase: "06:40",
      text: "On the hourly check his GCS is 11 and his left side barely moves. The charge nurse asks whether he has had a CT. You send him now.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "CT result",
      text: "The CT shows a 9 mm acute right subdural hematoma with 3 mm of midline shift. There is no fracture.",
      next: "q-reverse",
    },
    {
      kind: "question",
      id: "q-reverse",
      phase: "The bleed",
      prompt: "How do you manage the subdural hematoma?",
      seconds: 75,
      modelAnswer: [
        "This is a major bleed in a critical site. Hold apixaban.",
        "Reverse the factor Xa inhibitor: andexanet alfa where it is available, otherwise prothrombin complex concentrate per local protocol. Canadian regimens are a fixed 2000 units IV, or 25 to 50 units/kg to a maximum of 3000 units. For him, 2000 units is about 29 units/kg.",
        "Do not give frozen plasma or vitamin K for apixaban. They do not reverse it.",
        "Call neurosurgery now through CritiCall. Send the images.",
        "Head of bed up to 30 degrees. Neuro checks every 15 minutes. Avoid hypoxia, hypercapnia, hypoglycemia and hypotension.",
        "No more opioids or sedatives that cloud the exam.",
      ],
      rubric: ["lc-m4", "lc-pr3"],
      choices: [
        {
          id: "c-reverse",
          label:
            "I held the apixaban, gave prothrombin complex concentrate 2000 units IV because andexanet was not available, and called neurosurgery through CritiCall with the images.",
          next: "s-turn",
          quality: "strong",
          feedback:
            "Correct. An intracranial bleed on a factor Xa inhibitor is a life threatening bleed that warrants reversal. " +
            "Andexanet is the specific agent, and prothrombin complex concentrate is used when it is not available. The best PCC dose is uncertain, and a fixed 2000 units or 25 to 50 units/kg are both accepted. " +
            "Early neurosurgical contact allows planning for transfer.",
        },
        {
          id: "c-plasma",
          label: "I gave vitamin K 10 mg IV and 4 units of frozen plasma.",
          next: "s-plasma",
          quality: "partial",
          feedback:
            "Reversal was the right instinct, but vitamin K and plasma reverse warfarin, not apixaban. Four units of plasma is also a large volume for an older man. " +
            "The examiner wanted andexanet or prothrombin complex concentrate.",
        },
        {
          id: "c-no-reverse",
          label: "The bleed is small and apixaban wears off quickly, so I held off reversal and restarted it in the morning for his atrial fibrillation.",
          next: "s-no-reverse",
          quality: "unsafe",
          feedback:
            "Any intracranial bleed is a major bleed. His kidney disease can slow apixaban clearance and his last dose was only 9 hours ago. " +
            "Anticoagulation must be held and reversal considered now. Restarting is decided later with neurosurgery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-plasma",
      phase: "06:45",
      text: "The pharmacist calls to say plasma will not reverse apixaban and suggests prothrombin complex concentrate. You stop the plasma, give 2000 units of PCC and call neurosurgery.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-no-reverse",
      phase: "06:45",
      text: "The neurosurgeon on the phone asks for reversal now and wants to know why apixaban was not held. You give prothrombin complex concentrate 2000 units and cancel the morning dose.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-turn",
      phase: "Before transfer",
      text:
        "Neurosurgery accepts him. While the transport team is on the way, the nurse calls you. His GCS has dropped from 13 to 11 (E3 V3 M5). He is sweaty again. His pupils are equal at 3 mm.",
      next: "q-recurrent",
    },
    {
      kind: "question",
      id: "q-recurrent",
      phase: "Worse again",
      prompt: "What do you do?",
      seconds: 75,
      modelAnswer: [
        "Check a glucose before blaming the subdural. Sweating points to hypoglycemia.",
        "If low, D50W 50 mL IV, then a dextrose 10 percent infusion.",
        "Gliclazide with kidney disease and no food causes recurrent hypoglycemia. Give octreotide 50 mcg SC or IV, then every 6 hours.",
        "Hourly glucose for at least 24 hours.",
        "If his GCS does not return to 13 once glucose is normal, repeat the CT and tell neurosurgery.",
        "Recheck breathing. Naloxone wears off in 20 to 90 minutes and hydromorphone may outlast it.",
      ],
      rubric: ["lc-m5", "lc-pr1"],
      choices: [
        {
          id: "c-octreotide",
          label:
            "I checked a glucose of 2.6, gave D50W, started a dextrose 10 percent infusion and octreotide 50 mcg subcutaneously every 6 hours, and planned a repeat CT if his GCS did not come back.",
          next: "q-gcs",
          quality: "strong",
          feedback:
            "Good. Checking glucose first stopped you from chasing the wrong cause. " +
            "Octreotide blocks the insulin release that sulfonylureas drive, which dextrose alone can make worse. Repeat imaging is the right backup plan.",
        },
        {
          id: "c-dextrose-only",
          label: "His glucose was 2.6. I gave another D50W bolus and asked for glucose checks every hour.",
          next: "s-dextrose-only",
          quality: "partial",
          feedback:
            "Correcting the glucose was right, but boluses alone stimulate more insulin release from a sulfonylurea and the low will come back. " +
            "The examiner wanted a dextrose infusion and octreotide.",
        },
        {
          id: "c-blame-bleed",
          label: "The subdural must be expanding. I called for an urgent transfer without checking his glucose.",
          next: "s-blame-bleed",
          quality: "unsafe",
          feedback:
            "A drop in GCS has many causes. Hypoglycemia is quick to check and fix, and it can cause lasting brain injury if missed. " +
            "Always check glucose before you attribute a new decline to the known diagnosis.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-dextrose-only",
      phase: "07:40",
      text: "An hour later his glucose is 2.4 again. The pharmacist suggests octreotide. You start octreotide 50 mcg subcutaneously and a dextrose 10 percent infusion.",
      next: "q-gcs",
    },
    {
      kind: "say",
      id: "s-blame-bleed",
      phase: "07:00",
      text: "The transport nurse checks a glucose before leaving. It is 2.2 mmol/L. You give D50W, start a dextrose infusion and octreotide, and his GCS returns to 13.",
      next: "q-gcs",
    },
    {
      kind: "question",
      id: "q-gcs",
      phase: "Handover",
      prompt: "The transport team arrives. How do you describe his level of consciousness in your note and handover?",
      seconds: 60,
      modelAnswer: [
        "GCS by component, not just a total. E3 V4 M6 now.",
        "Each score with the time and what happened in between: 9 at 05:35, 13 after dextrose and naloxone, 11 with the second low glucose, 13 again after treatment.",
        "Pupils, focal signs and the left drift.",
        "Plain description of what he does, for example opens eyes to voice, confused speech, obeys commands.",
        "Avoid vague terms such as obtunded or drowsy on their own.",
        "Glucose plan, naloxone available, apixaban held and reversed, and when the next check is due.",
      ],
      rubric: ["lc-pr2", "lc-pr3"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "His wife",
      prompt: "His wife arrives. She asks what happened to her husband overnight. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Private room. Introduce yourself and check what she knows.",
        "Facts: he fell in the night and hit his head, and the fall was not reported to a physician. He has a bleed on the brain.",
        "He also received medications that, with his kidney disease and little food, made him very sleepy and his sugar very low.",
        "Apologize. Say it is being reviewed and she will hear what is learned.",
        "Explain the transfer to neurosurgery and what may happen there.",
        "Document the conversation.",
      ],
      rubric: ["lc-pr4"],
      next: "q-safety",
    },
    {
      kind: "question",
      id: "q-safety",
      phase: "After the shift",
      prompt: "What went wrong overnight, and what would you change?",
      seconds: 60,
      modelAnswer: [
        "Opioid naive, older, kidney disease: hydromorphone 1 mg IV twice plus zopiclone was too much.",
        "Gliclazide given from the home list when he was barely eating.",
        "An anticoagulated patient fell and hit his head and no physician was told.",
        "Boarded patients in hallways get less monitoring.",
        "Fixes: a post fall huddle rule that requires physician review for anyone on an anticoagulant, lower opioid starting doses in older adults, holding sulfonylureas when intake is poor.",
        "File a patient safety report.",
      ],
      rubric: ["lc-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He is transferred at 08:10 with a dextrose infusion running. His subdural does not expand and is managed without surgery. His glucose is stable after 30 hours. He goes home on day 8, back to his crossword. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "lc-h1",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the medication record: two doses of hydromorphone, zopiclone, gliclazide given with almost no food, and the time of the last apixaban dose.",
      points: 2,
      teaching: "Sedatives given with opioids sharply raise the risk of respiratory depression. Kidney disease and old age prolong opioid effects.",
      source: "boyer",
    },
    {
      id: "lc-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks staff and the neighbouring patient about overnight events and learns of the fall with a head strike at about 02:15.",
      points: 2,
      teaching: "In an anticoagulated patient, any fall with head strike changes the differential. The time of the last dose guides the reversal decision.",
      source: "tc-bleeding",
    },
    {
      id: "lc-h3",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from his wife about his usual mental state, when he was last normal, alcohol use and sleeping pills.",
      points: 2,
      teaching: "Only someone who knows him can tell you how far he is from his baseline. A sharp, independent man who was chatting at 01:00 needs a full search for why he is now unresponsive.",
      source: "boyer",
    },
    {
      id: "lc-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about diabetes, chronic kidney disease, atrial fibrillation and any history of seizures, stroke or dementia.",
      points: 1,
      teaching: "Older age and chronic kidney disease are risk factors for severe hypoglycemia on sulfonylureas.",
      source: "diabetes-canada",
    },
    {
      id: "lc-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Records the GCS by component, pupils, resp rate and focal signs at first contact.",
      points: 2,
      teaching: "A clear baseline GCS by component lets you judge the effect of each treatment and spot a later decline.",
      source: "gcs",
    },
    {
      id: "lc-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Builds a broad differential: opioid and sedative toxicity, hypoglycemia, hypercapnia, intracranial bleeding, stroke, seizure, sepsis and uremia, and recognizes that several can coexist.",
      points: 2,
      critical: true,
      teaching: "Miosis and coma can come from sedatives as well as opioids. Look for every contributing cause, not just the first one you find.",
      source: "boyer",
    },
    {
      id: "lc-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes that he is not back to baseline and has a new left sided deficit after correction, and gets an urgent CT head because of the fall on apixaban.",
      points: 2,
      critical: true,
      teaching: "Do not attribute decreased consciousness to medications until head injury is excluded, especially on an anticoagulant.",
      source: "tc-bleeding",
    },
    {
      id: "lc-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets the gas as acute respiratory acidosis and the CT as an acute subdural hematoma with midline shift, a major bleed at a critical site.",
      points: 1,
      teaching: "Bleeding in a critical site such as the brain is a major bleed by definition and needs the anticoagulant held.",
      source: "tc-bleeding",
    },
    {
      id: "lc-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Supports ventilation with airway positioning and a bag valve mask for a resp rate of 8 before taking a history.",
      points: 2,
      teaching: "For stupor with a resp rate of 12 or less, ventilate with a bag valve mask. Restoring ventilation takes precedence over history and tests.",
      source: "boyer",
    },
    {
      id: "lc-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Checks a capillary glucose at once and gives 10 to 25 g of dextrose IV (20 to 50 mL of D50W).",
      points: 2,
      critical: true,
      teaching: "Severe hypoglycemia in an unconscious patient with IV access is treated with 10 to 25 g of IV glucose over 1 to 3 minutes.",
      source: "diabetes-canada",
    },
    {
      id: "lc-m3",
      competency: "management",
      criterion: "management",
      text: "Gives naloxone starting at 0.04 mg IV, increasing every 2 minutes, aiming for adequate breathing rather than full arousal.",
      points: 2,
      teaching: "The adult starting dose of naloxone is 0.04 mg, escalated every 2 minutes. Its effect lasts 20 to 90 minutes, often less than the opioid.",
      source: "boyer",
    },
    {
      id: "lc-m4",
      competency: "management",
      criterion: "management",
      text: "Holds apixaban and reverses it with andexanet or, if unavailable, prothrombin complex concentrate, and avoids plasma and vitamin K.",
      points: 2,
      teaching: "Thrombosis Canada advises a specific reversal agent, andexanet, if available, and otherwise PCC. Andexanet is rarely stocked in Canada and carries a thrombotic risk, so its role is debated. Plasma and vitamin K do not reverse apixaban.",
      source: "tc-bleeding",
    },
    {
      id: "lc-m5",
      competency: "management",
      criterion: "management",
      text: "Treats recurrent sulfonylurea hypoglycemia with a dextrose infusion and octreotide 50 mcg SC or IV every 6 hours, with hourly glucose checks.",
      points: 2,
      teaching: "Sulfonylurea hypoglycemia often recurs after dextrose boluses. Octreotide suppresses insulin release and reduces recurrence.",
      source: "octreotide",
    },
    {
      id: "lc-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Reassesses after every intervention and checks glucose before attributing the new drop in GCS to the subdural.",
      points: 2,
      teaching: "When a patient worsens, recheck the quick reversible causes first. Recurrent hypoglycemia is common after sulfonylureas.",
      source: "octreotide",
    },
    {
      id: "lc-pr2",
      competency: "communication",
      criterion: "process",
      text: "Documents and hands over the GCS by component with times, pupils, focal signs and plain descriptions of what he does.",
      points: 2,
      teaching: "Report the eye, verbal and motor scores separately for an individual patient. The trend over time matters more than one number.",
      source: "gcs",
    },
    {
      id: "lc-pr3",
      competency: "disposition",
      criterion: "process",
      text: "Arranges transfer to neurosurgery with a monitored escort, a dextrose infusion, naloxone on hand and a plan for neuro and glucose checks.",
      points: 1,
      teaching: "Recurrent respiratory depression and recurrent hypoglycemia both need close monitoring during transfer and after.",
      source: "boyer",
    },
    {
      id: "lc-pr4",
      competency: "communication",
      criterion: "process",
      text: "Discloses to his wife what happened overnight, including the unreported fall and the medication effects, apologizes and commits to a review.",
      points: 2,
      teaching: "Harm from care must be disclosed promptly with facts, an apology and the next steps.",
      source: "cpsi-disclosure",
    },
    {
      id: "lc-pr5",
      competency: "leadership",
      criterion: "process",
      text: "Identifies system fixes: lower opioid and sedative doses in older adults, holding sulfonylureas when intake is poor, a post fall rule for anticoagulated patients, and a safety report.",
      points: 1,
      teaching: "Preventing hypoglycemia is safer than treating it. Identify high risk patients and adjust secretagogues when they are not eating.",
      source: "diabetes-canada",
    },
  ],
  sources: [
    {
      id: "boyer",
      citation: "Boyer EW. Management of opioid analgesic overdose. New England Journal of Medicine. 2012.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/",
    },
    {
      id: "diabetes-canada",
      citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Yale JF, Paty B, Senior PA. Hypoglycemia. Canadian Journal of Diabetes. 2018.",
      url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14",
    },
    {
      id: "octreotide",
      citation: "Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clinical Toxicology. 2012.",
      url: "https://doi.org/10.3109/15563650.2012.734626",
    },
    {
      id: "tc-bleeding",
      citation: "Thrombosis Canada. Clinical guide. DOACs: Management of Bleeding. Version of 5 February 2024.",
      url: "https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf",
    },
    {
      id: "gcs",
      citation: "Teasdale G, Maas A, Lecky F, Manley G, Stocchetti N, Murray G. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurology. 2014.",
      url: "https://doi.org/10.1016/S1474-4422(14)70120-6",
    },
    {
      id: "cpsi-disclosure",
      citation: "Canadian Patient Safety Institute, now Healthcare Excellence Canada. Canadian Disclosure Guidelines. Being open and honest with patients and families. 2011.",
      url: "https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
