import type { Item } from "@/engine/types";
import { ADA_APA, GINA, GLAUSER, LEHNE, ONS, TJC, WOOLF, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s18-01", {
      topic: "Weight-based aminoglycoside volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The primary health care provider prescribes gentamicin 5 mg/kg IV once daily for a client who weighs 64 kg. The vial contains gentamicin 40 mg/mL. How many mL should the nurse draw up for the dose?",
      rationale:
        "The dose is 5 mg/kg for a client of 64 kg, which is 320 mg. The vial holds 40 mg in each mL. Dividing 320 mg by 40 mg/mL gives 8 mL. The drug is then diluted and infused as the pharmacy directs. Gentamicin can harm the kidneys and the inner ear, so the dose is checked against the weight before it is given.",
      calc: { expr: "5 * 64 / 40", answer: 8, unit: "mL", round: 0, steps: ["5 * 64 = 320", "320 / 40 = 8"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.8 mL", why: "This is one tenth of the correct volume. It comes from a misplaced decimal point." },
      { text: "8 mL", why: "320 mg divided by 40 mg/mL is 8 mL." },
      { text: "16 mL", why: "This is twice the correct volume and would double the dose." },
      { text: "80 mL", why: "This is 10 times the correct volume. It comes from a misplaced decimal point." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-02", {
      topic: "Metabolic monitoring with a second-generation antipsychotic",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client with schizophrenia starts olanzapine 10 mg by mouth at bedtime. Which measures should the nurse plan to check at baseline and during follow-up? Select all that apply.",
      rationale:
        "Olanzapine carries a high risk of weight gain, diabetes and raised lipids. Baseline and follow-up checks include weight with body mass index, waist circumference, fasting glucose and a fasting lipid panel. Blood pressure is also checked. Weekly neutrophil counts belong to clozapine. Lithium and ammonia levels belong to other drugs.",
      sources: [ADA_APA, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Serum lithium level", why: "Lithium levels guide lithium therapy. The client does not take lithium." },
      { text: "Weight and body mass index", why: "Olanzapine often causes weight gain, so weight is tracked from baseline." },
      { text: "Weekly absolute neutrophil count", why: "Weekly counts are required for clozapine, not for olanzapine." },
      { text: "Waist circumference", why: "Waist size tracks the central fat linked to metabolic syndrome." },
      { text: "Fasting plasma glucose", why: "Olanzapine raises the risk of new diabetes, so glucose is checked." },
      { text: "Serum ammonia level", why: "Ammonia is checked when valproate causes confusion. It does not track olanzapine effects." },
      { text: "Fasting lipid panel", why: "Olanzapine can raise triglycerides and cholesterol." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s18-03", {
      topic: "Stopping an antidepressant abruptly",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client stopped taking paroxetine 40 mg daily 3 days ago without telling the primary health care provider. The client reports dizziness, irritability, nausea and brief electric shock sensations in the head. Which explanation fits these findings best?",
      rationale:
        "Paroxetine has a short half-life. Stopping it suddenly often causes a discontinuation syndrome within a few days. Dizziness, irritability, nausea and electric shock sensations fit this pattern. Restarting and then tapering the drug under the provider's direction relieves it. Serotonin syndrome needs rising serotonin, not a stopped drug. A relapse of depression develops over weeks and does not cause these sensory symptoms.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Serotonin syndrome from drug accumulation", why: "The drug was stopped, so serotonin activity is falling, not building up." },
      { text: "Antidepressant discontinuation syndrome", why: "Sudden loss of a short half-life SSRI causes dizziness, nausea, irritability and shock sensations." },
      { text: "Early relapse of the depression", why: "Relapse comes on over weeks with low mood. It does not cause electric shock sensations." },
      { text: "Anticholinergic toxicity", why: "Anticholinergic toxicity causes dry skin, urinary retention and confusion. The drug has also been stopped." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-04", {
      topic: "First drug for a prolonged seizure",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 42-year-old client with epilepsy has a generalized tonic-clonic seizure that has lasted 6 minutes. A peripheral IV line is in place. The airway is positioned and oxygen is applied. Which prescription should the nurse give first?",
      rationale:
        "A seizure lasting 5 minutes or more is status epilepticus. This seizure has lasted 6 minutes. An IV benzodiazepine such as lorazepam is the first drug because it stops seizures fastest. Fosphenytoin and levetiracetam are second drugs, used if seizures continue after the benzodiazepine. An oral drug cannot be swallowed safely during a seizure.",
      refs: ["Convulsive status epilepticus is a seizure lasting 5 minutes or more. A benzodiazepine is the initial therapy."],
      sources: [GLAUSER],
    }),
    kind: "mc",
    options: [
      { text: "Fosphenytoin IV loading infusion", why: "Fosphenytoin is a second-phase drug given if seizures continue after a benzodiazepine." },
      { text: "Levetiracetam IV loading infusion", why: "Levetiracetam is a second-phase option. It does not replace the first benzodiazepine dose." },
      { text: "Carbamazepine by mouth", why: "A client who is seizing cannot swallow safely, and oral drugs act too slowly." },
      { text: "Lorazepam IV push", why: "An IV benzodiazepine is the established first therapy for status epilepticus." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-05", {
      topic: "Metered-dose inhaler technique with a steroid",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client with asthma receives a new prescription for fluticasone 2 puffs twice daily by metered-dose inhaler without a spacer. Place the teaching steps for one puff in order.",
      rationale:
        "The canister is shaken to mix the drug. The client breathes out fully so the next breath can be deep. The canister is pressed at the start of a slow, deep breath so the drug reaches the airways. A breath hold of about 10 seconds lets the drug settle. After an inhaled steroid the client rinses and spits to lower the risk of oral thrush. Fast inhalation suits dry powder inhalers. Rinse water is not swallowed.",
      sources: [GINA, LEHNE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Hold the breath for 10 seconds", why: "Holding the breath lets the drug settle in the airways before exhaling." },
      { text: "Inhale rapidly and forcefully", why: "A fast, forceful breath suits a dry powder inhaler. It sends metered-dose spray into the throat." },
      { text: "Shake the inhaler", why: "Shaking mixes the drug in the canister before the puff." },
      { text: "Rinse the mouth and spit", why: "Rinsing removes steroid left in the mouth and lowers the risk of thrush." },
      { text: "Breathe out fully", why: "Emptying the lungs first allows a full, deep breath with the puff." },
      { text: "Swallow the rinse water", why: "Swallowing the rinse sends steroid into the gut. The water is spat out." },
      { text: "Press the canister while inhaling slowly", why: "A slow breath started with the puff carries the drug deep into the airways." },
    ],
    correct: [2, 4, 6, 0, 3],
  },
  {
    ...meta("rn-s18-06", {
      canada: "Canada uses the name salbutamol for albuterol. Health Canada lists it as Ventolin HFA, 100 mcg per puff, so a Canadian client would name salbutamol as the reliever.",
      topic: "Rescue and controller inhalers",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "A 16-year-old client with asthma has prescriptions for a fluticasone-salmeterol inhaler twice daily and albuterol as needed. The nurse reviews the plan. Which statement by the client shows correct understanding?",
      rationale:
        "Albuterol is a short-acting bronchodilator that works within minutes. It is the reliever for sudden wheeze. Salmeterol is long acting and slow to start, so the combination inhaler is a controller, not a reliever. The controller is taken daily even when the client feels well. Scheduled albuterol does not prevent attacks and signals poor control.",
      sources: [GINA, LEHNE, { body: "Health Canada", work: "Drug Product Database: Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
    }),
    kind: "mc",
    options: [
      { text: "\"I will use albuterol when I start to wheeze.\"", why: "Albuterol acts within minutes and is the reliever for acute symptoms." },
      { text: "\"I will use my twice-daily inhaler during an attack.\"", why: "Salmeterol starts slowly. The combination inhaler controls asthma and does not relieve an attack." },
      { text: "\"I will stop the twice-daily inhaler when I feel well.\"", why: "Stopping the steroid controller lets airway inflammation return." },
      { text: "\"I will use albuterol each morning to prevent attacks.\"", why: "Regular albuterol does not prevent attacks. Frequent need for it shows poor control." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-07", {
      topic: "Client identification before medications",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse prepares to give scheduled medications to an alert, oriented client on a medical unit. The identification band fell off during a bath and has not been replaced. What should the nurse do to confirm identity before giving the drugs?",
      rationale:
        "Two client identifiers are used before any medication is given. The client's name and date of birth are common choices. An alert client can state both, and the nurse compares them with the medication record. A new band is then applied. A room number is a location, not an identifier. A staff member's word or a single name response is not a two-identifier check.",
      sources: [TJC],
    }),
    kind: "mc",
    options: [
      { text: "Ask for the name and birth date", why: "Name and date of birth are two identifiers that the nurse checks against the record." },
      { text: "Check the name on the room door", why: "A room or bed location is not an acceptable identifier." },
      { text: "Ask a nursing assistant who it is", why: "Another person's recognition does not meet the two-identifier standard." },
      { text: "Call the name and wait for a reply", why: "One name gives one identifier, and some clients answer to any name." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-08", {
      canada: "Canadian labs report these results in SI units only. The white cell count reads 2.1 x 10^9/L against the Medical Council of Canada range of 3.5 to 10.5 x 10^9/L. Sodium reads 127 mmol/L against 136 to 146 mmol/L.",
      topic: "Carbamazepine adverse effects",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 29-year-old client has taken carbamazepine for focal seizures for 5 weeks. The nurse reviews the clinic note. Click to highlight the findings that need follow-up.",
      rationale:
        "Carbamazepine can suppress the bone marrow. A sore throat and fever with a white blood cell count of 2100/mm3 suggest a low white cell count with infection. New bruising suggests a low platelet count. Carbamazepine can also cause low sodium. A sodium of 127 mEq/L is below the normal range. Early drowsiness that resolves is expected. Seizure control, a normal blood pressure and taking doses with meals need no follow-up.",
      refs: ["Normal white blood cell count is about 5000 to 10 000/mm3. Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L)."],
      sources: [LEHNE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "highlight",
    passage:
      "[[Seizure-free for 4 weeks]]. [[Reports a sore throat and fever for 2 days]]. [[Temperature 38.4°C (101.1°F)]]. [[Mild drowsiness in the first week, now resolved]]. [[White blood cell count 2100/mm3]]. [[Sodium 127 mEq/L (127 mmol/L)]]. [[BP 118/74 mmHg]]. [[Takes each dose with meals]]. [[New bruising on both shins]].",
    spans: [
      { text: "Seizure-free for 4 weeks", why: "Seizure control shows the drug is working." },
      { text: "Reports a sore throat and fever for 2 days", why: "Sore throat and fever can signal infection from a low white cell count." },
      { text: "Temperature 38.4°C (101.1°F)", why: "A fever with a low white cell count needs prompt evaluation." },
      { text: "Mild drowsiness in the first week, now resolved", why: "Early drowsiness that fades is an expected effect." },
      { text: "White blood cell count 2100/mm3", why: "A count of 2100/mm3 is well below normal and suggests marrow suppression." },
      { text: "Sodium 127 mEq/L (127 mmol/L)", why: "Carbamazepine can cause low sodium, and 127 mEq/L is below 135 mEq/L." },
      { text: "BP 118/74 mmHg", why: "This blood pressure is within the normal range." },
      { text: "Takes each dose with meals", why: "Taking carbamazepine with food is acceptable and lowers stomach upset." },
      { text: "New bruising on both shins", why: "New bruising can signal a low platelet count from marrow suppression." },
    ],
    correct: [1, 2, 4, 5, 8],
  },
  {
    ...meta("rn-s18-09", {
      topic: "Chemotherapy dose by body surface area",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The prescription is docetaxel 75 mg/m2 IV every 3 weeks. The client's body surface area is 1.84 m2. What dose should the nurse expect to see on the pharmacy label during the independent double check?",
      rationale:
        "Body surface area dosing multiplies the dose per square meter by the client's area. 75 mg/m2 for 1.84 m2 is 138 mg. Two qualified staff check the dose, the drug and the client independently before a chemotherapy infusion starts. A label that does not match the calculated dose is held and clarified.",
      calc: { expr: "75 * 1.84", answer: 138, unit: "mg", round: 0, steps: ["75 * 1.84 = 138"] },
      sources: [ONS],
    }),
    kind: "mc",
    options: [
      { text: "40.8 mg", why: "This divides 75 by 1.84 instead of multiplying." },
      { text: "75 mg", why: "This ignores the body surface area and gives the dose for 1 m2." },
      { text: "138 mg", why: "75 mg/m2 multiplied by 1.84 m2 is 138 mg." },
      { text: "1380 mg", why: "This is 10 times the correct dose from a misplaced decimal point." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-10", {
      topic: "Tricyclic antidepressant overdose",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 45-year-old client is brought to the emergency department 1 hour after swallowing an unknown number of amitriptyline tablets. The client is drowsy, with dry flushed skin and dilated pupils. Heart rate is 128/minute and BP is 88/50 mmHg. The ECG shows a QRS duration of 0.14 seconds. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Amitriptyline overdose blocks sodium channels in the heart and has strong anticholinergic effects. Dry flushed skin, dilated pupils, a fast heart rate, low BP and a QRS of 0.14 seconds fit tricyclic toxicity. IV sodium bicarbonate narrows the QRS and supports the BP. Continuous cardiac monitoring detects dysrhythmias. The QRS width and the BP show whether treatment is working. Flumazenil and physostigmine can trigger seizures or dysrhythmias in this overdose.",
      refs: ["In tricyclic poisoning a QRS duration over 0.10 seconds signals cardiac sodium channel blockade and calls for sodium bicarbonate."],
      sources: [WOOLF, LEHNE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Serotonin syndrome", why: "Serotonin syndrome causes sweating, clonus and fever. It does not widen the QRS." },
      { text: "Tricyclic drug toxicity", why: "Anticholinergic signs with a wide QRS and low BP after amitriptyline fit this condition." },
      { text: "Opioid toxicity", why: "Opioids cause pinpoint pupils and slow breathing. This client has dilated pupils." },
      { text: "Neuroleptic malignant syndrome", why: "This syndrome follows antipsychotic use and causes rigidity and high fever." },
    ],
    actions: [
      { text: "Give IV flumazenil 0.2 mg", why: "Flumazenil can trigger seizures in a tricyclic overdose." },
      { text: "Give IV sodium bicarbonate", why: "Bicarbonate overcomes sodium channel blockade and narrows the QRS." },
      { text: "Give IV physostigmine 1 mg", why: "Physostigmine can cause bradycardia and asystole in tricyclic poisoning." },
      { text: "Start continuous cardiac monitoring", why: "Tricyclic toxicity causes sudden dysrhythmias that need constant watch." },
      { text: "Induce vomiting with ipecac syrup", why: "Induced vomiting risks aspiration in a drowsy client who may seize." },
    ],
    parameters: [
      { text: "Serum lithium level", why: "The client took amitriptyline. A lithium level does not guide this care." },
      { text: "QRS width on the ECG", why: "A narrowing QRS shows the bicarbonate is reversing sodium channel blockade." },
      { text: "Serum ammonia level", why: "Ammonia does not reflect tricyclic toxicity." },
      { text: "Blood pressure trend", why: "Low BP is a sign of severe toxicity and guides fluids and bicarbonate." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide overdose care." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
];
