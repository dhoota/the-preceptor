import type { Item } from "@/engine/types";
import { AAP_ABUSE, DSM, GIGER, HALTER, HOCKENBERRY, POTTER, TIP63, TOWNSEND, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s12-21", {
      topic: "Checking understanding of an abuse safety plan",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 36-year-old client whose partner hit her last night makes a safety plan with the emergency department nurse. She plans to stay in the home for now. Which statement by the client shows understanding of the plan?",
      rationale:
        "A safety plan prepares a person to leave fast if violence starts again. Keeping copies of papers, money and keys with a trusted person makes a quick exit possible. Warning the partner before leaving raises the risk of harm. A kitchen holds knives and other weapons, so it is a poor place to go during an attack. The client should call for help as soon as she feels in danger.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"My sister will keep a bag with my papers.\"", why: "A bag with key documents at a safe place lets her leave quickly if needed." },
      { text: "\"I will tell him I am leaving so he can adjust.\"", why: "Announcing a plan to leave can provoke violence. Leaving is the most dangerous time." },
      { text: "\"I will go into the kitchen if he gets angry.\"", why: "A kitchen holds knives and other weapons. A room with an exit and no weapons is safer." },
      { text: "\"I will wait to call 911 until he hits me again.\"", why: "She should call for help as soon as she feels in danger, before an assault." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s12-22", {
      topic: "Charting suspected child abuse",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 6-year-old child in the emergency department has several round burns 8 mm wide on the back. The mother says the child fell against a space heater. The nurse suspects abuse. How should the nurse document the findings?",
      rationale:
        "Documentation in suspected abuse must be objective and exact. The nurse records the size, shape, color and site of each burn. The caregiver's account is written in quotation marks, word for word. The nurse does not write a conclusion such as abuse, because that is not a nursing finding. The nurse also does not adopt the caregiver's explanation as fact. Notes are written at the time of care, not after discharge.",
      sources: [AAP_ABUSE, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Record \"burns from abuse\" as the finding", why: "This states a conclusion rather than an objective finding." },
      { text: "Record the mother's account as the likely cause", why: "Round burns do not match a fall against a heater. The account is quoted, not adopted." },
      { text: "Describe size and site, and quote the mother", why: "Objective measurements and the caregiver's exact words make the record accurate." },
      { text: "Summarize the findings after the child leaves", why: "Late notes lose detail. Findings are recorded at the time of the assessment." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-23", {
      topic: "Illness induced in a child by a caregiver",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 3-year-old child has had 6 admissions in 4 months for vomiting and low blood glucose. The episodes happen only when the mother is alone with the child. They stop when staff watch the child around the clock. The mother is calm, uses medical terms easily and asks for more tests. Which condition should the nurse suspect?",
      rationale:
        "Symptoms that occur only when one caregiver is alone with the child and stop under close watch point to illness caused by that caregiver. A caregiver who seems at ease, knows medical terms and seeks more tests fits factitious disorder imposed on another. A metabolic disorder would not stop because staff are watching. An anxious parent does not cause symptoms. Somatic symptom disorder concerns a person's own symptoms.",
      sources: [DSM, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Parent anxiety about a chronic illness", why: "Anxiety does not produce symptoms that stop only when staff watch the child." },
      { text: "Factitious disorder imposed on another", why: "A caregiver who secretly causes illness fits the timing tied to her being alone with the child." },
      { text: "Somatic symptom disorder in the mother", why: "Somatic symptom disorder involves distress about one's own symptoms, not a child's." },
      { text: "An inherited metabolic disorder not yet found", why: "A metabolic disorder would not stop because the child is watched." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-24", {
      topic: "Care planning for an observant Jewish client",
      cjmm: "generate",
      process: "culture",
      difficulty: 2,
      stem: "A 72-year-old client who is an Orthodox Jew is admitted on a Thursday with heart failure. He keeps kosher dietary laws and observes the Sabbath from Friday sundown to Saturday sundown. Which actions should the nurse plan? Select all that apply.",
      rationale:
        "Kosher meals meet his dietary law. Practice varies between people, so the nurse asks which Sabbath customs he follows. Some observant clients do not operate electric devices on the Sabbath, so staff can offer to manage lights. Elective tests can be timed outside the Sabbath. Kosher law separates meat and dairy. Jewish law places the saving of life above Sabbath rules, so needed treatment such as a diuretic is not delayed.",
      sources: [GIGER],
    }),
    kind: "sata",
    options: [
      { text: "Serve meat and dairy items on one tray", why: "Kosher law keeps meat and dairy apart, so they are not served together." },
      { text: "Order kosher meals from dietary services", why: "Kosher meals let him follow his dietary law in hospital." },
      { text: "Hold his diuretic until the Sabbath ends", why: "Needed treatment for heart failure is not delayed. Preserving life overrides Sabbath rules." },
      { text: "Ask which Sabbath practices he follows", why: "Practice differs between people, so the nurse asks rather than assumes." },
      { text: "Offer to turn lights on and off for him", why: "Some observant clients do not operate electric devices on the Sabbath." },
      { text: "Plan elective tests outside the Sabbath", why: "Timing nonurgent tests around the Sabbath respects his practice safely." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s12-25", {
      topic: "Family wish to hold back a diagnosis",
      cjmm: "action",
      process: "culture",
      difficulty: 4,
      stem: "A 68-year-old client who emigrated from China is admitted with a new lung mass. She speaks English well. Her son asks the nurse to give the family the biopsy results first so they can decide what to tell her. What should the nurse do first?",
      rationale:
        "In some cultures families shield an ill relative from bad news. The client still has the right to decide how she receives her own information. The nurse first asks the client, in private, whom she wants to receive her results. She may choose to be told herself, or she may choose to have her son told. Agreeing with the son or quoting the law skips her voice. Telling her the son wants to hide results harms family trust.",
      sources: [GIGER],
    }),
    kind: "mc",
    options: [
      { text: "Agree to give the results to the son first", why: "This lets the family decide without first learning the client's wishes." },
      { text: "Explain that the law requires telling her first", why: "Quoting rules dismisses the family's values and does not ask the client." },
      { text: "Tell the client that her son wants to hide results", why: "This damages family trust and is not needed to learn her wishes." },
      { text: "Ask the client whom she wants to get her results", why: "The client decides how she receives her own health information." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-26", {
      topic: "Steps of systematic desensitization",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 24-year-old client has a fear of needles so strong that he has avoided blood tests for 5 years. The nurse assists with a systematic desensitization program. Place the steps in the order they are carried out.",
      rationale:
        "Systematic desensitization pairs relaxation with gradual exposure. The client first learns a relaxation skill. Next the client ranks feared situations from least to most distressing. Exposure starts with the least feared item while the client stays relaxed. The client moves up the list only when each step causes little anxiety. The last step is the real blood draw. Starting with the most feared item is flooding. A sedative blocks the learning that exposure needs.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Rank feared situations from least to most", why: "The ranked list guides exposure and is built after relaxation is learned." },
      { text: "Start exposure with the most feared item", why: "Starting at the top of the list is flooding, a different method." },
      { text: "Teach a relaxation technique", why: "Relaxation comes first so the client has a response that competes with fear." },
      { text: "Have a real blood draw while relaxed", why: "The real feared event comes last, after the lower steps stay calm." },
      { text: "Picture the least feared item while relaxed", why: "Exposure begins at the bottom of the ranked list." },
      { text: "Give a sedative before each exposure session", why: "Sedation blunts the anxiety the client needs to learn to manage." },
      { text: "Move up a step once the last one stays calm", why: "The client advances only after mastering each lower step." },
    ],
    correct: [2, 0, 4, 6, 3],
  },
  {
    ...meta("rn-s12-27", {
      topic: "Sensory deprivation during isolation",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 84-year-old client on contact precautions has been in a single room for 9 days. The client wears hearing aids and has had no visitors. The client dozes most of the day and says the days blur together. Which intervention should the nurse add to the plan of care?",
      rationale:
        "Isolation, few visitors and hearing loss reduce meaningful input. The client now dozes by day and has lost track of time, which fits sensory deprivation. Planned conversation and activity by day restore stimulation and orientation. A dark room by day deepens the problem. Fewer staff visits cut contact further. A hypnotic adds sedation and risk in an older adult without treating the cause.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Plan regular talks and activity each day", why: "Meaningful daytime contact and activity counter sensory deprivation." },
      { text: "Keep the room dark to promote daytime rest", why: "Darkness by day removes cues and deepens the loss of time sense." },
      { text: "Limit staff entry to reduce infection spread", why: "Contact precautions allow care. Fewer visits add to the deprivation." },
      { text: "Offer a hypnotic at bedtime to reset sleep", why: "A hypnotic adds fall and confusion risk and does not treat the lack of input." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s12-28", {
      topic: "Supporting parents in neonatal intensive care",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "The parents of a newborn born at 28 weeks visit the neonatal intensive care unit for the first time. The mother cries and says, \"I don't even feel like his mother. I can't hold him.\" Which two actions by the nurse best support the parents' coping? Select two.",
      rationale:
        "Parents of a preterm infant often feel helpless and cut off from their baby. Taking part in care, such as touch and simple tasks, builds attachment and a sense of being a parent. Plain explanations of the equipment reduce fear of the setting. Shorter visits and rest at home keep the parents apart from the infant. General reassurance does not address the mother's feeling. Leaving them alone withdraws support at a hard moment.",
      sources: [HOCKENBERRY],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Suggest shorter visits until he is stable", why: "Less contact deepens the sense of separation the mother describes." },
      { text: "Show them how to touch him and help with care", why: "Taking part in care builds attachment and a sense of being his parent." },
      { text: "Tell them most babies his age do well", why: "General reassurance does not address her feeling and may not fit this infant." },
      { text: "Leave them alone to take in the scene", why: "Parents need guidance on a first visit. Leaving withdraws support." },
      { text: "Explain his equipment in plain words", why: "Understanding the monitors and tubes lowers fear of the setting." },
      { text: "Advise the mother to rest at home for now", why: "Staying away keeps her apart from the infant she wants to feel close to." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s12-29", {
      topic: "Pain care for a client on methadone maintenance",
      cjmm: "action",
      process: "teaching",
      difficulty: 4,
      stem: "A 45-year-old client who takes methadone 80 mg daily for opioid use disorder is on day 1 after open abdominal surgery. The client rates incision pain 8 on a 0 to 10 scale and asks the nurse whether the methadone will be stopped. Which response by the nurse is accurate?",
      rationale:
        "The daily maintenance dose prevents withdrawal and keeps recovery stable. It does not treat new surgical pain, because tolerance develops to its pain relief. Acute pain is treated in addition to the usual dose, often with higher opioid doses and non-opioid drugs. Stopping methadone would cause withdrawal and worsen pain. Limiting the client to non-opioids leaves pain of 8 undertreated.",
      sources: [TIP63],
    }),
    kind: "mc",
    options: [
      { text: "\"It will be stopped while you get other opioids.\"", why: "Stopping methadone causes withdrawal and destabilizes recovery." },
      { text: "\"Your usual dose will also cover this pain.\"", why: "Tolerance means the maintenance dose does not relieve new surgical pain." },
      { text: "\"It continues, and your pain is treated on top.\"", why: "The maintenance dose continues and acute pain gets added treatment." },
      { text: "\"Only non-opioid pain drugs can be used for you.\"", why: "Opioids may be needed for this pain. Limiting to non-opioids undertreats it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-30", {
      topic: "Nicotine withdrawal in hospital",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 1,
      stem: "A 50-year-old client who smoked 30 cigarettes a day is on day 2 of a hospital stay without nicotine replacement. Which findings should the nurse recognize as signs of nicotine withdrawal? Select all that apply.",
      rationale:
        "Stopping heavy smoking abruptly causes irritability, trouble concentrating, increased appetite and restlessness. These start within a day of the last cigarette. Yawning with a runny nose suggests opioid withdrawal. A fast heart rate with tremor fits alcohol withdrawal. Nicotine withdrawal tends to slow the heart. Hallucinations are not part of nicotine withdrawal.",
      sources: [DSM],
    }),
    kind: "sata",
    options: [
      { text: "Irritable over small delays", why: "Irritability is a common sign of nicotine withdrawal." },
      { text: "Yawning with a runny nose", why: "Yawning and a runny nose point to opioid withdrawal." },
      { text: "Trouble focusing on teaching", why: "Poor concentration is a recognized sign of nicotine withdrawal." },
      { text: "Heart rate 124/minute with tremor", why: "A fast pulse with tremor fits alcohol withdrawal. Nicotine withdrawal tends to slow the heart." },
      { text: "Asks for extra snacks", why: "Increased appetite is a sign of nicotine withdrawal." },
      { text: "Visual hallucinations at night", why: "Hallucinations are not part of nicotine withdrawal." },
      { text: "Restless, cannot sit still", why: "Restlessness is a sign of nicotine withdrawal." },
    ],
    correct: [0, 2, 4, 6],
  },
];
