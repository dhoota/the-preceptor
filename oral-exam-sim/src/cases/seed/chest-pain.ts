// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const chestPain: OralCase = {
  id: "chest-pain-rural",
  title: "Chest pain at a rural site",
  blueprint: "cardio",
  alsoCovers: ["resus", "systems"],
  priorityTopic: "chest-pain",
  keyFeatures: [
    { topic: "chest-pain", n: 1 },
    { topic: "chest-pain", n: 3 },
    { topic: "chest-pain", n: 5 },
    { topic: "ischemic-heart-disease", n: 7 },
    { topic: "ems", n: 3 },
  ],
  summary: "A 61 year old man with sudden chest pain at a small hospital with no cath lab.",
  durationMinutes: 15,
  stem:
    "You are the only physician on shift at a 30 bed rural hospital in northern Ontario. " +
    "There is a CT scanner with an on call technologist who can be in within 30 minutes. " +
    "There is no cath lab. The nearest PCI centre is more than 3 hours away once transport is counted. " +
    "Gordon Akiwenzie is 61 years old. He had sudden severe chest pain at 06:40 while splitting wood. " +
    "He arrived by ambulance at 07:20. " +
    "Triage vitals: heart rate 58, blood pressure 168/92 in the right arm, respiratory rate 22, SpO2 95 percent on room air, temperature 36.4, capillary glucose 7.8 mmol/L. CTAS 1. " +
    "The nurse hands you a 12 lead ECG and says: 'There is ST elevation in the inferior leads. " +
    "Paramedics gave aspirin 160 mg chewed and one nitro spray. " +
    "The cardiologist at the regional centre saw the ECG and wants to know if we are giving tenecteplase. I have it drawn up with the heparin.'",
  findings: [
    {
      id: "pain-history",
      label: "Pain history",
      result:
        "He says the pain was 10 out of 10 at the very start. It felt like tearing and went straight through to between his shoulder blades. " +
        "He nearly passed out once. The pain is now 7 out of 10 and seems to be moving lower into his back. No prior similar pain.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result:
        "Hypertension for 12 years. He stopped amlodipine 3 months ago because he felt fine. Smokes 20 cigarettes a day. " +
        "No diabetes, no prior MI, no surgery. No anticoagulants. No drug use. His brother died suddenly at 58. No allergies.",
    },
    {
      id: "ecg",
      label: "ECG",
      result:
        "Sinus rhythm at 56. ST elevation of 2 mm in II, III and aVF. Reciprocal ST depression of 1 mm in I and aVL. " +
        "No ST depression in V1 to V3. Right sided lead V4R shows 1 mm ST elevation. PR 180 ms, QRS 90 ms.",
    },
    {
      id: "arm-pressures",
      label: "Both arm pressures and pulses",
      result:
        "Right arm 170/94. Left arm 116/70. The left radial pulse is weak compared with the right. Both femoral pulses are present and equal.",
    },
    {
      id: "cv-exam",
      label: "Heart and lung exam",
      result:
        "Pale and diaphoretic. JVP 3 cm above the sternal angle. Soft early diastolic murmur at the left sternal edge. " +
        "Normal S1 and S2. No rub. Chest clear. Abdomen soft and non tender.",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "Alert and oriented. Moves all four limbs with normal power. He reports brief tingling in the left hand in the ambulance that has now resolved. Speech normal.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result:
        "AP portable film. The mediastinum measures 9.5 cm at the level of the aortic knob. The aortic knob contour is blurred. " +
        "No pneumothorax. No pulmonary edema. Heart size at the upper limit of normal.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "Parasternal long axis shows an aortic root of 4.8 cm with a mobile linear echo in the proximal ascending aorta, consistent with an intimal flap. " +
        "Small circumferential pericardial effusion of 6 mm. No right ventricular diastolic collapse. " +
        "Left ventricle mildly reduced with inferior wall hypokinesis. Abdominal aorta 2.4 cm with a possible flap.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "High sensitivity troponin T 48 ng/L. Hemoglobin 138 g/L. Platelets 210 x 10^9/L. Creatinine 104 µmol/L. Potassium 4.1 mmol/L. " +
        "INR 1.0. Lactate 2.6 mmol/L. Type and screen sent. Group O positive.",
    },
    {
      id: "d-dimer",
      label: "D dimer",
      result: "D dimer 4.8 mg/L FEU.",
    },
    {
      id: "cta",
      label: "CT angiogram of the aorta",
      result:
        "Stanford type A dissection starting at the aortic root and extending through the arch into the descending aorta to the level of the renal arteries. " +
        "The flap extends into the right coronary ostium. The left subclavian artery arises from the false lumen. " +
        "Small hemopericardium. No free rupture into the mediastinum.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "His wife says he has been under stress and stopped his blood pressure pills in the summer. He has never had chest pain before. " +
        "She wants to know if he is having a heart attack.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "He is pale and says the pain is going through to his back. The nurse is waiting for your order on the tenecteplase.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "What do you do in the next ten minutes? Will you give the tenecteplase?",
      seconds: 120,
      modelAnswer: [
        "Monitor, two large bore IVs, type and screen.",
        "Pause before any fibrinolytic. Aortic dissection is on the differential.",
        "Ask about tearing pain, back radiation and near syncope.",
        "Check both arm pressures and pulses, listen for aortic regurgitation, check neuro.",
        "Bedside echo and portable chest X ray before deciding.",
        "Fentanyl 25 to 50 mcg IV titrated for pain.",
      ],
      rubric: ["cp-r1", "cp-r2", "cp-r3", "cp-r4"],
      choices: [
        {
          id: "c-screen",
          label: "I held the tenecteplase and screened for dissection with a focused history, both arm pressures, a bedside echo and a chest X ray.",
          next: "s-screen",
          quality: "strong", feedback: "Strong. Inferior ST elevation with tearing back pain must trigger a dissection screen before any fibrinolytic. Both arm pressures, a murmur check, POCUS and a chest X ray take minutes. The examiner wanted a pause and an explicit dissection screen.",
        },
        {
          id: "c-ct-only",
          label: "I held the tenecteplase and called in the CT technologist without doing any bedside checks.",
          next: "s-ct-wait",
          quality: "partial", feedback: "Partial. Holding the lytic was right. But the bedside screen is faster than waiting 30 minutes for CT. An arm pressure difference over 20 mmHg, a pulse deficit, a flap on POCUS or a mediastinum over 8 cm would have changed management at once.",
        },
        {
          id: "c-lytic",
          label: "I gave the tenecteplase and heparin because transfer to PCI is over 120 minutes.",
          next: "s-lytic",
          quality: "unsafe", feedback: "Unsafe. Suspected aortic dissection is an absolute contraindication to fibrinolysis. The transfer time argument only applies once dissection is reasonably excluded. The examiner wanted you to screen before you treat.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct-wait",
      phase: "Thirty minutes later",
      text:
        "The technologist is still on the way. His pain is moving into his lower back. The nurse finally checks the left arm on her own. It reads 116/70. You still have no bedside information to guide treatment.",
      next: "s-screen",
    },
    {
      kind: "say",
      id: "s-lytic",
      phase: "Twenty minutes later",
      text:
        "The tenecteplase and heparin are in. His pain is worse and tearing. He is oozing from his IV sites. Left arm pressure is 104/62. The nurse checks the right arm and gets 162/90. Fibrinolysis in a dissection carries a high risk of fatal bleeding. You stop the heparin.",
      next: "s-screen",
    },
    {
      kind: "say",
      id: "s-screen",
      phase: "Bedside results",
      text:
        "Right arm 170/94. Left arm 116/70 with a weak left radial pulse. There is a soft early diastolic murmur. " +
        "Your bedside echo shows a 4.8 cm aortic root with a flap in the proximal ascending aorta and a 6 mm pericardial effusion. " +
        "The chest X ray shows a 9.5 cm mediastinum.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "Putting it together",
      prompt: "How do you explain his ECG, and what does the right sided lead mean for nitrates?",
      seconds: 60,
      modelAnswer: [
        "A type A dissection can extend into the right coronary ostium and cause inferior ST elevation.",
        "Pulse deficit, murmur of aortic regurgitation, flap on echo and wide mediastinum all support dissection.",
        "ST elevation in V4R suggests right ventricular involvement.",
        "Avoid further nitrates until the diagnosis is clear and the pressure is controlled.",
      ],
      rubric: ["cp-d1", "cp-d2", "cp-d3", "cp-r5"],
      next: "q-rate",
    },
    {
      kind: "question",
      id: "q-rate",
      phase: "Medical therapy",
      prompt: "His heart rate is now 72 and the right arm pressure is 178/96. What are your targets, which drug do you start first, and what dose?",
      seconds: 90,
      modelAnswer: [
        "Heart rate about 60 or lower and systolic under 120, about 100 to 120, or the lowest pressure that keeps him perfused.",
        "Use the higher arm pressure as the true pressure.",
        "Beta blocker first. Esmolol 500 mcg/kg over 1 minute then 50 to 300 mcg/kg/min.",
        "Labetalol 20 mg IV then 20 to 80 mg every 10 minutes is an equal first choice.",
        "Add a vasodilator such as nitroprusside or nitroglycerin only after rate control to avoid reflex tachycardia.",
      ],
      rubric: ["cp-m2", "cp-m3", "cp-m4"],
      choices: [
        {
          id: "c-esmolol",
          label: "I started esmolol first to get his heart rate to about 60, then added a vasodilator for a systolic of 100 to 120.",
          next: "q-ct",
          quality: "strong", feedback: "Strong. Beta blockade first lowers the force on the aortic wall. Targets are a heart rate of about 60 and a systolic under 120, about 100 to 120. Esmolol 500 mcg/kg then 50 to 300 mcg/kg/min is easy to stop if the pressure falls.",
        },
        {
          id: "c-ntg-only",
          label: "I started a nitroglycerin infusion on its own to bring the pressure down.",
          next: "s-reflex",
          quality: "unsafe", feedback: "Unsafe. A vasodilator on its own causes reflex tachycardia and increases shear on the flap. Rate control with a beta blocker must come first. Add a vasodilator only once the heart rate is controlled.",
        },
        {
          id: "c-left-arm",
          label: "I used the left arm pressure to guide my targets.",
          next: "s-left-arm",
          quality: "partial", feedback: "Partial. The dissected side reads falsely low. Use the higher arm pressure as the true aortic pressure. Your target is a systolic under 120, about 100 to 120, on the right arm.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reflex",
      phase: "Fifteen minutes later",
      text:
        "His pressure falls a little but his heart rate climbs to 104. The pain is worse and now radiates to his abdomen. The shear force on the aortic wall has gone up. You start esmolol.",
      next: "q-ct",
    },
    {
      kind: "say",
      id: "s-left-arm",
      phase: "Fifteen minutes later",
      text:
        "The left arm reads 108/64 so you hold further treatment. The nurse checks the right arm. It is 186/100. The lower arm reading is falsely low because of the dissection. His true pressure is still far above target.",
      next: "q-ct",
    },
    {
      kind: "question",
      id: "q-ct",
      phase: "Before CT",
      prompt: "The CT technologist has arrived. The heparin bolus is still on the counter. Is it safe to go to CT, and what will you do about the heparin and antiplatelets?",
      seconds: 60,
      modelAnswer: [
        "No heparin and no further antiplatelet agents.",
        "Aspirin already given is not a reason to delay surgery.",
        "He is stable enough for CT angiography with a monitor, infusions running and an escort.",
        "Do not let CT delay the call to cardiac surgery.",
      ],
      rubric: ["cp-m1", "cp-d4"],
      next: "s-cta",
    },
    {
      kind: "say",
      id: "s-cta",
      phase: "CT result",
      text:
        "CT angiogram: Stanford type A dissection from the aortic root to the renal arteries. The flap extends into the right coronary ostium. Small hemopericardium. " +
        "As you read the report, the interventional cardiologist calls back.",
      next: "q-cardio",
    },
    {
      kind: "question",
      id: "q-cardio",
      phase: "Consultant disagreement",
      prompt:
        "The cardiologist says: 'That ECG is a clear inferior STEMI. Your transfer is over three hours. Guidelines say give tenecteplase now. Rural CT reads are often wrong.' What do you say?",
      seconds: 60,
      modelAnswer: [
        "Decline fibrinolysis clearly and respectfully.",
        "Share the objective findings: pulse deficit, murmur, flap on echo, wide mediastinum and the CT.",
        "Suspected aortic dissection is an absolute contraindication to fibrinolysis.",
        "Redirect to the real need, which is cardiac surgery.",
      ],
      rubric: ["cp-c1", "cp-m1"],
      choices: [
        {
          id: "c-decline",
          label: "I declined, shared the pulse deficit, echo and CT findings, and asked him to help me reach cardiac surgery.",
          next: "q-transfer",
          quality: "strong", feedback: "Strong. You disagreed with data, not with the person. Pulse deficit, murmur, flap and CT make fibrinolysis contraindicated. You then redirected him to what the patient needs, which is cardiac surgery.",
        },
        {
          id: "c-agree",
          label: "I agreed to give the tenecteplase because he is the cardiologist.",
          next: "s-agree",
          quality: "unsafe", feedback: "Unsafe. You are the most responsible physician at the bedside. A consultant on the phone cannot override an absolute contraindication. Fibrinolysis in a type A dissection is often fatal.",
        },
        {
          id: "c-unsure",
          label: "I said I was not sure and asked him to make the call.",
          next: "s-unsure",
          quality: "partial", feedback: "Partial. Handing the decision to a remote consultant leaves the patient at risk. The examiner wanted a clear refusal backed by the pulse deficit, echo and CT. Then a call to cardiac surgery through CritiCall.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-agree",
      phase: "In the room",
      text:
        "The nurse hesitates and asks you to look at the CT report again before she pushes it. You are the most responsible physician. Giving a fibrinolytic in a type A dissection would likely be fatal. You cancel the order.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-unsure",
      phase: "On the phone",
      text:
        "The cardiologist repeats that he wants tenecteplase given now. The nurse is holding the syringe and looking at you. He cannot see the patient. The decision is yours.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "Who needs to accept this patient, how do you arrange it, and what goes with him? What do you tell him and his wife?",
      seconds: 90,
      modelAnswer: [
        "Cardiac surgery at a tertiary centre must accept, not only a PCI centre.",
        "Call through CritiCall Ontario for the fastest route and transport.",
        "Critical care escort with esmolol and vasodilator infusions running and blood available.",
        "Structured handover with times, drugs given, images and consultant discussion.",
        "Tell him and his wife honestly that this is a tear in the main artery that needs urgent surgery.",
        "Document why fibrinolysis was withheld.",
      ],
      rubric: ["cp-s1", "cp-s2", "cp-c2", "cp-c3", "cp-c4", "cp-s3"],
      next: "s-deteriorate",
    },
    {
      kind: "say",
      id: "s-deteriorate",
      phase: "While waiting for the air ambulance",
      text:
        "His right arm pressure falls to 78/50. Heart rate 112. He is confused and his neck veins are distended. " +
        "Your repeat bedside echo shows a 14 mm effusion with right ventricular diastolic collapse. The aircraft is 40 minutes out.",
      next: "q-tamponade",
    },
    {
      kind: "question",
      id: "q-tamponade",
      phase: "Deterioration",
      prompt: "What is happening and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Tamponade from rupture into the pericardium.",
        "Stop the esmolol and vasodilator.",
        "Give cautious fluid and blood to support pressure.",
        "Surgery is the definitive treatment. Push for the fastest transfer.",
        "Avoid large volume pericardiocentesis because it can worsen bleeding.",
        "In a peri arrest, controlled small volume drainage to a systolic of about 90 is a last resort.",
      ],
      rubric: ["cp-m5"],
      choices: [
        {
          id: "c-support",
          label: "I stopped the esmolol and vasodilator, gave cautious fluid and blood, and pushed for the fastest transfer to surgery.",
          next: "q-airway",
          quality: "strong", feedback: "Strong. Tamponade in type A dissection needs the operating room. Stop the esmolol and vasodilator, give cautious fluid and blood, and speed the transfer. That is what the examiner wanted.",
        },
        {
          id: "c-drain",
          label: "I did a pericardiocentesis and drained as much as I could.",
          next: "s-drain",
          quality: "unsafe", feedback: "Unsafe. Draining a large volume raises the pressure and can restart bleeding from the aorta. If he is peri arrest, remove only small aliquots to reach a systolic of about 90. Surgery is the definitive fix.",
        },
        {
          id: "c-keep",
          label: "I kept the antihypertensive infusions running while I gave fluid.",
          next: "s-keep",
          quality: "partial", feedback: "Partial. Fluid was reasonable. But antihypertensives must stop once he is in shock from tamponade. The goal has changed from lowering pressure to keeping perfusion until surgery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-drain",
      phase: "Five minutes later",
      text:
        "You remove 180 mL of blood. His pressure rises to 128/80 for two minutes. Then it falls to 60/30. The effusion is back on echo. Raising the pressure has restarted bleeding from the aorta.",
      next: "q-airway",
    },
    {
      kind: "say",
      id: "s-keep",
      phase: "Five minutes later",
      text: "His pressure drops to 68/40. The nurse asks if she should stop the esmolol.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Before the aircraft lands",
      prompt: "He becomes more drowsy. Will you intubate him here? What are the risks?",
      seconds: 60,
      modelAnswer: [
        "Avoid intubation if possible. Positive pressure can cause collapse in tamponade.",
        "If needed, resuscitate first and use a reduced dose induction agent.",
        "Have blood running and push dose vasopressor ready.",
        "Keep him breathing spontaneously until the surgical team is close if you can.",
      ],
      rubric: ["cp-s4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The air ambulance crew arrives and takes over. The cardiac surgeon is waiting in the operating room. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cp-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Places patient on monitor, obtains two large bore IVs, and sends type and screen early.",
      points: 1,
      teaching: "A patient with possible aortic catastrophe needs blood ready early. Two large bore lines let you run infusions and products together.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-r2",
      competency: "assessment",
      criterion: "approach",
      text: "Pauses before fibrinolysis and screens for aortic dissection with a focused history of pain character and radiation.",
      points: 3,
      critical: true,
      teaching: "Dissection can mimic STEMI, usually inferior. Always ask about tearing pain and back radiation before a fibrinolytic.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-r3",
      competency: "assessment",
      criterion: "approach",
      text: "Checks both arm blood pressures and pulses.",
      points: 2,
      teaching: "A difference of more than 20 mmHg between arms or a pulse deficit strongly suggests dissection. It takes one minute to check.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-r4",
      competency: "management",
      criterion: "plan",
      text: "Gives IV opioid analgesia, e.g. fentanyl 25 to 50 mcg IV titrated.",
      points: 1,
      teaching: "Pain drives catecholamines and shear stress. Opioids help control heart rate and pressure.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-r5",
      competency: "management",
      criterion: "plan",
      text: "Avoids further nitrates given inferior and right ventricular involvement until the diagnosis is clear.",
      points: 1,
      teaching: "ST elevation in V4R suggests right ventricular involvement. Nitrates can cause profound hypotension in this setting.",
      source: "ccs-stemi",
    },
    {
      id: "cp-d1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes that dissection into the right coronary ostium can cause inferior ST elevation.",
      points: 2,
      teaching: "The right coronary ostium is the one most often involved by a type A flap. Inferior STEMI plus back pain should raise the question.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-d2",
      competency: "assessment",
      criterion: "data",
      text: "Performs a bedside echo looking for aortic root dilation, intimal flap, effusion and aortic regurgitation.",
      points: 2,
      teaching: "A root over 4 cm, a flap or a new effusion on POCUS supports dissection. A normal POCUS does not rule it out.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-d3",
      competency: "assessment",
      criterion: "data",
      text: "Interprets the widened mediastinum on chest X ray.",
      points: 1,
      teaching: "A mediastinum over 8 cm on an AP film is a clue to dissection. A normal chest X ray does not exclude it.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-d4",
      competency: "assessment",
      criterion: "data",
      text: "Obtains CT angiography of the aorta while stable, with monitoring and an escort.",
      points: 2,
      teaching: "CT angiography is the test of choice in a stable patient. An unstable patient should not leave resus for imaging.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-m1",
      competency: "management",
      criterion: "plan",
      text: "Withholds tenecteplase and heparin, and gives no further antiplatelet agents.",
      points: 3,
      critical: true,
      teaching: "Suspected aortic dissection is an absolute contraindication to fibrinolysis. Anticoagulation can turn a surgical emergency into a fatal bleed.",
      source: "ccs-stemi",
    },
    {
      id: "cp-m2",
      competency: "management",
      criterion: "plan",
      text: "Starts IV beta blockade first, e.g. esmolol 500 mcg/kg over 1 minute then 50 to 300 mcg/kg/min, or labetalol 20 mg IV repeated every 10 minutes to effect.",
      points: 2,
      teaching: "Rate control reduces the force on the aortic wall. Esmolol is short acting and easy to stop if the pressure falls. ESC 2024 names labetalol as a first choice.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-m3",
      competency: "management",
      criterion: "plan",
      text: "States targets of heart rate about 60 or lower and systolic under 120, about 100 to 120, using the higher arm reading.",
      points: 2,
      teaching: "ESC 2024 targets a heart rate of 60 or less and a systolic under 120. ACC and AHA 2022 accept a heart rate of 60 to 80. Use the higher arm, because the lower arm is reduced by the dissection.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-m4",
      competency: "management",
      criterion: "plan",
      text: "Adds a vasodilator such as nitroprusside or nitroglycerin only after rate control.",
      points: 1,
      teaching: "A vasodilator alone causes reflex tachycardia and more shear. Beta block first, then vasodilate.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-m5",
      competency: "resuscitation",
      criterion: "diagnosis",
      text: "Recognizes tamponade, stops antihypertensives, gives cautious fluid and blood, and avoids large volume pericardiocentesis.",
      points: 2,
      teaching: "Tamponade in type A dissection needs surgery. Draining a large volume raises pressure and can restart bleeding from the aorta.",
      source: "esc-aorta",
    },
    {
      id: "cp-c1",
      competency: "communication",
      criterion: "plan",
      text: "Declines the cardiologist's request respectfully and shares the objective findings that support dissection.",
      points: 2,
      teaching: "Disagree with data, not with the person. The physician at the bedside holds responsibility for the order.",
      source: "ccs-stemi",
    },
    {
      id: "cp-c2",
      competency: "communication",
      criterion: "plan",
      text: "Contacts cardiac surgery at a tertiary centre early through CritiCall Ontario or the local equivalent.",
      points: 2,
      teaching: "CritiCall finds the accepting surgeon and bed. Call as soon as dissection is likely, not after every test.",
      source: "criticall",
    },
    {
      id: "cp-c3",
      competency: "communication",
      criterion: "plan",
      text: "Gives a clear structured handover to the receiving team and transport crew.",
      points: 1,
      teaching: "Include times, drugs and doses, targets, images and the reason fibrinolysis was withheld.",
      source: "criticall",
    },
    {
      id: "cp-c4",
      competency: "communication",
      criterion: "plan",
      text: "Explains the diagnosis and plan honestly to the patient and his wife.",
      points: 1,
      teaching: "Use plain words. A tear in the main artery that needs urgent surgery is clearer than a technical term.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-s1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges emergent transfer to a centre with cardiac surgery, not only a PCI centre.",
      points: 3,
      critical: true,
      teaching: "Type A dissection mortality rises each hour without surgery. The destination must have cardiac surgery on site.",
      source: "acc-aha-aorta",
    },
    {
      id: "cp-s2",
      competency: "disposition",
      criterion: "plan",
      text: "Requests a critical care escort with blood products and infusions running.",
      points: 1,
      teaching: "He may deteriorate in transit. The escort must be able to titrate infusions and give blood.",
      source: "criticall",
    },
    {
      id: "cp-s3",
      competency: "professionalism",
      criterion: "plan",
      text: "Documents the reasoning for withholding fibrinolysis and the consultant discussion.",
      points: 1,
      teaching: "Clear documentation protects the patient and you. Record the findings, the contraindication and who you spoke with.",
      source: "ccs-stemi",
    },
    {
      id: "cp-s4",
      competency: "resuscitation",
      criterion: "plan",
      text: "Anticipates collapse with positive pressure ventilation and avoids intubation unless necessary.",
      points: 1,
      teaching: "Positive pressure reduces venous return. In tamponade that can cause arrest at induction.",
      source: "esc-aorta",
    },
  ],
  sources: [
    {
      id: "acc-aha-aorta",
      citation: "Isselbacher EM, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022.",
      url: "https://pubmed.ncbi.nlm.nih.gov/36322642/",
    },
    {
      id: "esc-aorta",
      citation: "European Society of Cardiology. 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. European Heart Journal. 2024.",
      url: "https://academic.oup.com/eurheartj/article/45/36/3538/7738955",
    },
    {
      id: "ccs-stemi",
      citation: "Wong GC, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology Guidelines on the Acute Management of ST Elevation Myocardial Infarction. Focused Update on Regionalization and Reperfusion. Canadian Journal of Cardiology. 2019.",
      url: "https://onlinecjc.ca/article/S0828-282X(18)31321-7/fulltext",
    },
    { id: "criticall", citation: "CritiCall Ontario. Provincial emergency referral and transfer service.", url: "https://www.criticall.org" },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
