// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const flankPainRigors: OralCase = {
  id: "flank-pain-rigors",
  title: "Flank pain and rigors on a Saturday night",
  blueprint: "id",
  alsoCovers: ["resus", "systems"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [{ topic: "infectious-diseases", n: 2 }, { topic: "infectious-diseases", n: 8 }, { topic: "shock", n: 6 }, { topic: "shock", n: 7 }, { topic: "abdominal-pain", n: 4 }],
  summary: "A 58 year old woman with diabetes arrives hypotensive with left flank pain, fever and rigors.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in eastern Ontario on a Saturday evening when the following patient arrives. " +
    "Interventional radiology works weekdays until 17:00. Urology is on call from home. The tertiary centre is 90 minutes away. " +
    "A 58 year old woman has left flank pain since yesterday and shaking chills since this afternoon.",
  card: {
    vitals: {
      temperature: "39.2°C",
      pulse: "122/minute",
      resp: "24/minute",
      bp: "84/48 mmHg",
      o2sat: "96% on room air",
      weight: "80 kg (176 lb)",
    },
    medications: "Metformin 1000 mg twice daily, empagliflozin 10 mg daily, candesartan",
    allergies: "None",
  },
  findings: [
    {
      id: "history",
      label: "History of presenting illness",
      result:
        "Sudden left flank pain radiating to the groin yesterday. Rigors and vomiting today. She has vomited four times. Burning with urination for two days. " +
        "The nurse says she looks grey. Triage at 21:00: capillary glucose 14.8 mmol/L. CTAS 2.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Type 2 diabetes. Hypertension. Two small stones passed on their own in her forties. None since. " +
        "Urine culture 14 months ago grew ESBL producing E. coli, treated as an outpatient.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Metformin 1000 mg twice daily. Empagliflozin 10 mg daily. Candesartan. No allergies. Weight 80 kg.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale, clammy and rigoring. Capillary refill 4 seconds. Marked left costovertebral angle tenderness. Abdomen soft with mild left upper quadrant tenderness. No peritonism. Chest clear.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Moderate left hydronephrosis with a dilated proximal ureter. Right kidney normal. Bladder nearly empty. IVC 1.2 cm with near complete collapse. LV hyperdynamic.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 21.4 x 10^9/L. Platelets 112 x 10^9/L. Hemoglobin 128 g/L. Creatinine 164 µmol/L with a baseline of 70 µmol/L. " +
        "Potassium 4.9 mmol/L. Bicarbonate 18 mmol/L. Lactate 4.4 mmol/L. Glucose 15.2 mmol/L. Beta hydroxybutyrate 0.4 mmol/L.",
    },
    {
      id: "ua",
      label: "Urinalysis",
      result: "Large leukocyte esterase, nitrite positive, over 50 white cells and 10 to 20 red cells per high power field with many bacteria.",
    },
    {
      id: "ct",
      label: "Non contrast CT of the abdomen and pelvis",
      result:
        "A 9 mm stone in the left proximal ureter at the level of L3. Moderate left hydronephrosis with perinephric stranding. " +
        "No gas in the kidney or collecting system. No other stones.",
    },
    {
      id: "cultures",
      label: "Blood and urine cultures",
      result: "Both blood culture sets grow gram negative bacilli at nine hours. The urine later grows ESBL producing E. coli sensitive to meropenem.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 120. No ischemic changes.",
    },
    {
      id: "husband",
      label: "Collateral from her husband",
      result:
        "He says she had a bad kidney infection last year. She hates hospitals and waited a day too long. He wants to know if this is just another bladder infection and whether she can go home once the pain is controlled.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation bay",
      text: "She is rigoring on the stretcher and holding her left side. The nurse has one IV in and is drawing blood.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What are your immediate priorities?",
      seconds: 75,
      modelAnswer: [
        "Recognize septic shock with a likely urinary source.",
        "Second large bore IV, monitor, oxygen as needed.",
        "Two sets of blood cultures and a urine culture before antibiotics.",
        "Balanced crystalloid in 500 mL boluses toward 30 mL/kg with reassessment.",
        "Norepinephrine for MAP under 65 after initial fluid, peripherally if needed.",
        "Bedside ultrasound of the kidneys early to look for obstruction.",
        "Ask about onset, radiation, urinary symptoms, past stones and prior kidney infections.",
      ],
      rubric: ["ks-r1", "ks-r2", "ks-h2"],
      next: "q-abx",
    },
    {
      kind: "question",
      id: "q-abx",
      phase: "Antibiotics",
      prompt: "Which antibiotic do you choose and at what dose?",
      seconds: 60,
      modelAnswer: [
        "Prior ESBL E. coli within the past year changes empiric therapy.",
        "Meropenem 1 g IV now. Pharmacy adjusts later doses for renal function.",
        "Give it within one hour of recognition.",
        "Ceftriaxone or piperacillin tazobactam alone is unreliable for ESBL organisms.",
        "Narrow when susceptibilities return.",
        "Ask about prior cultures, resistant organisms and recent antibiotics.",
      ],
      rubric: ["ks-m1", "ks-h1"],
      choices: [
        {
          id: "c-meropenem",
          label: "I checked her old cultures, saw the ESBL E. coli and gave meropenem 1 g IV within the hour.",
          next: "q-imaging",
          quality: "strong",
          feedback:
            "That is the answer. Prior resistant organisms predict the current one. " +
            "In septic shock a carbapenem is the safest empiric choice for ESBL until susceptibilities return.",
        },
        {
          id: "c-ceftriaxone",
          label: "I gave ceftriaxone 1 g IV as I would for any pyelonephritis.",
          next: "s-ceftriaxone",
          quality: "partial",
          feedback:
            "Ceftriaxone is standard for community pyelonephritis but not for a patient with ESBL E. coli in the past year. " +
            "The examiner wanted you to check her prior cultures and choose meropenem.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ceftriaxone",
      phase: "Pharmacy review",
      text:
        "The pharmacist flags the ESBL result from last year and recommends meropenem 1 g IV now. You agree. Her first effective dose is 45 minutes later than it could have been.",
      next: "q-imaging",
    },
    {
      kind: "question",
      id: "q-imaging",
      phase: "Finding the source",
      prompt: "She has had 2 L of fluid. Her pressure is 88/50. How do you look for the source, and why does it matter?",
      seconds: 75,
      modelAnswer: [
        "The key question is whether the kidney is obstructed.",
        "Bedside ultrasound now shows left hydronephrosis.",
        "Non contrast CT to find the stone, its size and site, and to look for gas or abscess.",
        "An obstructed infected kidney will not clear with antibiotics alone.",
        "It needs drainage, so imaging must not wait until morning.",
      ],
      rubric: ["ks-a1", "ks-a2"],
      choices: [
        {
          id: "c-pocus-ct",
          label: "I scanned both kidneys at the bedside, found left hydronephrosis and sent her for a non contrast CT with a nurse and monitor.",
          next: "q-decompress",
          quality: "strong",
          feedback:
            "Good. Ultrasound answers the obstruction question in two minutes at the bedside. " +
            "The CT defines the stone and rules out emphysematous change. The examiner wanted obstruction named as the reason drainage is needed.",
        },
        {
          id: "c-no-imaging",
          label: "I treated it as pyelonephritis and planned imaging tomorrow if she did not improve.",
          next: "s-no-imaging",
          quality: "unsafe",
          feedback:
            "Septic shock from a urinary source needs imaging tonight. An obstructed kidney is a closed abscess. " +
            "Antibiotics alone fail and she will keep deteriorating. The examiner wanted bedside ultrasound and CT now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-imaging",
      phase: "Ninety minutes later",
      text:
        "She needs norepinephrine at 0.12 mcg/kg/min. The ICU resident scans her kidneys and finds left hydronephrosis. He asks why she has not had a CT. You send her with a monitor.",
      next: "q-decompress",
    },
    {
      kind: "question",
      id: "q-decompress",
      phase: "Source control",
      prompt: "The CT shows a 9 mm obstructing stone in the left proximal ureter with hydronephrosis. What is the definitive treatment tonight?",
      seconds: 75,
      modelAnswer: [
        "This is an obstructed infected kidney. It is a urological emergency.",
        "Urgent decompression, by retrograde ureteric stent or percutaneous nephrostomy.",
        "Both work equally well. Choose based on who is available now.",
        "Do not attempt definitive stone removal while infected. Treat the stone later.",
        "Antibiotics and medical expulsive therapy alone are not enough.",
      ],
      rubric: ["ks-m2"],
      choices: [
        {
          id: "c-drain",
          label: "I called urology for emergency decompression with a ureteric stent tonight, since interventional radiology is not available.",
          next: "s-uro-call",
          quality: "strong",
          feedback:
            "Exactly right. Drainage is source control and is as urgent as the antibiotics. " +
            "Stent and nephrostomy are equivalent. The examiner wanted you to match the method to the resources you have on a Saturday night.",
        },
        {
          id: "c-tamsulosin",
          label: "I started tamsulosin and admitted her on antibiotics, hoping the stone would pass.",
          next: "s-tamsulosin",
          quality: "unsafe",
          feedback:
            "Medical expulsive therapy is for uncomplicated colic. A 9 mm stone with infection and shock needs drainage now. " +
            "The examiner wanted emergency decompression.",
        },
        {
          id: "c-ureteroscopy",
          label: "I asked urology to remove the stone with ureteroscopy tonight.",
          next: "s-ureteroscopy",
          quality: "partial",
          feedback:
            "You recognized the need for urology. Definitive stone treatment in an infected system risks worsening sepsis. " +
            "The examiner wanted drainage now with the stone treated after the infection settles.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tamsulosin",
      phase: "One hour later",
      text: "Her lactate rises to 5.6 mmol/L. The ICU fellow reviews the CT and says she needs drainage tonight. You call urology.",
      next: "s-uro-call",
    },
    {
      kind: "say",
      id: "s-ureteroscopy",
      phase: "On the phone",
      text: "The urologist says she will not do definitive stone work in an infected kidney. She agrees the kidney needs draining. You move on to timing.",
      next: "s-uro-call",
    },
    {
      kind: "say",
      id: "s-uro-call",
      phase: "The urologist on call",
      text:
        "Norepinephrine is now at 0.18 mcg/kg/min. The urologist says: 'She is on antibiotics. Admit her to medicine and I will put in a stent first thing in the morning. " +
        "The OR is closed for the night and I would have to call in a team.'",
      next: "q-pushback",
    },
    {
      kind: "question",
      id: "q-pushback",
      phase: "Consultant disagreement",
      prompt: "What do you say to the urologist?",
      seconds: 90,
      modelAnswer: [
        "Use a closed loop, structured request. State the problem plainly.",
        "Obstructed infected kidney with septic shock, rising norepinephrine, lactate 4.4 mmol/L and bacteremia.",
        "This needs decompression tonight. Antibiotics alone will not control the source.",
        "Offer help: ICU will take her, anesthesia can be called in.",
        "If the urologist still declines, escalate to the chief of surgery or arrange transfer through CritiCall.",
        "Document the conversation and times.",
      ],
      rubric: ["ks-c1", "ks-l1"],
      choices: [
        {
          id: "c-advocate",
          label: "I said she has septic shock from an obstructed kidney on rising norepinephrine and needs decompression tonight. I offered ICU and anesthesia support and said I would escalate or transfer if needed.",
          next: "q-supportive",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. You stated the danger with numbers and asked for a specific action. " +
            "You also named a backup plan. Respectful persistence is advocacy, not conflict.",
        },
        {
          id: "c-accept",
          label: "I accepted the plan for a stent in the morning and admitted her to medicine.",
          next: "s-accept",
          quality: "unsafe",
          feedback:
            "She is in septic shock with an undrained source. Waiting ten hours risks death. " +
            "The examiner wanted you to push for tonight and escalate if needed.",
        },
        {
          id: "c-angry",
          label: "I told the urologist that refusing was negligent and hung up to call the chief of staff.",
          next: "s-angry",
          quality: "partial",
          feedback:
            "Your goal is right but the approach closes the door. Accusations make agreement less likely and delay care. " +
            "The examiner wanted a clear, data driven request with a named escalation route.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept",
      phase: "Two hours later",
      text:
        "The ICU fellow calls you from the unit. Norepinephrine is at 0.3 mcg/kg/min and she has added vasopressin. He asks why she has not been drained. You call the urologist back together and she agrees to come in.",
      next: "q-supportive",
    },
    {
      kind: "say",
      id: "s-angry",
      phase: "Thirty minutes later",
      text:
        "The chief of staff calls the urologist. She comes in, but the delay and the tension mean the team starts forty minutes later than it could have. The charge nurse asks you to debrief with the urologist afterward.",
      next: "q-supportive",
    },
    {
      kind: "question",
      id: "q-supportive",
      phase: "While waiting for the OR",
      prompt: "What else do you manage while the team comes in? Think about her medications, pain and pressors.",
      seconds: 75,
      modelAnswer: [
        "Hold metformin, empagliflozin and candesartan given AKI and shock.",
        "Check ketones again while she is on an SGLT2 inhibitor, since euglycemic ketoacidosis can develop in sepsis.",
        "Avoid NSAIDs for colic while she has acute kidney injury.",
        "Opioid analgesia such as hydromorphone 0.5 mg IV titrated.",
        "Titrate norepinephrine to MAP 65 or more. Add vasopressin if norepinephrine climbs toward 0.25 to 0.5 mcg/kg/min.",
        "Arterial line and ICU consult. Glucose checks every one to two hours.",
        "Confirm her diabetes and blood pressure medications and when she last took them.",
      ],
      rubric: ["ks-m3", "ks-r3", "ks-h3"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Her husband asks: 'It is just a bladder infection. Why does she need an operation?' How do you explain it, and where does she go after the stent?",
      seconds: 75,
      modelAnswer: [
        "A stone is blocking the kidney. Infection is trapped behind it and has spread to the blood.",
        "Antibiotics cannot work well until the blockage is relieved.",
        "A small tube placed through the bladder will drain the kidney. The stone is dealt with weeks later.",
        "She goes to the ICU after the procedure.",
        "Follow up with urology for definitive stone treatment once the infection has cleared.",
      ],
      rubric: ["ks-c2", "ks-d1", "ks-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "A left ureteric stent drains thick purulent urine. She is weaned off norepinephrine in the ICU over 24 hours. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ks-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Recognizes septic shock and draws blood and urine cultures before antibiotics given within one hour.",
      points: 2,
      teaching: "Cultures guide narrowing later. They should not delay antibiotics beyond the first hour in shock.",
      source: "ssc",
    },
    {
      id: "ks-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives balanced crystalloid in boluses toward 30 mL/kg with reassessment and starts norepinephrine for MAP under 65.",
      points: 2,
      teaching: "Start norepinephrine early rather than giving unlimited fluid. It can run peripherally while central access is arranged.",
      source: "ssc",
    },
    {
      id: "ks-m1",
      competency: "management",
      criterion: "management",
      text: "Reviews prior cultures and gives meropenem 1 g IV for prior ESBL E. coli.",
      points: 2,
      teaching: "Prior resistant organisms in the past year predict the current one. Check old micro results before you choose.",
      source: "ssc",
    },
    {
      id: "ks-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Uses bedside ultrasound early to look for hydronephrosis.",
      points: 1,
      teaching: "Hydronephrosis in a septic patient changes the plan from antibiotics to source control.",
      source: "eau",
    },
    {
      id: "ks-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Obtains non contrast CT tonight to define the stone and exclude gas or abscess.",
      points: 1,
      teaching: "CT shows stone size and position and rules out emphysematous pyelonephritis, which may need different surgery.",
      source: "eau",
    },
    {
      id: "ks-m2",
      competency: "management",
      criterion: "management",
      text: "Identifies an obstructed infected kidney and arranges emergency decompression by stent or nephrostomy.",
      points: 3,
      critical: true,
      teaching: "An obstructed infected kidney is a urological emergency. Drain first and treat the stone later.",
      source: "aua",
    },
    {
      id: "ks-c1",
      competency: "communication",
      criterion: "process",
      text: "Advocates to the consultant for decompression tonight with specific clinical data and a clear request.",
      points: 3,
      critical: true,
      teaching: "State the diagnosis, the numbers and the exact action you need. Respectful persistence protects the patient.",
      source: "aua",
    },
    {
      id: "ks-l1",
      competency: "leadership",
      criterion: "process",
      text: "Names an escalation route such as the chief of surgery or transfer through CritiCall and documents the discussion.",
      points: 2,
      teaching: "Know your escalation path before you need it. Document times and content of consultant calls.",
      source: "aua",
    },
    {
      id: "ks-m3",
      competency: "management",
      criterion: "management",
      text: "Holds metformin, empagliflozin and candesartan and avoids NSAIDs in acute kidney injury.",
      points: 1,
      teaching: "Metformin in shock with AKI raises lactic acidosis risk. SGLT2 inhibitors are held in acute illness because of euglycemic ketoacidosis. NSAIDs can worsen renal injury.",
      source: "eau",
    },
    {
      id: "ks-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Titrates norepinephrine to MAP 65 or more and adds vasopressin as norepinephrine requirements rise.",
      points: 1,
      teaching: "Adding vasopressin is suggested when norepinephrine reaches about 0.25 to 0.5 mcg/kg/min.",
      source: "ssc",
    },
    {
      id: "ks-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains the blocked infected kidney and the need for drainage to her husband in plain words.",
      points: 1,
      teaching: "Families often think a urinary infection is minor. A clear picture of a blocked drain explains the urgency.",
      source: "pearle",
    },
    {
      id: "ks-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to the ICU after decompression.",
      points: 2,
      teaching: "Bacteremic urosepsis can worsen for hours after drainage. Vasopressor need means ICU.",
      source: "ssc",
    },
    {
      id: "ks-d2",
      competency: "disposition",
      criterion: "management",
      text: "States that stent and nephrostomy are equivalent and that definitive stone treatment follows once the infection clears.",
      points: 1,
      teaching: "A randomized trial found no difference between stent and nephrostomy for obstruction with infection. Use the fastest available option.",
      source: "pearle",
    },
    {
      id: "ks-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about prior urine cultures, resistant organisms and recent antibiotics or hospital stays.",
      points: 2,
      teaching: "A resistant organism in the past year is the strongest predictor of resistance now. The answer changes the empiric antibiotic in shock.",
      source: "ssc",
    },
    {
      id: "ks-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the onset and radiation of the pain, urinary symptoms and any past kidney stones.",
      points: 2,
      teaching: "Sudden flank pain radiating to the groin with fever suggests an infected obstructing stone. A stone history raises that suspicion.",
      source: "eau",
    },
    {
      id: "ks-h3",
      competency: "assessment",
      criterion: "history",
      text: "Confirms her diabetes and blood pressure medications, including metformin and an SGLT2 inhibitor, and when she last took them.",
      points: 1,
      teaching: "Metformin, SGLT2 inhibitors and angiotensin receptor blockers all need a decision in shock with acute kidney injury. You can only hold what you know she takes.",
      source: "eau",
    },
  ],
  sources: [
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine. 2021.",
    },
    {
      id: "eau",
      citation: "Skolarikos A, et al. European Association of Urology guidelines on the diagnosis and treatment of urolithiasis. European Urology. 2025.",
      url: "https://pubmed.ncbi.nlm.nih.gov/40268592/",
    },
    {
      id: "aua",
      citation: "Assimos D, et al. Surgical management of stones. American Urological Association and Endourological Society guideline. Journal of Urology. 2016.",
    },
    {
      id: "pearle",
      citation:
        "Pearle MS, et al. Optimal method of urgent decompression of the collecting system for obstruction and infection due to ureteral calculi. Journal of Urology. 1998.",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
