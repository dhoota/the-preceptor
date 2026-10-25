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
          "Normal vision since onset",
          "Seasonal allergies on cetirizine",
          "Sister with pink eye last month",
          "Use of a fluticasone nasal spray",
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
          "Herpes simplex can spread from the lid and conjunctiva to the corneal epithelium. Fluorescein shows a dendritic ulcer with branching and terminal bulbs, and epithelial keratitis changes both treatment and the urgency of ophthalmology review. Corneal sensation is tested before any anesthetic drop. His vision is 20/20, so a dilated fundus view and a swinging flashlight test for an optic nerve problem are less urgent. Pressure matters when the anterior chamber is inflamed, but the cornea is the first question. Lid eversion looks for a foreign body, and none is suspected.",
        keyFeature: { topic: "eye", n: 3 },
        source: "rveeh-hsv",
      },
      {
        id: "q3",
        kind: "single",
        update: "The cornea is clear. Corneal sensation is normal and the anterior chamber is quiet. He has no drug allergies.",
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
        prompt: "Which of the following later findings would make a topical corticosteroid appropriate under ophthalmology care?",
        options: [
          "Branching ulcer with terminal bulbs",
          "Geographic ulcer with scalloped edges",
          "Grouped vesicles on the lid margin",
          "Stromal haze with intact epithelium",
          "Watery discharge with follicles",
        ],
        correct: 3,
        explanation:
          "Stromal keratitis with an intact epithelium is an immune reaction with little live virus, and it is treated with a topical steroid plus antiviral prophylaxis directed by ophthalmology. Dendritic and geographic ulcers are epithelial disease with replicating virus, which is treated with an antiviral and not a steroid because steroids can badly worsen it. Lid vesicles and a follicular conjunctivitis are also active viral infection, so they need antiviral treatment alone. This is why a steroid is not a routine emergency department prescription for a herpetic eye.",
        keyFeature: { topic: "eye", n: 4 },
        source: "rveeh-hsv",
      },
    ],
    sources: [S.belongia, S.rveeh, S.azari],
    ...META,
  },
  /* 40 Red patches in both eyes after travel -------------------------------- */
  {
    id: "eye-40",
    topic: "eye",
    title: "Red eyes after a trip abroad",
    stem:
      "A 41-year-old woman presents to the emergency department with red, watery eyes. The right eye became red and gritty yesterday morning and the left by evening. Her lids are puffy and she has noticed bright red patches on the whites of both eyes. She returned 2 days ago from 4 weeks in a village in Cambodia, where many neighbours had red eyes. She is a grade 2 teacher and has been on leave for the trip. She had a head cold 3 weeks ago. She has taken ASA 81 mg daily since a transient ischemic attack 2 years ago and has hay fever each spring. She recalls no injury. She has had no nosebleeds, bleeding gums or easy bruising. Visual acuity is 20/25 in each eye. Both conjunctivae show follicles and patchy subconjunctival hemorrhages. A small tender preauricular node is felt on each side.",
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
          "Neighbours with red eyes",
          "Work with young children",
        ],
        correct: 3,
        explanation:
          "Many neighbours with red eyes in a village she left only days ago points to an outbreak of acute hemorrhagic conjunctivitis, which spreads by contact and starts 12 to 48 hours after exposure. Her onset soon after she left fits that short incubation. ASA can enlarge a subconjunctival hemorrhage but does not cause follicles, nodes and a watery discharge in both eyes. Hay fever causes itch in season. A cold 3 weeks ago is too long before onset to explain it. She has been away from her class for 4 weeks, so school exposure does not fit.",
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
        kind: "menu",
        select: 1,
        prompt: "Which of the following investigations are required for the subconjunctival hemorrhages in both of her eyes?",
        options: [
          "Coagulation profile",
          "Complete blood count",
          "CT of the orbits",
          "Platelet function testing",
          "Serum fibrinogen level",
          "Von Willebrand screen",
          "None",
        ],
        correct: [6],
        explanation:
          "Patchy hemorrhages under the conjunctiva are part of acute hemorrhagic conjunctivitis itself, seen in 82% of cases in the 2023 outbreak, so they need no workup of their own here. She has follicles, nodes and a watery discharge in both eyes after outbreak exposure, a normal blood pressure, no injury and no other bleeding. Low dose ASA can make a hemorrhage larger but does not call for blood tests. Coagulation, platelet and von Willebrand testing would be for unexplained or recurrent bleeding. CT of the orbits answers trauma or a mass, and there is neither.",
        keyFeature: { topic: "eye", n: 1 },
        source: "lay-ahc",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following tests would best identify the cause of her eye findings?",
        options: [
          "Adenovirus rapid antigen test",
          "Conjunctival bacterial culture",
          "Conjunctival swab for enterovirus PCR",
          "HSV PCR of a lid swab",
          "Serum coxsackievirus antibodies",
        ],
        correct: 2,
        explanation:
          "In the Cambodian outbreak, real time RT-PCR of conjunctival swabs found enterovirus in about half of the samples, and sequencing then confirmed the coxsackievirus A24 variant. A swab taken while she still has symptoms lets public health link her case to the outbreak strain. A negative adenovirus test would not identify the cause. Bacterial culture does not detect a virus. HSV causes one sided disease with lid vesicles, and she has neither. Antibody testing does not give an answer while she is ill.",
        keyFeature: { topic: "eye", n: 1 },
        source: "lay-ahc",
      },
    ],
    sources: [S.lay],
    ...META,
  },
  /* 41 Floaters and drops that did not help ------------------------------------ */
  {
    id: "eye-41",
    topic: "eye",
    title: "Blurred vision after a faded rash",
    stem:
      "A 34-year-old man presents to the emergency department with 10 days of blurred vision and floaters in both eyes, worse on the left. Both eyes ache, look mildly red and are sensitive to light. A walk in clinic diagnosed conjunctivitis a week ago and prescribed antibiotic drops, which have not helped. Three weeks ago he had a rash on his palms and soles that faded without treatment. He has sex with men and has had several new partners this year. He welds for a living and wears a welding mask. He had a head cold 2 weeks ago. Since moving apartments last month his low back has ached. He takes no medications. Visual acuity is 20/40 on the right and 20/100 on the left. Pupils are equal and reactive with no relative afferent defect. There is redness around each cornea.",
    vitals: { temperature: "37.1°C oral", pulse: "80/minute", resp: "14/minute", bp: "126/80 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history best points to the cause of his eye disease?",
        options: [
          "Back ache since moving apartments",
          "Faded rash on palms and soles",
          "Head cold 2 weeks ago",
          "Light sensitivity in both eyes",
          "Welding at work for many years",
        ],
        correct: 1,
        explanation:
          "A rash on the palms and soles is the rash of secondary syphilis, and the Canadian guide lists uveitis and retinitis among its eye signs. New partners add to the risk. Back pain that began with a move is mechanical, not the inflammatory back pain linked to anterior uveitis. Welding causes a painful surface burn of the cornea, not floaters, and he wears a mask. A cold causes a surface conjunctivitis without floaters. Light sensitivity occurs with any uveitis and does not point to a cause.",
        keyFeature: { topic: "eye", n: 2 },
        source: "phac-syphilis-clinical",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important next part of the examination of his eyes?",
        options: [
          "Dilated fundus examination",
          "Fluorescein staining of the corneas",
          "Gonioscopy of both angles",
          "Tonometry of both eyes",
          "Upper lid eversion",
        ],
        correct: 0,
        explanation:
          "Floaters with acuity of 20/100 point to inflammation behind the lens, so the vitreous, retina and optic disc must be seen through a dilated pupil. Ocular syphilis can cause uveitis, retinitis, neuroretinitis and optic neuritis, and a person with eye symptoms and possible syphilis needs a full eye examination. Fluorescein and lid eversion look at the surface and would not explain floaters. Tonometry is part of the examination of a uveitis, but it does not find the cause of his vision loss. Gonioscopy is an ophthalmology test of the drainage angle.",
        keyFeature: { topic: "eye", n: 3 },
        source: "cdc-sti-2021",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Further examination shows vitreous cells in both eyes and a pale yellow patch at the left macula. Rapid plasma reagin is reactive at 1:128 and a treponemal test is reactive. His neurologic examination is normal.",
        prompt: "Which of the following is the most likely cause of the loss of vision in this patient?",
        options: [
          "Acute retinal necrosis",
          "HLA-B27 anterior uveitis",
          "Sarcoid panuveitis",
          "Syphilitic uveitis",
          "Toxoplasma retinochoroiditis",
        ],
        correct: 3,
        explanation:
          "Inflammation of both eyes with vitreous cells and a macular lesion, a recent rash on the palms and soles and reactive nontreponemal and treponemal tests make this syphilitic uveitis. Floaters and reduced vision did not fit the walk in label of conjunctivitis. Acute retinal necrosis causes spreading white patches of dead retina, usually in one eye. HLA-B27 uveitis is an anterior uveitis, usually in one eye at a time, without a macular lesion. Toxoplasma usually causes one focal scar and lesion in one eye. Sarcoid can cause a panuveitis, but it does not explain a reactive treponemal test. None of the others explains the rash or the serology.",
        keyFeature: { topic: "eye", n: 1 },
        source: "phac-syphilis-clinical",
      },
      {
        id: "q4",
        kind: "menu",
        select: 3,
        prompt: "Which of the following are the most appropriate steps in the management of this patient?",
        options: [
          "Benzathine penicillin G IM once",
          "HIV test at diagnosis",
          "IV penicillin G for 10 to 14 days",
          "Lumbar puncture before any treatment",
          "MRI of the brain and orbits",
          "Oral doxycycline for 28 days",
          "Prednisolone drops as sole therapy",
          "Same day ophthalmology consultation",
        ],
        correct: [1, 2, 7],
        explanation:
          "Ocular syphilis is treated like neurosyphilis, with aqueous crystalline penicillin G 3 to 4 million units IV every 4 hours for 10 to 14 days, and needs prompt ophthalmology involvement. Everyone with ocular syphilis should be tested for HIV. With isolated eye findings, reactive serology and a normal neurologic examination, CSF testing is not needed before treatment, and an MRI adds delay without changing it. A single IM dose of benzathine penicillin treats early syphilis, and oral doxycycline for 28 days treats late latent syphilis. Neither treats eye disease. Steroid drops alone leave the infection untreated.",
        keyFeature: { topic: "eye", n: 2 },
        source: "cdc-sti-2021",
      },
    ],
    sources: [S.phacSyphClin, S.cdcSti],
    ...META,
  },
  /* 42 Ring of blood after a fall ----------------------------------------------- */
  {
    id: "eye-42",
    topic: "eye",
    title: "Older woman who fell in the night",
    stem:
      "An 81-year-old woman is brought to the emergency department by ambulance 1 hour after she got up in the dark to use the bathroom and fell against the corner of her bedside table, striking her left eye. She did not lose consciousness. The left eye is painful and she says she cannot see well with it. She had cataract surgery through a large incision in both eyes 25 years ago. She has hypertension treated with amlodipine and takes no anticoagulant or antiplatelet drug. The left lids are swollen and bruised. A bulging, bright red hemorrhage covers the whole white of the left eye in a full ring around the cornea. There is no proptosis. The right eye is normal. The triage note reads subconjunctival hemorrhage after a fall.",
    vitals: { temperature: "36.6°C oral", pulse: "88/minute", resp: "16/minute", bp: "168/90 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in the assessment of her left eye?",
        options: [
          "Applanation tonometry",
          "Dilated fundus examination",
          "Ocular ultrasound",
          "Upper lid eversion",
          "Visual acuity in each eye",
        ],
        correct: 4,
        explanation:
          "Visual acuity is the first measurement in every eye complaint, and after trauma it is the baseline that guides urgency and predicts outcome. It needs no pressure on the globe. A dense ring of bulging hemorrhage after a fall raises concern for an open globe, so pressure measurement is contraindicated and any pressure on the eye, such as everting the lid, must be avoided because it can push out the eye contents. Ultrasound is not advised when an open globe is likely. A dilated fundus view comes after the front of the eye has been examined.",
        keyFeature: { topic: "eye", n: 3 },
        source: "open-globe",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Visual acuity is hand motion on the left and 20/30 on the right. Slit lamp examination, with no pressure on the lids, shows a 1 mm layer of blood in the left anterior chamber. The left anterior chamber is deeper than the right.",
        prompt: "Which of the following is the most likely diagnosis in her left eye?",
        options: [
          "Isolated traumatic hyphema",
          "Occult scleral rupture",
          "Orbital floor fracture",
          "Retrobulbar hemorrhage",
          "Traumatic optic neuropathy",
        ],
        correct: 1,
        explanation:
          "A dense ring of subconjunctival hemorrhage after a fall, a hyphema, a chamber deeper than the other eye and vision of hand motion point to a posterior rupture hidden under the blood. In adults over 65, globe ruptures are the most common open globe injury and usually follow falls, and old large cataract incisions are weak points. A 1 mm hyphema alone would not reduce vision to hand motion or deepen the chamber. Retrobulbar hemorrhage causes a tense, proptotic orbit. A floor fracture causes double vision or cheek numbness. Optic neuropathy does not explain the chamber findings.",
        keyFeature: { topic: "eye", n: 5 },
        source: "open-globe",
      },
      {
        id: "q3",
        kind: "single",
        update: "A rigid shield is placed over the left eye. CT of the orbits shows no fracture, no foreign body and no clear defect in the globe.",
        prompt: "Which of the following is the most appropriate next step in the management of her left eye?",
        options: [
          "Discharge with clinic review tomorrow",
          "MRI of the orbits within 24 hours",
          "Ocular ultrasound to confirm the rupture",
          "Ophthalmology for surgical exploration",
          "Repeat CT of the orbits in 24 hours",
        ],
        correct: 3,
        explanation:
          "CT is specific for an open globe but its sensitivity is only about 50 to 80%, so a normal scan does not rule one out. Her clinical signs remain those of an occult rupture, and the eye needs exploration by ophthalmology in the operating room. Ultrasound is not advised when an open globe is suspected because the probe presses on the eye. A repeat CT or an MRI delays repair without excluding the injury. Discharge would leave an open eye unrepaired overnight with a risk of infection and loss of contents.",
        keyFeature: { topic: "eye", n: 5 },
        source: "open-globe",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following factors would most predict a poor final vision in her left eye?",
        options: [
          "Lid bruising and swelling",
          "Normal CT of the orbits",
          "Relative afferent pupillary defect",
          "Rupture close to the limbus",
          "Systolic blood pressure of 168 mmHg",
        ],
        correct: 2,
        explanation:
          "Her pupils have not yet been tested, and the swinging flashlight test is safe because it puts no pressure on the globe. In open globe injury, preoperative acuity, an afferent pupillary defect and the site of the wound are the strongest predictors of the final vision, and the Ocular Trauma Score is the most used model. An afferent defect means damage to the retina or optic nerve behind the wound. A wound close to the front of the eye predicts a better result. Her blood pressure does not change the visual outlook. A normal CT does not exclude the rupture or change the outlook, and lid bruising says nothing about the globe.",
        keyFeature: { topic: "eye", n: 3 },
        source: "open-globe",
      },
    ],
    sources: [S.zhou],
    ...META,
  },
  /* 43 White powder after a collision --------------------------------------------- */
  {
    id: "eye-43",
    topic: "eye",
    title: "Burning eyes after a collision",
    stem:
      "You are working in a rural hospital emergency department. The nearest ophthalmologist is 2 hours away by road. A 63-year-old woman is brought in by ambulance 30 minutes after a frontal collision in which her airbag deployed. She was wearing a seatbelt and her glasses. Her primary survey is normal, and she has a seatbelt bruise across the chest. She now reports burning pain in both eyes and blurred vision in the right eye. Her face and eyelashes are coated with a fine white powder. She has hypothyroidism treated with levothyroxine. There is mild swelling of the right lids and a subconjunctival hemorrhage on the temporal side of the right eye. Both conjunctivae are red and watering.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the burning pain in both of her eyes?",
        options: [
          "Corneal abrasion from the fabric",
          "Glass fragments from her lenses",
          "Sodium hydroxide from the airbag",
          "Thermal burn from inflation gas",
          "Ultraviolet keratitis",
        ],
        correct: 2,
        explanation:
          "Inflating an airbag leaves a fine powder that contains sodium hydroxide, an alkali. Burning in both eyes with powder on the lashes is a chemical exposure until proved otherwise, and it calls for immediate irrigation, for at least 15 minutes and with at least 1 litre, until the pH is normal. In one reported case the first irrigation came 6 to 7 hours after the crash because other injuries came first, and the eyes went on to limbal ischemia and lasting scarring. An abrasion from the fabric or a glass fragment would usually affect one eye. A thermal burn marks the skin of the face. Ultraviolet keratitis starts 6 to 12 hours after sun or welding exposure, and she has had neither.",
        keyFeature: { topic: "eye", n: 1 },
        source: "barnes-airbag-alkali",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Acuity is 20/60 right and 20/25 left. The globe is intact. Further examination shows a layer of blood filling about a quarter of the right anterior chamber.",
        prompt: "Which of the following grades best describes the blood in the anterior chamber of her right eye?",
        options: ["Grade 0", "Grade 1", "Grade 2", "Grade 3", "Grade 4"],
        correct: 1,
        explanation:
          "A layer of blood filling about a quarter of the anterior chamber is less than a third, which is grade 1. Grade 0 is a microhyphema, with red cells suspended in the aqueous and no layer. Grade 2 fills one third to one half, grade 3 more than half, and grade 4 the whole chamber. The grade guides care because the risk of a pressure rise climbs with the amount of blood, from about 13.5% in grades 1 and 2 to 27% in grade 3 and 52% in grade 4 in one series. A small hyphema still needs close follow-up, because a rebleed can enlarge it.",
        keyFeature: { topic: "eye", n: 5 },
        source: "eyewiki-hyphema",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following additional findings would most support admission for her eye injury?",
        options: [
          "Known von Willebrand disease",
          "Lives with her adult daughter",
          "Punctate staining of both corneas",
          "Seasonal allergies on cetirizine",
          "Up to date tetanus immunization",
        ],
        correct: 0,
        explanation:
          "Most hyphemas are managed as outpatients with close review of vision, the blood and the pressure. Admission is considered for a bleeding disorder, poor adherence, a severe eye or orbital injury, or sickle cell disease with a raised pressure. Von Willebrand disease is a bleeding disorder that raises the risk of a rebleed, which usually comes within the first 5 days. Living with an adult daughter supports adherence and safe follow-up at home. Seasonal allergies and an up to date tetanus status do not change the plan. Punctate staining from the powder heals with lubrication and does not need a bed.",
        keyFeature: { topic: "eye", n: 2 },
        source: "eyewiki-hyphema",
      },
      {
        id: "q4",
        kind: "single",
        update: "She understands the plan. The corneas show only punctate staining. The intraocular pressure is 16 mmHg in the right eye.",
        prompt: "Which of the following is the most appropriate disposition for the injury to her right eye?",
        options: [
          "Admission for strict bed rest",
          "Air transfer to a trauma centre tonight",
          "Discharge with next day ophthalmology review",
          "Family physician review in 1 week",
          "Repeat slit lamp exam in 1 week",
        ],
        correct: 2,
        explanation:
          "A small grade 1 hyphema with a normal pressure of 16 mmHg, an intact globe and good understanding can be managed as an outpatient with close follow-up, so a next day review by ophthalmology is the right plan. Rebleeding is most likely in the first 5 days, so review in 1 week misses that window, whether by her family physician or with a repeat slit lamp examination. Nothing in her history meets the criteria for admission. The next day review also rechecks both corneas after the alkali exposure. An air transfer tonight adds risk and cost without changing her care, since the review can happen 2 hours away by road tomorrow.",
        keyFeature: { topic: "eye", n: 5 },
        source: "eyewiki-hyphema",
      },
    ],
    sources: [S.barnes, S.eyewikiHyphema],
    ...META,
  },
];
