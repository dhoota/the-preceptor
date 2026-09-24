// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const thunderclapHeadacheSah: OralCase = {
  id: "thunderclap-headache-sah",
  title: "Headache in the middle of a workout",
  blueprint: "neuro",
  alsoCovers: ["resus", "systems"],
  priorityTopic: "headache",
  keyFeatures: [
    { topic: "headache", n: 1 },
    { topic: "headache", n: 2 },
    { topic: "headache", n: 6 },
    { topic: "airway", n: 5 },
  ],
  summary: "A 46 year old woman with a history of migraine has a sudden severe headache while lifting weights.",
  durationMinutes: 15,
  stem:
    "You are working at a 220 bed community hospital in central Ontario. CT and CT angiography are available around the clock with remote radiology reads. " +
    "There is an ICU and anesthesia on call. There is no neurosurgery. The nearest neurosurgical centre is 90 minutes away by land. Transfers go through CritiCall Ontario. " +
    "Priya Raman is 46 years old. At 10:15 she felt a sudden severe headache while deadlifting at her gym. She arrived by car at 11:40. " +
    "Triage vitals: heart rate 88, blood pressure 164/92, respiratory rate 16, SpO2 99 percent on room air, temperature 36.9, GCS 15. " +
    "She was triaged CTAS 3 as a migraine. You see her at 12:20. " +
    "The nurse says: 'She gets migraines. She vomited twice in the waiting room. She is asking for the migraine cocktail she usually gets.'",
  findings: [
    {
      id: "hx",
      label: "Headache history",
      result:
        "The pain reached 10 out of 10 within seconds of lifting the bar. It is occipital and spreading to her neck. It is different from her usual migraines, which build over an hour with an aura. " +
        "No loss of consciousness. She had a milder sudden headache 8 days ago that lasted a day. She did not seek care.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result:
        "Migraine with aura since her twenties. Smokes 10 cigarettes a day. No hypertension diagnosis. Her mother died of a brain bleed at 52. " +
        "Takes sumatriptan as needed. No anticoagulants or antiplatelets. No allergies.",
    },
    {
      id: "exam",
      label: "Neurological exam",
      result:
        "Alert and oriented. Photophobic. Neck flexion limited, she cannot touch chin to chest. Pupils 3 mm and equal. No ptosis. " +
        "Extraocular movements full. No pronator drift. Power 5 out of 5 throughout. Normal gait. Fundi show no papilledema.",
    },
    {
      id: "ottawa",
      label: "Ottawa SAH Rule elements",
      result:
        "Age 46. Neck pain present. No witnessed loss of consciousness. Onset during exertion. Instantly peaking pain. Limited neck flexion on exam.",
    },
    {
      id: "ct",
      label: "Non contrast CT head",
      result:
        "Done at 12:48, about 2.5 hours after onset. Diffuse subarachnoid blood in the basal cisterns and both Sylvian fissures, thickest in the interhemispheric fissure. " +
        "Mild dilation of the temporal horns. No intraparenchymal hematoma. Modified Fisher grade 3.",
    },
    {
      id: "cta",
      label: "CT angiogram head",
      result: "A 7 mm saccular aneurysm of the anterior communicating artery pointing anteriorly. No other aneurysm.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 64. Deep symmetric T wave inversion in V2 to V5. QTc 492 ms.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 139 g/L. Platelets 262 x 10^9/L. INR 1.0. PTT 30 s. Sodium 138 mmol/L. Potassium 3.9 mmol/L. Creatinine 64 µmol/L. " +
        "Glucose 8.9 mmol/L. High sensitivity troponin I 46 ng/L. Beta hCG negative.",
    },
    {
      id: "repeat-ct",
      label: "Repeat CT head after decline",
      result: "No new hemorrhage. The lateral and third ventricles are larger than on the first scan. Temporal horns 6 mm. Periventricular low density suggesting transependymal flow.",
    },
    {
      id: "husband",
      label: "Husband",
      result: "Her husband Arun arrives at 13:30. He asks whether this is related to her mother's bleed and whether their two teenage children are at risk.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "First contact",
      text: "She is lying in a dark room with a cloth over her eyes. She says this is the worst headache of her life. The nurse has drawn up metoclopramide and ketorolac.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Assessment",
      prompt: "How do you approach this headache? Walk me through your decision about imaging.",
      seconds: 90,
      modelAnswer: [
        "Thunderclap headache. Peak intensity within about one minute. Different from her usual migraine.",
        "Apply the Ottawa SAH Rule. She is alert, over 15, with new severe non traumatic headache peaking within an hour.",
        "She is positive on age 40 or older, neck pain, onset with exertion, thunderclap onset and limited neck flexion. SAH cannot be ruled out clinically.",
        "Non contrast CT head now. Within 6 hours of onset on a modern scanner, read by a qualified radiologist, a normal CT effectively rules out SAH.",
        "Hold ketorolac until the CT is read. Treat pain with an opioid and nausea with an antiemetic.",
        "A prior sudden headache 8 days ago may have been a sentinel bleed.",
      ],
      rubric: ["sah-a1", "sah-a2", "sah-m1"],
      choices: [
        {
          id: "c-ct-now",
          label: "I applied the Ottawa SAH Rule, found five positive criteria, sent her for a CT head right away, held the ketorolac and gave hydromorphone and ondansetron.",
          next: "s-ct",
          quality: "strong",
          feedback:
            "This is the answer the examiner wanted. The rule is positive on several criteria so SAH cannot be excluded without imaging. She is 2.5 hours from onset, well inside the 6 hour window for CT alone. Avoiding an NSAID until bleeding is excluded is sound.",
        },
        {
          id: "c-ketorolac-ct",
          label: "I ordered a CT but gave the ketorolac and metoclopramide first because she was in severe pain.",
          next: "s-ketorolac",
          quality: "partial",
          feedback:
            "Imaging is right. Ketorolac is a poor choice before SAH is excluded because it impairs platelet function. An opioid and an antiemetic control pain without that risk.",
        },
        {
          id: "c-migraine",
          label: "I treated it as a migraine with the cocktail and planned discharge if she improved.",
          next: "s-migraine",
          quality: "unsafe",
          feedback:
            "Response to migraine treatment does not exclude SAH. Many aneurysmal bleeds improve with analgesia. A migraine history does not protect her. She meets several Ottawa SAH Rule criteria and needs imaging.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ketorolac",
      phase: "Twenty minutes later",
      text: "The ketorolac is in. The CT technologist calls her through. The radiologist later asks you to note NSAID exposure in the transfer note.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-migraine",
      phase: "One hour later",
      text:
        "Her pain is 5 out of 10 after the cocktail. When the nurse sits her up for discharge she vomits and says her neck is very stiff. The nurse asks you to reassess before she leaves. You order a CT head.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "CT result",
      text:
        "The radiologist calls. There is diffuse subarachnoid blood in the basal cisterns and Sylvian fissures with mild temporal horn dilation. CT angiography shows a 7 mm anterior communicating artery aneurysm. " +
        "Her pressure is now 184/100 and her pain is 8 out of 10. GCS 15.",
      next: "q-bp",
    },
    {
      kind: "question",
      id: "q-bp",
      phase: "Blood pressure and pain",
      prompt: "What are your blood pressure targets and how do you reach them?",
      seconds: 75,
      modelAnswer: [
        "Treat pain and nausea first. Fentanyl 25 to 50 mcg IV or hydromorphone 0.5 mg IV titrated. Ondansetron 4 mg IV.",
        "Keep systolic below about 140 to 160 until the aneurysm is secured to reduce rebleeding. Below 160 is a common working target.",
        "Labetalol 10 to 20 mg IV, repeated, or a nicardipine infusion if repeated doses are needed.",
        "Avoid dropping pressure too low. Cerebral perfusion matters, especially with hydrocephalus.",
        "Avoid nitroprusside and nitroglycerin, which can raise intracranial pressure.",
      ],
      rubric: ["sah-m2", "sah-m1"],
      choices: [
        {
          id: "c-bp-strong",
          label: "I gave fentanyl 50 mcg IV and ondansetron 4 mg IV, then labetalol 10 mg IV repeated to keep her systolic below 160.",
          next: "q-meds",
          quality: "strong",
          feedback:
            "Correct. Pain drives much of the hypertension. A systolic target below 160 before the aneurysm is secured is a common recommendation. Labetalol is easy to titrate.",
        },
        {
          id: "c-bp-noanalgesia",
          label: "I started a labetalol infusion to a systolic below 160 but gave no analgesia so I could follow her level of consciousness.",
          next: "s-bp-noanalgesia",
          quality: "partial",
          feedback:
            "The target is right. Withholding analgesia leaves a strong driver of hypertension and distress untreated. Small titrated opioid doses do not stop you following her neuro exam.",
        },
        {
          id: "c-bp-low",
          label: "I gave labetalol and hydralazine to get her systolic down to 100.",
          next: "s-bp-low",
          quality: "unsafe",
          feedback:
            "Excessive lowering risks cerebral ischemia, particularly with rising intracranial pressure from hydrocephalus. The aim is to avoid systolic peaks above 160, not to make her hypotensive.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bp-noanalgesia",
      phase: "Thirty minutes later",
      text: "She is crying with pain and retching. Her pressure keeps rising despite the infusion. You give fentanyl 50 mcg IV and ondansetron and her pressure settles to 148/84.",
      next: "q-meds",
    },
    {
      kind: "say",
      id: "s-bp-low",
      phase: "Twenty minutes later",
      text: "Her pressure is 96/58. She is harder to rouse and says she feels faint. You stop the antihypertensives and give 250 mL of normal saline. Her pressure recovers to 138/80.",
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Specific therapy",
      prompt: "What other medications do you start or avoid before transfer?",
      seconds: 60,
      modelAnswer: [
        "Nimodipine 60 mg orally every 4 hours for 21 days. Hold a dose if she becomes hypotensive.",
        "No antiplatelets or anticoagulants. No NSAIDs.",
        "No routine seizure prophylaxis. Treat seizures if they occur.",
        "Antiemetic and analgesia as needed. Stool softener to avoid straining.",
        "Keep head of bed at 30 degrees, normal glucose, normal temperature and euvolemia with isotonic fluid.",
      ],
      rubric: ["sah-m3"],
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "You call CritiCall. The neurosurgery resident says: 'She is GCS 15. We have no ICU bed tonight. Keep her there and we will take her tomorrow for coiling.' What do you do?",
      seconds: 75,
      modelAnswer: [
        "Explain that rebleeding risk is highest in the first 24 hours and carries high mortality.",
        "Point out early hydrocephalus on CT and that she has no neurosurgical cover here for an EVD.",
        "Ask to speak directly with the staff neurosurgeon.",
        "Ask CritiCall to find another neurosurgical centre if needed.",
        "Document the conversation, the time and the names.",
      ],
      rubric: ["sah-d1", "sah-c1"],
      choices: [
        {
          id: "c-advocate",
          label: "I explained the early hydrocephalus and rebleed risk, asked for the staff neurosurgeon and asked CritiCall to search other centres if they could not accept.",
          next: "s-decline",
          quality: "strong",
          feedback:
            "This is appropriate advocacy. Aneurysm treatment within 24 hours is recommended and she needs a centre that can place an EVD. Escalating to staff and using CritiCall is the right route. Keep it respectful and factual.",
        },
        {
          id: "c-accept",
          label: "I accepted the plan and admitted her to our ICU overnight.",
          next: "s-accept",
          quality: "partial",
          feedback:
            "Your ICU can monitor her but cannot treat hydrocephalus or a rebleed. The rebleed risk is highest in the first 24 hours. A centre without neurosurgery is not a safe place for her to wait.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept",
      phase: "Later",
      text: "Your ICU physician looks at the scan and says she will not accept a patient with early hydrocephalus and no neurosurgical backup. She asks you to call CritiCall back.",
      next: "s-decline",
    },
    {
      kind: "say",
      id: "s-decline",
      phase: "14:10",
      text:
        "While the transfer is being arranged the nurse calls you urgently. Mrs Raman is drowsy. She opens her eyes to voice, makes only moaning sounds and localizes pain. GCS 10. " +
        "Pupils 3 mm and equal. Pressure 196/108. Heart rate 58. She vomited once more.",
      next: "q-decline",
    },
    {
      kind: "question",
      id: "q-decline",
      phase: "Deterioration",
      prompt: "What are the likely causes and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Acute hydrocephalus or rebleeding. Seizure and hyponatremia are less likely this early.",
        "Rising pressure with a falling heart rate suggests raised intracranial pressure.",
        "Repeat CT head urgently once the airway is secure.",
        "Call the staff neurosurgeon now for an emergency EVD and emergent transfer.",
        "Head of bed 30 degrees. Keep systolic below 160 without hypotension.",
        "Hyperosmolar therapy as a bridge if signs of herniation. Mannitol 1 g/kg or 3 percent saline 250 mL.",
        "Do not do a lumbar puncture.",
      ],
      rubric: ["sah-a3", "sah-d1", "sah-r1"],
      choices: [
        {
          id: "c-decline-strong",
          label: "I secured her airway, got a repeat CT, called the staff neurosurgeon for an emergency EVD and escalated the transfer to emergent.",
          next: "q-rsi",
          quality: "strong",
          feedback:
            "Correct. A falling GCS with Cushing features in SAH needs an EVD. The repeat CT shows enlarging ventricles. This changes the transfer to emergent and removes any argument about bed availability.",
        },
        {
          id: "c-decline-mannitol",
          label: "I gave mannitol and planned to watch her for another hour.",
          next: "s-decline-mannitol",
          quality: "partial",
          feedback:
            "Hyperosmolar therapy can bridge, but it does not treat obstructive hydrocephalus. She needs an EVD. Watching for an hour at a site without neurosurgery is unsafe.",
        },
        {
          id: "c-decline-lp",
          label: "I did a lumbar puncture to relieve the pressure.",
          next: "s-decline-lp",
          quality: "unsafe",
          feedback:
            "Lumbar puncture with a falling level of consciousness and possible obstructive hydrocephalus risks herniation. It can also lower transmural pressure across the aneurysm and trigger rebleeding. Ventricular drainage is done by neurosurgery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-decline-mannitol",
      phase: "Thirty minutes later",
      text: "Her GCS falls to 8. Her right pupil is now 5 mm. You call the staff neurosurgeon, who accepts her emergently. She now needs a secure airway before transfer.",
      next: "q-rsi",
    },
    {
      kind: "say",
      id: "s-decline-lp",
      phase: "At the bedside",
      text: "The nurse questions the order and asks you to look at the CT again. You cancel the LP. Her GCS is now 9. You call the staff neurosurgeon, who accepts her emergently.",
      next: "q-rsi",
    },
    {
      kind: "question",
      id: "q-rsi",
      phase: "Airway",
      prompt: "Describe how you will intubate her.",
      seconds: 90,
      modelAnswer: [
        "Preoxygenate. Most experienced operator. Video laryngoscope. Suction ready.",
        "Blunt the pressor response. Fentanyl 1 to 3 mcg/kg IV given 3 minutes before induction.",
        "Induction with propofol at a reduced dose or ketamine 1 to 1.5 mg/kg. Rocuronium 1.2 mg/kg.",
        "Avoid both hypertension above 160 systolic and any hypotension. Push dose phenylephrine or norepinephrine ready.",
        "Target a pCO2 of 35 to 40 mmHg after intubation. Avoid routine hyperventilation.",
        "Post intubation sedation with propofol and fentanyl.",
      ],
      rubric: ["sah-r1", "sah-r2"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family",
      prompt: "Her husband arrives as she is being packaged. What do you tell him, and how do you answer his question about his children?",
      seconds: 60,
      modelAnswer: [
        "Introduce yourself and find a private space.",
        "Explain bleeding around the brain from a weak spot in an artery. Fluid build up has made her sleepy. A drain and treatment of the aneurysm are needed.",
        "Be honest that this is serious and the outcome is uncertain.",
        "Her mother's bleed may also have been an aneurysm. If so, the family has two affected first degree relatives, and her brothers and sisters may be offered screening.",
        "The teenagers now have one affected parent. They are not screened now. The neurosurgical team or a genetics clinic can revisit this in early adulthood.",
        "Not smoking and treating high blood pressure lower aneurysm risk for everyone in the family.",
        "Give the receiving hospital's name and contact. Advise him not to follow the ambulance at speed.",
      ],
      rubric: ["sah-c2"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "What goes in your handover to the transport team?",
      seconds: 60,
      modelAnswer: [
        "Diagnosis. Aneurysmal SAH, 7 mm anterior communicating artery aneurysm, acute hydrocephalus.",
        "Timeline of onset, GCS changes, pupil changes.",
        "Systolic target below 160 without hypotension. Current infusions and doses.",
        "Nimodipine given and timing. Any NSAID given.",
        "What to do if pupils change: hyperosmolar therapy and brief hyperventilation as a bridge.",
        "Imaging shared and accepting surgeon's name.",
      ],
      rubric: ["sah-c1", "sah-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is flown to the neurosurgical centre. An EVD is placed on arrival and the aneurysm is coiled that night. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "sah-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Identifies thunderclap onset and a change from her usual migraine pattern as red flags.",
      points: 1,
      teaching: "A migraine history does not protect against SAH. A headache that peaks within about a minute is thunderclap until proven otherwise.",
      source: "ottawa-jama",
    },
    {
      id: "sah-a2",
      competency: "assessment",
      criterion: "data",
      text: "Applies the Ottawa SAH Rule correctly and recognizes that SAH cannot be ruled out without imaging.",
      points: 3,
      critical: true,
      teaching: "The rule applies to alert patients over 15 with new severe non traumatic headache peaking within an hour. Any one criterion means further investigation.",
      source: "ottawa-cmaj",
    },
    {
      id: "sah-a3",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes a falling GCS with hypertension and bradycardia as raised intracranial pressure from hydrocephalus or rebleed.",
      points: 2,
      teaching: "Acute hydrocephalus occurs in about 20 to 30 percent of aneurysmal SAH. Early temporal horn dilation on the first CT is a warning sign.",
      source: "aha-sah",
    },
    {
      id: "sah-m1",
      competency: "management",
      criterion: "data",
      text: "Orders non contrast CT within 6 hours of onset and knows a normal scan in that window, read by a qualified radiologist, rules out SAH without LP.",
      points: 2,
      teaching: "In a large Canadian cohort, CT within 6 hours had a sensitivity near 100 percent. Beyond 6 hours, LP or CTA is still needed after a normal CT.",
      source: "ct-6h",
    },
    {
      id: "sah-m2",
      competency: "management",
      criterion: "plan",
      text: "Treats pain and nausea first and keeps systolic below 160 with titrated labetalol or nicardipine while avoiding hypotension.",
      points: 2,
      teaching: "Rebleeding risk is highest early. Controlled pressure reduces it, but hypotension can cause ischemia in a brain with raised pressure.",
      source: "aha-sah",
    },
    {
      id: "sah-m3",
      competency: "management",
      criterion: "plan",
      text: "Starts nimodipine 60 mg orally every 4 hours and avoids antiplatelets, anticoagulants and NSAIDs.",
      points: 2,
      teaching: "Nimodipine improves outcome after aneurysmal SAH. It is a neuroprotective drug, not an antihypertensive. Hold doses for hypotension.",
      source: "aha-sah",
    },
    {
      id: "sah-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Secures the airway when GCS falls and arranges repeat CT, without performing a lumbar puncture.",
      points: 2,
      teaching: "A falling level of consciousness needs a protected airway. LP is contraindicated with possible obstructive hydrocephalus.",
      source: "aha-sah",
    },
    {
      id: "sah-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Plans a hemodynamically neutral intubation with pretreatment, reduced dose induction, pressor ready and normocapnia afterward.",
      points: 2,
      teaching: "The pressor response to laryngoscopy can rupture the aneurysm again. Induction hypotension can cause ischemia. Aim for a smooth pressure throughout.",
      source: "aha-sah",
    },
    {
      id: "sah-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Advocates for emergent transfer to neurosurgery for EVD and early aneurysm treatment, escalating to the staff surgeon and CritiCall.",
      points: 3,
      critical: true,
      teaching: "Aneurysm treatment within 24 hours is recommended. A patient with hydrocephalus at a site without neurosurgery cannot wait for a bed.",
      source: "aha-sah",
    },
    {
      id: "sah-c1",
      competency: "communication",
      criterion: "plan",
      text: "Communicates respectfully but firmly with the consultant, using the CT findings and clinical risk.",
      points: 1,
      teaching: "Advocate with data. State the specific risk, the specific need and the specific request.",
      source: "aha-sah",
    },
    {
      id: "sah-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains the diagnosis and uncertainty to the husband in plain words and addresses his question about family risk.",
      points: 1,
      teaching: "Families need honesty about severity. Screening is considered when two or more first degree relatives have had an aneurysm or aneurysmal SAH, usually from early adulthood.",
      source: "aha-sah",
    },
    {
      id: "sah-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Gives a structured handover with pressure targets, infusions, nimodipine timing and a plan for deterioration in transit.",
      points: 1,
      teaching: "The transport team needs explicit targets and a plan for pupil changes. Ambiguity in transit leads to delayed treatment.",
      source: "aha-sah",
    },
  ],
  sources: [
    {
      id: "ottawa-jama",
      citation: "Perry JJ et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA. 2013.",
    },
    {
      id: "ottawa-cmaj",
      citation: "Perry JJ et al. Validation of the Ottawa Subarachnoid Hemorrhage Rule in patients with acute headache. CMAJ. 2017.",
    },
    {
      id: "ct-6h",
      citation:
        "Perry JJ et al. Sensitivity of computed tomography performed within six hours of onset of headache for diagnosis of subarachnoid haemorrhage. Prospective cohort study. BMJ. 2011.",
    },
    {
      id: "aha-sah",
      citation:
        "Hoh BL et al. 2023 Guideline for the management of patients with aneurysmal subarachnoid hemorrhage. American Heart Association and American Stroke Association. Stroke. 2023.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
