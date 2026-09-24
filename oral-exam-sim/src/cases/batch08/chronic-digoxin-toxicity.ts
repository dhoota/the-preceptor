// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const chronicDigoxinToxicity: OralCase = {
  id: "chronic-digoxin-toxicity",
  title: "Nausea and a slow pulse in an older man",
  blueprint: "tox",
  alsoCovers: ["cardio", "geri"],
  priorityTopic: "tox",
  keyFeatures: [
    { topic: "tox", n: 1 },
    { topic: "tox", n: 2 },
    { topic: "tox", n: 5 },
    { topic: "tox", n: 7 },
    { topic: "arrhythmia", n: 6 },
  ],
  summary: "An 82 year old man with atrial fibrillation has several days of nausea, poor intake and confusion.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in the Ottawa Valley when the following patient arrives. " +
    "There is no cardiology or transvenous pacing, and the regional cardiac centre is 90 minutes away by land. " +
    "An 82 year old man is brought in by his wife after three days of vomiting.",
  card: {
    vitals: {
      temperature: "36.6°C",
      pulse: "38/minute, regular",
      resp: "18/minute",
      bp: "92/56 mmHg",
      o2sat: "95% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "Digoxin, metoprolol, furosemide, apixaban. Clarithromycin from a walk in clinic.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "He has vomited for three days, stopped eating, and has been muddled since yesterday. His wife brought him in. At triage he was CTAS 2 with a capillary glucose of 5.8 mmol/L. The nurse says: 'He says the lights in here have yellow rings around them. His wife brought his blister pack.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A 45 bed hospital. There is a four bed ICU, an internist on call, and transcutaneous pacing. There is no cardiology or transvenous pacing on site. The regional cardiac centre is 90 minutes away by land.",
    },
    {
      id: "ecg",
      label: "ECG",
      result:
        "Coarse atrial fibrillation waves with a regular ventricular rate of 38. Narrow QRS at 104 ms. This is atrial fibrillation with complete heart block and a junctional escape. " +
        "Diffuse scooped ST depression in the lateral leads. Occasional unifocal PVCs.",
    },
    {
      id: "meds",
      label: "Medications",
      result:
        "Digoxin 0.125 mg daily for 6 years. Metoprolol 25 mg twice daily. Furosemide 40 mg daily. Apixaban 2.5 mg twice daily. " +
        "Clarithromycin 500 mg twice daily started by a walk in clinic 6 days ago for a chest infection. His last digoxin dose was yesterday at 08:00.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale and tired. Oriented to person only. Dry mucous membranes. JVP not seen. Chest has a few crackles at the right base. Abdomen soft and non tender. No focal weakness.",
    },
    {
      id: "chem",
      label: "Electrolytes and renal function",
      result:
        "Sodium 136 mmol/L. Potassium 6.1 mmol/L, not hemolyzed. Bicarbonate 21 mmol/L. Urea 18.2 mmol/L. Creatinine 164 µmol/L. Baseline creatinine 98 µmol/L four months ago. Magnesium 0.68 mmol/L. Ionized calcium 1.18 mmol/L.",
    },
    {
      id: "digoxin",
      label: "Serum digoxin level",
      result: "Digoxin 4.6 nmol/L, drawn 30 hours after his last dose. The lab reference range is 0.6 to 1.2 nmol/L. This equals about 3.6 ng/mL.",
    },
    {
      id: "trop",
      label: "Troponin and other blood work",
      result:
        "High sensitivity troponin I 22 ng/L. Hemoglobin 128 g/L. WBC 9.4 x 10^9/L. Glucose 5.8 mmol/L. TSH normal.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "Mild cardiomegaly. Small right basal opacity, improving compared with the walk in clinic film 6 days ago. No edema.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result: "Left ventricle mildly reduced. No pericardial effusion. IVC 1.2 cm with more than 50 percent collapse.",
    },
    {
      id: "pharmacy",
      label: "Pharmacy stock",
      result:
        "The pharmacy has 6 vials of digoxin immune fab (DigiFab) in stock. Each vial is 40 mg and binds about 0.5 mg of digoxin. The regional centre can send more by courier in about 3 hours.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "He kept taking all his pills even when he could not keep food down. He has been seeing yellow and green halos for two days. No chest pain. No new falls. He is a full code and has always said he wants treatment.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text: "He is pale and slow to answer. The monitor shows a regular rhythm at 38. His wife hands you a blister pack and a bottle of clarithromycin.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "What do you do first, and what is your leading diagnosis?",
      seconds: 90,
      modelAnswer: [
        "Monitor, pacing pads on, IV access, 12 lead ECG.",
        "Leading diagnosis is chronic digoxin toxicity. Regularized slow AF, visual halos and GI symptoms fit.",
        "Precipitants are clarithromycin, which raises digoxin levels, and acute kidney injury from vomiting.",
        "Send digoxin level, potassium, creatinine, magnesium, calcium and troponin.",
        "Also consider beta blocker effect, hyperkalemia alone, ischemia and sepsis. Hold the metoprolol.",
        "Call pharmacy to bring the digoxin immune fab to the bedside.",
        "Ask his wife about the vomiting, intake, doses taken while sick, new drugs, visual halos and his usual kidney function.",
      ],
      rubric: ["dg-r1", "dg-a1", "dg-a2", "dg-h1", "dg-h2", "dg-h3"],
      choices: [
        {
          id: "c-dig",
          label: "I put on pacing pads, sent a digoxin level with potassium, creatinine and magnesium, and asked pharmacy to bring the digoxin immune fab to resus.",
          next: "q-indications",
          quality: "strong",
          feedback:
            "Good. Regularized atrial fibrillation with a slow escape, yellow halos and vomiting on digoxin is classic chronic toxicity. " +
            "Getting the antidote moving early saves time, since mixing takes several minutes. Pads on is the right safety net.",
        },
        {
          id: "c-atropine-pace",
          label: "I gave atropine 1 mg IV and started transcutaneous pacing as my main treatment.",
          next: "s-pacing",
          quality: "partial",
          feedback:
            "Atropine and pacing are reasonable bridges, but they often fail in digoxin induced block. Capture can be unreliable and pacing can provoke ventricular ectopy in a digitalis toxic heart. " +
            "The examiner wanted you to recognize the toxidrome and get the antidote, with pacing as a backup.",
        },
        {
          id: "c-wait",
          label: "I sent blood work and planned to decide on treatment once the digoxin level came back.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "The level helps with dosing, but he is bradycardic and hypotensive now. Treatment can start on clinical grounds. " +
            "The examiner wanted pads on and the antidote at the bedside while the level runs.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-pacing",
      phase: "Ten minutes later",
      text:
        "After atropine his rate rises to 42 for a few minutes and then falls back. Pacing at 70 mA captures intermittently. He cries out in pain and you now see runs of ventricular bigeminy. " +
        "You stop pacing and leave the pads on. The digoxin level comes back at 4.6 nmol/L.",
      next: "q-indications",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Forty minutes later",
      text:
        "His pressure is now 84/50 and he is harder to rouse. The digoxin level is back at 4.6 nmol/L. The pharmacist asks if you still want the antidote brought up.",
      next: "q-indications",
    },
    {
      kind: "question",
      id: "q-indications",
      phase: "Deciding on the antidote",
      prompt: "His digoxin level is 4.6 nmol/L and potassium is 6.1 mmol/L. Does he need digoxin immune fab? What are your indications?",
      seconds: 60,
      modelAnswer: [
        "Yes. He has chronic toxicity with a life threatening bradydysrhythmia and hypotension.",
        "Indications include dangerous dysrhythmias, hemodynamic instability, altered mental status, and potassium over 5.0 mmol/L from digoxin.",
        "Worsening kidney function supports treatment because digoxin will clear slowly.",
        "In chronic toxicity the level is a guide. Clinical toxicity drives the decision.",
      ],
      rubric: ["dg-a3", "dg-m1"],
      next: "q-dose",
    },
    {
      kind: "question",
      id: "q-dose",
      phase: "Dosing",
      prompt: "How many vials will you give, and how?",
      seconds: 75,
      modelAnswer: [
        "Chronic formula: vials equal level in ng/mL times weight in kg divided by 100.",
        "4.6 nmol/L is about 3.6 ng/mL. 3.6 times 68 divided by 100 is about 2.4, so 3 vials.",
        "An acceptable alternative is 1 to 2 vials, reassessed at 30 to 60 minutes and repeated if needed.",
        "Give IV over about 30 minutes, or as a bolus if he is peri arrest.",
        "Avoid giving large empiric acute doses in chronic toxicity. It wastes stock and can unmask rapid AF and heart failure.",
      ],
      rubric: ["dg-m1", "dg-m2"],
      choices: [
        {
          id: "c-3vials",
          label: "I calculated about 3 vials using the chronic formula and gave them IV over 30 minutes, ready to repeat if he did not respond.",
          next: "s-vt",
          quality: "strong",
          feedback:
            "Correct. Converting 4.6 nmol/L to about 3.6 ng/mL and using weight gives about 2.4 vials, rounded up to 3. " +
            "Small titrated doses work well in chronic toxicity and keep stock available if he needs more.",
        },
        {
          id: "c-10vials",
          label: "I gave 10 vials as a bolus, the empiric dose for a life threatening ingestion.",
          next: "s-overdose-fab",
          quality: "partial",
          feedback:
            "That dose fits an acute massive ingestion or cardiac arrest. In chronic toxicity it overshoots, and he depends on some digoxin for rate control and contractility. " +
            "You also only have 6 vials. The examiner wanted a calculated dose of about 3 vials.",
        },
        {
          id: "c-calcium-first",
          label: "I treated the potassium first with calcium, insulin and dextrose and held the antidote until the potassium came down.",
          next: "s-calcium",
          quality: "partial",
          feedback:
            "The hyperkalemia comes from digoxin blocking the sodium potassium pump. Fab fixes the cause. " +
            "Insulin and dextrose are reasonable adjuncts, but they must not delay the antidote. Calcium probably does not cause harm, but it does not treat the cause and is not first line here.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-overdose-fab",
      phase: "At the bedside",
      text:
        "The pharmacist tells you there are only 6 vials in the hospital. All 6 are hung. " +
        "If he needs more later there is none until the courier arrives in 3 hours. The nurse also reminds you he relies on some digoxin effect for rate control.",
      next: "s-vt",
    },
    {
      kind: "say",
      id: "s-calcium",
      phase: "Twenty minutes later",
      text:
        "The potassium is rechecked at 5.9 mmol/L. His rate is still 36 and his pressure is 80/48. The pharmacist has mixed the fab and asks if you want it now. You say yes.",
      next: "s-vt",
    },
    {
      kind: "say",
      id: "s-vt",
      phase: "Deterioration",
      text:
        "Ten minutes into the infusion the monitor shows a wide complex tachycardia at 160 with alternating QRS axis. He has a pulse. His pressure is 78/42. He is groaning.",
      next: "q-vt",
    },
    {
      kind: "question",
      id: "q-vt",
      phase: "Dysrhythmia",
      prompt: "What is this rhythm and how do you manage it?",
      seconds: 90,
      modelAnswer: [
        "Bidirectional ventricular tachycardia, highly suggestive of digoxin toxicity.",
        "Give the rest of the fab now as a bolus. Give additional vials if needed.",
        "Magnesium sulfate 2 g IV over 5 to 10 minutes.",
        "Lidocaine 1 to 1.5 mg/kg IV is the preferred antiarrhythmic.",
        "Avoid amiodarone and procainamide.",
        "Electrical cardioversion only if pulseless or peri arrest, at the lowest effective energy.",
      ],
      rubric: ["dg-m3", "dg-a4"],
      choices: [
        {
          id: "c-bolus-lido",
          label: "I pushed the remaining fab as a bolus, gave magnesium 2 g IV and lidocaine 1 mg/kg IV, and kept the pads on for defibrillation if he lost his pulse.",
          next: "q-after",
          quality: "strong",
          feedback:
            "Right. Bidirectional VT is a hallmark of digoxin toxicity and the antidote is the definitive treatment. " +
            "Magnesium and lidocaine stabilize the myocardium without worsening AV block. Defibrillate if he becomes pulseless.",
        },
        {
          id: "c-amio",
          label: "I gave amiodarone 150 mg IV over 10 minutes.",
          next: "s-amio",
          quality: "unsafe",
          feedback:
            "Amiodarone raises digoxin levels and worsens AV block. It is not recommended in digoxin toxicity. " +
            "The examiner wanted more fab, magnesium and lidocaine.",
        },
        {
          id: "c-cardiovert",
          label: "I did synchronized cardioversion at 150 J right away.",
          next: "s-cardiovert",
          quality: "partial",
          feedback:
            "He has a pulse. Cardioversion of a digitalis toxic heart can cause refractory VF or asystole. " +
            "Reserve electricity for pulseless rhythms. The examiner wanted the fab pushed and lidocaine given first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-amio",
      phase: "Five minutes later",
      text:
        "The VT breaks. His rhythm drops to a junctional escape at 28 with a pressure of 70/40. You push the remaining fab and give magnesium. Over the next 20 minutes his rate rises to 58.",
      next: "q-after",
    },
    {
      kind: "say",
      id: "s-cardiovert",
      phase: "One minute later",
      text:
        "After the shock he goes into VF. You start CPR and defibrillate. After 2 minutes he has a pulse. The nurse pushes the remaining fab. His rhythm settles to AF at 64 with a pressure of 96/58.",
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "After the antidote",
      prompt:
        "An hour later he is in atrial fibrillation at 72 with a pressure of 108/64. A repeat digoxin level is 11.2 nmol/L and potassium is 3.4 mmol/L. The resident is alarmed. Explain these results and what you monitor.",
      seconds: 75,
      modelAnswer: [
        "Total digoxin levels rise after fab because the assay measures bound and free drug. It does not reflect toxicity.",
        "Only a free digoxin level is useful after fab. Follow the patient clinically.",
        "Potassium falls as the pump recovers. Replace potassium and magnesium.",
        "In kidney injury, fab bound digoxin clears slowly and rebound toxicity can occur over 24 to 72 hours.",
        "Watch for rapid AF and heart failure as the digoxin effect is removed.",
      ],
      rubric: ["dg-a5", "dg-m4"],
      next: "q-cause",
    },
    {
      kind: "question",
      id: "q-cause",
      phase: "Cause",
      prompt: "Why did this happen now, and how will you prevent it happening again?",
      seconds: 60,
      modelAnswer: [
        "Clarithromycin inhibits P glycoprotein and raises digoxin levels.",
        "Vomiting and poor intake caused acute kidney injury and reduced digoxin clearance.",
        "Older age, low weight and furosemide add risk.",
        "Stop digoxin. Restart the beta blocker cautiously once the block has resolved, with specialist review of any need for digoxin.",
        "Tell the family doctor and the walk in clinic. Medication review and sick day rules.",
      ],
      rubric: ["dg-a2", "dg-c2", "dg-d2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The internist asks if he can go to a medical ward bed without telemetry since he looks much better. What do you say, and who else do you call?",
      seconds: 75,
      modelAnswer: [
        "He needs a monitored bed for at least 24 hours, longer with kidney injury.",
        "Rebound toxicity, hypokalemia and rapid AF are all expected risks.",
        "Call the poison centre for advice on repeat dosing and monitoring.",
        "Arrange more fab from the regional centre since local stock is used.",
        "Discuss transfer to the regional centre if he needs pacing or more antidote than can be sourced.",
      ],
      rubric: ["dg-d1", "dg-c1", "dg-l1"],
      choices: [
        {
          id: "c-monitored",
          label: "I kept him in the ICU on telemetry for at least 24 hours, called the poison centre, and asked pharmacy to restock fab from the regional centre.",
          next: "q-wife",
          quality: "strong",
          feedback:
            "Good. With kidney injury, digoxin redistributes and rebound can appear a day or more later. " +
            "Restocking the antidote is a systems step that protects him and the next patient.",
        },
        {
          id: "c-ward",
          label: "I agreed to a ward bed with vitals every 4 hours because his rhythm had settled.",
          next: "s-ward",
          quality: "unsafe",
          feedback:
            "Rebound toxicity and hypokalemia can cause sudden dysrhythmias that 4 hourly vitals will miss. " +
            "The examiner wanted continuous monitoring for at least 24 hours and a plan for more antidote.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ward",
      phase: "Overnight",
      text:
        "At 03:00 the ward nurse finds his pulse at 34. There is no fab left in the hospital. You transfer him to the ICU, start atropine and call the regional centre to courier more antidote.",
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "Family",
      prompt: "His wife asks if she should have stopped his pills when he was vomiting. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Reassure her that she did nothing wrong.",
        "Explain the new antibiotic and dehydration caused the heart pill to build up.",
        "Explain sick day guidance. Some pills should be held and the doctor called when he cannot eat or drink.",
        "Give her a clear plan and who to call.",
      ],
      rubric: ["dg-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He stays in the ICU overnight without rebound. Digoxin is stopped. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "dg-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Places pacing pads, monitor and IV access before further workup.",
      points: 1,
      teaching: "Complete heart block with hypotension can deteriorate fast. Pads on early allow rescue if he arrests.",
      source: "aha-tox",
    },
    {
      id: "dg-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes chronic digoxin toxicity from regularized slow AF, visual halos, GI symptoms and confusion.",
      points: 3,
      critical: true,
      teaching: "Regularized AF means complete heart block with an escape rhythm. In a patient on digoxin that plus xanthopsia is toxicity until proven otherwise.",
      source: "chan",
    },
    {
      id: "dg-a2",
      competency: "assessment",
      criterion: "history",
      text: "Identifies clarithromycin and acute kidney injury as precipitants.",
      points: 2,
      teaching: "Macrolides, amiodarone, verapamil and other P glycoprotein inhibitors raise digoxin levels. Kidney injury cuts clearance.",
      source: "ccs-af",
    },
    {
      id: "dg-a3",
      competency: "assessment",
      criterion: "physical",
      text: "States indications for fab: dangerous dysrhythmia, instability, altered mental status, potassium over 5.0 mmol/L, end organ injury.",
      points: 2,
      teaching: "Treat the patient, not just the level. Chronic toxicity can be severe with levels only mildly raised.",
      source: "chan",
    },
    {
      id: "dg-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes bidirectional ventricular tachycardia as a sign of digoxin toxicity.",
      points: 1,
      teaching: "Bidirectional VT has few causes. Digoxin toxicity is the classic one.",
      source: "aha-tox",
    },
    {
      id: "dg-a5",
      competency: "assessment",
      criterion: "physical",
      text: "Knows total digoxin levels are not interpretable after fab and follows the patient clinically.",
      points: 1,
      teaching: "The assay measures fab bound digoxin. The total level rises after treatment even as toxicity resolves.",
      source: "monograph",
    },
    {
      id: "dg-m1",
      competency: "management",
      criterion: "management",
      text: "Gives digoxin immune fab promptly for life threatening chronic toxicity.",
      points: 3,
      critical: true,
      teaching: "Fab reverses bradydysrhythmias and hyperkalemia within 30 to 60 minutes. It is the definitive treatment.",
      source: "chan",
    },
    {
      id: "dg-m2",
      competency: "management",
      criterion: "management",
      text: "Calculates the chronic dose correctly: level in ng/mL times weight in kg divided by 100, about 3 vials, or gives 1 to 2 vials and repeats.",
      points: 2,
      teaching: "Convert nmol/L to ng/mL by dividing by 1.28. Titrated small doses work well in chronic toxicity and conserve stock.",
      source: "monograph",
    },
    {
      id: "dg-m3",
      competency: "management",
      criterion: "management",
      text: "Treats bidirectional VT with more fab, magnesium 2 g IV and lidocaine 1 to 1.5 mg/kg, and avoids amiodarone.",
      points: 2,
      critical: true,
      teaching: "Amiodarone and procainamide worsen conduction and amiodarone raises digoxin levels. Save electricity for a pulseless rhythm.",
      source: "aha-tox",
    },
    {
      id: "dg-m4",
      competency: "management",
      criterion: "management",
      text: "Anticipates hypokalemia after fab and replaces potassium and magnesium.",
      points: 1,
      teaching: "When the sodium potassium pump recovers, potassium moves back into cells. Check it hourly at first.",
      source: "monograph",
    },
    {
      id: "dg-c1",
      competency: "communication",
      criterion: "process",
      text: "Calls the poison centre and involves pharmacy in dosing and restocking.",
      points: 1,
      teaching: "Poison centres advise on dosing, repeat doses and rebound. Pharmacy knows the local stock.",
      source: "chan",
    },
    {
      id: "dg-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains the cause to his wife without blame and gives sick day guidance.",
      points: 1,
      teaching: "Families often feel responsible. Clear sick day rules prevent recurrence.",
      source: "ccs-af",
    },
    {
      id: "dg-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to a monitored bed for at least 24 hours because of rebound risk with kidney injury.",
      points: 2,
      teaching: "In kidney injury the fab digoxin complex clears slowly. Free digoxin can rebound over 24 to 72 hours.",
      source: "monograph",
    },
    {
      id: "dg-d2",
      competency: "disposition",
      criterion: "process",
      text: "Stops digoxin and arranges review of rate control and the interacting drug with the family doctor.",
      points: 1,
      teaching: "Digoxin is a second line rate control agent in AF. Reconsider whether he needs it at all.",
      source: "ccs-af",
    },
    {
      id: "dg-l1",
      competency: "leadership",
      criterion: "process",
      text: "Arranges resupply of antidote from the regional centre and considers transfer if more is needed.",
      points: 1,
      teaching: "Small sites stock limited antidote. Replacing it quickly protects this patient and the next one.",
      source: "chan",
    },
    {
      id: "dg-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the course of the vomiting, his oral intake, whether he kept taking digoxin, and the time of the last dose.",
      points: 2,
      teaching: "Chronic digoxin toxicity follows reduced clearance while the usual dose continues. The time of the last dose also tells you whether the level is interpretable.",
      source: "chan",
    },
    {
      id: "dg-h2",
      competency: "assessment",
      criterion: "history",
      text: "Takes a full medication history, including the new clarithromycin, and asks about visual changes such as yellow or green halos.",
      points: 2,
      teaching: "Macrolides, amiodarone, verapamil and diuretics raise digoxin levels or its toxicity. Xanthopsia and GI upset are early clues to toxicity.",
      source: "chan",
    },
    {
      id: "dg-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks why he takes digoxin, what his kidney function has been, and his wishes about treatment.",
      points: 1,
      teaching: "Digoxin is a rate control drug that needs dose review in kidney disease. Knowing his baseline and goals shapes how hard you push and whether he transfers.",
      source: "ccs-af",
    },
  ],
  sources: [
    {
      id: "chan",
      citation: "Chan BS, Buckley NA. Digoxin specific antibody fragments in the treatment of digoxin toxicity. Clin Toxicol. 2014.",
    },
    {
      id: "aha-tox",
      citation:
        "Lavonas EJ, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life threatening toxicity due to poisoning. Circulation. 2023.",
      url: "https://pubmed.ncbi.nlm.nih.gov/37721023/",
    },
    {
      id: "ccs-af",
      citation: "Andrade JG, et al. The 2020 Canadian Cardiovascular Society and Canadian Heart Rhythm Society comprehensive guidelines for the management of atrial fibrillation. Can J Cardiol. 2020.",
    },
    {
      id: "monograph",
      citation: "BTG International Inc. DigiFab (digoxin immune fab, ovine) product monograph. Date of revision November 25, 2022.",
      url: "https://digifab.health/getmedia/3f1076f4-7959-4a6b-8b66-a364f662c644/product-monograph_English_Updated-Dec-2022.pdf",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
