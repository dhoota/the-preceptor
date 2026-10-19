// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const firstTrimesterLossMechanicalValve: OralCase = {
  id: "first-trimester-loss-mechanical-valve",
  title: "Cramps and clots at dawn",
  blueprint: "obgyn",
  alsoCovers: ["resus", "cardio"],
  priorityTopic: "first-trimester-bleeding",
  keyFeatures: [
    { topic: "first-trimester-bleeding", n: 1 },
    { topic: "first-trimester-bleeding", n: 2 },
    { topic: "first-trimester-bleeding", n: 3 },
    { topic: "first-trimester-bleeding", n: 4 },
    { topic: "first-trimester-bleeding", n: 5 },
    { topic: "first-trimester-bleeding", n: 6 },
  ],
  summary: "A woman in early pregnancy with a long term medical condition arrives with heavy vaginal bleeding and nearly faints at triage.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 36 year old woman who is 13 weeks pregnant has had heavy vaginal bleeding with clots since early this morning. She nearly fainted at the triage desk.",
  card: {
    vitals: {
      temperature: "36.6°C oral",
      pulse: "118/minute",
      resp: "20/minute",
      bp: "96/58 mmHg",
      o2sat: "98% on room air",
      weight: "64 kg (141 lb)",
    },
    medications: "Warfarin 7.5 mg daily. Folic acid 1 mg daily. Clarithromycin 500 mg twice daily, started 5 days ago.",
    allergies: "Penicillin (hives)",
  },
  findings: [
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "Crampy lower abdominal pain began last night. Heavy bleeding with clots started at 05:00. She has soaked 6 pads in the last 2 hours. At home she passed a large clot with grey tissue in it and flushed it. She felt faint on standing and nearly passed out at the triage desk. No shoulder tip pain. No fever.",
    },
    {
      id: "pregnancy",
      label: "Pregnancy details",
      result:
        "Last menstrual period 13 weeks and 4 days ago. Her cycles are regular and she is certain of the date. A home test was positive 3 weeks ago. She has had no ultrasound yet. A dating scan and a first visit with high risk obstetrics are booked for tomorrow. G2P1. One vaginal birth 7 years ago, before her valve surgery. She does not know her blood group and does not recall an injection after that birth.",
    },
    {
      id: "pmh",
      label: "Past medical history",
      result:
        "Rheumatic mitral stenosis. Mechanical mitral valve replacement 4 years ago. No atrial fibrillation, no stroke and no valve thrombosis since. Her INR target is 2.5 to 3.5. No bleeding disorder.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "Warfarin 7.5 mg daily for 4 years. She has not missed or doubled a dose. Folic acid 1 mg daily since the positive test. A walk in clinic started clarithromycin 500 mg twice daily 5 days ago for sinusitis because of her penicillin allergy. Nobody checked her INR after that. No ASA or NSAIDs.",
    },
    {
      id: "anticoag-clinic",
      label: "Collateral from the anticoagulation clinic",
      result:
        "The clinic record shows an INR of 3.1 sixteen days ago and hemoglobin 128 g/L three weeks ago. The clinic was told of the pregnancy 10 days ago and had flagged her for a switch to low molecular weight heparin at tomorrow's visit.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Grade 2 teacher. Lives with her husband and their 7 year old son. The pregnancy was unplanned but very wanted. No alcohol in pregnancy. Does not smoke or use drugs. Her husband is driving in from work.",
    },
    {
      id: "orthostatics",
      label: "Orthostatic vital signs",
      result: "Lying: pulse 112/minute, BP 100/62 mmHg. Sitting up: pulse 136/minute, BP 82/50 mmHg, and she feels faint and grey.",
    },
    {
      id: "general",
      label: "General, cardiac and abdominal exam",
      result:
        "Pale and clammy. Crisp mechanical valve click. No new murmur. Chest clear. No focal neurologic deficit. Abdomen soft with mild suprapubic tenderness. No guarding or rebound. Capillary refill 3 seconds.",
    },
    {
      id: "speculum",
      label: "Speculum exam",
      result:
        "About 150 mL of blood and clot in the vault. Brisk bleeding from the os. The external os is open about 1 cm with grey pink tissue protruding. The tissue comes out with ring forceps. The tissue floated in saline shows frond like villi.",
    },
    {
      id: "bimanual",
      label: "Bimanual exam",
      result: "Uterus soft, about 10 week size. No cervical motion tenderness. No adnexal mass or tenderness on either side.",
    },
    {
      id: "pocus",
      label: "Bedside transabdominal ultrasound",
      result:
        "Heterogeneous echogenic material in the endometrial cavity with an 18 mm stripe. No gestational sac, yolk sac or fetal pole. No fetal heart activity. No free fluid in the hepatorenal space or the pelvis. Neither ovary is well seen.",
    },
    {
      id: "cbc",
      label: "CBC and coagulation",
      result: "Hemoglobin 84 g/L. Platelets 212 x 10^9/L. INR 4.6. Fibrinogen 2.9 g/L.",
    },
    {
      id: "chem",
      label: "Chemistry and venous gas",
      result: "Quantitative beta hCG 38 400 IU/L. Creatinine 68 µmol/L. Potassium 4.0 mmol/L. Lactate 2.6 mmol/L. Glucose 5.4 mmol/L.",
    },
    {
      id: "type",
      label: "Group and screen",
      result: "Group O, Rh D negative. Antibody screen negative. Two units crossmatched on request.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 120/minute. No atrial fibrillation. No ischemic change.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "Community hospital with a gynecologist on call from home and a small operating room. O negative red cells in the fridge. 4 factor prothrombin complex concentrate in pharmacy. Cardiology by phone through CritiCall at the regional centre 2 hours away.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute bay",
      text:
        "The triage nurse wheels her into the acute bay. Her pad is soaked through and there is a clot on the sheet. She says, 'I am on a blood thinner for my heart valve. Is the baby all right?'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What are your priorities in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Treat this as hemorrhagic shock until proven otherwise. Pulse 118 and an orthostatic drop with presyncope mean significant blood loss.",
        "Monitor, oxygen as needed, two large bore IVs, and send CBC, INR, fibrinogen, group and screen with crossmatch, hCG and lactate.",
        "Warm crystalloid in small boluses and early red cells if she stays unstable.",
        "Bedside ultrasound to look for an intrauterine pregnancy and free fluid.",
        "Early speculum exam to look for tissue in the os, which can drive both bleeding and vagal collapse.",
        "Hold warfarin. Call gynecology now.",
      ],
      rubric: ["ft-p1", "ft-m1", "ft-c1"],
      choices: [
        {
          id: "c-resus",
          label: "I called it shock from the orthostatic change, placed two large bore IVs, sent bloods with a crossmatch and INR, did a bedside ultrasound and a speculum exam at the bedside, held warfarin and paged gynecology.",
          next: "q-history",
          quality: "strong",
          feedback:
            "This is the right frame. A young woman compensates well, so a pulse of 118 and a 30 mmHg drop on sitting are late signs, not reassurance. Running the speculum exam and the ultrasound in parallel with resuscitation finds the cause fastest. Calling gynecology early buys time if she needs evacuation.",
        },
        {
          id: "c-wait-us",
          label: "Her BP is over 90, so I sent bloods and booked a formal pelvic ultrasound before examining her.",
          next: "s-wait-us",
          quality: "partial",
          feedback:
            "The bloods are right, but the BP is a poor guide in a young patient. Her orthostatic vitals show shock. A formal ultrasound can wait. The speculum exam cannot, because tissue in the os may be the source of the bleeding.",
        },
        {
          id: "c-send-us",
          label: "I sent her to the ultrasound department with a porter so we could confirm the diagnosis first.",
          next: "s-send-us",
          quality: "unsafe",
          feedback:
            "An unstable, anticoagulated patient should never leave the resuscitation area unmonitored. Diagnosis comes at the bedside with POCUS and a speculum exam. Send her nowhere until she is stable.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-us",
      phase: "Ten minutes later",
      text:
        "The nurse calls you back. The patient sat up to use the bedpan and became grey and sweaty. Her pulse is 136 and her BP is 80/48 mmHg. There is fresh blood on the sheet. You return to the bedside.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-send-us",
      phase: "In the hallway",
      text:
        "Outside the ultrasound suite the porter calls a code. She has fainted in the wheelchair with a pulse of 48. She is rushed back to the acute bay, where she wakes as her legs are raised. You start again at the bedside.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "While the team works, what history do you need from her, and why does each part matter?",
      seconds: 90,
      modelAnswer: [
        "Bleeding. Onset, pads per hour, clots, passed tissue, syncope.",
        "Pregnancy. Certain last menstrual period, any ultrasound showing an intrauterine pregnancy, pain pattern, shoulder tip pain, ectopic risk factors.",
        "Valve. Type and position, INR target, warfarin dose, last INR, missed or extra doses.",
        "New medications. Antibiotics and other drugs that raise the INR.",
        "Prior pregnancies, blood group and past Rh immune globulin.",
        "Collateral from the anticoagulation clinic for her baseline hemoglobin and INR.",
      ],
      rubric: ["ft-h1", "ft-h2", "ft-h3", "ft-h4", "ft-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination",
      prompt: "Tell me how you examine her and what you are looking for. What is your differential diagnosis?",
      seconds: 75,
      modelAnswer: [
        "Orthostatic vitals, perfusion and pallor.",
        "Listen for a crisp valve click and any new murmur. Look for signs of embolism.",
        "Abdomen for peritonism that would suggest a ruptured ectopic.",
        "Speculum exam. Volume of blood, state of the os, and tissue in the os removed with ring forceps.",
        "Bimanual exam for uterine size, cervical motion tenderness and adnexal mass.",
        "Differential. Incomplete intrauterine pregnancy loss, ectopic pregnancy, cervical shock from tissue in the os, bleeding made worse by a high INR.",
      ],
      rubric: ["ft-p2", "ft-p4", "ft-p5"],
      next: "s-crash",
    },
    {
      kind: "say",
      id: "s-crash",
      phase: "Results and a second faint",
      text:
        "You remove tissue from the os. A minute later she has another 300 mL of clot and her BP falls to 84/50 mmHg with a pulse of 128. Results return. Hemoglobin 84 g/L, down from 128 three weeks ago. INR 4.6. Group O Rh D negative. Bedside ultrasound shows heterogeneous material in the cavity, no gestational sac and no free fluid.",
      next: "q-reverse",
    },
    {
      kind: "question",
      id: "q-reverse",
      phase: "Bleeding on warfarin",
      prompt: "She has a mechanical mitral valve. How do you manage her anticoagulation and her bleeding now?",
      seconds: 90,
      modelAnswer: [
        "This is major bleeding. Hemoglobin has fallen by more than 20 g/L and she is hypotensive.",
        "Transfuse red cells now. O negative until crossmatched blood is ready, because she is Rh D negative and of childbearing age.",
        "Give 4 factor PCC now. 2000 IU for an INR of 3 to 5, or 35 IU/kg, about 2240 IU at 64 kg.",
        "Give IV vitamin K with the PCC, in a dose agreed with cardiology. A 10 mg dose suits only when warfarin will not restart for a week.",
        "Call cardiology. Reversal is worth the small short term risk of valve thrombosis when bleeding is uncontrolled.",
        "Recheck the INR after the PCC. Plan IV unfractionated heparin once bleeding is controlled.",
      ],
      rubric: ["ft-m2", "ft-m3", "ft-c2"],
      choices: [
        {
          id: "c-pcc",
          label: "I called this major bleeding, transfused O negative red cells, gave 2000 IU of 4 factor PCC with IV vitamin K in a dose agreed with cardiology, and rechecked the INR after the infusion.",
          next: "s-settle",
          quality: "strong",
          feedback:
            "Correct. A hemoglobin drop over 20 g/L with hypotension is major bleeding, and PCC is the indicated reversal. It works within minutes, but its effect on the INR fades over about 6 hours as factor VII is cleared. IV vitamin K given at the same time sustains it. Keeping cardiology in the loop on the vitamin K dose protects the plan to restart anticoagulation.",
        },
        {
          id: "c-plasma",
          label: "I ordered 4 units of frozen plasma to bring the INR down and gave crystalloid while it thawed.",
          next: "s-plasma",
          quality: "partial",
          feedback:
            "Plasma will lower the INR, but slowly and with a large volume. It must be thawed and its effect lasts only hours. PCC is faster and more reliable, and it is the Canadian recommendation for major bleeding on a vitamin K antagonist.",
        },
        {
          id: "c-no-reverse",
          label: "I did not reverse her because of the mechanical valve. I held warfarin and gave fluids.",
          next: "s-no-reverse",
          quality: "unsafe",
          feedback:
            "Fear of valve thrombosis is reasonable, but she is bleeding to hypotension with an INR of 4.6. Valve guidelines support PCC for uncontrollable bleeding in mechanical valves. A few hours of normal clotting is a small risk next to hemorrhagic death.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-plasma",
      phase: "Forty minutes later",
      text:
        "The first two units of plasma are still thawing. She has bled through two more pads and her pulse is 132. The pharmacist asks whether you want the PCC that is on the shelf. You give it.",
      next: "s-settle",
    },
    {
      kind: "say",
      id: "s-no-reverse",
      phase: "Twenty minutes later",
      text:
        "Her BP is 78/44 mmHg after 2 L of crystalloid. The gynecologist arrives and says she cannot take the patient to the operating room with an INR of 4.6. The cardiologist on the phone advises PCC now. You give it.",
      next: "s-settle",
    },
    {
      kind: "say",
      id: "s-settle",
      phase: "An hour in",
      text:
        "After two units of red cells and the PCC, her pulse is 98 and her BP is 108/66 mmHg. The repeat INR is 1.4. Bleeding has slowed to a trickle. The gynecologist is on her way in. The nurse holds up the specimen pot and asks whether to send the tissue or discard it, since it is clearly a miscarriage.",
      next: "q-tissue",
    },
    {
      kind: "question",
      id: "q-tissue",
      phase: "Is this a miscarriage?",
      prompt: "No ultrasound has ever shown an intrauterine pregnancy. Have you excluded an ectopic pregnancy? What do you tell the nurse?",
      seconds: 75,
      modelAnswer: [
        "Not with certainty. No scan has confirmed an intrauterine pregnancy.",
        "An hCG level cannot locate a pregnancy. A transabdominal scan without a yolk sac or fetal pole does not confirm an intrauterine pregnancy.",
        "Villi floating in saline make an intrauterine loss very likely, but pathology must confirm them.",
        "Send all tissue to pathology. Never discard it.",
        "If pathology shows no villi, manage as a pregnancy of unknown location with serial hCG and gynecology follow up.",
      ],
      rubric: ["ft-p3", "ft-c3"],
      choices: [
        {
          id: "c-send",
          label: "I said ectopic is not excluded until villi are confirmed. I sent all the tissue to pathology and asked gynecology to follow the hCG if no villi are found.",
          next: "q-rh",
          quality: "strong",
          feedback:
            "Right. Without a documented intrauterine pregnancy this is still technically a pregnancy of unknown location. Tissue that looks like villi is reassuring, but a decidual cast can fool you. Pathology closes the loop.",
        },
        {
          id: "c-discard",
          label: "I agreed it was a miscarriage because she passed tissue, and told the nurse the specimen was not needed.",
          next: "s-discard",
          quality: "unsafe",
          feedback:
            "Passing tissue does not prove an intrauterine pregnancy. A decidual cast from an ectopic can look the same. Without a prior scan or pathology, an ectopic pregnancy has not been excluded and the specimen is your only proof.",
        },
        {
          id: "c-hcg-only",
          label: "I sent the tissue but told her that with an hCG of 38 400 and nothing in the tubes on ultrasound, ectopic is ruled out.",
          next: "s-hcg-only",
          quality: "partial",
          feedback:
            "Sending the tissue is right. The reasoning is not. No hCG level rules out an ectopic, and the adnexa were not even seen on a transabdominal scan. The diagnosis rests on villi on pathology or a documented intrauterine pregnancy.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-discard",
      phase: "The gynecologist arrives",
      text:
        "The gynecologist asks for the specimen. The nurse retrieves it from the dirty utility room just before it is discarded. The gynecologist says that without pathology she cannot call this an intrauterine loss.",
      next: "q-rh",
    },
    {
      kind: "say",
      id: "s-hcg-only",
      phase: "The gynecologist arrives",
      text:
        "The gynecologist points out that neither ovary was seen on the transabdominal scan and that hCG does not locate a pregnancy. She agrees to wait for pathology before calling it an intrauterine loss.",
      next: "q-rh",
    },
    {
      kind: "question",
      id: "q-rh",
      phase: "Blood group",
      prompt: "She is Rh D negative with a negative antibody screen. What do you do, and how?",
      seconds: 60,
      modelAnswer: [
        "She is 13 weeks and 4 days by a certain date, past 12 weeks.",
        "SOGC suggests Rh immune globulin 300 mcg after a pregnancy loss beyond 12 weeks.",
        "Give it within 72 hours.",
        "The Canadian product can be given IV or IM, and both routes work. Choose IV while she is anticoagulated, to avoid a muscle hematoma.",
        "Document the dose and tell her why it matters for future pregnancies.",
      ],
      rubric: ["ft-m5"],
      next: "s-husband",
    },
    {
      kind: "say",
      id: "s-husband",
      phase: "Her husband arrives",
      text:
        "Her husband arrives. She is crying. She asks, 'Did the warfarin or the antibiotic do this? Should I have stopped it when I found out? Can I ever have another baby with this valve?'",
      next: "q-counsel",
    },
    {
      kind: "question",
      id: "q-counsel",
      phase: "Counselling",
      prompt: "Respond to her. Then tell me how you will handle the antibiotic that raised her INR.",
      seconds: 90,
      modelAnswer: [
        "Sit down. Name the loss. Use plain words and allow silence.",
        "Most early losses happen because the pregnancy was not developing normally. Stopping warfarin on her own would have put her at risk of a valve clot.",
        "Be honest that warfarin does carry a higher miscarriage risk, and that a plan made before the next pregnancy can lower it.",
        "Future pregnancy is possible. Arrange counselling with cardiology and high risk obstetrics before she tries again.",
        "Offer bereavement and mental health supports and a note for time off work.",
        "Tell the walk in clinic and the anticoagulation clinic about the clarithromycin interaction. Stop the macrolide and choose a non interacting antibiotic if one is still needed.",
      ],
      rubric: ["ft-c4", "ft-c5", "ft-c6"],
      choices: [
        {
          id: "c-counsel",
          label: "I told her the loss was not her fault and that stopping warfarin herself would have been dangerous. I offered grief support and a cardiology and obstetrics visit before any future pregnancy. I called the walk in clinic and anticoagulation clinic about the interaction.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "This is compassionate and honest. It answers the question she asked, plans for the future and closes the safety loop. A drug interaction that sent a patient to resuscitation must be reported back to the prescriber.",
        },
        {
          id: "c-blame-drug",
          label: "I told her the clarithromycin probably caused the miscarriage and that the walk in clinic made a mistake.",
          next: "s-blame",
          quality: "partial",
          feedback:
            "A high INR worsened the bleeding, but it almost certainly did not cause the pregnancy to fail. Blaming a colleague in front of the patient is speculative and unprofessional. Report the interaction through the proper channel and give her accurate information.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "A little later",
      text:
        "Her husband asks for the walk in physician's name so he can file a complaint. The nurse asks you to clarify what you meant. You explain that the bleeding was worse because of the high INR, but the pregnancy loss itself is very unlikely to be due to the antibiotic.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The gynecologist is here. Summarize your handover and the plan for the next 48 hours.",
      seconds: 75,
      modelAnswer: [
        "Admit under gynecology with cardiology input, in a monitored bed.",
        "Uterine aspiration now that the INR is 1.4, for retained tissue and ongoing bleeding.",
        "Restart anticoagulation with IV unfractionated heparin once hemostasis is secure, then warfarin, as cardiology advises.",
        "Repeat hemoglobin and INR. Hold the clarithromycin.",
        "Pathology result to the gynecologist. Serial hCG if no villi.",
        "Rh immune globulin given IV. Early pregnancy clinic and grief support follow up.",
      ],
      rubric: ["ft-m4", "ft-m6", "ft-d1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "Uterine aspiration is done in the operating room that afternoon. Pathology later confirms chorionic villi. She restarts heparin that evening and goes home on warfarin 4 days later with a booked visit with cardiology and high risk obstetrics. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ft-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the valve type and position, INR target, warfarin dose, last INR and any missed or extra doses.",
      points: 2,
      teaching: "A mechanical mitral valve carries a higher thrombosis risk than an aortic one, with an INR target of 3.0. That shapes how far and how fast you reverse.",
      source: "acc-valve",
    },
    {
      id: "ft-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about new medications and identifies the clarithromycin started 5 days ago as a likely cause of the high INR.",
      points: 2,
      teaching: "Macrolide antibiotics potentiate warfarin. A stable patient with a new high INR almost always has a new drug, a missed or doubled dose, or an illness.",
      source: "ageno",
    },
    {
      id: "ft-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks the last menstrual period, whether any ultrasound has shown an intrauterine pregnancy, and about shoulder tip pain and ectopic risk factors.",
      points: 2,
      teaching: "Without a documented intrauterine pregnancy, every bleeding pregnant patient has a possible ectopic. A certain date also sets the Rh immune globulin plan.",
      source: "sogc-414",
    },
    {
      id: "ft-h4",
      competency: "assessment",
      criterion: "history",
      text: "Quantifies the bleeding with pads per hour, clots and passed tissue, and asks about syncope and presyncope.",
      points: 2,
      teaching: "Soaking through pads quickly, passing tissue and presyncope point to significant blood loss. Heavy bleeding makes expectant management a poor choice and points to uterine evacuation.",
      source: "sogc-460",
    },
    {
      id: "ft-h5",
      competency: "assessment",
      criterion: "history",
      text: "Asks about prior pregnancies, her blood group and any past Rh immune globulin.",
      points: 1,
      teaching: "A prior birth without prophylaxis raises the chance she is already sensitized. The antibody screen answers that before you give Rh immune globulin.",
      source: "sogc-448",
    },
    {
      id: "ft-p1",
      competency: "resuscitation",
      criterion: "physical",
      text: "Recognizes early hemorrhagic shock from tachycardia and orthostatic change even though her lying BP is above 90.",
      points: 2,
      critical: true,
      teaching: "Young patients hold their BP until late. A pulse rise and a drop in BP on sitting, with presyncope, signal major blood loss.",
      source: "sogc-460",
    },
    {
      id: "ft-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Performs an early speculum exam, removes tissue from the os with ring forceps, then does a bimanual exam.",
      points: 3,
      critical: true,
      teaching: "The speculum exam shows whether the os is open and tissue is present, which defines an incomplete loss. Tissue lodged in the os drives bleeding and vagal collapse, so remove it. The bimanual exam looks for an adnexal mass.",
      source: "sogc-460",
    },
    {
      id: "ft-p3",
      competency: "assessment",
      criterion: "physical",
      text: "States that neither the hCG level nor a transabdominal scan without a yolk sac or fetal pole excludes an ectopic pregnancy.",
      points: 2,
      teaching: "An intrauterine pregnancy needs a yolk sac or fetal pole in a sac to be confirmed. hCG does not locate a pregnancy. Until then it is a pregnancy of unknown location.",
      source: "sogc-414",
    },
    {
      id: "ft-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential of incomplete intrauterine loss, ectopic pregnancy, cervical shock and bleeding worsened by over anticoagulation.",
      points: 1,
      teaching: "In early pregnancy bleeding with shock, think of the source, the location of the pregnancy and the coagulation state together.",
      source: "sogc-414",
    },
    {
      id: "ft-p5",
      competency: "assessment",
      criterion: "physical",
      text: "Listens for a crisp valve click and a new murmur and looks for signs of embolism.",
      points: 1,
      teaching: "A muffled click or new murmur suggests valve thrombosis. Document the valve exam before you reverse anticoagulation.",
      source: "acc-valve",
    },
    {
      id: "ft-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Places two large bore IVs, sends a crossmatch, and transfuses O negative then crossmatched red cells for ongoing bleeding with shock.",
      points: 2,
      teaching: "Shock from ongoing bleeding needs red cells, not just crystalloid. A fall in hemoglobin of 20 g/L or a need for 2 or more units defines major bleeding, which justifies PCC. Use Rh D negative cells in a woman of childbearing age until crossmatched blood is ready.",
      source: "nac-pcc",
    },
    {
      id: "ft-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives 4 factor PCC for major bleeding with an INR of 4.6, 2000 IU or 35 IU/kg, and rechecks the INR after the infusion.",
      points: 3,
      critical: true,
      teaching: "A hemoglobin fall of 20 g/L or more makes this major bleeding. Canadian guidance doses PCC at 2000 IU for an INR of 3 to 5, or 35 IU/kg for an INR of 4 to 6.",
      source: "nac-pcc",
    },
    {
      id: "ft-m3",
      competency: "management",
      criterion: "management",
      text: "Gives IV vitamin K with the dose agreed with cardiology, knowing 10 mg suits only when warfarin will not restart within a week.",
      points: 1,
      teaching: "In mechanical valves with uncontrollable bleeding, PCC is reasonable and adjunctive IV vitamin K is reasonable when warfarin will not resume for 7 days. Lower doses keep restarting simple.",
      source: "acc-valve",
    },
    {
      id: "ft-m4",
      competency: "management",
      criterion: "management",
      text: "Plans IV unfractionated heparin once hemostasis is secure, then warfarin, with cardiology.",
      points: 2,
      teaching: "A mechanical mitral valve needs bridging while the INR is low. IV unfractionated heparin can be stopped quickly if bleeding recurs.",
      source: "acc-valve",
    },
    {
      id: "ft-m5",
      competency: "management",
      criterion: "management",
      text: "Gives Rh immune globulin 300 mcg within 72 hours, choosing the IV route while she is anticoagulated.",
      points: 2,
      critical: true,
      teaching: "SOGC suggests 300 mcg after a pregnancy loss beyond 12 weeks in a non sensitized Rh D negative patient. Before 8 weeks it is not given, and between 8 and 12 weeks it is optional. It can be given IV or IM, and the routes work equally well.",
      source: "sogc-448",
    },
    {
      id: "ft-m6",
      competency: "management",
      criterion: "management",
      text: "Arranges uterine aspiration by gynecology once the INR is corrected, for retained tissue with ongoing bleeding.",
      points: 2,
      teaching: "Expectant management is a first choice only without heavy bleeding, significant pain or infection. Suction aspiration is the recommended surgical method.",
      source: "sogc-460",
    },
    {
      id: "ft-c1",
      competency: "leadership",
      criterion: "process",
      text: "Calls gynecology early and runs resuscitation, history and bedside tests in parallel without moving her from the resuscitation area.",
      points: 2,
      teaching: "An unstable patient stays where she can be monitored and treated. Parallel work by a directed team saves minutes that matter.",
      source: "sogc-460",
    },
    {
      id: "ft-c2",
      competency: "communication",
      criterion: "process",
      text: "Involves cardiology by phone before or during reversal and reassesses vitals and INR after treatment.",
      points: 1,
      teaching: "Reversal in a mechanical valve is a shared decision. A post infusion INR confirms the effect and guides any further dose.",
      source: "nac-pcc",
    },
    {
      id: "ft-c3",
      competency: "disposition",
      criterion: "process",
      text: "Sends all tissue to pathology and arranges serial hCG if no villi are confirmed.",
      points: 2,
      teaching: "Chorionic villi on pathology confirm an intrauterine pregnancy. Without them, follow the hCG to resolution as a pregnancy of unknown location.",
      source: "sogc-414",
    },
    {
      id: "ft-c4",
      competency: "communication",
      criterion: "process",
      text: "Tells her the loss was not caused by anything she did and offers bereavement and mental health support.",
      points: 2,
      teaching: "Early pregnancy loss can be traumatic. SOGC advises screening for depression after a loss and offering bereavement and mental health supports.",
      source: "sogc-460",
    },
    {
      id: "ft-c5",
      competency: "professionalism",
      criterion: "process",
      text: "Reports the warfarin and clarithromycin interaction to the prescriber and the anticoagulation clinic without blaming a colleague in front of the patient.",
      points: 1,
      teaching: "Closing the loop on a drug interaction protects the next patient. Disclosure should be factual and go through proper channels.",
      source: "ageno",
    },
    {
      id: "ft-c6",
      competency: "disposition",
      criterion: "process",
      text: "Arranges pre pregnancy counselling with cardiology and high risk obstetrics before any future pregnancy.",
      points: 2,
      teaching: "Women with a mechanical valve need a plan before conception. A warfarin dose above 5 mg a day favours heparin in the first trimester.",
      source: "acc-valve",
    },
    {
      id: "ft-d1",
      competency: "disposition",
      criterion: "process",
      text: "Gives a structured handover and admits her under gynecology with cardiology input in a monitored bed.",
      points: 1,
      teaching: "A clear handover covers the bleeding, the reversal given, the heparin plan, pathology and Rh status so nothing is lost overnight.",
      source: "sogc-460",
    },
  ],
  sources: [
    {
      id: "sogc-460",
      citation:
        "Pymar H, Waddington A, Prager S, Shorter J, Thomas J. Guideline No. 460: diagnosis and management of intrauterine early pregnancy loss. J Obstet Gynaecol Can. 2025.",
      url: "https://pubmed.ncbi.nlm.nih.gov/40349974/",
    },
    {
      id: "sogc-414",
      citation:
        "Po L, Thomas J, Mills K, Zakhari A, Tulandi T, et al. Guideline No. 414: management of pregnancy of unknown location and tubal and nontubal ectopic pregnancies. J Obstet Gynaecol Can. 2021.",
      url: "https://pubmed.ncbi.nlm.nih.gov/33453378/",
    },
    {
      id: "sogc-448",
      citation:
        "Fung-Kee-Fung K, Wong K, Walsh J, Hamel C, Clarke G. Guideline No. 448: prevention of Rh D alloimmunization. J Obstet Gynaecol Can. 2024.",
      url: "https://pubmed.ncbi.nlm.nih.gov/38553007/",
    },
    {
      id: "acc-valve",
      citation:
        "Otto CM, Nishimura RA, Bonow RO, et al. 2020 ACC/AHA guideline for the management of patients with valvular heart disease. J Am Coll Cardiol. 2021.",
      url: "https://pubmed.ncbi.nlm.nih.gov/33342586/",
    },
    {
      id: "nac-pcc",
      citation:
        "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022.",
      url: "https://profedu.blood.ca/fr/media/5843/download",
    },
    {
      id: "ageno",
      citation:
        "Ageno W, Gallus AS, Wittkowsky A, Crowther M, Hylek EM, Palareti G. Oral anticoagulant therapy. Antithrombotic Therapy and Prevention of Thrombosis, 9th ed. American College of Chest Physicians evidence based clinical practice guidelines. Chest. 2012.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3278051/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
