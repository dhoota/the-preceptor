// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const infantNonaccidentalInjury: OralCase = {
  id: "infant-nonaccidental-injury",
  title: "A fussy baby who cries when changed",
  blueprint: "peds",
  priorityTopic: "abuse-domestic",
  keyFeatures: [
    { topic: "abuse-domestic", n: 2 },
    { topic: "abuse-domestic", n: 3 },
    { topic: "abuse-domestic", n: 5 },
    { topic: "abuse-domestic", n: 6 },
    { topic: "msk", n: 2 },
  ],
  summary: "A 4 month old is brought in late at night because she has been crying and seems sore when her diaper is changed.",
  durationMinutes: 15,
  stem:
    "You are working evenings in a community emergency department in Ontario. There is a pediatrician on call, a CT scanner and X ray on site. The regional children's hospital with a child protection team is 45 minutes away. " +
    "Lily Bouchard is 4 months old. Her mother and her mother's partner bring her in at 23:10 because she has been fussy for two days and screams when her diaper is changed. " +
    "Triage vitals: heart rate 158, respiratory rate 36, SpO2 99 percent on room air, temperature 36.9 degrees C, capillary glucose 5.4 mmol/L. Weight 6.1 kg. CTAS 3. " +
    "The triage nurse says: 'Mom's partner says she rolled off the change table two days ago. Her right thigh looks swollen. I also noticed a small bruise on her left ear. They seem in a hurry.'",
  findings: [
    {
      id: "history",
      label: "History of the fall",
      result:
        "The partner says he was changing her on a change table about 1 m high, turned to get a diaper and she rolled onto a carpeted floor. She cried right away and settled. " +
        "The mother was at work. They did not bring her in because she seemed fine. Later the mother says the fall happened yesterday, not two days ago.",
    },
    {
      id: "development",
      label: "Development",
      result: "Holds her head up. Not yet rolling from back to front according to her mother. Not sitting. Not crawling.",
    },
    {
      id: "skin",
      label: "Full skin exam",
      result:
        "A 1 cm purple bruise on the back of the left pinna. A 1.5 cm faint bruise over the left lower ribs. No petechiae. No patterned marks. Frenulum intact. No burns.",
    },
    {
      id: "limb",
      label: "Limb exam",
      result: "Swelling of the right mid thigh. She cries with any movement of the right leg. Foot warm and pink. Other limbs normal.",
    },
    {
      id: "neuro",
      label: "Head and neuro exam",
      result: "Anterior fontanelle soft and flat. Head circumference at the 85th percentile, up from the 50th at 2 months. Alert, consolable, moves other limbs well. No scalp swelling.",
    },
    {
      id: "femur-xray",
      label: "Right femur X ray",
      result: "Spiral fracture of the mid shaft of the right femur with mild displacement. No periosteal new bone. Normal bone density.",
    },
    {
      id: "skeletal-survey",
      label: "Skeletal survey",
      result:
        "Healing fractures of the posterior left 5th, 6th and 7th ribs with callus. A classic metaphyseal lesion of the distal left tibia. Right femur fracture as above.",
    },
    {
      id: "ct-head",
      label: "CT head",
      result: "Thin subdural collections over the right convexity and along the falx, of mixed density. No mass effect. No skull fracture.",
    },
    {
      id: "labs",
      label: "Blood and urine tests",
      result:
        "Hemoglobin 101 g/L. Platelets 344 x 10^9/L. INR 1.0. PTT 31 seconds. Fibrinogen normal. AST 62 U/L. ALT 38 U/L. Lipase normal. " +
        "Calcium, phosphate, alkaline phosphatase and 25 hydroxy vitamin D normal. Urinalysis negative for blood.",
    },
    {
      id: "social",
      label: "Household",
      result: "Mother, her partner, Lily and a 20 month old half brother who is at home with his grandmother tonight. No known prior child protection involvement.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the assessment room",
      text: "Lily is crying on her mother's lap. The partner is pacing and asks how long this will take because they just need something for the pain.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "What are your first priorities, and what in this story concerns you?",
      seconds: 90,
      modelAnswer: [
        "Treat pain: acetaminophen 15 mg/kg, so about 90 mg, and IV morphine 0.05 mg/kg, so about 0.3 mg, titrated on a monitor. Splint the thigh. Avoid ibuprofen under 6 months.",
        "Full undressed skin exam, including ears, frenulum and genitals.",
        "A femur fracture in a non ambulatory infant is highly concerning for abuse.",
        "Bruising on the ear and torso is a positive TEN 4 FACESp screen at any age under 4 years. At 4 months, any bruise at all is positive.",
        "The history changes, does not fit her development and there was a delay in seeking care.",
        "Document the history in the caregivers' own words, with times and who said what.",
      ],
      rubric: ["na-m1", "na-a1", "na-p1"],
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Investigations",
      prompt: "The femur X ray shows a spiral mid shaft fracture. What else do you order and why?",
      seconds: 90,
      modelAnswer: [
        "Full skeletal survey now and a repeat in about 2 weeks.",
        "Neuroimaging even though she looks well neurologically. CT head tonight, MRI later.",
        "Dilated retinal exam by ophthalmology.",
        "CBC, INR, PTT and fibrinogen to exclude a bleeding disorder.",
        "AST, ALT and lipase for occult abdominal injury. Urinalysis for blood.",
        "Calcium, phosphate, alkaline phosphatase and vitamin D for metabolic bone disease.",
      ],
      rubric: ["na-a2", "na-a3"],
      choices: [
        {
          id: "c-full",
          label: "I ordered a skeletal survey, CT head, ophthalmology exam, coagulation studies, liver enzymes, lipase, urinalysis and bone labs.",
          next: "q-ddx",
          quality: "strong",
          feedback:
            "This is the full evaluation the examiner wanted. Occult injuries are common in infants with one abusive injury. Head imaging is needed in infants under 6 months even with a normal exam.",
        },
        {
          id: "c-ortho-only",
          label: "I called orthopedics about the femur and ordered a CBC.",
          next: "s-ortho-only",
          quality: "partial",
          feedback:
            "The femur is only the injury you can see. Skeletal survey and head imaging are required in any infant with a suspicious fracture. They often find injuries that change the whole picture.",
        },
        {
          id: "c-spica",
          label: "I arranged a spica cast with orthopedics and planned fracture clinic follow up.",
          next: "s-ortho-only",
          quality: "unsafe",
          feedback:
            "Treating the fracture and sending her home misses the most important diagnosis. A non ambulatory infant with a femur fracture and bruises needs a full abuse evaluation and a report before discharge.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ortho-only",
      phase: "An hour later",
      text: "The orthopedic resident calls back. She says a spiral femur fracture in a 4 month old is not something she would treat without a skeletal survey and a child protection assessment. You order the full workup.",
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Results",
      prompt: "The skeletal survey shows healing posterior rib fractures and a classic metaphyseal lesion. CT shows mixed density subdural collections. What is your interpretation, and what other diagnoses must you exclude?",
      seconds: 75,
      modelAnswer: [
        "Multiple injuries of different ages. Highly specific for physical abuse, including abusive head trauma.",
        "Posterior rib fractures and classic metaphyseal lesions are highly specific for abuse in infants.",
        "Exclude osteogenesis imperfecta, rickets and metabolic bone disease.",
        "Exclude a bleeding disorder. Consider glutaric aciduria type 1 as a rare cause of subdural collections.",
        "Normal bone labs, coagulation and bone density make these unlikely.",
      ],
      rubric: ["na-a4"],
      next: "q-report",
    },
    {
      kind: "question",
      id: "q-report",
      phase: "Duty to report",
      prompt: "When do you report, to whom, and can someone else do it for you?",
      seconds: 75,
      modelAnswer: [
        "Report now, before the workup is complete. The threshold is reasonable grounds to suspect, not proof.",
        "Report directly to the local Children's Aid Society under section 125 of the Child, Youth and Family Services Act.",
        "The duty is personal. It cannot be delegated to a social worker or nurse, though they can help.",
        "It is an ongoing duty. Report again if new information emerges.",
        "Document the report, the time and the worker's name.",
        "The report is protected from liability unless made maliciously or without reasonable grounds.",
      ],
      rubric: ["na-p2", "na-p3"],
      choices: [
        {
          id: "c-report-now",
          label: "I called the Children's Aid Society myself as soon as I had reasonable grounds to suspect, before all the results were back, and documented the call.",
          next: "q-parents",
          quality: "strong",
          feedback:
            "Correct. Suspicion, not certainty, triggers the duty. The duty is yours and cannot be passed on. Reporting early lets the CAS assess the sibling at home tonight.",
        },
        {
          id: "c-social-work",
          label: "I asked the hospital social worker to make the report in the morning.",
          next: "s-delay",
          quality: "partial",
          feedback:
            "Social work can support you but the CYFSA requires the person with the suspicion to report directly. Waiting until morning also leaves a 20 month old sibling in the same home unassessed.",
        },
        {
          id: "c-wait",
          label: "I decided to wait until the child protection team confirmed abuse before reporting.",
          next: "s-delay",
          quality: "unsafe",
          feedback:
            "The law does not require proof. Waiting for confirmation delays protection for Lily and her sibling. The threshold is reasonable grounds to suspect.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-delay",
      phase: "Two hours later",
      text: "The pediatrician on call asks whether CAS has been notified. She reminds you that the half brother is at home. You call the CAS after hours line yourself and make the report.",
      next: "q-parents",
    },
    {
      kind: "question",
      id: "q-parents",
      phase: "Talking with the family",
      prompt: "What do you tell the mother and her partner about the results and the report?",
      seconds: 75,
      modelAnswer: [
        "Speak in a private room with another staff member present.",
        "Be honest and factual. Describe the injuries found and that they are not explained by the history given.",
        "Tell them that the law requires a report to the Children's Aid Society when a child has unexplained injuries.",
        "Do not accuse or interrogate. Do not speculate on who caused the injuries.",
        "Explain that Lily needs to stay in hospital for treatment and more tests.",
        "Consider safety for staff and the child. Have security aware.",
      ],
      rubric: ["na-c1"],
      choices: [
        {
          id: "c-honest",
          label: "With a nurse present, I explained the injuries honestly, said the law requires a report for unexplained injuries, did not accuse anyone and explained she needs to stay.",
          next: "s-leave",
          quality: "strong",
          feedback:
            "Good. Transparency is the default. A calm, non accusatory approach keeps the family engaged and protects the investigation. The interview about how it happened belongs to CAS and police.",
        },
        {
          id: "c-accuse",
          label: "I told the partner his story did not make sense and asked him directly whether he had hurt her.",
          next: "s-leave",
          quality: "unsafe",
          feedback:
            "Accusing a caregiver can escalate the situation and put the child and staff at risk. It can also compromise the investigation. Report the facts and let CAS and police interview.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-leave",
      phase: "01:30",
      text:
        "The partner raises his voice. He says the hospital is overreacting and that they are taking Lily home now. The mother starts to pack the diaper bag. The nurse looks at you.",
      next: "q-leave",
    },
    {
      kind: "question",
      id: "q-leave",
      phase: "Attempt to leave",
      prompt: "What do you do?",
      seconds: 75,
      modelAnswer: [
        "Stay calm and speak to them away from the bedside with security nearby.",
        "Explain that Lily has a broken leg and bleeding around the brain and needs care tonight.",
        "Call the CAS back urgently. Under the CYFSA a child protection worker, or a police officer, can bring a child to a place of safety without a warrant when there is a substantial risk to the child.",
        "Call police if they try to leave with her. Do not physically restrain a parent yourself.",
        "Keep Lily in view of staff at all times.",
      ],
      rubric: ["na-l1"],
      choices: [
        {
          id: "c-de-escalate",
          label: "I de-escalated calmly with security present, explained why she must stay, and called CAS back urgently and police when they moved to leave.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Your role is to keep Lily safe and bring in the people with legal authority. Under the CYFSA a child protection worker or police officer can bring a child to a place of safety.",
        },
        {
          id: "c-let-go",
          label: "I told them they could leave because they are her legal guardians, and documented that they left against medical advice.",
          next: "s-let-go",
          quality: "unsafe",
          feedback:
            "An infant with abusive head trauma and a femur fracture cannot be discharged into a possibly unsafe home. Guardianship does not override the child's need for protection. Call CAS and police.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-let-go",
      phase: "A few minutes later",
      text: "The charge nurse stops at the door and calls security. She asks you to call police and the CAS after hours worker. An officer arrives and Lily stays in the department.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Lily is safe in the department. What is your disposition plan, and what about her half brother?",
      seconds: 75,
      modelAnswer: [
        "Transfer to the regional children's hospital with neurosurgery and the child protection team.",
        "Neurosurgery review of the subdural collections. Ophthalmology retinal exam.",
        "Orthopedics for the femur. Pain control.",
        "CAS to assess the 20 month old half brother tonight. He needs a physical exam and a skeletal survey because he is under 2 years.",
        "Careful documentation: verbatim history, body map, photographs per policy and times of every conversation.",
      ],
      rubric: ["na-d1", "na-d2", "na-p1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Lily is transferred to the children's hospital with a CAS worker aware. Her retinal exam shows multilayer hemorrhages. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "na-m1",
      competency: "management",
      criterion: "plan",
      text: "Treats pain promptly with weight based analgesia and splints the fracture.",
      points: 1,
      teaching: "Pain control comes first. In a young infant use acetaminophen and small titrated doses of IV morphine, about 0.05 mg/kg, with monitoring, and splint the limb.",
      source: "aap-abuse",
    },
    {
      id: "na-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Identifies red flags: femur fracture in a non ambulatory infant, bruising in an infant aged 4.99 months or younger, a changing history and delayed presentation.",
      points: 3,
      critical: true,
      teaching: "TEN 4 FACESp flags any bruise in an infant aged 4.99 months or younger. A history that does not match development is a key warning sign.",
      source: "ten4",
    },
    {
      id: "na-a2",
      competency: "assessment",
      criterion: "data",
      text: "Orders a skeletal survey with a repeat in about 2 weeks.",
      points: 2,
      teaching: "Occult fractures are common in abused infants. A follow up survey finds healing fractures that were invisible at first.",
      source: "acr-abuse",
    },
    {
      id: "na-a3",
      competency: "assessment",
      criterion: "data",
      text: "Obtains neuroimaging, a retinal exam, coagulation studies, liver enzymes, lipase, urinalysis and bone labs.",
      points: 2,
      teaching: "Head imaging is indicated in infants under 6 months with suspected abuse even when the exam is normal. Labs look for occult injury and mimics.",
      source: "aap-abuse",
    },
    {
      id: "na-a4",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Interprets posterior rib fractures, classic metaphyseal lesions and mixed density subdurals as highly specific for abuse and excludes mimics.",
      points: 2,
      teaching: "These injuries are rarely accidental in infants. Osteogenesis imperfecta, rickets and bleeding disorders must still be considered.",
      source: "acr-abuse",
    },
    {
      id: "na-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Reports to the Children's Aid Society immediately on reasonable grounds to suspect, without waiting for confirmation.",
      points: 3,
      critical: true,
      teaching: "Under CYFSA section 125 the threshold is reasonable grounds to suspect. Delay can leave other children in the home at risk.",
      source: "cyfsa",
    },
    {
      id: "na-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "States that the duty to report is personal, ongoing and cannot be delegated.",
      points: 2,
      teaching: "Others can help make the call but the professional with the suspicion must report directly. Report again if new information emerges.",
      source: "cyfsa",
    },
    {
      id: "na-c1",
      competency: "communication",
      criterion: "plan",
      text: "Tells the caregivers honestly and without accusation that the injuries are unexplained and a report is required.",
      points: 2,
      teaching: "Transparency is the default. Leave questions about how the injury happened to CAS and police.",
      source: "aap-abuse",
    },
    {
      id: "na-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Prevents unsafe removal of the child by de-escalating, involving security and calling CAS and police.",
      points: 3,
      critical: true,
      teaching: "The physician has no legal power to detain the child. A child protection worker or police officer can bring a child to a place of safety.",
      source: "cyfsa",
    },
    {
      id: "na-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges transfer to a pediatric centre with neurosurgery and a child protection team.",
      points: 2,
      teaching: "Abusive head trauma needs neurosurgical review and a specialized child protection assessment.",
      source: "aap-abuse",
    },
    {
      id: "na-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Ensures siblings are assessed, including a skeletal survey for household children under 2 years.",
      points: 2,
      teaching: "Siblings and other young children in the home have a high rate of occult injury. CAS coordinates their assessment.",
      source: "aap-abuse",
    },
    {
      id: "na-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Documents the history verbatim with times and speakers, plus a body map and photographs per policy.",
      points: 1,
      teaching: "Careful documentation protects the child and supports the investigation. Record what each caregiver said, in their words.",
      source: "aap-abuse",
    },
  ],
  sources: [
    {
      id: "cyfsa",
      citation: "Ontario. Child, Youth and Family Services Act, 2017. Section 125, duty to report, and section 81, place of safety.",
      url: "https://www.ontario.ca/laws/statute/17c14",
    },
    {
      id: "aap-abuse",
      citation: "Christian CW, Committee on Child Abuse and Neglect. The evaluation of suspected child physical abuse. American Academy of Pediatrics clinical report. Pediatrics. 2015.",
    },
    {
      id: "ten4",
      citation: "Pierce MC, et al. Validation of a clinical decision rule to predict abuse in young children based on bruising characteristics. JAMA Netw Open. 2021.",
    },
    { id: "acr-abuse", citation: "American College of Radiology. ACR Appropriateness Criteria. Suspected physical abuse, child." },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
