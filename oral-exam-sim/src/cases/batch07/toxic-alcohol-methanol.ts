// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const toxicAlcoholMethanol: OralCase = {
  id: "toxic-alcohol-methanol",
  title: "Found in the garage and cannot see well",
  blueprint: "tox",
  alsoCovers: ["resus"],
  summary: "A 52 year old man is found confused in his garage and complains that his vision is blurry.",
  durationMinutes: 15,
  stem:
    "You are working in a 60 bed hospital in eastern Ontario. There is no dialysis on site. The nearest hemodialysis unit is 2 hours away by road. Ornge air transport is available. " +
    "Your lab measures serum osmolality, but toxic alcohol levels are sent out and take about 6 hours. The pharmacy stocks one 1.5 g vial of fomepizole. " +
    "Gérald Boucher is 52 years old and weighs 80 kg. His wife found him on the garage floor at 10:00. She last saw him well at 16:00 yesterday. " +
    "Triage vitals: heart rate 106, blood pressure 142/88, respiratory rate 30 and deep, SpO2 97 percent on room air, temperature 36.4, capillary glucose 6.1 mmol/L. GCS 13. CTAS 2. " +
    "The paramedic says: 'There was an empty jug of windshield washer fluid next to him. He says everything looks like a snowstorm.'",
  findings: [
    {
      id: "exam",
      label: "Exam",
      result:
        "GCS 13 (E3 V4 M6). Kussmaul breathing. No smell of alcohol. Pupils 6 mm and sluggish. Visual acuity: counts fingers at 1 metre in both eyes. No focal limb weakness. No signs of head trauma.",
    },
    {
      id: "fundi",
      label: "Fundoscopy",
      result: "Hyperemic, swollen optic discs in both eyes.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.08. pCO2 21 mmHg. Bicarbonate 6 mmol/L. Lactate 2.8 mmol/L.",
    },
    {
      id: "lytes",
      label: "Electrolytes and renal function",
      result: "Sodium 140 mmol/L. Chloride 102 mmol/L. Potassium 4.8 mmol/L. Urea 5.0 mmol/L. Creatinine 118 µmol/L. Glucose 6.1 mmol/L.",
    },
    {
      id: "osm",
      label: "Measured serum osmolality",
      result: "324 mOsm/kg.",
    },
    {
      id: "ethanol",
      label: "Ethanol, acetaminophen and salicylate",
      result: "Ethanol undetectable. Acetaminophen undetectable. Salicylate undetectable.",
    },
    {
      id: "ketones",
      label: "Serum beta hydroxybutyrate",
      result: "0.6 mmol/L.",
    },
    {
      id: "urine",
      label: "Urinalysis",
      result: "No crystals. No blood. Ketones trace.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "No hemorrhage. Subtle low density in both putamina.",
    },
    {
      id: "methanol-level",
      label: "Methanol level from the reference lab",
      result: "Methanol 28 mmol/L (about 90 mg/dL). Ethylene glycol not detected. Reported 6 hours after the sample was sent.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "He has alcohol use disorder and had been trying to stop. There was no liquor in the house. His friend Marcel was over yesterday afternoon and they were drinking together in the garage.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "He is breathing deeply and quickly. He squints at you and says the lights are too bright. His first gas and electrolytes are back.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Initial assessment",
      prompt: "Interpret his results and tell me your first actions.",
      seconds: 90,
      modelAnswer: [
        "Anion gap 140 minus 102 plus 6 is 32. Severe high anion gap metabolic acidosis.",
        "Calculated osmolality 2 times sodium plus glucose plus urea is 291. Osmolar gap is 33.",
        "High anion gap, high osmolar gap, visual symptoms and washer fluid mean methanol until proven otherwise.",
        "Fomepizole 15 mg/kg IV now, which is 1200 mg. Do not wait for the level.",
        "Sodium bicarbonate for pH under 7.3. Call the poison centre. Start arranging dialysis.",
      ],
      rubric: ["tam-a1", "tam-a2", "tam-m1"],
      choices: [
        {
          id: "c-fomepizole",
          label: "I calculated the anion and osmolar gaps, diagnosed probable methanol poisoning and gave fomepizole 1200 mg IV without waiting for a level.",
          next: "q-supply",
          quality: "strong",
          feedback:
            "Strong. The history, both gaps and visual symptoms are enough to treat. " +
            "Fomepizole blocks alcohol dehydrogenase and stops further formation of formic acid, which causes the blindness and acidosis.",
        },
        {
          id: "c-wait",
          label: "I sent a methanol level and planned to give fomepizole once it confirms the diagnosis.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "The level will take 6 hours. Every hour without alcohol dehydrogenase blockade makes more formic acid. " +
            "Treat on clinical suspicion with the gaps and the history.",
        },
        {
          id: "c-aka",
          label: "I treated this as alcoholic ketoacidosis with dextrose, saline and thiamine.",
          next: "s-aka",
          quality: "unsafe",
          feedback:
            "Alcoholic ketoacidosis does not cause an osmolar gap of 33, visual loss or a beta hydroxybutyrate of only 0.6 mmol/L. " +
            "The examiner wanted toxic alcohol recognized and fomepizole given now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Two hours later",
      text: "His pH is 7.02 and he can now only see hand motion. The poison centre specialist asks why fomepizole has not been started. You give 1200 mg IV.",
      next: "q-supply",
    },
    {
      kind: "say",
      id: "s-aka",
      phase: "Two hours later",
      text: "His pH has fallen to 7.01. His vision is worse. A nurse asks about the washer fluid jug the paramedics mentioned. You call the poison centre and give fomepizole 1200 mg IV.",
      next: "q-supply",
    },
    {
      kind: "question",
      id: "q-supply",
      phase: "Antidote supply",
      prompt: "The pharmacist says the one vial covers only the loading dose. What is the ongoing dosing, and what do you do about supply?",
      seconds: 75,
      modelAnswer: [
        "Fomepizole 10 mg/kg every 12 hours for 4 doses, then 15 mg/kg every 12 hours.",
        "During hemodialysis, give it every 4 hours or by continuous infusion because it is dialyzed.",
        "Ask the pharmacist to source more from nearby hospitals or through the poison centre. Send it with the patient if possible.",
        "If fomepizole runs out, use ethanol. Target serum ethanol about 22 mmol/L, which is 100 mg/dL, with levels every 1 to 2 hours.",
        "Ethanol can be given IV as 10 percent or by NG. It needs close monitoring for sedation and hypoglycemia.",
      ],
      rubric: ["tam-m2"],
      choices: [
        {
          id: "c-source",
          label: "I gave the vial now, had pharmacy source more from other hospitals and set up an ethanol backup with a target of 22 mmol/L.",
          next: "q-supportive",
          quality: "strong",
          feedback:
            "Good. The loading dose covers him for about 12 hours. That is enough time to find more or get him to dialysis. " +
            "Ethanol is a valid backup but needs levels and a monitored setting.",
        },
        {
          id: "c-skip",
          label: "I decided he does not need more alcohol dehydrogenase blockade because dialysis will clear the methanol.",
          next: "s-skip",
          quality: "unsafe",
          feedback:
            "Dialysis is hours away. Methanol keeps turning into formic acid until the enzyme is blocked. " +
            "Keep blocking alcohol dehydrogenase until the methanol is cleared.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-skip",
      phase: "Consultant call",
      text: "The poison centre specialist advises that blockade must continue through transfer and dialysis. The pharmacist has found 2 more vials at a hospital 40 minutes away. They are sent by taxi.",
      next: "q-supportive",
    },
    {
      kind: "question",
      id: "q-supportive",
      phase: "Supportive care",
      prompt: "What else do you give him while you wait?",
      seconds: 60,
      modelAnswer: [
        "Sodium bicarbonate 1 to 2 mEq/kg IV bolus, then an infusion. Aim for pH above 7.3. Acidosis increases formate entry into the eye and brain.",
        "Folic acid 50 mg IV every 6 hours, or folinic acid 1 mg/kg up to 50 mg, to speed formate breakdown.",
        "Thiamine 100 mg IV given his alcohol use.",
        "Correct glucose and electrolytes. Monitor potassium with bicarbonate.",
        "Protect the airway if consciousness falls.",
      ],
      rubric: ["tam-m3"],
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "Ninety minutes after arrival",
      text: "He vomits and becomes difficult to rouse. GCS 8. His respiratory rate is 32. A repeat gas shows pH 7.10 and pCO2 20 mmHg after bicarbonate.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Airway",
      prompt: "He needs his airway secured for transfer. How do you do it safely?",
      seconds: 75,
      modelAnswer: [
        "Recognize that his pCO2 of 20 is compensating for severe acidosis.",
        "Give a bicarbonate bolus before induction.",
        "Preoxygenate and minimize apnea time. Hemodynamically stable induction agent.",
        "Set the ventilator to match his minute ventilation: rate about 30, tidal volume about 8 mL/kg ideal body weight.",
        "Check a gas within 15 minutes and adjust.",
      ],
      rubric: ["tam-r1"],
      choices: [
        {
          id: "c-match",
          label: "I gave bicarbonate first, minimized apnea and set a high respiratory rate to match his pre intubation ventilation, then checked a gas.",
          next: "q-dialysis",
          quality: "strong",
          feedback:
            "Correct. Losing respiratory compensation in a patient with a bicarbonate of 6 can drop the pH below 7.0 within minutes. " +
            "Matching his minute ventilation protects him.",
        },
        {
          id: "c-standard",
          label: "I intubated him and used standard lung protective settings with a rate of 16.",
          next: "s-standard",
          quality: "unsafe",
          feedback:
            "A rate of 16 cannot keep his pCO2 near 20. His pH will fall sharply and he may arrest. " +
            "In severe metabolic acidosis the ventilator must match his compensation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-standard",
      phase: "Twenty minutes later",
      text: "His blood pressure falls to 78/40. A gas shows pH 6.88 and pCO2 44 mmHg. You increase the rate to 30 and give 100 mEq of bicarbonate. His pressure recovers.",
      next: "q-dialysis",
    },
    {
      kind: "question",
      id: "q-dialysis",
      phase: "Definitive care",
      prompt: "Does he need dialysis, and how will you get it?",
      seconds: 75,
      modelAnswer: [
        "Yes. EXTRIP criteria include coma, seizures, new vision loss, pH 7.15 or less, anion gap over 24 and a methanol level over about 22 mmol/L while on fomepizole.",
        "He meets several: coma, visual loss, pH 7.10 and anion gap 32.",
        "Intermittent hemodialysis is the preferred method. It removes methanol and formate and corrects acidosis.",
        "Call CritiCall Ontario for nephrology and ICU at the dialysis centre. Transfer by the fastest safe route.",
        "Send fomepizole, bicarbonate and folic acid with him. Adjust fomepizole dosing during dialysis.",
      ],
      rubric: ["tam-m4", "tam-d1"],
      choices: [
        {
          id: "c-transfer",
          label: "I arranged urgent transfer through CritiCall for intermittent hemodialysis, with fomepizole, bicarbonate and folic acid running.",
          next: "q-others",
          quality: "strong",
          feedback:
            "Correct. He meets several EXTRIP criteria. Fomepizole stops new formate but does not remove what is already there. " +
            "Dialysis is the only way to clear it quickly.",
        },
        {
          id: "c-stay",
          label: "I kept him here on fomepizole and bicarbonate because fomepizole stops the toxic metabolite from forming.",
          next: "s-stay",
          quality: "partial",
          feedback:
            "Fomepizole alone works for some patients without acidosis or end organ damage. He already has coma, visual loss and severe acidosis. " +
            "Formate is already in his tissues. He needs dialysis.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stay",
      phase: "Two hours later",
      text: "His pH is 7.05 despite bicarbonate. The poison centre strongly recommends dialysis. You call CritiCall and request urgent transfer.",
      next: "q-others",
    },
    {
      kind: "question",
      id: "q-others",
      phase: "A new problem",
      prompt: "His wife says his friend Marcel was drinking with him in the garage yesterday. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Treat this as a possible second poisoning. Time matters.",
        "Ask the wife for Marcel's contact details and address. Call him or ask police or EMS to do a wellness check. PHIPA permits sharing what is needed to reduce a significant risk of serious harm to him.",
        "Tell Marcel to come to an emergency department now even if he feels well. Symptoms can be delayed 12 to 24 hours.",
        "Call the poison centre and the receiving hospital so they are ready.",
        "Consider public health if there is a wider source, such as a contaminated or illicit product.",
      ],
      rubric: ["tam-l1", "tam-c1"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Communication",
      prompt: "His wife asks: 'Will he be blind? Did he do this on purpose?' What do you say?",
      seconds: 60,
      modelAnswer: [
        "Explain that windshield washer fluid contains methanol, which the body turns into a poison that damages the eyes and brain.",
        "Be honest that his vision may not fully recover. It is too early to know.",
        "Explain the treatments: antidote, dialysis and ICU care.",
        "Explore intent without judgement. It may have been a substitute for alcohol, but a mental health and addiction assessment will follow.",
        "Offer support and addiction resources for the family.",
      ],
      rubric: ["tam-c2", "tam-p1"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "The transport team arrives. Give me your key handover points.",
      seconds: 60,
      modelAnswer: [
        "Probable methanol poisoning. Gaps, gas and time course. Level pending from the reference lab.",
        "Fomepizole load time and next dose due. Supply sent with the patient.",
        "Ventilator set to match high minute ventilation. Do not lower the rate. Bicarbonate infusion running.",
        "Folic acid and thiamine given. Potassium level.",
        "Nephrology is expecting him for immediate hemodialysis.",
      ],
      rubric: ["tam-c3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The methanol level returns at 28 mmol/L. He is dialyzed for 8 hours at the regional centre. His acidosis resolves but he has lasting vision loss. Marcel is found at home with early symptoms and is treated. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "tam-a1",
      competency: "assessment",
      text: "Calculates the anion gap and osmolar gap correctly using Canadian units.",
      points: 2,
      teaching: "Calculated osmolality is 2 times sodium plus glucose plus urea in mmol/L. A gap over about 10 suggests an unmeasured osmole.",
      source: "nejm-toxic",
    },
    {
      id: "tam-a2",
      competency: "assessment",
      text: "Diagnoses probable methanol poisoning from the gaps, visual symptoms, optic disc findings and history.",
      points: 2,
      teaching: "Blurry or snowfield vision with severe acidosis is classic for methanol. Early on the osmolar gap is high. Later the anion gap rises.",
      source: "nejm-toxic",
    },
    {
      id: "tam-r1",
      competency: "resuscitation",
      text: "Intubates with bicarbonate first and ventilator settings that match high pre intubation minute ventilation.",
      points: 2,
      teaching: "Severe metabolic acidosis depends on respiratory compensation. Standard ventilator settings can cause collapse.",
      source: "goldfrank",
    },
    {
      id: "tam-m1",
      competency: "management",
      text: "Gives fomepizole 15 mg/kg IV promptly on clinical suspicion, without waiting for a methanol level.",
      points: 3,
      critical: true,
      teaching: "Fomepizole blocks alcohol dehydrogenase and stops formate production. Delay while waiting for a level causes preventable harm.",
      source: "aact-methanol",
    },
    {
      id: "tam-m2",
      competency: "management",
      text: "States maintenance fomepizole dosing, adjusts it for dialysis and arranges supply or an ethanol backup.",
      points: 2,
      teaching: "Fomepizole is 10 mg/kg every 12 hours for 4 doses then 15 mg/kg every 12 hours. Give it every 4 hours during dialysis.",
      source: "aact-methanol",
    },
    {
      id: "tam-m3",
      competency: "management",
      text: "Gives sodium bicarbonate, folic or folinic acid and thiamine.",
      points: 2,
      teaching: "Correcting acidosis reduces formate entry into tissues. Folate speeds formate breakdown to carbon dioxide.",
      source: "aact-methanol",
    },
    {
      id: "tam-m4",
      competency: "management",
      text: "Identifies EXTRIP indications for dialysis: coma, seizures, vision loss, pH 7.15 or less, anion gap over 24 or a high level.",
      points: 3,
      critical: true,
      teaching: "Dialysis removes methanol and formate and corrects acidosis. Fomepizole alone is not enough once end organ damage is present.",
      source: "extrip-methanol",
    },
    {
      id: "tam-d1",
      competency: "disposition",
      text: "Arranges urgent transfer through CritiCall for intermittent hemodialysis with antidote and infusions running.",
      points: 2,
      teaching: "Call early. Transfer takes time. Send the antidote with the patient.",
      source: "extrip-methanol",
    },
    {
      id: "tam-c1",
      competency: "communication",
      text: "Contacts the poison centre and the receiving hospital about a possible second patient.",
      points: 1,
      teaching: "Shared exposures are common in toxic alcohol cases. Early calls let other teams prepare.",
      source: "goldfrank",
    },
    {
      id: "tam-c2",
      competency: "communication",
      text: "Explains methanol poisoning and the uncertain visual prognosis honestly to the wife.",
      points: 1,
      teaching: "Visual loss from methanol may be permanent. Avoid false reassurance and explain next steps.",
      source: "nejm-toxic",
    },
    {
      id: "tam-c3",
      competency: "communication",
      text: "Gives a structured handover that includes antidote timing, supply, ventilator settings and the dialysis plan.",
      points: 1,
      teaching: "Transport teams may lower the ventilator rate by habit. Tell them why it must stay high.",
      source: "goldfrank",
    },
    {
      id: "tam-p1",
      competency: "professionalism",
      text: "Explores intent without judgement and plans addiction and mental health follow up.",
      points: 1,
      teaching: "Drinking a toxic alcohol as a substitute is a sign of severe alcohol use disorder. It deserves treatment, not blame.",
      source: "goldfrank",
    },
    {
      id: "tam-l1",
      competency: "leadership",
      text: "Takes action to locate and treat a possible second exposed person.",
      points: 3,
      critical: true,
      teaching: "Methanol symptoms can be delayed 12 to 24 hours. An exposed person who feels well still needs urgent assessment.",
      source: "aact-methanol",
    },
  ],
  sources: [
    {
      id: "extrip-methanol",
      citation:
        "Roberts DM, et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning: a systematic review and consensus statement. Critical Care Medicine. 2015.",
      url: "https://doi.org/10.1097/CCM.0000000000000708",
    },
    {
      id: "aact-methanol",
      citation: "Barceloux DG, et al. American Academy of Clinical Toxicology practice guidelines on the treatment of methanol poisoning. Journal of Toxicology Clinical Toxicology. 2002.",
      url: "https://doi.org/10.1081/clt-120006745",
    },
    {
      id: "nejm-toxic",
      citation: "Kraut JA, Mullins ME. Toxic Alcohols. New England Journal of Medicine. 2018.",
      url: "https://doi.org/10.1056/NEJMra1615295",
    },
    {
      id: "goldfrank",
      citation: "Nelson LS, et al, editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw Hill. 2019.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
