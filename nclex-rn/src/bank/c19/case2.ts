import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c19-2";

const START_REF =
  "START places an adult in the immediate category when respirations are above 30/minute, the radial pulse is absent or capillary refill is over 2 seconds, or the client cannot follow simple commands.";

/** Case 2. Community hospital ambulance entrance. Mass casualty triage after a bus rollover. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Ambulance Entrance After a Highway Crash",
  intro:
    "At 1340 a bus carrying 38 passengers rolls over on a highway. The regional hospital activates its mass casualty plan. The nurse is assigned to the triage area at the ambulance entrance. The team sorts adults with Simple Triage and Rapid Treatment (START). Six clients arrive at 1410.",
  tabs: [
    {
      title: "Triage Log",
      text: [
        "Client A. 45-year-old man. Walked from the ambulance to the triage area. Cut on the right forearm. Bleeding controlled by a dressing.",
        "Client B. 28-year-old woman. Unable to walk. Respiratory rate 34/minute. Radial pulse present. Follows commands.",
        "Client C. 60-year-old man. Unable to walk. Bone visible through a wound on the right lower leg. Respiratory rate 22/minute. Radial pulse present. Capillary refill 2 seconds. Follows commands.",
        "Client D. 52-year-old woman. Not breathing. No breathing after the airway is repositioned.",
        "Client E. 19-year-old man. Unable to walk. Deep cut on the left thigh with bright red blood spurting. Respiratory rate 26/minute. Radial pulse absent. Capillary refill 4 seconds. Follows commands.",
        "Client F. 70-year-old woman. Unable to walk. Respiratory rate 18/minute. Radial pulse present. Does not squeeze the nurse's hand on request.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "MOC",
        topic: "Cues that set the immediate triage category",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the triage log before tagging the six clients. Which findings in the log place a client in the immediate category? Select all that apply.",
        refs: [START_REF],
        rationale:
          "START sorts adults by walking, breathing, perfusion and mental status. A respiratory rate of 34/minute is above the limit of 30/minute. An absent radial pulse and a capillary refill of 4 seconds show poor perfusion. Failing to squeeze a hand on request shows the client cannot follow commands. Visible bone and a deep cut are injuries, not START criteria. A rate of 22/minute is under the limit. Walking places a client in the minor group.",
        sources: [SRC.start],
      }),
      kind: "sata",
      options: [
        { text: "Respiratory rate 34/minute", why: "A rate above 30/minute places an adult in the immediate group." },
        { text: "Bone visible through a leg wound", why: "START sorts by breathing, perfusion and commands, not by the type of injury." },
        { text: "Radial pulse absent", why: "An absent radial pulse shows poor perfusion and sets the immediate group." },
        { text: "Walked to the triage area", why: "A client who can walk goes in the minor group first." },
        { text: "Does not squeeze a hand on request", why: "Failing a simple command sets the immediate group." },
        { text: "Respiratory rate 22/minute", why: "A rate of 22/minute is under the limit of 30/minute." },
        { text: "Capillary refill 4 seconds", why: "Capillary refill over 2 seconds shows poor perfusion." },
        { text: "Deep cut on the left thigh", why: "The wound needs bleeding control, but START sorts by perfusion signs, not the wound." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Assigning mass casualty triage categories",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse assigns a START category to each client in the triage log. For each client, specify the triage category.",
        refs: [START_REF],
        rationale:
          "Client A walked in, so he is minor. Client D has no breathing after the airway is repositioned, so she is expectant. Client B breathes 34/minute, which is above 30/minute. Client E has no radial pulse. Client F cannot follow a simple command. These three are immediate. Client C cannot walk but breathes 22/minute, has a radial pulse and follows commands. He is delayed despite a severe leg wound.",
        sources: [SRC.start],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Immediate", "Delayed", "Minor", "Expectant"],
      rows: [
        { text: "Client A", correct: [2], why: "He walked to the triage area, so he goes in the minor group." },
        { text: "Client B", correct: [0], why: "A respiratory rate of 34/minute is above 30/minute." },
        { text: "Client C", correct: [1], why: "Breathing, perfusion and commands are within START limits, but he cannot walk." },
        { text: "Client D", correct: [3], why: "No breathing after the airway is repositioned places her in the expectant group." },
        { text: "Client E", correct: [0], why: "An absent radial pulse and capillary refill of 4 seconds show poor perfusion." },
        { text: "Client F", correct: [0], why: "She cannot follow a simple command, which sets the immediate group." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Linking perfusion cues to blood loss",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "Client E is moved to the treatment area first. The nurse reviews his findings from the triage log. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Client E has bright red blood spurting from a deep thigh cut. That pattern points to arterial bleeding. His radial pulse is absent and capillary refill is 4 seconds. Both show that blood loss is reducing perfusion. He is at highest risk for hemorrhagic shock. He follows commands and has no head or chest injury in the log. A respiratory rate of 26/minute is under the START limit and does not point to his main danger.",
        sources: [SRC.bleed, SRC.hinkle],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "Client E is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "tension pneumothorax", why: "The log gives no chest injury, and his respiratory rate is 26/minute." },
            { text: "hemorrhagic shock", why: "Arterial bleeding with an absent radial pulse points to shock from blood loss." },
            { text: "traumatic brain injury", why: "He follows commands, and the log gives no head injury." },
            { text: "fat embolism", why: "Fat embolism follows long bone fracture. The log gives no fracture for him." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "his ability to follow commands", why: "Following commands shows intact mental status, not blood loss." },
            { text: "a respiratory rate of 26/minute", why: "This rate is under the START limit and is not a sign of shock by itself." },
            { text: "an absent radial pulse", why: "Loss of the radial pulse shows low blood pressure from blood loss." },
            { text: "his age of 19 years", why: "Young adults can hide shock for a time, but age is not evidence of it." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "blood spurting from the thigh", why: "Bright red spurting blood points to an arterial source of blood loss." },
            { text: "his inability to walk", why: "Being unable to walk does not show where or how he is losing blood." },
            { text: "a cut on the right forearm", why: "The forearm cut belongs to Client A, not Client E." },
            { text: "his position on a stretcher", why: "Lying on a stretcher is not a sign of blood loss." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Immobilizing an open leg fracture",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "Client C waits in the delayed area for the orthopedic surgeon. The nurse plans care for the wound on his right lower leg. Which three actions should the nurse include? Select three.",
        rationale:
          "Client C has bone visible through a leg wound, which is an open fracture. A sterile dressing lowers the risk of infection. A splint that covers the joints above and below the break stops movement of the bone ends. Pulses, color and sensation are checked below the injury before and after the splint goes on. Pushing bone back carries dirt inward. Heat adds swelling. A dependent leg swells more. Removing the splint lets the bone ends move.",
        sources: [SRC.hinkle],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Push the bone end back under the skin", why: "Pushing bone inward drags dirt into the wound and adds tissue damage." },
        { text: "Cover the wound with a sterile dressing", why: "A sterile cover lowers the risk of infection in an open fracture." },
        { text: "Apply a heat pack over the fracture", why: "Heat increases blood flow and swelling after a fresh injury." },
        { text: "Splint the joints above and below the break", why: "Splinting both joints keeps the bone ends still and limits pain and damage." },
        { text: "Place the leg lower than the heart", why: "A dependent leg swells more. Elevation limits swelling." },
        { text: "Check pulses and sensation below the injury", why: "Neurovascular checks find vessel or nerve damage and a splint that is too tight." },
        { text: "Remove the splint hourly to inspect the skin", why: "Removing the splint lets the bone ends move and can cause more damage." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "RRP",
        topic: "Bleeding that continues through a pressure dressing",
        cjmm: "action",
        difficulty: 3,
        stem: "At 1420 a pressure dressing on the left thigh of Client E is soaked within 2 minutes. Bright red blood keeps spurting from the wound. Which action should the nurse take next?",
        rationale:
          "Direct pressure has failed. Arterial blood keeps spurting from a limb wound. A tourniquet placed above the wound is the next step. The time it goes on is recorded. Raising the leg and pressing on a pressure point are not supported by evidence. A second IV line does not stop the bleeding. It can wait until the bleeding is controlled.",
        sources: [SRC.bleed],
      }),
      kind: "mc",
      options: [
        { text: "Apply a tourniquet above the wound", why: "A tourniquet stops limb bleeding that direct pressure did not control." },
        { text: "Add gauze layers and raise the leg", why: "Elevation is not supported by evidence and the dressing has already failed." },
        { text: "Press on the femoral pulse point", why: "Pressure point control is not supported by evidence for limb bleeding." },
        { text: "Start a second large-bore IV line", why: "Fluids do not stop the bleeding. Bleeding control comes first." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Correcting unsafe practice in a triage area",
        cjmm: "evaluate",
        process: "nursing-process",
        difficulty: 4,
        stem: "At 1450 the nurse watches a float nurse who is helping in the triage area. Which two actions by the float nurse need correction? Select two.",
        rationale:
          "In a mass casualty event, care goes to those who can be saved with the resources at hand. Client D had no breathing after the airway was repositioned. Starting compressions on her takes a nurse away from immediate clients. Wearing the same gloves from one client to the next spreads blood and germs. Gloves are changed and hands cleaned between clients. Rechecking clients, eye protection near spurting blood, attached tags and notes on tags are all correct.",
        sources: [SRC.start, SRC.siegel],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Starts chest compressions on Client D", why: "Client D is expectant. Compressions draw a nurse from clients who can be saved." },
        { text: "Rechecks breathing and pulse for Client C", why: "START triage is repeated because a client's status can change." },
        { text: "Wears eye protection near Client E", why: "Spurting blood can splash, so eye protection is needed." },
        { text: "Keeps the same gloves for Clients B and F", why: "Gloves are changed and hands cleaned between clients to stop spread." },
        { text: "Leaves the triage tag on Client A", why: "The tag stays on so every team member sees the category." },
        { text: "Writes the care given on each tag", why: "Notes on the tag carry care details as the client moves." },
      ],
      correct: [0, 3],
    },
  ],
};
