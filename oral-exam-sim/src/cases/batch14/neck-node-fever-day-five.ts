// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const neckNodeFeverDayFive: OralCase = {
  id: "neck-node-fever-day-five",
  title: "Still hot two days after the neck lump visit",
  blueprint: "peds",
  alsoCovers: ["resus", "comm"],
  priorityTopic: "pediatric-fever",
  keyFeatures: [
    { topic: "pediatric-fever", n: 2 },
    { topic: "pediatric-fever", n: 3 },
    { topic: "pediatric-fever", n: 5 },
    { topic: "pediatric-fever", n: 8 },
    { topic: "shock", n: 4 },
  ],
  summary: "A school age girl returns with a fever and a neck lump that have not settled on an oral antibiotic.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. The children's hospital is 2 hours away by road. " +
    "A 5 year old girl is brought back by her mother 2 days after a visit here for a painful lump on the left side of her neck. She still has a high fever.",
  card: {
    vitals: {
      temperature: "39.4°C tympanic",
      pulse: "136/minute",
      resp: "24/minute",
      bp: "100/62 mmHg",
      o2sat: "98% on room air",
      weight: "24 kg (53 lb)",
    },
    medications: "Cephalexin 500 mg four times daily since 2 days ago. Acetaminophen and ibuprofen as needed.",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Fever began 5 days ago and reaches 39.8 to 40.1°C every day. The same day a painful lump appeared on the left side of her neck, and it hurts to turn her head. " +
        "Both eyes went red last evening, with no discharge and no pain in bright light. Today her lips are red and cracked at the corners. " +
        "A mild sore throat on day 1 only. No drooling, no trouble swallowing or breathing. Tummy ache and one loose stool yesterday. No cough.",
    },
    {
      id: "first-visit",
      label: "Visit to this department 2 days ago",
      result:
        "Temperature 39.2°C. A tender 3 cm mass on the left side of the neck with no fluctuance. Throat mildly red. Rapid strep test negative. No blood work. " +
        "The eyes, lips, skin and hands are not documented. Diagnosis: bacterial lymphadenitis. Cephalexin 500 mg four times daily for 10 days.",
    },
    {
      id: "course",
      label: "Response to the antibiotic",
      result: "She has taken every dose. The lump is no smaller and the fever is unchanged. Her mother asks for a stronger antibiotic.",
    },
    {
      id: "antipyretics",
      label: "Fever medicine at home",
      result:
        "Children's acetaminophen 160 mg per 5 mL, 7.5 mL (240 mg) every 6 hours, the dose the box gives for ages 4 to 5. " +
        "Children's ibuprofen 100 mg per 5 mL, 10 mL (200 mg) at bedtime. She has not been weighed since her checkup a year ago.",
    },
    {
      id: "intake",
      label: "Intake and output",
      result: "Drinking about two thirds of her usual amount. Eating little. Last passed urine 5 hours ago.",
    },
    {
      id: "pmh",
      label: "Past history and immunizations",
      result:
        "Born at term. No admissions. No heart disease. Immunizations up to date. " +
        "No new medicines before this illness. No joint pain or swelling, weight loss, night sweats or easy bruising.",
    },
    {
      id: "social",
      label: "Social history and exposures",
      result:
        "In senior kindergarten. No known sick contacts. A new kitten at home for a month, which scratches her arms. No travel. No known tuberculosis contact. No dental pain.",
    },
    {
      id: "general",
      label: "General appearance",
      result: "Flushed and irritable, holding her head tilted to the left. Alert and answers questions. Capillary refill 2 seconds. Warm hands and feet.",
    },
    {
      id: "neck",
      label: "Neck, throat and airway",
      result:
        "A group of several firm, rubbery, tender nodes in the left anterior neck, the largest about 3 cm. No fluctuance and no overlying redness. " +
        "Full neck movement, with pain. No trismus, no drooling, no stridor. Tonsils mildly red without exudate. The posterior pharyngeal wall does not bulge.",
    },
    {
      id: "eyes-mouth",
      label: "Eyes and mouth",
      result: "Both eyes show bulbar redness that spares the rim around the iris. No discharge. Lips red, dry and cracked at the corners. Red tongue with prominent papillae.",
    },
    {
      id: "skin-limbs",
      label: "Skin, hands and feet",
      result:
        "No rash. No peeling of the perineum or fingertips. Hands and feet look normal. Healing kitten scratches on both forearms with no papule at the scratch sites. No axillary or elbow nodes.",
    },
    {
      id: "cardio-abdo",
      label: "Heart, chest and abdomen",
      result: "Tachycardic. No murmur or gallop. Chest clear. Mild right upper quadrant tenderness. Liver edge at the costal margin.",
    },
    {
      id: "neck-us",
      label: "Neck ultrasound",
      result: "A cluster of several enlarged oval solid nodes, the largest 2.8 cm, with no liquid centre and no abscess. Mild surrounding soft tissue edema.",
    },
    {
      id: "cbc",
      label: "Complete blood count",
      result: "White cells 14.2 x 10^9/L, neutrophils 10.4 x 10^9/L, bands 2.6 x 10^9/L. Hemoglobin 104 g/L. Platelets 362 x 10^9/L.",
    },
    {
      id: "chem",
      label: "Inflammatory markers and chemistry",
      result: "CRP 168 mg/L. ESR 82 mm/hour. Albumin 28 g/L. ALT 74 U/L. Sodium 132 mmol/L. Potassium 4.0 mmol/L. Creatinine 38 µmol/L. Lactate 1.4 mmol/L.",
    },
    {
      id: "urine",
      label: "Urinalysis, midstream",
      result: "Leukocyte esterase trace. Nitrite negative. Microscopy 15 to 20 white cells per high power field. No bacteria seen. Culture pending.",
    },
    {
      id: "micro",
      label: "Other tests",
      result: "Monospot negative. Blood culture pending. Bartonella serology sent, result in 1 week.",
    },
    {
      id: "heart-tests",
      label: "ECG and bedside cardiac ultrasound",
      result: "ECG: sinus tachycardia at 134/minute, PR 150 ms, no ST changes. Your bedside view: good left ventricular squeeze, no pericardial effusion. No pediatric echocardiography on site.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In a pediatric room",
      text: "She sits on her mother's lap with her head tilted to the left. Her mother says, 'The antibiotic is not working. Does she need a stronger one?'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "Her mother is ready to answer your questions. What history do you want?",
      seconds: 75,
      modelAnswer: [
        "Fever start date, daily peak and response to medicine. Day 5 of fever changes the differential.",
        "When the lump appeared, how it has changed, and whether it is getting softer or more red.",
        "Every other Kawasaki feature, including any that came and went: red eyes, lip and mouth changes, rash, hand and foot swelling.",
        "The first visit and the response to 2 days of cephalexin.",
        "Exact antipyretic doses compared with her weight.",
        "Red flags for a deep neck infection: drooling, painful swallowing, trismus, stridor. Exposures: cat scratches, sick contacts, tuberculosis, travel.",
        "Clues to other causes: new drugs, joint pain, weight loss, night sweats, bruising.",
        "Intake and urine output.",
      ],
      rubric: ["kd-h1", "kd-h2", "kd-h3", "kd-h4", "kd-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and differential",
      prompt: "You examine her. What do you look for, and what do you think is going on?",
      seconds: 90,
      modelAnswer: [
        "The node group: number, size, consistency, fluctuance and overlying skin.",
        "Deep neck space signs: torticollis, trismus, drooling, stridor, a bulging posterior pharynx.",
        "Every principal feature: eyes, lips and tongue, rash, hands and feet, perineum. Scratch sites and other node groups.",
        "She has 5 days of fever, a node of 1.5 cm or more, bilateral non purulent conjunctival injection and oral changes. That is 3 principal features.",
        "A node that does not settle on antibiotics plus new eye and lip changes suggests Kawasaki disease presenting with a neck node first.",
        "Differential: bacterial lymphadenitis or abscess, retropharyngeal or parapharyngeal abscess, cat scratch disease, Epstein Barr virus, group A streptococcus, MIS-C, malignancy.",
      ],
      rubric: ["kd-a1", "kd-a2"],
      choices: [
        {
          id: "c-node-first",
          label:
            "I found a group of firm, non fluctuant nodes, bilateral non purulent conjunctival injection and red cracked lips. With 5 days of fever and no response to cephalexin, I suspected Kawasaki disease presenting with a neck node first, and kept a neck abscess, cat scratch disease and Epstein Barr virus on my differential.",
          next: "q-tests",
          quality: "strong",
          feedback:
            "Correct. Children whose Kawasaki disease starts with a neck node are older than in typical disease and are often first treated for bacterial adenitis. A third of one large series were admitted with that diagnosis. New eye and lip changes in a child whose node fails antibiotics should prompt the diagnosis.",
        },
        {
          id: "c-abscess",
          label: "I decided the cephalexin had failed, ordered a CT of her neck to look for an abscess and started IV cefazolin and clindamycin.",
          next: "s-ct",
          quality: "partial",
          feedback:
            "A neck abscess belongs in the differential, but you have missed the red eyes and cracked lips. Ultrasound is the first test for a neck mass in a child and uses no radiation. CT can show retropharyngeal edema in Kawasaki disease too, which can be mistaken for an abscess.",
        },
        {
          id: "c-switch",
          label: "I changed her to amoxicillin clavulanate and asked her family doctor to see her in 3 days.",
          next: "s-switch",
          quality: "unsafe",
          feedback:
            "This sends home a child with possible Kawasaki disease until day 8 of fever without a diagnosis. IVIG works best within 10 days of fever onset. Failure of a node to respond to antibiotics, with new eye and lip changes, needs a full assessment today.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "Twenty minutes later",
      text:
        "Before the CT, the nurse points out the red eyes and cracked lips and asks whether this could be Kawasaki disease. You cancel the CT, order a neck ultrasound and send blood work.",
      next: "q-tests",
    },
    {
      kind: "say",
      id: "s-switch",
      phase: "At discharge",
      text:
        "At the desk, the nurse asks whether you noticed that both eyes are red and her lips are cracked. You bring the family back to the room and reassess.",
      next: "q-tests",
    },
    {
      kind: "question",
      id: "q-tests",
      phase: "Investigations",
      prompt: "What investigations do you want, and how will they help you separate the causes of her neck mass?",
      seconds: 60,
      modelAnswer: [
        "Neck ultrasound first. A cluster of solid nodes with no liquid centre favours Kawasaki disease. A liquid centre favours an abscess.",
        "CT only if ultrasound cannot exclude a deep neck abscess. Retropharyngeal edema on CT is as common in node first Kawasaki disease as in bacterial infection and must not be read as proof of an abscess.",
        "CBC with differential and CRP: a high band count and CRP with a lower white count favour Kawasaki disease over bacterial adenitis.",
        "Blood culture, monospot and Bartonella serology for the other causes. ECG.",
        "The same blood work, with ESR, albumin, ALT and urinalysis, also tests the CPS incomplete Kawasaki criteria.",
      ],
      rubric: ["kd-a3", "kd-a5"],
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "Results",
      text:
        "The ultrasound shows a cluster of solid oval nodes up to 2.8 cm and no abscess. CRP is 168 mg/L, ESR 82 mm/hour, albumin 28 g/L, ALT 74 U/L, hemoglobin 104 g/L, white cells 14.2 x 10^9/L with 2.6 x 10^9/L bands, and platelets 362 x 10^9/L. " +
        "The urine has 15 to 20 white cells per high power field and no bacteria. The monospot is negative.",
      next: "q-treat",
    },
    {
      kind: "question",
      id: "q-treat",
      phase: "Treatment",
      prompt: "What is your diagnosis, and what treatment do you start? Give doses.",
      seconds: 90,
      modelAnswer: [
        "Kawasaki disease that started with a neck node. With 3 principal features it is incomplete disease, and her laboratory results meet the CPS criteria.",
        "IVIG 2 g/kg as a single infusion, so 48 g over 10 to 12 hours, now, on day 5 of fever. Do not wait to see whether antibiotics work.",
        "ASA 30 to 50 mg/kg/day divided every 6 hours, so 240 mg every 6 hours (40 mg/kg/day), then 3 to 5 mg/kg once daily when afebrile. Low dose from the start is also acceptable. Platelets must be over 80 x 10^9/L.",
        "Stop ibuprofen. NSAIDs are avoided with ASA.",
        "Acetaminophen 15 mg/kg, so 360 mg every 4 to 6 hours.",
        "Call the children's hospital pediatrician and cardiologist about echocardiography and transfer.",
      ],
      rubric: ["kd-m1", "kd-m2", "kd-m4"],
      choices: [
        {
          id: "c-ivig",
          label:
            "I diagnosed Kawasaki disease that started with a neck node, started IVIG 48 g and ASA 240 mg every 6 hours, stopped the ibuprofen, gave acetaminophen 360 mg and called the children's hospital about echocardiography.",
          next: "s-shock",
          quality: "strong",
          feedback:
            "Correct. Her laboratory results meet the incomplete criteria, so treatment is due now. IVIG 2 g/kg within 10 days of fever onset lowers the coronary aneurysm risk to under 5 percent. ASA 240 mg every 6 hours is 40 mg/kg/day.",
        },
        {
          id: "c-ivig-ibuprofen",
          label: "I started IVIG 48 g and ASA 240 mg every 6 hours, and kept her bedtime ibuprofen for the fever.",
          next: "s-ibuprofen",
          quality: "partial",
          feedback:
            "IVIG and ASA are right. NSAIDs should not be given with ASA in Kawasaki disease. Use acetaminophen at 15 mg/kg, 360 mg, instead, since her home dose of 240 mg is only 10 mg/kg.",
        },
        {
          id: "c-wait-antibiotics",
          label: "I admitted her on IV antibiotics for adenitis and planned to consider Kawasaki disease if she was no better in 48 hours.",
          next: "s-wait-antibiotics",
          quality: "unsafe",
          feedback:
            "Waiting for a second antibiotic to fail is how node first Kawasaki disease gets missed. She has new eye and lip changes, a cluster of solid nodes and a CRP of 168, and node first disease carries the same coronary risk as typical disease. IVIG is due now, not on day 7.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ibuprofen",
      phase: "Pharmacy call",
      text: "The pharmacist calls and asks you to stop the ibuprofen because it should not be given with ASA. She suggests acetaminophen 360 mg. You agree.",
      next: "s-shock",
    },
    {
      kind: "say",
      id: "s-wait-antibiotics",
      phase: "Phone call",
      text:
        "The pediatrician at the children's hospital calls back about the admission for adenitis. When you mention the red eyes, the cracked lips and the CRP of 168, she asks you to start IVIG 48 g and ASA now and to stop the ibuprofen. You place the orders.",
      next: "s-shock",
    },
    {
      kind: "say",
      id: "s-shock",
      phase: "Ninety minutes later",
      text:
        "The IVIG is still being prepared in the blood bank. The nurse calls you back urgently. She is pale, quiet and mottled. Heart rate 168/minute, blood pressure 72/40 mmHg, capillary refill 4 seconds, SpO2 96 percent. Her hands are now cool. Venous lactate is 4.2 mmol/L.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Deterioration",
      prompt: "What is happening, and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Shock: systolic pressure has fallen 28 percent from 100 mmHg, with poor perfusion.",
        "Consider Kawasaki disease shock syndrome, toxic shock from a staphylococcal or streptococcal neck infection, septic shock, myocarditis and MIS-C.",
        "Call for help. Oxygen, monitor, second IV or IO.",
        "Crystalloid 10 mL/kg, so 240 mL, over 5 to 10 minutes. Reassess liver, lungs, perfusion and ultrasound after each bolus.",
        "Blood culture, then within the hour ceftriaxone 50 mg/kg (1200 mg) IV, plus clindamycin 13 mg/kg (about 310 mg) IV every 8 hours, until sepsis and toxic shock are excluded. Add vancomycin where MRSA is common.",
        "Epinephrine infusion 0.05 to 0.3 mcg/kg/min if shock persists or squeeze is poor. Check glucose and ionized calcium. Continue with IVIG once it arrives.",
      ],
      rubric: ["kd-r1", "kd-a4", "kd-m3", "kd-l1"],
      choices: [
        {
          id: "c-cautious",
          label:
            "I called for help, gave 240 mL of Ringer's lactate and reassessed her liver, lungs and heart on ultrasound after each bolus, drew a blood culture and gave ceftriaxone and clindamycin within the hour, and started epinephrine when she stayed hypotensive after 30 mL/kg.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Correct. Kawasaki disease shock syndrome often involves myocardial dysfunction, so give fluid in small boluses and reassess after each one. Toxic shock from a neck infection looks the same at the bedside, so cover it within the hour. Epinephrine supports both pressure and contractility.",
        },
        {
          id: "c-big-fluid",
          label: "I pushed 20 mL/kg boluses of normal saline back to back to 60 mL/kg before reassessing.",
          next: "s-overload",
          quality: "partial",
          feedback:
            "Fluid is right, but 60 mL/kg without reassessment risks overload in a child who may have myocarditis. Reassess the liver, lungs and cardiac function after each bolus. She also still needs antibiotics within the hour.",
        },
        {
          id: "c-wait",
          label: "I told the nurse this is Kawasaki inflammation that the IVIG will settle, and asked her to recheck in 30 minutes.",
          next: "s-wait-shock",
          quality: "unsafe",
          feedback:
            "A fall of more than 20 percent in systolic pressure with poor perfusion is shock and needs treatment now. IVIG takes hours to arrive and infuse. Septic and toxic shock have not been excluded, so antibiotics are due within 1 hour.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-overload",
      phase: "Fifteen minutes later",
      text:
        "Her liver edge is now 4 cm below the costal margin, there are fine crackles at both bases and her SpO2 has fallen to 91 percent. Your ultrasound shows reduced squeeze. You stop the fluid, start an epinephrine infusion, draw a blood culture and give ceftriaxone and clindamycin.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-wait-shock",
      phase: "Thirty minutes later",
      text:
        "The nurse calls again. She is more mottled and hard to rouse. Heart rate 176/minute, blood pressure 64/34 mmHg, lactate 5.1 mmol/L. " +
        "You call for help, give a 10 mL/kg bolus of Ringer's lactate and reassess, draw a blood culture, give ceftriaxone and clindamycin, and start an epinephrine infusion.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Disposition",
      prompt: "She is on epinephrine at 0.1 mcg/kg/min with a blood pressure of 92/54 mmHg. How do you arrange her care from here?",
      seconds: 75,
      modelAnswer: [
        "Call the provincial transfer service, such as CritiCall Ontario, for a pediatric critical care bed.",
        "Conference call with the PICU intensivist, pediatric cardiology and rheumatology.",
        "Pediatric critical care transport team, not a basic ambulance crew.",
        "Start the IVIG before or during transfer if the receiving team agrees. Discuss IV methylprednisolone.",
        "Reassess every 5 to 15 minutes until the team arrives. Send copies of all records, results and ultrasound images.",
      ],
      rubric: ["kd-d1", "kd-l1"],
      choices: [
        {
          id: "c-picu",
          label:
            "I called the provincial transfer service for a PICU bed, held a conference call with the intensivist and cardiologist, requested the pediatric critical care transport team and kept reassessing her until they arrived.",
          next: "q-family",
          quality: "strong",
          feedback:
            "Correct. She needs a PICU, pediatric cardiology and echocardiography today. A specialized transport team can manage vasoactive infusions and airway changes on the way. Keep reassessing while you wait.",
        },
        {
          id: "c-ward",
          label: "I admitted her to our general pediatric ward for IVIG overnight and planned transfer in the morning.",
          next: "s-ward",
          quality: "unsafe",
          feedback:
            "A child on an epinephrine infusion needs a pediatric critical care bed, not a community ward. She also needs echocardiography and cardiology input that this hospital cannot provide. Transfer is urgent.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ward",
      phase: "Ward call",
      text:
        "The ward charge nurse refuses the admission because the ward cannot run epinephrine for children. You call the provincial transfer service and request the pediatric critical care transport team.",
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Her mother",
      prompt:
        "While you wait for the transport team, her mother asks what this means for her heart, whether the IVIG will work and whether ASA is safe for a child. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Kawasaki disease inflames blood vessels, including the coronary arteries. Without treatment some children develop coronary aneurysms. IVIG within 10 days lowers that risk to under 5 percent.",
        "Aneurysms can still appear up to 4 to 6 weeks after the illness starts, so she needs repeat echocardiograms and cardiology follow up.",
        "Fever should settle within 24 to 36 hours after the IVIG finishes. About 10 to 20 percent of children do not respond and need more treatment, so ongoing fever must be reported.",
        "ASA is used on purpose here. Report any influenza or chickenpox exposure because of Reye syndrome risk. No ibuprofen while she takes ASA.",
      ],
      rubric: ["kd-c1", "kd-c3"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "The transport team arrives. Give your handover.",
      seconds: 60,
      modelAnswer: [
        "Identity, weight 24 kg and diagnosis: incomplete Kawasaki disease, node first, day 5 of fever, now in shock.",
        "Key findings: CRP 168, albumin 28, sterile pyuria, neck ultrasound with no abscess, good then reduced squeeze.",
        "Treatment and times: fluid total, epinephrine dose, antibiotics, IVIG and ASA status.",
        "Current vital signs and trends. Lines and access.",
        "Outstanding results: blood and urine cultures, Bartonella serology. Who has the family's contact details.",
      ],
      rubric: ["kd-d1", "kd-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She reaches the PICU on epinephrine. Echocardiography shows mild left ventricular dysfunction and a dilated left anterior descending artery. She receives IVIG and IV methylprednisolone and is off epinephrine by the next morning. Her blood culture stays negative. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "kd-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the fever start date and daily pattern, and when the neck lump appeared and how it has changed.",
      points: 2,
      teaching: "Kawasaki disease needs fever for 5 days or more. A cervical node of 1.5 cm or more, usually on one side, is one of the principal features.",
      source: "cps-kd",
    },
    {
      id: "kd-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks the exact antipyretic doses and compares them with her weight. Recognizes that 240 mg of acetaminophen is 10 mg/kg at 24 kg.",
      points: 2,
      teaching: "Age based box dosing often underdoses a heavy child. Acetaminophen is 15 mg/kg per dose. Poor response to an underdose is not a sign of serious illness by itself.",
      source: "cps-fever",
    },
    {
      id: "kd-h3",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the first visit and asks how the node and fever responded to 2 days of cephalexin.",
      points: 2,
      teaching: "Children whose Kawasaki disease starts with a neck node have more visits and longer illness before diagnosis, and most have already had antibiotics. A node that fails antibiotics is a clue.",
      source: "kanegaye",
    },
    {
      id: "kd-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about new drugs, joint pain, weight loss, night sweats and bruising to look for non infectious causes of fever and a node.",
      points: 1,
      teaching: "The differential of Kawasaki disease includes infection, systemic juvenile idiopathic arthritis, Stevens Johnson syndrome, serum sickness like reaction, malignancy and hemophagocytic lymphohistiocytosis. Each has clues on history.",
      source: "cps-kd",
    },
    {
      id: "kd-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about each other principal feature, including any that came and went: red eyes, lip and mouth changes, rash, and hand or foot swelling.",
      points: 2,
      teaching: "Some principal features may only be found on history. Asking about each one, not only looking for it now, avoids missing the diagnosis.",
      source: "cps-kd",
    },
    {
      id: "kd-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines the node group and every principal feature, finds 3 principal features and suspects Kawasaki disease presenting with a neck node first.",
      points: 3,
      critical: true,
      teaching: "Children whose Kawasaki disease starts with a neck node are older than in typical disease and have more medical visits before the diagnosis is made. Look for the other principal features at every visit.",
      source: "kanegaye",
    },
    {
      id: "kd-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential of bacterial adenitis or abscess, retropharyngeal or parapharyngeal abscess, cat scratch disease, Epstein Barr virus, MIS-C and malignancy.",
      points: 2,
      teaching: "In one series a third of children with node first Kawasaki disease were first admitted with a diagnosis of bacterial adenitis or a neck abscess.",
      source: "kanegaye",
    },
    {
      id: "kd-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Reads the blood work against bacterial adenitis, a high band count and CRP with a lower white count, and does not take retropharyngeal edema on CT as proof of an abscess.",
      points: 2,
      teaching: "A lower white count and a higher band count and CRP independently favoured node first Kawasaki disease over bacterial adenitis. Retropharyngeal edema was as common in node first Kawasaki disease as in bacterial infection.",
      source: "kanegaye",
    },
    {
      id: "kd-a5",
      competency: "assessment",
      criterion: "physical",
      text: "Uses neck ultrasound before CT to look for an abscess, and reads a cluster of solid nodes as favouring Kawasaki disease.",
      points: 1,
      teaching: "Children with node first Kawasaki disease had multiple enlarged solid nodes, while bacterial adenitis more often formed a larger mass with suppuration.",
      source: "kanegaye",
    },
    {
      id: "kd-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes shock and considers Kawasaki disease shock syndrome, toxic shock syndrome, septic shock, myocarditis and MIS-C.",
      points: 2,
      teaching: "Kawasaki disease shock syndrome is a fall in systolic pressure of 20 percent or more for age and sex, or poor perfusion. Judicious fluid is advised and inotropes may be needed.",
      source: "cps-kd",
    },
    {
      id: "kd-m1",
      competency: "management",
      criterion: "management",
      text: "Starts IVIG 2 g/kg, 48 g, as a single infusion within 10 days of fever onset, rather than waiting to see whether antibiotics work.",
      points: 3,
      critical: true,
      teaching: "One dose of IVIG 2 g/kg within the first 10 days of fever lowers the coronary aneurysm risk to under 5 percent.",
      source: "cps-kd",
    },
    {
      id: "kd-m2",
      competency: "management",
      criterion: "management",
      text: "Starts ASA 30 to 50 mg/kg/day in divided doses, or low dose, checks platelets are over 80 x 10^9/L and stops ibuprofen.",
      points: 2,
      teaching: "Moderate dose and low dose ASA are equally acceptable in the acute phase. NSAIDs are avoided with ASA.",
      source: "cps-kd",
    },
    {
      id: "kd-m3",
      competency: "management",
      criterion: "management",
      text: "Gives a beta-lactam such as ceftriaxone with clindamycin IV within 1 hour of recognizing shock, after a blood culture.",
      points: 2,
      teaching: "The CPS strongly recommends clindamycin with a beta-lactam for severe invasive group A streptococcal disease and toxic shock, because it reduces toxin production. Clindamycin is never used alone.",
      source: "cps-igas",
    },
    {
      id: "kd-m4",
      competency: "management",
      criterion: "management",
      text: "Doses acetaminophen by weight at 15 mg/kg, 360 mg, and teaches her mother to dose by weight.",
      points: 1,
      teaching: "Antipyretic doses depend on body weight. The package dose by age is a rough guide only.",
      source: "cps-fever",
    },
    {
      id: "kd-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats shock with 10 mL/kg crystalloid boluses, reassesses liver, lungs and cardiac function after each, and starts epinephrine for persistent shock or poor squeeze.",
      points: 3,
      critical: true,
      teaching: "Give fluid in 10 to 20 mL/kg boluses and stop at signs of overload. Epinephrine is a first line vasoactive drug in pediatric septic shock, and smaller boluses suit a child who may have myocardial dysfunction.",
      source: "ssc-peds",
    },
    {
      id: "kd-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges PICU transfer through the provincial transfer service with a pediatric critical care transport team, and involves cardiology.",
      points: 2,
      teaching: "Kawasaki disease shock syndrome may need inotropes and respiratory support, and serial echocardiography is needed to follow the coronary arteries. Both point to a PICU with cardiology.",
      source: "cps-kd",
    },
    {
      id: "kd-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls for help, assigns roles and reassesses vital signs and perfusion after each intervention until transfer.",
      points: 2,
      teaching: "Reassessment after every bolus catches fluid overload and failing treatment early.",
      source: "ssc-peds",
    },
    {
      id: "kd-c1",
      competency: "communication",
      criterion: "process",
      text: "Explains the coronary artery risk to her mother and why she needs repeat echocardiograms and cardiology follow up.",
      points: 2,
      teaching: "IVIG within 10 days lowers the coronary aneurysm risk to under 5 percent, but aneurysms may develop up to 4 to 6 weeks after onset, so coronary arteries are followed with serial echocardiograms.",
      source: "cps-kd",
    },
    {
      id: "kd-c3",
      competency: "communication",
      criterion: "process",
      text: "Tells her mother and the receiving team that fever should settle within 24 to 36 hours after IVIG, and that fever beyond that suggests IVIG resistance needing more treatment.",
      points: 1,
      teaching: "About 10 to 20 percent of children with Kawasaki disease are resistant to IVIG. They are at higher risk of coronary aneurysms and need additional treatment.",
      source: "cps-kd",
    },
  ],
  sources: [
    {
      id: "cps-kd",
      citation:
        "Chen A, Rozenblyum E, Dahdah N, et al. Canadian Paediatric Society, Community Paediatrics Committee. Kawasaki disease: Practical guidance on diagnosis and management. Paediatrics and Child Health. 2026.",
      url: "https://cps.ca/en/documents/position/kawasaki-disease",
    },
    {
      id: "kanegaye",
      citation:
        "Kanegaye JT, Van Cott E, Tremoulet AH, et al. Lymph-node-first presentation of Kawasaki disease compared with bacterial cervical adenitis and typical Kawasaki disease. Journal of Pediatrics. 2013.",
    },
    {
      id: "ssc-peds",
      citation:
        "Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis associated organ dysfunction in children. Pediatric Critical Care Medicine. 2020.",
    },
    {
      id: "cps-igas",
      citation:
        "Moore DL, Allen UD, Mailman T. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Invasive group A streptococcal disease. Management and chemoprophylaxis. Paediatrics and Child Health. 2019. Reaffirmed 2024.",
      url: "https://cps.ca/en/documents/position/invasive-group-a-streptococcal-disease",
    },
    {
      id: "cps-fever",
      citation: "Canadian Paediatric Society. Caring for Kids. Fever and temperature taking. Updated 2022.",
      url: "https://caringforkids.cps.ca/handouts/health-conditions-and-treatments/fever_and_temperature_taking",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 1,
};
