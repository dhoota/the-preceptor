// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  abbas: { id: "abbas-cpvt-2022", citation: "Abbas M, Miles C, Behr E. Catecholaminergic polymorphic ventricular tachycardia. Arrhythm Electrophysiol Rev. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9820193/" },
  bellamy: { id: "bellamy-cpvt-2019", citation: "Bellamy D, Nuthall G, Dalziel S, Skinner JR. Catecholaminergic polymorphic ventricular tachycardia: the cardiac arrest where epinephrine is contraindicated. Pediatr Crit Care Med. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6400445/" },
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
];
