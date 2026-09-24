// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const chronicLithiumToxicity: OralCase = {
  id: "chronic-lithium-toxicity",
  title: "Confused and shaky after a stomach bug",
  blueprint: "tox",
  alsoCovers: ["geri", "psych"],
  priorityTopic: "tox",
  keyFeatures: [
    { topic: "tox", n: 1 },
    { topic: "tox", n: 5 },
    { topic: "tox", n: 6 },
    { topic: "tox", n: 7 },
    { topic: "delirium-agitation", n: 2 },
  ],
  summary: "A 71 year old woman with a mood disorder is confused and unsteady after several days of vomiting.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a 280 bed community hospital in southern Ontario when the following patient arrives. " +
    "There is an ICU, CT, and nephrology on call with intermittent hemodialysis on site. " +
    "A 71 year old woman is brought in by her daughter because she has been confused and unsteady for two days.",
  card: {
    vitals: {
      temperature: "36.9°C",
      pulse: "54/minute",
      resp: "18/minute",
      bp: "104/62 mmHg",
      o2sat: "96% on room air",
      weight: "64 kg (141 lb)",
    },
    medications: "Lithium carbonate, lisinopril, levothyroxine. Ibuprofen over the counter.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "Five days of vomiting and loose stools, then two days of confusion and unsteadiness on her feet. Her daughter brought her in. At triage she was GCS 13 and CTAS 2 with a capillary glucose of 6.1 mmol/L. The nurse says: 'She has a coarse tremor and keeps jerking her arms. Her daughter brought a bag of pill bottles. I think one of them is lithium.'",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "GCS 13 (E3 V4 M6). Disoriented to date and place. Slurred speech. Coarse tremor of both hands. " +
        "Multifocal myoclonic jerks of the arms. Reflexes 3+ throughout with 3 beats of ankle clonus on both sides. Past pointing on finger to nose. No neck stiffness. Pupils 3 mm and reactive.",
    },
    {
      id: "volume",
      label: "Volume status",
      result:
        "Dry mucous membranes. JVP not visible lying flat. Capillary refill 3 seconds. Lying blood pressure 104/62. Unable to stand for orthostatic vitals. Foley placed, 90 mL of pale urine in the first hour.",
    },
    {
      id: "meds",
      label: "Medication list",
      result:
        "Lithium carbonate 300 mg three times daily for 19 years. Lisinopril 10 mg daily started by her family doctor 16 days ago. " +
        "Ibuprofen 400 mg three times daily over the counter for knee pain for the past week. Levothyroxine 75 mcg daily. Her daughter gave her the morning lithium dose today.",
    },
    {
      id: "lithium",
      label: "Serum lithium level",
      result:
        "Lithium 3.4 mmol/L drawn in a plain red top tube at 11:20. Her last level three months ago was 0.8 mmol/L. The lab confirms the sample was not collected in a lithium heparin tube.",
    },
    {
      id: "chem",
      label: "Electrolytes and renal function",
      result:
        "Sodium 148 mmol/L. Potassium 4.9 mmol/L. Chloride 112 mmol/L. Bicarbonate 19 mmol/L. Urea 21.4 mmol/L. " +
        "Creatinine 186 µmol/L. Her baseline creatinine eight months ago was 92 µmol/L. Ionized calcium 1.36 mmol/L. Glucose 6.1 mmol/L.",
    },
    {
      id: "urine",
      label: "Urine studies",
      result: "Urine specific gravity 1.004. Urine osmolality 180 mOsm/kg. No leukocytes or nitrites. Serum osmolality 326 mOsm/kg.",
    },
    {
      id: "ecg",
      label: "ECG",
      result:
        "Sinus bradycardia at 52. PR 204 ms. QRS 96 ms. QTc 494 ms. Diffuse T wave flattening. No ST elevation.",
    },
    {
      id: "cbc",
      label: "CBC and other blood work",
      result:
        "WBC 12.1 x 10^9/L with normal differential. Hemoglobin 131 g/L. Platelets 244 x 10^9/L. TSH 7.6 mIU/L. CK 310 U/L. Acetaminophen and salicylate not detected. Ethanol not detected.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "No hemorrhage, mass or acute infarct. Moderate small vessel ischemic change.",
    },
    {
      id: "daughter",
      label: "Collateral from her daughter",
      result:
        "Her mood has been stable for years. She sees a psychiatrist once a year and her family doctor manages the lithium. " +
        "She kept taking all her pills while she was vomiting because she was afraid of getting sick again. No suicidal talk. No extra pills are missing.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "She is drowsy but rousable. Her arms jerk every few seconds. Her daughter is holding a pharmacy bag and asks if this is a stroke.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "What do you do in the first fifteen minutes, and what is your working diagnosis?",
      seconds: 90,
      modelAnswer: [
        "Monitor, IV access, airway check given GCS 13, glucose already normal.",
        "Working diagnosis is chronic lithium toxicity precipitated by volume loss, an ACE inhibitor and an NSAID.",
        "Differential includes serotonin toxicity, NMS, sepsis, stroke, nonconvulsive status and sodium disorders.",
        "Send a serum lithium level in a plain tube, electrolytes, creatinine, calcium, TSH, CK and an ECG.",
        "Hold lithium, lisinopril and ibuprofen now.",
        "Call the poison centre.",
        "Ask her daughter about the vomiting, intake, doses taken while sick, new drugs and any overdose, then examine for clonus, rigidity and volume status.",
      ],
      rubric: ["li-r1", "li-a1", "li-a2", "li-a3", "li-m1", "li-c3", "li-h1", "li-h2", "li-h3", "li-h4", "li-p1"],
      choices: [
        {
          id: "c-lithium",
          label: "I suspected chronic lithium toxicity, sent a serum lithium level in a plain tube with electrolytes and an ECG, and held her lithium, lisinopril and ibuprofen.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Good. Tremor, myoclonus, hyperreflexia and confusion in a patient on lithium with dehydration and a new ACE inhibitor is chronic toxicity until proven otherwise. " +
            "Holding the lithium and the interacting drugs is the first treatment. A lithium heparin tube can falsely raise the level, so the tube matters.",
        },
        {
          id: "c-sepsis",
          label: "I started a sepsis and stroke workup with a CT head first and planned to check the lithium level once those were back.",
          next: "s-delay",
          quality: "partial",
          feedback:
            "CT and a septic screen are reasonable, but they should not delay the lithium level. " +
            "The pill bottle and the neurological findings point straight at lithium. The examiner wanted the level sent and the drug held in the first minutes.",
        },
        {
          id: "c-charcoal",
          label: "I gave 50 g of activated charcoal by mouth because she may have taken too much lithium.",
          next: "s-charcoal",
          quality: "unsafe",
          feedback:
            "Activated charcoal does not bind lithium. In a drowsy patient with GCS 13 it adds aspiration risk and no benefit. " +
            "This is chronic toxicity from reduced clearance, not an acute ingestion. The examiner wanted the drug held and a level sent.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-delay",
      phase: "Two hours later",
      text:
        "The CT head is unremarkable and the septic screen is pending. She has had her usual noon lithium dose from the ward stock because nobody held it. " +
        "She is now harder to rouse. You send the lithium level. It comes back at 3.4 mmol/L.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-charcoal",
      phase: "Ten minutes later",
      text:
        "She coughs and gags on the second cup. The nurse suctions black material from her mouth and her SpO2 dips to 91 percent before recovering. " +
        "Her daughter asks why she was given charcoal. You stop it and send the lithium level. It comes back at 3.4 mmol/L.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "Results",
      text:
        "Lithium 3.4 mmol/L. Sodium 148 mmol/L. Creatinine 186 µmol/L with a baseline of 92. Urine specific gravity 1.004. " +
        "ECG shows sinus bradycardia at 52 with a QTc of 494 ms and flat T waves.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "Interpretation",
      prompt: "Interpret these results. Why is her sodium high and her urine dilute when she is so dry?",
      seconds: 75,
      modelAnswer: [
        "Chronic toxicity. Symptoms correlate poorly with the level and can be severe at modest levels.",
        "Acute kidney injury from volume loss, ACE inhibitor and NSAID reduced lithium clearance.",
        "Hypernatremia with dilute urine suggests lithium induced nephrogenic diabetes insipidus.",
        "She will keep losing free water, so sodium must be followed closely.",
        "Bradycardia, QT prolongation and T wave flattening are typical ECG effects.",
      ],
      rubric: ["li-a1", "li-a4"],
      next: "q-fluids",
    },
    {
      kind: "question",
      id: "q-fluids",
      phase: "Fluids",
      prompt: "How will you manage her fluids over the next few hours?",
      seconds: 75,
      modelAnswer: [
        "Restore volume with isotonic crystalloid, about 1 to 2 L in boluses, and reassess.",
        "Aim for euvolemia and good urine output, not forced diuresis.",
        "Check sodium every 4 to 6 hours because of nephrogenic diabetes insipidus.",
        "Once euvolemic, adjust to hypotonic fluid if sodium rises.",
        "Avoid diuretics. They worsen volume depletion, which increases proximal lithium reabsorption.",
      ],
      rubric: ["li-m2", "li-m3"],
      choices: [
        {
          id: "c-fluid-good",
          label: "I gave 1 L of normal saline over an hour, reassessed, gave a second litre, and checked her sodium every 4 hours because of possible nephrogenic diabetes insipidus.",
          next: "q-extrip",
          quality: "strong",
          feedback:
            "Correct. Volume restoration improves lithium clearance. Her dilute urine and sodium of 148 point to nephrogenic diabetes insipidus, so saline can push the sodium higher. " +
            "Frequent sodium checks and a switch to hypotonic fluid once she is euvolemic keep her safe.",
        },
        {
          id: "c-fluid-blind",
          label: "I ran normal saline at 250 mL/h and planned to recheck her blood work in the morning.",
          next: "s-sodium",
          quality: "partial",
          feedback:
            "Saline is right, but with nephrogenic diabetes insipidus she will lose free water and her sodium will climb on saline alone. " +
            "The examiner wanted sodium rechecked every 4 to 6 hours and the fluid adjusted.",
        },
        {
          id: "c-lasix",
          label: "I gave furosemide 40 mg IV to force a diuresis and wash out the lithium.",
          next: "s-lasix",
          quality: "unsafe",
          feedback:
            "Forced diuresis does not work for lithium. Diuretics worsen volume depletion, and the kidney then reabsorbs more lithium. " +
            "Her kidney injury will get worse. The examiner wanted isotonic volume repletion and sodium monitoring.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-sodium",
      phase: "Six hours later",
      text:
        "The nurse calls you. Her urine output is 300 mL/h of clear urine. Her sodium is now 156 mmol/L and she is more drowsy. " +
        "You change to hypotonic fluid and order sodium every 4 hours.",
      next: "q-extrip",
    },
    {
      kind: "say",
      id: "s-lasix",
      phase: "Two hours later",
      text:
        "She passes 400 mL of urine, then her output drops. Her blood pressure is 88/50 and her creatinine is 214 µmol/L. " +
        "The pharmacist calls to flag the furosemide. You stop it and restart isotonic fluid boluses.",
      next: "q-extrip",
    },
    {
      kind: "question",
      id: "q-extrip",
      phase: "Consultation",
      prompt:
        "You call nephrology. The nephrologist says: 'Her level is under 4. Give fluids and recheck in six hours. I do not think she needs dialysis.' What do you say?",
      seconds: 90,
      modelAnswer: [
        "EXTRIP recommends extracorporeal treatment when there is decreased level of consciousness, seizures or life threatening dysrhythmias, whatever the level.",
        "It also recommends it when kidney function is impaired and the level is over 4.0 mmol/L.",
        "It suggests it when the level is over 5.0 mmol/L, when there is significant confusion, or when the level is not expected to fall below 1.0 mmol/L within 36 hours.",
        "She has a GCS of 13, myoclonus and acute kidney injury. With her creatinine doubled, she is unlikely to reach 1.0 mmol/L within 36 hours. She meets criteria now.",
        "Intermittent hemodialysis is the preferred modality.",
        "Stay collegial, share the findings, and escalate if you still disagree.",
      ],
      rubric: ["li-m4", "li-c1"],
      choices: [
        {
          id: "c-advocate",
          label: "I explained that her decreased level of consciousness meets the EXTRIP recommendation for dialysis regardless of the level, and asked for urgent intermittent hemodialysis.",
          next: "s-seizure",
          quality: "strong",
          feedback:
            "Well done. In chronic toxicity the neurological picture drives the decision, not the number. " +
            "Decreased consciousness is a recommended indication on its own, and her kidney injury slows clearance. Clear data persuades consultants.",
        },
        {
          id: "c-accept",
          label: "I agreed to fluids alone and a repeat level in six hours because her level was under 4.0 mmol/L.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "A level under 4.0 does not rule out dialysis. EXTRIP recommends it for decreased consciousness regardless of the level. " +
            "With her creatinine doubled, lithium will clear slowly and neurotoxicity can become permanent. The examiner wanted you to advocate.",
        },
        {
          id: "c-no-dialysis",
          label: "I told the family dialysis would not help because lithium is not removed by dialysis.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "Lithium is small, water soluble and not protein bound. It is one of the most dialyzable drugs. " +
            "Hemodialysis is the definitive treatment for severe toxicity. The examiner wanted a clear request for urgent dialysis.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Some time later",
      text:
        "Two hours later the nurse reports she is now GCS 11 and her myoclonus is worse. You call the nephrologist back and describe the change. She agrees to come in.",
      next: "s-seizure",
    },
    {
      kind: "say",
      id: "s-seizure",
      phase: "Deterioration",
      text:
        "While the dialysis catheter tray is being set up, she has a generalized tonic clonic seizure. It has lasted two minutes. SpO2 is 88 percent. Her daughter is in the room.",
      next: "q-seizure",
    },
    {
      kind: "question",
      id: "q-seizure",
      phase: "Seizure",
      prompt: "Manage the seizure. Does it change your plan?",
      seconds: 75,
      modelAnswer: [
        "Recovery position, suction, high flow oxygen, bag valve mask ready.",
        "Lorazepam 4 mg IV, which is about 0.1 mg/kg capped at 4 mg, and repeat once after 5 minutes if still seizing.",
        "Check glucose and sodium.",
        "Seizure is a recommended EXTRIP indication. Dialysis is now emergent.",
        "Intubate if she does not protect her airway after the seizure. Dialysis can run with her intubated.",
        "Ask her daughter to step out with a nurse and update her.",
      ],
      rubric: ["li-m5", "li-m4"],
      next: "q-dialysis",
    },
    {
      kind: "question",
      id: "q-dialysis",
      phase: "Extracorporeal treatment",
      prompt: "The seizure stops after one dose. Nephrology is starting dialysis. What are the details of the dialysis plan and the monitoring after it?",
      seconds: 75,
      modelAnswer: [
        "Intermittent hemodialysis is preferred. Continuous therapy is acceptable only if intermittent is not available.",
        "Continue until clinical improvement or a level under 1.0 mmol/L.",
        "If a level is not available, run for at least 6 hours.",
        "Recheck the level after dialysis and serially over 12 hours to detect rebound from tissue stores.",
        "Repeat sessions may be needed.",
      ],
      rubric: ["li-m6", "li-d2"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "Family",
      prompt: "Her daughter asks: 'Was this caused by the new blood pressure pill? Did her doctor do this?' How do you respond?",
      seconds: 60,
      modelAnswer: [
        "Explain in plain words that lithium built up because she was dehydrated and her kidneys slowed.",
        "Say honestly that the blood pressure pill and ibuprofen can raise lithium levels.",
        "Do not assign blame. Several factors combined.",
        "Explain the plan, dialysis, ICU care and the risk of lasting effects.",
        "Tell her you will let the family doctor and psychiatrist know so the medications are reviewed.",
      ],
      rubric: ["li-c2", "li-d3"],
      choices: [
        {
          id: "c-honest",
          label: "I explained that dehydration plus the new blood pressure pill and ibuprofen let lithium build up, avoided blaming anyone, and said I would inform her family doctor and psychiatrist.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Good. Honest disclosure of a known interaction without blame is what the examiner wanted. " +
            "Closing the loop with the prescribers prevents a repeat and supports the family's trust.",
        },
        {
          id: "c-deflect",
          label: "I told her it was nobody's fault and that we should focus on getting her mother better.",
          next: "s-deflect",
          quality: "partial",
          feedback:
            "Kind, but incomplete. The daughter asked a direct question and deserves a direct answer. " +
            "The examiner wanted a plain explanation of the interaction and a plan to tell the prescribers.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-deflect",
      phase: "In the family room",
      text:
        "The daughter says she read online that blood pressure pills interact with lithium and asks again if that is what happened. She looks frustrated. You explain the interaction and the plan to contact the family doctor.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where does she go and what needs to happen before she leaves hospital?",
      seconds: 60,
      modelAnswer: [
        "ICU for dialysis, airway monitoring, frequent neurological checks and sodium checks.",
        "Serial lithium levels, sodium and creatinine.",
        "No lithium restart until psychiatry reviews her mood stabilizer plan.",
        "Stop the ACE inhibitor and NSAID. Medication reconciliation at discharge.",
        "Warn the family that some neurological effects can persist.",
      ],
      rubric: ["li-d1", "li-d3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Her lithium level falls to 0.9 mmol/L after one run of dialysis. The ICU team takes over. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "li-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Places her on a monitor, secures IV access and assesses airway protection given a GCS of 13.",
      points: 1,
      teaching: "A drowsy patient with myoclonus can seize or aspirate. Monitor and reassess the airway before anything else.",
      source: "baird",
    },
    {
      id: "li-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes chronic lithium toxicity from tremor, myoclonus, hyperreflexia and confusion, and names the precipitants.",
      points: 3,
      critical: true,
      teaching: "Volume loss, ACE inhibitors, ARBs, thiazides and NSAIDs all cut lithium clearance. Chronic toxicity causes neurotoxicity at levels that look modest.",
      source: "baird",
    },
    {
      id: "li-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Sends a serum lithium level in a plain tube, not a lithium heparin tube.",
      points: 1,
      teaching: "A green top lithium heparin tube can falsely raise the lithium result. Use a plain serum tube.",
      source: "baird",
    },
    {
      id: "li-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers a differential including serotonin toxicity, NMS, sepsis, stroke and nonconvulsive status.",
      points: 1,
      teaching: "Lithium toxicity overlaps with serotonin toxicity and NMS. Look for clonus, rigidity and fever to separate them.",
      source: "baird",
    },
    {
      id: "li-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies nephrogenic diabetes insipidus from hypernatremia with dilute urine, and interprets the ECG changes.",
      points: 2,
      teaching: "Lithium blocks the kidney's response to ADH. A dry patient with dilute urine and a high sodium is losing free water.",
      source: "baird",
    },
    {
      id: "li-m1",
      competency: "management",
      criterion: "management",
      text: "Holds lithium and the interacting lisinopril and ibuprofen immediately.",
      points: 2,
      critical: true,
      teaching: "Stopping ongoing intake is the first step. Every extra dose adds to a total body load that clears slowly.",
      source: "canmat",
    },
    {
      id: "li-m2",
      competency: "management",
      criterion: "management",
      text: "Restores volume with isotonic crystalloid in boluses and checks sodium every 4 to 6 hours.",
      points: 2,
      teaching: "Euvolemia improves lithium clearance. Watch sodium closely because saline can worsen hypernatremia when the kidney cannot concentrate urine.",
      source: "baird",
    },
    {
      id: "li-m3",
      competency: "management",
      criterion: "management",
      text: "Avoids activated charcoal and diuretics.",
      points: 1,
      teaching: "Charcoal does not bind lithium. Diuretics worsen volume depletion and increase lithium reabsorption.",
      source: "baird",
    },
    {
      id: "li-m4",
      competency: "management",
      criterion: "management",
      text: "Requests urgent hemodialysis for decreased level of consciousness or seizure regardless of the lithium level, citing EXTRIP criteria.",
      points: 3,
      critical: true,
      teaching: "EXTRIP recommends extracorporeal treatment for decreased consciousness, seizures or life threatening dysrhythmias at any level, and for impaired kidney function with a level over 4.0 mmol/L.",
      source: "extrip",
    },
    {
      id: "li-m5",
      competency: "management",
      criterion: "management",
      text: "Treats the seizure with lorazepam 4 mg IV, repeated once if needed, and protects the airway.",
      points: 2,
      teaching: "Benzodiazepines are first line for toxic seizures. A seizure also upgrades the urgency of dialysis.",
      source: "baird",
    },
    {
      id: "li-m6",
      competency: "management",
      criterion: "management",
      text: "States intermittent hemodialysis is preferred and continues until clinical improvement or a level under 1.0 mmol/L.",
      points: 2,
      teaching: "Intermittent hemodialysis clears lithium fastest. If no level is available, EXTRIP suggests running for at least 6 hours.",
      source: "extrip",
    },
    {
      id: "li-c1",
      competency: "communication",
      criterion: "process",
      text: "Advocates respectfully with the nephrologist using specific findings and criteria.",
      points: 2,
      teaching: "Bring the consultant the neurological exam, the creatinine trend and the criteria. Data moves a disagreement forward.",
      source: "extrip",
    },
    {
      id: "li-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains to the daughter honestly that the new medications and dehydration caused lithium to build up, without assigning blame.",
      points: 1,
      teaching: "Families often ask direct questions about cause. A clear, non judgmental answer maintains trust.",
      source: "canmat",
    },
    {
      id: "li-c3",
      competency: "communication",
      criterion: "process",
      text: "Calls the provincial poison centre for advice.",
      points: 1,
      teaching: "The poison centre helps with thresholds, dialysis timing and follow up levels, and tracks outcomes.",
      source: "aha-tox",
    },
    {
      id: "li-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits her to the ICU for dialysis, airway and neurological monitoring.",
      points: 2,
      teaching: "Severe chronic toxicity can progress to coma and seizures. She needs a monitored bed with dialysis access.",
      source: "extrip",
    },
    {
      id: "li-d2",
      competency: "disposition",
      criterion: "management",
      text: "Orders serial lithium levels after dialysis to detect rebound.",
      points: 1,
      teaching: "Lithium redistributes from tissue after dialysis. Rebound can need a second session.",
      source: "extrip",
    },
    {
      id: "li-d3",
      competency: "disposition",
      criterion: "process",
      text: "Arranges psychiatry review of the mood stabilizer and informs the family doctor about the interaction.",
      points: 1,
      teaching: "Restarting lithium is a psychiatric decision that needs a new monitoring plan. The prescriber needs to know what happened.",
      source: "canmat",
    },
    {
      id: "li-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the course of the vomiting and diarrhea, her oral intake, and whether she kept taking lithium while she was sick.",
      points: 2,
      teaching: "Chronic lithium toxicity usually follows volume loss while the usual dose continues. The timeline of intake and losses explains the level.",
      source: "baird",
    },
    {
      id: "li-h2",
      competency: "assessment",
      criterion: "history",
      text: "Takes a full medication history, including the new lisinopril, over the counter ibuprofen and the time of the last lithium dose.",
      points: 2,
      teaching: "ACE inhibitors and NSAIDs cut lithium clearance. Ask about new prescriptions and over the counter drugs in every patient on lithium.",
      source: "baird",
    },
    {
      id: "li-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks her daughter about intentional overdose, missing pills and suicidal thoughts.",
      points: 1,
      teaching: "Acute, acute on chronic and chronic lithium toxicity behave differently. Ruling out an intentional ingestion changes the risk assessment and the plan.",
      source: "baird",
    },
    {
      id: "li-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about her last lithium level, who prescribes and monitors it, and her psychiatric history.",
      points: 1,
      teaching: "A known baseline level and the monitoring plan put the current level in context and guide who needs to be told.",
      source: "canmat",
    },
    {
      id: "li-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for clonus, hyperreflexia, rigidity, cerebellar signs and volume status.",
      points: 2,
      teaching: "Hyperreflexia, clonus, myoclonus and ataxia fit lithium neurotoxicity. Rigidity and fever point more toward NMS or serotonin toxicity.",
      source: "baird",
    },
  ],
  sources: [
    {
      id: "extrip",
      citation:
        "Decker BS, Goldfarb DS, Dargan PI, et al. Extracorporeal treatment for lithium poisoning: systematic review and recommendations from the EXTRIP Workgroup. Clin J Am Soc Nephrol. 2015.",
      url: "https://pubmed.ncbi.nlm.nih.gov/25583292/",
    },
    {
      id: "baird",
      citation: "Baird-Gunning J, Lea-Henry T, Hoegberg LCG, Gosselin S, Roberts DM. Lithium poisoning. J Intensive Care Med. 2017.",
    },
    {
      id: "canmat",
      citation:
        "Yatham LN, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018.",
    },
    {
      id: "aha-tox",
      citation:
        "Lavonas EJ, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life threatening toxicity due to poisoning. Circulation. 2023.",
      url: "https://pubmed.ncbi.nlm.nih.gov/37721023/",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
