import type { Item } from "@/engine/types";
import { GOSAIN_HAEC, HOCKENBERRY, KAPLAN_VARICES, NEMOURS_CF, UMPIERREZ_HHS, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s38-11", {
      need: "PA",
      topic: "First prescriptions for bleeding varices",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 57-year-old client with cirrhosis vomits 600 mL of bright red blood. Heart rate is 118/minute and BP is 92/56 mmHg. Hemoglobin is 8.1 g/dL (81 g/L). Endoscopy is planned within 12 hours. Which two prescriptions should the nurse anticipate? Select two.",
      rationale:
        "Bleeding varices in cirrhosis are treated with a vasoactive drug such as octreotide, started before endoscopy. Octreotide lowers portal blood flow. A short course of IV ceftriaxone is also given. It lowers the rates of infection, rebleeding and death. Transfusion uses a restrictive threshold because a high hemoglobin target raises portal pressure. A beta blocker is held while the BP is low. Ibuprofen worsens bleeding.",
      sources: [KAPLAN_VARICES],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Red cells until hemoglobin is 10 g/dL (100 g/L)", why: "Transfusing to a high hemoglobin raises portal pressure and the risk of rebleeding." },
      { text: "Octreotide by continuous IV infusion", why: "A vasoactive drug lowers portal blood flow and helps control the bleeding." },
      { text: "Propranolol 20 mg by mouth now", why: "A beta blocker is held during acute bleeding with a BP of 92/56 mmHg." },
      { text: "Ceftriaxone 1 g IV every 24 hours", why: "Short-term antibiotics lower infection, rebleeding and death after a variceal bleed." },
      { text: "Ibuprofen 400 mg by mouth for pain", why: "An NSAID impairs platelets and can harm the kidneys in cirrhosis." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s38-12", {
      need: "PA",
      topic: "Estimating osmolality in a hyperglycemic crisis",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 74-year-old client with type 2 diabetes has been increasingly drowsy for 3 days. Blood glucose is 900 mg/dL (50.0 mmol/L) and serum sodium is 148 mEq/L (148 mmol/L). Urine ketones are negative. The nurse estimates effective serum osmolality as 2 times the sodium plus the glucose divided by 18. What is the client's effective osmolality?",
      rationale:
        "Doubling the sodium of 148 mEq/L gives 296. A glucose of 900 mg/dL divided by 18 gives 50. The sum is 346 mOsm/kg. An effective osmolality above 300 mOsm/kg with a glucose of 600 mg/dL or more and no ketones fits hyperosmolar hyperglycemic state. The high osmolality draws water out of brain cells and explains the drowsiness.",
      calc: { expr: "2 * 148 + 900 / 18", answer: 346, unit: "mOsm/kg", round: 0, steps: ["2 * 148 = 296", "900 / 18 = 50", "296 + 50 = 346"] },
      refs: ["Hyperosmolar hyperglycemic state: glucose 600 mg/dL (33.3 mmol/L) or more and effective osmolality above 300 mOsm/kg."],
      sources: [UMPIERREZ_HHS],
    }),
    kind: "mc",
    options: [
      { text: "198 mOsm/kg", why: "This adds 148 and 50 without doubling the sodium." },
      { text: "296 mOsm/kg", why: "This doubles the sodium but leaves out the glucose term of 50." },
      { text: "346 mOsm/kg", why: "296 from the sodium plus 50 from the glucose gives 346 mOsm/kg." },
      { text: "1196 mOsm/kg", why: "This adds the full glucose of 900 without dividing it by 18." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s38-13", {
      need: "PA",
      topic: "Telescoping bowel in an infant",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 9-month-old infant has had sudden episodes of screaming with the knees drawn to the chest every 15 to 20 minutes since this morning. Between episodes the infant is quiet and pale. The infant has vomited twice. The nurse suspects intussusception. Which other findings would support this? Select all that apply.",
      rationale:
        "In intussusception one part of the bowel slides into the next. Bouts of colicky pain with the knees drawn up are typical. A sausage-shaped mass is often felt in the right upper abdomen, and the right lower quadrant can feel empty. Stool mixed with blood and mucus looks like red currant jelly. An olive-shaped mass and projectile vomiting point to pyloric stenosis. Ribbon-like stools point to Hirschsprung disease.",
      sources: [HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "An olive-shaped mass in the upper abdomen", why: "An olive-shaped mass is the thickened pylorus of pyloric stenosis." },
      { text: "Stool like red currant jelly", why: "Blood and mucus from the trapped bowel give this typical stool." },
      { text: "A sausage-shaped mass in the right upper abdomen", why: "The telescoped bowel can be felt as a sausage-shaped mass." },
      { text: "Ribbon-like stools with a foul smell", why: "Ribbon-like, foul stools suggest Hirschsprung disease." },
      { text: "An empty feeling in the right lower abdomen", why: "The bowel has moved out of the right lower quadrant, which can feel empty." },
      { text: "Projectile vomiting right after each feeding", why: "Projectile vomiting after feeds is typical of pyloric stenosis." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s38-14", {
      need: "PA",
      topic: "A normal stool while waiting for enema reduction",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 10-month-old infant with intussusception confirmed by ultrasound is waiting for an air enema reduction. Earlier the infant passed stool with blood and mucus. While waiting, the infant passes a large, soft brown stool and begins to play. Which action should the nurse take?",
      rationale:
        "A normal brown stool after a bloody stool can mean the intussusception has reduced on its own. The primary health care provider needs to know at once. The provider may confirm the reduction and change the plan. Going ahead without reporting it risks an unneeded procedure. The infant stays without food until the provider decides. The stool is not an expected finding before reduction.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Continue the enema preparation as scheduled", why: "The stool may mean the bowel has reduced. The provider needs to review the plan first." },
      { text: "Notify the primary health care provider", why: "A normal stool may signal spontaneous reduction, which the provider must assess." },
      { text: "Offer the infant a bottle of formula", why: "The infant takes nothing by mouth until the provider decides on the plan." },
      { text: "Tell the parents this stool is expected", why: "A normal stool is not expected before reduction. It may change the plan." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s38-15", {
      need: "PA",
      topic: "Phone triage after a pull-through operation",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A pediatric surgery clinic nurse returns calls from the parents of four children with Hirschsprung disease. Each child had a pull-through operation in the past 3 months. Which child should the nurse arrange to be seen first?",
      rationale:
        "Enterocolitis is the most serious complication of Hirschsprung disease and can occur after a pull-through. Fever, a swollen abdomen and explosive stools are its classic signs. It can progress quickly, so the child needs prompt assessment. Frequent loose stools with diaper rash are common after surgery. Straining with a daily soft stool and teething fussiness are not urgent.",
      sources: [GOSAIN_HAEC, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "A 4-month-old with 6 loose stools a day and a sore red diaper area", why: "Frequent loose stools and perianal redness are common after a pull-through." },
      { text: "A 2-year-old who strains but passes a soft stool every day", why: "Some straining with a daily soft stool does not suggest an urgent problem." },
      { text: "A 6-month-old with a fever, a swollen belly and explosive stools", why: "These are the classic signs of enterocolitis, which can progress quickly." },
      { text: "A 9-month-old who is teething and fussy during the night", why: "Teething discomfort is not a sign of a surgical complication." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s38-16", {
      need: "PA",
      topic: "Fluid for home rectal washouts in an infant",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 2-month-old infant with Hirschsprung disease will have rectal irrigations at home until the pull-through operation. The parent asks which fluid to use for the irrigations. Which fluid should the nurse teach the parent to use?",
      rationale:
        "Rectal irrigations wash retained stool out of the colon. Isotonic sodium chloride is used because it does not shift water across the bowel wall. Plain tap water is hypotonic. Repeated use can be absorbed and cause water intoxication in an infant. Phosphate enemas can cause dangerous electrolyte shifts in infants. Soapsuds irritate the bowel lining.",
      sources: [HOCKENBERRY, GOSAIN_HAEC],
    }),
    kind: "mc",
    options: [
      { text: "Warm tap water", why: "Tap water is hypotonic and can be absorbed, causing water intoxication." },
      { text: "A sodium phosphate enema", why: "Phosphate enemas can cause dangerous electrolyte shifts in infants." },
      { text: "A soapsuds solution", why: "Soap irritates the bowel lining and is not used for irrigations." },
      { text: "Isotonic sodium chloride", why: "An isotonic solution cleans out stool without drawing water into the body." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s38-17", {
      need: "PA",
      topic: "Quieter stridor in a tiring toddler",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 2-year-old child with croup had loud inspiratory stridor at rest and suprasternal retractions 1 hour ago. Now the stridor is barely heard, air entry is reduced in both lungs and the child is hard to rouse. SpO2 is 89%. The parent says, \"He sounds so much better.\" How should the nurse interpret these findings?",
      rationale:
        "Stridor gets quieter when less air moves through a narrowed airway. Reduced air entry, a low level of consciousness and an SpO2 of 89% show exhaustion and failing breathing. This child needs immediate escalation and airway support. Improvement would bring quieter stridor with good air entry, an alert child and a normal SpO2.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Airway obstruction is getting worse", why: "Less stridor with less air entry and drowsiness means little air is moving." },
      { text: "The croup is resolving with treatment", why: "Recovery brings good air entry and an alert child. This child has neither." },
      { text: "The child is sleeping after a tiring night", why: "Normal sleep does not reduce air entry or drop the SpO2 to 89%." },
      { text: "Anxiety has eased now that the child is calm", why: "A child who is hard to rouse is exhausted or hypoxic, not calm." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s38-18", {
      need: "PA",
      topic: "Salt losses at a summer camp",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 10-year-old child with cystic fibrosis will attend a week-long summer day camp. Daytime temperatures are expected to reach 33°C (91.4°F). Which instruction should the nurse include in the plan for camp?",
      rationale:
        "Sweat in cystic fibrosis carries far more salt than normal sweat. Heavy sweating in hot weather can cause salt depletion and dehydration. Extra salt in food and drinks, with plenty of fluid, replaces the losses. Limiting fluids thickens mucus. Enzymes are needed with every meal and snack. Active play helps clear the airways.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Limit fluids to reduce mucus volume", why: "Less fluid thickens mucus and adds to the risk of dehydration." },
      { text: "Skip pancreatic enzymes on camp days", why: "Enzymes are needed with every meal and snack to absorb fat." },
      { text: "Add extra salt to food and drinks", why: "Salty sweat in heat depletes sodium, so extra salt replaces it." },
      { text: "Avoid running games during camp", why: "Exercise helps airway clearance and is encouraged with extra fluid and salt." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s38-19", {
      need: "PA",
      topic: "Giving enzyme capsules to a preschooler",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches the parent of a 3-year-old child with cystic fibrosis about pancrelipase capsules. Which two statements by the parent show understanding? Select two.",
      rationale:
        "Pancrelipase works on the food eaten with it, so it is given at the start of every meal and snack. A young child can take the opened capsule's beads on a spoon of acidic soft food such as applesauce. The beads are swallowed whole. Crushing or mixing them into milk breaks the coating, and stomach acid then destroys the enzyme. One morning dose does not cover later meals.",
      sources: [HOCKENBERRY],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will give it at the start of meals and snacks.\"", why: "The enzyme acts on the food eaten with it, including snacks." },
      { text: "\"I will crush the beads so they work faster.\"", why: "Crushing breaks the coating and lets stomach acid destroy the enzyme." },
      { text: "\"I will sprinkle the beads on some applesauce.\"", why: "An acidic soft food keeps the coating intact until the beads are swallowed." },
      { text: "\"I will skip the dose when she has a snack.\"", why: "Snacks with fat and protein also need enzymes for absorption." },
      { text: "\"I will stir the beads into her cup of milk.\"", why: "Milk can dissolve the coating early, and the enzyme is then lost to stomach acid." },
      { text: "\"I will give one large dose of it every morning.\"", why: "One morning dose does not act on meals eaten later in the day." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s38-20", {
      need: "PA",
      topic: "Sequence of morning airway treatments",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 14-year-old with cystic fibrosis has a morning treatment plan of nebulized albuterol, nebulized 7% hypertonic saline, high-frequency chest wall oscillation and inhaled tobramycin. Place the treatments in the order the nurse should give them.",
      rationale:
        "Albuterol opens the airways first so the next treatments reach deeper. Hypertonic saline then draws water into the mucus to loosen it. Chest wall oscillation moves the loosened mucus up and out. Tobramycin is given after airway clearance so it reaches clearer airways and the remaining bacteria. The enzyme capsule goes with meals and the glucose check is not part of this sequence.",
      sources: [NEMOURS_CF, HOCKENBERRY],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Inhaled tobramycin", why: "The antibiotic goes last, after clearance has opened and cleared the airways." },
      { text: "Albuterol by nebulizer", why: "The bronchodilator goes first to widen the airways." },
      { text: "Pancreatic enzyme capsule", why: "Enzymes are taken with meals and are not part of the airway sequence." },
      { text: "Hypertonic saline nebulizer", why: "Saline follows the bronchodilator to loosen mucus before clearance." },
      { text: "Chest wall oscillation vest", why: "Airway clearance follows the mucus treatments and comes before the antibiotic." },
      { text: "Bedside blood glucose check", why: "A glucose check is not part of the airway treatment sequence." },
    ],
    correct: [1, 3, 4, 0],
  },
];
