// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const ruralChildWheezeTiring: OralCase = {
  id: "rural-child-wheeze-tiring",
  title: "A boy who cannot finish a sentence",
  blueprint: "resp",
  alsoCovers: ["peds", "resus", "id"],
  priorityTopic: "asthma-copd",
  keyFeatures: [
    { topic: "asthma-copd", n: 2 },
    { topic: "asthma-copd", n: 3 },
    { topic: "asthma-copd", n: 4 },
    { topic: "asthma-copd", n: 5 },
    { topic: "asthma-copd", n: 6 },
    { topic: "asthma-copd", n: 7 },
  ],
  summary: "A school age boy with a cold and a long history of wheeze arrives in a small hospital working hard to breathe.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a rural hospital when the following patient arrives. The nearest PICU is a 75 minute flight away. " +
    "A 9 year old boy is carried in by his grandmother because he is struggling to breathe.",
  card: {
    vitals: {
      temperature: "37.9°C oral",
      pulse: "146/minute",
      resp: "40/minute",
      bp: "108/64 mmHg",
      o2sat: "89% on room air",
      weight: "28 kg (62 lb)",
    },
    medications: "Salbutamol inhaler as needed. Fluticasone 100 mcg twice daily.",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Runny nose and cough for 3 days. Wheezy since last night. His grandmother has given 2 puffs of salbutamol every hour since 03:00 without a spacer, because it was lost. It is now 14:00. " +
        "He could not finish his lunch. No choking episode, no new food, no insect sting. Felt warm this morning.",
    },
    {
      id: "asthma-history",
      label: "Asthma history",
      result:
        "Diagnosed at age 4. Two emergency visits and one ward admission in the past year. Admitted to a PICU at age 7 on high flow oxygen. Never intubated. " +
        "Two courses of oral prednisolone in the past 6 months, the last one 5 weeks ago. Wakes coughing about 3 nights a week.",
    },
    {
      id: "meds",
      label: "Medications and adherence",
      result:
        "Fluticasone 100 mcg twice daily is prescribed, but the last refill ran out 3 months ago and was not renewed because of cost. He uses about 2 salbutamol inhalers a month. No written action plan at home.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Eczema and allergic rhinitis. No heart disease. Immunizations up to date. No influenza vaccine this season.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Lives with his grandmother, who is his legal guardian, and her husband, who smokes indoors. Wood stove heat. The family doctor visits the community once a month. His grandmother pays for his medicines herself.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "You are the only physician in house. Two nurses. A respiratory therapist is on call from home, 20 minutes away. High flow nasal cannula, CPAP and BiPAP with pediatric masks are available. " +
        "Pediatric video laryngoscope, ketamine and rocuronium in stock. Portable chest X-ray and a point of care ultrasound. Critical care air transport through the provincial service.",
    },
    {
      id: "general",
      label: "General appearance",
      result: "Sitting upright and leaning forward. Speaks 2 or 3 words at a time. Anxious and alert. Lips pink on oxygen. Capillary refill 2 seconds.",
    },
    {
      id: "chest",
      label: "Chest exam",
      result:
        "Suprasternal and scalene retractions. Widespread decrease in air entry. Inspiratory and expiratory wheeze. Air entry equal on both sides. Trachea midline. No crackles. No subcutaneous emphysema.",
    },
    {
      id: "other-exam",
      label: "Other exam",
      result: "No stridor. No hives or lip swelling. Throat mildly red. Heart sounds normal, no gallop. Liver not enlarged.",
    },
    {
      id: "pram",
      label: "PRAM on arrival",
      result: "Suprasternal 2, scalene 2, wheeze 2, air entry 2, oxygen saturation 2. Total 10 out of 12.",
    },
    {
      id: "vbg1",
      label: "Venous blood gas on arrival",
      result: "pH 7.38. pCO2 39 mmHg. Bicarbonate 22 mmol/L. Lactate 1.9 mmol/L.",
    },
    {
      id: "lytes",
      label: "Electrolytes and glucose at 1 hour",
      result: "Sodium 138 mmol/L. Potassium 3.1 mmol/L. Glucose 10.4 mmol/L. Lactate 3.8 mmol/L.",
    },
    {
      id: "hour1",
      label: "Reassessment after the first hour",
      result: "PRAM 9: suprasternal 2, scalene 2, wheeze 2, air entry 1 (now reduced at the bases only), saturation 2 (89 percent on a brief room air check). SpO2 93 percent on 8 L/min by mask. Heart rate 168/minute. Respiratory rate 44/minute. Still speaking in words. Blood pressure 104/60 mmHg.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "14:00",
      text:
        "The nurse puts him in the resuscitation room. She says, 'He looks bad. His grandmother has been giving his puffer all night. What do you want first?'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First twenty minutes",
      prompt: "What do you do in the first 20 minutes? Give doses.",
      seconds: 90,
      modelAnswer: [
        "Monitor, oxygen to keep SpO2 over 92 percent. Call the respiratory therapist in.",
        "Salbutamol 10 puffs by MDI with spacer, or 5 mg nebulized, every 20 minutes for 3 doses. Weight is over 20 kg.",
        "Ipratropium 4 puffs, or 250 mcg nebulized, with each of the first 3 salbutamol doses.",
        "Dexamethasone 0.6 mg/kg PO, maximum 12 mg, after the first bronchodilator.",
        "Score severity with PRAM. Start treatment before any test.",
        "Brief history while treating.",
      ],
      rubric: ["as-m1", "as-m2", "as-a1"],
      choices: [
        {
          id: "c-bundle",
          label:
            "I gave oxygen to keep his saturation over 92 percent, salbutamol 10 puffs with a spacer alternating with ipratropium 4 puffs every 20 minutes for 3 rounds, dexamethasone 12 mg by mouth, and scored his PRAM at 10.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Correct. PRAM 10 is a severe exacerbation. Salbutamol and ipratropium together in the first hour reduce admissions. Dexamethasone 0.6 mg/kg is capped at 12 mg, and early steroids are key.",
        },
        {
          id: "c-saba-only",
          label: "I gave salbutamol 5 mg by nebulizer and planned to decide on steroids after seeing how he responded.",
          next: "s-saba-only",
          quality: "partial",
          feedback:
            "Salbutamol alone is not enough for a severe exacerbation. Ipratropium should be added for the first 3 doses. Steroids take hours to work, so give them in the first hour rather than waiting to see the response.",
        },
        {
          id: "c-tests-first",
          label: "I ordered a chest X-ray and a blood gas first, so I could confirm the diagnosis before treating.",
          next: "s-saba-only",
          quality: "unsafe",
          feedback:
            "Treatment starts before the diagnosis is confirmed in acute wheeze with hypoxia. Bronchodilators, oxygen and steroids should be running within minutes. Tests can be done while he is treated.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-saba-only",
      phase: "14:25",
      text:
        "His saturation falls to 86 percent and he can now say only one word at a time. The nurse asks whether you want ipratropium and a steroid. You give both and start salbutamol every 20 minutes.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "While he is treated, what history do you want from his grandmother?",
      seconds: 75,
      modelAnswer: [
        "Previous PICU admission or intubation. Emergency visits and admissions in the past year.",
        "Recent oral steroids and how often.",
        "Controller use and adherence. Salbutamol use, spacer and inhalers per month.",
        "Trigger and mimics: viral symptoms, fever, choking, food or sting, first episode or not.",
        "Smoke exposure, cost of medicines, who looks after him and access to follow up.",
      ],
      rubric: ["as-h1", "as-h2", "as-h3", "as-h4"],
      next: "q-severity",
    },
    {
      kind: "question",
      id: "q-severity",
      phase: "Severity",
      prompt: "How do you judge how sick he is, and what else could be making him worse?",
      seconds: 60,
      modelAnswer: [
        "PRAM 10 of 12 is severe. Reassess PRAM after each hour.",
        "History of PICU care, frequent visits, recent steroids and no controller put him at high risk.",
        "Danger signs: drowsiness, quiet chest, falling effort, cyanosis and rising pCO2.",
        "A normal pCO2 of 39 in a child breathing 40 times a minute is a warning sign, not reassurance.",
        "Coexisting problems: pneumothorax, pneumonia, foreign body, anaphylaxis. Chest X-ray or ultrasound if he worsens or fails to improve.",
      ],
      rubric: ["as-a1", "as-a2", "as-a3"],
      next: "s-hour1",
    },
    {
      kind: "say",
      id: "s-hour1",
      phase: "15:05",
      text:
        "After three rounds of salbutamol and ipratropium and dexamethasone, his PRAM is 9. SpO2 is 93 percent on 8 L/min by mask. Heart rate 168/minute. He is still speaking in words.",
      next: "q-next",
    },
    {
      kind: "question",
      id: "q-next",
      phase: "Not improving",
      prompt: "What is your next step?",
      seconds: 90,
      modelAnswer: [
        "Persistent severe distress after the first hour. Escalate now.",
        "Magnesium sulfate 50 mg/kg IV, so 1400 mg, over at least 20 minutes. Check blood pressure every 5 minutes.",
        "Continuous nebulized salbutamol.",
        "IV access, fluid bolus if poorly perfused. Check potassium and glucose.",
        "Call the pediatric referral centre and the transport service now. Do not wait for him to tire.",
        "Avoid sedatives.",
      ],
      rubric: ["as-m3", "as-l1"],
      choices: [
        {
          id: "c-mag",
          label:
            "I gave magnesium sulfate 1400 mg IV over 20 minutes with blood pressure checks, started continuous nebulized salbutamol, checked his potassium and called the referral centre and the transport service.",
          next: "s-tiring",
          quality: "strong",
          feedback:
            "Correct. A PRAM of 8 or more after the first hour means persistent severe asthma. IV magnesium 50 mg/kg, to a maximum of 2 g, is the next step. In a rural hospital, call the referral centre early because transport takes time.",
        },
        {
          id: "c-wait",
          label: "I continued salbutamol puffs every hour and planned to call the referral centre if he was no better in 2 hours.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "Hourly salbutamol is not enough for a PRAM of 9 after the first hour. He needs magnesium and continuous salbutamol now. Waiting 2 hours to call adds to a transport time that is already long.",
        },
        {
          id: "c-sedate",
          label: "He seemed very anxious, so I gave midazolam 1 mg IV to settle him.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "Sedation can remove the respiratory drive that is keeping him alive. Anxiety in severe asthma is a sign of hypoxia and distress, not a problem to treat with a sedative. Treat the bronchospasm instead.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "15:30",
      text:
        "His saturation drifts to 88 percent and he slumps against the nurse. She asks whether you want magnesium. You give magnesium sulfate 1400 mg IV, start continuous salbutamol and call the referral centre.",
      next: "s-tiring",
    },
    {
      kind: "say",
      id: "s-tiring",
      phase: "15:45",
      text:
        "The transport team has launched and will be 75 minutes. He is now drowsy and opens his eyes to voice. His chest is quieter and his breaths are shallow. SpO2 88 percent on a non rebreather. " +
        "Venous gas: pH 7.24, pCO2 58 mmHg.",
      next: "q-failure",
    },
    {
      kind: "question",
      id: "q-failure",
      phase: "Tiring",
      prompt: "What is happening, and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Impending respiratory failure: drowsy, quiet chest, falling effort, rising pCO2.",
        "Stepwise support: high flow nasal cannula, then CPAP 5 to 10 cm H2O, then BiPAP, with salbutamol continued in line.",
        "Respiratory therapist at the bedside. Update the referral centre for advice, including IV salbutamol.",
        "Fluid bolus for perfusion. Check glucose.",
        "Prepare for intubation as a last resort: ketamine, rocuronium, low rate, long expiratory time, a fluid bolus ready.",
        "Watch for pneumothorax on positive pressure.",
      ],
      rubric: ["as-a2", "as-m4", "as-l2"],
      choices: [
        {
          id: "c-niv",
          label:
            "I recognized impending respiratory failure, put him on CPAP then BiPAP with the respiratory therapist and in line salbutamol, gave a fluid bolus, called the referral centre back and prepared ketamine and rocuronium in case intubation became necessary.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Correct. Drowsiness, a quiet chest and a rising pCO2 mean he is tiring. Noninvasive support can buy time and avoid intubation, which is high risk in asthma. Having the drugs ready and a plan is good leadership.",
        },
        {
          id: "c-intubate-propofol",
          label: "I intubated him right away with propofol and rocuronium and ventilated him at a rate of 30.",
          next: "s-propofol",
          quality: "unsafe",
          feedback:
            "Intubation in severe asthma is high risk and rarely needed. Propofol and a fast rate cause hypotension and breath stacking. Try noninvasive support first, and if you must intubate use ketamine, a low rate and a long expiratory time.",
        },
        {
          id: "c-nrb",
          label: "I kept him on the non rebreather and waited for the transport team.",
          next: "s-intubate",
          quality: "unsafe",
          feedback:
            "Oxygen alone does not support a tiring child. Escalate through high flow, CPAP and BiPAP. A 75 minute wait is too long to watch a rising pCO2.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-intubate",
      phase: "16:00",
      text:
        "His blood pressure falls to 78/40 mmHg and his saturation will not rise above 84 percent. The respiratory therapist arrives and suggests BiPAP with continuous salbutamol. You give a fluid bolus and start BiPAP.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "16:00",
      text:
        "After propofol his blood pressure falls to 62/30 mmHg. Bagged at 30 breaths a minute, his chest stays overinflated and his saturation will not rise. " +
        "The respiratory therapist arrives and disconnects the circuit to let him breathe out, and his pressure recovers. You give a fluid bolus and set a rate of 14 with a long expiratory time.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "16:30",
      text:
        "On positive pressure support he had begun to improve. Over 15 minutes his saturation falls to 85 percent on 60 percent oxygen. Temperature 39.3°C, heart rate 164/minute, blood pressure 100/58 mmHg. " +
        "The right base is dull with bronchial breathing. Your ultrasound shows lung sliding on both sides, and a solid looking right lower lobe with moving air bronchograms and a small effusion.",
      next: "q-worse",
    },
    {
      kind: "question",
      id: "q-worse",
      phase: "A new problem",
      prompt: "What is happening, and what do you do?",
      seconds: 75,
      modelAnswer: [
        "A coexisting right lower lobe pneumonia, likely bacterial after a viral illness, now with respiratory failure.",
        "Lung sliding on both sides makes a pneumothorax unlikely. Do not put a needle in his chest.",
        "New high fever and air bronchograms that move with breathing favour pneumonia over a mucus plug with collapse.",
        "Blood culture, then a third generation cephalosporin: ceftriaxone 50 mg/kg IV, so 1400 mg, now.",
        "Raise the oxygen and keep the noninvasive support or ventilator settings safe for asthma. Continue salbutamol.",
        "Portable chest X-ray to confirm. Update the referral centre and the transport team.",
      ],
      rubric: ["as-a4", "as-m5"],
      choices: [
        {
          id: "c-pneumonia",
          label:
            "I diagnosed a right lower lobe pneumonia, noted that lung sliding on both sides ruled against a pneumothorax, drew a blood culture, gave ceftriaxone 1400 mg IV, raised his oxygen and updated the transport team.",
          next: "q-grandmother",
          quality: "strong",
          feedback:
            "Correct. New high fever, focal bronchial breathing and a consolidated lobe on ultrasound mean pneumonia on top of his asthma. A child with pneumonia and respiratory failure gets a third generation cephalosporin, ceftriaxone 50 to 100 mg/kg/day. Lung sliding on both sides argues against a pneumothorax.",
        },
        {
          id: "c-more-pressure",
          label: "I put the fall down to worse bronchospasm, raised the support pressures and asked the referral centre about IV salbutamol.",
          next: "s-missed",
          quality: "partial",
          feedback:
            "More bronchodilator does not treat the new problem. The fever, the focal signs and the ultrasound point to pneumonia, which needs antibiotics now. Higher pressures in an overinflated chest also raise the risk of barotrauma.",
        },
        {
          id: "c-needle",
          label: "I diagnosed a tension pneumothorax and put a needle into the right side of his chest.",
          next: "s-missed",
          quality: "unsafe",
          feedback:
            "His blood pressure is holding and lung sliding is present on both sides, so this is not a tension pneumothorax. A needle in an overinflated lung can cause the pneumothorax you feared. The focal signs and fever point to pneumonia, which needs antibiotics now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-missed",
      phase: "16:45",
      text:
        "The portable chest X-ray shows right lower lobe consolidation with a small effusion. His temperature is 39.6°C. The transport physician on the phone asks whether he has had antibiotics. You draw a blood culture and give ceftriaxone 1400 mg IV.",
      next: "q-grandmother",
    },
    {
      kind: "question",
      id: "q-grandmother",
      phase: "His grandmother",
      prompt: "He is more stable now. His grandmother asks what she did wrong. What do you tell her, and what needs to change at home?",
      seconds: 60,
      modelAnswer: [
        "She did not cause this. Explain what happened and the transfer plan.",
        "His asthma has been poorly controlled. He needs his daily inhaled steroid every day.",
        "Raise smoke exposure in the home. Offer smoking cessation help for her husband.",
        "Ask about cost. Look for coverage options with the pharmacist or social work.",
        "He needs a spacer, inhaler teaching, a written action plan and follow up within a week of discharge.",
      ],
      rubric: ["as-c1"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "The transport team arrives. Give your handover.",
      seconds: 60,
      modelAnswer: [
        "9 years, 28 kg, severe asthma exacerbation with impending respiratory failure.",
        "Risk factors: previous PICU, no controller for 3 months, recent oral steroids.",
        "Drugs and times: salbutamol, ipratropium, dexamethasone 12 mg, magnesium 1400 mg, continuous salbutamol.",
        "Right lower lobe pneumonia: blood culture drawn, ceftriaxone time. Current support and settings.",
        "Latest vital signs, blood gas, potassium 3.1 and glucose. Guardian contact details.",
      ],
      rubric: ["as-c2", "as-l2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He is flown to the PICU, where his blood culture grows Streptococcus pneumoniae. He is weaned off respiratory support over 2 days and goes home on day 6 with a spacer, daily inhaled steroid and a written action plan. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "as-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about previous PICU care or intubation, emergency visits and admissions in the past year, and recent oral steroid courses.",
      points: 2,
      teaching: "A history of intensive care or intubation, frequent visits and recent oral steroids marks a child at high risk of a fatal attack.",
      source: "gina",
    },
    {
      id: "as-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about controller adherence, salbutamol use, spacer use and inhalers per month.",
      points: 2,
      teaching: "Not using an inhaled steroid and using a lot of salbutamol both raise the risk of severe exacerbations and death.",
      source: "gina",
    },
    {
      id: "as-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the trigger and mimics: viral symptoms, fever, choking, a new food or a sting.",
      points: 1,
      teaching: "Viral infection is the usual trigger. A choking episode or an allergen exposure points to a foreign body or anaphylaxis, which need different treatment.",
      source: "trekk",
    },
    {
      id: "as-h4",
      competency: "communication",
      criterion: "history",
      text: "Asks about smoke exposure at home, who cares for him, the cost of his medicines and access to follow up.",
      points: 1,
      teaching: "Second hand smoke, cost barriers and poor access to follow up drive repeat exacerbations. They must be found to be fixed.",
      source: "cps-asthma",
    },
    {
      id: "as-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Scores severity with PRAM, 10 of 12 on arrival, and rescores after the first hour.",
      points: 2,
      teaching: "PRAM uses suprasternal and scalene retractions, wheeze, air entry and oxygen saturation. A score of 8 to 12 is severe.",
      source: "pram",
    },
    {
      id: "as-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes impending respiratory failure: drowsiness, a quiet chest, shallow breathing and a rising pCO2. Notes that a normal pCO2 in a child breathing fast is a warning sign.",
      points: 3,
      critical: true,
      teaching: "A child with severe asthma should have a low pCO2. A normal or rising pCO2 with drowsiness means tiring and the need for ventilatory support.",
      source: "trekk",
    },
    {
      id: "as-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers coexisting problems such as pneumothorax, pneumonia, foreign body and anaphylaxis, and uses chest X-ray or ultrasound when he fails to improve.",
      points: 2,
      teaching: "Failure to improve or sudden worsening in asthma should prompt a search for barotrauma or another diagnosis.",
      source: "trekk",
    },
    {
      id: "as-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes a coexisting right lower lobe pneumonia from new fever, focal bronchial breathing and consolidation on ultrasound, and uses lung sliding on both sides to set aside a pneumothorax.",
      points: 2,
      teaching: "Deterioration or failure to improve in asthma calls for a search for a second problem with chest X-ray or ultrasound. Focal signs and a consolidated lobe point to pneumonia, and lung sliding at the probe makes a pneumothorax there unlikely.",
      source: "trekk",
    },
    {
      id: "as-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Starts oxygen, salbutamol 10 puffs or 5 mg nebulized and ipratropium 4 puffs or 250 mcg every 20 minutes for 3 doses before any test.",
      points: 3,
      critical: true,
      teaching: "Children 20 kg or more get salbutamol 10 puffs by MDI with spacer or 5 mg nebulized. Ipratropium is added for the first 3 doses in moderate to severe asthma.",
      source: "trekk",
    },
    {
      id: "as-m2",
      competency: "management",
      criterion: "management",
      text: "Gives dexamethasone 0.6 mg/kg by mouth, maximum 12 mg, in the first hour.",
      points: 2,
      teaching: "The oral route is preferred unless he cannot swallow or is in impending respiratory failure. Early steroids reduce admission.",
      source: "trekk",
    },
    {
      id: "as-m3",
      competency: "management",
      criterion: "management",
      text: "Gives magnesium sulfate 50 mg/kg IV, 1400 mg, over at least 20 minutes for persistent severe asthma, with blood pressure checks.",
      points: 2,
      teaching: "Magnesium is the next step when the PRAM stays 8 or more after the first hour. It can cause hypotension, so monitor and have fluid ready.",
      source: "trekk",
    },
    {
      id: "as-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "Escalates support step by step from high flow to CPAP to BiPAP, avoids sedation, and keeps intubation as a last resort with ketamine and a low rate.",
      points: 2,
      teaching: "Intubation in pediatric asthma is high risk and rarely needed. Noninvasive support is tried first.",
      source: "trekk",
    },
    {
      id: "as-m5",
      competency: "resuscitation",
      criterion: "management",
      text: "Draws a blood culture and gives ceftriaxone 50 mg/kg IV, 1400 mg, without delay, and does not put a needle into a chest with lung sliding.",
      points: 2,
      critical: true,
      teaching: "The CPS advises empiric third generation cephalosporin therapy for pneumonia with respiratory failure or septic shock. Ceftriaxone is 50 to 100 mg/kg/day, maximum 4 g a day.",
      source: "cps-cap",
    },
    {
      id: "as-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls the pediatric referral centre and the transport service as soon as he stays severe after the first hour.",
      points: 2,
      teaching: "In a rural hospital, the long transport time means the referral call comes early, before the child tires.",
      source: "trekk",
    },
    {
      id: "as-l2",
      competency: "leadership",
      criterion: "process",
      text: "Calls in the respiratory therapist, assigns roles, reassesses often and follows potassium and glucose during high dose salbutamol.",
      points: 1,
      teaching: "Repeated salbutamol lowers potassium and raises glucose and lactate. Frequent reassessment catches tiring early.",
      source: "cps-asthma",
    },
    {
      id: "as-c1",
      competency: "communication",
      criterion: "process",
      text: "Reassures his grandmother without blame, and addresses smoke exposure, controller adherence and cost, spacer use, a written action plan and early follow up.",
      points: 2,
      teaching: "Discharge planning starts in the emergency department. A daily inhaled steroid, a spacer, an action plan and follow up within a week prevent the next visit.",
      source: "cps-asthma",
    },
    {
      id: "as-c2",
      competency: "communication",
      criterion: "process",
      text: "Gives the transport team a structured handover with doses, times, procedures, current settings and pending issues.",
      points: 1,
      teaching: "A structured handover avoids repeated or missed doses and alerts the team to the antibiotic timing and the support settings.",
      source: "cps-asthma",
    },
  ],
  sources: [
    {
      id: "trekk",
      citation: "Translating Emergency Knowledge for Kids (TREKK). Pediatric severe asthma exacerbation algorithm. Version 2.0. 2024.",
      url: "https://cms.trekk.ca/wp-content/uploads/2024/02/2024-02-19_Asthma-Algorithm_v2.0-FINAL.pdf",
    },
    {
      id: "cps-asthma",
      citation:
        "Trottier ED, Chan K, Allain D, Chauvin-Kimoff L. Canadian Paediatric Society, Acute Care Committee. Managing an acute asthma exacerbation in children. Position statement. Paediatrics and Child Health. 2021.",
    },
    {
      id: "pram",
      citation: "Ducharme FM, Chalut D, Plotnick L, et al. The Pediatric Respiratory Assessment Measure. A valid clinical score for assessing acute asthma severity from toddlers to teenagers. Journal of Pediatrics. 2008.",
    },
    {
      id: "cps-cap",
      citation:
        "Le Saux N, Robinson JL. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Uncomplicated pneumonia in healthy Canadian children and youth. Practice points for management. Paediatrics and Child Health. 2015. Updated 2024.",
      url: "https://cps.ca/en/documents/position/pneumonia-management-children-youth",
    },
    {
      id: "gina",
      citation: "Global Initiative for Asthma. Global strategy for asthma management and prevention. 2024 update.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
