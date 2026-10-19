// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const returnVisitBellyPainGirl: OralCase = {
  id: "return-visit-belly-pain-girl",
  title: "Back the next day with a sore belly",
  blueprint: "peds",
  alsoCovers: ["id", "comm"],
  priorityTopic: "abdominal-pain",
  keyFeatures: [
    { topic: "abdominal-pain", n: 1 },
    { topic: "abdominal-pain", n: 4 },
    { topic: "abdominal-pain", n: 5 },
    { topic: "abdominal-pain", n: 6 },
    { topic: "abdominal-pain", n: 7 },
    { topic: "abdominal-pain", n: 8 },
  ],
  summary: "A school age girl sent home yesterday with a stomach bug comes back with more pain and a fever.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "An 11 year old girl is brought in by her father with worsening abdominal pain. An urgent care clinic sent her home yesterday.",
  card: {
    vitals: {
      temperature: "38.7°C oral",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "102/60 mmHg",
      o2sat: "98% on room air",
      weight: "36 kg (79 lb)",
    },
    medications: "Cephalexin and ondansetron since yesterday. Ibuprofen as needed.",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "The pain began about 40 hours ago around her belly button. By yesterday morning it had moved to the right lower belly. It is constant and worse when she walks and with every bump in the car. " +
        "She has vomited 4 times and had 3 small loose stools. She has not wanted to eat since it started. She felt hot this afternoon. She has needed to pass urine more often, with mild discomfort.",
    },
    {
      id: "first-visit",
      label: "Urgent care visit yesterday",
      result:
        "Seen at 14:00 yesterday. Temperature 37.6°C, heart rate 104. Note says 'mild periumbilical tenderness, soft abdomen'. White cells 9.8 x 10^9/L. Urine dipstick leukocytes 1+, nitrite negative. " +
        "Diagnosed with gastroenteritis and a possible urinary tract infection. Given cephalexin and ondansetron. Told to return if worse.",
    },
    {
      id: "meds",
      label: "Medications taken since yesterday",
      result: "Cephalexin 500 mg twice, ondansetron 4 mg twice and ibuprofen 400 mg, last dose 3 hours ago. No allergies.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Healthy. No surgeries. No previous abdominal pain or urinary infections. No diabetes. Immunizations up to date. Last drank water 2 hours ago.",
    },
    {
      id: "menstrual",
      label: "Menstrual and private history",
      result:
        "Menarche 5 months ago. Periods irregular. Last period started 3 weeks ago. Asked privately, she says she has never been sexually active. No vaginal discharge or bleeding.",
    },
    {
      id: "social",
      label: "Social and family history",
      result: "In grade 6. Lives with her father and a 14 year old brother, who is well. No sick contacts. No travel. No family history of inflammatory bowel disease.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "It is 22:00 on a Friday. One general surgeon is on call and operates on children 10 years and older. Ultrasound has an on call technologist who can be in within 30 minutes. " +
        "CT and MRI are on site. MRI is not staffed overnight. The children's hospital is 2 hours away by road.",
    },
    {
      id: "general",
      label: "General appearance",
      result: "Flushed and quiet. Lies still with her knees bent. Walks bent forward and refuses to hop. Dry lips. Capillary refill 2 seconds.",
    },
    {
      id: "abdo",
      label: "Abdominal exam",
      result:
        "Maximal tenderness in the right lower quadrant with voluntary guarding and rebound tenderness. Pain in the right lower quadrant when the left side is pressed. Positive psoas sign. " +
        "Mild tenderness across the lower abdomen. Quiet bowel sounds. No mass. No costovertebral angle tenderness.",
    },
    {
      id: "other-exam",
      label: "Chest, throat and skin",
      result: "Chest clear with no crackles. Throat normal. No rash. No hernia.",
    },
    {
      id: "cbc",
      label: "Complete blood count",
      result: "White cells 17.4 x 10^9/L, neutrophils 14.9 x 10^9/L. Hemoglobin 128 g/L. Platelets 352 x 10^9/L.",
    },
    {
      id: "chem",
      label: "Chemistry",
      result:
        "CRP 168 mg/L. Sodium 134 mmol/L. Potassium 3.6 mmol/L. Bicarbonate 19 mmol/L. Creatinine 58 µmol/L. Glucose 6.1 mmol/L. Lipase normal. Lactate 2.1 mmol/L.",
    },
    {
      id: "urine",
      label: "Urine tests",
      result:
        "Urine hCG negative. Urinalysis: 10 to 20 white cells per high power field, no bacteria, nitrite negative, ketones 3+. Yesterday's urine culture: no growth at 24 hours.",
    },
    {
      id: "us",
      label: "Abdominal and pelvic ultrasound",
      result:
        "Non compressible appendix, 11 mm in diameter, with an 8 mm appendicolith and loss of wall definition. A 3.5 by 2.8 cm complex fluid collection next to it. Small amount of free fluid in the pelvis. " +
        "Both ovaries normal in size with normal Doppler flow.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "22:00",
      text:
        "She is in a stretcher bay with her father beside her. He says, 'They told us yesterday it was a stomach bug and a bladder infection. She is worse. Can you just do a CT and find out?'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What history do you want from her and her father?",
      seconds: 75,
      modelAnswer: [
        "Pain onset, site, migration, character and what makes it worse. Duration of about 40 hours.",
        "Anorexia, vomiting, stool pattern, fever, urinary symptoms.",
        "Details of yesterday's visit: exam, white count, temperature, urine result and the diagnosis.",
        "Medications since then, including ibuprofen that may blunt a fever and the antibiotic.",
        "Menarche, last period and, asked privately, sexual activity.",
        "Past history, diabetes, allergies and last oral intake.",
      ],
      rubric: ["ap-h1", "ap-h2", "ap-h3", "ap-h4", "ap-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and differential",
      prompt: "What do you look for on examination, and what is your differential diagnosis?",
      seconds: 75,
      modelAnswer: [
        "Hydration, perfusion and how she moves. Pain on hopping or coughing.",
        "Right lower quadrant tenderness, guarding, rebound, Rovsing and psoas signs.",
        "Chest exam for a right lower lobe pneumonia. Costovertebral angle tenderness. Hernial orifices.",
        "Leading diagnosis: appendicitis, likely complicated after 40 hours.",
        "Differential: ovarian torsion or cyst, mesenteric adenitis, pyelonephritis, pneumonia, inflammatory bowel disease, DKA, and pregnancy complications once menarche has occurred.",
        "Yesterday's normal white count and low grade temperature do not rule out appendicitis.",
      ],
      rubric: ["ap-a1", "ap-a2", "ap-a3"],
      next: "q-imaging",
    },
    {
      kind: "question",
      id: "q-imaging",
      phase: "Investigations",
      prompt: "Her father asks again for a CT. What investigations do you order, and in what order?",
      seconds: 90,
      modelAnswer: [
        "CBC, CRP, electrolytes, glucose, lactate, urinalysis and urine hCG.",
        "Pediatric Appendicitis Score here is high. Call the surgeon now rather than after every test.",
        "Ultrasound first. It avoids radiation and also shows the ovaries.",
        "MRI if the ultrasound is equivocal and MRI is available. CT only if needed after that.",
        "Explain to her father why ultrasound comes first.",
        "Pyuria without bacteria or nitrites can come from an inflamed appendix. It does not make this a urinary infection.",
      ],
      rubric: ["ap-m1", "ap-a4", "ap-d1", "ap-c1"],
      choices: [
        {
          id: "c-us",
          label:
            "I sent blood work, urinalysis and urine hCG, called the on call surgeon to see her now, and ordered an ultrasound first. I explained to her father that ultrasound avoids radiation and also looks at the ovaries.",
          next: "q-pain",
          quality: "strong",
          feedback:
            "Correct. Ultrasound is the first line imaging test for suspected appendicitis in children. It also images the ovaries, which matters in a girl. With a high clinical risk, the surgeon should be involved now, not after the imaging.",
        },
        {
          id: "c-ct",
          label: "I ordered a CT of the abdomen and pelvis with IV contrast as her father asked, and planned to call the surgeon with the result.",
          next: "s-ct",
          quality: "partial",
          feedback:
            "CT is accurate, but it is not first line in children because of the radiation dose and lifetime cancer risk. Ultrasound comes first, then MRI if it is equivocal. The surgeon should be called on clinical grounds, not after the scan.",
        },
        {
          id: "c-uti",
          label: "I treated this as a failed outpatient urinary infection, changed the antibiotic to IV ceftriaxone and admitted her to pediatrics.",
          next: "s-uti",
          quality: "unsafe",
          feedback:
            "Mild pyuria without bacteria or nitrites and a negative culture do not make a urinary infection. An inflamed appendix near the bladder or ureter can cause pyuria and frequency. Migratory right lower quadrant pain with rebound is appendicitis until proven otherwise.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "22:20",
      text:
        "The radiologist calls you. She asks whether an ultrasound has been done, since this is an 11 year old girl. You change the order to an ultrasound and call the surgeon.",
      next: "q-pain",
    },
    {
      kind: "say",
      id: "s-uti",
      phase: "22:40",
      text:
        "The pediatric nurse calls you from the ward. The patient is rigid and crying and the urine culture from yesterday shows no growth. She asks whether a surgeon has seen her. You call the surgeon and order an ultrasound.",
      next: "q-pain",
    },
    {
      kind: "question",
      id: "q-pain",
      phase: "Comfort",
      prompt: "She rates her pain 8 out of 10. The surgeon will come in after a case and asks you not to give anything that will mask her exam. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Give analgesia now. In children, opioids for acute abdominal pain did not increase perforation or abscess.",
        "Morphine 0.1 mg/kg IV, so 3.6 mg, or intranasal fentanyl 1.5 mcg/kg if there is no IV.",
        "Ondansetron 0.15 mg/kg, maximum 4 mg.",
        "Nothing by mouth. Crystalloid 20 mL/kg, so 720 mL, for her dehydration.",
        "Explain the evidence to the surgeon politely and reassess the pain.",
      ],
      rubric: ["ap-m3", "ap-m4", "ap-c2"],
      choices: [
        {
          id: "c-morphine",
          label:
            "I gave morphine 3.6 mg IV and ondansetron 4 mg, kept her fasting, gave 720 mL of Ringer's lactate and told the surgeon that the evidence shows analgesia does not worsen outcomes.",
          next: "s-us",
          quality: "strong",
          feedback:
            "Correct. In children with acute abdominal pain, opioid analgesia did not increase perforation or abscess. Pain relief often makes the exam easier. Withholding it causes needless suffering.",
        },
        {
          id: "c-withhold",
          label: "I agreed to hold all analgesia until the surgeon examined her.",
          next: "s-withhold",
          quality: "unsafe",
          feedback:
            "Withholding analgesia is not supported by evidence and leaves a child in severe pain for hours. Opioids have not been shown to increase perforation or abscess in children. The examiner wanted early weight based analgesia with a clear explanation to the surgeon.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-withhold",
      phase: "23:00",
      text:
        "Her father finds you at the desk. He says she has been crying for an hour and asks why nobody will give her anything. You give morphine 3.6 mg IV and fluid.",
      next: "s-us",
    },
    {
      kind: "say",
      id: "s-us",
      phase: "23:30",
      text:
        "The ultrasound shows an 11 mm non compressible appendix with an appendicolith and a 3.5 by 2.8 cm fluid collection beside it. The ovaries are normal. " +
        "As she returns, the nurse calls you. Heart rate 152/minute, blood pressure 84/46 mmHg, temperature 39.4°C, capillary refill 4 seconds. Repeat lactate 3.6 mmol/L.",
      next: "q-sepsis",
    },
    {
      kind: "question",
      id: "q-sepsis",
      phase: "Deterioration",
      prompt: "What is happening, and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Perforated appendicitis with an abscess and septic shock.",
        "Call for help. Monitor, oxygen, second IV.",
        "Crystalloid 20 mL/kg, so 720 mL, over 5 to 10 minutes, reassessed after each bolus, up to 40 to 60 mL/kg.",
        "Blood culture, then antibiotics within 1 hour: piperacillin tazobactam, or ceftriaxone 50 to 75 mg/kg/day plus metronidazole 30 to 40 mg/kg/day divided every 8 hours.",
        "Vasoactive infusion if shock persists after fluid.",
        "Tell the surgeon about the change now. She needs source control.",
      ],
      rubric: ["ap-m2", "ap-l1"],
      choices: [
        {
          id: "c-sepsis",
          label:
            "I called for help, gave 720 mL of Ringer's lactate over 10 minutes and reassessed, drew a blood culture and gave piperacillin tazobactam within the hour, and updated the surgeon.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. This is septic shock from a perforated appendix. Push 20 mL/kg boluses with reassessment after each and give broad spectrum antibiotics that cover gut flora within 1 hour. The surgeon needs to know right away.",
        },
        {
          id: "c-wait-surgeon",
          label: "I asked the surgeon to choose the antibiotic when he arrives and kept the IV fluids running at maintenance.",
          next: "s-delay",
          quality: "unsafe",
          feedback:
            "Septic shock in a child needs a 20 mL/kg bolus now, not maintenance fluid. Antibiotics are due within 1 hour of recognizing shock. Waiting for the surgeon delays both.",
        },
        {
          id: "c-repeat-image",
          label: "I sent her for a CT to define the abscess before deciding on treatment.",
          next: "s-delay",
          quality: "unsafe",
          feedback:
            "A hypotensive child should not leave the department for imaging before resuscitation and antibiotics. The ultrasound already answered the question. CT adds radiation and delay without changing the immediate plan.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-delay",
      phase: "23:50",
      text:
        "Her blood pressure is now 78/40 mmHg and she is drowsy. The charge nurse asks for orders. You give 720 mL of crystalloid twice, piperacillin tazobactam IV and call the surgeon.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt:
        "After 40 mL/kg her blood pressure is 100/58 mmHg and heart rate 124/minute. The surgeon is in the operating room with a trauma patient for at least 2 more hours. How do you arrange definitive care?",
      seconds: 75,
      modelAnswer: [
        "She needs source control within hours: appendectomy, or drainage of the abscess, with antibiotics.",
        "Speak to the surgeon directly. Ask whether he can operate after the current case and whether she needs a monitored bed until then.",
        "If not, transfer to the children's hospital through the provincial transfer service, with a team able to manage shock.",
        "Keep reassessing every 15 minutes. Continue fluids and antibiotics.",
        "Admit to a monitored setting, not a general ward bed with routine checks.",
      ],
      rubric: ["ap-d1", "ap-l1", "ap-c2"],
      choices: [
        {
          id: "c-plan",
          label:
            "I spoke to the surgeon between cases. He will operate after the current case. I kept her in the resuscitation bay on close monitoring and set up transfer to the children's hospital as a backup if she worsened.",
          next: "q-father",
          quality: "strong",
          feedback:
            "Correct. Complicated appendicitis with sepsis needs source control within hours, and a clear plan with the surgeon. Keeping her in a monitored bed with a backup transfer plan covers the risk of further deterioration.",
        },
        {
          id: "c-morning",
          label: "I admitted her to the pediatric ward on antibiotics for the surgeon to see in the morning.",
          next: "s-morning",
          quality: "unsafe",
          feedback:
            "A child who was in septic shock an hour ago needs monitoring and timely source control, not a ward bed until morning. Delay raises the risk of further sepsis and abscess. The surgeon and you should agree on a plan tonight.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-morning",
      phase: "02:30",
      text:
        "The ward nurse calls. Her heart rate is 160/minute and she is mottled again. You return, resuscitate her and call the surgeon, who takes her to the operating room within the hour.",
      next: "q-father",
    },
    {
      kind: "question",
      id: "q-father",
      phase: "Her father",
      prompt: "Her father asks how this was missed yesterday and whether the CT he asked for would have helped. What do you say?",
      seconds: 60,
      modelAnswer: [
        "Sit down. Explain the diagnosis, the plan and what happens next.",
        "Appendicitis can look mild early. A normal white count and temperature do not exclude it.",
        "Ultrasound gave the answer without radiation. CT was not needed.",
        "Do not criticize the clinic. Say you do not know all the details and that you will pass his concerns on.",
        "Offer to answer questions after surgery.",
      ],
      rubric: ["ap-c1", "ap-p1"],
      next: "q-loop",
    },
    {
      kind: "question",
      id: "q-loop",
      phase: "After the operation",
      prompt: "She has a laparoscopic appendectomy for a perforated appendix. What else do you do before the end of your shift?",
      seconds: 60,
      modelAnswer: [
        "Document the timeline, findings, treatment times and discussions.",
        "Let the urgent care clinic know the outcome as feedback, in a non judgmental way.",
        "Consider whether this meets the threshold for a quality review, such as a return visit with a missed diagnosis.",
        "Confirm the plan for antibiotics after surgery with the surgical team.",
        "Make sure her father knows who to contact.",
      ],
      rubric: ["ap-p1", "ap-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "At surgery she has a perforated appendix with a pelvic abscess. She receives IV then oral antibiotics and goes home on day 5. The urgent care clinic reviews its return visit advice. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ap-h1",
      competency: "assessment",
      criterion: "history",
      text: "Characterizes the pain: periumbilical onset, migration to the right lower quadrant, worse with movement and bumps, about 40 hours long.",
      points: 2,
      teaching: "Migration of pain and pain with movement or hopping raise the likelihood of appendicitis. Longer duration raises the risk of perforation.",
      source: "bundy",
    },
    {
      id: "ap-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about anorexia, vomiting, stool pattern, fever and urinary symptoms.",
      points: 1,
      teaching: "Diarrhea and urinary frequency are common with a pelvic appendix and often lead to a wrong diagnosis of gastroenteritis or urinary infection.",
      source: "bundy",
    },
    {
      id: "ap-h3",
      competency: "communication",
      criterion: "history",
      text: "Asks about menarche and the last period, and asks privately about sexual activity.",
      points: 2,
      teaching: "After menarche, pregnancy, ectopic pregnancy and ovarian pathology join the differential. Ask the sensitive questions without the parent in the room.",
      source: "wses",
    },
    {
      id: "ap-h4",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the first visit: exam, temperature, white count, urine result and the diagnosis given.",
      points: 1,
      teaching: "A return visit is a red flag. Compare today with yesterday and look for findings that change the picture.",
      source: "bundy",
    },
    {
      id: "ap-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about medications since discharge, including ibuprofen and the antibiotic, plus past history, allergies and last oral intake.",
      points: 1,
      teaching: "Recent ibuprofen can blunt a fever. A partial antibiotic course can soften the picture without treating the cause.",
      source: "wses",
    },
    {
      id: "ap-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for peritonitis: right lower quadrant tenderness, guarding, rebound, pain on hopping or coughing, Rovsing and psoas signs, and examines the chest.",
      points: 2,
      teaching: "Rebound tenderness and fever are among the most useful findings in children. A chest exam looks for a pneumonia that can mimic appendicitis.",
      source: "bundy",
    },
    {
      id: "ap-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential that includes ovarian torsion, mesenteric adenitis, pyelonephritis, pneumonia, DKA, inflammatory bowel disease and pregnancy complications.",
      points: 2,
      teaching: "In a girl after menarche, ovarian torsion is the key surgical mimic. Ultrasound looks at the ovaries and the appendix in one test.",
      source: "acr-peds",
    },
    {
      id: "ap-a3",
      competency: "assessment",
      criterion: "physical",
      text: "States that a normal white count or a low grade temperature does not rule out appendicitis.",
      points: 2,
      critical: true,
      teaching: "No single finding rules appendicitis in or out in children. A white count under 10 x 10^9/L lowers the likelihood but misses some cases, especially early.",
      source: "bundy",
    },
    {
      id: "ap-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Uses a clinical score such as the Pediatric Appendicitis Score with labs to place her at high risk, and interprets the ultrasound as complicated appendicitis.",
      points: 2,
      teaching: "Scores help decide on imaging and surgical consultation but should not be used alone to diagnose appendicitis. An appendicolith with a collection means complicated disease.",
      source: "wses",
    },
    {
      id: "ap-m1",
      competency: "management",
      criterion: "management",
      text: "Orders ultrasound first, MRI if it is equivocal, and avoids CT as the first test because of radiation in a child.",
      points: 2,
      teaching: "Ultrasound is the first line imaging test for suspected appendicitis in children. MRI is preferred over CT as the second line test.",
      source: "acr-peds",
    },
    {
      id: "ap-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats septic shock with 20 mL/kg crystalloid boluses and reassessment, and gives broad spectrum antibiotics covering gut flora within 1 hour.",
      points: 3,
      critical: true,
      teaching: "Children in septic shock need antimicrobials within 1 hour. Piperacillin tazobactam, or ceftriaxone with metronidazole, covers enteric gram negatives and anaerobes.",
      source: "ssc-peds",
    },
    {
      id: "ap-m3",
      competency: "management",
      criterion: "management",
      text: "Gives early weight based analgesia, such as morphine 0.1 mg/kg IV, and does not wait for the surgeon.",
      points: 2,
      teaching: "In a meta analysis of children with acute abdominal pain, opioid analgesia did not increase the risk of perforation or abscess.",
      source: "poonai",
    },
    {
      id: "ap-m4",
      competency: "management",
      criterion: "management",
      text: "Keeps her fasting, restores fluid volume with 20 mL/kg crystalloid and treats her nausea.",
      points: 1,
      teaching: "Ketonuria, low bicarbonate and dry lips show dehydration after 40 hours of vomiting and poor intake. Restore volume early in intra abdominal infection.",
      source: "solomkin",
    },
    {
      id: "ap-d1",
      competency: "disposition",
      criterion: "process",
      text: "Calls the surgeon as soon as clinical suspicion is high, without waiting for imaging, and arranges source control within hours.",
      points: 3,
      critical: true,
      teaching: "When findings point to a surgical emergency, involve the surgeon early. Complicated appendicitis with sepsis needs prompt source control by surgery or drainage.",
      source: "wses",
    },
    {
      id: "ap-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls for help, reassesses after each bolus and keeps her in a monitored bed with a backup transfer plan through the provincial transfer service.",
      points: 2,
      teaching: "A child who was in shock needs close monitoring until source control. Plan for the case where the local surgeon cannot operate in time.",
      source: "ssc-peds",
    },
    {
      id: "ap-c1",
      competency: "communication",
      criterion: "process",
      text: "Explains to her father why ultrasound comes before CT and what the findings mean.",
      points: 2,
      teaching: "Parents often ask for CT. A short explanation of radiation and the accuracy of ultrasound in children usually answers the concern.",
      source: "acr-peds",
    },
    {
      id: "ap-c2",
      competency: "communication",
      criterion: "process",
      text: "Communicates clearly with the surgeon, including a respectful explanation of the evidence on analgesia and a concise summary of the deterioration.",
      points: 1,
      teaching: "Disagreement with a consultant is handled with evidence and a shared goal. A concise structured summary gets faster action.",
      source: "poonai",
    },
    {
      id: "ap-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Answers the father honestly without blaming the clinic, documents the timeline and gives non judgmental feedback to the first clinic.",
      points: 1,
      teaching: "Early appendicitis is often missed in children. Feedback on return visits helps clinicians learn without blame.",
      source: "bundy",
    },
  ],
  sources: [
    {
      id: "wses",
      citation:
        "Di Saverio S, Podda M, De Simone B, et al. Diagnosis and treatment of acute appendicitis. 2020 update of the WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7386163/",
    },
    {
      id: "acr-peds",
      citation:
        "Koberlein GC, Trout AT, Rigsby CK, et al. Expert Panel on Pediatric Imaging. ACR Appropriateness Criteria. Suspected appendicitis, child. Journal of the American College of Radiology. 2019.",
      url: "https://scholarlyexchange.childrensmercy.org/papers/2645",
    },
    {
      id: "bundy",
      citation: "Bundy DG, Byerley JS, Liles EA, et al. Does this child have appendicitis? JAMA. 2007.",
    },
    {
      id: "poonai",
      citation: "Poonai N, Paskar D, Konrad S, et al. Opioid analgesia for acute abdominal pain in children. A systematic review and meta analysis. Academic Emergency Medicine. 2014.",
    },
    {
      id: "ssc-peds",
      citation:
        "Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis associated organ dysfunction in children. Pediatric Critical Care Medicine. 2020.",
    },
    {
      id: "solomkin",
      citation:
        "Solomkin JS, Mazuski JE, Bradley JS, et al. Diagnosis and management of complicated intra abdominal infection in adults and children. Guidelines by the Surgical Infection Society and the Infectious Diseases Society of America. Clinical Infectious Diseases. 2010.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
