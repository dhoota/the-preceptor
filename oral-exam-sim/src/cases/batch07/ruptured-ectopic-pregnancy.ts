// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const rupturedEctopicPregnancy: OralCase = {
  id: "ruptured-ectopic-pregnancy",
  title: "Found on the washroom floor at work",
  blueprint: "obgyn",
  alsoCovers: ["resus"],
  priorityTopic: "first-trimester-bleeding",
  keyFeatures: [
    { topic: "first-trimester-bleeding", n: 1 },
    { topic: "first-trimester-bleeding", n: 2 },
    { topic: "first-trimester-bleeding", n: 4 },
    { topic: "first-trimester-bleeding", n: 5 },
    { topic: "abdominal-pain", n: 4 },
    { topic: "shock", n: 3 },
  ],
  summary: "A 27 year old woman collapses at work and arrives pale, tachycardic and hypotensive.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "Paramedics bring in a 27 year old woman whom a coworker found on the floor of the office washroom. She fainted again when she stood up. " +
    "The on call gynecologist is at home, 25 minutes away.",
  card: {
    vitals: {
      temperature: "36.2°C",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "82/50 mmHg",
      o2sat: "98% on room air",
      weight: "Not recorded",
    },
    medications: "No anticoagulants. Other medications not recorded.",
    allergies: "No allergies",
  },
  findings: [
    {
      id: "paramedic",
      label: "Paramedic report",
      result:
        "A coworker found her on the floor of the office washroom. She fainted again when she stood up for the paramedics. At triage: capillary glucose 5.6 mmol/L, CTAS 1. " +
        "The paramedic says: 'She has lower belly pain and pain in her right shoulder. We gave 500 mL of saline. She says her period is a bit late but she is sure she is not pregnant.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A 180 bed community hospital in southern Ontario. The blood bank holds 4 units of O negative red cells and runs a massive hemorrhage protocol. " +
        "The on call gynecologist is at home, 25 minutes away.",
    },
    {
      id: "history",
      label: "History from the patient",
      result:
        "Last menstrual period 7 weeks ago. Light spotting for 3 days. Sudden sharp left lower abdominal pain 2 hours ago, then right shoulder tip pain. " +
        "Treated for chlamydia 4 years ago. Not using contraception. G2P1, one vaginal delivery. No anticoagulants. No allergies.",
    },
    {
      id: "exam",
      label: "Abdominal and general exam",
      result:
        "Pale, diaphoretic, cool hands. Capillary refill 4 seconds. Abdomen mildly distended with diffuse guarding, worst in the left lower quadrant. " +
        "Rebound tenderness present. Speculum shows a closed os and a small amount of dark blood.",
    },
    {
      id: "urine-hcg",
      label: "Urine pregnancy test",
      result: "Positive.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Free fluid in the right upper quadrant between the liver and kidney. Large volume of echogenic free fluid in the pelvis. " +
        "Transabdominal view shows an empty uterus with no gestational sac or yolk sac. IVC is small and collapses fully.",
    },
    {
      id: "vbg",
      label: "Venous blood gas and lactate",
      result: "pH 7.29. pCO2 32 mmHg. Bicarbonate 15 mmol/L. Base deficit 8 mmol/L. Lactate 4.1 mmol/L. Ionized calcium 1.08 mmol/L.",
    },
    {
      id: "cbc",
      label: "CBC and coagulation",
      result: "Hemoglobin 92 g/L. Platelets 198 x 10^9/L. INR 1.1. PTT 29 seconds. Fibrinogen 2.4 g/L.",
    },
    {
      id: "group",
      label: "Group and screen",
      result: "Group O, Rh D negative. Antibody screen negative.",
    },
    {
      id: "bhcg",
      label: "Quantitative beta hCG",
      result: "4850 IU/L. Result available 50 minutes after it was sent.",
    },
    {
      id: "chemistry",
      label: "Electrolytes and creatinine",
      result: "Sodium 138 mmol/L. Potassium 3.9 mmol/L. Creatinine 71 µmol/L. Glucose 6.2 mmol/L.",
    },
    {
      id: "partner",
      label: "Collateral from her partner",
      result:
        "Her partner arrives. He says they had been trying for a baby for a year. He asks if the baby is all right and whether she can still have children.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "She is in the resuscitation bay. She is pale and answers questions slowly. The nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First five minutes",
      prompt: "What do you do in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Treat as hemorrhagic shock from a ruptured ectopic pregnancy until proven otherwise.",
        "Monitor, oxygen, two large bore IVs, bloods including group and screen and crossmatch.",
        "Bedside urine hCG and bedside ultrasound now. Do not send her to radiology.",
        "Start uncrossmatched O negative red cells rather than more crystalloid.",
        "Call the gynecologist in now for the operating room, not for a consult.",
        "Targeted history while the team works: last period, spotting, the pain and shoulder tip pain, contraception, past pregnancies and STI.",
      ],
      rubric: ["ec-h1", "ec-h2", "ec-h3", "ec-a1", "ec-a2", "ec-r1", "ec-l1"],
      choices: [
        {
          id: "c-bedside",
          label: "I got two large bore lines, a bedside hCG and a bedside ultrasound, started O negative blood and called gynecology in for surgery.",
          next: "q-pocus",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. A woman of reproductive age in shock has a ruptured ectopic until proven otherwise. " +
            "A positive hCG with free fluid on bedside ultrasound is enough to call the surgeon. Blood, not saline, is the resuscitation fluid.",
        },
        {
          id: "c-fluids",
          label: "I gave another 2 L of saline and waited for the quantitative hCG and a formal ultrasound before calling gynecology.",
          next: "s-fluids",
          quality: "partial",
          feedback:
            "You recognized shock but chose the wrong fluid and the wrong tests. Large volume crystalloid dilutes clotting factors and worsens acidosis. " +
            "The quantitative hCG does not change management in an unstable patient. A urine hCG and bedside ultrasound answer the question in minutes.",
        },
        {
          id: "c-radiology",
          label: "I sent her to the ultrasound department for a transvaginal scan to confirm the diagnosis.",
          next: "s-radiology",
          quality: "unsafe",
          feedback:
            "An unstable patient must not leave the resuscitation room for imaging. Formal ultrasound adds nothing that changes the plan. " +
            "The examiner wanted a bedside hCG, bedside ultrasound, blood and an early call for the operating room.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fluids",
      phase: "Twenty minutes later",
      text:
        "After 2 L of saline her pressure is 76/44 and her heart rate is 136. A repeat gas shows a pH of 7.22. The nurse runs a urine hCG on her own. It is positive. You pick up the ultrasound probe.",
      next: "q-pocus",
    },
    {
      kind: "say",
      id: "s-radiology",
      phase: "In the ultrasound department",
      text:
        "The sonographer calls a code. Her pressure is 68/40 and she is confused. She is rushed back to the resuscitation room. You run the bedside ultrasound there.",
      next: "q-pocus",
    },
    {
      kind: "question",
      id: "q-pocus",
      phase: "Bedside ultrasound",
      prompt: "Her urine hCG is positive. Interpret your bedside ultrasound. What does it tell you and what does it not tell you?",
      seconds: 60,
      modelAnswer: [
        "Free fluid in the right upper quadrant with a positive hCG means large volume hemoperitoneum.",
        "No intrauterine pregnancy. The source is almost certainly a ruptured ectopic.",
        "Unstable plus free fluid means surgery. No further imaging is needed.",
        "A quantitative hCG level does not rule out rupture at any value.",
        "Heterotopic pregnancy is rare but more common after fertility treatment.",
      ],
      rubric: ["ec-a2", "ec-a3"],
      next: "q-resus",
    },
    {
      kind: "question",
      id: "q-resus",
      phase: "Resuscitation",
      prompt: "She has had one unit of O negative red cells. Pressure 80/48, heart rate 130. What are your resuscitation targets and what products do you give?",
      seconds: 90,
      modelAnswer: [
        "Activate the massive hemorrhage protocol.",
        "Permissive target of systolic about 80 to 90 mmHg with mentation preserved until surgical control.",
        "Give red cells, plasma and platelets in a ratio near 1 to 1 to 1 once available.",
        "Keep fibrinogen above 2 g/L and ionized calcium above 1.1 mmol/L. Calcium chloride 1 g IV now.",
        "Warm all products. Use a rapid infuser. Avoid more crystalloid.",
        "Use Rh D negative and Kell negative red cells in a woman of childbearing age where possible.",
      ],
      rubric: ["ec-r2", "ec-r3", "ec-r4"],
      choices: [
        {
          id: "c-mhp",
          label: "I activated the massive hemorrhage protocol, targeted a systolic of 80 to 90, gave warmed balanced products and calcium, and held further crystalloid.",
          next: "s-escalate",
          quality: "strong",
          feedback:
            "Strong. Hemostatic resuscitation buys time until the bleeding vessel is clamped. " +
            "Her ionized calcium of 1.08 mmol/L will fall further with citrate, so calcium chloride 1 g IV is appropriate. Permissive hypotension limits further bleeding.",
        },
        {
          id: "c-norepi",
          label: "I started norepinephrine to bring her systolic above 100 while I waited for more blood.",
          next: "s-norepi",
          quality: "unsafe",
          feedback:
            "Vasopressors in hemorrhagic shock raise the pressure at the cost of perfusion and more bleeding. They do not replace lost volume. " +
            "The examiner wanted blood products through a massive hemorrhage protocol and a lower target until surgical control.",
        },
        {
          id: "c-crystalloid",
          label: "I gave red cells only and topped up with saline boluses to keep her pressure up.",
          next: "s-crystalloid",
          quality: "partial",
          feedback:
            "Red cells are right, but red cells and saline alone lead to dilutional coagulopathy. " +
            "Activate the protocol early so plasma, platelets and fibrinogen arrive before she becomes coagulopathic.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-norepi",
      phase: "Ten minutes later",
      text:
        "Her pressure rises to 102/60 for a few minutes. The abdomen is more distended. Her lactate is now 5.6 mmol/L. The charge nurse asks whether to call the blood bank for the protocol. You activate it.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-crystalloid",
      phase: "Fifteen minutes later",
      text:
        "She has had 3 units of red cells and 1.5 L of saline. Her INR is now 1.6 and fibrinogen is 1.4 g/L. She is oozing from her IV sites. You activate the massive hemorrhage protocol.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "The gynecologist calls",
      text:
        "The gynecologist phones from the car. She is 15 minutes out. She says the operating room is finishing a case and asks you to get a CT abdomen first because she wants to be sure it is not a ruptured corpus luteum cyst. " +
        "Meanwhile the patient's pressure has drifted down to 74/42 after 3 units of red cells.",
      next: "q-consult",
    },
    {
      kind: "question",
      id: "q-consult",
      phase: "Consultant request",
      prompt: "How do you respond to the gynecologist, and what do you set in motion now?",
      seconds: 75,
      modelAnswer: [
        "Decline CT respectfully. She is too unstable to leave the department.",
        "State the facts: positive hCG, empty uterus, free fluid to the right upper quadrant, falling pressure despite blood.",
        "Whatever the source, a hemoperitoneum with shock needs the operating room. CT will not change that.",
        "Call the operating room charge nurse and anesthesia now so the next room is hers.",
        "Call the general surgeon as backup if gynecology is delayed.",
      ],
      rubric: ["ec-c1", "ec-m1", "ec-l1"],
      choices: [
        {
          id: "c-or",
          label: "I explained the findings, declined CT because she is unstable, and asked for the operating room now. I called anesthesia and the OR charge nurse myself.",
          next: "q-airway",
          quality: "strong",
          feedback:
            "Good. You disagreed with data and a clear request, not with the person. " +
            "A hemoperitoneum in a patient in shock needs surgical control whatever the source. Direct calls to anesthesia and the OR save minutes.",
        },
        {
          id: "c-ct",
          label: "I sent her to CT with a nurse and a unit of blood running, as the gynecologist asked.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "The CT scanner is a dangerous place for a patient in shock who is still bleeding. The scan would not change the need for surgery. " +
            "The examiner wanted you to decline politely, share the findings and push for the operating room.",
        },
        {
          id: "c-wait",
          label: "I said I would keep resuscitating and let her decide on imaging when she arrives.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "Keeping her in resus is right, but deferring the plan loses time. " +
            "You should state clearly that she needs the operating room and start mobilizing anesthesia and the OR team now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In CT",
      text:
        "On the CT table her pressure falls to 60/30 and she stops responding to voice. The scan is abandoned. She comes back to the resuscitation room with a nurse bagging her.",
      next: "q-airway",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Fifteen minutes later",
      text:
        "The gynecologist arrives and asks why the OR has not been called. The anesthetist is still in the previous case. The room will not be ready for another 20 minutes.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Deterioration",
      prompt:
        "She is now drowsy and moaning. Pressure 70/40. The anesthetist is still in another case. The nurse asks if you will intubate her here. What do you do?",
      seconds: 90,
      modelAnswer: [
        "Avoid induction in the ED if at all possible. Induction in hemorrhagic shock can cause arrest.",
        "Keep resuscitating with blood. Aim to intubate in the OR with the surgeon scrubbed and ready.",
        "If the airway must be secured here, resuscitate first, then use a reduced dose induction agent such as ketamine 0.5 mg/kg.",
        "Full dose paralytic, for example rocuronium 1.2 to 1.6 mg/kg, because onset is slower in shock.",
        "Push dose epinephrine or phenylephrine drawn up. Most experienced operator. Preoxygenate.",
        "Confirm anticoagulant use, allergies and the last meal for the anesthetist.",
      ],
      rubric: ["ec-h4", "ec-r5"],
      next: "q-rh",
    },
    {
      kind: "question",
      id: "q-rh",
      phase: "Before she leaves for the OR",
      prompt: "The nurse notes she is Rh D negative. What else must happen before or during surgery, and what do you hand over?",
      seconds: 60,
      modelAnswer: [
        "Give Rh immune globulin within 72 hours, for example 300 mcg IM or IV, or the dose your blood bank advises.",
        "Tell the blood bank if she receives Rh D positive platelets. She may need extra Rh immune globulin.",
        "Continue the massive hemorrhage protocol into the OR with repeat gas, CBC, INR and fibrinogen.",
        "Handover in a structured format: diagnosis, products given, calcium, current vitals and labs, pending results.",
        "Send the quantitative hCG and document the time of each product.",
      ],
      rubric: ["ec-m2", "ec-c3"],
      next: "q-partner",
    },
    {
      kind: "question",
      id: "q-partner",
      phase: "Family",
      prompt:
        "As she goes to the OR her partner asks: 'Is the baby all right? Can she still have children?' What do you say?",
      seconds: 75,
      modelAnswer: [
        "Find a quiet space. Introduce yourself. Ask what he knows.",
        "Explain in plain words that the pregnancy was growing outside the womb and has burst, causing bleeding inside.",
        "Say honestly that this pregnancy cannot continue.",
        "The surgeon will try to save the tube if safe, but stopping the bleeding comes first.",
        "Many people conceive after an ectopic. The gynecologist will discuss fertility after surgery.",
        "Acknowledge grief. Offer social work or spiritual care. Keep her privacy in mind about what she wants shared.",
      ],
      rubric: ["ec-c2", "ec-p1"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "After the case",
      prompt: "She went to the OR 70 minutes after arrival. What would you review at a team debrief and what system changes could shorten that time?",
      seconds: 60,
      modelAnswer: [
        "Hot debrief with the team. Ask what went well and what slowed care.",
        "Early OR notification from the ED when bedside ultrasound is positive in an unstable pregnant patient.",
        "A clear pathway that the unstable patient does not travel to imaging.",
        "Review massive hemorrhage protocol activation time and product delivery.",
        "Report through the hospital safety system in a non blaming way.",
      ],
      rubric: ["ec-l2", "ec-d1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "In the OR the gynecologist finds a ruptured left tubal ectopic pregnancy with 2.1 L of hemoperitoneum and performs a salpingectomy. She recovers on the ward. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ec-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about her menstrual and pregnancy history: last menstrual period, spotting, contraception and previous pregnancies.",
      points: 2,
      teaching: "A late period with 3 days of spotting is an early pregnancy until proven otherwise. A patient's certainty that she is not pregnant does not rule it out.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the pain: sudden onset, site, radiation to the shoulder tip and the faints.",
      points: 2,
      teaching: "Shoulder tip pain with syncope points to blood irritating the diaphragm. It means a large hemoperitoneum.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about risk factors for ectopic pregnancy: previous sexually transmitted infection or pelvic inflammatory disease, previous ectopic, tubal surgery and fertility treatment.",
      points: 2,
      teaching: "Previous chlamydia raises the risk of tubal pregnancy. Fertility treatment raises the risk of heterotopic pregnancy.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about anticoagulant use, allergies and the last meal before she goes to the operating room.",
      points: 1,
      teaching: "An AMPLE history takes seconds and changes the anesthetic and transfusion plan.",
      source: "atls",
    },
    {
      id: "ec-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Considers ruptured ectopic pregnancy in any woman of reproductive age with syncope, abdominal pain or shock.",
      points: 2,
      teaching: "Patient report of no pregnancy does not rule it out. Every woman of reproductive age with shock or syncope needs an hCG.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Performs a bedside urine hCG and bedside ultrasound in the resuscitation room rather than sending her to imaging.",
      points: 3,
      critical: true,
      teaching: "A positive hCG with free fluid on bedside ultrasound in a hypotensive patient is enough to call for surgery. Unstable patients do not travel.",
      source: "acep-us",
    },
    {
      id: "ec-a3",
      competency: "assessment",
      criterion: "physical",
      text: "States that free fluid in the right upper quadrant indicates a large hemoperitoneum and that no hCG level rules out rupture.",
      points: 2,
      teaching: "Fluid in Morison pouch in early pregnancy predicts the need for surgery. Ectopic pregnancies rupture at low and high hCG values.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Obtains two large bore IVs, sends group and crossmatch and starts uncrossmatched O negative red cells early.",
      points: 2,
      teaching: "Start blood as soon as shock is recognized. O negative units protect a woman of childbearing age from Rh sensitization.",
      source: "cbs-guide",
    },
    {
      id: "ec-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Activates the massive hemorrhage protocol and gives red cells, plasma and platelets in a balanced ratio.",
      points: 3,
      critical: true,
      teaching: "Balanced products prevent dilutional coagulopathy. Activate early rather than after several units of red cells.",
      source: "cbs-guide",
    },
    {
      id: "ec-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Limits crystalloid and uses a permissive systolic target of about 80 to 90 mmHg until surgical control.",
      points: 2,
      teaching: "Large volume crystalloid and high pressure targets increase bleeding before the vessel is controlled.",
      source: "atls",
    },
    {
      id: "ec-r4",
      competency: "resuscitation",
      criterion: "management",
      text: "Replaces calcium and fibrinogen during transfusion, for example calcium chloride 1 g IV and fibrinogen above 2 g/L.",
      points: 1,
      teaching: "Citrate in blood products binds calcium. Low ionized calcium worsens clotting and cardiac contractility.",
      source: "cbs-guide",
    },
    {
      id: "ec-r5",
      competency: "resuscitation",
      criterion: "management",
      text: "Avoids induction in the ED if possible and, if required, resuscitates first and uses a reduced dose induction agent.",
      points: 2,
      teaching: "Induction and positive pressure in hemorrhagic shock can cause arrest. Intubate in the OR with the surgeon ready when you can.",
      source: "atls",
    },
    {
      id: "ec-m1",
      competency: "management",
      criterion: "management",
      text: "Moves the patient to the operating room for surgical control without waiting for further imaging.",
      points: 3,
      critical: true,
      teaching: "An unstable patient with a hemoperitoneum needs surgery, usually salpingectomy. Imaging only delays definitive care.",
      source: "acog-ectopic",
    },
    {
      id: "ec-m2",
      competency: "management",
      criterion: "management",
      text: "Gives Rh immune globulin, for example 300 mcg IM or IV, to an Rh D negative patient with an ectopic pregnancy.",
      points: 2,
      teaching: "Rh D negative patients with an ectopic pregnancy should receive Rh immune globulin within 72 hours to prevent alloimmunization.",
      source: "sogc-rh",
    },
    {
      id: "ec-c1",
      competency: "communication",
      criterion: "process",
      text: "Declines the request for CT respectfully, shares objective findings and asks clearly for the operating room.",
      points: 2,
      teaching: "State the findings, the risk of travel and the specific request. The bedside physician owns the safety of the patient in the department.",
      source: "acog-ectopic",
    },
    {
      id: "ec-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis, loss of the pregnancy and fertility outlook to the partner honestly and with compassion.",
      points: 2,
      teaching: "Use plain words and name the loss. Many patients conceive after an ectopic pregnancy, but detail belongs to the surgeon after surgery.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-c3",
      competency: "communication",
      criterion: "process",
      text: "Gives a structured handover to the OR team with products given, labs and ongoing needs.",
      points: 1,
      teaching: "A clear handover keeps the massive hemorrhage protocol running without gaps between teams.",
      source: "cbs-guide",
    },
    {
      id: "ec-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Respects patient confidentiality when speaking with the partner and checks what the patient wants shared.",
      points: 1,
      teaching: "Pregnancy information belongs to the patient. Share what is needed for her care and what she agrees to share.",
      source: "sogc-ectopic",
    },
    {
      id: "ec-l1",
      competency: "leadership",
      criterion: "process",
      text: "Mobilizes gynecology, anesthesia and the operating room early and in parallel with resuscitation.",
      points: 2,
      teaching: "Call the surgeon, anesthesia and OR together. Each call made in parallel shortens time to hemorrhage control.",
      source: "atls",
    },
    {
      id: "ec-l2",
      competency: "leadership",
      criterion: "process",
      text: "Leads a debrief and identifies system changes, such as early OR notification and a no travel rule for unstable patients.",
      points: 1,
      teaching: "Delays in hemorrhage cases are usually system delays. Debriefs turn them into fixes.",
      source: "atls",
    },
    {
      id: "ec-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges direct transfer from the resuscitation room to the operating room with the protocol and monitoring continuing.",
      points: 1,
      teaching: "The patient should go from resus to the OR with blood running and an escort, not through a ward or imaging.",
      source: "acog-ectopic",
    },
  ],
  sources: [
    {
      id: "sogc-ectopic",
      citation:
        "Po L, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 414: Management of Pregnancy of Unknown Location and Tubal and Nontubal Ectopic Pregnancies. Journal of Obstetrics and Gynaecology Canada. 2021.",
      url: "https://doi.org/10.1016/j.jogc.2021.01.002",
    },
    {
      id: "acog-ectopic",
      citation: "American College of Obstetricians and Gynecologists. Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstetrics and Gynecology. 2018.",
      url: "https://doi.org/10.1097/AOG.0000000000002560",
    },
    {
      id: "cbs-guide",
      citation:
        "Trudeau JD, Dawe P, Shih AW. Massive hemorrhage and emergency transfusion. In: Clarke G, Chargé S, editors. Clinical Guide to Transfusion. Chapter 11. Canadian Blood Services. 2021.",
      url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/massive-hemorrhage-and-emergency-transfusion",
    },
    {
      id: "atls",
      citation: "American College of Surgeons. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018.",
    },
    {
      id: "sogc-rh",
      citation: "Fung-Kee-Fung K, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 448: Prevention of Rh D Alloimmunization. Journal of Obstetrics and Gynaecology Canada. 2024.",
      url: "https://doi.org/10.1016/j.jogc.2024.102449",
    },
    {
      id: "acep-us",
      citation: "American College of Emergency Physicians. Ultrasound Guidelines: Emergency, Point-of-Care, and Clinical Ultrasound Guidelines in Medicine. Annals of Emergency Medicine. 2023.",
      url: "https://pubmed.ncbi.nlm.nih.gov/37596025/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
