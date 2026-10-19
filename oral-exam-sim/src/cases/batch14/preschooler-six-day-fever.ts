// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const preschoolerSixDayFever: OralCase = {
  id: "preschooler-six-day-fever",
  title: "Third visit this week for a fever",
  blueprint: "peds",
  alsoCovers: ["resus", "comm"],
  priorityTopic: "pediatric-fever",
  keyFeatures: [
    { topic: "pediatric-fever", n: 2 },
    { topic: "pediatric-fever", n: 4 },
    { topic: "pediatric-fever", n: 5 },
    { topic: "pediatric-fever", n: 8 },
    { topic: "shock", n: 4 },
  ],
  summary: "A preschooler with almost a week of fever, a rash and a new drug allergy label returns for a third opinion.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. The children's hospital is 90 minutes away by road. " +
    "A 3 year old boy is brought in by his mother with 6 days of fever and a rash. This is his third medical visit this week.",
  card: {
    vitals: {
      temperature: "39.6°C tympanic",
      pulse: "158/minute",
      resp: "30/minute",
      bp: "94/56 mmHg",
      o2sat: "98% on room air",
      weight: "15 kg (33.1 lb)",
    },
    medications: "Amoxicillin, stopped 2 days ago. Cetirizine. Acetaminophen and ibuprofen as needed.",
    allergies: "Amoxicillin (rash), recorded at a walk-in clinic 2 days ago",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Fever started 6 days ago and reaches 40.2°C at home every day. It never fully settles with medicine. His eyes went red on day 3 without any discharge. " +
        "A red blotchy rash began on his chest on day 4. His lips have been red and cracked for 3 days. Since yesterday he cries when he stands and wants to be carried. " +
        "No cough and no runny nose. Two loose stools yesterday. No vomiting.",
    },
    {
      id: "visits",
      label: "Earlier visits this week",
      result:
        "Day 2, walk-in clinic: temperature 39.1°C, red right eardrum, diagnosed with otitis media and given amoxicillin 675 mg twice daily. " +
        "Day 4, a second walk-in clinic: blanching rash on the trunk, called a drug rash. Amoxicillin was stopped, an amoxicillin allergy was recorded and cetirizine was started. " +
        "Neither note documents the eyes, mouth, hands or neck.",
    },
    {
      id: "antipyretics",
      label: "Fever medicine at home",
      result:
        "His mother gives children's acetaminophen 160 mg per 5 mL, 5 mL every 6 hours, as the box says for ages 2 to 3. " +
        "She also gives children's ibuprofen 100 mg per 5 mL, 5 mL once at bedtime. She has not weighed him since his last checkup.",
    },
    {
      id: "intake",
      label: "Intake and output",
      result: "Drinking about half his usual amount. Eating very little. Last passed urine 7 hours ago.",
    },
    {
      id: "pmh",
      label: "Past history and immunizations",
      result:
        "Born at term. Two ear infections last winter. No admissions and no heart disease. Immunizations up to date on the Ontario schedule, including MMR at 12 months and varicella at 15 months. " +
        "No influenza vaccine this season.",
    },
    {
      id: "social",
      label: "Social history and exposures",
      result:
        "Attends a daycare with 12 children. No known measles or strep exposure there. No travel outside Ontario. No new pets, no mould and no new soaps. " +
        "Lives with his parents and a 7 month old sister, who is well. His father's family is from Japan.",
    },
    {
      id: "general",
      label: "General appearance",
      result: "Irritable and hard to console, but alert and tracking the room. Dry lips. Capillary refill 2 seconds. Warm hands and feet.",
    },
    {
      id: "head-neck",
      label: "Eyes, mouth, ears and neck",
      result:
        "Both eyes show bulbar redness that spares the rim around the iris. No discharge. No Koplik spots. Lips red, dry and cracked. Strawberry tongue. Red throat without exudate. " +
        "Eardrums now normal. A single firm, mildly tender right anterior cervical node, about 2 cm.",
    },
    {
      id: "skin-limbs",
      label: "Skin, hands and feet",
      result:
        "Blanching maculopapular rash over the trunk and thighs, strongest in the groin, with early peeling of the perineal skin. No vesicles, target lesions, petechiae or mucosal blisters. " +
        "Hands and feet are swollen and firm with red palms and soles. He pulls back when the soles are touched. No peeling of the fingertips yet.",
    },
    {
      id: "cardio-abdo",
      label: "Heart, chest and abdomen",
      result: "Tachycardic. No murmur or gallop. Chest clear. Liver edge 2 cm below the costal margin, mildly tender. No neck stiffness.",
    },
    {
      id: "cbc",
      label: "Complete blood count",
      result: "White cells 18.6 x 10^9/L, neutrophils 13.2 x 10^9/L. Hemoglobin 102 g/L. Platelets 438 x 10^9/L.",
    },
    {
      id: "chem",
      label: "Inflammatory markers and chemistry",
      result:
        "CRP 142 mg/L. ESR 78 mm/hour. Albumin 27 g/L. ALT 96 U/L. Sodium 131 mmol/L. Potassium 4.1 mmol/L. Creatinine 34 µmol/L. Lactate 1.6 mmol/L.",
    },
    {
      id: "urine",
      label: "Urinalysis, midstream",
      result: "Leukocyte esterase trace. Nitrite negative. Microscopy 20 to 50 white cells per high power field. No bacteria seen. Culture pending.",
    },
    {
      id: "micro",
      label: "Swabs and cultures",
      result: "Rapid strep test negative. SARS-CoV-2 and respiratory virus PCR negative. Measles PCR on throat swab and urine sent, results in 48 hours. Blood culture pending.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 156/minute. PR 140 ms. Normal QRS. No ST changes. Normal voltages.",
    },
    {
      id: "pocus",
      label: "Your bedside cardiac ultrasound",
      result: "Good left ventricular squeeze by eye. Small pericardial effusion under 5 mm. No tamponade. Coronary arteries cannot be assessed. No formal pediatric echocardiography on site.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In a pediatric room",
      text:
        "The triage nurse has placed him in a single room. He is crying on his mother's lap. His mother says, 'Everyone says it is a virus or the antibiotic. He is getting worse, not better.'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "His mother is ready to answer your questions. What history do you want?",
      seconds: 75,
      modelAnswer: [
        "Fever start date, daily peak and response to medicine. Six days of fever changes the differential.",
        "Timeline of red eyes, lip and mouth changes, rash, hand and foot swelling and neck lump.",
        "Exact antipyretic doses compared with his weight.",
        "Earlier visits, the antibiotic, and how the amoxicillin allergy label came about.",
        "Immunizations including MMR, travel, daycare and sick contacts, and drug or toxin exposures.",
        "Intake, urine output, vomiting and diarrhea.",
      ],
      rubric: ["kd-h1", "kd-h2", "kd-h3", "kd-h4", "kd-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and differential",
      prompt: "You examine him. What do you look for, and what do you think is going on?",
      seconds: 90,
      modelAnswer: [
        "Look specifically at the eyes, lips and tongue, rash, hands and feet, and neck nodes.",
        "Fever for 5 days or more with at least 4 of the 5 principal features is complete Kawasaki disease. He has all 5.",
        "Differential: measles, scarlet fever, adenovirus, drug reaction including Stevens Johnson syndrome and serum sickness like reaction, toxic shock syndrome and MIS-C.",
        "Discriminating features: no cough or coryza, no Koplik spots, no mucosal blistering or target lesions, negative strep test.",
        "Assess perfusion and hydration, liver size and heart sounds.",
      ],
      rubric: ["kd-a1", "kd-a2"],
      choices: [
        {
          id: "c-kd",
          label:
            "I found bilateral non purulent conjunctival injection, red cracked lips, a polymorphous rash, swollen hands and feet and a 2 cm node. With 6 days of fever that is complete Kawasaki disease. I kept measles, scarlet fever, adenovirus, a drug reaction and toxic shock in my differential.",
          next: "q-tests",
          quality: "strong",
          feedback:
            "Correct. Fever for at least 5 days plus 4 of 5 principal features makes the diagnosis, and he has all 5. The features rarely appear together, so they must be asked about and looked for one by one. The amoxicillin rash was a red herring.",
        },
        {
          id: "c-drug",
          label: "I thought this was a serum sickness like reaction to amoxicillin and planned oral prednisolone and a stronger antihistamine.",
          next: "s-drug",
          quality: "partial",
          feedback:
            "A drug reaction belongs in the differential, but it does not explain fever that began before the antibiotic or the eye and lip changes. Serum sickness like reaction causes urticaria and joint swelling, not conjunctivitis and a strawberry tongue. The examiner wanted the five principal features counted against the fever duration.",
        },
        {
          id: "c-viral",
          label: "I diagnosed a viral exanthem, advised fluids and better fever control, and planned follow up with his family doctor in 2 days.",
          next: "s-viral",
          quality: "unsafe",
          feedback:
            "Six days of fever with a rash is not a routine viral illness until Kawasaki disease is excluded. Untreated, about 1 in 4 children develop coronary artery aneurysms. Treatment works best within 10 days of fever onset, and he is on day 6.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-drug",
      phase: "Twenty minutes later",
      text:
        "The nurse asks whether a drug reaction explains the red eyes and the fact that the fever started two days before the amoxicillin. You go back and count the principal features against the fever timeline.",
      next: "q-tests",
    },
    {
      kind: "say",
      id: "s-viral",
      phase: "At discharge",
      text:
        "As the nurse removes his IV, she points out his swollen hands and peeling groin and asks whether you want any blood work first. You stop the discharge and reassess.",
      next: "q-tests",
    },
    {
      kind: "question",
      id: "q-tests",
      phase: "Investigations",
      prompt: "What investigations do you want, and how will they change what you do?",
      seconds: 60,
      modelAnswer: [
        "CBC, CRP, ESR, albumin, ALT, electrolytes, creatinine and urinalysis. They support the diagnosis and give a baseline.",
        "Blood culture, strep test and measles PCR to address the differential.",
        "ECG and echocardiography for coronary arteries, function and effusion.",
        "Echocardiography must not delay treatment when clinical criteria are met.",
        "Interpretation: CRP 142, albumin 27, ALT 96, white cells 18.6 and sterile pyuria all fit Kawasaki disease.",
      ],
      rubric: ["kd-a3"],
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "Results",
      text:
        "CRP is 142 mg/L, ESR 78 mm/hour, albumin 27 g/L, ALT 96 U/L, white cells 18.6 x 10^9/L and platelets 438 x 10^9/L. The urine shows sterile pyuria. Your bedside ultrasound shows good function and a small pericardial effusion. There is no pediatric echocardiography on site.",
      next: "q-treat",
    },
    {
      kind: "question",
      id: "q-treat",
      phase: "Treatment",
      prompt: "What treatment do you start? Give doses.",
      seconds: 90,
      modelAnswer: [
        "IVIG 2 g/kg as a single infusion, so 30 g over 10 to 12 hours. Start now, within 10 days of fever onset.",
        "Do not wait for formal echocardiography to start IVIG.",
        "ASA 30 to 50 mg/kg/day divided every 6 hours, so 450 to 750 mg a day, then 3 to 5 mg/kg once daily when afebrile. Platelets must be over 80 x 10^9/L.",
        "Stop ibuprofen because it blocks the antiplatelet effect of ASA.",
        "Acetaminophen by weight, 15 mg/kg, so 225 mg every 4 to 6 hours.",
        "Call the children's hospital pediatrician and cardiologist about transfer and echocardiography.",
      ],
      rubric: ["kd-m1", "kd-m2", "kd-m4"],
      choices: [
        {
          id: "c-ivig",
          label:
            "I ordered IVIG 30 g over 10 to 12 hours and ASA 160 mg every 6 hours, stopped the ibuprofen, gave acetaminophen 225 mg and called the children's hospital about echocardiography and transfer.",
          next: "s-shock",
          quality: "strong",
          feedback:
            "Correct. IVIG 2 g/kg within the first 10 days of fever cuts the aneurysm rate to under 5 percent. ASA 160 mg every 6 hours is about 43 mg/kg/day, within the 30 to 50 mg/kg/day range. Ibuprofen blocks the antiplatelet effect of ASA, so it stops.",
        },
        {
          id: "c-wait-echo",
          label: "I arranged an outpatient echocardiogram at the children's hospital in 3 days and planned to treat if it showed coronary changes.",
          next: "s-wait-echo",
          quality: "partial",
          feedback:
            "Echocardiography supports the diagnosis but must not delay treatment when the clinical criteria are met. A normal early echocardiogram does not exclude later aneurysms. Waiting 3 days pushes him to day 9 of fever with no treatment.",
        },
        {
          id: "c-steroid-home",
          label: "I started oral prednisolone 2 mg/kg and sent him home with pediatric follow up in 3 days.",
          next: "s-wait-echo",
          quality: "unsafe",
          feedback:
            "IVIG is the first line treatment for Kawasaki disease. Steroids alone are not standard initial therapy and are added only for selected high risk children with specialist input. A febrile, irritable child with Kawasaki disease needs admission and monitoring.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-echo",
      phase: "Phone call",
      text:
        "The pediatrician at the children's hospital calls back. She says the clinical criteria are met and asks you to start IVIG 2 g/kg and ASA now rather than wait for imaging. You place the orders.",
      next: "s-shock",
    },
    {
      kind: "say",
      id: "s-shock",
      phase: "Ninety minutes later",
      text:
        "The IVIG is still being prepared in the blood bank. The nurse calls you back urgently. He is quiet and mottled. Heart rate 184/minute, blood pressure 68/38 mmHg, capillary refill 4 seconds, SpO2 96 percent. His hands are now cool. Venous lactate is 3.9 mmol/L.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Deterioration",
      prompt: "What is happening, and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Shock. Consider Kawasaki disease shock syndrome, septic shock, toxic shock syndrome, myocarditis and MIS-C.",
        "Call for help. Oxygen, monitor, second IV or IO.",
        "Crystalloid 10 mL/kg, so 150 mL, over 5 to 10 minutes. Reassess liver, lungs, perfusion and ultrasound after each bolus.",
        "Epinephrine infusion 0.05 to 0.3 mcg/kg/min if shock persists after 40 mL/kg or sooner with signs of overload or poor squeeze.",
        "Ceftriaxone 50 mg/kg and clindamycin 13 mg/kg IV within the hour after a blood culture, until sepsis and toxic shock are excluded.",
        "Continue with IVIG once it arrives. Check glucose and ionized calcium.",
      ],
      rubric: ["kd-r1", "kd-a4", "kd-m3", "kd-l1"],
      choices: [
        {
          id: "c-cautious",
          label:
            "I called for help, gave 150 mL of Ringer's lactate and reassessed his liver, lungs and heart on ultrasound after each bolus, gave ceftriaxone and clindamycin within the hour, and started epinephrine when he stayed hypotensive after 30 mL/kg.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Correct. Kawasaki disease shock syndrome often involves myocardial dysfunction, so give fluid in small boluses and reassess after each. Septic and toxic shock look the same at the bedside, so cover them within the hour. Epinephrine supports both pressure and contractility.",
        },
        {
          id: "c-big-fluid",
          label: "I pushed 20 mL/kg boluses of normal saline back to back to 60 mL/kg before reassessing.",
          next: "s-overload",
          quality: "partial",
          feedback:
            "Fluid is right, but giving 60 mL/kg without reassessment risks overload in a child who may have myocarditis. Reassess the liver, lungs and cardiac function after each bolus. He also still needs antibiotics within the hour.",
        },
        {
          id: "c-wait",
          label: "I told the nurse this is the inflammation of Kawasaki disease and that the IVIG will fix it, and asked her to recheck in 30 minutes.",
          next: "s-overload",
          quality: "unsafe",
          feedback:
            "A 20 percent fall in systolic pressure with poor perfusion is shock and needs treatment now. IVIG takes hours to arrive and infuse. Septic and toxic shock have not been excluded, so antibiotics are due within 1 hour.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-overload",
      phase: "Fifteen minutes later",
      text:
        "His liver edge is now 4 cm, there are fine crackles at both bases and his SpO2 has fallen to 91 percent. Your ultrasound shows reduced squeeze. You stop the fluid, start an epinephrine infusion and give ceftriaxone and clindamycin.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Disposition",
      prompt: "He is on epinephrine at 0.1 mcg/kg/min with a blood pressure of 90/52 mmHg. How do you arrange his care from here?",
      seconds: 75,
      modelAnswer: [
        "Call the provincial transfer service, CritiCall Ontario in this province, for a pediatric critical care bed.",
        "Conference call with the PICU intensivist, pediatric cardiology and rheumatology.",
        "Pediatric critical care transport team, not a basic ambulance crew.",
        "Start the IVIG before or during transfer if the receiving team agrees. Discuss IV methylprednisolone.",
        "Reassess every 5 to 15 minutes until the team arrives. Send copies of all records, results and the ultrasound images.",
      ],
      rubric: ["kd-d1", "kd-l1", "kd-c2"],
      choices: [
        {
          id: "c-picu",
          label:
            "I called the provincial transfer service for a PICU bed, held a conference call with the intensivist and cardiologist, requested the pediatric critical care transport team and kept reassessing him until they arrived.",
          next: "q-family",
          quality: "strong",
          feedback:
            "Correct. He needs a PICU, pediatric cardiology and echocardiography today. A specialized transport team can manage vasoactive drips and airway changes en route. Keep reassessing while you wait.",
        },
        {
          id: "c-ward",
          label: "I admitted him to our general pediatric ward for IVIG overnight and planned transfer in the morning.",
          next: "s-ward",
          quality: "unsafe",
          feedback:
            "A child on an epinephrine infusion needs a pediatric critical care bed, not a community ward. He also needs echocardiography and cardiology input that this hospital cannot provide. Transfer is urgent.",
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
      phase: "His mother",
      prompt: "While you wait for the transport team, his mother asks why two clinics missed this, whether he is allergic to amoxicillin, and whether ASA is safe for a child. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Kawasaki disease is hard to diagnose early because the features appear one at a time. Do not criticize the clinics.",
        "The rash was most likely part of Kawasaki disease, not an allergy. The allergy label should be reviewed and probably removed.",
        "ASA is used on purpose here, at a low dose for weeks. Report any flu or chickenpox exposure because of Reye syndrome risk.",
        "Household members should get the inactivated influenza vaccine. Live vaccines are deferred for 11 months after IVIG.",
        "Avoid ibuprofen while he takes ASA. Give acetaminophen by weight.",
        "Long term follow up with cardiology.",
      ],
      rubric: ["kd-c1", "kd-p1"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "The transport team arrives. Give your handover.",
      seconds: 60,
      modelAnswer: [
        "Identity, weight 15 kg and diagnosis: complete Kawasaki disease, day 6 of fever, with shock.",
        "Key findings: CRP 142, albumin 27, sterile pyuria, small effusion, good then reduced squeeze.",
        "Treatment and times: fluid total, epinephrine dose, antibiotics, IVIG and ASA status.",
        "Current vital signs and trends. Lines and access.",
        "Outstanding results: blood and urine culture, measles PCR. Who has the family's contact details.",
      ],
      rubric: ["kd-c2", "kd-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He reaches the PICU on epinephrine. Echocardiography shows mild left ventricular dysfunction and a dilated left anterior descending artery. He receives IVIG and IV methylprednisolone and is off epinephrine by the next morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "kd-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the fever start date and daily pattern, and the timeline of red eyes, lip and mouth changes, rash, hand and foot swelling and the neck lump.",
      points: 2,
      teaching: "The principal features of Kawasaki disease often come and go over several days. Ask about each one, not only what is visible now.",
      source: "cps-kd",
    },
    {
      id: "kd-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks the exact antipyretic doses and compares them with his weight. Recognizes that 160 mg of acetaminophen is about 11 mg/kg.",
      points: 2,
      teaching: "Age based box dosing often underdoses a large child. Acetaminophen is 15 mg/kg per dose. Poor response to an underdose is not a sign of serious illness by itself.",
      source: "cps-fever",
    },
    {
      id: "kd-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about immunizations including MMR, travel, daycare and sick contacts, and drug or toxin exposures.",
      points: 2,
      teaching: "Measles, scarlet fever and drug reactions are the main mimics. One MMR dose and no exposure make measles less likely but not impossible.",
      source: "cps-kd",
    },
    {
      id: "kd-h4",
      competency: "assessment",
      criterion: "history",
      text: "Reviews both clinic visits and establishes that the fever began before the amoxicillin.",
      points: 1,
      teaching: "A fever that started before a drug cannot be blamed on that drug. Timelines expose anchoring on an earlier diagnosis.",
      source: "aha-kd",
    },
    {
      id: "kd-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about fluid intake, urine output, vomiting and diarrhea.",
      points: 1,
      teaching: "Hydration status sets the baseline for fluid decisions. Gastrointestinal symptoms are common in Kawasaki disease and MIS-C.",
      source: "aha-kd",
    },
    {
      id: "kd-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for all five principal features and diagnoses complete Kawasaki disease: fever for 5 days or more with at least 4 of 5 features.",
      points: 3,
      critical: true,
      teaching: "The five features are non purulent bilateral conjunctivitis, oral changes, polymorphous rash, extremity changes and a cervical node of 1.5 cm or more.",
      source: "cps-kd",
    },
    {
      id: "kd-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential of measles, scarlet fever, adenovirus, drug reaction, toxic shock syndrome and MIS-C and names the findings that separate them.",
      points: 2,
      teaching: "Koplik spots, cough and coryza suggest measles. Mucosal blistering and target lesions suggest Stevens Johnson syndrome. Exudative pharyngitis with a positive strep test suggests scarlet fever.",
      source: "cps-kd",
    },
    {
      id: "kd-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Orders and interprets CRP, ESR, albumin, ALT, CBC and urinalysis, and does not let echocardiography delay treatment.",
      points: 2,
      teaching: "Low albumin, high ALT, leukocytosis, anemia and sterile pyuria support the diagnosis. Echocardiography should not delay diagnosis or treatment.",
      source: "cps-kd",
    },
    {
      id: "kd-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes shock and considers Kawasaki disease shock syndrome, septic shock, toxic shock syndrome, myocarditis and MIS-C.",
      points: 2,
      teaching: "Kawasaki disease shock syndrome is a fall in systolic pressure of 20 percent or more for age, or poor perfusion. Sepsis must be considered whenever Kawasaki disease presents with shock.",
      source: "cps-kd",
    },
    {
      id: "kd-m1",
      competency: "management",
      criterion: "management",
      text: "Starts IVIG 2 g/kg, 30 g, as a single infusion over 10 to 12 hours within 10 days of fever onset without waiting for echocardiography.",
      points: 3,
      critical: true,
      teaching: "IVIG within the first 10 days of fever lowers the coronary aneurysm rate from about 25 percent to under 5 percent.",
      source: "aha-kd",
    },
    {
      id: "kd-m2",
      competency: "management",
      criterion: "management",
      text: "Starts ASA 30 to 50 mg/kg/day in divided doses, then 3 to 5 mg/kg/day once afebrile, checks platelets are over 80 x 10^9/L and stops ibuprofen.",
      points: 2,
      teaching: "Moderate dose and low dose ASA are both acceptable in the acute phase. NSAIDs interfere with the antiplatelet effect of ASA.",
      source: "cps-kd",
    },
    {
      id: "kd-m3",
      competency: "management",
      criterion: "management",
      text: "Gives ceftriaxone 50 mg/kg and clindamycin 13 mg/kg IV within 1 hour of recognizing shock, after a blood culture.",
      points: 2,
      teaching: "Septic shock in children calls for antimicrobials within 1 hour. Clindamycin is added when toxic shock syndrome is possible because it reduces toxin production.",
      source: "ssc-peds",
    },
    {
      id: "kd-m4",
      competency: "management",
      criterion: "management",
      text: "Doses acetaminophen by weight at 15 mg/kg, 225 mg, and teaches the mother to dose by weight.",
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
      teaching: "Give fluid in 10 to 20 mL/kg boluses and stop at signs of overload. Myocardial dysfunction is common in Kawasaki disease shock syndrome, so smaller boluses and early epinephrine make sense.",
      source: "ssc-peds",
    },
    {
      id: "kd-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges PICU transfer through the provincial transfer service with a pediatric critical care transport team, and involves cardiology.",
      points: 2,
      teaching: "Kawasaki disease with shock needs a PICU, echocardiography and specialist care. A specialized team can manage vasoactive infusions in transit.",
      source: "cps-kd",
    },
    {
      id: "kd-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls for help, assigns roles and reassesses vital signs and perfusion at set intervals during the deterioration and until transfer.",
      points: 2,
      teaching: "Reassessment after every intervention catches fluid overload and failing treatment early. Name who does what in a pediatric resuscitation.",
      source: "ssc-peds",
    },
    {
      id: "kd-c1",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis and treatment to his mother, including ASA and Reye syndrome, influenza vaccination and deferring live vaccines for 11 months after IVIG.",
      points: 2,
      teaching: "Families need to report influenza or varicella exposure while on ASA. Live vaccines are deferred for 11 months after IVIG.",
      source: "cps-kd",
    },
    {
      id: "kd-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Answers honestly about the earlier visits without blaming the clinics, and arranges review of the amoxicillin allergy label.",
      points: 1,
      teaching: "An incorrect allergy label can follow a child for life. A rash explained by another illness should be reviewed and delabelled.",
      source: "aha-kd",
    },
    {
      id: "kd-c2",
      competency: "communication",
      criterion: "process",
      text: "Gives the transport team a structured handover with diagnosis, treatment times, doses, trends and pending results.",
      points: 1,
      teaching: "A structured handover prevents lost information at transfer, such as whether IVIG has started or which cultures are pending.",
      source: "ssc-peds",
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
      id: "aha-kd",
      citation:
        "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, treatment, and long term management of Kawasaki disease. A scientific statement for health professionals from the American Heart Association. Circulation. 2017.",
    },
    {
      id: "ssc-peds",
      citation:
        "Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis associated organ dysfunction in children. Pediatric Critical Care Medicine. 2020.",
    },
    {
      id: "cps-fever",
      citation: "Canadian Paediatric Society. Caring for Kids. Fever and temperature taking. Updated 2022.",
      url: "https://caringforkids.cps.ca/handouts/health-conditions-and-treatments/fever_and_temperature_taking",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
