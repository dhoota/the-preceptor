// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const melenaWalletCard: OralCase = {
  id: "melena-wallet-card",
  title: "Black stools and a card in his wallet",
  blueprint: "ethics",
  alsoCovers: ["resus", "comm"],
  priorityTopic: "gi-bleed",
  keyFeatures: [{ topic: "gi-bleed", n: 5 }, { topic: "gi-bleed", n: 6 }, { topic: "shock", n: 3 }],
  summary: "A 47 year old man with a bleeding ulcer and a hemoglobin of 64 g/L declines a treatment the team feels he needs.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in Ontario with an ICU, a blood bank, gastroenterology on call and daytime interventional radiology when the following patient arrives. " +
    "A 47 year old man has had black stools for two days and nearly fainted at work this morning.",
  card: {
    vitals: {
      temperature: "36.8°C",
      pulse: "116/minute",
      resp: "20/minute",
      bp: "98/62 mmHg",
      o2sat: "98% on room air",
      weight: "Not recorded",
    },
    medications: "Naproxen 500 mg twice daily for three weeks",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "history",
      label: "History of presenting illness",
      result:
        "Black tarry stools for two days. Nearly fainted at work this morning. Light headed on standing. No hematemesis. " +
        "At triage: capillary glucose 6.0 mmol/L. CTAS 2.",
    },
    {
      id: "nurse",
      label: "The nurse's report",
      result:
        "'His hemoglobin is 64. I went to hang blood and he said no. He is one of Jehovah's Witnesses and has a signed card in his wallet. " +
        "His wife is on the phone. She is not a Witness and she says he has to have the blood.'",
    },
    {
      id: "pmh-meds",
      label: "Past history and medications",
      result: "Takes naproxen 500 mg twice daily for a back strain for three weeks. No liver disease. No anticoagulants.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Drinks two beers a week. He is one of Jehovah's Witnesses. Married with two children.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale and alert. Oriented to person, place and time. Epigastric tenderness without peritonism. Melena on rectal exam. No stigmata of chronic liver disease.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 64 g/L. MCV 88 fL. Platelets 240 x 10^9/L. INR 1.1. Urea 18.4 mmol/L. Creatinine 96 µmol/L. Lactate 2.2 mmol/L. " +
        "Glasgow Blatchford score 14.",
    },
    {
      id: "card",
      label: "The wallet card",
      result:
        "A signed advance medical directive dated eight months ago. It states he refuses transfusion of whole blood, red cells, white cells, platelets and plasma under any circumstances, " +
        "even if doctors believe it is necessary to save his life. It is witnessed by two people and names his brother as the contact.",
    },
    {
      id: "private-talk",
      label: "Private conversation with the patient",
      result:
        "Alone with you, he says the decision is his own and that no one is pressuring him. He accepts albumin, clotting factor concentrates and cell salvage in a continuous circuit. " +
        "He declines red cells, plasma and platelets. He accepts IV iron and erythropoietin.",
    },
    {
      id: "capacity",
      label: "Capacity assessment",
      result:
        "He explains in his own words that he is bleeding from his stomach, that his blood count is dangerously low and that without transfusion he could have a heart attack, stroke or die. " +
        "He says he understands his children could lose their father. His reasons are consistent with his long held values. No delirium, intoxication or psychosis.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "His wife says he joined the faith four years ago and that his brother is an elder. She believes he is afraid of being shunned. " +
        "She says: 'He has two kids. He would want to live. That card is from before he got sick.'",
    },
    {
      id: "endoscopy",
      label: "Endoscopy report",
      result:
        "A 1.5 cm posterior duodenal bulb ulcer with a visible vessel. Treated with dilute epinephrine injection and two clips. No active bleeding at the end of the procedure.",
    },
    {
      id: "repeat-hb",
      label: "Repeat hemoglobin after the rebleed",
      result: "Hemoglobin 48 g/L. Lactate 4.6 mmol/L. Troponin mildly elevated at 58 ng/L.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "He is pale but calm. He hands you his card and says: 'I know what my blood count means. I do not want blood.' The unit of red cells is sitting on the IV pole.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The refusal",
      prompt: "How do you respond to his refusal?",
      seconds: 90,
      modelAnswer: [
        "Take the unit down. Do not give blood to a capable person who refuses it.",
        "Speak with him alone, without family or members of his faith present, to confirm the choice is free.",
        "Give the information a reasonable person would want: the risks of refusing, including death.",
        "Ask exactly which products and procedures he accepts. Many Witnesses accept some fractions or cell salvage.",
        "Confirm the card reflects his current wishes.",
      ],
      rubric: ["jw-p1", "jw-c1", "jw-c2", "jw-h3"],
      choices: [
        {
          id: "c-private",
          label: "I took the unit down, spoke with him alone, explained the risk of death and went through which products he would and would not accept.",
          next: "q-capacity",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. A private conversation checks for pressure without judging his faith. " +
            "Going product by product often uncovers options such as albumin, factor concentrates or cell salvage that he will accept.",
        },
        {
          id: "c-card-only",
          label: "I accepted the card and documented that he refuses all blood products.",
          next: "s-card-only",
          quality: "partial",
          feedback:
            "Respecting the refusal is right. You missed the informed refusal conversation and the product by product discussion. " +
            "The examiner wanted the risks explained and acceptable alternatives identified, in private.",
        },
        {
          id: "c-transfuse",
          label: "I told him his hemoglobin was too low to refuse and asked the nurse to start the blood.",
          next: "s-transfuse",
          quality: "unsafe",
          feedback:
            "Treating a capable adult who refuses is battery, whatever the medical need. In Malette v Shulman the Ontario Court of Appeal upheld damages against a physician who transfused despite a Witness card. " +
            "The examiner wanted the refusal respected and a capacity and informed refusal discussion.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-card-only",
      phase: "Later",
      text:
        "The gastroenterologist asks whether he would accept cell salvage or albumin if surgery is needed. Nobody knows. You go back and have the full conversation with him alone.",
      next: "q-capacity",
    },
    {
      kind: "say",
      id: "s-transfuse",
      phase: "At the bedside",
      text:
        "He pulls his arm away and says clearly that he does not consent. The nurse stops and refuses to proceed. The charge nurse asks you to step out and reconsider. You take the unit down and sit down with him.",
      next: "q-capacity",
    },
    {
      kind: "question",
      id: "q-capacity",
      phase: "Capacity",
      prompt: "How do you decide whether he is capable of this refusal?",
      seconds: 75,
      modelAnswer: [
        "Capacity is presumed under the Ontario Health Care Consent Act.",
        "It is specific to this decision and this time.",
        "He must be able to understand the information relevant to the decision.",
        "He must be able to appreciate the reasonably foreseeable consequences of accepting or refusing.",
        "A decision others disagree with is not evidence of incapacity.",
        "Screen for delirium, intoxication, shock related confusion and coercion. Document his own words.",
      ],
      rubric: ["jw-a1"],
      choices: [
        {
          id: "c-hcca-test",
          label: "I used the Health Care Consent Act test. He understood the information and appreciated that refusing could kill him. I documented his words.",
          next: "q-medical",
          quality: "strong",
          feedback:
            "Correct. The two part test is understanding and appreciation. He meets both. " +
            "Recording his own words is the strongest documentation you can have.",
        },
        {
          id: "c-psych",
          label: "I asked psychiatry to assess his capacity before I accepted the refusal.",
          next: "s-psych",
          quality: "partial",
          feedback:
            "Capacity for a treatment decision is the treating physician's job. Psychiatry helps when mental illness is in question. " +
            "Here the referral delays care. The examiner wanted you to apply the test yourself.",
        },
        {
          id: "c-irrational",
          label: "I found him incapable because refusing life saving treatment is irrational.",
          next: "s-irrational",
          quality: "unsafe",
          feedback:
            "An unwise or unusual choice is not incapacity. The test is whether he can understand and appreciate, not whether you agree. " +
            "Finding him incapable to override his faith would be a serious error.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-psych",
      phase: "One hour later",
      text:
        "The psychiatry resident is in another emergency and will be two hours. His heart rate is now 124. You apply the capacity test yourself and find him capable.",
      next: "q-medical",
    },
    {
      kind: "say",
      id: "s-irrational",
      phase: "The charge nurse",
      text:
        "The charge nurse asks what finding of incapacity you are relying on. He is oriented, understands his condition and can describe the risks. You reassess and find him capable.",
      next: "q-medical",
    },
    {
      kind: "question",
      id: "q-medical",
      phase: "Blood free management",
      prompt: "What is your medical plan without red cells?",
      seconds: 90,
      modelAnswer: [
        "Urgent endoscopy with gastroenterology as soon as he is resuscitated. Do not use the full 24 hour window.",
        "Pantoprazole 80 mg IV bolus then 8 mg/h infusion or high dose intermittent dosing.",
        "Stop naproxen. Judicious crystalloid to perfusion, not to normal pressure.",
        "Minimize blood loss from testing with small volume tubes and fewer draws.",
        "IV iron and erythropoietin, which he accepts. Supplemental oxygen.",
        "Plan early interventional radiology or surgery for rebleeding. Contact the Hospital Liaison Committee for Jehovah's Witnesses if he wishes.",
        "Confirm the history and risk: NSAID use, alcohol, no liver disease, and a Glasgow Blatchford score of 14.",
      ],
      rubric: ["jw-m1", "jw-m2", "jw-h1", "jw-h2", "jw-x1"],
      next: "s-wife",
    },
    {
      kind: "say",
      id: "s-wife",
      phase: "In the family room",
      text:
        "His wife arrives. She is crying and angry. 'That card is from before he got sick. He would want to live for the kids. You are the doctor. Give him the blood or I will call a lawyer.'",
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "The wife",
      prompt: "What do you say to her?",
      seconds: 90,
      modelAnswer: [
        "Check with him first what he wants shared with her.",
        "Acknowledge her fear and love for him. Sit down and listen.",
        "Explain that he is capable and that the decision is legally and ethically his.",
        "Tell her what the team is doing to treat him without blood.",
        "Offer spiritual care and social work, and a joint conversation if he agrees.",
        "Do not argue about faith. Do not promise to transfuse later.",
      ],
      rubric: ["jw-c3", "jw-p2"],
      choices: [
        {
          id: "c-empathy",
          label: "With his permission, I sat with her, acknowledged her fear, explained he is capable and the choice is his, and described everything we are doing without blood.",
          next: "s-rebleed",
          quality: "strong",
          feedback:
            "Well handled. You protected his confidentiality and still supported her. " +
            "Describing the active plan counters the fear that the team has given up.",
        },
        {
          id: "c-law",
          label: "I told her the law says we cannot give blood and there is nothing more to discuss.",
          next: "s-law",
          quality: "partial",
          feedback:
            "The legal point is correct but the delivery shuts her out. She is frightened, not hostile. " +
            "The examiner wanted empathy first, then a clear explanation of his rights and the plan.",
        },
        {
          id: "c-promise",
          label: "I told her that if he becomes unconscious she will be the decision maker and we can give blood then.",
          next: "s-promise",
          quality: "unsafe",
          feedback:
            "This is legally wrong in Ontario. A substitute decision maker must follow a known wish the patient expressed while capable and at 16 or older. " +
            "It also sets up a devastating conflict later. The examiner wanted that explained honestly now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-law",
      phase: "Later",
      text: "She calls the patient relations office and posts that the ED is letting her husband die. The social worker asks to meet with her. You join them and explain the plan with more care.",
      next: "s-rebleed",
    },
    {
      kind: "say",
      id: "s-promise",
      phase: "Later",
      text:
        "The patient overhears. He becomes distressed and asks you to document that no one may ever give him blood. You correct what you told his wife in front of both of them.",
      next: "s-rebleed",
    },
    {
      kind: "say",
      id: "s-rebleed",
      phase: "Six hours later",
      text:
        "Endoscopy treated a duodenal ulcer with a visible vessel. He is back in the ED awaiting an ICU bed. He passes a large maroon stool. " +
        "His pressure is 78/40 and heart rate 134. He is confused and does not know where he is. Repeat hemoglobin is 48 g/L. His wife says: 'Now I decide. Give him the blood.'",
      next: "q-incapable",
    },
    {
      kind: "question",
      id: "q-incapable",
      phase: "He is now incapable",
      prompt: "Can you transfuse him now? What do you do?",
      seconds: 90,
      modelAnswer: [
        "No. He expressed a clear wish while capable and at 16 or older that applies to exactly this situation.",
        "Section 26 of the Health Care Consent Act bars emergency treatment against a known prior capable wish that applies.",
        "His wife as substitute decision maker must also follow that wish.",
        "Maximize everything else: fluid to perfusion, call GI for repeat endoscopy and interventional radiology for embolization, alert surgery.",
        "Under section 36, the Board can allow a departure only if he would probably consent now because the likely result is much better than he expected. That does not fit here and does not change the next hour.",
      ],
      rubric: ["jw-p3", "jw-d1"],
      choices: [
        {
          id: "c-honour",
          label: "I did not transfuse because his prior capable wish applies. I called GI, interventional radiology and surgery for urgent hemostasis.",
          next: "q-document",
          quality: "strong",
          feedback:
            "This is the critical point in the case. A clear prior capable wish binds both you and the substitute decision maker. " +
            "Your energy goes into stopping the bleeding by every accepted route.",
        },
        {
          id: "c-ethics-first",
          label: "I held the blood and paged the ethics consultant to decide before doing anything else.",
          next: "s-ethics-first",
          quality: "partial",
          feedback:
            "Holding the blood is correct. Ethics can support the team later, but it cannot decide for you and must not delay hemostasis. " +
            "The examiner wanted IR, GI and surgery called now.",
        },
        {
          id: "c-emergency-transfuse",
          label: "I transfused under the emergency treatment rule because he is now incapable.",
          next: "s-emergency-transfuse",
          quality: "unsafe",
          feedback:
            "The emergency exception does not apply when you have reasonable grounds to believe the person refused this treatment while capable. " +
            "This would be treatment without consent. The examiner wanted the prior wish honoured.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ethics-first",
      phase: "Fifteen minutes later",
      text: "The ethics consultant returns your page and asks what the hemostasis plan is. You call interventional radiology, who can take him in 20 minutes.",
      next: "q-document",
    },
    {
      kind: "say",
      id: "s-emergency-transfuse",
      phase: "At the bedside",
      text:
        "The nurse holds up the wallet card and refuses to hang the unit. She calls the charge nurse. You stop, re read the card and call interventional radiology.",
      next: "q-document",
    },
    {
      kind: "question",
      id: "q-document",
      phase: "Documentation",
      prompt: "What do you document, and who else needs to know?",
      seconds: 60,
      modelAnswer: [
        "The capacity assessment with his own words and the time.",
        "The information given, including the risk of death.",
        "The products he accepts and declines, and the card with its date.",
        "The conversation with his wife and what was shared with his permission.",
        "Hand over to ICU, GI and IR so the refusal is not missed at shift change.",
        "Call the CMPA for advice if you are unsure.",
      ],
      rubric: ["jw-p4", "jw-c4"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition and the team",
      prompt: "Interventional radiology has embolized the gastroduodenal artery. Where does he go, and what do you do for his nurse, who stopped the transfusion when he refused and is now upset?",
      seconds: 60,
      modelAnswer: [
        "ICU admission with blood conservation orders on the chart.",
        "Continue IV iron, erythropoietin and small volume tubes.",
        "Thank the nurse. She stopped when he refused and raised it, which was the right safety check.",
        "Hold a brief team debrief. Moral distress is common when a patient refuses life saving care.",
      ],
      rubric: ["jw-d2", "jw-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is admitted to the ICU. His hemoglobin nadir is 41 g/L. He survives without transfusion. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "jw-p1",
      competency: "professionalism",
      criterion: "management",
      text: "Does not transfuse a capable adult who refuses.",
      points: 3,
      critical: true,
      teaching: "A capable adult may refuse any treatment, even life saving treatment. Treating anyway is battery.",
      source: "malette",
    },
    {
      id: "jw-c1",
      competency: "communication",
      criterion: "history",
      text: "Speaks with him privately to confirm the choice is free of pressure.",
      points: 2,
      teaching: "Ask without family or members of the faith present. Do not challenge his beliefs.",
      source: "cmpa",
    },
    {
      id: "jw-c2",
      competency: "communication",
      criterion: "management",
      text: "Explains the risks of refusal including death and clarifies acceptable products one by one.",
      points: 2,
      teaching: "An informed refusal needs the same information as informed consent. Acceptable fractions and cell salvage vary between individuals.",
      source: "cpso",
    },
    {
      id: "jw-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Applies the Health Care Consent Act capacity test of understanding and appreciation.",
      points: 3,
      critical: true,
      teaching: "Capacity is presumed and decision specific. An unwise choice is not proof of incapacity.",
      source: "hcca",
    },
    {
      id: "jw-m1",
      competency: "management",
      criterion: "management",
      text: "Arranges urgent endoscopy and gives pantoprazole 80 mg IV bolus.",
      points: 2,
      teaching: "With no transfusion option, early hemostasis is the priority. High dose PPI reduces rebleeding after endoscopic therapy.",
      source: "icg",
    },
    {
      id: "jw-m2",
      competency: "management",
      criterion: "management",
      text: "Uses blood conservation measures such as small volume tubes, IV iron, erythropoietin and early IR or surgical planning.",
      points: 2,
      teaching: "Every millilitre counts. Plan the next step for rebleeding before it happens.",
      source: "icg",
    },
    {
      id: "jw-c3",
      competency: "communication",
      criterion: "process",
      text: "Responds to the wife with empathy, shares information with his permission and explains his rights and the plan.",
      points: 2,
      teaching: "Families need to hear that refusal of one treatment is not refusal of care. Confirm what the patient allows you to share.",
      source: "cpso",
    },
    {
      id: "jw-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Does not promise the wife that blood can be given once he is incapable.",
      points: 1,
      teaching: "A substitute decision maker must follow a known prior capable wish that applies to the circumstances.",
      source: "hcca",
    },
    {
      id: "jw-p3",
      competency: "professionalism",
      criterion: "management",
      text: "Honours the prior capable wish when he becomes incapable and does not use the emergency exception to transfuse.",
      points: 3,
      critical: true,
      teaching: "In Ontario, emergency treatment is not allowed against a wish the person expressed while capable and at least 16 years old.",
      source: "hcca",
    },
    {
      id: "jw-d1",
      competency: "disposition",
      criterion: "management",
      text: "Calls GI, interventional radiology and surgery urgently for hemostasis on rebleeding.",
      points: 2,
      teaching: "Embolization or surgery is the life saving step when blood is not an option. Call early.",
      source: "icg",
    },
    {
      id: "jw-p4",
      competency: "professionalism",
      criterion: "process",
      text: "Documents capacity, information given, his words, accepted products and the card.",
      points: 1,
      teaching: "Good documentation protects the patient's wishes across shift changes and protects the team.",
      source: "cmpa",
    },
    {
      id: "jw-c4",
      competency: "communication",
      criterion: "process",
      text: "Hands over the refusal and accepted products to ICU, GI and IR.",
      points: 1,
      teaching: "Refusals get lost at transitions. Say it out loud and put it in the orders.",
      source: "cmpa",
    },
    {
      id: "jw-d2",
      competency: "disposition",
      criterion: "process",
      text: "Admits to ICU with blood conservation orders.",
      points: 1,
      teaching: "Severe anemia without transfusion needs close monitoring for ischemia and rebleeding.",
      source: "icg",
    },
    {
      id: "jw-l1",
      competency: "leadership",
      criterion: "process",
      text: "Supports the nurse and leads a brief team debrief.",
      points: 1,
      teaching: "Watching a patient refuse life saving care causes moral distress. Naming it helps the team.",
      source: "cpso",
    },
    {
      id: "jw-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the bleed: how long the melena has lasted, hematemesis, syncope, and prior ulcer or liver disease.",
      points: 2,
      teaching: "Syncope and two days of melena point to a large upper GI bleed. Liver disease would change the likely source and the plan.",
      source: "icg",
    },
    {
      id: "jw-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about NSAID, antiplatelet, anticoagulant and alcohol use.",
      points: 2,
      teaching: "NSAIDs are a leading cause of peptic ulcer bleeding. Stopping the culprit drug is part of hemostasis.",
      source: "icg",
    },
    {
      id: "jw-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks when the card was signed and whether it still reflects his current wishes.",
      points: 1,
      teaching: "A prior wish binds only if it was made while capable and applies to the situation. Confirm it now, while he can still tell you.",
      source: "hcca",
    },
    {
      id: "jw-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for shock, melena on rectal exam and stigmata of liver disease, and uses the Glasgow Blatchford score to rate the risk.",
      points: 2,
      teaching: "A Glasgow Blatchford score of 14 marks a high risk bleed that needs urgent endoscopy. Without transfusion there is even less margin.",
      source: "icg",
    },
  ],
  sources: [
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996. SO 1996, c 2, Sched A. Sections 4, 21, 26 and 36.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
    {
      id: "cpso",
      citation: "College of Physicians and Surgeons of Ontario. Consent to Treatment. Policy. Updated 2025.",
      url: "https://www.cpso.on.ca/physicians/policies-guidance/policies/consent-to-treatment",
    },
    {
      id: "malette",
      citation: "Malette v Shulman (1990), 72 OR (2d) 417. Ontario Court of Appeal.",
      url: "https://www.canlii.org/en/on/onca/doc/1990/1990canlii6868/1990canlii6868.html",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Consent. A guide for Canadian physicians. Fourth edition. Revised 2024.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians",
    },
    {
      id: "icg",
      citation:
        "Barkun AN, et al. Management of nonvariceal upper gastrointestinal bleeding. Guideline recommendations from the International Consensus Group. Annals of Internal Medicine. 2019.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
