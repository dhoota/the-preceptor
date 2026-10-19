// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  abbas: { id: "abbas-cpvt-2022", citation: "Abbas M, Miles C, Behr E. Catecholaminergic polymorphic ventricular tachycardia. Arrhythm Electrophysiol Rev. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9820193/" },
  bellamy: { id: "bellamy-cpvt-2019", citation: "Bellamy D, Nuthall G, Dalziel S, Skinner JR. Catecholaminergic polymorphic ventricular tachycardia: the cardiac arrest where epinephrine is contraindicated. Pediatr Crit Care Med. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6400445/" },
  erc2021: { id: "erc-esicm-2021", citation: "Nolan JP, Sandroni C, Bottiger BW, et al. European Resuscitation Council and European Society of Intensive Care Medicine guidelines 2021: post-resuscitation care. Intensive Care Med. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7993077/" },
  erc2022: { id: "erc-esicm-temp-2022", citation: "Nolan JP, Sandroni C, Andersen LW, et al. ERC-ESICM guidelines on temperature control after cardiac arrest in adults. Resuscitation. 2022.", url: "https://doi.org/10.1016/j.resuscitation.2022.01.009" },
  escAcs: { id: "esc-acs-2023", citation: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.", url: "https://doi.org/10.1093/eurheartj/ehad191" },
  escSyncope: { id: "esc-syncope-2018", citation: "Brignole M, Moya A, de Lange FJ, and colleagues. 2018 ESC guidelines for the diagnosis and management of syncope. Eur Heart J. 2018.", url: "https://doi.org/10.1093/eurheartj/ehy037" },
  patel: { id: "patel-sqts-2010", citation: "Patel C, Yan GX, Antzelevitch C. Short QT syndrome: from bench to bedside. Circ Arrhythm Electrophysiol. 2010.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2933105/" },
  merckSqts: { id: "merck-sqts", citation: "Mitchell LB. Short QT interval syndromes. Merck Manual Professional Version. Merck and Co. Reviewed 2026.", url: "https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmogenic-cardiac-disorders/short-qt-interval-syndromes" },
} satisfies Record<string, Source>;

/** Expansion batch s63: arrhythmia-48 to arrhythmia-52. 2027 MCQ and menu format only. */
export const ARRHYTHMIA_S63: Samp[] = [
  /* 48 Exertional and emotional faints with a normal resting ECG ------------- */
  {
    id: "arrhythmia-48",
    topic: "arrhythmia",
    title: "Faint during a relay race",
    stem:
      "A 9-year-old girl is brought to the emergency department by her father after she fainted during a relay race at school. She collapsed mid-stride, was pale and limp for about 40 seconds, then woke and knew where she was. Three months ago she fainted when a large dog lunged and barked at her. She has no medical history and takes no medications. Her father's cousin died suddenly at age 17 while playing soccer. She is alert and her examination is normal. Her ECG shows sinus rhythm at 78/minute, a PR interval of 136 ms, a QRS of 78 ms and a QTc of 420 ms, with no delta wave and no ST elevation in V1 or V2. Bedside echocardiography shows a structurally normal heart.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "18/minute", bp: "104/62 mmHg", o2sat: "99% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most likely to reveal the cause of her faints?",
        options: ["CT of the head", "Electroencephalogram", "Exercise stress test", "Tilt table test", "Urine drug screen"],
        correct: 2,
        explanation:
          "Two faints, one at full sprint and one with sudden fright, with a normal resting ECG and a normal heart on echocardiography, point to an adrenergically triggered ventricular arrhythmia. In inherited disorders of this kind the resting ECG is normal, so the rhythm has to be provoked, and exercise testing brings out ventricular ectopy or VT as the heart rate rises. A tilt table test looks for reflex syncope, which an exertional faint does not suggest. EEG and head CT look for epilepsy and brain lesions, but pallor, limpness and a quick, clear recovery fit a cardiac cause. A drug screen does not explain two faints with adrenergic triggers.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "abbas-cpvt-2022",
      },
      {
        id: "q2",
        kind: "single",
        update: "While an IV is started she cries and struggles. The monitor shows ventricular bigeminy, then an 8-second run of wide complexes at 190/minute whose QRS axis alternates from beat to beat.",
        prompt: "Which of the following best describes the run of wide complexes on her monitor?",
        options: ["Bidirectional ventricular tachycardia", "Monomorphic ventricular tachycardia", "Supraventricular tachycardia with aberrancy", "Torsades de pointes with long QT", "Ventricular fibrillation"],
        correct: 0,
        explanation:
          "A wide complex rhythm whose QRS axis flips with every beat is bidirectional ventricular tachycardia. Two ventricular foci fire in turn, and the pattern is seen in digoxin toxicity and in inherited calcium handling disorders. Monomorphic VT keeps one QRS shape throughout. Torsades de pointes twists gradually around the baseline over several beats and needs a long QT, but her QTc is 420 ms. Aberrant supraventricular tachycardia keeps one bundle branch block shape, and ventricular fibrillation has no organized complexes.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "bellamy-cpvt-2019",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of her faints and her rhythm?",
        options: ["Arrhythmogenic cardiomyopathy", "Brugada syndrome", "Catecholaminergic polymorphic VT", "Long QT syndrome type 1", "Wolff-Parkinson-White syndrome"],
        correct: 2,
        explanation:
          "Faints with exertion and with fright, a normal resting ECG, a normal heart on echocardiography and bidirectional VT provoked by crying fit catecholaminergic polymorphic VT. It is most often caused by RYR2 variants and is a leading cause of autopsy-negative sudden death in the young, which may explain her father's cousin. Long QT type 1 also causes exertional events, but her QTc is 420 ms. Brugada syndrome would show coved ST elevation in V1 or V2, and pre-excitation would show a delta wave. Arrhythmogenic cardiomyopathy usually shows T wave inversion or structural change and causes monomorphic VT.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "abbas-cpvt-2022",
      },
      {
        id: "q4",
        kind: "single",
        update: "An hour later she becomes upset during a blood draw and collapses in polymorphic VT without a pulse. CPR is started and one shock restores a pulse, but runs of polymorphic VT keep recurring.",
        prompt: "Which of the following is the most appropriate treatment to suppress her recurring ventricular tachycardia?",
        options: ["calcium chloride IV bolus", "epinephrine IV bolus", "fentanyl and general anesthesia", "isoproterenol IV infusion", "sodium bicarbonate IV bolus"],
        correct: 2,
        explanation:
          "Suspected catecholaminergic polymorphic VT changes resuscitation. Each epinephrine dose adds the adrenergic drive that triggers the arrhythmia, and published pediatric cases describe VF storms that settled only once epinephrine was stopped and IV opioids and general anesthesia were given. Defibrillation is still used for pulseless rhythms. Isoproterenol is used to provoke this arrhythmia during diagnostic testing, so it would make it worse. Calcium and bicarbonate do not suppress adrenergically triggered VT. A nonselective beta blocker such as nadolol, with flecainide if needed, follows once she is stable.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "bellamy-cpvt-2019",
      },
    ],
    sources: [S.abbas, S.bellamy],
    ...META,
  },

  /* 49 Comatose after a PEA arrest, then recurrent VF after stenting --------- */
  {
    id: "arrhythmia-49",
    topic: "arrhythmia",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Collapse at a community centre",
    stem:
      "A 66-year-old woman is brought to the emergency department by ambulance after a cardiac arrest at a community centre. She clutched her chest and collapsed. A bystander started CPR within 2 minutes. Paramedics found pulseless electrical activity and achieved return of spontaneous circulation after three doses of epinephrine, 19 minutes after collapse, and intubated her. She has hypertension and type 2 diabetes. Without sedation she does not open her eyes and has no motor response to pain. Her pupils are 3 mm and reactive. Her ECG shows sinus rhythm with 3 mm ST elevation in II, III and aVF. Her temperature is measured with an esophageal probe.",
    vitals: { temperature: "35.1°C core", pulse: "96/minute", resp: "16/minute", bp: "106/62 mmHg", o2sat: "97% on 50% oxygen by ventilator", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A resident suggests that temperature control is not needed because her initial rhythm was not shockable.",
        prompt: "Which of the following is the most appropriate temperature plan for her now?",
        options: ["Active rewarming to 37°C now", "Antipyretic only if over 38°C", "Cold saline 30 mL/kg IV bolus", "Feedback device, no rewarming", "No control after a PEA arrest"],
        correct: 3,
        explanation:
          "Adults who stay unresponsive after return of circulation need deliberate temperature control whatever the initial rhythm, so a PEA arrest does not exclude her. Her core temperature of 35.1°C is mild hypothermia, and ERC-ESICM guidance advises against actively rewarming comatose patients to normothermia, so a feedback-controlled device should hold her temperature and then prevent fever. Rapid infusion of large volumes of cold IV fluid after return of circulation caused more re-arrests and more pulmonary edema in a randomized trial. Fever is defined as above 37.7°C and should be prevented, not treated only once it passes 38°C.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "erc-esicm-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "After stenting of an occluded right coronary artery, she is on a surface cooling device at 35°C with propofol and fentanyl infusions. She starts to shiver and her temperature climbs to 35.8°C despite maximal device cooling.",
        prompt: "Which of the following is the most appropriate first response to her shivering?",
        options: ["Cold saline 1 L IV bolus", "Increase fentanyl and propofol doses", "Raise the target to 38°C", "Rocuronium infusion without other change", "Turn the cooling device off"],
        correct: 1,
        explanation:
          "Shivering is common during temperature control. It raises oxygen demand and works against the device, and ERC-ESICM guidance manages it first with opioids and sedation, using short acting agents. A neuromuscular blocker is not used routinely and is kept for severe shivering despite deeper sedation and analgesia, because it hides shivering and seizures without treating their cause. Turning the device off or raising the target to 38°C allows the fever that guidance says to prevent. A cold saline bolus adds volume after a large infarct and does not stop shivering.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "erc-esicm-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "An hour later, while awaiting an ICU bed, she has two runs of polymorphic VT that degenerate to VF, each ended by one shock. Inferior ST elevation has returned to 4 mm. Potassium is 4.3 mmol/L and magnesium 0.94 mmol/L.",
        prompt: "Which of the following is the most appropriate next step for her recurrent ventricular arrhythmia?",
        options: ["lidocaine 1 mg/kg IV", "magnesium sulfate 2 g IV", "Overdrive transvenous pacing", "procainamide 15 mg/kg IV", "Repeat coronary angiography"],
        correct: 4,
        explanation:
          "Recurrent polymorphic VT and VF with return of inferior ST elevation after stenting means the artery has probably reoccluded, most often from acute stent thrombosis. ESC guidance recommends prompt revascularization when ischemia may be driving recurrent VT or VF, because no antiarrhythmic treats that cause. Lidocaine is only considered once beta blockers, amiodarone and overdrive pacing have failed. Overdrive pacing is for VT that repeated cardioversion cannot control. Magnesium targets torsades with a long QT, and her magnesium is normal. Procainamide is not among the recommended agents and adds hypotension in a patient just resuscitated.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "The stent is reopened and her rhythm settles. Thirty-six hours after the arrest, temperature control at 36°C is stopped. Six hours later she remains comatose and her core temperature is 38.1°C.",
        prompt: "Which of the following is the most appropriate approach to her temperature now?",
        options: ["Acetaminophen only above 39°C", "Allow fever to aid prognosis", "Cool to 32°C for 24 hours", "Resume device fever control", "Stop core temperature monitoring"],
        correct: 3,
        explanation:
          "ERC-ESICM guidance recommends continuous core temperature monitoring and active prevention of fever, defined as above 37.7°C, for at least 72 hours in patients who remain comatose. At 42 hours after the arrest she is inside that window and febrile, so the device should resume fever control while infection is looked for. Waiting until 39°C allows the fever linked with worse brain outcomes. Fever does not help prognostication, which waits until sedation and other confounders clear. A new period at 32°C is not needed, and stopping monitoring would hide recurrent fever.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "erc-esicm-temp-2022",
      },
    ],
    sources: [S.erc2021, S.erc2022, S.escAcs],
    ...META,
  },

  /* 50 Supine faint with a short QT ----------------------------------------- */
  {
    id: "arrhythmia-50",
    topic: "arrhythmia",
    title: "Found unresponsive in bed",
    stem:
      "A 41-year-old woman presents to the emergency department after fainting last night. Her husband found her unresponsive in bed with her book on her chest, and she woke within a minute. She was sweaty and nauseated for a few minutes afterward. Paroxysmal atrial fibrillation was diagnosed when she was 33. She takes no medications. Her brother died in his sleep at age 30. Her examination is normal. Her ECG shows sinus rhythm at 62/minute, a PR interval of 168 ms, an rSr' pattern in V1 with a QRS of 96 ms, T wave inversion in V1 only, and a QT of 300 ms with a QTc of 305 ms. The T waves in V2 to V4 are tall and peaked, with almost no ST segment.",
    vitals: { temperature: "36.7°C oral", pulse: "64/minute", resp: "16/minute", bp: "122/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her faint most suggests an arrhythmic cause?",
        options: ["Age of 41 years", "Faint while lying in bed", "Nausea after waking", "Recovery within a minute", "Sweating after the faint"],
        correct: 1,
        explanation:
          "Syncope while supine is a major high-risk feature in the ESC syncope guideline, because reflex syncope depends on upright posture and rarely begins lying down. Quick recovery within a minute is typical of any transient loss of consciousness and does not separate the causes. Sweating and nausea after waking are common after reflex syncope and, if anything, point away from an arrhythmia. An age of 41 is not a high-risk feature on its own, although her brother's death in his sleep at 30 adds to the concern.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "esc-syncope-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings on her ECG is the most important warning sign?",
        options: ["PR interval of 168 ms", "QTc of 305 ms", "rSr' pattern in V1", "Sinus rate of 62/minute", "T wave inversion in V1"],
        correct: 1,
        explanation:
          "A QTc of 305 ms is abnormally short. With tall peaked T waves, almost no ST segment, AF at a young age, a supine faint and a brother who died in his sleep at 30, it points to short QT syndrome, which causes AF, VF and sudden death in structurally normal hearts. An rSr' pattern in V1 with a QRS of 96 ms is a common normal variant, and T wave inversion confined to V1 is normal in adults. A PR interval of 168 ms and a rate of 62/minute are normal.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "patel-sqts-2010",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following can shorten the QT interval and should be excluded before an inherited cause is diagnosed?",
        options: ["Digoxin use", "Hypercalcemia", "Hypocalcemia", "Hypokalemia", "Hypomagnesemia", "Hypothermia", "Hypothyroidism", "Methadone use"],
        select: 2,
        correct: [0, 1],
        explanation:
          "Short QT syndrome is diagnosed only after acquired causes of a short QT are excluded. Hypercalcemia shortens the ST segment and so the QT, and digoxin speeds repolarization and gives scooped ST segments with a short QT. Hyperkalemia, acidosis and hyperthermia also shorten it. Hypocalcemia, hypokalemia, hypomagnesemia, hypothermia and hypothyroidism all lengthen the QT, as does methadone, so none of them explains her ECG.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "patel-sqts-2010",
      },
      {
        id: "q4",
        kind: "single",
        update: "Potassium is 4.3 mmol/L, ionized calcium 1.22 mmol/L, magnesium 0.86 mmol/L and pH 7.39. She has never taken digoxin. Cardiology agrees with an inherited short QT syndrome.",
        prompt: "Which of the following is most likely to protect her from sudden cardiac death in the long term?",
        options: ["Beta blocker such as nadolol", "Catheter ablation for AF", "Flecainide for rhythm control", "Implantable defibrillator", "Permanent pacemaker insertion"],
        correct: 3,
        explanation:
          "In short QT syndrome the risk of VF is high and drug therapy has far less evidence than a device, so an implantable defibrillator is the main protection. It is recommended after cardiac arrest or sustained VT and should be considered after a presumed arrhythmic faint like hers. Quinidine, which lengthens the QT, is kept for patients who decline a defibrillator or have recurrent shocks. Beta blockers are central in long QT syndrome but do not correct a short QT. Flecainide and AF ablation treat her AF, not her VF risk, and a pacemaker treats bradycardia.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "merck-sqts",
      },
    ],
    sources: [S.escSyncope, S.patel, S.merckSqts],
    ...META,
  },
];
