// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const TOPIC = "cqi";

const S = {
  lilford: { id: "lilford-2004", citation: "Lilford R, Mohammed MA, Spiegelhalter D, Thomson R. Use and misuse of process and outcome data in managing performance of acute medical care: avoiding institutional stigma. Lancet. 2004.", url: "https://doi.org/10.1016/S0140-6736(04)15901-1" },
  spiegelhalter: { id: "spiegelhalter-2005", citation: "Spiegelhalter DJ. Funnel plots for comparing institutional performance. Stat Med. 2005.", url: "https://doi.org/10.1002/sim.1970" },
  baxter: { id: "baxter-2016", citation: "Baxter R, Taylor N, Kellar I, Lawton R. What methods are used to apply positive deviance within healthcare organisations? A systematic review. BMJ Qual Saf. 2016.", url: "https://doi.org/10.1136/bmjqs-2015-004386" },
  ahs: { id: "ahs-critical-results-2014", citation: "Alberta Health Services Laboratory Services. Laboratory bulletin. Standardized critical and notifiable result laboratory processes. 2014.", url: "https://www.albertahealthservices.ca/assets/wf/lab/wf-lab-bulletin-std-critical-notifiable-result-lab-processes.pdf" },
  ciaf: { id: "ciaf-2012", citation: "Incident Analysis Collaborating Parties. Canadian Incident Analysis Framework. Canadian Patient Safety Institute. 2012." },
  cdg: { id: "cdg-2011", citation: "Disclosure Working Group. Canadian disclosure guidelines: being open with patients and families. Canadian Patient Safety Institute. 2011.", url: "https://cfhi-fcass.ca/media/v4zni14t/cpsi-canadian-disclosure-guidelines-final-ua.pdf" },
  chartier2: { id: "chartier-qi-primer-2", citation: "Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018.", url: "https://doi.org/10.1017/cem.2017.393" },
  chartier3: { id: "chartier-qi-primer-3", citation: "Chartier LB, Vaillancourt S, Cheng AHY, Stang AS. Quality improvement primer part 3: evaluating and sustaining a quality improvement project in the emergency department. CJEM. 2019.", url: "https://doi.org/10.1017/cem.2018.380" },
  ihi: { id: "ihi-qi-toolkit-2017", citation: "Institute for Healthcare Improvement. QI Essentials Toolkit: driver diagram and PDSA worksheet. 2017." },
  perla: { id: "perla-2011", citation: "Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.", url: "https://doi.org/10.1136/bmjqs.2009.037895" },
  cpso: { id: "cpso-disclosure-2019", citation: "College of Physicians and Surgeons of Ontario. Policy. Disclosure of harm. Updated 2019.", url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Disclosure-of-Harm" },
  qcipa: { id: "qcipa-2016", citation: "Ontario. Quality of Care Information Protection Act, 2016. S.O. 2016, c. 6, Sched. 2." },
  donabedian: { id: "donabedian-1988", citation: "Donabedian A. The quality of care. How can it be assessed? JAMA. 1988.", url: "https://doi.org/10.1001/jama.260.12.1743" },
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
    title: "A result that arrived after discharge",
    stem:
      "You are working in an emergency department in Alberta. A 79-year-old woman is brought to the emergency department by ambulance with weakness and a slow pulse. Last evening she was seen in the department for weakness and discharged at 22:40 with a diagnosis of viral illness. Her potassium of 6.9 mmol/L resulted at 23:05. The laboratory telephoned the department, and a unit clerk wrote the result on a note at the desk. The physician had already left, and no one called the patient. Today her potassium is 7.4 mmol/L and her ECG shows a wide QRS. She takes ramipril and spironolactone, and trimethoprim-sulfamethoxazole was started 4 days ago. She is treated and admitted to the ICU, where she recovers.",
    vitals: { temperature: "36.6°C oral", pulse: "36/minute", resp: "18/minute", bp: "92/50 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following practices for critical laboratory results would most likely have prevented this delay?",
        options: [
          "Email to the ordering physician",
          "Fax of the result to the department",
          "Flag in the electronic record only",
          "Next-day review of all results",
          "Verbal call to a clinician with read-back",
        ],
        correct: 4,
        explanation:
          "Critical results are phoned directly to a responsible care provider, who gives their name and reads the result back, and the call is documented. Those who order tests must be available to receive critical results or must arrange coverage, which matters once a patient has gone home. A note taken by a clerk at the desk broke that chain. Email, fax, an electronic flag or a next-day review would also have left a potassium of 6.9 mmol/L unseen for hours in a patient who had already left.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "ahs-critical-results-2014",
      },
      {
        id: "q2",
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
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing for the initial disclosure conversation with her?",
        options: [
          "After the incident analysis is complete",
          "At her next family physician visit",
          "Once she asks what happened",
          "When legal advice has been received",
          "Within 1 to 2 days of finding it",
        ],
        correct: 4,
        explanation:
          "Initial disclosure should take place at the earliest practical opportunity, preferably within 1 to 2 days of discovering the event, once her immediate clinical needs are met. It shares the facts known so far and an apology, with a commitment to share more as the analysis proceeds. Waiting for the analysis, a clinic visit, her own question or legal advice leaves her to suspect what happened, and delay can feel like abandonment.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cdg-2011",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements is most appropriate to make to her during the initial disclosure?",
        options: [
          "I am sorry this happened to you",
          "The care you got met the standard",
          "The clerk was negligent with the result",
          "This was the fault of the night doctor",
          "We cannot discuss it until the review",
        ],
        correct: 0,
        explanation:
          "The words I am sorry should be part of any apology, and an early, sincere apology is valuable and expected. Initial disclosure avoids blame and speculation, so naming the clerk or the night doctor as at fault is inappropriate. Words such as negligence, fault or failing to meet the standard of care imply legal findings and are avoided, and declaring that the care met the standard before any analysis is speculation too. Refusing to discuss it until the review ends delays disclosure without reason.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cdg-2011",
      },
    ],
    sources: [S.ahs, S.ciaf, S.cdg],
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
        update: "After 6 months, 82% of these patients leave with a kit.",
        prompt: "Which of the following would best keep kit dispensing part of everyday practice in the department?",
        options: [
          "Email reminder to all staff each month",
          "Extra education session for new nurses",
          "Kit built into the discharge order set",
          "Poster about naloxone in the staff room",
          "Quarterly praise for top dispensers",
        ],
        correct: 2,
        explanation:
          "Building the kit into the default discharge order set, with stock kept in the department, makes the right action the easy one on every shift and hands the change over to the daily process rather than to the project team. Reminders, posters, extra teaching and praise rely on memory and effort, and they fade as attention moves elsewhere. Continued measurement at a lower frequency will show whether the gain holds.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "chartier-qi-primer-3",
      },
    ],
    sources: [S.chartier2, S.ihi, S.perla, S.chartier3],
    ...META,
  },

  /* 39 ------------------------------------------------------------------ */
  {
    id: "cqi-39",
    topic: TOPIC,
    title: "A swollen palm after a repair elsewhere",
    stem:
      "You are working in an emergency department in Ontario. A 46-year-old man presents to the emergency department with 3 days of fever and a red, swollen right palm. Ten days ago a laceration from a broken drinking glass was repaired at another hospital's emergency department. The record of that visit, which you can view in the provincial health record, does not mention glass or imaging. Today an X-ray shows a 1 cm radiopaque foreign body in the wound. The hand surgeon plans exploration today. He asks you whether something was missed at the first visit.",
    vitals: { temperature: "38.3°C oral", pulse: "104/minute", resp: "18/minute", bp: "132/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to his question about the first visit?",
        options: [
          "Advise him to file a complaint with the College",
          "Avoid comment and refer him to that hospital",
          "Explain that the other physician was negligent",
          "Share what you found and ensure disclosure occurs",
          "Tell him glass is often missed, so no error occurred",
        ],
        correct: 3,
        explanation:
          "A physician who finds harm that a previous physician may not have disclosed should, where possible, discuss it with that physician, and must ensure that disclosure takes place at the first reasonable opportunity, disclosing as far as their own knowledge allows. You can tell him what you found, that the glass was not identified at the first visit and what it means for his treatment, without speculating about fault. Calling the care negligent, or declaring that no error occurred, goes beyond what you know. Avoiding comment or pointing him to a complaint leaves his question unanswered.",
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
        prompt: "Which of the following is an outcome measure for the other hospital's work on glass injuries?",
        options: [
          "Percent of glass wounds X-rayed",
          "Retained glass found within 30 days",
          "Time from triage to wound repair",
          "Wound repairs per physician per shift",
          "X-ray availability at night",
        ],
        correct: 1,
        explanation:
          "Donabedian's framework separates structure, process and outcome. Retained glass found within 30 days is an outcome, because it measures what happened to patients. The percentage of glass wounds X-rayed and the time from triage to repair are process measures of what staff did. X-ray availability at night is a structure measure of resources. Repairs per shift describes workload, not the result of care.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "donabedian-1988",
      },
    ],
    sources: [S.cpso, S.qcipa, S.ciaf, S.donabedian],
    ...META,
  },

  /* 40 ------------------------------------------------------------------ */
  {
    id: "cqi-40",
    topic: TOPIC,
    title: "A new chief and low morale",
    stem:
      "You are the new chief of a community hospital emergency department. Staff file about 25 incident reports a month, all describing errors or near misses, and a staff survey shows low morale and a belief that reports lead only to blame. The quality committee includes physicians, nurses and a manager, but no patients or family members. There is no regular meeting where shift teams talk about safety. A recent audit shows a median time to first analgesia of 52 minutes for adults with suspected long-bone fractures.",
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
        update: "When the analgesia audit is stratified by neighbourhood income, the median time is 74 minutes for patients from the lowest income fifth and 41 minutes for those from the highest.",
        prompt: "Which of the following conclusions is most appropriate from these stratified data?",
        options: [
          "Patients with low income decline analgesia",
          "Stratifying the measure adds little",
          "The gap reflects random variation only",
          "The overall median hides an equity gap",
          "Wait times are acceptable for all groups",
        ],
        correct: 3,
        explanation:
          "Stratifying a quality indicator by factors such as income, sex or location shows inequalities that an overall average hides. Here the median of 52 minutes conceals a wait of 74 minutes for the lowest income fifth, almost double the 41 minutes for the highest. The gap needs exploring and should shape the improvement work. Assuming that patients decline analgesia is speculation, and calling a 33-minute difference random without analysis dismisses it. No group has an acceptable wait if the target is prompt analgesia.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "cihi-stratifiers-2018",
      },
    ],
    sources: [S.kelly, S.hecEngage, S.goldenhar, S.cihi],
    ...META,
  },
];
