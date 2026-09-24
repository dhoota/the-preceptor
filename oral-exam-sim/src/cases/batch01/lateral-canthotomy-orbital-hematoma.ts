// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const lateralCanthotomyOrbitalHematoma: OralCase = {
  id: "lateral-canthotomy-orbital-hematoma",
  title: "A fall down the basement stairs",
  blueprint: "procedures",
  alsoCovers: ["trauma", "geri"],
  priorityTopic: "eye",
  keyFeatures: [
    { topic: "eye", n: 2 },
    { topic: "eye", n: 3 },
    { topic: "multiple-trauma", n: 3 },
    { topic: "multiple-trauma", n: 4 },
  ],
  summary: "A 74 year old woman on an anticoagulant has a painful eye after a fall at home.",
  durationMinutes: 13,
  stem:
    "You work in a community emergency department in Ontario. It is 22:00. CT is on site. " +
    "Ophthalmology is on call at the regional centre, 2 hours away by road. There is a lateral canthotomy tray in the department. " +
    "Eleanor Fraser is 74 years old and weighs 64 kg. She takes warfarin for atrial fibrillation. " +
    "At 21:10 she missed a step on her basement stairs and struck the left side of her face on the railing. She did not lose consciousness. " +
    "Her left eye became very painful and swollen within minutes, and she has vomited twice. " +
    "Triage vitals: heart rate 94 and irregular, blood pressure 172/90, respiratory rate 18, SpO2 97 percent on room air, temperature 36.6, glucose 6.8 mmol/L. GCS 15. CTAS 2. " +
    "The nurse says: 'Her left eye is bulging and rock hard. She says everything on that side is blurry.'",
  findings: [
    {
      id: "globe",
      label: "Signs of globe rupture",
      result: "No full thickness laceration. Anterior chamber is deep and formed. Pupil is round. No hyphema. No visible uveal tissue. Seidel test negative.",
    },
    {
      id: "va",
      label: "Visual acuity",
      result: "Right eye 20/30 with glasses. Left eye counting fingers at 1 metre.",
    },
    {
      id: "pupils",
      label: "Pupils",
      result: "Right pupil 3 mm and reactive. Left pupil 4 mm and sluggish. Left relative afferent pupillary defect on the swinging light test.",
    },
    {
      id: "orbit",
      label: "Orbit and eyelids",
      result:
        "Marked left proptosis. Tense eyelids that cannot be separated easily. Firm resistance to gentle retropulsion. 360 degree subconjunctival hemorrhage. Extraocular movements limited in all directions.",
    },
    {
      id: "iop",
      label: "Intraocular pressure",
      result: "Left 58 mmHg. Right 16 mmHg. Measured with a handheld tonometer.",
    },
    {
      id: "rest",
      label: "Rest of the exam",
      result: "Tender left zygoma. No step deformity of the orbital rim. No other injuries. No cervical spine tenderness. Neurological exam otherwise normal.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "INR 3.4. Hemoglobin 124 g/L. Platelets 212 x 10^9/L. Creatinine 92 µmol/L.",
    },
    {
      id: "ct",
      label: "CT head and orbits",
      result:
        "Retrobulbar hematoma in the left orbit with proptosis and stretching of the optic nerve. The posterior globe is tented. Nondisplaced fracture of the left orbital floor. No intracranial hemorrhage.",
    },
    {
      id: "meds",
      label: "Medications and history",
      result: "Warfarin 5 mg daily for atrial fibrillation. No prior stroke. Metoprolol 50 mg twice daily. Ramipril 5 mg daily. Lives alone. Fully independent.",
    },
    {
      id: "post-iop",
      label: "Pressure after the procedure",
      result: "After canthotomy alone: left IOP 44 mmHg. After inferior cantholysis: left IOP 24 mmHg. Left vision improves to 20/100.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute area",
      text:
        "She is sitting up holding a cloth to her left eye. The eye is bulging with tense lids. She says she can see shapes but no detail on the left.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "How do you assess her, and what is your working diagnosis?",
      seconds: 90,
      modelAnswer: [
        "Primary survey. Head and C spine assessment given the fall on warfarin.",
        "Look for globe rupture before pressing on the eye.",
        "Visual acuity in both eyes.",
        "Pupils with a swinging light test for an afferent defect.",
        "Intraocular pressure once rupture is excluded.",
        "Proptosis, tense lids and restricted movement.",
        "Working diagnosis: orbital compartment syndrome from retrobulbar hematoma. It is a clinical diagnosis.",
      ],
      rubric: ["oc-a1", "oc-a2", "oc-a3", "oc-m3"],
      choices: [
        {
          id: "c-exam",
          label: "I excluded globe rupture, then checked acuity, pupils and pressure, and diagnosed orbital compartment syndrome clinically without waiting for CT.",
          next: "q-decide",
          quality: "strong",
          feedback:
            "Correct. Reduced acuity, an afferent defect, proptosis and a pressure of 58 mmHg make the diagnosis. CT should not delay decompression. Checking for globe rupture first prevents harm from tonometry or procedures.",
        },
        {
          id: "c-ct-first",
          label: "I sent her to CT of the head and orbits first before examining the eye in detail.",
          next: "s-ct-first",
          quality: "partial",
          feedback:
            "CT is needed for her head injury on warfarin, but the eye can be examined in two minutes first. The optic nerve and retina tolerate ischemia for only about 90 to 120 minutes. Imaging should not delay a clinical diagnosis.",
        },
        {
          id: "c-patch",
          label: "I applied a pressure patch to limit the swelling and gave analgesia.",
          next: "s-patch",
          quality: "unsafe",
          feedback:
            "Pressure on the eye raises orbital pressure further and speeds optic nerve ischemia. A pressure patch is contraindicated. Use a rigid shield only if you suspect rupture.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct-first",
      phase: "Forty minutes later",
      text:
        "CT shows a retrobulbar hematoma with tenting of the globe. When she returns, her left vision is hand movements only. Her pressure is 60 mmHg.",
      next: "q-decide",
    },
    {
      kind: "say",
      id: "s-patch",
      phase: "Fifteen minutes later",
      text:
        "She says the pain is much worse. The nurse lifts the patch. The left eye now sees only hand movements. You remove the patch and measure the pressure. It is 60 mmHg.",
      next: "q-decide",
    },
    {
      kind: "question",
      id: "q-decide",
      phase: "Decision",
      prompt:
        "You call ophthalmology. The ophthalmologist says: 'Get a CT and send her here. I will see her when she arrives.' That is at least 2 hours. What do you do?",
      seconds: 75,
      modelAnswer: [
        "Indications for decompression are present: IOP over 40 mmHg, reduced acuity, an afferent defect and proptosis.",
        "Retinal ischemia time is short, around 90 to 120 minutes.",
        "A transfer of 2 hours will likely mean permanent vision loss.",
        "Perform lateral canthotomy and cantholysis now.",
        "Ask the ophthalmologist for support by phone.",
        "Medical adjuncts such as acetazolamide, timolol drops and mannitol do not replace decompression.",
      ],
      rubric: ["oc-m1", "oc-c1"],
      choices: [
        {
          id: "c-do-it",
          label: "I explained the findings and time frame, told her I would do a lateral canthotomy and cantholysis now, and asked her to stay on the phone to support me.",
          next: "q-consent",
          quality: "strong",
          feedback:
            "Correct. This is an emergency physician's procedure because the time window is short. Clear communication of the findings usually brings the consultant on side. Transfer comes after decompression.",
        },
        {
          id: "c-transfer",
          label: "I followed the advice and arranged transfer by land ambulance.",
          next: "s-transfer",
          quality: "unsafe",
          feedback:
            "The optic nerve will likely suffer permanent damage during a 2 hour transfer. Decompression must happen here. You are responsible for the patient in front of you.",
        },
        {
          id: "c-meds",
          label: "I gave acetazolamide 500 mg IV, timolol drops and mannitol, and waited to see if the pressure came down.",
          next: "s-transfer",
          quality: "partial",
          feedback:
            "These drugs lower aqueous production and may help a little, but they do not relieve a hematoma in a closed orbit. They are adjuncts. Decompression should not wait for them.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-transfer",
      phase: "Twenty minutes later",
      text:
        "Her pressure is 62 mmHg and she can now only see light. The nurse asks whether the canthotomy tray should come out. You call the ophthalmologist back and tell her you are going ahead.",
      next: "q-consent",
    },
    {
      kind: "question",
      id: "q-consent",
      phase: "Consent",
      prompt: "She is alert. How do you obtain consent, and what would you do if she lacked capacity?",
      seconds: 60,
      modelAnswer: [
        "She is alert with a GCS of 15. Assess capacity. She likely has it.",
        "Explain the procedure, why it is needed now, the benefit to vision, and the risks.",
        "Risks include bleeding, infection, injury to the eye or lacrimal system, and a change in eyelid shape.",
        "The alternative is likely permanent vision loss.",
        "If she lacked capacity and no substitute decision maker was reachable, the emergency treatment provisions of the Ontario Health Care Consent Act would apply.",
        "Document the discussion.",
      ],
      rubric: ["oc-p1"],
      next: "q-procedure",
    },
    {
      kind: "question",
      id: "q-procedure",
      phase: "The procedure",
      prompt: "Walk me through the procedure step by step.",
      seconds: 120,
      modelAnswer: [
        "Clean the area. Protect the globe.",
        "Inject 1 to 2 mL of lidocaine 1 or 2 percent with epinephrine into the lateral canthus, directed away from the globe.",
        "Clamp the lateral canthus with a hemostat for 1 to 2 minutes to crush the tissue and reduce bleeding.",
        "Cut the canthus horizontally with blunt tip scissors about 1 cm toward the orbital rim.",
        "Pull the lower lid down and away. Strum the tissue to find the inferior crus of the lateral canthal tendon.",
        "Cut the inferior crus with scissors pointed down and away from the eye.",
        "The lower lid should now move freely. Recheck the pressure.",
      ],
      rubric: ["oc-r1"],
      next: "s-post",
    },
    {
      kind: "say",
      id: "s-post",
      phase: "22:40",
      text:
        "You clamp and cut the lateral canthus. Some blood drains. You recheck the pressure. It is 44 mmHg. Her vision is still counting fingers.",
      next: "q-still-high",
    },
    {
      kind: "question",
      id: "q-still-high",
      phase: "Pressure still high",
      prompt: "The pressure is still 44 mmHg. Why, and what do you do?",
      seconds: 60,
      modelAnswer: [
        "Canthotomy alone is rarely enough. The canthal tendon still tethers the lid.",
        "Check that the inferior crus is cut. The lower lid should fall away freely.",
        "Strum and cut the inferior crus.",
        "If the pressure stays over 40, cut the superior crus.",
        "Recheck acuity and pressure.",
      ],
      rubric: ["oc-r2"],
      choices: [
        {
          id: "c-cantholysis",
          label: "I strummed the lower lid, found the inferior crus still attached, cut it and rechecked the pressure.",
          next: "q-reverse",
          quality: "strong",
          feedback:
            "Correct. The cantholysis is the part that releases the orbit. A lower lid that falls away freely tells you the inferior crus is cut. The pressure now falls to 24 mmHg.",
        },
        {
          id: "c-stop",
          label: "I stopped because I had made the cut and started the transfer.",
          next: "s-stop",
          quality: "unsafe",
          feedback:
            "A pressure of 44 mmHg is still too high for the optic nerve. Canthotomy without cantholysis does little. You must complete the inferior cantholysis and recheck.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stop",
      phase: "Ten minutes later",
      text:
        "The ophthalmologist on the phone asks for the new pressure. When you tell her 44 mmHg, she asks if the lower lid moves freely. It does not. You complete the inferior cantholysis. The pressure falls to 24 mmHg.",
      next: "q-reverse",
    },
    {
      kind: "question",
      id: "q-reverse",
      phase: "Anticoagulation",
      prompt: "Her INR is 3.4. Will you reverse her warfarin? With what, and at what dose?",
      seconds: 75,
      modelAnswer: [
        "Yes. Bleeding into the orbit threatening vision is bleeding at a critical site.",
        "Vitamin K 10 mg IV by slow infusion.",
        "Four factor prothrombin complex concentrate now. For INR 3 to 5 the Canadian NAC dose is 2000 IU, which is 80 mL.",
        "Recheck the INR right after the PCC is in.",
        "Stroke risk from stopping anticoagulation is short term and small compared with vision loss.",
      ],
      rubric: ["oc-m2"],
      choices: [
        {
          id: "c-pcc",
          label: "I gave vitamin K 10 mg IV and four factor PCC 2000 IU for her INR of 3.4, then rechecked the INR.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Four factor PCC corrects the INR within minutes. Vitamin K keeps it corrected after the PCC wears off. This is a critical site bleed.",
        },
        {
          id: "c-plasma",
          label: "I gave 4 units of plasma and held the warfarin.",
          next: "s-plasma",
          quality: "partial",
          feedback:
            "Plasma works slowly, needs thawing and carries a large volume. PCC is preferred in Canada for urgent warfarin reversal. Vitamin K is needed for lasting effect.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-plasma",
      phase: "One hour later",
      text:
        "The plasma is still thawing. The blood bank calls to ask whether you want PCC instead. You order PCC and vitamin K 10 mg IV.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Her pressure is 24 mmHg and her vision is improving. Her daughter arrives, upset that you cut her mother's eyelid without an eye specialist. What do you say, and what is your disposition plan?",
      seconds: 90,
      modelAnswer: [
        "Acknowledge her concern. Explain what happened and why it could not wait.",
        "Her mother consented and her vision is already better.",
        "The eyelid usually heals well. The ophthalmologist may repair it later.",
        "Transfer to ophthalmology at the regional centre through CritiCall for definitive care.",
        "Serial pressure and acuity checks until transfer. Head of bed up. Antiemetic. Analgesia.",
        "Plan for anticoagulation to be restarted with the ophthalmologist and her physician.",
      ],
      rubric: ["oc-c2", "oc-d1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is transferred to ophthalmology at 00:30. Her final left vision is 20/40. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "oc-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Excludes globe rupture before tonometry or procedures.",
      points: 2,
      teaching: "Tonometry or canthotomy on a ruptured globe can extrude eye contents. Check for rupture signs first.",
      source: "roberts",
    },
    {
      id: "oc-a2",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Diagnoses orbital compartment syndrome clinically from reduced acuity, an afferent pupillary defect, proptosis and raised intraocular pressure.",
      points: 3,
      critical: true,
      teaching: "Orbital compartment syndrome is a clinical diagnosis. Do not wait for CT when the findings are present.",
      source: "roberts",
    },
    {
      id: "oc-a3",
      competency: "assessment",
      criterion: "data",
      text: "Obtains CT head as well as orbits because she is anticoagulated after a fall with a facial strike.",
      points: 1,
      teaching: "Patients on warfarin were excluded from the Canadian CT Head Rule. Anticoagulated older adults with head trauma need a low threshold for CT.",
      source: "cthr",
    },
    {
      id: "oc-m3",
      competency: "management",
      criterion: "plan",
      text: "Avoids any pressure on the eye, and gives an antiemetic and analgesia with the head of the bed raised.",
      points: 1,
      teaching: "Vomiting and pain raise orbital venous pressure. A pressure patch worsens ischemia and is contraindicated.",
      source: "roberts",
    },
    {
      id: "oc-m1",
      competency: "management",
      criterion: "plan",
      text: "Performs decompression in the department rather than delaying for transfer or medical therapy.",
      points: 3,
      critical: true,
      teaching: "Retinal ischemia can become permanent after about 90 to 120 minutes. Acetazolamide, timolol and mannitol are adjuncts only.",
      source: "roberts",
    },
    {
      id: "oc-c1",
      competency: "communication",
      criterion: "plan",
      text: "Communicates the findings and time pressure to ophthalmology and asks for support.",
      points: 1,
      teaching: "Lead with acuity, pupils and the pressure number. Consultants act on objective findings.",
      source: "roberts",
    },
    {
      id: "oc-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Obtains informed consent, and knows the emergency treatment provisions of the Health Care Consent Act if capacity is lacking.",
      points: 1,
      teaching: "In Ontario, treatment can proceed without consent in an emergency when the person lacks capacity and a delay would cause serious harm.",
      source: "hcca",
    },
    {
      id: "oc-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Describes the procedure: local anesthetic with epinephrine, hemostat crush, lateral canthotomy, then inferior cantholysis.",
      points: 2,
      teaching: "Crushing the canthus reduces bleeding. The inferior crus is found by strumming and cut with the scissor tips pointed away from the globe.",
      source: "roberts",
    },
    {
      id: "oc-r2",
      competency: "resuscitation",
      criterion: "data",
      text: "Recognizes incomplete release when the pressure stays over 40 mmHg and completes the inferior cantholysis.",
      points: 3,
      critical: true,
      teaching: "Canthotomy alone rarely releases the orbit. A freely mobile lower lid confirms the inferior crus is cut.",
      source: "roberts",
    },
    {
      id: "oc-m2",
      competency: "management",
      criterion: "plan",
      text: "Reverses warfarin with four factor PCC, 2000 IU for an INR of 3 to 5, and vitamin K 10 mg IV, and rechecks the INR.",
      points: 2,
      teaching: "PCC corrects the INR within minutes. Vitamin K sustains the effect. Plasma is slower and less effective. Canadian INR based dosing is 1000 IU under 3, 2000 IU for 3 to 5 and 3000 IU over 5.",
      source: "nac-pcc",
    },
    {
      id: "oc-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains the urgency and outcome to the daughter with empathy and without defensiveness.",
      points: 1,
      teaching: "Families are reassured by a clear explanation of why a procedure could not wait and what it achieved.",
      source: "roberts",
    },
    {
      id: "oc-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges transfer to ophthalmology with serial pressure and acuity checks and a plan for anticoagulation.",
      points: 2,
      teaching: "Rebleeding can raise the pressure again. Serial checks until handover catch it early.",
      source: "atls",
    },
  ],
  sources: [
    {
      id: "roberts",
      citation: "Roberts JR, Custalow CB, Thomsen TW, editors. Roberts and Hedges' Clinical Procedures in Emergency Medicine and Acute Care. 7th edition. 2019.",
    },
    {
      id: "atls",
      citation: "American College of Surgeons. Advanced Trauma Life Support. Student course manual. 10th edition. 2018.",
    },
    {
      id: "nac-pcc",
      citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022.",
      url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada",
    },
    {
      id: "cthr",
      citation: "Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet. 2001.",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
