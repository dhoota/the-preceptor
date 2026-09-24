import type { Item } from "@/engine/types";
import { ACOG_PMH, APA_ED, CMS_RESTRAINT, DSM, HALTER, HINKLE, SAFETY_PLAN, TJC_SUICIDE, TOWNSEND, WIGLESWORTH, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s11-01", {
      topic: "Responding to auditory hallucinations",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 27-year-old client with schizophrenia sits alone and turns his head toward an empty corner. He says, \"The voices keep telling me I am worthless.\" Which response by the nurse is most therapeutic?",
      rationale:
        "The client hears voices that others cannot hear. The nurse states what is real without arguing and names the feeling behind the voices. This keeps trust and invites the client to talk. The nurse then asks whether the voices give commands to cause harm. Arguing, asking why and false reassurance each close the conversation.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "\"There are no voices, so try to ignore them.\"", why: "Denying the experience argues with the client and does not help the distress." },
      { text: "\"Why do you think the voices say that?\"", why: "A why question asks the client to explain a symptom and can feel like a challenge." },
      { text: "\"I don't hear them, but I see they upset you.\"", why: "This states reality gently and acknowledges the feeling the voices cause." },
      { text: "\"You are not worthless. The staff here care about you.\"", why: "Quick reassurance dismisses the experience and ends the discussion." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-02", {
      topic: "Warning signs of suicide risk",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 52-year-old client is admitted to a medical unit after a fall at home. During the first shift the nurse gathers information from the client and a neighbor. Which findings suggest a raised risk of suicide? Select all that apply.",
      rationale:
        "Giving away valued possessions and describing oneself as a burden are warning signs of suicidal intent. Living alone after a recent divorce adds isolation and loss. A firearm in the home gives access to a highly lethal means. Poor sleep in a noisy unit is expected. Asking about visiting hours and asking staff to call a daughter show connection to others, which protects.",
      sources: [HALTER, TJC_SUICIDE],
    }),
    kind: "sata",
    options: [
      { text: "Gave away prized tools last week", why: "Giving away valued items can show preparation for death." },
      { text: "Asks when visiting hours start", why: "Interest in visitors reflects connection with others, which is protective." },
      { text: "States, \"Soon I won't be a burden to anyone.\"", why: "Seeing oneself as a burden is a recognized warning sign of suicide." },
      { text: "Reports poor sleep in the noisy unit", why: "Poor sleep in a noisy hospital unit is common and expected." },
      { text: "Lives alone since a divorce last month", why: "Recent loss and social isolation raise suicide risk." },
      { text: "Keeps a loaded firearm at home", why: "Access to a firearm raises the chance that an attempt is fatal." },
      { text: "Asks the nurse to phone a daughter", why: "Reaching out to family shows a support system, which is protective." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s11-03", {
      topic: "First action on admission for suicide risk",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 34-year-old client is admitted to an inpatient mental health unit after an overdose. The client says the plan is to try again after discharge. The prescription is for one-to-one observation. Which action should the nurse take first?",
      rationale:
        "The client has a stated plan and recent attempt, so immediate safety comes first. The nurse searches the client and belongings for items that could cause harm. A no-harm contract has no proven protective effect. A unit tour can wait. A room far from the nurses' station makes observation harder.",
      sources: [TJC_SUICIDE, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Search the client and belongings for hazards", why: "Removing items that could be used for self-harm makes the room safe at once." },
      { text: "Have the client sign a no-harm contract", why: "No-harm contracts do not prevent suicide and do not replace a safe setting." },
      { text: "Give the client a tour of the unit", why: "Orientation matters but comes after the setting is made safe." },
      { text: "Assign a quiet room at the far end of the hall", why: "A distant room is harder for staff to watch. A room near the station is safer." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-04", {
      topic: "Parts of a suicide safety plan",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 19-year-old client is going home from the emergency department after a suicide risk assessment. The nurse and the client write a safety plan together. Which elements belong in the plan? Select three.",
      rationale:
        "A safety plan is a written list of steps the client can follow in a crisis. It names personal warning signs and ways to make the home safer, such as locking up medications. It lists people and crisis lines to contact. A pledge not to self-harm is a no-suicide contract, which is not part of the plan. Avoiding friends deepens isolation.",
      sources: [SAFETY_PLAN, TJC_SUICIDE],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Personal warning signs of a crisis", why: "Knowing early signs lets the client start the plan before the crisis peaks." },
      { text: "A written pledge not to self-harm", why: "A pledge is a no-suicide contract. It is not a step of a safety plan." },
      { text: "Steps to lock up or remove lethal means", why: "Reducing access to lethal means lowers the risk of a fatal attempt." },
      { text: "Names and numbers of people to call", why: "Contacts the client can reach in a crisis are a core step of the plan." },
      { text: "A plan to avoid friends for a while", why: "Withdrawing from friends increases isolation, which raises risk." },
      { text: "A list of past diagnoses and hospital admissions", why: "Clinical history does not tell the client what to do in a crisis." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s11-05", {
      topic: "Care approach for somatic symptoms",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 45-year-old client has come to the clinic 9 times in 6 months with stomach pain and headaches. Repeated tests have found no disease to explain the symptoms. The client spends hours each day reading about illnesses online. Which approach should the nurse plan?",
      rationale:
        "The pattern of frequent visits, normal tests and hours of health worry fits somatic symptom disorder. The symptoms are real to the client. Regular scheduled visits reduce the urge to seek unplanned care. Shifting the talk toward stress and feelings links the symptoms to their emotional triggers. Calling the symptoms imagined breaks trust. New referrals and long symptom reviews reinforce the focus on illness.",
      sources: [HALTER, DSM],
    }),
    kind: "mc",
    options: [
      { text: "Tell the client the symptoms are imagined", why: "The symptoms are real to the client. Dismissing them damages the relationship." },
      { text: "Review each new symptom in depth at every visit", why: "Long symptom reviews reward the illness focus and raise anxiety." },
      { text: "Suggest a referral to a different specialist", why: "New specialists add tests and feed the cycle of seeking care." },
      { text: "Schedule regular visits and discuss stressors", why: "Planned visits and talk about stress address the anxiety behind the symptoms." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-06", {
      topic: "Sequence for de-escalating agitation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on an inpatient mental health unit paces, clenches both fists and shouts at another client in the dayroom. Staff have not yet tried any intervention. An as-needed oral medication is prescribed. Place the nurse's actions in the order they should occur.",
      rationale:
        "Care moves from the least to the most restrictive step. Other clients are moved out of harm's way first. The nurse then speaks calmly and uses the client's name to lower arousal. Offering a choice of a quiet room or a walk gives the client control. An as-needed oral medication is offered if verbal steps fail. Restraint is a last resort and is not needed here. Firm commands tend to escalate anger.",
      sources: [HALTER, CMS_RESTRAINT],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Offer a quiet room or a walk", why: "A choice gives the client a sense of control and follows calm verbal contact." },
      { text: "Apply mechanical wrist restraints", why: "Restraint is used only when less restrictive steps fail and danger is imminent." },
      { text: "Move other clients out of the dayroom", why: "Removing others first protects them and lowers the stimulation around the client." },
      { text: "Offer the as-needed oral medication", why: "Oral medication is offered when verbal steps have not calmed the client." },
      { text: "Speak calmly using the client's name", why: "A calm voice and the client's name lower arousal and open communication." },
      { text: "Tell the client firmly to stop shouting", why: "Commands can feel like a challenge and often escalate anger." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s11-07", {
      topic: "Time limits for violent behavior restraint",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "At 1410, a 34-year-old client who struck a staff member is placed in 4-point restraints on a prescription from the primary health care provider. The client still shouts and pulls against the straps. Which action must occur by 1510?",
      rationale:
        "Restraint used for violent behavior requires a face-to-face evaluation within 1 hour of the start. A provider or a trained registered nurse checks the client's condition, reaction and need to continue. A prescription for an adult lasts up to 4 hours before renewal. A trial release depends on the client's behavior, not the clock. Family consent is not required.",
      refs: [
        "A client restrained for violent or self-destructive behavior is seen face to face within 1 hour of the start.",
        "Each restraint prescription for violent behavior in adults 18 and older lasts up to 4 hours.",
      ],
      canada:
        "Canada has no national rule like the US 1 hour face-to-face evaluation. Restraint rules come from provincial laws, such as mental health acts, and employer least restraint policies, so they vary by province.",
      sources: [CMS_RESTRAINT,
        { body: "Canadian Nurses Protective Society", work: "InfoLAW: Patient Restraints", year: 2021, url: "https://cnps.ca/article/patient-restraints/" },
      ],
    }),
    kind: "mc",
    options: [
      { text: "A trial release of one limb restraint", why: "Release depends on the client's behavior. The client is still pulling against the straps." },
      { text: "A face-to-face evaluation of the client", why: "Federal rules require this evaluation within 1 hour of starting restraint for violence." },
      { text: "A renewal of the restraint prescription", why: "An adult prescription lasts up to 4 hours, so renewal is not due within the first hour." },
      { text: "Written consent from the client's family", why: "Emergency restraint for safety does not need family consent." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-08", {
      topic: "Psychosis after childbirth",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client who gave birth 6 days ago is brought to the emergency department by her partner. She has slept about 2 hours in 3 nights. She talks rapidly and says the baby is an impostor. She says a voice told her the baby must be \"set free.\" Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Onset within days of birth, little sleep, rapid speech, a delusion about the baby and a voice with a message about the baby fit postpartum psychosis. It is a psychiatric emergency with a risk of harm to the infant and to self. The client needs constant observation and the infant must be cared for by another adult. Staff monitor the content of any command voices and thoughts of harming self or the infant.",
      sources: [ACOG_PMH, HALTER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Postpartum psychosis", why: "Delusions and a voice about the baby days after birth fit this emergency." },
      { text: "Postpartum blues", why: "Blues cause tearfulness and mood swings without delusions or hallucinations." },
      { text: "Postpartum depression", why: "Depression centers on low mood. It does not explain the delusion and rapid speech." },
      { text: "Postpartum anxiety", why: "Anxiety causes worry and tension, not fixed false beliefs or voices." },
    ],
    actions: [
      { text: "Maintain constant observation", why: "The client may act on the voice, so staff stay with her at all times." },
      { text: "Ensure another adult cares for the infant", why: "The delusion and the voice focus on the baby, so the infant needs protection." },
      { text: "Arrange discharge with a clinic visit", why: "Psychosis with risk to the infant needs emergency care, not discharge." },
      { text: "Bring the infant in to breastfeed now", why: "Contact now could expose the infant to harm from the delusion." },
      { text: "Teach sleep habits and plan a recheck", why: "Sleep teaching does not treat psychosis or manage the risk to the infant." },
    ],
    parameters: [
      { text: "Content of command voices", why: "Commands to harm the baby show how urgent the danger is." },
      { text: "Fundal height and color of the lochia", why: "These track uterine recovery and do not guide care of the psychosis." },
      { text: "Thoughts of harming self or infant", why: "Both suicide and infant harm are risks in postpartum psychosis." },
      { text: "Daily weight of the infant", why: "Infant weight does not measure the danger from the client's symptoms." },
      { text: "Blood glucose before meals", why: "Nothing in the stem suggests a glucose problem." },
    ],
    correct: { condition: 0, actions: [0, 1], parameters: [0, 2] },
  },
  {
    ...meta("rn-s11-09", {
      topic: "Physical signs of elder abuse",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An 81-year-old client with moderate dementia comes to the clinic with an adult son, who is the only caregiver. The son answers every question for the client. Which finding should the nurse follow up as a possible sign of abuse?",
      rationale:
        "Bruises of different colors on both upper arms suggest repeated grabbing at different times. Together with a caregiver who speaks for the client, they call for a private assessment. Purple patches on the backs of the hands are common aging changes in fragile skin. Forgetting the date fits moderate dementia. A stable weight of 58 kg does not suggest neglect.",
      sources: [WIGLESWORTH, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Purple patches on the backs of both hands and forearms", why: "Fragile vessels in aging skin cause these patches on the hands and forearms." },
      { text: "Forgets the date and the clinic's name", why: "Disorientation to time and place fits moderate dementia." },
      { text: "Bruises of different colors on both upper arms", why: "Bruises in different stages on both upper arms suggest repeated forceful grabbing." },
      { text: "Weight unchanged at 58 kg since last visit", why: "A stable weight does not suggest neglect of nutrition." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-10", {
      topic: "Medical instability in anorexia nervosa",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 17-year-old client with anorexia nervosa is admitted for medical stabilization. The nurse reviews the admission note. Click to highlight the findings that need immediate follow-up.",
      rationale:
        "A resting heart rate of 42/minute is below 50/minute. Systolic BP falls from 104 to 78 mmHg on standing, a drop of more than 20 mmHg. A temperature of 35.4°C is below 36°C. Potassium of 2.8 mEq/L is low and raises the risk of arrhythmia. Lanugo, thin hair, cold hands and a distorted body image are expected with the illness.",
      refs: [
        "For adolescents, heart rate below 50/minute, a systolic drop of more than 20 mmHg on standing and temperature below 36°C (96.8°F) support hospitalization.",
        "Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L).",
      ],
      canada:
        "Canadian labs report potassium in mmol/L only. The Medical Council of Canada lists 3.5 to 5.1 mmol/L, so 2.8 mmol/L is still low.",
      sources: [APA_ED, HINKLE,
        { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" },
      ],
    }),
    kind: "highlight",
    passage:
      "[[Heart rate 42/minute at rest]]. [[BP 104/66 mmHg lying and 78/48 mmHg standing]]. [[Temperature 35.4°C (95.7°F)]]. [[Lanugo on the back and arms]]. [[Serum potassium 2.8 mEq/L (2.8 mmol/L)]]. [[Says she feels fat]]. [[Hair thin and dry]]. [[Reports cold hands and feet]].",
    spans: [
      { text: "Heart rate 42/minute at rest", why: "A resting rate under 50/minute in an adolescent signals medical instability." },
      { text: "BP 104/66 mmHg lying and 78/48 mmHg standing", why: "Systolic BP falls from 104 to 78 mmHg on standing, a sign of orthostatic hypotension." },
      { text: "Temperature 35.4°C (95.7°F)", why: "A temperature under 36°C signals instability from malnutrition." },
      { text: "Lanugo on the back and arms", why: "Fine body hair is an expected sign of starvation and is not an acute danger." },
      { text: "Serum potassium 2.8 mEq/L (2.8 mmol/L)", why: "Low potassium can cause dangerous arrhythmias." },
      { text: "Says she feels fat", why: "A distorted body image is part of the illness and is not an acute danger." },
      { text: "Hair thin and dry", why: "Thin hair is an expected result of malnutrition." },
      { text: "Reports cold hands and feet", why: "Cold hands and feet are common in low body weight and need no urgent action." },
    ],
    correct: [0, 1, 2, 4],
  },
];
