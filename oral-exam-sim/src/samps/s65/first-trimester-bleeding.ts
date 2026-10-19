// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  birkhahn2002: { id: "birkhahn-si-2002", citation: "Birkhahn RH, Gaeta TJ, Bei R, Bove JJ. Shock index in the first trimester of pregnancy and its relationship to ruptured ectopic pregnancy. Acad Emerg Med. 2002.", url: "https://doi.org/10.1111/j.1553-2712.2002.tb00226.x" },
  ctas2004: { id: "ctas-2004", citation: "Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the Canadian Emergency Department Triage and Acuity Scale implementation guidelines. CJEM. 2004.", url: "https://doi.org/10.1017/S1481803500009428" },
  verhaegen: { id: "verhaegen-progesterone-2012", citation: "Verhaegen J, Gallos ID, van Mello NM, et al. Accuracy of single progesterone test to predict early pregnancy outcome in women with pain or bleeding: meta-analysis of cohort studies. BMJ. 2012.", url: "https://doi.org/10.1136/bmj.e6077" },
  barnhart: { id: "barnhart-pul-2011", citation: "Barnhart K, van Mello NM, Bourne T, et al. Pregnancy of unknown location: a consensus statement of nomenclature, definitions, and outcome. Fertil Steril. 2011.", url: "https://doi.org/10.1016/j.fertnstert.2010.09.006" },
  pail: { id: "pail-remains-2026", citation: "Pregnancy and Infant Loss (PAIL) Network, Sunnybrook Health Sciences Centre. Managing products of conception under 20 weeks: provider checklist, and Caring for your miscarriage or baby's remains in hospital: patient handout. Ontario. 2026.", url: "https://pailnetwork.sunnybrook.ca/wp-content/uploads/2026/05/Managing-Products-of-Conception-Provider-Checklist-March-2026.docx" },
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
        options: ["Admit for a repeat hCG in 48 hours", "Discharge with hCG in 48 hours", "Expectant care at home", "Formal ultrasound tomorrow", "Gynecology now for surgery"],
        correct: 4,
        explanation:
          "A positive pregnancy test, an empty uterus and fluid behind it make a bleeding ectopic pregnancy highly likely, and blood can seep into the abdomen over days or weeks. Once the diagnosis is highly likely, the step is to prepare for surgery or refer urgently, with IV access and Ringer's lactate, close monitoring of pulse, BP and bleeding, her blood type determined and blood ready for transfusion. Expectant care, discharge, a formal scan tomorrow or admission to wait for a repeat hCG would all leave a likely intraperitoneal bleed without definitive treatment.",
        keyFeature: { topic: "first-trimester-bleeding", n: 2 },
        source: "msf-ectopic",
      },
    ],
    sources: [S.birkhahn2002, S.ctas2004, S.msfEctopic],
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
          "Smooth, mobile, painless masses in both adnexa beside a molar pregnancy are most likely theca lutein cysts. Very high hCG overstimulates the ovaries, and 25 to 50% of patients with a mole develop these cysts. They usually regress after evacuation, and rupture is rare, at about 1 to 2%. Tubo-ovarian abscesses are tender and come with fever. Bilateral tubal pregnancies are extremely rare and would not explain the vesicles at the os. Dermoid cysts and endometriomas do not arise from the pregnancy, so they would be a coincidence beside a mole.",
        keyFeature: { topic: "first-trimester-bleeding", n: 3 },
        source: "braga-mole-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a heterogeneous intrauterine mass with many small cystic spaces and no fetus. Quantitative hCG is 310 000 IU/L. Suction aspiration is planned today, and pathology will take a week.",
        prompt: "Using SOGC Guideline No. 448, which of the following is the most appropriate Rh immune globulin plan for her?",
        options: ["Kleihauer-Betke test to set the dose", "Rh immune globulin 120 mcg IM", "Rh immune globulin 300 mcg IM", "Wait for pathology to decide", "No Rh immune globulin needed"],
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
          "Her age of 41, an hCG of 310 000 IU/L and theca lutein cysts are each markers of a high-risk mole, and with these features the rate of postmolar gestational trophoblastic neoplasia can reach 40 to 50%. She should hear this plainly before discharge, because it is why her hCG follow-up must not lapse. Age over 40 raises the risk rather than lowering it. Emptying the uterus does not remove the risk, and persistent disease is often silent, so it is found by an hCG that plateaus or rises rather than by bleeding. Even after complete evacuation, about 20% of molar pregnancies progress to postmolar neoplasia, so her risk is not that of an ordinary pregnancy loss.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "braga-mole-2025",
      },
    ],
    sources: [S.braga, S.sogc448],
    ...META,
  },

  /* 41 Waiting at home after a silent loss ---------------------------------- */
  {
    id: "first-trimester-bleeding-41",
    topic: "first-trimester-bleeding",
    title: "Light bleeding after a night of cramps",
    stem:
      "You are working in a tertiary care emergency department in Ontario. A 37-year-old woman presents 10 hours after she passed a pregnancy at home. She was 13 weeks and 4 days pregnant by a dating ultrasound at 8 weeks. Four days ago an ultrasound clinic found no heartbeat and a fetus that had stopped growing at about 10 weeks, and she chose to wait for the pregnancy to pass. Overnight she had strong cramps and bleeding heavier than a period, and she passed a sac with a fetus, which she has brought in. The bleeding is now light. Her hemoglobin at 9 weeks was 128 g/L. Her blood group is O Rh D negative, and her antibody screen at 9 weeks was negative. Her husband was typed at the same prenatal clinic as O Rh D negative, and she says he is the only possible father.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "112/70 mmHg", o2sat: "99% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        update: "Speculum examination shows a small amount of blood and a closed os. She has the fetus and sac in a plastic container from home. She is tearful and calls it her baby.",
        prompt: "Which of the following are most appropriate in caring for the fetal remains she has brought in?",
        options: ["Ask if she wants to see or hold the baby", "Explain that a burial permit is needed", "Keep the remains in a specimen basin", "Offer her a choice of arrangements", "Refer to the remains as products of conception", "Release the remains only to a funeral home", "Send the remains for disposal as clinical waste"],
        select: 2,
        correct: [0, 3],
        explanation:
          "The Ontario provincial pregnancy loss network checklist for remains brought to hospital before 20 weeks asks staff to offer to let the patient see, hold or photograph the baby, and to explain that every family may choose the arrangements: hospital cremation after pathology, private arrangements after pathology, or taking the remains home the same day without testing. Staff should mirror her word, baby, rather than say products of conception, and should wrap the remains in something soft rather than a medical container such as a basin. A loss under 20 weeks and under 500 g needs no death certificate or burial permit in Ontario, and the remains may go home with the family, not only to a funeral home. Treating them as clinical waste removes her choice.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "pail-remains-2026",
      },
      {
        id: "q2",
        kind: "single",
        update: "She asks whether she needs the Rh injection.",
        prompt: "Which of the following statements about Rh immune globulin for her is most accurate under SOGC Guideline No. 448?",
        options: ["A Kleihauer-Betke test decides the dose", "Her husband's blood type is irrelevant", "It may be given only after 20 weeks", "It may be omitted after a discussion", "It must be given within 24 hours"],
        correct: 3,
        explanation:
          "After 12 weeks SOGC suggests 300 mcg for a pregnancy loss in a non-sensitized Rh D negative patient. The fetal D antigen comes from the biological father, so when paternity is certain and he is documented Rh D negative, there is no incompatibility and the guideline says Rh immune globulin may be omitted. Because paternity is misattributed in about 4% of Canadian pregnancies, this is a shared decision, and she may still choose the injection. The 300 mcg threshold follows her gestational age of 13 weeks and 4 days at the loss, not the fetal size of about 10 weeks. If given, it is due within 72 hours, not 24. Kleihauer-Betke testing is for events after 20 weeks, and prophylaxis applies well before 20 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
      {
        id: "q3",
        kind: "single",
        update: "She would like to receive Rh immune globulin. A repeat antibody screen has been sent, and the result will take about 4 hours.",
        prompt: "Which of the following is the most appropriate timing for her Rh immune globulin?",
        options: ["After the antibody screen result", "At her follow-up visit in 1 week", "Now, before the screen result", "Once the fetal Rh D type is known", "Only after a Kleihauer-Betke test"],
        correct: 2,
        explanation:
          "SOGC suggests a pretreatment antibody screen, mainly to find other antibodies that need closer monitoring, but states that Rh immune globulin should not be deferred pending the result. Her screen at 9 weeks was negative, and new anti-D before treatment is rare. Waiting a week would miss the 72 hour window after her loss. Fetal Rh D typing plays no part in this timing, and Kleihauer-Betke testing to size the dose is advised only after 20 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-448",
      },
      {
        id: "q4",
        kind: "single",
        update: "Before she leaves, she says they want another child and asks how long they should wait before trying again.",
        prompt: "Which of the following is the most accurate advice about when they can start trying to conceive?",
        options: ["After any wait she chooses", "After 6 months of waiting", "After 3 normal periods", "After parental karyotypes", "After 1 year of contraception"],
        correct: 0,
        explanation:
          "There is no physiologic reason to delay trying after an early pregnancy loss that was not ectopic or molar. In a large trial cohort, couples who started trying within 3 months of a loss had a higher live birth rate than those who waited longer, 53.2% against 36.1%, with a shorter time to pregnancy. Waiting 6 months or a year, or for 3 periods, adds delay without benefit, so the timing is hers to choose when she is emotionally ready. Parental karyotypes belong to the work-up of recurrent loss, not a single loss.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "schliep-conceive-2016",
      },
    ],
    sources: [S.pail, S.sogc448, S.schliep],
    ...META,
  },

  /* 42 A weekend with no formal ultrasound ---------------------------------- */
  {
    id: "first-trimester-bleeding-42",
    topic: "first-trimester-bleeding",
    title: "Weekend visit with pelvic cramps",
    stem:
      "You are working in a community hospital emergency department where formal ultrasound is available only on weekdays. On a Saturday, a 34-year-old woman presents with 3 days of light spotting and mild right pelvic cramps. Her last menstrual period was 5 weeks and 6 days ago. She has had one vaginal birth. Two days ago her family physician ordered a quantitative hCG, which was 820 IU/L. A transvaginal ultrasound at this hospital yesterday showed no intrauterine pregnancy, no adnexal mass and no free fluid. Today, at the same laboratory, her hCG is 1 480 IU/L and her serum progesterone is 8 nmol/L (2.5 ng/mL). Her abdomen is soft, with mild right lower quadrant tenderness.",
    vitals: { temperature: "36.6°C oral", pulse: "76/minute", resp: "16/minute", bp: "122/76 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most accurate interpretation of the change in her hCG over 48 hours?",
        options: ["Confirms a viable intrauterine pregnancy", "Excludes an ectopic pregnancy", "Normal rise, ectopic still possible", "Rise too slow for a viable pregnancy", "Shows a failing pregnancy"],
        correct: 2,
        explanation:
          "Her hCG rose from 820 to 1 480 IU/L, an increase of 660 IU/L or 80% in 48 hours. That is above the minimal 2-day rise of 35% used for a viable intrauterine pregnancy in a multisite cohort of women with a pregnancy of unknown location. The same study found that serial hCG alone would have misclassified 16.8% of the ectopic pregnancies, and the authors advised clinical judgment and continued surveillance. A normal rise therefore neither confirms a viable uterine pregnancy nor excludes an ectopic, and it is not too slow or falling.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "morse-hcg-2012",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most accurate interpretation of her serum progesterone of 8 nmol/L?",
        options: ["Confirms a tubal ectopic pregnancy", "Fits a normal early pregnancy", "Makes a tubal pregnancy unlikely", "Makes a uterine site likely", "Makes a viable pregnancy unlikely"],
        correct: 4,
        explanation:
          "Her progesterone of 8 nmol/L is 2.5 ng/mL. In symptomatic women with an inconclusive ultrasound, a single progesterone below cut-offs of 3.2 to 6 ng/mL predicted a nonviable pregnancy with a specificity of 98.4%, raising its probability from 73.2% to 99.2%. A nonviable pregnancy includes both a failing uterine pregnancy and an ectopic, so the value says nothing about where the pregnancy is. It does not confirm or exclude a tubal pregnancy, does not point to a uterine site, and does not fit a normal pregnancy. Like her hCG, it cannot replace locating the pregnancy.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "verhaegen-progesterone-2012",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is well and goes home with return advice. Two days later her hCG is 1 030 IU/L, and a formal transvaginal ultrasound again shows no pregnancy. Her cramps have settled.",
        prompt: "Which of the following is the most accurate interpretation of this new hCG result?",
        options: ["An ectopic is still possible", "Completed miscarriage is confirmed", "Follow-up can now stop", "Methotrexate is now required", "Rise was probably a lab error"],
        correct: 0,
        explanation:
          "Her hCG fell from 1 480 to 1 030 IU/L, about 30% in 48 hours. In 200 women with confirmed ectopic pregnancy, 40% had an initial fall, with a median decline of 27% in 2 days, slower than the mean after a completed miscarriage, and 8% fell as fast as a completed miscarriage. A falling hCG therefore does not confirm a miscarriage or end follow-up, and she is followed until the hCG is undetectable. Methotrexate is not needed while the value falls in a well patient. Nothing suggests a laboratory error, since both results fit known ectopic patterns.",
        keyFeature: { topic: "first-trimester-bleeding", n: 4 },
        source: "silva-hcg-2006",
      },
      {
        id: "q4",
        kind: "single",
        update: "Over the next 3 weeks her hCG falls to undetectable without treatment, and no pregnancy is ever seen. At her final visit she asks where the pregnancy was.",
        prompt: "Which of the following is the most accurate answer to her question about where the pregnancy was?",
        options: ["Its site cannot be known", "Probably in her right tube", "Proven to be a miscarriage", "Shown by her falling hCG", "Within the uterus all along"],
        correct: 0,
        explanation:
          "A pregnancy of unknown location that resolves without treatment and is never seen on ultrasound is classed as a spontaneously resolved pregnancy of unknown location. Neither an intrauterine nor an ectopic pregnancy was visualized, so its site cannot be known, and she should be told so honestly as part of counselling for this loss. Her right-sided cramps do not prove a tubal site, and no scan or tissue proved a uterine miscarriage. The falling hCG shows that the pregnancy failed, not where it was.",
        keyFeature: { topic: "first-trimester-bleeding", n: 6 },
        source: "barnhart-pul-2011",
      },
    ],
    sources: [S.morse, S.verhaegen, S.silva, S.barnhart],
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
        prompt: "Which of the following should be used to assign her gestational age when planning her Rh prophylaxis?",
        options: ["Average of scan and menstrual dates", "Her last menstrual period", "Quantitative hCG level", "Today's crown-rump length", "Uterine size on bimanual examination"],
        correct: 3,
        explanation:
          "SOGC guidance on dating holds that ultrasound measurement in the first trimester, using the crown-rump length, assigns gestational age more accurately than menstrual dates. Her uncertain date and irregular cycles make the menstrual estimate even less reliable. Uterine size on examination is too imprecise to date a pregnancy, and hCG levels vary too widely between pregnancies to give an age. Averaging two estimates keeps the error of the weaker one. Accurate dating matters here because her Rh plan depends on whether she is before or after 12 weeks.",
        keyFeature: { topic: "first-trimester-bleeding", n: 5 },
        source: "sogc-388",
      },
      {
        id: "q3",
        kind: "single",
        update: "She asks whether a test on her blood could show if the fetus is Rh D positive, so that she might avoid Rh immune globulin.",
        prompt: "Which of the following is the most accurate answer to her question about testing the fetal Rh D type?",
        options: ["Amniocentesis is offered instead", "It is not routine in Canada", "It must precede any injection", "Its results are not reliable", "Partner blood is used for it"],
        correct: 1,
        explanation:
          "Fetal RHD genotyping on cell-free DNA in the pregnant person's blood is accurate, with a false-negative rate of up to 0.2%, and some countries use it routinely. In Canada it is sent to international reference laboratories at added cost, and SOGC states that universal testing is not currently the standard of care. The test uses her blood, not her partner's, and it is not a step that must come before Rh immune globulin. Amniocentesis is invasive and is itself an event for which Rh immune globulin is suggested, so it is not used for this purpose.",
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
