import type { Item } from "@/engine/types";
import { AABB, ACC_BLEED, ADA_GOALS, ASRA, BEERS, FDA_CLOPIDOGREL, HINKLE, LEHNE, STROKE_2026, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s17-11", {
      topic: "Amiodarone and warfarin interaction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 74-year-old client takes warfarin 5 mg by mouth daily for atrial fibrillation. The INR has ranged from 2.4 to 2.8 for a year. Amiodarone 200 mg by mouth daily was added 3 weeks ago. Diet and other drugs are unchanged. Today the INR is 4.6 with no signs of bleeding. Which explanation best accounts for the change?",
      rationale:
        "The INR was steady until amiodarone was added. Amiodarone inhibits the liver enzymes that break down warfarin. Warfarin levels rise and the INR climbs above the target of 2.0 to 3.0. Amiodarone has a long half-life, so the effect builds over weeks. The diet is unchanged, and more leafy greens would lower the INR, not raise it.",
      refs: ["The INR target for warfarin in atrial fibrillation is 2.0 to 3.0."],
      sources: [LEHNE, ACC_BLEED],
    }),
    kind: "mc",
    options: [
      { text: "Amiodarone slows the breakdown of warfarin", why: "Amiodarone inhibits warfarin metabolism, so warfarin builds up and the INR rises." },
      { text: "Amiodarone adds its own antiplatelet effect", why: "Amiodarone has no antiplatelet effect. Platelet effects would not raise the INR." },
      { text: "Amiodarone speeds the absorption of warfarin", why: "The interaction is at the level of metabolism, not absorption." },
      { text: "Amiodarone raises the intake of vitamin K", why: "Amiodarone does not affect vitamin K intake. More vitamin K would lower the INR." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-12", {
      topic: "Drugs that raise the INR",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 68-year-old client has a stable INR on warfarin. Several new prescriptions arrive from different providers over the same week. Which drugs are most likely to raise the client's INR? Select all that apply.",
      rationale:
        "Ciprofloxacin, fluconazole and metronidazole each slow warfarin breakdown in the liver. Each can raise the INR within days, so the INR is checked more often. Rifampin and carbamazepine speed up warfarin metabolism and lower the INR. Phytonadione is vitamin K and reverses warfarin.",
      sources: [LEHNE, ACC_BLEED],
    }),
    kind: "sata",
    options: [
      { text: "Rifampin", why: "Rifampin induces liver enzymes and lowers the INR." },
      { text: "Ciprofloxacin", why: "Ciprofloxacin slows warfarin metabolism and can raise the INR." },
      { text: "Carbamazepine", why: "Carbamazepine induces warfarin metabolism and lowers the INR." },
      { text: "Fluconazole", why: "Fluconazole strongly inhibits warfarin metabolism and raises the INR." },
      { text: "Phytonadione (vitamin K)", why: "Phytonadione is vitamin K. It lowers the INR and reverses warfarin." },
      { text: "Metronidazole", why: "Metronidazole inhibits warfarin metabolism and raises the INR." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s17-13", {
      topic: "Alteplase bolus dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client who weighs 76 kg has an acute ischemic stroke and qualifies for IV alteplase. The prescription is alteplase 0.9 mg/kg. Of the total dose, 10% is given as an IV bolus over 1 minute and the rest is infused over 60 minutes. What dose should the nurse give as the bolus?",
      rationale:
        "The total dose is 0.9 mg/kg for 76 kg, which is 68.4 mg. This is below the 90 mg maximum. The bolus is 10% of the total, which is 6.84 mg, rounded to 6.8 mg. The remaining 61.6 mg runs over 60 minutes. Alteplase is a high-alert drug, so a second nurse checks the dose.",
      refs: ["The maximum total alteplase dose for acute ischemic stroke is 90 mg."],
      calc: { expr: "76 * 0.9 * 10 / 100", answer: 6.84, unit: "mg", round: 1, steps: ["76 * 0.9 = 68.4", "68.4 * 10 / 100 = 6.84"] },
      sources: [STROKE_2026, LEHNE, { body: "Heart and Stroke Foundation of Canada", work: "Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition", year: 2022, url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment" }],
      canada: "Heart and Stroke's Canadian Stroke Best Practice Recommendations use the same alteplase dose. They also allow tenecteplase 0.25 mg/kg, to a maximum of 25 mg, as a single bolus within 4.5 hours.",
    }),
    kind: "mc",
    options: [
      { text: "6.8 mg", why: "10% of the 68.4 mg total dose is 6.84 mg, rounded to 6.8 mg." },
      { text: "7.6 mg", why: "This is 10% of the weight in kg. It ignores the 0.9 mg/kg dose." },
      { text: "61.6 mg", why: "This is the part of the dose infused over 60 minutes, not the bolus." },
      { text: "68.4 mg", why: "This is the full dose. Giving it as a bolus would be a large overdose." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-14", {
      topic: "Anticoagulant timing with an epidural catheter",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is on day 1 after total knee arthroplasty and has an epidural catheter for pain. Enoxaparin 40 mg subcutaneously once daily is due at 0800. The anesthesia team plans to remove the catheter at 0900. Which action should the nurse take?",
      rationale:
        "Removing an epidural catheter while enoxaparin is active can cause a spinal epidural hematoma. That bleed can compress the cord and cause paralysis. After a prophylactic dose, removal waits at least 12 hours. The next dose waits at least 4 hours after removal. A dose at 0800 with removal at 0900 breaks both limits, so the nurse holds it and confirms timing.",
      refs: ["After a prophylactic enoxaparin dose, an epidural catheter is removed no sooner than 12 hours later. The next dose is given at least 4 hours after removal."],
      sources: [ASRA, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give the enoxaparin at 0800 as scheduled", why: "Giving it 1 hour before removal raises the risk of an epidural hematoma." },
      { text: "Hold the dose and contact the anesthesia team", why: "The dose and the catheter removal must be spaced, so timing is confirmed first." },
      { text: "Give half the dose before the removal", why: "The nurse cannot change the dose. Any active drug still raises hematoma risk." },
      { text: "Give the dose on the side away from the catheter", why: "Injection site does not change the effect on clotting near the spine." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-15", {
      topic: "Bleeding in the brain on warfarin",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 78-year-old client who takes warfarin for atrial fibrillation fell at home 2 hours ago. The client has a severe headache, has vomited twice and has new right arm weakness. BP is 178/96 mmHg. INR is 3.8. A head CT shows an acute subdural hematoma. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A fall on warfarin with an INR of 3.8, headache, vomiting and new weakness, plus a subdural hematoma on CT, is warfarin-related bleeding in the brain. Warfarin is reversed at once. IV vitamin K restores clotting factor production. A four-factor prothrombin complex concentrate replaces the factors within minutes. The INR is rechecked after reversal. Level of consciousness shows whether the bleed is growing.",
      sources: [ACC_BLEED, LEHNE, { body: "National Advisory Committee on Blood and Blood Products", work: "Recommendations for Use of Prothrombin Complex Concentrates in Canada", year: 2022, url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" }],
      canada: "The National Advisory Committee on Blood and Blood Products lists Octaplex and Beriplex P/N as the prothrombin complex concentrates available in Canada. It advises giving IV vitamin K at the same time as the PCC.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Acute ischemic stroke", why: "The CT shows a bleed, not a blocked artery." },
      { text: "Intracranial bleeding", why: "A subdural hematoma on CT after a fall on warfarin is bleeding in the skull." },
      { text: "Hypertensive urgency", why: "Urgency means high BP without organ injury. This client has a bleed in the skull." },
      { text: "Heparin-induced thrombocytopenia", why: "The client takes warfarin, not heparin, and no platelet count is given." },
    ],
    actions: [
      { text: "Give protamine sulfate IV", why: "Protamine reverses heparin. It does not reverse warfarin." },
      { text: "Give IV vitamin K", why: "IV vitamin K restores the liver's production of clotting factors." },
      { text: "Prepare IV alteplase", why: "Alteplase dissolves clots and would enlarge the bleed." },
      { text: "Give prothrombin complex concentrate", why: "This concentrate replaces the missing clotting factors quickly." },
      { text: "Give the usual warfarin dose", why: "Warfarin is stopped when a client has a major bleed." },
    ],
    parameters: [
      { text: "Activated partial thromboplastin time", why: "This test monitors heparin. The INR tracks warfarin reversal." },
      { text: "INR after reversal", why: "The INR shows whether the reversal worked." },
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term glucose and does not guide bleeding care." },
      { text: "Level of consciousness", why: "A falling level of consciousness can signal a growing bleed." },
      { text: "Serum lipase level", why: "Lipase reflects the pancreas and has no role here." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s17-16", {
      topic: "Clopidogrel and omeprazole",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 62-year-old client had a coronary stent placed 2 weeks ago. The client takes clopidogrel 75 mg and aspirin 81 mg by mouth daily. The client reports heartburn and plans to buy omeprazole over the counter. Which response by the nurse is best?",
      rationale:
        "Clopidogrel is a prodrug that the liver activates through an enzyme that omeprazole inhibits. Omeprazole can cut the antiplatelet effect, which raises the risk of stent thrombosis. Separating the doses does not prevent the interaction. The provider can choose another acid reducer. Stopping aspirin early after a stent can cause stent thrombosis.",
      sources: [FDA_CLOPIDOGREL, LEHNE, { body: "sanofi-aventis Canada Inc.", work: "Plavix (clopidogrel bisulfate) Product Monograph", year: 2022, url: "https://www.sanofi.com/assets/countries/canada/docs/products/prescription-products/plavix-en.pdf" }],
      canada: "Canadian product monographs, such as Plavix, name aspirin acetylsalicylic acid (ASA). The Canadian Plavix monograph advises avoiding omeprazole and other moderate or strong CYP2C19 inhibitors with clopidogrel.",
    }),
    kind: "mc",
    options: [
      { text: "\"Take the omeprazole 12 hours apart from the clopidogrel.\"", why: "Spacing the doses does not prevent the interaction." },
      { text: "\"Ask your provider which acid reducer to use instead.\"", why: "Omeprazole weakens clopidogrel, so the provider picks another option." },
      { text: "\"Stop the aspirin until the heartburn settles.\"", why: "Stopping aspirin soon after a stent raises the risk of stent clotting." },
      { text: "\"Take the omeprazole with your clopidogrel each morning.\"", why: "Taking them together still blocks clopidogrel activation." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-17", {
      topic: "Herbal product lowering the INR",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client's INR has been stable at 2.5 on the same warfarin dose for 8 months. Today the INR is 1.4. The client reports taking a new daily herbal product for the past 3 weeks. Which product most likely explains the change?",
      rationale:
        "The INR fell from 2.5 to 1.4, below the usual target of 2.0 to 3.0. St John's wort induces the liver enzymes that break down warfarin, so warfarin levels fall. Ginkgo, garlic and fish oil can add to bleeding risk. They would not lower the INR.",
      refs: ["The usual INR target on warfarin is 2.0 to 3.0."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "St John's wort", why: "St John's wort speeds warfarin metabolism and lowers the INR." },
      { text: "Ginkgo biloba", why: "Ginkgo can add to bleeding risk. It does not lower the INR." },
      { text: "Garlic tablets", why: "Garlic can add to bleeding risk. It does not lower the INR." },
      { text: "Fish oil capsules", why: "Fish oil can add antiplatelet effect. It does not lower the INR." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-18", {
      topic: "Blood transfusion solution and time limit",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with a hemoglobin of 7.1 g/dL (71 g/L) is to receive 1 unit of packed red blood cells. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Only 0.9% sodium chloride is compatible with red blood cells. Dextrose solutions can make red cells clump and lyse. Lactated Ringer's contains calcium, which can start clotting in the tubing. A unit is completed within 4 hours to limit bacterial growth at room temperature.",
      refs: ["A unit of blood is infused within 4 hours of the start of the transfusion."],
      sources: [AABB, HINKLE],
    }),
    kind: "cloze",
    template: "The nurse primes the blood tubing with {0}, and the maximum time allowed to infuse the unit is {1}.",
    scoring: "zero-one",
    blanks: [
      {
        options: [
          { text: "dextrose 5% in water", why: "Dextrose can cause red cells to clump and lyse." },
          { text: "0.9% sodium chloride", why: "Isotonic saline is the only solution compatible with red cells." },
          { text: "lactated Ringer's solution", why: "The calcium in this solution can trigger clotting in the tubing." },
          { text: "dextrose 5% in 0.45% saline", why: "Any dextrose solution can damage red cells." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "2 hours", why: "Many units run over 2 hours, but the limit is longer than this." },
          { text: "4 hours", why: "The unit is completed within 4 hours to limit bacterial growth." },
          { text: "6 hours", why: "Six hours at room temperature allows bacterial growth." },
          { text: "8 hours", why: "Eight hours at room temperature allows bacterial growth." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s17-19", {
      topic: "Glucagon teaching for a family",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 16-year-old client with type 1 diabetes has a new prescription for glucagon to treat severe hypoglycemia. The nurse teaches the parents. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Glucagon is for severe hypoglycemia when the teen cannot safely eat or drink. Vomiting is a common effect, so the teen is turned onto one side. Glucagon raises glucose for a short time, so food is given once the teen can swallow. Fluids by mouth can be inhaled by an unconscious person. Emergency help is called at once, not after a delay. Glucagon is given by injection or nasal spray, not into a vein.",
      sources: [ADA_GOALS, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Give it if the teen cannot swallow safely", why: "Glucagon is the treatment when food by mouth is unsafe." },
      { text: "Give juice by mouth if the teen is unconscious", why: "An unconscious person can inhale fluid given by mouth." },
      { text: "Turn the teen onto one side afterward", why: "Glucagon often causes vomiting, and side lying protects the airway." },
      { text: "Wait 1 hour before calling for help", why: "Severe hypoglycemia needs emergency help without delay." },
      { text: "Give a snack once the teen can swallow", why: "Glucagon acts briefly, so food keeps the glucose up." },
      { text: "Mix the powder and inject it into a vein", why: "Family members give glucagon by injection under the skin or into a muscle, or by nasal spray." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s17-20", {
      topic: "Sulfonylurea hypoglycemia in an older adult",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An 82-year-old client with type 2 diabetes and chronic kidney disease takes glipizide 10 mg by mouth twice daily. The client ate little at breakfast and lunch because of nausea. At 1600 the client is sweaty and confused. Capillary glucose is 48 mg/dL (2.7 mmol/L). The client is awake and can swallow. Which action should the nurse take first?",
      rationale:
        "A glucose of 48 mg/dL with sweating and confusion is hypoglycemia that needs treatment now. The client can swallow, so 15 g of fast-acting carbohydrate is given by mouth and glucose is rechecked in 15 minutes. Glucagon is kept for a client who cannot swallow. Sulfonylureas can cause prolonged hypoglycemia in older adults and in kidney disease, so glucose is watched for hours.",
      refs: ["A client who can swallow is treated with 15 to 20 g of fast-acting glucose, then glucose is rechecked in 15 minutes."],
      sources: [ADA_GOALS, BEERS, { body: "Health Canada", work: "Drug Product Database", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/" }, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
      canada: "Glipizide is not sold in Canada. Diabetes Canada treats a glucose below 4.0 mmol/L on a sulfonylurea with 15 g of oral carbohydrate and a retest in 15 minutes.",
    }),
    kind: "mc",
    options: [
      { text: "Give glucagon 1 mg intramuscularly", why: "Glucagon is for a client who cannot swallow. This client can." },
      { text: "Give 15 g of fast-acting carbohydrate", why: "Oral fast-acting carbohydrate treats hypoglycemia in a client who can swallow." },
      { text: "Hold glipizide and recheck in 1 hour", why: "Holding the next dose does not treat the current low glucose." },
      { text: "Notify the provider before treating", why: "Treatment of low glucose comes first. The provider is told after." },
    ],
    correct: 1,
  },
];
