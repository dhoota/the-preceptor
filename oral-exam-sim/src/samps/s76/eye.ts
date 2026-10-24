// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  belongia: {
    id: "belongia-gladiatorum",
    citation: "Belongia EA, Goodman JL, Holland EJ, et al. An outbreak of herpes gladiatorum at a high-school wrestling camp. N Engl J Med. 1991.",
  },
  rveeh: {
    id: "rveeh-hsv",
    citation: "Royal Victorian Eye and Ear Hospital Emergency Department. Herpetic corneal infections. Clinical practice guideline CPG18.0, version 4.0. 2020.",
    url: "https://eyeandear.org.au/wp-content/uploads/2021/11/Herpetic-Corneal-Infections-Clinical-Practice-Guideline1.pdf",
  },
  azari: {
    id: "azari-conjunctivitis",
    citation: "Azari AA, Barney NP. Conjunctivitis: a systematic review of diagnosis and treatment. JAMA. 2013.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4049531/",
  },
  aaoHsv: {
    id: "aao-hsv",
    citation: "White ML, Chodosh J. Herpes simplex virus keratitis: a treatment guideline. American Academy of Ophthalmology. 2014.",
    url: "https://www.aao.org/education/clinical-statement/herpes-simplex-virus-keratitis-treatment-guideline",
  },
  lay: {
    id: "lay-ahc",
    citation: "Lay K, Chukmol K, Chea G, et al. Acute haemorrhagic conjunctivitis outbreak attributed to coxsackievirus A24 in Ratanakiri, Cambodia, 2023. Western Pac Surveill Response J. 2026.",
    url: "https://ojs.wpro.who.int/ojs/index.php/wpsar/article/view/1226/1270",
  },
  phacSyphClin: {
    id: "phac-syphilis-clinical",
    citation: "Public Health Agency of Canada. Syphilis guide: risk factors and clinical manifestations. Canadian guidelines on sexually transmitted infections. 2023.",
    url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/risk-factors-clinical-manifestation.html",
  },
  phacSyphTx: {
    id: "phac-syphilis-treatment",
    citation: "Public Health Agency of Canada. Syphilis guide: treatment and follow-up. Canadian guidelines on sexually transmitted infections. Updated 2026.",
    url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/syphilis/treatment-follow-up.html",
  },
  cdcSti: {
    id: "cdc-sti-2021",
    citation: "Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment guidelines, 2021. MMWR Recomm Rep. 2021.",
    url: "https://www.cdc.gov/std/treatment-guidelines/neurosyphilis.htm",
  },
  zhou: {
    id: "open-globe",
    citation: "Zhou Y, DiSclafani M, Jeang L, Shah AA. Open globe injuries: review of evaluation, management, and surgical pearls. Clin Ophthalmol. 2022.",
    url: "https://doi.org/10.2147/OPTH.S372011",
  },
  stein: {
    id: "stein-airbag",
    citation: "Stein JD, Jaeger EA, Jeffers JB. Air bags and ocular injuries. Trans Am Ophthalmol Soc. 1999.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1298254/",
  },
  barnes: {
    id: "barnes-airbag-alkali",
    citation: "Barnes SS, Wong W Jr, Affeldt JC. A case of severe airbag related ocular alkali injury. Hawaii J Med Public Health. 2012.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3419824/",
  },
  eyewikiHyphema: {
    id: "eyewiki-hyphema",
    citation: "Oldham GW and colleagues, American Academy of Ophthalmology EyeWiki. Hyphema. Updated 2026.",
    url: "https://eyewiki.org/Hyphema",
  },
} satisfies Record<string, Source>;

export const EYE_S76: Samp[] = [
  /* 39 Lid blisters in a wrestler ------------------------------------------ */
  {
    id: "eye-39",
    topic: "eye",
    title: "Wrestler with a watery eye",
    stem:
      "A 17-year-old boy presents to the emergency department with 3 days of a red, watery left eye. It feels irritated but not painful. Two days before the redness began, a cluster of small blisters appeared on his left upper eyelid and cheek. He wrestles for his high school team, and two teammates have had similar blisters on the face this week. Last month his sister had pink eye. He has seasonal allergies treated with cetirizine and uses a fluticasone nasal spray. He does not wear contact lenses. Visual acuity is 20/20 in each eye. There are grouped vesicles on a red base on the left upper lid margin and cheek. The left conjunctiva is injected with follicles, and a tender left preauricular node is felt.",
    vitals: { temperature: "37.6°C oral", pulse: "84/minute", resp: "16/minute", bp: "122/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of his history is most relevant to the cause of his red eye?",
        options: [
          "Blisters on two teammates' faces",
          "Daily fluticasone nasal spray",
          "Normal vision since onset",
          "Seasonal allergies on cetirizine",
          "Sister with pink eye last month",
        ],
        correct: 0,
        explanation:
          "Grouped lid vesicles in a wrestler whose teammates have facial blisters point to herpes simplex type 1 spread by skin to skin contact, known as herpes gladiatorum. In a camp outbreak a third of the wrestlers were infected, most lesions were on the head, and some had conjunctivitis or blepharitis. His sister's pink eye was a month ago, and adenovirus does not cause vesicles. Allergy causes itch in both eyes without blisters. A nasal spray does not explain a vesicular rash. Normal vision is reassuring but says nothing about the cause.",
        keyFeature: { topic: "eye", n: 2 },
        source: "belongia-gladiatorum",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important part of the examination to guide treatment of his left eye?",
        options: [
          "Dilated fundus examination",
          "Fluorescein staining of the cornea",
          "Intraocular pressure measurement",
          "Swinging flashlight test",
          "Upper lid eversion",
        ],
        correct: 1,
        explanation:
          "Herpes simplex can spread from the lid and conjunctiva to the corneal epithelium. Fluorescein shows a dendritic ulcer with branching and terminal bulbs, and epithelial keratitis changes both treatment and the urgency of ophthalmology review. Corneal sensation is tested before any anesthetic drop. His vision is 20/20 with no floaters, so a dilated fundus view and a swinging flashlight test for an optic nerve problem are less urgent. Pressure matters when the anterior chamber is inflamed, but the cornea is the first question. Lid eversion looks for a foreign body, and none is suspected.",
        keyFeature: { topic: "eye", n: 3 },
        source: "rveeh-hsv",
      },
      {
        id: "q3",
        kind: "single",
        update: "Fluorescein shows no corneal staining. Corneal sensation is normal and the anterior chamber is quiet. He has no drug allergies.",
        prompt: "Which of the following is the most appropriate treatment for the condition affecting his left eye?",
        options: [
          "Hydrocortisone 1% cream to the eyelid",
          "Moxifloxacin 0.5% drops three times daily",
          "Prednisolone acetate 1% drops four times daily",
          "Tobramycin and dexamethasone drops four times daily",
          "Valacyclovir 500 mg PO three times daily",
        ],
        correct: 4,
        explanation:
          "Herpes simplex blepharoconjunctivitis without corneal involvement is treated with an antiviral to shorten the illness and protect the cornea. A systematic review lists valacyclovir 500 mg three times daily or acyclovir 400 mg five times daily for 7 to 10 days. The same review says topical corticosteroids should be avoided because they potentiate the virus. Prednisolone and the tobramycin and dexamethasone combination are steroid drops. Hydrocortisone cream on the lid margin also puts a steroid on the eye. Moxifloxacin has no activity against a virus.",
        keyFeature: { topic: "eye", n: 4 },
        source: "azari-conjunctivitis",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following later findings would make a topical corticosteroid appropriate, with antiviral cover, under ophthalmology care?",
        options: [
          "Branching ulcer with terminal bulbs",
          "Geographic ulcer with scalloped edges",
          "Grouped vesicles on the lid margin",
          "Stromal haze with intact epithelium",
          "Watery discharge with follicles",
        ],
        correct: 3,
        explanation:
          "Stromal keratitis with an intact epithelium is an immune reaction with little live virus, and it is treated with a topical steroid plus antiviral prophylaxis directed by ophthalmology. Dendritic and geographic ulcers are epithelial disease with replicating virus, which is treated with an antiviral and not a steroid because steroids can badly worsen it. Lid vesicles and a follicular conjunctivitis are also active viral infection, so they need antiviral treatment alone. This is why steroids are never a routine emergency department prescription for a herpetic eye.",
        keyFeature: { topic: "eye", n: 4 },
        source: "rveeh-hsv",
      },
      {
        id: "q5",
        kind: "single",
        update:
          "Five days later he returns. He stopped the valacyclovir after 2 days when the blisters crusted. The eye is now painful and light sensitive, and fluorescein shows a branching corneal ulcer with terminal bulbs.",
        prompt: "Which of the following is the most appropriate next step in the care of his left eye?",
        options: [
          "Erythromycin ointment and recheck",
          "Pressure patch for 2 days",
          "Start moxifloxacin 0.5% drops",
          "Start prednisolone acetate 1% drops",
          "Valacyclovir with ophthalmology referral",
        ],
        correct: 4,
        explanation:
          "A branching ulcer with terminal bulbs is herpes simplex epithelial keratitis, and an antiviral alone is the treatment of choice. He stopped his course early, so he restarts it and needs ophthalmology follow-up for corneal disease. The American Academy of Ophthalmology advises avoiding topical corticosteroids in the initial management of epithelial keratitis, so prednisolone would let the ulcer spread. Moxifloxacin and erythromycin treat bacteria, not the virus. A pressure patch does nothing for viral replication and delays recognizing a worsening ulcer.",
        keyFeature: { topic: "eye", n: 4 },
        source: "aao-hsv",
      },
    ],
    sources: [S.belongia, S.rveeh, S.azari, S.aaoHsv],
    ...META,
  },
  /* 40 Red patches in both eyes after travel -------------------------------- */
  {
    id: "eye-40",
    topic: "eye",
    title: "Red eyes after a trip abroad",
    stem:
      "A 41-year-old woman presents to the emergency department with red, watery eyes. The right eye became red and gritty yesterday morning and the left by evening. Her lids are puffy and she has noticed bright red patches on the whites of both eyes. She returned 2 days ago from 4 weeks in a village in Cambodia, where many neighbours had red eyes. She is a grade 2 teacher and has been on leave for the trip. She had a head cold 3 weeks ago. She takes ASA 81 mg daily since a transient ischemic attack 2 years ago and has hay fever each spring. She recalls no injury. Visual acuity is 20/25 in each eye. Both conjunctivae show follicles and patchy subconjunctival hemorrhages. A small tender preauricular node is felt on each side.",
    vitals: { temperature: "36.9°C oral", pulse: "78/minute", resp: "14/minute", bp: "128/78 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history most supports the likely cause of her eye findings?",
        options: [
          "ASA 81 mg taken daily",
          "Hay fever each spring",
          "Head cold 3 weeks ago",
          "Neighbours abroad with red eyes",
          "Work with young children",
        ],
        correct: 3,
        explanation:
          "Many neighbours with red eyes in a village she left 2 days ago points to an outbreak of acute hemorrhagic conjunctivitis, which spreads by contact and starts 12 to 48 hours after exposure. Her onset fits that timing. ASA can enlarge a subconjunctival hemorrhage but does not cause follicles, nodes and a red discharge in both eyes. Hay fever causes itch in season. A cold 3 weeks ago is too long before onset to explain it. She has been away from her class for 4 weeks, so school exposure does not fit.",
        keyFeature: { topic: "eye", n: 2 },
        source: "lay-ahc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the red eyes in this patient?",
        options: [
          "Acute hemorrhagic conjunctivitis",
          "Allergic conjunctivitis",
          "Bacterial conjunctivitis",
          "Herpes simplex conjunctivitis",
          "Spontaneous subconjunctival hemorrhage",
        ],
        correct: 0,
        explanation:
          "Sudden red, watery eyes with lid swelling, follicles, nodes and subconjunctival hemorrhages in both eyes during an outbreak fit acute hemorrhagic conjunctivitis, now caused mainly by a coxsackievirus A24 variant. In a 2023 outbreak, 82% of cases had subconjunctival hemorrhage. It usually settles in 1 to 2 weeks. Allergic conjunctivitis itches and does not bleed. Bacterial conjunctivitis gives a purulent discharge without follicles or nodes. Herpes simplex is usually one sided with lid vesicles. A spontaneous hemorrhage does not cause follicles, discharge or nodes.",
        keyFeature: { topic: "eye", n: 1 },
        source: "lay-ahc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her eyes while the illness runs its course?",
        options: [
          "Moxifloxacin 0.5% drops",
          "Prednisolone acetate 1% drops",
          "Supportive care with lubricants",
          "Tobramycin and dexamethasone drops",
          "Valacyclovir 500 mg PO three times daily",
        ],
        correct: 2,
        explanation:
          "Treatment of viral conjunctivitis is supportive, with lubricants for comfort while it settles. A systematic review advises that steroid drops, and combination drops that contain a steroid, should not be used routinely in viral conjunctivitis. That rules out prednisolone and the tobramycin and dexamethasone combination. Antibiotic drops such as moxifloxacin do not treat a virus, and a shared dropper can carry the infection to the other eye. Valacyclovir treats herpes simplex, which this is not.",
        keyFeature: { topic: "eye", n: 4 },
        source: "azari-conjunctivitis",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice to limit spread of her infection to her family?",
        options: [
          "Hand washing and no eye rubbing",
          "Rinse the eyes with tap water hourly",
          "Start antibiotic drops in both eyes",
          "Treat her household with eye drops",
          "Wear a patch over the worse eye",
        ],
        correct: 0,
        explanation:
          "In the Cambodian outbreak, contact with a case, frequent eye rubbing and poor hand hygiene were the risk factors for infection, and hygiene was the main control measure. A systematic review also notes that good hand hygiene limits the spread of acute viral conjunctivitis. Antibiotic drops do not treat the virus and can spread it from a contaminated dropper. Drops for well family members prevent nothing. Hourly rinsing and a patch do not stop transfer from hands and tears to other people.",
        keyFeature: { topic: "eye", n: 1 },
        source: "lay-ahc",
      },
    ],
    sources: [S.lay, S.azari],
    ...META,
  },
];
