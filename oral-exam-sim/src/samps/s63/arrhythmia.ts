// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  abbas: { id: "abbas-cpvt-2022", citation: "Abbas M, Miles C, Behr E. Catecholaminergic polymorphic ventricular tachycardia. Arrhythm Electrophysiol Rev. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9820193/" },
  bellamy: { id: "bellamy-cpvt-2019", citation: "Bellamy D, Nuthall G, Dalziel S, Skinner JR. Catecholaminergic polymorphic ventricular tachycardia: the cardiac arrest where epinephrine is contraindicated. Pediatr Crit Care Med. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6400445/" },
  ercAls: { id: "erc-als-2025", citation: "Soar J, Bottiger BW, Carli P, et al. European Resuscitation Council Guidelines 2025: adult advanced life support. Resuscitation. 2025.", url: "https://doi.org/10.1016/j.resuscitation.2025.110769" },
  ercPost: { id: "erc-esicm-post-2025", citation: "Nolan JP, Sandroni C, Cariou A, et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2025: post-resuscitation care. Resuscitation. 2025.", url: "https://doi.org/10.1016/j.resuscitation.2025.110809" },
  csrs: { id: "csrs-2016", citation: "Thiruganasambandamoorthy V, Kwong K, Wells GA, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ. 2016.", url: "https://doi.org/10.1503/cmaj.151469" },
  jafary: { id: "jafary-artefact-2007", citation: "Jafary FH. The incidental episode of ventricular fibrillation: a case report. J Med Case Rep. 2007.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2000884/" },
  escAcs: { id: "esc-acs-2023", citation: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.", url: "https://doi.org/10.1093/eurheartj/ehad191" },
  patel: { id: "patel-sqts-2010", citation: "Patel C, Yan GX, Antzelevitch C. Short QT syndrome: from bench to bedside. Circ Arrhythm Electrophysiol. 2010.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2933105/" },
  merckSqts: { id: "merck-sqts", citation: "Mitchell LB. Short QT interval syndromes. Merck Manual Professional Version. Merck and Co. Reviewed 2026.", url: "https://www.merckmanuals.com/professional/cardiovascular-disorders/arrhythmogenic-cardiac-disorders/short-qt-interval-syndromes" },
  dayal: { id: "dayal-bradycardia-2018", citation: "Dayal NB, Burri H. Acute management of bradycardia in the emergency setting. Cardiovasc Med. 2018.", url: "https://doi.org/10.4414/cvm.2018.00554" },
  armour: { id: "armour-atropine-2022", citation: "Armour R, Learning C, Trojanowski J. Paradoxical worsening of bradycardia following atropine administration. Br Paramed J. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9662156/" },
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
        prompt: "Which of the following conditions best accounts for both her faints and the run on the monitor?",
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

  /* 49 Comatose with mild hypothermia, then P waves without QRS ---------- */
  {
    id: "arrhythmia-49",
    topic: "arrhythmia",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Collapse at a community centre",
    stem:
      "A 66-year-old woman is brought to the emergency department by ambulance after a cardiac arrest at a community centre. She clutched her chest and collapsed. A bystander started CPR within 2 minutes. Paramedics found her pulseless, achieved return of spontaneous circulation after three doses of epinephrine, 19 minutes after collapse, and intubated her. She has hypertension and type 2 diabetes treated with ramipril and metformin. Without sedation she does not open her eyes and has no motor response to pain. Her pupils are 3 mm and reactive. Her ECG shows sinus rhythm at 96/minute with 4 mm ST elevation in V1 to V4. Potassium is 4.4 mmol/L and ionized calcium 1.18 mmol/L. Her temperature is measured with an esophageal probe.",
    vitals: { temperature: "35.6°C core", pulse: "96/minute", resp: "16/minute", bp: "106/62 mmHg", o2sat: "97% on 50% oxygen by ventilator", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Temperature control is to start in the department, because no ICU bed is free for several hours. She needs sedation and analgesia while she is ventilated.",
        prompt: "Which of the following sedation plans is most appropriate during her temperature control?",
        options: ["Inhaled sevoflurane through the ventilator", "Lorazepam 2 mg IV every 2 hours", "Midazolam and fentanyl infusions", "Neuromuscular blockade with propofol", "Propofol and remifentanil infusions"],
        correct: 4,
        explanation:
          "ERC-ESICM 2025 guidance suggests short-acting IV sedatives, with daily sedation holds, for ventilated patients after cardiac arrest, so that neurological examination is less confounded by drug effect. In comatose patients under temperature control, propofol with remifentanil was linked with far less delayed awakening than midazolam with fentanyl, which accumulates, as does repeated lorazepam. Watch her BP, because propofol may raise the need for a vasopressor. Routine neuromuscular blockade is not recommended and is kept for critical hypoxemia with ARDS, and it would also mask seizures. Inhaled sevoflurane caused fewer ventilator-free days and higher mortality than propofol in a trial.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "erc-esicm-post-2025",
      },
      {
        id: "q2",
        kind: "single",
        update: "Twenty minutes after arrival, while the catheterization laboratory is prepared, she loses her pulse again. The monitor shows regular P waves at 104/minute with no QRS complexes. CPR is restarted.",
        prompt: "Which of the following best describes the rhythm on her monitor?",
        options: ["Complete heart block", "Fine ventricular fibrillation", "Idioventricular rhythm", "Sinus node arrest", "Ventricular standstill"],
        correct: 4,
        explanation:
          "Regular P waves with no QRS complexes and no pulse is ventricular standstill, also called P-wave asystole. The atria still depolarize, but no impulse reaches the ventricles and no escape rhythm takes over. Complete heart block would show a separate, slower escape rhythm of QRS complexes. An idioventricular rhythm has wide QRS complexes. Sinus node arrest removes the P waves themselves. Fine ventricular fibrillation shows irregular low-amplitude waves with no organized P waves marching through.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "erc-als-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "Epinephrine 1 mg IV has been given and the rhythm is unchanged at the next pulse check. Your department follows European Resuscitation Council guidance.",
        prompt: "Which of the following is the most appropriate treatment to add to CPR and epinephrine under this guidance?",
        options: ["amiodarone 300 mg IV", "atropine 3 mg IV", "calcium chloride 1 g IV", "Transcutaneous pacing", "Unsynchronized defibrillation"],
        correct: 3,
        explanation:
          "P waves without QRS complexes show that the atria are still active, so the ventricles may respond to an external stimulus. ERC 2025 guidance advises checking every apparent asystole for P waves, because unlike true asystole it is more likely to respond to pacing, alongside continued CPR and epinephrine, and advises against pacing asystole without P waves. AHA guidance does not recommend routine pacing in cardiac arrest, so the ERC exception applies only to asystole with P waves. Defibrillation and amiodarone treat VF or pulseless VT, not a non-shockable rhythm. Atropine is not among the drugs ERC lists for cardiac arrest. Calcium chloride treats hyperkalemia, hypocalcemia or calcium channel blocker toxicity, and her potassium and ionized calcium are normal and she takes no such drug.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "erc-als-2025",
      },
      {
        id: "q4",
        kind: "single",
        update: "After her LAD is stented she is admitted to the ICU. During chest physiotherapy, lead II shows fast irregular deflections, while lead V1 shows narrow QRS complexes at 88/minute and her arterial line reads 116/68 mmHg.",
        prompt: "Which of the following best explains the new tracing in lead II?",
        options: ["Artifact from chest physiotherapy", "Atrial fibrillation with aberrancy", "Polymorphic ventricular tachycardia", "Torsades de pointes", "Ventricular fibrillation"],
        correct: 0,
        explanation:
          "A steady arterial pressure of 116/68 mmHg and narrow QRS complexes at 88/minute in another lead show an organized rhythm with normal output, so the lead II tracing is artifact from the vibration of chest physiotherapy. Movement, tremor, electrical interference and loose leads all produce artifact that can mimic VF or VT, and misreading it leads to needless shocks, drugs and procedures. Ventricular fibrillation and polymorphic VT would abolish the arterial pulse. Torsades de pointes would also drop her pressure. Atrial fibrillation with aberrancy would make the QRS complexes and the arterial trace irregular.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "jafary-artefact-2007",
      },
    ],
    sources: [S.ercPost, S.ercAls, S.jafary],
    ...META,
  },

  /* 50 Supine faint with a short QT ----------------------------------------- */
  {
    id: "arrhythmia-50",
    topic: "arrhythmia",
    title: "Found unresponsive in bed",
    stem:
      "A 41-year-old woman presents to the emergency department after fainting last night. Her husband found her unresponsive in bed with her book on her chest, and she woke within a minute. He saw a few jerks of her arms. She was sweaty and nauseated for a few minutes afterward. Paroxysmal atrial fibrillation was diagnosed when she was 33. She takes no medications. Her brother died in his sleep at age 30. Her examination is normal. Her ECG shows sinus rhythm at 62/minute, a PR interval of 168 ms, an rSr' pattern in V1 with a QRS of 96 ms, T wave inversion in V1 only, and a QT of 300 ms with a QTc of 305 ms. The T waves in V2 to V4 are tall and peaked, with almost no ST segment.",
    vitals: { temperature: "36.7°C oral", pulse: "64/minute", resp: "16/minute", bp: "122/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history adds a point to her Canadian Syncope Risk Score?",
        options: ["Age of 41 years", "Atrial fibrillation at 33", "Brief jerks of her arms", "Nausea after waking", "Sweating after the faint"],
        correct: 1,
        explanation:
          "The Canadian Syncope Risk Score adds 1 point for heart disease, which its authors define to include a documented history of atrial or ventricular arrhythmia, so her atrial fibrillation diagnosed at 33 scores. Age is not a score item. Brief limb jerks are common in syncope from any cause and are not scored. Sweating and nausea afterward are not the vasovagal predisposition item, which counts a trigger such as a warm crowded place, prolonged standing, fear, emotion or pain. Her QTc of 305 ms scores nothing, because only a QTc over 480 ms counts.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "csrs-2016",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of her tracing most raises concern for a dangerous inherited rhythm disorder?",
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
        update: "Potassium is 4.3 mmol/L, ionized calcium 1.22 mmol/L, magnesium 0.86 mmol/L and pH 7.39. She has never taken digoxin or methadone. Cardiology agrees with an inherited short QT syndrome.",
        prompt: "Which of the following is most likely to protect her from sudden cardiac death in the long term?",
        options: ["Beta blocker such as nadolol", "Catheter ablation for AF", "Flecainide for rhythm control", "Implantable defibrillator", "Permanent pacemaker insertion"],
        correct: 3,
        explanation:
          "In short QT syndrome the risk of VF is high and drug therapy has far less evidence than a device, so an implantable defibrillator is the main protection. It is recommended after cardiac arrest or sustained VT and should be considered after a presumed arrhythmic faint like hers. Quinidine, which lengthens the QT, is kept for patients who decline a defibrillator or have recurrent shocks. Beta blockers are central in long QT syndrome but do not correct a short QT. Flecainide and AF ablation treat her AF, not her VF risk, and a pacemaker treats bradycardia.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "merck-sqts",
      },
    ],
    sources: [S.csrs, S.patel, S.merckSqts],
    ...META,
  },

  /* 51 Every second beat dropped, with a wide QRS ---------------------------- */
  {
    id: "arrhythmia-51",
    topic: "arrhythmia",
    title: "Nearly fainted carrying firewood",
    stem:
      "You are working in a rural hospital emergency department in the West Kootenay region of British Columbia. Transvenous pacing is not available on site. A 74-year-old man presents with 2 weeks of fatigue and breathlessness on stairs. This morning he nearly fainted while carrying firewood. He has paroxysmal atrial fibrillation. Three weeks ago his flecainide was increased from 50 mg to 100 mg twice daily. He also takes metoprolol 25 mg twice daily, apixaban 5 mg twice daily, rosuvastatin and tamsulosin. He is alert, with clear lungs and no edema. His ECG shows sinus P waves at 88/minute, and every second P wave is not followed by a QRS. The conducted beats have a PR interval of 160 ms and a QRS of 152 ms with a left bundle branch block pattern.",
    vitals: { temperature: "36.6°C oral", pulse: "44/minute regular", resp: "18/minute", bp: "138/72 mmHg", o2sat: "96% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the rhythm on his ECG?",
        options: ["2:1 second-degree AV block", "Blocked premature atrial beats", "Complete heart block", "Junctional escape rhythm", "Sinus bradycardia"],
        correct: 0,
        explanation:
          "Regular sinus P waves at 88/minute with every second one not conducted, and a constant PR of 160 ms in the beats that conduct, is 2:1 second-degree AV block. With only one conducted beat between blocked P waves there is no chance to see whether the PR lengthens, so a 2:1 block cannot be labelled Mobitz I or Mobitz II from this tracing. Complete heart block would show P waves with no fixed relation to the QRS. Blocked premature atrial beats come early, but these P waves march out regularly. Sinus bradycardia and a junctional rhythm have no unconducted P waves.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "dayal-bradycardia-2018",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following features suggest that a 2:1 AV block lies below the AV node?",
        options: ["Better conduction after atropine", "Block only during sleep", "Long PR in conducted beats", "Narrow QRS complexes", "Normal PR in conducted beats", "Wenckebach cycles on the monitor", "Wide QRS complexes", "Worse block with exertion"],
        select: 3,
        correct: [4, 6, 7],
        explanation:
          "Block in the His-Purkinje system is suggested by a normal PR in the conducted beats, a wide QRS and block that worsens with exertion or a faster sinus rate, and all three fit his story. Block in the AV node is suggested by a long PR in conducted beats, a narrow QRS, Wenckebach cycles elsewhere on the monitor, block only during sleep when vagal tone is high, and better conduction after atropine. The level matters because infranodal block can progress without warning to complete block with a slow, unreliable escape rhythm.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "dayal-bradycardia-2018",
      },
      {
        id: "q3",
        kind: "single",
        update: "Pacing pads are applied while transfer is arranged. Forty minutes later he is grey and confused. The monitor shows 3:1 block with a ventricular rate of 30/minute, and his BP is 74/40 mmHg.",
        prompt: "Which of the following is the most appropriate immediate treatment for him?",
        options: ["atropine 1 mg IV", "glucagon 5 mg IV", "magnesium sulfate 2 g IV", "Normal saline 1 L IV bolus", "Transcutaneous pacing"],
        correct: 4,
        explanation:
          "He is hypotensive and confused from a ventricular rate of 30/minute, the pads are already on, and his block lies below the AV node, so transcutaneous pacing should start now. Atropine works on the AV node. In infranodal block it is unlikely to help, and by speeding the sinus rate it can raise the grade of block and slow the ventricular rate further. Glucagon is for beta blocker overdose, and his low dose of metoprolol does not explain this picture. A fluid bolus does not fix a rate of 30/minute, and magnesium has no role in AV block.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "armour-atropine-2022",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following medications is most likely to have caused his conduction block?",
        options: ["apixaban", "flecainide", "metoprolol", "rosuvastatin", "tamsulosin"],
        correct: 1,
        explanation:
          "Flecainide slows conduction through the His-Purkinje system and widens the QRS, so it causes block below the AV node, the level that his normal PR, wide QRS and exertional symptoms suggest. His dose was doubled 3 weeks ago and his symptoms began a week later. Metoprolol slows the AV node and would more often give a long PR with a narrow QRS, although it should also be reviewed. Apixaban, rosuvastatin and tamsulosin do not impair AV conduction. Stopping flecainide may help, but he still needs transfer for pacing because the block may persist.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "dayal-bradycardia-2018",
      },
    ],
    sources: [S.dayal, S.armour],
    ...META,
  },

  /* 52 Rhythms after prehospital fibrinolysis -------------------------------- */
  {
    id: "arrhythmia-52",
    topic: "arrhythmia",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Chest pain treated in the ambulance",
    stem:
      "You are working in a regional hospital emergency department in central Alberta with no catheterization laboratory. A 59-year-old man is brought in by ambulance with chest pain that began 2 hours ago. Paramedics recorded inferior ST elevation and gave tenecteplase, ASA, clopidogrel and enoxaparin in the field 35 minutes ago. Ten minutes after the tenecteplase he had ventricular fibrillation, and one shock restored his circulation. He is now awake and his pain is easing. He has hyperlipidemia and smokes. His ECG shows sinus rhythm at 78/minute with 2 mm ST elevation in II, III and aVF, down from 5 mm on the paramedic tracing. Potassium is 4.1 mmol/L and magnesium 0.88 mmol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "78/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his ventricular fibrillation ten minutes after the tenecteplase?",
        options: ["Coronary artery spasm", "Failed fibrinolysis", "Low potassium level", "Pericardial bleeding", "Reperfusion of the artery"],
        correct: 4,
        explanation:
          "Ventricular fibrillation soon after fibrinolysis, followed by easing pain and ST elevation falling from 5 mm to 2 mm, is a reperfusion arrhythmia from the sudden reopening of the artery. ESC guidance notes that malignant arrhythmias at the time of reperfusion do not carry the poor prognosis of VT or VF during ongoing ischemia or late after infarction. Failed fibrinolysis would leave his pain and ST elevation unchanged. His potassium is 4.1 mmol/L. Pericardial bleeding causes tamponade with PEA rather than VF, and spasm does not fit his steady improvement.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        update: "Thirty minutes later he goes into atrial fibrillation at 98/minute. He has no chest pain or dyspnea, his lungs are clear and his BP is 128/76 mmHg. His enoxaparin was given 65 minutes ago.",
        prompt: "Which of the following is the most appropriate management of his atrial fibrillation now?",
        options: ["amiodarone 150 mg IV", "digoxin 0.25 mg IV", "metoprolol 5 mg IV", "Monitor on enoxaparin", "Synchronized cardioversion"],
        correct: 3,
        explanation:
          "Atrial fibrillation is the most common supraventricular arrhythmia in ACS, and ESC guidance notes that most episodes are well tolerated and need no specific treatment apart from anticoagulation, which his enoxaparin already provides. His rate of 98/minute, normal BP, clear lungs and absent pain mean no rate control is needed. IV beta blockers are recommended only when rate control is needed without heart failure or hypotension. Amiodarone is for rate control with acute heart failure, and digoxin is preferred with hypotension. Electrical cardioversion is for hemodynamic instability or a rate that cannot be controlled with drugs.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "Forty minutes later his pain has gone and the ST elevation is 1 mm. PR intervals lengthen until a P wave is not conducted, with narrow QRS complexes and a ventricular rate of 56/minute. He is warm and alert, with BP 124/76 mmHg.",
        prompt: "Which of the following is the most appropriate management of this rhythm?",
        options: ["atropine 1 mg IV", "dopamine 5 mcg/kg/minute IV", "isoproterenol 2 mcg/minute IV", "Observation on the monitor", "Transcutaneous pacing now"],
        correct: 3,
        explanation:
          "Lengthening PR intervals ending in a dropped beat, with narrow QRS complexes, is Mobitz I block at the AV node, a common and usually transient effect of vagal tone and nodal ischemia after inferior reperfusion. He is warm, alert and normotensive at 56/minute, and ESC guidance keeps chronotropic drugs and pacing for bradycardia with hemodynamic intolerance or high-grade block without a stable escape. Atropine, dopamine and isoproterenol add the risk of tachycardia and ectopy without benefit here, and pacing is not needed for a stable nodal block.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "Three hours later, before transfer, he has sustained monomorphic VT at 168/minute with a QRS of 150 ms and a superior axis. He is anxious with palpitations, has crackles to the mid lung fields and O2 sat 86%, and his BP is 118/72 mmHg.",
        prompt: "Which of the following findings most clearly shows that his ventricular tachycardia is unstable?",
        options: ["Anxiety and palpitations", "Crackles with O2 sat of 86%", "Heart rate of 168/minute", "QRS duration of 150 ms", "Superior QRS axis"],
        correct: 1,
        explanation:
          "ERC guidance defines an unstable tachycardia by life-threatening features: shock, syncope, myocardial ischemia and heart failure. New crackles with an O2 sat of 86% are pulmonary edema, so his VT is unstable despite a normal BP and needs synchronized cardioversion under sedation rather than a drug trial. A rate of 168/minute makes compromise more likely but does not define it. A QRS of 150 ms and a superior axis help show the rhythm is VT, not how well he tolerates it. Anxiety and palpitations are common with any tachycardia.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "erc-als-2025",
      },
    ],
    sources: [S.escAcs, S.ercAls],
    ...META,
  },
];
