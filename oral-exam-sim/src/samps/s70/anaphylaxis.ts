// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  wao: { id: "wao-2020", citation: "Cardona V, Ansotegui IJ, Ebisawa M, and colleagues. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/" },
  carlisle: { id: "carlisle-infant", citation: "Carlisle A, Lieberman J. Clinical management of infant anaphylaxis. J Asthma Allergy. 2021.", url: "https://www.dovepress.com/clinical-management-of-infant-anaphylaxis-peer-reviewed-fulltext-article-JAA" },
  fpies: { id: "fpies-consensus", citation: "Nowak-Wegrzyn A, Chehade M, Groetch ME, and colleagues. International consensus guidelines for the diagnosis and management of food protein-induced enterocolitis syndrome: executive summary. J Allergy Clin Immunol. 2017." },
  cig: { id: "cig-contraindications", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 2. Contraindications, precautions and concerns. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-2-vaccine-safety/page-3-contraindications-precautions-concerns.html" },
  csaci: { id: "csaci-settings", citation: "Canadian Society of Allergy and Clinical Immunology. Anaphylaxis in schools and other settings. 3rd edition. 2015.", url: "https://csaci.ca/EN/files/basic-html/page16.html" },
  csaciProtocol: { id: "csaci-protocol", citation: "Canadian Society of Allergy and Clinical Immunology. Anaphylaxis in schools and other settings. 3rd edition. Emergency protocol. 2015.", url: "https://csaci.ca/EN/files/basic-html/page8.html" },
  shmuely: { id: "shmuely-syncope", citation: "Shmuely S, Bauer PR, van Zwet EW, van Dijk JG, Thijs RD. Differentiating motor phenomena in tilt-induced syncope and convulsive seizures. Neurology. 2018." },
  rcuk: { id: "rcuk-refractory", citation: "Resuscitation Council UK. Refractory anaphylaxis algorithm. Guidelines 2021.", url: "https://resus.org.uk/media/334/download" },
  whyte: { id: "whyte-anaphylaxis", citation: "Whyte AF, Soar J, Dodd A, Hughes A, Sargant N, Turner PJ. Emergency treatment of anaphylaxis: concise clinical guidance. Clin Med (Lond). 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9345203/" },
  satoh: { id: "satoh-buckwheat", citation: "Satoh R, Jensen-Jarolim E, Teshima R. Understanding buckwheat allergies for the management of allergic reactions in humans and animals. Breed Sci. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7180145/" },
  hc: { id: "hc-allergens", citation: "Health Canada. Food allergies and priority food allergens. Modified 2026.", url: "https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-allergies-intolerances/food-allergies.html" },
} satisfies Record<string, Source>;

export const ANAPHYLAXIS_S70: Samp[] = [
  /* 48 Collapse in the garden with a known aneurysm ------------------------ */
  {
    id: "anaphylaxis-48",
    topic: "anaphylaxis",
    alsoTopics: ["shock"],
    title: "Older man found in his vegetable garden",
    stem:
      "A 71-year-old man is brought to the emergency department by ambulance after his wife found him collapsed in their vegetable garden. When she reached him he was scratching at his neck and chest and said his stomach was cramping. He then vomited and had a loose stool. He has hypertension treated with amlodipine and a 4.2 cm abdominal aortic aneurysm under yearly ultrasound surveillance. He is drowsy but answers questions. He is still wearing long-sleeved coveralls buttoned to the neck and a wide-brimmed hat. His abdomen is soft and mildly tender throughout, with no pulsatile mass. Bedside ultrasound shows a 4.3 cm infrarenal aorta, no free fluid, a small hyperdynamic left ventricle and a collapsed IVC.",
    vitals: { temperature: "36.9°C oral", pulse: "124/minute", resp: "24/minute", bp: "76/40 mmHg", o2sat: "94% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important next step in assessing the cause of his shock?",
        options: ["CT angiogram of the aorta", "Digital rectal examination", "Full skin exam after undressing", "Orthostatic vital signs", "Serial abdominal examinations"],
        correct: 2,
        explanation:
          "He was scratching before he collapsed and then had cramps, vomiting and diarrhea, so a reaction involving the skin and gut is likely, and his coveralls and hat hide nearly all of his skin. Fully exposing a shocked patient is part of the primary survey and can show hives, flushing or a sting in seconds. His aorta measures 4.3 cm against 4.2 cm on surveillance with no free fluid, and a patient with a pressure of 76/40 mmHg should not leave the resuscitation room for CT before a treatable cause has been looked for. Orthostatic vital signs are unsafe in shock. A rectal examination looks for bleeding that nothing here suggests, and serial abdominal examinations delay the diagnosis.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao-2020",
      },
      {
        id: "q2",
        kind: "single",
        update: "Under the coveralls there are raised hives over his chest, back and thighs. A honeybee stinger is embedded in the skin behind his left ear.",
        prompt: "Which of the following is the most likely cause of his shock?",
        options: ["Acute mesenteric ischemia", "Anaphylaxis to a bee sting", "Inferior myocardial infarction", "Ruptured aortic aneurysm", "Septic shock from colitis"],
        correct: 1,
        explanation:
          "Generalized hives with cramps, vomiting, diarrhea and a blood pressure of 76/40 mmHg minutes after a bee sting meet the criteria for anaphylaxis, which involves the skin, the gut and the circulation. The small hyperdynamic ventricle and collapsed IVC fit the vasodilation and capillary leak of anaphylaxis. Rupture of his aneurysm remains a concern in any shocked patient who has one, but the aorta has not grown, there is no free fluid and rupture does not cause hives. Mesenteric ischemia, colitis with sepsis and an inferior infarction would not explain sudden generalized hives after a sting.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "The nurse is worried that epinephrine will raise his blood pressure and strain his aneurysm.",
        prompt: "Which of the following is the most appropriate first treatment for him?",
        options: ["diphenhydramine 50 mg IV", "epinephrine 0.15 mg IM", "epinephrine 0.5 mg IM", "epinephrine 0.1 mg IV push", "norepinephrine infusion IV"],
        correct: 2,
        explanation:
          "Epinephrine 0.01 mg/kg IM, to a maximum of 0.5 mg, is the first treatment for anaphylaxis, and at 80 kg he receives the full 0.5 mg in the anterolateral thigh, repeated every 5 to 15 minutes as needed. Age, vascular disease and an aneurysm are not contraindications, and untreated anaphylactic shock is the immediate threat to his life. A reduced dose of 0.15 mg undertreats him. An IV push carries a higher risk of dysrhythmia and dangerous hypertension and is kept for arrest or for specialists. Norepinephrine raises pressure but lacks the beta effects that relieve bronchospasm and mediator release. Diphenhydramine does not treat shock.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "He recovers after two doses of IM epinephrine and 2 L of crystalloid. A serum tryptase drawn 1 hour after his collapse is 18.6 mcg/L. A baseline tryptase drawn 2 days later is 6.0 mcg/L.",
        prompt: "Which of the following best describes the meaning of his two tryptase results?",
        options: ["Confirms acute mast cell activation", "Excludes anaphylaxis as the cause", "Points to systemic mastocytosis", "Uninterpretable without IgE testing", "Within normal day to day variation"],
        correct: 0,
        explanation:
          "A rise in tryptase above 1.2 times the baseline plus 2 confirms acute mast cell activation. His threshold is 1.2 x 6.0 + 2 = 9.2 mcg/L, and his acute value of 18.6 mcg/L is about twice that, which supports anaphylaxis as the cause of his collapse. It was drawn at 1 hour, close to the peak at 1 to 2 hours. A baseline of 6.0 mcg/L is normal and does not suggest mastocytosis, which raises the baseline itself. The rise is far beyond day to day variation, and tryptase is interpreted on its own without IgE results.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "wao-2020",
      },
    ],
    sources: [S.wao],
    ...META,
  },

  /* 49 Infant and a first taste of egg -------------------------------------- */
  {
    id: "anaphylaxis-49",
    topic: "anaphylaxis",
    title: "Pale infant after lunch",
    stem:
      "You are working in a community hospital emergency department. A 10-month-old boy is brought in by his father 35 minutes after his first taste of scrambled egg at lunch. Within 10 minutes a few hives appeared around his mouth and he began rubbing his ears. He then vomited three times. His father says he has become pale, quiet and floppy and no longer wants to play. The hives around his mouth have faded. He has moderate eczema. He has had no fever or recent illness, and his immunizations are up to date for his age. He lies still on his father's lap and responds weakly to his name. His skin is pale and mottled, and capillary refill is 4 seconds. His chest is clear and there is no stridor. His capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "36.9°C rectal", pulse: "182/minute", resp: "40/minute", bp: "68/40 mmHg", o2sat: "97% on room air", weight: "9 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for this infant?",
        options: ["Anaphylaxis to egg", "Bacterial sepsis", "Food protein enterocolitis to egg", "Ileocolic intussusception", "Viral gastroenteritis"],
        correct: 0,
        explanation:
          "Hives and ear rubbing within 10 minutes of a first exposure to egg, then repeated vomiting, then pallor, mottling, floppiness and a capillary refill of 4 seconds, involve the skin, the gut and the circulation, which is anaphylaxis. Infants cannot report itch or throat symptoms, so rubbing, fussiness and sudden quietness stand in for them. Food protein-induced enterocolitis also follows a new food and causes vomiting and lethargy, but the vomiting begins 1 to 4 hours after the meal and there are no hives or other skin or respiratory signs. Intussusception, sepsis and gastroenteritis do not begin with hives minutes after a new food.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "fpies-consensus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his pallor, floppiness and capillary refill of 4 seconds?",
        options: ["Dehydration from vomiting", "Hypoglycemia after vomiting", "Hypoperfusion from anaphylaxis", "Normal tiredness after vomiting", "Postictal state after a seizure"],
        correct: 2,
        explanation:
          "A pulse of 182/minute, mottled skin, a capillary refill of 4 seconds, a blood pressure of 68/40 mmHg and reduced responsiveness show poor perfusion. In infants, tachycardia is an early sign of cardiovascular involvement and a falling blood pressure comes late, so these signs mean anaphylactic shock is already under way. Three vomits over 25 minutes cannot cause this degree of fluid loss. His glucose is 5.6 mmol/L. Nobody saw a seizure. Calling this ordinary tiredness after vomiting is the error that delays epinephrine in infants.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "carlisle-infant",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first dose of epinephrine for him, drawn from the 1 mg/mL ampoule?",
        options: ["epinephrine 0.009 mg IM", "epinephrine 0.018 mg IM", "epinephrine 0.045 mg IM", "epinephrine 0.09 mg IM", "epinephrine 0.9 mg IM"],
        correct: 3,
        explanation:
          "The IM dose of epinephrine is 0.01 mg/kg, and at 9 kg that is 0.09 mg, or 0.09 mL of the 1 mg/mL solution, into the anterolateral thigh. It can be repeated every 5 to 15 minutes. A dose of 0.9 mg is ten times too much, the error made when the 0.1 mL/kg volume used for the 0.1 mg/mL arrest solution is drawn from the 1 mg/mL ampoule. Doses of 0.009, 0.018 and 0.045 mg come from decimal slips or from halving the dose out of fear of side effects, and leave a shocked infant undertreated.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "carlisle-infant",
      },
      {
        id: "q4",
        kind: "single",
        update: "He recovers after one dose and a fluid bolus and is observed until evening. His father asks whether the vaccines due at 12 months, including MMR, are still safe for him.",
        prompt: "Which of the following is the most appropriate advice about his routine vaccines?",
        options: ["Allergist skin testing before MMR", "Delay MMR until egg is tolerated", "Give MMR in hospital only", "Give MMR in the routine manner", "Omit yearly influenza vaccines"],
        correct: 3,
        explanation:
          "The Canadian Immunization Guide states that MMR can be given in the routine manner to people with egg allergy, including those who have had anaphylaxis to egg, and that skin testing before vaccination is not recommended. Egg-allergic people may also receive any influenza vaccine authorized in Canada, in full dose, in any setting where vaccines are routinely given. Delaying MMR leaves him unprotected against measles, and hospital-only vaccination or allergist testing adds barriers that bring no safety benefit. Yellow fever vaccine is the exception that needs allergist review.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "cig-contraindications",
      },
    ],
    sources: [S.fpies, S.carlisle, S.cig],
    ...META,
  },

  /* 50 Nonverbal adult from a group home ----------------------------------- */
  {
    id: "anaphylaxis-50",
    topic: "anaphylaxis",
    title: "Collapse in a group home dining room",
    stem:
      "A 34-year-old man is brought to the emergency department by ambulance from his group home. He has a severe intellectual disability, is nonverbal and has epilepsy treated with levetiracetam. Staff found him on the dining room floor 15 minutes after lunch, with brief jerking of both arms that stopped within seconds. Before he fell he had been rubbing his mouth and ears and pulling at his shirt. A new support worker had served him a sesame bagel, a food he had not eaten before. He then vomited twice. He has no known allergies. He is drowsy and restless and moans when touched. His neck and upper chest are flushed, and his lips look puffier than in the photos in his file. There is scattered wheeze on both sides. His capillary glucose is 5.9 mmol/L.",
    vitals: { temperature: "36.8°C tympanic", pulse: "128/minute", resp: "26/minute", bp: "80/46 mmHg", o2sat: "93% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his low blood pressure?",
        options: ["Aspiration of vomit", "Levetiracetam toxicity", "Postictal hypotension", "Sesame anaphylaxis", "Vasovagal reaction"],
        correct: 3,
        explanation:
          "Within minutes of a first sesame exposure he showed itch behaviour, flushing, lip swelling, vomiting, wheeze and a blood pressure of 80/46 mmHg, which is anaphylaxis involving the skin, gut, airways and circulation. A patient who cannot speak shows itch and throat discomfort through rubbing, pulling at clothes and restlessness. Aspiration can cause wheeze and hypoxia but not flushing, lip swelling and shock within minutes. Seizures do not cause sustained hypotension. Levetiracetam overdose causes drowsiness, not this picture, and nothing suggests extra doses. A vasovagal faint recovers quickly when the patient lies flat.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao-2020",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains the brief jerking of his arms that staff saw when he fell?",
        options: ["Breakthrough epileptic seizure", "Convulsive syncope from low pressure", "Hypoglycemic seizure", "Psychogenic nonepileptic event", "Rigors from bacteremia"],
        correct: 1,
        explanation:
          "When blood pressure falls far enough to stop flow to the brain, a few brief, irregular jerks are common as the person goes limp. In tilt studies the median was 2 jerks in syncope against 48 in convulsive seizures, and fewer than 10 jerks points to syncope. His jerks lasted seconds as he fell, and his pressure is 80/46 mmHg. Labelling this a breakthrough seizure in a man with epilepsy would send care toward antiseizure drugs and away from epinephrine. His glucose is 5.9 mmol/L, he has no fever to suggest rigors, and a psychogenic event does not explain his shock.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "shmuely-syncope",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following findings in him show skin or mucosal involvement in this reaction?",
        options: ["Brief jerking of both arms", "Flushing of the neck and chest", "Lips puffier than in his photos", "Moaning when he is touched", "Restlessness on the stretcher", "Rubbing at his mouth and ears", "Scattered wheeze on both sides", "Two episodes of vomiting"],
        select: 3,
        correct: [1, 2, 5],
        explanation:
          "Flushing, swelling of the lips and itch are the skin and mucosal features of anaphylaxis, and in a patient who cannot speak, rubbing at the mouth and ears is how itch and oral tingling show. His lips are judged against his own photos because swelling is easy to miss in a stranger. Wheeze is respiratory involvement and vomiting is gastrointestinal involvement, both of which also count toward the diagnosis but are not skin findings. Jerking came from his fall in pressure. Moaning when touched and restlessness are nonspecific signs of distress.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "wao-2020",
      },
      {
        id: "q4",
        kind: "single",
        update: "He recovers after two doses of IM epinephrine and fluids and is observed until the next morning. He will return to the group home with two epinephrine autoinjectors and an allergist referral.",
        prompt: "Which of the following is the most appropriate plan for keeping his autoinjectors at the group home?",
        options: ["Kept in the locked medication cabinet", "Kept in the staff office desk drawer", "Kept in the van's glove box", "Kept with the house first aid kit", "With him at all times, carried by staff"],
        correct: 4,
        explanation:
          "People at risk of anaphylaxis should have an autoinjector with them at all times, and a man who cannot carry or use his own needs staff to carry it for him, on outings as well as at home. Autoinjectors must be easy to reach, not in locked cupboards or drawers, and kept away from extreme cold or heat, which rules out the medication cabinet, a desk drawer and a vehicle glove box. A device stored with the house first aid kit is not with him when he is away from the house.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci-settings",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate instruction for staff if his symptoms do not improve after the first autoinjector?",
        options: ["Give a second dose only if he faints", "Give diphenhydramine before a second dose", "Give the second dose after 30 minutes", "Give the second dose after 5 minutes", "Wait for paramedics before a second dose"],
        correct: 3,
        explanation:
          "The Canadian emergency protocol is to give epinephrine, call 9-1-1, and give a second dose as early as 5 minutes after the first if symptoms have not improved. Waiting 30 minutes, waiting for paramedics or waiting until he faints lets the reaction progress while the second device sits unused. Diphenhydramine does not treat airway swelling or shock and must never delay epinephrine. Staff should also know that he goes to hospital even when symptoms improve, because the reaction can worsen or return.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci-protocol",
      },
    ],
    sources: [S.wao, S.shmuely, S.csaci, S.csaciProtocol],
    ...META,
  },

  /* 51 Shock that persists after two doses ---------------------------------- */
  {
    id: "anaphylaxis-51",
    topic: "anaphylaxis",
    title: "Still hypotensive after the second dose",
    stem:
      "You are working in a rural hospital emergency department. A 46-year-old woman with a known peanut allergy is brought in by ambulance 35 minutes after eating chicken satay at a work lunch. Within minutes she had hives, wheeze and light-headedness. Paramedics gave epinephrine 0.5 mg IM, and a second dose of 0.5 mg IM was given in the thigh 5 minutes after she arrived. She has received 2 L of normal saline through two IV lines. She has no other medical history and takes no medications. Ten minutes after the second dose she is pale, anxious and wheezing, with hives over her trunk. Her voice is normal and there is no stridor. The nearest ICU is a 90 minute flight away.",
    vitals: { temperature: "36.6°C oral", pulse: "132/minute", resp: "28/minute", bp: "74/40 mmHg", o2sat: "92% on 10 L/minute by mask", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her condition at this point in her care?",
        options: ["Allergic coronary vasospasm", "Anaphylaxis refractory to epinephrine", "Biphasic anaphylactic reaction", "Distributive shock from sepsis", "Vasovagal reaction with hives"],
        correct: 1,
        explanation:
          "Refractory anaphylaxis is defined as respiratory or cardiovascular problems that persist despite two appropriate doses of IM epinephrine. She has had two 0.5 mg doses and 2 L of fluid and still has wheeze, a saturation of 92% on oxygen and a pressure of 74/40 mmHg, so she meets it, and the next step is an epinephrine infusion with expert help. A biphasic reaction is a return of symptoms after they have resolved, and hers never resolved. She has no chest pain or ECG change to suggest coronary spasm, no infection to suggest sepsis, and a vasovagal faint does not cause hives and wheeze.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "rcuk-refractory",
      },
      {
        id: "q2",
        kind: "single",
        update: "You start a peripheral epinephrine infusion of 1 mg in 100 mL of normal saline, using the Resuscitation Council UK 2021 refractory anaphylaxis algorithm.",
        prompt: "Which of the following starting infusion rates is most appropriate for her?",
        options: ["5 mL/hour", "16 mL/hour", "48 mL/hour", "160 mL/hour", "480 mL/hour"],
        correct: 2,
        explanation:
          "The algorithm starts the infusion at 0.5 to 1.0 mL/kg/hour of 1 mg in 100 mL, which is 10 mcg/mL, and titrates to response. At 64 kg that range is 32 to 64 mL/hour, so 48 mL/hour, which delivers 480 mcg/hour or 8 mcg/minute, sits within it. A rate of 16 mL/hour is half the lowest starting rate, and 5 mL/hour is far too low to help. Rates of 160 and 480 mL/hour give 2.5 to 7.5 mL/kg/hour, enough to cause severe hypertension, dysrhythmia and myocardial injury.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "rcuk-refractory",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to give the infusion?",
        options: ["Dedicated line, arm without the BP cuff", "Gravity drip without a pump", "Piggybacked onto the saline line", "Same arm as the automated BP cuff", "Through the IV used for fluid boluses"],
        correct: 0,
        explanation:
          "Epinephrine is given by an infusion pump through its own dedicated line, on the arm without the blood pressure cuff. Piggybacking it onto the saline line, or running it through the IV used for boluses, means every bolus or flush pushes an unplanned dose of epinephrine into her. A cuff on the same arm stops the flow with each reading, then releases a surge, and raises the risk of extravasation. A gravity drip cannot deliver a precise, steady dose of a drug this potent.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "rcuk-refractory",
      },
      {
        id: "q4",
        kind: "single",
        update: "Twenty minutes later, after two increases in the rate, her BP is 186/104 mmHg and her pulse is 150/minute. She has a pounding headache. Her wheeze and hives have gone.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: ["Add a labetalol infusion", "Give a second vasopressor", "Give lorazepam 1 mg IV", "Reduce the infusion rate", "Stop all IV fluids"],
        correct: 3,
        explanation:
          "A sharp rise in blood pressure on an epinephrine infusion most likely means too much epinephrine, and her wheeze and hives have resolved, so the rate is reduced and titrated to the lowest dose that keeps her stable, with continuous monitoring. A labetalol infusion would oppose the epinephrine she still needs and could bring back bronchospasm and shock. A second vasopressor is for shock that persists despite the infusion, the opposite of her problem. Lorazepam treats anxiety, not the cause of her hypertension. Stopping fluids does not lower a pressure driven by the drug.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "rcuk-refractory",
      },
    ],
    sources: [S.rcuk],
    ...META,
  },

  /* 52 Gluten-free pancakes ------------------------------------------------- */
  {
    id: "anaphylaxis-52",
    topic: "anaphylaxis",
    title: "Breakfast at a café",
    stem:
      "A 31-year-old woman presents to the emergency department 40 minutes after breakfast at a café. She has celiac disease and ordered gluten-free pancakes. Fifteen minutes after eating she had itchy hives on her arms, a tight throat and crampy abdominal pain, and she has had two loose stools. She is sure the kitchen contaminated her meal with gluten. The café later tells her that the pancake batter is made with buckwheat flour. She has never had an allergic reaction before and takes no medications. She is pale and light-headed when she sits up. There are raised hives on her arms and trunk and her lips are mildly swollen. Her voice is normal and her chest is clear. Her abdomen is soft with mild diffuse tenderness.",
    vitals: { temperature: "36.7°C oral", pulse: "118/minute", resp: "20/minute", bp: "84/50 mmHg", o2sat: "98% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her symptoms after the meal?",
        options: ["Buckwheat in the batter", "Gluten contamination of the batter", "Lactose in the batter", "Sulphites in the syrup", "Xanthan gum in the batter"],
        correct: 0,
        explanation:
          "Hives, lip swelling, throat tightness, cramps and a blood pressure of 84/50 mmHg starting 15 minutes after a meal are anaphylaxis, an IgE-mediated reaction to a food protein, and buckwheat is a well known cause of severe reactions. It contains no gluten, so it is widely used in gluten-free foods. Gluten exposure in celiac disease causes gut symptoms, usually hours later, without hives, angioedema or shock. Lactose intolerance causes bloating and diarrhea only. Sulphites more often trigger wheeze in people with asthma. Xanthan gum is a rare allergen and fits less well than the flour that made up the batter.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "satoh-buckwheat",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains her blood pressure of 84/50 mmHg?",
        options: ["Adrenal crisis with celiac disease", "Bleeding from a gut ulcer", "Fluid loss from two loose stools", "Vasovagal response to abdominal pain", "Vessel dilation and leak from anaphylaxis"],
        correct: 4,
        explanation:
          "Mast cell mediators dilate blood vessels and make capillaries leak, so a large share of circulating volume can shift out of the vessels within minutes. That explains a pressure of 84/50 mmHg with a pulse of 118/minute, beginning with hives and throat tightness after the meal. Two loose stools cannot remove enough fluid to cause shock in 40 minutes. A vasovagal response slows the pulse rather than raising it. Adrenal crisis is more common in celiac disease but does not cause hives and lip swelling, and nothing suggests bleeding.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "She recovers after one dose of epinephrine 0.5 mg IM and 1 L of crystalloid. Before discharge she asks how to avoid buckwheat, since she relies on gluten-free products.",
        prompt: "Which of the following is the most accurate advice about buckwheat in packaged foods sold in Canada?",
        options: ["Gluten-free labels exclude buckwheat", "It is declared as a gluten source", "It is listed under the word wheat", "It must appear in a Contains statement", "Read each ingredient list for it"],
        correct: 4,
        explanation:
          "Buckwheat is not one of Canada's priority food allergens, which are eggs, milk, mustard, peanuts, crustaceans and molluscs, fish, sesame, soy, sulphites, tree nuts, and wheat and triticale. So it is not flagged the way those foods are, and she must read the full ingredient list of every product. Buckwheat is not related to wheat and contains no gluten, so it is neither declared as a gluten source nor kept out of gluten-free foods. In fact gluten-free flours, pastas and mixes often use it in place of wheat.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "hc-allergens",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following foods is most likely to contain buckwheat?",
        options: ["Corn tortillas", "Polenta", "Quinoa salad", "Rice noodles", "Soba noodles"],
        correct: 4,
        explanation:
          "Soba are Japanese noodles made wholly or partly from buckwheat flour, so they carry an obvious risk for her. Polenta and corn tortillas are made from corn. Rice noodles are made from rice flour. Quinoa is a seed from a different plant family. Outside East Asia buckwheat also acts as a hidden allergen in dishes such as pizza, pasta, porridge and burgers, as well as pancakes like hers, so she should ask about it when eating out as well as reading labels.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "satoh-buckwheat",
      },
    ],
    sources: [S.satoh, S.wao, S.hc],
    ...META,
  },
];
