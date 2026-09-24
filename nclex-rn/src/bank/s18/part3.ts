import type { Item } from "@/engine/types";
import { CDC_FLU, COX, DHHS, GINA, LEHNE, POTTER, RYBAK, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s18-21", {
      canada: "Canadian labs report theophylline in micromol/L. The Canadian Theo ER monograph converts 20 mg/L to 110 micromol/L, so the level of 26 mcg/mL reads about 144 micromol/L.",
      topic: "Theophylline level and drug interaction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 68-year-old client with COPD takes extended-release theophylline. Four days ago the client started ciprofloxacin for a urinary tract infection. The client now reports nausea, vomiting, restlessness and palpitations. Heart rate is 124/minute. The theophylline level is 26 mcg/mL. Which explanation fits these findings best?",
      rationale:
        "The theophylline level of 26 mcg/mL is above the target range. Ciprofloxacin slows theophylline breakdown in the liver, so the level rose after the antibiotic started. Nausea, vomiting, restlessness and a heart rate of 124/minute are early toxic effects. Higher levels can cause seizures and dysrhythmias. A COPD flare or anxiety would not raise the drug level.",
      refs: ["The usual target theophylline level is 5 to 15 mcg/mL."],
      sources: [LEHNE, { body: "AA Pharma Inc.", work: "Theo ER (theophylline sustained release tablets) Product Monograph", year: 2010, url: "https://www.aapharma.ca/downloads/en/PIL/Theophylline_PM.pdf" }],
    }),
    kind: "mc",
    options: [
      { text: "Gastrointestinal effects of ciprofloxacin", why: "Ciprofloxacin can cause nausea, but not a raised theophylline level with palpitations." },
      { text: "An acute exacerbation of COPD", why: "A COPD flare shows more dyspnea and sputum. It does not raise the drug level." },
      { text: "Theophylline toxicity", why: "A level of 26 mcg/mL with nausea, restlessness and tachycardia fits toxicity from the interaction." },
      { text: "Anxiety about the new infection", why: "Anxiety does not explain a theophylline level above the target range." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-22", {
      topic: "Observation after an asthma biologic",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse gives a 30-year-old client the first subcutaneous dose of omalizumab for severe allergic asthma in the clinic. Which plan should the nurse follow after the injection?",
      rationale:
        "Omalizumab can cause anaphylaxis, and some reactions start late. Most reactions after the first 3 doses begin within 2 hours. The client stays under direct observation for 2 hours after each of the first 3 doses and for 30 minutes after later doses. The client also learns to carry and use an epinephrine auto-injector. An antihistamine before discharge can mask early signs.",
      refs: ["Observe for 2 hours after each of the first 3 omalizumab doses and 30 minutes after later doses."],
      sources: [COX, GINA],
    }),
    kind: "mc",
    options: [
      { text: "Discharge once the vital signs are stable", why: "Stable signs right after the dose do not rule out a delayed reaction." },
      { text: "Observe for 15 minutes, then discharge", why: "Fifteen minutes is too short for the reactions that start later." },
      { text: "Observe the client in the clinic for 2 hours", why: "Direct observation for 2 hours covers most reactions after early doses." },
      { text: "Give oral diphenhydramine, then discharge", why: "Premedication can hide early anaphylaxis signs and does not replace observation." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-23", {
      canada: "Canada uses the name salbutamol for albuterol, and Health Canada lists salbutamol solutions for nebulizers. Canadian labs report potassium in mmol/L only, with the same numbers, so it falls from 4.2 to 3.5 mmol/L.",
      topic: "Response to bronchodilator treatment in a child",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 9-year-old child with an asthma exacerbation receives albuterol by nebulizer every 20 minutes for 3 doses, starting at 0900, and oral prednisolone. The nurse reviews the flow sheet. For each finding, specify whether it shows a response to treatment or an adverse effect of albuterol.",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "0900", "0920", "0940", "1000"],
            rows: [
              ["Respiratory rate (/minute)", "38", "34", "30", "26"],
              ["SpO2 (%)", "89", "91", "94", "96"],
              ["Peak flow (% of personal best)", "45", "55", "66", "78"],
              ["Heart rate (/minute)", "118", "126", "134", "138"],
              ["Hand tremor", "None", "None", "Mild", "Mild"],
              ["Serum potassium (mEq/L)", "4.2", "Not drawn", "Not drawn", "3.5"],
            ],
          },
        },
      ],
      rationale:
        "The respiratory rate fell from 38 to 26/minute. SpO2 rose from 89 to 96% and peak flow rose from 45 to 78% of personal best. These show the airways opening. Albuterol stimulates beta receptors in the heart and muscle, so heart rate rose to 138/minute and a mild tremor appeared. It also moves potassium into cells, so potassium fell from 4.2 to 3.5 mEq/L.",
      sources: [GINA, LEHNE, { body: "Health Canada", work: "Drug Product Database: salbutamol inhalation solutions", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/" }],
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Response to treatment", "Adverse effect of albuterol"],
    rows: [
      { text: "Respiratory rate trend", correct: [0], why: "A fall from 38 to 26/minute shows less work of breathing." },
      { text: "SpO2 trend", correct: [0], why: "A rise from 89 to 96% shows better gas exchange." },
      { text: "Peak flow trend", correct: [0], why: "A rise from 45 to 78% of personal best shows the airways opening." },
      { text: "Heart rate trend", correct: [1], why: "A rise from 118 to 138/minute reflects beta stimulation of the heart." },
      { text: "Hand tremor", correct: [1], why: "Beta stimulation of skeletal muscle causes a fine tremor." },
      { text: "Serum potassium trend", correct: [1], why: "Albuterol shifts potassium into cells, so the level fell to 3.5 mEq/L." },
    ],
  },
  {
    ...meta("rn-s18-24", {
      topic: "Intermittent vancomycin infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The prescription is vancomycin 1250 mg IV every 12 hours. The pharmacy sends 1250 mg in 250 mL of 0.9% sodium chloride labeled to infuse over 2 hours. At what rate should the nurse set the infusion pump?",
      rationale:
        "The bag holds 250 mL to run over 2 hours. Dividing 250 mL by 2 hours gives 125 mL/hour. A slow infusion lowers the risk of the flushing and itching reaction that follows rapid vancomycin. The dose and timing are then guided by drug level monitoring.",
      refs: ["Vancomycin is infused over at least 60 minutes to limit infusion reactions."],
      calc: { expr: "250 / 2", answer: 125, unit: "mL/hour", round: 0, steps: ["250 / 2 = 125"] },
      sources: [LEHNE, RYBAK],
    }),
    kind: "mc",
    options: [
      { text: "25 mL/hour", why: "This is one fifth of the correct rate and runs five times longer than labeled." },
      { text: "62.5 mL/hour", why: "This is half the correct rate and doubles the infusion time." },
      { text: "125 mL/hour", why: "250 mL over 2 hours is 125 mL/hour." },
      { text: "250 mL/hour", why: "This is twice the correct rate and runs faster than labeled." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-25", {
      topic: "Pediatric safe dose range",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A child who weighs 18 kg has a prescription for cephalexin 300 mg by mouth every 6 hours. The drug reference lists a safe range of 25 to 50 mg/kg/day in 4 divided doses. What is the maximum safe single dose for this child?",
      rationale:
        "The top of the range is 50 mg/kg/day. For 18 kg that is 900 mg a day. Divided into 4 doses, the maximum single dose is 225 mg. The prescribed 300 mg is above this, so the nurse holds the dose and clarifies it with the prescriber.",
      calc: { expr: "50 * 18 / 4", answer: 225, unit: "mg", round: 0, steps: ["50 * 18 = 900", "900 / 4 = 225"] },
      sources: [POTTER, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "225 mg", why: "50 mg/kg/day for 18 kg is 900 mg, and 900 mg divided by 4 is 225 mg." },
      { text: "300 mg", why: "This is the prescribed dose. It exceeds the safe maximum." },
      { text: "450 mg", why: "This divides the daily maximum by 2 instead of 4." },
      { text: "900 mg", why: "This is the maximum for a whole day, not one dose." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-26", {
      topic: "New allergy report before a first antibiotic dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to hang the first dose of piperacillin-tazobactam IV for a client with pneumonia. The admission record lists no known allergies. During the identity check, the client says a penicillin shot once caused throat swelling and hives. What should the nurse do first?",
      rationale:
        "Piperacillin is a penicillin. Throat swelling and hives describe a past severe allergic reaction. The nurse holds the dose and reports the history so another antibiotic can be chosen. The allergy record is updated. Premedication or a slow rate does not make the drug safe after anaphylaxis.",
      sources: [POTTER, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Hold the dose and notify the prescriber", why: "A past anaphylactic reaction to a penicillin makes this drug unsafe until the plan changes." },
      { text: "Premedicate with diphenhydramine", why: "An antihistamine does not prevent anaphylaxis to a penicillin." },
      { text: "Infuse the dose at half the rate", why: "A slower rate does not prevent an allergic reaction." },
      { text: "Give the dose and update the record", why: "Giving the drug exposes the client to a possible severe reaction." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s18-27", {
      topic: "Doxycycline teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 20-year-old client starts doxycycline 100 mg by mouth twice daily for 7 days for a chlamydia infection. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Doxycycline can irritate the esophagus, so it is taken with a full glass of water while upright. It makes the skin sensitive to sunlight, so sunscreen and covering clothing are used. Calcium in milk and the metals in antacids bind the drug and reduce absorption. The full course is finished even after symptoms clear.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Take each dose with a full glass of water", why: "Plenty of water carries the tablet past the esophagus and limits irritation." },
      { text: "Take it with milk to protect the stomach", why: "Calcium in milk binds doxycycline and lowers absorption." },
      { text: "Take an antacid with each dose", why: "Antacid metals bind doxycycline and lower absorption." },
      { text: "Use sunscreen and protective clothing", why: "Doxycycline causes photosensitivity and sunburn." },
      { text: "Stop once the symptoms clear", why: "Stopping early can leave the infection untreated." },
      { text: "Stay upright after each dose", why: "Lying down soon after a dose can let the tablet injure the esophagus." },
    ],
    correct: [0, 3, 5],
  },
  {
    ...meta("rn-s18-28", {
      topic: "Timing of aminoglycoside levels",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client receives gentamicin 120 mg IV every 8 hours, infused over 30 minutes. The primary health care provider prescribes peak and trough levels around the 0800 dose. Complete the sentence by dragging the correct timing into each blank.",
      rationale:
        "The trough is the lowest level, so it is drawn just before the next dose, within 30 minutes before 0800. The peak is the highest level after distribution, so it is drawn 30 minutes after the 30-minute infusion ends. A high trough warns of kidney and ear toxicity. A low peak warns the dose may not kill the bacteria.",
      sources: [LEHNE],
    }),
    kind: "dnd",
    template: "Draw the trough level {0} and the peak level {1}.",
    scoring: "zero-one",
    targets: ["Trough timing", "Peak timing"],
    tokens: [
      { text: "as soon as the infusion ends", why: "Distribution is not complete when the infusion ends, so this level overstates the peak." },
      { text: "2 hours before the 0800 dose", why: "Drawn this early, the level is still falling and overstates the trough." },
      { text: "within 30 minutes before the 0800 dose", why: "The trough is the lowest level, just before the next dose." },
      { text: "halfway through the infusion", why: "Drug is still entering the blood, so this is not the peak." },
      { text: "30 minutes after the infusion ends", why: "This allows distribution and captures the peak level." },
      { text: "4 hours after the infusion ends", why: "By then the level is falling and no longer reflects the peak." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s18-29", {
      topic: "Hypersensitivity to an antiretroviral",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 38-year-old client with HIV started a single tablet of abacavir, lamivudine and dolutegravir 10 days ago. The client calls the clinic with a temperature of 38.6°C (101.5°F), a new rash, nausea, diarrhea and aching. What should the nurse tell the client?",
      rationale:
        "Abacavir can cause a hypersensitivity reaction, most often in the first 6 weeks. It combines fever, rash, stomach upset and aching. The client stops the tablet and is seen the same day. Continuing or restarting abacavir after this reaction can cause a severe, even fatal, reaction. The client is never rechallenged with any abacavir product.",
      refs: ["Abacavir hypersensitivity usually starts within the first 6 weeks of therapy."],
      sources: [DHHS, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Keep taking it and use acetaminophen", why: "Continuing abacavir during this reaction can make it severe." },
      { text: "Skip the next dose, then restart it", why: "Restarting after a hypersensitivity reaction can be fatal." },
      { text: "Stop the tablet and come in today", why: "Fever, rash and gastrointestinal symptoms on abacavir need the drug stopped and a same-day review." },
      { text: "Take it with food to ease the nausea", why: "Food does not treat a hypersensitivity reaction." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-30", {
      topic: "Influenza antiviral teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 45-year-old client has had fever, cough and muscle aches for 30 hours. A rapid test confirms influenza A. The client receives a prescription for oseltamivir 75 mg by mouth twice daily for 5 days. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client started within 30 hours of onset, inside the 48-hour window when oseltamivir helps most. In uncomplicated influenza it shortens the illness by about 1 day. Nausea and vomiting are its most common adverse effects. Taking each dose with food makes them less likely.",
      refs: ["Oseltamivir helps most when started within 48 hours of illness onset."],
      sources: [CDC_FLU],
    }),
    kind: "cloze",
    template: "Starting oseltamivir now is expected to {0}. Taking each dose {1} can lower its most common adverse effect.",
    scoring: "zero-one",
    blanks: [
      {
        options: [
          { text: "shorten the illness by about 1 day", why: "Early oseltamivir shortens uncomplicated influenza by about a day." },
          { text: "prevent every influenza complication", why: "Oseltamivir lowers some risks but does not prevent every complication." },
          { text: "cure the infection within a day", why: "The drug limits viral spread. It does not cure the infection overnight." },
          { text: "replace this year's flu vaccine", why: "Treatment does not replace yearly vaccination." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "with food", why: "Food lowers the nausea and vomiting oseltamivir can cause." },
          { text: "on an empty stomach", why: "An empty stomach makes nausea more likely." },
          { text: "with an antacid", why: "An antacid is not advised to reduce oseltamivir nausea." },
          { text: "at bedtime only", why: "The drug is taken twice daily. Bedtime timing does not prevent nausea." },
        ],
        correct: 0,
      },
    ],
  },
];
