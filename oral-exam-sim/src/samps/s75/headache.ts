// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  eanoLm: { id: "eano-lm", citation: "Le Rhun E, Weller M, van den Bent M, and colleagues, EANO and ESMO Guidelines Committees. Leptomeningeal metastasis from solid tumours: EANO-ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. ESMO Open. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10619142/" },
  cpsAom: { id: "cps-aom", citation: "Le Saux N, Robinson JL, Canadian Paediatric Society Infectious Diseases and Immunization Committee. Management of acute otitis media in children six months of age and older. Paediatr Child Health. 2016. Reaffirmed 2024.", url: "https://cps.ca/en/documents/position/acute-otitis-media" },
  ichdOn: { id: "ichd3-occipital", citation: "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. 13.4 Occipital neuralgia, 4.7 Primary stabbing headache and 11.2.1 Cervicogenic headache. Cephalalgia. 2018.", url: "https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-4-occipital-neuralgia/" },
  ahsPnb: { id: "ahs-pnb", citation: "Blumenfeld A, Ashkenazi A, Napchan U, and colleagues, American Headache Society Special Interest Section for Peripheral Nerve Blocks. Expert consensus recommendations for the performance of peripheral nerve blocks for headaches: a narrative review. Headache. 2013." },
  snnoop: { id: "snnoop10", citation: "Do TP, Remmers A, Schytz HW, and colleagues. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019." },
  chsEd: { id: "chs-ed", citation: "Orr SL, Aube M, Becker WJ, and colleagues. Canadian Headache Society systematic review and recommendations on the treatment of migraine pain in emergency settings. Cephalalgia. 2015." },
  lactmed: { id: "lactmed", citation: "National Institute of Child Health and Human Development. Drugs and Lactation Database (LactMed). Bethesda (MD). 2006 onward. Entries on dihydroergotamine (2021), ketorolac, codeine and sumatriptan (2025), and metoclopramide." },
  schmit: { id: "schmit-gradenigo", citation: "Schmit C, Keller F, Gottfried T, and colleagues. The diagnosis, management, and outcomes of Gradenigo syndrome in children: a scoping review of the literature. Diagnostics (Basel). 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12428227/" },
  ichd: { id: "ichd3-cardiac", citation: "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. 10.6 Cardiac cephalalgia. Cephalalgia. 2018.", url: "https://ichd-3.org/10-headache-attributed-to-disorder-of-homoeostasis/10-6-cardiac-cephalalgia/" },
  esc: { id: "esc-acs-2023", citation: "Byrne RA, Rossello X, Coughlan JJ, and colleagues. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023." },
} satisfies Record<string, Source>;

export const HEADACHE_S75: Samp[] = [
  /* 48 Leptomeningeal metastasis after breast cancer, community hospital -- */
  {
    id: "headache-48",
    topic: "headache",
    title: "Headache, double vision and a numb lip",
    stem:
      "You are working in a community hospital emergency department with CT. MRI and oncology are at the regional centre, 1 hour away. A 58-year-old woman presents with 3 weeks of a constant headache that is worse in the morning, with nausea. For 1 week she has seen double when she looks to the right, and for 3 days the left side of her chin and lower lip have felt numb. Three years ago she had stage III breast cancer treated with surgery, chemotherapy and radiation, and she now takes letrozole. She lives in the city and has had no tick bites. She is alert and oriented. Her right eye does not abduct fully. Light touch is reduced over the left chin and lower lip. The whole left side of her face is weak, including the forehead. Limb strength, sensation and reflexes are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "84/minute", resp: "16/minute", bp: "132/78 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following symptoms is most important to ask her about next?",
        options: ["Aching joints from letrozole", "Back pain spreading down a leg", "Light sensitivity with headaches", "Relief with acetaminophen", "Snoring and daytime sleepiness"],
        correct: 1,
        explanation:
          "A new headache with deficits of several cranial nerves in a woman treated for breast cancer raises concern for cancer spreading along the meninges, which can involve the spinal nerve roots as well as the brain. The EANO-ESMO guideline lists radicular pain, weakness, voiding problems and cauda equina symptoms among its typical features, and spinal involvement changes imaging and treatment. Joint aches are a common effect of letrozole. Light sensitivity and relief with acetaminophen fit a primary headache, and snoring with daytime sleepiness suggests sleep apnea, which can cause morning headache. None of them explains her cranial nerve findings.",
        keyFeature: { topic: "headache", n: 1 },
        source: "eano-lm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains the pattern of her cranial nerve findings?",
        options: ["Left cerebellopontine angle mass", "Left cerebral hemisphere lesion", "Multiple lesions on both sides", "Right cavernous sinus lesion", "Single lesion in the pons"],
        correct: 2,
        explanation:
          "She has a right sixth nerve palsy, numbness in the left chin and lower lip from the third division of the left trigeminal nerve, and weakness of the whole left face, including the forehead, from the left facial nerve. Deficits on both sides that no single site can explain are multifocal, which the EANO-ESMO guideline calls highly suggestive of leptomeningeal metastasis. A left cerebellopontine angle mass could affect the left fifth and seventh nerves but not the right sixth. A cerebral lesion spares the forehead and does not cause a sixth nerve palsy. A right cavernous sinus lesion and a single pontine lesion cannot explain all three findings.",
        keyFeature: { topic: "headache", n: 3 },
        source: "eano-lm",
      },
      {
        id: "q3",
        kind: "single",
        update: "A CT of the head with and without contrast is normal.",
        prompt: "Which of the following is the most likely cause of her headache and neurological findings?",
        options: ["Brainstem infarction", "Giant cell arteritis", "Guillain-Barre syndrome", "Leptomeningeal metastasis", "Lyme neuroborreliosis"],
        correct: 3,
        explanation:
          "Headache with several cranial nerve palsies on both sides in a woman with a history of breast cancer is leptomeningeal metastasis until proven otherwise, and the EANO-ESMO guideline advises considering it in particular in breast cancer, lung cancer and melanoma. A normal CT does not exclude it, because contrast-enhanced MRI is the reference imaging test. A brainstem infarction begins suddenly and would not add deficits on both sides over weeks. Guillain-Barre syndrome would be expected to affect limb strength and reflexes, which are normal. She lives in the city and recalls no tick bite. That makes Lyme disease unlikely, though a bite can go unnoticed, and her cancer history makes metastasis far more likely. Giant cell arteritis does not explain facial weakness and numbness.",
        keyFeature: { topic: "headache", n: 2 },
        source: "eano-lm",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        update: "She is admitted under internal medicine and transferred to the regional centre in the morning.",
        prompt: "Which of the following investigations are most appropriate to confirm the suspected diagnosis?",
        options: [
          "Carotid artery ultrasound",
          "CSF cytology after the MRI",
          "CT angiogram of head and neck",
          "Electroencephalogram",
          "Erythrocyte sedimentation rate",
          "MRI of brain and spine with contrast",
          "Nerve conduction studies",
          "Temporal artery biopsy",
        ],
        correct: [1, 5],
        explanation:
          "Contrast-enhanced MRI is the reference test for leptomeningeal metastasis, and the EANO-ESMO guideline advises imaging the brain and the spine on the same day or within 7 days. Imaging should come before the lumbar puncture, which can cause dural enhancement that confuses the MRI. CSF cytology then looks for tumour cells, ideally in more than 10 mL and at least 5 mL, processed promptly, with one repeat puncture if the first result is negative or equivocal. Vascular imaging, an EEG, nerve conduction studies, an ESR and a temporal artery biopsy do not test for cancer cells in the meninges.",
        keyFeature: { topic: "headache", n: 2 },
        source: "eano-lm",
      },
    ],
    sources: [S.eanoLm],
    ...META,
  },

  /* 49 Occipital neuralgia, community hospital --------------------------- */
  {
    id: "headache-49",
    topic: "headache",
    title: "Electric jolts at the back of the head",
    stem:
      "You are working in a community hospital emergency department. A 44-year-old man presents with 10 days of attacks of severe pain at the back of the left side of his head. Each attack is a sharp, shooting pain that lasts a few seconds and runs from the base of his skull up over the scalp toward the crown. He has up to 30 attacks a day, with a dull ache between them. Brushing his hair or resting his head on a pillow can set one off. He has no fever, rash, visual change, neck injury or weakness. He has no history of headaches and takes no medications.",
    vitals: { temperature: "36.7°C oral", pulse: "76/minute", resp: "14/minute", bp: "132/84 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would most suggest a secondary cause that needs investigation?",
        options: ["Left arm weakness, brisk reflexes", "Pain spreading toward the left eye", "Patchy numbness over the left occiput", "Shooting pain on brushing his hair", "Tenderness at the left skull base"],
        correct: 0,
        explanation:
          "Weakness with brisk reflexes in the arm on the side of the pain is a long tract sign, which points to a lesion of the brain, the craniocervical junction or the upper cervical cord and calls for imaging. The other findings belong to occipital neuralgia itself. ICHD-3 describes reduced sensation or dysesthesia in the affected area, allodynia when the scalp or hair is touched and tenderness over the nerve as part of the disorder. It also notes that the pain may reach the area around the eye through connections in the trigeminal nuclei, so spread toward the eye is not a warning sign on its own.",
        keyFeature: { topic: "headache", n: 3 },
        source: "ichd3-occipital",
      },
      {
        id: "q2",
        kind: "single",
        update: "The rest of his neurological examination is normal. Pressing just left of the midline at the base of the skull sets off his shooting pain. Light touch over the left occiput feels unpleasant. The scalp skin is normal.",
        prompt: "Which of the following is the most likely diagnosis for his headache?",
        options: ["Cervicogenic headache", "Occipital neuralgia", "Primary stabbing headache", "Tension-type headache", "Trigeminal neuralgia"],
        correct: 1,
        explanation:
          "Paroxysms of severe, shooting pain lasting seconds in the territory of the greater occipital nerve, with allodynia of the scalp and a trigger point where the nerve emerges, meet the ICHD-3 clinical criteria for occipital neuralgia, which are completed when a local anesthetic block of the nerve eases the pain. Primary stabbing headache has no nerve tenderness or allodynia, and ICHD-3 advises that stabs fixed to one area need a search for a structural cause at that site. Cervicogenic headache comes from a disorder of the neck, with reduced range of motion. Tension-type headache is a pressing ache, and trigeminal neuralgia affects the face, not the back of the scalp.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ichd3-occipital",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his pain in the emergency department?",
        options: ["Anesthetic nerve block", "High-flow oxygen by face mask", "hydromorphone 1 mg IV", "metoclopramide 10 mg IV", "sumatriptan 6 mg SC"],
        correct: 0,
        explanation:
          "A local anesthetic block of the greater occipital nerve treats the pain and supports the diagnosis, because ICHD-3 includes temporary relief by a block of the affected nerve among the criteria for occipital neuralgia. The American Headache Society consensus lists cranial neuralgias among the indications for peripheral nerve blocks and describes the greater occipital block, with skin numbness as the sign of technical success. He takes no anticoagulant, one of its listed precautions. High-flow oxygen treats cluster headache, whose attacks last much longer than seconds. Sumatriptan and metoclopramide treat migraine, and an opioid is not a treatment for a neuralgia.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ahs-pnb",
      },
      {
        id: "q4",
        kind: "single",
        update: "His attacks stop within 10 minutes of treatment. He asks whether a problem in his neck could be the cause.",
        prompt: "Which of the following findings would most suggest that his headache arises from the cervical spine?",
        options: ["Allodynia on the occipital scalp", "Attacks lasting a few seconds", "Dysesthesia over the occiput", "Neck turning limited and painful", "Trigger point at the nerve exit"],
        correct: 3,
        explanation:
          "ICHD-3 requires that occipital neuralgia be told apart from pain referred to the back of the head from the atlantoaxial or upper facet joints of the neck. For cervicogenic headache, ICHD-3 lists reduced cervical range of motion with headache made clearly worse by provocative manoeuvres as evidence of causation. Brief paroxysms, dysesthesia, allodynia on the scalp and a trigger point at the emergence of the greater occipital nerve are features of occipital neuralgia itself, so they do not point to the neck joints.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ichd3-occipital",
      },
    ],
    sources: [S.ichdOn, S.ahsPnb],
    ...META,
  },

  /* 50 Migraine in a breastfeeding mother after an ergot ------------------- */
  {
    id: "headache-50",
    topic: "headache",
    title: "A night of headache with a baby at home",
    stem:
      "A 31-year-old woman presents to the emergency department at 07:00 with a left-sided throbbing headache that began 11 hours ago, with nausea, vomiting and sensitivity to light. It built up gradually over about an hour, as her attacks usually do. It feels like the migraine attacks she has had since age 16, which stopped during pregnancy and returned 2 months ago. She gave birth 5 months ago and exclusively breastfeeds her son. At 02:00 she used one dose of dihydroergotamine 2 mg nasal spray, left over from before her pregnancy, without relief. She has no history of depression, peptic ulcer or kidney disease. She takes no other medications.",
    vitals: { temperature: "36.8°C oral", pulse: "90/minute", resp: "16/minute", bp: "122/76 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following symptoms, if she reported it, would most require investigation before this is treated as migraine?",
        options: ["Light and sound sensitivity", "Nausea through the attack", "Pain at peak within one minute", "Pain worse with routine activity", "Throbbing on one side of the head"],
        correct: 2,
        explanation:
          "Sudden onset, with the pain reaching its peak almost at once, is a red flag in the SNNOOP10 list and calls for investigation for subarachnoid hemorrhage and other vascular causes, even in a woman with known migraine. Sensitivity to light and sound, nausea, worsening with routine activity and one-sided throbbing are the usual features of a migraine attack, so they support her own diagnosis rather than a secondary cause. Her attack built up over about an hour and matches her usual pattern.",
        keyFeature: { topic: "headache", n: 1 },
        source: "snnoop10",
      },
      {
        id: "q2",
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
        id: "q3",
        kind: "single",
        update: "Her headache settles 1 hour after treatment. She asks when she can breastfeed again because of the nasal spray she used at 02:00.",
        prompt: "Which of the following is the most appropriate advice about breastfeeding after her dose of nasal dihydroergotamine?",
        options: ["Breastfeed now without a break", "Pump and discard milk for 3 days", "Pump and discard milk for 12 hours", "Switch to formula for 2 weeks", "Wait 6 hours, then breastfeed"],
        correct: 1,
        explanation:
          "There are no published data on dihydroergotamine in breastfeeding, and most authorities consider ergots contraindicated during nursing because of possible effects on the infant and on milk supply. LactMed reports that the manufacturer of the nasal spray advises against breastfeeding during treatment and for 3 days after the last dose, with any milk pumped in that time discarded. Pumping keeps her supply going until she can resume. Feeding now or after 6 or 12 hours falls short of that advice, and 2 weeks of formula is longer than needed and puts her milk supply at risk.",
        keyFeature: { topic: "headache", n: 5 },
        source: "lactmed",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication for her to take at the start of future attacks?",
        options: ["acetaminophen with codeine 30 mg PO", "dihydroergotamine 2 mg nasal spray", "ketorolac 10 mg PO", "sumatriptan 50 mg PO", "tramadol 50 mg PO"],
        correct: 3,
        explanation:
          "LactMed notes that sumatriptan has been recommended as a triptan of choice during breastfeeding, because milk levels are low, it is poorly absorbed by the infant by mouth and adverse effects are not expected in most breastfed infants. Its manufacturer advises withholding breastfeeding for 12 hours after a dose, but LactMed suggests this only in extreme cases, such as the mother of a preterm infant. Taken early in an attack it may also keep her out of the emergency department. LactMed notes that regulators and professional groups prefer other agents to codeine in nursing mothers. Ketorolac carries a manufacturer contraindication in breastfeeding, and the nasal dihydroergotamine has already failed her and requires 3 days without breastfeeding after each dose. Tramadol is not recommended for routine migraine treatment.",
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
        prompt: "Which of the following examination findings would most suggest that his ear infection has spread to the mastoid?",
        options: ["Pain and swelling behind the ear", "Pain at the jaw joint with chewing", "Pain on pulling the earlobe", "Redness of the eardrum", "Tender node in front of the ear"],
        correct: 0,
        explanation:
          "The Canadian Paediatric Society names acute mastoiditis as the most common complication of acute otitis media and states that pain or swelling over the mastoid bone behind the ear suggests it. The same statement lists a sixth nerve palsy from petrous bone infection, facial palsy, venous sinus thrombosis and meningitis among the other complications, so a child with a palsy after an ear infection needs the mastoid, face and neck examined as well. Pain on pulling the earlobe points to otitis externa. A red eardrum is seen in otitis media itself. Jaw joint pain and a node in front of the ear do not show spread to the mastoid.",
        keyFeature: { topic: "headache", n: 3 },
        source: "cps-aom",
      },
      {
        id: "q2",
        kind: "single",
        update: "Otoscopy shows a perforated left eardrum with thick yellow discharge. His fundi are normal.",
        prompt: "Which of the following is the most likely cause of his double vision?",
        options: ["Benign sixth nerve palsy", "Diffuse pontine glioma", "Orbital cellulitis", "Petrous apicitis", "Pseudotumour cerebri"],
        correct: 3,
        explanation:
          "Ear discharge, pain behind the eye in the trigeminal territory and a sixth nerve palsy on the same side form the triad of Gradenigo syndrome, caused by infection of the petrous apex next to the sixth nerve. Only about a fifth of children show all three, so this full picture is strong evidence. A benign sixth nerve palsy after a viral illness is a diagnosis of exclusion and does not explain fever and pus from the ear. A pontine glioma usually adds ataxia and long tract signs and does not cause fever or pus from the ear. He has no eyelid swelling for orbital cellulitis, and his fundi are normal, which argues against pseudotumour cerebri.",
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
        update: "Bad weather delays the aircraft by several hours, and he is reassessed every hour.",
        prompt: "Which of the following new findings would most suggest that the infection has spread inside the skull?",
        options: ["Fever rising to 39.5°C", "More discharge from the ear", "Neck stiffness and drowsiness", "Redness of the ear canal", "Tenderness behind the ear"],
        correct: 2,
        explanation:
          "A falling level of consciousness with neck stiffness signals meningitis or another intracranial complication and changes the urgency of his transfer and his care during the wait. In the review of children with Gradenigo syndrome, MRI showed meningeal enhancement in 27% and venous sinus thrombosis in 15%, and one child died. A higher fever, more discharge, a red ear canal and tenderness behind the ear reflect the ear and mastoid infection he already has and do not by themselves show spread inside the skull. Serial checks of his level of consciousness and neck are the bedside way to catch this early.",
        keyFeature: { topic: "headache", n: 3 },
        source: "schmit-gradenigo",
      },
    ],
    sources: [S.cpsAom, S.schmit],
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
        options: ["Bilateral pressing quality", "Nausea during the attacks", "Onset after age 50", "Pain worse when lying down", "Relief within minutes of rest"],
        correct: 4,
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
        options: ["acetaminophen 1 000 mg PO", "ketorolac 30 mg IV", "metoclopramide 10 mg IV", "morphine 4 mg IV", "nitroglycerin 0.4 mg SL"],
        correct: 4,
        explanation:
          "A headache that returns with new ST depression is cardiac cephalalgia until proven otherwise, and ICHD-3 describes it as relieved by nitroglycerin. Sublingual nitroglycerin treats the ischemia and so the headache, with his BP well above the range where nitrates are unsafe. ICHD-3 stresses that triptans and ergots are contraindicated in ischemic heart disease, so the sumatriptan he was given must not be used. Acetaminophen, ketorolac and metoclopramide may dull a migraine but do nothing for the myocardial ischemia that is driving the pain. Morphine may ease pain but does not relieve the ischemia, and nitroglycerin comes first.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ichd3-cardiac",
      },
      {
        id: "q4",
        kind: "single",
        update: "The headache and the ST depression resolve within 5 minutes of treatment. His first high-sensitivity troponin is below the 99th percentile.",
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
