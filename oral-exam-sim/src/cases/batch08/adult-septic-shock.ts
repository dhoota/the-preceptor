// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const adultSepticShock: OralCase = {
  id: "adult-septic-shock",
  title: "Fever and confusion in a retired teacher",
  blueprint: "id",
  alsoCovers: ["resus"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [
    { topic: "infectious-diseases", n: 1 },
    { topic: "infectious-diseases", n: 2 },
    { topic: "infectious-diseases", n: 8 },
    { topic: "shock", n: 6 },
    { topic: "shock", n: 7 },
  ],
  summary: "A 74 year old woman arrives with fever, abdominal pain and new confusion.",
  durationMinutes: 15,
  stem:
    "You are working evenings in the emergency department of a 300 bed community hospital in Ontario. There is an ICU, general surgery, CT, and interventional radiology on call. " +
    "Gastroenterology does ERCP on site, and the gastroenterologist on call is at home tonight. " +
    "Lorraine Beaudoin is 74 years old and weighs 70 kg. She is a retired teacher. Her husband says she has had right upper belly pain and shaking chills for two days and became confused this afternoon. " +
    "Triage vitals: heart rate 124, blood pressure 78/44, respiratory rate 28, SpO2 93 percent on room air, temperature 39.2, capillary glucose 9.1 mmol/L. CTAS 1. " +
    "The nurse says: 'Her eyes look yellow. Her knees are mottled. I have one IV in.'",
  findings: [
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Jaundiced sclerae. GCS 14, confused to date. Tender right upper quadrant with guarding, no peritonitis. Mottling over both knees. Capillary refill 4 seconds. " +
        "Chest has faint crackles at the right base. No rash. No neck stiffness.",
    },
    {
      id: "history",
      label: "Past history and medications",
      result:
        "Hypertension on ramipril 10 mg daily. Type 2 diabetes on metformin 1000 mg twice daily. Known gallstones found on ultrasound two years ago. No allergies. " +
        "She is full code and lives independently with her husband.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 21.4 x 10^9/L with left shift. Hemoglobin 118 g/L. Platelets 88 x 10^9/L. Creatinine 172 µmol/L, baseline 80. Bicarbonate 17 mmol/L. " +
        "Total bilirubin 86 µmol/L. ALP 412 U/L. AST 210 U/L. ALT 245 U/L. Lipase 90 U/L. INR 1.6. Venous lactate 5.2 mmol/L.",
    },
    {
      id: "gas",
      label: "Venous blood gas",
      result: "pH 7.28. pCO2 32 mmHg. Bicarbonate 16 mmol/L. Lactate 5.2 mmol/L.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Hyperdynamic left ventricle. IVC 1.1 cm with more than 50 percent collapse. Right upper quadrant: multiple gallstones, common bile duct 12 mm, no pericholecystic fluid. " +
        "Lungs: A lines anteriorly, a few B lines at the right base.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "Small right basal atelectasis. No consolidation. No free air.",
    },
    {
      id: "urine",
      label: "Urinalysis",
      result: "Bilirubin positive. No leukocytes or nitrites. Catheter placed, 15 mL of dark urine in the first hour.",
    },
    {
      id: "cultures",
      label: "Blood cultures",
      result: "Two sets drawn from separate sites. The lab calls at 14 hours: gram negative bacilli in both sets.",
    },
    {
      id: "ct",
      label: "CT abdomen with contrast",
      result: "Dilated common bile duct to 13 mm with an obstructing distal stone. Intrahepatic ductal dilation. No liver abscess. No perforation.",
    },
    {
      id: "echo-repeat",
      label: "Repeat bedside echo after fluids",
      result: "Left ventricle still hyperdynamic. IVC 1.8 cm with less than 50 percent collapse. New B lines at both bases.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text: "She is confused and shivering. Her pressure on the monitor is 76/42. The nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first hour",
      prompt: "Walk me through your first hour.",
      seconds: 120,
      modelAnswer: [
        "Recognize septic shock with hypoperfusion. Call for help.",
        "Second large bore IV. Oxygen to SpO2 92 to 96 percent.",
        "Two sets of blood cultures and lactate, without delaying antibiotics.",
        "Broad spectrum antibiotics within 1 hour. Piperacillin tazobactam 4.5 g IV for biliary sepsis.",
        "30 mL/kg of balanced crystalloid in boluses, about 2.1 L for 70 kg, with reassessment after each.",
        "Norepinephrine if MAP stays under 65. Do not wait for a central line.",
        "Bedside ultrasound to look for the source and guide fluid.",
      ],
      rubric: ["ss-r1", "ss-m1", "ss-r2"],
      choices: [
        {
          id: "c-bundle",
          label: "I drew two sets of cultures, gave piperacillin tazobactam 4.5 g IV within the hour, and gave balanced crystalloid in 500 mL boluses toward 30 mL/kg with reassessment.",
          next: "q-source",
          quality: "strong",
          feedback:
            "Good. In septic shock every hour of antibiotic delay raises mortality. Cultures first is fine if it does not delay the drug. " +
            "Boluses with reassessment are better than a fixed volume given blindly.",
        },
        {
          id: "c-wait-ct",
          label: "I gave 1 L of normal saline and waited for the CT to confirm the source before choosing antibiotics.",
          next: "s-wait-ct",
          quality: "partial",
          feedback:
            "Antibiotics should not wait for imaging in septic shock. The history, exam and bedside ultrasound already point to the biliary tree. " +
            "The examiner wanted antibiotics within 1 hour and fluid toward 30 mL/kg.",
        },
        {
          id: "c-maintenance",
          label: "I ran maintenance fluid at 100 mL/h and ordered antibiotics to be given when she reached the ward.",
          next: "s-wait-ct",
          quality: "unsafe",
          feedback:
            "She is in shock with a lactate over 4. Maintenance fluid and delayed antibiotics do not treat that. " +
            "The examiner wanted immediate antibiotics and fluid resuscitation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-ct",
      phase: "Two hours later",
      text:
        "Her pressure is 70/38 and her lactate is 6.4 mmol/L. She is more confused. The nurse reminds you that antibiotics have not been given. You give piperacillin tazobactam 4.5 g IV now and start fluid boluses.",
      next: "q-source",
    },
    {
      kind: "question",
      id: "q-source",
      phase: "Source",
      prompt: "What is the source, how severe is it, and what does she need to control it?",
      seconds: 75,
      modelAnswer: [
        "Acute cholangitis from an obstructing common bile duct stone.",
        "Fever, jaundice, right upper quadrant pain, plus confusion and hypotension.",
        "Severe cholangitis by Tokyo criteria because of organ dysfunction: shock, confusion, kidney injury, low platelets and raised INR.",
        "She needs biliary drainage as soon as she is stabilized. ERCP is first choice. Percutaneous drainage by IR if ERCP is not possible.",
        "Antibiotics alone will not control an obstructed infected duct.",
      ],
      rubric: ["ss-a1", "ss-a2"],
      next: "s-pressor",
    },
    {
      kind: "say",
      id: "s-pressor",
      phase: "Forty minutes later",
      text:
        "She has had 2 L of balanced crystalloid. Her MAP is 58. Heart rate 118. Lactate 4.8 mmol/L. There is no central line yet. The nurse asks what you want next.",
      next: "q-pressor",
    },
    {
      kind: "question",
      id: "q-pressor",
      phase: "Vasopressors",
      prompt: "What do you do now?",
      seconds: 75,
      modelAnswer: [
        "Start norepinephrine now through a good peripheral IV. Do not wait for a central line.",
        "Start at about 0.05 to 0.1 mcg/kg/min, which is about 4 to 7 mcg/min, and titrate to MAP 65 or more.",
        "Use a good IV in a large proximal vein, ideally in the upper arm. Check the site often for extravasation. Place a central line and arterial line when practical.",
        "Reassess fluid responsiveness before more fluid. Look at the IVC, lungs and passive leg raise.",
        "Repeat lactate within 2 to 4 hours.",
      ],
      rubric: ["ss-r3", "ss-a3"],
      choices: [
        {
          id: "c-norepi",
          label: "I started norepinephrine at 0.1 mcg/kg/min through a proximal peripheral IV, titrated to a MAP of 65, and reassessed fluid responsiveness before giving more.",
          next: "q-gi",
          quality: "strong",
          feedback:
            "Correct. Norepinephrine is first line and can start peripherally while access is arranged. " +
            "A MAP target of 65 is the standard. Reassessing before more fluid avoids overload.",
        },
        {
          id: "c-more-fluid",
          label: "I gave another 3 L of crystalloid before starting any vasopressor.",
          next: "s-more-fluid",
          quality: "partial",
          feedback:
            "Fluid should be guided by response. After 2 L with a persistently low MAP, delaying vasopressors leaves her hypotensive longer. " +
            "The examiner wanted norepinephrine started peripherally now.",
        },
        {
          id: "c-dopamine",
          label: "I started dopamine at 10 mcg/kg/min because I did not have a central line.",
          next: "s-dopamine",
          quality: "partial",
          feedback:
            "Starting a vasopressor now is right, but dopamine is the wrong one. It causes more dysrhythmias than norepinephrine and Surviving Sepsis recommends norepinephrine first line. " +
            "The lack of a central line is not a reason to avoid norepinephrine. It can run peripherally. The examiner wanted norepinephrine.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-more-fluid",
      phase: "Ninety minutes later",
      text:
        "She has crackles to the mid zones and her SpO2 is 88 percent on 6 L. Her MAP is 60. Your echo shows a full IVC and B lines in both lungs. You start norepinephrine.",
      next: "q-gi",
    },
    {
      kind: "say",
      id: "s-dopamine",
      phase: "Twenty minutes later",
      text: "She is now in atrial fibrillation at 156 and her MAP is 54. You stop the dopamine and start norepinephrine.",
      next: "q-gi",
    },
    {
      kind: "question",
      id: "q-gi",
      phase: "Consultant pushback",
      prompt:
        "The gastroenterologist on call says: 'Keep her on antibiotics. I will do the ERCP first thing tomorrow morning.' It is 22:30. What do you say?",
      seconds: 75,
      modelAnswer: [
        "State clearly that she has severe cholangitis with septic shock on norepinephrine.",
        "Severe cholangitis needs urgent drainage as soon as she is stabilized. Waiting until morning risks death.",
        "Ask for ERCP tonight, or percutaneous drainage by interventional radiology if ERCP is not possible.",
        "Involve the ICU. Escalate to the department head if needed.",
        "Document the discussion.",
      ],
      rubric: ["ss-c1", "ss-m2"],
      choices: [
        {
          id: "c-push",
          label: "I explained she has severe cholangitis with shock on norepinephrine and needs drainage tonight, and asked for ERCP or percutaneous drainage by IR if ERCP was not possible.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Good. Source control is part of resuscitation. An obstructed infected duct will not clear with antibiotics. " +
            "Offering IR drainage as a backup shows you know the options and keeps the focus on the patient.",
        },
        {
          id: "c-accept",
          label: "I accepted ERCP in the morning and admitted her to the ICU on antibiotics.",
          next: "s-accept",
          quality: "partial",
          feedback:
            "ICU and antibiotics are right, but severe cholangitis with shock needs drainage urgently, not in the morning. " +
            "The examiner wanted clear advocacy for drainage tonight.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept",
      phase: "02:00",
      text:
        "The ICU fellow calls you. Norepinephrine is at 0.35 mcg/kg/min and her lactate is 6.8 mmol/L. You call the gastroenterologist again with the ICU fellow on the line, and he agrees to come in.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "Deterioration",
      text:
        "While the endoscopy team is called in, her norepinephrine is now 0.3 mcg/kg/min and her MAP is 61. Her SpO2 is 89 percent on a 15 L non rebreather. She is drowsy. Her husband has just arrived.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Refractory shock",
      prompt: "What do you add for her blood pressure?",
      seconds: 60,
      modelAnswer: [
        "Add vasopressin 0.03 units/min rather than escalating norepinephrine further.",
        "Hydrocortisone 200 mg per day, given as 50 mg IV every 6 hours, for ongoing vasopressor need.",
        "Arterial and central lines.",
        "Repeat echo. Add dobutamine or epinephrine if the heart is failing.",
        "Recheck lactate, glucose and potassium.",
      ],
      rubric: ["ss-m3"],
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Airway",
      prompt: "She will need intubation for hypoxia and for the ERCP. How do you make intubation safe in this patient?",
      seconds: 75,
      modelAnswer: [
        "Resuscitate before you intubate. Pressors running and titrated, push dose pressor ready.",
        "Preoxygenate with non invasive ventilation or high flow and apneic oxygenation.",
        "Reduced dose induction, for example ketamine 0.5 to 1 mg/kg, and rocuronium 1.2 mg/kg.",
        "Most experienced operator. Video laryngoscope.",
        "Expect hypotension after induction and have a plan for peri intubation arrest.",
      ],
      rubric: ["ss-r4"],
      next: "q-husband",
    },
    {
      kind: "question",
      id: "q-husband",
      phase: "Family",
      prompt: "Her husband asks: 'Is she going to die?' What do you tell him?",
      seconds: 60,
      modelAnswer: [
        "Sit down. Use plain words.",
        "She has a serious infection of the bile duct that has spread to the blood and lowered her blood pressure.",
        "Be honest that she is critically ill and could die, but that the treatment is working in parallel.",
        "Explain the breathing tube, the procedure tonight and the ICU.",
        "Confirm her wishes. She is full code.",
        "Offer support and make sure someone can stay with him.",
      ],
      rubric: ["ss-c2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Handover",
      prompt: "Give a handover to the ICU team. What medication changes and follow up do you mention?",
      seconds: 60,
      modelAnswer: [
        "Diagnosis, timeline, antibiotics with time given, fluid total and vasopressor doses.",
        "Source control plan with the gastroenterologist and the time.",
        "Hold metformin because of shock, lactate and kidney injury.",
        "Hold ramipril while hypotensive and with kidney injury.",
        "Follow up blood cultures and narrow antibiotics when results are known.",
        "Lactate trend and urine output.",
      ],
      rubric: ["ss-d1", "ss-c1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is intubated and taken for ERCP. A stone is removed and pus drains from the duct. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ss-r1",
      competency: "resuscitation",
      criterion: "approach",
      text: "Recognizes septic shock with hypoperfusion from hypotension, mottling, confusion and lactate 5.2 mmol/L.",
      points: 2,
      teaching: "Septic shock means vasopressors are needed for a MAP of 65 with a lactate over 2 despite fluid. Mottling, confusion and a lactate of 4 or more show poor perfusion.",
      source: "ssc",
    },
    {
      id: "ss-m1",
      competency: "management",
      criterion: "plan",
      text: "Draws blood cultures and gives broad spectrum antibiotics within 1 hour, such as piperacillin tazobactam 4.5 g IV.",
      points: 3,
      critical: true,
      teaching: "In septic shock, give antibiotics within 1 hour. Cultures should not delay the first dose.",
      source: "ssc",
    },
    {
      id: "ss-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Gives balanced crystalloid toward 30 mL/kg in boluses with reassessment after each.",
      points: 2,
      teaching: "Surviving Sepsis suggests at least 30 mL/kg in the first 3 hours for hypoperfusion. Reassess often to avoid overload.",
      source: "ssc",
    },
    {
      id: "ss-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Identifies acute cholangitis from an obstructing common bile duct stone.",
      points: 2,
      teaching: "Fever, jaundice and right upper quadrant pain with a dilated duct on ultrasound is cholangitis.",
      source: "tg18-dx",
    },
    {
      id: "ss-a2",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Grades it as severe because of organ dysfunction and states it needs urgent biliary drainage.",
      points: 2,
      teaching: "Severe cholangitis with organ failure needs drainage as soon as the patient is stabilized.",
      source: "tg18-mgmt",
    },
    {
      id: "ss-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Starts norepinephrine peripherally, at about 0.05 to 0.1 mcg/kg/min, titrated to MAP 65 or more, without waiting for central access.",
      points: 3,
      critical: true,
      teaching: "Norepinephrine is first line. Surviving Sepsis supports starting it peripherally rather than delaying for a central line.",
      source: "ssc",
    },
    {
      id: "ss-a3",
      competency: "assessment",
      criterion: "data",
      text: "Uses bedside ultrasound and repeat lactate to guide further fluid.",
      points: 1,
      teaching: "Early goal directed protocols did not improve outcome. Individual reassessment matters more than fixed targets.",
      source: "prism",
    },
    {
      id: "ss-m2",
      competency: "management",
      criterion: "plan",
      text: "Pushes for source control tonight by ERCP, or percutaneous drainage if ERCP is not possible.",
      points: 3,
      critical: true,
      teaching: "Antibiotics cannot sterilize an obstructed duct. Drainage is the definitive treatment.",
      source: "tg18-mgmt",
    },
    {
      id: "ss-m3",
      competency: "management",
      criterion: "plan",
      text: "Adds vasopressin 0.03 units/min and hydrocortisone 50 mg IV every 6 hours for rising norepinephrine needs.",
      points: 2,
      teaching: "Surviving Sepsis suggests vasopressin when norepinephrine reaches about 0.25 to 0.5 mcg/kg/min, and hydrocortisone for ongoing vasopressor need.",
      source: "ssc",
    },
    {
      id: "ss-r4",
      competency: "resuscitation",
      criterion: "plan",
      text: "Plans a safe intubation: resuscitate first, reduced dose induction, push dose pressor ready.",
      points: 2,
      teaching: "Induction removes sympathetic tone. Shock patients often arrest at intubation without preparation.",
      source: "ssc",
    },
    {
      id: "ss-c1",
      competency: "communication",
      criterion: "plan",
      text: "Advocates respectfully with the consultant and gives a structured handover to the ICU.",
      points: 2,
      teaching: "State the severity, the criteria and the specific request. Offer an alternative such as IR drainage.",
      source: "tg18-mgmt",
    },
    {
      id: "ss-c2",
      competency: "communication",
      criterion: "plan",
      text: "Tells her husband honestly that she is critically ill and explains the plan.",
      points: 1,
      teaching: "Honest words about the risk of death prepare families. Confirm goals of care early.",
      source: "ssc",
    },
    {
      id: "ss-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to the ICU, holds metformin and ramipril, and plans to narrow antibiotics based on cultures.",
      points: 1,
      teaching: "Metformin and ACE inhibitors worsen kidney injury and lactic acidosis in shock. Narrow therapy once the organism is known.",
      source: "ssc",
    },
  ],
  sources: [
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
    },
    {
      id: "tg18-dx",
      citation: "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
    },
    {
      id: "tg18-mgmt",
      citation:
        "Miura F, et al. Tokyo Guidelines 2018: initial management of acute biliary infection and flowchart for acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
    },
    {
      id: "prism",
      citation: "PRISM Investigators. Early, goal directed therapy for septic shock: a patient level meta analysis. N Engl J Med. 2017.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
