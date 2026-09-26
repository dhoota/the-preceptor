// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

/** Every combination of the given word groups, joined by spaces. */
const c = (...parts: string[][]): string[] =>
  parts.reduce<string[]>((acc, p) => acc.flatMap((a) => p.map((x) => (a ? `${a} ${x}` : x))), [""]);

const AUTHOR = "Preceptor";

const ECG_MATCH = ["ecg", "ekg", "12 lead", "electrocardiogram"];
const AV_NODAL_BLOCKERS = ["adenosine", "diltiazem", "verapamil", "metoprolol", "esmolol", "beta blocker", "digoxin", "calcium channel blocker"];

const CAEP_AF: Source = {
  id: "caep-af",
  citation: "Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/",
};
const CCS_AF: Source = {
  id: "ccs-af",
  citation:
    "Andrade JG, et al. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation. Can J Cardiol. 2020.",
};
const AHA_ALS: Source = {
  id: "aha-als",
  citation:
    "American Heart Association. Part 9. Adult advanced life support. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376",
};
const AHA_PCA: Source = {
  id: "aha-pca",
  citation:
    "American Heart Association. Part 11. Post-cardiac arrest care. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001375",
};
const AHA_SC: Source = {
  id: "aha-sc",
  citation:
    "American Heart Association. Part 10. Adult and pediatric special circumstances of resuscitation. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001380",
};
const ERC_ALS: Source = {
  id: "erc-als",
  citation: "European Resuscitation Council Guidelines 2025. Adult advanced life support. Resuscitation. 2025.",
  url: "https://www.resuscitationjournal.com/article/S0300-9572(25)00281-3/fulltext",
};
const CSRS: Source = {
  id: "csrs",
  citation:
    "Thiruganasambandamoorthy V, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ. 2016.",
};
const SYNCOPE: Source = {
  id: "syncope",
  citation: "Shen WK, et al. 2017 ACC/AHA/HRS Guideline for the Evaluation and Management of Patients With Syncope. Circulation. 2017.",
};
const SVT: Source = {
  id: "svt",
  citation: "Page RL, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. Circulation. 2016.",
};
const REVERT: Source = {
  id: "revert",
  citation:
    "Appelboam A, et al. Postural modification to the standard Valsalva manoeuvre for emergency treatment of supraventricular tachycardias (REVERT). Lancet. 2015.",
};
const VA: Source = {
  id: "va",
  citation:
    "Al-Khatib SM, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. Circulation. 2018.",
};
const INHERITED: Source = {
  id: "inherited",
  citation:
    "Priori SG, et al. HRS/EHRA/APHRS expert consensus statement on the diagnosis and management of patients with inherited primary arrhythmia syndromes. Heart Rhythm. 2013.",
};
const TOX: Source = {
  id: "tox",
  citation:
    "Lavonas EJ, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.",
};
const BICARB: Source = {
  id: "bicarb",
  citation: "Bruccoleri RE, Burns MM. A literature review of the use of sodium bicarbonate for the treatment of QRS widening. J Med Toxicol. 2016.",
};
const KDIGO_K: Source = {
  id: "kdigo-k",
  citation:
    "Clase CM, et al. Potassium homeostasis and management of dyskalemia in kidney diseases. Conclusions from a KDIGO Controversies Conference. Kidney Int. 2020.",
};
const WMS: Source = {
  id: "wms",
  citation:
    "Dow J, et al. Wilderness Medical Society clinical practice guidelines for the out-of-hospital evaluation and treatment of accidental hypothermia. 2019 update. Wilderness Environ Med. 2019.",
};
const CCS_STEMI: Source = {
  id: "ccs-stemi",
  citation:
    "Wong GC, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
};

const base = { topic: "arrhythmia", reviewed: true, author: AUTHOR, version: 1 } as const;

export const ARRHYTHMIA: Samp[] = [
  {
    ...base,
    id: "arrhythmia-01",
    title: "Faint during a church service",
    stem:
      "A 76-year-old woman fainted while seated during a church service. There was no warning and she was unconscious for about 30 seconds. She recovered fully and has a bruise on her forehead. She has hypertension treated with amlodipine. Her glucose is 6.1 mmol/L. Her examination is otherwise normal. ECG: sinus rhythm at 72, PR 240 ms, QRS 142 ms with an rSR' pattern in V1 and a broad S wave in I and V6, and marked left axis deviation.",
    vitals: { pulse: "72/minute", resp: "16/minute", bp: "142/80 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features raise concern for an arrhythmic cause of her syncope?",
        required: 3,
        accept: [
          {
            id: "prodrome",
            text: "No prodrome",
            match: ["no prodrome", "without prodrome", "no warning", "without warning", "sudden", "abrupt"],
          },
          { id: "seated", text: "Syncope while seated", match: ["seated", "sitting", "not standing"] },
          { id: "injury", text: "Injury from the fall", match: ["injury", "bruise", "bruising", "facial", "trauma"] },
          {
            id: "ecg",
            text: "Conduction disease on the ECG, with RBBB, left anterior fascicular block, first degree AV block and QRS over 130 ms",
            match: ["bifascicular", "trifascicular", "rbbb", "right bundle", "lafb", "fascicular", "first degree", "prolonged pr", "conduction", "qrs", "bundle branch", "abnormal ecg"],
          },
          { id: "age", text: "Older age", match: ["age", "older", "elderly", "76"] },
        ],
        explanation:
          "Syncope without prodrome, while seated and with injury suggests an abrupt fall in cardiac output. Conduction disease with QRS over 130 ms adds points on the Canadian Syncope Risk Score. These features make an arrhythmia the leading concern.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "csrs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the conduction abnormality on her ECG?",
        options: [
          "Complete heart block with a junctional escape rhythm",
          "Left bundle branch block with first degree AV block",
          "Mobitz II second degree AV block",
          "RBBB, left anterior fascicular and first degree AV block",
          "Wolff-Parkinson-White pattern",
        ],
        correct: 3,
        explanation:
          "An rSR' in V1 with a broad S in I and V6 is RBBB, and marked left axis deviation adds left anterior fascicular block. A PR of 240 ms is first degree AV block. Together this is bifascicular block with first degree AV block. In a patient with syncope this pattern suggests intermittent high grade AV block.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "syncope",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit to a monitored bed for cardiac evaluation",
          "Discharge after 2 hours of normal monitoring",
          "Discharge and family physician referral for a loop recorder",
          "Discharge with an outpatient Holter monitor in 4 weeks",
          "Outpatient tilt table testing",
        ],
        correct: 0,
        explanation:
          "Unexplained syncope with bifascicular block is high risk for intermittent complete heart block. She needs continuous monitoring and cardiology assessment for pacing. A short period of normal rhythm in the ED does not exclude an intermittent arrhythmia.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "syncope",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "On the monitor she develops regular P waves at 80 and regular wide QRS complexes at 32 that bear no relation to the P waves. She is pale and confused. BP 74/40 mmHg.",
        prompt: "What are the immediate treatments, including the dose for any drug?",
        required: 2,
        accept: [
          {
            id: "pace",
            text: "Transcutaneous pacing",
            match: ["pacing", "pace", "pacer", "pacemaker", "transcutaneous"],
          },
          {
            id: "atropine",
            text: "Atropine 1 mg IV (0.5 mg in ERC guidance), repeated every 3 to 5 minutes to a maximum of 3 mg",
            match: ["atropine 1 mg", "atropine 1mg", "atropine 0.5 mg", "atropine 0.5mg", "atropine 500 mcg", "atropine 0.6 mg"],
          },
          {
            id: "epi",
            text: "Epinephrine infusion 2 to 10 mcg/min",
            match: ["epinephrine infusion", "adrenaline infusion", "epinephrine drip", "epi drip", "epi infusion"],
          },
          { id: "dopa", text: "Dopamine infusion 5 to 20 mcg/kg/min", match: ["dopamine"] },
          { id: "iso", text: "Isoproterenol infusion", match: ["isoproterenol", "isoprenaline"] },
        ],
        unacceptable: [
          { text: "An antiarrhythmic that suppresses the escape rhythm", match: ["amiodarone", "lidocaine", "procainamide"], dangerous: true },
        ],
        explanation:
          "This is complete heart block with a wide escape rhythm and signs of shock, so pacing or a chronotropic infusion is the priority. AHA uses atropine 1 mg and ERC 0.5 mg, but ERC advises against atropine in high grade block with a wide QRS because it is ineffective and may worsen the block. Antiarrhythmics can abolish the escape rhythm and cause asystole.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "erc-als",
      },
    ],
    sources: [CSRS, SYNCOPE, ERC_ALS],
  },
  {
    ...base,
    id: "arrhythmia-02",
    title: "Racing heart after a wedding",
    stem:
      "A 22-year-old man presents with 2 hours of rapid palpitations after a night of drinking at a wedding. He is alert with no chest pain. His pulse is about 220 and irregular. ECG: irregularly irregular wide complex tachycardia with rates up to 280 in places and QRS morphology that varies from beat to beat. A walk-in clinic ECG from last year showed a short PR interval and a slurred QRS upstroke.",
    vitals: { bp: "104/62 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely rhythm?",
        required: 1,
        accept: [
          {
            id: "wpwaf",
            text: "Atrial fibrillation with pre-excitation through an accessory pathway (WPW)",
            match: ["wpw", "wolff parkinson white", "pre excited", "preexcited", "pre excitation", "preexcitation", "accessory pathway"],
          },
        ],
        unacceptable: [
          { text: "Ventricular tachycardia", match: ["ventricular tachycardia"] },
          { text: "AF with aberrancy", match: ["aberrancy", "aberrant", "aberration"] },
        ],
        explanation:
          "A very fast, irregular, wide complex rhythm with changing QRS shapes is pre-excited AF until proven otherwise. The prior short PR and slurred upstroke confirm an accessory pathway. Rates near 300 can degenerate into VF.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "caep-af",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What drugs or drug classes are contraindicated in this rhythm?",
        required: 2,
        accept: [
          { id: "adenosine", text: "Adenosine", match: ["adenosine", "avoid adenosine", "no adenosine"] },
          { id: "ccb", text: "Non-dihydropyridine calcium channel blockers such as diltiazem or verapamil", match: ["diltiazem", "verapamil", "calcium channel", "avoid diltiazem", "avoid verapamil", "no diltiazem", "avoid calcium channel"] },
          { id: "bb", text: "Beta blockers such as metoprolol", match: ["metoprolol", "beta blocker", "esmolol", "propranolol", "avoid beta blocker", "no beta blocker", "avoid metoprolol"] },
          { id: "digoxin", text: "Digoxin", match: ["digoxin", "avoid digoxin", "no digoxin"] },
          { id: "amio", text: "IV amiodarone", match: ["amiodarone", "avoid amiodarone", "no amiodarone"] },
        ],
        unacceptable: [{ text: "Procainamide", match: ["procainamide"] }],
        explanation:
          "Blocking the AV node leaves the accessory pathway as the only route, which can speed the ventricular rate and cause VF. The CAEP checklist lists adenosine, calcium channel blockers, beta blockers, digoxin and amiodarone as contraindicated. US guidelines class IV amiodarone as potentially harmful in pre-excited AF because it has been linked to VF.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "caep-af",
      },
      {
        id: "q3",
        kind: "short",
        update: "He remains stable.",
        prompt: "What is your preferred treatment, including the dose and route for a drug?",
        required: 1,
        accept: [
          {
            id: "proc",
            text: "Procainamide 15 mg/kg IV over 60 minutes, maximum 1500 mg",
            match: c(["procainamide"], ["mg/kg", "15mg/kg", "17mg/kg", "mg/min", "1500", "1.5 g", "1 g", "1g"]),
          },
          {
            id: "dccv",
            text: "Synchronized electrical cardioversion with procedural sedation",
            match: ["cardioversion", "cardiovert", "synchronized", "synchronised"],
          },
        ],
        unacceptable: [{ text: "An AV nodal blocking drug", match: [...AV_NODAL_BLOCKERS, "amiodarone"], dangerous: true }],
        explanation:
          "In stable pre-excited AF, procainamide slows conduction in the accessory pathway, or electrical cardioversion can be used. If he becomes unstable, synchronized cardioversion is immediate. AV nodal blockers can precipitate VF.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "caep-af",
      },
      {
        id: "q4",
        kind: "short",
        update: "He returns to sinus rhythm.",
        prompt: "What ECG features of pre-excitation would you look for on his sinus rhythm tracing?",
        required: 2,
        accept: [
          { id: "pr", text: "Short PR interval under 120 ms", match: ["short pr", "pr under", "pr less", "pr interval", "pr 120"] },
          { id: "delta", text: "Delta wave, a slurred QRS upstroke", match: ["delta", "slurred"] },
          { id: "qrs", text: "Wide QRS over 110 to 120 ms", match: ["wide qrs", "broad qrs", "qrs"] },
          { id: "st", text: "Secondary ST and T wave changes", match: ["st t", "secondary st", "repolarization", "t wave"] },
        ],
        explanation:
          "The accessory pathway lets the impulse bypass the AV node, which shortens the PR interval and creates a slurred delta wave. The QRS widens and repolarization changes follow. Recognizing this pattern in a patient with palpitations or syncope prompts urgent electrophysiology referral.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "svt",
      },
    ],
    sources: [CAEP_AF, SVT],
  },
  {
    ...base,
    id: "arrhythmia-03",
    title: "Weak after a missed treatment",
    stem:
      "A 63-year-old man on hemodialysis Monday, Wednesday and Friday missed his Friday session. On Sunday evening he presents with generalized weakness. His glucose is 7.2 mmol/L. He is alert and has no chest pain.",
    vitals: { pulse: "42/minute", resp: "18/minute", bp: "96/58 mmHg", o2sat: "96% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the single most important immediate investigation?",
        required: 1,
        accept: [{ id: "ecg", text: "12 lead ECG", match: ECG_MATCH }],
        explanation:
          "Generalized weakness with bradycardia in a dialysis patient is hyperkalemia or a bradyarrhythmia until shown otherwise. A 12 lead ECG is available within minutes and can justify treatment before the potassium result returns. It also identifies the rhythm.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "kdigo-k",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What ECG findings would indicate hyperkalemia?",
        required: 3,
        accept: [
          { id: "t", text: "Peaked, narrow based T waves", match: ["peaked", "tall t", "tented", "peaked t"] },
          {
            id: "p",
            text: "Flattened or absent P waves or a prolonged PR interval",
            match: ["p wave", "flat p", "absent p", "prolonged pr", "long pr", "pr prolongation"],
          },
          { id: "qrs", text: "Widened QRS", match: ["wide qrs", "widened qrs", "broad qrs", "qrs"] },
          { id: "sine", text: "Sine wave pattern", match: ["sine"] },
          {
            id: "brady",
            text: "Bradycardia, junctional rhythm or AV block",
            match: ["bradycardia", "junctional", "av block", "heart block", "slow"],
          },
          { id: "arrest", text: "VF or asystole", match: ["ventricular fibrillation", "vf", "asystole"] },
        ],
        explanation:
          "Hyperkalemia progresses from peaked T waves to P wave loss, QRS widening, a sine wave and then arrest. The ECG does not correlate tightly with the level, so any of these changes demands urgent treatment. Bradycardia with a wide QRS in a dialysis patient is an emergency.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "kdigo-k",
      },
      {
        id: "q3",
        kind: "short",
        update: "The ECG shows no P waves, a QRS of 168 ms and peaked T waves. The potassium result is pending.",
        prompt: "What is the first medication you give, including the drug, dose and route?",
        required: 1,
        accept: [
          {
            id: "ca",
            text: "Calcium gluconate 10%, 30 mL (3 g) IV over 5 to 10 minutes, or calcium chloride 10%, 10 mL (1 g) IV",
            match: [
              ...c(["calcium gluconate"], ["3 g", "3g", "30 ml", "3 gram", "3000 mg", "2 g", "2g", "20 ml", "1.5 g", "1 g", "1g", "10 ml", "1 gram", "1000 mg"]),
              ...c(["calcium chloride", "cacl", "cacl2"], ["1 g", "1g", "10 ml", "1 gram", "1000 mg"]),
            ],
          },
        ],
        unacceptable: [
          { text: "Potassium binders as the first drug", match: ["kayexalate", "polystyrene", "patiromer", "zirconium", "lokelma"] },
          { text: "Atropine alone as the first drug", match: ["atropine"] },
        ],
        explanation:
          "A wide QRS and bradycardia mean the membrane is unstable, so IV calcium comes first to protect against arrest within minutes. Calcium gluconate 10% is usually given as 10 to 30 mL, and repeated if the ECG does not improve. Calcium does not lower potassium, so shifting treatment and dialysis must follow.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "aha-sc",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What treatments shift potassium into cells, including the doses?",
        required: 2,
        accept: [
          {
            id: "insulin",
            text: "Regular insulin 10 units IV with dextrose 25 g (50 mL of D50W)",
            match: ["insulin 10 unit", "insulin 5 unit", "10 unit insulin", "5 unit insulin", "insulin 10 u", "insulin 10u", "insulin 5 u", "insulin 5u", "10 u insulin", "10u insulin"],
          },
          {
            id: "salb",
            text: "Salbutamol 10 to 20 mg nebulized",
            match: [...c(["salbutamol", "ventolin", "albuterol"], ["10 mg", "10mg", "20 mg", "20mg", "10 to 20 mg"])],
          },
          {
            id: "bicarb",
            text: "Sodium bicarbonate if there is significant metabolic acidosis",
            match: ["bicarbonate", "bicarb"],
          },
        ],
        unacceptable: [
          { text: "Treatments that remove rather than shift potassium", match: ["kayexalate", "polystyrene", "furosemide", "dialysis", "lokelma", "patiromer"] },
        ],
        explanation:
          "Insulin with dextrose and high dose salbutamol lower potassium within 15 to 30 minutes by driving it into cells. Some centres use 5 units of insulin in dialysis patients to reduce hypoglycemia, and glucose must be checked hourly. Urgent hemodialysis is the definitive treatment and should be arranged at the same time.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "kdigo-k",
      },
    ],
    sources: [KDIGO_K, AHA_SC],
  },
  {
    ...base,
    id: "arrhythmia-04",
    alsoTopics: ["tox"],
    title: "Empty pill bottle found by a roommate",
    stem:
      "A 24-year-old woman is brought in 90 minutes after telling her roommate she had taken all her pills. An empty bottle of amitriptyline 50 mg, 60 tablets dispensed last week, was found. GCS 10. Pupils are 6 mm and her skin is dry and flushed. ECG: regular wide complex tachycardia at 138, QRS 154 ms.",
    vitals: { temperature: "37.8°C", pulse: "138/minute", resp: "14/minute", bp: "84/48 mmHg", o2sat: "95% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What ECG findings, other than a wide QRS, indicate cardiac sodium channel blockade?",
        required: 2,
        accept: [
          { id: "avr", text: "Terminal R wave in aVR over 3 mm", match: ["avr", "terminal r"] },
          { id: "axis", text: "Rightward deviation of the terminal 40 ms of the QRS", match: ["right axis", "rightward", "axis"] },
          { id: "s", text: "Deep terminal S wave in I and aVL", match: ["s wave", "terminal s"] },
          { id: "brugada", text: "Brugada pattern in V1 and V2", match: ["brugada"] },
        ],
        explanation:
          "Tricyclics block fast sodium channels, which slows conduction in the right bundle and produces a terminal rightward axis with a tall R in aVR. An R in aVR over 3 mm and a QRS over 100 ms predict seizures and dysrhythmias. A Brugada pattern can also appear.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "bicarb",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the first specific treatment for her wide complex rhythm, including the drug, dose and route?",
        required: 1,
        accept: [
          {
            id: "bicarb",
            text: "Sodium bicarbonate 1 to 2 mEq/kg IV bolus, about 60 to 120 mEq, repeated to effect",
            match: c(
              ["bicarbonate", "bicarb", "nahco3"],
              ["1 to 2 meq/kg", "1 2 meq/kg", "1 meq/kg", "2 meq/kg", "1 mmol/kg", "2 mmol/kg", "50 meq", "60 meq", "100 meq", "120 meq", "50 mmol", "60 mmol", "100 mmol", "120 mmol", "2 amp", "3 amp", "100 ml", "150 ml"],
            ),
          },
        ],
        unacceptable: [
          { text: "Class IA, IC or III antiarrhythmics", match: ["procainamide", "flecainide", "amiodarone"], dangerous: true },
          { text: "Physostigmine or flumazenil", match: ["physostigmine", "flumazenil"], dangerous: true },
        ],
        explanation:
          "Hypertonic sodium bicarbonate overcomes sodium channel blockade and alkalinizes the serum, narrowing the QRS. Give 1 to 2 mEq/kg boluses and repeat until the QRS narrows and BP improves. Procainamide, flecainide and amiodarone worsen conduction and can be fatal.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "tox",
      },
      {
        id: "q3",
        kind: "short",
        update: "After two boluses her QRS is 118 ms and BP 96/60 mmHg. She then has a generalized tonic clonic seizure.",
        prompt: "What is the most appropriate drug to treat the seizure?",
        required: 1,
        accept: [
          {
            id: "benzo",
            text: "A benzodiazepine such as lorazepam 2 to 4 mg IV or midazolam",
            match: ["lorazepam", "midazolam", "diazepam", "benzodiazepine"],
          },
        ],
        unacceptable: [{ text: "Phenytoin or fosphenytoin", match: ["phenytoin", "fosphenytoin"], dangerous: true }],
        explanation:
          "Benzodiazepines are first line for toxin induced seizures. Seizures cause acidosis, which worsens sodium channel blockade, so give more bicarbonate as well. Phenytoin is a sodium channel blocker and can worsen cardiotoxicity.",
        keyFeature: { topic: "tox", n: 5 },
        source: "tox",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What targets or limits would you use to guide ongoing bicarbonate therapy?",
        required: 2,
        accept: [
          { id: "ph", text: "Serum pH about 7.45 to 7.55", match: ["ph", "7.55", "7.45"] },
          { id: "qrs", text: "QRS narrowing toward under 100 to 110 ms", match: ["qrs"] },
          { id: "bp", text: "Resolution of hypotension", match: ["blood pressure", "hypotension", "bp", "map"] },
          { id: "dys", text: "Resolution of dysrhythmia", match: ["arrhythmia", "dysrhythmia", "rhythm"] },
          { id: "na", text: "Serum sodium below about 150 to 155 mmol/L", match: ["sodium", "hypernatremia", "na"] },
          { id: "k", text: "Monitor and replace potassium", match: ["potassium", "hypokalemia"] },
        ],
        explanation:
          "Titrate bicarbonate to a narrower QRS and better blood pressure while keeping serum pH no higher than about 7.55. Watch for hypernatremia, hypokalemia and fluid overload. If she is intubated, avoid hypoventilation, which lets the pH fall.",
        keyFeature: { topic: "tox", n: 4 },
        source: "bicarb",
      },
    ],
    sources: [BICARB, TOX],
  },
  {
    ...base,
    id: "arrhythmia-05",
    title: "Repeated collapse at home",
    stem:
      "A 67-year-old woman is brought in after two brief collapses at home. She has had 5 days of diarrhea. She takes methadone 90 mg daily for opioid use disorder and hydrochlorothiazide, and a walk-in clinic started ciprofloxacin 3 days ago. ECG: sinus bradycardia, QTc 620 ms with prominent U waves. On the monitor she has runs of polymorphic wide complex tachycardia with QRS complexes twisting around the baseline, each lasting 5 to 10 seconds and ending on their own.",
    vitals: { pulse: "56/minute", bp: "112/64 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What factors are contributing to her rhythm disturbance?",
        required: 3,
        accept: [
          { id: "methadone", text: "Methadone", match: ["methadone", "opioid"] },
          { id: "cipro", text: "Ciprofloxacin, a fluoroquinolone", match: ["ciprofloxacin", "cipro", "fluoroquinolone", "antibiotic"] },
          { id: "k", text: "Hypokalemia from diarrhea and a thiazide", match: ["hypokalemia", "potassium", "low k"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "magnesium", "low mg"] },
          { id: "hctz", text: "Hydrochlorothiazide", match: ["hydrochlorothiazide", "hctz", "thiazide", "diuretic"] },
          { id: "brady", text: "Bradycardia", match: ["bradycardia", "slow heart"] },
          { id: "sex", text: "Female sex and older age", match: ["female", "woman", "sex", "age"] },
        ],
        explanation:
          "Acquired long QT usually results from several factors stacking together. Here two QT prolonging drugs, diarrhea and a thiazide causing low potassium and magnesium, and bradycardia combine. Removing each factor is part of treatment.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "va",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What drug do you give first, including the dose and route?",
        required: 1,
        accept: [
          {
            id: "mg",
            text: "Magnesium sulfate 2 g IV over a few minutes",
            match: c(["magnesium", "mgso4"], ["2 g", "2g", "2 gram", "2000 mg", "8 mmol"]),
          },
        ],
        unacceptable: [
          { text: "A QT prolonging antiarrhythmic", match: ["amiodarone", "procainamide", "sotalol"], dangerous: true },
        ],
        explanation:
          "IV magnesium 2 g suppresses early afterdepolarizations and is first line for torsades de pointes, even with a normal magnesium level. Replace potassium to the high normal range as well. Amiodarone, procainamide and sotalol prolong the QT and can worsen torsades.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "aha-als",
      },
      {
        id: "q3",
        kind: "short",
        update: "Despite magnesium and potassium replacement, runs recur every few minutes and are preceded by pauses.",
        prompt: "What further treatments would suppress recurrence?",
        required: 2,
        accept: [
          { id: "pace", text: "Overdrive pacing at about 90 to 110 bpm", match: ["pacing", "overdrive", "pace", "pacer"] },
          { id: "iso", text: "Isoproterenol infusion to raise the heart rate", match: ["isoproterenol", "isoprenaline", "isuprel"] },
          { id: "mg", text: "Repeat magnesium bolus or start an infusion", match: ["repeat magnesium", "magnesium infusion", "more magnesium", "magnesium"] },
          {
            id: "stop",
            text: "Stop methadone and ciprofloxacin and all other QT prolonging drugs",
            match: ["stop methadone", "hold methadone", "discontinue methadone", "stop ciprofloxacin", "stop cipro", "discontinue ciprofloxacin", "stop qt", "discontinue qt", "stop offending", "stop culprit"],
          },
        ],
        unacceptable: [{ text: "A QT prolonging antiarrhythmic", match: ["amiodarone", "procainamide", "sotalol"], dangerous: true }],
        explanation:
          "Pause dependent torsades is suppressed by raising the heart rate, which shortens the QT. Overdrive pacing or isoproterenol achieve this. Unsynchronized defibrillation is needed if she becomes pulseless or a run is sustained.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "va",
      },
    ],
    sources: [VA, AHA_ALS],
  },
  {
    ...base,
    id: "arrhythmia-06",
    alsoTopics: ["environmental"],
    title: "Found in a snowbank",
    stem:
      "A 64-year-old man is found in a snowbank outside a bar in Sudbury in January. EMS report he was shivering at first but has stopped. GCS 8. His core temperature is measured by esophageal probe. His SpO2 reading is unreliable. His glucose is 5.4 mmol/L. ECG: slow atrial fibrillation at 38 with J (Osborn) waves in the inferior and lateral leads and a long QT interval.",
    vitals: { temperature: "27.2°C core", pulse: "38/minute", resp: "8/minute", bp: "82/50 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his heart rhythm?",
        options: [
          "Atropine 1 mg IV, repeated every 3 to 5 minutes",
          "Diltiazem 0.25 mg/kg IV over 2 minutes",
          "Synchronized cardioversion under procedural sedation",
          "Transcutaneous pacing at 70/minute",
          "No specific rhythm treatment, with active rewarming",
        ],
        correct: 4,
        explanation:
          "Bradycardia, slow AF and J waves are expected physiology at this temperature and resolve with rewarming. Atropine is ineffective and pacing or drugs can provoke VF in the cold, irritable myocardium. Treat the temperature, not the rhythm.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "wms",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What precautions apply when handling and monitoring this patient?",
        required: 2,
        accept: [
          {
            id: "gentle",
            text: "Handle gently and keep him horizontal to avoid triggering VF",
            match: ["gentle", "gently", "horizontal", "minimal movement", "careful", "avoid rough", "no rough", "avoid movement", "avoid jostling"],
          },
          {
            id: "probe",
            text: "Continuous core temperature monitoring with an esophageal probe",
            match: ["esophageal", "oesophageal", "core temperature", "probe"],
          },
          { id: "pads", text: "Continuous cardiac monitoring with defibrillator pads on", match: ["pad", "defibrillator", "cardiac monitor"] },
          { id: "wet", text: "Remove wet clothing and insulate him", match: ["wet clothing", "remove wet", "wet clothes", "insulate"] },
        ],
        explanation:
          "Rough handling can precipitate VF in severe hypothermia, so move him gently and horizontally. A low reading esophageal probe gives a reliable core temperature to guide rewarming and resuscitation decisions. Pads should be on in case he arrests.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "wms",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What active rewarming methods are appropriate for him?",
        required: 2,
        accept: [
          { id: "air", text: "Forced air warming blanket", match: ["forced air", "bair hugger", "warming blanket", "external rewarming"] },
          { id: "fluid", text: "Warmed IV fluids at 38 to 42°C", match: ["warm iv", "warmed fluid", "warm fluid", "warmed saline", "warmed iv"] },
          { id: "lavage", text: "Body cavity lavage, such as thoracic or peritoneal", match: ["lavage", "pleural", "thoracic", "peritoneal", "bladder"] },
          { id: "ecls", text: "Extracorporeal rewarming with ECMO or bypass", match: ["ecmo", "ecls", "bypass", "extracorporeal"] },
          { id: "dialysis", text: "Hemodialysis or continuous renal replacement for rewarming", match: ["dialysis", "hemodialysis", "haemodialysis", "crrt"] },
          { id: "humid", text: "Warmed humidified oxygen", match: ["humidified"] },
        ],
        explanation:
          "Forced air and warm IV fluids are the core of active external rewarming. Below 28°C with a systolic BP under 90 mmHg he is unstable, so add invasive methods and contact the nearest ECLS centre early. ECMO is the method of choice if he arrests.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "wms",
      },
      {
        id: "q4",
        kind: "short",
        update: "During the move to the ED stretcher he develops ventricular fibrillation.",
        prompt: "What are the management priorities?",
        required: 2,
        accept: [
          { id: "cpr", text: "Start high quality CPR", match: ["cpr", "compression"] },
          {
            id: "acls",
            text: "Epinephrine per the standard ACLS algorithm alongside rewarming, which AHA considers reasonable",
            match: ["epinephrine 1 mg", "epinephrine 1mg", "adrenaline 1 mg", "standard acls", "per acls"],
          },
          { id: "defib", text: "Defibrillate", match: ["defibrillation", "defibrillate", "shock"] },
          {
            id: "ecls",
            text: "Arrange extracorporeal rewarming with ECMO, transferring with mechanical CPR if needed",
            match: ["ecmo", "ecls", "extracorporeal", "bypass"],
          },
          {
            id: "continue",
            text: "Continue resuscitation until he is rewarmed",
            match: ["until warm", "prolonged", "rewarm", "continue resuscitation", "not dead until", "don t stop", "dont stop", "do not stop", "not stop", "not terminate"],
          },
          {
            id: "limit",
            text: "Consider limiting shocks to three and withholding epinephrine until core temperature exceeds 30°C",
            match: ["withhold epinephrine", "hold epinephrine", "no epinephrine", "three shock", "3 shock", "limit shock"],
          },
        ],
        unacceptable: [
          { text: "Terminate resuscitation because of the low temperature", match: ["terminate", "pronounce", "declare dead", "time of death"], dangerous: true },
        ],
        explanation:
          "Hypothermic arrest has good neurologic outcomes when resuscitation is continued until rewarming, ideally with ECMO. Below 30°C the ERC limits shocks to three and withholds epinephrine, and the WMS is similarly cautious, while AHA considers standard shocks and epinephrine reasonable. He should not be declared dead until he is warm or the injuries are clearly unsurvivable.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "aha-sc",
      },
    ],
    sources: [WMS, AHA_SC],
  },
  {
    ...base,
    id: "arrhythmia-07",
    title: "Palpitations while shovelling",
    stem:
      "A 52-year-old man presents with palpitations that began suddenly 4 hours ago while shovelling snow. He has no chest pain, dyspnea or syncope. He has no medical history and takes no medications. He drank 6 beers last night. ECG: atrial fibrillation with rapid ventricular response and no ischemic changes. He has never had AF before.",
    vitals: { pulse: "148/minute irregular", bp: "136/84 mmHg", o2sat: "98% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What precipitating factors would you consider for his AF?",
        required: 2,
        accept: [
          { id: "alcohol", text: "Alcohol excess", match: ["alcohol", "beer", "drinking", "holiday heart"] },
          { id: "exertion", text: "Sudden exertion", match: ["exertion", "exercise", "shovelling", "shoveling", "sympathetic"] },
          { id: "thyroid", text: "Hyperthyroidism", match: ["thyroid", "hyperthyroidism", "thyrotoxicosis", "tsh"] },
          { id: "lytes", text: "Electrolyte disturbance", match: ["electrolyte", "potassium", "magnesium"] },
          { id: "ischemia", text: "Myocardial ischemia", match: ["ischemia", "acs", "coronary", "myocardial infarction"] },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embolism", "pe"] },
          { id: "osa", text: "Sleep apnea", match: ["sleep apnea", "sleep apnoea", "osa"] },
          { id: "stim", text: "Stimulants such as caffeine, energy drinks or cocaine", match: ["caffeine", "stimulant", "cocaine", "energy drink"] },
          { id: "infection", text: "Infection", match: ["infection", "sepsis"] },
        ],
        explanation:
          "Always look for a trigger before treating AF as primary. Alcohol binges and exertion are common triggers in otherwise healthy adults. Secondary causes such as thyrotoxicosis, PE and ischemia change management.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "caep-af",
      },
      {
        id: "q2",
        kind: "single",
        update: "He is stable and wants to feel normal quickly.",
        prompt: "Which of the following is the most appropriate approach to his atrial fibrillation?",
        options: [
          "Admission for IV amiodarone loading",
          "Anticoagulate for 3 weeks, then elective cardioversion",
          "Cardioversion in the ED without prior anticoagulation",
          "Rate control with diltiazem and discharge on anticoagulation",
          "Transesophageal echocardiogram before any cardioversion",
        ],
        correct: 2,
        explanation:
          "The CAEP checklist supports ED cardioversion without prior anticoagulation when onset is under 12 hours, or 12 to 48 hours with fewer than two CHADS-65 criteria, in patients with no prior stroke or TIA and no valvular disease. Rhythm control may be electrical or pharmacologic. Most return to sinus rhythm and go home within hours. Longer onset or higher stroke risk needs 3 weeks of anticoagulation first or TEE.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "caep-af",
      },
      {
        id: "q3",
        kind: "menu",
        update: "You choose electrical cardioversion.",
        prompt: "Which of the following are appropriate elements of his electrical cardioversion?",
        options: [
          "Adenosine 6 mg IV before the shock",
          "Anteroposterior pad placement",
          "Atropine 0.5 mg IV pretreatment",
          "Delay until 3 weeks of anticoagulation",
          "Heparin 5 000 units IV before cardioversion",
          "Procedural sedation with airway equipment ready",
          "Synchronized biphasic shock at 200 J",
          "Unsynchronized shock at 360 J",
        ],
        select: 3,
        correct: [5, 6, 1],
        explanation:
          "The CAEP checklist recommends procedural sedation, for example propofol with or without fentanyl, and synchronized shocks starting at 150 to 200 J rather than low energy. It accepts anterolateral or anteroposterior pads and suggests switching position if the first shocks fail. Unsynchronized shocks can induce VF, and anticoagulation first is not needed for onset under 12 hours.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "caep-af",
      },
      {
        id: "q4",
        kind: "short",
        update: "He converts to sinus rhythm with one shock and recovers from sedation.",
        prompt: "What are the elements of his discharge plan?",
        required: 2,
        accept: [
          {
            id: "nooac",
            text: "No long term anticoagulation, since he is under 65 with no CHADS-65 risk factors",
            match: ["no anticoagulation", "no anticoagulant", "not anticoagulation", "not anticoagulant", "no oac", "no doac", "not oac", "chads 65", "chads65", "cha2ds2", "chad 65"],
          },
          { id: "alcohol", text: "Reduce alcohol intake", match: ["avoid alcohol", "no alcohol", "stop drinking", "stop alcohol", "alcohol", "drinking", "beer"] },
          {
            id: "fu",
            text: "Follow-up with his family physician or an AF clinic",
            match: ["follow up", "followup", "family physician", "family doctor", "af clinic", "cardiology"],
          },
          { id: "tests", text: "Outpatient echocardiogram and TSH", match: ["echocardiogram", "echo", "tsh", "thyroid"] },
          { id: "return", text: "Return if palpitations recur or he has chest pain or stroke symptoms", match: ["return", "recur", "recurrence"] },
        ],
        unacceptable: [
          {
            text: "Long term oral anticoagulation",
            match: ["long term anticoagulation", "lifelong anticoagulation", "indefinite anticoagulation", "long term oac", "lifelong oac"],
          },
        ],
        explanation:
          "The CCS CHADS-65 algorithm recommends long term anticoagulation for age 65 or older or any CHADS2 risk factor, and he has neither. CAEP notes that 4 weeks of anticoagulation after cardioversion might be considered by shared decision, but it is not required. Addressing alcohol reduces recurrence, and an echocardiogram and TSH complete the workup.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "ccs-af",
      },
    ],
    sources: [CAEP_AF, CCS_AF],
  },
  {
    ...base,
    id: "arrhythmia-08",
    alsoTopics: ["infectious-diseases"],
    title: "Fever, cough and a fast pulse",
    stem:
      "An 83-year-old woman is brought in from home with 2 days of cough, fever and confusion. ECG: atrial fibrillation with rapid ventricular response. She has no prior AF. Chest X-ray shows right lower lobe consolidation. Lactate 3.6 mmol/L.",
    vitals: { temperature: "39.1°C", pulse: "152/minute irregular", resp: "30/minute", bp: "96/58 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial approach to her heart rate?",
        options: [
          "Digoxin 0.5 mg IV loading dose",
          "Diltiazem 0.25 mg/kg IV bolus",
          "Metoprolol 5 mg IV repeated to a HR below 100",
          "Synchronized cardioversion now",
          "Treat the sepsis first, then reassess the rate",
        ],
        correct: 4,
        explanation:
          "This is secondary AF driven by sepsis, fever and hypoxia. The fast rate partly supports her cardiac output, and treating the cause usually slows it. Rate control drugs can precipitate hypotension and cardioversion rarely holds while the trigger persists. Treating the sepsis means oxygen, IV fluids, early antibiotics and antipyretics, then reassessing the rate.",
        keyFeature: { topic: "infectious-diseases", n: 2 },
        source: "caep-af",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What other irregular narrow complex rhythms would you distinguish from AF on her ECG?",
        required: 2,
        accept: [
          { id: "mat", text: "Multifocal atrial tachycardia", match: ["multifocal", "mat"] },
          { id: "flutter", text: "Atrial flutter with variable block", match: ["flutter"] },
          { id: "pac", text: "Sinus tachycardia with frequent premature atrial complexes", match: ["premature atrial", "pac", "ectopic", "ectopy", "atrial premature"] },
          { id: "wap", text: "Wandering atrial pacemaker", match: ["wandering"] },
          { id: "sa", text: "Sinus arrhythmia", match: ["sinus arrhythmia"] },
        ],
        explanation:
          "Irregular narrow complex rhythms include AF, flutter with variable block, MAT and frequent PACs. MAT shows three or more P wave shapes and is common in acute lung disease. It is treated by correcting the cause, not with cardioversion.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "ccs-af",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "After 2 L of fluid, antibiotics and acetaminophen her HR is 128 and BP 104/62 mmHg. She remains in AF.",
        prompt: "Why is electrical cardioversion not the preferred strategy for her now?",
        required: 2,
        accept: [
          {
            id: "recur",
            text: "AF is likely to recur while the sepsis persists",
            match: ["recur", "recurrence", "sepsis", "infection", "precipitant", "underlying", "persist"],
          },
          {
            id: "comp",
            text: "The tachycardia is partly compensatory",
            match: ["compensatory", "physiologic", "cardiac output"],
          },
          {
            id: "stroke",
            text: "Onset time is unknown and she is not anticoagulated, so stroke risk is higher",
            match: ["stroke", "embolism", "embolic", "clot", "thromboembolism", "anticoagulation", "anticoagulated", "unknown", "duration"],
          },
          { id: "sedation", text: "Procedural sedation risk in an older septic patient", match: ["sedation"] },
        ],
        explanation:
          "Cardioversion of secondary AF usually fails or AF recurs while the trigger is active. Her onset is uncertain, so cardioversion without anticoagulation carries stroke risk. Treat the pneumonia, and consider cautious rate control only if the rate stays high once she is resuscitated.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "caep-af",
      },
    ],
    sources: [CAEP_AF, CCS_AF],
  },
  {
    ...base,
    id: "arrhythmia-09",
    title: "Sudden rapid palpitations",
    stem:
      "A 29-year-old woman presents with 40 minutes of rapid palpitations that started suddenly while she was at work. She has had similar brief episodes that stopped on their own. She is alert with no chest pain. ECG: regular narrow complex tachycardia at 196 with no visible P waves. She takes no medications.",
    vitals: { pulse: "196/minute regular", bp: "118/76 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What are the causes of a regular narrow complex tachycardia?",
        required: 3,
        accept: [
          {
            id: "avnrt",
            text: "AV nodal reentrant tachycardia (AVNRT)",
            match: ["avnrt", "av nodal reentrant", "av nodal re entrant", "atrioventricular nodal", "av nodal reentry"],
          },
          {
            id: "avrt",
            text: "AV reentrant tachycardia using an accessory pathway (AVRT)",
            match: ["avrt", "orthodromic", "atrioventricular reentrant", "accessory pathway", "av reentrant", "wpw"],
          },
          { id: "flutter", text: "Atrial flutter with 2:1 block", match: ["flutter"] },
          { id: "at", text: "Atrial tachycardia", match: ["atrial tachycardia", "ectopic atrial"] },
          { id: "sinus", text: "Sinus tachycardia", match: ["sinus tachycardia"] },
          { id: "junctional", text: "Junctional tachycardia", match: ["junctional"] },
        ],
        explanation:
          "A regular narrow complex tachycardia is sinus tachycardia, atrial tachycardia, flutter with fixed block, AVNRT or AVRT. Abrupt onset and a rate near 200 favour a reentrant rhythm. A rate near 150 should always raise the possibility of flutter with 2:1 block.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "svt",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are your first interventions, in order, including the dose and route for any drug?",
        required: 2,
        accept: [
          {
            id: "valsalva",
            text: "Modified Valsalva manoeuvre, straining semi-recumbent then lying flat with legs raised",
            match: ["modified valsalva", "valsalva", "revert", "vagal"],
          },
          {
            id: "aden6",
            text: "Adenosine 6 mg rapid IV push with a saline flush",
            match: ["adenosine 6 mg", "adenosine 6mg", "6 mg adenosine"],
          },
          { id: "aden12", text: "Adenosine 12 mg rapid IV push if 6 mg fails", match: ["adenosine 12 mg", "adenosine 12mg"] },
        ],
        unacceptable: [
          { text: "Eyeball pressure", match: ["eyeball", "ocular pressure", "globe pressure"] },
          { text: "Synchronized cardioversion as the first step in a stable patient", match: ["cardioversion"] },
        ],
        explanation:
          "The modified Valsalva manoeuvre from the REVERT trial converts about 4 in 10 patients, much more than the standard technique. If it fails, adenosine 6 mg by rapid push with a flush, then 12 mg, is next. Cardioversion is reserved for unstable patients or failure of these steps.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "revert",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following situations call for reducing the initial adenosine dose to 3 mg?",
        options: [
          "Age over 65 years with no heart disease",
          "Drinks several cups of coffee daily",
          "Drug given through a central venous line",
          "Heart transplant recipient",
          "History of mild intermittent asthma",
          "Pregnancy at 30 weeks of gestation",
          "Taking metoprolol for hypertension",
          "Taking theophylline for COPD",
        ],
        select: 2,
        correct: [3, 2],
        explanation:
          "Denervated transplanted hearts are very sensitive to adenosine, and central line delivery gives a more concentrated bolus. Dipyridamole and carbamazepine also increase its effect. Theophylline and caffeine blunt it, and adenosine is safe in pregnancy.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "svt",
      },
    ],
    sources: [SVT, REVERT],
  },
  {
    ...base,
    id: "arrhythmia-10",
    title: "Palpitations after an old heart attack",
    stem:
      "A 67-year-old man with a prior anterior MI and an ejection fraction of 30% presents with 1 hour of palpitations and light-headedness. He is alert and oriented. ECG: regular wide complex tachycardia, QRS 170 ms, extreme (northwest) axis, with occasional fusion beats in lead II.",
    vitals: { pulse: "172/minute regular", bp: "116/74 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features support ventricular tachycardia over SVT with aberrancy?",
        required: 3,
        accept: [
          {
            id: "shd",
            text: "Prior MI and structural heart disease",
            match: ["prior mi", "previous mi", "myocardial infarction", "structural", "ejection fraction", "cardiomyopathy", "heart disease", "scar"],
          },
          { id: "fusion", text: "Fusion beats", match: ["fusion"] },
          { id: "capture", text: "Capture beats", match: ["capture"] },
          { id: "avd", text: "AV dissociation", match: ["av dissociation", "dissociation"] },
          { id: "axis", text: "Extreme northwest axis", match: ["axis", "northwest"] },
          { id: "qrs", text: "Very wide QRS over 160 ms", match: ["qrs", "very wide"] },
          { id: "age", text: "Age over 35", match: ["age", "older"] },
        ],
        explanation:
          "In an older patient with prior MI, a regular wide complex tachycardia is VT in over 80 percent of cases. Fusion beats, capture beats and AV dissociation are nearly diagnostic. Treat as VT when in doubt, because treating VT as SVT can be fatal.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "va",
      },
      {
        id: "q2",
        kind: "short",
        update: "He remains stable.",
        prompt: "What are the appropriate treatment options, including the dose for any drug?",
        required: 2,
        accept: [
          {
            id: "amio",
            text: "Amiodarone 150 mg IV over 10 minutes",
            match: c(["amiodarone"], ["150 mg", "150mg"]),
          },
          {
            id: "proc",
            text: "Procainamide 20 to 50 mg/min IV to a maximum of 17 mg/kg, with caution given his low ejection fraction",
            match: c(["procainamide"], ["mg/kg", "17mg/kg", "15mg/kg", "mg/min", "20mg/min", "50mg/min", "1 g", "1g", "1500"]),
          },
          {
            id: "dccv",
            text: "Synchronized cardioversion under procedural sedation",
            match: ["synchronized", "synchronised", "cardioversion", "cardiovert"],
          },
        ],
        unacceptable: [{ text: "Calcium channel blockers", match: ["verapamil", "diltiazem"], dangerous: true }],
        explanation:
          "Stable monomorphic VT can be treated with procainamide, amiodarone or elective synchronized cardioversion. Procainamide was more effective than amiodarone in the PROCAMIO trial, but AHA advises avoiding it in heart failure and it can cause hypotension with poor LV function. Verapamil and diltiazem can cause collapse in VT.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "aha-als",
      },
      {
        id: "q3",
        kind: "single",
        update: "While you prepare, he becomes confused and grey. BP 72/40 mmHg. He is in the same rhythm and has a pulse.",
        prompt: "Which of the following is the most appropriate immediate treatment for him?",
        options: [
          "Amiodarone 300 mg IV push",
          "Lidocaine 100 mg IV",
          "Norepinephrine infusion and reassess",
          "Synchronized cardioversion",
          "Unsynchronized defibrillation at 360 J",
        ],
        correct: 3,
        explanation:
          "VT with a pulse and signs of shock needs immediate synchronized cardioversion, with brief sedation only if it does not cause delay. Unsynchronized shocks are for pulseless VT or VF. Drugs are too slow for an unstable patient.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "aha-als",
      },
      {
        id: "q4",
        kind: "short",
        update: "He converts to sinus rhythm.",
        prompt: "What precipitating causes would you look for?",
        required: 3,
        accept: [
          { id: "ischemia", text: "Acute ischemia", match: ["ischemia", "acs", "infarct", "troponin", "coronary"] },
          { id: "k", text: "Hypokalemia", match: ["hypokalemia", "potassium"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "magnesium"] },
          { id: "hf", text: "Decompensated heart failure", match: ["heart failure", "chf", "decompensated", "decompensation"] },
          { id: "drugs", text: "Drug toxicity or QT prolonging drugs, such as digoxin", match: ["drug", "digoxin", "toxicity", "medication"] },
          { id: "thyroid", text: "Hyperthyroidism", match: ["thyroid", "hyperthyroidism", "thyrotoxicosis"] },
          { id: "stim", text: "Stimulant use", match: ["stimulant", "cocaine", "amphetamine"] },
        ],
        explanation:
          "Scar related VT is common after MI, but always look for triggers you can fix. Ischemia, electrolyte problems, worsening heart failure and drugs are the main ones. He will need cardiology assessment for an ICD.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "va",
      },
    ],
    sources: [VA, AHA_ALS],
  },
  {
    ...base,
    id: "arrhythmia-11",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Rhythm change after thrombolysis",
    stem:
      "A 58-year-old man presents to a rural Northern Ontario hospital 90 minutes after the onset of crushing chest pain. The nearest PCI centre is 3 hours away. His ECG shows inferior ST elevation. He receives tenecteplase, ASA, clopidogrel and enoxaparin per protocol.",
    vitals: { weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update:
          "Seventy minutes after tenecteplase his pain has resolved. The monitor shows a regular wide complex rhythm at 78 with no preceding P waves. It lasts 40 seconds, then sinus rhythm returns. BP 124/76 mmHg.",
        prompt: "What is this rhythm?",
        required: 1,
        accept: [
          { id: "aivr", text: "Accelerated idioventricular rhythm", match: ["aivr", "accelerated idioventricular", "idioventricular"] },
        ],
        unacceptable: [{ text: "Ventricular tachycardia", match: ["ventricular tachycardia", "slow vt"] }],
        explanation:
          "A wide regular ventricular rhythm at 50 to 110 bpm after reperfusion is accelerated idioventricular rhythm. It is a marker of successful reperfusion. It is not VT and does not need suppression.",
        keyFeature: { topic: "arrhythmia", n: 3 },
        source: "ccs-stemi",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is your management of this rhythm?",
        required: 1,
        accept: [
          {
            id: "observe",
            text: "Observe on the monitor with no antiarrhythmic treatment",
            match: ["observe", "observation", "no treatment", "not treat", "don t treat", "dont treat", "do not treat", "monitor", "supportive", "no antiarrhythmic", "not antiarrhythmic", "reassure", "watch"],
          },
        ],
        unacceptable: [
          { text: "Antiarrhythmics or electrical therapy", match: ["lidocaine", "amiodarone", "procainamide", "cardioversion", "defibrillation"], dangerous: true },
        ],
        explanation:
          "AIVR is benign and self limited. Suppressing it with lidocaine or amiodarone can leave no escape rhythm and cause asystole. Supportive care is enough.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "aha-als",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What findings suggest successful reperfusion?",
        required: 2,
        accept: [
          {
            id: "st",
            text: "ST segment resolution of 50% or more at 60 to 90 minutes",
            match: ["st resolution", "st segment", "50%", "st elevation resolve", "st improve"],
          },
          { id: "pain", text: "Resolution of chest pain", match: ["pain"] },
          { id: "aivr", text: "Reperfusion arrhythmia such as AIVR", match: ["aivr", "idioventricular", "reperfusion arrhythmia"] },
          { id: "trop", text: "Early troponin peak", match: ["troponin", "biomarker", "cardiac marker"] },
        ],
        explanation:
          "At least 50 percent ST resolution at 60 to 90 minutes, pain relief and reperfusion rhythms suggest the artery is open. Failure to meet these criteria calls for urgent rescue PCI. Even with success, he should be transferred for angiography within 2 to 24 hours.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "Thirty minutes later he becomes light-headed. Sinus bradycardia at 38, BP 78/46 mmHg. His lungs are clear and his ST segments remain improved.",
        prompt: "What is your first treatment, including the dose and route?",
        required: 1,
        accept: [
          {
            id: "atropine",
            text: "Atropine 0.5 to 1 mg IV",
            match: c(["atropine"], ["0.5 mg", "0.5mg", "0.6 mg", "1 mg", "1mg"]),
          },
          { id: "fluid", text: "IV crystalloid bolus", match: ["bolus", "fluid"] },
        ],
        unacceptable: [{ text: "Nitroglycerin or a beta blocker", match: ["nitroglycerin", "nitro", "metoprolol", "beta blocker"], dangerous: true }],
        explanation:
          "Reperfusion of an inferior infarct can trigger a vagal reflex with bradycardia and hypotension. It usually responds to atropine and fluids. Nitrates and beta blockers are harmful here, especially if the right ventricle is involved.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "ccs-stemi",
      },
    ],
    sources: [CCS_STEMI, AHA_ALS],
  },
  {
    ...base,
    id: "arrhythmia-12",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Collapse at a curling rink",
    stem:
      "A 55-year-old man collapsed at a curling rink in Winnipeg. A bystander started CPR and an AED delivered two shocks. Paramedics achieved return of spontaneous circulation 18 minutes after collapse. On arrival he is intubated and in sinus rhythm. GCS 3 with no sedation. Pupils are 3 mm and reactive. Glucose 11.2 mmol/L.",
    vitals: { temperature: "36.1°C", pulse: "102/minute", bp: "88/52 mmHg", o2sat: "99% on FiO2 1.0" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about temperature control for him is most appropriate?",
        options: [
          "Contraindicated if emergency PCI may be needed",
          "Indicated because he does not follow commands after ROSC",
          "Indicated only for in-hospital arrest",
          "Indicated only if his core temperature rises above 38.5°C",
          "Not indicated after a shockable rhythm with fast ROSC",
        ],
        correct: 1,
        explanation:
          "Any adult who does not follow commands after ROSC should receive deliberate temperature control, whatever the initial rhythm or location. It can run alongside emergency coronary angiography. Fever after arrest is linked to worse neurologic outcome.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "aha-pca",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the target temperature range, and what is one other key element of temperature control?",
        required: 2,
        accept: [
          {
            id: "duration",
            text: "Maintain temperature control for at least 36 hours",
            match: ["36 hour", "36 h", "36h", "72 hour"],
          },
          {
            id: "range",
            text: "A constant target between 32 and 37.5°C",
            match: ["32 to 37.5", "32 37.5", "between 32", "36", "33", "37.5"],
          },
          { id: "fever", text: "Actively prevent fever after the initial period", match: ["avoid fever", "no fever", "avoid hyperthermia", "fever", "hyperthermia"] },
          {
            id: "device",
            text: "A cooling device with temperature feedback",
            match: ["device", "feedback", "surface cooling", "intravascular", "cooling pad"],
          },
          { id: "shiver", text: "Treat shivering with sedation and analgesia", match: ["shiver", "shivering"] },
          { id: "probe", text: "Continuous core temperature monitoring", match: ["core temperature", "esophageal", "bladder probe", "probe"] },
          { id: "rewarm", text: "Slow controlled rewarming", match: ["rewarm", "rewarming"] },
        ],
        unacceptable: [{ text: "Rapid infusion of cold IV fluid", match: ["cold saline", "cold fluid", "iced saline", "cold iv"] }],
        explanation:
          "AHA 2025 calls for a deliberate target between 32 and 37.5°C, maintained for at least 36 hours in patients who do not follow commands, with fever prevented afterward. A device with temperature feedback holds the target best. Rapid cold IV fluid boluses are not recommended, particularly prehospital.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "aha-pca",
      },
      {
        id: "q3",
        kind: "short",
        update: "The 12 lead ECG shows 3 mm ST elevation in V1 to V4.",
        prompt: "What is the most appropriate next step for his coronary disease?",
        required: 1,
        accept: [
          {
            id: "pci",
            text: "Emergency coronary angiography with primary PCI",
            match: ["pci", "cath", "angiography", "angiogram", "catheterization", "angioplasty"],
          },
        ],
        unacceptable: [{ text: "Thrombolysis when primary PCI is available", match: ["thrombolysis", "tenecteplase", "tnk", "fibrinolysis", "lytic"] }],
        explanation:
          "STEMI after cardiac arrest should go for emergency angiography and PCI, and comatose patients are not excluded. In a city with PCI available, primary PCI is preferred. Prolonged CPR also increases the bleeding risk of thrombolysis.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "aha-pca",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What are the physiologic targets for his post-ROSC care, including the values?",
        required: 3,
        accept: [
          {
            id: "bp",
            text: "MAP at least 65 mmHg and SBP at least 90 mmHg",
            match: [...c(["map", "mean arterial pressure"], ["65"]), ...c(["systolic", "sbp"], ["90"])],
          },
          {
            id: "sat",
            text: "SpO2 90 to 98%, weaning FiO2 to avoid hyperoxia",
            match: [...c(["spo2", "saturation", "sat", "o2 sat"], ["90", "92", "94", "98"]), "avoid hyperoxia"],
          },
          {
            id: "co2",
            text: "PaCO2 35 to 45 mmHg",
            match: [...c(["paco2", "pco2", "co2"], ["35", "40", "45"]), "normocapnia"],
          },
          { id: "glucose", text: "Avoid hypoglycemia and severe hyperglycemia", match: ["glucose", "avoid hypoglycemia", "avoid hyperglycemia", "hyperglycemia", "hypoglycemia"] },
          { id: "temp", text: "Temperature 32 to 37.5°C without fever", match: ["temperature", "normothermia"] },
        ],
        explanation:
          "Hypotension, hypoxemia, hyperoxia and abnormal CO2 all worsen brain injury after arrest. AHA 2025 advises MAP at least 65 mmHg, SpO2 90 to 98% once stable and normal PaCO2, and ERC 2025 uses SpO2 94 to 98%. Monitor for seizures and treat them if they occur.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "aha-pca",
      },
      {
        id: "q5",
        kind: "short",
        update: "After PCI of an occluded LAD he has frequent PVCs and runs of 4 to 6 beats of monomorphic VT. His BP is stable.",
        prompt: "How would you manage these rhythms?",
        required: 2,
        accept: [
          {
            id: "observe",
            text: "Observe on the monitor without prophylactic antiarrhythmics",
            match: ["observe", "monitor", "supportive", "no antiarrhythmic", "not antiarrhythmic", "no prophylactic", "not give antiarrhythmic", "watch"],
          },
          {
            id: "lytes",
            text: "Keep potassium at least 4 mmol/L and magnesium at least 1 mmol/L",
            match: ["potassium", "magnesium", "electrolyte"],
          },
          { id: "o2", text: "Ensure adequate oxygenation and perfusion", match: ["oxygenation", "hypoxia", "perfusion"] },
          {
            id: "sustained",
            text: "Treat only sustained or unstable VT with cardioversion or amiodarone",
            match: ["sustained", "unstable"],
          },
        ],
        unacceptable: [{ text: "Prophylactic antiarrhythmic infusion", match: ["prophylactic lidocaine", "prophylactic amiodarone"] }],
        explanation:
          "PVCs and brief nonsustained VT are common after reperfusion and usually settle. Correct potassium and magnesium and support oxygenation. Antiarrhythmics are reserved for sustained or unstable rhythms.",
        keyFeature: { topic: "arrhythmia", n: 7 },
        source: "aha-als",
      },
    ],
    sources: [AHA_PCA, AHA_ALS],
  },
  {
    ...base,
    id: "arrhythmia-13",
    title: "Collapse in the pool",
    stem:
      "A 19-year-old woman collapsed while swimming laps at a community pool. Lifeguards pulled her out right away, found her pulseless and not breathing, and started CPR. The AED advised a shock and she had ROSC after one shock, 4 minutes after collapse. In the ED she is awake, obeys commands and asks what happened. Her aunt died suddenly at age 30. ECG: sinus rhythm, QTc 520 ms, broad based T waves.",
    vitals: { pulse: "84/minute", bp: "118/70 mmHg", o2sat: "98% on 2 L/minute" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to temperature control for her?",
        options: [
          "Cold saline 30 mL/kg IV",
          "Cooling only if she becomes agitated",
          "Target 33°C for 24 hours",
          "Target 36°C for 24 hours",
          "No induced cooling, but prevent fever",
        ],
        correct: 4,
        explanation:
          "Deliberate temperature control is indicated for patients who remain comatose after ROSC. She is awake and following commands, so she does not need it. Fever should still be avoided.",
        keyFeature: { topic: "arrhythmia", n: 8 },
        source: "aha-pca",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the most likely underlying cause of her arrest?",
        required: 1,
        accept: [
          {
            id: "lqts",
            text: "Congenital long QT syndrome, likely type 1 given the swimming trigger",
            match: ["long qt", "lqts", "lqt1", "prolonged qt", "qt syndrome"],
          },
        ],
        unacceptable: [{ text: "Drowning or seizure as the primary cause", match: ["drowning", "seizure", "hypothermia"] }],
        explanation:
          "A shockable arrest during swimming, a family history of sudden death and a long QT with broad T waves point to congenital long QT type 1. Swimming and exertion are classic triggers for that type. She was pulled out quickly, so drowning is unlikely to be the primary event.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "inherited",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What reversible contributors to QT prolongation would you check for?",
        required: 2,
        accept: [
          { id: "k", text: "Hypokalemia", match: ["hypokalemia", "potassium"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "magnesium"] },
          { id: "ca", text: "Hypocalcemia", match: ["hypocalcemia", "calcium"] },
          {
            id: "drugs",
            text: "QT prolonging drugs such as antidepressants, antipsychotics, ondansetron or macrolides",
            match: ["drug", "medication", "antidepressant", "antipsychotic", "ondansetron", "macrolide", "azithromycin", "citalopram"],
          },
          { id: "ed", text: "Eating disorder or starvation", match: ["eating disorder", "anorexia", "starvation", "malnutrition"] },
          { id: "thyroid", text: "Hypothyroidism", match: ["hypothyroidism", "thyroid"] },
          { id: "preg", text: "Pregnancy or the postpartum period", match: ["pregnancy", "postpartum", "pregnant"] },
        ],
        explanation:
          "Even with a likely congenital cause, acquired factors add to the risk and are easy to correct. Check electrolytes, review medications and ask about eating disorders. A pregnancy test is also routine in a young woman.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "va",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What are the elements of her management before she leaves the ED?",
        required: 2,
        accept: [
          {
            id: "admit",
            text: "Admit under cardiology or electrophysiology for ICD evaluation",
            match: ["cardiology", "electrophysiology", "icd", "defibrillator", "admit"],
          },
          { id: "bb", text: "Start a beta blocker such as nadolol or propranolol", match: ["beta blocker", "nadolol", "propranolol"] },
          { id: "avoid", text: "Avoid QT prolonging drugs", match: ["avoid qt", "no qt", "qt prolonging", "avoid drug", "crediblemeds"] },
          { id: "family", text: "Screening of first degree relatives", match: ["family", "relative", "screening", "genetic"] },
          { id: "lytes", text: "Replace potassium and magnesium", match: ["potassium", "magnesium"] },
        ],
        explanation:
          "Survivors of arrest from long QT syndrome need admission, a beta blocker and assessment for an ICD. Avoiding QT prolonging drugs is lifelong. First degree relatives should be screened because the condition is inherited.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "inherited",
      },
    ],
    sources: [AHA_PCA, INHERITED, VA],
  },
  {
    ...base,
    id: "arrhythmia-14",
    title: "Faint during a flu illness",
    stem:
      "A 34-year-old man has had 2 days of fever and myalgias from influenza. At home he fainted without warning while sitting on the couch and was unconscious for about 20 seconds. His brother died in his sleep at age 38. ECG: coved ST elevation of 3 mm in V1 and V2 with a downsloping ST segment into inverted T waves. There are no reciprocal changes.",
    vitals: { temperature: "39.6°C", pulse: "108/minute", bp: "122/74 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely ECG diagnosis?",
        required: 1,
        accept: [{ id: "brugada", text: "Type 1 Brugada pattern", match: ["brugada"] }],
        unacceptable: [
          { text: "STEMI or pericarditis", match: ["acute stemi", "anterior stemi", "septal stemi", "anteroseptal stemi", "pericarditis", "acute myocardial infarction"] },
        ],
        explanation:
          "Coved ST elevation of at least 2 mm in V1 or V2 with inverted T waves is the type 1 Brugada pattern. Fever commonly unmasks it. The lack of reciprocal change and the pattern confined to V1 and V2 argue against STEMI.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "inherited",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What features of his syncope suggest an arrhythmic cause?",
        required: 2,
        accept: [
          {
            id: "prodrome",
            text: "No warning or prodrome",
            match: ["no warning", "without warning", "no prodrome", "sudden", "abrupt"],
          },
          { id: "seated", text: "Occurred while sitting", match: ["sitting", "seated", "not standing"] },
          {
            id: "family",
            text: "Family history of sudden death at a young age",
            match: ["family", "brother", "sudden death"],
          },
          { id: "ecg", text: "Abnormal ECG", match: ["ecg", "brugada"] },
          { id: "fever", text: "Fever, a known trigger in this condition", match: ["fever"] },
        ],
        explanation:
          "Syncope without prodrome, while seated and with a family history of young sudden death is high risk. An abnormal ECG adds to the concern. These features demand admission and monitoring rather than a vasovagal label.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "syncope",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the immediate management steps?",
        required: 2,
        accept: [
          {
            id: "fever",
            text: "Treat the fever promptly with acetaminophen",
            match: ["acetaminophen", "tylenol", "antipyretic", "treat fever", "ibuprofen", "cooling"],
          },
          { id: "monitor", text: "Continuous cardiac monitoring with defibrillator pads available", match: ["monitor", "telemetry", "pad"] },
          { id: "admit", text: "Admit", match: ["admit", "admission"] },
          {
            id: "ep",
            text: "Cardiology or electrophysiology consultation for ICD assessment",
            match: ["cardiology", "electrophysiology", "icd", "defibrillator"],
          },
          {
            id: "avoid",
            text: "Avoid drugs that worsen the Brugada pattern",
            match: ["avoid sodium channel", "avoid flecainide", "avoid procainamide", "avoid class", "avoid drug", "avoid trigger", "avoid brugada", "brugadadrugs"],
          },
        ],
        explanation:
          "Fever increases the risk of VF in Brugada syndrome, so treat it aggressively. Syncope with a spontaneous type 1 pattern is a high risk combination that needs monitored admission. An ICD is usually indicated.",
        keyFeature: { topic: "arrhythmia", n: 1 },
        source: "inherited",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What other triggers or drugs can unmask or worsen this ECG pattern?",
        required: 2,
        accept: [
          {
            id: "nachannel",
            text: "Sodium channel blocking antiarrhythmics such as flecainide or procainamide",
            match: ["flecainide", "procainamide", "sodium channel", "class ic", "class 1c", "propafenone"],
          },
          { id: "tca", text: "Tricyclic antidepressants", match: ["tricyclic", "tca", "amitriptyline"] },
          { id: "cocaine", text: "Cocaine", match: ["cocaine"] },
          { id: "alcohol", text: "Alcohol excess", match: ["alcohol"] },
          { id: "lithium", text: "Lithium", match: ["lithium"] },
          { id: "propofol", text: "Propofol infusion", match: ["propofol"] },
          { id: "k", text: "Hyperkalemia", match: ["hyperkalemia", "potassium"] },
          { id: "local", text: "Local anesthetics such as bupivacaine", match: ["bupivacaine", "local anesthetic", "local anaesthetic"] },
          { id: "meal", text: "Large meals", match: ["meal"] },
        ],
        explanation:
          "Sodium channel blockade, fever and hyperkalemia all unmask the Brugada pattern. Patients should get a list of drugs to avoid. Cocaine and heavy alcohol use are common triggers in young adults.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "inherited",
      },
    ],
    sources: [INHERITED, SYNCOPE],
  },
  {
    ...base,
    id: "arrhythmia-15",
    alsoTopics: ["tox"],
    title: "Nausea and yellow halos",
    stem:
      "An 84-year-old woman with heart failure and atrial fibrillation is brought in by her daughter with 4 days of nausea, poor appetite and yellow halos around lights. She has had vomiting and diarrhea this week. Medications: digoxin 0.125 mg daily, furosemide, spironolactone, apixaban, and clarithromycin started 5 days ago for bronchitis. ECG: regular junctional rhythm at 42 with scooped ST depression. Creatinine 210 umol/L (baseline 95). Potassium 5.9 mmol/L. Digoxin level 4.1 nmol/L.",
    vitals: { pulse: "42/minute regular", bp: "104/60 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What factors precipitated her toxicity?",
        required: 3,
        accept: [
          { id: "aki", text: "Acute kidney injury reducing digoxin clearance", match: ["aki", "renal", "kidney", "creatinine"] },
          {
            id: "clari",
            text: "Clarithromycin interaction that raises digoxin levels",
            match: ["clarithromycin", "macrolide", "antibiotic", "interaction"],
          },
          {
            id: "volume",
            text: "Volume depletion from vomiting and diarrhea with ongoing diuretics",
            match: ["dehydration", "volume", "vomiting", "diarrhea", "diarrhoea", "hypovolemia"],
          },
          { id: "age", text: "Advanced age and low lean body mass", match: ["age", "elderly", "older", "body mass"] },
          { id: "diuretic", text: "Diuretic use", match: ["diuretic", "furosemide", "spironolactone"] },
          { id: "mg", text: "Hypomagnesemia", match: ["hypomagnesemia", "magnesium"] },
        ],
        explanation:
          "Chronic digoxin toxicity in older adults usually follows reduced renal clearance or a drug interaction. Clarithromycin inhibits P-glycoprotein and raises digoxin levels. Vomiting, diarrhea and diuretics caused the kidney injury here.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "tox",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the specific treatment for her toxicity?",
        required: 1,
        accept: [
          {
            id: "fab",
            text: "Digoxin immune Fab",
            match: ["fab", "digifab", "digibind", "digoxin immune", "digoxin specific antibody", "digoxin antidote"],
          },
        ],
        unacceptable: [{ text: "Hemodialysis to remove digoxin", match: ["dialysis", "hemodialysis"] }],
        explanation:
          "Digoxin immune Fab binds digoxin and reverses bradycardia, dysrhythmias and hyperkalemia within about an hour. Digoxin has a large volume of distribution and is not removed by dialysis. Contact the poison centre for dosing.",
        keyFeature: { topic: "tox", n: 2 },
        source: "tox",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the indications for this treatment in digoxin toxicity?",
        required: 2,
        accept: [
          {
            id: "rhythm",
            text: "Life threatening dysrhythmia or symptomatic bradycardia",
            match: ["bradycardia", "dysrhythmia", "arrhythmia", "heart block", "ventricular"],
          },
          { id: "k", text: "Hyperkalemia, especially potassium over 5 mmol/L in acute toxicity", match: ["potassium", "hyperkalemia"] },
          { id: "organ", text: "End organ hypoperfusion or shock", match: ["hypoperfusion", "shock", "hypotension", "end organ"] },
          { id: "renal", text: "Chronic toxicity with worsening renal function and symptoms", match: ["renal", "kidney"] },
          { id: "level", text: "Markedly elevated digoxin level", match: ["level", "concentration"] },
          { id: "dose", text: "Large acute ingestion", match: ["ingestion", "overdose"] },
        ],
        explanation:
          "Fab is indicated for dysrhythmias, hyperkalemia, hypoperfusion and very high levels or large ingestions. Chronic toxicity with symptoms and renal failure is a common indication in older adults. The level alone is less important than the clinical picture.",
        keyFeature: { topic: "tox", n: 2 },
        source: "tox",
      },
      {
        id: "q4",
        kind: "short",
        update: "Before the antidote arrives her HR falls to 34 and her BP to 78/44 mmHg.",
        prompt: "What is your next treatment, including the dose and route?",
        required: 1,
        accept: [
          {
            id: "atropine",
            text: "Atropine 0.5 to 1 mg IV, repeated as needed",
            match: c(["atropine"], ["0.5 mg", "0.5mg", "1 mg", "1mg"]),
          },
        ],
        unacceptable: [{ text: "A beta blocker", match: ["metoprolol", "beta blocker"], dangerous: true }],
        explanation:
          "Atropine is a reasonable bridge for symptomatic bradycardia while Fab is obtained. Pacing is a last resort because the irritable myocardium may develop VT or VF. Fab should be given as soon as it arrives.",
        keyFeature: { topic: "tox", n: 5 },
        source: "aha-sc",
      },
    ],
    sources: [TOX, AHA_SC],
  },
];
