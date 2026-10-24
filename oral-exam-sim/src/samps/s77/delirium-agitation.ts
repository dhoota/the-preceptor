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
      "You are working in a community hospital emergency department. A 31-year-old woman is brought to the emergency department by her partner with 3 days of confusion and restlessness. Seven weeks ago she had a sleeve gastrectomy. Since then she has vomited after most meals and has eaten little for a month. Yesterday a walk-in clinic gave her 2 L of IV dextrose 5% in saline for dehydration. Tonight she asked her partner who he was and tried to walk out of the house in her socks. She has generalized anxiety disorder, treated with the same dose of sertraline for 2 years, and her partner wonders whether this is a panic attack. She is restless, answers some questions and then drifts off the topic. There is no neck stiffness or clonus. Capillary glucose is 4.9 mmol/L.",
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
          "Confusion, nystagmus and gait ataxia after weeks of vomiting on a poor diet are Wernicke encephalopathy from thiamine deficiency, and she shows all four signs used to define it: diet, eye signs, cerebellar signs and altered mental state. In the bariatric review, 94% of cases arose within 6 months of surgery, 90% followed frequent vomiting, and IV glucose given without thiamine, as she had yesterday, was a risk factor. Vitamin B12 stores last years, and deficiency does not cause sudden nystagmus. Her sertraline dose is unchanged and she has no clonus. Late dumping causes hypoglycemia after meals, and her glucose is 4.9 mmol/L. A panic attack does not cause nystagmus or ataxia.",
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
          "For severe agitation in a child without a known medical cause, the BETA consensus suggests lorazepam with haloperidol or chlorpromazine, or olanzapine alone, and warns that olanzapine should not be given within 1 hour of a benzodiazepine. He had lorazepam 40 minutes ago, so haloperidol 2.5 mg IM, inside the 0.5 to 5 mg range, is added to it. Lorazepam 4 mg would bring his total to 5 mg, above the 4 mg daily maximum BETA lists for a child. Diphenhydramine is listed for moderate, not severe, agitation. Ketamine at about 4 mg/kg is not among the BETA options for agitated youth.",
        keyFeature: kf(4),
        source: "beta-peds-2019",
      },
    ],
    sources: [S.betaPeds],
    ...META,
  },

  /* 41 Poison in the water ------------------------------------------------- */
  {
    id: "delirium-agitation-41",
    topic: "delirium-agitation",
    title: "Shouting at the walls of his apartment",
    stem:
      "You are working in a community hospital emergency department in northern Ontario. A 26-year-old man is brought to the emergency department by police after his landlord heard him shouting at the walls of his apartment for most of the night. He has schizophrenia and stopped taking risperidone 2 months ago. He uses no alcohol or drugs, and has never been violent. He is pacing the interview room and shouting that the nurses are putting poison in his water. He is alert, knows the date and place, and follows the conversation. There is no tremor, rigidity or clonus. Capillary glucose is 5.7 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "132/80 mmHg", o2sat: "99% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following responses to his fear about the water best fits verbal de-escalation?",
        options: ["I have not seen that, but you sound afraid", "Let us test the water to prove it is safe", "Nobody here is putting poison in your water", "Security will stay if you keep saying that", "You are right, we will change your nurse"],
        correct: 0,
        explanation:
          "The BETA de-escalation consensus advises agreeing with what is true and, when honest agreement is not possible, agreeing to disagree, without feigning agreement with a delusion and while acknowledging the patient's experience. Saying that you have not seen it while naming his fear does exactly that. Changing his nurse feigns agreement and confirms the delusion. Flat contradiction and an offer to test the water turn his belief into an argument about facts that he will not lose. Warning him about security is a threat, which the consensus says provokes rather than calms.",
        keyFeature: kf(3),
        source: "beta-deescalation-2012",
      },
      {
        id: "q2",
        kind: "single",
        update: "He stops pacing and says he has not slept for 3 nights. You think medication will help him.",
        prompt: "Which of the following is the most appropriate way to offer him medication?",
        options: ["Give it by injection while he is calm", "Hide it in a cup of juice", "Offer a choice of tablet or wafer", "Tell him it is a vitamin for sleep", "Wait until he asks for medication"],
        correct: 2,
        explanation:
          "He is now cooperative, and the BETA consensus statements advise offering oral medication over an injection to a cooperative patient and involving him in the choice of agent and route. Offering a choice of tablet or orally disintegrating wafer gives him some control, which the de-escalation consensus names as a way to calm a patient who feels powerless. Hiding medication in juice or calling it a vitamin is deception, and it would confirm his fear that something is being put in his drinks. An injection is not needed for a calm patient, and waiting for him to ask delays help he needs.",
        keyFeature: kf(3),
        source: "beta-deescalation-2012",
      },
      {
        id: "q3",
        kind: "single",
        update: "An hour later, before taking anything, he throws a chair at a nurse. Verbal de-escalation fails, he is placed in restraints and he is given haloperidol 5 mg IM. Thirty minutes later he is still straining and spitting at staff.",
        prompt: "Which of the following is the most appropriate medication to give him now?",
        options: ["diphenhydramine 50 mg IM", "haloperidol 5 mg IM", "ketamine 300 mg IM", "lorazepam 2 mg IM", "olanzapine 10 mg IM"],
        correct: 3,
        explanation:
          "The BETA psychopharmacology consensus states that when one dose of an antipsychotic is not enough, adding a benzodiazepine such as lorazepam is preferred to more of the same antipsychotic, and the combination also lowers the risk of extrapyramidal effects. A second haloperidol dose, or olanzapine on top of it, stacks dopamine blockade without that benefit. Diphenhydramine can prevent dystonia but is a weak calming agent here. Ketamine at about 4 mg/kg is not part of the consensus and brings airway risk to a patient who is already restrained and not in immediate danger. The goal is calm, not sleep.",
        keyFeature: kf(4),
        source: "beta-psychopharm-2012",
      },
      {
        id: "q4",
        kind: "menu",
        update: "By morning he has taken risperidone, is calm and has been out of restraints for 6 hours. He asks you why he was tied down.",
        prompt: "Which of the following are the most appropriate parts of your debrief with him?",
        options: ["Ask how he saw the events", "Avoid the topic to prevent upset", "Explain why restraint was needed", "Leave the debrief to the ward team", "Plan what to do if anger builds", "Promise he will not be restrained again", "Remind him of possible assault charges", "Tell him it was hospital policy"],
        select: 3,
        correct: [0, 2, 4],
        explanation:
          "The BETA de-escalation consensus asks the clinician who ordered an involuntary intervention to debrief the patient and rebuild the relationship. That means explaining why the intervention was needed, letting him describe the events from his point of view and exploring what he and staff can do next time anger builds. Avoiding the topic or passing it to the ward team leaves his question unanswered by the person who made the decision. Blaming policy does not explain the clinical reason. A promise never to restrain him again may not be kept, and raising charges is a threat that damages trust.",
        keyFeature: kf(3),
        source: "beta-deescalation-2012",
      },
    ],
    sources: [S.richmond, S.wilson],
    ...META,
  },

  /* 42 A fall at the bus shelter ------------------------------------------- */
  {
    id: "delirium-agitation-42",
    topic: "delirium-agitation",
    title: "A fall on the ice at a bus shelter",
    stem:
      "You are working in an emergency department in Ontario. A 63-year-old man is brought to the emergency department by ambulance after he slipped on ice at a bus shelter and cut his scalp. A bystander saw the fall and says he did not lose consciousness. Paramedics report that he did not answer any of their questions, made loud sounds and pushed their hands away. There is no odour of alcohol. In the department he is agitated, moves his hands quickly and pulls away when the nurse tries to start an IV. He watches each person's face closely. His pupils are equal and reactive and he moves all limbs normally. A 3 cm occipital scalp laceration has stopped bleeding. There is no other injury. Capillary glucose is 6.2 mmol/L.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "16/minute", bp: "148/86 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in assessing his mental status?",
        options: ["Ask the questions again more loudly", "Repeat the questions more slowly", "Score the CAM from his behaviour", "Try written questions on paper", "Wait until he settles to ask again"],
        correct: 3,
        explanation:
          "The hallmark of delirium is an acute change in attention and cognition, and hearing impairment is both a risk factor for delirium and a reason a patient can look confused when he is not. He watches faces closely and gestures with purpose, which suggests someone trying to communicate rather than someone who cannot attend. Written questions test whether he can follow, orient and answer once the hearing barrier is removed. Louder or slower speech does not help a person who cannot hear it. Scoring a delirium tool from behaviour alone would mislabel a communication problem, and waiting leaves the question unanswered while his distress grows.",
        keyFeature: kf(1),
        source: "gower-ed-delirium",
      },
      {
        id: "q2",
        kind: "single",
        update: "A card in his wallet says that he is Deaf, uses American Sign Language (ASL) and needs an interpreter. It gives his wife's phone number.",
        prompt: "Which of the following is the most appropriate step to reduce his agitation?",
        options: ["Ask a paramedic who knows some signs", "Give lorazepam 1 mg PO to settle him", "Have security wait at his bedside", "Request a qualified ASL interpreter", "Use written notes until discharge"],
        correct: 3,
        explanation:
          "The BETA de-escalation consensus advises establishing real contact with the patient and asking what he wants, and his card says plainly that he needs an interpreter. A qualified interpreter, in person or by video, lets him take part in his care and removes the cause of his distress. A paramedic who knows a few signs risks errors on matters that need precision, such as consent. Written notes are slow and may be limited if English is his second language. Security at the bedside is a show of force that frightens an anxious patient, and he needs to be understood, not sedated.",
        keyFeature: kf(3),
        source: "beta-deescalation-2012",
      },
      {
        id: "q3",
        kind: "single",
        update: "A video interpreter will be available in 40 minutes. The resident wants to staple the laceration now and says that he cannot consent because he cannot hear.",
        prompt: "Which of the following is the most appropriate approach to consent for the scalp repair?",
        options: ["Ask his wife to consent by phone", "Repair it now as emergency treatment", "Seek a formal capacity assessment", "Use his nod as implied consent", "Wait to consent through the interpreter"],
        correct: 4,
        explanation:
          "Under the Health Care Consent Act he is presumed capable, and deafness is a barrier to communication, not a loss of capacity. Treatment without consent of an apparently capable person who cannot communicate is allowed only in an emergency, after reasonable steps to find a way to communicate have failed, and when the delay would prolong suffering or risk serious harm. A laceration that has stopped bleeding can wait 40 minutes for the interpreter. His wife can decide only if he is incapable. Nothing suggests incapacity, and a nod to words he cannot hear is not informed consent.",
        keyFeature: kf(5),
        source: "hcca",
      },
      {
        id: "q4",
        kind: "single",
        update: "While you wait, a security guard offers to hold his arms so that the IV can be started, and a nurse suggests haloperidol 5 mg IM to settle him.",
        prompt: "Which of the following is the most appropriate response to these two suggestions?",
        options: ["Allow the hold without the drug", "Defer the IV for the interpreter", "Give the drug without the hold", "Hold him only while giving the drug", "Use both to finish care sooner"],
        correct: 1,
        explanation:
          "The BETA restraint consensus allows physical or chemical restraint only when less restrictive measures have failed and the patient is an immediate danger to himself or others. He is pulling away from a procedure he does not understand, not threatening anyone, and the IV is not urgent. A drug given to control behaviour rather than to treat his condition is itself a restraint. Holding him, sedating him or both would treat a communication barrier with force and would likely make him more distressed. The IV can wait 40 minutes until it can be explained.",
        keyFeature: kf(4),
        source: "beta-restraint-2012",
      },
    ],
    sources: [S.gower, S.richmond, S.hcca, S.knox],
    ...META,
  },

  /* 43 Cows he sold years ago ---------------------------------------------- */
  {
    id: "delirium-agitation-43",
    topic: "delirium-agitation",
    title: "Found in the barn at dawn",
    stem:
      "You are working in a rural hospital emergency department in Ontario. A 79-year-old man is brought to the emergency department by his neighbour, who found him in his barn at 06:00 in pyjamas, saying he had to milk cows that he sold 10 years ago. He is a widower who lives alone and has type 2 diabetes treated with metformin. He has no attorney for personal care, and his only relative is a nephew in British Columbia. The neighbour has known him for 30 years and visits most weeks. He is restless, picks at his blanket and cannot say the days of the week backward. He is wearing thick wool socks. There is no neck stiffness, no focal neurological deficit and no sign of head injury. Capillary glucose is 13.8 mmol/L.",
    vitals: { temperature: "38.1°C oral", pulse: "102/minute", resp: "20/minute", bp: "136/78 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions to his neighbour best helps separate delirium from dementia?",
        options: ["Does dementia run in his family?", "Does he drink alcohol at home?", "Has he lost weight this year?", "What medicines does he take?", "When did he last seem his usual self?"],
        correct: 4,
        explanation:
          "Delirium is an acute change in attention and cognition over hours to days, while dementia develops over months to years, so the deciding fact is when he was last at his usual baseline. The neighbour, who visits most weeks, is the one person here who can date the change. A family history of dementia and weight loss over a year speak to slow processes, not to an acute change. Alcohol use and his medicines matter when searching for a cause, but they do not show whether this is new.",
        keyFeature: kf(1),
        source: "gower-ed-delirium",
      },
      {
        id: "q2",
        kind: "single",
        update: "The neighbour saw him 4 days ago, chatting and doing his farm accounts. A urinalysis is normal and a chest radiograph is clear.",
        prompt: "Which of the following is the most important next step in finding the cause of his delirium?",
        options: ["A full skin exam including the feet", "CT of the head without contrast", "Lumbar puncture for CSF analysis", "Serum ammonia and liver enzymes", "Urine screen for drugs of abuse"],
        correct: 0,
        explanation:
          "He has fever and delirium, and his urine and chest radiograph have not shown a source, so the search must continue with a thorough head-to-toe examination, which is essential when the cause is not obvious. With diabetes and thick socks still on, his feet have not been seen and are a common hidden site of infection. CT head adds little with no focal deficit, injury or anticoagulant. Lumbar puncture is considered if no source is found, and he has no neck stiffness. He has no liver disease to suggest a raised ammonia, and nothing points to drug use.",
        keyFeature: kf(2),
        source: "gower-ed-delirium",
      },
      {
        id: "q3",
        kind: "single",
        update: "His left foot is red, hot and swollen around an ulcer under the big toe. He refuses IV antibiotics so that he can go back to his cows, and he cannot say what might happen without them.",
        prompt: "Which of the following should be asked to consent to IV antibiotics on his behalf?",
        options: ["His family physician", "His neighbour of 30 years", "His nephew by telephone", "The Consent and Capacity Board", "The Public Guardian and Trustee"],
        correct: 2,
        explanation:
          "He cannot appreciate the consequences of refusing, so he is incapable for this decision. With no guardian, attorney, spouse, child, parent or sibling, the Health Care Consent Act turns to any other relative, and a nephew qualifies. A person counts as available if he can be reached within a reasonable time, and a phone call meets that test. The Public Guardian and Trustee decides only when no one on the list meets the requirements. A neighbour, however close, is not on the list, and neither is his family physician. The Board hears applications but does not give bedside consent.",
        keyFeature: kf(5),
        source: "hcca",
      },
      {
        id: "q4",
        kind: "single",
        update: "His nephew says that he has not spoken to his uncle in 20 years and is not willing to make any decisions for him.",
        prompt: "Which of the following is now the most appropriate source of consent for his antibiotics?",
        options: ["His neighbour of 30 years", "His nephew, as the only relative", "Implied consent from his arrival", "The Consent and Capacity Board", "The Public Guardian and Trustee"],
        correct: 4,
        explanation:
          "A substitute decision maker must be capable, available and willing to take on the responsibility, so a nephew who refuses the role does not meet the requirements. When no person on the list qualifies, the Act names the Public Guardian and Trustee as the decision maker. If the delay to reach that office would put him at risk of serious harm, emergency treatment without consent is allowed in the meantime. His neighbour still has no standing, the Board does not consent to treatment, and arriving at the hospital is not consent to a treatment he is refusing.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [S.gower, S.hcca],
    ...META,
  },
];
