import type { Item } from "@/engine/types";
import { FIORE, GYAWALI, HINKLE, LEHNE, ONS, SCHNEIDER, SIEGEL, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s18-31", {
      topic: "Sulfonamide antibiotic teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 58-year-old client starts sulfamethoxazole-trimethoprim double strength by mouth twice daily for a urinary tract infection. The client also takes lisinopril for hypertension. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Sulfonamides can form crystals in the urine, so the client drinks extra fluid. A rash or mouth sores can be the start of a severe skin reaction and are reported at once. Trimethoprim raises potassium, and lisinopril does too, so potassium is checked. Lisinopril is not stopped without a prescription. Orange urine belongs to other drugs. The full course is finished.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Drink extra fluids through the day", why: "Good urine flow prevents sulfonamide crystals in the kidneys." },
      { text: "Stop lisinopril during the course", why: "Lisinopril still treats the hypertension and is not stopped without a prescription." },
      { text: "Report any rash or mouth sores", why: "These can signal a severe skin reaction such as Stevens-Johnson syndrome." },
      { text: "Keep appointments for potassium checks", why: "Trimethoprim with lisinopril can raise potassium to a dangerous level." },
      { text: "Expect the urine to turn orange", why: "Orange urine comes from drugs such as phenazopyridine, not this antibiotic." },
      { text: "Stop the drug when burning eases", why: "Stopping early can leave bacteria behind and cause relapse." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s18-32", {
      topic: "Gravity drip rate for an IV antibiotic",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The prescription is cefazolin 1 g in 100 mL of 0.9% sodium chloride IV over 30 minutes. No pump is free, so the nurse uses a gravity secondary set with a drop factor of 10 drops/mL. How many drops per minute should the nurse count?",
      rationale:
        "The bag holds 100 mL and the set gives 10 drops in each mL, so the bag holds 1000 drops. The time is 30 minutes. Dividing 1000 drops by 30 minutes gives 33.3, so the nurse counts 33 drops per minute. The rate is checked again a few minutes after starting.",
      calc: { expr: "100 * 10 / 30", answer: 33.333333333333336, unit: "drops/minute", round: 0, steps: ["100 * 10 = 1000", "1000 / 30 = 33.3"] },
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "3 drops/minute", why: "This divides the volume by the time and leaves out the drop factor." },
      { text: "17 drops/minute", why: "This spreads the bag over twice the prescribed time." },
      { text: "33 drops/minute", why: "1000 drops over 30 minutes rounds to 33 drops per minute." },
      { text: "333 drops/minute", why: "This is 10 times the correct rate from a misplaced decimal point." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s18-33", {
      topic: "Vinca alkaloid neurotoxicity",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with lymphoma is due for a weekly dose of vincristine IV. The client reports numb fingertips, trouble fastening buttons and no bowel movement for 4 days. Which action should the nurse take?",
      rationale:
        "Nerve damage is the dose-limiting toxicity of vincristine. Numb fingertips and loss of fine motor skill show peripheral neuropathy. Four days without a bowel movement can signal autonomic neuropathy and risk paralytic ileus. The prescriber needs these findings before the next dose, because the dose may be reduced or held. These effects are not harmless and a low-fiber diet worsens constipation.",
      sources: [ONS, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give the dose and reassess the hands next week", why: "Another dose can worsen nerve damage before the prescriber reviews it." },
      { text: "Teach that the numbness is harmless", why: "Vincristine neuropathy can become disabling and needs dose review." },
      { text: "Advise a low-fiber diet for the bowels", why: "Low fiber worsens constipation. Fiber, fluids and a bowel regimen are used." },
      { text: "Report the findings before the next dose", why: "Neuropathy and constipation are dose-limiting toxicities the prescriber must review." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-34", {
      topic: "Anthracycline urine color and cardiac effects",
      cjmm: "recognize",
      process: "teaching",
      difficulty: 3,
      stem: "A client received a first dose of doxorubicin IV yesterday. The client calls to report red urine this morning. The client has no pain or burning when passing urine. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Doxorubicin is a red drug that colors the urine red for a day or two after a dose. The lack of pain or burning fits a drug color effect rather than bleeding from the bladder. Doxorubicin can damage the heart. New shortness of breath or ankle swelling can signal heart failure and is reported. Hair loss and mild nausea are expected effects.",
      sources: [LEHNE, ONS],
    }),
    kind: "cloze",
    template: "The red urine is most likely {0}. The nurse should teach the client to report {1} right away.",
    scoring: "zero-one",
    blanks: [
      {
        options: [
          { text: "an expected drug color effect", why: "Doxorubicin is red and tints the urine for a day or two." },
          { text: "a sign of hemorrhagic cystitis", why: "Hemorrhagic cystitis is linked to cyclophosphamide and causes painful voiding." },
          { text: "a sign of acute kidney failure", why: "Kidney failure lowers urine output. It does not turn urine red a day after this drug." },
          { text: "a sign of a urinary infection", why: "Infection causes burning and frequency. The client has no pain or burning." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "hair loss over the next weeks", why: "Hair loss is an expected effect of doxorubicin." },
          { text: "mild nausea after meals", why: "Mild nausea is common and is managed with antiemetics." },
          { text: "new shortness of breath or ankle swelling", why: "These can signal doxorubicin heart damage and heart failure." },
          { text: "a metallic taste in the mouth", why: "Taste change is common and not an urgent sign." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s18-35", {
      topic: "Preventing bladder injury from cyclophosphamide",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 50-year-old client with lymphoma is scheduled for high-dose cyclophosphamide IV. Which actions help prevent bladder injury from the drug? Select all that apply.",
      rationale:
        "A cyclophosphamide breakdown product, acrolein, irritates the bladder lining and can cause bleeding. Extra fluids dilute it. Frequent voiding keeps it from sitting in the bladder. Mesna binds acrolein and protects the bladder with high doses. Limiting fluids concentrates the urine. A late evening dose leaves the drug in the bladder overnight.",
      sources: [LEHNE, ONS],
    }),
    kind: "sata",
    options: [
      { text: "Limit fluids to reduce nausea", why: "Less fluid concentrates the irritating breakdown product in the bladder." },
      { text: "Encourage fluids before and after the dose", why: "Extra fluid dilutes acrolein and flushes it out." },
      { text: "Schedule the infusion for late evening", why: "An evening dose lets urine sit in the bladder overnight. Morning dosing is preferred." },
      { text: "Give mesna as prescribed", why: "Mesna binds acrolein and protects the bladder lining." },
      { text: "Have the client void often", why: "Frequent voiding shortens contact between acrolein and the bladder wall." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s18-36", {
      topic: "Handling oral chemotherapy at home",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client starts capecitabine tablets at home for colon cancer. The client lives with an adult daughter who is pregnant. Which safe handling instructions should the nurse include? Select all that apply.",
      rationale:
        "Capecitabine is a hazardous drug. Hands are washed after touching tablets. The tablets stay in their labeled container, apart from other household drugs and out of reach of children. A pregnant person avoids handling them because exposure can harm a fetus. Tablets are not crushed, which creates dust. Unused tablets go back to the pharmacy or a take-back program, not the trash.",
      sources: [ONS, SIEGEL],
    }),
    kind: "sata",
    options: [
      { text: "Crush the tablets into applesauce", why: "Crushing creates hazardous dust and changes the dose delivery." },
      { text: "Wash hands after touching the tablets", why: "Hand washing removes drug residue after handling." },
      { text: "Store tablets in the original container", why: "The labeled container keeps the drug separate and identifiable." },
      { text: "Use one pill organizer for the household", why: "Sharing an organizer spreads hazardous drug residue to other medicines." },
      { text: "Have pregnant family avoid handling them", why: "Exposure to a hazardous drug can harm a developing fetus." },
      { text: "Discard leftover tablets in household trash", why: "Hazardous drugs are returned to the pharmacy or a take-back program." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s18-37", {
      topic: "Tamoxifen warning signs",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 44-year-old client starts tamoxifen 20 mg by mouth daily after breast cancer surgery. Which two statements show the client understands what to report? Select two.",
      rationale:
        "Tamoxifen raises the risk of blood clots, so pain and swelling in one calf are reported. It also raises the risk of endometrial cancer, so unusual vaginal bleeding is reported. Hot flashes and mild nausea are common, expected effects. They are discussed at routine visits rather than reported urgently.",
      sources: [LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will report pain and swelling in one calf.\"", why: "One-sided calf pain and swelling can signal a deep vein clot." },
      { text: "\"I will report hot flashes in the first week.\"", why: "Hot flashes are a common expected effect of tamoxifen." },
      { text: "\"I will report unusual vaginal bleeding.\"", why: "Abnormal bleeding can signal endometrial changes linked to tamoxifen." },
      { text: "\"I will report mild nausea after doses.\"", why: "Mild nausea is common and not an urgent warning sign." },
      { text: "\"I will report thinning of my hair.\"", why: "Hair thinning can occur with tamoxifen but is not a danger sign." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s18-38", {
      canada: "Canadian labs report blood counts in SI units only. The neutrophil count reads 2.6 x 10^9/L against 0.4 x 10^9/L last cycle, and platelets read 180 x 10^9/L. The Medical Council of Canada neutrophil range is 2.0 to 7.5 x 10^9/L.",
      topic: "Expected outcome of a colony-stimulating factor",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client had febrile neutropenia after the first chemotherapy cycle, with an absolute neutrophil count of 400/mm3 on day 8. In cycle 2, filgrastim 300 mcg subcutaneously daily starts 24 hours after chemotherapy. Which day 8 finding best shows the drug is working?",
      rationale:
        "Filgrastim stimulates the marrow to make neutrophils. After febrile neutropenia in cycle 1, it is given as secondary prophylaxis in cycle 2. Its intended outcome is a higher neutrophil count at the low point. A count of 2600/mm3 on day 8 is above 1500/mm3, where the last cycle fell to 400/mm3. A normal temperature does not measure neutrophil recovery. Filgrastim does not target platelets or red cells.",
      refs: ["Neutropenia is an absolute neutrophil count below 1500/mm3."],
      sources: [GYAWALI, LEHNE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Temperature 36.8°C (98.2°F)", why: "A normal temperature does not measure neutrophil recovery." },
      { text: "Platelet count 180 000/mm3", why: "Filgrastim acts on neutrophils, not platelets." },
      { text: "Hemoglobin 11.8 g/dL (118 g/L)", why: "Filgrastim does not raise red cell production." },
      { text: "Neutrophil count 2600/mm3", why: "A day 8 count of 2600/mm3, against 400/mm3 last cycle, is the intended effect." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s18-39", {
      topic: "Diarrhea during immune checkpoint inhibitor therapy",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 63-year-old client with melanoma received a third dose of pembrolizumab 2 weeks ago. The client calls to report 7 more watery stools a day than usual, with cramping and blood in the stool for 2 days. What should the nurse advise?",
      rationale:
        "Checkpoint inhibitors can cause immune-related colitis. Seven more stools a day than baseline with blood and cramping is severe colitis. It needs same-day evaluation, fluids and usually steroids, and the drug is held. Loperamide alone can mask worsening colitis and delay treatment. This is not a short-lived infusion effect.",
      refs: ["Grade 3 immune-related colitis is an increase of 7 or more stools a day over baseline."],
      sources: [SCHNEIDER],
    }),
    kind: "mc",
    options: [
      { text: "Take loperamide and call back in 3 days", why: "Waiting lets severe colitis worsen and risks perforation." },
      { text: "Come to the hospital today for evaluation", why: "Severe immune colitis needs same-day assessment and treatment." },
      { text: "Drink clear fluids and keep the next dose", why: "Continuing the drug can worsen immune colitis." },
      { text: "Expect this as a brief infusion effect", why: "Bloody diarrhea weeks after a dose points to immune colitis." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s18-40", {
      topic: "Nicotine patch teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client who smokes 20 cigarettes a day starts a 21 mg nicotine patch. Which statements by the client show understanding of the teaching? Select all that apply.",
      rationale:
        "Each new patch goes on clean, hairless skin at a new site to limit irritation. Vivid dreams or sleep problems can be eased by removing the patch at bedtime. Used patches still hold nicotine, so they are folded sticky sides together and kept from children and pets. Smoking while wearing a patch adds nicotine. The dose is tapered over weeks, not after a day.",
      sources: [FIORE, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "\"I will put each new patch on clean, hairless skin.\"", why: "Clean, hairless skin gives steady absorption." },
      { text: "\"I will use the same skin spot every day.\"", why: "Sites are rotated to prevent skin irritation." },
      { text: "\"I can smoke when a craving is strong.\"", why: "Smoking with a patch adds nicotine and undercuts quitting." },
      { text: "\"I will remove it at bedtime if I have vivid dreams.\"", why: "Removing the patch overnight can ease sleep disturbance." },
      { text: "\"I will fold used patches sticky sides together.\"", why: "Used patches hold nicotine that can poison a child or pet." },
      { text: "\"I will switch to a 7 mg patch after 1 day.\"", why: "The dose is stepped down over weeks, not after a single day." },
    ],
    correct: [0, 3, 4],
  },
];
