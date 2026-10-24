// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const rightRibPainThroughAnInterpreter: OralCase = {
  id: "right-rib-pain-through-an-interpreter",
  title: "Pain under the right ribs",
  blueprint: "obgyn",
  alsoCovers: ["comm", "ethics"],
  priorityTopic: "pre-eclampsia",
  keyFeatures: [
    { topic: "pre-eclampsia", n: 1 },
    { topic: "pre-eclampsia", n: 2 },
    { topic: "pre-eclampsia", n: 3 },
    { topic: "pre-eclampsia", n: 4 },
  ],
  summary: "A woman who arrived in Canada a few weeks ago has pain under her ribs and vomiting. She speaks little English.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when the following patient arrives. " +
    "A 31 year old pregnant woman who arrived in Canada 5 weeks ago is brought in by her husband with pain under her right ribs and vomiting since last night. She speaks Arabic and little English.",
  card: {
    vitals: {
      temperature: "36.9°C oral",
      pulse: "102/minute",
      resp: "18/minute",
      bp: "146/94 mmHg",
      o2sat: "98% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "None prescribed. Antacid tablets from a pharmacy since yesterday.",
    allergies: "None known",
  },
  findings: [
    {
      id: "language",
      label: "Communication",
      result:
        "Her husband speaks English well and offers to interpret. A professional Arabic interpreter is available by video within 5 minutes. When asked directly through the interpreter, she understands questions easily.",
    },
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "Constant pain in the upper abdomen and under the right ribs for 14 hours, 7 out of 10, not related to food. She has vomited 5 times with no blood. A frontal headache since this morning has not settled with acetaminophen 500 mg. No visual change. The baby is moving normally. No vaginal bleeding, fluid loss or contractions. No fever, urinary symptoms or diarrhea.",
    },
    {
      id: "dating",
      label: "Dates and prenatal care",
      result:
        "She is not sure of her last menstrual period and thinks it was about 7 months ago. She had one prenatal visit in her home country early in the pregnancy and was told her pressure was normal. She has had no ultrasound in this pregnancy and has no records. She has not taken ASA or any prenatal medication.",
    },
    {
      id: "obstetric",
      label: "Obstetric history",
      result:
        "She has had three vaginal births at term. In her third pregnancy, 4 years ago, she had high blood pressure and swelling near the end and labour was induced a few weeks early. That baby is well.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "No known hypertension, kidney disease, diabetes, lupus, liver disease or gallstones. No surgery.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "She and her husband are refugee claimants from Sudan. They live in a temporary shelter with their three children, aged 4 to 10. She has no family physician yet. She does not smoke or drink alcohol. Asked privately through the interpreter, she says she feels safe with her husband.",
    },
    {
      id: "general",
      label: "General examination",
      result: "Alert and uncomfortable. Her face and hands look puffy. Mild edema of both ankles. Heart and lungs normal.",
    },
    {
      id: "abdomen",
      label: "Abdomen and uterus",
      result:
        "Tender in the epigastrium and right upper quadrant without guarding. Murphy sign is equivocal. Fundal height is 30 cm. The uterus is soft and nontender. No contractions are felt.",
    },
    {
      id: "neuro",
      label: "Neurological examination",
      result:
        "GCS 15. Reflexes 3+ at the knees with 2 beats of ankle clonus. Visual fields full. Fundi normal. No focal deficit.",
    },
    {
      id: "repeat-bp",
      label: "Repeat blood pressure",
      result: "Seated, with a large cuff, after 15 minutes of rest: 152/98 mmHg.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Single live fetus in cephalic presentation. Fetal heart rate 148/minute. Biometry estimates about 30 to 31 weeks. Posterior fundal placenta with no collection seen behind it. No free fluid in the right upper quadrant. Gallbladder without stones or wall thickening.",
    },
    {
      id: "urine",
      label: "Urine",
      result: "Dipstick protein 2+, nitrites negative. Urine protein to creatinine ratio 88 mg/mmol.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 106 g/L. White cells 11.2 x 10^9/L. Platelets 84 x 10^9/L. Smear shows schistocytes. AST 262 U/L. ALT 214 U/L. LDH 820 U/L. Bilirubin 31 µmol/L. Haptoglobin under 0.1 g/L. Creatinine 82 µmol/L. Uric acid 430 µmol/L. Glucose 5.2 mmol/L. INR 1.0. Fibrinogen 3.6 g/L. Lipase 30 U/L.",
    },
    {
      id: "ctg",
      label: "Fetal heart tracing",
      result: "Baseline 145/minute, moderate variability, accelerations present, no decelerations. Occasional mild tightenings.",
    },
    {
      id: "repeat-labs",
      label: "Repeat blood work at 4 hours",
      result: "Platelets 61 x 10^9/L. AST 340 U/L. ALT 288 U/L. LDH 960 U/L. Creatinine 90 µmol/L.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "On arrival",
      text: "She is lying on her side holding a basin. Each time you speak to her, her husband answers for her.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "How will you take her history, and what do you want to know?",
      seconds: 100,
      modelAnswer: [
        "Use a professional interpreter and speak to her directly. Family members should not interpret clinical history.",
        "Pain, vomiting, headache, visual change, shortness of breath, fetal movement, bleeding, fluid loss and contractions.",
        "Dates. Last period, any ultrasound, and any earlier blood pressure reading to judge the change from baseline.",
        "Risk factors. Hypertension in her last pregnancy, chronic hypertension, kidney disease, diabetes, lupus. ASA use.",
        "Medications taken, including analgesics and antacids.",
        "Ask privately, through the interpreter, whether she feels safe.",
      ],
      rubric: ["pe-h1", "pe-h2", "pe-h3", "pe-h4"],
      choices: [
        {
          id: "c-interpreter",
          label:
            "I called the video Arabic interpreter and spoke to her directly. I asked about the pain, headache, vision, fetal movement, bleeding and contractions, her dates, high blood pressure in earlier pregnancies and her medical history. I also asked her privately whether she feels safe.",
          next: "q-exam",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. A professional interpreter makes fewer errors that matter clinically than a family member. Her headache and the high pressure in her last pregnancy only come out when she can speak for herself.",
        },
        {
          id: "c-husband",
          label: "I let her husband interpret because he was right there and it was faster.",
          next: "s-husband",
          quality: "partial",
          feedback:
            "It feels faster, but family interpreters leave out and change clinical details. You also lose the chance to ask her privately about her safety. Use a professional interpreter whenever one is available, and here one is 5 minutes away.",
        },
        {
          id: "c-english",
          label: "I spoke slowly in English and used gestures, since she understood some words.",
          next: "s-english",
          quality: "partial",
          feedback:
            "A patient with limited English often nods without understanding. You missed her headache and her history of hypertension in pregnancy. A professional interpreter is the standard for any history that drives decisions.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-husband",
      phase: "Ten minutes later",
      text: "Through her husband you learn only that she has stomach pain. When the video interpreter joins, she adds that she has had a headache since this morning and that her last pregnancy ended early because of high pressure.",
      next: "q-exam",
    },
    {
      kind: "say",
      id: "s-english",
      phase: "Ten minutes later",
      text: "She nods to most of your questions. The nurse connects the video interpreter. She then tells you about a headache since this morning and the high pressure in her last pregnancy.",
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination",
      prompt: "What do you examine, and which bedside tests do you do?",
      seconds: 75,
      modelAnswer: [
        "Repeat the blood pressure seated with the right cuff size after rest.",
        "Reflexes and clonus. Fundi and visual fields. Edema. Chest for crackles.",
        "Right upper quadrant and epigastrium. Uterine tone and tenderness. Fundal height.",
        "Bedside ultrasound for fetal heart, presentation, biometry to estimate gestation, and the placenta.",
        "Urine for protein, then a protein to creatinine ratio. Start fetal heart monitoring.",
      ],
      rubric: ["pe-p1", "pe-p2"],
      next: "s-findings",
    },
    {
      kind: "say",
      id: "s-findings",
      phase: "Your findings",
      text: "Her repeat pressure is 152/98 mmHg. She has right upper quadrant tenderness, puffy face and hands, and 3+ reflexes with 2 beats of clonus. Ultrasound shows a live fetus of about 30 to 31 weeks with a heart rate of 148/minute. The urine dipstick shows 2+ protein.",
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Differential diagnosis",
      prompt: "What is your leading diagnosis, what else is on your list, and what do you send?",
      seconds: 70,
      modelAnswer: [
        "Pre-eclampsia with HELLP until proven otherwise. Upper abdominal pain and vomiting after 20 weeks are warning symptoms.",
        "Her pressure is not yet severe, but symptoms and organ damage matter more than the number.",
        "Others. Biliary disease, pancreatitis, hepatitis, acute fatty liver of pregnancy, pyelonephritis, gastritis.",
        "CBC and smear, AST, ALT, LDH, bilirubin, haptoglobin, creatinine, uric acid, glucose, INR, fibrinogen, lipase, urine protein to creatinine ratio. Group and screen.",
      ],
      rubric: ["pe-p3"],
      choices: [
        {
          id: "c-hellp",
          label:
            "I put pre-eclampsia with possible HELLP first and sent a CBC with smear, liver enzymes, LDH, bilirubin, haptoglobin, creatinine, INR, fibrinogen, glucose and a urine protein ratio. Biliary disease, pancreatitis, hepatitis and acute fatty liver are on my list.",
          next: "s-labs",
          quality: "strong",
          feedback:
            "Correct. Epigastric or right upper quadrant pain with vomiting after 20 weeks is HELLP until the blood work says otherwise. A pressure below 160/110 mmHg does not make it mild when symptoms and signs of organ damage are present.",
        },
        {
          id: "c-biliary",
          label: "I thought this was gastritis or biliary colic, with a pressure raised by pain. I gave an antacid and ordered a gallbladder ultrasound before blood work.",
          next: "s-biliary",
          quality: "partial",
          feedback:
            "Biliary disease belongs on the list, but it should not come first. New hypertension, proteinuria and brisk reflexes after 20 weeks point to pre-eclampsia. Calling the pain gastritis is a classic way HELLP is missed.",
        },
        {
          id: "c-discharge",
          label: "I gave morphine and ondansetron and planned discharge with a formal ultrasound tomorrow, since her pressure was under 160/110.",
          next: "s-discharge",
          quality: "unsafe",
          feedback:
            "This is dangerous. She has new hypertension, proteinuria, brisk reflexes and right upper quadrant pain. HELLP can progress to liver rupture, eclampsia or abruption within hours. She needs blood work now and obstetrics involved, not discharge.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-biliary",
      phase: "Forty minutes later",
      text: "The ultrasound shows a normal gallbladder. The nurse rechecks her pressure at 158/104 mmHg and asks whether you want blood work. You send the full panel.",
      next: "s-labs",
    },
    {
      kind: "say",
      id: "s-discharge",
      phase: "At discharge",
      text: "As she gets dressed, the nurse finds her pressure at 166/110 mmHg and she says her headache is worse. The nurse asks you to come back. You cancel the discharge and send the full panel.",
      next: "s-labs",
    },
    {
      kind: "say",
      id: "s-labs",
      phase: "Results",
      text: "Hemoglobin 106 g/L, platelets 84 x 10^9/L, schistocytes on the smear, AST 262 U/L, ALT 214 U/L, LDH 820 U/L, bilirubin 31 µmol/L, haptoglobin under 0.1 g/L, creatinine 82 µmol/L, glucose 5.2 mmol/L, INR 1.0, fibrinogen 3.6 g/L. Urine protein to creatinine ratio 88 mg/mmol.",
      next: "q-labs",
    },
    {
      kind: "question",
      id: "q-labs",
      phase: "Interpretation",
      prompt: "Interpret these results. What is your diagnosis?",
      seconds: 70,
      modelAnswer: [
        "Pre-eclampsia. New hypertension after 20 weeks with a protein to creatinine ratio of 88 mg/mmol, above 30 mg/mmol.",
        "HELLP syndrome. Hemolysis with schistocytes, high LDH and bilirubin and an undetectable haptoglobin. AST 262 U/L. Platelets 84 x 10^9/L, below 100.",
        "These are severe features. Her headache and right upper quadrant pain add to that.",
        "Acute fatty liver is less likely. Glucose, INR and fibrinogen are normal.",
        "Normal lipase makes pancreatitis unlikely.",
      ],
      rubric: ["pe-p4"],
      next: "s-severe",
    },
    {
      kind: "say",
      id: "s-severe",
      phase: "The nurse calls you",
      text: "Her pressure is now 164/110 mmHg, and 15 minutes later it is 166/112 mmHg. She rates her headache 8 out of 10. The fetal heart rate is 150/minute.",
      next: "q-treat",
    },
    {
      kind: "question",
      id: "q-treat",
      phase: "Treatment",
      prompt: "What do you do now? Give me drugs and doses.",
      seconds: 90,
      modelAnswer: [
        "Treat severe hypertension within 30 to 60 minutes of confirmation.",
        "Labetalol 20 mg IV, then 40 mg and 80 mg at 10 minute intervals while the pressure stays severe. Nifedipine immediate release 10 mg PO is an alternative.",
        "Magnesium sulfate 4 g IV over 20 minutes, then 1 g/hour. Monitor reflexes, breathing, urine output and saturation. Calcium gluconate at the bedside.",
        "Continuous fetal monitoring. Left lateral position. IV access, group and screen.",
        "Call obstetrics and anesthesia to come now, and let the neonatal team know.",
      ],
      rubric: ["pe-m1", "pe-m2", "pe-pr1"],
      choices: [
        {
          id: "c-both",
          label:
            "I gave labetalol 20 mg IV with 40 mg and then 80 mg ready at 10 minute intervals, started magnesium sulfate 4 g IV over 20 minutes then 1 g/hour, put her on continuous fetal monitoring and called obstetrics and anesthesia to come now.",
          next: "q-fetal",
          quality: "strong",
          feedback:
            "Good. Severe hypertension needs treatment within 30 to 60 minutes to reduce the risk of maternal stroke. Magnesium prevents eclampsia in pre-eclampsia with severe features, and HELLP needs the obstetric team at the bedside.",
        },
        {
          id: "c-no-mag",
          label: "I gave labetalol 20 mg IV and called obstetrics, but held magnesium until the obstetrician saw her.",
          next: "s-no-mag",
          quality: "partial",
          feedback:
            "The pressure treatment is right. But she has HELLP, a severe headache and clonus, so she is at high risk of a seizure. Magnesium sulfate 4 g IV then 1 g/hour should start now, not after a consultation.",
        },
        {
          id: "c-no-bp",
          label: "I started magnesium but held antihypertensives so I would not reduce blood flow to the placenta.",
          next: "s-no-bp",
          quality: "unsafe",
          feedback:
            "Untreated pressure at or above 160/110 mmHg risks stroke, which is a leading cause of maternal death in pre-eclampsia. Magnesium is not an antihypertensive. Lower the pressure with labetalol, nifedipine or hydralazine and watch the fetal heart.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-mag",
      phase: "The obstetrician arrives",
      text: "The obstetrician asks why magnesium has not started and orders magnesium sulfate 4 g IV over 20 minutes, then 1 g/hour. The nurse starts it.",
      next: "q-fetal",
    },
    {
      kind: "say",
      id: "s-no-bp",
      phase: "Twenty minutes later",
      text: "Her pressure is 172/114 mmHg and she says the lights look sparkly. The nurse asks for an antihypertensive order. You give labetalol 20 mg IV and call obstetrics to come now.",
      next: "q-fetal",
    },
    {
      kind: "question",
      id: "q-fetal",
      phase: "The baby",
      prompt: "Obstetrics is with you. What needs to happen for the baby, and how does the uncertain dating change your plan?",
      seconds: 75,
      modelAnswer: [
        "Treat the fetus as viable and preterm. Ultrasound in the third trimester estimates gestation only within a few weeks.",
        "Betamethasone 12 mg IM now, repeated in 24 hours, since birth is likely within 7 days and she is under 34 weeks and 6 days.",
        "The magnesium she is already receiving also protects the fetal brain when birth is planned at 33 weeks and 6 days or less.",
        "Continuous fetal heart monitoring. Neonatal team informed.",
        "HELLP is treated by birth once the mother is stable. Steroids must not delay birth if she or the baby worsens.",
      ],
      rubric: ["pe-m3", "pe-m4"],
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-refractory",
      phase: "Ninety minutes later",
      text: "She is waiting for a birthing unit bed. Her pressure is 162/108 mmHg after labetalol 20, 40 and 80 mg IV. Repeat platelets are 61 x 10^9/L and AST is 340 U/L. The resident suggests ketorolac for her pain.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Getting worse",
      prompt: "What do you do now?",
      seconds: 85,
      modelAnswer: [
        "Change agents. Nifedipine immediate release 10 mg PO, or hydralazine 5 mg IV, and recheck every 15 minutes.",
        "Bring the pressure below 160/110 mmHg without a sudden drop, and watch the fetal heart as it falls.",
        "No ketorolac or other NSAIDs. Her platelets are falling and her kidneys are at risk. Use acetaminophen and an opioid if needed.",
        "Continue magnesium. Check reflexes, breathing and urine output.",
        "Tell obstetrics and anesthesia the platelets have dropped from 84 to 61. This affects the choice of anesthesia and the timing of birth.",
        "Move her to the birthing unit or an obstetric high acuity bed now.",
      ],
      rubric: ["pe-m5", "pe-m6", "pe-pr2"],
      choices: [
        {
          id: "c-switch",
          label:
            "I gave nifedipine immediate release 10 mg PO and rechecked every 15 minutes, refused the ketorolac, continued magnesium, and called obstetrics and anesthesia about the platelet fall so she could move to the birthing unit now.",
          next: "q-talk",
          quality: "strong",
          feedback:
            "Correct. When labetalol 20, 40 and 80 mg has not worked, the next step is a different agent such as nifedipine or hydralazine. NSAIDs are avoided with falling platelets and kidney injury. A fast fall in platelets is a reason to move toward birth.",
        },
        {
          id: "c-more-labetalol",
          label: "I kept giving labetalol 80 mg IV every 10 minutes until her pressure came down.",
          next: "s-more-labetalol",
          quality: "partial",
          feedback:
            "Repeating labetalol after 20, 40 and 80 mg has failed is not the recommended path. Switch to nifedipine or hydralazine instead. Bradycardia and hypotension become more likely as the total labetalol dose rises.",
        },
        {
          id: "c-big-hydralazine",
          label: "I gave hydralazine 20 mg IV push to bring her pressure down fast, and ketorolac 15 mg IV for the pain.",
          next: "s-big-hydralazine",
          quality: "unsafe",
          feedback:
            "A 20 mg bolus can drop her pressure abruptly and cut placental flow, causing fetal distress. Hydralazine starts at 5 mg IV. Ketorolac adds bleeding and kidney risk with platelets of 61 x 10^9/L.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-more-labetalol",
      phase: "Twenty minutes later",
      text: "Her pulse is 58/minute and her pressure is still 158/106 mmHg. The obstetrician suggests nifedipine 10 mg PO. You give it, and her pressure settles to 146/94 mmHg.",
      next: "q-talk",
    },
    {
      kind: "say",
      id: "s-big-hydralazine",
      phase: "Fifteen minutes later",
      text: "Her pressure falls to 98/52 mmHg and the fetal heart rate drops to 100/minute. The obstetrician gives a fluid bolus and turns her onto her left side. The fetal heart rate recovers after 6 minutes. The ketorolac is cancelled.",
      next: "q-talk",
    },
    {
      kind: "question",
      id: "q-talk",
      phase: "Talking with her",
      prompt:
        "Obstetrics plans a caesarean birth today. Through the interpreter she asks whether her baby will die and who will look after her children at the shelter. Her husband says she cannot have surgery without his permission. What do you do?",
      seconds: 80,
      modelAnswer: [
        "Keep the professional interpreter. Speak to her directly, in plain words.",
        "Explain that her blood pressure condition is affecting her liver and blood, and the treatment is to deliver the baby soon.",
        "Most babies born at about 30 weeks survive with neonatal care, and the steroid injection helps their lungs.",
        "The decision is hers as a capable adult. Include her husband as much as she wishes.",
        "Ask social work to help with care for the children and with health coverage questions.",
        "Check her understanding by asking her to explain the plan back.",
      ],
      rubric: ["pe-pr3", "pe-pr4"],
      choices: [
        {
          id: "c-direct",
          label:
            "With the interpreter, I explained HELLP and the need for birth soon in plain words, said most babies born near 30 weeks do well in the NICU, told them the decision is hers and that her husband can be part of it as she wishes, asked social work to help with the children, and checked her understanding.",
          next: "end",
          quality: "strong",
          feedback:
            "Good. A capable adult gives her own consent, and her husband can support her but cannot decide for her. Practical help with her children removes a real barrier to care. Asking her to explain the plan back confirms she understood.",
        },
        {
          id: "c-husband-decides",
          label: "I explained the plan to her husband and asked him to give permission for the surgery.",
          next: "s-husband-decides",
          quality: "partial",
          feedback:
            "Consent belongs to the patient when she is capable. Going through her husband also repeats the interpreting problem. Speak to her directly with the interpreter and let her decide who else is involved.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-husband-decides",
      phase: "The obstetrician speaks with you",
      text: "The obstetrician reminds you that consent must come from the patient. You go back with the interpreter and speak with her directly. She agrees to the caesarean and asks her husband to stay with her.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She has a caesarean birth under general anesthesia that evening. Her son weighs 1.4 kg and goes to the NICU. Her platelets recover over 3 days. Social work arranges care for her children and a family physician. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pe-h1",
      competency: "communication",
      criterion: "history",
      text: "Uses a professional interpreter and takes the history from the patient herself, not through her husband.",
      points: 2,
      teaching: "Ad hoc interpreters such as family members make more errors of clinical consequence than professional interpreters. Key history is often lost.",
      source: "flores",
    },
    {
      id: "pe-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about headache, visual change, epigastric or right upper quadrant pain, vomiting, fetal movement, bleeding and contractions.",
      points: 2,
      teaching: "Headache, visual symptoms and upper abdominal pain with nausea or vomiting are adverse conditions that mark pre-eclampsia as severe.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about dates, any earlier blood pressure reading and hypertension in a previous pregnancy.",
      points: 2,
      teaching: "The change from an early pregnancy baseline helps judge new hypertension. Pre-eclampsia in an earlier pregnancy is a strong risk factor.",
      source: "sogc-hdp",
    },
    {
      id: "pe-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about chronic hypertension, kidney disease, diabetes, autoimmune disease and medications, including ASA.",
      points: 1,
      teaching: "Chronic hypertension, kidney disease, diabetes and autoimmune disease all raise the risk of pre-eclampsia. ASA in pregnancy is used to prevent it in women at high risk.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Repeats the blood pressure correctly and examines reflexes, clonus, the right upper quadrant and the uterus.",
      points: 2,
      teaching: "Blood pressure in pregnancy is measured seated with the right cuff size and repeated. Clonus and right upper quadrant tenderness are signs of severe disease.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Uses bedside ultrasound to confirm a live fetus and estimate gestation, and starts fetal heart monitoring.",
      points: 2,
      teaching: "Fetal assessment is part of the workup of every hypertensive pregnancy. Gestational age drives the steroid and delivery plan.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Puts pre-eclampsia with HELLP first for right upper quadrant pain and vomiting after 20 weeks, ahead of biliary or gastric causes.",
      points: 2,
      critical: true,
      teaching: "HELLP often presents with nausea, vomiting and upper abdominal pain, and the pressure may be only mildly raised. Treating it as gastritis delays life saving care.",
      source: "sogc-hdp",
    },
    {
      id: "pe-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets the results as pre-eclampsia with HELLP and explains why acute fatty liver of pregnancy is less likely.",
      points: 2,
      teaching: "HELLP means hemolysis, raised liver enzymes and platelets below 100 x 10^9/L. Low glucose, a high INR and low fibrinogen would point more to acute fatty liver.",
      source: "sogc-hdp",
    },
    {
      id: "pe-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats severe hypertension within 30 to 60 minutes with labetalol 20 mg IV, escalating to 40 and 80 mg at 10 minute intervals, or nifedipine immediate release 10 mg PO.",
      points: 3,
      critical: true,
      teaching: "Acute severe hypertension in pregnancy needs first line treatment within 30 to 60 minutes of confirmation to reduce the risk of stroke.",
      source: "acog-767",
    },
    {
      id: "pe-m2",
      competency: "management",
      criterion: "management",
      text: "Starts magnesium sulfate 4 g IV over 20 minutes, then 1 g/hour, with monitoring of reflexes, breathing and urine output.",
      points: 2,
      critical: true,
      teaching: "Magnesium sulfate is the drug of choice to prevent eclampsia in pre-eclampsia with severe features. Toxicity shows first as lost reflexes, then slow breathing.",
      source: "sogc-hdp",
    },
    {
      id: "pe-m3",
      competency: "management",
      criterion: "management",
      text: "Gives betamethasone 12 mg IM, repeated in 24 hours, without letting it delay a needed birth.",
      points: 2,
      teaching: "Antenatal corticosteroids given within 7 days of birth reduce neonatal morbidity and death from 24 weeks to 34 weeks and 6 days.",
      source: "sogc-steroids",
    },
    {
      id: "pe-m4",
      competency: "management",
      criterion: "management",
      text: "Notes that magnesium also gives fetal neuroprotection when birth is planned at 33 weeks and 6 days or less.",
      points: 1,
      teaching: "SOGC recommends magnesium sulfate for fetal neuroprotection at 33 weeks and 6 days or less when preterm birth is imminent or planned.",
      source: "sogc-mag",
    },
    {
      id: "pe-m5",
      competency: "management",
      criterion: "management",
      text: "Switches to nifedipine 10 mg PO or hydralazine 5 mg IV when the pressure stays severe after labetalol 20, 40 and 80 mg.",
      points: 2,
      teaching: "When a first line drug fails at full doses, change to another first line agent and get specialist help rather than repeating the same drug.",
      source: "acog-767",
    },
    {
      id: "pe-m6",
      competency: "management",
      criterion: "management",
      text: "Avoids NSAIDs and tells obstetrics and anesthesia that platelets have fallen from 84 to 61 x 10^9/L.",
      points: 1,
      teaching: "NSAIDs add bleeding and kidney risk in HELLP. A rapid fall in platelets is a reason to move toward birth and affects the anesthesia plan.",
      source: "sogc-hdp",
    },
    {
      id: "pe-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Calls obstetrics and anesthesia to the bedside early, informs the neonatal team and arranges care in the birthing unit.",
      points: 2,
      teaching: "HELLP needs a coordinated team and monitoring of mother and fetus in an obstetric unit. The definitive treatment is birth once the mother is stable.",
      source: "sogc-hdp",
    },
    {
      id: "pe-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Rechecks the pressure every 15 minutes during treatment and repeats platelets and liver enzymes within hours.",
      points: 1,
      teaching: "HELLP can worsen over hours. Repeat blood work shows the trend that guides the timing of birth.",
      source: "sogc-hdp",
    },
    {
      id: "pe-pr3",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis and plan directly to the patient through the interpreter and checks her understanding.",
      points: 2,
      teaching: "Using a professional interpreter for explanations and consent avoids the errors that ad hoc interpreters introduce.",
      source: "flores",
    },
    {
      id: "pe-pr4",
      competency: "professionalism",
      criterion: "process",
      text: "Obtains consent from the patient herself, involves her husband only as she wishes, and asks social work to help with her children.",
      points: 2,
      teaching: "A capable adult gives her own consent to treatment. Information must be understood by the patient, which may need extra steps when there is a language barrier.",
      source: "cmpa-consent",
    },
  ],
  sources: [
    {
      id: "sogc-hdp",
      citation:
        "Magee LA, Smith GN, Bloch C, and colleagues. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 426: Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022.",
      url: "https://pubmed.ncbi.nlm.nih.gov/35577426/",
    },
    {
      id: "acog-767",
      citation:
        "American College of Obstetricians and Gynecologists. Committee Opinion No. 767: Emergent therapy for acute onset, severe hypertension during pregnancy and the postpartum period. Obstet Gynecol. 2019.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30575639/",
    },
    {
      id: "sogc-steroids",
      citation:
        "Skoll A, Boutin A, Bujold E, and colleagues. Society of Obstetricians and Gynaecologists of Canada. No. 364: Antenatal corticosteroid therapy for improving neonatal outcomes. J Obstet Gynaecol Can. 2018.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30268316/",
    },
    {
      id: "sogc-mag",
      citation:
        "Magee LA, De Silva DA, Sawchuck D, Synnes A, von Dadelszen P. Society of Obstetricians and Gynaecologists of Canada. No. 376: Magnesium sulphate for fetal neuroprotection. J Obstet Gynaecol Can. 2019.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30879485/",
    },
    {
      id: "flores",
      citation:
        "Flores G, Abreu M, Barone CP, Bachur R, Lin H. Errors of medical interpretation and their potential clinical consequences. A comparison of professional versus ad hoc versus no interpreters. Ann Emerg Med. 2012.",
      url: "https://pubmed.ncbi.nlm.nih.gov/22424655/",
    },
    {
      id: "cmpa-consent",
      citation: "Canadian Medical Protective Association. Consent. A guide for Canadian physicians. Fourth edition. 2024.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
