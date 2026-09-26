// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const eatingDisorderInstability: OralCase = {
  id: "eating-disorder-instability",
  title: "Fainting at the campus gym",
  blueprint: "psych",
  alsoCovers: ["ethics", "comm"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 1 },
    { topic: "arrhythmia", n: 2 },
    { topic: "arrhythmia", n: 5 },
    { topic: "delirium-agitation", n: 5 },
    { topic: "suicide-risk", n: 1 },
  ],
  summary: "A 19 year old university student is brought in by her roommate after fainting on a treadmill.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre in a university city in Ontario when the following patient arrives. " +
    "It has an adult eating disorders program and is a Schedule 1 psychiatric facility. " +
    "A 19 year old woman arrives by ambulance after she fainted on a treadmill at the campus gym.",
  card: {
    vitals: {
      temperature: "35.3°C oral",
      pulse: "42/minute lying",
      resp: "14/minute",
      bp: "84/52 mmHg lying",
      o2sat: "99% on room air",
      weight: "41.2 kg (91 lb)",
    },
    medications: "Not recorded",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "triage",
      label: "Triage",
      result:
        "She fainted on a treadmill at the campus gym. Her roommate came with her. Capillary glucose 3.0 mmol/L. Height 168 cm and weight 41.2 kg, giving a BMI of 14.6. CTAS 2. The nurse says: 'She is very thin and cold. She wants to leave and says she just skipped lunch.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "An academic hospital. There is internal medicine, an adult eating disorders program, psychiatry, a dietitian on call and an ICU. The hospital is a Schedule 1 psychiatric facility.",
    },
    {
      id: "orthostatics",
      label: "Orthostatic vitals",
      result: "Lying: heart rate 42, blood pressure 84/52. Standing at 2 minutes: heart rate 90, blood pressure 70/44. She is dizzy and has to sit down.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Cachectic. Fine lanugo hair on her back and arms. Cold, blue hands and feet. Swollen parotid glands. Calluses on the backs of two knuckles. " +
        "Dry mucous membranes. Soft systolic murmur. No edema. No injuries from the fall.",
    },
    {
      id: "history",
      label: "Eating and weight history",
      result:
        "She eats about 600 kcal a day and runs 15 km daily. She makes herself vomit 2 to 3 times a day and takes bisacodyl most days. " +
        "She has lost 17 kg over 10 months. No period for 8 months. She says she is 'still too big around the middle'.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus bradycardia at 40. QTc 502 ms. Prominent U waves. Low voltage. No ectopy on the rhythm strip.",
    },
    {
      id: "chem",
      label: "Electrolytes and chemistry",
      result:
        "Sodium 131 mmol/L. Potassium 2.6 mmol/L. Chloride 86 mmol/L. Bicarbonate 34 mmol/L. Urea 9.8 mmol/L. Creatinine 98 µmol/L. " +
        "Glucose 3.0 mmol/L. Phosphate 0.78 mmol/L. Magnesium 0.64 mmol/L. Corrected calcium 2.30 mmol/L.",
    },
    {
      id: "other-labs",
      label: "CBC, liver and thyroid",
      result:
        "WBC 2.8 x 10^9/L. Hemoglobin 108 g/L. Platelets 132 x 10^9/L. AST 142 U/L. ALT 188 U/L. Albumin 38 g/L. TSH 1.2 mIU/L with low free T3. Beta hCG negative. CK 420 U/L.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result: "Small left ventricle with normal function. Small pericardial effusion without tamponade. IVC 0.9 cm and collapsing.",
    },
    {
      id: "mental",
      label: "Mental health screen",
      result:
        "Low mood for months. Thoughts that she would be 'better off not waking up' but no plan or intent. No self harm. No substance use. " +
        "No previous treatment. Her mother lives in Vancouver.",
    },
    {
      id: "roommate",
      label: "Collateral from her roommate",
      result: "She has fainted twice this month. She hides food and goes to the bathroom after every meal. She gets up at 5 am to run even in winter.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute area",
      text: "She is wrapped in two blankets. She says she is fine and needs to get back for a lab at 3 pm. Her roommate is worried and keeps apologizing for calling the ambulance.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial management",
      prompt: "What is your first impression and what do you do in the first thirty minutes?",
      seconds: 90,
      modelAnswer: [
        "Severe restrictive eating disorder with purging and medical instability.",
        "Cardiac monitor. She has bradycardia, hypotension, hypothermia, hypoglycemia, hypokalemia and a long QT.",
        "Treat the glucose of 3.0 with oral glucose if she will take it, then a meal or snack. Use a dextrose 10 percent infusion if she cannot.",
        "Passive rewarming with warm blankets.",
        "Cautious fluid. Small isotonic boluses of about 250 to 500 mL with reassessment. Atrophic hearts do not tolerate large volumes.",
        "IV and oral potassium with magnesium.",
      ],
      rubric: ["ed-a1", "ed-r1"],
      choices: [
        {
          id: "c-careful",
          label: "I put her on a monitor, gave oral glucose then a snack, warmed her, gave a 250 mL saline bolus and reassessed, and started potassium and magnesium replacement.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Good. She has several markers of high medical risk. Careful, small volume fluids and early electrolyte replacement are the right approach. " +
            "Treating the low glucose with food starts nutrition at the same time.",
        },
        {
          id: "c-d50",
          label: "I gave 50 mL of D50W and rechecked her glucose in an hour.",
          next: "s-d50",
          quality: "partial",
          feedback:
            "A concentrated dextrose bolus can cause a spike, a surge of insulin and rebound low glucose in a starved patient. It also drives phosphate and potassium into cells. " +
            "The examiner wanted oral glucose and food, or a dextrose 10 percent infusion, with close glucose checks.",
        },
        {
          id: "c-big-fluids",
          label: "I gave 2 L of normal saline wide open for her low blood pressure.",
          next: "s-big-fluids",
          quality: "unsafe",
          feedback:
            "Her heart is small and weak from starvation. Large fast fluid loads can cause heart failure. " +
            "The examiner wanted small boluses of about 250 to 500 mL with reassessment.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-d50",
      phase: "One hour later",
      text: "Her glucose was 11.2 after the bolus. It is now 2.6 mmol/L and she is sweaty and vague. You start oral carbohydrate and a dextrose 10 percent infusion with glucose checks every hour.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-big-fluids",
      phase: "Ninety minutes later",
      text: "She is short of breath. Her SpO2 is 92 percent and you hear crackles at both bases. Her feet are puffy. You stop the fluid and sit her up.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History and differential",
      prompt: "What else do you want to know from her, and what else could explain her weight loss?",
      seconds: 60,
      modelAnswer: [
        "Intake, exercise, vomiting, laxatives, diuretics, diet pills and insulin misuse.",
        "Weight trajectory and menstrual history.",
        "Mood and suicide risk. Mortality in anorexia nervosa is high and suicide contributes.",
        "Differential: hyperthyroidism, type 1 diabetes, celiac disease, inflammatory bowel disease, adrenal insufficiency, malignancy.",
        "Pregnancy test.",
        "The faint: exertion, prodrome, palpitations, chest pain and previous episodes.",
        "Medications, supplements, alcohol and drugs.",
      ],
      rubric: ["ed-a2", "ed-a3", "ed-h1", "ed-h2", "ed-h3"],
      next: "q-lytes",
    },
    {
      kind: "question",
      id: "q-lytes",
      phase: "Electrolytes and the ECG",
      prompt: "Her potassium is 2.6 mmol/L, magnesium 0.64 and QTc 502 ms. How do you manage this?",
      seconds: 75,
      modelAnswer: [
        "Continuous cardiac monitoring.",
        "Replace magnesium, for example magnesium sulfate 2 g IV over 1 to 2 hours.",
        "Potassium chloride IV at 10 mmol/h peripherally plus oral potassium. Recheck every 2 to 4 hours.",
        "Metabolic alkalosis from vomiting keeps potassium low until volume and chloride are replaced.",
        "Avoid QT prolonging drugs such as ondansetron and antipsychotics.",
      ],
      rubric: ["ed-m1"],
      next: "q-refeed",
    },
    {
      kind: "question",
      id: "q-refeed",
      phase: "Nutrition",
      prompt: "The medicine resident asks what you want done about feeding tonight. What do you tell her?",
      seconds: 75,
      modelAnswer: [
        "She is at high risk of refeeding syndrome: very low BMI, minimal intake and low potassium, magnesium and phosphate.",
        "Start feeding today. Do not keep her fasting.",
        "Thiamine 100 mg before feeding and daily after.",
        "Start with a dietitian led plan. For high risk patients ASPEN suggests about 10 to 20 kcal/kg per day at first, advancing over days. Eating disorder units often start higher with close monitoring.",
        "Check phosphate, potassium, magnesium and glucose every 12 hours for the first 3 days, then at least daily for the first week. Replace them.",
      ],
      rubric: ["ed-m2", "ed-m3"],
      choices: [
        {
          id: "c-feed",
          label: "I asked for feeding to start today with the dietitian, gave thiamine 100 mg first, and ordered phosphate, potassium, magnesium and glucose checks every 12 hours at first with replacement.",
          next: "s-leave",
          quality: "strong",
          feedback:
            "Correct. Early nutrition with close electrolyte monitoring is safe and needed. " +
            "Refeeding syndrome is prevented by monitoring and replacement, not by delaying food.",
        },
        {
          id: "c-npo",
          label: "I kept her fasting until her electrolytes were normal.",
          next: "s-npo",
          quality: "partial",
          feedback:
            "Fasting her longer worsens hypoglycemia and starvation. Electrolytes can be corrected while feeding starts. " +
            "The examiner wanted feeding today with thiamine and close monitoring.",
        },
        {
          id: "c-full",
          label: "I ordered a full regular diet plus supplements to reach 3000 kcal a day right away, with blood work in a week.",
          next: "s-full",
          quality: "unsafe",
          feedback:
            "A rapid high calorie start with no monitoring is how refeeding syndrome happens. Phosphate can crash within 2 to 4 days. " +
            "The examiner wanted a planned start with electrolytes every 12 hours for the first 3 days, then daily.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-npo",
      phase: "Overnight",
      text: "At 02:00 her glucose is 2.4 mmol/L. The nurse calls you. You start a dextrose infusion and ask the dietitian to begin a meal plan in the morning.",
      next: "s-leave",
    },
    {
      kind: "say",
      id: "s-full",
      phase: "Three days later",
      text:
        "The internist calls you. Her phosphate is 0.31 mmol/L, she is confused and has new ankle edema. She is being moved to the ICU.",
      next: "s-leave",
    },
    {
      kind: "say",
      id: "s-leave",
      phase: "She wants to leave",
      text:
        "She pulls off her monitor leads and says: 'I am an adult. I will eat more at home. You cannot keep me here.' Her mother is on the roommate's phone from Vancouver, demanding that you keep her in hospital.",
      next: "q-capacity",
    },
    {
      kind: "question",
      id: "q-capacity",
      phase: "Capacity and the law",
      prompt: "How do you handle this?",
      seconds: 90,
      modelAnswer: [
        "Stay calm. Explain her results and the danger in plain words.",
        "Assess her capacity to consent to or refuse admission and refeeding. She understands the facts but may not appreciate that they apply to her.",
        "If she is incapable, her substitute decision maker decides treatment under the Health Care Consent Act. With no guardian, attorney or partner, that is a parent. Tell her of the finding and her right to apply to the Consent and Capacity Board. In a psychiatric facility this means a Form 33 and a rights adviser.",
        "She can be held under a Form 1 Box A. She is showing a lack of competence to care for herself, and her apparent mental disorder will likely cause serious bodily harm or serious physical impairment. Box B does not apply because she has never been treated.",
        "A Form 1 allows detention for psychiatric assessment, not medical treatment. Give her a Form 42.",
        "Respect her privacy. Share with her mother only what she agrees to, or what is needed if her mother is acting as substitute decision maker.",
      ],
      rubric: ["ed-p1", "ed-p2", "ed-d1"],
      choices: [
        {
          id: "c-capacity",
          label: "I assessed her capacity. She could repeat the facts but denied they applied to her, so I found her incapable of this decision. I completed a Form 1, gave her a Form 42, and involved her mother as substitute decision maker for treatment.",
          next: "q-talk",
          quality: "strong",
          feedback:
            "Well done. Appreciation is often what an eating disorder takes away. Her risk of serious physical impairment meets Form 1 criteria. " +
            "Knowing that the Form 1 covers detention while treatment needs a substitute decision maker shows a clear legal understanding.",
        },
        {
          id: "c-ama",
          label: "I let her leave against medical advice because she is 19 and said she would eat.",
          next: "s-ama",
          quality: "unsafe",
          feedback:
            "Being an adult does not make her capable of every decision. Her heart rate, pressure, potassium and QT put her at risk of sudden death. " +
            "The examiner wanted a capacity assessment and use of a Form 1 if criteria are met.",
        },
        {
          id: "c-ng",
          label: "I had security hold her and placed a nasogastric tube to start feeds.",
          next: "s-ng",
          quality: "unsafe",
          feedback:
            "Forced treatment without a capacity finding, a substitute decision maker or a true emergency is not lawful. It also damages trust. " +
            "The examiner wanted a capacity assessment first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ama",
      phase: "Ten minutes later",
      text:
        "Security calls from the ambulance bay. She stood up too quickly and fainted. Her heart rate is 36. She is brought back on a stretcher. You reassess her capacity.",
      next: "q-talk",
    },
    {
      kind: "say",
      id: "s-ng",
      phase: "At the bedside",
      text:
        "She is sobbing and fighting. The charge nurse stops the procedure and asks you what legal authority you are using. You stop, apologize to her, and assess her capacity properly.",
      next: "q-talk",
    },
    {
      kind: "question",
      id: "q-talk",
      phase: "Talking with her",
      prompt: "She is now crying and says: 'Everyone is going to make me fat.' How do you talk with her?",
      seconds: 60,
      modelAnswer: [
        "Calm, warm and non judgmental. Avoid arguing about her body or weight.",
        "Acknowledge her fear and that this is hard.",
        "Focus on what she values, such as running and school, and how her heart threatens those.",
        "Explain the plan and give her choices where possible.",
        "Avoid shaming language and comments about appearance.",
      ],
      rubric: ["ed-c1"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where should she be admitted, and what should the admission orders include?",
      seconds: 75,
      modelAnswer: [
        "Admit to a medical bed with telemetry, not a general psychiatric unit, until medically stable.",
        "Eating disorders team and psychiatry consults.",
        "Daily weights, vitals including orthostatics, and electrolytes.",
        "Supervised meals and bathroom supervision to reduce purging.",
        "Suicide risk addressed. She has passive thoughts.",
        "ICU if arrhythmia, severe electrolyte losses or worsening hemodynamics.",
      ],
      rubric: ["ed-d2", "ed-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is admitted to a medical bed on telemetry with the eating disorders team following. Her mother is flying in tomorrow. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ed-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies high risk markers: heart rate in the low 40s, hypotension, hypothermia, hypoglycemia, orthostatic changes, low potassium and long QT.",
      points: 3,
      critical: true,
      teaching: "Vital signs and electrolytes, not BMI alone, define medical instability. Any one of these warrants admission.",
      source: "sahm",
    },
    {
      id: "ed-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Uses small fluid boluses with reassessment and treats hypoglycemia with oral glucose or dextrose 10 percent.",
      points: 2,
      teaching: "Starved hearts are small and fail with large volumes. Concentrated dextrose boluses cause rebound hypoglycemia.",
      source: "meed",
    },
    {
      id: "ed-a2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about purging, laxatives, exercise and suicidal thoughts.",
      points: 2,
      teaching: "Purging drives the potassium and alkalosis. Suicide is a major cause of death in eating disorders.",
      source: "sahm",
    },
    {
      id: "ed-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers medical causes of weight loss such as hyperthyroidism, diabetes, celiac disease, inflammatory bowel disease and adrenal insufficiency.",
      points: 1,
      teaching: "Most young women with this picture have an eating disorder, but a brief medical screen avoids missing another cause.",
      source: "sahm",
    },
    {
      id: "ed-m1",
      competency: "management",
      criterion: "management",
      text: "Replaces magnesium and potassium carefully on a monitor and avoids QT prolonging drugs.",
      points: 2,
      teaching: "Magnesium must be replaced for potassium to correct. Ondansetron and antipsychotics add to QT risk.",
      source: "meed",
    },
    {
      id: "ed-m2",
      competency: "management",
      criterion: "management",
      text: "Recognizes high refeeding risk and gives thiamine before feeding.",
      points: 2,
      teaching: "Low BMI, minimal intake and low baseline electrolytes all raise refeeding risk.",
      source: "aspen",
    },
    {
      id: "ed-m3",
      competency: "management",
      criterion: "management",
      text: "Starts nutrition the same day with phosphate, potassium, magnesium and glucose checks every 12 hours for 3 days, then daily for the first week.",
      points: 3,
      critical: true,
      teaching: "Refeeding syndrome is prevented by monitoring and replacement. Delaying food causes its own harm.",
      source: "aspen",
    },
    {
      id: "ed-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses capacity specific to admission and refeeding, focusing on appreciation.",
      points: 2,
      teaching: "Patients with eating disorders often understand facts but cannot apply them to themselves. That is a failure of appreciation.",
      source: "hcca",
    },
    {
      id: "ed-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Knows a Form 1 authorizes detention for psychiatric assessment, not medical treatment, and gives a Form 42.",
      points: 2,
      teaching: "Lack of competence to care for herself with likely serious physical impairment meets Form 1 Box A. Medical treatment still needs consent from her or her substitute decision maker.",
      source: "mha",
    },
    {
      id: "ed-d1",
      competency: "disposition",
      criterion: "process",
      text: "Does not allow her to leave while medically unstable and incapable of that decision.",
      points: 3,
      critical: true,
      teaching: "Sudden cardiac death is a real risk with bradycardia, hypokalemia and a long QT. Keeping her safe is the priority.",
      source: "mha",
    },
    {
      id: "ed-c1",
      competency: "communication",
      criterion: "process",
      text: "Speaks without judgment, avoids weight talk, and links treatment to her own goals.",
      points: 1,
      teaching: "Collaborative language improves engagement. Arguing about body image does not.",
      source: "sahm",
    },
    {
      id: "ed-d2",
      competency: "disposition",
      criterion: "process",
      text: "Admits to a monitored medical bed with the eating disorders team, psychiatry, supervised meals and daily labs.",
      points: 2,
      teaching: "Medical stabilization comes before psychiatric admission. Bathroom and meal supervision limit purging.",
      source: "meed",
    },
    {
      id: "ed-l1",
      competency: "leadership",
      criterion: "process",
      text: "Coordinates medicine, the dietitian, psychiatry and the eating disorders program in the admission plan.",
      points: 1,
      teaching: "Eating disorder care fails when teams work in silos. One clear plan prevents gaps.",
      source: "meed",
    },
    {
      id: "ed-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the faint: exertion, prodrome, palpitations, chest pain and previous episodes.",
      points: 2,
      teaching: "Syncope in a patient with an eating disorder is a marker of medical instability. Exertional syncope also needs a cardiac cause ruled out.",
      source: "sahm",
    },
    {
      id: "ed-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about her weight loss over time, her daily intake and her menstrual history.",
      points: 1,
      teaching: "The rate of weight loss and very low intake predict medical risk and refeeding risk better than weight alone.",
      source: "sahm",
    },
    {
      id: "ed-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about medications, supplements, and alcohol or drug use.",
      points: 1,
      teaching: "Diuretics, diet pills, stimulants and substances add to electrolyte and cardiac risk and change the treatment plan.",
      source: "sahm",
    },
  ],
  sources: [
    {
      id: "sahm",
      citation:
        "Society for Adolescent Health and Medicine. Medical management of restrictive eating disorders in adolescents and young adults. Position paper. J Adolesc Health. 2022.",
    },
    {
      id: "meed",
      citation: "Royal College of Psychiatrists. Medical emergencies in eating disorders (MEED): guidance on recognition and management. 2022.",
    },
    {
      id: "aspen",
      citation: "da Silva JSV, et al. ASPEN consensus recommendations for refeeding syndrome. Nutr Clin Pract. 2020.",
    },
    {
      id: "mha",
      citation: "Government of Ontario. Mental Health Act. R.S.O. 1990, c. M.7.",
    },
    {
      id: "hcca",
      citation: "Government of Ontario. Health Care Consent Act, 1996. S.O. 1996, c. 2, Sched. A.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
