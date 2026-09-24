import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c20-4";

/** Case 4. Medical unit. Young adult who injects drugs, admitted with fever and a new murmur. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Fever and Fatigue in a Young Adult",
  intro:
    "A 31-year-old man comes to the emergency department at 1100 with 10 days of fever, night sweats and fatigue. He injects heroin and fentanyl daily and last injected at 0500. He is admitted to the medical unit.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Injects into the arms about 4 times a day. Sometimes reuses needles.",
        "Hepatitis C antibody positive 2 years ago, not treated.",
        "No known heart disease. No known drug allergies.",
        "Lives in a shelter. Weight 68 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1100"],
        rows: [
          ["Temperature", "39.2°C (102.6°F)"],
          ["Heart rate", "112/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "112/64 mmHg"],
          ["SpO2", "96% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 1130", "Reference range"],
        rows: [
          ["WBC", "17 400/mm3", "4 500 to 11 000/mm3"],
          ["Hemoglobin", "10.9 g/dL (109 g/L)", "13.5 to 17.5 g/dL"],
          ["Creatinine", "0.9 mg/dL (80 micromol/L)", "0.7 to 1.3 mg/dL"],
          ["Blood cultures, 3 sets from separate sites", "Pending", "No growth"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Physical signs of a heart valve infection",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 1200 the nurse completes a head-to-toe assessment of the client. Which findings require follow-up? Select all that apply.",
        rationale:
          "Fever with a new murmur in a person who injects drugs points to an infected heart valve. Janeway lesions and splinter hemorrhages come from small emboli. Blood-streaked sputum can mean septic emboli to the lungs from a right-sided valve. Normal pupils, bowel sounds and clean injection sites need no follow-up.",
        sources: [SRC.ie],
      }),
      kind: "sata",
      options: [
        { text: "Pupils 3 mm and reactive to light", why: "Pupils of this size that react to light need no follow-up." },
        { text: "New murmur at the left lower sternal border", why: "A new murmur here suggests tricuspid valve damage, the valve most often infected in people who inject drugs." },
        { text: "Painless red spots on both palms", why: "Painless red macules on the palms are Janeway lesions from septic emboli." },
        { text: "Bowel sounds active in four quadrants", why: "Active bowel sounds are an expected finding." },
        { text: "Thin dark lines under two fingernails", why: "Splinter hemorrhages under the nails can signal emboli from an infected valve." },
        { text: "Cough with blood-streaked sputum", why: "Blood-streaked sputum can mean septic emboli from a right-sided valve have lodged in the lungs." },
        { text: "Injection sites on the arms without redness", why: "Clean injection sites show no local abscess or cellulitis." },
      ],
      correct: [1, 2, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Opioid withdrawal or infection",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 1800, 13 hours after his last injection, the client is restless and asks for something for his pain. For each finding, specify whether it is more consistent with opioid withdrawal or with the heart valve infection.",
        rationale:
          "His last injection was 13 hours ago. Yawning, a runny nose, watery eyes, large pupils and gooseflesh are withdrawal signs scored on the Clinical Opiate Withdrawal Scale. Fever and a new murmur come from the valve infection. Treating withdrawal early helps him stay for treatment.",
        sources: [SRC.cows, SRC.asam],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Opioid withdrawal", "Heart valve infection"],
      rows: [
        { text: "Frequent yawning", correct: [0], why: "Yawning is a scored sign of opioid withdrawal." },
        { text: "Temperature 39.0°C (102.2°F)", correct: [1], why: "A high fever reflects the bloodstream infection." },
        { text: "Runny nose and watery eyes", correct: [0], why: "A runny nose and tearing are scored signs of opioid withdrawal." },
        { text: "Pupils 6 mm", correct: [0], why: "Pupils dilate as the opioid effect wears off." },
        { text: "Gooseflesh on both arms", correct: [0], why: "Gooseflesh is a scored sign of opioid withdrawal." },
        { text: "New murmur at the left lower sternal border", correct: [1], why: "A new murmur reflects damage to an infected valve." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority report in a heart valve infection",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "On day 2 the blood cultures grow Staphylococcus aureus. At 0800 the nurse receives four reports about the client. Which report should the nurse address first?",
        rationale:
          "New pleuritic chest pain with an SpO2 of 89% can mean septic emboli from the infected valve have reached the lungs. Low oxygen is a threat to life, so it comes first. Fever after acetaminophen, mild withdrawal symptoms and a request to smoke matter but are not urgent.",
        sources: [SRC.ie, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Temperature 38.4°C (101.1°F) 2 hours after acetaminophen", why: "Ongoing fever is expected early in treatment and is reported, but it is not the most urgent problem." },
        { text: "Asks to go outside to smoke a cigarette", why: "This request can be managed with nicotine replacement and does not threaten life." },
        { text: "New sharp chest pain on inspiration with SpO2 89%", why: "Pleuritic pain with low oxygen can signal septic pulmonary emboli and needs immediate action." },
        { text: "Muscle aches rated 5 of 10 with yawning", why: "Mild withdrawal symptoms need treatment but are not life threatening." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Referrals for opioid use and housing",
        cjmm: "generate",
        process: "communication",
        difficulty: 2,
        stem: "Echocardiography shows a vegetation on the tricuspid valve. He will need several weeks of IV antibiotics. He says he wants help to stop using and has nowhere stable to live. Complete the sentence by dragging one choice into each blank.",
        rationale:
          "He wants help to stop using, and a hospital stay is a chance to start treatment. The addiction medicine team can begin buprenorphine or methadone and link him to follow-up. Unstable housing threatens safe completion of IV antibiotics. Social work arranges housing and community supports.",
        sources: [SRC.asam, SRC.brunner, { body: "Bruneau J, Ahamad K, Goyer ME, et al. Canadian Research Initiative in Substance Misuse", work: "Management of opioid use disorders: a national clinical practice guideline. CMAJ 190(9):E247", year: 2018, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5837873/" }],
        canada: "Canada's 2018 national guideline from CRISM recommends starting buprenorphine-naloxone whenever feasible. Methadone is the option for clients who respond poorly to it.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse should request a referral to {0} for his opioid use and to {1} for his housing.",
      targets: ["Opioid use", "Housing"],
      tokens: [
        { text: "physical therapy", why: "Physical therapy does not address opioid use or housing." },
        { text: "the addiction medicine team", why: "The addiction medicine team can start medication for opioid use disorder in hospital." },
        { text: "a registered dietitian", why: "A dietitian does not address opioid use or housing." },
        { text: "social work", why: "A social worker arranges housing and community supports for discharge." },
        { text: "the wound care nurse", why: "Wound care does not address opioid use or housing." },
        { text: "the chaplain", why: "A chaplain offers spiritual support but does not arrange housing or addiction care." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Vancomycin infusion reaction",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "On day 3 the nurse hangs vancomycin 1000 mg IV in 250 mL, prescribed over 2 hours. After 20 minutes the client reports itching, and his face, neck and upper chest are red. The bag is almost half empty. BP is 118/72 mmHg and breath sounds are clear. Which action should the nurse take first?",
        rationale:
          "Itching and redness of the face, neck and upper chest during a fast vancomycin infusion fit a vancomycin infusion reaction. The bag is almost half empty after 20 minutes, which is faster than prescribed. Stopping the infusion comes first. A BP of 118/72 mmHg and clear breath sounds make anaphylaxis less likely. The drug can restart at a slower rate once symptoms settle.",
        sources: [SRC.vanco],
      }),
      kind: "mc",
      options: [
        { text: "Stop the vancomycin infusion", why: "Stopping the drug ends the histamine-driven reaction. It can restart at a slower rate once symptoms settle." },
        { text: "Apply a cool cloth and keep the rate", why: "Cooling the skin does not stop the reaction while the drug keeps running fast." },
        { text: "Obtain a blood sample for a trough level", why: "A drug level does not treat the reaction and can wait." },
        { text: "Give the next dose of acetaminophen", why: "Acetaminophen does not treat histamine release from a fast infusion." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Overdose and infection prevention teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Before discharge the nurse teaches the client how to lower his risk of overdose and new infection. Which three statements show the teaching was effective? Select three.",
        rationale:
          "New sterile equipment for each injection lowers the risk of another valve infection. Naloxone in hand and trained friends can reverse an overdose. Not using alone means someone can respond. Tolerance can drop after days of reduced use, so a usual dose can be fatal. Tap water does not sterilize needles. Test strips do not make a drug safe.",
        sources: [SRC.samhsa, { body: "Health Canada", work: "Naloxone: Opioid overdose response", year: 2026, url: "https://www.canada.ca/en/health-canada/services/opioids/naloxone.html" }],
        canada: "Health Canada says take-home naloxone kits are sold at most pharmacies without a prescription. Some provinces offer free kits, so access varies by province.",
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I can rinse a used needle with tap water and reuse it.\"", why: "Rinsing with tap water does not sterilize a needle and can add bacteria." },
        { text: "\"I will use a new sterile needle and syringe for each injection.\"", why: "New sterile equipment for each injection lowers the risk of another valve infection." },
        { text: "\"My tolerance is the same as before I came into the hospital.\"", why: "Tolerance can fall after days of reduced use, which raises overdose risk." },
        { text: "\"I will carry naloxone and show my friends how to use it.\"", why: "Carried naloxone lets others reverse an overdose quickly." },
        { text: "\"Fentanyl test strips mean the drug is safe to use.\"", why: "A strip can detect fentanyl but cannot show that a drug is safe." },
        { text: "\"I will avoid using alone so someone can respond.\"", why: "Using with someone present means help is there if he overdoses." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
