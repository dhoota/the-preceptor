import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c08-4";

/** Case 4. Oncology clinic phone line, then emergency department and oncology unit. Older woman with chills after chemotherapy. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Call to the Oncology Nurse Line",
  intro:
    "A 67-year-old woman calls the oncology clinic nurse line from home at 1600. She had her third cycle of chemotherapy for breast cancer 9 days ago. She says she feels shaky and cannot get warm.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Stage II breast cancer. Docetaxel and cyclophosphamide every 3 weeks. Cycle 3 given 9 days ago.",
        "Implanted port in the right upper chest.",
        "Type 2 diabetes treated with metformin. No known allergies.",
        "Lives with her husband. Two grandchildren aged 4 and 7 visit each weekend.",
      ].join("\n"),
    },
    {
      title: "Nurses' Notes",
      text: [
        "1600 Telephone call from client.",
        "Oral temperature 38.4°C (101.1°F) at 1545 on her home thermometer.",
        "Chills for about 1 hour.",
        "No cough. No burning with urination. No diarrhea.",
        "Home BP 128/76 mmHg on her own cuff.",
        "Took acetaminophen 650 mg at 1550.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Telephone cues after chemotherapy",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews what the client reported on the call. Which findings are cues that she may have a serious infection? Select all that apply.",
        rationale:
          "A single oral temperature of 38.4°C meets the fever threshold for a client who may be neutropenic. Chills suggest bacteria in the blood. Cycle 3 was given 9 days ago, when the neutrophil count is often at its lowest. Neutropenia blunts inflammation, so the lack of cough or urinary symptoms does not rule out infection. A home BP of 128/76 mmHg is reassuring for now.",
        refs: [
          "Fever in neutropenia is a single oral temperature of 38.3°C (101°F) or higher, or 38.0°C (100.4°F) or higher for 1 hour.",
          "Neutrophil counts are often lowest about 7 to 14 days after a chemotherapy cycle.",
        ],
        sources: [SRC.freifeld, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "No cough reported on the call", why: "Absent cough does not point to infection. Neutropenia can also hide lung signs." },
        { text: "Oral temperature of 38.4°C", why: "A single oral reading of 38.3°C or higher is fever in a client at risk of neutropenia." },
        { text: "No burning with urination", why: "Absent urinary symptoms is not a cue of infection. It also does not rule one out." },
        { text: "Chills for about 1 hour", why: "Shaking chills can signal bacteria in the bloodstream." },
        { text: "Home BP of 128/76 mmHg on her cuff", why: "This BP is within the expected range and is not a cue of infection." },
        { text: "Chemotherapy given 9 days ago", why: "The neutrophil count is often lowest 7 to 14 days after a cycle." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Calculating the absolute neutrophil count",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The client arrives at the emergency department at 1700. Her white blood cell count is 1400/mm3 with segmented neutrophils 18% and band neutrophils 4%. What is her absolute neutrophil count?",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "1700 (ED)"],
              rows: [
                ["Temperature", "38.6°C (101.5°F)"],
                ["Heart rate", "112/minute"],
                ["Respiratory rate", "22/minute"],
                ["BP", "104/62 mmHg"],
                ["SpO2", "96% on room air"],
              ],
            },
          },
        ],
        rationale:
          "The absolute neutrophil count adds mature and band neutrophils and applies the total to the white cell count. Segmented neutrophils 18% plus bands 4% is 22%. 1400/mm3 times 22% is 308/mm3. A count below 500/mm3 is neutropenia. With a temperature of 38.6°C, she has febrile neutropenia.",
        refs: ["In febrile neutropenia guidance, neutropenia means an absolute neutrophil count below 500/mm3, or one expected to fall below 500/mm3 within 48 hours."],
        calc: { expr: "1400 * (18 + 4) / 100", answer: 308, unit: "/mm3", round: 0, steps: ["18 + 4 = 22", "1400 * 22 / 100 = 308"] },
        sources: [SRC.freifeld, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report cell counts in SI units, so the white cell count reads 1.4 x 10^9/L and the absolute neutrophil count 0.31 x 10^9/L. Neutropenia is a count below 0.5 x 10^9/L.",
      }),
      kind: "mc",
      options: [
        { text: "56/mm3", why: "This counts only the bands, 4% of 1400/mm3, and leaves out the mature neutrophils." },
        { text: "252/mm3", why: "This counts only the segmented neutrophils, 18% of 1400/mm3, and leaves out the bands." },
        { text: "308/mm3", why: "Segmented and band neutrophils together are 22%, and 22% of 1400/mm3 is 308/mm3." },
        { text: "3080/mm3", why: "This is 10 times the correct count and comes from a misplaced decimal." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority threat in febrile neutropenia",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the emergency department vital signs and the absolute neutrophil count. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "With severe neutropenia, a temperature of 38.6°C, a heart rate of 112/minute and a BP that has fallen to 104/62 mmHg, infection may be moving toward septic shock. Circulation and infection control come first. Dehydration is possible but does not explain the fever. Her diabetes, the timing of acetaminophen and an SpO2 of 96% do not explain the falling BP.",
        sources: [SRC.freifeld, SRC.taplitz],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse's priority is to prevent {0} because {1}.",
      blanks: [
        {
          options: [
            { text: "a hyperglycemic crisis", why: "No glucose value is given. Her findings point to infection, not a glucose crisis." },
            { text: "septic shock", why: "Fever, a fast pulse and a falling BP with severe neutropenia point toward shock." },
            { text: "oral mucositis", why: "Mucositis is a chemotherapy effect but is not the threat shown by her vital signs." },
            { text: "dehydration", why: "Volume loss can lower the BP but does not explain the fever." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "she has type 2 diabetes", why: "Diabetes raises infection risk but does not explain the falling BP." },
            { text: "she took acetaminophen", why: "Acetaminophen can mask fever but does not cause a falling BP." },
            { text: "her SpO2 is 96% on room air", why: "An SpO2 of 96% shows adequate oxygenation, not a threat." },
            { text: "her BP is falling as her pulse rises", why: "A BP of 104/62 mmHg with a heart rate of 112/minute shows early circulatory strain." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Infection prevention for a neutropenic client",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client is admitted to the oncology unit. The nurse plans measures to protect her while she is neutropenic. For each measure, specify whether it is indicated or not indicated.",
        rationale:
          "Hand hygiene is the most effective way to prevent spread of infection in hospital. Scrubbing the port hub before access lowers line infection. Oral temperatures avoid the injury and gut organisms linked to the rectal route. Fresh flowers and plants are kept out of the rooms of neutropenic clients. Enemas are avoided for the same reason as rectal temperatures. Visitors do not need respirators without an airborne illness.",
        sources: [SRC.freifeld, SRC.clabsi],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Indicated", "Not indicated"],
      rows: [
        { text: "Perform hand hygiene before entering the room", correct: [0], why: "Hand hygiene is the most effective means of preventing hospital infection." },
        { text: "Take temperatures by the rectal route", correct: [1], why: "The rectal route can injure the mucosa and spread gut organisms." },
        { text: "Scrub the port hub with antiseptic before access", correct: [0], why: "Scrubbing the hub lowers the risk of a catheter bloodstream infection." },
        { text: "Allow fresh flowers from her family", correct: [1], why: "Plants and fresh or dried flowers are kept out of neutropenic clients' rooms." },
        { text: "Give an enema for constipation", correct: [1], why: "Rectal procedures are avoided during neutropenia." },
        { text: "Require visitors to wear N95 respirators", correct: [1], why: "Respirators protect against airborne spread and are not needed for neutropenia alone." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Timing the first antibiotic dose",
        cjmm: "action",
        difficulty: 4,
        stem: "Triage was at 1700. At 1745 the nurse has drawn one set of blood cultures from the port. Two attempts at a peripheral culture have failed. The first dose of cefepime 2 g IV is ready. Which action should the nurse take?",
        rationale:
          "The first antibiotic dose is due within 1 hour of triage, so it cannot wait for a second culture. One set is already drawn from the port. The nurse gives the cefepime now and tells the provider a peripheral set is still needed. Waiting for a phlebotomist or more attempts would push the dose past the 1 hour target.",
        refs: ["Febrile neutropenia needs the first dose of empirical antibiotic within 1 hour of triage."],
        sources: [SRC.taplitz, SRC.freifeld],
      }),
      kind: "mc",
      options: [
        { text: "Wait for the phlebotomist to draw the second set", why: "Waiting risks giving the first dose later than 1 hour after triage." },
        { text: "Hold the cefepime until both sets are drawn", why: "Delaying the antibiotic lets a bloodstream infection progress toward shock." },
        { text: "Ask a colleague to try a third venipuncture first", why: "More attempts delay a dose that is due within 1 hour of triage." },
        { text: "Give the cefepime now and report the missing set", why: "The dose is due within 1 hour of triage and one culture set is already drawn." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Vaccines and infection prevention at home during chemotherapy",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Her neutrophil count recovers and she goes home on day 5. The nurse evaluates her teaching about staying well during the rest of her chemotherapy. Which three statements show understanding? Select three.",
        rationale:
          "Inactivated influenza vaccine is recommended during chemotherapy, and the live nasal spray vaccine is avoided. Hand hygiene at home lowers infection risk. Fever during chemotherapy needs a call to the clinic right away. Household contacts, including children, should keep up their routine vaccines. Waiting a day on acetaminophen delays care. Rectal temperatures are avoided.",
        sources: [SRC.vaccine, SRC.taplitz],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"My grandchildren should put off their shots.\"", why: "Household contacts should stay up to date on routine vaccines to protect her." },
        { text: "\"I will get the flu shot, not the nasal spray.\"", why: "Inactivated influenza vaccine is recommended. The live nasal vaccine is avoided." },
        { text: "\"I will wash my hands before I eat.\"", why: "Hand hygiene lowers the risk of infection at home." },
        { text: "\"I will take acetaminophen and wait a day.\"", why: "Fever during chemotherapy needs prompt assessment, not home treatment." },
        { text: "\"I will call the clinic right away for a fever.\"", why: "Fever can be the only sign of serious infection during neutropenia." },
        { text: "\"I will take my temperature by the rectal route.\"", why: "The rectal route is avoided in clients at risk of neutropenia." },
      ],
      correct: [1, 2, 4],
    },
  ],
};
