import type { Item } from "@/engine/types";
import { ADHD, HINKLE, INS, LEHNE, MG, POTTER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s16-31", {
      topic: "Pediatric IV antibiotic volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The primary health care provider prescribes cefazolin 25 mg/kg IV every 8 hours for a child who weighs 18 kg. After reconstitution, the vial holds cefazolin 100 mg/mL. How many mL should the nurse draw up for each dose?",
      rationale:
        "The dose is 25 mg/kg for a child of 18 kg, which is 450 mg. Each mL holds 100 mg. Dividing 450 mg by 100 mg/mL gives 4.5 mL. Pediatric doses are checked against the weight before every dose.",
      calc: { expr: "25 * 18 / 100", answer: 4.5, unit: "mL", round: 1, steps: ["25 * 18 = 450", "450 / 100 = 4.5"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.25 mL", why: "This treats 25 mg as the whole dose and ignores the child's weight." },
      { text: "0.45 mL", why: "This is one tenth of the correct volume. It comes from a misplaced decimal." },
      { text: "4.5 mL", why: "450 mg divided by 100 mg/mL is 4.5 mL." },
      { text: "45 mL", why: "This is 10 times the correct volume." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s16-32", {
      topic: "IV acyclovir safety",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 38-year-old client with herpes simplex encephalitis receives acyclovir 10 mg/kg IV every 8 hours. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "IV acyclovir can form crystals in the kidney tubules and cause kidney injury. A slow infusion over at least 1 hour and good hydration lower this risk. Serum creatinine shows kidney function. The solution is irritating, so the site is checked for phlebitis. A rapid push or fluid restriction raises the risk of kidney injury.",
      sources: [LEHNE, INS],
    }),
    kind: "sata",
    options: [
      { text: "Infuse each dose over 1 hour", why: "A slow infusion lowers the risk of crystals forming in the kidneys." },
      { text: "Give each dose as a rapid IV push", why: "A rapid push raises the drug level in the kidney tubules and the risk of injury." },
      { text: "Keep the client well hydrated", why: "Good urine flow keeps the drug from crystallizing in the tubules." },
      { text: "Monitor serum creatinine", why: "A rising creatinine is an early sign of kidney injury from acyclovir." },
      { text: "Restrict fluids to 1 L a day", why: "Fluid restriction concentrates the drug in the urine and raises kidney risk." },
      { text: "Check the IV site for phlebitis", why: "The alkaline solution irritates veins and can cause phlebitis." },
    ],
    correct: [0, 2, 3, 5],
  },
  {
    ...meta("rn-s16-33", {
      topic: "Transplant immunosuppressant teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 50-year-old client takes tacrolimus by mouth twice daily after a kidney transplant. Which statement by the client needs further teaching?",
      rationale:
        "Grapefruit blocks the enzyme that breaks down tacrolimus. The drug level can rise and cause kidney injury, tremor or other toxicity. Grapefruit juice is avoided. Regular dose times, blood level checks and reporting signs of infection are all correct.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will take my doses at the same times every day.\"", why: "Steady timing keeps the tacrolimus level stable." },
      { text: "\"I will keep my blood level appointments.\"", why: "Trough levels guide the dose and prevent rejection or toxicity." },
      { text: "\"I will report a fever or a new cough.\"", why: "Immunosuppression raises infection risk, so early signs are reported." },
      { text: "\"I will drink grapefruit juice with my dose.\"", why: "Grapefruit raises tacrolimus levels and the risk of toxicity. This statement needs correction." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s16-34", {
      topic: "Excess cholinesterase inhibitor",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 44-year-old client with myasthenia gravis took several extra doses of pyridostigmine today for weakness. The client now has worse weakness, heavy drooling, sweating, abdominal cramps and small pupils. Heart rate is 48/minute. Respirations are 26/minute and shallow. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Extra pyridostigmine followed by weakness with drooling, sweating, cramps, small pupils and a heart rate of 48/minute fits cholinergic crisis. Myasthenic crisis causes weakness without these muscarinic signs. The pyridostigmine is held and atropine is prepared as prescribed. Shallow breathing at 26/minute shows respiratory muscle fatigue, so breathing and heart rate are watched closely.",
      sources: [LEHNE, MG],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Myasthenic crisis", why: "Undertreated myasthenia causes weakness without drooling, sweating, small pupils or a slow pulse." },
      { text: "Anticholinergic toxicity", why: "Anticholinergic toxicity causes dry skin, large pupils and a fast pulse." },
      { text: "Cholinergic crisis", why: "Excess cholinesterase inhibitor causes weakness plus muscarinic signs." },
      { text: "Guillain-Barre syndrome", why: "This ascending weakness follows infection and lacks muscarinic signs." },
    ],
    actions: [
      { text: "Give an extra pyridostigmine dose", why: "More drug would deepen the cholinergic crisis." },
      { text: "Hold the pyridostigmine", why: "Stopping the drug lets the excess acetylcholine effect wear off." },
      { text: "Place the client flat and supine", why: "Lying flat worsens breathing and raises aspiration risk with heavy drooling." },
      { text: "Prepare IV atropine as prescribed", why: "Atropine blocks the muscarinic effects such as drooling and bradycardia." },
      { text: "Offer oral fluids for the drooling", why: "Weak swallowing muscles make oral fluids an aspiration risk." },
    ],
    parameters: [
      { text: "Respiratory rate and depth", why: "Weak breathing muscles can lead to respiratory failure." },
      { text: "Serum glucose level", why: "Glucose does not guide care in this crisis." },
      { text: "Urine specific gravity", why: "Urine concentration does not track this crisis." },
      { text: "Heart rate and rhythm", why: "Excess acetylcholine slows the heart, as the rate of 48/minute shows." },
      { text: "Deep tendon reflexes", why: "Reflexes do not guide care in this crisis." },
    ],
    correct: { condition: 2, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s16-35", {
      topic: "Vasopressor extravasation",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client in septic shock receives norepinephrine through a peripheral IV in the right forearm while a central line is being arranged. The nurse finds the skin around the site cool, pale and swollen. What should the nurse do first?",
      rationale:
        "Cool, pale, swollen skin at a norepinephrine site points to extravasation with local vasoconstriction. The first step is to stop the infusion at that site so no more drug enters the tissue. The nurse then aspirates from the catheter, notifies the provider, restarts the vasopressor in another vein and gives phentolamine as prescribed.",
      sources: [INS, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Stop the infusion at that site", why: "Stopping the flow keeps more vasoconstrictor from entering the tissue." },
      { text: "Give phentolamine around the site", why: "Phentolamine follows once the infusion at the site is stopped and a prescription is in place." },
      { text: "Elevate the arm and recheck later", why: "Waiting lets more drug enter the tissue and risks necrosis." },
      { text: "Flush the catheter with saline", why: "Flushing pushes more drug into the tissue." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-36", {
      topic: "Immune globulin infusion reaction",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 52-year-old client receives IV immune globulin for a chronic inflammatory neuropathy. The nurse reads the note written 30 minutes after the infusion started. Click to highlight the findings that need follow-up.",
      rationale:
        "Reactions to immune globulin often occur early and relate to the infusion rate. A new throbbing headache, chills with a flushed face, a BP rise from 124/78 to 152/94 mmHg and a heart rate of 108/minute point to an infusion reaction. The rate is slowed or stopped and the provider is told. A calm client with a clean IV site needs no follow-up.",
      sources: [INS, LEHNE],
    }),
    kind: "highlight",
    passage:
      "[[BP before infusion 124/78 mmHg]]. [[Reports a new throbbing headache, 6 of 10]]. [[Chills and a flushed face]]. [[BP now 152/94 mmHg]]. [[Heart rate 108/minute]]. [[IV site without redness or swelling]]. [[Resting quietly in bed]]. [[Ate a snack before the infusion]].",
    spans: [
      { text: "BP before infusion 124/78 mmHg", why: "This is the baseline reading for comparison." },
      { text: "Reports a new throbbing headache, 6 of 10", why: "Headache is a common early sign of an immune globulin reaction." },
      { text: "Chills and a flushed face", why: "Chills and flushing suggest an infusion reaction." },
      { text: "BP now 152/94 mmHg", why: "A rise from 124/78 mmHg during the infusion needs follow-up." },
      { text: "Heart rate 108/minute", why: "A pulse of 108/minute during the infusion suggests a reaction." },
      { text: "IV site without redness or swelling", why: "A clean site is expected and needs no action." },
      { text: "Resting quietly in bed", why: "A calm, resting client is expected." },
      { text: "Ate a snack before the infusion", why: "Eating beforehand is expected and poses no risk." },
    ],
    correct: [1, 2, 3, 4],
  },
  {
    ...meta("rn-s16-37", {
      topic: "Stimulant timing for ADHD",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "An 8-year-old child with ADHD takes immediate-release methylphenidate 5 mg by mouth twice daily. The parent gives the second dose at 1900 with dinner. The child now falls asleep after 2300 most nights. What should the nurse advise?",
      rationale:
        "Methylphenidate is a stimulant, and insomnia is a common effect. A dose at 1900 keeps the drug active at bedtime. Giving the second dose in the early afternoon covers the school day and lets the effect wear off by night. Doses are not combined or stopped without the prescriber.",
      sources: [ADHD, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Add melatonin at the evening dose", why: "This adds a drug instead of fixing the dose timing that causes the insomnia." },
      { text: "Skip the second dose on weekdays", why: "Dose changes are made by the prescriber. Skipping loses afternoon symptom control." },
      { text: "Give both doses together at breakfast", why: "A combined dose raises the peak and leaves the afternoon uncovered." },
      { text: "Give the second dose in early afternoon", why: "An earlier dose lets the stimulant wear off before bedtime." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s16-38", {
      topic: "Eye drop technique",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 72-year-old client with open-angle glaucoma uses timolol eye drops and latanoprost eye drops each evening. The nurse watches the client instill them. Which actions show correct technique? Select all that apply.",
      rationale:
        "Tilting the head back and pulling the lower lid down makes a pocket for the drop. Pressing on the inner corner of the eye limits systemic absorption of timolol. Waiting 5 minutes between drugs keeps the second drop from washing out the first. Touching the tip to the lid contaminates the bottle. Rubbing the eye pushes the drug out.",
      sources: [LEHNE, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Rests the dropper tip on the lower lid", why: "Touching the lid contaminates the tip and the bottle." },
      { text: "Pulls the lower lid down to form a pocket", why: "The pocket holds the drop in the conjunctival sac." },
      { text: "Presses on the inner eye corner", why: "Pressure over the tear duct limits systemic absorption, such as a slow pulse from timolol." },
      { text: "Rubs the eye after each drop", why: "Rubbing squeezes the drug out and irritates the eye." },
      { text: "Waits 5 minutes between the two drugs", why: "The wait keeps the second drug from washing out the first." },
      { text: "Instills both drugs one right after the other", why: "The second drop can wash out the first before it is absorbed." },
      { text: "Tilts the head back and looks up", why: "This position helps the drop land in the lower lid pocket." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s16-39", {
      canada: "Canadian labs report creatinine in micromol/L and the WBC as x 10^9/L. The creatinine rise reads 97 to 194 micromol/L, and the WBC fall reads 18.6 to 9.8 x 10^9/L.",
      topic: "Response to IV antibiotic therapy",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 63-year-old client with pyelonephritis started IV ceftriaxone and IV gentamicin on day 1. The nurse reviews the flow sheet on day 3. For each finding, specify whether the trend shows improvement or worsening.",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "Day 1", "Day 2", "Day 3"],
            rows: [
              ["Temperature", "39.4°C (102.9°F)", "38.3°C (100.9°F)", "37.4°C (99.3°F)"],
              ["Heart rate (/minute)", "118", "102", "88"],
              ["WBC (/mm3)", "18 600", "14 200", "9800"],
              ["Serum creatinine", "1.1 mg/dL (97 micromol/L)", "1.6 mg/dL (141 micromol/L)", "2.2 mg/dL (194 micromol/L)"],
              ["Urine output (mL per 24 hours)", "1800", "1100", "600"],
            ],
          },
        },
      ],
      rationale:
        "The temperature fell from 39.4°C to 37.4°C, the heart rate from 118 to 88/minute and the WBC from 18 600 to 9800/mm3. The infection is responding. Creatinine doubled from 1.1 to 2.2 mg/dL and urine output fell from 1800 to 600 mL. This points to kidney injury, a known effect of gentamicin, and needs follow-up.",
      sources: [LEHNE, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Improving", "Worsening"],
    rows: [
      { text: "Temperature", correct: [0], why: "The fall from 39.4°C to 37.4°C shows the fever resolving." },
      { text: "Heart rate", correct: [0], why: "The fall from 118 to 88/minute shows less physiologic stress." },
      { text: "WBC", correct: [0], why: "The fall from 18 600 to 9800/mm3 shows the infection responding." },
      { text: "Serum creatinine", correct: [1], why: "A rise from 1.1 to 2.2 mg/dL shows falling kidney function." },
      { text: "Urine output", correct: [1], why: "A fall from 1800 to 600 mL per day fits kidney injury." },
    ],
  },
  {
    ...meta("rn-s16-40", {
      topic: "Extended-release tablet and dysphagia",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 76-year-old client has new trouble swallowing tablets after a stroke. The client takes metoprolol succinate extended-release 50 mg by mouth daily. The unlicensed assistive personnel asks whether the tablet can be crushed into applesauce. What should the nurse do?",
      rationale:
        "Crushing an extended-release tablet releases the whole day's dose at once. This can cause a sharp fall in heart rate and BP. Dissolving it has the same effect. Holding a beta blocker risks rebound tachycardia. The nurse asks the prescriber for a form the client can swallow safely.",
      sources: [LEHNE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Crush it and mix it into applesauce", why: "Crushing destroys the extended-release design and gives the full dose at once." },
      { text: "Dissolve it in warm water first", why: "Dissolving also destroys the extended-release design." },
      { text: "Hold the dose until swallowing improves", why: "Missing beta blocker doses can cause rebound tachycardia and high BP." },
      { text: "Ask the prescriber for another form", why: "A different form keeps the dose safe for a client who cannot swallow tablets." },
    ],
    correct: 3,
  },
];
