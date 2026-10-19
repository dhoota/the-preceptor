// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const T = "gi-bleed";

const S: Record<string, Source> = {
  bsg: {
    id: "bsg-lgib",
    citation: "Oakland K, Chadwick G, East JE, et al. Diagnosis and management of acute lower gastrointestinal bleeding: guidelines from the British Society of Gastroenterology. Gut. 2019.",
    url: "https://www.bsg.org.uk/getattachment/6d80aa64-9d11-4923-8789-a2e9b08502ef/gutjnl-2018-317807.pdf?lang=en-US",
  },
  aljebreen: {
    id: "aljebreen-ng",
    citation: "Aljebreen AM, Fallone CA, Barkun AN. Nasogastric aspirate predicts high-risk endoscopic lesions in patients with acute upper-GI bleeding. Gastrointest Endosc. 2004.",
    url: "https://pubmed.ncbi.nlm.nih.gov/14745388/",
  },
  icg: {
    id: "icg-2019",
    citation: "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding: guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7233308/",
  },
  acgCag: {
    id: "acg-cag-2022",
    citation: "Abraham NS, Barkun AN, Sauer BG, et al. American College of Gastroenterology and Canadian Association of Gastroenterology clinical practice guideline: management of anticoagulants and antiplatelets during acute gastrointestinal bleeding and the periendoscopic period. J Can Assoc Gastroenterol. 2022.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8972207/",
  },
};

export const GI_BLEED_S68: Samp[] = [
  {
    id: "gi-bleed-48",
    topic: T,
    title: "Maroon stools before dawn",
    stem: "A 58-year-old man is brought to the emergency department by ambulance at 06:30 after passing three large maroon stools with clots since 04:00. He felt faint on the toilet. He takes naproxen 500 mg twice daily for gout flares and ASA 81 mg daily. He had a duodenal ulcer 10 years ago. He has no abdominal pain and has not vomited. He is pale and sweaty. His abdomen is soft and not tender. Rectal examination shows maroon blood with clots. Hemoglobin is 88 g/L (146 g/L a year ago), urea 14.6 mmol/L and creatinine 92 umol/L.",
    vitals: { temperature: "36.5°C oral", pulse: "122/minute", resp: "22/minute", bp: "94/60 mmHg", o2sat: "97% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his shock index and how it classifies his bleeding on arrival?",
        options: [
          "0.8, stable bleeding",
          "1.0, stable major bleeding",
          "1.3, stable major bleeding",
          "1.3, unstable bleeding",
          "1.6, unstable bleeding",
        ],
        correct: 3,
        explanation: "The shock index is the pulse divided by the systolic BP: 122 / 94 = 1.30. The British Society of Gastroenterology classifies lower GI bleeding as unstable when the shock index is above 1, and unstable patients go straight to resuscitation and urgent localization rather than to scoring with a tool such as the Oakland score. A value of 0.8 comes from dividing the BP by the pulse, which inverts the ratio. A value of 1.0 is the threshold itself, and 1.6 is an arithmetic error. Calling a shock index of 1.3 stable would delay care.",
        keyFeature: { topic: T, n: 5 },
        source: "bsg-lgib",
      },
      {
        id: "q2",
        kind: "single",
        update: "Two units of uncrossmatched red cells are running. A nasogastric tube placed by the admitting resident returns clear, bile-stained fluid.",
        prompt: "Which of the following is the most accurate interpretation of his nasogastric aspirate?",
        options: [
          "An upper GI source remains possible",
          "Bleeding in the colon is confirmed",
          "The stomach and duodenum are excluded",
          "The tube needs to be repositioned",
          "Upper endoscopy is no longer needed",
        ],
        correct: 0,
        explanation: "In the Canadian registry study by Aljebreen and colleagues, a clear or bile-stained aspirate lowered the probability of a high-risk upper lesion from 0.29 to 0.15, but did not remove it. A bleeding duodenal ulcer can stop refluxing blood into the stomach, which matters here because he has had a duodenal ulcer and takes naproxen and ASA. The aspirate therefore neither excludes the stomach and duodenum nor confirms a colonic source. Bile in the aspirate shows the tube is already in the stomach. Upper endoscopy is still needed if the source is not found.",
        keyFeature: { topic: T, n: 2 },
        source: "aljebreen-ng",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT angiography shows no contrast extravasation. After 4 units of red cells his pulse is 118/minute and BP 92/58 mmHg.",
        prompt: "Which of the following is the most appropriate next step to find the source of his bleeding?",
        options: [
          "Capsule endoscopy of the small bowel",
          "Colonoscopy after bowel preparation",
          "Immediate upper endoscopy",
          "Repeat CT angiography in 6 hours",
          "Tagged red cell scan tomorrow",
        ],
        correct: 2,
        explanation: "The British Society of Gastroenterology notes that 11 to 15% of patients first thought to have lower GI bleeding have an upper source. It recommends immediate upper endoscopy when a patient with apparent lower bleeding is unstable and CT angiography shows no source. His previous ulcer, naproxen and ASA, and urea raised out of proportion to creatinine all appear on its list of features that suggest an upper source. Bowel preparation for colonoscopy takes hours he does not have. Capsule endoscopy is for bleeding not found after upper and lower endoscopy. A repeat CT or a tagged scan delays the answer.",
        keyFeature: { topic: T, n: 2 },
        source: "bsg-lgib",
      },
      {
        id: "q4",
        kind: "single",
        update: "Upper endoscopy shows a duodenal ulcer with a visible vessel, which is treated with clips and thermal coagulation.",
        prompt: "Which of the following acid suppression plans is most appropriate after his successful endoscopic therapy?",
        options: [
          "Famotidine 20 mg IV twice daily",
          "High-dose IV PPI for 72 hours",
          "Oral PPI once daily from today",
          "PPI only if he rebleeds",
          "Single 80 mg IV PPI bolus, then stop",
        ],
        correct: 1,
        explanation: "A visible vessel is a high-risk stigma. The International Consensus Group recommends that patients with high-risk ulcers who have had successful endoscopic therapy receive high-dose PPI, an IV loading dose followed by a continuous infusion, for 3 days. Oral PPI twice daily follows through day 14, then once daily. A single bolus, once daily oral therapy from the first day, or waiting for a rebleed all give less acid suppression during the days when rebleeding is most likely. An H2 receptor antagonist is not the recommended agent.",
        keyFeature: { topic: T, n: 6 },
        source: "icg-2019",
      },
    ],
    sources: [S.bsg, S.aljebreen, S.icg],
    ...META,
  },
  {
    id: "gi-bleed-49",
    topic: T,
    title: "Breathless man with lung disease",
    stem: "A 74-year-old man with COPD is brought to the emergency department by his daughter with 4 days of worsening breathlessness on exertion and fatigue. He can no longer walk to his mailbox. He has no change in his cough or sputum, no fever and no chest pain. He has not noticed blood or black stools. He uses tiotropium daily and salbutamol as needed. He started apixaban 5 mg twice daily for atrial fibrillation 6 weeks ago, and has taken ibuprofen 400 mg three times daily for 3 weeks for hip pain. He also takes calcium carbonate and vitamin D. His conjunctivae are pale. His chest has quiet breath sounds with no wheeze, unchanged from his clinic notes. His usual oxygen saturation is 92% on room air, and his usual BP is about 140/80 mmHg.",
    vitals: { temperature: "36.6°C oral", pulse: "112/minute irregular", resp: "22/minute", bp: "104/62 mmHg", o2sat: "92% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests a cause other than his COPD for his breathlessness?",
        options: [
          "Breathlessness on exertion",
          "Fatigue for four days",
          "History of atrial fibrillation",
          "Pale conjunctivae with tachycardia",
          "Quiet breath sounds",
        ],
        correct: 3,
        explanation: "His cough, sputum, chest examination and oxygen saturation are all at his baseline, which argues against a COPD exacerbation. Pale conjunctivae with a resting pulse of 112/minute and a BP almost 40 mmHg below his usual point to anemia with hypoperfusion. In a man on apixaban and regular ibuprofen, hidden GI blood loss must be sought even though he reports no GI symptoms. Exertional breathlessness and fatigue are what brought him in and do not separate the causes. Quiet breath sounds are his baseline. Atrial fibrillation alone does not explain pallor.",
        keyFeature: { topic: T, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "Hemoglobin is 71 g/L (138 g/L 3 months ago), MCV 89 fL, platelets 240 x 10^9/L, urea 16.8 mmol/L and creatinine 96 umol/L. Rectal examination shows black tarry stool.",
        prompt: "Which of the following best explains the pattern of his blood results?",
        options: [
          "Acute upper GI blood loss",
          "Anemia of chronic COPD",
          "Chronic iron deficiency",
          "Dehydration with prerenal injury",
          "Hemolysis from apixaban",
        ],
        correct: 0,
        explanation: "His hemoglobin has fallen by 67 g/L, from 138 to 71 g/L, while the MCV is still normal, which fits recent bleeding before iron stores are used up. A urea of 16.8 mmol/L with a normal creatinine reflects blood protein digested in the gut, which points to an upper source, and the melena confirms GI bleeding. Chronic iron deficiency makes the red cells small. Anemia of chronic disease is mild and slow. Dehydration would raise the creatinine as well as the urea. Apixaban does not cause hemolysis.",
        keyFeature: { topic: T, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 units of red cells his pulse is 94/minute and BP 124/72 mmHg. His last apixaban dose was 10 hours ago. Upper endoscopy is planned for the morning.",
        prompt: "Which of the following is the most appropriate management of his apixaban at this time?",
        options: [
          "Andexanet alfa by protocol",
          "Four-factor PCC 2000 units IV",
          "Frozen plasma 4 units IV",
          "Hold apixaban, no reversal agent",
          "Vitamin K 10 mg IV",
        ],
        correct: 3,
        explanation: "He has responded to transfusion, and his last dose was 10 hours ago, so apixaban is held and its effect will fade before morning. The ACG and Canadian Association of Gastroenterology guideline suggests against prothrombin complex concentrate and against andexanet alfa for patients on a direct oral anticoagulant who present with GI bleeding. Frozen plasma adds volume without reversing a factor Xa inhibitor. Vitamin K reverses warfarin, not apixaban. The decision on restarting apixaban is made with gastroenterology once bleeding is controlled.",
        keyFeature: { topic: T, n: 6 },
        source: "acg-cag-2022",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following of his medications most increased his risk of this bleed in combination with apixaban?",
        options: [
          "Calcium carbonate daily",
          "Ibuprofen 400 mg three times daily",
          "Salbutamol as needed",
          "Tiotropium once daily",
          "Vitamin D 1000 units daily",
        ],
        correct: 1,
        explanation: "NSAIDs such as ibuprofen injure the gastric and duodenal mucosa and cause peptic ulcers, and three weeks of regular use on top of a new anticoagulant greatly raises the chance that an ulcer will bleed. The ibuprofen should be stopped and his hip pain managed another way, such as with acetaminophen. Inhaled tiotropium and salbutamol, calcium carbonate and vitamin D do not increase the risk of GI bleeding. Asking specifically about over-the-counter NSAIDs is part of the history in every GI bleed.",
        keyFeature: { topic: T, n: 1 },
        source: "tintinalli",
      },
    ],
    sources: [
      {
        id: "tintinalli",
        citation: "Tintinalli JE, Ma OJ, Yealy DM, Meckler GD, Stapczynski JS, Cline DM, Thomas SH, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020. Chapter on upper gastrointestinal bleeding.",
      },
      S.acgCag,
    ],
    ...META,
  },
];
