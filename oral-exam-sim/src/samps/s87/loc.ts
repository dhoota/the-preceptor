// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  edlow: { id: "edlow-coma", citation: "Edlow JA, Rabinstein A, Traub SJ, Wijdicks EFM. Diagnosis of reversible causes of coma. Lancet. 2014." },
  jones: { id: "jones-ethanol", citation: "Jones AW. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int. 2010." },
  btf: { id: "btf-prehospital-2023", citation: "Hawryluk GWJ, Lulla A, Bell R, and colleagues. Guidelines for the prehospital management of traumatic brain injury, 3rd edition: executive summary. Brain Trauma Foundation. Neurosurgery. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10627685/" },
  gcsFaq: { id: "gcs-faq", citation: "Teasdale G, Institute of Neurological Sciences, Glasgow. Glasgow Coma Scale: frequently asked questions. glasgowcomascale.org. 2014.", url: "https://glasgowcomascale.org/faq/" },
  gcsAid: { id: "gcs-aid", citation: "Teasdale G, Institute of Neurological Sciences, Glasgow. Glasgow Coma Scale: structured assessment aid. glasgowcomascale.org. 2014.", url: "https://www.glasgowcomascale.org/gcs-aid/" },
  proudfoot: { id: "proudfoot-urine-alkalinization", citation: "Proudfoot AT, Krenzelok EP, Vale JA. Position paper on urine alkalinization. American Academy of Clinical Toxicology and European Association of Poisons Centres and Clinical Toxicologists. J Toxicol Clin Toxicol. 2004." },
  kleizen: { id: "kleizen-intussusception", citation: "Kleizen KJ, Hunck A, Wijnen MH, Draaisma JM. Neurological symptoms in children with intussusception. Acta Paediatr. 2009." },
  linMartore: { id: "lin-martore-pocus", citation: "Lin-Martore M, Kornblith AE, Kohn MA, Gottlieb M. Diagnostic accuracy of point-of-care ultrasound for intussusception in children presenting to the emergency department: a systematic review and meta-analysis. West J Emerg Med. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7390574/" },
  ichd3: { id: "ichd3", citation: "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. 1.1 Migraine without aura. Cephalalgia. 2018.", url: "https://ichd-3.org/1-migraine/1-1-migraine-without-aura/" },
  plasmic: { id: "plasmic-2017", citation: "Bendapudi PK, Hurwitz S, Fry A, and colleagues. Derivation and external validation of the PLASMIC score for rapid assessment of adults with thrombotic microangiopathies: a cohort study. Lancet Haematol. 2017." },
  isthGps: { id: "isth-ttp-gps", citation: "Zheng XL, Vesely SK, Cataland SR, and colleagues. Good practice statements for the clinical care of patients with thrombotic thrombocytopenic purpura. International Society on Thrombosis and Haemostasis. J Thromb Haemost. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7880820/" },
} satisfies Record<string, Source>;

export const LOC_S87: Samp[] = [
  /* 48 Found unrousable in police cells, fly-in community ------------------- */
  {
    id: "loc-48",
    topic: "loc",
    alsoTopics: ["multiple-trauma"],
    title: "Could not be woken for breakfast",
    stem:
      "You are working in a small hospital in a fly-in community in northern Ontario. There is no CT scanner. A regional hospital with CT but no neurosurgery is 1 hour away by air. A neurosurgical centre is 2 hours away. The air ambulance can fly to either. At 0730, police bring in a 38-year-old man whom they could not wake for breakfast in the detachment cells. He was arrested at 2300 for public intoxication after a fight outside the community hall. Officers say he was swearing and unsteady on his feet when arrested. He has alcohol use disorder and no other known history. He smells of alcohol. He opens his eyes only to pressure, moans without words and pulls his arm away from pressure. There is a boggy swelling over the right parietal scalp. His pupils are 3 mm, equal and reactive. Capillary glucose is 6.2 mmol/L.",
    vitals: { temperature: "36.2°C tympanic", pulse: "56/minute", resp: "12/minute", bp: "174/98 mmHg", o2sat: "94% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following sources would best show how his responsiveness changed while he was in the cells overnight?",
        options: [
          "Cell block check log",
          "Guard who did the overnight checks",
          "His family physician's last note",
          "His sister by telephone",
          "Old chart from the nursing station",
          "Pharmacy dispensing record",
          "Police report of the fight",
          "Witnesses at the community hall",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "The check log and the guard who made the checks are the only sources that can say when he was last awake and talking and when that changed. Edlow and colleagues make the history the first tool for finding the cause of coma once the patient is stable, and here it shows whether he worsened while he should have been sobering. The police report and witnesses at the hall describe the fight and the mechanism of injury, which matter, but not his course overnight. His sister was not with him. His family physician's note, an old chart and the pharmacy record give his baseline and medications but cannot show the change in the cells.",
        keyFeature: { topic: "loc", n: 3 },
        source: "edlow-coma",
      },
      {
        id: "q2",
        kind: "single",
        update: "He asked for water and walked to the toilet at 0100. At 0400 and 0600 he was asleep and snoring and was not woken.",
        prompt: "Which of the following features of his course most strongly indicates that alcohol is not the sole cause of his state?",
        options: ["Arrest for public intoxication", "Decline in cells after 0100", "Long history of heavy drinking", "Snoring at the 0400 check", "Unsteady gait at arrest"],
        correct: 1,
        explanation:
          "He was talking and walking at 0100 and cannot be woken at 0730, so he became worse at a time when his blood ethanol should have been falling. Jones found that ethanol is cleared from blood at a steady 10 to 20 mg/100 mL per hour, and at 25 to 35 mg/100 mL per hour in heavy drinkers, so intoxication lightens over hours rather than deepens. His arrest for intoxication, his long history of heavy drinking and his unsteady gait fit alcohol but say nothing about a second cause. Snoring at the 0400 check fits sleep, alcohol or a head injury, so it does not separate them.",
        keyFeature: { topic: "loc", n: 4 },
        source: "jones-ethanol",
      },
      {
        id: "q3",
        kind: "single",
        update: "His saturation falls to 86% with snoring respirations despite a jaw thrust. You plan rapid sequence intubation before the flight out.",
        prompt: "Which of the following is most important to record before the induction drugs are given?",
        options: ["Full cranial nerve examination", "GCS components and pupil size", "Plantar responses on both sides", "Serum ethanol level and time drawn", "Tendon reflexes in all four limbs"],
        correct: 1,
        explanation:
          "The Brain Trauma Foundation recommends measuring the GCS before sedative or paralytic drugs are given, and assessing and documenting the pupils, because induction drugs hide both for hours. His components now (E2 V2 M4) and his pupil size and reaction become the baseline the receiving neurosurgeon compares against, so a pupil that dilates later has meaning. A full cranial nerve, plantar or tendon reflex examination adds little to the decisions ahead and delays securing an airway in a hypoxic patient. An ethanol level can be drawn with his other bloods at any time, and the induction drugs do not change it.",
        keyFeature: { topic: "loc", n: 5 },
        source: "btf-prehospital-2023",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate destination for him once he is intubated?",
        options: ["Admit here for hourly GCS checks", "CT at the regional hospital, then decide", "Hold here until a scheduled flight", "Transfer to the neurosurgical centre", "Transfer to the regional hospital with CT"],
        correct: 3,
        explanation:
          "A GCS of 8 after a fight with a scalp swelling is a moderate to severe head injury until CT shows otherwise, and his heart rate of 56/minute with a blood pressure of 174/98 mmHg raises concern for a mass lesion that may need surgery. The Brain Trauma Foundation strongly recommends taking a patient with suspected moderate to severe brain injury directly to a facility with immediately available CT, prompt neurosurgical care and the ability to monitor and treat intracranial pressure. It accepts a stop at a centre without these only when direct transport is not possible, and here the air ambulance can fly him straight there. A CT at the regional hospital would show a hematoma that no one there can evacuate, and a second flight adds hours. Admitting him for hourly checks or holding him for a scheduled flight leaves a possible hematoma unimaged.",
        keyFeature: { topic: "loc", n: 1 },
        source: "btf-prehospital-2023",
      },
    ],
    sources: [S.edlow, S.jones, S.btf],
    ...META,
  },
  /* 49 Nonverbal group home resident, double dosing -------------------------- */
  {
    id: "loc-49",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "Less responsive at the group home",
    stem:
      "A 63-year-old man is brought to the emergency department by ambulance from his group home because he has been less responsive for 2 days. He has lifelong severe intellectual disability and spastic quadriplegic cerebral palsy. He has no speech and is fed by gastrostomy. He takes phenobarbital through his tube for epilepsy. The night staff member who called the ambulance started working there last week. The paramedic transfer sheet reads 'baseline unknown'. He lies with his eyes closed. He opens his eyes to pressure, makes no sounds and localizes to pressure. He coughs weakly when suctioned. There is no bruising or scalp swelling. Capillary glucose is 6.1 mmol/L.",
    vitals: { temperature: "35.9°C rectal", pulse: "62/minute", resp: "10/minute", bp: "104/62 mmHg", o2sat: "92% on room air", weight: "46 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following sources would best establish how his current state differs from his usual state?",
        options: ["Day staff member who knows his routine", "His last neurology clinic letter", "Paramedic transfer sheet", "Public guardian who manages his affairs", "Seizure diary kept at the home"],
        correct: 0,
        explanation:
          "Only a caregiver who sees him every day can say what he usually does, such as whether he tracks faces, smiles, vocalizes or reaches out. Without that baseline his responses cannot be judged as a change. Edlow and colleagues make the history the first tool for finding the cause of coma once the patient is stable, and in a man who cannot speak that history comes from the people who know him. The night worker is new, and the paramedic sheet says his baseline is unknown. A neurology letter lists his diagnoses, not his alertness this week. A public guardian makes decisions for him but rarely sees his daily behaviour. A seizure diary helps if seizures are suspected but does not describe his usual responsiveness.",
        keyFeature: { topic: "loc", n: 3 },
        source: "edlow-coma",
      },
      {
        id: "q2",
        kind: "single",
        update: "At his usual best he watches people, smiles and makes cooing sounds when spoken to, and reaches for a familiar hand.",
        prompt: "Which of the following is the most appropriate way to record his verbal response on the Glasgow Coma Scale?",
        options: ["Not testable, with the reason noted", "Score V1 as he makes no sounds now", "Score V2 as sounds are his best", "Total GCS 8 with V1 included", "Verbal left out without comment"],
        correct: 0,
        explanation:
          "He has never spoken, so the verbal scale, which rates orientation and words, cannot measure his consciousness. The Glasgow Coma Scale guidance says to record a component that cannot be assessed as NT rather than 1, and not to report a total when a component is not testable, because the low number misleads. Record E2 and M5 with a plain description of the change: no sounds, no eye contact and no reaching, against a usual state of watching, smiling and cooing. Scoring V1 or V2 treats a lifelong disability as depressed consciousness, and a total of 8 with V1 would suggest coma. Leaving the verbal score out without comment loses both the reason and the baseline.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-faq",
      },
      {
        id: "q3",
        kind: "single",
        update: "His medication bin arrives from the group home. It holds his old phenobarbital 30 mg tablets and the new 60 mg tablets his neurologist ordered twice daily 10 days ago to replace them, and both are signed as given twice daily since then. His urinalysis is normal.",
        prompt: "Which of the following is the most likely cause of his decreased level of consciousness?",
        options: ["Hyperammonemic encephalopathy", "Nonconvulsive status epilepticus", "Phenobarbital toxicity", "Subdural hematoma after a fall", "Urinary tract sepsis"],
        correct: 2,
        explanation:
          "Both tablets signed as given means he has received 180 mg of phenobarbital a day instead of the 120 mg ordered, for 10 days, and this long-acting barbiturate builds up over days. His slow breathing at 10/minute, temperature of 35.9°C and gradual decline over 2 days fit sedative toxicity, and Edlow and colleagues list a treatable poisoning among the causes to look for once the history points to it. Hyperammonemic encephalopathy follows valproate or liver disease, and nothing in his history suggests either. Nonconvulsive status epilepticus is less likely while he is receiving extra anticonvulsant, although an EEG is needed if he fails to improve. He has no bruising or scalp swelling to suggest a subdural hematoma after a fall, and his urinalysis is normal.",
        keyFeature: { topic: "loc", n: 1 },
        source: "edlow-coma",
      },
      {
        id: "q4",
        kind: "single",
        update: "He breathes 10/minute with a saturation of 95% on 2 L/minute by nasal prongs. His cough and gag are now strong, and he is nursed with the head of the bed at 30 degrees. His blood pressure is stable.",
        prompt: "Which of the following treatments is most likely to speed his recovery?",
        options: ["Empiric IV ceftriaxone", "Lactulose by gastrostomy", "Multiple-dose activated charcoal", "Phenytoin IV loading dose", "Urinary alkalinization"],
        correct: 2,
        explanation:
          "Proudfoot and colleagues, writing for the American and European clinical toxicology societies, state that urine alkalinization cannot be recommended as first-line treatment for phenobarbital poisoning because multiple-dose activated charcoal is superior. Repeated charcoal through his gastrostomy increases phenobarbital elimination, and his airway must be reassessed before each dose. Nothing in his case points to infection, since his urinalysis is normal and he has no other source, so empiric ceftriaxone treats a cause he does not have. Lactulose treats hepatic encephalopathy, and nothing in his history suggests liver disease or valproate exposure to cause hyperammonemia. A phenytoin load treats status epilepticus, which is unlikely while he is receiving extra anticonvulsant, and it would add a second sedating drug.",
        keyFeature: { topic: "loc", n: 2 },
        source: "proudfoot-urine-alkalinization",
      },
    ],
    sources: [S.edlow, S.gcsFaq, S.proudfoot],
    ...META,
  },
  /* 50 Floppy infant collected from daycare ---------------------------------- */
  {
    id: "loc-50",
    topic: "loc",
    alsoTopics: ["abdominal-pain"],
    title: "Collected early from daycare",
    stem:
      "A 9-month-old boy is brought to the emergency department by his father, who was called to the daycare because the boy had become pale, floppy and hard to keep awake after his morning nap. He vomited once at the daycare. He has had no fever, cough or diarrhea and has no medical history. His immunizations are up to date. His father says he was up crying last night with new teeth and thinks he is simply exhausted. He opens his eyes to voice, then drifts off. He cries weakly to pressure and withdraws from it. His fontanelle is soft. His abdomen is soft, with fullness in the right upper quadrant. There are no bruises. Capillary glucose is 5.1 mmol/L.",
    vitals: { temperature: "37.1°C rectal", pulse: "164/minute", resp: "34/minute", o2sat: "98% on room air", weight: "9.2 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to his father's view that teething has exhausted him?",
        options: ["Acetaminophen and observe his nap", "Discharge if he feeds well in 1 hour", "Oral rehydration trial before tests", "Reassess after a 2 hour sleep", "Urgent search for a serious cause"],
        correct: 4,
        explanation:
          "Teething does not make an infant pale, floppy and hard to keep awake, so his decreased consciousness must be explained before it is blamed on a minor cause. Kleizen and colleagues found neurological signs in 17% of children with intussusception, most often lethargy, followed by hypotonia and fluctuating consciousness, sometimes without the classic features. His pallor, vomiting and abdominal fullness need investigation now. Giving acetaminophen and watching him nap, or reassessing after a 2 hour sleep, delays the diagnosis of a time-sensitive cause. Discharge after a good feed or an oral rehydration trial before tests treats symptoms and leaves the cause unexamined.",
        keyFeature: { topic: "loc", n: 4 },
        source: "kleizen-intussusception",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following people can best describe how he behaved between his nap and his father's arrival?",
        options: ["Another parent at pickup time", "Daycare director at the front desk", "Daycare worker who woke him", "His family physician by phone", "His mother by phone from work"],
        correct: 2,
        explanation:
          "The worker who woke him saw the change first hand: when he was last his usual self, how he looked on waking, and whether he had spells of crying, pallor or limpness. That timeline separates a sudden change from a gradual one and is the history Edlow and colleagues use first, once the patient is stable, to find the cause of a depressed level of consciousness. The director at the front desk and another parent saw him briefly or not at all. His mother at work and his family physician know his usual behaviour but did not see him today.",
        keyFeature: { topic: "loc", n: 3 },
        source: "edlow-coma",
      },
      {
        id: "q3",
        kind: "single",
        update: "Twenty minutes later he is awake, babbling and reaching for his father's keys. His father asks whether this means the tests can be cancelled.",
        prompt: "Which of the following is the most appropriate response to this change in his alertness?",
        options: ["Cancel tests now that he is alert", "Check again only if he vomits", "Discharge with teething advice", "Record the change and keep trending", "Stop checks while he is playing"],
        correct: 3,
        explanation:
          "Kleizen and colleagues describe fluctuating consciousness among the neurological presentations of intussusception, so a lively spell does not end the concern raised by an infant who was pale, floppy and hard to keep awake. Recording the time, what he is doing and his responses, in plain words and as a score, lets the team compare the next spell with this one and see whether he is settling or cycling. Cancelling tests or discharging him with teething advice treats a fluctuation as recovery. Checking again only if he vomits, or stopping checks while he plays, leaves gaps in which the next drowsy spell goes unrecorded.",
        keyFeature: { topic: "loc", n: 5 },
        source: "kleizen-intussusception",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for him?",
        options: ["Abdominal radiograph series", "CT head without contrast", "Lumbar puncture with CSF culture", "Point-of-care abdominal ultrasound", "Urine drug screen"],
        correct: 3,
        explanation:
          "Lethargy with pallor, vomiting and fullness in the right upper quadrant in a 9-month-old points to intussusception. Lin-Martore and colleagues found point-of-care ultrasound 94.9% sensitive and 99.1% specific for intussusception, and ultrasound is the first-line test, far more accurate than plain radiographs and free of radiation. Nothing in his history or examination suggests head injury, so CT head exposes him to radiation before the likely cause is checked. He has no fever and a soft fontanelle, so lumbar puncture is not the next step. A urine drug screen would not explain his abdominal finding.",
        keyFeature: { topic: "loc", n: 1 },
        source: "lin-martore-pocus",
      },
    ],
    sources: [S.kleizen, S.edlow, S.linMartore],
    ...META,
  },
  /* 51 Asleep after "one of his migraines" ----------------------------------- */
  {
    id: "loc-51",
    topic: "loc",
    alsoTopics: ["headache", "cva"],
    title: "Sleeping it off, says his wife",
    stem:
      "A 66-year-old man is brought to the emergency department by his wife at 1230 with a severe throbbing headache that began suddenly at 1000 while he was splitting wood. He has vomited four times and asked for the lights to be dimmed. He has had migraines for 30 years, has never had an aura, and his wife says he usually sleeps for hours after one. He has hypertension and stopped taking amlodipine 2 months ago. At triage he was alert and oriented, had nystagmus on looking to the left and could not walk without help. At 1300 he was given metoclopramide 10 mg IV, and a CT head was booked for later in the afternoon. He has not vomited since. He fell asleep at about 1330 in a darkened room. At 1530 he is hard to rouse, and his wife asks that he be left to sleep it off. He lies with his eyes closed, opens them to voice and is confused. The vital signs below are from 1530.",
    vitals: { temperature: "36.8°C oral", pulse: "54/minute", resp: "14/minute", bp: "212/116 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings at 1530 most strongly indicates that his drowsiness is not the sleep that follows his migraines?",
        options: ["Asleep 2 hours after an antiemetic", "Confused when roused to voice", "Eyes closed in a darkened room", "Hours of sleep after past attacks", "No vomiting since 1300"],
        correct: 1,
        explanation:
          "The International Classification of Headache Disorders notes that a patient may fall asleep during a migraine and wake up without it, so the sleep that follows his attacks is ordinary sleep from which he wakes clear. Being confused when roused to voice is a depressed level of consciousness, not sleep, and it must not be put down to his migraine pattern. Sleep after an antiemetic, eyes closed in a darkened room and hours of sleep after past attacks all fit a migraine followed by rest, so they do not separate the two. Having no vomiting since 1300 suggests his nausea has settled and says nothing about his level of consciousness.",
        keyFeature: { topic: "loc", n: 4 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        update: "He now opens his eyes only to pressure, says inappropriate words and does not obey commands. Pressing on a fingernail of his right hand makes him bend that arm.",
        prompt: "Which of the following stimuli is most appropriate to use next to test whether he localizes?",
        options: ["Firmer fingernail bed pressure", "Loud command beside his ear", "Pinprick to the sole of the foot", "Sternal rub with the knuckles", "Trapezius pinch at the shoulder"],
        correct: 4,
        explanation:
          "Bending the arm to pressure on that same hand cannot separate localizing from flexion, because the limb simply moves away from the stimulus. The Glasgow Coma Scale assessment aid recommends fingertip pressure as the peripheral stimulus and the trapezius or supraorbital sites as the central stimulus, so a trapezius pinch shows whether he brings a hand up toward the source. Firmer fingernail pressure repeats the same peripheral test, and a pinprick to the sole is also peripheral. The aid strongly discourages rubbing the sternum with the knuckles. A loud command tests eye opening and obeying, which he has already shown he cannot do.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-aid",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ten minutes later he opens his eyes only to pressure and moans without words. When stimulated again, he brings his hand above his clavicle toward the stimulus.",
        prompt: "Which of the following is his Glasgow Coma Scale score now, with its components?",
        options: ["GCS 7 (E1 V2 M4)", "GCS 8 (E2 V2 M4)", "GCS 9 (E2 V2 M5)", "GCS 10 (E2 V3 M5)", "GCS 10 (E3 V2 M5)"],
        correct: 2,
        explanation:
          "He opens his eyes to pressure (E2), makes sounds without words (V2) and brings his hand toward a central stimulus, which is localizing (M5), for a GCS of 9. Ten minutes earlier he was using inappropriate words, so his verbal response has fallen, and that change should be reported at once rather than folded into a total. GCS 10 (E2 V3 M5) scores the words he no longer uses. GCS 10 (E3 V2 M5) scores eye opening to voice. GCS 8 (E2 V2 M4) scores normal flexion instead of localizing, and GCS 7 (E1 V2 M4) also scores no eye opening.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-aid",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his decline?",
        options: ["Migraine with brainstem aura", "Posterior fossa stroke", "Sedation from metoclopramide", "Vestibular neuritis", "Wernicke encephalopathy"],
        correct: 1,
        explanation:
          "A sudden severe headache during exertion, vomiting, nystagmus and inability to walk, followed by a falling level of consciousness with a heart rate of 54/minute and a blood pressure of 212/116 mmHg, point to a hemorrhage or swollen infarct in the posterior fossa pressing on the brainstem. Edlow and colleagues name structural brain lesions as one of the main mechanisms of coma and call for imaging whenever one is probable or possible. He has never had an aura, and a first brainstem aura would not explain a deepening coma with bradycardia. A single 10 mg dose of metoclopramide given at 1300 does not account for progressive decline with these vital signs. Vestibular neuritis causes vertigo and imbalance but not a falling level of consciousness. Nothing in his history suggests the alcohol use or poor nutrition behind Wernicke encephalopathy, and his onset was sudden.",
        keyFeature: { topic: "loc", n: 1 },
        source: "edlow-coma",
      },
    ],
    sources: [S.ichd3, S.gcsAid, S.edlow],
    ...META,
  },
  /* 52 Confusion with bruising, labelled work stress ------------------------- */
  {
    id: "loc-52",
    topic: "loc",
    alsoTopics: ["headache"],
    title: "Confused at the start of a night shift",
    stem:
      "A 41-year-old woman is brought to the emergency department by a coworker who found her confused at the start of her night shift at a distribution warehouse. The coworker knows her only from work and had not seen her for 2 days before tonight. She lives with her sister. The coworker says she has been working double night shifts this month, has slept poorly and has complained of headaches and easy bruising for about a week. She takes no medications. She opens her eyes to voice, is confused and obeys commands. There are petechiae on her legs and bruises on both arms. Her neck is supple, and there is no focal weakness. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "37.6°C oral", pulse: "108/minute", resp: "18/minute", bp: "148/88 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following sources can best establish when she was last her usual self?",
        options: ["Coworker who brought her in", "Her family physician's office", "Manager who sets her shifts", "Sister who lives with her", "Walk-in clinic note from 3 days ago"],
        correct: 3,
        explanation:
          "Her sister shares her home and is the one person likely to have seen her each day, so she can say when she was last clear and alert and whether the change came on suddenly or over days. Edlow and colleagues make the history the first tool for finding the cause of coma once the patient is stable, and the time she was last well frames that search. The coworker had not seen her for 2 days before tonight and knows her only at work. The manager knows her shift pattern, not her mental state. Her family physician's office and a walk-in note from 3 days ago describe single visits and say nothing about the last 3 days.",
        keyFeature: { topic: "loc", n: 3 },
        source: "edlow-coma",
      },
      {
        id: "q2",
        kind: "single",
        update: "A walk-in clinic note from 3 days ago, found on the provincial health record, reads 'headache, likely work stress and poor sleep'.",
        prompt: "Which of the following findings is most important in deciding that stress cannot explain her presentation?",
        options: ["Bruises and petechiae", "Headaches over the past week", "Long night shifts this month", "Poor sleep for a week", "Pulse of 108/minute"],
        correct: 0,
        explanation:
          "New bruising and petechiae mean a low platelet count or a bleeding disorder, and with confusion they point to a serious systemic cause such as a thrombotic microangiopathy or an intracranial bleed. Edlow and colleagues list psychiatric causes as a rare mechanism of coma, after structural lesions and diffuse neuronal dysfunction, so stress is a conclusion reached only once treatable causes are excluded. Headache, long night shifts and poor sleep are common with stress and do not separate it from organic disease. A pulse of 108/minute can follow anxiety, fever or anemia and is not specific.",
        keyFeature: { topic: "loc", n: 4 },
        source: "edlow-coma",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her provincial health record shows no cancer or transplant. Hemoglobin is 74 g/L, platelets 12 x 10^9/L, MCV 86 fL, reticulocytes 6%, haptoglobin undetectable, INR 1.1 and creatinine 118 umol/L. The film shows schistocytes. CT head is normal.",
        prompt: "Which of the following is the most likely cause of her decreased level of consciousness?",
        options: ["Bacterial meningitis", "Disseminated intravascular coagulation", "Hemolytic uremic syndrome", "Immune thrombocytopenia", "Thrombotic thrombocytopenic purpura"],
        correct: 4,
        explanation:
          "Hemolysis with schistocytes, an undetectable haptoglobin and reticulocytes of 6%, platelets of 12 x 10^9/L and confusion point to thrombotic thrombocytopenic purpura. Her PLASMIC score is 7 of 7: platelets below 30 x 10^9/L, hemolysis, no cancer, no transplant, MCV below 90 fL, INR below 1.5 and creatinine below 177 umol/L. Bendapudi and colleagues place a score of 6 or 7 at high risk of severe ADAMTS13 deficiency. An INR of 1.1 argues against disseminated intravascular coagulation. Hemolytic uremic syndrome usually follows bloody diarrhea and causes more kidney injury than a creatinine of 118 umol/L. Immune thrombocytopenia does not cause schistocytes or hemolysis. Meningitis does not explain the blood film.",
        keyFeature: { topic: "loc", n: 1 },
        source: "plasmic-2017",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following treatments are most appropriate to start for her now?",
        options: ["Eculizumab infusion", "Heparin infusion", "IV immunoglobulin", "Methylprednisolone IV", "Plasma exchange", "Platelet transfusion", "Tranexamic acid IV", "Vitamin K IV"],
        select: 2,
        correct: [3, 4],
        explanation:
          "The ISTH good practice statements advise emergency plasma exchange together with corticosteroids when the suspicion of thrombotic thrombocytopenic purpura is high, with urgent transfer to a centre that can perform the exchange if needed. Exchange removes the autoantibody and replaces ADAMTS13, and methylprednisolone suppresses antibody production. The same statements say platelet transfusion is usually avoided and unnecessary in most cases, despite a count of 12 x 10^9/L. Heparin, tranexamic acid and vitamin K do not treat the cause, and her INR is normal. Eculizumab treats complement-mediated thrombotic microangiopathy, and IV immunoglobulin is a treatment for immune thrombocytopenia.",
        keyFeature: { topic: "loc", n: 2 },
        source: "isth-ttp-gps",
      },
    ],
    sources: [S.edlow, S.plasmic, S.isthGps],
    ...META,
  },
];
