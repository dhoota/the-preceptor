import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c12-5";

/** Case 5. Orthopedic unit. Older woman on the first morning after a joint replacement. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "First Morning on the Orthopedic Unit",
  intro:
    "A 71-year-old woman had a right total knee replacement under spinal anesthesia yesterday at 1000. It is now 0700 on day 1 after surgery. She lives alone in a one-story house and walked with a cane before surgery.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Hypertension treated with metoprolol. Type 2 diabetes.",
        "Preoperative hemoglobin 12.4 g/dL (124 g/L).",
        "Estimated blood loss in surgery 350 mL.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0700 lying"],
        rows: [
          ["Temperature", "37.3°C (99.1°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "128/74 mmHg"],
          ["SpO2", "96% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Fall risk cues after joint replacement",
        cjmm: "recognize",
        difficulty: 3,
        refs: ["Orthostatic hypotension is a fall in systolic BP of at least 20 mmHg or diastolic BP of at least 10 mmHg within 3 minutes of standing."],
        stem: "At 0730 the nurse helps the client stand at the bedside with a walker for the first time. The nurse documents the note below. Click to highlight the findings that raise the client's risk for a fall.",
        rationale:
          "Her systolic BP fell from 128 to 102 mmHg within 1 minute of standing, which meets the definition of orthostatic hypotension. The heart rate rose from 84 to 104/minute. Lightheadedness on standing shows poor blood flow to the brain. Oxycodone at 0600 adds sedation. Wanting to walk alone to the bathroom adds risk. Alertness, a dry dressing, a warm foot and pain of 3 do not raise the risk.",
        sources: [SRC.orthostatic, SRC.falls],
      }),
      kind: "highlight",
      passage:
        "[[Alert and oriented]]. [[Says she feels lightheaded when she stands]]. [[BP 102/62 mmHg after 1 minute of standing]]. [[Heart rate 104/minute standing]]. [[Dressing dry and intact]]. [[Right foot warm with brisk capillary refill]]. [[Received oxycodone 5 mg by mouth at 0600]]. [[Pain 3 of 10 at rest]]. [[Says she will walk to the bathroom alone later]].",
      spans: [
        { text: "Alert and oriented", why: "Normal orientation does not add to her fall risk." },
        { text: "Says she feels lightheaded when she stands", why: "Lightheadedness on standing reflects poor blood flow to the brain and can cause a fall." },
        { text: "BP 102/62 mmHg after 1 minute of standing", why: "A systolic fall from 128 to 102 mmHg meets the definition of orthostatic hypotension." },
        { text: "Heart rate 104/minute standing", why: "The rise from 84/minute shows the heart making up for low pressure on standing." },
        { text: "Dressing dry and intact", why: "A dry dressing is expected and does not add to fall risk." },
        { text: "Right foot warm with brisk capillary refill", why: "Good circulation to the foot is expected and does not add to fall risk." },
        { text: "Received oxycodone 5 mg by mouth at 0600", why: "An opioid given earlier this morning can add sedation and dizziness." },
        { text: "Pain 3 of 10 at rest", why: "Mild pain at rest is expected and does not add to fall risk." },
        { text: "Says she will walk to the bathroom alone later", why: "Walking without help after a new joint replacement raises the fall risk." },
      ],
      correct: [1, 2, 3, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Recognizing incomplete or unsafe prescriptions",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the client's postoperative prescriptions. For each prescription, specify whether it can be carried out as written or needs clarification with the prescriber.",
        rationale:
          "An as needed prescription must state how often the dose can be given, so the ondansetron needs clarification. The letter U for units can be misread as a zero, so the insulin prescription needs rewriting. A trailing zero, as in 2.0 mg, can be misread as a tenfold dose. The enoxaparin dose matches the labeled dose after knee replacement. The cefazolin and activity prescriptions are complete.",
        sources: [SRC.ismp, SRC.potter, SRC.enoxaparin, { body: "Institute for Safe Medication Practices Canada", work: "Do Not Use: Dangerous Abbreviations, Symbols, and Dose Designations, 2025 Update. ISMP Canada Safety Bulletin 25(5)", year: 2025, url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2025-i5-Do-Not-Use.pdf" }],
        canada:
          "Canadian facilities use the ISMP Canada Do Not Use list, updated in 2025. It also lists U for units and trailing zeros and advises writing units in full.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Carry out as written", "Needs clarification"],
      rows: [
        { text: "Enoxaparin 30 mg subcutaneous every 12 hours", correct: [0], why: "This is the labeled dose and frequency after knee replacement." },
        { text: "Ondansetron 4 mg IV as needed", correct: [1], why: "The prescription gives no frequency or reason for use." },
        { text: "Insulin lispro 4 U subcutaneous before meals", correct: [1], why: "The letter U can be read as a zero, which multiplies the dose tenfold." },
        { text: "Cefazolin 2 g IV every 8 hours for 2 doses", correct: [0], why: "The drug, dose, route, frequency and duration are all stated." },
        { text: "Weight bearing as tolerated on the right leg with a walker", correct: [0], why: "The activity, limb and device are all stated." },
        { text: "Morphine 2.0 mg IV every 3 hours as needed for severe pain", correct: [1], why: "A missed decimal point after a trailing zero gives a tenfold overdose." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting priorities after a near fall",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The client is back in bed. At 0900 her hemoglobin result is 9.1 g/dL (91 g/L). Her enoxaparin dose is due. She asks the nurse about her home exercises. The case manager asks to discuss walker delivery. Which action should the nurse take first?",
        rationale:
          "Her hemoglobin has fallen from 12.4 to 9.1 g/dL with orthostatic hypotension and a rising heart rate on standing. These findings can mean ongoing blood loss, so she needs a focused assessment first. The findings will guide whether the anticoagulant is given or held. Exercise teaching and the walker delivery can wait until she is assessed.",
        sources: [SRC.brunner, SRC.enoxaparin, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada:
          "Canadian labs report hemoglobin only in g/L, so it fell from 124 to 91 g/L. The Medical Council of Canada lists the adult female range as 115 to 155 g/L.",
      }),
      kind: "mc",
      options: [
        { text: "Assess the client for signs of bleeding", why: "A falling hemoglobin with orthostatic changes needs assessment before anything else." },
        { text: "Give the scheduled enoxaparin dose", why: "An anticoagulant given during possible blood loss can worsen bleeding. Assessment comes first." },
        { text: "Review her home exercise program", why: "Teaching can wait until her condition is assessed and stable." },
        { text: "Meet the case manager about the walker", why: "Discharge equipment can wait until the possible bleeding is assessed." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PSY",
        topic: "Responding to fear of falling",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "Later the client says, \"I'm afraid to stand up again. My sister fell after her hip surgery and never walked again.\" Which two responses should the nurse plan to use? Select two.",
        rationale:
          "Reflecting her fear shows she has been heard. An open question invites her to name what worries her most. False reassurance and comparisons with her sister dismiss her feelings. Threats about going home add pressure and damage trust. Stopping walking gives in to the fear and raises the risk of clots and stiffness.",
        sources: [SRC.halter],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Don't worry, a knee heals faster than a hip.\"", why: "False reassurance dismisses her fear and ends the conversation." },
        { text: "\"You're afraid you might fall like your sister.\"", why: "Reflecting her feeling shows she has been heard and invites her to say more." },
        { text: "\"You must walk today if you want to go home.\"", why: "A threat adds pressure and does not address her fear." },
        { text: "\"Your sister's case was different from yours.\"", why: "This dismisses her concern without exploring it." },
        { text: "\"What worries you most about standing up?\"", why: "An open question helps her name the fear so it can be addressed." },
        { text: "\"Let's skip walking until you feel ready.\"", why: "Avoiding walking raises the risk of clots and a stiff knee." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Structured report to the surgeon",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "At 0915 the nurse finds the dressing dry and the thigh soft. The nurse calls the surgeon about the hemoglobin and the BP changes. Place a statement in each part of the report.",
        rationale:
          "The situation states the problem now: dizziness on standing and a hemoglobin of 9.1 g/dL (91 g/L). The background gives the surgery, the day and the anticoagulant. The assessment states the nurse's concern about blood loss. The recommendation asks for a review and advice about the enoxaparin dose. Breakfast intake and family visits do not help the surgeon decide.",
        sources: [SRC.sbar],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Situation", "Background", "Assessment", "Recommendation"],
      tokens: [
        { text: "I think she may be losing blood and is low on volume.", why: "This is the nurse's view of the problem, which belongs in the assessment." },
        { text: "Her daughter plans to visit her after work this evening.", why: "Visiting plans do not help the surgeon make a decision." },
        { text: "She is dizzy on standing and her hemoglobin is 9.1 g/dL (91 g/L).", why: "This states the current problem, which belongs in the situation." },
        { text: "Please see her soon and advise me on the enoxaparin dose.", why: "This asks for a specific action, which belongs in the recommendation." },
        { text: "She is 71, on day 1 after a right knee replacement, on enoxaparin.", why: "This gives the context, which belongs in the background." },
        { text: "She ate half of her breakfast and drank a cup of tea.", why: "Breakfast intake does not change the decision the surgeon faces." },
      ],
      correct: [2, 4, 0, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Home recovery after knee replacement",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Her condition is stable by day 3 and she is going home. The nurse evaluates the discharge teaching. For each statement by the client, specify whether it shows understanding or needs further teaching.",
        refs: ["After knee replacement, a temperature over 37.8°C (100.0°F), new calf pain or swelling, and wound drainage are reported."],
        rationale:
          "Removing loose rugs and using the walker until cleared lower the risk of a fall. A fever over 37.8°C and wound drainage are signs of infection that need a call. New calf swelling can be a blood clot and needs prompt review, not just elevation. A pillow under the knee holds it bent and can limit straightening. Exercises follow the therapy plan, with pain medicine beforehand if needed.",
        sources: [SRC.aaosTkr, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will take the loose rugs out of my hallway.\"", correct: [0], why: "Loose rugs are a trip hazard while she walks with a walker." },
        { text: "\"New swelling in my calf is normal, so I will just raise my leg.\"", correct: [1], why: "New calf swelling can signal a blood clot and needs prompt review." },
        { text: "\"I will use my walker until my therapist says I can stop.\"", correct: [0], why: "A walker supports balance until strength returns." },
        { text: "\"I will keep a pillow under my knee to keep it bent.\"", correct: [1], why: "Keeping the knee bent can limit its ability to straighten." },
        { text: "\"I will call if the wound drains or my temperature is over 37.8°C (100.0°F).\"", correct: [0], why: "Drainage and fever can be signs of a wound infection." },
        { text: "\"I will do my exercises only on days with no pain.\"", correct: [1], why: "Exercises follow the therapy plan. Pain medicine before exercise helps her do them." },
      ],
    },
  ],
};
