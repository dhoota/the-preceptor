import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c05-1";

/** Case 1. Inpatient mental health unit. Young adult with a severe reaction to an antipsychotic. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Stiff and Confused Morning on the Psychiatric Unit",
  intro:
    "A 29-year-old man with schizophrenia was admitted to the inpatient psychiatric unit 6 days ago with command hallucinations. Haloperidol was started on admission and the dose was raised 2 days ago. At 0700 the night nurse reports that he did not sleep and seems stiff and confused.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Schizophrenia diagnosed at age 22. No other medical history.",
        "No known drug allergies.",
        "Urine drug screen on admission was negative.",
        "Weight 78 kg.",
      ].join("\n"),
    },
    {
      title: "Medication Administration Record",
      text: [
        "Haloperidol 5 mg by mouth twice daily on days 1 to 4.",
        "Haloperidol 10 mg by mouth twice daily from day 5.",
        "Haloperidol 5 mg IM every 6 hours as needed for severe agitation. Given at 2200 and 0300.",
        "Benztropine 1 mg by mouth as needed for muscle stiffness. Given at 0300.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 5 at 0800", "Day 7 at 0700"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)", "39.6°C (103.3°F)"],
          ["Heart rate", "78/minute", "124/minute"],
          ["Respiratory rate", "16/minute", "24/minute"],
          ["BP", "118/74 mmHg", "164/98 mmHg"],
          ["SpO2", "98% on room air", "95% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PPT",
        topic: "Cues of a severe antipsychotic reaction",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0715 the nurse examines the client and records the findings below. Which findings should the nurse report to the primary health care provider now? Click to highlight.",
        rationale:
          "The haloperidol dose rose 2 days ago. The client now has heavy sweating, even rigidity in both arms and new disorientation. With a temperature of 39.6°C, these findings point to a severe reaction to the antipsychotic. An intake of 150 mL overnight and dark brown urine suggest dehydration and muscle breakdown. Quieter voices, reactive pupils and intact skin need no urgent report.",
        sources: [SRC.nms, SRC.halter],
      }),
      kind: "highlight",
      passage:
        "[[Gown and sheets damp with sweat]]. [[Both arms resist passive movement evenly]]. [[Knows his name but not the place or day]]. [[Says the voices are quieter today]]. [[Pupils equal and reactive to light]]. [[Drank 150 mL of fluid overnight]]. [[Voided 100 mL of dark brown urine at 0600]]. [[Skin intact over the sacrum and heels]].",
      spans: [
        { text: "Gown and sheets damp with sweat", why: "Heavy sweating is a sign of autonomic instability in this reaction." },
        { text: "Both arms resist passive movement evenly", why: "Even, lead-pipe rigidity is a core sign of a severe antipsychotic reaction." },
        { text: "Knows his name but not the place or day", why: "New disorientation is a change in mental status that needs a report." },
        { text: "Says the voices are quieter today", why: "Quieter voices suggest the psychosis is easing. This needs no urgent report." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils are a normal finding." },
        { text: "Drank 150 mL of fluid overnight", why: "An intake of 150 mL overnight adds to dehydration during a fever." },
        { text: "Voided 100 mL of dark brown urine at 0600", why: "Dark brown urine can mean myoglobin from muscle breakdown." },
        { text: "Skin intact over the sacrum and heels", why: "Intact skin over pressure points is an expected finding." },
      ],
      correct: [0, 1, 2, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory signs of muscle breakdown",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the laboratory results drawn at 0730. For each result, specify the problem it most likely reflects.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result", "Reference range"],
              rows: [
                ["Creatine kinase", "9400 units/L", "39 to 308 units/L"],
                ["Urine myoglobin", "Positive", "Negative"],
                ["Creatinine", "1.9 mg/dL (168 micromol/L)", "Up to 1.3 mg/dL (115 micromol/L)"],
                ["BUN", "34 mg/dL (12.1 mmol/L)", "Up to 20 mg/dL (7.1 mmol/L)"],
                ["Sodium", "141 mEq/L (141 mmol/L)", "135 to 145 mEq/L"],
                ["Potassium", "4.6 mEq/L (4.6 mmol/L)", "3.5 to 5.0 mEq/L"],
              ],
            },
          },
        ],
        rationale:
          "A creatine kinase of 9400 units/L and myoglobin in the urine show skeletal muscle breakdown. This follows the rigidity and fever of the drug reaction. A creatinine of 1.9 mg/dL and a BUN of 34 mg/dL show the kidneys clearing less waste. Myoglobin and dehydration both injure the kidneys. Sodium and potassium are within their reference ranges.",
        sources: [SRC.nms, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results only in SI units and report urea rather than BUN. Creatinine reads 168 micromol/L and urea 12.1 mmol/L. The Medical Council of Canada lists urea as 2.1 to 8.0 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Muscle breakdown", "Reduced kidney function", "Within reference range"],
      rows: [
        { text: "Creatine kinase 9400 units/L", correct: [0], why: "Creatine kinase leaks from damaged muscle. 9400 units/L is far above 308 units/L." },
        { text: "Urine myoglobin positive", correct: [0], why: "Myoglobin in the urine comes from injured muscle cells." },
        { text: "Creatinine 1.9 mg/dL (168 micromol/L)", correct: [1], why: "A creatinine above 1.3 mg/dL shows the kidneys are clearing less waste." },
        { text: "BUN 34 mg/dL (12.1 mmol/L)", correct: [1], why: "A BUN above 20 mg/dL with a high creatinine fits reduced kidney function." },
        { text: "Sodium 141 mEq/L (141 mmol/L)", correct: [2], why: "141 mEq/L lies between 135 and 145 mEq/L." },
        { text: "Potassium 4.6 mEq/L (4.6 mmol/L)", correct: [2], why: "4.6 mEq/L lies between 3.5 and 5.0 mEq/L." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Naming a severe antipsychotic reaction",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse links the haloperidol history with the 0715 assessment and the 0730 laboratory results. Complete the sentence below by choosing from the lists of options.",
        rationale:
          "A higher haloperidol dose followed by fever, lead-pipe rigidity, sweating and confusion fits neuroleptic malignant syndrome. The creatine kinase of 9400 units/L supports it. The temperature of 39.6°C reflects failed heat regulation. Serotonin syndrome needs a serotonergic drug. Anticholinergic toxicity gives dry skin. Dystonia does not cause fever.",
        sources: [SRC.nms],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is most likely experiencing {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "serotonin syndrome", why: "Serotonin syndrome follows serotonergic drugs and shows clonus. He takes none of these drugs." },
            { text: "anticholinergic toxicity", why: "Benztropine toxicity causes hot, dry skin. This client is soaked with sweat." },
            { text: "neuroleptic malignant syndrome", why: "Fever, rigidity, sweating and confusion after a haloperidol increase fit this syndrome." },
            { text: "an acute dystonic reaction", why: "Dystonia causes sustained spasms of the neck, eyes or jaw without fever or a creatine kinase this high." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "lead-pipe rigidity in both arms", why: "Even rigidity on passive movement is a core sign of the syndrome." },
            { text: "quieter auditory hallucinations", why: "Quieter voices reflect easing psychosis, not a drug reaction." },
            { text: "equal and reactive pupils", why: "Normal pupils do not support any of the listed conditions." },
            { text: "a sodium of 141 mEq/L", why: "141 mEq/L is within the reference range." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "a potassium of 4.6 mEq/L", why: "4.6 mEq/L is within the reference range." },
            { text: "a heart rate of 78/minute", why: "78/minute was the day 5 value, before the reaction began." },
            { text: "a temperature of 39.6°C", why: "High fever shows failed heat regulation in this syndrome." },
            { text: "a BP of 118/74 mmHg", why: "118/74 mmHg was the day 5 value. The current BP is 164/98 mmHg." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Assigning care during a drug reaction",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "The primary health care provider holds haloperidol and prescribes IV fluids, a cooling blanket and transfer to the medical unit within 2 hours. An assistive personnel (AP) helps the nurse until transfer. Drag one task into each blank. Not all tasks are used.",
        rationale:
          "The client is unstable, with new confusion and rigidity. Ongoing checks of muscle tone and orientation need registered nurse judgment. Changing sweat-soaked linens is routine care with a predictable outcome, so the AP can do it. Haloperidol is on hold. Restraints and a shower alone add risk and fit neither role.",
        sources: [SRC.delegation, SRC.nms, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse assigns {0} to the AP and keeps {1} for the registered nurse.",
      targets: ["Task for the AP", "Task for the registered nurse"],
      tokens: [
        { text: "checking muscle tone and orientation", why: "Assessing changes in tone and mental status needs registered nurse judgment." },
        { text: "giving the as-needed IM haloperidol", why: "Haloperidol is on hold. More antipsychotic would worsen the reaction." },
        { text: "changing the damp gown and linens", why: "Changing linens is a routine task with a predictable outcome." },
        { text: "applying wrist restraints to guard the IV", why: "Struggling against restraints adds muscle work and heat. Restraints also need a prescription." },
        { text: "leaving him to shower alone in cool water", why: "A confused, rigid client could fall in a shower alone." },
      ],
      correct: [2, 0],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to a fear of being poisoned",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The cooling blanket is in place. The client pushes a cup away and says, \"You put poison in my water. I will not drink it.\" Which response by the nurse is best?",
        rationale:
          "The client holds a fixed false belief while he is ill and frightened. Arguing or asking why rarely changes a delusion. Naming the feeling and offering a sealed container respects his fear. It also supports the fluid intake he needs. A warning about IV fluid can sound like a threat and harms trust.",
        sources: [SRC.halter],
      }),
      kind: "mc",
      options: [
        { text: "\"No one on this unit would put poison in your water.\"", why: "This argues with the belief. It does not ease the fear or help him drink." },
        { text: "\"Why do you think the staff would want to hurt you?\"", why: "A why question asks him to defend the belief and can raise suspicion." },
        { text: "\"If you refuse to drink, the provider will need to give more IV fluid.\"", why: "This sounds like a threat. It can deepen mistrust." },
        { text: "\"You are worried about the water. Here is a sealed bottle to open.\"", why: "It names his feeling and offers a sealed container he can check himself." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PA",
        topic: "Recovery from a severe antipsychotic reaction",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The client is on the medical unit on day 3 of treatment. Haloperidol remains on hold, and IV fluids and cooling continue. For each finding, specify whether it shows improvement or needs follow-up.",
        rationale:
          "Temperature, creatine kinase and creatinine are all falling toward normal. Orientation has returned. These show the reaction is resolving. Coughing on thin liquids points to trouble swallowing, which raises the risk of aspiration. The fall in BP on standing suggests an ongoing fluid deficit and a fall risk.",
        sources: [SRC.nms, SRC.tse, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report creatinine only in micromol/L, so this result reads 97 micromol/L, down from 168 micromol/L. Creatine kinase is reported in units per litre, so its values do not change.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows improvement", "Needs follow-up"],
      rows: [
        { text: "Temperature 37.4°C (99.3°F)", correct: [0], why: "Temperature has fallen from 39.6°C to near normal." },
        { text: "Creatine kinase 2100 units/L", correct: [0], why: "Creatine kinase has fallen from 9400 units/L, so muscle breakdown is slowing." },
        { text: "Creatinine 1.1 mg/dL (97 micromol/L)", correct: [0], why: "Creatinine has fallen from 1.9 mg/dL (168 micromol/L) into the reference range." },
        { text: "Oriented to person, place and time", correct: [0], why: "Full orientation shows the confusion has cleared." },
        { text: "Coughs and chokes on thin liquids", correct: [1], why: "Coughing on thin liquids suggests swallowing trouble and a risk of aspiration." },
        { text: "BP 96/58 mmHg standing, 128/80 mmHg lying", correct: [1], why: "A fall from 128/80 to 96/58 mmHg on standing shows orthostatic hypotension." },
      ],
    },
  ],
};
