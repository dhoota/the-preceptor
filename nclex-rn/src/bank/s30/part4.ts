import type { Item } from "@/engine/types";
import { ABC_TRIAL, ABCDEF, ANA_CODE, GUIDO, HINKLE, HIPAA, MALNUTRITION, NCMEC, NPIAP, SCCM_ASPEN, ASHP_SHORTAGE, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s30-31", {
      need: "SIPC",
      topic: "Visitor behaviors on a maternity unit",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A postpartum nurse writes a note about a visitor seen on the unit during the evening and plans to share it with security. Click to highlight the findings that match warning behaviors of a possible infant abductor.",
      rationale:
        "Abductors often study the unit before acting. Questions about feeding times and where a stairwell leads, a wish to hold infants, scrubs without the facility photo badge and a large empty bag all match known warning behaviors. Signing the visitor log, knowing the mother's full name and leaving with family members are expected visitor conduct.",
      sources: [NCMEC],
    }),
    kind: "highlight",
    passage:
      "[[She signed the visitor log at 1830]]. [[She asked when the babies are taken to their mothers for feeding]]. [[She gave the mother's full name at the front desk]]. [[She asked where the stairwell beside room 14 leads]]. [[She wore scrubs but no hospital photo badge]]. [[She carried a large, empty gym bag]]. [[She asked a nurse if she could hold the babies in the nursery]]. [[She left the unit with the mother's parents at 1930]].",
    spans: [
      { text: "She signed the visitor log at 1830", why: "Signing in is expected visitor conduct." },
      { text: "She asked when the babies are taken to their mothers for feeding", why: "Questions about infant routines match the planning seen before abductions." },
      { text: "She gave the mother's full name at the front desk", why: "Knowing the mother's full name meets the usual visitor check." },
      { text: "She asked where the stairwell beside room 14 leads", why: "Abductors often plan an escape by a fire exit stairwell." },
      { text: "She wore scrubs but no hospital photo badge", why: "Abductors often pose as staff. Scrubs without the badge are a warning sign." },
      { text: "She carried a large, empty gym bag", why: "A large bag can be used to hide an infant." },
      { text: "She asked a nurse if she could hold the babies in the nursery", why: "Asking to see or hold infants who are not hers is a listed warning behavior." },
      { text: "She left the unit with the mother's parents at 1930", why: "Leaving with the family is ordinary visitor conduct." },
    ],
    correct: [1, 3, 4, 5, 6],
  },
  {
    ...meta("rn-s30-32", {
      need: "MOC",
      topic: "Capable client who wants her son to decide",
      cjmm: "analyze",
      process: "culture",
      difficulty: 4,
      stem: "A 78-year-old client with capacity is admitted with a new lung mass. Speaking privately through a professional interpreter, she tells the nurse, \"In my family, my eldest son hears the medical news and makes the choices. I want it that way.\" The son asks to meet the team tomorrow. What should the nurse do?",
      rationale:
        "Respect for autonomy includes respect for a client's chosen way of making decisions. Many cultures place decisions with the family. The client chose this freely, in private and through a trained interpreter. The nurse documents her wish so the team can share information with the son. The team can still check her wishes over time and offer a form that names the son as her agent. Forcing the results on her overrides her choice.",
      sources: [ANA_CODE, HIPAA],
    }),
    kind: "mc",
    options: [
      { text: "Tell her the results first because she has capacity", why: "Capacity includes the right to choose how information is received. This overrides her stated wish." },
      { text: "Have the son sign a promise to repeat all news to her", why: "This imposes the team's view of disclosure over the client's own choice." },
      { text: "Document her wish and include the son as she directs", why: "Following her chosen decision process respects her autonomy and culture." },
      { text: "Hold all results until the ethics committee meets", why: "Her wish is clear and lawful, so delaying care for a committee is not needed." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s30-33", {
      need: "MOC",
      topic: "Legal surrogate versus family custom",
      cjmm: "prioritize",
      process: "culture",
      difficulty: 5,
      stem: "A 66-year-old client is sedated on a ventilator after a stroke and cannot make decisions. He has no advance directive and no named agent. State law ranks the spouse first among surrogates, then adult children. His eldest son says that in their culture the eldest son decides. The client's wife agrees she wants the son involved. Who should the team treat as the decision maker?",
      rationale:
        "When a client has no named agent, the surrogate is chosen by state law, which here ranks the spouse first. The wife remains the decision maker, and she can bring the son into every discussion as she wishes. Honoring the family's custom this way respects culture within the law. The son ranks below the spouse. A vote or a court appointment is not needed when a legal surrogate is present and willing.",
      sources: [GUIDO, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "The wife, who can include the son in each decision", why: "State law ranks the spouse first, and she can involve the son as she chooses." },
      { text: "The eldest son, because family custom places it with him", why: "Custom does not change the legal ranking that places the spouse first." },
      { text: "Whichever choice most family members vote for", why: "A family vote is not a legal way to choose a surrogate." },
      { text: "A guardian the court appoints for the client", why: "A court is not needed when the ranked surrogate is present and willing." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-34", {
      need: "MOC",
      topic: "Feeding shortfall from repeated holds",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A client in the intensive care unit receives enteral feeding prescribed at 60 mL each hour, a goal of 1440 mL a day. The nurse reviews the flow sheet for the past 4 days. Based on the trend, which action should the nurse take?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3", "Day 4"],
            rows: [
              ["Feeding delivered (mL)", "900", "780", "700", "640"],
              ["Hours feeding held for tests", "8", "10", "12", "13"],
              ["Weight (kg)", "70.0", "69.4", "68.8", "68.1"],
            ],
          },
        },
      ],
      rationale:
        "Delivered feeding fell from 900 to 640 mL a day, far below the 1440 mL goal. Hours held for tests rose from 8 to 13, and weight fell from 70.0 to 68.1 kg. The plan is not meeting its goal. The dietitian can reassess needs and recommend a different approach, such as a volume-based plan with fewer holds. Raising the rate without a prescription or waiting a week is unsafe.",
      sources: [SCCM_ASPEN],
    }),
    kind: "mc",
    options: [
      { text: "Raise the pump rate to 120 mL/hour to catch up", why: "A rate change needs a prescription or an approved protocol." },
      { text: "Ask the dietitian to reassess the feeding plan", why: "Falling delivery and weight show the plan is failing and needs expert review." },
      { text: "Continue the plan and recheck the weight next week", why: "Delivery has fallen every day, so waiting lets the deficit grow." },
      { text: "Stop the feeding until the tests are finished", why: "More time without feeding would widen the shortfall." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s30-35", {
      need: "MOC",
      topic: "Admission cues for a dietitian assessment",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse reviews admission data for clients on a medical unit. Which two findings should prompt the nurse to request a dietitian assessment for malnutrition? Select two.",
      rationale:
        "A fall from 80 kg to 75 kg in 1 month is a loss of more than 5%. Eating under half of each meal for 8 days is well below 75% of need for more than 7 days. Both meet consensus characteristics of malnutrition. A loss of under 1 kg from 80 kg is about one percent. Albumin reflects inflammation and is not a marker of malnutrition. A body mass index of 27 and eating 90% of meals do not suggest it.",
      refs: [
        "Weight loss of 5% in 1 month and energy intake below 75% of need for more than 7 days are characteristics of malnutrition in acute illness.",
        "Serum albumin and prealbumin are not recommended as markers of malnutrition.",
      ],
      sources: [MALNUTRITION],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Weight fell from 80 kg to 75 kg over the past month", why: "A loss of 5 kg from 80 kg is more than 5% in a month." },
      { text: "Serum albumin is 3.3 g/dL (33 g/L)", why: "Albumin falls with inflammation and does not identify malnutrition." },
      { text: "Has eaten under half of each meal for 8 days", why: "Intake far below 75% of need for more than 7 days is a malnutrition cue." },
      { text: "Weight fell from 80 kg to 79.2 kg over the past month", why: "A loss under 1 kg is about one percent and does not meet the criterion." },
      { text: "Body mass index is 27", why: "Body mass index alone does not identify malnutrition." },
      { text: "Eats 90% of meals and snacks between them", why: "Intake of 90% meets need and is not a cue." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s30-36", {
      need: "MOC",
      topic: "Energy from a substitute tube feeding",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "During a shortage of a client's usual tube feeding formula, which provided 1 kcal/mL at 60 mL/hour, the dietitian substitutes a formula with 1.5 kcal/mL. The new prescription is 40 mL/hour for 24 hours. How many kcal will the client receive each day?",
      rationale:
        "The new formula gives 1.5 kcal in each mL. At 40 mL/hour for 24 hours the client receives 960 mL, which supplies 1440 kcal. That matches the 1440 kcal the old formula gave at 60 mL/hour. A substitute product during a shortage keeps the energy dose the same only when the rate is recalculated.",
      calc: { expr: "1.5 * 40 * 24", answer: 1440, unit: "kcal", round: 0, steps: ["40 * 24 = 960", "960 * 1.5 = 1440"] },
      sources: [ASHP_SHORTAGE, SCCM_ASPEN],
    }),
    kind: "mc",
    options: [
      { text: "960 kcal", why: "This counts the 960 mL volume but leaves out the 1.5 kcal/mL density." },
      { text: "1440 kcal", why: "40 mL/hour for 24 hours is 960 mL, and 960 mL at 1.5 kcal/mL is 1440 kcal." },
      { text: "2160 kcal", why: "This applies the new density to the old rate of 60 mL/hour." },
      { text: "2400 kcal", why: "This multiplies 40 mL/hour by 60 instead of by 24 hours and ignores the density." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s30-37", {
      need: "MOC",
      topic: "Nose bridge injury under a ventilation mask",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 71-year-old client with COPD has used noninvasive ventilation by full face mask for 3 days. The straps are pulled tight to stop leaks. The nurse finds a 1 cm area of nonblanchable redness on the bridge of the nose. The client says the mask hurts and keeps asking to remove it. SpO2 is 91% and respirations are 20/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Nonblanchable redness under a tight mask on day 3 is a device-related pressure injury. Pain from the mask also threatens adherence to therapy. The respiratory therapist can refit the interface or change its size or type. A prophylactic foam dressing under the device spreads the pressure. The skin under the mask and the leak and SpO2 are checked as the fit changes. Tighter straps and massage add injury. Stopping therapy needs a prescription.",
      sources: [NPIAP, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Worsening hypercapnic respiratory failure", why: "Respirations of 20/minute and SpO2 of 91% do not show worsening failure." },
      { text: "Allergic contact dermatitis", why: "A single pressure point on the nose bridge fits pressure, not an allergy." },
      { text: "Device-related pressure injury", why: "Nonblanchable redness under a tight mask is pressure damage from the device." },
      { text: "Claustrophobic panic attack", why: "The client asks to remove the mask because it hurts, not from panic." },
    ],
    actions: [
      { text: "Tighten the straps to stop the leaks", why: "More pressure would deepen the injury." },
      { text: "Ask the respiratory therapist to refit the mask", why: "A refit or another interface relieves the pressure point." },
      { text: "Stop the ventilation for the night", why: "Stopping therapy needs a prescription and risks respiratory decline." },
      { text: "Massage the reddened skin every 2 hours", why: "Massage over a pressure injury damages the tissue further." },
      { text: "Pad the nose bridge with a foam dressing", why: "A prophylactic dressing under a device spreads pressure and reduces friction." },
    ],
    parameters: [
      { text: "Skin under the mask", why: "Skin under a device is inspected often to catch further damage." },
      { text: "Serum glucose level", why: "Glucose does not guide care of a device injury." },
      { text: "Urine specific gravity", why: "Urine concentration does not show mask fit or skin damage." },
      { text: "Mask leak and SpO2", why: "A new fit must still seal well enough to keep oxygenation." },
      { text: "Hemoglobin level", why: "Hemoglobin does not guide mask fit or pressure relief." },
    ],
    correct: { condition: 2, actions: [1, 4], parameters: [0, 3] },
  },
  {
    ...meta("rn-s30-38", {
      need: "MOC",
      topic: "Conflicting weight-bearing instructions",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A client is on day 1 after open reduction of a left ankle fracture. The surgeon's prescription allows weight bearing as tolerated on the left leg. The physical therapist's note from this morning says non-weight bearing on the left leg, per the surgeon. The client asks the nurse for help walking to the bathroom with a walker. What should the nurse do?",
      rationale:
        "The prescription and the therapy note disagree on how much weight the repaired ankle can take. The note may reflect a verbal change that was never entered, or it may be an error. Walking on the wrong status could damage the repair. The nurse clarifies with the surgeon before the client walks and can offer a bedside commode meanwhile. Neither document can be assumed correct.",
      sources: [HINKLE, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Follow the prescription because it outranks a therapy note", why: "The note may record a newer instruction from the surgeon, so the conflict must be resolved." },
      { text: "Follow the therapy note because it was written later", why: "A therapy note is not a prescription, and it may contain an error." },
      { text: "Let the client decide how much weight feels safe", why: "Pain is not a reliable guide to what the repair can tolerate." },
      { text: "Clarify the weight-bearing status with the surgeon first", why: "Only the surgeon can settle the conflict before the ankle bears weight." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s30-39", {
      need: "MOC",
      topic: "Pairing awakening and breathing trials",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on a ventilator receives a continuous propofol infusion. The unit uses a paired protocol for daily spontaneous awakening and breathing trials. This morning the client passes the safety screen for the awakening trial. Which action should the nurse take?",
      rationale:
        "In the paired protocol the nurse stops sedation for the awakening trial first. When the client wakes and passes, the respiratory therapist screens for and runs the breathing trial. Pairing the trials shortened time on the ventilator and in intensive care in a randomized trial. A breathing trial under full sedation is less likely to succeed. Waiting for rounds loses a day of progress.",
      sources: [ABC_TRIAL, ABCDEF],
    }),
    kind: "mc",
    options: [
      { text: "Pause the propofol and update the respiratory therapist", why: "The awakening trial comes first and sets up the therapist's breathing trial." },
      { text: "Ask the respiratory therapist to start the trial on sedation", why: "Running the breathing trial under full sedation defeats the pairing." },
      { text: "Wait for the breathing trial before pausing sedation", why: "The protocol orders the awakening trial before the breathing trial." },
      { text: "Keep the propofol running until the provider rounds", why: "The client passed the screen, so waiting delays liberation from the ventilator." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s30-40", {
      need: "MOC",
      topic: "Team roles for first mobility on a ventilator",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client on day 4 of mechanical ventilation is awake, follows commands and meets the unit's criteria for early mobility. Staff available include a respiratory therapist (RT), a physical therapist (PT) and an assistive personnel (AP). The client will sit on the edge of the bed for the first time. Which team plan is safest?",
      rationale:
        "Early mobility on a ventilator is a team task. The respiratory therapist secures the airway and manages the ventilator. The physical therapist guides the movement. The nurse watches lines, tubes and vital signs and stops the session if the client becomes unstable. Moving alone, disconnecting the ventilator or calling for help only after an alarm puts the airway at risk.",
      sources: [ABCDEF, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Nurse moves the client alone while the RT is at lunch", why: "One person cannot protect the airway and lines during a first sit." },
      { text: "PT moves the client with the ventilator briefly disconnected", why: "Disconnecting the ventilator interrupts support and adds risk." },
      { text: "RT secures the airway, PT guides, nurse monitors lines", why: "Each discipline covers a risk, so the airway, the move and the lines are all managed." },
      { text: "AP and nurse move the client and call RT if alarms sound", why: "Waiting for an alarm means the airway is unprotected during the move." },
    ],
    correct: 2,
  },
];
