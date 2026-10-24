import type { Item } from "@/engine/types";
import { AMBISOME, AMPHO_B, CDC_FLU_AV, ETHAMBUTOL, HINKLE, HUMIRA, ISONIAZID, TAMIFLU, VALTREX, VANCOMYCIN, YESCARTA, ZIAGEN, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s35-31", {
      topic: "Matching drugs to their screening tests",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse at an outpatient clinic reviews three clients who will start new medications next week. Match each medication with the screening test the nurse should confirm before the first dose. Each test may be used once or not at all.",
      rationale:
        "Abacavir can cause a severe hypersensitivity reaction, and carriers of the HLA-B*5701 allele are at higher risk, so the label calls for screening first. Adalimumab can reactivate latent tuberculosis, so an interferon gamma release assay or skin test comes first. Ethambutol can damage the optic nerve, so visual acuity and color vision are tested at baseline. Lithium levels, audiometry and TSH do not screen for these risks.",
      sources: [ZIAGEN, HUMIRA, ETHAMBUTOL],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Abacavir", "Adalimumab", "Ethambutol"],
    tokens: [
      { text: "Serum lithium trough level", why: "A lithium level guides lithium dosing and screens for none of these drugs' risks." },
      { text: "Interferon gamma release assay", why: "TB screening comes before a TNF blocker such as adalimumab." },
      { text: "Hearing test by audiometry", why: "Audiometry screens for aminoglycoside hearing loss, not the risks of these drugs." },
      { text: "HLA-B*5701 genetic test", why: "Carriers of this allele have a higher risk of abacavir hypersensitivity." },
      { text: "Thyroid stimulating hormone level", why: "TSH screens thyroid function and is not required before these drugs." },
      { text: "Visual acuity and color vision", why: "Ethambutol can cause optic neuritis, so vision is tested first." },
    ],
    correct: [3, 1, 5],
  },
  {
    ...meta("rn-s35-32", {
      topic: "Fever and low BP after CAR T-cell infusion",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 61-year-old client with large B-cell lymphoma received axicabtagene ciloleucel 3 days ago. Temperature is 39.4°C (102.9°F), heart rate 124/minute, BP 86/50 mmHg and SpO2 92% on room air. The client is alert, oriented and writes a normal sentence. Potassium is 4.2 mEq/L (4.2 mmol/L) and creatinine is unchanged. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "High fever, a fast heart rate, low BP and falling oxygen saturation 3 days after CAR T-cell therapy fit cytokine release syndrome. Normal orientation and handwriting argue against neurologic toxicity. Normal potassium and creatinine argue against tumor lysis. Low BP is treated with IV fluids, and tocilizumab is given for CRS with low BP or oxygen need. BP and SpO2 show whether the syndrome is responding or worsening.",
      sources: [YESCARTA],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Cytokine release syndrome", why: "Fever, low BP, a fast heart rate and low SpO2 after CAR T-cell therapy fit this syndrome." },
      { text: "Immune effector cell neurotoxicity", why: "The client is alert, oriented and writes normally, so neurologic toxicity is not shown." },
      { text: "Tumor lysis syndrome", why: "Potassium is 4.2 mEq/L and creatinine is unchanged." },
      { text: "Anaphylaxis to the cell product", why: "Anaphylaxis occurs within minutes of an infusion, not 3 days later." },
    ],
    actions: [
      { text: "Hold IV fluids to prevent overload", why: "Low BP from capillary leak needs IV fluids, not restriction." },
      { text: "Start the prescribed IV fluid bolus", why: "Fluids support BP during cytokine release syndrome." },
      { text: "Give an oral antihistamine and recheck in 4 hours", why: "An antihistamine does not treat cytokine release, and a 4-hour wait is unsafe." },
      { text: "Prepare the prescribed tocilizumab", why: "Tocilizumab blocks interleukin 6 and treats CRS with low BP or oxygen need." },
      { text: "Place the client in airborne isolation", why: "The syndrome is not contagious, and isolation does not treat it." },
    ],
    parameters: [
      { text: "Blood pressure", why: "BP shows whether fluids and tocilizumab are restoring perfusion." },
      { text: "Hemoglobin A1C", why: "A1C does not guide acute care." },
      { text: "Serum lipase", why: "Lipase does not track cytokine release syndrome." },
      { text: "Oxygen saturation", why: "Falling SpO2 shows a worsening grade and a need for oxygen." },
      { text: "Bone density", why: "Bone density does not guide acute care." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s35-33", {
      topic: "Tingling feet during latent TB treatment",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 54-year-old client with type 2 diabetes drinks 4 beers a day. The client has taken isoniazid 300 mg by mouth daily for 6 weeks for latent tuberculosis, with no other new drugs. The client reports burning and tingling in both feet and both hands that began 2 weeks ago. The skin and sclerae are not yellow. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Peripheral neuropathy is the most common toxic effect of isoniazid and often starts as tingling in the feet and hands. Diabetes and heavy alcohol use both raise the risk. Isoniazid competes with pyridoxine, so the label recommends adding pyridoxine for clients predisposed to neuropathy. No jaundice is present, which argues against hepatotoxicity. Thiamine prevents Wernicke encephalopathy but does not offset isoniazid's effect on pyridoxine.",
      sources: [ISONIAZID],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client's symptoms most likely reflect {0}, and the nurse should anticipate a prescription for {1}.",
    blanks: [
      {
        options: [
          { text: "isoniazid hepatotoxicity", why: "Liver injury causes jaundice, dark urine or nausea. The skin and sclerae are not yellow." },
          { text: "isoniazid peripheral neuropathy", why: "Tingling in both hands and feet on isoniazid, with diabetes and alcohol use, fits this." },
          { text: "carpal tunnel syndrome", why: "Carpal tunnel affects the hand in a median nerve pattern, not both feet." },
          { text: "peripheral artery disease", why: "Arterial disease causes leg pain with walking, not tingling in the hands." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "thiamine", why: "Thiamine protects against Wernicke encephalopathy, not isoniazid neuropathy." },
          { text: "folic acid", why: "Folic acid does not prevent isoniazid neuropathy." },
          { text: "pyridoxine", why: "Pyridoxine replaces the vitamin B6 that isoniazid depletes." },
          { text: "vitamin K", why: "Vitamin K treats clotting factor deficits, not neuropathy." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s35-34", {
      topic: "Shortest safe vancomycin infusion time",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The prescription is vancomycin 1750 mg IV every 12 hours for a client with osteomyelitis. The bag holds 1750 mg in 500 mL. The label states that each dose is given at no more than 10 mg/minute or over at least 60 minutes, whichever is longer. What is the shortest time over which the nurse may infuse this dose?",
      rationale:
        "At no more than 10 mg each minute, 1750 mg takes at least 175 minutes. This is longer than the 60-minute floor, so 175 minutes is the shortest safe time. Faster infusion raises the risk of a vancomycin infusion reaction with flushing, itching and low BP. A 2-hour infusion would run faster than 10 mg/minute.",
      calc: { expr: "1750 / 10", answer: 175, unit: "minutes", round: 0, steps: ["1750 / 10 = 175"] },
      sources: [VANCOMYCIN],
    }),
    kind: "mc",
    options: [
      { text: "60 minutes", why: "The 60-minute floor applies only when it is longer than the time at 10 mg/minute." },
      { text: "120 minutes", why: "Over 120 minutes the rate is above the 10 mg/minute limit." },
      { text: "175 minutes", why: "1750 mg divided by 10 mg/minute is 175 minutes, longer than the 60-minute floor." },
      { text: "350 minutes", why: "This doubles the shortest safe time and delays the dose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-35", {
      topic: "Hearing change during vancomycin therapy",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 72-year-old client is on day 6 of IV vancomycin and gentamicin for endocarditis. The nurse collects the morning findings. Which finding should the nurse report to the primary health care provider first?",
      rationale:
        "Vancomycin can damage hearing, and the risk rises with another ototoxic drug such as gentamicin. New ringing in the ears with muffled hearing is an early sign and can become permanent, so it is reported first. A falling white cell count and a temperature of 37.2°C show the infection is responding. Mild nausea after a meal is a minor complaint.",
      sources: [VANCOMYCIN, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "White cell count down to 9800/mm3 from 14 200/mm3", why: "A falling white cell count shows the infection is responding." },
      { text: "Temperature 37.2°C (99.0°F)", why: "A temperature of 37.2°C is not a fever and shows improvement." },
      { text: "Mild nausea after breakfast", why: "Mild nausea is a minor complaint that can wait for routine review." },
      { text: "New ringing in both ears with muffled hearing", why: "These are signs of ototoxicity, which can become permanent if the drugs continue." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-36", {
      topic: "Electrolyte trend on conventional amphotericin B",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 49-year-old client with invasive aspergillosis receives conventional amphotericin B IV daily. The nurse reviews the laboratory flow sheet on day 7. Based on the trend, which conclusion is supported?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Result", "Day 1", "Day 4", "Day 7"],
            rows: [
              ["Creatinine, mg/dL (micromol/L)", "0.9 (80)", "1.4 (124)", "2.0 (177)"],
              ["Potassium, mEq/L (mmol/L)", "4.1 (4.1)", "3.3 (3.3)", "2.8 (2.8)"],
              ["Magnesium, mg/dL (mmol/L)", "2.0 (0.82)", "1.6 (0.66)", "1.3 (0.53)"],
              ["Urine output (mL/24 hours)", "1900", "1850", "1800"],
            ],
          },
        },
      ],
      rationale:
        "Over 7 days the creatinine rises from 0.9 mg/dL (80 micromol/L) to 2.0 mg/dL (177 micromol/L). Potassium falls from 4.1 to 2.8 mEq/L. Magnesium falls from 2.0 mg/dL (0.82 mmol/L) to 1.3 mg/dL (0.53 mmol/L). Conventional amphotericin B injures the kidney tubules, which lowers kidney function and wastes potassium and magnesium. Urine output stays near 1800 mL/day, so this is not a fluid overload or a fall in output. The label calls for close monitoring of these values.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L).", "Normal serum magnesium is 1.5 mg/dL (0.62 mmol/L) to 2.5 mg/dL (1.03 mmol/L)."],
      sources: [AMPHO_B, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Values within the expected range for this drug and dose", why: "A doubled creatinine and a potassium of 2.8 mEq/L are not acceptable changes." },
      { text: "Tubular kidney injury with potassium and magnesium loss", why: "Rising creatinine with falling potassium and magnesium fits amphotericin tubular damage." },
      { text: "Fluid overload diluting the electrolytes", why: "Urine output is steady and dilution would not raise the creatinine." },
      { text: "Potassium release from dying fungal cells", why: "Cell breakdown would raise potassium, but it is falling." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-37", {
      topic: "Mix-up between amphotericin B products",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 70 kg client has a prescription for amphotericin B 5 mg/kg IV daily. The pharmacy label on the bag reads amphotericin B for injection (deoxycholate) 350 mg in 5% dextrose. The prescription does not name a lipid or liposomal product. What should the nurse do?",
      rationale:
        "A dose of 5 mg/kg fits liposomal amphotericin B, but the bag holds the conventional deoxycholate form. Conventional amphotericin B must not exceed 1.5 mg/kg a day, and an overdose can cause cardiac or cardiopulmonary arrest. The products are not interchangeable mg for mg. The nurse holds the bag and verifies the product and dose with the pharmacist and prescriber. A slower rate or a split dose does not make an overdose safe.",
      refs: ["Conventional amphotericin B is not given above 1.5 mg/kg a day."],
      sources: [AMPHO_B, AMBISOME],
    }),
    kind: "mc",
    options: [
      { text: "Hold the bag and verify the product with the pharmacist", why: "The dose fits a liposomal product but the bag is conventional, which risks a fatal overdose." },
      { text: "Infuse the whole bag over 6 hours to lower the reaction risk", why: "A slow rate does not prevent the toxicity of a dose over 1.5 mg/kg." },
      { text: "Give half the bag today and half tomorrow", why: "Splitting the bag still gives more than the conventional daily limit and changes the prescription." },
      { text: "Premedicate and infuse the bag over 2 hours", why: "Premedication treats infusion reactions, not an overdose of the wrong product." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-38", {
      topic: "Preparing a conventional amphotericin B infusion",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 49-year-old client has a prescription for conventional amphotericin B 0.7 mg/kg IV daily. Acetaminophen and diphenhydramine are prescribed before each dose, and 500 mL of 0.9% sodium chloride is prescribed before the infusion. Which actions should the nurse plan? Select all that apply.",
      rationale:
        "Fever, shaking chills and low BP are common 1 to 3 hours into the first doses. Premedication with an antipyretic and an antihistamine lowers them. Saline given before the infusion may reduce kidney injury. The drug itself is mixed only in 5% dextrose, because saline makes it precipitate. It runs over 2 to 6 hours, since a fast infusion causes low BP, low potassium and arrhythmias. Potassium and magnesium are checked often.",
      refs: ["Conventional amphotericin B is mixed in 5% dextrose and infused over about 2 to 6 hours.", "Infusion reactions are common 1 to 3 hours after a conventional amphotericin B infusion starts."],
      sources: [AMPHO_B],
    }),
    kind: "sata",
    options: [
      { text: "Give the premedications before the dose", why: "An antipyretic and an antihistamine reduce fever and chills during the infusion." },
      { text: "Mix the dose in 0.9% sodium chloride", why: "Saline makes amphotericin B precipitate. The drug is mixed in 5% dextrose." },
      { text: "Infuse the saline before the amphotericin", why: "Saline loading before the dose may lower the risk of kidney injury." },
      { text: "Run the dose over 30 minutes", why: "A rapid infusion causes low BP, low potassium and arrhythmias." },
      { text: "Infuse the dose over 2 to 6 hours", why: "A slow infusion lowers the risk of serious infusion effects." },
      { text: "Stop the drug for good at the first chill", why: "Chills are common and treatable. They do not end therapy on their own." },
      { text: "Check potassium and magnesium levels often", why: "The drug wastes potassium and magnesium through the kidney tubules." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s35-39", {
      topic: "Oseltamivir after 48 hours in a hospitalized client",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 67-year-old client is admitted with influenza A and pneumonia on day 4 of symptoms. SpO2 is 90% on room air. The primary health care provider prescribes oseltamivir 75 mg by mouth twice daily. A colleague says the drug is pointless because symptoms began more than 48 hours ago. What should the nurse do?",
      rationale:
        "The 48-hour window comes from studies of outpatients with uncomplicated influenza. CDC guidance states that antiviral treatment can reduce illness and death in hospitalized clients even when started more than 48 hours after onset. This client is hospitalized with pneumonia and low oxygen saturation, so the nurse gives the dose as prescribed. Holding the drug or waiting for a culture delays treatment that can help.",
      sources: [CDC_FLU_AV, TAMIFLU],
    }),
    kind: "mc",
    options: [
      { text: "Hold the drug and ask the prescriber to cancel it", why: "Hospitalized clients benefit from treatment started after 48 hours." },
      { text: "Wait for a viral culture before giving it", why: "Treatment starts promptly in hospitalized clients and is not delayed for culture results." },
      { text: "Give one dose today and stop the course", why: "A single dose is not a course of treatment and changes the prescription." },
      { text: "Give the dose as prescribed", why: "CDC guidance supports antiviral treatment in hospitalized clients even after 48 hours." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-40", {
      topic: "Confusion on valacyclovir in an older adult",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 82-year-old client started valacyclovir 1 g by mouth 3 times daily for herpes zoster 3 days ago. The client has been drinking little because of pain. The family reports new confusion and seeing people who are not there. Creatinine is 2.0 mg/dL (177 micromol/L), up from 1.1 mg/dL (97 micromol/L) last month. The client takes no opioids or sedatives. Temperature is 36.9°C (98.4°F). Complete the sentence by dragging the correct options into the blanks.",
      rationale:
        "Valacyclovir is cleared by the kidneys. Poor fluid intake has raised the creatinine from 1.1 to 2.0 mg/dL, so drug levels climb. Older adults and clients with reduced kidney function are more likely to have confusion and hallucinations on this drug. The label calls for adequate hydration and a lower dose in kidney impairment. A one-sided rash is expected with zoster. A normal temperature points to no fever.",
      sources: [VALTREX],
    }),
    kind: "dnd",
    scoring: "triad",
    template: "The client is at highest risk for {0} as shown by {1} and {2}.",
    targets: ["Condition", "Finding 1", "Finding 2"],
    tokens: [
      { text: "postherpetic neuralgia", why: "Nerve pain after zoster does not cause confusion or hallucinations." },
      { text: "valacyclovir neurotoxicity", why: "High drug levels with reduced kidney function in an older adult cause these changes." },
      { text: "a one-sided band of rash", why: "A dermatomal rash is the expected sign of zoster." },
      { text: "new confusion and hallucinations", why: "These are the central nervous system effects of drug buildup." },
      { text: "a temperature of 36.9°C", why: "A normal temperature does not point to a drug effect or infection." },
      { text: "a creatinine of 2.0 mg/dL", why: "The rise from 1.1 mg/dL shows falling kidney clearance of the drug." },
    ],
    correct: [1, 3, 5],
  },
];
