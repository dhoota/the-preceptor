// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

const CSBPR_ACUTE: Source = {
  id: "csbpr-acute",
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute Stroke Management module. 7th edition, 2022 update.",
  url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management",
};
const CSBPR_PREV: Source = {
  id: "csbpr-prev",
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Secondary Prevention of Stroke module. 7th edition, 2020 update.",
  url: "https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke",
};
const AHA_AIS: Source = {
  id: "aha-ais",
  citation: "Prabhakaran S and colleagues. 2026 guideline for the early management of patients with acute ischemic stroke. American Heart Association and American Stroke Association. Stroke. 2026.",
  url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000513",
};
const ACT: Source = {
  id: "act",
  citation: "Menon BK and colleagues. Intravenous tenecteplase compared with alteplase for acute ischaemic stroke in Canada (AcT). Lancet. 2022.",
};
const ABCD2: Source = {
  id: "abcd2",
  citation: "Johnston SC and colleagues. Validation and refinement of scores to predict very early stroke risk after transient ischaemic attack. Lancet. 2007.",
};
const CDN_TIA: Source = {
  id: "cdn-tia",
  citation: "Perry JJ and colleagues. Prospective validation of the Canadian TIA Score. BMJ. 2021.",
};
const HINTS: Source = {
  id: "hints",
  citation: "Kattah JC and colleagues. HINTS to diagnose stroke in the acute vestibular syndrome. Stroke. 2009.",
};
const AHA_ICH: Source = {
  id: "aha-ich",
  citation: "Greenberg SM and colleagues. 2022 guideline for the management of patients with spontaneous intracerebral hemorrhage. American Heart Association and American Stroke Association. Stroke. 2022.",
};
const AORTA: Source = {
  id: "aha-aorta",
  citation: "Isselbacher EM and colleagues. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.",
};
const CCS_AF: Source = {
  id: "ccs-af",
  citation: "Andrade JG and colleagues. 2020 Canadian Cardiovascular Society and Canadian Heart Rhythm Society comprehensive guidelines for the management of atrial fibrillation. Can J Cardiol. 2020.",
};
const BRAIN_METS: Source = {
  id: "brain-mets",
  citation: "Vogelbaum MA and colleagues. Treatment for brain metastases. ASCO, SNO and ASTRO guideline. J Clin Oncol. 2022.",
};
const SOGC_CONTRA: Source = {
  id: "sogc-contraception",
  citation: "Black A, Guilbert E and colleagues. No. 329. Canadian Contraception Consensus Part 4 of 4 Chapter 9: combined hormonal contraception. Society of Obstetricians and Gynaecologists of Canada. J Obstet Gynaecol Can. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28413042/",
};
const THROMBOSIS_CANADA: Source = {
  id: "thrombosis-canada",
  citation: "Thrombosis Canada. Clinical guide: rivaroxaban. 2025.",
  url: "https://thrombosiscanada.ca/hcp/practice/clinical_guides?language=en-ca&guideID=RIVAROXABAN",
};
const NAC_PCC: Source = {
  id: "nac-pcc",
  citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022.",
  url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada",
};

export const CVA_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "cva-01",
    topic: "cva",
    title: "Found unable to speak at breakfast",
    stem:
      "A 67-year-old man is brought by paramedics from a seniors' residence at 07:40. Staff found him at breakfast unable to speak and not moving his right arm. He was last seen well at 23:00. He has type 2 diabetes treated with insulin glargine and gliclazide, hypertension and chronic kidney disease. He is pale and diaphoretic. He has a dense right hemiparesis and expressive aphasia. No glucose was checked before arrival.",
    vitals: { temperature: "36.4°C", pulse: "104/minute", resp: "18/minute", bp: "168/92 mmHg", o2sat: "97% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first action for this patient on arrival?",
        options: [
          "ECG and cardiac monitoring",
          "Labetalol 10 mg IV",
          "Non-contrast CT head",
          "Page the stroke team for thrombolysis",
          "Point of care capillary glucose",
        ],
        correct: 4,
        explanation:
          "Hypoglycemia is a common and reversible stroke mimic. A capillary glucose takes seconds and must precede imaging and any thrombolysis decision. Insulin plus a sulfonylurea with renal impairment puts him at high risk.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        update: "Capillary glucose is 1.8 mmol/L.",
        prompt: "What measures would correct his low glucose and prevent it from recurring over the next several hours?",
        required: 2,
        accept: [
          { id: "d50", text: "Dextrose 25 g IV (50 mL of D50W)", match: ["d50", "d50w", "dextrose 50", "dextrose 25 g", "dextrose 25g", "dextrose bolus", "iv dextrose", "dextrose iv"] },
          { id: "d10", text: "Dextrose infusion such as D10W", match: ["d10", "d10w", "d5w", "dextrose infusion", "dextrose drip", "dextrose 10"] },
          { id: "octreotide", text: "Octreotide for sulfonylurea induced hypoglycemia", match: ["octreotide"] },
          { id: "glucagon", text: "Glucagon 1 mg IM if IV access is delayed", match: ["glucagon"] },
          { id: "food", text: "Oral carbohydrate and a meal once awake and able to swallow", match: ["meal", "eat", "oral carbohydrate", "oral glucose", "juice", "food"] },
          { id: "monitor", text: "Frequent glucose checks, hourly at first", match: ["hourly glucose", "glucose check", "glucose monitoring", "q1h glucose", "serial glucose", "frequent glucose", "repeat glucose"] },
          { id: "hold", text: "Hold gliclazide and insulin", match: ["hold gliclazide", "stop gliclazide", "discontinue gliclazide", "hold insulin", "hold sulfonylurea", "stop sulfonylurea", "discontinue sulfonylurea"] },
        ],
        explanation:
          "Give IV dextrose now. Gliclazide with renal impairment causes prolonged and recurrent hypoglycemia, so he needs a dextrose infusion, frequent checks and possibly octreotide. Feed him as soon as he can swallow safely.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Thirty minutes later his glucose is 6.4 mmol/L. His speech has recovered but a right arm drift and right facial droop persist unchanged. NIHSS is 3.",
        prompt: "What investigations would you order now?",
        required: 2,
        accept: [
          { id: "cta", text: "CT angiogram of the head and neck", match: ["cta", "ct angiogram", "ct angiography"] },
          { id: "ncct", text: "Non-contrast CT head", match: ["ct head", "non contrast ct", "noncontrast ct", "ncct", "ct brain", "head ct"] },
          { id: "ctp", text: "CT perfusion or MRI with diffusion", match: ["ct perfusion", "ctp", "mri", "diffusion"] },
          { id: "ecg", text: "12-lead ECG", match: ["ecg", "ekg", "electrocardiogram"] },
        ],
        explanation:
          "A deficit that persists after the glucose is normal must be treated as a stroke until proven otherwise. He needs urgent brain and vascular imaging and an ECG to look for atrial fibrillation. He is beyond 4.5 hours from last seen well, but advanced imaging can still select some patients for reperfusion.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR_ACUTE],
    ...meta,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "cva-02",
    topic: "cva",
    title: "Weakness after a witnessed event",
    stem:
      "A 54-year-old woman is brought in at 14:10. Her husband saw her stiffen and shake all four limbs for about two minutes at 13:30 while gardening. She was drowsy afterward. She now has left arm and leg weakness. A right frontal meningioma was resected four years ago. She stopped her levetiracetam last month. Glucose is 6.8 mmol/L. GCS is 14. Left arm power 2/5, left leg 3/5, left facial droop.",
    vitals: { temperature: "37.1°C", pulse: "96/minute", resp: "16/minute", bp: "152/88 mmHg", o2sat: "98% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What diagnoses are in your differential for her left-sided weakness?",
        required: 3,
        accept: [
          { id: "todd", text: "Postictal (Todd) paralysis", match: ["todd", "postictal", "post ictal"] },
          { id: "ischemic", text: "Acute ischemic stroke", match: ["ischemic stroke", "ischaemic stroke", "stroke", "cva", "infarct", "lvo"] },
          { id: "ich", text: "Intracerebral hemorrhage", match: ["hemorrhage", "haemorrhage", "ich", "bleed"] },
          { id: "tumour", text: "Recurrent tumour or mass lesion", match: ["tumour", "tumor", "meningioma", "mass", "recurrence"] },
          { id: "sdh", text: "Subdural hematoma from a fall during the seizure", match: ["subdural", "sdh"] },
          { id: "ncse", text: "Ongoing nonconvulsive status epilepticus", match: ["nonconvulsive", "non convulsive", "ncse", "ongoing seizure", "status epilepticus"] },
        ],
        explanation:
          "Todd paralysis is the classic mimic after a seizure, but a stroke can itself cause a seizure. Her surgical history adds tumour recurrence. Hemorrhage and subdural hematoma must be excluded on imaging.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for this patient now?",
        options: [
          "EEG before any brain imaging",
          "MRI brain with diffusion and gadolinium in the morning",
          "Non-contrast CT head and CTA, aortic arch to vertex",
          "Non-contrast CT head without angiography",
          "No imaging, observe for Todd paralysis to resolve",
        ],
        correct: 2,
        explanation:
          "She is within the window for reperfusion, so she needs CT and CTA now. A large vessel occlusion on CTA makes the deficit a stroke, not Todd paralysis. Waiting for the deficit to resolve risks missing a treatable occlusion.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "CT shows old right frontal encephalomalacia and no hemorrhage. CTA shows an occlusion of the proximal right M1 segment.",
        prompt: "What reperfusion treatments would you arrange?",
        required: 2,
        accept: [
          { id: "evt", text: "Endovascular thrombectomy", match: ["evt", "thrombectomy", "endovascular"] },
          { id: "lysis", text: "IV thrombolysis with tenecteplase or alteplase", match: ["tenecteplase", "tnk", "alteplase", "tpa", "thrombolysis", "thrombolytic", "lysis"] },
        ],
        unacceptable: [
          { text: "Observe for resolution of a postictal deficit", match: ["observe", "observation"] },
        ],
        explanation:
          "A seizure at onset is not an absolute contraindication when imaging shows the deficit is due to an occlusion. A meningioma resected years ago is not a contraindication. She should get IV thrombolysis and thrombectomy.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ais",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What items of history must you confirm with her husband before thrombolysis?",
        required: 2,
        accept: [
          { id: "lkw", text: "Time last known well", match: ["last known well", "last seen well", "last seen normal", "onset", "time of onset", "symptom onset"] },
          { id: "anticoag", text: "Anticoagulant use", match: ["anticoagulant", "anticoagulation", "doac", "warfarin", "apixaban", "rivaroxaban", "blood thinner", "no anticoagulant", "not on anticoagulant", "no blood thinner", "not on blood thinner"] },
          { id: "trauma", text: "Head injury during the seizure", match: ["head injury", "head trauma", "fall", "hit her head", "trauma", "no head injury", "no head trauma", "no fall"] },
          { id: "bleed", text: "Recent bleeding or surgery", match: ["bleeding", "bleed", "surgery", "no recent surgery", "no recent bleeding"] },
          { id: "prior", text: "Prior stroke or intracranial hemorrhage", match: ["prior stroke", "previous stroke", "prior hemorrhage", "previous hemorrhage", "prior ich", "recent stroke", "no prior ich", "no prior hemorrhage"] },
        ],
        explanation:
          "The clock starts when she was last known well, which is 13:30 or earlier. A fall with head injury during the seizure, anticoagulants, recent surgery or bleeding and prior hemorrhage all change the risk of thrombolysis.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR_ACUTE, AHA_AIS],
    ...meta,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "cva-03",
    topic: "cva",
    title: "Sudden constant dizziness",
    stem:
      "A 63-year-old man presents at 10:00 with dizziness that began suddenly at 06:30 while shaving. The room has been spinning constantly since. He has vomited four times. He has hypertension and dyslipidemia and smokes a pack a day. Glucose is 7.2 mmol/L. He has left-beating nystagmus on left gaze that becomes right-beating on right gaze. He cannot sit upright on the stretcher without support. Limb power and speech are normal.",
    vitals: { temperature: "36.8°C", pulse: "88/minute regular", resp: "16/minute", bp: "184/98 mmHg", o2sat: "97% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features suggest a central cause rather than vestibular neuritis?",
        required: 3,
        accept: [
          { id: "dcn", text: "Direction-changing gaze-evoked nystagmus", match: ["direction changing", "direction change", "gaze evoked", "changes direction", "bidirectional"] },
          { id: "ataxia", text: "Severe truncal ataxia, cannot sit unsupported", match: ["truncal ataxia", "cannot sit", "unable to sit", "ataxia", "cannot sit unsupported"] },
          { id: "rf", text: "Vascular risk factors (hypertension, smoking, dyslipidemia)", match: ["risk factor", "hypertension", "smoker", "smoking", "dyslipidemia", "vascular"] },
          { id: "age", text: "Older age", match: ["age", "older", "63"] },
        ],
        explanation:
          "Vestibular neuritis causes unidirectional nystagmus and the patient can usually sit and walk with difficulty. Direction-changing nystagmus and inability to sit unaided point to the cerebellum or brainstem. Age and vascular risk factors raise the pretest probability of stroke.",
        keyFeature: { topic: "cva", n: 2 },
        source: "hints",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following head impulse test results would most strongly suggest stroke in this patient?",
        options: [
          "Corrective saccade on head turn to the left",
          "Corrective saccade on head turn to the right",
          "Nystagmus that fatigues with repeated testing",
          "Vertigo reproduced by the Dix-Hallpike manoeuvre",
          "No corrective saccade in either direction",
        ],
        correct: 4,
        explanation:
          "In acute continuous vertigo with nystagmus, a normal head impulse test is reassuring for the ear but worrying for the brain. A corrective saccade suggests a peripheral lesion. Dix-Hallpike testing is for brief positional vertigo and is not part of HINTS.",
        keyFeature: { topic: "cva", n: 2 },
        source: "hints",
      },
      {
        id: "q3",
        kind: "short",
        update: "Non-contrast CT head is reported as normal.",
        prompt: "What imaging studies best evaluate for posterior circulation stroke now?",
        required: 2,
        accept: [
          { id: "mri", text: "MRI brain with diffusion-weighted imaging", match: ["mri", "diffusion", "dwi"] },
          { id: "cta", text: "CT angiogram of the head and neck", match: ["cta", "ct angiogram", "ct angiography", "mra"] },
        ],
        unacceptable: [
          { text: "Repeat non-contrast CT", match: ["repeat ct"] },
          { text: "Carotid Doppler alone", match: ["carotid doppler"] },
        ],
        explanation:
          "Non-contrast CT misses many posterior fossa infarcts. MRI with diffusion is the most sensitive test, and CTA shows vertebral or basilar occlusion or dissection. A carotid Doppler does not assess the posterior circulation well.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "MRI shows an acute 3 cm left cerebellar infarct. Four hours later on the ward he is drowsy and his GCS has fallen to 12.",
        prompt: "What are the urgent steps in management?",
        required: 2,
        accept: [
          { id: "ct", text: "Urgent repeat CT head for edema, hemorrhage or hydrocephalus", match: ["repeat ct", "urgent ct", "ct head", "stat ct"] },
          { id: "nsx", text: "Neurosurgery consultation for decompression or ventricular drain", match: ["neurosurgery", "neurosurgical", "decompression", "craniectomy", "evd", "ventricular drain"] },
          { id: "airway", text: "Protect the airway and move to ICU level care", match: ["airway", "intubate", "intubation", "icu", "critical care"] },
          { id: "hob", text: "Elevate the head of the bed", match: ["head of bed", "hob", "elevate head"] },
          { id: "osmo", text: "Osmotherapy with hypertonic saline or mannitol as a bridge", match: ["hypertonic saline", "mannitol", "osmotherapy", "osmotic"] },
        ],
        explanation:
          "Cerebellar infarcts swell over 2 to 4 days and can compress the brainstem and fourth ventricle. A falling GCS needs urgent CT and neurosurgical input. Suboccipital decompression can be lifesaving.",
        keyFeature: { topic: "cva", n: 2 },
        source: "aha-ais",
      },
    ],
    sources: [HINTS, CSBPR_ACUTE, AHA_AIS],
    ...meta,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "cva-04",
    topic: "cva",
    title: "Double vision and drowsiness",
    stem:
      "A 71-year-old woman is brought in at 21:15. At 19:00 she told her daughter she was seeing double and her speech was slurred. Since then she has become increasingly sleepy. She has atrial fibrillation and stopped her apixaban two weeks ago because of nosebleeds. Glucose is 8.4 mmol/L. GCS is 10 (E2 V3 M5). She has dysconjugate gaze, dysarthria and weakness of all four limbs, worse on the right.",
    vitals: { temperature: "36.9°C", pulse: "112/minute irregular", resp: "14/minute", bp: "176/94 mmHg", o2sat: "95% on arrival", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of this presentation point to posterior circulation ischemia?",
        required: 3,
        accept: [
          { id: "diplopia", text: "Diplopia or dysconjugate gaze", match: ["diplopia", "double vision", "dysconjugate", "gaze", "eye movement"] },
          { id: "dysarthria", text: "Dysarthria", match: ["dysarthria", "slurred"] },
          { id: "loc", text: "Decreased level of consciousness", match: ["level of consciousness", "loc", "drowsy", "sleepy", "gcs", "somnolence", "decreased consciousness"] },
          { id: "bilateral", text: "Weakness of all four limbs", match: ["four limb", "all limb", "bilateral", "quadriparesis", "tetraparesis"] },
        ],
        explanation:
          "Eye movement abnormalities, dysarthria, reduced consciousness and bilateral limb signs localize to the brainstem. Basilar artery occlusion often starts with vague or fluctuating symptoms and is easily mistaken for sedation or intoxication.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following imaging strategies is most appropriate for this patient now?",
        options: [
          "Carotid and vertebral Doppler ultrasound",
          "Lumbar puncture after CT head",
          "MRI brain with diffusion and gadolinium",
          "Non-contrast CT head and CTA, aortic arch to vertex",
          "Non-contrast CT head, then MRI brain in the morning",
        ],
        correct: 3,
        explanation:
          "CTA identifies a basilar occlusion, which is a thrombectomy target. It should be done at the same visit as the non-contrast CT. MRI adds delay in an unstable patient.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT shows no hemorrhage. CTA shows occlusion of the mid basilar artery.",
        prompt: "What reperfusion treatments should she receive?",
        required: 2,
        accept: [
          { id: "lysis", text: "IV tenecteplase 0.25 mg/kg or alteplase 0.9 mg/kg", match: ["tenecteplase", "tnk", "alteplase", "tpa", "thrombolysis", "thrombolytic"] },
          { id: "evt", text: "Endovascular thrombectomy", match: ["evt", "thrombectomy", "endovascular"] },
        ],
        explanation:
          "She is 2 hours and 15 minutes from onset and her last apixaban was 14 days ago, so she is eligible for thrombolysis. Thrombectomy for basilar occlusion improves outcomes and is offered well beyond 6 hours in selected patients. Her airway needs attention before transfer.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What is the most likely cause of her stroke?",
        required: 1,
        accept: [
          { id: "af", text: "Cardioembolism from atrial fibrillation off anticoagulation", match: ["atrial fibrillation", "af", "afib", "cardioembolic", "cardioembolism", "cardiac embolus", "embolic"] },
        ],
        explanation:
          "She has atrial fibrillation and stopped anticoagulation two weeks ago. Her rhythm on arrival is irregular. Looking for the cause is part of the reperfusion assessment and shapes prevention later.",
        keyFeature: { topic: "cva", n: 3 },
        source: "ccs-af",
      },
    ],
    sources: [CSBPR_ACUTE, CCS_AF],
    ...meta,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "cva-05",
    topic: "cva",
    title: "Confused since lunch",
    stem:
      "A 79-year-old man is brought by his wife at 16:20 because he has been confused since lunch at 12:30. He speaks in full sentences that make little sense and uses the wrong words. He cannot follow commands. He has hypertension and paroxysmal atrial fibrillation treated with ASA only. Glucose is 6.9 mmol/L. Triage has labelled him as delirium. He is alert. He has no limb weakness. He has a right homonymous hemianopia on confrontation.",
    vitals: { temperature: "36.7°C", pulse: "84/minute irregular", resp: "16/minute", bp: "172/90 mmHg", o2sat: "96% on arrival", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis, stated as specifically as you can?",
        required: 1,
        accept: [
          { id: "lmca", text: "Left MCA territory stroke with fluent (Wernicke) aphasia", match: ["wernicke", "receptive aphasia", "fluent aphasia", "left mca", "left middle cerebral", "stroke", "infarct", "cva"] },
        ],
        unacceptable: [{ text: "Delirium", match: ["delirium"] }],
        explanation:
          "Sudden fluent speech with wrong words and poor comprehension is a receptive aphasia, not confusion. The hemianopia supports a left hemisphere lesion. Isolated aphasia without weakness is a classic missed stroke.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What features help distinguish this from delirium?",
        required: 3,
        accept: [
          { id: "onset", text: "Sudden onset at a clear time", match: ["sudden", "abrupt", "clear onset", "sudden onset", "known onset time"] },
          { id: "alert", text: "Alert with normal level of consciousness", match: ["alert", "level of consciousness", "attention"] },
          { id: "paraphasia", text: "Fluent speech with paraphasias and poor comprehension", match: ["paraphasia", "wrong word", "fluent", "comprehension", "aphasia"] },
          { id: "field", text: "Homonymous hemianopia", match: ["hemianopia", "visual field", "field cut"] },
          { id: "nofluct", text: "No fluctuation, infection or new drug", match: ["no fever", "no infection", "not fluctuating", "no fluctuation", "no new medication"] },
        ],
        explanation:
          "Delirium develops over hours to days, fluctuates and affects attention. Aphasia starts abruptly and the patient is alert. A focal sign such as hemianopia confirms a structural lesion.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "single",
        update: "It is 16:35. CT head shows no hemorrhage and no early ischemic change. His aphasia is disabling.",
        prompt: "Which of the following is the most appropriate management for him at this time?",
        options: [
          "Alteplase 90 mg IV over 60 minutes",
          "ASA 160 mg and referral to a stroke prevention clinic",
          "MRI to confirm the diagnosis before any treatment",
          "Tenecteplase 19 mg IV now, with CTA head and neck",
          "Tenecteplase 25 mg IV now, with CTA head and neck",
        ],
        correct: 3,
        explanation:
          "He is about 4 hours from last known well with a disabling deficit, so he should get thrombolysis without delay. Tenecteplase 0.25 mg/kg for 76 kg is 19 mg. The alteplase dose would be 0.9 mg/kg, which is 68 mg, not 90 mg.",
        keyFeature: { topic: "cva", n: 3 },
        source: "act",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What investigations would identify the cause of his stroke in the first 24 hours?",
        required: 2,
        accept: [
          { id: "ecg", text: "ECG and cardiac monitoring", match: ["ecg", "ekg", "telemetry", "cardiac monitor", "holter"] },
          { id: "cta", text: "CT angiogram of the head and neck", match: ["cta", "ct angiogram", "carotid"] },
          { id: "echo", text: "Echocardiogram", match: ["echo", "echocardiogram", "tte"] },
          { id: "labs", text: "Lipid profile and HbA1c", match: ["lipid", "a1c", "cholesterol"] },
        ],
        explanation:
          "His known atrial fibrillation on ASA alone is the likely cause, and ECG with monitoring will document it. Vascular imaging looks for carotid disease. Echocardiography looks for thrombus or valve disease.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR_ACUTE, ACT],
    ...meta,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "cva-06",
    topic: "cva",
    title: "Collapse at a coffee shop",
    stem:
      "A 72-year-old man is brought by EMS with a code stroke prenotification at 09:05. He collapsed at a coffee shop at 08:10 with left-sided weakness. He has hypertension and type 2 diabetes. Medications: metformin, ramipril, atorvastatin. Glucose is 9.1 mmol/L. He has right gaze deviation, left hemineglect, dense left hemiplegia and dysarthria. NIHSS is 17.",
    vitals: { temperature: "36.6°C", pulse: "78/minute regular", resp: "16/minute", bp: "204/112 mmHg", o2sat: "96% on arrival", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Which arterial territory is most likely affected?",
        required: 1,
        accept: [
          { id: "rmca", text: "Right middle cerebral artery", match: ["right mca", "right middle cerebral", "r mca", "right m1", "right ica"] },
        ],
        unacceptable: [{ text: "Left MCA", match: ["left mca", "left middle cerebral"] }],
        explanation:
          "Gaze deviation toward the lesion, neglect and dense contralateral weakness of face, arm and leg localize to a large right MCA stroke. Neglect is a nondominant hemisphere sign.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following results must be available before a thrombolysis decision in this patient?",
        options: [
          "Capillary glucose",
          "Electrocardiogram",
          "INR and aPTT",
          "Non-contrast CT head",
          "Platelet count",
          "Portable chest X-ray",
          "Serum creatinine",
          "Serum troponin",
        ],
        select: 2,
        correct: [0, 3],
        explanation:
          "Only a CT to exclude hemorrhage and a glucose to exclude a mimic are required before thrombolysis in a patient not on anticoagulants. Waiting for INR, platelets or other results delays treatment unless there is a specific reason to suspect an abnormality.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT shows no hemorrhage. BP is 198/108 mmHg on repeat.",
        prompt: "Which drug, with dose and route, would you give to lower his blood pressure before thrombolysis?",
        required: 1,
        accept: [
          { id: "labetalol", text: "Labetalol 10 to 20 mg IV over 1 to 2 minutes, may repeat", match: ["labetalol 10", "labetalol 20", "labetalol 10mg", "labetalol 20mg"] },
          { id: "hydralazine", text: "Hydralazine 10 to 20 mg IV", match: ["hydralazine 10", "hydralazine 20", "hydralazine 10mg", "hydralazine 20mg"] },
          { id: "nicardipine", text: "Nicardipine infusion starting at 5 mg/h", match: ["nicardipine", "clevidipine"] },
        ],
        unacceptable: [
          { text: "Sublingual or oral nifedipine", match: ["nifedipine"], dangerous: true },
        ],
        explanation:
          "BP must be below 185/110 mmHg before thrombolysis and below 180/105 mmHg for 24 hours after. Small IV boluses of labetalol or hydralazine, or a nicardipine infusion, are used. Short-acting nifedipine causes unpredictable drops in pressure and can extend the infarct.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ais",
      },
      {
        id: "q4",
        kind: "single",
        update: "BP is now 176/98 mmHg.",
        prompt: "Which of the following is the correct thrombolytic regimen for this patient?",
        options: [
          "Alteplase 90 mg IV bolus",
          "Tenecteplase 11 mg IV single bolus",
          "Tenecteplase 22 mg IV single bolus",
          "Tenecteplase 44 mg IV single bolus",
          "Tenecteplase 50 mg IV single bolus",
        ],
        correct: 2,
        explanation:
          "The stroke dose of tenecteplase is 0.25 mg/kg to a maximum of 25 mg, so 22 mg for 88 kg. Higher weight-based doses are for STEMI and increase bleeding in stroke. Alteplase is never given as a single full bolus.",
        keyFeature: { topic: "cva", n: 3 },
        source: "act",
      },
      {
        id: "q5",
        kind: "short",
        update: "CTA shows occlusion of the right ICA terminus and proximal M1 with good collaterals on multiphase CTA.",
        prompt: "What are the next steps in management?",
        required: 2,
        accept: [
          { id: "evt", text: "Proceed to endovascular thrombectomy without waiting for a response to thrombolysis", match: ["evt", "thrombectomy", "endovascular", "neurointervention", "angio suite"] },
          { id: "bp", text: "Keep BP below 180/105 mmHg for 24 hours", match: ["180/105", "180 105", "bp below 180", "blood pressure below 180", "bp less than 180", "bp monitoring", "blood pressure monitoring", "bp control", "blood pressure control"] },
          { id: "neuro", text: "Frequent neurological checks", match: ["neuro check", "neurological check", "neuro vital", "neurologic check", "nihss", "neuro ob"] },
          { id: "swallow", text: "NPO until a swallow screen", match: ["npo", "swallow", "dysphagia", "nothing by mouth"] },
          { id: "noat", text: "No antithrombotics for 24 hours after thrombolysis", match: ["no antithrombotic", "hold antithrombotic", "withhold antithrombotic", "avoid antithrombotic", "no antiplatelet", "hold antiplatelet", "avoid antiplatelet", "no anticoagulant", "hold anticoagulant"] },
        ],
        unacceptable: [
          { text: "Wait to see if thrombolysis works before thrombectomy", match: ["wait"] },
          { text: "Start heparin", match: ["start heparin", "heparin infusion", "iv heparin"], dangerous: true },
          { text: "Intensive systolic target below 140 mmHg", match: ["below 140", "less than 140", "under 140"] },
        ],
        explanation:
          "Thrombolysis rarely opens an ICA terminus occlusion. Thrombectomy should follow immediately. After thrombolysis, BP must stay below 180/105 mmHg and antithrombotics are held for 24 hours. Lowering systolic BP below 140 mmHg after successful thrombectomy is harmful.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR_ACUTE, AHA_AIS, ACT],
    ...meta,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "cva-07",
    topic: "cva",
    title: "Woke up unable to speak",
    stem:
      "A 58-year-old woman woke at 06:30 with right-sided weakness and difficulty speaking. She went to bed well at 23:00. She arrives by EMS at 07:20 at a comprehensive stroke centre. She has hypertension and migraine. Medication: amlodipine. Glucose is 6.1 mmol/L. She has global aphasia and right hemiplegia. NIHSS is 19.",
    vitals: { pulse: "82/minute", resp: "16/minute", bp: "172/94 mmHg", o2sat: "98% on arrival", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What time do you use as her stroke onset for treatment decisions?",
        required: 1,
        accept: [
          { id: "lkw", text: "23:00, when she was last known well", match: ["23:00", "2300", "11 pm", "11pm", "last known well", "last seen well", "last seen normal", "went to bed"] },
        ],
        unacceptable: [{ text: "06:30, when she woke", match: ["06:30", "6:30", "0630", "when she woke"] }],
        explanation:
          "Onset is the time she was last known to be well. For a stroke on waking that is when she went to sleep. This puts her beyond the standard 4.5 hour thrombolysis window by the clock.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What imaging approaches can identify patients like her who may still benefit from reperfusion?",
        required: 2,
        accept: [
          { id: "mcta", text: "Multiphase CTA to assess collaterals", match: ["multiphase", "mcta", "collateral"] },
          { id: "cta", text: "CTA to detect a large vessel occlusion", match: ["cta", "ct angiogram", "ct angiography"] },
          { id: "ctp", text: "CT perfusion to estimate core and penumbra", match: ["ct perfusion", "ctp", "perfusion", "penumbra"] },
          { id: "mri", text: "MRI showing DWI and FLAIR mismatch", match: ["flair", "dwi", "mri", "diffusion"] },
        ],
        explanation:
          "CTA finds an occlusion and multiphase CTA or CT perfusion estimate salvageable tissue for thrombectomy up to 24 hours. A DWI lesion without a FLAIR change suggests onset within about 4.5 hours and can select wake-up strokes for thrombolysis.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "single",
        update: "Non-contrast CT shows ASPECTS 8. CTA shows a left M1 occlusion with good collaterals on multiphase CTA.",
        prompt: "Which of the following is the most appropriate treatment for her now?",
        options: [
          "ASA 160 mg and admission to the stroke unit",
          "Endovascular thrombectomy",
          "IV tenecteplase alone",
          "MRI first to confirm DWI and FLAIR mismatch",
          "Unfractionated heparin infusion",
        ],
        correct: 1,
        explanation:
          "Thrombectomy benefits selected patients with a proximal anterior occlusion, a small core and good collaterals up to 24 hours from last known well. She is 8.5 hours out, so standard thrombolysis does not apply. Getting an MRI first would only delay thrombectomy.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What orders would you write for the first 24 hours after thrombectomy?",
        required: 2,
        accept: [
          { id: "neuro", text: "Frequent neurological checks", match: ["neuro check", "neurological check", "neuro vital", "neurologic check", "nihss", "neuro ob"] },
          { id: "bp", text: "BP monitoring with a set target, below 180/105 mmHg if she received a thrombolytic", match: ["blood pressure", "bp"] },
          { id: "swallow", text: "NPO until a dysphagia screen", match: ["npo", "swallow", "dysphagia", "nothing by mouth"] },
          { id: "groin", text: "Access site and distal pulse checks", match: ["groin", "access site", "puncture site", "femoral", "radial", "pulse"] },
          { id: "glucose", text: "Glucose and temperature control", match: ["glucose", "temperature", "fever"] },
          { id: "vte", text: "Intermittent pneumatic compression for VTE prevention", match: ["pneumatic compression", "ipc", "vte prophylaxi", "dvt prophylaxi"] },
          { id: "ct", text: "Repeat CT at 24 hours before antithrombotics", match: ["repeat ct", "follow up ct", "24 hour ct", "ct at 24"] },
        ],
        unacceptable: [
          { text: "Intensive systolic target below 140 mmHg", match: ["below 140", "less than 140", "under 140"] },
        ],
        explanation:
          "Post-thrombectomy care focuses on early detection of hemorrhage or reocclusion, BP control, aspiration prevention and access site checks. Fever and high glucose worsen outcomes. After successful recanalization, a systolic target below 140 mmHg is harmful and not recommended.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ais",
      },
    ],
    sources: [CSBPR_ACUTE, AHA_AIS],
    ...meta,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "cva-08",
    topic: "cva",
    title: "Weakness while watching curling",
    stem:
      "A 76-year-old man arrives at 16:30. At 15:10 he suddenly developed left face and arm weakness and slurred speech while watching curling on television. He has atrial fibrillation, hypertension and heart failure. Medications: rivaroxaban 20 mg daily, bisoprolol and furosemide. Glucose is 7.0 mmol/L. Creatinine last month was 110 umol/L. NIHSS is 9.",
    vitals: { pulse: "96/minute irregular", resp: "18/minute", bp: "164/88 mmHg", o2sat: "95% on arrival", weight: "81 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What information about his anticoagulant do you need now?",
        required: 2,
        accept: [
          { id: "time", text: "Time of the last dose", match: ["last dose", "time of dose", "when taken", "time taken", "last taken", "timing"] },
          { id: "adherence", text: "Adherence and missed doses", match: ["adherence", "compliance", "missed", "nonadherence"] },
          { id: "renal", text: "Current renal function", match: ["creatinine", "renal", "egfr", "crcl", "kidney"] },
          { id: "level", text: "Drug-specific anti-Xa level if available", match: ["anti xa", "antixa", "drug level", "rivaroxaban level", "calibrated"] },
          { id: "dose", text: "Dose actually taken and whether with food", match: ["dose taken", "food", "actual dose", "what dose"] },
        ],
        explanation:
          "Canadian guidance says IV thrombolysis should not routinely be given to patients taking a DOAC. Timing of the last dose and renal function tell you how much drug is still active. Adherence and correct use also bear on why the stroke happened.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows no hemorrhage. He took rivaroxaban 8.5 hours ago. An anti-Xa level is not available.",
        prompt: "Which of the following statements about reperfusion for this patient is most appropriate?",
        options: [
          "Give andexanet alfa, then tenecteplase",
          "Give full-dose tenecteplase now, then CTA",
          "Give half-dose tenecteplase now, then CTA",
          "Give idarucizumab, then tenecteplase",
          "Thrombolysis contraindicated, CTA for thrombectomy",
        ],
        correct: 4,
        explanation:
          "Canadian guidance advises against routine thrombolysis in patients taking a DOAC. Most protocols require more than 48 hours since the last dose or a normal drug-specific level, so 8.5 hours is not enough for full-dose or half-dose tenecteplase. Idarucizumab reverses dabigatran only, and andexanet is not used to enable thrombolysis. Anticoagulation is not a contraindication to thrombectomy.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update: "CTA shows a right M1 occlusion.",
        prompt: "What is the most appropriate reperfusion strategy?",
        required: 1,
        accept: [
          { id: "evt", text: "Endovascular thrombectomy alone", match: ["evt", "thrombectomy", "endovascular"] },
        ],
        unacceptable: [
          { text: "Thrombolysis", match: ["tenecteplase", "alteplase", "tnk", "tpa"] },
        ],
        explanation:
          "Thrombectomy is the treatment of choice for a large vessel occlusion in an anticoagulated patient. It does not rely on a lytic drug. Thrombolysis would add bleeding risk without benefit here.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ais",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "Other than breakthrough cardioembolism despite correct therapy, why may a patient on a DOAC have an ischemic stroke?",
        required: 2,
        accept: [
          { id: "adherence", text: "Missed doses or poor adherence", match: ["missed", "adherence", "nonadherence", "compliance", "not taking"] },
          { id: "food", text: "Rivaroxaban 15 or 20 mg not taken with food", match: ["food", "meal", "empty stomach", "not taken with food", "not with food", "without food", "no food"] },
          { id: "underdose", text: "Inappropriate dose reduction", match: ["underdos", "under dos", "wrong dose", "dose reduction", "low dose", "reduced dose"] },
          { id: "interaction", text: "Drug interaction lowering levels such as rifampin, carbamazepine or phenytoin", match: ["interaction", "inducer", "rifampin", "carbamazepine", "phenytoin"] },
          { id: "carotid", text: "Large artery atherosclerosis such as carotid stenosis", match: ["carotid", "large artery", "atherosclero", "atherosclerosis", "stenosis"] },
          { id: "lacunar", text: "Small vessel disease", match: ["small vessel", "lacunar"] },
          { id: "endocarditis", text: "Infective endocarditis", match: ["endocarditis"] },
        ],
        explanation:
          "Stroke on a DOAC is often due to adherence, absorption or dosing problems. Rivaroxaban 15 and 20 mg need food for full absorption. Another mechanism such as carotid disease may be present and needs its own treatment.",
        keyFeature: { topic: "cva", n: 3 },
        source: "thrombosis-canada",
      },
    ],
    sources: [CSBPR_ACUTE, AHA_AIS, THROMBOSIS_CANADA],
    ...meta,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "cva-09",
    topic: "cva",
    title: "Collapse while lifting boxes",
    stem:
      "A 61-year-old man is brought in at 13:45. At 13:00 he felt a sudden severe pain between his shoulder blades while lifting boxes, then collapsed. His wife found him unable to move his left side. He has untreated hypertension. BP is 108/64 mmHg in the right arm and 162/94 mmHg in the left arm. Glucose is 7.8 mmol/L. He has left face, arm and leg weakness. A soft early diastolic murmur is heard at the left sternal border. The neurology resident is preparing tenecteplase.",
    vitals: { temperature: "36.5°C", pulse: "102/minute", resp: "22/minute", o2sat: "95% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What diagnosis must be excluded before any reperfusion therapy?",
        required: 1,
        accept: [
          { id: "ad", text: "Acute aortic dissection", match: ["aortic dissection", "aortic syndrome", "type a", "dissecting aneurysm", "dissection of the aorta"] },
        ],
        explanation:
          "Stroke with chest or back pain, a pulse or pressure difference, or a new aortic regurgitation murmur is aortic dissection until proven otherwise. Thrombolysis in dissection is often fatal.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-aorta",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What findings support this diagnosis?",
        required: 3,
        accept: [
          { id: "pain", text: "Sudden severe interscapular pain", match: ["interscapular", "back pain", "between shoulder", "shoulder blade", "tearing", "severe pain", "sudden pain"] },
          { id: "bpdiff", text: "Arm blood pressure difference", match: ["differential", "difference", "discrepancy", "pulse deficit", "unequal"] },
          { id: "murmur", text: "New diastolic murmur of aortic regurgitation", match: ["murmur", "diastolic", "aortic regurgitation", "ai", "ar"] },
          { id: "neuro", text: "Neurologic deficit with pain", match: ["neurologic deficit", "stroke with pain", "hemiparesis", "weakness"] },
          { id: "htn", text: "Hypertension history", match: ["hypertension", "htn"] },
          { id: "syncope", text: "Collapse or syncope at onset", match: ["collapse", "syncope"] },
        ],
        explanation:
          "Abrupt severe pain, a pulse or pressure difference and a new aortic regurgitation murmur are high-risk features of acute aortic syndrome. A dissection extending into the right carotid causes a right hemisphere stroke.",
        keyFeature: { topic: "cva", n: 1 },
        source: "aha-aorta",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following imaging strategies is most appropriate for this patient?",
        options: [
          "MRI brain with diffusion-weighted imaging",
          "Non-contrast CT head and CTA neck, chest, abdomen, pelvis",
          "Non-contrast CT head only, then tenecteplase if no bleed",
          "Portable chest X-ray before any CT",
          "Transthoracic echocardiogram only",
        ],
        correct: 1,
        explanation:
          "CT angiography from the neck through the pelvis confirms the dissection and its extent in one trip. A normal chest X-ray or echo does not exclude it. CT head is still needed to assess the stroke.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-aorta",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT confirms a Stanford type A dissection extending into the right common carotid artery. CT head shows no hemorrhage.",
        prompt: "What are the management steps now?",
        required: 3,
        accept: [
          { id: "surgery", text: "Emergency cardiac surgery consultation", match: ["cardiac surgery", "cardiac surgeon", "cardiovascular surgery", "cardiothoracic", "thoracic surgery", "surgery"] },
          { id: "bb", text: "IV beta blocker such as esmolol or labetalol to heart rate below 60", match: ["esmolol", "labetalol", "beta blocker", "beta blockade"] },
          { id: "withhold", text: "Withhold thrombolysis and antithrombotics", match: ["withhold", "no thrombolysis", "no tenecteplase", "hold tenecteplase", "cancel", "avoid thrombolysis", "no antithrombotic", "contraindicated"] },
          { id: "analgesia", text: "IV opioid analgesia", match: ["opioid", "fentanyl", "morphine", "hydromorphone", "analgesia"] },
          { id: "blood", text: "Crossmatch blood products", match: ["crossmatch", "cross match", "type and screen", "blood product"] },
          { id: "echo", text: "Bedside echo for pericardial effusion", match: ["pocus", "echo", "ultrasound"] },
        ],
        unacceptable: [
          { text: "Give thrombolysis", match: ["give tenecteplase", "give thrombolysis", "give alteplase", "give tnk"], dangerous: true },
          { text: "Start heparin", match: ["start heparin", "heparin infusion", "heparin bolus"], dangerous: true },
        ],
        explanation:
          "Type A dissection needs emergency surgery. Use the higher arm pressure to guide impulse control with a beta blocker and opioid analgesia. Thrombolysis and anticoagulation are contraindicated.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-aorta",
      },
    ],
    sources: [AORTA],
    ...meta,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "cva-10",
    topic: "cva",
    title: "Brief episode of arm weakness",
    stem:
      "A 66-year-old man presents at 11:30. At 08:15 his right arm became weak and he had trouble finding words. It resolved completely by 09:00. He has type 2 diabetes and dyslipidemia. Medications: metformin, rosuvastatin 10 mg. Glucose is 8.2 mmol/L. His neurologic examination is now normal. ECG shows sinus rhythm.",
    vitals: { pulse: "74/minute regular", resp: "14/minute", bp: "158/88 mmHg", o2sat: "98% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his ABCD2 score based on the history and findings?",
        options: [
          "3",
          "4",
          "5",
          "6",
          "7",
        ],
        correct: 3,
        explanation:
          "Age 60 or older scores 1. Systolic 140 or higher, or diastolic 90 or higher, scores 1. Unilateral weakness scores 2. Duration 10 to 59 minutes scores 1. Diabetes scores 1. The total is 6, which is high risk.",
        keyFeature: { topic: "cva", n: 4 },
        source: "abcd2",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What investigations would you complete in the emergency department today?",
        required: 3,
        accept: [
          { id: "cta", text: "CT angiogram of the head and neck", match: ["cta", "ct angiogram", "ct angiography"] },
          { id: "ct", text: "Non-contrast CT head", match: ["ct head", "non contrast ct", "noncontrast ct", "ncct", "ct brain", "head ct"] },
          { id: "doppler", text: "Carotid Doppler ultrasound", match: ["carotid doppler", "carotid ultrasound", "carotid imaging"] },
          { id: "monitor", text: "Cardiac monitoring for atrial fibrillation", match: ["telemetry", "cardiac monitor", "cardiac monitoring", "holter", "rhythm monitor"] },
          { id: "labs", text: "CBC, electrolytes, creatinine, INR, lipids and HbA1c", match: ["cbc", "electrolyte", "creatinine", "inr", "lipid", "a1c", "blood work", "bloodwork"] },
        ],
        explanation:
          "A TIA with motor or speech symptoms within 48 hours is the highest risk group. These patients need brain and vascular imaging, ideally CT and CTA, and rhythm assessment in the ED the same day. Symptomatic carotid stenosis is the main target.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT head is normal. CTA shows an 80% stenosis of the proximal left internal carotid artery.",
        prompt: "What are the elements of management?",
        required: 2,
        accept: [
          { id: "cea", text: "Urgent vascular surgery referral for carotid endarterectomy within 14 days", match: ["endarterectomy", "vascular surgery", "vascular surgeon", "cea", "carotid stent", "revascularization", "revascularisation"] },
          { id: "antiplatelet", text: "Dual antiplatelet therapy", match: ["asa", "aspirin", "clopidogrel", "antiplatelet", "dapt"] },
          { id: "statin", text: "High-intensity statin", match: ["statin", "atorvastatin", "rosuvastatin"] },
          { id: "admit", text: "Admission or same-day stroke service review", match: ["admit", "admission", "stroke team", "stroke service", "neurology"] },
          { id: "bp", text: "BP and glucose control over the following days", match: ["blood pressure", "bp control", "antihypertensive"] },
        ],
        explanation:
          "Symptomatic 70 to 99% carotid stenosis benefits from endarterectomy, and the benefit is greatest when done within 14 days. Antiplatelet therapy and a high-intensity statin start now. Increase his rosuvastatin.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following best describe the antiplatelet regimen for him?",
        options: [
          "Apixaban 5 mg twice daily",
          "ASA 81 mg daily with no loading dose",
          "ASA 160 mg loading dose, then 81 mg daily",
          "Clopidogrel 75 mg daily with no loading dose",
          "Clopidogrel 300 to 600 mg load, then 75 mg daily",
          "Dual therapy for 21 days, then a single agent",
          "Dual therapy indefinitely",
          "Warfarin with a target INR of 2 to 3",
        ],
        select: 3,
        correct: [2, 4, 5],
        explanation:
          "For high-risk TIA or minor stroke, start ASA plus clopidogrel within 24 hours. Canadian guidance loads clopidogrel 300 or 600 mg and ASA 160 to 325 mg, then gives 75 mg and 81 mg daily for 21 days. Beyond 21 days the bleeding risk outweighs benefit. Anticoagulation is for a cardioembolic source.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
    ],
    sources: [ABCD2, CSBPR_PREV],
    ...meta,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "cva-11",
    topic: "cva",
    title: "Vision went dark in one eye",
    stem:
      "A 74-year-old woman presents at 10:00. At 07:30 the vision in her left eye went dark like a curtain coming down. It fully returned after about 5 minutes. She has no headache, jaw pain or scalp tenderness. She has hypertension and hypothyroidism. The pulse is irregularly irregular. Creatinine is 96 umol/L. Visual acuity is 20/25 in each eye. Fundoscopy and neurologic examination are normal. ECG shows new atrial fibrillation with rapid ventricular response.",
    vitals: { temperature: "36.8°C", pulse: "118/minute irregular", resp: "16/minute", bp: "162/84 mmHg", o2sat: "97% on arrival", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [
          { id: "af", text: "Amaurosis fugax (retinal TIA)", match: ["amaurosis", "retinal tia", "transient monocular", "retinal ischemia", "retinal ischaemia", "tia", "transient ischemic attack"] },
        ],
        explanation:
          "Transient monocular vision loss described as a curtain is retinal ischemia. It carries the same urgency as a hemispheric TIA and is often dismissed as an eye problem.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-prev",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What other diagnoses should you consider for transient monocular vision loss in a woman her age?",
        required: 2,
        accept: [
          { id: "gca", text: "Giant cell arteritis", match: ["giant cell", "temporal arteritis", "gca"] },
          { id: "migraine", text: "Retinal migraine", match: ["migraine"] },
          { id: "angle", text: "Intermittent angle closure glaucoma", match: ["angle closure", "glaucoma"] },
          { id: "papilledema", text: "Papilledema with visual obscurations", match: ["papilledema", "papilloedema", "intracranial pressure", "obscuration"] },
          { id: "crvo", text: "Impending central retinal vein or artery occlusion", match: ["retinal vein", "retinal artery", "crvo", "crao"] },
          { id: "dry", text: "Tear film or dry eye problem", match: ["dry eye", "tear film"] },
        ],
        explanation:
          "Giant cell arteritis must be considered in anyone over 50 because blindness can follow within days. Other causes include angle closure, papilledema and retinal migraine. She has no features of giant cell arteritis but inflammatory markers are still worth checking.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-prev",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What investigations would you arrange in the emergency department or within 24 hours?",
        required: 3,
        accept: [
          { id: "esr", text: "ESR and CRP", match: ["esr", "crp", "sed rate", "sedimentation", "c reactive"] },
          { id: "cta", text: "CT angiogram of the head and neck or carotid Doppler", match: ["cta", "ct angiogram", "carotid doppler", "carotid ultrasound", "carotid imaging"] },
          { id: "ct", text: "CT head", match: ["ct head", "ct brain", "ncct", "head ct"] },
          { id: "echo", text: "Echocardiogram", match: ["echo", "echocardiogram", "tte"] },
          { id: "labs", text: "CBC, creatinine, TSH and electrolytes", match: ["cbc", "creatinine", "tsh", "electrolyte", "blood work", "bloodwork"] },
          { id: "eye", text: "Ophthalmology assessment", match: ["ophthalmology", "ophthalmologist", "dilated fundus"] },
        ],
        explanation:
          "Carotid imaging is urgent because ipsilateral carotid stenosis is a common cause. Inflammatory markers screen for giant cell arteritis. New atrial fibrillation needs renal function to dose an anticoagulant and a TSH.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "ESR and CRP are normal. CT and CTA show no hemorrhage and no carotid stenosis. Her heart rate is controlled with metoprolol.",
        prompt: "Which of the following is the most appropriate antithrombotic plan for her?",
        options: [
          "Apixaban 5 mg twice daily, started now",
          "Apixaban 2.5 mg twice daily, started now",
          "ASA and clopidogrel for 21 days",
          "Delay any anticoagulant for 14 days",
          "Warfarin with an enoxaparin bridge",
        ],
        correct: 0,
        explanation:
          "A TIA with atrial fibrillation calls for an oral anticoagulant, preferably a DOAC. After a brief TIA with no infarct on imaging, it can start within 24 hours. Apixaban is reduced to 2.5 mg only with two of age 80 or older, weight 60 kg or less, or creatinine 133 umol/L or higher. She meets only one.",
        keyFeature: { topic: "cva", n: 4 },
        source: "ccs-af",
      },
    ],
    sources: [CSBPR_PREV, CCS_AF],
    ...meta,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "cva-12",
    topic: "cva",
    alsoTopics: ["headache"],
    title: "Flashing lights then tingling",
    stem:
      "A 34-year-old woman presents with an episode that began 2 hours ago. Flickering zigzag lights appeared in her right visual field and slowly spread over 20 minutes. As they faded, tingling moved from her right fingers up her arm to her face over 15 minutes. A throbbing left-sided headache with nausea followed. She has had two similar episodes in the last 5 years. She takes a combined oral contraceptive and smokes. Neurologic examination is now normal.",
    vitals: { temperature: "36.7°C", pulse: "76/minute", resp: "14/minute", bp: "122/74 mmHg", o2sat: "99% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features favour migraine with aura over TIA?",
        required: 3,
        accept: [
          { id: "positive", text: "Positive symptoms such as flickering lights and tingling", match: ["positive", "flicker", "flickering", "zigzag", "scintillat", "scintillating", "tingling", "paresthesia"] },
          { id: "spread", text: "Gradual spread or march over minutes", match: ["spread", "march", "gradual", "evolve", "progress"] },
          { id: "sequential", text: "Symptoms occurring one after another", match: ["sequential", "one after another", "successive"] },
          { id: "headache", text: "Followed by a migraine headache", match: ["headache", "nausea"] },
          { id: "recurrent", text: "Prior similar stereotyped episodes", match: ["recurrent", "similar", "previous", "prior", "stereotyped"] },
          { id: "young", text: "Young age", match: ["young", "younger", "age 34"] },
        ],
        explanation:
          "Aura typically has positive symptoms that spread over 5 minutes or more and follow one another, then headache. TIA symptoms are usually negative, such as weakness or visual loss, and are maximal at onset.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-prev",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What features of a transient episode would make you manage it as a TIA instead?",
        required: 2,
        accept: [
          { id: "negative", text: "Negative symptoms such as weakness, numbness or vision loss", match: ["negative", "weakness", "loss of vision", "vision loss", "numbness", "loss of sensation"] },
          { id: "sudden", text: "Sudden onset, maximal at onset", match: ["sudden", "abrupt", "maximal at onset", "maximum at onset"] },
          { id: "speech", text: "Speech disturbance", match: ["speech", "aphasia", "dysarthria"] },
          { id: "first", text: "First ever episode, or older with vascular risk factors", match: ["first", "older", "risk factor"] },
          { id: "noheadache", text: "No headache following", match: ["no headache", "without headache"] },
        ],
        explanation:
          "Sudden negative symptoms, motor weakness and speech disturbance suggest ischemia. A first episode in an older patient with risk factors is a TIA until proven otherwise.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-prev",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What changes would you advise to lower her future stroke risk?",
        required: 2,
        accept: [
          { id: "coc", text: "Stop the combined estrogen contraceptive and switch to a non-estrogen method", match: ["stop combined", "stop estrogen", "stop the pill", "stop ocp", "stop coc", "stop oral contraceptive", "stop birth control", "discontinue oral contraceptive", "discontinue ocp", "discontinue coc", "discontinue combined", "switch contraception", "switch contraceptive", "progestin", "iud", "copper", "non estrogen", "estrogen free", "no estrogen", "avoid estrogen"] },
          { id: "smoke", text: "Smoking cessation", match: ["smoking", "smoke", "smoker", "cessation", "varenicline", "nicotine", "stop smoking", "quit smoking", "no smoking", "avoid smoking", "discontinue smoking"] },
        ],
        explanation:
          "Migraine with aura raises ischemic stroke risk, and combined estrogen contraception and smoking multiply it. Combined hormonal contraception is contraindicated in migraine with aura. A progestin-only method or an IUD is preferred.",
        keyFeature: { topic: "headache", n: 5 },
        source: "sogc-contraception",
      },
    ],
    sources: [CSBPR_PREV, SOGC_CONTRA],
    ...meta,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "cva-13",
    topic: "cva",
    title: "Neck pain after a hockey game",
    stem:
      "A 42-year-old man presents at 20:00. Three days ago he was checked hard into the boards in a recreational hockey game. Since then he has had right-sided neck pain and headache. Today at 17:30 he had 20 minutes of left hand weakness and slurred speech, now resolved. His wife noticed his right eyelid droops. Glucose is 5.4 mmol/L. He has a mild right ptosis and a small right pupil. There are no other deficits.",
    vitals: { pulse: "70/minute", resp: "14/minute", bp: "136/82 mmHg", o2sat: "99% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [
          { id: "dissection", text: "Right internal carotid artery dissection", match: ["carotid dissection", "cervical artery dissection", "ica dissection", "internal carotid", "dissection"] },
        ],
        explanation:
          "Neck pain and headache after trauma, a partial Horner syndrome on the same side and contralateral transient deficits point to internal carotid dissection. Dissection is a leading cause of stroke in young adults.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        update: "His ABCD2 score is 3.",
        prompt: "Why does he still need urgent assessment and imaging tonight?",
        required: 2,
        accept: [
          { id: "motor", text: "Motor weakness or speech disturbance", match: ["weakness", "motor", "speech", "dysarthria", "slurred"] },
          { id: "timing", text: "Symptoms within the last 48 hours", match: ["48", "within hour", "recent", "today", "hour ago"] },
          { id: "lesion", text: "Suspected symptomatic arterial lesion", match: ["dissection", "arterial lesion", "vascular lesion", "horner"] },
          { id: "score", text: "ABCD2 alone misses high-risk patients and does not include imaging", match: ["abcd2", "sensitivity", "canadian tia", "does not include imaging"] },
        ],
        explanation:
          "Canadian guidance triages by timing and symptoms rather than score alone. Motor or speech symptoms within 48 hours need immediate assessment. ABCD2 ignores imaging, and a dissection or stenosis greatly raises early risk. The Canadian TIA Score adds these factors.",
        keyFeature: { topic: "cva", n: 4 },
        source: "cdn-tia",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following imaging studies is most appropriate for him tonight?",
        options: [
          "Carotid Doppler ultrasound within the next week",
          "Cervical spine X-ray series",
          "CT head and CT angiogram of the head and neck",
          "Non-contrast CT head without angiography",
          "Outpatient MRI brain within one week",
        ],
        correct: 2,
        explanation:
          "CTA shows the dissection, the degree of narrowing and any intracranial occlusion. Doppler can miss distal dissections. Outpatient imaging is too slow for a high-risk TIA.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
      {
        id: "q4",
        kind: "short",
        update: "CTA confirms a right ICA dissection with 60% narrowing and no intracranial occlusion. CT head is normal.",
        prompt: "What are the elements of management?",
        required: 2,
        accept: [
          { id: "antithrombotic", text: "Antithrombotic therapy with an antiplatelet or anticoagulant", match: ["antiplatelet", "asa", "aspirin", "clopidogrel", "anticoagula", "anticoagulation", "heparin", "antithrombotic"] },
          { id: "stroke", text: "Admission or urgent stroke neurology involvement", match: ["admit", "admission", "neurology", "stroke team", "stroke service"] },
          { id: "avoid", text: "Avoid contact sport and neck manipulation", match: ["avoid contact sport", "contact sport", "no hockey", "avoid hockey", "stop hockey", "chiropract", "neck manipulation", "avoid neck", "activity restriction", "avoid strenuous"] },
          { id: "repeat", text: "Repeat vascular imaging in follow-up", match: ["repeat imaging", "follow up imaging", "repeat cta", "follow up cta"] },
          { id: "analgesia", text: "Analgesia for neck pain and headache", match: ["analgesia", "acetaminophen", "analgesic"] },
        ],
        explanation:
          "Antiplatelet and anticoagulant therapy appear similar in preventing stroke after cervical dissection, and either is acceptable. He needs stroke service care, activity restriction and repeat vascular imaging to confirm healing.",
        keyFeature: { topic: "cva", n: 4 },
        source: "csbpr-prev",
      },
    ],
    sources: [CSBPR_ACUTE, CSBPR_PREV, CDN_TIA],
    ...meta,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "cva-14",
    topic: "cva",
    title: "Headache and weakness on warfarin",
    stem:
      "A 69-year-old woman is brought in at 18:30 with sudden headache, vomiting and right-sided weakness that began at 17:50. She has a mechanical mitral valve and takes warfarin. Glucose is 7.4 mmol/L. GCS is 13 (E3 V4 M6). She has a right hemiparesis. A code stroke is called.",
    vitals: { temperature: "36.8°C", pulse: "64/minute", resp: "18/minute", bp: "212/118 mmHg", o2sat: "96% on arrival", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features make intracerebral hemorrhage more likely than ischemic stroke?",
        required: 2,
        accept: [
          { id: "headache", text: "Sudden headache", match: ["headache"] },
          { id: "vomiting", text: "Vomiting", match: ["vomit", "vomiting", "nausea"] },
          { id: "loc", text: "Decreased level of consciousness", match: ["level of consciousness", "loc", "gcs", "drowsy", "decreased consciousness"] },
          { id: "bp", text: "Markedly elevated blood pressure", match: ["blood pressure", "bp", "hypertension", "hypertensive"] },
          { id: "warfarin", text: "Anticoagulation with warfarin", match: ["warfarin", "anticoagula", "anticoagulation", "anticoagulated"] },
        ],
        explanation:
          "Headache, vomiting, early drop in consciousness, very high BP and anticoagulation favour hemorrhage. None of these is reliable enough to skip imaging, which is the only way to tell.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ich",
      },
      {
        id: "q2",
        kind: "short",
        update: "CT shows a 25 mL left basal ganglia hemorrhage without intraventricular extension. INR is 3.4.",
        prompt: "What treatments would reverse her anticoagulation, including the dose of any vitamin?",
        required: 2,
        accept: [
          { id: "pcc", text: "Four-factor prothrombin complex concentrate", match: ["pcc", "prothrombin complex", "octaplex", "beriplex"] },
          { id: "vitk", text: "Vitamin K 10 mg IV", match: ["vitamin k 10", "vitamin k 10mg", "phytonadione 10", "vit k 10"] },
        ],
        unacceptable: [
          { text: "Frozen plasma as first-line reversal", match: ["plasma", "ffp", "fp"] },
          { text: "Oral vitamin K", match: ["oral vitamin k", "vitamin k po", "po vitamin k", "vitamin k 10 mg po"] },
          { text: "Idarucizumab or andexanet", match: ["idarucizumab", "andexanet"] },
        ],
        explanation:
          "PCC corrects the INR within minutes and is preferred over plasma, which is slow and needs large volumes. IV vitamin K 10 mg sustains the correction. Recheck the INR soon after PCC to confirm correction. The mechanical valve does not change the need for immediate reversal in a life-threatening bleed.",
        keyFeature: { topic: "cva", n: 3 },
        source: "nac-pcc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following blood pressure targets is most appropriate in the first hours?",
        options: [
          "Systolic about 140 mmHg, avoiding drops below 130 mmHg",
          "Systolic below 185 mmHg over the first 24 hours",
          "Systolic below 110 mmHg within the first hour",
          "Target mean arterial pressure above 130 mmHg",
          "No treatment unless systolic is above 220 mmHg",
        ],
        correct: 0,
        explanation:
          "In spontaneous ICH with systolic 150 to 220 mmHg, lowering to about 140 mmHg is safe and may limit hematoma growth. Dropping below 130 mmHg is linked to harm. A smooth, sustained reduction matters more than speed.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ich",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What findings would prompt urgent neurosurgical consultation in intracerebral hemorrhage?",
        required: 2,
        accept: [
          { id: "cerebellar", text: "Cerebellar hemorrhage with brainstem compression or hydrocephalus", match: ["cerebellar", "posterior fossa", "brainstem compression"] },
          { id: "hydro", text: "Hydrocephalus", match: ["hydrocephalus", "evd", "ventricular drain"] },
          { id: "ivh", text: "Intraventricular extension", match: ["intraventricular", "ivh"] },
          { id: "deteriorate", text: "Neurological deterioration", match: ["deteriorat", "deterioration", "declining gcs", "decreasing gcs", "worsening"] },
          { id: "mass", text: "Large lobar clot with mass effect or midline shift", match: ["mass effect", "midline shift", "herniation", "large"] },
        ],
        explanation:
          "Cerebellar hemorrhage with compression or hydrocephalus needs surgery. Hydrocephalus needs a ventricular drain. Deterioration or mass effect from a large clot also calls for neurosurgery.",
        keyFeature: { topic: "cva", n: 3 },
        source: "aha-ich",
      },
    ],
    sources: [AHA_ICH, NAC_PCC],
    ...meta,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "cva-15",
    topic: "cva",
    title: "Weakness over three weeks",
    stem:
      "A 57-year-old man is sent in by his family physician with 3 weeks of slowly worsening right arm weakness and word-finding difficulty. He has had morning headaches for 2 weeks that are worse when he coughs. He was treated for non-small cell lung cancer 18 months ago. Glucose is 6.4 mmol/L. He has mild expressive aphasia, a right pronator drift and right arm power 4/5. The optic disc margins are blurred.",
    vitals: { temperature: "36.8°C", pulse: "80/minute", resp: "16/minute", bp: "142/84 mmHg", o2sat: "97% on arrival" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features point away from an acute stroke?",
        required: 3,
        accept: [
          { id: "gradual", text: "Gradual progression over weeks", match: ["gradual", "progressive", "weeks", "subacute", "slowly", "worsening"] },
          { id: "headache", text: "Morning headache worse with cough", match: ["headache", "cough", "morning"] },
          { id: "papilledema", text: "Papilledema", match: ["papilledema", "papilloedema", "disc", "optic"] },
          { id: "cancer", text: "History of lung cancer", match: ["cancer", "malignancy", "lung", "metastas"] },
        ],
        explanation:
          "Stroke is sudden. A deficit that builds over weeks with headache of raised pressure, papilledema and a cancer history suggests a mass such as a brain metastasis.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following initial imaging studies is most appropriate in the emergency department?",
        options: [
          "Carotid and vertebral Doppler ultrasound",
          "CT perfusion and CT angiogram of the head",
          "Electroencephalogram before any imaging",
          "Lumbar puncture with opening pressure",
          "Non-contrast CT head, contrast CT or MRI if lesion seen",
        ],
        correct: 4,
        explanation:
          "Non-contrast CT is quick and shows mass effect and edema. Contrast CT or MRI characterizes the lesion. Lumbar puncture is dangerous with papilledema until a mass is excluded.",
        keyFeature: { topic: "cva", n: 1 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT shows a 3 cm ring-enhancing left frontal lesion with extensive vasogenic edema and 5 mm of midline shift.",
        prompt: "What initial treatments or consultations would you arrange, including the dose of any drug?",
        required: 2,
        accept: [
          { id: "dex", text: "Dexamethasone 10 mg IV load, then 4 mg every 6 hours", match: ["dexamethasone 10", "dexamethasone 10mg", "dexamethasone 8", "dexamethasone 8mg", "dexamethasone 4", "dexamethasone 4mg", "dexamethasone 6", "dexamethasone 6mg", "decadron 10", "decadron 4"] },
          { id: "nsx", text: "Neurosurgery consultation", match: ["neurosurgery", "neurosurgical", "neurosurgeon"] },
          { id: "onc", text: "Oncology involvement and staging", match: ["oncology", "oncologist", "staging"] },
          { id: "mri", text: "MRI brain with gadolinium", match: ["mri", "gadolinium"] },
          { id: "ppi", text: "Gastric protection with steroids", match: ["ppi", "pantoprazole", "proton pump", "gastric protection"] },
        ],
        unacceptable: [
          { text: "Thrombolysis", match: ["tenecteplase", "alteplase", "tnk", "thrombolysis"], dangerous: true },
          { text: "Seizure prophylaxis without a seizure", match: ["seizure prophylaxi", "prophylactic levetiracetam", "prophylactic phenytoin"] },
        ],
        explanation:
          "Dexamethasone reduces vasogenic edema quickly. Neurosurgery and oncology guide biopsy or resection. Anticonvulsants are not routinely started in patients who have not had a seizure.",
        keyFeature: { topic: "cva", n: 1 },
        source: "brain-mets",
      },
    ],
    sources: [CSBPR_ACUTE, BRAIN_METS],
    ...meta,
  },
];
