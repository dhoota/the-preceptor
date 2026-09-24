// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const varicealHemorrhageRural: OralCase = {
  id: "variceal-hemorrhage-rural",
  title: "A basin full of blood at night",
  blueprint: "resus",
  alsoCovers: ["procedures"],
  summary: "A 49 year old man with liver disease is vomiting large amounts of blood at a small hospital with no overnight endoscopy.",
  durationMinutes: 15,
  stem:
    "You are the only emergency physician at a 40 bed hospital in rural Ontario. It is 22:10. " +
    "A general surgeon is on call from home. There is no endoscopy after hours. The regional centre with endoscopy and interventional radiology is 2 hours by road. " +
    "The blood bank holds 8 units of group O red cells, 4 O negative and 4 O positive, 6 units of plasma, 1 adult dose of platelets and fibrinogen concentrate. " +
    "Kevin Lachapelle is 49 years old and weighs 78 kg. He has alcohol related cirrhosis. He has vomited bright red blood three times since 21:00. " +
    "Triage vitals: heart rate 126, blood pressure 86/52, respiratory rate 24, SpO2 95 percent on room air, temperature 36.3, glucose 6.4 mmol/L. GCS 14. CTAS 1. " +
    "The nurse says: 'He just filled another basin. I have one 20 gauge in his hand.'",
  findings: [
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale and sweaty. Mildly confused. Jaundiced sclerae. Spider nevi on the chest. Tense but non tender ascites. Asterixis present. " +
        "Melena on rectal exam. Cool hands. Capillary refill 4 seconds.",
    },
    {
      id: "history",
      label: "History",
      result:
        "Cirrhosis diagnosed three years ago. Varices banded two years ago. He stopped propranolol last year. He drank 12 beers a day until two weeks ago and has not had a drink since. " +
        "No NSAIDs. No anticoagulants. His sister says he has been more confused for two days.",
    },
    {
      id: "labs",
      label: "Initial blood work",
      result:
        "Hemoglobin 71 g/L. Platelets 58 x 10^9/L. INR 2.0. Fibrinogen 1.3 g/L. Albumin 24 g/L. Bilirubin 72 µmol/L. " +
        "Creatinine 134 µmol/L. Sodium 129 mmol/L. Potassium 4.4 mmol/L. Lactate 4.9 mmol/L. Ethanol undetectable.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.28, pCO2 33 mmHg, bicarbonate 16 mmol/L, lactate 5.1 mmol/L, hemoglobin 69 g/L.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result: "Hyperdynamic small left ventricle. IVC 0.8 cm and collapsing. Moderate ascites. No pericardial effusion.",
    },
    {
      id: "meds",
      label: "Medications",
      result: "Spironolactone 100 mg daily. Furosemide 40 mg daily. Lactulose 30 mL twice daily. Thiamine 100 mg daily. Propranolol stopped.",
    },
    {
      id: "repeat-labs",
      label: "Blood work after 4 units of red cells",
      result: "Hemoglobin 74 g/L. Platelets 41 x 10^9/L. INR 2.2. Fibrinogen 0.9 g/L. Ionized calcium 0.94 mmol/L. Lactate 5.8 mmol/L.",
    },
    {
      id: "cxr",
      label: "Chest X ray after tube placement",
      result: "Endotracheal tube 4 cm above the carina. The gastric balloon of the tamponade tube lies below the left hemidiaphragm. No pneumothorax.",
    },
    {
      id: "sister",
      label: "Collateral from his sister",
      result:
        "She says he had been sober for two weeks and was trying hard. He has two children. She wants everything done. She asks if this is her fault because she did not bring him in sooner.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "He is on the stretcher leaning over a basin half full of dark red blood. Pressure 84/50, heart rate 128. He is mumbling and restless.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What are your immediate actions? Give me drugs and doses.",
      seconds: 120,
      modelAnswer: [
        "Two large bore IVs or a rapid infusion catheter. Crossmatch.",
        "Uncrossmatched red cells now. Activate the massive hemorrhage protocol if bleeding continues.",
        "Avoid large volumes of crystalloid.",
        "Octreotide 50 mcg IV bolus, then 50 mcg/h infusion.",
        "Ceftriaxone 1 g IV every 24 hours.",
        "Call the regional centre early for endoscopy.",
      ],
      rubric: ["vb-r1", "vb-m1", "vb-m2"],
      choices: [
        {
          id: "c-bundle",
          label: "I placed two large bore lines, gave uncrossmatched red cells, started octreotide 50 mcg bolus then 50 mcg/h and ceftriaxone 1 g IV, and called the regional centre.",
          next: "q-airway",
          quality: "strong",
          feedback:
            "Good. Vasoactive drugs and antibiotics both lower mortality in variceal bleeding. They should start as soon as a variceal source is suspected, before endoscopy. Blood, not crystalloid, is the resuscitation fluid.",
        },
        {
          id: "c-crystalloid",
          label: "I gave 2 L of normal saline wide open while waiting for crossmatched blood.",
          next: "s-crystalloid",
          quality: "partial",
          feedback:
            "Large crystalloid volumes dilute clotting factors and platelets and worsen ascites. He needs blood now. Uncrossmatched group O red cells are in the fridge. Octreotide and ceftriaxone were also missing.",
        },
        {
          id: "c-ffp",
          label: "I gave 4 units of plasma first to correct the INR of 2.0 before anything else.",
          next: "s-ffp",
          quality: "unsafe",
          feedback:
            "The INR does not reflect bleeding risk in cirrhosis. Plasma adds volume and can raise portal pressure and increase bleeding. Baveno VII advises against correcting the INR with plasma in variceal bleeding.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-crystalloid",
      phase: "Twenty minutes later",
      text:
        "His pressure is 80/46. The repeat hemoglobin is 58 g/L. He vomits another 600 mL of blood. The nurse asks if you want the group O units now. You start blood, octreotide and ceftriaxone.",
      next: "q-airway",
    },
    {
      kind: "say",
      id: "s-ffp",
      phase: "Thirty minutes later",
      text:
        "The plasma took 25 minutes to thaw. He has vomited another 700 mL. His pressure is 74/40. The INR is 1.8. You start red cells, octreotide and ceftriaxone.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Airway",
      prompt: "At 22:40 he vomits again, a large volume. His GCS is now 11 and he is fighting the staff. Will you intubate? How?",
      seconds: 90,
      modelAnswer: [
        "Yes. Massive hematemesis with a falling GCS. Airway protection is needed before transfer.",
        "Resuscitate before induction. Blood running.",
        "Head up. Two large bore suction units. Consider a SALAD approach.",
        "Reduced dose ketamine, about 0.5 to 1 mg/kg. Rocuronium 1.2 mg/kg.",
        "Push dose pressor ready. Most experienced operator.",
      ],
      rubric: ["vb-r2"],
      choices: [
        {
          id: "c-intubate",
          label: "I resuscitated with blood first, sat him head up, had two suction units, used ketamine 50 mg and rocuronium 100 mg, and had push dose epinephrine ready.",
          next: "q-targets",
          quality: "strong",
          feedback:
            "Well done. Peri intubation arrest is common in hemorrhagic shock. Resuscitation first, low dose induction and a plan for a soiled airway are the key points.",
        },
        {
          id: "c-bipap",
          label: "I put him on BiPAP to support his breathing and watched him.",
          next: "s-bipap",
          quality: "unsafe",
          feedback:
            "Non invasive ventilation in a vomiting, confused patient pushes blood and stomach contents into the lungs. He needs a definitive airway, not a mask.",
        },
        {
          id: "c-propofol",
          label: "I used propofol 2 mg/kg and succinylcholine for a fast RSI.",
          next: "s-propofol",
          quality: "partial",
          feedback:
            "Full dose propofol in a patient in hemorrhagic shock is likely to cause cardiovascular collapse. Use a reduced dose of a more stable agent and resuscitate before induction.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bipap",
      phase: "Five minutes later",
      text:
        "He vomits into the mask. SpO2 falls to 82 percent. The respiratory therapist removes the mask and suctions. You proceed to intubation with blood running.",
      next: "q-targets",
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "Two minutes later",
      text:
        "After induction his pressure falls to 52/30. The tube is in. You give push dose epinephrine and two more units of blood. His pressure comes back to 78/44.",
      next: "q-targets",
    },
    {
      kind: "question",
      id: "q-targets",
      phase: "Transfusion targets",
      prompt: "He has had 4 units of red cells. The new results are back. What are your transfusion targets and how do you manage his coagulopathy?",
      seconds: 90,
      modelAnswer: [
        "Once bleeding slows, restrictive target. Transfuse at hemoglobin under 70 g/L and aim for 70 to 80 g/L.",
        "While he is actively bleeding in shock, transfuse to perfusion, not a number.",
        "Over transfusion raises portal pressure and rebleeding.",
        "Fibrinogen 0.9 g/L with active bleeding. The Ontario protocol trigger is under 1.5 g/L. Give fibrinogen concentrate 4 g or cryoprecipitate 10 units.",
        "Platelets 41. Consider the adult dose of platelets case by case while he bleeds.",
        "Calcium chloride 1 g IV for ionized calcium 0.94.",
        "No tranexamic acid. HALT IT showed no benefit.",
      ],
      rubric: ["vb-m3", "vb-m4"],
      choices: [
        {
          id: "c-restrictive",
          label: "I transfused to perfusion while he bled, planned a target of 70 to 80 g/L after, gave fibrinogen concentrate 4 g and calcium, and did not give tranexamic acid.",
          next: "q-adjuncts",
          quality: "strong",
          feedback:
            "Correct. A restrictive strategy lowers rebleeding and death in variceal bleeding once the patient is stable. Low fibrinogen and low calcium are worth correcting during massive transfusion. Tranexamic acid did not help and raised clot risk in HALT IT.",
        },
        {
          id: "c-txa",
          label: "I gave tranexamic acid 1 g IV as I would in trauma.",
          next: "s-txa",
          quality: "partial",
          feedback:
            "HALT IT enrolled over 12000 patients with GI bleeding and found no reduction in death. Venous clots were more common. It is not recommended for variceal bleeding.",
        },
        {
          id: "c-liberal",
          label: "I kept transfusing to a hemoglobin of 100 g/L to give him a buffer.",
          next: "s-txa",
          quality: "unsafe",
          feedback:
            "Liberal transfusion raises portal pressure and increases rebleeding and death in variceal bleeding. Baveno VII advises a threshold of 70 g/L with a target of 70 to 80 g/L once the patient is not exsanguinating.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-txa",
      phase: "In resus",
      text:
        "The pharmacist asks whether you want to continue this approach given the evidence in variceal bleeding. You revise the plan to a restrictive target and replace fibrinogen and calcium.",
      next: "q-adjuncts",
    },
    {
      kind: "question",
      id: "q-adjuncts",
      phase: "Other treatment",
      prompt: "What else should he receive before endoscopy?",
      seconds: 60,
      modelAnswer: [
        "Erythromycin 250 mg IV 30 to 120 minutes before endoscopy to clear the stomach.",
        "A PPI until the source is confirmed is reasonable.",
        "Lactulose by tube for encephalopathy.",
        "Thiamine 200 to 500 mg IV for alcohol use.",
        "Regular glucose checks. Liver disease raises the risk of hypoglycemia.",
      ],
      rubric: ["vb-m5"],
      next: "s-rebleed",
    },
    {
      kind: "say",
      id: "s-rebleed",
      phase: "23:30",
      text:
        "He has had 6 units of red cells. 900 mL of fresh blood comes up the orogastric tube. Pressure 76/42 on norepinephrine. " +
        "The regional gastroenterologist says the earliest endoscopy is on arrival, at least 3 hours away. The surgeon asks what you plan to do now.",
      next: "q-balloon",
    },
    {
      kind: "question",
      id: "q-balloon",
      phase: "Uncontrolled bleeding",
      prompt: "He is still bleeding with no endoscopy for hours. What will you do? Describe how.",
      seconds: 120,
      modelAnswer: [
        "Balloon tamponade as a bridge. Sengstaken Blakemore or Minnesota tube.",
        "Airway must be secured first. It is.",
        "Pass the tube to 50 cm. Inject a small volume of air into the gastric balloon and confirm position with an X ray before full inflation.",
        "Inflate the gastric balloon to the manufacturer volume, usually 250 to 450 mL of air. Pull back gently against the gastroesophageal junction and apply light traction.",
        "Inflate the esophageal balloon only if bleeding continues, to about 30 to 45 mmHg.",
        "Leave in no longer than 24 hours. Bridge to endoscopy or TIPS.",
      ],
      rubric: ["vb-r3", "vb-m6"],
      choices: [
        {
          id: "c-balloon",
          label: "I placed a Minnesota tube, confirmed the gastric balloon below the diaphragm on X ray after a small test volume, inflated it fully and applied gentle traction.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Correct. Balloon tamponade controls bleeding in most patients as a bridge. Confirming the gastric balloon position before full inflation prevents esophageal rupture.",
        },
        {
          id: "c-no-xray",
          label: "I inflated the gastric balloon fully as soon as the tube was in, without checking position.",
          next: "s-no-xray",
          quality: "unsafe",
          feedback:
            "A gastric balloon inflated in the esophagus can rupture it. That complication is often fatal. Always test with a small volume and confirm position on X ray first.",
        },
        {
          id: "c-eso-first",
          label: "I inflated the esophageal balloon first to compress the varices directly.",
          next: "s-no-xray",
          quality: "partial",
          feedback:
            "The gastric balloon goes first. Most bleeding comes from varices near the junction and traction on the gastric balloon compresses them. The esophageal balloon is added only if bleeding continues.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-xray",
      phase: "Five minutes later",
      text:
        "The respiratory therapist notes high resistance as the balloon fills. You deflate it and get an X ray. The balloon was in the distal esophagus. You advance the tube, confirm position, and inflate the gastric balloon correctly. The bleeding slows.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "The bleeding has slowed. How do you arrange his transfer and what goes with him?",
      seconds: 75,
      modelAnswer: [
        "CritiCall Ontario to a centre with endoscopy and interventional radiology for TIPS.",
        "Air or critical care land transport with a crew able to manage a ventilated patient on pressors.",
        "Blood products for the trip. Octreotide running.",
        "Secure the tamponade tube. Scissors taped to the bed to cut it if it migrates and obstructs the airway.",
        "Structured handover: volumes given, labs, times of drugs, tube details.",
      ],
      rubric: ["vb-d1", "vb-c1"],
      next: "q-sister",
    },
    {
      kind: "question",
      id: "q-sister",
      phase: "Family",
      prompt: "His sister asks: 'Is he going to die? Is this my fault because I did not bring him in sooner?' What do you say?",
      seconds: 60,
      modelAnswer: [
        "Sit down. Use plain words. Acknowledge her worry.",
        "Be honest that this bleed is life threatening and the next days are critical.",
        "Tell her it is not her fault.",
        "Explain the plan and where he is going.",
        "Speak about his drinking without judgment. Recognize his recent sobriety.",
      ],
      rubric: ["vb-c2", "vb-p1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He arrives at the regional centre at 02:40. Endoscopy shows a large bleeding esophageal varix, which is banded. He has a TIPS the next day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "vb-r1",
      competency: "resuscitation",
      text: "Establishes large bore access, gives uncrossmatched red cells, activates the massive hemorrhage protocol and avoids large crystalloid volumes.",
      points: 2,
      teaching: "Blood is the resuscitation fluid in hemorrhage. Crystalloid dilutes clotting factors and worsens ascites.",
      source: "orbcon-mhp",
    },
    {
      id: "vb-m1",
      competency: "management",
      text: "Starts octreotide 50 mcg IV bolus then 50 mcg/h as soon as a variceal bleed is suspected.",
      points: 3,
      critical: true,
      teaching: "Vasoactive drugs lower portal pressure and reduce bleeding and death. Start them before endoscopy and continue for 2 to 5 days.",
      source: "baveno",
    },
    {
      id: "vb-m2",
      competency: "management",
      text: "Gives ceftriaxone 1 g IV every 24 hours.",
      points: 3,
      critical: true,
      teaching: "Antibiotic prophylaxis in cirrhosis with GI bleeding reduces infection, rebleeding and death.",
      source: "baveno",
    },
    {
      id: "vb-r2",
      competency: "resuscitation",
      text: "Intubates for massive hematemesis with falling GCS after resuscitation, using a reduced dose induction, suction ready and pressor at hand.",
      points: 2,
      teaching: "Protect the airway before transfer or balloon tamponade. Resuscitate first to avoid peri intubation collapse.",
      source: "baveno",
    },
    {
      id: "vb-m3",
      competency: "management",
      text: "Uses a restrictive transfusion threshold of 70 g/L with a target of 70 to 80 g/L once bleeding is controlled.",
      points: 2,
      teaching: "Restrictive transfusion improved survival and lowered rebleeding in upper GI bleeding, most clearly in Child Pugh A and B cirrhosis. Baveno VII sets the target at 70 to 80 g/L.",
      source: "villanueva",
    },
    {
      id: "vb-m4",
      competency: "management",
      text: "Does not correct INR with plasma, replaces fibrinogen under 1.5 g/L and calcium in massive transfusion, and does not give tranexamic acid.",
      points: 2,
      teaching: "INR does not predict bleeding in cirrhosis. HALT IT found tranexamic acid did not reduce death in GI bleeding and raised venous clot risk.",
      source: "halt-it",
    },
    {
      id: "vb-m5",
      competency: "management",
      text: "Gives erythromycin 250 mg IV before endoscopy, lactulose for encephalopathy and IV thiamine.",
      points: 1,
      teaching: "Erythromycin clears the stomach and improves the endoscopic view. Thiamine protects against Wernicke encephalopathy.",
      source: "baveno",
    },
    {
      id: "vb-r3",
      competency: "resuscitation",
      text: "Uses balloon tamponade as a bridge for uncontrolled variceal bleeding when endoscopy is not available.",
      points: 3,
      critical: true,
      teaching: "Balloon tamponade controls bleeding in most patients for up to 24 hours. It buys time for endoscopy or TIPS.",
      source: "baveno",
    },
    {
      id: "vb-m6",
      competency: "management",
      text: "Confirms gastric balloon position by X ray after a small test volume before full inflation, and inflates the esophageal balloon only if needed.",
      points: 2,
      teaching: "Inflating the gastric balloon in the esophagus can cause rupture. The gastric balloon with traction is usually enough.",
      source: "roberts",
    },
    {
      id: "vb-d1",
      competency: "disposition",
      text: "Arranges transfer through CritiCall to a centre with endoscopy and interventional radiology for TIPS, with a critical care crew and blood.",
      points: 2,
      teaching: "Patients with uncontrolled or high risk variceal bleeding may need rescue TIPS. Send them where it is available.",
      source: "baveno",
    },
    {
      id: "vb-c1",
      competency: "communication",
      text: "Gives a structured handover and secures the tamponade tube with scissors at the bedside.",
      points: 1,
      teaching: "A migrated balloon can obstruct the airway. The crew must know how to cut and remove the tube.",
      source: "roberts",
    },
    {
      id: "vb-c2",
      competency: "communication",
      text: "Speaks to the sister honestly about the risk of death and reassures her that the delay is not her fault.",
      points: 1,
      teaching: "Honesty about prognosis and relief of misplaced guilt are both part of good family communication.",
      source: "baveno",
    },
    {
      id: "vb-p1",
      competency: "professionalism",
      text: "Discusses his alcohol use without stigma and acknowledges his recent sobriety.",
      points: 1,
      teaching: "Stigma discourages patients and families from seeking care. Addiction is a treatable illness and deserves the same respect.",
      source: "baveno",
    },
  ],
  sources: [
    {
      id: "baveno",
      citation: "de Franchis R, Bosch J, Garcia Tsao G, et al. Baveno VII. Renewing consensus in portal hypertension. J Hepatol. 2022.",
    },
    {
      id: "villanueva",
      citation: "Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013.",
    },
    {
      id: "halt-it",
      citation: "HALT IT Trial Collaborators. Effects of a high dose 24 hour infusion of tranexamic acid on death and thromboembolic events in patients with acute gastrointestinal bleeding (HALT IT). Lancet. 2020.",
    },
    {
      id: "orbcon-mhp",
      citation: "Callum JL, Yeh CH, Petrosoniak A, et al. A regional massive hemorrhage protocol developed through a modified Delphi technique. CMAJ Open. 2019.",
    },
    {
      id: "roberts",
      citation: "Roberts JR, Custalow CB, Thomsen TW, editors. Roberts and Hedges' Clinical Procedures in Emergency Medicine and Acute Care. 7th edition. 2019.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
