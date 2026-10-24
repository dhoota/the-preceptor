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

  /* 40 Outburst over a game console ---------------------------------------- */
  {
    id: "delirium-agitation-40",
    topic: "delirium-agitation",
    title: "A boy who would not settle at home",
    stem:
      "You are working in a community hospital emergency department. An 11-year-old boy is brought to the emergency department by his father at 21:00 after an outburst at home. When his father took away his game console, he punched holes in the wall, threw a chair and threatened his younger sister. He has attention deficit hyperactivity disorder and oppositional defiant disorder and takes long-acting methylphenidate 36 mg each morning. He has had similar outbursts before, but none this severe. He has no other illness and takes no other medication. In triage he is shouting and kicking the waiting room chairs while other children and parents sit nearby. He knows where he is and says he came because he broke the wall.",
    vitals: { temperature: "36.9°C oral", pulse: "112/minute", resp: "22/minute", bp: "118/70 mmHg", o2sat: "99% on room air", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings, if present, would most suggest delirium rather than a behavioural crisis?",
        options: ["Breaking objects in anger", "Running away from home", "Seeing bugs on the walls", "Swearing at his father", "Threats to hurt his sister"],
        correct: 2,
        explanation:
          "Psychosis is rare before adolescence, so the BETA consensus advises that hallucinations in a child first prompt a search for delirium, catatonia or a problem with communication, and seeing insects that are not there is the kind of visual misperception typical of delirium. Breaking objects, running away, swearing at a parent and threats toward a sibling are common in a behavioural crisis and say nothing about his attention or level of consciousness. He knows where he is and why he came, which already argues against delirium.",
        keyFeature: kf(1),
        source: "beta-peds-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "He is moved to a quiet room with nothing loose in it. His father stands in the doorway shouting that he will sell the console. Each time he does, the boy screams and kicks the wall.",
        prompt: "Which of the following is the most appropriate next step to reduce his agitation?",
        options: ["Ask his father to wait nearby outside", "Call police to stand in the room", "Give lorazepam 1 mg IM now", "Let his father keep setting limits", "Place him in four point restraints"],
        correct: 0,
        explanation:
          "Each outburst follows his father's shouting, and the BETA consensus lists separation from family, as well as reunification, among the first measures to weigh, depending on which calms the child. Asking his father to wait nearby keeps him involved while removing the trigger. Shouting about selling the console is provocation rather than a calm, firm limit, so letting it continue will keep the cycle going. An IM injection and restraint skip verbal and environmental measures that have not yet been tried in the quiet room. Police standing in the room adds a show of force for a frightened child.",
        keyFeature: kf(3),
        source: "beta-peds-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "With his father outside he sits down on the floor, but he is still shouting and kicking at the bed frame.",
        prompt: "Which of the following statements to him best fits recommended de-escalation for a child?",
        options: ["Kicking is not okay. Thanks for sitting down", "Tell me again why you broke the wall", "The console comes back once you calm down", "The police will come if you keep kicking", "You are too old to act like this"],
        correct: 0,
        explanation:
          "The BETA consensus advises clear, concrete language at the child's level, firm limits on unacceptable behaviour and specific praise for cooperation, and this statement does both while he is sitting on the floor. Promising the console rewards the outburst and makes a promise that belongs to his father. Threatening police turns a limit into a threat. Asking him to go back over why he broke the wall invites more anger before he is calm, and shaming him about his age is humiliating and tends to escalate.",
        keyFeature: kf(3),
        source: "beta-peds-2019",
      },
      {
        id: "q4",
        kind: "single",
        update: "He accepts lorazepam 1 mg PO. Forty minutes later he punches a nurse and tries to bite a security guard. He refuses more medication by mouth, and staff will need to hold him briefly for an injection.",
        prompt: "Which of the following is the most appropriate medication to give him now?",
        options: ["diphenhydramine 50 mg IM", "haloperidol 2.5 mg IM", "ketamine 150 mg IM", "lorazepam 4 mg IM", "olanzapine 5 mg IM"],
        correct: 1,
        explanation:
          "For severe agitation in a child without a known medical cause, the BETA consensus suggests lorazepam with haloperidol, or olanzapine alone, and warns that olanzapine should not be given within 1 hour of a benzodiazepine. He had lorazepam 40 minutes ago, so haloperidol 2.5 mg IM, inside the 0.5 to 5 mg range, is added to it. Lorazepam 4 mg would bring his total to 5 mg, above the 4 mg daily maximum BETA lists for a child. Diphenhydramine is listed for moderate, not severe, agitation. Ketamine at about 4 mg/kg is not among the BETA options for agitated youth.",
        keyFeature: kf(4),
        source: "beta-peds-2019",
      },
    ],
    sources: [S.betaPeds],
    ...META,
  },
];
