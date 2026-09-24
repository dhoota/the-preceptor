// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const febrileNeutropenia: OralCase = {
  id: "febrile-neutropenia",
  title: "Chills at home during cancer treatment",
  blueprint: "id",
  alsoCovers: ["resus", "comm"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [
    { topic: "infectious-diseases", n: 1 },
    { topic: "infectious-diseases", n: 2 },
    { topic: "infectious-diseases", n: 3 },
    { topic: "infectious-diseases", n: 6 },
    { topic: "infectious-diseases", n: 8 },
  ],
  summary: "A 57 year old woman on treatment for breast cancer calls the oncology line with fever and rigors and is sent to the emergency department.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre in Ontario when the following patient arrives. " +
    "The department is full, with 14 patients waiting. " +
    "A 57 year old woman on chemotherapy for breast cancer has fever and shaking chills, and the triage nurse asks if she can wait out front.",
  card: {
    vitals: {
      temperature: "38.9°C",
      pulse: "116/minute",
      resp: "22/minute",
      bp: "96/58 mmHg",
      o2sat: "96% on room air",
      weight: "65 kg (143 lb)",
    },
    medications: "Docetaxel and cyclophosphamide chemotherapy. Dexamethasone premedication.",
    allergies: "Penicillin, as listed in her chart",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "She is receiving adjuvant chemotherapy for breast cancer through an implanted port. Her last cycle of docetaxel and cyclophosphamide was 9 days ago. She had a temperature of 38.7 at home with shaking chills. Capillary glucose 7.4 mmol/L at triage. The triage nurse says: 'She looks okay. Can she wait out front until her blood count comes back? We have no beds.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "An academic hospital with an on site regional cancer centre, oncology on call, infectious diseases, interventional radiology and an ICU.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Flushed and tired. Right chest port site: 3 cm of redness, warmth and tenderness over the port pocket with no discharge. Mild mouth ulcers. Chest clear. " +
        "Abdomen soft and non tender, including the right lower quadrant. External perianal inspection normal. No rash. No meningismus.",
    },
    {
      id: "history",
      label: "History",
      result:
        "Fever and rigors since this morning. Mild sore mouth. No cough, urinary symptoms, diarrhea or abdominal pain. She did not receive growth factor injections after this cycle. " +
        "Dexamethasone premedication was only for 3 days around the cycle. No antibiotic prophylaxis. No prior resistant organisms.",
    },
    {
      id: "allergy",
      label: "Allergy history",
      result:
        "Her chart lists 'penicillin allergy'. She says she had an itchy flat rash on day 5 of amoxicillin as a child. No hives, swelling, breathing trouble, blistering or peeling. She has had cefazolin since for her breast surgery without a problem.",
    },
    {
      id: "cbc",
      label: "CBC",
      result: "WBC 0.6 x 10^9/L. Absolute neutrophil count 0.1 x 10^9/L. Hemoglobin 104 g/L. Platelets 88 x 10^9/L.",
    },
    {
      id: "chem",
      label: "Chemistry and lactate",
      result:
        "Sodium 134 mmol/L. Potassium 3.8 mmol/L. Creatinine 96 µmol/L. Bilirubin and liver enzymes normal. Venous lactate 3.6 mmol/L.",
    },
    {
      id: "cultures",
      label: "Cultures",
      result:
        "One set of blood cultures from the port and one peripheral set drawn. At 11 hours the lab calls: gram positive cocci in clusters in both sets. The port culture flagged positive 3 hours before the peripheral one.",
    },
    {
      id: "urine",
      label: "Urinalysis",
      result: "No leukocytes or nitrites. Urine culture sent.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "No consolidation. Port in good position.",
    },
    {
      id: "swab",
      label: "Respiratory viral swab",
      result: "Negative for SARS-CoV-2, influenza and RSV.",
    },
    {
      id: "mascc",
      label: "MASCC score at triage",
      result:
        "Moderate burden of illness 3. Systolic over 90 at triage 5. No COPD 4. Solid tumour 4. Needs IV fluid 0. Outpatient 3. Age under 60 2. Total 21.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At triage",
      text: "You look at her from the triage desk. She is shivering under a blanket and her husband is holding her oncology wallet card.",
      next: "q-triage",
    },
    {
      kind: "question",
      id: "q-triage",
      phase: "Triage",
      prompt: "Can she wait for her blood count? What do you do?",
      seconds: 60,
      modelAnswer: [
        "No. Fever during chemotherapy is presumed febrile neutropenia until proven otherwise.",
        "Her nadir timing at day 9 makes neutropenia very likely.",
        "She is tachycardic and borderline hypotensive. She needs a bed now.",
        "Draw blood cultures from each port lumen and a peripheral site.",
        "Give empiric antibiotics within 60 minutes of arrival. Do not wait for the CBC.",
      ],
      rubric: ["fn-a1", "fn-m1", "fn-l1"],
      choices: [
        {
          id: "c-now",
          label: "I had her brought into a monitored bed now, drew cultures from the port and a peripheral vein, and gave antibiotics within 60 minutes without waiting for the blood count.",
          next: "q-abx",
          quality: "strong",
          feedback:
            "Correct. Fever at the expected nadir is febrile neutropenia until the count says otherwise. Antibiotics within 60 minutes is the standard. " +
            "Moving her ahead of the queue is a systems decision you own as the physician.",
        },
        {
          id: "c-wait-cbc",
          label: "I agreed she could wait for her blood count, then decided on antibiotics.",
          next: "s-wait-cbc",
          quality: "partial",
          feedback:
            "Waiting for the count delays antibiotics in a patient already showing sepsis. Mortality rises with each hour of delay. " +
            "The examiner wanted empiric antibiotics within 60 minutes of arrival.",
        },
        {
          id: "c-tylenol",
          label: "I gave acetaminophen 1 g by mouth and asked triage to reassess her in an hour.",
          next: "s-wait-cbc",
          quality: "unsafe",
          feedback:
            "Treating the fever hides the key sign and delays the real treatment. She is tachycardic and borderline hypotensive. " +
            "The examiner wanted her roomed, cultured and given antibiotics within 60 minutes.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-cbc",
      phase: "Two and a half hours later",
      text:
        "Her husband comes to the desk. She is dizzy and her pressure is now 88/50. The CBC shows an absolute neutrophil count of 0.1. She is moved to resus. Antibiotics are now being ordered.",
      next: "q-abx",
    },
    {
      kind: "question",
      id: "q-abx",
      phase: "Antibiotics",
      prompt: "Her chart says 'penicillin allergy'. What antibiotics do you give, and at what doses?",
      seconds: 90,
      modelAnswer: [
        "Clarify the allergy. A delayed benign rash as a child is low risk. She has since had cefazolin safely.",
        "An antipseudomonal beta lactam is first line. Cefepime 2 g IV every 8 hours or piperacillin tazobactam 4.5 g IV every 6 hours.",
        "Cefepime is a reasonable choice given her history. Low risk histories do not rule out beta lactams.",
        "Add vancomycin because of hemodynamic instability and a suspected port infection. Load 25 mg/kg, about 1.6 g.",
        "Ceftriaxone alone does not cover Pseudomonas and is not adequate.",
      ],
      rubric: ["fn-m2", "fn-a2", "fn-m4"],
      choices: [
        {
          id: "c-cefepime-vanc",
          label: "I clarified that her reaction was a benign childhood rash, gave cefepime 2 g IV, and added vancomycin 25 mg/kg IV for her instability and port site infection.",
          next: "q-source",
          quality: "strong",
          feedback:
            "Well done. A benign delayed rash as a child is a low risk history. It should not deny her first line therapy. " +
            "Vancomycin is added for instability, a catheter infection, skin infection, pneumonia or MRSA colonization.",
        },
        {
          id: "c-avoid-bl",
          label: "I avoided all beta lactams and gave ciprofloxacin 400 mg IV with vancomycin.",
          next: "s-avoid-bl",
          quality: "partial",
          feedback:
            "A low risk history does not require avoiding beta lactams. Ciprofloxacin is not a recommended empiric agent for high risk febrile neutropenia in hospital. " +
            "The examiner wanted the allergy clarified and cefepime or piperacillin tazobactam given.",
        },
        {
          id: "c-ceftriaxone",
          label: "I gave ceftriaxone 2 g IV because it is safer with a penicillin allergy.",
          next: "s-avoid-bl",
          quality: "unsafe",
          feedback:
            "Ceftriaxone does not cover Pseudomonas, which can kill a neutropenic patient within hours. It also misses MRSA and coagulase negative staphylococci, the likely port organisms. " +
            "The examiner wanted an antipseudomonal beta lactam plus vancomycin.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-avoid-bl",
      phase: "Twenty minutes later",
      text:
        "The pharmacist calls. She reviewed the allergy history with the patient and confirms it is low risk. She recommends cefepime 2 g IV and vancomycin now. You agree and the first dose goes in.",
      next: "q-source",
    },
    {
      kind: "question",
      id: "q-source",
      phase: "Workup",
      prompt: "What is your focused search for a source, and what do you avoid?",
      seconds: 75,
      modelAnswer: [
        "Full skin exam including the port, lines and perianal area by inspection.",
        "Mouth for mucositis. Lungs. Abdomen for typhlitis in the right lower quadrant.",
        "Cultures from each port lumen and a peripheral vein, labelled by site. Urine culture.",
        "Chest X ray, respiratory viral swab, C. difficile testing if diarrhea.",
        "Lactate, CBC with differential, creatinine and liver tests.",
        "Avoid rectal temperatures and digital rectal exams.",
        "Ask about localizing symptoms, the last cycle and growth factor, prophylaxis, steroids and prior resistant organisms.",
      ],
      rubric: ["fn-a3", "fn-h1", "fn-h2", "fn-h3"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Risk and disposition",
      prompt:
        "Her husband says: 'Last time she had a fever they sent her home on pills.' The resident points out her MASCC score is 21, which is low risk. What do you decide?",
      seconds: 75,
      modelAnswer: [
        "MASCC 21 or more suggests low risk, but it applies to stable patients.",
        "She has tachycardia, a lactate of 3.6, a port pocket infection and needs IV fluid. Clinical judgment overrides the score.",
        "She needs admission with IV antibiotics. She is not a candidate for outpatient oral therapy.",
        "Outpatient care also needs close follow up, a reliable caregiver and no infection focus requiring IV therapy.",
      ],
      rubric: ["fn-d1"],
      choices: [
        {
          id: "c-admit",
          label: "I explained that the score does not apply when she shows signs of sepsis and a port infection, and admitted her on IV antibiotics.",
          next: "s-shock",
          quality: "strong",
          feedback:
            "Right. Risk scores support judgment. They do not replace it. Signs of sepsis or a focus needing IV therapy make her high risk whatever the score.",
        },
        {
          id: "c-home",
          label: "I discharged her on oral amoxicillin clavulanate and ciprofloxacin with oncology follow up tomorrow because her MASCC was 21.",
          next: "s-home",
          quality: "unsafe",
          feedback:
            "She has a lactate of 3.6, persistent tachycardia and a port infection. She is not low risk. " +
            "The examiner wanted admission on IV antibiotics.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-home",
      phase: "Before she leaves",
      text:
        "While the discharge papers are printing, the nurse calls you. She stood to dress and nearly fainted. Her pressure is 82/46. You cancel the discharge.",
      next: "s-shock",
    },
    {
      kind: "say",
      id: "s-shock",
      phase: "Deterioration",
      text:
        "She has had 2 L of balanced crystalloid. Her pressure is 84/48, MAP 60, heart rate 124. Repeat lactate is 4.1 mmol/L. She is now drowsy.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Septic shock",
      prompt: "What do you do now?",
      seconds: 75,
      modelAnswer: [
        "Septic shock. Call the ICU.",
        "Start norepinephrine to a MAP of 65 or more. A peripheral start is acceptable.",
        "Reassess fluid responsiveness with ultrasound before more fluid.",
        "Consider broadening to meropenem if she deteriorates or has risk for resistant organisms.",
        "Consider stress dose hydrocortisone if vasopressor needs rise.",
        "Tell oncology now.",
        "Reassess perfusion and lactate after each intervention.",
      ],
      rubric: ["fn-r1", "fn-c1", "fn-o1"],
      choices: [
        {
          id: "c-pressor",
          label: "I started norepinephrine peripherally to a MAP of 65, reassessed her volume with ultrasound, and called the ICU and oncology.",
          next: "q-port",
          quality: "strong",
          feedback:
            "Good. Neutropenic septic shock has a high mortality. Early vasopressors, ICU involvement and oncology input are all needed. " +
            "Using the port for vasopressors is best avoided if it is the likely source.",
        },
        {
          id: "c-fluid-only",
          label: "I gave another 2 L of fluid and waited to see if her pressure came up.",
          next: "s-fluid-only",
          quality: "partial",
          feedback:
            "Fluid alone after 2 L with a MAP of 60 delays vasopressor support. Reassess with ultrasound and start norepinephrine. " +
            "The examiner wanted a vasopressor and the ICU called.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fluid-only",
      phase: "One hour later",
      text: "Her MAP is 56 and her SpO2 has dropped to 91 percent. There are new B lines on ultrasound. You start norepinephrine and call the ICU.",
      next: "q-port",
    },
    {
      kind: "question",
      id: "q-port",
      phase: "The port",
      prompt: "Blood cultures grow gram positive cocci in clusters and the port bottle flagged first. What does this mean for the port?",
      seconds: 60,
      modelAnswer: [
        "Likely catheter related bloodstream infection with a port pocket infection, probably staphylococcal.",
        "A port pocket or tunnel infection is an indication to remove the device.",
        "Septic shock with a line source is also a reason to remove it.",
        "Discuss removal with oncology and interventional radiology. Place peripheral or new central access elsewhere.",
        "Continue vancomycin and repeat blood cultures.",
      ],
      rubric: ["fn-m3", "fn-c1"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family",
      prompt: "Her husband asks if this means the cancer is back. How do you respond?",
      seconds: 60,
      modelAnswer: [
        "No. This is a serious infection caused by low white cells after chemotherapy.",
        "Be honest that she is very sick and going to the ICU.",
        "Explain the port is likely the source and may need to come out.",
        "Her oncology team is involved and will discuss the effect on her treatment plan.",
      ],
      rubric: ["fn-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is admitted to the ICU on norepinephrine. Interventional radiology removes the port the next morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "fn-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Treats fever during chemotherapy as febrile neutropenia until proven otherwise, recognizing day 9 as the expected nadir.",
      points: 2,
      teaching: "Neutrophil counts usually bottom out 7 to 14 days after chemotherapy. Fever at that time is presumed neutropenic.",
      source: "idsa-fn",
    },
    {
      id: "fn-m1",
      competency: "management",
      criterion: "management",
      text: "Gives empiric antibiotics within 60 minutes of arrival without waiting for the CBC.",
      points: 3,
      critical: true,
      teaching: "Neutropenic patients can die within hours of gram negative bacteremia. Do not wait for the count.",
      source: "asco-idsa",
    },
    {
      id: "fn-l1",
      competency: "leadership",
      criterion: "process",
      text: "Overrides the queue to room her immediately despite a full department.",
      points: 1,
      teaching: "Fever in a chemotherapy patient is a time critical presentation. Triage systems should flag it.",
      source: "asco-idsa",
    },
    {
      id: "fn-m2",
      competency: "management",
      criterion: "management",
      text: "Chooses an antipseudomonal beta lactam, cefepime 2 g IV or piperacillin tazobactam 4.5 g IV, plus vancomycin for instability and port infection.",
      points: 3,
      critical: true,
      teaching: "Monotherapy with an antipseudomonal beta lactam is first line. Add vancomycin for instability, line or skin infection, pneumonia or MRSA.",
      source: "idsa-fn",
    },
    {
      id: "fn-a2",
      competency: "assessment",
      criterion: "history",
      text: "Clarifies the penicillin allergy history and recognizes a low risk reaction.",
      points: 2,
      teaching: "Most penicillin allergy labels are not true allergy. A benign delayed childhood rash is low risk and cephalosporins are usually safe.",
      source: "shenoy",
    },
    {
      id: "fn-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Does a focused source search including the port, mouth, perianal inspection and abdomen, with cultures from each lumen and a peripheral vein, and avoids rectal exams.",
      points: 2,
      teaching: "Neutropenic patients show few signs of inflammation. Paired cultures help identify a line source.",
      source: "idsa-fn",
    },
    {
      id: "fn-d1",
      competency: "disposition",
      criterion: "physical",
      text: "Uses clinical judgment over the MASCC score and admits for IV antibiotics.",
      points: 3,
      critical: true,
      teaching: "MASCC helps select stable low risk patients for outpatient care. Signs of sepsis or a focus needing IV therapy make her high risk.",
      source: "mascc",
    },
    {
      id: "fn-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Starts norepinephrine to a MAP of 65 or more after fluid and calls the ICU.",
      points: 2,
      teaching: "Neutropenic septic shock is managed like any septic shock, with early vasopressors and ICU care.",
      source: "ssc",
    },
    {
      id: "fn-m3",
      competency: "management",
      criterion: "physical",
      text: "Recognizes a port pocket infection with bacteremia and plans device removal.",
      points: 2,
      teaching: "A port pocket or tunnel infection, or septic shock from a line, generally needs the device removed.",
      source: "idsa-crbsi",
    },
    {
      id: "fn-c1",
      competency: "communication",
      criterion: "process",
      text: "Involves oncology, the ICU and interventional radiology early.",
      points: 1,
      teaching: "Oncology knows her regimen and plan. Early team involvement speeds line removal and ICU care.",
      source: "idsa-fn",
    },
    {
      id: "fn-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains to her husband that this is an infection from chemotherapy, not a sign of cancer return, and is honest about severity.",
      points: 1,
      teaching: "Families often fear recurrence. Separate the infection from the cancer clearly.",
      source: "asco-idsa",
    },
    {
      id: "fn-m4",
      competency: "management",
      criterion: "management",
      text: "Knows the criteria for adding vancomycin and does not add it routinely.",
      points: 1,
      teaching: "Routine vancomycin does not improve outcome in stable patients. Add it for the specific indications.",
      source: "idsa-fn",
    },
    {
      id: "fn-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks when her last chemotherapy cycle was, which agents she received, and whether she had growth factor support.",
      points: 2,
      teaching: "Most regimens reach the neutrophil nadir 7 to 14 days after a cycle. No growth factor support makes profound neutropenia more likely.",
      source: "idsa-fn",
    },
    {
      id: "fn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about localizing symptoms: cough, urinary symptoms, diarrhea, abdominal pain, mouth sores and pain at the port.",
      points: 2,
      teaching: "Neutropenic patients show few signs of inflammation, so symptoms often point to the source before the exam does.",
      source: "idsa-fn",
    },
    {
      id: "fn-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about antibiotic prophylaxis, steroid use, prior resistant organisms and recent hospital care.",
      points: 1,
      teaching: "Prophylaxis, steroids and past resistant organisms change the risk and the empiric antibiotic choice.",
      source: "idsa-fn",
    },
    {
      id: "fn-o1",
      competency: "resuscitation",
      criterion: "process",
      text: "Reassesses perfusion and lactate after each fluid bolus and escalates promptly when she does not respond.",
      points: 2,
      teaching: "Frequent reassessment catches the move from sepsis to septic shock early. Escalation should not wait for the next scheduled review.",
      source: "ssc",
    },
  ],
  sources: [
    {
      id: "idsa-fn",
      citation:
        "Freifeld AG, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011.",
    },
    {
      id: "asco-idsa",
      citation:
        "Taplitz RA, et al. Outpatient management of fever and neutropenia in adults treated for malignancy: American Society of Clinical Oncology and Infectious Diseases Society of America clinical practice guideline update. J Clin Oncol. 2018.",
    },
    {
      id: "mascc",
      citation:
        "Klastersky J, et al. The Multinational Association for Supportive Care in Cancer risk index: a multinational scoring system for identifying low risk febrile neutropenic cancer patients. J Clin Oncol. 2000.",
    },
    {
      id: "idsa-crbsi",
      citation:
        "Mermel LA, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter related infection: 2009 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009.",
    },
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
    },
    {
      id: "shenoy",
      citation: "Shenoy ES, et al. Evaluation and management of penicillin allergy: a review. JAMA. 2019.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
