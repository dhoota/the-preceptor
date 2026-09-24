import type { Item } from "@/engine/types";
import { AILANI, ASAM, LEHNE, NARAYANASWAMI, POTTER, ROSENBERG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s18-11", {
      topic: "Valproate teaching in bipolar disorder",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 27-year-old client with bipolar disorder starts divalproex sodium, a valproate product, by mouth twice daily. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Valproate can injure the liver, so yellow skin or dark urine is reported. It can cause pancreatitis, which shows as severe abdominal pain with vomiting. Blood levels and liver tests guide safe dosing. Valproate causes neural tube defects, so reliable contraception is needed. Drowsiness is common early and is reported, but the drug is not stopped suddenly. Delayed-release tablets are swallowed whole.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Stop the drug when drowsy", why: "Stopping suddenly can bring back mania. Drowsiness is discussed with the provider." },
      { text: "Report yellow skin or dark urine", why: "Jaundice and dark urine can signal valproate liver injury." },
      { text: "Chew the delayed-release tablets", why: "Chewing breaks the coating and irritates the stomach. The tablets are swallowed whole." },
      { text: "Report severe abdominal pain", why: "Severe abdominal pain with vomiting can signal pancreatitis." },
      { text: "Keep scheduled blood tests", why: "Drug levels, liver tests and platelet counts guide safe therapy." },
      { text: "Use reliable contraception", why: "Valproate can cause neural tube defects in a pregnancy." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s18-12", {
      topic: "Symptom-triggered benzodiazepine for alcohol withdrawal",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client admitted with pneumonia had a last alcoholic drink 36 hours ago. The client is tremulous, sweating and anxious. Heart rate is 112/minute and BP is 158/94 mmHg. The CIWA-Ar score is 18. The prescription reads lorazepam 2 mg by mouth every hour as needed for a CIWA-Ar score of 10 or more. What should the nurse do?",
      rationale:
        "The CIWA-Ar score of 18 is above the prescribed threshold of 10. Symptom-triggered dosing means the benzodiazepine is given when the score reaches the threshold. The score is then rechecked within the hour to guide the next dose. Waiting 4 hours lets withdrawal progress toward seizures or delirium. Haloperidol does not treat withdrawal and lowers the seizure threshold.",
      sources: [ASAM],
    }),
    kind: "mc",
    options: [
      { text: "Recheck the score in 4 hours", why: "The score already meets the threshold. Delay lets withdrawal worsen." },
      { text: "Give lorazepam and recheck in 1 hour", why: "A score of 18 meets the threshold of 10, and hourly checks guide further doses." },
      { text: "Hold lorazepam until the score is 20", why: "The prescription sets the threshold at 10, not 20." },
      { text: "Request a haloperidol prescription", why: "Haloperidol does not treat alcohol withdrawal and lowers the seizure threshold." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-13", {
      topic: "Starting naltrexone too soon after opioids",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with opioid use disorder takes a first dose of naltrexone 50 mg by mouth at a clinic. The client reports using oxycodone the evening before. Thirty minutes after the dose, the client has yawning, a runny nose, vomiting, goose flesh and severe anxiety. Which explanation fits these findings best?",
      rationale:
        "Naltrexone is an opioid antagonist. It displaces opioids from their receptors. Given while oxycodone is still present, it causes sudden withdrawal. Yawning, a runny nose, vomiting, goose flesh and anxiety are withdrawal signs. For this reason the client needs 7 to 10 opioid-free days before oral naltrexone. An overdose causes sedation and slow breathing, not these signs.",
      refs: ["Oral naltrexone is started after 7 to 10 opioid-free days to avoid precipitated withdrawal."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "An allergic reaction to naltrexone", why: "Allergy causes hives or wheeze. It does not cause yawning, runny nose and goose flesh." },
      { text: "Overdose from the recent opioid use", why: "Overdose causes sedation, small pupils and slow breathing." },
      { text: "Expected mild effects of naltrexone", why: "Mild nausea can occur, but this full withdrawal picture is not an expected effect." },
      { text: "Precipitated opioid withdrawal", why: "An antagonist given with opioids still present causes sudden withdrawal." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-14", {
      topic: "Buspirone teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with generalized anxiety disorder started buspirone 7.5 mg by mouth twice daily 3 days ago. Which two statements show the client understands the drug? Select two.",
      rationale:
        "Buspirone takes a week or more to start working and several weeks for full effect. Grapefruit juice in large amounts raises buspirone levels. Buspirone does not cause dependence or withdrawal like a benzodiazepine. It is continued after anxiety eases because the disorder is chronic. Alcohol is avoided because it adds sedation.",
      sources: [LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I should feel the full effect within a few days.\"", why: "Full effect takes several weeks, so early lack of effect is expected." },
      { text: "\"It may take several weeks to feel the full effect.\"", why: "Buspirone has a delayed onset and needs steady daily use." },
      { text: "\"I can stop it once I feel calmer.\"", why: "The anxiety disorder is chronic, so the drug is continued as prescribed." },
      { text: "\"I should avoid large amounts of grapefruit juice.\"", why: "Grapefruit juice slows buspirone breakdown and raises its level." },
      { text: "\"I can have wine with it each night.\"", why: "Alcohol adds sedation and worsens anxiety over time." },
      { text: "\"It can make me dependent like lorazepam.\"", why: "Buspirone does not cause dependence or withdrawal." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s18-15", {
      topic: "Anticonvulsant oral solution volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A school-age child with epilepsy has a prescription for levetiracetam 350 mg by mouth twice daily. The oral solution contains 100 mg/mL. What volume should the nurse give for each dose?",
      rationale:
        "The dose is 350 mg and the solution holds 100 mg in each mL. Dividing 350 mg by 100 mg/mL gives 3.5 mL. The nurse measures it in an oral syringe, not a household spoon, for accuracy. The 7 mL figure is the total for the day, not one dose.",
      calc: { expr: "350 / 100", answer: 3.5, unit: "mL", round: 1, steps: ["350 / 100 = 3.5"] },
      sources: [LEHNE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "0.35 mL", why: "This is one tenth of the correct volume from a misplaced decimal point." },
      { text: "1.75 mL", why: "This is half the prescribed dose." },
      { text: "3.5 mL", why: "350 mg divided by 100 mg/mL is 3.5 mL." },
      { text: "7 mL", why: "This is the daily total of two doses, given at once." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-16", {
      canada: "Canadian labs report phenytoin in micromol/L. The University Health Network lab in Toronto lists 40 to 80 micromol/L as therapeutic, so these levels read about 48, 67, 91 and 115 micromol/L.",
      topic: "Rising phenytoin level",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 70-year-old client with a seizure disorder takes phenytoin by mouth. The primary health care provider raised the dose on day 1. The nurse reviews the flow sheet. Which interpretation of the trend is most accurate?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "Day 1", "Day 5", "Day 9", "Day 13"],
            rows: [
              ["Phenytoin level (mcg/mL)", "12", "17", "23", "29"],
              ["Nystagmus", "None", "None", "Mild on side gaze", "Marked"],
              ["Gait", "Steady", "Steady", "Slightly unsteady", "Needs help to walk"],
              ["Seizures", "None", "None", "None", "None"],
            ],
          },
        },
      ],
      rationale:
        "The phenytoin level rose from 12 to 29 mcg/mL after the dose change. It crossed 20 mcg/mL by day 9. Nystagmus and an unsteady gait appeared that day and then worsened. These are dose-related signs of phenytoin toxicity. Small dose increases can raise the level sharply because phenytoin breakdown saturates. A stroke would not track the drug level so closely.",
      refs: ["Therapeutic total phenytoin level is 10 to 20 mcg/mL."],
      sources: [LEHNE, { body: "University Health Network Laboratory Medicine Program", work: "Lab Dictionary: Phenytoin (Dilantin)", year: 2026, url: "https://forms.uhn.ca/LabDictionary/Public/View?lid=74" }],
    }),
    kind: "mc",
    options: [
      { text: "The level is rising into the toxic range", why: "The level passed 20 mcg/mL and nystagmus and ataxia followed." },
      { text: "The level is too low to control seizures", why: "The level rose from 12 to 29 mcg/mL, above the target range." },
      { text: "The findings suggest a new stroke", why: "The signs grew step by step with a rising drug level, which points to toxicity." },
      { text: "The level is stable within the target range", why: "The level more than doubled and passed the top of the range." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-17", {
      topic: "Triptan contraindication",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 52-year-old client has a moderate migraine. Before giving a first dose of sumatriptan 50 mg by mouth, the nurse reviews the history. Which finding should the nurse report to the primary health care provider before giving the drug?",
      rationale:
        "Sumatriptan narrows blood vessels, including the coronary arteries. It is contraindicated in coronary artery disease. A client with a coronary stent has known coronary disease, so the nurse holds the dose and reports it. Migraine with typical aura is not a contraindication. Allergic rhinitis and treated hypothyroidism do not affect triptan safety.",
      sources: [AILANI, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Seasonal allergic rhinitis", why: "Allergic rhinitis does not change the safety of a triptan." },
      { text: "Migraine with visual aura", why: "Triptans may be used for migraine with typical aura." },
      { text: "Hypothyroidism on levothyroxine", why: "Treated hypothyroidism is not a triptan contraindication." },
      { text: "Coronary stent placed last year", why: "Triptans constrict coronary arteries and are contraindicated in coronary disease." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-18", {
      topic: "Topiramate teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 24-year-old client starts topiramate 25 mg by mouth daily to prevent migraine. Which two instructions should the nurse include? Select two.",
      rationale:
        "Topiramate raises the risk of kidney stones, so the client drinks plenty of fluid. It can cause sudden angle-closure glaucoma, so eye pain or blurred vision is reported at once. Tingling in the hands is common and is not a reason to stop suddenly. Topiramate reduces sweating, which raises the risk of overheating. Grapefruit juice is not the concern with this drug.",
      sources: [LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Drink plenty of fluids each day", why: "Good hydration lowers the kidney stone risk from topiramate." },
      { text: "Take each dose with grapefruit juice", why: "Grapefruit juice has no role with topiramate." },
      { text: "Report sudden eye pain or blurred vision", why: "These can signal acute angle-closure glaucoma, a known topiramate reaction." },
      { text: "Stop the drug at once if tingling occurs", why: "Tingling is common. Sudden stopping can provoke seizures or rebound headache." },
      { text: "Expect to sweat more in hot weather", why: "Topiramate reduces sweating and raises the risk of overheating." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s18-19", {
      topic: "Drugs that worsen myasthenia gravis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 61-year-old client with myasthenia gravis takes pyridostigmine. The client is admitted with pneumonia and has several new prescriptions. Which prescriptions should the nurse question with the primary health care provider? Select all that apply.",
      rationale:
        "Some drugs block transmission at the neuromuscular junction and can bring on a myasthenic crisis. Aminoglycosides such as gentamicin, fluoroquinolones such as levofloxacin and IV magnesium are known triggers. The nurse questions them so safer options can be chosen. Acetaminophen, guaifenesin and enoxaparin do not affect neuromuscular transmission.",
      sources: [NARAYANASWAMI, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Acetaminophen by mouth", why: "Acetaminophen does not affect neuromuscular transmission." },
      { text: "Gentamicin IV", why: "Aminoglycosides block neuromuscular transmission and can worsen weakness." },
      { text: "Guaifenesin by mouth", why: "Guaifenesin thins mucus and does not affect the neuromuscular junction." },
      { text: "Levofloxacin IV", why: "Fluoroquinolones carry a warning for worsening myasthenia gravis." },
      { text: "Magnesium sulfate IV", why: "Magnesium reduces acetylcholine release and can trigger a crisis." },
      { text: "Enoxaparin subcutaneously", why: "Enoxaparin prevents clots and does not affect muscle strength." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s18-20", {
      topic: "Hypermetabolic reaction to anesthetic agents",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 23-year-old client remains intubated in the post-anesthesia care unit after knee surgery under sevoflurane with succinylcholine. The jaw and limbs are rigid. Heart rate is 138/minute. End-tidal carbon dioxide is 68 mmHg despite higher ventilation. Temperature is 39.4°C (102.9°F) and rising. Serum potassium is 6.1 mEq/L (6.1 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Rigidity, a rising end-tidal carbon dioxide, fast heart rate, rising temperature and high potassium right after a volatile agent and succinylcholine fit malignant hyperthermia. Dantrolene stops the uncontrolled calcium release in muscle. Active cooling lowers the temperature. Core temperature and potassium show the response and the risk of dysrhythmia. Calcium channel blockers are avoided with dantrolene because together they can raise potassium and depress the heart.",
      sources: [ROSENBERG],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Malignant hyperthermia", why: "The timing after triggering agents and the hypermetabolic signs fit this condition." },
      { text: "Neuroleptic malignant syndrome", why: "This follows antipsychotic use and develops over days, not minutes." },
      { text: "Early surgical wound sepsis", why: "Sepsis does not cause rigidity and a steep carbon dioxide rise within hours of surgery." },
      { text: "Thyroid storm", why: "Thyroid storm does not cause muscle rigidity or follow anesthetic triggers." },
    ],
    actions: [
      { text: "Give IV dantrolene", why: "Dantrolene is the specific antidote that stops calcium release in muscle." },
      { text: "Give IV verapamil for heart rate", why: "Verapamil with dantrolene can cause high potassium and heart depression." },
      { text: "Apply active cooling measures", why: "Cooling limits the harm from a temperature that keeps rising." },
      { text: "Warm the IV fluids", why: "Warm fluids add heat. Cold fluids are used instead." },
      { text: "Give oral acetaminophen", why: "Acetaminophen does not treat heat made by muscle and cannot be swallowed while intubated." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase does not track this reaction." },
      { text: "Core body temperature", why: "Temperature shows whether dantrolene and cooling are working." },
      { text: "Serum potassium level", why: "Muscle breakdown raises potassium, which can cause dysrhythmias." },
      { text: "Peak expiratory flow", why: "Peak flow cannot be measured in an intubated client and does not track this reaction." },
      { text: "Blood alcohol level", why: "Alcohol levels do not relate to this anesthetic reaction." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 2] },
  },
];
