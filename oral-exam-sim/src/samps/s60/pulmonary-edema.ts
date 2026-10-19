// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  price: { id: "price-peds-hf", citation: "Price JF. Congestive heart failure in children. Pediatr Rev. 2019.", url: "https://doi.org/10.1542/pir.2016-0168" },
  ong: { id: "ong-apsgn", citation: "Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022.", url: "https://doi.org/10.5527/wjn.v11.i5.139" },
  caep: { id: "caep-ahf", citation: "Stiell IG, Almufleh A, Archambault PM, et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025.", url: "https://doi.org/10.1007/s43678-025-00961-y" },
  ohfrs: { id: "ohfrs-2017", citation: "Stiell IG, Perry JJ, Clement CM, et al. Prospective and explicit clinical validation of the Ottawa Heart Failure Risk Scale, with and without use of quantitative NT-proBNP. Acad Emerg Med. 2017.", url: "https://doi.org/10.1111/acem.13141" },
  ersNiv: { id: "ers-ats-niv", citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.", url: "https://doi.org/10.1183/13993003.02426-2016" },
  bts: { id: "bts-oxygen", citation: "O'Driscoll BR, Howard LS, Earis J, Mak V, British Thoracic Society Emergency Oxygen Guideline Group. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.", url: "https://doi.org/10.1136/thoraxjnl-2016-209729" },
  heartrisk6: { id: "heartrisk6", citation: "Stiell IG, Perry JJ, Eagles D, et al. The HEARTRISK6 Scale. Predicting short-term serious outcomes in emergency department acute heart failure patients. JACC Adv. 2024.", url: "https://doi.org/10.1016/j.jacadv.2024.100988" },
  icos: { id: "icos", citation: "Herrmann J, Lenihan D, Armenian S, et al. Defining cardiovascular toxicities of cancer therapies. An International Cardio-Oncology Society (IC-OS) consensus statement. Eur Heart J. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/" },
} satisfies Record<string, Source>;

export const PULMONARY_EDEMA_S60: Samp[] = [
  /* 39 Infant heart failure labelled as bronchiolitis ------------------------ */
  {
    id: "pulmonary-edema-39",
    topic: "pulmonary-edema",
    title: "Infant who breathes fast during feeds",
    stem:
      "A 4-month-old boy is brought to the emergency department by his parents with 5 days of fast breathing that is worse during feeds. A walk-in clinic diagnosed bronchiolitis 3 days ago. He now takes 60 mL per feed instead of 120 mL and sweats on his forehead while feeding. He has had no fever, cough or runny nose, and no one at home is sick. He was born at term weighing 3.6 kg, and his weight has fallen from the 50th to the 10th percentile. He is pale with subcostal retractions. There are fine crackles at both lung bases and no wheeze. A gallop is heard and there is no murmur. The liver edge is 4 cm below the right costal margin. Femoral pulses are equal to the brachial pulses. His feet are cool with a capillary refill of 3 seconds.",
    vitals: { temperature: "36.9°C rectal", pulse: "176/minute", resp: "68/minute", bp: "84/52 mmHg", o2sat: "93% on room air", weight: "5.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests heart failure rather than bronchiolitis in this infant?",
        options: ["Fine crackles at both lung bases", "Liver edge 4 cm below costal margin", "Oxygen saturation of 93%", "Respiratory rate of 68/minute at rest", "Subcostal retractions"],
        correct: 1,
        explanation:
          "Hepatomegaly is one of the commonest signs of congestion in infants with heart failure, and bronchiolitis does not explain a liver edge 4 cm below the costal margin. The rest of his story points the same way, with no fever or coryza, no sick contacts, sweating with feeds and weight falling across percentiles. Crackles, a fast respiratory rate, retractions and a saturation of 93% are all seen in viral lower respiratory infection as well, so none of them separates the two diagnoses.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "price-peds-hf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate next to support a diagnosis of heart failure in this infant?",
        options: ["Blood culture", "Capillary blood gas", "Chest radiograph", "Nasopharyngeal viral swab", "Urinalysis and culture"],
        correct: 2,
        explanation:
          "A chest radiograph usually shows an enlarged cardiac silhouette in a child with heart failure, which quickly moves the diagnosis away from bronchiolitis. Lung markings may look normal in pediatric heart failure, so a clear lung field does not rule it out, but cardiomegaly is the finding to look for. A viral swab would not exclude heart disease even if positive. A blood gas measures severity rather than cause. Blood and urine cultures look for sepsis, and he has had no fever.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "price-peds-hf",
      },
      {
        id: "q3",
        kind: "single",
        update: "The chest radiograph shows an enlarged cardiac silhouette with increased pulmonary vascular markings. Bedside ultrasound shows a dilated, poorly contracting left ventricle.",
        prompt: "Which of the following is the most appropriate initial treatment for his pulmonary congestion?",
        options: ["IV furosemide", "IV normal saline bolus", "Nebulized 3% saline", "Nebulized epinephrine", "Nebulized salbutamol"],
        correct: 0,
        explanation:
          "He has a dilated, poorly contracting ventricle with congestion on the film and in the liver, and loop diuretics such as furosemide are the preferred first-line treatment for congestion in children with heart failure. A saline bolus adds volume to a failing ventricle that is already congested and can worsen his pulmonary edema. Nebulized hypertonic saline, epinephrine and salbutamol are bronchiolitis or bronchospasm treatments that do nothing for fluid in the lungs from a weak heart.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "price-peds-hf",
      },
      {
        id: "q4",
        kind: "single",
        update: "The ECG shows sinus tachycardia with deep, wide Q waves in leads I and aVL.",
        prompt: "Which of the following investigations is most important to identify the cause of his heart failure?",
        options: ["Holter monitoring", "Respiratory viral PCR panel", "Serum troponin level", "Specialist echocardiography", "Sweat chloride test"],
        correct: 3,
        explanation:
          "In a child under 1 year with a new dilated, poorly functioning left ventricle, the origins of the coronary arteries must be shown on echocardiography to rule out an anomalous left coronary artery from the pulmonary artery. Deep Q waves in I and aVL suggest an infarct pattern from that lesion. A troponin may be raised but does not show the cause. Holter monitoring looks for tachycardia-induced cardiomyopathy, and his rhythm is sinus. A viral panel cannot exclude a coronary anomaly, and a sweat chloride test is for cystic fibrosis.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "price-peds-hf",
      },
    ],
    sources: [S.price],
    ...META,
  },
];
