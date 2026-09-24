// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const necrotizingSoftTissueInfection: OralCase = {
  id: "necrotizing-soft-tissue-infection",
  title: "Leg pain after a scrape",
  blueprint: "id",
  alsoCovers: ["resus", "systems"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [
    { topic: "infectious-diseases", n: 2 },
    { topic: "infectious-diseases", n: 4 },
    { topic: "infectious-diseases", n: 8 },
    { topic: "infectious-diseases", n: 10 },
  ],
  summary: "A 38 year old woman returns with worsening leg pain a day after a walk in clinic started oral antibiotics.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in a mid sized Ontario city when the following patient arrives. " +
    "There is general surgery on call but no plastic surgery on site. " +
    "A 38 year old woman arrives with worsening pain in her left leg after a walk in clinic diagnosed cellulitis yesterday.",
  card: {
    vitals: {
      temperature: "38.8°C",
      pulse: "122/minute",
      resp: "24/minute",
      bp: "96/58 mmHg",
      o2sat: "97% on room air",
      weight: "80 kg (176 lb)",
    },
    medications: "Cephalexin from a walk in clinic, ibuprofen",
    allergies: "No allergies",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "She scraped her left shin on a dock four days ago. Yesterday a walk in clinic diagnosed cellulitis and started cephalexin 500 mg four times daily. Today the pain is much worse and she vomited twice. She has been taking ibuprofen 600 mg every 6 hours. At triage she was CTAS 2 with a capillary glucose of 7.2 mmol/L. The triage note reads: 'Failed outpatient cellulitis. Pain 10 out of 10.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A 220 bed hospital. There is general surgery on call, an ICU, CT and MRI. There is no plastic surgery on site.",
    },
    {
      id: "leg",
      label: "Leg exam",
      result:
        "Healing 4 cm abrasion over the left anterior shin. Poorly defined erythema from the ankle to just below the knee. Tense, woody swelling that extends beyond the red area. " +
        "Exquisite tenderness beyond the margin of erythema. A 2 cm dusky purple bulla on the lateral calf. Reduced light touch sensation over the bulla. No crepitus. Distal pulses present.",
    },
    {
      id: "marking",
      label: "Marked border over time",
      result: "The nurse marked the edge of the erythema at triage. Ninety minutes later the redness has spread 5 cm above the line.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 19.6 x 10^9/L with 22 percent bands. Hemoglobin 124 g/L. Platelets 118 x 10^9/L. Sodium 130 mmol/L. Creatinine 158 µmol/L. Glucose 7.2 mmol/L. " +
        "CRP 312 mg/L. CK 2,480 U/L. Lactate 4.4 mmol/L. Albumin 26 g/L. INR 1.4.",
    },
    {
      id: "lrinec",
      label: "LRINEC score",
      result: "CRP 4 points. WBC 1 point. Hemoglobin 1 point. Sodium 2 points. Creatinine 2 points. Glucose 0 points. Total 10.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound of the leg",
      result: "Subcutaneous thickening with cobblestoning. Fluid layer of 4 mm along the deep fascia. No air artefact.",
    },
    {
      id: "xray",
      label: "Plain X ray of the leg",
      result: "Soft tissue swelling. No soft tissue gas. No fracture or foreign body.",
    },
    {
      id: "history",
      label: "Past history and contacts",
      result:
        "No medical conditions. No medications except the cephalexin and ibuprofen. No allergies. No injection drug use. Her 6 year old son had strep throat last week. She lives with her husband and two children.",
    },
    {
      id: "skin",
      label: "Skin and mucous membranes",
      result: "Faint diffuse redness over her trunk that blanches. Mildly injected conjunctivae. No petechiae.",
    },
    {
      id: "cultures",
      label: "Blood cultures",
      result: "Two sets drawn. At 10 hours the lab calls: gram positive cocci in chains in both sets.",
    },
    {
      id: "or",
      label: "Operative findings",
      result: "Grey necrotic fascia from ankle to knee. Dishwater fluid. Fascia separates easily from muscle. Tissue sent for Gram stain and culture.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute area",
      text: "She is pale and sweating and gripping the rail. She says: 'It feels like my leg is going to burst. The pills did nothing.'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First impression",
      prompt: "Is this failed cellulitis? What is your working diagnosis and what are the red flags?",
      seconds: 75,
      modelAnswer: [
        "Necrotizing soft tissue infection until proven otherwise.",
        "Pain out of proportion and tenderness beyond the erythema.",
        "Woody induration, a dusky bulla and reduced sensation.",
        "Rapid spread despite antibiotics.",
        "Systemic toxicity: tachycardia, hypotension, fever, vomiting.",
        "NSAIDs may mask early signs.",
        "This is a surgical emergency. Call surgery now.",
      ],
      rubric: ["ns-a1", "ns-a3", "ns-l1"],
      choices: [
        {
          id: "c-nsti",
          label: "I called it a necrotizing infection until proven otherwise, started resuscitation and broad antibiotics, and called general surgery right away.",
          next: "q-abx",
          quality: "strong",
          feedback:
            "Correct. Pain out of proportion, tenderness past the redness, a dusky bulla and shock after a minor wound is necrotizing infection until surgery proves otherwise. " +
            "Early surgical debridement is the key factor in survival.",
        },
        {
          id: "c-cefazolin",
          label: "I diagnosed failed cellulitis and switched her to cefazolin 2 g IV with a fluid bolus.",
          next: "s-cefazolin",
          quality: "partial",
          feedback:
            "Fluid is right, but this is not simple cellulitis. Bullae, woody swelling and shock are red flags. " +
            "The examiner wanted necrotizing infection named, broad antibiotics with clindamycin, and an urgent surgical consult.",
        },
        {
          id: "c-mri",
          label: "I sent her for MRI of the leg to confirm the diagnosis before calling surgery.",
          next: "s-mri",
          quality: "unsafe",
          feedback:
            "She is in shock. Imaging must never delay surgery when the clinical picture is clear. MRI takes time and she cannot be monitored well in the scanner. " +
            "The examiner wanted a surgical call now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-cefazolin",
      phase: "Two hours later",
      text:
        "The redness has spread 8 cm above the line. The bulla is larger and there is a new one on her calf. Her pressure is 84/48. You call general surgery and broaden her antibiotics.",
      next: "q-abx",
    },
    {
      kind: "say",
      id: "s-mri",
      phase: "In the MRI waiting area",
      text:
        "The MRI technologist calls. Her pressure is 78/44 and she is confused. She is brought back to resus. You call general surgery and start broad antibiotics.",
      next: "q-abx",
    },
    {
      kind: "question",
      id: "q-abx",
      phase: "Antibiotics",
      prompt: "Which antibiotics do you give, at what doses, and why?",
      seconds: 75,
      modelAnswer: [
        "Broad empiric coverage for a polymicrobial or streptococcal infection with MRSA risk.",
        "Vancomycin 25 mg/kg IV load, about 2 g.",
        "Plus piperacillin tazobactam 4.5 g IV. A carbapenem is an alternative.",
        "Plus clindamycin 900 mg IV every 8 hours to suppress toxin production.",
        "Narrow to penicillin plus clindamycin if group A streptococcus is confirmed.",
        "History that shapes the choice: the injury and any water exposure, the course on cephalexin, NSAID use, host factors, allergies and sick contacts.",
      ],
      rubric: ["ns-m1", "ns-h1", "ns-h2", "ns-h3", "ns-h4"],
      choices: [
        {
          id: "c-triple",
          label: "I gave vancomycin 2 g IV, piperacillin tazobactam 4.5 g IV, and clindamycin 900 mg IV for toxin suppression.",
          next: "s-shock",
          quality: "strong",
          feedback:
            "Right. Vancomycin plus piperacillin tazobactam is the IDSA empiric regimen for necrotizing infection. " +
            "Adding clindamycin is standard when streptococcal toxic shock is possible. It blocks protein synthesis and so cuts toxin production.",
        },
        {
          id: "c-no-clinda",
          label: "I gave piperacillin tazobactam 4.5 g IV alone.",
          next: "s-no-clinda",
          quality: "partial",
          feedback:
            "Piperacillin tazobactam covers streptococci and gram negatives, but it does not cover MRSA or suppress toxins. " +
            "The examiner wanted vancomycin and clindamycin added.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-clinda",
      phase: "Thirty minutes later",
      text: "The pharmacist calls. She asks whether you want to add vancomycin and clindamycin for a suspected necrotizing infection with signs of toxic shock. You agree.",
      next: "s-shock",
    },
    {
      kind: "say",
      id: "s-shock",
      phase: "Deterioration",
      text:
        "She has had 2 L of Ringer's lactate. Her pressure is 80/44 and heart rate 134. She has a faint red rash over her trunk and her creatinine is rising. The surgeon calls back.",
      next: "q-surgeon",
    },
    {
      kind: "question",
      id: "q-surgeon",
      phase: "Consultant pushback",
      prompt:
        "The surgeon says: 'Her LRINEC is high but I want a CT first to be sure. I am finishing a bowel resection. I will see her in three hours.' What do you say?",
      seconds: 90,
      modelAnswer: [
        "This is a clinical diagnosis. She has shock, bullae, woody edema and spread on antibiotics.",
        "Imaging must not delay surgery. CT can miss early fascial necrosis.",
        "A LRINEC score cannot rule in or rule out necrotizing infection alone.",
        "Request exploration as soon as possible. Ask about another surgeon or the chief of surgery.",
        "If surgery cannot happen soon here, arrange transfer through CritiCall.",
        "Keep resuscitating and start a vasopressor.",
      ],
      rubric: ["ns-a2", "ns-c1", "ns-l2"],
      choices: [
        {
          id: "c-escalate",
          label: "I told him the diagnosis is clinical and she is in shock, asked for the OR as soon as possible, and said I would call the chief of surgery or arrange transfer through CritiCall if he could not come.",
          next: "q-resus",
          quality: "strong",
          feedback:
            "Well done. Time to debridement drives survival in necrotizing infection. Clear, respectful escalation with a backup plan is what the examiner wanted. " +
            "CT should not hold up surgery in an unstable patient.",
        },
        {
          id: "c-ct",
          label: "I sent her for CT while we waited for the surgeon.",
          next: "s-ct",
          quality: "partial",
          feedback:
            "A CT is sometimes useful when the diagnosis is uncertain, but here it is clear and she is in shock. Transport to CT is also risky. " +
            "The examiner wanted urgent surgical exploration and escalation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In CT",
      text:
        "Her pressure drops to 70/40 on the CT table. The CT shows fluid along the deep fascia without gas. Back in resus, you call the surgeon, who agrees to come once his case closes in 40 minutes.",
      next: "q-resus",
    },
    {
      kind: "question",
      id: "q-resus",
      phase: "Resuscitation",
      prompt: "Her MAP is 55 after 2.4 L of fluid. What else do you do while she waits for the OR?",
      seconds: 75,
      modelAnswer: [
        "Norepinephrine to a MAP of 65 or more, peripheral start is acceptable.",
        "Balanced crystalloid to about 30 mL/kg, guided by reassessment.",
        "Blood cultures, type and screen, and coagulation.",
        "Arterial line and ICU consult.",
        "Consider IVIG for streptococcal toxic shock after discussion with infectious diseases.",
        "Stop the ibuprofen.",
      ],
      rubric: ["ns-r1", "ns-m2"],
      next: "q-consent",
    },
    {
      kind: "question",
      id: "q-consent",
      phase: "Talking with her",
      prompt: "She asks: 'Are they going to cut off my leg?' How do you answer?",
      seconds: 60,
      modelAnswer: [
        "Be honest. The infection is killing tissue and must be removed quickly.",
        "The surgeon will remove as much dead tissue as needed. Most people need more than one operation.",
        "Amputation is sometimes needed to save life. The surgeon will discuss this with her.",
        "She is capable. Make sure she understands before surgery.",
        "Offer to call her husband.",
      ],
      rubric: ["ns-c2"],
      next: "q-public",
    },
    {
      kind: "question",
      id: "q-public",
      phase: "Public health",
      prompt: "Blood cultures grow gram positive cocci in chains. Her son had strep throat last week. What else needs to happen?",
      seconds: 60,
      modelAnswer: [
        "Likely invasive group A streptococcal infection with streptococcal toxic shock syndrome.",
        "Invasive group A streptococcal disease is reportable to the local public health unit in Ontario.",
        "Public health advises on chemoprophylaxis for close contacts such as her household.",
        "Tell her family to watch for fever, sore throat and skin infections.",
        "Droplet and contact precautions for the first 24 hours of therapy.",
      ],
      rubric: ["ns-d2"],
      choices: [
        {
          id: "c-report",
          label: "I reported it to public health, asked them to advise on chemoprophylaxis for her household contacts, and started droplet and contact precautions.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Good. Invasive group A streptococcal disease is reportable. Close contacts have a higher risk of invasive disease and public health guides prophylaxis. " +
            "Precautions protect staff until therapy has run for 24 hours.",
        },
        {
          id: "c-no-report",
          label: "I left reporting to the admitting team once the final cultures were back.",
          next: "s-no-report",
          quality: "partial",
          feedback:
            "Waiting delays prophylaxis for her children. Report on strong suspicion. " +
            "The examiner wanted public health called and household contacts addressed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-report",
      phase: "Two days later",
      text: "Public health calls the ICU. Her 4 year old daughter now has a fever and a sore throat. Nobody had contacted the household. The public health nurse arranges assessment for the family.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "After debridement she is on norepinephrine. Where does she go and what should the plan include?",
      seconds: 60,
      modelAnswer: [
        "ICU after the OR.",
        "Planned return to the OR within 24 hours for a second look.",
        "Continue antibiotics, including clindamycin, and narrow when cultures are final.",
        "Consider transfer to a centre with plastic surgery and burn level wound care if needed.",
        "Family update.",
      ],
      rubric: ["ns-d1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She goes to the OR. Necrotic fascia is removed from ankle to knee. She is admitted to the ICU with a plan for a second look tomorrow. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ns-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes necrotizing infection from pain out of proportion, tenderness beyond the erythema, woody induration, bullae, spread on antibiotics and shock.",
      points: 3,
      critical: true,
      teaching: "Early necrotizing infection can look like cellulitis. Pain out of proportion and systemic toxicity are the early clues.",
      source: "idsa-ssti",
    },
    {
      id: "ns-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Marks the edge of the erythema and re-examines to document spread, and notes that NSAIDs can mask early signs.",
      points: 1,
      teaching: "Spread past a marked line within hours despite antibiotics is a strong warning sign. Anti-inflammatory drugs can blunt pain and fever.",
      source: "idsa-ssti",
    },
    {
      id: "ns-l1",
      competency: "leadership",
      criterion: "management",
      text: "Calls general surgery immediately rather than after imaging.",
      points: 2,
      teaching: "Surgery is diagnostic and therapeutic. Delay to debridement is the main driver of death.",
      source: "idsa-ssti",
    },
    {
      id: "ns-m1",
      competency: "management",
      criterion: "management",
      text: "Gives vancomycin 25 mg/kg IV load, piperacillin tazobactam 4.5 g IV and clindamycin 900 mg IV.",
      points: 3,
      critical: true,
      teaching: "Cover MRSA, streptococci, gram negatives and anaerobes. Clindamycin suppresses toxin production.",
      source: "idsa-ssti",
    },
    {
      id: "ns-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Knows the LRINEC score cannot rule in or rule out necrotizing infection and that imaging must not delay surgery.",
      points: 2,
      teaching: "LRINEC has poor sensitivity. A low score does not exclude disease and a high score does not replace clinical judgment.",
      source: "lrinec",
    },
    {
      id: "ns-c1",
      competency: "communication",
      criterion: "process",
      text: "Advocates clearly and respectfully with the surgeon for urgent exploration.",
      points: 2,
      teaching: "State the findings, the severity and the specific request. Offer to help with the logistics.",
      source: "idsa-ssti",
    },
    {
      id: "ns-l2",
      competency: "leadership",
      criterion: "process",
      text: "Escalates to another surgeon, the chief of surgery or transfer through CritiCall if surgery is delayed.",
      points: 2,
      critical: true,
      teaching: "If the right care cannot happen here soon, move the patient to where it can.",
      source: "idsa-ssti",
    },
    {
      id: "ns-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Resuscitates with balanced crystalloid and norepinephrine to a MAP of 65 or more.",
      points: 2,
      teaching: "Streptococcal toxic shock causes deep vasodilation and capillary leak. Start vasopressors early.",
      source: "ssc",
    },
    {
      id: "ns-m2",
      competency: "management",
      criterion: "management",
      text: "Considers IVIG for streptococcal toxic shock in discussion with infectious diseases.",
      points: 1,
      teaching: "Evidence for IVIG is limited but some experts use it in streptococcal toxic shock. Decide with infectious diseases.",
      source: "idsa-ssti",
    },
    {
      id: "ns-c2",
      competency: "communication",
      criterion: "process",
      text: "Answers honestly about the risk of repeat surgery and amputation and confirms understanding before surgery.",
      points: 1,
      teaching: "Patients remember honest answers. Preparing her for repeat surgery reduces distress later.",
      source: "idsa-ssti",
    },
    {
      id: "ns-d2",
      competency: "disposition",
      criterion: "process",
      text: "Reports invasive group A streptococcal disease to public health and addresses household contacts.",
      points: 2,
      teaching: "Household contacts of invasive group A streptococcal cases have a raised risk. Public health guides prophylaxis.",
      source: "phac-igas",
    },
    {
      id: "ns-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to the ICU after surgery with a planned second look within 24 hours.",
      points: 1,
      teaching: "Most patients need more than one debridement. Planned re-exploration catches ongoing necrosis.",
      source: "idsa-ssti",
    },
    {
      id: "ns-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks how, when and where she was injured, including fresh water or soil exposure.",
      points: 2,
      teaching: "Minor trauma is the usual portal for group A streptococcal fasciitis. Fresh or salt water exposure raises the chance of Aeromonas or Vibrio.",
      source: "idsa-ssti",
    },
    {
      id: "ns-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the course since the clinic visit: pain severity, spread, vomiting and any response to cephalexin.",
      points: 2,
      teaching: "Pain out of proportion and spread despite antibiotics are the early history clues that separate necrotizing infection from cellulitis.",
      source: "idsa-ssti",
    },
    {
      id: "ns-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about NSAID use, diabetes, immune suppression, injection drug use and drug allergies.",
      points: 1,
      teaching: "NSAIDs can mask early signs. Host factors and allergies shape the differential and the antibiotic choice.",
      source: "idsa-ssti",
    },
    {
      id: "ns-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about sick contacts, including recent strep throat in the household.",
      points: 1,
      teaching: "A household contact with streptococcal pharyngitis points to group A streptococcus and flags contacts for public health follow up.",
      source: "phac-igas",
    },
  ],
  sources: [
    {
      id: "idsa-ssti",
      citation:
        "Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
    },
    {
      id: "lrinec",
      citation:
        "Wong CH, et al. The LRINEC (Laboratory Risk Indicator for Necrotizing Fasciitis) score: a tool for distinguishing necrotizing fasciitis from other soft tissue infections. Crit Care Med. 2004.",
    },
    {
      id: "phac-igas",
      citation: "Public Health Agency of Canada. Guidelines for the prevention and control of invasive group A streptococcal disease. Can Commun Dis Rep. 2006.",
      url: "https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/06pdf/32s2_e.pdf",
    },
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
