import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c12-4";

/** Case 4. Pediatric emergency department and surgical unit. School-age child with worsening abdominal pain. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Night Visit for Abdominal Pain in a School-Age Child",
  intro:
    "A 9-year-old boy is brought to the pediatric emergency department at 0200 by his father. He has had abdominal pain for 2 days. The pain began around his navel and moved to the right lower abdomen. He weighs 28 kg and has no known allergies.",
  tabs: [
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0215"],
        rows: [
          ["Temperature", "39.2°C (102.6°F)"],
          ["Heart rate", "136/minute"],
          ["Respiratory rate", "28/minute"],
          ["BP", "98/60 mmHg"],
          ["SpO2", "97% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 0230", "Reference range"],
        rows: [["White blood cells", "19.6 x 10^3/microL", "4.5 to 13.5 x 10^3/microL"]],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of a ruptured appendix",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse records the father's report and the child's assessment at 0215. Click to highlight the findings that require follow-up.",
        rationale:
          "Pain that eased suddenly and then spread across the abdomen suggests the appendix has ruptured. A rigid abdomen and lying still with the knees drawn up are signs of peritoneal irritation. A temperature of 39.2°C and a heart rate of 136/minute point to a spreading infection. Normal capillary refill, a recent void and a question about soccer are expected.",
        sources: [SRC.wong],
      }),
      kind: "highlight",
      passage:
        "[[Father says the pain suddenly eased at about 2300]]. [[Pain then became worse and spread across the whole abdomen]]. [[Abdomen rigid to light touch]]. [[Lies still with knees drawn up]]. [[Temperature 39.2°C (102.6°F)]]. [[Heart rate 136/minute]]. [[Capillary refill 2 seconds]]. [[Voided at 0100]]. [[Asks if he will miss his soccer game]].",
      spans: [
        { text: "Father says the pain suddenly eased at about 2300", why: "Sudden relief of appendix pain can mean the appendix has ruptured." },
        { text: "Pain then became worse and spread across the whole abdomen", why: "Spreading pain after relief points to peritonitis from rupture." },
        { text: "Abdomen rigid to light touch", why: "Rigidity is a sign of peritoneal irritation." },
        { text: "Lies still with knees drawn up", why: "Children with peritonitis lie still because movement worsens the pain." },
        { text: "Temperature 39.2°C (102.6°F)", why: "A high fever with these findings points to spreading infection." },
        { text: "Heart rate 136/minute", why: "This rate is above the normal range for a 9-year-old and fits fever and infection." },
        { text: "Capillary refill 2 seconds", why: "A refill time of 2 seconds is within normal limits." },
        { text: "Voided at 0100", why: "A recent void shows urine output is being maintained." },
        { text: "Asks if he will miss his soccer game", why: "Concern about activities is expected for his age." },
      ],
      correct: [0, 1, 2, 3, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Preoperative readiness in a child",
        cjmm: "analyze",
        difficulty: 4,
        stem: "Surgery is booked for 0400. At 0330 the nurse reviews the preoperative checklist. For each item, specify whether it is ready or needs action before the child goes to the operating room.",
        rationale:
          "The father, as legal guardian, has signed the consent. The child's assent is still sought, so his questions are answered in words he understands. A loose tooth can come out during airway care and is reported to the anesthesia team. The prescribed antibiotic has not been given, and it is given before the incision. The identification band and the allergy record are in place.",
        sources: [SRC.consent, SRC.wong, { body: "Coughlin KW. Canadian Paediatric Society, Bioethics Committee", work: "Medical decision-making in paediatrics: Infancy to adolescence. Paediatrics and Child Health 23(2):138", year: 2018, url: "https://cps.ca/en/documents/position/medical-decision-making-in-paediatrics-infancy-to-adolescence" }],
        canada:
          "The Canadian Paediatric Society says Canada has no single legal age of consent. Parents or guardians consent for young children and the child's assent is sought. When a minor may consent alone varies by province.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Ready", "Needs action before surgery"],
      rows: [
        { text: "Consent signed by the father, his legal guardian", correct: [0], why: "A parent who is the legal guardian gives consent for a minor." },
        { text: "Child says he is scared and asks what will happen", correct: [1], why: "The child's assent is sought, so his questions are answered in simple terms first." },
        { text: "Identification band on the right wrist", correct: [0], why: "A correct identification band is in place." },
        { text: "Father reports a loose front tooth", correct: [1], why: "A loose tooth can be dislodged during airway care, so the anesthesia team is told." },
        { text: "Allergy status recorded as no known allergies", correct: [0], why: "Allergy status is recorded and matches the history." },
        { text: "Prescribed IV antibiotic not yet given", correct: [1], why: "Antibiotics are given before the incision to treat infection and limit wound infection." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "BCC",
        topic: "Pain as a barrier to recovery in a child",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The child had a laparoscopic appendectomy at 0400. On day 1 at 1000 he rates his pain 8 on a 0 to 10 scale. He splints his abdomen, takes shallow breaths and refuses to get out of bed. He is receiving IV antibiotics as prescribed. His temperature is 37.4°C (99.3°F). Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Pain of 8 of 10 makes the child splint, breathe shallowly and stay in bed. Shallow breathing and immobility raise the risk of lung and bowel complications after abdominal surgery. Pain is the problem to address first because it blocks both. Infection risk is being treated and his temperature is 37.4°C. Anxiety and constipation are real but are not the most urgent.",
        sources: [SRC.wong],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse should first address {0} because it {1}.",
      blanks: [
        {
          options: [
            { text: "risk for infection", why: "Infection risk is real, but antibiotics are running and he is not febrile now." },
            { text: "anxiety", why: "He may be anxious, but pain is what stops him breathing deeply and walking." },
            { text: "acute pain", why: "Pain of 8 of 10 is causing splinting, shallow breaths and refusal to move." },
            { text: "constipation", why: "Bowel function matters later but is not the most urgent problem on day 1." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "limits deep breathing and walking", why: "Shallow breaths and bed rest raise the risk of lung and bowel complications." },
            { text: "delays his return to school", why: "School return matters but is not the reason pain is urgent today." },
            { text: "disturbs his father's sleep", why: "The father's rest matters but does not make pain the priority." },
            { text: "is expected after surgery", why: "Some pain is expected, but pain of 8 of 10 needs treatment." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "HPM",
        topic: "Care suited to a school-age child",
        cjmm: "generate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse plans how to help the 9-year-old walk and use the incentive spirometer after his pain is treated. Which approaches suit his stage of development? Select all that apply.",
        rationale:
          "School-age children think in concrete terms and want to master tasks. Handling the spirometer first and hearing plain, concrete explanations fit this stage. Choices give him some control, and a chart of walks rewards effort. Letting the father decide every step takes away control. Telling him that brave boys do not cry shames him. Keeping the plan secret raises fear.",
        sources: [SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "Let his father make every choice for him", why: "Removing all choices takes away control, which school-age children value." },
        { text: "Let him handle the spirometer first", why: "Hands-on practice fits concrete thinking at this age." },
        { text: "Tell him that brave boys do not cry", why: "This shames him and discourages him from reporting pain." },
        { text: "Explain what he will feel in plain terms", why: "Concrete, honest explanations fit how school-age children think." },
        { text: "Offer a choice of when to take a walk", why: "Choices give him a sense of control within the plan." },
        { text: "Keep the walking plan a surprise", why: "Surprises raise fear. School-age children cope better when they know what to expect." },
        { text: "Track his walks on a sticker chart", why: "A visible record rewards effort and builds a sense of mastery." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based antibiotic dose in a child",
        cjmm: "action",
        difficulty: 2,
        stem: "The child continues on piperacillin-tazobactam after surgery. The prescription reads 100 mg/kg of the piperacillin component IV every 8 hours. The child weighs 28 kg. How many mg of piperacillin should each dose contain?",
        refs: ["For appendicitis in children older than 9 months who weigh up to 40 kg, the labeled dose is 100 mg/kg of piperacillin every 8 hours."],
        rationale:
          "The prescribed dose is 100 mg/kg of piperacillin for a child of 28 kg. Multiplying 100 mg/kg by 28 kg gives 2800 mg per dose. This matches the labeled dose for a child of his age and weight. The dose is repeated every 8 hours.",
        calc: { expr: "100 * 28", answer: 2800, unit: "mg", round: 0, steps: ["100 * 28 = 2800"] },
        sources: [SRC.zosyn],
      }),
      kind: "mc",
      options: [
        { text: "933 mg", why: "This divides the single dose by 3 as if 100 mg/kg were a daily total." },
        { text: "2800 mg", why: "100 mg/kg times 28 kg gives 2800 mg of piperacillin per dose." },
        { text: "3150 mg", why: "This uses the combined drug amount, which adds the tazobactam to the piperacillin." },
        { text: "8400 mg", why: "This is the total piperacillin for 3 doses, which is a full day." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Incision care teaching for a parent",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Before discharge on day 4, the nurse teaches the father how to care for the child's small abdominal incisions at home. Which two statements by the father show understanding? Select two.",
        rationale:
          "Hand hygiene before touching the dressing keeps skin bacteria out of the wound. Redness, swelling or pus are signs of wound infection that need a call. Antibiotic ointment is not applied to surgical incisions. Soaking in a bath softens a healing wound. A temperature of 38.5°C (101.3°F) is a fever that needs reporting, not an expected finding.",
        sources: [SRC.ssi, SRC.handHygiene, SRC.wong],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will put antibiotic cream on the cuts daily.\"", why: "Antimicrobial ointment is not applied to surgical incisions." },
        { text: "\"I will wash my hands before I touch his dressing.\"", why: "Hand hygiene keeps bacteria from the hands out of the wound." },
        { text: "\"He can have a long soak in the bath tonight.\"", why: "Soaking softens a healing incision and raises the risk of infection." },
        { text: "\"I will call if a cut gets red, swollen or drains pus.\"", why: "These are signs of wound infection that need prompt review." },
        { text: "\"A temperature of 38.5°C (101.3°F) is normal this week.\"", why: "This is a fever that can signal infection and needs reporting." },
      ],
      correct: [1, 3],
    },
  ],
};
