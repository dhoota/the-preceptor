import type { Item } from "@/engine/types";
import { ASAM_AW, CAVANAGH, GIGER, HALTER, HINKLE, HOCKENBERRY, INOUYE, MCEWEN, SECHI, TOWNSEND, WINSTEIN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s12-11", {
      topic: "Thiamine deficiency with heavy drinking",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 52-year-old client with long-term heavy alcohol use is admitted after 3 weeks of poor food intake. The last drink was 5 days ago. The client is confused and cannot give the date. Gait is wide-based and unsteady, and the nurse sees nystagmus on side gaze. Heart rate is 88/minute, BP 128/78 mmHg and temperature 36.8°C (98.2°F). There is no tremor or sweating. Blood glucose is 74 mg/dL (4.1 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Confusion, an unsteady wide-based gait and nystagmus in a client with heavy drinking and poor intake fit Wernicke encephalopathy from thiamine deficiency. The heart rate of 88/minute and the lack of tremor or sweating 5 days after the last drink argue against withdrawal delirium. Thiamine is given before glucose-containing fluids, because glucose can worsen the deficit. Falls are likely with this gait. Mental status, eye movements and gait show whether treatment is working.",
      canada:
        "Canadian labs report glucose in mmol/L only, so the value here is 4.1 mmol/L. Diabetes Canada sets hypoglycemia below 4.0 mmol/L for people on insulin or a secretagogue, so this value does not explain the confusion.",
      sources: [SECHI, ASAM_AW,
        { body: "Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1)", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" },
      ],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Alcohol withdrawal delirium", why: "Withdrawal delirium brings tremor, sweating and a fast pulse. The stem gives none of these." },
      { text: "Wernicke encephalopathy", why: "Confusion, ataxia and nystagmus with poor intake and heavy drinking fit thiamine deficiency." },
      { text: "Hypoglycemia", why: "The glucose is 74 mg/dL, which does not explain these findings." },
      { text: "Hepatic encephalopathy", why: "Liver failure brings confusion with asterixis. It does not cause nystagmus, and the stem gives no liver findings." },
    ],
    actions: [
      { text: "Start IV dextrose before thiamine", why: "Glucose given before thiamine can worsen the thiamine deficit." },
      { text: "Give IV thiamine as prescribed", why: "Parenteral thiamine treats the deficiency and can reverse the eye and mental signs." },
      { text: "Give lorazepam by withdrawal protocol", why: "The client shows no withdrawal signs, so a benzodiazepine would only add sedation." },
      { text: "Restrict dietary protein intake", why: "Protein limits are not used here. The client needs nutrition after weeks of poor intake." },
      { text: "Put fall precautions in place", why: "An unsteady gait and confusion put the client at high risk of falling." },
    ],
    parameters: [
      { text: "Serum ammonia level", why: "Ammonia guides care for hepatic encephalopathy, which this is not." },
      { text: "Orientation and attention", why: "Improving mental status shows the thiamine is working." },
      { text: "Serum lipase level", why: "Lipase screens for pancreatitis. The stem gives no abdominal pain." },
      { text: "Eye movements and gait", why: "Nystagmus often improves within days of thiamine, and gait is followed for recovery." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose control and does not guide this acute care." },
    ],
    correct: { condition: 1, actions: [1, 4], parameters: [1, 3] },
  },
  {
    ...meta("rn-s12-12", {
      topic: "Responding to a fixed false belief",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 40-year-old client with delusional disorder tells the clinic nurse, \"My neighbors put a camera in my smoke detector to spy on me.\" The client has held this belief for months. Which response by the nurse is most therapeutic?",
      rationale:
        "A fixed false belief does not yield to argument. Arguing builds mistrust. Probing for details or joining a search reinforces the delusion. The nurse responds to the feeling behind the belief, which is fear of being watched. This keeps trust and moves the talk toward what the client feels and needs.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "\"No one would put a camera in a smoke detector.\"", why: "Arguing with a delusion does not change it and damages trust." },
      { text: "\"Which of the neighbors do you think did it?\"", why: "Asking for details focuses on the delusion and can strengthen it." },
      { text: "\"We could check the smoke detector together.\"", why: "Joining a search treats the belief as real and reinforces it." },
      { text: "\"Feeling watched sounds frightening for you.\"", why: "Naming the feeling responds to the client's distress without arguing or agreeing." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-13", {
      topic: "Request for a nurse of the same gender",
      cjmm: "action",
      process: "culture",
      difficulty: 2,
      stem: "A 34-year-old Muslim client who wears a hijab is admitted for a gynecologic procedure. She tells the charge nurse that her faith makes her uncomfortable being examined by a man. The nurse assigned to her for the next shift is male. What should the charge nurse do?",
      rationale:
        "The client has stated a faith-based preference about who touches her body. Respecting it supports dignity and trust. When staffing allows, the charge nurse assigns a female nurse. The request comes from the client, so she is the one to decide, not her husband. An open door or an explanation about workload does not address her concern.",
      sources: [GIGER],
    }),
    kind: "mc",
    options: [
      { text: "Assign a female nurse to her care when possible", why: "Honoring a stated faith-based preference respects her modesty and builds trust." },
      { text: "Explain that staff are assigned by workload", why: "This dismisses a reasonable request that the unit can often meet." },
      { text: "Ask her husband whether a male nurse is allowed", why: "She is an adult who stated her own wishes. The decision is hers." },
      { text: "Have the male nurse give care with the door open", why: "An open door reduces privacy and does not address her concern." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s12-14", {
      topic: "Cues of compassion fatigue in a colleague",
      cjmm: "recognize",
      process: "caring",
      difficulty: 3,
      stem: "A charge nurse on an oncology unit notices changes in a staff nurse over the past 2 months. Which findings suggest compassion fatigue? Select all that apply.",
      rationale:
        "Compassion fatigue follows repeated exposure to others' suffering. It shows as emotional numbness, avoidance of distressing contact, poor sleep, dread of work and irritability. Seeking a debrief, taking planned leave and offering to precept are healthy behaviors. They show engagement and self-care, not fatigue.",
      sources: [CAVANAGH],
    }),
    kind: "sata",
    options: [
      { text: "Offers to precept a new graduate", why: "Taking on a teaching role shows engagement with the work." },
      { text: "Avoids families of dying clients", why: "Avoiding distressing contact is a common sign of compassion fatigue." },
      { text: "Feels numb when a client dies", why: "Emotional numbing reflects reduced capacity for empathy." },
      { text: "Attends the unit debrief after a death", why: "Seeking a debrief is a healthy way to process a loss." },
      { text: "Sleeps poorly and dreads work", why: "Sleep problems and dread of work are linked to compassion fatigue." },
      { text: "Takes her planned vacation days", why: "Using planned leave is self-care that protects against fatigue." },
      { text: "Snaps at coworkers over small issues", why: "New irritability is a common sign of compassion fatigue." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s12-15", {
      topic: "Stage of the stress response",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 29-year-old client has cared for a parent with dementia for 3 years with little help. Over the last few months the client has had four colds, constant fatigue and daily headaches. The client says, \"I can't keep going like this.\" Which stage of the general adaptation syndrome do these findings suggest?",
      rationale:
        "The client has faced stress for 3 years. Frequent infections, constant fatigue and daily headaches show that the ability to adapt is used up. That fits the stage of exhaustion. The alarm reaction and fight-or-flight response are short, early reactions to a new stressor. In the stage of resistance the body adapts and function is kept.",
      sources: [HALTER, MCEWEN],
    }),
    kind: "mc",
    options: [
      { text: "Alarm reaction", why: "The alarm reaction is the first short response to a new stressor, not years of strain." },
      { text: "Stage of resistance", why: "In resistance the body adapts and keeps function. This client is getting sick often." },
      { text: "Stage of exhaustion", why: "Long-term stress that wears down resources leads to illness and fatigue in this stage." },
      { text: "Fight-or-flight response", why: "Fight or flight is part of the acute alarm reaction, not a response to years of stress." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-16", {
      topic: "Telling delirium from dementia",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 81-year-old client is on day 2 after hip fracture repair. Her daughter says her mother lived alone and managed her own bills until last week. The nurse assesses the client. Which two findings best support delirium rather than dementia? Select two.",
      rationale:
        "Delirium starts suddenly and its course swings over hours. Confusion that began last evening in a woman who managed her own bills last week is an acute change. Alertness that shifts from drowsy to agitated within hours shows the fluctuating course. Disorientation, repeated questions and a low memory score can occur in both conditions. A history of hypertension does not tell the two apart.",
      sources: [INOUYE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Confusion started last evening", why: "A sudden onset is a core feature of delirium. Dementia develops over months." },
      { text: "Does not know the name of the hospital", why: "Disorientation to place occurs in both delirium and dementia." },
      { text: "Has a history of hypertension", why: "Hypertension is common in older adults and does not separate the two." },
      { text: "Alertness swings within hours", why: "A level of alertness that swings over hours fits the fluctuating course of delirium." },
      { text: "Asks the same question several times", why: "Repeated questions occur with memory loss in either condition." },
      { text: "Scores low on a brief memory test", why: "A low memory score is found in both conditions and does not tell them apart." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s12-17", {
      topic: "Limit setting with manipulative requests",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 26-year-old client with antisocial personality disorder is on an inpatient mental health unit. Patio access ends at 2200 for all clients. At 2215 the client tells the nurse, \"The night nurse lets me out on the patio late. You're cooler than her, so you'll let me too.\" Which response by the nurse is best?",
      rationale:
        "The client uses flattery and a claim about another nurse to get a special favor. The nurse restates the unit rule briefly and without debate. Limits work only when every staff member applies them the same way. Checking with the night nurse invites the client to play staff against each other. A private exception rewards manipulation. A why question opens a debate about the rule.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "\"I will check with the night nurse first.\"", why: "This treats the rule as open to negotiation and invites splitting among staff." },
      { text: "\"Patio access ends at 2200 for everyone.\"", why: "A calm, firm restatement of the limit applies the rule the same way to all clients." },
      { text: "\"Just this once, if you keep it quiet.\"", why: "A secret exception rewards manipulation and weakens the limit for all staff." },
      { text: "\"Why do you think she lets you do that?\"", why: "A why question opens a debate and keeps the focus on the other nurse." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-18", {
      topic: "A school-age child's view of death",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 3,
      stem: "The parents of a 9-year-old girl whose grandfather died 3 days ago ask the pediatric nurse what to expect as she grieves. Which statement by the nurse reflects this child's likely understanding of death?",
      rationale:
        "By school age most children understand that death is permanent and happens to everyone. They are curious about the physical side of death and may ask detailed questions about the body or the funeral. Expecting the dead person to return and believing one's thoughts caused the death are typical of preschool thinking. Children of every age grieve.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "\"She may expect him to come back soon.\"", why: "Seeing death as temporary is typical of preschool children, not a 9-year-old." },
      { text: "\"She is too young to feel real grief.\"", why: "Children of every age grieve, though they show it differently than adults." },
      { text: "\"She may think her thoughts caused it.\"", why: "Magical thinking about causing a death is typical of preschool children." },
      { text: "\"She may ask what happens to his body.\"", why: "School-age children know death is final and are curious about its physical details." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-19", {
      topic: "Care for a visual field loss after stroke",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 67-year-old client had a right-sided stroke 5 days ago and now has left homonymous hemianopia. The client eats only the food on the right half of the meal tray. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Left homonymous hemianopia removes the left half of the visual field in both eyes. The client sees only what is on the right, which is why food on the left is missed. The nurse approaches from the right so the client can see who is coming. The client learns to turn the head and scan to the left to bring the lost field into view. An eye patch treats double vision, not a field loss.",
      sources: [HINKLE, WINSTEIN],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should approach the client from {0} and teach the client to {1}.",
    blanks: [
      {
        options: [
          { text: "the left side", why: "The left field is lost, so an approach from the left is not seen and can startle." },
          { text: "the right side", why: "The right field is intact, so the client sees the nurse coming." },
          { text: "the side nearest the door", why: "The door side is not tied to the intact field and may fall in the blind half." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "keep the eyes on the right side of the tray", why: "Staying on the right keeps food on the left out of view." },
          { text: "turn the head to scan to the left", why: "Scanning toward the blind side brings the missing field into view." },
          { text: "wear a patch over the left eye", why: "A patch treats double vision. It does not restore a lost visual field." },
          { text: "close one eye while eating", why: "Closing one eye narrows vision further and does not help a field loss." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s12-20", {
      topic: "Early alcohol withdrawal after surgery",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 55-year-old client had surgery for a hip fracture yesterday. His wife tells the nurse that he drinks 8 beers a day. His last drink was 18 hours ago. Which findings should the nurse recognize as early signs of alcohol withdrawal? Select all that apply.",
      rationale:
        "Early withdrawal comes from rebound activity of the nervous system when alcohol stops. His last drink was 18 hours ago, which falls in the early window. A hand tremor, a heart rate of 112/minute, sweating and anxiety fit this pattern. Pinpoint pupils, slow breathing and slurred drowsy speech point to sedation or intoxication, not withdrawal.",
      refs: ["Early alcohol withdrawal signs usually begin 6 to 24 hours after the last drink."],
      sources: [ASAM_AW],
    }),
    kind: "sata",
    options: [
      { text: "Pinpoint pupils", why: "Pinpoint pupils suggest opioid effect. Withdrawal from alcohol does not cause them." },
      { text: "Fine hand tremor", why: "Tremor is one of the first signs of alcohol withdrawal." },
      { text: "Respiratory rate 10/minute", why: "Slow breathing suggests sedation. Withdrawal tends to speed breathing." },
      { text: "Heart rate 112/minute", why: "Withdrawal raises sympathetic activity, which speeds the heart." },
      { text: "Slurred speech and drowsiness", why: "Slurred speech and drowsiness fit intoxication or sedation, not withdrawal." },
      { text: "Sweating in a cool room", why: "Sweating reflects the sympathetic surge of early withdrawal." },
      { text: "Anxiety and restlessness", why: "Anxiety and restlessness are early withdrawal signs." },
    ],
    correct: [1, 3, 5, 6],
  },
];
