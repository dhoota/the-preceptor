import type { Item } from "@/engine/types";
import { ACOG_EC, AUA_VAS, CONDOM, LEHNE, LOWDERMILK, MEC, MISSED_PILLS, SPR, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s27-01", "HPM", {
      topic: "Emergency contraception after 4 days",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 24-year-old client calls the clinic 4 days after a condom broke during intercourse. The client has no medical conditions and has not had intercourse since. The client asks for the most effective way to prevent pregnancy now. Which option should the nurse explain?",
      rationale:
        "The copper IUD is the most effective emergency method. It can be placed up to 5 days after unprotected intercourse, and the client is at day 4. It can then stay in place as ongoing contraception. Ulipristal acetate works better than levonorgestrel at 3 to 5 days, but neither pill matches the IUD. The combined pill regimen is the least effective choice and causes more nausea.",
      refs: ["A copper IUD placed within 5 days of unprotected intercourse is the most effective emergency contraception.", "Ulipristal acetate is more effective than levonorgestrel 3 to 5 days after intercourse."],
      sources: [SPR, ACOG_EC],
    }),
    kind: "mc",
    options: [
      { text: "Levonorgestrel 1.5 mg by mouth", why: "Levonorgestrel is less effective than ulipristal acetate at 3 to 5 days and less effective than the copper IUD." },
      { text: "Ulipristal acetate 30 mg by mouth", why: "Ulipristal acetate works up to 5 days, but the copper IUD prevents more pregnancies." },
      { text: "Copper IUD placement", why: "Placement within 5 days is the most effective emergency method, and the client is at day 4." },
      { text: "Combined pills taken in two doses", why: "The combined pill regimen is less effective than the other options and causes more nausea." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s27-02", "HPM", {
      topic: "Teaching for injectable contraception",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 19-year-old client receives a first injection of depot medroxyprogesterone acetate for contraception. Which points should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Repeat injections are due every 13 weeks. Irregular bleeding and spotting are common, mainly in the first months. The drug lowers bone mineral density, so the client needs enough calcium and vitamin D. The injection gives no protection against sexually transmitted infections. Fertility can take many months to return after the last injection. Weight gain can occur, but it is not by itself a reason to stop.",
      refs: ["Repeat injections of depot medroxyprogesterone acetate are given every 13 weeks."],
      sources: [SPR, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Return for the next injection in 13 weeks", why: "Injections are repeated every 13 weeks to keep protection steady." },
      { text: "The injection also prevents sexually transmitted infections", why: "Hormonal methods give no protection against infection. Condoms are still needed for that." },
      { text: "Spotting between periods is common at first", why: "Irregular bleeding is an expected effect, mainly in the first months of use." },
      { text: "Get calcium and vitamin D in the diet each day", why: "The drug lowers bone mineral density, so calcium and vitamin D support bone health." },
      { text: "Fertility returns within 2 weeks of a missed dose", why: "Return of fertility is often delayed for months after the last injection." },
      { text: "Stop the injections if any weight is gained", why: "Weight gain can occur, but a small gain alone is not a reason to stop the method." },
    ],
    correct: [0, 2, 3],
  },
  {
    ...meta("rn-s27-03", "HPM", {
      topic: "Two missed combined pills",
      cjmm: "action",
      process: "teaching",
      difficulty: 4,
      stem: "A client takes a 28-day combined oral contraceptive pack with 21 active pills. The client forgot the active pills on day 9 and day 10 and remembers on the morning of day 11. The client last had intercourse on day 3. What should the nurse advise?",
      rationale:
        "Two missed active pills in a row call for the most recent missed pill now, with the other missed pill discarded. The client then keeps taking one pill a day, which means the day 11 pill is also taken today. Condoms or abstinence are needed until active pills have been taken for 7 days in a row. The pills were missed in week 2, so the pack continues as usual. Intercourse on day 3 was before the missed pills.",
      refs: ["After 2 or more missed consecutive active pills, a backup method is used until active pills have been taken for 7 days in a row."],
      sources: [SPR, MISSED_PILLS],
    }),
    kind: "mc",
    options: [
      { text: "Take both missed pills now with no backup method", why: "The second missed pill is discarded, and 2 missed pills call for 7 days of a backup method." },
      { text: "Discard this pack and start a new pack today", why: "Restarting a pack is not advised. Only pills missed in the last active week change the pack plan." },
      { text: "Take one missed pill now with no backup method", why: "No backup is the plan for a single late or missed pill. Two missed pills need 7 days of backup." },
      { text: "Take one missed pill now and use condoms for 7 days", why: "This follows the plan for 2 missed active pills in a row outside the last active week." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s27-04", "HPM", {
      topic: "Warning signs after IUD placement",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had a copper IUD placed 12 days ago. During a follow-up call the client reports several changes. Which finding needs same-day evaluation?",
      rationale:
        "Fever of 38.4°C (101.1°F) with pelvic pain 12 days after placement suggests pelvic inflammatory disease. The risk of this infection is highest in the first 20 days after an IUD is placed. Heavier flow, cramping with menses and spotting between periods are common in the first 3 to 6 months of copper IUD use.",
      refs: ["The risk of pelvic inflammatory disease is highest in the first 20 days after IUD placement.", "Spotting and heavier or longer bleeding are common in the first 3 to 6 months of copper IUD use."],
      sources: [SPR, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Heavier menstrual flow than before", why: "Heavier flow is common in the first months of copper IUD use and often lessens." },
      { text: "Fever of 38.4°C (101.1°F) with pelvic pain", why: "Fever with pelvic pain soon after placement suggests pelvic inflammatory disease." },
      { text: "Cramping that comes with each menstrual period", why: "Cramping with menses is a common, expected effect of a copper IUD." },
      { text: "Light spotting between periods", why: "Spotting is common in the first 3 to 6 months of copper IUD use." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s27-05", "HPM", {
      topic: "Fertility awareness teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches a client who plans to track cervical mucus and basal body temperature to avoid pregnancy. Which two statements by the client show understanding? Select two.",
      rationale:
        "Basal body temperature is taken at the same time each morning before any activity. The temperature rises after ovulation, not before it. The fertile time is over once the higher temperature has lasted 3 days. Clear, stretchy mucus signals the fertile time. Illness, poor sleep and alcohol can change the reading.",
      refs: ["With the basal body temperature method, the fertile phase ends after the temperature has stayed raised for 3 days."],
      sources: [LOWDERMILK],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will check my temperature before getting up.\"", why: "Activity raises body temperature, so the reading is taken on waking." },
      { text: "\"A cold will not change my temperature reading.\"", why: "Illness, poor sleep and alcohol can raise the reading and hide the pattern." },
      { text: "\"I will avoid sex until my temperature is up 3 days.\"", why: "A raised temperature that lasts 3 days shows ovulation has passed." },
      { text: "\"A rise in temperature means ovulation is about to start.\"", why: "Progesterone raises the temperature after ovulation. The rise comes too late to warn of it." },
      { text: "\"I can check my temperature at any time of day.\"", why: "Readings taken at different times vary with activity and cannot show the shift." },
      { text: "\"Clear, stretchy mucus means my fertile time is over.\"", why: "Clear, stretchy mucus appears near ovulation and marks the most fertile days." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s27-06", "HPM", {
      topic: "Contraception after vasectomy",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse reviews discharge teaching with a client who had a vasectomy today. Which statement by the client needs further teaching?",
      rationale:
        "Sperm remain in the tract beyond the cut for weeks after a vasectomy. A backup method is needed until a semen analysis confirms success. That test is done 8 to 16 weeks after the procedure. Avoiding ejaculation for about 1 week allows healing. Scrotal support eases discomfort in the first days.",
      refs: ["A semen analysis 8 to 16 weeks after vasectomy confirms success. A backup method is used until then."],
      sources: [SPR, AUA_VAS],
    }),
    kind: "mc",
    options: [
      { text: "\"I will avoid ejaculation for about 1 week.\"", why: "About 1 week without ejaculation allows the surgical sites to heal." },
      { text: "\"I will bring a semen sample in 8 to 16 weeks.\"", why: "The semen analysis at 8 to 16 weeks confirms whether the procedure worked." },
      { text: "\"We can stop using condoms after this week.\"", why: "Sperm can remain for weeks. A backup method is needed until the semen test confirms success." },
      { text: "\"I will wear a scrotal support for a few days.\"", why: "Scrotal support lowers swelling and discomfort after the procedure." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s27-07", "HPM", {
      topic: "Contraception while breastfeeding early",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client who is exclusively breastfeeding is 14 days after birth. The client has no other health conditions and asks to start contraception today. Which method should the nurse recognize as unsafe at this time?",
      rationale:
        "Estrogen adds to the high clotting risk right after birth. Combined estrogen and progestin methods are category 4 for breastfeeding clients under 21 days after birth. The client is at 14 days. Progestin-only pills and the implant are category 2, so their benefits outweigh the risks. Condoms carry no hormonal risk.",
      refs: ["Combined hormonal contraception is US MEC category 4 for breastfeeding clients under 21 days after birth. Progestin-only pills and implants are category 2."],
      sources: [MEC],
    }),
    kind: "mc",
    options: [
      { text: "Combined hormonal pills", why: "Estrogen adds to the high clotting risk under 21 days after birth. This is category 4." },
      { text: "Progestin-only pills", why: "Progestin-only pills are category 2 at this stage. The benefits outweigh the risks." },
      { text: "External condoms", why: "Condoms carry no hormonal or clotting risk and do not affect milk supply." },
      { text: "Etonogestrel arm implant", why: "The implant is category 2 for breastfeeding clients under 21 days after birth." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s27-08", "HPM", {
      topic: "Steps for external condom use",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse uses a model to teach an adolescent client how to use an external condom. Place the steps in order.",
      rationale:
        "The wrapper is opened with the fingers so the condom is not torn. The condom goes on the head of the erect penis. Pinching the tip leaves room for semen and lowers the chance of breakage. The condom is then unrolled to the base. After sex the base is held during withdrawal so the condom does not slip off. Oil-based products weaken latex. Two condoms at once rub and can tear.",
      sources: [CONDOM],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Pinch the air out of the tip", why: "Pinching the tip leaves room for semen and lowers the risk of breakage." },
      { text: "Hold the base while pulling out", why: "Holding the base keeps the condom from slipping off during withdrawal." },
      { text: "Apply petroleum jelly first", why: "Oil-based products weaken latex and can make the condom break." },
      { text: "Open the wrapper with the fingers", why: "Opening by hand, not with teeth or scissors, avoids tearing the condom." },
      { text: "Unroll it to the base of the penis", why: "Full unrolling covers the shaft and keeps the condom in place." },
      { text: "Place it on the head of the erect penis", why: "The condom goes on after erection and before any genital contact." },
      { text: "Put a second condom over it", why: "Two condoms rub against each other and are more likely to tear." },
    ],
    correct: [3, 5, 0, 4, 1],
  },
  {
    ...meta("rn-s27-09", "HPM", {
      topic: "Teaching for the contraceptive patch",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client is starting a combined hormonal contraceptive patch. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "A new patch goes on once a week for 3 weeks, and week 4 is patch-free. The patch is checked daily because it can loosen. A patch that has been off for 48 hours or more is replaced, and a backup method is used for 7 days. Lotion under the patch stops it from sticking. The patch is not placed on the breasts. The site changes with each new weekly patch, not each day.",
      refs: ["If a patch has been detached for 48 hours or more, a new patch is applied and a backup method is used for 7 days."],
      sources: [SPR, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Apply a new patch once a week for 3 weeks", why: "Each patch releases hormone for 7 days, so it is changed weekly for 3 weeks." },
      { text: "Place the patch on a breast", why: "The patch is not applied to the breasts. Buttock, abdomen, upper arm and upper torso are used." },
      { text: "Check each day that the patch is attached", why: "A loose patch releases less hormone, so daily checks catch detachment early." },
      { text: "Apply lotion to the skin first", why: "Lotion or oil under the patch stops it from sticking well." },
      { text: "Leave week 4 free of any patch", why: "The patch-free week allows a withdrawal bleed." },
      { text: "Use condoms for 7 days if it is off 48 hours or more", why: "A patch off for 48 hours or more leaves a gap in protection, so a backup method is needed." },
      { text: "Move the patch to a new site each day", why: "The patch stays on one site for the whole week. The site changes with each new patch." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s27-10", "HPM", {
      topic: "Spotting with a contraceptive implant",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "A client had an etonogestrel implant placed 3 months ago. The client reports light spotting on unpredictable days and asks if something is wrong. A pregnancy test is negative. The client has no pelvic pain or fever. Which response by the nurse is best?",
      rationale:
        "Spotting and light bleeding on unpredictable days are common with the implant. The client has a negative pregnancy test and no pain or fever, so nothing points to another cause. The bleeding does not mean the implant has moved or failed. A backup method is not needed, because the implant keeps working.",
      sources: [SPR],
    }),
    kind: "mc",
    options: [
      { text: "\"Irregular spotting is a common effect of the implant.\"", why: "Unpredictable spotting is the most common bleeding change with the implant." },
      { text: "\"The implant has likely moved and will need to come out.\"", why: "Spotting is not a sign of implant movement and is not by itself a reason for removal." },
      { text: "\"Spotting means the implant has stopped working.\"", why: "The implant keeps preventing pregnancy even when bleeding is irregular." },
      { text: "\"Use condoms as backup until the spotting stops.\"", why: "The implant stays effective, so no backup method is needed for spotting." },
    ],
    correct: 0,
  },
];
