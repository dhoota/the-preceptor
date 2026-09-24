// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const aceInhibitorAngioedemaAirway: OralCase = {
  id: "ace-inhibitor-angioedema-airway",
  title: "A thick voice before breakfast",
  blueprint: "resus",
  alsoCovers: ["procedures", "resp"],
  priorityTopic: "airway",
  keyFeatures: [
    { topic: "airway", n: 2 },
    { topic: "airway", n: 3 },
    { topic: "airway", n: 1 },
    { topic: "sob", n: 1 },
  ],
  summary: "A 62 year old woman wakes with facial swelling and a muffled voice that is getting worse.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "It is 06:20. A 62 year old woman arrives with a swollen lip and tongue and a muffled voice. " +
    "Anesthesia is on call from home, 25 minutes away. ENT is at a tertiary centre 90 minutes away.",
  card: {
    vitals: {
      temperature: "36.9°C",
      pulse: "96/minute",
      resp: "22/minute",
      bp: "162/94 mmHg",
      o2sat: "96% on room air",
      weight: "84 kg (185 lb)",
    },
    medications: "Ramipril, amlodipine, metformin",
    allergies: "No known allergies",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "She woke at 04:30 with a swollen lower lip. Since then her tongue has become swollen and her voice is muffled. She was triaged CTAS 2. " +
        "The nurse says: 'She is sitting forward spitting into a basin. She can talk but it is hard to understand her. No hives.'",
    },
    {
      id: "equipment",
      label: "Airway equipment available",
      result: "Video laryngoscopes, a flexible bronchoscope with a screen, a nasopharyngoscope, high flow nasal oxygen and a surgical airway kit.",
    },
    {
      id: "airway-exam",
      label: "Airway exam",
      result:
        "Lower lip swollen to twice normal size. Tongue swollen and protruding past the teeth. Floor of mouth firm. Uvula not visible. " +
        "Muffled voice. Drooling. No stridor at rest. Mouth opening about 2.5 cm.",
    },
    {
      id: "skin",
      label: "Skin and chest",
      result: "No urticaria. No itch. No flushing. Chest clear. No wheeze.",
    },
    {
      id: "neck",
      label: "Neck landmarks",
      result:
        "Short neck with a BMI of 31. Thyroid cartilage palpable. The cricothyroid membrane is palpable with some difficulty. " +
        "Bedside ultrasound confirms the membrane about 1.5 cm below the skin.",
    },
    {
      id: "npl",
      label: "Nasopharyngoscopy",
      result:
        "Right nostril patent. The base of tongue is swollen. The epiglottis is thickened. Both arytenoids and aryepiglottic folds are edematous. About half of the glottic opening is obscured. Cords move.",
    },
    {
      id: "meds",
      label: "Medications and history",
      result:
        "Ramipril 10 mg daily for three years. Amlodipine 10 mg. Metformin 1000 mg twice daily. No new medications. No prior swelling episodes. No family history of swelling. No known allergies. No food or sting exposure.",
    },
    {
      id: "vitals-30",
      label: "Vitals at 06:50",
      result: "Heart rate 108, blood pressure 170/96, respiratory rate 26, SpO2 92 percent on 4 L nasal prongs. New soft inspiratory stridor.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "Complete blood count normal. Creatinine 88 µmol/L. Tryptase 4.1 µg/L. C4 sent, reported normal two days later.",
    },
    {
      id: "daughter",
      label: "Collateral from her daughter",
      result:
        "Her daughter arrives at 07:40. She says her mother has been on the same pills for years. She is angry and asks why her mother's doctor would give her something that could do this.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "She is sitting bolt upright on the stretcher. Her tongue fills her mouth and she is spitting saliva. She writes on a notepad: 'Can't swallow.'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What are your first steps?",
      seconds: 90,
      modelAnswer: [
        "Recognize a threatened airway. Move her to resus. Keep her sitting up.",
        "Call anesthesia now and notify ENT.",
        "Oxygen. Suction. Two IVs.",
        "Assess the larynx with nasopharyngoscopy.",
        "Mark the cricothyroid membrane by palpation and ultrasound. Open the surgical airway kit.",
        "Hold ramipril for good.",
        "Ask when the swelling started and how fast it has spread.",
      ],
      rubric: ["ae-a1", "ae-l1", "ae-r1", "ae-h1"],
      choices: [
        {
          id: "c-prepare",
          label: "I kept her upright in resus, called anesthesia in and ENT, did a nasopharyngoscopy, marked the membrane with ultrasound and opened the surgical airway kit.",
          next: "q-cause",
          quality: "strong",
          feedback:
            "Strong answer. Early help, a look at the larynx and a marked neck are the core of a safe plan. Tongue and floor of mouth swelling with voice change are high risk signs.",
        },
        {
          id: "c-ct",
          label: "I sent her for a CT of the neck to assess the extent of the swelling.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "A patient with a threatened airway should not lie flat in a scanner away from airway equipment. Nasopharyngoscopy at the bedside gives the information you need. CT adds risk and no decision.",
        },
        {
          id: "c-observe",
          label: "I gave diphenhydramine 50 mg IV and methylprednisolone 125 mg IV and planned to observe her on the ward.",
          next: "s-observe",
          quality: "partial",
          feedback:
            "This swelling is most likely bradykinin mediated. Antihistamines and steroids have little effect. She needs a monitored resus bed and an airway plan, not a ward bed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In CT",
      text:
        "The technologist calls. She could not lie flat and sat up gasping. Her SpO2 was 88 percent. She is brought back to resus without a scan. Fifteen minutes are lost.",
      next: "q-cause",
    },
    {
      kind: "say",
      id: "s-observe",
      phase: "Thirty minutes later",
      text:
        "The ward nurse calls. Her voice is now barely audible and her SpO2 is 91 percent. She is moved back to resus. You call anesthesia.",
      next: "q-cause",
    },
    {
      kind: "question",
      id: "q-cause",
      phase: "Cause",
      prompt: "What is causing this and how does that change your drug treatment?",
      seconds: 75,
      modelAnswer: [
        "ACE inhibitor induced angioedema. Bradykinin mediated.",
        "It can start years after the drug is begun.",
        "No hives, no itch and a normal tryptase point away from histamine.",
        "Epinephrine, antihistamines and steroids usually do not help, but IM epinephrine 0.5 mg is reasonable if anaphylaxis cannot be excluded.",
        "Hereditary angioedema is unlikely with no prior episodes or family history.",
        "Ask about ACE inhibitor use and its duration, allergic triggers, prior episodes and family history.",
      ],
      rubric: ["ae-a2", "ae-h2", "ae-h3"],
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Specific therapy",
      prompt: "Are there any specific drugs you would try? What is the evidence?",
      seconds: 75,
      modelAnswer: [
        "Evidence for specific agents in ACE inhibitor angioedema is weak.",
        "Icatibant 30 mg SC was positive in one small trial and negative in a larger one.",
        "C1 esterase inhibitor concentrate and fresh frozen plasma have been used based on case series.",
        "Tranexamic acid has been tried with limited evidence.",
        "No drug replaces an airway plan. Do not delay airway management waiting for a drug.",
      ],
      rubric: ["ae-m1"],
      choices: [
        {
          id: "c-weak",
          label: "I said the evidence for icatibant, C1 inhibitor or plasma is weak, I would consider one if available, but my airway plan does not wait for it.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Correct and honest. A randomized trial of icatibant in ACE inhibitor angioedema showed no benefit over placebo. Using a drug is reasonable, but trusting it to reverse airway edema is not.",
        },
        {
          id: "c-trust",
          label: "I gave icatibant 30 mg SC and stood down the airway team since it works in about an hour.",
          next: "s-trust",
          quality: "unsafe",
          feedback:
            "Icatibant has not been shown to reliably speed recovery in ACE inhibitor angioedema. Standing down the airway team leaves her unprotected as swelling progresses. The examiner wanted the airway plan kept running.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-trust",
      phase: "Twenty minutes later",
      text:
        "Her swelling is worse. She now has stridor. You call anesthesia back. They are 15 minutes away.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "06:50",
      text:
        "She has new soft inspiratory stridor. Respiratory rate 26. SpO2 92 percent on 4 L nasal prongs. She points at her throat and cannot speak. Anesthesia is 15 minutes away.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Securing the airway",
      prompt: "She needs a definitive airway now. How do you do it? Be specific about route, drugs and doses.",
      seconds: 120,
      modelAnswer: [
        "Awake flexible bronchoscopic intubation through the nose with her sitting up.",
        "High flow nasal oxygen for oxygenation during the procedure.",
        "Topical lidocaine to the nose and airway. Stay under 9 mg/kg lean body weight.",
        "Nasal vasoconstrictor such as xylometazoline.",
        "Minimal sedation, for example ketamine 10 to 20 mg IV increments or none.",
        "Smaller tube, 6.0 to 6.5 mm, loaded on the scope.",
        "Double setup. Scalpel, bougie and 6.0 tube open. A second operator stands at the neck.",
      ],
      rubric: ["ae-r2", "ae-r3", "ae-m2"],
      choices: [
        {
          id: "c-awake",
          label: "I did an awake nasal flexible bronchoscopic intubation sitting up with topical lidocaine, high flow oxygen and minimal ketamine, with the neck marked and a second operator ready to cut.",
          next: "q-backup",
          quality: "strong",
          feedback:
            "This is the safest plan. Spontaneous breathing is kept, and the nasal route avoids the swollen tongue. A prepared double setup means a failed attempt does not become a disaster.",
        },
        {
          id: "c-oral-vl",
          label: "I tried an awake oral video laryngoscopy with topical anesthesia.",
          next: "s-oral",
          quality: "partial",
          feedback:
            "Awake is the right principle but the oral route is blocked by her tongue and 2.5 cm mouth opening. The blade will not pass or will obscure the view. The nasal route bypasses the tongue.",
        },
        {
          id: "c-rsi",
          label: "I did an RSI with ketamine and rocuronium and a video laryngoscope.",
          next: "s-rsi",
          quality: "unsafe",
          feedback:
            "Paralysis removes her own airway tone and breathing. With a swollen tongue and larynx, mask ventilation and laryngoscopy may both fail. This converts a threatened airway into a cannot intubate, cannot oxygenate emergency.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-oral",
      phase: "Two minutes later",
      text:
        "The blade will not pass her tongue. She gags and her SpO2 falls to 88 percent. You stop, sit her up and change to a nasal bronchoscopic approach.",
      next: "q-backup",
    },
    {
      kind: "say",
      id: "s-rsi",
      phase: "Three minutes later",
      text:
        "After paralysis the video laryngoscope shows only swollen tissue. Two person mask ventilation fails. SpO2 is 78 percent. You call for the scalpel. Your colleague performs a cricothyrotomy and SpO2 recovers to 95 percent.",
      next: "q-backup",
    },
    {
      kind: "question",
      id: "q-backup",
      phase: "Backup plan",
      prompt: "Tell me your backup plan and the moment you would use it. Describe the technique.",
      seconds: 75,
      modelAnswer: [
        "Trigger: failed bronchoscopic attempt with falling saturation, or complete obstruction.",
        "Say out loud that you are moving to a surgical airway.",
        "Scalpel, bougie, tube technique through the marked membrane.",
        "Transverse stab incision through skin and membrane with a size 10 blade. Rotate the blade.",
        "Slide a bougie along the blade into the trachea. Railroad a 6.0 cuffed tube. Confirm with capnography.",
        "Awake cricothyrotomy under local is an option if the nasal route fails early.",
      ],
      rubric: ["ae-r3", "ae-l2"],
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "After intubation",
      prompt: "She is intubated with a 6.5 nasal tube at 07:15. What is your plan for her ongoing care?",
      seconds: 60,
      modelAnswer: [
        "Confirm with capnography. Secure the tube well. Label it as a difficult airway.",
        "Sedation and analgesia.",
        "ICU admission.",
        "Extubate only after the swelling settles, often 24 to 72 hours, with a cuff leak and a look by scope.",
        "Stop the ACE inhibitor permanently. Record it as an allergy.",
        "Use a different drug class for her blood pressure. ARBs carry a small risk and need caution.",
      ],
      rubric: ["ae-d1", "ae-m3"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "Family",
      prompt: "Her daughter is angry and asks why her mother's doctor gave her a drug that could do this. What do you say and what else do you do?",
      seconds: 75,
      modelAnswer: [
        "Acknowledge her fear and anger.",
        "Explain that this is a rare known reaction that can start years into treatment.",
        "Avoid blaming the family doctor. Ramipril is a common and appropriate drug.",
        "Tell her the drug is stopped for good and the family doctor will be informed.",
        "Make sure the serious reaction is reported to Health Canada through the hospital. Hospitals must report within 30 days.",
      ],
      rubric: ["ae-c1", "ae-p1"],
      choices: [
        {
          id: "c-explain",
          label: "I acknowledged her anger, explained it is a rare known reaction that can start years later, did not blame the family doctor, and reported it to Health Canada.",
          next: "end",
          quality: "strong",
          feedback:
            "Good. Honest, non judgmental explanation builds trust. Since December 2019, Canadian hospitals must report serious adverse drug reactions to Health Canada within 30 days of documenting them. This comes from Vanessa's Law.",
        },
        {
          id: "c-blame",
          label: "I agreed that the family doctor should have known better and suggested she complain.",
          next: "s-blame",
          quality: "unsafe",
          feedback:
            "This is not accurate and not professional. ACE inhibitor angioedema is unpredictable and can occur after years of safe use. Blaming a colleague without facts harms the family's trust in their ongoing care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "Later that morning",
      text:
        "The family doctor calls the department upset after the daughter phones her office. Your department chief asks you to review the conversation. You call the daughter back to correct the information.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is extubated on day three after a cuff leak test and scope. She goes home on a new blood pressure drug with a documented allergy. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ae-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes a threatened airway from tongue and floor of mouth swelling, drooling and voice change.",
      points: 2,
      teaching: "Tongue, floor of mouth and laryngeal involvement predict the need for airway intervention. Lip swelling alone is lower risk.",
      source: "cafg-2",
    },
    {
      id: "ae-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls anesthesia and ENT early and moves the patient to resus.",
      points: 2,
      teaching: "Help should be called while there is still time. The most experienced operator should manage an anticipated difficult airway.",
      source: "cafg-2",
    },
    {
      id: "ae-r1",
      competency: "resuscitation",
      criterion: "physical",
      text: "Keeps the patient upright, assesses the larynx by nasopharyngoscopy, and marks the cricothyroid membrane before any intervention.",
      points: 3,
      critical: true,
      teaching: "A bedside scope shows how much of the glottis is involved. Marking the membrane early saves critical seconds if a surgical airway is needed.",
      source: "cafg-2",
    },
    {
      id: "ae-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies bradykinin mediated ACE inhibitor angioedema and distinguishes it from histamine mediated swelling and hereditary angioedema.",
      points: 2,
      teaching: "No urticaria, no itch and ACE inhibitor use point to bradykinin. Onset can occur years after starting the drug.",
      source: "hae-canada",
    },
    {
      id: "ae-m1",
      competency: "management",
      criterion: "management",
      text: "States that evidence for icatibant, C1 inhibitor and plasma is weak and does not let drug therapy delay airway management.",
      points: 2,
      teaching: "A randomized trial found icatibant no better than placebo for ACE inhibitor angioedema. The airway plan is the treatment.",
      source: "sinert",
    },
    {
      id: "ae-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Chooses awake nasal flexible bronchoscopic intubation with the patient upright and spontaneous breathing kept.",
      points: 3,
      critical: true,
      teaching: "Awake intubation keeps the patient's airway tone and breathing. The nasal route bypasses the swollen tongue.",
      source: "das-ati",
    },
    {
      id: "ae-m2",
      competency: "management",
      criterion: "management",
      text: "Uses topical lidocaine within 9 mg/kg lean body weight, a nasal vasoconstrictor, minimal sedation and high flow nasal oxygen.",
      points: 2,
      teaching: "Good topical anesthesia matters more than sedation. Over sedation can cause obstruction and apnea.",
      source: "das-ati",
    },
    {
      id: "ae-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Prepares a double setup with a scalpel, bougie and 6.0 tube open and a named trigger for a surgical airway.",
      points: 3,
      critical: true,
      teaching: "A double setup turns failure into a planned next step. Say the trigger out loud before starting.",
      source: "cafg-2",
    },
    {
      id: "ae-l2",
      competency: "leadership",
      criterion: "process",
      text: "Briefs the team on plan A and the surgical backup and assigns a second operator to the neck.",
      points: 1,
      teaching: "A shared mental model reduces hesitation. The person at the neck should know exactly when to cut.",
      source: "das-ati",
    },
    {
      id: "ae-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to ICU and plans extubation only after swelling resolves with a cuff leak and scope check.",
      points: 1,
      teaching: "ACE inhibitor angioedema usually settles over 24 to 72 hours. Early extubation risks a harder second airway.",
      source: "cafg-2",
    },
    {
      id: "ae-m3",
      competency: "management",
      criterion: "management",
      text: "Stops the ACE inhibitor permanently, records it as an allergy and advises caution with ARBs.",
      points: 1,
      teaching: "Recurrence is common if the drug is continued. ARBs carry a small risk of angioedema and should be chosen carefully.",
      source: "ramipril-pm",
    },
    {
      id: "ae-c1",
      competency: "communication",
      criterion: "process",
      text: "Responds to the daughter with empathy and an accurate explanation without blaming the prescriber.",
      points: 2,
      teaching: "Explain that the reaction is rare and unpredictable. Blame without facts damages trust in ongoing care.",
      source: "hc-adr",
    },
    {
      id: "ae-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Reports the serious adverse drug reaction to Health Canada and informs the family physician.",
      points: 1,
      teaching: "Since December 2019, Canadian hospitals must report serious adverse drug reactions to Health Canada in writing within 30 days of first documenting them. The duty sits with the hospital, so use its reporting process.",
      source: "hc-adr",
    },
    {
      id: "ae-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks when the swelling started, where it began and how fast it has spread, and learns it went from lip to tongue and voice in under two hours.",
      points: 2,
      teaching: "Swelling that spreads from lip to tongue with a voice change in under two hours is progressing. Progression over time is part of airway risk assessment and calls for a plan now.",
      source: "cafg-2",
    },
    {
      id: "ae-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about medications and identifies ramipril, and asks how long she has taken it.",
      points: 2,
      teaching: "Angioedema of the face, tongue, glottis and larynx is a known, life threatening ACE inhibitor reaction. The monograph says to stop the drug at once when it occurs.",
      source: "ramipril-pm",
    },
    {
      id: "ae-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about hives, itch, new foods or stings, previous episodes and family history of swelling.",
      points: 2,
      teaching: "No hives, itch or trigger points away from allergy. No prior episodes and no family history make hereditary angioedema unlikely.",
      source: "hae-canada",
    },
  ],
  sources: [
    {
      id: "cafg-2",
      citation:
        "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021.",
    },
    {
      id: "das-ati",
      citation: "Ahmad I, El Boghdadly K, Bhagrath R, et al. Difficult Airway Society guidelines for awake tracheal intubation in adults. Anaesthesia. 2020.",
    },
    {
      id: "sinert",
      citation: "Sinert R, Levy P, Bernstein JA, et al. Randomized trial of icatibant for angiotensin converting enzyme inhibitor induced upper airway angioedema. J Allergy Clin Immunol Pract. 2017.",
    },
    {
      id: "hae-canada",
      citation: "Betschel S, Badiou J, Binkley K, et al. The International/Canadian Hereditary Angioedema Guideline. Allergy Asthma Clin Immunol. 2019.",
    },
    {
      id: "hc-adr",
      citation: "Health Canada. Mandatory reporting of serious adverse drug reactions and medical device incidents by hospitals. Guidance document. 2019.",
      url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting/mandatory-hospital-reporting/drugs-devices/guidance.html",
    },
    {
      id: "ramipril-pm",
      citation: "Bausch Health, Canada Inc. Altace (ramipril) product monograph. Warnings and precautions, angioedema. Date of revision January 8, 2021.",
      url: "https://pdf.hres.ca/dpd_pm/00059606.PDF",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
