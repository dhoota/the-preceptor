// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const refractoryAnaphylaxisBetaBlocker: OralCase = {
  id: "refractory-anaphylaxis-beta-blocker",
  title: "Clearing out the shed",
  blueprint: "resus",
  alsoCovers: ["cardio"],
  priorityTopic: "anaphylaxis",
  keyFeatures: [
    { topic: "anaphylaxis", n: 2 },
    { topic: "anaphylaxis", n: 3 },
    { topic: "anaphylaxis", n: 4 },
    { topic: "shock", n: 7 },
    { topic: "shock", n: 8 },
    { topic: "airway", n: 2 },
  ],
  summary: "A 64 year old man with heart disease arrives hypotensive and wheezing after an incident in his backyard.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 64 year old man arrives by ambulance at 10:55, faint and wheezing with hives, after he was stung while clearing out his shed. " +
    "Your hospital has an ICU and in house anesthesia.",
  card: {
    vitals: {
      temperature: "36.8°C",
      pulse: "58/minute",
      resp: "26/minute",
      bp: "74/40 mmHg",
      o2sat: "92% on a non rebreather mask",
      weight: "88 kg (194 lb)",
    },
    medications: "Metoprolol, ramipril, ASA, atorvastatin",
    allergies: "No known allergies",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "At 10:15 he was clearing out his shed and was stung three times on the neck and forearm. Within ten minutes he had hives, throat tightness and felt faint. " +
        "At triage he was CTAS 1 with a glucose of 8.1 mmol/L.",
    },
    {
      id: "prehospital",
      label: "Paramedic treatment and response",
      result:
        "Paramedics gave epinephrine 0.5 mg IM at 10:32 and again at 10:41, salbutamol 5 mg nebulized and 1 L of normal saline. " +
        "The paramedic says: 'He perked up a bit after the second epi but his pressure never came up. His heart rate has stayed in the fifties the whole time.'",
    },
    {
      id: "meds",
      label: "Medications and history",
      result:
        "Metoprolol 50 mg twice daily. Ramipril 10 mg daily. ASA 81 mg. Atorvastatin 40 mg. " +
        "Coronary stent to the right coronary artery in 2019. No known allergies. Last summer he had a sting that caused swelling of the whole forearm for three days.",
    },
    {
      id: "skin",
      label: "Skin",
      result: "Generalized urticaria on the trunk and limbs. Flushing of the face and neck. Mild swelling of the upper lip. Sting sites on the left neck and right forearm with no retained stingers.",
    },
    {
      id: "airway",
      label: "Airway",
      result: "Voice is normal. No stridor. Tongue and uvula are normal. He can swallow his saliva.",
    },
    {
      id: "chest",
      label: "Chest",
      result: "Diffuse expiratory wheeze with moderate air entry. Using accessory muscles. Speaking in short sentences.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 58. PR 190 ms. 1 mm horizontal ST depression in V5 and V6. No ST elevation.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result: "Hyperdynamic left ventricle with small end systolic cavity. No pericardial effusion. IVC 0.9 cm with more than 50 percent collapse. A lines in both lungs.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Lactate 4.2 mmol/L. Hemoglobin 168 g/L. Potassium 3.6 mmol/L. Creatinine 102 µmol/L. " +
        "High sensitivity troponin T 22 ng/L at 11:05 and 61 ng/L at 13:05. Serum tryptase drawn at 11:05.",
    },
    {
      id: "tryptase",
      label: "Tryptase result",
      result: "Serum tryptase 36 µg/L at 11:05. Result reported the next morning.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "She says he took his morning metoprolol and ramipril at 08:00. He was working hard and did not eat breakfast. She is frightened and wants to know if he is having a heart attack.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "He is sitting up, pale and wheezing, with hives across his chest. His pressure on your monitor is 72/40 and his heart rate is 56. He has a 20 gauge IV in the left hand.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First five minutes",
      prompt: "What is your diagnosis and what do you do in the next five minutes?",
      seconds: 90,
      modelAnswer: [
        "Anaphylaxis with shock and bronchospasm that has not responded to two IM doses.",
        "Third dose of epinephrine 0.5 mg IM into the anterolateral thigh.",
        "Lie him flat with legs raised for the hypotension. If breathing is worse flat, use a semi reclined position with legs raised. Do not stand him up.",
        "Second large bore IV. Rapid crystalloid 20 mL/kg, about 1 to 2 L.",
        "Prepare an epinephrine infusion. Repeat salbutamol.",
        "Call for help early. ICU and anesthesia.",
        "Ask when and how often he was stung, what paramedics gave and when, and about past sting reactions.",
      ],
      rubric: ["an-a1", "an-r1", "an-r2", "an-l1", "an-h1", "an-h2", "an-h3"],
      choices: [
        {
          id: "c-im",
          label: "I gave a third IM epinephrine 0.5 mg in the thigh, laid him flat, gave 2 L of crystalloid through two lines, and asked pharmacy to prepare an epinephrine infusion.",
          next: "s-after-im",
          quality: "strong",
          feedback:
            "Good. Refractory anaphylaxis is defined by failure of two IM doses. The next steps are more epinephrine, aggressive fluid and an infusion ready. Posture matters, because sitting up a shocked patient can cause empty ventricle arrest.",
        },
        {
          id: "c-antihist",
          label: "I gave diphenhydramine 50 mg IV and methylprednisolone 125 mg IV and watched him closely.",
          next: "s-antihist",
          quality: "unsafe",
          feedback:
            "Antihistamines and steroids do not treat shock or airway edema. They are adjuncts at best. The examiner wanted epinephrine repeated and an infusion started. Delay in epinephrine is the main cause of anaphylaxis death.",
        },
        {
          id: "c-iv-push",
          label: "I gave epinephrine 1 mg IV push from the crash cart.",
          next: "s-iv-push",
          quality: "unsafe",
          feedback:
            "The arrest dose given to a patient with a pulse can cause severe hypertension, ischemia and ventricular arrhythmia. In a man with coronary disease this is dangerous. IV epinephrine should be given as a titrated infusion, or as small push doses of 10 to 20 mcg by an experienced clinician.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-antihist",
      phase: "Ten minutes later",
      text: "His pressure falls to 66/38. He is confused. The nurse asks if she should give another epinephrine IM. You give it and ask for more fluid.",
      next: "s-after-im",
    },
    {
      kind: "say",
      id: "s-iv-push",
      phase: "One minute later",
      text:
        "His pressure jumps to 220/118. He grips his chest. The monitor shows runs of ventricular tachycardia and 3 mm ST depression laterally. Over five minutes his pressure falls back to 76/42. The ST changes settle.",
      next: "s-after-im",
    },
    {
      kind: "say",
      id: "s-after-im",
      phase: "11:10",
      text:
        "He has had a third IM dose and 2 L of crystalloid in total. Pressure 80/46, heart rate 60. Wheeze is a little better. The hives are unchanged.",
      next: "q-infusion",
    },
    {
      kind: "question",
      id: "q-infusion",
      phase: "Refractory shock",
      prompt: "He remains hypotensive after three IM doses. What do you start, how do you make it up, and what dose?",
      seconds: 90,
      modelAnswer: [
        "Epinephrine infusion. This is the core treatment of refractory anaphylaxis.",
        "For example 1 mg in 250 mL for 4 mcg/mL.",
        "Start at about 0.1 mcg/kg/min, about 9 mcg/min for 88 kg. The UK regimen starts at 0.08 to 0.17 mcg/kg/min.",
        "Titrate every 2 to 5 minutes to MAP and symptoms.",
        "Dedicated line. Continuous monitoring. Arterial line when feasible.",
        "More fluid. Anaphylaxis can shift up to a third of circulating volume.",
      ],
      rubric: ["an-r3", "an-m1"],
      choices: [
        {
          id: "c-epi-inf",
          label: "I started an epinephrine infusion at 0.1 mcg/kg/min through a dedicated line and titrated every few minutes while giving more fluid.",
          next: "s-still-low",
          quality: "strong",
          feedback:
            "Correct. An epinephrine infusion is the recommended step after two failed IM doses. It treats vasodilation, capillary leak, bronchospasm and mast cell release all at once. Fluids must continue because the leak is large.",
        },
        {
          id: "c-norepi",
          label: "I started norepinephrine because it is my usual vasopressor.",
          next: "s-norepi",
          quality: "partial",
          feedback:
            "Norepinephrine can raise pressure but it has little beta 2 effect and does not stabilize mast cells. Epinephrine is the first vasopressor in anaphylaxis. Norepinephrine or vasopressin are second line additions.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-norepi",
      phase: "Fifteen minutes later",
      text:
        "His pressure rises to 86/50 but the wheeze returns and the hives spread. The ICU physician arrives and suggests switching to epinephrine. You start an epinephrine infusion.",
      next: "s-still-low",
    },
    {
      kind: "say",
      id: "s-still-low",
      phase: "11:40",
      text:
        "The epinephrine infusion is at 0.3 mcg/kg/min. He has had 3.5 L of fluid. Pressure 78/44, heart rate 64. The wheeze is better. His wife tells you he took his metoprolol this morning.",
      next: "q-glucagon",
    },
    {
      kind: "question",
      id: "q-glucagon",
      phase: "Still not responding",
      prompt: "Why is he not responding and what will you add?",
      seconds: 90,
      modelAnswer: [
        "Beta blockade blunts the response to epinephrine. Ramipril may add to hypotension.",
        "Glucagon 1 to 5 mg IV over 5 minutes. The UK algorithm starts with 1 mg.",
        "Then glucagon infusion 5 to 15 mcg/min titrated to effect.",
        "Glucagon often causes vomiting. Position on the side or head up and give an antiemetic.",
        "Consider a second vasopressor such as norepinephrine or vasopressin.",
      ],
      rubric: ["an-a2", "an-m2"],
      choices: [
        {
          id: "c-glucagon",
          label: "I recognized beta blockade, gave glucagon 2 mg IV over 5 minutes then an infusion at 5 mcg/min, with ondansetron 4 mg and suction ready.",
          next: "q-airway",
          quality: "strong",
          feedback:
            "Excellent. Glucagon raises cyclic AMP through a pathway that bypasses the beta receptor. Giving it slowly with an antiemetic and suction ready prevents aspiration.",
        },
        {
          id: "c-glucagon-fast",
          label: "I gave glucagon 5 mg IV push quickly while he lay flat.",
          next: "s-vomit",
          quality: "partial",
          feedback:
            "Right drug, unsafe delivery. Rapid glucagon causes vomiting and a supine patient with a threatened airway can aspirate. Give it over 5 minutes with an antiemetic and the head raised or on the side.",
        },
        {
          id: "c-more-epi",
          label: "I kept doubling the epinephrine infusion until his pressure came up.",
          next: "s-more-epi",
          quality: "partial",
          feedback:
            "Epinephrine is right but it may not overcome beta blockade. High doses cause alpha driven vasoconstriction and increase myocardial oxygen demand. The examiner wanted glucagon added for the beta blocker.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-vomit",
      phase: "Two minutes later",
      text: "He vomits a large volume. The nurse rolls him and suctions. SpO2 dips to 88 percent then recovers to 94 percent. His pressure starts to improve.",
      next: "q-airway",
    },
    {
      kind: "say",
      id: "s-more-epi",
      phase: "Ten minutes later",
      text:
        "At 0.8 mcg/kg/min his heart rate is 118 and he has new chest pressure. The ECG shows 2 mm ST depression laterally. His pressure is 84/48. The ICU physician asks about glucagon. You give it slowly and his pressure improves.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "New symptom",
      prompt: "At 12:10 his pressure is 96/58. He now says his voice sounds different and his lip swelling is worse. How do you assess and plan for his airway?",
      seconds: 75,
      modelAnswer: [
        "Hoarseness suggests laryngeal edema. This is a threatened airway.",
        "Call anesthesia now. Most experienced operator.",
        "Look with nasopharyngoscopy if it can be done quickly.",
        "Plan an awake approach if possible. Double setup with neck marked for cricothyrotomy.",
        "Expect hypotension with induction. Resuscitate first. Reduced dose induction.",
        "Continue the epinephrine infusion. Nebulized epinephrine may help upper airway edema.",
      ],
      rubric: ["an-a3", "an-l1"],
      next: "q-troponin",
    },
    {
      kind: "question",
      id: "q-troponin",
      phase: "Results",
      prompt: "The laryngoscopy shows mild supraglottic edema with an open glottis. By 13:05 he is improving. His troponin rose from 22 to 61 ng/L. How do you interpret this and does it change your treatment?",
      seconds: 60,
      modelAnswer: [
        "Likely type 2 injury from shock and epinephrine in a man with coronary disease.",
        "Kounis syndrome, an allergic acute coronary syndrome, is possible.",
        "Serial ECGs and troponins. Cardiology input.",
        "Coronary disease is not a reason to withhold epinephrine in anaphylaxis.",
        "Avoid large IV boluses of epinephrine.",
      ],
      rubric: ["an-a4"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "By 15:00 the epinephrine infusion is off. He feels well and his pressure is 124/72. His wife asks to take him home tonight. What is your disposition?",
      seconds: 60,
      modelAnswer: [
        "Admit to ICU or a monitored step down bed for at least 24 hours.",
        "He had refractory anaphylaxis, needed infusions and has a troponin rise.",
        "Biphasic reactions are more likely after severe reactions and when multiple epinephrine doses were needed.",
        "Repeat tryptase at 24 hours or later for a baseline.",
      ],
      rubric: ["an-d1"],
      choices: [
        {
          id: "c-admit",
          label: "I admitted him to the ICU for at least 24 hours of monitoring and explained the risk of a second phase reaction.",
          next: "q-discharge",
          quality: "strong",
          feedback:
            "Correct. Severe anaphylaxis needing an infusion is a clear reason for monitored admission. Biphasic risk is highest in this group. His troponin rise also needs follow up.",
        },
        {
          id: "c-home",
          label: "I observed him for four more hours and sent him home with an auto injector since he looked well.",
          next: "s-home",
          quality: "unsafe",
          feedback:
            "Four hours is too short after refractory shock that needed an infusion. The risk of a biphasic reaction is higher after severe reactions. His troponin rise also needs assessment. Monitored admission is the safe choice.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-home",
      phase: "Before discharge",
      text:
        "The charge nurse asks you to reconsider. The ICU physician points out he was on 0.3 mcg/kg/min of epinephrine four hours ago. You agree to admit him to the ICU.",
      next: "q-discharge",
    },
    {
      kind: "question",
      id: "q-discharge",
      phase: "Planning ahead",
      prompt: "What do you put in place for his discharge from hospital?",
      seconds: 75,
      modelAnswer: [
        "Two epinephrine auto injectors, 0.3 mg each, and hands on teaching.",
        "Written anaphylaxis action plan.",
        "Referral to an allergist for venom testing and venom immunotherapy.",
        "Ask his cardiologist and allergist to review metoprolol and ramipril together. Do not stop cardiac drugs on your own.",
        "Medical alert identification. Avoid working alone near nests until assessed.",
      ],
      rubric: ["an-d2", "an-c1", "an-p1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He spends 30 hours in the ICU without a second reaction. His tryptase is 36 µg/L. He goes home with an allergy appointment in two weeks. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "an-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes anaphylaxis with shock and bronchospasm that is refractory to two IM doses of epinephrine.",
      points: 2,
      teaching: "Refractory anaphylaxis means ongoing shock or respiratory compromise after two appropriate IM doses. It needs an escalation plan, not more watching.",
      source: "rcuk",
    },
    {
      id: "an-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives a further IM epinephrine 0.5 mg (0.01 mg/kg) into the anterolateral thigh without delay.",
      points: 3,
      critical: true,
      teaching: "IM epinephrine can be repeated every 5 minutes. Delay in epinephrine is the main factor linked to fatal anaphylaxis.",
      source: "rcuk",
    },
    {
      id: "an-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Positions the patient flat with legs raised and gives rapid crystalloid of 20 mL/kg through two large bore lines.",
      points: 2,
      teaching: "Sitting or standing a shocked anaphylaxis patient can cause empty ventricle arrest. Capillary leak can shift a large part of the circulating volume.",
      source: "rcuk",
    },
    {
      id: "an-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls ICU and anesthesia early and assigns pharmacy to prepare infusions.",
      points: 1,
      teaching: "Refractory anaphylaxis can progress to airway loss or arrest. Early help and prepared infusions save minutes.",
      source: "rcuk",
    },
    {
      id: "an-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Starts an epinephrine infusion at about 0.1 mcg/kg/min, in the range 0.05 to 0.2, and titrates to response.",
      points: 3,
      critical: true,
      teaching: "An IV epinephrine infusion is the recommended treatment after two failed IM doses. It is safer than repeated IV boluses.",
      source: "rcuk",
    },
    {
      id: "an-m1",
      competency: "management",
      criterion: "management",
      text: "Avoids 1 mg IV epinephrine boluses in a patient with a pulse and uses epinephrine as first vasopressor rather than norepinephrine.",
      points: 2,
      teaching: "IV boluses at the arrest dose cause arrhythmia and ischemia. Epinephrine also treats bronchospasm and mast cell release.",
      source: "wao",
    },
    {
      id: "an-a2",
      competency: "assessment",
      criterion: "history",
      text: "Identifies beta blocker therapy as a cause of poor response and notes the ACE inhibitor as a possible contributor.",
      points: 2,
      teaching: "Beta blockers blunt the effect of epinephrine and may make reactions more severe. ACE inhibitors may impair compensation.",
      source: "shaker",
    },
    {
      id: "an-m2",
      competency: "management",
      criterion: "management",
      text: "Gives glucagon 1 to 5 mg IV over 5 minutes then 5 to 15 mcg/min, with an antiemetic and airway protection against vomiting.",
      points: 3,
      critical: true,
      teaching: "Glucagon raises cyclic AMP without the beta receptor. Vomiting is common, so give it slowly and protect the airway.",
      source: "wao",
    },
    {
      id: "an-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes voice change as a sign of laryngeal edema and plans airway assessment and management with anesthesia.",
      points: 2,
      teaching: "Hoarseness or stridor means the airway is at risk. Plan early with the most experienced operator and a surgical backup.",
      source: "wao",
    },
    {
      id: "an-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets the troponin rise as likely demand injury or Kounis syndrome and arranges serial ECGs, troponins and cardiology input.",
      points: 1,
      teaching: "Coronary disease is not a reason to withhold epinephrine in anaphylaxis. Shock itself threatens the heart more than the drug.",
      source: "wao",
    },
    {
      id: "an-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to a monitored setting for at least 24 hours after refractory anaphylaxis.",
      points: 2,
      teaching: "Severe reactions and those needing more than one epinephrine dose carry a higher risk of biphasic reaction. Observation length should match severity.",
      source: "shaker",
    },
    {
      id: "an-d2",
      competency: "disposition",
      criterion: "management",
      text: "Prescribes two epinephrine auto injectors with teaching and a written action plan.",
      points: 1,
      teaching: "Every patient with anaphylaxis leaves with auto injectors and knows when and how to use them.",
      source: "shaker",
    },
    {
      id: "an-c1",
      competency: "communication",
      criterion: "process",
      text: "Refers to an allergist for venom testing and immunotherapy, and asks cardiology and allergy to review the beta blocker and ACE inhibitor together.",
      points: 2,
      teaching: "Venom immunotherapy greatly reduces the risk of future systemic reactions. Cardiac drugs are reviewed by the specialists, not stopped abruptly in the department.",
      source: "shaker",
    },
    {
      id: "an-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Arranges a repeat tryptase for a baseline and documents the reaction as a venom allergy.",
      points: 1,
      teaching: "A raised acute tryptase supports the diagnosis. A high baseline suggests a mast cell disorder that raises future risk.",
      source: "wao",
    },
    {
      id: "an-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the exposure and the timeline: what stung him, when, how many stings and how fast symptoms began.",
      points: 2,
      teaching: "Skin, airway and circulatory features within minutes of a sting meet the criteria for anaphylaxis. Rapid onset after exposure predicts a severe reaction.",
      source: "rcuk",
    },
    {
      id: "an-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks what the paramedics gave and how he responded, including the epinephrine doses and times, salbutamol and fluid.",
      points: 2,
      teaching: "Two IM doses without recovery of blood pressure defines refractory anaphylaxis. The dose times tell you when the next dose is due.",
      source: "rcuk",
    },
    {
      id: "an-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about previous sting reactions and known allergies, and learns of a large local reaction last summer.",
      points: 1,
      teaching: "A large local reaction shows venom sensitization. It supports referral to an allergist for venom testing and immunotherapy.",
      source: "shaker",
    },
  ],
  sources: [
    {
      id: "rcuk",
      citation: "Resuscitation Council UK. Emergency treatment of anaphylactic reactions. Guidelines for healthcare providers. 2021.",
      url: "https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment",
    },
    {
      id: "wao",
      citation: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.",
    },
    {
      id: "shaker",
      citation: "Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis. A 2020 practice parameter update, systematic review, and GRADE analysis. J Allergy Clin Immunol. 2020.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
