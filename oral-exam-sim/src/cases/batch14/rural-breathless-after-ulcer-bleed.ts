// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const ruralBreathlessAfterUlcerBleed: OralCase = {
  id: "rural-breathless-after-ulcer-bleed",
  title: "Breathless on a snowy Sunday",
  blueprint: "cardio",
  alsoCovers: ["resp", "comm"],
  priorityTopic: "dvt-pe",
  keyFeatures: [
    { topic: "dvt-pe", n: 1 },
    { topic: "dvt-pe", n: 2 },
    { topic: "dvt-pe", n: 3 },
    { topic: "dvt-pe", n: 4 },
    { topic: "dvt-pe", n: 5 },
    { topic: "dvt-pe", n: 6 },
    { topic: "dvt-pe", n: 7 },
  ],
  summary: "A man who was in hospital last month is short of breath at a small hospital far from a CT scanner.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a rural hospital when the following patient arrives. There is no CT scanner. The nearest CT is at a regional hospital 2 hours away by road. " +
    "A 67 year old man has had 2 days of shortness of breath and pain in the right side of his chest when he breathes in.",
  card: {
    vitals: {
      temperature: "37.3°C oral",
      pulse: "104/minute",
      resp: "22/minute",
      bp: "134/80 mmHg",
      o2sat: "93% on room air",
      weight: "86 kg (190 lb)",
    },
    medications: "Pantoprazole, ferrous fumarate, ramipril",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Short of breath walking to the barn for 2 days. Sharp right sided chest pain on breathing in since yesterday. His left calf has ached for 4 days, which he blamed on shovelling snow. " +
        "No hemoptysis, no fainting, no palpitations, no fever, no cough. No exertional chest pressure.",
    },
    {
      id: "ulcer",
      label: "Recent hospital stay",
      result:
        "Five weeks ago he was admitted for 4 days at the regional hospital with black stools and a hemoglobin of 74 g/L. Endoscopy showed a 1.5 cm duodenal ulcer with a visible vessel, treated with clips and injection. " +
        "He received 2 units of red cells and was in bed for most of the first 2 days. Helicobacter pylori was positive and he finished 14 days of treatment 2 weeks ago. A breath test to confirm cure is booked. " +
        "His ASA 81 mg, which he took for prevention only, was stopped. His hemoglobin at discharge was 98 g/L.",
    },
    {
      id: "now-bleeding",
      label: "Bleeding symptoms now",
      result:
        "No vomiting of blood. Stools are formed and dark green to black since he started iron, not sticky or tarry. No dizziness on standing. No nosebleeds or blood in the urine.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result:
        "Hypertension. No previous clots. No cancer. Normal colonoscopy 2 years ago. No heart or lung disease. Pantoprazole 40 mg daily, ferrous fumarate 300 mg daily, ramipril 5 mg daily. No NSAIDs since the bleed.",
    },
    {
      id: "family",
      label: "Family history",
      result: "His brother had a leg clot after a hip replacement.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Retired farmer. Lives with his wife 40 km from the hospital. They have a phone and a truck. Two drinks a week. Never smoked. The town pharmacy is closed until Monday. He has provincial drug coverage and a family doctor in town.",
    },
    {
      id: "general",
      label: "General and cardiorespiratory exam",
      result:
        "Speaking in full sentences. Mildly pale. Neck veins not distended. Normal heart sounds, no loud second sound, no rub. Chest clear with a few crackles at the right base.",
    },
    {
      id: "legs",
      label: "Leg exam",
      result: "Left calf 3.5 cm larger than the right, measured 10 cm below the tibial tuberosity. Pitting edema to the left knee. Tender along the deep veins of the left calf. Right leg normal.",
    },
    {
      id: "abdo",
      label: "Abdomen and rectal exam",
      result: "Soft and not tender. Rectal exam: formed dark green stool, not tarry.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 102/minute. Normal axis. No ST changes. T wave inversion in V1 only. No right bundle branch block.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 118 g/L. Platelets 286 x 10^9/L. White cells 8.9 x 10^9/L. Urea 6.1 mmol/L. Creatinine 92 µmol/L, creatinine clearance about 84 mL/minute. INR 1.0. ALT normal. High sensitivity troponin 9 ng/L, then 10 ng/L at 1 hour.",
    },
    {
      id: "ddimer",
      label: "D-dimer sent from triage",
      result: "2650 µg/L FEU.",
    },
    {
      id: "cxr",
      label: "Chest X-ray",
      result: "Small right pleural effusion. No consolidation. No pneumothorax. Normal heart size.",
    },
    {
      id: "pocus",
      label: "Your bedside ultrasound",
      result:
        "Two point compression: the left common femoral vein compresses fully. The left popliteal vein does not compress and contains echogenic material. Right leg normal. " +
        "Cardiac view: right ventricle smaller than the left, normal left ventricular function, no pericardial effusion.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "Laboratory runs CBC, chemistry, INR, troponin and D-dimer around the clock. NT-proBNP is not available. An ultrasound technologist works weekdays only. The emergency physicians do point of care ultrasound. " +
        "Inpatient beds and a hospital pharmacy that can dispense starter supplies. Road ambulance to the regional hospital takes 2 hours, longer in today's snow. It is Sunday at 18:00.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "18:00",
      text:
        "He walked in from the parking lot and had to stop twice. His wife says, 'He had a bleeding ulcer last month. Is it bleeding again?'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What history do you want?",
      seconds: 75,
      modelAnswer: [
        "Breathlessness, pleuritic pain and leg symptoms, with timing. Hemoptysis, syncope, palpitations, fever.",
        "VTE risk factors: the recent admission and bed rest, previous clots, cancer, family history, hormones, travel.",
        "The ulcer bleed: cause, endoscopic treatment, transfusion, Helicobacter pylori treatment and test of cure, ASA or NSAIDs stopped.",
        "Bleeding now: tarry stool, vomiting blood, dizziness. Iron turns stool dark but not tarry.",
        "Other bleeding risks: alcohol, falls, kidney or liver disease.",
        "Distance from hospital, phone, support at home and pharmacy access.",
      ],
      rubric: ["pe-h1", "pe-h2", "pe-h3", "pe-h4", "pe-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and probability",
      prompt: "What do you look for on examination, and how likely is a pulmonary embolism?",
      seconds: 75,
      modelAnswer: [
        "Calf circumference, edema and deep vein tenderness.",
        "Right heart strain: raised neck veins, loud second sound, hypotension, hypoxia.",
        "Signs of a new bleed: pallor, postural change, rectal exam for melena.",
        "Wells: signs of DVT 3, PE most likely 3, heart rate over 100 1.5. Total 7.5. PE likely. The admission was 5 weeks ago, so it scores no point.",
        "Differential: anemia from a rebleed, pneumonia, acute coronary syndrome, pericarditis, heart failure.",
      ],
      rubric: ["pe-a1", "pe-a2", "pe-a3"],
      next: "q-testing",
    },
    {
      kind: "question",
      id: "q-testing",
      phase: "Testing",
      prompt: "The D-dimer sent from triage is 2650 µg/L. There is no CT here. How do you confirm the diagnosis?",
      seconds: 90,
      modelAnswer: [
        "With a Wells score of 7.5, PE is likely. The D-dimer adds nothing.",
        "He has signs of a left leg DVT. Do a 2 point compression ultrasound of both legs at the bedside now.",
        "A proximal DVT in a patient with suspected PE confirms VTE. The treatment is the same, so he does not need CT tonight.",
        "Look at the right ventricle on the same scan. Check troponin.",
        "If the legs were negative: start anticoagulation now and arrange CT pulmonary angiography within 24 hours, not an emergency night transfer for a stable patient.",
      ],
      rubric: ["pe-a2", "pe-m1", "pe-m2"],
      choices: [
        {
          id: "c-pocus",
          label:
            "I did not use the D-dimer because his Wells score is 7.5. I did a 2 point compression ultrasound of both legs, found a non compressible left popliteal vein, which confirms VTE, and looked at his right ventricle. He does not need a CT tonight.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Correct. When PE is likely, skip the D-dimer. A proximal DVT confirms VTE in a patient with chest symptoms, so you can treat without CT. In pooled studies, 2 point ultrasound in the emergency department had a sensitivity of about 91 percent and a specificity of about 98 percent, and did best in the hands of trained attending physicians.",
        },
        {
          id: "c-transfer",
          label: "I gave a first dose of apixaban and arranged a road transfer tonight to the regional hospital for a CT pulmonary angiogram.",
          next: "s-transfer",
          quality: "partial",
          feedback:
            "Starting anticoagulation is right. But a 2 hour road transfer in snow is a risk for a stable patient, and his leg signs mean a bedside ultrasound can confirm VTE here. If imaging is needed, CT within 24 hours is acceptable once he is anticoagulated.",
        },
        {
          id: "c-rebleed",
          label: "I thought his breathlessness was anemia from a rebleeding ulcer, held anticoagulation and booked an outpatient CT at the regional hospital for Tuesday.",
          next: "s-reconsider",
          quality: "unsafe",
          feedback:
            "His hemoglobin has risen since discharge, his urea is normal and his stool is not tarry, so a rebleed does not explain this. A likely PE with leg signs left untreated for 2 days risks a fatal embolism. Anticoagulation starts as soon as possible when PE is likely.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-transfer",
      phase: "18:40",
      text:
        "The dispatcher calls back. The highway is closed by snow and no transfer is possible before morning. The charge nurse asks whether a bedside leg ultrasound would answer the question. You scan both legs.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-reconsider",
      phase: "18:40",
      text:
        "His wife asks why his left calf is so swollen. The nurse points out that his hemoglobin is 118 g/L, higher than at discharge, and his urea is normal. You go back to the bedside and scan both legs.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "19:00",
      text:
        "The left popliteal vein does not compress and contains thrombus. The common femoral vein compresses. His right ventricle looks normal. Troponin is 9 then 10 ng/L. " +
        "Creatinine clearance is about 84 mL/minute, platelets 286 x 10^9/L, INR 1.0. After acetaminophen his heart rate is 96/minute and his saturation 94 percent on room air.",
      next: "q-drug",
    },
    {
      kind: "question",
      id: "q-drug",
      phase: "Which anticoagulant",
      prompt: "His wife is worried about the ulcer. What anticoagulant, if any, do you start?",
      seconds: 90,
      modelAnswer: [
        "Confirmed VTE: proximal DVT with a clinically likely PE. He needs therapeutic anticoagulation now.",
        "The ulcer was treated 5 weeks ago, Helicobacter pylori has been treated, there is no bleeding now and his hemoglobin is rising. This is not a contraindication.",
        "Prior bleeding and anemia raise his bleeding risk, so choose the agent with the least bleeding: apixaban 10 mg twice daily for 7 days, then 5 mg twice daily. No dose change at a creatinine clearance of 84.",
        "Indirect evidence shows less recurrent VTE and less GI and intracranial bleeding with apixaban than with rivaroxaban.",
        "Continue pantoprazole. Keep ASA and NSAIDs stopped. Confirm Helicobacter pylori cure.",
        "No IVC filter. A filter is only for patients who cannot be anticoagulated. At least 3 months of treatment.",
      ],
      rubric: ["pe-m3", "pe-m4", "pe-m5"],
      choices: [
        {
          id: "c-apixaban",
          label:
            "I explained that his treated ulcer does not stop anticoagulation. I gave apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, chose it for its lower bleeding rate, continued his pantoprazole and kept ASA and NSAIDs stopped.",
          next: "s-gi",
          quality: "strong",
          feedback:
            "Correct. He has confirmed VTE and no active bleeding, so he needs full anticoagulation. Apixaban is first line, and in a large cohort it had lower rates of recurrent VTE and of GI and intracranial bleeding than rivaroxaban. A filter is not indicated when anticoagulation can be given.",
        },
        {
          id: "c-rivaroxaban",
          label: "I prescribed rivaroxaban 15 mg twice daily with food for 21 days, then 20 mg daily, and continued his pantoprazole.",
          next: "s-specialist",
          quality: "partial",
          feedback:
            "Rivaroxaban is an approved, effective regimen. But he bled 5 weeks ago, and indirect evidence shows more GI bleeding with rivaroxaban than with apixaban. The examiner wanted apixaban and a reason for the choice.",
        },
        {
          id: "c-filter",
          label: "I held anticoagulation because of the recent ulcer and asked the regional hospital to place an IVC filter this week.",
          next: "s-specialist",
          quality: "unsafe",
          feedback:
            "A filter is for patients who cannot be anticoagulated because of active or very high risk bleeding. His ulcer is treated and not bleeding. Untreated proximal DVT with PE carries a high risk of recurrence in the first weeks, and the filter would not be placed for days.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-specialist",
      phase: "19:20",
      text:
        "You call the thrombosis physician on call at the regional hospital. She advises apixaban 10 mg twice daily for 7 days, then 5 mg twice daily, with pantoprazole continued and no filter. You follow her advice. If he has had no anticoagulant yet, you give the first apixaban dose now. If he has already had a dose, apixaban starts when his next dose is due.",
      next: "s-gi",
    },
    {
      kind: "say",
      id: "s-gi",
      phase: "19:30",
      text:
        "The gastroenterologist who treated his ulcer returns your page. She says, 'That ulcer had a visible vessel. I would hold anticoagulation for 3 months and put in a filter.'",
      next: "q-consult",
    },
    {
      kind: "question",
      id: "q-consult",
      phase: "A consultant disagrees",
      prompt: "How do you respond to the gastroenterologist?",
      seconds: 60,
      modelAnswer: [
        "Thank her and acknowledge the concern. Ask what would make her consider him at very high risk of rebleeding now.",
        "Share the data: confirmed proximal DVT with likely PE, no bleeding since discharge, hemoglobin rising, urea normal.",
        "The first 3 months carry the highest risk of recurrent VTE. A filter is only for patients who cannot be anticoagulated, and it does not treat the clot.",
        "Offer measures that lower bleeding risk: apixaban, pantoprazole, no ASA or NSAIDs, Helicobacter pylori test of cure, hemoglobin check in 1 week.",
        "Agree the plan, involve the thrombosis physician if you still disagree, and document the discussion.",
      ],
      rubric: ["pe-c1", "pe-l1"],
      next: "q-site",
    },
    {
      kind: "question",
      id: "q-site",
      phase: "Where to treat",
      prompt: "He wants to go home tonight. Can he be treated as an outpatient?",
      seconds: 75,
      modelAnswer: [
        "Hemodynamically stable. Saturation 94 percent on room air, so no oxygen needed.",
        "No right ventricular strain on ultrasound and a normal troponin.",
        "Pain controlled with oral acetaminophen. No active bleeding. Creatinine clearance well above 15.",
        "sPESI 0: under 80, no cancer, no chronic heart or lung disease, heart rate under 110, systolic 100 or more, saturation 90 percent or more.",
        "Reliable follow up: a phone, his wife at home, a family doctor in town.",
        "He meets none of the criteria for hospital care, so home treatment is reasonable. Give the first dose here if he has not already had one.",
      ],
      rubric: ["pe-a4", "pe-d1"],
      choices: [
        {
          id: "c-home",
          label:
            "I checked his saturation on room air, heart rate, blood pressure, troponin and right ventricle, confirmed no active bleeding and controlled pain, and agreed he could go home with apixaban and a clear follow up plan.",
          next: "q-discharge",
          quality: "strong",
          feedback:
            "Correct. He needs no oxygen, has no right heart strain and a normal troponin, his pain is controlled and he is not bleeding. Most stable patients with VTE can be treated at home when follow up is reliable.",
        },
        {
          id: "c-admit-transfer",
          label: "I arranged transfer to the regional hospital tomorrow for admission because of the recent bleed.",
          next: "s-admit",
          quality: "partial",
          feedback:
            "Admission is safe but not needed. His bleed is treated and he has no active bleeding, oxygen need or right heart strain. A transfer adds risk and cost without benefit, and outpatient care keeps him close to home.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-admit",
      phase: "20:00",
      text:
        "The internist at the regional hospital says he meets criteria for treatment at home and asks you to treat him locally. He and his wife agree to the home plan.",
      next: "q-discharge",
    },
    {
      kind: "question",
      id: "q-discharge",
      phase: "Discharge",
      prompt: "The town pharmacy is closed until Monday. How do you discharge him safely?",
      seconds: 60,
      modelAnswer: [
        "Give the first dose here if he has not already had one, and dispense a starter supply from the hospital pharmacy so no doses are missed.",
        "Explain the twice daily schedule and the drop to 5 mg twice daily on day 8.",
        "Return now for worse breathlessness, chest pain, fainting, tarry stools, vomiting blood or dizziness. Iron makes stool dark but not tarry.",
        "Hemoglobin and review with his family doctor or a thrombosis clinic within 1 week. Leave the timing of the Helicobacter pylori test of cure to gastroenterology, since a PPI can make a breath test falsely negative.",
        "At least 3 months of anticoagulation for VTE after a hospital stay, then review.",
        "Written plan and contact numbers for him and his wife.",
      ],
      rubric: ["pe-d1", "pe-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He goes home at 21:00 with a starter supply. His hemoglobin is 124 g/L at 1 week. He has no bleeding and finishes 3 months of apixaban. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pe-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about VTE risk factors: the recent hospital stay and bed rest, previous clots, cancer, family history, hormones and travel.",
      points: 2,
      teaching: "Recent hospitalization is one of the commonest VTE risk factors, along with surgery, active cancer and estrogen. A recent stay matters even after the 4 week Wells window has passed.",
      source: "bc-vte",
    },
    {
      id: "pe-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the ulcer bleed: cause, endoscopic treatment, transfusion, Helicobacter pylori treatment, and whether ASA and NSAIDs were stopped.",
      points: 2,
      teaching: "Prior bleeding, anemia and antiplatelet drugs raise bleeding risk on anticoagulation. Knowing that the cause was treated decides whether anticoagulation is safe.",
      source: "bc-vte",
    },
    {
      id: "pe-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about bleeding now: tarry stool, vomiting blood, dizziness, and iron use.",
      points: 1,
      teaching: "Active bleeding changes both the choice and the place of treatment. Iron darkens stool but does not make it tarry.",
      source: "bc-vte",
    },
    {
      id: "pe-h4",
      competency: "assessment",
      criterion: "history",
      text: "Characterizes the breathlessness, pleuritic pain and leg symptoms, and asks about hemoptysis and syncope.",
      points: 1,
      teaching: "Leg symptoms before chest symptoms point to a DVT as the source. Hemoptysis scores in the Wells rule.",
      source: "bc-vte",
    },
    {
      id: "pe-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about distance from hospital, phone, support at home and access to a pharmacy.",
      points: 1,
      teaching: "A patient who cannot arrange reliable follow up or communication needs hospital care for initial therapy.",
      source: "bc-vte",
    },
    {
      id: "pe-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Measures both calves, examines for right heart strain, and looks for signs of a new GI bleed including a rectal exam.",
      points: 2,
      teaching: "Signs of DVT score 3 points in the Wells rule. In a patient with a recent bleed, the exam must also look for bleeding before anticoagulation.",
      source: "bc-vte",
    },
    {
      id: "pe-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Calculates the Wells score as 7.5, PE likely, and does not rely on the D-dimer.",
      points: 3,
      critical: true,
      teaching: "A Wells score of 4.5 or more makes PE likely. Do not order or use a D-dimer in that group. Go to imaging and start anticoagulation.",
      source: "bc-vte",
    },
    {
      id: "pe-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers anemia from a rebleed, pneumonia, acute coronary syndrome, pericarditis and heart failure.",
      points: 2,
      teaching: "When the work up does not confirm VTE, look for other causes such as myocardial infarction or heart failure. A rising hemoglobin and normal urea argue against a rebleed.",
      source: "bc-vte",
    },
    {
      id: "pe-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Uses saturation on room air, heart rate, blood pressure, troponin, right ventricular size, pain control and bleeding status to judge whether home treatment is safe.",
      points: 2,
      teaching: "Hospital care is needed for right heart strain or a markedly raised troponin or BNP, an oxygen need, severe pain needing opioids, active or high risk bleeding, a creatinine clearance under 15 or no reliable follow up.",
      source: "bc-vte",
    },
    {
      id: "pe-m1",
      competency: "management",
      criterion: "management",
      text: "Performs a 2 point compression ultrasound of both legs at the bedside in a hospital without CT.",
      points: 2,
      teaching: "In pooled studies, 2 point ultrasound in the emergency department had a sensitivity of about 91 percent and a specificity of about 98 percent. Trained attending physicians performed best.",
      source: "lee-pocus",
    },
    {
      id: "pe-m2",
      competency: "management",
      criterion: "management",
      text: "Accepts a proximal DVT as confirmation of VTE, starts anticoagulation without delay and does not transfer a stable patient at night for CT.",
      points: 2,
      critical: true,
      teaching: "When PE is likely, start anticoagulation as soon as possible. A positive leg ultrasound confirms VTE, and CT, if still needed, can follow within 24 hours.",
      source: "bc-vte",
    },
    {
      id: "pe-m3",
      competency: "management",
      criterion: "management",
      text: "Starts full dose therapeutic anticoagulation now, preferably apixaban 10 mg twice daily for 7 days then 5 mg twice daily, and does not withhold anticoagulation or request a filter for a treated ulcer.",
      points: 3,
      critical: true,
      teaching: "Apixaban and rivaroxaban are first line for most patients. A retrievable IVC filter is considered only when therapeutic anticoagulation cannot be given because of active or very high risk bleeding.",
      source: "bc-vte",
    },
    {
      id: "pe-m4",
      competency: "management",
      criterion: "management",
      text: "Chooses apixaban over rivaroxaban because of his recent GI bleed, and explains why.",
      points: 2,
      teaching: "In a matched cohort of over 37 000 patients with VTE, apixaban had lower rates of recurrent VTE and of GI and intracranial bleeding than rivaroxaban.",
      source: "dawwas",
    },
    {
      id: "pe-m5",
      competency: "management",
      criterion: "management",
      text: "Keeps ASA and NSAIDs stopped and continues his pantoprazole.",
      points: 1,
      teaching: "Concomitant antiplatelet therapy is one of the main bleeding risk factors on anticoagulation. ASA taken only for primary prevention has no reason to restart.",
      source: "bc-vte",
    },
    {
      id: "pe-c1",
      competency: "communication",
      criterion: "process",
      text: "Responds to the gastroenterologist respectfully with the key data, explains when a filter is indicated, offers bleeding risk reduction and documents the agreed plan.",
      points: 2,
      teaching: "A filter does not treat the clot and is reserved for patients who cannot be anticoagulated. A shared plan that lowers bleeding risk usually resolves the disagreement.",
      source: "bc-vte",
    },
    {
      id: "pe-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains to him and his wife why anticoagulation is safe after a treated ulcer, how to tell iron stool from melena, and when to return.",
      points: 1,
      teaching: "Patients with a prior bleed need to know which bleeding signs mean they must come back, so they neither stop treatment in fear nor ignore a real bleed.",
      source: "bc-vte",
    },
    {
      id: "pe-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges home treatment with the first dose given, a starter supply while the pharmacy is closed, hemoglobin and follow up within 1 week, return precautions and at least 3 months of treatment.",
      points: 2,
      teaching: "Most patients with stable VTE can be treated at home. Every acute VTE needs at least 3 months of therapeutic anticoagulation, and the first 3 months carry the highest risk of recurrence.",
      source: "bc-vte",
    },
    {
      id: "pe-l1",
      competency: "leadership",
      criterion: "process",
      text: "Makes timely decisions with local resources, involves the thrombosis physician when consultants disagree, and avoids an unnecessary transfer in poor weather.",
      points: 2,
      teaching: "A rural team can confirm and treat most VTE without CT. Escalate to a specialist when advice conflicts rather than delaying treatment.",
      source: "bc-vte",
    },
  ],
  sources: [
    {
      id: "bc-vte",
      citation: "British Columbia Guidelines and Protocols Advisory Committee. Venous thromboembolism. Diagnosis and management. BC Guidelines. 2024.",
      url: "https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf",
    },
    {
      id: "lee-pocus",
      citation:
        "Lee JH, Lee SH, Yun SJ. Comparison of 2-point and 3-point point-of-care ultrasound techniques for deep vein thrombosis at the emergency department. A meta-analysis. Medicine (Baltimore). 2019.",
    },
    {
      id: "dawwas",
      citation:
        "Dawwas GK, Leonard CE, Lewis JD, Cuker A. Risk for recurrent venous thromboembolism and bleeding with apixaban compared with rivaroxaban. An analysis of real-world data. Annals of Internal Medicine. 2022.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
