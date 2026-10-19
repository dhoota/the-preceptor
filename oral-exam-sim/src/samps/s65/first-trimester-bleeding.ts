// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  birkhahn2002: { id: "birkhahn-si-2002", citation: "Birkhahn RH, Gaeta TJ, Bei R, Bove JJ. Shock index in the first trimester of pregnancy and its relationship to ruptured ectopic pregnancy. Acad Emerg Med. 2002.", url: "https://doi.org/10.1111/j.1553-2712.2002.tb00226.x" },
  ctas2004: { id: "ctas-2004", citation: "Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004.", url: "https://doi.org/10.1017/S1481803500009428" },
  sogc414: { id: "sogc-ectopic", citation: "Po L, Thomas J, Mills K, et al. Guideline No. 414: management of pregnancy of unknown location and tubal and nontubal ectopic pregnancies. J Obstet Gynaecol Can. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/33453378/" },
  verhaegen: { id: "verhaegen-progesterone-2012", citation: "Verhaegen J, Gallos ID, van Mello NM, et al. Accuracy of single progesterone test to predict early pregnancy outcome in women with pain or bleeding: meta-analysis of cohort studies. BMJ. 2012.", url: "https://doi.org/10.1136/bmj.e6077" },
  barnhart: { id: "barnhart-pul-2011", citation: "Barnhart K, van Mello NM, Bourne T, et al. Pregnancy of unknown location: a consensus statement of nomenclature, definitions, and outcome. Fertil Steril. 2011.", url: "https://doi.org/10.1016/j.fertnstert.2010.09.006" },
  carson: { id: "aabb-transfusion-2023", citation: "Carson JL, Stanworth SJ, Guyatt G, et al. Red blood cell transfusion: 2023 AABB international guidelines. JAMA. 2023.", url: "https://doi.org/10.1001/jama.2023.12914" },
  schliep: { id: "schliep-conceive-2016", citation: "Schliep KC, Mitchell EM, Mumford SL, et al. Trying to conceive after an early pregnancy loss: an assessment on how long couples should wait. Obstet Gynecol. 2016.", url: "https://doi.org/10.1097/AOG.0000000000001159" },
  msfEctopic: { id: "msf-ectopic", citation: "Medecins Sans Frontieres. Essential obstetric and newborn care. Section 2.2, Ectopic pregnancy. MSF Medical Guidelines, online edition. 2026.", url: "https://medicalguidelines.msf.org/en/viewport/ONC/english/2-2-ectopic-pregnancy-51416089.html" },
  braga: { id: "braga-mole-2025", citation: "Braga A, Chagas M, Asrani M, et al. Diagnosis and surgical treatment of hydatidiform mole. Diagnostics (Basel). 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12386084/" },
  msfMole: { id: "msf-mole", citation: "Medecins Sans Frontieres. Essential obstetric and newborn care. Section 2.3, Molar pregnancy (hydatidiform mole). MSF Medical Guidelines, online edition. 2026.", url: "https://medicalguidelines.msf.org/en/viewport/ONC/english/2-3-molar-pregnancy-hydatidiform-mole-51416099.html" },
  sogc448: { id: "sogc-448", citation: "Society of Obstetricians and Gynaecologists of Canada. Guideline No. 448. Prevention of Rh D alloimmunization. J Obstet Gynaecol Can. 2024.", url: "https://delphi.sogc.org/wp-content/uploads/2025/02/gui448CPG2404E.pdf" },
  silva: { id: "silva-hcg-2006", citation: "Silva C, Sammel MD, Zhou L, Gracia C, Hummel AC, Barnhart K. Human chorionic gonadotropin profile for women with ectopic pregnancy. Obstet Gynecol. 2006.", url: "https://doi.org/10.1097/01.AOG.0000198635.25135.e7" },
  morse: { id: "morse-hcg-2012", citation: "Morse CB, Sammel MD, Shaunik A, et al. Performance of human chorionic gonadotropin curves in women at risk for ectopic pregnancy: exceptions to the rules. Fertil Steril. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3246395/" },
  sogc388: { id: "sogc-388", citation: "Butt K, Lim KI. Guideline No. 388. Determination of gestational age by ultrasound. J Obstet Gynaecol Can. 2019.", url: "https://doi.org/10.1016/j.jogc.2019.04.010" },
} satisfies Record<string, Source>;

/** Expansion batch s65: first-trimester-bleeding-39 to first-trimester-bleeding-43. 2027 MCQ and menu format only. */
export const FIRST_TRIMESTER_BLEEDING_S65: Samp[] = [
  /* 39 Normal blood pressure, worrying ratio -------------------------------- */
  {
    id: "first-trimester-bleeding-39",
    topic: "first-trimester-bleeding",
    title: "Walked in with spotting and cramps",
    stem:
      "You are working in a community hospital emergency department. A 26-year-old woman walks in with 1 day of light vaginal spotting and left lower abdominal cramps. Her last menstrual period was 7 weeks ago. She had chlamydia treated 3 years ago. She rates the cramps 3 out of 10, says she feels fine otherwise and wants to go home soon. A urine pregnancy test is positive. Her hemoglobin is 124 g/L. She has mild left lower quadrant tenderness without guarding.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/70 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is closest to her shock index, the heart rate divided by the systolic blood pressure?",
        options: ["0.63", "0.78", "0.93", "1.08", "1.24"],
        correct: 2,
        explanation:
          "The shock index is the heart rate divided by the systolic pressure: 104 divided by 112 is 0.93. In a prospective ED cohort of first trimester patients with pain or bleeding, the mean shock index was about 0.67 in those without an ectopic pregnancy and 0.84 in those with a ruptured ectopic. Values of 0.63 and 0.78 understate her ratio, and 1.08 and 1.24 overstate it. Using the diastolic pressure by mistake would give 1.49.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "birkhahn-si-2002",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following Canadian Triage and Acuity Scale levels best fits her when she is triaged on arrival?",
        options: ["CTAS level 1", "CTAS level 2", "CTAS level 3", "CTAS level 4", "CTAS level 5"],
        correct: 1,
        explanation:
          "A pulse of 104/minute that her mild cramps do not explain is unexplained tachycardia, which CTAS lists under hemodynamic compromise, evidence of borderline perfusion, at level 2. CTAS assigns the highest level reached by any modifier, so her light spotting and a pain score of 3 out of 10 do not pull her down. Level 1 is shock, with marked pallor, cool skin, hypotension, postural syncope, significant tachycardia or a reduced level of consciousness, and she has none of these. Level 3 is for vital signs at the upper or lower end of normal, and level 4 for normal vital signs, while her pulse is above the normal range.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "ctas-2004",
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
        options: ["Admit for a repeat hCG in 48 hours", "Discharge with hCG in 48 hours", "Expectant care at home", "Formal ultrasound tomorrow", "Gynecology now for laparoscopy"],
        correct: 4,
        explanation:
          "A positive pregnancy test, no intrauterine pregnancy, free fluid behind the uterus and a shock index near 1 point to a leaking or ruptured ectopic pregnancy, even though her blood pressure is normal. She needs gynecology now for surgery, with IV access, her blood type determined and blood ready for transfusion. Expectant care, discharge, a formal scan tomorrow or admission to wait for a repeat hCG would all leave an ongoing bleed untreated, and methotrexate takes days to work and cannot stop it either.",
        keyFeature: { topic: "first-trimester-bleeding", n: 2 },
        source: "sogc-ectopic",
      },
    ],
    sources: [S.birkhahn2002, S.ctas2004, S.msfEctopic, S.sogc414],
    ...META,
  },

  /* 40 Vesicles at the os at thirteen weeks --------------------------------- */
  {
    id: "first-trimester-bleeding-40",
    topic: "first-trimester-bleeding",
    title: "Dark bleeding and weeks of vomiting",
    stem:
      "A 41-year-old woman presents to the emergency department with 2 days of dark brown vaginal bleeding. Her last menstrual period was 13 weeks ago, and she has not yet had prenatal care. She has vomited several times a day for 5 weeks and has lost 3 kg. She has had three previous pregnancies. Her blood group in her last pregnancy was A Rh D negative, and today's antibody screen is negative. She looks tired. Her abdomen is soft and nontender.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "18/minute", bp: "146/92 mmHg", o2sat: "98% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Speculum examination shows dark blood in the vault and several clear, grape-like vesicles about 1 cm across at the cervical os.",
        prompt: "Which of the following is the most likely diagnosis based on her speculum examination?",
        options: ["Cervical ectopic pregnancy", "Hydatidiform mole", "Incomplete miscarriage", "Threatened miscarriage", "Twin pregnancy"],
        correct: 1,
        explanation:
          "Passage of translucent, grape-like vesicles is rare but pathognomonic of a hydatidiform mole, and her bleeding, weeks of vomiting and a BP of 146/92 mmHg before 20 weeks all fit. An incomplete miscarriage passes clots and placental tissue, not clear vesicles. A threatened miscarriage has a closed os with no tissue. A cervical ectopic pregnancy distends the cervix itself. A twin pregnancy can cause more vomiting but does not produce vesicles at the os.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "braga-mole-2025",
      },
      {
        id: "q2",
        kind: "single",
        update: "Bimanual examination finds smooth, mobile, nontender masses about 7 cm across in both adnexa. She has had no pelvic pain or fever.",
        prompt: "Which of the following is the most likely explanation for the masses found on her bimanual examination?",
        options: ["Bilateral dermoid cysts", "Bilateral tubal pregnancies", "Endometriomas", "Theca lutein cysts", "Tubo-ovarian abscesses"],
        correct: 3,
        explanation:
          "Smooth, mobile, painless masses in both adnexa beside a molar pregnancy are most likely theca lutein cysts. Very high hCG overstimulates the ovaries, and 25 to 50% of patients with a mole develop these cysts. They usually regress after evacuation, and rupture is rare, at about 1 to 2%. Tubo-ovarian abscesses are tender and come with fever. Bilateral tubal pregnancies are extremely rare and would not explain the vesicles at the os. Dermoid cysts and endometriomas are not caused by the pregnancy and are seldom bilateral and this large at once.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "braga-mole-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a heterogeneous intrauterine mass with many small cystic spaces and no fetus. Quantitative hCG is 310 000 IU/L. Suction aspiration is planned today, and pathology will take a week.",
        prompt: "Using SOGC Guideline No. 448, which of the following is the most appropriate Rh immune globulin plan for her?",
        options: ["Kleihauer-Betke test to set the dose", "Rh immune globulin 120 mcg IM", "Rh immune globulin 300 mcg IM", "Wait for pathology to decide", "No Rh immune globulin for a mole"],
        correct: 2,
        explanation:
          "SOGC suggests 300 mcg of Rh immune globulin for a non-sensitized Rh D negative patient with a molar pregnancy after 12 weeks. It may be omitted only when a complete mole is certain, because trophoblast does not carry the D antigen, whereas a partial mole contains fetal red cells. Her pathology is pending, so the diagnosis is not yet certain, and the dose belongs within 72 hours of the event rather than a week later. A dose of 120 mcg is the minimum used after chorionic villus sampling in the first 12 weeks. Kleihauer-Betke testing is advised after 20 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
      {
        id: "q4",
        kind: "single",
        update: "Suction aspiration is uncomplicated and her bleeding settles.",
        prompt: "Which of the following is the most accurate counselling about her risk that the disease persists after the evacuation?",
        options: ["Equal to the risk after a miscarriage", "Higher than usual given her features", "Lower than usual given her age", "Present only if bleeding continues", "Removed once the uterus is empty"],
        correct: 1,
        explanation:
          "Her age of 41, an hCG of 310 000 IU/L and theca lutein cysts are each markers of a high-risk mole, and with these features the rate of postmolar gestational trophoblastic neoplasia can reach 40 to 50%. She should hear this plainly before discharge, because it is why her hCG follow-up must not lapse. Age over 40 raises the risk rather than lowering it. Emptying the uterus does not remove the risk, and persistent disease is often silent, so it is found by falling or rising hCG rather than by bleeding. A miscarriage carries no comparable risk.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "braga-mole-2025",
      },
    ],
    sources: [S.braga, S.sogc448],
    ...META,
  },

  /* 41 Tissue at the os at thirteen weeks, partner Rh negative -------------- */
  {
    id: "first-trimester-bleeding-41",
    topic: "first-trimester-bleeding",
    title: "Clots and tissue passed at home",
    stem:
      "A 33-year-old woman presents to the emergency department with heavy vaginal bleeding and cramps that began 6 hours ago. A dating ultrasound at 8 weeks showed a live intrauterine pregnancy, and she is now 13 weeks and 2 days pregnant. At home she passed several large clots and a piece of tissue. Her blood group is O Rh D negative, and this morning's antibody screen is negative. Her husband is with her and carries a blood donor card showing O Rh D negative. She says he is the only possible father. She is pale but alert.",
    vitals: { temperature: "36.8°C oral", pulse: "102/minute", resp: "18/minute", bp: "116/72 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Speculum examination shows blood and clots in the vault and an open os with tissue in the cervical canal. Bimanual examination finds a soft, 11 week size, nontender uterus.",
        prompt: "Which of the following best describes her pregnancy based on her pelvic examination?",
        options: ["Complete miscarriage", "Incomplete miscarriage", "Missed miscarriage", "Septic miscarriage", "Threatened miscarriage"],
        correct: 1,
        explanation:
          "Heavy bleeding, cramps, passed tissue and an open os with more tissue in the canal make this an incomplete miscarriage. A threatened or missed miscarriage has a closed cervix. A complete miscarriage leaves a closed os and a small, firm uterus once the bleeding settles. A septic miscarriage needs fever, a tender uterus or foul discharge, and she has none. Tissue sitting in the canal should be removed with ring forceps during the speculum examination, which also reduces bleeding.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "msf-eonc-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "While gynecology is on the way, she soaks a pad every 20 minutes. Her pulse rises to 118/minute and her BP is 104/68 mmHg lying down. She feels faint when she sits up.",
        prompt: "Which of the following is the most accurate interpretation of her vital signs now?",
        options: ["Anxiety with normal blood volume", "Early hemorrhagic shock", "Expected tachycardia of pregnancy", "Vasovagal reaction to cramping", "Volume loss from vomiting"],
        correct: 1,
        explanation:
          "A rising pulse of 118/minute with a systolic pressure that has started to fall, a shock index of about 1.1 and faintness on sitting up are early hemorrhagic shock, even though her BP is still above 100 mmHg. She needs large-bore IV access, Ringer's lactate, close monitoring, blood ready for transfusion and prompt uterine evacuation, which cannot be delayed when an incomplete miscarriage bleeds heavily. A vasovagal reaction to tissue in the os slows the pulse rather than speeding it. Pregnancy raises the heart rate only modestly, and anxiety or vomiting does not explain this picture.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "msf-eonc-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "After uterine aspiration her bleeding is light and her pulse is 88/minute. She asks whether she needs the Rh injection.",
        prompt: "Which of the following statements about Rh immune globulin for her is most accurate under SOGC Guideline No. 448?",
        options: ["A Kleihauer-Betke test decides the dose", "Her husband's blood type is irrelevant", "It is needed only after 20 weeks", "It may be omitted after a discussion", "It must be given within 24 hours"],
        correct: 3,
        explanation:
          "After 12 weeks SOGC suggests 300 mcg for a spontaneous pregnancy loss in a non-sensitized Rh D negative patient. The fetal D antigen comes from the biological father, so when paternity is certain and he is documented Rh D negative, there is no incompatibility and the guideline says Rh immune globulin may be omitted. Because paternity is misattributed in about 4% of Canadian pregnancies, this is a shared decision, and she may still choose the injection. If given, it is due within 72 hours, not 24. Kleihauer-Betke testing is for events after 20 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
      {
        id: "q4",
        kind: "menu",
        update: "She is tearful before discharge. She is worried that lifting her toddler caused the loss.",
        prompt: "Which of the following are most important to include in her discharge and follow-up plan?",
        options: ["Antibiotics for 7 days", "Avoid lifting in future pregnancies", "Explain lifting did not cause it", "Parental karyotypes", "Repeat hCG weekly for a year", "Screening for depression", "Thrombophilia testing"],
        select: 2,
        correct: [2, 5],
        explanation:
          "The 2025 SOGC guidance on early pregnancy loss recommends screening for depression after a loss and offering treatment or referral when needed. It also advises telling patients that most early losses cannot be prevented or treated, so she should be told plainly that lifting her toddler did not cause it, and advice to avoid lifting next time would wrongly imply blame. Karyotypes and thrombophilia testing belong to the work-up of recurrent loss, not a first loss. Weekly hCG for a year is molar pregnancy surveillance, and she has no sign of infection needing antibiotics.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "sogc-epl-2025",
      },
    ],
    sources: [S.msfEonc, S.sogc448, S.sogcEpl],
    ...META,
  },

  /* 42 A reassuring rise that is not reassuring ----------------------------- */
  {
    id: "first-trimester-bleeding-42",
    topic: "first-trimester-bleeding",
    title: "Planned recheck after two days",
    stem:
      "A 30-year-old woman returns to the emergency department for a planned recheck 48 hours after a visit for light spotting. Her last menstrual period was 6 weeks ago. Two days ago her quantitative hCG was 820 IU/L, and a formal transvaginal ultrasound showed no intrauterine pregnancy, no adnexal mass and no free fluid. She had a right salpingectomy for an ectopic pregnancy 3 years ago. Today she has mild left pelvic cramps and ongoing spotting. Her quantitative hCG today is 1 480 IU/L. Her abdomen is soft, with mild left lower quadrant tenderness.",
    vitals: { temperature: "36.7°C oral", pulse: "78/minute", resp: "16/minute", bp: "118/74 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most accurate interpretation of the change in her hCG over 48 hours?",
        options: ["Confirms a viable intrauterine pregnancy", "Excludes an ectopic pregnancy", "Normal rise, ectopic still possible", "Rise too slow for a viable pregnancy", "Shows a failing pregnancy"],
        correct: 2,
        explanation:
          "Her hCG rose from 820 to 1 480 IU/L, an increase of 660 IU/L or 80% in 48 hours, which is above the minimal rise of about 35% expected for a viable intrauterine pregnancy. That pattern does not settle the location. In a large ED series about 21% of women with an ectopic pregnancy had an initial rise similar to a viable pregnancy, and serial hCG alone misclassified about 17% of ectopic pregnancies in a multisite cohort. With a previous ectopic and left-sided cramps, she still needs the pregnancy located.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "silva-hcg-2006",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about her normal pulse and blood pressure is most accurate?",
        options: ["A pulse under 100 rules out bleeding", "Low BP is the earliest sign of rupture", "Normal vitals exclude a tubal leak", "They do not exclude a leaking ectopic", "Vitals matter only after 12 weeks"],
        correct: 3,
        explanation:
          "In women with ectopic pregnancy, tachycardia and hypotension identified tubal rupture with sensitivities of only 28% and 36%, and the authors concluded that normal vital signs alone are poor predictors of rupture. Hypotension is a late sign, not an early one, and a pulse under 100/minute does not rule out bleeding. Vital signs matter at every gestation. Her reassuring numbers should not shorten her work-up or her return instructions.",
        keyFeature: { topic: "first-trimester-bleeding", n: 1 },
        source: "birkhahn-vitals-2003",
      },
      {
        id: "q3",
        kind: "single",
        update: "A repeat transvaginal ultrasound today again shows no intrauterine pregnancy, no adnexal mass and no free fluid.",
        prompt: "Which of the following is the most appropriate plan for her today?",
        options: ["Discharge with no follow-up", "Early pregnancy clinic, hCG in 48 hours", "methotrexate 50 mg/m2 IM today", "Prenatal care booking at 12 weeks", "Uterine aspiration today"],
        correct: 1,
        explanation:
          "She has a pregnancy of unknown location with a prior ectopic, so surveillance continues until the location is known, with a third hCG and repeat ultrasound. The authors of a multisite cohort advised a third hCG when values are low or near thresholds, because two values alone misclassify outcomes. An early pregnancy clinic can arrange this with clear return instructions. Methotrexate or uterine aspiration today could end a wanted intrauterine pregnancy that is still possible. Discharge without follow-up, or waiting for prenatal care at 12 weeks, leaves a possible ectopic unwatched.",
        keyFeature: { topic: "first-trimester-bleeding", n: 2 },
        source: "morse-hcg-2012",
      },
      {
        id: "q4",
        kind: "single",
        update: "Forty-eight hours later her hCG is 1 030 IU/L. The ultrasound is unchanged and her cramps have settled.",
        prompt: "Which of the following is the most accurate interpretation of this new hCG result?",
        options: ["Confirms a completed miscarriage", "Follow-up can now stop", "Methotrexate is now required", "Rise was a laboratory error", "Still consistent with an ectopic"],
        correct: 4,
        explanation:
          "Her hCG fell from 1 480 to 1 030 IU/L, a fall of about 30% in 48 hours. That is slower than the decline of roughly 36 to 47% expected after a completed miscarriage, and in women with ectopic pregnancy the median 2-day decline was 27%, with about 8% falling as fast as a completed miscarriage. A falling hCG therefore does not exclude an ectopic, so she is followed until the hCG is undetectable. Methotrexate is not needed while the value falls in a well patient, and nothing suggests a laboratory error, since both results fit known ectopic patterns.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "morse-hcg-2012",
      },
    ],
    sources: [S.silva, S.birkhahn2003, S.morse],
    ...META,
  },

  /* 43 Dates that do not match the uterus ----------------------------------- */
  {
    id: "first-trimester-bleeding-43",
    topic: "first-trimester-bleeding",
    title: "Unsure of her dates",
    stem:
      "A 29-year-old woman presents to the emergency department with 1 day of light vaginal bleeding and mild cramps. By her last menstrual period she is 14 weeks pregnant, but her cycles are irregular and she is unsure of the date. She has had no prenatal care or ultrasound in this pregnancy. Her blood group from a previous pregnancy is B Rh D negative, and today's antibody screen is negative. She takes no medications. She is well, with a soft, nontender abdomen.",
    vitals: { temperature: "36.6°C oral", pulse: "80/minute", resp: "16/minute", bp: "114/70 mmHg", o2sat: "99% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Speculum examination shows a small amount of blood coming from a closed os and a normal cervix. Bimanual examination finds a nontender uterus about 10 weeks in size and no adnexal mass.",
        prompt: "Which of the following is the most likely explanation for the size of her uterus?",
        options: ["Cervical ectopic pregnancy", "Hydatidiform mole", "Twin intrauterine pregnancy", "Uterine fibroids", "Wrong dates or failed pregnancy"],
        correct: 4,
        explanation:
          "A uterus smaller than her menstrual dates means either she is earlier than she thinks, which is likely with irregular cycles, or the pregnancy stopped growing. A molar pregnancy makes the uterus larger and softer than dates, and twins and fibroids also enlarge it. A cervical ectopic pregnancy distends the cervix, and her cervix looks normal. The bimanual examination has done its job by showing the mismatch, and ultrasound now has to settle which explanation is right.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "msf-mole",
      },
      {
        id: "q2",
        kind: "single",
        update: "Bedside ultrasound shows a single live intrauterine pregnancy with a crown-rump length of 38 mm, consistent with 10 weeks and 3 days.",
        prompt: "Which of the following should be used to assign her gestational age?",
        options: ["Average of scan and menstrual dates", "Her last menstrual period", "Quantitative hCG level", "Today's crown-rump length", "Uterine size on bimanual examination"],
        correct: 3,
        explanation:
          "SOGC guidance on dating holds that ultrasound measurement in the first trimester, using the crown-rump length, assigns gestational age more accurately than menstrual dates. Her uncertain date and irregular cycles make the menstrual estimate even less reliable. Uterine size on examination is too imprecise to date a pregnancy, and hCG levels vary too widely between pregnancies to give an age. Averaging two estimates keeps the error of the weaker one.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "sogc-388",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Based on her ultrasound dating and SOGC Guideline No. 448, which of the following Rh immune globulin plans fits best?",
        options: ["Discuss it, give only if she prefers", "Kleihauer-Betke test first", "Rh immune globulin 300 mcg now", "Wait until the 28-week dose", "No Rh assessment needed"],
        correct: 0,
        explanation:
          "By ultrasound she is 10 weeks and 3 days. For a threatened miscarriage between 8 and 12 weeks, SOGC suggests not giving Rh immune globulin, but it may be considered for a patient who is more risk averse, so it becomes a shared decision. Had her menstrual dates of 14 weeks been used, 300 mcg would have been suggested, so accurate dating changed the plan. Kleihauer-Betke testing is for events after 20 weeks. Waiting for the 28-week dose does not address today's event if she wants protection now, and Rh typing and antibody screening are still recommended after 8 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
      {
        id: "q4",
        kind: "single",
        update: "She chooses to have the injection but worries because it is made from donated blood.",
        prompt: "Which of the following statements about Rh immune globulin is most accurate for her counselling?",
        options: ["It carries a 1% risk of hepatitis C", "It is a synthetic monoclonal antibody", "It must be given into a muscle", "It works only if given before bleeding", "No infections reported with current products"],
        correct: 4,
        explanation:
          "Rh immune globulin is a pooled human plasma product. An outbreak of hepatitis C in Ireland in the late 1970s was linked to an early preparation, but no transmission of infection has been reported in North America since the purer current products were introduced. The Canadian product can be given IV or IM, and the route can follow patient or physician preference. It is given within 72 hours after a sensitizing event, not only before one. A recombinant monoclonal product is not available for routine use in Canada.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
    ],
    sources: [S.msfMole, S.sogc388, S.sogc448],
    ...META,
  },
];
