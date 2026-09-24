import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c08-2";

/** Case 2. Pediatric unit. Adolescent boy with a casted lower leg fracture. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Casted Leg on the Pediatric Unit",
  intro:
    "A 14-year-old boy is admitted to the pediatric unit after a fall from his bike. He has a closed fracture of the left tibia and fibula. A long leg cast was applied in the emergency department at 1400. His mother is with him.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Healthy. No known allergies. Immunizations up to date.",
        "Plays on his school soccer team. In grade 9.",
        "Lives with his mother and an older sister.",
        "Weight 52 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Elevate the left leg on pillows.",
        "Neurovascular checks of the left leg every hour.",
        "Morphine 3 mg IV every 2 hours as needed for severe pain.",
        "Ibuprofen 400 mg by mouth every 6 hours as needed for mild pain.",
        "Regular diet.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1600", "2000"],
        rows: [
          ["Temperature", "37.0°C (98.6°F)", "37.1°C (98.8°F)"],
          ["Heart rate", "92/minute", "104/minute"],
          ["Respiratory rate", "18/minute", "20/minute"],
          ["BP", "118/70 mmHg", "124/74 mmHg"],
          ["Pain", "5 of 10", "8 of 10"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Neurovascular findings under a cast",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 2200 the boy is crying and says his leg hurts more than before. He received IV morphine at 1730, 1930 and 2130. The nurse checks the left leg. Which three findings require immediate follow-up? Select three.",
        rationale:
          "Pain that keeps rising despite morphine at 1730, 1930 and 2130 is an early warning sign in children. Sharp pain when the toes are moved passively stretches ischemic muscle. Tingling on the top of the foot shows pressure on a nerve. A strong pulse, pink toes and a dry cast do not rule out raised compartment pressure. Pulses often stay present until late.",
        refs: ["In children, rising anxiety, agitation and analgesic need are early signs of compartment syndrome."],
        sources: [SRC.hak, SRC.bae, SRC.brunner],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Left dorsalis pedis pulse 2+ and equal", why: "Pulses often remain until late and do not rule out rising pressure." },
        { text: "Pain rising despite three morphine doses", why: "A rising analgesic need is an early sign of compartment syndrome in children." },
        { text: "Left toes pink and warm to the touch", why: "Pink, warm toes show arterial flow and are expected." },
        { text: "Sharp pain when his toes are moved", why: "Pain on passive stretch suggests ischemic muscle inside a tight compartment." },
        { text: "Tingling on the top of the foot", why: "New tingling shows pressure on a nerve that runs through the compartment." },
        { text: "Cast edges dry and smooth without cracks", why: "A dry, intact cast is expected and needs no follow-up." },
      ],
      correct: [1, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Mechanism of limb pain after casting",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse considers what the leg findings mean. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Pain out of proportion to the injury, pain on passive toe movement and new tingling fit acute compartment syndrome. Swelling inside a closed fascial space and a rigid cast raise pressure until it blocks capillary flow to muscle and nerve. A calf clot causes aching and swelling but not this pattern. A 2+ pulse and pink toes argue against an arterial tear. A pressure sore under a cast causes local burning pain, not tingling.",
        sources: [SRC.brunner, SRC.hak],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The findings are most consistent with {0} caused by {1}.",
      blanks: [
        {
          options: [
            { text: "deep vein thrombosis", why: "A calf clot causes aching and swelling but not pain on passive toe movement with tingling." },
            { text: "acute arterial injury", why: "The pedal pulse is 2+ and the toes are pink, so arterial flow is intact." },
            { text: "acute compartment syndrome", why: "Pain beyond the injury, pain on passive stretch and tingling fit this condition." },
            { text: "a cast pressure sore", why: "A pressure sore causes local burning under the cast, not nerve symptoms." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "rising pressure within a muscle compartment", why: "Pressure inside the closed fascial space cuts off capillary flow to muscle and nerve." },
            { text: "a clot blocking a deep calf vein", why: "A venous clot does not explain nerve symptoms and pain on passive stretch." },
            { text: "a tear in the popliteal artery", why: "A torn artery would reduce the pulse and cool the foot." },
            { text: "skin breakdown under the cast", why: "Skin breakdown causes local pain and odor, not rising deep pain with tingling." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority concern in a casted limb",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "At 2215 the nurse reviews the boy's needs. His mother asks when he can eat a snack. He has not had a bowel movement since yesterday. Which concern should the nurse address first?",
        rationale:
          "Rising pressure inside the compartment can kill muscle and nerve within hours, so the threat to the leg comes first. Anxiety is real and needs attention, but it does not threaten tissue now. Skin breakdown under a cast develops over days. Constipation from morphine matters but is not urgent in the next hour.",
        sources: [SRC.brunner, SRC.bae],
      }),
      kind: "mc",
      options: [
        { text: "Loss of blood flow to the leg muscles", why: "Muscle and nerve can die within hours when compartment pressure rises." },
        { text: "Anxiety about being in the hospital", why: "Anxiety needs attention but does not threaten tissue in the next hour." },
        { text: "Risk for skin breakdown under the cast", why: "Skin breakdown under a cast develops over days, not hours." },
        { text: "Constipation from repeated morphine doses", why: "Opioid constipation matters but can wait until the leg is assessed." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Positioning and comfort while compartment syndrome is assessed",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse notifies the primary health care provider, who is coming to split the cast and assess the leg. For each measure, specify whether it is indicated or not indicated while the boy waits.",
        rationale:
          "The leg is lowered to heart level because raising it above the heart lowers arterial inflow to a tight compartment. Close neurovascular checks track progression. The time of his last meal matters if surgery follows. Music or other distraction adds comfort. Heat raises tissue metabolism and swelling. Walking on the fractured leg is unsafe and adds pressure.",
        sources: [SRC.brunner, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Indicated", "Not indicated"],
      rows: [
        { text: "Lower the leg to the level of the heart", correct: [0], why: "Heart level keeps arterial inflow to the compartment while limiting swelling." },
        { text: "Keep the leg raised high on 3 pillows", correct: [1], why: "Elevation above the heart lowers the pressure that drives blood into the compartment." },
        { text: "Continue close neurovascular checks", correct: [0], why: "Frequent checks show whether the leg is getting worse." },
        { text: "Apply a heating pad over the calf", correct: [1], why: "Heat raises tissue oxygen demand and adds swelling." },
        { text: "Record the time of his last meal for the team", correct: [0], why: "The surgical team needs this time if an emergency operation follows." },
        { text: "Offer music or a video as distraction", correct: [0], why: "Distraction is a safe comfort measure alongside analgesia." },
        { text: "Help him walk with crutches to ease stiffness", correct: [1], why: "Walking is unsafe with an acute fracture and a threatened compartment." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "HPM",
        topic: "Involving an adolescent in surgical decisions",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The surgeon plans an emergency fasciotomy of the left leg tonight. The mother agrees to the surgery. The boy asks the nurse what will happen to his leg. Which action by the nurse best supports his stage of development?",
        rationale:
          "A 14-year-old can understand his care and wants a say in it. The nurse explains the surgery to him directly and seeks his agreement, which is assent. His mother gives legal permission because he is a minor. Directing all teaching to the mother ignores his growing autonomy. Delaying the explanation leaves him afraid before an emergency operation.",
        sources: [SRC.consent, SRC.wong, { body: "Canadian Nurses Protective Society", work: "Ask a Lawyer: Mature Minor", year: 2017, url: "https://cnps.ca/article/mature-minor/" }],
        canada: "In most of Canada, capacity to consent depends on maturity rather than a fixed age, so a capable minor may consent to his own treatment. Quebec sets the age at 14 and New Brunswick at 16, so rules vary by province.",
      }),
      kind: "mc",
      options: [
        { text: "Ask the boy to sign the surgical consent form", why: "A 14-year-old is a minor. His parent gives legal permission for surgery." },
        { text: "Direct the surgical teaching to his mother only", why: "Leaving him out ignores his growing need for autonomy and control." },
        { text: "Postpone the explanation until he is calmer", why: "Surgery is tonight. Waiting leaves him fearful and uninformed." },
        { text: "Explain the surgery to him and seek his assent", why: "Adolescents gain control and trust when included in decisions about their care." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Body image after fasciotomy",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "Two days after the fasciotomy the wounds are open under dressings and closure is planned. The nurse evaluates how the boy is adjusting. Which statements show that he is adjusting to the change in his body? Select all that apply.",
        rationale:
          "Asking how the scars will look, planning his return to soccer and keeping in touch with teammates show he is facing the change and keeping peer ties. Peer acceptance matters in adolescence. Refusing visits from friends and not looking at the leg are avoidance. A statement that nothing will be the same and therapy is pointless suggests hopelessness and needs follow-up.",
        sources: [SRC.wong, SRC.halter],
      }),
      kind: "sata",
      options: [
        { text: "\"I don't want my friends to see my leg.\"", why: "Avoiding friends suggests shame about his body and needs follow-up." },
        { text: "\"I asked what the scars will look like.\"", why: "Seeking information shows he is facing the change in his body." },
        { text: "\"I won't look when they change it.\"", why: "Refusing to look at the wound is avoidance and needs support." },
        { text: "\"I want to know when I can play again.\"", why: "Planning a return to soccer shows hope and engagement in recovery." },
        { text: "\"Therapy is pointless. It won't help.\"", why: "This statement suggests hopelessness and needs follow-up." },
        { text: "\"I text my teammates every day.\"", why: "Keeping peer contact supports adjustment in adolescence." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
