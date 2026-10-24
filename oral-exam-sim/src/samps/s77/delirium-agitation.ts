// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const kf = (n: number) => ({ topic: "delirium-agitation", n });

const S = {
  oregan: { id: "oregan-attention", citation: "O'Regan NA, Ryan DJ, Boland E, and colleagues. Attention! A good bedside test for delirium? Journal of Neurology, Neurosurgery and Psychiatry. 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4173985/" },
  aasheim: { id: "aasheim-bariatric-we", citation: "Aasheim ET. Wernicke encephalopathy after bariatric surgery: a systematic review. Annals of Surgery. 2008." },
  arts: { id: "arts-korsakoff", citation: "Arts NJ, Walvoort SJ, Kessels RP. Korsakoff's syndrome: a critical review. Neuropsychiatric Disease and Treatment. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5708199/" },
  betaPeds: { id: "beta-peds-2019", citation: "Gerson R, Malas N, Feuer V, and colleagues. Best practices for evaluation and treatment of agitated children and adolescents (BETA) in the emergency department. Consensus statement of the American Association for Emergency Psychiatry. Western Journal of Emergency Medicine. 2019.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6404720/" },
  richmond: { id: "beta-deescalation-2012", citation: "Richmond JS, Berlin JS, Fishkind AB, and colleagues. Verbal de-escalation of the agitated patient. Consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. Western Journal of Emergency Medicine. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3298202/" },
  wilson: { id: "beta-psychopharm-2012", citation: "Wilson MP, Pepper D, Currier GW, and colleagues. The psychopharmacology of agitation. Consensus statement of the American Association for Emergency Psychiatry Project BETA Psychopharmacology Workgroup. Western Journal of Emergency Medicine. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3298219/" },
  knox: { id: "beta-restraint-2012", citation: "Knox DK, Holloman GH Jr. Use and avoidance of seclusion and restraint. Consensus statement of the American Association for Emergency Psychiatry Project BETA Seclusion and Restraint Workgroup. Western Journal of Emergency Medicine. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3298214/" },
  gower: { id: "gower-ed-delirium", citation: "Gower LEJ, O'Keefe Gatewood M, Kang CS. Emergency department management of delirium in the elderly. Western Journal of Emergency Medicine. 2012.", url: "https://westjem.com/articles/emergency-department-management-of-delirium-in-the-elderly.html" },
  hcca: { id: "hcca", citation: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A (Ontario). 1996, as amended.", url: "https://www.ontario.ca/laws/statute/96h02" },
} satisfies Record<string, Source>;

export const DELIRIUM_AGITATION_S77: Samp[] = [
  /* 39 Weeks of vomiting after weight loss surgery ------------------------- */
  {
    id: "delirium-agitation-39",
    topic: "delirium-agitation",
    title: "Restless weeks after her operation",
    stem:
      "You are working in a community hospital emergency department. A 31-year-old woman is brought to the emergency department by her partner with 3 days of confusion and restlessness. Seven weeks ago she had a sleeve gastrectomy. Since then she has vomited after most meals and has eaten little for a month. Yesterday a walk-in clinic gave her 2 L of IV dextrose 5% in saline for dehydration. Tonight she asked her partner who he was and tried to walk out of the house in her socks. She has generalized anxiety disorder, treated with the same dose of sertraline for 2 years, and her partner wonders whether this is a panic attack. She is restless, answers some questions and then drifts off the topic. There is no neck stiffness. Capillary glucose is 4.9 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "108/minute", resp: "18/minute", bp: "104/66 mmHg", o2sat: "98% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside tests best checks for the core feature of delirium in her?",
        options: ["Clock drawing test", "Months of the year backward", "Naming of common objects", "Orientation to place and date", "Recall of three words at 5 minutes"],
        correct: 1,
        explanation:
          "Inattention is the core feature of delirium, so the bedside test should measure attention, and drifting off the topic already hints at it. Saying the months of the year backward is a quick attention test that detected delirium well in hospital inpatients, most precisely when it was paired with a judgement of whether the patient seemed confused. Recall of three words tests new learning, which fails in both delirium and dementia. Orientation is also lost in both and can be spared early. Clock drawing tests planning and visuospatial skill, and naming tests language, so neither isolates attention.",
        keyFeature: kf(1),
        source: "oregan-attention",
      },
      {
        id: "q2",
        kind: "single",
        update: "She gives the months backward only as far as October and then stops. She has horizontal nystagmus on looking to either side and cannot stand without help because of a wide-based, unsteady gait. Sodium is 137 mmol/L and creatinine 64 umol/L.",
        prompt: "Which of the following is the most likely cause of her confusion?",
        options: ["Late dumping with hypoglycemia", "Panic attack with derealization", "Serotonin toxicity from sertraline", "Thiamine deficiency", "Vitamin B12 deficiency"],
        correct: 3,
        explanation:
          "Confusion, nystagmus and gait ataxia after weeks of vomiting on a poor diet are Wernicke encephalopathy from thiamine deficiency, and she shows all four signs used to define it: diet, eye signs, cerebellar signs and altered mental state. In the bariatric review, 94% of cases arose within 6 months of surgery, 90% followed frequent vomiting, and IV glucose given without thiamine, as she had yesterday, was a risk factor. Vitamin B12 stores last years, and deficiency does not cause sudden nystagmus. Her sertraline dose is unchanged and she has no clonus described. Late dumping causes hypoglycemia after meals, and her glucose is 4.9 mmol/L. A panic attack does not cause nystagmus or ataxia.",
        keyFeature: kf(2),
        source: "aasheim-bariatric-we",
      },
      {
        id: "q3",
        kind: "single",
        update: "MRI of the brain can be done tomorrow morning. A serum thiamine level can be sent, but the result takes a week.",
        prompt: "Which of the following is the most appropriate next step in her treatment?",
        options: ["Await the MRI before treatment", "Give IV thiamine now", "Oral thiamine with meals", "Send a thiamine level first", "Start IV dextrose 10%"],
        correct: 1,
        explanation:
          "Wernicke encephalopathy is a clinical diagnosis, and parenteral thiamine is given as soon as it is suspected. In the bariatric review MRI showed the typical lesions in only 14 of 30 patients (47%), so a normal scan would not exclude it, and waiting for imaging or a level delays treatment of a disorder that left 49% of patients with incomplete recovery. Oral thiamine is unreliable while she vomits after most meals. More dextrose without thiamine was itself a risk factor in the review, and her glucose is 4.9 mmol/L, so she has no need for it.",
        keyFeature: kf(2),
        source: "aasheim-bariatric-we",
      },
      {
        id: "q4",
        kind: "single",
        update: "Five days after starting IV thiamine her nystagmus has gone. She is alert and gives the months backward without error, but recalls none of three words at 5 minutes and describes a shopping trip this morning that never happened.",
        prompt: "Which of the following best describes her current cognitive state?",
        options: ["Dissociative amnesia", "Early-onset Alzheimer disease", "Korsakoff syndrome", "Persisting delirium", "Transient global amnesia"],
        correct: 2,
        explanation:
          "She is now alert and attentive but cannot form new memories and fills the gap with invented events, which is Korsakoff syndrome, the amnestic state that can follow Wernicke encephalopathy. Delirium is unlikely because her attention, its core feature, is now intact on the months backward. Transient global amnesia clears within 24 hours and does not cause confabulation. Dissociative amnesia is a stress-linked loss of personal memories, not an inability to learn new ones. Alzheimer disease develops over years rather than right after a nutritional illness.",
        keyFeature: kf(1),
        source: "arts-korsakoff",
      },
    ],
    sources: [S.oregan, S.aasheim, S.arts],
    ...META,
  },
];
