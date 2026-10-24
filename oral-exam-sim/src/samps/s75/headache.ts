// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  dziho: { id: "dziho-csdh", citation: "Dziho A, Al Awadhi A, Mollica C, and colleagues. Global prevalence and incidence of chronic subdural hematoma: a systematic review. Brain Spine. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12720100/" },
  teitelbaum: { id: "teitelbaum-motor", citation: "Teitelbaum JS, Eliasziw M, Garner M. Tests of motor function in patients suspected of having mild unilateral cerebral lesions. Can J Neurol Sci. 2002.", url: "https://www.cambridge.org/core/journals/canadian-journal-of-neurological-sciences/article/tests-of-motor-function-in-patients-suspected-of-having-mild-unilateral-cerebral-lesions/78026E91403731ADAE0B6C57B62282FB" },
  schulman: { id: "schulman-pcc", citation: "Schulman S, Gross PL, Ritchie B, and colleagues. Prothrombin complex concentrate for major bleeding on factor Xa inhibitors: a prospective cohort study. Thromb Haemost. 2018." },
  dexCsdh: { id: "dex-csdh", citation: "Hutchinson PJ, Edlmann E, Bulters D, and colleagues. Trial of dexamethasone for chronic subdural hematoma. N Engl J Med. 2020." },
  cohen: { id: "cohen-zoster", citation: "Cohen JI. Clinical practice: herpes zoster. N Engl J Med. 2013.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4789101/" },
  cigHz: { id: "cig-hz", citation: "Public Health Agency of Canada. Canadian Immunization Guide, Part 4. Herpes zoster (shingles) vaccine. Updated 2025.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-8-herpes-zoster-(shingles)-vaccine.html" },
  snnoop: { id: "snnoop10", citation: "Do TP, Remmers A, Schytz HW, and colleagues. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019." },
  chsEd: { id: "chs-ed", citation: "Orr SL, Aube M, Becker WJ, and colleagues. Canadian Headache Society systematic review and recommendations on the treatment of migraine pain in emergency settings. Cephalalgia. 2015." },
  lactmed: { id: "lactmed", citation: "National Institute of Child Health and Human Development. Drugs and Lactation Database (LactMed). Bethesda (MD). 2006 onward. Entries on dihydroergotamine (2021), ketorolac, codeine and sumatriptan (2025)." },
  schmit: { id: "schmit-gradenigo", citation: "Schmit C, Keller F, Gottfried T, and colleagues. The diagnosis, management, and outcomes of Gradenigo syndrome in children: a scoping review of the literature. Diagnostics (Basel). 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12428227/" },
  ichd: { id: "ichd3-cardiac", citation: "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. 10.6 Cardiac cephalalgia. Cephalalgia. 2018.", url: "https://ichd-3.org/10-headache-attributed-to-disorder-of-homoeostasis/10-6-cardiac-cephalalgia/" },
  esc: { id: "esc-acs-2023", citation: "Byrne RA, Rossello X, Coughlan JJ, and colleagues. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023." },
} satisfies Record<string, Source>;

export const HEADACHE_S75: Samp[] = [
  /* 48 Chronic subdural hematoma on apixaban, rural hospital ------------- */
  {
    id: "headache-48",
    topic: "headache",
    alsoTopics: ["loc"],
    title: "A slow headache in an older man",
    stem:
      "You are working in a rural hospital emergency department with CT but no neurosurgery. The regional neurosurgical centre is 2 hours away by road. A 79-year-old man is brought in by his daughter with a headache for 3 weeks that has worsened over the past 4 days. She says he has become slow to answer and twice dropped his coffee cup from his left hand this week. He has atrial fibrillation, hypertension and type 2 diabetes. He takes apixaban 5 mg twice daily, ramipril and metformin. His last apixaban dose was 3 hours ago. He is oriented to person and place but not to the date. GCS 14 (E4 V4 M6). Pupils are equal and reactive. Capillary glucose is 7.8 mmol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute irregular", resp: "16/minute", bp: "156/88 mmHg", o2sat: "97% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of his recent history is most important to ask his daughter about?",
        options: ["Analgesic use on most days", "Fall or knock to the head", "Family history of migraine", "New eyeglass prescription", "Recent caffeine withdrawal"],
        correct: 1,
        explanation:
          "A headache that has built over weeks in a 79-year-old taking apixaban, now with new confusion and a clumsy left hand, points to a structural lesion such as a chronic subdural hematoma. In a systematic review, trauma and falls were the most common cause of chronic subdural hematoma and antithrombotic drugs were an important contributing factor. The injury can be minor and weeks old, so it must be asked about directly. Daily analgesic use, a family history of migraine, new glasses and caffeine withdrawal can each explain a benign headache, but none explains a focal deficit or new confusion.",
        keyFeature: { topic: "headache", n: 1 },
        source: "dziho-csdh",
      },
      {
        id: "q2",
        kind: "single",
        update: "His daughter recalls that he slipped on ice in the driveway about 5 weeks ago and got up on his own. Strength in his left hand looks normal on quick testing.",
        prompt: "Which of the following examination tests is most sensitive for mild weakness of his left arm?",
        options: ["Deep tendon reflexes of the arms", "Finger tapping speed", "Grip strength against resistance", "Pronator drift with arms held out", "Segmental power of each muscle"],
        correct: 3,
        explanation:
          "Holding both arms out with the palms up and watching for drift and pronation is the most sensitive bedside screen for a mild upper motor neuron weakness. In a Canadian study of patients suspected of a mild unilateral cerebral lesion, drift and pronator testing had a sensitivity of 92.2% and a specificity of 90.0% for a lesion confirmed on CT. Segmental power testing, of which grip strength is one part, was specific but detected only 38.9%. Finger tapping (73.3%) and hyperreflexia (68.9%) were less sensitive. Normal grip strength therefore does not exclude a lesion in this man.",
        keyFeature: { topic: "headache", n: 3 },
        source: "teitelbaum-motor",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update: "He has a left pronator drift. Non-contrast CT shows a right chronic subdural hematoma 21 mm thick with areas of fresh blood and 9 mm of midline shift. His GCS is unchanged.",
        prompt: "Which of the following are the most appropriate next steps in his management?",
        options: [
          "Admission to medicine for observation",
          "Fresh frozen plasma 4 units IV",
          "Idarucizumab 5 g IV",
          "Mannitol 1 g/kg IV",
          "Prothrombin complex 2 000 units IV",
          "Repeat CT head in 24 hours",
          "Transfer to the neurosurgical centre",
          "Vitamin K 10 mg IV",
        ],
        correct: [4, 6],
        explanation:
          "A symptomatic chronic subdural hematoma with 9 mm of midline shift and new bleeding in a man who took apixaban 3 hours ago needs the anticoagulant effect reversed and neurosurgical drainage. In a prospective cohort of major bleeding on apixaban or rivaroxaban, nine Canadian hospitals treated patients with a fixed dose of 2 000 units of prothrombin complex concentrate. Idarucizumab reverses dabigatran only. Vitamin K and plasma replace factors depleted by warfarin and do not reverse apixaban, and plasma adds volume in an older man. Observation or a repeat CT delays surgery he already needs, and mannitol is not indicated without signs of herniation.",
        keyFeature: { topic: "headache", n: 2 },
        source: "schulman-pcc",
      },
      {
        id: "q4",
        kind: "single",
        update: "While transport is arranged, a nurse asks whether a steroid should be started, as is done for brain tumours with swelling.",
        prompt: "Which of the following best describes the effect of dexamethasone in patients with symptomatic chronic subdural hematoma?",
        options: ["Faster resolution without surgery", "Fewer favourable outcomes at 6 months", "Fewer seizures in the first month", "Lower mortality at 30 days", "No effect on outcome or recurrence"],
        correct: 1,
        explanation:
          "In a randomized trial of 680 adults with symptomatic chronic subdural hematoma, a 2 week tapering course of dexamethasone led to a favourable outcome at 6 months in 83.9%, against 90.3% with placebo. Adverse events were also more common with dexamethasone. Repeat surgery for recurrence was less frequent with dexamethasone (1.7% against 7.1%), so it is wrong to say the drug has no effect. The trial did not show faster resolution without surgery, fewer seizures or lower mortality. Dexamethasone should not be started for him, and the drainage plan stands.",
        keyFeature: { topic: "headache", n: 2 },
        source: "dex-csdh",
      },
    ],
    sources: [S.dziho, S.teitelbaum, S.schulman, S.dexCsdh],
    ...META,
  },

  /* 49 Cervical zoster hidden under the hair ------------------------------ */
  {
    id: "headache-49",
    topic: "headache",
    alsoTopics: ["infectious-diseases"],
    title: "Burning pain at the back of the head",
    stem:
      "A 72-year-old woman presents to the emergency department with 4 days of severe pain over the back of the right side of her head. The pain burns, with sudden stabs, and spreads behind her right ear and down the right side of her neck. Her pillow and the collar of her coat make it much worse. Yesterday a walk-in clinic diagnosed a tension headache. She has type 2 diabetes treated with metformin, and her creatinine last month was 74 umol/L. She lives with her granddaughter, who is 24 weeks pregnant and has never had chickenpox or the vaccine. She is alert and oriented. Her neck is supple, her face is symmetric and the neurological examination is normal.",
    vitals: { temperature: "37.4°C oral", pulse: "88/minute", resp: "16/minute", bp: "148/82 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following parts of the examination is most likely to show the cause of her pain?",
        options: ["Fundoscopy for optic disc swelling", "Palpation of the occipital nerves", "Parting the hair to inspect the scalp", "Range of motion of the neck", "Temporal artery palpation"],
        correct: 2,
        explanation:
          "Burning, stabbing pain made worse by light touch and confined to one side of the scalp, ear and neck follows a nerve distribution, and herpes zoster often begins this way. The zoster rash is often preceded by tingling, itching or pain for 2 to 3 days, and on the scalp early vesicles are easily hidden by hair. Parting the hair is the quickest way to find them. Fundoscopy looks for raised pressure, and temporal artery palpation looks for giant cell arteritis, but neither explains pain provoked by light touch along the neck. Occipital nerve tenderness and neck movement would not show the cause.",
        keyFeature: { topic: "headache", n: 3 },
        source: "cohen-zoster",
      },
      {
        id: "q2",
        kind: "single",
        update: "Parting her hair shows clusters of vesicles on a red base over the right occipital scalp, behind the right ear and on the upper right neck. They stop at the midline. The ear canals and face are clear.",
        prompt: "Which of the following is the most likely diagnosis for her headache and rash?",
        options: ["Cervical herpes zoster", "Herpes simplex reactivation", "Occipital neuralgia", "Ramsay Hunt syndrome", "Scalp folliculitis"],
        correct: 0,
        explanation:
          "Grouped vesicles on a red base in a band over the occipital scalp, behind the ear and down the upper neck, on one side only and stopping at the midline, after days of burning pain, are herpes zoster of the upper cervical dermatomes. The cervical dermatomes are among the most common sites of the rash. Ramsay Hunt syndrome needs facial weakness with ear involvement, and her face and ear canals are normal. Herpes simplex forms a small recurrent cluster, not a dermatomal band. Occipital neuralgia causes no rash, and folliculitis gives pustules around hair follicles without this pain.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cohen-zoster",
      },
      {
        id: "q3",
        kind: "single",
        update: "The rash appeared yesterday afternoon. She has no allergies.",
        prompt: "Which of the following is the most appropriate treatment for her herpes zoster?",
        options: ["acyclovir 5% cream five times daily", "acyclovir 400 mg PO three times daily", "famciclovir 250 mg PO three times daily", "prednisone 50 mg PO once daily", "valacyclovir 1 000 mg PO three times daily"],
        correct: 4,
        explanation:
          "Her rash is less than a day old, inside the 72 hour window in which antivirals are generally started, and she is over 50 with zoster of the head and neck. Valacyclovir 1 g PO three times daily for 7 days is a standard regimen for a patient who is not immunocompromised, and her creatinine of 74 umol/L needs no dose change. Acyclovir for zoster is 800 mg five times daily, so 400 mg three times daily is far too low. Famciclovir for zoster is 500 mg three times daily. Topical acyclovir is not an accepted treatment for zoster, and a steroid should not be given without an antiviral.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cohen-zoster",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about contact with her pregnant granddaughter?",
        options: ["Avoid contact until the lesions crust over", "Contact is safe as shingles is not infectious", "Contact is safe once antivirals have started", "Granddaughter should take acyclovir now", "Granddaughter should wear a mask nearby"],
        correct: 0,
        explanation:
          "Her granddaughter has never had chickenpox or the vaccine, so she can catch chickenpox from the rash. The Canadian Immunization Guide states that the virus spreads from a person with herpes zoster to someone who has never had varicella by direct contact with the skin lesions, and that a person with zoster is infectious until all lesions are crusted over. Starting an antiviral does not end this period, so contact is not safe from that point. Localized zoster spreads by touching the lesions, which a mask does not prevent. No medicine is needed for the granddaughter if contact is avoided.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cig-hz",
      },
    ],
    sources: [S.cohen, S.cigHz],
    ...META,
  },

  /* 50 Migraine in a breastfeeding mother after an ergot ------------------- */
  {
    id: "headache-50",
    topic: "headache",
    title: "A night of headache with a baby at home",
    stem:
      "A 31-year-old woman presents to the emergency department at 07:00 with a left-sided throbbing headache that began 11 hours ago, with nausea, vomiting and sensitivity to light. It feels like the migraine attacks she has had since age 16, which stopped during pregnancy and returned 2 months ago. She gave birth 5 months ago and exclusively breastfeeds her son. At 02:00 she used one dose of dihydroergotamine 2 mg nasal spray, left over from before her pregnancy, without relief. She has no history of depression, peptic ulcer or kidney disease. She takes no other medications.",
    vitals: { temperature: "36.8°C oral", pulse: "90/minute", resp: "16/minute", bp: "122/76 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following symptoms, if she reported it, would most require investigation before this is treated as migraine?",
        options: ["Light and sound sensitivity", "Nausea through the attack", "Pain at peak within one minute", "Pain worse with routine activity", "Throbbing on one side of the head"],
        correct: 2,
        explanation:
          "Sudden onset, with the pain reaching its peak almost at once, is a red flag in the SNNOOP10 list and calls for investigation for subarachnoid hemorrhage and other vascular causes, even in a woman with known migraine. Sensitivity to light and sound, nausea, worsening with routine activity and one-sided throbbing are the usual features of a migraine attack, so they support her own diagnosis rather than a secondary cause. Her attack built over hours and matches her usual pattern.",
        keyFeature: { topic: "headache", n: 1 },
        source: "snnoop10",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says the onset was gradual over about an hour, as usual. She has no fever, weakness or visual loss.",
        prompt: "Which of the following examination findings would most require further investigation before treating her for migraine?",
        options: ["Allodynia over the scalp", "Bilateral optic disc swelling", "Pericranial muscle tenderness", "Photophobia during fundoscopy", "Vomiting during the examination"],
        correct: 1,
        explanation:
          "Papilledema is one of the SNNOOP10 red flags and points to raised intracranial pressure, which in a young woman after a recent pregnancy includes cerebral venous thrombosis and idiopathic intracranial hypertension. It calls for imaging before her headache is labelled migraine. Scalp allodynia, tender pericranial muscles, discomfort from the light of the ophthalmoscope and vomiting are all common during a migraine attack and do not by themselves suggest a secondary cause. A careful fundoscopy is therefore part of the assessment of every headache that brings a patient to the emergency department.",
        keyFeature: { topic: "headache", n: 3 },
        source: "snnoop10",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her fundi, neck and neurological examination are normal. She asks for a treatment that is safe while she breastfeeds.",
        prompt: "Which of the following is the most appropriate parenteral treatment for her headache now?",
        options: ["dexamethasone 10 mg IV", "dihydroergotamine 1 mg IV", "hydromorphone 1 mg IV", "ketorolac 30 mg IV", "metoclopramide 10 mg IV"],
        correct: 4,
        explanation:
          "The Canadian Headache Society review of emergency migraine treatment strongly recommends metoclopramide, which also treats her vomiting, and LactMed describes infant exposure through milk as usually low. She has no history of depression, the main maternal caution. The same review strongly recommends against dexamethasone for migraine pain. A second ergot within hours of her nasal dihydroergotamine adds to a drug class that most authorities consider unsuitable during breastfeeding. Ketorolac is effective, but its manufacturer lists breastfeeding as a contraindication. Opioids such as hydromorphone are not first-line treatment for migraine.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-ed",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her headache settles 1 hour after treatment. She asks when she can breastfeed again because of the nasal spray she used at 02:00.",
        prompt: "Which of the following is the most appropriate advice about breastfeeding after her dose of nasal dihydroergotamine?",
        options: ["Breastfeed now without a break", "Give formula for 24 hours, then resume", "Pump and discard milk for 3 days", "Pump and discard milk for 12 hours", "Switch to formula for 2 weeks"],
        correct: 2,
        explanation:
          "There are no published data on dihydroergotamine in breastfeeding, and most authorities consider ergots contraindicated during nursing because of possible effects on the infant and on milk supply. LactMed reports that the manufacturer of the nasal spray advises against breastfeeding during treatment and for 3 days after the last dose, with any milk pumped in that time discarded. Pumping keeps her supply going until she can resume. Feeding now or after 12 or 24 hours falls short of that advice, and 2 weeks of formula is longer than needed and puts her milk supply at risk.",
        keyFeature: { topic: "headache", n: 5 },
        source: "lactmed",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication for her to take at the start of future attacks?",
        options: ["acetaminophen with codeine 30 mg PO", "dihydroergotamine 2 mg nasal spray", "ketorolac 10 mg PO", "sumatriptan 50 mg PO", "tramadol 50 mg PO"],
        correct: 3,
        explanation:
          "LactMed describes sumatriptan as a preferred triptan during breastfeeding, because milk levels are low and it is poorly absorbed by the infant by mouth, and adverse effects are not expected in most breastfed infants. Taken early in an attack it may also keep her out of the emergency department. LactMed notes that regulators and professional groups prefer other agents to codeine in nursing mothers. Ketorolac carries a manufacturer contraindication in breastfeeding, and the nasal dihydroergotamine has already failed her and requires 3 days without breastfeeding after each dose. Tramadol is not recommended for routine migraine treatment.",
        keyFeature: { topic: "headache", n: 5 },
        source: "lactmed",
      },
    ],
    sources: [S.snnoop, S.chsEd, S.lactmed],
    ...META,
  },

  /* 51 Petrous apicitis in a child, remote northern hospital ---------------- */
  {
    id: "headache-51",
    topic: "headache",
    alsoTopics: ["pediatric-fever"],
    title: "A boy who sees double at the television",
    stem:
      "You are working in a small hospital in a remote northern community. There is no CT. Transfer to the children's hospital is by air ambulance. An 8-year-old boy is brought in by his mother with 5 days of headache behind his left eye and 2 days of double vision when he looks at the television across the room. Three weeks ago he had a left earache that was treated with amoxicillin for 10 days, and the earache settled. He has had fevers at night for 3 days. He has no medical history and his immunizations are up to date. He is alert and answers questions normally. His neck is supple. On looking to the left, his left eye does not move past the midline. His other eye movements and pupils are normal.",
    vitals: { temperature: "38.6°C oral", pulse: "112/minute", resp: "22/minute", bp: "104/62 mmHg", o2sat: "98% on room air", weight: "27 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following parts of the examination is most likely to show the source of his illness?",
        options: ["Dental inspection for an abscess", "Fundoscopy for disc swelling", "Otoscopy of the left ear", "Palpation of neck nodes", "Palpation over the sinuses"],
        correct: 2,
        explanation:
          "A left sixth nerve palsy with pain behind the left eye and fever, weeks after a left ear infection, raises concern that the infection has spread from the middle ear to the petrous apex of the temporal bone. In a review of 65 children with this syndrome, 45% had received antibiotics before they presented and only 38% had ear discharge at first, so the ear must be examined even when the earache has settled. Fundoscopy matters for raised pressure but does not show where an infection began. Teeth, sinuses and neck nodes do not fit a palsy on the side of the treated ear.",
        keyFeature: { topic: "headache", n: 3 },
        source: "schmit-gradenigo",
      },
      {
        id: "q2",
        kind: "single",
        update: "Otoscopy shows a perforated left eardrum with thick yellow discharge. There is mild tenderness behind the left ear without swelling. His fundi are normal.",
        prompt: "Which of the following is the most likely cause of his double vision?",
        options: ["Benign sixth nerve palsy", "Diffuse pontine glioma", "Orbital cellulitis", "Petrous apicitis", "Pseudotumour cerebri"],
        correct: 3,
        explanation:
          "Ear discharge, pain behind the eye in the trigeminal territory and a sixth nerve palsy on the same side form the triad of Gradenigo syndrome, caused by infection of the petrous apex next to the sixth nerve. Only about a fifth of children show all three, so this full picture is strong evidence. A benign sixth nerve palsy after a viral illness is a diagnosis of exclusion and does not explain fever and pus from the ear. A pontine glioma causes slowly progressive deficits without ear infection. He has no eyelid swelling for orbital cellulitis, and his fundi are normal, which argues against pseudotumour cerebri.",
        keyFeature: { topic: "headache", n: 4 },
        source: "schmit-gradenigo",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Air transfer for imaging before antibiotics", "Ciprofloxacin ear drops and ENT referral", "IV ceftriaxone now, then air transfer", "Lumbar puncture, then IV antibiotics", "Oral amoxicillin-clavulanate and review"],
        correct: 2,
        explanation:
          "He has a complicated ear infection that has progressed despite 10 days of oral antibiotics, and imaging is hours away. IV antibiotics should start now, before the flight. In the review of children with Gradenigo syndrome, a third-generation cephalosporin was the most used inpatient antibiotic and the only regimen linked to fewer complications. Combined CT and MRI is needed to define the disease, and most children also need ear surgery, so he must go to the children's hospital. A lumbar puncture before imaging is unsafe while a cranial nerve palsy may reflect an intracranial complication. Ear drops or another oral course would not treat bone infection.",
        keyFeature: { topic: "headache", n: 6 },
        source: "schmit-gradenigo",
      },
      {
        id: "q4",
        kind: "single",
        update: "Ceftriaxone is given IV. Bad weather delays the aircraft by several hours, and he is reassessed every hour.",
        prompt: "Which of the following new findings would most suggest that the infection has spread inside the skull?",
        options: ["Drowsiness and a stiff neck", "Fever rising to 39.5°C", "More discharge from the ear", "Redness of the ear canal", "Tenderness behind the ear"],
        correct: 0,
        explanation:
          "A falling level of consciousness with neck stiffness signals meningitis or another intracranial complication and changes the urgency of his transfer and his care during the wait. In the review of children with Gradenigo syndrome, MRI showed meningeal enhancement in 27% and venous sinus thrombosis in 15%, and one child died. A higher fever, more discharge, a red ear canal and tenderness behind the ear reflect the ear and mastoid infection he already has and do not by themselves show spread inside the skull. Serial checks of his level of consciousness and neck are the bedside way to catch this early.",
        keyFeature: { topic: "headache", n: 3 },
        source: "schmit-gradenigo",
      },
    ],
    sources: [S.schmit],
    ...META,
  },

  /* 52 Cardiac cephalalgia labelled as migraine -------------------------- */
  {
    id: "headache-52",
    topic: "headache",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Headaches on the stairs",
    stem:
      "A 66-year-old man presents to the emergency department with 3 weeks of attacks of severe headache across the front of his head. Each attack starts while he climbs the stairs to his apartment or carries his groceries, comes with nausea and fades within 5 to 10 minutes after he stops to rest. He has never had headaches before. Light and noise do not bother him during attacks. A walk-in clinic diagnosed migraine 5 days ago and prescribed sumatriptan 50 mg, which he has not yet taken. He has type 2 diabetes and hypertension, takes only metformin and amlodipine, and has smoked a pack a day for 40 years. He is pain free now. The neurological examination and fundoscopy are normal.",
    vitals: { temperature: "36.6°C oral", pulse: "82/minute", resp: "16/minute", bp: "154/90 mmHg", o2sat: "97% on room air", weight: "94 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his headaches most suggests a cardiac cause?",
        options: ["Bilateral pressing quality", "Nausea during the attacks", "Onset after age 50", "Relief within minutes of rest", "Worse when lying down"],
        correct: 3,
        explanation:
          "Headache brought on by exertion that resolves within minutes of rest, in a smoker with diabetes and hypertension, follows the rise and fall of myocardial ischemia. ICHD-3 defines cardiac cephalalgia as a headache that worsens and improves in parallel with ischemia and is usually aggravated by exertion. Nausea occurs in both cardiac cephalalgia and migraine, so it does not separate them. New headache after 50 is a general warning sign without pointing to the heart. A bilateral pressing quality suggests tension-type headache, and worsening when lying down suggests raised intracranial pressure.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3-cardiac",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations should be done first in this patient?",
        options: ["CT angiogram of head and neck", "ECG with 12 leads", "Erythrocyte sedimentation rate", "Lumbar puncture with pressure", "MRI of the brain with contrast"],
        correct: 1,
        explanation:
          "Cardiac cephalalgia is diagnosed by showing myocardial ischemia at the time of the headache, and ICHD-3 warns that missing it can have serious consequences. An ECG takes minutes, can show ischemia or prior infarction, and is the first step while serial ECGs and troponin follow. Neuroimaging for a new exertional headache in an older man may still be needed once the heart has been assessed. An ESR looks for giant cell arteritis, which does not cause attacks that stop with rest. A lumbar puncture is not the first test for brief attacks without fever or thunderclap onset.",
        keyFeature: { topic: "headache", n: 2 },
        source: "ichd3-cardiac",
      },
      {
        id: "q3",
        kind: "single",
        update: "His first ECG is normal. While walking to the washroom 20 minutes later, the headache returns with nausea. A repeat ECG shows new 2 mm horizontal ST depression in leads V4 to V6.",
        prompt: "Which of the following is the most appropriate treatment for his headache now?",
        options: ["acetaminophen 1 000 mg PO", "ketorolac 30 mg IV", "metoclopramide 10 mg IV", "nitroglycerin 0.4 mg SL", "sumatriptan 6 mg SC"],
        correct: 3,
        explanation:
          "A headache that returns with new ST depression is cardiac cephalalgia until proven otherwise, and ICHD-3 describes it as relieved by nitroglycerin. Sublingual nitroglycerin treats the ischemia and so the headache, with his BP well above the range where nitrates are unsafe. ICHD-3 stresses that triptans and ergots are contraindicated in ischemic heart disease, so the sumatriptan he was given must not be used. Acetaminophen, ketorolac and metoclopramide may dull a migraine but do nothing for the myocardial ischemia that is driving the pain.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ichd3-cardiac",
      },
      {
        id: "q4",
        kind: "single",
        update: "The headache and the ST depression resolve within 5 minutes of nitroglycerin. His first high-sensitivity troponin is below the 99th percentile.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admission for early invasive coronary assessment", "Discharge with outpatient exercise testing", "Discharge with sumatriptan for future attacks", "Neurology clinic referral within 2 weeks", "Observation for 3 hours, then discharge"],
        correct: 0,
        explanation:
          "Transient ST depression with symptoms is ischemia, and a normal first troponin does not exclude an acute coronary syndrome. The 2023 ESC guideline lists dynamic ST-segment changes among the high-risk features of a non-ST-elevation acute coronary syndrome that call for an early invasive strategy within 24 hours. Discharge for outpatient exercise testing or after brief observation sends home a man with active ischemia. Sumatriptan is unsafe with ischemic heart disease. A neurology referral addresses the headache but not the ischemia that causes it.",
        keyFeature: { topic: "headache", n: 4 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.ichd, S.esc],
    ...META,
  },
];
