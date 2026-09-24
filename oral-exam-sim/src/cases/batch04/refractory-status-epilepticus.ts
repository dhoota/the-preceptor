// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const refractoryStatusEpilepticus: OralCase = {
  id: "refractory-status-epilepticus",
  title: "Still shaking on arrival",
  blueprint: "neuro",
  alsoCovers: ["resus", "ethics"],
  priorityTopic: "seizures",
  keyFeatures: [
    { topic: "seizures", n: 3 },
    { topic: "seizures", n: 4 },
    { topic: "seizures", n: 5 },
    { topic: "seizures", n: 7 },
  ],
  summary: "A 34 year old man with a known seizure disorder arrives by ambulance still convulsing after one prehospital dose.",
  durationMinutes: 15,
  stem:
    "You are working in a tertiary emergency department in London, Ontario. There is an ICU, neurology on call and a pharmacist in the department until 23:00. " +
    "EEG runs on weekdays from 08:00 to 17:00. After hours a technologist can be called in from home, which takes about an hour. " +
    "It is 21:10 on a Saturday. Marcus Leblanc is 34 years old. His roommate found him convulsing on the kitchen floor at 20:40. " +
    "Paramedics reached him at 20:52. He was still seizing and they gave midazolam 10 mg IM at 20:55. He had a brief pause, then started convulsing again without waking. " +
    "Vitals on arrival: heart rate 134, blood pressure 176/98, respiratory rate 30 and irregular, SpO2 88 percent on a non rebreather mask, temperature 37.8, capillary glucose 8.4 mmol/L. " +
    "The paramedic says: 'Roommate says he has epilepsy and ran out of his pills. His sister is on her way in.'",
  findings: [
    {
      id: "seizure-exam",
      label: "Seizure description",
      result:
        "Generalized rhythmic jerking of all four limbs. Head and eyes turned to the left. Frothy secretions. No response to voice or pain. Bitten tongue. Incontinent of urine.",
    },
    {
      id: "weight",
      label: "Weight",
      result: "Roommate says he weighs about 80 kg. The paramedic estimate agrees.",
    },
    {
      id: "collateral",
      label: "Sister's history",
      result:
        "Focal epilepsy with bilateral tonic clonic seizures since a bicycle crash with a head injury at 17. " +
        "He takes phenytoin 300 mg at bedtime and clobazam 10 mg at bedtime. His last seizure was 14 months ago. " +
        "He lost his job and his drug plan 2 months ago. He ran out of both pills 5 days ago and could not afford the refill. " +
        "He slept badly this week. He had 3 beers last night. No other drugs that she knows of. He drives to job interviews.",
    },
    {
      id: "head-exam",
      label: "Head and injury survey",
      result: "Boggy swelling over the right parietal scalp. No other visible injury. Pupils 4 mm and equal. No neck stiffness when checked between jerks.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result:
        "pH 7.13. pCO2 60 mmHg. HCO3 19 mmol/L. Lactate 9.1 mmol/L. Sodium 139 mmol/L. Potassium 4.7 mmol/L. Ionized calcium 1.16 mmol/L. Glucose 8.6 mmol/L.",
    },
    {
      id: "labs",
      label: "Formal blood work",
      result:
        "Phenytoin level drawn on arrival before any load: under 4 µmol/L, therapeutic 40 to 80 µmol/L. Albumin 41 g/L. " +
        "WBC 15.2 x 10^9/L. Hemoglobin 152 g/L. Platelets 214 x 10^9/L. Creatinine 104 µmol/L. Magnesium 0.84 mmol/L. CK 2,300 U/L. " +
        "AST 38 U/L. ALT 41 U/L. Ethanol undetectable. Acetaminophen and salicylate undetectable.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 130. PR 158 ms. QRS 94 ms. QTc 452 ms. No AV block.",
    },
    {
      id: "ct-head",
      label: "CT head",
      result:
        "Done after intubation. Old right frontal encephalomalacia from the prior injury. Right parietal scalp hematoma. No fracture. No hemorrhage. No new lesion.",
    },
    {
      id: "cxr",
      label: "Chest X ray after intubation",
      result: "Endotracheal tube 4 cm above the carina. Patchy opacity at the right base, possibly aspiration. No pneumothorax.",
    },
    {
      id: "eeg",
      label: "Continuous EEG",
      result:
        "Started at 23:20. Rhythmic discharges from the right frontal region that evolve into electrographic seizures lasting 1 to 2 minutes, every 5 to 8 minutes. No clinical correlate except brief left facial twitching.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Arrival",
      text:
        "He is moved to the resuscitation bay still convulsing. It is 21:10. He has been seizing for 30 minutes with no return to consciousness. The paramedics have one IV in the right forearm.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First five minutes",
      prompt: "What do you do right now?",
      seconds: 75,
      modelAnswer: [
        "This is established status epilepticus. One benzodiazepine dose has failed.",
        "Recovery position, suction, jaw thrust, oxygen and a bag valve mask ready. Monitor and a second IV.",
        "Glucose is 8.4 mmol/L, so hypoglycemia is excluded.",
        "Give one more full benzodiazepine dose now. Lorazepam 0.1 mg/kg IV to a maximum of 4 mg, so 4 mg for him.",
        "Have the second line drug drawn up at the same time so it follows immediately.",
        "Draw a VBG, electrolytes and an antiseizure drug level before any load is given.",
        "Say the time since onset out loud.",
      ],
      rubric: ["se-r1", "se-m1", "se-l1"],
      choices: [
        {
          id: "c-lorazepam",
          label: "I supported his airway, gave lorazepam 4 mg IV, drew a VBG and a phenytoin level, and had levetiracetam drawn up at the same time.",
          next: "s-still-seizing",
          quality: "strong",
          feedback:
            "Correct. One more full dose of benzodiazepine is right after the failed IM dose. Lorazepam is 0.1 mg/kg to a maximum of 4 mg. Drawing the level before any load and preparing the second line drug in parallel keeps you on schedule.",
        },
        {
          id: "c-small-dose",
          label: "I gave lorazepam 1 mg IV because his breathing is already irregular.",
          next: "s-small-dose",
          quality: "partial",
          feedback:
            "Underdosing benzodiazepines is a common and harmful error in status. Ongoing seizures compromise his breathing more than a full dose will. Give 0.1 mg/kg to a maximum of 4 mg and manage the airway.",
        },
        {
          id: "c-no-benzo",
          label: "I held further benzodiazepine because he already had midazolam, and waited to see if he would stop on his own.",
          next: "s-no-benzo",
          quality: "unsafe",
          feedback:
            "At 30 minutes this is established status epilepticus. The longer it runs, the less it responds to drugs and the greater the risk of brain injury. He needs a second benzodiazepine dose and then a second line drug without delay.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-small-dose",
      phase: "Five minutes later",
      text: "He is still convulsing. SpO2 is 85 percent. The nurse asks if you want to give the rest of the dose. You give lorazepam 3 mg IV and ask for the second line drug.",
      next: "s-still-seizing",
    },
    {
      kind: "say",
      id: "s-no-benzo",
      phase: "Seven minutes later",
      text: "He is still convulsing and dusky around the lips. SpO2 82 percent. The respiratory therapist is bagging him. You give lorazepam 4 mg IV.",
      next: "s-still-seizing",
    },
    {
      kind: "say",
      id: "s-still-seizing",
      phase: "21:17",
      text:
        "Five minutes after the lorazepam he is still having generalized convulsions. SpO2 90 percent with jaw thrust and bag support. His sister arrives. She says he has been out of phenytoin and clobazam for 5 days because he lost his drug coverage.",
      next: "q-second-line",
    },
    {
      kind: "question",
      id: "q-second-line",
      phase: "Second line",
      prompt: "He weighs 80 kg and takes phenytoin. Which second line drug do you give, at what dose and rate? What are the contraindications you check?",
      seconds: 90,
      modelAnswer: [
        "Levetiracetam 60 mg/kg IV to a maximum of 4,500 mg over about 10 minutes. For 80 kg the cap applies, so 4,500 mg.",
        "Or fosphenytoin 20 mg PE/kg IV to a maximum of 1,500 mg PE, at up to 150 mg PE per minute on a cardiac monitor. Avoid with sinus bradycardia, SA block, second or third degree AV block, or hypotension.",
        "Or valproate 40 mg/kg IV to a maximum of 3,000 mg over about 10 minutes. Avoid in liver disease, pregnancy or possible pregnancy, known mitochondrial disease, urea cycle disorders, pancreatitis and low platelets. Carbapenems lower valproate levels.",
        "ESETT found the three about equally effective. Each stopped status in about half of patients.",
        "Five missed days means his phenytoin level is probably near zero. Do not give a reduced top up dose without a measured level.",
        "Continue the cause search in parallel.",
      ],
      rubric: ["se-m2", "se-m3", "se-a1"],
      choices: [
        {
          id: "c-lev",
          label: "I gave levetiracetam 4,500 mg IV over 10 minutes, the maximum dose, because 60 mg/kg is above the cap.",
          next: "s-refractory",
          quality: "strong",
          feedback:
            "Correct drug and correct dose. Levetiracetam has few interactions and little effect on blood pressure or rhythm. Adding a new drug also gives him a second agent while his phenytoin is rebuilt.",
        },
        {
          id: "c-fos",
          label: "I gave fosphenytoin 1,500 mg PE IV at 150 mg PE per minute on a cardiac monitor after checking the ECG for AV block.",
          next: "s-refractory",
          quality: "strong",
          feedback:
            "Correct. The full 20 mg PE/kg load capped at 1,500 mg PE restores his usual drug. Checking for conduction block and watching for hypotension are the key safety steps. ESETT found it equal to levetiracetam and valproate.",
        },
        {
          id: "c-fos-low",
          label: "I gave fosphenytoin 10 mg PE/kg as a top up because he is already on phenytoin.",
          next: "s-fos-low",
          quality: "partial",
          feedback:
            "A partial load assumes a known level. After 5 missed days his level is likely near zero, and the lab confirms under 4 µmol/L. He needs the full 20 mg PE/kg load to a maximum of 1,500 mg PE.",
        },
        {
          id: "c-phenytoin-push",
          label: "I gave phenytoin 1,600 mg IV push over 3 minutes to get it in fast.",
          next: "s-phenytoin-push",
          quality: "unsafe",
          feedback:
            "Phenytoin must not run faster than 50 mg per minute. Rapid infusion causes hypotension, bradycardia and arrhythmia, partly from the propylene glycol diluent. A 1,600 mg dose needs at least 32 minutes. Fosphenytoin can run faster, up to 150 mg PE per minute.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fos-low",
      phase: "21:32",
      text: "He is still convulsing. The pharmacist reports the phenytoin level is under 4 µmol/L and advises the rest of the load. You give a further 700 mg PE of fosphenytoin.",
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-phenytoin-push",
      phase: "Two minutes later",
      text: "His heart rate falls to 42 and his pressure to 72/38. The nurse stops the infusion. You give fluid and his pressure recovers. You give levetiracetam 4,500 mg IV over 10 minutes instead.",
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-refractory",
      phase: "21:35",
      text:
        "The second line drug is in. He is still convulsing. It has been 55 minutes since onset. SpO2 is 87 percent despite bagging. A repeat VBG shows pH 7.09 and pCO2 68 mmHg. Temperature 38.3.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Refractory status",
      prompt: "A benzodiazepine and a second line drug have both failed. What now? Walk me through your airway plan and your drug choices.",
      seconds: 90,
      modelAnswer: [
        "This is refractory status epilepticus. Move to anesthetic drugs now. Do not wait for a third benzodiazepine or a long trial of another second line drug.",
        "Intubate. Most experienced operator, suction, video laryngoscope.",
        "Induction with propofol 1 to 2 mg/kg if pressure allows, or ketamine 1 to 2 mg/kg. Both have antiseizure effect.",
        "Rocuronium 1 mg/kg once. It hides convulsions but not seizures in the brain. No further paralytic after that.",
        "Start an infusion right away. Midazolam 0.2 mg/kg bolus, which is 16 mg, then 0.05 to 2 mg/kg/h. Or propofol 30 to 200 mcg/kg/min.",
        "A second drug from the second line list can be given alongside, but it must not delay the infusion.",
        "Call for urgent EEG.",
      ],
      rubric: ["se-r2", "se-m4", "se-r3"],
      choices: [
        {
          id: "c-rsi-infusion",
          label: "I intubated with propofol 120 mg and rocuronium 80 mg, started midazolam 16 mg IV then 0.2 mg/kg/h, and asked neurology to call in the EEG technologist.",
          next: "s-post-intubation",
          quality: "strong",
          feedback:
            "Correct. Refractory status needs a secure airway and an anesthetic infusion without delay. Midazolam 0.2 mg/kg then an infusion is a standard regimen. You also knew the single rocuronium dose now hides any convulsion, so EEG is needed.",
        },
        {
          id: "c-more-benzo",
          label: "I gave a third dose of lorazepam 4 mg and loaded valproate 3,000 mg, and planned to intubate if he was still seizing in 20 minutes.",
          next: "s-more-benzo",
          quality: "partial",
          feedback:
            "A further benzodiazepine dose has little chance of working at this stage and adds respiratory depression. A second second line drug is reasonable only if it does not delay definitive treatment. He is hypoxic and hypercapnic after 55 minutes of seizures. He needs intubation and an infusion now.",
        },
        {
          id: "c-paralysis",
          label: "I intubated with succinylcholine and started a rocuronium infusion to stop the movements, then ordered a CT.",
          next: "s-paralysis",
          quality: "unsafe",
          feedback:
            "A paralytic infusion stops the jerking but not the seizure. The brain keeps seizing while the monitor looks calm. He needs an anesthetic infusion titrated to EEG. Prolonged seizures with a high CK also make succinylcholine a less safe choice than rocuronium.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-more-benzo",
      phase: "21:55",
      text: "He is still convulsing. SpO2 is 81 percent. The ICU fellow arrives and intubates him with propofol and rocuronium. She starts a midazolam infusion after a 16 mg bolus.",
      next: "s-post-intubation",
    },
    {
      kind: "say",
      id: "s-paralysis",
      phase: "The ICU fellow arrives",
      text:
        "The ICU fellow asks what sedation he is on. There is none. She stops the rocuronium infusion, gives midazolam 16 mg IV and starts a midazolam infusion at 0.2 mg/kg/h. She asks for an urgent EEG.",
      next: "s-post-intubation",
    },
    {
      kind: "say",
      id: "s-post-intubation",
      phase: "After intubation",
      text:
        "He is intubated on midazolam. There are no visible movements. Heart rate 124. Pressure 158/90. Pupils 4 mm and sluggish. The CT is on the way. The nurse says: 'He has stopped seizing. Can we tell his sister it is over?'",
      next: "q-ncse",
    },
    {
      kind: "question",
      id: "q-ncse",
      phase: "Is it over?",
      prompt: "Has he stopped seizing? How will you know?",
      seconds: 75,
      modelAnswer: [
        "You cannot tell. Rocuronium will hide any convulsion for about an hour or more.",
        "Even without a paralytic, nonconvulsive seizures are common after convulsive status. About half have electrographic seizures and about 1 in 7 are in nonconvulsive status.",
        "Clues are unexplained surges in heart rate or pressure, pupil changes, subtle eye or facial twitching and failure to wake.",
        "Urgent EEG is needed tonight. Call in the technologist and arrange continuous monitoring in the ICU.",
        "Keep the infusion going. Do not lighten sedation to examine him, and no further paralytic.",
      ],
      rubric: ["se-a2", "se-r3"],
      choices: [
        {
          id: "c-eeg-now",
          label: "I told the nurse we cannot know while he is paralyzed, kept the midazolam running and had neurology call in the EEG technologist tonight for continuous EEG.",
          next: "s-eeg",
          quality: "strong",
          feedback:
            "Correct. Absence of movement after a paralytic proves nothing. Nonconvulsive seizures after convulsive status are common and harm the brain. Only EEG can guide the infusion.",
        },
        {
          id: "c-eeg-monday",
          label: "He looks settled, so I lightened the midazolam to let him wake and booked a routine EEG for Monday.",
          next: "s-eeg-monday",
          quality: "partial",
          feedback:
            "He looks settled because he is paralyzed. Lightening sedation risks a return of seizures that you will not see. A routine EEG in 36 hours is far too late for refractory status.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-eeg-monday",
      phase: "23:00",
      text:
        "The paralysis wears off. The nurse sees rhythmic twitching of the left side of his face and jerking eye movements to the left. His heart rate jumps to 150. The neurologist asks you to restart the full infusion and calls in the EEG technologist.",
      next: "s-eeg",
    },
    {
      kind: "say",
      id: "s-eeg",
      phase: "23:30",
      text:
        "Continuous EEG shows right frontal electrographic seizures every 5 to 8 minutes. His only visible sign is brief left facial twitching. The midazolam is now at 0.4 mg/kg/h. His pressure has fallen to 86/48. The nurse asks if she should turn the midazolam down.",
      next: "q-nc-treat",
    },
    {
      kind: "question",
      id: "q-nc-treat",
      phase: "Nonconvulsive status",
      prompt: "How do you treat the ongoing seizures and the low pressure? What maintenance drugs does he need?",
      seconds: 90,
      modelAnswer: [
        "This is nonconvulsive status after refractory convulsive status. Treat it as urgently as the convulsions.",
        "Do not lower the infusion to fix the pressure. Give a fluid bolus and start norepinephrine to a MAP of 65 or more.",
        "Give a midazolam bolus of 0.1 to 0.2 mg/kg and increase the infusion, or add propofol. Titrate to stop seizures on EEG, as neurology directs.",
        "Keep propofol at or below about 80 mcg/kg/min when used for more than 48 hours because of propofol infusion syndrome.",
        "Maintenance antiseizure drugs. If fosphenytoin was loaded, continue phenytoin about 5 mg/kg/day, such as 100 mg IV every 8 hours, with a level. If levetiracetam was loaded, continue 1,000 to 1,500 mg IV every 12 hours.",
        "Restart clobazam 10 mg by nasogastric tube.",
        "Plan seizure control for 24 to 48 hours, then a slow wean on EEG.",
      ],
      rubric: ["se-m5", "se-m6"],
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Cause",
      prompt: "The missed pills seem to explain this. What else do you look for before you accept that?",
      seconds: 60,
      modelAnswer: [
        "Missed doses and poor sleep are the likely trigger, and the undetectable level supports it.",
        "Still look for a second cause. Glucose, sodium, calcium and magnesium are normal.",
        "CT head for the scalp hematoma and the prolonged seizure. It shows only the old injury.",
        "Fever and a raised WBC are common after status. Look for aspiration and consider meningitis. LP if he stays febrile without a source.",
        "Alcohol withdrawal is unlikely with 3 beers but ask. Toxicology screen.",
        "CK for rhabdomyolysis. Fluids and renal monitoring.",
      ],
      rubric: ["se-a1", "se-a3"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family",
      prompt: "His sister asks what happened, whether he will be okay and what can stop this happening again. What do you tell her, and do you have any legal duties?",
      seconds: 75,
      modelAnswer: [
        "Sit down with her. Explain in plain words that his seizures would not stop with the usual medicines, so he is on a breathing machine and strong sedation to rest the brain.",
        "Be honest. Most young people with this trigger recover well, but prolonged seizures can injure the brain and the next day or two will tell more.",
        "The seizures most likely came from running out of his medicines. Cost is a safety problem, not a personal failing.",
        "Social work before discharge to help him apply for the Trillium Drug Program or another drug plan.",
        "Ontario law requires physicians to report a patient with a seizure disorder causing sudden incapacitation to the Ministry of Transportation. He must not drive until cleared.",
        "The report goes to the Ministry, not to his sister. Tell him about it directly when he is awake.",
      ],
      rubric: ["se-c1", "se-p1"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "Give your handover to the ICU team.",
      seconds: 60,
      modelAnswer: [
        "Known focal epilepsy. Out of phenytoin and clobazam for 5 days. Level under 4 µmol/L.",
        "Onset 20:40. Midazolam IM, lorazepam IV, second line drug with dose and time. Intubated for refractory status.",
        "Single rocuronium dose and the time. No further paralytic.",
        "EEG shows nonconvulsive seizures. Infusion rate, boluses and the EEG goal set by neurology.",
        "Norepinephrine for infusion related hypotension. Maintenance antiseizure plan and next level.",
        "Possible aspiration. CK trend. Driving report and social work referral.",
      ],
      rubric: ["se-c2", "se-d1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The seizures stop on EEG after the midazolam is increased and propofol is added. He is weaned over 48 hours without recurrence and extubated on day 4. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "se-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Positions, suctions and supports the airway with oxygen, jaw thrust and bag support during the convulsion.",
      points: 1,
      teaching: "Basic airway support buys time while the drugs work. Hypoxia makes seizures harder to stop.",
      source: "aes-2016",
    },
    {
      id: "se-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Calls out the time since onset and prepares the next drug while the current one is given.",
      points: 1,
      teaching: "Status care runs on a clock. A leader who names the time and has the next drug ready stops the escalation from stalling.",
      source: "aes-2016",
    },
    {
      id: "se-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives one full second benzodiazepine dose, lorazepam 0.1 mg/kg IV to a maximum of 4 mg, without delay.",
      points: 3,
      critical: true,
      teaching: "RAMPART showed midazolam 10 mg IM works as well as IV lorazepam as a first dose. When it fails, give one more full dose. Underdosing is a common error.",
      source: "rampart",
    },
    {
      id: "se-m2",
      competency: "management",
      criterion: "plan",
      text: "Gives a correctly dosed second line drug: levetiracetam 60 mg/kg to 4,500 mg, fosphenytoin 20 mg PE/kg to 1,500 mg PE at up to 150 mg PE per minute, or valproate 40 mg/kg to 3,000 mg.",
      points: 3,
      critical: true,
      teaching: "ESETT found these three drugs about equally effective, each stopping status in about half of patients. The full loading dose matters more than which one you pick.",
      source: "esett",
    },
    {
      id: "se-m3",
      competency: "management",
      criterion: "plan",
      text: "States the key contraindications: conduction block, bradycardia or hypotension for fosphenytoin, and liver disease, pregnancy, mitochondrial disease or low platelets for valproate.",
      points: 2,
      teaching: "Fosphenytoin can cause hypotension and arrhythmia, so check the ECG and monitor. Valproate is avoided in liver disease and in anyone who is or may be pregnant.",
      source: "ncs",
    },
    {
      id: "se-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Identifies missed doses as the likely trigger, draws a drug level before loading and still searches for other causes.",
      points: 2,
      teaching: "A low level explains the seizures but does not exclude a second cause such as head injury, infection or a metabolic problem. Draw the level before any load so it can be interpreted.",
      source: "ncs",
    },
    {
      id: "se-r2",
      competency: "resuscitation",
      criterion: "diagnosis",
      text: "Recognizes refractory status after a benzodiazepine and a second line drug fail, and moves straight to intubation and an anesthetic infusion.",
      points: 3,
      critical: true,
      teaching: "Refractory status responds poorly to more benzodiazepines. Each delay makes it harder to stop. Anesthetic infusions are the next step.",
      source: "ncs",
    },
    {
      id: "se-m4",
      competency: "management",
      criterion: "plan",
      text: "Doses the infusion correctly: midazolam 0.2 mg/kg bolus then 0.05 to 2 mg/kg/h, or propofol 1 to 2 mg/kg then 30 to 200 mcg/kg/min.",
      points: 2,
      teaching: "Start with a bolus, then titrate the infusion to stop seizures on EEG. Hypotension is expected and is treated with vasopressors.",
      source: "ncs",
    },
    {
      id: "se-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Uses a single dose of paralytic for intubation and never uses a paralytic infusion to control movements.",
      points: 2,
      teaching: "Paralysis hides convulsions but not seizures. After rocuronium the only way to know if seizures continue is EEG.",
      source: "ncs",
    },
    {
      id: "se-a2",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Suspects nonconvulsive seizures after convulsions stop or are masked, and arranges urgent continuous EEG the same night.",
      points: 3,
      critical: true,
      teaching: "After convulsive status is controlled, about half of patients have electrographic seizures and about 1 in 7 are in nonconvulsive status. Failure to wake needs EEG.",
      source: "delorenzo",
    },
    {
      id: "se-m5",
      competency: "management",
      criterion: "plan",
      text: "Treats nonconvulsive status by increasing or adding anesthetic drugs to EEG goals and supports the pressure with norepinephrine rather than lowering the infusion.",
      points: 2,
      teaching: "Hypotension from the infusion is common. Treat it with a vasopressor. Turning the sedation down lets the seizures return.",
      source: "ncs",
    },
    {
      id: "se-m6",
      competency: "management",
      criterion: "plan",
      text: "Writes a maintenance plan: phenytoin or levetiracetam maintenance with levels as needed, and restarts clobazam.",
      points: 1,
      teaching: "The loading dose wears off. Maintenance doses and his usual drugs must start in the first day.",
      source: "ncs",
    },
    {
      id: "se-a3",
      competency: "assessment",
      criterion: "data",
      text: "Orders CT head for the scalp injury and evaluates fever for aspiration or central nervous system infection.",
      points: 1,
      teaching: "Fever and leukocytosis are common after status but do not assume. Aspiration is frequent. Consider LP if no source is found.",
      source: "ncs",
    },
    {
      id: "se-c1",
      competency: "communication",
      criterion: "plan",
      text: "Explains the events, the plan and the uncertainty to his sister in plain words without blame for the missed pills.",
      points: 1,
      teaching: "Families need to hear what happened, what is being done and what is not known yet. Cost barriers are common and fixable.",
      source: "aes-2016",
    },
    {
      id: "se-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Reports to the Ministry of Transportation under Ontario's mandatory reporting rules and plans to tell the patient directly.",
      points: 2,
      teaching: "Since 2018 Ontario physicians must report patients with conditions that cause sudden incapacitation, such as seizures likely to recur. The duty overrides confidentiality for that report only.",
      source: "hta",
    },
    {
      id: "se-c2",
      competency: "communication",
      criterion: "plan",
      text: "Gives a structured handover with times, doses, the paralytic time, EEG findings, infusion goals and pending issues.",
      points: 1,
      teaching: "The ICU needs the exact paralytic time and drug history to judge the EEG and the next step.",
      source: "ncs",
    },
    {
      id: "se-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to ICU with neurology, continuous EEG and a social work referral for drug coverage.",
      points: 1,
      teaching: "Refractory status needs ICU care and EEG. Fixing the reason he ran out of medicine prevents the next admission.",
      source: "ncs",
    },
  ],
  sources: [
    {
      id: "aes-2016",
      citation:
        "Glauser T et al. Evidence based guideline. Treatment of convulsive status epilepticus in children and adults. Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Currents. 2016.",
    },
    {
      id: "esett",
      citation: "Kapur J et al. Randomized trial of three anticonvulsant medications for status epilepticus (ESETT). New England Journal of Medicine. 2019.",
    },
    {
      id: "rampart",
      citation: "Silbergleit R et al. Intramuscular versus intravenous therapy for prehospital status epilepticus (RAMPART). New England Journal of Medicine. 2012.",
    },
    {
      id: "ncs",
      citation: "Brophy GM et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocritical Care. 2012.",
      url: "https://link.springer.com/article/10.1007/s12028-012-9695-z",
    },
    {
      id: "delorenzo",
      citation: "DeLorenzo RJ et al. Persistent nonconvulsive status epilepticus after the control of convulsive status epilepticus. Epilepsia. 1998.",
    },
    {
      id: "hta",
      citation: "Ontario. Highway Traffic Act, R.S.O. 1990, c. H.8, and Ministry of Transportation mandatory medical reporting requirements, 2018.",
      url: "https://www.ontario.ca/page/reporting-driver-medical-review",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
