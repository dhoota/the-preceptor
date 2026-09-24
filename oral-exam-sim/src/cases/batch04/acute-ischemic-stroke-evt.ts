// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const acuteIschemicStrokeEvt: OralCase = {
  id: "acute-ischemic-stroke-evt",
  title: "Found at the kitchen table unable to speak",
  blueprint: "neuro",
  alsoCovers: ["resus", "systems"],
  summary: "A 71 year old woman with sudden speech and arm problems arrives at a hospital without endovascular capability.",
  durationMinutes: 15,
  stem:
    "You are working at a 180 bed community hospital in eastern Ontario. It is a designated stroke centre with CT and CT angiography around the clock and tenecteplase in the department. " +
    "There is no endovascular therapy on site. The comprehensive stroke centre is 70 km away, about 55 minutes by land ambulance. " +
    "Marguerite Poirier is 71 years old. Her husband heard her making breakfast at 07:40. At 07:55 he found her slumped at the kitchen table, unable to talk, with a limp right arm. " +
    "Paramedics pre notified you and she arrives at 08:30. " +
    "Triage vitals: heart rate 96 and irregular, blood pressure 198/104, respiratory rate 18, SpO2 95 percent on room air, temperature 36.8, capillary glucose 6.4 mmol/L. CTAS 1. " +
    "The paramedic says: 'Code stroke. She is on ramipril and metformin. Her husband says she was told she had an irregular heartbeat last year but she refused a blood thinner.'",
  findings: [
    {
      id: "timeline",
      label: "Timeline and collateral",
      result:
        "Her husband is certain she was normal at 07:40 because she answered him from the kitchen. He found her at 07:55. " +
        "No head strike, no seizure activity, no vomiting. She weighs about 72 kg. She lives independently and still drives. Modified Rankin 0 before today.",
    },
    {
      id: "contraindications",
      label: "Thrombolysis screen",
      result:
        "No surgery, trauma or bleeding in the last 3 months. No prior intracranial hemorrhage. No stroke in the last 3 months. " +
        "No anticoagulant, no antiplatelet. No known intracranial tumour or aneurysm. No recent lumbar puncture or arterial puncture.",
    },
    {
      id: "nihss",
      label: "NIH Stroke Scale",
      result:
        "Total 17. Orientation questions 2, commands 1, gaze 1 with a left gaze preference, visual fields 2 with a right hemianopia, facial palsy 2, " +
        "right arm 3, right leg 2, sensory 1, language 2 with a severe mixed aphasia, dysarthria 1. Level of consciousness 0. No ataxia. No extinction.",
    },
    {
      id: "exam",
      label: "General exam",
      result:
        "Airway patent. She handles her secretions. Irregularly irregular pulse. Chest clear. No carotid bruit. No signs of trauma. Tongue and lips normal.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Atrial fibrillation with a ventricular rate of 94. No acute ST changes. QTc 440 ms.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 131 g/L. Platelets 244 x 10^9/L. INR 1.0. PTT 29 s. Creatinine 88 µmol/L. Sodium 139 mmol/L. Potassium 4.2 mmol/L. " +
        "Glucose 6.4 mmol/L. High sensitivity troponin I 14 ng/L. Results come back at 09:05.",
    },
    {
      id: "ncct",
      label: "Non contrast CT head",
      result:
        "Done at 08:41. No hemorrhage. Hyperdense left middle cerebral artery sign. Subtle loss of the left insular ribbon. ASPECTS 9. No old infarcts.",
    },
    {
      id: "cta",
      label: "CT angiogram head and neck",
      result:
        "Done at 08:44. Occlusion of the proximal left M1 segment. Multiphase CTA shows good collateral filling of the left MCA territory. " +
        "Aortic arch and carotid bifurcations without significant stenosis. Images pushed to the comprehensive stroke centre.",
    },
    {
      id: "husband",
      label: "Husband's concerns",
      result:
        "He is tearful. He says: 'The doctor told her to take the blood thinner and she said no. I should have made her take it. Is this my fault?'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Arrival",
      text:
        "She is on the paramedic stretcher. Her eyes look to the left. She is trying to speak but only makes sounds. The CT technologist is standing by.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What are your priorities in the first ten minutes?",
      seconds: 90,
      modelAnswer: [
        "Airway, breathing and circulation. Oxygen only if SpO2 falls below 92 percent.",
        "Confirm last known well at 07:40 from the husband, not the time she was found.",
        "Capillary glucose already 6.4 mmol/L, so hypoglycemia is excluded as a mimic.",
        "Rapid NIHSS and thrombolysis screen, weight estimate, IV access and bloods drawn on the way.",
        "Straight to non contrast CT and CT angiogram arch to vertex without waiting for labs.",
        "Aim for a door to needle time of 30 minutes or less.",
      ],
      rubric: ["st-a1", "st-a2", "st-r1", "st-m1", "st-l1"],
      choices: [
        {
          id: "c-direct-ct",
          label: "I confirmed last known well at 07:40, checked the glucose, did a rapid NIHSS and took her straight from the stretcher to CT and CT angiogram while bloods were drawn.",
          next: "s-imaging",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Last known well is 07:40, not 07:55. Only the glucose is needed before imaging. Parallel processing is how a department reaches a 30 minute door to needle target.",
        },
        {
          id: "c-wait-labs",
          label: "I sent a full panel including INR and platelets and planned CT once the results were back.",
          next: "s-wait-labs",
          quality: "partial",
          feedback:
            "Waiting for coagulation results is not needed in a patient not known to take anticoagulants. Guidelines say only glucose must precede thrombolysis. Every minute of delay loses about 1.9 million neurons.",
        },
        {
          id: "c-lower-bp",
          label: "I gave hydralazine to bring her systolic down to 140 before sending her to CT.",
          next: "s-lower-bp",
          quality: "unsafe",
          feedback:
            "Aggressive lowering before reperfusion can reduce collateral flow to the penumbra. The target before thrombolysis is below 185/110, not 140. Labetalol in small titrated doses is the usual first choice.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-labs",
      phase: "Thirty five minutes later",
      text:
        "The INR comes back at 1.0 at 09:05. She is only now leaving for CT. The charge nurse reminds you that the department target is 30 minutes door to needle. You have already lost the chance to meet it.",
      next: "s-imaging",
    },
    {
      kind: "say",
      id: "s-lower-bp",
      phase: "Fifteen minutes later",
      text:
        "Her pressure falls to 128/70. Her right leg, which was lifting against gravity, now falls straight to the bed. Her NIHSS is 20. The nurse asks if you want a fluid bolus. You give 500 mL of normal saline and head to CT.",
      next: "s-imaging",
    },
    {
      kind: "say",
      id: "s-imaging",
      phase: "Imaging",
      text:
        "Non contrast CT shows no hemorrhage, a hyperdense left MCA sign and an ASPECTS of 9. CT angiogram shows a proximal left M1 occlusion with good collaterals. It is 08:48.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "Interpretation",
      prompt: "Interpret the imaging. Is she a candidate for thrombolysis, for endovascular therapy, or both? How do you handle consent?",
      seconds: 75,
      modelAnswer: [
        "No hemorrhage. ASPECTS 9 means a small established core.",
        "Proximal M1 occlusion is a large vessel occlusion with good collaterals.",
        "She is within 4.5 hours for IV thrombolysis and within 6 hours for endovascular therapy.",
        "She is a candidate for both. Thrombolysis should not delay transfer for EVT.",
        "Atrial fibrillation without anticoagulation is the likely cardioembolic source.",
        "She cannot give informed consent because of aphasia. Her husband is her substitute decision maker and is at the bedside, so explain and get his consent quickly.",
        "If asking him would delay treatment and risk serious harm, treat under the emergency provision of the Health Care Consent Act and document why.",
      ],
      rubric: ["st-a3", "st-a4", "st-c1"],
      next: "q-bp",
    },
    {
      kind: "question",
      id: "q-bp",
      phase: "Blood pressure",
      prompt: "Her pressure is 196/102. The pharmacist has tenecteplase ready. What do you do about the blood pressure?",
      seconds: 60,
      modelAnswer: [
        "Target below 185/110 before thrombolysis.",
        "Labetalol 10 to 20 mg IV over 1 to 2 minutes, repeat once if needed.",
        "Hydralazine or a nicardipine infusion are alternatives if labetalol fails.",
        "Do not overshoot. Collaterals depend on perfusion pressure.",
        "After thrombolysis keep the pressure below 180/105 for 24 hours.",
      ],
      rubric: ["st-m2"],
      choices: [
        {
          id: "c-labetalol",
          label: "I gave labetalol 10 mg IV over 2 minutes, rechecked at 5 minutes and gave a second 10 mg dose to get below 185/110.",
          next: "q-lytic",
          quality: "strong",
          feedback:
            "Correct target and correct drug. Labetalol 10 to 20 mg IV repeated once is the usual first step. Once she is below 185/110 you can give the lytic.",
        },
        {
          id: "c-give-anyway",
          label: "I gave the tenecteplase straight away because time is brain and the pressure is only a little high.",
          next: "s-give-anyway",
          quality: "unsafe",
          feedback:
            "A pressure above 185/110 at the time of thrombolysis raises the risk of symptomatic intracranial hemorrhage. The threshold is firm. Two doses of labetalol usually take less than 10 minutes.",
        },
        {
          id: "c-target-140",
          label: "I started a labetalol infusion aiming for a systolic of 140 before thrombolysis.",
          next: "s-target-140",
          quality: "partial",
          feedback:
            "Treating the pressure is right, but the target is below 185/110. Driving it to 140 before reperfusion can starve the penumbra. An infusion also takes longer to titrate than bolus doses.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-give-anyway",
      phase: "In the resuscitation bay",
      text:
        "The nurse stops before pushing it. She reminds you the unit protocol requires a pressure below 185/110. You give labetalol 20 mg IV and her pressure is 176/98 four minutes later.",
      next: "q-lytic",
    },
    {
      kind: "say",
      id: "s-target-140",
      phase: "Twelve minutes later",
      text:
        "Her pressure is now 150/84 but the infusion has cost you time. Her right leg power has dropped slightly. You stop the infusion and move on to thrombolysis.",
      next: "q-lytic",
    },
    {
      kind: "question",
      id: "q-lytic",
      phase: "Thrombolysis",
      prompt: "Her pressure is now 178/98. Which thrombolytic do you give and at what dose?",
      seconds: 60,
      modelAnswer: [
        "Tenecteplase 0.25 mg/kg IV as a single bolus over 5 seconds. Maximum 25 mg. For 72 kg that is 18 mg.",
        "Alteplase 0.9 mg/kg is an acceptable alternative. Maximum 90 mg. 10 percent as a bolus over 1 minute and the rest over 60 minutes.",
        "Tenecteplase is simpler for a patient being transferred for EVT.",
        "Do not skip thrombolysis in an eligible patient because EVT is planned.",
        "No antiplatelets or anticoagulants for 24 hours after thrombolysis.",
      ],
      rubric: ["st-m3", "st-m4"],
      choices: [
        {
          id: "c-tnk",
          label: "I gave tenecteplase 18 mg IV as a single bolus, which is 0.25 mg/kg for 72 kg.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Right drug and right dose. Tenecteplase 0.25 mg/kg to a maximum of 25 mg was non inferior to alteplase in the Canadian AcT trial. A single bolus means no infusion to manage in the ambulance.",
        },
        {
          id: "c-alteplase",
          label: "I gave alteplase 65 mg total, 6.5 mg as a bolus and 58.5 mg over 60 minutes.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "The dose of 0.9 mg/kg is correct and alteplase remains an accepted choice. The examiner will want you to note the infusion must continue safely during transfer. Many Canadian centres now prefer tenecteplase for drip and ship.",
        },
        {
          id: "c-tnk-high",
          label: "I gave tenecteplase 0.4 mg/kg, which is 29 mg, because she has a large clot.",
          next: "s-tnk-high",
          quality: "unsafe",
          feedback:
            "The stroke dose is 0.25 mg/kg with a maximum of 25 mg. The 0.4 mg/kg dose showed no benefit and more hemorrhage. The cardiac weight bands for tenecteplase do not apply to stroke.",
        },
        {
          id: "c-skip-lysis",
          label: "I held thrombolysis because she is going for thrombectomy anyway.",
          next: "s-skip-lysis",
          quality: "partial",
          feedback:
            "Canadian recommendations say eligible patients should get IV thrombolysis even when EVT is planned, especially when transfer is needed. The lytic can reperfuse before she reaches the angio suite. Skipping it is not supported for a drip and ship patient.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tnk-high",
      phase: "Pharmacy check",
      text:
        "The pharmacist flags the order. The stroke dose caps at 25 mg. She redraws 18 mg and you give it at 09:02. You document the near miss.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-skip-lysis",
      phase: "Telestroke call",
      text:
        "The stroke neurologist at the comprehensive centre asks why she has not had thrombolysis. The transfer will take at least 75 minutes door to door. You give tenecteplase 18 mg at 09:10.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Endovascular therapy",
      prompt: "How do you get her to endovascular therapy, and what are your orders while she waits for the ambulance?",
      seconds: 90,
      modelAnswer: [
        "Call the comprehensive stroke centre through the regional stroke protocol as soon as the CTA shows the occlusion.",
        "Do not wait to see if thrombolysis works before transfer.",
        "Confirm images are shared through the imaging network.",
        "Emergent land ambulance with a nurse or paramedic able to manage post lytic care.",
        "Neuro vitals every 15 minutes. Pressure below 180/105. Nothing by mouth until a swallow screen.",
        "No antiplatelet, anticoagulant or heparin flush for 24 hours.",
      ],
      rubric: ["st-d1", "st-d2", "st-c3"],
      next: "s-angioedema",
    },
    {
      kind: "say",
      id: "s-angioedema",
      phase: "Twenty five minutes after thrombolysis",
      text:
        "The ambulance is ten minutes away. The nurse calls you back. The right side of Mrs Poirier's tongue and upper lip are swollen. Her voice is not assessable because of aphasia. SpO2 96 percent. No stridor. No rash. Pressure 164/90.",
      next: "q-angioedema",
    },
    {
      kind: "question",
      id: "q-angioedema",
      phase: "Complication",
      prompt: "What is happening and how do you manage it? Can she still go?",
      seconds: 90,
      modelAnswer: [
        "Orolingual angioedema after thrombolysis. Risk is higher with ACE inhibitors. It is usually on the side opposite the ischemic hemisphere, here the right side.",
        "Assess the airway now and look for progression to the floor of mouth, larynx or palate.",
        "Hold ramipril and flag the reaction.",
        "Methylprednisolone 125 mg IV, diphenhydramine 50 mg IV and famotidine 20 mg IV.",
        "If it progresses, give epinephrine, for example 0.5 mg IM or 0.5 mg nebulized, and prepare for awake fibreoptic intubation with a surgical airway backup.",
        "Icatibant or C1 esterase inhibitor can be considered if refractory.",
        "Swelling limited to the anterior tongue and lips is lower risk. Involvement of the larynx, palate, floor of mouth or rapid progression is higher risk.",
        "Transfer only when the swelling is stable, with a crew that can manage the airway.",
      ],
      rubric: ["st-r2", "st-m5"],
      choices: [
        {
          id: "c-angio-strong",
          label: "I assessed the airway, held the ramipril, gave methylprednisolone, diphenhydramine and famotidine, had difficult airway equipment ready, and sent her once the swelling was stable with an airway capable escort.",
          next: "q-husband",
          quality: "strong",
          feedback:
            "This is the expected answer. Most cases are mild and settle with these measures. The airway plan and the escort decision show safe judgement. The receiving centre needs to know before she arrives.",
        },
        {
          id: "c-angio-rsi",
          label: "I did a rapid sequence intubation straight away to protect her airway before transfer.",
          next: "s-angio-rsi",
          quality: "partial",
          feedback:
            "Airway protection is right if the swelling progresses, but most post thrombolysis angioedema is limited to the lips and tongue. Rapid sequence induction in a swollen airway can create a cannot intubate, cannot oxygenate situation. An awake approach is safer if intubation is needed.",
        },
        {
          id: "c-angio-ignore",
          label: "I gave diphenhydramine and sent her in the ambulance without delay.",
          next: "s-angio-ignore",
          quality: "unsafe",
          feedback:
            "Sending a patient with evolving angioedema in a land ambulance without reassessment risks losing the airway en route. Steroids and H2 blockade are part of treatment. You must watch for progression before she leaves.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-angio-rsi",
      phase: "In the resuscitation bay",
      text:
        "The respiratory therapist asks you to look again first. On direct view the swelling is limited to the right anterior tongue and lip. You treat with medications and it stops progressing over 15 minutes. You keep the airway kit at the bedside.",
      next: "q-husband",
    },
    {
      kind: "say",
      id: "s-angio-ignore",
      phase: "Ambulance bay",
      text:
        "The paramedic refuses to load her until the physician reassesses. Her tongue is larger. You give methylprednisolone, diphenhydramine and famotidine, hold the ramipril, watch for 15 minutes and the swelling plateaus.",
      next: "q-husband",
    },
    {
      kind: "question",
      id: "q-husband",
      phase: "Family",
      prompt: "Before she leaves, her husband asks whether this is his fault because she refused the blood thinner. What do you say?",
      seconds: 60,
      modelAnswer: [
        "Sit down with him. Acknowledge his distress.",
        "Explain in plain words: a clot, likely from the irregular heartbeat, has blocked a main artery in the brain.",
        "This is not his fault. The decision was hers and many people make the same choice.",
        "Explain the clot dissolving drug given and the procedure planned at the other hospital.",
        "Be honest that the outcome is uncertain and that bleeding in the brain is a known risk.",
        "Arrange for him to travel safely and give him the receiving hospital's name.",
      ],
      rubric: ["st-c2", "st-a5"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "Give your handover to the transport team and the receiving stroke neurologist.",
      seconds: 60,
      modelAnswer: [
        "Identify the patient and the diagnosis. Left M1 occlusion, NIHSS 17, ASPECTS 9.",
        "Last known well 07:40. Door 08:30. Tenecteplase 18 mg and the exact time it was given.",
        "Labetalol doses given and current pressure. Target below 180/105.",
        "Orolingual angioedema about 25 minutes after the lytic, treated, stable. Ramipril held.",
        "Atrial fibrillation, not anticoagulated. No antithrombotics for 24 hours.",
        "Airway risks, and what to do if her neuro exam worsens.",
      ],
      rubric: ["st-c3", "st-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She leaves at 09:50 with a critical care paramedic. At the comprehensive stroke centre the left M1 is reopened with a single pass. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "st-a1",
      competency: "assessment",
      text: "Establishes last known well as 07:40 from the husband rather than the time she was found.",
      points: 2,
      teaching: "Treatment windows start at last known well. The time a patient is found is often later and can wrongly exclude them.",
      source: "hsf-acute",
    },
    {
      id: "st-a2",
      competency: "assessment",
      text: "Confirms capillary glucose before imaging and thrombolysis.",
      points: 1,
      teaching: "Hypoglycemia is the classic stroke mimic. Glucose is the only lab required before thrombolysis in most patients.",
      source: "hsf-acute",
    },
    {
      id: "st-a3",
      competency: "assessment",
      text: "Recognizes cortical signs such as aphasia, gaze deviation and hemianopia as markers of a likely large vessel occlusion.",
      points: 1,
      teaching: "Gaze deviation plus aphasia or neglect with a high NIHSS predicts a large vessel occlusion. It should trigger CT angiography with the first scan.",
      source: "hsf-acute",
    },
    {
      id: "st-a4",
      competency: "assessment",
      text: "Interprets the CT as no hemorrhage with ASPECTS 9 and the CTA as a proximal M1 occlusion eligible for both thrombolysis and EVT.",
      points: 2,
      teaching: "ASPECTS 6 or more with a proximal anterior occlusion was the population in the original EVT trials such as ESCAPE. Trials since 2023 show benefit with larger cores, often ASPECTS 3 to 5, in selected patients, and the 2025 Canadian EVT update addresses them.",
      source: "escape",
    },
    {
      id: "st-a5",
      competency: "assessment",
      text: "Identifies untreated atrial fibrillation as the likely cardioembolic source.",
      points: 1,
      teaching: "Atrial fibrillation is a leading cause of large vessel stroke. Anticoagulation timing after stroke is decided by the stroke team based on infarct size.",
      source: "hsf-acute",
    },
    {
      id: "st-r1",
      competency: "resuscitation",
      text: "Assesses airway and breathing and gives oxygen only if SpO2 is below 92 percent.",
      points: 1,
      teaching: "Routine oxygen does not help non hypoxic stroke patients. Check the airway because aphasia and gaze deviation can hide a falling level of consciousness.",
      source: "hsf-acute",
    },
    {
      id: "st-r2",
      competency: "resuscitation",
      text: "Examines the airway for progression of angioedema and prepares for an awake difficult airway with surgical backup.",
      points: 2,
      teaching: "Post thrombolysis angioedema is usually mild but can progress. Awake fibreoptic intubation is safer than rapid sequence induction in a swollen airway.",
      source: "aha-2019",
    },
    {
      id: "st-m1",
      competency: "management",
      text: "Takes the patient directly to non contrast CT and CT angiogram without waiting for bloods, targeting door to needle of 30 minutes or less.",
      points: 2,
      teaching: "Canadian recommendations set a median door to needle target of 30 minutes. CTA with the first scan identifies EVT candidates without extra delay.",
      source: "hsf-acute",
    },
    {
      id: "st-m2",
      competency: "management",
      text: "Lowers blood pressure below 185/110 before thrombolysis with labetalol 10 to 20 mg IV, without overshooting.",
      points: 2,
      critical: true,
      teaching: "Thrombolysis above 185/110 raises the risk of symptomatic hemorrhage. Excessive lowering can extend the infarct. Keep below 180/105 for 24 hours after.",
      source: "hsf-acute",
    },
    {
      id: "st-m3",
      competency: "management",
      text: "Gives tenecteplase 0.25 mg/kg IV bolus to a maximum of 25 mg, or alteplase 0.9 mg/kg to a maximum of 90 mg, within 4.5 hours of last known well.",
      points: 3,
      critical: true,
      teaching: "Tenecteplase 0.25 mg/kg was non inferior to alteplase in the Canadian AcT trial. The stroke dose is not the cardiac weight band dose.",
      source: "act",
    },
    {
      id: "st-m4",
      competency: "management",
      text: "Does not withhold thrombolysis from an eligible patient because EVT is planned.",
      points: 1,
      teaching: "For patients who must be transferred for EVT, thrombolysis is recommended in Canada. It can reperfuse before the angio suite and does not delay the procedure.",
      source: "hsf-acute",
    },
    {
      id: "st-m5",
      competency: "management",
      text: "Treats orolingual angioedema with methylprednisolone 125 mg IV, diphenhydramine 50 mg IV and famotidine 20 mg IV, holds the ACE inhibitor, and escalates to epinephrine if it progresses.",
      points: 2,
      teaching: "Angioedema occurs in up to 5 percent of patients after thrombolysis, more often with ACE inhibitors. Icatibant or C1 esterase inhibitor can be considered if refractory.",
      source: "aha-2019",
    },
    {
      id: "st-d1",
      competency: "disposition",
      text: "Arranges emergent transfer to the comprehensive stroke centre for EVT as soon as the CTA shows the occlusion, without waiting to see if thrombolysis works.",
      points: 3,
      critical: true,
      teaching: "EVT for proximal anterior occlusion greatly improves functional outcome. Each 30 minutes of delay to reperfusion lowers the chance of independence.",
      source: "escape",
    },
    {
      id: "st-d2",
      competency: "disposition",
      text: "Writes post thrombolysis orders: neuro vitals every 15 minutes, pressure below 180/105, nothing by mouth until swallow screen, no antithrombotics for 24 hours.",
      points: 1,
      teaching: "Any new headache, vomiting or neuro decline after thrombolysis needs an urgent CT to look for hemorrhage.",
      source: "hsf-acute",
    },
    {
      id: "st-c1",
      competency: "communication",
      text: "Recognizes the patient cannot consent because of aphasia, seeks rapid consent from her husband as substitute decision maker, and uses the emergency provision only if seeking consent would cause harmful delay.",
      points: 1,
      teaching: "In Ontario the substitute decision maker gives consent when one is available. If obtaining consent would delay treatment and risk serious harm, the Health Care Consent Act allows emergency treatment. Document the reason.",
      source: "hcca",
    },
    {
      id: "st-c2",
      competency: "communication",
      text: "Explains the diagnosis and plan to the husband in plain words and reassures him without blame about the declined anticoagulant.",
      points: 1,
      teaching: "Families often feel guilt after a preventable stroke. A calm, honest and blame free explanation supports them through a frightening event.",
      source: "hsf-acute",
    },
    {
      id: "st-c3",
      competency: "communication",
      text: "Gives a structured handover including last known well, NIHSS, imaging, lytic dose and time, pressure targets and the angioedema.",
      points: 1,
      teaching: "A clear handover with exact times lets the receiving team decide quickly and avoid repeating imaging.",
      source: "hsf-acute",
    },
    {
      id: "st-l1",
      competency: "leadership",
      text: "Runs parallel processes by assigning roles for IV access, bloods, weight, lytic preparation and imaging.",
      points: 1,
      teaching: "Door to needle times fall when tasks happen at the same time. The team leader should state the plan and assign each role out loud.",
      source: "hsf-acute",
    },
  ],
  sources: [
    {
      id: "hsf-acute",
      citation: "Heran M et al. Canadian Stroke Best Practice Recommendations. Acute Stroke Management, 7th edition practice guidelines update, 2022. Heart and Stroke Foundation of Canada. Canadian Journal of Neurological Sciences.",
      url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management",
    },
    {
      id: "act",
      citation:
        "Menon BK et al. Intravenous tenecteplase compared with alteplase for acute ischaemic stroke in Canada (AcT). A pragmatic, multicentre, open label, registry linked, randomised, controlled, non inferiority trial. Lancet. 2022.",
    },
    {
      id: "escape",
      citation: "Goyal M et al. Randomized assessment of rapid endovascular treatment of ischemic stroke (ESCAPE). New England Journal of Medicine. 2015.",
    },
    {
      id: "aha-2019",
      citation:
        "Powers WJ et al. Guidelines for the early management of patients with acute ischemic stroke. 2019 update. American Heart Association and American Stroke Association. Stroke. 2019.",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
