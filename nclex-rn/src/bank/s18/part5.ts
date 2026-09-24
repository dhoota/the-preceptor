import type { Item } from "@/engine/types";
import { ASA_NEURAXIAL, HOH, ISMP_ABBR, ISMP_HIGH, JUNGQUIST, LEHNE, POTTER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s18-41", {
      topic: "Opioid-induced sedation",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client received hydromorphone 1 mg IV 30 minutes ago for pain after abdominal surgery. The client now falls asleep in the middle of a conversation and is hard to keep awake. Respirations are 12/minute and SpO2 is 95% on room air. Which action should the nurse take first?",
      rationale:
        "Sedation rises before breathing slows, so it is the earliest warning of opioid-induced respiratory depression. A client who drifts off mid-conversation is frequently drowsy, which is an unacceptable level of sedation. Further opioid doses are held and the client is roused and monitored closely. The prescriber is notified to lower the dose. A respiratory rate of 12/minute and an SpO2 of 95% do not rule out rising risk.",
      refs: ["On the Pasero Opioid-Induced Sedation Scale, a client who is frequently drowsy and drifts off during conversation needs the opioid held or reduced."],
      sources: [JUNGQUIST],
    }),
    kind: "mc",
    options: [
      { text: "Give the next as-needed dose for pain", why: "More opioid in a sedated client raises the risk of respiratory arrest." },
      { text: "Hold opioids and rouse the client", why: "Frequent drowsiness is unacceptable sedation that precedes respiratory depression." },
      { text: "Give naloxone 0.4 mg IV now", why: "Breathing is adequate. Full reversal now would cause severe pain and withdrawal." },
      { text: "Let the client sleep and recheck in 4 hours", why: "Sedation can deepen quickly, so rechecking in 4 hours is unsafe." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-42", {
      canada: "In Ontario, the Safeguarding our Communities Act, 2015 requires used fentanyl patches to be returned to the pharmacy before new ones are dispensed. The client still folds used patches and stores them securely until they are returned.",
      topic: "Transdermal fentanyl teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 72-year-old client with cancer pain who has taken oral morphine for 2 months starts a transdermal fentanyl patch 25 mcg/hour, changed every 72 hours. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Heat speeds fentanyl absorption from the patch and can cause an overdose. The old patch is removed before a new one goes on so two patches do not deliver drug at once. Used patches still hold fentanyl, so they are folded sticky sides together. The first patch takes many hours to reach full effect, so breakthrough doses stay available. Cutting a patch can release the drug too fast.",
      sources: [LEHNE, { body: "Government of Ontario", work: "Safeguarding our Communities Act (Patch for Patch Return Policy), 2015, S.O. 2015, c. 33", year: 2015, url: "https://www.ontario.ca/laws/statute/15s33" }],
    }),
    kind: "sata",
    options: [
      { text: "Keep heating pads off the patch", why: "Heat raises absorption and can cause fentanyl overdose." },
      { text: "Remove the old patch before applying a new one", why: "Two patches at once double the dose." },
      { text: "Expect full relief within the first hour", why: "Full effect takes many hours, so short-acting doses cover the gap." },
      { text: "Fold used patches sticky sides together", why: "Folding traps leftover fentanyl and protects children and pets." },
      { text: "Cut the patch to lower the dose", why: "Cutting can release the drug too quickly." },
      { text: "Stop breakthrough morphine once it is on", why: "Breakthrough doses cover pain while the patch reaches full effect." },
    ],
    correct: [0, 1, 3],
  },
  {
    ...meta("rn-s18-43", {
      canada: "Health Canada authorizes ketorolac injection for IM use only, and no IV product is marketed. The Toradol IM monograph limits IM use to 2 days and IM plus oral use to 5 days. It caps the daily dose at 60 mg in older adults.",
      topic: "NSAID kidney injury in an older adult",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 78-year-old client who weighs 48 kg has received ketorolac 15 mg IV every 6 hours for 4 days after hip fracture repair. Urine output totals 60 mL over the last 3 hours. A bladder scan shows 60 mL. Creatinine has risen from 0.9 mg/dL (80 micromol/L) to 1.7 mg/dL (150 micromol/L). Which conclusion is best supported?",
      rationale:
        "Ketorolac blocks prostaglandins that keep blood flowing to the kidneys. Older age and low body weight raise this risk. Creatinine nearly doubled from 0.9 to 1.7 mg/dL and urine output is low. A bladder scan of 60 mL rules out retention. The dose of 15 mg is the reduced dose used for this age and weight. Total ketorolac use is limited to 5 days.",
      refs: ["Ketorolac use is limited to 5 days. Clients 65 years or older or under 50 kg receive the reduced dose."],
      sources: [LEHNE, { body: "Atnahs Pharma UK Limited", work: "Toradol IM (ketorolac tromethamine injection) Product Monograph", year: 2023, url: "https://pdf.hres.ca/dpd_pm/00070307.PDF" }],
    }),
    kind: "mc",
    options: [
      { text: "Ketorolac is reducing kidney blood flow", why: "NSAIDs lower renal prostaglandins, and creatinine rose as urine output fell." },
      { text: "The dose is too low for the weight", why: "15 mg is the correct reduced dose for a client of 78 under 50 kg." },
      { text: "Urinary retention after anesthesia", why: "A bladder scan of 60 mL shows the bladder is not holding urine." },
      { text: "An expected change after hip surgery", why: "A creatinine rise from 0.9 to 1.7 mg/dL is kidney injury, not an expected change." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-44", {
      topic: "Concentrated oral opioid volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client in hospice has a prescription for morphine 15 mg by mouth every 4 hours as needed for pain. The only supply is morphine oral solution 20 mg/mL. What volume should the nurse measure?",
      rationale:
        "The dose is 15 mg and the solution holds 20 mg in each mL. Dividing 15 mg by 20 mg/mL gives 0.75 mL. Concentrated oral morphine is a high-alert drug. Mix-ups between mg and mL with this strength have caused large overdoses. The nurse uses the marked oral syringe and confirms both the mg dose and the mL volume.",
      calc: { expr: "15 / 20", answer: 0.75, unit: "mL", round: 2, steps: ["15 / 20 = 0.75"] },
      sources: [ISMP_HIGH, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.75 mL", why: "15 mg divided by 20 mg/mL is 0.75 mL." },
      { text: "1.3 mL", why: "This divides 20 by 15, which inverts the formula." },
      { text: "7.5 mL", why: "This is 10 times the correct volume." },
      { text: "15 mL", why: "This confuses 15 mg with 15 mL and gives 20 times the dose." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-45", {
      topic: "Monitoring after epidural morphine",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client received a single dose of preservative-free morphine by epidural at 0800 for knee surgery. The nurse reviews the 1600 note. Click to highlight the findings that need follow-up.",
      rationale:
        "Epidural morphine spreads slowly in spinal fluid, so respiratory depression can appear many hours after the dose. A client who drifts off mid-sentence with respirations of 9/minute needs prompt action. Itching is a common opioid effect that needs treatment. No void for 10 hours with a palpable bladder shows urinary retention. Low pain, a normal BP and a clean site are expected.",
      refs: ["Delayed respiratory depression can occur up to 24 hours after single-dose neuraxial morphine."],
      sources: [ASA_NEURAXIAL],
    }),
    kind: "highlight",
    passage:
      "[[Pain 2 of 10 at rest]]. [[Scratching the face and chest often]]. [[Has not voided since 0600]]. [[Bladder palpable above the pubic bone]]. [[Wakes to voice but drifts off mid-sentence]]. [[Respirations 9/minute and shallow]]. [[BP 126/72 mmHg]]. [[Epidural site dry with no redness]].",
    spans: [
      { text: "Pain 2 of 10 at rest", why: "Low pain shows the epidural morphine is working." },
      { text: "Scratching the face and chest often", why: "Opioid-induced itching is common after epidural morphine and needs treatment." },
      { text: "Has not voided since 0600", why: "Ten hours without voiding suggests urinary retention from the opioid." },
      { text: "Bladder palpable above the pubic bone", why: "A palpable bladder confirms retention that needs emptying." },
      { text: "Wakes to voice but drifts off mid-sentence", why: "Increasing sedation is an early sign of respiratory depression." },
      { text: "Respirations 9/minute and shallow", why: "Slow, shallow breathing after epidural morphine needs immediate action." },
      { text: "BP 126/72 mmHg", why: "This blood pressure is within the normal range." },
      { text: "Epidural site dry with no redness", why: "A clean, dry site is expected." },
    ],
    correct: [1, 2, 3, 4, 5],
  },
  {
    ...meta("rn-s18-46", {
      topic: "Late movement disorder from an antipsychotic",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 58-year-old client has taken haloperidol for schizophrenia for 9 years. The nurse notes repeated tongue thrusting and slow writhing movements of the fingers. The client is calm and afebrile, and muscle tone is normal. Complete the sentence by dragging the correct options into each blank.",
      rationale:
        "Years of dopamine blockade can cause tardive dyskinesia. It shows as involuntary movements of the mouth, tongue and limbs. Tongue thrusting and slow finger writhing fit this pattern. Acute dystonia starts within days and causes sustained spasm. Neuroleptic malignant syndrome causes fever and rigidity, and this client has neither. Akathisia is inner restlessness with pacing. Regular screening with a movement scale helps find it early.",
      sources: [LEHNE],
    }),
    kind: "dnd",
    template: "The findings fit {0}. The mouth sign is {1} and the limb sign is {2}.",
    scoring: "triad",
    targets: ["Condition", "Mouth sign", "Limb sign"],
    tokens: [
      { text: "acute dystonia", why: "Dystonia appears within days of starting the drug, not after 9 years." },
      { text: "tongue thrusting", why: "Repeated tongue thrusting is a classic oral sign of tardive dyskinesia." },
      { text: "tardive dyskinesia", why: "Involuntary mouth and limb movements after years of haloperidol fit this condition." },
      { text: "neuroleptic malignant syndrome", why: "This syndrome causes fever and rigidity, and the client has neither." },
      { text: "a sustained jaw spasm", why: "A fixed spasm fits acute dystonia and was not observed." },
      { text: "slow finger writhing", why: "Slow writhing limb movements are part of tardive dyskinesia." },
      { text: "akathisia", why: "Akathisia is restlessness with pacing, not writhing movements." },
      { text: "lead-pipe rigidity", why: "Rigidity fits neuroleptic malignant syndrome. Muscle tone is normal here." },
    ],
    correct: [2, 1, 5],
  },
  {
    ...meta("rn-s18-47", {
      topic: "Error-prone dose notation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews handwritten prescriptions on a unit that has not yet moved to electronic orders. Which prescriptions should the nurse clarify before giving the drug? Select all that apply.",
      rationale:
        "The letter U for units can be read as a zero, causing a tenfold overdose. With a trailing zero, as in 5.0 mg, a missed decimal point makes the dose read ten times larger. A dose with no leading zero, as in .1 mg, can be read as a whole number. QD can be read as QID. Each needs clarification. The metoprolol, digoxin and morphine prescriptions use safe notation.",
      sources: [ISMP_ABBR],
    }),
    kind: "sata",
    options: [
      { text: "Metoprolol 25 mg by mouth twice daily", why: "The dose, route and frequency are written in full." },
      { text: "Digoxin 0.125 mg by mouth daily", why: "A leading zero before the decimal is the safe way to write the dose." },
      { text: "Insulin regular 6 U before breakfast", why: "The letter U can be misread as 0 or 4. The word units is written out." },
      { text: "Morphine 2 mg IV every 4 hours as needed for pain", why: "The dose, route, frequency and reason for use are clear and complete." },
      { text: "Warfarin 5.0 mg by mouth at 1700", why: "A missed decimal point makes 5.0 mg look like a dose ten times larger." },
      { text: "Levothyroxine .1 mg by mouth daily", why: "Without a leading zero, the decimal can be missed and the dose read ten times larger." },
      { text: "Enoxaparin 40 mg subcutaneously QD", why: "QD can be read as QID. The word daily is written out." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s18-48", {
      topic: "First response to a medication error",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The prescription is morphine 2 mg IV every 3 hours as needed for pain. Ten minutes after giving a dose, the nurse realizes 4 mg was given. What should the nurse do first?",
      rationale:
        "The first priority after a medication error is the client's safety. Twice the prescribed morphine can cause sedation and slow breathing. The nurse assesses sedation, respiratory rate and SpO2 at once. The prescriber is then notified and the event is reported through the facility system. Reporting steps come after the client is assessed.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Complete an incident report", why: "Reporting is required but follows assessment of the client." },
      { text: "Notify the charge nurse of the error", why: "The charge nurse is informed after the client is checked." },
      { text: "Call the prescriber about the dose", why: "The prescriber needs assessment data, so assessment comes first." },
      { text: "Assess sedation and breathing", why: "Client safety comes first, and an opioid overdose shows as sedation and slow breathing." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-49", {
      topic: "Intramuscular antipsychotic volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with acute psychosis and severe agitation has a prescription for haloperidol lactate 2 mg IM now. The vial contains 5 mg/mL. What volume should the nurse draw up?",
      rationale:
        "The dose is 2 mg and the vial holds 5 mg in each mL. Dividing 2 mg by 5 mg/mL gives 0.4 mL. Haloperidol lactate is the short-acting injection. Haloperidol decanoate is a long-acting form and is not substituted. The nurse then watches for acute dystonia and low BP.",
      calc: { expr: "2 / 5", answer: 0.4, unit: "mL", round: 1, steps: ["2 / 5 = 0.4"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.04 mL", why: "This is one tenth of the correct volume from a misplaced decimal point." },
      { text: "0.4 mL", why: "2 mg divided by 5 mg/mL is 0.4 mL." },
      { text: "2.5 mL", why: "This divides 5 by 2, which inverts the formula." },
      { text: "4 mL", why: "This is 10 times the correct volume." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-50", {
      canada: "Health Canada's Drug Product Database lists Nimotop 30 mg tablets as the only nimodipine marketed in Canada. Capsules and the IV form are cancelled and no oral solution is sold, so the Canadian nurse asks the pharmacy how to give it by tube.",
      topic: "Nimodipine route safety",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 49-year-old client with an aneurysmal subarachnoid hemorrhage has a prescription for nimodipine 60 mg every 4 hours through a nasogastric tube. The unit stocks liquid-filled nimodipine capsules. What should the nurse do?",
      rationale:
        "Nimodipine helps prevent delayed brain ischemia after this bleed, so doses are given on time. It is given only by mouth or feeding tube. Capsule contents given IV have caused cardiac arrest and death. An oral solution made for tube use gives an accurate dose. Holding doses loses the protective effect. A liquid-filled capsule cannot be crushed.",
      sources: [HOH, LEHNE, { body: "Health Canada", work: "Drug Product Database: Nimotop (nimodipine) 30 mg tablets, DIN 02325926", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=81127" }],
    }),
    kind: "mc",
    options: [
      { text: "Draw the capsule liquid into a syringe and give it IV", why: "IV nimodipine from capsules has caused fatal cardiac events." },
      { text: "Ask the pharmacy for the oral solution for the tube", why: "The oral solution gives the correct enteral dose without opening capsules." },
      { text: "Hold doses until the client can swallow", why: "Missed doses lose protection against delayed brain ischemia." },
      { text: "Crush the capsule and mix it with water", why: "A liquid-filled capsule cannot be crushed and the dose would be lost." },
    ],
    correct: 1,
  },
];
