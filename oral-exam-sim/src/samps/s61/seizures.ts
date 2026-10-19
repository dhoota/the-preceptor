// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  aapEval: { id: "aap-fs-eval", citation: "American Academy of Pediatrics Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21285335/" },
  aapLong: { id: "aap-fs-long", citation: "American Academy of Pediatrics Subcommittee on Febrile Seizures. Febrile seizures: clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18519501/" },
  cochrane: { id: "cochrane-fs-prophylaxis", citation: "Offringa M, Newton R, Nevitt SJ, Vraka K. Prophylactic drug management for febrile seizures in children. Cochrane Database Syst Rev. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34131913/" },
  cigMeasles: { id: "cig-measles", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4, Active vaccines. Measles vaccines. Last partial content update 2025.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html" },
  aefi: { id: "phac-aefi-guide", citation: "Public Health Agency of Canada. Reporting adverse events following immunization (AEFI) in Canada. User guide to completion and submission of the AEFI reports. 2025.", url: "https://www.canada.ca/en/public-health/services/immunization/reporting-adverse-events-following-immunization/user-guide-completion-submission-aefi-reports.html" },
  cpsSe: { id: "cps-status-epilepticus", citation: "McKenzie KC, Hahn CD, Friedman JN, Canadian Paediatric Society Acute Care Committee. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health. 2021.", url: "https://doi.org/10.1093/pch/pxaa127" },
  specchio: { id: "ilae-childhood-syndromes", citation: "Specchio N, Wirrell EC, Scheffer IE, et al. International League Against Epilepsy classification and definition of epilepsy syndromes with onset in childhood. Position paper by the ILAE Task Force on Nosology and Definitions. Epilepsia. 2022.", url: "https://doi.org/10.1111/epi.17241" },
  leung: { id: "leung-breath-holding", citation: "Leung AKC, Leung AAM, Wong AHC, Hon KL. Breath-holding spells in pediatrics. A narrative review of the current evidence. Curr Pediatr Rev. 2019.", url: "https://doi.org/10.2174/1573396314666181113094047" },
  trinka: { id: "trinka-ilae-se", citation: "Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus. Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26336950/" },
  esett: { id: "esett", citation: "Kapur J, Elm J, Chamberlain JM, et al. Randomized trial of three anticonvulsant medications for status epilepticus. N Engl J Med. 2019.", url: "https://doi.org/10.1056/NEJMoa1905795" },
  ilaeSelects: { id: "ilae-selects", citation: "International League Against Epilepsy. EpilepsyDiagnosis.org. Self-limited epilepsy with centrotemporal spikes (SeLECTS). Diagnostic criteria and imaging. Last updated 2024.", url: "https://epilepsydiagnosis.org/syndrome/ects-diagcriteria.html" },
  levPm: { id: "sandoz-levetiracetam-iv", citation: "Sandoz Canada Inc. Product monograph. Levetiracetam for injection, 100 mg/mL. Date of authorization 21 January 2026.", url: "https://pdf.hres.ca/dpd_pm/00083259.PDF" },
} satisfies Record<string, Source>;

export const SEIZURES_S61: Samp[] = [
  /* 48 Febrile seizure 8 days after measles-containing vaccine --------------- */
  {
    id: "seizures-48",
    topic: "seizures",
    title: "Toddler a week after her one-year shots",
    stem:
      "A 13-month-old girl is brought to the emergency department by her parents after a seizure at home. Eight days ago she received her 12-month vaccines, including MMR and varicella vaccines given separately. Since this morning she has had a fever and a faint pink rash on her trunk. One hour ago she became unresponsive and stiff, then jerked all four limbs for about 2 minutes, timed by her mother. She was sleepy for 20 minutes and is now crawling and babbling. She was born at term, is developing normally and has never had a seizure. Her ears and throat are normal, her neck is supple and the rash blanches. The neurological examination is normal.",
    vitals: { temperature: "39.3°C rectal", pulse: "150/minute", resp: "32/minute", o2sat: "99% on room air", weight: "10 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for the event she had at home?",
        options: ["Bacterial meningitis", "Complex febrile seizure", "Encephalitis from the vaccine", "Rigors from vaccine fever", "Simple febrile seizure"],
        correct: 4,
        explanation:
          "A single generalized seizure lasting 2 minutes with fever, in a child aged 6 to 60 months who is back to baseline with a normal examination, is a simple febrile seizure. Fever and febrile seizures are more likely 7 to 10 days after measles-containing vaccines, which fits her timing. A complex febrile seizure is focal, lasts 15 minutes or more, or recurs within 24 hours. Her supple neck and full recovery make meningitis and encephalitis unlikely. Rigors do not cause unresponsiveness.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "aap-fs-eval",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her parents ask whether she should get the rest of her routine vaccines, including the second dose of measles-containing vaccine.",
        prompt: "Which of the following is the most appropriate advice about her future routine vaccines?",
        options: ["Continue on the usual schedule", "Delay all vaccines until age 2", "Give future doses in hospital", "Omit the second measles dose", "Separate each vaccine by 1 month"],
        correct: 0,
        explanation:
          "A history of febrile seizures is not a contraindication to measles-containing vaccines, including the combined measles, mumps, rubella and varicella vaccine, so she should continue on the usual schedule. Her second dose is needed for reliable protection. Delaying or omitting doses leaves her exposed to measles and the other diseases without reducing her small risk of another febrile seizure. Vaccines do not need to be given in hospital or spaced a month apart because of this event.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "cig-measles",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are the most appropriate steps before she goes home from the emergency department?",
        options: ["Blood culture", "CBC and electrolytes", "EEG within 2 weeks", "Pediatric neurology referral", "Report the event to public health", "Teach seizure first aid", "Urine culture by catheter"],
        select: 2,
        correct: [4, 5],
        explanation:
          "A seizure after immunization is a reportable adverse event, and most provinces and territories make reporting mandatory, usually through the local public health unit. Her parents should also be taught first aid for a seizure and told when to call for help, along with the benign nature of febrile seizures. A simple febrile seizure does not need an EEG, blood tests or specialist referral. She has a clear explanation for her fever and is well, so blood and urine cultures are not needed.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "phac-aefi-guide",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan to prevent or treat future febrile seizures at home?",
        options: ["Daily levetiracetam for 1 year", "Daily phenobarbital until age 5", "Oral diazepam with each fever", "Scheduled ibuprofen during fevers", "No antiseizure medication"],
        correct: 4,
        explanation:
          "Drug prophylaxis is not advised after a simple febrile seizure. Daily phenobarbital and intermittent diazepam lower recurrence somewhat but cause adverse effects in up to about a third of children, and levetiracetam needs more study. Given how benign recurrent febrile seizures are, families are better served by information on recurrence, first aid and how to reach care. Antipyretics can make her comfortable but do not prevent another febrile seizure.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "cochrane-fs-prophylaxis",
      },
    ],
    sources: [S.aapEval, S.cigMeasles, S.aefi, S.cochrane],
    ...META,
  },

  /* 49 Fever and seizure at 4 months progressing to status ------------------- */
  {
    id: "seizures-49",
    topic: "seizures",
    title: "Feverish infant who will not wake up",
    stem:
      "A 4-month-old boy is brought to the emergency department by ambulance after a seizure at home. He has had a fever and fed poorly since yesterday. His mother saw him stiffen and jerk all four limbs for about 4 minutes, and he has been drowsy since. He was born at term, received his 2-month vaccines and has no medical history. On arrival he opens his eyes to a loud voice and cries weakly, then drifts back to sleep. The anterior fontanelle is soft. There is no rash. His capillary glucose is 5.2 mmol/L.",
    vitals: { temperature: "39.4°C rectal", pulse: "182/minute", resp: "44/minute", bp: "86/50 mmHg", o2sat: "96% on room air", weight: "6.8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his presentation most clearly excludes a diagnosis of simple febrile seizure?",
        options: ["Age of 4 months", "Fever of 39.4°C", "Generalized jerking", "Pulse of 182/minute", "Seizure lasting 4 minutes"],
        correct: 0,
        explanation:
          "Simple febrile seizures are defined in children aged 6 to 60 months, so a seizure with fever at 4 months cannot be called one and needs a search for infection of the brain or other cause. His ongoing drowsiness also argues against a simple event. A seizure of 4 minutes is well under the 15-minute limit, generalized jerking is typical of a simple febrile seizure, and a fever of 39.4°C with a pulse of 182/minute is expected in a febrile infant.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "aap-fs-eval",
      },
      {
        id: "q2",
        kind: "single",
        update: "In the resuscitation room he has a second generalized convulsion. He had not woken fully between the two seizures.",
        prompt: "Which of the following terms best describes his condition after the second convulsion?",
        options: ["Benign febrile myoclonus", "Complex febrile seizure", "Convulsive status epilepticus", "Prolonged postictal state", "Rigors with high fever"],
        correct: 2,
        explanation:
          "Two or more discrete seizures without a return to baseline mental status between them define convulsive status epilepticus, whatever the length of each seizure. He has not woken fully since the first seizure, so he needs status treatment now rather than observation. Calling it a complex febrile seizure understates the urgency and the age rules out that label. A prolonged postictal state has no new convulsions. Benign myoclonic jerks and rigors do not cause generalized convulsions with impaired consciousness.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "cps-status-epilepticus",
      },
      {
        id: "q3",
        kind: "single",
        update: "He receives midazolam 0.7 mg IV, then a second dose 5 minutes later, and the seizure stops. His respiratory rate falls to 8/minute with shallow breaths, and his saturation is 85% on oxygen by face mask.",
        prompt: "Which of the following is the most appropriate immediate step in his care?",
        options: ["Bag-valve-mask ventilation", "High-flow nasal cannula", "Naloxone 0.07 mg IV", "Oxygen by nasal prongs", "Rapid sequence intubation"],
        correct: 0,
        explanation:
          "His seizure has stopped but he is hypoventilating after two doses of benzodiazepine, and a saturation below 90% on oxygen calls for assisted ventilation. Bag-valve-mask ventilation supports him now, and intubation follows if adequate breathing does not return. Moving to intubation first adds risk while simple ventilation may be enough. High-flow nasal cannula and nasal prongs give oxygen but do not breathe for him. He has had no opioid, so naloxone will not help.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "cps-status-epilepticus",
      },
      {
        id: "q4",
        kind: "single",
        update: "After a few minutes of bag-mask ventilation he breathes on his own with a saturation of 98% on oxygen. Blood cultures are drawn, and ceftriaxone and vancomycin are given. His vital signs are stable and he has not seized again.",
        prompt: "Which of the following investigations is most important next to identify the cause of his seizures?",
        options: ["CT head without contrast", "EEG within 24 hours", "Lumbar puncture", "MRI brain under sedation", "Urine culture by catheter"],
        correct: 2,
        explanation:
          "A febrile 4-month-old in status epilepticus needs a lumbar puncture to look for meningitis or encephalitis, done once his vital signs are stable and the convulsions have stopped. Antibiotics were rightly given first so the test did not delay treatment. He has no focal signs or features of raised intracranial pressure, so a CT is not required before the puncture. An EEG and MRI may follow but do not diagnose infection. A urine culture can find a source of fever but cannot explain status epilepticus.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "cps-status-epilepticus",
      },
    ],
    sources: [S.aapEval, S.cpsSe],
    ...META,
  },

  /* 50 Nocturnal hemifacial seizures mistaken for choking --------------------- */
  {
    id: "seizures-50",
    topic: "seizures",
    title: "Boy found drooling at dawn",
    stem:
      "An 8-year-old boy is brought to the emergency department by his parents after an event at 05:00 this morning. They woke to gurgling sounds and found him awake and drooling, with the right side of his face and mouth twitching. He could not speak but nodded to their questions and squeezed his mother's hand. It stopped after about 90 seconds, and his speech was slurred for a few minutes before returning to normal. Two similar night-time events in the past month were thought to be choking from reflux. He has no fever, headache or recent illness. He is developing normally and does well at school. His examination, including a full neurological examination, is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "18/minute", bp: "104/64 mmHg", o2sat: "99% on room air", weight: "27 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for his three night-time events?",
        options: ["Motor tics during sleep", "Night terrors with confusion", "Obstructive sleep apnea", "Reflux with laryngospasm", "Self-limited focal epilepsy"],
        correct: 4,
        explanation:
          "Brief events from sleep with twitching of one side of the face and mouth, drooling, gurgling and difficulty speaking, in a school-aged child with normal development and examination, are the characteristic seizures of self-limited epilepsy with centrotemporal spikes. They tend to occur within an hour of falling asleep or in the hours before waking. Night terrors bring screaming and confusion rather than one-sided twitching with preserved contact. Reflux and sleep apnea do not cause rhythmic facial jerking, and tics occur mainly while awake.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "ilae-selects",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his events most strongly suggests seizures rather than a sleep disorder?",
        options: ["Gurgling sounds at onset", "Normal speech afterward", "Onset early in the morning", "Rhythmic one-sided face twitching", "Two similar prior events"],
        correct: 3,
        explanation:
          "Rhythmic twitching of one side of the face is a focal motor sign, and with drooling and slurred speech it forms the mouth and hemiface sensorimotor seizure of this syndrome. Gurgling can come from choking as well as from a seizure. Early morning timing and repeated similar events occur in many sleep disorders. A quick return to normal speech is expected after these brief seizures and does not point either way.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "ilae-selects",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate to confirm the diagnosis in this boy?",
        options: ["CT head without contrast", "MRI brain under sedation now", "Overnight polysomnography", "Sleep EEG recording", "Upper GI contrast study"],
        correct: 3,
        explanation:
          "The diagnosis needs high-amplitude centrotemporal discharges on EEG, which become more frequent in drowsiness and sleep, so a recording that includes sleep is the confirming test. When the clinical picture and EEG are typical, neuroimaging is not required, so a CT or an MRI under sedation adds risk without benefit. Polysomnography looks for sleep apnea, and an upper GI study looks for reflux, neither of which explains one-sided facial seizures.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "ilae-selects",
      },
    ],
    sources: [S.ilaeSelects],
    ...META,
  },

  /* 51 Cyanotic breath-holding spell with iron deficiency --------------------- */
  {
    id: "seizures-51",
    topic: "seizures",
    title: "Toddler who went blue after a tantrum",
    stem:
      "A 15-month-old boy is brought to the emergency department by his father after a frightening event 1 hour ago. He was angry and crying hard when a toy was taken away. He then went silent with his mouth open, turned blue around the lips, went stiff, had a few jerks of his arms and was limp for about 20 seconds. He then took a deep breath, cried and was back to normal within a minute. His father describes two similar episodes in the past month, each after a tantrum. He drinks about 1.2 L of cow's milk a day and eats little else. He has had no fever. He is playful and pale, and his examination is otherwise normal.",
    vitals: { temperature: "36.8°C tympanic", pulse: "124/minute", resp: "28/minute", o2sat: "99% on room air", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most strongly suggests this was not an epileptic seizure?",
        options: ["Brief jerks of the arms", "Crying and cyanosis came first", "Limp for about 20 seconds", "Pallor on examination", "Three episodes in total"],
        correct: 1,
        explanation:
          "In a cyanotic breath-holding spell a provoking event such as anger or frustration leads to vigorous crying, breath-holding in expiration and cyanosis, and only then to loss of consciousness, stiffening or limpness and recovery without a postictal phase. The order of events, with crying and cyanosis first, is what separates it from a seizure. Brief jerks can occur when the apnea is prolonged, so they do not settle the question. Limpness, repeated episodes and pallor can be seen with either.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "leung-breath-holding",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for him in the emergency department?",
        options: ["CT head without contrast", "EEG within a week", "Electrolytes and calcium", "Hemoglobin and ferritin", "Serum lead level"],
        correct: 3,
        explanation:
          "Iron deficiency, with or without anemia, is associated with breath-holding spells, and a blood count with ferritin should be checked when anemia is suspected. He is pale and drinks 1.2 L of cow's milk a day, which puts him at risk. Treating iron deficiency reduces how often and how severely spells occur. The diagnosis rests on the history, so an EEG or CT adds little when the story is typical. Electrolytes and calcium matter for afebrile seizures from metabolic causes, not for a spell provoked by crying. Nothing suggests lead exposure.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "leung-breath-holding",
      },
      {
        id: "q3",
        kind: "single",
        update: "Hemoglobin is 92 g/L with an MCV of 61 fL, and ferritin is 5 mcg/L.",
        prompt: "Which of the following is the most appropriate treatment to reduce his spells?",
        options: ["elemental iron 11 mg PO daily", "elemental iron 33 mg PO daily", "elemental iron 165 mg PO daily", "levetiracetam 110 mg PO twice daily", "No medication, reassurance only"],
        correct: 1,
        explanation:
          "Iron supplementation lowers the frequency and severity of breath-holding spells in children with iron deficiency, and a dose of 3 mg/kg/day of elemental iron for 12 weeks has been used. At 11 kg that is 33 mg once daily. A dose of 11 mg is only 1 mg/kg/day, and 165 mg is 15 mg/kg/day, far above the treatment dose. These spells are not epilepsy, so levetiracetam has no role. Reassurance remains important, but on its own it leaves his iron deficiency untreated.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "leung-breath-holding",
      },
    ],
    sources: [S.leung],
    ...META,
  },

  /* 52 Subtle status after vomiting illness in known epilepsy ---------------- */
  {
    id: "seizures-52",
    topic: "seizures",
    title: "Woman with epilepsy and a stomach bug",
    stem:
      "A 27-year-old woman is brought to the emergency department by ambulance after a seizure. She has generalized epilepsy controlled on levetiracetam 1 000 mg twice daily, and her last seizure was 2 years ago. For 36 hours she has had vomiting and diarrhea, as have her children, and she has kept none of her last three doses down. Her partner saw a generalized convulsion 30 minutes ago. Paramedics gave midazolam 10 mg IM and the jerking stopped. On arrival she had a second convulsion, which stopped 2 minutes after lorazepam 4 mg IV. Ten minutes later she has not woken. Her eyes are deviated to the right with small rhythmic jerks, and the corner of her mouth twitches. Her glucose is 5.6 mmol/L.",
    vitals: { temperature: "37.6°C tympanic", pulse: "124/minute", resp: "18/minute", bp: "136/82 mmHg", o2sat: "95% on 6 L/minute by face mask", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her state 10 minutes after the lorazepam was given?",
        options: ["Benzodiazepine oversedation", "Expected postictal drowsiness", "Ongoing status epilepticus", "Psychogenic nonepileptic seizure", "Septic encephalopathy"],
        correct: 2,
        explanation:
          "She has had two convulsions without regaining consciousness, and she now has rhythmic eye jerks with gaze deviation and facial twitching. That is status epilepticus continuing in a subtle form after the visible convulsion stopped, and it needs treatment now. Postictal drowsiness and benzodiazepine sedation cause a depressed level of consciousness without rhythmic movements. Nothing suggests a psychogenic event in a woman with known generalized epilepsy and missed doses. A temperature of 37.6°C with gastroenteritis does not explain focal rhythmic jerking.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "trinka-ilae-se",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: ["levetiracetam 1 000 mg IV", "levetiracetam 3 480 mg IV", "levetiracetam 6 000 mg IV", "lorazepam 4 mg IV", "phenytoin 300 mg PO"],
        correct: 1,
        explanation:
          "She has already had two benzodiazepine doses, the paramedic midazolam and the lorazepam, so a second-line drug is due. Levetiracetam 60 mg/kg up to 4 500 mg was as effective as fosphenytoin and valproate for benzodiazepine-refractory status, and 60 mg/kg for 58 kg is 3 480 mg. Her usual 1 000 mg dose is far too small to load. A dose of 6 000 mg exceeds the 4 500 mg maximum. A third benzodiazepine dose adds respiratory depression without the benefit of a second-line drug. Oral phenytoin is too slow and she cannot swallow safely.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "esett",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her seizures stop during the infusion and she is awake and oriented 2 hours later. She is still vomiting. Her electrolytes and creatinine are normal.",
        prompt: "Which of the following is the most appropriate plan for her usual levetiracetam while she cannot keep tablets down?",
        options: ["Double the oral dose once vomiting stops", "Hold it until the vomiting settles", "levetiracetam 1 000 mg IV twice daily", "One IV dose, then wait until eating", "Switch to oral phenytoin"],
        correct: 2,
        explanation:
          "Missed doses during a vomiting illness caused this breakthrough, so her maintenance dose must continue by a route she can absorb. Intravenous levetiracetam is an alternative when oral dosing is temporarily not feasible, and the switch is made directly at the same total daily dose and frequency, here 1 000 mg IV twice daily. Holding doses or waiting until she eats repeats the gap that led to status. Doubling later does not cover the hours in between. Phenytoin by mouth meets the same absorption problem and replaces a drug that has controlled her epilepsy.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "sandoz-levetiracetam-iv",
      },
    ],
    sources: [S.trinka, S.esett, S.levPm],
    ...META,
  },
];
