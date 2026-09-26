// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: false, author: "Preceptor", version: 1 };

const SRC_BELL: Source = {
  "id": "bell",
  "citation": "de Almeida JR and colleagues. Management of Bell palsy: clinical practice guideline. CMAJ. 2014.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/24934895/"
};
const SRC_CSBPR_ACUTE: Source = {
  "id": "csbpr-acute",
  "citation": "Heran M and colleagues. Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition practice guidelines update, 2022. Heart and Stroke Foundation of Canada. Can J Neurol Sci. 2024.",
  "url": "https://www.strokebestpractices.ca/recommendations/acute-stroke-management"
};
const SRC_CSBPR_ICH: Source = {
  "id": "csbpr-ich",
  "citation": "Shoamanesh A and colleagues. Canadian Stroke Best Practice Recommendations: management of spontaneous intracerebral hemorrhage, 7th edition update 2020. Int J Stroke. 2021.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/33174815/"
};
const SRC_TC_BLEED_ORDERS: Source = {
  "id": "tc-bleed-orders",
  "citation": "Thrombosis Canada. Bleed management order set for patients on anticoagulants, including warfarin and DOAC reversal. June 2024.",
  "url": "https://thrombosiscanada.ca/uploads/publications/Bleed%20Management%20Order%20Set%20June%202024.pdf"
};
const SRC_RECRUDESCENCE: Source = {
  "id": "recrudescence",
  "citation": "Topcuoglu MA and colleagues. Recrudescence of deficits after stroke: clinical and imaging phenotype, triggers, and risk factors. JAMA Neurol. 2017.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/28783808/"
};
const SRC_FND: Source = {
  "id": "fnd",
  "citation": "Espay AJ and colleagues. Current concepts in diagnosis and treatment of functional neurological disorders. JAMA Neurol. 2018.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/29868890/"
};
const SRC_MIMIC_LYSIS: Source = {
  "id": "mimic-lysis",
  "citation": "Tsivgoulis G and colleagues. Safety of intravenous thrombolysis in stroke mimics: prospective 5-year study and comprehensive meta-analysis. Stroke. 2015.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/25791717/"
};
const SRC_PEDS_STROKE: Source = {
  "id": "peds-stroke",
  "citation": "Ferriero DM and colleagues. Management of stroke in neonates and children: a scientific statement from the American Heart Association and American Stroke Association. Stroke. 2019.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/30686119/"
};
const SRC_ASH_SCD: Source = {
  "id": "ash-scd",
  "citation": "DeBaun MR and colleagues. American Society of Hematology 2020 guidelines for sickle cell disease: prevention, diagnosis, and treatment of cerebrovascular disease in children and adults. Blood Adv. 2020.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/32298430/"
};
const SRC_LMI: Source = {
  "id": "lmi",
  "citation": "Kim JS. Pure lateral medullary infarction: clinical-radiological correlation of 130 acute, consecutive patients. Brain. 2003.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/12805095/"
};
const SRC_CSBPR_PREV: Source = {
  "id": "csbpr-prev",
  "citation": "Gladstone DJ and colleagues. Canadian Stroke Best Practice Recommendations: secondary prevention of stroke update 2020. Can J Neurol Sci. 2022.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/34140063/"
};
const SRC_CHAMELEON: Source = {
  "id": "chameleon",
  "citation": "Liberman AL, Prabhakaran S. Stroke chameleons and stroke mimics in the emergency department. Curr Neurol Neurosci Rep. 2017.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/28229398/"
};
const SRC_PCA: Source = {
  "id": "pca",
  "citation": "Cereda C, Carrera E. Posterior cerebral artery territory infarctions. Front Neurol Neurosci. 2012.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/22377879/"
};
const SRC_CSBPR_EVT: Source = {
  "id": "csbpr-evt",
  "citation": "Heran MKS and colleagues. Canadian Stroke Best Practice Recommendations: endovascular thrombectomy for acute ischemic stroke, interim update 2025. Can J Neurol Sci. 2025.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/41340372/"
};
const SRC_PERCHERON: Source = {
  "id": "percheron",
  "citation": "Lazzaro NA and colleagues. Artery of Percheron infarction: imaging patterns and clinical spectrum. AJNR Am J Neuroradiol. 2010.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/20299438/"
};
const SRC_ACA: Source = {
  "id": "aca",
  "citation": "Kumral E and colleagues. Spectrum of anterior cerebral artery territory infarction: clinical and MRI findings. Eur J Neurol. 2002.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/12453077/"
};
const SRC_ANTON: Source = {
  "id": "anton",
  "citation": "Maddula M, Lutton S, Keegan B. Anton's syndrome due to cerebrovascular disease: a case report. J Med Case Rep. 2009.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/20226004/"
};
const SRC_ANGIOEDEMA: Source = {
  "id": "angioedema",
  "citation": "Hill MD and colleagues. Hemi-orolingual angioedema and ACE inhibition after alteplase treatment of stroke. Neurology. 2003.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/12743244/"
};
const SRC_ARAMIS: Source = {
  "id": "aramis",
  "citation": "Chen HS and colleagues. Dual antiplatelet therapy vs alteplase for patients with minor nondisabling acute ischemic stroke: the ARAMIS randomized clinical trial. JAMA. 2023.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/37367978/"
};
const SRC_IE_ASA: Source = {
  "id": "ie-asa",
  "citation": "Chan KL and colleagues. A randomized trial of aspirin on the risk of embolic events in patients with infective endocarditis. J Am Coll Cardiol. 2003.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/12957419/"
};
const SRC_CSBPR_PREG: Source = {
  "id": "csbpr-preg",
  "citation": "Ladhani NNN and colleagues. Canadian Stroke Best Practice consensus statement: acute stroke management during pregnancy. Int J Stroke. 2018.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/30021491/"
};
const SRC_HINTS_PLUS: Source = {
  "id": "hints-plus",
  "citation": "Newman-Toker DE and colleagues. HINTS outperforms ABCD2 to screen for stroke in acute continuous vertigo and dizziness. Acad Emerg Med. 2013.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/24127701/"
};
const SRC_CDN_TIA: Source = {
  "id": "cdn-tia",
  "citation": "Perry JJ and colleagues. Prospective validation of Canadian TIA Score and comparison with ABCD2 and ABCD2i for subsequent stroke risk after transient ischaemic attack. BMJ. 2021.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/33541890/"
};
const SRC_ABCD2: Source = {
  "id": "abcd2",
  "citation": "Johnston SC and colleagues. Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack. Lancet. 2007.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/17258668/"
};
const SRC_LIMB_SHAKING: Source = {
  "id": "limb-shaking",
  "citation": "Persoon S, Kappelle LJ, Klijn CJ. Limb-shaking transient ischaemic attacks in patients with internal carotid artery occlusion: a case-control study. Brain. 2010.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/20157011/"
};
const SRC_AHA_AIS: Source = {
  "id": "aha-ais",
  "citation": "Prabhakaran S and colleagues. 2026 guideline for the early management of patients with acute ischemic stroke. American Heart Association and American Stroke Association. Stroke. 2026.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/41582814/"
};
const SRC_TGA: Source = {
  "id": "tga",
  "citation": "Arena JE, Rabinstein AA. Transient global amnesia. Mayo Clin Proc. 2015.",
  "url": "https://pubmed.ncbi.nlm.nih.gov/25659242/"
};

const SRC_HAND_KNOB: Source = {
  "id": "hand-knob",
  "citation": "Rissardo JP, Byroju VV, Mukkamalla S, Caprara ALF. A narrative review of stroke of cortical hand knob area. Medicina (Kaunas). 2024.",
  "url": "https://doi.org/10.3390/medicina60020318"
};
const SRC_MESENCEPH: Source = {
  "id": "mesenceph",
  "citation": "Kumral E, Bayulkem G, Akyol A, Yunten N, Sirin H, Sagduyu A. Mesencephalic and associated posterior circulation infarcts. Stroke. 2002.",
  "url": "https://doi.org/10.1161/01.str.0000027438.93029.87"
};
const SRC_PCA_DELIRIUM: Source = {
  "id": "pca-delirium",
  "citation": "Vatsavayi V, Malhotra S, Franco K. Agitated delirium with posterior cerebral artery infarction. J Emerg Med. 2003.",
  "url": "https://doi.org/10.1016/s0736-4679(02)00750-3"
};
const SRC_HU_SCEH: Source = {
  "id": "hu-sceh",
  "citation": "Hu Y, Su J, Cui X, Pan L, Jin L, Teng F. How to avoid misdiagnosing spontaneous cervical spinal epidural hematoma as ischemic stroke: 3 case reports and literature review. Cerebrovasc Dis. 2023.",
  "url": "https://doi.org/10.1159/000527705"
};

const SRC_AMARENCO_SCA: Source = {
  "id": "amarenco-sca",
  "citation": "Amarenco P, Roullet E, Goujon C, Cheron F, Hauw JJ, Bousser MG. Infarction in the anterior rostral cerebellum (the territory of the lateral branch of the superior cerebellar artery). Neurology. 1991.",
  "url": "https://doi.org/10.1212/wnl.41.2_part_1.253"
};
const SRC_KASE_SCA: Source = {
  "id": "kase-sca",
  "citation": "Kase CS, White JL, Joslyn JN, Williams JP, Mohr JP. Cerebellar infarction in the superior cerebellar artery distribution. Neurology. 1985.",
  "url": "https://doi.org/10.1212/wnl.35.5.705"
};

export const CVA_S27_SAMPS: Samp[] = [
  {
    "id": "cva-16",
    "topic": "cva",
    "title": "Face drooping on one side",
    "stem": "You are working in a community hospital emergency department. A 38-year-old man presents to the emergency department with a droopy right face that he noticed while brushing his teeth this morning. Last night he had aching behind his right ear. Sounds seem loud in his right ear and food tastes odd. He has no headache, limb weakness, numbness or speech difficulty. He has no medical history and takes no medications. He cannot wrinkle the right forehead or raise the right eyebrow. The right eye closes fully, but only with effort. The right nasolabial fold is flat and the right corner of the mouth droops. Speech, limb strength, sensation and coordination are normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "76/minute",
      "resp": "14/minute",
      "bp": "132/84 mmHg",
      "o2sat": "99% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following examination findings best separates a peripheral facial nerve palsy from a stroke in this patient?",
        "kind": "single",
        "options": [
          "Asymmetric smile when asked",
          "Drooling from the lower lip",
          "Drooping of the mouth corner",
          "Flattened nasolabial fold",
          "Weakness of the forehead muscles"
        ],
        "correct": 4,
        "explanation": "The forehead receives upper motor neuron input from both hemispheres, so a stroke above the facial nucleus usually spares it. He cannot wrinkle the right forehead or raise the right eyebrow, which places the lesion in the facial nerve itself. A drooping mouth corner, a flat nasolabial fold, an asymmetric smile and drooling occur with both central and peripheral lesions, so none of them separates the two. His normal limb, sensory and speech examination fits an isolated facial nerve palsy.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "bell"
      },
      {
        "id": "q2",
        "prompt": "Which of the following additional findings would most suggest a stroke rather than Bell palsy in this patient?",
        "kind": "single",
        "options": [
          "Altered taste on the right tongue",
          "Pain behind the right ear",
          "Pronator drift of the right arm",
          "Reduced tearing of the right eye",
          "Sound sensitivity in the right ear"
        ],
        "correct": 2,
        "explanation": "A pronator drift is a sign of corticospinal tract dysfunction and points to a lesion in the brain rather than the facial nerve. Pain behind the ear is common early in Bell palsy, and altered taste, sound sensitivity and reduced tearing come from branches of the facial nerve along its course, so all four support a peripheral palsy. Any limb, sensory or speech deficit should prompt stroke assessment instead of a diagnosis of Bell palsy.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "bell"
      },
      {
        "id": "q3",
        "update": "The rest of the cranial nerve examination is normal. The ear canals and drums are normal with no vesicles.",
        "prompt": "Which of the following is the most appropriate treatment to start today?",
        "kind": "single",
        "options": [
          "ASA 160 mg PO today",
          "Electrical stimulation therapy",
          "Oral prednisone for 10 days",
          "Oral valacyclovir for 7 days",
          "Surgical nerve decompression"
        ],
        "correct": 2,
        "explanation": "This is Bell palsy, and the Canadian guideline recommends corticosteroids for all patients, ideally started early. His eye still closes fully with effort, which is moderate rather than severe or complete paresis, and adding an antiviral to steroids is suggested against at this severity. Valacyclovir on its own does not improve recovery and is recommended against. Electrostimulation and routine surgical decompression are both suggested against. ASA treats ischemic stroke, which his examination does not support.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "bell"
      },
      {
        "id": "q4",
        "update": "He returns 5 weeks later. The weakness has worsened steadily instead of improving, and he has noticed a firm lump in front of his right ear.",
        "prompt": "Which of the following is the most appropriate next step for this patient?",
        "kind": "single",
        "options": [
          "Addition of oral valacyclovir",
          "Exercise physiotherapy referral",
          "Imaging of the facial nerve course",
          "Reassurance with eye care only",
          "Repeat course of oral prednisone"
        ],
        "correct": 2,
        "explanation": "Bell palsy should begin to improve within weeks. Progressive weakness with a new mass in front of the ear raises concern for a parotid or skull base tumour, and the guideline recommends imaging of the facial nerve course and specialist referral. A second course of steroids or an added antiviral treats a diagnosis that no longer fits. Reassurance or physiotherapy alone would delay the diagnosis of a possible neoplasm.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "bell"
      }
    ],
    "sources": [SRC_BELL],
    ...meta,
  },
  {
    "id": "cva-17",
    "topic": "cva",
    "title": "Hand weakness while dressing",
    "stem": "A 71-year-old man presents to the emergency department at 10:20 with weakness of his right hand that began suddenly at 09:30 while he was buttoning his shirt. He woke normally at 07:00 after a night in a recliner following two glasses of wine, and his wife wonders whether he lay on the arm. He is right-handed and repairs watches for a living. He has atrial fibrillation and hypertension. Medications: dabigatran 150 mg PO twice daily, last taken at 08:00, and ramipril. Capillary glucose is 6.4 mmol/L. He cannot extend his right wrist or fingers. With the hand resting flat on a table, finger spreading and grip are also weak. Sensation over the back of the hand is normal. The right biceps and brachioradialis reflexes are brisker than the left. Triceps strength, face, speech, leg and visual fields are normal. NIHSS is 1.",
    "vitals": { "temperature": "36.8°C oral", "pulse": "78/minute irregular", "resp": "16/minute", "bp": "172/94 mmHg", "o2sat": "97% on room air", "weight": "84 kg" },
    "questions": [
      {
        "id": "q1",
        "kind": "menu",
        "prompt": "Which of the following findings favour a cortical cause over a radial nerve palsy in this man?",
        "options": [
          "Age older than 70 years",
          "Atrial fibrillation history",
          "Brisk reflexes in the right arm",
          "Inability to extend the wrist",
          "NIHSS score of 1",
          "Normal triceps strength",
          "Sleeping in a recliner after wine",
          "Weak finger spreading with hand flat",
        ],
        "select": 2,
        "correct": [2, 7],
        "explanation": "Finger spreading uses the interossei, which the ulnar nerve supplies. Weakness there, tested with the hand flat to remove the mechanical effect of a dropped wrist, places the lesion above the radial nerve. Brisk reflexes on the weak side are an upper motor neuron sign. A small infarct of the precentral hand knob can imitate a radial, median or ulnar palsy. Wrist drop and normal triceps strength occur with a radial palsy at the spiral groove as well. A night in a chair after alcohol is the history that suggests a radial palsy. His age and atrial fibrillation raise stroke risk but do not locate the lesion, and an NIHSS of 1 does not separate the two.",
        "keyFeature": { "topic": "cva", "n": 1 },
        "source": "hand-knob",
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following arteries most likely supplies the area of brain responsible for his weakness?",
        "options": [
          "Left anterior cerebral artery",
          "Left anterior choroidal artery",
          "Left lenticulostriate artery",
          "Left middle cerebral artery branch",
          "Right middle cerebral artery branch",
        ],
        "correct": 3,
        "explanation": "The hand knob is part of the left precentral gyrus on the lateral surface of the hemisphere, which the superficial branches of the left middle cerebral artery supply. An isolated weak right hand fits a small cortical infarct there. The anterior cerebral artery supplies the medial surface, where the leg is represented. Lenticulostriate and anterior choroidal infarcts involve the internal capsule and usually weaken the face, arm and leg together. A right hemisphere lesion would weaken the left hand.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "hand-knob",
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate blood pressure management before a decision on thrombolysis?",
        "options": [
          "hydralazine 10 mg IV",
          "labetalol 10 mg IV",
          "Lower systolic below 140 mmHg",
          "nitroglycerin 0.4 mg SL",
          "No lowering at this level",
        ],
        "correct": 4,
        "explanation": "His BP of 172/94 mmHg is already below 180/105 mmHg, the level the Canadian criteria use as the target around thrombolysis, so no drug is needed. The guideline treats only pressure that cannot be brought below that target as a relative exclusion. Labetalol and hydralazine are the usual IV choices when pressure is above the target, which it is not here, and nitroglycerin would likewise treat a pressure that needs no treatment. A systolic target below 140 mmHg is not used before thrombolysis for ischemic stroke and could reduce flow to brain at risk.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate approach to his dabigatran if the stroke team decides to give thrombolysis?",
        "options": [
          "Andexanet alfa, then tenecteplase",
          "PCC 50 units/kg IV, then tenecteplase",
          "Protamine 50 mg IV, then tenecteplase",
          "Tenecteplase after idarucizumab 5 g IV",
          "Tenecteplase with no reversal agent",
        ],
        "correct": 3,
        "explanation": "Canadian guidance says thrombolysis should not routinely be given to a patient taking a DOAC. It adds that it may be considered in centres where a reversal agent is available, with expert input. Once the team decides to treat, dabigatran is reversed with its specific agent, idarucizumab 5 g IV, and tenecteplase follows. His last dose was about 2.5 hours before the decision, so his dabigatran level is likely high, and tenecteplase without reversal would be given at that level. Andexanet reverses factor Xa inhibitors, not dabigatran. Protamine reverses heparin and has no effect on dabigatran. PCC is not the dabigatran reversal agent when idarucizumab is at hand. His NIHSS is only 1, but losing the use of his dominant hand ends his work, so the deficit is disabling.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
    ],
    "sources": [SRC_HAND_KNOB, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-18",
    "topic": "cva",
    "title": "Old weakness worse with a fever",
    "stem": "An 81-year-old man is brought to the emergency department by ambulance at 10:30 with worse right-sided weakness and word-finding difficulty noticed when he woke at 07:00. He was well at bedtime at 22:30. He had a left middle cerebral artery stroke 3 years ago that left mild right hand clumsiness and occasional word-finding pauses. Over the past 2 days he has had dysuria and chills. Medications: ASA 81 mg daily, atorvastatin, ramipril. Capillary glucose is 7.4 mmol/L. He is drowsy but rousable. He has mild expressive aphasia and right arm drift. NIHSS is 4. No deficit is found outside the territory of his old stroke.",
    "vitals": {
      "temperature": "38.9°C oral",
      "pulse": "112/minute",
      "resp": "22/minute",
      "bp": "104/62 mmHg",
      "o2sat": "95% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following features most supports recrudescence of his old deficits rather than a new stroke?",
        "kind": "single",
        "options": [
          "Age older than 80 years",
          "Daily ASA before the event",
          "Deficits limited to the old territory",
          "Drowsiness on arrival",
          "Symptoms first noticed on waking"
        ],
        "correct": 2,
        "explanation": "Post-stroke recrudescence is a transient return or worsening of old deficits, usually motor, sensory or language, triggered by stressors such as infection. His aphasia and right arm drift match his prior left middle cerebral artery stroke, and no new deficit lies outside that territory. Noticing symptoms on waking gives an unknown onset time but does not separate the two. Age, prior ASA use and drowsiness are common in both situations.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "recrudescence"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the most appropriate imaging decision for this patient now?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT head and CT angiography",
          "MRI brain in 3 days",
          "Tenecteplase after a CT head",
          "No imaging until he is afebrile"
        ],
        "correct": 1,
        "explanation": "Recrudescence is a diagnosis made only after a new stroke or hemorrhage is excluded, and Canadian guidance calls for brain and vascular imaging in suspected acute stroke. Waiting for the fever to settle or delaying MRI for days leaves a new stroke unexamined. He was last well at 22:30, about 12 hours ago, well beyond the standard 4.5-hour window, so tenecteplase after a plain CT is not appropriate. Carotid ultrasound does not image the brain.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "update": "CT shows an old left frontal infarct and no acute change. CT angiography shows no occlusion. Urinalysis shows pyuria and lactate is 3.1 mmol/L.",
        "prompt": "Which of the following are the most appropriate next steps for this patient?",
        "kind": "menu",
        "options": [
          "ASA and clopidogrel loading",
          "Blood cultures and antibiotics",
          "Heparin infusion",
          "IV crystalloid bolus",
          "Labetalol 10 mg IV",
          "Levetiracetam 1 000 mg IV",
          "Mannitol 1 g/kg IV",
          "Tenecteplase IV bolus"
        ],
        "select": 2,
        "correct": [
          1,
          3
        ],
        "explanation": "Fever of 38.9°C, a pulse of 112/minute, a BP of 104/62 mmHg, pyuria and a lactate of 3.1 mmol/L indicate sepsis from a urinary source, the likely trigger of his recrudescence. He needs blood cultures, antibiotics and fluid resuscitation. Imaging shows no new infarct, so loading dual antiplatelets or starting heparin has no indication, and he is beyond the standard 4.5-hour window for tenecteplase. He is hypotensive, so labetalol would harm him. No seizure or raised intracranial pressure is described, so levetiracetam and mannitol are not needed.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "recrudescence"
      },
      {
        "id": "q4",
        "prompt": "Which of the following best describes the expected course if this is recrudescence of his old stroke?",
        "kind": "single",
        "options": [
          "Gradual worsening over weeks",
          "Permanent new motor deficit",
          "Recovery only after thrombolysis",
          "Resolution as the trigger is treated",
          "Seizures within the next week"
        ],
        "correct": 3,
        "explanation": "In a series of 153 patients, recrudescence lasted about 18 hours on average and 69% of episodes with a recorded end time resolved by day 1, with infection, hypotension and hyponatremia among the triggers. A permanent new deficit or steady worsening over weeks would suggest a new lesion and would need reassessment. Thrombolysis has no role because there is no new ischemia. Seizures are not part of the syndrome, and the definition requires no evidence of seizure.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "recrudescence"
      }
    ],
    "sources": [SRC_RECRUDESCENCE, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-19",
    "topic": "cva",
    "title": "Weakness during an argument",
    "stem": "A 27-year-old woman presents to the emergency department at 15:10 with left arm and leg weakness that began suddenly at 14:20 during an argument at work. She has migraine without aura and takes a combined oral contraceptive. She has no headache now. Capillary glucose is 5.6 mmol/L. She is alert and speaks normally. There is no facial droop. Left arm and leg strength give way abruptly after a brief normal effort. With both arms outstretched and palms up, the left arm drifts down without pronating. Reflexes are symmetric and both plantar responses are flexor.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "92/minute",
      "resp": "18/minute",
      "bp": "128/80 mmHg",
      "o2sat": "99% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following examination findings most supports a functional cause of her weakness?",
        "kind": "single",
        "options": [
          "Absent facial weakness",
          "Drift without pronation",
          "Flexor plantar responses",
          "Normal speech and language",
          "Symmetric tendon reflexes"
        ],
        "correct": 1,
        "explanation": "Functional weakness is diagnosed by positive signs, and an outstretched arm that drifts without pronating is one of them, because organic weakness makes the arm pronate as it drifts. Give-way weakness after a brief normal effort is another positive sign. Symmetric reflexes, flexor plantars, normal speech and a normal face are simply normal findings, and they are common in the first hours of a real stroke. They do not argue for or against a functional cause.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "fnd"
      },
      {
        "id": "q2",
        "prompt": "Which of the following additional findings would most support a functional cause of her leg weakness?",
        "kind": "single",
        "options": [
          "Ankle clonus on the left side",
          "Extensor plantar response on retesting",
          "Hip extension returns with opposite hip flexion",
          "Hip flexor and ankle dorsiflexor weakness",
          "Spastic catch on rapid knee flexion"
        ],
        "correct": 2,
        "explanation": "This is Hoover sign. A weak left hip extension that becomes normal when she flexes the right hip against resistance shows that the leg can be activated, which supports functional weakness. Ankle clonus, an extensor plantar response and a spastic catch are upper motor neuron signs that point to a structural lesion. Weakness of hip flexors and ankle dorsiflexors is the pyramidal pattern expected after a stroke.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "fnd"
      },
      {
        "id": "q3",
        "update": "The stroke team is uncertain whether this is stroke and discusses thrombolysis with her.",
        "prompt": "Which of the following best estimates the risk of symptomatic intracranial hemorrhage when a stroke mimic receives IV thrombolysis?",
        "kind": "single",
        "options": [
          "0.5%",
          "3.5%",
          "6.0%",
          "12.0%",
          "20.0%"
        ],
        "correct": 0,
        "explanation": "A meta-analysis of 392 patients with stroke mimics who received IV thrombolysis found a pooled symptomatic intracranial hemorrhage rate of 0.5%, with a 95% confidence interval of 0% to 2%. The same analysis found that mimics had about one third of the hemorrhage risk seen in true ischemic stroke. The higher figures overstate the harm. This low risk is why thrombolysis is not withheld when a disabling deficit may still be a stroke.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "mimic-lysis"
      },
      {
        "id": "q4",
        "update": "CT and CT angiography are normal. Hoover sign is positive on the left. Her strength returns to normal over 3 hours.",
        "prompt": "Which of the following best describes how a diagnosis of functional weakness is made?",
        "kind": "single",
        "options": [
          "A prior psychiatric history",
          "A recent emotional stressor",
          "Absence of stroke risk factors",
          "Normal brain and vessel imaging",
          "Positive signs of inconsistency"
        ],
        "correct": 4,
        "explanation": "Functional neurological disorder is a diagnosis made on positive examination findings, such as Hoover sign, drift without pronation and give-way weakness, that show inconsistency within the same examination. Normal imaging does not make the diagnosis, because early ischemic stroke often has a normal CT. A stressor or psychiatric history is neither required nor sufficient. She also has stroke risk factors in migraine and a combined oral contraceptive, so their absence was never the basis for the diagnosis.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "fnd"
      }
    ],
    "sources": [SRC_FND, SRC_MIMIC_LYSIS],
    ...meta,
  },
  {
    "id": "cva-20",
    "topic": "cva",
    "title": "A child who stopped using his hand",
    "stem": "A 7-year-old boy is brought to the emergency department by his mother at 13:15 because he dropped his fork at lunch at 12:30 and has not used his right hand since. His speech is slow and he cannot find words. He had chickenpox 4 months ago. He has occasional headaches, and his father has migraine. There was no shaking or loss of awareness. Capillary glucose is 5.1 mmol/L. He is alert and has no headache now. He has a right facial droop that spares the forehead, right arm power 2/5, right leg power 4/5 and expressive aphasia.",
    "vitals": {
      "temperature": "36.9°C tympanic",
      "pulse": "94/minute",
      "resp": "20/minute",
      "bp": "108/66 mmHg",
      "o2sat": "99% on room air",
      "weight": "24 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most appropriate working diagnosis for this child?",
        "kind": "single",
        "options": [
          "Acute stroke until imaging proves otherwise",
          "Functional weakness after a stressor",
          "Hemiplegic migraine given the family history",
          "Hypoglycemia masked by a recent meal",
          "Todd paralysis after an unseen seizure"
        ],
        "correct": 0,
        "explanation": "A sudden focal deficit with aphasia in a child is a stroke until imaging shows otherwise, and delays in pediatric stroke diagnosis are common because mimics are considered first. Hemiplegic migraine builds gradually and is usually followed by headache, while his deficit was abrupt and he has no headache. No seizure was seen and he did not lose awareness. No stressor or functional sign is described, and a capillary glucose of 5.1 mmol/L excludes hypoglycemia.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "peds-stroke"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the preferred first imaging study if it can be done without delay?",
        "kind": "single",
        "options": [
          "Carotid and vertebral ultrasound",
          "CT head without contrast only",
          "CT perfusion with CT venography",
          "MRI brain with MR angiography",
          "Transcranial Doppler ultrasound"
        ],
        "correct": 3,
        "explanation": "In children with suspected arterial ischemic stroke, MRI with diffusion imaging and MR angiography is preferred because it is more sensitive for early infarction, shows the arteries and avoids radiation. When MRI cannot be done quickly, CT with CT angiography is used so that treatment is not delayed. A plain CT alone often misses early ischemia and shows no vessels. Ultrasound techniques cannot image the brain or the intracranial arteries well enough to guide acute decisions.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "peds-stroke"
      },
      {
        "id": "q3",
        "update": "MRI shows an acute left basal ganglia infarct. MR angiography shows focal irregular narrowing of the distal left internal carotid and proximal left middle cerebral artery.",
        "prompt": "Which of the following is the most likely cause of this child's stroke?",
        "kind": "single",
        "options": [
          "Arteriopathy after varicella",
          "Cardioembolism from a septal defect",
          "Cerebral venous sinus thrombosis",
          "Cervical carotid artery dissection",
          "Moyamoya with bilateral collaterals"
        ],
        "correct": 0,
        "explanation": "Focal narrowing of the distal internal carotid and proximal middle cerebral artery with a basal ganglia infarct is the typical picture of focal cerebral arteriopathy, and chickenpox in the preceding year is a recognized trigger. A cardiac embolus would not narrow the vessel wall, and no heart disease is described. Moyamoya is usually bilateral with collateral vessels. A cervical dissection lies in the neck, and venous thrombosis would not narrow an artery.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "peds-stroke"
      },
      {
        "id": "q4",
        "prompt": "Which of the following is the most appropriate approach to thrombolysis for this child?",
        "kind": "single",
        "options": [
          "Alteplase 0.9 mg/kg IV now",
          "Decision with a pediatric stroke expert",
          "Heparin infusion instead of lysis",
          "Intra-arterial alteplase alone",
          "Tenecteplase 0.25 mg/kg IV now"
        ],
        "correct": 1,
        "explanation": "Evidence for thrombolysis in children is limited, and Canadian guidance advises urgent consultation with a stroke expert, which for a child means a pediatric stroke specialist. Adult alteplase and tenecteplase doses have not been validated in children, so giving either without that input is not appropriate. Heparin does not restore flow and is not a substitute for a reperfusion decision. Intra-arterial alteplase alone is not an established treatment in children.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_PEDS_STROKE, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-21",
    "topic": "cva",
    "title": "Sudden arm weakness in a girl with anemia",
    "stem": "A 9-year-old girl with sickle cell anemia (hemoglobin SS) is brought to the emergency department by her father at 18:40. At 17:50 she suddenly could not move her left arm and her speech became slurred. She takes hydroxyurea and folic acid and has not been transfused this year. Her baseline hemoglobin is 82 g/L. There was no fever, headache or seizure. Capillary glucose is 6.0 mmol/L. She is alert. She has a left facial droop, left arm power 1/5, left leg power 4/5 and dysarthria.",
    "vitals": {
      "temperature": "37.4°C oral",
      "pulse": "118/minute",
      "resp": "22/minute",
      "bp": "112/70 mmHg",
      "o2sat": "96% on room air",
      "weight": "28 kg"
    },
    "questions": [
      {
        "id": "q1",
        "update": "Hemoglobin is 79 g/L. CT head shows no hemorrhage and her deficit is unchanged.",
        "prompt": "Which of the following is the preferred treatment for her acute neurological deficit?",
        "kind": "single",
        "options": [
          "Alteplase 0.9 mg/kg IV",
          "Exchange transfusion",
          "Hydroxyurea dose escalation",
          "IV fluids and oxygen alone",
          "Transfusion to hemoglobin 140 g/L"
        ],
        "correct": 1,
        "explanation": "For a child with sickle cell disease and an acute neurological deficit, the American Society of Hematology recommends prompt transfusion and suggests exchange transfusion as the preferred type. Thrombolysis does not address sickling, and transfusion is the recommended treatment. Raising the hydroxyurea dose acts over weeks, and fluids with oxygen alone do not lower the proportion of sickle hemoglobin. Transfusing up to 140 g/L raises viscosity and can worsen ischemia.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "ash-scd"
      },
      {
        "id": "q2",
        "update": "The apheresis team cannot start an exchange transfusion for 4 hours.",
        "prompt": "Which of the following is the most appropriate step while waiting for exchange transfusion?",
        "kind": "single",
        "options": [
          "Delay any transfusion for 4 hours",
          "Hydroxyurea loading dose now",
          "Normal saline bolus 60 mL/kg",
          "Simple red cell transfusion now",
          "Transfusion only if she worsens"
        ],
        "correct": 3,
        "explanation": "The guideline says transfusion should start without delay beyond 2 hours from presentation. When exchange is not available within that time and hemoglobin is 85 g/L or less, a simple transfusion is given to avoid delay. Her hemoglobin is 79 g/L, so simple transfusion is appropriate now. Waiting 4 hours or waiting for worsening delays treatment, a hydroxyurea load does not act acutely, and a 60 mL/kg saline bolus does not treat sickled cells and risks fluid overload.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "ash-scd"
      },
      {
        "id": "q3",
        "update": "After transfusion her arm strength is 3/5. She is admitted to the pediatric neurology service.",
        "prompt": "Which of the following is the most appropriate imaging once she is stable?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT perfusion of the brain",
          "MRI brain with MR angiography",
          "Repeat CT head at 24 hours",
          "Transthoracic echocardiography"
        ],
        "correct": 2,
        "explanation": "MRI with diffusion imaging defines the infarct, and MR angiography shows the stenosis or moyamoya pattern that sickle cell vasculopathy causes, which guides long-term transfusion therapy. A repeat CT adds radiation and shows little about the arteries. Carotid ultrasound does not show the intracranial vessels where sickle vasculopathy occurs. Echocardiography looks for an embolic source, which is not the leading concern here, and CT perfusion adds radiation without defining the arteriopathy.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "peds-stroke"
      }
    ],
    "sources": [SRC_ASH_SCD, SRC_PEDS_STROKE],
    ...meta,
  },
  {
    "id": "cva-22",
    "topic": "cva",
    "title": "Hiccups and a hoarse voice",
    "stem": "A 49-year-old man presents to the emergency department at 11:00 with vertigo, vomiting and hiccups that began suddenly at 07:30 after he turned his head sharply to reverse his truck. He has had left neck pain since. He smokes and has hypertension. Capillary glucose is 6.6 mmol/L. His voice is hoarse and he coughs when sipping water. The left pupil is smaller than the right with mild left ptosis. Pain and temperature sensation are reduced over the left face and over the right arm, trunk and leg. He has left arm and leg ataxia. Limb strength is normal.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "88/minute",
      "resp": "16/minute",
      "bp": "172/94 mmHg",
      "o2sat": "97% on room air",
      "weight": "86 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following arteries is the most likely site of disease in this patient?",
        "kind": "single",
        "options": [
          "Basilar artery apex",
          "Left anterior cerebral artery",
          "Left superior cerebellar artery",
          "Left vertebral artery",
          "Right posterior cerebral artery"
        ],
        "correct": 3,
        "explanation": "Crossed pain and temperature loss on the left face and right body, left Horner syndrome, hoarseness with dysphagia, left limb ataxia and hiccups make up a left lateral medullary syndrome. In a series of 130 such patients, two thirds had vertebral artery disease and dissection was a common mechanism, which fits neck pain after a sharp head turn. The superior cerebellar artery supplies the upper cerebellum and not the medulla. The basilar apex, anterior cerebral and posterior cerebral territories would not produce medullary signs.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "lmi"
      },
      {
        "id": "q2",
        "prompt": "Which of the following findings in this patient best localizes the lesion to the medulla?",
        "kind": "single",
        "options": [
          "Hoarseness with coughing on sips",
          "Left arm and leg ataxia",
          "Left ptosis and small pupil",
          "Neck pain after turning",
          "Vertigo with vomiting"
        ],
        "correct": 0,
        "explanation": "Hoarseness and dysphagia come from the nucleus ambiguus, which lies in the lateral medulla, so they place the lesion there. Limb ataxia can arise from the cerebellum anywhere along its connections. Horner syndrome can come from the sympathetic pathway in the brainstem, spinal cord, neck or carotid wall. Vertigo with vomiting occurs with cerebellar and peripheral vestibular lesions, and neck pain suggests a dissection without locating the infarct.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "lmi"
      },
      {
        "id": "q3",
        "update": "Non-contrast CT head done at 11:20 is normal. He remains alert with the same findings.",
        "prompt": "Which of the following is the most appropriate imaging study for this patient next?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT angiography of head and neck",
          "CT perfusion of the brain alone",
          "MRI of the cervical spine",
          "Repeat CT head in 24 hours"
        ],
        "correct": 1,
        "explanation": "CT is insensitive for posterior fossa infarcts, and a suspected vertebral dissection needs CT angiography of the head and neck, or MR angiography, from the arch to the vertex. Carotid ultrasound does not fully show the vertebral arteries and can miss dissections. A repeat CT in 24 hours delays the diagnosis. Cervical spine MRI and perfusion imaging alone do not show the dissection.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-prev"
      },
      {
        "id": "q4",
        "update": "CT angiography shows a left vertebral artery dissection with occlusion of its intracranial segment. It is now 12:10. NIHSS is 4. He fails the bedside swallow screen.",
        "prompt": "Which of the following is the most appropriate antithrombotic treatment to give now?",
        "kind": "single",
        "options": [
          "Alteplase 0.9 mg/kg IV",
          "ASA 160 mg PO",
          "ASA 325 mg PR",
          "Clopidogrel 300 mg PO",
          "Tenecteplase 0.25 mg/kg IV"
        ],
        "correct": 2,
        "explanation": "He needs an antiplatelet now, and because he failed the swallow screen it must not be given by mouth. Canadian guidance allows ASA 325 mg by rectal suppository, or ASA or clopidogrel by enteral tube, when swallowing is unsafe. Oral ASA and oral clopidogrel risk aspiration. He was last well at 07:30, 4 hours and 40 minutes ago, so he is beyond the standard 4.5-hour window for IV thrombolysis.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_LMI, SRC_CSBPR_PREV, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-23",
    "topic": "cva",
    "title": "Double vision while reading",
    "stem": "A 64-year-old man presents to the emergency department at 10:15 with double vision and a drooping right eyelid that began suddenly at 09:20 while he was reading. Since then his left hand has felt clumsy and weak. He has no headache or neck pain. He has type 2 diabetes, hypertension and coronary artery disease, with a drug-eluting coronary stent placed 2 months ago. Medications: ASA 81 mg daily, clopidogrel 75 mg daily, metformin and atorvastatin. Capillary glucose is 9.8 mmol/L. The right upper lid covers most of the pupil. The right eye rests down and out and cannot move up, down or in. The right pupil is 6 mm and reacts sluggishly. The left arm and leg drift, and the left grip is weak. Speech and sensation are normal.",
    "vitals": { "temperature": "36.9°C oral", "pulse": "72/minute regular", "resp": "16/minute", "bp": "158/86 mmHg", "o2sat": "97% on room air", "weight": "90 kg" },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following findings most strongly indicates a stroke rather than an isolated third nerve palsy?",
        "options": [
          "Dilated right pupil",
          "Drooping right eyelid",
          "Left arm and leg drift",
          "Onset while reading",
          "Type 2 diabetes",
        ],
        "correct": 2,
        "explanation": "A third nerve palsy with weakness of the opposite arm and leg means the lesion involves the third nerve fascicle and the cerebral peduncle together, which happens in the midbrain. With a sudden onset, that is a brainstem stroke. In a stroke unit series, isolated midbrain infarcts were dominated by third nerve palsy with contralateral motor deficits. Ptosis and a dilated pupil are part of a complete third nerve palsy from any cause, including a compressing aneurysm. Diabetes causes isolated microvascular third nerve palsies as well as strokes, so it does not decide the question. Onset during quiet reading fits either.",
        "keyFeature": { "topic": "cva", "n": 2 },
        "source": "mesenceph",
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Non-contrast CT shows no hemorrhage. Platelets are 236 x 10^9/L and INR is 1.0. The stroke team judges his deficits disabling.",
        "prompt": "Which of the following best describes the effect of his ASA and clopidogrel on IV thrombolysis?",
        "options": [
          "Absolute exclusion from thrombolysis",
          "Needs a platelet transfusion first",
          "Not an exclusion to thrombolysis",
          "Relative exclusion, so halve the dose",
          "Requires a platelet function test",
        ],
        "correct": 2,
        "explanation": "The Canadian criteria list active bleeding, hemorrhage on imaging, recent serious head trauma or major surgery, current DOAC use, an INR above 1.7 and platelets below 100 x 10^9/L among the exclusions. Single or dual antiplatelet therapy is not on that list, and his platelet count and INR are normal, so he is treated at the usual dose. Platelet transfusion and platelet function testing would add delay without a basis in the criteria. There is no reduced thrombolytic dose for patients taking antiplatelet drugs.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following CT angiography findings would most change his acute treatment?",
        "options": [
          "Calcified carotid bulb plaque",
          "Hypoplastic left vertebral artery",
          "Right vertebral artery dominance",
          "Thrombus in the basilar artery",
          "Tortuous cervical carotid arteries",
        ],
        "correct": 3,
        "explanation": "Thrombus in the basilar artery would add endovascular thrombectomy to his options, because the Canadian criteria include a relevant basilar occlusion with a disabling deficit. The midbrain is supplied by perforating branches of the basilar artery and the proximal posterior cerebral arteries, so this is the finding to look for. A hypoplastic left vertebral artery and a dominant right vertebral artery are common variants. Calcified plaque at the carotid bulb and tortuous neck arteries do not supply the midbrain and do not change the acute treatment of this stroke.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most likely location of the lesion causing his signs?",
        "options": [
          "Left internal capsule",
          "Left medulla",
          "Right cavernous sinus",
          "Right midbrain",
          "Right pons",
        ],
        "correct": 3,
        "explanation": "A right third nerve palsy with weakness of the left arm and leg is the crossed pattern of a right midbrain lesion, where the third nerve fascicle passes through the cerebral peduncle. A right pontine lesion gives crossed signs with the sixth or seventh nerve instead. A cavernous sinus lesion can cause a third nerve palsy but does not weaken the limbs. A left internal capsule lesion would weaken the right side, and a medullary lesion involves the lower cranial nerves.",
        "keyFeature": { "topic": "cva", "n": 2 },
        "source": "mesenceph",
      },
    ],
    "sources": [SRC_MESENCEPH, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-24",
    "topic": "cva",
    "title": "Bumping into door frames",
    "stem": "A 68-year-old man presents to the emergency department at 16:00 after his optometrist found a visual field defect. Since waking at 06:30 he has bumped into door frames on his left side and missed words on the left side of the page. He went to bed well at 23:00. He has hypertension and atrial fibrillation and stopped apixaban 2 months ago because of cost. Capillary glucose is 6.3 mmol/L. Visual acuity is normal in each eye. There is a left homonymous hemianopia. Pupils are equal and reactive. Strength, sensation, speech and gait are normal. NIHSS is 2.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "96/minute irregular",
      "resp": "16/minute",
      "bp": "154/90 mmHg",
      "o2sat": "97% on room air",
      "weight": "81 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following arterial territories is most likely affected in this patient?",
        "kind": "single",
        "options": [
          "Left middle cerebral artery",
          "Left posterior cerebral artery",
          "Right anterior cerebral artery",
          "Right ophthalmic artery",
          "Right posterior cerebral artery"
        ],
        "correct": 4,
        "explanation": "An isolated left homonymous hemianopia comes from the right occipital lobe, which the right posterior cerebral artery supplies. Visual field defects are the most frequent sign of superficial posterior cerebral artery infarction. A left posterior cerebral artery infarct would cause a right hemianopia. An ophthalmic artery lesion causes loss in one eye, and his acuity is normal in each eye. Anterior and left middle cerebral artery strokes would bring weakness or aphasia.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "pca"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the most appropriate reperfusion decision for this patient?",
        "kind": "single",
        "options": [
          "Alteplase with MRI selection",
          "Intra-arterial alteplase",
          "Posterior cerebral thrombectomy",
          "Tenecteplase 0.25 mg/kg IV",
          "No reperfusion treatment"
        ],
        "correct": 4,
        "explanation": "He was last known well at 23:00, 17 hours before arrival, so he is beyond every thrombolysis window, including the 4.5 to 9 hour window for selected patients with advanced imaging. Thrombectomy criteria require a disabling deficit, such as NIHSS above 5, with a large vessel occlusion, and his NIHSS is 2. The posterior cerebral artery is a medium vessel, where trials do not support routine thrombectomy. Intra-arterial alteplase is not an established treatment.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      },
      {
        "id": "q3",
        "prompt": "Which of the following is the most likely mechanism of this patient's stroke?",
        "kind": "single",
        "options": [
          "Cardioembolism from the atrium",
          "Carotid artery stenosis",
          "Hypertensive encephalopathy",
          "Small vessel lacunar disease",
          "Vertebral artery dissection"
        ],
        "correct": 0,
        "explanation": "He has an irregular pulse, known atrial fibrillation and stopped his anticoagulant 2 months ago, which makes embolism to the posterior cerebral artery the most likely mechanism. A lacunar infarct affects deep structures and does not cause a cortical hemianopia. He has no neck pain or trauma to suggest dissection. The carotid artery does not usually supply the occipital lobe, and hypertensive encephalopathy causes headache and confusion with a diffuse picture.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "pca"
      },
      {
        "id": "q4",
        "update": "CT shows a small right occipital infarct without hemorrhage. CT angiography shows no stenosis.",
        "prompt": "Which of the following is the most appropriate antithrombotic plan for this patient?",
        "kind": "single",
        "options": [
          "ASA and clopidogrel for 21 days",
          "ASA 81 mg daily indefinitely",
          "Heparin infusion started today",
          "Restart apixaban within a few days",
          "Warfarin with an enoxaparin bridge"
        ],
        "correct": 3,
        "explanation": "Stroke with atrial fibrillation calls for oral anticoagulation instead of antiplatelet therapy. Canadian consensus suggests starting a DOAC about 3 days after a minor stroke with a small infarct on imaging, after repeat imaging excludes hemorrhagic transformation. Dual antiplatelet therapy is for strokes that are not cardioembolic, and ASA alone is inferior to anticoagulation for atrial fibrillation. Heparin bridging raises bleeding risk without benefit, and warfarin offers no advantage over a DOAC here.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-prev"
      }
    ],
    "sources": [SRC_PCA, SRC_CSBPR_EVT, SRC_CSBPR_PREV],
    ...meta,
  },
  {
    "id": "cva-25",
    "topic": "cva",
    "title": "Could not be woken this morning",
    "stem": "A 44-year-old man is brought to the emergency department by ambulance at 08:10 because his partner could not wake him fully at 07:30. He was well when he went to bed at 23:30. He has hypertension and smokes. He drinks two beers most evenings and takes no sedatives. Paramedics gave naloxone with no change. Capillary glucose is 5.9 mmol/L. He opens his eyes to a loud voice, mumbles words and falls back asleep. GCS is 11 (E3 V3 M5). Pupils are 3 mm and react sluggishly. Vertical eye movements are absent with head movement, while horizontal eye movements are full. All four limbs move equally.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "72/minute",
      "resp": "16/minute",
      "bp": "168/98 mmHg",
      "o2sat": "96% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following findings most strongly suggests a structural brain lesion rather than intoxication?",
        "kind": "single",
        "options": [
          "Alcohol use most evenings",
          "GCS of 11 on arrival",
          "Loss of vertical eye movements",
          "Sluggish pupil reactions",
          "No response to naloxone"
        ],
        "correct": 2,
        "explanation": "Selective loss of vertical gaze with full horizontal movements is a focal sign from the rostral midbrain and thalamus, and toxins do not cause it. A GCS of 11 and sluggish pupils are common in intoxication and in structural coma. Evening alcohol use is a distraction in a man who was well at bedtime. A lack of response to naloxone only argues against opioids.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "pca"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the most likely location of this patient's lesion?",
        "kind": "single",
        "options": [
          "Both occipital lobes",
          "Both paramedian thalami",
          "Left lateral medulla",
          "Pons and cerebellum",
          "Right frontal lobe"
        ],
        "correct": 1,
        "explanation": "Hypersomnolence, cognitive change and vertical gaze paresis form the classic triad of paramedian thalamic and rostral midbrain infarction. Occipital infarcts cause visual loss without somnolence or gaze palsy. A lateral medullary infarct causes vertigo, crossed sensory loss and dysphagia. A single frontal lesion does not cause this triad, and a pontine lesion would affect horizontal gaze, which is full.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "pca"
      },
      {
        "id": "q3",
        "update": "Non-contrast CT head is normal. His GCS and eye findings are unchanged.",
        "prompt": "Which of the following is the most appropriate imaging study for this patient next?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT angiography of head and neck",
          "CT of the cervical spine",
          "Repeat CT head in 12 hours",
          "Transcranial Doppler ultrasound"
        ],
        "correct": 1,
        "explanation": "A normal CT does not exclude early thalamic or brainstem infarction. CT angiography looks for a basilar tip occlusion, which is eligible for thrombectomy within 24 hours of last known well in patients who meet criteria. He was last well at 23:30, about 9 hours before arrival, so a treatable occlusion must be sought now. Carotid ultrasound does not show the basilar artery, and transcranial Doppler cannot reliably exclude a basilar tip occlusion or show the thalamic perforators. A repeat CT delays the diagnosis, and cervical spine CT does not address the problem.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      },
      {
        "id": "q4",
        "update": "CT angiography shows a patent basilar artery. MRI shows bilateral paramedian thalamic infarcts with a V-shaped signal along the midbrain surface.",
        "prompt": "Which of the following arteries was most likely occluded in this patient?",
        "kind": "single",
        "options": [
          "Anterior choroidal artery",
          "Anterior spinal artery",
          "Artery of Percheron",
          "Posterior inferior cerebellar",
          "Recurrent artery of Heubner"
        ],
        "correct": 2,
        "explanation": "The artery of Percheron is a single trunk from one posterior cerebral artery that supplies both paramedian thalami and often the rostral midbrain. Its occlusion causes bilateral paramedian thalamic infarcts, and the midbrain V sign supports the diagnosis. The anterior choroidal artery supplies the internal capsule and one side only. Heubner's artery supplies the caudate. The posterior inferior cerebellar and anterior spinal arteries supply the medulla and spinal cord.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "percheron"
      }
    ],
    "sources": [SRC_PCA, SRC_CSBPR_EVT, SRC_PERCHERON],
    ...meta,
  },
  {
    "id": "cva-26",
    "topic": "cva",
    "title": "Leg gave way at breakfast",
    "stem": "A 73-year-old woman is brought to the emergency department by her husband at 10:40. At 09:15 her right leg gave way as she stood from the breakfast table. He thought she had hurt her hip. Since then she has been unusually quiet and slow to answer, and she was incontinent of urine in the car. She has hypertension and type 2 diabetes. Medications: metformin and perindopril. Capillary glucose is 8.1 mmol/L. The right hip moves freely without pain. Right leg power is 2/5 and right arm power is 4+/5 with normal grip. The face is symmetric. She answers after long pauses with correct words. NIHSS is 7.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "80/minute",
      "resp": "16/minute",
      "bp": "172/90 mmHg",
      "o2sat": "97% on room air",
      "weight": "64 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following arterial territories best explains this patient's findings?",
        "kind": "single",
        "options": [
          "Left anterior cerebral artery",
          "Left lenticulostriate arteries",
          "Left middle cerebral artery",
          "Left posterior cerebral artery",
          "Right anterior cerebral artery"
        ],
        "correct": 0,
        "explanation": "Weakness of the right leg more than the arm, slowness to respond with correct words and urinary incontinence fit a left anterior cerebral artery infarct, which supplies the medial frontal lobe and leg area of the motor cortex. A left middle cerebral artery stroke affects the face and arm more than the leg and usually causes aphasia. A posterior cerebral artery stroke causes visual field loss. A right-sided lesion would weaken the left side. A lacunar infarct usually weakens face, arm and leg equally.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "aca"
      },
      {
        "id": "q2",
        "update": "Non-contrast CT shows no hemorrhage or early ischemic change. She was independent before today.",
        "prompt": "Which of the following is the correct thrombolytic dose for this patient?",
        "kind": "single",
        "options": [
          "Alteplase 90 mg IV over 1 hour",
          "Tenecteplase 6.4 mg IV bolus",
          "Tenecteplase 16 mg IV bolus",
          "Tenecteplase 25 mg IV bolus",
          "Tenecteplase 40 mg IV bolus"
        ],
        "correct": 2,
        "explanation": "Her leg weakness is disabling and she is within 4.5 hours, so she should be offered thrombolysis. Tenecteplase for stroke is 0.25 mg/kg to a maximum of 25 mg as a single bolus, and 64 x 0.25 = 16 mg. A 25 mg dose is the cap for patients of 100 kg or more. A 6.4 mg dose is 0.1 mg/kg and underdoses her. A 40 mg dose falls in the range used for myocardial infarction, and the guideline warns that stroke dosing differs. Alteplase is 0.9 mg/kg, so 90 mg is far above her dose of about 58 mg.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "update": "Tenecteplase is given at 11:05. CT angiography shows occlusion of the left A2 segment of the anterior cerebral artery.",
        "prompt": "Which of the following best describes the role of thrombectomy for this patient?",
        "kind": "single",
        "options": [
          "Case by case with neurointervention",
          "Contraindicated after tenecteplase",
          "Indicated for every A2 occlusion",
          "Only after repeat CT in 24 hours",
          "Only if NIHSS rises above 20"
        ],
        "correct": 0,
        "explanation": "The A2 segment is a medium vessel, and the 2025 Canadian update states that trial data do not support routine thrombectomy for M2, A2 or P2 occlusions. Eligible patients may be considered after discussion between the stroke physician and the neurointerventionalist. Thrombolysis does not rule out thrombectomy, and no delay to judge the effect of thrombolysis is advised. No NIHSS threshold of 20 applies.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      },
      {
        "id": "q4",
        "prompt": "Which of the following is the most appropriate timing for starting antiplatelet therapy in this patient?",
        "kind": "single",
        "options": [
          "After 24 hours and repeat imaging",
          "After 3 months of monitoring",
          "At discharge from hospital",
          "Before the tenecteplase bolus",
          "Immediately after tenecteplase"
        ],
        "correct": 0,
        "explanation": "After IV thrombolysis, antiplatelet therapy is avoided for the first 24 hours and then started once brain imaging excludes hemorrhage. Giving it with or just before tenecteplase raises the risk of bleeding. Waiting until discharge or for months leaves her without secondary prevention during the period of highest recurrence risk.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_ACA, SRC_CSBPR_ACUTE, SRC_CSBPR_EVT],
    ...meta,
  },
  {
    "id": "cva-27",
    "topic": "cva",
    "title": "Veering on a morning walk",
    "stem": "A 67-year-old man presents to the emergency department at 11:05 because he has been unsteady since 09:40. While walking his dog he began veering to the right, and at home his right hand kept overshooting his coffee cup. His wife thinks his speech is slurred. He has had no vertigo, vomiting, headache or neck pain. Yesterday he had coronary angiography through the right radial artery, with premedication for a past reaction to IV contrast. It showed nonobstructive disease, and he went home on ASA 81 mg daily. He has hypertension. Strength, including finger spreading, is normal. Reflexes are symmetric and plantar responses are flexor. Pinprick and joint position sense are normal. Finger-nose and heel-shin testing are ataxic on the right. He cannot walk without support and falls to the right. There is no nystagmus. Capillary glucose is 6.4 mmol/L.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "78/minute",
      "resp": "16/minute",
      "bp": "164/88 mmHg",
      "o2sat": "97% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most likely cause of his symptoms?",
        "kind": "single",
        "options": [
          "Infarct of the right cerebellum",
          "Left internal capsule lacunar infarct",
          "Left motor cortex hand area infarct",
          "Left thalamic infarct",
          "Right C7 radiculopathy"
        ],
        "correct": 0,
        "explanation": "Sudden ataxia of the right arm and leg with slurred speech, normal strength and normal sensation points to the right cerebellum, which coordinates movement on its own side. Infarcts in the upper cerebellum cause dysmetria on the same side, dysarthria and unsteadiness, and can mimic a lacunar dysarthria and clumsy hand syndrome. A left capsular lacune would usually bring some weakness or brisk reflexes on the right. A hand area infarct weakens finger spreading. A thalamic infarct brings sensory loss, and a C7 radiculopathy would not affect his leg or his speech.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "amarenco-sca"
      },
      {
        "id": "q2",
        "prompt": "Which of the following arteries most likely supplies the injured area in this patient?",
        "kind": "single",
        "options": [
          "Left lenticulostriate arteries",
          "Left MCA cortical branch",
          "Left thalamoperforating arteries",
          "Right posterior inferior cerebellar artery",
          "Right superior cerebellar artery"
        ],
        "correct": 4,
        "explanation": "The superior cerebellar artery supplies the upper cerebellar hemisphere. Its infarcts cause gait and limb ataxia with little or no vertigo, as in this patient. Most cerebellar infarcts that present as isolated vertigo lie in the territory of the medial branch of the posterior inferior cerebellar artery, and he has no vertigo, vomiting or nystagmus. The lenticulostriate and thalamoperforating arteries supply the internal capsule and thalamus, and a middle cerebral artery branch supplies the hand area of the cortex. Lesions there would cause weakness or sensory loss on the right, which he does not have.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "kase-sca"
      },
      {
        "id": "q3",
        "update": "Non-contrast CT shows no hemorrhage. NIHSS is 3, and the stroke neurologist judges the deficit disabling because he cannot walk. INR is 1.0, aPTT is normal and platelets are 214 x 10^9/L. It is 11:30.",
        "prompt": "Which of the following is the most appropriate reperfusion decision for this patient?",
        "kind": "single",
        "options": [
          "ASA and clopidogrel loading",
          "Half-dose tenecteplase now",
          "Observation and repeat CT",
          "Tenecteplase IV now",
          "No thrombolysis after the angiogram"
        ],
        "correct": 3,
        "explanation": "He is within 4.5 hours of onset at 09:40, with a disabling ischemic stroke, no hemorrhage and normal coagulation, so thrombolysis should be offered. Canadian criteria list arterial puncture at a noncompressible site in the previous 7 days as a relative exclusion. The radial artery is compressible, so yesterday's angiogram is not a reason to withhold treatment, and ASA is not on the list of exclusions. Tenecteplase is given at the full dose of 0.25 mg/kg, to a maximum of 25 mg, not a reduced dose. Dual antiplatelet loading is for non-disabling stroke and TIA. Observation withholds a time-dependent treatment.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "update": "His past reaction was hives and wheeze after IV contrast 4 years ago. He had no reaction after premedication yesterday. Today's creatinine is pending.",
        "prompt": "Which of the following is the most appropriate plan for his vascular imaging?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound today",
          "CT angiography after IV premedication",
          "CT angiography once creatinine is known",
          "MR angiography tomorrow morning",
          "Non-contrast CT only"
        ],
        "correct": 1,
        "explanation": "Canadian guidance calls for vascular imaging from the aortic arch to the vertex without delay after an acute stroke, and upper cerebellar infarcts can come from an occlusion at the top of the basilar artery. The same guidance says a known contrast allergy or renal failure should not exclude a patient from thrombectomy assessment, and it advises IV diphenhydramine, a corticosteroid and an H2 blocker beforehand. Initial blood work should not delay imaging, so waiting for creatinine is wrong. Carotid Doppler does not show the basilar artery. MR angiography tomorrow is too late, and non-contrast CT cannot show an occlusion.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_AMARENCO_SCA, SRC_KASE_SCA, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 3,
  },
  {
    "id": "cva-28",
    "topic": "cva",
    "title": "Lost in her own residence",
    "stem": "An 84-year-old woman is brought to the emergency department by ambulance at 14:10 from her retirement residence. Staff saw her playing cards normally in the lounge at 12:50. At 13:15 she was found pacing the hallway, agitated and unable to find her room. She has hypertension and takes amlodipine. She lives independently, manages her own finances and has no known memory problems. Her son is her substitute decision maker and is on a flight to Vancouver until 19:00. Capillary glucose is 6.9 mmol/L. She is restless and cannot state the month or her age, but she follows simple commands. She does not blink to a threat from the left in either eye. Limb strength, sensation and speech are normal. A urine dipstick shows 2+ leukocytes.",
    "vitals": { "temperature": "36.9°C oral", "pulse": "88/minute regular", "resp": "18/minute", "bp": "168/90 mmHg", "o2sat": "96% on room air", "weight": "72 kg" },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following findings most strongly suggests a stroke rather than delirium from another cause?",
        "options": [
          "Absent left blink to threat",
          "Agitation and pacing",
          "Her age of 84 years",
          "Leukocytes on urine dipstick",
          "Not knowing the month",
        ],
        "correct": 0,
        "explanation": "No blink to a threat from the left in either eye is a left homonymous field defect. That focal sign places a lesion in the right occipital lobe, the territory of the right posterior cerebral artery. Infarcts in this territory can present as agitated confusion with few other deficits and are easily mistaken for a toxic or metabolic delirium. Disorientation and restlessness occur with delirium of any cause. Leukocytes on a dipstick are common in older women without infection and cannot explain a field defect. Her age raises the risk of both conditions.",
        "keyFeature": { "topic": "cva", "n": 2 },
        "source": "pca-delirium",
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "CT shows no hemorrhage or early ischemic change. CT angiography shows no large vessel occlusion.",
        "prompt": "Which of the following is the most appropriate treatment for her?",
        "options": [
          "alteplase 0.6 mg/kg IV",
          "ASA 325 mg PO",
          "tenecteplase 9 mg IV",
          "tenecteplase 18 mg IV",
          "tenecteplase 36 mg IV",
        ],
        "correct": 3,
        "explanation": "A complete field defect with confusion that stops her living alone is a disabling deficit. She is within 4.5 hours of 12:50, has no hemorrhage, and her BP of 168/90 mmHg is below the 180/105 mmHg target, so thrombolysis is indicated. Tenecteplase for stroke is 0.25 mg/kg to a maximum of 25 mg, and 0.25 x 72 kg = 18 mg. A dose of 36 mg is 0.5 mg/kg, above the stroke dose, and 9 mg is half of it. The alteplase dose for stroke is 0.9 mg/kg, not 0.6 mg/kg. ASA alone suits a deficit that is not disabling.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "She cannot understand the risks and benefits of thrombolysis, and her son cannot be reached.",
        "prompt": "Which of the following is the most appropriate approach to consent for thrombolysis in this patient?",
        "options": [
          "Obtain consent from residence staff",
          "Seek an urgent capacity board review",
          "Treat now as emergency treatment",
          "Wait until her son can be reached",
          "Withhold, as consent is required",
        ],
        "correct": 2,
        "explanation": "She lacks capacity for this decision, her substitute decision maker cannot be reached, and each minute of delay reduces the benefit of thrombolysis, so this is emergency treatment. Canadian stroke guidance describes thrombolysis as standard care to which routine emergency consent procedures apply. Residence staff are not her substitute decision maker. Waiting until 19:00 would take her past 17:20, the end of the 4.5-hour window from 12:50. A capacity board review cannot happen in the time available. Withholding standard treatment for lack of consent ignores the emergency exception.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
    ],
    "sources": [SRC_PCA_DELIRIUM, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-29",
    "topic": "cva",
    "title": "Walking into furniture after surgery",
    "stem": "A 77-year-old woman is brought to the emergency department by her daughter at 19:30. She had a right total hip replacement 6 days ago and went home yesterday. At 18:00 she began walking into furniture and knocked over her tea. She insists she can see and describes a sunny garden although it is dark outside. She has hypertension and atrial fibrillation. Apixaban was stopped for surgery and she takes enoxaparin 40 mg SC daily. Capillary glucose is 6.8 mmol/L. She cannot count fingers in any part of either visual field. Pupils are 3 mm and react briskly to light. Fundi are normal. Limb strength is normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "98/minute irregular",
      "resp": "18/minute",
      "bp": "158/84 mmHg",
      "o2sat": "96% on room air",
      "weight": "66 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most likely diagnosis in this patient?",
        "kind": "single",
        "options": [
          "Acute angle-closure glaucoma",
          "Bilateral occipital infarction",
          "Bilateral retinal artery occlusion",
          "Delirium after hip surgery",
          "Ischemic optic neuropathy"
        ],
        "correct": 1,
        "explanation": "She is blind in both fields but denies it and confabulates a sunny garden, which is Anton syndrome from bilateral occipital infarction. Atrial fibrillation with apixaban held for surgery makes an embolus to the top of the basilar artery likely. Bilateral retinal artery occlusion or optic neuropathy would impair the pupillary light reflex, and retinal occlusion would also change the fundi. Delirium does not cause blindness with preserved pupils. Angle closure causes a painful red eye with a fixed mid-dilated pupil.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "anton"
      },
      {
        "id": "q2",
        "prompt": "Which of the following findings best distinguishes cortical blindness from blindness caused by eye disease?",
        "kind": "single",
        "options": [
          "Absence of eye pain",
          "Brisk pupillary light reflexes",
          "Inability to count fingers",
          "Loss of vision in both eyes",
          "Sudden onset of symptoms"
        ],
        "correct": 1,
        "explanation": "The pupillary light reflex runs from the retina and optic nerve to the midbrain and does not depend on the occipital cortex. Brisk pupils with complete blindness therefore place the lesion behind the lateral geniculate body. Inability to count fingers, loss in both eyes, sudden onset and a painless eye occur in both cortical and ocular blindness.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "pca"
      },
      {
        "id": "q3",
        "prompt": "Which of the following is the strongest reason to avoid IV thrombolysis for this patient?",
        "kind": "single",
        "options": [
          "Age older than 75 years",
          "Atrial fibrillation history",
          "Hip replacement 6 days ago",
          "Isolated visual symptoms",
          "Treated hypertension"
        ],
        "correct": 2,
        "explanation": "Major surgery, including orthopedic surgery, in the preceding 14 days is a relative exclusion to thrombolysis because of bleeding risk at the operative site. Age has no upper limit for thrombolysis. Atrial fibrillation explains the stroke but is not an exclusion. Bilateral blindness is a disabling deficit. Her BP of 158/84 mmHg is below the treatment threshold.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "update": "CT shows no hemorrhage. CT angiography shows occlusion of the top of the basilar artery extending into both posterior cerebral arteries. NIHSS is 6.",
        "prompt": "Which of the following is the most appropriate treatment for this patient?",
        "kind": "single",
        "options": [
          "Alteplase at a reduced dose",
          "Endovascular thrombectomy",
          "Heparin infusion without bolus",
          "Resume apixaban tonight",
          "Tenecteplase 0.25 mg/kg IV"
        ],
        "correct": 1,
        "explanation": "She has a disabling stroke from a basilar artery occlusion within 24 hours of onset, which the 2025 Canadian update lists as an indication for thrombectomy. Recent surgery is a relative exclusion to thrombolysis but not to thrombectomy. A reduced alteplase dose does not remove the surgical bleeding risk. Heparin or restarting apixaban does not recanalize the artery and adds bleeding risk into a fresh infarct.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      }
    ],
    "sources": [SRC_ANTON, SRC_PCA, SRC_CSBPR_ACUTE, SRC_CSBPR_EVT],
    ...meta,
  },
  {
    "id": "cva-30",
    "topic": "cva",
    "title": "Weakness far from a stroke centre",
    "stem": "You are working in a rural hospital emergency department with CT but no CT angiography. The nearest comprehensive stroke centre is 2 hours away by air. A 71-year-old man arrives by ambulance at 10:05 with right arm weakness and difficulty speaking that began at 09:20. He has hypertension and dyslipidemia. Medications: ramipril and atorvastatin. Capillary glucose is 7.1 mmol/L. He has a right facial droop, right arm power 1/5, right leg power 3/5 and expressive aphasia. NIHSS is 12. Non-contrast CT at 10:25 shows no hemorrhage or early ischemic change.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "84/minute",
      "resp": "16/minute",
      "bp": "168/94 mmHg",
      "o2sat": "96% on room air",
      "weight": "92 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most appropriate next step for this patient?",
        "kind": "single",
        "options": [
          "ASA 160 mg PR and transfer",
          "Heparin infusion then transfer",
          "Tenecteplase and admission locally",
          "Tenecteplase then transfer for thrombectomy",
          "Transfer for CT angiography before lysis"
        ],
        "correct": 3,
        "explanation": "Canadian guidance says centres without CT angiography should complete a non-contrast CT, give IV thrombolysis to eligible patients and transfer them quickly to a comprehensive stroke centre for vascular imaging and thrombectomy. He has a disabling deficit, is within 4.5 hours and has a normal CT. Delaying thrombolysis for CT angiography elsewhere loses 2 hours or more. Admitting locally ignores a possible large vessel occlusion given his severity. ASA and heparin are not reperfusion treatments.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "update": "Tenecteplase is given at 10:40. At 11:20, before the aircraft arrives, he vomits, reports a severe headache and becomes drowsy with a GCS of 11. BP is 212/118 mmHg.",
        "prompt": "Which of the following is the most appropriate first action for this patient?",
        "kind": "single",
        "options": [
          "ASA 325 mg PR for reocclusion",
          "Ondansetron and review in 1 hour",
          "Proceed with air transfer as planned",
          "Repeat NIHSS in 30 minutes",
          "Urgent repeat non-contrast CT head"
        ],
        "correct": 4,
        "explanation": "New headache, vomiting, a drop in consciousness and a surge in BP after thrombolysis suggest intracranial hemorrhage, and an immediate non-contrast CT is required. Flying him first delays a diagnosis that changes treatment. Treating nausea and waiting, or waiting to repeat the NIHSS, loses time. ASA within 24 hours of thrombolysis is avoided and would worsen any hemorrhage.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "update": "CT shows a new 30 mL left intracerebral hemorrhage. INR is 1.0, platelets are 210 x 10^9/L and fibrinogen is 1.2 g/L.",
        "prompt": "Which of the following treatments are most appropriate for this thrombolysis-associated hemorrhage?",
        "kind": "menu",
        "options": [
          "Cryoprecipitate",
          "Idarucizumab",
          "Platelet transfusion",
          "Protamine sulfate",
          "Prothrombin complex concentrate",
          "Recombinant factor VIIa",
          "Tranexamic acid",
          "Vitamin K IV"
        ],
        "select": 2,
        "correct": [
          0,
          6
        ],
        "explanation": "Canadian guidance suggests cryoprecipitate, fibrinogen concentrate, plasma or tranexamic acid for thrombolysis-associated intracranial hemorrhage, and his low fibrinogen of 1.2 g/L supports replacing it. Prothrombin complex concentrate, platelet transfusion and factor VIIa have not shown benefit and may cause harm, so they should probably be avoided. His INR and platelet count are normal. Idarucizumab reverses dabigatran, protamine reverses heparin and vitamin K reverses warfarin, and he takes none of these.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "prompt": "Which of the following blood pressure approaches is most appropriate for this patient now?",
        "kind": "single",
        "options": [
          "Lower below 185/110 mmHg",
          "Lower by 50% within 30 minutes",
          "Lower systolic below 100 mmHg",
          "Treat only if above 220/120 mmHg",
          "Treat only if GCS falls further"
        ],
        "correct": 0,
        "explanation": "In symptomatic hemorrhage after thrombolysis, Canadian guidance says BP above 185/110 mmHg should be lowered, although the exact target is not known. His BP of 212/118 mmHg needs treatment now. Waiting for 220/120 mmHg applies to ischemic stroke without thrombolysis. Lowering systolic below 100 mmHg or by half within 30 minutes risks cerebral hypoperfusion. Waiting for further decline loses the chance to limit hematoma growth.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-31",
    "topic": "cva",
    "title": "Tongue swelling during treatment",
    "stem": "A 66-year-old woman is brought to the emergency department by ambulance with left arm and leg weakness. A right middle cerebral artery stroke is diagnosed. IV alteplase is started with the bolus at 14:05 and the infusion at 14:06. She has hypertension and heart failure. Medications: ramipril 10 mg daily, bisoprolol and furosemide. At 14:40 the nurse notes swelling of the left side of her tongue and lower lip. She can speak and swallow her saliva. There is no stridor, wheeze, rash or hypotension.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "78/minute",
      "resp": "18/minute",
      "bp": "164/88 mmHg",
      "o2sat": "97% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is her strongest risk factor for this reaction to alteplase?",
        "kind": "single",
        "options": [
          "ACE inhibitor therapy",
          "Age older than 65 years",
          "Beta blocker therapy",
          "Heart failure history",
          "Loop diuretic therapy"
        ],
        "correct": 0,
        "explanation": "Orolingual angioedema occurred in about 5% of patients treated with alteplase in a Calgary series, and the risk was linked to ACE inhibitor use. It is typically mild and on the side opposite the ischemic hemisphere, as here with left-sided swelling and a right hemisphere stroke. Beta blockers, heart failure, diuretics and age were not the identified risk factors.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "angioedema"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the most appropriate first step for this patient?",
        "kind": "single",
        "options": [
          "Continue alteplase and observe",
          "Epinephrine 0.5 mg IM now",
          "Intubate before swelling spreads",
          "Stop the alteplase infusion",
          "Tranexamic acid 1 g IV"
        ],
        "correct": 3,
        "explanation": "Canadian guidance says the alteplase infusion should be stopped at the first sign of angioedema. Continuing it risks progression. Epinephrine is reserved for life-threatening angioedema because it can raise BP after thrombolysis. Her airway is patent with no stridor, so intubation is not yet needed, although the airway must be watched closely. Tranexamic acid is used for thrombolysis-related bleeding and is not among the recommended treatments for this reaction.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "prompt": "Which of the following medications are recommended for her orolingual angioedema?",
        "kind": "menu",
        "options": [
          "Cryoprecipitate IV",
          "Diphenhydramine IV",
          "Epinephrine 0.5 mg IM",
          "Famotidine IV",
          "Furosemide IV",
          "Naloxone IV",
          "Ondansetron IV",
          "Tranexamic acid IV"
        ],
        "select": 2,
        "correct": [
          1,
          3
        ],
        "explanation": "Canadian guidance recommends an H1 blocker such as diphenhydramine and an H2 blocker such as famotidine, with glucocorticoids considered. Epinephrine is reserved for life-threatening swelling. Cryoprecipitate and tranexamic acid are used for thrombolysis-related bleeding and are not recommended for angioedema. Furosemide does not reduce angioedema, naloxone reverses opioids she has not received, and ondansetron treats nausea, which she does not have.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "update": "The alteplase infusion is stopped and antihistamines are given. The swelling stops progressing.",
        "prompt": "Which of the following new findings would most justify giving epinephrine?",
        "kind": "single",
        "options": [
          "BP of 165/90 mmHg",
          "Mild itching of the tongue",
          "Stable lip swelling at 2 hours",
          "Stridor with rapid swelling",
          "Swelling limited to one side"
        ],
        "correct": 3,
        "explanation": "Epinephrine is kept for life-threatening angioedema, and new stridor with rapidly progressing swelling threatens the airway. Itching, stable lip swelling and one-sided swelling are features of the mild reaction she already has. A BP of 165/90 mmHg is acceptable after thrombolysis, and epinephrine would raise it further.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_ANGIOEDEMA, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-32",
    "topic": "cva",
    "title": "Numb hand and mouth",
    "stem": "A 59-year-old man presents to the emergency department at 11:10 with numbness of his left hand and the left corner of his mouth that began suddenly at 09:40 and has not improved. He works as an accountant and can type normally. He has hypertension and smokes. Medication: amlodipine. Capillary glucose is 6.4 mmol/L. He has reduced pinprick sensation over the left hand and around the left side of the mouth. Strength, coordination, speech, language and visual fields are normal. NIHSS is 1.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "74/minute",
      "resp": "14/minute",
      "bp": "158/92 mmHg",
      "o2sat": "98% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "update": "CT shows no hemorrhage. CT angiography shows no occlusion or significant stenosis. ECG shows sinus rhythm.",
        "prompt": "Which of the following is the most appropriate treatment for this patient now?",
        "kind": "single",
        "options": [
          "Apixaban 5 mg PO twice daily",
          "ASA and clopidogrel loading doses",
          "ASA 81 mg daily alone",
          "Heparin infusion by protocol",
          "Tenecteplase 0.25 mg/kg IV"
        ],
        "correct": 1,
        "explanation": "He has a minor, non-disabling ischemic stroke with an NIHSS of 1 and no cardioembolic source found, and Canadian guidance recommends short-term dual antiplatelet therapy for NIHSS 0 to 3 without high bleeding risk. Thrombolysis is offered for disabling deficits, and his sensory loss does not stop him working. ASA alone is for patients who do not meet dual antiplatelet criteria. He has no atrial fibrillation to justify apixaban, and heparin has no role.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "prompt": "Which of the following best explains why IV thrombolysis is not recommended for this patient?",
        "kind": "single",
        "options": [
          "CT angiography shows no occlusion",
          "He arrived 90 minutes after onset",
          "He is younger than 60 years",
          "He smokes and has hypertension",
          "His deficit is not disabling"
        ],
        "correct": 4,
        "explanation": "Thrombolysis is offered for disabling ischemic stroke, and his mild sensory loss does not limit his function. In the ARAMIS trial of minor non-disabling stroke, dual antiplatelet therapy was non-inferior to alteplase for an excellent 90-day outcome. Thrombolysis does not require a visible occlusion, and his age, arrival within 90 minutes and vascular risk factors would not exclude him.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "aramis"
      },
      {
        "id": "q3",
        "update": "He is well and wants to go home. A stroke prevention clinic appointment is booked.",
        "prompt": "Which of the following is the most appropriate timing for his first antiplatelet doses?",
        "kind": "single",
        "options": [
          "After 24 hours of observation",
          "After MRI confirms infarction",
          "At the stroke clinic visit",
          "Before he leaves the department",
          "Once his family doctor agrees"
        ],
        "correct": 3,
        "explanation": "Canadian guidance says patients with stroke who are discharged from the emergency department should start antiplatelet therapy before discharge. The risk of recurrence is highest in the first days, so waiting for a clinic visit, an MRI or his family doctor leaves him unprotected. The 24-hour delay applies only after thrombolysis, which he did not receive.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "prompt": "Which of the following investigations should be arranged to look for a cardioembolic source in this patient?",
        "kind": "single",
        "options": [
          "Coronary angiography",
          "ECG monitoring for 24 hours or more",
          "Exercise stress testing",
          "Thrombophilia screening panel",
          "Transesophageal echocardiography"
        ],
        "correct": 1,
        "explanation": "Canadian guidance recommends ECG monitoring for 24 hours or more after an ischemic stroke or TIA to detect paroxysmal atrial fibrillation, which would change treatment to anticoagulation. Routine echocardiography is not required for every stroke, and transesophageal study is kept for selected patients. Extensive thrombophilia testing is not recommended routinely. Coronary angiography and stress testing do not look for a source of embolism.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE, SRC_ARAMIS],
    ...meta,
  },
  {
    "id": "cva-33",
    "topic": "cva",
    "title": "Weakness while shopping",
    "stem": "A 68-year-old woman is brought to the emergency department by ambulance at 16:30 with left-sided weakness and slurred speech that began at 15:45 while she was shopping. She has a mechanical aortic valve and takes warfarin. She lives independently and volunteers weekly. Capillary glucose is 6.9 mmol/L. She has right gaze preference, left hemiplegia, left hemisensory loss and dysarthria. NIHSS is 16. Non-contrast CT shows no hemorrhage and ASPECTS is 9.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "82/minute",
      "resp": "18/minute",
      "bp": "176/96 mmHg",
      "o2sat": "96% on room air",
      "weight": "66 kg"
    },
    "questions": [
      {
        "id": "q1",
        "update": "Point-of-care INR is 2.6. She took her usual warfarin dose last night.",
        "prompt": "Which of the following best describes her eligibility for IV thrombolysis?",
        "kind": "single",
        "options": [
          "Eligible after vitamin K 10 mg IV",
          "Eligible at half the usual dose",
          "Eligible because onset was recent",
          "Eligible once PCC corrects the INR",
          "Not eligible with an INR over 1.7"
        ],
        "correct": 4,
        "explanation": "An INR above 1.7 is a laboratory exclusion to IV thrombolysis, and her INR is 2.6. Reversing warfarin with vitamin K or prothrombin complex concentrate to enable thrombolysis has no supporting evidence and would expose her mechanical valve to thrombosis. Half-dose thrombolysis is not an accepted option. An early arrival does not overcome the bleeding risk.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "update": "CT angiography shows a right M1 occlusion with good collateral filling.",
        "prompt": "Which of the following is the most appropriate treatment for this patient now?",
        "kind": "single",
        "options": [
          "Admission with neurological checks",
          "Endovascular thrombectomy now",
          "Heparin infusion without bolus",
          "PCC reversal then thrombolysis",
          "Thrombectomy once INR is below 1.5"
        ],
        "correct": 1,
        "explanation": "Anticoagulation is not a contraindication to thrombectomy. She has a disabling deficit, a small core with ASPECTS 9, an M1 occlusion and independent function, so she meets criteria and should go now. Reversal to allow thrombolysis has no supporting evidence and is not needed when thrombectomy is available. Waiting for the INR to fall wastes time. Heparin or observation leaves the occlusion untreated.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "prompt": "Which of the following is the most likely mechanism of this patient's stroke?",
        "kind": "single",
        "options": [
          "Cardioembolism from the valve",
          "Cervical carotid dissection",
          "Hypercoagulable state from cancer",
          "Hypertensive small vessel disease",
          "Vasospasm after hemorrhage"
        ],
        "correct": 0,
        "explanation": "A mechanical heart valve is a high-risk cardioembolic source, and a sudden M1 occlusion fits an embolus even with a therapeutic INR. Small vessel disease causes lacunar infarcts, not a proximal large vessel occlusion. There is no neck pain or trauma to suggest dissection, and no history of cancer. Vasospasm follows subarachnoid hemorrhage, which the CT excluded.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-prev"
      },
      {
        "id": "q4",
        "update": "She is alert, follows commands and is protecting her airway. The angiography suite is ready.",
        "prompt": "Which of the following is the preferred approach to sedation for her thrombectomy?",
        "kind": "single",
        "options": [
          "Deep propofol sedation with paralysis",
          "General anesthesia for all patients",
          "Intubation in the ED before transfer",
          "Procedural sedation if airway is safe",
          "Thrombectomy without any monitoring"
        ],
        "correct": 3,
        "explanation": "The 2025 Canadian update says procedural sedation is generally preferred over intubation and general anesthesia for most patients undergoing thrombectomy. General anesthesia is kept for airway compromise, depressed consciousness, severe agitation or expected technical difficulty, none of which she has. Routine intubation in the emergency department delays the procedure and risks hypotension. Paralysis is part of general anesthesia, and no procedure is done without monitoring.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE, SRC_CSBPR_PREV, SRC_CSBPR_EVT],
    ...meta,
  },
  {
    "id": "cva-34",
    "topic": "cva",
    "title": "Fevers and sudden trouble speaking",
    "stem": "A 36-year-old man is brought to the emergency department by ambulance at 21:10 with sudden difficulty speaking and right hand weakness that began at 20:30. He injects hydromorphone and has had fevers, night sweats and fatigue for 2 weeks. He takes no regular medications. Capillary glucose is 5.8 mmol/L. He has nonfluent aphasia and right hand weakness. There is a new apical holosystolic murmur radiating to the axilla and splinter hemorrhages under two fingernails. NIHSS is 7.",
    "vitals": {
      "temperature": "38.7°C oral",
      "pulse": "118/minute",
      "resp": "20/minute",
      "bp": "128/70 mmHg",
      "o2sat": "96% on room air",
      "weight": "68 kg"
    },
    "questions": [
      {
        "id": "q1",
        "update": "Non-contrast CT shows no hemorrhage or early ischemic change. Blood cultures are being drawn.",
        "prompt": "Which of the following best describes the role of IV thrombolysis for this patient?",
        "kind": "single",
        "options": [
          "Give alteplase at half the usual dose",
          "Give it if the fever settles with acetaminophen",
          "Give it once blood cultures are drawn",
          "Give tenecteplase at the usual dose",
          "Withhold because of likely endocarditis"
        ],
        "correct": 4,
        "explanation": "Fever, injection drug use, a new mitral murmur and splinter hemorrhages make infective endocarditis the likely cause of his embolic stroke. The 2026 AHA/ASA guideline lists definite or suspected endocarditis as a contraindication to IV thrombolysis. Septic emboli weaken the arterial wall, and observational data show a much higher rate of intracranial hemorrhage after thrombolysis in endocarditis. Drawing cultures first, lowering the dose, switching agent or treating the fever does not change that risk.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "aha-ais"
      },
      {
        "id": "q2",
        "prompt": "Which of the following investigations are most important to establish the cause of his stroke?",
        "kind": "menu",
        "options": [
          "Blood cultures, three sets",
          "Echocardiography",
          "Electroencephalogram",
          "Holter monitor 48 hours",
          "Lumbar puncture",
          "Temporal artery biopsy",
          "Thrombophilia panel",
          "Urine drug screen"
        ],
        "select": 2,
        "correct": [
          0,
          1
        ],
        "explanation": "Canadian guidance singles out bacterial endocarditis as an uncommon cause of stroke that needs immediate treatment, and it is confirmed by blood cultures and echocardiography showing a vegetation. Extensive thrombophilia testing is not recommended routinely. Lumbar puncture, a drug screen, an EEG and Holter monitoring do not confirm endocarditis. Temporal artery biopsy is for giant cell arteritis in older patients.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "update": "Three blood culture sets grow Staphylococcus aureus. Echocardiography shows a mitral vegetation. Antibiotics are started.",
        "prompt": "Which of the following antiplatelet plans is most appropriate while he receives antibiotics?",
        "kind": "single",
        "options": [
          "ASA and clopidogrel for 21 days",
          "ASA 325 mg daily for 4 weeks",
          "ASA 160 mg load then 81 mg daily",
          "Clopidogrel 75 mg daily",
          "No antiplatelet therapy for now"
        ],
        "correct": 4,
        "explanation": "In a randomized trial of patients with endocarditis on antibiotics, ASA 325 mg daily for 4 weeks did not reduce embolic events and showed a trend toward more bleeding. The authors concluded that ASA is not indicated in early management. Dual antiplatelet therapy is for non-cardioembolic minor stroke and TIA, which this is not. Clopidogrel has no evidence of benefit here and adds bleeding risk.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "ie-asa"
      }
    ],
    "sources": [SRC_AHA_AIS, SRC_CSBPR_ACUTE, SRC_IE_ASA],
    ...meta,
  },
  {
    "id": "cva-35",
    "topic": "cva",
    "title": "Weak on one side at her desk",
    "stem": "A 66-year-old woman is brought to the emergency department by ambulance at 11:00. At 10:20, while sitting at her desk, she felt a sudden severe pain in the back of her neck, and within 10 minutes her left arm and leg became weak. She has hypertension and takes amlodipine and ASA 81 mg daily. She takes no anticoagulant. She is alert, and her speech, face, eye movements and visual fields are normal. Left arm power is 2/5 and left leg power is 3/5. Pinprick sensation is reduced on the right side of her body below the neck. The back of her neck is tender. Capillary glucose is 6.1 mmol/L. Non-contrast CT head and CT angiography from the aortic arch to the vertex show no hemorrhage, occlusion or dissection.",
    "vitals": { "temperature": "36.8°C oral", "pulse": "84/minute regular", "resp": "18/minute", "bp": "186/98 mmHg", "o2sat": "97% on room air", "weight": "70 kg" },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate imaging before a decision on thrombolysis?",
        "options": [
          "CT perfusion of the brain",
          "MRI of the brain with diffusion",
          "MRI of the cervical spine",
          "Repeat CT head in 6 hours",
          "Transcranial Doppler study",
        ],
        "correct": 2,
        "explanation": "Sudden neck pain followed by weakness of one arm and leg, with a normal face and speech and pinprick loss on the other side, points to a lesion in the cervical spinal canal rather than the brain. In a review of 51 patients with a spontaneous cervical epidural hematoma that presented like a stroke, 21 were first diagnosed as ischemic stroke, brain MRI showed no responsible lesion, and cervical MRI then made the diagnosis. The authors advise cervical imaging before a potentially harmful treatment such as thrombolysis. CT perfusion, brain MRI and transcranial Doppler all study the brain and its vessels, not the spinal canal. A repeat CT head in 6 hours images the wrong place and runs past the treatment window.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "hu-sceh",
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following findings most suggests a stroke mimic in this patient?",
        "options": [
          "Blood pressure of 186/98 mmHg",
          "Her age of 66 years",
          "Left arm weaker than the left leg",
          "Pinprick loss on the right side",
          "Sudden onset while sitting",
        ],
        "correct": 3,
        "explanation": "Weakness of the left arm and leg with pinprick loss on the right is a split pattern that a hemispheric stroke does not produce, because a hemispheric lesion causes weakness and sensory loss on the same side of the body. It fits damage to one half of the cervical cord, the Brown-Sequard pattern, which the review lists among the signs that point to a spinal epidural hematoma rather than a stroke. Sudden onset occurs with both. An arm weaker than the leg is common with a middle cerebral artery stroke. Her age and BP raise the risk of stroke and do not separate the two.",
        "keyFeature": { "topic": "cva", "n": 1 },
        "source": "hu-sceh",
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "The scan can be done in 40 minutes, when she will still be within 4.5 hours of onset. A colleague suggests giving thrombolysis first to avoid delay.",
        "prompt": "Which of the following is the most appropriate response to this suggestion?",
        "options": [
          "Agree, once her BP is below 180/105 mmHg",
          "Give ASA 160 mg PO while waiting",
          "Give full-dose thrombolysis now",
          "Give half-dose thrombolysis now",
          "Withhold thrombolysis until the scan",
        ],
        "correct": 4,
        "explanation": "A spinal epidural hematoma is still possible, and thrombolysis can enlarge it. In the review, 10 of the 13 patients with this condition who received alteplase got worse. Full-dose thrombolysis now leans on the low bleeding risk seen when other stroke mimics are lysed, and that does not apply when the mimic is itself a bleed. Waiting 40 minutes keeps her within 4.5 hours of onset, so little is lost. Lowering her BP does not remove the risk of treating a hematoma. A half dose is not an accepted regimen, and ASA adds an antiplatelet effect while a bleed is still possible.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "hu-sceh",
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "The hospital stocks alteplase, not tenecteplase, for stroke.",
        "prompt": "Which of the following is the correct alteplase bolus dose for her if thrombolysis is given?",
        "options": [
          "alteplase 4.2 mg IV",
          "alteplase 6.3 mg IV",
          "alteplase 9 mg IV",
          "alteplase 17.5 mg IV",
          "alteplase 63 mg IV",
        ],
        "correct": 1,
        "explanation": "Alteplase for stroke is 0.9 mg/kg to a maximum of 90 mg, with 10% given as an IV bolus over 1 minute and the rest infused over 60 minutes. At 70 kg the total is 0.9 x 70 = 63 mg, so the bolus is 6.3 mg and the infusion 56.7 mg. A bolus of 4.2 mg is 10% of a 0.6 mg/kg total, which is not the Canadian regimen. A bolus of 9 mg is 10% of the 90 mg maximum, which applies only from 100 kg. A dose of 17.5 mg is the tenecteplase dose for 70 kg, and 63 mg is the whole alteplase dose, not the bolus.",
        "keyFeature": { "topic": "cva", "n": 3 },
        "source": "csbpr-acute",
      },
    ],
    "sources": [SRC_HU_SCEH, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-36",
    "topic": "cva",
    "title": "Collapse at 30 weeks",
    "stem": "A 34-year-old woman at 30 weeks gestation is brought to the emergency department by ambulance at 07:55. At 07:10 she collapsed in her kitchen with right-sided weakness and could not speak. Her pregnancy has been uncomplicated. She has no medical history and takes prenatal vitamins. Capillary glucose is 5.2 mmol/L. She has global aphasia, left gaze preference, right hemiplegia and right facial droop. NIHSS is 20. The fetal heart rate is 145/minute.",
    "vitals": {
      "temperature": "36.9°C oral",
      "pulse": "102/minute",
      "resp": "18/minute",
      "bp": "138/86 mmHg",
      "o2sat": "98% on room air",
      "weight": "78 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most appropriate imaging for this patient now?",
        "kind": "single",
        "options": [
          "Head imaging deferred until delivery",
          "MRI brain without contrast only",
          "Non-contrast CT with CT angiography",
          "Non-contrast CT with no vascular study",
          "Obstetric ultrasound before head imaging"
        ],
        "correct": 2,
        "explanation": "Canadian consensus says pregnancy must not delay stroke imaging, and CT with CT angiography is appropriate because fetal radiation from head imaging is minimal and iodinated contrast is acceptable. She is within the treatment window with a severe deficit, so a large vessel occlusion must be sought. MRI may take longer in most centres. A plain CT alone misses the occlusion, and obstetric assessment should run alongside stroke care rather than delay it.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-preg"
      },
      {
        "id": "q2",
        "update": "CT shows no hemorrhage and ASPECTS is 9. CT angiography shows a left M1 occlusion.",
        "prompt": "Which of the following is the most appropriate treatment for this patient?",
        "kind": "single",
        "options": [
          "ASA 160 mg PO only",
          "Caesarean delivery first",
          "Endovascular thrombectomy",
          "Heparin infusion by protocol",
          "Supportive care until delivery"
        ],
        "correct": 2,
        "explanation": "Pregnant women with a disabling stroke from a large vessel occlusion should be offered thrombectomy, as outside pregnancy. Delivering the baby first delays reperfusion and is not needed for the procedure. ASA and heparin do not recanalize an M1 occlusion. Supportive care alone would leave her with a likely severe permanent deficit.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-preg"
      },
      {
        "id": "q3",
        "prompt": "Which of the following statements about IV thrombolysis for this patient is most accurate?",
        "kind": "single",
        "options": [
          "It is contraindicated in pregnancy",
          "It is safe only after 34 weeks",
          "It may be considered with experts",
          "It must be given at half dose",
          "It requires delivery beforehand"
        ],
        "correct": 2,
        "explanation": "Canadian consensus states that pregnancy is not an absolute contraindication and that IV thrombolysis may be considered for disabling stroke in consultation with a physician with stroke expertise, with obstetric input as part of the team. Delivery is not required first, there is no gestational age cut-off at 34 weeks and no reduced dose for pregnancy. Evidence is limited, so the decision is shared with the patient or family.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-preg"
      },
      {
        "id": "q4",
        "prompt": "Which of the following should occur alongside her stroke treatment?",
        "kind": "single",
        "options": [
          "Deferral of contrast until delivery",
          "Delivery before any stroke imaging",
          "Obstetric team with fetal monitoring",
          "Tocolysis with nifedipine now",
          "Transfer to a birthing unit first"
        ],
        "correct": 2,
        "explanation": "Canadian consensus calls for a coordinated team in which the obstetric service joins the stroke team at once and the fetus is monitored, while stroke care proceeds without delay. Delivery, deferring contrast or transfer to a birthing unit first would all delay reperfusion. No preterm labour is described, and nifedipine would lower her BP without an indication.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-preg"
      }
    ],
    "sources": [SRC_CSBPR_PREG],
    ...meta,
  },
  {
    "id": "cva-37",
    "topic": "cva",
    "title": "Found slumped at midday",
    "stem": "A 62-year-old man is brought to the emergency department by ambulance at 14:50. His wife found him slumped in a chair at 13:30, unable to move his left side. He was well when she left for work at 09:00. He has type 2 diabetes and hypertension. Medications: metformin and ramipril. He works full time as an electrician. Capillary glucose is 10.2 mmol/L. He has right gaze deviation, left hemiplegia and left neglect. NIHSS is 19. Non-contrast CT shows no hemorrhage and ASPECTS is 4.",
    "vitals": {
      "temperature": "37.1°C oral",
      "pulse": "90/minute",
      "resp": "18/minute",
      "bp": "178/100 mmHg",
      "o2sat": "95% on room air",
      "weight": "95 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following best describes his eligibility for IV thrombolysis?",
        "kind": "single",
        "options": [
          "Eligible at half the usual dose",
          "Eligible if BP is controlled",
          "Eligible with an MRI mismatch",
          "Eligible with CT perfusion",
          "Not eligible for thrombolysis"
        ],
        "correct": 4,
        "explanation": "He was last known well at 09:00, almost 6 hours before arrival, and his CT shows extensive early infarction with ASPECTS 4. ASPECTS below 6 is a relative CT exclusion to thrombolysis, and beyond 4.5 hours thrombolysis is considered only for selected patients with favourable advanced imaging. Controlling BP, CT perfusion, an MRI mismatch or a lower dose do not overcome a large established core.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "update": "CT angiography shows an occlusion of the right intracranial internal carotid artery.",
        "prompt": "Which of the following is the most appropriate treatment for this patient?",
        "kind": "single",
        "options": [
          "Endovascular thrombectomy",
          "Hemicraniectomy today",
          "Heparin infusion by protocol",
          "Palliative care discussion alone",
          "Tenecteplase and observation"
        ],
        "correct": 0,
        "explanation": "The 2025 Canadian update notes that patients with a moderate to large core, in the range of ASPECTS 3 to 5, may do better with thrombectomy than with medical care, taking age, function and comorbidity into account. He is 62, works full time and has an intracranial carotid occlusion within 24 hours. Tenecteplase is excluded by his core and timing, heparin does not recanalize, and hemicraniectomy is not indicated before swelling develops. Moving straight to palliation would deny an effective treatment.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-evt"
      },
      {
        "id": "q3",
        "update": "Thrombectomy achieves partial reperfusion. He is admitted to the neurocritical care unit.",
        "prompt": "Which of the following complications is the main reason for early discussion of neurosurgery?",
        "kind": "single",
        "options": [
          "Aspiration pneumonia",
          "Contrast nephropathy",
          "Groin site hematoma",
          "Malignant cerebral edema",
          "Post-stroke seizures"
        ],
        "correct": 3,
        "explanation": "A large hemispheric infarct can swell over the first days and cause herniation. Canadian guidance advises early discussion of decompressive hemicraniectomy for patients at risk of malignant edema, with surgery within 48 hours of onset and ideally before deterioration. Contrast nephropathy, a groin hematoma, aspiration pneumonia and seizures are managed medically and do not need neurosurgery.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE, SRC_CSBPR_EVT],
    ...meta,
  },
  {
    "id": "cva-38",
    "topic": "cva",
    "title": "Spinning with a muffled ear",
    "stem": "A 66-year-old woman presents to the emergency department at 12:00 with constant vertigo, vomiting and unsteadiness that began suddenly at 08:15. She also noticed that her right ear sounds muffled and she hears ringing. She has hypertension, type 2 diabetes and dyslipidemia. Capillary glucose is 11.3 mmol/L. She has spontaneous left-beating nystagmus in primary gaze. She can walk only with support. Limb strength is normal. The Weber test lateralizes to the left ear, and the right ear canal and drum are normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "86/minute",
      "resp": "16/minute",
      "bp": "166/92 mmHg",
      "o2sat": "97% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following bedside findings in acute vestibular syndrome suggest a central cause such as stroke?",
        "kind": "menu",
        "options": [
          "Abnormal head impulse test",
          "Direction-changing nystagmus",
          "Nausea and vomiting",
          "New unilateral hearing loss",
          "Skew deviation on cover test",
          "Symptoms worse with movement",
          "Tinnitus with ear fullness",
          "Unidirectional nystagmus"
        ],
        "select": 3,
        "correct": [
          1,
          3,
          4
        ],
        "explanation": "In acute vestibular syndrome, direction-changing nystagmus and skew deviation are central signs in the HINTS examination, and adding new hearing loss, called HINTS plus, raised sensitivity for a central cause to 99%. An abnormal head impulse test and unidirectional nystagmus are the expected peripheral findings. Nausea, vomiting, motion intolerance and ear fullness occur in both peripheral and central causes.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "hints-plus"
      },
      {
        "id": "q2",
        "update": "The head impulse test shows a corrective saccade when her head is turned to the right. There is no skew deviation.",
        "prompt": "Which of the following is the most appropriate interpretation of her examination?",
        "kind": "single",
        "options": [
          "Labyrinthitis is confirmed",
          "Positional vertigo is likely",
          "Posterior stroke is excluded",
          "Stroke remains possible",
          "Vestibular neuritis is confirmed"
        ],
        "correct": 3,
        "explanation": "New unilateral hearing loss is the extra element of HINTS plus, because infarction in the anterior inferior cerebellar artery territory can damage the inner ear and brainstem together and can produce a peripheral-looking head impulse test. Her right-sided sensorineural loss, shown by a Weber test that lateralizes to the left, keeps stroke on the list. The abnormal head impulse test cannot confirm neuritis or labyrinthitis here. Positional vertigo is brief and triggered, while hers is constant.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "hints-plus"
      },
      {
        "id": "q3",
        "prompt": "Which of the following is the most appropriate imaging strategy for this patient?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT angiography and MRI brain",
          "CT head alone then discharge",
          "Outpatient audiogram",
          "Temporal bone CT only"
        ],
        "correct": 1,
        "explanation": "Suspected posterior circulation ischemia needs vascular imaging and MRI, because CT is insensitive for brainstem and cerebellar infarcts. A normal CT alone cannot exclude stroke. Carotid ultrasound does not show the vertebral or basilar arteries. Temporal bone CT and an audiogram study the ear but not the brain.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "update": "CT angiography shows no occlusion. MRI with diffusion at 14 hours after onset is normal.",
        "prompt": "Which of the following is the most appropriate interpretation of the normal MRI?",
        "kind": "single",
        "options": [
          "Early MRI can miss small infarcts",
          "Hearing loss is from diabetes",
          "MRI excludes stroke at this point",
          "Symptoms are functional in origin",
          "Vestibular neuritis is confirmed"
        ],
        "correct": 0,
        "explanation": "In the HINTS study, the first MRI was falsely negative in 15 of 105 infarctions, 14%, and all but one of those scans were done in the first 48 hours. A normal MRI at 14 hours does not exclude a small brainstem or cerebellar infarct when the bedside examination suggests one. Diabetes does not cause sudden unilateral hearing loss with vertigo, and nothing in her examination suggests a functional disorder.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "hints-plus"
      }
    ],
    "sources": [SRC_HINTS_PLUS, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-39",
    "topic": "cva",
    "title": "Slurred speech since last evening",
    "stem": "A 78-year-old man is brought to the emergency department by his daughter at 17:00. At 20:00 last evening he noticed slurred speech and a clumsy right hand and hoped it would pass. He has hypertension and gout. Medications: hydrochlorothiazide and allopurinol. Capillary glucose is 7.8 mmol/L. He has mild right facial weakness, dysarthria and a clumsy right hand with mild drift. NIHSS is 4. He coughed after sips of water at triage. CT shows no hemorrhage. CT angiography shows no occlusion or stenosis.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "76/minute",
      "resp": "16/minute",
      "bp": "204/108 mmHg",
      "o2sat": "96% on room air",
      "weight": "77 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most appropriate blood pressure management for this patient now?",
        "kind": "single",
        "options": [
          "Labetalol to below 160/90 mmHg",
          "Lower by 50% in the next 2 hours",
          "Nifedipine 10 mg sublingual now",
          "Nitroglycerin patch to below 185/110 mmHg",
          "No lowering unless above 220/120 mmHg"
        ],
        "correct": 4,
        "explanation": "He is not a thrombolysis candidate because onset was 21 hours ago, and Canadian guidance advises against routine treatment of BP up to 220 mmHg systolic in that setting. Treatment is considered above 220/120 mmHg, and even then the aim is about a 15% reduction over 24 hours. Lowering to 160/90 mmHg or by half, or using sublingual nifedipine, risks extending ischemia. The 185/110 mmHg limit applies to thrombolysis.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "update": "A formal swallow screen by a trained nurse confirms unsafe swallowing.",
        "prompt": "Which of the following is the most appropriate antiplatelet treatment to give now?",
        "kind": "single",
        "options": [
          "ASA and clopidogrel PO",
          "ASA 160 mg PO",
          "ASA 325 mg PR",
          "Clopidogrel 300 mg PO",
          "No antiplatelet for 24 hours"
        ],
        "correct": 2,
        "explanation": "He should receive an antiplatelet once hemorrhage is excluded, and because swallowing is unsafe, ASA 325 mg by rectal suppository or an agent by enteral tube is advised. Any oral tablet risks aspiration. His NIHSS of 4 is above the range of 0 to 3 in which dual antiplatelet therapy is recommended. The 24-hour delay applies only after thrombolysis, which he did not receive.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "prompt": "Which of the following findings would need correction before thrombolysis had he arrived within 3 hours of onset?",
        "kind": "single",
        "options": [
          "Age older than 75 years",
          "BP of 204/108 mmHg",
          "Glucose of 7.8 mmol/L",
          "Mild dysarthria",
          "Thiazide diuretic use"
        ],
        "correct": 1,
        "explanation": "BP must be lowered and kept below 185/110 mmHg before and during thrombolysis and for the next 24 hours, so his BP of 204/108 mmHg would need treatment first. A glucose of 7.8 mmol/L is within the acceptable range of 2.7 to 22.2 mmol/L. Dysarthria is part of the deficit being treated. Age has no upper limit, and a thiazide does not affect eligibility.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-40",
    "topic": "cva",
    "title": "Headache and unable to stand",
    "stem": "A 74-year-old man is brought to the emergency department by ambulance at 21:30 with a sudden occipital headache, vomiting and inability to stand that began at 20:45. He has atrial fibrillation and takes dabigatran 150 mg twice daily, last taken at 19:00. Creatinine last month was 98 umol/L. Capillary glucose is 8.0 mmol/L. GCS is 14 (E3 V5 M6). He has right arm and leg ataxia and gaze-evoked nystagmus. Limb strength is normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "92/minute irregular",
      "resp": "18/minute",
      "bp": "188/102 mmHg",
      "o2sat": "95% on room air",
      "weight": "80 kg"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most appropriate initial imaging for this patient?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound",
          "CT perfusion before plain CT",
          "CT venography of the head",
          "MRI brain with diffusion",
          "Non-contrast CT head now"
        ],
        "correct": 4,
        "explanation": "Sudden headache, vomiting and ataxia in a patient on an anticoagulant suggest a cerebellar hemorrhage, and clinical features cannot separate hemorrhage from infarction. A non-contrast CT is fast and detects blood, which decides reversal and surgery. MRI takes longer in an unstable patient. Perfusion imaging, carotid ultrasound and venography do not answer the first question.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-ich"
      },
      {
        "id": "q2",
        "update": "CT shows a 3.5 cm right cerebellar hemorrhage compressing the fourth ventricle.",
        "prompt": "Which of the following is the most appropriate reversal for his anticoagulant?",
        "kind": "single",
        "options": [
          "Idarucizumab 5 g IV",
          "PCC 4 000 units IV",
          "Plasma 15 mL/kg IV",
          "Protamine 50 mg IV",
          "Vitamin K 10 mg IV"
        ],
        "correct": 0,
        "explanation": "Dabigatran should be stopped and reversed with idarucizumab, 5 g given as two 2.5 g IV boluses. Prothrombin complex concentrate is a fallback only when idarucizumab is unavailable, and its single dose is capped at 3 000 units, so 4 000 units exceeds the maximum. Protamine reverses heparin, vitamin K reverses warfarin, and plasma does not reliably reverse dabigatran.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-ich"
      },
      {
        "id": "q3",
        "prompt": "Which of the following would be the most appropriate reversal if idarucizumab were not available?",
        "kind": "single",
        "options": [
          "Activated PCC 2 000 units IV",
          "Activated PCC 4 000 units IV",
          "Plasma 15 mL/kg IV",
          "Protamine sulfate 50 mg IV",
          "Vitamin K 10 mg IV"
        ],
        "correct": 0,
        "explanation": "When idarucizumab is unavailable, Canadian guidance allows activated prothrombin complex concentrate (FEIBA) at 50 units/kg to a maximum of 2 000 units. At 80 kg, 80 x 50 = 4 000 units, so the cap applies and 4 000 units would exceed it. Four-factor PCC at 25 to 50 units/kg, to a maximum of 3 000 units, is the other accepted choice. Protamine reverses heparin, plasma does not reliably reverse dabigatran, and vitamin K reverses warfarin.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "tc-bleed-orders"
      },
      {
        "id": "q4",
        "prompt": "Which of the following consultations is most urgent for this patient?",
        "kind": "single",
        "options": [
          "Cardiology for rate control",
          "Hematology for platelet transfusion",
          "Interventional radiology for coiling",
          "Neurology for thrombolysis review",
          "Neurosurgery for possible evacuation"
        ],
        "correct": 4,
        "explanation": "A cerebellar hemorrhage of 3 cm or more, altered consciousness or brainstem compression are reasons for neurosurgical consultation, and his 3.5 cm hematoma is compressing the fourth ventricle. Thrombolysis is contraindicated in hemorrhage. His rate is controlled. Coiling treats aneurysms, which this is not. Platelet transfusion is not recommended without significant thrombocytopenia and may be harmful.",
        "keyFeature": {
          "topic": "cva",
          "n": 3
        },
        "source": "csbpr-ich"
      }
    ],
    "sources": [SRC_CSBPR_ICH, SRC_TC_BLEED_ORDERS],
    ...meta,
  },
  {
    "id": "cva-41",
    "topic": "cva",
    "title": "Weakness that settled before arrival",
    "stem": "A 67-year-old man presents to the emergency department at 11:00 after an episode of weakness of his left arm and slurred speech that began at 08:30 and resolved fully after 40 minutes. He has never had a similar episode. Five weeks ago he had 2 days of heavy chest pressure and breathlessness that he did not report to anyone. He has hypertension and smokes. He takes amlodipine. He has no palpitations or headache. His neurological examination is now normal. Capillary glucose is 5.8 mmol/L and platelets are 262 x 10^9/L. Cardiac monitoring shows sinus rhythm. Non-contrast CT head is normal.",
    "vitals": { "temperature": "36.6°C oral", "pulse": "78/minute regular", "resp": "16/minute", "bp": "152/88 mmHg", "o2sat": "97% on room air" },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is this patient's Canadian TIA Score?",
        "options": [
          "4 points",
          "5 points",
          "6 points",
          "7 points",
          "9 points",
        ],
        "correct": 2,
        "explanation": "A first TIA scores 2, since he has never had a similar episode. Symptoms lasting 10 minutes or more score 2, and his lasted 40 minutes. Unilateral weakness scores 1 and slurred speech scores 1. He scores nothing for carotid stenosis, antiplatelet use, gait disturbance, vertigo, a diastolic BP of 110 mmHg or more, atrial fibrillation, infarction on CT, platelets of 400 x 10^9/L or more or glucose of 15 mmol/L or more. The total is 2 + 2 + 1 + 1 = 6, in the medium risk band of 4 to 8. A score of 4 misses the first TIA points, and 5 is his ABCD2 score, not his Canadian TIA Score.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "cdn-tia",
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "His ECG shows sinus rhythm at 78/minute, left axis deviation, a PR interval of 210 ms, a QRS duration of 92 ms and Q waves in V1 to V4. Two high-sensitivity troponin values 2 hours apart are low and unchanged.",
        "prompt": "Which of the following ECG findings most raises concern for a cardiac source of this event?",
        "options": [
          "Anterior Q waves in V1 to V4",
          "Left axis deviation",
          "PR interval of 210 ms",
          "QRS duration of 92 ms",
          "Sinus rhythm at 78/minute",
        ],
        "correct": 0,
        "explanation": "Q waves across V1 to V4 point to an anterior myocardial infarction, most likely during the chest pressure 5 weeks ago, and a large anterior infarct can leave a poorly moving apex where thrombus forms. Canadian guidance asks for an ECG in every TIA to look for atrial fibrillation, previous infarction and structural heart disease. Low, unchanged troponin values argue against a new infarct. Left axis deviation, a PR interval of 210 ms and a normal QRS duration are conduction findings that do not create an embolic source. Sinus rhythm at a normal rate does not rule out paroxysmal atrial fibrillation, but it is not a source.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "csbpr-acute",
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following investigations is most likely to identify the source of this patient's event?",
        "options": [
          "Carotid Doppler ultrasound",
          "Holter monitor for 24 hours",
          "MRI of the brain",
          "Transcranial Doppler study",
          "Transthoracic echocardiogram",
        ],
        "correct": 4,
        "explanation": "Canadian guidance recommends echocardiography when a cardioembolic cause is suspected, and a recent large anterior infarct makes a thrombus in the left ventricle the leading concern. Carotid imaging is still part of every TIA workup, but it looks for large artery disease rather than this suspected source. Holter monitoring looks for paroxysmal atrial fibrillation. Brain MRI shows whether infarction occurred without identifying its cause. Transcranial Doppler assesses intracranial vessels and shunts.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "csbpr-acute",
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following antithrombotic plans would be most appropriate if a left ventricular thrombus is found?",
        "options": [
          "Anticoagulant for over 3 months",
          "Anticoagulant for 2 weeks only",
          "ASA and clopidogrel for 21 days",
          "ASA 81 mg daily alone",
          "Clopidogrel 75 mg daily alone",
        ],
        "correct": 0,
        "explanation": "Canadian secondary prevention guidance recommends anticoagulant therapy for longer than 3 months after a TIA or stroke in a patient in sinus rhythm with a left ventricular thrombus shown on imaging. Two weeks falls well short of that duration. Antiplatelet therapy alone, single or dual, is not the recommended treatment for a cardiac thrombus. The 21-day course of ASA with clopidogrel is for high-risk TIA without a cardioembolic source.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "csbpr-prev",
      },
    ],
    "sources": [SRC_CDN_TIA, SRC_CSBPR_ACUTE, SRC_CSBPR_PREV],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-42",
    "topic": "cva",
    "title": "A long drive and a stalled car",
    "stem": "A 44-year-old man presents to the emergency department at 15:10 after 15 minutes of trouble finding words that began at 13:40 and has resolved. It started as he strained to push his stalled car out of a snowbank. He had no weakness. Yesterday he finished a 14-hour drive from Thunder Bay with few stops. He has no medical history, does not smoke and takes no medications. His neurologic examination is now normal. His right calf is 3 cm larger than the left and tender. ECG shows sinus rhythm at 72/minute. CT head and CT angiography of the head and neck are normal.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "72/minute",
      "resp": "16/minute",
      "bp": "128/78 mmHg",
      "o2sat": "98% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is this patient's ABCD2 score at the time of assessment?",
        "kind": "single",
        "options": [
          "1 point",
          "2 points",
          "3 points",
          "4 points",
          "5 points"
        ],
        "correct": 1,
        "explanation": "He scores 0 for age under 60, 0 for a BP below 140/90 mmHg, 1 for speech disturbance without weakness, 1 for a duration of 10 to 59 minutes and 0 for no diabetes, a total of 2. Unilateral weakness would have scored 2 for clinical features, and a duration of 60 minutes or more would have scored 2 for duration. Scores of 3 to 5 count features he does not have, and 1 point misses either his speech symptoms or their duration. A low score does not replace the search for the mechanism of his event.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "abcd2"
      },
      {
        "id": "q2",
        "prompt": "Which of the following features of his presentation raise concern for a paradoxical embolism?",
        "kind": "menu",
        "options": [
          "Afternoon onset",
          "Calf swelling and tenderness",
          "Full resolution before arrival",
          "Onset while pushing a stalled car",
          "Recent 14-hour drive",
          "Speech symptoms only",
          "Symptoms lasting 15 minutes"
        ],
        "select": 3,
        "correct": [
          1,
          3,
          4
        ],
        "explanation": "Canadian guidance lists clinical clues to a stroke or TIA through a patent foramen ovale. They include onset right after a Valsalva-type strain, deep vein thrombosis or pulmonary embolism, and recent prolonged travel or immobility. Straining to push a car, a swollen tender calf and a 14-hour drive with few stops are those clues. The time of day, the 15-minute duration, full resolution and speech-only symptoms describe the event but do not point to a mechanism.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-prev"
      },
      {
        "id": "q3",
        "prompt": "Which of the following cardiac investigations is most appropriate to arrange for this patient?",
        "kind": "single",
        "options": [
          "Coronary CT angiography",
          "Echocardiogram with saline bubble study",
          "Exercise ECG stress test",
          "Serial troponin at 0 and 3 hours",
          "Transthoracic echo without contrast"
        ],
        "correct": 1,
        "explanation": "Canadian guidance recommends echocardiography with a saline bubble study for patients 60 or younger with an embolic TIA or stroke of undetermined source, when finding a patent foramen ovale could change management. He is 44, his CT angiography shows no arterial cause and his ECG shows sinus rhythm. Contrast transesophageal echo or transcranial Doppler detect shunts better than transthoracic echo, and a transthoracic study without agitated saline can miss the shunt. Coronary CT angiography, stress testing and serial troponin look for coronary disease, which he has no symptoms of.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_ABCD2, SRC_CSBPR_PREV, SRC_CSBPR_ACUTE],
    ...meta,
    "version": 2,
  },
  {
    "id": "cva-43",
    "topic": "cva",
    "title": "Double vision that passed",
    "stem": "You are working in a rural hospital emergency department with CT but no CT angiography. The regional stroke centre is 90 minutes away by road. A 67-year-old man presents at 09:00 after 30 minutes of double vision, slurred speech and unsteadiness that began at 06:00 and resolved fully. He had no weakness. He has hypertension and smokes. He does not have diabetes. Capillary glucose is 5.9 mmol/L. Neurologic examination, including gait, is now normal. ECG shows sinus rhythm. CT head is normal.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "78/minute",
      "resp": "16/minute",
      "bp": "162/94 mmHg",
      "o2sat": "97% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following transient symptoms most suggest vertebrobasilar ischemia?",
        "kind": "menu",
        "options": [
          "Amaurosis fugax",
          "Diplopia",
          "Dysarthria",
          "Gait ataxia",
          "Hand tingling",
          "Palpitations",
          "Presyncope",
          "Tinnitus alone",
          "Word-finding loss"
        ],
        "select": 3,
        "correct": [
          1,
          2,
          3
        ],
        "explanation": "Canadian guidance lists diplopia, dysarthria, dysphagia, non-positional vertigo and ataxia as vertebrobasilar symptoms, which can be mistaken for mimics. Amaurosis fugax and word-finding loss point to the carotid territory. Palpitations and presyncope suggest a cardiac or orthostatic cause. Tinnitus alone and hand tingling alone are not specific for brainstem ischemia.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q2",
        "prompt": "Which of the following is the most appropriate plan for his vascular imaging?",
        "kind": "single",
        "options": [
          "Carotid Doppler ultrasound tomorrow",
          "CT angiography today at a referral centre",
          "Echocardiogram within 2 weeks",
          "MRI brain as an outpatient",
          "No vascular imaging as CT is normal"
        ],
        "correct": 1,
        "explanation": "A TIA within 48 hours with speech symptoms needs neurovascular imaging from arch to vertex before discharge, and posterior circulation symptoms make imaging of the vertebral and basilar arteries essential. Carotid ultrasound does not show the posterior circulation well. An outpatient MRI or an echocardiogram does not image the vessels in time. A normal CT does not exclude a stenosis.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q3",
        "update": "CT angiography shows 70% stenosis at the origin of the left vertebral artery. Cardiac monitoring shows sinus rhythm.",
        "prompt": "Which of the following is the most appropriate antithrombotic plan for this patient?",
        "kind": "single",
        "options": [
          "Apixaban 5 mg PO twice daily",
          "ASA and clopidogrel for 21 days",
          "ASA 81 mg daily alone",
          "Urgent vertebral stenting only",
          "Warfarin with INR 2 to 3"
        ],
        "correct": 1,
        "explanation": "His ABCD2 score is 4, with 1 each for age, BP of 162/94 mmHg, speech disturbance without weakness and a duration of 30 minutes, so this is a high-risk TIA of non-cardioembolic origin. Canadian guidance recommends ASA plus clopidogrel for 21 days, then a single antiplatelet. ASA alone is for patients who do not meet dual therapy criteria. Anticoagulation has no indication without a cardiac source, and stenting is not a replacement for antiplatelet therapy.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-44",
    "topic": "cva",
    "title": "Arm shaking on standing",
    "stem": "A 68-year-old man presents to the emergency department at 11:20 after three brief episodes of jerking of his left arm and hand over the past week. Each lasted 1 to 2 minutes, came on soon after he stood up quickly and left the arm weak for about 10 minutes. He did not feel faint, lose awareness or bite his tongue. Two weeks ago he started amlodipine and hydrochlorothiazide for hypertension. He smokes. Capillary glucose is 6.1 mmol/L. Neurologic examination is now normal. ECG shows sinus rhythm.",
    "vitals": {
      "temperature": "36.5°C oral",
      "pulse": "70/minute",
      "resp": "14/minute",
      "bp": "112/68 mmHg",
      "o2sat": "97% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most likely cause of this patient's episodes?",
        "kind": "single",
        "options": [
          "Focal motor seizures",
          "Functional movement disorder",
          "Low-flow carotid TIAs",
          "Orthostatic presyncope",
          "Todd paralysis after seizures"
        ],
        "correct": 2,
        "explanation": "Brief jerking of one arm, brought on by standing and followed by weakness, is limb-shaking TIA, a sign of critical carotid stenosis or occlusion with poor cerebral perfusion. New antihypertensives that lower his BP make this more likely. Focal seizures are not triggered by posture. He kept awareness and did not feel faint, which argues against presyncope. Todd paralysis follows a seizure, which this is not, and nothing suggests a functional disorder.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "limb-shaking"
      },
      {
        "id": "q2",
        "prompt": "Which of the following features best distinguishes his episodes from focal motor seizures?",
        "kind": "single",
        "options": [
          "Duration of 1 to 2 minutes",
          "Jerking of one arm only",
          "Onset soon after standing",
          "Preserved awareness",
          "Weakness after each episode"
        ],
        "correct": 2,
        "explanation": "Limb-shaking TIAs are typically brought on by standing or exercise, reflecting a fall in cerebral perfusion beyond a severe carotid lesion, which seizures do not share. Jerking of one limb, a duration of a minute or two, weakness afterward and preserved awareness can all occur with focal seizures and Todd paralysis. Asking what triggered each episode is the key to the diagnosis.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "limb-shaking"
      },
      {
        "id": "q3",
        "prompt": "Which of the following investigations is most urgent for this patient?",
        "kind": "single",
        "options": [
          "CT angiography of head and neck",
          "EEG within 24 hours",
          "Holter monitor for 48 hours",
          "MRI of the cervical spine",
          "Tilt table testing"
        ],
        "correct": 0,
        "explanation": "Limb-shaking TIAs are associated with high-grade stenosis or occlusion of the internal carotid artery, here the right, which needs vascular imaging now. An EEG treats the episodes as seizures. Cervical spine MRI, tilt table testing and a Holter monitor look for other diagnoses that do not fit the posture-triggered focal pattern.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "limb-shaking"
      },
      {
        "id": "q4",
        "update": "CT angiography shows occlusion of the right internal carotid artery.",
        "prompt": "Which of the following is the most appropriate change to his management now?",
        "kind": "single",
        "options": [
          "Add a third antihypertensive agent",
          "Carotid endarterectomy this week",
          "Hold the new antihypertensives",
          "Start levetiracetam 500 mg PO",
          "Start warfarin with INR 2 to 3"
        ],
        "correct": 2,
        "explanation": "His episodes are hemodynamic, and Canadian guidance warns that rapid or excessive BP lowering can worsen ischemia when an artery is occluded. Holding the new drugs and avoiding hypotension addresses the trigger. Adding another agent would worsen perfusion. Endarterectomy is for 50 to 99% stenosis, not complete occlusion. Levetiracetam treats seizures, and warfarin has no indication without a cardiac source.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_LIMB_SHAKING, SRC_CSBPR_ACUTE],
    ...meta,
  },
  {
    "id": "cva-45",
    "topic": "cva",
    "title": "A spell of arm weakness",
    "stem": "A 73-year-old man presents to the emergency department at 11:20 after 35 minutes of weakness of his left arm and slurred speech that began at 08:40 and resolved fully. He has atrial fibrillation. A walk-in clinic lowered his apixaban from 5 mg to 2.5 mg twice daily a year ago after a nosebleed that stopped with pressure. He uses a blister pack and has missed no doses. Two months ago he started St. John's wort for low mood. He also takes amlodipine 5 mg and atorvastatin 40 mg daily. He has no coronary disease. His creatinine is 104 umol/L. His examination is now normal. His ECG shows atrial fibrillation at 74/minute. Non-contrast CT of the head shows no infarct or hemorrhage.",
    "vitals": { "temperature": "36.7°C oral", "pulse": "74/minute irregular", "resp": "16/minute", "bp": "148/86 mmHg", "o2sat": "97% on room air", "weight": "82 kg" },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate to complete before he leaves the emergency department?",
        "options": [
          "CT angiography of head and neck",
          "Holter monitor for 14 days",
          "MRI of the brain within 30 days",
          "Transesophageal echocardiography",
          "No further testing",
        ],
        "correct": 0,
        "explanation": "Transient motor and speech symptoms within the last 48 hours put him at high risk of early recurrent stroke, and Canadian guidance calls for urgent brain imaging with concurrent CT angiography from the aortic arch to the vertex. His atrial fibrillation does not end the search, because a second cause such as a carotid stenosis would change his management. A Holter monitor looks for atrial fibrillation he is already known to have. Echocardiography is advised for an embolic TIA of undetermined source, and he already has a cardiac source. MRI within 30 days does not replace vessel imaging now, and no further testing could miss a treatable second cause.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "csbpr-acute",
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate plan for his anticoagulant therapy?",
        "options": [
          "apixaban 10 mg twice daily for 7 days",
          "Continue apixaban 2.5 mg twice daily",
          "Hold apixaban for 3 days",
          "Increase apixaban to 5 mg twice daily",
          "Measure an apixaban level first",
        ],
        "correct": 3,
        "explanation": "Apixaban 2.5 mg twice daily is advised in atrial fibrillation only when at least two of three features are present: age 80 or older, weight 60 kg or less, or creatinine 133 umol/L or more. He is 73, weighs 82 kg and has a creatinine of 104 umol/L, so he meets none and needs 5 mg twice daily. Continuing 2.5 mg leaves him underdosed after a TIA on that dose. Holding apixaban leaves him unprotected at the time of highest risk. Apixaban 10 mg twice daily for 7 days is the starting regimen for venous thrombosis, not for atrial fibrillation. Apixaban levels are not validated across centres, and no therapeutic range has been set against outcomes.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "tc-apixaban",
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate advice about his St. John's wort?",
        "options": [
          "Continue it unchanged",
          "Halve its daily dose",
          "Stop the St. John's wort",
          "Take it at bedtime only",
          "Take it 12 hours after apixaban",
        ],
        "correct": 2,
        "explanation": "St. John's wort is a strong inducer that can reduce apixaban levels, like rifampin, carbamazepine and phenytoin. He started it 2 months ago, so it may have lowered his anticoagulant effect when the TIA occurred, and it should be stopped. Induction speeds the clearance of apixaban around the clock, so taking the product at bedtime or 12 hours apart does not avoid the interaction. Halving the dose still leaves an inducer in place, and continuing it unchanged keeps the interaction. His low mood still needs attention, for example with his family physician.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "tc-apixaban",
      },
      {
        "id": "q4",
        "kind": "menu",
        "prompt": "Which of the following antiplatelet agents should be added to his anticoagulant now?",
        "options": [
          "ASA and clopidogrel for 21 days",
          "ASA 81 mg PO daily",
          "ASA 325 mg PO daily",
          "clopidogrel 75 mg PO daily",
          "ticagrelor 90 mg PO twice daily",
          "None",
        ],
        "select": 1,
        "correct": [5],
        "explanation": "Canadian guidance does not recommend adding an antiplatelet drug to chronic anticoagulation for atrial fibrillation unless there is a specific medical indication, because bleeding rises without clear evidence of benefit. He has no coronary disease or other indication for one. Dual antiplatelet therapy with ASA and clopidogrel is used after a TIA without atrial fibrillation, and ticagrelor or clopidogrel alone adds the same bleeding risk to his anticoagulant. His TIA calls for making his anticoagulation work fully, not for adding a second class of drug.",
        "keyFeature": { "topic": "cva", "n": 4 },
        "source": "csbpr-prev",
      },
    ],
    "sources": [
      SRC_CSBPR_ACUTE,
      SRC_CSBPR_PREV,
      { "id": "tc-apixaban", "citation": "Thrombosis Canada. Clinical guide: apixaban (Eliquis). Version dated 2 June 2025.", "url": "https://thrombosiscanada.ca/clinical_guides/pdfs/APIXABAN_77.pdf" },
    ],
    ...meta,
    "version": 3,
  },
  {
    "id": "cva-46",
    "topic": "cva",
    "title": "Asking the same questions",
    "stem": "A 61-year-old woman is brought to the emergency department by her husband at 14:30. After a swim in a cold lake at 12:00 she began asking the same questions every few minutes, such as what day it is and why they are there. She knows her name and recognizes her husband. She has no headache, weakness or speech difficulty and did not lose consciousness or shake. She has migraine and hypertension. Capillary glucose is 5.7 mmol/L. She is alert and attentive but cannot recall three words after 5 minutes. Language, cranial nerves, strength, coordination and gait are normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "80/minute",
      "resp": "16/minute",
      "bp": "146/84 mmHg",
      "o2sat": "98% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is the most likely diagnosis in this patient?",
        "kind": "single",
        "options": [
          "Anterior circulation TIA",
          "Dissociative amnesia",
          "Focal impaired awareness seizure",
          "Hypoglycemic encephalopathy",
          "Transient global amnesia"
        ],
        "correct": 4,
        "explanation": "Sudden inability to form new memories with repetitive questioning, preserved identity and an otherwise normal examination is transient global amnesia. A seizure would impair awareness, and she is alert and attentive. A carotid territory TIA would cause focal deficits such as weakness or aphasia. Dissociative amnesia is loss of recall for personal, often stressful, past events, sometimes with loss of identity, rather than an inability to form new memories. A glucose of 5.7 mmol/L excludes hypoglycemia.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "tga"
      },
      {
        "id": "q2",
        "prompt": "Which of the following features are required for this diagnosis?",
        "kind": "menu",
        "options": [
          "Abnormal diffusion MRI",
          "Absent focal neurological signs",
          "Age over 65 years",
          "An identifiable trigger",
          "Preserved personal identity",
          "Prior migraine history",
          "Resolution within 24 hours",
          "Witnessed seizure activity"
        ],
        "select": 3,
        "correct": [
          1,
          4,
          6
        ],
        "explanation": "The diagnosis requires an anterograde amnesia with no loss of personal identity, no other neurological deficit and resolution within 24 hours. Small diffusion lesions in the hippocampus are sometimes seen but are not required. Age, a trigger such as cold water and migraine are common associations but not criteria. Witnessed seizure activity would point to epilepsy instead.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "tga"
      },
      {
        "id": "q3",
        "prompt": "Which of the following is the most appropriate management for this patient?",
        "kind": "single",
        "options": [
          "ASA and clopidogrel for 21 days",
          "CT angiography and stroke admission",
          "Levetiracetam 500 mg PO twice daily",
          "Lumbar puncture for encephalitis",
          "Observe until her memory recovers"
        ],
        "correct": 4,
        "explanation": "Transient global amnesia is a clinical diagnosis, and recognizing it avoids unnecessary tests and treatment. She should be observed with family until her memory returns, usually within hours. It is not a TIA, so dual antiplatelets and a stroke admission are not needed. Antiseizure drugs are not indicated for a single typical episode. She is afebrile with no headache, so nothing suggests encephalitis or justifies a lumbar puncture.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "tga"
      },
      {
        "id": "q4",
        "prompt": "Which of the following features in a future episode would most suggest an alternative diagnosis?",
        "kind": "single",
        "options": [
          "Brief episodes that recur",
          "Headache during the episode",
          "Normal neurological examination",
          "Onset after cold water",
          "Repetitive questioning"
        ],
        "correct": 0,
        "explanation": "Transient global amnesia rarely recurs and usually lasts hours. Brief amnestic episodes that recur suggest transient epileptic amnesia, and EEG is advised in that situation. Cold water or exertion as a trigger, repetitive questioning and a normal examination are typical of transient global amnesia. Mild headache can occur during an episode.",
        "keyFeature": {
          "topic": "cva",
          "n": 1
        },
        "source": "tga"
      }
    ],
    "sources": [SRC_TGA],
    ...meta,
  },
  {
    "id": "cva-47",
    "topic": "cva",
    "title": "Spinning and a numb hand",
    "stem": "You are working in a rural hospital emergency department with CT and CT angiography. A 52-year-old woman presents at 16:00 after two episodes today of spinning vertigo with numbness of her left hand, each lasting about 3 minutes while she sat at her desk. She had one similar episode last year. She had no weakness, speech or visual change. She has hypothyroidism treated with levothyroxine and takes no antiplatelet. Capillary glucose is 5.4 mmol/L. Neurologic examination, including gait and eye movements, is normal. ECG shows sinus rhythm. CT head is normal. Platelet count is 240 x 10^9/L.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "74/minute",
      "resp": "14/minute",
      "bp": "138/84 mmHg",
      "o2sat": "99% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "prompt": "Which of the following is this patient's Canadian TIA Score?",
        "kind": "single",
        "options": [
          "-3 points",
          "0 points",
          "2 points",
          "4 points",
          "6 points"
        ],
        "correct": 0,
        "explanation": "She scores minus 3 for vertigo. She gets no points for a first TIA because she had a similar episode last year, and none for duration because each episode lasted under 10 minutes. She has no weakness, speech disturbance, carotid history, antiplatelet use, gait disturbance, diastolic BP of 110 mmHg or more, atrial fibrillation, infarct on CT, high platelets or high glucose. The total is minus 3.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "cdn-tia"
      },
      {
        "id": "q2",
        "prompt": "Which of the following best estimates her 7-day risk of stroke or carotid revascularization?",
        "kind": "single",
        "options": [
          "About 0.5%",
          "About 2.3%",
          "About 5.9%",
          "About 11%",
          "About 28%"
        ],
        "correct": 0,
        "explanation": "A Canadian TIA Score from minus 3 to 3 is low risk. In the validation cohort the observed 7-day risk of stroke or carotid revascularization in that group was 0.5%. About 2.3% was the medium risk group and about 5.9% the high risk group. Figures of 11% or more overstate her risk.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "cdn-tia"
      },
      {
        "id": "q3",
        "prompt": "Which of the following additional symptoms would most raise concern for vertebrobasilar ischemia?",
        "kind": "single",
        "options": [
          "Anxiety about symptoms",
          "Brief tinnitus",
          "Diplopia or dysarthria",
          "Nausea during vertigo",
          "Neck muscle tension"
        ],
        "correct": 2,
        "explanation": "Diplopia and dysarthria are brainstem symptoms that Canadian guidance lists as features of vertebrobasilar ischemia, and with vertigo they would make a posterior circulation TIA more likely. Nausea often accompanies vertigo from any cause. Anxiety, brief tinnitus and neck muscle tension are nonspecific.",
        "keyFeature": {
          "topic": "cva",
          "n": 2
        },
        "source": "csbpr-acute"
      },
      {
        "id": "q4",
        "prompt": "Which of the following is still recommended before she leaves the emergency department?",
        "kind": "single",
        "options": [
          "Carotid Doppler within 6 weeks",
          "CT angiography of head and neck",
          "MRI brain within 3 months",
          "Tilt table testing",
          "No further investigation"
        ],
        "correct": 1,
        "explanation": "Canadian guidance advises brain imaging with neurovascular imaging from arch to vertex before discharge for anyone seen within 48 hours of a suspected TIA, and her hand numbness gives a focal feature. A low score lowers her risk but does not replace vascular imaging, which can show a stenosis that changes management. Doppler in 6 weeks or MRI in 3 months is too slow, and tilt table testing does not fit the history.",
        "keyFeature": {
          "topic": "cva",
          "n": 4
        },
        "source": "csbpr-acute"
      }
    ],
    "sources": [SRC_CDN_TIA, SRC_CSBPR_ACUTE],
    ...meta,
  },
];
