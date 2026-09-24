// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const kneeDislocationVascularInjury: OralCase = {
  id: "knee-dislocation-vascular-injury",
  title: "Snowmobile into a tree",
  blueprint: "procedures",
  alsoCovers: ["trauma", "systems"],
  summary: "A 34 year old man with a badly deformed knee after a snowmobile crash arrives at a northern community hospital.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician at a 60 bed hospital in northern Ontario. There is a CT scanner, a general surgeon and an orthopaedic surgeon on call. There is no vascular surgery. " +
    "The regional trauma centre is 250 km away, about an hour by air ambulance. Transfers go through CritiCall Ontario. " +
    "Kyle Mercredi is 34 years old and weighs 92 kg. He hit a tree on his snowmobile at 18:40. It is now 20:05. " +
    "Triage vitals: heart rate 104, blood pressure 138/82, respiratory rate 18, SpO2 98 percent on room air, temperature 35.9, GCS 15. CTAS 2. " +
    "The paramedic says: 'His left knee is a mess. The foot was white when we got to him and I could not find a pulse. We splinted it as it lay and gave him fentanyl 100 mcg.'",
  findings: [
    {
      id: "primary",
      label: "Primary survey",
      result:
        "Airway patent, talking. Chest clear with equal air entry. Abdomen soft. Pelvis stable. No external bleeding. GCS 15. No neck pain or midline tenderness. eFAST negative.",
    },
    {
      id: "knee",
      label: "Left knee and leg before reduction",
      result:
        "Gross deformity with the tibia displaced forward on the femur. Large effusion. No open wound. " +
        "Foot pale and cool. Capillary refill over 5 seconds. No palpable dorsalis pedis or posterior tibial pulse. No Doppler signal. Calf soft.",
    },
    {
      id: "neuro",
      label: "Neurological exam of the left leg",
      result: "Reduced sensation over the dorsum of the foot and first web space. Weak ankle dorsiflexion and great toe extension. Plantar flexion normal.",
    },
    {
      id: "xray",
      label: "Knee X rays",
      result:
        "Before reduction: anterior dislocation of the tibia on the femur. No fracture. " +
        "After reduction: tibiofemoral joint reduced in the splint. Small avulsion fragment at the fibular head.",
    },
    {
      id: "post",
      label: "Left leg after reduction",
      result:
        "Foot is pinker but cooler than the right. Capillary refill 3 seconds. Faint dorsalis pedis pulse. Doppler signals present at dorsalis pedis and posterior tibial. Calf soft.",
    },
    {
      id: "abi",
      label: "Ankle brachial index",
      result: "Left ankle highest systolic 92 mmHg. Right arm 136 mmHg. Left ABI 0.68. Right ABI 1.08.",
    },
    {
      id: "cta",
      label: "CT angiogram of the left leg",
      result:
        "Abrupt occlusion of the popliteal artery at the level of the joint line over 3 cm with an intimal flap. Distal reconstitution through collaterals. No active extravasation.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 142 g/L. Platelets 246 x 10^9/L. INR 1.0. Creatinine 88 µmol/L. CK 820 U/L. Lactate 2.4 mmol/L. Ethanol 9 mmol/L. Type and screen sent.",
    },
    {
      id: "fasting",
      label: "Last meal and history",
      result: "Ate a sandwich at 17:30. Two beers this afternoon. Healthy. No medications. No allergies. Tetanus up to date.",
    },
    {
      id: "weather",
      label: "Transport update",
      result: "The air ambulance dispatcher calls. Freezing rain has grounded all aircraft in the region. A land critical care transport can leave in 30 minutes. Road time is about 3 hours.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the trauma bay",
      text:
        "He is on the stretcher with a vacuum splint on his left leg. He is in pain but talking. The left foot is white. Your team is two nurses and a respiratory therapist.",
      next: "q-primary",
    },
    {
      kind: "question",
      id: "q-primary",
      phase: "First priorities",
      prompt: "What are your priorities in the first 15 minutes?",
      seconds: 90,
      modelAnswer: [
        "ATLS primary survey. Rule out other life threats. He is otherwise stable.",
        "The leg is a limb threat. A dislocated knee with a pulseless foot needs reduction now.",
        "Reduce before X ray if the deformity is obvious and the limb is ischemic.",
        "Document neurovascular status before and after.",
        "Note time of injury. Warm ischemia time over 6 hours sharply raises amputation risk.",
        "Call for transfer early. Vascular injury is likely.",
      ],
      rubric: ["kd-a1", "kd-r1"],
      choices: [
        {
          id: "c-reduce",
          label: "I completed the primary survey, documented the pulseless foot and prepared to reduce the knee under sedation right away, before X ray.",
          next: "q-sedation",
          quality: "strong",
          feedback:
            "Correct. A pulseless limb from a dislocation needs immediate reduction. Every minute counts toward the 6 hour window. X rays can come after.",
        },
        {
          id: "c-imaging",
          label: "I sent him for X rays and a CT angiogram first to define the injury before reduction.",
          next: "s-imaging",
          quality: "partial",
          feedback:
            "Imaging defines the injury but delays reperfusion. Reduction often restores flow by relieving kinking or compression. Reduce first when the limb is ischemic.",
        },
        {
          id: "c-transfer",
          label: "I left it splinted as it lay and called CritiCall to transfer him for vascular surgery.",
          next: "s-transfer",
          quality: "unsafe",
          feedback:
            "Transfer is needed, but leaving the knee dislocated means hours more ischemia. Reduction is fast, often restores some flow and is within your scope. Do both.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-imaging",
      phase: "Fifty minutes later",
      text: "The CT technologist has just arrived. The foot is still white and cold. The nurse asks whether you want to reduce it before the scan. You bring him back to the trauma bay.",
      next: "q-sedation",
    },
    {
      kind: "say",
      id: "s-transfer",
      phase: "The CritiCall call",
      text: "The trauma centre vascular surgeon joins the call. She asks whether the knee has been reduced. When you say no, she asks you to reduce it now and call her back.",
      next: "q-sedation",
    },
    {
      kind: "question",
      id: "q-sedation",
      phase: "Sedation and reduction",
      prompt: "He ate at 17:30. Take me through your sedation and the reduction.",
      seconds: 120,
      modelAnswer: [
        "Recent food intake is not a reason to delay an urgent procedure. Aspiration during ED sedation is rare.",
        "Consent. Monitoring with capnography, oximetry and cardiac monitor. Airway equipment and suction ready.",
        "Ketamine 1 to 1.5 mg/kg IV, about 90 to 140 mg for 92 kg, or propofol titrated. A second physician or skilled provider for the airway.",
        "Longitudinal traction on the leg with countertraction on the thigh. Guide the tibia back. Avoid pressure in the popliteal fossa.",
        "Splint in about 15 to 20 degrees of flexion. Check pulses, Doppler and neurology after.",
        "Post reduction X ray to confirm.",
      ],
      rubric: ["kd-m1", "kd-m2"],
      next: "s-reduced",
    },
    {
      kind: "say",
      id: "s-reduced",
      phase: "After reduction",
      text:
        "The knee reduces with a clunk. The foot is pinker. There is a faint dorsalis pedis pulse and Doppler signals at both ankle arteries. The calf is soft. He is waking up and says his foot feels numb on top.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "The pulse is back",
      prompt: "The pulse is back. The orthopaedic surgeon on the phone says, 'Great, admit to me and we will get an MRI Monday.' What do you do?",
      seconds: 75,
      modelAnswer: [
        "A returned pulse does not exclude arterial injury. Intimal flaps can thrombose hours later.",
        "Measure the ankle brachial index now.",
        "ABI under 0.9 needs CT angiography and vascular surgery.",
        "ABI 0.9 or more allows serial exams and repeat ABI.",
        "Hard signs after reduction, such as absent pulses or ongoing ischemia, go straight to vascular surgery.",
        "Note the peroneal nerve deficit.",
      ],
      rubric: ["kd-a2", "kd-a3", "kd-c1"],
      choices: [
        {
          id: "c-abi",
          label: "I measured the ABI. It was 0.68, so I ordered a CT angiogram and called the trauma centre at the same time.",
          next: "s-cta",
          quality: "strong",
          feedback:
            "Correct. An ABI under 0.9 after knee dislocation predicts arterial injury requiring surgery. Running the scan and the transfer call in parallel saves time.",
        },
        {
          id: "c-serial",
          label: "I admitted him to orthopaedics with hourly pulse checks since the pulse had returned.",
          next: "s-serial",
          quality: "partial",
          feedback:
            "Serial exams are reasonable only with an ABI of 0.9 or more. A palpable pulse can hide an occlusive intimal injury. Measure the ABI first.",
        },
        {
          id: "c-discharge",
          label: "I discharged him in a knee immobilizer with orthopaedic follow up this week.",
          next: "s-discharge",
          quality: "unsafe",
          feedback:
            "A knee dislocation is a limb threat with a high rate of popliteal artery injury. Discharge without vascular assessment risks amputation. He needs an ABI and admission at minimum.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-serial",
      phase: "Two hours later",
      text: "The ward nurse calls. The foot is cooler and she cannot find the pulse. You measure the ABI. It is 0.52. You order a CT angiogram.",
      next: "s-cta",
    },
    {
      kind: "say",
      id: "s-discharge",
      phase: "Before he leaves",
      text: "The nurse refuses to discharge him. She says the foot is cooler than the other. You check an ABI. It is 0.68. You order a CT angiogram.",
      next: "s-cta",
    },
    {
      kind: "say",
      id: "s-cta",
      phase: "CT angiogram",
      text:
        "CTA shows a 3 cm occlusion of the popliteal artery at the joint line with an intimal flap and distal reconstitution through collaterals. It is now 21:05. Time since injury is 2 hours 25 minutes.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Getting him to a vascular surgeon",
      prompt: "What is your plan now? Who do you call and what do you ask for?",
      seconds: 90,
      modelAnswer: [
        "Popliteal artery occlusion needs urgent revascularization. Target within 6 hours of injury.",
        "CritiCall for the trauma centre. Speak directly with the vascular surgeon and trauma team leader.",
        "Air transport if available. Send the CT images electronically.",
        "Discuss systemic heparin with the surgeon. It is often given for an isolated limb injury, but only once head, torso and pelvic bleeding are reasonably excluded. After a high energy crash that may mean CT first.",
        "Analgesia. Limb level, not elevated. Keep warm. NPO. Neurovascular checks every 15 to 30 minutes.",
        "Watch for compartment syndrome, especially after reperfusion.",
      ],
      rubric: ["kd-d1", "kd-m3"],
      choices: [
        {
          id: "c-criticall",
          label: "I called CritiCall, spoke with the vascular surgeon, sent the images, gave heparin on her advice and booked air transport. I documented the injury time.",
          next: "s-weather",
          quality: "strong",
          feedback:
            "Well done. Direct surgeon to surgeon style communication and a clear injury time keep the ischemia clock visible. Heparin is a joint call with the surgeon and needs other bleeding sources excluded first after a high energy crash.",
        },
        {
          id: "c-local",
          label: "I asked our general surgeon to admit him and have vascular see him in the morning by transfer.",
          next: "s-local",
          quality: "partial",
          feedback:
            "The local surgeon may help but cannot repair a popliteal artery here. Waiting until morning pushes him well past 6 hours of ischemia. Transfer now.",
        },
        {
          id: "c-exfix",
          label: "I asked our orthopaedic surgeon to put on an external fixator first so the knee would be stable for transfer.",
          next: "s-exfix",
          quality: "unsafe",
          feedback:
            "An external fixator can be needed, but doing it here before vascular repair adds an hour or more of ischemia. The receiving team will sequence fixation and repair. Transfer first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-local",
      phase: "An hour later",
      text: "The general surgeon sees him and says he cannot repair the artery. He asks why you have not called CritiCall. You call now and speak with the vascular surgeon.",
      next: "s-weather",
    },
    {
      kind: "say",
      id: "s-exfix",
      phase: "In the OR hallway",
      text: "The anaesthetist and orthopaedic surgeon discuss the case and decline to fixate first. They ask you to arrange transfer. You call CritiCall and speak with the vascular surgeon.",
      next: "s-weather",
    },
    {
      kind: "say",
      id: "s-weather",
      phase: "A new problem",
      text:
        "The air ambulance dispatcher calls. Freezing rain has grounded all aircraft in the region. A land critical care transport can leave in 30 minutes. The road trip is about 3 hours. He would arrive close to the 6 hour mark.",
      next: "q-weather",
    },
    {
      kind: "question",
      id: "q-weather",
      phase: "Plan B",
      prompt: "The aircraft is grounded. What do you do?",
      seconds: 90,
      modelAnswer: [
        "Take the land transport now. Do not wait for the weather to lift.",
        "Update the vascular surgeon and the trauma team leader with the new arrival time so the OR is ready.",
        "Ask the surgeon whether a local temporary measure is possible, such as a temporary shunt by the general surgeon with remote guidance.",
        "Send a critical care escort. Heparin as agreed. Analgesia. Neurovascular checks every 15 to 30 minutes.",
        "Document times and decisions. Tell the patient.",
      ],
      rubric: ["kd-l1", "kd-c2"],
      next: "q-patient",
    },
    {
      kind: "question",
      id: "q-patient",
      phase: "Talking with the patient",
      prompt: "Kyle asks, 'Am I going to lose my leg?' What do you tell him?",
      seconds: 60,
      modelAnswer: [
        "Be honest and calm.",
        "The main artery behind his knee is blocked. It needs surgery tonight.",
        "The team is moving as fast as possible. Most legs are saved when the artery is fixed within about 6 hours.",
        "There is a real risk of losing the leg if blood flow cannot be restored.",
        "The numbness on the top of his foot is from a stretched nerve. Some recover.",
        "Ask who he wants called. Answer questions.",
      ],
      rubric: ["kd-c3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He leaves by land critical care transport with heparin running and the vascular surgeon waiting. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "kd-a1",
      competency: "assessment",
      text: "Completes a primary survey and recognizes the pulseless foot as a limb threat.",
      points: 1,
      teaching: "A dramatic limb injury can distract from other injuries. Primary survey first, then treat the limb as an emergency.",
      source: "atls",
    },
    {
      id: "kd-r1",
      competency: "resuscitation",
      text: "Reduces the dislocated knee immediately when the limb is ischemic, without waiting for imaging.",
      points: 3,
      critical: true,
      teaching: "Reduction can restore flow by relieving kinking and compression of the popliteal artery. Imaging can wait.",
      source: "atls",
    },
    {
      id: "kd-m1",
      competency: "management",
      text: "Plans safe procedural sedation with monitoring including capnography and a dedicated airway provider.",
      points: 2,
      teaching: "Recent food is not a reason to delay urgent sedation. Ketamine 1 to 1.5 mg/kg IV gives analgesia and preserves airway reflexes.",
      source: "acep-sedation",
    },
    {
      id: "kd-m2",
      competency: "management",
      text: "Uses in line traction to reduce, splints in 15 to 20 degrees of flexion and rechecks neurovascular status.",
      points: 1,
      teaching: "Avoid pressure behind the knee during reduction. Always recheck and document pulses, Doppler and nerve function after.",
      source: "atls",
    },
    {
      id: "kd-a2",
      competency: "assessment",
      text: "Measures the ankle brachial index after reduction even when a pulse returns.",
      points: 3,
      critical: true,
      teaching: "A palpable pulse does not exclude an intimal injury. An ABI under 0.9 after knee dislocation predicts arterial injury.",
      source: "mills-abi",
    },
    {
      id: "kd-a3",
      competency: "assessment",
      text: "Orders CT angiography for an ABI under 0.9 and identifies the common peroneal nerve injury.",
      points: 2,
      teaching: "CTA defines the lesion for the surgeon. Peroneal nerve injury is common with knee dislocation and should be documented.",
      source: "mills-abi",
    },
    {
      id: "kd-c1",
      competency: "communication",
      text: "Pushes back respectfully when the consultant plans routine admission without vascular assessment.",
      points: 1,
      teaching: "Knee dislocation has a high rate of popliteal injury. Lead with the ABI and the ischemia clock.",
      source: "mills-abi",
    },
    {
      id: "kd-d1",
      competency: "disposition",
      text: "Arranges urgent transfer for revascularization through CritiCall with a documented injury time and a 6 hour target.",
      points: 3,
      critical: true,
      teaching: "Warm ischemia beyond about 6 hours sharply raises amputation risk. Start the transfer the moment injury is likely.",
      source: "atls",
    },
    {
      id: "kd-m3",
      competency: "management",
      text: "Discusses systemic heparin with the vascular surgeon and maintains analgesia, limb position and frequent neurovascular checks.",
      points: 1,
      teaching: "Heparin can limit clot propagation in an isolated limb injury. It is a joint decision with the surgeon once head and torso bleeding are excluded.",
      source: "atls",
    },
    {
      id: "kd-l1",
      competency: "leadership",
      text: "Adapts quickly to the grounded aircraft by choosing land transport and updating the receiving team.",
      points: 2,
      teaching: "Waiting for weather costs muscle. Choose the fastest available option and keep the receiving team informed.",
      source: "atls",
    },
    {
      id: "kd-c2",
      competency: "communication",
      text: "Explores local temporary options with the vascular surgeon and documents times and decisions.",
      points: 1,
      teaching: "Some centres guide a local surgeon to place a temporary shunt when transport is long. Ask the question.",
      source: "atls",
    },
    {
      id: "kd-c3",
      competency: "communication",
      text: "Answers the patient honestly about the risk of amputation and the plan, in plain language.",
      points: 1,
      teaching: "Patients cope better with honest uncertainty than with false reassurance.",
      source: "atls",
    },
  ],
  sources: [
    {
      id: "atls",
      citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support. 11th edition. 2025.",
      url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/",
    },
    {
      id: "mills-abi",
      citation: "Mills WJ, et al. The value of the ankle-brachial index for diagnosing arterial injury after knee dislocation. A prospective study. Journal of Trauma. 2004.",
    },
    {
      id: "acep-sedation",
      citation: "Godwin SA, et al. Clinical policy. Procedural sedation and analgesia in the emergency department. Annals of Emergency Medicine. 2014.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
