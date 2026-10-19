// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const ladderFallAnkleSedation: OralCase = {
  id: "ladder-fall-ankle-sedation",
  title: "Cleaning the eavestrough",
  blueprint: "procedures",
  alsoCovers: ["resus", "trauma"],
  priorityTopic: "anaphylaxis",
  keyFeatures: [
    { topic: "anaphylaxis", n: 1 },
    { topic: "anaphylaxis", n: 2 },
    { topic: "anaphylaxis", n: 3 },
    { topic: "anaphylaxis", n: 4 },
  ],
  summary: "A woman with an ankle fracture dislocation needs an urgent reduction under procedural sedation. Partway through, the monitor alarms.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 41 year old woman arrives by ambulance after a fall from a ladder. Her right ankle is deformed, her foot is pale, and there is a small wound over the inner ankle.",
  card: {
    vitals: {
      temperature: "36.6°C oral",
      pulse: "104/minute",
      resp: "18/minute",
      bp: "138/84 mmHg",
      o2sat: "98% on room air",
      weight: "82 kg (181 lb)",
    },
    medications: "Sertraline, salbutamol inhaler as needed",
    allergies: "Amoxicillin (rash in childhood)",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "At 14:00 she fell about 1.5 m from a ladder while cleaning the eavestrough and landed on her right foot, which twisted under her. No head strike, no loss of consciousness, no neck or back pain. " +
        "Her foot has felt cold and numb since the fall. Paramedics gave fentanyl 100 mcg IN.",
    },
    {
      id: "allergy",
      label: "Allergy history in detail",
      result:
        "At age 6 she had itchy spots on her trunk on day 5 of amoxicillin for an ear infection. No swelling, breathing trouble or blistering. She has not had a penicillin or a cephalosporin since. No food or latex allergy that she knows of.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Mild asthma. She uses salbutamol two or three times a month and has never been admitted for it. Depression, well controlled. She has never had a general anesthetic or procedural sedation.",
    },
    {
      id: "meds",
      label: "Medications and last oral intake",
      result: "Sertraline 100 mg daily. Salbutamol 100 mcg inhaler as needed. No beta blocker or ACE inhibitor. Toast at 07:00 and a coffee at 12:30.",
    },
    {
      id: "social",
      label: "Social and occupational history",
      result:
        "Dental hygienist. Last year her hands became itchy and blotchy for a few weeks after the clinic switched to a new surgical hand scrub. It settled when she wore gloves. Lives with her husband. Does not smoke. Drinks occasionally.",
    },
    {
      id: "ankle",
      label: "Right ankle and foot",
      result:
        "Obvious deformity with the foot displaced laterally. A 1.5 cm wound over the medial malleolus oozing blood with fat droplets. Foot pale and cool. Capillary refill 4 seconds. " +
        "Dorsalis pedis not palpable. Faint posterior tibial signal on Doppler. Reduced sensation on the sole.",
    },
    {
      id: "survey",
      label: "Secondary survey",
      result: "No other injuries. Chest clear. Abdomen soft. Spine not tender. GCS 15.",
    },
    {
      id: "airway",
      label: "Pre sedation airway assessment",
      result: "Mallampati class 2. Full neck movement. Normal mouth opening. No beard. ASA class 2. No wheeze at rest.",
    },
    {
      id: "xray",
      label: "Ankle X rays",
      result: "Trimalleolar fracture with lateral dislocation of the talus.",
    },
    {
      id: "sedation-record",
      label: "Sedation record",
      result:
        "15:38 Wound and surrounding skin cleaned with chlorhexidine 2% in alcohol. 15:40 Cefazolin 2 g IV over 3 minutes, the first antibiotic dose. 15:43 Fentanyl 50 mcg IV. " +
        "15:44 Propofol 60 mg IV, then 20 mg at 15:46. 15:47 Ankle reduced. 15:48 Monitor alarm.",
    },
    {
      id: "reaction",
      label: "Exam at 15:49",
      result:
        "Pulse 132. BP 72/38 mmHg. Resp 28. SpO2 87% on 4 L. End tidal CO2 22 mmHg with a sloped waveform. Loud wheeze in both lungs. " +
        "Under the sheet: blotchy red flushing over the chest and neck. Lips slightly swollen. She is groaning and not following commands.",
    },
    {
      id: "foot-after",
      label: "Foot after reduction",
      result: "Foot pink. Capillary refill 2 seconds. Dorsalis pedis palpable. Post reduction X ray shows the talus back in the mortise.",
    },
    {
      id: "tryptase",
      label: "Tryptase results",
      result: "At 16:50, 1 hour after onset: 28.6 mcg/L. Baseline the next afternoon: 4.2 mcg/L. Laboratory reference under 11.4 mcg/L.",
    },
    {
      id: "husband",
      label: "Her husband",
      result: "\"She has never reacted like this to anything. She's had freezing at the dentist lots of times. Was it the drugs you gave her?\"",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "15:05",
      text: "She is in a resus bay. Her foot is pale. The orthopedic surgeon is in the operating room for the next 3 hours and asks you to reduce the ankle now.",
      next: "q-assess",
    },
    {
      kind: "question",
      id: "q-assess",
      phase: "Before the procedure",
      prompt: "You plan a reduction under procedural sedation. What do you want to know and check before you start?",
      seconds: 90,
      modelAnswer: [
        "Mechanism, time, other injuries, and how long the foot has been pale and numb.",
        "Neurovascular exam of the foot. A pale pulseless foot needs reduction now.",
        "Detailed allergy history. A remote mild rash on amoxicillin is a low risk history and does not rule out cefazolin.",
        "Asthma severity and control. Beta blockers and ACE inhibitors. Any past reactions to anesthesia, dental freezing, latex or skin antiseptics.",
        "Her hand rash at work after a new scrub is worth noting. Ask what was in it.",
        "Last oral intake, airway assessment, ASA class, consent, and a second physician or trained person for the sedation.",
        "First antibiotic dose for the open fracture and tetanus status.",
      ],
      rubric: ["an-h1", "an-h2", "an-h3"],
      next: "s-sedation",
    },
    {
      kind: "say",
      id: "s-sedation",
      phase: "15:48",
      text:
        "The wound is cleaned, cefazolin 2 g IV is given, and she is sedated with fentanyl and propofol. One minute after a successful reduction the monitor alarms. " +
        "BP 72/38, pulse 132, SpO2 87 percent. She is wheezing. The respiratory therapist says: \"That's the propofol. Want some phenylephrine and a salbutamol puffer?\"",
      next: "q-crisis",
    },
    {
      kind: "question",
      id: "q-crisis",
      phase: "The alarm",
      prompt: "What is happening and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Hypotension and bronchospasm within minutes of new drugs and an antiseptic is anaphylaxis until proven otherwise. A rash may be hidden or absent.",
        "Pull back the sheet and look at the skin. Flushing on the chest and swollen lips confirm it.",
        "Call for help. Stop any further drugs. Lay her flat with legs raised.",
        "Epinephrine 0.5 mg IM in the anterolateral thigh now, repeated every 5 minutes as needed. IV boluses of 20 to 50 mcg are an option only in a monitored patient with an experienced clinician.",
        "High flow oxygen. Rapid crystalloid, 20 mL/kg, about 1.6 L, through two large IVs.",
        "Other causes to keep in mind: propofol and opioid effects, asthma, hypovolemia and a cardiac event. None explain both the wheeze and the timing as well.",
      ],
      rubric: ["an-p1", "an-p2", "an-m1", "an-m2"],
      choices: [
        {
          id: "c-epi",
          label:
            "I called it anaphylaxis, pulled back the sheet and saw flushing, gave epinephrine 0.5 mg IM in the thigh, laid her flat, put her on high flow oxygen and ran 20 mL/kg of crystalloid through two lines.",
          next: "s-turn",
          quality: "strong",
          feedback:
            "Correct. Hypotension is the most common first sign of anaphylaxis during sedation and anesthesia, and the rash is easy to miss under drapes. " +
            "Epinephrine is the only first line drug. Delay is the main reason these reactions go badly. " +
            "In a monitored sedation setting, an experienced clinician may instead give IV boluses of 50 mcg, as anesthesia guidance advises.",
        },
        {
          id: "c-pressor",
          label: "I agreed it was the propofol. I gave phenylephrine 100 mcg IV, a fluid bolus and salbutamol, and waited for her to wake up.",
          next: "s-pressor",
          quality: "partial",
          feedback:
            "Propofol does lower BP, but it does not cause wheeze, flushing or lip swelling. Anchoring on the sedative delays epinephrine. " +
            "The examiner wanted anaphylaxis recognized and epinephrine 0.5 mg IM given at once.",
        },
        {
          id: "c-antihistamine",
          label: "I gave diphenhydramine 50 mg IV and methylprednisolone 125 mg IV and watched her closely.",
          next: "s-antihistamine",
          quality: "unsafe",
          feedback:
            "Antihistamines and steroids do not treat hypotension or bronchospasm and should not replace or delay epinephrine. " +
            "A BP of 72/38 with wheeze needs epinephrine 0.5 mg IM now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-pressor",
      phase: "15:53",
      text:
        "Her BP is 64/34 and her saturation 84 percent. The nurse lifts the sheet to place a second IV and says, \"Look at her chest.\" The skin is bright red and her lips are swelling. You give epinephrine 0.5 mg IM and open the fluid wide.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-antihistamine",
      phase: "15:55",
      text:
        "Her BP is 58/30. The nurse cannot feel a radial pulse and asks whether to start compressions. You give epinephrine 0.5 mg IM and open the fluid wide. Her BP comes up to 70/40.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-turn",
      phase: "16:00",
      text:
        "She has had two IM doses of epinephrine 5 minutes apart and 1.6 L of crystalloid. BP 78/44, pulse 128. She is still wheezing. Her lips are a little more swollen but her voice is normal and there is no stridor.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Not responding",
      prompt: "She is not responding well. What now, and how do you run the room?",
      seconds: 75,
      modelAnswer: [
        "Start an epinephrine infusion through a dedicated IV after two IM doses fail. One protocol uses 1 mg in 100 mL at 0.5 to 1 mL/kg/h, about 0.1 to 0.2 mcg/kg/min, or 40 to 80 mL/h for her. Start at the higher rate when hypotensive and titrate every 5 to 10 minutes.",
        "More crystalloid with reassessment. Anaphylaxis shifts large volumes out of the vessels.",
        "If systolic BP falls below 50, start CPR even without arrest.",
        "Nebulized salbutamol for persistent wheeze after epinephrine.",
        "Watch the airway. Most experienced person to manage it, with a difficult airway plan ready.",
        "Antihistamines for skin symptoms are adjuncts only, never instead of epinephrine. Routine steroids are no longer advised.",
        "Assign roles out loud: airway, drugs, fluids, recorder. Closed loop orders. Call ICU.",
      ],
      rubric: ["an-m3", "an-m4", "an-pr1"],
      choices: [
        {
          id: "c-infusion",
          label:
            "I started an epinephrine infusion on a pump through its own line and titrated it to BP, gave more crystalloid, nebulized salbutamol, assigned roles and called the ICU and anesthesia.",
          next: "s-stable",
          quality: "strong",
          feedback:
            "Good. Persistent shock after two IM doses and fluid calls for an epinephrine infusion. " +
            "Clear roles and closed loop orders keep a crisis safe. Calling anesthesia early protects the airway if swelling progresses.",
        },
        {
          id: "c-norepi",
          label: "I started norepinephrine because it is the vasopressor I use most.",
          next: "s-norepi",
          quality: "partial",
          feedback:
            "Norepinephrine raises BP but does nothing for bronchospasm or mast cell release. " +
            "Epinephrine is the drug of choice for refractory anaphylaxis. Other pressors are added only if epinephrine and fluids fail.",
        },
        {
          id: "c-bolus",
          label: "I gave epinephrine 1 mg IV push from the crash cart.",
          next: "s-bolus",
          quality: "unsafe",
          feedback:
            "A 1 mg IV bolus is a cardiac arrest dose. In a patient with a pulse it can cause severe hypertension, ventricular arrhythmias and myocardial ischemia. " +
            "Use an infusion, or small titrated boluses of 20 to 50 mcg in experienced hands.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-norepi",
      phase: "16:15",
      text: "Her BP improves a little but the wheeze gets worse and her saturation drops to 88 percent. The anesthetist arrives and asks for an epinephrine infusion. You start one.",
      next: "s-stable",
    },
    {
      kind: "say",
      id: "s-bolus",
      phase: "16:02",
      text:
        "Her BP jumps to 220/130 and she has a run of ventricular tachycardia that stops on its own. She has crushing chest pain for 10 minutes. You start an epinephrine infusion at a low rate and get a 12 lead ECG.",
      next: "s-stable",
    },
    {
      kind: "say",
      id: "s-stable",
      phase: "16:30",
      text:
        "On the infusion her BP is 104/62 and the wheeze is settling. Her foot is pink with a palpable pulse. She is awake and asking what happened. You look again at the sedation record.",
      next: "q-culprit",
    },
    {
      kind: "question",
      id: "q-culprit",
      phase: "What caused it",
      prompt: "Review the sedation record. What could have caused this, and why does it matter now?",
      seconds: 60,
      modelAnswer: [
        "Every exposure in the hour before the reaction is a suspect: chlorhexidine, cefazolin, fentanyl and propofol.",
        "Antibiotics are the most common cause of anaphylaxis around anesthesia. Cefazolin was given 8 minutes before.",
        "Chlorhexidine is a hidden cause. Her hand rash after a new scrub at work may have been sensitization.",
        "Fentanyl and propofol are less likely but cannot be cleared at the bedside.",
        "Her childhood amoxicillin rash does not tell you that cefazolin was the cause.",
        "The culprit will be found only by allergy testing. Until then, avoid all of them.",
      ],
      rubric: ["an-h4"],
      next: "s-ortho",
    },
    {
      kind: "say",
      id: "s-ortho",
      phase: "17:00",
      text:
        "The orthopedic surgeon wants to take her for washout and fixation tonight. He asks you: \"Which antibiotic should she get, and is there anything anesthesia needs to know?\"",
      next: "q-ortho",
    },
    {
      kind: "question",
      id: "q-ortho",
      phase: "Back to the open fracture",
      prompt: "What do you tell him?",
      seconds: 75,
      modelAnswer: [
        "She had anaphylaxis needing an epinephrine infusion within an hour. Ideally the operation waits until she is stable off the infusion, unless the limb is at risk.",
        "Avoid every drug and product she received in the hour before the reaction until she has been tested.",
        "Until testing, avoid cefazolin and, to be safe, other beta lactams. Choose a non beta lactam for the open fracture with pharmacy or microbiology, such as clindamycin. Its gram negative cover is weaker, so ask what the wound needs.",
        "No chlorhexidine skin prep or chlorhexidine coated lines. Use povidone iodine.",
        "Anesthesia should avoid propofol and fentanyl if possible and choose agents with a lower risk.",
        "Flag the chart and her wristband.",
      ],
      rubric: ["an-m5", "an-pr6"],
      choices: [
        {
          id: "c-avoid-all",
          label:
            "I told him to avoid every exposure from the hour before the reaction: no beta lactams, no chlorhexidine and different sedation agents. We agreed on a non beta lactam with pharmacy, and I flagged her chart.",
          next: "q-tryptase",
          quality: "strong",
          feedback:
            "Correct. Until allergy testing names the culprit, every agent given in the hour before the reaction must be avoided. " +
            "Chlorhexidine is easy to forget because it hides in skin prep, line coatings and urethral gels. " +
            "Avoiding all beta lactams is the cautious choice. Cefazolin has a unique side chain, so some allergists would allow a dissimilar beta lactam, but that call belongs to the allergist.",
        },
        {
          id: "c-cefazolin-only",
          label: "I told him to avoid cefazolin and the other cephalosporins. Everything else was fine to use.",
          next: "s-cefazolin-only",
          quality: "partial",
          feedback:
            "Cefazolin is a strong suspect, but it is not proven. Chlorhexidine, fentanyl and propofol were all given in the same hour. " +
            "The examiner wanted all of them avoided, especially chlorhexidine given her hand rash at work.",
        },
        {
          id: "c-propofol",
          label: "I told him it was a propofol reaction and that cefazolin was fine to give again.",
          next: "s-propofol",
          quality: "unsafe",
          feedback:
            "There is no bedside test that tells you which drug caused it. Re-exposing her to a possible culprit during surgery could cause a second, worse reaction. " +
            "Avoid every agent from the hour before until testing is done.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-cefazolin-only",
      phase: "20:30",
      text:
        "In the operating room the circulating nurse opens a chlorhexidine skin prep. The anesthetist reads your note, sees the list of exposures and stops her. They use povidone iodine instead.",
      next: "q-tryptase",
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "17:20",
      text: "The pharmacist reviews the order for cefazolin and calls you. She asks how the culprit was identified. You cancel the order and write a full avoidance list.",
      next: "q-tryptase",
    },
    {
      kind: "question",
      id: "q-tryptase",
      phase: "Tests and disposition",
      prompt: "What tests confirm what happened, and where does she go?",
      seconds: 60,
      modelAnswer: [
        "Serum tryptase 1 to 2 hours after onset, when it peaks, and a baseline level at least 24 hours later.",
        "A rise above 1.2 times baseline plus 2 supports mast cell activation. Here 28.6 is far above 1.2 x 4.2 + 2, about 7.",
        "A normal tryptase does not exclude anaphylaxis.",
        "ECG and troponin if there was chest pain or a large epinephrine dose.",
        "Admit to ICU while on the infusion. She needs close monitoring for a return of symptoms. About half of biphasic reactions occur in the first 6 to 12 hours.",
      ],
      rubric: ["an-p3", "an-pr2"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Her husband",
      prompt: "Her husband asks: \"Was it the drugs you gave her? Will this happen again?\" What do you tell them both?",
      seconds: 60,
      modelAnswer: [
        "She had anaphylaxis, a severe allergic reaction, to something given during the procedure.",
        "We do not yet know which one. It could be the antibiotic, the skin antiseptic or one of the sedation drugs.",
        "Her childhood rash was low risk and cefazolin is usually safe in that situation. Reactions like this are rare and usually not predictable.",
        "Until testing, she must avoid all of them. Tell every doctor, dentist and pharmacist. Consider a medical alert bracelet.",
        "Referral to an allergist for testing. Bring the list of exposures with times.",
        "Mention the hand scrub at work. Chlorhexidine is also in mouthwashes, wipes and skin cleansers, so she may meet it outside hospital. Prescribe an epinephrine autoinjector at discharge and teach her when to use it.",
      ],
      rubric: ["an-pr3"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "Afterwards",
      prompt: "What do you document and report, and what do you take to your team?",
      seconds: 60,
      modelAnswer: [
        "Document every agent with its time, the reaction, treatment and tryptase results.",
        "Add the suspected agents to her allergy list in the chart, not just cefazolin.",
        "Referral to allergy with the full exposure list from at least the 2 hours before.",
        "Report the serious adverse drug reaction as your hospital and regulator require.",
        "Team debrief. What went well, and how long it took to recognize.",
        "An anaphylaxis kit and protocol in the sedation area, with tryptase tubes and a referral form, and regular drills.",
      ],
      rubric: ["an-pr4", "an-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She comes off the infusion at 22:00 and has her washout and fixation the next morning with povidone iodine and clindamycin. Allergy testing 6 weeks later is positive for chlorhexidine and negative for cefazolin. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "an-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes a detailed allergy history: the type and timing of the childhood amoxicillin rash, and any reactions to foods, latex, dental freezing or skin antiseptics.",
      points: 2,
      teaching: "A detailed allergy history before sedation guides drug choice. Antibiotics are the most common cause of anaphylaxis around anesthesia.",
      source: "nap6",
    },
    {
      id: "an-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about asthma severity and control, beta blockers, ACE inhibitors and past reactions to anesthesia or sedation.",
      points: 2,
      teaching: "Asthma is a risk factor for severe anaphylaxis. Beta blockers and ACE inhibitors can make reactions worse and harder to treat.",
      source: "wao",
    },
    {
      id: "an-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about occupational exposures and learns of the hand rash after a new surgical scrub at work.",
      points: 1,
      teaching: "Health care workers can become sensitized to chlorhexidine. It is a hidden cause of anaphylaxis around procedures.",
      source: "nap6",
    },
    {
      id: "an-h4",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the sedation record and lists every drug and product given in the hour before the reaction, with times.",
      points: 2,
      teaching: "Any agent given in the hour before a reaction is a suspect. Most antibiotic reactions begin within 10 minutes of the dose.",
      source: "nap6",
    },
    {
      id: "an-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes anaphylaxis from hypotension and bronchospasm minutes after new exposures, uncovers the skin, and does not wait for a rash.",
      points: 2,
      critical: true,
      teaching: "Hypotension is the most common first feature of anaphylaxis during anesthesia. Skin signs are often hidden or delayed.",
      source: "nap6",
    },
    {
      id: "an-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Considers other causes of hypotension during sedation, such as propofol, opioids, asthma, hypovolemia and a cardiac event, and explains why anaphylaxis fits best.",
      points: 2,
      teaching: "Sedatives cause hypotension but not wheeze, flushing and lip swelling. Anaphylaxis is an uncommon cause of hypotension during anesthesia, so it must be actively considered.",
      source: "nap6",
    },
    {
      id: "an-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Orders tryptase 1 to 2 hours after onset and a baseline level after 24 hours, and interprets the rise.",
      points: 1,
      teaching: "Tryptase peaks 1 to 2 hours after onset. A rise above 1.2 times baseline plus 2 supports mast cell activation, but a normal value does not exclude anaphylaxis.",
      source: "golden",
    },
    {
      id: "an-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives epinephrine 0.5 mg IM in the anterolateral thigh at once and repeats every 5 minutes as needed, or small titrated IV boluses only with monitoring and an experienced clinician.",
      points: 3,
      critical: true,
      teaching: "IM epinephrine 0.01 mg/kg to a maximum of 0.5 mg in adults is first line. IV bolus epinephrine carries a risk of fatal arrhythmia outside monitored, experienced hands.",
      source: "wao",
    },
    {
      id: "an-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Calls for help, stops further drugs, lays her flat, gives high flow oxygen and a rapid 20 mL/kg crystalloid challenge.",
      points: 2,
      teaching: "Anaphylaxis causes a large fall in effective blood volume. Inadequate fluid was a common gap in an audit of perioperative anaphylaxis.",
      source: "nap6",
    },
    {
      id: "an-m3",
      competency: "management",
      criterion: "management",
      text: "Starts an epinephrine infusion through a dedicated line when IM doses and fluid fail, and starts CPR if systolic BP falls below 50.",
      points: 2,
      teaching: "Start an IV epinephrine infusion when problems persist after two IM doses. In perioperative anaphylaxis, start chest compressions if the systolic stays below 50 even with a pulse.",
      source: "rcuk",
    },
    {
      id: "an-m4",
      competency: "management",
      criterion: "management",
      text: "Uses antihistamines and steroids only as adjuncts after epinephrine, and keeps epinephrine as the drug for refractory anaphylaxis.",
      points: 1,
      teaching: "Antihistamines only help skin symptoms and must not delay repeat epinephrine. Routine corticosteroids are no longer advised.",
      source: "wao",
    },
    {
      id: "an-m5",
      competency: "management",
      criterion: "management",
      text: "Advises avoiding every agent from the hour before the reaction, including chlorhexidine and all beta lactams, and agrees on a non beta lactam antibiotic for the open fracture.",
      points: 2,
      critical: true,
      teaching: "Until allergy testing, avoid all drugs and products given before the reaction and all antibiotics of the same class. Discuss the antibiotic choice with microbiology or pharmacy, and let the allergist decide later about dissimilar beta lactams.",
      source: "nap6",
    },
    {
      id: "an-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Takes charge of the crisis: assigns roles out loud, uses closed loop orders and calls ICU and anesthesia early.",
      points: 2,
      teaching: "Departments should have a protocol for perioperative anaphylaxis and practise it. Clear leadership shortens time to epinephrine.",
      source: "nap6",
    },
    {
      id: "an-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Admits to ICU while on the infusion and plans close monitoring for a return of symptoms.",
      points: 1,
      teaching: "Severe reactions and those needing repeated epinephrine need observation. About half of biphasic reactions occur in the first 6 to 12 hours.",
      source: "wao",
    },
    {
      id: "an-pr3",
      competency: "communication",
      criterion: "process",
      text: "Explains to her and her husband what happened, that the culprit is not yet known, what to avoid, that she will be referred to an allergist, and that she will go home with an epinephrine autoinjector.",
      points: 2,
      teaching: "Everyone who has had anaphylaxis should see a specialist to identify the trigger and learn prevention. WAO advises an epinephrine autoinjector at discharge, which matters here because chlorhexidine is common outside hospital.",
      source: "wao",
    },
    {
      id: "an-pr4",
      competency: "professionalism",
      criterion: "process",
      text: "Documents every exposure with times, adds all suspected agents to the allergy record, reports the serious reaction and refers to allergy with full details.",
      points: 2,
      teaching: "Allergy referral should include every agent the patient received in at least the 2 hours before the reaction and the timeline.",
      source: "nap6",
    },
    {
      id: "an-pr5",
      competency: "leadership",
      criterion: "process",
      text: "Leads a debrief and proposes an anaphylaxis kit, protocol and regular drills for the sedation area.",
      points: 1,
      teaching: "Anaphylaxis packs with tryptase tubes and referral paperwork, plus drills, improve recognition and follow up.",
      source: "nap6",
    },
    {
      id: "an-pr6",
      competency: "communication",
      criterion: "process",
      text: "Gives orthopedics and anesthesia a clear handover of the reaction, the suspect agents and the avoidance plan before the operation.",
      points: 1,
      teaching: "Re-exposure in the operating room is a preventable second reaction. Hand over the full list of suspects, not one favourite.",
      source: "nap6",
    },
  ],
  sources: [
    {
      id: "wao",
      citation: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organization Journal. 2020.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7607509/",
    },
    {
      id: "golden",
      citation: "Golden DBK, Wang J, Waserman S, et al. Anaphylaxis: A 2023 practice parameter update. Annals of Allergy, Asthma and Immunology. 2024.",
      url: "https://doi.org/10.1016/j.anai.2023.09.015",
    },
    {
      id: "nap6",
      citation:
        "Harper NJN, Cook TM, Garcez T, et al. Anaesthesia, surgery, and life-threatening allergic reactions: management and outcomes in the 6th National Audit Project (NAP6). British Journal of Anaesthesia. 2018.",
      url: "https://doi.org/10.1016/j.bja.2018.04.015",
    },
    {
      id: "rcuk",
      citation: "Resuscitation Council UK. Emergency treatment of anaphylaxis: Guidelines for healthcare providers. 2021.",
      url: "https://www.resus.org.uk/library/additional-guidance/guidance-anaphylaxis/emergency-treatment",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
