// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const nearFatalAsthma: OralCase = {
  id: "near-fatal-asthma",
  title: "Breathless woman off the ambulance",
  blueprint: "resp",
  alsoCovers: ["resus"],
  priorityTopic: "asthma-copd",
  keyFeatures: [
    { topic: "asthma-copd", n: 2 },
    { topic: "asthma-copd", n: 3 },
    { topic: "asthma-copd", n: 4 },
    { topic: "asthma-copd", n: 7 },
    { topic: "airway", n: 5 },
  ],
  summary: "A 27 year old woman arrives by ambulance too breathless to speak in sentences.",
  durationMinutes: 15,
  stem:
    "You are working at a busy community ED in Hamilton, Ontario. A respiratory therapist is in the department. Anesthesia and ICU are on call in house. " +
    "Tamsin Okafor is 27 years old and weighs about 60 kg. Her friend called 911 after she woke at 02:00 unable to catch her breath. " +
    "Paramedics gave salbutamol 5 mg and ipratropium 0.5 mg by nebulizer twice on the way in. " +
    "Triage vitals: heart rate 134, blood pressure 108/64, respiratory rate 34, SpO2 87 percent on 8 L by nebulizer mask, temperature 37.1, capillary glucose 11.2 mmol/L. CTAS 1. " +
    "The paramedic says: 'She could talk in phrases when we got there. Now it is one word at a time and she keeps closing her eyes.'",
  findings: [
    {
      id: "vitals",
      label: "Repeat vitals",
      result:
        "Heart rate 136. Blood pressure 104/62. Respiratory rate 32 and shallow. SpO2 88 percent on nebulizer mask. Pulsus paradoxus about 22 mmHg on the arterial waveform once placed.",
    },
    {
      id: "exam",
      label: "Chest and general exam",
      result:
        "Sitting forward, tripoding. Using sternocleidomastoid and intercostal muscles. Very quiet breath sounds in both bases with faint expiratory wheeze at the apices. " +
        "Trachea midline. No stridor. No urticaria, no lip or tongue swelling. Drowsy but opens eyes to voice. GCS 14.",
    },
    {
      id: "history",
      label: "Asthma history from her friend",
      result:
        "Asthma since childhood. Intubated in the ICU at age 19. Three ED visits this year. She stopped her inhaled steroid last spring because of cost. " +
        "Uses about two salbutamol inhalers a month. Vapes cannabis. Cold symptoms for 3 days. No known allergies. No new foods or medications tonight.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.24. pCO2 58 mmHg. HCO3 24 mmol/L. Lactate 4.1 mmol/L.",
    },
    {
      id: "lytes",
      label: "Electrolytes and blood work",
      result:
        "Sodium 138 mmol/L. Potassium 3.1 mmol/L. Chloride 102 mmol/L. Creatinine 64 µmol/L. Glucose 11.8 mmol/L. " +
        "Hemoglobin 142 g/L. White cells 13.8 x 10^9/L with eosinophils 0.7 x 10^9/L. Phosphate 0.62 mmol/L. Magnesium 0.78 mmol/L.",
    },
    {
      id: "pef",
      label: "Peak expiratory flow",
      result: "She tries once and cannot complete the manoeuvre. The respiratory therapist says it is not safe to keep trying.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result:
        "Hyperinflated lungs with flattened hemidiaphragms. No pneumothorax. No pneumomediastinum. No focal consolidation.",
    },
    {
      id: "pocus",
      label: "Lung ultrasound",
      result: "Lung sliding present in all anterior zones on both sides. A lines throughout. No B lines. No pleural effusion.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 136. Normal axis. No ischemic changes. QTc 468 ms. Small U waves.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "She is sitting bolt upright, gripping the stretcher rails. The respiratory therapist is at the head of the bed. The nurse has one IV in and asks what you want.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "Assess her severity and tell me your treatment in the next ten minutes, with doses.",
      seconds: 120,
      modelAnswer: [
        "Life threatening asthma: single words, drowsy, quiet chest, SpO2 under 92 percent.",
        "Oxygen to a target SpO2 of 93 to 95 percent.",
        "Salbutamol 5 mg by nebulizer every 15 to 20 minutes or continuous nebulization, with ipratropium 0.5 mg every 20 minutes for three doses.",
        "Systemic steroid within the first hour: prednisone 50 mg orally if she can swallow, or methylprednisolone 60 to 125 mg IV. Higher doses add no proven benefit.",
        "Magnesium sulfate 2 g IV over 20 minutes.",
        "Second IV, monitor, gas, potassium, chest X ray. Call anesthesia and ICU early.",
      ],
      rubric: ["as-r1", "as-m1", "as-m2", "as-m3"],
      choices: [
        {
          id: "c-bundle",
          label: "I called it life threatening, ran continuous salbutamol with ipratropium, gave methylprednisolone 125 mg IV and magnesium 2 g IV, and called anesthesia and ICU.",
          next: "q-gas",
          quality: "strong",
          feedback:
            "This is the full bundle for life threatening asthma. Drowsiness, single words and a quiet chest are the markers. Magnesium 2 g IV over 20 minutes reduces admissions in severe attacks. Calling for help early is the right move.",
        },
        {
          id: "c-mdi",
          label: "I gave salbutamol 8 puffs by spacer, prednisone 50 mg orally and planned to reassess in one hour.",
          next: "s-mdi",
          quality: "partial",
          feedback:
            "A spacer works well in moderate asthma. This patient is drowsy and cannot coordinate a spacer. She needs back to back or continuous nebulized salbutamol with ipratropium and IV magnesium now. A one hour reassessment is far too long in life threatening asthma.",
        },
        {
          id: "c-sedate",
          label: "She was very anxious so I gave lorazepam 1 mg IV to settle her before the nebulizers.",
          next: "s-sedate",
          quality: "unsafe",
          feedback:
            "Sedation outside of a planned intubation is dangerous in severe asthma. Her agitation and drowsiness are signs of hypoxia and hypercapnia. A benzodiazepine removes her respiratory drive. Treat the bronchospasm and prepare the airway instead.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-mdi",
      phase: "Twenty minutes later",
      text:
        "She cannot hold the spacer seal. Her SpO2 drifts to 85 percent and her head is nodding. The respiratory therapist starts continuous nebulized salbutamol with ipratropium. The nurse hangs magnesium 2 g IV.",
      next: "q-gas",
    },
    {
      kind: "say",
      id: "s-sedate",
      phase: "Five minutes later",
      text:
        "Her respiratory rate falls to 12. SpO2 is 79 percent. She only opens her eyes to pain. The respiratory therapist is bagging gently and asks if you want the airway cart. You start continuous nebulized salbutamol, ipratropium, methylprednisolone and magnesium.",
      next: "q-gas",
    },
    {
      kind: "question",
      id: "q-gas",
      phase: "Investigations",
      prompt: "Her gas is back: pH 7.24, pCO2 58 mmHg, lactate 4.1 mmol/L, potassium 3.1 mmol/L. Interpret this for me.",
      seconds: 60,
      modelAnswer: [
        "Acute respiratory acidosis with a lactic metabolic component. The bicarbonate has not risen as a pure acute respiratory acidosis would predict.",
        "A normal or rising pCO2 in acute asthma means fatigue and impending failure.",
        "Lactate is likely from salbutamol and work of breathing. It does not by itself mean sepsis.",
        "Hypokalemia and hypophosphatemia are from beta agonists. Replace potassium.",
        "The chest X ray is needed to exclude pneumothorax. It does not rule in severity.",
      ],
      rubric: ["as-a1", "as-a2", "as-a3"],
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "Thirty minutes in",
      text:
        "Despite continuous nebulization, magnesium and steroids, she is now responding only to loud voice. Respiratory rate 10. SpO2 86 percent. Heart rate 142. Blood pressure 98/58. " +
        "A repeat gas shows pH 7.14 and pCO2 76 mmHg. The ICU resident suggests trying BiPAP first.",
      next: "q-niv",
    },
    {
      kind: "question",
      id: "q-niv",
      phase: "Deterioration",
      prompt: "What do you do now? Do you try BiPAP?",
      seconds: 90,
      modelAnswer: [
        "She has falling consciousness and a rising pCO2. This is respiratory failure and she needs intubation.",
        "Decreased level of consciousness is a contraindication to NIV.",
        "Consider epinephrine 0.5 mg IM, or a titrated IV infusion, as a bridge while preparing. This is expert practice. GINA reserves it for anaphylaxis.",
        "The most experienced airway operator intubates. Call anesthesia to the bedside.",
        "Resuscitate before induction: fluid bolus and a push dose vasopressor ready.",
      ],
      rubric: ["as-m4", "as-l1", "as-r2"],
      choices: [
        {
          id: "c-intubate",
          label: "I declined BiPAP because she is obtunded, gave epinephrine 0.5 mg IM as a bridge, and prepared to intubate with anesthesia at the bedside.",
          next: "q-rsi",
          quality: "strong",
          feedback:
            "Correct. A drowsy patient with a rising pCO2 cannot protect her airway on NIV. IM epinephrine is an expert bridge rather than guideline therapy, but it is reasonable while the team prepares. Intubation in asthma is high risk so the most skilled operator should do it.",
        },
        {
          id: "c-bipap",
          label: "I agreed to a trial of BiPAP at 12 over 5 and planned to recheck the gas in one hour.",
          next: "s-bipap",
          quality: "partial",
          feedback:
            "NIV has weak evidence in asthma and may help a tired but alert patient in a monitored setting. This patient is obtunded with a pH of 7.14. She cannot protect her airway and a one hour trial delays a definitive airway. The examiner wanted a decision to intubate.",
        },
        {
          id: "c-ketsed",
          label: "I gave propofol 50 mg IV so she would tolerate the BiPAP mask.",
          next: "s-ketsed",
          quality: "unsafe",
          feedback:
            "Propofol to tolerate NIV in an obtunded, hypercapnic patient is likely to cause apnea and hypotension. If sedation is ever used for NIV in asthma, it is small dose ketamine or dexmedetomidine with airway backup. This patient needs intubation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bipap",
      phase: "Fifteen minutes later",
      text:
        "She pulls at the mask and then stops moving. SpO2 is 78 percent. The respiratory therapist says she is barely triggering the machine. Anesthesia arrives and asks why she is not intubated yet.",
      next: "q-rsi",
    },
    {
      kind: "say",
      id: "s-ketsed",
      phase: "Two minutes later",
      text:
        "She becomes apneic. SpO2 falls to 72 percent. Blood pressure is 74/40. The respiratory therapist is bagging with high resistance. You now have a crash airway instead of a planned one.",
      next: "q-rsi",
    },
    {
      kind: "question",
      id: "q-rsi",
      phase: "Airway",
      prompt: "Walk me through your intubation. Drugs and doses, tube size, and what you do to prevent collapse after the tube goes in.",
      seconds: 120,
      modelAnswer: [
        "Preoxygenate with the nebulizer running. Sit her up until induction.",
        "Fluid bolus 500 mL to 1 L before induction. Push dose epinephrine or phenylephrine ready.",
        "Ketamine 1.5 mg/kg IV, about 90 mg, for its bronchodilating effect.",
        "Rocuronium 1.2 mg/kg IV, about 70 mg.",
        "Largest tube possible, 8.0 or larger, to reduce resistance and allow bronchoscopy.",
        "Gentle bagging at a slow rate. Avoid breath stacking after the tube goes in.",
      ],
      rubric: ["as-r3", "as-r4", "as-r5"],
      choices: [
        {
          id: "c-ketamine",
          label: "I gave a 1 L fluid bolus, then ketamine 90 mg and rocuronium 70 mg, placed an 8.0 tube and bagged slowly at 8 to 10 breaths a minute.",
          next: "q-vent",
          quality: "strong",
          feedback:
            "This is a sound plan. Ketamine keeps sympathetic tone and relaxes bronchial smooth muscle. A large tube lowers airway resistance. Slow bagging gives time to exhale and prevents dynamic hyperinflation.",
        },
        {
          id: "c-propofol",
          label: "I used propofol 2 mg/kg and rocuronium without any fluid first.",
          next: "s-propofol",
          quality: "partial",
          feedback:
            "Propofol is a bronchodilator but it drops preload and pressure. She is already volume depleted from hours of work of breathing. Positive pressure then lowers venous return further. Resuscitate first and use ketamine or a reduced propofol dose.",
        },
        {
          id: "c-fastbag",
          label: "I placed a 7.0 tube and bagged fast at about 30 a minute to blow off her CO2.",
          next: "s-fastbag",
          quality: "unsafe",
          feedback:
            "Fast bagging is the classic cause of arrest after intubation in asthma. Air is trapped because each breath starts before the last one is exhaled. Pressure in the chest rises and venous return falls. Use a slow rate and accept a high CO2.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "After intubation",
      text: "Her blood pressure falls to 72/38 after induction. The nurse gives a 1 L bolus and push dose phenylephrine 100 mcg. Pressure recovers to 94/52.",
      next: "q-vent",
    },
    {
      kind: "say",
      id: "s-fastbag",
      phase: "After intubation",
      text:
        "Her chest is barrel shaped and barely moving. Blood pressure is 62/30. The respiratory therapist disconnects the bag and you hear a long hiss of trapped air. Pressure climbs back to 90/50.",
      next: "q-vent",
    },
    {
      kind: "question",
      id: "q-vent",
      phase: "Ventilator",
      prompt: "The respiratory therapist asks for your initial ventilator settings. What do you order and what will you monitor?",
      seconds: 90,
      modelAnswer: [
        "Volume control. Tidal volume 6 to 8 mL/kg predicted body weight, about 350 to 450 mL.",
        "Low rate of 10 to 12 breaths a minute.",
        "High inspiratory flow of 60 to 80 L/min to lengthen expiration. I to E of 1 to 4 or longer.",
        "PEEP low, 0 to 5 cmH2O. FiO2 to SpO2 93 to 95 percent.",
        "Plateau pressure under 30 cmH2O. Check for auto PEEP with an expiratory hold.",
        "Permissive hypercapnia. Accept pH above 7.15 to 7.20.",
      ],
      rubric: ["as-m5", "as-m6"],
      next: "s-crash",
    },
    {
      kind: "say",
      id: "s-crash",
      phase: "Ten minutes after intubation",
      text:
        "The alarm sounds. Blood pressure 66/34. Heart rate 148. SpO2 84 percent. Peak pressure 54 cmH2O and plateau 36 cmH2O. Expiratory hold shows auto PEEP of 18 cmH2O. " +
        "The respiratory therapist says the rate was turned up to 22 by the ICU resident to fix the CO2.",
      next: "q-crash",
    },
    {
      kind: "question",
      id: "q-crash",
      phase: "Crash on the ventilator",
      prompt: "What is happening and what do you do right now?",
      seconds: 90,
      modelAnswer: [
        "Dynamic hyperinflation with auto PEEP causing obstructive shock.",
        "Disconnect from the ventilator and let her exhale fully. Gentle manual chest pressure can help.",
        "Rule out tension pneumothorax with lung ultrasound. Use DOPES for other causes.",
        "Reconnect at a lower rate of 8 to 10 and a shorter inspiratory time.",
        "Fluid bolus and vasopressor while the pressure recovers.",
      ],
      rubric: ["as-r6", "as-a4"],
      choices: [
        {
          id: "c-disconnect",
          label: "I disconnected the tube from the ventilator, pressed on her chest to empty it, checked for lung sliding on both sides, and restarted at a rate of 10.",
          next: "q-ongoing",
          quality: "strong",
          feedback:
            "This is right. Disconnection is both diagnostic and therapeutic for breath stacking. Ultrasound quickly checks for a pneumothorax. The fix is less ventilation, not more.",
        },
        {
          id: "c-needle",
          label: "I did bilateral needle decompressions straight away.",
          next: "s-needle",
          quality: "partial",
          feedback:
            "Tension pneumothorax is on the list and must be excluded. Here the auto PEEP measurement points to breath stacking. Disconnecting takes seconds and fixes it. Needles in hyperinflated lungs without evidence can cause a pneumothorax.",
        },
        {
          id: "c-norepi",
          label: "I started norepinephrine and increased the rate to 26 to bring the CO2 down.",
          next: "s-norepi",
          quality: "unsafe",
          feedback:
            "A higher rate worsens air trapping and will cause arrest. Vasopressors do not fix obstructive shock from hyperinflation. The examiner wanted disconnection and a slower rate.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-needle",
      phase: "Two minutes later",
      text:
        "There is no rush of air from either needle. Her pressure is 60/30. The respiratory therapist disconnects the circuit and holds pressure on her chest. After a long exhale the pressure climbs to 96/54. Lung ultrasound now shows sliding on both sides.",
      next: "q-ongoing",
    },
    {
      kind: "say",
      id: "s-norepi",
      phase: "One minute later",
      text:
        "She loses her pulse. The monitor shows pulseless electrical activity. The respiratory therapist disconnects the ventilator. With a long exhale and one round of CPR she regains a pulse. Rate is reset to 10.",
      next: "q-ongoing",
    },
    {
      kind: "question",
      id: "q-ongoing",
      phase: "Stabilized",
      prompt: "She is now stable on a rate of 10. Gas shows pH 7.18 and pCO2 78 mmHg. The resident wants to turn the rate back up. What do you say, and what ongoing therapy does she need?",
      seconds: 90,
      modelAnswer: [
        "Accept permissive hypercapnia while pH is above about 7.15 and plateau is under 30.",
        "Continue in line salbutamol and ipratropium. Continue IV steroids.",
        "Sedate deeply with ketamine and propofol infusions. Avoid prolonged paralysis with steroids.",
        "Replace potassium and phosphate.",
        "Consider IV epinephrine or inhaled anesthetic agents in the ICU if refractory. ECMO for refractory hypercapnia.",
      ],
      rubric: ["as-m6", "as-c1", "as-m7"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition and debrief",
      prompt: "Her mother arrives. Then the team wants a quick debrief. What do you tell her mother, and what will you make sure happens before this patient ever goes home?",
      seconds: 90,
      modelAnswer: [
        "Honest update in plain words: a life threatening asthma attack, on a breathing machine in the ICU.",
        "Admit to ICU. Hand over the airway details and ventilator issues.",
        "This is near fatal asthma. She stopped her inhaled steroid and overused salbutamol.",
        "Before discharge: inhaled corticosteroid containing controller, written action plan, drug coverage, follow up with respirology within weeks.",
        "Short team debrief on the ventilator crash and the rate change.",
      ],
      rubric: ["as-c2", "as-d1", "as-d2", "as-l2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The ICU team takes her upstairs on a rate of 10 with ketamine and propofol running. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "as-r1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Identifies life threatening asthma from drowsiness, single word speech, quiet chest and SpO2 under 92 percent.",
      points: 2,
      teaching: "Altered mental status and a silent chest are late signs. They mean the patient is tiring and close to arrest.",
      source: "gina",
    },
    {
      id: "as-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives nebulized salbutamol 5 mg back to back or continuously with ipratropium 0.5 mg every 20 minutes for three doses.",
      points: 2,
      teaching: "Adding ipratropium to salbutamol in severe asthma reduces admissions. Continuous nebulization is reasonable when the attack is severe.",
      source: "gina",
    },
    {
      id: "as-m2",
      competency: "management",
      criterion: "plan",
      text: "Gives systemic corticosteroid within the first hour, such as prednisone 50 mg orally or methylprednisolone 60 to 125 mg IV.",
      points: 2,
      teaching: "Steroids take hours to work so they should be given early. Oral and IV routes work equally well if the patient can swallow.",
      source: "gina",
    },
    {
      id: "as-m3",
      competency: "management",
      criterion: "plan",
      text: "Gives magnesium sulfate 2 g IV over 20 minutes.",
      points: 2,
      teaching: "IV magnesium reduces admission in adults with severe exacerbations. Watch for hypotension and flushing.",
      source: "mag",
    },
    {
      id: "as-a1",
      competency: "assessment",
      criterion: "data",
      text: "Recognizes a normal or rising pCO2 in acute asthma as a sign of respiratory fatigue.",
      points: 2,
      critical: true,
      teaching: "A patient breathing at 30 should blow off CO2. A pCO2 at or above 45 mmHg means ventilatory failure is starting.",
      source: "gina",
    },
    {
      id: "as-a2",
      competency: "assessment",
      criterion: "data",
      text: "Attributes lactate, hypokalemia and hypophosphatemia at least partly to beta agonist therapy and replaces potassium.",
      points: 1,
      teaching: "High dose salbutamol shifts potassium into cells and raises lactate. Replace potassium to protect against arrhythmia.",
      source: "gina",
    },
    {
      id: "as-a3",
      competency: "assessment",
      criterion: "data",
      text: "Obtains a chest X ray or lung ultrasound to exclude pneumothorax and other complications.",
      points: 1,
      teaching: "Pneumothorax and pneumomediastinum are complications to exclude. A chest X ray is not needed to diagnose asthma itself.",
      source: "gina",
    },
    {
      id: "as-m4",
      competency: "management",
      criterion: "plan",
      text: "Considers epinephrine 0.5 mg IM or a titrated IV infusion as a bridge in near arrest asthma.",
      points: 1,
      teaching: "GINA does not recommend routine epinephrine outside anaphylaxis. Many emergency physicians still use it as a rescue bridge in near arrest asthma while the airway is prepared.",
      source: "gina",
    },
    {
      id: "as-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Decides to intubate for falling level of consciousness and rising pCO2 and does not start NIV in an obtunded patient.",
      points: 3,
      critical: true,
      teaching: "NIV evidence in asthma is weak and it needs an alert patient. Drowsiness with rising CO2 means a definitive airway.",
      source: "gina",
    },
    {
      id: "as-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Calls anesthesia and ICU early and assigns the most experienced operator to the airway.",
      points: 1,
      teaching: "Intubating a severe asthmatic is one of the highest risk airways in the ED. Get help before the crash, not after.",
      source: "gina",
    },
    {
      id: "as-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Gives a fluid bolus before induction and has a push dose vasopressor ready.",
      points: 2,
      teaching: "These patients are dry and their chests are full of trapped air. Induction plus positive pressure often drops the pressure.",
      source: "gina",
    },
    {
      id: "as-r4",
      competency: "resuscitation",
      criterion: "plan",
      text: "Uses ketamine 1.5 to 2 mg/kg IV for induction with rocuronium 1.2 mg/kg IV and the largest possible tube, 8.0 or larger.",
      points: 2,
      teaching: "Ketamine has bronchodilating properties and preserves blood pressure. A bigger tube means less resistance and allows bronchoscopy.",
      source: "gina",
    },
    {
      id: "as-r5",
      competency: "resuscitation",
      criterion: "plan",
      text: "Bags slowly after intubation at 6 to 10 breaths a minute to avoid breath stacking.",
      points: 2,
      teaching: "The bag is often more dangerous than the tube. Allow full exhalation between breaths.",
      source: "gina",
    },
    {
      id: "as-m5",
      competency: "management",
      criterion: "plan",
      text: "Orders low rate, low tidal volume, high flow ventilator settings with a long expiratory time and low PEEP.",
      points: 2,
      teaching: "Start around 6 to 8 mL/kg, a rate of 10 to 12 and an I to E of 1 to 4. Keep plateau pressure under 30 cmH2O.",
      source: "gina",
    },
    {
      id: "as-m6",
      competency: "management",
      criterion: "plan",
      text: "Accepts permissive hypercapnia with pH above about 7.15 rather than raising the rate.",
      points: 2,
      teaching: "Hypercapnia is well tolerated. Air trapping is not. Chasing a normal CO2 causes barotrauma and shock.",
      source: "gina",
    },
    {
      id: "as-r6",
      competency: "resuscitation",
      criterion: "diagnosis",
      text: "Recognizes dynamic hyperinflation as the cause of post intubation shock and disconnects the ventilator to allow exhalation.",
      points: 3,
      critical: true,
      teaching: "Hypotension soon after intubation in asthma is auto PEEP until proven otherwise. Disconnect, let the chest empty, then slow the rate.",
      source: "gina",
    },
    {
      id: "as-a4",
      competency: "assessment",
      criterion: "approach",
      text: "Excludes tension pneumothorax with lung ultrasound or exam before or during treatment of hyperinflation.",
      points: 1,
      teaching: "Barotrauma is a real risk in ventilated asthmatics. Lung sliding on both sides makes tension pneumothorax unlikely.",
      source: "gina",
    },
    {
      id: "as-m7",
      competency: "management",
      criterion: "plan",
      text: "Continues bronchodilators and steroids after intubation, provides deep sedation, and names rescue options for refractory cases.",
      points: 1,
      teaching: "Intubation does not treat the asthma. Refractory cases may need IV epinephrine, inhaled anesthetics or ECMO in the ICU.",
      source: "gina",
    },
    {
      id: "as-c1",
      competency: "communication",
      criterion: "plan",
      text: "Explains permissive hypercapnia clearly and respectfully to the resident who wants to increase the rate.",
      points: 1,
      teaching: "Teach with the numbers: auto PEEP and plateau pressure. A shared target prevents the next crash.",
      source: "gina",
    },
    {
      id: "as-c2",
      competency: "communication",
      criterion: "plan",
      text: "Gives her mother an honest plain language update on the severity and the ICU plan.",
      points: 1,
      teaching: "Say what happened, what is being done and what comes next. Avoid jargon like auto PEEP with families.",
      source: "gina",
    },
    {
      id: "as-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to ICU with a clear handover of airway, ventilator settings and the hyperinflation event.",
      points: 1,
      teaching: "The receiving team must know the rate that caused shock. Handover prevents repeat errors.",
      source: "gina",
    },
    {
      id: "as-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Identifies near fatal asthma risk factors and ensures an inhaled corticosteroid controller, action plan, drug coverage and specialist follow up before discharge.",
      points: 2,
      critical: true,
      teaching: "Prior intubation, frequent visits, no inhaled steroid and heavy salbutamol use predict death from asthma. SABA only treatment is no longer recommended.",
      source: "cts",
    },
    {
      id: "as-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Leads a brief team debrief after the ventilator crash focused on the system cause.",
      points: 1,
      teaching: "A short debrief turns a near miss into shared learning. Focus on the rate change, not on blame.",
      source: "gina",
    },
  ],
  sources: [
    {
      id: "gina",
      citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2024 update.",
      url: "https://ginasthma.org/reports/",
    },
    {
      id: "cts",
      citation:
        "Yang CL, Hicks EA, Mitchell P, et al. Canadian Thoracic Society 2021 Guideline update. Diagnosis and management of asthma in preschoolers, children and adults. Canadian Journal of Respiratory, Critical Care, and Sleep Medicine. 2021.",
    },
    {
      id: "mag",
      citation:
        "Kew KM, Kirtchuk L, Michell CI. Intravenous magnesium sulfate for treating adults with acute asthma in the emergency department. Cochrane Database of Systematic Reviews. 2014.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
