import type { Item } from "@/engine/types";
import { ASAM_AW, ATA_HYPO, BELL, HINKLE, HIT, LEWIS, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s24-31", {
      topic: "Confusion and unsteady gait with heavy alcohol use",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 49-year-old client with long-term heavy alcohol use is admitted with confusion, an unsteady wide-based gait and nystagmus. Fingerstick glucose is 92 mg/dL (5.1 mmol/L). Prescriptions include IV thiamine 100 mg, an IV infusion of dextrose 5% and an oral multivitamin. Which action should the nurse take first?",
      rationale:
        "Confusion, a wide-based unsteady gait and nystagmus with heavy alcohol use suggest Wernicke encephalopathy. It results from thiamine deficiency. Glucose metabolism uses thiamine, so dextrose given first can worsen the brain injury. The nurse gives IV thiamine before the dextrose infusion. Oral vitamins are poorly absorbed.",
      sources: [ASAM_AW, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Start the dextrose 5% infusion", why: "Glucose given before thiamine can use up the remaining thiamine and worsen the brain injury." },
      { text: "Give the oral multivitamin", why: "Oral vitamins are poorly absorbed with heavy alcohol use and do not give enough thiamine." },
      { text: "Give the IV thiamine", why: "Confusion, an unsteady gait and nystagmus suggest Wernicke encephalopathy. IV thiamine comes before dextrose." },
      { text: "Check the blood alcohol level", why: "The alcohol level does not change the need for thiamine now." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-32", {
      topic: "Bleeding precautions during chemotherapy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 45-year-old client with acute myeloid leukemia is on day 10 after induction chemotherapy. The morning platelet count is 16 000/mm3. The nurse updates the care plan. Which measures are appropriate? Select all that apply.",
      rationale:
        "A platelet count of 16 000/mm3 raises the risk of bleeding from minor trauma. Care avoids breaks in skin and mucosa. An electric razor, a soft toothbrush and stool softeners protect tissue. Puncture sites need longer pressure. Rectal temperatures, IM injections and firm flossing can cause bleeding.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as x 10^9/L only, so this count reads 16 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as normal.",
    }),
    kind: "sata",
    options: [
      { text: "Take temperatures by the rectal route", why: "Rectal thermometers can tear the mucosa and cause bleeding." },
      { text: "Use an electric razor for shaving", why: "An electric razor avoids the cuts a blade can cause." },
      { text: "Give IM injections for pain relief", why: "IM injections can cause bleeding into the muscle. Other routes are preferred." },
      { text: "Brush with a soft-bristled toothbrush", why: "A soft brush cleans the teeth with less gum injury." },
      { text: "Offer a stool softener as prescribed", why: "Softer stools prevent straining and rectal tearing." },
      { text: "Apply pressure to puncture sites for 5 minutes", why: "Firm pressure for at least 5 minutes helps a puncture site clot." },
      { text: "Floss firmly between teeth each day", why: "Firm flossing can injure the gums and cause bleeding." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s24-33", {
      topic: "Telling kidney infection from bladder infection",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 27-year-old client reports burning on urination for 3 days. Today the client has chills, a temperature of 39.1°C (102.4°F), nausea and right flank pain. Which additional finding best supports an upper urinary tract infection?",
      rationale:
        "Burning on urination followed by fever of 39.1°C, chills, nausea and flank pain suggests the infection has reached the kidney. Costovertebral angle tenderness supports pyelonephritis. Urgency, suprapubic pain and cloudy urine occur with bladder infection too. They do not show kidney involvement.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Costovertebral angle pain", why: "Pain on tapping the costovertebral angle points to inflammation of the kidney." },
      { text: "Suprapubic pain and pressure", why: "Suprapubic pain reflects bladder irritation, which occurs in lower tract infection too." },
      { text: "Urgency to void every hour", why: "Urgency occurs with bladder infection and does not show kidney involvement." },
      { text: "Cloudy, foul-smelling urine", why: "Cloudy urine occurs with any urinary infection and does not locate it." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s24-34", {
      topic: "Main risk with a high red cell mass",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with polycythemia vera has a hematocrit of 58%. The client reports headache, dizziness and itching after warm showers. The spleen is enlarged on exam. Temperature is 36.8°C (98.2°F). Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Polycythemia vera raises the red cell mass. A hematocrit of 58% makes the blood thick and slow. Headache and dizziness reflect this hyperviscosity. The main threat is arterial or venous thrombosis, such as stroke or deep vein thrombosis. Phlebotomy lowers the hematocrit. Itching and an enlarged spleen are common but do not show clot risk.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs usually report hematocrit as a fraction in L/L, so 58% reads 0.58 L/L. The Medical Council of Canada lists 0.38 to 0.50 L/L as the adult range.",
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is at highest risk for {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "infection", why: "Nothing in the stem suggests infection, and the temperature is 36.8°C." },
          { text: "hypovolemia", why: "Blood volume is increased in polycythemia vera, not reduced." },
          { text: "thrombosis", why: "A high red cell mass thickens the blood and slows flow, which raises the risk of clots." },
          { text: "iron overload", why: "Polycythemia vera tends to lower iron stores through red cell production and phlebotomy." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "itching after warm showers", why: "Itching after warm water is common in polycythemia vera but does not signal clot risk." },
          { text: "an enlarged spleen", why: "An enlarged spleen reflects extra blood cell production. It does not show clot risk." },
          { text: "a normal temperature", why: "A normal temperature does not point to clot risk." },
          { text: "a hematocrit of 58%", why: "A hematocrit of 58% shows thick, viscous blood that promotes clotting." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s24-35", {
      topic: "Poor drainage during peritoneal dialysis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on peritoneal dialysis has an outflow of 900 mL after a 2 000 mL dwell. The drained fluid is clear. The client has not had a bowel movement in 4 days. The abdomen is soft and nontender. What should the nurse do first?",
      rationale:
        "Only 900 mL drained after a 2 000 mL dwell, so fluid is retained. The fluid is clear and the abdomen is soft, which argues against peritonitis. Common causes are kinked tubing, a closed clamp, body position and constipation. The nurse checks the tubing and turns the client first. A laxative is then requested for the missed bowel movements.",
      sources: [HINKLE, LEWIS],
    }),
    kind: "mc",
    options: [
      { text: "Irrigate the catheter with sterile saline", why: "Forceful irrigation risks catheter damage and is done only by protocol. Simple causes are checked first." },
      { text: "Shorten the next dwell time", why: "A shorter dwell does not fix a drainage problem." },
      { text: "Send the drained fluid for culture", why: "Clear fluid and a soft, nontender abdomen do not suggest infection." },
      { text: "Check the tubing and turn the client", why: "Kinked tubing, closed clamps and body position are common causes of poor outflow. They are fixed first." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s24-36", {
      topic: "Falling platelets and a new clot on anticoagulation",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 67-year-old client is on day 7 of a heparin infusion for a pulmonary embolism. The platelet count has fallen from 248 000/mm3 on admission to 96 000/mm3. The left calf is now swollen and painful. The client has no bleeding. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The platelet count fell from 248 000 to 96 000/mm3 on day 7 of heparin, a drop of more than half. A new swollen, painful calf shows a new clot. This pattern fits heparin-induced thrombocytopenia, which causes clotting, not bleeding. All heparin stops, including flushes and low molecular weight heparin. A non-heparin anticoagulant such as argatroban starts.",
      sources: [HIT, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as x 10^9/L only, so the fall reads 248 to 96 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as normal.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Immune thrombocytopenia", why: "Immune thrombocytopenia is not tied to heparin timing and does not cause new clots." },
      { text: "Heparin-induced thrombocytopenia", why: "A platelet fall of more than half on day 7 of heparin, with a new clot, fits this immune reaction." },
      { text: "Disseminated intravascular coagulation", why: "This disorder usually brings bleeding and prolonged clotting times. This client has no bleeding." },
      { text: "Dilutional thrombocytopenia", why: "Dilution follows massive fluid or blood replacement, which the stem does not describe." },
    ],
    actions: [
      { text: "Stop all heparin, including flushes", why: "Any heparin exposure, even in flushes, keeps the reaction going." },
      { text: "Switch to enoxaparin injections", why: "Enoxaparin is a heparin and can cross-react with the antibodies." },
      { text: "Give a platelet transfusion", why: "Platelet transfusion can worsen clotting in this condition and is avoided without bleeding." },
      { text: "Start the prescribed argatroban", why: "A non-heparin anticoagulant treats the clotting risk that continues after heparin stops." },
      { text: "Give vitamin K as prescribed", why: "Vitamin K reverses warfarin and does not treat this condition." },
    ],
    parameters: [
      { text: "Platelet count", why: "The platelet count should recover after heparin is stopped." },
      { text: "Serum amylase level", why: "Amylase does not relate to this condition." },
      { text: "Signs of new clots", why: "New limb swelling, chest pain or neurologic signs can show new clots." },
      { text: "Hemoglobin A1C", why: "A1C reflects long-term glucose and does not guide care here." },
      { text: "Serum magnesium level", why: "Magnesium does not guide care for this condition." },
    ],
    correct: { condition: 1, actions: [0, 3], parameters: [0, 2] },
  },
  {
    ...meta("rn-s24-37", {
      topic: "Chest tightness after starting thyroid hormone",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 74-year-old client with coronary artery disease and newly diagnosed hypothyroidism started levothyroxine 3 days ago. The client now reports chest tightness with walking. Heart rate is 108/minute. What should the nurse do?",
      rationale:
        "Levothyroxine raises metabolism, heart rate and myocardial oxygen demand. Older adults with coronary disease start at a low dose that rises slowly. New chest tightness and a heart rate of 108/minute suggest the dose outpaces the heart. The nurse holds the dose and notifies the provider. Taking levothyroxine with food only lowers absorption.",
      sources: [ATA_HYPO],
    }),
    kind: "mc",
    options: [
      { text: "Explain that this is expected early in therapy", why: "Chest tightness and a fast pulse are not expected. They show the heart cannot meet the new demand." },
      { text: "Hold the dose and notify the provider", why: "Thyroid hormone raises heart rate and oxygen demand. Angina in an older adult with heart disease needs dose review." },
      { text: "Give the dose with food to slow absorption", why: "Food changes absorption unpredictably and does not treat angina." },
      { text: "Encourage more walking to build tolerance", why: "Exertion adds oxygen demand and can worsen ischemia." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s24-38", {
      topic: "Eye care with one-sided facial weakness",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 35-year-old client has sudden weakness of the right side of the face. The client cannot close the right eye fully. The provider diagnoses Bell palsy. Which intervention should the nurse include in the plan of care?",
      rationale:
        "Bell palsy weakens the facial nerve on one side. The client cannot close the right eye fully, so the cornea can dry and ulcerate. Eye protection uses lubricating drops by day and ointment with a shield or tape at night. Diet stays normal. Fluid restriction and voice rest do not help.",
      sources: [BELL],
    }),
    kind: "mc",
    options: [
      { text: "Restrict fluids to lower facial swelling", why: "Bell palsy is not caused by fluid excess, and fluid restriction does not help." },
      { text: "Start a clear liquid diet", why: "Most clients can eat a normal diet by chewing on the unaffected side." },
      { text: "Protect the right eye at night", why: "The eye cannot close fully, so the cornea can dry and be injured. Lubricant and a shield or tape protect it." },
      { text: "Limit talking to rest the face", why: "Resting the voice does not speed nerve recovery." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s24-39", {
      topic: "Freezing gait and coughing at meals",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 72-year-old client with Parkinson disease has a shuffling gait, freezing when turning and coughing during meals. The client takes carbidopa-levodopa four times a day. Which interventions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Parkinson disease causes shuffling, freezing and swallowing problems. Coughing during meals suggests aspiration risk. The client sits upright to eat, and thin liquids by straw are avoided. Large steps, slow wide turns and clear floors lower fall risk. Carbidopa-levodopa is given on time to keep symptoms controlled.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Offer thin liquids through a straw", why: "Straws and thin liquids speed flow and raise aspiration risk when swallowing is impaired." },
      { text: "Have the client lie flat after meals", why: "Lying flat after meals raises the risk of aspiration and reflux." },
      { text: "Teach the client to take large steps", why: "Conscious large steps help overcome shuffling and freezing." },
      { text: "Encourage quick turns to prevent freezing", why: "Quick turns trigger freezing and falls. Wide, slow turns are safer." },
      { text: "Give carbidopa-levodopa on its set schedule", why: "Doses on a steady schedule keep symptoms controlled. Late doses worsen rigidity and swallowing." },
      { text: "Remove throw rugs from the room", why: "Clear floors lower the fall risk from a shuffling gait." },
      { text: "Sit the client upright for meals", why: "Upright posture during meals lowers aspiration risk." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s24-40", {
      topic: "Fatigue and heat in multiple sclerosis",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client with relapsing multiple sclerosis about managing fatigue and symptom flares. Which two statements indicate understanding? Select two.",
      rationale:
        "Fatigue is common in multiple sclerosis. Planned rest and paced activity conserve energy. Heat slows nerve conduction in damaged myelin, so hot baths and overheating can bring out symptoms. Keeping cool helps. Disease-modifying drugs continue even when the client feels well.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will plan rest breaks between my daily tasks.\"", why: "Rest breaks conserve energy and reduce fatigue." },
      { text: "\"I will take long hot baths to relax my muscles.\"", why: "Heat can bring out or worsen symptoms for a short time." },
      { text: "\"I will stop my disease-modifying drug when I feel well.\"", why: "Disease-modifying drugs reduce relapses and are continued when the client feels well." },
      { text: "\"I will keep cool during exercise and hot weather.\"", why: "Keeping cool prevents heat-related worsening of symptoms." },
      { text: "\"I will exercise hard to push through fatigue.\"", why: "Overexertion worsens fatigue. Moderate, paced exercise is advised." },
      { text: "\"I will skip meals when I feel tired.\"", why: "Skipping meals adds to fatigue and weakness." },
    ],
    correct: [0, 3],
  },
];
