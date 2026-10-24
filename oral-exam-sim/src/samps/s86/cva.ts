// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  csbprSp: { id: "s86-csbpr-sp", citation: "Gladstone DJ and colleagues. Canadian Stroke Best Practice Recommendations: secondary prevention of stroke update 2020. Heart and Stroke Foundation of Canada. Can J Neurol Sci. 2022.", url: "https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke" },
  csbprAcute: { id: "s86-csbpr-acute", citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations: acute stroke management, 7th edition 2022, with the endovascular thrombectomy interim update 2025.", url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management" },
  russell: { id: "s86-russell-csdh", citation: "Russell NA, Goumnerova L, Atack EA, Atack DM, Benoit BG. Chronic subdural hematoma mimicking transient ischemic attacks. J Trauma. 1985.", url: "https://pubmed.ncbi.nlm.nih.gov/4057306/" },
  dexCsdh: { id: "s86-dex-csdh", citation: "Hutchinson PJ and colleagues, Dex-CSDH Trial Collaborators. Trial of dexamethasone for chronic subdural hematoma. N Engl J Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/33326713/" },
  forsberg: { id: "s86-forsberg-aca", citation: "Forsberg J, Blaabjerg M, Diaz A, Gaist TA, Christensen A, Gaist D. Bilateral anterior cerebral artery infarction presenting with acute paraparesis and parkinsonism. Neurol Clin Pract. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6927436/" },
  sammpris: { id: "s86-sammpris", citation: "Chimowitz MI and colleagues, SAMMPRIS Trial Investigators. Stenting versus aggressive medical therapy for intracranial arterial stenosis. N Engl J Med. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21899409/" },
  lis: { id: "s86-locked-in", citation: "Smith E, Delargy M. Locked-in syndrome. BMJ. 2005.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC549115/" },
} satisfies Record<string, Source>;

export const CVA_S86: Samp[] = [
  /* 48 Recurrent word-finding spells on apixaban ---------------------------- */
  {
    id: "cva-48",
    topic: "cva",
    title: "Spells of losing her words",
    stem:
      "An 82-year-old woman is brought to the emergency department by her son at 11:00 after her third spell in 2 weeks of trouble finding words with numbness of the right hand. Each spell lasted 10 to 15 minutes and resolved fully. The latest began at 09:30 today. Six weeks ago she slipped on ice and struck her head without losing consciousness, and she did not seek care. Since then she has had a dull headache most days, and her son finds her slower. She has atrial fibrillation and hypertension. Medications: apixaban 5 mg twice daily, last taken at 08:00, and amlodipine. Capillary glucose is 6.2 mmol/L. She is alert and oriented. Speech, language, strength, sensation, coordination and gait are now normal.",
    vitals: { temperature: "36.8°C oral", pulse: "78/minute irregular", resp: "16/minute", bp: "148/82 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most suggests a cause other than transient ischemic attack?",
        options: ["Age older than 80 years", "Daily headache since a head strike", "Numbness of the right hand", "Spells lasting 10 to 15 minutes", "Word-finding difficulty in each spell"],
        correct: 1,
        explanation:
          "A head strike 6 weeks ago followed by daily headache and slowing, in a woman taking apixaban, points to a chronic subdural hematoma. Chronic subdural hematoma can cause repeated brief spells of focal dysfunction that look exactly like transient ischemic attacks, so brain imaging must separate the two. Her age is a risk factor for both conditions. Spells of 10 to 15 minutes, hand numbness and word-finding trouble fit a left hemisphere event of either cause and do not separate them.",
        keyFeature: { topic: "cva", n: 1 },
        source: "s86-russell-csdh",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first investigation for her in the emergency department?",
        options: ["Carotid Doppler ultrasound", "EEG within 24 hours", "MRI brain within 1 week", "Non-contrast CT head now", "Transthoracic echocardiogram"],
        correct: 3,
        explanation:
          "Canadian stroke guidance calls for brain imaging as soon as possible after a suspected transient ischemic attack, and her headache, head strike and anticoagulant make bleeding the first thing to exclude. A non-contrast CT can be done now and shows a subdural collection, so it comes before any change to her antithrombotic therapy. Vascular imaging with CT angiography can be added at the same sitting. Carotid Doppler and echocardiography look for an embolic source and cannot show a hematoma. An MRI a week from now delays a diagnosis that may need surgery. An EEG does not exclude a structural cause.",
        keyFeature: { topic: "cva", n: 1 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q3",
        kind: "single",
        update: "Imaging shows a 16 mm mixed-density chronic subdural hematoma over the left hemisphere with 7 mm of midline shift. There is no infarct.",
        prompt: "Which of the following best explains her three brief spells of speech and hand symptoms?",
        options: ["Cortical dysfunction from the hematoma", "Embolism from the left atrium", "Hypoperfusion from carotid disease", "Migraine aura without headache", "Small vessel lacunar ischemia"],
        correct: 0,
        explanation:
          "The spells come from the left hemisphere, under a left subdural hematoma large enough to shift the midline by 7 mm. Transient deficits from chronic subdural hematoma are thought to arise from the cortex beneath it, through focal seizure activity, spreading cortical depression or local ischemia from pressure. Embolism from her atrium is possible in atrial fibrillation, but she is anticoagulated and the imaging now shows a lesion in the territory of every spell. No carotid disease has been shown. Migraine aura is unlikely as a new pattern at 82, and a lacunar event would not explain word-finding trouble, which is cortical.",
        keyFeature: { topic: "cva", n: 1 },
        source: "s86-russell-csdh",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following are the most appropriate next steps in her management?",
        options: ["Add ASA to apixaban", "Carotid Doppler ultrasound", "Dexamethasone tapering course", "Hold apixaban", "Lumbar puncture", "Neurosurgery consultation", "Repeat CT head in 6 weeks"],
        correct: [3, 5],
        explanation:
          "A symptomatic chronic subdural hematoma with 7 mm of shift is a bleed, so her apixaban is held, and neurosurgery decides on drainage and on any reversal before an operation. Surgical evacuation is the usual treatment for a symptomatic collection with mass effect, so waiting 6 weeks for a repeat scan is not appropriate. In the Dex-CSDH trial a 2-week tapering course of dexamethasone gave fewer favourable outcomes at 6 months and more adverse events than placebo. Adding ASA would treat a transient ischemic attack she did not have and raise the bleeding risk. Carotid imaging and lumbar puncture do not change the plan.",
        keyFeature: { topic: "cva", n: 1 },
        source: "s86-dex-csdh",
      },
    ],
    sources: [S.russell, S.csbprSp, S.dexCsdh],
    ...META,
  },

  /* 49 Both legs weak, thought to be the spine ------------------------------ */
  {
    id: "cva-49",
    topic: "cva",
    title: "Found on the bathroom floor",
    stem:
      "A 76-year-old man is brought to the emergency department by ambulance at 09:35. At 08:15 he was talking normally with his wife at breakfast. At 08:30 she heard a thud and found him on the bathroom floor unable to stand. The paramedics suspected a spinal cord problem. He has no back or neck pain. He has hypertension and dyslipidemia and smokes. Medications: amlodipine and rosuvastatin. He lived independently before today. Capillary glucose is 7.0 mmol/L. He is drowsy but opens his eyes to voice. He answers in short, correct sentences after long pauses and shows little interest in what is happening. He has been incontinent of urine. Right leg power is 1/5 and left leg power is 2/5. Arm strength and the face are normal. Both plantar responses are extensor. Pinprick sensation is normal on the trunk and legs, with no sensory level.",
    vitals: { temperature: "36.6°C oral", pulse: "84/minute", resp: "16/minute", bp: "168/92 mmHg", o2sat: "96% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in this patient best points to a brain lesion rather than a spinal cord lesion?",
        options: ["Apathy with slow, sparse speech", "Bilateral extensor plantar responses", "Leg weakness with normal arms", "Sudden onset while at rest", "Urinary incontinence"],
        correct: 0,
        explanation:
          "Apathy, drowsiness and slow, sparse speech are frontal signs that a spinal cord lesion cannot cause, and with weakness of both legs they point to infarction of both anterior cerebral artery territories, which supply the leg area and the medial frontal lobes. Extensor plantar responses and urinary incontinence occur with both cord and bilateral medial frontal lesions. Leg weakness with normal arms and a sudden onset fit a spinal cord infarct as well, so they do not separate the two. Missing the frontal signs sends the patient to spinal MRI and loses the thrombolysis window.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-forsberg-aca",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first imaging for this patient?",
        options: ["CT angiography of the aorta", "CT of the lumbar spine", "MRI of the whole spine", "Non-contrast CT head and CTA", "Plain films of the spine"],
        correct: 3,
        explanation:
          "He was last known well at 08:15, so he is about 80 minutes into a possible stroke with disabling weakness of both legs. Canadian guidance calls for immediate non-contrast CT of the head with CT angiography from the aortic arch to the vertex for a suspected acute stroke, to exclude hemorrhage and look for an occlusion. Spinal MRI is the test if the brain imaging is normal and a cord lesion remains likely, but done first it would take him out of the treatment window. He has no back pain, injury or pulse deficit to justify aortic or spinal plain imaging first.",
        keyFeature: { topic: "cva", n: 3 },
        source: "s86-csbpr-acute",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows no hemorrhage or early ischemic change. CT perfusion shows reduced blood flow in the medial frontal lobes on both sides.",
        prompt: "Which of the following anatomical variants best explains ischemia in both anterior cerebral artery territories at once?",
        options: ["Artery of Percheron", "Fetal posterior cerebral artery", "Hypoplastic right vertebral artery", "Persistent trigeminal artery", "Single A1 feeding both A2 segments"],
        correct: 4,
        explanation:
          "When one A1 segment is absent or tiny, the other A1 fills both A2 segments through the anterior communicating artery, so a single clot there can cut off both anterior cerebral artery territories, as in a reported man with sudden paraparesis and apathy. The artery of Percheron is a single trunk that supplies both medial thalami, not the frontal lobes. A fetal posterior cerebral artery comes off the internal carotid and supplies the occipital lobe. A hypoplastic vertebral artery and a persistent trigeminal artery affect the posterior circulation.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-forsberg-aca",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT angiography shows occlusion of the distal left A1 segment, which supplies both A2 segments. The right A1 is absent. It is now 09:55.",
        prompt: "Which of the following is the most appropriate reperfusion decision for this patient now?",
        options: ["Await MRI of the brain first", "MRI of the spine before deciding", "Tenecteplase and urgent EVT review", "Thrombectomy alone, no thrombolysis", "No reperfusion treatment"],
        correct: 2,
        explanation:
          "He is 1 hour 40 minutes from last known well, was independent, has disabling bilateral leg weakness and no hemorrhage, so he should receive IV thrombolysis now. Tenecteplase at 0.25 mg/kg is 22 mg for his 88 kg. Canadian guidance says thrombolysis should not be withheld or delayed because thrombectomy is being considered. An A1 occlusion is not one of the standard large vessel targets, so thrombectomy is decided promptly with the neurointerventionalist. Waiting for a brain or spinal MRI delays treatment that works best early. Declining reperfusion ignores a disabling deficit inside the window.",
        keyFeature: { topic: "cva", n: 3 },
        source: "s86-csbpr-acute",
      },
    ],
    sources: [S.forsberg, S.csbprAcute],
    ...META,
  },

  /* 50 Repeated brainstem spells over 3 days -------------------------------- */
  {
    id: "cva-50",
    topic: "cva",
    title: "Spells blamed on the inner ear",
    stem:
      "You are working in a community hospital emergency department with CT and CT angiography. A 69-year-old man presents at 13:00 after four spells in 3 days of double vision, slurred speech and unsteadiness. Each lasted 5 to 15 minutes and resolved fully. The last ended at 11:30. Two days ago his family physician diagnosed an inner ear problem and prescribed betahistine. He has hypertension, type 2 diabetes and dyslipidemia, and he smokes. Medications: metformin, ramipril and atorvastatin 10 mg daily. He takes no antiplatelet. Capillary glucose is 8.4 mmol/L. Neurologic examination, including eye movements and gait, is normal. ECG shows sinus rhythm. Non-contrast CT head is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "72/minute", resp: "16/minute", bp: "158/86 mmHg", o2sat: "97% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the significance of his spells recurring over 3 days?",
        options: ["Fits a benign peripheral vestibular cause", "Lowers his risk below that of one TIA", "Makes a vascular cause unlikely", "Suggests migraine with brainstem aura", "Supports fluctuating vertebrobasilar ischemia"],
        correct: 4,
        explanation:
          "Canadian guidance warns that vertebrobasilar ischemia often presents with fluctuating diplopia, dysarthria and ataxia over more than 48 hours and is easily mistaken for a mimic, yet it needs urgent neurovascular imaging. Double vision and slurred speech are not features of a peripheral vestibular disorder. Repeated spells mark an unstable lesion and a higher, not lower, risk. A first migraine with brainstem aura at 69, with no headache and several vascular risk factors, is far less likely than ischemia.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT angiography shows an 80% stenosis of the mid basilar artery. The vertebral and carotid arteries have no significant stenosis. Platelets are 228 x 10^9/L.",
        prompt: "Which of the following is the most appropriate antithrombotic plan for this patient?",
        options: ["Apixaban 5 mg twice daily", "ASA alone, 81 mg daily", "ASA and clopidogrel for 21 days", "ASA and clopidogrel for 90 days", "Clopidogrel alone, 75 mg daily"],
        correct: 3,
        explanation:
          "His spells are attributed to a symptomatic 80% intracranial stenosis, within the 70 to 99% range for which Canadian guidance recommends medical therapy based on the SAMMPRIS protocol. That protocol used ASA and clopidogrel for 3 months, then a single agent. The usual 21 days of dual therapy applies to high-risk TIA without this lesion, and the guideline names symptomatic intracranial stenosis as a reason to continue longer. A single agent alone gives less protection in the high-risk early months. Anticoagulation has no role without atrial fibrillation or another cardiac source.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to his basilar artery stenosis at this time?",
        options: ["Aggressive medical management", "Angioplasty and stenting this week", "Heparin infusion then warfarin", "Stenting after 21 days of DAPT", "Stenting if LDL stays above target"],
        correct: 0,
        explanation:
          "In SAMMPRIS, patients with a recent TIA or stroke from a 70 to 99% intracranial stenosis had a 30-day rate of stroke or death of 14.7% with angioplasty and stenting, against 5.8% with aggressive medical management alone. Medical therapy meant dual antiplatelets, intensive statin treatment, BP control and lifestyle change, and it stays the first-line approach. Stenting is reserved for carefully selected patients who have another stroke despite full medical therapy, not timed to a fixed date or an LDL value. Warfarin is not better than antiplatelet therapy for intracranial stenosis and causes more bleeding.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-sammpris",
      },
      {
        id: "q4",
        kind: "single",
        update: "His LDL cholesterol is 2.9 mmol/L on atorvastatin 10 mg daily.",
        prompt: "Using the Canadian Stroke Best Practice Recommendations, which of the following is his LDL cholesterol target?",
        options: ["Below 1.4 mmol/L", "Below 1.8 mmol/L", "Below 2.0 mmol/L", "Below 2.6 mmol/L", "Below 3.5 mmol/L"],
        correct: 1,
        explanation:
          "Canadian stroke guidance recommends a statin after a non-cardioembolic TIA or ischemic stroke with a target LDL cholesterol below 1.8 mmol/L, and ezetimibe can be added if that is not reached on the highest tolerated statin. His LDL of 2.9 mmol/L on atorvastatin 10 mg is well above target, so his statin should be raised to a high-intensity dose. Below 1.4 mmol/L is a European target, not the Canadian stroke one. Targets of 2.0, 2.6 or 3.5 mmol/L are too loose for a patient with symptomatic intracranial stenosis.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
    ],
    sources: [S.csbprSp, S.sammpris],
    ...META,
  },

  /* 51 A transient attack reported 9 days late ------------------------------ */
  {
    id: "cva-51",
    topic: "cva",
    title: "An episode she nearly did not mention",
    stem:
      "A 63-year-old woman presents to the emergency department at 10:00 because her daughter urged her to report an episode from 9 days ago. While cooking, her right arm became weak and she could not find her words for about 25 minutes, and then she returned to normal. She has had no further episodes. She has hypertension treated with hydrochlorothiazide and smokes 15 cigarettes a day. She takes no antiplatelet. Capillary glucose is 5.9 mmol/L. Her neurologic examination is normal. ECG shows sinus rhythm at 76/minute.",
    vitals: { temperature: "36.5°C oral", pulse: "76/minute", resp: "14/minute", bp: "152/88 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing for her brain and vascular imaging?",
        options: ["At a stroke clinic within 1 month", "By her family physician next week", "Today, before she leaves", "When a clinic slot opens", "Within 3 months as an outpatient"],
        correct: 2,
        explanation:
          "Canadian guidance says a patient seen more than 48 hours after a TIA should still have a full evaluation and investigations as soon as possible, and brain imaging with CT angiography from the aortic arch to the vertex is the first-line work-up. Arm weakness and word-finding trouble are motor and speech symptoms, the features linked to the highest recurrence risk. Her department has CT and CT angiography, so today is the soonest possible time. A significant carotid stenosis found now still allows revascularization early, when it gives the most benefit. Deferring to a clinic or family physician adds days of avoidable risk.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT head is normal. CT angiography shows no stenosis of more than 30% in any artery. Platelets are 251 x 10^9/L.",
        prompt: "Which of the following is the most appropriate antiplatelet treatment to start before she leaves today?",
        options: ["Apixaban 5 mg twice daily", "ASA and clopidogrel for 21 days", "ASA 160 mg once, then 81 mg daily", "Ticagrelor 90 mg twice daily alone", "No antiplatelet until clinic review"],
        correct: 2,
        explanation:
          "Canadian guidance recommends a one-time ASA load of at least 160 mg once imaging excludes hemorrhage, then long-term single antiplatelet therapy, started before a TIA patient leaves the department. Short-term ASA and clopidogrel is for an acute high-risk TIA, with antiplatelet therapy started within 24 hours of onset, and the trials behind it enrolled patients within the first day. At 9 days most of the early benefit is lost while the extra bleeding risk remains. Ticagrelor alone is not one of the recommended agents. Apixaban needs a cardiac indication she does not have. Waiting for a clinic leaves her unprotected.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q3",
        kind: "single",
        update: "Echocardiography shows a dilated left atrium. A 24-hour Holter monitor shows sinus rhythm throughout. A cardioembolic cause is still suspected.",
        prompt: "Which of the following is the most appropriate next test to look for atrial fibrillation in this patient?",
        options: ["Exercise stress testing", "Prolonged ECG monitoring, 2 weeks or more", "Repeat 24-hour Holter monitor", "Transesophageal echocardiogram", "No further rhythm monitoring"],
        correct: 1,
        explanation:
          "When short-term monitoring after an embolic-appearing TIA is negative but a cardiac source is still suspected, Canadian guidance recommends continuous ECG monitoring for at least 2 weeks in patients aged 55 or older who would be candidates for anticoagulation. At 63 with a dilated left atrium she qualifies. A repeat 24-hour recording adds little, because paroxysmal atrial fibrillation is often brief and infrequent. Transesophageal echocardiography looks at cardiac structure, not rhythm over time. Stress testing does not detect paroxysmal atrial fibrillation. Stopping now could miss a finding that would change her to an anticoagulant.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Using the Canadian Stroke Best Practice Recommendations, which of the following is her long-term blood pressure target?",
        options: ["Below 120/80 mmHg", "Below 130/80 mmHg", "Below 140/90 mmHg", "Below 150/90 mmHg", "Below 160/100 mmHg"],
        correct: 2,
        explanation:
          "The Canadian recommendations set a target consistently below 140/90 mmHg after an ischemic stroke or TIA, and antihypertensive treatment should be strongly considered once the acute phase is over. A systolic target below 130 mmHg is reserved for patients with a small subcortical (lacunar) stroke, and below 130/80 mmHg applies after intracerebral hemorrhage. Her TIA caused word-finding trouble, a cortical feature, and she has neither of those conditions. Below 120/80 mmHg is not a stroke target, and 150/90 or 160/100 mmHg would leave her undertreated.",
        keyFeature: { topic: "cva", n: 4 },
        source: "s86-csbpr-sp",
      },
    ],
    sources: [S.csbprSp],
    ...META,
  },

  /* 52 Eyes open but no movement -------------------------------------------- */
  {
    id: "cva-52",
    topic: "cva",
    title: "Eyes open but not moving",
    stem:
      "A 58-year-old man is brought to the emergency department by ambulance at 06:50. At 06:15 his wife found him in bed unable to speak or move. He was well when he went to bed at 22:30. Yesterday afternoon, while gardening, he had 15 minutes of double vision, slurred speech and dizziness, and he told no one until the evening. He has hypertension and smokes. Medication: perindopril. He lived independently. Capillary glucose is 6.6 mmol/L. The paramedics recorded a GCS of 6 (E4 V1 M1). His eyes are open. He makes no sounds and does not move his face or limbs to command or to pain. Neither eye moves to the side with head turning. Pupils are 3 mm and reactive. Both plantar responses are extensor. His breathing is regular.",
    vitals: { temperature: "37.0°C oral", pulse: "64/minute", resp: "16/minute", bp: "186/98 mmHg", o2sat: "95% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings would most strongly suggest locked-in syndrome rather than coma in this patient?",
        options: ["Absent horizontal eye movements", "Bilateral extensor plantar responses", "Eyes open spontaneously", "Pupils reactive to light", "Vertical gaze on command"],
        correct: 4,
        explanation:
          "Locked-in syndrome leaves the patient fully conscious but unable to move or speak, with vertical eye movements and lid control usually spared, so looking up or down when asked proves awareness. The diagnosis is missed when voluntary vertical gaze is not tested in a patient who seems unresponsive, and his GCS of 6 hides it. Open eyes also occur in a vegetative state. Absent horizontal gaze, reactive pupils and extensor plantar responses are found in both locked-in syndrome and coma from a brainstem lesion, so none of them shows that he is aware.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-locked-in",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely location of the lesion causing his signs?",
        options: ["Base of the pons", "Bilateral medial thalami", "Cerebellar vermis", "Lateral medulla", "Midbrain tectum"],
        correct: 0,
        explanation:
          "Paralysis of all four limbs and the face, mutism and loss of horizontal gaze with extensor plantar responses localize to the base of the pons, where the corticospinal and corticobulbar tracts and the horizontal gaze centres sit. Vertical gaze and lid control arise in the midbrain and are spared. Bilateral medial thalamic infarcts cause drowsiness and vertical gaze palsy without quadriplegia. A cerebellar vermis lesion causes truncal ataxia, and a lateral medullary infarct causes crossed sensory loss with ataxia, not quadriplegia. A midbrain tectal lesion affects upgaze and pupils.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-locked-in",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the episode he had yesterday afternoon while gardening?",
        options: ["Benign positional vertigo", "Hypoglycemic episode", "Orthostatic presyncope", "Posterior circulation TIA", "Vestibular migraine attack"],
        correct: 3,
        explanation:
          "Sudden double vision, slurred speech and dizziness together are brainstem symptoms, and in a smoker with hypertension they mark vertebrobasilar ischemia that Canadian guidance says needs urgent assessment and vascular imaging. Had he come in yesterday, CT angiography could have shown the threatened basilar artery. Positional vertigo is brief, triggered by head position and does not cause double vision or dysarthria. He does not take diabetes drugs, so hypoglycemia is unlikely. Presyncope causes light-headedness and dim vision on standing. A first vestibular migraine at 58 with dysarthria is far less likely than ischemia.",
        keyFeature: { topic: "cva", n: 2 },
        source: "s86-csbpr-sp",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT shows no hemorrhage. CT angiography shows occlusion of the mid basilar artery. The posterior circulation ASPECTS is 8. It is now 07:15.",
        prompt: "Which of the following is the most appropriate treatment for this patient now?",
        options: ["Comfort-focused care only", "Endovascular thrombectomy", "Heparin infusion", "MRI brain before deciding", "Tenecteplase IV alone"],
        correct: 1,
        explanation:
          "He is 8 hours 45 minutes from last known well, with a disabling deficit, independent function before today and a basilar occlusion, which meets the Canadian criteria for endovascular thrombectomy up to 24 hours from last known well. A posterior circulation ASPECTS of 8 shows limited established infarction. He is outside the standard 4.5-hour window for thrombolysis, and tenecteplase alone would not open a basilar occlusion as well as thrombectomy. Comfort care would deny an aware patient effective treatment. Heparin is not a reperfusion treatment, and waiting for MRI loses time.",
        keyFeature: { topic: "cva", n: 3 },
        source: "s86-csbpr-acute",
      },
    ],
    sources: [S.lis, S.csbprSp, S.csbprAcute],
    ...META,
  },
];
