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
];
