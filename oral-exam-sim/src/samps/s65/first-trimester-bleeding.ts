// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  birkhahn2002: { id: "birkhahn-si-2002", citation: "Birkhahn RH, Gaeta TJ, Bei R, Bove JJ. Shock index in the first trimester of pregnancy and its relationship to ruptured ectopic pregnancy. Acad Emerg Med. 2002.", url: "https://doi.org/10.1111/j.1553-2712.2002.tb00226.x" },
  birkhahn2003: { id: "birkhahn-vitals-2003", citation: "Birkhahn RH, Gaeta TJ, Van Deusen SK, Tloczkowski J. The ability of traditional vital signs and shock index to identify ruptured ectopic pregnancy. Am J Obstet Gynecol. 2003.", url: "https://doi.org/10.1067/s0002-9378(03)00663-x" },
  msfEctopic: { id: "msf-ectopic", citation: "Medecins Sans Frontieres. Essential obstetric and newborn care. Section 2.2, Ectopic pregnancy. MSF Medical Guidelines, online edition. 2026.", url: "https://medicalguidelines.msf.org/en/viewport/ONC/english/2-2-ectopic-pregnancy-51416089.html" },
} satisfies Record<string, Source>;

/** Expansion batch s65: first-trimester-bleeding-39 to first-trimester-bleeding-43. 2027 MCQ and menu format only. */
export const FIRST_TRIMESTER_BLEEDING_S65: Samp[] = [
  /* 39 Normal blood pressure, worrying ratio -------------------------------- */
  {
    id: "first-trimester-bleeding-39",
    topic: "first-trimester-bleeding",
    title: "Walked in with spotting and cramps",
    stem:
      "You are working in a community hospital emergency department. A 26-year-old woman walks in with 1 day of light vaginal spotting and left lower abdominal cramps. Her last menstrual period was 7 weeks ago. She had chlamydia treated 3 years ago. She says she feels fine apart from the cramps and wants to go home soon. A urine pregnancy test is positive. Her hemoglobin is 124 g/L. She has mild left lower quadrant tenderness without guarding.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/70 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to her shock index, the heart rate divided by the systolic blood pressure?",
        options: ["0.63", "0.78", "0.93", "1.08", "1.24"],
        correct: 2,
        explanation:
          "The shock index is the heart rate divided by the systolic pressure: 104 divided by 112 is 0.93. In a prospective ED cohort of first trimester patients with pain or bleeding, the mean shock index was about 0.67 in those without an ectopic pregnancy and 0.84 in those with a ruptured ectopic. A value of 0.63 or 0.78 would come from using the diastolic pressure or a lower heart rate. Values of 1.08 and 1.24 overstate her ratio.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "birkhahn-si-2002",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about her vital signs is most accurate?",
        options: ["Her shock index suggests rupture", "Normal BP excludes major bleeding", "Normal hemoglobin excludes bleeding", "Tachycardia is normal at 7 weeks", "Vital signs are reassuring today"],
        correct: 0,
        explanation:
          "A shock index above 0.85 made a ruptured ectopic pregnancy 15 times more likely in one ED cohort, and it correlated with the volume of blood in the abdomen better than heart rate or blood pressure alone. On their own, tachycardia and hypotension had sensitivities of only 28% and 36% for rupture, so her normal systolic pressure is not reassuring. A hemoglobin drawn early in acute bleeding has not yet fallen. The heart rate rises only modestly in early pregnancy and does not explain 104/minute.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "birkhahn-vitals-2003",
      },
      {
        id: "q3",
        kind: "single",
        update: "Speculum examination shows a small amount of dark blood coming from a closed os, with a normal-looking cervix. A gentle bimanual examination follows.",
        prompt: "Which of the following bimanual findings would most suggest blood collecting behind her uterus?",
        options: ["Closed, firm cervix", "Mobile, nontender uterus", "Soft, globular uterus", "Tender, bulging posterior fornix", "Uterus 7 weeks in size"],
        correct: 3,
        explanation:
          "Blood from a leaking tubal pregnancy pools in the pouch of Douglas, behind the uterus, and is felt through the posterior fornix as a tender, bulging, poorly defined fullness. A soft, globular uterus of 7 week size is expected in any early pregnancy and does not locate it. A closed cervix and a mobile, nontender uterus are reassuring for the uterus itself but do not exclude a tubal pregnancy. The speculum examination has already shown that the blood comes from the os rather than a cervical lesion.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "msf-ectopic",
      },
      {
        id: "q4",
        kind: "single",
        update: "Bedside ultrasound shows no intrauterine pregnancy and free fluid in the pouch of Douglas, with none in the hepatorenal space. Her pulse is 108/minute and her BP 110/70 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: ["Discharge with hCG in 48 hours", "Formal ultrasound tomorrow", "Gynecology now for laparoscopy", "methotrexate 50 mg/m2 IM", "Repeat hCG in 48 hours as inpatient"],
        correct: 2,
        explanation:
          "A positive pregnancy test, no intrauterine pregnancy, free fluid behind the uterus and a shock index near 1 point to a leaking or ruptured ectopic pregnancy, even though her blood pressure is normal. She needs gynecology now for surgery, with IV access, a group and screen and blood ready. Methotrexate is for stable patients without signs of rupture or hemoperitoneum. Discharge, a scan tomorrow or a repeat hCG in 48 hours would leave an ongoing bleed untreated.",
        keyFeature: { topic: "first-trimester-bleeding", n: 2 },
        source: "birkhahn-vitals-2003",
      },
    ],
    sources: [S.birkhahn2002, S.birkhahn2003, S.msfEctopic],
    ...META,
  },
];
