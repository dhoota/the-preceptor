// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const postArrestCareAfterRosc: OralCase = {
  id: "post-arrest-care-after-rosc",
  title: "Arrival after a kitchen collapse",
  blueprint: "resus",
  alsoCovers: ["cardio", "ethics"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 8 },
    { topic: "arrhythmia", n: 5 },
    { topic: "ischemic-heart-disease", n: 2 },
    { topic: "airway", n: 5 },
    { topic: "shock", n: 7 },
  ],
  summary: "A 68 year old woman arrives with a pulse after paramedics resuscitated her at home.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "At 07:40 paramedics bring in a 68 year old woman who has a pulse after a cardiac arrest at home. " +
    "You have a 24 hour cath lab, CT and an ICU. The ICU is full and she may board with you for hours.",
  card: {
    vitals: {
      temperature: "35.9°C",
      pulse: "104/minute",
      resp: "Bagged at about 28/minute through a supraglottic airway",
      bp: "82/48 mmHg",
      o2sat: "100% on FiO2 1.0 by bag",
      weight: "About 70 kg (154 lb)",
    },
    medications: "Unknown",
    allergies: "Unknown",
  },
  findings: [
    {
      id: "arrest",
      label: "Arrest details from the paramedics",
      result:
        "She collapsed in her kitchen at 06:50. Her husband started CPR with help from the 911 dispatcher. Paramedics arrived 8 minutes later and found VF. " +
        "She received three shocks, two doses of epinephrine and amiodarone 300 mg. A pulse returned 22 minutes after the collapse. A supraglottic airway was placed. " +
        "On arrival her end tidal CO2 is 26 mmHg, glucose 14.8 mmol/L and GCS 3 with no sedation given. The paramedic says: 'She had a pulse the whole ride. We've been bagging hard to keep her sats up.'",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "GCS 3. Pupils 3 mm and sluggishly reactive. Corneal reflexes present. Occasional brief jerks of the face and shoulders. " +
        "Bibasal crackles. Bruising over the sternum. Abdomen soft. No signs of trauma to the head. No leg swelling.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 104. 1 mm ST depression in V4 to V6. No ST elevation. QRS 96 ms. QTc 486 ms.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Left ventricle globally hypokinetic with an estimated ejection fraction of 35 percent. Right ventricle normal size. No pericardial effusion. " +
        "Lung sliding on both sides with scattered B lines at the bases. IVC 1.6 cm with about 30 percent variation on the ventilator.",
    },
    {
      id: "abg",
      label: "Arterial blood gas after intubation",
      result:
        "On FiO2 1.0: pH 7.22, PaCO2 47 mmHg, PaO2 338 mmHg, bicarbonate 19 mmol/L, lactate 6.2 mmol/L. Potassium 3.2 mmol/L. Glucose 14.6 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 128 g/L. Platelets 190 x 10^9/L. Sodium 139 mmol/L. Magnesium 0.62 mmol/L. Creatinine 96 µmol/L. " +
        "High sensitivity troponin T 94 ng/L. INR 1.1.",
    },
    {
      id: "cxr",
      label: "Chest X ray after intubation",
      result: "Endotracheal tube 3 cm above the carina. Orogastric tube in the stomach. Patchy bibasal opacities. No pneumothorax.",
    },
    {
      id: "ct",
      label: "CT head and CT pulmonary angiogram",
      result:
        "CT head: no hemorrhage, no mass, grey white differentiation preserved, no herniation. " +
        "CT chest: no pulmonary embolism, no aortic dissection. Dependent consolidation in both lower lobes. Anterior rib fractures on the left.",
    },
    {
      id: "husband",
      label: "Collateral from her husband",
      result:
        "She has high blood pressure and type 2 diabetes. She had been short of breath walking the dog for a month. No chest pain he knows of. " +
        "She has no written advance directive. She once said she would want everything done if there was a real chance of getting back to herself.",
    },
    {
      id: "temp-later",
      label: "Temperature three hours later",
      result: "Core temperature 38.3 by bladder probe at 10:45. She is shivering. Heart rate 118.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "She is moved to your stretcher. The paramedic is still bagging at a fast rate. The supraglottic airway has a good capnography waveform. The monitor shows sinus tachycardia at 104 and a pressure of 80/46.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Airway and ventilation",
      prompt: "Tell me how you manage her airway and ventilation over the next fifteen minutes. Give me your targets.",
      seconds: 90,
      modelAnswer: [
        "Slow the rate. Bagging at 28 per minute causes hypocapnia and drops venous return.",
        "The supraglottic airway is working. Plan a controlled exchange to an endotracheal tube.",
        "Use a pressor ready and a reduced dose induction, for example ketamine 0.5 mg/kg or fentanyl in small doses.",
        "Tidal volume 6 to 8 mL/kg of ideal body weight. PEEP 5 to 8.",
        "SpO2 94 to 98 percent. Wean FiO2 from 1.0.",
        "PaCO2 35 to 45 mmHg.",
        "Get the arrest timeline from the paramedics and confirm whether any sedation was given.",
      ],
      rubric: ["pr-r1", "pr-r2", "pr-h1", "pr-h3"],
      choices: [
        {
          id: "c-controlled",
          label: "I slowed the rate, prepared pressor, exchanged to an endotracheal tube with reduced dose ketamine and video laryngoscopy, then set SpO2 94 to 98 and PaCO2 35 to 45.",
          next: "q-hemo",
          quality: "strong",
          feedback:
            "Good. Hyperventilation and hyperoxia are common harms in the first hour after ROSC. A controlled exchange with a lower induction dose avoids re arrest. Clear targets let the respiratory therapist titrate without asking.",
        },
        {
          id: "c-hyper",
          label: "I left her on FiO2 1.0 and kept bagging quickly because her sats were perfect.",
          next: "s-hyper",
          quality: "partial",
          feedback:
            "A saturation of 100 percent on FiO2 1.0 can hide a PaO2 over 300 mmHg. Hyperoxia and hypocapnia after arrest are linked to worse brain outcome. Fast bagging also raises intrathoracic pressure and drops her blood pressure.",
        },
        {
          id: "c-propofol",
          label: "I removed the supraglottic airway and did a standard RSI with propofol 1.5 mg/kg.",
          next: "s-propofol",
          quality: "unsafe",
          feedback:
            "Full dose propofol in a hypotensive patient after arrest will likely cause profound hypotension or re arrest. Use a reduced dose of a stable agent, have pressor running, and consider leaving a working supraglottic airway until you are ready.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-hyper",
      phase: "Ten minutes later",
      text:
        "Her pressure is 72/40. End tidal CO2 has fallen to 22 mmHg. The respiratory therapist suggests slowing to 16 breaths per minute and weaning oxygen. The gas later shows a PaO2 of 338 mmHg. You agree to both.",
      next: "q-hemo",
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "Two minutes later",
      text:
        "The tube is in but her pressure falls to 54/28 and her heart rate slows. You give push dose epinephrine 20 mcg twice and start norepinephrine. Her pressure recovers to 80/46.",
      next: "q-hemo",
    },
    {
      kind: "question",
      id: "q-hemo",
      phase: "Circulation",
      prompt: "She is intubated. Pressure is 82/48. How do you manage her circulation and her metabolic problems?",
      seconds: 90,
      modelAnswer: [
        "MAP target of at least 65 mmHg.",
        "Norepinephrine 0.05 to 0.1 mcg/kg/min titrated. Arterial line.",
        "Small fluid bolus of 250 to 500 mL guided by ultrasound.",
        "Replace potassium to about 4 mmol/L and give magnesium sulfate 2 g IV. Her QTc is long.",
        "Glucose target about 7.8 to 10 mmol/L. Avoid hypoglycemia.",
        "Serial lactate.",
      ],
      rubric: ["pr-r3", "pr-m1"],
      choices: [
        {
          id: "c-map",
          label: "I started norepinephrine to a MAP of at least 65, gave 500 mL of fluid, placed an arterial line and replaced potassium and magnesium.",
          next: "q-cath",
          quality: "strong",
          feedback:
            "Good. Hypotension after arrest is linked to worse survival and brain outcome. Replacing potassium and magnesium lowers the risk of recurrent VF in a patient with a long QTc.",
        },
        {
          id: "c-fluids",
          label: "I gave 3 L of crystalloid to bring up her pressure before starting any pressor.",
          next: "s-fluids",
          quality: "partial",
          feedback:
            "Her ventricle is stunned with an ejection fraction of 35 percent. Large volumes cause pulmonary edema and do not fix myocardial stunning. Give a modest bolus and start norepinephrine early.",
        },
        {
          id: "c-permissive",
          label: "I accepted a MAP of 55 because she has a pulse and I did not want to add a pressor.",
          next: "s-fluids",
          quality: "unsafe",
          feedback:
            "A MAP below 65 lowers cerebral perfusion when the brain is most vulnerable. Guidelines recommend avoiding hypotension after ROSC. Start norepinephrine.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fluids",
      phase: "Twenty minutes later",
      text:
        "Her SpO2 falls to 89 percent on FiO2 0.6 and there are more B lines. Pressure is 74/42. The ICU physician on the phone asks you to start norepinephrine. You do and her MAP comes up to 68.",
      next: "q-cath",
    },
    {
      kind: "question",
      id: "q-cath",
      phase: "Cardiology call",
      prompt:
        "The ECG shows no ST elevation. The interventional cardiologist asks: 'Do you want me to take her to the lab now?' What is your answer and what else do you want first?",
      seconds: 90,
      modelAnswer: [
        "No ST elevation and no ongoing instability from ischemia. Emergent angiography is not routinely needed.",
        "Trials of patients without ST elevation found no benefit from immediate angiography over delayed.",
        "Get CT head and CT chest to look for other causes such as bleeding, PE or dissection.",
        "Re evaluate for the lab if the ECG evolves, she has recurrent VF or shock worsens despite support.",
        "Cardiology to follow in the ICU.",
        "Ask her husband about symptoms before the arrest and her cardiac risk factors.",
      ],
      rubric: ["pr-a1", "pr-a2", "pr-c1", "pr-h2"],
      choices: [
        {
          id: "c-delay-cath",
          label: "I said emergent angiography is not indicated without ST elevation or refractory instability, sent her for CT head and chest, and asked cardiology to reassess if anything changed.",
          next: "s-temp",
          quality: "strong",
          feedback:
            "Correct. The COACT and TOMAHAWK trials found no benefit from immediate angiography in resuscitated patients without ST elevation. CT head and chest look for other causes that would change management.",
        },
        {
          id: "c-cath-now",
          label: "I sent her to the cath lab straight away since VF arrest is usually coronary.",
          next: "s-cath-now",
          quality: "partial",
          feedback:
            "Coronary disease is common but immediate angiography without ST elevation has not improved survival. It also delays CT, which can find a bleed, PE or dissection. The examiner wanted an individualized decision.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-cath-now",
      phase: "Two hours later",
      text:
        "Angiography shows diffuse moderate disease with no acute occlusion. No stent is placed. She returns to your department. You send her for CT head and chest, which show no bleed and no PE.",
      next: "s-temp",
    },
    {
      kind: "say",
      id: "s-temp",
      phase: "10:45, still boarding in your department",
      text:
        "The CT head and chest show no bleed, no PE and no dissection. There is bilateral lower lobe consolidation. " +
        "The nurse calls you. Her bladder temperature is 38.3 and she is shivering. Heart rate 118. The ICU still has no bed.",
      next: "q-temp",
    },
    {
      kind: "question",
      id: "q-temp",
      phase: "Temperature",
      prompt: "How do you manage her temperature and what are you aiming for?",
      seconds: 75,
      modelAnswer: [
        "Fever after arrest is linked to worse brain outcome.",
        "Actively prevent fever. Keep her at or below 37.5 degrees.",
        "ERC 2025 advises 36 to 72 hours of control. AHA 2025 advises at least 36 hours at a set target between 32 and 37.5 degrees.",
        "Use a feedback controlled cooling device if available. Otherwise ice packs, cooling blankets and cold fluid with care.",
        "Treat shivering with sedation, analgesia and skin counter warming. Paralysis if needed.",
        "Acetaminophen as an adjunct.",
        "Send cultures and consider aspiration pneumonia.",
      ],
      rubric: ["pr-m2", "pr-a3"],
      choices: [
        {
          id: "c-control",
          label: "I started a feedback controlled cooling device to keep her at or below 37.5, treated shivering with propofol and fentanyl, gave acetaminophen and sent cultures.",
          next: "s-jerks",
          quality: "strong",
          feedback:
            "Good. Current guidance is to actively prevent fever, keeping temperature at or below 37.5 degrees for at least 36 hours and often up to 72 hours. Controlling shivering matters because it raises metabolic demand and temperature.",
        },
        {
          id: "c-acet",
          label: "I gave acetaminophen and took off her blankets.",
          next: "s-acet",
          quality: "partial",
          feedback:
            "Acetaminophen alone rarely controls fever after arrest. Shivering was not addressed. Active temperature control with a device and sedation is the standard.",
        },
        {
          id: "c-nothing",
          label: "I did not treat it because TTM2 showed hypothermia has no benefit.",
          next: "s-acet",
          quality: "unsafe",
          feedback:
            "TTM2 compared 33 degrees with normothermia. The normothermia arm actively treated temperatures of 37.8 or more. It did not support letting fever run. Fever prevention is still recommended.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-acet",
      phase: "One hour later",
      text: "Her temperature is 38.8. She is shivering harder and her heart rate is 126. The ICU physician asks you to start the cooling device and a sedation infusion. You do.",
      next: "s-jerks",
    },
    {
      kind: "say",
      id: "s-jerks",
      phase: "11:50",
      text:
        "The nurse calls you urgently. Her face and both arms are jerking in a rhythmic pattern. It has lasted three minutes. Her pressure is 136/80. There is no EEG in your hospital after hours.",
      next: "q-seizure",
    },
    {
      kind: "question",
      id: "q-seizure",
      phase: "Seizure",
      prompt: "What is happening and how do you treat it?",
      seconds: 75,
      modelAnswer: [
        "Likely post anoxic seizures or myoclonus. Treat as a seizure when rhythmic and sustained.",
        "Midazolam 5 to 10 mg IV or raise the propofol infusion.",
        "Levetiracetam or valproate as the first antiseizure drug. A status epilepticus load of levetiracetam is 60 mg/kg, maximum 4500 mg, about 4200 mg here.",
        "No seizure prophylaxis.",
        "Check glucose, sodium and temperature.",
        "Arrange EEG as soon as possible.",
        "Do not use early myoclonus to predict outcome in the emergency department.",
      ],
      rubric: ["pr-m3", "pr-p1"],
      next: "q-husband",
    },
    {
      kind: "question",
      id: "q-husband",
      phase: "Family meeting",
      prompt:
        "Her husband has been told by a relative that jerking after an arrest means brain death. He asks: 'Is she going to wake up? Should we be letting her go?' What do you say?",
      seconds: 90,
      modelAnswer: [
        "Sit down. Use plain words.",
        "Say honestly that it is too early to know.",
        "Explain that recovery is judged over days, usually at least 72 hours, using several tests.",
        "Some features are encouraging: witnessed arrest, early CPR, a shockable rhythm and preserved brain appearance on CT.",
        "Confirm he is her substitute decision maker and ask about her wishes.",
        "Plan ongoing ICU care and offer social work or spiritual care.",
      ],
      rubric: ["pr-c2", "pr-p1", "pr-p2"],
      choices: [
        {
          id: "c-honest",
          label: "I told him it is too early to know, explained that recovery is judged over at least 72 hours with several tests, shared the encouraging features and asked about her wishes.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Excellent. Early prognostication in the department is unreliable and can lead to a self fulfilling withdrawal of care. Honest uncertainty with a clear timeline is what families need.",
        },
        {
          id: "c-grim",
          label: "I told him that her sluggish pupils and jerking mean she is unlikely to recover and that he should consider comfort care.",
          next: "s-grim",
          quality: "unsafe",
          feedback:
            "No single early sign reliably predicts poor outcome. Guidelines advise multimodal prognostication after at least 72 hours with sedation cleared. Early withdrawal can end the life of a patient who might recover.",
        },
        {
          id: "c-rosy",
          label: "I reassured him that she would probably be fine because she got early CPR.",
          next: "s-grim",
          quality: "partial",
          feedback:
            "The kindness is right but the certainty is not. False reassurance damages trust if she does poorly. Be honest that you do not know yet.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-grim",
      phase: "In the family room",
      text:
        "The ICU physician joins you. She explains that no decision about recovery can be made for several days. The husband is confused and asks you both to be clear with him. You apologize for the mixed message and agree on one plan together.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Boarding",
      prompt: "She will board in your department for another four hours. How do you keep her safe until she gets to the ICU?",
      seconds: 60,
      modelAnswer: [
        "Written targets: MAP 65 or more, SpO2 94 to 98, PaCO2 35 to 45, glucose 7.8 to 10, temperature at or below 37.5.",
        "One to one nursing with ICU outreach reviews.",
        "Sedation plan and head of bed at 30 degrees.",
        "Antibiotics for likely aspiration pneumonia after cultures.",
        "Structured handover to the ICU team. Clear escalation plan.",
      ],
      rubric: ["pr-d1", "pr-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She moves to the ICU at 15:30. On day four she follows commands. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pr-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Sets SpO2 of about 94 to 98 percent and PaCO2 35 to 45 mmHg and weans FiO2 from 1.0.",
      points: 3,
      critical: true,
      teaching: "Hypoxia, hyperoxia and hypocapnia all worsen brain injury after arrest. ERC uses SpO2 94 to 98 percent and AHA accepts 90 to 98 percent. Explicit targets stop reflex over ventilation.",
      source: "erc-2025",
    },
    {
      id: "pr-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Secures the airway with a reduced dose induction agent and pressor ready, and uses lung protective ventilation.",
      points: 2,
      teaching: "Post arrest patients are sensitive to sedatives. Tidal volume of 6 to 8 mL/kg ideal body weight protects injured lungs.",
      source: "erc-2025",
    },
    {
      id: "pr-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Targets a MAP of at least 65 mmHg with norepinephrine, modest fluid and an arterial line.",
      points: 3,
      critical: true,
      teaching: "Hypotension after ROSC is linked to worse survival. A stunned ventricle needs pressor or inotrope support, not large fluid volumes.",
      source: "erc-2025",
    },
    {
      id: "pr-m1",
      competency: "management",
      criterion: "management",
      text: "Replaces potassium and magnesium, and targets glucose of about 7.8 to 10 mmol/L while avoiding hypoglycemia.",
      points: 1,
      teaching: "Low potassium and magnesium with a long QTc raise the risk of recurrent VF. Tight glucose control adds risk without benefit.",
      source: "erc-2025",
    },
    {
      id: "pr-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Reads the ECG as no ST elevation and does not send her for immediate angiography by reflex.",
      points: 2,
      teaching: "Without ST elevation or refractory ischemic instability, immediate angiography did not improve survival in COACT or TOMAHAWK.",
      source: "coact",
    },
    {
      id: "pr-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Obtains CT head and CT chest to look for non cardiac causes and injuries.",
      points: 1,
      teaching: "Bleeds, PE, dissection and CPR injuries all change management. CT is reasonable before or instead of early angiography when the cause is unclear.",
      source: "erc-2025",
    },
    {
      id: "pr-c1",
      competency: "communication",
      criterion: "process",
      text: "Discusses angiography timing with cardiology and agrees on triggers to reconsider.",
      points: 1,
      teaching: "Name the triggers: evolving ST elevation, recurrent VF or shock that is not explained by other causes.",
      source: "tomahawk",
    },
    {
      id: "pr-m2",
      competency: "management",
      criterion: "management",
      text: "Actively prevents fever, keeping temperature at or below 37.5 degrees for at least 36 hours and ideally up to 72 hours, and treats shivering.",
      points: 3,
      critical: true,
      teaching: "TTM2 did not support deep hypothermia but its control arm treated fever actively. Fever after arrest is linked to worse outcome.",
      source: "ttm2",
    },
    {
      id: "pr-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers aspiration pneumonia as a cause of fever and sends cultures before antibiotics.",
      points: 1,
      teaching: "Early pneumonia is common after arrest. Fever should be investigated even when temperature control is running.",
      source: "erc-2025",
    },
    {
      id: "pr-m3",
      competency: "management",
      criterion: "management",
      text: "Treats clinical seizures with a benzodiazepine or propofol plus levetiracetam or valproate, avoids prophylaxis, and arranges EEG.",
      points: 2,
      teaching: "Seizures after arrest increase brain oxygen demand. EEG helps separate seizure from myoclonus.",
      source: "erc-2025",
    },
    {
      id: "pr-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Avoids early prognostication and explains that multimodal assessment happens after at least 72 hours.",
      points: 3,
      critical: true,
      teaching: "Early withdrawal based on single signs such as early myoclonus or sluggish pupils can create a self fulfilling poor outcome.",
      source: "erc-2025",
    },
    {
      id: "pr-c2",
      competency: "communication",
      criterion: "process",
      text: "Speaks with the husband honestly, shares uncertainty and encouraging features, and uses plain language.",
      points: 2,
      teaching: "Families cope better with honest uncertainty and a clear timeline than with false hope or false doom.",
      source: "erc-2025",
    },
    {
      id: "pr-p2",
      competency: "professionalism",
      criterion: "history",
      text: "Confirms the husband as substitute decision maker and asks about her previously expressed wishes.",
      points: 1,
      teaching: "Under the Ontario Health Care Consent Act the spouse is high on the hierarchy. Decisions should follow her known wishes and values.",
      source: "hcca",
    },
    {
      id: "pr-d1",
      competency: "disposition",
      criterion: "process",
      text: "Writes clear targets and a care plan for boarding and arranges ICU outreach and handover.",
      points: 2,
      teaching: "Boarding critically ill patients is a known risk. Written targets make care consistent across nurses and shifts.",
      source: "erc-2025",
    },
    {
      id: "pr-l1",
      competency: "leadership",
      criterion: "process",
      text: "Coordinates ICU, cardiology and nursing and assigns one to one nursing while she boards.",
      points: 1,
      teaching: "When the ICU is full, the emergency physician still leads the plan. Clear ownership prevents drift in targets.",
      source: "aha-2025",
    },
    {
      id: "pr-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the paramedics for the arrest details: witnessed collapse, bystander CPR, time to paramedic arrival, first rhythm, shocks, drugs and time to ROSC.",
      points: 2,
      teaching: "A witnessed VF arrest with bystander CPR and ROSC at 22 minutes shapes both prognosis and the cath lab discussion. Get the timeline before the paramedics leave.",
      source: "erc-2025",
    },
    {
      id: "pr-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks her husband about symptoms before the arrest and her cardiac risk factors, and learns of a month of breathlessness walking the dog.",
      points: 2,
      teaching: "Exertional breathlessness in a woman with diabetes and hypertension may be an anginal equivalent. It raises the chance of coronary disease even without ST elevation.",
      source: "erc-2025",
    },
    {
      id: "pr-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks whether any sedation or other drugs were given since ROSC before judging her GCS of 3.",
      points: 1,
      teaching: "Sedatives, residual drugs and low temperature confound the neurologic exam. Record what was given so the early exam is not over read.",
      source: "erc-2025",
    },
  ],
  sources: [
    {
      id: "erc-2025",
      citation: "Nolan JP, Sandroni C, Cariou A, et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2025. Post resuscitation care. Resuscitation. 2025.",
      url: "https://pubmed.ncbi.nlm.nih.gov/41117575/",
    },
    {
      id: "ttm2",
      citation: "Dankiewicz J, Cronberg T, Lilja G, et al. Hypothermia versus normothermia after out of hospital cardiac arrest. N Engl J Med. 2021.",
    },
    {
      id: "coact",
      citation: "Lemkes JS, Janssens GN, van der Hoeven NW, et al. Coronary angiography after cardiac arrest without ST segment elevation. N Engl J Med. 2019.",
    },
    {
      id: "tomahawk",
      citation: "Desch S, Freund A, Akin I, et al. Angiography after out of hospital cardiac arrest without ST segment elevation. N Engl J Med. 2021.",
    },
    {
      id: "aha-2025",
      citation: "American Heart Association. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
