// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const postpartumHeadacheSixthDay: OralCase = {
  id: "postpartum-headache-sixth-day",
  title: "Her partner holds the baby",
  blueprint: "obgyn",
  alsoCovers: ["neuro", "comm"],
  priorityTopic: "pre-eclampsia",
  keyFeatures: [
    { topic: "pre-eclampsia", n: 1 },
    { topic: "pre-eclampsia", n: 2 },
    { topic: "pre-eclampsia", n: 3 },
    { topic: "pre-eclampsia", n: 4 },
  ],
  summary: "A woman who gave birth less than a week ago comes in with a headache that has lasted three days.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 33 year old woman who gave birth 6 days ago has had a headache for 3 days. Her partner has driven her in with the baby.",
  card: {
    vitals: {
      temperature: "36.9°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "164/108 mmHg",
      o2sat: "98% on room air",
      weight: "78 kg (172 lb)",
    },
    medications: "Ibuprofen, acetaminophen, prenatal vitamin",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "The headache began 3 days ago. It built up over a few hours, is bifrontal and throbbing, and has been constant since. Today it is 8 out of 10, the worst so far. " +
        "It is the same lying down and standing up. Since this morning she sees sparkling lights in both eyes. She has had nausea and vomited once. Since last night she has an ache under the right ribs. " +
        "No fever, neck stiffness, weakness, numbness or trouble speaking. It did not start suddenly.",
    },
    {
      id: "midwife",
      label: "Midwife home visit 2 days ago",
      result:
        "Day 4 after birth. Her midwife measured one BP of 138/88 at the end of the visit. She had a mild headache, which they put down to poor sleep. " +
        "No urine or blood tests. The midwife advised ibuprofen and acetaminophen, a BP recheck on day 7, and a call if the headache got worse or her vision changed.",
    },
    {
      id: "obstetric",
      label: "Pregnancy and birth",
      result:
        "Second baby. Vaginal birth at 39 weeks at this hospital 6 days ago with an epidural placed on the first attempt. Blood loss 400 mL. " +
        "Pressures in pregnancy 104 to 118 over 62 to 74 until 37 weeks, when one reading was 132/84 with trace protein. Discharged on day 1 with BP 136/86. She is breastfeeding.",
    },
    {
      id: "pmh",
      label: "Past and family history",
      result:
        "Migraine without aura as a teenager, none for 10 years. No hypertension, kidney disease or clotting disorder. Body mass index 31 before pregnancy. Her first pregnancy was normal. Her sister had pre-eclampsia.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Ibuprofen 400 mg every 6 hours for the last 2 days. Acetaminophen 1 g every 6 hours. Prenatal vitamin. No hormonal contraception yet. No allergies.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Lives with her partner and their 4 year old son. Partner is off work for 2 weeks. No smoking, alcohol or drug use.",
    },
    {
      id: "partner",
      label: "Collateral from her partner",
      result:
        "\"Since yesterday she has been forgetting things. She put the baby's bottle in the cupboard and snapped at our son, which is not like her. She kept saying the lights were too bright.\"",
    },
    {
      id: "repeat-bp",
      label: "Repeat blood pressure",
      result: "15 minutes after triage, seated, with a large adult cuff: 176/104 mmHg. Pulse 94.",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "GCS 15 but slow to answer. Pupils equal and reactive. Visual acuity 20/40 in both eyes. Fields full to confrontation. No papilledema on a limited direct view. No facial or limb weakness. " +
        "Reflexes 3 plus at the knees with 2 beats of ankle clonus. No neck stiffness.",
    },
    {
      id: "body",
      label: "Chest, abdomen and pelvis",
      result:
        "Chest clear. Right upper quadrant and epigastric tenderness, no guarding. Uterus firm, two fingerbreadths below the umbilicus. Lochia normal. 2 plus ankle edema. Epidural site clean.",
    },
    {
      id: "urine",
      label: "Urine",
      result: "Dipstick protein 2 plus. Urine protein to creatinine ratio 62 mg/mmol.",
    },
    {
      id: "cbc",
      label: "CBC and smear",
      result: "Hemoglobin 108 g/L. Platelets 96 x 10^9/L (214 on the day after birth). White cells 10.4 x 10^9/L. A few schistocytes on the smear.",
    },
    {
      id: "chem",
      label: "Liver, renal and hemolysis labs",
      result:
        "AST 148 U/L. ALT 172 U/L. LDH 690 U/L. Bilirubin 18 µmol/L. Creatinine 96 µmol/L (58 on the day after birth). Uric acid 420 µmol/L. INR 1.0. Fibrinogen 3.6 g/L. Glucose 5.1 mmol/L.",
    },
    {
      id: "ct",
      label: "CT head and CT venogram",
      result:
        "No hemorrhage or mass. Patchy low density in the white matter of both parieto-occipital regions, suspicious for posterior reversible encephalopathy syndrome. Venous sinuses patent.",
    },
    {
      id: "bp-course",
      label: "Blood pressure after labetalol",
      result: "After labetalol 20 mg, 40 mg and 80 mg IV, 10 minutes apart: 172/112 mmHg. Pulse 74. She still has the headache and the lights.",
    },
    {
      id: "monitoring",
      label: "Nursing checks on magnesium",
      result: "Resp 16. Reflexes present. Urine output 35 mL in the first hour by catheter. Magnesium level at 4 hours 2.4 mmol/L.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "14:10",
      text:
        "She is squinting under the lights. Her partner holds the baby. The triage nurse says: \"She had a migraine history and she is not sleeping. Do you want the usual headache cocktail?\"",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First fifteen minutes",
      prompt: "What do you do in the first fifteen minutes?",
      seconds: 90,
      modelAnswer: [
        "Treat this as postpartum pre-eclampsia with severe features until proven otherwise. It can appear up to 6 weeks after birth.",
        "Repeat the BP in 15 minutes with the right cuff. If it stays at 160/110 or more, treat within 30 to 60 minutes.",
        "Labetalol 20 mg IV, or immediate release nifedipine 10 mg orally, or hydralazine 5 to 10 mg IV.",
        "Magnesium sulfate 4 g IV over 15 to 20 minutes, then 1 g/h.",
        "Monitor, IV access. CBC, smear, liver enzymes, LDH, creatinine, INR, fibrinogen, urine protein to creatinine ratio.",
        "Call the obstetrician early.",
        "No triptan and no more NSAID until the kidneys and platelets are known.",
      ],
      rubric: ["pe-p1", "pe-m1", "pe-m2", "pe-pr4"],
      choices: [
        {
          id: "c-treat",
          label:
            "I repeated the BP in 15 minutes and got 176/104. I gave labetalol 20 mg IV, started magnesium sulfate 4 g IV over 15 minutes then 1 g/h, sent pre-eclampsia labs and urine, and called the obstetrician.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Correct. Severe hypertension confirmed 15 minutes apart needs treatment within 30 to 60 minutes to prevent stroke. " +
            "A severe headache with visual symptoms is a severe feature, so magnesium is indicated now, not after the labs return.",
        },
        {
          id: "c-wait-labs",
          label: "I sent blood work and a urine sample and planned to treat if they confirmed pre-eclampsia.",
          next: "s-wait-labs",
          quality: "partial",
          feedback:
            "The labs are needed, but a pressure of 160/110 or more is treated on its own merits. Stroke risk does not wait for a lab result. " +
            "The examiner wanted the BP confirmed and treated within the hour and magnesium started for her severe headache and visual symptoms.",
        },
        {
          id: "c-migraine",
          label: "Her old migraines are back. I gave sumatriptan 6 mg subcutaneously and IV metoclopramide.",
          next: "s-migraine",
          quality: "unsafe",
          feedback:
            "A new severe headache with visual symptoms and a pressure of 164/108 after birth is pre-eclampsia until proven otherwise. " +
            "Triptans are vasoconstrictors and should be avoided with uncontrolled hypertension. Anchoring on an old migraine history is the trap here.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-labs",
      phase: "15:00",
      text:
        "Fifty minutes later her BP is 176/114. She says the lights are worse and she cannot read the clock. The obstetrician on the phone asks why magnesium is not running. You give labetalol 20 mg IV and start magnesium.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-migraine",
      phase: "14:40",
      text:
        "The nurse holds the sumatriptan and asks you to look at the second pressure, 170/112. Her partner says she has been confused since yesterday. You give labetalol 20 mg IV and start magnesium sulfate.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "Treatment is under way. What history do you want, from her, her partner and the chart?",
      seconds: 75,
      modelAnswer: [
        "Headache: onset, speed of onset, position effect, progression. A thunderclap onset points to bleeding or vasoconstriction. A positional headache points to a dural puncture leak.",
        "Visual symptoms, right upper quadrant or epigastric pain, nausea, shortness of breath, seizure.",
        "The pregnancy BP trend, the trace protein at 37 weeks and the BP at discharge.",
        "The midwife's reading of 138/88 on day 4. BP peaks 3 to 6 days after birth, and her readings are climbing from her own baseline.",
        "Epidural, migraine history, medications including ibuprofen, breastfeeding.",
        "Risk factors: her sister had pre-eclampsia, body mass index 31.",
        "Collateral: forgetfulness and irritability since yesterday.",
      ],
      rubric: ["pe-h1", "pe-h2", "pe-h3", "pe-h4", "pe-h5"],
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Differential",
      prompt: "Examine her and give me your differential. Does she need imaging?",
      seconds: 75,
      modelAnswer: [
        "Neuro exam with visual acuity and fields, fundi, reflexes and clonus. Abdomen for right upper quadrant tenderness.",
        "Postpartum pre-eclampsia with severe features is most likely.",
        "Also consider posterior reversible encephalopathy syndrome, cerebral venous sinus thrombosis, intracranial hemorrhage, reversible cerebral vasoconstriction syndrome, post dural puncture headache, migraine and meningitis.",
        "Imaging is needed. Visual change, confusion and a severe headache are atypical enough. The postpartum state raises the risk of venous thrombosis.",
        "CT head with CT venogram once BP treatment and magnesium have started, or MRI with venography if quickly available. Breastfeeding can continue after contrast.",
      ],
      rubric: ["pe-p2", "pe-p3"],
      choices: [
        {
          id: "c-image",
          label:
            "I examined her fields, fundi and reflexes, listed pre-eclampsia, PRES, venous sinus thrombosis, hemorrhage and vasoconstriction syndrome, and ordered a CT head with a CT venogram once magnesium was running.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Good. Visual symptoms and confusion after birth need imaging. Venous sinus thrombosis is more common in the weeks after birth and changes treatment completely. " +
            "Starting magnesium and BP treatment first was the right order.",
        },
        {
          id: "c-no-image",
          label: "This is classic pre-eclampsia, so I did not image her.",
          next: "s-no-image",
          quality: "partial",
          feedback:
            "Pre-eclampsia is likely, but confusion and visual loss are atypical features that warrant imaging. " +
            "The examiner wanted a CT head with venogram or MRI to look for hemorrhage, PRES and venous sinus thrombosis.",
        },
        {
          id: "c-patch",
          label: "She had an epidural, so I called anesthesia to consider a blood patch for a post dural puncture headache.",
          next: "s-patch",
          quality: "unsafe",
          feedback:
            "Her headache is not positional and she has severe hypertension, so a dural leak is unlikely. " +
            "A blood patch is a neuraxial procedure and her platelets turn out to be falling. Anchoring on the epidural delays the real diagnosis.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-image",
      phase: "16:00",
      text: "The obstetrician arrives and asks for a CT head and venogram because of the visual loss. You order them.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-patch",
      phase: "15:30",
      text:
        "The anesthetist examines her and points out that the headache does not change with posture and her pressure is 170/110. She declines to do a blood patch and suggests imaging. You order a CT head and venogram.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "16:15",
      text:
        "Results are back. Platelets 96 x 10^9/L, down from 214 on the day after birth. AST 148, ALT 172, LDH 690. Creatinine 96 µmol/L, up from 58. Urine protein to creatinine ratio 62 mg/mmol. " +
        "The CT shows bilateral parieto-occipital white matter changes suspicious for PRES. The venous sinuses are patent.",
      next: "q-labs",
    },
    {
      kind: "question",
      id: "q-labs",
      phase: "Results",
      prompt: "Interpret these results. What changes in your plan?",
      seconds: 75,
      modelAnswer: [
        "Postpartum pre-eclampsia with HELLP syndrome: hemolysis, raised liver enzymes and platelets under 100.",
        "Acute kidney injury. Creatinine has risen by about two thirds, to above 90 µmol/L.",
        "PRES on CT. She is at high risk of eclampsia.",
        "Stop ibuprofen. NSAIDs are acceptable after birth in most hypertensive disorders, but not with acute kidney injury, hard to control BP and falling platelets.",
        "Magnesium is cleared by the kidney. Watch reflexes, breathing and urine output hourly. Check a level.",
        "Repeat CBC, liver enzymes and creatinine every 6 to 12 hours. Limit total fluids to about 80 mL/h.",
        "No neuraxial procedures while platelets are falling.",
      ],
      rubric: ["pe-p4", "pe-m4"],
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-refractory",
      phase: "16:30",
      text:
        "Her BP settled after the first dose of labetalol but climbed again during the CT. In the last 30 minutes she has had labetalol 20 mg, 40 mg and 80 mg IV, 10 minutes apart. Her BP is 172/112 and her pulse is 74. She still sees the lights. The nurse asks what to give next.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Pressure still high",
      prompt: "What do you give now, and who do you call?",
      seconds: 75,
      modelAnswer: [
        "Labetalol has failed after 20, 40 and 80 mg. Switch class.",
        "Hydralazine 10 mg IV over 2 minutes, with a BP recheck in 20 minutes.",
        "Or immediate release nifedipine 10 to 20 mg orally. Never the extended release tablet for acute control.",
        "Aim first for under 160/110 without a sudden fall. Then lower it gradually with oral agents. SOGC targets a diastolic of about 85 in pregnancy. ACOG accepts 140 to 150 over 90 to 100 as the first goal.",
        "If the second agent fails, call anesthesia, obstetric medicine or critical care for an infusion in a monitored bed.",
        "Keep magnesium running. Recheck BP every 10 to 15 minutes.",
      ],
      rubric: ["pe-m3", "pe-m1"],
      choices: [
        {
          id: "c-switch",
          label: "I switched to hydralazine 10 mg IV, rechecked in 20 minutes, and asked the obstetrician and ICU to see her in case she needed an infusion.",
          next: "s-partner",
          quality: "strong",
          feedback:
            "Correct. When labetalol at 20, 40 and 80 mg fails, the standard step is a different agent such as hydralazine 10 mg IV. " +
            "Persistent severe hypertension after two agents calls for expert help and a monitored setting.",
        },
        {
          id: "c-xl",
          label: "I started nifedipine XL 30 mg orally and planned to recheck in an hour.",
          next: "s-xl",
          quality: "partial",
          feedback:
            "Nifedipine is a good postpartum drug, but the extended release form takes hours to work. It is for maintenance, not for a pressure of 172/112 with visual symptoms. " +
            "Use IV hydralazine or immediate release nifedipine now.",
        },
        {
          id: "c-more-labetalol",
          label: "I kept giving labetalol 80 mg IV every 10 minutes until the pressure came down. She had 460 mg in total.",
          next: "s-more-labetalol",
          quality: "unsafe",
          feedback:
            "The usual cumulative maximum of IV labetalol is about 300 mg. Beyond that you add beta blockade without much more BP effect and risk bradycardia and hypotension. " +
            "Switch class after 80 mg fails.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-xl",
      phase: "17:30",
      text: "An hour later her BP is 170/110 and she says her vision is blurrier. The obstetrician asks for IV hydralazine. You give 10 mg and the pressure falls to 152/98.",
      next: "s-partner",
    },
    {
      kind: "say",
      id: "s-more-labetalol",
      phase: "17:10",
      text:
        "Her pulse drops to 48 and her BP is 166/108. The pharmacist calls to question the total dose. You stop the labetalol and give hydralazine 10 mg IV. The pressure falls to 150/96.",
      next: "s-partner",
    },
    {
      kind: "say",
      id: "s-partner",
      phase: "Later that afternoon",
      text:
        "Her BP is now 150/96. The baby is crying. Her partner says: \"She has been breastfeeding him. Someone said all these drugs mean he has to go on formula. " +
        "And can she come home tonight once the pressure is down? I can't manage our son and a newborn on my own.\"",
      next: "q-feeding",
    },
    {
      kind: "question",
      id: "q-feeding",
      phase: "Her partner",
      prompt: "What do you tell them?",
      seconds: 75,
      modelAnswer: [
        "Speak to both of them, in plain language. She has pre-eclampsia after birth, with effects on her blood, liver, kidneys and brain. The treatment is working.",
        "She cannot go home tonight. The risk of a seizure or stroke is highest in the next 24 to 48 hours. She needs magnesium for 24 hours, close monitoring and repeat blood tests.",
        "Breastfeeding can continue. Labetalol, nifedipine and enalapril are compatible, and very little magnesium reaches the baby. No pumping and discarding.",
        "The baby can stay with her on the unit with a support person. Nurses and a lactation consultant help with feeds while she is drowsy on magnesium.",
        "Ask about help at home for her partner and the 4 year old. Involve social work if needed.",
        "Check what they understood and answer questions.",
      ],
      rubric: ["pe-pr1", "pe-pr2", "pe-pr6"],
      choices: [
        {
          id: "c-explain",
          label:
            "I explained the diagnosis and why she must stay for at least 24 hours of magnesium and monitoring. I said she can keep breastfeeding on these drugs, arranged for the baby to stay with her with lactation help, and asked social work to help with care at home.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Good. You were clear about the danger, kept mother and baby together and protected breastfeeding. " +
            "Labetalol, nifedipine and enalapril are compatible with breastfeeding, and magnesium is not a reason to stop. Practical help at home makes it easier for the family to accept admission.",
        },
        {
          id: "c-pump-dump",
          label: "I told her to pump and discard her milk until the magnesium was stopped and to give formula in the meantime.",
          next: "s-pump-dump",
          quality: "partial",
          feedback:
            "Admission was right, but interrupting breastfeeding is not needed. Little magnesium reaches the milk and the baby absorbs it poorly. " +
            "A day of formula can upset feeding and supply. The examiner wanted breastfeeding supported on compatible drugs.",
        },
        {
          id: "c-home",
          label: "I agreed she could go home tonight once her BP was under 160/110, on nifedipine XL with a BP check in 3 days, because the baby needs her.",
          next: "s-home",
          quality: "unsafe",
          feedback:
            "She has HELLP syndrome, acute kidney injury and PRES. She needs 24 hours of magnesium, serial labs and close BP control in hospital. " +
            "Discharge now risks eclampsia, stroke and death. Address the family's needs without compromising her safety.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-pump-dump",
      phase: "17:40",
      text:
        "The obstetric nurse calls you. The patient is upset about stopping feeds and is already uncomfortable. The lactation consultant confirms she can breastfeed on magnesium and labetalol. You correct your advice with the couple.",
      next: "q-dispo",
    },
    {
      kind: "say",
      id: "s-home",
      phase: "17:40",
      text:
        "The obstetrician hears the plan and refuses to discharge her. Her platelets on the repeat sample are 84. You go back to the couple, explain why she must stay, and ask social work to help the family.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where does she go and what are your orders?",
      seconds: 60,
      modelAnswer: [
        "Admit to the obstetric unit in a high acuity bed with one to one nursing. ICU if BP stays refractory or she seizes.",
        "Magnesium 1 g/h for 24 hours. Hourly reflexes, resp rate and urine output. Calcium gluconate at the bedside.",
        "BP every 15 minutes until stable. Oral labetalol or nifedipine, adding enalapril if needed.",
        "Total fluids about 80 mL/h. Repeat HELLP labs every 6 to 12 hours.",
        "No NSAIDs while she has kidney injury. Acetaminophen for pain.",
        "Neurology or repeat imaging if the visual symptoms persist.",
      ],
      rubric: ["pe-pr3"],
      next: "q-future",
    },
    {
      kind: "question",
      id: "q-future",
      phase: "Looking ahead",
      prompt: "Before she goes to the ward she asks: \"Will this happen again, and is there anything I should do?\" What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Pre-eclampsia can come back in a future pregnancy. About 1 in 6 people with pre-eclampsia have it again.",
        "In a future pregnancy, see her care provider early. Low dose ASA at bedtime started before 16 weeks lowers the risk. SOGC favours 162 mg a day.",
        "Pre-eclampsia raises her lifelong risk of high BP, heart disease, stroke and kidney disease.",
        "Have her BP, kidney function, lipids and glucose checked after this, and keep a yearly BP check with her family doctor.",
        "Before discharge from the ward: home BP monitoring, a written list of warning signs and a BP check within days.",
      ],
      rubric: ["pe-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She is admitted to the obstetric unit on magnesium with the baby. Her platelets bottom out at 71 the next morning and recover by day 4. Her vision returns to normal. She goes home on day 5 on nifedipine with a BP check in 3 days. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pe-h1",
      competency: "assessment",
      criterion: "history",
      text: "Characterizes the headache: gradual onset, constant, not positional, worsening, with visual symptoms, nausea and right upper quadrant pain.",
      points: 2,
      teaching: "Headache, visual symptoms and right upper quadrant pain are severe features of pre-eclampsia. A non positional headache argues against a dural puncture leak.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h2",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the BP trend in pregnancy, the trace protein at 37 weeks, the discharge BP and the midwife's single reading of 138/88 on day 4.",
      points: 2,
      teaching: "BP peaks 3 to 6 days after birth. A rise from her own baseline matters more than any one number, and pre-eclampsia can first appear after birth.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the epidural, past migraine and neurological red flags to sort pre-eclampsia from dural puncture headache, migraine, hemorrhage and venous thrombosis.",
      points: 2,
      teaching: "A past history of migraine and a recent epidural are common distractors. Ask about onset speed, posture and focal symptoms.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about medications, including regular ibuprofen, breastfeeding, and risk factors such as a sister with pre-eclampsia and obesity.",
      points: 1,
      teaching: "Family history and obesity raise the risk of pre-eclampsia. Breastfeeding shapes the choice of antihypertensive.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h5",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from her partner about forgetfulness, irritability and vomiting.",
      points: 1,
      teaching: "Subtle confusion is often noticed first by family. It is a warning sign of cerebral involvement.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Repeats the BP within 15 minutes with an appropriately sized cuff and confirms severe hypertension of 160/110 or more.",
      points: 2,
      teaching: "Confirm a severe reading 15 minutes later with the right cuff. Then the clock to treatment starts.",
      source: "acog-767",
    },
    {
      id: "pe-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Does a focused exam: visual acuity and fields, fundi, reflexes and clonus, and right upper quadrant tenderness.",
      points: 2,
      teaching: "Hyperreflexia with clonus and right upper quadrant tenderness support severe pre-eclampsia and HELLP.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential including PRES, venous sinus thrombosis, intracranial hemorrhage, vasoconstriction syndrome and dural puncture headache, and orders CT head with venogram or MRI.",
      points: 2,
      teaching: "Atypical neurological features after birth need imaging. Venous sinus thrombosis and hemorrhage need different treatment from pre-eclampsia.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Diagnoses postpartum pre-eclampsia with HELLP syndrome and acute kidney injury from the labs and urine protein to creatinine ratio.",
      points: 2,
      critical: true,
      teaching: "A protein to creatinine ratio of 30 mg/mmol or more is significant proteinuria. Hemolysis, raised liver enzymes and platelets under 100 define HELLP, which can occur after birth.",
      source: "sogc-hdp",
    },
    {
      id: "pe-m1",
      competency: "management",
      criterion: "management",
      text: "Treats confirmed severe hypertension within 30 to 60 minutes with IV labetalol, IV hydralazine or immediate release oral nifedipine.",
      points: 3,
      critical: true,
      teaching: "Severe hypertension in pregnancy and after birth causes stroke. First line agents should be given within 30 to 60 minutes of confirmation.",
      source: "acog-767",
    },
    {
      id: "pe-m2",
      competency: "management",
      criterion: "management",
      text: "Gives magnesium sulfate 4 g IV then 1 g/h for 24 hours, with hourly reflexes, resp rate and urine output because of her raised creatinine.",
      points: 3,
      critical: true,
      teaching: "Magnesium prevents eclampsia in severe pre-eclampsia, including after birth. It is cleared by the kidney, so watch for toxicity when creatinine rises.",
      source: "sogc-hdp",
    },
    {
      id: "pe-m3",
      competency: "management",
      criterion: "management",
      text: "Switches to IV hydralazine or immediate release nifedipine when labetalol 20, 40 and 80 mg fails, avoids the extended release form, and calls for help if a second agent fails.",
      points: 2,
      teaching: "If labetalol fails after 80 mg, change class. Persistent severe hypertension after two agents needs anesthesia, obstetric medicine or critical care input.",
      source: "acog-767",
    },
    {
      id: "pe-m4",
      competency: "management",
      criterion: "management",
      text: "Stops ibuprofen because of acute kidney injury and hard to control BP, avoids triptans, and avoids neuraxial procedures while platelets are falling.",
      points: 1,
      teaching: "NSAIDs are not contraindicated after birth in most hypertensive disorders, but kidney injury and uncontrolled BP are reasons to stop them. Triptans are vasoconstrictors.",
      source: "aom-hdp",
    },
    {
      id: "pe-pr1",
      competency: "communication",
      criterion: "process",
      text: "Tells her and her partner that breastfeeding can continue on her medications, without pumping and discarding, and keeps the baby with her.",
      points: 2,
      teaching: "Labetalol, nifedipine and enalapril are compatible with breastfeeding. Keeping mother and baby together supports feeding and makes admission easier to accept.",
      source: "aom-hdp",
    },
    {
      id: "pe-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Declines the request for discharge tonight, explains the risk of seizure and stroke, and arranges practical help for the family.",
      points: 1,
      teaching: "Postpartum HELLP and PRES need 24 hours of magnesium and close monitoring. Social barriers to admission are solved, not accepted.",
      source: "sogc-hdp",
    },
    {
      id: "pe-pr3",
      competency: "disposition",
      criterion: "process",
      text: "Admits to a high acuity obstetric bed with one to one nursing, magnesium for 24 hours, serial labs and breastfeeding compatible oral agents, with ICU if BP stays refractory.",
      points: 2,
      teaching: "Postpartum HELLP can worsen over the first 24 to 48 hours. Total fluids are limited to about 80 mL/h to avoid pulmonary edema.",
      source: "sogc-hdp",
    },
    {
      id: "pe-pr4",
      competency: "leadership",
      criterion: "process",
      text: "Prioritizes: confirms and treats the BP and starts magnesium before imaging, while history and labs proceed in parallel.",
      points: 1,
      teaching: "Treating severe hypertension and preventing seizures come before tests that only refine the diagnosis.",
      source: "acog-767",
    },
    {
      id: "pe-pr5",
      competency: "communication",
      criterion: "process",
      text: "Counsels her on recurrence in a future pregnancy, low dose ASA started before 16 weeks, and her lifelong cardiovascular risk with yearly follow up.",
      points: 1,
      teaching: "About 16 percent of people with pre-eclampsia have it again in the next pregnancy. Pre-eclampsia also raises later risk of hypertension, heart disease, stroke and kidney disease.",
      source: "aom-hdp",
    },
    {
      id: "pe-pr6",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis and treatment to her and her partner in plain language and checks their understanding.",
      points: 1,
      teaching: "New parents worry first about the baby and the family at home. Plain words and a teach back check keep them engaged in the plan.",
      source: "sogc-hdp",
    },
  ],
  sources: [
    {
      id: "sogc-hdp",
      citation:
        "Magee LA, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 426: Hypertensive Disorders of Pregnancy: Diagnosis, Prediction, Prevention, and Management. Journal of Obstetrics and Gynaecology Canada. 2022.",
      url: "https://doi.org/10.1016/j.jogc.2022.03.002",
    },
    {
      id: "acog-767",
      citation:
        "American College of Obstetricians and Gynecologists. Committee Opinion No. 767: Emergent Therapy for Acute-Onset, Severe Hypertension During Pregnancy and the Postpartum Period. Obstetrics and Gynecology. 2019.",
      url: "https://doi.org/10.1097/AOG.0000000000003075",
    },
    {
      id: "aom-hdp",
      citation: "Carnegie C, MacDonald T, Minichiello A. Association of Ontario Midwives. Clinical Practice Guideline No. 15: Hypertensive Disorders of Pregnancy. 2023.",
      url: "https://www.ontariomidwives.ca/sites/default/files/2023-05/CPG-HDP-2023-PUB.pdf",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
