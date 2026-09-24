// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const metastaticCordCompression: OralCase = {
  id: "metastatic-cord-compression",
  title: "Back pain and legs that give way",
  blueprint: "neuro",
  alsoCovers: ["systems"],
  priorityTopic: "msk",
  keyFeatures: [
    { topic: "msk", n: 7 },
    { topic: "analgesia-sedation", n: 3 },
    { topic: "cqi", n: 1 },
  ],
  summary: "A 72 year old man with known cancer has weeks of back pain and two falls today.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "It is 21:30. MRI is closed until 07:00, and spine surgery and radiation oncology are at a tertiary centre 110 km away. " +
    "A 72 year old man arrives with back pain and weak legs after two falls at home today.",
  card: {
    vitals: {
      temperature: "36.7°C",
      pulse: "92/minute",
      resp: "18/minute",
      bp: "148/84 mmHg",
      o2sat: "96% on room air",
    },
    medications: "Androgen deprivation therapy, hydromorphone 2 mg PO as needed",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "pain",
      label: "History of presenting illness",
      result:
        "He has had mid back pain for 4 weeks. His family doctor said it was a pulled muscle. For 2 days his legs have felt heavy and today he fell twice at home. " +
        "His wife says he has not passed water since this morning. " +
        "The pain is mid thoracic, worse lying flat and at night, now a band around the lower chest. Worse with coughing. Needed 4 doses of hydromorphone 2 mg orally today.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Prostate cancer with bone metastases diagnosed 14 months ago. On androgen deprivation therapy. His oncologist last saw him 6 weeks ago.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Androgen deprivation therapy. Hydromorphone 2 mg orally as needed, 4 doses today.",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "Hip flexion 3 out of 5 on both sides. Knee extension 4 out of 5. Ankle dorsiflexion 3 out of 5. Arms normal. " +
        "Sensory level to pinprick at T10. Knee reflexes brisk. Both plantars upgoing. Reduced perianal sensation. Rectal tone reduced.",
    },
    {
      id: "spine",
      label: "Spine exam",
      result: "Percussion tenderness over T9 and T10. No step. Pain on lying flat for more than a few minutes.",
    },
    {
      id: "bladder",
      label: "Bladder scan",
      result: "Bladder volume 820 mL. He does not feel the urge to void.",
    },
    {
      id: "baseline",
      label: "Social history, baseline function and wishes",
      result:
        "Until 2 weeks ago he walked 3 km a day and did his own groceries. ECOG 1. He and his wife want active treatment. He has no advance directive.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 112 g/L. Platelets 198 x 10^9/L. Creatinine 118 µmol/L. Corrected calcium 2.64 mmol/L. Alkaline phosphatase 410 U/L. " +
        "Glucose 6.2 mmol/L. Sodium 137 mmol/L. PSA last month 38 µg/L, up from 4.2 six months ago.",
    },
    {
      id: "ct",
      label: "CT thoracic and lumbar spine",
      result:
        "Mixed lytic and sclerotic metastases at T4, T10 and L2. T10 has 40 percent height loss with bilateral pedicle and posterior element involvement and soft tissue extending into the canal. " +
        "CT cannot assess the cord. No fractures elsewhere.",
    },
    {
      id: "mri",
      label: "MRI whole spine",
      result:
        "Done at the tertiary centre. Epidural tumour at T10 compressing the cord circumferentially with loss of CSF around it and T2 cord signal change. Bilsky grade 3. " +
        "T4 and L2 metastases without canal compromise. SINS score 10, potentially unstable.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "First look",
      text: "He is in a wheelchair and cannot stand to transfer without two people. He winces when the nurse lays him flat.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Assessment",
      prompt: "What are you worried about, and what do you examine and do first?",
      seconds: 90,
      modelAnswer: [
        "Metastatic spinal cord compression until proven otherwise. Known bone metastases, thoracic pain worse lying down, band like pain, leg weakness and retention.",
        "Full neuro exam with power by myotome, sensory level, reflexes, plantars and perianal sensation.",
        "Bladder scan and catheterize. 820 mL retention confirms autonomic involvement.",
        "Analgesia. Hydromorphone 0.5 to 1 mg IV titrated.",
        "Differential: pathological fracture alone, cauda equina, epidural abscess, hypercalcemia contributing to weakness.",
        "Flat bed rest with log roll until stability is known if pain suggests mechanical instability.",
        "Ask about the cancer and its treatment, the tempo of weakness and falls, bladder and bowel function, saddle numbness and baseline function.",
      ],
      rubric: ["cc-a1", "cc-h1", "cc-h2", "cc-h3", "cc-a2", "cc-a3", "cc-m1"],
      next: "q-steroid",
    },
    {
      kind: "question",
      id: "q-steroid",
      phase: "Steroids",
      prompt: "Do you give corticosteroids? Which one, what dose and when?",
      seconds: 60,
      modelAnswer: [
        "Yes, now. Do not wait for the MRI when there is a neurological deficit.",
        "Dexamethasone 10 mg IV load, then 16 mg per day in divided doses, such as 4 mg every 6 hours.",
        "NICE NG234 gives 16 mg as soon as possible, then 16 mg daily until definitive treatment. Both regimens are reasonable.",
        "Add a proton pump inhibitor and monitor glucose.",
        "Very high dose regimens of around 96 mg per day add adverse effects without clear benefit.",
        "If lymphoma were suspected with no tissue diagnosis, discuss with oncology before steroids. That does not apply here.",
      ],
      rubric: ["cc-m2"],
      choices: [
        {
          id: "c-dex",
          label: "I gave dexamethasone 10 mg IV now, then 4 mg IV every 6 hours with a proton pump inhibitor and glucose monitoring.",
          next: "q-imaging",
          quality: "strong",
          feedback:
            "Correct. Dexamethasone reduces cord edema and pain. Starting it before imaging is recommended when there are deficits. A dose of 16 mg per day is the usual regimen.",
        },
        {
          id: "c-dex-wait",
          label: "I planned to start dexamethasone once the MRI confirmed compression.",
          next: "s-dex-wait",
          quality: "partial",
          feedback:
            "With a known cancer and progressive deficits, steroids should start on clinical suspicion. Waiting for an MRI that may be 12 hours away delays treatment. Give dexamethasone now.",
        },
        {
          id: "c-dex-high",
          label: "I gave dexamethasone 96 mg IV as a bolus.",
          next: "s-dex-high",
          quality: "partial",
          feedback:
            "High dose regimens have more serious adverse effects including GI perforation, psychosis and hyperglycemia, with no clear gain in walking outcome. A 10 mg load then 16 mg per day is recommended.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-dex-wait",
      phase: "The nurse returns",
      text: "The nurse asks if steroids should go in now since his legs are weaker than at triage. You give dexamethasone 10 mg IV.",
      next: "q-imaging",
    },
    {
      kind: "say",
      id: "s-dex-high",
      phase: "Pharmacy call",
      text: "The pharmacist calls to query the dose. You change the order to 4 mg every 6 hours after the bolus already given. His glucose two hours later is 14.8 mmol/L.",
      next: "q-imaging",
    },
    {
      kind: "question",
      id: "q-imaging",
      phase: "Imaging",
      prompt: "It is 22:00. Your MRI is closed until 07:00. How do you get the imaging he needs?",
      seconds: 75,
      modelAnswer: [
        "He needs whole spine MRI urgently. With neurological deficits it should be done as soon as possible and always within 24 hours. Multilevel disease is common.",
        "NICE expects MRI out of hours when it would allow immediate treatment to start.",
        "Plain films are not adequate. CT shows bone disease but not the cord.",
        "Options are calling in an MRI technologist or transferring to a centre that can image and treat tonight.",
        "Because he also needs spine surgery and radiation oncology, early transfer usually makes more sense than local imaging.",
        "CT myelography is the alternative if MRI is contraindicated.",
      ],
      rubric: ["cc-m3", "cc-d1"],
      choices: [
        {
          id: "c-transfer-mri",
          label: "I did a CT of the spine now for bony detail and called CritiCall to arrange transfer tonight to the tertiary centre for MRI and assessment by spine surgery and radiation oncology.",
          next: "s-progress",
          quality: "strong",
          feedback:
            "This is the best plan. The centre that images him should be the one that can treat him. CT helps the spine surgeon judge stability but does not replace MRI.",
        },
        {
          id: "c-morning-mri",
          label: "I kept him flat on steroids and booked the first MRI slot here at 07:00.",
          next: "s-progress",
          quality: "partial",
          feedback:
            "An MRI within 24 hours meets the minimum standard, but his deficits are progressing and he will still need transfer for treatment afterward. Arranging transfer tonight saves hours.",
        },
        {
          id: "c-xray-admit",
          label: "I got thoracic spine X rays, admitted him to medicine and asked for an outpatient MRI.",
          next: "s-xray-admit",
          quality: "unsafe",
          feedback:
            "X rays cannot show the cord and miss many epidural lesions. Metastatic cord compression with deficits is an emergency. Delay to treatment directly determines whether he walks again.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-xray-admit",
      phase: "The admitting internist",
      text: "The internist sees him and refuses the admission plan. She says he needs urgent MRI and spinal assessment tonight. You call CritiCall.",
      next: "s-progress",
    },
    {
      kind: "say",
      id: "s-progress",
      phase: "23:15",
      text:
        "The nurse calls you back. The patient can no longer lift either leg off the bed. Hip flexion is 2 out of 5. The sensory level is now T8. He is frightened.",
      next: "q-consult",
    },
    {
      kind: "question",
      id: "q-consult",
      phase: "Consultation",
      prompt: "The on call spine surgeon says: 'He has metastatic prostate cancer. That is a radiation problem. Call radiation oncology and send him in the morning.' How do you respond?",
      seconds: 75,
      modelAnswer: [
        "Describe the progression. Hip flexion from 3 to 2 in under 2 hours, sensory level rising, retention.",
        "He was ambulatory until today with a good performance status. Expected survival is likely more than 3 months.",
        "The CT shows posterior element involvement and height loss. Stability needs a surgical opinion.",
        "Ask for a joint decision with spine surgery and radiation oncology. Surgery plus radiation benefits selected patients.",
        "Request transfer tonight. Document the times and the conversation.",
      ],
      rubric: ["cc-c1", "cc-d1"],
      choices: [
        {
          id: "c-joint",
          label: "I described the rapid progression and CT findings, and asked for a joint call with radiation oncology and transfer tonight for a combined decision.",
          next: "q-supportive",
          quality: "strong",
          feedback:
            "Correct. Treatment choice depends on stability, neurology, tumour type and prognosis, which is a joint decision. Surgery plus radiation helps selected patients keep or regain walking. Your role is to present the data and push for urgent assessment.",
        },
        {
          id: "c-accept-am",
          label: "I agreed and planned transfer in the morning.",
          next: "s-accept-am",
          quality: "partial",
          feedback:
            "A rapidly progressive deficit is time critical. Every hour of delay lowers the chance of recovery. Escalate rather than accept a morning plan.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept-am",
      phase: "01:00",
      text: "On reassessment his leg power is 1 out of 5. You call the radiation oncologist, who tells you to send him now. You call the spine surgeon back.",
      next: "q-supportive",
    },
    {
      kind: "question",
      id: "q-supportive",
      phase: "Supportive care",
      prompt: "While transfer is arranged, what else does he need?",
      seconds: 60,
      modelAnswer: [
        "Indwelling urinary catheter. Record the residual volume.",
        "Analgesia with IV opioid titrated. Add scheduled acetaminophen.",
        "Glucose checks while on dexamethasone. Proton pump inhibitor.",
        "Log roll and keep flat if pain suggests instability until stability is assessed.",
        "Pressure injury prevention. Bowel regimen.",
        "Check calcium. Hold anticoagulant prophylaxis until surgery is decided.",
      ],
      rubric: ["cc-m1", "cc-m4"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Communication",
      prompt: "He asks you: 'Am I going to walk again?' What do you say?",
      seconds: 60,
      modelAnswer: [
        "Sit down. Ask what he understands.",
        "Explain that the cancer is pressing on the spinal cord and that urgent treatment is needed.",
        "Be honest. The best predictor of walking after treatment is strength at the time of treatment. That is why speed matters.",
        "Some people regain function. Some do not. You cannot promise either.",
        "Acknowledge fear. Include his wife. Confirm his wish for active treatment.",
      ],
      rubric: ["cc-c2", "cc-p1"],
      next: "q-safety",
    },
    {
      kind: "question",
      id: "q-safety",
      phase: "Safety",
      prompt: "His family doctor diagnosed a pulled muscle. What system lesson does this case teach, and what would you do about it?",
      seconds: 60,
      modelAnswer: [
        "New back pain in a patient with known cancer is spinal metastasis until proven otherwise.",
        "Thoracic pain, night pain and pain on lying flat are red flags.",
        "Patients with bone metastases should be told the warning signs and how to seek urgent care.",
        "Give feedback to the family doctor in a collegial, non blaming way.",
        "Suggest a local pathway for urgent MRI access in suspected cord compression.",
      ],
      rubric: ["cc-l1", "cc-a1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He is transferred overnight. MRI shows T10 compression. He has decompression and stabilization followed by radiation. At 6 weeks he walks with a walker. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cc-a1",
      competency: "assessment",
      criterion: "history",
      text: "Recognizes red flags for metastatic cord compression: known bone metastases, thoracic pain, pain lying flat, band like pain.",
      points: 2,
      teaching: "Pain often precedes deficits by weeks. Thoracic location and night pain in a patient with cancer should trigger urgent imaging.",
      source: "nice-ng234",
    },
    {
      id: "cc-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Performs a full neurological exam with a sensory level, reflexes, plantars, perianal sensation and bladder scan.",
      points: 2,
      teaching: "A documented baseline exam lets you detect progression. Retention with a sensory level means the cord or conus is involved.",
      source: "nice-ng234",
    },
    {
      id: "cc-m1",
      competency: "management",
      criterion: "management",
      text: "Catheterizes for retention and gives titrated IV opioid analgesia.",
      points: 1,
      teaching: "Unrecognized retention causes pain, delirium and kidney injury. Good analgesia is needed to lie still for MRI.",
      source: "nice-ng234",
    },
    {
      id: "cc-m2",
      competency: "management",
      criterion: "management",
      text: "Gives dexamethasone 10 mg IV now then 16 mg per day in divided doses, without waiting for MRI, with PPI and glucose monitoring.",
      points: 3,
      critical: true,
      teaching: "Steroids reduce edema and pain. About 16 mg per day is recommended by both Loblaw and NICE NG234. Very high doses add harm without benefit.",
      source: "loblaw",
    },
    {
      id: "cc-m3",
      competency: "management",
      criterion: "physical",
      text: "Obtains urgent whole spine MRI, within 24 hours and sooner with progressive deficits, and does not rely on X rays or CT alone.",
      points: 3,
      critical: true,
      teaching: "About a third of patients have more than one level of disease. MRI of the whole spine is the standard.",
      source: "nice-ng234",
    },
    {
      id: "cc-m4",
      competency: "management",
      criterion: "management",
      text: "Keeps flat with log roll until stability is assessed and prevents pressure injury and constipation.",
      points: 1,
      teaching: "The SINS score helps the surgeon judge instability. Until then, pain on movement suggests the spine may be unstable.",
      source: "sins",
    },
    {
      id: "cc-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges transfer the same night to a centre with MRI, spine surgery and radiation oncology.",
      points: 3,
      critical: true,
      teaching: "Ambulatory status at the time of treatment is the strongest predictor of walking after treatment. Delay costs function.",
      source: "patchell",
    },
    {
      id: "cc-c1",
      competency: "communication",
      criterion: "process",
      text: "Presents progression, prognosis and CT stability features to the spine surgeon and requests a joint decision with radiation oncology.",
      points: 2,
      teaching: "Decompressive surgery plus radiation improved walking compared with radiation alone in selected patients with a single level of compression.",
      source: "patchell",
    },
    {
      id: "cc-c2",
      competency: "communication",
      criterion: "process",
      text: "Answers his question about walking honestly, including uncertainty and why speed matters.",
      points: 1,
      teaching: "Patients handle honest uncertainty better than false reassurance. Link the urgency to the outcome they care about.",
      source: "loblaw",
    },
    {
      id: "cc-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Confirms goals of care and his wish for active treatment and involves his wife with his permission.",
      points: 1,
      teaching: "Treatment of cord compression ranges from surgery to palliation. Goals guide the choice and should be confirmed early.",
      source: "nice-ng234",
    },
    {
      id: "cc-l1",
      competency: "leadership",
      criterion: "process",
      text: "Identifies the missed early warning signs as a system issue and proposes collegial feedback and a local urgent imaging pathway.",
      points: 1,
      teaching: "Delays in diagnosis are common. Patient education and a clear pathway for urgent MRI shorten the time to treatment.",
      source: "nice-ng234",
    },
    {
      id: "cc-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers the differential including epidural abscess, pathological fracture, cauda equina and hypercalcemia.",
      points: 1,
      teaching: "Fever or injection drug use points to abscess. A low conus lesion gives mixed upper and lower motor signs. Calcium is easy to check.",
      source: "nice-ng234",
    },
    {
      id: "cc-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the cancer history: primary site, known bone metastases, current treatment and the last oncology review.",
      points: 2,
      teaching: "Known bone metastases make new spinal pain cord compression until proven otherwise. Prostate, breast and lung cancer and myeloma cause most cases.",
      source: "nice-ng234",
    },
    {
      id: "cc-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the onset and progression of leg weakness and falls, bladder and bowel function and saddle numbness.",
      points: 2,
      teaching: "A deficit that is getting worse over hours to days is an emergency. Retention and saddle symptoms mean the cord or cauda equina is failing.",
      source: "nice-ng234",
    },
    {
      id: "cc-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about baseline mobility and performance status before this illness.",
      points: 1,
      teaching: "Walking status and performance status before treatment predict outcome and shape the choice between surgery and radiation.",
      source: "patchell",
    },
  ],
  sources: [
    {
      id: "nice-ng234",
      citation: "National Institute for Health and Care Excellence. Spinal metastases and metastatic spinal cord compression. NICE guideline NG234. 2023.",
      url: "https://www.nice.org.uk/guidance/ng234",
    },
    {
      id: "loblaw",
      citation:
        "Loblaw DA et al. A 2011 updated systematic review and clinical practice guideline for the management of malignant extradural spinal cord compression. International Journal of Radiation Oncology, Biology, Physics. 2012.",
    },
    {
      id: "patchell",
      citation:
        "Patchell RA et al. Direct decompressive surgical resection in the treatment of spinal cord compression caused by metastatic cancer. A randomised trial. Lancet. 2005.",
    },
    {
      id: "sins",
      citation:
        "Fisher CG et al. A novel classification system for spinal instability in neoplastic disease. An evidence based approach and expert consensus from the Spine Oncology Study Group. Spine. 2010.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
