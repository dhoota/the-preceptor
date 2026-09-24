import type { Item } from "@/engine/types";
import { ADA_FOOT, ECIG, FIREARM, HCV_SCREEN, LOWDERMILK, NIAAA, PREP, RESP_VIRUS, SAMHSA_OD, SPR, STI, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s27-11", "HPM", {
      topic: "Condoms with a hormonal IUD",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A 22-year-old client has used a levonorgestrel IUD for 2 years and has a new sexual partner. The client asks whether condoms are still needed. Which advice should the nurse give?",
      rationale:
        "The IUD prevents pregnancy but gives no protection against sexually transmitted infections. With a new partner, a condom used with each act of sex lowers infection risk. Limiting condoms to menses leaves most exposures unprotected. Spermicide with nonoxynol-9 does not prevent infection and can irritate tissue, which raises HIV risk.",
      sources: [SPR, STI],
    }),
    kind: "mc",
    options: [
      { text: "Condoms are not needed with an IUD", why: "The IUD prevents pregnancy only. It does not block sexually transmitted infections." },
      { text: "Use condoms only during menses", why: "Infection can pass during sex at any time in the cycle, not only during menses." },
      { text: "Use a spermicide in place of condoms", why: "Nonoxynol-9 does not prevent infection and can irritate tissue, which raises HIV risk." },
      { text: "Use a condom with each act of sex", why: "Consistent condom use lowers the risk of sexually transmitted infections with a new partner." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s27-12", "HPM", {
      topic: "Teaching for daily oral PrEP",
      cjmm: "action",
      process: "teaching",
      difficulty: 4,
      stem: "A 23-year-old client starts daily oral emtricitabine and tenofovir disoproxil fumarate as HIV preexposure prophylaxis. Which statements should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Daily oral PrEP works best when a tablet is taken every day. HIV testing is repeated at least every 3 months so an infection is found before a refill. Tenofovir can affect the kidneys, so kidney function is checked during use. PrEP does not prevent other infections, so condoms still help. A flu-like illness can signal a new HIV infection and calls for an HIV test.",
      refs: ["For daily oral PrEP, HIV testing is repeated at least every 3 months."],
      sources: [PREP],
    }),
    kind: "sata",
    options: [
      { text: "Stop condoms once the first refill is given", why: "PrEP does not protect against syphilis, gonorrhea or chlamydia, so condoms still help." },
      { text: "Take one tablet at the same time each day", why: "Steady daily dosing keeps drug levels high enough to protect." },
      { text: "Take a double dose on the day after a missed dose", why: "A missed dose is taken when remembered. Doubling is not part of daily PrEP." },
      { text: "Return for an HIV test about every 3 months", why: "Regular testing finds a new infection before PrEP is refilled." },
      { text: "Stop the tablets if a sore throat occurs", why: "A flu-like illness can signal new HIV infection. It calls for an HIV test, not a silent stop." },
      { text: "Expect blood tests of kidney function", why: "Tenofovir can affect the kidneys, so creatinine is checked during use." },
      { text: "Use condoms to lower other infection risk", why: "Condoms protect against infections that PrEP does not cover." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s27-13", "HPM", {
      topic: "Defining binge drinking",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 20-year-old female college student describes her drinking during a health visit. Which pattern meets the definition of binge drinking?",
      rationale:
        "Binge drinking brings the blood alcohol level to 0.08 percent or higher. For a typical woman this happens with 4 or more drinks in about 2 hours. The other patterns spread fewer drinks over more time. A drink every night still carries risk, but it is not binge drinking.",
      refs: ["Binge drinking is 4 or more drinks for women, or 5 or more for men, in about 2 hours, bringing blood alcohol to 0.08 percent or more."],
      sources: [NIAAA, { body: "Canadian Centre on Substance Use and Addiction", work: "Canada's Guidance on Alcohol and Health: Final Report", year: 2023, url: "https://www.ccsa.ca/en/guidance-tools-resources/substance-use-and-addiction/alcohol/canadas-guidance-alcohol-and-health" }],
      canada: "Canada's Guidance on Alcohol and Health (CCSA, 2023) rates 1 to 2 standard drinks a week as low risk. It links more than 2 standard drinks on one occasion to a higher risk of harm.",
    }),
    kind: "mc",
    options: [
      { text: "1 drink each night of the week", why: "Daily drinking carries its own risks, but 1 drink does not reach the binge level." },
      { text: "2 drinks over 3 hours", why: "Two drinks over 3 hours stays below the binge threshold for women." },
      { text: "3 drinks over 4 hours", why: "Three drinks over 4 hours stays below 4 drinks in about 2 hours." },
      { text: "4 drinks within 2 hours", why: "Four drinks in about 2 hours meets the binge definition for women." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s27-14", "HPM", {
      topic: "Responding to an opioid overdose",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches the partner of a client who uses fentanyl how to respond to a suspected overdose with nasal naloxone. Which steps should the nurse include? Select all that apply.",
      rationale:
        "Naloxone is given first to reverse the opioid, and emergency services are called. Fentanyl can outlast one dose, so a second dose is given if there is no response in 2 to 3 minutes. Rescue breaths support a person who is not breathing. The partner stays until help arrives because sedation can return. Cold water, vomiting and sleeping it off do not treat the overdose.",
      refs: ["If there is no response 2 to 3 minutes after a naloxone dose, a second dose is given."],
      sources: [SAMHSA_OD, { body: "Health Canada", work: "About the Good Samaritan Drug Overdose Act", year: 2017, url: "https://www.canada.ca/en/health-canada/services/opioids/about-good-samaritan-drug-overdose-act.html" }],
      canada: "Canada's Good Samaritan Drug Overdose Act (2017) protects people who call 911 at an overdose from charges of simple drug possession. The nurse can share this so the partner does not fear calling.",
    }),
    kind: "sata",
    options: [
      { text: "Place the person in a cold shower", why: "Cold water does not reverse opioids and can cause injury or drowning." },
      { text: "Call 911 after giving naloxone", why: "Emergency care is needed because breathing can slow again as naloxone wears off." },
      { text: "Let the person sleep it off alone", why: "An unresponsive person can stop breathing. Leaving them alone can be fatal." },
      { text: "Give a second dose if no response in 2 to 3 minutes", why: "Potent opioids such as fentanyl can need more than one dose." },
      { text: "Make the person vomit first", why: "Vomiting does not remove the opioid and risks aspiration in a drowsy person." },
      { text: "Stay with the person until help arrives", why: "Sedation can return, so someone needs to watch breathing." },
      { text: "Give rescue breaths if breathing has stopped", why: "Rescue breaths supply oxygen until naloxone works." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s27-15", "HPM", {
      topic: "Adolescent belief about vaping",
      cjmm: "generate",
      process: "communication",
      difficulty: 3,
      stem: "A 15-year-old client at a sports physical says, \"I vape every day, but it is just flavored water vapor.\" The client is seen alone for part of the visit. What is the best initial response by the nurse?",
      rationale:
        "The client holds a false belief that the aerosol is water. Most vapes contain nicotine, which is addictive and harms the developing brain. Correcting the belief opens a talk about quitting. Vaping is not safe for adolescents. Breaking confidentiality at once can end the conversation. Advice to wait until 18 still implies vaping is acceptable.",
      sources: [ECIG],
    }),
    kind: "mc",
    options: [
      { text: "\"I will tell your parents about the vaping today.\"", why: "Confidential time with the adolescent supports honest talk. Nothing here needs disclosure." },
      { text: "\"Most vapes contain nicotine, which is addictive.\"", why: "This corrects the false belief and opens a talk about quitting." },
      { text: "\"Vaping is a safe way to avoid smoking cigarettes.\"", why: "Vaping is not safe for adolescents and raises the chance of later smoking." },
      { text: "\"You should wait until you are 18 to vape.\"", why: "This implies vaping becomes harmless with age and misses the nicotine risk." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s27-16", "HPM", {
      topic: "Firearm access with a depressed teen",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 16-year-old with depression says the teen recently said, \"Everyone would be better off without me.\" The family keeps a handgun in the home. Which recommendation by the nurse is most protective?",
      rationale:
        "Access to a firearm raises the risk of suicide death in young people. The most protective step is to remove the firearm from the home while the teen is at risk. If a gun stays, it is stored unloaded and locked with ammunition locked apart. Hiding a key or teaching rules does not stop a teen in crisis.",
      sources: [FIREARM, { body: "Government of Canada", work: "Storage, Display, Transportation and Handling of Firearms by Individuals Regulations, SOR/98-209, section 6", year: 1998, url: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-98-209/FullText.html" }],
      canada: "Handguns are restricted firearms in Canada. Federal rules require a stored handgun to be unloaded and locked with a secure locking device in a locked container, or kept in a secure vault, safe or room.",
    }),
    kind: "mc",
    options: [
      { text: "Remove the firearm from the home", why: "Removing access is the most effective way to prevent a firearm suicide." },
      { text: "Store the gun loaded in a locked drawer", why: "A loaded gun is dangerous if the lock is opened. Storage is unloaded with ammunition apart." },
      { text: "Hide the key where the teen cannot see it", why: "Adolescents often know or find hidden keys, so hiding is not reliable." },
      { text: "Teach the teen firearm safety rules", why: "Safety rules do not prevent use by a person with suicidal intent." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s27-17", "HPM", {
      topic: "Hepatitis C testing with ongoing drug use",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client who injects heroin had a negative hepatitis C antibody test 1 year ago. The client still shares cookers and water with a friend. Which plan should the nurse support?",
      rationale:
        "Sharing cookers and water can spread hepatitis C even when needles are not shared. People with ongoing risk need testing again, not only the once-in-a-lifetime screen. Periodic testing continues while the risk continues. Waiting for jaundice misses most infections because many cause no symptoms. There is no hepatitis C vaccine.",
      refs: ["Persons with ongoing risk factors such as injection drug use are tested for hepatitis C periodically while the risk continues."],
      sources: [HCV_SCREEN],
    }),
    kind: "mc",
    options: [
      { text: "No more hepatitis C tests are needed", why: "A single negative test does not cover exposure that continues after it." },
      { text: "Test again only if the skin or eyes turn yellow", why: "Most new hepatitis C infections cause no symptoms, so jaundice is a late and uncommon sign." },
      { text: "Test now and again while the risk continues", why: "Ongoing sharing of equipment calls for repeat testing while the risk lasts." },
      { text: "Give the hepatitis C vaccine today", why: "No vaccine exists for hepatitis C. Vaccines exist for hepatitis A and B." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s27-18", "HPM", {
      topic: "Returning to work after a respiratory virus",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client with influenza symptoms calls the clinic. The fever went away this morning after a dose of ibuprofen, and the cough is getting better. The client asks when it is safe to go back to work. Which response should the nurse give?",
      rationale:
        "A client can return once symptoms are improving and there has been no fever for 24 hours without fever-reducing medicine. Ibuprofen can hide a fever, so today is too soon. A cough can linger after the person is less contagious, so return does not wait for it to clear. Extra care such as masking is advised for 5 days after return.",
      refs: ["Normal activities resume after 24 hours without fever, without fever-reducing medicine, and with improving symptoms. Extra precautions follow for 5 days."],
      sources: [RESP_VIRUS],
    }),
    kind: "mc",
    options: [
      { text: "Today, since the fever ended after the ibuprofen dose", why: "Ibuprofen can mask a fever, so the fever-free time is not yet known." },
      { text: "When the cough has been gone for 3 days", why: "A cough can linger. Return depends on no fever and improving symptoms." },
      { text: "After 10 days of staying at home", why: "No fixed 10-day stay applies. The fever-free time and improving symptoms guide return." },
      { text: "After 24 hours with no fever and no fever medicine", why: "No fever for 24 hours without medicine and improving symptoms allow a return." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s27-19", "HPM", {
      topic: "Foot self-care with neuropathy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 58-year-old client with type 2 diabetes has lost protective sensation in both feet on monofilament testing. Which self-care practices should the nurse teach? Select all that apply.",
      rationale:
        "Without protective sensation, the client cannot feel heat, pressure or small wounds. Daily inspection with a mirror finds injuries early. Shoes and socks protect the feet indoors and out. A thermometer or elbow tests bath water the feet cannot judge. Drying between the toes prevents skin breakdown. Hot soaks, home corn cutting and lotion between the toes all raise injury or infection risk.",
      sources: [ADA_FOOT],
    }),
    kind: "sata",
    options: [
      { text: "Soak the feet in hot water each night before bed", why: "Numb feet cannot sense heat, and soaking dries and softens the skin." },
      { text: "Inspect both feet daily with a mirror", why: "Daily checks find blisters and cuts the client cannot feel." },
      { text: "Wear shoes and socks indoors and out", why: "Footwear prevents injuries from objects the client cannot feel." },
      { text: "Trim corns at home with a razor blade", why: "Self-cutting can cause wounds that heal poorly. A foot care specialist treats corns." },
      { text: "Test bath water with an elbow or thermometer", why: "Numb feet cannot judge water temperature, so another method prevents burns." },
      { text: "Apply lotion between the toes each day", why: "Moisture between the toes promotes fungal infection and skin breakdown." },
      { text: "Dry well between the toes after washing", why: "Dry skin between the toes resists maceration and infection." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s27-20", "HPM", {
      topic: "Reading a basal temperature chart",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 4,
      trend: true,
      stem: "A client using fertility awareness brings a chart of morning basal body temperature and cervical mucus. Based on the trend, what does the chart show?",
      tabs: [
        {
          title: "Fertility Chart",
          table: {
            head: ["Cycle day", "12", "13", "14", "15", "16", "17"],
            rows: [
              ["Temperature", "36.3°C (97.3°F)", "36.2°C (97.2°F)", "36.1°C (97.0°F)", "36.6°C (97.9°F)", "36.7°C (98.1°F)", "36.7°C (98.1°F)"],
              ["Cervical mucus", "Sticky", "Clear, stretchy", "Clear, stretchy", "Thick", "Dry", "Dry"],
            ],
          },
        },
      ],
      rationale:
        "Clear, stretchy mucus on days 13 and 14 marks the fertile time. On day 15 the temperature rises from 36.1°C (97.0°F) to 36.6°C (97.9°F) and stays up. The mucus then turns thick and dry. A sustained rise after fertile mucus shows ovulation has most likely occurred. Only 3 raised days are shown, which is too early to suggest pregnancy.",
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "No ovulation this cycle", why: "An anovulatory cycle shows no sustained rise. This chart rises and stays up from day 15." },
      { text: "Ovulation has most likely occurred", why: "A sustained rise after clear, stretchy mucus fits ovulation around day 14." },
      { text: "Ovulation is expected in about 2 days", why: "The temperature rises after ovulation, so the rise shows it has passed." },
      { text: "An early pregnancy is confirmed", why: "A raised temperature for a few days is expected after ovulation and does not confirm pregnancy." },
    ],
    correct: 1,
  },
];
