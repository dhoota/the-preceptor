// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const feverBackPainInjectionUse: OralCase = {
  id: "fever-back-pain-injection-use",
  title: "Fever and back pain in a man who injects drugs",
  blueprint: "id",
  alsoCovers: ["resus", "tox", "ethics"],
  priorityTopic: "infectious-diseases",
  keyFeatures: [{ topic: "infectious-diseases", n: 2 }, { topic: "infectious-diseases", n: 3 }, { topic: "infectious-diseases", n: 8 }, { topic: "tox", n: 8 }],
  summary: "A 36 year old man who injects fentanyl arrives febrile and hypotensive with low back pain and wants to leave.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in southern Ontario when the following patient arrives. " +
    "MRI runs until 23:00, then needs an on call technologist. Neurosurgery is 45 minutes away through CritiCall Ontario. " +
    "A 36 year old man walks in with ten days of fevers and five days of low back pain.",
  card: {
    vitals: {
      temperature: "39.4°C",
      pulse: "124/minute",
      resp: "26/minute",
      bp: "92/54 mmHg",
      o2sat: "91% on room air",
      weight: "72 kg (159 lb)",
    },
    medications: "None",
    allergies: "No known allergies",
  },
  findings: [
    {
      id: "history",
      label: "History of presenting illness",
      result:
        "Fevers and sweats for ten days. Low back pain for five days, worse at night and when lying flat. " +
        "Sharp pain on the right side of his chest with deep breaths for two days. " +
        "He denies leg weakness, numbness or trouble passing urine right now. " +
        "At triage: capillary glucose 6.2 mmol/L. CTAS 2.",
    },
    {
      id: "substance",
      label: "Substance use history",
      result:
        "He injects fentanyl four to five times a day and sometimes shares cookers and water. " +
        "His last use was eight hours ago and he is starting to withdraw. He tells the nurse that if we do not help him soon he is going to leave.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Hepatitis C antibody positive two years ago, never treated. MRSA skin abscess of the left forearm eight months ago, drained in this ED. " +
        "Was on methadone for a year and stopped last spring.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "No regular medications. No known allergies. Weight 72 kg.",
    },
    {
      id: "cv-exam",
      label: "Heart, lung and skin exam",
      result:
        "Holosystolic murmur at the left lower sternal border that gets louder with inspiration. JVP 5 cm with prominent v waves. " +
        "Crackles at the right base. Track marks in both antecubital fossae. Two splinter hemorrhages on the left hand. No Janeway lesions.",
    },
    {
      id: "spine-neuro",
      label: "Spine and neurological exam",
      result:
        "Point tenderness over the L2 and L3 spinous processes. Power 5 out of 5 in both legs. Knee and ankle reflexes normal. " +
        "Light touch and pinprick normal in both legs and the perianal area. Rectal tone normal.",
    },
    {
      id: "bladder",
      label: "Bladder scan after voiding",
      result: "Post void residual 60 mL on arrival.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 18.6 x 10^9/L with 88 percent neutrophils. Hemoglobin 104 g/L. Platelets 98 x 10^9/L. Creatinine 142 µmol/L. " +
        "Lactate 3.8 mmol/L. CRP 246 mg/L. Bilirubin 22 µmol/L. Urinalysis shows 2+ protein and 10 to 20 red cells per high power field.",
    },
    {
      id: "cultures",
      label: "Blood cultures",
      result: "Two of two sets drawn in the ED flag positive at 11 hours. Gram positive cocci in clusters in all four bottles.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "Multiple round peripheral nodules in both lungs. Two in the right lower lobe are cavitating. Small right pleural effusion.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 122. PR interval 160 ms. QRS 88 ms. No ST changes.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "A mobile echodensity about 2.2 cm long on the tricuspid valve with a wide regurgitant jet on colour Doppler. " +
        "Left ventricle hyperdynamic. No pericardial effusion. IVC 1.6 cm with more than 50 percent collapse.",
    },
    {
      id: "cows",
      label: "Withdrawal assessment",
      result: "Clinical Opiate Withdrawal Scale score 14. Yawning, rhinorrhea, piloerection, dilated pupils and restlessness.",
    },
    {
      id: "mri",
      label: "MRI whole spine with gadolinium",
      result:
        "Discitis and osteomyelitis at L2 and L3. Posterior epidural abscess from L1 to L4 with severe compression of the thecal sac and cauda equina. " +
        "No abscess at other levels. Small right psoas collection.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation bay",
      text:
        "He is flushed, shivering and restless. He keeps sitting up because lying flat hurts his back. The nurse has one IV in and asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What are your priorities in the first ten minutes?",
      seconds: 90,
      modelAnswer: [
        "Recognize septic shock with a likely endovascular source.",
        "Monitor, oxygen to SpO2 92 to 96 percent, second large bore IV.",
        "Two to three sets of blood cultures from separate venipunctures before antibiotics, drawn within minutes.",
        "Empiric antibiotics within one hour of recognition.",
        "Balanced crystalloid in 500 mL boluses toward 30 mL/kg with reassessment of lungs, JVP and IVC.",
        "Norepinephrine if MAP stays under 65 after initial fluid.",
      ],
      rubric: ["pw-r1", "pw-r2", "pw-a1"],
      choices: [
        {
          id: "c-cultures-then-abx",
          label: "I had two sets of blood cultures drawn from separate sites right away and gave empiric antibiotics within the hour while I started fluid boluses.",
          next: "q-abx",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Cultures from separate venipunctures before antibiotics give you the diagnosis of endocarditis. " +
            "Drawing them takes minutes and must not push antibiotics past the one hour target in septic shock.",
        },
        {
          id: "c-abx-first",
          label: "I gave antibiotics immediately and planned to draw cultures afterward.",
          next: "s-abx-first",
          quality: "partial",
          feedback:
            "Speed is right but the order costs you. One dose of vancomycin can sterilize cultures and leave you without an organism for six weeks of therapy. " +
            "The examiner wanted two to three sets drawn first, which adds only minutes.",
        },
        {
          id: "c-wait-echo",
          label: "I held antibiotics until the cultures grew or a formal echo confirmed endocarditis.",
          next: "s-wait-echo",
          quality: "unsafe",
          feedback:
            "He is in septic shock with a lactate of 3.8 mmol/L. Holding antibiotics for a diagnosis increases mortality with each hour. " +
            "Endocarditis is confirmed later. Treatment starts now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-abx-first",
      phase: "Thirty minutes later",
      text:
        "The vancomycin is running when the nurse draws the first culture set. The lab later calls to say one of the two sets has no growth. You are relying on a single set for an organism.",
      next: "q-abx",
    },
    {
      kind: "say",
      id: "s-wait-echo",
      phase: "Forty minutes later",
      text:
        "His pressure falls to 78/44 and his lactate rises to 5.1 mmol/L. The charge nurse asks you to reconsider. You order antibiotics and start norepinephrine.",
      next: "q-abx",
    },
    {
      kind: "question",
      id: "q-abx",
      phase: "Empiric therapy",
      prompt: "Which empiric antibiotics do you order, at what doses, and why?",
      seconds: 90,
      modelAnswer: [
        "Vancomycin loading dose 25 to 30 mg/kg IV based on actual weight, about 1.8 to 2.2 g for him, then pharmacy guided dosing.",
        "Prior MRSA makes vancomycin essential.",
        "Add a beta lactam. With a possible spinal source, ceftriaxone 2 g IV every 12 hours adds gram negative and CNS cover. Cefepime 2 g IV if Pseudomonas is a concern.",
        "If MSSA grows, switch to cefazolin or cloxacillin. Ceftriaxone is not the preferred agent for MSSA bacteremia.",
        "Narrow once the organism and susceptibilities return.",
        "Ask about prior MRSA, allergies and current medications before you choose.",
      ],
      rubric: ["pw-m1", "pw-m2", "pw-h3"],
      choices: [
        {
          id: "c-vanc-load",
          label: "I gave a vancomycin load of 25 mg/kg, about 1.8 g, plus ceftriaxone 2 g IV, and asked pharmacy to dose ongoing vancomycin.",
          next: "q-back",
          quality: "strong",
          feedback:
            "Good. His prior MRSA makes vancomycin mandatory and a weight based load gets him to target faster. " +
            "The beta lactam adds gram negative and CNS cover while the spine is in question. If MSSA grows, switch to cefazolin or cloxacillin.",
        },
        {
          id: "c-vanc-1g",
          label: "I gave vancomycin 1 g IV as a standard dose.",
          next: "s-vanc-1g",
          quality: "partial",
          feedback:
            "The drug is right but 1 g is an underdose for a 72 kg man in septic shock. " +
            "The examiner wanted a loading dose of 25 to 30 mg/kg and a beta lactam alongside it for MSSA.",
        },
        {
          id: "c-cefazolin",
          label: "I gave cefazolin 2 g IV because most endocarditis in people who inject is MSSA.",
          next: "s-cefazolin",
          quality: "partial",
          feedback:
            "Cefazolin is excellent once MSSA is proven. Alone it misses MRSA, and he had MRSA eight months ago. " +
            "The examiner wanted vancomycin at a weight based load added until susceptibilities are back.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-vanc-1g",
      phase: "Pharmacy review",
      text:
        "The ED pharmacist calls. She says 1 g is well below a loading dose for his weight and suggests an extra 800 mg now plus ceftriaxone. You agree.",
      next: "q-back",
    },
    {
      kind: "say",
      id: "s-cefazolin",
      phase: "Pharmacy review",
      text:
        "The ED pharmacist sees the MRSA flag on his chart and calls you. She recommends a vancomycin load of 1.8 g now. You add it.",
      next: "q-back",
    },
    {
      kind: "question",
      id: "q-back",
      phase: "The back pain",
      prompt: "He says the back pain is the worst part. How do you assess it and what imaging do you want?",
      seconds: 90,
      modelAnswer: [
        "Fever, injection drug use and focal spinal tenderness mean spinal epidural abscess until proven otherwise.",
        "Full neurological exam including perianal sensation, rectal tone and a post void residual.",
        "Document a baseline so any change can be detected.",
        "MRI of the whole spine with gadolinium tonight, because skip lesions occur.",
        "CT with contrast if MRI cannot be done.",
        "Repeat neuro checks every two to four hours.",
        "Ask about night pain, pain lying flat, leg weakness, numbness and bladder or bowel symptoms.",
      ],
      rubric: ["pw-a2", "pw-a3", "pw-h1", "pw-o1"],
      choices: [
        {
          id: "c-mri-whole",
          label: "I did a full neuro exam with perianal sensation, rectal tone and a bladder scan, then booked an MRI of the whole spine with gadolinium tonight.",
          next: "q-withdrawal",
          quality: "strong",
          feedback:
            "This is the answer. Epidural abscess is missed when back pain in a febrile person who injects is labelled as drug seeking. " +
            "A whole spine MRI finds skip lesions and your documented baseline lets the team spot the first change.",
        },
        {
          id: "c-mri-lumbar",
          label: "I booked an MRI of the lumbar spine only, since that is where he is tender.",
          next: "s-mri-lumbar",
          quality: "partial",
          feedback:
            "An MRI tonight is right. Imaging only the tender region can miss a second abscess elsewhere in the spine. " +
            "The examiner wanted the whole spine with gadolinium and a documented neuro baseline.",
        },
        {
          id: "c-xray-outpt",
          label: "I ordered lumbar X rays and planned an outpatient MRI because his neuro exam is normal.",
          next: "s-xray-outpt",
          quality: "unsafe",
          feedback:
            "Plain films are normal early in discitis and epidural abscess. A normal exam now does not protect him. " +
            "Deficits can progress over hours. The examiner wanted urgent MRI of the whole spine.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-mri-lumbar",
      phase: "MRI suite",
      text:
        "The radiologist phones. She wants to extend the study to the whole spine with contrast because the lumbar images show an abscess at the top of the field. You agree.",
      next: "q-withdrawal",
    },
    {
      kind: "say",
      id: "s-xray-outpt",
      phase: "One hour later",
      text:
        "The X rays show subtle end plate irregularity at L2 and L3. The internist on call reviews them and asks why there is no MRI booked. You book a whole spine MRI with gadolinium.",
      next: "q-withdrawal",
    },
    {
      kind: "question",
      id: "q-withdrawal",
      phase: "Withdrawal",
      prompt:
        "His COWS score is 14. He is sweating and pacing. He says: 'Nobody here helps people like me. I am going to go use and come back.' What do you do?",
      seconds: 90,
      modelAnswer: [
        "Acknowledge his distress and use non judgmental language.",
        "Treat withdrawal and pain properly. Untreated withdrawal is the main reason people leave.",
        "Offer buprenorphine naloxone now that he is in objective withdrawal with a COWS over 12. Give 2 to 4 mg sublingual and repeat to effect, often 8 to 16 mg on day one.",
        "If he declines, treat pain and withdrawal with a full agonist such as hydromorphone at an adequate dose.",
        "Involve addiction medicine early.",
        "Explain the seriousness of the infection plainly and assess capacity if he still wants to leave.",
        "Ask what he uses, how often, whether he shares equipment and when he last used.",
      ],
      rubric: ["pw-m3", "pw-c1", "pw-p1", "pw-h2"],
      choices: [
        {
          id: "c-treat-oat",
          label: "I told him I would treat his withdrawal and pain now, offered buprenorphine naloxone and asked addiction medicine to see him.",
          next: "s-deficit",
          quality: "strong",
          feedback:
            "Excellent. Treating withdrawal is medical care, not a reward. It keeps him in hospital for the treatment that saves his life. " +
            "Starting opioid agonist treatment in the ED improves engagement and lowers overdose risk after discharge.",
        },
        {
          id: "c-clonidine",
          label: "I gave clonidine and told him we do not give opioids to people who use.",
          next: "s-clonidine",
          quality: "partial",
          feedback:
            "Clonidine helps some symptoms but does not treat moderate fentanyl withdrawal or his pain. " +
            "The statement is stigmatizing and makes leaving more likely. The examiner wanted opioid agonist treatment offered and addiction medicine involved.",
        },
        {
          id: "c-let-go",
          label: "I gave him oral antibiotics and had him sign out against medical advice.",
          next: "s-let-go",
          quality: "unsafe",
          feedback:
            "Oral antibiotics are not adequate for S. aureus endocarditis or an epidural abscess. " +
            "Nothing was done to address why he wanted to leave and no capacity assessment was documented. " +
            "The examiner wanted withdrawal treated first, then a capacity conversation if he still wished to go.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-clonidine",
      phase: "Twenty minutes later",
      text:
        "Security reports he has pulled his IV and is at the exit. The nurse persuades him to wait while you come back. You offer buprenorphine naloxone and he agrees to stay.",
      next: "s-deficit",
    },
    {
      kind: "say",
      id: "s-let-go",
      phase: "At the door",
      text:
        "The charge nurse stops you before he leaves. She points out his pressure is 90/50 and asks whether he really understands the risk. You go back and talk with him. You offer treatment for withdrawal and he agrees to stay.",
      next: "s-deficit",
    },
    {
      kind: "say",
      id: "s-deficit",
      phase: "Four hours later",
      text:
        "He is calmer after treatment. Then he calls the nurse. His legs feel heavy and he has not passed urine since arrival. " +
        "Hip flexion is now 4 out of 5 on both sides. Perianal pinprick is reduced. The bladder scan shows 620 mL. " +
        "The MRI shows an epidural abscess from L1 to L4 with severe compression of the cauda equina.",
      next: "q-deficit",
    },
    {
      kind: "question",
      id: "q-deficit",
      phase: "New deficit",
      prompt: "What is happening and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Progressive cauda equina compression from the epidural abscess.",
        "This is a surgical emergency. Call neurosurgery through CritiCall now for decompression.",
        "Insert a urinary catheter.",
        "Continue antibiotics. Do not delay transfer for more tests.",
        "Keep neuro checks hourly and document the time the deficit started.",
        "Steroids are not routine treatment for epidural abscess.",
      ],
      rubric: ["pw-d1", "pw-m4"],
      choices: [
        {
          id: "c-emerg-consult",
          label: "I called neurosurgery through CritiCall immediately for emergent decompression, put in a Foley and kept antibiotics running.",
          next: "q-duke",
          quality: "strong",
          feedback:
            "That is the key decision in this case. Neurological outcome depends on the deficit at the time of surgery. " +
            "A new deficit with compression on MRI needs decompression as soon as possible, not tomorrow.",
        },
        {
          id: "c-admit-medicine",
          label: "I admitted him to internal medicine on antibiotics and asked for a neurosurgery opinion in the morning.",
          next: "s-admit-medicine",
          quality: "unsafe",
          feedback:
            "Medical therapy alone is reserved for selected patients without a deficit or those who cannot have surgery. " +
            "He has a new motor deficit and urinary retention. Hours matter for recovery. The examiner wanted an emergent surgical call tonight.",
        },
        {
          id: "c-steroids",
          label: "I gave dexamethasone 10 mg IV to reduce swelling and called neurosurgery.",
          next: "s-steroids",
          quality: "partial",
          feedback:
            "Calling neurosurgery is right. Steroids are not standard therapy for epidural abscess and can blunt the immune response. " +
            "The examiner wanted the call, a catheter and uninterrupted antibiotics.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-admit-medicine",
      phase: "Two hours later",
      text:
        "The internist sees him and finds hip flexion now 3 out of 5. She calls you back to the bedside. You call CritiCall and the neurosurgeon accepts him for emergency decompression.",
      next: "q-duke",
    },
    {
      kind: "say",
      id: "s-steroids",
      phase: "On the phone",
      text:
        "The neurosurgeon accepts him for decompression tonight. She asks you not to give further steroids. She also asks whether a Foley is in. It is not yet. You place one.",
      next: "q-duke",
    },
    {
      kind: "question",
      id: "q-duke",
      phase: "Pulling it together",
      prompt: "The cultures are growing gram positive cocci in clusters. How do you diagnose endocarditis here and what else does he need from cardiology?",
      seconds: 75,
      modelAnswer: [
        "Modified Duke criteria as updated in 2023.",
        "Major: a typical organism, S. aureus, in two separate culture sets.",
        "Major: imaging evidence of a vegetation, here a tricuspid mass with regurgitation.",
        "Minor: fever, injection drug use, septic pulmonary emboli.",
        "Formal echo, and TEE if the transthoracic study is inadequate or left sided disease is possible.",
        "Surgery for right sided disease if there are vegetations over 20 mm with recurrent septic emboli, severe right heart failure or persistent bacteremia.",
      ],
      rubric: ["pw-a4", "pw-m5"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Handover and harm reduction",
      prompt: "What do you tell him, and what goes into your handover to the receiving team?",
      seconds: 90,
      modelAnswer: [
        "Tell him plainly: a heart valve infection and an abscess pressing on his spinal nerves that needs surgery tonight.",
        "Structured handover to neurosurgery and the transport team with times, doses, cultures and neuro exam changes.",
        "Flag endocarditis for cardiology and infectious diseases at the receiving centre.",
        "Continue opioid agonist treatment. Communicate the buprenorphine dose and time.",
        "Send HIV, hepatitis B and hepatitis C RNA testing.",
        "Plan a naloxone kit and harm reduction supplies before any future discharge.",
      ],
      rubric: ["pw-c2", "pw-c3", "pw-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The transport crew arrives. He is decompressed four hours after the deficit began. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pw-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Draws two to three sets of blood cultures from separate venipunctures and gives antibiotics within one hour.",
      points: 3,
      critical: true,
      teaching:
        "Endocarditis treatment depends on knowing the organism. Cultures take minutes and should come before antibiotics, but never delay antibiotics in shock.",
      source: "ssc",
    },
    {
      id: "pw-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives balanced crystalloid in boluses with reassessment and starts norepinephrine for MAP under 65.",
      points: 2,
      teaching: "Reassess after each bolus. Tricuspid regurgitation and septic emboli make fluid overload more likely.",
      source: "ssc",
    },
    {
      id: "pw-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for a murmur, peripheral stigmata and septic pulmonary emboli and identifies right sided involvement.",
      points: 2,
      teaching: "A murmur louder with inspiration, v waves and cavitating peripheral nodules point to tricuspid endocarditis.",
      source: "aha-ie",
    },
    {
      id: "pw-m1",
      competency: "management",
      criterion: "management",
      text: "Gives a vancomycin loading dose of 25 to 30 mg/kg IV based on actual body weight.",
      points: 2,
      teaching: "A weight based load reaches target levels faster. A flat 1 g dose underdoses most adults in septic shock.",
      source: "vanc",
    },
    {
      id: "pw-m2",
      competency: "management",
      criterion: "management",
      text: "Adds a beta lactam such as ceftriaxone 2 g IV every 12 hours, or cefepime if Pseudomonas is a concern, and narrows to cefazolin or cloxacillin if MSSA grows.",
      points: 1,
      teaching: "Anti staphylococcal beta lactams kill MSSA faster than vancomycin. Ceftriaxone adds gram negative and CNS cover while a spinal source is possible.",
      source: "idsa-vo",
    },
    {
      id: "pw-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Documents a full neurological exam including perianal sensation, rectal tone and post void residual.",
      points: 2,
      teaching: "The baseline exam is how the team detects early progression. Retention may be the first sign of cauda equina compression.",
      source: "idsa-vo",
    },
    {
      id: "pw-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Orders urgent MRI of the whole spine with gadolinium for fever, injection drug use and spinal tenderness.",
      points: 3,
      critical: true,
      teaching: "Epidural abscess is often diagnosed late. Whole spine imaging finds skip lesions that change the surgical plan.",
      source: "idsa-vo",
    },
    {
      id: "pw-m3",
      competency: "management",
      criterion: "management",
      text: "Treats withdrawal and pain and offers buprenorphine naloxone once in objective withdrawal.",
      points: 2,
      teaching: "Buprenorphine and methadone are both first line for opioid use disorder in the 2024 Canadian update. Starting buprenorphine in the ED improves retention and lowers overdose risk.",
      source: "crism",
    },
    {
      id: "pw-c1",
      competency: "communication",
      criterion: "process",
      text: "Uses non judgmental language and addresses the reasons he wants to leave.",
      points: 1,
      teaching: "Stigma and untreated withdrawal drive patient directed discharges. Naming and treating both keeps patients in care.",
      source: "crism",
    },
    {
      id: "pw-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses capacity if he still wishes to leave and offers the best alternative plan rather than an empty discharge.",
      points: 1,
      teaching: "A capable patient may leave. Document the capacity assessment and still offer naloxone, a follow up path and an open door.",
      source: "crism",
    },
    {
      id: "pw-d1",
      competency: "disposition",
      criterion: "management",
      text: "Arranges emergent neurosurgical decompression through CritiCall when a new deficit appears.",
      points: 3,
      critical: true,
      teaching: "Motor weakness or retention with compression on MRI needs surgery as soon as possible. Outcome tracks the deficit at the time of decompression.",
      source: "idsa-vo",
    },
    {
      id: "pw-m4",
      competency: "management",
      criterion: "management",
      text: "Places a urinary catheter, continues antibiotics and avoids routine steroids.",
      points: 1,
      teaching: "Retention needs drainage. Steroids have no routine role in epidural abscess.",
      source: "idsa-vo",
    },
    {
      id: "pw-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Applies the modified Duke criteria with S. aureus in two sets and a tricuspid vegetation as major criteria.",
      points: 2,
      teaching: "Two major criteria make definite endocarditis. Injection drug use, fever and septic emboli are minor criteria.",
      source: "esc-ie",
    },
    {
      id: "pw-m5",
      competency: "management",
      criterion: "management",
      text: "Arranges formal echo and names surgical indications for right sided endocarditis.",
      points: 1,
      teaching: "Right sided surgery is considered for vegetations over 20 mm with recurrent septic emboli, refractory right heart failure or persistent bacteremia.",
      source: "esc-ie",
    },
    {
      id: "pw-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis and urgent surgery to him in plain language.",
      points: 1,
      teaching: "Plain words build trust. He needs to understand why he must go tonight.",
      source: "aha-ie",
    },
    {
      id: "pw-c3",
      competency: "communication",
      criterion: "process",
      text: "Gives a structured handover including times, doses, culture results and the change in neuro exam.",
      points: 1,
      teaching: "The time of deficit onset matters to the surgeon. So does the buprenorphine dose for perioperative pain planning.",
      source: "aha-ie",
    },
    {
      id: "pw-d2",
      competency: "disposition",
      criterion: "management",
      text: "Sends HIV, hepatitis B and hepatitis C testing and plans naloxone and harm reduction supplies.",
      points: 1,
      teaching: "Each admission is a chance to test and link to care. A naloxone kit should go with every person who uses opioids.",
      source: "crism",
    },
    {
      id: "pw-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the back pain and its red flags: night pain, pain lying flat, leg weakness, numbness, and bladder or bowel symptoms.",
      points: 2,
      teaching: "Fever with back pain in a person who injects drugs is spinal infection until proven otherwise. Neurological and bladder symptoms decide how fast imaging and surgery must happen.",
      source: "idsa-vo",
    },
    {
      id: "pw-h2",
      competency: "assessment",
      criterion: "history",
      text: "Takes an injection drug use history: the drug, how often, sharing of cookers or water, and the time of last use.",
      points: 2,
      teaching: "Shared equipment and frequent injection raise the risk of S. aureus bacteremia and right sided endocarditis. The time of last use predicts when withdrawal will peak.",
      source: "aha-ie",
    },
    {
      id: "pw-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about prior MRSA infection, hepatitis C, past opioid agonist treatment, medications and allergies.",
      points: 2,
      teaching: "Prior MRSA makes vancomycin mandatory in the empiric regimen. Past opioid agonist treatment tells you what has worked for him before.",
      source: "vanc",
    },
    {
      id: "pw-o1",
      competency: "leadership",
      criterion: "process",
      text: "Organizes care in order of threat: cultures, antibiotics and resuscitation first, then imaging, with a documented neurological reassessment every 2 to 4 hours.",
      points: 2,
      teaching: "Sequencing keeps the one hour antibiotic target while the spine is worked up. Scheduled neuro checks catch the first sign of cord or cauda equina compression.",
      source: "idsa-vo",
    },
  ],
  sources: [
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine. 2021.",
    },
    {
      id: "aha-ie",
      citation:
        "Baddour LM, et al. Infective endocarditis in adults. Diagnosis, antimicrobial therapy and management of complications. A scientific statement from the American Heart Association. Circulation. 2015.",
    },
    {
      id: "esc-ie",
      citation: "Delgado V, et al. 2023 ESC Guidelines for the management of endocarditis. European Heart Journal. 2023.",
    },
    {
      id: "idsa-vo",
      citation:
        "Berbari EF, et al. 2015 Infectious Diseases Society of America clinical practice guidelines for the diagnosis and treatment of native vertebral osteomyelitis in adults. Clinical Infectious Diseases. 2015.",
    },
    {
      id: "vanc",
      citation:
        "Rybak MJ, et al. Therapeutic monitoring of vancomycin for serious MRSA infections. A revised consensus guideline of ASHP, IDSA, PIDS and SIDP. American Journal of Health System Pharmacy. 2020.",
    },
    {
      id: "crism",
      citation: "Canadian Research Initiative in Substance Matters. Management of opioid use disorder. 2024 update to the national clinical practice guideline. CMAJ. 2024.",
      url: "https://www.cmaj.ca/content/196/38/E1280",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
