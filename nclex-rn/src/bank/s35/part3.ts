import type { Item } from "@/engine/types";
import { ABILIFY_MAINTENA, ACAMPROSATE, CHANTIX, HINKLE, KEYTRUDA, KRANTZ_2009, MCC_LABS, METHADONE, RIFAMPIN, SPRAVATO, STRATTERA, VIVITROL, VYVANSE, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s35-21", {
      topic: "Oral overlap after a first aripiprazole depot dose",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 29-year-old client with schizophrenia receives a first injection of aripiprazole extended-release 400 mg IM. The prescription continues oral aripiprazole 15 mg daily for 14 days. Which two statements by the client show understanding of the teaching? Select two.",
      rationale:
        "After a single first injection, the depot takes time to reach a steady level. The label calls for 14 consecutive days of oral aripiprazole alongside it. The injection is then given monthly, no sooner than 26 days after the last one. A health care professional gives every injection. Stopping the tablets today could let symptoms return before the depot level rises.",
      refs: ["Monthly aripiprazole extended-release injections are given no sooner than 26 days apart."],
      sources: [ABILIFY_MAINTENA],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I can stop my tablets today because the shot works now.\"", why: "The depot needs time to build up, so the tablets continue for 14 days." },
      { text: "\"I will keep taking my tablets every day for 2 weeks.\"", why: "Oral aripiprazole continues for 14 consecutive days after the first injection." },
      { text: "\"I can come back for a shot after 2 weeks if I feel worse.\"", why: "Injections are given no sooner than 26 days apart." },
      { text: "\"My next shot will be due in about a month.\"", why: "This product is given once monthly." },
      { text: "\"I will give myself the next shot at home.\"", why: "A health care professional gives each injection." },
      { text: "\"This shot will last me for 3 months.\"", why: "This product is a monthly injection, not a 3-month one." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s35-22", {
      topic: "Starting varenicline for smoking cessation",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 45-year-old client who smokes 20 cigarettes a day has a new prescription for varenicline. The client wants to quit in time for a family wedding. Which instructions should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Varenicline starts 1 week before the quit date while the dose is titrated. Each dose is taken after eating with a full glass of water, which limits nausea. Mood or behavior changes and suicidal thoughts are reasons to stop and call the provider. Alcohol effects can increase, so drinking is limited until the effect is known. A standard course lasts 12 weeks. It is taken daily, not only on craving days.",
      refs: ["A standard varenicline course lasts 12 weeks."],
      sources: [CHANTIX],
    }),
    kind: "sata",
    options: [
      { text: "Use the tablets only on days with strong cravings", why: "Varenicline is taken daily on a schedule to keep a steady effect." },
      { text: "Start the tablets 1 week before the quit date", why: "The first week titrates the dose before the client stops smoking." },
      { text: "Plan to stop the tablets after 2 weeks", why: "A standard course runs 12 weeks." },
      { text: "Take each dose after eating with a full glass of water", why: "Taking it with food and water reduces nausea, the most common effect." },
      { text: "Stop the drug and call for new low mood or odd behavior", why: "Neuropsychiatric changes are a labeled warning that needs prompt review." },
      { text: "Limit alcohol until you know how the drug affects you", why: "Stronger alcohol effects have been reported with varenicline." },
      { text: "Take both daily doses together at bedtime", why: "The full dose is 1 tablet twice daily, not a single combined dose." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s35-23", {
      topic: "Overdose risk with injectable naltrexone",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 36-year-old client with opioid use disorder has completed withdrawal and receives a first injection of extended-release naltrexone 380 mg IM. The nurse teaches about the drug. Which two statements by the client show understanding? Select two.",
      rationale:
        "Naltrexone blocks opioids for about 28 days. Afterward, tolerance is lower than before treatment. A smaller opioid amount can then be fatal at the end of a dosing interval, after a missed dose or after stopping. Trying to overcome the block with large doses can also cause a fatal overdose. Carrying documentation alerts emergency staff that opioid pain relief will be blocked. Worsening pain or a lump at the injection site is reported.",
      refs: ["Extended-release naltrexone blocks opioid effects for about 28 days after each injection."],
      sources: [VIVITROL],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"If I miss a shot, a smaller dose of opioids could kill me.\"", why: "Lower tolerance after the blockade wears off makes overdose more likely." },
      { text: "\"If I need to, I can take more opioid to get past the block.\"", why: "Large doses taken to overcome the blockade can cause a fatal overdose." },
      { text: "\"Pain and a lump at the shot site are normal to ignore.\"", why: "Injection site reactions can be severe and are reported." },
      { text: "\"I will carry a card saying I get naltrexone shots.\"", why: "Documentation tells emergency staff that usual opioid pain relief will be blocked." },
      { text: "\"Once the shot wears off I can go back to my old amount.\"", why: "Tolerance is lower after treatment, so a former dose can be fatal." },
      { text: "\"These shots will also treat any withdrawal I get later.\"", why: "Naltrexone is an antagonist and can bring on withdrawal, not relieve it." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s35-24", {
      topic: "Kidney function before acamprosate",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 62-year-old client with alcohol use disorder has completed withdrawal and has a new prescription for acamprosate 666 mg by mouth 3 times daily. The nurse reviews the latest results before the first dose. Which result should the nurse report to the primary health care provider?",
      rationale:
        "Acamprosate is not metabolized and leaves the body through the kidneys. It is contraindicated when creatinine clearance is 30 mL/min or less. A clearance of 26 mL/min falls in that range. The label sets no dose change for mild to moderate liver impairment. A raised GGT and a large MCV are common with heavy drinking. A sodium of 138 mEq/L is normal.",
      refs: ["Acamprosate is contraindicated when creatinine clearance is 30 mL/min or less and needs a lower dose at 30 to 50 mL/min.", "Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L)."],
      sources: [ACAMPROSATE, HINKLE],
      version: 2,
    }),
    kind: "mc",
    options: [
      { text: "Gamma-glutamyl transferase 96 units/L", why: "A raised GGT is common with heavy drinking and does not change acamprosate dosing." },
      { text: "Mean corpuscular volume 104 fL", why: "Large red cells are common with alcohol use and do not affect acamprosate." },
      { text: "Serum sodium 138 mEq/L (138 mmol/L)", why: "A sodium of 138 mEq/L is within the normal range." },
      { text: "Creatinine clearance 26 mL/min", why: "Acamprosate is cleared by the kidneys and is contraindicated at 30 mL/min or less." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-25", {
      topic: "Dangerous rhythm risk on high-dose methadone",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 52-year-old client takes methadone 140 mg by mouth daily for opioid use disorder. Two weeks ago furosemide was added for leg edema. Today the client reports a brief spell of palpitations and lightheadedness. The ECG shows a QTc of 528 ms. Potassium is 3.1 mEq/L (3.1 mmol/L). Pupils are 4 mm and respirations are 16/minute. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Methadone blocks cardiac potassium channels and lengthens the QT interval. A QTc of 528 ms is above 500 ms, the level at which expert guidance advises reducing or stopping methadone. Furosemide has lowered the potassium to 3.1 mEq/L, which adds to the risk. Palpitations with lightheadedness may be brief runs of torsades de pointes. Pupils of 4 mm and respirations of 16/minute do not suggest opioid toxicity.",
      refs: ["A QTc above 500 ms on methadone calls for dose reduction or a change of treatment and correction of risk factors.", "Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [METHADONE, KRANTZ_2009, MCC_LABS],
      canada: "Canadian labs report potassium in mmol/L only, so it reads 3.1 mmol/L. The Medical Council of Canada range is 3.5 to 5.1 mmol/L, so the level is low on either range.",
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is at highest risk for {0} as shown by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "torsades de pointes", why: "A long QTc with low potassium on high-dose methadone sets up this rhythm." },
          { text: "opioid overdose", why: "Pupils of 4 mm and respirations of 16/minute do not show opioid toxicity." },
          { text: "opioid withdrawal", why: "The stem gives no yawning, sweating or cramps, and the dose is unchanged." },
          { text: "serotonin syndrome", why: "The stem gives no fever, clonus or agitation." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "a QTc of 528 ms", why: "A QTc above 500 ms carries a high risk of torsades de pointes." },
          { text: "pupils of 4 mm", why: "Pupils of 4 mm are not a sign of a heart rhythm risk." },
          { text: "respirations of 16/minute", why: "A normal respiratory rate argues against opioid toxicity." },
          { text: "the leg edema", why: "Edema led to the furosemide but is not itself a rhythm risk." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "a potassium of 3.1 mEq/L", why: "Low potassium from the diuretic adds to QT prolongation." },
          { text: "a methadone dose taken daily", why: "Once daily dosing is standard and is not the added risk here." },
          { text: "a normal breathing rate", why: "A normal rate does not raise the rhythm risk." },
          { text: "an age of 52 years", why: "Age alone is not the key added risk in this stem." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s35-26", {
      topic: "Rifampin lowering a methadone level",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 47-year-old client has been stable on methadone 90 mg by mouth daily for a year. Twelve days ago the client started rifampin daily for latent tuberculosis. The client now reports yawning, a runny nose, abdominal cramps, goose flesh and strong cravings, worst before the next dose. The skin and sclerae are not yellow. Which explanation best fits these findings?",
      rationale:
        "Rifampin induces the liver enzymes that clear methadone. The methadone level falls over days, and opioid withdrawal follows in a client who was stable. Yawning, a runny nose, cramps and goose flesh before the next dose are withdrawal signs. The label advises watching for withdrawal and considering a higher methadone dose. Rifampin hepatitis would bring jaundice. Active tuberculosis and excess methadone cause different signs.",
      sources: [METHADONE, RIFAMPIN],
    }),
    kind: "mc",
    options: [
      { text: "Rifampin-induced hepatitis", why: "Hepatitis brings jaundice, dark urine or right upper quadrant pain. The skin and sclerae are not yellow." },
      { text: "Progression to active tuberculosis", why: "Active disease causes cough, fever and weight loss, not yawning and goose flesh." },
      { text: "Faster breakdown of methadone", why: "Rifampin speeds methadone clearance, so the level falls and withdrawal appears." },
      { text: "Too much methadone each day", why: "Excess methadone causes sedation and slow breathing, not withdrawal signs." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-27", {
      topic: "Sequence of an esketamine nasal spray session",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 42-year-old client with treatment-resistant depression arrives for a supervised esketamine 56 mg nasal spray session. Each device delivers 28 mg in two sprays. The client has had nothing to eat for 3 hours. Place the steps of the session in order.",
      rationale:
        "Blood pressure is checked first, because esketamine raises it. The client blows the nose before the first device only. Each device delivers one spray into each nostril. The client rests 5 minutes after each device so the drug can absorb, then uses the second device. BP is checked again at about 40 minutes, when levels peak. The client stays at least 2 hours and does not drive until the next day.",
      refs: ["After an esketamine dose, BP is rechecked at about 40 minutes and the client is observed for at least 2 hours."],
      sources: [SPRAVATO],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Have the client blow the nose", why: "The nose is cleared once, before the first device only." },
      { text: "Prime the first device with a test spray", why: "The devices are not primed, because a test spray wastes drug." },
      { text: "Check the client's blood pressure", why: "BP is assessed before dosing because esketamine raises it." },
      { text: "Rest 5 minutes, then use the second device", why: "The client rests 5 minutes after each device so the drug absorbs." },
      { text: "Recheck BP about 40 minutes after dosing", why: "BP peaks at about 40 minutes and is reassessed then." },
      { text: "Spray the first device, one spray per nostril", why: "Each device gives one spray into each nostril for a total of 28 mg." },
      { text: "Release the client to drive home after 1 hour", why: "Observation lasts at least 2 hours, and driving waits until the next day." },
    ],
    correct: [2, 0, 5, 3, 4],
  },
  {
    ...meta("rn-s35-28", {
      topic: "Parent teaching for atomoxetine",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 9-year-old child with ADHD receives teaching about a new prescription for atomoxetine by mouth once daily. Which statement by the parent indicates a need for further teaching?",
      rationale:
        "Atomoxetine is a nonstimulant taken every day. The dose is built up over at least 3 days to a daily target, so it is not saved for school days. The boxed warning describes a rise in suicidal thinking in children, so the parent watches closely, mostly in the first month. Yellow skin or dark urine can signal liver injury. The capsules are swallowed whole because the contents irritate the eyes.",
      sources: [STRATTERA],
      version: 2,
    }),
    kind: "mc",
    options: [
      { text: "\"I will give it on school days only and skip weekends.\"", why: "The drug is taken every day at a dose built up over days. This statement needs correction." },
      { text: "\"I will watch for any talk of self-harm, mostly in the first month.\"", why: "Suicidal thinking rose in children taking atomoxetine, mostly early in treatment." },
      { text: "\"I will call if his skin or eyes turn yellow or his urine is dark.\"", why: "These are signs of liver injury, which is a labeled warning." },
      { text: "\"He will swallow the capsule whole without opening it.\"", why: "Capsule contents irritate the eyes, so capsules are not opened." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-29", {
      topic: "History review before a stimulant for ADHD",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 15-year-old client with ADHD is being assessed before a first prescription for lisdexamfetamine. The nurse reviews the intake note. Click to highlight the findings the nurse should report to the primary health care provider before the drug is started.",
      rationale:
        "Before a stimulant starts, the label calls for a careful history that includes family sudden death and cardiac symptoms. An uncle who died suddenly at 28 years and fainting during exercise both need cardiac evaluation. The label also calls for assessing the risk of misuse, and a household member who misuses stimulants is a diversion risk. Normal growth, a normal BP, allergy treatment and falling grades do not delay the start.",
      sources: [VYVANSE],
    }),
    kind: "highlight",
    passage:
      "[[Grades have fallen over the past term]]. [[Uncle died suddenly at 28 years while jogging]]. [[Height and weight on the 50th percentile]]. [[Fainted twice during soccer practice this year]]. [[Takes loratadine for seasonal allergies]]. [[Older brother at home misuses prescription stimulants]]. [[BP 112/68 mmHg]].",
    spans: [
      { text: "Grades have fallen over the past term", why: "Falling grades are part of the reason for treatment." },
      { text: "Uncle died suddenly at 28 years while jogging", why: "A family history of sudden death calls for cardiac evaluation before a stimulant." },
      { text: "Height and weight on the 50th percentile", why: "Normal growth gives a baseline and does not delay treatment." },
      { text: "Fainted twice during soccer practice this year", why: "Fainting with exercise can signal serious heart disease." },
      { text: "Takes loratadine for seasonal allergies", why: "Loratadine does not interact with lisdexamfetamine in a way that delays treatment." },
      { text: "Older brother at home misuses prescription stimulants", why: "Misuse in the household raises the risk of diversion and misuse." },
      { text: "BP 112/68 mmHg", why: "A normal BP gives a baseline for the stimulant's effect on BP." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s35-30", {
      topic: "Immune-related warning signs on pembrolizumab",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 58-year-old client with lung cancer starts pembrolizumab IV every 3 weeks. The nurse plans teaching about immune-related adverse reactions. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Pembrolizumab can trigger immune attack on almost any organ. A new cough or breathlessness can be pneumonitis. Yellow skin or dark urine can be hepatitis. Marked thirst with heavy urination can be new type 1 diabetes. Reactions can appear at any time during treatment and even after it ends, so symptoms are not saved for the next visit. Steroids are given only on the team's direction.",
      sources: [KEYTRUDA],
    }),
    kind: "sata",
    options: [
      { text: "Call right away for a new cough or breathlessness", why: "These symptoms can signal immune pneumonitis." },
      { text: "Save new symptoms to report at the next infusion", why: "Immune reactions can worsen fast and are reported when they appear." },
      { text: "Report yellow skin or dark urine", why: "These can be signs of immune hepatitis." },
      { text: "Expect reactions only in the week after each infusion", why: "Reactions can occur at any time, including after treatment ends." },
      { text: "Report marked thirst with frequent urination", why: "These can signal immune-related type 1 diabetes." },
      { text: "Take leftover prednisone at home for a new rash", why: "Steroid treatment is decided by the oncology team after assessment." },
      { text: "Report a headache that will not go away", why: "A persistent headache can be a sign of hypophysitis." },
    ],
    correct: [0, 2, 4, 6],
  },
];
