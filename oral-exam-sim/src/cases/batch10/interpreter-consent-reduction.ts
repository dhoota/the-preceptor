// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const interpreterConsentReduction: OralCase = {
  id: "interpreter-consent-reduction",
  title: "A fall on the stairs and a grandson",
  blueprint: "comm",
  alsoCovers: ["ethics", "procedures"],
  priorityTopic: "msk",
  keyFeatures: [{ topic: "msk", n: 5 }, { topic: "msk", n: 7 }, { topic: "analgesia-sedation", n: 3 }, { topic: "analgesia-sedation", n: 5 }],
  summary: "A 63 year old woman who speaks only Tamil needs an urgent procedure. Her teenage grandson is the only one who speaks English.",
  durationMinutes: 15,
  stem:
    "You are working an evening shift at a busy community emergency department in the Greater Toronto Area. " +
    "The hospital has a 24 hour telephone interpreter service and a video interpreter tablet that is staffed until 23:00. " +
    "Orthopedics is on call from home. Procedural sedation is done in the department with a respiratory therapist. " +
    "Kamala Sivakumar is 63 years old. She missed a step at home and fell with her right foot twisted under her. " +
    "Triage vitals: heart rate 98, blood pressure 150/88, respiratory rate 18, SpO2 97 percent on room air, temperature 36.7, capillary glucose 7.9 mmol/L. CTAS 2. " +
    "The nurse says: 'Her ankle is badly deformed and the foot looks dusky. She only speaks Tamil. Her grandson Arun is 15 and has been translating. He says she has sugar and pressure pills.'",
  findings: [
    {
      id: "ankle",
      label: "Right ankle and foot exam",
      result:
        "Obvious lateral deformity of the ankle. The skin over the medial malleolus is tented and blanched but intact. " +
        "The foot is dusky and cool. Dorsalis pedis and posterior tibial pulses are not palpable. Weak Doppler signal over the dorsalis pedis. Capillary refill 5 seconds.",
    },
    {
      id: "xray",
      label: "Portable ankle X ray",
      result: "Trimalleolar fracture with lateral dislocation of the talus. No open wound on exam.",
    },
    {
      id: "language",
      label: "Language services",
      result:
        "The video tablet has no Tamil interpreter available until tomorrow morning. " +
        "The telephone service can connect a Tamil interpreter in about 8 to 10 minutes. A dual handset speaker phone is on the wall of the procedure room.",
    },
    {
      id: "grandson",
      label: "About Arun",
      result:
        "Arun is 15 and in grade 10. He was born in Canada and speaks Tamil at home. He says he is not sure of some medical words. " +
        "He is pale and keeps looking at his grandmother's foot.",
    },
    {
      id: "history",
      label: "History through the interpreter",
      result:
        "Type 2 diabetes on metformin 1000 mg twice daily. Hypertension on ramipril 10 mg daily. No blood thinners. No known drug allergies. " +
        "Last meal was rice and dal about 2 hours ago. She had a gallbladder operation 10 years ago in Sri Lanka and was very confused for two days afterwards. She snores but has no diagnosed sleep apnea.",
    },
    {
      id: "airway",
      label: "Airway and sedation assessment",
      result:
        "Weight 72 kg. Mallampati 2. Full dentition. Normal neck movement. ASA class 2. Chest clear. Heart sounds normal.",
    },
    {
      id: "capacity",
      label: "Capacity observations through the interpreter",
      result:
        "Alert and oriented. She repeats back what the procedure is and why it is needed. She understands the foot could be lost if blood flow is not restored. " +
        "She asks sensible questions about the risks of sedation. No signs of delirium.",
    },
    {
      id: "daughter",
      label: "Her daughter",
      result:
        "Priya, 38, arrives 20 minutes after triage. She speaks fluent English. She says her mother worries easily and she usually makes medical decisions for the family.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 131 g/L. Creatinine 88 µmol/L. Potassium 4.4 mmol/L. Glucose 8.2 mmol/L. Capillary ketones 0.2 mmol/L.",
    },
    {
      id: "post-reduction",
      label: "After reduction",
      result:
        "Foot pink and warm. Capillary refill 2 seconds. Dorsalis pedis palpable. Skin tenting resolved. Post reduction X ray shows the talus back under the tibia. Sensation normal once awake.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "Mrs. Sivakumar is holding her grandson's hand and crying out when anyone touches the foot. Arun says, 'She wants to know if you can fix it.' The nurse asks how you want to proceed.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What do you do in the next ten minutes, and how will you communicate with her?",
      seconds: 90,
      modelAnswer: [
        "Check the neurovascular status. This is a limb threat with skin at risk.",
        "Give IV analgesia now. Fentanyl about 1 mcg/kg IV.",
        "Request a professional Tamil interpreter by phone right away.",
        "Use Arun only for immediate basics like pain, allergies and blood thinners while waiting.",
        "Set up for procedural sedation in parallel so there is no delay once consent is obtained.",
        "If the foot were pulseless with no interpreter reachable, treat under the emergency provisions.",
      ],
      rubric: ["ic-a1", "ic-m1", "ic-c1"],
      choices: [
        {
          id: "c-phone",
          label: "I gave fentanyl, called the phone interpreter line immediately, asked Arun only about allergies and blood thinners, and had the team set up for sedation while we waited.",
          next: "s-connect",
          quality: "strong",
          feedback:
            "This balances limb urgency with valid consent. An 8 to 10 minute wait while you set up costs nothing. A child should not carry the weight of explaining risks of sedation to his grandmother. Using him for simple immediate facts is reasonable.",
        },
        {
          id: "c-arun",
          label: "I asked Arun to explain the sedation and reduction to her and she signed the consent form.",
          next: "s-arun",
          quality: "partial",
          feedback:
            "Ad hoc interpreters, especially children, make more errors with clinical consequences. You cannot confirm what was said. Consent obtained this way may not be informed. A professional interpreter was 10 minutes away.",
        },
        {
          id: "c-emergency",
          label: "I proceeded straight to sedation without consent because the foot is dusky and this is an emergency.",
          next: "s-emergency",
          quality: "unsafe",
          feedback:
            "The emergency exception for a language barrier requires that reasonable steps were taken to find a way to communicate. An interpreter was minutes away and the foot still had a Doppler signal. Proceeding without trying treats a capable adult as if she had no voice.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-arun",
      phase: "Five minutes later",
      text:
        "The nurse, who understands some Tamil, quietly tells you that Arun told his grandmother she would be 'asleep for one second and then it is fixed'. He did not mention breathing problems or the chance it might not work. Arun looks close to tears. You call the phone interpreter line.",
      next: "s-connect",
    },
    {
      kind: "say",
      id: "s-emergency",
      phase: "In the procedure room",
      text:
        "As the respiratory therapist places the nasal cannula, Mrs. Sivakumar pulls away and shouts. Arun says she thinks you are going to operate. " +
        "The nurse points out the phone interpreter can connect in a few minutes. You stop and call the line.",
      next: "s-connect",
    },
    {
      kind: "say",
      id: "s-connect",
      phase: "The interpreter connects",
      text:
        "A Tamil interpreter named Meena connects on the dual handset phone. Fentanyl has taken the edge off the pain. The foot still has a weak Doppler signal.",
      next: "q-conduct",
    },
    {
      kind: "question",
      id: "q-conduct",
      phase: "Working with the interpreter",
      prompt: "How do you run this interpreted conversation?",
      seconds: 75,
      modelAnswer: [
        "Brief the interpreter first. Purpose, urgency, and ask for everything to be interpreted word for word.",
        "Confirm the language and dialect match. Note the interpreter's name or ID number.",
        "Speak directly to the patient in the first person. Face her, not the phone.",
        "Short sentences. Pause for interpretation. Avoid jargon and idioms.",
        "Ask her privately whether she wants Arun in the room.",
        "Use teach back to check understanding.",
      ],
      rubric: ["ic-c2", "ic-c3"],
      next: "s-daughter",
    },
    {
      kind: "say",
      id: "s-daughter",
      phase: "The daughter arrives",
      text:
        "Priya arrives, out of breath. Before you can speak she says: 'Please do not tell her about all the risks. She will panic and refuse. In our family I make these decisions. Give me the form and I will sign it.'",
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "Family request",
      prompt: "How do you respond to Priya?",
      seconds: 75,
      modelAnswer: [
        "Acknowledge her worry and her role in the family.",
        "Explain that her mother is capable, so the decision is legally her mother's.",
        "A substitute decision maker only decides when the patient is incapable.",
        "Ask Mrs. Sivakumar, through the interpreter, how much she wants to know and who she wants involved.",
        "Invite Priya to stay and support her mother. Keep the professional interpreter on the line.",
      ],
      rubric: ["ic-p1", "ic-c4"],
      choices: [
        {
          id: "c-ask-patient",
          label: "I thanked Priya, explained her mother is capable and must give her own consent, then asked her mother through Meena how much she wanted to know and whether she wanted Priya involved.",
          next: "q-consent",
          quality: "strong",
          feedback:
            "This respects the family and the law. Asking the patient how she wants information shared is the culturally safe move. Some patients do choose to defer to family. That must be her choice, made through a professional interpreter, not the family's.",
        },
        {
          id: "c-priya-signs",
          label: "I let Priya sign the consent as next of kin since she is the family decision maker.",
          next: "s-priya-signs",
          quality: "unsafe",
          feedback:
            "Under the Health Care Consent Act a substitute decision maker only acts when the patient is incapable. Mrs. Sivakumar is capable. Consent from Priya is not valid consent for her mother.",
        },
        {
          id: "c-priya-interprets",
          label: "I hung up with the phone interpreter and let Priya interpret, since she is fluent and it is faster.",
          next: "s-priya-interprets",
          quality: "partial",
          feedback:
            "Family interpreters filter and soften, especially when they have a view on the decision. Priya has just told you she wants risks withheld. Keep the professional interpreter for consent. Priya can still be present to support.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-priya-signs",
      phase: "In the procedure room",
      text:
        "The charge nurse sees the form and says the hospital policy does not allow a relative to consent for a capable adult. The respiratory therapist will not start until consent is sorted out. You go back to Mrs. Sivakumar with Meena on the line.",
      next: "q-consent",
    },
    {
      kind: "say",
      id: "s-priya-interprets",
      phase: "A few minutes later",
      text:
        "The nurse, who speaks some Tamil, tells you Priya said to her mother, 'It is nothing, just sign.' Mrs. Sivakumar looks confused. You reconnect to the phone interpreter service.",
      next: "q-consent",
    },
    {
      kind: "question",
      id: "q-consent",
      phase: "Informed consent",
      prompt:
        "Through Meena, Mrs. Sivakumar says she wants to hear everything and wants Priya to stay. Obtain her consent for procedural sedation and closed reduction. What must you cover for the consent to be valid in Ontario?",
      seconds: 120,
      modelAnswer: [
        "Nature of the treatment. Medicine to make her sleepy, then pulling the ankle back into place and a splint.",
        "Expected benefit. Restores blood flow to the foot, protects the skin, relieves pain.",
        "Material risks and side effects. Low oxygen or breathing pauses, vomiting and aspiration, low blood pressure, agitation on waking, the reduction may not hold.",
        "Alternatives. Reduction with analgesia or a local block alone, or going to the operating room.",
        "Consequences of no treatment. Skin breakdown and loss of the foot.",
        "Answer her questions. She must be capable and the consent voluntary.",
      ],
      rubric: ["ic-a2", "ic-p2", "ic-m2"],
      next: "s-question",
    },
    {
      kind: "say",
      id: "s-question",
      phase: "Her question",
      text:
        "Mrs. Sivakumar asks, through Meena, whether the sleeping medicine will make her confused like after her gallbladder operation. She ate rice about 2 hours ago. She agrees to go ahead once her question is answered.",
      next: "q-sedation",
    },
    {
      kind: "question",
      id: "q-sedation",
      phase: "Sedation plan",
      prompt: "Answer her question and tell me your sedation plan. Does the meal 2 hours ago change anything?",
      seconds: 75,
      modelAnswer: [
        "Honest answer. Brief confusion on waking can happen but a short sedation is not the same as a general anesthetic.",
        "A recent meal is not a reason to delay a limb threatening reduction. Use the lightest effective depth.",
        "Propofol in small boluses such as 0.5 mg/kg then 0.25 mg/kg, or ketamine 1 mg/kg IV with a plan for emergence reactions.",
        "Respiratory therapist, capnography, suction, airway equipment, dedicated monitoring nurse.",
        "Keep the interpreter available for waking and discharge.",
      ],
      rubric: ["ic-m3"],
      next: "s-drop",
    },
    {
      kind: "say",
      id: "s-drop",
      phase: "An examiner probe",
      text:
        "The reduction goes well. The foot pinks up. The examiner then asks you to imagine a different night. " +
        "The phone interpreter line is down across the region. No Tamil speaking staff are in the building. The foot has lost its Doppler signal. The grandson is the only one present.",
      next: "q-exception",
    },
    {
      kind: "question",
      id: "q-exception",
      phase: "Emergency without an interpreter",
      prompt: "What would you do, and what is your legal basis?",
      seconds: 90,
      modelAnswer: [
        "This is an emergency. Serious bodily harm is likely without prompt treatment.",
        "Health Care Consent Act section 25 allows treatment of an apparently capable person when a language barrier prevents consent.",
        "Conditions. Reasonable steps to find a means of communication have failed, delay would prolong suffering or risk serious harm, and there is no reason to think she would refuse.",
        "Use Arun for comfort and simple explanation, not as the source of consent.",
        "Treat only what is needed for the emergency. Keep trying to find an interpreter.",
        "Document the emergency, the steps taken to find an interpreter and why treatment could not wait.",
      ],
      rubric: ["ic-p3", "ic-l1"],
      choices: [
        {
          id: "c-s25",
          label: "I would reduce the ankle under the emergency provision for a language barrier, after documenting the failed attempts to find an interpreter, and keep trying to reach one.",
          next: "q-after",
          quality: "strong",
          feedback:
            "Correct. Section 25 of the Health Care Consent Act covers exactly this. The record must show the emergency, the steps taken and why delay was unsafe. Treatment is limited to the emergency, and efforts to communicate continue.",
        },
        {
          id: "c-wait",
          label: "I would wait for the interpreter line to come back, however long it takes.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "Consent matters, but so does the foot. A foot with no Doppler signal and tented skin cannot wait hours. Waiting risks skin necrosis and limb loss. The law provides for emergency treatment when communication is impossible despite reasonable efforts.",
        },
        {
          id: "c-arun-consent",
          label: "I would ask Arun to give consent on her behalf as the family member present.",
          next: "s-arun-consent",
          quality: "partial",
          feedback:
            "The foot gets treated, but on the wrong legal basis. Arun is not her substitute decision maker, and she is capable. His agreement adds nothing legally and burdens a child. The correct basis is the emergency provision, documented in the chart.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "The examiner continues",
      text: "The examiner tells you the line is restored after 3 hours. By then the skin over the medial malleolus has turned dark and blistered. Orthopedics now worries about skin necrosis and infection.",
      next: "q-after",
    },
    {
      kind: "say",
      id: "s-arun-consent",
      phase: "The examiner continues",
      text:
        "The examiner asks what law gives a 15 year old grandson authority to consent for a capable adult. There is none. You would still need to rely on the emergency provision.",
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "Back to tonight",
      prompt: "She is awake and comfortable. What do you do before she leaves your care, and what do you document?",
      seconds: 90,
      modelAnswer: [
        "Repeat neurovascular exam and post reduction X ray. Well padded splint and elevation.",
        "Refer to orthopedics for fixation. This fracture is unstable.",
        "Explain the results and plan through the interpreter again, with teach back.",
        "Give written instructions in Tamil if available, and a plan for how to reach care if the foot changes.",
        "Document the interpreter's name or ID, who was present, the consent discussion and her decision.",
        "Flag the chart for a Tamil interpreter at every future encounter.",
      ],
      rubric: ["ic-a3", "ic-d1", "ic-d2", "ic-l2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "Orthopedics admits her for fixation in the morning. Priya thanks you for including her mother. Arun asks if he did something wrong. You tell him he helped a great deal. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ic-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes a limb threatening fracture dislocation with vascular compromise and skin at risk.",
      points: 2,
      teaching: "A dusky foot with tented skin needs reduction within minutes to hours. Urgency shapes the consent approach.",
      source: "hcca",
    },
    {
      id: "ic-a2",
      competency: "assessment",
      criterion: "approach",
      text: "Assesses capacity through the interpreter. Understands the information and appreciates the consequences.",
      points: 2,
      teaching: "Capacity in Ontario means able to understand the relevant information and appreciate the foreseeable consequences of a decision. A language barrier is not incapacity.",
      source: "hcca",
    },
    {
      id: "ic-a3",
      competency: "assessment",
      criterion: "data",
      text: "Repeats the neurovascular exam and imaging after reduction.",
      points: 1,
      teaching: "Confirm the pulse, capillary refill and joint position after every reduction. Document them.",
      source: "green-sedation",
    },
    {
      id: "ic-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives IV analgesia promptly while arranging an interpreter.",
      points: 1,
      teaching: "A language barrier should never delay pain relief. Fentanyl about 1 mcg/kg IV is a reasonable start.",
      source: "green-sedation",
    },
    {
      id: "ic-m2",
      competency: "management",
      criterion: "plan",
      text: "Offers realistic alternatives such as reduction under analgesia or a block, or operative reduction.",
      points: 1,
      teaching: "Alternatives are a required part of informed consent. Name them even when one option is clearly best.",
      source: "hcca",
    },
    {
      id: "ic-m3",
      competency: "management",
      criterion: "plan",
      text: "Plans safe sedation and does not delay a limb threatening reduction for fasting time.",
      points: 2,
      teaching: "Recent food intake is not a reason to delay urgent procedural sedation. Choose the lightest effective depth and be ready to manage the airway.",
      source: "green-sedation",
    },
    {
      id: "ic-c1",
      competency: "communication",
      criterion: "plan",
      text: "Requests a professional interpreter immediately and limits the grandson to simple immediate facts.",
      points: 3,
      critical: true,
      teaching: "Ad hoc interpreters, especially children, make more errors with clinical consequences. Professional interpreters improve understanding and outcomes.",
      source: "flores",
    },
    {
      id: "ic-c2",
      competency: "communication",
      criterion: "plan",
      text: "Briefs the interpreter and speaks directly to the patient in short first person sentences.",
      points: 2,
      teaching: "A short pre brief sets the purpose and asks for verbatim interpretation. Talk to the patient, not about her.",
      source: "karliner",
    },
    {
      id: "ic-c3",
      competency: "communication",
      criterion: "plan",
      text: "Uses teach back to confirm understanding.",
      points: 1,
      teaching: "Ask the patient to explain the plan in her own words. Nodding is not understanding.",
      source: "karliner",
    },
    {
      id: "ic-c4",
      competency: "communication",
      criterion: "plan",
      text: "Keeps the professional interpreter for consent rather than switching to a family member.",
      points: 2,
      teaching: "Family members filter information, most of all when they hold a view on the decision.",
      source: "flores",
    },
    {
      id: "ic-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Does not accept consent from a relative for a capable patient and asks the patient how she wants information shared.",
      points: 3,
      critical: true,
      teaching: "A substitute decision maker acts only when the patient is incapable. A capable patient may choose to involve family, but the choice is hers.",
      source: "hcca",
    },
    {
      id: "ic-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Covers the Health Care Consent Act elements. Nature, benefits, material risks, side effects, alternatives and consequences of no treatment, with answers to her questions.",
      points: 3,
      critical: true,
      teaching: "Consent in Ontario must relate to the treatment, be informed, be voluntary and not be obtained by misrepresentation.",
      source: "hcca",
    },
    {
      id: "ic-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "States the emergency treatment provision for a language barrier and its conditions.",
      points: 2,
      teaching: "Section 25 allows emergency treatment of an apparently capable person when a language barrier blocks consent, reasonable steps have failed and delay risks serious harm.",
      source: "hcca",
    },
    {
      id: "ic-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Documents the emergency, the attempts to find an interpreter and the reasons for proceeding when the emergency provision is used.",
      points: 1,
      teaching: "The chart must show why treatment could not wait and what was tried. Continue efforts to communicate.",
      source: "cpso-consent",
    },
    {
      id: "ic-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Documents the interpreter's name or ID and flags the chart for interpreter needs in future encounters.",
      points: 1,
      teaching: "Recording the interpreter supports the validity of consent. A chart flag protects the next team.",
      source: "cpso-consent",
    },
    {
      id: "ic-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges orthopedic follow up or admission for fixation of the unstable fracture.",
      points: 1,
      teaching: "A trimalleolar fracture dislocation is unstable and usually needs operative fixation.",
      source: "green-sedation",
    },
    {
      id: "ic-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Gives discharge or admission information through the interpreter with written instructions in her language where available.",
      points: 1,
      teaching: "Understanding at the end of the visit matters as much as at consent. Return precautions must be understood.",
      source: "karliner",
    },
  ],
  sources: [
    {
      id: "hcca",
      citation: "Government of Ontario. Health Care Consent Act, 1996. S.O. 1996, c. 2, Sched. A.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
    {
      id: "cpso-consent",
      citation: "College of Physicians and Surgeons of Ontario. Policy. Consent to Treatment.",
      url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Consent-to-Treatment",
    },
    {
      id: "flores",
      citation: "Flores G, et al. Errors in medical interpretation and their potential clinical consequences in pediatric encounters. Pediatrics. 2003.",
    },
    {
      id: "karliner",
      citation: "Karliner LS, et al. Do professional interpreters improve clinical care for patients with limited English proficiency? A systematic review of the literature. Health Services Research. 2007.",
    },
    {
      id: "green-sedation",
      citation: "Green SM, et al. Unscheduled procedural sedation. A multidisciplinary consensus practice guideline. Annals of Emergency Medicine. 2019.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
