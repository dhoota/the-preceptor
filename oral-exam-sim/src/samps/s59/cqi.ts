// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const TOPIC = "cqi";

const S = {
  lilford: { id: "lilford-2004", citation: "Lilford R, Mohammed MA, Spiegelhalter D, Thomson R. Use and misuse of process and outcome data in managing performance of acute medical care: avoiding institutional stigma. Lancet. 2004.", url: "https://doi.org/10.1016/S0140-6736(04)15901-1" },
  spiegelhalter: { id: "spiegelhalter-2005", citation: "Spiegelhalter DJ. Funnel plots for comparing institutional performance. Stat Med. 2005.", url: "https://doi.org/10.1002/sim.1970" },
  baxter: { id: "baxter-2016", citation: "Baxter R, Taylor N, Kellar I, Lawton R. What methods are used to apply positive deviance within healthcare organisations? A systematic review. BMJ Qual Saf. 2016.", url: "https://doi.org/10.1136/bmjqs-2015-004386" },
  sproul: { id: "sproul-smart-pumps-2023", citation: "Sproul A, Newman H. Get smart, Canada: exploring smart pump implementation, management, and compliance with standards through a nationwide survey. Can J Hosp Pharm. 2023.", url: "https://doi.org/10.4212/cjhp.3286" },
  ciaf: { id: "ciaf-2012", citation: "Incident Analysis Collaborating Parties. Canadian Incident Analysis Framework. Canadian Patient Safety Institute. 2012." },
  chartier2: { id: "chartier-qi-primer-2", citation: "Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018.", url: "https://doi.org/10.1017/cem.2017.393" },
  ihiSpread: { id: "ihi-spread-2006", citation: "Massoud MR, Nielsen GA, Nolan K, Nolan T, Schall MW, Sevin C. A framework for spread: from local improvements to system-wide change. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2006.", url: "https://www.ihi.org/library/white-papers/framework-spread-local-improvements-system-wide-change" },
  ihi: { id: "ihi-qi-toolkit-2017", citation: "Institute for Healthcare Improvement. QI Essentials Toolkit: driver diagram and PDSA worksheet. 2017." },
  perla: { id: "perla-2011", citation: "Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.", url: "https://doi.org/10.1136/bmjqs.2009.037895" },
  cpso: { id: "cpso-disclosure-2019", citation: "College of Physicians and Surgeons of Ontario. Policy. Disclosure of harm. Updated 2019.", url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Disclosure-of-Harm" },
  qcipa: { id: "qcipa-2016", citation: "Ontario. Quality of Care Information Protection Act, 2016. S.O. 2016, c. 6, Sched. 2.", url: "https://www.ontario.ca/laws/statute/16q06" },
  kelly: { id: "kelly-2016", citation: "Kelly N, Blake S, Plunkett A. Learning from excellence in healthcare: a new approach to incident reporting. Arch Dis Child. 2016.", url: "https://doi.org/10.1136/archdischild-2015-310021" },
  hecEngage: { id: "engaging-patients-2019", citation: "Canadian Patient Safety Institute. Engaging patients in patient safety: a Canadian guide. 2017, last modified 2019.", url: "https://www.healthcareexcellence.ca/resources/engaging-patients-in-patient-safety-a-canadian-guide/" },
  goldenhar: { id: "goldenhar-2013", citation: "Goldenhar LM, Brady PW, Sutcliffe KM, Muething SE. Huddling for high reliability and situation awareness. BMJ Qual Saf. 2013.", url: "https://doi.org/10.1136/bmjqs-2012-001467" },
  cihi: { id: "cihi-stratifiers-2018", citation: "Canadian Institute for Health Information. In pursuit of health equity: defining stratifiers for measuring health inequality. A focus on age, sex, gender, income, education and geographic location. 2018." },
} satisfies Record<string, Source>;

export const CQI_S59: Samp[] = [
  /* 36 ------------------------------------------------------------------ */
  {
    id: "cqi-36",
    topic: TOPIC,
    title: "A ranked list for the staff lounge",
    stem:
      "You chair the quality committee of a regional emergency department with 18 physicians. The chief proposes posting a ranked list of each physician's rate of return visits within 72 hours that end in admission. Last year individual rates ranged from 0.4% to 3.1%, and the department rate was 1.4%. The physician with the highest rate worked mostly overnight shifts in the acute zone, where frail older patients are seen. The two physicians with the lowest rates each worked fewer than 30 shifts. Returns are counted only when the patient comes back to the same department.",
    vitals: {},
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most limits a fair comparison of these raw physician return rates?",
        options: [
          "Inclusion of admitted returns only",
          "Reporting rates as percentages",
          "Unadjusted differences in case mix",
          "Use of a 72-hour time window",
          "Yearly rather than monthly data",
        ],
        correct: 2,
        explanation:
          "The physician with the highest rate sees frail older patients overnight, and such patients return and need admission more often whatever the quality of care. Without adjustment for case mix, and with small numbers for physicians who worked few shifts, differences in outcome rates reflect the patients and chance as much as the care. Comparative outcome tables are easily overinterpreted. Counting returns with admission, a 72-hour window, percentages and yearly data are reasonable design choices that do not by themselves bias the comparison.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "lilford-2004",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following displays best shows whether any physician's rate differs from the department beyond chance?",
        options: [
          "Funnel plot with control limits",
          "Pareto chart of return diagnoses",
          "Pie chart of returns by physician",
          "Ranked bar chart of all physicians",
          "Run chart of the department rate",
        ],
        correct: 0,
        explanation:
          "A funnel plot places each physician's rate against their number of discharges, with control limits that narrow as volume rises. It shows who lies outside the range expected from chance and avoids spurious ranking into league tables. A ranked bar chart invites judgment even when differences are random, which matters here because two physicians worked fewer than 30 shifts. A Pareto chart, a pie chart and a run chart answer other questions, about causes, shares and change over time.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "spiegelhalter-2005",
      },
      {
        id: "q3",
        kind: "single",
        update: "A funnel plot of rates adjusted for case mix shows all 18 physicians within the control limits.",
        prompt: "Which of the following uses of these data best supports ongoing improvement in the department?",
        options: [
          "Annual report of rates to the hospital board",
          "Bonus payment for the lowest rates",
          "Posted ranking in the staff lounge",
          "Private feedback with case review",
          "Remedial review of the highest rate",
        ],
        correct: 3,
        explanation:
          "Comparative outcome tables used to rank or sanction clinicians invite stigma and gaming and pull attention toward appearances rather than real improvement. With every physician inside the control limits there is no outlier signal, so rankings, bonuses and remedial review would act on noise. Private feedback with review of the actual return cases lets each physician learn from specific patients. A report to the board is a governance step rather than a way to change bedside practice.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "lilford-2004",
      },
      {
        id: "q4",
        kind: "single",
        update: "Over the next 3 years, one physician's adjusted rate stays below the lower control limit.",
        prompt: "Which of the following is the most appropriate next step for the quality committee?",
        options: [
          "Learn how this physician's care differs",
          "Move the physician to more night shifts",
          "Reward the physician with a bonus",
          "Share the result as a public ranking",
          "No action because variation is random",
        ],
        correct: 0,
        explanation:
          "A rate that stays below the lower limit for 3 years is unlikely to be chance. The positive deviance approach studies those who do better than peers under the same constraints, forms ideas about how they succeed and tests those ideas with the wider group. Here that might be how this physician arranges follow-up or explains return advice. Moving shifts, paying a bonus or publishing a ranking would not uncover the practice that makes the difference.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "baxter-2016",
      },
    ],
    sources: [S.lilford, S.spiegelhalter, S.baxter],
    ...META,
  },

  /* 37 ------------------------------------------------------------------ */
  {
    id: "cqi-37",
    topic: TOPIC,
    title: "A call to the desk at night",
    stem:
      "A 79-year-old woman is brought to the emergency department by ambulance with fever and confusion. Two days ago she was seen in the department with 1 day of fever, had blood cultures drawn and was discharged with a diagnosis of viral illness. At 23:05 last night the laboratory telephoned the department to report Gram-negative bacilli growing in her blood culture. A unit clerk wrote the result on a note at the desk, and it never reached a physician. No one called the patient. Today her lactate is 5.1 mmol/L. She is treated for septic shock.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "26/minute", bp: "78/40 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She needs a norepinephrine infusion. Nurses in the department calculate and enter each infusion rate by hand.",
        prompt: "Which of the following changes would best reduce infusion programming errors in this department?",
        options: [
          "Hourly check of the remaining volume",
          "Manual rate calculation by the nurse",
          "Pump rate set from a printed table",
          "Rate written on the bag label",
          "Smart pump with a drug library",
        ],
        correct: 4,
        explanation:
          "Pumps with a dose error reduction system, known as smart pumps, check each programmed dose and rate against a drug library with set limits, so a rate outside those limits is flagged or blocked before the infusion runs. An error that falls within the limits can still get through. They are now standard in most Canadian hospitals because they prevent infusion errors. A printed table, a rate written on the bag and a manual calculation all depend on a person calculating or entering the number correctly with no automated check. An hourly volume check finds an error only after the wrong dose has been given.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "sproul-smart-pumps-2023",
      },
      {
        id: "q2",
        kind: "single",
        update: "She is admitted to the ICU, where she recovers. The incident is reported the same day.",
        prompt: "Which of the following immediate actions best protects other patients who may already be at risk?",
        options: [
          "Await the analysis before changing",
          "Email a reminder to all clerks",
          "Move the clerk to other duties",
          "Post the critical result policy",
          "Review other recent phoned results",
        ],
        correct: 4,
        explanation:
          "The Canadian Incident Analysis Framework places the safety of other patients who may be at risk among the first actions after an incident, and local actions to reduce the risk of imminent recurrence may be needed at once. A note at the desk could have lost other phoned results too, so the results phoned in recently need checking to confirm each reached a physician and was acted on. A reminder email or a posted policy may help with future calls but finds no patient already missed. Moving the clerk blames one person for a system gap. Waiting for the analysis leaves any missed patient at risk for weeks.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "ciaf-2012",
      },
      {
        id: "q3",
        kind: "single",
        update: "The hospital starts an incident analysis.",
        prompt: "Which of the following should be part of the initial information gathering for this analysis?",
        options: [
          "A review of the clerk's personnel file",
          "Interviews with her and the staff involved",
          "Legal review before any interviews",
          "The laboratory call log on its own",
          "Written statements from managers only",
        ],
        correct: 1,
        explanation:
          "The Canadian Incident Analysis Framework holds that the patient or family and the healthcare workers involved must be part of the initial information gathering, because their accounts show how the system really worked that night. A call log alone shows that a call was made but not why the result went no further. A personnel file and statements from managers turn attention to individuals rather than to the system. Legal review is not a precondition for gathering the facts.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "ciaf-2012",
      },
      {
        id: "q4",
        kind: "single",
        update: "The quality office now forms the team that will analyze the incident.",
        prompt: "Which of the following is the most appropriate makeup of the analysis team for this incident?",
        options: [
          "Clerk's manager working alone",
          "Emergency physicians and nurses only",
          "Hospital legal counsel and senior executives",
          "Laboratory and ED staff with a facilitator",
          "Senior laboratory managers only",
        ],
        correct: 3,
        explanation:
          "The result passed from the laboratory to the department desk and stopped there, so the team needs people who know both processes, including front-line staff such as unit clerks, led with a facilitator skilled in analysis methods. The Canadian Incident Analysis Framework advises clinical and non-clinical staff, some involved and some not, because people unfamiliar with the incident help limit bias. A team of emergency staff or laboratory managers alone sees only half of the handoff. A manager working alone narrows the review to one person. Lawyers and executives may support the work but cannot describe how the process runs.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "ciaf-2012",
      },
    ],
    sources: [S.sproul, S.ciaf],
    ...META,
  },

  /* 38 ------------------------------------------------------------------ */
  {
    id: "cqi-38",
    topic: TOPIC,
    title: "Kits that stay in the pharmacy",
    stem:
      "You lead an improvement project in an urban emergency department. Over 3 months, 120 adults were treated in the department for opioid overdose and discharged home. Only 30 of them left with a take-home naloxone kit. Kits are stored in the hospital pharmacy, which closes at 18:00, and only physicians can order them. Most overdose visits happen at night. The team sets an aim that 80% of these patients will leave with a kit within 6 months.",
    vitals: {},
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate denominator for the team's main measure?",
        options: [
          "All emergency department visits that month",
          "Discharged patients treated for opioid overdose",
          "Patients admitted after an overdose",
          "Patients given naloxone by paramedics",
          "Patients who ask for a naloxone kit",
        ],
        correct: 1,
        explanation:
          "The aim concerns adults treated for opioid overdose and sent home, so they form the denominator and those who leave with a kit form the numerator. That gives a baseline of 30 out of 120, or 25%, against the aim of 80%. All department visits would dilute the measure with patients who do not need a kit. Counting only those who ask leaves out the patients at highest risk. Admitted patients and those treated by paramedics are different groups from the one the aim targets.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "chartier-qi-primer-2",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tools best links the team's aim to its main drivers and to the change ideas it will test?",
        options: ["Driver diagram", "Fishbone diagram", "Pareto chart", "Run chart", "Scatter diagram"],
        correct: 0,
        explanation:
          "A driver diagram sets out the team's theory of improvement: the aim, the primary drivers that most influence it, the secondary drivers beneath them and specific change ideas for each. Here drivers might include access to kits after pharmacy hours and who is allowed to dispense, with ideas such as stocking kits in the department and nurse dispensing. A fishbone diagram sorts causes but does not link them to changes. A Pareto chart, a run chart and a scatter diagram display data.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ihi-qi-toolkit-2017",
      },
      {
        id: "q3",
        kind: "single",
        update: "The first test will let one night nurse give kits from department stock for one shift.",
        prompt: "Which of the following belongs in the Plan stage of this first PDSA cycle?",
        options: [
          "A decision to adopt the change",
          "A full rollout to every shift",
          "A prediction of what will happen",
          "A summary of what was learned",
          "Collection of data during the shift",
        ],
        correct: 2,
        explanation:
          "The Plan stage states the objective, the questions to answer and a prediction of what will happen, with who will do what, when and where, and what data will be collected. Collecting the data happens in Do. Comparing results with the prediction and summarizing what was learned happen in Study. Choosing to adapt, adopt or abandon the change happens in Act. A rollout to every shift skips the small test that the cycle is built around.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ihi-qi-toolkit-2017",
      },
      {
        id: "q4",
        kind: "single",
        update: "Weekly percentages are plotted on a run chart. In week 9 a stock shortage drops the rate to 5%, far below every other week.",
        prompt: "Which of the following best describes the week 9 value on the run chart?",
        options: [
          "A shift below the median",
          "A trend toward decline",
          "Astronomical data point",
          "Too few runs crossing it",
          "Too many runs crossing it",
        ],
        correct: 2,
        explanation:
          "An astronomical data point is one that is obviously different from all the others, so that anyone looking at the chart would see it as unusual. It is one of the four run chart rules, with shifts, trends and too many or too few runs. One week cannot make a shift, which needs six or more consecutive points on one side of the median, or a trend, which needs five or more points steadily rising or falling. Its cause, a stock shortage, needs a fix of its own.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "perla-2011",
      },
      {
        id: "q5",
        kind: "single",
        update: "After 6 months, 82% of these patients leave with a kit. The health region asks the team to spread the change to its four other emergency departments.",
        prompt: "Which of the following should be in place before the regional spread plan is carried out?",
        options: [
          "Consensus of every regional physician",
          "Executive sponsor and a day-to-day lead",
          "Identical pharmacy hours at each site",
          "Published randomized trial of the change",
          "Separate project team at every site",
        ],
        correct: 1,
        explanation:
          "The IHI framework for spread names three things to have in place before a spread plan is carried out: leadership that treats the work as a strategic priority, an executive sponsor with a day-to-day lead, and a successful site with evidence that the change works. Here the 82% result from this department is that evidence, so a published trial is not required. The framework hands the work over to line managers as it spreads rather than building a separate project team at every site. Each site's structure and infrastructure shape the plan, so identical pharmacy hours are not a precondition. Organizations differ in how adoption decisions are made, and agreement from every physician is not among the preconditions.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "ihi-spread-2006",
      },
    ],
    sources: [S.chartier2, S.ihi, S.perla, S.ihiSpread],
    ...META,
  },

  /* 39 ------------------------------------------------------------------ */
  {
    id: "cqi-39",
    topic: TOPIC,
    title: "A swollen palm after a repair elsewhere",
    stem:
      "You are working in an emergency department in Ontario. A 46-year-old man presents to the emergency department with 3 days of fever and a red, swollen right palm. Ten days ago a laceration from a broken drinking glass was repaired at another hospital's emergency department. The record of that visit, which you can view in the provincial health record, does not mention glass or imaging. Today an X-ray shows a 1 cm radiopaque foreign body in the wound. The hand surgeon plans exploration today. Nothing in the record or in his account suggests that anyone has told him about the glass.",
    vitals: { temperature: "38.3°C oral", pulse: "104/minute", resp: "18/minute", bp: "132/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step about the possible miss at the first visit?",
        options: [
          "Await his own questions before acting",
          "File a report with the College",
          "Leave disclosure to that hospital",
          "Record the concern in his chart only",
          "Speak with the first physician",
        ],
        correct: 4,
        explanation:
          "The College of Physicians and Surgeons of Ontario expects a subsequent physician who believes an incident has not been disclosed to discuss the matter with the previous physician, where it is possible to do so. The first physician may know facts the record does not show and can take part in disclosure. The subsequent physician must then ensure that disclosure takes place at the first reasonable opportunity, which may mean disclosing to him as far as their own knowledge allows. Leaving it to the other hospital or waiting for his questions does not ensure disclosure. A note in his chart alone tells no one, and the disclosure policy does not call for a report to the College.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cpso-disclosure-2019",
      },
      {
        id: "q2",
        kind: "menu",
        update: "The other hospital reviews the case through its quality of care committee. Weeks later he asks what he will be told about the review.",
        prompt: "Which of the following information about this incident must still be shared with him?",
        options: [
          "Actions taken or recommended",
          "Committee members' opinions",
          "Consequences for his health",
          "Facts of what happened",
          "Full committee report",
          "Names of staff interviewed",
        ],
        select: 3,
        correct: [0, 2, 3],
        explanation:
          "Ontario's quality of care information law protects information collected or prepared for a quality of care committee, such as its deliberations, opinions and report. It does not protect the facts contained in the record of the incident, and it does not override the duty to disclose. He is entitled to the facts of what happened, the consequences for him and the actions taken or recommended. The committee's report, its members' opinions and the content of its interviews are protected, but that protection never justifies telling him nothing.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "qcipa-2016",
      },
      {
        id: "q3",
        kind: "single",
        update: "The analysis finds that the first physician was 11 hours into a 12-hour shift, the waiting room was full and no protocol prompted imaging of glass wounds. These factors acted on one another.",
        prompt: "Which of the following tools best displays how these contributing factors interacted?",
        options: [
          "Constellation diagram",
          "Funnel plot of rates",
          "Pareto chart of causes",
          "Run chart of returns",
          "Scatter plot of shifts",
        ],
        correct: 0,
        explanation:
          "The Canadian Incident Analysis Framework blends fishbone and tree diagrams into a constellation diagram, which groups contributing factors and connects those that acted on one another. It shows how fatigue late in a long shift, a full waiting room and the missing imaging prompt combined in this case. A Pareto chart ranks how often causes occur across many events. Run charts, funnel plots and scatter plots display measurements over time or across groups, not the interaction of factors in one incident.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "ciaf-2012",
      },
      {
        id: "q4",
        kind: "single",
        update: "Some team members say the glass should have been obvious, since it was found 10 days later and caused an infection.",
        prompt: "Which of the following biases most threatens the analysis team's judgment of the first visit?",
        options: [
          "Anchoring bias",
          "Availability bias",
          "Hindsight bias",
          "Premature closure",
          "Search satisficing",
        ],
        correct: 2,
        explanation:
          "Knowing that glass was found and caused an infection makes the miss look obvious and simple. The Canadian Incident Analysis Framework defines hindsight bias as the tendency to oversimplify and assign simple human error causes once the outcome is known, and it warns that bias leads teams to overestimate how likely the outcome was. The team should judge what the first physician knew at the time, and diagrams and members unfamiliar with the incident help. Anchoring, availability, premature closure and search satisficing can affect any reasoning, including the team's, but the comment here rests on knowing the outcome, which is what defines hindsight bias.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "ciaf-2012",
      },
    ],
    sources: [S.cpso, S.qcipa, S.ciaf],
    ...META,
  },

  /* 40 ------------------------------------------------------------------ */
  {
    id: "cqi-40",
    topic: TOPIC,
    title: "After a safety culture survey",
    stem:
      "A community hospital emergency department has just received the results of its staff patient safety culture survey. Most respondents report low morale and believe that incident reports lead only to blame. Staff file about 25 incident reports a month, all describing errors or near misses. The quality committee includes physicians, nurses and a manager, but no patients or family members. There is no regular meeting where shift teams talk about safety. A recent audit of adults in a mental health crisis shows a median time from triage to assessment by the crisis team of 52 minutes. The department target is a median of 60 minutes or less. A staff physician and the nurse manager are asked to co-lead the response.",
    vitals: {},
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additions to the reporting system best supports learning from what goes well?",
        options: [
          "Monthly count of reports by staff member",
          "Peer reports of excellent care",
          "Reports reviewed by managers only",
          "Rewards for the fewest incidents",
          "Shorter form for error reports",
        ],
        correct: 1,
        explanation:
          "Learning from excellence adds peer reports of excellent care to incident reporting. Staff report episodes of excellent practice, which are fed back to the people involved and studied for what made them work, and the approach was introduced partly to improve morale. Rewarding the fewest incidents discourages reporting. Counting reports by person and limiting review to managers deepen the sense of blame. A shorter form may help reporting but still captures only failures.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "kelly-2016",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best brings the patient perspective into the department's ongoing quality work?",
        options: [
          "Annual survey of patient satisfaction",
          "Complaint letters read by the chief",
          "Feedback cards in the waiting room",
          "Patient partners on the quality committee",
          "Stories from patients read at rounds",
        ],
        correct: 3,
        explanation:
          "Patient partners who sit on the quality committee take part in setting priorities, reviewing incidents and designing changes, which is engagement at the organizational level. Surveys, complaint letters, feedback cards and stories collect patient views, but the decisions are then made without patients in the room. The Canadian guide on engaging patients in patient safety describes engagement in governance, design and evaluation as well as in direct care.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "engaging-patients-2019",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the content of a brief daily safety huddle for each shift?",
        options: [
          "Clinical teaching on a chosen topic",
          "Detailed review of one incident",
          "Monthly statistics on wait times",
          "Performance review of individuals",
          "Short look back and look ahead at risks",
        ],
        correct: 4,
        explanation:
          "A safety huddle is a short, regular meeting in which staff discuss what happened in the last 24 hours and predict risks for the next 24, such as crowding, staffing gaps or patients at high risk, so problems are seen and owned early. It builds shared awareness and accountability across the team. Detailed incident review, statistics and teaching belong in other forums. Reviewing individual performance at a huddle would undercut the safety culture it is meant to build.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "goldenhar-2013",
      },
      {
        id: "q4",
        kind: "single",
        update: "When the crisis team audit is stratified by neighbourhood income, the median time is 74 minutes for patients from the lowest income fifth and 41 minutes for those from the highest.",
        prompt: "Which of the following conclusions is most appropriate from these stratified data?",
        options: [
          "Low-income patients have milder crises",
          "Stratifying the measure adds little",
          "The gap reflects random variation only",
          "The overall median hides an equity gap",
          "Wait times meet the target for all groups",
        ],
        correct: 3,
        explanation:
          "Stratifying a quality indicator by factors such as income, sex or location shows inequalities that an overall average hides. Here the overall median of 52 minutes meets the 60-minute target, yet patients from the lowest income fifth wait a median of 74 minutes, 1.8 times the 41 minutes for the highest. So the target is not met for all groups. The gap needs exploring and should shape the improvement work. Assuming that low-income patients have milder crises is speculation the audit does not support, and calling a 33-minute difference random without analysis dismisses it.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "cihi-stratifiers-2018",
      },
    ],
    sources: [S.kelly, S.hecEngage, S.goldenhar, S.cihi],
    ...META,
  },
];
