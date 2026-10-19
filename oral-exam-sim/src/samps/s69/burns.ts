// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  mckee: { id: "mckee-hf", citation: "McKee D, Thoma A, Bailey K, Fish J. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4116323/" },
  cag: { id: "cag-calcium-gluconate", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Calcium gluconate. Updated 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/calcium-gluconate" },
  abaRef: { id: "aba-referral", citation: "American Burn Association. Guidelines for burn patient referral. 2025.", url: "https://ameriburn.org/burnreferral" },
  kohan: { id: "kohan-buprenorphine", citation: "Kohan L, Potru S, Barreveld AM, and colleagues. Buprenorphine management in the perioperative period: educational review and recommendations from a multisociety expert panel. Reg Anesth Pain Med. 2021.", url: "https://asra.com/guidelines-articles/original-articles/article-item/guidelines/2021/08/12/buprenorphine-management-in-the-perioperative-period" },
  hampson: { id: "hampson-co", citation: "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. Am J Respir Crit Care Med. 2012." },
  walker: { id: "walker-inhalation", citation: "Walker PF, Buehner MF, Wood LA, and colleagues. Diagnosis and management of inhalation injury: an updated review. Crit Care. 2015.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4624587/" },
  berry: { id: "berry-eye", citation: "Berry J, Ashley J, Jeffery S. Ophthalmological evaluation of facial burns in a regional burns centre. Burns. 2020.", url: "https://pureportal.bcu.ac.uk/en/publications/ophthalmological-evaluation-of-facial-burns-in-a-regional-burns-c/" },
} satisfies Record<string, Source>;

export const BURNS_S69: Samp[] = [
  /* 39 Glass etching cream -------------------------------------------------- */
  {
    id: "burns-39",
    topic: "burns",
    title: "Throbbing fingertips after a craft afternoon",
    stem:
      "A 58-year-old woman presents to the emergency department at 02:00 with severe throbbing pain in the tips of her right index and middle fingers. The pain began at about 21:00 and has steadily worsened. Yesterday afternoon she spent 3 hours decorating glass jars with a glass etching cream bought at a craft store. She wore no gloves, wiped stray cream off the stencils with her fingertips and washed her hands when she finished. She has hypothyroidism treated with levothyroxine. She rates the pain 10 out of 10. The pads of both fingertips are slightly pale. There are no blisters, no swelling of the pulp, no fluctuance and no redness around the nails. Capillary refill is brisk and sensation is normal. The rest of the hand is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "18/minute", bp: "148/86 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the pain in her fingertips?",
        options: ["Acute bacterial paronychia", "Felon of the finger pulp", "Fluoride burn from the cream", "Herpes simplex whitlow", "Primary Raynaud phenomenon"],
        correct: 2,
        explanation:
          "Glass etching creams contain fluoride salts such as ammonium bifluoride, which release hydrofluoric acid on the skin. Dilute fluoride burns cause deep, throbbing pain that can begin hours after contact while the skin looks almost normal, which matches pain starting about 6 hours after she wiped the cream with bare fingertips. A felon and a paronychia are bacterial infections that cause a tense, swollen pulp or redness and pus at the nail fold, and she has neither. A herpetic whitlow shows grouped vesicles. Raynaud phenomenon causes episodes of colour change with cold, not constant pain confined to the two fingers that touched the cream.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q2",
        kind: "single",
        update: "You start calcium gluconate 2.5% gel, applied inside a surgical glove over her right hand.",
        prompt: "Which of the following is the most appropriate analgesia for her while the topical treatment continues?",
        options: ["bupivacaine 0.5% digital block", "hydromorphone 1 mg IV, titrated", "lidocaine 4% cream to fingertips", "lidocaine 1% digital block", "lidocaine 1% wrist block"],
        correct: 1,
        explanation:
          "Relief of pain is the clinical sign that calcium has bound the fluoride in her tissues, so it tells you whether the gel is working or whether she needs more invasive treatment. Titrated IV hydromorphone eases her pain of 10 out of 10 and leaves that signal intact. A digital or wrist block with lidocaine or bupivacaine removes the pain that guides treatment, and local anesthetic infiltration can also raise tissue tension in the finger. Lidocaine cream acts only on the surface, does not bind fluoride and would take the place of the calcium gel inside the glove.",
        keyFeature: { topic: "burns", n: 6 },
        source: "mckee-hf",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 hour of gel, changed once, her pain is still 9 out of 10 and both fingertip pads remain pale.",
        prompt: "Which of the following is the most appropriate next treatment for her fingers?",
        options: ["Intra-arterial calcium gluconate infusion", "Magnesium sulfate 2 g IV", "Pulp infiltration of calcium chloride 10%", "Pulp infiltration of calcium gluconate 10%", "Water irrigation for another hour"],
        correct: 0,
        explanation:
          "Pain that persists despite well applied calcium gel means fluoride is still active deep in the finger, and an intra-arterial calcium gluconate infusion carries calcium to that tissue. The Canadian Antidote Guide gives 10 mL of calcium gluconate 10% in 40 mL of D5W over 4 hours through an arterial catheter proximal to the burn, repeated until relief lasts more than 4 hours. Calcium gluconate should not be infiltrated into the fingers, and calcium chloride is avoided for infiltration because it is toxic to tissue. IV magnesium treats systemic hypomagnesemia, which a fingertip exposure does not cause. Irrigation helps in the first minutes after contact, not 8 hours later.",
        keyFeature: { topic: "burns", n: 6 },
        source: "cag-calcium-gluconate",
      },
      {
        id: "q4",
        kind: "single",
        update: "A radial arterial catheter is placed and the first infusion is started. Her pain begins to ease.",
        prompt: "Which of the following is the most appropriate disposition for her after the first infusion is started?",
        options: ["Discharge once the first infusion ends", "Discharge with gel and next day review", "Monitored admission for the infusion", "Observe in the department for 6 hours", "Refer to hand clinic in 1 week"],
        correct: 2,
        explanation:
          "An arterial infusion needs an arterial line, nursing care and repeat 4 hour infusions until pain stays away, so she needs a monitored admission, with hand or burn surgery following the fingers. Stopping after one infusion, or after a fixed 6 hour observation, ignores the rule that treatment repeats until relief lasts more than 4 hours. Discharge with gel and next day review suited her before the gel failed, not now. A hand clinic visit in 1 week leaves an active fluoride burn untreated in the meantime. All chemical injuries also merit a call to the burn centre.",
        keyFeature: { topic: "burns", n: 5 },
        source: "cag-calcium-gluconate",
      },
    ],
    sources: [S.cag, S.mckee],
    ...META,
  },
];
