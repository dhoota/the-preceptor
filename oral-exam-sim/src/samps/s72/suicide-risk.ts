// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  dcPeds: { id: "dc-t1d-peds", citation: "Wherrett DK, Ho J, Huot C, Legault L, Nakhla M, Rosolowsky E, Diabetes Canada Clinical Practice Guidelines Expert Committee. Type 1 diabetes in children and adolescents. Can J Diabetes. 2018.", url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34" },
  cpsYouth: { id: "cps-youth-2015", citation: "Korczak DJ, Canadian Paediatric Society Mental Health and Developmental Disabilities Committee. Suicidal ideation and behaviour. Paediatr Child Health. 2015.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4472054/" },
  mbMha: { id: "mb-mha", citation: "The Mental Health Act, C.C.S.M. c. M110 (Manitoba), sections 1, 8, 9, 17 and 20, as amended by S.M. 2026, c. 13. Current to October 2026.", url: "https://web2.gov.mb.ca/laws/statutes/ccsm/m110.php" },
  beck: { id: "beck-hopelessness", citation: "Beck AT, Steer RA, Kovacs M, Garrison B. Hopelessness and eventual suicide: a 10-year prospective study of patients hospitalized with suicidal ideation. Am J Psychiatry. 1985.", url: "https://pubmed.ncbi.nlm.nih.gov/3985195/" },
  sullivan: { id: "sullivan-idd", citation: "Sullivan WF, Diepstra H, Heng J, and colleagues. Primary care of adults with intellectual and developmental disabilities: 2018 Canadian consensus guidelines. Can Fam Physician. 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068" },
  nice: { id: "nice-ng225", citation: "National Institute for Health and Care Excellence. Self-harm: assessment, management and preventing recurrence. NICE guideline NG225. 2022.", url: "https://www.nice.org.uk/guidance/ng225/chapter/Recommendations" },
  kouyoumdjian: { id: "kouyoumdjian-custody", citation: "Kouyoumdjian FG, Kiefer L, Wobeser W, Gonzalez A, Hwang SW. Mortality over 12 years of follow-up in people admitted to provincial custody in Ontario: a retrospective cohort study. CMAJ Open. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4933645/" },
  phac988: { id: "phac-988", citation: "Public Health Agency of Canada. Mental health support: get help. 9-8-8 Suicide Crisis Helpline. 2026.", url: "https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html" },
  ccsmh: { id: "ccsmh-suicide", citation: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health: the assessment of suicide risk and prevention of suicide. 2006.", url: "https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf" },
  oliva: { id: "oliva-opioid-stop", citation: "Oliva EM, Bowe T, Manhapra A, and colleagues. Associations between stopping prescriptions for opioids, length of opioid treatment, and overdose or suicide deaths in US veterans: observational evaluation. BMJ. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7249243/" },
} satisfies Record<string, Source>;

export const SUICIDE_RISK_S72: Samp[] = [
  /* 39 Recurrent ketoacidosis in a teenager --------------------------------- */
  {
    id: "suicide-risk-39",
    topic: "suicide-risk",
    title: "A meter used on three days",
    stem:
      "A 16-year-old girl is brought to the emergency department by her father after she fainted at volleyball practice. She has had type 1 diabetes since age 9 and uses insulin glargine and insulin aspart pens. Her HbA1c has risen from 7.6% to 12.9% over 6 months, and she has lost 6 kg since the summer. The pharmacy confirms that every refill was collected on time. Her glucose meter shows readings on only 3 days in the past month. She says she takes every dose. She has lived with her father since her parents separated in the spring. Glucose is 24 mmol/L, venous pH 7.28, bicarbonate 15 mmol/L and beta-hydroxybutyrate 3.4 mmol/L. Her injection sites look normal, with no lipohypertrophy. She has no fever and no source of infection on examination.",
    vitals: { temperature: "36.7°C oral", pulse: "106/minute", resp: "22/minute", bp: "112/70 mmHg", o2sat: "99% on room air", weight: "51 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for her rising HbA1c and her ketosis today?",
        options: ["Faulty pen needle technique", "Insulin degraded by heat exposure", "Intentional insulin omission", "Lipohypertrophy at injection sites", "Occult urinary infection"],
        correct: 2,
        explanation:
          "Refills collected on time, a meter used on only 3 days in a month, a 6 kg weight loss and an HbA1c that rose from 7.6% to 12.9% while she reports taking every dose point to insulin she is choosing not to take. Diabetes Canada states that ketoacidosis in established diabetes results from failing to take insulin or poor sick-day management, and advises considering an eating disorder in adolescent girls when insulin omission is suspected. Heat-damaged insulin and poor needle technique give erratic glucose but would not explain an unused meter and weight loss, and her injection sites show no lipohypertrophy. She has no fever and no source on examination, and an infection would not explain 6 months of rising HbA1c.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "dc-t1d-peds",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her ketosis clears with IV fluids and insulin. Speaking with you alone, she says she skips insulin to lose weight and that nobody at home notices.",
        prompt: "Which of the following is the most important question to ask her next?",
        options: ["Her daily calorie intake", "Her last menstrual period", "Her target body weight", "Whether she makes herself vomit", "Whether she skips doses to die"],
        correct: 4,
        explanation:
          "Skipping a drug she needs to stay alive is behaviour that harms her, and the Canadian Paediatric Society advises asking adolescents about the intent behind self-harming behaviour and asking directly whether they want to end their life. Whether any missed dose was meant to cause death decides her immediate safety and her disposition, so it comes first. Calorie intake, purging, menstrual history and target weight all belong in an eating disorder assessment, and the eating disorder team will need them, but none of them tells you whether she is at risk of dying by suicide tonight.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "cps-youth-2015",
      },
      {
        id: "q3",
        kind: "single",
        update: "She says that on some nights she skipped insulin hoping she would not wake up. She has no other plan. She says things will never get better.",
        prompt: "Which of the following is the most important additional factor to ask her about now?",
        options: ["Access to insulin and pills", "Age at her diabetes diagnosis", "Her most recent HbA1c result", "Her school marks this term", "Hours of screen time each day"],
        correct: 0,
        explanation:
          "She has used insulin omission with the hope of dying and feels hopeless, so the method and its availability matter most. Unlike a firearm, her insulin cannot be removed from the home, and a large dose can cause fatal hypoglycemia. The Canadian Paediatric Society advises asking whether a youth has access to the means, such as medications, to carry out a plan. Ask too about other pills in the home. Her HbA1c, age at diagnosis, school marks and screen time add context, but none of them changes how safe she is tonight.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "cps-youth-2015",
      },
      {
        id: "q4",
        kind: "single",
        update: "The next morning she has no intent, wants to go home and agrees to a plan. Her father is working from home for the next 2 weeks. The eating disorder program can see her in 3 days.",
        prompt: "Which of the following is the most appropriate arrangement for her insulin at home, agreed with her and her father?",
        options: ["Daily pharmacy pickup of one pen", "Dose diary kept by her", "Doses supervised by her father", "Pump started before discharge", "Weekly phone check by the clinic"],
        correct: 2,
        explanation:
          "Her father giving or watching each dose keeps a life-sustaining drug in use while closing the gap that allowed both omission and a possible overdose. It also brings a trusted adult into her daily care, which the Canadian Paediatric Society advises when a youth goes home, and Diabetes Canada notes that family support lowers the rate of ketoacidosis. A diary she keeps relies on the same self-report that hid her missed doses for months. A pump started at discharge is a large change that she could still stop or misuse. A weekly phone check is too infrequent, and a daily pickup of one pen is impractical and still unsupervised.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "cps-youth-2015",
      },
    ],
    sources: [S.dcPeds, S.cpsYouth],
    ...META,
  },
  /* 40 Video examination from a northern nursing station ------------------- */
  {
    id: "suicide-risk-40",
    topic: "suicide-risk",
    title: "A video call from the nursing station",
    stem:
      "You are working in a regional hospital in northern Manitoba. A registered nurse, who is not a nurse practitioner, calls you by video from a nursing station in a fly-in community 400 km away. RCMP officers have brought a 34-year-old man there. His sister saw a goodbye message he posted online, and officers found him walking out onto thin spring ice on the river. His partner left with their children last month. He drinks heavily on weekends and took an overdose of acetaminophen at age 20. He has now been sober for 6 hours. On camera he is calm, gives brief answers and makes little eye contact. The next visiting physician is due in 3 days.",
    vitals: { temperature: "36.6°C oral", pulse: "88/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "He says he walked onto the ice to clear his head and has no plan now.",
        prompt: "Which of the following questions most directly assesses his level of hopelessness?",
        options: ["Can you picture things getting better?", "Do you often act before you think?", "Have you ever tried to end your life?", "How much did you drink this weekend?", "Who could you call if things got worse?"],
        correct: 0,
        explanation:
          "Hopelessness is a fixed expectation that the future will not improve, so it is assessed by asking how he sees what lies ahead. In a cohort of patients admitted with suicidal ideation and followed for 5 to 10 years, the Hopelessness Scale and a single pessimism item were the only baseline measures that predicted later suicide. Acting before thinking measures impulsivity. The past attempt question, the drinking question and the question about who he could call measure a prior attempt, alcohol use and supports. Each of those is worth asking, but none of them tells you whether he believes his life can get better.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "beck-hopelessness",
      },
      {
        id: "q2",
        kind: "single",
        update: "He says nothing will change and he has nothing left to live for. He refuses to fly out for assessment and says he will walk out of the nursing station.",
        prompt: "Under the Manitoba Mental Health Act, which of the following must you also find, beyond a mental disorder and likely serious harm?",
        options: ["Imminent risk of harm within 24 hours", "Inability to consent to treatment", "Previous involuntary psychiatric admission", "Support from a second physician", "Unwillingness to undergo a voluntary assessment"],
        correct: 4,
        explanation:
          "Section 8 lets a qualified health professional who examines a person apply for an involuntary psychiatric assessment when the person has a mental disorder, is likely because of it to cause serious harm to self or others or to deteriorate substantially, and is unwilling to undergo or not mentally competent to consent to a voluntary assessment. He refuses to go, so the third criterion is met. The Act asks for likely harm, not harm within 24 hours. Incapacity to consent to treatment is a separate question decided later. No second physician and no past admission are required.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "mb-mha",
      },
      {
        id: "q3",
        kind: "single",
        update: "No physician can reach the community before the scheduled visit. The nurse asks how to proceed while he waits with the officers.",
        prompt: "Which of the following is the most appropriate way to proceed under the current Manitoba Mental Health Act?",
        options: ["Ask police to hold him for 3 days", "Ask the nurse to sign the application", "Examine him by video and apply now", "Release him with his sister watching", "Wait for the physician visit in 3 days"],
        correct: 2,
        explanation:
          "Since October 2026 the Act lets a qualified health professional examine a person without being present when an in-person examination is not reasonably practicable, and the application must be made within 2 days of that examination. It must state that you examined him personally, the date, and the facts you observed apart from those reported by others. A registered nurse who is not a nurse practitioner is not a qualified health professional under the Act. Nurse practitioners are added by an amendment in force from November 1, 2026. Police may take a person to be examined but have no power to hold him for days. Releasing him or waiting 3 days leaves a hopeless man with a past attempt, a goodbye message and a walk onto thin ice without protection.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "mb-mha",
      },
      {
        id: "q4",
        kind: "single",
        update: "A medevac flight will take him to a designated psychiatric facility tonight.",
        prompt: "Which of the following does an application under section 8 authorize once he arrives at the designated facility?",
        options: ["Admission until a review board hearing", "Detention and assessment for 72 hours", "Detention up to 24 hours", "Involuntary admission for 21 days", "Treatment without his consent"],
        correct: 1,
        explanation:
          "Under section 9 the application allows a peace officer to take him into custody and bring him to a facility, where he may be detained, restrained and observed for no more than 72 hours while a psychiatrist examines him. He must be released within 72 hours unless he is admitted. An involuntary admission certificate, valid for up to 21 days, is a separate decision that only the assessing psychiatrist can make under section 17. The 24-hour limit applies to the examination of a person brought in by police or by court order. The application does not authorize treatment without consent, and a review board hearing plays no part in this step.",
        keyFeature: { topic: "suicide-risk", n: 3 },
        source: "mb-mha",
      },
    ],
    sources: [S.mbMha, S.beck],
    ...META,
  },
  /* 41 Grief in a man with an intellectual disability ----------------------- */
  {
    id: "suicide-risk-41",
    topic: "suicide-risk",
    title: "He wants to go to heaven",
    stem:
      "A 27-year-old man with Down syndrome and a mild intellectual disability is brought to the emergency department by a support worker from his group home. This afternoon he told staff he wants to be dead so he can go to heaven and be with his grandmother, who died 3 weeks ago. Staff say he has slept poorly, has stopped going to his job at a bakery and cries at night. He has never harmed himself. He has hypothyroidism and takes levothyroxine, given by staff. A TSH done 2 weeks ago was normal. He speaks in short sentences and seems anxious in the busy department. The support worker answers most of your questions for him. Examination is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "118/74 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to assess his thoughts of suicide?",
        options: ["Ask the support worker to answer for him", "Defer questions until a psychiatrist arrives", "Have him complete a written rating scale", "Rely on the group home incident report", "Speak with him directly in plain words"],
        correct: 4,
        explanation:
          "The Canadian consensus guidelines advise addressing adults with an intellectual disability directly, slowing down, using their preferred way of communicating and finding a short time alone with them to ask about safety. Caregivers who know him help him communicate, but they cannot report his inner thoughts for him. A written scale may be beyond his reading level, and a score cannot replace hearing his own account. An incident report is second-hand. Deferring every question to a psychiatrist leaves his risk unknown while he waits in a noisy department that is already making him anxious.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "sullivan-idd",
      },
      {
        id: "q2",
        kind: "single",
        update: "In a quiet room he says he misses his grandmother and wants to see her in heaven. He has no plan and says he would not hurt himself. He likes his housemates and wants to go back to work.",
        prompt: "Which of the following is the most appropriate disposition for him from the emergency department?",
        options: ["Admission to a medical ward", "Involuntary psychiatric assessment", "Observation overnight in the department", "Return home with a shared safety plan", "Transfer to an inpatient psychiatric unit"],
        correct: 3,
        explanation:
          "His wish to be with his grandmother follows a recent death, and he has no plan, no intent and no past self-harm. He has staff with him around the clock, housemates he likes and a job he wants to go back to. A plan made with him and his caregivers fits the shared decision making the Canadian consensus guidelines advise for adults with an intellectual disability. Nothing suggests he meets criteria for an involuntary assessment. An overnight stay, a ward bed or a psychiatric admission would take him away from the routine and people that support him, without adding safety.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "sullivan-idd",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following are most appropriate to include in his discharge plan?",
        options: ["Antidepressant started today", "Bereavement support adapted for him", "Family physician review within 72 hours", "Leave from his bakery job", "Move to a quieter group home", "One-to-one staff watch at all times", "Picture-based safety plan made with him"],
        correct: [1, 2, 6],
        explanation:
          "A safety plan written with him, using pictures or simple words, follows guideline 2.3 of the Canadian consensus guidelines, which advises using his preferred communication tools. Guideline 30.2 advises a debrief with the patient and caregivers as soon as possible, for example within 72 hours, after an emergency visit. Grief support suited to his level of understanding treats the cause of his distress. Three weeks of grief does not call for an antidepressant today. Moving him away from housemates he likes, or taking him off his job, removes the people and routine that protect him. Constant one-to-one watching is out of proportion to his risk.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "sullivan-idd",
      },
      {
        id: "q4",
        kind: "single",
        update: "The support worker asks whether you could prescribe something to help him sleep until the grief settles.",
        prompt: "Which of the following is the most appropriate advice about a sleep medication for him?",
        options: ["Diphenhydramine 50 mg PO at bedtime", "Lorazepam 1 mg PO at bedtime", "Quetiapine 25 mg PO at bedtime", "Zopiclone 7.5 mg PO at bedtime", "No new sedative at this time"],
        correct: 4,
        explanation:
          "His poor sleep is part of a normal grief reaction, and the guidelines advise starting psychotropic drugs low and slowly, reviewing them often and saving them for when other measures fail. A sleep routine, support at night from staff and the follow-up review are the first steps. Diphenhydramine is anticholinergic and can cause confusion. Lorazepam and zopiclone add sedation, falls and dependence. Quetiapine carries metabolic effects and is not recommended as a sleep aid. Staff already hold his medications, but a new sedative still adds harm without treating the cause.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "sullivan-idd",
      },
    ],
    sources: [S.sullivan],
    ...META,
  },
  /* 42 Six days after release from custody ---------------------------------- */
  {
    id: "suicide-risk-42",
    topic: "suicide-risk",
    title: "Six days out",
    stem:
      "A 31-year-old man presents to the emergency department at 19:30 asking to talk to someone. He was released from a provincial correctional centre 6 days ago after 8 months in custody. He is staying at a men's shelter with a 22:00 curfew. He used fentanyl daily before his sentence and has not used since. He has no contact with his family. Twice this week he has thought everyone would be better off without him. He tried to hang himself at age 19 after his brother died. He has no phone. He is tired and tearful but makes good eye contact, and his speech and thinking are normal. Pupils are 4 mm. Examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "16/minute", bp: "126/78 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes how suicide risk changes after release from custody?",
        options: ["Highest in the first month out", "Highest once probation ends", "Lower than during custody", "Peaks 1 year after release", "Same as the general population"],
        correct: 0,
        explanation:
          "In people released from Ontario provincial custody, the suicide rate was 2.3 per 1000 person-years in the first 4 weeks against 0.4 per 1000 after 52 weeks, and the standardized mortality ratio for suicide was 14.0 in the first 2 weeks. He is 6 days out, in the period of highest risk. The rate of suicide is also higher after release than during custody, and it stays well above that of the general population. The Ontario data show the highest rate early, not a later peak at 1 year or at the end of probation.",
        keyFeature: { topic: "suicide-risk", n: 1 },
        source: "kouyoumdjian-custody",
      },
      {
        id: "q2",
        kind: "single",
        update: "After a full assessment he has passive thoughts only, with no plan or intent. He wants help and agrees to a safety plan. The psychiatry team can see him at a clinic in 2 days. It is now 21:00.",
        prompt: "Which of the following is the most appropriate disposition for him tonight?",
        options: ["Admit for psychiatric assessment tomorrow", "Hold until his probation officer is reached", "Keep him in the department overnight", "Return to the shelter before curfew", "Transfer to a withdrawal management centre"],
        correct: 3,
        explanation:
          "He has passive thoughts, no plan or intent, a safety plan he helped make and a clinic visit in 2 days, so outpatient care is appropriate. Getting him back before 22:00 protects his shelter bed, and losing housing in the first week after release would add another stressor. NICE advises against using risk tools or low, medium and high labels to decide who is discharged, so the decision rests on his assessment, needs and plan. An overnight stay or an admission adds nothing for a man with low acute risk. His probation officer has no role in his medical discharge, and he is not using drugs, so withdrawal management does not fit.",
        keyFeature: { topic: "suicide-risk", n: 4 },
        source: "nice-ng225",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following are most appropriate to add to his outpatient plan before he leaves?",
        options: ["Crisis line 9-8-8 by call or text", "Follow-up only if he feels worse", "Lorazepam 1 mg as needed, 14 tablets", "Naloxone kit with training", "Shelter staff told of the plan, with consent", "Urine drug screen before follow-up", "Zopiclone 7.5 mg at bedtime, 30 tablets"],
        correct: [0, 3, 4],
        explanation:
          "The 9-8-8 Suicide Crisis Helpline takes calls and texts at any hour anywhere in Canada, and he can reach it from the shelter phone. After 8 months without opioids his tolerance is low, and in people released from Ontario custody the overdose death rate in the first 2 weeks was 56 times that of the general population, so a naloxone kit protects him if he relapses. With his consent, shelter staff can support his plan and notice if he worsens. Follow-up only when he feels worse leaves him alone in the riskiest weeks. A drug screen does not need to come before care, and supplies of lorazepam or zopiclone add overdose risk.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "phac-988",
      },
      {
        id: "q4",
        kind: "single",
        update: "The community mental health clinic can see him in 2 days. He has no phone and no fixed daytime place.",
        prompt: "Which of the following is the most appropriate way to arrange his follow-up visit?",
        options: ["Ask him to call the clinic tomorrow", "Fax a referral and await a call", "Leave a message on a friend's phone", "Set a dated visit before he leaves", "Tell him to walk in when he is ready"],
        correct: 3,
        explanation:
          "Without a phone he cannot take a call-back, and a man in the first weeks after release is at the highest risk of suicide and of dropping out of care. A visit with a set date, time and place, written down and handed to him before he leaves, removes those steps. NICE advises that people leave with clear contact details for the team providing aftercare. Asking him to call, waiting for the clinic to reach him or relying on a friend's phone each adds a step that can fail. An open walk-in offer has no fixed time and is the easiest to postpone.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "nice-ng225",
      },
    ],
    sources: [S.kouyoumdjian, S.nice, S.phac988],
    ...META,
  },
  /* 43 Older man struck on the highway after an opioid stop ----------------- */
  {
    id: "suicide-risk-43",
    topic: "suicide-risk",
    title: "Checking a fence at night",
    stem:
      "A 71-year-old man is brought to the emergency department by ambulance after a pickup truck struck him at 23:00 on the unlit highway beside his farm. The driver told police the man stepped off the shoulder into his lane. He has a closed left tibial fracture and three left rib fractures. FAST is negative. He says he went out to check a fence. He has knee osteoarthritis and took oxycodone for 6 years until his new family physician stopped it 5 weeks ago. His wife has dementia and moved into long-term care in the spring. His breath alcohol is zero. He is alert and oriented, with a GCS of 15.",
    vitals: { temperature: "36.4°C oral", pulse: "98/minute", resp: "20/minute", bp: "148/84 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features of his presentation most raise concern that the collision was intentional?",
        options: ["Abrupt stop of long-term oxycodone", "Closed fracture of the left tibia", "Collision on an unlit highway", "Driver's report that he stepped out", "Fractures on the left side only", "Negative FAST examination", "Wife's recent move into long-term care"],
        correct: [0, 3, 6],
        explanation:
          "A witness who saw him step into the lane makes a simple accident less likely. Stopping opioids after years of use is linked with a higher risk of death from overdose or suicide, and the move of his wife into long-term care is a recent loss and change in his life. The Canadian seniors' guideline lists equivocal acts that look accidental among the suicide risk factors in older adults. An unlit highway at night is the usual explanation for an accidental pedestrian collision and does not point to intent. The side and type of his fractures and the negative FAST describe his injuries, not why they happened.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "ccsmh-suicide",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes suicidal behaviour in older adults compared with younger adults?",
        options: ["Attempts are mostly impulsive", "Fewer attempts per suicide death", "Ideation is usually stated openly", "Most have a terminal illness", "Warning signs are more obvious"],
        correct: 1,
        explanation:
          "Non-lethal self-harm is about 20 times more common than suicide in the general population, but in older adults the ratio is less than four to one, so an older person's act is far more likely to be fatal. That is why an equivocal injury in an older man deserves a direct question about intent. Depressed older adults often present with physical complaints rather than low mood, so ideation and warning signs are easier to miss, not more obvious. Most older adults who die by suicide do not have a severe or terminal illness.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "ccsmh-suicide",
      },
      {
        id: "q3",
        kind: "single",
        update: "After analgesia, asked directly, he says the pain and the empty house were too much and he walked into the truck's path. He is admitted to orthopaedics for fixation.",
        prompt: "Which of the following best describes the link between stopping long-term opioid therapy and death from overdose or suicide?",
        options: ["Higher risk, greatest after longer use", "Higher risk only in the first week", "Lower risk once withdrawal ends", "No link after adjustment for pain", "Risk limited to people with cancer"],
        correct: 0,
        explanation:
          "In a cohort of over 1.3 million veterans, stopping opioids was linked to a higher risk of death from overdose or suicide at every length of prior treatment. The hazard ratio rose from 1.67 after 30 days or less of treatment to 6.77 after more than 400 days, so his 6 years of use place him in the highest group. The association persisted after adjustment and was not confined to the first week or to cancer pain. The authors note it cannot be assumed to be causal, but it is a reason to ask about suicide when long-term opioids stop.",
        keyFeature: { topic: "suicide-risk", n: 2 },
        source: "oliva-opioid-stop",
      },
      {
        id: "q4",
        kind: "single",
        update: "After fixation and psychiatric care he no longer has intent and is ready for discharge home with his son staying with him. He still needs an opioid for his fractures.",
        prompt: "Which of the following is the most appropriate opioid prescribing plan to discuss with him at discharge?",
        options: ["Oxycodone at his previous long-term dose", "Short supply with a dated review visit", "Thirty-day supply to prevent gaps", "Tramadol in place of any oxycodone", "No opioid given his recent history"],
        correct: 1,
        explanation:
          "NICE advises shared decisions to limit the quantity of medicines supplied after self-harm, with a review of each drug. A short supply with a set review limits what he can take at once and plans the taper rather than another sudden stop. A 30-day supply puts a lethal amount in the home. Returning to his old long-term dose restarts the problem without a plan. Tramadol is still an opioid and adds serotonergic and seizure risks. Refusing all opioid analgesia leaves fresh fractures untreated, and uncontrolled pain was part of what led to his attempt.",
        keyFeature: { topic: "suicide-risk", n: 5 },
        source: "nice-ng225",
      },
    ],
    sources: [S.ccsmh, S.oliva, S.nice],
    ...META,
  },
];
