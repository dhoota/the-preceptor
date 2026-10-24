// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  edlow: { id: "edlow-coma", citation: "Edlow JA, Rabinstein A, Traub SJ, Wijdicks EFM. Diagnosis of reversible causes of coma. Lancet. 2014." },
  jones: { id: "jones-ethanol", citation: "Jones AW. Evidence-based survey of the elimination rates of ethanol from blood with applications in forensic casework. Forensic Sci Int. 2010." },
  btf: { id: "btf-prehospital-2023", citation: "Hawryluk GWJ, Lulla A, Bell R, and colleagues. Guidelines for the prehospital management of traumatic brain injury, 3rd edition: executive summary. Brain Trauma Foundation. Neurosurgery. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10627685/" },
  gcsFaq: { id: "gcs-faq", citation: "Teasdale G, Institute of Neurological Sciences, Glasgow. Glasgow Coma Scale: frequently asked questions. glasgowcomascale.org. 2014.", url: "https://glasgowcomascale.org/faq/" },
  gcsAid: { id: "gcs-aid", citation: "Teasdale G, Institute of Neurological Sciences, Glasgow. Glasgow Coma Scale: structured assessment aid. glasgowcomascale.org. 2014.", url: "https://www.glasgowcomascale.org/gcs-aid/" },
  shah: { id: "shah-hypernatremia", citation: "Shah MK, Workeneh B, Taffet GE. Hypernatremia in the geriatric population. Clin Interv Aging. 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4242070/" },
  kleizen: { id: "kleizen-intussusception", citation: "Kleizen KJ, Hunck A, Wijnen MH, Draaisma JM. Neurological symptoms in children with intussusception. Acta Paediatr. 2009." },
  linMartore: { id: "lin-martore-pocus", citation: "Lin-Martore M, Kornblith AE, Kohn MA, Gottlieb M. Diagnostic accuracy of point-of-care ultrasound for intussusception in children presenting to the emergency department: a systematic review and meta-analysis. West J Emerg Med. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7390574/" },
  dawson: { id: "dawson-anticholinergic", citation: "Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium: theory, evidence and practice. Br J Clin Pharmacol. 2016." },
  karliner: { id: "karliner-interpreters", citation: "Karliner LS, Jacobs EA, Chen AH, Mutha S. Do professional interpreters improve clinical care for patients with limited English proficiency? A systematic review of the literature. Health Serv Res. 2007." },
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
          "He was talking and walking at 0100 and cannot be woken at 0730, so he became worse at a time when his blood ethanol should have been falling. Jones found that ethanol is cleared from blood at a steady 10 to 20 mg/100 mL per hour, and at 25 to 35 mg/100 mL per hour in heavy drinkers, so intoxication lightens over hours rather than deepens. His arrest for intoxication, his long history of heavy drinking and his unsteady gait fit alcohol but say nothing about a second cause. Snoring at the 0400 check reflects a depressed level of consciousness from any cause, so it does not separate alcohol from a head injury.",
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
  /* 49 Nonverbal group home resident in a heat wave -------------------------- */
  {
    id: "loc-49",
    topic: "loc",
    alsoTopics: ["shock"],
    title: "Less responsive at the group home",
    stem:
      "A 63-year-old man is brought to the emergency department by ambulance from his group home because he has been less responsive for 2 days. He has lifelong severe intellectual disability and spastic quadriplegic cerebral palsy. He has no speech and is fed by gastrostomy. He takes levetiracetam for epilepsy. A heat wave began 5 days ago, and the home has no air conditioning. The night staff member who called the ambulance started working there last week. The paramedic transfer sheet reads 'baseline unknown'. He lies with his eyes closed. He opens his eyes to pressure, makes no sounds and localizes to pressure. His mucous membranes are dry. Capillary glucose is 7.4 mmol/L.",
    vitals: { temperature: "37.8°C rectal", pulse: "118/minute", resp: "22/minute", bp: "86/52 mmHg", o2sat: "95% on room air", weight: "46 kg" },
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
        update: "A support worker who has known him for 6 years arrives. She says he usually watches people, smiles and makes cooing sounds when spoken to, and reaches for her hand.",
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
        update: "Sodium is 166 mmol/L, potassium 4.0 mmol/L, chloride 128 mmol/L, urea 26 mmol/L and creatinine 162 umol/L. His heart rate remains 118/minute.",
        prompt: "Which of the following is the most appropriate initial fluid for him?",
        options: ["dextrose 5% in water 1 L IV", "free water 500 mL by gastrostomy", "half normal saline 1 L IV", "normal saline 1 L IV bolus", "normal saline 1 L IV over 8 hours"],
        correct: 3,
        explanation:
          "His blood pressure of 86/52 mmHg, heart rate of 118/minute and raised urea show hypovolemic shock, and restoring circulation comes first. Shah and colleagues state that isotonic normal saline is essential in hemodynamically unstable patients whatever the sodium, and that hypotonic fluid is used for rehydration once circulation is restored. One litre is about 22 mL/kg for his 46 kg. Dextrose 5% in water and free water by gastrostomy treat the water deficit but restore circulating volume slowly, and half normal saline expands it less than normal saline. Normal saline over 8 hours is too slow for shock. Once he is perfused, his sodium should fall by no more than 0.5 mmol/L per hour.",
        keyFeature: { topic: "loc", n: 2 },
        source: "shah-hypernatremia",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 2 L of normal saline he is better perfused. Urine osmolality is 820 mOsm/kg and urine sodium is 12 mmol/L.",
        prompt: "Which of the following is the most likely cause of his hypernatremia?",
        options: ["Central diabetes insipidus", "Excess sodium in his feeds", "Hyperosmolar hyperglycemic state", "Nephrogenic diabetes insipidus", "Water loss without replacement"],
        correct: 4,
        explanation:
          "A urine osmolality of 820 mOsm/kg with a urine sodium of 12 mmol/L shows kidneys that are concentrating urine and holding sodium, the response Shah and colleagues describe to water loss when kidney function is intact. He sweated through a heat wave and depends entirely on others for water through his tube, so his losses were not replaced. In central or nephrogenic diabetes insipidus the urine stays dilute despite a high sodium. A glucose of 7.4 mmol/L excludes a hyperosmolar hyperglycemic state. Excess sodium in his feeds would raise his sodium with an expanded volume, not with the shock, dry mucosa and high urea he had.",
        keyFeature: { topic: "loc", n: 1 },
        source: "shah-hypernatremia",
      },
    ],
    sources: [S.edlow, S.gcsFaq, S.shah],
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
        update: "The nurse is about to record his Glasgow Coma Scale score and asks how to rate his speech, since he does not yet say words.",
        prompt: "Which of the following is the most appropriate way to score his verbal response?",
        options: ["Adult verbal scale, scored as V2", "Age-adapted pediatric verbal scale", "AVPU scale in place of the GCS", "Motor score alone as a proxy", "Not testable as he is preverbal"],
        correct: 1,
        explanation:
          "The adult verbal scale rates orientation and words, which a 9-month-old cannot give. The Glasgow Coma Scale guidance states that the adult verbal and motor criteria often cannot be used in infants and young children and points to the pediatric adaptation, which rates cooing, babbling and crying instead. Scoring him V2 on the adult scale would record a reduced response that may be normal for his age. Not testable is meant for a barrier such as an endotracheal tube, not for normal development. AVPU is coarser and misses small changes, and the motor score alone discards the eye and verbal information needed to trend him.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-faq",
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
    sources: [S.kleizen, S.edlow, S.gcsFaq, S.linMartore],
    ...META,
  },
  /* 51 Drowsy after the headache medications --------------------------------- */
  {
    id: "loc-51",
    topic: "loc",
    alsoTopics: ["headache", "cva"],
    title: "Sleeping after his headache treatment",
    stem:
      "A 66-year-old man presents to the emergency department at 1230 with a severe headache that began at 1000 while he was splitting wood, followed by vomiting and vertigo. He has hypertension and stopped taking amlodipine 2 months ago. At triage he was alert and oriented. He had nystagmus on looking to the left and could not walk without help. At 1300 he was given metoclopramide 10 mg IV and diphenhydramine 25 mg IV, and a CT head was booked for later in the afternoon. At 1530 the nurse finds him hard to rouse and says he is sleeping off the diphenhydramine. He opens his eyes to voice and is confused. The vital signs below are from 1530.",
    vitals: { temperature: "36.8°C oral", pulse: "54/minute", resp: "14/minute", bp: "212/116 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Hourly neurological checks", "Noncontrast CT head now", "physostigmine 1 mg IV", "Recheck when the drug wears off", "Wake him and test his gait"],
        correct: 1,
        explanation:
          "A new fall in consciousness after a sudden headache with vomiting, vertigo, nystagmus and inability to walk must be treated as a posterior fossa lesion until imaging shows otherwise. Edlow and colleagues advise brain imaging whenever a structural lesion is a probable or possible cause of a depressed level of consciousness. His heart rate of 54/minute with a blood pressure of 212/116 mmHg fits raised intracranial pressure. Hourly checks and waiting for the drug to wear off attribute his decline to diphenhydramine and lose time. Physostigmine treats anticholinergic delirium, which does not explain his headache, ataxia or slow pulse. Getting a drowsy man up to test his gait is unsafe and adds nothing.",
        keyFeature: { topic: "loc", n: 4 },
        source: "edlow-coma",
      },
      {
        id: "q2",
        kind: "single",
        update: "At 1535 his skin is warm and dry, his speech is slow and slurred, and a bladder scan shows 640 mL of urine.",
        prompt: "Which of the following findings argues most strongly against diphenhydramine as the cause of his drowsiness?",
        options: ["Bradycardia of 54/minute", "Drowsiness soon after the dose", "Slow, slurred speech", "Urinary retention on bladder scan", "Warm, dry skin on his trunk"],
        correct: 0,
        explanation:
          "Diphenhydramine is an antihistamine with strong antimuscarinic effects, and the anticholinergic toxicity that Dawson and Buckley review speeds the heart. A heart rate of 54/minute with a blood pressure of 212/116 mmHg is the opposite, and with a falling level of consciousness it suggests raised intracranial pressure. Warm dry skin, urinary retention and slurred speech can all follow an anticholinergic drug, so they do not argue against it, even though they do not prove it either. Drowsiness soon after a sedating dose is expected and is the very finding that invites the wrong attribution.",
        keyFeature: { topic: "loc", n: 4 },
        source: "dawson-anticholinergic",
      },
      {
        id: "q3",
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
        id: "q4",
        kind: "single",
        update: "Ten minutes later he opens his eyes only to pressure and moans without words. With the central stimulus he brings his hand up past his chin toward it.",
        prompt: "Which of the following is his Glasgow Coma Scale score now, with its components?",
        options: ["GCS 7 (E1 V2 M4)", "GCS 8 (E2 V2 M4)", "GCS 9 (E2 V2 M5)", "GCS 10 (E2 V3 M5)", "GCS 10 (E3 V2 M5)"],
        correct: 2,
        explanation:
          "He opens his eyes to pressure (E2), makes sounds without words (V2) and brings his hand toward a central stimulus, which is localizing (M5), for a GCS of 9. Ten minutes earlier he was using inappropriate words, so his verbal response has fallen, and that change should be reported at once rather than folded into a total. GCS 10 (E2 V3 M5) scores the words he no longer uses. GCS 10 (E3 V2 M5) scores eye opening to voice. GCS 8 (E2 V2 M4) scores normal flexion instead of localizing, and GCS 7 (E1 V2 M4) also scores no eye opening.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-aid",
      },
    ],
    sources: [S.edlow, S.dawson, S.gcsAid],
    ...META,
  },
  /* 52 Confusion with bruising, history through a language barrier ----------- */
  {
    id: "loc-52",
    topic: "loc",
    alsoTopics: ["headache"],
    title: "Confused and bruised, four months in Canada",
    stem:
      "A 41-year-old woman is brought to the emergency department by her husband because she has been confused and sleepy since last night. The family arrived in Canada from Afghanistan 4 months ago. She and her husband speak Dari and little English. Their 11-year-old son, who speaks English well, offers to interpret. Using gestures, the husband shows that she has had headaches and easy bruising for a week and has been sad since leaving family behind. She takes no medications. She opens her eyes to voice, is confused and obeys commands. There are petechiae on her legs and bruises on both arms. Her neck is supple, and there is no focal weakness. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "37.6°C oral", pulse: "108/minute", resp: "18/minute", bp: "148/88 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to obtain a detailed history from her husband?",
        options: ["Ask a bilingual cleaner to help", "Ask her son to interpret", "Machine translation app on a phone", "Professional interpreter by phone", "Simple English with gestures"],
        correct: 3,
        explanation:
          "A professional Dari interpreter, here by phone, gives the most accurate account of how she differs from her usual self and protects both the patient and the child. Karliner and colleagues found that professional interpreters improve communication, including errors and comprehension, as well as use of services, clinical outcomes and satisfaction, compared with ad hoc interpreters such as relatives. An 11-year-old son lacks medical vocabulary, may leave out or soften what he hears and should not carry his mother's illness. A bilingual cleaner is untrained and breaches her privacy. Machine translation and simple English with gestures risk errors in the details that matter most: timing, bleeding, medicines and her usual state.",
        keyFeature: { topic: "loc", n: 3 },
        source: "karliner-interpreters",
      },
      {
        id: "q2",
        kind: "single",
        update: "A walk-in clinic note from 3 days ago reads 'headache, likely stress after immigration'.",
        prompt: "Which of the following findings is most important in deciding that stress cannot explain her presentation?",
        options: ["Bruises and petechiae", "Headaches over the past week", "Low mood since leaving family", "Pulse of 108/minute", "Recent move to a new country"],
        correct: 0,
        explanation:
          "New bruising and petechiae mean a low platelet count or a bleeding disorder, and with confusion they point to a serious systemic cause such as a thrombotic microangiopathy or an intracranial bleed. Edlow and colleagues list psychiatric causes as a rare mechanism of coma, after structural lesions and diffuse neuronal dysfunction, so stress is a conclusion reached only once treatable causes are excluded. Headache, low mood and a recent move are common with stress and do not separate it from organic disease. A pulse of 108/minute can follow anxiety, fever or anemia and is not specific.",
        keyFeature: { topic: "loc", n: 4 },
        source: "edlow-coma",
      },
      {
        id: "q3",
        kind: "single",
        update: "Through an interpreter, her husband says she has never had cancer or a transplant. Hemoglobin is 74 g/L, platelets 12 x 10^9/L, MCV 86 fL, reticulocytes 6%, haptoglobin undetectable, INR 1.1 and creatinine 118 umol/L. The film shows schistocytes. CT head is normal.",
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
    sources: [S.karliner, S.edlow, S.plasmic, S.isthGps],
    ...META,
  },
];
