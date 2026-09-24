// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const hypercapnicCopdExacerbation: OralCase = {
  id: "hypercapnic-copd-exacerbation",
  title: "Drowsy man on a non rebreather",
  blueprint: "resp",
  alsoCovers: ["ethics"],
  priorityTopic: "asthma-copd",
  keyFeatures: [
    { topic: "asthma-copd", n: 3 },
    { topic: "asthma-copd", n: 4 },
    { topic: "asthma-copd", n: 6 },
    { topic: "asthma-copd", n: 7 },
  ],
  summary: "A 71 year old man with a chronic lung condition arrives drowsy after three days of worsening cough.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "The hospital has a respiratory therapist, BiPAP machines, a 6 bed ICU and an internist on call. " +
    "A 71 year old man arrives by ambulance, drowsy after 3 days of worsening cough and breathlessness.",
  card: {
    vitals: {
      temperature: "37.6°C",
      pulse: "112/minute",
      resp: "26/minute",
      bp: "152/88 mmHg",
      o2sat: "99% on 15 L/minute by non rebreather mask",
      weight: "58 kg (128 lb)",
    },
    medications: "Tiotropium and olodaterol inhaler daily. Salbutamol inhaler as needed",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness, from his daughter",
      result:
        "Three days of worse cough and breathlessness. Coughing up more green sputum for 3 days. His daughter found him hard to wake this morning. " +
        "No chest pain. No leg swelling. No recent travel or surgery.",
    },
    {
      id: "paramedic",
      label: "Paramedic handover and triage",
      result:
        "Paramedics put him on a non rebreather mask at 15 L/min because his SpO2 was 81 percent at home. " +
        "The paramedic says: 'He was talking to us at the house. He has been getting sleepier the whole way in.' " +
        "Capillary glucose 6.9 mmol/L. GCS 12 (E3 V4 M5). CTAS 2.",
    },
    {
      id: "exam",
      label: "Chest and general exam",
      result:
        "Barrel chest. Pursed lip breathing has stopped. Diffuse expiratory wheeze with prolonged expiration. Coarse crackles at the right base. " +
        "Flapping tremor of the hands. Warm peripheries. No leg swelling. JVP not seen. Drowsy but rousable to voice.",
    },
    {
      id: "pmh",
      label: "Past history, from his daughter",
      result: "COPD diagnosed 9 years ago. FEV1 was 34 percent predicted last year. Two admissions for flare ups last year. No home oxygen.",
    },
    {
      id: "meds",
      label: "Medications in detail",
      result: "Uses tiotropium and olodaterol daily and salbutamol as needed. No sedatives or opioids at home.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Still smokes half a pack a day.",
    },
    {
      id: "abg",
      label: "Arterial blood gas on 15 L non rebreather",
      result: "pH 7.22. pCO2 86 mmHg. pO2 162 mmHg. HCO3 34 mmol/L. Lactate 1.4 mmol/L.",
    },
    {
      id: "old-gas",
      label: "Gas from last admission, when well",
      result: "pH 7.38. pCO2 56 mmHg. HCO3 32 mmol/L on room air, recorded at discharge 8 months ago.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "White cells 11.2 x 10^9/L. Hemoglobin 158 g/L. Platelets 244 x 10^9/L. Sodium 139 mmol/L. Potassium 4.4 mmol/L. Creatinine 96 µmol/L. " +
        "High sensitivity troponin T 18 ng/L then 19 ng/L at 2 hours. NT proBNP 310 ng/L. CRP 48 mg/L.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Hyperinflated lungs. Bullous change at both apices. No pneumothorax. Subtle increased markings at the right base. No pulmonary edema.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 112. Tall P waves in II. Right axis deviation. No ST changes. Unchanged from last year.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Lung sliding present on both sides. A lines with a small area of B lines and subpleural consolidation at the right base. " +
        "Left ventricle normal. Right ventricle not dilated. IVC 1.6 cm with some collapse.",
    },
    {
      id: "sputum",
      label: "Sputum",
      result: "Thick green sputum. Sent for culture.",
    },
    {
      id: "goals",
      label: "Advance care planning",
      result:
        "No written advance directive in the chart. His family doctor's last note says 'discussed COPD prognosis, patient wants to think about it'.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "He is slumped on the stretcher with the non rebreather on. His eyes open when you say his name, then close again. The respiratory therapist is setting up a BiPAP machine in case you want it.",
      next: "q-oxygen",
    },
    {
      kind: "question",
      id: "q-oxygen",
      phase: "First minutes",
      prompt: "His SpO2 is 99 percent on 15 L. What do you do first, and what is your oxygen target?",
      seconds: 60,
      modelAnswer: [
        "He is at risk of hypercapnic failure and is being over oxygenated.",
        "Titrate oxygen down to a target SpO2 of 88 to 92 percent.",
        "Use a Venturi mask at 24 to 28 percent or low flow nasal prongs.",
        "Do not stop oxygen abruptly. Rebound hypoxemia can be severe.",
        "Arterial or venous gas now and repeat in 30 to 60 minutes.",
        "Quick history from the paramedics and his daughter: baseline lung function, prior admissions or NIV, home oxygen, how alert he was at home and the oxygen given.",
      ],
      rubric: ["co-a1", "co-m1", "co-h1", "co-h4"],
      choices: [
        {
          id: "c-titrate",
          label: "I changed him to a 28 percent Venturi mask with a target SpO2 of 88 to 92 percent and sent a blood gas.",
          next: "q-abg",
          quality: "strong",
          feedback:
            "Correct. High flow oxygen worsens hypercapnia in COPD through ventilation perfusion mismatch and the Haldane effect. A target of 88 to 92 percent is the standard. A Venturi mask gives a controlled FiO2.",
        },
        {
          id: "c-prongs",
          label: "I switched him to nasal prongs at 4 L/min and planned to look again later.",
          next: "s-prongs",
          quality: "partial",
          feedback:
            "Reducing the oxygen is right. Without a stated target and a gas, you cannot tell if he is still retaining CO2. The examiner wanted a target of 88 to 92 percent, controlled delivery and a blood gas.",
        },
        {
          id: "c-keep",
          label: "I kept the non rebreather on because his saturation is perfect and he looked unwell.",
          next: "s-keep",
          quality: "unsafe",
          feedback:
            "A saturation of 99 percent in a drowsy COPD patient is a warning sign, not reassurance. Excess oxygen raises his pCO2 further. His falling level of consciousness is probably CO2 narcosis.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-prongs",
      phase: "Twenty minutes later",
      text: "His SpO2 is 97 percent on 4 L. He is no more awake. The respiratory therapist asks for a target and draws the gas you had not yet ordered.",
      next: "q-abg",
    },
    {
      kind: "say",
      id: "s-keep",
      phase: "Twenty minutes later",
      text:
        "He now only opens his eyes to pain. GCS 9. The respiratory therapist quietly swaps the mask for a 28 percent Venturi and asks you to look at the gas.",
      next: "q-abg",
    },
    {
      kind: "question",
      id: "q-abg",
      phase: "Blood gas",
      prompt: "Here is his gas on the non rebreather: pH 7.22, pCO2 86, HCO3 34. His gas when well was pH 7.38, pCO2 56, HCO3 32. Interpret it.",
      seconds: 60,
      modelAnswer: [
        "Acute on chronic respiratory acidosis.",
        "The raised bicarbonate shows chronic compensation. His baseline pCO2 is about 56.",
        "The acute rise of about 30 mmHg overwhelms compensation and drops the pH to 7.22.",
        "pH under 7.35 with pCO2 over 45 is the threshold for NIV.",
        "His drowsiness fits CO2 narcosis.",
      ],
      rubric: ["co-a2"],
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Triggers",
      prompt: "What caused this, and what else must you look for before you blame COPD alone?",
      seconds: 60,
      modelAnswer: [
        "Likely an infective exacerbation with a possible right base pneumonia.",
        "Exclude pneumothorax. Bullae make it more likely and NIV can worsen it.",
        "Consider pulmonary embolism, heart failure, acute coronary syndrome and arrhythmia.",
        "Ask about sedatives and opioids that depress drive.",
        "Chest X ray, ECG, troponin, ultrasound and sputum culture.",
        "Ask about sputum change, fever, chest pain, leg swelling, travel and surgery.",
      ],
      rubric: ["co-a3", "co-h2", "co-h3"],
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Drug therapy",
      prompt: "Tell me your drug treatment with doses.",
      seconds: 90,
      modelAnswer: [
        "Salbutamol 2.5 to 5 mg with ipratropium 0.5 mg by nebulizer, driven by air with oxygen by prongs, or by MDI in line with NIV.",
        "Prednisone 40 mg orally daily for 5 days. Methylprednisolone about 40 mg IV daily if he cannot swallow.",
        "Antibiotics for increased sputum purulence, or if he needs ventilatory support.",
        "Ceftriaxone 1 g IV daily while on NIV, or amoxicillin clavulanate 875 mg orally twice daily once he can swallow.",
        "VTE prophylaxis once admitted.",
      ],
      rubric: ["co-m2", "co-m3", "co-m4"],
      next: "q-niv",
    },
    {
      kind: "question",
      id: "q-niv",
      phase: "Ventilatory support",
      prompt: "Twenty minutes later on 28 percent oxygen, his pH is 7.23 and he is still drowsy. What now?",
      seconds: 90,
      modelAnswer: [
        "Start BiPAP. Acute hypercapnic acidosis in COPD is the strongest indication for NIV.",
        "IPAP 10 to 12 and EPAP 4 to 5 cmH2O. Increase IPAP by 2 every few minutes toward 18 to 20 as tolerated.",
        "Drowsiness from CO2 is not an absolute contraindication if he is closely watched.",
        "Resus bay with RT and one to one nursing. Repeat gas at 1 hour.",
        "Have a plan and a ceiling of care if NIV fails.",
      ],
      rubric: ["co-r1", "co-r2"],
      choices: [
        {
          id: "c-niv",
          label: "I started BiPAP at 12 over 5, titrated IPAP up to 18, kept him in resus with the RT and planned a gas at 1 hour.",
          next: "s-onehour",
          quality: "strong",
          feedback:
            "This is the key intervention. NIV in hypercapnic COPD cuts intubation and mortality. Hypercapnic drowsiness often clears within an hour on NIV. Close watching is what makes it safe.",
        },
        {
          id: "c-tube",
          label: "I intubated him right away because his GCS is 12.",
          next: "s-tube",
          quality: "partial",
          feedback:
            "Intubation may be needed if NIV fails or he cannot protect his airway. First line here is NIV, which avoids the harms of invasive ventilation in severe COPD. You also have not yet clarified his wishes about a breathing tube.",
        },
        {
          id: "c-wait",
          label: "I gave more nebulizers and planned to recheck the gas in two hours before any ventilation.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "A pH of 7.23 with drowsiness will not correct with bronchodilators alone. Each hour of delay risks respiratory arrest. NIV should start as soon as pH is under 7.35 despite initial therapy.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tube",
      phase: "Drawing up drugs",
      text:
        "The RT asks if anyone knows his wishes about a breathing tube. She points out that he was talking at the house an hour ago and that drowsiness from CO2 often clears on BiPAP. " +
        "You pause the intubation and start BiPAP at 12 over 5.",
      next: "s-onehour",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "One hour later",
      text:
        "His respiratory rate is 8. GCS 8. pH 7.16 and pCO2 98. The RT starts BiPAP on her own and calls you back. After 45 minutes on BiPAP he begins to open his eyes to voice.",
      next: "s-onehour",
    },
    {
      kind: "say",
      id: "s-onehour",
      phase: "One hour on BiPAP",
      text:
        "Repeat gas: pH 7.29, pCO2 72, HCO3 34. GCS 14. He is nodding and squeezing your hand. " +
        "His daughter arrives. She says: 'Dad would never want to be on machines. Take that mask off him. And do not put a tube in him.'",
      next: "q-goals",
    },
    {
      kind: "question",
      id: "q-goals",
      phase: "Goals of care",
      prompt: "How do you handle his daughter's request, and how do you settle the question of intubation?",
      seconds: 90,
      modelAnswer: [
        "Acknowledge her concern and ask what he said and when.",
        "Assess his capacity now that he is more alert. If capable, he decides.",
        "Speak to him directly in short sentences with the mask briefly adjusted.",
        "Explain NIV, possible intubation, likely outcomes and alternatives including comfort focused care.",
        "If he lacks capacity, his substitute decision maker applies his known wishes, not her own.",
        "Document the discussion and the agreed ceiling of care.",
        "Ask about any advance directive or earlier talk with his family doctor.",
      ],
      rubric: ["co-c1", "co-p1", "co-c2", "co-h5"],
      choices: [
        {
          id: "c-ask",
          label: "I thanked her, checked his capacity now that he was more alert, and asked him directly about BiPAP and a breathing tube with her present.",
          next: "q-reassess",
          quality: "strong",
          feedback:
            "This is right. A capable patient makes his own decision. He now has a GCS of 14, so try to assess capacity before relying on anyone else. Including his daughter helps her hear his wishes firsthand.",
        },
        {
          id: "c-daughter",
          label: "I accepted what his daughter said, took off the BiPAP and wrote no intubation.",
          next: "s-daughter",
          quality: "unsafe",
          feedback:
            "The daughter is not the decision maker while he may be capable. Removing effective treatment on hearsay can cause his death against his wishes. Assess his capacity and ask him first.",
        },
        {
          id: "c-override",
          label: "I told her we must do everything because this is reversible and kept going without discussing it with him.",
          next: "s-override",
          quality: "partial",
          feedback:
            "Continuing NIV while you clarify is reasonable because it is working. Dismissing her concern and not asking him misses his right to decide. The examiner wanted a capacity assessment and a direct conversation with the patient.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-daughter",
      phase: "Twenty minutes later",
      text:
        "Off BiPAP his SpO2 drops and he becomes drowsy again. The RT puts it back on. When he wakes enough to talk he looks at you and says: 'I want the mask. I am not ready to go.'",
      next: "q-reassess",
    },
    {
      kind: "say",
      id: "s-override",
      phase: "At the bedside",
      text:
        "His daughter asks for the patient relations office. The charge nurse suggests you speak to him directly now that he is awake. He tells you he wants the mask and would accept a breathing tube only for a few days.",
      next: "q-reassess",
    },
    {
      kind: "question",
      id: "q-reassess",
      phase: "Watching the trial",
      prompt: "He agrees to BiPAP and a short trial of intubation if needed. What signs would tell you NIV is failing over the next few hours?",
      seconds: 60,
      modelAnswer: [
        "pH not improving or falling at 1 to 2 hours, or pCO2 rising.",
        "Worsening level of consciousness or agitation.",
        "Unable to clear secretions, vomiting or intolerance of the mask.",
        "Rising respiratory rate or heart rate, hemodynamic instability.",
        "Target pCO2 near his baseline of about 56, not a normal value.",
      ],
      rubric: ["co-r2", "co-a4"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where does he go, and what needs to happen before he leaves hospital?",
      seconds: 60,
      modelAnswer: [
        "ICU or step down unit that can manage NIV with RT support. Not the general ward.",
        "Handover including ceiling of care and his stated wishes.",
        "Before discharge: inhaler technique, smoking cessation with pharmacotherapy, pulmonary rehab referral.",
        "Assess for home oxygen and home NIV once stable.",
        "Vaccines and follow up within one to two weeks. Advance care planning with his family doctor.",
      ],
      rubric: ["co-d1", "co-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is admitted to the ICU on BiPAP with his wishes documented. His daughter stays with him. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "co-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes that a high SpO2 on high flow oxygen in a drowsy COPD patient signals risk of oxygen induced hypercapnia.",
      points: 2,
      teaching: "Excess oxygen worsens CO2 retention in COPD. Drowsiness in this setting is CO2 narcosis until proven otherwise.",
      source: "bts-o2",
    },
    {
      id: "co-m1",
      competency: "management",
      criterion: "management",
      text: "Titrates oxygen to a target SpO2 of 88 to 92 percent with controlled delivery and does not stop oxygen abruptly.",
      points: 3,
      critical: true,
      teaching: "Use a Venturi mask or low flow prongs. Sudden removal of oxygen can cause dangerous rebound hypoxemia.",
      source: "bts-o2",
    },
    {
      id: "co-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets the gas as acute on chronic respiratory acidosis and uses the baseline pCO2 to set expectations.",
      points: 2,
      teaching: "A high bicarbonate means chronic retention. Aim to return him to his own baseline, not to normal numbers.",
      source: "gold",
    },
    {
      id: "co-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Seeks triggers and mimics including pneumonia, pneumothorax, PE, heart failure, ACS and sedating drugs.",
      points: 2,
      teaching: "Exacerbations have causes. Pneumothorax must be excluded before NIV, especially with bullae.",
      source: "gold",
    },
    {
      id: "co-m2",
      competency: "management",
      criterion: "management",
      text: "Gives short acting bronchodilators, salbutamol with ipratropium, by air driven nebulizer or in line MDI.",
      points: 1,
      teaching: "Oxygen driven nebulizers can raise CO2 in retainers. Drive with air and give oxygen separately by prongs.",
      source: "bts-o2",
    },
    {
      id: "co-m3",
      competency: "management",
      criterion: "management",
      text: "Gives prednisone 40 mg daily for 5 days or an IV equivalent.",
      points: 1,
      teaching: "A 5 day course works as well as 14 days for COPD exacerbations. It shortens recovery and lowers treatment failure.",
      source: "reduce",
    },
    {
      id: "co-m4",
      competency: "management",
      criterion: "management",
      text: "Gives antibiotics for purulent sputum or need for ventilatory support, with an appropriate agent and dose.",
      points: 1,
      teaching: "Increased sputum purulence and the need for NIV are the main indications. Pick an agent that covers H. influenzae and pneumococcus.",
      source: "gold",
    },
    {
      id: "co-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Starts NIV for pH under 7.35 with pCO2 over 45 mmHg, with appropriate starting pressures and titration.",
      points: 3,
      critical: true,
      teaching: "Bilevel NIV is first line for acute hypercapnic respiratory failure in COPD. It reduces intubation and death.",
      source: "ers-ats",
    },
    {
      id: "co-r2",
      competency: "resuscitation",
      criterion: "process",
      text: "Monitors NIV closely in a resuscitation or step down area with a repeat gas at 1 to 2 hours.",
      points: 2,
      teaching: "The first two hours decide success. No improvement in pH by then predicts failure.",
      source: "ers-ats",
    },
    {
      id: "co-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Names specific signs of NIV failure and targets pCO2 near the patient's baseline.",
      points: 1,
      teaching: "Watch pH, level of consciousness, secretions and tolerance. Over ventilating a chronic retainer causes alkalosis.",
      source: "ers-ats",
    },
    {
      id: "co-c1",
      competency: "communication",
      criterion: "process",
      text: "Acknowledges the daughter's concern and explores what her father has said about his wishes.",
      points: 1,
      teaching: "Families often carry real information about prior wishes. Listen before you explain.",
      source: "cmpa",
    },
    {
      id: "co-p1",
      competency: "professionalism",
      criterion: "management",
      text: "Assesses the patient's capacity once he improves and lets a capable patient make his own decision about NIV and intubation.",
      points: 3,
      critical: true,
      teaching: "A capable adult decides. A substitute decision maker only steps in when the patient lacks capacity, and must follow his known wishes.",
      source: "cmpa",
    },
    {
      id: "co-c2",
      competency: "communication",
      criterion: "process",
      text: "Documents the goals of care discussion and the agreed ceiling of treatment.",
      points: 1,
      teaching: "A clear note protects the patient overnight. The next physician needs to know what he agreed to.",
      source: "cmpa",
    },
    {
      id: "co-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to ICU or a step down unit capable of NIV and hands over the ceiling of care.",
      points: 2,
      teaching: "A ward bed without RT support is unsafe for a patient on acute NIV.",
      source: "ers-ats",
    },
    {
      id: "co-d2",
      competency: "disposition",
      criterion: "management",
      text: "Plans smoking cessation, pulmonary rehabilitation, maintenance therapy review, home oxygen or NIV assessment and early follow up.",
      points: 1,
      teaching: "An admission for COPD is a chance to lower the next exacerbation risk. Rehab after an admission improves outcomes.",
      source: "cts-copd",
    },
    {
      id: "co-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about baseline COPD severity: lung function, prior admissions, prior NIV or intubation, and home oxygen.",
      points: 3,
      teaching: "Baseline severity sets the oxygen target, the expected gas and the ceiling of care. Frequent admissions predict the next one.",
      source: "gold",
    },
    {
      id: "co-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the trigger: sputum volume and colour, fever, chest pain, leg swelling, travel and surgery.",
      points: 2,
      teaching: "More purulent sputum points to a bacterial trigger and guides antibiotics. Chest pain and leg swelling raise PE, ACS and heart failure.",
      source: "gold",
    },
    {
      id: "co-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about sedatives, opioids and other drugs that depress breathing, and about current smoking.",
      points: 2,
      teaching: "Sedating drugs can tip a chronic retainer into narcosis. Active smoking is the main thing to change before discharge.",
      source: "gold",
    },
    {
      id: "co-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks the paramedics or his daughter how alert he was at home and how much oxygen he was given on the way in.",
      points: 2,
      teaching: "A patient who was talking at home and got sleepier on high flow oxygen has oxygen induced hypercapnia until proven otherwise.",
      source: "bts-o2",
    },
    {
      id: "co-h5",
      competency: "professionalism",
      criterion: "history",
      text: "Asks about an advance directive and what he has said to his family or family doctor about machines and breathing tubes.",
      points: 1,
      teaching: "Prior expressed wishes guide the substitute decision maker if he lacks capacity. Ask early, before the decision is urgent.",
      source: "cmpa",
    },
  ],
  sources: [
    {
      id: "gold",
      citation: "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of COPD. 2024 report.",
      url: "https://goldcopd.org/",
    },
    {
      id: "cts-copd",
      citation:
        "Bourbeau J, Bhutani M, Hernandez P, et al. 2023 Canadian Thoracic Society guideline on pharmacotherapy in patients with stable COPD. Canadian Journal of Respiratory, Critical Care, and Sleep Medicine. 2023.",
      url: "https://cts-sct.ca/wp-content/uploads/2023/09/2023-CTS-COPD-Pharmacotherapy-Guideline-1.pdf",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Consent. A guide for Canadian physicians. Fourth edition. 2024.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians",
    },
    {
      id: "ers-ats",
      citation:
        "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. European Respiratory Journal. 2017.",
    },
    {
      id: "bts-o2",
      citation: "O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.",
    },
    {
      id: "reduce",
      citation:
        "Leuppi JD, Schuetz P, Bingisser R, et al. Short term vs conventional glucocorticoid therapy in acute exacerbations of COPD. The REDUCE randomized clinical trial. JAMA. 2013.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
