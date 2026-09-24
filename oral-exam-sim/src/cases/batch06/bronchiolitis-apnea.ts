// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const bronchiolitisApnea: OralCase = {
  id: "bronchiolitis-apnea",
  title: "A baby who went blue in the car seat",
  blueprint: "peds",
  summary: "A 6 week old former preterm infant with a cold and a spell in the car on the way in.",
  durationMinutes: 14,
  stem:
    "You are working in a community emergency department in eastern Ontario in January. There is high flow nasal cannula in the department and an anesthetist on call from home. The nearest pediatric ICU is 90 minutes away by road. " +
    "Noor Haddad is 6 weeks old. She was born at 34 weeks and 5 days. She has had a runny nose and cough for 3 days. " +
    "Triage vitals: heart rate 184, respiratory rate 68, SpO2 86 percent on room air, rectal temperature 37.9 degrees C, capillary refill 2 seconds. Weight 3.9 kg. CTAS 1. " +
    "The triage nurse says: 'Mom says she stopped breathing and went blue in her car seat for about 20 seconds on the way here. She pinked up when mom rubbed her chest. Her big brother goes to daycare and has a cold. She is working hard.'",
  findings: [
    {
      id: "exam",
      label: "Respiratory exam",
      result:
        "Thick clear nasal secretions blocking both nares. Subcostal and intercostal retractions with tracheal tug and head bobbing. " +
        "Fine crackles and scattered expiratory wheeze in both lung fields. Air entry equal. No stridor.",
    },
    {
      id: "observed-apnea",
      label: "Observation on the monitor",
      result:
        "Ten minutes after arrival she has a 15 second pause with SpO2 falling to 79 percent and heart rate dropping to 96. It resolves with gentle stimulation.",
    },
    {
      id: "general",
      label: "General exam",
      result:
        "Anterior fontanelle soft and flat. Mucous membranes tacky. Tone normal between spells. No rash. No bruising. Abdomen soft. Liver edge 1 cm below the costal margin.",
    },
    {
      id: "feeding",
      label: "Feeding and output",
      result: "Breastfed and topped up with expressed milk. Taking less than half her usual volume for 24 hours. Two wet diapers in the last 24 hours.",
    },
    {
      id: "birth",
      label: "Birth and past history",
      result:
        "Born at 34 weeks and 5 days by spontaneous vaginal delivery. Eight days in the NICU for feeding and jaundice. Never ventilated. " +
        "No RSV monoclonal antibody given. Immunizations not yet due. No medications.",
    },
    {
      id: "cough",
      label: "Cough history",
      result: "Wet cough with the cold. No paroxysms, no whoop and no post cough vomiting. No known pertussis contacts.",
    },
    { id: "glucose", label: "Point of care glucose", result: "Capillary glucose 4.6 mmol/L." },
    {
      id: "vbg",
      label: "Capillary blood gas",
      result: "pH 7.26. pCO2 64 mmHg. Bicarbonate 27 mmol/L. Lactate 1.8 mmol/L. Sodium 136 mmol/L.",
    },
    {
      id: "viral",
      label: "Nasopharyngeal swab",
      result: "RSV PCR positive. Influenza and SARS CoV 2 negative. Pertussis PCR sent and pending.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "Hyperinflation with peribronchial thickening. Subsegmental atelectasis in the right upper lobe. No lobar consolidation. No pneumothorax.",
    },
    {
      id: "cbc",
      label: "CBC",
      result: "WBC 10.8 x 10^9/L with a normal differential. Lymphocytes 5.1 x 10^9/L. Hemoglobin 112 g/L. Platelets 402 x 10^9/L.",
    },
    {
      id: "social",
      label: "Family and social",
      result: "Parents are both present. They live 25 minutes away. Mom is tearful and says she should have kept her brother home from daycare.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation bay",
      text: "Noor is on her mother's lap. She is grunting softly and her nose is full of secretions. The nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What do you do in the first ten minutes?",
      seconds: 90,
      modelAnswer: [
        "Keep her in resus on a cardiorespiratory monitor with apnea and SpO2 alarms.",
        "Suction the nares gently before feeds and before judging severity.",
        "Give oxygen by nasal prongs for SpO2 persistently under 90 percent.",
        "Check glucose and a capillary gas.",
        "Recognize high risk features: age under 2 months, prematurity and a witnessed apnea.",
        "Have high flow, bag mask and airway equipment at the bedside.",
      ],
      rubric: ["br-a1", "br-r1", "br-r2"],
      choices: [
        {
          id: "c-support",
          label: "I kept her in resus on a monitor with apnea alarms, suctioned her nose, started nasal prong oxygen and had high flow and a bag mask ready.",
          next: "q-ddx",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. She has three risk factors for apnea and needs continuous monitoring in a resus space. Nasal suction and oxygen for SpO2 under 90 percent are the core supportive steps.",
        },
        {
          id: "c-tests-first",
          label: "I ordered a chest X ray, CBC and blood culture before starting treatment.",
          next: "s-tests-first",
          quality: "partial",
          feedback:
            "Tests do not stabilize her and most are not routine in bronchiolitis. Oxygen, suction and monitoring come first. A chest X ray is reserved for an atypical course or severe disease.",
        },
        {
          id: "c-waiting",
          label: "After suction her SpO2 rose to 91 percent so I moved her to a monitored bed in the waiting area until a ward bed opened.",
          next: "s-waiting",
          quality: "unsafe",
          feedback:
            "An infant under 2 months who was born preterm and has already had an apnea needs continuous monitoring and staff at the bedside. Her next spell may not self resolve. She belongs in resus until she is on a clear plan.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tests-first",
      phase: "Fifteen minutes later",
      text: "While she is in X ray on room air her SpO2 falls to 80 percent and she has a 12 second pause. The technologist calls for help. She is brought back and placed on nasal prong oxygen.",
      next: "q-ddx",
    },
    {
      kind: "say",
      id: "s-waiting",
      phase: "Twenty minutes later",
      text: "A passing nurse finds her dusky with a heart rate of 88. The monitor alarm had been silenced. She recovers with stimulation and brief bag mask breaths and is moved back to resus.",
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "The apnea",
      prompt: "Why did she stop breathing, and what else must you consider as a cause of apnea in an infant this age?",
      seconds: 75,
      modelAnswer: [
        "Central apnea is a known early feature of RSV in young infants, often before severe respiratory distress.",
        "Risk is highest under 2 months of age and in infants born preterm.",
        "Consider pertussis, sepsis, meningitis, hypoglycemia, seizure and abusive head trauma.",
        "Send pertussis PCR if there is any doubt and treat empirically if suspicion is high.",
        "This is not a BRUE because she has a clear symptomatic illness.",
      ],
      rubric: ["br-a2", "br-a3"],
      next: "q-therapies",
    },
    {
      kind: "question",
      id: "q-therapies",
      phase: "Drug therapy",
      prompt: "The resident suggests a trial of salbutamol and a dose of dexamethasone because she is wheezy. What is your plan for medications?",
      seconds: 75,
      modelAnswer: [
        "No bronchodilators. Salbutamol does not change outcomes in bronchiolitis.",
        "No corticosteroids alone or combined with epinephrine.",
        "No routine nebulized epinephrine or hypertonic saline in the ED.",
        "No antibiotics without evidence of bacterial infection.",
        "Supportive care is the treatment: suction, oxygen to keep SpO2 at 90 percent or more, hydration and monitoring.",
      ],
      rubric: ["br-m1", "br-m2"],
      choices: [
        {
          id: "c-no-drugs",
          label: "I declined salbutamol and dexamethasone, explained why, and kept to suction, oxygen to an SpO2 of 90 percent or more, and hydration.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Correct. The CPS statement recommends against bronchodilators, corticosteroids and routine epinephrine in bronchiolitis. Teaching the resident why is part of the answer.",
        },
        {
          id: "c-trial",
          label: "I allowed one salbutamol trial and planned to stop if there was no response.",
          next: "s-trial",
          quality: "partial",
          feedback:
            "A trial is common practice but it is not recommended. Wheeze in bronchiolitis comes from airway debris and edema, not bronchospasm. The examiner wanted a clear decision to give no bronchodilator.",
        },
        {
          id: "c-dex-epi",
          label: "I gave dexamethasone 0.6 mg/kg and nebulized epinephrine together.",
          next: "s-trial",
          quality: "partial",
          feedback:
            "The CPS statement does not recommend this combination in otherwise healthy infants. The one Canadian trial that hinted at fewer admissions was not conclusive after adjustment and has not been confirmed. It exposes a young infant to high dose steroid for no proven gain.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-trial",
      phase: "Thirty minutes later",
      text: "There is no change in her work of breathing. Her heart rate is now 196 after the nebulizer. The nurse asks if you want to repeat it. You stop the drug therapy.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "One hour after arrival",
      text:
        "On 2 L/min of nasal prong oxygen her SpO2 is 91 percent. She has had three more apneas in 30 minutes. One lasted 20 seconds with a heart rate of 80. " +
        "Repeat capillary gas: pH 7.21, pCO2 72 mmHg. Respiratory rate is now 30 with shallow breaths.",
      next: "q-escalate",
    },
    {
      kind: "question",
      id: "q-escalate",
      phase: "Escalation",
      prompt: "She is getting worse. What do you do now, and who do you call?",
      seconds: 90,
      modelAnswer: [
        "Start high flow nasal cannula at 2 L/kg/min, which is about 8 L/min, and titrate FiO2.",
        "Reassess within 60 minutes. Plan CPAP or intubation if apneas continue.",
        "Call the pediatric transport service through CritiCall now, not after the next spell.",
        "Call the anesthetist in early and prepare airway equipment and drugs.",
        "Stop oral feeds. Start NG feeds or isotonic IV fluid.",
      ],
      rubric: ["br-r3", "br-l1", "br-m3"],
      choices: [
        {
          id: "c-hfnc",
          label: "I started high flow at 2 L/kg/min, called CritiCall for the pediatric transport team, called the anesthetist in and stopped oral feeds.",
          next: "s-bag",
          quality: "strong",
          feedback:
            "Good. High flow is the right rescue step when standard oxygen fails. Recurrent apnea with bradycardia and rising pCO2 means she needs a PICU. Transport time is part of her care, so call early.",
        },
        {
          id: "c-more-o2",
          label: "I increased nasal prong oxygen to 3 L/min and planned to repeat the gas in two hours.",
          next: "s-more-o2",
          quality: "partial",
          feedback:
            "More low flow oxygen treats the saturation but not the apnea or the rising pCO2. Two hours is too long to wait. The examiner wanted high flow, early transport and airway preparation.",
        },
        {
          id: "c-feed",
          label: "I asked mom to breastfeed to settle her and admitted her to the pediatric ward on low flow oxygen.",
          next: "s-more-o2",
          quality: "unsafe",
          feedback:
            "Oral feeding with a respiratory rate this high and recurrent apnea risks aspiration. A general ward cannot manage recurrent apnea with bradycardia. She needs escalation of support and a PICU bed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-more-o2",
      phase: "Twenty minutes later",
      text: "She has a 25 second apnea with a heart rate of 70. The nurse starts bag mask ventilation and calls you back. The respiratory therapist sets up high flow and the unit clerk calls CritiCall.",
      next: "s-bag",
    },
    {
      kind: "say",
      id: "s-bag",
      phase: "The transport team is 2 hours away",
      text:
        "Forty minutes after starting high flow she has another prolonged apnea. SpO2 falls to 70 percent and heart rate to 68. She needs 30 seconds of bag mask ventilation before she breathes again. " +
        "The anesthetist has arrived. The transport physician on the phone agrees she needs a definitive airway.",
      next: "q-intubate",
    },
    {
      kind: "question",
      id: "q-intubate",
      phase: "Airway",
      prompt: "Walk me through how you will intubate this 3.9 kg infant. Give me your drugs, doses, tube and ventilator settings.",
      seconds: 120,
      modelAnswer: [
        "Most experienced operator, with the anesthetist present. Video laryngoscope and a straight blade ready.",
        "Preoxygenate with high flow or gentle bag mask. Keep nasal cannula on for apneic oxygenation.",
        "Ketamine 1 to 2 mg/kg IV, so 4 to 8 mg. Rocuronium 1 mg/kg IV, so 4 mg.",
        "Atropine 0.02 mg/kg drawn up for bradycardia. Push dose epinephrine ready.",
        "Cuffed 3.0 mm tube, or 3.5 mm uncuffed. Depth about 9 to 10 cm at the lip, using weight in kg plus 6. Confirm with end tidal CO2 and a chest X ray.",
        "Tidal volume 6 to 8 mL/kg, PEEP 5 to 6 cmH2O, rate 30 to 35, accept permissive hypercapnia with pH over 7.20.",
        "Post intubation sedation and an OG tube.",
      ],
      rubric: ["br-r4", "br-r5"],
      next: "q-parents",
    },
    {
      kind: "question",
      id: "q-parents",
      phase: "Family",
      prompt: "Noor's mother is crying. She asks if this is her fault for sending her son to daycare. What do you say?",
      seconds: 60,
      modelAnswer: [
        "Sit down, use her daughter's name and speak plainly.",
        "Say clearly that this is not her fault. RSV is everywhere in winter.",
        "Explain that young preterm babies can stop breathing with RSV and the breathing tube is a support, not a sign that something was missed.",
        "Explain the transfer to the PICU and what to expect.",
        "Offer that a parent can stay with her and arrange how they will get to the receiving hospital safely.",
      ],
      rubric: ["br-c1"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Disposition",
      prompt: "The transport team arrives. What goes in your handover, and what follow up issues do you flag?",
      seconds: 75,
      modelAnswer: [
        "Structured handover: age, corrected age, weight, course, apneas with bradycardia, gas trend, airway details and ventilator settings.",
        "Drugs given with times and doses, and current sedation.",
        "Fluids and feeds. Isotonic IV fluid if not fed enterally.",
        "Pending pertussis PCR. Ask the PICU to follow it and to consider azithromycin if positive.",
        "Note that she did not receive RSV monoclonal antibody and flag this for her pediatrician.",
      ],
      rubric: ["br-c2", "br-d1", "br-m4"],
      choices: [
        {
          id: "c-structured",
          label: "I gave a structured handover with weight, course, airway details, ventilator settings, drugs and times, and flagged the pending pertussis PCR.",
          next: "end",
          quality: "strong",
          feedback:
            "Good handover. The pending pertussis result is the item most often lost between sites. Naming who follows it closes the loop.",
        },
        {
          id: "c-brief",
          label: "I told the team she has RSV bronchiolitis and was intubated for apnea and sent the chart.",
          next: "s-brief",
          quality: "partial",
          feedback:
            "Too thin for a critically ill infant. The team needs the drugs, doses, tube size, depth, ventilator settings and the pending tests. A structured format such as SBAR prevents omissions.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-brief",
      phase: "At the stretcher",
      text: "The transport nurse asks for the tube depth, the last gas and whether anything is pending. You go back through the chart with her and add the pertussis PCR to the transfer note.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Noor leaves with the transport team on the ventilator. Her parents follow by car. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "br-a1",
      competency: "assessment",
      text: "Identifies high risk features for apnea: age under 2 months, prematurity and a witnessed apnea.",
      points: 2,
      teaching: "Young age and prematurity are the strongest risk factors for apnea in RSV bronchiolitis. A witnessed spell raises the level of monitoring needed.",
      source: "cps-bronch",
    },
    {
      id: "br-r1",
      competency: "resuscitation",
      text: "Places the infant on continuous cardiorespiratory monitoring with apnea alarms in a resuscitation area.",
      points: 3,
      critical: true,
      teaching: "An infant who has already had an apnea can have another without warning. Continuous monitoring with staff nearby is the minimum standard.",
      source: "cps-bronch",
    },
    {
      id: "br-r2",
      competency: "resuscitation",
      text: "Suctions the nares and gives oxygen for SpO2 persistently under 90 percent.",
      points: 2,
      teaching: "Infants are obligate nasal breathers. Gentle nasal suction often improves work of breathing. CPS suggests supplemental oxygen when SpO2 stays under 90 percent.",
      source: "cps-bronch",
    },
    {
      id: "br-a2",
      competency: "assessment",
      text: "Explains that central apnea is an early feature of RSV in young infants and considers pertussis, sepsis, hypoglycemia, seizure and abusive head trauma.",
      points: 2,
      teaching: "Apnea can precede severe distress in RSV. A broad differential protects against missing a treatable cause.",
      source: "trekk-bronch",
    },
    {
      id: "br-a3",
      competency: "assessment",
      text: "Checks glucose and a blood gas, and sends pertussis PCR in an infant with apnea.",
      points: 1,
      teaching: "Glucose and a gas are quick and change management. Pertussis can present with apnea in young infants and needs treatment and public health follow up.",
      source: "trekk-bronch",
    },
    {
      id: "br-m1",
      competency: "management",
      text: "Does not give salbutamol, corticosteroids or routine nebulized epinephrine.",
      points: 2,
      teaching: "None of these improve important outcomes in bronchiolitis. Each adds side effects and cost.",
      source: "cps-bronch",
    },
    {
      id: "br-m2",
      competency: "management",
      text: "Does not give antibiotics or hypertonic saline in the ED without a specific indication.",
      points: 1,
      teaching: "Bacterial coinfection of the lung is uncommon in bronchiolitis. Hypertonic saline has no proven ED benefit.",
      source: "cps-bronch",
    },
    {
      id: "br-r3",
      competency: "resuscitation",
      text: "Starts high flow nasal cannula at about 2 L/kg/min when standard oxygen fails.",
      points: 2,
      teaching: "High flow reduces escalation of care in infants who fail standard oxygen. It is a bridge, not a treatment for recurrent central apnea.",
      source: "paris",
    },
    {
      id: "br-l1",
      competency: "leadership",
      text: "Calls the pediatric transport service and anesthesia early when apnea recurs.",
      points: 3,
      critical: true,
      teaching: "Recurrent apnea with bradycardia means she needs a PICU. Transport can take hours, so the call is part of resuscitation.",
      source: "trekk-bronch",
    },
    {
      id: "br-m3",
      competency: "management",
      text: "Stops oral feeds in severe distress and uses NG feeds or isotonic IV fluid.",
      points: 1,
      teaching: "Oral feeding with high respiratory rates risks aspiration. CPS supports NG or isotonic IV hydration when oral intake fails.",
      source: "cps-bronch",
    },
    {
      id: "br-r4",
      competency: "resuscitation",
      text: "Intubates with weight based drugs, for example ketamine 1 to 2 mg/kg and rocuronium 1 mg/kg, with atropine and epinephrine ready.",
      points: 2,
      critical: true,
      teaching: "Infants desaturate quickly and become bradycardic during laryngoscopy. Preoxygenate, have the most skilled operator and keep rescue drugs drawn up.",
      source: "aha-pals",
    },
    {
      id: "br-r5",
      competency: "resuscitation",
      text: "Chooses a cuffed 3.0 mm tube with correct depth and sets lung protective ventilation.",
      points: 1,
      teaching: "Cuffed tubes are reasonable in infants when cuff pressure is monitored. Use 6 to 8 mL/kg tidal volume and accept moderate hypercapnia.",
      source: "aha-pals",
    },
    {
      id: "br-c1",
      competency: "communication",
      text: "Reassures the parent that she is not at fault and explains intubation and transfer in plain language.",
      points: 2,
      teaching: "Parental guilt is common. A direct statement that it is not their fault, and a clear plan, helps families cope with transfer.",
      source: "trekk-bronch",
    },
    {
      id: "br-c2",
      competency: "communication",
      text: "Gives a structured handover including airway, ventilator settings, drugs, times and pending tests.",
      points: 2,
      teaching: "Structured handover reduces omissions at transfer. Name who will follow each pending result.",
      source: "trekk-bronch",
    },
    {
      id: "br-d1",
      competency: "disposition",
      text: "Arranges PICU transfer with a critical care transport team rather than ward admission.",
      points: 2,
      teaching: "An infant with recurrent apnea and rising pCO2 needs a unit that can provide ventilation. Ward admission is unsafe.",
      source: "cps-bronch",
    },
    {
      id: "br-m4",
      competency: "management",
      text: "Plans empiric azithromycin 10 mg/kg once daily for 5 days if pertussis is confirmed or strongly suspected.",
      points: 1,
      teaching: "Azithromycin is the preferred macrolide in young infants. Watch for pyloric stenosis after any macrolide in the first weeks of life. Close contacts may need prophylaxis through public health.",
      source: "phac-pertussis",
    },
  ],
  sources: [
    {
      id: "cps-bronch",
      citation:
        "Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Position statement. 2014, updated 2021.",
      url: "https://cps.ca/en/documents/position/bronchiolitis",
    },
    { id: "trekk-bronch", citation: "TREKK. Bottom line recommendations. Bronchiolitis." },
    {
      id: "paris",
      citation: "Franklin D, et al. A randomized trial of high flow oxygen therapy in infants with bronchiolitis. N Engl J Med. 2018.",
    },
    {
      id: "aha-pals",
      citation: "American Heart Association. 2025 Guidelines for CPR and ECC. Part 8. Pediatric advanced life support.",
    },
    {
      id: "phac-pertussis",
      citation: "Public Health Agency of Canada. Whooping cough (pertussis). For health professionals.",
      url: "https://www.canada.ca/en/public-health/services/diseases/whooping-cough-pertussis/health-professionals.html",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
