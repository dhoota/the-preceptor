// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const postpartumHemorrhage: OralCase = {
  id: "postpartum-hemorrhage",
  title: "Bleeding after a home birth",
  blueprint: "obgyn",
  alsoCovers: ["resus"],
  summary: "A woman arrives by ambulance with ongoing bleeding an hour after a planned home birth.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician at a 250 bed community hospital in Ontario. There is a labour and delivery unit upstairs, but the only obstetrician on call is in the middle of a cesarean section. " +
    "The hospital has a massive hemorrhage protocol, fibrinogen concentrate and a uterine tamponade balloon in the ED. There is no interventional radiology on site. " +
    "Jasmine Okafor is 34 years old. She gave birth to her third baby at home 55 minutes ago with a registered midwife. The placenta delivered 25 minutes after the baby. " +
    "Triage vitals: heart rate 132, blood pressure 78/44, respiratory rate 26, SpO2 97 percent on room air, temperature 37.6. CTAS 1. " +
    "The midwife says: 'She bled about 1200 mL at home and it has not stopped. I gave oxytocin 10 units IM after the baby and rubbed the uterus. The baby is with her partner in the waiting room.'",
  findings: [
    {
      id: "vitals",
      label: "Repeat vitals",
      result: "Heart rate 136. Blood pressure 74/40. Respiratory rate 28. SpO2 96 percent. She is restless and says she feels cold.",
    },
    {
      id: "abdomen",
      label: "Abdominal exam",
      result:
        "The fundus is soft and boggy, 3 cm above the umbilicus. It firms briefly with massage and then relaxes. The bladder is palpable above the pubic symphysis.",
    },
    {
      id: "perineum",
      label: "Perineal and vaginal exam",
      result:
        "Steady flow of dark and bright red blood with clots from the cervical os. A small second degree perineal tear is oozing slightly. No large vaginal wall laceration seen. No mass at the introitus.",
    },
    {
      id: "placenta",
      label: "Placenta brought by the midwife",
      result: "The midwife brought the placenta in a bag. On inspection a cotyledon appears to be missing from the maternal surface.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "The uterus is enlarged with a thickened, heterogeneous echogenic area in the cavity measuring 4 by 3 cm. No free fluid in the abdomen. IVC small and collapsing.",
    },
    {
      id: "history",
      label: "Past history and medications",
      result:
        "Asthma since childhood. Uses salbutamol a few times a month. One ICU admission for asthma at age 16. " +
        "Blood pressure normal throughout pregnancy. Two previous vaginal births with no complications. Iron supplements. No allergies.",
    },
    {
      id: "cbc",
      label: "CBC and coagulation",
      result: "Hemoglobin 78 g/L. Platelets 142 x 10^9/L. INR 1.4. PTT 36 seconds. Fibrinogen 1.6 g/L.",
    },
    {
      id: "gas",
      label: "Venous gas, lactate and ionized calcium",
      result: "pH 7.26. Base deficit 9 mmol/L. Lactate 5.2 mmol/L. Ionized calcium 0.98 mmol/L. Potassium 4.2 mmol/L.",
    },
    {
      id: "group",
      label: "Group and screen",
      result: "Group A, Rh D positive. Antibody screen negative.",
    },
    {
      id: "baby",
      label: "Newborn",
      result:
        "The baby was born at 39 weeks. The midwife reports good tone and cry at birth. The baby has not yet been checked by anyone at the hospital.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "She is pale and restless. Blood is pooling on the stretcher pad. The midwife is massaging the uterus.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What do you do in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Call for help. Activate the obstetric hemorrhage response and the massive hemorrhage protocol.",
        "Two large bore IVs. Crossmatch, CBC, INR, fibrinogen, gas with ionized calcium.",
        "Start uncrossmatched red cells now. She lost 1200 mL at home, is still bleeding and has a shock index near 1.7. Her true loss is likely over 1500 mL.",
        "Uterine massage and bimanual compression. Empty the bladder with a Foley catheter.",
        "Oxytocin 5 IU IV given slowly, then an infusion of 20 to 40 IU in 1 L crystalloid. Tranexamic acid 1 g IV over 10 minutes.",
        "Assign someone to assess the newborn.",
      ],
      rubric: ["pph-r1", "pph-r2", "pph-m1", "pph-l1"],
      choices: [
        {
          id: "c-bundle",
          label: "I called for help, activated the massive hemorrhage protocol, started blood, did bimanual compression, placed a Foley, ran oxytocin and gave tranexamic acid 1 g IV.",
          next: "q-cause",
          quality: "strong",
          feedback:
            "This is the bundle the examiner wanted. Her loss is likely over 1500 mL and she is hypotensive. This is severe hemorrhage with shock. " +
            "Uterotonic, compression, blood and tranexamic acid all go in parallel. A full bladder prevents the uterus from contracting.",
        },
        {
          id: "c-crystalloid",
          label: "I gave 2 L of saline and asked the midwife to keep massaging while I waited for the obstetrician.",
          next: "s-crystalloid",
          quality: "partial",
          feedback:
            "Massage helps, but waiting for a busy obstetrician loses time. Saline dilutes clotting factors that are already falling. " +
            "The examiner wanted blood, a uterotonic, bladder drainage and tranexamic acid started by you now.",
        },
        {
          id: "c-pack",
          label: "I packed the vagina with gauze to stop the bleeding and waited for her pressure to settle.",
          next: "s-pack",
          quality: "unsafe",
          feedback:
            "Vaginal packing does not treat atony. The uterus keeps bleeding behind the pack and the loss is hidden. " +
            "The examiner wanted uterotonics, bimanual compression, blood and a search for the cause.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-crystalloid",
      phase: "Fifteen minutes later",
      text:
        "Her pressure is 70/38. Her hemoglobin on the gas is now 66 g/L. The charge nurse activates the massive hemorrhage protocol and starts an oxytocin infusion. The bladder is drained of 600 mL of urine.",
      next: "q-cause",
    },
    {
      kind: "say",
      id: "s-pack",
      phase: "Ten minutes later",
      text:
        "The pack is soaked. Her heart rate is 148 and she is drowsy. The fundus is now at the xiphoid. The nurse removes the pack, drains the bladder and starts oxytocin at your request.",
      next: "q-cause",
    },
    {
      kind: "question",
      id: "q-cause",
      phase: "Finding the cause",
      prompt: "Walk me through the causes you are looking for and what you have found so far.",
      seconds: 60,
      modelAnswer: [
        "The four Ts: tone, tissue, trauma, thrombin.",
        "Tone: boggy uterus that relaxes after massage. Atony is the main cause.",
        "Tissue: missing cotyledon and echogenic material in the cavity suggest retained placenta.",
        "Trauma: small perineal tear only. Check cervix and vaginal walls. Rule out uterine inversion.",
        "Thrombin: fibrinogen 1.6 g/L and rising INR show early consumptive and dilutional coagulopathy.",
      ],
      rubric: ["pph-a1", "pph-a2"],
      next: "q-second-line",
    },
    {
      kind: "question",
      id: "q-second-line",
      phase: "Second line uterotonic",
      prompt: "Oxytocin is running and the uterus is still soft. Which second line agent do you choose, at what dose, and what are you avoiding?",
      seconds: 75,
      modelAnswer: [
        "Ergonovine 0.25 mg IM. She is normotensive with no preeclampsia. May repeat.",
        "Avoid carboprost. She has asthma and it can cause severe bronchospasm.",
        "Sublingual or oral misoprostol, for example 400 mcg, as an adjunct only. SOGC advises against the rectal route.",
        "Continue oxytocin infusion. Repeat tranexamic acid 1 g after 30 minutes if bleeding continues.",
      ],
      rubric: ["pph-m2", "pph-m3"],
      choices: [
        {
          id: "c-ergo",
          label: "I gave ergonovine 0.25 mg IM, added misoprostol 400 mcg sublingual and avoided carboprost because of her asthma.",
          next: "q-products",
          quality: "strong",
          feedback:
            "Correct. Ergonovine is a potent second line agent when there is no hypertension. " +
            "Carboprost should be avoided in asthma because it is a prostaglandin F2 alpha and causes bronchospasm. Sublingual misoprostol is a reasonable adjunct.",
        },
        {
          id: "c-carbo",
          label: "I gave carboprost 250 mcg IM because it is the strongest second line drug.",
          next: "s-carbo",
          quality: "unsafe",
          feedback:
            "Carboprost is effective, but she has a significant asthma history with a prior ICU admission. " +
            "It can precipitate severe bronchospasm. The examiner wanted ergonovine 0.25 mg IM in this normotensive patient. Where carboprost is safe, the dose is 250 mcg IM every 15 minutes to a maximum of 2 mg, which is 8 doses.",
        },
        {
          id: "c-rectal",
          label: "I gave misoprostol 1000 mcg rectally and nothing else.",
          next: "s-rectal",
          quality: "partial",
          feedback:
            "Misoprostol is an adjunct, not a rescue agent. The rectal route has the slowest onset and lowest levels. " +
            "SOGC advises against the rectal route. Use sublingual or oral misoprostol only as an adjunct to an injectable second line agent such as ergonovine.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-carbo",
      phase: "Eight minutes later",
      text:
        "She becomes short of breath and wheezy. SpO2 falls to 86 percent. You give salbutamol and oxygen and her saturation recovers to 94 percent. The uterus is still soft. You give ergonovine 0.25 mg IM.",
      next: "q-products",
    },
    {
      kind: "say",
      id: "s-rectal",
      phase: "Fifteen minutes later",
      text: "There is no change in uterine tone. Another 400 mL of blood is in the pad. The nurse asks whether you want the ergonovine from the obstetric kit. You give 0.25 mg IM.",
      next: "q-products",
    },
    {
      kind: "question",
      id: "q-products",
      phase: "Blood products",
      prompt: "Her labs show hemoglobin 78, fibrinogen 1.6 g/L, INR 1.4 and ionized calcium 0.98. What products do you give and what are your targets?",
      seconds: 75,
      modelAnswer: [
        "Continue the protocol with red cells, plasma and platelets near a 1 to 1 to 1 or 2 to 1 to 1 ratio.",
        "Fibrinogen is below 2 g/L. Give fibrinogen concentrate 4 g or cryoprecipitate about 10 units. Target above 2 g/L.",
        "Calcium chloride 1 g IV for ionized calcium below 1.1 mmol/L.",
        "Warm products and the patient. Repeat labs every 30 to 60 minutes.",
        "Second dose of tranexamic acid 1 g IV if bleeding continues 30 minutes after the first.",
      ],
      rubric: ["pph-r3", "pph-r4"],
      choices: [
        {
          id: "c-fibrinogen",
          label: "I kept the protocol running, gave fibrinogen concentrate 4 g and calcium chloride 1 g, and targeted fibrinogen above 2 g/L.",
          next: "s-escalate",
          quality: "strong",
          feedback:
            "Good. In postpartum hemorrhage fibrinogen falls early and a level under 2 g/L predicts severe bleeding. " +
            "Calcium is a clotting factor and falls with citrate. Early replacement of both matters as much as red cells.",
        },
        {
          id: "c-rbc-only",
          label: "I gave more red cells and waited for the INR to exceed 1.5 before giving plasma.",
          next: "s-rbc-only",
          quality: "partial",
          feedback:
            "Red cells alone will not stop bleeding in a patient losing clotting factors. " +
            "The fibrinogen is already under 2 g/L, which SOGC identifies as a trigger to replace. Balanced products and fibrinogen were needed now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-rbc-only",
      phase: "Twenty minutes later",
      text: "Repeat fibrinogen is 1.1 g/L and INR is 1.8. She is oozing from her IV sites. The blood bank calls to suggest fibrinogen concentrate. You give 4 g and calcium chloride 1 g.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "Thirty minutes after arrival",
      text:
        "The uterus is firmer with ergonovine but relaxes again. Bleeding is slower but steady. Her pressure is 88/52 on the fourth unit of red cells. " +
        "The obstetrician calls from the OR. She is closing and will be 25 minutes. Your ultrasound again shows material in the cavity.",
      next: "q-tissue",
    },
    {
      kind: "question",
      id: "q-tissue",
      phase: "Mechanical control",
      prompt: "What will you do while you wait for the obstetrician?",
      seconds: 90,
      modelAnswer: [
        "Retained tissue keeps the uterus from contracting. Explore the uterine cavity manually and remove clots and tissue.",
        "Give analgesia or procedural sedation, for example fentanyl and ketamine in small doses, with an airway plan.",
        "Give a dose of IV antibiotic such as cefazolin 2 g after manual exploration.",
        "Continue bimanual compression afterwards.",
        "Place a uterine tamponade balloon filled with 300 to 500 mL of sterile fluid if bleeding persists.",
      ],
      rubric: ["pph-m4", "pph-m5"],
      choices: [
        {
          id: "c-explore",
          label: "I gave analgesia, explored the cavity by hand and removed tissue and clots, gave cefazolin, then placed a tamponade balloon when oozing continued.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Removing retained tissue lets the uterus contract. " +
            "The tamponade balloon is effective for ongoing bleeding and bridges to definitive care. Prophylactic antibiotics are reasonable after manual exploration.",
        },
        {
          id: "c-balloon",
          label: "I placed the tamponade balloon without exploring the cavity.",
          next: "s-balloon",
          quality: "partial",
          feedback:
            "A balloon helps atony but works poorly around retained placenta. " +
            "You had evidence of retained tissue from the placenta and the ultrasound. The cavity should be cleared first.",
        },
        {
          id: "c-wait",
          label: "I kept giving uterotonics and waited for the obstetrician.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "Uterotonics are failing because tissue is retained. Waiting 25 minutes with ongoing loss risks cardiac arrest. " +
            "The examiner wanted manual exploration and tamponade from the emergency physician.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-balloon",
      phase: "Ten minutes later",
      text: "Blood continues to drain through the balloon port. The obstetrician arrives, deflates the balloon and removes a 4 cm piece of placenta by hand. The bleeding slows.",
      next: "q-dispo",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Twenty minutes later",
      text:
        "Her pressure falls to 64/30 and she is barely rousable. The obstetrician arrives, removes a large piece of placenta by hand and places a balloon. She has now needed 8 units of red cells.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Definitive care",
      prompt: "The bleeding has slowed but not stopped. Your hospital has no interventional radiology. What are the options and who do you call?",
      seconds: 60,
      modelAnswer: [
        "Obstetrics takes her to the OR for examination under anesthesia and surgical control if bleeding continues.",
        "Surgical options include compression sutures, vessel ligation and hysterectomy as a life saving step.",
        "If she stabilizes with the balloon, arrange transfer through CritiCall Ontario to a centre with interventional radiology.",
        "Do not transfer an unstable patient. Surgery is the right step if she cannot be stabilized.",
        "ICU bed after the OR.",
      ],
      rubric: ["pph-d1", "pph-c1"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family and newborn",
      prompt: "Her partner is in the waiting room with the newborn and asks what is happening. What do you do and say?",
      seconds: 60,
      modelAnswer: [
        "Make sure the newborn has been assessed: temperature, feeding, glucose if indicated and a plan for care.",
        "Give an honest update in plain words: heavy bleeding after birth, blood transfusions and a procedure to stop it.",
        "Explain that surgery may be needed and there is a small chance of removing the uterus to save her life.",
        "Offer skin to skin or feeding support with the midwife if the mother is too unwell.",
        "Invite questions and arrange a social worker.",
      ],
      rubric: ["pph-c2", "pph-p1"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "After the case",
      prompt: "She goes to the OR and does well. What follow up care and team issues do you address before your shift ends?",
      seconds: 60,
      modelAnswer: [
        "Team debrief. Review protocol activation time, product use and communication with the midwife.",
        "Postpartum care: VTE prophylaxis once bleeding is controlled, iron, and watch for Sheehan syndrome if she cannot breastfeed.",
        "Rh status is positive so no Rh immune globulin is needed.",
        "Complete documentation with times, drugs and doses, product totals and estimated blood loss.",
        "Thank the midwife and include her in the debrief.",
      ],
      rubric: ["pph-l2", "pph-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "In the OR the obstetrician removes the last fragments of placenta and the uterus contracts well. She needed 6 units of red cells in total and goes to the ICU for one night. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pph-a1",
      competency: "assessment",
      text: "Systematically assesses the four Ts: tone, tissue, trauma and thrombin.",
      points: 2,
      teaching: "Most postpartum hemorrhage is atony, but retained tissue, trauma and coagulopathy often coexist. Look for all four.",
      source: "sogc-pph",
    },
    {
      id: "pph-a2",
      competency: "assessment",
      text: "Identifies retained placenta from the missing cotyledon and the echogenic material on bedside ultrasound.",
      points: 2,
      teaching: "Always inspect the placenta. Retained tissue stops the uterus from contracting and makes uterotonics fail.",
      source: "sogc-pph",
    },
    {
      id: "pph-r1",
      competency: "resuscitation",
      text: "Recognizes severe hemorrhage with shock and activates the massive hemorrhage protocol with early red cells.",
      points: 3,
      critical: true,
      teaching: "More than 1500 mL loss with systolic under 80 is severe hemorrhage. It needs full resuscitation, not saline and observation.",
      source: "sogc-pph",
    },
    {
      id: "pph-r2",
      competency: "resuscitation",
      text: "Empties the bladder with a Foley catheter and performs uterine massage or bimanual compression.",
      points: 1,
      teaching: "A full bladder prevents uterine contraction. Bimanual compression is a bridge that anyone can start.",
      source: "sogc-pph",
    },
    {
      id: "pph-r3",
      competency: "resuscitation",
      text: "Replaces fibrinogen to a level above 2 g/L with fibrinogen concentrate or cryoprecipitate.",
      points: 2,
      critical: true,
      teaching: "Fibrinogen under 2 g/L is associated with severe postpartum hemorrhage. Hypofibrinogenemia is the most common coagulopathy.",
      source: "sogc-pph",
    },
    {
      id: "pph-r4",
      competency: "resuscitation",
      text: "Gives calcium chloride 1 g IV for ionized calcium below 1.1 mmol/L and uses balanced product ratios.",
      points: 1,
      teaching: "Ionized calcium is the best measure in hemorrhage. Calcium chloride has three times the elemental calcium of gluconate.",
      source: "sogc-pph",
    },
    {
      id: "pph-m1",
      competency: "management",
      text: "Gives oxytocin, 5 IU IV slowly then an infusion of 20 to 40 IU in 1 L, and tranexamic acid 1 g IV early.",
      points: 3,
      critical: true,
      teaching: "Oxytocin is first line. Tranexamic acid 1 g IV within 3 hours of birth reduces death from bleeding, with a second dose after 30 minutes if needed.",
      source: "woman",
    },
    {
      id: "pph-m2",
      competency: "management",
      text: "Chooses ergonovine 0.25 mg IM as the second line agent in a normotensive patient.",
      points: 2,
      teaching: "Ergonovine is potent but causes vasoconstriction. Avoid it in hypertension, preeclampsia and with HIV protease inhibitors.",
      source: "sogc-pph",
    },
    {
      id: "pph-m3",
      competency: "management",
      text: "Avoids carboprost because of asthma and uses sublingual rather than rectal misoprostol as an adjunct.",
      points: 2,
      teaching: "Carboprost is a prostaglandin F2 alpha and causes bronchospasm. Rectal misoprostol has the slowest onset and lowest levels.",
      source: "sogc-pph",
    },
    {
      id: "pph-m4",
      competency: "management",
      text: "Performs manual exploration of the uterine cavity with analgesia to remove retained tissue and clots.",
      points: 2,
      teaching: "When tissue is retained, clearing the cavity is often the step that stops the bleeding. Give antibiotics afterwards.",
      source: "sogc-pph",
    },
    {
      id: "pph-m5",
      competency: "management",
      text: "Places a uterine tamponade balloon filled with 300 to 500 mL for ongoing bleeding.",
      points: 1,
      teaching: "Tamponade controls most atonic bleeding that does not respond to drugs and bridges to surgery or transfer.",
      source: "sogc-pph",
    },
    {
      id: "pph-c1",
      competency: "communication",
      text: "Communicates clearly with obstetrics about status and need for the OR, and arranges transfer through CritiCall only if stable.",
      points: 1,
      teaching: "Define the need precisely. Surgery comes first in an unstable patient. Transfer for embolization only when she is stable.",
      source: "sogc-pph",
    },
    {
      id: "pph-c2",
      competency: "communication",
      text: "Updates the partner honestly, including the possibility of hysterectomy, in plain language.",
      points: 1,
      teaching: "Families remember the first conversation. Prepare them for serious outcomes without taking away hope.",
      source: "sogc-pph",
    },
    {
      id: "pph-p1",
      competency: "professionalism",
      text: "Ensures the newborn is assessed and cared for while the mother is being resuscitated.",
      points: 1,
      teaching: "The newborn is a second patient. Assign a clinician to check temperature, feeding and glucose risk.",
      source: "sogc-pph",
    },
    {
      id: "pph-l1",
      competency: "leadership",
      text: "Calls for help early and assigns roles to the ED team and the midwife.",
      points: 2,
      teaching: "Hemorrhage response is a team task. Give the midwife a clear role such as compression or recording blood loss.",
      source: "sogc-pph",
    },
    {
      id: "pph-l2",
      competency: "leadership",
      text: "Leads a debrief including the midwife and reviews protocol activation and communication.",
      points: 1,
      teaching: "SOGC recommends regular multidisciplinary simulation and review of hemorrhage events.",
      source: "sogc-pph",
    },
    {
      id: "pph-d1",
      competency: "disposition",
      text: "Moves an unstable patient to the OR for surgical control rather than transferring her.",
      points: 2,
      teaching: "If drugs and tamponade fail, prompt surgery saves lives. Do not put an unstable patient in an aircraft.",
      source: "sogc-pph",
    },
    {
      id: "pph-d2",
      competency: "disposition",
      text: "Plans postpartum follow up, including VTE prophylaxis once bleeding stops, iron and documentation of totals.",
      points: 1,
      teaching: "Postpartum hemorrhage and transfusion raise VTE risk. Anemia and lactation problems need follow up.",
      source: "cbs-guide",
    },
  ],
  sources: [
    {
      id: "sogc-pph",
      citation: "Robinson D, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 431: Postpartum Hemorrhage and Hemorrhagic Shock. Journal of Obstetrics and Gynaecology Canada. 2022.",
      url: "https://doi.org/10.1016/j.jogc.2022.10.002",
    },
    {
      id: "woman",
      citation:
        "WOMAN Trial Collaborators. Effect of early tranexamic acid administration on mortality, hysterectomy, and other morbidities in women with post-partum haemorrhage (WOMAN). Lancet. 2017.",
      url: "https://doi.org/10.1016/S0140-6736(17)30638-4",
    },
    {
      id: "cbs-guide",
      citation: "Canadian Blood Services. Clinical Guide to Transfusion.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
