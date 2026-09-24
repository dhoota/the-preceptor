import type { Item } from "@/engine/types";
import { ASPEN_EN, HINKLE, IDSA_FEVER, NEWS2, POTTER, WONG, meta } from "./common";

/** s21 items 41 to 50. Feeding tubes, vital sign interpretation, fluid trends, fixators, pacemakers and early warning signs. */
export const PART5: Item[] = [
  {
    ...meta("rn-s21-41", {
      topic: "Clearing a blocked feeding tube",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receives continuous feedings through a small-bore nasogastric tube. The pump alarms for an occlusion and the formula does not flow. Tube placement was confirmed this morning. Which action should the nurse take?",
      rationale:
        "Warm water with a gentle push and pull on a 60 mL syringe is the first step to clear a clog. A large syringe creates lower pressure and is less likely to rupture the tube. Small syringes create high pressure. Cola and juice can make the clog worse. A guidewire reinserted into a tube in place can perforate the tube and the gut.",
      sources: [ASPEN_EN, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Flush with warm water in a 60 mL syringe", why: "Warm water and a large syringe clear the clog with safe pressure." },
      { text: "Push water hard with a 3 mL syringe", why: "A small syringe creates high pressure that can rupture the tube." },
      { text: "Instill a cola drink and clamp the tube", why: "Acidic drinks can curdle formula and worsen the clog." },
      { text: "Reinsert the guidewire to clear the lumen", why: "A guidewire in a placed tube can perforate the tube or the gut." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s21-42", {
      topic: "Dislodged new gastrostomy tube",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a percutaneous endoscopic gastrostomy tube placed 5 days ago. During a bed bath the nurse finds the tube lying on the sheet with the retention disk intact. Which action should the nurse take?",
      rationale:
        "At 5 days the tract between the stomach and the skin has not matured. A tube pushed in blindly can enter the peritoneal cavity, and feeding would then cause peritonitis. The nurse covers the site and notifies the provider so the tube can be replaced under guidance. A catheter placed to hold a mature stoma open is not used in a new tract.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Insert a urinary catheter into the stoma", why: "This holds a mature tract open. A 5 day tract may not lead into the stomach." },
      { text: "Cover the site and notify the provider", why: "An immature tract needs replacement under guidance by the provider." },
      { text: "Reinsert the same tube and restart feeding", why: "Blind reinsertion into a new tract risks feeding into the peritoneum." },
      { text: "Leave the site open and recheck in 4 hours", why: "The provider needs to know now. The stoma can begin to close." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-43", {
      topic: "Resting vital signs in an infant",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse measures vital signs on a 6-month-old infant who is sleeping quietly in a crib. Which finding needs follow-up?",
      rationale:
        "A resting respiratory rate of 64/minute is above the infant range of 30 to 53/minute. Fast breathing at rest can be an early sign of respiratory distress. A heart rate of 118/minute, an axillary temperature of 36.8°C and a BP of 88/52 mmHg are all normal for a sleeping infant.",
      refs: ["Infant resting respiratory rate is 30 to 53/minute. Sleeping infant heart rate is 90 to 160/minute."],
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Respirations 64/minute", why: "This rate is above the infant range of 30 to 53/minute." },
      { text: "Heart rate 118/minute", why: "This rate is within the sleeping infant range of 90 to 160/minute." },
      { text: "Axillary temperature 36.8°C (98.2°F)", why: "36.8°C is a normal axillary temperature." },
      { text: "BP 88/52 mmHg", why: "This BP is normal for a 6-month-old infant." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s21-44", {
      topic: "Blunted fever in an older adult",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An 86-year-old long-term care resident has new confusion since this morning. Temperature is 37.6°C (99.7°F). The resident's usual temperature is 36.2°C (97.2°F). Heart rate is 96/minute, respirations 22/minute and BP 112/66 mmHg, down from a usual 138/80 mmHg. How should the nurse interpret these findings?",
      rationale:
        "Older adults often mount a smaller fever. A rise of more than 1.1°C over the usual temperature counts as fever in this group. The rise from 36.2°C to 37.6°C meets that rule. New confusion, a faster heart rate and breathing and a lower BP add up to a possible infection that needs prompt follow-up.",
      refs: ["In older long-term care residents, a rise of more than 1.1°C over baseline counts as fever."],
      sources: [IDSA_FEVER],
    }),
    kind: "mc",
    options: [
      { text: "Expected changes of normal aging", why: "Sudden confusion and changed vital signs are not part of normal aging." },
      { text: "Possible infection with a blunted fever", why: "A rise of more than 1.1°C over baseline with new confusion suggests infection." },
      { text: "No infection, as the temperature is normal", why: "The rise from baseline counts as fever in an older adult." },
      { text: "Gradual progression of dementia", why: "Dementia progresses over months. This change began this morning." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-45", {
      topic: "Response to IV fluids in an older adult",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "An 82-year-old client with heart failure is admitted with dehydration and receives IV 0.9% sodium chloride. The nurse reviews the flow sheet. Which changes need follow-up? Select all that apply.",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "0800", "1200", "1600", "2000"],
            rows: [
              ["Heart rate (/minute)", "102", "90", "94", "106"],
              ["BP (mmHg)", "104/60", "118/68", "134/78", "148/84"],
              ["Respirations (/minute)", "18", "20", "24", "28"],
              ["SpO2 on room air (%)", "96", "95", "92", "89"],
              ["Urine output (mL/hour)", "30", "50", "40", "35"],
              ["Lung sounds", "Clear", "Clear", "Fine crackles at bases", "Crackles to mid-back"],
            ],
          },
        },
      ],
      rationale:
        "By 1200 the fluids had worked. The heart rate fell to 90/minute and urine output rose to 50 mL/hour. After that the respirations climb to 28/minute and the SpO2 falls to 89%. Crackles spread from the bases to the mid-back and the BP rises to 148/84 mmHg. In a client with heart failure these changes show fluid overload.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Heart rate falling from 102 to 90/minute by 1200", why: "The early fall shows the dehydration was corrected. It is an expected response." },
      { text: "Respirations rising to 28/minute", why: "Rising respirations suggest fluid building up in the lungs." },
      { text: "Urine output rising from 30 to 50 mL/hour by 1200", why: "Better output at 1200 shows the kidneys responding to fluid." },
      { text: "SpO2 falling to 89%", why: "Falling SpO2 shows fluid in the alveoli limiting gas exchange." },
      { text: "Crackles spreading to the mid-back", why: "Spreading crackles show worsening pulmonary congestion." },
      { text: "BP rising to 148/84 mmHg", why: "A steady rise from 104/60 mmHg with the other changes reflects an expanding circulating volume." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s21-46", {
      topic: "Pin site checks with an external fixator",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client is on day 4 after an external fixator was placed on the left tibia. The nurse inspects the pin sites. Which two findings should the nurse report? Select two.",
      rationale:
        "Thick yellow drainage points to a pin site infection, which can spread to bone. A pin that moves in the bone has loosened and weakens the frame. Small clear drainage, light crusting, mild pain during care and a thin pink rim close to the pin are expected in the first days.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "A small amount of clear drainage at two pins", why: "Clear serous drainage is expected in the first days." },
      { text: "Light crusting around each pin", why: "Some crusting is expected and is cleaned per protocol." },
      { text: "Thick yellow drainage at one pin", why: "Purulent drainage suggests infection that can reach bone." },
      { text: "Pain of 2 of 10 during pin care", why: "Mild discomfort during care is expected." },
      { text: "A pin that moves when touched", why: "A loose pin weakens the frame and raises infection risk." },
      { text: "A thin pink rim close to each pin", why: "Slight redness at the skin edge is expected early." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s21-47", {
      topic: "Warning signs after pacemaker insertion",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 12 hours after a permanent pacemaker was placed in the left chest with a lower rate set at 60/minute. Which findings need follow-up? Select all that apply.",
      rationale:
        "Persistent hiccups can mean the lead is pacing the diaphragm or has perforated the heart wall. A rate of 48/minute is below the set rate of 60/minute, so the device is failing to pace or capture. A growing pocket swelling suggests a hematoma. Muffled heart sounds with a BP of 88/50 mmHg suggest tamponade from a perforation. Mild soreness, a sling and edge bruising under a dry dressing are expected.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Incision soreness rated 3 of 10", why: "Mild soreness is expected after the procedure." },
      { text: "Hiccups that have lasted an hour", why: "Persistent hiccups can signal diaphragm pacing or lead perforation." },
      { text: "Left arm resting in a sling as instructed", why: "A sling limits arm movement while the leads settle." },
      { text: "Monitor rate of 48/minute", why: "A rate below the set 60/minute shows a pacing or capture failure." },
      { text: "Pocket swelling that is growing", why: "Enlarging swelling suggests a hematoma in the pocket." },
      { text: "Dry dressing with slight bruising at the edges", why: "Minor bruising is common and needs no report." },
      { text: "Muffled heart sounds with BP 88/50 mmHg", why: "These suggest fluid around the heart from a lead perforation." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s21-48", {
      topic: "Early warning signs after surgery",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 1 day after an open hernia repair. Before surgery the BP was 132/80 mmHg. Now respirations are 25/minute, SpO2 is 93% on room air, BP is 98/60 mmHg and heart rate is 112/minute. Temperature is 37.4°C (99.3°F). The client is newly confused about the date. Pain is 3 of 10 and urine output is 40 mL each hour. Which findings need prompt follow-up? Select all that apply.",
      rationale:
        "Early warning scores add points for fast breathing, low SpO2, low systolic BP, fast heart rate and new confusion. This client scores on all five. New confusion alone is a red flag. Together they call for an urgent review by the provider. A temperature of 37.4°C, pain of 3 and output of 40 mL/hour score no points.",
      refs: ["NEWS2 adds points for respirations of 21/minute or more, SpO2 of 95% or less on air, systolic BP of 110 mmHg or less, heart rate of 91/minute or more and new confusion."],
      sources: [NEWS2],
    }),
    kind: "sata",
    options: [
      { text: "Respirations 25/minute", why: "A rate this fast is an early sign of deterioration." },
      { text: "Temperature 37.4°C (99.3°F)", why: "This temperature is within the normal range." },
      { text: "SpO2 93% on room air", why: "An SpO2 of 95% or less on air adds to the warning score." },
      { text: "Pain rated 3 of 10 at rest", why: "Mild pain on day 1 is expected." },
      { text: "BP 98/60 mmHg", why: "A systolic BP of 110 mmHg or less adds to the score. It is also well below baseline." },
      { text: "Urine output 40 mL/hour", why: "This output is adequate for an adult." },
      { text: "Heart rate 112/minute", why: "Tachycardia adds to the score and can reflect sepsis or bleeding." },
      { text: "New confusion about the date", why: "New confusion is a strong sign of acute illness." },
    ],
    correct: [0, 2, 4, 6, 7],
  },
  {
    ...meta("rn-s21-49", {
      topic: "Preventing lung complications after surgery",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with obesity is on day 1 after an open upper abdominal operation. Which measures should the nurse include to lower the risk of lung complications? Select all that apply.",
      rationale:
        "Upper abdominal incisions make deep breaths painful, so the lungs do not expand fully. Splinting the incision allows an effective cough. Walking and sitting upright expand the lung bases. Pain relief before activity makes deep breathing possible. A flat position and a suppressed cough let secretions and collapsed alveoli build up.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Keep the client flat to ease incision pain", why: "Lying flat limits lung expansion, which obesity already reduces." },
      { text: "Splint the incision with a pillow to cough", why: "Support to the incision allows a strong, effective cough." },
      { text: "Limit coughing to protect the sutures", why: "Coughing clears secretions. Splinting protects the incision." },
      { text: "Walk in the hallway as prescribed", why: "Walking expands the lungs and moves secretions." },
      { text: "Give a cough suppressant at bedtime", why: "Suppressing the cough lets secretions collect in the airways." },
      { text: "Sit upright with the head raised", why: "Upright positions expand the lung bases." },
      { text: "Give analgesia before activity", why: "Pain control makes deep breathing and walking possible." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s21-50", {
      topic: "Choosing which client to see first",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "At 0700 a nurse on an orthopedic and general surgery unit takes handoff for four assigned clients. Based on the handoff findings, whose bedside should the nurse go to first?",
      rationale:
        "New confusion with respirations of 28/minute on the day after knee replacement can signal a pulmonary or fat embolism. That is a threat to breathing and oxygen delivery. The client after catheterization has stable findings. Pain of 6 of 10 needs care soon but is not life threatening. A Braden score of 14 guides prevention and can wait.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Client 2 hours after cardiac catheterization with BP 118/70 mmHg and pedal pulses present", why: "These findings are stable after the procedure." },
      { text: "Client on day 1 after a colectomy with pain of 6 of 10, due for scheduled analgesia", why: "Pain needs treatment soon but is not a threat to life." },
      { text: "Client on bed rest with a Braden score of 14 and intact skin", why: "Moderate pressure injury risk guides prevention and can wait." },
      { text: "Client on day 1 after knee replacement with new confusion and respirations of 28/minute", why: "New confusion and fast breathing can signal an embolism." },
    ],
    correct: 3,
  },
];
