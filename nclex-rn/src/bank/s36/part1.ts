import type { Item } from "@/engine/types";
import { AABB, ANTICOAG, ASCITES, DOPAMINE, HINKLE, INS, LAST, RADIAL, SALICYLATE, TEE, UDMI, VESICANT, VINCRISTINE, CBS_ALBUMIN, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s36-01", {
      need: "PPT",
      topic: "Sorting tissue leaks by vesicant risk",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      version: 2,
      stem: "During IV rounds on a medical unit, the nurse finds six peripheral sites where infusate has leaked into the surrounding tissue. Which leaks should the nurse document and manage as extravasation? Select all that apply.",
      rationale:
        "Extravasation is the leak of a vesicant into tissue. Infiltration is the leak of a nonvesicant solution. Calcium chloride, vincristine and dopamine can each cause blistering, sloughing or necrosis when they escape the vein. Each has its own label warning about tissue injury. Sodium chloride 0.9%, lactated Ringer's and cefazolin are not vesicants, so their leaks are infiltrations.",
      sources: [VESICANT, INS, VINCRISTINE, DOPAMINE],
    }),
    kind: "sata",
    options: [
      { text: "Lactated Ringer's at 100 mL/hour", why: "An isotonic crystalloid is not a vesicant. Its leak is an infiltration." },
      { text: "Calcium chloride 10% IV", why: "Calcium chloride in tissue can cause necrosis and sloughing, so it is a vesicant." },
      { text: "Cefazolin 1 g in 100 mL", why: "Cefazolin is not classed as a vesicant. Its leak is an infiltration." },
      { text: "Vincristine in a 50 mL minibag", why: "Vincristine is a vesicant. Its leak causes marked tissue irritation and injury." },
      { text: "Dopamine at 5 mcg/kg/minute", why: "Dopamine causes local ischemia and necrosis when it leaks, so it is a vesicant." },
      { text: "0.9% sodium chloride at 75 mL/hour", why: "Normal saline is not a vesicant. Its leak is an infiltration." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s36-02", {
      canada: "Canadian labs report bicarbonate and the anion gap only in mmol/L, with the same numbers as mEq/L.",
      need: "RRP",
      topic: "Blood gas after an aspirin overdose",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 46-year-old client swallowed a large number of aspirin tablets 6 hours ago. The client reports ringing in the ears and nausea. Respirations are 30/minute. Arterial blood gas results are pH 7.42, PaCO2 24 mmHg and HCO3 15 mEq/L (15 mmol/L). The anion gap is 22 mEq/L (22 mmol/L). How should the nurse interpret the blood gas?",
      rationale:
        "Salicylate stimulates the respiratory center directly, which drives the PaCO2 down to 24 mmHg. It also adds organic acid, which lowers the HCO3 to 15 mEq/L and raises the anion gap to 22 mEq/L. Two primary processes pull the pH in opposite directions and leave it at 7.42. A normal pH does not mean a normal gas when both PaCO2 and HCO3 are abnormal. Tinnitus and nausea fit salicylate toxicity.",
      refs: ["Reference ranges: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [SALICYLATE],
    }),
    kind: "mc",
    options: [
      { text: "Fully compensated metabolic acidosis", why: "Compensation for a metabolic acidosis does not usually bring the pH back to 7.42. Salicylate drives the breathing as a second primary process." },
      { text: "Primary respiratory alkalosis alone", why: "An HCO3 of 15 mEq/L with an anion gap of 22 mEq/L shows an added acid load, not compensation alone." },
      { text: "Respiratory alkalosis with metabolic acidosis", why: "Direct respiratory stimulation lowers the PaCO2 while salicylate acid lowers the HCO3, a mixed disorder typical of this overdose." },
      { text: "Metabolic alkalosis with respiratory acidosis", why: "Both disorders would raise the values. Here the PaCO2 and the HCO3 are both low." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-03", {
      need: "PPT",
      topic: "Vinca alkaloid leak at a peripheral site",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      version: 2,
      stem: "A client with lymphoma receives vincristine diluted in a minibag through a peripheral catheter in the right forearm. Midway through the infusion the client reports burning at the site, and the nurse sees swelling above the catheter tip. The nurse stops the infusion and aspirates from the catheter. Which measure should the nurse prepare to apply next?",
      rationale:
        "Vincristine is a vinca alkaloid and a vesicant. Its label advises local hyaluronidase and moderate heat at the site of leakage. Both help disperse the drug and are thought to limit discomfort and cellulitis. Any remaining dose is given into another vein. Cold and dexrazoxane are used for anthracycline leaks such as doxorubicin. Phentolamine is the antidote for vasopressor leaks.",
      sources: [VINCRISTINE, INS],
    }),
    kind: "mc",
    options: [
      { text: "Moderate heat and local hyaluronidase", why: "Moderate heat and hyaluronidase help disperse a vinca alkaloid away from the site." },
      { text: "An ice pack and an IV dexrazoxane infusion", why: "Cold and dexrazoxane are used for anthracycline leaks, not vinca alkaloid leaks." },
      { text: "Phentolamine injected around the site", why: "Phentolamine reverses vasoconstriction from vasopressor leaks. Vincristine does not act by vasoconstriction." },
      { text: "Arm elevation while the dose continues", why: "The rest of the dose must not go into the injured vein. It is given into another vein." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s36-04", {
      need: "RRP",
      topic: "Acting on a low heparin anti-Xa level",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a pulmonary embolism receives a continuous IV heparin infusion. The unit protocol targets an anti-Xa level of 0.3 to 0.7 units/mL. An anti-Xa level drawn 6 hours after the infusion started is 0.18 units/mL. The client has no bleeding or bruising. Which action should the nurse take?",
      rationale:
        "The anti-Xa assay measures heparin activity directly. A level of 0.18 units/mL is below the target of 0.3 to 0.7 units/mL, so the clot is not yet protected from growing. The nurse adjusts the infusion as the protocol directs, which often includes a bolus and a higher rate. A repeat level is drawn 6 hours after the change. Stopping the infusion is the response to a high level.",
      sources: [ANTICOAG],
    }),
    kind: "mc",
    options: [
      { text: "Keep the rate and recheck in the morning", why: "A level of 0.18 units/mL is below range. Waiting leaves the clot free to extend." },
      { text: "Stop the infusion for 1 hour", why: "A pause is the protocol response to a level above 0.7 units/mL, not below 0.3." },
      { text: "Request an aPTT before any change", why: "The protocol is based on anti-Xa, which measures heparin activity directly. An aPTT only delays the adjustment." },
      { text: "Raise the rate as the protocol directs", why: "A level below 0.3 units/mL calls for the protocol increase and a repeat level after the change." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s36-05", {
      canada: "In Canada, albumin is available through Canadian Blood Services. Its Clinical Guide to Transfusion gives the same 25% albumin dose of 6 to 8 g per litre removed after paracentesis of more than 5 L.",
      need: "PPT",
      topic: "Albumin volume after ascites drainage",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with cirrhosis has a large-volume paracentesis, and 6 L of ascitic fluid is removed. The prescription is albumin 8 g IV for each liter removed. The pharmacy supplies albumin 25%, which contains 25 g in 100 mL. How many mL of albumin 25% should the nurse infuse?",
      rationale:
        "The dose is 8 g for each of the 6 L removed, which is 48 g. Albumin 25% holds 25 g in each 100 mL, so 48 g needs 192 mL. Albumin after a large-volume paracentesis helps prevent circulatory dysfunction and kidney injury as fluid shifts back into the abdomen. Mixing up grams and millilitres is the common error.",
      calc: { expr: "6 * 8 / 25 * 100", answer: 192, unit: "mL", round: 0, steps: ["6 * 8 = 48", "48 / 25 * 100 = 192"] },
      sources: [ASCITES, CBS_ALBUMIN],
    }),
    kind: "mc",
    options: [
      { text: "48 mL", why: "48 is the dose in grams. Written as millilitres of a 25% solution, it gives only a quarter of the dose." },
      { text: "96 mL", why: "This volume gives half of the 48 g dose." },
      { text: "192 mL", why: "48 g divided by 25 g per 100 mL is 192 mL." },
      { text: "480 mL", why: "This volume of a 25% solution gives far more than the 48 g dose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-06", {
      need: "RRP",
      topic: "Flat troponin pattern in kidney failure",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 67-year-old client who has hemodialysis 3 times a week comes to the emergency department with 2 days of fatigue. The client has no chest pain, and the ECG is unchanged from 6 months ago. The laboratory upper reference limit for this high-sensitivity troponin T assay is 14 ng/L. Based on the trend, which interpretation is most accurate?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Time", "0900", "1000", "1200"],
            rows: [["High-sensitivity troponin T (ng/L)", "52", "54", "53"]],
          },
        },
      ],
      rationale:
        "All three values exceed the upper limit of 14 ng/L, so myocardial injury is present. Injury is acute only when the values rise or fall over time. Here they stay between 52 and 54 ng/L from 0900 to 1200. A stable raised troponin is common in chronic kidney disease. With no ischemic symptoms and no new ECG change, the pattern fits chronic myocardial injury rather than infarction.",
      sources: [UDMI],
    }),
    kind: "mc",
    options: [
      { text: "Acute myocardial infarction in progress", why: "Infarction needs a rise or fall in troponin with ischemic features. The values are flat and there is no chest pain." },
      { text: "Chronic myocardial injury", why: "Values above 14 ng/L that stay stable fit chronic injury, which is common in kidney failure." },
      { text: "Troponin within normal limits", why: "Values of 52 to 54 ng/L are well above the limit of 14 ng/L." },
      { text: "Resolving acute myocardial injury", why: "Resolving injury shows a falling pattern. These values do not fall." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s36-07", {
      need: "PPT",
      topic: "Toxicity from an epidural local anesthetic",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 58-year-old client is 6 hours after a hip replacement and has a lumbar epidural infusion of bupivacaine 0.1% with fentanyl. The client reports a metallic taste and numbness around the mouth and becomes agitated. Two minutes later the client has a generalized seizure. Heart rate is 48/minute with a widening QRS, and BP is 84/46 mmHg. Respirations are 16/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A metallic taste, numbness around the mouth and agitation followed by a seizure are central nervous system signs of local anesthetic toxicity. A heart rate of 48/minute, a widening QRS and a BP of 84/46 mmHg show cardiac toxicity. The catheter may have moved into a vein. The nurse stops the infusion, calls for help and gives 20% lipid emulsion as prescribed. Vasopressin and local anesthetic antiarrhythmics such as lidocaine are avoided. Rhythm and BP are watched continuously.",
      sources: [LAST],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Local anesthetic systemic toxicity", why: "Perioral numbness, a metallic taste, a seizure and a slow wide-complex rhythm fit bupivacaine toxicity." },
      { text: "Opioid overdose from the fentanyl", why: "Opioid excess slows breathing and sedates. Respirations are 16/minute and the client had a seizure." },
      { text: "High neuraxial block", why: "A high block causes low BP and slow heart rate but not a metallic taste or a seizure." },
      { text: "Vasovagal reaction to pain", why: "A vasovagal reaction does not cause a seizure or a widening QRS." },
    ],
    actions: [
      { text: "Stop the epidural infusion", why: "Stopping the infusion ends the supply of the local anesthetic." },
      { text: "Give naloxone 0.4 mg IV", why: "Naloxone reverses opioids. It does not treat local anesthetic toxicity." },
      { text: "Give 20% lipid emulsion as prescribed", why: "Lipid emulsion binds the local anesthetic and is the specific treatment." },
      { text: "Give IV vasopressin for the low BP", why: "Vasopressin is avoided in local anesthetic toxicity." },
      { text: "Give IV lidocaine for the rhythm", why: "Lidocaine is another local anesthetic and would add to the toxicity." },
    ],
    parameters: [
      { text: "Sensory block level", why: "The dermatome level does not track systemic toxicity." },
      { text: "Continuous cardiac rhythm", why: "Bradycardia, a widening QRS and arrest are the lethal effects to watch for." },
      { text: "Pain intensity score", why: "Pain does not guide treatment of the toxic reaction." },
      { text: "Blood pressure trend", why: "Cardiovascular collapse shows first as a falling BP." },
      { text: "Hourly urine output", why: "Urine output is a late, indirect marker and does not guide the emergency." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s36-08", {
      need: "RRP",
      topic: "Screening before a transesophageal echo",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is scheduled for a transesophageal echocardiogram at 1400 under moderate sedation to look for a left atrial clot before cardioversion. Which findings from the preprocedure interview should the nurse report to the cardiology team before the test? Select all that apply.",
      rationale:
        "The TEE probe passes through the mouth and esophagus. Trouble swallowing solids can signal a stricture or mass. Banded varices can bleed when the probe passes. Past neck radiation can scar and narrow the esophagus. Each raises the risk of perforation or bleeding, so the team needs to know before the test. Atrial fibrillation is the reason for the test. Anticoagulation is expected before cardioversion. A light breakfast at 0600 meets fasting rules for a 1400 test.",
      sources: [TEE],
    }),
    kind: "sata",
    options: [
      { text: "Atrial fibrillation diagnosed 3 weeks ago", why: "Atrial fibrillation is the reason the test is being done." },
      { text: "Trouble swallowing solids for 2 months", why: "Dysphagia can signal a stricture or mass that the probe could tear." },
      { text: "Takes apixaban 5 mg by mouth twice daily", why: "Anticoagulation is expected before cardioversion and is not a reason to delay the test." },
      { text: "Esophageal varices banded last year", why: "Varices can bleed when the probe passes through the esophagus." },
      { text: "Radiation to the neck for throat cancer", why: "Radiation can scar and narrow the esophagus and raise the risk of injury." },
      { text: "Ate a light breakfast of toast at 0600", why: "The gap from 0600 to 1400 meets fasting rules for a light meal before sedation." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s36-09", {
      need: "PPT",
      topic: "Septic reaction to a platelet unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with leukemia receives a unit of apheresis platelets. Twenty minutes into the transfusion the client has shaking chills. Temperature is 39.6°C (103.3°F), up from 37.0°C (98.6°F). Heart rate is 128/minute and BP is 82/44 mmHg, down from 118/70 mmHg. SpO2 is 96% on room air, unchanged, and the lungs are clear. Which complication is most likely?",
      rationale:
        "Platelets are stored at room temperature, which lets bacteria multiply if a unit is contaminated. A rise in temperature to 39.6°C with rigors, a heart rate of 128/minute and a fall in BP to 82/44 mmHg fit a septic transfusion reaction. The nurse stops the transfusion, keeps the vein open with normal saline and notifies the provider and blood bank. The bag is returned for culture.",
      sources: [AABB],
    }),
    kind: "mc",
    options: [
      { text: "Febrile nonhemolytic reaction", why: "A febrile reaction brings fever and chills but not this fall in BP with a heart rate of 128/minute." },
      { text: "Transfusion-related acute lung injury", why: "Lung injury causes hypoxemia and pulmonary edema. The SpO2 is unchanged and the lungs are clear." },
      { text: "Bacterial contamination of the unit", why: "High fever, rigors and hypotension during a room temperature product fit sepsis from the unit." },
      { text: "Circulatory overload from the transfusion", why: "Overload raises the BP and causes crackles. The BP fell and the lungs are clear." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-10", {
      need: "RRP",
      topic: "Forearm hematoma after radial access",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews a note on a client 3 hours after coronary angiography through the right radial artery. A compression band is on the right wrist. Click to highlight the findings that need follow-up.",
      rationale:
        "A firm, swollen forearm above the band points to a hematoma tracking up the arm under the skin. Rising pain and tingling in the thumb suggest pressure building on the nerves in the forearm. An expanding forearm hematoma can progress to compartment syndrome. The nurse marks its edges, applies pressure as protocol directs and notifies the provider. Pink fingers, a Doppler pulse and stable vital signs are reassuring.",
      sources: [RADIAL, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Band in place with no oozing at the puncture]]. [[Right forearm swollen and firm 4 cm above the band]]. [[Reports right forearm pain of 7 of 10, rising over the last hour]]. [[Right fingers pink with brisk capillary refill]]. [[Right radial pulse present by Doppler]]. [[Reports tingling in the right thumb]]. [[BP 128/76 mmHg, heart rate 78/minute]].",
    spans: [
      { text: "Band in place with no oozing at the puncture", why: "A dry puncture under the band is expected. It does not rule out bleeding higher in the arm." },
      { text: "Right forearm swollen and firm 4 cm above the band", why: "A firm swelling above the band suggests a hematoma tracking up the forearm." },
      { text: "Reports right forearm pain of 7 of 10, rising over the last hour", why: "Rising forearm pain can signal pressure building in the forearm compartment." },
      { text: "Right fingers pink with brisk capillary refill", why: "Good color and refill show that blood still reaches the hand." },
      { text: "Right radial pulse present by Doppler", why: "A Doppler pulse shows the artery is still open." },
      { text: "Reports tingling in the right thumb", why: "New tingling suggests the swelling is pressing on a nerve." },
      { text: "BP 128/76 mmHg, heart rate 78/minute", why: "Stable vital signs do not point to large blood loss." },
    ],
    correct: [1, 2, 5],
  },
];
