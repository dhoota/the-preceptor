import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c17-2";

/** Case 2. Community health clinic. Young adult man with a new HIV result. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Results Visit at a Community Clinic",
  intro:
    "A 29-year-old man returns to a community health clinic to get his blood test results. A rapid HIV test at this clinic 8 days ago was reactive. The lab has now confirmed HIV-1 infection. He works as a line cook, lives alone and has had one male partner for 4 months.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "No prior HIV testing.",
        "No known drug allergies.",
        "Takes no prescription drugs. Uses an antacid tablet for heartburn a few times a month.",
        "Alcohol: 2 beers on weekend nights before the rapid test.",
        "Weight 74 kg.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["CD4 count", "180 cells/mm3", "500 to 1500 cells/mm3"],
          ["HIV-1 RNA (viral load)", "86 000 copies/mL", "Not detected"],
          ["Hepatitis B surface antigen", "Negative", "Negative"],
          ["Hepatitis B surface antibody", "Positive", "Positive after vaccination"],
          ["Creatinine", "0.9 mg/dL (80 micromol/L)", "0.7 mg/dL (62 micromol/L) to 1.3 mg/dL (115 micromol/L)"],
          ["ALT", "24 units/L", "7 to 55 units/L"],
          ["Hemoglobin", "14.6 g/dL (146 g/L)", "13.5 g/dL (135 g/L) to 17.5 g/dL (175 g/L)"],
          ["Syphilis screen (RPR)", "Nonreactive", "Nonreactive"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Baseline laboratory review in new HIV",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the baseline results before the client sees the primary health care provider. For each result, specify whether it requires follow-up or is within expected limits.",
        rationale:
          "A CD4 count of 180 cells/mm3 is far below the reference range. A count below 200 cells/mm3 defines stage 3 HIV and calls for Pneumocystis prophylaxis. A viral load of 86 000 copies/mL shows active viral replication that treatment must suppress. A negative surface antigen with a positive surface antibody shows immunity to hepatitis B. Creatinine, ALT, hemoglobin and the syphilis screen are within their ranges.",
        refs: ["A CD4 count below 200 cells/mm3 is stage 3 HIV infection and an indication for Pneumocystis prophylaxis."],
        sources: [SRC.casedef, SRC.oi],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Requires follow-up", "Within expected limits"],
      rows: [
        { text: "CD4 count 180 cells/mm3", correct: [0], why: "A count below 200 cells/mm3 is stage 3 HIV and needs prophylaxis against Pneumocystis." },
        { text: "HIV-1 RNA 86 000 copies/mL", correct: [0], why: "A high viral load shows active replication and the need to start treatment." },
        { text: "Hepatitis B surface antibody positive", correct: [1], why: "With a negative surface antigen, a positive antibody shows immunity to hepatitis B." },
        { text: "Creatinine 0.9 mg/dL (80 micromol/L)", correct: [1], why: "Creatinine is within its reference range, so kidney function is normal." },
        { text: "ALT 24 units/L", correct: [1], why: "ALT is within the 7 to 55 units/L range and shows no liver injury." },
        { text: "Hemoglobin 14.6 g/dL (146 g/L)", correct: [1], why: "Hemoglobin is within its reference range." },
        { text: "Syphilis screen nonreactive", correct: [1], why: "A nonreactive RPR shows no sign of current syphilis." },
      ],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Risk cues after a life-changing diagnosis",
        cjmm: "analyze",
        difficulty: 3,
        stem: "After hearing the result, the client says, \"Since the rapid test I have barely slept. Everyone would be better off without me.\" He says he has had 6 beers most nights this week. He makes eye contact and asks when he can start treatment. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Saying others would be better off without him is a statement of hopelessness and being a burden. It is a warning sign for suicide. A sharp rise in drinking since the diagnosis adds to the risk, because alcohol lowers inhibition. Asking to start treatment is a protective sign, but it does not cancel the warning statement. Eye contact tells little about suicide risk.",
        sources: [SRC.halter],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client's statements place him at risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "self-harm", why: "A burden statement after a major loss is a warning sign for suicide." },
            { text: "alcohol withdrawal", why: "One week of drinking at this level carries little withdrawal risk. His words point to self-harm." },
            { text: "refusal of treatment", why: "He asks when treatment can start, which shows he wants it." },
            { text: "denial of the diagnosis", why: "He accepts the result and asks about treatment." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "his words about others being better off", why: "Feeling like a burden to others is a known warning sign for suicide." },
            { text: "asking when his treatment can start", why: "Interest in treatment is a protective sign, not a risk cue." },
            { text: "making eye contact with the nurse", why: "Eye contact does not show or rule out suicide risk." },
            { text: "his job as a line cook", why: "His job is not linked to his risk in this scenario." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "drinking 6 beers most nights", why: "Alcohol use that rose after the diagnosis lowers inhibition and raises suicide risk." },
            { text: "a hemoglobin of 14.6 g/dL (146 g/L)", why: "A normal hemoglobin is not a cue for self-harm." },
            { text: "a nonreactive syphilis screen", why: "A negative screen is not a cue for self-harm." },
            { text: "his wish to start treatment soon", why: "Wanting treatment is a protective sign." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PSY",
        topic: "First response to a warning statement",
        cjmm: "prioritize",
        process: "communication",
        difficulty: 2,
        stem: "The nurse notes the client's statement that everyone would be better off without him. Which action should the nurse take first?",
        rationale:
          "A statement of being a burden needs a direct suicide assessment before any teaching. Asking plainly about suicidal thoughts does not plant the idea. It opens the talk and guides the level of care. Treatment teaching, support groups and alcohol counseling all matter. Each can wait until the nurse knows whether the client is safe to leave.",
        sources: [SRC.halter],
      }),
      kind: "mc",
      options: [
        { text: "Ask him directly whether he is thinking of suicide", why: "A direct question finds out whether he is safe, which comes before all other care." },
        { text: "Explain how the first HIV treatment regimen works", why: "Teaching is needed, but safety must be assessed first." },
        { text: "Give him a list of local HIV support groups", why: "Support groups help later but do not address his immediate safety." },
        { text: "Discuss ways to cut down on his alcohol use", why: "Alcohol use matters, but his suicide risk must be assessed first." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Starting antiretroviral therapy",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The client denies a plan or intent to harm himself and agrees to a safety plan and a mental health referral. The primary health care provider prescribes a single-tablet antiretroviral regimen to start today and trimethoprim-sulfamethoxazole 1 tablet daily. A resistance test is pending. Which actions should the nurse include in the plan? Select all that apply.",
        tabs: [
          {
            title: "Orders",
            text: [
              "Bictegravir-emtricitabine-tenofovir alafenamide 1 tablet by mouth daily. Start today.",
              "Trimethoprim-sulfamethoxazole double strength 1 tablet by mouth daily.",
              "HIV genotype resistance test sent.",
              "Mental health referral. Return visit for viral load after starting treatment.",
            ].join("\n"),
          },
        ],
        rationale:
          "Treatment starts as soon as possible after diagnosis. A regimen can start before the resistance test returns. A dose at the same time each day keeps drug levels steady. Antacids with aluminum or magnesium bind bictegravir, so the nurse reviews all his drugs, including the antacid. A new rash can be a serious reaction to trimethoprim-sulfamethoxazole. Prophylaxis continues until his CD4 count recovers. Missed doses raise the risk of resistance.",
        refs: ["Primary Pneumocystis prophylaxis stops when the CD4 count stays at 200 cells/mm3 or higher for 3 months on antiretroviral therapy."],
        sources: [SRC.arv, SRC.oi],
      }),
      kind: "sata",
      options: [
        { text: "Hold treatment until the resistance test returns", why: "A regimen can start before the resistance result. Waiting delays viral suppression." },
        { text: "Take the regimen at the same time each day", why: "A set time keeps drug levels steady and supports adherence." },
        { text: "Stop the prophylaxis tablet once he feels well", why: "Prophylaxis continues until the CD4 count stays at 200 cells/mm3 or higher for 3 months." },
        { text: "Report any new skin rash to the clinic", why: "A new rash can signal a serious reaction to trimethoprim-sulfamethoxazole." },
        { text: "Review his antacid and other drug use", why: "Antacids with aluminum or magnesium reduce absorption of bictegravir." },
        { text: "Skip doses on nights he drinks alcohol", why: "Missed doses let the virus replicate and can cause drug resistance." },
        { text: "Return for a viral load check as booked", why: "The viral load shows whether the regimen is working." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Confidential partner notification",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The client says, \"My partner needs to know, but I am scared to tell him myself.\" Which response by the nurse is appropriate?",
        rationale:
          "Partner services let health department staff tell a partner about a possible exposure without naming the client. The partner is then offered testing and prevention. The client keeps control of his own information. The clinic does not phone a partner without the client's agreement. There is no fixed deadline for the client to tell his partner. Telling another provider without consent breaches confidentiality.",
        sources: [SRC.partner, { body: "Public Health Agency of Canada", work: "HIV Screening and Testing Guide", year: 2012, url: "https://www.canada.ca/en/public-health/services/hiv-aids/hiv-screening-testing-guide.html" }],
        canada:
          "HIV results are reportable to public health in every province and territory. With the client's consent, local public health staff can notify partners without naming him, and reporting details vary by province.",
      }),
      kind: "mc",
      options: [
        { text: "\"The clinic is required to call your partner today.\"", why: "Partner services are voluntary for the client and do not require a same-day call." },
        { text: "\"You will need to tell him yourself within a day.\"", why: "No rule sets a deadline for the client to tell a partner himself." },
        { text: "\"I will let his primary health care provider know.\"", why: "Sharing his status with another provider without consent breaches confidentiality." },
        { text: "\"Health department staff can tell him without naming you.\"", why: "Partner services notify a partner without revealing who the client is." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Treatment as prevention teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 4,
        stem: "Eight months later the client has taken every dose. His viral load was not detected at months 2, 5 and 8. The nurse reviews how he protects his partner. Which three statements by the client show understanding? Select three.",
        rationale:
          "A viral load kept below 200 copies/mL with daily treatment means effectively no risk of passing HIV through sex. His results have stayed undetectable for 6 months. Suppression lasts only while he keeps taking the drugs. Viral suppression does not prevent other sexually transmitted infections, so condoms still have a role. Stopping the drugs lets the virus return. Viral load checks confirm suppression continues.",
        refs: ["Viral suppression is a viral load below 200 copies/mL. Most people reach it within 6 months of starting treatment."],
        sources: [SRC.uu, SRC.arv, { body: "Attorney General of Canada, Public Prosecution Service of Canada", work: "Directive: HIV Non-Disclosure. Public Prosecution Service of Canada Deskbook, Chapter 5.12", year: 2018, url: "https://www.ppsc-sppc.gc.ca/eng/pub/fpsd-sfpg/fps-sfp/tpd/p5/ch12.html" }],
        canada:
          "A 2018 federal directive tells federal prosecutors not to charge HIV non-disclosure when the viral load stays below 200 copies/mL. Prosecution policy for most cases is set provincially and varies by province.",
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"With my virus undetectable, I will not pass HIV through sex.\"", why: "Sustained suppression means effectively no sexual transmission of HIV." },
        { text: "\"I can take a break from my pills for a few weeks.\"", why: "Stopping treatment lets the viral load rise and restores the risk of transmission." },
        { text: "\"Condoms still protect me from syphilis and other infections.\"", why: "Viral suppression does not prevent other sexually transmitted infections." },
        { text: "\"I no longer need my viral load checked.\"", why: "Regular checks confirm that suppression continues." },
        { text: "\"I will take my pills every day to stay undetectable.\"", why: "Suppression lasts only with continued daily treatment." },
        { text: "\"Missing doses on weekends will not matter now.\"", why: "Missed doses can allow viral rebound and drug resistance." },
      ],
      correct: [0, 2, 4],
    },
  ],
};
