import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c08-1";

/** Case 1. Orthopedic trauma unit. Young man with a femoral shaft fracture in traction. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Restless Night on the Orthopedic Trauma Unit",
  intro:
    "A 24-year-old man is on the orthopedic trauma unit after a motorcycle crash 30 hours ago. He has a closed fracture of the right femoral shaft in skeletal traction. Surgery to fix the fracture is planned for tomorrow morning.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "No chronic illness. No known allergies. Does not smoke.",
        "Injuries: closed right femoral shaft fracture. Abrasions on the left forearm.",
        "CT of the head on arrival showed no injury.",
        "Weight 78 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Balanced skeletal traction to the right leg. Keep weights hanging freely.",
        "Morphine 2 mg IV every 2 hours as needed for pain.",
        "Enoxaparin 40 mg subcutaneously once daily.",
        "Vital signs and neurovascular checks of the right leg every 4 hours.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2200", "0200"],
        rows: [
          ["Temperature", "37.0°C (98.6°F)", "37.4°C (99.3°F)"],
          ["Heart rate", "88/minute", "94/minute"],
          ["Respiratory rate", "16/minute", "18/minute"],
          ["BP", "124/76 mmHg", "122/74 mmHg"],
          ["SpO2", "97% on room air", "96% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Early signs after a long-bone fracture",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0600 the nurse finds the client awake and restless and writes the note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Restlessness and new confusion in a client with a normal head CT point to low oxygen reaching the brain. Respirations of 30/minute and an SpO2 of 88% show poor gas exchange. Pinpoint red spots on the chest and in the axillae are petechiae. Together these findings, 30 hours after a femoral shaft fracture, fit fat embolism. Free-hanging weights, a strong pedal pulse, warm toes and thigh pain of 4 are expected. The last morphine was at 0100, so oversedation does not explain the change.",
        refs: ["Fat embolism signs usually appear within 24 to 48 hours of the injury."],
        sources: [SRC.timon, SRC.kosova],
      }),
      kind: "highlight",
      passage:
        "[[Restless and pulling at the traction rope]]. [[Oriented to person only]]. [[Respirations 30/minute]]. [[SpO2 88% on room air]]. [[Pinpoint red spots on chest and axillae]]. Heart rate 118/minute. Temperature 38.4°C (101.1°F). [[Traction weights hanging freely]]. [[Right pedal pulse 2+]]. [[Right toes warm with brisk capillary refill]]. [[Right thigh pain 4 of 10]]. [[Last morphine dose given at 0100]].",
      spans: [
        { text: "Restless and pulling at the traction rope", why: "New restlessness can be an early sign of low oxygen reaching the brain." },
        { text: "Oriented to person only", why: "New confusion with a normal head CT suggests a systemic cause such as hypoxemia." },
        { text: "Respirations 30/minute", why: "A rate of 30/minute is well above the 16 to 18/minute recorded overnight." },
        { text: "SpO2 88% on room air", why: "An SpO2 of 88% is a fall from 96% at 0200 and shows poor oxygenation." },
        { text: "Pinpoint red spots on chest and axillae", why: "Petechiae on the upper chest and axillae are a typical skin sign of fat embolism." },
        { text: "Traction weights hanging freely", why: "Free-hanging weights are expected and keep the fracture immobilized." },
        { text: "Right pedal pulse 2+", why: "A normal pedal pulse shows intact arterial flow to the foot." },
        { text: "Right toes warm with brisk capillary refill", why: "Warm toes with brisk refill show good perfusion of the injured leg." },
        { text: "Right thigh pain 4 of 10", why: "Moderate pain of 4 is expected with a femoral fracture in traction." },
        { text: "Last morphine dose given at 0100", why: "The last dose was hours ago and the respiratory rate is high, which argues against oversedation." },
      ],
      correct: [0, 1, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Telling fat embolism from pulmonary embolism",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews new laboratory results and compares fat embolism syndrome with pulmonary embolism from a leg clot. For each finding, specify whether it points to fat embolism or fits both conditions.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Yesterday 0600", "Today 0615"],
              rows: [
                ["Platelets", "245 000/mm3", "98 000/mm3"],
                ["Hemoglobin", "13.9 g/dL (139 g/L)", "12.8 g/dL (128 g/L)"],
                ["PaO2 on room air", "Not done", "56 mmHg"],
              ],
            },
          },
        ],
        rationale:
          "Petechiae on the chest and axillae and a sudden fall in platelets from 245 000/mm3 to 98 000/mm3 point to fat embolism. Fat globules damage capillaries and consume platelets. A clot in the lungs causes low oxygen, rapid breathing and a fast pulse. So do fat emboli. The PaO2 of 56 mmHg, the SpO2 of 88% and the heart rate of 118/minute therefore fit both conditions.",
        sources: [SRC.timon, SRC.kosova, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets in SI units, so the count reads 98 x 10^9/L, down from 245 x 10^9/L. The Medical Council of Canada lists platelets as 130 to 380 x 10^9/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Points to fat embolism syndrome", "Fits both conditions"],
      rows: [
        { text: "Petechiae on the chest and in both axillae", correct: [0], why: "A petechial rash in this pattern is a major sign of fat embolism and is not part of clot embolism." },
        { text: "Platelets 98 000/mm3, down from 245 000/mm3", correct: [0], why: "A sudden platelet fall is a recognized feature of fat embolism. A clot embolus does not usually cause it." },
        { text: "PaO2 56 mmHg on room air", correct: [1], why: "Both conditions block pulmonary blood flow and lower arterial oxygen." },
        { text: "Respirations 30/minute", correct: [1], why: "Both conditions cause rapid breathing as the body responds to hypoxemia." },
        { text: "Heart rate 118/minute", correct: [1], why: "Both conditions raise the heart rate as oxygen delivery falls." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority risk after fat embolism",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0630 the nurse has applied oxygen by nasal cannula at 4 L/minute. The SpO2 is 89% and respirations are 32/minute. BP is 118/72 mmHg. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "An SpO2 of 89% despite oxygen at 4 L/minute and respirations of 32/minute show the lungs cannot keep up with demand. Fat emboli can progress to acute respiratory distress, so breathing is the priority. A BP of 118/72 mmHg does not suggest shock. The raised respiratory rate argues against opioid oversedation. Thigh pain of 4 is moderate, and compartment syndrome would not explain the hypoxemia.",
        sources: [SRC.kosova, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hypovolemic shock", why: "The BP of 118/72 mmHg is stable and nothing suggests major blood loss." },
            { text: "respiratory failure", why: "Hypoxemia on oxygen with a rising respiratory rate shows failing gas exchange." },
            { text: "opioid oversedation", why: "Oversedation slows breathing. This client breathes 32/minute." },
            { text: "compartment syndrome", why: "Thigh pain is a moderate 4, and raised limb pressure would not explain the low SpO2." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a BP of 118/72 mmHg", why: "This BP is within the expected range and does not show a threat." },
            { text: "thigh pain of 4 of 10", why: "Moderate thigh pain is expected with a femoral fracture." },
            { text: "an SpO2 of 89% on oxygen", why: "Low saturation despite 4 L/minute of oxygen shows worsening gas exchange." },
            { text: "free-hanging weights", why: "Free-hanging weights are expected and show the traction is working." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "warm right toes", why: "Warm toes show good perfusion of the injured leg." },
            { text: "a last dose at 0100", why: "A dose given at 0100 does not explain distress at 0630." },
            { text: "a normal head CT", why: "A normal CT on arrival does not point to a breathing threat." },
            { text: "respirations of 32/minute", why: "A rising rate shows the client is working harder to breathe." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety for a confused client in traction",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client remains confused while the team assesses him. He keeps reaching for the traction rope. Which measures should the nurse include in the plan to keep him safe? Select all that apply.",
        rationale:
          "Free-hanging weights keep the fracture still, and early stabilization limits further fat release. Reorienting a confused client at each contact lowers agitation. A family member at the bedside is a less restrictive alternative to restraint. Restraints are used only when less restrictive measures fail. A sedative can mask worsening hypoxemia and depress breathing. Removing the traction lets the fracture move.",
        sources: [SRC.restraint, SRC.timon, SRC.brunner, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Patient Restraints", year: 2021, url: "https://cnps.ca/article/patient-restraints/" }],
        canada: "The US federal restraint rule cited here does not apply in Canada. Restraint use is governed by provincial law and agency policy, such as Ontario's 2001 restraint minimization act for hospitals, and varies by province.",
      }),
      kind: "sata",
      options: [
        { text: "Apply wrist restraints to protect the traction", why: "Restraints are a last resort after less restrictive measures fail." },
        { text: "Keep the traction weights hanging freely", why: "Free-hanging weights keep the fracture immobilized and limit further fat release." },
        { text: "Remove the traction until the client is calmer", why: "Removing traction lets the fracture ends move, which can release more fat." },
        { text: "Reorient the client at each contact", why: "Frequent reorientation lowers the agitation of acute confusion." },
        { text: "Request a sedative to calm the client", why: "Sedation can depress breathing and hide worsening hypoxemia." },
        { text: "Ask a family member to sit at the bedside", why: "A familiar person at the bedside is a less restrictive alternative to restraint." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Structured report to a rapid response team",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The nurse calls the rapid response team and prepares a structured report. Place one statement under each part of the SBAR report.",
        rationale:
          "Situation states what is happening now: low SpO2 on oxygen and new confusion. Background gives the relevant history: the femoral fracture in traction and its timing. Assessment gives the nurse's judgment of the problem. Recommendation states what the nurse needs from the team. Yesterday's pain score and who set up the traction do not help the team act now.",
        sources: [SRC.sbar],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Situation", "Background", "Assessment", "Recommendation"],
      tokens: [
        { text: "He rated his thigh pain 6 of 10 yesterday evening.", why: "An old pain score does not describe the current problem or guide the team." },
        { text: "His SpO2 is 89% on 4 L/minute and he is newly confused.", why: "The situation states the current problem in a few words." },
        { text: "I think this may be fat embolism and he is getting worse.", why: "The assessment gives the nurse's judgment of the likely problem." },
        { text: "He is 30 hours after a femoral fracture, in traction.", why: "The background gives the history the team needs to interpret the change." },
        { text: "His traction was set up by the orthopedic team.", why: "Who set up the traction does not change what the team must do now." },
        { text: "Please assess him now for transfer to intensive care.", why: "The recommendation states clearly what the nurse is asking for." },
      ],
      correct: [1, 3, 2, 5],
    },
    {
      ...meta(`${ID}-6`, {
        need: "RRP",
        topic: "Evaluating recovery from fat embolism",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The client moves to intensive care at 0700 and receives supportive care with oxygen. The fracture is fixed with an intramedullary nail. Four days after admission the nurse reviews his findings. Which finding best shows that his condition is improving?",
        rationale:
          "An SpO2 of 96% on only 2 L/minute shows gas exchange has recovered since the SpO2 of 89% on 4 L/minute. Fat embolism is usually self-limiting with supportive care. A platelet count below the earlier 98 000/mm3 shows ongoing consumption. Orientation to person only and respirations of 30/minute are unchanged from the day of the event.",
        sources: [SRC.timon, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets in SI units, so this count reads 84 x 10^9/L, down from 98 x 10^9/L.",
      }),
      kind: "mc",
      options: [
        { text: "Platelet count 84 000/mm3, down from 98 000/mm3", why: "A further fall in platelets shows the process has not settled." },
        { text: "Oriented to person only when awakened", why: "Orientation is unchanged from the confusion first seen at 0600." },
        { text: "SpO2 96% on 2 L/minute by nasal cannula", why: "A higher saturation on less oxygen shows gas exchange is recovering." },
        { text: "Respirations 30/minute while resting in bed", why: "A rate of 30/minute is the same rapid rate seen at the start of the event." },
      ],
      correct: 2,
    },
  ],
};
