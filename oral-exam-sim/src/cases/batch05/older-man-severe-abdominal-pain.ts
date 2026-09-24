// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const olderManSevereAbdominalPain: OralCase = {
  id: "older-man-severe-abdominal-pain",
  title: "Belly pain that will not settle",
  blueprint: "geri",
  alsoCovers: ["cardio", "comm"],
  priorityTopic: "abdominal-pain",
  keyFeatures: [
    { topic: "abdominal-pain", n: 1 },
    { topic: "abdominal-pain", n: 2 },
    { topic: "abdominal-pain", n: 3 },
    { topic: "abdominal-pain", n: 4 },
    { topic: "abdominal-pain", n: 5 },
  ],
  summary: "A 79 year old man has sudden severe abdominal pain and a soft abdomen. The nurse thinks it is constipation.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician at a 150 bed community hospital in Ontario. There is 24 hour CT, a general surgeon on call and an ICU. " +
    "Vascular surgery and interventional radiology are at a regional centre about 1 hour away by land, reached through CritiCall. " +
    "Walter Kowalczyk is 79 years old and about 72 kg. He has atrial fibrillation on apixaban, hypertension and treated prostate cancer. " +
    "He stopped his apixaban 4 days ago for a dental extraction and has not restarted it. " +
    "About 3 hours ago he developed sudden severe pain around his belly button. He vomited twice and had one loose stool. " +
    "Triage vitals: heart rate 112 and irregular, blood pressure 148/88, respiratory rate 22, SpO2 95 percent on room air, temperature 36.9, capillary glucose 8.2 mmol/L. CTAS 2. " +
    "The nurse says: 'He is writhing, but his belly is soft. He has not had a good bowel movement in days. Want me to set up a Fleet enema?'",
  findings: [
    {
      id: "abdomen",
      label: "Abdominal exam",
      result: "Soft. Mild diffuse tenderness without guarding or rebound. Bowel sounds present. He rates his pain 10 out of 10 and cannot lie still. No hernias. Rectal exam: soft brown stool, trace heme positive.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Atrial fibrillation at 114. No ST elevation. Nonspecific ST depression in V5 and V6.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "White cells 17.8 x 10^9/L. Hemoglobin 152 g/L. Platelets 188 x 10^9/L. Creatinine 132 µmol/L, eGFR 46. Lipase 48 U/L. Lactate 2.6 mmol/L. " +
        "Bicarbonate 19 mmol/L. INR 1.1. High sensitivity troponin 38 ng/L. Liver enzymes normal.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result: "Abdominal aorta 2.6 cm. No free fluid. Gallbladder without stones. No hydronephrosis. Poor windows over the bowel.",
    },
    {
      id: "xray",
      label: "Abdominal X ray",
      result: "Nonspecific bowel gas pattern. Moderate stool in the colon. No free air.",
    },
    {
      id: "cta",
      label: "CT angiogram of the abdomen",
      result:
        "Filling defect occluding the superior mesenteric artery about 6 cm beyond its origin, sparing the proximal jejunal branches. " +
        "Several loops of mid and distal small bowel with reduced wall enhancement. No pneumatosis or portal venous gas. No free air. Left atrial appendage filling defect on the upper images.",
    },
    {
      id: "frailty",
      label: "Function and wishes",
      result:
        "Lives with his wife in a bungalow. Independent in all daily activities. Drives. Walks 2 km a day. Clinical Frailty Scale 3. " +
        "He has told his wife he would want surgery 'if it gives me a real chance', but not to be kept alive on machines with no hope.",
    },
    {
      id: "later",
      label: "Reassessment at 90 minutes",
      result: "Heart rate 128. Blood pressure 94/58. Abdomen now distended with guarding and rebound. Lactate 5.2 mmol/L. Urine output 15 mL in the last hour.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Apixaban 5 mg twice a day, held for 4 days. Metoprolol 50 mg twice a day. Amlodipine 5 mg daily. No allergies.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Assessment",
      text: "He is rocking on the stretcher and holding his belly. His wife says he never complains. The nurse has already given morphine 2 mg IV without much effect.",
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Differential",
      prompt: "What are you worried about, and what test do you order? His creatinine is 132.",
      seconds: 90,
      modelAnswer: [
        "Pain out of proportion to a soft abdomen in an older man with atrial fibrillation off anticoagulation is acute mesenteric ischemia until proven otherwise.",
        "Also consider ruptured aneurysm, perforation, obstruction, pancreatitis and inferior MI.",
        "A normal or mildly raised lactate does not exclude ischemia.",
        "CT angiogram of the abdomen with arterial and venous phases now.",
        "Do not delay contrast imaging for his kidney function. The risk of a missed diagnosis is far greater.",
        "Two IVs, fluids, analgesia titrated. Nothing by mouth.",
      ],
      rubric: ["mi-a1", "mi-a2", "mi-m3"],
      choices: [
        {
          id: "c-cta",
          label: "I suspected mesenteric ischemia and ordered a CT angiogram now despite the creatinine.",
          next: "q-initial",
          quality: "strong",
          feedback:
            "Strong. Every hour of delay increases bowel loss and death. The risk of contrast kidney injury at an eGFR of 46 is low. CT angiography is the test of choice.",
        },
        {
          id: "c-noncontrast",
          label: "I ordered a CT without contrast to protect his kidneys.",
          next: "s-noncontrast",
          quality: "partial",
          feedback:
            "Partial. You thought about CT, which is right. But a non contrast scan cannot show an arterial occlusion. Canadian radiology guidance does not support withholding contrast at this eGFR when the diagnosis is life threatening.",
        },
        {
          id: "c-constipation",
          label: "I agreed with the enema and planned to reassess after a bowel movement.",
          next: "s-constipation",
          quality: "unsafe",
          feedback:
            "Unsafe. Severe pain with a soft belly in a patient at embolic risk is the classic trap. Constipation is a diagnosis of exclusion in an older adult with this pain.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-noncontrast",
      phase: "Radiology",
      text: "The radiologist calls to say the scan is non diagnostic and suggests a CT angiogram. It is done 50 minutes later.",
      next: "q-initial",
    },
    {
      kind: "say",
      id: "s-constipation",
      phase: "One hour later",
      text: "The enema produces a small stool. His pain is worse and he has vomited again. The nurse asks you to reassess. You order a CT angiogram.",
      next: "q-initial",
    },
    {
      kind: "question",
      id: "q-initial",
      phase: "Diagnosis",
      prompt: "The CT angiogram shows an embolus in the superior mesenteric artery with poorly enhancing small bowel. What do you do right now?",
      seconds: 90,
      modelAnswer: [
        "Unfractionated heparin IV: bolus 80 units/kg (about 5,800 units), then 18 units/kg/h, unless contraindicated.",
        "Broad spectrum antibiotics, for example piperacillin tazobactam 4.5 g IV.",
        "Isotonic fluid resuscitation. Correct electrolytes.",
        "Nothing by mouth. Nasogastric tube if vomiting.",
        "Analgesia: titrated opioid, for example hydromorphone 0.25 to 0.5 mg IV.",
        "Urgent call to general surgery and vascular surgery at the same time.",
      ],
      rubric: ["mi-m1", "mi-m2"],
      choices: [
        {
          id: "c-heparin",
          label: "I started an unfractionated heparin bolus and infusion, gave piperacillin tazobactam and fluids, and called general and vascular surgery together.",
          next: "q-plan",
          quality: "strong",
          feedback:
            "Strong. Heparin limits clot extension. Unfractionated heparin can be stopped quickly for surgery. Antibiotics cover bacterial translocation from ischemic bowel.",
        },
        {
          id: "c-apixaban",
          label: "I restarted his apixaban at his usual dose and called surgery.",
          next: "s-apixaban",
          quality: "partial",
          feedback:
            "Partial. Anticoagulation is right. But an oral agent is slow, not titratable and hard to reverse before surgery. IV unfractionated heparin is the agent of choice here.",
        },
        {
          id: "c-hold",
          label: "I held all anticoagulation because he might need surgery.",
          next: "s-hold",
          quality: "unsafe",
          feedback:
            "Unsafe. Guidelines recommend heparin as soon as the diagnosis is made unless there is a contraindication. Surgery is not a reason to wait. Heparin can be stopped or reversed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-apixaban",
      phase: "Surgery",
      text: "The general surgeon asks why an oral anticoagulant was given to a patient who may need a laparotomy tonight. You switch to a heparin infusion after discussing timing with pharmacy.",
      next: "q-plan",
    },
    {
      kind: "say",
      id: "s-hold",
      phase: "Surgery",
      text: "The vascular surgeon on the phone asks you to start heparin now. You give a bolus of 80 units/kg and start the infusion.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Definitive care",
      prompt: "Your general surgeon is here. Vascular surgery is an hour away. How do you decide where he should be treated?",
      seconds: 75,
      modelAnswer: [
        "The goal is revascularization and assessment of bowel viability as fast as possible.",
        "Conference call through CritiCall with the local surgeon and the vascular surgeon.",
        "Without peritonitis, fast transfer for endovascular or open revascularization is often best.",
        "With peritonitis or clear dead bowel, laparotomy should not wait. Local surgery for damage control and bowel resection, with vascular input.",
        "Arrange transport early. Send images electronically.",
      ],
      rubric: ["mi-l1", "mi-c1"],
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "While awaiting transport",
      text: "Ninety minutes after arrival his heart rate is 128 and pressure 94/58. His abdomen is distended with guarding and rebound. Lactate is 5.2. Urine output is 15 mL in the last hour.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Deterioration",
      prompt: "What has changed and what do you do now?",
      seconds: 75,
      modelAnswer: [
        "Peritonitis and septic shock. The bowel is likely infarcted.",
        "Crystalloid in 500 mL boluses with reassessment. Start norepinephrine if still hypotensive.",
        "Target a mean arterial pressure of at least 65 mmHg.",
        "This changes the plan: he needs a laparotomy now. Transfer is no longer safe.",
        "Tell the local surgeon and the vascular surgeon. Book the operating room.",
        "Continue antibiotics and heparin unless the surgeon asks otherwise.",
      ],
      rubric: ["mi-r1", "mi-d1"],
      next: "q-goals",
    },
    {
      kind: "question",
      id: "q-goals",
      phase: "Goals of care",
      prompt: "The surgeon asks you to talk with Walter and his wife about goals before he goes to the operating room. How do you approach this?",
      seconds: 90,
      modelAnswer: [
        "He is awake and capable. Speak to him directly with his wife present if he wishes.",
        "Explain in plain words: a blood clot has cut off blood to the bowel and part of it may be dying.",
        "Surgery is the only chance of survival. Many patients still die, and he may need an ICU stay or a stoma.",
        "Ask what matters most to him. He has said he wants a real chance, not machines without hope.",
        "Base the decision on his values and function, not his age. Clinical Frailty Scale 3 is fit.",
        "Agree on resuscitation status and limits in ICU. Document it.",
      ],
      rubric: ["mi-c2", "mi-p1"],
      choices: [
        {
          id: "c-values",
          label: "I spoke with Walter directly, explained the risks honestly, asked what mattered to him, and he chose surgery with a plan to review if things go badly.",
          next: "q-handover",
          quality: "strong",
          feedback:
            "Strong. A capable adult makes his own choice. Honest numbers and his own values guide the plan. A time limited trial of intensive care matches what he told his wife.",
        },
        {
          id: "c-wife",
          label: "I asked his wife to decide because he was in too much pain to think clearly.",
          next: "s-wife",
          quality: "partial",
          feedback:
            "Partial. Involving his wife is kind. But pain does not remove capacity unless it stops him understanding and appreciating the choice. Treat the pain and ask him first.",
        },
        {
          id: "c-age",
          label: "I told them that at 79 surgery was too risky and recommended comfort care.",
          next: "s-age",
          quality: "unsafe",
          feedback:
            "Unsafe. Age alone is not a reason to withhold surgery. He is fit, independent and has said he would want a real chance. Decisions must reflect his function and wishes.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wife",
      phase: "At the bedside",
      text: "His wife says, 'Ask him. He knows his own mind.' You give more analgesia and speak with Walter. He chooses surgery.",
      next: "q-handover",
    },
    {
      kind: "say",
      id: "s-age",
      phase: "At the bedside",
      text: "Walter looks shocked and says he wants the operation. The surgeon disagrees with your framing. You apologize, restart the conversation and he chooses surgery.",
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "Give your handover to the surgeon and the ICU.",
      seconds: 60,
      modelAnswer: [
        "79 year old, fit, atrial fibrillation off apixaban for 4 days.",
        "Embolic SMA occlusion on CT angiogram. Now peritonitis and septic shock.",
        "Heparin started with time and dose. Antibiotics with time.",
        "Fluids given, norepinephrine rate, lactate trend and urine output.",
        "Goals of care: full surgery and ICU with review if not improving.",
        "Vascular surgery engaged for revascularization.",
      ],
      rubric: ["mi-c3"],
      next: "end",
    },
    { kind: "end", id: "end", text: "He goes to the operating room with the general surgeon while vascular surgery gives advice by phone. That is the end of the case." },
  ],
  rubric: [
    {
      id: "mi-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Suspects acute mesenteric ischemia from pain out of proportion to exam in a patient with atrial fibrillation off anticoagulation.",
      points: 3,
      critical: true,
      teaching: "Early mesenteric ischemia has a soft abdomen. Peritonitis means the bowel is already dying.",
      source: "wses",
    },
    {
      id: "mi-a2",
      competency: "assessment",
      criterion: "data",
      text: "Orders CT angiography promptly and does not withhold contrast because of moderate kidney impairment.",
      points: 3,
      critical: true,
      teaching: "A normal lactate does not exclude ischemia. The risk of contrast injury is low compared with a missed diagnosis.",
      source: "car",
    },
    {
      id: "mi-m1",
      competency: "management",
      criterion: "plan",
      text: "Starts IV unfractionated heparin with a weight based bolus and infusion.",
      points: 2,
      teaching: "Heparin limits propagation of thrombus and can be stopped quickly for surgery.",
      source: "esvs",
    },
    {
      id: "mi-m2",
      competency: "management",
      criterion: "plan",
      text: "Gives broad spectrum antibiotics, fluids, analgesia and bowel rest.",
      points: 1,
      teaching: "Ischemic bowel lets bacteria cross the wall. Early antibiotics are recommended.",
      source: "wses",
    },
    {
      id: "mi-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Arranges a joint discussion between the local general surgeon and vascular surgery through CritiCall.",
      points: 2,
      teaching: "Mesenteric ischemia needs both revascularization and bowel assessment. Joint planning avoids delay.",
      source: "esvs",
    },
    {
      id: "mi-c1",
      competency: "communication",
      criterion: "plan",
      text: "Presents findings clearly and asks each consultant for a specific decision and timeline.",
      points: 1,
      teaching: "A clear question to each consultant speeds decisions.",
      source: "wses",
    },
    {
      id: "mi-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Recognizes peritonitis and shock, gives fluid boluses and norepinephrine to a mean arterial pressure of at least 65 mmHg.",
      points: 2,
      teaching: "Shock from infarcted bowel needs resuscitation and source control. Fluids alone will not fix it.",
      source: "wses",
    },
    {
      id: "mi-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Changes the plan to immediate local laparotomy when peritonitis develops rather than a long transfer.",
      points: 3,
      critical: true,
      teaching: "Peritonitis means non viable bowel. An hour in an ambulance may not be survivable.",
      source: "wses",
    },
    {
      id: "mi-c2",
      competency: "communication",
      criterion: "plan",
      text: "Discusses goals of care directly with the capable patient, using plain language and honest risk.",
      points: 2,
      teaching: "Explore values and what the patient would accept. Offer a time limited trial when outcome is uncertain.",
      source: "rockwood",
    },
    {
      id: "mi-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Bases recommendations on function and wishes rather than age.",
      points: 2,
      teaching: "The Clinical Frailty Scale helps judge fitness for surgery better than age alone.",
      source: "rockwood",
    },
    {
      id: "mi-c3",
      competency: "communication",
      criterion: "plan",
      text: "Gives a structured handover including drug times, resuscitation and agreed goals of care.",
      points: 1,
      teaching: "Goals of care must travel with the patient to the operating room and ICU.",
      source: "wses",
    },
    {
      id: "mi-m3",
      competency: "management",
      criterion: "approach",
      text: "Considers the differential including ruptured aneurysm, perforation and myocardial infarction.",
      points: 1,
      teaching: "Bedside ultrasound of the aorta and an ECG narrow the list quickly.",
      source: "wses",
    },
  ],
  sources: [
    {
      id: "wses",
      citation: "Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2022.",
    },
    {
      id: "esvs",
      citation: "Björck M, et al. Management of the diseases of mesenteric arteries and veins. Clinical practice guidelines of the European Society for Vascular Surgery. Eur J Vasc Endovasc Surg. 2017.",
    },
    {
      id: "car",
      citation: "Macdonald DB, et al. Canadian Association of Radiologists guidance on contrast associated acute kidney injury. Can Assoc Radiol J. 2022.",
      url: "https://pubmed.ncbi.nlm.nih.gov/35608223/",
    },
    {
      id: "rockwood",
      citation: "Rockwood K, et al. A global clinical measure of fitness and frailty in elderly people. CMAJ. 2005.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
