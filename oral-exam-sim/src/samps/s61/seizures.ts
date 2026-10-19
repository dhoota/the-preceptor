// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  aapEval: { id: "aap-fs-eval", citation: "American Academy of Pediatrics Subcommittee on Febrile Seizures. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21285335/" },
  saguil: { id: "afp-fs-recurrence", citation: "Saguil A, Servey J. Predicting the likelihood of a recurrent febrile seizure. Am Fam Physician. 2020.", url: "https://www.aafp.org/pubs/afp/issues/2020/0415/p497.html" },
  cigMeasles: { id: "cig-measles", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4, Active vaccines. Measles vaccines. Last partial content update 2025.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html" },
  aefi: { id: "phac-aefi-guide", citation: "Public Health Agency of Canada. Reporting adverse events following immunization (AEFI) in Canada. User guide to completion and submission of the AEFI reports. 2025.", url: "https://www.canada.ca/en/public-health/services/immunization/reporting-adverse-events-following-immunization/user-guide-completion-submission-aefi-reports.html" },
  cpsSe: { id: "cps-status-epilepticus", citation: "McKenzie KC, Hahn CD, Friedman JN, Canadian Paediatric Society Acute Care Committee. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health. 2021.", url: "https://doi.org/10.1093/pch/pxaa127" },
  leung: { id: "leung-breath-holding", citation: "Leung AKC, Leung AAM, Wong AHC, Hon KL. Breath-holding spells in pediatrics. A narrative review of the current evidence. Curr Pediatr Rev. 2019.", url: "https://doi.org/10.2174/1573396314666181113094047" },
  ilaeSelects: { id: "ilae-selects", citation: "International League Against Epilepsy. EpilepsyDiagnosis.org. Self-limited epilepsy with centrotemporal spikes (SeLECTS). Diagnostic criteria and imaging. Last updated 2024.", url: "https://epilepsydiagnosis.org/syndrome/ects-diagcriteria.html" },
  ilaeSelectsOverview: { id: "ilae-selects-overview", citation: "International League Against Epilepsy. EpilepsyDiagnosis.org. Self-limited epilepsy with centrotemporal spikes (SeLECTS). Overview. Last updated 2024.", url: "https://epilepsydiagnosis.org/syndrome/ects-overview.html" },
  medlineChild: { id: "medlineplus-epilepsy-children", citation: "US National Library of Medicine. MedlinePlus Medical Encyclopedia. Epilepsy in children, discharge. Reviewed 2024.", url: "https://medlineplus.gov/ency/patientinstructions/000127.htm" },
  levPm: { id: "sandoz-levetiracetam-iv", citation: "Sandoz Canada Inc. Product monograph. Levetiracetam for injection, 100 mg/mL. Date of authorization 21 January 2026.", url: "https://pdf.hres.ca/dpd_pm/00083259.PDF" },
  metoPm: { id: "jamp-metoclopramide-iv", citation: "JAMP Pharma Corporation. Product monograph. Metoclopramide hydrochloride injection, 5 mg/mL. Date of preparation 20 April 2023.", url: "https://pdf.hres.ca/dpd_pm/00070463.PDF" },
  epAction: { id: "epilepsy-action-parenting", citation: "Epilepsy Action. Looking after a baby or young child when you have epilepsy. A guide for parents and carers. 2026.", url: "https://www.epilepsy.org.uk/info/caring-children" },
} satisfies Record<string, Source>;

export const SEIZURES_S61: Samp[] = [
  /* 48 Febrile seizure 8 days after measles-containing vaccine --------------- */
  {
    id: "seizures-48",
    topic: "seizures",
    title: "Toddler a week after her one-year shots",
    stem:
      "A 13-month-old girl is brought to the emergency department by her parents after a seizure at home. Eight days ago she received her 12-month vaccines, including MMR and varicella vaccines given separately. Her fever and a faint pink rash on her trunk began about 6 hours before the seizure. One hour ago she became unresponsive and stiff, then jerked all four limbs for about 2 minutes, timed by her mother. She was sleepy for 20 minutes and is now crawling and babbling. She was born at term, is developing normally and has never had a seizure. There is no family history of febrile seizures or epilepsy. Her ears and throat are normal, her neck is supple and the rash blanches. The neurological examination is normal.",
    vitals: { temperature: "39.3°C rectal", pulse: "150/minute", resp: "32/minute", o2sat: "99% on room air", weight: "10 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for the event she had at home?",
        options: ["Bacterial meningitis", "Complex febrile seizure", "Encephalitis from the vaccine", "Rigors from vaccine fever", "Simple febrile seizure"],
        correct: 4,
        explanation:
          "A single generalized seizure lasting 2 minutes with fever, in a child aged 6 to 60 months who is back to baseline with a normal examination, is a simple febrile seizure. A complex febrile seizure is focal, lasts longer than 15 minutes, or recurs within 24 hours. Her supple neck and full recovery make meningitis and encephalitis unlikely. Rigors do not cause unresponsiveness.",
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
          "A history of febrile seizures is not a contraindication to measles-containing vaccines, including the combined measles, mumps, rubella and varicella vaccine, so she should continue on the usual schedule. Fever is common 6 to 23 days after a measles-containing vaccine, which fits the timing of this seizure. Her second dose is needed for reliable protection. Delaying or omitting doses leaves her exposed to measles and the other diseases without reducing her small risk of another febrile seizure. Vaccines do not need to be given in hospital or spaced a month apart because of this event.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "cig-measles",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are the most appropriate steps before she goes home from the emergency department?",
        options: ["Blood culture", "CBC and electrolytes", "EEG within 2 weeks", "Lumbar puncture", "Pediatric neurology referral", "Report the event to public health", "Teach seizure first aid"],
        select: 2,
        correct: [5, 6],
        explanation:
          "A seizure after immunization is a reportable adverse event, and most provinces and territories make reporting mandatory, usually through the local public health unit. Her parents should also be taught first aid for a seizure and told when to call for help, along with the benign nature of febrile seizures. A simple febrile seizure does not need an EEG, blood tests or specialist referral. She is back to baseline with a supple neck, so a lumbar puncture is not needed, and a blood culture adds little in a well child whose fever and rash fit the timing of her measles-containing vaccine.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "phac-aefi-guide",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her history most increases her risk of another seizure with fever?",
        options: ["Generalized jerking of all limbs", "Normal growth and development", "Onset at 13 months of age", "Seizure lasting about 2 minutes", "Sleepy for 20 minutes afterward"],
        correct: 2,
        explanation:
          "A first febrile seizure before 18 months of age is one of four features that predict another, along with a temperature below 40°C at the seizure, fever for less than 1 hour before it and a family history of febrile seizures. At 13 months, with a temperature of 39.3°C, fever for about 6 hours before the seizure and no family history, she has two of the four, which carries a recurrence risk of about 32%, compared with 13% when none is present. Generalized jerking, a seizure of about 2 minutes and a short sleepy spell describe her simple febrile seizure but are not part of this prediction rule. Normal development does not lower her risk of another febrile seizure.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "afp-fs-recurrence",
      },
    ],
    sources: [S.aapEval, S.cigMeasles, S.aefi, S.saguil],
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
        update: "In the resuscitation room he has a second generalized convulsion. Your department follows the Canadian Paediatric Society algorithm, and he receives midazolam 0.7 mg IV at 10:02.",
        prompt: "Which of the following is the most appropriate time to give a second dose if he is still convulsing?",
        options: ["10:04", "10:07", "10:12", "10:17", "10:32"],
        correct: 1,
        explanation:
          "Midazolam 0.1 mg/kg IV is 0.68 mg for 6.8 kg, given here as 0.7 mg, and a second dose should follow if the seizure has not stopped within 5 minutes of the first, so at 10:07. Benzodiazepines work less well the longer a seizure runs, so waiting until 10:12 or 10:17 lets it become harder to stop. Waiting until 10:32 mistakes the conventional 30-minute definition of status epilepticus for the time to treat. A repeat at 10:04 does not give the first dose time to work and adds to respiratory depression. If he is still seizing 5 minutes after the second dose, a second-line drug follows.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "cps-status-epilepticus",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is still convulsing when the second dose of midazolam is given. His saturation is 95% on oxygen by face mask.",
        prompt: "Which of the following is the most important monitoring for him while the second dose takes effect?",
        options: ["Blood pressure every 15 minutes", "Capillary glucose every 5 minutes", "Continuous EEG recording", "Hourly neurological checks", "Pulse oximetry and respiratory rate"],
        correct: 4,
        explanation:
          "Two benzodiazepine doses in a 4-month-old can depress his breathing, so continuous cardiorespiratory monitoring with pulse oximetry and close watch of his respiratory rate and effort shows at once whether he needs assisted ventilation. His convulsion is visible, so an EEG is not needed to follow it. An EEG is kept for a child who does not wake as expected or who has been paralyzed. His glucose was 5.2 mmol/L, so checking it every 5 minutes adds nothing. Blood pressure every 15 minutes and hourly neurological checks are too infrequent to catch respiratory depression.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "cps-status-epilepticus",
      },
      {
        id: "q4",
        kind: "single",
        update: "The convulsion stops after the second dose. Blood cultures are drawn, and ceftriaxone and vancomycin are given. He has not seized again and his vital signs are stable. His fontanelle is soft, he cries when examined and he has no focal neurological signs.",
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
        options: ["Childhood absence epilepsy", "Motor tics during sleep", "Night terrors with confusion", "Reflux with laryngospasm", "Self-limited focal epilepsy"],
        correct: 4,
        explanation:
          "Brief events from sleep with twitching of one side of the face and mouth, drooling, gurgling and difficulty speaking, in a school-aged child with normal development and examination, are the characteristic seizures of self-limited epilepsy with centrotemporal spikes. They tend to occur within an hour of falling asleep or in the hours before waking. Childhood absence seizures are brief staring spells while awake, without drooling or one-sided twitching. Night terrors bring screaming and confusion rather than one-sided twitching with preserved contact. Reflux does not cause rhythmic facial jerking, and tics occur mainly while awake.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "ilae-selects",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate safety advice for his parents while he awaits further assessment?",
        options: ["Avoid sleeping in a top bunk", "Keep him home from school", "Stop all sports and gym class", "Wake him twice each night", "No swimming even with supervision"],
        correct: 0,
        explanation:
          "His events start from sleep, so a fall from a top bunk or a high bed during a seizure is a real risk of injury, and he should sleep in a low bed. He can keep going to school, and his teachers should know about his events. Many sports and active games remain safe, so stopping all of them is not needed. Plenty of sleep on a regular schedule is advised, and waking him through the night only disrupts it. Swimming is allowed with close supervision.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "medlineplus-epilepsy-children",
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
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings at a follow-up visit would most warrant prompt further assessment?",
        options: ["A brief event every few months", "An event during a febrile illness", "Another event after a late night", "Declining language and school work", "Tiredness the morning after an event"],
        correct: 3,
        explanation:
          "The ILAE overview of this condition names cognitive or language deterioration as the change that calls for a sleep EEG, to look for a developmental and epileptic encephalopathy with spike-wave activation in sleep. A further brief event while the condition is active, whether it comes every few months, during a fever or after a late night, does not by itself point to a new process. Tiredness the morning after an event likewise does not signal a change in his condition. None of these is the deterioration the overview warns about.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "ilae-selects-overview",
      },
    ],
    sources: [S.ilaeSelects, S.medlineChild, S.ilaeSelectsOverview],
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
        prompt: "Which of the following features of his presentation most strongly suggests this was not an epileptic seizure?",
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
        keyFeature: { topic: "seizures", n: 6 },
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
        keyFeature: { topic: "seizures", n: 1 },
        source: "leung-breath-holding",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of a future spell would most warrant a cardiac assessment for him?",
        options: ["Onset at rest without a trigger", "Pallor after a minor head bump", "Recovery within about a minute", "Starts when he is told no", "Stiffening after going limp"],
        correct: 0,
        explanation:
          "Breath-holding spells almost always follow a precipitating event such as frustration, anger or a minor injury. A spell that begins at rest with nothing to provoke it does not fit that pattern and raises the possibility of a cardiac arrhythmia, a rare cause of pallid spells, so it calls for a cardiac assessment. Pallor after a minor bump is typical of a pallid spell, being told no is a common trigger, stiffening can follow the limp phase, and recovery within about a minute is expected.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "leung-breath-holding",
      },
    ],
    sources: [S.leung],
    ...META,
  },

  /* 52 Breakthrough seizures from a vomiting illness in a young mother ------- */
  {
    id: "seizures-52",
    topic: "seizures",
    title: "Woman with epilepsy and a stomach bug",
    stem:
      "A 27-year-old woman is brought to the emergency department by ambulance after two seizures this morning. She has generalized epilepsy controlled on levetiracetam 1 000 mg twice daily, and her last seizure was 2 years ago. For 36 hours she has had vomiting and diarrhea, as have her two young children, and she has kept none of her last three doses down. Her partner saw two generalized convulsions, at 06:10 and 06:55, each lasting about 1 minute. Within 15 minutes of each one she was talking to him and knew where she was. She cares for their 9-month-old son at home during the day. She is unsure of the date of her last menstrual period. She is alert and oriented, with a bitten tongue and dry mucous membranes. She did not hit her head. Her neurological examination is normal. Her glucose is 5.6 mmol/L.",
    vitals: { temperature: "37.6°C tympanic", pulse: "112/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "97% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for her in the emergency department?",
        options: ["Blood cultures", "CT head without contrast", "EEG before discharge", "Lumbar puncture", "Urine pregnancy test"],
        correct: 4,
        explanation:
          "She is of reproductive age, has vomited for 36 hours and is unsure of her last period, so pregnancy must be excluded. An unrecognized pregnancy could explain the vomiting, can lower levetiracetam levels and changes later choices about drugs and imaging. Her seizures have a clear cause in missed doses of a drug that has controlled them, she recovered fully after each, did not hit her head and has a normal examination, so a CT would not change her care. An EEG adds nothing to the care of a breakthrough seizure with an obvious trigger. With a temperature of 37.6°C, full alertness and a normal examination, a lumbar puncture and blood cultures are not indicated.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "sandoz-levetiracetam-iv",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following antiemetics is most appropriate for her vomiting?",
        options: ["domperidone 10 mg PO", "haloperidol 1 mg IV", "metoclopramide 10 mg IV", "ondansetron 4 mg IV", "prochlorperazine 10 mg IV"],
        correct: 3,
        explanation:
          "Metoclopramide should not be used in people with epilepsy because it can increase the frequency and severity of seizures. Phenothiazines such as prochlorperazine can lower the seizure threshold, and haloperidol carries the same concern. Ondansetron has only rare reports of seizures and is not contraindicated in epilepsy, so it is the safest choice for her. Domperidone by mouth will not stay down while she is vomiting.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "jamp-metoclopramide-iv",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate safety advice for caring for her son at home?",
        options: ["Avoid using a pram or stroller", "Bathe him alone in shallow water", "Bathe him only with another adult present", "Change his diaper on a padded table", "Feed him while standing up"],
        correct: 2,
        explanation:
          "A seizure during his bath could leave him alone in the water, so he should be bathed only when another adult is with her, and washed from a shallow bowl with a cloth when she is alone. Even shallow bath water is unsafe if she loses awareness. Changing him on a padded mat on the floor, rather than on a raised table, keeps him from falling. Feeding him while sitting on the floor with her back supported is safer than standing. A pram or stroller is safer than carrying him over longer distances.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "epilepsy-action-parenting",
      },
      {
        id: "q4",
        kind: "single",
        update: "Two hours later she has had no further seizures and is awake and oriented, but she is still vomiting. Her electrolytes and creatinine are normal.",
        prompt: "Which of the following is the most appropriate plan for her usual levetiracetam while she cannot keep tablets down?",
        options: ["Double the oral dose once vomiting stops", "Hold it until the vomiting settles", "levetiracetam 1 000 mg IV twice daily", "One IV dose, then wait until eating", "Switch to oral phenytoin"],
        correct: 2,
        explanation:
          "Missed doses during a vomiting illness caused this breakthrough, so her maintenance dose must continue by a route she can absorb. Intravenous levetiracetam is an alternative when oral dosing is temporarily not feasible, and the switch is made directly at the same total daily dose and frequency, here 1 000 mg IV twice daily. Holding doses or waiting until she eats repeats the gap that led to her seizures. Doubling later does not cover the hours in between. Phenytoin by mouth meets the same absorption problem and replaces a drug that has controlled her epilepsy.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "sandoz-levetiracetam-iv",
      },
    ],
    sources: [S.levPm, S.metoPm, S.epAction],
    ...META,
  },
];
