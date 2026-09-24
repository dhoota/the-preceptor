import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c18-3";

/** Case 3. Community teen clinic. Adolescent male with urethral symptoms. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Walk-In Visit at a Teen Health Clinic",
  intro:
    "A 17-year-old male comes alone to a teen health clinic in a community center. He reports burning with urination for 3 days. He asks the nurse not to tell his parents about the visit.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "No chronic illness. No medications. No known drug allergies.",
        "Immunization record: Tdap and meningococcal vaccine at 11 years. No HPV vaccine doses recorded.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      text: "Temperature 37.1°C (98.8°F). Heart rate 76/minute. BP 118/70 mmHg. Respirations 14/minute. Weight 68 kg.",
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Risk behaviors in an adolescent interview",
        cjmm: "recognize",
        process: "communication",
        difficulty: 2,
        stem: "The nurse interviews the client alone using a structured psychosocial interview and writes the note below. Click to highlight the findings that need follow-up.",
        rationale:
          "Two partners in 2 months with condoms used only some of the time raises the risk of infection and pregnancy. Heavy drinking at parties and riding with a driver who had been drinking are safety risks. A stable home, part-time work, steady grades, enough sleep and no low mood or self-harm thoughts are protective findings.",
        sources: [SRC.heeadsss, SRC.sti],
      }),
      kind: "highlight",
      passage:
        "[[Lives with both parents and a younger sister]]. [[Works 12 hours a week at a grocery store]]. [[Grades mostly Bs in all classes this school year]]. [[Two female partners in the past 2 months]]. [[Uses condoms some of the time]]. [[Drinks 5 or 6 beers at parties most weekends]]. [[Rode home once with a driver who had been drinking]]. [[Sleeps about 8 hours on school nights]]. [[Denies low mood or thoughts of self-harm]].",
      spans: [
        { text: "Lives with both parents and a younger sister", why: "A stable home is a protective factor and needs no follow-up." },
        { text: "Works 12 hours a week at a grocery store", why: "Part-time work of this amount is common and needs no follow-up." },
        { text: "Grades mostly Bs in all classes this school year", why: "Steady grades suggest he is coping at school." },
        { text: "Two female partners in the past 2 months", why: "More than one recent partner raises the risk of sexually transmitted infection." },
        { text: "Uses condoms some of the time", why: "Inconsistent condom use leaves him exposed to infection and his partners to pregnancy." },
        { text: "Drinks 5 or 6 beers at parties most weekends", why: "Heavy episodic drinking raises the risk of injury and unsafe sex." },
        { text: "Rode home once with a driver who had been drinking", why: "Riding with an impaired driver is a major injury risk for adolescents." },
        { text: "Sleeps about 8 hours on school nights", why: "This is a reasonable amount of sleep and needs no follow-up." },
        { text: "Denies low mood or thoughts of self-harm", why: "A negative mood and self-harm screen is reassuring." },
      ],
      correct: [3, 4, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Reading a urethral Gram stain",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the examination note and the Gram stain result. Complete the sentence by dragging an option into each blank.",
        tabs: [
          { title: "Nurses' Notes", text: "1015: Yellow discharge at the urethral opening. Both testes nontender with no swelling. No genital sores." },
          {
            title: "Laboratory Results",
            text: [
              "Urethral Gram stain: gram-negative intracellular diplococci seen.",
              "Urine nucleic acid amplification tests for gonorrhea and chlamydia: pending.",
            ].join("\n"),
          },
        ],
        rationale:
          "Gram-negative intracellular diplococci in urethral discharge from a male diagnose gonococcal urethritis. Chlamydia often infects at the same time, and its test is still pending. Treatment therefore also covers chlamydia until it is excluded. Nontender testes argue against epididymitis. No sores argue against syphilis and herpes.",
        sources: [SRC.sti],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The Gram stain points to {0}. Until the pending tests return, treatment should also cover {1}.",
      targets: ["Condition shown", "Infection also covered"],
      tokens: [
        { text: "gonococcal urethritis", why: "Intracellular gram-negative diplococci in male urethral discharge diagnose gonorrhea." },
        { text: "epididymitis", why: "Both testes are nontender with no swelling, so epididymitis is not shown." },
        { text: "chlamydial infection", why: "Chlamydia often coexists with gonorrhea and is covered until a test excludes it." },
        { text: "primary syphilis", why: "Primary syphilis causes a painless sore. He has no genital sores." },
        { text: "genital herpes", why: "Herpes causes painful blisters or sores, and none are present." },
        { text: "a urinary tract infection", why: "The Gram stain shows diplococci inside white cells, which fits gonorrhea, not a bladder infection." },
      ],
      correct: [0, 2],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First issue in an adolescent sexual health visit",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews all of the findings so far. Which issue should the nurse address first at this visit?",
        rationale:
          "An active gonococcal infection needs treatment today. It spreads to partners and can lead to epididymitis if untreated. Drinking, condom skills and HPV vaccine all matter and can be addressed in the same visit. None of them is causing harm in this hour the way an untreated infection is.",
        sources: [SRC.sti, SRC.heeadsss],
      }),
      kind: "mc",
      options: [
        { text: "Catch-up doses of HPV vaccine", why: "HPV vaccine can be given today but does not treat the current infection." },
        { text: "Heavy drinking at parties on most weekends", why: "Drinking needs counseling at this visit, but it is not causing harm right now." },
        { text: "Condom skills for future sex", why: "Condom teaching prevents future infection but does not treat this one." },
        { text: "Treatment of the current infection", why: "Untreated gonorrhea spreads to partners and can cause complications, so it comes first." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Planning care after an STI diagnosis in a minor",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider plans to treat the client today. Which actions should the nurse include in the plan of care? Select all that apply.",
        rationale:
          "Minors in every US state can consent to their own STI care, so the visit stays confidential. Partners from the past 60 days need testing and treatment. He avoids sex for 7 days after treatment. HIV and syphilis testing is offered with any STI. Reinfection is common, so he is retested in 3 months. A test of cure is not needed for urethral gonorrhea.",
        sources: [SRC.sti, { body: "Canadian Medical Protective Association", work: "Can a child provide consent?", year: 2025, url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2014/can-a-child-provide-consent" }, { body: "Public Health Agency of Canada", work: "Gonorrhea guide: Treatment and follow-up", year: 2026, url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html" }],
        canada:
          "In most provinces a minor's consent to health care rests on capacity rather than a set age, and Quebec sets it at 14. PHAC's gonorrhea guide recommends a test of cure at every positive site and rescreening at 6 months.",
      }),
      kind: "sata",
      options: [
        { text: "Call his parents to get consent for treatment", why: "Minors can consent to their own STI care. Calling his parents would breach his confidentiality." },
        { text: "Tell him partners from the past 60 days need care", why: "Partners in the 60 days before diagnosis need testing and treatment to stop reinfection." },
        { text: "Advise no sex for 7 days after treatment", why: "Waiting 7 days after treatment, and until partners are treated, prevents spread." },
        { text: "Offer HIV and syphilis testing today", why: "A new STI is a reason to test for other infections spread the same way." },
        { text: "Plan a test of cure at the clinic in 1 week", why: "A test of cure is not needed for urethral gonorrhea treated with ceftriaxone." },
        { text: "Keep the visit confidential from his parents", why: "Confidential care protects his trust and his return for follow-up." },
        { text: "Schedule a retest in 3 months", why: "Reinfection is common, so retesting about 3 months after treatment is advised." },
      ],
      correct: [1, 2, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Giving ceftriaxone and teaching doxycycline",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes ceftriaxone 500 mg IM once and doxycycline 100 mg by mouth twice daily for 7 days. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Ceftriaxone 500 mg is given as one IM injection for a client under 150 kg. He weighs 68 kg. Doxycycline is taken with a full glass of water while upright. That lowers the risk of esophageal ulcers. Antacids block its absorption. The full 7-day course is finished even after the discharge stops.",
        refs: ["Ceftriaxone 500 mg IM once treats uncomplicated gonorrhea in persons under 150 kg."],
        sources: [SRC.sti, SRC.doxy],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse gives the ceftriaxone {0} and teaches the client to take each doxycycline dose {1}.",
      blanks: [
        {
          options: [
            { text: "by IV infusion daily for 7 days", why: "Uncomplicated gonorrhea needs one IM dose, not daily IV therapy." },
            { text: "as one IM injection today", why: "A single 500 mg IM dose treats uncomplicated gonorrhea in a client of 68 kg." },
            { text: "as one subcutaneous injection", why: "Ceftriaxone is given IM or IV, not subcutaneously." },
            { text: "by mouth with the first doxycycline", why: "Ceftriaxone is not an oral drug." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "just before lying down at night", why: "Lying down soon after a dose raises the risk of esophageal ulcers." },
            { text: "with an antacid to protect the stomach", why: "Antacids with aluminum, calcium or magnesium block doxycycline absorption." },
            { text: "with a full glass of water, staying upright", why: "Plenty of fluid and an upright position wash the tablet into the stomach." },
            { text: "only until the discharge stops", why: "Stopping early risks treatment failure. The full 7-day course is taken." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Evaluating condom teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse teaches the client how to use external condoms. Which statements by the client show understanding? Select two.",
        rationale:
          "A condom goes on before any genital contact and is used for the whole act. A new condom is used for each act of sex. Oil-based products weaken latex. Two condoms at once rub and tear. A space is left at the tip to collect semen. A used condom is not rinsed and reused.",
        sources: [SRC.condom, SRC.condomHow],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I'll use baby oil so the condom goes on easier.\"", why: "Oil-based products weaken latex and can make the condom break." },
        { text: "\"I'll put it on before any genital contact.\"", why: "Contact before the condom is on can pass infection." },
        { text: "\"I'll wear two condoms at once for extra safety.\"", why: "Two condoms rub against each other and are more likely to tear." },
        { text: "\"I'll pull the condom tight against the tip of my penis.\"", why: "The tip is pinched to leave space for semen. A tight tip can burst." },
        { text: "\"I'll use a new condom for each act of sex.\"", why: "A fresh condom each time gives full protection." },
        { text: "\"I can rinse a condom and use it once more.\"", why: "A condom is used once. Rinsing and reusing it can let it fail." },
      ],
      correct: [1, 4],
    },
  ],
};
