import type { Item } from "@/engine/types";
import { ADULT_VAX, FORMULA, LAM, LOWDERMILK, MASTITIS, MMR, ROTA, VAX_ADMIN, VAX_GENERAL, WONG, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s10-31", {
      topic: "Early newborn screening sample",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A healthy term newborn is going home at 20 hours of age. The state newborn screening blood sample was drawn at 18 hours of age. Which instruction should the nurse give the parents?",
      rationale:
        "A newborn screening sample drawn before 24 hours of age can miss some disorders. Phenylketonuria is one example, because blood phenylalanine rises only after feeding is established. This sample was drawn at 18 hours, so a repeat screen is needed soon after discharge. Waiting for illness or for the 2-month visit could delay treatment of a disorder that causes lasting harm.",
      refs: ["A newborn screen drawn before 24 hours of age is repeated because some disorders may not yet be detectable."],
      canada: "Newborn screening in Canada is run by each province or territory, not a state. Newborn Screening Ontario, for example, requires a repeat sample after 24 hours when the first is taken earlier.",
      sources: [WONG, { body: "Newborn Screening Ontario", work: "Submitter Hub: Time of Collection", year: 2026, url: "https://submitterhub.newbornscreening.on.ca/dried-blood-spot/time-of-collection/" }],
    }),
    kind: "mc",
    options: [
      { text: "Return soon for a repeat screen", why: "A sample drawn before 24 hours of age needs a repeat to avoid missed disorders." },
      { text: "No further screening is needed", why: "A sample drawn at 18 hours can miss disorders such as phenylketonuria." },
      { text: "Repeat the screen only if the baby seems ill", why: "Screened disorders often show no signs until harm has begun." },
      { text: "Repeat the screen at the 2-month visit", why: "Waiting 2 months could delay treatment of a disorder that causes lasting harm." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-32", {
      topic: "Preparing powdered formula",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 1-month-old who is fed with powdered formula asks how to prepare and store bottles safely. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Clean hands lower the risk of bringing germs into the bottle. Prepared formula is used within 2 hours. Bottles not used right away go in the refrigerator and are used within 24 hours. Microwaves heat unevenly and can scald the mouth. Extra water dilutes the formula and can cause poor growth and low sodium. Formula left after a feeding holds bacteria from saliva and is thrown out.",
      refs: ["Prepared formula is used within 2 hours or refrigerated and used within 24 hours. Formula left in the bottle after a feeding is discarded."],
      sources: [FORMULA, WONG],
    }),
    kind: "sata",
    options: [
      { text: "Warm the bottle in the microwave", why: "Microwaves heat unevenly and can leave hot spots that scald the mouth." },
      { text: "Wash hands before preparing the bottle", why: "Clean hands lower the chance of germs getting into the formula." },
      { text: "Add extra water to make the powder last", why: "Diluted formula gives too few calories and can cause low sodium." },
      { text: "Use prepared formula within 2 hours", why: "Bacteria can grow in formula left at room temperature longer." },
      { text: "Save leftover formula for the next feeding", why: "Saliva adds bacteria, so leftover formula is thrown out." },
      { text: "Refrigerate unused bottles and use within 24 hours", why: "Cold storage slows bacterial growth for up to 24 hours." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s10-33", {
      topic: "Care after newborn circumcision",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the parents of a newborn who had a circumcision with a clamp this morning. Which statement by a parent shows a need for further teaching?",
      rationale:
        "A yellowish film forms over the glans in the first days. It is healing tissue, not infection, and it should not be washed off. Removing it can cause bleeding. Petroleum jelly with each diaper change keeps the site from sticking to the diaper. A loose diaper lowers pressure on the site. More than a few drops of blood needs a call.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "\"I will put petroleum jelly on it with each change.\"", why: "Petroleum jelly keeps the site from sticking to the diaper." },
      { text: "\"I will gently wash off the yellow crust.\"", why: "The yellow film is healing tissue. Removing it can cause bleeding." },
      { text: "\"I will call if there is more than a few drops of blood.\"", why: "Bleeding beyond a few drops needs follow-up." },
      { text: "\"I will fasten the diaper loosely over the area.\"", why: "A loose diaper lowers pressure and rubbing on the site." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-34", {
      topic: "Lactational amenorrhea method",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 3,
      stem: "A client who is 3 months postpartum asks whether breastfeeding alone can prevent another pregnancy. Which three conditions must all be present for this method to be effective? Select three.",
      rationale:
        "The lactational amenorrhea method works only when three criteria are all met. Menstrual periods have not returned. The infant is fully or nearly fully breastfed. The infant is younger than 6 months. Night feeds more than 6 hours apart, formula feeds and pumping in place of nursing weaken the suppression of ovulation.",
      refs: ["The lactational amenorrhea method needs amenorrhea, full or nearly full breastfeeding with gaps no longer than 4 hours by day or 6 hours at night, and an infant younger than 6 months."],
      sources: [LAM, LOWDERMILK],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Menstrual periods have not returned", why: "Amenorrhea is one of the three required criteria." },
      { text: "The infant gets formula at night", why: "Formula feeds reduce suckling and weaken the effect." },
      { text: "The infant is younger than 6 months", why: "The method is reliable only in the first 6 months." },
      { text: "Night feeds are 8 hours apart", why: "Gaps longer than 6 hours at night lower protection." },
      { text: "The infant is fully or nearly fully breastfed", why: "Frequent suckling suppresses ovulation." },
      { text: "Pumped milk replaces most feeds", why: "Direct suckling drives the hormone response the method relies on." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s10-35", {
      topic: "Rubella vaccine after birth",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A client who is not immune to rubella receives the measles, mumps and rubella vaccine before discharge after a vaginal birth. She is breastfeeding. Which information should the nurse include? Select all that apply.",
      rationale:
        "The vaccine contains live virus, so pregnancy is avoided for at least 4 weeks after the dose. Reliable birth control supports that plan. Breastfeeding is not a reason to delay or stop, and it can continue. The vaccine virus is not spread to others, so the client does not need to avoid infants. The newborn keeps the routine schedule.",
      refs: ["Pregnancy is avoided for 28 days, about 4 weeks, after MMR vaccine. Breastfeeding is not a contraindication."],
      sources: [MMR, LOWDERMILK],
    }),
    kind: "sata",
    options: [
      { text: "Stop breastfeeding for 72 hours", why: "Breastfeeding is not a contraindication to this vaccine." },
      { text: "Avoid pregnancy for at least 4 weeks", why: "The live virus poses a theoretical risk to a fetus in the first weeks." },
      { text: "Keep away from other infants for 2 weeks", why: "The vaccine virus is not spread to contacts." },
      { text: "Use a reliable birth control method", why: "Reliable contraception supports avoiding pregnancy after the dose." },
      { text: "Breastfeeding can continue as usual", why: "Breastfeeding is not a contraindication to MMR vaccine." },
      { text: "The newborn will need this vaccine early", why: "The newborn follows the routine schedule and needs no early dose." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s10-36", {
      topic: "Full breasts on day 3",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client who gave birth 3 days ago is breastfeeding. Both breasts are firm, warm and tender throughout. The areolae are tight and the newborn struggles to latch. There is no redness or lump. Temperature is 37.4°C (99.3°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Both breasts are full, firm and tender on day 3 with no redness or lump. This fits engorgement as milk comes in. Frequent feeding on demand moves milk. Cold between feeds reduces swelling. Stopping feeds worsens fullness. Extra pumping and deep massage add swelling and tissue injury. Softer breasts after feeds and good diaper output show milk transfer.",
      sources: [MASTITIS, LOWDERMILK],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Breast engorgement", why: "Both breasts full and tender on day 3 without redness fits engorgement." },
      { text: "Mastitis", why: "Mastitis shows a red, painful area, usually in one breast, often with fever." },
      { text: "Plugged milk duct", why: "A plugged duct shows a tender lump in one area. No lump is present." },
      { text: "Breast abscess", why: "An abscess shows a painful, fluid-filled mass. None is present." },
    ],
    actions: [
      { text: "Breastfeed on demand, 8 to 12 times a day", why: "Frequent, effective feeds move milk and relieve fullness." },
      { text: "Apply cold packs between feedings", why: "Cold reduces tissue swelling and pain." },
      { text: "Stop breastfeeding until swelling eases", why: "Stopping feeds leaves milk in the breast and worsens fullness." },
      { text: "Pump after every feed to empty the breasts", why: "Extra pumping signals more milk production and adds to swelling." },
      { text: "Massage the breasts deeply and firmly", why: "Deep massage can injure breast tissue and add swelling." },
    ],
    parameters: [
      { text: "Breast softness after feeds", why: "Softer breasts after a feed show milk is moving out." },
      { text: "Serum prolactin level", why: "Prolactin levels do not guide engorgement care." },
      { text: "Newborn wet diapers and weight", why: "Output and weight show the newborn is getting milk." },
      { text: "White blood cell count", why: "There is no sign of infection that a blood count would guide." },
      { text: "Maternal blood glucose", why: "Glucose does not guide care of engorgement." },
    ],
    correct: { condition: 0, actions: [0, 1], parameters: [0, 2] },
  },
  {
    ...meta("rn-s10-37", {
      topic: "Upper age limit for rotavirus vaccine",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "An infant who is 16 weeks old comes for a first well visit after the family moved from another country. The infant has had no vaccines. The parent asks about the oral rotavirus vaccine. Which response by the nurse is accurate?",
      rationale:
        "The first rotavirus dose must be given by 14 weeks 6 days of age. The series is not started at 15 weeks 0 days or older because safety data for a first dose at older ages are lacking. This infant is 16 weeks old, so the series is not started. Other catch-up vaccines can still be given.",
      refs: ["The first rotavirus dose is given by 14 weeks 6 days of age. The series is not started at 15 weeks 0 days or older."],
      sources: [ROTA],
    }),
    kind: "mc",
    options: [
      { text: "\"Your baby is past the age to start it.\"", why: "The series is not started at 15 weeks or older. This infant is 16 weeks old." },
      { text: "\"Your baby can start the series today.\"", why: "A first dose after 14 weeks 6 days is not given." },
      { text: "\"Your baby can start it at 6 months.\"", why: "Waiting makes the infant even further past the age limit." },
      { text: "\"Your baby needs only one catch-up dose.\"", why: "No dose of the series is started at this age." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-38", {
      topic: "Spacing live vaccines",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 13-month-old received the measles, mumps and rubella vaccine at another clinic 12 days ago. The child is now due for varicella vaccine and is well today. What should the nurse do?",
      rationale:
        "Two injected live vaccines are given on the same day or at least 28 days apart. The first vaccine can blunt the immune response to a second one given too soon. The MMR was given 12 days ago, so varicella waits until 28 days after it. A dose given today may not count. Repeating the MMR is not needed.",
      refs: ["Two injected live vaccines not given on the same day are separated by at least 28 days."],
      sources: [VAX_GENERAL],
    }),
    kind: "mc",
    options: [
      { text: "Give the varicella vaccine today", why: "Only 12 days have passed. A live vaccine given now may not count." },
      { text: "Give MMR again with varicella today", why: "The MMR dose from 12 days ago is valid and needs no repeat." },
      { text: "Wait 6 months before giving varicella", why: "The interval between live vaccines is 28 days, not 6 months." },
      { text: "Wait until 28 days after the MMR", why: "Live injected vaccines not given together are spaced at least 28 days apart." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-39", {
      topic: "Intramuscular site for an infant",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give an intramuscular vaccine to a 2-month-old who weighs 5 kg. Which site and needle length should the nurse use?",
      rationale:
        "In infants the vastus lateralis in the anterolateral thigh is the largest muscle. A 1-inch needle reaches the muscle in most infants. The deltoid is too small in infancy. A 1.5-inch needle is longer than needed and could reach bone. A 5/8-inch needle may stay in the fat layer after the newborn period.",
      sources: [VAX_ADMIN],
    }),
    kind: "mc",
    options: [
      { text: "Vastus lateralis with a 1-inch needle", why: "The thigh muscle is largest in infants and 1 inch reaches it." },
      { text: "Deltoid with a 1-inch needle", why: "The deltoid is too small for injections in infancy." },
      { text: "Deltoid with a 5/8-inch needle", why: "The deltoid is too small and a short needle may not reach muscle." },
      { text: "Vastus lateralis with a 1.5-inch needle", why: "A 1.5-inch needle is too long for an infant thigh." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-40", {
      topic: "Vaccines for an older adult",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A healthy 67-year-old client has a wellness visit in October. The client has never had a pneumococcal vaccine. The client completed 2 doses of recombinant zoster vaccine at age 62 and had a Td booster 4 years ago. Which vaccines should the nurse anticipate? Select all that apply.",
      rationale:
        "Influenza vaccine is given every year and October is a good time. Adults 50 and older who have not had a pneumococcal vaccine should get one. The zoster series is complete. The Td booster is not due until 10 years after the last dose. A healthy client aged 67 does not meet the age or risk criteria for RSV vaccine. HPV vaccine is not advised at this age.",
      refs: [
        "Influenza vaccine is given yearly. Adults 50 and older receive pneumococcal vaccine. Td or Tdap is repeated every 10 years.",
        "RSV vaccine is advised for all adults 75 and older and for adults 50 to 74 at increased risk.",
      ],
      canada: "NACI advises pneumococcal conjugate vaccine for all adults from 65, not 50. RSV vaccine is for adults 75 and older or 65 to 74 at increased risk. Programs vary by province.",
      sources: [ADULT_VAX, { body: "Public Health Agency of Canada, National Advisory Committee on Immunization", work: "Canadian Immunization Guide: Pneumococcal Vaccines", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-16-pneumococcal-vaccine.html" }, { body: "Public Health Agency of Canada, National Advisory Committee on Immunization", work: "Canadian Immunization Guide: Respiratory Syncytial Virus (RSV) Vaccines", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/respiratory-syncytial-virus.html" }],
    }),
    kind: "sata",
    options: [
      { text: "Td booster", why: "The last Td was 4 years ago. The next is due at 10 years." },
      { text: "Influenza vaccine", why: "Influenza vaccine is advised every year for adults." },
      { text: "Recombinant zoster vaccine", why: "The client already completed the 2-dose series." },
      { text: "Pneumococcal vaccine", why: "Adults 50 and older without a prior dose should receive it." },
      { text: "Respiratory syncytial virus vaccine", why: "A healthy client under 75 does not meet the criteria for RSV vaccine." },
      { text: "Human papillomavirus vaccine", why: "HPV vaccine is not advised for adults of this age." },
    ],
    correct: [1, 3],
  },
];
